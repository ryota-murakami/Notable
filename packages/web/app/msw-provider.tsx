'use client'

import { Suspense, use } from 'react'
import { env } from '../env'

let mockingEnabledPromise: Promise<void> | undefined

if (
  process.env.NODE_ENV === 'development' ||
  env.NEXT_PUBLIC_API_MOCKING === 'enabled'
) {
  if (typeof window !== 'undefined') {
    // Only run MSW in the browser
    mockingEnabledPromise = import('../mocks/browser').then(
      async ({ worker }) => {
        await worker.start({
          onUnhandledRequest: 'bypass', // Don't warn about unhandled requests
          serviceWorker: {
            url: '/mockServiceWorker.js',
          },
        })
      }
    )
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
    env.NEXT_PUBLIC_API_MOCKING === 'enabled'
  ) {
    return (
      <Suspense fallback={null}>
        <MSWProvider>{children}</MSWProvider>
      </Suspense>
    )
  }

  return <>{children}</>
}
