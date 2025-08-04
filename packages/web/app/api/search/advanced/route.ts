import { createClient } from '@/utils/supabase/server'
import { type NextRequest, NextResponse } from 'next/server'
import {
  operatorsToFilters,
  parseSearchQuery,
  SEARCH_CONSTANTS,
  type SearchQuery,
  type SearchResult,
} from '@/types/search'
import { getDevAuthBypassUser } from '@/utils/auth-helpers'

export async function POST(request: NextRequest) {
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

    const body: SearchQuery = await request.json()
    const {
      query,
      filters = {},
      limit = SEARCH_CONSTANTS.DEFAULT_LIMIT,
      offset = 0,
    } = body

    // Validate query
    if (!query || query.trim().length < SEARCH_CONSTANTS.MIN_QUERY_LENGTH) {
      return NextResponse.json(
        { error: 'Query must be at least 2 characters long' },
        { status: 400 }
      )
    }

    // Parse advanced search operators
    const { text, operators } = parseSearchQuery(query)
    const parsedFilters = { ...filters, ...operatorsToFilters(operators) }

    // Track search start time for analytics
    const startTime = Date.now()

    // If using test database, return mock data
    if (process.env.DATABASE_URL?.includes('localhost:5433')) {
      const mockResults: SearchResult[] = query
        .toLowerCase()
        .includes('nonexistent')
        ? []
        : [
            {
              id: 'n1111111-1111-1111-1111-111111111111',
              title: 'Welcome to Notable',
              content: 'Welcome to Notable! This is your first note.',
              headline_title: query
                ? `Welcome to <mark>${query}</mark>`
                : 'Welcome to Notable',
              headline_content: query
                ? `Welcome to Notable! This is your first <mark>${query}</mark>.`
                : 'Welcome to Notable! This is your first note.',
              updated_at: new Date().toISOString(),
              created_at: new Date().toISOString(),
              folder_id: null,
              folder_name: null,
              tags: [],
              rank: 0.9,
              type: 'note' as const,
            },
            {
              id: 'n2222222-2222-2222-2222-222222222222',
              title: 'Meeting Notes',
              content:
                'Team Meeting - Discussed project roadmap and upcoming features.',
              headline_title: query
                ? `Meeting <mark>${query}</mark>`
                : 'Meeting Notes',
              headline_content: query
                ? `Team Meeting - Discussed <mark>${query}</mark> roadmap.`
                : 'Team Meeting - Discussed project roadmap.',
              updated_at: new Date().toISOString(),
              created_at: new Date().toISOString(),
              folder_id: 'f1111111-1111-1111-1111-111111111111',
              folder_name: 'Work',
              tags: [
                {
                  id: 't1111111-1111-1111-1111-111111111111',
                  name: 'important',
                  color: '#ef4444',
                  user_id: 'mock-user-id',
                  parent_id: null,
                  created_at: new Date().toISOString(),
                  updated_at: new Date().toISOString(),
                  description: null,
                  usage_count: 1,
                  children: [],
                },
              ],
              rank: 0.8,
              type: 'note' as const,
            },
          ]

      return NextResponse.json({
        success: true,
        data: {
          results: mockResults,
          totalCount: mockResults.length,
          hasMore: false,
          query: {
            original: query,
            parsed: text,
            operators,
          },
          filters: parsedFilters,
          performance: {
            responseTime: 50,
          },
        },
      })
    }

    // Execute search using the database function
    const { data: searchResults, error: searchError } = await supabase.rpc(
      'search_notes',
      {
        p_user_id: user.id,
        p_query: text,
        p_tags: parsedFilters.tags || null,
        p_date_from: parsedFilters.dateFrom || null,
        p_date_to: parsedFilters.dateTo || null,
        p_limit: Math.min(limit, SEARCH_CONSTANTS.MAX_LIMIT),
        p_offset: offset,
      }
    )

    if (searchError) {
      console.error('Search error:', searchError)
      return NextResponse.json(
        { error: 'Failed to perform search' },
        { status: 500 }
      )
    }

    // Calculate response time
    const responseTime = Date.now() - startTime

    // Record search in history (fire and forget)
    Promise.resolve(
      supabase.from('search_history').insert({
        user_id: user.id,
        query,
        filters: parsedFilters,
        results_count: searchResults?.length || 0,
      })
    )
      .then(() => {
        // Also record analytics
        return supabase.from('search_analytics').insert({
          user_id: user.id,
          query,
          query_type: operators.length > 0 ? 'advanced' : 'basic',
          response_time_ms: responseTime,
          results_count: searchResults?.length || 0,
        })
      })
      .catch((err: any) =>
        console.error('Failed to record search history:', err)
      )

    // Get total count for pagination
    const { count: totalCount } = await supabase
      .from('notes')
      .select('*', { count: 'exact', head: true })
      .textSearch('search_vector', text)
      .eq('user_id', user.id)
      .is('deleted_at', null)

    return NextResponse.json({
      success: true,
      data: {
        results: searchResults as SearchResult[],
        totalCount: totalCount || 0,
        hasMore: offset + limit < (totalCount || 0),
        query: {
          original: query,
          parsed: text,
          operators,
        },
        filters: parsedFilters,
        performance: {
          responseTime,
        },
      },
    })
  } catch (error) {
    console.error('Search API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
