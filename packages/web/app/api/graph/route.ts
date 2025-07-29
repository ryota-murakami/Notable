import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import { getDevAuthBypassUser } from '@/utils/auth-helpers'

export async function GET(_request: NextRequest) {
  const supabase = await createClient()

  try {
    // Check for dev auth bypass first
    const devBypassUser = await getDevAuthBypassUser()
    let user = devBypassUser

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

    // Get all notes for the user
    const { data: notes, error: notesError } = await supabase
      .from('notes')
      .select('id, title, created_at, updated_at')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })

    if (notesError) {
      console.error('Error fetching notes:', notesError)
      return NextResponse.json(
        { error: 'Failed to fetch notes' },
        { status: 500 }
      )
    }

    // Get all note links for the user
    const { data: links, error: linksError } = await supabase
      .from('note_links')
      .select('from_note_id, to_note_id, anchor_text')
      .eq('user_id', user.id)

    if (linksError) {
      console.error('Error fetching links:', linksError)
      return NextResponse.json(
        { error: 'Failed to fetch links' },
        { status: 500 }
      )
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
