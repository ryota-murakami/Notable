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

