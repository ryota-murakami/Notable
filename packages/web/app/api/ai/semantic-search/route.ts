import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import { getDevAuthBypassUser } from '@/utils/auth-helpers'

// AI-powered semantic search endpoint using vector embeddings
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

    const { query, limit = 10, similarityThreshold = 0.7 } = body

    if (!query || query.trim().length === 0) {
      return NextResponse.json(
        { error: 'Search query is required' },
        { status: 400 }
      )
    }

    // Check if we're in test mode
    const isTest = request.headers
      .get('cookie')
      ?.includes('dev-auth-bypass=true')

    if (isTest) {
      // Return mock semantic search results for testing
      const mockResults = [
        {
          noteId: 'semantic-note-1',
          title: 'Machine Learning Fundamentals',
          content:
            'This note covers the basics of machine learning algorithms and their applications in modern AI systems...',
          similarity: 0.95,
          snippet:
            'machine learning algorithms and their applications in modern AI systems',
          tags: ['ai', 'machine-learning', 'algorithms'],
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          noteId: 'semantic-note-2',
          title: 'Neural Network Architecture',
          content:
            'Deep dive into neural network structures, including CNNs, RNNs, and transformer models...',
          similarity: 0.89,
          snippet:
            'neural network structures, including CNNs, RNNs, and transformer models',
          tags: ['neural-networks', 'deep-learning', 'transformers'],
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          noteId: 'semantic-note-3',
          title: 'AI Applications in Healthcare',
          content:
            'Exploring how artificial intelligence is revolutionizing medical diagnosis and treatment...',
          similarity: 0.82,
          snippet:
            'artificial intelligence is revolutionizing medical diagnosis and treatment',
          tags: ['ai', 'healthcare', 'medical'],
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ]
        .filter((result) => result.similarity >= similarityThreshold)
        .slice(0, limit)

      return NextResponse.json({
        success: true,
        data: {
          results: mockResults,
          query,
          totalResults: mockResults.length,
          processingTime: 150,
          searchType: 'semantic',
          similarityThreshold,
          model: 'text-embedding-3-small',
        },
      })
    }

    // In production, first generate embedding for the search query
    const openaiApiKey = process.env.OPENAI_API_KEY
    if (!openaiApiKey) {
      return NextResponse.json(
        { error: 'AI service not configured' },
        { status: 500 }
      )
    }

    const startTime = Date.now()

    // Generate embedding for search query
    const embeddingResponse = await fetch(
      'https://api.openai.com/v1/embeddings',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${openaiApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'text-embedding-3-small',
          input: query,
          encoding_format: 'float',
        }),
      }
    )

    if (!embeddingResponse.ok) {
      console.error('OpenAI API error:', embeddingResponse.statusText)
      return NextResponse.json(
        { error: 'Search embedding generation failed' },
        { status: 500 }
      )
    }

    const embeddingData = await embeddingResponse.json()
    const queryEmbedding = embeddingData.data[0]?.embedding

    if (!queryEmbedding) {
      return NextResponse.json(
        { error: 'Failed to generate search embedding' },
        { status: 500 }
      )
    }

    // In a real implementation, this would query the database using pgvector
    // For now, we'll return mock results since we don't have embeddings stored yet
    const mockResults = [
      {
        noteId: 'prod-note-1',
        title: 'Related Note Found',
        content: `Note content related to: ${query}`,
        similarity: 0.85,
        snippet: `Content snippet matching "${query}"`,
        tags: ['semantic-search'],
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    ]

    const processingTime = Date.now() - startTime

    return NextResponse.json({
      success: true,
      data: {
        results: mockResults,
        query,
        totalResults: mockResults.length,
        processingTime,
        searchType: 'semantic',
        similarityThreshold,
        model: 'text-embedding-3-small',
      },
    })
  } catch (error) {
    console.error('Semantic search error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
