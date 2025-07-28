import { BrowserWindow, ipcMain } from 'electron'

// Main process routing setup
export function setupRoutingInMainProcess() {
  console.log('Desktop routing not yet implemented - using web adapter fallback')

  // Set up IPC handlers for routing
  ipcMain.handle(
    'routing:navigate',
    async (
      _event,
      routeId: string,
      params?: Record<string, string>,
      query?: Record<string, string>
    ) => {
      try {
        // For now, just broadcast to renderer process
        const focusedWindow = BrowserWindow.getFocusedWindow()
        if (focusedWindow) {
          focusedWindow.webContents.send('routing:navigate', { routeId, params, query })
        }
        return { success: true }
      } catch (error) {
        console.error('Navigation error:', error)
        return {
          success: false,
          error: error instanceof Error ? error.message : String(error),
        }
      }
    }
  )

  ipcMain.handle('routing:get-current-route', async () => {
    // For now, return a mock current route
    return { success: true, data: { route: null, params: {}, query: {} } }
  })

  // Handle menu-triggered navigation
  ipcMain.handle(
    'routing:menu-navigate',
    async (_event, routeId: string, params?: Record<string, string>) => {
      const focusedWindow = BrowserWindow.getFocusedWindow()
      if (focusedWindow) {
        focusedWindow.webContents.send('routing:menu-navigation', {
          routeId,
          params,
        })
      }
    }
  )

  // Handle deep link navigation
  ipcMain.handle('routing:deep-link', async (_event, url: string) => {
    const focusedWindow = BrowserWindow.getFocusedWindow()
    if (focusedWindow) {
      focusedWindow.webContents.send('routing:deep-link', { url })
    }
  })

  return () => {
    // Cleanup placeholder
    console.log('Cleaning up electron routing handlers')
  }
}

// Renderer process preload setup
export const routingPreload = `
// Expose routing API to renderer process
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  // Navigation methods
  navigate: (routeId, params, query) => ipcRenderer.invoke('routing:navigate', routeId, params, query),
  getCurrentRoute: () => ipcRenderer.invoke('routing:get-current-route'),
  
  // Event listeners
  onMenuNavigation: (callback) => {
    ipcRenderer.on('routing:menu-navigation', (event, data) => callback(data))
  },
  
  onRouteChange: (callback) => {
    ipcRenderer.on('routing:route-change', (event, data) => callback(data))
  },
  
  onDeepLink: (callback) => {
    ipcRenderer.on('routing:deep-link', (event, data) => callback(data))
  },
  
  // Utility methods
  setAlwaysOnTop: (alwaysOnTop) => {
    const { BrowserWindow } = require('electron').remote || require('@electron/remote')
    const currentWindow = BrowserWindow.getFocusedWindow()
    if (currentWindow) {
      currentWindow.setAlwaysOnTop(alwaysOnTop)
    }
  }
})
`
