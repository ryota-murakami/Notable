/**
 * Database Query Optimization Utilities
 * Performance monitoring and optimization for database operations
 */

import { performanceMonitor } from './performance'
import { memoryMonitor } from './memory-monitor'

interface QueryMetrics {
  query: string
  duration: number
  rowsAffected: number
  memoryUsed: number
  timestamp: number
  cacheHit?: boolean
}

interface QueryCache {
  [key: string]: {
    result: unknown
    timestamp: number
    ttl: number
  }
}

class DatabaseOptimizer {
  private queryMetrics: QueryMetrics[] = []
  private queryCache: QueryCache = {}
  private slowQueryThreshold = 100 // ms
  private cacheDefaultTTL = 5 * 60 * 1000 // 5 minutes

  /**
   * Execute a query with performance monitoring
   */
  async executeQuery<T>(
    queryName: string,
    queryFn: () => Promise<T>,
    options: {
      cache?: boolean
      cacheTTL?: number
      cacheKey?: string
    } = {}
  ): Promise<T> {
    const cacheKey = options.cacheKey || queryName

    // Check cache first
    if (options.cache && this.isCacheValid(cacheKey)) {
      performanceMonitor.track(`db_query_${queryName}_cache_hit`, 1, 'count')
      return this.queryCache[cacheKey].result as T
    }

    const startTime = performance.now()
    const startMemory = memoryMonitor.getCurrentMetrics().heapUsed

    try {
      const result = await queryFn()
      const duration = performance.now() - startTime
      const memoryUsed =
        memoryMonitor.getCurrentMetrics().heapUsed - startMemory

      // Record metrics
      const metrics: QueryMetrics = {
        query: queryName,
        duration,
        rowsAffected: Array.isArray(result) ? result.length : 1,
        memoryUsed,
        timestamp: Date.now(),
        cacheHit: false,
      }

      this.queryMetrics.push(metrics)
      this.trimMetrics()

      // Track performance
      performanceMonitor.track(`db_query_${queryName}`, duration, 'ms', {
        rowsAffected: metrics.rowsAffected,
        memoryUsed,
      })

      // Check for slow queries
      if (duration > this.slowQueryThreshold) {
        performanceMonitor.track(`db_slow_query_${queryName}`, duration, 'ms')
        console.warn(
          `[DB Optimizer] Slow query detected: ${queryName} (${duration.toFixed(2)}ms)`
        )
      }

      // Cache the result if requested
      if (options.cache) {
        this.queryCache[cacheKey] = {
          result,
          timestamp: Date.now(),
          ttl: options.cacheTTL || this.cacheDefaultTTL,
        }
      }

      return result
    } catch (error) {
      const duration = performance.now() - startTime
      performanceMonitor.track(`db_query_error_${queryName}`, duration, 'ms')
      throw error
    }
  }

  /**
   * Check if cached result is still valid
   */
  private isCacheValid(cacheKey: string): boolean {
    const cached = this.queryCache[cacheKey]
    if (!cached) return false

    const age = Date.now() - cached.timestamp
    return age < cached.ttl
  }

  /**
   * Clear cache for specific key or all cache
   */
  clearCache(cacheKey?: string) {
    if (cacheKey) {
      delete this.queryCache[cacheKey]
    } else {
      this.queryCache = {}
    }
  }

  /**
   * Get query performance analytics
   */
  getQueryAnalytics() {
    const recentMetrics = this.queryMetrics.filter(
      (m) => Date.now() - m.timestamp < 60 * 60 * 1000 // Last hour
    )

    const analytics = {
      totalQueries: recentMetrics.length,
      avgDuration: 0,
      slowQueries: 0,
      cacheHitRate: 0,
      topSlowQueries: [] as Array<{
        query: string
        avgDuration: number
        count: number
      }>,
      memoryUsage: 0,
    }

    if (recentMetrics.length === 0) return analytics

    // Calculate averages
    analytics.avgDuration =
      recentMetrics.reduce((sum, m) => sum + m.duration, 0) /
      recentMetrics.length
    analytics.slowQueries = recentMetrics.filter(
      (m) => m.duration > this.slowQueryThreshold
    ).length
    analytics.memoryUsage = recentMetrics.reduce(
      (sum, m) => sum + m.memoryUsed,
      0
    )

    // Group by query name for analysis
    const queryGroups = recentMetrics.reduce(
      (groups, metric) => {
        if (!groups[metric.query]) {
          groups[metric.query] = []
        }
        groups[metric.query].push(metric)
        return groups
      },
      {} as Record<string, QueryMetrics[]>
    )

    // Find slowest queries
    analytics.topSlowQueries = Object.entries(queryGroups)
      .map(([query, metrics]) => ({
        query,
        avgDuration:
          metrics.reduce((sum, m) => sum + m.duration, 0) / metrics.length,
        count: metrics.length,
      }))
      .sort((a, b) => b.avgDuration - a.avgDuration)
      .slice(0, 10)

    return analytics
  }

