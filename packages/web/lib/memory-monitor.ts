import { EventEmitter } from 'events'
import { useEffect } from 'react'

interface MemorySnapshot {
  timestamp: number
  heapUsed: number
  heapTotal: number
  external: number
  arrayBuffers: number
  detachedContexts?: number
}

interface LeakDetectionResult {
  hasLeak: boolean
  leakRate: number | undefined // MB per minute
  suspects: string[]
  recommendations: string[]
}

interface ComponentMemoryTracker {
  componentName: string
  mountTime: number
  unmountTime: number | undefined
  initialMemory: number
  peakMemory: number
  finalMemory: number | undefined
  subscriptions: Set<string>
  timers: Set<number>
  eventListeners: Array<{ target: string; event: string }>
}

export class MemoryMonitor extends EventEmitter {
  private snapshots: MemorySnapshot[] = []
  private componentTrackers = new Map<string, ComponentMemoryTracker>()
  private globalListeners = new Map<string, number>()
  private retainedObjects = new WeakMap<object, string>()
  private monitoring = false
  private snapshotInterval?: number

  constructor() {
    super()
    this.setupGlobalTracking()
  }

  private setupGlobalTracking() {
    if (typeof window === 'undefined') return

    // Track global event listeners
    const originalAddEventListener = window.addEventListener
    const originalRemoveEventListener = window.removeEventListener

    window.addEventListener = (type: string, ...args: any[]) => {
      const count = this.globalListeners.get(type) || 0
      this.globalListeners.set(type, count + 1)
      return originalAddEventListener.call(window, type, ...args)
    }

    window.removeEventListener = (type: string, ...args: any[]) => {
      const count = this.globalListeners.get(type) || 0
      if (count > 0) {
        this.globalListeners.set(type, count - 1)
      }
      return originalRemoveEventListener.call(window, type, ...args)
    }

    // Track setTimeout/setInterval
    const originalSetTimeout = window.setTimeout
    const originalSetInterval = window.setInterval
    const originalClearTimeout = window.clearTimeout
    const originalClearInterval = window.clearInterval

    const activeTimers = new Set<number>()

    window.setTimeout = (...args: any[]) => {
      const id = originalSetTimeout.apply(window, args) as number
      activeTimers.add(id)
      return id
    }

    window.setInterval = (...args: any[]) => {
      const id = originalSetInterval.apply(window, args) as number
      activeTimers.add(id)
      return id
    }

    window.clearTimeout = (id: number | undefined) => {
      if (id !== undefined) {
        activeTimers.delete(id)
      }
      return originalClearTimeout.call(window, id)
    }

    window.clearInterval = (id: number | undefined) => {
      if (id !== undefined) {
        activeTimers.delete(id)
      }
      return originalClearInterval.call(window, id)
    }

    // Expose timer count for debugging
    ;(window as any).__activeTimerCount = () => activeTimers.size
  }

  startMonitoring(intervalMs: number = 10000) {
    if (this.monitoring) return

    this.monitoring = true
    this.takeSnapshot()

    this.snapshotInterval = setInterval(() => {
      this.takeSnapshot()
      this.analyzeMemoryTrends()
    }, intervalMs) as number
  }

  stopMonitoring() {
    this.monitoring = false
    if (this.snapshotInterval) {
      clearInterval(this.snapshotInterval)
      this.snapshotInterval = undefined
    }
  }

  private takeSnapshot(): MemorySnapshot {
    const memory = (performance as any).memory

    if (!memory) {
      console.warn('Performance.memory API not available')
      return {
        timestamp: Date.now(),
        heapUsed: 0,
        heapTotal: 0,
        external: 0,
        arrayBuffers: 0,
      }
    }

    const snapshot: MemorySnapshot = {
      timestamp: Date.now(),
      heapUsed: memory.usedJSHeapSize,
      heapTotal: memory.totalJSHeapSize,
      external: memory.externalSize || 0,
      arrayBuffers: 0,
    }

    // Keep only last 100 snapshots
    this.snapshots.push(snapshot)
    if (this.snapshots.length > 100) {
      this.snapshots.shift()
    }

    return snapshot
  }

  private analyzeMemoryTrends() {
    if (this.snapshots.length < 10) return

    const recent = this.snapshots.slice(-10)
    const old = this.snapshots.slice(0, 10)

    const recentAvg =
      recent.reduce((sum, s) => sum + s.heapUsed, 0) / recent.length
    const oldAvg = old.reduce((sum, s) => sum + s.heapUsed, 0) / old.length

    const growthRate = (recentAvg - oldAvg) / oldAvg
    const growthRateMBPerMinute =
      (recentAvg - oldAvg) /
      1024 /
      1024 /
      ((recent[recent.length - 1]!.timestamp - old[0]!.timestamp) / 60000)

    if (growthRate > 0.5 || growthRateMBPerMinute > 5) {
      this.emit('potential-leak', {
        growthRate,
        growthRateMBPerMinute,
        currentHeapMB: recentAvg / 1024 / 1024,
      })
    }
  }

