/**
 * Database fixtures for E2E testing
 * Contains test users and data as specified in project instructions
 * - test@example.com (password: password123)
 * - test2@example.com (password: password123)
 */

export const TEST_USERS = {
  user1: {
    id: 'test-user-1',
    email: 'test@example.com',
    password: 'password123', // Note: This will be hashed in actual DB
    name: 'Test User 1',
    email_confirmed_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    app_metadata: { 
      provider: 'email', 
      providers: ['email'] 
    },
    user_metadata: { 
      name: 'Test User 1',
      avatar_url: null 
    },
  },
  user2: {
    id: 'test-user-2', 
    email: 'test2@example.com',
    password: 'password123', // Note: This will be hashed in actual DB
    name: 'Test User 2',
    email_confirmed_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    app_metadata: { 
      provider: 'email', 
      providers: ['email'] 
    },
    user_metadata: { 
      name: 'Test User 2',
      avatar_url: null 
    },
  },
} as const

export const TEST_NOTES = [
  {
    id: 'test-note-1',
    title: 'Welcome to Notable',
    content: '{"type": "doc", "content": [{"type": "paragraph", "content": [{"type": "text", "text": "Welcome to Notable! This is your first test note."}]}]}',
    user_id: TEST_USERS.user1.id,
    folder_id: null,
    created_at: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
    updated_at: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
    is_pinned: false,
    is_favorited: true,
    is_archived: false,
    is_daily_note: false,
    custom_id: null,
  },
  {
    id: 'test-note-2',
    title: 'Meeting Notes - Q1 Planning',
    content: '{"type": "doc", "content": [{"type": "heading", "attrs": {"level": 2}, "content": [{"type": "text", "text": "Q1 Planning Meeting"}]}, {"type": "paragraph", "content": [{"type": "text", "text": "Discussed project roadmap and upcoming features for the quarter."}]}]}',
    user_id: TEST_USERS.user1.id,
    folder_id: 'test-folder-1',
    created_at: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
    updated_at: new Date(Date.now() - 7200000).toISOString(), // 2 hours ago
    is_pinned: true,
    is_favorited: false,
    is_archived: false,
    is_daily_note: false,
    custom_id: null,
  },
  {
    id: 'test-note-3',
    title: 'Daily Journal',
    content: '{"type": "doc", "content": [{"type": "paragraph", "content": [{"type": "text", "text": "Today was productive. Completed the user authentication flow and started working on the dashboard."}]}]}',
    user_id: TEST_USERS.user2.id,
    folder_id: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    is_pinned: false,
    is_favorited: false,
    is_archived: false,
    is_daily_note: true,
    custom_id: `daily-${new Date().toISOString().split('T')[0]}`,
  },
] as const

export const TEST_FOLDERS = [
  {
    id: 'test-folder-1',
    name: 'Work Projects',
    parent_id: null,
    user_id: TEST_USERS.user1.id,
    created_at: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
    updated_at: new Date(Date.now() - 259200000).toISOString(),
  },
  {
    id: 'test-folder-2',
    name: 'Frontend Development',
    parent_id: 'test-folder-1',
    user_id: TEST_USERS.user1.id,
    created_at: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
    updated_at: new Date(Date.now() - 172800000).toISOString(),
  },
  {
    id: 'test-folder-3',
    name: 'Personal Notes',
    parent_id: null,
    user_id: TEST_USERS.user2.id,
    created_at: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
    updated_at: new Date(Date.now() - 86400000).toISOString(),
  },
] as const

export const TEST_TAGS = [
  {
    id: 'test-tag-1',
    name: 'important',
    color: '#ef4444',
    description: 'Important items that need attention',
    user_id: TEST_USERS.user1.id,
    created_at: new Date(Date.now() - 259200000).toISOString(),
    updated_at: new Date(Date.now() - 259200000).toISOString(),
  },
  {
    id: 'test-tag-2',
    name: 'work',
    color: '#3b82f6',
    description: 'Work related notes',
    user_id: TEST_USERS.user1.id,
    created_at: new Date(Date.now() - 172800000).toISOString(),
    updated_at: new Date(Date.now() - 172800000).toISOString(),
  },
  {
    id: 'test-tag-3',
    name: 'personal',
    color: '#10b981',
    description: 'Personal notes and thoughts',
    user_id: TEST_USERS.user2.id,
    created_at: new Date(Date.now() - 86400000).toISOString(),
    updated_at: new Date(Date.now() - 86400000).toISOString(),
  },
] as const

export const TEST_NOTE_TAGS = [
  {
    id: 'test-note-tag-1',
    note_id: 'test-note-1',
    tag_id: 'test-tag-1',
    created_at: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: 'test-note-tag-2', 
    note_id: 'test-note-2',
    tag_id: 'test-tag-1',
    created_at: new Date(Date.now() - 172800000).toISOString(),
  },
  {
    id: 'test-note-tag-3',
    note_id: 'test-note-2',
    tag_id: 'test-tag-2',
    created_at: new Date(Date.now() - 172800000).toISOString(),
  },
  {
    id: 'test-note-tag-4',
    note_id: 'test-note-3',
    tag_id: 'test-tag-3',
    created_at: new Date().toISOString(),
  },
] as const

/**
 * Get all fixture data for seeding
 */
export const getAllFixtures = () => ({
  users: Object.values(TEST_USERS),
  notes: TEST_NOTES,
  folders: TEST_FOLDERS,
  tags: TEST_TAGS,
  note_tags: TEST_NOTE_TAGS,
})

/**
 * Get fixture data for a specific user
 */
