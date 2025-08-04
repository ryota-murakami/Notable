'use client'

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  ArrowRight,
  BookOpen,
  Brain,
  Calendar,
  ChevronDown,
  ChevronUp,
  Clock,
  ExternalLink,
  Eye,
  Hash,
  Lightbulb,
  Link2,
  Plus,
  Search,
  Sparkles,
  Star,
  Tag,
  TrendingUp,
  Zap,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { toast } from '@/hooks/use-toast'
import type { SearchSuggestion } from '@/types/search'

interface SmartSuggestion {
  id: string
  type: 'link' | 'search' | 'template' | 'tag' | 'similar' | 'trending'
  title: string
  description: string
  confidence: number
  reason: string
  actionText: string
  metadata?: {
    noteId?: string
    similarity?: number
    tags?: string[]
    lastUsed?: string
    popularity?: number
    searchQuery?: string
  }
}

interface SmartNoteSuggestionsProps {
  noteId?: string
  noteTitle?: string
  noteContent?: string
  tags?: string[]
  className?: string
  isCollapsed?: boolean
  onNoteSelect?: (noteId: string) => void
  onTagSelect?: (tag: string) => void
  onSearchQuery?: (query: string) => void
  onCreateLink?: (targetNoteId: string, linkText: string) => void
}

