import { NextRequest, NextResponse } from 'next/server'
// import { createServerClient } from '@/lib/supabase/server'

// interface IncidentStatus {
//   status: 'investigating' | 'identified' | 'monitoring' | 'resolved'
//   severity: 'minor' | 'major' | 'critical'
// }

// interface IncidentRecord extends IncidentStatus {
//   id: string
//   title: string
//   description?: string
//   affected_services?: string[]
//   public_message?: string
//   created_by?: string
//   resolved_by?: string
//   started_at: string
//   resolved_at?: string
//   updated_at: string
// }

export async function GET(_request: NextRequest) {
  // TODO: Implement real GET /api/monitoring/incidents handler
  // Incidents table doesn't exist in database types yet
  // Return mock data for now
  return NextResponse.json({
    incidents: [],
    statistics: {
      total: 0,
      active: 0,
      resolved: 0,
      critical: 0,
      major: 0,
      minor: 0,
    },
    timestamp: new Date().toISOString(),
  })
}

// TODO: The full implementation is commented out until the incidents table is added to database types
/*
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      title,
      description,
      severity,
      affected_services = [],
      public_message,
    } = body

    if (!title || !severity) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // TODO: Implement database operations once incidents table is added
    const mockIncident: IncidentRecord = {
      id: `incident_${Date.now()}`,
      title,
      description,
      severity,
      status: 'investigating',
      affected_services,
      public_message,
      started_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    return NextResponse.json({
      incident: mockIncident,
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

    // TODO: Implement database operations once incidents table is added
    const mockUpdatedIncident: IncidentRecord = {
      id,
      title: body.title || 'Mock Incident',
      severity: body.severity || 'minor',
      status: body.status || 'monitoring',
      updated_at: new Date().toISOString(),
      started_at: new Date().toISOString(),
    }

    return NextResponse.json({
      incident: mockUpdatedIncident,
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

    // TODO: Implement database operations once incidents table is added
    return NextResponse.json({
      message: 'Incident resolved successfully',
      id,
    })
  } catch (error) {
    console.error('Resolve incident error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
*/
