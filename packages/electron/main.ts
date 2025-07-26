import {
  app,
  BrowserWindow,
  clipboard,
  crashReporter,
  dialog,
  globalShortcut,
  ipcMain,
  Menu,
  nativeTheme,
  session,
  shell,
  TouchBar,
  Tray,
} from 'electron'
import * as path from 'path'
import * as fs from 'fs'
import * as localShortcut from 'electron-localshortcut'
import { autoUpdater } from 'electron-updater'
import * as notifier from 'node-notifier'
import Store from 'electron-store'
import { setupRoutingInMainProcess } from './routing'

// __dirname is automatically available in CommonJS

let mainWindow: BrowserWindow | null = null
let tray: Tray | null = null
let isQuitting = false
const windows: Set<BrowserWindow> = new Set()

// Configuration
const isDevelopment = process.env.NODE_ENV === 'development'
const isMac = process.platform === 'darwin'
const isWindows = process.platform === 'win32'

// Initialize persistent store
interface StoreSchema {
  windowState: {
    width: number
    height: number
    x?: number
    y?: number
    isMaximized: boolean
  }
  preferences: {
    theme: string
    autoSave: boolean
    spellCheck: boolean
  }
}

const store = new Store<StoreSchema>({
  defaults: {
    windowState: {
      width: 1200,
      height: 800,
      x: undefined,
      y: undefined,
      isMaximized: false,
    },
    preferences: {
      theme: 'system',
      autoSave: true,
      spellCheck: true,
    },
  },
})

// Security configuration
function setupSecurity() {
  // Configure Content Security Policy
  const cspPolicy = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // Note: unsafe-eval needed for React dev mode
    "style-src 'self' 'unsafe-inline'", // unsafe-inline needed for styled components
    "img-src 'self' data: blob: https:",
    "font-src 'self' data:",
    "connect-src 'self' https: wss: ws:",
    "media-src 'self' blob:",
    "object-src 'none'",
    "base-uri 'self'",
    "frame-ancestors 'none'",
    "form-action 'self'",
  ].join('; ')

  // Set up session security
  const ses = session.defaultSession

  // Set CSP header for all responses
  ses.webRequest.onHeadersReceived((details, callback) => {
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        'Content-Security-Policy': [cspPolicy],
        'X-Content-Type-Options': ['nosniff'],
        'X-Frame-Options': ['DENY'],
        'X-XSS-Protection': ['1; mode=block'],
        'Referrer-Policy': ['strict-origin-when-cross-origin'],
        'Permissions-Policy': [
          'camera=(), microphone=(), geolocation=(), notifications=()',
        ],
      },
    })
  })

  // Block insecure content and set additional security policies
  ses.setPermissionRequestHandler((_webContents, permission, callback) => {
    // Allow only essential permissions
    const allowedPermissions = ['notifications']
    callback(allowedPermissions.includes(permission))
  })

  // Block potentially dangerous URLs
  ses.webRequest.onBeforeRequest((details, callback) => {
    const url = new URL(details.url)

    // Block file:// protocol except for app files
    if (url.protocol === 'file:' && !details.url.includes(app.getAppPath())) {
      callback({ cancel: true })
      return
    }

    // Block dangerous protocols
    const blockedProtocols = ['ftp:', 'file:', 'about:']
    if (
      blockedProtocols.some((protocol) => url.protocol === protocol) &&
      !details.url.includes(app.getAppPath())
    ) {
      callback({ cancel: true })
      return
    }

    callback({ cancel: false })
  })

  // Enhanced certificate verification
  ses.setCertificateVerifyProc((request, callback) => {
    // Allow localhost for development
    if (isDevelopment && request.hostname === 'localhost') {
      callback(0) // Accept
      return
    }

    // Use default verification for all other cases
    callback(-3) // Use default verification
  })
}

// Platform-specific features
function setupPlatformFeatures() {
  if (isMac) {
    setupMacOSTouchBar()
  }

  if (isWindows) {
    setupWindowsJumpList()
  }
}

// macOS Touch Bar support
function setupMacOSTouchBar() {
  if (!TouchBar) return

  const { TouchBarButton, TouchBarSpacer } = TouchBar

  const newNoteButton = new TouchBarButton({
    label: '✏️ New Note',
    backgroundColor: '#007ACC',
    click: () => {
      if (mainWindow) {
        mainWindow.webContents.send('menu-new-note')
      }
    },
  })

  const saveButton = new TouchBarButton({
    label: '💾 Save',
    backgroundColor: '#28A745',
    click: () => {
      if (mainWindow) {
        mainWindow.webContents.send('menu-save')
      }
    },
  })

  const findButton = new TouchBarButton({
    label: '🔍 Find',
    backgroundColor: '#6F42C1',
    click: () => {
      if (mainWindow) {
        mainWindow.webContents.send('menu-find')
      }
    },
  })

  const focusModeButton = new TouchBarButton({
    label: '🎯 Focus',
    backgroundColor: '#FD7E14',
    click: () => {
      if (mainWindow) {
        mainWindow.webContents.send('menu-focus-mode')
      }
    },
  })

  const exportButton = new TouchBarButton({
    label: '📤 Export',
    backgroundColor: '#20C997',
    click: () => {
      if (mainWindow) {
        // Trigger export dialog
        mainWindow.webContents.send('export-request', 'markdown')
      }
    },
  })

  const touchBar = new TouchBar({
    items: [
      newNoteButton,
      new TouchBarSpacer({ size: 'small' }),
      saveButton,
      new TouchBarSpacer({ size: 'small' }),
      findButton,
      new TouchBarSpacer({ size: 'small' }),
      focusModeButton,
      new TouchBarSpacer({ size: 'small' }),
      exportButton,
    ],
  })

  // Apply touch bar to main window when it's created
  if (mainWindow) {
    mainWindow.setTouchBar(touchBar)
  }

  // Store reference for later use
  (global as any).touchBar = touchBar
}

