// Performance monitoring and optimization utilities

export class PerformanceMonitor {
  private static instance: PerformanceMonitor
  private metrics: Map<string, PerformanceMetric> = new Map()

  private constructor() {}

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor()
    }
    return PerformanceMonitor.instance
  }

  // Measure component render time
  measureRender(componentName: string, callback: () => void): void {
    const startTime = performance.now()
    callback()
    const endTime = performance.now()

    this.recordMetric(componentName, 'render', endTime - startTime)
  }

  // Measure async operation time
  async measureAsync<T>(
    operationName: string,
    operation: () => Promise<T>,
  ): Promise<T> {
    const startTime = performance.now()
    try {
      const result = await operation()
      const endTime = performance.now()
      this.recordMetric(operationName, 'async', endTime - startTime)
      return result
    } catch (error) {
      const endTime = performance.now()
      this.recordMetric(operationName, 'async-error', endTime - startTime)
      throw error
    }
  }

  // Record a performance metric
  private recordMetric(name: string, type: string, duration: number): void {
    const key = `${name}:${type}`
    const metric = this.metrics.get(key) || {
      name,
      type,
      count: 0,
      totalDuration: 0,
      avgDuration: 0,
      minDuration: Infinity,
      maxDuration: -Infinity,
    }

    metric.count++
    metric.totalDuration += duration
    metric.avgDuration = metric.totalDuration / metric.count
    metric.minDuration = Math.min(metric.minDuration, duration)
    metric.maxDuration = Math.max(metric.maxDuration, duration)

    this.metrics.set(key, metric)
  }

  // Get performance report
  getReport(): PerformanceReport {
    const metrics = Array.from(this.metrics.values())
    const totalRenderTime = metrics
      .filter((m) => m.type === 'render')
      .reduce((sum, m) => sum + m.totalDuration, 0)

    const totalAsyncTime = metrics
      .filter((m) => m.type === 'async')
      .reduce((sum, m) => sum + m.totalDuration, 0)

    return {
      metrics,
      summary: {
        totalRenderTime,
        totalAsyncTime,
        totalOperations: metrics.reduce((sum, m) => sum + m.count, 0),
        averageRenderTime:
          totalRenderTime / metrics.filter((m) => m.type === 'render').length ||
          0,
        averageAsyncTime:
          totalAsyncTime / metrics.filter((m) => m.type === 'async').length ||
          0,
      },
    }
  }

  // Clear metrics
  clear(): void {
    this.metrics.clear()
  }
}

export interface PerformanceMetric {
  name: string
  type: string
  count: number
  totalDuration: number
  avgDuration: number
  minDuration: number
  maxDuration: number
}

export interface PerformanceReport {
  metrics: PerformanceMetric[]
  summary: {
    totalRenderTime: number
    totalAsyncTime: number
    totalOperations: number
    averageRenderTime: number
    averageAsyncTime: number
  }
}

// Debounce utility with performance tracking
export function debounceWithMetrics<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  metricName: string,
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null
  const monitor = PerformanceMonitor.getInstance()

  return function debounced(...args: Parameters<T>) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      monitor.measureRender(metricName, () => func(...args))
      timeoutId = null
    }, wait)
  }
}

// Throttle utility with performance tracking
export function throttleWithMetrics<T extends (...args: any[]) => any>(
  func: T,
  limit: number,
  metricName: string,
): (...args: Parameters<T>) => void {
  let inThrottle = false
  const monitor = PerformanceMonitor.getInstance()

  return function throttled(...args: Parameters<T>) {
    if (!inThrottle) {
      monitor.measureRender(metricName, () => func(...args))
      inThrottle = true
      setTimeout(() => {
        inThrottle = false
      }, limit)
    }
  }
}

// Memoize with performance tracking
export function memoizeWithMetrics<T extends (...args: any[]) => any>(
  func: T,
  metricName: string,
  resolver?: (...args: Parameters<T>) => string,
): T {
  const cache = new Map<string, ReturnType<T>>()
  const monitor = PerformanceMonitor.getInstance()

  return ((...args: Parameters<T>) => {
    const key = resolver ? resolver(...args) : JSON.stringify(args)

    if (cache.has(key)) {
      return cache.get(key)!
    }

    const result = monitor.measureRender(`${metricName}-compute`, () =>
      func(...args),
    )
    cache.set(key, result as ReturnType<T>)

    return result
  }) as T
}

// Performance observer for web vitals
export function observeWebVitals(
  callback: (metric: WebVitalMetric) => void,
): () => void {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return () => {}
  }

  const observers: PerformanceObserver[] = []

  // Observe Largest Contentful Paint
  try {
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1] as any
      callback({
        name: 'LCP',
        value: lastEntry.renderTime || lastEntry.loadTime,
        rating: getLCPRating(lastEntry.renderTime || lastEntry.loadTime),
      })
    })
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
    observers.push(lcpObserver)
  } catch {
    // LCP observer not supported
  }

  // Observe First Input Delay
  try {
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry: any) => {
        callback({
          name: 'FID',
          value: entry.processingStart - entry.startTime,
          rating: getFIDRating(entry.processingStart - entry.startTime),
        })
      })
    })
    fidObserver.observe({ entryTypes: ['first-input'] })
    observers.push(fidObserver)
  } catch {
    // FID observer not supported
  }

  // Observe Cumulative Layout Shift
  try {
    let clsValue = 0
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value
        }
      })
      callback({
        name: 'CLS',
        value: clsValue,
        rating: getCLSRating(clsValue),
      })
    })
    clsObserver.observe({ entryTypes: ['layout-shift'] })
    observers.push(clsObserver)
  } catch {
    // CLS observer not supported
  }

  // Return cleanup function
  return () => {
    observers.forEach((observer) => observer.disconnect())
  }
}

export interface WebVitalMetric {
  name: 'LCP' | 'FID' | 'CLS'
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
}

function getLCPRating(value: number): WebVitalMetric['rating'] {
  if (value <= 2500) return 'good'
  if (value <= 4000) return 'needs-improvement'
  return 'poor'
}

function getFIDRating(value: number): WebVitalMetric['rating'] {
  if (value <= 100) return 'good'
  if (value <= 300) return 'needs-improvement'
  return 'poor'
}

function getCLSRating(value: number): WebVitalMetric['rating'] {
  if (value <= 0.1) return 'good'
  if (value <= 0.25) return 'needs-improvement'
  return 'poor'
}
