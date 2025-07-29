import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { env } from '@/env'
import { getDevAuthBypassUser } from '@/utils/auth-helpers'

export async function createClient() {
  const cookieStore = await cookies()

  // Handle missing environment variables gracefully
  const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn(
      'Supabase environment variables are not configured. Authentication will not work.'
    )
    // Return a minimal client that won't cause errors
    return createServerClient(
      'https://placeholder.supabase.co',
      'placeholder-anon-key',
      {
        cookies: {
          getAll() {
            return []
          },
          setAll() {
            // No-op when env vars are missing
          },
        },
      }
    )
  }

  const client = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          )
        } catch {
          // The `setAll` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  })

  // Check for dev auth bypass in test/development environments
  if (
    process.env.NODE_ENV === 'development' ||
    process.env.NODE_ENV === 'test' ||
    process.env.CI === 'true'
  ) {
    const devBypassUser = await getDevAuthBypassUser()
    if (devBypassUser) {
      // Override the auth.getUser method to return mock user
      const originalGetUser = client.auth.getUser.bind(client.auth)
      client.auth.getUser = async () => ({
        data: { user: devBypassUser },
        error: null,
      })
    }
  }

  return client
}
