import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import { getDevAuthBypassUser } from '@/utils/auth-helpers'
import type { EnhancedTag, TagFilter, TagInsert } from '@/types/tags'

export async function GET(request: NextRequest) {
  const supabase = await createClient()
  const { searchParams } = new URL(request.url)

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

    // Parse query parameters
    const parentId = searchParams.get('parent_id')
    const query = searchParams.get('query')
    const includeChildren = searchParams.get('include_children') === 'true'
    const sortBy =
      (searchParams.get('sort_by') as
        | 'name'
        | 'usage'
        | 'created'
        | 'updated') || 'name'
    const sortOrder =
      (searchParams.get('sort_order') as 'asc' | 'desc') || 'asc'
    const limit = searchParams.get('limit')
      ? parseInt(searchParams.get('limit')!)
      : undefined
    const offset = searchParams.get('offset')
      ? parseInt(searchParams.get('offset')!)
      : 0

    // Return mock data when API mocking is enabled
    if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
      const mockTags: EnhancedTag[] = [
        {
          id: 't1111111-1111-1111-1111-111111111111',
          name: 'important',
          color: '#ef4444',
          user_id: user.id,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          usage_count: 2,
          parent_id: null,
        },
        {
          id: 't2222222-2222-2222-2222-222222222222',
          name: 'work',
          color: '#3b82f6',
          user_id: user.id,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          usage_count: 1,
          parent_id: null,
        },
      ]

      return NextResponse.json({
        success: true,
        data: mockTags,
      })
    }

    // Build the query
    let tagsQuery = supabase
      .from('tags')
      .select(
        `
        *,
        note_tags(count)
      `
      )
      .eq('user_id', user.id)

    // Apply filters
    if (parentId === 'null' || parentId === '') {
      tagsQuery = tagsQuery.is('parent_id', null)
    } else if (parentId) {
      tagsQuery = tagsQuery.eq('parent_id', parentId)
    }

    if (query) {
      tagsQuery = tagsQuery.ilike('name', `%${query}%`)
    }

    // Apply sorting
    const sortColumn =
      sortBy === 'usage'
        ? 'note_tags.count'
        : sortBy === 'created'
          ? 'created_at'
          : sortBy === 'updated'
            ? 'updated_at'
            : 'name'
    tagsQuery = tagsQuery.order(sortColumn, { ascending: sortOrder === 'asc' })

    // Apply pagination
    if (limit) {
      tagsQuery = tagsQuery.range(offset, offset + limit - 1)
    }

    const { data: tags, error: tagsError } = await tagsQuery

    if (tagsError) {
      console.error('Error fetching tags:', tagsError)
      return NextResponse.json(
        { error: 'Failed to fetch tags' },
        { status: 500 }
      )
    }

    // Get usage counts for each tag
    const tagsWithUsage: EnhancedTag[] = await Promise.all(
      tags.map(async (tag) => {
        const { count } = await supabase
          .from('note_tags')
          .select('*', { count: 'exact', head: true })
          .eq('tag_id', tag.id)

        return {
          ...tag,
          usage_count: count || 0,
        }
      })
    )

    // If includeChildren is true, fetch child tags for each tag
    if (includeChildren) {
      for (const tag of tagsWithUsage) {
        const { data: childTags, error: childError } = await supabase
          .from('tags')
          .select('*')
          .eq('parent_id', tag.id)
          .eq('user_id', user.id)
          .order('name')

        if (!childError && childTags) {
          tag.children = childTags.map((child) => ({
            ...child,
            usage_count: 0, // Will be calculated separately if needed
          }))
        }
      }
    }

    return NextResponse.json({
      success: true,
      data: tagsWithUsage,
    })
  } catch (error) {
    console.error('Tags API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
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
    const { name, color } = body as TagInsert

    // Return mock data when API mocking is enabled
    if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
      // Basic validation still needed for mock
      if (!name || typeof name !== 'string' || name.trim().length === 0) {
        return NextResponse.json(
          { error: 'Tag name is required' },
          { status: 400 }
        )
      }

      const mockTag = {
        id: `t${Date.now()}-mock-tag`,
        name: name.trim(),
        color: color || '#3b82f6',
        user_id: user.id,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        usage_count: 0,
        parent_id: null,
      }

      return NextResponse.json(
        {
          success: true,
          data: mockTag,
        },
        { status: 201 }
      )
    }

    // Validate required fields
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json(
        { error: 'Tag name is required' },
        { status: 400 }
      )
    }

    // Validate tag name format (no spaces, special chars, etc.)
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

    // Check for duplicate tag names for this user
    const { data: existingTag, error: checkError } = await supabase
      .from('tags')
      .select('id')
      .eq('name', name.trim())
      .eq('user_id', user.id)
      .maybeSingle()

    if (checkError) {
      console.error('Error checking for existing tag:', checkError)
      return NextResponse.json(
        { error: 'Failed to validate tag name' },
        { status: 500 }
      )
    }

    if (existingTag) {
      return NextResponse.json(
        { error: 'A tag with this name already exists' },
        { status: 409 }
      )
    }

    // Parent tag validation not implemented - database schema doesn't include parent_id yet

    // Create the tag
    const tagData: TagInsert = {
      name: name.trim(),
      color: color || '#3b82f6',
      user_id: user.id,
    }

    const { data: newTag, error: insertError } = await supabase
      .from('tags')
      .insert(tagData)
      .select()
      .single()

    if (insertError) {
      console.error('Error creating tag:', insertError)
      return NextResponse.json(
        { error: 'Failed to create tag' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        data: {
          ...newTag,
          usage_count: 0,
        },
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Tags POST error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
