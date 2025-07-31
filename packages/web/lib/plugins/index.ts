/**
 * Plugin System - Minimal implementation for AI integration branch
 *
 * This is a simplified version of the plugin system to support
 * the AI integration functionality while maintaining build compatibility.
 */

export interface PluginManifest {
  id: string
  name: string
  version: string
  description: string
  author: string
  category?: string
}

export interface PluginInstance {
  id: string
  manifest: PluginManifest
  state: 'active' | 'inactive' | 'error'
  activatedAt?: Date
  error?: Error
}

export class NotablePluginSystem {
  private plugins = new Map<string, PluginInstance>()

  async getPlugins(): Promise<PluginInstance[]> {
    return Array.from(this.plugins.values())
  }

  async getActivePlugins(): Promise<PluginInstance[]> {
    return this.getPlugins().then((plugins) =>
      plugins.filter((plugin) => plugin.state === 'active')
    )
  }

  async activatePlugin(pluginId: string): Promise<void> {
    const plugin = this.plugins.get(pluginId)
    if (plugin) {
      plugin.state = 'active'
      plugin.activatedAt = new Date()
    }
  }

  async deactivatePlugin(pluginId: string): Promise<void> {
    const plugin = this.plugins.get(pluginId)
    if (plugin) {
      plugin.state = 'inactive'
      plugin.activatedAt = undefined
    }
  }

  async uninstallPlugin(pluginId: string): Promise<void> {
    this.plugins.delete(pluginId)
  }

  async installPlugin(manifest: PluginManifest): Promise<void> {
    const plugin: PluginInstance = {
      id: manifest.id,
      manifest,
      state: 'inactive',
    }
    this.plugins.set(manifest.id, plugin)
  }
}

// Singleton instance
export const notablePluginSystem = new NotablePluginSystem()
