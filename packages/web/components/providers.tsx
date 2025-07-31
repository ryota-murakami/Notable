'use client'

import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider } from './theme-provider'
import { SyncProviderWrapper } from './sync-provider-wrapper'
import { RoutingProvider } from './routing-provider'
import { PluginSystemProvider } from './plugin-system-provider'

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 60 * 1000, // 5 minutes
            retry: false,
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute='data-theme'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        <RoutingProvider>
          <PluginSystemProvider>
            <SyncProviderWrapper>{children}</SyncProviderWrapper>
          </PluginSystemProvider>
        </RoutingProvider>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