// Windows Jump List support
function setupWindowsJumpList() {
  if (!isWindows) return

  const jumpList = [
    {
      type: 'custom' as const,
      name: 'Quick Actions',
      items: [
        {
          type: 'task' as const,
          title: 'New Note',
          description: 'Create a new note',
          program: process.execPath,
          args: '--new-note',
          iconPath: process.execPath,
          iconIndex: 0,
        },
        {
          type: 'task' as const,
          title: 'Quick Note',
          description: 'Open quick note window',
          program: process.execPath,
          args: '--quick-note',
          iconPath: process.execPath,
          iconIndex: 0,
        },
        {
          type: 'task' as const,
          title: 'Search Notes',
          description: 'Search through your notes',
          program: process.execPath,
          args: '--search',
          iconPath: process.execPath,
          iconIndex: 0,
        },
      ],
    },
    {
      type: 'recent' as const,
      // Recent files will be automatically populated by the OS
    },
  ]

  app.setJumpList(jumpList)
}

// Handle jump list task arguments
function handleJumpListArgs() {
  const args = process.argv

  if (args.includes('--new-note')) {
    // Create main window if not exists and trigger new note
    if (!mainWindow) {
      createWindow()
    }
    setTimeout(() => {
      if (mainWindow) {
        mainWindow.webContents.send('menu-new-note')
      }
    }, 1000)
  }

  if (args.includes('--quick-note')) {
    // Create quick note window
    setTimeout(() => {
      createQuickNoteWindow()
    }, 1000)
  }

  if (args.includes('--search')) {
    // Create main window if not exists and open search
    if (!mainWindow) {
      createWindow()
    }
    setTimeout(() => {
      if (mainWindow) {
        mainWindow.webContents.send('shortcut-command-palette')
      }
    }, 1000)
  }
}

// Update recent documents for Jump Lists
function updateRecentDocument(filePath: string) {
  if (isWindows) {
    app.addRecentDocument(filePath)
  }
}

// Window state management
class WindowStateManager {
  private window: BrowserWindow
  private key: string

  constructor(window: BrowserWindow, key = 'windowState') {
    this.window = window
    this.key = key
    this.restoreState()
    this.attachEventListeners()
  }

  private restoreState() {
    const state = (store as any).get(this.key)
    if (state) {
      if (state.x !== undefined && state.y !== undefined) {
        this.window.setPosition(state.x, state.y)
      }
      if (state.width && state.height) {
        this.window.setSize(state.width, state.height)
      }
      if (state.isMaximized) {
        this.window.maximize()
      }
    }
  }

  private attachEventListeners() {
    const saveState = () => {
      if (this.window.isDestroyed()) return

      const bounds = this.window.getBounds()
      const isMaximized = this.window.isMaximized()

      ;(store as any).set(this.key, {
        ...bounds,
        isMaximized,
      })
    }

    // Save state on various events
    this.window.on('resize', saveState)
    this.window.on('move', saveState)
    this.window.on('maximize', saveState)
    this.window.on('unmaximize', saveState)
    this.window.on('close', saveState)
  }
}

// Set app name from package.json productName
app.setName('Notable')

// Initialize crash reporter
if (!isDevelopment) {
  crashReporter.start({
    productName: 'Notable',
    companyName: 'Notable',
    submitURL: '', // In production, this should be your crash reporting endpoint
    uploadToServer: false, // Set to true in production with proper endpoint
    ignoreSystemCrashHandler: false,
    rateLimit: true,
    compress: true,
    globalExtra: {
      version: app.getVersion(),
      platform: process.platform,
      arch: process.arch,
    },
  })
}

// Handle process crashes
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error)

  // Log to file for debugging
  const crashLogPath = path.join(app.getPath('userData'), 'crash.log')
  const crashData = {
    timestamp: new Date().toISOString(),
    type: 'uncaughtException',
    error: error.message,
    stack: error.stack,
    platform: process.platform,
    version: app.getVersion(),
  }

  try {
    fs.appendFileSync(crashLogPath, `${JSON.stringify(crashData)  }\n`)
  } catch (logError) {
    console.error('Failed to write crash log:', logError)
  }

  // Show error dialog to user
  if (mainWindow && !mainWindow.isDestroyed()) {
    dialog.showErrorBox(
      'Unexpected Error',
      'An unexpected error occurred. The application will continue running, but you may want to save your work and restart.'
    )
  }
})

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason)

  // Log to file for debugging
  const crashLogPath = path.join(app.getPath('userData'), 'crash.log')
  const crashData = {
    timestamp: new Date().toISOString(),
    type: 'unhandledRejection',
    reason: String(reason),
    platform: process.platform,
    version: app.getVersion(),
  }

  try {
    fs.appendFileSync(crashLogPath, `${JSON.stringify(crashData)  }\n`)
  } catch (logError) {
    console.error('Failed to write crash log:', logError)
  }
})

