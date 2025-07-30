/**
 * AI-Enhanced Smart Search Component
 * Premium feature that uses AI to improve search results and suggestions
 */

'use client'

import * as React from 'react'
import { useCallback, useEffect, useState } from 'react'
import {
  Brain,
  Crown,
  Lightbulb,
  Loader2,
  Search,
  Sparkles,
  TrendingUp,
  Zap,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { useAISearch } from '@/hooks/use-ai'
import type { SearchResult } from '@/lib/search/types'

interface SmartSearchProps {
  /** Search query */
  query: string
  /** Regular search results */
  searchResults: SearchResult[]
  /** Whether AI enhancement is enabled */
  aiEnabled?: boolean
  /** Callback when enhanced results are ready */
  onEnhancedResults?: (results: any) => void
  /** Custom CSS classes */
  className?: string
}

export const SmartSearch: React.FC<SmartSearchProps> = ({
  query,
  searchResults,
  aiEnabled = true,
  onEnhancedResults,
  className,
}) => {
  const [showAIResults, setShowAIResults] = useState(false)
  const [enhancedQuery, setEnhancedQuery] = useState('')
  const [aiInsights, setAIInsights] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])

  const { enhanceSearch, isEnhancing, data: aiData, error } = useAISearch()

  // Trigger AI enhancement when query changes
  useEffect(() => {
    if (aiEnabled && query.trim() && searchResults.length > 0) {
      const timer = setTimeout(() => {
        handleAIEnhancement()
      }, 1000) // Debounce AI calls

      return () => clearTimeout(timer)
    }
  }, [query, searchResults, aiEnabled])

  // Process AI results when they arrive
  useEffect(() => {
    if (aiData?.data?.content) {
      try {
        const parsed = JSON.parse(aiData.data.content)
        setEnhancedQuery(parsed.enhancedQuery || '')
        setAIInsights(parsed.insights || '')
        setSuggestions(parsed.suggestions || [])
        setShowAIResults(true)
        onEnhancedResults?.(parsed)
      } catch (error) {
        console.error('Failed to parse AI response:', error)
      }
    }
  }, [aiData, onEnhancedResults])

  const handleAIEnhancement = useCallback(async () => {
    if (!query.trim() || !aiEnabled) return

    try {
      await enhanceSearch(query, searchResults)
    } catch (error) {
      console.error('AI enhancement failed:', error)
    }
  }, [query, searchResults, aiEnabled, enhanceSearch])

  const handleSuggestionClick = useCallback((suggestion: string) => {
    // This would trigger a new search with the suggested query
    // Implementation would depend on parent component's search handling
    console.log('Suggested search:', suggestion)
  }, [])

  if (!aiEnabled) {
    return null
  }

  return (
    <div className={cn('space-y-4', className)}>
      {/* AI Enhancement Status */}
      {query && (
        <div className='flex items-center gap-2 text-sm'>
          {isEnhancing ? (
            <>
              <Loader2 className='h-4 w-4 animate-spin text-blue-500' />
              <span className='text-muted-foreground'>
                AI is analyzing your search...
              </span>
            </>
          ) : showAIResults ? (
            <>
              <Sparkles className='h-4 w-4 text-blue-500' />
              <span className='text-blue-600 font-medium'>
                AI-enhanced results ready
              </span>
              <Crown className='h-3 w-3 text-amber-500' />
            </>
          ) : null}
        </div>
      )}

      {/* Enhanced Query Suggestion */}
      {enhancedQuery && enhancedQuery !== query && (
        <Card className='border-blue-200 bg-blue-50/50'>
          <CardHeader className='pb-3'>
            <CardTitle className='text-sm flex items-center gap-2'>
              <Brain className='h-4 w-4 text-blue-500' />
              AI-Enhanced Search
              <Badge variant='secondary' className='text-xs'>
                Premium
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-3'>
              <div>
                <p className='text-sm text-muted-foreground mb-2'>
                  Try this enhanced search query:
                </p>
                <div className='flex items-center gap-2'>
                  <code className='bg-white px-2 py-1 rounded text-sm flex-1'>
                    {enhancedQuery}
                  </code>
                  <Button
                    size='sm'
                    onClick={() => handleSuggestionClick(enhancedQuery)}
                  >
                    <Search className='h-3 w-3 mr-1' />
                    Search
                  </Button>
                </div>
              </div>

              {aiInsights && (
                <div className='border-t pt-3'>
                  <div className='flex items-start gap-2'>
                    <Lightbulb className='h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0' />
                    <div>
                      <p className='text-xs font-medium text-muted-foreground mb-1'>
                        AI Insight
                      </p>
                      <p className='text-sm text-gray-700'>{aiInsights}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* AI Search Suggestions */}
      {suggestions.length > 0 && (
        <Card>
          <CardHeader className='pb-3'>
            <CardTitle className='text-sm flex items-center gap-2'>
              <TrendingUp className='h-4 w-4 text-green-500' />
              Related Search Suggestions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-2'>
              {suggestions.map((suggestion, index) => (
                <Button
                  key={index}
                  variant='ghost'
                  size='sm'
                  onClick={() => handleSuggestionClick(suggestion)}
                  className='justify-start h-auto p-2 w-full text-left'
                >
                  <Search className='h-3 w-3 mr-2 flex-shrink-0' />
                  <span className='text-sm'>{suggestion}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Error State */}
      {error && (
        <Card className='border-red-200 bg-red-50/50'>
          <CardContent className='pt-4'>
            <div className='flex items-center gap-2 text-sm text-red-600'>
              <Zap className='h-4 w-4' />
              <span>AI enhancement temporarily unavailable</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

/**
 * Smart Search Enhancement Toggle
 * Shows premium feature toggle for AI search
 */
interface SmartSearchToggleProps {
  enabled: boolean
  onToggle: (enabled: boolean) => void
  isPremium: boolean
  className?: string
}

export const SmartSearchToggle: React.FC<SmartSearchToggleProps> = ({
  enabled,
  onToggle,
  isPremium,
  className,
}) => {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Button
        variant={enabled ? 'default' : 'outline'}
        size='sm'
        onClick={() => onToggle(!enabled)}
        disabled={!isPremium}
        className={cn('text-xs', enabled && 'bg-blue-600 hover:bg-blue-700')}
      >
        <Brain className='h-3 w-3 mr-1' />
        AI Search
        {enabled && <Sparkles className='h-3 w-3 ml-1' />}
      </Button>

      {!isPremium && (
        <Badge variant='outline' className='text-xs'>
          <Crown className='h-2 w-2 mr-1' />
          Premium
        </Badge>
      )}
    </div>
  )
}

/**
 * Search Performance Metrics with AI Enhancement
 */
interface SearchMetricsProps {
  searchTime: number
  resultCount: number
  aiEnhanced: boolean
  className?: string
}

export const SearchMetrics: React.FC<SearchMetricsProps> = ({
  searchTime,
  resultCount,
  aiEnhanced,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex items-center gap-4 text-xs text-muted-foreground',
        className
      )}
    >
      <span>
        {resultCount} results in {searchTime}ms
      </span>

      {aiEnhanced && (
        <>
          <Separator orientation='vertical' className='h-3' />
          <div className='flex items-center gap-1'>
            <Sparkles className='h-3 w-3 text-blue-500' />
            <span className='text-blue-600'>AI Enhanced</span>
          </div>
        </>
      )}
    </div>
  )
}
