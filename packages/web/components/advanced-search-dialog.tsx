'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import type { Note } from '@/types/note'
import { NoSearchResultsEmptyState } from '@/components/empty-states'
import { LoadingSpinner } from '@/components/loading-states'
import { useIsMobile } from '@/components/ui/use-mobile'
import {
  Bookmark,
  Clock,
  Edit2,
  History,
  Info,
  Search,
  Star,
  Trash2,
  X,
} from 'lucide-react'
import { SearchEngine, type SearchResult } from '@/utils/search-engine'
import { SearchHistory } from '@/utils/search-history'
import { useToast } from '@/hooks/use-toast'

interface AdvancedSearchDialogProps {
  isOpen: boolean
  onClose: () => void
  notes: Note[]
  onSelectNote: (id: string) => void
  onCreateNote?: () => void
  onDeleteNote?: (id: string) => Promise<boolean>
}

export function AdvancedSearchDialog({
  isOpen,
  onClose,
  notes,
  onSelectNote,
  onCreateNote,
  onDeleteNote,
}: AdvancedSearchDialogProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [showHelp, setShowHelp] = useState(false)
  const [activeTab, setActiveTab] = useState<'results' | 'history' | 'saved'>(
    'results'
  )
  const [editingSavedSearch, setEditingSavedSearch] = useState<string | null>(
    null
  )
  const [savedSearchName, setSavedSearchName] = useState('')
  const [noteToDelete, setNoteToDelete] = useState<Note | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)
  const { toast } = useToast()

  const isMobile = useIsMobile()

  // Initialize search engine
  const searchEngine = useMemo(() => new SearchEngine(notes), [notes])

  // Get search history and saved searches
  const searchHistory = SearchHistory.getHistory()
  const savedSearches = SearchHistory.getSavedSearches()
  const suggestions = SearchHistory.getSuggestions(searchQuery, 5)

  // Perform search
  const performSearch = useCallback(
    async (query: string) => {
      if (!query.trim()) {
        setSearchResults([])
        return
      }

      setIsSearching(true)
      try {
        const results = await searchEngine.search(query, {
          useServerSearch: false, // Can be toggled based on user preference
          limit: 50,
        })

        setSearchResults(results)

        // Add to history
        SearchHistory.addToHistory(query, results.length)
      } catch (error) {
        console.error('Search error:', error)
        toast({
          title: 'Search Error',
          description: 'Failed to perform search. Please try again.',
          variant: 'destructive',
        })
      } finally {
        setIsSearching(false)
      }
    },
    [searchEngine, toast]
  )

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      performSearch(searchQuery)
    }, 300)

    return () => clearTimeout(timer)
  }, [searchQuery, performSearch])

  const handleSelectNote = (id: string) => {
    onSelectNote(id)
    onClose()
  }

  const handleDeleteNote = async (note: Note) => {
    if (!onDeleteNote) return

    setNoteToDelete(note)
  }

  const confirmDelete = async () => {
    if (!noteToDelete || !onDeleteNote) return

    setIsDeleting(true)
    try {
      const success = await onDeleteNote(noteToDelete.id)
      if (success) {
        // Remove from search results immediately
        setSearchResults((prev) =>
          prev.filter((result) => result.note.id !== noteToDelete.id)
        )
        setNoteToDelete(null)
      }
    } catch (error) {
      console.error('Failed to delete note:', error)
    } finally {
      setIsDeleting(false)
    }
  }

  const cancelDelete = () => {
    setNoteToDelete(null)
  }

  const handleSaveSearch = () => {
    if (!searchQuery.trim()) return

    SearchHistory.saveSearch(searchQuery, savedSearchName || searchQuery)
    toast({
      title: 'Search Saved',
      description: 'Your search has been saved successfully.',
    })
    setSavedSearchName('')
  }

  const handleDeleteHistoryItem = (id: string) => {
    SearchHistory.removeFromHistory(id)
    toast({
      title: 'Removed',
      description: 'Search removed from history.',
    })
  }

  const handleDeleteSavedSearch = (id: string) => {
    SearchHistory.removeSavedSearch(id)
    toast({
      title: 'Removed',
      description: 'Saved search removed.',
    })
  }

  const handleUpdateSavedSearchName = (id: string) => {
    if (!savedSearchName.trim()) return

    SearchHistory.updateSavedSearchName(id, savedSearchName)
    setEditingSavedSearch(null)
    setSavedSearchName('')
    toast({
      title: 'Updated',
      description: 'Saved search name updated.',
    })
  }

  const highlightMatches = (
    text: string,
    matches: Array<{ indices: Array<[number, number]> }>
  ) => {
    if (!matches.length) return text

    const allIndices = matches.flatMap((match) => match.indices)
    allIndices.sort((a, b) => a[0] - b[0])

    const result = []
    let lastIndex = 0

    for (const [start, end] of allIndices) {
      if (start > lastIndex) {
        result.push(text.slice(lastIndex, start))
      }
      result.push(
        <mark
          key={`${start}-${end}`}
          className='bg-yellow-200 dark:bg-yellow-900'
        >
          {text.slice(start, end + 1)}
        </mark>
      )
      lastIndex = end + 1
    }

    if (lastIndex < text.length) {
      result.push(text.slice(lastIndex))
    }

    return result
  }

  const renderSearchHelp = () => (
    <Card className='p-4 mb-4'>
      <h4 className='font-medium mb-2 flex items-center gap-2'>
        <Info className='h-4 w-4' />
        Advanced Search Syntax
      </h4>
      <div className='space-y-2 text-sm text-muted-foreground'>
        <div className='grid grid-cols-2 gap-2'>
          <div>
            <code className='bg-muted px-1 rounded'>title:keyword</code>
            <p className='text-xs mt-1'>Search in title only</p>
          </div>
          <div>
            <code className='bg-muted px-1 rounded'>content:keyword</code>
            <p className='text-xs mt-1'>Search in content only</p>
          </div>
          <div>
            <code className='bg-muted px-1 rounded'>tag:name</code>
            <p className='text-xs mt-1'>Search by tag</p>
          </div>
          <div>
            <code className='bg-muted px-1 rounded'>
              &quot;exact phrase&quot;
            </code>
            <p className='text-xs mt-1'>Exact phrase match</p>
          </div>
          <div>
            <code className='bg-muted px-1 rounded'>term1 AND term2</code>
            <p className='text-xs mt-1'>Both terms must exist</p>
          </div>
          <div>
            <code className='bg-muted px-1 rounded'>term1 OR term2</code>
            <p className='text-xs mt-1'>Either term exists</p>
          </div>
          <div>
            <code className='bg-muted px-1 rounded'>NOT term</code>
            <p className='text-xs mt-1'>Exclude term</p>
          </div>
          <div>
            <code className='bg-muted px-1 rounded'>/regex/</code>
            <p className='text-xs mt-1'>Regular expression</p>
          </div>
        </div>
      </div>
    </Card>
  )

  const renderResults = () => (
    <div className='space-y-3'>
      {searchResults.length > 0 ? (
        searchResults.map((result) => (
          <Card
            key={result.note.id}
            className='cursor-pointer hover:shadow-md transition-shadow'
          >
            <CardContent className='p-4'>
              <div className='flex items-start justify-between mb-2'>
                <h3
                  className='font-medium flex-1'
                  onClick={() => handleSelectNote(result.note.id)}
                >
                  {highlightMatches(
                    result.note.title || 'Untitled',
                    result.matches.filter((m) => m.key === 'title')
                  )}
                </h3>
                <div className='flex items-center gap-2'>
                  {/* Mobile delete button */}
                  {isMobile && onDeleteNote && !result.note.isFolder && (
                    <Button
                      variant='ghost'
                      size='sm'
                      className='h-8 w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10'
                      onClick={(e) => {
                        e.stopPropagation()
                        handleDeleteNote(result.note)
                      }}
                    >
                      <Trash2 className='h-4 w-4' />
                    </Button>
                  )}
                  <div className='flex items-center gap-1 text-xs text-muted-foreground'>
                    <Clock className='h-3 w-3' />
                    {new Date(result.note.updatedAt).toLocaleDateString()}
                  </div>
                </div>
              </div>

              <div
                className='cursor-pointer'
                onClick={() => handleSelectNote(result.note.id)}
              >
                {result.note.content && (
                  <p className='text-sm text-muted-foreground line-clamp-2 mb-2'>
                    {highlightMatches(
                      `${result.note.content.slice(0, 150)}...`,
                      result.matches.filter((m) => m.key === 'content')
                    )}
                  </p>
                )}

                <div className='flex items-center justify-between'>
                  <div className='flex flex-wrap gap-1'>
                    {result.note.tags?.map((tag) => (
                      <Badge key={tag} variant='secondary' className='text-xs'>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className='flex items-center gap-2 text-xs text-muted-foreground'>
                    <Badge variant='outline' className='text-xs'>
                      {result.matchedFields.join(', ')}
                    </Badge>
                    <span>Score: {result.score.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      ) : searchQuery.trim() !== '' && !isSearching ? (
        <NoSearchResultsEmptyState
          query={searchQuery}
          onClearSearch={() => setSearchQuery('')}
          {...(onCreateNote && {
            onCreateNote: () => {
              onCreateNote()
              onClose()
            },
          })}
        />
      ) : (
        <div className='text-center py-8 text-muted-foreground'>
          <Search className='h-12 w-12 mx-auto mb-4 opacity-50' />
          <p>Start typing to search your notes...</p>
          <p className='text-xs mt-2'>
            Use advanced operators for precise results
          </p>
        </div>
      )}
    </div>
  )

  const renderHistory = () => (
    <div className='space-y-2'>
      {searchHistory.length > 0 ? (
        <>
          <div className='flex justify-between items-center mb-2'>
            <h4 className='text-sm font-medium'>Recent Searches</h4>
            <Button
              variant='ghost'
              size='sm'
              onClick={() => {
                SearchHistory.clearHistory()
                toast({
                  title: 'History Cleared',
                  description: 'Search history has been cleared.',
                })
              }}
            >
              Clear All
            </Button>
          </div>
          {searchHistory.map((item) => (
            <Card
              key={item.id}
              className='p-3 cursor-pointer hover:shadow-sm transition-shadow'
            >
              <div className='flex items-center justify-between'>
                <div
                  className='flex-1'
                  onClick={() => setSearchQuery(item.query)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setSearchQuery(item.query)
                    }
                  }}
                  role='button'
                  tabIndex={0}
                >
                  <p className='font-medium text-sm'>{item.query}</p>
                  <p className='text-xs text-muted-foreground'>
                    {item.resultCount} results •{' '}
                    {new Date(item.timestamp).toLocaleString()}
                  </p>
                </div>
                <Button
                  variant='ghost'
                  size='sm'
                  onClick={(e) => {
                    e.stopPropagation()
                    handleDeleteHistoryItem(item.id)
                  }}
                >
                  <X className='h-4 w-4' />
                </Button>
              </div>
            </Card>
          ))}
        </>
      ) : (
        <div className='text-center py-8 text-muted-foreground'>
          <History className='h-12 w-12 mx-auto mb-4 opacity-50' />
          <p>No search history yet</p>
        </div>
      )}
    </div>
  )

  const renderSaved = () => (
    <div className='space-y-2'>
      {savedSearches.length > 0 ? (
        savedSearches.map((item) => (
          <Card
            key={item.id}
            className='p-3 cursor-pointer hover:shadow-sm transition-shadow'
          >
            <div className='flex items-center justify-between'>
              <div
                className='flex-1'
                onClick={() => setSearchQuery(item.query)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSearchQuery(item.query)
                  }
                }}
                role='button'
                tabIndex={0}
              >
                {editingSavedSearch === item.id ? (
                  <div
                    className='flex items-center gap-2'
                    onClick={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    role='none'
                  >
                    <Input
                      value={savedSearchName}
                      onChange={(e) => setSavedSearchName(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleUpdateSavedSearchName(item.id)
                        }
                        if (e.key === 'Escape') {
                          setEditingSavedSearch(null)
                          setSavedSearchName('')
                        }
                      }}
                      className='h-8'
                      autoFocus
                    />
                    <Button
                      size='sm'
                      onClick={() => handleUpdateSavedSearchName(item.id)}
                    >
                      Save
                    </Button>
                  </div>
                ) : (
                  <>
                    <p className='font-medium text-sm'>
                      {item.name || item.query}
                    </p>
                    <p className='text-xs text-muted-foreground'>
                      {item.query}
                    </p>
                  </>
                )}
              </div>
              {!editingSavedSearch && (
                <div className='flex items-center gap-1'>
                  <Button
                    variant='ghost'
                    size='sm'
                    onClick={(e) => {
                      e.stopPropagation()
                      setEditingSavedSearch(item.id)
                      setSavedSearchName(item.name || item.query)
                    }}
                  >
                    <Edit2 className='h-4 w-4' />
                  </Button>
                  <Button
                    variant='ghost'
                    size='sm'
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDeleteSavedSearch(item.id)
                    }}
                  >
                    <X className='h-4 w-4' />
                  </Button>
                </div>
              )}
            </div>
          </Card>
        ))
      ) : (
        <div className='text-center py-8 text-muted-foreground'>
          <Bookmark className='h-12 w-12 mx-auto mb-4 opacity-50' />
          <p>No saved searches yet</p>
          <p className='text-xs mt-2'>
            Save frequently used searches for quick access
          </p>
        </div>
      )}
    </div>
  )

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='sm:max-w-[800px] max-h-[80vh] flex flex-col'>
        <DialogHeader>
          <DialogTitle className='flex items-center gap-2'>
            <Search className='h-5 w-5' />
            Advanced Search
          </DialogTitle>
        </DialogHeader>

        <div className='flex flex-col flex-1 overflow-hidden'>
          {/* Search Input with Actions */}
          <div className='space-y-3'>
            <div className='flex gap-2'>
              <div className='relative flex-1'>
                <Input
                  placeholder='Search with advanced operators...'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className='pr-10'
                  autoFocus
                />
                {isSearching && (
                  <LoadingSpinner className='absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4' />
                )}
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant='outline'
                      size='icon'
                      onClick={() => setShowHelp(!showHelp)}
                    >
                      <Info className='h-4 w-4' />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Toggle search help</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant='outline'
                      size='icon'
                      onClick={handleSaveSearch}
                      disabled={!searchQuery.trim()}
                    >
                      <Star className='h-4 w-4' />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Save this search</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            {/* Search Suggestions */}
            {suggestions.length > 0 && searchQuery && (
              <div className='flex flex-wrap gap-2'>
                <span className='text-xs text-muted-foreground'>
                  Suggestions:
                </span>
                {suggestions.map((suggestion) => (
                  <Badge
                    key={suggestion}
                    variant='outline'
                    className='cursor-pointer hover:bg-primary/10'
                    onClick={() => setSearchQuery(suggestion)}
                  >
                    {suggestion}
                  </Badge>
                ))}
              </div>
            )}

            {/* Search Help */}
            {showHelp && renderSearchHelp()}
          </div>

          <Separator className='my-4' />

          {/* Tabs for Results, History, and Saved */}
          <Tabs
            value={activeTab}
            onValueChange={(value) =>
              setActiveTab(value as 'results' | 'history' | 'saved')
            }
            className='flex-1 flex flex-col'
          >
            <TabsList className='grid w-full grid-cols-3'>
              <TabsTrigger value='results' className='flex items-center gap-2'>
                <Search className='h-4 w-4' />
                Results
                {searchResults.length > 0 && (
                  <Badge variant='secondary' className='ml-1'>
                    {searchResults.length}
                  </Badge>
                )}
              </TabsTrigger>
              <TabsTrigger value='history' className='flex items-center gap-2'>
                <History className='h-4 w-4' />
                History
              </TabsTrigger>
              <TabsTrigger value='saved' className='flex items-center gap-2'>
                <Bookmark className='h-4 w-4' />
                Saved
              </TabsTrigger>
            </TabsList>

            <ScrollArea className='flex-1 mt-4'>
              <TabsContent value='results' className='mt-0'>
                {renderResults()}
              </TabsContent>
              <TabsContent value='history' className='mt-0'>
                {renderHistory()}
              </TabsContent>
              <TabsContent value='saved' className='mt-0'>
                {renderSaved()}
              </TabsContent>
            </ScrollArea>
          </Tabs>
        </div>
      </DialogContent>

      {/* Delete confirmation dialog */}
      <AlertDialog
        open={!!noteToDelete}
        onOpenChange={() => setNoteToDelete(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Note</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete "
              {noteToDelete?.title || 'Untitled'}"? This action cannot be
              undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={cancelDelete} disabled={isDeleting}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              disabled={isDeleting}
              className='bg-destructive text-destructive-foreground hover:bg-destructive/90'
            >
              {isDeleting ? 'Deleting...' : 'Delete'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Dialog>
  )
}
