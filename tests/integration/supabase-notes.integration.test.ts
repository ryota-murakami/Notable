import { createClient } from '@supabase/supabase-js'
import { Note } from '@/types/note'

// This test requires actual Supabase credentials and a test database
// Set these environment variables before running:
// SUPABASE_TEST_URL, SUPABASE_TEST_ANON_KEY, SUPABASE_TEST_SERVICE_KEY

const supabaseUrl = process.env.SUPABASE_TEST_URL || ''
const supabaseAnonKey = process.env.SUPABASE_TEST_ANON_KEY || ''
const supabaseServiceKey = process.env.SUPABASE_TEST_SERVICE_KEY || ''

describe('Supabase Notes Integration', () => {
  let supabase: any
  let testUserId: string
  let createdNoteIds: string[] = []

  beforeAll(async () => {
    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn(
        'Skipping integration tests: Supabase credentials not provided',
      )
      return
    }

    supabase = createClient(supabaseUrl, supabaseAnonKey)

    // Create a test user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: `test-${Date.now()}@example.com`,
      password: 'testpassword123',
    })

    if (authError) throw authError
    testUserId = authData.user?.id || ''
  })

  afterAll(async () => {
    if (!supabase) return

    // Clean up created notes
    if (createdNoteIds.length > 0) {
      await supabase.from('notes').delete().in('id', createdNoteIds)
    }

    // Delete test user
    if (supabaseServiceKey && testUserId) {
      const serviceSupabase = createClient(supabaseUrl, supabaseServiceKey)
      await serviceSupabase.auth.admin.deleteUser(testUserId)
    }
  })

  afterEach(async () => {
    // Clean up notes after each test
    if (createdNoteIds.length > 0) {
      await supabase.from('notes').delete().in('id', createdNoteIds)
      createdNoteIds = []
    }
  })

  it('should create a note', async () => {
    if (!supabase) {
      console.warn('Test skipped: No Supabase connection')
      return
    }

    const noteData = {
      title: 'Test Note',
      content: [{ type: 'p', children: [{ text: 'Test content' }] }],
      userId: testUserId,
      tags: [],
      folderId: null,
    }

    const { data, error } = await supabase
      .from('notes')
      .insert(noteData)
      .select()
      .single()

    expect(error).toBeNull()
    expect(data).toBeDefined()
    expect(data.title).toBe('Test Note')
    expect(data.userId).toBe(testUserId)

    createdNoteIds.push(data.id)
  })

  it('should fetch user notes', async () => {
    if (!supabase) return

    // Create multiple notes
    const notes = [
      {
        title: 'Note 1',
        content: [{ type: 'p', children: [{ text: 'Content 1' }] }],
        userId: testUserId,
      },
      {
        title: 'Note 2',
        content: [{ type: 'p', children: [{ text: 'Content 2' }] }],
        userId: testUserId,
      },
    ]

    const { data: createdNotes } = await supabase
      .from('notes')
      .insert(notes)
      .select()

    createdNoteIds.push(...createdNotes.map((n: any) => n.id))

    // Fetch notes
    const { data, error } = await supabase
      .from('notes')
      .select('*')
      .eq('userId', testUserId)
      .is('deleted_at', null)
      .order('updated_at', { ascending: false })

    expect(error).toBeNull()
    expect(data).toHaveLength(2)
    expect(data[0].title).toBe('Note 2')
    expect(data[1].title).toBe('Note 1')
  })

  it('should update a note', async () => {
    if (!supabase) return

    // Create a note
    const { data: createdNote } = await supabase
      .from('notes')
      .insert({
        title: 'Original Title',
        content: [{ type: 'p', children: [{ text: 'Original content' }] }],
        userId: testUserId,
      })
      .select()
      .single()

    createdNoteIds.push(createdNote.id)

    // Update the note
    const { data: updatedNote, error } = await supabase
      .from('notes')
      .update({
        title: 'Updated Title',
        content: [{ type: 'p', children: [{ text: 'Updated content' }] }],
      })
      .eq('id', createdNote.id)
      .select()
      .single()

    expect(error).toBeNull()
    expect(updatedNote.title).toBe('Updated Title')
    expect(updatedNote.content[0].children[0].text).toBe('Updated content')
    expect(new Date(updatedNote.updatedAt).getTime()).toBeGreaterThan(
      new Date(createdNote.updatedAt).getTime(),
    )
  })

  it('should soft delete a note', async () => {
    if (!supabase) return

    // Create a note
    const { data: createdNote } = await supabase
      .from('notes')
      .insert({
        title: 'To Delete',
        content: [],
        userId: testUserId,
      })
      .select()
      .single()

    createdNoteIds.push(createdNote.id)

    // Soft delete
    const { error: deleteError } = await supabase
      .from('notes')
      .update({ deleted_at: new Date().toISOString() })
      .eq('id', createdNote.id)

    expect(deleteError).toBeNull()

    // Verify it's not returned in normal queries
    const { data: notes } = await supabase
      .from('notes')
      .select('*')
      .eq('userId', testUserId)
      .is('deleted_at', null)

    expect(notes.find((n: any) => n.id === createdNote.id)).toBeUndefined()
  })

  it('should search notes with full-text search', async () => {
    if (!supabase) return

    // Create notes with searchable content
    const notes = [
      {
        title: 'JavaScript Tutorial',
        content: [
          { type: 'p', children: [{ text: 'Learn JavaScript programming' }] },
        ],
        userId: testUserId,
      },
      {
        title: 'TypeScript Guide',
        content: [
          { type: 'p', children: [{ text: 'Advanced TypeScript features' }] },
        ],
        userId: testUserId,
      },
      {
        title: 'Python Basics',
        content: [
          { type: 'p', children: [{ text: 'Introduction to Python' }] },
        ],
        userId: testUserId,
      },
    ]

    const { data: createdNotes } = await supabase
      .from('notes')
      .insert(notes)
      .select()

    createdNoteIds.push(...createdNotes.map((n: any) => n.id))

    // Search for JavaScript
    const { data: searchResults, error } = await supabase.rpc('search_notes', {
      search_query: 'JavaScript',
      user_uuid: testUserId,
    })

    expect(error).toBeNull()
    expect(searchResults).toHaveLength(1)
    expect(searchResults[0].title).toBe('JavaScript Tutorial')
  })

  it('should handle tags', async () => {
    if (!supabase) return

    // Create tags
    const { data: tag1 } = await supabase
      .from('tags')
      .insert({ name: 'work', color: '#ff0000', user_id: testUserId })
      .select()
      .single()

    const { data: tag2 } = await supabase
      .from('tags')
      .insert({ name: 'personal', color: '#00ff00', user_id: testUserId })
      .select()
      .single()

    // Create note with tags
    const { data: note } = await supabase
      .from('notes')
      .insert({
        title: 'Tagged Note',
        content: [],
        userId: testUserId,
      })
      .select()
      .single()

    createdNoteIds.push(note.id)

    // Add tags to note
    await supabase.from('note_tags').insert([
      { note_id: note.id, tag_id: tag1.id },
      { note_id: note.id, tag_id: tag2.id },
    ])

    // Fetch note with tags
    const { data: noteWithTags } = await supabase
      .from('notes')
      .select(
        `
        *,
        note_tags (
          tags (*)
        )
      `,
      )
      .eq('id', note.id)
      .single()

    expect(noteWithTags.note_tags).toHaveLength(2)
    expect(noteWithTags.note_tags[0].tags.name).toBe('work')
    expect(noteWithTags.note_tags[1].tags.name).toBe('personal')

    // Clean up
    await supabase.from('tags').delete().in('id', [tag1.id, tag2.id])
  })

  it('should handle real-time subscriptions', async () => {
    if (!supabase) return

    const receivedEvents: any[] = []

    // Subscribe to changes
    const channel = supabase
      .channel('test-channel')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'notes',
          filter: `userId=eq.${testUserId}`,
        },
        (payload: any) => {
          receivedEvents.push(payload)
        },
      )
      .subscribe()

    // Wait for subscription to be ready
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Create a note
    const { data: note } = await supabase
      .from('notes')
      .insert({
        title: 'Real-time Test',
        content: [],
        userId: testUserId,
      })
      .select()
      .single()

    createdNoteIds.push(note.id)

    // Update the note
    await supabase
      .from('notes')
      .update({ title: 'Real-time Updated' })
      .eq('id', note.id)

    // Wait for events
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Unsubscribe
    await supabase.removeChannel(channel)

    expect(receivedEvents.length).toBeGreaterThanOrEqual(2)
    expect(receivedEvents.find((e) => e.eventType === 'INSERT')).toBeDefined()
    expect(receivedEvents.find((e) => e.eventType === 'UPDATE')).toBeDefined()
  })

  it('should enforce RLS policies', async () => {
    if (!supabase) return

    // Create another test user
    const { data: otherAuthData } = await supabase.auth.signUp({
      email: `other-${Date.now()}@example.com`,
      password: 'testpassword123',
    })

    const otherUserId = otherAuthData.user?.id || ''

    // Create a note as the first user
    const { data: note } = await supabase
      .from('notes')
      .insert({
        title: 'Private Note',
        content: [],
        userId: testUserId,
      })
      .select()
      .single()

    createdNoteIds.push(note.id)

    // Try to access it as another user
    const otherSupabase = createClient(supabaseUrl, supabaseAnonKey)
    await otherSupabase.auth.signInWithPassword({
      email: otherAuthData.user?.email || '',
      password: 'testpassword123',
    })

    const { data: unauthorizedNotes } = await otherSupabase
      .from('notes')
      .select('*')
      .eq('id', note.id)

    expect(unauthorizedNotes).toHaveLength(0)

    // Clean up other user
    if (supabaseServiceKey && otherUserId) {
      const serviceSupabase = createClient(supabaseUrl, supabaseServiceKey)
      await serviceSupabase.auth.admin.deleteUser(otherUserId)
    }
  })

  it('should handle pagination', async () => {
    if (!supabase) return

    // Create many notes
    const notes = Array.from({ length: 25 }, (_, i) => ({
      title: `Note ${i}`,
      content: [],
      userId: testUserId,
    }))

    const { data: createdNotes } = await supabase
      .from('notes')
      .insert(notes)
      .select()

    createdNoteIds.push(...createdNotes.map((n: any) => n.id))

    // Fetch first page
    const { data: page1, count: totalCount } = await supabase
      .from('notes')
      .select('*', { count: 'exact' })
      .eq('userId', testUserId)
      .order('created_at', { ascending: false })
      .range(0, 9)

    expect(page1).toHaveLength(10)
    expect(totalCount).toBe(25)

    // Fetch second page
    const { data: page2 } = await supabase
      .from('notes')
      .select('*')
      .eq('userId', testUserId)
      .order('created_at', { ascending: false })
      .range(10, 19)

    expect(page2).toHaveLength(10)
    expect(page2[0].id).not.toBe(page1[0].id)
  })
})
