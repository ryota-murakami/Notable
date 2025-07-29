import { cookies } from 'next/headers'
import type { User as SupabaseUser } from '@supabase/supabase-js'
import { createMockUser } from './test-helpers'

/**
 * Check for development auth bypass and return mock user if enabled
 * This function is designed for server-side use in API routes and middleware
 */
export const getDevAuthBypassUser = async (): Promise<SupabaseUser | null> => {
  try {
    const cookieStore = await cookies()
    const devBypassCookie = cookieStore.get('dev-auth-bypass')

    if (devBypassCookie?.value === 'true') {
      return createMockUser()
    }

    return null
  } catch (error) {
    // If cookies can't be accessed (e.g., not in a server context), return null
    return null
  }
}