const createWindow = () => {
  // Get default window state from store
  const defaultState = (store as any).get('windowState')
  const iconPath = getIconPath()

  const windowOptions: Electron.BrowserWindowConstructorOptions = {
    width: defaultState.width || 1200,
    height: defaultState.height || 800,
    x: defaultState.x,
    y: defaultState.y,
    minWidth: 800,
    minHeight: 600,
    show: false, // Don't show until ready
    titleBarStyle: isMac ? 'hiddenInset' : 'default',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      webSecurity: true,
      // Enhanced security with sandboxing enabled
      sandbox: true, // Enable sandboxing for better security
      allowRunningInsecureContent: false,
      experimentalFeatures: false,
      enableBlinkFeatures: '', // Disable experimental features
      disableBlinkFeatures: 'Auxclick', // Disable potentially dangerous features
    },
  }

  if (iconPath) {
    windowOptions.icon = iconPath
  }

  mainWindow = new BrowserWindow(windowOptions)

  // Initialize window state management
  new WindowStateManager(mainWindow)

  windows.add(mainWindow)

  const startUrl =
    process.env.ELECTRON_START_URL ||
    `file://${path.join(__dirname, '../../web/out/index.html')}`

  console.log(`[Main] Attempting to load URL: ${startUrl}`)

  // Load URL with error handling
  const loadUrlWithFallback = async () => {
    try {
      await mainWindow!.loadURL(startUrl)
      console.log(`[Main] Successfully loaded URL: ${startUrl}`)
    } catch (error) {
      console.error(`[Main] Failed to load URL: ${startUrl}`, error)

      // If development URL fails, try to fall back to built files
      if (process.env.ELECTRON_START_URL) {
        const fallbackUrl = `file://${path.join(__dirname, '../../web/out/index.html')}`
        console.log(`[Main] Attempting fallback to: ${fallbackUrl}`)

        try {
          await mainWindow!.loadURL(fallbackUrl)
          console.log(`[Main] Successfully loaded fallback URL: ${fallbackUrl}`)

          // Show a notification that we're running in offline mode
          if (mainWindow && !mainWindow.isDestroyed()) {
            mainWindow.webContents
              .executeJavaScript(
                `
              if (typeof window !== 'undefined' && window.electronAPI) {
                console.log('Running in offline mode - development server not available');
              }
            `
              )
              .catch(() => {
                // Ignore errors if the page isn't ready yet
              })
          }
        } catch (fallbackError) {
          console.error(
            `[Main] Fallback URL also failed: ${fallbackUrl}`,
            fallbackError
          )

          // Create a basic error page as last resort
          await mainWindow!
            .loadFile(path.join(__dirname, 'error-page.html'))
            .catch(() => {
              // Create inline error page if file doesn't exist
              const errorHtml = `
              <!DOCTYPE html>
              <html>
                <head>
                  <title>Notable - Connection Error</title>
                  <style>
                    body { 
                      font-family: system-ui, -apple-system, sans-serif; 
                      display: flex; 
                      justify-content: center; 
                      align-items: center; 
                      height: 100vh; 
                      margin: 0; 
                      background: #f5f5f5; 
                    }
                    .error-container { 
                      text-align: center; 
                      background: white; 
                      padding: 2rem; 
                      border-radius: 8px; 
                      box-shadow: 0 2px 10px rgba(0,0,0,0.1); 
                    }
                    .error-title { color: #d32f2f; margin-bottom: 1rem; }
                    .error-message { color: #666; margin-bottom: 2rem; line-height: 1.5; }
                    .retry-button { 
                      background: #1976d2; 
                      color: white; 
                      border: none; 
                      padding: 12px 24px; 
                      border-radius: 4px; 
                      cursor: pointer; 
                      font-size: 14px; 
                    }
                    .retry-button:hover { background: #1565c0; }
                  </style>
                </head>
                <body>
                  <div class="error-container">
                    <h1 class="error-title">Connection Error</h1>
                    <p class="error-message">
                      Unable to connect to the development server.<br>
                      Please ensure the Next.js development server is running on port 4378.
                    </p>
                    <button class="retry-button" onclick="location.reload()">Retry</button>
                  </div>
                </body>
              </html>
            `
              mainWindow!.loadURL(
                `data:text/html;charset=utf-8,${encodeURIComponent(errorHtml)}`
              )
            })
        }
      }
    }
  }

  loadUrlWithFallback()

  // Show window when ready
  mainWindow.once('ready-to-show', () => {
    mainWindow?.show()

    // Restore maximized state if needed
    const windowState = (store as any).get('windowState')
    if (windowState?.isMaximized) {
      mainWindow?.maximize()
    }

    if (isDevelopment) {
      mainWindow?.webContents.openDevTools()
    }
  })

  // Enable drag and drop
  mainWindow.webContents.on('dom-ready', () => {
    // Prevent navigation on drag and drop
    mainWindow?.webContents.on('will-navigate', (event, navigationUrl) => {
      const parsedUrl = new URL(navigationUrl)
      const currentUrl = mainWindow?.webContents.getURL()

      // Allow navigation within the app but prevent external navigation
      if (parsedUrl.origin !== new URL(currentUrl || '').origin) {
        event.preventDefault()
      }
    })
  })

  // Handle file drops - native Electron approach
  mainWindow.webContents.on('dom-ready', () => {
    // Enable file drops
    mainWindow?.webContents.executeJavaScript(`
      // Prevent default drag behaviors and add visual feedback
      document.addEventListener('dragover', (e) => {
        e.preventDefault()
        e.stopPropagation()
        e.dataTransfer.dropEffect = 'copy'
      })
      
      document.addEventListener('dragenter', (e) => {
        e.preventDefault()
        document.body.classList.add('drag-over')
        document.body.style.outline = '2px dashed #007ACC'
        document.body.style.outlineOffset = '-10px'
        document.body.style.backgroundColor = 'rgba(0, 122, 204, 0.05)'
      })
      
      document.addEventListener('dragleave', (e) => {
        e.preventDefault()
        // Only remove outline when leaving the document entirely
        if (!e.relatedTarget || e.relatedTarget.nodeName === 'HTML') {
          document.body.classList.remove('drag-over')
          document.body.style.outline = ''
          document.body.style.outlineOffset = ''
          document.body.style.backgroundColor = ''
        }
      })
      
      document.addEventListener('drop', (e) => {
        e.preventDefault()
        e.stopPropagation()
        
        // Remove visual feedback
        document.body.classList.remove('drag-over')
        document.body.style.outline = ''
        document.body.style.outlineOffset = ''
        document.body.style.backgroundColor = ''
        
        // Get file paths and send to main process
        const files = Array.from(e.dataTransfer.files)
        if (files.length > 0) {
          const filePaths = files.map(file => file.path).filter(path => path)
          if (filePaths.length > 0) {
            // Send via IPC to main process, which will relay to renderer
            window.electronAPI?.handleFileDrop?.(filePaths)
          }
        }
      })
    `)
  })

  // Window state management
  mainWindow.on('close', (event) => {
    if (!isQuitting && isMac) {
      event.preventDefault()
      mainWindow?.hide()
    }
  })

  mainWindow.on('closed', () => {
    if (mainWindow) {
      windows.delete(mainWindow)
    }
    mainWindow = null
  })

  // Register local shortcuts for this window
  registerLocalShortcuts(mainWindow)

  // Set up Touch Bar for macOS
  if (isMac && (global as any).touchBar) {
    mainWindow.setTouchBar((global as any).touchBar)
  }
}

