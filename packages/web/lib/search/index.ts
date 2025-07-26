// Advanced Search & Discovery System for Notable

export {
  SearchEngine,
  type SearchOptions,
  type SearchResult,
} from './search-engine'
export { SearchFilters, type FilterOptions } from './search-filters'
export { SearchHighlighter } from './search-highlighter'
// Note: SearchIndexer is not exported to avoid SSR issues with globalSearchIndexer
// Import directly from './search-indexer' if needed on client-side only
export { useSearch } from './use-search'
export { useSearchHistory } from './use-search-history'
export {
  type SearchQuery,
  type SearchFilterSet,
  type SearchableNote,
  type SearchMatch,
  type SearchIndex,
  type SearchHistoryEntry,
  type SearchStats,
} from './types'
