import type { User as SupabaseUser } from '@supabase/supabase-js'

/**
 * Creates a mock user for testing purposes when dev-auth-bypass is enabled
 * @returns A mock SupabaseUser object with test data
 */
export const createMockUser = (): SupabaseUser =>
  ({
    id: '11111111-1111-1111-1111-111111111111',
    email: 'test@example.com',
    user_metadata: {
      full_name: 'Test User',
      name: 'Test User',
    },
    app_metadata: {},
    aud: 'authenticated',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    role: 'authenticated',
    email_confirmed_at: new Date().toISOString(),
  }) as SupabaseUser
