import { useCallback } from 'react'
import { analytics } from '@/lib/analytics'

export interface Analytics {
  track: (event: string, properties?: Record<string, any>) => void
  identify: (userId: string, traits?: Record<string, any>) => void
  trackPageView: (page: string, properties?: Record<string, any>) => void
  trackInteraction: (type: string, element: string, properties?: Record<string, any>) => void
  trackFeatureUsage: (feature: string, duration: number, properties?: Record<string, any>) => void
  setConsent: (consent: boolean) => void
  setUser: (userId: string, properties?: Record<string, any>) => void
  trackPerformance: (metric: string, value: number, unit: string, properties?: Record<string, any>) => void
  trackError: (error: Error, context?: Record<string, any>) => void
  trackClick: (element: string, properties?: Record<string, any>) => void
  trackFormSubmit: (form: string, properties?: Record<string, any>) => void
  startTimer: (name: string) => () => void
}

export function useAnalytics(): Analytics {
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


  const trackError = useCallback((error: Error, context?: Record<string, any>) => {
    analytics.error(error, context)
  }, [])

  const trackClick = useCallback((element: string, properties?: Record<string, any>) => {
    analytics.interaction('click', element, properties)
  }, [])

  const trackFormSubmit = useCallback((form: string, properties?: Record<string, any>) => {
    analytics.interaction('form_submit', form, properties)
  }, [])

  const startTimer = useCallback((name: string) => {
    return analytics.startTimer(name)
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
export function useComponentPerformance() {
  const analytics = useAnalytics()
  return {
    measureComponent: useCallback((componentName: string, renderTime: number) => {
      analytics.trackPerformance('component_render', renderTime, 'ms', { component: componentName })
    }, [analytics]),
  }
}

export function useFeatureTracking() {
  const analytics = useAnalytics()
  return {
    trackFeature: useCallback((feature: string, properties?: Record<string, any>) => {
      analytics.trackFeatureUsage(feature, 0, properties)
    }, [analytics]),
    startTracking: useCallback((feature: string, properties?: Record<string, any>) => {
      console.info('[Analytics] Start tracking:', feature, properties)
    }, []),
    endTracking: useCallback((feature: string, properties?: Record<string, any>) => {
      console.info('[Analytics] End tracking:', feature, properties)
    }, []),
    trackUsage: useCallback((feature: string) => {
      analytics.trackFeatureUsage(feature, 0)
    }, [analytics]),
  }
}

export function usePageTracking() {
  const analytics = useAnalytics()
  return {
    trackPage: useCallback((page: string, properties?: Record<string, any>) => {
      analytics.trackPageView(page, properties)
    }, [analytics]),
  }
}