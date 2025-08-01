'use client'

import { Suspense, use } from 'react'

let mockingEnabledPromise: Promise<void> | undefined

if (
  process.env.NODE_ENV === 'development' ||
  process.env.NEXT_PUBLIC_ENABLE_MSW === 'true'
) {
  if (typeof window !== 'undefined') {
    // Only run MSW in the browser
    mockingEnabledPromise = import('../mocks/browser')
      .then(async ({ worker }) => {
        await worker.start({
          onUnhandledRequest: 'bypass', // Don't warn about unhandled requests
          serviceWorker: {
            url: '/mockServiceWorker.js',
          },
        })
      })
      .catch((error) => {
        // Silently fail in production builds where MSW imports are aliased to false
        if (process.env.NODE_ENV === 'production') {
          console.warn('MSW not available in production build')
        } else {
          console.error('Failed to initialize MSW:', error)
        }
      })
  }
}

export function MSWProvider({ children }: { children: React.ReactNode }) {
  // If MSW is enabled, we need to wait for it to start
  if (mockingEnabledPromise) {
    use(mockingEnabledPromise)
  }

  return <>{children}</>
}

// Wrapper component that handles the suspense boundary
export function MSWProviderWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  if (
    process.env.NODE_ENV === 'development' ||
    process.env.NEXT_PUBLIC_ENABLE_MSW === 'true'
  ) {
    return (
      <Suspense fallback={null}>
        <MSWProvider>{children}</MSWProvider>
      </Suspense>
    )
  }

  return <>{children}</>
}
