import React from 'react'
import { vi } from 'vitest'
import '@testing-library/jest-dom'

// Make React available globally
global.React = React

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
vi.mock('./lib/utils/environment', () => ({
  isTest: () => true,
}))

// Mock Supabase client
vi.mock('./utils/supabase/client', () => ({
  createClient: () => ({
    auth: {
      getUser: vi.fn().mockResolvedValue({ data: { user: null } }),
      onAuthStateChange: vi.fn().mockReturnValue({
        data: { subscription: { unsubscribe: vi.fn() } },
      }),
    },
  }),
}))

// Mock Radix UI Themes
vi.mock('@radix-ui/themes', () => ({
  Theme: ({ children }: { children: React.ReactNode }) => 
    React.createElement('div', { 'data-theme': 'light' }, children),
  Spinner: ({ className, size }: { className?: string; size?: string }) => 
    React.createElement('div', { 
      className: `animate-spin ${className ?? ''}`,
      'data-size': size,
      role: 'status',
      'aria-label': 'Loading'
    }),
}))