export const getUserFixtures = (userEmail: string) => {
  const user = Object.values(TEST_USERS).find(u => u.email === userEmail)
  if (!user) return null

  return {
    user,
    notes: TEST_NOTES.filter(note => note.user_id === user.id),
    folders: TEST_FOLDERS.filter(folder => folder.user_id === user.id),
    tags: TEST_TAGS.filter(tag => tag.user_id === user.id),
    note_tags: TEST_NOTE_TAGS.filter(nt => 
      TEST_NOTES.some(note => note.id === nt.note_id && note.user_id === user.id)
    ),
  }
}

/**
 * SQL queries for seeding database (for use with Supabase CLI or direct DB access)
 */
export const SEED_QUERIES = {
  // Clear existing test data
  cleanup: `
    DELETE FROM note_tags WHERE note_id IN (SELECT id FROM notes WHERE user_id IN ('test-user-1', 'test-user-2'));
    DELETE FROM tags WHERE user_id IN ('test-user-1', 'test-user-2');
    DELETE FROM notes WHERE user_id IN ('test-user-1', 'test-user-2');
    DELETE FROM folders WHERE user_id IN ('test-user-1', 'test-user-2');
  `,

  // Insert test users (Note: In real Supabase, users are managed by auth.users table)
  users: `
    -- Note: These would typically be inserted into auth.users by Supabase Auth
    -- This is just for reference. Use Supabase Auth API to create actual users.
  `,

  // Insert test data
  seed: `
    -- Insert test folders
    INSERT INTO folders (id, name, parent_id, user_id, created_at, updated_at) VALUES
    ('test-folder-1', 'Work Projects', null, 'test-user-1', NOW() - INTERVAL '3 days', NOW() - INTERVAL '3 days'),
    ('test-folder-2', 'Frontend Development', 'test-folder-1', 'test-user-1', NOW() - INTERVAL '2 days', NOW() - INTERVAL '2 days'),
    ('test-folder-3', 'Personal Notes', null, 'test-user-2', NOW() - INTERVAL '1 day', NOW() - INTERVAL '1 day');

    -- Insert test tags
    INSERT INTO tags (id, name, color, description, user_id, created_at, updated_at) VALUES
    ('test-tag-1', 'important', '#ef4444', 'Important items that need attention', 'test-user-1', NOW() - INTERVAL '3 days', NOW() - INTERVAL '3 days'),
    ('test-tag-2', 'work', '#3b82f6', 'Work related notes', 'test-user-1', NOW() - INTERVAL '2 days', NOW() - INTERVAL '2 days'),
    ('test-tag-3', 'personal', '#10b981', 'Personal notes and thoughts', 'test-user-2', NOW() - INTERVAL '1 day', NOW() - INTERVAL '1 day');

    -- Insert test notes
    INSERT INTO notes (id, title, content, user_id, folder_id, created_at, updated_at, is_pinned, is_favorited, is_archived, is_daily_note, custom_id) VALUES
    ('test-note-1', 'Welcome to Notable', '{"type": "doc", "content": [{"type": "paragraph", "content": [{"type": "text", "text": "Welcome to Notable! This is your first test note."}]}]}', 'test-user-1', null, NOW() - INTERVAL '1 day', NOW() - INTERVAL '1 hour', false, true, false, false, null),
    ('test-note-2', 'Meeting Notes - Q1 Planning', '{"type": "doc", "content": [{"type": "heading", "attrs": {"level": 2}, "content": [{"type": "text", "text": "Q1 Planning Meeting"}]}, {"type": "paragraph", "content": [{"type": "text", "text": "Discussed project roadmap and upcoming features for the quarter."}]}]}', 'test-user-1', 'test-folder-1', NOW() - INTERVAL '2 days', NOW() - INTERVAL '2 hours', true, false, false, false, null),
    ('test-note-3', 'Daily Journal', '{"type": "doc", "content": [{"type": "paragraph", "content": [{"type": "text", "text": "Today was productive. Completed the user authentication flow and started working on the dashboard."}]}]}', 'test-user-2', null, NOW(), NOW(), false, false, false, true, CONCAT('daily-', CURRENT_DATE));

    -- Insert note-tag relationships
    INSERT INTO note_tags (id, note_id, tag_id, created_at) VALUES
    ('test-note-tag-1', 'test-note-1', 'test-tag-1', NOW() - INTERVAL '1 day'),
    ('test-note-tag-2', 'test-note-2', 'test-tag-1', NOW() - INTERVAL '2 days'),
    ('test-note-tag-3', 'test-note-2', 'test-tag-2', NOW() - INTERVAL '2 days'),
    ('test-note-tag-4', 'test-note-3', 'test-tag-3', NOW());
  `,
}

/**
 * Utility to create test user sessions (for MSW mocking)
 */
export const createTestSession = (userEmail: string) => {
  const user = Object.values(TEST_USERS).find(u => u.email === userEmail)
  if (!user) return null

  return {
    access_token: `mock-access-token-${user.id}`,
    token_type: 'bearer',
    expires_in: 3600,
    expires_at: Math.floor(Date.now() / 1000) + 3600,
    refresh_token: `mock-refresh-token-${user.id}`,
    user: {
      id: user.id,
      email: user.email,
      email_confirmed_at: user.email_confirmed_at,
      phone: null,
      created_at: user.created_at,
      updated_at: user.updated_at,
      app_metadata: user.app_metadata,
      user_metadata: user.user_metadata,
      role: 'authenticated',
      aud: 'authenticated',
    },
  }
}