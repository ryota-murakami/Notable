import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

let mainWindow: BrowserWindow | null = null

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  })

  const startUrl =
    process.env.ELECTRON_START_URL ||
    `file://${path.join(__dirname, '../out/index.html')}`
  mainWindow.loadURL(startUrl)

  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools()
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// Data storage path
const userDataPath = app.getPath('userData')
const notesPath = path.join(userDataPath, 'notes.json')

// IPC handlers for file operations
ipcMain.handle('load-notes', async () => {
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

ipcMain.handle('save-notes', async (_, notes) => {
  try {
    fs.writeFileSync(notesPath, JSON.stringify(notes, null, 2), 'utf8')
    return { success: true }
  } catch (error) {
    console.error('Failed to save notes:', error)
    return { success: false, error: error.message }
  }
})
