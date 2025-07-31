/**
 * Plugin Manager - Core orchestration system for the Notable Plugin Architecture
 *
 * This is the central hub that manages plugin lifecycle, security, and API access.
 * It enables Notable to be truly extensible with a robust plugin ecosystem.
 */

import { EventEmitter } from 'events'
import {
  PluginAPI as _PluginAPI,
  PluginDisposable as _PluginDisposable,
  type PluginContext,
  PluginError,
  PluginErrorCode,
  type PluginInstance,
  type PluginManifest,
  type PluginPermission,
  PluginState,
} from '../types/plugin'
import { PluginAPIFactory } from '../api/plugin-api-factory'
import { PluginSandbox } from './plugin-sandbox'
import { PluginStorage } from './plugin-storage'

export interface PluginManagerOptions {
  pluginDirectory: string
  enableSandboxing: boolean
  maxPlugins: number
  resourceLimits: {
    memory: number // MB
    cpu: number // % of single core
    network: number // requests per minute
  }
}

export class PluginManager extends EventEmitter {
  private plugins = new Map<string, PluginInstance>()
  private sandboxes = new Map<string, PluginSandbox>()
  private apiFactory: PluginAPIFactory
  private storage: PluginStorage
  private options: PluginManagerOptions

  constructor(options: Partial<PluginManagerOptions> = {}) {
    super()

    this.options = {
      pluginDirectory: './plugins',
      enableSandboxing: true,
      maxPlugins: 50,
      resourceLimits: {
        memory: 100, // 100MB per plugin
        cpu: 10, // 10% CPU per plugin
        network: 60, // 60 requests per minute
      },
      ...options,
    }

    this.apiFactory = new PluginAPIFactory(this)
    this.storage = new PluginStorage()

    // Global error handling
    this.on('error', this.handlePluginError.bind(this))
  }

  /**
   * Initialize the plugin manager and load all available plugins
   */
  async initialize(): Promise<void> {
    try {
      await this.storage.initialize()
      await this.discoverPlugins()
      await this.loadEnabledPlugins()

      this.emit('initialized')
    } catch (error) {
      this.emit(
        'error',
        new PluginError(
          'Failed to initialize plugin manager',
          'plugin-manager',
          PluginErrorCode.RUNTIME_ERROR,
          { originalError: error }
        )
      )
    }
  }

  /**
   * Install a new plugin from manifest
   */
  async installPlugin(manifest: PluginManifest, source: string): Promise<void> {
    try {
      // Validate manifest
      this.validateManifest(manifest)

      // Check if plugin already exists
      if (this.plugins.has(manifest.id)) {
        throw new PluginError(
          `Plugin ${manifest.id} is already installed`,
          manifest.id,
          PluginErrorCode.RUNTIME_ERROR
        )
      }

      // Check plugin limits
      if (this.plugins.size >= this.options.maxPlugins) {
        throw new PluginError(
          `Maximum plugin limit (${this.options.maxPlugins}) reached`,
          manifest.id,
          PluginErrorCode.RUNTIME_ERROR
        )
      }

      // Create plugin context
      const context = await this.createPluginContext(manifest)

      // Create plugin API
      const api = this.apiFactory.createAPI(manifest, context)

      // Create plugin instance
      const plugin: PluginInstance = {
        manifest,
        state: PluginState.INACTIVE,
        context,
        api,
        async activate() {
          await context.pluginManager.activatePlugin(manifest.id)
        },
        async deactivate() {
          await context.pluginManager.deactivatePlugin(manifest.id)
        },
        async dispose() {
          await context.pluginManager.uninstallPlugin(manifest.id)
        },
      }

      // Store plugin
      this.plugins.set(manifest.id, plugin)

      // Save to storage
      await this.storage.savePlugin(manifest, source)

      this.emit('pluginInstalled', plugin)
    } catch (error) {
      this.handlePluginError(
        error instanceof Error ? error : new Error(String(error))
      )
      throw error
    }
  }

