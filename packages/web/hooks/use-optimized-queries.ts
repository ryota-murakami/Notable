import { useCallback, useRef, useState, useEffect } from 'react'
import { useSupabase } from '@/components/supabase-provider'
import { Note } from '@/types/note'

interface QueryCache {
  data: any
  timestamp: number
  expiresAt: number
}

interface QueryOptions {
  cacheTime?: number // in milliseconds
  staleTime?: number // in milliseconds
  batchSize?: number
  enablePrefetch?: boolean
}

const DEFAULT_CACHE_TIME = 5 * 60 * 1000 // 5 minutes
const DEFAULT_STALE_TIME = 30 * 1000 // 30 seconds
const DEFAULT_BATCH_SIZE = 50

// Global query cache
const QUERY_CACHE = new Map<string, QueryCache>()

// Batch query queue

export function useOptimizedQueries() {
  const { supabase } = useSupabase()
  const abortControllerRef = useRef<AbortController | null>(null)

  // Clean up stale cache entries
  useEffect(() => {
    const cleanupInterval = setInterval(() => {
      const now = Date.now()
      for (const [key, cache] of QUERY_CACHE.entries()) {
        if (cache.expiresAt < now) {
          QUERY_CACHE.delete(key)
        }
      }
    }, 60 * 1000) // Clean up every minute

    return () => clearInterval(cleanupInterval)
  }, [])

  // Cancel ongoing requests on unmount
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }
    }
  }, [])

  // Get from cache if valid
  const getFromCache = useCallback(
    (key: string, staleTime: number): any | null => {
      const cached = QUERY_CACHE.get(key)
      if (!cached) return null

      const now = Date.now()
      const isStale = now - cached.timestamp > staleTime

      if (isStale) {
        return null
      }

      return cached.data
    },
    []
  )

  // Set cache with expiration
  const setCache = useCallback((key: string, data: any, cacheTime: number) => {
    const now = Date.now()
    QUERY_CACHE.set(key, {
      data,
      timestamp: now,
      expiresAt: now + cacheTime,
    })
  }, [])

  // Optimized note fetching with pagination
  const fetchNotesPaginated = useCallback(
    async (
      page: number = 1,
      options: QueryOptions = {}
    ): Promise<{ notes: Note[]; hasMore: boolean; total: number }> => {
      const {
        cacheTime = DEFAULT_CACHE_TIME,
        staleTime = DEFAULT_STALE_TIME,
        batchSize = DEFAULT_BATCH_SIZE,
      } = options

      const cacheKey = `notes:page:${page}:size:${batchSize}`
      const cached = getFromCache(cacheKey, staleTime)

      if (cached) {
        return cached
      }

      return performanceMonitor.measureAsync(
        `fetchNotesPaginated:${page}`,
        async () => {
          abortControllerRef.current = new AbortController()

          const from = (page - 1) * batchSize
          const to = from + batchSize - 1

          const { data, error, count } = await supabase
            .from('notes')
            .select('*', { count: 'exact' })
            .is('deleted_at', null)
            .order('updated_at', { ascending: false })
            .range(from, to)
            .abortSignal(abortControllerRef.current.signal)

          if (error) throw error

          const result = {
            notes: data || [],
            hasMore: (count || 0) > to + 1,
            total: count || 0,
          }

          setCache(cacheKey, result, cacheTime)
          return result
        }
      )
    },
    [supabase, getFromCache, setCache, performanceMonitor]
  )

  // Batch note fetching for multiple IDs
  const fetchNotesBatch = useCallback(
    async (noteIds: string[]): Promise<Map<string, Note>> => {
      return performanceMonitor.measureAsync(
        `fetchNotesBatch:${noteIds.length}`,
        async () => {
          const results = new Map<string, Note>()
          const uncachedIds: string[] = []

          // Check cache first
          for (const id of noteIds) {
            const cached = getFromCache(`note:${id}`, DEFAULT_STALE_TIME)
            if (cached) {
              results.set(id, cached)
            } else {
              uncachedIds.push(id)
            }
          }

          // Fetch uncached notes in batches
          if (uncachedIds.length > 0) {
            const batchSize = 50
            for (let i = 0; i < uncachedIds.length; i += batchSize) {
              const batch = uncachedIds.slice(i, i + batchSize)

              const { data, error } = await supabase
                .from('notes')
                .select('*')
                .in('id', batch)

              if (error) throw error

              for (const note of data || []) {
                results.set(note.id, note)
                setCache(`note:${note.id}`, note, DEFAULT_CACHE_TIME)
              }
            }
          }

          return results
        }
      )
    },
    [supabase, getFromCache, setCache, performanceMonitor]
  )

  // Optimized search with debounced queries
  const searchNotes = useCallback(
    async (query: string, options: QueryOptions = {}): Promise<Note[]> => {
      if (!query.trim()) return []

      const cacheKey = `search:${query}`
      const cached = getFromCache(
        cacheKey,
        options.staleTime || DEFAULT_STALE_TIME
      )

      if (cached) {
        return cached
      }

      return performanceMonitor.measureAsync(
        `searchNotes:${query}`,
        async () => {
          const { data, error } = await supabase.rpc('search_notes', {
            search_query: query,
            user_uuid: (await supabase.auth.getUser()).data.user?.id,
          })

          if (error) throw error

          const results = data || []
          setCache(cacheKey, results, options.cacheTime || DEFAULT_CACHE_TIME)
          return results
        }
      )
    },
    [supabase, getFromCache, setCache, performanceMonitor]
  )

  // Prefetch next page of data
  const prefetchNextPage = useCallback(
    async (currentPage: number, options: QueryOptions = {}) => {
      const nextPage = currentPage + 1
      const cacheKey = `notes:page:${nextPage}:size:${options.batchSize || DEFAULT_BATCH_SIZE}`

      // Only prefetch if not already cached
      const cached = getFromCache(
        cacheKey,
        options.staleTime || DEFAULT_STALE_TIME
      )
      if (!cached) {
        // Prefetch in background without waiting
        fetchNotesPaginated(nextPage, options).catch(console.error)
      }
    },
    [fetchNotesPaginated, getFromCache]
  )

  // Invalidate cache for specific queries
  const invalidateCache = useCallback((pattern?: string) => {
    if (!pattern) {
      QUERY_CACHE.clear()
      return
    }

    for (const key of QUERY_CACHE.keys()) {
      if (key.includes(pattern)) {
        QUERY_CACHE.delete(key)
      }
    }
  }, [])

  // Optimized bulk operations
  const bulkUpdateNotes = useCallback(
    async (updates: Array<{ id: string; changes: Partial<Note> }>) => {
      return performanceMonitor.measureAsync(
        `bulkUpdateNotes:${updates.length}`,
        async () => {
          // Group updates by common changes for efficiency
          const groupedUpdates = new Map<string, Array<string>>()

          for (const update of updates) {
            const key = JSON.stringify(update.changes)
            if (!groupedUpdates.has(key)) {
              groupedUpdates.set(key, [])
            }
            groupedUpdates.get(key)!.push(update.id)
          }

          // Execute grouped updates
          const results = []
          for (const [changesKey, ids] of groupedUpdates) {
            const changes = JSON.parse(changesKey)

            const { data, error } = await supabase
              .from('notes')
              .update(changes)
              .in('id', ids)
              .select()

            if (error) throw error
            results.push(...(data || []))

            // Invalidate cache for updated notes
            for (const id of ids) {
              QUERY_CACHE.delete(`note:${id}`)
            }
          }

          // Invalidate list caches
          invalidateCache('notes:page:')

          return results
        }
      )
    },
    [supabase, performanceMonitor, invalidateCache]
  )

  // Connection pooling for real-time subscriptions
  const subscribeToNotes = useCallback(
    (onUpdate: (note: Note) => void) => {
      const channel = supabase
        .channel('optimized-notes-changes')
        .on(
          'postgres_changes',
          {
            event: '*',
            schema: 'public',
            table: 'notes',
          },
          (payload) => {
            // Update cache
            if (payload.eventType === 'DELETE') {
              QUERY_CACHE.delete(`note:${payload.old.id}`)
            } else {
              const note = payload.new as Note
              setCache(`note:${note.id}`, note, DEFAULT_CACHE_TIME)
              onUpdate(note)
            }

            // Invalidate list caches
            invalidateCache('notes:page:')
          }
        )
        .subscribe()

      return () => {
        supabase.removeChannel(channel)
      }
    },
    [supabase, setCache, invalidateCache]
  )

  return {
    fetchNotesPaginated,
    fetchNotesBatch,
    searchNotes,
    prefetchNextPage,
    invalidateCache,
    bulkUpdateNotes,
    subscribeToNotes,
  }
}

