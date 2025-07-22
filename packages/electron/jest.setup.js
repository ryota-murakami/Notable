// Jest setup for electron package

// Mock Electron modules
jest.mock('electron', () => ({
  app: {
    on: jest.fn(),
    quit: jest.fn(),
    getPath: jest.fn(() => '/tmp/test'),
    setAsDefaultProtocolClient: jest.fn(),
    whenReady: jest.fn(() => Promise.resolve()),
  },
  BrowserWindow: jest.fn().mockImplementation(() => ({
    loadFile: jest.fn(),
    loadURL: jest.fn(),
    on: jest.fn(),
    webContents: {
      openDevTools: jest.fn(),
      on: jest.fn(),
      send: jest.fn(),
    },
    show: jest.fn(),
    close: jest.fn(),
    destroy: jest.fn(),
  })),
  Menu: {
    setApplicationMenu: jest.fn(),
    buildFromTemplate: jest.fn(),
  },
  shell: {
    openExternal: jest.fn(),
  },
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
  contextBridge: {
    exposeInMainWorld: jest.fn(),
  },
  protocol: {
    registerFileProtocol: jest.fn(),
  },
  session: {
    defaultSession: {
      webRequest: {
        onBeforeSendHeaders: jest.fn(),
      },
    },
  },
}))

// Mock electron-store
jest.mock('electron-store', () => {
  return jest.fn().mockImplementation(() => ({
    get: jest.fn(),
    set: jest.fn(),
    delete: jest.fn(),
    clear: jest.fn(),
    has: jest.fn(),
    size: 0,
  }))
})

// Mock Node.js path module
jest.mock('path', () => ({
  join: jest.fn((...args) => args.join('/')),
  resolve: jest.fn((...args) => args.join('/')),
  dirname: jest.fn((path) => path.split('/').slice(0, -1).join('/')),
  basename: jest.fn((path) => path.split('/').pop()),
  extname: jest.fn((path) => {
    const parts = path.split('.')
    return parts.length > 1 ? '.' + parts.pop() : ''
  }),
}))

// Global test timeout
jest.setTimeout(10000)

// Suppress console warnings in tests unless in debug mode
if (!process.env.DEBUG) {
  global.console.warn = jest.fn()
  global.console.error = jest.fn()
}
