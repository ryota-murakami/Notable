// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

// Import MSW server for API mocking
// TODO: Fix MSW dependency issue
// const { server } = require('./__mocks__/msw/server')

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

// MSW Server Setup
// TODO: Fix MSW dependency issue
// beforeAll(() => {
//   // Start the interception on the entire process level
//   server.listen()
// })

// afterEach(() => {
//   // Reset any runtime request handlers we may add during the tests
//   server.resetHandlers()
// })

// afterAll(() => {
//   // Clean up and close the server
//   server.close()
// })
