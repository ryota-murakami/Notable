/**
 * React Hooks for Plugin System Integration
 *
 * Provides React hooks for interacting with the Notable plugin system,
 * including state management, plugin operations, and real-time updates.
 */

import { useCallback, useEffect, useMemo, useState } from 'react'
import { notablePluginSystem, type PluginSystemStats } from '../index'
import { pluginCommandIntegration } from '../integration/plugin-commands'

export interface PluginInfo {
  id: string
  name: string
  version: string
  description: string
  author: { name: string; email?: string; url?: string }
  category: string
  permissions: string[]
  apis: string[]
  enabled: boolean
  installed: boolean
  state: 'active' | 'inactive' | 'error' | 'loading'
  error?: string
}

export interface UsePluginSystemReturn {
  // State
  isInitialized: boolean
  stats: PluginSystemStats | null
  installedPlugins: PluginInfo[]
  availablePlugins: PluginInfo[]
  loading: boolean
  error: string | null

  // Actions
  initializeSystem: () => Promise<void>
  installPlugin: (manifest: any, code: string) => Promise<void>
  uninstallPlugin: (pluginId: string) => Promise<void>
  enablePlugin: (pluginId: string) => Promise<void>
  disablePlugin: (pluginId: string) => Promise<void>
  reloadPlugin: (pluginId: string) => Promise<void>
  refreshPlugins: () => Promise<void>

  // Utilities
  getPlugin: (pluginId: string) => PluginInfo | undefined
  isPluginEnabled: (pluginId: string) => boolean
  canInstallPlugin: (manifest: any) => boolean
}

/**
 * Main hook for plugin system integration
 */
