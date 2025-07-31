'use client'

import { Suspense } from 'react'

let mockingPromise: Promise<void> | null = null

async function initializeMSW() {
  if (typeof window === 'undefined') return
  if (process.env.NODE_ENV !== 'development') return
  
  try {
    // Direct import, but protected by NODE_ENV check
    const { worker } = await import('../mocks/browser')
    await worker.start({
      onUnhandledRequest: 'bypass',
      serviceWorker: {
        url: '/mockServiceWorker.js',
      },
    })
  } catch (error) {
    console.error('Failed to initialize MSW:', error)
  }
}

export function MSWProvider({ children }: { children: React.ReactNode }) {
  // Initialize MSW on first render in development only
  if (process.env.NODE_ENV === 'development' && !mockingPromise) {
    mockingPromise = initializeMSW()
  }

  return <>{children}</>
}

// Wrapper component that handles the suspense boundary
export function MSWProviderWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  // Only use MSW in development
  if (process.env.NODE_ENV === 'development') {
    return (
      <Suspense fallback={null}>
        <MSWProvider>{children}</MSWProvider>
      </Suspense>
    )
  }

  return <>{children}</>
}
