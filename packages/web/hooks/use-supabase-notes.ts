'use client'

import { useState, useEffect, useCallback } from 'react'
import { supabase } from '@/lib/supabase'
import { useRealtimeSync } from '@/hooks/use-realtime-sync'
import { useToast } from '@/hooks/use-toast'
import type { Note } from '@/types/note'
import type { User } from '@supabase/supabase-js'
import type { RealtimeUser } from '@/types/realtime'

interface UseSupabaseNotesOptions {
  user?: User | null
  activeNoteId?: string
}

export function useSupabaseNotes({
  user,
  activeNoteId,
}: UseSupabaseNotesOptions) {
  const [notes, setNotes] = useState<Note[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()

  // Real-time sync configuration
  const realtimeUser: RealtimeUser | undefined = user
    ? {
        id: user.id,
        name: user.user_metadata?.name || user.email || 'Anonymous',
        avatar: user.user_metadata?.avatar_url,
      }
    : undefined

  // Setup real-time sync
  const {
    isConnected,
    connectionError,
    onlineUsers,
    typingUsers,
    startTyping,
    stopTyping,
    broadcastNoteUpdate,
  } = useRealtimeSync({
    noteId: activeNoteId,
    user: realtimeUser,
    onNoteUpdate: handleRealtimeNoteUpdate,
    onUserTyping: (users) => {
      // Handle typing indicators
      console.log('Users typing:', users)
    },
    onPresenceChange: (users) => {
      // Handle presence changes
      console.log('Online users:', users)
    },
  })

  // Handle real-time note updates
  function handleRealtimeNoteUpdate(updatedNote: Note) {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === updatedNote.id ? updatedNote : note,
      ),
    )

    toast({
      title: 'Note updated',
      description: 'This note was updated by another user.',
    })
  }

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
          content:
            typeof note.content === 'string'
              ? note.content
              : JSON.stringify(note.content),
          createdAt: note.created_at,
          updatedAt: note.updated_at,
          parentId: note.folder_id,
          tags: note.note_tags?.map((nt) => nt.tags.name).filter(Boolean) || [],
          isFolder: false,
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
        })) || []

      const allNotes = [...transformedNotes, ...transformedFolders]
      setNotes(allNotes)
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to load notes'
      setError(errorMessage)
      toast({
        title: 'Error loading notes',
        description: errorMessage,
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }, [user, toast])

  // Save note to Supabase
  const saveNote = useCallback(
    async (note: Note) => {
      if (!user) return false

      setIsSaving(true)
      setError(null)

      try {
        if (note.isFolder) {
          // Handle folder
          const { error } = await supabase.from('folders').upsert({
            id: note.id,
            name: note.title,
            user_id: user.id,
            parent_id: note.parentId,
            updated_at: new Date().toISOString(),
          })

          if (error) throw error
        } else {
          // Handle note
          const { error } = await supabase.from('notes').upsert({
            id: note.id,
            title: note.title,
            content: note.content,
            user_id: user.id,
            folder_id: note.parentId,
            updated_at: new Date().toISOString(),
          })

          if (error) throw error

          // Handle tags if present
          if (note.tags && note.tags.length > 0) {
            // First, remove existing tags
            await supabase.from('note_tags').delete().eq('note_id', note.id)

            // Then add new tags
            for (const tagName of note.tags) {
              // Ensure tag exists
              const { data: existingTag } = await supabase
                .from('tags')
                .select('id')
                .eq('name', tagName)
                .eq('user_id', user.id)
                .single()

              let tagId = existingTag?.id

              if (!tagId) {
                // Create new tag
                const { data: newTag, error: tagError } = await supabase
                  .from('tags')
                  .insert({
                    name: tagName,
                    user_id: user.id,
                  })
                  .select('id')
                  .single()

                if (tagError) throw tagError
                tagId = newTag.id
              }

              // Link tag to note
              await supabase.from('note_tags').insert({
                note_id: note.id,
                tag_id: tagId,
              })
            }
          }
        }

        // Broadcast update to other users
        broadcastNoteUpdate(note)

        // Update local state
        setNotes((prevNotes) =>
          prevNotes.map((n) =>
            n.id === note.id
              ? { ...note, updatedAt: new Date().toISOString() }
              : n,
          ),
        )

        return true
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : 'Failed to save note'
        setError(errorMessage)
        toast({
          title: 'Error saving note',
          description: errorMessage,
          variant: 'destructive',
        })
        return false
      } finally {
        setIsSaving(false)
      }
    },
    [user, toast, broadcastNoteUpdate],
  )

  // Create new note
  const createNote = useCallback(
    async (parentId: string | null = null) => {
      if (!user) return null

      setIsLoading(true)
      try {
        const newNote: Omit<Note, 'id' | 'createdAt' | 'updatedAt'> = {
          title: 'Untitled Note',
          content: '',
          parentId: parentId,
          isFolder: false,
          tags: [],
        }

        const { data, error } = await supabase
          .from('notes')
          .insert({ ...newNote, user_id: user.id })
          .select()
          .single()

        if (error) throw error

        const createdNote = data as Note
        setNotes((prevNotes) => [createdNote, ...prevNotes])
        return createdNote
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : 'Failed to create note'
        setError(errorMessage)
        toast({
          title: 'Error creating note',
          description: errorMessage,
          variant: 'destructive',
        })
        return null
      } finally {
        setIsLoading(false)
      }
    },
    [user, toast],
  )

  // Create new folder
  const createFolder = useCallback(
    async (parentId: string | null = null) => {
      if (!user) return null

      setIsLoading(true)
      try {
        const newFolder: Partial<Note> = {
          title: 'New Folder',
          isFolder: true,
          parentId: parentId,
          tags: [],
        }
        const { data, error } = await supabase
          .from('folders')
          .insert({
            name: newFolder.title,
            user_id: user.id,
            parent_id: newFolder.parentId,
          })
          .select()
          .single()

        if (error) throw error

        const createdFolder = { ...newFolder, ...data } as Note
        setNotes((prevNotes) => [createdFolder, ...prevNotes])
        return createdFolder
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : 'Failed to create folder'
        setError(errorMessage)
        toast({
          title: 'Error creating folder',
          description: errorMessage,
          variant: 'destructive',
        })
        return null
      } finally {
        setIsLoading(false)
      }
    },
    [user, toast],
  )

  // Delete note
  const deleteNote = useCallback(
    async (noteId: string) => {
      if (!user) return false

      try {
        const note = notes.find((n) => n.id === noteId)
        if (!note) return false

        if (note.isFolder) {
          // Delete folder
          const { error } = await supabase
            .from('folders')
            .delete()
            .eq('id', noteId)
            .eq('user_id', user.id)

          if (error) throw error
        } else {
          // Soft delete note
          const { error } = await supabase
            .from('notes')
            .update({ deleted_at: new Date().toISOString() })
            .eq('id', noteId)
            .eq('user_id', user.id)

          if (error) throw error
        }

        // Remove from local state
        setNotes((prevNotes) => prevNotes.filter((n) => n.id !== noteId))
        return true
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : 'Failed to delete note'
        setError(errorMessage)
        toast({
          title: 'Error deleting note',
          description: errorMessage,
          variant: 'destructive',
        })
        return false
      }
    },
    [user, notes, toast],
  )

  // Load notes when user changes
  useEffect(() => {
    loadNotes()
  }, [loadNotes])

  return {
    notes,
    isLoading,
    isSaving,
    error,
    createNote,
    createFolder,
    saveNote,
    deleteNote,
    loadNotes,
    // Real-time sync state
    isConnected,
    connectionError,
    onlineUsers,
    typingUsers,
    startTyping,
    stopTyping,
  }
}
