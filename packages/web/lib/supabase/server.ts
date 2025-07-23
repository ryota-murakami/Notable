import {
  createServerClient as createSupabaseServerClient,
  type CookieOptions,
} from '@supabase/ssr'
import { cookies } from 'next/headers'
import type { Database } from '@/types/database'

function getRequiredEnvVar(name: string): string {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

export async function createServerClient() {
  const cookieStore = await cookies()

  return createSupabaseServerClient<Database>(
    getRequiredEnvVar('NEXT_PUBLIC_SUPABASE_URL'),
    getRequiredEnvVar('NEXT_PUBLIC_SUPABASE_ANON_KEY'),
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options })
          } catch {
            // Server Component cookie handling
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: '', ...options })
          } catch {
            // Server Component cookie handling
          }
        },
      },
    }
  )
}