// Hook for infinite scroll with optimized queries
export function useInfiniteNotes(options: QueryOptions = {}) {
  const [notes, setNotes] = useState<Note[]>([])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { fetchNotesPaginated, prefetchNextPage, subscribeToNotes } =
    useOptimizedQueries()

  // Load more notes
  const loadMore = useCallback(async () => {
    if (isLoading || !hasMore) return

    setIsLoading(true)
    setError(null)

    try {
      const result = await fetchNotesPaginated(page, options)

      setNotes((prev) => [...prev, ...result.notes])
      setHasMore(result.hasMore)
      setPage((prev) => prev + 1)

      // Prefetch next page if enabled
      if (options.enablePrefetch && result.hasMore) {
        prefetchNextPage(page, options)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load notes')
    } finally {
      setIsLoading(false)
    }
  }, [page, hasMore, isLoading, fetchNotesPaginated, prefetchNextPage, options])

  // Subscribe to real-time updates
  useEffect(() => {
    const unsubscribe = subscribeToNotes((updatedNote) => {
      setNotes((prev) => {
        const index = prev.findIndex((n) => n.id === updatedNote.id)
        if (index !== -1) {
          const updated = [...prev]
          updated[index] = updatedNote
          return updated
        }
        return prev
      })
    })

    return unsubscribe
  }, [subscribeToNotes])

  // Initial load
  useEffect(() => {
    loadMore()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return {
    notes,
    hasMore,
    isLoading,
    error,
    loadMore,
  }
}
