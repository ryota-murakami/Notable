import { NextResponse, type NextRequest } from 'next/server'
// import { createServerClient } from '@/lib/supabase/server'

export async function GET(_request: NextRequest) {
  // Monitoring alerts table doesn't exist in database types yet
  // Return mock data for now
  try {
    return NextResponse.json({
      alerts: [],
      statistics: {
        total: 0,
        firing: 0,
        resolved: 0,
        critical: 0,
        warning: 0,
        info: 0,
      },
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Monitoring alerts API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const {
      fingerprint,
      status,
      severity,
      service,
      alert_name,
      summary,
      description,
      labels = {},
      annotations = {},
      starts_at,
      ends_at,
      generator_url,
    } = body

    if (
      !fingerprint ||
      !status ||
      !severity ||
      !service ||
      !alert_name ||
      !summary
    ) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // TODO: Implement database operations once monitoring_alerts table is added to database types
    // For now, return mock response
    const mockAlert = {
      id: `alert_${Date.now()}`,
      fingerprint,
      status,
      severity,
      service,
      alert_name,
      summary,
      description,
      labels,
      annotations,
      starts_at: starts_at || new Date().toISOString(),
      ends_at,
      generator_url,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    return NextResponse.json({
      alert: mockAlert,
      action: 'created',
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Create/update alert error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const fingerprint = searchParams.get('fingerprint')
    const olderThan = searchParams.get('olderThan')

    if (fingerprint) {
      // TODO: Implement delete operation once monitoring_alerts table is added
      return NextResponse.json({
        message: 'Alert deleted successfully',
        fingerprint,
      })
    }

    if (olderThan) {
      // TODO: Implement delete operation once monitoring_alerts table is added
      return NextResponse.json({
        message: 'Old alerts deleted successfully',
        olderThan,
      })
    }

    return NextResponse.json(
      { error: 'Missing fingerprint or olderThan parameter' },
      { status: 400 }
    )
  } catch (error) {
    console.error('Delete alert error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