app.whenReady().then(() => {
  // Setup security policies first
  setupSecurity()

  // Setup platform-specific features
  setupPlatformFeatures()

  // Handle jump list arguments from Windows taskbar
  handleJumpListArgs()

  // Create native menu
  createMenu()

  // Create system tray
  createTray()

  // Register global shortcuts
  registerGlobalShortcuts()

  // Setup auto updater
  setupAutoUpdater()

  // Create main window
  createWindow()

  // Setup routing
  setupRoutingInMainProcess()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (!isMac) {
    app.quit()
  }
})

app.on('before-quit', () => {
  isQuitting = true
})

app.on('will-quit', () => {
  // Unregister all shortcuts
  globalShortcut.unregisterAll()
})

// Handle theme changes
nativeTheme.on('updated', () => {
  // Send theme update to all windows
  BrowserWindow.getAllWindows().forEach((window) => {
    window.webContents.send(
      'native-theme-updated',
      nativeTheme.shouldUseDarkColors
    )
  })
})

// Data storage path
const userDataPath = app.getPath('userData')
const notesPath = path.join(userDataPath, 'notes.json')

// IPC handlers for file operations
ipcMain.handle('load-notes', () => {
  try {
    if (fs.existsSync(notesPath)) {
      const data = fs.readFileSync(notesPath, 'utf8')
      return JSON.parse(data)
    }
    return []
  } catch (error) {
    console.error('Failed to load notes:', error)
    return []
  }
})

