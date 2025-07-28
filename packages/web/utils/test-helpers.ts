import type { User as SupabaseUser } from '@supabase/supabase-js'

/**
 * Creates a mock user for testing purposes when dev-auth-bypass is enabled
 * @returns A mock SupabaseUser object with test data
 */
export const createMockUser = (): SupabaseUser => ({
  id: 'test-user-id',
  email: 'demo@notable.app',
  user_metadata: {
    full_name: 'Demo User',
    name: 'Demo User'
  },
  app_metadata: {},
  aud: 'authenticated',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  role: 'authenticated',
  email_confirmed_at: new Date().toISOString()
} as SupabaseUser)