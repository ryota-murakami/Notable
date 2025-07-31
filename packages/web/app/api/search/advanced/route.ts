import { createClient } from '@/utils/supabase/server'
import { NextRequest, NextResponse } from 'next/server'
import {
  parseSearchQuery,
  operatorsToFilters,
  type SearchResult,
  type SearchQuery,
  SEARCH_CONSTANTS,
} from '@/types/search'

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
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
        query: query,
        filters: parsedFilters,
        results_count: searchResults?.length || 0,
      })
    )
      .then(() => {
        // Also record analytics
        return supabase.from('search_analytics').insert({
          user_id: user.id,
          query: query,
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
