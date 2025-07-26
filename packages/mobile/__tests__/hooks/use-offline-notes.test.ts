import { act, renderHook } from '@testing-library/react-native'
import { useOfflineNotes } from '../../hooks/use-offline-notes'

describe('useOfflineNotes', () => {
  it('initializes with correct default state', () => {
    const { result } = renderHook(() => useOfflineNotes())

    expect(result.current.notes).toEqual([])
    expect(result.current.isLoading).toBe(false)
    expect(result.current.isSaving).toBe(false)
    expect(result.current.onlineUsers).toEqual([])
    expect(result.current.typingUsers).toEqual([])
  })

  it('provides all required functions', () => {
    const { result } = renderHook(() => useOfflineNotes())

    expect(typeof result.current.createNote).toBe('function')
    expect(typeof result.current.updateNote).toBe('function')
    expect(typeof result.current.deleteNote).toBe('function')
    expect(typeof result.current.startTyping).toBe('function')
    expect(typeof result.current.stopTyping).toBe('function')
  })

  it('accepts options parameter', () => {
    const options = { someOption: 'value' }
    const { result } = renderHook(() => useOfflineNotes(options))

    // Should not throw and should initialize correctly
    expect(result.current.notes).toEqual([])
  })

  describe('createNote', () => {
    it('creates a note with provided data', async () => {
      const { result } = renderHook(() => useOfflineNotes())

      const noteData = {
        title: 'Test Note',
        content: 'Test content',
      }

      let createdNote: any
      await act(async () => {
        createdNote = await result.current.createNote(noteData)
      })

      expect(createdNote).toBeDefined()
      expect(createdNote.title).toBe('Test Note')
      expect(createdNote.content).toBe('Test content')
      expect(createdNote.is_folder).toBe(false)
      expect(typeof createdNote.id).toBe('string')
    })

    it('creates a note with default values when data is missing', async () => {
      const { result } = renderHook(() => useOfflineNotes())

      let createdNote: any
      await act(async () => {
        createdNote = await result.current.createNote({})
      })

      expect(createdNote).toBeDefined()
      expect(createdNote.title).toBe('Untitled')
      expect(createdNote.content).toBe('')
      expect(createdNote.is_folder).toBe(false)
    })

    it('creates a folder when is_folder is true', async () => {
      const { result } = renderHook(() => useOfflineNotes())

      const folderData = {
        title: 'Test Folder',
        is_folder: true,
      }

      let createdNote: any
      await act(async () => {
        createdNote = await result.current.createNote(folderData)
      })

      expect(createdNote).toBeDefined()
      expect(createdNote.title).toBe('Test Folder')
      expect(createdNote.is_folder).toBe(true)
    })

    it('generates unique IDs for each note', async () => {
      const { result } = renderHook(() => useOfflineNotes())

      let note1: any, note2: any
      await act(async () => {
        note1 = await result.current.createNote({ title: 'Note 1' })
        note2 = await result.current.createNote({ title: 'Note 2' })
      })

      expect(note1.id).toBeDefined()
      expect(note2.id).toBeDefined()
      expect(note1.id).not.toBe(note2.id)
    })
  })

  describe('updateNote', () => {
    it('calls updateNote without throwing', async () => {
      const { result } = renderHook(() => useOfflineNotes())

      await act(async () => {
        await expect(
          result.current.updateNote('test-id', { title: 'Updated Title' })
        ).resolves.toBeUndefined()
      })
    })
  })

  describe('deleteNote', () => {
    it('calls deleteNote without throwing', async () => {
      const { result } = renderHook(() => useOfflineNotes())

      await act(async () => {
        await expect(
          result.current.deleteNote('test-id')
        ).resolves.toBeUndefined()
      })
    })
  })

  describe('typing functions', () => {
    it('calls startTyping without throwing', () => {
      const { result } = renderHook(() => useOfflineNotes())

      expect(() => result.current.startTyping()).not.toThrow()
    })

    it('calls stopTyping without throwing', () => {
      const { result } = renderHook(() => useOfflineNotes())

      expect(() => result.current.stopTyping()).not.toThrow()
    })
  })

  describe('state consistency', () => {
    it('maintains state throughout hook lifecycle', () => {
      const { result, rerender } = renderHook(() => useOfflineNotes())

      const initialNotes = result.current.notes
      const initialIsLoading = result.current.isLoading

      rerender({})

      expect(result.current.notes).toBe(initialNotes)
      expect(result.current.isLoading).toBe(initialIsLoading)
    })
  })

  describe('error handling', () => {
    it('handles undefined options gracefully', () => {
      expect(() => {
        renderHook(() => useOfflineNotes(undefined))
      }).not.toThrow()
    })

    it('handles null options gracefully', () => {
      expect(() => {
        renderHook(() => useOfflineNotes(null))
      }).not.toThrow()
    })
  })
})
