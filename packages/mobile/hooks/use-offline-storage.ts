import { useState, useEffect, useCallback, useRef } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import NetInfo from '@react-native-community/netinfo'
import { Note } from '@/types'

export interface PendingSync {
  id: string
  type: 'create' | 'update' | 'delete'
  noteId?: string
  data?: any
  timestamp: number
  retries: number
}

export interface OfflineStorageState {
  isOnline: boolean
  pendingSyncs: PendingSync[]
  cachedNotes: Note[]

  // Methods
  getCachedNotes: () => Promise<Note[]>
  setCachedNotes: (notes: Note[]) => Promise<void>
  addNoteToCache: (note: Note) => Promise<void>
  updateNoteInCache: (noteId: string, updates: Partial<Note>) => Promise<void>
  removeNoteFromCache: (noteId: string) => Promise<void>

  // Sync queue management
  addToSyncQueue: (
    sync: Omit<PendingSync, 'id' | 'timestamp' | 'retries'>
  ) => Promise<void>
  processSyncQueue: () => Promise<void>
  clearSyncQueue: () => Promise<void>

  // Conflict resolution
  resolveConflict: (localNote: Note, remoteNote: Note) => Note
}

const STORAGE_KEYS = {
  NOTES: '@notable_cached_notes',
  SYNC_QUEUE: '@notable_sync_queue',
  LAST_SYNC: '@notable_last_sync',
}

const MAX_RETRIES = 5
const RETRY_DELAYS = [1000, 2000, 4000, 8000, 16000] // Exponential backoff

