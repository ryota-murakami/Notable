// Jest setup file for electron package
// Mock electron modules for testing

// Mock electron app
const mockApp = {
  whenReady: jest.fn().mockResolvedValue(true),
  quit: jest.fn(),
  on: jest.fn(),
  setAppUserModelId: jest.fn(),
}

// Mock BrowserWindow
const mockBrowserWindow = jest.fn().mockImplementation(() => ({
  loadURL: jest.fn(),
  on: jest.fn(),
  webContents: {
    openDevTools: jest.fn(),
  },
}))

// Mock electron module
jest.mock('electron', () => ({
  app: mockApp,
  BrowserWindow: mockBrowserWindow,
}))