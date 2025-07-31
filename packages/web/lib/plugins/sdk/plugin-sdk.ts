/**
 * Plugin SDK - Development utilities and helpers for creating Notable plugins
 *
 * Provides tools and utilities to make plugin development easier and more productive.
 */

import {
  PluginManifest,
  PluginCategory,
  PluginPermission,
  PluginAPIAccess,
  PluginContext,
  PluginAPI,
  PluginDisposable,
} from '../types/plugin'

export class PluginSDK {
  /**
   * Create a basic plugin manifest template
   */
  static createManifest(options: {
    id: string
    name: string
    version: string
    description: string
    author: { name: string; email?: string }
    category: PluginCategory
    permissions: PluginPermission[]
    apis: PluginAPIAccess[]
  }): PluginManifest {
    return {
      ...options,
      notableVersion: '^1.0.0',
      main: 'index.js',
      activationEvents: [{ event: 'onStartup' }],
      contributes: {},
    }
  }

  /**
   * Create a disposable subscription manager
   */
  static createSubscriptionManager(): SubscriptionManager {
    return new SubscriptionManager()
  }

  /**
   * Create a command builder
   */
  static createCommandBuilder(api: PluginAPI): CommandBuilder {
    return new CommandBuilder(api)
  }

  /**
   * Create a UI builder
   */
  static createUIBuilder(api: PluginAPI): UIBuilder {
    return new UIBuilder(api)
  }

  /**
   * Validate plugin manifest
   */
  static validateManifest(manifest: PluginManifest): ValidationResult {
    const errors: string[] = []
    const warnings: string[] = []

    // Required fields
    if (!manifest.id) errors.push('Missing required field: id')
    if (!manifest.name) errors.push('Missing required field: name')
    if (!manifest.version) errors.push('Missing required field: version')
    if (!manifest.description)
      errors.push('Missing required field: description')
    if (!manifest.author?.name)
      errors.push('Missing required field: author.name')
    if (!manifest.main) errors.push('Missing required field: main')

    // Version format
    if (manifest.version && !/^\d+\.\d+\.\d+/.test(manifest.version)) {
      errors.push('Invalid version format (should be semver)')
    }

    // Plugin ID format
    if (manifest.id && !/^[a-z0-9-]+$/.test(manifest.id)) {
      errors.push(
        'Invalid plugin ID format (should be lowercase alphanumeric with hyphens)'
      )
    }

    // Warnings
    if (!manifest.keywords || manifest.keywords.length === 0) {
      warnings.push('Consider adding keywords for better discoverability')
    }
    if (!manifest.homepage) {
      warnings.push('Consider adding a homepage URL')
    }

    return {
      valid: errors.length === 0,
      errors,
      warnings,
    }
  }
}

export interface ValidationResult {
  valid: boolean
  errors: string[]
  warnings: string[]
}

export class SubscriptionManager {
  private subscriptions: PluginDisposable[] = []

  add(disposable: PluginDisposable): void {
    this.subscriptions.push(disposable)
  }

  dispose(): void {
    this.subscriptions.forEach((subscription) => {
      try {
        subscription.dispose()
      } catch (error) {
        console.warn('Error disposing subscription:', error)
      }
    })
    this.subscriptions.length = 0
  }

  get count(): number {
    return this.subscriptions.length
  }
}

export class CommandBuilder {
  private api: PluginAPI

  constructor(api: PluginAPI) {
    this.api = api
  }

  register(
    command: string,
    handler: (...args: any[]) => any
  ): PluginDisposable {
    return this.api.commands.register(command, handler)
  }

  registerWithErrorHandling(
    command: string,
    handler: (...args: any[]) => any,
    errorHandler?: (error: Error) => void
  ): PluginDisposable {
    return this.api.commands.register(command, (...args: any[]) => {
      try {
        return handler(...args)
      } catch (error) {
        if (errorHandler) {
          errorHandler(error as Error)
        } else {
          this.api.ui.showErrorMessage(`Command failed: ${error}`)
        }
        throw error
      }
    })
  }

  async execute(command: string, ...args: any[]): Promise<any> {
    return this.api.commands.execute(command, ...args)
  }
}

export class UIBuilder {
  private api: PluginAPI

  constructor(api: PluginAPI) {
    this.api = api
  }

  async showMessage(
    message: string,
    type: 'info' | 'warning' | 'error' = 'info'
  ): Promise<void> {
    switch (type) {
      case 'info':
        await this.api.ui.showInformationMessage(message)
        break
      case 'warning':
        await this.api.ui.showWarningMessage(message)
        break
      case 'error':
        await this.api.ui.showErrorMessage(message)
        break
    }
  }

  async showProgress<T>(
    title: string,
    task: (progress: ProgressReporter) => Promise<T>
  ): Promise<T> {
    // TODO: Implement actual progress UI
    console.log(`Progress: ${title}`)

    const reporter: ProgressReporter = {
      report: (message: string, increment?: number) => {
        console.log(
          `Progress: ${message}${increment ? ` (${increment}%)` : ''}`
        )
      },
    }

    return task(reporter)
  }

  createPanel(options: PanelOptions): any {
    return this.api.ui.createPanel(options)
  }
}

export interface ProgressReporter {
  report(message: string, increment?: number): void
}

export interface PanelOptions {
  title: string
  viewColumn?: 'left' | 'right' | 'bottom'
  preserveFocus?: boolean
}

// Plugin development utilities
export const PluginUtils = {
  /**
   * Debounce function calls
   */
  debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout | null = null

    return (...args: Parameters<T>) => {
      if (timeout) {
        clearTimeout(timeout)
      }

      timeout = setTimeout(() => {
        func(...args)
      }, wait)
    }
  },

  /**
   * Throttle function calls
   */
  throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): (...args: Parameters<T>) => void {
    let inThrottle: boolean = false

    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args)
        inThrottle = true
        setTimeout(() => (inThrottle = false), limit)
      }
    }
  },

  /**
   * Create a simple logger with plugin prefix
   */
  createLogger(pluginId: string) {
    const prefix = `[Plugin ${pluginId}]`

    return {
      info: (...args: any[]) => console.log(prefix, ...args),
      warn: (...args: any[]) => console.warn(prefix, ...args),
      error: (...args: any[]) => console.error(prefix, ...args),
      debug: (...args: any[]) => console.debug(prefix, ...args),
    }
  },

  /**
   * Validate required permissions
   */
  requirePermissions(
    manifest: PluginManifest,
    required: PluginPermission[]
  ): void {
    const missing = required.filter(
      (permission) => !manifest.permissions.includes(permission)
    )

    if (missing.length > 0) {
      throw new Error(
        `Plugin ${manifest.id} missing required permissions: ${missing.join(', ')}`
      )
    }
  },

  /**
   * Generate unique IDs
   */
  generateId(): string {
    return Math.random().toString(36).substr(2, 9)
  },
}
