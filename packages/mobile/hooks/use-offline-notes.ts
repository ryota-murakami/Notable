import { useState, useEffect, useCallback, useRef } from 'react'
import { createClient } from '@supabase/supabase-js'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Note, NoteCreate, NoteUpdate } from '../types'
import {
  useRealtimeSync,
  RealtimeUser,
  TypingUser,
  UserPresence,
} from './use-realtime-sync'
import { useOfflineStorage } from './use-offline-storage'

export interface UseOfflineNotesOptions {
  user?: {
    id: string
    name: string
    email: string
    avatar?: string
  }
  user_id?: string
  activeNoteId?: string
}

export interface UseOfflineNotesState {
  notes: Note[]
  isLoading: boolean
  isSaving: boolean
  error: string | null

  // Offline state
  isOnline: boolean
  pendingSyncs: number

  // Real-time sync state
  isConnected: boolean
  connectionError: string | null
  onlineUsers: UserPresence[]
  typingUsers: TypingUser[]

  // Methods
  loadNotes: () => Promise<void>
  createNote: (note?: Partial<NoteCreate>) => Promise<Note | null>
  updateNote: (id: string, updates: Partial<NoteUpdate>) => Promise<Note | null>
  deleteNote: (id: string) => Promise<boolean>
  saveNote: (note: Note) => Promise<boolean>

  // Real-time methods
  startTyping: () => void
  stopTyping: () => void

  // Offline methods
  forceSyncAll: () => Promise<void>
  clearOfflineData: () => Promise<void>
}

