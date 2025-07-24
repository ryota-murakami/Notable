'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRealtimeSync } from '@/hooks/use-realtime-sync'
import { useToast } from '@/hooks/use-toast'
import type { Note } from '@/types/note'
import { useSupabase } from '@/components/supabase-provider'
import { offlineManager } from '@/lib/offline-manager'

interface UseSupabaseNotesOptions {
  activeNoteId?: string
}

export function useSupabaseNotes({ activeNoteId }: UseSupabaseNotesOptions) {
  const { user, supabase } = useSupabase()
  const [notes, setNotes] = useState<Note[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()

  // Real-time sync configuration (commented out since unused)
  // const realtimeUser: RealtimeUser | undefined = user
  //   ? {
  //       id: user.id,
  //       name: user.user_metadata?.name || user.email || 'Anonymous',
  //       avatar: user.user_metadata?.avatar_url,
  //     }
  //   : undefined

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
    noteId: activeNoteId || '',
    onNoteUpdate: handleRealtimeNoteUpdate,
    onUserJoin: (users: any) => {
      // Handle typing indicators
      console.log('Users typing:', users)
    },
    onUserLeave: (users: any) => {
      // Handle presence changes
      console.log('Online users:', users)
    },
  })

  // Handle real-time note updates
  function handleRealtimeNoteUpdate(updatedNote: Note) {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    )

    toast({
      title: 'Note updated',
      description: 'This note was updated by another user.',
    })
  }

  // Load notes from Supabase
  const loadNotes = useCallback(async () => {
    if (!user || !supabase) return

    setIsLoading(true)
    setError(null)

    try {
      // Check if offline
      if (!offlineManager.isOnline()) {
        // Load from cache when offline
        const cachedNotes = await offlineManager.getCachedNotes()
        setNotes(cachedNotes)
        toast({
          title: 'Offline Mode',
          description: 'Loading notes from local cache',
        })
        return
      }

      const { data: notesData, error: notesError } = await supabase
        .from('notes')
        .select(
          `
          *,
          folder:folders(id, name),
          note_tags(
            tags(id, name, color)
          )
        `
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
          userId: note.user_id,
          createdAt: note.created_at,
          updatedAt: note.updated_at,
          parentId: note.folder_id,
          tags:
            note.note_tags?.map((nt: any) => nt.tags.name).filter(Boolean) ||
            [],
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
          userId: folder.user_id,
          createdAt: folder.created_at,
          updatedAt: folder.updated_at,
          parentId: folder.parent_id,
          tags: [],
          isFolder: true,
        })) || []

      const allNotes = [...transformedNotes, ...transformedFolders]
      setNotes(allNotes)

      // Cache notes for offline access
      for (const note of allNotes) {
        await offlineManager.cacheNote(note)
      }
    } catch (err) {
      // Try to load from cache on error
      const cachedNotes = await offlineManager.getCachedNotes()
      if (cachedNotes.length > 0) {
        setNotes(cachedNotes)
        toast({
          title: 'Offline Mode',
          description: 'Unable to sync. Loading notes from cache.',
          variant: 'default',
        })
      } else {
        const errorMessage =
          err instanceof Error ? err.message : 'Failed to load notes'
        setError(errorMessage)
        toast({
          title: 'Error loading notes',
          description: errorMessage,
          variant: 'destructive',
        })
      }
    } finally {
      setIsLoading(false)
    }
  }, [user, supabase, toast])

  // Save note to Supabase
  const saveNote = useCallback(
    async (note: Note) => {
      if (!user || !supabase) return false

      setIsSaving(true)
      setError(null)

      try {
        // Update local state immediately
        setNotes((prevNotes) =>
          prevNotes.map((n) =>
            n.id === note.id
              ? { ...note, updatedAt: new Date().toISOString() }
              : n
          )
        )

        // Cache the note for offline access
        await offlineManager.cacheNote(note)

        // Check if offline
        if (!offlineManager.isOnline()) {
          // Queue for later sync
          await offlineManager.addToSyncQueue({
            type: 'update',
            table: note.isFolder ? 'folders' : 'notes',
            data: note.isFolder
              ? {
                  id: note.id,
                  name: note.title,
                  user_id: user.id,
                  parent_id: note.parentId,
                  updated_at: new Date().toISOString(),
                }
              : {
                  id: note.id,
                  title: note.title,
                  content: note.content,
                  user_id: user.id,
                  folder_id: note.parentId,
                  updated_at: new Date().toISOString(),
                  tags: note.tags,
                },
            status: 'pending',
          })

          toast({
            title: 'Saved Offline',
            description: "Changes will sync when you're back online",
          })
          return true
        }

        // Online - sync immediately
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

        return true
      } catch (err) {
        // On error, queue for later sync
        await offlineManager.addToSyncQueue({
          type: 'update',
          table: note.isFolder ? 'folders' : 'notes',
          data: note.isFolder
            ? {
                id: note.id,
                name: note.title,
                user_id: user.id,
                parent_id: note.parentId,
                updated_at: new Date().toISOString(),
              }
            : {
                id: note.id,
                title: note.title,
                content: note.content,
                user_id: user.id,
                folder_id: note.parentId,
                updated_at: new Date().toISOString(),
                tags: note.tags,
              },
          status: 'pending',
        })

        const errorMessage =
          err instanceof Error ? err.message : 'Failed to save note'
        setError(errorMessage)
        toast({
          title: 'Saved locally',
          description: 'Changes saved offline and will sync later',
          variant: 'default',
        })
        return true // Return true since we queued it
      } finally {
        setIsSaving(false)
      }
    },
    [user, supabase, toast, broadcastNoteUpdate]
  )

  // Create new note
  const createNote = useCallback(
    async (parentId: string | null = null) => {
      if (!user || !supabase) return null

      setIsLoading(true)
      try {
        const tempId = `temp_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
        const timestamp = new Date().toISOString()

        const newNote: Note = {
          id: tempId,
          title: 'Untitled Note',
          content: '',
          userId: user.id,
          parentId,
          isFolder: false,
          tags: [],
          createdAt: timestamp,
          updatedAt: timestamp,
        }

        // Add to local state immediately
        setNotes((prevNotes) => [newNote, ...prevNotes])

        // Cache the note
        await offlineManager.cacheNote(newNote)

        // Check if offline
        if (!offlineManager.isOnline()) {
          // Queue for later sync
          await offlineManager.addToSyncQueue({
            type: 'create',
            table: 'notes',
            data: {
              title: newNote.title,
              content: newNote.content,
              user_id: user.id,
              folder_id: parentId,
              created_at: timestamp,
              updated_at: timestamp,
            },
            status: 'pending',
          })

          toast({
            title: 'Note created offline',
            description: "Will sync when you're back online",
          })
          return newNote
        }

        // Online - create on server
        const { data, error } = await supabase
          .from('notes')
          .insert({
            title: newNote.title,
            content: newNote.content,
            user_id: user.id,
            folder_id: parentId,
          })
          .select()
          .single()

        if (error) throw error

        // Update with real ID from server
        const createdNote: Note = {
          ...newNote,
          id: data.id,
          createdAt: data.created_at,
          updatedAt: data.updated_at,
        }

        // Update local state with real ID
        setNotes((prevNotes) =>
          prevNotes.map((n) => (n.id === tempId ? createdNote : n))
        )

        // Update cache with real ID
        await offlineManager.cacheNote(createdNote)

        return createdNote
      } catch (err) {
        // On error, queue for later sync
        const tempNote = notes.find(
          (n) =>
            n.title === 'Untitled Note' &&
            n.createdAt === new Date().toISOString()
        )
        if (tempNote) {
          await offlineManager.addToSyncQueue({
            type: 'create',
            table: 'notes',
            data: {
              title: 'Untitled Note',
              content: '',
              user_id: user.id,
              folder_id: parentId,
            },
            status: 'pending',
          })
        }

        const errorMessage =
          err instanceof Error ? err.message : 'Failed to create note'
        setError(errorMessage)
        toast({
          title: 'Note saved locally',
          description: 'Will sync when connection is restored',
          variant: 'default',
        })
        return null
      } finally {
        setIsLoading(false)
      }
    },
    [user, supabase, toast, notes]
  )

  // Create new folder
  const createFolder = useCallback(
    async (parentId: string | null = null) => {
      if (!user || !supabase) return null

      setIsLoading(true)
      try {
        const tempId = `temp_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
        const timestamp = new Date().toISOString()

        const newFolder: Note = {
          id: tempId,
          title: 'New Folder',
          content: '',
          userId: user.id,
          parentId,
          isFolder: true,
          tags: [],
          createdAt: timestamp,
          updatedAt: timestamp,
        }

        // Add to local state immediately
        setNotes((prevNotes) => [newFolder, ...prevNotes])

        // Cache the folder
        await offlineManager.cacheNote(newFolder)

        // Check if offline
        if (!offlineManager.isOnline()) {
          // Queue for later sync
          await offlineManager.addToSyncQueue({
            type: 'create',
            table: 'folders',
            data: {
              name: newFolder.title,
              user_id: user.id,
              parent_id: parentId,
              created_at: timestamp,
              updated_at: timestamp,
            },
            status: 'pending',
          })

          toast({
            title: 'Folder created offline',
            description: "Will sync when you're back online",
          })
          return newFolder
        }

        // Online - create on server
        const { data, error } = await supabase
          .from('folders')
          .insert({
            name: newFolder.title,
            user_id: user.id,
            parent_id: parentId,
          })
          .select()
          .single()

        if (error) throw error

        // Update with real ID from server
        const createdFolder: Note = {
          ...newFolder,
          id: data.id,
          title: data.name,
          createdAt: data.created_at,
          updatedAt: data.updated_at,
        }

        // Update local state with real ID
        setNotes((prevNotes) =>
          prevNotes.map((n) => (n.id === tempId ? createdFolder : n))
        )

        // Update cache with real ID
        await offlineManager.cacheNote(createdFolder)

        return createdFolder
      } catch (err) {
        // On error, queue for later sync
        await offlineManager.addToSyncQueue({
          type: 'create',
          table: 'folders',
          data: {
            name: 'New Folder',
            user_id: user.id,
            parent_id: parentId,
          },
          status: 'pending',
        })

        const errorMessage =
          err instanceof Error ? err.message : 'Failed to create folder'
        setError(errorMessage)
        toast({
          title: 'Folder saved locally',
          description: 'Will sync when connection is restored',
          variant: 'default',
        })
        return null
      } finally {
        setIsLoading(false)
      }
    },
    [user, supabase, toast]
  )

  // Delete note
  const deleteNote = useCallback(
    async (noteId: string) => {
      if (!user || !supabase) return false

      try {
        const note = notes.find((n) => n.id === noteId)
        if (!note) return false

        // Remove from local state immediately
        setNotes((prevNotes) => prevNotes.filter((n) => n.id !== noteId))

        // Check if offline
        if (!offlineManager.isOnline()) {
          // Queue for later sync
          await offlineManager.addToSyncQueue({
            type: 'delete',
            table: note.isFolder ? 'folders' : 'notes',
            data: {
              id: noteId,
              user_id: user.id,
            },
            status: 'pending',
          })

          toast({
            title: 'Deleted offline',
            description: "Will sync when you're back online",
          })
          return true
        }

        // Online - delete on server
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

        return true
      } catch (err) {
        // On error, queue for later sync but keep removed from UI
        const note = notes.find((n) => n.id === noteId)
        if (note) {
          await offlineManager.addToSyncQueue({
            type: 'delete',
            table: note.isFolder ? 'folders' : 'notes',
            data: {
              id: noteId,
              user_id: user.id,
            },
            status: 'pending',
          })
        }

        const errorMessage =
          err instanceof Error ? err.message : 'Failed to delete note'
        setError(errorMessage)
        toast({
          title: 'Deletion queued',
          description: 'Will complete when connection is restored',
          variant: 'default',
        })
        return true // Return true since we removed it from UI
      }
    },
    [user, supabase, notes, toast]
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
