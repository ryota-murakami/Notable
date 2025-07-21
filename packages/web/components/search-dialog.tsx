'use client'

import { useState, useEffect, useMemo } from 'react'
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
import type { Note } from '@/types/note'
import { NoSearchResultsEmptyState } from '@/components/empty-states'
import { LoadingSpinner } from '@/components/loading-states'
import { Clock, FolderClosed, Search, Tag } from 'lucide-react'
import Fuse from 'fuse.js'

interface SearchResult {
  note: Note
  score: number
  matches: Array<{
    key: string
    value: string
    indices: Array<[number, number]>
  }>
}

interface SearchFilters {
  tags: string[]
  dateRange: { start: Date | null; end: Date | null }
  folders: string[]
}

interface SearchDialogProps {
  isOpen: boolean
  onClose: () => void
  notes: Note[]
  onSelectNote: (id: string) => void
  onCreateNote?: () => void
}

export function SearchDialog({
  isOpen,
  onClose,
  notes,
  onSelectNote,
  onCreateNote,
}: SearchDialogProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [filters, setFilters] = useState<SearchFilters>({
    tags: [],
    dateRange: { start: null, end: null },
    folders: [],
  })
  const [showFilters, setShowFilters] = useState(false)

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery)
    }, 300)

    return () => clearTimeout(timer)
  }, [searchQuery])

  // Configure Fuse.js for fuzzy searching
  const fuse = useMemo(() => {
    const options = {
      keys: [
        { name: 'title', weight: 0.6 },
        { name: 'content', weight: 0.3 },
        { name: 'tags', weight: 0.1 },
      ],
      threshold: 0.4,
      includeScore: true,
      includeMatches: true,
      minMatchCharLength: 2,
      findAllMatches: true,
    }

    return new Fuse(
      notes.filter((note) => !note.isFolder),
      options,
    )
  }, [notes])

  // Get all unique tags from notes
  const allTags = useMemo(() => {
    const tagSet = new Set<string>()
    notes.forEach((note) => {
      note.tags.forEach((tag) => tagSet.add(tag))
    })
    return Array.from(tagSet).sort()
  }, [notes])

  // Get all folders
  const allFolders = useMemo(() => {
    return notes
      .filter((note) => note.isFolder)
      .sort((a, b) => a.title.localeCompare(b.title))
  }, [notes])

  // Perform search with filters
  useEffect(() => {
    if (debouncedQuery.trim() === '') {
      setSearchResults([])
      setIsSearching(false)
      return
    }

    setIsSearching(true)

    const searchData = fuse.search(debouncedQuery)

    // Apply filters
    const filteredResults = searchData.filter((result) => {
      const note = result.item

      // Filter by tags
      if (filters.tags.length > 0) {
        const hasMatchingTag = filters.tags.some((tag) =>
          note.tags.includes(tag),
        )
        if (!hasMatchingTag) return false
      }

      // Filter by folders
      if (filters.folders.length > 0) {
        const hasMatchingFolder = filters.folders.some((folderId) => {
          let current: Note | undefined = note
          while (current?.parentId) {
            if (current.parentId === folderId) return true
            current = notes.find((n) => n.id === current!.parentId)
            if (!current) break
          }
          return false
        })
        if (!hasMatchingFolder) return false
      }

      // Filter by date range
      if (filters.dateRange.start || filters.dateRange.end) {
        const noteDate = new Date(note.updatedAt)
        if (filters.dateRange.start && noteDate < filters.dateRange.start)
          return false
        if (filters.dateRange.end && noteDate > filters.dateRange.end)
          return false
      }

      return true
    })

    // Convert to SearchResult format
    const results: SearchResult[] = filteredResults.map((result) => ({
      note: result.item,
      score: result.score || 0,
      matches: (result.matches || []).map((match) => ({
        key: match.key || '',
        value: match.value || '',
        indices: [...(match.indices || [])],
      })),
    }))

    setSearchResults(results)
    setIsSearching(false)
  }, [debouncedQuery, fuse, filters, notes])

  const handleSelectNote = (id: string) => {
    onSelectNote(id)
    onClose()
  }

  const handleClearFilters = () => {
    setFilters({
      tags: [],
      dateRange: { start: null, end: null },
      folders: [],
    })
  }

  const toggleTagFilter = (tag: string) => {
    setFilters((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag],
    }))
  }

  const toggleFolderFilter = (folderId: string) => {
    setFilters((prev) => ({
      ...prev,
      folders: prev.folders.includes(folderId)
        ? prev.folders.filter((f) => f !== folderId)
        : [...prev.folders, folderId],
    }))
  }

  const highlightMatches = (
    text: string,
    matches: Array<{ indices: Array<[number, number]> }>,
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
          className="bg-yellow-200 dark:bg-yellow-900"
        >
          {text.slice(start, end + 1)}
        </mark>,
      )
      lastIndex = end + 1
    }

    if (lastIndex < text.length) {
      result.push(text.slice(lastIndex))
    }

    return result
  }

  const activeFiltersCount =
    filters.tags.length +
    filters.folders.length +
    (filters.dateRange.start || filters.dateRange.end ? 1 : 0)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Search Notes
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Search Input */}
          <div className="space-y-3">
            <div className="relative">
              <Input
                placeholder="Search by title, content, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10"
                autoFocus
              />
              {isSearching && (
                <LoadingSpinner className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4" />
              )}
            </div>

            {/* Filter Toggle */}
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <Tag className="h-4 w-4" />
                Filters
                {activeFiltersCount > 0 && (
                  <Badge variant="secondary" className="ml-1">
                    {activeFiltersCount}
                  </Badge>
                )}
              </Button>
              {activeFiltersCount > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClearFilters}
                  className="text-muted-foreground"
                >
                  Clear filters
                </Button>
              )}
            </div>

            {/* Filters Panel */}
            {showFilters && (
              <Card className="p-4">
                <div className="space-y-4">
                  {/* Tags Filter */}
                  {allTags.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                        <Tag className="h-4 w-4" />
                        Tags
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {allTags.map((tag) => (
                          <Badge
                            key={tag}
                            variant={
                              filters.tags.includes(tag) ? 'default' : 'outline'
                            }
                            className="cursor-pointer hover:bg-primary/10"
                            onClick={() => toggleTagFilter(tag)}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Folders Filter */}
                  {allFolders.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                        <FolderClosed className="h-4 w-4" />
                        Folders
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {allFolders.map((folder) => (
                          <Badge
                            key={folder.id}
                            variant={
                              filters.folders.includes(folder.id)
                                ? 'default'
                                : 'outline'
                            }
                            className="cursor-pointer hover:bg-primary/10"
                            onClick={() => toggleFolderFilter(folder.id)}
                          >
                            {folder.title}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            )}
          </div>

          <Separator className="my-4" />

          {/* Search Results */}
          <ScrollArea className="flex-1">
            <div className="space-y-3">
              {searchResults.length > 0 ? (
                searchResults.map((result) => (
                  <Card
                    key={result.note.id}
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleSelectNote(result.note.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-medium">
                          {highlightMatches(
                            result.note.title || 'Untitled',
                            result.matches.filter((m) => m.key === 'title'),
                          )}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {new Date(result.note.updatedAt).toLocaleDateString()}
                        </div>
                      </div>

                      {result.note.content && (
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                          {highlightMatches(
                            result.note.content.slice(0, 150) + '...',
                            result.matches.filter((m) => m.key === 'content'),
                          )}
                        </p>
                      )}

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {result.note.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Score: {(1 - result.score).toFixed(2)}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : debouncedQuery.trim() !== '' ? (
                <NoSearchResultsEmptyState
                  query={debouncedQuery}
                  onClearSearch={() => setSearchQuery('')}
                  onCreateNote={
                    onCreateNote
                      ? () => {
                          onCreateNote()
                          onClose()
                        }
                      : undefined
                  }
                />
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Start typing to search your notes...</p>
                </div>
              )}
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  )
}
