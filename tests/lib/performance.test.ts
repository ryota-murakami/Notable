import {
  PerformanceMonitor,
  debounceWithMetrics,
  throttleWithMetrics,
  memoizeWithMetrics,
  observeWebVitals,
} from '@/lib/performance'

describe('PerformanceMonitor', () => {
  let monitor: PerformanceMonitor

  beforeEach(() => {
    monitor = PerformanceMonitor.getInstance()
    monitor.clear()
  })

  describe('measureRender', () => {
    it('should measure render time', () => {
      let callbackExecuted = false
      monitor.measureRender('TestComponent', () => {
        callbackExecuted = true
        // Simulate work
        for (let i = 0; i < 1000000; i++) {}
      })

      expect(callbackExecuted).toBe(true)

      const report = monitor.getReport()
      expect(
        report.metrics.find((m) => m.name === 'TestComponent'),
      ).toBeDefined()
    })

    it('should aggregate multiple render measurements', () => {
      for (let i = 0; i < 5; i++) {
        monitor.measureRender('TestComponent', () => {
          for (let j = 0; j < 100000; j++) {}
        })
      }

      const report = monitor.getReport()
      const metric = report.metrics.find((m) => m.name === 'TestComponent')
      expect(metric?.count).toBe(5)
      expect(metric?.avgDuration).toBeGreaterThan(0)
    })
  })

  describe('measureAsync', () => {
    it('should measure async operation time', async () => {
      const result = await monitor.measureAsync('testOperation', async () => {
        await new Promise((resolve) => setTimeout(resolve, 50))
        return 'test result'
      })

      expect(result).toBe('test result')

      const report = monitor.getReport()
      const metric = report.metrics.find((m) => m.name === 'testOperation')
      expect(metric).toBeDefined()
      expect(metric?.count).toBe(1)
      expect(metric?.totalDuration).toBeGreaterThanOrEqual(50)
    })

    it('should handle errors in async operations', async () => {
      await expect(
        monitor.measureAsync('failingOperation', async () => {
          throw new Error('test error')
        }),
      ).rejects.toThrow('test error')

      const report = monitor.getReport()
      const metric = report.metrics.find((m) => m.name === 'failingOperation')
      expect(metric).toBeDefined()
      expect(metric?.count).toBe(1)
    })
  })

  describe('getReport', () => {
    it('should generate comprehensive report', async () => {
      monitor.measureRender('ComponentA', () => {})
      await monitor.measureAsync('AsyncOpA', async () => {})

      const report = monitor.getReport()

      expect(report).toMatchObject({
        metrics: expect.any(Array),
        summary: expect.any(Object),
      })

      expect(report.summary.totalRenderTime).toBeGreaterThan(0)
      expect(report.summary.totalAsyncTime).toBeGreaterThan(0)
    })
  })
})

describe('Utility Functions', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  })

  describe('debounceWithMetrics', () => {
    it('should debounce function calls', () => {
      const callback = jest.fn()
      const debounced = debounceWithMetrics(callback, 300, 'test-debounce')

      debounced('call1')
      debounced('call2')
      debounced('call3')

      expect(callback).not.toHaveBeenCalled()

      jest.advanceTimersByTime(300)

      expect(callback).toHaveBeenCalledTimes(1)
      expect(callback).toHaveBeenCalledWith('call3')
    })
  })

  describe('throttleWithMetrics', () => {
    it('should throttle function calls', () => {
      const callback = jest.fn()
      const throttled = throttleWithMetrics(callback, 300, 'test-throttle')

      throttled('call1')
      expect(callback).toHaveBeenCalledTimes(1)
      expect(callback).toHaveBeenCalledWith('call1')

      throttled('call2')
      throttled('call3')
      expect(callback).toHaveBeenCalledTimes(1) // Still 1

      jest.advanceTimersByTime(300)

      throttled('call4')
      expect(callback).toHaveBeenCalledTimes(2)
      expect(callback).toHaveBeenCalledWith('call4')
    })
  })

  describe('memoizeWithMetrics', () => {
    it('should memoize function results', () => {
      const expensiveFn = jest.fn((a: number, b: number) => a + b)
      const memoizedFn = memoizeWithMetrics(expensiveFn, 'test-memo')

      expect(memoizedFn(1, 2)).toBe(3)
      expect(memoizedFn(1, 2)).toBe(3)
      expect(memoizedFn(1, 2)).toBe(3)

      expect(expensiveFn).toHaveBeenCalledTimes(1)

      expect(memoizedFn(2, 3)).toBe(5)
      expect(expensiveFn).toHaveBeenCalledTimes(2)
    })
  })
})

describe('measureWebVitals', () => {
  it('should return empty object when Performance API is not available', () => {
    const originalPerformance = global.performance
    // @ts-ignore
    delete global.performance

    const vitals = observeWebVitals()
    expect(vitals).toEqual({})

    global.performance = originalPerformance
  })

  it('should measure web vitals when available', () => {
    // Mock Performance Observer
    const mockObserver = {
      observe: jest.fn(),
      disconnect: jest.fn(),
    }

    global.PerformanceObserver = jest.fn(() => mockObserver) as any

    // Mock performance.getEntriesByType
    const mockEntries = [
      { name: 'first-paint', startTime: 100 },
      { name: 'first-contentful-paint', startTime: 200 },
    ]

    global.performance.getEntriesByType = jest.fn(() => mockEntries) as any

    const vitals = observeWebVitals()

    expect(vitals).toMatchObject({
      FP: 100,
      FCP: 200,
    })
  })
})
