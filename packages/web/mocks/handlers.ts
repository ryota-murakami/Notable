import { http, HttpResponse } from 'msw'

// Mock template data with all required fields
const MOCK_TEMPLATES = [
  {
    id: 'daily-journal',
    name: 'Daily Journal',
    description: 'Structured daily journal for reflection and planning',
    category: 'personal',
    categoryName: 'Personal',
    categoryIcon: '📝',
    tags: ['journal', 'daily', 'reflection', 'personal'],
    content: "# Daily Journal - {{date}}\n\n## Today's Overview\n",
    variables: [
      { name: 'date', label: 'Date', type: 'date', required: true },
      {
        name: 'mood',
        label: 'Mood',
        type: 'select',
        required: true,
        options: ['Great', 'Good', 'Neutral', 'Bad'],
      },
      { name: 'gratitude', label: 'Gratitude', type: 'text', required: true },
    ],
    isPublic: true,
    isSystem: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    usageCount: 150,
    rating: 4.8,
    ratingCount: 25,
    variableCount: 3,
  },
  {
    id: 'daily-standup',
    name: 'Daily Standup',
    description: 'Quick daily standup meeting notes',
    category: 'meeting',
    categoryName: 'Meeting Notes',
    categoryIcon: '👥',
    tags: ['meeting', 'standup', 'agile', 'daily'],
    content: '# Daily Standup - {{date}}\n\n## Yesterday\n',
    variables: [
      { name: 'date', label: 'Date', type: 'date', required: true },
      { name: 'yesterday', label: 'Yesterday', type: 'text', required: false },
      { name: 'today', label: 'Today', type: 'text', required: false },
      { name: 'blockers', label: 'Blockers', type: 'text', required: false },
    ],
    isPublic: true,
    isSystem: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    usageCount: 200,
    rating: 4.5,
    ratingCount: 40,
    variableCount: 4,
  },
  {
    id: 'weekly-team-meeting',
    name: 'Weekly Team Meeting',
    description: 'Comprehensive weekly team meeting template',
    category: 'meeting',
    categoryName: 'Meeting Notes',
    categoryIcon: '👥',
    tags: ['meeting', 'team', 'weekly'],
    content: '# Weekly Team Meeting - {{date}}\n\n## Agenda\n',
    variables: [
      { name: 'date', label: 'Date', type: 'date', required: true },
      { name: 'team', label: 'Team', type: 'text', required: true },
    ],
    isPublic: true,
    isSystem: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    usageCount: 175,
    rating: 4.6,
    ratingCount: 30,
    variableCount: 2,
  },
  {
    id: 'project-kickoff',
    name: 'Project Kickoff',
    description: 'Template for project kickoff meetings',
    category: 'project',
    categoryName: 'Projects',
    categoryIcon: '📁',
    tags: ['project', 'kickoff', 'planning'],
    content: '# Project Kickoff - {{project_name}}\n\n## Overview\n',
    variables: [
      {
        name: 'project_name',
        label: 'Project Name',
        type: 'text',
        required: true,
      },
      { name: 'start_date', label: 'Start Date', type: 'date', required: true },
    ],
    isPublic: true,
    isSystem: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    usageCount: 120,
    rating: 4.7,
    ratingCount: 20,
    variableCount: 2,
  },
]

const MOCK_CATEGORIES = [
  {
    id: 'personal',
    name: 'Personal',
    icon: '📝',
    description: 'Personal templates',
    displayOrder: 1,
    isSystem: true,
    templateCount: 1,
  },
  {
    id: 'meeting',
    name: 'Meeting Notes',
    icon: '👥',
    description: 'Meeting templates',
    displayOrder: 2,
    isSystem: true,
    templateCount: 2,
  },
  {
    id: 'project',
    name: 'Projects',
    icon: '📁',
    description: 'Project templates',
    displayOrder: 3,
    isSystem: true,
    templateCount: 1,
  },
  {
    id: 'work',
    name: 'Work',
    icon: '💼',
    description: 'Work templates',
    displayOrder: 4,
    isSystem: true,
    templateCount: 0,
  },
]

