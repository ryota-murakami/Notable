import { _electron as electron, type ElectronApplication, type Page } from '@playwright/test'
import * as path from 'path'
import * as os from 'os'
import * as fs from 'fs'
import { fileURLToPath } from 'url'

export interface ElectronTestContext {
  app: ElectronApplication
  page: Page
}

/**
 * Launch the Electron application for testing
 */
export async function launchElectronApp(): Promise<ElectronTestContext> {
  // Path to the main process file (compiled JavaScript)
  const __dirname = path.dirname(fileURLToPath(import.meta.url))
  const mainPath = path.join(__dirname, '../../build/main.js')
  
  // Launch Electron app
  const app = await electron.launch({
    args: [mainPath],
    env: {
      ...process.env,
      NODE_ENV: 'test',
      ELECTRON_IS_DEV: '1',
    },
  })

  // Wait for the first window to appear
  const page = await app.firstWindow()
  
  return { app, page }
}

/**
 * Close the Electron application
 */
export async function closeElectronApp(app: ElectronApplication): Promise<void> {
  await app.close()
}

/**
 * Wait for window to be ready
 */
export async function waitForWindowReady(page: Page): Promise<void> {
  await page.waitForLoadState('domcontentloaded')
  await page.waitForFunction(() => (globalThis as any).document.readyState === 'complete')
}

/**
 * Evaluate code in the main process
 */
export async function evaluateInMain<T>(
  app: ElectronApplication,
  func: (electronAPI: any) => T | Promise<T>
): Promise<T> {
  return app.evaluate(func)
}

/**
 * Trigger menu item by evaluating in main process
 */
export async function triggerMenuItem(
  app: ElectronApplication,
  menuId: string
): Promise<void> {
  await app.evaluate(({ Menu }, menuId) => {
    const menu = Menu.getApplicationMenu()
    if (menu) {
      const menuItem = menu.getMenuItemById(menuId)
      if (menuItem) {
        menuItem.click()
      }
    }
  }, menuId)
}

/**
 * Get all windows
 */
export async function getAllWindows(app: ElectronApplication): Promise<Page[]> {
  return app.windows()
}

/**
 * Wait for a new window to appear
 */
export async function waitForNewWindow(
  app: ElectronApplication,
  action: () => Promise<void>
): Promise<Page> {
  const [newPage] = await Promise.all([
    app.waitForEvent('window'),
    action(),
  ])
  
  return newPage
}

/**
 * Send IPC message to renderer and wait for response
 */
export async function sendIPCMessage<T>(
  page: Page,
  channel: string,
  ...args: unknown[]
): Promise<T> {
  return page.evaluate(async ({ channel, args }) => {
    return (window as any).electronAPI[channel](...args)
  }, { channel, args })
}

/**
 * Listen for IPC message from main process
 */
export function waitForIPCMessage(
  page: Page,
  channel: string,
  timeout = 5000
): Promise<unknown> {
  // Create a unique handler name
  const handlerName = `__ipcHandler_${channel.replace(/-/g, '_')}_${Date.now()}`
  
  console.log(`[Test Utils] Setting up waitForIPCMessage for channel: ${channel}`)
  
  // Create a promise that will resolve when the message is received
  const messagePromise = new Promise<unknown>((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      console.error(`[Test Utils] Timeout waiting for IPC message: ${channel}`)
      reject(new Error(`Timeout waiting for IPC message: ${channel}`))
    }, timeout)
    
    // Use async IIFE to handle async operations
    ;(async () => {
      try {
        // Expose a function that can be called from the page
        await page.exposeFunction(handlerName, (data: unknown) => {
          console.log(`[Test Utils] Handler called for channel ${channel} with data:`, data)
          clearTimeout(timeoutId)
          resolve(data || true) // Resolve with data or true if no data
        })
        
        // Set up the IPC listener in the page context
        await page.evaluate(({ channel, handlerName }) => {
        console.log(`[Test] Setting up IPC listener for channel: ${channel}`)
        console.log(`[Test] window.electronAPI:`, (window as any).electronAPI)
        console.log(`[Test] window.electronAPI.onMessage:`, (window as any).electronAPI?.onMessage)
        
        if (!(window as any).electronAPI || !(window as any).electronAPI.onMessage) {
          console.error(`[Test] Missing electronAPI.onMessage function!`)
          throw new Error('(window as any).electronAPI.onMessage is not available')
        }
        
        const cleanup = (window as any).electronAPI.onMessage(channel, (data: unknown) => {
          console.log(`[Test] Received IPC message on channel ${channel}:`, data)
          ;(window as any)[handlerName](data)
          cleanup()
        })
        
        // Store cleanup function for later
        ;(window as any)[`__cleanup_${handlerName}`] = cleanup
      }, { channel, handlerName })
      
        console.log(`[Test Utils] IPC listener setup complete for channel: ${channel}`)
      } catch (err) {
        clearTimeout(timeoutId)
        console.error(`[Test Utils] Error setting up IPC listener for ${channel}:`, err)
        reject(err)
      }
    })()
  })
  
  return messagePromise
}

