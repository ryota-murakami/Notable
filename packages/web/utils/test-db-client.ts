import { createClient } from '@supabase/supabase-js'

/**
 * Create a Supabase client that connects directly to our test PostgreSQL database
 * This bypasses the need for a full Supabase instance during E2E tests
 */
export function createTestDatabaseClient() {
  // For E2E tests, we use direct PostgreSQL connection
  if (process.env.DATABASE_URL?.includes('localhost:5433')) {
    // Create a client that connects to our local test database
    // Using localhost:4378 as the API URL (our Next.js server)
    const supabaseUrl = 'http://localhost:54321' // Standard Supabase local port
    const supabaseAnonKey =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' // Standard local dev key

    return createClient(supabaseUrl, supabaseAnonKey, {
      db: {
        schema: 'public',
      },
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    })
  }

  // Fallback to regular Supabase client
  return null
}
