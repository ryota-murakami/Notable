/**
 * Plugin Command Integration - Connects plugin system with Notable's command palette
 *
 * This module provides integration between the plugin system and Notable's global
 * command palette, allowing plugins to register commands and users to access
 * plugin functionality through the command interface.
 */

import { notablePluginSystem } from '../index'

export interface PluginCommand {
  id: string
  title: string
  description?: string
  category: string
  pluginId: string
  keybinding?: string
  icon?: string
  handler: (...args: any[]) => Promise<void> | void
}

export class PluginCommandIntegration {
  private registeredCommands: Map<string, PluginCommand> = new Map()
  private commandPaletteIntegration?: any // Would be NotableCommandPalette instance

  /**
   * Initialize command integration with Notable's command palette
   */
  async initialize(commandPalette?: any): Promise<void> {
    this.commandPaletteIntegration = commandPalette

    // Register core plugin system commands
    await this.registerCoreCommands()

    // Register commands from active plugins
    await this.registerPluginCommands()

    console.info('🎯 Plugin command integration initialized')
  }

  /**
   * Register a command from a plugin
   */
  registerCommand(command: PluginCommand): void {
    if (this.registeredCommands.has(command.id)) {
      console.warn(`Command ${command.id} is already registered`)
      return
    }

    this.registeredCommands.set(command.id, command)

    // Register with Notable's command palette if available
    if (this.commandPaletteIntegration) {
      this.commandPaletteIntegration.registerCommand({
        id: command.id,
        title: command.title,
        description: command.description,
        category: `Plugin: ${command.category}`,
        keybinding: command.keybinding,
        icon: command.icon,
        handler: command.handler,
      })
    }

    console.info(`Registered plugin command: ${command.id}`)
  }

  /**
   * Unregister a command
   */
  unregisterCommand(commandId: string): void {
    const command = this.registeredCommands.get(commandId)
    if (!command) return

    this.registeredCommands.delete(commandId)

    // Unregister from Notable's command palette
    if (this.commandPaletteIntegration) {
      this.commandPaletteIntegration.unregisterCommand(commandId)
    }

    console.info(`Unregistered plugin command: ${commandId}`)
  }

  /**
   * Execute a plugin command
   */
  async executeCommand(commandId: string, ...args: any[]): Promise<any> {
    const command = this.registeredCommands.get(commandId)
    if (!command) {
      throw new Error(`Command not found: ${commandId}`)
    }

    try {
      return await command.handler(...args)
    } catch (error) {
      console.error(`Error executing plugin command ${commandId}:`, error)
      throw error
    }
  }

  /**
   * Get all registered plugin commands
   */
  getCommands(): PluginCommand[] {
    return Array.from(this.registeredCommands.values())
  }

  /**
   * Get commands for a specific plugin
   */
  getPluginCommands(pluginId: string): PluginCommand[] {
    return this.getCommands().filter((cmd) => cmd.pluginId === pluginId)
  }

  /**
   * Register core plugin system commands
   */
  private async registerCoreCommands(): Promise<void> {
    const coreCommands: Omit<PluginCommand, 'pluginId'>[] = [
      {
        id: 'plugins.openManager',
        title: 'Open Plugin Manager',
        description: 'Open the plugin management panel',
        category: 'Plugins',
        keybinding: 'Cmd+Shift+P',
        icon: 'puzzle',
        handler: () => {
          // This would trigger opening the plugin management panel
          console.info('Opening plugin manager...')
          // In a real implementation, this would dispatch an event or call a function
          // that opens the PluginManagementPanel component
        },
      },
      {
        id: 'plugins.reload',
        title: 'Reload All Plugins',
        description: 'Reload all active plugins',
        category: 'Plugins',
        icon: 'refresh-cw',
        handler: async () => {
          try {
            const manager = notablePluginSystem.getPluginManager()
            const activePlugins = manager.getActivePlugins()

            for (const plugin of activePlugins) {
              await manager.deactivatePlugin(plugin.manifest.id)
              await manager.activatePlugin(plugin.manifest.id)
            }

            console.info(`Reloaded ${activePlugins.length} plugins`)
          } catch (error) {
            console.error('Failed to reload plugins:', error)
          }
        },
      },
      {
        id: 'plugins.enableAll',
        title: 'Enable All Plugins',
        description: 'Enable all installed plugins',
        category: 'Plugins',
        icon: 'power',
        handler: async () => {
          try {
            const manager = notablePluginSystem.getPluginManager()
            const plugins = manager.getPlugins()

            for (const plugin of plugins) {
              if (plugin.state !== 'active') {
                await manager.activatePlugin(plugin.manifest.id)
              }
            }

            console.info(`Enabled ${plugins.length} plugins`)
          } catch (error) {
            console.error('Failed to enable all plugins:', error)
          }
        },
      },
      {
        id: 'plugins.disableAll',
        title: 'Disable All Plugins',
        description: 'Disable all active plugins',
        category: 'Plugins',
        icon: 'power-off',
        handler: async () => {
          try {
            const manager = notablePluginSystem.getPluginManager()
            const activePlugins = manager.getActivePlugins()

            for (const plugin of activePlugins) {
              await manager.deactivatePlugin(plugin.manifest.id)
            }

            console.info(`Disabled ${activePlugins.length} plugins`)
          } catch (error) {
            console.error('Failed to disable all plugins:', error)
          }
        },
      },
      {
        id: 'plugins.showStats',
        title: 'Show Plugin Statistics',
        description: 'Display plugin system statistics',
        category: 'Plugins',
        icon: 'bar-chart',
        handler: () => {
          const stats = notablePluginSystem.getStats()
          console.info('Plugin System Statistics:', stats)

          // In a real implementation, this would show a notification or modal
          // with the statistics
        },
      },
    ]

    for (const command of coreCommands) {
      this.registerCommand({
        ...command,
        pluginId: 'core',
      })
    }
  }

