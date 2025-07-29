import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import { getDevAuthBypassUser } from '@/utils/auth-helpers'

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; tagId: string }> }
) {
  const { id, tagId } = await params
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

    // Verify note exists and belongs to user
    const { data: note, error: noteError } = await supabase
      .from('notes')
      .select('id')
      .eq('id', id)
      .eq('user_id', user.id)
      .maybeSingle()

    if (noteError) {
      console.error('Error fetching note:', noteError)
      return NextResponse.json(
        { error: 'Failed to fetch note' },
        { status: 500 }
      )
    }

    if (!note) {
      return NextResponse.json({ error: 'Note not found' }, { status: 404 })
    }

    // Verify tag exists and belongs to user
    const { data: tag, error: tagError } = await supabase
      .from('tags')
      .select('id, name')
      .eq('id', tagId)
      .eq('user_id', user.id)
      .maybeSingle()

    if (tagError) {
      console.error('Error fetching tag:', tagError)
      return NextResponse.json(
        { error: 'Failed to fetch tag' },
        { status: 500 }
      )
    }

    if (!tag) {
      return NextResponse.json({ error: 'Tag not found' }, { status: 404 })
    }

    // Check if note-tag relationship exists
    const { data: noteTag, error: noteTagError } = await supabase
      .from('note_tags')
      .select('id')
      .eq('note_id', id)
      .eq('tag_id', tagId)
      .maybeSingle()

    if (noteTagError) {
      console.error('Error fetching note tag relationship:', noteTagError)
      return NextResponse.json(
        { error: 'Failed to fetch note tag relationship' },
        { status: 500 }
      )
    }

    if (!noteTag) {
      return NextResponse.json(
        { error: 'Tag is not associated with this note' },
        { status: 404 }
      )
    }

    // Remove the note-tag relationship
    const { error: deleteError } = await supabase
      .from('note_tags')
      .delete()
      .eq('note_id', id)
      .eq('tag_id', tagId)

    if (deleteError) {
      console.error('Error removing tag from note:', deleteError)
      return NextResponse.json(
        { error: 'Failed to remove tag from note' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: `Tag "${tag.name}" removed from note successfully`,
    })
  } catch (error) {
    console.error('Note tag DELETE error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
