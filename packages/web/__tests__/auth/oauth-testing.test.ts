/**
 * OAuth Authentication Testing Examples
 *
 * This file demonstrates how to test Google OAuth authentication with Supabase
 * using mocks instead of real OAuth providers. This approach is reliable,
 * fast, and doesn't require actual Google credentials.
 */

import {
  mockSupabaseClient,
  supabaseMockUtils,
  mockScenarios,
} from '../../__mocks__/supabase'
import { createClient } from '@supabase/supabase-js'

// Mock the Supabase client
jest.mock('@supabase/supabase-js')

describe('OAuth Authentication Testing', () => {
  let supabase: typeof mockSupabaseClient

  beforeEach(() => {
    // Reset mocks before each test
    supabaseMockUtils.resetMocks()
    supabase = createClient('mock-url', 'mock-anon-key') as any
  })

  describe('Google OAuth Sign-in', () => {
    it('should successfully sign in with Google OAuth', async () => {
      // Act
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: 'http://localhost:3000/auth/callback',
        },
      })

      // Assert
      expect(error).toBeNull()
      expect(data.user).toBeDefined()
      expect(data.session).toBeDefined()
      expect(data.user?.email).toBe('test@example.com')
      expect(data.user?.user_metadata?.provider_id).toBe('mock-google-id')
      expect(supabase.auth.signInWithOAuth).toHaveBeenCalledWith({
        provider: 'google',
        options: {
          redirectTo: 'http://localhost:3000/auth/callback',
        },
      })
    })

    it('should handle Google OAuth with skipBrowserRedirect option', async () => {
      // Act
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          skipBrowserRedirect: true,
          redirectTo: 'http://localhost:3000/auth/callback',
        },
      })

      // Assert
      expect(error).toBeNull()
      expect(data.url).toBe('https://mock-oauth-url.com')
      expect(data.user).toBeDefined()
      expect(data.session).toBeDefined()
    })

    it('should handle Google OAuth authentication failure', async () => {
      // Arrange
      supabaseMockUtils.setMockScenario(mockScenarios.ERROR_USER_NOT_FOUND)

      // Act
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      })

      // Assert
      expect(error).toBeDefined()
      expect(error?.message).toBe('User not found')
      expect(data.user).toBeNull()
      expect(data.session).toBeNull()
    })

    it('should handle network errors during OAuth', async () => {
      // Arrange
      supabaseMockUtils.setMockScenario(mockScenarios.ERROR_NETWORK)

      // Act
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      })

      // Assert
      expect(error).toBeDefined()
      expect(error?.message).toBe('Network error')
      expect(data.user).toBeNull()
      expect(data.session).toBeNull()
    })
  })

  describe('OAuth Callback Handling', () => {
    it('should exchange authorization code for session', async () => {
      // Act
      const { data, error } =
        await supabase.auth.exchangeCodeForSession('mock-auth-code')

      // Assert
      expect(error).toBeNull()
      expect(data.user).toBeDefined()
      expect(data.session).toBeDefined()
      expect(data.session?.access_token).toBe('mock-access-token')
    })
  })

  describe('Authentication State Management', () => {
    it('should handle auth state changes', (done) => {
      // Arrange
      const mockCallback = jest.fn((event, session) => {
        expect(event).toBe('SIGNED_IN')
        expect(session).toBeDefined()
        expect(session?.user?.email).toBe('test@example.com')
        done()
      })

      // Act
      supabase.auth.onAuthStateChange(mockCallback)

      // The mock automatically triggers the callback with SIGNED_IN
    })

    it('should get current session', async () => {
      // Act
      const { data, error } = await supabase.auth.getSession()

      // Assert
      expect(error).toBeNull()
      expect(data.session).toBeDefined()
      expect(data.session?.user?.email).toBe('test@example.com')
    })

    it('should get current user', async () => {
      // Act
      const { data, error } = await supabase.auth.getUser()

      // Assert
      expect(error).toBeNull()
      expect(data.user).toBeDefined()
      expect(data.user?.email).toBe('test@example.com')
    })

    it('should sign out user', async () => {
      // Act
      const { error } = await supabase.auth.signOut()

      // Assert
      expect(error).toBeNull()
      expect(supabase.auth.signOut).toHaveBeenCalled()
    })
  })

  describe('Custom Mock Scenarios', () => {
    it('should allow custom user data for specific test cases', async () => {
      // Arrange
      supabaseMockUtils.setMockUser({
        email: 'custom@example.com',
        user_metadata: {
          full_name: 'Custom User',
          avatar_url: 'https://custom-avatar.com/avatar.jpg',
        },
      })

      // Act
      const { data, error } = await supabase.auth.getUser()

      // Assert
      expect(error).toBeNull()
      expect(data.user?.email).toBe('custom@example.com')
      expect(data.user?.user_metadata?.full_name).toBe('Custom User')
    })

    it('should simulate auth state changes programmatically', () => {
      // Arrange
      const mockCallback = jest.fn()
      supabase.auth.onAuthStateChange(mockCallback)

      // Act
      supabaseMockUtils.simulateAuthStateChange('SIGNED_OUT', null)

      // Assert
      expect(mockCallback).toHaveBeenCalledWith('SIGNED_OUT', null)
    })
  })

  describe('Database Operations with Auth Context', () => {
    it('should perform database operations with authenticated user context', async () => {
      // Act
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', supabaseMockUtils.getMockUser().id)

      // Assert
      expect(error).toBeNull()
      expect(data).toBeDefined()
      expect(supabase.from).toHaveBeenCalledWith('profiles')
    })

    it('should insert user profile after OAuth signup', async () => {
      // Arrange
      const mockUser = supabaseMockUtils.getMockUser()

      // Act
      const { data, error } = await supabase.from('profiles').insert({
        user_id: mockUser.id,
        email: mockUser.email,
        full_name: mockUser.user_metadata?.full_name,
        avatar_url: mockUser.user_metadata?.avatar_url,
      })

      // Assert
      expect(error).toBeNull()
      expect(data).toBeDefined()
      expect(supabase.from).toHaveBeenCalledWith('profiles')
    })
  })
})

/**
 * Integration Testing Example
 *
 * This demonstrates how to test a complete OAuth flow including
 * component interaction and state management.
 */
describe('OAuth Integration Testing', () => {
  beforeEach(() => {
    supabaseMockUtils.resetMocks()
  })

  it('should handle complete Google OAuth login flow', async () => {
    const supabase = createClient('mock-url', 'mock-anon-key') as any

    // Step 1: Initiate OAuth
    const { data: oauthData, error: oauthError } =
      await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: 'http://localhost:3000/auth/callback',
        },
      })

    expect(oauthError).toBeNull()
    expect(oauthData.user).toBeDefined()

    // Step 2: Verify session is established
    const { data: sessionData, error: sessionError } =
      await supabase.auth.getSession()

    expect(sessionError).toBeNull()
    expect(sessionData.session?.user?.id).toBe(oauthData.user?.id)

    // Step 3: Create user profile
    const { data: profileData, error: profileError } = await supabase
      .from('profiles')
      .insert({
        user_id: oauthData.user?.id,
        email: oauthData.user?.email,
        full_name: oauthData.user?.user_metadata?.full_name,
      })

    expect(profileError).toBeNull()
    expect(profileData).toBeDefined()

    // Step 4: Verify authentication state
    expect(supabase.auth.signInWithOAuth).toHaveBeenCalledTimes(1)
    expect(supabase.auth.getSession).toHaveBeenCalledTimes(1)
    expect(supabase.from).toHaveBeenCalledWith('profiles')
  })
})
