import { renderHook, act, waitFor } from '@testing-library/react'
import { useSupabaseNotes } from '@/hooks/use-supabase-notes'
import { User } from '@supabase/supabase-js'
import { Note } from '@/types/note'

jest.mock('@/lib/supabase', () => ({
  supabase: {
    from: jest.fn(),
    channel: jest.fn(() => ({
      on: jest.fn().mockReturnThis(),
      subscribe: jest.fn(),
    })),
    removeChannel: jest.fn(),
  },
}))
import { supabase } from '@/lib/supabase'

const mockUser: User = {
  id: 'user-123',
  app_metadata: {},
  user_metadata: { name: 'Test User' },
  aud: 'authenticated',
  created_at: new Date().toISOString(),
}

const mockNotes: Note[] = [
  {
    id: 'note-1',
    title: 'Test Note 1',
    content: 'Content 1',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    parentId: null,
    tags: [],
    isFolder: false,
  },
  {
    id: 'note-2',
    title: 'Test Note 2',
    content: 'Content 2',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    parentId: 'note-1',
    tags: ['react'],
    isFolder: false,
  },
]

describe('useSupabaseNotes', () => {
  beforeEach(() => {
    ;(supabase.from as jest.Mock).mockImplementation((table: string) => {
      if (table === 'notes') {
        return {
          select: jest.fn().mockReturnThis(),
          insert: jest
            .fn()
            .mockResolvedValue({ data: [mockNotes[0]], error: null }),
          update: jest
            .fn()
            .mockResolvedValue({ data: [mockNotes[0]], error: null }),
          delete: jest.fn().mockResolvedValue({ data: [], error: null }),
          eq: jest.fn().mockReturnThis(),
          is: jest.fn().mockReturnThis(),
          order: jest.fn().mockResolvedValue({ data: mockNotes, error: null }),
          single: jest
            .fn()
            .mockResolvedValue({ data: mockNotes[0], error: null }),
        }
      }
      return {
        select: jest.fn().mockReturnThis(),
        insert: jest.fn().mockResolvedValue({ data: [], error: null }),
        update: jest.fn().mockResolvedValue({ data: [], error: null }),
        delete: jest.fn().mockResolvedValue({ data: [], error: null }),
        eq: jest.fn().mockReturnThis(),
        is: jest.fn().mockReturnThis(),
        order: jest.fn().mockResolvedValue({ data: [], error: null }),
        single: jest.fn().mockResolvedValue({ data: null, error: null }),
      }
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should initialize with correct default values', () => {
    const { result } = renderHook(() => useSupabaseNotes({ user: mockUser }))
    expect(result.current.notes).toEqual([])
    expect(result.current.isLoading).toBe(true)
  })

  it('should load notes for a user', async () => {
    const { result } = renderHook(() => useSupabaseNotes({ user: mockUser }))

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
    })

    expect(result.current.notes).toHaveLength(2)
    expect(result.current.notes[0].title).toBe('Test Note 1')
  })

  it('should handle error when loading notes', async () => {
    ;(supabase.from as jest.Mock).mockReturnValueOnce({
      select: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      is: jest.fn().mockReturnThis(),
      order: jest.fn().mockResolvedValue({
        data: null,
        error: new Error('Failed to fetch'),
      }),
    })

    const { result } = renderHook(() => useSupabaseNotes({ user: mockUser }))

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
    })
    expect(result.current.error).toBe('Failed to fetch')
  })

  it('should create a new note', async () => {
    const { result } = renderHook(() => useSupabaseNotes({ user: mockUser }))
    await waitFor(() => expect(result.current.isLoading).toBe(false))

    let newNote: Note | null = null
    await act(async () => {
      newNote = await result.current.createNote()
    })

    expect(newNote).not.toBeNull()
    expect(newNote?.title).toBe('Untitled Note')
    await waitFor(() => {
      expect(
        result.current.notes.find((n) => n.id === newNote?.id),
      ).toBeDefined()
    })
  })

  it('should update a note', async () => {
    const { result } = renderHook(() =>
      useSupabaseNotes({ user: mockUser, activeNoteId: 'note-1' }),
    )
    await waitFor(() => expect(result.current.isLoading).toBe(false))

    await act(async () => {
      const noteToUpdate = result.current.notes.find((n) => n.id === 'note-1')
      if (noteToUpdate) {
        await result.current.saveNote({
          ...noteToUpdate,
          title: 'Updated Title',
        })
      }
    })

    await waitFor(() => {
      const updatedNote = result.current.notes.find((n) => n.id === 'note-1')
      expect(updatedNote?.title).toBe('Updated Title')
    })
  })

  it('should delete a note', async () => {
    const { result } = renderHook(() => useSupabaseNotes({ user: mockUser }))
    await waitFor(() => expect(result.current.isLoading).toBe(false))

    await act(async () => {
      await result.current.deleteNote('note-1')
    })

    await waitFor(() => {
      expect(
        result.current.notes.find((n) => n.id === 'note-1'),
      ).toBeUndefined()
    })
  })
})
