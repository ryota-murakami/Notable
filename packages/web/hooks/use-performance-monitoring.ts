/**
 * Performance Monitoring Hooks
 * Real-time performance tracking with React Query integration
 */

'use client'

import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { queryKeys, queryConfigs } from '@/lib/react-query'

// Web Vitals tracking
interface WebVitalsMetrics {
  CLS: number | null
  FID: number | null
  FCP: number | null
  LCP: number | null
  TTFB: number | null
  INP: number | null
}

// Performance monitoring hook
export function usePerformanceMonitoring() {
  const [metrics, setMetrics] = useState<WebVitalsMetrics>({
    CLS: null,
    FID: null,
    FCP: null,
    LCP: null,
    TTFB: null,
    INP: null,
  })

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Import web-vitals dynamically to avoid SSR issues
    import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
      onCLS((metric: any) => {
        setMetrics((prev) => ({ ...prev, CLS: metric.value }))
        reportMetric('CLS', metric.value)
      })

      onFCP((metric: any) => {
        setMetrics((prev) => ({ ...prev, FCP: metric.value }))
        reportMetric('FCP', metric.value)
      })

      // FID is deprecated in favor of INP

      onLCP((metric: any) => {
        setMetrics((prev) => ({ ...prev, LCP: metric.value }))
        reportMetric('LCP', metric.value)
      })

      onTTFB((metric: any) => {
        setMetrics((prev) => ({ ...prev, TTFB: metric.value }))
        reportMetric('TTFB', metric.value)
      })

      onINP((metric: any) => {
        setMetrics((prev) => ({ ...prev, INP: metric.value }))
        reportMetric('INP', metric.value)
      })

      setIsLoading(false)
    })
  }, [])

  // Report metric to analytics service
  const reportMetric = (name: string, value: number) => {
    // Report to your analytics service
    if (typeof window !== 'undefined' && 'gtag' in window) {
      ;(window as any).gtag('event', name, {
        event_category: 'Web Vitals',
        value: Math.round(value),
        non_interaction: true,
      })
    }

    // Log performance issues
    const thresholds = {
      CLS: 0.1,
      FID: 100,
      FCP: 1800,
      LCP: 2500,
      TTFB: 800,
      INP: 200,
    }

    if (value > (thresholds as any)[name]) {
      console.warn(`Performance issue detected: ${name} = ${value}`)
    }
  }

  return {
    metrics,
    isLoading,
    isPerformanceGood: Object.entries(metrics).every(([key, value]) => {
      if (value === null) return true
      const thresholds = {
        CLS: 0.1,
        FID: 100,
        FCP: 1800,
        LCP: 2500,
        TTFB: 800,
        INP: 200,
      }
      return value <= (thresholds as any)[key]
    }),
  }
}

// Query performance tracking hook
export function useQueryPerformanceTracking() {
  const queryClient = useQueryClient()
  const [queryMetrics, setQueryMetrics] = useState<
    Record<
      string,
      {
        duration: number
        status: 'success' | 'error' | 'loading'
        timestamp: number
      }
    >
  >({})

  useEffect(() => {
    const cache = queryClient.getQueryCache()

    // Track query performance
    const unsubscribe = cache.subscribe((event) => {
      if (event?.type === 'updated') {
        const query = event.query
        const queryKey = JSON.stringify(query.queryKey)
        const state = query.state

        setQueryMetrics((prev) => ({
          ...prev,
          [queryKey]: {
            duration:
              state.dataUpdatedAt -
                (state.fetchFailureReason as any)?.timestamp || 0,
            status: state.status,
            timestamp: Date.now(),
          },
        }))

        // Alert on slow queries
        const duration =
          state.dataUpdatedAt - (state.fetchFailureReason as any)?.timestamp ||
          0
        if (duration > 2000) {
          console.warn(`Slow query detected: ${queryKey} took ${duration}ms`)
        }
      }
    })

    return unsubscribe
  }, [queryClient])

  return {
    queryMetrics,
    slowQueries: Object.entries(queryMetrics).filter(
      ([, metric]) => metric.duration > 1000
    ),
    averageQueryTime:
      Object.values(queryMetrics).reduce(
        (acc, metric) => acc + metric.duration,
        0
      ) / Object.keys(queryMetrics).length || 0,
  }
}

