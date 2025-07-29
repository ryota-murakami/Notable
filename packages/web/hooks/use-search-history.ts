'use client'

import { useCallback } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export interface SearchHistoryEntry {
  id: string
  user_id: string
  query: string
  results_count: number
  created_at: string
}

export interface SearchSuggestion {
  query: string
  count: number
  avgResultCount: number
  lastUsed: string
}

export interface UseSearchHistoryOptions {
  limit?: number
  enableSuggestions?: boolean
}

export interface UseSearchHistoryReturn {
  // Data
  history: SearchHistoryEntry[]
  suggestions: SearchSuggestion[]
  isLoading: boolean
  error: string | null

  // Actions
  addEntry: (query: string, resultsCount?: number) => Promise<void>
  removeEntry: (id: string) => Promise<void>
  clearHistory: () => Promise<void>
  getRecentSearches: (limit?: number) => SearchHistoryEntry[]
  getSearchSuggestions: (query?: string, limit?: number) => SearchSuggestion[]

  // Utility
  refresh: () => void
}

export function useSearchHistory(
  options: UseSearchHistoryOptions = {}
): UseSearchHistoryReturn {
  const { limit = 50, enableSuggestions = true } = options

  const queryClient = useQueryClient()

  // Fetch search history
  const {
    data: historyData,
    isLoading,
    error: historyError,
    refetch,
  } = useQuery({
    queryKey: ['search-history', limit],
    queryFn: async () => {
      const params = new URLSearchParams()
      if (limit) params.append('limit', limit.toString())

      const response = await fetch(`/api/search/history?${params}`)

      if (!response.ok) {
        throw new Error(
          `Failed to fetch search history: ${response.statusText}`
        )
      }

      const result = await response.json()
      return result.data || []
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  })

  // Add search entry mutation
  const addEntryMutation = useMutation({
    mutationFn: async ({
      query,
      resultsCount,
    }: {
      query: string
      resultsCount?: number
    }) => {
      const response = await fetch('/api/search/history', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          results_count: resultsCount || 0,
        }),
      })

      if (!response.ok) {
        throw new Error(`Failed to add search entry: ${response.statusText}`)
      }

      return response.json()
    },
    onSuccess: () => {
      // Refresh the history
      queryClient.invalidateQueries({ queryKey: ['search-history'] })
    },
  })

  // Remove search entry mutation
  const removeEntryMutation = useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(`/api/search/history?id=${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error(`Failed to remove search entry: ${response.statusText}`)
      }

      return response.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['search-history'] })
    },
  })

  // Clear all history mutation
  const clearHistoryMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch('/api/search/history?clear_all=true', {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error(
          `Failed to clear search history: ${response.statusText}`
        )
      }

      return response.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['search-history'] })
    },
  })

  // Action callbacks
  const addEntry = useCallback(
    async (query: string, resultsCount?: number) => {
      if (!query.trim()) return

      try {
        await addEntryMutation.mutateAsync({
          query: query.trim(),
          resultsCount,
        })
      } catch (error) {
        console.error('Failed to add search entry:', error)
        throw error
      }
    },
    [addEntryMutation]
  )

  const removeEntry = useCallback(
    async (id: string) => {
      try {
        await removeEntryMutation.mutateAsync(id)
      } catch (error) {
        console.error('Failed to remove search entry:', error)
        throw error
      }
    },
    [removeEntryMutation]
  )

  const clearHistory = useCallback(async () => {
    try {
      await clearHistoryMutation.mutateAsync()
    } catch (error) {
      console.error('Failed to clear search history:', error)
      throw error
    }
  }, [clearHistoryMutation])

  // Get recent searches
  const getRecentSearches = useCallback(
    (searchLimit = 10): SearchHistoryEntry[] => {
      if (!historyData) return []

      return historyData
        .sort(
          (a: SearchHistoryEntry, b: SearchHistoryEntry) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        )
        .slice(0, searchLimit)
    },
    [historyData]
  )

  // Generate search suggestions based on history
  const getSearchSuggestions = useCallback(
    (query = '', suggestionLimit = 5): SearchSuggestion[] => {
      if (!historyData || !enableSuggestions) return []

      // Group by query and calculate stats
      const queryStats = new Map<
        string,
        {
          count: number
          totalResults: number
          lastUsed: string
        }
      >()

      historyData.forEach((entry: SearchHistoryEntry) => {
        const existing = queryStats.get(entry.query) || {
          count: 0,
          totalResults: 0,
          lastUsed: entry.created_at,
        }

        queryStats.set(entry.query, {
          count: existing.count + 1,
          totalResults: existing.totalResults + entry.results_count,
          lastUsed:
            entry.created_at > existing.lastUsed
              ? entry.created_at
              : existing.lastUsed,
        })
      })

      // Convert to suggestions and filter by query if provided
      const suggestions: SearchSuggestion[] = Array.from(queryStats.entries())
        .map(([searchQuery, stats]) => ({
          query: searchQuery,
          count: stats.count,
          avgResultCount: Math.round(stats.totalResults / stats.count),
          lastUsed: stats.lastUsed,
        }))
        .filter((suggestion) => {
          if (!query.trim()) return true
          return suggestion.query.toLowerCase().includes(query.toLowerCase())
        })
        .sort((a, b) => {
          // Sort by frequency first, then by recency
          if (a.count !== b.count) {
            return b.count - a.count
          }
          return new Date(b.lastUsed).getTime() - new Date(a.lastUsed).getTime()
        })
        .slice(0, suggestionLimit)

      return suggestions
    },
    [historyData, enableSuggestions]
  )

  const history = historyData || []
  const suggestions = enableSuggestions ? getSearchSuggestions() : []
  const error = historyError ? (historyError as Error).message : null

  return {
    // Data
    history,
    suggestions,
    isLoading,
    error,

    // Actions
    addEntry,
    removeEntry,
    clearHistory,
    getRecentSearches,
    getSearchSuggestions,

    // Utility
    refresh: refetch,
  }
}