  trackComponent(componentName: string, _componentInstance?: any): () => void {
    const trackerId = `${componentName}_${Date.now()}_${Math.random()}`
    const memory = (performance as any).memory

    const tracker: ComponentMemoryTracker = {
      componentName,
      mountTime: Date.now(),
      initialMemory: memory?.usedJSHeapSize || 0,
      peakMemory: memory?.usedJSHeapSize || 0,
      subscriptions: new Set(),
      timers: new Set(),
      eventListeners: [],
      unmountTime: undefined,
      finalMemory: undefined,
    }

    this.componentTrackers.set(trackerId, tracker)

    // Return cleanup function
    return () => {
      tracker.unmountTime = Date.now()
      tracker.finalMemory = memory?.usedJSHeapSize || 0

      // Check for potential leaks
      const memoryRetained = (tracker.finalMemory || 0) - tracker.initialMemory
      const lifetimeMs = (tracker.unmountTime || Date.now()) - tracker.mountTime

      if (memoryRetained > 10 * 1024 * 1024 && lifetimeMs > 5000) {
        console.warn(`Potential memory leak in ${componentName}:`, {
          retainedMB: memoryRetained / 1024 / 1024,
          lifetimeSeconds: lifetimeMs / 1000,
          subscriptions: tracker.subscriptions.size,
          timers: tracker.timers.size,
          eventListeners: tracker.eventListeners.length,
        })
      }

      // Clean up after delay to check for retained references
      setTimeout(() => {
        this.componentTrackers.delete(trackerId)
      }, 30000)
    }
  }

  detectLeaks(): LeakDetectionResult {
    const suspects: string[] = []
    const recommendations: string[] = []

    // Check memory growth
    if (this.snapshots.length >= 2) {
      const first = this.snapshots[0]
      const last = this.snapshots[this.snapshots.length - 1]
      const growthMB = (last!.heapUsed - first!.heapUsed) / 1024 / 1024
      const durationMinutes = (last!.timestamp - first!.timestamp) / 60000
      const leakRate = growthMB / durationMinutes

      if (leakRate > 1) {
        suspects.push(`High memory growth rate: ${leakRate.toFixed(2)} MB/min`)
        recommendations.push('Check for accumulating arrays or maps')
      }
    }

    // Check global event listeners
    for (const [event, count] of this.globalListeners) {
      if (count > 100) {
        suspects.push(`Excessive ${event} listeners: ${count}`)
        recommendations.push(`Review ${event} event listener cleanup`)
      }
    }

    // Check active timers
    const timerCount = (window as any).__activeTimerCount?.() || 0
    if (timerCount > 50) {
      suspects.push(`High number of active timers: ${timerCount}`)
      recommendations.push('Ensure setTimeout/setInterval are cleared')
    }

    // Check component trackers
    const now = Date.now()
    for (const [, tracker] of this.componentTrackers) {
      if (tracker.unmountTime && now - tracker.unmountTime > 60000) {
        suspects.push(
          `Component ${tracker.componentName} still tracked after unmount`
        )
        recommendations.push(`Check cleanup in ${tracker.componentName}`)
      }
    }

    const hasLeak = suspects.length > 0
    const lastSnapshot = this.snapshots[this.snapshots.length - 1]
    const firstSnapshot = this.snapshots[0]

    return {
      hasLeak,
      leakRate:
        lastSnapshot && firstSnapshot
          ? (lastSnapshot.heapUsed - firstSnapshot.heapUsed) /
            1024 /
            1024 /
            ((lastSnapshot.timestamp - firstSnapshot.timestamp) / 60000)
          : undefined,
      suspects,
      recommendations,
    }
  }

  getMemoryReport() {
    const current = this.takeSnapshot()
    const leakDetection = this.detectLeaks()

    return {
      current: {
        heapUsedMB: current.heapUsed / 1024 / 1024,
        heapTotalMB: current.heapTotal / 1024 / 1024,
        externalMB: current.external / 1024 / 1024,
      },
      trends: {
        snapshots: this.snapshots.length,
        durationMinutes:
          this.snapshots.length >= 2
            ? (this.snapshots[this.snapshots.length - 1]!.timestamp -
                this.snapshots[0]!.timestamp) /
              60000
            : 0,
      },
      activeComponents: Array.from(this.componentTrackers.values())
        .filter((t) => !t.unmountTime)
        .map((t) => ({
          name: t.componentName,
          lifetimeSeconds: (Date.now() - t.mountTime) / 1000,
          memoryGrowthMB:
            ((performance as any).memory?.usedJSHeapSize - t.initialMemory) /
            1024 /
            1024,
        })),
      globalListeners: Object.fromEntries(
        Array.from(this.globalListeners.entries()).filter(
          ([_, count]) => count > 0
        )
      ),
      leakDetection,
    }
  }

  // Utility to track object retention
  trackObject(obj: object, label: string) {
    this.retainedObjects.set(obj, label)

    // Use FinalizationRegistry to detect when object is garbage collected
    if (typeof FinalizationRegistry !== 'undefined') {
      const registry = new FinalizationRegistry((heldValue: string) => {
        console.log(`Object garbage collected: ${heldValue}`)
      })

      registry.register(obj, label)
    }
  }

  // Force garbage collection (only works with --expose-gc flag)
  forceGC() {
    if (typeof window !== 'undefined' && (window as any).gc) {
      console.log('Forcing garbage collection...')
      ;(window as any).gc()
    } else {
      console.warn(
        'Garbage collection not available. Run with --expose-gc flag.'
      )
    }
  }
}

// Singleton instance
export const memoryMonitor = new MemoryMonitor()

// React hook for memory monitoring
export function useMemoryMonitor(componentName: string) {
  useEffect(() => {
    const cleanup = memoryMonitor.trackComponent(componentName)
    return cleanup
  }, [componentName])

  return {
    trackObject: (obj: object, label: string) =>
      memoryMonitor.trackObject(obj, `${componentName}:${label}`),
    getReport: () => memoryMonitor.getMemoryReport(),
  }
}