// Memory usage tracking hook
export function useMemoryMonitoring() {
  const [memoryInfo, setMemoryInfo] = useState<{
    usedJSHeapSize: number
    totalJSHeapSize: number
    jsHeapSizeLimit: number
  } | null>(null)

  useEffect(() => {
    const updateMemoryInfo = () => {
      if ('memory' in performance && (performance as any).memory) {
        setMemoryInfo({
          usedJSHeapSize: (performance as any).memory.usedJSHeapSize,
          totalJSHeapSize: (performance as any).memory.totalJSHeapSize,
          jsHeapSizeLimit: (performance as any).memory.jsHeapSizeLimit,
        })
      }
    }

    // Update immediately
    updateMemoryInfo()

    // Update every 5 seconds
    const interval = setInterval(updateMemoryInfo, 5000)

    return () => clearInterval(interval)
  }, [])

  return {
    memoryInfo,
    memoryUsagePercent: memoryInfo
      ? (memoryInfo.usedJSHeapSize / memoryInfo.jsHeapSizeLimit) * 100
      : 0,
    isMemoryPressure: memoryInfo
      ? memoryInfo.usedJSHeapSize / memoryInfo.jsHeapSizeLimit > 0.8
      : false,
  }
}

// Real-time performance monitoring dashboard data
export function usePerformanceDashboard() {
  const webVitals = usePerformanceMonitoring()
  const queryPerformance = useQueryPerformanceTracking()
  const memoryUsage = useMemoryMonitoring()

  // Fetch performance metrics from API
  const { data: serverMetrics, isLoading } = useQuery({
    queryKey: queryKeys.performance.vitals(),
    queryFn: async () => {
      const response = await fetch('/api/performance/metrics')
      if (!response.ok) throw new Error('Failed to fetch performance metrics')
      return response.json()
    },
    ...queryConfigs.realtime,
  })

  return {
    webVitals,
    queryPerformance,
    memoryUsage,
    serverMetrics,
    isLoading: webVitals.isLoading || isLoading,
    overallScore: calculatePerformanceScore({
      webVitals: webVitals.metrics,
      memoryUsage: memoryUsage.memoryUsagePercent,
      queryTime: queryPerformance.averageQueryTime,
    }),
  }
}

// Calculate overall performance score
function calculatePerformanceScore({
  webVitals,
  memoryUsage,
  queryTime,
}: {
  webVitals: WebVitalsMetrics
  memoryUsage: number
  queryTime: number
}): number {
  let score = 100

  // Deduct points for poor web vitals
  if (webVitals.LCP && webVitals.LCP > 2500) score -= 20
  if (webVitals.FID && webVitals.FID > 100) score -= 15
  if (webVitals.CLS && webVitals.CLS > 0.1) score -= 15
  if (webVitals.FCP && webVitals.FCP > 1800) score -= 10
  if (webVitals.TTFB && webVitals.TTFB > 800) score -= 10

  // Deduct points for high memory usage
  if (memoryUsage > 80) score -= 15
  else if (memoryUsage > 60) score -= 10

  // Deduct points for slow queries
  if (queryTime > 2000) score -= 15
  else if (queryTime > 1000) score -= 10

  return Math.max(0, score)
}

// Performance alert hook
export function usePerformanceAlerts() {
  const dashboard = usePerformanceDashboard()
  const [alerts, setAlerts] = useState<
    Array<{
      id: string
      type: 'warning' | 'error'
      message: string
      timestamp: number
    }>
  >([])

  useEffect(() => {
    const newAlerts: typeof alerts = []

    // Check for performance issues
    if (dashboard.overallScore < 70) {
      newAlerts.push({
        id: 'low-performance-score',
        type: 'warning',
        message: `Performance score is low: ${dashboard.overallScore}/100`,
        timestamp: Date.now(),
      })
    }

    if (dashboard.memoryUsage.isMemoryPressure) {
      newAlerts.push({
        id: 'memory-pressure',
        type: 'error',
        message: `High memory usage: ${dashboard.memoryUsage.memoryUsagePercent.toFixed(1)}%`,
        timestamp: Date.now(),
      })
    }

    if (dashboard.queryPerformance.slowQueries.length > 0) {
      newAlerts.push({
        id: 'slow-queries',
        type: 'warning',
        message: `${dashboard.queryPerformance.slowQueries.length} slow queries detected`,
        timestamp: Date.now(),
      })
    }

    setAlerts(newAlerts)
  }, [dashboard])

  return {
    alerts,
    hasAlerts: alerts.length > 0,
    criticalAlerts: alerts.filter((alert) => alert.type === 'error'),
  }
}