export function SmartNoteSuggestions({
  noteId,
  noteTitle = '',
  noteContent = '',
  tags = [],
  className,
  isCollapsed = false,
  onNoteSelect,
  onTagSelect,
  onSearchQuery,
  onCreateLink,
}: SmartNoteSuggestionsProps) {
  const [collapsed, setCollapsed] = useState(isCollapsed)
  const [activeTab, setActiveTab] = useState<'smart' | 'search' | 'related'>(
    'smart'
  )
  const queryClient = useQueryClient()

  // Fetch smart linking suggestions
  const { data: linkingSuggestions = [], isLoading: isLoadingLinks } = useQuery(
    {
      queryKey: ['smart-linking', noteId, noteTitle, noteContent],
      queryFn: async () => {
        if (!noteId || (!noteTitle.trim() && !noteContent.trim())) return []

        const response = await fetch('/api/ai/auto-linking', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            noteId,
            content: noteContent,
            title: noteTitle,
            limit: 5,
            similarityThreshold: 0.7,
          }),
        })

        if (!response.ok) return []
        const result = await response.json()
        return result.success ? result.data.suggestions || [] : []
      },
      enabled: !!noteId && (!!noteTitle.trim() || !!noteContent.trim()),
      staleTime: 5 * 60 * 1000, // 5 minutes
    }
  )

  // Fetch search suggestions
  const { data: searchSuggestions = [], isLoading: isLoadingSearch } = useQuery(
    {
      queryKey: ['search-suggestions', noteTitle, noteContent],
      queryFn: async () => {
        const searchTerms = `${noteTitle} ${noteContent}`.trim()
        if (!searchTerms || searchTerms.length < 3) return []

        const response = await fetch('/api/ai/search-suggestions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: searchTerms.slice(0, 100), // Limit query length
            context: 'note-editing',
          }),
        })

        if (!response.ok) return []
        const result = await response.json()
        return result.success ? result.data.suggestions || [] : []
      },
      enabled: (noteTitle.trim() + noteContent.trim()).length >= 3,
      staleTime: 10 * 60 * 1000, // 10 minutes
    }
  )

  // Fetch related notes by tags
  const { data: relatedNotes = [], isLoading: isLoadingRelated } = useQuery({
    queryKey: ['related-notes-by-tags', tags, noteId],
    queryFn: async () => {
      if (tags.length === 0 || !noteId) return []

      const response = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: '',
          filters: { tags: tags.slice(0, 3) }, // Limit to 3 tags
          limit: 5,
        }),
      })

      if (!response.ok) return []
      const result = await response.json()
      return result.success
        ? result.data.results?.filter((note: any) => note.id !== noteId) || []
        : []
    },
    enabled: tags.length > 0 && !!noteId,
    staleTime: 5 * 60 * 1000,
  })

  // Generate consolidated smart suggestions
  const smartSuggestions = useMemo((): SmartSuggestion[] => {
    const suggestions: SmartSuggestion[] = []

    // Add linking suggestions
    linkingSuggestions.slice(0, 3).forEach((link: any) => {
      suggestions.push({
        id: `link-${link.noteId}`,
        type: 'link',
        title: link.title,
        description: link.connectionReason,
        confidence: link.similarity,
        reason: `${Math.round(link.similarity * 100)}% similarity match`,
        actionText: 'Link',
        metadata: {
          noteId: link.noteId,
          similarity: link.similarity,
          tags: link.tags,
        },
      })
    })

    // Add search suggestions
    searchSuggestions.slice(0, 2).forEach((search: any) => {
      suggestions.push({
        id: `search-${search.suggestion}`,
        type: 'search',
        title: search.suggestion,
        description: search.reason,
        confidence: search.confidence,
        reason: `Recommended search term`,
        actionText: 'Search',
        metadata: {
          searchQuery: search.suggestion,
        },
      })
    })

    // Add related notes by tags
    relatedNotes.slice(0, 2).forEach((note: any) => {
      suggestions.push({
        id: `related-${note.id}`,
        type: 'similar',
        title: note.title,
        description: `Related by ${note.tags?.map((t: any) => t.name).join(', ')}`,
        confidence: 0.8,
        reason: 'Shares common tags',
        actionText: 'View',
        metadata: {
          noteId: note.id,
          tags: note.tags?.map((t: any) => t.name) || [],
        },
      })
    })

    // Add tag suggestions (from existing tags in related notes)
    const tagCounts = new Map<string, number>()
    relatedNotes.forEach((note: any) => {
      note.tags?.forEach((tag: any) => {
        if (!tags.includes(tag.name)) {
          tagCounts.set(tag.name, (tagCounts.get(tag.name) || 0) + 1)
        }
      })
    })

    Array.from(tagCounts.entries())
      .sort(([, a], [, b]) => b - a)
      .slice(0, 2)
      .forEach(([tagName, count]) => {
        suggestions.push({
          id: `tag-${tagName}`,
          type: 'tag',
          title: `#${tagName}`,
          description: `Used in ${count} related note${count > 1 ? 's' : ''}`,
          confidence: Math.min(count / 5, 1),
          reason: 'Commonly used in similar notes',
          actionText: 'Add Tag',
          metadata: { tags: [tagName] },
        })
      })

    return suggestions.sort((a, b) => b.confidence - a.confidence)
  }, [linkingSuggestions, searchSuggestions, relatedNotes, tags, noteId])

  // Handle suggestion actions
  const handleSuggestionAction = useCallback(
    (suggestion: SmartSuggestion) => {
      switch (suggestion.type) {
        case 'link':
          if (suggestion.metadata?.noteId) {
            if (onCreateLink) {
              onCreateLink(suggestion.metadata.noteId, suggestion.title)
              toast({
                title: 'Link created',
                description: `Added link to "${suggestion.title}"`,
              })
            } else if (onNoteSelect) {
              onNoteSelect(suggestion.metadata.noteId)
            }
          }
          break
        case 'search':
          if (suggestion.metadata?.searchQuery && onSearchQuery) {
            onSearchQuery(suggestion.metadata.searchQuery)
          }
          break
        case 'similar':
          if (suggestion.metadata?.noteId && onNoteSelect) {
            onNoteSelect(suggestion.metadata.noteId)
          }
          break
        case 'tag':
          if (suggestion.metadata?.tags?.[0] && onTagSelect) {
            onTagSelect(suggestion.metadata.tags[0])
          }
          break
      }
    },
    [onCreateLink, onNoteSelect, onSearchQuery, onTagSelect]
  )

  const getSuggestionIcon = (type: string) => {
    switch (type) {
      case 'link':
        return <Link2 className='h-4 w-4' />
      case 'search':
        return <Search className='h-4 w-4' />
      case 'similar':
        return <BookOpen className='h-4 w-4' />
      case 'tag':
        return <Hash className='h-4 w-4' />
      case 'template':
        return <Lightbulb className='h-4 w-4' />
      case 'trending':
        return <TrendingUp className='h-4 w-4' />
      default:
        return <Sparkles className='h-4 w-4' />
    }
  }

  const getSuggestionColor = (type: string) => {
    switch (type) {
      case 'link':
        return 'text-blue-500 bg-blue-50 dark:bg-blue-950'
      case 'search':
        return 'text-green-500 bg-green-50 dark:bg-green-950'
      case 'similar':
        return 'text-purple-500 bg-purple-50 dark:bg-purple-950'
      case 'tag':
        return 'text-orange-500 bg-orange-50 dark:bg-orange-950'
      case 'template':
        return 'text-yellow-500 bg-yellow-50 dark:bg-yellow-950'
      case 'trending':
        return 'text-red-500 bg-red-50 dark:bg-red-950'
      default:
        return 'text-gray-500 bg-gray-50 dark:bg-gray-950'
    }
  }

  const isLoading = isLoadingLinks || isLoadingSearch || isLoadingRelated
  const hasAnySuggestions =
    smartSuggestions.length > 0 ||
    linkingSuggestions.length > 0 ||
    searchSuggestions.length > 0

  if (!hasAnySuggestions && !isLoading) {
    return null
  }

  return (
    <TooltipProvider>
      <Card
        className={cn('w-80', className)}
        data-testid='smart-suggestions-panel'
      >
        <CardHeader className='pb-3'>
          <div className='flex items-center justify-between'>
            <CardTitle className='flex items-center gap-2 text-sm'>
              <Brain className='h-4 w-4 text-purple-500' />
              Smart Suggestions
              {isLoading && (
                <div className='animate-spin rounded-full h-3 w-3 border-b-2 border-purple-500' />
              )}
            </CardTitle>
            <Button
              variant='ghost'
              size='sm'
              onClick={() => setCollapsed(!collapsed)}
              className='h-6 w-6 p-0'
            >
              {collapsed ? (
                <ChevronDown className='h-3 w-3' />
              ) : (
                <ChevronUp className='h-3 w-3' />
              )}
            </Button>
          </div>
        </CardHeader>

        {!collapsed && (
          <CardContent className='pt-0'>
            <Tabs
              value={activeTab}
              onValueChange={(value) => setActiveTab(value as any)}
            >
              <TabsList className='grid w-full grid-cols-3 mb-3'>
                <TabsTrigger value='smart' className='text-xs'>
                  Smart
                  {smartSuggestions.length > 0 && (
                    <Badge variant='secondary' className='ml-1 h-4 text-xs'>
                      {smartSuggestions.length}
                    </Badge>
                  )}
                </TabsTrigger>
                <TabsTrigger value='search' className='text-xs'>
                  Search
                  {searchSuggestions.length > 0 && (
                    <Badge variant='secondary' className='ml-1 h-4 text-xs'>
                      {searchSuggestions.length}
                    </Badge>
                  )}
                </TabsTrigger>
                <TabsTrigger value='related' className='text-xs'>
                  Related
                  {linkingSuggestions.length + relatedNotes.length > 0 && (
                    <Badge variant='secondary' className='ml-1 h-4 text-xs'>
                      {linkingSuggestions.length + relatedNotes.length}
                    </Badge>
                  )}
                </TabsTrigger>
              </TabsList>

              <TabsContent value='smart' className='mt-0'>
                <ScrollArea className='h-64'>
                  {smartSuggestions.length === 0 ? (
                    <div className='text-center py-8'>
                      <Brain className='h-8 w-8 mx-auto mb-2 text-muted-foreground opacity-50' />
                      <p className='text-sm text-muted-foreground'>
                        {isLoading
                          ? 'Analyzing content...'
                          : 'Start writing to get smart suggestions'}
                      </p>
                    </div>
                  ) : (
                    <div className='space-y-3'>
                      {smartSuggestions.map((suggestion) => (
                        <div
                          key={suggestion.id}
                          className='p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors'
                          data-testid={`suggestion-${suggestion.type}`}
                        >
                          <div className='flex items-start justify-between mb-2'>
                            <div className='flex items-center gap-2'>
                              <div
                                className={cn(
                                  'p-1 rounded',
                                  getSuggestionColor(suggestion.type)
                                )}
                              >
                                {getSuggestionIcon(suggestion.type)}
                              </div>
                              <div className='flex-1 min-w-0'>
                                <h4 className='font-medium text-sm truncate'>
                                  {suggestion.title}
                                </h4>
                                <p className='text-xs text-muted-foreground'>
                                  {suggestion.reason}
                                </p>
                              </div>
                            </div>
                            <Badge variant='secondary' className='text-xs'>
                              {Math.round(suggestion.confidence * 100)}%
                            </Badge>
                          </div>

                          <p className='text-xs text-muted-foreground mb-3 line-clamp-2'>
                            {suggestion.description}
                          </p>

                          <div className='flex items-center justify-between'>
                            <div className='flex flex-wrap gap-1'>
                              {suggestion.metadata?.tags
                                ?.slice(0, 2)
                                .map((tag) => (
                                  <Badge
                                    key={tag}
                                    variant='outline'
                                    className='text-xs h-4'
                                  >
                                    <Hash className='h-2 w-2 mr-1' />
                                    {tag}
                                  </Badge>
                                ))}
                            </div>
                            <Button
                              variant='secondary'
                              size='sm'
                              onClick={() => handleSuggestionAction(suggestion)}
                              className='text-xs h-6'
                            >
                              {suggestion.actionText}
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </ScrollArea>
              </TabsContent>

              <TabsContent value='search' className='mt-0'>
                <ScrollArea className='h-64'>
                  {searchSuggestions.length === 0 ? (
                    <div className='text-center py-8'>
                      <Search className='h-8 w-8 mx-auto mb-2 text-muted-foreground opacity-50' />
                      <p className='text-sm text-muted-foreground'>
                        {isLoading
                          ? 'Generating search ideas...'
                          : 'Add content to get search suggestions'}
                      </p>
                    </div>
                  ) : (
                    <div className='space-y-2'>
                      {searchSuggestions.map(
                        (suggestion: any, index: number) => (
                          <div
                            key={index}
                            className='p-2 rounded border hover:bg-accent/50 transition-colors cursor-pointer'
                            onClick={() =>
                              onSearchQuery?.(suggestion.suggestion)
                            }
                            data-testid={`search-suggestion-${index}`}
                          >
                            <div className='flex items-center justify-between'>
                              <div className='flex items-center gap-2'>
                                <Search className='h-3 w-3 text-green-500' />
                                <span className='text-sm font-medium'>
                                  {suggestion.suggestion}
                                </span>
                              </div>
                              <Badge variant='secondary' className='text-xs'>
                                {Math.round(suggestion.confidence * 100)}%
                              </Badge>
                            </div>
                            <p className='text-xs text-muted-foreground mt-1 ml-5'>
                              {suggestion.reason}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  )}
                </ScrollArea>
              </TabsContent>

              <TabsContent value='related' className='mt-0'>
                <ScrollArea className='h-64'>
                  {linkingSuggestions.length === 0 &&
                  relatedNotes.length === 0 ? (
                    <div className='text-center py-8'>
                      <BookOpen className='h-8 w-8 mx-auto mb-2 text-muted-foreground opacity-50' />
                      <p className='text-sm text-muted-foreground'>
                        {isLoading
                          ? 'Finding related content...'
                          : 'No related notes found yet'}
                      </p>
                    </div>
                  ) : (
                    <div className='space-y-3'>
                      {linkingSuggestions.map((link: any) => (
                        <div
                          key={link.noteId}
                          className='p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors'
                        >
                          <div className='flex items-start justify-between mb-2'>
                            <div className='flex-1 min-w-0'>
                              <h4 className='font-medium text-sm truncate'>
                                {link.title}
                              </h4>
                              <p className='text-xs text-muted-foreground'>
                                {link.connectionReason}
                              </p>
                            </div>
                            <Badge variant='secondary' className='text-xs'>
                              {Math.round(link.similarity * 100)}%
                            </Badge>
                          </div>

                          <div className='flex items-center justify-between'>
                            <div className='flex flex-wrap gap-1'>
                              {link.tags?.slice(0, 2).map((tag: string) => (
                                <Badge
                                  key={tag}
                                  variant='outline'
                                  className='text-xs h-4'
                                >
                                  <Hash className='h-2 w-2 mr-1' />
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <div className='flex gap-1'>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant='ghost'
                                    size='sm'
                                    onClick={() => onNoteSelect?.(link.noteId)}
                                    className='h-6 w-6 p-0'
                                  >
                                    <Eye className='h-3 w-3' />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>View note</TooltipContent>
                              </Tooltip>
                              {onCreateLink && (
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button
                                      variant='ghost'
                                      size='sm'
                                      onClick={() =>
                                        onCreateLink(link.noteId, link.title)
                                      }
                                      className='h-6 w-6 p-0'
                                    >
                                      <Plus className='h-3 w-3' />
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>Insert link</TooltipContent>
                                </Tooltip>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}

                      {relatedNotes.map((note: any) => (
                        <div
                          key={note.id}
                          className='p-2 rounded border hover:bg-accent/50 transition-colors cursor-pointer'
                          onClick={() => onNoteSelect?.(note.id)}
                        >
                          <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                              <BookOpen className='h-3 w-3 text-purple-500' />
                              <span className='text-sm font-medium truncate'>
                                {note.title}
                              </span>
                            </div>
                            <div className='flex gap-1'>
                              {note.tags?.slice(0, 2).map((tag: any) => (
                                <Badge
                                  key={tag.name}
                                  variant='outline'
                                  className='text-xs h-4'
                                >
                                  {tag.name}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </CardContent>
        )}
      </Card>
    </TooltipProvider>
  )
}

export default SmartNoteSuggestions
