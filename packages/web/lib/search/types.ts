// Search System Types

export interface SearchQuery {
  text: string
  filters: SearchFilterSet
  options: SearchOptions
}

export interface SearchFilterSet {
  dateRange?: {
    start: Date
    end: Date
  }
  tags?: string[]
  folders?: string[]
  fileTypes?: string[]
  author?: string
  isFolder?: boolean
  hasContent?: boolean
}

export interface SearchOptions {
  // Search behavior
  fuzzy?: boolean
  caseSensitive?: boolean
  wholeWord?: boolean
  regex?: boolean
  includeContent?: boolean
  includeTitles?: boolean
  includeTags?: boolean

  // Performance
  limit?: number
  offset?: number
  debounceMs?: number

  // Boolean operators
  enableOperators?: boolean // AND, OR, NOT

  // Search within
  searchFields?: ('title' | 'content' | 'tags' | 'path')[]
}

export interface SearchResult {
  note: SearchableNote
  score: number
  matches: SearchMatch[]
  snippet: string
}

export interface SearchableNote {
  id: string
  title: string
  content: string
  tags: string[]
  path: string
  isFolder: boolean
  created_at: string
  updated_at: string
  author?: string
  fileSize?: number
}

export interface SearchMatch {
  field: 'title' | 'content' | 'tags' | 'path'
  value: string
  start: number
  end: number
  context: {
    before: string
    match: string
    after: string
  }
}

export interface SearchIndex {
  id: string
  title: string
  content: string
  tags: string[]
  path: string
  tokens: string[]
  trigrams: Set<string>
  created_at: Date
  updated_at: Date
}

export interface SearchHistoryEntry {
  id: string
  query: string
  filters: SearchFilterSet
  timestamp: Date
  resultCount: number
}

export interface SearchStats {
  indexSize: number
  totalNotes: number
  lastIndexed: Date
  searchTime: number
  resultCount: number
}
