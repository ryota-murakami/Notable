import { cookies } from 'next/headers'
import { createMockUser } from './test-helpers'
import { createClient } from '@supabase/supabase-js'

/**
 * Check if dev auth bypass is enabled and return mock user if so
 */
export async function getDevAuthBypassUser() {
  const cookieStore = await cookies()
  const devAuthBypassCookie =
    cookieStore.get('dev-auth-bypass')?.value === 'true'

  if (
    devAuthBypassCookie &&
    (process.env.NODE_ENV === 'development' ||
      process.env.NODE_ENV === 'test' ||
      process.env.CI === 'true')
  ) {
    return createMockUser()
  }

  return null
}

/**
 * Create a Supabase client configured for testing with the mock user
 */
export async function getTestSupabaseClient() {
  const mockUser = await getDevAuthBypassUser()

  if (!mockUser) {
    return null
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.SUPABASE_SERVICE_ROLE_KEY as string,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  )

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
  const cookieStore = await cookies()
  const devAuthBypassCookie =
    cookieStore.get('dev-auth-bypass')?.value === 'true'

  return (
    devAuthBypassCookie &&
    (process.env.NODE_ENV === 'development' ||
      process.env.NODE_ENV === 'test' ||
      process.env.CI === 'true')
  )
}
