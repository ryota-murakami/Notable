import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import { getDevAuthBypassUser } from '@/utils/auth-helpers'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
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
      .maybeSingle()

    // Check if note belongs to user
    if (note && user) {
      const { data: userNote } = await supabase
        .from('notes')
        .select('id')
        .eq('id', id)
        .eq('user_id', user.id)
        .maybeSingle()

      if (!userNote) {
        return NextResponse.json({ error: 'Note not found' }, { status: 404 })
      }
    }

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

    // Get tags for this note
    const { data: noteTags, error: noteTagsError } = await supabase
      .from('note_tags')
      .select(
        `
        id,
        created_at,
        tags (
          id,
          name,
          parent_id,
          color,
          description,
          created_at,
          updated_at
        )
      `
      )
      .eq('note_id', id)

    if (noteTagsError) {
      console.error('Error fetching note tags:', noteTagsError)
      return NextResponse.json(
        { error: 'Failed to fetch note tags' },
        { status: 500 }
      )
    }

    // Extract tags from the join result
    const tags = noteTags?.map((nt) => nt.tags).filter(Boolean) || []

    return NextResponse.json({
      success: true,
      data: tags,
    })
  } catch (error) {
    console.error('Note tags GET error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
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

    const body = await request.json()
    const { tag_ids } = body as { tag_ids: string[] }

    if (!Array.isArray(tag_ids) || tag_ids.length === 0) {
      return NextResponse.json(
        { error: 'tag_ids must be a non-empty array' },
        { status: 400 }
      )
    }

    // Verify note exists and belongs to user
    const { data: note, error: noteError } = await supabase
      .from('notes')
      .select('id')
      .eq('id', id)
      .maybeSingle()

    // Check if note belongs to user
    if (note && user) {
      const { data: userNote } = await supabase
        .from('notes')
        .select('id')
        .eq('id', id)
        .eq('user_id', user.id)
        .maybeSingle()

      if (!userNote) {
        return NextResponse.json({ error: 'Note not found' }, { status: 404 })
      }
    }

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

    // Verify all tags exist and belong to user
    const { data: tags, error: tagsError } = await supabase
      .from('tags')
      .select('id')
      .in('id', tag_ids)
      .eq('user_id', user.id)

    if (tagsError) {
      console.error('Error fetching tags:', tagsError)
      return NextResponse.json(
        { error: 'Failed to fetch tags' },
        { status: 500 }
      )
    }

    if (!tags || tags.length !== tag_ids.length) {
      return NextResponse.json(
        { error: 'One or more tags not found or do not belong to you' },
        { status: 400 }
      )
    }

    // Get existing note-tag relationships
    const { data: existingNoteTags, error: existingError } = await supabase
      .from('note_tags')
      .select('tag_id')
      .eq('note_id', id)

    if (existingError) {
      console.error('Error fetching existing note tags:', existingError)
      return NextResponse.json(
        { error: 'Failed to fetch existing tags' },
        { status: 500 }
      )
    }

    const existingTagIds = existingNoteTags?.map((nt) => nt.tag_id) || []
    const newTagIds = tag_ids.filter((tagId) => !existingTagIds.includes(tagId))

    if (newTagIds.length === 0) {
      return NextResponse.json(
        { error: 'All tags are already associated with this note' },
        { status: 400 }
      )
    }

    // Create new note-tag relationships
    const noteTagsToInsert = newTagIds.map((tagId) => ({
      note_id: id,
      tag_id: tagId,
    }))

    const { data: newNoteTags, error: insertError } = await supabase
      .from('note_tags')
      .insert(noteTagsToInsert).select(`
        id,
        created_at,
        tags (
          id,
          name,
          parent_id,
          color,
          description,
          created_at,
          updated_at
        )
      `)

    if (insertError) {
      console.error('Error creating note tags:', insertError)
      return NextResponse.json(
        { error: 'Failed to add tags to note' },
        { status: 500 }
      )
    }

    // Extract tags from the join result
    const addedTags = newNoteTags?.map((nt) => nt.tags).filter(Boolean) || []

    return NextResponse.json(
      {
        success: true,
        data: addedTags,
        added_count: addedTags.length,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Note tags POST error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
