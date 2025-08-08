'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  File,
  FileText,
  Lightbulb,
  RefreshCw,
  Sparkles,
  X,
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface Suggestion {
  id: string
  type: 'related_note' | 'template' | 'ai_tip' | 'search' | 'link'
  title: string
  description: string
  confidence: number
  noteId?: string
  templateId?: string
  searchQuery?: string
  linkUrl?: string
  metadata?: Record<string, any>
}

interface SmartSuggestionsPanelProps {
  context?: string
  noteId?: string
  currentContent?: string
  className?: string
  onSelectSuggestion?: (suggestion: Suggestion) => void
  onDismiss?: () => void
}

const SmartSuggestionsPanel = React.memo(
  ({
    context = 'general',
    noteId,
    currentContent,
    className,
    onSelectSuggestion,
    onDismiss,
  }: SmartSuggestionsPanelProps) => {
    const [suggestions, setSuggestions] = useState<Suggestion[]>([])
    const [loading, setLoading] = useState(false)
    const [isExpanded, setIsExpanded] = useState(true)
    const [lastRefresh, setLastRefresh] = useState(Date.now())

    const fetchSuggestions = useCallback(async () => {
      try {
        setLoading(true)
        const params = new URLSearchParams()
        if (context) params.set('context', context)
        if (noteId) params.set('noteId', noteId)
        if (currentContent) params.set('content', currentContent.slice(0, 500)) // Limit content

        const response = await fetch(`/api/suggestions?${params}`)
        const result = await response.json()

        if (result.success) {
          setSuggestions(result.data.suggestions || [])
        }
      } catch (error) {
        console.error('Failed to fetch suggestions:', error)
        setSuggestions([])
      } finally {
        setLoading(false)
      }
    }, [context, noteId, currentContent])

    useEffect(() => {
      fetchSuggestions()
    }, [context, noteId, currentContent, lastRefresh, fetchSuggestions])

    const handleRefresh = () => {
      setLastRefresh(Date.now())
    }

    const handleSelectSuggestion = (suggestion: Suggestion) => {
      onSelectSuggestion?.(suggestion)
    }

    const getSuggestionIcon = (type: string) => {
      switch (type) {
        case 'related_note':
          return FileText
        case 'template':
          return File
        case 'ai_tip':
          return Lightbulb
        case 'search':
          return Sparkles
        case 'link':
          return ArrowRight
        default:
          return Lightbulb
      }
    }

    const getSuggestionColor = (type: string) => {
      switch (type) {
        case 'related_note':
          return 'text-blue-600 bg-blue-50 border-blue-200'
        case 'template':
          return 'text-purple-600 bg-purple-50 border-purple-200'
        case 'ai_tip':
          return 'text-amber-600 bg-amber-50 border-amber-200'
        case 'search':
          return 'text-green-600 bg-green-50 border-green-200'
        case 'link':
          return 'text-gray-600 bg-gray-50 border-gray-200'
        default:
          return 'text-gray-600 bg-gray-50 border-gray-200'
      }
    }

    const groupedSuggestions = suggestions.reduce(
      (acc, suggestion) => {
        if (!acc[suggestion.type]) {
          acc[suggestion.type] = []
        }
        acc[suggestion.type].push(suggestion)
        return acc
      },
      {} as Record<string, Suggestion[]>
    )

    if (suggestions.length === 0 && !loading) {
      return null
    }

    return (
      <Card
        className={cn('w-80 shadow-lg border-l-4 border-l-blue-500', className)}
      >
        <CardHeader className='pb-3'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Sparkles className='h-4 w-4 text-blue-600' />
              <CardTitle className='text-sm font-medium'>
                Smart Suggestions
              </CardTitle>
            </div>
            <div className='flex items-center gap-1'>
              <Button
                variant='ghost'
                size='sm'
                onClick={handleRefresh}
                disabled={loading}
                className='h-6 w-6 p-0'
              >
                <RefreshCw
                  className={cn('h-3 w-3', loading && 'animate-spin')}
                />
              </Button>
              <Button
                variant='ghost'
                size='sm'
                onClick={() => setIsExpanded(!isExpanded)}
                className='h-6 w-6 p-0'
              >
                {isExpanded ? (
                  <ChevronUp className='h-3 w-3' />
                ) : (
                  <ChevronDown className='h-3 w-3' />
                )}
              </Button>
              {onDismiss && (
                <Button
                  variant='ghost'
                  size='sm'
                  onClick={onDismiss}
                  className='h-6 w-6 p-0'
                >
                  <X className='h-3 w-3' />
                </Button>
              )}
            </div>
          </div>
        </CardHeader>

        {isExpanded && (
          <CardContent className='pt-0 space-y-4'>
            {loading ? (
              <div className='space-y-3'>
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className='animate-pulse'>
                    <div className='h-4 bg-muted rounded mb-2'></div>
                    <div className='h-3 bg-muted rounded'></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className='space-y-4'>
                {Object.entries(groupedSuggestions).map(
                  ([type, typeSuggestions]) => (
                    <div key={type} className='space-y-2'>
                      <div className='flex items-center gap-2'>
                        <Badge variant='secondary' className='text-xs'>
                          {type
                            .replace('_', ' ')
                            .replace(/\b\w/g, (l) => l.toUpperCase())}
                        </Badge>
                        <span className='text-xs text-muted-foreground'>
                          {typeSuggestions.length} suggestion
                          {typeSuggestions.length !== 1 ? 's' : ''}
                        </span>
                      </div>

                      <div className='space-y-2'>
                        {typeSuggestions.map((suggestion) => {
                          const Icon = getSuggestionIcon(suggestion.type)
                          return (
                            <SuggestionCard
                              key={suggestion.id}
                              suggestion={suggestion}
                              icon={Icon}
                              colorClass={getSuggestionColor(suggestion.type)}
                              onSelect={() =>
                                handleSelectSuggestion(suggestion)
                              }
                            />
                          )
                        })}
                      </div>

                      {Object.keys(groupedSuggestions).indexOf(type) <
                        Object.keys(groupedSuggestions).length - 1 && (
                        <Separator />
                      )}
                    </div>
                  )
                )}
              </div>
            )}

            {suggestions.length === 0 && !loading && (
              <div className='text-center py-4'>
                <Lightbulb className='h-8 w-8 mx-auto text-muted-foreground mb-2' />
                <p className='text-sm text-muted-foreground'>
                  No suggestions available
                </p>
                <p className='text-xs text-muted-foreground mt-1'>
                  Try writing more content to get AI-powered suggestions
                </p>
              </div>
            )}
          </CardContent>
        )}
      </Card>
    )
  }
)

