'use client'

import { useEffect, useState } from 'react'

export function MSWProvider({ children }: { children: React.ReactNode }) {
  const [mswReady, setMswReady] = useState(false)

  useEffect(() => {
    const initMSW = async () => {
      if (
        process.env.NODE_ENV === 'development' ||
        process.env.NEXT_PUBLIC_ENABLE_MSW === 'true'
      ) {
        const { worker } = await import('./browser')

        await worker.start({
          onUnhandledRequest: 'bypass',
          serviceWorker: {
            url: '/mockServiceWorker.js',
          },
        })

        console.info('[MSW] Mock Service Worker started')
      }
      setMswReady(true)
    }

    initMSW()
  }, [])

  // Don't render children until MSW is ready in development
  if (
    !mswReady &&
    (process.env.NODE_ENV === 'development' ||
      process.env.NEXT_PUBLIC_ENABLE_MSW === 'true')
  ) {
    return null
  }

  return <>{children}</>
}
