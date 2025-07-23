/**
 * MSW Request Handlers for OAuth Authentication
 *
 * This file contains Mock Service Worker handlers that intercept
 * Google OAuth API calls and provide mock responses for testing.
 */

import { http, HttpResponse } from 'msw'

// Mock OAuth state management
interface MockAuthState {
  isAuthenticated: boolean
  user: typeof mockSupabaseUser | null
  session: typeof mockSession | null
  error: { error: string; message: string } | null
}

let mockAuthState: MockAuthState = {
  isAuthenticated: false,
  user: null,
  session: null,
  error: null,
}

// Mock user data for Google OAuth
const mockGoogleUser = {
  id: 'mock-google-user-123',
  email: 'test@example.com',
  name: 'Test User',
  picture: 'https://lh3.googleusercontent.com/mock-avatar.jpg',
  given_name: 'Test',
  family_name: 'User',
  locale: 'en',
  email_verified: true,
}

// Mock Supabase user response
const mockSupabaseUser = {
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

const mockSession = {
  access_token: 'mock-access-token',
  token_type: 'bearer',
  expires_in: 3600,
  refresh_token: 'mock-refresh-token',
  user: mockSupabaseUser,
  expires_at: Math.floor(Date.now() / 1000) + 3600,
}

// MSW Handlers
const handlers = [
  // Google OAuth Authorization URL
  http.get(
    'https://accounts.google.com/o/oauth2/v2/auth',
    ({ request }: { request: Request }) => {
      const url = new URL(request.url)
      const redirectUri = url.searchParams.get('redirect_uri')
      const state = url.searchParams.get('state')

      // Simulate successful OAuth authorization
      const authCode = 'mock-auth-code-123'
      const redirectUrl = `${redirectUri}?code=${authCode}&state=${state}`

      return HttpResponse.json({ redirect_url: redirectUrl }, { status: 200 })
    }
  ),

  // Google OAuth Token Exchange
  http.post(
    'https://oauth2.googleapis.com/token',
    async ({ request }: { request: Request }) => {
      const body = await request.formData()
      const code = body.get('code')
      const grantType = body.get('grant_type')

      if (grantType !== 'authorization_code' || !code) {
        return HttpResponse.json(
          {
            error: 'invalid_grant',
            error_description: 'Invalid authorization code',
          },
          { status: 400 }
        )
      }

      // Mock successful token response
      return HttpResponse.json({
        access_token: 'mock-google-access-token',
        expires_in: 3600,
        refresh_token: 'mock-google-refresh-token',
        scope: 'openid email profile',
        token_type: 'Bearer',
        id_token: 'mock-google-id-token',
      })
    }
  ),

  // Google User Info API
  http.get(
    'https://www.googleapis.com/oauth2/v2/userinfo',
    ({ request }: { request: Request }) => {
      const authHeader = request.headers.get('authorization')

      if (!authHeader || !authHeader.includes('Bearer')) {
        return HttpResponse.json(
          { error: 'unauthorized', error_description: 'Invalid access token' },
          { status: 401 }
        )
      }

      return HttpResponse.json(mockGoogleUser)
    }
  ),

  // Supabase Auth API - OAuth sign in
  http.post('*/auth/v1/oauth', async ({ request }: { request: Request }) => {
    const body = await request.json()
    const { provider, options } = body as any

    if (provider !== 'google') {
      return HttpResponse.json(
        { error: 'unsupported_provider', message: 'Provider not supported' },
        { status: 400 }
      )
    }

    // Handle skipBrowserRedirect option
    if (options?.skipBrowserRedirect) {
      return HttpResponse.json({
        url: 'https://accounts.google.com/o/oauth2/v2/auth?mock=true',
        provider: 'google',
      })
    }

    // Mock successful OAuth response
    mockAuthState = {
      isAuthenticated: true,
      user: mockSupabaseUser,
      session: mockSession,
      error: null,
    }

    return HttpResponse.json({
      data: {
        user: mockSupabaseUser,
        session: mockSession,
      },
      error: null,
    })
  }),

  // Supabase Auth API - Exchange code for session
  http.post('*/auth/v1/token', async ({ request }: { request: Request }) => {
    const body = await request.json()
    const { auth_code } = body as any

    if (!auth_code) {
      return HttpResponse.json(
        { error: 'invalid_request', message: 'Authorization code required' },
        { status: 400 }
      )
    }

    mockAuthState = {
      isAuthenticated: true,
      user: mockSupabaseUser,
      session: mockSession,
      error: null,
    }

    return HttpResponse.json({
      access_token: mockSession.access_token,
      token_type: mockSession.token_type,
      expires_in: mockSession.expires_in,
      refresh_token: mockSession.refresh_token,
      user: mockSupabaseUser,
    })
  }),

  // Supabase Auth API - Get user
  http.get('*/auth/v1/user', ({ request }: { request: Request }) => {
    const authHeader = request.headers.get('authorization')

    if (!authHeader || !mockAuthState.isAuthenticated) {
      return HttpResponse.json(
        { error: 'unauthorized', message: 'Invalid token' },
        { status: 401 }
      )
    }

    return HttpResponse.json(mockSupabaseUser)
  }),

  // Supabase Auth API - Sign out
  http.post('*/auth/v1/logout', () => {
    mockAuthState = {
      isAuthenticated: false,
      user: null,
      session: null,
      error: null,
    }

    return HttpResponse.json({}, { status: 204 })
  }),

  // Supabase Database API - Generic database operations
  http.get('*/rest/v1/*', ({ request }: { request: Request }) => {
    const url = new URL(request.url)
    const table = url.pathname.split('/').pop()

    return HttpResponse.json([
      {
        id: 1,
        [table || 'data']: 'mock data',
        created_at: new Date().toISOString(),
      },
    ])
  }),

  http.post('*/rest/v1/*', ({ request }: { request: Request }) => {
    const url = new URL(request.url)
    const table = url.pathname.split('/').pop()

    return HttpResponse.json([
      {
        id: 1,
        [table || 'data']: 'mock inserted data',
        created_at: new Date().toISOString(),
      },
    ])
  }),
]

// Test utilities for controlling MSW behavior
const mswUtils = {
  /**
   * Set mock authentication state
   */
  setAuthState: (state: Partial<typeof mockAuthState>) => {
    mockAuthState = { ...mockAuthState, ...state }
  },

  /**
   * Get current mock authentication state
   */
  getAuthState: () => mockAuthState,

  /**
   * Reset authentication state to default
   */
  resetAuthState: () => {
    mockAuthState = {
      isAuthenticated: false,
      user: null,
      session: null,
      error: null,
    }
  },

  /**
   * Simulate authentication error
   */
  simulateAuthError: (error: string, message: string) => {
    mockAuthState = {
      ...mockAuthState,
      error: { error, message },
    }
  },

  /**
   * Get mock user data
   */
  getMockUser: () => mockSupabaseUser,

  /**
   * Get mock session data
   */
  getMockSession: () => mockSession,
}

// TypeScript exports
export { handlers, mswUtils }
