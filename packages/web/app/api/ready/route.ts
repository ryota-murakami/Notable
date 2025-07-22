import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import logger from '@/lib/logging'

// Readiness check to determine if the app is ready to serve requests
export async function GET(_request: NextRequest) {
  const checks = {
    environment: true,
    database: false,
  }

  // Check required environment variables
  const requiredEnvVars = [
    'NEXT_PUBLIC_SUPABASE_URL',
    'NEXT_PUBLIC_SUPABASE_ANON_KEY',
    'NEXT_PUBLIC_APP_URL',
  ]

  const missingEnvVars = requiredEnvVars.filter(
    (envVar) => !process.env[envVar]
  )

  if (missingEnvVars.length > 0) {
    checks.environment = false
    logger.warn('Readiness check: Missing environment variables', {
      missingEnvVars,
    })
  }

  // Check database connectivity
  if (checks.environment) {
    try {
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
          auth: {
            persistSession: false,
            autoRefreshToken: false,
          },
        }
      )

      // Simple ping to check connection
      const { error } = await supabase.from('notes').select('count').limit(1)

      if (!error) {
        checks.database = true
      } else {
        logger.error('Readiness check: Database not ready', { error })
      }
    } catch (error) {
      logger.error('Readiness check: Database connection failed', {
        error: error instanceof Error ? error : new Error(String(error)),
      })
    }
  }

  const isReady = Object.values(checks).every((check) => check === true)

  return NextResponse.json(
    {
      ready: isReady,
      checks,
      timestamp: new Date().toISOString(),
    },
    { status: isReady ? 200 : 503 }
  )
}
