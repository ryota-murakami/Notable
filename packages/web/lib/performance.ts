/**
 * Performance monitoring and optimization utilities
 * Tracks application performance metrics and provides optimization insights
 */

import { analytics, type Analytics } from './analytics'

export interface PerformanceMetric {
  name: string
  value: number
  unit: 'ms' | 'bytes' | 'count' | 'percentage'
  timestamp: number
  metadata?: Record<string, unknown>
}

export interface PerformanceReport {
  timestamp: number
  duration: number
  metrics: PerformanceMetric[]
  summary: {
    avgResponseTime: number
    errorRate: number
    memoryUsage: number
    cacheHitRate: number
  }
  recommendations: string[]
}

class PerformanceMonitor {
  private metrics: PerformanceMetric[] = []
  private startTime: number = Date.now()
  private analytics?: Analytics
  private observers: Map<string, PerformanceObserver> = new Map()

  constructor(analyticsInstance?: Analytics) {
    this.analytics = analyticsInstance || analytics
    this.initializeWebVitals()
    this.initializeResourceTiming()
  }

  /**
   * Initialize Web Vitals monitoring
   */
  private initializeWebVitals() {
    if (typeof window === 'undefined') return

    // Lazy load web-vitals to avoid SSR issues
    import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
      onCLS((metric) => this.trackWebVital('CLS', metric.value, 'score'))
      // onFID is deprecated in web-vitals v3, use onINP instead
      onFCP((metric) => this.trackWebVital('FCP', metric.value, 'ms'))
      onLCP((metric) => this.trackWebVital('LCP', metric.value, 'ms'))
      onTTFB((metric) => this.trackWebVital('TTFB', metric.value, 'ms'))
      onINP((metric) => this.trackWebVital('INP', metric.value, 'ms'))
    })
  }

  /**
   * Initialize resource timing monitoring
   */
  private initializeResourceTiming() {
    if (typeof window === 'undefined' || !window.PerformanceObserver) return

    const observer = new PerformanceObserver((entries) => {
      entries.getEntries().forEach((entry) => {
        if (entry.entryType === 'resource') {
          const resourceEntry = entry as PerformanceResourceTiming
          this.track(
            `resource_${resourceEntry.initiatorType}`,
            resourceEntry.duration,
            'ms',
            {
              name: resourceEntry.name,
              size: resourceEntry.transferSize,
            }
          )
        }
      })
    })

    observer.observe({ entryTypes: ['resource'] })
    this.observers.set('resource', observer)
  }

  /**
   * Track a Web Vital metric
   */
  private trackWebVital(name: string, value: number, unit: string) {
    this.track(`webvital_${name}`, value, unit as PerformanceMetric['unit'])
    this.analytics?.performance(name, value, unit as PerformanceMetric['unit'])
  }

  /**
   * Track a performance metric
   */
  track(
    name: string,
    value: number,
    unit: PerformanceMetric['unit'] = 'ms',
    metadata?: Record<string, unknown>
  ) {
    const metric: PerformanceMetric = {
      name,
      value,
      unit,
      timestamp: Date.now(),
      metadata,
    }

    this.metrics.push(metric)

    // Send to analytics if available
    if (this.analytics) {
      this.analytics.performance(name, value, unit, metadata)
    }

    // Trigger alert if threshold exceeded
    this.checkThresholds(metric)
  }

  /**
   * Start timing an operation
   */
  startTimer(name: string): () => void {
    const start = performance.now()
    return () => {
      const duration = performance.now() - start
      this.track(name, duration, 'ms')
      return duration
    }
  }

  /**
   * Measure async operation performance
   */
  async measureAsync<T>(name: string, operation: () => Promise<T>): Promise<T> {
    const endTimer = this.startTimer(name)
    try {
      const result = await operation()
      endTimer()
      return result
    } catch (error) {
      endTimer()
      this.track(`${name}_error`, 1, 'count')
      throw error
    }
  }

  /**
   * Check performance thresholds and trigger alerts
   */
  private checkThresholds(metric: PerformanceMetric) {
    const thresholds: Record<string, number> = {
      note_switch: 100, // ms
      search_results: 200, // ms
      sync_latency: 500, // ms
      initial_load: 2000, // ms
      webvital_LCP: 2500, // ms
      webvital_FID: 100, // ms
      webvital_CLS: 0.1, // score
    }

    const threshold = thresholds[metric.name]
    if (threshold && metric.value > threshold) {
      console.warn(
        `Performance threshold exceeded for ${metric.name}: ${metric.value}${metric.unit} (threshold: ${threshold})`
      )

      // Track threshold violation
      this.analytics?.track({
        name: 'performance_threshold_exceeded',
        properties: {
          metric: metric.name,
          value: metric.value,
          threshold,
          unit: metric.unit,
        },
      })
    }
  }

  /**
   * Get current metrics
   */
  getMetrics(): PerformanceMetric[] {
    return [...this.metrics]
  }

  /**
   * Clear metrics
   */
  clearMetrics() {
    this.metrics = []
    this.startTime = Date.now()
  }

  /**
   * Generate performance report
   */
  generateReport(): PerformanceReport {
    const duration = Date.now() - this.startTime
    const metrics = this.getMetrics()

    // Calculate summary statistics
    const responseTimes = metrics
      .filter((m) => m.unit === 'ms' && !m.name.startsWith('webvital_'))
      .map((m) => m.value)

    const avgResponseTime =
      responseTimes.length > 0
        ? responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length
        : 0

    const errorCount = metrics.filter((m) => m.name.includes('error')).length
    const totalOperations = metrics.filter(
      (m) => m.unit === 'count' || m.unit === 'ms'
    ).length
    const errorRate =
      totalOperations > 0 ? (errorCount / totalOperations) * 100 : 0

    // Memory usage (if available)
    const memoryMetrics = metrics.filter((m) => m.name.includes('memory'))
    const memoryUsage =
      memoryMetrics.length > 0
        ? memoryMetrics[memoryMetrics.length - 1].value
        : 0

    // Cache hit rate
    const cacheHits = metrics.filter((m) => m.name === 'cache_hit').length
    const cacheMisses = metrics.filter((m) => m.name === 'cache_miss').length
    const totalCacheOps = cacheHits + cacheMisses
    const cacheHitRate =
      totalCacheOps > 0 ? (cacheHits / totalCacheOps) * 100 : 0

    // Generate recommendations
    const recommendations = this.generateRecommendations(metrics, {
      avgResponseTime,
      errorRate,
      memoryUsage,
      cacheHitRate,
    })

    return {
      timestamp: this.startTime,
      duration,
      metrics,
      summary: {
        avgResponseTime,
        errorRate,
        memoryUsage,
        cacheHitRate,
      },
      recommendations,
    }
  }

  /**
   * Generate performance recommendations
   */
  private generateRecommendations(
    metrics: PerformanceMetric[],
    summary: PerformanceReport['summary']
  ): string[] {
    const recommendations: string[] = []

    // Response time recommendations
    if (summary.avgResponseTime > 500) {
      recommendations.push(
        'Average response time is high. Consider implementing caching or optimizing database queries.'
      )
    }

    // Error rate recommendations
    if (summary.errorRate > 5) {
      recommendations.push(
        'High error rate detected. Review error logs and implement error recovery mechanisms.'
      )
    }

    // Memory usage recommendations
    if (summary.memoryUsage > 500 * 1024 * 1024) {
      // 500MB
      recommendations.push(
        'High memory usage detected. Consider implementing virtualization for large datasets.'
      )
    }

    // Cache optimization
    if (summary.cacheHitRate < 80 && summary.cacheHitRate > 0) {
      recommendations.push(
        'Low cache hit rate. Review cache invalidation strategy and increase cache TTL where appropriate.'
      )
    }

    // Web Vitals recommendations
    const lcpMetric = metrics.find((m) => m.name === 'webvital_LCP')
    if (lcpMetric && lcpMetric.value > 2500) {
      recommendations.push(
        'LCP is above recommended threshold. Optimize largest content element loading.'
      )
    }

    const clsMetric = metrics.find((m) => m.name === 'webvital_CLS')
    if (clsMetric && clsMetric.value > 0.1) {
      recommendations.push(
        'High CLS detected. Review layout shifts and add proper dimensions to images/videos.'
      )
    }

    return recommendations
  }

  /**
   * Export metrics for external analysis
   */
  exportMetrics(): string {
    return JSON.stringify(
      {
        startTime: this.startTime,
        endTime: Date.now(),
        metrics: this.metrics,
        report: this.generateReport(),
      },
      null,
      2
    )
  }

  /**
   * Cleanup observers
   */
  cleanup() {
    this.observers.forEach((observer) => observer.disconnect())
    this.observers.clear()
  }
}

// Export singleton instance
export const performanceMonitor = new PerformanceMonitor()

// Export class for testing
export { PerformanceMonitor }
