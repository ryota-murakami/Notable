/**
 * Core Plugin System Types
 *
 * Defines the fundamental interfaces and types for the Notable Plugin System.
 * This enables extensible architecture for community-driven development.
 */

export interface PluginManifest {
  id: string
  name: string
  version: string
  description: string
  author: {
    name: string
    email?: string
    url?: string
  }
  license?: string
  keywords?: string[]
  homepage?: string
  repository?: string

  // Plugin metadata
  category: PluginCategory
  tags?: string[]
  icon?: string
  screenshots?: string[]

  // Compatibility
  notableVersion: string
  engines?: {
    node?: string
    browser?: string
  }

  // Dependencies
  dependencies?: Record<string, string>
  peerDependencies?: Record<string, string>

  // Plugin configuration
  main: string // Entry point file
  permissions: PluginPermission[]
  apis: PluginAPIAccess[]

  // Lifecycle hooks
  activationEvents?: PluginActivationEvent[]
  contributes?: PluginContributions
}

export enum PluginCategory {
  EDITOR = 'editor',
  UI = 'ui',
  INTEGRATION = 'integration',
  PRODUCTIVITY = 'productivity',
  EXPORT = 'export',
  SEARCH = 'search',
  THEME = 'theme',
  THEMES = 'themes', // Alias for backward compatibility
  DEVELOPMENT = 'development',
  COMMUNITY = 'community',
  OTHER = 'other',
}

export enum PluginPermission {
  READ_NOTES = 'read:notes',
  WRITE_NOTES = 'write:notes',
  DELETE_NOTES = 'delete:notes',
  READ_SETTINGS = 'read:settings',
  WRITE_SETTINGS = 'write:settings',
  NETWORK_ACCESS = 'network:access',
  NETWORK = 'network:access', // Alias for backward compatibility
  FILE_SYSTEM = 'filesystem:access',
  CLIPBOARD = 'clipboard:access',
  NOTIFICATIONS = 'notifications:show',
  COMMANDS = 'commands:register',
  UI_MODIFY = 'ui:modify',
}

export enum PluginAPIAccess {
  EDITOR = 'editor',
  NOTES = 'notes',
  SEARCH = 'search',
  UI = 'ui',
  STORAGE = 'storage',
  NETWORK = 'network',
  COMMANDS = 'commands',
  EVENTS = 'events',
}

export interface PluginActivationEvent {
  event: 'onStartup' | 'onCommand' | 'onLanguage' | 'onFileType' | 'onCustom'
  condition?: string
}

export interface PluginContributions {
  commands?: PluginCommand[]
  keybindings?: PluginKeybinding[]
  menus?: PluginMenu[]
  themes?: PluginTheme[]
  languages?: PluginLanguage[]
  snippets?: PluginSnippet[]
  blocks?: PluginBlock[]
}

export interface PluginCommand {
  command: string
  title: string
  category?: string
  icon?: string
  when?: string
}

export interface PluginKeybinding {
  command: string
  key: string
  when?: string
  mac?: string
  linux?: string
  win?: string
}

export interface PluginMenu {
  commandPalette?: PluginMenuItem[]
  contextMenu?: PluginMenuItem[]
  editorTitle?: PluginMenuItem[]
  explorer?: PluginMenuItem[]
}

export interface PluginMenuItem {
  command: string
  when?: string
  group?: string
}

export interface PluginTheme {
  id: string
  label: string
  path: string
  uiTheme: 'light' | 'dark' | 'auto'
}

export interface PluginLanguage {
  id: string
  aliases?: string[]
  extensions?: string[]
  configuration?: string
}

export interface PluginSnippet {
  language: string
  path: string
}

export interface PluginBlock {
  type: string
  name: string
  icon?: string
  component: string
  schema?: object
}

export enum PluginState {
  INACTIVE = 'inactive',
  ACTIVATING = 'activating',
  ACTIVE = 'active',
  DEACTIVATING = 'deactivating',
  ERROR = 'error',
  DISABLED = 'disabled',
}

export interface PluginInstance {
  manifest: PluginManifest
  state: PluginState
  context: PluginContext
  api: PluginAPI
  error?: Error
  activatedAt?: Date

  // Lifecycle methods
  activate(): Promise<void>
  deactivate(): Promise<void>
  dispose(): Promise<void>
}

export interface PluginContext {
  pluginId: string
  pluginPath: string
  storageUri: string
  workspaceState: PluginStorage
  globalState: PluginStorage
  subscriptions: PluginDisposable[]
  pluginManager?: any

