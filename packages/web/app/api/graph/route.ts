import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import { getDevAuthBypassUser } from '@/utils/auth-helpers'

export async function GET(_request: NextRequest) {
  // Check for dev auth bypass first
  const devBypassUser = await getDevAuthBypassUser()

  // If dev auth bypass is enabled, return mock data for E2E tests
  if (devBypassUser) {
    console.info('Dev auth bypass detected, returning mock graph data')
    return NextResponse.json({
      success: true,
      data: {
        nodes: [
          {
            id: 'note-1',
            label: 'Sample Note 1',
            title: 'Sample Note 1',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            connections: 2,
          },
          {
            id: 'note-2',
            label: 'Sample Note 2',
            title: 'Sample Note 2',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            connections: 1,
          },
          {
            id: 'note-3',
            label: 'Sample Note 3',
            title: 'Sample Note 3',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            connections: 1,
          },
        ],
        edges: [
          {
            from: 'note-1',
            to: 'note-2',
            source: 'note-1',
            target: 'note-2',
            label: 'connected to',
            title: 'Link: connected to',
          },
          {
            from: 'note-1',
            to: 'note-3',
            source: 'note-1',
            target: 'note-3',
            label: 'references',
            title: 'Link: references',
          },
        ],
        stats: {
          totalNotes: 3,
          totalLinks: 2,
          avgConnections: 1.33,
        },
      },
    })
  }

  const supabase = await createClient()

  try {
    let user: any = devBypassUser

    if (!user) {
      // Get the current user normally
      const {
        data: { user: authUser },
        error: userError,
      } = await supabase.auth.getUser()

      if (userError || !authUser) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }
      user = authUser
    }

    // Ensure user is not null at this point
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get all notes for the user
    console.log('Fetching notes for user:', user.id)
    const { data: notes, error: notesError } = await supabase
      .from('notes')
      .select('id, title, created_at, updated_at')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })

    if (notesError) {
      console.error('Error fetching notes:', notesError)
      // If no notes table or no notes, return empty graph data
      if (
        notesError.code === 'PGRST116' ||
        notesError.message.includes('does not exist')
      ) {
        console.warn('notes table does not exist, returning empty graph')
        return NextResponse.json({
          success: true,
          data: {
            nodes: [],
            edges: [],
            stats: {
              totalNotes: 0,
              totalLinks: 0,
              avgConnections: 0,
            },
          },
        })
      }
      return NextResponse.json(
        { error: 'Failed to fetch notes' },
        { status: 500 }
      )
    }

    console.log('Found notes:', notes?.length || 0)

    // Get all note links for the user (handle missing table gracefully)
    let links: any[] = []
    const { data: linksData, error: linksError } = await supabase
      .from('note_links')
      .select('from_note_id, to_note_id, anchor_text')
      .eq('user_id', user.id)

    if (linksError) {
      // If table doesn't exist, just use empty links array
      if (
        linksError.code === 'PGRST116' ||
        linksError.message.includes('does not exist')
      ) {
        console.warn('note_links table does not exist, using empty links')
        links = []
      } else {
        console.error('Error fetching links:', linksError)
        return NextResponse.json(
          { error: 'Failed to fetch links' },
          { status: 500 }
        )
      }
    } else {
      links = linksData || []
    }

    // Transform data for graph visualization
    const nodes = notes.map((note) => ({
      id: note.id,
      label: note.title || 'Untitled',
      title: note.title || 'Untitled',
      created_at: note.created_at,
      updated_at: note.updated_at,
      // Calculate connection count for node sizing
      connections: links.filter(
        (link) => link.from_note_id === note.id || link.to_note_id === note.id
      ).length,
    }))

    const edges = links.map((link) => ({
      from: link.from_note_id,
      to: link.to_note_id,
      label: link.anchor_text,
      title: `Link: ${link.anchor_text}`,
    }))

    // Filter out edges that reference non-existent notes
    const validNodeIds = new Set(nodes.map((node) => node.id))
    const validEdges = edges.filter(
      (edge) => validNodeIds.has(edge.from) && validNodeIds.has(edge.to)
    )

    return NextResponse.json({
      success: true,
      data: {
        nodes,
        edges: validEdges,
        stats: {
          totalNotes: nodes.length,
          totalLinks: validEdges.length,
          avgConnections:
            nodes.length > 0 ? (validEdges.length * 2) / nodes.length : 0,
        },
      },
    })
  } catch (error) {
    console.error('Graph API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
