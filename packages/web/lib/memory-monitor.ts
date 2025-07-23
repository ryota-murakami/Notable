/**
 * Memory monitoring utilities for tracking application memory usage
 * Provides insights into memory consumption patterns and potential leaks
 */

export interface MemoryMetrics {
  timestamp: number
  heapUsed: number
  heapTotal: number
  external: number
  arrayBuffers: number
  totalMemory?: number
  availableMemory?: number
}

export interface MemoryReport {
  current: MemoryMetrics
  peak: MemoryMetrics
  average: MemoryMetrics
  trend: 'stable' | 'increasing' | 'decreasing'
  warnings: string[]
}

class MemoryMonitor {
  private metrics: MemoryMetrics[] = []
  private peakMetrics: MemoryMetrics | null = null
  private monitoringInterval: NodeJS.Timeout | null = null
  private readonly maxMetricsHistory = 1000
  private readonly warningThreshold = 500 * 1024 * 1024 // 500MB

  /**
   * Start monitoring memory usage
   */
  startMonitoring(intervalMs: number = 5000) {
    if (this.monitoringInterval) {
      console.warn('Memory monitoring is already active')
      return
    }

    this.monitoringInterval = setInterval(() => {
      this.collectMetrics()
    }, intervalMs)

    // Collect initial metrics
    this.collectMetrics()
  }

  /**
   * Stop monitoring memory usage
   */
  stopMonitoring() {
    if (this.monitoringInterval) {
      clearInterval(this.monitoringInterval)
      this.monitoringInterval = null
    }
  }

  /**
   * Collect current memory metrics
   */
  private collectMetrics() {
    const metrics = this.getCurrentMetrics()

    this.metrics.push(metrics)

    // Update peak metrics
    if (!this.peakMetrics || metrics.heapUsed > this.peakMetrics.heapUsed) {
      this.peakMetrics = metrics
    }

    // Limit metrics history
    if (this.metrics.length > this.maxMetricsHistory) {
      this.metrics.shift()
    }

    // Check for warnings
    this.checkMemoryWarnings(metrics)
  }

