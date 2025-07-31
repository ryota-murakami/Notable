/**
 * Plugin Storage - Persistent storage system for plugin data and configuration
 *
 * Provides isolated storage for each plugin with workspace and global scopes.
 * Ensures plugin data persistence and proper cleanup.
 */

import {
  type PluginStorage as IPluginStorage,
  type PluginManifest,
} from '../types/plugin'

interface StorageData {
  [key: string]: any
}

interface PluginStorageData {
  workspace: StorageData
  global: StorageData
}

export class PluginStorage {
  private storage: Map<string, PluginStorageData> = new Map()
  private readonly STORAGE_KEY = 'notable-plugins-storage'
  private readonly VERSION = '1.0.0'

  async initialize(): Promise<void> {
    await this.loadFromPersistentStorage()
  }

  /**
   * Get workspace storage for a plugin (scoped to current workspace)
   */
  getWorkspaceStorage(pluginId: string): IPluginStorage {
    return this.createStorageInterface(pluginId, 'workspace')
  }

  /**
   * Get global storage for a plugin (persists across workspaces)
   */
  getGlobalStorage(pluginId: string): IPluginStorage {
    return this.createStorageInterface(pluginId, 'global')
  }

  /**
   * Save a plugin manifest and source code
   */
  async savePlugin(manifest: PluginManifest, source: string): Promise<void> {
    const pluginData = {
      manifest,
      source,
      installedAt: new Date().toISOString(),
      enabled: false,
    }

    // Store in localStorage for now (would use proper database in production)
    const key = `plugin-${manifest.id}`
    localStorage.setItem(key, JSON.stringify(pluginData))
  }

  /**
   * Remove a plugin and its data
   */
  async removePlugin(pluginId: string): Promise<void> {
    // Remove plugin files
    localStorage.removeItem(`plugin-${pluginId}`)

    // Remove plugin storage data
    this.storage.delete(pluginId)

    await this.saveToPersistentStorage()
  }

  /**
   * Get list of enabled plugins
   */
  async getEnabledPlugins(): Promise<string[]> {
    const enabledPlugins: string[] = []

    // Scan localStorage for plugin data
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key?.startsWith('plugin-')) {
        try {
          const data = JSON.parse(localStorage.getItem(key) || '{}')
          if (data.enabled) {
            enabledPlugins.push(data.manifest.id)
          }
        } catch (error) {
          console.warn(`Failed to parse plugin data for key ${key}:`, error)
        }
      }
    }

    return enabledPlugins
  }

  /**
   * Set plugin enabled state
   */
  async setPluginEnabled(pluginId: string, enabled: boolean): Promise<void> {
    const key = `plugin-${pluginId}`
    const data = localStorage.getItem(key)

    if (data) {
      const pluginData = JSON.parse(data)
      pluginData.enabled = enabled
      localStorage.setItem(key, JSON.stringify(pluginData))
    }
  }

  /**
   * Dispose and cleanup all storage
   */
  async dispose(): Promise<void> {
    await this.saveToPersistentStorage()
    this.storage.clear()
  }

  private createStorageInterface(
    pluginId: string,
    scope: 'workspace' | 'global'
  ): IPluginStorage {
    return {
      get: <T>(key: string, defaultValue?: T): T | undefined => {
        const pluginData = this.getPluginData(pluginId)
        const value = pluginData[scope][key]
        return value !== undefined ? value : defaultValue
      },

      set: async (key: string, value: any): Promise<void> => {
        const pluginData = this.getPluginData(pluginId)
        pluginData[scope][key] = value
        await this.saveToPersistentStorage()
      },

      delete: async (key: string): Promise<void> => {
        const pluginData = this.getPluginData(pluginId)
        delete pluginData[scope][key]
        await this.saveToPersistentStorage()
      },

      keys: (): readonly string[] => {
        const pluginData = this.getPluginData(pluginId)
        return Object.keys(pluginData[scope])
      },
    }
  }

  private getPluginData(pluginId: string): PluginStorageData {
    if (!this.storage.has(pluginId)) {
      this.storage.set(pluginId, {
        workspace: {},
        global: {},
      })
    }
    return this.storage.get(pluginId)!
  }

  private async loadFromPersistentStorage(): Promise<void> {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY)
      if (stored) {
        const data = JSON.parse(stored)
        if (data.version === this.VERSION) {
          this.storage = new Map(data.storage)
        }
      }
    } catch (error) {
      console.warn('Failed to load plugin storage:', error)
      // Continue with empty storage
    }
  }

  private async saveToPersistentStorage(): Promise<void> {
    try {
      const data = {
        version: this.VERSION,
        storage: Array.from(this.storage.entries()),
        updatedAt: new Date().toISOString(),
      }
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data))
    } catch (error) {
      console.error('Failed to save plugin storage:', error)
    }
  }
}
