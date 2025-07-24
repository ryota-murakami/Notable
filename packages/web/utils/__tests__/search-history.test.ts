import { SearchHistory } from '../search-history'

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {}

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value
    },
    removeItem: (key: string) => {
      delete store[key]
    },
    clear: () => {
      store = {}
    },
  }
})()

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
})

describe('SearchHistory', () => {
  beforeEach(() => {
    localStorageMock.clear()
    // Reset any mocks
    jest.clearAllMocks()
  })

  describe('search history', () => {
    it('should add search to history', () => {
      SearchHistory.addToHistory('test query', 5)

      const history = SearchHistory.getHistory()
      expect(history).toHaveLength(1)
      expect(history[0].query).toBe('test query')
      expect(history[0].resultCount).toBe(5)
      expect(history[0].isSaved).toBe(false)
    })

    it('should not add empty queries to history', () => {
      SearchHistory.addToHistory('', 0)
      SearchHistory.addToHistory('  ', 0)

      const history = SearchHistory.getHistory()
      expect(history).toHaveLength(0)
    })

    it('should remove duplicate queries and keep most recent', () => {
      SearchHistory.addToHistory('query 1', 3)
      SearchHistory.addToHistory('query 2', 5)
      SearchHistory.addToHistory('query 1', 7)

      const history = SearchHistory.getHistory()
      expect(history).toHaveLength(2)
      expect(history[0].query).toBe('query 1')
      expect(history[0].resultCount).toBe(7)
      expect(history[1].query).toBe('query 2')
    })

    it('should limit history to max items', () => {
      // Add more than max items
      for (let i = 0; i < 60; i++) {
        SearchHistory.addToHistory(`query ${i}`, i)
      }

      const history = SearchHistory.getHistory()
      expect(history.length).toBeLessThanOrEqual(50)
    })

    it('should clear all history', () => {
      SearchHistory.addToHistory('query 1', 3)
      SearchHistory.addToHistory('query 2', 5)

      SearchHistory.clearHistory()

      const history = SearchHistory.getHistory()
      expect(history).toHaveLength(0)
    })

    it('should remove specific history item', () => {
      SearchHistory.addToHistory('query 1', 3)
      SearchHistory.addToHistory('query 2', 5)

      const history = SearchHistory.getHistory()
      // Most recent item is first (query 2)
      const idToRemove = history[1].id // Remove query 1

      SearchHistory.removeFromHistory(idToRemove)

      const updatedHistory = SearchHistory.getHistory()
      expect(updatedHistory).toHaveLength(1)
      expect(updatedHistory[0].query).toBe('query 2')
    })
  })

  describe('saved searches', () => {
    it('should save a search', () => {
      SearchHistory.saveSearch('important query', 'My Important Search')

      const saved = SearchHistory.getSavedSearches()
      expect(saved).toHaveLength(1)
      expect(saved[0].query).toBe('important query')
      expect(saved[0].name).toBe('My Important Search')
      expect(saved[0].isSaved).toBe(true)
    })

    it('should not save duplicate queries', () => {
      SearchHistory.saveSearch('duplicate query', 'First')
      SearchHistory.saveSearch('duplicate query', 'Second')

      const saved = SearchHistory.getSavedSearches()
      expect(saved).toHaveLength(1)
      expect(saved[0].name).toBe('First')
    })

    it('should use query as name if name not provided', () => {
      SearchHistory.saveSearch('unnamed query')

      const saved = SearchHistory.getSavedSearches()
      expect(saved[0].name).toBe('unnamed query')
    })

    it('should remove saved search', () => {
      // Clear any previous data
      localStorageMock.clear()

      SearchHistory.saveSearch('query 1', 'Search 1')
      SearchHistory.saveSearch('query 2', 'Search 2')

      const saved = SearchHistory.getSavedSearches()
      expect(saved).toHaveLength(2) // Verify we have 2 items

      const idToRemove = saved[0].id // Remove query 1

      SearchHistory.removeSavedSearch(idToRemove)

      const updatedSaved = SearchHistory.getSavedSearches()
      expect(updatedSaved).toHaveLength(1)
      expect(updatedSaved[0].query).toBe('query 2')
    })

    it('should update saved search name', () => {
      SearchHistory.saveSearch('test query', 'Original Name')

      const saved = SearchHistory.getSavedSearches()
      const id = saved[0].id

      SearchHistory.updateSavedSearchName(id, 'Updated Name')

      const updated = SearchHistory.getSavedSearches()
      expect(updated[0].name).toBe('Updated Name')
    })
  })

  describe('suggestions', () => {
    beforeEach(() => {
      SearchHistory.addToHistory('project meeting notes', 5)
      SearchHistory.addToHistory('technical documentation', 3)
      SearchHistory.addToHistory('personal ideas', 2)
      SearchHistory.saveSearch('tag:important', 'Important Items')
    })

    it('should get recent unique queries', () => {
      const recent = SearchHistory.getRecentQueries(2)

      expect(recent).toHaveLength(2)
      expect(recent[0]).toBe('personal ideas')
      expect(recent[1]).toBe('technical documentation')
    })

    it('should get suggestions based on partial input', () => {
      const suggestions = SearchHistory.getSuggestions('proj')

      expect(suggestions).toContain('project meeting notes')
      expect(suggestions).not.toContain('technical documentation')
    })

    it('should prioritize saved searches in suggestions', () => {
      const suggestions = SearchHistory.getSuggestions('important', 2)

      expect(suggestions[0]).toBe('tag:important')
    })

    it('should handle case-insensitive suggestions', () => {
      const suggestions = SearchHistory.getSuggestions('TECH')

      expect(suggestions).toContain('technical documentation')
    })

    it('should return empty suggestions for empty input', () => {
      const suggestions = SearchHistory.getSuggestions('')

      expect(suggestions).toHaveLength(0)
    })

    it('should limit number of suggestions', () => {
      const suggestions = SearchHistory.getSuggestions('e', 2)

      expect(suggestions.length).toBeLessThanOrEqual(2)
    })
  })

  describe('error handling', () => {
    it('should handle localStorage errors gracefully', () => {
      // Mock localStorage to throw error
      const originalGetItem = localStorageMock.getItem
      localStorageMock.getItem = jest.fn(() => {
        throw new Error('Storage error')
      })

      const history = SearchHistory.getHistory()
      expect(history).toEqual([])

      // Restore original function
      localStorageMock.getItem = originalGetItem
    })

    it('should handle invalid JSON in localStorage', () => {
      localStorageMock.setItem('notable-search-history', 'invalid json')

      const history = SearchHistory.getHistory()
      expect(history).toEqual([])

      // Clean up
      localStorageMock.clear()
    })
  })
})