  /**
   * Generate query optimization suggestions
   */
  getOptimizationSuggestions() {
    const analytics = this.getQueryAnalytics()
    const suggestions: string[] = []

    if (analytics.avgDuration > 50) {
      suggestions.push(
        'Consider adding database indexes for frequently queried fields'
      )
    }

    if (analytics.slowQueries > analytics.totalQueries * 0.1) {
      suggestions.push(
        'High number of slow queries detected - review query complexity'
      )
    }

    if (analytics.memoryUsage > 100 * 1024 * 1024) {
      // 100MB
      suggestions.push(
        'High memory usage in queries - consider pagination or result limiting'
      )
    }

    analytics.topSlowQueries.forEach((query) => {
      if (query.avgDuration > 200) {
        suggestions.push(
          `Optimize "${query.query}" query (avg: ${query.avgDuration.toFixed(2)}ms)`
        )
      }
    })

    return suggestions
  }

  /**
   * Trim old metrics to prevent memory bloat
   */
  private trimMetrics() {
    const maxMetrics = 1000
    if (this.queryMetrics.length > maxMetrics) {
      this.queryMetrics = this.queryMetrics.slice(-maxMetrics)
    }
  }

  /**
   * Set slow query threshold
   */
  setSlowQueryThreshold(thresholdMs: number) {
    this.slowQueryThreshold = thresholdMs
  }

  /**
   * Get current cache status
   */
  getCacheStatus() {
    const now = Date.now()
    const cacheEntries = Object.entries(this.queryCache)

    return {
      totalEntries: cacheEntries.length,
      validEntries: cacheEntries.filter(
        ([_, entry]) => now - entry.timestamp < entry.ttl
      ).length,
      expiredEntries: cacheEntries.filter(
        ([_, entry]) => now - entry.timestamp >= entry.ttl
      ).length,
      memoryEstimate: JSON.stringify(this.queryCache).length, // Rough estimate
    }
  }
}

// Singleton instance
export const dbOptimizer = new DatabaseOptimizer()

/**
 * Decorator for automatic query optimization
 */
export function optimizeQuery(
  options: {
    name?: string
    cache?: boolean
    cacheTTL?: number
  } = {}
) {
  return function (
    target: unknown,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value
    const queryName =
      options.name || `${(target as any).constructor.name}.${propertyKey}`

    descriptor.value = async function (...args: unknown[]) {
      return await dbOptimizer.executeQuery(
        queryName,
        () => originalMethod.apply(this, args),
        {
          cache: options.cache,
          cacheTTL: options.cacheTTL,
          cacheKey: options.cache
            ? `${queryName}_${JSON.stringify(args)}`
            : undefined,
        }
      )
    }

    return descriptor
  }
}

// Utility functions for common query patterns
export class QueryBuilder {
  private conditions: string[] = []
  private orderBy: string[] = []
  private limitValue?: number
  private offsetValue?: number

  where(condition: string): QueryBuilder {
    this.conditions.push(condition)
    return this
  }

  orderByField(field: string, direction: 'ASC' | 'DESC' = 'ASC'): QueryBuilder {
    this.orderBy.push(`${field} ${direction}`)
    return this
  }

  limit(count: number): QueryBuilder {
    this.limitValue = count
    return this
  }

  offset(count: number): QueryBuilder {
    this.offsetValue = count
    return this
  }

  build(baseQuery: string): string {
    let query = baseQuery

    if (this.conditions.length > 0) {
      query += ` WHERE ${this.conditions.join(' AND ')}`
    }

    if (this.orderBy.length > 0) {
      query += ` ORDER BY ${this.orderBy.join(', ')}`
    }

    if (this.limitValue) {
      query += ` LIMIT ${this.limitValue}`
    }

    if (this.offsetValue) {
      query += ` OFFSET ${this.offsetValue}`
    }

    return query
  }
}

/**
 * Connection pool monitoring
 */
export class ConnectionPoolMonitor {
  private activeConnections = 0
  private totalConnections = 0
  private peakConnections = 0

  acquireConnection() {
    this.activeConnections++
    this.totalConnections++
    this.peakConnections = Math.max(
      this.peakConnections,
      this.activeConnections
    )

    performanceMonitor.track(
      'db_connection_acquired',
      this.activeConnections,
      'count'
    )
  }

  releaseConnection() {
    this.activeConnections = Math.max(0, this.activeConnections - 1)
    performanceMonitor.track(
      'db_connection_released',
      this.activeConnections,
      'count'
    )
  }

  getStats() {
    return {
      active: this.activeConnections,
      total: this.totalConnections,
      peak: this.peakConnections,
    }
  }

  reset() {
    this.activeConnections = 0
    this.totalConnections = 0
    this.peakConnections = 0
  }
}

export const connectionPool = new ConnectionPoolMonitor()
