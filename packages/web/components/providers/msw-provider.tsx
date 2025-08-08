'use client'

import React, { useEffect, useState } from 'react'
import { setupServer } from 'msw/node'
import { handlers } from '@/mocks/handlers'

interface MSWProviderProps {
  children: React.ReactNode
}

/**
 * MSW Provider that initializes Mock Service Worker for API mocking
 * Following Next.js 15 and React 19 best practices
 *
 * Features:
 * - Client-side service worker setup with proper error handling
 * - Server-side node server setup for SSR compatibility
 * - Environment-based conditional loading
 * - Graceful degradation when MSW fails to initialize
 * - TypeScript support with proper typing
 * - Performance optimized with lazy loading
 */
const MSWProvider = React.memo(({ children }: MSWProviderProps) => {
  const [isMSWReady, setIsMSWReady] = useState(false)
  const [initError, setInitError] = useState<string | null>(null)

  useEffect(() => {
    let cleanup: (() => void) | undefined

    const initializeMSW = async () => {
      // Check if MSW should be enabled
      const shouldEnableMSW =
        process.env.NEXT_PUBLIC_API_MOCKING === 'enabled' ||
        process.env.NODE_ENV === 'test'

      if (!shouldEnableMSW) {
        console.info('🔒 MSW disabled - API mocking not enabled')
        setIsMSWReady(true)
        return
      }

      try {
        // Server-side setup (Node.js environment)
        if (typeof window === 'undefined') {
          console.info('🌐 Initializing MSW for server-side rendering...')
          const server = setupServer(...handlers)
          await server.listen({
            onUnhandledRequest: 'bypass',
          })

          cleanup = () => {
            server.close()
          }

          console.info('✅ MSW server initialized for SSR')
          setIsMSWReady(true)
          return
        }

        // Client-side setup (Browser environment)
        console.info('🚀 Initializing MSW for client-side...')

        // Check if service worker is supported
        if (!('serviceWorker' in navigator)) {
          throw new Error('Service Worker not supported in this browser')
        }

        // Dynamic import to avoid SSR issues
        const { worker } = await import('@/mocks/browser')

        // Start the service worker with enhanced configuration
        await worker.start({
          serviceWorker: {
            // Use the public service worker file
            url: '/mockServiceWorker.js',
            // Enable service worker updates
            options: {
              scope: '/',
            },
          },
          // Handle unmatched requests gracefully
          onUnhandledRequest(request, print) {
            // Only warn about unhandled API requests, not static assets
            if (
              request.url.includes('/api/') ||
              request.url.includes('/auth/')
            ) {
              console.warn(
                `🚨 Unhandled MSW request: ${request.method} ${request.url}`
              )
              print.warning()
            }
            // Let other requests pass through
          },
          // Quiet startup for better UX
          quiet: process.env.NODE_ENV === 'test',
        })

        // Set up cleanup function
        cleanup = () => {
          worker.stop()
          console.info('🛑 MSW worker stopped')
        }

        console.info('✅ MSW initialized successfully for client-side')
        console.info(`📊 Loaded ${handlers.length} request handlers`)

        // Log enabled features in development
        if (process.env.NODE_ENV === 'development') {
          console.info('🛠️ MSW Features Enabled:')
          console.info('• API request interception')
          console.info('• Authentication mocking')
          console.info('• Database operation simulation')
          console.info('• External service mocking (OAuth, Resend, etc.)')
          console.info('• Real-time features simulation')
        }

        setIsMSWReady(true)
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : 'Unknown error'
        console.error('❌ Failed to initialize MSW:', errorMessage)
        setInitError(errorMessage)

        // Don't block the app if MSW fails - graceful degradation
        setIsMSWReady(true)
      }
    }

    // Initialize MSW
    initializeMSW()

    // Cleanup on unmount
    return () => {
      if (cleanup) {
        cleanup()
      }
    }
  }, [])

  // Show loading state only in development to avoid flash
  if (!isMSWReady && process.env.NODE_ENV === 'development') {
    return (
      <div className='fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center'>
        <div className='bg-card p-6 rounded-lg shadow-lg border max-w-sm text-center'>
          <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4'></div>
          <h3 className='font-semibold text-lg mb-2'>
            Initializing Mock Services
          </h3>
          <p className='text-muted-foreground text-sm'>
            Setting up API mocking for development...
          </p>
        </div>
      </div>
    )
  }

  // Show error state in development
  if (initError && process.env.NODE_ENV === 'development') {
    return (
      <div className='fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center'>
        <div className='bg-destructive/10 border-destructive p-6 rounded-lg shadow-lg border max-w-md text-center'>
          <div className='text-destructive text-4xl mb-4'>⚠️</div>
          <h3 className='font-semibold text-lg mb-2 text-destructive'>
            MSW Initialization Failed
          </h3>
          <p className='text-muted-foreground text-sm mb-4'>
            Mock Service Worker failed to start: {initError}
          </p>
          <p className='text-xs text-muted-foreground'>
            The app will continue to work, but API mocking may not be available.
          </p>
          <button
            onClick={() => setInitError(null)}
            className='mt-4 px-4 py-2 bg-destructive text-destructive-foreground rounded-md text-sm hover:bg-destructive/90 transition-colors'
          >
            Continue Anyway
          </button>
        </div>
      </div>
    )
  }

  return <>{children}</>
})

MSWProvider.displayName = 'MSWProvider'

/**
 * Hook to check MSW status
 */
export const useMSWStatus = () => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const checkMSWStatus = () => {
      const shouldBeActive =
        process.env.NEXT_PUBLIC_API_MOCKING === 'enabled' ||
        process.env.NODE_ENV === 'test'

      setIsActive(shouldBeActive)
    }

    checkMSWStatus()
  }, [])

  return { isActive }
}

/**
 * Utility function to conditionally enable MSW features
 */
export const withMSW = <T,>(enabledValue: T, disabledValue: T): T => {
  const shouldEnable =
    process.env.NEXT_PUBLIC_API_MOCKING === 'enabled' ||
    process.env.NODE_ENV === 'test'

  return shouldEnable ? enabledValue : disabledValue
}

export { MSWProvider }
