import {
  app,
  BrowserWindow,
  dialog,
  globalShortcut,
  ipcMain,
  Menu,
  nativeTheme,
  shell,
  Tray,
} from 'electron'
import * as path from 'path'
import * as fs from 'fs'
import * as localShortcut from 'electron-localshortcut'
import { autoUpdater } from 'electron-updater'
import * as notifier from 'node-notifier'

// __dirname is automatically available in CommonJS

let mainWindow: BrowserWindow | null = null
let tray: Tray | null = null
let isQuitting = false
const windows: Set<BrowserWindow> = new Set()

// Configuration
const isDevelopment = process.env.NODE_ENV === 'development'
const isMac = process.platform === 'darwin'
const isWindows = process.platform === 'win32'

// Set app name from package.json productName
app.setName('Notable')

const createWindow = () => {
  // Window state management
  const windowState = {
    width: 1200,
    height: 800,
  }

  const iconPath = getIconPath()
  const windowOptions: Electron.BrowserWindowConstructorOptions = {
    width: windowState.width,
    height: windowState.height,
    minWidth: 800,
    minHeight: 600,
    show: false, // Don't show until ready
    titleBarStyle: isMac ? 'hiddenInset' : 'default',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      webSecurity: true,
    },
  }

  if (iconPath) {
    windowOptions.icon = iconPath
  }

  mainWindow = new BrowserWindow(windowOptions)

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
            mainWindow.webContents.executeJavaScript(`
              if (typeof window !== 'undefined' && window.electronAPI) {
                console.log('Running in offline mode - development server not available');
              }
            `).catch(() => {
              // Ignore errors if the page isn't ready yet
            });
          }
        } catch (fallbackError) {
          console.error(`[Main] Fallback URL also failed: ${fallbackUrl}`, fallbackError)
          
          // Create a basic error page as last resort
          await mainWindow!.loadFile(path.join(__dirname, 'error-page.html')).catch(() => {
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
            `;
            mainWindow!.loadURL(`data:text/html;charset=utf-8,${encodeURIComponent(errorHtml)}`);
          });
        }
      }
    }
  }
  
  loadUrlWithFallback()

  // Show window when ready
  mainWindow.once('ready-to-show', () => {
    mainWindow?.show()

    if (isDevelopment) {
      mainWindow?.webContents.openDevTools()
    }
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
}

app.whenReady().then(() => {
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
  BrowserWindow.getAllWindows().forEach(window => {
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
  const window = BrowserWindow.getFocusedWindow() || BrowserWindow.getAllWindows()[0]
  if (window) {
    window.close()
  }
})

ipcMain.handle('minimize-window', () => {
  const window = BrowserWindow.getFocusedWindow() || BrowserWindow.getAllWindows()[0]
  if (window) {
    window.minimize()
  }
})

ipcMain.handle('maximize-window', () => {
  const window = BrowserWindow.getFocusedWindow() || BrowserWindow.getAllWindows()[0]
  if (window) {
    if (window.isMaximized()) {
      window.unmaximize()
    } else {
      window.maximize()
    }
  }
})

ipcMain.handle('is-maximized', () => {
  const window = BrowserWindow.getFocusedWindow() || BrowserWindow.getAllWindows()[0]
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
      filters: [...filters, { name: 'All files', extensions: ['*'] }]
    })
    
    if (result.canceled || !result.filePath) {
      return { success: false, canceled: true }
    }
    
    // For PDF, we can't directly save the content - the renderer needs to handle printing
    if (format === 'pdf') {
      return { 
        success: true, 
        filePath: result.filePath,
        requiresPrint: true 
      }
    }
    
    // Write the exported content to file
    fs.writeFileSync(result.filePath, content, 'utf8')
    
    return { 
      success: true, 
      filePath: result.filePath 
    }
  } catch (error) {
    console.error('Export failed:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : String(error) 
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
            const window = BrowserWindow.getFocusedWindow() || BrowserWindow.getAllWindows()[0]
            console.log('[Menu] New Note clicked, window:', window?.id, 'all windows:', BrowserWindow.getAllWindows().map(w => w.id))
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
            const window = BrowserWindow.getFocusedWindow() || BrowserWindow.getAllWindows()[0]
            if (!window) return
            const result = await dialog.showOpenDialog(window, {
              properties: ['openFile'],
              filters: [
                { name: 'Notable files', extensions: ['notable', 'md', 'txt'] },
                { name: 'All files', extensions: ['*'] },
              ],
            })

            if (!result.canceled && result.filePaths.length > 0) {
              window.webContents.send(
                'menu-open-file',
                result.filePaths[0]
              )
            }
          },
        },
        { type: 'separator' },
        {
          label: 'Save',
          accelerator: 'CmdOrCtrl+S',
          click: () => {
            const window = BrowserWindow.getFocusedWindow() || BrowserWindow.getAllWindows()[0]
            window?.webContents.send('menu-save')
          },
        },
        {
          label: 'Save As...',
          accelerator: 'CmdOrCtrl+Shift+S',
          click: () => {
            const window = BrowserWindow.getFocusedWindow() || BrowserWindow.getAllWindows()[0]
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
                const window = BrowserWindow.getFocusedWindow() || BrowserWindow.getAllWindows()[0]
                if (window) {
                  window.webContents.send('menu-export-pdf')
                }
              },
            },
            {
              label: 'Export as HTML',
              click: () => {
                const window = BrowserWindow.getFocusedWindow() || BrowserWindow.getAllWindows()[0]
                if (window) {
                  window.webContents.send('menu-export-html')
                }
              },
            },
            {
              label: 'Export as Markdown',
              click: () => {
                const window = BrowserWindow.getFocusedWindow() || BrowserWindow.getAllWindows()[0]
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
            const window = BrowserWindow.getFocusedWindow() || BrowserWindow.getAllWindows()[0]
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
            const window = BrowserWindow.getFocusedWindow() || BrowserWindow.getAllWindows()[0]
            window?.webContents.send('menu-find')
          },
        },
        {
          label: 'Find and Replace',
          accelerator: 'CmdOrCtrl+H',
          click: () => {
            const window = BrowserWindow.getFocusedWindow() || BrowserWindow.getAllWindows()[0]
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
                const window = BrowserWindow.getFocusedWindow() || BrowserWindow.getAllWindows()[0]
                window?.webContents.send('theme-changed', 'light')
              },
            },
            {
              label: 'Dark',
              type: 'radio',
              checked: nativeTheme.themeSource === 'dark',
              click: () => {
                nativeTheme.themeSource = 'dark'
                const window = BrowserWindow.getFocusedWindow() || BrowserWindow.getAllWindows()[0]
                window?.webContents.send('theme-changed', 'dark')
              },
            },
            {
              label: 'System',
              type: 'radio',
              checked: nativeTheme.themeSource === 'system',
              click: () => {
                nativeTheme.themeSource = 'system'
                const window = BrowserWindow.getFocusedWindow() || BrowserWindow.getAllWindows()[0]
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
            const window = BrowserWindow.getFocusedWindow() || BrowserWindow.getAllWindows()[0]
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
            const window = BrowserWindow.getFocusedWindow() || BrowserWindow.getAllWindows()[0]
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
