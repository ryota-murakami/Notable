// React Hook for Advanced Search Functionality

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { SearchEngine } from './search-engine'
import { SearchFilters } from './search-filters'
import {
  type SearchableNote,
  type SearchFilterSet,
  type SearchOptions,
  type SearchQuery,
  type SearchResult,
  type SearchStats,
} from './types'

export interface UseSearchOptions {
  debounceMs?: number
  maxResults?: number
  enableHistory?: boolean
  enableAnalytics?: boolean
  persistFilters?: boolean
}

export interface SearchState {
  query: string
  results: SearchResult[]
  isSearching: boolean
  hasSearched: boolean
  error: string | null
  stats: SearchStats | null
  totalResults: number
}

export interface SearchFiltersState {
  active: SearchFilterSet
  available: {
    tags: string[]
    folders: string[]
    authors: string[]
  }
}

export function useSearch(
  notes: SearchableNote[] = [],
  options: UseSearchOptions = {}
) {
  const {
    debounceMs = 300,
    maxResults = 100,
    enableHistory: _enableHistory = true,
    enableAnalytics = true,
    persistFilters = true,
  } = options

  // Core search state
  const [searchState, setSearchState] = useState<SearchState>({
    query: '',
    results: [],
    isSearching: false,
    hasSearched: false,
    error: null,
    stats: null,
    totalResults: 0,
  })

  // Search filters state
  const [filtersState, setFiltersState] = useState<SearchFiltersState>({
    active: {},
    available: {
      tags: [],
      folders: [],
      authors: [],
    },
  })

  // Search options state
  const [searchOptions, setSearchOptions] = useState<SearchOptions>({
    fuzzy: true,
    caseSensitive: false,
    enableOperators: true,
    limit: maxResults,
    searchFields: ['title', 'content', 'tags'],
  })

  // Refs for stable instances
  const searchEngineRef = useRef(new SearchEngine())
  const searchFiltersRef = useRef(new SearchFilters())
  const debounceTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)
  const abortControllerRef = useRef<AbortController | undefined>(undefined)

  // Update search index when notes change
  useEffect(() => {
    if (notes.length > 0) {
      searchEngineRef.current.updateIndex(notes)

      // Only use globalSearchIndexer on client side
      if (typeof window !== 'undefined') {
        import('./search-indexer').then(({ globalSearchIndexer }) => {
          globalSearchIndexer.indexNotes(notes)
        })
      }

      searchFiltersRef.current.updateFromNotes(notes)

      // Update available filters
      setFiltersState((prev) => ({
        ...prev,
        available: {
          tags: searchFiltersRef.current.getAvailableTags(),
          folders: searchFiltersRef.current.getAvailableFolders(),
          authors: searchFiltersRef.current.getAvailableAuthors(),
        },
      }))
    }
  }, [notes])

  // Load persisted filters on mount
  useEffect(() => {
    if (persistFilters && typeof window !== 'undefined') {
      const savedFilters = localStorage.getItem('notable-search-filters')
      if (savedFilters) {
        try {
          const filters = JSON.parse(savedFilters)
          setFiltersState((prev) => ({ ...prev, active: filters }))
        } catch (error) {
          console.warn('Failed to load saved search filters:', error)
        }
      }
    }
  }, [persistFilters])

  // Persist filters when they change
  useEffect(() => {
    if (
      persistFilters &&
      Object.keys(filtersState.active).length > 0 &&
      typeof window !== 'undefined'
    ) {
      localStorage.setItem(
        'notable-search-filters',
        JSON.stringify(filtersState.active)
      )
    }
  }, [filtersState.active, persistFilters])

  // Perform search with debouncing
  const performSearch = useCallback(
    async (
      query: string,
      filters: SearchFilterSet = filtersState.active,
      options: SearchOptions = searchOptions
    ) => {
      // Cancel previous search
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }

      // Clear debounce timeout
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current)
      }

      // Don't search empty queries without filters
      if (
        !query.trim() &&
        !searchFiltersRef.current.hasActiveFilters(filters)
      ) {
        setSearchState((prev) => ({
          ...prev,
          query,
          results: [],
          hasSearched: false,
          error: null,
          totalResults: 0,
        }))
        return
      }

      setSearchState((prev) => ({
        ...prev,
        query,
        isSearching: true,
        error: null,
      }))

      // Create new abort controller
      abortControllerRef.current = new AbortController()
      const signal = abortControllerRef.current.signal

      debounceTimeoutRef.current = setTimeout(async () => {
        try {
          const startTime = performance.now()

          const searchQuery: SearchQuery = {
            text: query,
            filters,
            options,
          }

          const results = await searchEngineRef.current.search(searchQuery)
          const endTime = performance.now()

          // Check if search was aborted
          if (signal.aborted) return

          const stats: SearchStats = {
            indexSize: 0, // Will be updated asynchronously if available
            totalNotes: notes.length,
            lastIndexed: new Date(),
            searchTime: endTime - startTime,
            resultCount: results.length,
          }

          // Update indexSize asynchronously if on client side
          if (typeof window !== 'undefined') {
            import('./search-indexer').then(({ globalSearchIndexer }) => {
              stats.indexSize = globalSearchIndexer.getStats().indexSize
            })
          }

          setSearchState((prev) => ({
            ...prev,
            results,
            isSearching: false,
            hasSearched: true,
            stats,
            totalResults: results.length,
          }))

          // Track search analytics
          if (enableAnalytics) {
            trackSearchAnalytics(
              query,
              filters,
              results.length,
              stats.searchTime
            )
          }
        } catch (error) {
          if (!signal.aborted) {
            console.error('Search error:', error)
            setSearchState((prev) => ({
              ...prev,
              isSearching: false,
              error: error instanceof Error ? error.message : 'Search failed',
            }))
          }
        }
      }, debounceMs)
    },
    [
      filtersState.active,
      searchOptions,
      notes.length,
      debounceMs,
      enableAnalytics,
    ]
  )

  // Search function for external use
  const search = useCallback(
    (query: string) => {
      performSearch(query, filtersState.active, searchOptions)
    },
    [performSearch, filtersState.active, searchOptions]
  )

  // Clear search results
  const clearSearch = useCallback(() => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current)
    }
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }

    setSearchState({
      query: '',
      results: [],
      isSearching: false,
      hasSearched: false,
      error: null,
      stats: null,
      totalResults: 0,
    })
  }, [])

  // Filter management functions
  const updateFilters = useCallback(
    (newFilters: Partial<SearchFilterSet>) => {
      setFiltersState((prev) => {
        const updatedFilters = searchFiltersRef.current.mergeFilters(
          prev.active,
          newFilters
        )

        // Re-run search with new filters if we have a query
        if (
          searchState.query ||
          searchFiltersRef.current.hasActiveFilters(updatedFilters)
        ) {
          performSearch(searchState.query, updatedFilters, searchOptions)
        }

        return {
          ...prev,
          active: updatedFilters,
        }
      })
    },
    [searchState.query, searchOptions, performSearch]
  )

  const clearFilters = useCallback(() => {
    const emptyFilters = searchFiltersRef.current.createEmptyFilters()
    setFiltersState((prev) => ({ ...prev, active: emptyFilters }))

    // Re-run search without filters
    if (searchState.query) {
      performSearch(searchState.query, emptyFilters, searchOptions)
    }
  }, [searchState.query, searchOptions, performSearch])

  // Search options management
  const updateSearchOptions = useCallback(
    (newOptions: Partial<SearchOptions>) => {
      setSearchOptions((prev) => {
        const updatedOptions = { ...prev, ...newOptions }

        // Re-run search with new options if we have a query
        if (
          searchState.query ||
          searchFiltersRef.current.hasActiveFilters(filtersState.active)
        ) {
          performSearch(searchState.query, filtersState.active, updatedOptions)
        }

        return updatedOptions
      })
    },
    [searchState.query, filtersState.active, performSearch]
  )

  // Computed values
  const hasActiveFilters = useMemo(
    () => searchFiltersRef.current.hasActiveFilters(filtersState.active),
    [filtersState.active]
  )

  const filterSummary = useMemo(
    () => searchFiltersRef.current.getFilterSummary(filtersState.active),
    [filtersState.active]
  )

  const isActive = searchState.hasSearched || hasActiveFilters

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current)
      }
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }
    }
  }, [])

  return {
    // State
    ...searchState,
    filters: filtersState,
    searchOptions,

    // Computed
    hasActiveFilters,
    filterSummary,
    isActive,

    // Actions
    search,
    clearSearch,
    updateFilters,
    clearFilters,
    updateSearchOptions,

    // Utils
    searchEngine: searchEngineRef.current,
    searchFilters: searchFiltersRef.current,
  }
}