  /**
   * Get current memory metrics
   */
  getCurrentMetrics(): MemoryMetrics {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      // Browser environment with memory API
      const memory = (performance as any).memory
      return {
        timestamp: Date.now(),
        heapUsed: memory.usedJSHeapSize,
        heapTotal: memory.totalJSHeapSize,
        external: 0,
        arrayBuffers: 0,
        totalMemory: memory.jsHeapSizeLimit,
      }
    } else if (typeof process !== 'undefined' && process.memoryUsage) {
      // Node.js environment
      const usage = process.memoryUsage()
      return {
        timestamp: Date.now(),
        heapUsed: usage.heapUsed,
        heapTotal: usage.heapTotal,
        external: usage.external,
        arrayBuffers: usage.arrayBuffers || 0,
      }
    } else {
      // Fallback for environments without memory APIs
      return {
        timestamp: Date.now(),
        heapUsed: 0,
        heapTotal: 0,
        external: 0,
        arrayBuffers: 0,
      }
    }
  }

  /**
   * Check for memory warnings
   */
  private checkMemoryWarnings(metrics: MemoryMetrics) {
    const warnings: string[] = []

    // High memory usage warning
    if (metrics.heapUsed > this.warningThreshold) {
      warnings.push(
        `High memory usage detected: ${this.formatBytes(metrics.heapUsed)}`
      )
    }

    // Memory leak detection (simple heuristic)
    if (this.metrics.length > 10) {
      const recentMetrics = this.metrics.slice(-10)
      const isIncreasing = recentMetrics.every(
        (m, i) => i === 0 || m.heapUsed > recentMetrics[i - 1].heapUsed
      )

      if (isIncreasing) {
        warnings.push(
          'Potential memory leak detected: memory usage is continuously increasing'
        )
      }
    }

    // High heap utilization
    if (metrics.heapTotal > 0) {
      const utilization = (metrics.heapUsed / metrics.heapTotal) * 100
      if (utilization > 90) {
        warnings.push(`High heap utilization: ${utilization.toFixed(1)}%`)
      }
    }

    // Log warnings
    warnings.forEach((warning) => console.warn(`[MemoryMonitor] ${warning}`))
  }

  /**
   * Get memory usage trend
   */
  private getTrend(): 'stable' | 'increasing' | 'decreasing' {
    if (this.metrics.length < 5) return 'stable'

    const recentMetrics = this.metrics.slice(-5)
    const firstValue = recentMetrics[0].heapUsed
    const lastValue = recentMetrics[recentMetrics.length - 1].heapUsed

    const percentChange = ((lastValue - firstValue) / firstValue) * 100

    if (percentChange > 10) return 'increasing'
    if (percentChange < -10) return 'decreasing'
    return 'stable'
  }

  /**
   * Generate memory report
   */
  generateReport(): MemoryReport {
    const current = this.getCurrentMetrics()
    const warnings: string[] = []

    // Calculate average
    const average =
      this.metrics.length > 0
        ? this.metrics.reduce(
            (acc, m) => ({
              timestamp: Date.now(),
              heapUsed: acc.heapUsed + m.heapUsed / this.metrics.length,
              heapTotal: acc.heapTotal + m.heapTotal / this.metrics.length,
              external: acc.external + m.external / this.metrics.length,
              arrayBuffers:
                acc.arrayBuffers + m.arrayBuffers / this.metrics.length,
            }),
            {
              timestamp: Date.now(),
              heapUsed: 0,
              heapTotal: 0,
              external: 0,
              arrayBuffers: 0,
            }
          )
        : current

    // Generate warnings
    if (current.heapUsed > this.warningThreshold) {
      warnings.push(
        `Current memory usage (${this.formatBytes(current.heapUsed)}) exceeds warning threshold`
      )
    }

    const trend = this.getTrend()
    if (trend === 'increasing' && this.metrics.length > 20) {
      warnings.push(
        'Memory usage has been increasing over the last 20 measurements'
      )
    }

    return {
      current,
      peak: this.peakMetrics || current,
      average,
      trend,
      warnings,
    }
  }

  /**
   * Format bytes to human readable string
   */
  private formatBytes(bytes: number): string {
    const units = ['B', 'KB', 'MB', 'GB']
    let value = bytes
    let unitIndex = 0

    while (value >= 1024 && unitIndex < units.length - 1) {
      value /= 1024
      unitIndex++
    }

    return `${value.toFixed(2)} ${units[unitIndex]}`
  }

  /**
   * Get metrics history
   */
  getMetricsHistory(): MemoryMetrics[] {
    return [...this.metrics]
  }

  /**
   * Clear metrics history
   */
  clearHistory() {
    this.metrics = []
    this.peakMetrics = null
  }

  /**
   * Export metrics for analysis
   */
  exportMetrics(): string {
    return JSON.stringify(
      {
        metrics: this.metrics,
        peak: this.peakMetrics,
        report: this.generateReport(),
      },
      null,
      2
    )
  }

  /**
   * Analyze memory for specific operations
   */
  async measureOperation<T>(
    name: string,
    operation: () => Promise<T>
  ): Promise<{
    result: T
    memoryDelta: number
    duration: number
  }> {
    const startMetrics = this.getCurrentMetrics()
    const startTime = performance.now()

    try {
      const result = await operation()

      const endMetrics = this.getCurrentMetrics()
      const duration = performance.now() - startTime
      const memoryDelta = endMetrics.heapUsed - startMetrics.heapUsed

      console.log(
        `[MemoryMonitor] Operation "${name}" - Duration: ${duration.toFixed(2)}ms, Memory delta: ${this.formatBytes(memoryDelta)}`
      )

      return { result, memoryDelta, duration }
    } catch (error) {
      const endMetrics = this.getCurrentMetrics()
      const duration = performance.now() - startTime
      const memoryDelta = endMetrics.heapUsed - startMetrics.heapUsed

      console.error(
        `[MemoryMonitor] Operation "${name}" failed - Duration: ${duration.toFixed(2)}ms, Memory delta: ${this.formatBytes(memoryDelta)}`
      )

      throw error
    }
  }

  /**
   * Force garbage collection (if available)
   */
  forceGarbageCollection() {
    if (typeof global !== 'undefined' && (global as any).gc) {
      console.log('[MemoryMonitor] Forcing garbage collection...')
      const before = this.getCurrentMetrics()
      ;(global as any).gc()
      const after = this.getCurrentMetrics()
      const freed = before.heapUsed - after.heapUsed
      console.log(
        `[MemoryMonitor] Garbage collection freed ${this.formatBytes(freed)}`
      )
    } else {
      console.warn(
        '[MemoryMonitor] Garbage collection not available. Run Node.js with --expose-gc flag'
      )
    }
  }
}

// Export singleton instance
export const memoryMonitor = new MemoryMonitor()

// Export class for testing
export { MemoryMonitor }
