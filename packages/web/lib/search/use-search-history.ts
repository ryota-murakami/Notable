// React Hook for Search History Management

import { useCallback, useEffect, useMemo, useState } from 'react'
import { type SearchFilterSet, type SearchHistoryEntry } from './types'

export interface UseSearchHistoryOptions {
  maxEntries?: number
  persistToStorage?: boolean
  storageKey?: string
  deduplicate?: boolean
  minQueryLength?: number
}

export interface SearchHistoryState {
  entries: SearchHistoryEntry[]
  isLoading: boolean
  error: string | null
}

export interface SearchSuggestion {
  query: string
  count: number
  lastUsed: Date
  avgResultCount: number
}

export function useSearchHistory(options: UseSearchHistoryOptions = {}) {
  const {
    maxEntries = 100,
    persistToStorage = true,
    storageKey = 'notable-search-history',
    deduplicate = true,
    minQueryLength = 2,
  } = options

  const [state, setState] = useState<SearchHistoryState>({
    entries: [],
    isLoading: false,
    error: null,
  })

  // Load history from storage on mount
  useEffect(() => {
    if (persistToStorage) {
      loadFromStorage()
    }
  }, [persistToStorage, storageKey])

  // Load search history from localStorage
  const loadFromStorage = useCallback(async () => {
    if (typeof window === 'undefined') return

    setState((prev) => ({ ...prev, isLoading: true, error: null }))

    try {
      const stored = localStorage.getItem(storageKey)
      if (stored) {
        const parsed = JSON.parse(stored)
        const entries = Array.isArray(parsed)
          ? parsed.map((entry) => ({
              ...entry,
              timestamp: new Date(entry.timestamp),
            }))
          : []

        setState({
          entries: entries.slice(0, maxEntries),
          isLoading: false,
          error: null,
        })
      } else {
        setState((prev) => ({ ...prev, isLoading: false }))
      }
    } catch (error) {
      console.error('Failed to load search history:', error)
      setState({
        entries: [],
        isLoading: false,
        error:
          error instanceof Error ? error.message : 'Failed to load history',
      })
    }
  }, [storageKey, maxEntries])

  // Save history to storage
  const saveToStorage = useCallback(
    (entries: SearchHistoryEntry[]) => {
      if (!persistToStorage || typeof window === 'undefined') return

      try {
        localStorage.setItem(storageKey, JSON.stringify(entries))
      } catch (error) {
        console.error('Failed to save search history:', error)
      }
    },
    [persistToStorage, storageKey]
  )

  // Add new search entry
  const addEntry = useCallback(
    (query: string, filters: SearchFilterSet = {}, resultCount: number = 0) => {
      if (query.length < minQueryLength) return

      const newEntry: SearchHistoryEntry = {
        id:
          crypto.randomUUID?.() ||
          `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        query: query.trim(),
        filters,
        timestamp: new Date(),
        resultCount,
      }

      setState((prev) => {
        let updatedEntries = [...prev.entries]

        // Remove duplicate if deduplication is enabled
        if (deduplicate) {
          updatedEntries = updatedEntries.filter(
            (entry) =>
              entry.query !== newEntry.query ||
              JSON.stringify(entry.filters) !== JSON.stringify(newEntry.filters)
          )
        }

        // Add new entry at the beginning
        updatedEntries.unshift(newEntry)

        // Limit to maxEntries
        if (updatedEntries.length > maxEntries) {
          updatedEntries = updatedEntries.slice(0, maxEntries)
        }

        // Save to storage
        saveToStorage(updatedEntries)

        return {
          ...prev,
          entries: updatedEntries,
        }
      })
    },
    [minQueryLength, deduplicate, maxEntries, saveToStorage]
  )

  // Remove specific entry
  const removeEntry = useCallback(
    (entryId: string) => {
      setState((prev) => {
        const updatedEntries = prev.entries.filter(
          (entry) => entry.id !== entryId
        )
        saveToStorage(updatedEntries)

        return {
          ...prev,
          entries: updatedEntries,
        }
      })
    },
    [saveToStorage]
  )

  // Clear all history
  const clearHistory = useCallback(() => {
    setState((prev) => ({
      ...prev,
      entries: [],
    }))

    if (persistToStorage && typeof window !== 'undefined') {
      localStorage.removeItem(storageKey)
    }
  }, [persistToStorage, storageKey])

  // Get recent searches (last N entries)
  const getRecentSearches = useCallback(
    (limit: number = 10) => {
      return state.entries.slice(0, limit)
    },
    [state.entries]
  )

  // Get search suggestions based on frequency and recency
  const getSearchSuggestions = useCallback(
    (query: string = '', limit: number = 5): SearchSuggestion[] => {
      const queryLower = query.toLowerCase()

      // Group by query and calculate statistics
      const queryStats = new Map<
        string,
        {
          count: number
          lastUsed: Date
          totalResultCount: number
          entries: SearchHistoryEntry[]
        }
      >()

      state.entries.forEach((entry) => {
        const entryQuery = entry.query.toLowerCase()

        // Skip if query doesn't match the search prefix
        if (query && !entryQuery.includes(queryLower)) return

        if (!queryStats.has(entryQuery)) {
          queryStats.set(entryQuery, {
            count: 0,
            lastUsed: entry.timestamp,
            totalResultCount: 0,
            entries: [],
          })
        }

        const stats = queryStats.get(entryQuery)!
        stats.count++
        stats.totalResultCount += entry.resultCount
        stats.entries.push(entry)

        // Update last used if this entry is more recent
        if (entry.timestamp > stats.lastUsed) {
          stats.lastUsed = entry.timestamp
        }
      })

      // Convert to suggestions and sort by relevance
      const suggestions: SearchSuggestion[] = Array.from(queryStats.entries())
        .map(([queryText, stats]) => ({
          query: stats.entries[0].query, // Use original casing from most recent entry
          count: stats.count,
          lastUsed: stats.lastUsed,
          avgResultCount: Math.round(stats.totalResultCount / stats.count),
        }))
        .sort((a, b) => {
          // Sort by frequency and recency
          const aScore =
            a.count * 0.7 +
            ((Date.now() - a.lastUsed.getTime()) / (1000 * 60 * 60 * 24)) * -0.3
          const bScore =
            b.count * 0.7 +
            ((Date.now() - b.lastUsed.getTime()) / (1000 * 60 * 60 * 24)) * -0.3
          return bScore - aScore
        })

      return suggestions.slice(0, limit)
    },
    [state.entries]
  )

  // Get popular searches (most frequent)
  const getPopularSearches = useCallback(
    (limit: number = 10) => {
      const queryCounts = new Map<string, number>()

      state.entries.forEach((entry) => {
        const query = entry.query.toLowerCase()
        queryCounts.set(query, (queryCounts.get(query) || 0) + 1)
      })

      return Array.from(queryCounts.entries())
        .map(([query, count]) => ({ query, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, limit)
    },
    [state.entries]
  )

  // Get entries by date range
  const getEntriesByDateRange = useCallback(
    (startDate: Date, endDate: Date) => {
      return state.entries.filter(
        (entry) => entry.timestamp >= startDate && entry.timestamp <= endDate
      )
    },
    [state.entries]
  )

  // Search within history
  const searchHistory = useCallback(
    (searchQuery: string) => {
      const queryLower = searchQuery.toLowerCase()

      return state.entries.filter((entry) =>
        entry.query.toLowerCase().includes(queryLower)
      )
    },
    [state.entries]
  )

  // Get history statistics
  const getStatistics = useMemo(() => {
    if (state.entries.length === 0) {
      return {
        totalSearches: 0,
        uniqueQueries: 0,
        averageResultCount: 0,
        mostRecentSearch: null,
        oldestSearch: null,
        searchesThisWeek: 0,
        searchesThisMonth: 0,
      }
    }

    const now = new Date()
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
    const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)

    const uniqueQueries = new Set(
      state.entries.map((entry) => entry.query.toLowerCase())
    ).size
    const totalResultCount = state.entries.reduce(
      (sum, entry) => sum + entry.resultCount,
      0
    )
    const searchesThisWeek = state.entries.filter(
      (entry) => entry.timestamp >= oneWeekAgo
    ).length
    const searchesThisMonth = state.entries.filter(
      (entry) => entry.timestamp >= oneMonthAgo
    ).length

    return {
      totalSearches: state.entries.length,
      uniqueQueries,
      averageResultCount: Math.round(totalResultCount / state.entries.length),
      mostRecentSearch: state.entries[0]?.timestamp || null,
      oldestSearch: state.entries[state.entries.length - 1]?.timestamp || null,
      searchesThisWeek,
      searchesThisMonth,
    }
  }, [state.entries])

  // Export history
  const exportHistory = useCallback(() => {
    const exportData = {
      version: '1.0',
      exportDate: new Date().toISOString(),
      totalEntries: state.entries.length,
      entries: state.entries,
    }

    return JSON.stringify(exportData, null, 2)
  }, [state.entries])

  // Import history
  const importHistory = useCallback(
    (jsonData: string) => {
      try {
        const importData = JSON.parse(jsonData)

        if (!importData.entries || !Array.isArray(importData.entries)) {
          throw new Error('Invalid import data format')
        }

        const importedEntries: SearchHistoryEntry[] = importData.entries.map(
          (entry: any) => ({
            ...entry,
            timestamp: new Date(entry.timestamp),
            id:
              entry.id ||
              crypto.randomUUID?.() ||
              `imported-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          })
        )

        setState((prev) => {
          // Merge with existing entries and remove duplicates if enabled
          let mergedEntries = [...prev.entries, ...importedEntries]

          if (deduplicate) {
            const seen = new Set<string>()
            mergedEntries = mergedEntries.filter((entry) => {
              const key = `${entry.query}-${JSON.stringify(entry.filters)}`
              if (seen.has(key)) return false
              seen.add(key)
              return true
            })
          }

          // Sort by timestamp (newest first) and limit
          mergedEntries.sort(
            (a, b) => b.timestamp.getTime() - a.timestamp.getTime()
          )
          mergedEntries = mergedEntries.slice(0, maxEntries)

          saveToStorage(mergedEntries)

          return {
            ...prev,
            entries: mergedEntries,
          }
        })

        return true
      } catch (error) {
        setState((prev) => ({
          ...prev,
          error: error instanceof Error ? error.message : 'Import failed',
        }))
        return false
      }
    },
    [deduplicate, maxEntries, saveToStorage]
  )

  return {
    // State
    ...state,

    // Actions
    addEntry,
    removeEntry,
    clearHistory,

    // Queries
    getRecentSearches,
    getSearchSuggestions,
    getPopularSearches,
    getEntriesByDateRange,
    searchHistory,

    // Statistics & Analytics
    statistics: getStatistics,

    // Import/Export
    exportHistory,
    importHistory,

    // Utils
    isEmpty: state.entries.length === 0,
    hasError: Boolean(state.error),
  }
}

