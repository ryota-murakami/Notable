import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import { getDevAuthBypassUser } from '@/utils/auth-helpers'
import type { CreateFolderInput } from '@/types/folder'

// GET /api/folders - Get all folders for the current user
export async function GET() {
  try {
    // Check for API mocking FIRST, before any imports or Supabase calls
    if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
      console.info('API mocking enabled - returning empty folders data')
      return NextResponse.json({
        data: [],
        total: 0,
      })
    }

    const supabase = await createClient()

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

    // Get folders with note count
    const { data: folders, error } = await supabase
      .from('folders')
      .select(
        `
        *,
        notes:notes(count)
      `
      )
      .eq('user_id', user.id)
      .order('name')

    if (error) {
      console.error('Error fetching folders:', error)
      return NextResponse.json(
        { error: 'Failed to fetch folders' },
        { status: 500 }
      )
    }

    // Transform the response to include note_count
    const foldersWithCount =
      folders?.map((folder) => ({
        ...folder,
        note_count: folder.notes?.[0]?.count || 0,
        notes: undefined, // Remove the notes array from response
      })) || []

    return NextResponse.json({ success: true, data: foldersWithCount })
  } catch (error) {
    console.error('Error in folders GET:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST /api/folders - Create a new folder
export async function POST(request: NextRequest) {
  try {
    // Check for API mocking FIRST, before any imports or Supabase calls
    if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
      console.info('API mocking enabled - returning mock folder creation')
      const body = await request.json()
      const { name, parent_id } = body

      const mockFolder = {
        id: `mock-folder-${Date.now()}`,
        name: name || 'New Folder',
        user_id: 'mock-user-id',
        parent_id: parent_id || null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }

      return NextResponse.json(
        { success: true, data: mockFolder },
        { status: 201 }
      )
    }

    // Only initialize Supabase if not in mocking mode
    const supabase = await createClient()

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

    const body = await request.json()
    const { name, parent_id } = body as CreateFolderInput

    if (!name || name.trim().length === 0) {
      return NextResponse.json(
        { error: 'Folder name is required' },
        { status: 400 }
      )
    }

    // If parent_id is provided, verify it exists and belongs to user
    if (parent_id) {
      const { data: parentFolder } = await supabase
        .from('folders')
        .select('id')
        .eq('id', parent_id)
        .eq('user_id', user.id)

      if (!parentFolder || parentFolder.length === 0) {
        return NextResponse.json(
          { error: 'Parent folder not found' },
          { status: 404 }
        )
      }
    }

    // Check for duplicate folder name at the same level
    const { data: existingFolders } = await supabase
      .from('folders')
      .select('id')
      .eq('user_id', user.id)
      .eq('name', name.trim())
      .is('parent_id', parent_id || null)

    if (existingFolders && existingFolders.length > 0) {
      return NextResponse.json(
        { error: 'A folder with this name already exists at this level' },
        { status: 409 }
      )
    }

    // Create the folder
    const { data, error } = await supabase
      .from('folders')
      .insert({
        name: name.trim(),
        user_id: user.id,
        parent_id: parent_id || null,
      })
      .select()

    if (error) {
      console.error('Error creating folder:', error)
      return NextResponse.json(
        { error: 'Failed to create folder' },
        { status: 500 }
      )
    }

    const newFolder = data?.[0]
    if (!newFolder) {
      return NextResponse.json(
        { error: 'Failed to create folder' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, data: newFolder },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error in folders POST:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
