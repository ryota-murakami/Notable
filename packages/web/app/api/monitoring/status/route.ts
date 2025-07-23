import { NextResponse, type NextRequest } from 'next/server'

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
  incidents: unknown[]
  uptime: {
    last24h: number
    last7d: number
    last30d: number
  }
  lastUpdate: string
}

export async function GET(_request: NextRequest) {
  try {
    // TODO: Implement real status checks once service_status table is added
    // Return mock data for now
    const mockStatus: StatusPageData = {
      overallStatus: 'operational',
      services: [
        {
          name: 'API',
          status: 'operational',
          responseTime: 150,
          description: 'All systems operational',
          lastChecked: new Date().toISOString(),
        },
        {
          name: 'Database',
          status: 'operational',
          responseTime: 25,
          description: 'Database is healthy',
          lastChecked: new Date().toISOString(),
        },
        {
          name: 'Authentication',
          status: 'operational',
          responseTime: 100,
          description: 'Auth service is working normally',
          lastChecked: new Date().toISOString(),
        },
      ],
      incidents: [],
      uptime: {
        last24h: 99.99,
        last7d: 99.95,
        last30d: 99.9,
      },
      lastUpdate: new Date().toISOString(),
    }

    return NextResponse.json(mockStatus)
  } catch (error) {
    console.error('Status check error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const { service, status } = await request.json()

    if (!service || !status) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // TODO: Store service status once service_status table is added
    return NextResponse.json({
      message: 'Service status updated',
      service,
      status,
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
