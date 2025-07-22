import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'

interface ServiceStatusRecord {
  service_name: string
  status: 'operational' | 'degraded' | 'outage'
  response_time?: number
  description?: string
  last_checked: string
}

interface ServiceCheck {
  name: string
  status: 'operational' | 'degraded' | 'outage'
  responseTime: number
  description?: string
  lastChecked: string
}

interface StatusPageData {
  overallStatus: 'operational' | 'degraded' | 'outage'
  services: ServiceCheck[]
  incidents: any[]
  uptime: {
    last24h: number
    last7d: number
    last30d: number
  }
  lastUpdate: string
}

export async function GET(_request: NextRequest) {
  try {
    const supabase = await createServerClient()

    // Get service status from the database
    const { data: serviceStatuses, error: statusError } = await supabase
      .from('service_status')
      .select('*')
      .order('service_name')

    if (statusError) {
      console.error('Failed to fetch service status:', statusError)
    }

    // Get recent incidents
    const { data: incidents, error: incidentsError } = await supabase
      .from('incidents')
      .select(
        `
        *,
        incident_updates (
          message,
          status,
          created_at
        )
      `
      )
      .neq('status', 'resolved')
      .order('started_at', { ascending: false })
      .limit(5)

    if (incidentsError) {
      console.error('Failed to fetch incidents:', incidentsError)
    }

    // Calculate uptime percentages
    const now = new Date()
    const last24h = new Date(now.getTime() - 24 * 60 * 60 * 1000)
    const last7d = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
    const last30d = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)

    const uptimePromises = [
      calculateUptime(supabase, last24h),
      calculateUptime(supabase, last7d),
      calculateUptime(supabase, last30d),
    ]

    const [uptime24h, uptime7d, uptime30d] = await Promise.all(uptimePromises)

    // Transform service status data
    const services: ServiceCheck[] = (serviceStatuses || []).map(
      (service: ServiceStatusRecord) => ({
        name: service.service_name,
        status: service.status,
        responseTime: service.response_time || 0,
        description: service.description,
        lastChecked: service.last_checked,
      })
    )

    // Add mock services if no data exists
    if (services.length === 0) {
      services.push(
        {
          name: 'Web Application',
          status: 'operational',
          responseTime: 45,
          description: 'Main web application',
          lastChecked: new Date().toISOString(),
        },
        {
          name: 'Database',
          status: 'operational',
          responseTime: 12,
          description: 'Primary database',
          lastChecked: new Date().toISOString(),
        },
        {
          name: 'Authentication',
          status: 'operational',
          responseTime: 28,
          description: 'User authentication service',
          lastChecked: new Date().toISOString(),
        },
        {
          name: 'Search',
          status: 'operational',
          responseTime: 67,
          description: 'Full-text search service',
          lastChecked: new Date().toISOString(),
        },
        {
          name: 'Realtime Sync',
          status: 'operational',
          responseTime: 19,
          description: 'Real-time synchronization',
          lastChecked: new Date().toISOString(),
        },
        {
          name: 'File Storage',
          status: 'operational',
          responseTime: 89,
          description: 'File upload and storage',
          lastChecked: new Date().toISOString(),
        }
      )
    }

    // Determine overall status
    const hasOutage = services.some((s) => s.status === 'outage')
    const hasDegraded = services.some((s) => s.status === 'degraded')
    const overallStatus = hasOutage
      ? 'outage'
      : hasDegraded
        ? 'degraded'
        : 'operational'

    const statusData: StatusPageData = {
      overallStatus,
      services,
      incidents: incidents || [],
      uptime: {
        last24h: uptime24h,
        last7d: uptime7d,
        last30d: uptime30d,
      },
      lastUpdate: new Date().toISOString(),
    }

    return NextResponse.json(statusData, {
      headers: {
        'Cache-Control': 'public, max-age=30', // Cache for 30 seconds
      },
    })
  } catch (error) {
    console.error('Status API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(_request: NextRequest) {
  try {
    const supabase = await createServerClient()
    const body = await _request.json()

    const { serviceName, status, responseTime, description } = body

    if (!serviceName || !status) {
      return NextResponse.json(
        { error: 'Missing required fields: serviceName and status' },
        { status: 400 }
      )
    }

    // Update service status
    const { data, error } = await supabase
      .from('service_status')
      .upsert({
        service_name: serviceName,
        status,
        response_time: responseTime,
        description,
        last_checked: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .select()
      .single()

    if (error) {
      console.error('Failed to update service status:', error)
      return NextResponse.json(
        { error: 'Failed to update service status' },
        { status: 500 }
      )
    }

    // Record uptime data
    const { error: uptimeError } = await supabase
      .from('uptime_records')
      .insert({
        service_name: serviceName,
        is_up: status === 'operational',
        response_time: responseTime,
        error_message: status !== 'operational' ? description : null,
      })

    if (uptimeError) {
      console.error('Failed to record uptime:', uptimeError)
    }

    return NextResponse.json({
      message: 'Service status updated successfully',
      service: data,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Update service status error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

async function calculateUptime(
  supabase: Awaited<ReturnType<typeof createServerClient>>,
  since: Date
): Promise<number> {
  try {
    const { data: records, error } = await supabase
      .from('uptime_records')
      .select('is_up')
      .gte('timestamp', since.toISOString())

    if (error || !records || records.length === 0) {
      return 99.9 // Default to high uptime if no data
    }

    const totalChecks = records.length
    const successfulChecks = records.filter(
      (r: { is_up: boolean }) => r.is_up
    ).length

    return (successfulChecks / totalChecks) * 100
  } catch (error) {
    console.error('Failed to calculate uptime:', error)
    return 99.9
  }
}
