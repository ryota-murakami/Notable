import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import { getDevAuthBypassUser } from '@/utils/auth-helpers'

// AI-powered auto-linking endpoint for discovering note connections
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
      noteId,
      content,
      title,
      limit = 5,
      similarityThreshold = 0.75,
    } = body

    if (!noteId || (!content && !title)) {
      return NextResponse.json(
        { error: 'Note ID and content/title are required for auto-linking' },
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
          noteId: 'auto-link-1',
          title: 'Machine Learning Fundamentals',
          similarity: 0.89,
          connectionReason:
            'Strong conceptual overlap in machine learning and AI topics',
          connectionType: 'topical',
          relevantSnippet:
            'fundamental concepts of machine learning algorithms and applications',
          tags: ['machine-learning', 'ai', 'fundamentals'],
          created_at: new Date(
            Date.now() - 7 * 24 * 60 * 60 * 1000
          ).toISOString(), // 7 days ago
          updated_at: new Date(
            Date.now() - 2 * 24 * 60 * 60 * 1000
          ).toISOString(), // 2 days ago
        },
        {
          noteId: 'auto-link-2',
          title: 'Neural Network Architecture Patterns',
          similarity: 0.82,
          connectionReason:
            'Related through deep learning concepts and neural network structures',
          connectionType: 'conceptual',
          relevantSnippet:
            'deep neural networks and their architectural design principles',
          tags: ['neural-networks', 'deep-learning', 'architecture'],
          created_at: new Date(
            Date.now() - 14 * 24 * 60 * 60 * 1000
          ).toISOString(), // 14 days ago
          updated_at: new Date(
            Date.now() - 5 * 24 * 60 * 60 * 1000
          ).toISOString(), // 5 days ago
        },
        {
          noteId: 'auto-link-3',
          title: 'Data Science Project Methodology',
          similarity: 0.78,
          connectionReason:
            'Shares methodology and process approaches for technical projects',
          connectionType: 'methodological',
          relevantSnippet:
            'systematic approach to data-driven projects and analysis',
          tags: ['data-science', 'methodology', 'projects'],
          created_at: new Date(
            Date.now() - 21 * 24 * 60 * 60 * 1000
          ).toISOString(), // 21 days ago
          updated_at: new Date(
            Date.now() - 1 * 24 * 60 * 60 * 1000
          ).toISOString(), // 1 day ago
        },
      ]
        .filter((suggestion) => suggestion.similarity >= similarityThreshold)
        .slice(0, limit)

      return NextResponse.json({
        success: true,
        data: {
          suggestions: mockSuggestions,
          sourceNoteId: noteId,
          totalSuggestions: mockSuggestions.length,
          processingTime: 180,
          analysisType: 'semantic_similarity',
          similarityThreshold,
          model: 'text-embedding-3-small',
        },
      })
    }

    // In production, use OpenAI API for embedding generation
    const openaiApiKey = process.env.OPENAI_API_KEY
    if (!openaiApiKey) {
      return NextResponse.json(
        { error: 'AI service not configured' },
        { status: 500 }
      )
    }

    const startTime = Date.now()

    // Combine title and content for better semantic understanding
    const textToAnalyze = title ? `${title}\n\n${content}` : content

    // Generate embedding for the note content
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
          input: textToAnalyze,
          encoding_format: 'float',
        }),
      }
    )

    if (!embeddingResponse.ok) {
      console.error('OpenAI API error:', embeddingResponse.statusText)
      return NextResponse.json(
        { error: 'Auto-linking analysis failed' },
        { status: 500 }
      )
    }

    const embeddingData = await embeddingResponse.json()
    const noteEmbedding = embeddingData.data[0]?.embedding

    if (!noteEmbedding) {
      return NextResponse.json(
        { error: 'Failed to analyze note content' },
        { status: 500 }
      )
    }

    // In a real implementation, this would:
    // 1. Query database for other notes' embeddings using pgvector
    // 2. Calculate cosine similarity with all other notes
    // 3. Return top matches above similarity threshold
    // 4. Include connection analysis explaining why notes are related

    // For now, return mock production results
    const mockProductionSuggestions = [
      {
        noteId: 'prod-link-1',
        title: 'Related Production Note',
        similarity: 0.85,
        connectionReason: `Semantically related to the content about: ${textToAnalyze.substring(0, 50)}...`,
        connectionType: 'semantic',
        relevantSnippet: 'Production content snippet...',
        tags: ['production'],
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    ]

    const processingTime = Date.now() - startTime

    return NextResponse.json({
      success: true,
      data: {
        suggestions: mockProductionSuggestions,
        sourceNoteId: noteId,
        totalSuggestions: mockProductionSuggestions.length,
        processingTime,
        analysisType: 'semantic_similarity',
        similarityThreshold,
        model: 'text-embedding-3-small',
      },
    })
  } catch (error) {
    console.error('Auto-linking error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
