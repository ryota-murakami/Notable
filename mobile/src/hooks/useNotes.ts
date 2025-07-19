import { useState, useEffect, useCallback } from 'react'
import { supabase } from '@/components/SupabaseProvider'
import { Note, User } from '@/types'

interface UseNotesOptions {
  user?: User | null
}

export function useNotes({ user }: UseNotesOptions) {
  const [notes, setNotes] = useState<Note[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Load notes from Supabase
  const loadNotes = useCallback(async () => {
    if (!user) return

    setIsLoading(true)
    setError(null)

    try {
      const { data: notesData, error: notesError } = await supabase
        .from('notes')
        .select(
          `
          *,
          folder:folders(id, name),
          note_tags(
            tags(id, name, color)
          )
        `,
        )
        .eq('user_id', user.id)
        .is('deleted_at', null)
        .order('updated_at', { ascending: false })

      if (notesError) throw notesError

      // Transform Supabase data to Note format
      const transformedNotes: Note[] =
        notesData?.map((note) => ({
          id: note.id,
          title: note.title,
          content: note.content || '',
          createdAt: note.created_at,
          updatedAt: note.updated_at,
          parentId: note.folder_id,
          tags: note.note_tags?.map((nt: any) => nt.tags).filter(Boolean) || [],
          isFolder: false,
          userId: note.user_id,
          isPublic: note.is_public || false,
        })) || []

      // Load folders separately
      const { data: foldersData, error: foldersError } = await supabase
        .from('folders')
        .select('*')
        .eq('user_id', user.id)
        .order('updated_at', { ascending: false })

      if (foldersError) throw foldersError

      // Transform folders to Note format
      const transformedFolders: Note[] =
        foldersData?.map((folder) => ({
          id: folder.id,
          title: folder.name,
          content: '',
          createdAt: folder.created_at,
          updatedAt: folder.updated_at,
          parentId: folder.parent_id,
          tags: [],
          isFolder: true,
          userId: folder.user_id,
        })) || []

      const allNotes = [...transformedNotes, ...transformedFolders]
      setNotes(allNotes)
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to load notes'
      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }, [user])

  // Create a new note
  const createNote = useCallback(
    async (parentId?: string | null) => {
      if (!user) return null

      const newNote: Note = {
        id: crypto.randomUUID(),
        title: 'Untitled',
        content: '',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        parentId,
        tags: [],
        isFolder: false,
        userId: user.id,
      }

      try {
        const { error } = await supabase.from('notes').insert({
          id: newNote.id,
          title: newNote.title,
          content: newNote.content,
          user_id: user.id,
          folder_id: parentId,
          updated_at: new Date().toISOString(),
        })

        if (error) throw error

        setNotes((prevNotes) => [newNote, ...prevNotes])
        return newNote
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : 'Failed to create note'
        setError(errorMessage)
        return null
      }
    },
    [user],
  )

  // Update a note
  const updateNote = useCallback(
    async (noteId: string, updates: Partial<Note>) => {
      if (!user) return false

      try {
        const { error } = await supabase
          .from('notes')
          .update({
            title: updates.title,
            content: updates.content,
            updated_at: new Date().toISOString(),
          })
          .eq('id', noteId)
          .eq('user_id', user.id)

        if (error) throw error

        setNotes((prevNotes) =>
          prevNotes.map((note) =>
            note.id === noteId
              ? { ...note, ...updates, updatedAt: new Date().toISOString() }
              : note,
          ),
        )

        return true
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : 'Failed to update note'
        setError(errorMessage)
        return false
      }
    },
    [user],
  )

  // Delete a note
  const deleteNote = useCallback(
    async (noteId: string) => {
      if (!user) return false

      try {
        const { error } = await supabase
          .from('notes')
          .update({ deleted_at: new Date().toISOString() })
          .eq('id', noteId)
          .eq('user_id', user.id)

        if (error) throw error

        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId))
        return true
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : 'Failed to delete note'
        setError(errorMessage)
        return false
      }
    },
    [user],
  )

  // Load notes when user changes
  useEffect(() => {
    loadNotes()
  }, [loadNotes])

  // Subscribe to real-time changes
  useEffect(() => {
    if (!user) return

    const subscription = supabase
      .channel('notes_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'notes',
          filter: `user_id=eq.${user.id}`,
        },
        () => {
          // Reload notes when changes occur
          loadNotes()
        },
      )
      .subscribe()

    return () => {
      subscription.unsubscribe()
    }
  }, [user, loadNotes])

  return {
    notes,
    isLoading,
    error,
    createNote,
    updateNote,
    deleteNote,
    loadNotes,
  }
}
