import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/types/database'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Initialize Supabase client with service role
const supabase = createClient<Database>(supabaseUrl, supabaseServiceKey)

type IncidentInsert = Database['public']['Tables']['incidents']['Insert']
type IncidentUpdate = Database['public']['Tables']['incidents']['Update']

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const severity = searchParams.get('severity')
    const limit = parseInt(searchParams.get('limit') || '50')

    // Build query
    let query = supabase
      .from('incidents')
      .select('*')
      .order('started_at', { ascending: false })
      .limit(limit)

    // Apply filters
    if (
      status &&
      ['investigating', 'identified', 'monitoring', 'resolved'].includes(status)
    ) {
      query = query.eq(
        'status',
        status as 'investigating' | 'identified' | 'monitoring' | 'resolved'
      )
    }
    if (severity && ['minor', 'major', 'critical'].includes(severity)) {
      query = query.eq('severity', severity as 'minor' | 'major' | 'critical')
    }

    const { data: incidents, error } = await query

    if (error) {
      console.error('Fetch incidents error:', error)
      return NextResponse.json(
        { error: 'Failed to fetch incidents' },
        { status: 500 }
      )
    }

    // Calculate statistics
    const { data: allIncidents, error: statsError } = await supabase
      .from('incidents')
      .select('status, severity')

    if (statsError) {
      console.error('Fetch incidents statistics error:', statsError)
      return NextResponse.json(
        { error: 'Failed to fetch statistics' },
        { status: 500 }
      )
    }

    const statistics = {
      total: allIncidents?.length || 0,
      active: allIncidents?.filter((i) => i.status !== 'resolved').length || 0,
      resolved:
        allIncidents?.filter((i) => i.status === 'resolved').length || 0,
      critical:
        allIncidents?.filter((i) => i.severity === 'critical').length || 0,
      major: allIncidents?.filter((i) => i.severity === 'major').length || 0,
      minor: allIncidents?.filter((i) => i.severity === 'minor').length || 0,
    }

    return NextResponse.json({
      incidents: incidents || [],
      statistics,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Get incidents error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      title,
      description,
      severity,
      affected_services = [],
      public_message,
      created_by,
    } = body

    if (!title || !severity) {
      return NextResponse.json(
        { error: 'Missing required fields: title and severity are required' },
        { status: 400 }
      )
    }

    if (!['minor', 'major', 'critical'].includes(severity)) {
      return NextResponse.json(
        { error: 'Invalid severity. Must be minor, major, or critical' },
        { status: 400 }
      )
    }

    const incidentData: IncidentInsert = {
      title,
      description,
      severity,
      status: 'investigating',
      affected_services,
      public_message,
      created_by,
      started_at: new Date().toISOString(),
    }

    const { data: incident, error } = await supabase
      .from('incidents')
      .insert(incidentData)
      .select()
      .single()

    if (error) {
      console.error('Create incident error:', error)
      return NextResponse.json(
        { error: 'Failed to create incident' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      incident,
      message: 'Incident created successfully',
    })
  } catch (error) {
    console.error('Create incident error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json(
        { error: 'Missing incident ID' },
        { status: 400 }
      )
    }

    const body = await request.json()
    const updateData: IncidentUpdate = {
      ...body,
      updated_at: new Date().toISOString(),
    }

    // If status is being changed to resolved, set resolved_at
    if (body.status === 'resolved') {
      updateData.resolved_at = new Date().toISOString()
      updateData.resolved_by = body.resolved_by
    }

    const { data: incident, error } = await supabase
      .from('incidents')
      .update(updateData)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Update incident error:', error)
      return NextResponse.json(
        { error: 'Failed to update incident' },
        { status: 500 }
      )
    }

    if (!incident) {
      return NextResponse.json({ error: 'Incident not found' }, { status: 404 })
    }

    return NextResponse.json({
      incident,
      message: 'Incident updated successfully',
    })
  } catch (error) {
    console.error('Update incident error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json(
        { error: 'Missing incident ID' },
        { status: 400 }
      )
    }

    // Instead of deleting, we mark the incident as resolved
    const { data: incident, error } = await supabase
      .from('incidents')
      .update({
        status: 'resolved',
        resolved_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Resolve incident error:', error)
      return NextResponse.json(
        { error: 'Failed to resolve incident' },
        { status: 500 }
      )
    }

    if (!incident) {
      return NextResponse.json({ error: 'Incident not found' }, { status: 404 })
    }

    return NextResponse.json({
      incident,
      message: 'Incident resolved successfully',
    })
  } catch (error) {
    console.error('Resolve incident error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
