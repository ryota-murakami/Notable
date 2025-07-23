import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import type { Database } from '@/types/database'

// Lazy initialization to avoid errors during build time

function getSupabaseUrl(): string {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  if (!url || url === '') {
    // Return a valid placeholder URL during build time
    return 'https://placeholder.supabase.co'
  }
  return url
}

function getSupabaseAnonKey(): string {
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!key || key === '') {
    // Return a valid placeholder key during build time
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsYWNlaG9sZGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDYyMzkwMjIsImV4cCI6MTk2MTgxNTAyMn0.placeholder'
  }
  return key
}

function getSupabaseServiceKey(): string {
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!key || key === '') {
    // Return a valid placeholder key during build time
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsYWNlaG9sZGVyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NjIzOTAyMiwiZXhwIjoxOTYxODE1MDIyfQ.placeholder'
  }
  return key
}

// Simple function to create supabase client
function createSupabaseClient(): SupabaseClient<Database> {
  const url = getSupabaseUrl()
  const key = getSupabaseAnonKey()
  const isPlaceholder =
    url.includes('placeholder') || key.includes('placeholder')

  if (isPlaceholder && typeof window !== 'undefined') {
    console.warn(
      'Using placeholder Supabase configuration for development/testing'
    )
  }

  return createClient<Database>(url, key, {
    auth: {
      autoRefreshToken: !isPlaceholder,
      persistSession: !isPlaceholder,
      detectSessionInUrl: !isPlaceholder,
    },
    db: {
      schema: 'public',
    },
  })
}

// Export the client creation function instead of a global instance
export const createSupabaseClientInstance = createSupabaseClient

// Admin client for server-side operations
function createSupabaseAdminClient(): SupabaseClient<Database> {
  const url = getSupabaseUrl()
  const key = getSupabaseServiceKey()

  return createClient<Database>(url, key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}

// Export the admin client creation function instead of a global instance
export const createSupabaseAdminClientInstance = createSupabaseAdminClient
