'use client'

import { useEffect } from 'react'
import { analytics } from '@/lib/analytics'
import { useAnalytics } from '@/hooks/use-analytics'

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  // Initialize analytics on mount
  useEffect(() => {
    analytics.initialize()

    // Clean up on unmount
    return () => {
      analytics.flush()
    }
  }, [])

  // Use analytics hook to track page views and user identification
  useAnalytics()

  return <>{children}</>
}
