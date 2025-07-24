/**
 * React Query Provider
 * Wraps the app with TanStack Query for optimized data fetching
 */

'use client'

import { useState, type ReactNode } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { getQueryClient } from '@/lib/react-query'

interface QueryProviderProps {
  children: ReactNode
}

export function QueryProvider({ children }: QueryProviderProps) {
  // Create query client instance - using useState to ensure it's created only once
  const [queryClient] = useState(() => getQueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* Show React Query devtools in development */}
      {process.env.NODE_ENV === 'development' && (
        <ReactQueryDevtools
          initialIsOpen={false}
          buttonPosition='bottom-left'
          position='bottom'
        />
      )}
    </QueryClientProvider>
  )
}

// HOC for components that need query client access
export function withQueryClient<P extends object>(
  Component: React.ComponentType<P>
) {
  const WrappedComponent = (props: P) => {
    const [queryClient] = useState(() => getQueryClient())

    return (
      <QueryClientProvider client={queryClient}>
        <Component {...props} />
      </QueryClientProvider>
    )
  }

  WrappedComponent.displayName = `withQueryClient(${Component.displayName || Component.name})`

  return WrappedComponent
}
