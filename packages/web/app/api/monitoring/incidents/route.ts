import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { logger } from '@/lib/logging'

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient()
    const { searchParams } = new URL(request.url)

    const status = searchParams.get('status') // 'investigating' | 'identified' | 'monitoring' | 'resolved'
    const severity = searchParams.get('severity') // 'minor' | 'major' | 'critical'
    const limit = parseInt(searchParams.get('limit') || '20')
    const includeUpdates = searchParams.get('includeUpdates') === 'true'

    let query = supabase
      .from('incidents')
      .select(
        `
        *,
        ${
          includeUpdates
            ? `incident_updates (
          id,
          message,
          status,
          created_by,
          created_at
        )`
            : ''
        }
      `
      )
      .order('started_at', { ascending: false })
      .limit(limit)

    if (status) {
      query = query.eq('status', status)
    }

    if (severity) {
      query = query.eq('severity', severity)
    }

    const { data: incidents, error } = await query

    if (error) {
      logger.error('Failed to fetch incidents from monitoring API', { error })
      return NextResponse.json(
        { error: 'Failed to fetch incidents' },
        { status: 500 }
      )
    }

    // Calculate incident statistics
    const { data: stats } = await supabase
      .from('incidents')
      .select('status, severity')
      .gte(
        'started_at',
        new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()
      ) // Last 30 days

    const statistics = {
      total: incidents?.length || 0,
      active: stats?.filter((inc) => inc.status !== 'resolved').length || 0,
      resolved: stats?.filter((inc) => inc.status === 'resolved').length || 0,
      critical: stats?.filter((inc) => inc.severity === 'critical').length || 0,
      major: stats?.filter((inc) => inc.severity === 'major').length || 0,
      minor: stats?.filter((inc) => inc.severity === 'minor').length || 0,
    }

    return NextResponse.json({
      incidents: incidents || [],
      statistics,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    logger.error('Incidents API error', { error })
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    const body = await request.json()

    const {
      title,
      description,
      severity,
      status = 'investigating',
      affected_services = [],
      public_message,
      created_by,
    } = body

    if (!title || !severity) {
      return NextResponse.json(
        { error: 'Missing required fields: title and severity' },
        { status: 400 }
      )
    }

    if (!['minor', 'major', 'critical'].includes(severity)) {
      return NextResponse.json(
        { error: 'Invalid severity. Must be: minor, major, or critical' },
        { status: 400 }
      )
    }

    if (
      !['investigating', 'identified', 'monitoring', 'resolved'].includes(
        status
      )
    ) {
      return NextResponse.json(
        {
          error:
            'Invalid status. Must be: investigating, identified, monitoring, or resolved',
        },
        { status: 400 }
      )
    }

    // Create incident
    const { data: incident, error: createError } = await supabase
      .from('incidents')
      .insert({
        title,
        description,
        severity,
        status,
        affected_services,
        public_message,
        created_by,
        started_at: new Date().toISOString(),
      })
      .select()
      .single()

    if (createError) {
      logger.error('Failed to create incident in monitoring API', {
        error: createError,
      })
      return NextResponse.json(
        { error: 'Failed to create incident' },
        { status: 500 }
      )
    }

    // Create initial update
    const { error: updateError } = await supabase
      .from('incident_updates')
      .insert({
        incident_id: incident.id,
        message: description || `Incident created with status: ${status}`,
        status,
        created_by,
      })

    if (updateError) {
      logger.error('Failed to create initial incident update', {
        error: updateError,
      })
    }

    // Update affected service statuses
    if (affected_services.length > 0) {
      const serviceStatus = severity === 'critical' ? 'outage' : 'degraded'

      for (const serviceName of affected_services) {
        await supabase.from('service_status').upsert({
          service_name: serviceName,
          status: serviceStatus,
          description: `Affected by incident: ${title}`,
          last_checked: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        })
      }
    }

    return NextResponse.json(
      {
        incident,
        message: 'Incident created successfully',
        timestamp: new Date().toISOString(),
      },
      { status: 201 }
    )
  } catch (error) {
    logger.error('Create incident error', { error })
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const supabase = await createClient()
    const { searchParams } = new URL(request.url)
    const incidentId = searchParams.get('id')
    const body = await request.json()

    if (!incidentId) {
      return NextResponse.json(
        { error: 'Missing incident ID' },
        { status: 400 }
      )
    }

    const {
      title,
      description,
      status,
      severity,
      affected_services,
      public_message,
      resolved_by,
      update_message,
    } = body

    // Get current incident
    const { data: currentIncident, error: fetchError } = await supabase
      .from('incidents')
      .select('*')
      .eq('id', incidentId)
      .single()

    if (fetchError || !currentIncident) {
      return NextResponse.json({ error: 'Incident not found' }, { status: 404 })
    }

    // Prepare update data
    const updateData: Record<string, unknown> = {
      updated_at: new Date().toISOString(),
    }

    if (title !== undefined) updateData.title = title
    if (description !== undefined) updateData.description = description
    if (severity !== undefined) updateData.severity = severity
    if (affected_services !== undefined)
      updateData.affected_services = affected_services
    if (public_message !== undefined) updateData.public_message = public_message

    if (status !== undefined) {
      updateData.status = status
      if (status === 'resolved') {
        updateData.resolved_at = new Date().toISOString()
        updateData.resolved_by = resolved_by
      }
    }

    // Update incident
    const { data: updatedIncident, error: updateError } = await supabase
      .from('incidents')
      .update(updateData)
      .eq('id', incidentId)
      .select()
      .single()

    if (updateError) {
      logger.error('Failed to update incident in monitoring API', {
        error: updateError,
      })
      return NextResponse.json(
        { error: 'Failed to update incident' },
        { status: 500 }
      )
    }

    // Create incident update if message provided
    if (update_message) {
      const { error: updateInsertError } = await supabase
        .from('incident_updates')
        .insert({
          incident_id: incidentId,
          message: update_message,
          status: status || currentIncident.status,
          created_by: resolved_by,
        })

      if (updateInsertError) {
        logger.error('Failed to create incident update', {
          error: updateInsertError,
        })
      }
    }

    // Update service statuses if incident is resolved
    if (status === 'resolved' && currentIncident.affected_services) {
      for (const serviceName of currentIncident.affected_services) {
        await supabase.from('service_status').upsert({
          service_name: serviceName,
          status: 'operational',
          description: `Incident resolved: ${updatedIncident.title}`,
          last_checked: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        })
      }
    }

    return NextResponse.json({
      incident: updatedIncident,
      message: 'Incident updated successfully',
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    logger.error('Update incident error', { error })
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const supabase = await createClient()
    const { searchParams } = new URL(request.url)
    const incidentId = searchParams.get('id')

    if (!incidentId) {
      return NextResponse.json(
        { error: 'Missing incident ID' },
        { status: 400 }
      )
    }

    // Delete incident (cascade will handle updates)
    const { error } = await supabase
      .from('incidents')
      .delete()
      .eq('id', incidentId)

    if (error) {
      logger.error('Failed to delete incident from monitoring API', { error })
      return NextResponse.json(
        { error: 'Failed to delete incident' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      message: 'Incident deleted successfully',
      incidentId,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    logger.error('Delete incident error', { error })
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
