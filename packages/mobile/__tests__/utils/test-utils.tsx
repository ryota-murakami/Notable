import React, { type ReactElement } from 'react'
import { render, type RenderOptions } from '@testing-library/react-native'
import { PaperProvider } from 'react-native-paper'

// Default theme for testing
const testTheme = {
  colors: {
    primary: '#6200ee',
    onPrimary: '#ffffff',
    secondary: '#03dac6',
    onSecondary: '#000000',
    background: '#ffffff',
    onBackground: '#000000',
    surface: '#ffffff',
    onSurface: '#000000',
    error: '#b00020',
    onError: '#ffffff',
  },
}

// Custom wrapper with providers
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <PaperProvider theme={testTheme}>{children}</PaperProvider>
}

// Custom render function with providers
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

// Re-export everything from React Native Testing Library
export * from '@testing-library/react-native'

// Override render method
export { customRender as render }

// Helper functions for common testing scenarios
export const createMockNote = (overrides = {}) => ({
  id: 'test-note-id',
  title: 'Test Note',
  content: 'This is test content',
  created_at: new Date('2023-01-01').toISOString(),
  updated_at: new Date('2023-01-01').toISOString(),
  user_id: 'test-user-id',
  ...overrides,
})

export const createMockUser = (overrides = {}) => ({
  id: 'test-user-id',
  email: 'test@example.com',
  created_at: new Date('2023-01-01').toISOString(),
  ...overrides,
})

// Mock navigation props for components that use navigation
export const createMockNavigation = () => ({
  navigate: jest.fn(),
  goBack: jest.fn(),
  dispatch: jest.fn(),
  setParams: jest.fn(),
  isFocused: jest.fn(() => true),
  canGoBack: jest.fn(() => true),
  getId: jest.fn(() => 'test-route'),
  getParent: jest.fn(),
  getState: jest.fn(() => ({
    key: 'test-key',
    index: 0,
    routeNames: ['Test'],
    routes: [{ key: 'test-route', name: 'Test' }],
  })),
})

// Mock route props
export const createMockRoute = (params = {}) => ({
  key: 'test-route',
  name: 'Test',
  params,
})

// Wait for async operations in tests
export const waitForAsyncOperations = () =>
  new Promise((resolve) => setTimeout(resolve, 0))

// Create a promise that resolves after a timeout
export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))
