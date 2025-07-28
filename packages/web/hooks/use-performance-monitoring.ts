'use client'

import { useEffect, useRef } from 'react'
import { isDevelopment, isProduction } from '../lib/utils/environment'
import type { PerformanceMetric as BasePerformanceMetric } from '../lib/performance'

interface PerformanceMetric extends Omit<BasePerformanceMetric, 'unit'> {
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
    } catch {
      // Fallback for browsers that don't support all entry types
      try {
        observer.observe({ entryTypes: ['navigation', 'resource'] })
      } catch {
        console.warn('Performance monitoring not supported')
      }
    }
    
    // Report metrics periodically
    const intervalId = setInterval(() => {
      if (metricsRef.current.length > 0) {
        reportMetrics(metricsRef.current)
        metricsRef.current = []
        lastReportRef.current = Date.now()
      }
    }, reportInterval)

    return () => {
      observer.disconnect()
      clearInterval(intervalId)
    }
  }, [enabled, sampleRate, reportInterval])
  
  return { enabled, sampleRate }
}

// Function to report metrics to analytics service
function reportMetrics(metrics: PerformanceMetric[]) {
  // In development, just log
  if (isDevelopment()) {
    console.info('Reporting performance metrics:', metrics)
    return
  }
  
  // TODO: Implement analytics service integration
  if (typeof window !== 'undefined' && 'gtag' in window) {
    metrics.forEach(metric => {
      (window as any).gtag('event', 'performance_metric', {
        event_category: 'Performance',
        event_label: metric.name,
        value: Math.round(metric.value),
        non_interaction: true,
      })
    })
  }
}
