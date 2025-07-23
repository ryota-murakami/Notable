'use client'

import { useEffect, Suspense } from 'react'
import { analytics } from '@/lib/analytics'
import { useAnalytics } from '@/hooks/use-analytics'

// Inner component that uses useAnalytics (which uses useSearchParams)
function AnalyticsTracker() {
  // Use analytics hook to track page views and user identification
  useAnalytics()
  return null
}

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  // Initialize analytics on mount
  useEffect(() => {
    analytics.initialize()

    // Clean up on unmount
    return () => {
      analytics.flush()
    }
  }, [])

  return (
    <>
      <Suspense fallback={null}>
        <AnalyticsTracker />
      </Suspense>
      {children}
    </>
  )
}
