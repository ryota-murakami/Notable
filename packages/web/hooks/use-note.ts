import { useCallback, useEffect, useState } from 'react'
import { notesService } from '@/lib/services/notes'
import { toast } from './use-toast'
import type { Database } from '@/types/database'

type Note = Database['public']['Tables']['notes']['Row']
type NoteUpdate = Partial<
  Pick<Note, 'title' | 'content' | 'folder_id' | 'is_hidden'>
>

export function useNote(noteId: string) {
  const [note, setNote] = useState<Note | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Load note data
  useEffect(() => {
    let mounted = true

    async function loadNote() {
      try {
        setLoading(true)
        setError(null)

        // For mock notes during testing, return mock note for mock IDs
        if (
          (process.env.NODE_ENV === 'test' || process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') &&
          (noteId.startsWith('mock-note-') || noteId.startsWith('test-'))
        ) {
          const mockNote: Note = {
            id: noteId,
            title:
              noteId === 'test-block-editor-note'
                ? 'Test Block Editor Note'
                : 'Untitled',
            content:
              noteId === 'test-block-editor-note'
                ? ''
                : JSON.stringify([
                    {
                      type: 'paragraph',
                      children: [
                        {
                          text: 'This is a test note for export functionality.',
                        },
                      ],
                    },
                  ]),
            user_id: 'mock-user-id',
            folder_id: null,
            is_hidden: false,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          }
          if (mounted) {
            setNote(mockNote)
            setLoading(false)
          }
          return
        }

        const response = await notesService.getNote(noteId)
        if (mounted) {
          setNote(response.note)
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Failed to load note')
          console.error('Failed to load note:', err)
        }
      } finally {
        if (mounted) {
          setLoading(false)
        }
      }
    }

    loadNote()

    return () => {
      mounted = false
    }
  }, [noteId])

  // Update note function
  const updateNote = useCallback(
    async (updates: NoteUpdate) => {
      if (!note) return

      try {
        // For mock notes during testing, update mock note locally
        if (
          (process.env.NODE_ENV === 'test' || process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') &&
          (noteId.startsWith('mock-note-') || noteId.startsWith('test-'))
        ) {
          const updatedNote: Note = {
            ...note,
            ...updates,
            updated_at: new Date().toISOString(),
          }
          setNote(updatedNote)
          return
        }

        const response = await notesService.updateNote(noteId, updates)
        setNote(response.note)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to update note')
        toast({
          title: 'Error updating note',
          description:
            'There was an error updating your note. Please try again.',
          variant: 'destructive',
        })
        console.error('Failed to update note:', err)
      }
    },
    [note, noteId]
  )

  const debouncedUpdateNote = useCallback(
    (updates: NoteUpdate) => {
      // Update local state immediately for responsiveness
      if (note) {
        setNote((prev: any) => (prev ? { ...prev, ...updates } : null))
      }
      // Update the note
      updateNote(updates)
    },
    [note, updateNote]
  )

  return {
    note,
    loading,
    error,
    updateNote: debouncedUpdateNote,
  }
}
