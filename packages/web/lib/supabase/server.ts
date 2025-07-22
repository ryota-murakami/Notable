import { createClient as createSupabaseClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'
import { Database } from '@/types/database'

interface CookieOptions {
  name?: string
  value?: string
  maxAge?: number
  expires?: Date
  path?: string
  domain?: string
  secure?: boolean
  httpOnly?: boolean
  sameSite?: boolean | 'lax' | 'strict' | 'none'
}

function getRequiredEnvVar(name: string): string {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

export async function createServerClient() {
  const cookieStore = await cookies()

  return createSupabaseClient<Database>(
    getRequiredEnvVar('NEXT_PUBLIC_SUPABASE_URL'),
    getRequiredEnvVar('NEXT_PUBLIC_SUPABASE_ANON_KEY'),
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options })
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: '', ...options })
        },
      },
    }
  )
}

export async function createServiceRoleClient() {
  return createSupabaseClient<Database>(
    getRequiredEnvVar('NEXT_PUBLIC_SUPABASE_URL'),
    getRequiredEnvVar('SUPABASE_SERVICE_ROLE_KEY'),
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  )
}
