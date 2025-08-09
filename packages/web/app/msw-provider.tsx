'use client'

import { useEffect, useState } from 'react'

export function MSWProvider({ children }: { children: React.ReactNode }) {
  const [mswReady, setMswReady] = useState(false)

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      process.env.NEXT_PUBLIC_API_MOCKING === 'enabled'
    ) {
      // Initialize MSW asynchronously without blocking
      import('../mocks/browser')
        .then(async ({ worker }) => {
          try {
            await worker.start({
              onUnhandledRequest(request, print) {
                // Ignore Next.js internal requests
                if (request.url.includes('_next')) {
                  return
                }
                // Ignore various CDN and external requests
                if (
                  request.url.includes('clerk.') ||
                  request.url.includes('supabase.') ||
                  request.url.includes('googleapis.') ||
                  request.url.includes('vercel.') ||
                  request.url.includes('sentry.')
                ) {
                  return
                }
                print.warning()
              },
              serviceWorker: {
                url: '/mockServiceWorker.js',
              },
            })
            console.info(
              '🛠️ [MSW] Mock Service Worker enabled via NEXT_PUBLIC_API_MOCKING'
            )
            setMswReady(true)
          } catch (error) {
            console.error('[MSW] Failed to initialize:', error)
            setMswReady(true) // Still render children even if MSW fails
          }
        })
        .catch((error) => {
          console.error('[MSW] Failed to load MSW module:', error)
          setMswReady(true) // Still render children even if MSW fails
        })
    } else {
      // MSW not enabled, render immediately
      setMswReady(true)
    }
  }, [])

  // Always render children, but log MSW status
  useEffect(() => {
    if (mswReady) {
      console.info('[MSW] Provider ready, children rendered')
    }
  }, [mswReady])

  return <>{children}</>
}

// Wrapper component that handles the initialization
export function MSWProviderWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return <MSWProvider>{children}</MSWProvider>
}
