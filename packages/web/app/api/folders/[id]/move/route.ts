import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import { getDevAuthBypassUser } from '@/utils/auth-helpers'

// POST /api/folders/[id]/move - Move notes to this folder
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: folderId } = await params
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
    const { note_ids } = body as { note_ids: string[] }

    if (!Array.isArray(note_ids) || note_ids.length === 0) {
      return NextResponse.json(
        { error: 'note_ids must be a non-empty array' },
        { status: 400 }
      )
    }

    // If folderId is not 'root', verify folder exists and belongs to user
    if (folderId !== 'root') {
      const { data: folder } = await supabase
        .from('folders')
        .select('id')
        .eq('id', folderId)
        .eq('user_id', user.id)

      if (!folder || folder.length === 0) {
        return NextResponse.json({ error: 'Folder not found' }, { status: 404 })
      }
    }

    // Verify all notes exist and belong to user
    const { data: notes } = await supabase
      .from('notes')
      .select('id')
      .in('id', note_ids)
      .eq('user_id', user.id)
      .is('deleted_at', null)

    if (!notes || notes.length !== note_ids.length) {
      return NextResponse.json(
        { error: 'One or more notes not found' },
        { status: 404 }
      )
    }

    // Update notes folder_id
    const targetFolderId = folderId === 'root' ? null : folderId

    const { error } = await supabase
      .from('notes')
      .update({ folder_id: targetFolderId })
      .in('id', note_ids)
      .eq('user_id', user.id)

    if (error) {
      console.error('Error moving notes:', error)
      return NextResponse.json(
        { error: 'Failed to move notes' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: `Moved ${note_ids.length} note(s) to ${folderId === 'root' ? 'root' : 'folder'}`,
    })
  } catch (error) {
    console.error('Error in move notes:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