/**
 * Simulate global shortcut (since we can't actually trigger OS-level shortcuts)
 */
export async function simulateGlobalShortcut(
  app: ElectronApplication,
  shortcut: string
): Promise<void> {
  await app.evaluate((_electronApi, shortcut) => {
    // This is a workaround since we can't trigger actual global shortcuts in tests
    console.log(`Simulating global shortcut: ${shortcut}`)
    // Note: getRegisteredShortcuts() is not a public API, so we just log the simulation
  }, shortcut)
}

/**
 * Wait for theme change
 */
export async function waitForThemeChange(
  page: Page,
  expectedTheme: string
): Promise<void> {
  await page.waitForFunction(
    (theme) => {
      return (window as any).electronAPI && (window as any).electronAPI.getTheme() === theme
    },
    expectedTheme,
    { timeout: 5000 }
  )
}

/**
 * Get app version
 */
export async function getAppVersion(app: ElectronApplication): Promise<string> {
  return await app.evaluate(({ app }) => app.getVersion())
}

/**
 * Get app name
 */
export async function getAppName(app: ElectronApplication): Promise<string> {
  return await app.evaluate(({ app }) => app.getName())
}

/**
 * Check if app is packaged
 */
export async function isAppPackaged(app: ElectronApplication): Promise<boolean> {
  return await app.evaluate(({ app }) => app.isPackaged)
}

/**
 * Set window state
 */
export async function setWindowState(
  page: Page,
  state: 'minimize' | 'maximize' | 'restore'
): Promise<void> {
  switch (state) {
    case 'minimize':
      await sendIPCMessage(page, 'minimize-window')
      break
    case 'maximize':
      await sendIPCMessage(page, 'maximize-window')
      break
    case 'restore':
      await sendIPCMessage(page, 'maximize-window') // Toggle to restore
      break
  }
}

/**
 * Get window state
 */
export async function getWindowState(page: Page): Promise<{
  isMaximized: boolean
  isMinimized: boolean
}> {
  const isMaximized = await sendIPCMessage<boolean>(page, 'is-maximized')
  
  return {
    isMaximized,
    isMinimized: false, // We'd need to implement this IPC if needed
  }
}

/**
 * Mock notifications for testing
 */
export async function mockNotifications(app: ElectronApplication): Promise<void> {
  await app.evaluate(() => {
    // In Electron main process, we can just set a flag for testing
    // This is a simplified approach for testing notifications
    
    // Set a flag to indicate notifications are mocked
    (global as any).__notificationsMocked = true
  })
}

/**
 * Test file operations with temporary files
 */
export function getTempFilePath(filename: string): string {
  return path.join(os.tmpdir(), `notable-test-${Date.now()}-${filename}`)
}

/**
 * Clean up temp files
 */
export function cleanupTempFiles(filePaths: string[]): void {
  filePaths.forEach(filePath => {
    try {
      if (fs.existsSync(filePath)) { // eslint-disable-line no-sync
        fs.unlinkSync(filePath) // eslint-disable-line no-sync
      }
    } catch (error) {
      console.warn(`Failed to cleanup temp file: ${filePath}`, error)
    }
  })
}