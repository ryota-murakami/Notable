import { contextBridge, ipcRenderer } from 'electron'

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
  // File operations
  loadNotes: () => ipcRenderer.invoke('load-notes'),
  saveNotes: (notes: any) => ipcRenderer.invoke('save-notes', notes),
  showOpenDialog: () => ipcRenderer.invoke('show-open-dialog'),
  showSaveDialog: () => ipcRenderer.invoke('show-save-dialog'),
  
  // Window operations
  createWindow: () => ipcRenderer.invoke('create-window'),
  closeWindow: () => ipcRenderer.invoke('close-window'),
  minimizeWindow: () => ipcRenderer.invoke('minimize-window'),
  maximizeWindow: () => ipcRenderer.invoke('maximize-window'),
  isMaximized: () => ipcRenderer.invoke('is-maximized'),
  
  // Theme operations
  getTheme: () => ipcRenderer.invoke('get-theme'),
  setTheme: (theme: string) => ipcRenderer.invoke('set-theme', theme),
  
  // Notification
  showNotification: (title: string, body: string) => 
    ipcRenderer.invoke('show-notification', title, body),
  
  // Dev tools
  openDevTools: () => ipcRenderer.invoke('open-dev-tools'),
  reloadWindow: () => ipcRenderer.invoke('reload-window'),
  
  // Export functionality
  exportNote: (noteData: any, format: string, options?: any) => 
    ipcRenderer.invoke('export-note', noteData, format, options),
  
  // Routing
  navigate: (routeId: string, params?: Record<string, string>, query?: Record<string, string>) =>
    ipcRenderer.invoke('routing:navigate', routeId, params, query),
  getCurrentRoute: () => ipcRenderer.invoke('routing:get-current-route'),
  menuNavigate: (routeId: string, params?: Record<string, string>) =>
    ipcRenderer.invoke('routing:menu-navigate', routeId, params),
  deepLink: (url: string) => ipcRenderer.invoke('routing:deep-link', url),
  
  // IPC message listeners
  on: (channel: string, callback: (...args: any[]) => void) => {
    // Whitelist channels
    const validChannels = [
      'menu-new-note',
      'menu-open-file',
      'menu-save',
      'menu-save-as',
      'menu-export-pdf',
      'menu-export-html',
      'menu-export-markdown',
      'menu-preferences',
      'menu-find',
      'menu-find-replace',
      'menu-focus-mode',
      'menu-shortcuts',
      'theme-changed',
      'native-theme-updated',
      'export-request',
      'shortcut-command-palette',
      'shortcut-quick-open',
      'routing:navigate',
      'routing:menu-navigation',
      'routing:deep-link'
    ]
    
    if (validChannels.includes(channel)) {
      // Deliberately strip event as it includes `sender`
      ipcRenderer.on(channel, (_event, ...args) => callback(...args))
    }
  },
  
  removeAllListeners: (channel: string) => {
    ipcRenderer.removeAllListeners(channel)
  }
})