  // Utilities
  asAbsolutePath(relativePath: string): string
}

export interface PluginStorage {
  get<T>(key: string): T | undefined
  get<T>(key: string, defaultValue: T): T
  set(key: string, value: any): Promise<void>
  delete(key: string): Promise<void>
  keys(): readonly string[]
}

export interface PluginDisposable {
  dispose(): void
}

export interface PluginAPI {
  // Core APIs that plugins can access
  editor: EditorAPI
  notes: NotesAPI
  search: SearchAPI
  ui: UIAPI
  storage: StorageAPI
  network: NetworkAPI
  commands: CommandsAPI
  events: EventsAPI
}

// Placeholder interfaces for plugin APIs
export interface EditorAPI {
  insertText(text: string): void
  getSelection(): string
  replaceSelection(text: string): void
  registerBlock(block: PluginBlock): PluginDisposable
}

export interface NotesAPI {
  getActiveNote(): Promise<any>
  getAllNotes(): Promise<any[]>
  createNote(content: any): Promise<any>
  updateNote(id: string, content: any): Promise<any>
  deleteNote(id: string): Promise<void>
}

export interface SearchAPI {
  search(query: string): Promise<any[]>
  registerSearchProvider(provider: any): PluginDisposable
}

export interface UIAPI {
  showInformationMessage(message: string): Promise<string | undefined>
  showWarningMessage(message: string): Promise<string | undefined>
  showErrorMessage(message: string): Promise<string | undefined>
  createPanel(options: any): any
}

export interface StorageAPI {
  workspace: PluginStorage
  global: PluginStorage
}

export interface NetworkAPI {
  fetch(url: string, options?: RequestInit): Promise<Response>
}

export interface CommandsAPI {
  register(command: string, callback: (...args: any[]) => any): PluginDisposable
  execute(command: string, ...args: any[]): Promise<any>
}

export interface EventsAPI {
  on(event: string, listener: (...args: any[]) => void): PluginDisposable
  emit(event: string, ...args: any[]): void
}

export interface IPluginError extends Error {
  pluginId: string
  code: PluginErrorCode
  details?: any
}

export enum PluginErrorCode {
  ACTIVATION_FAILED = 'activation_failed',
  INVALID_MANIFEST = 'invalid_manifest',
  PERMISSION_DENIED = 'permission_denied',
  API_ERROR = 'api_error',
  DEPENDENCY_ERROR = 'dependency_error',
  RUNTIME_ERROR = 'runtime_error',
}

// Plugin Error Class Implementation
export class PluginError extends Error implements IPluginError {
  public readonly pluginId: string
  public readonly code: PluginErrorCode
  public readonly details?: any

  constructor(
    message: string,
    pluginId: string,
    code: PluginErrorCode,
    details?: any
  ) {
    super(message)
    this.name = 'PluginError'
    this.pluginId = pluginId
    this.code = code
    this.details = details

    // Maintain proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, PluginError)
    }
  }

  static activation(
    pluginId: string,
    message: string,
    details?: any
  ): PluginError {
    return new PluginError(
      message,
      pluginId,
      PluginErrorCode.ACTIVATION_FAILED,
      details
    )
  }

  static invalidManifest(
    pluginId: string,
    message: string,
    details?: any
  ): PluginError {
    return new PluginError(
      message,
      pluginId,
      PluginErrorCode.INVALID_MANIFEST,
      details
    )
  }

  static permissionDenied(
    pluginId: string,
    permission: string,
    details?: any
  ): PluginError {
    return new PluginError(
      `Permission denied: ${permission}`,
      pluginId,
      PluginErrorCode.PERMISSION_DENIED,
      { permission, ...details }
    )
  }

  static apiError(
    pluginId: string,
    api: string,
    message: string,
    details?: any
  ): PluginError {
    return new PluginError(
      `API error in ${api}: ${message}`,
      pluginId,
      PluginErrorCode.API_ERROR,
      { api, ...details }
    )
  }

  static dependencyError(
    pluginId: string,
    dependency: string,
    details?: any
  ): PluginError {
    return new PluginError(
      `Dependency error: ${dependency}`,
      pluginId,
      PluginErrorCode.DEPENDENCY_ERROR,
      { dependency, ...details }
    )
  }

  static runtime(
    pluginId: string,
    message: string,
    details?: any
  ): PluginError {
    return new PluginError(
      message,
      pluginId,
      PluginErrorCode.RUNTIME_ERROR,
      details
    )
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      pluginId: this.pluginId,
      code: this.code,
      details: this.details,
      stack: this.stack,
    }
  }
}
