import { app, BrowserWindow } from 'electron'

describe('Electron Main Process', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should create window when app is ready', async () => {
    expect(app.whenReady).toBeDefined()
    await expect(app.whenReady()).resolves.toBe(true)
  })

  it('should create BrowserWindow with correct options', () => {
    const window = new BrowserWindow({
      width: 1200,
      height: 800,
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
      },
    })

    expect(BrowserWindow).toHaveBeenCalledWith({
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
    app.quit()
    expect(app.quit).toHaveBeenCalled()
  })
})
