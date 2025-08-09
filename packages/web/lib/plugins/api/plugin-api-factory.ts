/**
 * Plugin API Factory - Creates secure, sandboxed APIs for plugin access
 *
 * This factory creates controlled API objects that plugins can use to interact
 * with Notable's functionality while maintaining security and stability.
 */

// Fix: Add proper type reference for fetch API
interface FetchInit {
  method?: string
  headers?: Record<string, string>
  body?: string | FormData | ArrayBuffer
  signal?: {
    aborted: boolean
    addEventListener: (type: string, listener: () => void) => void
  }
}

declare const fetch: (
  input: string | URL,
  init?: FetchInit
) => Promise<Response>

import {
  type CommandsAPI,
  type EditorAPI,
  type EventsAPI,
  type NetworkAPI,
  type NotesAPI,
  type PluginAPI,
  PluginAPIAccess,
  type PluginContext,
  type PluginDisposable,
  type PluginManifest,
  PluginPermission,
  type SearchAPI,
  type StorageAPI,
  type UIAPI,
} from '../types/plugin'

export class PluginAPIFactory {
  private pluginManager: any // Reference to plugin manager

  constructor(pluginManager: any) {
    this.pluginManager = pluginManager
  }

  /**
   * Create a complete API object for a plugin with permission checking
   */
  createAPI(manifest: PluginManifest, context: PluginContext): PluginAPI {
    const api: PluginAPI = {
      editor: this.createEditorAPI(manifest, context),
      notes: this.createNotesAPI(manifest, context),
      search: this.createSearchAPI(manifest, context),
      ui: this.createUIAPI(manifest, context),
      storage: this.createStorageAPI(manifest, context),
      network: this.createNetworkAPI(manifest, context),
      commands: this.createCommandsAPI(manifest, context),
      events: this.createEventsAPI(manifest, context),
    }

    return this.createAPIProxy(api, manifest)
  }

  private createEditorAPI(
    manifest: PluginManifest,
    context: PluginContext
  ): EditorAPI {
    this.requireAPIAccess(manifest, PluginAPIAccess.EDITOR)

    return {
      insertText: (text: string) => {
        this.requirePermission(manifest, PluginPermission.WRITE_NOTES)
        // TODO: Integrate with actual editor instance
        console.info(`[Plugin ${manifest.id}] Insert text:`, text)
      },

      getSelection: (): string => {
        this.requirePermission(manifest, PluginPermission.READ_NOTES)
        // TODO: Get actual editor selection
        return ''
      },

      replaceSelection: (text: string) => {
        this.requirePermission(manifest, PluginPermission.WRITE_NOTES)
        // TODO: Replace actual editor selection
        console.info(`[Plugin ${manifest.id}] Replace selection:`, text)
      },

      registerBlock: (block: any): PluginDisposable => {
        this.requirePermission(manifest, PluginPermission.UI_MODIFY)

        // TODO: Register block with actual editor
        console.info(`[Plugin ${manifest.id}] Register block:`, block)

        const disposable = {
          dispose: () => {
            // TODO: Unregister block
            console.info(`[Plugin ${manifest.id}] Dispose block:`, block.type)
          },
        }

        context.subscriptions.push(disposable)
        return disposable
      },
    }
  }

  private createNotesAPI(
    manifest: PluginManifest,
    _context: PluginContext
  ): NotesAPI {
    this.requireAPIAccess(manifest, PluginAPIAccess.NOTES)

    return {
      getActiveNote: () => {
        this.requirePermission(manifest, PluginPermission.READ_NOTES)
        // TODO: Get actual active note
        return Promise.resolve(null)
      },

      getAllNotes: () => {
        this.requirePermission(manifest, PluginPermission.READ_NOTES)
        // TODO: Get all notes from database
        return Promise.resolve([])
      },

      createNote: (content: any) => {
        this.requirePermission(manifest, PluginPermission.WRITE_NOTES)
        // TODO: Create note in database
        console.info(`[Plugin ${manifest.id}] Create note:`, content)
        return Promise.resolve({ id: 'new-note', content })
      },

      updateNote: (id: string, content: any) => {
        this.requirePermission(manifest, PluginPermission.WRITE_NOTES)
        // TODO: Update note in database
        console.info(`[Plugin ${manifest.id}] Update note ${id}:`, content)
        return Promise.resolve({ id, content })
      },

      deleteNote: (id: string) => {
        this.requirePermission(manifest, PluginPermission.WRITE_NOTES)
        // TODO: Delete note from database
        console.info(`[Plugin ${manifest.id}] Delete note:`, id)
        return Promise.resolve()
      },
    }
  }

  private createSearchAPI(
    manifest: PluginManifest,
    context: PluginContext
  ): SearchAPI {
    this.requireAPIAccess(manifest, PluginAPIAccess.SEARCH)

    return {
      search: (query: string) => {
        this.requirePermission(manifest, PluginPermission.READ_NOTES)
        // TODO: Perform actual search
        console.info(`[Plugin ${manifest.id}] Search:`, query)
        return Promise.resolve([])
      },

      registerSearchProvider: (provider: any): PluginDisposable => {
        this.requirePermission(manifest, PluginPermission.READ_NOTES)

        // TODO: Register with actual search system
        console.info(
          `[Plugin ${manifest.id}] Register search provider:`,
          provider
        )

        const disposable = {
          dispose: () => {
            console.info(`[Plugin ${manifest.id}] Dispose search provider`)
          },
        }

        context.subscriptions.push(disposable)
        return disposable
      },
    }
  }