export function useOfflineNotes({
  user,
  activeNoteId,
}: UseOfflineNotesOptions): UseOfflineNotesState {
  const [notes, setNotes] = useState<Note[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const supabaseRef = useRef<ReturnType<typeof createClient> | null>(null)
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Initialize Supabase client
  useEffect(() => {
    const initializeSupabase = async () => {
      try {
        const supabaseUrl =
          process.env.EXPO_PUBLIC_SUPABASE_URL ||
          'https://your-project.supabase.co'
        const supabaseKey =
          process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key'

        if (!supabaseUrl || !supabaseKey) {
          setError('Supabase configuration missing')
          return
        }

        supabaseRef.current = createClient(supabaseUrl, supabaseKey, {
          auth: {
            storage: AsyncStorage,
            autoRefreshToken: true,
            persistSession: true,
            detectSessionInUrl: false,
          },
        })
      } catch (err) {
        console.error('Failed to initialize Supabase:', err)
        setError('Failed to initialize Supabase client')
      }
    }

    initializeSupabase()
  }, [])

  // Offline storage integration
  const {
    isOnline,
    pendingSyncs,
    cachedNotes,
    getCachedNotes,
    setCachedNotes,
    addNoteToCache,
    updateNoteInCache,
    removeNoteFromCache,
    addToSyncQueue,
    processSyncQueue,
    clearSyncQueue,
    resolveConflict,
  } = useOfflineStorage()

  // Real-time sync setup
  const realtimeUser: RealtimeUser | undefined = user
    ? {
        id: user.id,
        name: user.name,
        ...(user.avatar && { avatar: user.avatar }),
      }
    : undefined

  const {
    isConnected,
    connectionError,
    onlineUsers,
    typingUsers,
    startTyping,
    stopTyping,
    broadcastNoteUpdate,
  } = useRealtimeSync({
    ...(activeNoteId && { noteId: activeNoteId }),
    ...(realtimeUser && { user: realtimeUser }),
    onNoteUpdate: async (updatedNote) => {
      // Handle real-time note updates with conflict resolution
      const cachedNote = cachedNotes.find((n) => n.id === updatedNote.id)

      if (cachedNote) {
        const resolvedNote = resolveConflict(cachedNote, updatedNote)
        await updateNoteInCache(updatedNote.id, resolvedNote)
        setNotes((prev) =>
          prev.map((note) => (note.id === updatedNote.id ? resolvedNote : note))
        )
      } else {
        await addNoteToCache(updatedNote)
        setNotes((prev) => [
          updatedNote,
          ...prev.filter((n) => n.id !== updatedNote.id),
        ])
      }
    },
    onUserTyping: (_users) => {
      // Typing users are handled by the hook itself
    },
    onPresenceChange: (_users) => {
      // Presence is handled by the hook itself
    },
  })

  // Load notes (prioritize offline cache, then fetch from server)
  const loadNotes = useCallback(async () => {
    if (!user) return

    let cached: Note[] = []

    try {
      setIsLoading(true)
      setError(null)

      // Load from cache first for immediate display
      cached = await getCachedNotes()
      if (cached.length > 0) {
        setNotes(cached)
        setIsLoading(false) // Show cached data immediately
      }

      // If online, fetch latest from server
      if (isOnline && supabaseRef.current) {
        const { data, error: fetchError } = await supabaseRef.current
          .from('notes')
          .select('*')
          .eq('user_id', user.id)
          .is('deleted_at', null)
          .order('updated_at', { ascending: false })

        if (fetchError) {
          throw fetchError
        }

        const serverNotes = (data || []) as unknown as Note[]

        // Merge with cached notes, resolving conflicts
        const mergedNotes = mergeNotesWithConflictResolution(
          cached,
          serverNotes
        )

        // Update cache and state
        await setCachedNotes(mergedNotes)
        setNotes(mergedNotes)

        // Process any pending syncs
        await processSyncQueue()
      }
    } catch (err) {
      console.error('Error loading notes:', err)
      setError(err instanceof Error ? err.message : 'Failed to load notes')

      // If server fetch failed but we have cached data, continue with cache
      if (cached.length > 0) {
        setNotes(cached)
      }
    } finally {
      setIsLoading(false)
    }
  }, [user, isOnline, getCachedNotes, setCachedNotes, processSyncQueue])

  const mergeNotesWithConflictResolution = (
    cachedNotes: Note[],
    serverNotes: Note[]
  ): Note[] => {
    const merged = new Map<string, Note>()

    // Add all server notes first
    serverNotes.forEach((note) => {
      merged.set(note.id, note)
    })

    // Merge cached notes, resolving conflicts
    cachedNotes.forEach((cachedNote) => {
      const serverNote = merged.get(cachedNote.id)
      if (serverNote) {
        const resolved = resolveConflict(cachedNote, serverNote)
        merged.set(cachedNote.id, resolved)
      } else {
        // Note exists only in cache (likely pending sync)
        merged.set(cachedNote.id, cachedNote)
      }
    })

    return Array.from(merged.values()).sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    )
  }

  // Create a new note
  const createNote = useCallback(
    async (noteData?: Partial<NoteCreate>): Promise<Note | null> => {
      if (!user) return null

      try {
        setIsSaving(true)
        setError(null)

        const tempId = `temp_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
        const newNote: Note = {
          id: tempId,
          title: noteData?.title || 'Untitled',
          content: noteData?.content || '',
          user_id: user.id,
          folder_id: noteData?.folder_id || null,
          is_public: noteData?.is_public || false,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          deleted_at: null,
          // Add missing required properties
          parentId: null,
          tags: [],
          isFolder: noteData?.is_folder || false,
          // Properties from base Note type
          isArchived: false,
          isDeleted: false,
          isFavorite: false,
          viewCount: 0,
          wordCount: 0,
        }

        // Add to cache immediately
        await addNoteToCache(newNote)
        setNotes((prev) => [newNote, ...prev])

        if (isOnline && supabaseRef.current) {
          // Try to create on server immediately
          try {
            const { data, error: createError } = await supabaseRef.current
              .from('notes')
              .insert([
                {
                  title: newNote.title,
                  content: newNote.content,
                  user_id: newNote.user_id,
                  folder_id: newNote.folder_id,
                  is_public: newNote.is_public,
                },
              ])
              .select()
              .single()

            if (createError) {
              throw createError
            }

            const createdNote = data as unknown as Note

            // Replace temp note with real note
            await updateNoteInCache(tempId, createdNote)
            setNotes((prev) =>
              prev.map((note) => (note.id === tempId ? createdNote : note))
            )

            broadcastNoteUpdate(createdNote)
            return createdNote
          } catch (err) {
            console.error(
              'Failed to create note on server, adding to sync queue:',
              err
            )
            await addToSyncQueue({
              type: 'create',
              noteId: tempId,
              data: newNote,
            })
          }
        } else {
          // Add to sync queue for when we come back online
          await addToSyncQueue({
            type: 'create',
            noteId: tempId,
            data: newNote,
          })
        }

        return newNote
      } catch (err) {
        console.error('Error creating note:', err)
        setError(err instanceof Error ? err.message : 'Failed to create note')
        return null
      } finally {
        setIsSaving(false)
      }
    },
    [
      user,
      isOnline,
      addNoteToCache,
      updateNoteInCache,
      addToSyncQueue,
      broadcastNoteUpdate,
    ]
  )

  // Update a note
  const updateNote = useCallback(
    async (id: string, updates: Partial<NoteUpdate>): Promise<Note | null> => {
      if (!user) return null

      try {
        setIsSaving(true)
        setError(null)

        const existingNote = notes.find((n) => n.id === id)
        if (!existingNote) {
          throw new Error('Note not found')
        }

        const updatedNote: Note = {
          ...existingNote,
          ...updates,
          updatedAt: new Date().toISOString(),
        }

        // Update cache immediately
        await updateNoteInCache(id, updatedNote)
        setNotes((prev) =>
          prev.map((note) => (note.id === id ? updatedNote : note))
        )

        if (isOnline && supabaseRef.current) {
          // Try to update on server immediately
          try {
            const { data, error: updateError } = await supabaseRef.current
              .from('notes')
              .update({
                ...updates,
                updated_at: updatedNote.updatedAt,
              })
              .eq('id', id)
              .eq('user_id', user.id)
              .select()
              .single()

            if (updateError) {
              throw updateError
            }

            const serverNote = data as unknown as Note
            await updateNoteInCache(id, serverNote)
            setNotes((prev) =>
              prev.map((note) => (note.id === id ? serverNote : note))
            )

            broadcastNoteUpdate(serverNote)
            return serverNote
          } catch (err) {
            console.error(
              'Failed to update note on server, adding to sync queue:',
              err
            )
            await addToSyncQueue({
              type: 'update',
              noteId: id,
              data: updates,
            })
          }
        } else {
          // Add to sync queue for when we come back online
          await addToSyncQueue({
            type: 'update',
            noteId: id,
            data: updates,
          })
        }

        return updatedNote
      } catch (err) {
        console.error('Error updating note:', err)
        setError(err instanceof Error ? err.message : 'Failed to update note')
        return null
      } finally {
        setIsSaving(false)
      }
    },
    [
      user,
      notes,
      isOnline,
      updateNoteInCache,
      addToSyncQueue,
      broadcastNoteUpdate,
    ]
  )

  // Delete a note
  const deleteNote = useCallback(
    async (id: string): Promise<boolean> => {
      if (!user) return false

      try {
        setIsSaving(true)
        setError(null)

        // Remove from cache immediately
        await removeNoteFromCache(id)
        setNotes((prev) => prev.filter((note) => note.id !== id))

        if (isOnline && supabaseRef.current) {
          // Try to delete on server immediately
          try {
            const { error: deleteError } = await supabaseRef.current
              .from('notes')
              .update({
                deleted_at: new Date().toISOString(),
              })
              .eq('id', id)
              .eq('user_id', user.id)

            if (deleteError) {
              throw deleteError
            }

            return true
          } catch (err) {
            console.error(
              'Failed to delete note on server, adding to sync queue:',
              err
            )
            await addToSyncQueue({
              type: 'delete',
              noteId: id,
            })
          }
        } else {
          // Add to sync queue for when we come back online
          await addToSyncQueue({
            type: 'delete',
            noteId: id,
          })
        }

        return true
      } catch (err) {
        console.error('Error deleting note:', err)
        setError(err instanceof Error ? err.message : 'Failed to delete note')
        return false
      } finally {
        setIsSaving(false)
      }
    },
    [user, isOnline, removeNoteFromCache, addToSyncQueue]
  )

  // Save note with debouncing (used by auto-save)
  const saveNote = useCallback(
    async (note: Note): Promise<boolean> => {
      return (
        (await updateNote(note.id, {
          title: note.title,
          content: note.content,
        })) !== null
      )
    },
    [updateNote]
  )

  // Force sync all pending changes
  const forceSyncAll = useCallback(async (): Promise<void> => {
    if (isOnline) {
      await processSyncQueue()
      await loadNotes() // Refresh from server
    }
  }, [isOnline, processSyncQueue, loadNotes])

  // Clear all offline data
  const clearOfflineData = useCallback(async (): Promise<void> => {
    await setCachedNotes([])
    await clearSyncQueue()
    setNotes([])
  }, [setCachedNotes, clearSyncQueue])

  // Load notes on mount and when user changes
  useEffect(() => {
    loadNotes()
  }, [loadNotes])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current)
      }
    }
  }, [])

  return {
    notes,
    isLoading,
    isSaving,
    error,

    // Offline state
    isOnline,
    pendingSyncs: pendingSyncs.length,

    // Real-time sync state
    isConnected,
    connectionError,
    onlineUsers,
    typingUsers,

    // Methods
    loadNotes,
    createNote,
    updateNote,
    deleteNote,
    saveNote,

    // Real-time methods
    startTyping,
    stopTyping,

    // Offline methods
    forceSyncAll,
    clearOfflineData,
  }
}
