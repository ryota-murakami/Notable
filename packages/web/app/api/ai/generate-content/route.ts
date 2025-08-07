import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import { getDevAuthBypassUser } from '@/utils/auth-helpers'

// AI-powered content generation endpoint
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

    let body
    try {
      body = await request.json()
    } catch (error) {
      console.error('JSON parsing error:', error)
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      )
    }

    const {
      prompt,
      generationType = 'continue',
      context = '',
      tone = 'professional',
      length = 'medium',
    } = body

    if (!prompt || prompt.trim().length === 0) {
      return NextResponse.json(
        { error: 'Prompt is required for content generation' },
        { status: 400 }
      )
    }

    // Development mode: return mock content
    if (
      process.env.NODE_ENV === 'development' ||
      process.env.NEXT_PUBLIC_API_MOCKING === 'true'
    ) {
      const mockGenerations = {
        continue:
          'This is mock continued content that flows naturally from your existing text...',
        brainstorm:
          '• Idea 1: Consider this approach\n• Idea 2: Alternative solution\n• Idea 3: Creative perspective',
        answer:
          'Here is a comprehensive mock answer to your question with detailed explanations...',
        outline:
          '1. Introduction\n   a. Background\n   b. Objectives\n2. Main Content\n   a. Key Points\n   b. Supporting Details\n3. Conclusion',
        ideas:
          '💡 Innovation Ideas:\n- Streamline the process\n- Implement automation\n- Enhance user experience\n\n🎯 Strategic Actions:\n- Short-term wins\n- Long-term vision\n- Resource optimization',
      }

      const generatedContent =
        mockGenerations[generationType as keyof typeof mockGenerations] ||
        mockGenerations.continue

      return NextResponse.json({
        success: true,
        data: {
          generatedContent,
          originalPrompt: prompt,
          generationType,
          tone,
          length,
          wordCount: generatedContent.split(' ').length,
          processingTime: 250,
          model: 'gpt-3.5-turbo',
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

    // Choose system prompt based on generation type
    const systemPrompts = {
      continue: `You are a writing assistant that continues text naturally. Given a prompt and optional context, generate coherent content that flows from the existing text. Use a ${tone} tone and aim for ${length} length.`,

      brainstorm: `You are a brainstorming assistant. Generate creative, diverse ideas related to the given prompt. Present ideas in a clear, organized format with brief explanations. Use a ${tone} tone.`,

      answer: `You are a knowledgeable assistant that answers questions based on context. Provide comprehensive, accurate answers to questions. Use the provided context when available. Use a ${tone} tone.`,

      outline: `You are an outline generator. Create structured, hierarchical outlines for the given topic. Include main sections, subsections, and key points. Use a ${tone} tone and ${length} detail level.`,

      ideas: `You are a creative idea generator. Generate innovative, actionable ideas related to the prompt. Categorize ideas by type (immediate actions, strategic approaches, creative solutions). Use a ${tone} tone.`,
    }

    const systemPrompt =
      systemPrompts[generationType as keyof typeof systemPrompts] ||
      systemPrompts.continue

    // Prepare user prompt with context
    let userPrompt = prompt
    if (context.trim()) {
      userPrompt = `Context: ${context}\n\nPrompt: ${prompt}`
    }

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
            content: systemPrompt,
          },
          {
            role: 'user',
            content: userPrompt,
          },
        ],
        max_tokens: length === 'short' ? 200 : length === 'long' ? 800 : 400,
        temperature:
          generationType === 'brainstorm' || generationType === 'ideas'
            ? 0.8
            : 0.7,
      }),
    })

    if (!response.ok) {
      console.error('OpenAI API error:', response.statusText)
      return NextResponse.json(
        { error: 'Content generation failed' },
        { status: 500 }
      )
    }

    const aiResponse = await response.json()
    const generatedContent = aiResponse.choices[0]?.message?.content?.trim()

    if (!generatedContent) {
      return NextResponse.json(
        { error: 'Failed to generate content' },
        { status: 500 }
      )
    }

    const processingTime = Date.now() - startTime

    return NextResponse.json({
      success: true,
      data: {
        generatedContent,
        originalPrompt: prompt,
        generationType,
        tone,
        length,
        wordCount: generatedContent.split(' ').length,
        processingTime,
        model: 'gpt-3.5-turbo',
        tokenUsage: aiResponse.usage,
      },
    })
  } catch (error) {
    console.error('Content generation error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