// Search analytics tracking
function trackSearchAnalytics(
  query: string,
  filters: SearchFilterSet,
  resultCount: number,
  searchTime: number
) {
  if (typeof window === 'undefined') return

  try {
    const analytics = {
      query: query.substring(0, 100), // Truncate for privacy
      hasFilters: Object.keys(filters).length > 0,
      resultCount,
      searchTime: Math.round(searchTime),
      timestamp: new Date().toISOString(),
    }

    // Store in localStorage for local analytics
    const key = 'notable-search-analytics'
    const existing = JSON.parse(localStorage.getItem(key) || '[]')
    const limited = [...existing, analytics].slice(-100) // Keep last 100 searches

    localStorage.setItem(key, JSON.stringify(limited))
  } catch (error) {
    console.warn('Failed to track search analytics:', error)
  }
}

// Hook for getting search analytics
export function useSearchAnalytics() {
  const [analytics, setAnalytics] = useState<any[]>([])

  useEffect(() => {
    if (typeof window === 'undefined') return

    try {
      const data = JSON.parse(
        localStorage.getItem('notable-search-analytics') || '[]'
      )
      setAnalytics(data)
    } catch (error) {
      console.warn('Failed to load search analytics:', error)
    }
  }, [])

  const clearAnalytics = useCallback(() => {
    if (typeof window === 'undefined') return

    localStorage.removeItem('notable-search-analytics')
    setAnalytics([])
  }, [])

  const getSearchTrends = useCallback(() => {
    const trends = analytics.reduce(
      (acc, entry) => {
        const day = entry.timestamp.split('T')[0]
        if (!acc[day]) acc[day] = 0
        acc[day]++
        return acc
      },
      {} as Record<string, number>
    )

    return Object.entries(trends)
      .map(([date, count]) => ({ date, count }))
      .sort((a, b) => a.date.localeCompare(b.date))
  }, [analytics])

  return {
    analytics,
    clearAnalytics,
    getSearchTrends,
    totalSearches: analytics.length,
    averageSearchTime:
      analytics.length > 0
        ? Math.round(
            analytics.reduce((sum, entry) => sum + entry.searchTime, 0) /
              analytics.length
          )
        : 0,
  }
}
