/**
 * Lazy Loading Components
 * Performance-optimized component loading with suspense boundaries
 */

'use client'

import React, { Suspense, type ComponentType, type ReactNode } from 'react'
import dynamic from 'next/dynamic'
import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Loader2 } from 'lucide-react'

// Loading fallback components
export const ComponentSkeleton = ({
  className = '',
}: {
  className?: string
}) => (
  <div className={`space-y-3 ${className}`}>
    <Skeleton className='h-4 w-3/4' />
    <Skeleton className='h-4 w-1/2' />
    <Skeleton className='h-32' />
  </div>
)

export const CardSkeleton = () => (
  <Card>
    <CardHeader>
      <Skeleton className='h-6 w-1/3' />
      <Skeleton className='h-4 w-2/3' />
    </CardHeader>
    <CardContent>
      <ComponentSkeleton />
    </CardContent>
  </Card>
)

export const TableSkeleton = () => (
  <div className='space-y-2'>
    {[...Array(5)].map((_, i) => (
      <div key={i} className='flex space-x-4'>
        <Skeleton className='h-4 w-1/4' />
        <Skeleton className='h-4 w-1/3' />
        <Skeleton className='h-4 w-1/4' />
        <Skeleton className='h-4 w-1/6' />
      </div>
    ))}
  </div>
)

export const SpinnerLoader = ({ text = 'Loading...' }: { text?: string }) => (
  <div className='flex items-center justify-center py-8'>
    <div className='flex items-center space-x-2'>
      <Loader2 className='h-4 w-4 animate-spin' />
      <span className='text-sm text-muted-foreground'>{text}</span>
    </div>
  </div>
)

// HOC to wrap components with lazy loading and error boundaries
export function withLazyLoading<P extends object>(
  importFn: () => Promise<{ default: ComponentType<P> }>,
  fallback: ReactNode = <ComponentSkeleton />,
  errorFallback?: ReactNode
) {
  const LazyComponent = dynamic(importFn, {
    loading: () => <>{fallback}</>,
    ssr: false, // Disable SSR for lazy components to improve initial load
  })

  const WrappedComponent = (props: P) => (
    <Suspense fallback={fallback}>
      <ErrorBoundary fallback={errorFallback}>
        <LazyComponent {...props} />
      </ErrorBoundary>
    </Suspense>
  )

  return WrappedComponent
}

// Error boundary component for lazy loaded components
interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Lazy component error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <Card>
            <CardContent className='py-8 text-center'>
              <p className='text-sm text-muted-foreground'>
                Failed to load component
              </p>
              <button
                onClick={() => this.setState({ hasError: false })}
                className='mt-2 text-xs text-blue-600 hover:text-blue-800'
              >
                Try again
              </button>
            </CardContent>
          </Card>
        )
      )
    }

    return this.props.children
  }
}

// Lazy loaded components for performance optimization
export const LazyPerformanceDashboard = withLazyLoading(
  () =>
    import('@/components/performance/performance-dashboard').then((mod) => ({
      default: mod.PerformanceDashboard,
    })),
  <CardSkeleton />
)

export const LazyBillingDashboard = withLazyLoading(
  () => import('@/app/dashboard/billing/page'),
  <SpinnerLoader text='Loading billing dashboard...' />
)

export const LazyUpgradeDialog = withLazyLoading(
  () =>
    import('@/components/billing/upgrade-dialog').then((mod) => ({
      default: mod.UpgradeDialog,
    })),
  <SpinnerLoader text='Loading upgrade options...' />
)

export const LazyUsageMeter = withLazyLoading(
  () =>
    import('@/components/billing/usage-meter').then((mod) => ({
      default: mod.UsageMeter,
    })),
  <CardSkeleton />
)

export const LazySubscriptionCard = withLazyLoading(
  () =>
    import('@/components/billing/subscription-card').then((mod) => ({
      default: mod.SubscriptionCard,
    })),
  <CardSkeleton />
)

// Preload functions for hover interactions
export const preloadComponents = {
  performanceDashboard: () => {
    import('@/components/performance/performance-dashboard')
  },

  billingDashboard: () => {
    import('@/app/dashboard/billing/page')
  },

  upgradeDialog: () => {
    import('@/components/billing/upgrade-dialog')
  },

  usageMeter: () => {
    import('@/components/billing/usage-meter')
  },

  subscriptionCard: () => {
    import('@/components/billing/subscription-card')
  },
}

// Hook for component preloading on hover
export function useComponentPreload() {
  const preload = (componentName: keyof typeof preloadComponents) => {
    try {
      preloadComponents[componentName]()
    } catch (error) {
      console.warn('Failed to preload component:', componentName, error)
    }
  }

  return { preload }
}

// Intersection Observer hook for lazy loading trigger
export function useIntersectionObserver(
  callback: () => void,
  options: IntersectionObserverInit = { threshold: 0.1 }
) {
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback()
      }
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [callback, options])

  return ref
}

// Component for triggering lazy loads when in viewport
export function LazyTrigger({
  onInView,
  children,
  className = '',
}: {
  onInView: () => void
  children?: ReactNode
  className?: string
}) {
  const ref = useIntersectionObserver(onInView)

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
