/**
 * Hello World Plugin - Example plugin demonstrating the Notable Plugin System
 *
 * This is a simple example that shows how to create a plugin with:
 * - Commands
 * - UI interactions
 * - Storage usage
 * - Event handling
 */

import {
  type PluginAPI,
  PluginAPIAccess,
  PluginCategory,
  type PluginContext,
  type PluginManifest,
  PluginPermission,
} from '../types/plugin'
import { PluginSDK, PluginUtils } from '../sdk/plugin-sdk'

// Settings interface for type safety
interface HelloWorldSettings {
  helloCount?: number
  lastDeactivated?: string
}

// Plugin manifest - this would typically be in a separate manifest.json file
export const helloWorldManifest: PluginManifest = PluginSDK.createManifest({
  id: 'hello-world',
  name: 'Hello World Plugin',
  version: '1.0.0',
  description:
    'A simple example plugin that demonstrates the Notable Plugin System capabilities',
  author: {
    name: 'Notable Team',
    email: 'plugins@notable.app',
  },
  category: PluginCategory.DEVELOPMENT,
  permissions: [
    PluginPermission.COMMANDS,
    PluginPermission.NOTIFICATIONS,
    PluginPermission.READ_SETTINGS,
    PluginPermission.WRITE_SETTINGS,
  ],
  apis: [PluginAPIAccess.COMMANDS, PluginAPIAccess.UI, PluginAPIAccess.STORAGE],
})

/**
 * Hello World Plugin Implementation
 */
export class HelloWorldPlugin {
  private api: PluginAPI
  private context: PluginContext
  private logger: any
  private subscriptions = PluginSDK.createSubscriptionManager()

  constructor(api: PluginAPI, context: PluginContext) {
    this.api = api
    this.context = context
    this.logger = PluginUtils.createLogger('hello-world')
  }

  /**
   * Plugin activation - called when plugin is enabled
   */
  async activate(): Promise<void> {
    this.logger.info('Hello World Plugin activating...')

    // Register commands
    this.registerCommands()

    // Load plugin settings
    await this.loadSettings()

    // Show welcome message
    await this.api.ui.showInformationMessage('Hello World Plugin activated! 🎉')

    this.logger.info('Hello World Plugin activated successfully')
  }

  /**
   * Plugin deactivation - called when plugin is disabled
   */
  async deactivate(): Promise<void> {
    this.logger.info('Hello World Plugin deactivating...')

    // Cleanup subscriptions
    this.subscriptions.dispose()

    // Save any final state
    await this.saveSettings()

    this.logger.info('Hello World Plugin deactivated')
  }

  private registerCommands(): void {
    const commandBuilder = PluginSDK.createCommandBuilder(this.api)

    // Hello command
    const helloDisposable = commandBuilder.registerWithErrorHandling(
      'hello-world.hello',
      async () => {
        const count = await this.incrementHelloCount()
        await this.api.ui.showInformationMessage(
          `Hello from Notable Plugin System! (Called ${count} times)`
        )
      }
    )
    this.subscriptions.add(helloDisposable)

    // Settings demo command
    const settingsDisposable = commandBuilder.registerWithErrorHandling(
      'hello-world.show-settings',
      async () => {
        const settings = await this.getSettings()
        await this.api.ui.showInformationMessage(
          `Plugin Settings: ${JSON.stringify(settings, null, 2)}`
        )
      }
    )
    this.subscriptions.add(settingsDisposable)

    // Insert text command (demonstrates editor API)
    const insertDisposable = commandBuilder.registerWithErrorHandling(
      'hello-world.insert-greeting',
      async () => {
        const greetings = [
          '👋 Hello from your plugin!',
          '🚀 Notable Plugin System is working!',
          '✨ This text was inserted by a plugin!',
          '🎉 Plugin extensibility achieved!',
        ]

        const randomGreeting =
          greetings[Math.floor(Math.random() * greetings.length)]
        this.api.editor.insertText(randomGreeting)

        await this.api.ui.showInformationMessage(
          'Greeting inserted into editor!'
        )
      }
    )
    this.subscriptions.add(insertDisposable)

    this.logger.info('Commands registered successfully')
  }

  private async loadSettings(): Promise<void> {
    // Load settings from plugin storage
    const defaultSettings = {
      helloCount: 0,
      lastActivated: new Date().toISOString(),
      userPreferences: {
        showWelcomeMessage: true,
        theme: 'default',
      },
    }

    // Try to load existing settings, fall back to defaults
    const existingSettings = this.context.globalState.get(
      'settings',
      defaultSettings
    )

    // Update last activated
    existingSettings.lastActivated = new Date().toISOString()
    await this.context.globalState.set('settings', existingSettings)

    this.logger.info('Settings loaded:', existingSettings)
  }

  private async saveSettings(): Promise<void> {
    const settings = await this.getSettings()
    settings.lastDeactivated = new Date().toISOString()
    await this.context.globalState.set('settings', settings)

    this.logger.info('Settings saved')
  }

  private async getSettings(): Promise<HelloWorldSettings> {
    // Fix: Add await to make this properly async
    await Promise.resolve()
    const settings = this.context.globalState.get(
      'settings',
      {}
    ) as HelloWorldSettings
    return settings
  }

  private async incrementHelloCount(): Promise<number> {
    const settings = await this.getSettings()
    settings.helloCount = (settings.helloCount || 0) + 1
    await this.context.globalState.set('settings', settings)
    return settings.helloCount
  }
}

/**
 * Plugin factory function - this is what gets called to create the plugin instance
 */
export function createHelloWorldPlugin(
  api: PluginAPI,
  context: PluginContext
): HelloWorldPlugin {
  return new HelloWorldPlugin(api, context)
}

/**
 * Plugin activation function - this is the main entry point
 */
export async function activate(_context: PluginContext): Promise<void> {
  // Fix: Add await to make this properly async
  await Promise.resolve()
  // This function would be called by the plugin system
  // The actual implementation would be provided by the plugin manager
  console.info('Hello World Plugin activation function called')
}

/**
 * Plugin deactivation function
 */
export async function deactivate(): Promise<void> {
  // Fix: Add await to make this properly async
  await Promise.resolve()
  console.info('Hello World Plugin deactivation function called')
}

// Export for plugin system
export default {
  manifest: helloWorldManifest,
  activate,
  deactivate,
  createPlugin: createHelloWorldPlugin,
}
