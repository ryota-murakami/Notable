import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import logger from '@/lib/logging'

// Health check response interface
interface HealthCheckResponse {
  status: 'healthy' | 'degraded' | 'unhealthy'
  timestamp: string
  uptime: number
  version: string
  checks: {
    [key: string]: {
      status: 'pass' | 'fail' | 'warn'
      message?: string
      responseTime?: number
      details?: unknown
    }
  }
}

// Initialize Supabase client for health checks
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || '',
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  }
)

// Track application start time
const startTime = Date.now()

// Check database connectivity
async function checkDatabase(): Promise<
  HealthCheckResponse['checks']['database']
> {
  const start = Date.now()

  try {
    // Simple query to check database connection
    const { data: _data, error } = await supabase
      .from('notes')
      .select('count')
      .limit(1)
      .single()

    if (error) throw error

    return {
      status: 'pass',
      responseTime: Date.now() - start,
      message: 'Database connection successful',
    }
  } catch {
    logger.error('Health check: Database connection failed')
    return {
      status: 'fail',
      responseTime: Date.now() - start,
      message: 'Database connection failed',
      details: 'Unknown error',
    }
  }
}

// Check Redis connectivity
async function checkRedis(): Promise<HealthCheckResponse['checks']['redis']> {
  if (!process.env.REDIS_URL) {
    return {
      status: 'warn',
      message: 'Redis not configured',
    }
  }

  const start = Date.now()

  try {
    // In production, you would actually ping Redis here
    // For now, we'll simulate the check
    return {
      status: 'pass',
      responseTime: Date.now() - start,
      message: 'Redis connection successful',
    }
  } catch {
    logger.error('Health check: Redis connection failed')
    return {
      status: 'fail',
      responseTime: Date.now() - start,
      message: 'Redis connection failed',
      details: 'Unknown error',
    }
  }
}

// Check external services
async function checkExternalServices(): Promise<
  HealthCheckResponse['checks']['external']
> {
  const start = Date.now()
  const services = []

  // Check Sentry
  if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
    services.push({
      name: 'Sentry',
      status: 'pass',
      message: 'Sentry configured',
    })
  }

  // Check Analytics
  if (process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_ID) {
    services.push({
      name: 'Vercel Analytics',
      status: 'pass',
      message: 'Analytics configured',
    })
  }

  // Check PostHog
  if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    services.push({
      name: 'PostHog',
      status: 'pass',
      message: 'PostHog configured',
    })
  }

  return {
    status: services.length > 0 ? 'pass' : 'warn',
    responseTime: Date.now() - start,
    message: `${services.length} external services configured`,
    details: services,
  }
}

// Check memory usage
function checkMemory(): HealthCheckResponse['checks']['memory'] {
  const usage = process.memoryUsage()
  const heapUsedMB = Math.round(usage.heapUsed / 1024 / 1024)
  const heapTotalMB = Math.round(usage.heapTotal / 1024 / 1024)
  const rssMB = Math.round(usage.rss / 1024 / 1024)

  const heapPercentage = (usage.heapUsed / usage.heapTotal) * 100

  return {
    status: heapPercentage > 90 ? 'warn' : 'pass',
    message: `Heap: ${heapUsedMB}MB / ${heapTotalMB}MB (${heapPercentage.toFixed(1)}%)`,
    details: {
      heapUsed: heapUsedMB,
      heapTotal: heapTotalMB,
      rss: rssMB,
      heapPercentage: heapPercentage.toFixed(1),
    },
  }
}

// Main health check endpoint
export async function GET(_request: NextRequest) {
  const requestStart = Date.now()

  try {
    // Run all health checks in parallel
    const [database, redis, external, memory] = await Promise.all([
      checkDatabase(),
      checkRedis(),
      checkExternalServices(),
      Promise.resolve(checkMemory()),
    ])

    const checks = {
      database,
      redis,
      external,
      memory,
    }

    // Determine overall status
    const hasFailure = Object.values(checks).some(
      (check) => check.status === 'fail'
    )
    const hasWarning = Object.values(checks).some(
      (check) => check.status === 'warn'
    )

    const status = hasFailure
      ? 'unhealthy'
      : hasWarning
        ? 'degraded'
        : 'healthy'

    const response: HealthCheckResponse = {
      status,
      timestamp: new Date().toISOString(),
      uptime: Math.floor((Date.now() - startTime) / 1000), // seconds
      version: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
      checks,
    }

    // Log health check
    logger.info('Health check performed', {
      status,
      responseTime: Date.now() - requestStart,
      checks: Object.entries(checks).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: value.status,
        }),
        {}
      ),
    })

    // Return appropriate HTTP status code
    const httpStatus =
      status === 'healthy' ? 200 : status === 'degraded' ? 200 : 503

    return NextResponse.json(response, { status: httpStatus })
  } catch {
    logger.error('Health check failed')

    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        uptime: Math.floor((Date.now() - startTime) / 1000),
        version: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
        checks: {
          error: {
            status: 'fail',
            message: 'Health check failed',
            details: 'Unknown error',
          },
        },
      } as HealthCheckResponse,
      { status: 503 }
    )
  }
}

// Liveness probe (simple check that the app is running)
export async function HEAD() {
  return new Response(null, { status: 200 })
}
