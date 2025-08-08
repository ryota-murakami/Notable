import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import { getDevAuthBypassUser } from '@/utils/auth-helpers'

// AI-powered search suggestions endpoint
export async function POST(request: NextRequest) {
  try {
    // Authentication
    const devBypassUser = await getDevAuthBypassUser()
    let user = devBypassUser

    if (!user) {
      const supabase = await createClient()
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
    const { query, context = 'general' } = body

    if (!query || query.trim().length === 0) {
      return NextResponse.json(
        { error: 'Query is required for search suggestions' },
        { status: 400 }
      )
    }

    // Development mode: return mock suggestions
    if (
      process.env.NODE_ENV === 'development' ||
      process.env.NEXT_PUBLIC_API_MOCKING === 'true'
    ) {
      const mockSuggestions = [
        {
          suggestion: query,
          reason: 'Exact match for your search query',
          confidence: 0.95,
          type: 'exact_match',
          category: 'primary',
        },
        {
          suggestion: `${query} best practices`,
          reason: 'Discover proven methods and approaches',
          confidence: 0.88,
          type: 'refinement',
        },
        {
          suggestion: `${query} tutorial`,
          reason: 'Look for step-by-step guides',
          confidence: 0.82,
          type: 'educational',
        },
        {
          suggestion: `${query} vs alternatives`,
          reason: 'Compare with similar topics',
          confidence: 0.75,
          type: 'comparison',
        },
      ]

      return NextResponse.json({
        success: true,
        data: {
          suggestions: mockSuggestions,
          originalQuery: query,
          context,
          processingTime: 150,
        },
      })
    }

    // In production, use OpenAI API
    const openaiApiKey = process.env.OPENAI_API_KEY
    if (!openaiApiKey) {
      return NextResponse.json(
        { error: 'AI service not configured' },
        { status: 500 }
      )
    }

    const startTime = Date.now()

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content:
              'You are a search assistant that helps users find better search queries. Given a search query, suggest 4-5 improved or related search terms that would help find more relevant information. Return suggestions as JSON array with suggestion, reason, confidence (0-1), and type fields.',
          },
          {
            role: 'user',
            content: `Given the search query "${query}" in the context of "${context}", suggest better search terms. Format as JSON: [{"suggestion": "improved query", "reason": "why this helps", "confidence": 0.9, "type": "expansion/refinement/educational/comparison"}]`,
          },
        ],
        max_tokens: 300,
        temperature: 0.4,
      }),
    })

    if (!response.ok) {
      console.error('OpenAI API error:', response.statusText)
      return NextResponse.json(
        { error: 'AI search suggestions failed' },
        { status: 500 }
      )
    }

    const aiResponse = await response.json()
    const content = aiResponse.choices[0]?.message?.content?.trim()

    if (!content) {
      return NextResponse.json(
        { error: 'Failed to generate search suggestions' },
        { status: 500 }
      )
    }

    let suggestions
    try {
      suggestions = JSON.parse(content)
    } catch {
      // Fallback if AI doesn't return valid JSON
      suggestions = [
        {
          suggestion: `${query} examples`,
          reason: 'Find practical examples',
          confidence: 0.8,
          type: 'expansion',
        },
      ]
    }

    const processingTime = Date.now() - startTime

    return NextResponse.json({
      success: true,
      data: {
        suggestions: Array.isArray(suggestions) ? suggestions : [suggestions],
        originalQuery: query,
        context,
        processingTime,
      },
    })
  } catch (error) {
    console.error('AI search suggestions error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
