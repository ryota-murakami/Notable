import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { logger } from '@/lib/logging'

export async function GET(request: NextRequest) {
  try {
    const supabase = createClient()
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status') // 'firing' | 'resolved' | null (all)
    const severity = searchParams.get('severity') // 'critical' | 'warning' | 'info' | null (all)
    const service = searchParams.get('service')
    const limit = parseInt(searchParams.get('limit') || '50')

    let query = supabase
      .from('monitoring_alerts')
      .select('*')
      .order('starts_at', { ascending: false })
      .limit(limit)

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
      logger.error('Failed to fetch monitoring alerts', { error })
      return NextResponse.json(
        { error: 'Failed to fetch alerts' },
        { status: 500 }
      )
    }

    // Get alert statistics
    const { data: stats } = await supabase
      .from('monitoring_alerts')
      .select('status, severity')
      .gte(
        'starts_at',
        new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
      ) // Last 24 hours

    const statistics = {
      total: alerts?.length || 0,
      firing: stats?.filter((alert) => alert.status === 'firing').length || 0,
      resolved:
        stats?.filter((alert) => alert.status === 'resolved').length || 0,
      critical:
        stats?.filter((alert) => alert.severity === 'critical').length || 0,
      warning:
        stats?.filter((alert) => alert.severity === 'warning').length || 0,
      info: stats?.filter((alert) => alert.severity === 'info').length || 0,
    }

    return NextResponse.json({
      alerts: alerts || [],
      statistics,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    logger.error('Monitoring alerts API error', { error })
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = createClient()
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

    // Check if alert already exists
    const { data: existingAlert } = await supabase
      .from('monitoring_alerts')
      .select('id, status')
      .eq('fingerprint', fingerprint)
      .single()

    let result

    if (existingAlert) {
      // Update existing alert
      const { data, error } = await supabase
        .from('monitoring_alerts')
        .update({
          status,
          severity,
          service,
          alert_name,
          summary,
          description,
          labels,
          annotations,
          ends_at,
          generator_url,
          updated_at: new Date().toISOString(),
        })
        .eq('fingerprint', fingerprint)
        .select()
        .single()

      if (error) {
        logger.error('Failed to update monitoring alert', { error })
        return NextResponse.json(
          { error: 'Failed to update alert' },
          { status: 500 }
        )
      }

      result = data
    } else {
      // Create new alert
      const { data, error } = await supabase
        .from('monitoring_alerts')
        .insert({
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
        })
        .select()
        .single()

      if (error) {
        logger.error('Failed to create monitoring alert', { error })
        return NextResponse.json(
          { error: 'Failed to create alert' },
          { status: 500 }
        )
      }

      result = data
    }

    return NextResponse.json({
      alert: result,
      action: existingAlert ? 'updated' : 'created',
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    logger.error('Create/update alert error', { error })
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const supabase = createClient()
    const { searchParams } = new URL(request.url)
    const fingerprint = searchParams.get('fingerprint')
    const olderThan = searchParams.get('olderThan') // ISO date string

    if (fingerprint) {
      // Delete specific alert
      const { error } = await supabase
        .from('monitoring_alerts')
        .delete()
        .eq('fingerprint', fingerprint)

      if (error) {
        logger.error('Failed to delete monitoring alert', { error })
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
      // Delete alerts older than specified date
      const { error } = await supabase
        .from('monitoring_alerts')
        .delete()
        .lt('starts_at', olderThan)

      if (error) {
        logger.error('Failed to delete old monitoring alerts', { error })
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
    logger.error('Delete alert error', { error })
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
