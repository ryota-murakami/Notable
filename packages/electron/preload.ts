import { contextBridge, ipcRenderer } from 'electron'

console.log('[Preload] Starting preload script execution...')

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
console.log('[Preload] About to expose electronAPI to main world...')
contextBridge.exposeInMainWorld('electronAPI', {
  // File operations
  loadNotes: () => ipcRenderer.invoke('load-notes'),
  saveNotes: (notes: any) => ipcRenderer.invoke('save-notes', notes),
  
  // Dialog operations
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
  
  // Notification operations
  showNotification: (title: string, body: string) => ipcRenderer.invoke('show-notification', title, body),
  
  // Development operations
  openDevTools: () => ipcRenderer.invoke('open-dev-tools'),
  reloadWindow: () => ipcRenderer.invoke('reload-window'),
  
  // Export operations
  exportNote: (noteData: any, format: string, options?: any) => ipcRenderer.invoke('export-note', noteData, format, options),
  
  // Menu listeners
  onMessage: (channel: string, callback: (data: any) => void) => {
    const subscription = (_event: any, data: any) => callback(data)
    ipcRenderer.on(channel, subscription)
    
    // Return unsubscribe function
    return () => ipcRenderer.removeListener(channel, subscription)
  },
  
  // Remove listeners
  removeAllListeners: (channel: string) => ipcRenderer.removeAllListeners(channel),
})

console.log('[Preload] electronAPI has been exposed successfully!')