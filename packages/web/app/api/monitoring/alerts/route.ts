import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'

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
    const supabase = await createServerClient()
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
        console.error('Failed to update alert:', error)
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
        console.error('Failed to create alert:', error)
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
    console.error('Create/update alert error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const supabase = await createServerClient()
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
        console.error('Failed to delete alert:', error)
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
        console.error('Failed to delete old alerts:', error)
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