  /**
   * Activate a plugin by ID
   */
  async activatePlugin(pluginId: string): Promise<void> {
    const plugin = this.plugins.get(pluginId)
    if (!plugin) {
      throw new PluginError(
        `Plugin ${pluginId} not found`,
        pluginId,
        PluginErrorCode.RUNTIME_ERROR
      )
    }

    if (plugin.state === PluginState.ACTIVE) {
      return // Already active
    }

    try {
      plugin.state = PluginState.ACTIVATING
      this.emit('pluginActivating', plugin)

      // Create sandbox if enabled
      if (this.options.enableSandboxing) {
        const sandbox = new PluginSandbox(
          plugin.manifest,
          this.options.resourceLimits
        )
        await sandbox.initialize()
        this.sandboxes.set(pluginId, sandbox)
      }

      // Load and execute plugin main file
      await this.loadPluginCode(plugin)

      // Execute activation events
      await this.executeActivationEvents(plugin)

      plugin.state = PluginState.ACTIVE
      plugin.activatedAt = new Date()

      this.emit('pluginActivated', plugin)
    } catch (error) {
      plugin.state = PluginState.ERROR
      plugin.error = error instanceof Error ? error : new Error(String(error))

      this.handlePluginError(
        new PluginError(
          `Failed to activate plugin ${pluginId}`,
          pluginId,
          PluginErrorCode.ACTIVATION_FAILED,
          { originalError: error }
        )
      )

      throw error
    }
  }

  /**
   * Deactivate a plugin by ID
   */
  async deactivatePlugin(pluginId: string): Promise<void> {
    const plugin = this.plugins.get(pluginId)
    if (!plugin) {
      return // Plugin doesn't exist
    }

    if (plugin.state !== PluginState.ACTIVE) {
      return // Not active
    }

    try {
      plugin.state = PluginState.DEACTIVATING
      this.emit('pluginDeactivating', plugin)

      // Dispose all subscriptions
      plugin.context.subscriptions.forEach((disposable) => {
        try {
          disposable.dispose()
        } catch (error) {
          console.warn(`Error disposing plugin subscription:`, error)
        }
      })
      plugin.context.subscriptions.length = 0

      // Cleanup sandbox
      const sandbox = this.sandboxes.get(pluginId)
      if (sandbox) {
        await sandbox.dispose()
        this.sandboxes.delete(pluginId)
      }

      plugin.state = PluginState.INACTIVE
      plugin.activatedAt = undefined

      this.emit('pluginDeactivated', plugin)
    } catch (error) {
      plugin.state = PluginState.ERROR
      plugin.error = error instanceof Error ? error : new Error(String(error))

      this.handlePluginError(
        new PluginError(
          `Failed to deactivate plugin ${pluginId}`,
          pluginId,
          PluginErrorCode.RUNTIME_ERROR,
          { originalError: error }
        )
      )
    }
  }

  /**
   * Uninstall a plugin completely
   */
  async uninstallPlugin(pluginId: string): Promise<void> {
    const plugin = this.plugins.get(pluginId)
    if (!plugin) {
      return // Plugin doesn't exist
    }

    try {
      // Deactivate first if active
      if (plugin.state === PluginState.ACTIVE) {
        await this.deactivatePlugin(pluginId)
      }

      // Remove from storage
      await this.storage.removePlugin(pluginId)

      // Remove from memory
      this.plugins.delete(pluginId)

      this.emit('pluginUninstalled', { pluginId, manifest: plugin.manifest })
    } catch (error) {
      this.handlePluginError(
        new PluginError(
          `Failed to uninstall plugin ${pluginId}`,
          pluginId,
          PluginErrorCode.RUNTIME_ERROR,
          { originalError: error }
        )
      )
      throw error
    }
  }

  /**
   * Get all plugins
   */
  getPlugins(): PluginInstance[] {
    return Array.from(this.plugins.values())
  }

  /**
   * Get active plugins
   */
  getActivePlugins(): PluginInstance[] {
    return this.getPlugins().filter(
      (plugin) => plugin.state === PluginState.ACTIVE
    )
  }

