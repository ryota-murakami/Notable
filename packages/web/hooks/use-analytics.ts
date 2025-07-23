import { useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import {
  analytics,
  trackEvent,
  trackPage,
  trackError,
  trackFeature,
  trackUserAction,
  identifyUser,
} from '@/lib/analytics'
import { useUser } from '@/hooks/use-user'

export function useAnalytics() {
  const pathname = usePathname()
  // Note: We're removing useSearchParams to avoid SSG issues
  // Search params will not be tracked in analytics
  const { user } = useUser()

  // Track page views
  useEffect(() => {
    // Skip if running on server
    if (typeof window === 'undefined') {
      return
    }

    const url = pathname + window.location.search
    trackPage({
      url,
      title: document.title,
      referrer: document.referrer,
      properties: {
        pathname,
        search: window.location.search,
      },
    })
  }, [pathname])

  // Identify user when authenticated
  useEffect(() => {
    if (user) {
      identifyUser({
        id: user.id,
        ...(user.email !== undefined && { email: user.email }),
        name: user.user_metadata?.name,
        properties: {
          created_at: user.created_at,
          ...(user.app_metadata?.provider !== undefined && {
            provider: user.app_metadata.provider,
          }),
        },
      })
    }
  }, [user])

  // Track feature usage
  const track = useCallback(
    (event: string, properties?: Record<string, any>) => {
      trackEvent(event, properties)
    },
    []
  )

  // Track errors with context
  const trackErrorWithContext = useCallback(
    (error: Error, context?: Record<string, any>) => {
      trackError(error, {
        pathname,
        userId: user?.id,
        ...context,
      })
    },
    [pathname, user]
  )

  // Track feature usage with automatic categorization
  const trackFeatureUsage = useCallback(
    (feature: string, action: string, properties?: Record<string, any>) => {
      trackFeature(feature, action, {
        pathname,
        userId: user?.id,
        ...properties,
      })
    },
    [pathname, user]
  )

  // Track user interactions
  const trackAction = useCallback(
    (action: string, target?: string, properties?: Record<string, any>) => {
      trackUserAction(action, target, {
        pathname,
        userId: user?.id,
        ...properties,
      })
    },
    [pathname, user]
  )

  return {
    track,
    trackError: trackErrorWithContext,
    trackFeature: trackFeatureUsage,
    trackAction,
    analytics,
  }
}

// Hook for tracking component mount/unmount
export function useComponentTracking(
  componentName: string,
  properties?: Record<string, any>
) {
  const { trackFeature } = useAnalytics()

  useEffect(() => {
    trackFeature(componentName, 'mounted', properties)

    return () => {
      trackFeature(componentName, 'unmounted', properties)
    }
  }, [componentName, trackFeature])
}

// Hook for tracking time spent
export function useTimeTracking(eventName: string) {
  const { track } = useAnalytics()
  const startTime = Date.now()

  useEffect(() => {
    return () => {
      const duration = Date.now() - startTime
      track(`${eventName}_duration`, {
        duration,
        duration_seconds: Math.round(duration / 1000),
      })
    }
  }, [eventName, startTime, track])
}

// Hook for tracking performance metrics
export function usePerformanceTracking(metricName: string) {
  const { track } = useAnalytics()

  const trackPerformance = useCallback(
    (value: number, unit: string = 'ms') => {
      track('performance_metric', {
        metric: metricName,
        value,
        unit,
      })
    },
    [metricName, track]
  )

  return trackPerformance
}
