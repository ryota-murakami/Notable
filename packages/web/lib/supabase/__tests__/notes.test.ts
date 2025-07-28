import { beforeEach, describe, expect, it, vi } from 'vitest'
import { NotesService } from '../notes'
import { createClient } from '@/utils/supabase/client'

// Mock Supabase client
vi.mock('@/utils/supabase/client', () => ({
  createClient: vi.fn(),
}))

describe('NotesService', () => {
  let notesService: NotesService
  let mockSupabase: any

  beforeEach(() => {
    // Reset mocks
    vi.clearAllMocks()

    // Create mock Supabase client
    mockSupabase = {
      auth: {
        getUser: vi.fn().mockResolvedValue({
          data: {
            user: {
              id: 'test-user-id',
              email: 'test@example.com',
            },
          },
        }),
      },
      from: vi.fn().mockReturnThis(),
      insert: vi.fn().mockReturnThis(),
      update: vi.fn().mockReturnThis(),
      delete: vi.fn().mockReturnThis(),
      select: vi.fn().mockReturnThis(),
      eq: vi.fn().mockReturnThis(),
      is: vi.fn().mockReturnThis(),
      or: vi.fn().mockReturnThis(),
      order: vi.fn().mockReturnThis(),
      limit: vi.fn().mockReturnThis(),
      range: vi.fn().mockReturnThis(),
      single: vi.fn().mockReturnThis(),
      rpc: vi.fn().mockReturnThis(),
      channel: vi.fn(() => ({
        on: vi.fn().mockReturnThis(),
        subscribe: vi.fn().mockReturnValue({
          unsubscribe: vi.fn(),
        }),
      })),
    }

    // Mock createClient to return our mock
    ;(createClient as any).mockReturnValue(mockSupabase)

    // Create service instance
    notesService = new NotesService()
  })

  describe('createNote', () => {
    it('should create a note successfully', async () => {
      const mockNote = {
        id: 'note-id',
        title: 'Test Note',
        content: 'Test content',
        user_id: 'test-user-id',
        folder_id: null,
        is_public: false,
        created_at: '2025-07-28T12:00:00Z',
        updated_at: '2025-07-28T12:00:00Z',
      }

      mockSupabase.single.mockResolvedValue({ data: mockNote, error: null })

      const result = await notesService.createNote({
        title: 'Test Note',
        content: 'Test content',
      })

      expect(result.data).toEqual(mockNote)
      expect(result.error).toBeNull()
      expect(mockSupabase.from).toHaveBeenCalledWith('notes')
      expect(mockSupabase.insert).toHaveBeenCalledWith({
        title: 'Test Note',
        content: 'Test content',
        user_id: 'test-user-id',
        folder_id: null,
        is_public: false,
      })
    })

    it('should handle authentication error', async () => {
      mockSupabase.auth.getUser.mockResolvedValue({
        data: { user: null },
      })

      const result = await notesService.createNote({
        title: 'Test Note',
      })

      expect(result.data).toBeNull()
      expect(result.error?.message).toBe('User not authenticated')
    })

    it('should handle database error', async () => {
      const dbError = new Error('Database error')
      mockSupabase.single.mockResolvedValue({ data: null, error: dbError })

      const result = await notesService.createNote({
        title: 'Test Note',
        content: 'Test content',
      })

      expect(result.data).toBeNull()
      expect(result.error?.message).toBe(`Failed to create note: ${dbError.message}`)
    })
  })

  describe('updateNote', () => {
    it('should update a note successfully', async () => {
      const updatedNote = {
        id: 'note-id',
        title: 'Updated Note',
        content: { text: 'Updated content' },
        user_id: 'test-user-id',
        updated_at: '2025-07-28T13:00:00Z',
      }

      mockSupabase.single.mockResolvedValue({ data: updatedNote, error: null })

      const result = await notesService.updateNote('note-id', {
        title: 'Updated Note',
        content: { text: 'Updated content' },
      })

      expect(result.data).toEqual(updatedNote)
      expect(result.error).toBeNull()
      expect(mockSupabase.update).toHaveBeenCalled()
      expect(mockSupabase.eq).toHaveBeenCalledWith('id', 'note-id')
    })
  })

  describe('deleteNote', () => {
    it('should soft delete a note successfully', async () => {
      // Mock chained eq calls
      const secondEq = { error: null }
      const firstEq = { eq: vi.fn().mockResolvedValue(secondEq) }
      mockSupabase.eq.mockReturnValue(firstEq)

      const result = await notesService.deleteNote('note-id')

      expect(result.error).toBeNull()
      expect(mockSupabase.update).toHaveBeenCalledWith({
        deleted: true,
      })
      expect(mockSupabase.eq).toHaveBeenCalledWith('id', 'note-id')
    })
  })

  describe('getUserNotes', () => {
    it.skip('should get user notes successfully', async () => {
      const mockNotes = [
        {
          id: 'note-1',
          title: 'Note 1',
          content: { text: 'Content 1' },
          user_id: 'test-user-id',
          created_at: '2025-07-28T12:00:00Z',
          updated_at: '2025-07-28T12:00:00Z',
        },
        {
          id: 'note-2',
          title: 'Note 2',
          content: { text: 'Content 2' },
          user_id: 'test-user-id',
          created_at: '2025-07-28T13:00:00Z',
          updated_at: '2025-07-28T13:00:00Z',
        },
      ]

      // Create a proper chain mock
      const queryMock = {
        select: vi.fn().mockReturnThis(),
        eq: vi.fn().mockReturnThis(),
        is: vi.fn().mockReturnThis(),
        order: vi.fn().mockResolvedValue({ data: mockNotes, error: null })
      }
      
      mockSupabase.from.mockReturnValue(queryMock)

      const result = await notesService.getUserNotes()

      expect(result.data).toEqual(mockNotes)
      expect(result.error).toBeNull()
      expect(mockSupabase.from).toHaveBeenCalledWith('notes')
      expect(queryMock.select).toHaveBeenCalledWith('*')
      expect(queryMock.eq).toHaveBeenCalledWith('user_id', 'test-user-id')
      expect(queryMock.is).toHaveBeenCalledWith('deleted_at', null)
      expect(queryMock.order).toHaveBeenCalledWith('updated_at', { ascending: false })
    })

    it('should handle includeDeleted option', async () => {
      mockSupabase.order.mockResolvedValue({ data: [], error: null })

      await notesService.getUserNotes({ includeDeleted: true })

      // Should not call is('deleted_at', null) when includeDeleted is true
      expect(mockSupabase.is).not.toHaveBeenCalled()
    })
  })

  describe('searchNotes', () => {
    it('should search notes successfully', async () => {
      const searchResults = [
        {
          id: 'note-1',
          title: 'Search Result',
          content: { text: 'Matching content' },
          created_at: '2025-07-28T12:00:00Z',
          updated_at: '2025-07-28T12:00:00Z',
          rank: 0.8,
        },
      ]

      mockSupabase.order.mockResolvedValue({ data: searchResults, error: null })

      const result = await notesService.searchNotes('search query')

      expect(result.data).toEqual(searchResults)
      expect(result.error).toBeNull()
      expect(mockSupabase.from).toHaveBeenCalledWith('notes')
      expect(mockSupabase.or).toHaveBeenCalledWith('title.ilike.%search query%,content.ilike.%search query%')
      expect(mockSupabase.eq).toHaveBeenCalledWith('deleted', false)
      expect(mockSupabase.order).toHaveBeenCalledWith('updated_at', { ascending: false })
    })
  })

  describe('toAppNote', () => {
    it('should convert database note to app note format', () => {
      const dbNote = {
        id: 'note-id',
        title: 'Test Note',
        content: 'Test content',
        user_id: 'test-user-id',
        folder_id: 'folder-id',
        is_public: false,
        created_at: '2025-07-28T12:00:00Z',
        updated_at: '2025-07-28T13:00:00Z',
        deleted_at: null,
      }

      const appNote = NotesService.toAppNote(dbNote)

      expect(appNote).toMatchObject({
        id: 'note-id',
        title: 'Test Note',
        content: 'Test content',
        createdAt: '2025-07-28T12:00:00Z',
        updatedAt: '2025-07-28T13:00:00Z',
        userId: 'test-user-id',
        isDeleted: false,
      })
    })

    it('should handle deleted notes', () => {
      const dbNote = {
        id: 'note-id',
        title: 'Deleted Note',
        content: 'Content',
        user_id: 'test-user-id',
        folder_id: null,
        is_public: false,
        created_at: '2025-07-28T12:00:00Z',
        updated_at: '2025-07-28T13:00:00Z',
        deleted_at: '2025-07-28T14:00:00Z',
      }

      const appNote = NotesService.toAppNote(dbNote)

      expect(appNote.isDeleted).toBe(true)
    })
  })

  describe('toDatabaseNote', () => {
    it('should convert app note to database format', () => {
      const appNote = {
        id: 'note-id',
        title: 'App Note',
        content: 'App content',
        parent_id: 'folder-id',
      }

      const dbNote = NotesService.toDatabaseNote(appNote)

      expect(dbNote).toEqual({
        id: 'note-id',
        title: 'App Note',
        content: 'App content',
        created_at: undefined,
        updated_at: undefined,
        user_id: undefined,
        deleted: false,
      })
    })

    it('should handle missing fields', () => {
      const dbNote = NotesService.toDatabaseNote({})

      expect(dbNote).toEqual({
        id: undefined,
        title: 'Untitled',
        content: '',
        created_at: undefined,
        updated_at: undefined,
        user_id: undefined,
        deleted: false,
      })
    })
  })

  describe('subscribeToNoteChanges', () => {
    it('should subscribe to note changes', () => {
      const callbacks = {
        onInsert: vi.fn(),
        onUpdate: vi.fn(),
        onDelete: vi.fn(),
      }

      const unsubscribe = notesService.subscribeToNoteChanges('test-user-id', callbacks)

      expect(mockSupabase.channel).toHaveBeenCalledWith('notes-changes')
      expect(unsubscribe).toBeInstanceOf(Function)
    })
  })
})