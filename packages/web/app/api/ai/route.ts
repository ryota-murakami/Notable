/**
 * AI Features API Endpoint
 * Handles all Premium AI functionality with usage tracking
 */

import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import { getDevAuthBypassUser } from '@/utils/auth-helpers'
import { aiService } from '@/lib/ai/service'
import {
  AIQuotaExceededError,
  AIRateLimitError,
  type AIRequest,
  AIRequestType,
  AIServiceError,
} from '@/lib/ai/types'

export async function POST(request: NextRequest) {
  const supabase = await createClient()

  try {
    // Authentication check
    const devBypassUser = await getDevAuthBypassUser()
    let user = devBypassUser

    if (!user) {
      const {
        data: { user: authUser },
        error: userError,
      } = await supabase.auth.getUser()

      if (userError || !authUser) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }
      user = authUser
    }

    // Parse request body
    const body = await request.json()
    const { type, input, context = {}, options = {} } = body

    // Validate request
    if (!type || !input) {
      return NextResponse.json(
        { error: 'Missing required fields: type, input' },
        { status: 400 }
      )
    }

    if (!Object.values(AIRequestType).includes(type)) {
      return NextResponse.json(
        { error: `Invalid AI request type: ${type}` },
        { status: 400 }
      )
    }

    // Create AI request
    const aiRequest: AIRequest = {
      userId: user.id,
      type: type as AIRequestType,
      input,
      context,
      options,
    }

    // Process AI request
    const startTime = Date.now()
    const response = await aiService.processRequest(aiRequest)
    const processingTime = Date.now() - startTime

    // Return success response
    return NextResponse.json({
      success: true,
      data: {
        id: response.id,
        type: response.type,
        content: response.content,
        metadata: response.metadata,
        processingTime,
        usage: response.usage,
      },
    })
  } catch (error) {
    console.error('AI API error:', error)

    // Handle specific AI service errors
    if (error instanceof AIRateLimitError) {
      return NextResponse.json(
        {
          error: 'Rate limit exceeded',
          code: 'RATE_LIMIT_EXCEEDED',
          resetTime: error.resetTime?.toISOString(),
        },
        { status: 429 }
      )
    }

    if (error instanceof AIQuotaExceededError) {
      return NextResponse.json(
        {
          error: 'AI usage quota exceeded',
          code: 'QUOTA_EXCEEDED',
          message: 'Upgrade to Premium for unlimited AI features',
        },
        { status: 402 } // Payment Required
      )
    }

    if (error instanceof AIServiceError) {
      const statusCode = error.code === 'PREMIUM_REQUIRED' ? 402 : 400
      return NextResponse.json(
        {
          error: error.message,
          code: error.code,
          retryable: error.retryable,
        },
        { status: statusCode }
      )
    }

    // Generic error handling
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  const supabase = await createClient()
  const { searchParams } = new URL(request.url)

  try {
    // Authentication check
    const devBypassUser = await getDevAuthBypassUser()
    let user = devBypassUser

    if (!user) {
      const {
        data: { user: authUser },
        error: userError,
      } = await supabase.auth.getUser()

      if (userError || !authUser) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }
      user = authUser
    }

    const action = searchParams.get('action')

    switch (action) {
      case 'usage':
        return handleUsageStats(supabase, user.id, searchParams)
      case 'limits':
        return handleUsageLimits(supabase, user.id, searchParams)
      case 'suggestions':
        return handleContentSuggestions(supabase, user.id, searchParams)
      default:
        return NextResponse.json(
          { error: 'Invalid action parameter' },
          { status: 400 }
        )
    }
  } catch (error) {
    console.error('AI API GET error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

/**
 * Handle usage statistics request
 */
async function handleUsageStats(
  supabase: any,
  userId: string,
  searchParams: URLSearchParams
) {
  const period = searchParams.get('period') || 'day'

  const { data, error } = await supabase.rpc('get_ai_usage_stats', {
    p_user_id: userId,
    p_period: period,
  })

  if (error) {
    console.error('Failed to get AI usage stats:', error)
    return NextResponse.json(
      { error: 'Failed to retrieve usage statistics' },
      { status: 500 }
    )
  }

  return NextResponse.json({
    success: true,
    data: {
      period,
      stats: data[0] || {
        request_count: 0,
        token_usage: 0,
        cost_cents: 0,
        by_type: {},
      },
    },
  })
}

/**
 * Handle usage limits check
 */
async function handleUsageLimits(
  supabase: any,
  userId: string,
  _searchParams: URLSearchParams
) {
  // Get user's subscription plan
  const { data: profile } = await supabase
    .from('profiles')
    .select('subscription_plan')
    .eq('id', userId)
    .single()

  const plan = profile?.subscription_plan || 'free'

  const { data, error } = await supabase.rpc('check_ai_usage_limit', {
    p_user_id: userId,
    p_plan: plan,
  })

  if (error) {
    console.error('Failed to check AI usage limits:', error)
    return NextResponse.json(
      { error: 'Failed to check usage limits' },
      { status: 500 }
    )
  }

  return NextResponse.json({
    success: true,
    data: {
      plan,
      limits: data[0] || {
        within_limit: false,
        current_usage: 0,
        limit_amount: 0,
        reset_date: new Date(),
      },
    },
  })
}

/**
 * Handle content suggestions request
 */
async function handleContentSuggestions(
  supabase: any,
  userId: string,
  searchParams: URLSearchParams
) {
  const noteId = searchParams.get('noteId')
  const suggestionType = searchParams.get('type')
  const status = searchParams.get('status') || 'pending'

  let query = supabase
    .from('ai_content_suggestions')
    .select('*')
    .eq('user_id', userId)
    .eq('status', status)
    .order('created_at', { ascending: false })
    .limit(20)

  if (noteId) {
    query = query.eq('note_id', noteId)
  }

  if (suggestionType) {
    query = query.eq('suggestion_type', suggestionType)
  }

  const { data, error } = await query

  if (error) {
    console.error('Failed to get AI content suggestions:', error)
    return NextResponse.json(
      { error: 'Failed to retrieve content suggestions' },
      { status: 500 }
    )
  }

  return NextResponse.json({
    success: true,
    data: {
      suggestions: data || [],
    },
  })
}

/**
 * Update content suggestion status
 */
export async function PATCH(request: NextRequest) {
  const supabase = await createClient()

  try {
    // Authentication check
    const devBypassUser = await getDevAuthBypassUser()
    let user = devBypassUser

    if (!user) {
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
    const { suggestionId, status, userFeedback } = body

    if (!suggestionId || !status) {
      return NextResponse.json(
        { error: 'Missing required fields: suggestionId, status' },
        { status: 400 }
      )
    }

    const { data, error } = await supabase
      .from('ai_content_suggestions')
      .update({
        status,
        user_feedback: userFeedback,
        updated_at: new Date().toISOString(),
      })
      .eq('id', suggestionId)
      .eq('user_id', user.id)
      .select()
      .single()

    if (error) {
      console.error('Failed to update AI suggestion:', error)
      return NextResponse.json(
        { error: 'Failed to update suggestion' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      data: { suggestion: data },
    })
  } catch (error) {
    console.error('AI API PATCH error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
