import { http, HttpResponse } from 'msw'

// Mock handlers for Supabase endpoints
export const handlers = [
  // Auth endpoints
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
      },
    })
  }),

  http.post('*/auth/v1/signup', () => {
    return HttpResponse.json({
      id: 'mock-user-id',
      email: 'test@example.com',
      confirmed_at: new Date().toISOString(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
  }),

  http.post('*/auth/v1/logout', () => {
    return HttpResponse.json({})
  }),

  // Notes endpoints
  http.get('*/rest/v1/notes', () => {
    return HttpResponse.json([
      {
        id: 'mock-note-1',
        title: 'Test Note 1',
        content: 'This is a test note',
        user_id: 'mock-user-id',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        id: 'mock-note-2',
        title: 'Test Note 2',
        content: 'This is another test note',
        user_id: 'mock-user-id',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    ])
  }),

  http.post('*/rest/v1/notes', async ({ request }) => {
    const body = (await request.json()) as Record<string, any>
    return HttpResponse.json({
      id: 'mock-note-new',
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
    return HttpResponse.json({})
  }),

  // Sync service endpoints
  http.post('*/rest/v1/sync', async ({ request }) => {
    const body = (await request.json()) as Record<string, any>
    return HttpResponse.json({
      id: 'mock-sync-id',
      ...body,
      synced_at: new Date().toISOString(),
    })
  }),

  http.get('*/rest/v1/sync/status', () => {
    return HttpResponse.json({
      status: 'connected',
      last_sync: new Date().toISOString(),
      pending_changes: 0,
    })
  }),

  // Y.js WebSocket endpoints for CRDT
  http.get('*/realtime/v1/websocket', () => {
    return HttpResponse.json({
      message: 'WebSocket connection mocked',
    })
  }),

  // File upload endpoints
  http.post('*/storage/v1/object/notes-attachments/*', async ({ request }) => {
    const formData = await request.formData()
    const file = formData.get('file')

    return HttpResponse.json({
      Key: `notes-attachments/${Date.now()}-${file instanceof File ? file.name : 'file'}`,
      url: `https://mock-storage.supabase.co/storage/v1/object/public/notes-attachments/mock-file.png`,
    })
  }),

  // Health check
  http.get('*/rest/v1/health', () => {
    return HttpResponse.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
    })
  }),
]
