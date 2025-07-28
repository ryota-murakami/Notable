// Jest setup file for Electron package
// This file is required by the jest configuration

// Mock Electron modules
jest.mock('electron', () => ({
  app: {
    whenReady: jest.fn(() => Promise.resolve(true)),
    quit: jest.fn(),
    on: jest.fn(),
    getPath: jest.fn((name) => `/mock/${name}`),
    getVersion: jest.fn(() => '1.0.0'),
  },
  BrowserWindow: jest.fn().mockImplementation(() => ({
    loadURL: jest.fn(),
    on: jest.fn(),
    webContents: {
      on: jest.fn(),
    },
    show: jest.fn(),
    hide: jest.fn(),
    close: jest.fn(),
  })),
  ipcMain: {
    on: jest.fn(),
    handle: jest.fn(),
  },
  Menu: {
    setApplicationMenu: jest.fn(),
    buildFromTemplate: jest.fn(),
  },
  Notification: jest.fn(),
}))

// Mock node-notifier
jest.mock('node-notifier', () => ({
  notify: jest.fn(),
}))

// Mock electron-localshortcut
jest.mock('electron-localshortcut', () => ({
  register: jest.fn(),
  unregister: jest.fn(),
  unregisterAll: jest.fn(),
}))