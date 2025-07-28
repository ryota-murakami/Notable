import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Create a client factory function
export const createQueryClient = () => new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      refetchOnMount: 'always',
      refetchOnWindowFocus: 'always',
      refetchOnReconnect: 'always',
      networkMode: 'always',
      retry: (failureCount, error) => {
        const status = (error as any)?.status
        if (status === 401 || status === 403) return false
        return failureCount < 3
      },
    },
    mutations: {
      retry: 1,
      networkMode: 'online',
      onError: async (error: any) => {
        const { toast } = await import('@/hooks/use-toast')
        
        let message = 'An unexpected error occurred'
        
        if (error?.message) {
          message = error.message
        } else if (error?.status) {
          switch (error.status) {
            case 401:
              message = 'Authentication required. Please sign in again.'
              break
            case 403:
              message = 'You do not have permission to perform this action.'
              break
            case 404:
              message = 'The requested resource was not found.'
              break
            case 429:
              message = 'Too many requests. Please try again later.'
              break
            case 500:
              message = 'Server error. Please try again later.'
              break
            case 503:
              message = 'Service temporarily unavailable. Please try again later.'
              break
            default:
              message = `Request failed with status ${error.status}`
          }
        }
        
        toast({
          variant: 'destructive',
          title: 'Error',
          description: message,
        })
      },
    },
  },
})

// Create a default client instance
export const queryClient = createQueryClient()

// Export provider for convenience
export { QueryClientProvider }

// Query key factory
export const queryKeys = {
  notes: {
    all: ['notes'] as const,
    list: (filters?: any) => ['notes', 'list', filters] as const,
    detail: (id: string) => ['notes', 'detail', id] as const,
    search: (query: string) => ['notes', 'search', query] as const,
  },
  user: {
    all: ['user'] as const,
    profile: () => ['user', 'profile'] as const,
    subscription: () => ['user', 'subscription'] as const,
    usage: () => ['user', 'usage'] as const,
  },
  performance: {
    all: ['performance'] as const,
    vitals: () => ['performance', 'vitals'] as const,
    usage: () => ['performance', 'usage'] as const,
  },
}

// Query configuration presets
export const queryConfigs = {
  fast: {
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes
  },
  realtime: {
    staleTime: 0,
    gcTime: 1 * 60 * 1000, // 1 minute
    refetchInterval: 30 * 1000, // 30 seconds
  },
  heavy: {
    staleTime: 15 * 60 * 1000, // 15 minutes
    gcTime: 60 * 60 * 1000, // 1 hour
    retry: 1,
  },
  user: {
    staleTime: 2 * 60 * 1000, // 2 minutes
    gcTime: 5 * 60 * 1000, // 5 minutes
  },
}

// Default query options
export const defaultQueryOptions = {
  staleTime: 1000 * 60 * 5,
  gcTime: 1000 * 60 * 30,
}