  /**
   * Get plugin by ID
   */
  getPlugin(pluginId: string): PluginInstance | undefined {
    return this.plugins.get(pluginId)
  }

  /**
   * Check if plugin has permission
   */
  hasPermission(pluginId: string, permission: PluginPermission): boolean {
    const plugin = this.plugins.get(pluginId)
    if (!plugin) return false

    return plugin.manifest.permissions.includes(permission)
  }

  /**
   * Dispose all plugins and cleanup
   */
  async dispose(): Promise<void> {
    const promises = Array.from(this.plugins.keys()).map((pluginId) =>
      this.deactivatePlugin(pluginId).catch((error) =>
        console.warn(`Error deactivating plugin ${pluginId}:`, error)
      )
    )

    await Promise.all(promises)

    // Cleanup sandboxes
    for (const sandbox of this.sandboxes.values()) {
      await sandbox
        .dispose()
        .catch((error) => console.warn(`Error disposing sandbox:`, error))
    }
    this.sandboxes.clear()

    this.plugins.clear()
    await this.storage.dispose()

    this.emit('disposed')
  }

  // Private helper methods

  private validateManifest(manifest: PluginManifest): void {
    if (!manifest.id || !manifest.name || !manifest.version) {
      throw new PluginError(
        'Plugin manifest must have id, name, and version',
        manifest.id || 'unknown',
        PluginErrorCode.INVALID_MANIFEST
      )
    }

    if (!manifest.main) {
      throw new PluginError(
        'Plugin manifest must specify main entry point',
        manifest.id,
        PluginErrorCode.INVALID_MANIFEST
      )
    }

    if (!Array.isArray(manifest.permissions)) {
      throw new PluginError(
        'Plugin manifest must specify permissions array',
        manifest.id,
        PluginErrorCode.INVALID_MANIFEST
      )
    }
  }

  private async createPluginContext(
    manifest: PluginManifest
  ): Promise<PluginContext> {
    // Fix: Add await to make this properly async
    await Promise.resolve()
    const pluginPath = `${this.options.pluginDirectory}/${manifest.id}`
    const storageUri = `plugins/${manifest.id}`

    return {
      pluginId: manifest.id,
      pluginPath,
      storageUri,
      workspaceState: this.storage.getWorkspaceStorage(manifest.id),
      globalState: this.storage.getGlobalStorage(manifest.id),
      subscriptions: [],
      pluginManager: this, // Add reference for lifecycle methods

      asAbsolutePath(relativePath: string): string {
        return `${pluginPath}/${relativePath}`
      },
    }
  }

  private async discoverPlugins(): Promise<void> {
    // TODO: Implement plugin discovery from filesystem/marketplace
    // This would scan the plugin directory for manifest files
  }

  private async loadEnabledPlugins(): Promise<void> {
    // TODO: Load plugins that were previously enabled
    const enabledPlugins = await this.storage.getEnabledPlugins()

    for (const pluginId of enabledPlugins) {
      try {
        await this.activatePlugin(pluginId)
      } catch (error) {
        console.warn(`Failed to load enabled plugin ${pluginId}:`, error)
      }
    }
  }

  private async loadPluginCode(_plugin: PluginInstance): Promise<void> {
    // Fix: Add await to make this properly async
    await Promise.resolve()
    // TODO: Implement safe plugin code loading
    // This would load the plugin's main file in a controlled environment
    // For now, this is a placeholder that would use dynamic imports
    // with proper sandboxing and security checks
  }

  private async executeActivationEvents(
    _plugin: PluginInstance
  ): Promise<void> {
    // Fix: Add await to make this properly async
    await Promise.resolve()
    // TODO: Execute plugin activation events
    // This would trigger any onStartup or other activation events
    // defined in the plugin manifest
  }

  private handlePluginError(error: PluginError | Error): void {
    console.error('Plugin error:', error)

    // TODO: Implement proper error reporting and telemetry
    // This could send errors to a logging service or show user notifications

    this.emit('pluginError', error)
  }
}

// Export singleton instance
export const pluginManager = new PluginManager()
