/**
 * AI Features React Hooks
 * Premium AI functionality with usage tracking and error handling
 */

'use client'

import { useCallback, useEffect, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { AIRequestType, AIServiceError } from '@/lib/ai/types'

interface AIHookOptions {
  onSuccess?: (data: any) => void
  onError?: (error: Error) => void
  autoRetry?: boolean
}

/**
 * Main AI service hook
 */
export function useAI(options: AIHookOptions = {}) {
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const mutation = useMutation({
    mutationFn: async (request: {
      type: AIRequestType
      input: string
      context?: any
      options?: any
    }) => {
      setIsProcessing(true)
      setError(null)

      const response = await fetch('/api/ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new AIServiceError(
          data.error || 'AI request failed',
          data.code || 'UNKNOWN_ERROR',
          data.retryable || false
        )
      }

      return data
    },
    onSuccess: (data) => {
      setIsProcessing(false)
      options.onSuccess?.(data)
    },
    onError: (error: any) => {
      setIsProcessing(false)
      const errorMessage = error.message || 'AI request failed'
      setError(errorMessage)

      // Show appropriate toast messages
      if (error.code === 'PREMIUM_REQUIRED') {
        toast.error('This AI feature requires a Premium subscription', {
          action: {
            label: 'Upgrade',
            onClick: () => (window.location.href = '/pricing'),
          },
        })
      } else if (error.code === 'QUOTA_EXCEEDED') {
        toast.error('AI usage limit reached for today', {
          description: 'Upgrade to Premium for unlimited AI features',
        })
      } else if (error.code === 'RATE_LIMIT_EXCEEDED') {
        toast.error('Too many AI requests', {
          description: 'Please wait a moment before trying again',
        })
      } else {
        toast.error(errorMessage)
      }

      options.onError?.(error)
    },
    retry: (failureCount, error: any) => {
      if (!options.autoRetry) return false
      if (error.code === 'PREMIUM_REQUIRED' || error.code === 'QUOTA_EXCEEDED')
        return false
      return failureCount < 2 && error.retryable
    },
  })

  const processRequest = useCallback(
    (
      type: AIRequestType,
      input: string,
      context?: any,
      requestOptions?: any
    ) => {
      return mutation.mutate({ type, input, context, options: requestOptions })
    },
    [mutation]
  )

  return {
    processRequest,
    isProcessing: isProcessing || mutation.isPending,
    error,
    data: mutation.data,
    reset: () => {
      setError(null)
      mutation.reset()
    },
  }
}

/**
 * AI-enhanced search hook
 */
export function useAISearch() {
  const ai = useAI()

  const enhanceSearch = useCallback(
    async (query: string, searchResults: any[] = [], userPreferences?: any) => {
      return ai.processRequest(AIRequestType.SEARCH_ENHANCEMENT, query, {
        searchResults: searchResults.slice(0, 10), // Limit context size
        userPreferences,
        recentNotes: [], // Could add recent notes for context
      })
    },
    [ai]
  )

  return {
    enhanceSearch,
    isEnhancing: ai.isProcessing,
    error: ai.error,
    data: ai.data,
    reset: ai.reset,
  }
}

/**
 * AI content generation hook
 */
export function useAIContentGeneration() {
  const ai = useAI()

  const generateContent = useCallback(
    async (
      prompt: string,
      context: {
        noteContext?: string
        linkedNotes?: any[]
        tags?: string[]
        format?: 'paragraph' | 'bullet_points' | 'outline' | 'table'
      } = {}
    ) => {
      return ai.processRequest(
        AIRequestType.CONTENT_GENERATION,
        prompt,
        context
      )
    },
    [ai]
  )

  return {
    generateContent,
    isGenerating: ai.isProcessing,
    error: ai.error,
    data: ai.data,
    reset: ai.reset,
  }
}

/**
 * AI note assistant hook
 */
export function useAINoteAssistant() {
  const ai = useAI()

  const assistWithNote = useCallback(
    async (
      content: string,
      action: 'improve' | 'expand' | 'summarize' | 'rewrite' | 'complete',
      context: {
        noteId: string
        relatedNotes?: any[]
        userStyle?: 'formal' | 'casual' | 'academic' | 'creative'
      }
    ) => {
      return ai.processRequest(AIRequestType.NOTE_ASSISTANT, content, {
        ...context,
        action,
      })
    },
    [ai]
  )

  return {
    assistWithNote,
    isAssisting: ai.isProcessing,
    error: ai.error,
    data: ai.data,
    reset: ai.reset,
  }
}

/**
 * AI usage statistics hook
 */
