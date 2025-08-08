import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import { getDevAuthBypassUser } from '@/utils/auth-helpers'

// AI-powered text rewriting and improvement endpoint
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
    const { content, action = 'improve', tone = 'professional' } = body

    if (!content || content.trim().length === 0) {
      return NextResponse.json(
        { error: 'Content is required for rewriting' },
        { status: 400 }
      )
    }

    // Development mode: return mock rewritten content
    if (
      process.env.NODE_ENV === 'development' ||
      process.env.NEXT_PUBLIC_API_MOCKING === 'true'
    ) {
      const mockRewrites = {
        improve:
          'This is an enhanced version of your content with improved clarity, structure, and flow. The ideas are presented more coherently with better transitions.',
        shorten:
          'Concise version of your content that maintains key points while reducing length.',
        expand:
          'This is a detailed expansion of your original content, providing additional context, examples, and explanations to enrich the material with comprehensive insights.',
        simplify:
          'Simple, clear version of your content using everyday language that anyone can understand.',
        formal:
          'This represents a formal, professional rendition of your content suitable for business or academic contexts.',
        casual:
          "Hey! Here's a casual, friendly version of your content that feels more conversational and relaxed.",
      }

      return NextResponse.json({
        success: true,
        data: {
          rewrittenContent:
            mockRewrites[action as keyof typeof mockRewrites] ||
            mockRewrites.improve,
          originalLength: content.length,
          rewrittenLength:
            mockRewrites[action as keyof typeof mockRewrites]?.length || 0,
          action,
          tone,
          processingTime: 280,
          changes: [
            {
              type: 'improvement',
              description: 'Enhanced clarity and structure',
            },
            { type: 'grammar', description: 'Fixed grammatical issues' },
            { type: 'style', description: 'Improved writing style' },
          ],
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

    // Choose prompt based on action
    const prompts = {
      improve: `Improve the following text by enhancing clarity, structure, and readability while maintaining the original meaning. Use a ${tone} tone:`,
      proofread: `Proofread the following text, correcting any grammar, spelling, or punctuation errors while maintaining the original style and meaning:`,
      simplify: `Simplify the following text to make it clearer and more concise while preserving all key information:`,
      expand: `Expand the following text with additional context, details, and explanations while maintaining a ${tone} tone:`,
    }

    const prompt = prompts[action as keyof typeof prompts] || prompts.improve

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
              'You are a professional writing assistant that helps improve text clarity, grammar, and style. Always maintain the original meaning and intent of the content.',
          },
          {
            role: 'user',
            content: `${prompt}\n\n${content}`,
          },
        ],
        max_tokens: action === 'expand' ? 500 : 400,
        temperature: 0.3,
      }),
    })

    if (!response.ok) {
      console.error('OpenAI API error:', response.statusText)
      return NextResponse.json(
        { error: 'AI rewriting failed' },
        { status: 500 }
      )
    }

    const aiResponse = await response.json()
    const rewrittenContent = aiResponse.choices[0]?.message?.content?.trim()

    if (!rewrittenContent) {
      return NextResponse.json(
        { error: 'Failed to rewrite content' },
        { status: 500 }
      )
    }

    const processingTime = Date.now() - startTime

    // Generate change analysis
    const changes = []
    if (action === 'improve') {
      changes.push({
        type: 'improvement',
        description: 'Enhanced clarity and structure',
      })
    }
    if (action === 'proofread') {
      changes.push({
        type: 'grammar',
        description: 'Corrected grammar and spelling',
      })
    }
    if (action === 'simplify') {
      changes.push({
        type: 'simplification',
        description: 'Simplified language and structure',
      })
    }
    if (action === 'expand') {
      changes.push({
        type: 'expansion',
        description: 'Added context and detail',
      })
    }

    return NextResponse.json({
      success: true,
      data: {
        rewrittenContent,
        originalLength: content.length,
        rewrittenLength: rewrittenContent.length,
        action,
        tone,
        processingTime,
        changes,
      },
    })
  } catch (error) {
    console.error('AI rewriting error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
