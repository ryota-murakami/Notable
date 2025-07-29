'use client'

import React, { useCallback, useRef, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import type { SearchableNote, SearchResult } from '@/lib/search/types'

export interface ServerSearchOptions {
  limit?: number
  offset?: number
  tags?: string[]
  folders?: string[]
  dateFrom?: string
  dateTo?: string
  includeContent?: boolean
  sortBy?: 'relevance' | 'created' | 'updated' | 'title'
  debounceMs?: number
}

export interface ServerSearchState {
  query: string
  results: SearchResult[]
  isSearching: boolean
  hasSearched: boolean
  error: string | null
  pagination: {
    total: number
    limit: number
    offset: number
    hasMore: boolean
  }
  stats: {
    searchTime: number
    totalResults: number
  }
}

export interface AutocompleteResult {
  id: string
  title: string
  matchType: 'title_prefix' | 'title_contains' | 'content_match'
  score: number
}

export interface UseServerSearchReturn {
  // State
  query: string
  results: SearchResult[]
  isSearching: boolean
  hasSearched: boolean
  error: string | null
  pagination: ServerSearchState['pagination']
  stats: ServerSearchState['stats']

  // Autocomplete
  autocompleteResults: AutocompleteResult[]
  isAutocompleting: boolean

  // Actions
  search: (query: string, options?: ServerSearchOptions) => void
  autocomplete: (query: string) => void
  clearSearch: () => void
  loadMore: () => void

  // Options management
  options: ServerSearchOptions
  updateOptions: (newOptions: Partial<ServerSearchOptions>) => void

  // Performance info
  hasActiveFilters: boolean
  filterSummary: string[]
}

export function useServerSearch(
  initialOptions: ServerSearchOptions = {}
): UseServerSearchReturn {
  const [query, setQuery] = useState('')
  const [options, setOptions] = useState<ServerSearchOptions>({
    limit: 50,
    offset: 0,
    sortBy: 'relevance',
    includeContent: true,
    debounceMs: 300,
    ...initialOptions,
  })
  const [hasSearched, setHasSearched] = useState(false)
  const [autocompleteResults, setAutocompleteResults] = useState<
    AutocompleteResult[]
  >([])
  const [isAutocompleting, setIsAutocompleting] = useState(false)

  const debounceTimeoutRef = useRef<NodeJS.Timeout>()
  const autocompleteTimeoutRef = useRef<NodeJS.Timeout>()

  // Build search URL with parameters
  const buildSearchUrl = useCallback(
    (searchQuery: string, searchOptions: ServerSearchOptions) => {
      const params = new URLSearchParams()

      if (searchQuery.trim()) {
        params.append('q', searchQuery.trim())
      }

      if (searchOptions.limit) {
        params.append('limit', searchOptions.limit.toString())
      }

      if (searchOptions.offset) {
        params.append('offset', searchOptions.offset.toString())
      }

      if (searchOptions.tags && searchOptions.tags.length > 0) {
        params.append('tags', searchOptions.tags.join(','))
      }

      if (searchOptions.folders && searchOptions.folders.length > 0) {
        params.append('folders', searchOptions.folders.join(','))
      }

      if (searchOptions.dateFrom) {
        params.append('date_from', searchOptions.dateFrom)
      }

      if (searchOptions.dateTo) {
        params.append('date_to', searchOptions.dateTo)
      }

      if (searchOptions.includeContent !== undefined) {
        params.append(
          'include_content',
          searchOptions.includeContent.toString()
        )
      }

      if (searchOptions.sortBy) {
        params.append('sort_by', searchOptions.sortBy)
      }

      return `/api/search?${params.toString()}`
    },
    []
  )

  // React Query for search results
  const {
    data: searchData,
    isLoading: isSearching,
    error: searchError,
    refetch,
  } = useQuery({
    queryKey: ['server-search', query, options],
    queryFn: async () => {
      if (!query.trim()) {
        return {
          success: true,
          data: [],
          pagination: {
            total: 0,
            limit: options.limit || 50,
            offset: options.offset || 0,
            hasMore: false,
          },
          stats: {
            searchTime: 0,
            totalResults: 0,
          },
        }
      }

      const url = buildSearchUrl(query, options)
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(`Search failed: ${response.statusText}`)
      }

      return response.json()
    },
    enabled: false, // Only run when explicitly triggered
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  })

  // Debounced search function
  const search = useCallback(
    (searchQuery: string, searchOptions?: ServerSearchOptions) => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current)
      }

      const newOptions = { ...options, ...searchOptions, offset: 0 }
      setOptions(newOptions)
      setQuery(searchQuery)
      setHasSearched(true)

      const debounceMs = newOptions.debounceMs || 300

      debounceTimeoutRef.current = setTimeout(() => {
        refetch()
      }, debounceMs)
    },
    [options, refetch]
  )

  // Autocomplete search function
  const autocomplete = useCallback((searchQuery: string) => {
    if (autocompleteTimeoutRef.current) {
      clearTimeout(autocompleteTimeoutRef.current)
    }

    if (!searchQuery.trim() || searchQuery.length < 2) {
      setAutocompleteResults([])
      setIsAutocompleting(false)
      return
    }

    setIsAutocompleting(true)

    autocompleteTimeoutRef.current = setTimeout(async () => {
      try {
        const response = await fetch(
          `/api/search/autocomplete?q=${encodeURIComponent(searchQuery)}&limit=10`
        )

        if (!response.ok) {
          throw new Error('Autocomplete request failed')
        }

        const data = await response.json()
        setAutocompleteResults(data.data || [])
      } catch (error) {
        console.error('Autocomplete error:', error)
        setAutocompleteResults([])
      } finally {
        setIsAutocompleting(false)
      }
    }, 150) // Very fast debounce for autocomplete
  }, [])

  // Clear search results
  const clearSearch = useCallback(() => {
    setQuery('')
    setHasSearched(false)
    setOptions((prev) => ({ ...prev, offset: 0 }))
    setAutocompleteResults([])
    setIsAutocompleting(false)

    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current)
    }
    if (autocompleteTimeoutRef.current) {
      clearTimeout(autocompleteTimeoutRef.current)
    }
  }, [])

  // Load more results (pagination)
  const loadMore = useCallback(() => {
    if (!searchData?.pagination.hasMore || isSearching) return

    const newOffset = (options.offset || 0) + (options.limit || 50)
    setOptions((prev) => ({ ...prev, offset: newOffset }))
    refetch()
  }, [
    searchData?.pagination.hasMore,
    isSearching,
    options.offset,
    options.limit,
    refetch,
  ])

  // Update search options
  const updateOptions = useCallback(
    (newOptions: Partial<ServerSearchOptions>) => {
      setOptions((prev) => ({ ...prev, ...newOptions, offset: 0 }))

      // If we have an active search, re-run it with new options
      if (hasSearched && query.trim()) {
        search(query, newOptions)
      }
    },
    [hasSearched, query, search]
  )

  // Save search to history when successful
  const saveSearchToHistory = useCallback(
    async (searchQuery: string, resultsCount: number) => {
      if (!searchQuery.trim()) return

      try {
        await fetch('/api/search/history', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: searchQuery,
            results_count: resultsCount,
          }),
        })
      } catch (error) {
        console.error('Failed to save search to history:', error)
        // Don't throw - search history is not critical
      }
    },
    []
  )

  // Save to history when search completes successfully
  React.useEffect(() => {
    if (searchData?.success && searchData.data && query.trim()) {
      saveSearchToHistory(query, searchData.stats.totalResults)
    }
  }, [searchData, query, saveSearchToHistory])

  const results = searchData?.data || []
  const pagination = searchData?.pagination || {
    total: 0,
    limit: options.limit || 50,
    offset: options.offset || 0,
    hasMore: false,
  }
  const stats = searchData?.stats || {
    searchTime: 0,
    totalResults: 0,
  }

  // Calculate filter information
  const hasActiveFilters =
    (options.tags && options.tags.length > 0) ||
    options.dateFrom ||
    options.dateTo ||
    (options.sortBy && options.sortBy !== 'relevance')

  const filterSummary = []
  if (options.tags && options.tags.length > 0) {
    filterSummary.push(`Tags: ${options.tags.join(', ')}`)
  }
  if (options.dateFrom) {
    filterSummary.push(`From: ${options.dateFrom}`)
  }
  if (options.dateTo) {
    filterSummary.push(`To: ${options.dateTo}`)
  }
  if (options.sortBy && options.sortBy !== 'relevance') {
    filterSummary.push(`Sort: ${options.sortBy}`)
  }

  return {
    // State
    query,
    results,
    isSearching,
    hasSearched,
    error: searchError ? (searchError as Error).message : null,
    pagination,
    stats,

    // Autocomplete
    autocompleteResults,
    isAutocompleting,

    // Actions
    search,
    autocomplete,
    clearSearch,
    loadMore,

    // Options
    options,
    updateOptions,

    // Performance info
    hasActiveFilters,
    filterSummary,
  }
}
