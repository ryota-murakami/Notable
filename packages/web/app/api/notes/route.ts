import { createClient } from '@/utils/supabase/server'
import { type NextRequest, NextResponse } from 'next/server'

// In-memory store for mock notes during testing that persists across module reloads
// Using global to persist data across Next.js dev server hot reloads
declare global {
  var mockNotesStore: any[] | undefined;
}

// Initialize the store if it doesn't exist
if (!global.mockNotesStore) {
  global.mockNotesStore = []
}

const mockNotesStore = global.mockNotesStore

export async function GET(request: NextRequest) {
  try {
    // Debug environment variables
    console.info('DEBUG: Environment variables in notes GET:', {
      NODE_ENV: process.env.NODE_ENV,
      NEXT_PUBLIC_API_MOCKING: process.env.NEXT_PUBLIC_API_MOCKING,
      API_MOCKING: process.env.API_MOCKING,
      CI: process.env.CI,
      availableKeys: Object.keys(process.env).filter(key => key.includes('MOCK') || key.includes('API')).slice(0, 10)
    })

    // Check for API mocking FIRST, before any imports or Supabase calls
    if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
      // Check for reset flag in query params
      const { searchParams } = new URL(request.url)
      const resetStore = searchParams.get('reset') === 'true'
      
      if (resetStore) {
        console.info('Resetting mock notes store')
        mockNotesStore.length = 0 // Clear the array
        return NextResponse.json({ notes: [], total: 0 })
      }
      
      console.info('API mocking enabled - returning notes from in-memory store:', mockNotesStore.length, 'notes')
      
      // Return notes from in-memory store (initially empty, populated by POST)
      return NextResponse.json({ notes: mockNotesStore, total: mockNotesStore.length })
    }

    // Only initialize Supabase if not in mocking mode
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
    const limitParam = searchParams.get('limit')
    const offsetParam = searchParams.get('offset')
    const limit = limitParam ? parseInt(limitParam) : 50
    const offset = offsetParam ? parseInt(offsetParam) : 0
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
    // Check for API mocking FIRST, before any imports or Supabase calls
    if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
      console.info('API mocking enabled - returning mock note creation')
      const body = await request.json()
      const { title, content, folder_id, is_hidden } = body

      const mockNote = {
        id: `mock-note-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        title: title || 'Untitled',
        content: content || {
          type: 'doc',
          content: [
            {
              type: 'paragraph',
              content: [{ type: 'text', text: '' }],
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

      // Add note to in-memory store so it appears in GET requests
      mockNotesStore.push(mockNote)
      
      console.info('Mock note created and added to store:', mockNote.id, 'Total notes:', mockNotesStore.length)
      return NextResponse.json({ note: mockNote }, { status: 201 })
    }

    // Only initialize Supabase if not in mocking mode
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
