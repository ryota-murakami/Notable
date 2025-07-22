import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { createClient } from '@supabase/supabase-js'
import type { AnalyticsBuffer } from '@/lib/analytics/custom'

// Initialize Supabase client with service role key for analytics
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  }
)

export async function POST(request: NextRequest) {
  try {
    // Verify request is from our app
    const headersList = headers()
    const origin = headersList.get('origin')
    const referer = headersList.get('referer')

    // Basic origin check
    if (
      process.env.NODE_ENV === 'production' &&
      origin !== process.env.NEXT_PUBLIC_APP_URL &&
      !referer?.startsWith(process.env.NEXT_PUBLIC_APP_URL!)
    ) {
      return NextResponse.json({ error: 'Invalid origin' }, { status: 403 })
    }

    const data: AnalyticsBuffer = await request.json()

    // Process events
    if (data.events.length > 0) {
      const { error: eventsError } = await supabase
        .from('analytics_events')
        .insert(
          data.events.map((event) => ({
            name: event.name,
            properties: event.properties,
            user_id: event.userId,
            session_id: event.sessionId,
            timestamp: new Date(event.timestamp || Date.now()).toISOString(),
          }))
        )

      if (eventsError) {
        console.error('Failed to insert events:', eventsError)
      }
    }

    // Process page views
    if (data.pageViews.length > 0) {
      const { error: pageViewsError } = await supabase
        .from('analytics_page_views')
        .insert(
          data.pageViews.map((pageView) => ({
            url: pageView.url,
            referrer: pageView.referrer,
            title: pageView.title,
            properties: pageView.properties,
            timestamp: new Date().toISOString(),
          }))
        )

      if (pageViewsError) {
        console.error('Failed to insert page views:', pageViewsError)
      }
    }

    // Process user identifications
    if (data.users.length > 0) {
      // Update user profiles
      for (const user of data.users) {
        const { error: userError } = await supabase
          .from('user_profiles')
          .upsert(
            {
              id: user.id,
              email: user.email,
              name: user.name,
              properties: user.properties,
              last_seen: new Date().toISOString(),
            },
            {
              onConflict: 'id',
            }
          )

        if (userError) {
          console.error('Failed to update user profile:', userError)
        }
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Analytics error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Get analytics summary
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const period = searchParams.get('period') || '7d'

    // Calculate date range
    const now = new Date()
    let startDate: Date

    switch (period) {
      case '24h':
        startDate = new Date(now.getTime() - 24 * 60 * 60 * 1000)
        break
      case '7d':
        startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
        break
      case '30d':
        startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
        break
      default:
        startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
    }

    // Get event counts
    const { data: eventCounts } = await supabase
      .from('analytics_events')
      .select('name, count', { count: 'exact' })
      .gte('timestamp', startDate.toISOString())
      .order('count', { ascending: false })
      .limit(10)

    // Get page view counts
    const { data: _pageViews, count: totalPageViews } = await supabase
      .from('analytics_page_views')
      .select('url', { count: 'exact' })
      .gte('timestamp', startDate.toISOString())

    // Get unique users
    const { count: uniqueUsers } = await supabase
      .from('analytics_events')
      .select('user_id', { count: 'exact', head: true })
      .gte('timestamp', startDate.toISOString())
      .not('user_id', 'is', null)

    return NextResponse.json({
      period,
      summary: {
        totalPageViews,
        uniqueUsers,
        topEvents: eventCounts,
      },
    })
  } catch (error) {
    console.error('Analytics summary error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
