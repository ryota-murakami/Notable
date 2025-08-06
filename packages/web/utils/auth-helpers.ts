import { cookies } from 'next/headers'
import { createMockUser } from './test-helpers'
import { createClient } from '@supabase/supabase-js'

/**
 * Check if dev auth bypass is enabled and return mock user if so
 */
export async function getDevAuthBypassUser() {
  // Check for API mocking FIRST to avoid any cookie/Supabase initialization
  if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
    console.info('API mocking enabled - returning mock user via auth bypass')
    return createMockUser()
  }

  const cookieStore = await cookies()
  const devAuthBypassCookie =
    cookieStore.get('dev-auth-bypass')?.value === 'true'

  // For E2E tests, also check for test database URL
  const isTestEnvironment =
    process.env.NODE_ENV === 'development' ||
    process.env.NODE_ENV === 'test' ||
    process.env.CI === 'true' ||
    process.env.DATABASE_URL?.includes('localhost:5433')

  if (devAuthBypassCookie && isTestEnvironment) {
    return createMockUser()
  }

  return null
}

/**
 * Create a Supabase client configured for testing with the mock user
 */
export async function getTestSupabaseClient() {
  // Check for API mocking FIRST to avoid any Supabase initialization
  if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
    console.info('API mocking enabled - skipping Supabase client creation')
    return null
  }

  const mockUser = await getDevAuthBypassUser()

  if (!mockUser) {
    return null
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !serviceRoleKey) {
    return null
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })

  // Set the current user ID in the database session for RLS
  await supabase.rpc('set_config', {
    setting: 'app.current_user_id',
    value: mockUser.id,
    is_local: true,
  })

  return supabase
}

/**
 * Check if we should bypass auth checks for development/testing
 */
export async function shouldBypassAuth() {
  // Check for API mocking FIRST
  if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
    console.info('API mocking enabled - bypassing auth checks')
    return true
  }

  const cookieStore = await cookies()
  const devAuthBypassCookie =
    cookieStore.get('dev-auth-bypass')?.value === 'true'

  // For E2E tests, also check for test database URL
  const isTestEnvironment =
    process.env.NODE_ENV === 'development' ||
    process.env.NODE_ENV === 'test' ||
    process.env.CI === 'true' ||
    process.env.DATABASE_URL?.includes('localhost:5433')

  return devAuthBypassCookie && isTestEnvironment
}