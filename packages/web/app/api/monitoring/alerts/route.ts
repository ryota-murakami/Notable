import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/types/database'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Initialize Supabase client with service role
const supabase = createClient<Database>(supabaseUrl, supabaseServiceKey)

type AlertInsert = Database['public']['Tables']['monitoring_alerts']['Insert']

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status') as 'firing' | 'resolved' | null
    const severity = searchParams.get('severity')
    const service = searchParams.get('service')
    const limit = parseInt(searchParams.get('limit') || '50')

    // Build query
    let query = supabase
      .from('monitoring_alerts')
      .select('*')
      .order('starts_at', { ascending: false })
      .limit(limit)

    // Apply filters
    if (status) {
      query = query.eq('status', status)
    }
    if (severity) {
      query = query.eq('severity', severity)
    }
    if (service) {
      query = query.eq('service', service)
    }

    const { data: alerts, error } = await query

    if (error) {
      console.error('Fetch alerts error:', error)
      return NextResponse.json(
        { error: 'Failed to fetch alerts' },
        { status: 500 }
      )
    }

    // Calculate statistics
    const { data: allAlerts, error: statsError } = await supabase
      .from('monitoring_alerts')
      .select('status, severity')

    if (statsError) {
      console.error('Fetch alerts statistics error:', statsError)
      return NextResponse.json(
        { error: 'Failed to fetch statistics' },
        { status: 500 }
      )
    }

    const statistics = {
      total: allAlerts?.length || 0,
      firing: allAlerts?.filter((a) => a.status === 'firing').length || 0,
      resolved: allAlerts?.filter((a) => a.status === 'resolved').length || 0,
      critical: allAlerts?.filter((a) => a.severity === 'critical').length || 0,
      warning: allAlerts?.filter((a) => a.severity === 'warning').length || 0,
      info: allAlerts?.filter((a) => a.severity === 'info').length || 0,
    }

    return NextResponse.json({
      alerts: alerts || [],
      statistics,
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
        {
          error:
            'Missing required fields: fingerprint, status, severity, service, alert_name, and summary are required',
        },
        { status: 400 }
      )
    }

    if (!['firing', 'resolved'].includes(status)) {
      return NextResponse.json(
        { error: 'Invalid status. Must be firing or resolved' },
        { status: 400 }
      )
    }

    // Prepare alert data
    const alertData: AlertInsert = {
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
    }

    // Use upsert to handle both create and update scenarios
    const { data: alert, error } = await supabase
      .from('monitoring_alerts')
      .upsert(alertData, {
        onConflict: 'fingerprint',
        ignoreDuplicates: false,
      })
      .select()
      .single()

    if (error) {
      console.error('Create/update alert error:', error)
      return NextResponse.json(
        { error: 'Failed to create/update alert' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      alert,
      action: 'upserted',
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
      // Delete specific alert by fingerprint
      const { error } = await supabase
        .from('monitoring_alerts')
        .delete()
        .eq('fingerprint', fingerprint)

      if (error) {
        console.error('Delete alert error:', error)
        return NextResponse.json(
          { error: 'Failed to delete alert' },
          { status: 500 }
        )
      }

      return NextResponse.json({
        message: 'Alert deleted successfully',
        fingerprint,
      })
    }

    if (olderThan) {
      // Delete alerts older than specified time
      const olderThanDate = new Date(olderThan).toISOString()

      const { error } = await supabase
        .from('monitoring_alerts')
        .delete()
        .lt('starts_at', olderThanDate)

      if (error) {
        console.error('Delete old alerts error:', error)
        return NextResponse.json(
          { error: 'Failed to delete old alerts' },
          { status: 500 }
        )
      }

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
