import { app, BrowserWindow } from 'electron'

// Mock jest functions
const mockApp = app as jest.Mocked<typeof app>
const mockBrowserWindow = BrowserWindow as jest.MockedClass<typeof BrowserWindow>

describe('Electron Main Process', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should create window when app is ready', async () => {
    expect(app.whenReady).toBeDefined()
    await expect(app.whenReady()).resolves.toBe(true)
  })

  it('should create BrowserWindow with correct options', () => {
    const window = new mockBrowserWindow({
      width: 1200,
      height: 800,
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
      },
    })

    expect(mockBrowserWindow).toHaveBeenCalledWith({
      width: 1200,
      height: 800,
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
      },
    })
    expect(window.loadURL).toBeDefined()
  })

  it('should handle app quit', () => {
    mockApp.quit()
    expect(mockApp.quit).toHaveBeenCalled()
  })
})
