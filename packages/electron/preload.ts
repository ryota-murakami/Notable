import { contextBridge, ipcRenderer, type IpcRendererEvent } from 'electron'

// Type definitions for the exposed API
export interface ElectronAPI {
  // File operations
  loadNotes: () => Promise<any[]>
  saveNotes: (notes: any[]) => Promise<{ success: boolean; error?: string }>
  showOpenDialog: () => Promise<{ canceled: boolean; filePaths: string[] }>
  showSaveDialog: () => Promise<{ canceled: boolean; filePath?: string }>
  exportNote: (
    noteData: { title: string; content: string; filename?: string },
    format: 'markdown' | 'html' | 'pdf' | 'react',
    options?: any
  ) => Promise<{
    success: boolean
    filePath?: string
    requiresPrint?: boolean
    error?: string
    canceled?: boolean
  }>

  // Window management
  createWindow: () => Promise<void>
  closeWindow: () => Promise<void>
  minimizeWindow: () => Promise<void>
  maximizeWindow: () => Promise<void>
  isMaximized: () => Promise<boolean>

  // Theme management
  getTheme: () => Promise<string>
  setTheme: (theme: 'light' | 'dark' | 'system') => Promise<string>

  // Notifications
  showNotification: (title: string, body: string) => Promise<void>

  // Developer tools
  openDevTools: () => Promise<void>
  reloadWindow: () => Promise<void>

  // Navigation & routing
  navigate: (
    routeId: string,
    params?: Record<string, string>,
    query?: Record<string, string>
  ) => Promise<{ success: boolean; error?: string }>
  getCurrentRoute: () => Promise<{
    success: boolean
    data?: any
    error?: string
  }>

  // Event listeners
  onMenuNavigation: (callback: (data: any) => void) => () => void
  onRouteChange: (callback: (data: any) => void) => () => void
  onDeepLink: (callback: (data: { url: string }) => void) => () => void
  onThemeChanged: (callback: (theme: string) => void) => () => void
  onNativeThemeUpdated: (
    callback: (shouldUseDarkColors: boolean) => void
  ) => () => void
  onExportRequest: (callback: (format: string) => void) => () => void

  // Menu event listeners
  onMenuNewNote: (callback: () => void) => () => void
  onMenuOpenFile: (callback: (filePath: string) => void) => () => void
  onMenuSave: (callback: () => void) => () => void
  onMenuSaveAs: (callback: () => void) => () => void
  onMenuPreferences: (callback: () => void) => () => void
  onMenuFind: (callback: () => void) => () => void
  onMenuFindReplace: (callback: () => void) => () => void
  onMenuFocusMode: (callback: () => void) => () => void
  onMenuShortcuts: (callback: () => void) => () => void

  // Shortcut listeners
  onShortcutCommandPalette: (callback: () => void) => () => void
  onShortcutQuickOpen: (callback: () => void) => () => void

  // File system operations (enhanced)
  readFile: (
    filePath: string
  ) => Promise<{ success: boolean; content?: string; error?: string }>
  writeFile: (
    filePath: string,
    content: string
  ) => Promise<{ success: boolean; error?: string }>
  selectDirectory: () => Promise<{ canceled: boolean; filePaths: string[] }>

  // System integration
  openExternal: (url: string) => Promise<void>
  showItemInFolder: (fullPath: string) => Promise<void>
  setAlwaysOnTop: (alwaysOnTop: boolean) => Promise<void>

  // Drag and drop
  handleFileDrop: (filePaths: string[]) => Promise<{ success: boolean }>
  onFileDrop: (callback: (filePaths: string[]) => void) => () => void

  // Clipboard integration
  clipboard: {
    readText: () => Promise<string>
    writeText: (text: string) => Promise<{ success: boolean }>
    readHTML: () => Promise<string>
    writeHTML: (html: string, text?: string) => Promise<{ success: boolean }>
    readImage: () => Promise<{
      buffer: Buffer
      size: { width: number; height: number }
    } | null>
    hasFormat: (format: string) => Promise<boolean>
    availableFormats: () => Promise<string[]>
  }

  // Crash reporting
  crash: {
    reportError: (error: {
      message: string
      stack?: string
      context?: any
    }) => Promise<{ success: boolean; error?: string }>
    getLogs: () => Promise<{ success: boolean; logs?: any[]; error?: string }>
    clearLogs: () => Promise<{ success: boolean; error?: string }>
  }

