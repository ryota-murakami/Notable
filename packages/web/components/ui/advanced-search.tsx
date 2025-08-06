'use client'

import * as React from 'react'
import {
  Calendar,
  ChevronRight,
  Clock,
  Filter,
  Loader2,
  Search,
  Star,
  Tag,
  X,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { Calendar as CalendarComponent } from '@/components/ui/calendar'
import { format } from 'date-fns'
import {
  useAdvancedSearch,
  useSavedSearches,
  useSearchHistory,
  useSearchKeyboardShortcuts,
  useSearchSuggestions,
  useTrackSearchClick,
} from '@/hooks/use-advanced-search'
import { useTags } from '@/hooks/use-tags'
import type {
  SearchFilters,
  SearchHistoryItem,
  SearchResult,
} from '@/types/search'

interface AdvancedSearchProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSelectResult?: (result: SearchResult) => void
}

export function AdvancedSearch({
  open,
  onOpenChange,
  onSelectResult,
}: AdvancedSearchProps) {
  const [showFilters, setShowFilters] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement>(null)

  const {
    query,
    setQuery,
    filters,
    setFilters,
    results,
    totalCount,
    hasMore,
    isLoading,
    loadMore,
  } = useAdvancedSearch()

  const { data: suggestions } = useSearchSuggestions(query)
  const { data: searchHistory } = useSearchHistory()
  const { data: savedSearches } = useSavedSearches()
  const { data: tags } = useTags()
  const trackClick = useTrackSearchClick(query)

  // Focus input when dialog opens
  React.useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open])

  // Handle result selection
  const handleSelectResult = async (result: SearchResult, index: number) => {
    await trackClick(result.id, index)
    onSelectResult?.(result)
    onOpenChange(false)
  }

  // Handle filter changes
  const toggleTagFilter = (tagId: string) => {
    setFilters((prev) => ({
      ...prev,
      tags: prev.tags?.includes(tagId)
        ? prev.tags.filter((t) => t !== tagId)
        : [...(prev.tags || []), tagId],
    }))
  }

  const setDateFilter = (type: 'from' | 'to', date: Date | undefined) => {
    setFilters((prev) => ({
      ...prev,
      [type === 'from' ? 'dateFrom' : 'dateTo']: date?.toISOString(),
    }))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-w-3xl max-h-[80vh] p-0'>
        <div className='flex flex-col h-full'>
          {/* Search Header */}
          <div className='p-4 border-b'>
            <div className='flex items-center gap-2'>
              <Search className='h-4 w-4 text-muted-foreground' />
              <Input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='Search notes...'
                className='flex-1 border-0 focus-visible:ring-0 px-0'
                data-testid='search-input'
              />
              <Button
                variant='ghost'
                size='icon'
                onClick={() => setShowFilters(!showFilters)}
                className={cn(showFilters && 'bg-accent')}
              >
                <Filter className='h-4 w-4' />
              </Button>
              <Button
                variant='ghost'
                size='icon'
                onClick={() => onOpenChange(false)}
              >
                <X className='h-4 w-4' />
              </Button>
            </div>

            {/* Filters */}
            {showFilters && (
              <div className='mt-4 flex flex-wrap gap-2'>
                {/* Tag Filter */}
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant='outline' size='sm'>
                      <Tag className='h-3 w-3 mr-1' />
                      Tags
                      {filters.tags && filters.tags.length > 0 && (
                        <Badge className='ml-1' variant='secondary'>
                          {filters.tags.length}
                        </Badge>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className='w-64 p-0'>
                    <Command>
                      <CommandInput placeholder='Search tags...' />
                      <CommandList>
                        <CommandEmpty>No tags found.</CommandEmpty>
                        <CommandGroup>
                          {tags?.map((tag) => (
                            <CommandItem
                              key={tag.id}
                              onSelect={() => toggleTagFilter(tag.id)}
                            >
                              <div className='flex items-center gap-2 flex-1'>
                                <div
                                  className='w-3 h-3 rounded-full'
                                  style={{ backgroundColor: tag.color }}
                                />
                                <span>{tag.name}</span>
                              </div>
                              {filters.tags?.includes(tag.id) && (
                                <Badge variant='secondary' className='h-5'>
                                  ✓
                                </Badge>
                              )}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>

                {/* Date Filters */}
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant='outline' size='sm'>
                      <Calendar className='h-3 w-3 mr-1' />
                      Date Range
                      {(filters.dateFrom || filters.dateTo) && (
                        <Badge className='ml-1' variant='secondary'>
                          Set
                        </Badge>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className='w-auto p-0' align='start'>
                    <div className='p-4 space-y-4'>
                      <div>
                        <label className='text-sm font-medium'>From</label>
                        <CalendarComponent
                          mode='single'
                          selected={
                            filters.dateFrom
                              ? new Date(filters.dateFrom)
                              : undefined
                          }
                          onSelect={(date: Date | undefined) =>
                            setDateFilter('from', date)
                          }
                          initialFocus
                        />
                      </div>
                      <Separator />
                      <div>
                        <label className='text-sm font-medium'>To</label>
                        <CalendarComponent
                          mode='single'
                          selected={
                            filters.dateTo
                              ? new Date(filters.dateTo)
                              : undefined
                          }
                          onSelect={(date: Date | undefined) =>
                            setDateFilter('to', date)
                          }
                        />
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>

                {/* Clear Filters */}
                {(filters.tags?.length ||
                  filters.dateFrom ||
                  filters.dateTo) && (
                  <Button
                    variant='ghost'
                    size='sm'
                    onClick={() => setFilters({})}
                  >
                    Clear filters
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Search Results */}
          <ScrollArea className='flex-1'>
            <div className='p-4'>
              {/* Loading State */}
              {isLoading && (
                <div className='flex items-center justify-center py-8'>
                  <Loader2 className='h-6 w-6 animate-spin text-muted-foreground' />
                </div>
              )}

              {/* Results */}
              {!isLoading && results.length > 0 && (
                <div className='space-y-4' data-testid='search-results'>
                  <div className='text-sm text-muted-foreground'>
                    {totalCount} results found
                  </div>
                  {results.map((result: SearchResult, index: number) => (
                    <SearchResultItem
                      key={result.id}
                      result={result}
                      onClick={() => handleSelectResult(result, index)}
                    />
                  ))}
                  {hasMore && (
                    <Button
                      variant='outline'
                      className='w-full'
                      onClick={loadMore}
                    >
                      Load more results
                    </Button>
                  )}
                </div>
              )}

              {/* Empty State */}
              {!isLoading && query && results.length === 0 && (
                <div className='text-center py-8'>
                  <p className='text-muted-foreground'>
                    No results found for &quot;{query}&quot;
                  </p>
                  <p className='text-sm text-muted-foreground mt-2'>
                    Try adjusting your search terms or filters
                  </p>
                </div>
              )}

              {/* Initial State - Show suggestions, history, saved */}
              {!query && !isLoading && (
                <div className='space-y-6'>
                  {/* Saved Searches */}
                  {savedSearches && savedSearches.length > 0 && (
                    <div>
                      <h3 className='text-sm font-medium mb-2 flex items-center gap-2'>
                        <Star className='h-4 w-4' />
                        Saved Searches
                      </h3>
                      <div className='space-y-1'>
                        {savedSearches.map((saved) => (
                          <button
                            key={saved.id}
                            className='w-full text-left p-2 hover:bg-accent rounded-md flex items-center justify-between group'
                            onClick={() => {
                              setQuery(saved.query)
                              setFilters(saved.filters)
                            }}
                          >
                            <span className='text-sm'>{saved.name}</span>
                            {saved.shortcut_key && (
                              <kbd className='text-xs bg-muted px-1 rounded'>
                                {saved.shortcut_key}
                              </kbd>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Recent Searches */}
                  {searchHistory && searchHistory.length > 0 && (
                    <div>
                      <h3 className='text-sm font-medium mb-2 flex items-center gap-2'>
                        <Clock className='h-4 w-4' />
                        Recent Searches
                      </h3>
                      <div className='space-y-1'>
                        {searchHistory
                          .slice(0, 5)
                          .map((item: SearchHistoryItem) => (
                            <button
                              key={item.id}
                              className='w-full text-left p-2 hover:bg-accent rounded-md'
                              onClick={() => {
                                setQuery(item.query)
                                setFilters(item.filters)
                              }}
                            >
                              <span className='text-sm'>{item.query}</span>
                            </button>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  )
}

// Search Result Item Component
function SearchResultItem({
  result,
  onClick,
}: {
  result: SearchResult
  onClick: () => void
}) {
  return (
    <button
      className='w-full text-left p-4 hover:bg-accent rounded-lg border transition-colors'
      onClick={onClick}
    >
      <div className='space-y-2'>
        <div className='flex items-start justify-between'>
          <h3
            className='font-medium line-clamp-1'
            dangerouslySetInnerHTML={{ __html: result.headline_title }}
          />
          <ChevronRight className='h-4 w-4 text-muted-foreground shrink-0' />
        </div>

        <p
          className='text-sm text-muted-foreground line-clamp-2'
          dangerouslySetInnerHTML={{ __html: result.headline_content }}
        />

        <div className='flex items-center gap-2 flex-wrap'>
          {result.tags.map((tag) => (
            <Badge key={tag.id} variant='secondary' className='h-5 text-xs'>
              {tag.name}
            </Badge>
          ))}
          <span className='text-xs text-muted-foreground'>
            {format(new Date(result.updated_at), 'MMM d, yyyy')}
          </span>
        </div>
      </div>
    </button>
  )
}

// Global Search Trigger Component
export function GlobalSearchTrigger() {
  const [open, setOpen] = React.useState(false)

  useSearchKeyboardShortcuts(
    () => setOpen(true),
    () => setOpen(false)
  )

  return (
    <>
      <Button
        variant='outline'
        className='relative w-full justify-start text-sm text-muted-foreground'
        onClick={() => setOpen(true)}
        data-testid='search-button'
      >
        <Search className='mr-2 h-4 w-4' />
        Search...
        <kbd className='pointer-events-none absolute right-2 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex'>
          <span className='text-xs'>⌘</span>⇧F
        </kbd>
      </Button>

      <AdvancedSearch
        open={open}
        onOpenChange={setOpen}
        onSelectResult={(result) => {
          // Navigate to the selected note
          window.location.href = `/notes/${result.id}`
        }}
      />
    </>
  )
}
