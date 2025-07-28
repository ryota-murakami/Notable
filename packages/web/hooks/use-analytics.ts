import { useCallback, useEffect } from 'react'
import { analytics } from '@/lib/analytics'

export interface AnalyticsHook {
  track: (event: string, properties?: Record<string, any>) => void
  identify: (userId: string, traits?: Record<string, any>) => void
  trackPageView: (page: string, properties?: Record<string, any>) => void
  trackInteraction: (type: string, element: string, properties?: Record<string, any>) => void
  trackFeatureUsage: (feature: string, duration: number, properties?: Record<string, any>) => void
  setConsent: (consent: boolean) => void
  setUser: (userId: string, properties?: Record<string, any>) => void
  trackPerformance: (metric: string, value: number, unit: string, properties?: Record<string, any>) => void
  trackError: (error: Error, context?: Record<string, any>, priority?: string) => void
  trackClick: (element: string, properties?: Record<string, any>) => void
  trackFormSubmit: (form: string, properties?: Record<string, any>) => void
  startTimer: (name: string) => () => number
}

export function useAnalytics(): AnalyticsHook {
  const track = useCallback((event: string, properties?: Record<string, any>) => {
    // Stub implementation - in production this would call analytics service
    console.info('[Analytics] Track:', event, properties)
  }, [])

  const identify = useCallback((userId: string, traits?: Record<string, any>) => {
    console.info('[Analytics] Identify:', userId, traits)
  }, [])

  const trackPageView = useCallback((page: string, properties?: Record<string, any>) => {
    analytics.pageView(page, properties)
  }, [])

  const trackInteraction = useCallback((type: string, element: string, properties?: Record<string, any>) => {
    analytics.interaction(type, element, properties)
  }, [])

  const trackFeatureUsage = useCallback((feature: string, duration: number, properties?: Record<string, any>) => {
    analytics.usage(feature, duration, properties)
  }, [])

  const setConsent = useCallback((consent: boolean) => {
    console.info('[Analytics] Consent:', consent)
  }, [])

  const setUser = useCallback((userId: string, properties?: Record<string, any>) => {
    console.info('[Analytics] SetUser:', userId, properties)
  }, [])

  const trackPerformance = useCallback((metric: string, value: number, unit: string, properties?: Record<string, any>) => {
    analytics.performance(metric, value, unit, properties)
  }, [])


  const trackError = useCallback((error: Error, context?: Record<string, any>, priority?: string) => {
    analytics.error(error, { ...context, priority })
  }, [])

  const trackClick = useCallback((element: string, properties?: Record<string, any>) => {
    analytics.interaction('click', element, properties)
  }, [])

  const trackFormSubmit = useCallback((form: string, properties?: Record<string, any>) => {
    analytics.interaction('form_submit', form, properties)
  }, [])

  const startTimer = useCallback((name: string) => {
    const stopTimer = analytics.startTimer(name)
    return () => {
      stopTimer()
      return Date.now() // Return a timestamp for compatibility
    }
  }, [])

  return {
    track,
    identify,
    trackPageView,
    trackInteraction,
    trackFeatureUsage,
    setConsent,
    setUser,
    trackPerformance,
    trackError,
    trackClick,
    trackFormSubmit,
    startTimer,
  }
}

// Additional hooks expected by the tests
export function useComponentPerformance(componentName?: string) {
  const analytics = useAnalytics()
  
  // Track component lifetime if component name is provided
  useEffect(() => {
    if (componentName) {
      const startTime = performance.now()
      return () => {
        const endTime = performance.now()
        const lifetime = endTime - startTime
        analytics.trackPerformance(`component_${componentName}_lifetime`, lifetime, 'ms')
      }
    }
  }, [componentName, analytics])
  
  return {
    measureComponent: useCallback((componentName: string, renderTime: number) => {
      analytics.trackPerformance('component_render', renderTime, 'ms', { component: componentName })
    }, [analytics]),
  }
}

export function useFeatureTracking(featureName?: string) {
  const analyticsHook = useAnalytics()
  return {
    trackFeature: useCallback((feature: string, properties?: Record<string, any>) => {
      analyticsHook.trackFeatureUsage(feature, 0, properties)
    }, [analyticsHook]),
    startTracking: useCallback((properties?: Record<string, any>) => {
      if (featureName) {
        analytics.usage(`${featureName}_start`, undefined, properties)
      }
    }, [featureName]),
    endTracking: useCallback((properties?: Record<string, any>) => {
      if (featureName) {
        analytics.usage(`${featureName}_end`, undefined, properties)
      }
    }, [featureName]),
    trackUsage: useCallback((properties?: Record<string, any>) => {
      if (featureName) {
        analytics.usage(featureName, undefined, properties)
      }
    }, [featureName]),
  }
}

export function usePageTracking(pageName?: string, properties?: Record<string, any>) {
  const analytics = useAnalytics()
  
  // Track page view when page name is provided
  useEffect(() => {
    if (pageName) {
      analytics.trackPageView(pageName, properties)
    }
  }, [pageName, properties, analytics])
  
  return {
    trackPage: useCallback((page: string, properties?: Record<string, any>) => {
      analytics.trackPageView(page, properties)
    }, [analytics]),
  }
}