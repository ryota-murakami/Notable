'use client'

import React, { useCallback, useEffect, useState } from 'react'
import {
  ArrowRight,
  Brain,
  Clock,
  Eye,
  Hash,
  Link,
  Loader2,
  Plus,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/design-system/components/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { toast } from '@/hooks/use-toast'

interface SmartLinkingSuggestion {
  noteId: string
  title: string
  similarity: number
  connectionReason: string
  connectionType: 'topical' | 'conceptual' | 'methodological' | 'semantic'
  relevantSnippet: string
  tags: string[]
  created_at: string
  updated_at: string
}

interface SmartLinkingPanelProps {
  currentNoteId?: string
  currentNoteContent?: string
  currentNoteTitle?: string
  onNoteSelect?: (noteId: string) => void
  onLinkCreate?: (targetNoteId: string, linkText: string) => void
  className?: string
  isVisible?: boolean
}

export function SmartLinkingPanel({
  currentNoteId,
  currentNoteContent = '',
  currentNoteTitle = '',
  onNoteSelect,
  onLinkCreate,
  className = '',
  isVisible = true,
}: SmartLinkingPanelProps) {
  const [suggestions, setSuggestions] = useState<SmartLinkingSuggestion[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [lastAnalyzedContent, setLastAnalyzedContent] = useState('')

  // Fetch smart linking suggestions
  const fetchSuggestions = useCallback(async () => {
    if (
      !currentNoteId ||
      (!currentNoteContent.trim() && !currentNoteTitle.trim())
    ) {
      setSuggestions([])
      return
    }

    // Only re-analyze if content has changed significantly
    const contentToAnalyze = `${currentNoteTitle} ${currentNoteContent}`.trim()
    if (
      contentToAnalyze === lastAnalyzedContent ||
      contentToAnalyze.length < 50
    ) {
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/ai/auto-linking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          noteId: currentNoteId,
          content: currentNoteContent,
          title: currentNoteTitle,
          limit: 8,
          similarityThreshold: 0.7,
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()

      if (!result.success) {
        throw new Error(
          result.error || 'Failed to get smart linking suggestions'
        )
      }

      setSuggestions(result.data.suggestions || [])
      setLastAnalyzedContent(contentToAnalyze)
    } catch (error) {
      console.error('Smart linking error:', error)
      setError(
        error instanceof Error ? error.message : 'Failed to analyze connections'
      )
      setSuggestions([])
    } finally {
      setIsLoading(false)
    }
  }, [currentNoteId, currentNoteContent, currentNoteTitle, lastAnalyzedContent])

  // Debounced effect to fetch suggestions when content changes
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchSuggestions()
    }, 2000) // Wait 2 seconds after user stops typing

    return () => clearTimeout(timeoutId)
  }, [currentNoteContent, currentNoteTitle, currentNoteId, fetchSuggestions])

  // Handle viewing a related note
  const handleViewNote = (noteId: string) => {
    onNoteSelect?.(noteId)
  }

  // Handle creating a link to a related note
  const handleCreateLink = (suggestion: SmartLinkingSuggestion) => {
    if (onLinkCreate) {
      onLinkCreate(suggestion.noteId, suggestion.title)
      toast({
        title: 'Link created',
        description: `Added link to "${suggestion.title}"`,
      })
    }
  }

  // Get connection type styling
  const getConnectionTypeStyle = (type: string) => {
    switch (type) {
      case 'topical':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
      case 'conceptual':
        return 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
      case 'methodological':
        return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
      case 'semantic':
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300'
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
    }
  }

  // Get connection type icon
  const getConnectionTypeIcon = (type: string) => {
    switch (type) {
      case 'topical':
        return <Hash className='h-3 w-3' />
      case 'conceptual':
        return <Brain className='h-3 w-3' />
      case 'methodological':
        return <ArrowRight className='h-3 w-3' />
      case 'semantic':
        return <Sparkles className='h-3 w-3' />
      default:
        return <Link className='h-3 w-3' />
    }
  }

  if (!isVisible) {
    return null
  }

  return (
    <TooltipProvider>
      <Card className={`w-80 h-fit ${className}`}>
        <CardHeader className='pb-3'>
          <CardTitle className='flex items-center gap-2 text-sm'>
            <Brain className='h-4 w-4 text-purple-500' />
            Smart Connections
            {isLoading && <Loader2 className='h-3 w-3 animate-spin' />}
          </CardTitle>
        </CardHeader>

        <CardContent className='pt-0'>
          {/* Loading State */}
          {isLoading && suggestions.length === 0 && (
            <div className='flex flex-col items-center justify-center py-8 text-center'>
              <Loader2 className='h-6 w-6 animate-spin mb-2 text-muted-foreground' />
              <p className='text-sm text-muted-foreground'>
                AI is analyzing connections...
              </p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className='py-4 text-center'>
              <p className='text-sm text-destructive'>{error}</p>
              <Button
                variant='secondary'
                size='sm'
                onClick={fetchSuggestions}
                className='mt-2'
              >
                Try Again
              </Button>
            </div>
          )}

          {/* No Content State */}
          {!currentNoteContent.trim() &&
            !currentNoteTitle.trim() &&
            !isLoading && (
              <div className='py-8 text-center'>
                <Brain className='h-8 w-8 mx-auto mb-2 text-muted-foreground opacity-50' />
                <p className='text-sm text-muted-foreground'>
                  Start writing to discover smart connections
                </p>
              </div>
            )}

          {/* No Suggestions State */}
          {!isLoading &&
            !error &&
            suggestions.length === 0 &&
            currentNoteContent.trim() && (
              <div className='py-8 text-center'>
                <Link className='h-8 w-8 mx-auto mb-2 text-muted-foreground opacity-50' />
                <p className='text-sm text-muted-foreground'>
                  No related notes found yet
                </p>
                <p className='text-xs text-muted-foreground mt-1'>
                  Keep writing to discover connections
                </p>
              </div>
            )}

          {/* Suggestions List */}
          {suggestions.length > 0 && (
            <div className='space-y-3'>
              <div className='flex items-center justify-between text-xs text-muted-foreground'>
                <span>{suggestions.length} connections found</span>
                <Badge variant='secondary' className='text-xs'>
                  <Sparkles className='h-2 w-2 mr-1' />
                  AI-powered
                </Badge>
              </div>

              {suggestions.map((suggestion, _index) => (
                <div
                  key={suggestion.noteId}
                  className='p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors'
                >
                  {/* Header */}
                  <div className='flex items-start justify-between mb-2'>
                    <div className='flex-1 min-w-0'>
                      <h4 className='font-medium text-sm truncate'>
                        {suggestion.title}
                      </h4>
                      <div className='flex items-center gap-2 mt-1'>
                        <Badge
                          variant='secondary'
                          className={`text-xs h-5 ${getConnectionTypeStyle(suggestion.connectionType)}`}
                        >
                          {getConnectionTypeIcon(suggestion.connectionType)}
                          <span className='ml-1 capitalize'>
                            {suggestion.connectionType}
                          </span>
                        </Badge>
                        <span className='text-xs text-muted-foreground'>
                          {Math.round(suggestion.similarity * 100)}% match
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Connection Reason */}
                  <p className='text-xs text-muted-foreground mb-2 line-clamp-2'>
                    {suggestion.connectionReason}
                  </p>

                  {/* Relevant Snippet */}
                  {suggestion.relevantSnippet && (
                    <div className='text-xs bg-muted/50 rounded p-2 mb-2 line-clamp-2'>
                      &ldquo;{suggestion.relevantSnippet}&rdquo;
                    </div>
                  )}

                  {/* Tags */}
                  {suggestion.tags.length > 0 && (
                    <div className='flex flex-wrap gap-1 mb-2'>
                      {suggestion.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant='secondary'
                          className='text-xs h-4'
                        >
                          <Hash className='h-2 w-2 mr-1' />
                          {tag}
                        </Badge>
                      ))}
                      {suggestion.tags.length > 3 && (
                        <span className='text-xs text-muted-foreground'>
                          +{suggestion.tags.length - 3}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Actions */}
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-1 text-xs text-muted-foreground'>
                      <Clock className='h-3 w-3' />
                      {new Date(suggestion.updated_at).toLocaleDateString()}
                    </div>

                    <div className='flex items-center gap-1'>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant='ghost'
                            size='sm'
                            onClick={() => handleViewNote(suggestion.noteId)}
                            className='h-6 w-6 p-0'
                          >
                            <Eye className='h-3 w-3' />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>View note</p>
                        </TooltipContent>
                      </Tooltip>

                      {onLinkCreate && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant='ghost'
                              size='sm'
                              onClick={() => handleCreateLink(suggestion)}
                              className='h-6 w-6 p-0'
                            >
                              <Plus className='h-3 w-3' />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Insert link</p>
                          </TooltipContent>
                        </Tooltip>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Footer */}
          {suggestions.length > 0 && (
            <div className='mt-4 pt-3 border-t'>
              <Button
                variant='secondary'
                size='sm'
                onClick={fetchSuggestions}
                disabled={isLoading}
                className='w-full text-xs'
              >
                {isLoading ? (
                  <>
                    <Loader2 className='h-3 w-3 animate-spin mr-2' />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Brain className='h-3 w-3 mr-2' />
                    Refresh Connections
                  </>
                )}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </TooltipProvider>
  )
}