// Test user data
const TEST_USER = {
  id: '11111111-1111-1111-1111-111111111111',
  email: 'test@example.com',
  email_confirmed_at: new Date().toISOString(),
  phone: null,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  app_metadata: { provider: 'email', providers: ['email'] },
  user_metadata: { name: 'Test User' },
  role: 'authenticated',
  aud: 'authenticated',
}

const TEST_SESSION = {
  access_token: 'mock-access-token',
  token_type: 'bearer',
  expires_in: 3600,
  expires_at: Math.floor(Date.now() / 1000) + 3600,
  refresh_token: 'mock-refresh-token',
  user: TEST_USER,
}

// Define mock handlers for your API endpoints
export const handlers = [
  // Template API Handlers (with auth bypass for tests)
  http.get('*/api/templates/categories', ({ cookies }) => {
    // Allow access in test environment with dev-auth-bypass cookie
    if (!cookies['dev-auth-bypass'] && process.env.NODE_ENV !== 'test') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    return HttpResponse.json({
      data: MOCK_CATEGORIES,
      total: MOCK_CATEGORIES.length,
    })
  }),

  http.get('*/api/templates', ({ request, cookies }) => {
    // Allow access in test environment with dev-auth-bypass cookie
    if (!cookies['dev-auth-bypass'] && process.env.NODE_ENV !== 'test') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const url = new URL(request.url)
    const category = url.searchParams.get('category')
    const search = url.searchParams.get('search')
    const sort = url.searchParams.get('sort') || 'popular'

    let filteredTemplates = [...MOCK_TEMPLATES]

    // Filter by category
    if (category && category !== 'all') {
      filteredTemplates = filteredTemplates.filter(
        (t) => t.category === category
      )
    }

    // Filter by search
    if (search) {
      const searchLower = search.toLowerCase()
      filteredTemplates = filteredTemplates.filter(
        (t) =>
          t.name.toLowerCase().includes(searchLower) ||
          t.description.toLowerCase().includes(searchLower) ||
          t.tags?.some((tag) => tag.toLowerCase().includes(searchLower))
      )
    }

    // Sort
    if (sort === 'name') {
      filteredTemplates.sort((a, b) => a.name.localeCompare(b.name))
    }

    return HttpResponse.json({
      data: filteredTemplates,
      total: filteredTemplates.length,
    })
  }),

  http.get('*/api/templates/:id', ({ params, cookies }) => {
    // Allow access in test environment with dev-auth-bypass cookie
    if (!cookies['dev-auth-bypass'] && process.env.NODE_ENV !== 'test') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const template = MOCK_TEMPLATES.find((t) => t.id === params.id)
    if (template) {
      return HttpResponse.json({ data: template })
    }
    return HttpResponse.json({ error: 'Template not found' }, { status: 404 })
  }),

  // Mock other API endpoints that return 401
  http.get('*/api/search/history', ({ cookies }) => {
    if (!cookies['dev-auth-bypass'] && process.env.NODE_ENV !== 'test') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    return HttpResponse.json({
      data: [
        {
          id: 'search-1',
          query: 'TypeScript',
          timestamp: new Date().toISOString(),
          results_count: 5,
        },
        {
          id: 'search-2',
          query: 'React hooks',
          timestamp: new Date().toISOString(),
          results_count: 3,
        },
      ],
      total: 2,
    })
  }),

  http.get('*/api/search/saved', ({ cookies }) => {
    if (!cookies['dev-auth-bypass'] && process.env.NODE_ENV !== 'test') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    return HttpResponse.json({
      data: [
        {
          id: 'saved-1',
          name: 'TypeScript Notes',
          query: 'TypeScript',
          filters: { tags: ['programming'] },
          created_at: new Date().toISOString(),
        },
        {
          id: 'saved-2',
          name: 'React Documentation',
          query: 'React docs',
          filters: { folders: ['docs'] },
          created_at: new Date().toISOString(),
        },
      ],
      total: 2,
    })
  }),

  http.get('*/api/tags', ({ cookies }) => {
    if (!cookies['dev-auth-bypass'] && process.env.NODE_ENV !== 'test') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    return HttpResponse.json({ data: [], total: 0 })
  }),

  // Mock Supabase auth endpoints
  http.post('*/auth/v1/token', async ({ request }) => {
    const url = new URL(request.url)
    const grantType = url.searchParams.get('grant_type')

    if (grantType === 'password') {
      // Email/password login
      return HttpResponse.json(TEST_SESSION)
    } else if (grantType === 'refresh_token') {
      // Token refresh
      return HttpResponse.json(TEST_SESSION)
    }

    return HttpResponse.json(TEST_SESSION)
  }),

  // Mock Supabase user endpoint
  http.get('*/auth/v1/user', ({ request }) => {
    const authHeader = request.headers.get('authorization')

    if (!authHeader || !authHeader.includes('Bearer')) {
      return new HttpResponse(null, { status: 401 })
    }

    return HttpResponse.json(TEST_USER)
  }),

  // Mock Supabase signup endpoint
  http.post('*/auth/v1/signup', async ({ request }) => {
    const body = (await request.json()) as { email?: string; password?: string }

    if (!body.email || !body.password) {
      return HttpResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    return HttpResponse.json({
      id: TEST_USER.id,
      email: body.email,
      confirmation_sent_at: new Date().toISOString(),
    })
  }),

  // Mock OAuth authorization endpoint
  http.get('*/auth/v1/authorize', ({ request }) => {
    const url = new URL(request.url)
    const provider = url.searchParams.get('provider')
    const redirectTo = url.searchParams.get('redirect_to')

    if (provider === 'google') {
      // Simulate OAuth redirect
      return new HttpResponse(null, {
        status: 302,
        headers: {
          Location: `${redirectTo}?code=mock-oauth-code&state=mock-state`,
        },
      })
    }

    return new HttpResponse(null, { status: 400 })
  }),

  // Mock Resend API for email sending
  http.post('https://api.resend.com/emails', async ({ request }) => {
    const body = (await request.json()) as { to?: string; subject?: string }

    return HttpResponse.json({
      id: `resend-${Date.now()}`,
      to: body.to,
      subject: body.subject,
      created_at: new Date().toISOString(),
    })
  }),

  // Mock OAuth callback
  http.post('*/auth/v1/callback', async ({ request }) => {
    const body = (await request.json()) as { code?: string }

    if (body.code === 'mock-oauth-code') {
      return HttpResponse.json(TEST_SESSION)
    }

    return HttpResponse.json(
      { error: 'Invalid authorization code' },
      { status: 400 }
    )
  }),

  // Mock notes endpoints
  http.get('*/rest/v1/notes', () => {
    return HttpResponse.json([
      {
        id: 'n1111111-1111-1111-1111-111111111111',
        title: 'Welcome to Notable',
        content:
          '{"type": "doc", "content": [{"type": "paragraph", "content": [{"type": "text", "text": "Welcome to Notable! This is your first note."}]}]}',
        user_id: TEST_USER.id,
        folder_id: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        id: 'n2222222-2222-2222-2222-222222222222',
        title: 'Meeting Notes',
        content:
          '{"type": "doc", "content": [{"type": "heading", "attrs": {"level": 2}, "content": [{"type": "text", "text": "Team Meeting"}]}, {"type": "paragraph", "content": [{"type": "text", "text": "Discussed project roadmap and upcoming features."}]}]}',
        user_id: TEST_USER.id,
        folder_id: 'f1111111-1111-1111-1111-111111111111',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    ])
  }),

  http.post('*/rest/v1/notes', async ({ request }) => {
    const body = (await request.json()) as Record<string, any>
    return HttpResponse.json({
      id: `n${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      ...body,
      user_id: TEST_USER.id,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
  }),

  http.patch('*/rest/v1/notes', async ({ request }) => {
    const body = (await request.json()) as Record<string, any>
    return HttpResponse.json({
      ...body,
      updated_at: new Date().toISOString(),
    })
  }),

  http.delete('*/rest/v1/notes', () => {
    return new HttpResponse(null, {
      status: 204,
    })
  }),

  // Mock sync endpoints
  http.post('*/api/sync/offline-changes', async ({ request }) => {
    const body = (await request.json()) as { changes?: any[] }
    return HttpResponse.json({
      success: true,
      syncedChanges: body?.changes || [],
      timestamp: new Date().toISOString(),
    })
  }),

  // Mock Y.js endpoints
  http.get('*/api/yjs/awareness/:docId', ({ params }) => {
    return HttpResponse.json({
      docId: params.docId,
      awareness: {},
      clients: [],
    })
  }),

  http.post('*/api/yjs/update/:docId', ({ params }) => {
    return HttpResponse.json({
      docId: params.docId,
      success: true,
      version: 1,
    })
  }),

  // Mock upload endpoints (if needed)
  http.post('*/api/upload', () => {
    return HttpResponse.json({
      url: 'https://example.com/uploaded-file.jpg',
      key: 'uploaded-file.jpg',
    })
  }),

  // Mock AI endpoints
  http.post('*/api/ai/generate-content', async ({ request }) => {
    const body = (await request.json()) as {
      prompt?: string
      generationType?: string
      tone?: string
      length?: string
    }

    if (!body.prompt) {
      return HttpResponse.json(
        { error: 'Prompt is required for content generation' },
        { status: 400 }
      )
    }

    const mockGenerations: Record<string, string> = {
      continue: `${body.prompt} This is AI-generated continuation of your content. The system has analyzed your existing text and generated relevant, contextual content that flows naturally from your original ideas.`,
      brainstorm: `## Brainstorming Ideas for: "${body.prompt}"\n\n1. Explore different perspectives\n2. Break down complex concepts\n3. Consider real-world applications`,
      answer: `**Answer to your question:** "${body.prompt}"\n\nThis is a comprehensive response that addresses your query with detailed explanations and actionable insights.`,
      outline: `# ${body.prompt}\n## I. Introduction\n- Background and context\n## II. Main Content\n- Core principles\n## III. Conclusion`,
      ideas: `💡 **Creative Ideas Related to: "${body.prompt}"**\n🎯 Immediate Actions\n🚀 Strategic Approaches\n🔧 Implementation Ideas`,
    }

    const generatedContent =
      mockGenerations[body.generationType || 'continue'] ||
      mockGenerations.continue

    return HttpResponse.json({
      success: true,
      data: {
        generatedContent,
        originalPrompt: body.prompt,
        generationType: body.generationType || 'continue',
        tone: body.tone || 'professional',
        length: body.length || 'medium',
        wordCount: generatedContent.split(' ').length,
        processingTime: 150,
        model: 'gpt-3.5-turbo',
      },
    })
  }),

  http.post('*/api/ai/semantic-search', async ({ request }) => {
    const body = (await request.json()) as { query?: string; limit?: number }

    if (!body.query) {
      return HttpResponse.json(
        { error: 'Search query is required' },
        { status: 400 }
      )
    }

    return HttpResponse.json({
      success: true,
      data: {
        results: [
          {
            id: 'n1111111-1111-1111-1111-111111111111',
            title: 'Welcome to Notable',
            content: 'Welcome to Notable! This is your first note.',
            similarity: 0.95,
            userId: TEST_USER.id,
          },
          {
            id: 'n2222222-2222-2222-2222-222222222222',
            title: 'Meeting Notes',
            content: 'Team meeting discussion about project roadmap.',
            similarity: 0.82,
            userId: TEST_USER.id,
          },
        ],
        query: body.query,
        processingTime: 120,
        totalResults: 2,
      },
    })
  }),

  http.post('*/api/ai/summarize', async ({ request }) => {
    const body = (await request.json()) as { content?: string; length?: string }

    if (!body.content) {
      return HttpResponse.json(
        { error: 'Content is required for summarization' },
        { status: 400 }
      )
    }

    return HttpResponse.json({
      success: true,
      data: {
        summary:
          'This is a concise AI-generated summary of the provided content, highlighting the key points and main ideas.',
        originalLength: body.content.length,
        summaryLength: 120,
        compressionRatio: 0.85,
        keyPoints: [
          'Main concept or theme',
          'Important details',
          'Key conclusions',
        ],
        processingTime: 180,
      },
    })
  }),

  http.post('*/api/ai/rewrite', async ({ request }) => {
    const body = (await request.json()) as {
      content?: string
      style?: string
      tone?: string
    }

    if (!body.content) {
      return HttpResponse.json(
        { error: 'Content is required for rewriting' },
        { status: 400 }
      )
    }

    return HttpResponse.json({
      success: true,
      data: {
        rewrittenContent: `This is the AI-rewritten version of your content, adapted to match the requested style and tone while preserving the original meaning and key information.`,
        originalContent: body.content,
        style: body.style || 'professional',
        tone: body.tone || 'neutral',
        improvements: ['Enhanced clarity', 'Improved structure', 'Better flow'],
        processingTime: 200,
      },
    })
  }),

  http.post('*/api/ai/search-suggestions', async ({ request }) => {
    const body = (await request.json()) as { query?: string }

    return HttpResponse.json({
      success: true,
      data: {
        suggestions: [
          'meeting notes 2024',
          'project roadmap',
          'team collaboration',
          'productivity tips',
          'notable features',
        ],
        originalQuery: body.query || '',
        processingTime: 50,
      },
    })
  }),

  http.post('*/api/ai/auto-linking', async ({ request }) => {
    const body = (await request.json()) as { content?: string }

    if (!body.content) {
      return HttpResponse.json(
        { error: 'Content is required for auto-linking' },
        { status: 400 }
      )
    }

    return HttpResponse.json({
      success: true,
      data: {
        linkedContent: body.content,
        suggestedLinks: [
          {
            text: 'project',
            noteId: 'n2222222-2222-2222-2222-222222222222',
            noteTitle: 'Meeting Notes',
            confidence: 0.9,
          },
        ],
        processingTime: 100,
      },
    })
  }),

  http.post('*/api/ai/embeddings/generate', async ({ request }) => {
    const body = (await request.json()) as { text?: string }

    if (!body.text) {
      return HttpResponse.json(
        { error: 'Text is required for embedding generation' },
        { status: 400 }
      )
    }

    // Mock embedding vector (1536 dimensions for OpenAI)
    const mockEmbedding = Array.from(
      { length: 1536 },
      () => Math.random() * 2 - 1
    )

    return HttpResponse.json({
      success: true,
      data: {
        embedding: mockEmbedding,
        model: 'text-embedding-ada-002',
        usage: {
          prompt_tokens: body.text.split(' ').length,
          total_tokens: body.text.split(' ').length,
        },
        processingTime: 80,
      },
    })
  }),

  // Mock OpenAI API endpoints (in case direct calls are made)
  http.post(
    'https://api.openai.com/v1/chat/completions',
    async ({ request }) => {
      const body = (await request.json()) as {
        messages?: Array<{ role: string; content: string }>
      }

      const lastMessage =
        body.messages?.[body.messages.length - 1]?.content || 'Hello'

      return HttpResponse.json({
        id: 'chatcmpl-mock',
        object: 'chat.completion',
        created: Math.floor(Date.now() / 1000),
        model: 'gpt-3.5-turbo',
        choices: [
          {
            index: 0,
            message: {
              role: 'assistant',
              content: `This is a mock AI response to: "${lastMessage}". The system has processed your request and generated this contextual response.`,
            },
            finish_reason: 'stop',
          },
        ],
        usage: {
          prompt_tokens: 50,
          completion_tokens: 25,
          total_tokens: 75,
        },
      })
    }
  ),

  http.post('https://api.openai.com/v1/embeddings', async ({ request }) => {
    const body = (await request.json()) as { input?: string }

    return HttpResponse.json({
      object: 'list',
      model: 'text-embedding-ada-002',
      data: [
        {
          object: 'embedding',
          index: 0,
          embedding: Array.from({ length: 1536 }, () => Math.random() * 2 - 1),
        },
      ],
      usage: {
        prompt_tokens: (body.input || '').split(' ').length,
        total_tokens: (body.input || '').split(' ').length,
      },
    })
  }),

  // Mock auth callback (GET method for OAuth flow)
  http.get('*/auth/callback', ({ request }) => {
    const url = new URL(request.url)
    const code = url.searchParams.get('code')

    if (code === 'mock-oauth-code') {
      // Successful OAuth callback - redirect to app
      return new HttpResponse(null, {
        status: 302,
        headers: {
          Location: '/app',
          'Set-Cookie':
            'sb-access-token=mock-access-token; Path=/; HttpOnly; Secure; SameSite=Lax',
        },
      })
    }

    // Error in OAuth flow - redirect to auth with error
    return new HttpResponse(null, {
      status: 302,
      headers: {
        Location: '/auth?error=oauth_error',
      },
    })
  }),

  // Default handler for unhandled requests
  http.all('*', ({ request }) => {
    console.warn(`Unhandled request: ${request.method} ${request.url}`)
    return new HttpResponse(null, { status: 404 })
  }),

  // Mock Notes API endpoints
  http.get('*/api/notes', ({ request }) => {
    const url = new URL(request.url)
    const limit = parseInt(url.searchParams.get('limit') || '10')
    const offset = parseInt(url.searchParams.get('offset') || '0')

    const mockNotes = [
      {
        id: 'note-1',
        title: 'Test Note 1',
        content: { type: 'doc', content: [] },
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        user_id: '11111111-1111-1111-1111-111111111111',
        folder_id: null,
        is_public: false,
      },
      {
        id: 'note-2',
        title: 'Test Note 2',
        content: { type: 'doc', content: [] },
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        user_id: '11111111-1111-1111-1111-111111111111',
        folder_id: null,
        is_public: false,
      },
    ]

    const paginatedNotes = mockNotes.slice(offset, offset + limit)

    return HttpResponse.json({
      notes: paginatedNotes,
      total: mockNotes.length,
    })
  }),

  http.get('*/api/notes/:id', ({ params }) => {
    const { id } = params

    return HttpResponse.json({
      note: {
        id: id as string,
        title: 'Test Note',
        content: { type: 'doc', content: [] },
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        user_id: '11111111-1111-1111-1111-111111111111',
        folder_id: null,
        is_public: false,
      },
    })
  }),

  http.post('*/api/notes', async ({ request }) => {
    const body = (await request.json()) as any
    const noteId = `mock-note-${Date.now()}`

    return HttpResponse.json({
      note: {
        id: noteId,
        title: body.title || 'Untitled',
        content: body.content || { type: 'doc', content: [] },
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        user_id: '11111111-1111-1111-1111-111111111111',
        folder_id: body.folder_id || null,
        is_public: body.is_public || false,
      },
    })
  }),

  http.put('*/api/notes/:id', async ({ request, params }) => {
    const { id } = params
    const body = (await request.json()) as any

    return HttpResponse.json({
      note: {
        id: id as string,
        title: body.title || 'Updated Note',
        content: body.content || { type: 'doc', content: [] },
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        user_id: '11111111-1111-1111-1111-111111111111',
        folder_id: body.folder_id || null,
        is_public: body.is_public || false,
      },
    })
  }),

  http.delete('*/api/notes/:id', ({ params }) => {
    return HttpResponse.json({
      success: true,
      message: `Note ${params.id} deleted successfully`,
    })
  }),

  // Comprehensive search API mocks
  http.get('*/api/search', ({ request, cookies }) => {
    if (!cookies['dev-auth-bypass'] && process.env.NODE_ENV !== 'test') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const url = new URL(request.url)
    const query = url.searchParams.get('q') || ''

    // Mock search results
    const mockResults = query
      ? [
          {
            id: 'note-1',
            title: 'Test Note 1',
            content: 'This is a test note with searchable content',
            excerpt: `...${query}...`,
            type: 'note',
            score: 0.9,
            highlights: [query],
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          },
          {
            id: 'note-2',
            title: 'Test Note 2',
            content: `Another note containing ${query}`,
            excerpt: `Another note containing ${query}...`,
            type: 'note',
            score: 0.8,
            highlights: [query],
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          },
        ]
      : []

    return HttpResponse.json({
      results: mockResults,
      total: mockResults.length,
      query,
    })
  }),

  http.post('*/api/search/advanced', async ({ request, cookies }) => {
    if (!cookies['dev-auth-bypass'] && process.env.NODE_ENV !== 'test') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = (await request.json()) as any
    const query = body.query || ''

    return HttpResponse.json({
      results: query
        ? [
            {
              id: 'advanced-result-1',
              title: 'Advanced Search Result',
              content: 'Content matching advanced search criteria',
              type: 'note',
              score: 0.95,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            },
          ]
        : [],
      total: query ? 1 : 0,
      query,
      filters: body.filters || {},
    })
  }),

  http.get('*/api/search/autocomplete', ({ request, cookies }) => {
    if (!cookies['dev-auth-bypass'] && process.env.NODE_ENV !== 'test') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const url = new URL(request.url)
    const query = url.searchParams.get('q') || ''

    return HttpResponse.json({
      suggestions: query
        ? [`${query} in notes`, `${query} in templates`, `${query} in tags`]
        : [],
    })
  }),

  http.get('*/api/search/suggestions', ({ request, cookies }) => {
    if (!cookies['dev-auth-bypass'] && process.env.NODE_ENV !== 'test') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const url = new URL(request.url)
    const query = url.searchParams.get('q') || ''

    return HttpResponse.json({
      suggestions: query
        ? [
            { text: `${query} TypeScript`, type: 'topic' },
            { text: `${query} React`, type: 'topic' },
            { text: `${query} documentation`, type: 'category' },
          ]
        : [],
    })
  }),

  http.post('*/api/search/history', async ({ request, cookies }) => {
    if (!cookies['dev-auth-bypass'] && process.env.NODE_ENV !== 'test') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = (await request.json()) as any

    return HttpResponse.json({
      success: true,
      history: {
        id: `search-${Date.now()}`,
        query: body.query,
        timestamp: new Date().toISOString(),
        results_count: body.results_count || 0,
      },
    })
  }),

  http.post('*/api/search/saved', async ({ request, cookies }) => {
    if (!cookies['dev-auth-bypass'] && process.env.NODE_ENV !== 'test') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = (await request.json()) as any

    return HttpResponse.json({
      success: true,
      search: {
        id: `saved-${Date.now()}`,
        name: body.name,
        query: body.query,
        filters: body.filters || {},
        created_at: new Date().toISOString(),
      },
    })
  }),

  http.delete('*/api/search/saved/:id', ({ params, cookies }) => {
    if (!cookies['dev-auth-bypass'] && process.env.NODE_ENV !== 'test') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    return HttpResponse.json({
      success: true,
      message: `Saved search ${params.id} deleted`,
    })
  }),
]
