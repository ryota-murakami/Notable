/**
 * React Query (TanStack Query) Configuration
 * Optimized for performance with smart caching and background refetching
 */

import { QueryClient } from '@tanstack/react-query'

// Query key factory for consistent key management
export const queryKeys = {
  // Notes queries
  notes: {
    all: ['notes'] as const,
    list: (filters?: Record<string, unknown>) =>
      ['notes', 'list', filters] as const,
    detail: (id: string) => ['notes', 'detail', id] as const,
    search: (query: string) => ['notes', 'search', query] as const,
  },

  // User queries
  user: {
    all: ['user'] as const,
    profile: () => ['user', 'profile'] as const,
    subscription: () => ['user', 'subscription'] as const,
    usage: () => ['user', 'usage'] as const,
  },

  // Performance metrics
  performance: {
    all: ['performance'] as const,
    vitals: () => ['performance', 'vitals'] as const,
    usage: () => ['performance', 'usage'] as const,
  },
} as const

// Create query client with optimized defaults
export const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // Cache for 5 minutes
        staleTime: 5 * 60 * 1000,
        // Keep in cache for 10 minutes after component unmount
        gcTime: 10 * 60 * 1000,
        // Retry failed requests
        retry: (failureCount, error) => {
          // Don't retry on authentication errors
          if (error && typeof error === 'object' && 'status' in error) {
            if (error.status === 401 || error.status === 403) return false
          }
          // Retry up to 3 times for other errors
          return failureCount < 3
        },
        // Background refetch settings
        refetchOnMount: 'always',
        refetchOnWindowFocus: 'always',
        refetchOnReconnect: 'always',
        // Network mode for offline scenarios
        networkMode: 'always',
      },
      mutations: {
        // Retry failed mutations once
        retry: 1,
        // Network mode for offline mutations
        networkMode: 'online',
        // Global error handling for mutations
        onError: (error) => {
          console.error('Mutation error:', error)

          // Import toast dynamically to avoid circular dependencies
          import('@/hooks/use-toast')
            .then(({ toast }) => {
              // Extract meaningful error message
              let errorMessage = 'An unexpected error occurred'

              if (error && typeof error === 'object') {
                // Handle different error types
                if ('message' in error && typeof error.message === 'string') {
                  errorMessage = error.message
                } else if ('status' in error) {
                  switch (error.status) {
                    case 401:
                      errorMessage =
                        'Authentication required. Please sign in again.'
                      break
                    case 403:
                      errorMessage =
                        'You do not have permission to perform this action.'
                      break
                    case 404:
                      errorMessage = 'The requested resource was not found.'
                      break
                    case 429:
                      errorMessage =
                        'Too many requests. Please try again later.'
                      break
                    case 500:
                      errorMessage = 'Server error. Please try again later.'
                      break
                    case 503:
                      errorMessage =
                        'Service temporarily unavailable. Please try again later.'
                      break
                    default:
                      errorMessage = `Request failed with status ${error.status}`
                  }
                }
              }

              // Show error toast notification
              toast({
                variant: 'destructive',
                title: 'Error',
                description: errorMessage,
              })
            })
            .catch((error) => {
              console.error('Failed to show error toast:', error)
            })
        },
      },
    },
  })
}

// Singleton query client instance
let queryClient: QueryClient | undefined

export const getQueryClient = () => {
  if (!queryClient) {
    queryClient = createQueryClient()
  }
  return queryClient
}

// Performance optimized query configurations
export const queryConfigs = {
  // Fast queries that should be cached aggressively
  fast: {
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes
  },

  // Real-time data that should be fresh
  realtime: {
    staleTime: 0, // Always stale
    gcTime: 1 * 60 * 1000, // 1 minute
    refetchInterval: 30 * 1000, // Refetch every 30 seconds
  },

  // Heavy queries that should be cached longer
  heavy: {
    staleTime: 15 * 60 * 1000, // 15 minutes
    gcTime: 60 * 60 * 1000, // 1 hour
    retry: 1, // Less aggressive retry
  },

  // User-specific data that changes frequently
  user: {
    staleTime: 2 * 60 * 1000, // 2 minutes
    gcTime: 5 * 60 * 1000, // 5 minutes
  },
} as const

// Prefetch helpers for performance optimization
export const prefetchHelpers = {
  // Prefetch note details when hovering over note list items
  prefetchNoteDetail: (queryClient: QueryClient, noteId: string) => {
    queryClient.prefetchQuery({
      queryKey: queryKeys.notes.detail(noteId),
      queryFn: () => {
        // TODO: Implement note fetching function
        return fetch(`/api/notes/${noteId}`).then((res) => res.json())
      },
      staleTime: queryConfigs.fast.staleTime,
    })
  },

  // Prefetch user usage data for billing page
  prefetchUsageData: (queryClient: QueryClient) => {
    queryClient.prefetchQuery({
      queryKey: queryKeys.user.usage(),
      queryFn: () => {
        return fetch('/api/user/usage').then((res) => res.json())
      },
      staleTime: queryConfigs.user.staleTime,
    })
  },

  // Prefetch search results based on input
  prefetchSearchResults: (queryClient: QueryClient, query: string) => {
    if (query.length < 3) return // Don't prefetch short queries

    queryClient.prefetchQuery({
      queryKey: queryKeys.notes.search(query),
      queryFn: () => {
        return fetch(`/api/search?q=${encodeURIComponent(query)}`).then((res) =>
          res.json()
        )
      },
      staleTime: 30 * 1000, // Search results stale quickly
    })
  },
}

// Query invalidation helpers
export const invalidationHelpers = {
  // Invalidate all note-related queries
  invalidateNotes: (queryClient: QueryClient) => {
    queryClient.invalidateQueries({ queryKey: queryKeys.notes.all })
  },

  // Invalidate specific note
  invalidateNote: (queryClient: QueryClient, noteId: string) => {
    queryClient.invalidateQueries({ queryKey: queryKeys.notes.detail(noteId) })
    queryClient.invalidateQueries({ queryKey: queryKeys.notes.list() })
  },

  // Invalidate user subscription data after billing changes
  invalidateUserSubscription: (queryClient: QueryClient) => {
    queryClient.invalidateQueries({ queryKey: queryKeys.user.subscription() })
    queryClient.invalidateQueries({ queryKey: queryKeys.user.usage() })
  },
}

// Performance monitoring integration
export const performanceIntegration = {
  // Track query performance
  onQueryStart: (queryKey: unknown[]) => {
    performance.mark(`query-start-${JSON.stringify(queryKey)}`)
  },

  onQueryEnd: (queryKey: unknown[], duration: number) => {
    performance.mark(`query-end-${JSON.stringify(queryKey)}`)
    performance.measure(
      `query-${JSON.stringify(queryKey)}`,
      `query-start-${JSON.stringify(queryKey)}`,
      `query-end-${JSON.stringify(queryKey)}`
    )

    // Track query performance in analytics
    import('./analytics').then(({ analytics }) => {
      analytics.performance(
        `query_${queryKey[0] || 'unknown'}`,
        duration,
        'ms',
        {
          queryKey: JSON.stringify(queryKey),
          category: 'react-query',
        }
      )

      // Report slow queries
      if (duration > 1000) {
        console.warn(
          `Slow query detected: ${JSON.stringify(queryKey)} took ${duration}ms`
        )

        // Track slow queries as potential performance issues
        analytics.track({
          name: 'slow_query_detected',
          properties: {
            queryKey: JSON.stringify(queryKey),
            duration,
            threshold: 1000,
          },
        })
      }
    })
  },
}