export function useOfflineStorage(): OfflineStorageState {
  const [isOnline, setIsOnline] = useState(true)
  const [pendingSyncs, setPendingSyncs] = useState<PendingSync[]>([])
  const [cachedNotes, setCachedNotesState] = useState<Note[]>([])
  const syncQueueRef = useRef<NodeJS.Timeout | null>(null)

  // Monitor network connectivity
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      const wasOnline = isOnline
      const nowOnline = state.isConnected && state.isInternetReachable

      setIsOnline(nowOnline ?? false)

      // If we just came back online, process sync queue
      if (!wasOnline && nowOnline) {
        processSyncQueue()
      }
    })

    return unsubscribe
  }, [isOnline])

  // Load cached data on mount
  useEffect(() => {
    loadCachedData()
  }, [])

  const loadCachedData = async () => {
    try {
      // Load cached notes
      const notesData = await AsyncStorage.getItem(STORAGE_KEYS.NOTES)
      if (notesData) {
        const notes = JSON.parse(notesData)
        setCachedNotesState(notes)
      }

      // Load sync queue
      const syncData = await AsyncStorage.getItem(STORAGE_KEYS.SYNC_QUEUE)
      if (syncData) {
        const syncs = JSON.parse(syncData)
        setPendingSyncs(syncs)
      }
    } catch (error) {
      console.error('Failed to load cached data:', error)
    }
  }

  const getCachedNotes = useCallback(async (): Promise<Note[]> => {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.NOTES)
      return data ? JSON.parse(data) : []
    } catch (error) {
      console.error('Failed to get cached notes:', error)
      return []
    }
  }, [])

  const setCachedNotes = useCallback(async (notes: Note[]): Promise<void> => {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(notes))
      setCachedNotesState(notes)
    } catch (error) {
      console.error('Failed to cache notes:', error)
    }
  }, [])

  const addNoteToCache = useCallback(
    async (note: Note): Promise<void> => {
      try {
        const notes = await getCachedNotes()
        const updatedNotes = [note, ...notes.filter((n) => n.id !== note.id)]
        await setCachedNotes(updatedNotes)
      } catch (error) {
        console.error('Failed to add note to cache:', error)
      }
    },
    [getCachedNotes, setCachedNotes]
  )

  const updateNoteInCache = useCallback(
    async (noteId: string, updates: Partial<Note>): Promise<void> => {
      try {
        const notes = await getCachedNotes()
        const updatedNotes = notes.map((note) =>
          note.id === noteId
            ? { ...note, ...updates, updatedAt: new Date() }
            : note
        )
        await setCachedNotes(updatedNotes)
      } catch (error) {
        console.error('Failed to update note in cache:', error)
      }
    },
    [getCachedNotes, setCachedNotes]
  )

  const removeNoteFromCache = useCallback(
    async (noteId: string): Promise<void> => {
      try {
        const notes = await getCachedNotes()
        const updatedNotes = notes.filter((note) => note.id !== noteId)
        await setCachedNotes(updatedNotes)
      } catch (error) {
        console.error('Failed to remove note from cache:', error)
      }
    },
    [getCachedNotes, setCachedNotes]
  )

  const saveSyncQueue = useCallback(
    async (syncs: PendingSync[]): Promise<void> => {
      try {
        await AsyncStorage.setItem(
          STORAGE_KEYS.SYNC_QUEUE,
          JSON.stringify(syncs)
        )
        setPendingSyncs(syncs)
      } catch (error) {
        console.error('Failed to save sync queue:', error)
      }
    },
    []
  )

  const addToSyncQueue = useCallback(
    async (
      sync: Omit<PendingSync, 'id' | 'timestamp' | 'retries'>
    ): Promise<void> => {
      const newSync: PendingSync = {
        ...sync,
        id: `sync_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        timestamp: Date.now(),
        retries: 0,
      }

      const currentSyncs = [...pendingSyncs, newSync]
      await saveSyncQueue(currentSyncs)

      // If online, immediately try to process
      if (isOnline) {
        processSyncQueue()
      }
    },
    [pendingSyncs, saveSyncQueue, isOnline]
  )

  const processSyncQueue = useCallback(async (): Promise<void> => {
    if (!isOnline || pendingSyncs.length === 0) return

    // Clear existing timeout
    if (syncQueueRef.current) {
      clearTimeout(syncQueueRef.current)
    }

    try {
      const syncsToProcess = [...pendingSyncs]
      const failedSyncs: PendingSync[] = []
      const successfulSyncIds: string[] = []

      for (const sync of syncsToProcess) {
        try {
          // This would integrate with your actual Supabase sync logic
          await processSingleSync(sync)
          successfulSyncIds.push(sync.id)
        } catch (error) {
          console.error('Failed to process sync:', sync, error)

          if (sync.retries < MAX_RETRIES) {
            failedSyncs.push({
              ...sync,
              retries: sync.retries + 1,
            })
          } else {
            console.error('Max retries reached for sync:', sync)
          }
        }
      }

      // Update sync queue with failed syncs
      await saveSyncQueue(failedSyncs)

      // Schedule retry for failed syncs
      if (failedSyncs.length > 0) {
        const maxRetryDelay = Math.max(
          ...failedSyncs.map((s) => {
            const index = Math.min(
              (s.retries ?? 1) - 1,
              RETRY_DELAYS.length - 1
            )
            return RETRY_DELAYS[index] ?? 1000
          })
        )
        syncQueueRef.current = setTimeout(() => {
          processSyncQueue()
        }, maxRetryDelay)
      }
    } catch (error) {
      console.error('Failed to process sync queue:', error)
    }
  }, [isOnline, pendingSyncs, saveSyncQueue])

  const processSingleSync = async (sync: PendingSync): Promise<void> => {
    // This is a placeholder - in real implementation, this would call your Supabase methods
    switch (sync.type) {
      case 'create':
        // Call createNote API
        console.log('Processing create sync:', sync)
        break
      case 'update':
        // Call updateNote API
        console.log('Processing update sync:', sync)
        break
      case 'delete':
        // Call deleteNote API
        console.log('Processing delete sync:', sync)
        break
    }
  }

  const clearSyncQueue = useCallback(async (): Promise<void> => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEYS.SYNC_QUEUE)
      setPendingSyncs([])
    } catch (error) {
      console.error('Failed to clear sync queue:', error)
    }
  }, [])

  const resolveConflict = useCallback(
    (localNote: Note, remoteNote: Note): Note => {
      // Simple conflict resolution: most recent wins
      const localTime = new Date(localNote.updatedAt).getTime()
      const remoteTime = new Date(remoteNote.updatedAt).getTime()

      if (localTime > remoteTime) {
        return localNote
      } else if (remoteTime > localTime) {
        return remoteNote
      } else {
        // If timestamps are equal, prefer local changes
        return localNote
      }
    },
    []
  )

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (syncQueueRef.current) {
        clearTimeout(syncQueueRef.current)
      }
    }
  }, [])

  return {
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
  }
}
