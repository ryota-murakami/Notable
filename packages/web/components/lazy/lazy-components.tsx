/**
 * Lazy Loading Components
 * Performance-optimized component loading with suspense boundaries
 */

'use client'

import React, { type ComponentType, type ReactNode, Suspense } from 'react'
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
export function withLazyLoading<P extends object = Record<string, unknown>>(
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
  async () => {
    const mod = await import('@/components/performance/performance-dashboard')
    return {
      default: mod.PerformanceDashboard as ComponentType<
        Record<string, unknown>
      >,
    }
  },
  <CardSkeleton />
)

export const LazyBillingDashboard = withLazyLoading(
  async () => {
    const mod = await import('@/app/dashboard/billing/page')
    return { default: mod.default as ComponentType<Record<string, unknown>> }
  },
  <SpinnerLoader text='Loading billing dashboard...' />
)

export const LazyUpgradeDialog = withLazyLoading(
  async () => {
    const mod = await import('@/components/billing/upgrade-dialog')
    return {
      default: mod.UpgradeDialog as ComponentType<Record<string, unknown>>,
    }
  },
  <SpinnerLoader text='Loading upgrade options...' />
)

export const LazyUsageMeter = withLazyLoading(
  async () => {
    const mod = await import('@/components/billing/usage-meter')
    return { default: mod.UsageMeter as ComponentType<Record<string, unknown>> }
  },
  <CardSkeleton />
)

export const LazySubscriptionCard = withLazyLoading(
  async () => {
    const mod = await import('@/components/billing/subscription-card')
    return {
      default: mod.SubscriptionCard as ComponentType<Record<string, unknown>>,
    }
  },
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
    const element = ref.current
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback()
      }
    }, options)

    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
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
