/**
 * Performance monitoring provider
 * Integrates performance monitoring throughout the application
 */

'use client'

import React, { createContext, useContext, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { performanceMonitor } from '@/lib/performance'
import { memoryMonitor } from '@/lib/memory-monitor'
// import { useAnalytics } from '@/lib/analytics'

interface PerformanceContextValue {
  performanceMonitor: typeof performanceMonitor
  memoryMonitor: typeof memoryMonitor
}

const PerformanceContext = createContext<PerformanceContextValue | null>(null)

interface PerformanceProviderProps {
  children: React.ReactNode
  enableMemoryMonitoring?: boolean
  memoryMonitoringInterval?: number
}

export function PerformanceProvider({
  children,
  enableMemoryMonitoring = true,
  memoryMonitoringInterval = 10000, // 10 seconds
}: PerformanceProviderProps) {
  const pathname = usePathname()
  // const analytics = useAnalytics()
  const pageLoadTimeRef = useRef<number>()

  // Initialize performance monitoring with analytics
  // useEffect(() => {
  //   (performanceMonitor as any).analytics = analytics
  // }, [analytics])

  // Monitor memory if enabled
  useEffect(() => {
    if (enableMemoryMonitoring) {
      memoryMonitor.startMonitoring(memoryMonitoringInterval)

      return () => {
        memoryMonitor.stopMonitoring()
      }
    }
  }, [enableMemoryMonitoring, memoryMonitoringInterval])

  // Track page transitions
  useEffect(() => {
    const loadTime = performance.now()

    if (pageLoadTimeRef.current) {
      const transitionTime = loadTime - pageLoadTimeRef.current
      performanceMonitor.track('page_transition', transitionTime, 'ms', {
        from: pageLoadTimeRef.current,
        to: pathname,
      })
    }

    pageLoadTimeRef.current = loadTime

    // Track page view
    performanceMonitor.track('page_view', 1, 'count', {
      path: pathname,
    })

    return () => {
      const pageTime = performance.now() - loadTime
      performanceMonitor.track('page_time', pageTime, 'ms', {
        path: pathname,
      })
    }
  }, [pathname])

  // Monitor critical errors
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      performanceMonitor.track('critical_error', 1, 'count', {
        message: event.message,
        source: event.filename,
        line: event.lineno,
        column: event.colno,
      })
    }

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      performanceMonitor.track('unhandled_rejection', 1, 'count', {
        reason: event.reason?.toString(),
      })
    }

    window.addEventListener('error', handleError)
    window.addEventListener('unhandledrejection', handleUnhandledRejection)

    return () => {
      window.removeEventListener('error', handleError)
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
    }
  }, [])

  // Report performance metrics periodically
  useEffect(() => {
    const reportInterval = setInterval(() => {
      const report = performanceMonitor.generateReport()

      // Log report summary
      console.log('[Performance Report]', {
        avgResponseTime: `${report.summary.avgResponseTime.toFixed(2)}ms`,
        errorRate: `${report.summary.errorRate.toFixed(2)}%`,
        memoryUsage: `${(report.summary.memoryUsage / (1024 * 1024)).toFixed(2)}MB`,
        cacheHitRate: `${report.summary.cacheHitRate.toFixed(2)}%`,
      })

      // Send critical metrics to analytics
      if (report.summary.avgResponseTime > 1000) {
        analytics.track('High Response Time', {
          avgResponseTime: report.summary.avgResponseTime,
          timestamp: new Date().toISOString(),
        })
      }

      if (report.summary.errorRate > 5) {
        analytics.track('High Error Rate', {
          errorRate: report.summary.errorRate,
          timestamp: new Date().toISOString(),
        })
      }

      if (report.summary.memoryUsage > 500 * 1024 * 1024) {
        analytics.track('High Memory Usage', {
          memoryUsage: report.summary.memoryUsage,
          timestamp: new Date().toISOString(),
        })
      }
    }, 60000) // Report every minute

    return () => clearInterval(reportInterval)
  }, [analytics])

  const value: PerformanceContextValue = {
    performanceMonitor,
    memoryMonitor,
  }

  return (
    <PerformanceContext.Provider value={value}>
      {children}
    </PerformanceContext.Provider>
  )
}

export function usePerformance() {
  const context = useContext(PerformanceContext)
  if (!context) {
    throw new Error('usePerformance must be used within PerformanceProvider')
  }
  return context
}

/**
 * HOC for adding performance monitoring to components
 */
export function withPerformanceMonitoring<P extends object>(
  Component: React.ComponentType<P>,
  componentName: string
) {
  return React.forwardRef<any, P>((props, ref) => {
    const mountTime = useRef(performance.now())

    useEffect(() => {
      performanceMonitor.track(
        `${componentName}_mount_time`,
        performance.now() - mountTime.current,
        'ms'
      )
    }, [])

    return <Component {...props} ref={ref} />
  })
}
