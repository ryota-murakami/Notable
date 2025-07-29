import { http, HttpResponse } from 'msw'

// Define mock handlers for your API endpoints
export const handlers = [
  // Mock Supabase auth endpoints
  http.post('*/auth/v1/token', () => {
    return HttpResponse.json({
      access_token: 'mock-access-token',
      token_type: 'bearer',
      expires_in: 3600,
      refresh_token: 'mock-refresh-token',
      user: {
        id: 'mock-user-id',
        email: 'test@example.com',
        role: 'authenticated',
        aud: 'authenticated',
      },
    })
  }),

  // Mock Supabase user endpoint
  http.get('*/auth/v1/user', () => {
    return HttpResponse.json({
      id: 'mock-user-id',
      email: 'test@example.com',
      role: 'authenticated',
      aud: 'authenticated',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
  }),

  // Mock notes endpoints
  http.get('*/rest/v1/notes', () => {
    return HttpResponse.json([
      {
        id: 'note-1',
        title: 'Test Note 1',
        content: 'This is a test note',
        userId: 'mock-user-id',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        id: 'note-2',
        title: 'Test Note 2',
        content: 'Another test note',
        userId: 'mock-user-id',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    ])
  }),

  http.post('*/rest/v1/notes', async ({ request }) => {
    const body = (await request.json()) as Record<string, any>
    return HttpResponse.json({
      id: `note-${Date.now()}`,
      ...body,
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

  // Mock OAuth callback
  http.get('*/auth/callback', () => {
    return new HttpResponse(null, {
      status: 302,
      headers: {
        Location: '/',
      },
    })
  }),

  // Default handler for unhandled requests
  http.get('*', ({ request }) => {
    console.warn(`Unhandled request: ${request.method} ${request.url}`)
    return new HttpResponse(null, { status: 404 })
  }),
]
