import { createClient } from '@/utils/supabase/server'
import { type NextRequest, NextResponse } from 'next/server'
import type { SearchSuggestion } from '@/types/search'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('q') || ''
    const limit = parseInt(searchParams.get('limit') || '5')

    // Return mock data when API mocking is enabled
    if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
      if (!query || query.length < 1) {
        return NextResponse.json({ success: true, data: [] })
      }

      const mockSuggestions: SearchSuggestion[] = [
        {
          suggestion: `${query} in notes`,
          type: 'content' as const,
          score: 0.9,
        },
        {
          suggestion: `${query} in templates`,
          type: 'content' as const,
          score: 0.8,
        },
        { suggestion: `recent ${query}`, type: 'history' as const, score: 0.7 },
        { suggestion: `${query} tag`, type: 'tag' as const, score: 0.6 },
        {
          suggestion: `${query} content`,
          type: 'content' as const,
          score: 0.5,
        },
      ].filter((s) => s.suggestion.toLowerCase().includes(query.toLowerCase()))

      return NextResponse.json({
        success: true,
        data: mockSuggestions.slice(0, limit),
      })
    }

    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    if (!query || query.length < 1) {
      return NextResponse.json({ success: true, data: [] })
    }

    // Get suggestions from the database function
    const { data: suggestions, error } = await supabase.rpc(
      'get_search_suggestions',
      {
        p_user_id: user.id,
        p_query: query,
        p_limit: limit,
      }
    )

    if (error) {
      console.error('Suggestions error:', error)
      return NextResponse.json(
        { error: 'Failed to get suggestions' },
        { status: 500 }
      )
    }

    // Also get content-based suggestions from note titles
    const { data: titleSuggestions } = await supabase
      .from('notes')
      .select('title')
      .eq('user_id', user.id)
      .is('deleted_at', null)
      .ilike('title', `%${query}%`)
      .limit(3)

    // Combine all suggestions
    const allSuggestions: SearchSuggestion[] = [
      ...(suggestions || []),
      ...(titleSuggestions?.map((note) => ({
        suggestion: note.title,
        type: 'content' as const,
        score: 0.7,
      })) || []),
    ]

    // Remove duplicates and sort by score
    const uniqueSuggestions = Array.from(
      new Map(allSuggestions.map((s) => [s.suggestion, s])).values()
    ).sort((a, b) => b.score - a.score)

    return NextResponse.json({
      success: true,
      data: uniqueSuggestions.slice(0, limit),
    })
  } catch (error) {
    console.error('Suggestions API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
