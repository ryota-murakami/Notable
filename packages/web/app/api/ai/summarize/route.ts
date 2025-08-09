import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import { getDevAuthBypassUser } from '@/utils/auth-helpers'

// AI-powered note summarization endpoint
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
    const { content, summaryType = 'brief' } = body

    if (!content || content.trim().length === 0) {
      return NextResponse.json(
        { error: 'Content is required for summarization' },
        { status: 400 }
      )
    }

    // Development mode: return mock summary
    if (
      process.env.NODE_ENV === 'development' ||
      process.env.NEXT_PUBLIC_API_MOCKING === 'true'
    ) {
      const mockSummaries = {
        brief:
          'This is a concise summary highlighting the main points and key takeaways from your content.',
        detailed:
          'This comprehensive summary covers all major themes, supporting details, and important nuances present in your original content, providing a thorough overview while maintaining the essential structure and meaning.',
        bullets:
          '• Main point 1: Primary concept or idea\n• Main point 2: Supporting argument or detail\n• Main point 3: Conclusion or key takeaway\n• Additional insight: Context or implication',
        executive:
          'Executive Summary: This content addresses [key topic] through [main approach]. Key findings include [primary insights]. Recommendations focus on [actionable items]. Expected outcomes involve [projected results].',
      }

      return NextResponse.json({
        success: true,
        data: {
          summary:
            mockSummaries[summaryType as keyof typeof mockSummaries] ||
            mockSummaries.brief,
          originalLength: content.length,
          summaryLength:
            mockSummaries[summaryType as keyof typeof mockSummaries]?.length ||
            0,
          compressionRatio: 0.15,
          summaryType,
          processingTime: 350,
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

    // Choose prompt based on summary type
    const prompts = {
      brief:
        'Provide a brief, concise summary of the following note content in 1-2 sentences:',
      detailed:
        'Provide a detailed summary of the following note content, highlighting key points and insights:',
      bullet:
        'Summarize the following note content as clear bullet points, highlighting the main ideas:',
    }

    const prompt = prompts[summaryType as keyof typeof prompts] || prompts.brief

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
              'You are a helpful AI assistant that creates clear, accurate summaries of note content. Focus on extracting key insights and maintaining the original meaning.',
          },
          {
            role: 'user',
            content: `${prompt}\n\n${content}`,
          },
        ],
        max_tokens:
          summaryType === 'detailed'
            ? 300
            : summaryType === 'bullet'
              ? 200
              : 100,
        temperature: 0.3,
      }),
    })

    if (!response.ok) {
      console.error('OpenAI API error:', response.statusText)
      return NextResponse.json(
        { error: 'AI summarization failed' },
        { status: 500 }
      )
    }

    const aiResponse = await response.json()
    const summary = aiResponse.choices[0]?.message?.content?.trim()

    if (!summary) {
      return NextResponse.json(
        { error: 'Failed to generate summary' },
        { status: 500 }
      )
    }

    const processingTime = Date.now() - startTime

    return NextResponse.json({
      success: true,
      data: {
        summary,
        originalLength: content.length,
        summaryLength: summary.length,
        compressionRatio: summary.length / content.length,
        summaryType,
        processingTime,
      },
    })
  } catch (error) {
    console.error('AI summarization error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
