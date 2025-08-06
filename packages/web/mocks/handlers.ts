import { http, HttpResponse } from 'msw'

// Helper function to check if requests should be allowed
const isRequestAllowed = (cookies: Record<string, string>) => {
  const isMockingEnabled = process.env.NEXT_PUBLIC_API_MOCKING === 'enabled'
  const hasAuthBypass = cookies['dev-auth-bypass'] === 'true'
  const isTestEnv = process.env.NODE_ENV === 'test'

  return hasAuthBypass || isTestEnv || isMockingEnabled
}

// Stateful note storage for tests
const mockNoteStore: Array<{
  id: string
  title: string
  content: any
  created_at: string
  updated_at: string
  user_id: string
  folder_id: string | null
  is_public: boolean
}> = [
  {
    id: 'note-default-1',
    title: 'Welcome to Notable',
    content: {
      type: 'doc',
      content: [
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'Welcome to Notable! This is your first note.',
            },
          ],
        },
      ],
    },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    user_id: 'mock-user-id',
    folder_id: null,
    is_public: false,
  },
]

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
  id: 'mock-user-id',
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

// Mock folder data
const MOCK_FOLDERS = [
  {
    id: 'folder-1',
    name: 'Projects',
    parentId: null,
    user_id: TEST_USER.id,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'folder-2',
    name: 'Web Development',
    parentId: 'folder-1',
    user_id: TEST_USER.id,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'folder-3',
    name: 'Meeting Notes',
    parentId: null,
    user_id: TEST_USER.id,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
]

// Define mock handlers for your API endpoints
export const handlers = [
  // Folders API
  http.get('*/api/folders', ({ cookies }) => {
    // Allow access in test environment with dev-auth-bypass cookie
    if (!cookies['dev-auth-bypass'] && process.env.NODE_ENV !== 'test') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    console.info('[MSW] GET /api/folders - returning mock folders')
    return HttpResponse.json({
      success: true,
      data: MOCK_FOLDERS,
      total: MOCK_FOLDERS.length,
    })
  }),

  http.post('*/api/folders', async ({ request, cookies }) => {
    if (!cookies['dev-auth-bypass'] && process.env.NODE_ENV !== 'test') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = (await request.json()) as {
      name: string
      parent_id?: string | null
    }

    const newFolder = {
      id: `folder-${Date.now()}`,
      name: body.name,
      parentId: body.parent_id || null,
      user_id: TEST_USER.id,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    MOCK_FOLDERS.push(newFolder)

    console.info('[MSW] POST /api/folders - created folder:', newFolder)
    return HttpResponse.json({
      success: true,
      data: newFolder,
    })
  }),

  http.put('*/api/folders/:id', async ({ request, params, cookies }) => {
    if (!cookies['dev-auth-bypass'] && process.env.NODE_ENV !== 'test') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = (await request.json()) as {
      name?: string
      parent_id?: string | null
    }
    const folderId = params.id as string

    const folderIndex = MOCK_FOLDERS.findIndex((f) => f.id === folderId)
    if (folderIndex === -1) {
      return HttpResponse.json({ error: 'Folder not found' }, { status: 404 })
    }

    const updatedFolder = {
      ...MOCK_FOLDERS[folderIndex],
      ...(body.name && { name: body.name }),
      ...(body.parent_id !== undefined && { parentId: body.parent_id }),
      updated_at: new Date().toISOString(),
    }

    MOCK_FOLDERS[folderIndex] = updatedFolder

    console.info('[MSW] PUT /api/folders/:id - updated folder:', updatedFolder)
    return HttpResponse.json({
      success: true,
      data: updatedFolder,
    })
  }),

  http.delete('*/api/folders/:id', ({ params, cookies }) => {
    if (!cookies['dev-auth-bypass'] && process.env.NODE_ENV !== 'test') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const folderId = params.id as string
    const folderIndex = MOCK_FOLDERS.findIndex((f) => f.id === folderId)

    if (folderIndex === -1) {
      return HttpResponse.json({ error: 'Folder not found' }, { status: 404 })
    }

    MOCK_FOLDERS.splice(folderIndex, 1)

    console.info('[MSW] DELETE /api/folders/:id - deleted folder:', folderId)
    return HttpResponse.json({
      success: true,
      message: 'Folder deleted successfully',
    })
  }),

  http.get('*/api/folders/:id', ({ params, cookies }) => {
    if (!cookies['dev-auth-bypass'] && process.env.NODE_ENV !== 'test') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const folderId = params.id as string
    const folder = MOCK_FOLDERS.find((f) => f.id === folderId)

    if (!folder) {
      return HttpResponse.json({ error: 'Folder not found' }, { status: 404 })
    }

    console.info('[MSW] GET /api/folders/:id - returning folder:', folder)
    return HttpResponse.json({
      success: true,
      data: folder,
    })
  }),

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

  // Search history endpoint - MUST be before graph handler to avoid pattern conflicts
  http.get('*/api/search/history', ({ cookies }) => {
    if (!cookies['dev-auth-bypass'] && process.env.NODE_ENV !== 'test') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Return mock search history
    return HttpResponse.json({
      data: [
        {
          id: 'search-1',
          query: 'typescript',
          timestamp: new Date(Date.now() - 60000).toISOString(),
          results_count: 5,
        },
        {
          id: 'search-2',
          query: 'react hooks',
          timestamp: new Date(Date.now() - 120000).toISOString(),
          results_count: 3,
        },
      ],
      total: 2,
    })
  }),

  // Mock other API endpoints that return 401
  // Graph API handler for enhanced graph view
  http.get('*/api/graph', ({ cookies }) => {
    console.info('MSW Graph API handler called!')
    console.info('Cookies:', cookies)

    return HttpResponse.json({
      success: true,
      data: {
        nodes: [
          {
            id: 'note-1',
            label: 'Test Note 1',
            title: 'Test Note 1',
            connections: 2,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            tags: [],
          },
          {
            id: 'note-2',
            label: 'Test Note 2',
            title: 'Test Note 2',
            connections: 2,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            tags: [],
          },
        ],
        edges: [
          {
            from: 'note-1',
            to: 'note-2',
            label: 'links to',
            title: 'Test Note 1 links to Test Note 2',
          },
        ],
        stats: {
          totalNotes: 2,
          totalLinks: 1,
          avgConnections: 2,
        },
      },
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

    // Import mockStore dynamically to avoid circular import

    // eslint-disable-next-line no-undef
    const { mockStore } = require('../utils/mock-data-store')
    const mockUserId = 'mock-user-id'
    const tags = mockStore.tags.getAll(mockUserId)

    console.info('[MSW] GET /api/tags - returning tags:', tags)
    return HttpResponse.json({
      data: tags,
      total: tags.length,
    })
  }),

  // Add comprehensive tag CRUD operations for MSW
  http.post('*/api/tags', async ({ request, cookies }) => {
    if (!cookies['dev-auth-bypass'] && process.env.NODE_ENV !== 'test') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // eslint-disable-next-line no-undef
    const { mockStore } = require('../utils/mock-data-store')
    const body = (await request.json()) as any
    const mockUserId = 'mock-user-id'

    // Validate required fields
    if (!body.name) {
      return HttpResponse.json(
        {
          error: 'Tag name is required',
        },
        { status: 400 }
      )
    }

    // Check if tag name already exists
    const existingTag = mockStore.tags.findByName(body.name, mockUserId)
    if (existingTag) {
      return HttpResponse.json(
        {
          error: 'Tag with this name already exists',
        },
        { status: 409 }
      )
    }

    const newTag = mockStore.tags.create({
      name: body.name,
      color: body.color || '#3b82f6',
      description: body.description || '',
      parent_id: body.parent_id || null,
      user_id: mockUserId,
    })

    console.info('[MSW] POST /api/tags - created tag:', newTag)
    return HttpResponse.json({
      data: newTag,
    })
  }),

  http.put('*/api/tags/:id', async ({ request, params, cookies }) => {
    if (!cookies['dev-auth-bypass'] && process.env.NODE_ENV !== 'test') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // eslint-disable-next-line no-undef
    const { mockStore } = require('../utils/mock-data-store')
    const body = (await request.json()) as any
    const tagId = params.id as string

    const updatedTag = mockStore.tags.update(tagId, body)

    if (!updatedTag) {
      return HttpResponse.json(
        {
          error: 'Tag not found',
        },
        { status: 404 }
      )
    }

    console.info('[MSW] PUT /api/tags/:id - updated tag:', updatedTag)
    return HttpResponse.json({
      data: updatedTag,
    })
  }),

  http.delete('*/api/tags/:id', ({ params, cookies }) => {
    if (!cookies['dev-auth-bypass'] && process.env.NODE_ENV !== 'test') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // eslint-disable-next-line no-undef
    const { mockStore } = require('../utils/mock-data-store')
    const tagId = params.id as string
    const deleted = mockStore.tags.delete(tagId)

    if (!deleted) {
      return HttpResponse.json(
        {
          error: 'Tag not found',
        },
        { status: 404 }
      )
    }

    console.info('[MSW] DELETE /api/tags/:id - deleted tag:', tagId)
    return HttpResponse.json({
      success: true,
      message: 'Tag deleted successfully',
    })
  }),

  http.get('*/api/tags/:id', ({ params, cookies }) => {
    if (!cookies['dev-auth-bypass'] && process.env.NODE_ENV !== 'test') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // eslint-disable-next-line no-undef
    const { mockStore } = require('../utils/mock-data-store')
    const tagId = params.id as string
    const tag = mockStore.tags.get(tagId)

    if (!tag) {
      return HttpResponse.json(
        {
          error: 'Tag not found',
        },
        { status: 404 }
      )
    }

    console.info('[MSW] GET /api/tags/:id - returning tag:', tag)
    return HttpResponse.json({
      data: tag,
    })
  }),

  // Mock Supabase auth endpoints
  http.post('*/auth/v1/token', ({ request }) => {
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
  http.get('*/rest/v1/notes', ({ request }) => {
    const url = new URL(request.url)
    const customId = url.searchParams.get('custom_id')?.replace('eq.', '')

    // If searching for a specific daily note
    if (customId && customId.startsWith('daily-')) {
      // Return empty array to indicate no daily note exists yet
      return HttpResponse.json([])
    }

    // Default notes list
    return HttpResponse.json([
      {
        id: 'n1111111-1111-1111-1111-111111111111',
        title: 'Test Note 1',
        content:
          '{"type": "doc", "content": [{"type": "paragraph", "content": [{"type": "text", "text": "Welcome to Notable! This is your first note."}]}]}',
        user_id: TEST_USER.id,
        folder_id: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        id: 'n2222222-2222-2222-2222-222222222222',
        title: 'Test Note 2',
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

    // Handle daily notes specially
    const noteId = body.custom_id?.startsWith('daily-')
      ? `dn-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
      : `n${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

    return HttpResponse.json({
      id: noteId,
      ...body,
      user_id: TEST_USER.id,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      deleted_at: null,
      is_pinned: false,
      is_favorited: false,
      is_archived: false,
      is_daily_note: body.is_daily_note || false,
      custom_id: body.custom_id || null,
      folder_id: null,
      tags: [],
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

  // Mock Supabase RPC function calls
  http.post('*/rest/v1/rpc/get_search_suggestions', async ({ request }) => {
    const body = (await request.json()) as Record<string, any>
    const query = body.p_query || ''

    // Mock search suggestions based on query
    const suggestions = [
      { suggestion: `${query} in notes`, type: 'note', count: 1 },
      { suggestion: `${query} in templates`, type: 'note', count: 1 },
      { suggestion: `recent ${query}`, type: 'history', count: 1 },
      { suggestion: `${query} tag`, type: 'tag', count: 1 },
    ].filter(
      (s) =>
        query === '' || s.suggestion.toLowerCase().includes(query.toLowerCase())
    )

    return HttpResponse.json(suggestions.slice(0, body.p_limit || 10))
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

  // Export API Handlers
  http.post('*/api/export', async ({ request, cookies }) => {
    if (!cookies['dev-auth-bypass'] && process.env.NODE_ENV !== 'test') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = (await request.json()) as {
      noteId?: string
      format: 'markdown' | 'html' | 'pdf' | 'react'
      options?: Record<string, any>
    }

    // Simulate export processing
    await new Promise((resolve) => setTimeout(resolve, 100))

    const mockFileContent = `# Export Test\n\nThis is mock exported content in ${body.format.toUpperCase()} format.`
    const filename = `note-export.${body.format === 'react' ? 'tsx' : body.format}`

    // Return download URL and metadata
    return HttpResponse.json({
      success: true,
      data: {
        filename,
        content: mockFileContent,
        size: mockFileContent.length,
        format: body.format,
        downloadUrl: `/api/export/download/${Date.now()}`,
        expiresAt: new Date(Date.now() + 5 * 60 * 1000).toISOString(), // 5 minutes
      },
    })
  }),

  http.get('*/api/export/download/:id', ({ params, cookies }) => {
    if (!cookies['dev-auth-bypass'] && process.env.NODE_ENV !== 'test') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Return file content as blob
    const mockContent = `# Mock Export File\n\nThis is mock exported content from download ID: ${params.id}`

    return new HttpResponse(mockContent, {
      headers: {
        'Content-Type': 'text/markdown',
        'Content-Disposition': 'attachment; filename="note-export.md"',
      },
    })
  }),

  http.post('*/api/export/batch', async ({ request, cookies }) => {
    if (!cookies['dev-auth-bypass'] && process.env.NODE_ENV !== 'test') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = (await request.json()) as {
      noteIds: string[]
      format: string
      options?: Record<string, any>
    }

    // Simulate batch export processing
    await new Promise((resolve) => setTimeout(resolve, 200))

    return HttpResponse.json({
      success: true,
      data: {
        batchId: `batch-${Date.now()}`,
        filename: `notable-export-${body.noteIds.length}-notes.zip`,
        format: 'zip',
        downloadUrl: `/api/export/batch/download/batch-${Date.now()}`,
        expiresAt: new Date(Date.now() + 10 * 60 * 1000).toISOString(), // 10 minutes
        totalFiles: body.noteIds.length,
      },
    })
  }),

  // Smart Suggestions API
  http.get('*/api/suggestions', ({ request, cookies }) => {
    if (!cookies['dev-auth-bypass'] && process.env.NODE_ENV !== 'test') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const url = new URL(request.url)
    const context = url.searchParams.get('context') || 'general'

    return HttpResponse.json({
      success: true,
      data: {
        suggestions: [
          {
            id: 'suggestion-1',
            type: 'related_note',
            title: 'Related Note: Meeting Notes',
            description: 'This note might be related to your current topic',
            confidence: 0.85,
            noteId: 'n2222222-2222-2222-2222-222222222222',
          },
          {
            id: 'suggestion-2',
            type: 'template',
            title: 'Use Template: Daily Standup',
            description: 'Consider using this template for structured notes',
            confidence: 0.92,
            templateId: 'daily-standup',
          },
          {
            id: 'suggestion-3',
            type: 'ai_tip',
            title: 'Writing Tip',
            description: 'Try adding more specific details to improve clarity',
            confidence: 0.78,
          },
        ],
        context,
      },
    })
  }),

  // Version History API
  http.get('*/api/notes/:id/versions', ({ params, cookies }) => {
    if (!cookies['dev-auth-bypass'] && process.env.NODE_ENV !== 'test') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    return HttpResponse.json({
      success: true,
      data: [
        {
          id: 'v1',
          noteId: params.id,
          content: 'Original version of the note',
          createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
          author: {
            id: TEST_USER.id,
            email: TEST_USER.email,
          },
          changes: {
            added: 0,
            modified: 1,
            deleted: 0,
          },
        },
        {
          id: 'v2',
          noteId: params.id,
          content: 'Updated version with more content',
          createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(), // 1 hour ago
          author: {
            id: TEST_USER.id,
            email: TEST_USER.email,
          },
          changes: {
            added: 1,
            modified: 0,
            deleted: 0,
          },
        },
      ],
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

  // Default handler for unhandled API requests only (not page routes)
  http.all('*/api/*', ({ request }) => {
    console.warn(`Unhandled API request: ${request.method} ${request.url}`)
    return new HttpResponse(null, { status: 404 })
  }),

  // Temporarily disable MSW Notes API endpoints to test built-in API route mocking
  // /*
  http.get('*/api/notes', ({ request, cookies }) => {
    if (!isRequestAllowed(cookies)) {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const url = new URL(request.url)
    const limit = parseInt(url.searchParams.get('limit') || '10')
    const offset = parseInt(url.searchParams.get('offset') || '0')

    const paginatedNotes = mockNoteStore.slice(offset, offset + limit)

    return HttpResponse.json({
      notes: paginatedNotes,
      total: mockNoteStore.length,
    })
  }),
  // */

  http.get('*/api/notes/:id', ({ params, cookies }) => {
    if (!isRequestAllowed(cookies)) {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = params

    // Special handling for block editor test note
    if (id === 'test-block-editor-note') {
      return HttpResponse.json({
        note: {
          id: 'test-block-editor-note',
          title: 'Test Block Editor Note',
          content: '', // Empty content for testing
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          user_id: 'mock-user-id',
          folder_id: null,
          is_public: false,
        },
      })
    }

    // Find the note in the store
    const note = mockNoteStore.find((n) => n.id === id)
    if (note) {
      return HttpResponse.json({ note })
    }

    return HttpResponse.json({ error: 'Note not found' }, { status: 404 })
  }),

  http.post('*/api/notes', async ({ request, cookies }) => {
    if (!isRequestAllowed(cookies)) {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = (await request.json()) as any
    const noteId = `mock-note-${Date.now()}`

    const newNote = {
      id: noteId,
      title: body.title || 'Untitled',
      content: body.content || { type: 'doc', content: [] },
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      user_id: 'mock-user-id',
      folder_id: body.folder_id || null,
      is_public: body.is_public || false,
    }

    // Add to the stateful store
    mockNoteStore.push(newNote)

    return HttpResponse.json({ note: newNote })
  }),

  http.put('*/api/notes/:id', async ({ request, params, cookies }) => {
    if (!isRequestAllowed(cookies)) {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = params
    const body = (await request.json()) as any

    // Find and update the note in the store
    const noteIndex = mockNoteStore.findIndex((n) => n.id === id)
    if (noteIndex !== -1) {
      mockNoteStore[noteIndex] = {
        ...mockNoteStore[noteIndex],
        title: body.title || mockNoteStore[noteIndex].title,
        content: body.content || mockNoteStore[noteIndex].content,
        updated_at: new Date().toISOString(),
        folder_id:
          body.folder_id !== undefined
            ? body.folder_id
            : mockNoteStore[noteIndex].folder_id,
        is_public:
          body.is_public !== undefined
            ? body.is_public
            : mockNoteStore[noteIndex].is_public,
      }

      return HttpResponse.json({ note: mockNoteStore[noteIndex] })
    }

    return HttpResponse.json({ error: 'Note not found' }, { status: 404 })
  }),

  http.delete('*/api/notes/:id', ({ params, cookies }) => {
    if (!isRequestAllowed(cookies)) {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = params

    // Find and remove the note from the store
    const noteIndex = mockNoteStore.findIndex((n) => n.id === id)
    if (noteIndex !== -1) {
      mockNoteStore.splice(noteIndex, 1)
      return HttpResponse.json({
        success: true,
        message: `Note ${id} deleted successfully`,
      })
    }

    return HttpResponse.json({ error: 'Note not found' }, { status: 404 })
  }),
  // */

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

    const mockResults = query
      ? [
          {
            id: 'n1111111-1111-1111-1111-111111111111',
            title: 'Welcome to Notable',
            content: 'Welcome to Notable! This is your first note.',
            headline_title: `Welcome to <mark>${query}</mark>`,
            headline_content: `Welcome to Notable! This is your first <mark>${query}</mark>.`,
            updated_at: new Date().toISOString(),
            created_at: new Date().toISOString(),
            tags: [],
            rank: 0.9,
          },
          {
            id: 'n2222222-2222-2222-2222-222222222222',
            title: 'Meeting Notes',
            content:
              'Team Meeting - Discussed project roadmap and upcoming features.',
            headline_title: 'Meeting Notes',
            headline_content: 'Team Meeting - Discussed project roadmap.',
            updated_at: new Date().toISOString(),
            created_at: new Date().toISOString(),
            tags: [
              {
                id: 't1111111-1111-1111-1111-111111111111',
                name: 'important',
                color: '#ef4444',
              },
            ],
            rank: 0.8,
          },
        ]
      : []

    return HttpResponse.json({
      success: true,
      data: {
        results: mockResults,
        totalCount: mockResults.length,
        hasMore: false,
        query: {
          original: query,
          parsed: query,
          operators: [],
        },
        filters: body.filters || {},
        performance: {
          responseTime: 50,
        },
      },
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

  // Note links endpoints
  http.get('*/api/notes/:id/links', ({ params, cookies }) => {
    if (!cookies['dev-auth-bypass'] && process.env.NODE_ENV !== 'test') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Mock note links data
    const mockLinks = {
      backlinks: [
        {
          id: 'link-1',
          source_note_id: 'note-1',
          target_note_id: params.id as string,
          source_note_title: 'Source Note 1',
          created_at: new Date().toISOString(),
        },
        {
          id: 'link-2',
          source_note_id: 'note-2',
          target_note_id: params.id as string,
          source_note_title: 'Source Note 2',
          created_at: new Date().toISOString(),
        },
      ],
      forwardLinks: [
        {
          id: 'link-3',
          source_note_id: params.id as string,
          target_note_id: 'note-3',
          target_note_title: 'Target Note 3',
          created_at: new Date().toISOString(),
        },
      ],
    }

    return HttpResponse.json({
      data: mockLinks,
      total: {
        backlinks: mockLinks.backlinks.length,
        forwardLinks: mockLinks.forwardLinks.length,
      },
    })
  }),

  http.post('*/api/notes/:id/links', async ({ request, params, cookies }) => {
    if (!cookies['dev-auth-bypass'] && process.env.NODE_ENV !== 'test') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = (await request.json()) as any

    return HttpResponse.json({
      success: true,
      link: {
        id: `link-${Date.now()}`,
        source_note_id: params.id as string,
        target_note_id: body.target_note_id,
        created_at: new Date().toISOString(),
      },
    })
  }),

  http.delete('*/api/notes/:id/links/:linkId', ({ params, cookies }) => {
    if (!cookies['dev-auth-bypass'] && process.env.NODE_ENV !== 'test') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    return HttpResponse.json({
      success: true,
      message: `Link ${params.linkId} deleted`,
    })
  }),

  // Note tags endpoints
  http.get('*/api/notes/:id/tags', ({ cookies }) => {
    if (!cookies['dev-auth-bypass'] && process.env.NODE_ENV !== 'test') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Mock note tags data
    const mockTags = [
      {
        id: 'tag-1',
        name: 'javascript',
        color: '#f59e0b',
        note_count: 5,
      },
      {
        id: 'tag-2',
        name: 'react',
        color: '#3b82f6',
        note_count: 3,
      },
    ]

    return HttpResponse.json({
      data: mockTags,
      total: mockTags.length,
    })
  }),

  http.post('*/api/notes/:id/tags', async ({ request, params, cookies }) => {
    if (!cookies['dev-auth-bypass'] && process.env.NODE_ENV !== 'test') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = (await request.json()) as any

    return HttpResponse.json({
      success: true,
      noteTag: {
        id: `note-tag-${Date.now()}`,
        note_id: params.id as string,
        tag_id: body.tag_id,
        created_at: new Date().toISOString(),
      },
    })
  }),

  http.delete('*/api/notes/:id/tags/:tagId', ({ params, cookies }) => {
    if (!cookies['dev-auth-bypass'] && process.env.NODE_ENV !== 'test') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    return HttpResponse.json({
      success: true,
      message: `Tag ${params.tagId} removed from note`,
    })
  }),
]
