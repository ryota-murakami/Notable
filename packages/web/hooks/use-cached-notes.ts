/**
 * Enhanced Notes Hook with IndexedDB Caching
 * Provides instant loading through intelligent caching
 */

import { useState, useEffect, useCallback, useMemo } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import type { Note } from '@/types/note'
import { indexedDBCache } from '@/lib/cache/indexeddb-cache'
import { usePerformanceMonitor } from './use-performance-monitor'
import { useDebounce } from './use-debounce'
import { createClient } from '@/utils/supabase/client'

interface UseCachedNotesOptions {
  userId?: string
  tags?: string[]
  searchQuery?: string
  limit?: number
  enablePreloading?: boolean
  cacheFirst?: boolean
}

interface NotesState {
  notes: Note[]
  isLoading: boolean
  isError: boolean
  error: Error | null
  isStale: boolean
  lastSync: Date | null
  cacheStats: {
    hitRate: number
    itemCount: number
  }
}

/**
 * Enhanced notes hook with smart caching
 */
export function useCachedNotes(options: UseCachedNotesOptions = {}) {
  const {
    userId,
    tags,
    searchQuery,
    limit = 50,
    enablePreloading = true,
    cacheFirst = true,
  } = options

  const queryClient = useQueryClient()
  const supabase = createClient()
  const { trackMetric, measureAsync } = usePerformanceMonitor({
    componentName: 'CachedNotes',
  })

  // Debounce search query to avoid excessive cache hits
  const debouncedSearchQuery = useDebounce(searchQuery, 300)

  // State for cache-first loading
  const [cacheNotes, setCacheNotes] = useState<Note[]>([])
  const [isLoadingFromCache, setIsLoadingFromCache] = useState(true)
  const [cacheStats, setCacheStats] = useState({ hitRate: 0, itemCount: 0 })

  // Query key for React Query
  const queryKey = useMemo(
    () => ['notes', userId, tags, debouncedSearchQuery, limit],
    [userId, tags, debouncedSearchQuery, limit]
  )

  // Load from cache first
  useEffect(() => {
    if (!userId || !cacheFirst) return

    const loadFromCache = async () => {
      const endTimer = trackMetric('cache_first_load', 0, 'ms')

      try {
        // Try to get cached notes first
        const cachedNotes = await indexedDBCache.getNotes(userId, {
          limit,
          tags,
          searchQuery: debouncedSearchQuery,
        })

        if (cachedNotes.length > 0) {
          setCacheNotes(cachedNotes)
          trackMetric('cache_first_hit', 1, 'count')
        }

        // Update cache statistics
        const stats = indexedDBCache.getStatistics()
        setCacheStats({
          hitRate: stats.hitRate,
          itemCount: stats.itemCount,
        })
      } catch (error) {
        console.warn('Failed to load from cache:', error)
        trackMetric('cache_first_error', 1, 'count')
      } finally {
        setIsLoadingFromCache(false)
        endTimer()
      }
    }

    loadFromCache()
  }, [userId, tags, debouncedSearchQuery, limit, cacheFirst, trackMetric])

  // Fetch notes from Supabase with caching
  const {
    data: serverNotes = [],
    isLoading: isServerLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey,
    queryFn: async () => {
      if (!userId) return []

      return await measureAsync('fetch_notes', async () => {
        let query = supabase
          .from('notes')
          .select('*')
          .eq('user_id', userId)
          .order('updated_at', { ascending: false })

        if (limit) {
          query = query.limit(limit)
        }

        if (tags?.length) {
          query = query.overlaps('tags', tags)
        }

        if (debouncedSearchQuery) {
          query = query.or(
            `title.ilike.%${debouncedSearchQuery}%,content.ilike.%${debouncedSearchQuery}%`
          )
        }

        const { data, error } = await query

        if (error) throw error

        // Cache the fresh data
        if (data?.length) {
          await indexedDBCache.setNotes(data, userId)
          trackMetric('server_notes_cached', data.length, 'count')
        }

        return data || []
      })
    },
    enabled: !!userId,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes
    refetchOnWindowFocus: false,
    refetchOnMount: 'always',
  })

  // Preload related notes
  const preloadRelatedNotes = useCallback(
    async (noteId: string) => {
      if (!enablePreloading || !userId) return

      try {
        await indexedDBCache.preloadRelatedNotes(noteId, userId)
        trackMetric('preload_triggered', 1, 'count')
      } catch (error) {
        console.warn('Failed to preload related notes:', error)
      }
    },
    [enablePreloading, userId, trackMetric]
  )

  // Cache search results for instant search
  const cacheSearchResults = useCallback(
    async (query: string, results: Note[]) => {
      try {
        await indexedDBCache.setSearchResults(query, results, {
          userId,
          timestamp: Date.now(),
        })
        trackMetric('search_results_cached', 1, 'count')
      } catch (error) {
        console.warn('Failed to cache search results:', error)
      }
    },
    [userId, trackMetric]
  )

  // Get cached search results for instant search
  const getCachedSearchResults = useCallback(
    async (query: string): Promise<Note[] | null> => {
      try {
        const results = await indexedDBCache.getSearchResults(query)
        if (results) {
          trackMetric('cached_search_hit', 1, 'count')
        }
        return results
      } catch (error) {
        console.warn('Failed to get cached search results:', error)
        return null
      }
    },
    [trackMetric]
  )

  // Create note with optimistic updates
  const createNoteMutation = useMutation({
    mutationFn: async (
      noteData: Omit<Note, 'id' | 'created_at' | 'updated_at'>
    ) => {
      const { data, error } = await supabase
        .from('notes')
        .insert([noteData])
        .select()
        .single()

      if (error) throw error
      return data
    },
    onMutate: async (newNote) => {
      // Cancel outgoing refetches
      await queryClient.cancelQueries({ queryKey })

      // Snapshot previous value
      const previousNotes = queryClient.getQueryData<Note[]>(queryKey) || []

      // Optimistically update cache
      const optimisticNote: Note = {
        ...newNote,
        id: `temp-${Date.now()}`,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }

      queryClient.setQueryData(queryKey, [optimisticNote, ...previousNotes])

      // Cache optimistically
      if (userId) {
        await indexedDBCache.set(`note:${optimisticNote.id}`, optimisticNote, {
          metadata: { noteId: optimisticNote.id, userId, temporary: true },
        })
      }

      trackMetric('optimistic_create', 1, 'count')

      return { previousNotes, optimisticNote }
    },
    onError: (err, newNote, context) => {
      // Rollback on error
      if (context) {
        queryClient.setQueryData(queryKey, context.previousNotes)
        // Remove optimistic cache entry
        if (userId && context.optimisticNote) {
          indexedDBCache.delete(`note:${context.optimisticNote.id}`)
        }
      }
    },
    onSuccess: (data, variables, context) => {
      // Update with real data
      if (context && userId) {
        indexedDBCache.delete(`note:${context.optimisticNote.id}`)
        indexedDBCache.set(`note:${data.id}`, data, {
          metadata: { noteId: data.id, userId },
        })
      }
      trackMetric('create_success', 1, 'count')
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey })
    },
  })

  // Create note wrapper that returns a Promise with the created note
  const createNote = useCallback(
    async (noteData: Omit<Note, 'id' | 'created_at' | 'updated_at'>) => {
      return new Promise<Note>((resolve, reject) => {
        createNoteMutation.mutate(noteData, {
          onSuccess: (data) => {
            resolve(data)
          },
          onError: (error) => {
            reject(error)
          },
        })
      })
    },
    [createNoteMutation.mutate]
  )

  // Update note with optimistic updates
  const updateNote = useMutation({
    mutationFn: async ({
      id,
      updates,
    }: {
      id: string
      updates: Partial<Note>
    }) => {
      const { data, error } = await supabase
        .from('notes')
        .update(updates)
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      return data
    },
    onMutate: async ({ id, updates }) => {
      await queryClient.cancelQueries({ queryKey })

      const previousNotes = queryClient.getQueryData<Note[]>(queryKey) || []
      const noteIndex = previousNotes.findIndex((note) => note.id === id)

      if (noteIndex >= 0) {
        const updatedNotes = [...previousNotes]
        updatedNotes[noteIndex] = { ...updatedNotes[noteIndex], ...updates }
        queryClient.setQueryData(queryKey, updatedNotes)

        // Update cache optimistically
        if (userId) {
          await indexedDBCache.set(`note:${id}`, updatedNotes[noteIndex], {
            metadata: { noteId: id, userId },
          })
        }
      }

      trackMetric('optimistic_update', 1, 'count')

      return { previousNotes }
    },
    onError: (err, variables, context) => {
      if (context) {
        queryClient.setQueryData(queryKey, context.previousNotes)
      }
    },
    onSuccess: (data) => {
      if (userId) {
        indexedDBCache.set(`note:${data.id}`, data, {
          metadata: { noteId: data.id, userId },
        })
      }
      trackMetric('update_success', 1, 'count')
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey })
    },
  })

  // Delete note with optimistic updates
  const deleteNote = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('notes').delete().eq('id', id)
      if (error) throw error
      return id
    },
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey })

      const previousNotes = queryClient.getQueryData<Note[]>(queryKey) || []
      const filteredNotes = previousNotes.filter((note) => note.id !== id)

      queryClient.setQueryData(queryKey, filteredNotes)

      // Remove from cache
      if (userId) {
        await indexedDBCache.delete(`note:${id}`)
      }

      trackMetric('optimistic_delete', 1, 'count')

      return { previousNotes }
    },
    onError: (err, id, context) => {
      if (context) {
        queryClient.setQueryData(queryKey, context.previousNotes)
      }
    },
    onSuccess: (id) => {
      trackMetric('delete_success', 1, 'count')
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey })
    },
  })

  // Clear cache
  const clearCache = useCallback(async () => {
    await measureAsync('clear_cache', async () => {
      await indexedDBCache.clear()
      queryClient.clear()
      setCacheNotes([])
      setCacheStats({ hitRate: 0, itemCount: 0 })
    })
  }, [measureAsync, queryClient])

  // Combine cache and server data intelligently
  const notes = useMemo(() => {
    if (isServerLoading && cacheFirst && cacheNotes.length > 0) {
      // Return cache data while server loads
      return cacheNotes
    }

    if (serverNotes.length > 0) {
      // Server data takes precedence when available
      return serverNotes
    }

    // Fallback to cache data
    return cacheNotes
  }, [isServerLoading, cacheFirst, cacheNotes, serverNotes])

  // Calculate loading state
  const isLoading = useMemo(() => {
    if (cacheFirst) {
      return isLoadingFromCache && isServerLoading && cacheNotes.length === 0
    }
    return isServerLoading
  }, [cacheFirst, isLoadingFromCache, isServerLoading, cacheNotes.length])

  // Calculate stale state
  const isStale = useMemo(() => {
    return cacheFirst && cacheNotes.length > 0 && isServerLoading
  }, [cacheFirst, cacheNotes.length, isServerLoading])

  const state: NotesState = {
    notes,
    isLoading,
    isError,
    error: error as Error | null,
    isStale,
    lastSync: null, // TODO: Implement last sync tracking
    cacheStats,
  }

  return {
    ...state,
    // Mutations
    createNote,
    updateNote: updateNote.mutate,
    deleteNote: deleteNote.mutate,

    // Utility functions
    refetch,
    preloadRelatedNotes,
    cacheSearchResults,
    getCachedSearchResults,
    clearCache,

    // Mutation states
    isCreating: createNoteMutation.isPending,
    isUpdating: updateNote.isPending,
    isDeleting: deleteNote.isPending,
  }
}

