import { createClient } from '@/utils/supabase/server'
import { type NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Return mock data when API mocking is enabled
    if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
      const mockNote = {
        id: params.id,
        title: 'Mock Note',
        content: {
          type: 'doc',
          content: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'This is a mock note content for testing.',
                },
              ],
            },
          ],
        },
        user_id: 'mock-user-id',
        folder_id: null,
        is_public: false,
        is_hidden: false,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        deleted_at: null,
      }

      return NextResponse.json({ note: mockNote })
    }

    const supabase = await createClient()

    // Get the current user
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { data: note, error } = await supabase
      .from('notes')
      .select('*')
      .eq('id', params.id)
      .eq('user_id', user.id)
      .single()

    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json({ error: 'Note not found' }, { status: 404 })
      }
      console.error('Error fetching note:', error)
      return NextResponse.json(
        { error: 'Failed to fetch note' },
        { status: 500 }
      )
    }

    return NextResponse.json({ note })
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Return mock data when API mocking is enabled
    if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
      const body = await request.json()
      const { title, content, folder_id, is_hidden } = body

      const mockNote = {
        id: params.id,
        title: title || 'Updated Mock Note',
        content: content || {
          type: 'doc',
          content: [
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'Updated mock note content.' }],
            },
          ],
        },
        user_id: 'mock-user-id',
        folder_id: folder_id || null,
        is_public: false,
        is_hidden: is_hidden || false,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        deleted_at: null,
      }

      return NextResponse.json({ note: mockNote })
    }

    const supabase = await createClient()

    // Get the current user
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Parse request body
    const body = await request.json()
    const { title, content, folder_id, is_hidden } = body

    // Validate that at least one field is being updated
    if (
      title === undefined &&
      content === undefined &&
      folder_id === undefined &&
      is_hidden === undefined
    ) {
      return NextResponse.json(
        { error: 'At least one field must be provided for update' },
        { status: 400 }
      )
    }

    // Build update object with only provided fields
    const updateData: any = {}
    if (title !== undefined) updateData.title = title
    if (content !== undefined) updateData.content = content
    if (folder_id !== undefined) updateData.folder_id = folder_id
    if (is_hidden !== undefined) updateData.is_hidden = is_hidden

    // Update the note
    const { data: note, error } = await supabase
      .from('notes')
      .update(updateData)
      .eq('id', params.id)
      .eq('user_id', user.id)
      .select()
      .single()

    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json({ error: 'Note not found' }, { status: 404 })
      }
      console.error('Error updating note:', error)
      return NextResponse.json(
        { error: 'Failed to update note' },
        { status: 500 }
      )
    }

    return NextResponse.json({ note })
  } catch (error) {
    console.error('Unexpected error:', error)
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
    // Return mock data when API mocking is enabled
    if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
      return NextResponse.json({ message: 'Note deleted successfully' })
    }

    const supabase = await createClient()

    // Get the current user
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Delete the note
    const { error } = await supabase
      .from('notes')
      .delete()
      .eq('id', params.id)
      .eq('user_id', user.id)

    if (error) {
      console.error('Error deleting note:', error)
      return NextResponse.json(
        { error: 'Failed to delete note' },
        { status: 500 }
      )
    }

    return NextResponse.json({ message: 'Note deleted successfully' })
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
