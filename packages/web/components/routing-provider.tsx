'use client'

import { useEffect, ReactNode, Suspense, Component, ErrorInfo } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { initializePlatformRouting } from '@notable/routing'
import { webAdapter } from '@notable/routing'

interface RoutingProviderProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

class RoutingErrorBoundary extends Component<
  { children: ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Routing initialization failed:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='flex items-center justify-center h-screen'>
          <div className='text-center'>
            <h2 className='text-lg font-semibold text-red-600 mb-2'>
              Routing Error
            </h2>
            <p className='text-muted-foreground mb-4'>
              Failed to initialize routing system
            </p>
            <button
              onClick={() => window.location.reload()}
              className='px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90'
            >
              Reload Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

function RoutingProviderInner({ children }: RoutingProviderProps) {
  // In test mode, skip all routing logic entirely
  const isTestMode =
    process.env.NODE_ENV === 'test' ||
    (typeof window !== 'undefined' &&
      document.cookie.includes('dev-auth-bypass=true'))

  // If in test mode, just render children without any routing logic
  if (isTestMode) {
    return <>{children}</>
  }

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    try {
      // Initialize platform routing for web
      const { cleanup } = initializePlatformRouting('web', {
        router,
      })

      // Update the web adapter with current location
      webAdapter.setRouter(router)
      webAdapter.setCurrentLocation(pathname, searchParams)

      return cleanup
    } catch (error) {
      console.error('Failed to initialize routing:', error)
      // Don't throw in production, just log the error
    }
  }, [router, pathname, searchParams])

  // Update current location when pathname or search params change
  useEffect(() => {
    try {
      webAdapter.setCurrentLocation(pathname, searchParams)
    } catch (error) {
      console.error('Failed to update location:', error)
    }
  }, [pathname, searchParams])

  return <>{children}</>
}

export function RoutingProvider({ children }: RoutingProviderProps) {
  return (
    <RoutingErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <RoutingProviderInner>{children}</RoutingProviderInner>
      </Suspense>
    </RoutingErrorBoundary>
  )
}
