import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import { getDevAuthBypassUser } from '@/utils/auth-helpers'
import type { TagUpdate } from '@/types/tags'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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

    // Get the tag with usage count
    const { data: tag, error: tagError } = await supabase
      .from('tags')
      .select('*')
      .eq('id', params.id)
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

    // Get usage count
    const { count: usageCount } = await supabase
      .from('note_tags')
      .select('*', { count: 'exact', head: true })
      .eq('tag_id', tag.id)

    // TODO: Get child tags when parent_id is implemented in database schema
    // const { data: childTags, error: childError } = await supabase
    //   .from('tags')
    //   .select('*')
    //   .eq('parent_id', tag.id)
    //   .eq('user_id', user.id)
    //   .order('name')

    const enhancedTag = {
      ...tag,
      usage_count: usageCount || 0,
      children: [], // childTags || [],
    }

    return NextResponse.json({
      success: true,
      data: enhancedTag,
    })
  } catch (error) {
    console.error('Tag GET error:', error)
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
    const { name, color } = body as TagUpdate

    // Verify tag exists and belongs to user
    const { data: existingTag, error: fetchError } = await supabase
      .from('tags')
      .select('id, name')
      .eq('id', params.id)
      .eq('user_id', user.id)
      .maybeSingle()

    if (fetchError) {
      console.error('Error fetching tag for update:', fetchError)
      return NextResponse.json(
        { error: 'Failed to fetch tag' },
        { status: 500 }
      )
    }

    if (!existingTag) {
      return NextResponse.json({ error: 'Tag not found' }, { status: 404 })
    }

    // Validate name if provided
    if (name !== undefined) {
      if (!name || typeof name !== 'string' || name.trim().length === 0) {
        return NextResponse.json(
          { error: 'Tag name is required' },
          { status: 400 }
        )
      }

      const tagNameRegex = /^[a-zA-Z0-9_-]+$/
      if (!tagNameRegex.test(name.trim())) {
        return NextResponse.json(
          {
            error:
              'Tag name can only contain letters, numbers, hyphens, and underscores',
          },
          { status: 400 }
        )
      }

      // Check for duplicate names (excluding current tag)
      if (name.trim() !== existingTag.name) {
        const { data: duplicateTag, error: duplicateError } = await supabase
          .from('tags')
          .select('id')
          .eq('name', name.trim())
          .eq('user_id', user.id)
          .neq('id', params.id)
          .maybeSingle()

        if (duplicateError) {
          console.error('Error checking for duplicate tag:', duplicateError)
          return NextResponse.json(
            { error: 'Failed to validate tag name' },
            { status: 500 }
          )
        }

        if (duplicateTag) {
          return NextResponse.json(
            { error: 'A tag with this name already exists' },
            { status: 409 }
          )
        }
      }
    }

    // Parent tag validation not implemented - database schema doesn't include parent_id yet

    // Prepare update data
    const updateData: TagUpdate = {}
    if (name !== undefined) updateData.name = name.trim()
    if (color !== undefined) updateData.color = color
    // parent_id and description are not yet implemented in the database schema

    // Update the tag
    const { data: updatedTag, error: updateError } = await supabase
      .from('tags')
      .update(updateData)
      .eq('id', params.id)
      .eq('user_id', user.id)
      .select()
      .single()

    if (updateError) {
      console.error('Error updating tag:', updateError)
      return NextResponse.json(
        { error: 'Failed to update tag' },
        { status: 500 }
      )
    }

    // Get usage count for response
    const { count: usageCount } = await supabase
      .from('note_tags')
      .select('*', { count: 'exact', head: true })
      .eq('tag_id', updatedTag.id)

    return NextResponse.json({
      success: true,
      data: {
        ...updatedTag,
        usage_count: usageCount || 0,
      },
    })
  } catch (error) {
    console.error('Tag PUT error:', error)
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

    // Check if tag exists and belongs to user
    const { data: tag, error: fetchError } = await supabase
      .from('tags')
      .select('id, name')
      .eq('id', params.id)
      .eq('user_id', user.id)
      .maybeSingle()

    if (fetchError) {
      console.error('Error fetching tag for deletion:', fetchError)
      return NextResponse.json(
        { error: 'Failed to fetch tag' },
        { status: 500 }
      )
    }

    if (!tag) {
      return NextResponse.json({ error: 'Tag not found' }, { status: 404 })
    }

    // Check if tag has children
    const { data: childTags, error: childError } = await supabase
      .from('tags')
      .select('id')
      .eq('parent_id', params.id)
      .eq('user_id', user.id)

    if (childError) {
      console.error('Error checking child tags:', childError)
      return NextResponse.json(
        { error: 'Failed to check tag dependencies' },
        { status: 500 }
      )
    }

    if (childTags && childTags.length > 0) {
      return NextResponse.json(
        {
          error:
            'Cannot delete tag with child tags. Please delete or move child tags first.',
        },
        { status: 400 }
      )
    }

    // Delete the tag (note_tags will be cascade deleted)
    const { error: deleteError } = await supabase
      .from('tags')
      .delete()
      .eq('id', params.id)
      .eq('user_id', user.id)

    if (deleteError) {
      console.error('Error deleting tag:', deleteError)
      return NextResponse.json(
        { error: 'Failed to delete tag' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Tag deleted successfully',
    })
  } catch (error) {
    console.error('Tag DELETE error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
