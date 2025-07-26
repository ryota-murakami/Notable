/**
 * React hook for analytics integration
 * Provides easy access to analytics functionality with React patterns
 */

import { useCallback, useEffect, useRef } from 'react'
import { analytics, type AnalyticsConfig } from '@/lib/analytics'
import { performanceMonitor } from '@/lib/performance'

export interface UseAnalyticsReturn {
  // Performance tracking
  trackPerformance: (
    name: string,
    value: number,
    unit?: string,
    metadata?: Record<string, unknown>
  ) => void
  measureAsync: <T>(name: string, operation: () => Promise<T>) => Promise<T>
  startTimer: (name: string) => () => number

  // User interactions
  trackInteraction: (
    action: string,
    element?: string,
    properties?: Record<string, unknown>
  ) => void
  trackClick: (element: string, properties?: Record<string, unknown>) => void
  trackFormSubmit: (
    formName: string,
    properties?: Record<string, unknown>
  ) => void

  // Page tracking
  trackPageView: (path?: string, properties?: Record<string, unknown>) => void

  // Feature usage
  trackFeatureUsage: (
    feature: string,
    duration?: number,
    metadata?: Record<string, unknown>
  ) => void

  // Error tracking
  trackError: (
    error: Error | string,
    context?: Record<string, unknown>,
    severity?: 'low' | 'medium' | 'high' | 'critical'
  ) => void

  // Configuration
  setConsent: (granted: boolean) => void
  setUser: (userId: string, properties?: Record<string, unknown>) => void
  updateConfig: (config: Partial<AnalyticsConfig>) => void

  // Utilities
  resetSession: () => void
  exportData: () => any
  deleteUserData: () => void
}

/**
 * Hook for analytics integration
 */
export const useAnalytics = (): UseAnalyticsReturn => {
  const timersRef = useRef<Map<string, number>>(new Map())

  // Performance tracking
  const trackPerformance = useCallback(
    (
      name: string,
      value: number,
      unit: string = 'ms',
      metadata?: Record<string, unknown>
    ) => {
      analytics.performance(name, value, unit as any, metadata)
    },
    []
  )

  const measureAsync = useCallback(
    async <T>(name: string, operation: () => Promise<T>): Promise<T> => {
      return performanceMonitor.measureAsync(name, operation)
    },
    []
  )

  const startTimer = useCallback(
    (name: string) => {
      const startTime = performance.now()
      timersRef.current.set(name, startTime)

      return () => {
        const endTime = performance.now()
        const duration = endTime - startTime
        timersRef.current.delete(name)
        trackPerformance(name, duration, 'ms')
        return duration
      }
    },
    [trackPerformance]
  )

  // Cleanup effect to clear any remaining timers
  useEffect(() => {
    return () => {
      timersRef.current.clear()
    }
  }, [])

  // User interactions
  const trackInteraction = useCallback(
    (
      action: string,
      element?: string,
      properties?: Record<string, unknown>
    ) => {
      analytics.interaction(action, element, properties)
    },
    []
  )

  const trackClick = useCallback(
    (element: string, properties?: Record<string, unknown>) => {
      trackInteraction('click', element, properties)
    },
    [trackInteraction]
  )

  const trackFormSubmit = useCallback(
    (formName: string, properties?: Record<string, unknown>) => {
      trackInteraction('form_submit', formName, properties)
    },
    [trackInteraction]
  )

  // Page tracking
  const trackPageView = useCallback(
    (path?: string, properties?: Record<string, unknown>) => {
      analytics.pageView(path, properties)
    },
    []
  )

  // Feature usage
  const trackFeatureUsage = useCallback(
    (
      feature: string,
      duration?: number,
      metadata?: Record<string, unknown>
    ) => {
      analytics.usage(feature, duration, metadata)
    },
    []
  )

  // Error tracking
  const trackError = useCallback(
    (
      error: Error | string,
      context?: Record<string, unknown>,
      severity: 'low' | 'medium' | 'high' | 'critical' = 'medium'
    ) => {
      analytics.error(error, context, severity)
    },
    []
  )

  // Configuration
  const setConsent = useCallback((granted: boolean) => {
    analytics.setConsent(granted)
  }, [])

  const setUser = useCallback(
    (userId: string, properties?: Record<string, unknown>) => {
      analytics.setUser(userId, properties)
    },
    []
  )

  const updateConfig = useCallback((config: Partial<AnalyticsConfig>) => {
    analytics.updateConfig(config)
  }, [])

  // Utilities
  const resetSession = useCallback(() => {
    analytics.resetSession()
  }, [])

  const exportData = useCallback(() => {
    return analytics.exportData()
  }, [])

  const deleteUserData = useCallback(() => {
    analytics.deleteUserData()
  }, [])

  return {
    trackPerformance,
    measureAsync,
    startTimer,
    trackInteraction,
    trackClick,
    trackFormSubmit,
    trackPageView,
    trackFeatureUsage,
    trackError,
    setConsent,
    setUser,
    updateConfig,
    resetSession,
    exportData,
    deleteUserData,
  }
}

/**
 * Hook to track component mount/unmount performance
 */
export const useComponentPerformance = (componentName: string) => {
  const { trackPerformance } = useAnalytics()
  const startTimeRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    startTimeRef.current = performance.now()

    return () => {
      if (startTimeRef.current) {
        const duration = performance.now() - startTimeRef.current
        trackPerformance(`component_${componentName}_lifetime`, duration, 'ms')
      }
    }
  }, [componentName, trackPerformance])
}

/**
 * Hook to track page view automatically
 */
export const usePageTracking = (
  pageName?: string,
  additionalProperties?: Record<string, unknown>
) => {
  const { trackPageView } = useAnalytics()

  useEffect(() => {
    trackPageView(pageName, additionalProperties)
  }, [pageName, additionalProperties, trackPageView])
}

/**
 * Hook to track feature usage with automatic duration measurement
 */
export const useFeatureTracking = (featureName: string) => {
  const { trackFeatureUsage } = useAnalytics()
  const startTimeRef = useRef<number | undefined>(undefined)

  const startTracking = useCallback(
    (metadata?: Record<string, unknown>) => {
      startTimeRef.current = performance.now()
      trackFeatureUsage(`${featureName}_start`, undefined, metadata)
    },
    [featureName, trackFeatureUsage]
  )

  const endTracking = useCallback(
    (metadata?: Record<string, unknown>) => {
      if (startTimeRef.current) {
        const duration = performance.now() - startTimeRef.current
        trackFeatureUsage(`${featureName}_end`, duration, metadata)
        startTimeRef.current = undefined
      }
    },
    [featureName, trackFeatureUsage]
  )

  const trackUsage = useCallback(
    (metadata?: Record<string, unknown>) => {
      trackFeatureUsage(featureName, undefined, metadata)
    },
    [featureName, trackFeatureUsage]
  )

  return {
    startTracking,
    endTracking,
    trackUsage,
  }
}

/**
 * Hook to automatically track errors in a component
 */
export const useErrorTracking = (componentName: string) => {
  const { trackError } = useAnalytics()

  const trackComponentError = useCallback(
    (
      error: Error | string,
      context?: Record<string, unknown>,
      severity?: 'low' | 'medium' | 'high' | 'critical'
    ) => {
      trackError(
        error,
        {
          component: componentName,
          ...context,
        },
        severity
      )
    },
    [componentName, trackError]
  )

  return { trackError: trackComponentError }
}
