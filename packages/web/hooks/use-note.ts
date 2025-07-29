import { useState, useEffect, useCallback } from 'react'
import { notesService } from '@/lib/services/notes'
import { toast } from './use-toast'
import { isTest } from '@/lib/utils/environment'
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

        // In test environment, return mock note for mock IDs
        if (isTest() && noteId.startsWith('mock-note-')) {
          const mockNote: Note = {
            id: noteId,
            title: 'Untitled',
            content: '',
            user_id: 'mock-user-id',
            folder_id: null,
            is_hidden: false,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          }
          if (mounted) {
            setNote(mockNote)
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
        // In test environment, update mock note locally
        if (isTest() && noteId.startsWith('mock-note-')) {
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
