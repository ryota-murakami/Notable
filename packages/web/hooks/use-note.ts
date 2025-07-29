import { useState, useEffect, useCallback } from 'react'
import { notesService } from '@/lib/services/notes'
import { useAutoSave } from './use-auto-save'
import { toast } from './use-toast'
import type { Database } from '@/types/supabase'

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

  // Set up auto-save for title and content changes
  const { save: autoSaveNote, isAutoSaving } = useAutoSave(
    useCallback((data: NoteUpdate) => updateNote(data), [updateNote]),
    500 // 500ms debounce
  )

  const debouncedUpdateNote = useCallback(
    (updates: NoteUpdate) => {
      // Update local state immediately for responsiveness
      if (note) {
        setNote((prev) => (prev ? { ...prev, ...updates } : null))
      }
      // Trigger auto-save
      autoSaveNote(updates)
    },
    [note, autoSaveNote]
  )

  return {
    note,
    loading,
    error,
    updateNote: debouncedUpdateNote,
    isAutoSaving,
  }
}
