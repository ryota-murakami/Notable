/**
 * Supabase Mock for Testing
 *
 * This mock allows testing of Supabase authentication flows without requiring
 * real OAuth providers or network calls. It's especially useful for testing
 * Google OAuth authentication flows in CI/CD environments.
 */

import type { User, Session, AuthError } from '@supabase/supabase-js'

// Mock user data for testing
const mockUser = {
  id: 'mock-user-123',
  app_metadata: {},
  user_metadata: {
    avatar_url: 'https://lh3.googleusercontent.com/mock-avatar.jpg',
    email: 'test@example.com',
    email_verified: true,
    full_name: 'Test User',
    iss: 'https://accounts.google.com',
    name: 'Test User',
    picture: 'https://lh3.googleusercontent.com/mock-avatar.jpg',
    provider_id: 'mock-google-id',
    sub: 'mock-google-id',
  },
  aud: 'authenticated',
  confirmation_sent_at: new Date().toISOString(),
  created_at: new Date().toISOString(),
  email: 'test@example.com',
  email_confirmed_at: new Date().toISOString(),
  identities: [
    {
      id: 'mock-google-id',
      user_id: 'mock-user-123',
      identity_id: 'mock-identity-id-123',
      identity_data: {
        email: 'test@example.com',
        name: 'Test User',
        picture: 'https://lh3.googleusercontent.com/mock-avatar.jpg',
        provider_id: 'mock-google-id',
        sub: 'mock-google-id',
      },
      provider: 'google',
      last_sign_in_at: new Date().toISOString(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ],
  last_sign_in_at: new Date().toISOString(),
  phone: null,
  recovery_sent_at: null,
  role: 'authenticated',
  updated_at: new Date().toISOString(),
}

const mockSession: Session = {
  access_token: 'mock-access-token',
  token_type: 'bearer',
  expires_in: 3600,
  refresh_token: 'mock-refresh-token',
  user: mockUser as unknown as User,
  expires_at: Math.floor(Date.now() / 1000) + 3600,
}

// Mock scenarios for different test cases
export const mockScenarios = {
  SUCCESS: 'success',
  ERROR_USER_NOT_FOUND: 'error_user_not_found',
  ERROR_NETWORK: 'error_network',
  ERROR_INVALID_CREDENTIALS: 'error_invalid_credentials',
} as const

let currentScenario: string = mockScenarios.SUCCESS

// Mock auth methods
export const mockAuth = {
  signInWithOAuth: jest.fn().mockImplementation(({ provider, options }) => {
    // Using provider parameter to avoid TS unused variable error
    console.debug('Mock OAuth sign-in with provider:', provider)
    switch (currentScenario) {
      case mockScenarios.SUCCESS:
        return Promise.resolve({
          data: {
            user: mockUser as unknown as User,
            session: mockSession,
            url: options?.skipBrowserRedirect
              ? 'https://mock-oauth-url.com'
              : undefined,
          },
          error: null,
        })
      case mockScenarios.ERROR_USER_NOT_FOUND:
        return Promise.resolve({
          data: { user: null, session: null },
          error: { message: 'User not found', status: 404 } as AuthError,
        })
      case mockScenarios.ERROR_NETWORK:
        return Promise.resolve({
          data: { user: null, session: null },
          error: { message: 'Network error', status: 500 } as AuthError,
        })
      default:
        return Promise.resolve({
          data: { user: mockUser as unknown as User, session: mockSession },
          error: null,
        })
    }
  }),

  signInWithPassword: jest.fn().mockResolvedValue({
    data: { user: mockUser as unknown as User, session: mockSession },
    error: null,
  }),

  signUp: jest.fn().mockResolvedValue({
    data: { user: mockUser as unknown as User, session: mockSession },
    error: null,
  }),

  signOut: jest.fn().mockResolvedValue({
    error: null,
  }),

  getSession: jest.fn().mockResolvedValue({
    data: { session: mockSession },
    error: null,
  }),

  getUser: jest.fn().mockResolvedValue({
    data: { user: mockUser as unknown as User },
    error: null,
  }),

  onAuthStateChange: jest.fn().mockImplementation((callback) => {
    // Simulate immediate auth state
    setTimeout(() => callback('SIGNED_IN', mockSession), 0)
    return {
      data: { subscription: { unsubscribe: jest.fn() } },
    }
  }),

  resetPasswordForEmail: jest.fn().mockResolvedValue({
    data: {},
    error: null,
  }),

  exchangeCodeForSession: jest.fn().mockResolvedValue({
    data: { user: mockUser as unknown as User, session: mockSession },
    error: null,
  }),
}

// Mock database operations
export const mockFrom = jest.fn().mockImplementation((table: string) => {
  const createChainableQuery = (): any => {
    const query = {
      select: jest.fn(() => createChainableQuery()),
      insert: jest.fn(() => createChainableQuery()),
      update: jest.fn(() => createChainableQuery()),
      delete: jest.fn(() => createChainableQuery()),
      eq: jest.fn(() => createChainableQuery()),
      neq: jest.fn(() => createChainableQuery()),
      gt: jest.fn(() => createChainableQuery()),
      gte: jest.fn(() => createChainableQuery()),
      lt: jest.fn(() => createChainableQuery()),
      lte: jest.fn(() => createChainableQuery()),
      like: jest.fn(() => createChainableQuery()),
      ilike: jest.fn(() => createChainableQuery()),
      is: jest.fn(() => createChainableQuery()),
      in: jest.fn(() => createChainableQuery()),
      contains: jest.fn(() => createChainableQuery()),
      containedBy: jest.fn(() => createChainableQuery()),
      rangeGt: jest.fn(() => createChainableQuery()),
      rangeGte: jest.fn(() => createChainableQuery()),
      rangeLt: jest.fn(() => createChainableQuery()),
      rangeLte: jest.fn(() => createChainableQuery()),
      rangeAdjacent: jest.fn(() => createChainableQuery()),
      overlaps: jest.fn(() => createChainableQuery()),
      textSearch: jest.fn(() => createChainableQuery()),
      match: jest.fn(() => createChainableQuery()),
      not: jest.fn(() => createChainableQuery()),
      or: jest.fn(() => createChainableQuery()),
      filter: jest.fn(() => createChainableQuery()),
      order: jest.fn(() => createChainableQuery()),
      limit: jest.fn(() => createChainableQuery()),
      range: jest.fn(() => createChainableQuery()),
      abortSignal: jest.fn(() => createChainableQuery()),
      single: jest.fn().mockResolvedValue({
        data: { id: 1, [table]: 'mock data' },
        error: null,
      }),
      maybeSingle: jest.fn().mockResolvedValue({
        data: { id: 1, [table]: 'mock data' },
        error: null,
      }),
      // Make the query object thenable so it can be awaited
      then: jest.fn().mockImplementation((resolve) => {
        const result = {
          data: [{ id: 1, [table]: 'mock data' }],
          error: null,
        }
        return Promise.resolve(result).then(resolve)
      }),
    }
    return query
  }

  return createChainableQuery()
})

// Mock Supabase client
export const mockSupabaseClient = {
  auth: mockAuth,
  from: mockFrom,
  channel: jest.fn().mockReturnValue({
    on: jest.fn().mockReturnValue({
      subscribe: jest.fn(),
    }),
  }),
  removeChannel: jest.fn(),
  storage: {
    from: jest.fn().mockReturnValue({
      upload: jest.fn().mockResolvedValue({
        data: { path: 'mock-path' },
        error: null,
      }),
      download: jest.fn().mockResolvedValue({
        data: new Blob(),
        error: null,
      }),
    }),
  },
}

// Mock createClient function
export const createClient = jest.fn(() => mockSupabaseClient)

// Test utilities for controlling mock behavior
export const supabaseMockUtils = {
  /**
   * Set the current mock scenario to test different authentication outcomes
   */
  setMockScenario: (scenario: string) => {
    currentScenario = scenario
  },

  /**
   * Reset all mocks to their default state
   */
  resetMocks: () => {
    currentScenario = mockScenarios.SUCCESS
    jest.clearAllMocks()
  },

  /**
   * Get the current mock user data
   */
  getMockUser: () => mockUser,

  /**
   * Get the current mock session data
   */
  getMockSession: () => mockSession,

  /**
   * Update mock user data for specific test cases
   */
  setMockUser: (userData: Partial<User>) => {
    Object.assign(mockUser, userData)
  },

  /**
   * Simulate auth state changes
   */
  simulateAuthStateChange: (
    event: 'SIGNED_IN' | 'SIGNED_OUT' | 'TOKEN_REFRESHED',
    session?: Session | null
  ) => {
    const callbacks = mockAuth.onAuthStateChange.mock.calls.map(
      (call) => call[0]
    )
    callbacks.forEach((callback) =>
      callback(event, session !== undefined ? session : mockSession)
    )
  },
}

// Default export
export default mockSupabaseClient

// Mock the actual Supabase package
jest.mock('@supabase/supabase-js', () => ({
  createClient: jest.fn(() => mockSupabaseClient),
}))
