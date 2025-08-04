import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import { getDevAuthBypassUser } from '@/utils/auth-helpers'

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

    const limit = Math.min(parseInt(searchParams.get('limit') || '50'), 100)
    const offset = parseInt(searchParams.get('offset') || '0')

    // If using test database, return mock data
    if (process.env.DATABASE_URL?.includes('localhost:5433')) {
      const mockHistory = [
        {
          id: 'search-1',
          user_id: user.id,
          query: 'TypeScript',
          filters: {},
          results_count: 5,
          timestamp: new Date().toISOString(),
          created_at: new Date().toISOString(),
        },
        {
          id: 'search-2',
          user_id: user.id,
          query: 'React hooks',
          filters: {},
          results_count: 3,
          timestamp: new Date(Date.now() - 3600000).toISOString(),
          created_at: new Date(Date.now() - 3600000).toISOString(),
        },
      ]

      return NextResponse.json({
        success: true,
        data: mockHistory,
      })
    }

    // Get search history for the user
    const { data: history, error: historyError } = await supabase
      .from('search_history')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1)

    if (historyError) {
      console.error('Error fetching search history:', historyError)
      return NextResponse.json(
        { error: 'Failed to fetch search history' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      data: history || [],
    })
  } catch (error) {
    console.error('Search history GET error:', error)
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
    const { query, results_count } = body

    if (!query || typeof query !== 'string') {
      return NextResponse.json({ error: 'Query is required' }, { status: 400 })
    }

    // Check if this query already exists for the user (within last 24 hours)
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
    const { data: existingEntry } = await supabase
      .from('search_history')
      .select('id')
      .eq('user_id', user.id)
      .eq('query', query.trim())
      .gte('created_at', oneDayAgo)
      .maybeSingle()

    if (existingEntry) {
      // Update the existing entry's timestamp
      const { data: updatedEntry, error: updateError } = await supabase
        .from('search_history')
        .update({
          created_at: new Date().toISOString(),
          results_count: results_count || 0,
        })
        .eq('id', existingEntry.id)
        .select()
        .single()

      if (updateError) {
        console.error('Error updating search history:', updateError)
        return NextResponse.json(
          { error: 'Failed to update search history' },
          { status: 500 }
        )
      }

      return NextResponse.json({
        success: true,
        data: updatedEntry,
      })
    }

    // Create new search history entry
    const { data, error: insertError } = await supabase
      .from('search_history')
      .insert({
        user_id: user.id,
        query: query.trim(),
        results_count: results_count || 0,
      })
      .select()

    if (insertError) {
      console.error('Error creating search history:', insertError)
      return NextResponse.json(
        { error: 'Failed to save search history' },
        { status: 500 }
      )
    }

    const newEntry = data?.[0]
    if (!newEntry) {
      return NextResponse.json(
        { error: 'Failed to save search history' },
        { status: 500 }
      )
    }

    // Keep only the most recent 100 entries per user
    const { error: cleanupError } = await supabase.rpc(
      'cleanup_search_history',
      {
        p_user_id: user.id,
        p_keep_count: 100,
      }
    )

    if (cleanupError) {
      console.error('Error cleaning up search history:', cleanupError)
      // Don't fail the request for cleanup errors
    }

    return NextResponse.json(
      {
        success: true,
        data: newEntry,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Search history POST error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
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

    const historyId = searchParams.get('id')
    const clearAll = searchParams.get('clear_all') === 'true'

    if (clearAll) {
      // Clear all search history for the user
      const { error: deleteError } = await supabase
        .from('search_history')
        .delete()
        .eq('user_id', user.id)

      if (deleteError) {
        console.error('Error clearing search history:', deleteError)
        return NextResponse.json(
          { error: 'Failed to clear search history' },
          { status: 500 }
        )
      }

      return NextResponse.json({
        success: true,
        message: 'Search history cleared successfully',
      })
    }

    if (!historyId) {
      return NextResponse.json(
        { error: 'History ID is required' },
        { status: 400 }
      )
    }

    // Delete specific search history entry
    const { error: deleteError } = await supabase
      .from('search_history')
      .delete()
      .eq('id', historyId)
      .eq('user_id', user.id)

    if (deleteError) {
      console.error('Error deleting search history:', deleteError)
      return NextResponse.json(
        { error: 'Failed to delete search history entry' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Search history entry deleted successfully',
    })
  } catch (error) {
    console.error('Search history DELETE error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
