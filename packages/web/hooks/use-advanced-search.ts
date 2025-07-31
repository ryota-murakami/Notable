import { useState, useCallback, useEffect, useRef } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useDebounce } from './use-debounce'
import type {
  SearchQuery,
  SearchResult,
  SearchSuggestion,
  SearchFilters,
  SavedSearch,
  SEARCH_CONSTANTS,
} from '@/types/search'

// Search for notes
export function useAdvancedSearch(initialQuery: string = '') {
  const [query, setQuery] = useState(initialQuery)
  const [filters, setFilters] = useState<SearchFilters>({})
  const [limit] = useState(SEARCH_CONSTANTS.DEFAULT_LIMIT)
  const [offset, setOffset] = useState(0)

  const debouncedQuery = useDebounce(query, SEARCH_CONSTANTS.DEBOUNCE_MS)

  const searchQuery: SearchQuery = {
    query: debouncedQuery,
    filters,
    limit,
    offset,
  }

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['search', searchQuery],
    queryFn: async () => {
      if (
        !debouncedQuery ||
        debouncedQuery.length < SEARCH_CONSTANTS.MIN_QUERY_LENGTH
      ) {
        return null
      }

      const response = await fetch('/api/search/advanced', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(searchQuery),
      })

      if (!response.ok) {
        throw new Error('Search failed')
      }

      return response.json()
    },
    enabled: debouncedQuery.length >= SEARCH_CONSTANTS.MIN_QUERY_LENGTH,
    staleTime: SEARCH_CONSTANTS.CACHE_DURATION_MS,
    gcTime: SEARCH_CONSTANTS.CACHE_DURATION_MS,
  })

  const loadMore = useCallback(() => {
    if (data?.data?.hasMore) {
      setOffset((prev) => prev + limit)
    }
  }, [data, limit])

  const reset = useCallback(() => {
    setQuery('')
    setFilters({})
    setOffset(0)
  }, [])

  return {
    query,
    setQuery,
    filters,
    setFilters,
    results: data?.data?.results || [],
    totalCount: data?.data?.totalCount || 0,
    hasMore: data?.data?.hasMore || false,
    isLoading,
    error,
    loadMore,
    reset,
    refetch,
  }
}

// Get search suggestions
export function useSearchSuggestions(query: string) {
  const debouncedQuery = useDebounce(query, 150) // Faster debounce for suggestions

  return useQuery({
    queryKey: ['search-suggestions', debouncedQuery],
    queryFn: async () => {
      if (!debouncedQuery || debouncedQuery.length < 1) {
        return []
      }

      const response = await fetch(
        `/api/search/suggestions?q=${encodeURIComponent(debouncedQuery)}&limit=10`
      )

      if (!response.ok) {
        throw new Error('Failed to get suggestions')
      }

      const data = await response.json()
      return data.data as SearchSuggestion[]
    },
    enabled: debouncedQuery.length >= 1,
    staleTime: 30000, // 30 seconds
  })
}

// Search history
export function useSearchHistory() {
  return useQuery({
    queryKey: ['search-history'],
    queryFn: async () => {
      const response = await fetch('/api/search/history')

      if (!response.ok) {
        throw new Error('Failed to get search history')
      }

      const data = await response.json()
      return data.data
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

// Clear search history
export function useClearSearchHistory() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async () => {
      const response = await fetch('/api/search/history', {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Failed to clear search history')
      }

      return response.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['search-history'] })
    },
  })
}

// Saved searches
export function useSavedSearches() {
  return useQuery({
    queryKey: ['saved-searches'],
    queryFn: async () => {
      const response = await fetch('/api/search/saved')

      if (!response.ok) {
        throw new Error('Failed to get saved searches')
      }

      const data = await response.json()
      return data.data as SavedSearch[]
    },
  })
}

// Save a search
export function useSaveSearch() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (
      search: Omit<SavedSearch, 'id' | 'user_id' | 'created_at' | 'updated_at'>
    ) => {
      const response = await fetch('/api/search/saved', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(search),
      })

      if (!response.ok) {
        throw new Error('Failed to save search')
      }

      return response.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['saved-searches'] })
    },
  })
}

// Delete saved search
export function useDeleteSavedSearch() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (searchId: string) => {
      const response = await fetch(`/api/search/saved/${searchId}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Failed to delete saved search')
      }

      return response.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['saved-searches'] })
    },
  })
}

// Hook for keyboard shortcuts
export function useSearchKeyboardShortcuts(
  onOpenSearch: () => void,
  onCloseSearch: () => void
) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Global search: Cmd/Ctrl + Shift + F
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === 'f') {
        e.preventDefault()
        onOpenSearch()
      }

      // Close search: Escape
      if (e.key === 'Escape') {
        onCloseSearch()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onOpenSearch, onCloseSearch])
}

// Hook for tracking search analytics
export function useTrackSearchClick(searchQuery: string) {
  return useCallback(
    async (resultId: string, position: number) => {
      try {
        await fetch('/api/search/analytics', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: searchQuery,
            clicked_result_id: resultId,
            clicked_position: position,
          }),
        })
      } catch (error) {
        console.error('Failed to track search click:', error)
      }
    },
    [searchQuery]
  )
}
