import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import { getDevAuthBypassUser } from '@/utils/auth-helpers'
import type { UpdateFolderInput } from '@/types/folder'

// GET /api/folders/[id] - Get a specific folder with its contents
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
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

    // Get folder with notes and subfolders
    const { data: folder, error } = await supabase
      .from('folders')
      .select(
        `
        *,
        notes:notes(
          id,
          title,
          content,
          created_at,
          updated_at
        ),
        subfolders:folders!parent_id(
          id,
          name,
          created_at,
          updated_at
        )
      `
      )
      .eq('id', id)
      .eq('user_id', user.id)

    if (error) {
      console.error('Error fetching folder:', error)
      return NextResponse.json(
        { error: 'Failed to fetch folder' },
        { status: 500 }
      )
    }

    const folderData = folder?.[0]
    if (!folderData) {
      return NextResponse.json({ error: 'Folder not found' }, { status: 404 })
    }

    // Get parent path
    const path: string[] = []
    let currentFolder = folderData

    while (currentFolder.parent_id) {
      const { data: parent } = await supabase
        .from('folders')
        .select('id, name, parent_id')
        .eq('id', currentFolder.parent_id)
        .eq('user_id', user.id)

      if (parent?.[0]) {
        path.unshift(parent[0].name)
        currentFolder = parent[0]
      } else {
        break
      }
    }

    return NextResponse.json({
      success: true,
      data: {
        ...folderData,
        path,
        note_count: folderData.notes?.length || 0,
        subfolder_count: folderData.subfolders?.length || 0,
      },
    })
  } catch (error) {
    console.error('Error in folder GET:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// PUT /api/folders/[id] - Update a folder
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
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
    const { name, parent_id } = body as UpdateFolderInput

    // Verify folder exists and belongs to user
    const { data: existingFolder } = await supabase
      .from('folders')
      .select('*')
      .eq('id', id)
      .eq('user_id', user.id)

    if (!existingFolder || existingFolder.length === 0) {
      return NextResponse.json({ error: 'Folder not found' }, { status: 404 })
    }

    const currentFolder = existingFolder[0]
    const updates: any = {}

    if (name !== undefined && name.trim().length > 0) {
      updates.name = name.trim()
    }

    if (parent_id !== undefined) {
      // Prevent setting parent to self
      if (parent_id === id) {
        return NextResponse.json(
          { error: 'A folder cannot be its own parent' },
          { status: 400 }
        )
      }

      // If parent_id is provided, verify it exists and belongs to user
      if (parent_id !== null) {
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

        // Prevent circular references
        if (await isDescendant(supabase, id, parent_id, user.id)) {
          return NextResponse.json(
            { error: 'Cannot move a folder into its own descendant' },
            { status: 400 }
          )
        }
      }

      updates.parent_id = parent_id
    }

    // Check for duplicate folder name at the target level
    if (updates.name || updates.parent_id !== undefined) {
      const targetParentId =
        updates.parent_id !== undefined
          ? updates.parent_id
          : currentFolder.parent_id
      const targetName = updates.name || currentFolder.name

      const { data: duplicates } = await supabase
        .from('folders')
        .select('id')
        .eq('user_id', user.id)
        .eq('name', targetName)
        .is('parent_id', targetParentId)
        .neq('id', id)

      if (duplicates && duplicates.length > 0) {
        return NextResponse.json(
          { error: 'A folder with this name already exists at this level' },
          { status: 409 }
        )
      }
    }

    // Update the folder
    const { data, error } = await supabase
      .from('folders')
      .update(updates)
      .eq('id', id)
      .eq('user_id', user.id)
      .select()

    if (error) {
      console.error('Error updating folder:', error)
      return NextResponse.json(
        { error: 'Failed to update folder' },
        { status: 500 }
      )
    }

    const updatedFolder = data?.[0]
    if (!updatedFolder) {
      return NextResponse.json(
        { error: 'Failed to update folder' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data: updatedFolder })
  } catch (error) {
    console.error('Error in folder PUT:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// DELETE /api/folders/[id] - Delete a folder
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
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

    // Verify folder exists and belongs to user
    const { data: folder } = await supabase
      .from('folders')
      .select('*')
      .eq('id', id)
      .eq('user_id', user.id)

    if (!folder || folder.length === 0) {
      return NextResponse.json({ error: 'Folder not found' }, { status: 404 })
    }

    // Check if folder has subfolders
    const { data: subfolders } = await supabase
      .from('folders')
      .select('id')
      .eq('parent_id', id)
      .eq('user_id', user.id)

    if (subfolders && subfolders.length > 0) {
      return NextResponse.json(
        { error: 'Cannot delete folder with subfolders' },
        { status: 400 }
      )
    }

    // Check if folder has notes
    const { data: notes } = await supabase
      .from('notes')
      .select('id')
      .eq('folder_id', id)
      .eq('user_id', user.id)
      .is('deleted_at', null)

    if (notes && notes.length > 0) {
      return NextResponse.json(
        { error: 'Cannot delete folder with notes' },
        { status: 400 }
      )
    }

    // Delete the folder
    const { error } = await supabase
      .from('folders')
      .delete()
      .eq('id', id)
      .eq('user_id', user.id)

    if (error) {
      console.error('Error deleting folder:', error)
      return NextResponse.json(
        { error: 'Failed to delete folder' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error in folder DELETE:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Helper function to check if a folder is a descendant of another
async function isDescendant(
  supabase: any,
  folderId: string,
  potentialAncestorId: string,
  userId: string
): Promise<boolean> {
  let currentId = potentialAncestorId
  const visited = new Set<string>()

  while (currentId) {
    if (visited.has(currentId)) {
      // Circular reference detected
      return false
    }
    visited.add(currentId)

    if (currentId === folderId) {
      return true
    }

    const { data: parent } = await supabase
      .from('folders')
      .select('parent_id')
      .eq('id', currentId)
      .eq('user_id', userId)

    if (!parent?.[0]) {
      break
    }

    currentId = parent[0].parent_id
  }

  return false
}
