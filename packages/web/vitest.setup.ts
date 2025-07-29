import React from 'react'
import { vi, beforeAll, afterEach, afterAll } from 'vitest'
import '@testing-library/jest-dom/vitest'
import { server } from './mocks/node'

// Make React available globally
global.React = React

// Set up test environment variables for Supabase
process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://test.supabase.co'
process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test-anon-key'
// Skip env validation in tests
process.env.SKIP_ENV_VALIDATION = 'true'

// Start MSW server before all tests
beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' })
})

// Reset handlers after each test
afterEach(() => {
  server.resetHandlers()
})

// Clean up after all tests
afterAll(() => {
  server.close()
})

// Mock Next.js router
const mockRouter = {
  push: vi.fn(),
  replace: vi.fn(),
  back: vi.fn(),
  forward: vi.fn(),
  refresh: vi.fn(),
  prefetch: vi.fn(),
}

vi.mock('next/navigation', () => ({
  useRouter: () => mockRouter,
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}))

// Mock environment utilities
vi.mock('@/lib/utils/environment', () => ({
  isTest: () => true,
}))

// Don't mock Supabase client - let MSW handle the requests
// This allows MSW to intercept actual HTTP requests from the Supabase client

// Mock Radix UI Themes
vi.mock('@radix-ui/themes', () => ({
  Theme: ({ children }: { children: React.ReactNode }) =>
    React.createElement('div', { 'data-theme': 'light' }, children),
  Spinner: ({ className, size }: { className?: string; size?: string }) =>
    React.createElement('div', {
      className: `animate-spin ${className ?? ''}`,
      'data-size': size,
      role: 'status',
      'aria-label': 'Loading',
    }),
}))
