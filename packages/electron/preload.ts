import { contextBridge, ipcRenderer } from 'electron'
import type { Note } from '../../types/note'

// Expose APIs to renderer process
contextBridge.exposeInMainWorld('electronAPI', {
  // Note management
  loadNotes: () => ipcRenderer.invoke('load-notes'),
  saveNotes: (notes: Note[]) => ipcRenderer.invoke('save-notes', notes),

  // File operations
  showOpenDialog: () => ipcRenderer.invoke('show-open-dialog'),
  showSaveDialog: () => ipcRenderer.invoke('show-save-dialog'),

  // Window management
  createWindow: () => ipcRenderer.invoke('create-window'),
  closeWindow: () => ipcRenderer.invoke('close-window'),
  minimizeWindow: () => ipcRenderer.invoke('minimize-window'),
  maximizeWindow: () => ipcRenderer.invoke('maximize-window'),

  // Theme management
  getTheme: () => ipcRenderer.invoke('get-theme'),
  setTheme: (theme: string) => ipcRenderer.invoke('set-theme', theme),

  // Notifications
  showNotification: (title: string, body: string) =>
    ipcRenderer.invoke('show-notification', title, body),

  // Event listeners for menu actions and shortcuts
  onMenuAction: (callback: (action: string, data?: unknown) => void) => {
    const handler = (_event: unknown, action: string, data?: unknown) =>
      callback(action, data)

    const channels = [
      'menu-new-note',
      'menu-open-file',
      'menu-save',
      'menu-save-as',
      'menu-export-pdf',
      'menu-export-html',
      'menu-export-markdown',
      'export-request',
      'menu-preferences',
      'menu-find',
      'menu-find-replace',
      'menu-focus-mode',
      'menu-shortcuts',
      'shortcut-command-palette',
      'shortcut-quick-open',
      'theme-changed',
      'native-theme-updated',
    ]

    channels.forEach((channel) => ipcRenderer.on(channel, handler))

    return () => {
      channels.forEach((channel) =>
        ipcRenderer.removeListener(channel, handler)
      )
    }
  },

  // Platform info
  platform: process.platform,
  isMaximized: () => ipcRenderer.invoke('is-maximized'),

  // Development helpers
  openDevTools: () => ipcRenderer.invoke('open-dev-tools'),
  reloadWindow: () => ipcRenderer.invoke('reload-window'),
  
  // Export functionality
  exportNote: (noteData: any, format: string, options?: any) => 
    ipcRenderer.invoke('export-note', noteData, format, options),

  // Generic message listener (for testing)
  onMessage: (channel: string, callback: (data: any) => void) => {
    const handler = (_event: unknown, data: any) => callback(data)
    ipcRenderer.on(channel, handler)
    return () => {
      ipcRenderer.removeListener(channel, handler)
    }
  },
})
