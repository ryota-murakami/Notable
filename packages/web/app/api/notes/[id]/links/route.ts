import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import { getDevAuthBypassUser } from '@/utils/auth-helpers'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const noteId = params.id

    // Check auth
    const devBypassUser = await getDevAuthBypassUser()
    if (!devBypassUser) {
      const supabase = await createClient()
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }
    }

    // Mock response for testing
    if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
      return NextResponse.json({
        outgoingLinks: [
          {
            id: 'link-1',
            from_note_id: noteId,
            to_note_id: 'note-2',
            created_at: new Date().toISOString(),
            to_note: { id: 'note-2', title: 'Linked Note' },
          },
        ],
        backlinks: [
          {
            id: 'link-2',
            from_note_id: 'note-3',
            to_note_id: noteId,
            created_at: new Date().toISOString(),
            from_note: { id: 'note-3', title: 'Another Note' },
          },
        ],
        allLinks: [],
      })
    }

    const supabase = await createClient()

    // Fetch all links related to this note
    const { data, error } = await supabase
      .from('note_links')
      .select(
        `
        *,
        to_note:notes!to_note_id(id, title),
        from_note:notes!from_note_id(id, title)
      `
      )
      .or(`from_note_id.eq.${noteId},to_note_id.eq.${noteId}`)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching note links:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    // Separate outgoing and incoming links
    const outgoingLinks =
      data?.filter((link: any) => link.from_note_id === noteId) || []
    const backlinks =
      data?.filter((link: any) => link.to_note_id === noteId) || []

    return NextResponse.json({
      outgoingLinks,
      backlinks,
      allLinks: data || [],
    })
  } catch (error) {
    console.error('Error in GET /api/notes/[id]/links:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const fromNoteId = params.id
    const body = await request.json()
    const { toNoteId, toNoteTitle } = body

    // Check auth
    const devBypassUser = await getDevAuthBypassUser()
    if (!devBypassUser) {
      const supabase = await createClient()
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }
    }

    // Mock response for testing
    if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
      return NextResponse.json(
        {
          id: `link-${Date.now()}`,
          from_note_id: fromNoteId,
          to_note_id: toNoteId,
          created_at: new Date().toISOString(),
        },
        { status: 201 }
      )
    }

    const supabase = await createClient()

    // Create the note link
    const { data, error } = await supabase
      .from('note_links')
      .insert({
        from_note_id: fromNoteId,
        to_note_id: toNoteId,
      })
      .select()
      .single()

    if (error) {
      console.error('Error creating note link:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data, { status: 201 })
  } catch (error) {
    console.error('Error in POST /api/notes/[id]/links:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const linkId = params.id

    // Check auth
    const devBypassUser = await getDevAuthBypassUser()
    if (!devBypassUser) {
      const supabase = await createClient()
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }
    }

    // Mock response for testing
    if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
      return NextResponse.json({ success: true })
    }

    const supabase = await createClient()

    // Delete the note link
    const { error } = await supabase
      .from('note_links')
      .delete()
      .eq('id', linkId)

    if (error) {
      console.error('Error deleting note link:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error in DELETE /api/notes/[id]/links:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
