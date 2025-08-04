import { createClient } from '@/utils/supabase/server'
import { type NextRequest, NextResponse } from 'next/server'
import type { SavedSearch } from '@/types/search'
import { getDevAuthBypassUser } from '@/utils/auth-helpers'

export async function GET(request: NextRequest) {
  try {
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

    // If using test database, return mock data
    if (process.env.DATABASE_URL?.includes('localhost:5433')) {
      const mockSavedSearches: SavedSearch[] = [
        {
          id: 'saved-1',
          user_id: user.id,
          name: 'TypeScript Notes',
          query: 'TypeScript',
          filters: { tags: ['programming'] },
          shortcut_key: '1',
          is_pinned: true,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          id: 'saved-2',
          user_id: user.id,
          name: 'React Documentation',
          query: 'React docs',
          filters: { folders: ['docs'] },
          shortcut_key: '2',
          is_pinned: false,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ]

      return NextResponse.json({ success: true, data: mockSavedSearches })
    }

    // Get saved searches
    const { data, error } = await supabase
      .from('saved_searches')
      .select('*')
      .eq('user_id', user.id)
      .order('is_pinned', { ascending: false })
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Saved searches error:', error)
      return NextResponse.json(
        { error: 'Failed to get saved searches' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Saved searches API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { name, query, filters, shortcut_key, is_pinned } = body

    // Validate required fields
    if (!name || !query) {
      return NextResponse.json(
        { error: 'Name and query are required' },
        { status: 400 }
      )
    }

    // Check if user has reached the limit
    const { count } = await supabase
      .from('saved_searches')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', user.id)

    if (count && count >= 20) {
      return NextResponse.json(
        { error: 'Maximum number of saved searches reached (20)' },
        { status: 400 }
      )
    }

    // Create saved search
    const { data, error } = await supabase
      .from('saved_searches')
      .insert({
        user_id: user.id,
        name,
        query,
        filters: filters || {},
        shortcut_key,
        is_pinned: is_pinned || false,
      })
      .select()

    if (error) {
      console.error('Save search error:', error)
      return NextResponse.json(
        { error: 'Failed to save search' },
        { status: 500 }
      )
    }

    const savedSearch = data?.[0]
    if (!savedSearch) {
      return NextResponse.json(
        { error: 'Failed to save search' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, data: savedSearch },
      { status: 201 }
    )
  } catch (error) {
    console.error('Save search API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { id, name, query, filters, shortcut_key, is_pinned } = body

    if (!id) {
      return NextResponse.json(
        { error: 'Search ID is required' },
        { status: 400 }
      )
    }

    // Update saved search
    const { data, error } = await supabase
      .from('saved_searches')
      .update({
        name,
        query,
        filters,
        shortcut_key,
        is_pinned,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .eq('user_id', user.id)
      .select()

    if (error) {
      console.error('Update saved search error:', error)
      return NextResponse.json(
        { error: 'Failed to update saved search' },
        { status: 500 }
      )
    }

    const updatedSearch = data?.[0]
    if (!updatedSearch) {
      return NextResponse.json(
        { error: 'Failed to update saved search' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data: updatedSearch })
  } catch (error) {
    console.error('Update saved search API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
