import { InteractionManager } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

// Performance monitoring for React Native
export class MobilePerformanceMonitor {
  private static instance: MobilePerformanceMonitor
  private metrics: Map<string, PerformanceMetric> = new Map()
  private startTime: number = Date.now()

  private constructor() {}

  static getInstance(): MobilePerformanceMonitor {
    if (!MobilePerformanceMonitor.instance) {
      MobilePerformanceMonitor.instance = new MobilePerformanceMonitor()
    }
    return MobilePerformanceMonitor.instance
  }

  // Track screen render time
  trackScreenRender(screenName: string, callback: () => void): void {
    const startTime = Date.now()

    InteractionManager.runAfterInteractions(() => {
      const endTime = Date.now()
      this.recordMetric(screenName, 'screen-render', endTime - startTime)
      callback()
    })
  }

  // Track async operation
  async trackAsyncOperation<T>(
    operationName: string,
    operation: () => Promise<T>,
  ): Promise<T> {
    const startTime = Date.now()
    try {
      const result = await operation()
      const endTime = Date.now()
      this.recordMetric(operationName, 'async', endTime - startTime)
      return result
    } catch (error) {
      const endTime = Date.now()
      this.recordMetric(operationName, 'async-error', endTime - startTime)
      throw error
    }
  }

  // Track interaction
  trackInteraction(interactionName: string, duration: number): void {
    this.recordMetric(interactionName, 'interaction', duration)
  }

  // Record metric
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

    // Log slow operations
    if (duration > 1000) {
      console.warn(`Slow operation detected: ${name} took ${duration}ms`)
    }
  }

  // Get performance report
  getReport(): PerformanceReport {
    const metrics = Array.from(this.metrics.values())
    const sessionDuration = Date.now() - this.startTime

    return {
      metrics,
      summary: {
        sessionDuration,
        totalOperations: metrics.reduce((sum, m) => sum + m.count, 0),
        averageOperationTime:
          metrics.reduce((sum, m) => sum + m.avgDuration, 0) / metrics.length ||
          0,
        slowestOperation: metrics.reduce(
          (slowest, m) =>
            m.maxDuration > (slowest?.maxDuration || 0) ? m : slowest,
          null,
        ),
      },
    }
  }

  // Save report to storage
  async saveReport(): Promise<void> {
    try {
      const report = this.getReport()
      const reports = await this.getStoredReports()
      reports.push({
        ...report,
        timestamp: new Date().toISOString(),
      })

      // Keep only last 10 reports
      if (reports.length > 10) {
        reports.shift()
      }

      await AsyncStorage.setItem(
        '@performance_reports',
        JSON.stringify(reports),
      )
    } catch (error) {
      console.error('Failed to save performance report:', error)
    }
  }

  // Get stored reports
  async getStoredReports(): Promise<any[]> {
    try {
      const data = await AsyncStorage.getItem('@performance_reports')
      return data ? JSON.parse(data) : []
    } catch (error) {
      console.error('Failed to get performance reports:', error)
      return []
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
    sessionDuration: number
    totalOperations: number
    averageOperationTime: number
    slowestOperation: PerformanceMetric | null
  }
}

// Performance optimization utilities
export const performanceUtils = {
  // Debounce function for React Native
  debounce: <T extends (...args: any[]) => any>(
    func: T,
    wait: number,
  ): ((...args: Parameters<T>) => void) => {
    let timeoutId: NodeJS.Timeout | null = null

    return (...args: Parameters<T>) => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      timeoutId = setTimeout(() => {
        func(...args)
        timeoutId = null
      }, wait)
    }
  },

  // Throttle function for React Native
  throttle: <T extends (...args: any[]) => any>(
    func: T,
    limit: number,
  ): ((...args: Parameters<T>) => void) => {
    let inThrottle = false

    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args)
        inThrottle = true
        setTimeout(() => {
          inThrottle = false
        }, limit)
      }
    }
  },

  // Memoize function results
  memoize: <T extends (...args: any[]) => any>(
    func: T,
    resolver?: (...args: Parameters<T>) => string,
  ): T => {
    const cache = new Map<string, ReturnType<T>>()

    return ((...args: Parameters<T>) => {
      const key = resolver ? resolver(...args) : JSON.stringify(args)

      if (cache.has(key)) {
        return cache.get(key)!
      }

      const result = func(...args)
      cache.set(key, result)

      // Limit cache size
      if (cache.size > 100) {
        const firstKey = cache.keys().next().value
        cache.delete(firstKey)
      }

      return result
    }) as T
  },

  // Batch operations
  batchOperations: <T>(
    operations: (() => Promise<T>)[],
    batchSize: number = 5,
  ): Promise<T[]> => {
    return new Promise(async (resolve, reject) => {
      const results: T[] = []

      try {
        for (let i = 0; i < operations.length; i += batchSize) {
          const batch = operations.slice(i, i + batchSize)
          const batchResults = await Promise.all(batch.map((op) => op()))
          results.push(...batchResults)
        }
        resolve(results)
      } catch (error) {
        reject(error)
      }
    })
  },
}
