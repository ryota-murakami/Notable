'use client'

import { useMemo, useCallback, useState, useEffect, useRef } from 'react'
import Fuse from 'fuse.js'
import { Note } from '@/types/note'
import { debounceWithMetrics } from '@/lib/performance'

interface UseOptimizedSearchOptions {
  notes: Note[]
  searchQuery: string
  debounceMs?: number
}

interface UseOptimizedSearchResult {
  searchResults: Note[]
  isSearching: boolean
  searchTime: number
  totalResults: number
}

export function useOptimizedSearch({
  notes,
  searchQuery,
  debounceMs = 300,
}: UseOptimizedSearchOptions): UseOptimizedSearchResult {
  const [searchResults, setSearchResults] = useState<Note[]>(notes)
  const [isSearching, setIsSearching] = useState(false)
  const [searchTime, setSearchTime] = useState(0)
  const searchStartTimeRef = useRef<number>(0)

  // Memoize Fuse instance to avoid recreating on every render
  const fuse = useMemo(() => {
    return new Fuse(notes, {
      keys: [
        { name: 'title', weight: 0.7 },
        { name: 'content', weight: 0.3 },
      ],
      threshold: 0.3,
      includeScore: true,
      shouldSort: true,
      // Performance optimizations
      minMatchCharLength: 2,
      location: 0,
      distance: 100,
      // Limit search to improve performance
      ignoreLocation: false,
      // Use extended search for better performance
      useExtendedSearch: false,
    })
  }, [notes])

  // Memoized search function
  const performSearch = useCallback(
    (query: string) => {
      if (!query.trim()) {
        setSearchResults(notes)
        setSearchTime(0)
        return
      }

      searchStartTimeRef.current = performance.now()
      setIsSearching(true)

      // Use requestIdleCallback for non-blocking search
      if ('requestIdleCallback' in window) {
        requestIdleCallback(
          () => {
            const results = fuse.search(query)
            const searchEndTime = performance.now()
            const duration = searchEndTime - searchStartTimeRef.current

            setSearchResults(results.map((result) => result.item))
            setSearchTime(duration)
            setIsSearching(false)
          },
          { timeout: 100 }
        )
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(() => {
          const results = fuse.search(query)
          const searchEndTime = performance.now()
          const duration = searchEndTime - searchStartTimeRef.current

          setSearchResults(results.map((result) => result.item))
          setSearchTime(duration)
          setIsSearching(false)
        }, 0)
      }
    },
    [fuse, notes]
  )

  // Debounced search with performance metrics
  const debouncedSearch = useMemo(
    () =>
      debounceWithMetrics(
        performSearch as (...args: unknown[]) => unknown,
        debounceMs,
        'search-notes'
      ),
    [performSearch, debounceMs]
  )

  // Effect to trigger search when query changes
  useEffect(() => {
    debouncedSearch(searchQuery)
  }, [searchQuery, debouncedSearch])

  return {
    searchResults,
    isSearching,
    searchTime,
    totalResults: searchResults.length,
  }
}
