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
    ipcRenderer.on('menu-new-note', handler)
    ipcRenderer.on('menu-open-file', handler)
    ipcRenderer.on('menu-save', handler)
    ipcRenderer.on('menu-save-as', handler)
    ipcRenderer.on('menu-export-pdf', handler)
    ipcRenderer.on('menu-export-html', handler)
    ipcRenderer.on('menu-export-markdown', handler)
    ipcRenderer.on('menu-preferences', handler)
    ipcRenderer.on('menu-find', handler)
    ipcRenderer.on('menu-find-replace', handler)
    ipcRenderer.on('menu-focus-mode', handler)
    ipcRenderer.on('menu-shortcuts', handler)
    ipcRenderer.on('shortcut-command-palette', handler)
    ipcRenderer.on('shortcut-quick-open', handler)
    ipcRenderer.on('theme-changed', handler)
    ipcRenderer.on('native-theme-updated', handler)

    return () => {
      ipcRenderer.removeAllListeners('menu-new-note')
      ipcRenderer.removeAllListeners('menu-open-file')
      ipcRenderer.removeAllListeners('menu-save')
      ipcRenderer.removeAllListeners('menu-save-as')
      ipcRenderer.removeAllListeners('menu-export-pdf')
      ipcRenderer.removeAllListeners('menu-export-html')
      ipcRenderer.removeAllListeners('menu-export-markdown')
      ipcRenderer.removeAllListeners('menu-preferences')
      ipcRenderer.removeAllListeners('menu-find')
      ipcRenderer.removeAllListeners('menu-find-replace')
      ipcRenderer.removeAllListeners('menu-focus-mode')
      ipcRenderer.removeAllListeners('menu-shortcuts')
      ipcRenderer.removeAllListeners('shortcut-command-palette')
      ipcRenderer.removeAllListeners('shortcut-quick-open')
      ipcRenderer.removeAllListeners('theme-changed')
      ipcRenderer.removeAllListeners('native-theme-updated')
    }
  },

  // Platform info
  platform: process.platform,
  isMaximized: () => ipcRenderer.invoke('is-maximized'),

  // Development helpers
  openDevTools: () => ipcRenderer.invoke('open-dev-tools'),
  reloadWindow: () => ipcRenderer.invoke('reload-window'),
})
