import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/types/database'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// For development/testing with placeholder values, use fallback configuration
const isPlaceholder =
  supabaseUrl?.includes('placeholder') || !supabaseUrl || !supabaseAnonKey

if (isPlaceholder) {
  console.warn(
    'Using placeholder Supabase configuration for development/testing'
  )
}

const finalUrl = supabaseUrl || 'https://placeholder.supabase.co'
const finalAnonKey = supabaseAnonKey || 'placeholder-key'

export const supabase = createClient<Database>(finalUrl, finalAnonKey, {
  auth: {
    autoRefreshToken: !isPlaceholder,
    persistSession: !isPlaceholder,
    detectSessionInUrl: !isPlaceholder,
  },
  db: {
    schema: 'public',
  },
})

// For server-side operations
const serviceRoleKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-service-key'

export const supabaseAdmin = createClient<Database>(finalUrl, serviceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})