  /**
   * Register commands from all active plugins
   */
  private async registerPluginCommands(): Promise<void> {
    const manager = notablePluginSystem.getPluginManager()
    const activePlugins = manager.getActivePlugins()

    for (const plugin of activePlugins) {
      await this.registerPluginSpecificCommands(plugin.manifest.id)
    }
  }

  /**
   * Register commands for a specific plugin
   */
  private async registerPluginSpecificCommands(
    pluginId: string
  ): Promise<void> {
    // This would query the plugin for its available commands
    // For now, we'll use the Hello World plugin as an example

    if (pluginId === 'hello-world') {
      const helloWorldCommands: Omit<PluginCommand, 'pluginId'>[] = [
        {
          id: 'hello-world.hello',
          title: 'Hello World: Say Hello',
          description: 'Display a hello message from the plugin',
          category: 'Hello World',
          icon: 'hand-wave',
          handler: async () => {
            await notablePluginSystem.executeCommand('hello-world.hello')
          },
        },
        {
          id: 'hello-world.show-settings',
          title: 'Hello World: Show Settings',
          description: 'Display plugin settings and statistics',
          category: 'Hello World',
          icon: 'settings',
          handler: async () => {
            await notablePluginSystem.executeCommand(
              'hello-world.show-settings'
            )
          },
        },
        {
          id: 'hello-world.insert-greeting',
          title: 'Hello World: Insert Greeting',
          description: 'Insert a greeting message into the current editor',
          category: 'Hello World',
          icon: 'message-circle',
          handler: async () => {
            await notablePluginSystem.executeCommand(
              'hello-world.insert-greeting'
            )
          },
        },
      ]

      for (const command of helloWorldCommands) {
        this.registerCommand({
          ...command,
          pluginId,
        })
      }
    }
  }

  /**
   * Handle plugin activation - register its commands
   */
  onPluginActivated(pluginId: string): void {
    this.registerPluginSpecificCommands(pluginId)
  }

  /**
   * Handle plugin deactivation - unregister its commands
   */
  onPluginDeactivated(pluginId: string): void {
    const pluginCommands = this.getPluginCommands(pluginId)
    for (const command of pluginCommands) {
      this.unregisterCommand(command.id)
    }
  }

  /**
   * Cleanup all registered commands
   */
  dispose(): void {
    const commandIds = Array.from(this.registeredCommands.keys())
    for (const commandId of commandIds) {
      this.unregisterCommand(commandId)
    }

    this.registeredCommands.clear()
    this.commandPaletteIntegration = undefined
  }
}

// Create and export singleton instance
export const pluginCommandIntegration = new PluginCommandIntegration()

// Export convenience functions
export const pluginCommands = {
  initialize: (commandPalette?: any) =>
    pluginCommandIntegration.initialize(commandPalette),
  register: (command: PluginCommand) =>
    pluginCommandIntegration.registerCommand(command),
  unregister: (commandId: string) =>
    pluginCommandIntegration.unregisterCommand(commandId),
  execute: (commandId: string, ...args: any[]) =>
    pluginCommandIntegration.executeCommand(commandId, ...args),
  getAll: () => pluginCommandIntegration.getCommands(),
  getForPlugin: (pluginId: string) =>
    pluginCommandIntegration.getPluginCommands(pluginId),
}

export default pluginCommandIntegration
