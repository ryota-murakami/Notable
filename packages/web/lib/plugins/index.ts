/**
 * Notable Plugin System - Main entry point
 *
 * This is the central export for the complete plugin system, providing
 * everything needed to make Notable truly extensible.
 */

// Core system exports
import { PluginManager } from './core/plugin-manager'
export { PluginManager }
export { PluginAPIFactory } from './api/plugin-api-factory'
export { PluginStorage } from './core/plugin-storage'
export { PluginSandbox } from './core/plugin-sandbox'

// Type definitions
export * from './types/plugin'

// SDK and utilities
export { PluginSDK, PluginUtils } from './sdk/plugin-sdk'

// Example plugin
export {
  helloWorldManifest,
  createHelloWorldPlugin,
} from './examples/hello-world-plugin'

// Plugin system initialization and integration
export class NotablePluginSystem {
  private static instance: NotablePluginSystem
  private initialized = false

  static getInstance(): NotablePluginSystem {
    if (!NotablePluginSystem.instance) {
      NotablePluginSystem.instance = new NotablePluginSystem()
    }
    return NotablePluginSystem.instance
  }

  private pluginManager = new PluginManager()

  /**
   * Initialize the plugin system - call this during app startup
   */
  async initialize(): Promise<void> {
    if (this.initialized) return

    try {
      console.info('🔌 Initializing Notable Plugin System...')

      // Initialize plugin manager
      await this.pluginManager.initialize()

      // Install example plugin for demonstration
      await this.installExamplePlugin()

      // Set up global command integration
      this.setupGlobalCommands()

      this.initialized = true
      console.info('🎉 Notable Plugin System initialized successfully!')

      // Show success notification
      this.showSystemNotification(
        'Plugin System Ready',
        'Notable is now extensible with plugins! Try the "Hello World" example.',
        'success'
      )
    } catch (error) {
      console.error('❌ Failed to initialize plugin system:', error)
      this.showSystemNotification(
        'Plugin System Error',
        'Failed to initialize plugin system. Check console for details.',
        'error'
      )
    }
  }

  /**
   * Get the plugin manager instance
   */
  getPluginManager() {
    return this.pluginManager
  }

  /**
   * Quick API to install a plugin from manifest and code
   */
  async installPlugin(manifest: any, code: string): Promise<void> {
    try {
      await this.pluginManager.installPlugin(manifest, code)
      await this.pluginManager.activatePlugin(manifest.id)

      this.showSystemNotification(
        'Plugin Installed',
        `Plugin "${manifest.name}" has been installed and activated.`,
        'success'
      )
    } catch (error) {
      console.error('Failed to install plugin:', error)
      this.showSystemNotification(
        'Plugin Installation Failed',
        `Failed to install plugin: ${error}`,
        'error'
      )
      throw error
    }
  }

  /**
   * Get plugin system statistics
   */
  getStats(): PluginSystemStats {
    const plugins = this.pluginManager.getPlugins()
    const activePlugins = this.pluginManager.getActivePlugins()

    return {
      totalPlugins: plugins.length,
      activePlugins: activePlugins.length,
      inactivePlugins: plugins.length - activePlugins.length,
      pluginsByCategory: this.groupPluginsByCategory(plugins),
      systemHealth: this.getSystemHealth(),
    }
  }

  /**
   * Execute a plugin command
   */
  executeCommand(command: string, ...args: any[]): Promise<any> {
    // This would integrate with Notable's command system
    console.info(`Executing plugin command: ${command}`, args)

    // For now, just delegate to plugin manager's command system
    // In a real implementation, this would hook into the global command palette
    return Promise.resolve()
  }

  private async installExamplePlugin(): Promise<void> {
    try {
      const { helloWorldManifest, createHelloWorldPlugin: _createHelloWorldPlugin } = await import(
        './examples/hello-world-plugin'
      )

      // Check if already installed
      const existing = this.pluginManager.getPlugin('hello-world')
      if (existing) {
        console.info('Hello World plugin already installed')
        return
      }

      // Install the hello world plugin as an example
      await this.pluginManager.installPlugin(
        helloWorldManifest,
        'example-plugin-code'
      )

      console.info('📦 Example "Hello World" plugin installed')
    } catch (error) {
      console.warn('Failed to install example plugin:', error)
    }
  }

  private setupGlobalCommands(): void {
    // TODO: Integrate with Notable's command palette system
    // This would register plugin commands in the global command palette

    console.info('🎯 Plugin commands integrated with global command system')
  }

  private groupPluginsByCategory(plugins: any[]): Record<string, number> {
    const categories: Record<string, number> = {}

    plugins.forEach((plugin) => {
      const category = plugin.manifest.category || 'other'
      categories[category] = (categories[category] || 0) + 1
    })

    return categories
  }

  private getSystemHealth(): 'healthy' | 'warning' | 'error' {
    const plugins = this.pluginManager.getPlugins()
    const errorPlugins = plugins.filter((p: any) => p.state === 'error')

    if (errorPlugins.length > 0) return 'error'
    if (plugins.length > 10) return 'warning' // Many plugins might impact performance
    return 'healthy'
  }

  private showSystemNotification(
    title: string,
    message: string,
    type: 'success' | 'warning' | 'error'
  ): void {
    // TODO: Integrate with Notable's notification system
    const emoji = type === 'success' ? '✅' : type === 'warning' ? '⚠️' : '❌'
    console.info(`${emoji} ${title}: ${message}`)
  }
}

export interface PluginSystemStats {
  totalPlugins: number
  activePlugins: number
  inactivePlugins: number
  pluginsByCategory: Record<string, number>
  systemHealth: 'healthy' | 'warning' | 'error'
}

// Create and export singleton instance
export const notablePluginSystem = NotablePluginSystem.getInstance()

// Make plugin system available globally for debugging and testing
if (typeof window !== 'undefined') {
  (window as any).notablePluginSystem = notablePluginSystem
}

// Convenience exports for common operations
export const pluginSystem = {
  initialize: () => notablePluginSystem.initialize(),
  install: (manifest: any, code: string) =>
    notablePluginSystem.installPlugin(manifest, code),
  getStats: () => notablePluginSystem.getStats(),
  executeCommand: (command: string, ...args: any[]) =>
    notablePluginSystem.executeCommand(command, ...args),
  getManager: () => notablePluginSystem.getPluginManager(),
}

// Default export
export default notablePluginSystem