ipcMain.handle('save-notes', (_, notes) => {
  try {
    fs.writeFileSync(notesPath, JSON.stringify(notes, null, 2), 'utf8')
    return { success: true }
  } catch (error) {
    console.error('Failed to save notes:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    }
  }
})

// Additional IPC handlers for enhanced functionality
ipcMain.handle('show-open-dialog', async () => {
  if (!mainWindow) return { canceled: true, filePaths: [] }
  const result = await dialog.showOpenDialog(mainWindow, {
    properties: ['openFile'],
    filters: [
      { name: 'Notable files', extensions: ['notable', 'md', 'txt'] },
      { name: 'All files', extensions: ['*'] },
    ],
  })
  return result
})

ipcMain.handle('show-save-dialog', async () => {
  if (!mainWindow) return { canceled: true, filePath: undefined }
  const result = await dialog.showSaveDialog(mainWindow, {
    filters: [
      { name: 'Notable files', extensions: ['notable'] },
      { name: 'Markdown files', extensions: ['md'] },
      { name: 'Text files', extensions: ['txt'] },
    ],
  })
  return result
})

ipcMain.handle('create-window', () => {
  createWindow()
})

ipcMain.handle('close-window', () => {
  const window =
    BrowserWindow.getFocusedWindow() || BrowserWindow.getAllWindows()[0]
  if (window) {
    window.close()
  }
})

ipcMain.handle('minimize-window', () => {
  const window =
    BrowserWindow.getFocusedWindow() || BrowserWindow.getAllWindows()[0]
  if (window) {
    window.minimize()
  }
})

ipcMain.handle('maximize-window', () => {
  const window =
    BrowserWindow.getFocusedWindow() || BrowserWindow.getAllWindows()[0]
  if (window) {
    if (window.isMaximized()) {
      window.unmaximize()
    } else {
      window.maximize()
    }
  }
})

ipcMain.handle('is-maximized', () => {
  const window =
    BrowserWindow.getFocusedWindow() || BrowserWindow.getAllWindows()[0]
  return window ? window.isMaximized() : false
})

ipcMain.handle('get-theme', () => {
  return nativeTheme.themeSource
})

ipcMain.handle('set-theme', (_, theme) => {
  nativeTheme.themeSource = theme
  createMenu() // Rebuild menu to update radio button states
  return theme
})

ipcMain.handle('show-notification', (_, title, body) => {
  notifier.notify({
    title,
    message: body,
    sound: true,
    wait: false,
  })
})

ipcMain.handle('open-dev-tools', () => {
  const focusedWindow = BrowserWindow.getFocusedWindow()
  if (focusedWindow) {
    focusedWindow.webContents.openDevTools()
  }
})

ipcMain.handle('reload-window', () => {
  const focusedWindow = BrowserWindow.getFocusedWindow()
  if (focusedWindow) {
    focusedWindow.reload()
  }
})

// Enhanced file system operations
ipcMain.handle('read-file', async (_, filePath: string) => {
  try {
    const content = fs.readFileSync(filePath, 'utf8')
    return { success: true, content }
  } catch (error) {
    console.error('Failed to read file:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    }
  }
})

ipcMain.handle('write-file', async (_, filePath: string, content: string) => {
  try {
    fs.writeFileSync(filePath, content, 'utf8')
    return { success: true }
  } catch (error) {
    console.error('Failed to write file:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    }
  }
})

ipcMain.handle('select-directory', async () => {
  if (!mainWindow) return { canceled: true, filePaths: [] }
  const result = await dialog.showOpenDialog(mainWindow, {
    properties: ['openDirectory'],
  })
  return result
})

// System integration
ipcMain.handle('open-external', async (_, url: string) => {
  await shell.openExternal(url)
})

ipcMain.handle('show-item-in-folder', async (_, fullPath: string) => {
  shell.showItemInFolder(fullPath)
})

ipcMain.handle('set-always-on-top', async (_, alwaysOnTop: boolean) => {
  const focusedWindow = BrowserWindow.getFocusedWindow()
  if (focusedWindow) {
    focusedWindow.setAlwaysOnTop(alwaysOnTop)
  }
  return { success: true }
})

// Handle file drops
ipcMain.handle('handle-file-drop', async (event, filePaths: string[]) => {
  // Relay the file drop event to the renderer process
  event.sender.send('file-drop', filePaths)
  return { success: true }
})

// Clipboard integration
ipcMain.handle('clipboard-read-text', () => {
  return clipboard.readText()
})

ipcMain.handle('clipboard-write-text', (_, text: string) => {
  clipboard.writeText(text)
  return { success: true }
})

ipcMain.handle('clipboard-read-html', () => {
  return clipboard.readHTML()
})

ipcMain.handle('clipboard-write-html', (_, html: string, text?: string) => {
  clipboard.writeHTML(html)
  if (text) {
    clipboard.writeText(text)
  }
  return { success: true }
})

ipcMain.handle('clipboard-read-image', () => {
  const image = clipboard.readImage()
  if (image.isEmpty()) {
    return null
  }
  return {
    buffer: image.toPNG(),
    size: image.getSize(),
  }
})

ipcMain.handle('clipboard-has-format', (_, format: string) => {
  const formats = clipboard.availableFormats()
  return formats.includes(format)
})

ipcMain.handle('clipboard-available-formats', () => {
  return clipboard.availableFormats()
})

// Crash reporting
ipcMain.handle('crash-report', async (_, crashInfo: any) => {
  console.error('Renderer crash report:', crashInfo)

  const crashLogPath = path.join(app.getPath('userData'), 'crash.log')
  const crashData = {
    timestamp: new Date().toISOString(),
    type: 'rendererCrash',
    ...crashInfo,
    platform: process.platform,
    version: app.getVersion(),
  }

  try {
    fs.appendFileSync(crashLogPath, `${JSON.stringify(crashData)  }\n`)
    return { success: true }
  } catch (error) {
    console.error('Failed to write crash log:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    }
  }
})

ipcMain.handle('get-crash-logs', async () => {
  const crashLogPath = path.join(app.getPath('userData'), 'crash.log')

  try {
    if (fs.existsSync(crashLogPath)) {
      const logs = fs.readFileSync(crashLogPath, 'utf8')
      const lines = logs
        .trim()
        .split('\n')
        .filter((line) => line.trim())
      const crashReports = lines.map((line) => {
        try {
          return JSON.parse(line)
        } catch {
          return { raw: line }
        }
      })
      return { success: true, logs: crashReports }
    }
    return { success: true, logs: [] }
  } catch (error) {
    console.error('Failed to read crash logs:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    }
  }
})

ipcMain.handle('clear-crash-logs', async () => {
  const crashLogPath = path.join(app.getPath('userData'), 'crash.log')

  try {
    if (fs.existsSync(crashLogPath)) {
      fs.unlinkSync(crashLogPath)
    }
    return { success: true }
  } catch (error) {
    console.error('Failed to clear crash logs:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    }
  }
})

// Export functionality handlers
ipcMain.handle('export-note', async (_, noteData, format, _options = {}) => {
  if (!mainWindow) return { success: false, error: 'No window available' }

  try {
    const { title = 'Untitled Note', content, filename } = noteData

    // Show save dialog with appropriate filter for the format
    let filters: Electron.FileFilter[]
    let defaultExtension: string

    switch (format) {
      case 'markdown':
        filters = [{ name: 'Markdown files', extensions: ['md'] }]
        defaultExtension = 'md'
        break
      case 'html':
        filters = [{ name: 'HTML files', extensions: ['html'] }]
        defaultExtension = 'html'
        break
      case 'pdf':
        filters = [{ name: 'PDF files', extensions: ['pdf'] }]
        defaultExtension = 'pdf'
        break
      case 'react':
        filters = [{ name: 'TypeScript files', extensions: ['tsx'] }]
        defaultExtension = 'tsx'
        break
      default:
        throw new Error(`Unsupported export format: ${format}`)
    }

    const result = await dialog.showSaveDialog(mainWindow, {
      defaultPath: filename || `${title}.${defaultExtension}`,
      filters: [...filters, { name: 'All files', extensions: ['*'] }],
    })

    if (result.canceled || !result.filePath) {
      return { success: false, canceled: true }
    }

    // For PDF, we can't directly save the content - the renderer needs to handle printing
    if (format === 'pdf') {
      return {
        success: true,
        filePath: result.filePath,
        requiresPrint: true,
      }
    }

    // Write the exported content to file
    fs.writeFileSync(result.filePath, content, 'utf8')

    return {
      success: true,
      filePath: result.filePath,
    }
  } catch (error) {
    console.error('Export failed:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    }
  }
})

// Platform-specific IPC handlers
ipcMain.handle('update-recent-document', async (_, filePath: string) => {
  try {
    updateRecentDocument(filePath)
    return { success: true }
  } catch (error) {
    console.error('Failed to update recent document:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    }
  }
})

// Handle export menu messages from renderer
ipcMain.on('menu-export-pdf', (event) => {
  event.sender.send('export-request', 'pdf')
})

ipcMain.on('menu-export-html', (event) => {
  event.sender.send('export-request', 'html')
})

ipcMain.on('menu-export-markdown', (event) => {
  event.sender.send('export-request', 'markdown')
})

// Helper function to get app icon
function getIconPath(): string | undefined {
  const iconPath = isMac
    ? path.join(__dirname, '../build/icon.icns')
    : isWindows
      ? path.join(__dirname, '../build/icon.ico')
      : path.join(__dirname, '../build/icon.png')

  // Check if icon exists, return undefined if not
  try {
    if (fs.existsSync(iconPath)) {
      return iconPath
    }
  } catch {
    console.warn('Icon file not found:', iconPath)
  }
  return undefined
}

// Create native menu
function createMenu() {
  const template: Electron.MenuItemConstructorOptions[] = [
    {
      label: 'File',
      submenu: [
        {
          label: 'New Note',
          accelerator: 'CmdOrCtrl+N',
          click: () => {
            const window =
              BrowserWindow.getFocusedWindow() ||
              BrowserWindow.getAllWindows()[0]
            console.log(
              '[Menu] New Note clicked, window:',
              window?.id,
              'all windows:',
              BrowserWindow.getAllWindows().map((w) => w.id)
            )
            if (window) {
              window.webContents.send('menu-new-note')
              console.log('[Menu] Sent menu-new-note message')
            } else {
              console.log('[Menu] No window available to send message')
            }
          },
        },
        {
          label: 'Open...',
          accelerator: 'CmdOrCtrl+O',
          click: async () => {
            const window =
              BrowserWindow.getFocusedWindow() ||
              BrowserWindow.getAllWindows()[0]
            if (!window) return
            const result = await dialog.showOpenDialog(window, {
              properties: ['openFile'],
              filters: [
                { name: 'Notable files', extensions: ['notable', 'md', 'txt'] },
                { name: 'All files', extensions: ['*'] },
              ],
            })

            if (!result.canceled && result.filePaths.length > 0) {
              window.webContents.send('menu-open-file', result.filePaths[0])
            }
          },
        },
        { type: 'separator' },
        {
          label: 'Save',
          accelerator: 'CmdOrCtrl+S',
          click: () => {
            const window =
              BrowserWindow.getFocusedWindow() ||
              BrowserWindow.getAllWindows()[0]
            window?.webContents.send('menu-save')
          },
        },
        {
          label: 'Save As...',
          accelerator: 'CmdOrCtrl+Shift+S',
          click: () => {
            const window =
              BrowserWindow.getFocusedWindow() ||
              BrowserWindow.getAllWindows()[0]
            window?.webContents.send('menu-save-as')
          },
        },
        { type: 'separator' },
        {
          label: 'Export...',
          submenu: [
            {
              label: 'Export as PDF',
              click: () => {
                const window =
                  BrowserWindow.getFocusedWindow() ||
                  BrowserWindow.getAllWindows()[0]
                if (window) {
                  window.webContents.send('menu-export-pdf')
                }
              },
            },
            {
              label: 'Export as HTML',
              click: () => {
                const window =
                  BrowserWindow.getFocusedWindow() ||
                  BrowserWindow.getAllWindows()[0]
                if (window) {
                  window.webContents.send('menu-export-html')
                }
              },
            },
            {
              label: 'Export as Markdown',
              click: () => {
                const window =
                  BrowserWindow.getFocusedWindow() ||
                  BrowserWindow.getAllWindows()[0]
                if (window) {
                  window.webContents.send('menu-export-markdown')
                }
              },
            },
          ],
        },
        { type: 'separator' },
        {
          label: 'Preferences',
          accelerator: 'CmdOrCtrl+,',
          click: () => {
            const window =
              BrowserWindow.getFocusedWindow() ||
              BrowserWindow.getAllWindows()[0]
            window?.webContents.send('menu-preferences')
          },
        },
        { type: 'separator' },
        isMac ? { role: 'close' } : { role: 'quit' },
      ],
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'selectAll' },
        { type: 'separator' },
        {
          label: 'Find',
          accelerator: 'CmdOrCtrl+F',
          click: () => {
            const window =
              BrowserWindow.getFocusedWindow() ||
              BrowserWindow.getAllWindows()[0]
            window?.webContents.send('menu-find')
          },
        },
        {
          label: 'Find and Replace',
          accelerator: 'CmdOrCtrl+H',
          click: () => {
            const window =
              BrowserWindow.getFocusedWindow() ||
              BrowserWindow.getAllWindows()[0]
            window?.webContents.send('menu-find-replace')
          },
        },
      ],
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { role: 'toggleDevTools' },
        { type: 'separator' },
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { type: 'separator' },
        { role: 'togglefullscreen' },
        { type: 'separator' },
        {
          label: 'Theme',
          submenu: [
            {
              label: 'Light',
              type: 'radio',
              checked: nativeTheme.themeSource === 'light',
              click: () => {
                nativeTheme.themeSource = 'light'
                const window =
                  BrowserWindow.getFocusedWindow() ||
                  BrowserWindow.getAllWindows()[0]
                window?.webContents.send('theme-changed', 'light')
              },
            },
            {
              label: 'Dark',
              type: 'radio',
              checked: nativeTheme.themeSource === 'dark',
              click: () => {
                nativeTheme.themeSource = 'dark'
                const window =
                  BrowserWindow.getFocusedWindow() ||
                  BrowserWindow.getAllWindows()[0]
                window?.webContents.send('theme-changed', 'dark')
              },
            },
            {
              label: 'System',
              type: 'radio',
              checked: nativeTheme.themeSource === 'system',
              click: () => {
                nativeTheme.themeSource = 'system'
                const window =
                  BrowserWindow.getFocusedWindow() ||
                  BrowserWindow.getAllWindows()[0]
                window?.webContents.send('theme-changed', 'system')
              },
            },
          ],
        },
      ],
    },
    {
      label: 'Window',
      submenu: [
        { role: 'minimize' },
        { role: 'close' },
        { type: 'separator' },
        {
          label: 'New Window',
          accelerator: 'CmdOrCtrl+Shift+N',
          click: () => {
            createWindow()
          },
        },
        {
          label: 'Focus Mode',
          accelerator: 'CmdOrCtrl+Shift+F',
          click: () => {
            const window =
              BrowserWindow.getFocusedWindow() ||
              BrowserWindow.getAllWindows()[0]
            window?.webContents.send('menu-focus-mode')
          },
        },
      ],
    },
    {
      label: 'Help',
      submenu: [
        {
          label: 'About Notable',
          click: () => {
            if (!mainWindow) return
            dialog.showMessageBox(mainWindow, {
              type: 'info',
              title: 'About Notable',
              message: 'Notable',
              detail: 'A modern note-taking application built with Electron.',
            })
          },
        },
        {
          label: 'Keyboard Shortcuts',
          click: () => {
            const window =
              BrowserWindow.getFocusedWindow() ||
              BrowserWindow.getAllWindows()[0]
            window?.webContents.send('menu-shortcuts')
          },
        },
        { type: 'separator' },
        {
          label: 'Report Bug',
          click: () => {
            shell.openExternal(
              'https://github.com/ryota-murakami/Notable/issues'
            )
          },
        },
        {
          label: 'Submit Feedback',
          click: () => {
            shell.openExternal(
              'https://github.com/ryota-murakami/Notable/discussions'
            )
          },
        },
      ],
    },
  ]

  // macOS specific menu adjustments
  if (isMac) {
    template.unshift({
      label: app.getName(),
      submenu: [
        { role: 'about' },
        { type: 'separator' },
        { role: 'services' },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideOthers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' },
      ],
    })

    // Window menu
    const windowMenuItem = template[4]
    if (windowMenuItem && Array.isArray(windowMenuItem.submenu)) {
      windowMenuItem.submenu.push(
        { type: 'separator' },
        { role: 'front' },
        { type: 'separator' },
        { role: 'window' }
      )
    }
  }

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}

// Create system tray
function createTray() {
  const iconPath = getIconPath()
  if (!iconPath) {
    console.warn('No icon found for system tray, skipping tray creation')
    return
  }

  tray = new Tray(iconPath)

  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Quick Note',
      click: () => {
        createQuickNoteWindow()
      },
    },
    { type: 'separator' },
    {
      label: 'Show Notable',
      click: () => {
        if (mainWindow) {
          if (mainWindow.isMinimized()) mainWindow.restore()
          mainWindow.focus()
        } else {
          createWindow()
        }
      },
    },
    {
      label: 'Hide Notable',
      click: () => {
        mainWindow?.hide()
      },
    },
    { type: 'separator' },
    {
      label: 'Quit',
      click: () => {
        isQuitting = true
        app.quit()
      },
    },
  ])

  tray.setToolTip('Notable - Note Taking App')
  tray.setContextMenu(contextMenu)

  // Show window on tray click
  tray.on('click', () => {
    if (mainWindow) {
      if (mainWindow.isVisible()) {
        mainWindow.hide()
      } else {
        mainWindow.show()
      }
    } else {
      createWindow()
    }
  })
}

// Create quick note window
function createQuickNoteWindow() {
  const quickNoteWindow = new BrowserWindow({
    width: 400,
    height: 300,
    show: false,
    frame: false,
    alwaysOnTop: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      webSecurity: true,
      // Enhanced security with sandboxing enabled
      sandbox: true, // Enable sandboxing for better security
      allowRunningInsecureContent: false,
      experimentalFeatures: false,
      enableBlinkFeatures: '', // Disable experimental features
      disableBlinkFeatures: 'Auxclick', // Disable potentially dangerous features
    },
  })

  const quickNoteUrl = process.env.ELECTRON_START_URL
    ? `${process.env.ELECTRON_START_URL}#/quick-note`
    : `file://${path.join(__dirname, '../../web/out/index.html')}#/quick-note`

  quickNoteWindow.loadURL(quickNoteUrl)
  quickNoteWindow.once('ready-to-show', () => {
    quickNoteWindow.show()
  })

  // Auto-hide when loses focus
  quickNoteWindow.on('blur', () => {
    quickNoteWindow.hide()
  })
}

// Register global shortcuts
function registerGlobalShortcuts() {
  // Quick note capture
  globalShortcut.register('CommandOrControl+Shift+N', () => {
    createQuickNoteWindow()
  })

  // Show/hide main window
  globalShortcut.register('CommandOrControl+Shift+L', () => {
    if (mainWindow) {
      if (mainWindow.isVisible()) {
        mainWindow.hide()
      } else {
        mainWindow.show()
        mainWindow.focus()
      }
    } else {
      createWindow()
    }
  })
}

// Register local shortcuts for a window
function registerLocalShortcuts(window: BrowserWindow) {
  // Vim-like shortcuts for power users
  localShortcut.register(window, 'CommandOrControl+K', () => {
    window.webContents.send('shortcut-command-palette')
  })

  localShortcut.register(window, 'CommandOrControl+P', () => {
    window.webContents.send('shortcut-quick-open')
  })

  localShortcut.register(window, 'CommandOrControl+Shift+P', () => {
    window.webContents.send('shortcut-command-palette')
  })
}

// Auto-updater setup
function setupAutoUpdater() {
  if (isDevelopment) return

  autoUpdater.checkForUpdatesAndNotify()

  autoUpdater.on('update-available', () => {
    notifier.notify({
      title: 'Notable Update Available',
      message: 'A new version is downloading in the background.',
    })
  })

  autoUpdater.on('update-downloaded', () => {
    notifier.notify({
      title: 'Notable Update Ready',
      message: 'Click to restart and apply the update.',
      wait: true,
      timeout: false,
    })

    notifier.on('click', () => {
      autoUpdater.quitAndInstall()
    })
  })

  // Check for updates every hour
  setInterval(
    () => {
      autoUpdater.checkForUpdatesAndNotify()
    },
    60 * 60 * 1000
  )
}

// Export for testing
export { createWindow }