// Hook for managing search history UI state
export function useSearchHistoryUI() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedEntry, setSelectedEntry] = useState<SearchHistoryEntry | null>(
    null
  )
  const [filter, setFilter] = useState('')

  const show = useCallback(() => setIsVisible(true), [])
  const hide = useCallback(() => setIsVisible(false), [])
  const toggle = useCallback(() => setIsVisible((prev) => !prev), [])

  const selectEntry = useCallback((entry: SearchHistoryEntry | null) => {
    setSelectedEntry(entry)
  }, [])

  const clearSelection = useCallback(() => {
    setSelectedEntry(null)
  }, [])

  return {
    isVisible,
    selectedEntry,
    filter,
    show,
    hide,
    toggle,
    selectEntry,
    clearSelection,
    setFilter,
  }
}

// Utility functions for search history
export const SearchHistoryUtils = {
  // Create a shareable search history entry
  createShareableEntry: (entry: SearchHistoryEntry) => ({
    query: entry.query,
    filters: entry.filters,
    timestamp: entry.timestamp.toISOString(),
  }),

  // Parse a shareable entry back to SearchHistoryEntry
  parseShareableEntry: (shareableEntry: any): SearchHistoryEntry => ({
    id:
      crypto.randomUUID?.() ||
      `shared-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    query: shareableEntry.query,
    filters: shareableEntry.filters || {},
    timestamp: new Date(shareableEntry.timestamp),
    resultCount: 0,
  }),

  // Generate search history insights
  generateInsights: (entries: SearchHistoryEntry[]) => {
    const insights = []

    // Most searched terms
    const termCounts = new Map<string, number>()
    entries.forEach((entry) => {
      entry.query
        .toLowerCase()
        .split(/\s+/)
        .forEach((term) => {
          if (term.length > 2) {
            termCounts.set(term, (termCounts.get(term) || 0) + 1)
          }
        })
    })

    const topTerms = Array.from(termCounts.entries())
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)

    if (topTerms.length > 0) {
      insights.push({
        type: 'top-terms',
        title: 'Most Searched Terms',
        data: topTerms.map(([term, count]) => ({ term, count })),
      })
    }

    // Search patterns by time
    const hourCounts = new Array(24).fill(0)
    entries.forEach((entry) => {
      hourCounts[entry.timestamp.getHours()]++
    })

    const peakHour = hourCounts.indexOf(Math.max(...hourCounts))
    if (entries.length > 10) {
      insights.push({
        type: 'peak-time',
        title: 'Peak Search Time',
        data: { hour: peakHour, count: hourCounts[peakHour] },
      })
    }

    // Search success rate
    const successfulSearches = entries.filter(
      (entry) => entry.resultCount > 0
    ).length
    const successRate =
      entries.length > 0 ? (successfulSearches / entries.length) * 100 : 0

    insights.push({
      type: 'success-rate',
      title: 'Search Success Rate',
      data: { rate: Math.round(successRate), total: entries.length },
    })

    return insights
  },
}
