'use client'

import * as React from 'react'
import {
  Calendar,
  ChevronDown,
  Clock,
  Filter,
  Hash,
  Loader2,
  Search,
  X,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { useServerSearch } from '@/hooks/use-server-search'
import { useSearchHistory } from '@/hooks/use-search-history'
import { useTags } from '@/hooks/use-tags'
import type { SearchResult } from '@/lib/search/types'

export interface GlobalSearchProps {
  /** Initial search query */
  initialQuery?: string
  /** Callback when a note is selected */
  onNoteSelect?: (noteId: string) => void
  /** Whether to show search filters */
  showFilters?: boolean
  /** Whether to show search history */
  showHistory?: boolean
  /** Maximum number of results to show initially */
  maxResults?: number
  /** Custom CSS classes */
  className?: string
  /** Placeholder text */
  placeholder?: string
}

const GlobalSearch: React.FC<GlobalSearchProps> = ({
  initialQuery = '',
  onNoteSelect,
  showFilters = true,
  showHistory = true,
  maxResults = 50,
  className,
  placeholder = 'Search notes, content, and tags...',
}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [inputValue, setInputValue] = React.useState(initialQuery)
  const [showFiltersPanel, setShowFiltersPanel] = React.useState(false)

  const inputRef = React.useRef<HTMLInputElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)

  // Search functionality
  const {
    query,
    results,
    isSearching,
    hasSearched,
    error,
    pagination,
    stats,
    search,
    clearSearch,
    loadMore,
    options,
    updateOptions,
  } = useServerSearch({
    limit: maxResults,
    debounceMs: 300,
  })

  // Search history
  const {
    history: searchHistory,
    suggestions,
    getRecentSearches,
    getSearchSuggestions,
  } = useSearchHistory({ limit: 20 })

  // Tags for filtering
  const { data: availableTags = [] } = useTags()

  // Handle input changes
  const handleInputChange = (value: string) => {
    setInputValue(value)
    if (value.trim()) {
      search(value)
      setIsOpen(true)
    } else {
      clearSearch()
      setIsOpen(false)
    }
  }

  // Handle result selection
  const handleResultSelect = (result: SearchResult) => {
    onNoteSelect?.(result.note.id)
    setIsOpen(false)
    setInputValue('')
  }

  // Handle history/suggestion selection
  const handleHistorySelect = (searchQuery: string) => {
    setInputValue(searchQuery)
    search(searchQuery)
    setIsOpen(true)
  }

  // Clear current search
  const handleClear = () => {
    setInputValue('')
    clearSearch()
    setIsOpen(false)
    inputRef.current?.focus()
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false)
      inputRef.current?.blur()
    }
  }

  // Close on click outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Focus management
  const handleInputFocus = () => {
    setIsOpen(true)
  }

  // Get recent searches and suggestions for empty state
  const recentSearches = getRecentSearches(5)
  const searchSuggestions = getSearchSuggestions(inputValue, 3)

  const hasActiveFilters =
    (options.tags && options.tags.length > 0) ||
    options.dateFrom ||
    options.dateTo

  return (
    <div
      className={cn('relative w-full max-w-2xl', className)}
      ref={containerRef}
    >
      {/* Search Input */}
      <div className='relative'>
        <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
        <Input
          ref={inputRef}
          value={inputValue}
          onChange={(e) => handleInputChange(e.target.value)}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className='pl-10 pr-20'
        />

        {/* Input Actions */}
        <div className='absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-1'>
          {isSearching && (
            <Loader2 className='h-4 w-4 animate-spin text-muted-foreground' />
          )}

          {showFilters && (
            <Button
              variant='ghost'
              size='sm'
              onClick={() => setShowFiltersPanel(!showFiltersPanel)}
              className={cn(
                'h-7 w-7 p-0',
                (hasActiveFilters || showFiltersPanel) &&
                  'bg-accent text-accent-foreground'
              )}
            >
              <Filter className='h-3 w-3' />
            </Button>
          )}

          {inputValue && (
            <Button
              variant='ghost'
              size='sm'
              onClick={handleClear}
              className='h-7 w-7 p-0'
            >
              <X className='h-3 w-3' />
            </Button>
          )}
        </div>
      </div>

      {/* Filters Panel */}
      {showFiltersPanel && (
        <div className='absolute top-full z-50 mt-1 w-full rounded-md border bg-popover p-4 shadow-lg'>
          <div className='space-y-4'>
            <div>
              <label className='text-sm font-medium'>Tags</label>
              <div className='mt-1 flex flex-wrap gap-1'>
                {availableTags.slice(0, 10).map((tag) => (
                  <Button
                    key={tag.id}
                    variant={
                      options.tags?.includes(tag.name) ? 'default' : 'outline'
                    }
                    size='sm'
                    onClick={() => {
                      const currentTags = options.tags || []
                      const newTags = currentTags.includes(tag.name)
                        ? currentTags.filter((t) => t !== tag.name)
                        : [...currentTags, tag.name]
                      updateOptions({ tags: newTags })
                    }}
                    className='h-6 text-xs'
                  >
                    <Hash className='mr-1 h-2 w-2' />
                    {tag.name}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <label className='text-sm font-medium'>Sort By</label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant='outline'
                    size='sm'
                    className='mt-1 w-full justify-between'
                  >
                    {options.sortBy === 'relevance' && 'Relevance'}
                    {options.sortBy === 'created' && 'Date Created'}
                    {options.sortBy === 'updated' && 'Date Updated'}
                    {options.sortBy === 'title' && 'Title'}
                    <ChevronDown className='h-3 w-3' />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    onClick={() => updateOptions({ sortBy: 'relevance' })}
                  >
                    Relevance
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => updateOptions({ sortBy: 'updated' })}
                  >
                    Date Updated
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => updateOptions({ sortBy: 'created' })}
                  >
                    Date Created
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => updateOptions({ sortBy: 'title' })}
                  >
                    Title
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className='flex gap-2'>
              <Button
                variant='outline'
                size='sm'
                onClick={() => {
                  updateOptions({
                    tags: [],
                    dateFrom: undefined,
                    dateTo: undefined,
                    sortBy: 'relevance',
                  })
                }}
              >
                Clear Filters
              </Button>
              <Button
                variant='outline'
                size='sm'
                onClick={() => setShowFiltersPanel(false)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Search Results Dropdown */}
      {isOpen && (
        <div className='absolute top-full z-50 mt-1 w-full rounded-md border bg-popover shadow-lg'>
          <div className='max-h-96 overflow-y-auto'>
            {/* Error State */}
            {error && (
              <div className='p-4 text-sm text-destructive'>Error: {error}</div>
            )}

            {/* Loading State */}
            {isSearching && !results.length && (
              <div className='flex items-center gap-2 p-4 text-sm text-muted-foreground'>
                <Loader2 className='h-4 w-4 animate-spin' />
                Searching...
              </div>
            )}

            {/* Search Results */}
            {results.length > 0 && (
              <div>
                <div className='border-b px-4 py-2'>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm font-medium'>
                      {stats.totalResults} results
                    </span>
                    <span className='text-xs text-muted-foreground'>
                      {stats.searchTime}ms
                    </span>
                  </div>
                </div>

                <div className='space-y-1 p-1'>
                  {results.map((result) => (
                    <SearchResultItem
                      key={result.note.id}
                      result={result}
                      onClick={() => handleResultSelect(result)}
                      searchQuery={query}
                    />
                  ))}
                </div>

                {pagination.hasMore && (
                  <div className='border-t p-2'>
                    <Button
                      variant='ghost'
                      size='sm'
                      onClick={loadMore}
                      disabled={isSearching}
                      className='w-full'
                    >
                      {isSearching ? (
                        <>
                          <Loader2 className='mr-2 h-3 w-3 animate-spin' />
                          Loading...
                        </>
                      ) : (
                        `Load more (${pagination.total - results.length} remaining)`
                      )}
                    </Button>
                  </div>
                )}
              </div>
            )}

            {/* No Results */}
            {hasSearched && !isSearching && results.length === 0 && !error && (
              <div className='p-4 text-center text-sm text-muted-foreground'>
                <Search className='mx-auto mb-2 h-8 w-8 opacity-50' />
                <p>No notes found for &quot;{query}&quot;</p>
                <p className='mt-1 text-xs'>
                  Try adjusting your search terms or filters
                </p>
              </div>
            )}

            {/* Search History & Suggestions */}
            {!hasSearched && showHistory && (
              <div className='space-y-1 p-1'>
                {searchSuggestions.length > 0 && (
                  <>
                    <div className='px-3 py-2 text-xs font-medium text-muted-foreground'>
                      Suggestions
                    </div>
                    {searchSuggestions.map((suggestion) => (
                      <button
                        key={suggestion.query}
                        onClick={() => handleHistorySelect(suggestion.query)}
                        className='flex w-full items-center gap-2 rounded-sm px-3 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground'
                      >
                        <Search className='h-3 w-3 text-muted-foreground' />
                        <span>{suggestion.query}</span>
                        <span className='ml-auto text-xs text-muted-foreground'>
                          {suggestion.count} times
                        </span>
                      </button>
                    ))}
                  </>
                )}

                {recentSearches.length > 0 && (
                  <>
                    <div className='px-3 py-2 text-xs font-medium text-muted-foreground'>
                      Recent Searches
                    </div>
                    {recentSearches.map((entry) => (
                      <button
                        key={entry.id}
                        onClick={() => handleHistorySelect(entry.query)}
                        className='flex w-full items-center gap-2 rounded-sm px-3 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground'
                      >
                        <Clock className='h-3 w-3 text-muted-foreground' />
                        <span>{entry.query}</span>
                        <span className='ml-auto text-xs text-muted-foreground'>
                          {entry.results_count} results
                        </span>
                      </button>
                    ))}
                  </>
                )}

                {searchSuggestions.length === 0 &&
                  recentSearches.length === 0 && (
                    <div className='p-4 text-center text-sm text-muted-foreground'>
                      <Search className='mx-auto mb-2 h-8 w-8 opacity-50' />
                      <p>Start typing to search your notes</p>
                    </div>
                  )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

interface SearchResultItemProps {
  result: SearchResult
  onClick: () => void
  searchQuery: string
}

const SearchResultItem: React.FC<SearchResultItemProps> = ({
  result,
  onClick,
  searchQuery,
}) => {
  const { note, snippet, score } = result

  // Simple highlighting function
  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text

    const terms = query.toLowerCase().split(' ').filter(Boolean)
    let highlightedText = text

    terms.forEach((term) => {
      const regex = new RegExp(`(${term})`, 'gi')
      highlightedText = highlightedText.replace(
        regex,
        '<mark class="bg-yellow-200 dark:bg-yellow-800">$1</mark>'
      )
    })

    return highlightedText
  }

  const formattedDate = new Date(note.updated_at).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <button
      onClick={onClick}
      className='flex w-full items-start gap-3 rounded-sm px-3 py-2 text-left hover:bg-accent hover:text-accent-foreground'
    >
      <div className='flex-1 min-w-0'>
        <div
          className='font-medium truncate'
          dangerouslySetInnerHTML={{
            __html: highlightText(note.title, searchQuery),
          }}
        />

        {snippet && (
          <div
            className='mt-1 text-xs text-muted-foreground line-clamp-2'
            dangerouslySetInnerHTML={{
              __html: highlightText(snippet, searchQuery),
            }}
          />
        )}

        <div className='mt-2 flex items-center gap-2'>
          <span className='text-xs text-muted-foreground'>{formattedDate}</span>

          {note.tags.length > 0 && (
            <div className='flex items-center gap-1'>
              {note.tags.slice(0, 2).map((tag) => (
                <Badge key={tag} variant='secondary' className='h-4 text-xs'>
                  <Hash className='mr-1 h-2 w-2' />
                  {tag}
                </Badge>
              ))}
              {note.tags.length > 2 && (
                <span className='text-xs text-muted-foreground'>
                  +{note.tags.length - 2}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      <div className='flex flex-col items-end gap-1'>
        <div className='text-xs text-muted-foreground'>
          Score: {Math.round(score * 100)}%
        </div>
      </div>
    </button>
  )
}

export { GlobalSearch }