/**
 * Hook for instant search with caching
 */
export function useCachedSearch(userId?: string) {
  const [query, setQuery] = useState('')
  const [cachedResults, setCachedResults] = useState<Note[]>([])
  const [isSearching, setIsSearching] = useState(false)

  const debouncedQuery = useDebounce(query, 150) // Faster for search
  const { trackMetric, measureAsync } = usePerformanceMonitor({
    componentName: 'CachedSearch',
  })

  const search = useCallback(
    async (searchQuery: string) => {
      if (!searchQuery.trim() || !userId) {
        setCachedResults([])
        return []
      }

      setIsSearching(true)

      return await measureAsync('cached_search', async () => {
        try {
          // Try cache first
          const cached = await indexedDBCache.getSearchResults(searchQuery)
          if (cached) {
            setCachedResults(cached)
            trackMetric('search_cache_hit', 1, 'count')
            return cached
          }

          // Fallback to fresh search
          const supabase = createClient()
          const { data, error } = await supabase
            .from('notes')
            .select('*')
            .eq('user_id', userId)
            .or(`title.ilike.%${searchQuery}%,content.ilike.%${searchQuery}%`)
            .order('updated_at', { ascending: false })
            .limit(20)

          if (error) throw error

          const results = data || []
          setCachedResults(results)

          // Cache the results
          await indexedDBCache.setSearchResults(searchQuery, results)
          trackMetric('search_server_fetch', 1, 'count')

          return results
        } catch (error) {
          console.error('Search failed:', error)
          trackMetric('search_error', 1, 'count')
          return []
        } finally {
          setIsSearching(false)
        }
      })
    },
    [userId, measureAsync, trackMetric]
  )

  // Trigger search when debounced query changes
  useEffect(() => {
    if (debouncedQuery) {
      search(debouncedQuery)
    } else {
      setCachedResults([])
    }
  }, [debouncedQuery, search])

  return {
    query,
    setQuery,
    results: cachedResults,
    isSearching,
    search,
  }
}
