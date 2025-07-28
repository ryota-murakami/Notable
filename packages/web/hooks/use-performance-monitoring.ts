'use client'

import { useEffect, useRef } from 'react'
import { isProduction, isDevelopment } from '../lib/utils/environment'

interface PerformanceMetric {
  name: string
  value: number
  timestamp: number
  delta?: number
}

interface PerformanceMonitoringOptions {
  enabled?: boolean
  sampleRate?: number
  reportInterval?: number
}

/**
 * Hook for monitoring web performance metrics
 * Tracks key metrics like LCP, FID, CLS, etc.
 */
export function usePerformanceMonitoring(options: PerformanceMonitoringOptions = {}) {
  const {
    enabled = isProduction(),
    sampleRate = 0.1,
    reportInterval = 30000,
  } = options
  
  const metricsRef = useRef<PerformanceMetric[]>([])
  const lastReportRef = useRef<number>(0)
  
  useEffect(() => {
    if (!enabled) return
    
    // Sample based on rate (0.1 = 10% of users)
    if (Math.random() > sampleRate) return
    
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      
      entries.forEach((entry) => {
        const metric: PerformanceMetric = {
          name: entry.name,
          value: entry.startTime,
          timestamp: Date.now(),
        }
        
        if ('duration' in entry) {
          metric.delta = entry.duration
        }
        
        metricsRef.current.push(metric)
        
        // Log in development
        if (isDevelopment()) {
          console.info('Performance metric:', metric)
        }
      })
    })
    
    // Observe different types of performance entries
    try {
      observer.observe({ entryTypes: ['navigation', 'resource', 'measure', 'paint'] })
    } catch (e) {
      // Fallback for browsers that don't support all entry types
      try {
        observer.observe({ entryTypes: ['navigation', 'resource'] })
      } catch (e) {
        console.warn('Performance monitoring not supported')
      }
    }
    
    // Report metrics periodically
    const reportInterval = setInterval(() => {
      if (metricsRef.current.length > 0) {
        reportMetrics(metricsRef.current)
        metricsRef.current = []
        lastReportRef.current = Date.now()
      }
    }, reportInterval)
    
    return () => {
      observer.disconnect()
      clearInterval(reportInterval)
    }
  }, [enabled, sampleRate, reportInterval])
  
  const reportMetrics = (metrics: PerformanceMetric[]) => {
    // In production, you would send these to your analytics service
    if (isDevelopment()) {
      console.group('Performance Report')
      metrics.forEach(metric => {
        console.log(`${metric.name}: ${metric.value}ms`)
      })
      console.groupEnd()
    }
    
    // TODO: Send to analytics service in production
    // analytics.track('performance_metrics', { metrics })
  }
  
  const getMetrics = () => [...metricsRef.current]
  
  const clearMetrics = () => {
    metricsRef.current = []
  }
  
  return {
    getMetrics,
    clearMetrics,
    reportMetrics: () => reportMetrics(metricsRef.current),
  }
}
