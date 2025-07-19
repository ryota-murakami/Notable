import { createSupabaseClient } from './supabase'

// Generate unique test user credentials
export async function generateTestUser() {
  const timestamp = Date.now()
  const random = Math.floor(Math.random() * 10000)

  return {
    email: `test-${timestamp}-${random}@example.com`,
    password: `TestPass${timestamp}!`,
  }
}

// Cleanup test user and their data
export async function cleanupTestUser(userId: string) {
  const supabase = createSupabaseClient()

  try {
    // Delete user's notes
    await supabase.from('notes').delete().eq('user_id', userId)

    // Delete user's folders
    await supabase.from('folders').delete().eq('user_id', userId)

    // Delete user's tags
    await supabase.from('tags').delete().eq('user_id', userId)

    // Note: Cannot delete auth user from client-side
    // This would need to be done via admin API or database trigger

    return true
  } catch (error) {
    console.error('Failed to cleanup test user:', error)
    return false
  }
}

// Create test data for a user
export async function createTestData(userId: string) {
  const supabase = createSupabaseClient()

  // Create test folders
  const { data: folders } = await supabase
    .from('folders')
    .insert([
      { name: 'Work', user_id: userId },
      { name: 'Personal', user_id: userId },
    ])
    .select()

  // Create test tags
  const { data: tags } = await supabase
    .from('tags')
    .insert([
      { name: 'important', color: 'red', user_id: userId },
      { name: 'todo', color: 'yellow', user_id: userId },
    ])
    .select()

  // Create test notes
  const { data: notes } = await supabase
    .from('notes')
    .insert([
      {
        title: 'Welcome to Notable',
        content: '# Welcome\n\nThis is your first note!',
        user_id: userId,
        folder_id: folders?.[0]?.id,
      },
      {
        title: 'Getting Started',
        content:
          '## Getting Started\n\n- Create new notes\n- Organize with folders\n- Add tags',
        user_id: userId,
        folder_id: folders?.[0]?.id,
      },
    ])
    .select()

  return { folders, tags, notes }
}