  // Platform information
  platform: string
  isWindows: boolean
  isMac: boolean
  isLinux: boolean

  // Platform-specific features
  updateRecentDocument: (
    filePath: string
  ) => Promise<{ success: boolean; error?: string }>
}

// Enhanced API with additional features for Issue #172
// This replaces the simple routing preload from routing.ts
const electronAPI: ElectronAPI = {
  // File operations
  loadNotes: () => ipcRenderer.invoke('load-notes'),
  saveNotes: (notes) => ipcRenderer.invoke('save-notes', notes),
  showOpenDialog: () => ipcRenderer.invoke('show-open-dialog'),
  showSaveDialog: () => ipcRenderer.invoke('show-save-dialog'),
  exportNote: (noteData, format, options) =>
    ipcRenderer.invoke('export-note', noteData, format, options),

  // Window management
  createWindow: () => ipcRenderer.invoke('create-window'),
  closeWindow: () => ipcRenderer.invoke('close-window'),
  minimizeWindow: () => ipcRenderer.invoke('minimize-window'),
  maximizeWindow: () => ipcRenderer.invoke('maximize-window'),
  isMaximized: () => ipcRenderer.invoke('is-maximized'),

  // Theme management
  getTheme: () => ipcRenderer.invoke('get-theme'),
  setTheme: (theme) => ipcRenderer.invoke('set-theme', theme),

  // Notifications
  showNotification: (title, body) =>
    ipcRenderer.invoke('show-notification', title, body),

  // Developer tools
  openDevTools: () => ipcRenderer.invoke('open-dev-tools'),
  reloadWindow: () => ipcRenderer.invoke('reload-window'),

  // Navigation & routing
  navigate: (routeId, params, query) =>
    ipcRenderer.invoke('routing:navigate', routeId, params, query),
  getCurrentRoute: () => ipcRenderer.invoke('routing:get-current-route'),

  // Event listeners with cleanup
  onMenuNavigation: (callback) => {
    const handler = (_event: IpcRendererEvent, data: any) => callback(data)
    ipcRenderer.on('routing:menu-navigation', handler)
    return () => ipcRenderer.removeListener('routing:menu-navigation', handler)
  },

  onRouteChange: (callback) => {
    const handler = (_event: IpcRendererEvent, data: any) => callback(data)
    ipcRenderer.on('routing:route-change', handler)
    return () => ipcRenderer.removeListener('routing:route-change', handler)
  },

  onDeepLink: (callback) => {
    const handler = (_event: IpcRendererEvent, data: { url: string }) =>
      callback(data)
    ipcRenderer.on('routing:deep-link', handler)
    return () => ipcRenderer.removeListener('routing:deep-link', handler)
  },

  onThemeChanged: (callback) => {
    const handler = (_event: IpcRendererEvent, theme: string) => callback(theme)
    ipcRenderer.on('theme-changed', handler)
    return () => ipcRenderer.removeListener('theme-changed', handler)
  },

  onNativeThemeUpdated: (callback) => {
    const handler = (_event: IpcRendererEvent, shouldUseDarkColors: boolean) =>
      callback(shouldUseDarkColors)
    ipcRenderer.on('native-theme-updated', handler)
    return () => ipcRenderer.removeListener('native-theme-updated', handler)
  },

  onExportRequest: (callback) => {
    const handler = (_event: IpcRendererEvent, format: string) =>
      callback(format)
    ipcRenderer.on('export-request', handler)
    return () => ipcRenderer.removeListener('export-request', handler)
  },

  // Menu event listeners
  onMenuNewNote: (callback) => {
    const handler = () => callback()
    ipcRenderer.on('menu-new-note', handler)
    return () => ipcRenderer.removeListener('menu-new-note', handler)
  },

  onMenuOpenFile: (callback) => {
    const handler = (_event: IpcRendererEvent, filePath: string) =>
      callback(filePath)
    ipcRenderer.on('menu-open-file', handler)
    return () => ipcRenderer.removeListener('menu-open-file', handler)
  },

  onMenuSave: (callback) => {
    const handler = () => callback()
    ipcRenderer.on('menu-save', handler)
    return () => ipcRenderer.removeListener('menu-save', handler)
  },

  onMenuSaveAs: (callback) => {
    const handler = () => callback()
    ipcRenderer.on('menu-save-as', handler)
    return () => ipcRenderer.removeListener('menu-save-as', handler)
  },

  onMenuPreferences: (callback) => {
    const handler = () => callback()
    ipcRenderer.on('menu-preferences', handler)
    return () => ipcRenderer.removeListener('menu-preferences', handler)
  },

  onMenuFind: (callback) => {
    const handler = () => callback()
    ipcRenderer.on('menu-find', handler)
    return () => ipcRenderer.removeListener('menu-find', handler)
  },

  onMenuFindReplace: (callback) => {
    const handler = () => callback()
    ipcRenderer.on('menu-find-replace', handler)
    return () => ipcRenderer.removeListener('menu-find-replace', handler)
  },

  onMenuFocusMode: (callback) => {
    const handler = () => callback()
    ipcRenderer.on('menu-focus-mode', handler)
    return () => ipcRenderer.removeListener('menu-focus-mode', handler)
  },

  onMenuShortcuts: (callback) => {
    const handler = () => callback()
    ipcRenderer.on('menu-shortcuts', handler)
    return () => ipcRenderer.removeListener('menu-shortcuts', handler)
  },

  // Shortcut listeners
  onShortcutCommandPalette: (callback) => {
    const handler = () => callback()
    ipcRenderer.on('shortcut-command-palette', handler)
    return () => ipcRenderer.removeListener('shortcut-command-palette', handler)
  },

  onShortcutQuickOpen: (callback) => {
    const handler = () => callback()
    ipcRenderer.on('shortcut-quick-open', handler)
    return () => ipcRenderer.removeListener('shortcut-quick-open', handler)
  },

  // File system operations (enhanced)
  readFile: (filePath) => ipcRenderer.invoke('read-file', filePath),
  writeFile: (filePath, content) =>
    ipcRenderer.invoke('write-file', filePath, content),
  selectDirectory: () => ipcRenderer.invoke('select-directory'),

  // System integration
  openExternal: (url) => ipcRenderer.invoke('open-external', url),
  showItemInFolder: (fullPath) =>
    ipcRenderer.invoke('show-item-in-folder', fullPath),
  setAlwaysOnTop: (alwaysOnTop) =>
    ipcRenderer.invoke('set-always-on-top', alwaysOnTop),

  // Drag and drop
  handleFileDrop: (filePaths) =>
    ipcRenderer.invoke('handle-file-drop', filePaths),
  onFileDrop: (callback) => {
    const handler = (_event: IpcRendererEvent, filePaths: string[]) =>
      callback(filePaths)
    ipcRenderer.on('file-drop', handler)
    return () => ipcRenderer.removeListener('file-drop', handler)
  },

  // Clipboard integration
  clipboard: {
    readText: () => ipcRenderer.invoke('clipboard-read-text'),
    writeText: (text) => ipcRenderer.invoke('clipboard-write-text', text),
    readHTML: () => ipcRenderer.invoke('clipboard-read-html'),
    writeHTML: (html, text) =>
      ipcRenderer.invoke('clipboard-write-html', html, text),
    readImage: () => ipcRenderer.invoke('clipboard-read-image'),
    hasFormat: (format) => ipcRenderer.invoke('clipboard-has-format', format),
    availableFormats: () => ipcRenderer.invoke('clipboard-available-formats'),
  },

  // Crash reporting
  crash: {
    reportError: (error) => ipcRenderer.invoke('crash-report', error),
    getLogs: () => ipcRenderer.invoke('get-crash-logs'),
    clearLogs: () => ipcRenderer.invoke('clear-crash-logs'),
  },

  // Platform information
  platform: process.platform,
  isWindows: process.platform === 'win32',
  isMac: process.platform === 'darwin',
  isLinux: process.platform === 'linux',

  // Platform-specific features
  updateRecentDocument: (filePath) =>
    ipcRenderer.invoke('update-recent-document', filePath),
}

// Expose the API to the renderer process
contextBridge.exposeInMainWorld('electronAPI', electronAPI)

// Extending the existing global Window interface from routing package
// Note: The routing package already declares electronAPI with a subset of methods
// We're extending it with our comprehensive interface

// Development utilities (only in development)
if (process.env.NODE_ENV === 'development') {
  contextBridge.exposeInMainWorld('electronDev', {
    versions: process.versions,
    platform: process.platform,
    arch: process.arch,
  })
}
