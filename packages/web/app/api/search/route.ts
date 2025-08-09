import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import { getDevAuthBypassUser } from '@/utils/auth-helpers'
import type { SearchableNote, SearchResult } from '@/lib/search/types'
import crypto from 'crypto'

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

    // Parse search parameters
    const query = searchParams.get('q') || ''
    const limit = Math.min(parseInt(searchParams.get('limit') || '50'), 100)
    const offset = parseInt(searchParams.get('offset') || '0')
    const tags = searchParams.get('tags')?.split(',').filter(Boolean) || []
    const _folders =
      searchParams.get('folders')?.split(',').filter(Boolean) || []
    const _dateFrom = searchParams.get('date_from')
    const _dateTo = searchParams.get('date_to')
    const includeContent = searchParams.get('include_content') !== 'false'
    const sortBy = searchParams.get('sort_by') || 'relevance'
    const isAutocomplete = searchParams.get('autocomplete') === 'true'

    if (!query.trim()) {
      return NextResponse.json({
        success: true,
        data: [],
        pagination: {
          total: 0,
          limit,
          offset,
          hasMore: false,
        },
        stats: {
          searchTime: 0,
          totalResults: 0,
        },
      })
    }

    const startTime = Date.now()

    // Generate cache key for this search
    const cacheKey = crypto
      .createHash('md5')
      .update(
        `${query}:${tags.join(',')}:${sortBy}:${limit}:${offset}:${includeContent}`
      )
      .digest('hex')

    // Try to get cached results first (only for non-autocomplete searches)
    if (!isAutocomplete) {
      const { data: cachedData } = await supabase.rpc(
        'get_cached_search_results',
        {
          p_user_id: user.id,
          p_query_hash: cacheKey,
        }
      )

      if (cachedData) {
        const searchTime = Date.now() - startTime
        const parsedData = JSON.parse(cachedData)

        return NextResponse.json({
          ...parsedData,
          stats: {
            ...parsedData.stats,
            searchTime,
            cached: true,
          },
        })
      }
    }

    // Handle autocomplete search (ultra-fast)
    if (isAutocomplete) {
      const { data: autocompleteResults, error: autocompleteError } =
        await supabase.rpc('autocomplete_search', {
          p_user_id: user.id,
          p_query: query,
          p_limit: Math.min(limit, 10),
        })

      if (autocompleteError) {
        console.error('Autocomplete search error:', autocompleteError)
        return NextResponse.json(
          { error: 'Autocomplete search failed' },
          { status: 500 }
        )
      }

      const searchTime = Date.now() - startTime
      const results = (autocompleteResults || []).map((result: any) => ({
        note: {
          id: result.id,
          title: result.title,
          content: '',
          tags: [],
          path: '/',
          isFolder: false,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          author: user.email || 'Unknown',
        },
        score: result.rank,
        matches: [],
        snippet: '',
        matchType: result.match_type,
      }))

      return NextResponse.json({
        success: true,
        data: results,
        pagination: {
          total: results.length,
          limit,
          offset: 0,
          hasMore: false,
        },
        stats: {
          searchTime,
          totalResults: results.length,
          autocomplete: true,
        },
      })
    }

    // Use optimized fast search function
    const { data: searchResults, error: searchError } = await supabase.rpc(
      'fast_search_notes',
      {
        p_user_id: user.id,
        p_query: query,
        p_tags: tags,
        p_limit: limit,
        p_offset: offset,
        p_sort_by: sortBy,
      }
    )

    if (searchError) {
      console.error('Fast search error:', searchError)
      return NextResponse.json({ error: 'Search failed' }, { status: 500 })
    }

    const searchTime = Date.now() - startTime
    const totalCount = searchResults?.[0]?.total_count || 0

    // Transform results to match expected format
    const transformedResults = (searchResults || []).map((result: any) => {
      const searchableNote: SearchableNote = {
        id: result.id,
        title: result.title,
        content: includeContent ? result.content : '',
        tags: result.tag_names || [],
        path: '/',
        isFolder: false,
        created_at: result.created_at,
        updated_at: result.updated_at,
        author: user.email || 'Unknown',
      }

      const snippet = generateSearchSnippet(searchableNote, query)

      return {
        note: searchableNote,
        score: result.rank || 0,
        matches: [],
        snippet,
      } as SearchResult
    })

    const response = {
      success: true,
      data: transformedResults,
      pagination: {
        total: totalCount,
        limit,
        offset,
        hasMore: totalCount > offset + limit,
      },
      stats: {
        searchTime,
        totalResults: transformedResults.length,
        dbOptimized: true,
      },
    }

    // Cache the results for future requests (fire and forget)
    if (!isAutocomplete && transformedResults.length > 0) {
      const cachePromise = supabase.rpc('cache_search_results', {
        p_user_id: user.id,
        p_query_hash: cacheKey,
        p_results: JSON.stringify(response),
      })

      // Handle cache save without blocking response
      void cachePromise.then(({ error }: { error: any }) => {
        if (error) {
          console.warn('Failed to cache search results:', error)
        }
      })
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Search API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Helper function to calculate relevance score
function _calculateRelevanceScore(note: SearchableNote, query: string): number {
  const searchTerms = query
    .toLowerCase()
    .split(' ')
    .filter((term) => term.length > 0)
  let score = 0

  searchTerms.forEach((term) => {
    const titleLower = note.title.toLowerCase()
    const contentLower = note.content.toLowerCase()

    // Title matches are worth more
    if (titleLower.includes(term)) {
      score += titleLower === term ? 10 : 5 // Exact title match vs partial
    }

    // Content matches
    const contentMatches = (contentLower.match(new RegExp(term, 'g')) || [])
      .length
    score += contentMatches * 1

    // Tag matches
    note.tags.forEach((tag) => {
      if (tag.toLowerCase().includes(term)) {
        score += 3
      }
    })
  })

  return score
}

// Helper function to generate search snippet
function generateSearchSnippet(note: SearchableNote, query: string): string {
  const searchTerms = query
    .toLowerCase()
    .split(' ')
    .filter((term) => term.length > 0)
  const content = note.content

  if (!content || searchTerms.length === 0) {
    return content.slice(0, 200) + (content.length > 200 ? '...' : '')
  }

  // Find the first occurrence of any search term
  const contentLower = content.toLowerCase()
  let bestMatch = { index: -1, term: '' }

  searchTerms.forEach((term) => {
    const index = contentLower.indexOf(term)
    if (index !== -1 && (bestMatch.index === -1 || index < bestMatch.index)) {
      bestMatch = { index, term }
    }
  })

  if (bestMatch.index === -1) {
    return content.slice(0, 200) + (content.length > 200 ? '...' : '')
  }

  // Generate snippet around the match
  const snippetStart = Math.max(0, bestMatch.index - 100)
  const snippetEnd = Math.min(
    content.length,
    bestMatch.index + bestMatch.term.length + 100
  )

  let snippet = content.slice(snippetStart, snippetEnd)

  if (snippetStart > 0) snippet = `...${snippet}`
  if (snippetEnd < content.length) snippet = `${snippet}...`

  return snippet
}
