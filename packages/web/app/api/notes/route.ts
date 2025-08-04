import { createClient } from '@/utils/supabase/server'
import { type NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // Return mock data when API mocking is enabled
    if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
      const mockNotes = [
        {
          id: `mock-note-${Date.now()}`,
          title: 'Test Note 1',
          content: {
            type: 'doc',
            content: [
              {
                type: 'paragraph',
                content: [
                  { type: 'text', text: 'This is a test note content' },
                ],
              },
            ],
          },
          user_id: 'mock-user-id',
          folder_id: null,
          is_public: false,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          deleted_at: null,
        },
        {
          id: `mock-note-${Date.now() + 1}`,
          title: 'Test Note 2',
          content: {
            type: 'doc',
            content: [
              {
                type: 'paragraph',
                content: [{ type: 'text', text: 'This is another test note' }],
              },
            ],
          },
          user_id: 'mock-user-id',
          folder_id: null,
          is_public: false,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          deleted_at: null,
        },
      ]

      return NextResponse.json({ notes: mockNotes, total: mockNotes.length })
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

    // Get query parameters
    const { searchParams } = new URL(request.url)
    const limit = searchParams.get('limit')
      ? parseInt(searchParams.get('limit')!)
      : 50
    const offset = searchParams.get('offset')
      ? parseInt(searchParams.get('offset')!)
      : 0
    const search = searchParams.get('search')
    const folder_id = searchParams.get('folder_id')

    let query = supabase
      .from('notes')
      .select('*')
      .eq('user_id', user.id)
      .order('updated_at', { ascending: false })
      .range(offset, offset + limit - 1)

    // Apply filters
    if (search) {
      query = query.or(`title.ilike.%${search}%,content.ilike.%${search}%`)
    }

    if (folder_id === 'null') {
      query = query.is('folder_id', null)
    } else if (folder_id) {
      query = query.eq('folder_id', folder_id)
    }

    const { data: notes, error } = await query

    if (error) {
      console.error('Error fetching notes:', error)
      return NextResponse.json(
        { error: 'Failed to fetch notes' },
        { status: 500 }
      )
    }

    return NextResponse.json({ notes, total: notes?.length || 0 })
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    // Return mock data when API mocking is enabled
    if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
      const body = await request.json()
      const { title, content, folder_id, is_hidden } = body

      const mockNote = {
        id: `mock-note-${Date.now()}`,
        title: title || 'Untitled',
        content: content || {
          type: 'doc',
          content: [
            {
              type: 'paragraph',
              content: [{ type: 'text', text: 'New note content' }],
            },
          ],
        },
        user_id: 'mock-user-id',
        folder_id: folder_id || null,
        is_hidden: is_hidden || false,
        is_public: false,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        deleted_at: null,
      }

      return NextResponse.json({ note: mockNote }, { status: 201 })
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

    // Validate required fields
    if (!title && !content) {
      return NextResponse.json(
        { error: 'Title or content is required' },
        { status: 400 }
      )
    }

    // Create new note
    const { data, error } = await supabase
      .from('notes')
      .insert({
        title: title || 'Untitled',
        content: content || '',
        user_id: user.id,
        folder_id: folder_id || null,
        is_hidden: is_hidden || false,
      })
      .select()

    if (error) {
      console.error('Error creating note:', error)
      return NextResponse.json(
        { error: 'Failed to create note' },
        { status: 500 }
      )
    }

    const note = data?.[0]
    if (!note) {
      return NextResponse.json(
        { error: 'Failed to create note' },
        { status: 500 }
      )
    }

    return NextResponse.json({ note }, { status: 201 })
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