export function useAIUsage(period: 'day' | 'week' | 'month' = 'day') {
  return useQuery({
    queryKey: ['ai-usage', period],
    queryFn: async () => {
      const response = await fetch(`/api/ai?action=usage&period=${period}`)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch AI usage')
      }

      return data.data
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
  })
}

/**
 * AI usage limits hook
 */
export function useAILimits() {
  return useQuery({
    queryKey: ['ai-limits'],
    queryFn: async () => {
      const response = await fetch('/api/ai?action=limits')
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch AI limits')
      }

      return data.data
    },
    staleTime: 2 * 60 * 1000, // 2 minutes
    refetchInterval: 2 * 60 * 1000, // Refetch every 2 minutes
  })
}

/**
 * AI content suggestions hook
 */
export function useAIContentSuggestions(
  noteId?: string,
  suggestionType?: string
) {
  const queryClient = useQueryClient()

  const { data, isLoading, error } = useQuery({
    queryKey: ['ai-suggestions', noteId, suggestionType],
    queryFn: async () => {
      const params = new URLSearchParams({ action: 'suggestions' })
      if (noteId) params.append('noteId', noteId)
      if (suggestionType) params.append('type', suggestionType)

      const response = await fetch(`/api/ai?${params}`)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch AI suggestions')
      }

      return data.data.suggestions
    },
    enabled: true,
  })

  const updateSuggestionMutation = useMutation({
    mutationFn: async ({
      suggestionId,
      status,
      userFeedback,
    }: {
      suggestionId: string
      status: 'accepted' | 'rejected' | 'modified'
      userFeedback?: string
    }) => {
      const response = await fetch('/api/ai', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          suggestionId,
          status,
          userFeedback,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to update suggestion')
      }

      return data.data
    },
    onSuccess: () => {
      // Invalidate and refetch suggestions
      queryClient.invalidateQueries({ queryKey: ['ai-suggestions'] })
      toast.success('Suggestion updated')
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to update suggestion')
    },
  })

  const acceptSuggestion = useCallback(
    (suggestionId: string, feedback?: string) => {
      updateSuggestionMutation.mutate({
        suggestionId,
        status: 'accepted',
        userFeedback: feedback,
      })
    },
    [updateSuggestionMutation]
  )

  const rejectSuggestion = useCallback(
    (suggestionId: string, feedback?: string) => {
      updateSuggestionMutation.mutate({
        suggestionId,
        status: 'rejected',
        userFeedback: feedback,
      })
    },
    [updateSuggestionMutation]
  )

  return {
    suggestions: data || [],
    isLoading,
    error,
    acceptSuggestion,
    rejectSuggestion,
    isUpdating: updateSuggestionMutation.isPending,
  }
}

/**
 * Smart content completion hook for editor integration
 */
export function useAICompletion() {
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const ai = useAI()

  // Handle AI completion response
  useEffect(() => {
    if (ai.data?.data?.content) {
      try {
        const parsed = JSON.parse(ai.data.data.content)
        setSuggestions(parsed.suggestions || [])
      } catch (error) {
        console.error('Failed to parse AI completion response:', error)
        setSuggestions([])
      } finally {
        setIsLoading(false)
      }
    }
  }, [ai.data])

  const getSuggestions = useCallback(
    (currentContent: string, cursorPosition: number, noteContext?: string) => {
      setIsLoading(true)

      try {
        ai.processRequest(
          AIRequestType.AUTO_COMPLETION,
          currentContent.substring(
            Math.max(0, cursorPosition - 500),
            cursorPosition + 100
          ),
          {
            noteContext,
            cursorPosition: Math.min(500, cursorPosition),
            maxSuggestions: 3,
          }
        )
        // The result will be available through ai.data and processed in a useEffect
      } catch (error) {
        console.error('AI completion error:', error)
        setSuggestions([])
        setIsLoading(false)
      }
    },
    [ai]
  )

  const clearSuggestions = useCallback(() => {
    setSuggestions([])
  }, [])

  return {
    suggestions,
    isLoading,
    getSuggestions,
    clearSuggestions,
  }
}

/**
 * AI-powered tag suggestions hook
 */
export function useAITagSuggestions() {
  const ai = useAI()

  const suggestTags = useCallback(
    async (content: string, existingTags: string[] = []) => {
      return ai.processRequest(AIRequestType.TAG_SUGGESTION, content, {
        existingTags,
        maxSuggestions: 5,
        excludeExisting: true,
      })
    },
    [ai]
  )

  return {
    suggestTags,
    isSuggesting: ai.isProcessing,
    error: ai.error,
    data: ai.data,
    reset: ai.reset,
  }
}
