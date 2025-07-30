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

    const query = searchParams.get('q') || ''
    const limit = Math.min(parseInt(searchParams.get('limit') || '10'), 20)

    if (!query.trim() || query.length < 2) {
      return NextResponse.json({
        success: true,
        data: [],
        stats: { searchTime: 0, totalResults: 0 },
      })
    }

    const startTime = Date.now()

    // Use the ultra-fast autocomplete function
    const { data: results, error } = await supabase.rpc('autocomplete_search', {
      p_user_id: user.id,
      p_query: query,
      p_limit: limit,
    })

    if (error) {
      console.error('Autocomplete search error:', error)
      return NextResponse.json(
        { error: 'Autocomplete search failed' },
        { status: 500 }
      )
    }

    const searchTime = Date.now() - startTime

    // Transform results for autocomplete format
    const suggestions = (results || []).map((result: any) => ({
      id: result.id,
      title: result.title,
      matchType: result.match_type,
      score: result.rank,
    }))

    return NextResponse.json({
      success: true,
      data: suggestions,
      stats: {
        searchTime,
        totalResults: suggestions.length,
        autocomplete: true,
      },
    })
  } catch (error) {
    console.error('Autocomplete API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