  private createUIAPI(
    manifest: PluginManifest,
    _context: PluginContext
  ): UIAPI {
    this.requireAPIAccess(manifest, PluginAPIAccess.UI)

    return {
      showInformationMessage: (message: string) => {
        this.requirePermission(manifest, PluginPermission.NOTIFICATIONS)
        // TODO: Show actual notification
        console.info(`[Plugin ${manifest.id}] Info:`, message)
        return Promise.resolve(undefined)
      },

      showWarningMessage: (message: string) => {
        this.requirePermission(manifest, PluginPermission.NOTIFICATIONS)
        console.info(`[Plugin ${manifest.id}] Warning:`, message)
        return Promise.resolve(undefined)
      },

      showErrorMessage: (message: string) => {
        this.requirePermission(manifest, PluginPermission.NOTIFICATIONS)
        console.info(`[Plugin ${manifest.id}] Error:`, message)
        return Promise.resolve(undefined)
      },

      createPanel: (options: any) => {
        this.requirePermission(manifest, PluginPermission.UI_MODIFY)
        // TODO: Create actual UI panel
        console.info(`[Plugin ${manifest.id}] Create panel:`, options)
        return {}
      },
    }
  }

  private createStorageAPI(
    manifest: PluginManifest,
    context: PluginContext
  ): StorageAPI {
    this.requireAPIAccess(manifest, PluginAPIAccess.STORAGE)

    return {
      workspace: context.workspaceState,
      global: context.globalState,
    }
  }

  private createNetworkAPI(
    manifest: PluginManifest,
    _context: PluginContext
  ): NetworkAPI {
    this.requireAPIAccess(manifest, PluginAPIAccess.NETWORK)

    return {
      fetch: (url: string, options?: FetchInit) => {
        this.requirePermission(manifest, PluginPermission.NETWORK_ACCESS)

        // TODO: Add rate limiting and security checks
        const rateLimiter = this.getRateLimiter(manifest.id)
        if (!rateLimiter.allow()) {
          throw new Error('Rate limit exceeded')
        }

        // TODO: Validate URL against allowed domains
        console.info(`[Plugin ${manifest.id}] Fetch:`, url)

        return fetch(url, options)
      },
    }
  }

  private createCommandsAPI(
    manifest: PluginManifest,
    context: PluginContext
  ): CommandsAPI {
    this.requireAPIAccess(manifest, PluginAPIAccess.COMMANDS)

    return {
      register: (
        command: string,
        _callback: (...args: any[]) => any
      ): PluginDisposable => {
        this.requirePermission(manifest, PluginPermission.COMMANDS)

        // TODO: Register with actual command system
        console.info(`[Plugin ${manifest.id}] Register command:`, command)

        const disposable = {
          dispose: () => {
            console.info(`[Plugin ${manifest.id}] Dispose command:`, command)
          },
        }

        context.subscriptions.push(disposable)
        return disposable
      },

      execute: (command: string, ...args: any[]) => {
        // TODO: Execute actual command
        console.info(`[Plugin ${manifest.id}] Execute command:`, command, args)
        return Promise.resolve(undefined)
      },
    }
  }

  private createEventsAPI(
    manifest: PluginManifest,
    context: PluginContext
  ): EventsAPI {
    this.requireAPIAccess(manifest, PluginAPIAccess.EVENTS)

    return {
      on: (
        event: string,
        _listener: (...args: any[]) => void
      ): PluginDisposable => {
        // TODO: Register with actual event system
        console.info(`[Plugin ${manifest.id}] Listen to event:`, event)

        const disposable = {
          dispose: () => {
            console.info(
              `[Plugin ${manifest.id}] Stop listening to event:`,
              event
            )
          },
        }

        context.subscriptions.push(disposable)
        return disposable
      },

      emit: (event: string, ...args: any[]) => {
        // TODO: Emit to actual event system
        console.info(`[Plugin ${manifest.id}] Emit event:`, event, args)
      },
    }
  }

  private createAPIProxy(api: PluginAPI, manifest: PluginManifest): PluginAPI {
    // Create a proxy that logs all API calls for debugging and monitoring
    return new Proxy(api, {
      get: (target, prop) => {
        const value = target[prop as keyof PluginAPI]

        if (typeof value === 'object' && value !== null) {
          return new Proxy(value, {
            get: (subTarget, subProp) => {
              const subValue = subTarget[subProp as keyof typeof subTarget]

              if (typeof subValue === 'function') {
                return (...args: any[]) => {
                  // Log API call
                  console.info(
                    `[Plugin ${manifest.id}] API call: ${String(prop)}.${String(subProp)}`,
                    args
                  )

                  try {
                    return (subValue as Function).apply(subTarget, args)
                  } catch (error) {
                    console.error(
                      `[Plugin ${manifest.id}] API error in ${String(prop)}.${String(subProp)}:`,
                      error
                    )
                    throw error
                  }
                }
              }

              return subValue
            },
          })
        }

        return value
      },
    })
  }

  private requirePermission(
    manifest: PluginManifest,
    permission: PluginPermission
  ): void {
    if (!manifest.permissions.includes(permission)) {
      throw new Error(
        `Plugin ${manifest.id} does not have permission: ${permission}`
      )
    }
  }

  private requireAPIAccess(
    manifest: PluginManifest,
    apiAccess: PluginAPIAccess
  ): void {
    if (!manifest.apis.includes(apiAccess)) {
      throw new Error(
        `Plugin ${manifest.id} does not have API access: ${apiAccess}`
      )
    }
  }

  private getRateLimiter(_pluginId: string) {
    // TODO: Implement actual rate limiting
    return {
      allow: () => true,
    }
  }
}
