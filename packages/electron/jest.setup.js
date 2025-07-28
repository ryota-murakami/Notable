// Jest setup file for Electron package
// This file runs before each test suite

// Mock Electron modules to prevent them from running in Jest environment
jest.mock('electron', () => ({
  app: {
    on: jest.fn(),
    quit: jest.fn(),
    isReady: jest.fn(() => true),
    whenReady: jest.fn(() => Promise.resolve(true)),
    getPath: jest.fn((name) => `/mock/${name}`),
    getName: jest.fn(() => 'Notable'),
    getVersion: jest.fn(() => '1.0.0'),
  },
  BrowserWindow: jest.fn().mockImplementation(() => ({
    loadURL: jest.fn(),
    on: jest.fn(),
    webContents: {
      on: jest.fn(),
      send: jest.fn(),
    },
    show: jest.fn(),
    close: jest.fn(),
    isDestroyed: jest.fn(() => false),
  })),
  ipcMain: {
    on: jest.fn(),
    handle: jest.fn(),
    removeAllListeners: jest.fn(),
  },
  ipcRenderer: {
    on: jest.fn(),
    send: jest.fn(),
    invoke: jest.fn(),
    removeAllListeners: jest.fn(),
  },
  Menu: {
    setApplicationMenu: jest.fn(),
    buildFromTemplate: jest.fn(),
  },
  dialog: {
    showMessageBox: jest.fn(),
    showOpenDialog: jest.fn(),
    showSaveDialog: jest.fn(),
  },
  shell: {
    openExternal: jest.fn(),
  },
}))

// Global test utilities
global.console = {
  ...console,
  // Uncomment to suppress console.log during tests
  // log: jest.fn(),
  // error: jest.fn(),
  // warn: jest.fn(),
}

// Set up global test timeout
jest.setTimeout(10000)