SmartSuggestionsPanel.displayName = 'SmartSuggestionsPanel'

function SuggestionCard({
  suggestion,
  icon: Icon,
  colorClass,
  onSelect,
}: {
  suggestion: Suggestion
  icon: React.ElementType
  colorClass: string
  onSelect: () => void
}) {
  return (
    <div
      className={cn(
        'p-3 rounded-lg border cursor-pointer transition-all hover:shadow-sm',
        colorClass
      )}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelect()
        }
      }}
      tabIndex={0}
      role='button'
    >
      <div className='flex items-start gap-2'>
        <Icon className='h-4 w-4 mt-0.5 flex-shrink-0' />
        <div className='flex-1 min-w-0'>
          <div className='flex items-center gap-2 mb-1'>
            <p className='text-sm font-medium truncate'>{suggestion.title}</p>
            {suggestion.confidence && (
              <Badge
                variant='outline'
                className='text-xs px-1 py-0 h-4 flex-shrink-0'
              >
                {Math.round(suggestion.confidence * 100)}%
              </Badge>
            )}
          </div>
          <p className='text-xs text-muted-foreground line-clamp-2'>
            {suggestion.description}
          </p>
        </div>
        <ArrowRight className='h-3 w-3 flex-shrink-0 opacity-50' />
      </div>
    </div>
  )
}

// Hook for using smart suggestions
export function useSmartSuggestions({
  context = 'general',
  noteId,
  currentContent,
  enabled = true,
}: {
  context?: string
  noteId?: string
  currentContent?: string
  enabled?: boolean
}) {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchSuggestions = useCallback(async () => {
    if (!enabled) return

    try {
      setLoading(true)
      setError(null)

      const params = new URLSearchParams()
      if (context) params.set('context', context)
      if (noteId) params.set('noteId', noteId)
      if (currentContent) params.set('content', currentContent.slice(0, 500))

      const response = await fetch(`/api/suggestions?${params}`)
      const result = await response.json()

      if (result.success) {
        setSuggestions(result.data.suggestions || [])
      } else {
        throw new Error(result.error || 'Failed to fetch suggestions')
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Failed to fetch suggestions'
      )
      setSuggestions([])
    } finally {
      setLoading(false)
    }
  }, [enabled, context, noteId, currentContent])

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      fetchSuggestions()
    }, 1000) // Debounce API calls

    return () => clearTimeout(debounceTimeout)
  }, [context, noteId, currentContent, enabled, fetchSuggestions])

  return {
    suggestions,
    loading,
    error,
    refetch: fetchSuggestions,
  }
}

// Inline suggestion component for editor
const InlineSuggestion = React.memo(
  ({
    suggestion,
    onAccept,
    onDismiss,
  }: {
    suggestion: Suggestion
    onAccept: () => void
    onDismiss: () => void
  }) => {
    const Icon = getSuggestionIcon(suggestion.type)

    return (
      <div className='flex items-center gap-2 p-2 bg-blue-50 border border-blue-200 rounded-lg text-sm'>
        <Icon className='h-4 w-4 text-blue-600' />
        <span className='flex-1 text-blue-900'>{suggestion.title}</span>
        <div className='flex gap-1'>
          <Button
            size='sm'
            variant='outline'
            onClick={onAccept}
            className='h-6 px-2'
          >
            Accept
          </Button>
          <Button
            size='sm'
            variant='ghost'
            onClick={onDismiss}
            className='h-6 w-6 p-0'
          >
            <X className='h-3 w-3' />
          </Button>
        </div>
      </div>
    )
  }
)

InlineSuggestion.displayName = 'InlineSuggestion'

function getSuggestionIcon(type: string) {
  switch (type) {
    case 'related_note':
      return FileText
    case 'template':
      return File
    case 'ai_tip':
      return Lightbulb
    case 'search':
      return Sparkles
    case 'link':
      return ArrowRight
    default:
      return Lightbulb
  }
}

export { SmartSuggestionsPanel, InlineSuggestion }
