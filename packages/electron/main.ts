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
  mainWindow.loadURL(startUrl)

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
  mainWindow?.webContents.send(
    'native-theme-updated',
    nativeTheme.shouldUseDarkColors
  )
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
  const focusedWindow = BrowserWindow.getFocusedWindow()
  if (focusedWindow) {
    focusedWindow.close()
  }
})

ipcMain.handle('minimize-window', () => {
  const focusedWindow = BrowserWindow.getFocusedWindow()
  if (focusedWindow) {
    focusedWindow.minimize()
  }
})

ipcMain.handle('maximize-window', () => {
  const focusedWindow = BrowserWindow.getFocusedWindow()
  if (focusedWindow) {
    if (focusedWindow.isMaximized()) {
      focusedWindow.unmaximize()
    } else {
      focusedWindow.maximize()
    }
  }
})

ipcMain.handle('is-maximized', () => {
  const focusedWindow = BrowserWindow.getFocusedWindow()
  return focusedWindow ? focusedWindow.isMaximized() : false
})

ipcMain.handle('get-theme', () => {
  return nativeTheme.themeSource
})

ipcMain.handle('set-theme', (_, theme) => {
  nativeTheme.themeSource = theme
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
            mainWindow?.webContents.send('menu-new-note')
          },
        },
        {
          label: 'Open...',
          accelerator: 'CmdOrCtrl+O',
          click: async () => {
            if (!mainWindow) return
            const result = await dialog.showOpenDialog(mainWindow, {
              properties: ['openFile'],
              filters: [
                { name: 'Notable files', extensions: ['notable', 'md', 'txt'] },
                { name: 'All files', extensions: ['*'] },
              ],
            })

            if (!result.canceled && result.filePaths.length > 0) {
              mainWindow?.webContents.send(
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
            mainWindow?.webContents.send('menu-save')
          },
        },
        {
          label: 'Save As...',
          accelerator: 'CmdOrCtrl+Shift+S',
          click: () => {
            mainWindow?.webContents.send('menu-save-as')
          },
        },
        { type: 'separator' },
        {
          label: 'Export...',
          submenu: [
            {
              label: 'Export as PDF',
              click: () => {
                mainWindow?.webContents.send('menu-export-pdf')
              },
            },
            {
              label: 'Export as HTML',
              click: () => {
                mainWindow?.webContents.send('menu-export-html')
              },
            },
            {
              label: 'Export as Markdown',
              click: () => {
                mainWindow?.webContents.send('menu-export-markdown')
              },
            },
          ],
        },
        { type: 'separator' },
        {
          label: 'Preferences',
          accelerator: 'CmdOrCtrl+,',
          click: () => {
            mainWindow?.webContents.send('menu-preferences')
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
            mainWindow?.webContents.send('menu-find')
          },
        },
        {
          label: 'Find and Replace',
          accelerator: 'CmdOrCtrl+H',
          click: () => {
            mainWindow?.webContents.send('menu-find-replace')
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
                mainWindow?.webContents.send('theme-changed', 'light')
              },
            },
            {
              label: 'Dark',
              type: 'radio',
              checked: nativeTheme.themeSource === 'dark',
              click: () => {
                nativeTheme.themeSource = 'dark'
                mainWindow?.webContents.send('theme-changed', 'dark')
              },
            },
            {
              label: 'System',
              type: 'radio',
              checked: nativeTheme.themeSource === 'system',
              click: () => {
                nativeTheme.themeSource = 'system'
                mainWindow?.webContents.send('theme-changed', 'system')
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
            mainWindow?.webContents.send('menu-focus-mode')
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
            mainWindow?.webContents.send('menu-shortcuts')
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
