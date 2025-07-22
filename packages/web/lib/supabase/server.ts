import { createClient as createSupabaseClient } from '@supabase/supabase-js'
import { Database } from '@/types/database'

function getRequiredEnvVar(name: string): string {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

export function createClient() {
  const supabaseUrl = getRequiredEnvVar('NEXT_PUBLIC_SUPABASE_URL')
  const serviceRoleKey = getRequiredEnvVar('SUPABASE_SERVICE_ROLE_KEY')

  return createSupabaseClient<Database>(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}
