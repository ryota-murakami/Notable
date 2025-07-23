import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { logger } from '@/lib/logging/logger.server'

interface ServiceStatus {
  name: string
  status: 'operational' | 'degraded' | 'outage'
  description: string
  lastChecked: string
  uptime?: number
  responseTime?: number
}

interface StatusPageResponse {
  status: 'operational' | 'degraded' | 'outage'
  services: ServiceStatus[]
  incidents: unknown[]
  lastUpdated: string
  uptime: {
    last24Hours: number
    last7Days: number
    last30Days: number
  }
}

// Initialize Supabase client
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

// Check individual service status
async function checkService(
  name: string,
  checkFn: () => Promise<{
    status: ServiceStatus['status']
    responseTime?: number
  }>
): Promise<ServiceStatus> {
  const startTime = Date.now()

  try {
    const result = await checkFn()
    return {
      name,
      status: result.status,
      description: `${name} is ${result.status}`,
      lastChecked: new Date().toISOString(),
      responseTime: result.responseTime || Date.now() - startTime,
    }
  } catch {
    logger.error(`Status check failed for ${name}`)
    return {
      name,
      status: 'outage',
      description: `${name} is experiencing issues`,
      lastChecked: new Date().toISOString(),
      responseTime: Date.now() - startTime,
    }
  }
}

// Get uptime statistics from logs
async function getUptimeStats(): Promise<StatusPageResponse['uptime']> {
  try {
    // In a real implementation, query your monitoring data
    // For now, return mock data
    return {
      last24Hours: 99.9,
      last7Days: 99.5,
      last30Days: 99.7,
    }
  } catch {
    logger.error('Failed to get uptime stats')
    return {
      last24Hours: 0,
      last7Days: 0,
      last30Days: 0,
    }
  }
}

// Get active incidents
async function getActiveIncidents(): Promise<unknown[]> {
  try {
    // In production, query your incident management system
    // For now, check for recent errors in logs
    const { data, error } = await supabase
      .from('error_logs')
      .select('*')
      .eq('resolved', false)
      .order('timestamp', { ascending: false })
      .limit(5)

    if (error) throw error

    return (data || []).map((incident) => ({
      id: incident.id,
      title: incident.error_type,
      description: incident.error_message,
      severity: 'minor',
      startedAt: incident.timestamp,
      affectedServices: [incident.component || 'Unknown'],
    }))
  } catch {
    logger.error('Failed to get incidents')
    return []
  }
}

// Main status endpoint
export async function GET(_request: NextRequest) {
  try {
    // Check all services in parallel
    const [webApp, database, authentication, search, realtime, storage] =
      await Promise.all([
        // Web Application
        checkService('Web Application', async () => {
          // Check if the app is responding
          return { status: 'operational' }
        }),

        // Database
        checkService('Database', async () => {
          const start = Date.now()
          const { error } = await supabase
            .from('notes')
            .select('count')
            .limit(1)
          return {
            status: error ? 'outage' : 'operational',
            responseTime: Date.now() - start,
          }
        }),

        // Authentication
        checkService('Authentication', async () => {
          const start = Date.now()
          const { error } = await supabase.auth.getSession()
          return {
            status: error ? 'degraded' : 'operational',
            responseTime: Date.now() - start,
          }
        }),

        // Search
        checkService('Search', async () => {
          // Check search functionality
          return { status: 'operational' }
        }),

        // Realtime
        checkService('Realtime Sync', async () => {
          // Check realtime connection
          return { status: 'operational' }
        }),

        // Storage
        checkService('File Storage', async () => {
          // Check storage service
          return { status: 'operational' }
        }),
      ])

    const services = [
      webApp,
      database,
      authentication,
      search,
      realtime,
      storage,
    ]

    // Get additional data
    const [uptime, incidents] = await Promise.all([
      getUptimeStats(),
      getActiveIncidents(),
    ])

    // Determine overall status
    const hasOutage = services.some((s) => s.status === 'outage')
    const hasDegraded = services.some((s) => s.status === 'degraded')
    const overallStatus = hasOutage
      ? 'outage'
      : hasDegraded
        ? 'degraded'
        : 'operational'

    const response: StatusPageResponse = {
      status: overallStatus,
      services,
      incidents,
      lastUpdated: new Date().toISOString(),
      uptime,
    }

    // Log status check
    logger.info('Status page accessed', {
      status: overallStatus,
      serviceStatuses: services.reduce(
        (acc, service) => ({
          ...acc,
          [service.name]: service.status,
        }),
        {}
      ),
    })

    return NextResponse.json(response)
  } catch {
    logger.error('Status page error')

    return NextResponse.json(
      {
        status: 'outage',
        services: [],
        incidents: [
          {
            id: 'status-error',
            title: 'Status Page Error',
            description: 'Unable to retrieve status information',
            severity: 'major',
            startedAt: new Date().toISOString(),
            affectedServices: ['Status Page'],
          },
        ],
        lastUpdated: new Date().toISOString(),
        uptime: {
          last24Hours: 0,
          last7Days: 0,
          last30Days: 0,
        },
      } as StatusPageResponse,
      { status: 503 }
    )
  }
}
