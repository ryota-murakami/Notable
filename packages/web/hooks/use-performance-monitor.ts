/**
 * React hook for performance monitoring
 * Provides easy integration of performance tracking in React components
 */

import { useEffect, useRef, useCallback } from 'react'
import { performanceMonitor } from '@/lib/performance'
import { memoryMonitor } from '@/lib/memory-monitor'

interface UsePerformanceMonitorOptions {
  /**
   * Enable automatic component render tracking
   */
  trackRenders?: boolean

  /**
   * Enable memory usage tracking
   */
  trackMemory?: boolean

  /**
   * Component name for tracking
   */
  componentName?: string

  /**
   * Threshold for slow renders (ms)
   */
  slowRenderThreshold?: number
}

interface PerformanceMetrics {
  renderCount: number
  lastRenderTime: number
  avgRenderTime: number
  slowRenders: number
  memoryUsage?: number
}

/**
 * Hook for monitoring component performance
 */
export function usePerformanceMonitor(
  options: UsePerformanceMonitorOptions = {}
) {
  const {
    trackRenders = true,
    trackMemory = false,
    componentName = 'Unknown Component',
    slowRenderThreshold = 16, // ~60fps
  } = options

  const metricsRef = useRef<PerformanceMetrics>({
    renderCount: 0,
    lastRenderTime: 0,
    avgRenderTime: 0,
    slowRenders: 0,
  })

  const renderStartRef = useRef<number>()

  // Track component mount
  useEffect(() => {
    performanceMonitor.track(`${componentName}_mount`, 1, 'count')

    return () => {
      performanceMonitor.track(`${componentName}_unmount`, 1, 'count')
    }
  }, [componentName])

  // Track renders
  useEffect(() => {
    if (!trackRenders) return

    if (renderStartRef.current) {
      const renderTime = performance.now() - renderStartRef.current
      const metrics = metricsRef.current

      metrics.renderCount++
      metrics.lastRenderTime = renderTime
      metrics.avgRenderTime =
        (metrics.avgRenderTime * (metrics.renderCount - 1) + renderTime) /
        metrics.renderCount

      if (renderTime > slowRenderThreshold) {
        metrics.slowRenders++
        performanceMonitor.track(
          `${componentName}_slow_render`,
          renderTime,
          'ms'
        )
      }

      performanceMonitor.track(`${componentName}_render`, renderTime, 'ms')
    }

    renderStartRef.current = performance.now()
  })

  // Track memory if enabled
  useEffect(() => {
    if (!trackMemory) return

    const interval = setInterval(() => {
      const memoryMetrics = memoryMonitor.getCurrentMetrics()
      metricsRef.current.memoryUsage = memoryMetrics.heapUsed
      performanceMonitor.track(
        `${componentName}_memory`,
        memoryMetrics.heapUsed,
        'bytes'
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [trackMemory, componentName])

  /**
   * Track a custom metric
   */
  const trackMetric = useCallback(
    (
      name: string,
      value: number,
      unit: 'ms' | 'bytes' | 'count' | 'percentage' = 'ms'
    ) => {
      performanceMonitor.track(`${componentName}_${name}`, value, unit)
    },
    [componentName]
  )

  /**
   * Measure an async operation
   */
  const measureAsync = useCallback(
    async <T>(name: string, operation: () => Promise<T>): Promise<T> => {
      return performanceMonitor.measureAsync(
        `${componentName}_${name}`,
        operation
      )
    },
    [componentName]
  )

  /**
   * Start a timer
   */
  const startTimer = useCallback(
    (name: string) => {
      return performanceMonitor.startTimer(`${componentName}_${name}`)
    },
    [componentName]
  )

  /**
   * Get current metrics
   */
  const getMetrics = useCallback((): PerformanceMetrics => {
    return { ...metricsRef.current }
  }, [])

  return {
    trackMetric,
    measureAsync,
    startTimer,
    getMetrics,
  }
}

/**
 * Hook for tracking specific user interactions
 */
export function useInteractionTracking(interactionName: string) {
  const startTimeRef = useRef<number>()

  /**
   * Start tracking an interaction
   */
  const startInteraction = useCallback(() => {
    startTimeRef.current = performance.now()
    performanceMonitor.track(`interaction_${interactionName}_start`, 1, 'count')
  }, [interactionName])

  /**
   * End tracking an interaction
   */
  const endInteraction = useCallback(
    (metadata?: Record<string, any>) => {
      if (!startTimeRef.current) {
        console.warn(
          `Interaction "${interactionName}" ended without being started`
        )
        return
      }

      const duration = performance.now() - startTimeRef.current
      performanceMonitor.track(
        `interaction_${interactionName}`,
        duration,
        'ms',
        metadata
      )
      startTimeRef.current = undefined
    },
    [interactionName]
  )

  /**
   * Track interaction with automatic timing
   */
  const trackInteraction = useCallback(
    async <T>(operation: () => T | Promise<T>): Promise<T> => {
      startInteraction()
      try {
        const result = await Promise.resolve(operation())
        endInteraction({ success: true })
        return result
      } catch (error) {
        endInteraction({ success: false, error: error?.toString() })
        throw error
      }
    },
    [startInteraction, endInteraction]
  )

  return {
    startInteraction,
    endInteraction,
    trackInteraction,
  }
}

/**
 * Hook for tracking page/route performance
 */
export function usePagePerformance(pageName: string) {
  useEffect(() => {
    const startTime = performance.now()
    performanceMonitor.track(`page_${pageName}_enter`, 1, 'count')

    // Track time to interactive
    const checkInteractive = () => {
      if (document.readyState === 'complete') {
        const tti = performance.now() - startTime
        performanceMonitor.track(`page_${pageName}_tti`, tti, 'ms')
      } else {
        requestAnimationFrame(checkInteractive)
      }
    }
    checkInteractive()

    return () => {
      const duration = performance.now() - startTime
      performanceMonitor.track(`page_${pageName}_duration`, duration, 'ms')
      performanceMonitor.track(`page_${pageName}_exit`, 1, 'count')
    }
  }, [pageName])
}
