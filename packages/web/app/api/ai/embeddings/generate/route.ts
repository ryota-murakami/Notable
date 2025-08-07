import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import { getDevAuthBypassUser } from '@/utils/auth-helpers'

// AI-powered embeddings generation endpoint for semantic search
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

    const { text, noteId } = body

    if (!text || text.trim().length === 0) {
      return NextResponse.json(
        { error: 'Text content is required for embedding generation' },
        { status: 400 }
      )
    }

    // Development mode: return mock embedding
    if (
      process.env.NODE_ENV === 'development' ||
      process.env.NEXT_PUBLIC_API_MOCKING === 'true'
    ) {
      // Generate a mock embedding vector (1536 dimensions for text-embedding-3-small)
      const mockEmbedding = Array.from(
        { length: 1536 },
        () => (Math.random() - 0.5) * 2
      )

      return NextResponse.json({
        success: true,
        data: {
          embedding: mockEmbedding,
          noteId,
          dimensions: mockEmbedding.length,
          model: 'text-embedding-3-small',
          processingTime: 150,
          textLength: text.length,
          tokenCount: Math.ceil(text.length / 4),
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

    const response = await fetch('https://api.openai.com/v1/embeddings', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'text-embedding-3-small',
        input: text,
        encoding_format: 'float',
      }),
    })

    if (!response.ok) {
      console.error('OpenAI API error:', response.statusText)
      return NextResponse.json(
        { error: 'Embedding generation failed' },
        { status: 500 }
      )
    }

    const aiResponse = await response.json()
    const embedding = aiResponse.data[0]?.embedding

    if (!embedding) {
      return NextResponse.json(
        { error: 'Failed to generate embedding' },
        { status: 500 }
      )
    }

    const processingTime = Date.now() - startTime

    return NextResponse.json({
      success: true,
      data: {
        embedding,
        noteId,
        dimensions: embedding.length,
        model: 'text-embedding-3-small',
        processingTime,
        textLength: text.length,
        tokenCount: aiResponse.usage?.total_tokens || 0,
      },
    })
  } catch (error) {
    console.error('Embedding generation error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
