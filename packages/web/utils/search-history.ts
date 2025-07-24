export interface SearchHistoryItem {
  id: string
  query: string
  timestamp: Date
  resultCount: number
  isSaved: boolean
  name?: string // For saved searches
}

export class SearchHistory {
  private static readonly STORAGE_KEY = 'notable-search-history'
  private static readonly MAX_HISTORY_ITEMS = 50
  private static readonly SAVED_SEARCHES_KEY = 'notable-saved-searches'

  /**
   * Get all search history items
   */
  static getHistory(): SearchHistoryItem[] {
    if (typeof window === 'undefined') return []

    try {
      const stored = localStorage.getItem(this.STORAGE_KEY)
      if (!stored) return []

      const items = JSON.parse(stored) as SearchHistoryItem[]
      return items.map((item) => ({
        ...item,
        timestamp: new Date(item.timestamp),
      }))
    } catch (error) {
      console.error('Failed to load search history:', error)
      return []
    }
  }

  /**
   * Add a search query to history
   */
  static addToHistory(query: string, resultCount: number): void {
    if (typeof window === 'undefined' || !query.trim()) return

    try {
      const history = this.getHistory()

      // Remove duplicate queries
      const filtered = history.filter((item) => item.query !== query)

      // Add new item at the beginning
      const newItem: SearchHistoryItem = {
        id: `search-${Date.now()}`,
        query,
        timestamp: new Date(),
        resultCount,
        isSaved: false,
      }

      const updated = [newItem, ...filtered].slice(0, this.MAX_HISTORY_ITEMS)

      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updated))
    } catch (error) {
      console.error('Failed to save search history:', error)
    }
  }

  /**
   * Clear all search history
   */
  static clearHistory(): void {
    if (typeof window === 'undefined') return

    try {
      localStorage.removeItem(this.STORAGE_KEY)
    } catch (error) {
      console.error('Failed to clear search history:', error)
    }
  }

  /**
   * Remove a specific item from history
   */
  static removeFromHistory(id: string): void {
    if (typeof window === 'undefined') return

    try {
      const history = this.getHistory()
      const filtered = history.filter((item) => item.id !== id)
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(filtered))
    } catch (error) {
      console.error('Failed to remove search history item:', error)
    }
  }

  /**
   * Get saved searches
   */
  static getSavedSearches(): SearchHistoryItem[] {
    if (typeof window === 'undefined') return []

    try {
      const stored = localStorage.getItem(this.SAVED_SEARCHES_KEY)
      if (!stored) return []

      const items = JSON.parse(stored) as SearchHistoryItem[]
      return items.map((item) => ({
        ...item,
        timestamp: new Date(item.timestamp),
        isSaved: true,
      }))
    } catch (error) {
      console.error('Failed to load saved searches:', error)
      return []
    }
  }

  /**
   * Save a search query
   */
  static saveSearch(query: string, name?: string): void {
    if (typeof window === 'undefined' || !query.trim()) return

    try {
      const saved = this.getSavedSearches()

      // Check if already saved
      if (saved.some((item) => item.query === query)) return

      const newItem: SearchHistoryItem = {
        id: `saved-${Date.now()}`,
        query,
        timestamp: new Date(),
        resultCount: 0,
        isSaved: true,
        name: name || query,
      }

      const updated = [...saved, newItem]
      localStorage.setItem(this.SAVED_SEARCHES_KEY, JSON.stringify(updated))
    } catch (error) {
      console.error('Failed to save search:', error)
    }
  }

  /**
   * Remove a saved search
   */
  static removeSavedSearch(id: string): void {
    if (typeof window === 'undefined') return

    try {
      const saved = this.getSavedSearches()
      const filtered = saved.filter((item) => item.id !== id)
      localStorage.setItem(this.SAVED_SEARCHES_KEY, JSON.stringify(filtered))
    } catch (error) {
      console.error('Failed to remove saved search:', error)
    }
  }

  /**
   * Update saved search name
   */
  static updateSavedSearchName(id: string, name: string): void {
    if (typeof window === 'undefined') return

    try {
      const saved = this.getSavedSearches()
      const updated = saved.map((item) =>
        item.id === id ? { ...item, name } : item
      )
      localStorage.setItem(this.SAVED_SEARCHES_KEY, JSON.stringify(updated))
    } catch (error) {
      console.error('Failed to update saved search:', error)
    }
  }

  /**
   * Get recent unique queries
   */
  static getRecentQueries(limit: number = 10): string[] {
    const history = this.getHistory()
    const uniqueQueries = new Set<string>()

    for (const item of history) {
      uniqueQueries.add(item.query)
      if (uniqueQueries.size >= limit) break
    }

    return Array.from(uniqueQueries)
  }

  /**
   * Get query suggestions based on partial input
   */
  static getSuggestions(partial: string, limit: number = 5): string[] {
    if (!partial.trim()) return []

    const lowerPartial = partial.toLowerCase()
    const history = this.getHistory()
    const saved = this.getSavedSearches()

    // Combine and deduplicate
    const allQueries = new Set<string>()

    // Prioritize saved searches
    for (const item of saved) {
      if (item.query.toLowerCase().includes(lowerPartial)) {
        allQueries.add(item.query)
      }
    }

    // Then add from history
    for (const item of history) {
      if (item.query.toLowerCase().includes(lowerPartial)) {
        allQueries.add(item.query)
      }
    }

    return Array.from(allQueries).slice(0, limit)
  }
}
