// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Database } from './database'
import type { EnhancedTag } from './tags'

// Search result types
export interface SearchResult {
  id: string
  title: string
  content: any // JSONB content
  tags: EnhancedTag[]
  created_at: string
  updated_at: string
  rank: number
  headline_title: string
  headline_content: string
  folder_id?: string | null
  folder_name?: string | null
  type?: 'note'
}

// Search filters
export interface SearchFilters {
  tags?: string[]
  dateFrom?: string
  dateTo?: string
  noteTypes?: string[]
  status?: 'all' | 'published' | 'draft' | 'archived'
  linkedTo?: string // Note ID to search within linked notes
  folders?: string[]
}

// Search query types
export type SearchQueryType = 'basic' | 'filtered' | 'advanced'

export interface SearchQuery {
  query: string
  filters?: SearchFilters
  limit?: number
  offset?: number
}

// Search history
export interface SearchHistoryItem {
  id: string
  user_id: string
  query: string
  filters: SearchFilters
  results_count: number
  clicked_result_id?: string
  created_at: string
}

// Saved search
export interface SavedSearch {
  id: string
  user_id: string
  name: string
  query: string
  filters: SearchFilters
  shortcut_key?: string
  is_pinned: boolean
  created_at: string
  updated_at: string
}

// Search suggestion
export interface SearchSuggestion {
  suggestion: string
  type: 'tag' | 'history' | 'content'
  score: number
}

// Search analytics
export interface SearchAnalytics {
  id: string
  user_id: string
  query: string
  query_type: SearchQueryType
  response_time_ms: number
  results_count: number
  clicked_position?: number
  session_id?: string
  created_at: string
}

// Search state for UI
export interface SearchState {
  query: string
  filters: SearchFilters
  results: SearchResult[]
  suggestions: SearchSuggestion[]
  isLoading: boolean
  error?: string
  totalResults: number
  hasMore: boolean
}

// Search highlighting
export interface HighlightMatch {
  start: number
  end: number
  text: string
}

// Advanced search operators
export interface SearchOperator {
  type: 'tag' | 'date' | 'type' | 'status' | 'linked' | 'exclude'
  value: string
}

// Parse search query into operators
export function parseSearchQuery(query: string): {
  text: string
  operators: SearchOperator[]
} {
  const operators: SearchOperator[] = []
  let text = query

  // Tag operator: tag:tagname
  const tagRegex = /tag:([^\s]+)/g
  let match
  while ((match = tagRegex.exec(query)) !== null) {
    operators.push({ type: 'tag', value: match[1] })
    text = text.replace(match[0], '')
  }

  // Date operators: after:date, before:date
  const afterRegex = /after:([^\s]+)/g
  while ((match = afterRegex.exec(query)) !== null) {
    operators.push({ type: 'date', value: `after:${match[1]}` })
    text = text.replace(match[0], '')
  }

  const beforeRegex = /before:([^\s]+)/g
  while ((match = beforeRegex.exec(query)) !== null) {
    operators.push({ type: 'date', value: `before:${match[1]}` })
    text = text.replace(match[0], '')
  }

  // Type operator: type:task, type:note
  const typeRegex = /type:([^\s]+)/g
  while ((match = typeRegex.exec(query)) !== null) {
    operators.push({ type: 'type', value: match[1] })
    text = text.replace(match[0], '')
  }

  // Status operator: status:draft, status:published
  const statusRegex = /status:([^\s]+)/g
  while ((match = statusRegex.exec(query)) !== null) {
    operators.push({ type: 'status', value: match[1] })
    text = text.replace(match[0], '')
  }

  // Linked operator: linked:note-id
  const linkedRegex = /linked:([^\s]+)/g
  while ((match = linkedRegex.exec(query)) !== null) {
    operators.push({ type: 'linked', value: match[1] })
    text = text.replace(match[0], '')
  }

  // Exclude operator: -term
  const excludeRegex = /-([^\s]+)/g
  while ((match = excludeRegex.exec(text)) !== null) {
    operators.push({ type: 'exclude', value: match[1] })
    text = text.replace(match[0], '')
  }

  return {
    text: text.trim(),
    operators,
  }
}

// Convert operators to filters
export function operatorsToFilters(operators: SearchOperator[]): SearchFilters {
  const filters: SearchFilters = {}

  operators.forEach((op) => {
    switch (op.type) {
      case 'tag':
        if (!filters.tags) filters.tags = []
        filters.tags.push(op.value)
        break
      case 'date':
        if (op.value.startsWith('after:')) {
          filters.dateFrom = op.value.replace('after:', '')
        } else if (op.value.startsWith('before:')) {
          filters.dateTo = op.value.replace('before:', '')
        }
        break
      case 'type':
        if (!filters.noteTypes) filters.noteTypes = []
        filters.noteTypes.push(op.value)
        break
      case 'status':
        filters.status = op.value as SearchFilters['status']
        break
      case 'linked':
        filters.linkedTo = op.value
        break
    }
  })

  return filters
}

// Search result grouping
export interface GroupedSearchResults {
  recent: SearchResult[] // Last 7 days
  older: SearchResult[] // Older than 7 days
  byTag: Record<string, SearchResult[]>
}

export function groupSearchResults(
  results: SearchResult[]
): GroupedSearchResults {
  const now = new Date()
  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)

  const grouped: GroupedSearchResults = {
    recent: [],
    older: [],
    byTag: {},
  }

  results.forEach((result) => {
    const createdAt = new Date(result.created_at)

    // Group by recency
    if (createdAt > sevenDaysAgo) {
      grouped.recent.push(result)
    } else {
      grouped.older.push(result)
    }

    // Group by tags
    result.tags.forEach((tag) => {
      if (!grouped.byTag[tag.name]) {
        grouped.byTag[tag.name] = []
      }
      grouped.byTag[tag.name].push(result)
    })
  })

  return grouped
}

// Search performance tracking
export interface SearchPerformance {
  averageResponseTime: number
  searchesPerDay: number
  popularQueries: Array<{ query: string; count: number }>
  clickThroughRate: number
}

// Export all search-related constants
export const SEARCH_CONSTANTS = {
  MIN_QUERY_LENGTH: 2,
  DEFAULT_LIMIT: 20,
  MAX_LIMIT: 100,
  DEBOUNCE_MS: 300,
  CACHE_DURATION_MS: 5 * 60 * 1000, // 5 minutes
  MAX_SUGGESTIONS: 10,
  MAX_HISTORY_ITEMS: 50,
  MAX_SAVED_SEARCHES: 20,
} as const
