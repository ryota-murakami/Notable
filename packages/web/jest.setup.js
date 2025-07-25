// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

// Polyfill for TextEncoder/TextDecoder (still needed for other packages)
const { TextEncoder, TextDecoder } = require('util')
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder

// MSW setup is temporarily disabled due to complex polyfill requirements in Jest environment
// The MSW server and handlers are available in __mocks__/msw/ for future use
// To enable MSW, uncomment the lines below and ensure proper polyfills are configured

// MSW server setup (currently disabled)
// let server

// Enable API mocking before tests (currently disabled)
// beforeAll(async () => {
//   // Note: MSW v2 requires comprehensive polyfills including:
//   // - fetch, Headers, Request, Response from undici
//   // - ReadableStream, WritableStream, TransformStream from node:stream/web  
//   // - crypto from node:crypto
//   // - MessagePort and other Web APIs
//   // const mswModule = await import('./__mocks__/msw/server')
//   // server = mswModule.server
//   // server.listen()
// })

// Reset handlers between tests (currently disabled)
// afterEach(() => {
//   if (server) {
//     server.resetHandlers()
//   }
// })

// Disable API mocking after tests (currently disabled)
// afterAll(() => {
//   if (server) {
//     server.close()
//   }
// })

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
}

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
}

// Suppress console errors in tests
const originalError = console.error
beforeAll(() => {
  console.error = (...args) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Warning: ReactDOM.render')
    ) {
      return
    }
    originalError.call(console, ...args)
  }
})

afterAll(() => {
  console.error = originalError
})
