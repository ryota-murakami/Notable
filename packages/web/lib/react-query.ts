import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Create a client
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 30, // 30 minutes (formerly cacheTime)
    },
  },
})

// Export provider for convenience
export { QueryClientProvider }

// Default query options
export const defaultQueryOptions = {
  staleTime: 1000 * 60 * 5,
  gcTime: 1000 * 60 * 30,
}