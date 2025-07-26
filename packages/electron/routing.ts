import { BrowserWindow, ipcMain } from 'electron'
import {
  desktopAdapter,
  initializePlatformRouting,
  webAdapter,
} from '@notable/routing'

// Main process routing setup
export function setupRoutingInMainProcess() {
  // Initialize desktop routing
  const { cleanup } = initializePlatformRouting('desktop', {
    // The desktop adapter can delegate to web adapter for web content
    webAdapter,
  })

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
        desktopAdapter.navigate({ id: routeId } as any, params, query)
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
    try {
      const currentRoute = desktopAdapter.getCurrentRoute()
      return { success: true, data: currentRoute }
    } catch (error) {
      console.error('Get current route error:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : String(error),
      }
    }
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

  return cleanup
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