export function usePluginSystem(): UsePluginSystemReturn {
  const [isInitialized, setIsInitialized] = useState(false)
  const [stats, setStats] = useState<PluginSystemStats | null>(null)
  const [installedPlugins, setInstalledPlugins] = useState<PluginInfo[]>([])
  const [availablePlugins, setAvailablePlugins] = useState<PluginInfo[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [refreshTrigger, setRefreshTrigger] = useState(0)

  // Initialize the plugin system
  const initializeSystem = useCallback(async () => {
    if (isInitialized) return

    try {
      setLoading(true)
      setError(null)

      await notablePluginSystem.initialize()
      await pluginCommandIntegration.initialize()

      setIsInitialized(true)
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : 'Failed to initialize plugin system'
      setError(errorMessage)
      console.error('Plugin system initialization failed:', err)
    } finally {
      setLoading(false)
    }
  }, [isInitialized])

  // Refresh plugin data
  const refreshPlugins = useCallback(async () => {
    if (!isInitialized) return

    try {
      setLoading(true)
      setError(null)

      // Get current stats
      const currentStats = notablePluginSystem.getStats()
      setStats(currentStats)

      // Get installed plugins
      const manager = notablePluginSystem.getPluginManager()
      const plugins = manager.getPlugins()
      const activePlugins = manager.getActivePlugins()

      const installed: PluginInfo[] = plugins.map((plugin: any) => ({
        id: plugin.manifest.id,
        name: plugin.manifest.name,
        version: plugin.manifest.version,
        description: plugin.manifest.description,
        author: plugin.manifest.author,
        category: plugin.manifest.category,
        permissions: plugin.manifest.permissions,
        apis: plugin.manifest.apis,
        enabled: activePlugins.some(
          (p: any) => p.manifest.id === plugin.manifest.id
        ),
        installed: true,
        state: plugin.state as any,
        error: plugin.error,
      }))

      setInstalledPlugins(installed)

      // TODO: Load available plugins from marketplace
      // For now, we'll keep the existing available plugins or set empty array
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to refresh plugins'
      setError(errorMessage)
      console.error('Failed to refresh plugins:', err)
    } finally {
      setLoading(false)
    }
  }, [isInitialized])

  // Install a plugin
  const installPlugin = useCallback(async (manifest: any, code: string) => {
    try {
      setLoading(true)
      setError(null)

      await notablePluginSystem.installPlugin(manifest, code)
      setRefreshTrigger((prev) => prev + 1) // Trigger refresh
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to install plugin'
      setError(errorMessage)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  // Uninstall a plugin
  const uninstallPlugin = useCallback(async (pluginId: string) => {
    try {
      setLoading(true)
      setError(null)

      const manager = notablePluginSystem.getPluginManager()
      await manager.uninstallPlugin(pluginId)
      setRefreshTrigger((prev) => prev + 1) // Trigger refresh
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to uninstall plugin'
      setError(errorMessage)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  // Enable a plugin
  const enablePlugin = useCallback(async (pluginId: string) => {
    try {
      setLoading(true)
      setError(null)

      const manager = notablePluginSystem.getPluginManager()
      await manager.activatePlugin(pluginId)
      setRefreshTrigger((prev) => prev + 1) // Trigger refresh
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to enable plugin'
      setError(errorMessage)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  // Disable a plugin
  const disablePlugin = useCallback(async (pluginId: string) => {
    try {
      setLoading(true)
      setError(null)

      const manager = notablePluginSystem.getPluginManager()
      await manager.deactivatePlugin(pluginId)
      setRefreshTrigger((prev) => prev + 1) // Trigger refresh
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to disable plugin'
      setError(errorMessage)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  // Reload a plugin
  const reloadPlugin = useCallback(async (pluginId: string) => {
    try {
      setLoading(true)
      setError(null)

      const manager = notablePluginSystem.getPluginManager()
      await manager.deactivatePlugin(pluginId)
      await manager.activatePlugin(pluginId)
      setRefreshTrigger((prev) => prev + 1) // Trigger refresh
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to reload plugin'
      setError(errorMessage)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  // Utility functions
  const getPlugin = useCallback(
    (pluginId: string) => {
      return installedPlugins.find((plugin) => plugin.id === pluginId)
    },
    [installedPlugins]
  )

  const isPluginEnabled = useCallback(
    (pluginId: string) => {
      const plugin = getPlugin(pluginId)
      return plugin?.enabled ?? false
    },
    [getPlugin]
  )

  const canInstallPlugin = useCallback(
    (manifest: any) => {
      // Check if plugin is already installed
      const existingPlugin = installedPlugins.find((p) => p.id === manifest.id)
      return !existingPlugin
    },
    [installedPlugins]
  )

  // Initialize on mount
  useEffect(() => {
    initializeSystem()
  }, [initializeSystem])

  // Refresh plugins when system is initialized or refresh is triggered
  useEffect(() => {
    if (isInitialized) {
      refreshPlugins()
    }
  }, [isInitialized, refreshTrigger, refreshPlugins])

  return {
    // State
    isInitialized,
    stats,
    installedPlugins,
    availablePlugins,
    loading,
    error,

    // Actions
    initializeSystem,
    installPlugin,
    uninstallPlugin,
    enablePlugin,
    disablePlugin,
    reloadPlugin,
    refreshPlugins,

    // Utilities
    getPlugin,
    isPluginEnabled,
    canInstallPlugin,
  }
}

/**
 * Hook for managing plugin commands
 */
export function usePluginCommands() {
  const [commands, setCommands] = useState(
    pluginCommandIntegration.getCommands()
  )

  const refreshCommands = useCallback(() => {
    setCommands(pluginCommandIntegration.getCommands())
  }, [])

  const executeCommand = useCallback(
    async (commandId: string, ...args: any[]) => {
      try {
        return await pluginCommandIntegration.executeCommand(commandId, ...args)
      } catch (error) {
        console.error('Failed to execute plugin command:', error)
        throw error
      }
    },
    []
  )

  const getPluginCommands = useCallback((pluginId: string) => {
    return pluginCommandIntegration.getPluginCommands(pluginId)
  }, [])

  // Refresh commands when component mounts
  useEffect(() => {
    refreshCommands()
  }, [refreshCommands])

  return {
    commands,
    refreshCommands,
    executeCommand,
    getPluginCommands,
  }
}

/**
 * Hook for plugin-specific state management
 */
export function usePlugin(pluginId: string) {
  const { installedPlugins, enablePlugin, disablePlugin, reloadPlugin } =
    usePluginSystem()

  const plugin = useMemo(() => {
    return installedPlugins.find((p) => p.id === pluginId)
  }, [installedPlugins, pluginId])

  const togglePlugin = useCallback(async () => {
    if (!plugin) return

    if (plugin.enabled) {
      await disablePlugin(pluginId)
    } else {
      await enablePlugin(pluginId)
    }
  }, [plugin, pluginId, enablePlugin, disablePlugin])

  return {
    plugin,
    isInstalled: !!plugin,
    isEnabled: plugin?.enabled ?? false,
    state: plugin?.state ?? 'inactive',
    error: plugin?.error,
    togglePlugin,
    enablePlugin: () => enablePlugin(pluginId),
    disablePlugin: () => disablePlugin(pluginId),
    reloadPlugin: () => reloadPlugin(pluginId),
  }
}

/**
 * Hook for plugin system statistics
 */
export function usePluginStats() {
  const { stats, refreshPlugins } = usePluginSystem()

  return {
    stats,
    refreshStats: refreshPlugins,
  }
}
