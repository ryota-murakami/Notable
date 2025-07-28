import { useCallback } from 'react'

export interface Analytics {
  track: (event: string, properties?: Record<string, any>) => void
  identify: (userId: string, traits?: Record<string, any>) => void
  page: (name?: string, properties?: Record<string, any>) => void
  interaction: (type: string, element: string, properties?: Record<string, any>) => void
  pageView: (page: string, properties?: Record<string, any>) => void
  usage: (feature: string, properties?: Record<string, any>) => void
  setConsent: (consent: boolean) => void
  setUser: (userId: string, properties?: Record<string, any>) => void
}

export function useAnalytics(): Analytics {
  const track = useCallback((event: string, properties?: Record<string, any>) => {
    // Stub implementation - in production this would call analytics service
    console.info('[Analytics] Track:', event, properties)
  }, [])

  const identify = useCallback((userId: string, traits?: Record<string, any>) => {
    console.info('[Analytics] Identify:', userId, traits)
  }, [])

  const page = useCallback((name?: string, properties?: Record<string, any>) => {
    console.info('[Analytics] Page:', name, properties)
  }, [])

  const interaction = useCallback((type: string, element: string, properties?: Record<string, any>) => {
    console.info('[Analytics] Interaction:', type, element, properties)
  }, [])

  const pageView = useCallback((page: string, properties?: Record<string, any>) => {
    console.info('[Analytics] PageView:', page, properties)
  }, [])

  const usage = useCallback((feature: string, properties?: Record<string, any>) => {
    console.info('[Analytics] Usage:', feature, properties)
  }, [])

  const setConsent = useCallback((consent: boolean) => {
    console.info('[Analytics] Consent:', consent)
  }, [])

  const setUser = useCallback((userId: string, properties?: Record<string, any>) => {
    console.info('[Analytics] SetUser:', userId, properties)
  }, [])

  return {
    track,
    identify,
    page,
    interaction,
    pageView,
    usage,
    setConsent,
    setUser,
  }
}