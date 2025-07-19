import { renderHook, act } from '@testing-library/react'
import { usePerformanceMonitor } from '@/hooks/use-performance-monitor'

describe('usePerformanceMonitor', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should initialize with default state', () => {
    const { result } = renderHook(() => usePerformanceMonitor('TestComponent'))

    expect(result.current.isMonitoring).toBe(false)
    expect(result.current.metrics).toEqual([])
  })

  it('should start and stop monitoring', () => {
    const { result } = renderHook(() => usePerformanceMonitor('TestComponent'))

    act(() => {
      result.current.startMonitoring()
    })

    expect(result.current.isMonitoring).toBe(true)

    act(() => {
      result.current.stopMonitoring()
    })

    expect(result.current.isMonitoring).toBe(false)
  })

  it('should measure render time', async () => {
    const { result } = renderHook(() => usePerformanceMonitor('TestComponent'))

    act(() => {
      result.current.startMonitoring()
    })

    let measureResult: number = 0
    act(() => {
      measureResult = result.current.measureRender(() => {
        // Simulate some work
        const arr = new Array(1000).fill(0).map((_, i) => i * 2)
      })
    })

    expect(measureResult).toBeGreaterThan(0)
    expect(result.current.metrics.length).toBe(1)
    expect(result.current.metrics[0]).toMatchObject({
      type: 'render',
      component: 'TestComponent',
      duration: expect.any(Number),
      timestamp: expect.any(Number),
    })
  })

  it('should measure async operations', async () => {
    const { result } = renderHook(() => usePerformanceMonitor('TestComponent'))

    act(() => {
      result.current.startMonitoring()
    })

    const testAsyncOperation = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50))
      return 'test result'
    }

    let asyncResult: string = ''
    await act(async () => {
      asyncResult = await result.current.measureAsync(
        'test-operation',
        testAsyncOperation,
      )
    })

    expect(asyncResult).toBe('test result')
    expect(result.current.metrics.length).toBe(1)
    expect(result.current.metrics[0]).toMatchObject({
      type: 'async',
      operation: 'test-operation',
      component: 'TestComponent',
      duration: expect.any(Number),
      timestamp: expect.any(Number),
    })
    expect(result.current.metrics[0].duration).toBeGreaterThanOrEqual(50)
  })

  it('should handle errors in async operations', async () => {
    const { result } = renderHook(() => usePerformanceMonitor('TestComponent'))

    act(() => {
      result.current.startMonitoring()
    })

    const failingOperation = async () => {
      throw new Error('Test error')
    }

    await expect(
      act(async () => {
        await result.current.measureAsync('failing-operation', failingOperation)
      }),
    ).rejects.toThrow('Test error')

    expect(result.current.metrics.length).toBe(1)
    expect(result.current.metrics[0]).toMatchObject({
      type: 'async',
      operation: 'failing-operation',
      component: 'TestComponent',
      error: true,
    })
  })

  it('should generate report with statistics', async () => {
    const { result } = renderHook(() => usePerformanceMonitor('TestComponent'))

    act(() => {
      result.current.startMonitoring()
    })

    // Add multiple measurements
    for (let i = 0; i < 5; i++) {
      act(() => {
        result.current.measureRender(() => {
          const arr = new Array(100).fill(0)
        })
      })
    }

    const report = result.current.getReport()

    expect(report.component).toBe('TestComponent')
    expect(report.totalMeasurements).toBe(5)
    expect(report.renderMetrics).toBeDefined()
    expect(report.renderMetrics.count).toBe(5)
    expect(report.renderMetrics.average).toBeGreaterThan(0)
    expect(report.renderMetrics.min).toBeGreaterThan(0)
    expect(report.renderMetrics.max).toBeGreaterThan(0)
    expect(report.renderMetrics.median).toBeGreaterThan(0)
  })

  it('should clear metrics', () => {
    const { result } = renderHook(() => usePerformanceMonitor('TestComponent'))

    act(() => {
      result.current.startMonitoring()
      result.current.measureRender(() => {})
      result.current.measureRender(() => {})
    })

    expect(result.current.metrics.length).toBe(2)

    act(() => {
      result.current.clearMetrics()
    })

    expect(result.current.metrics.length).toBe(0)
  })

  it('should not collect metrics when monitoring is disabled', () => {
    const { result } = renderHook(() => usePerformanceMonitor('TestComponent'))

    // Don't start monitoring
    act(() => {
      result.current.measureRender(() => {})
    })

    expect(result.current.metrics.length).toBe(0)
  })

  it('should handle concurrent async measurements', async () => {
    const { result } = renderHook(() => usePerformanceMonitor('TestComponent'))

    act(() => {
      result.current.startMonitoring()
    })

    const asyncOp1 = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50))
      return 'op1'
    }

    const asyncOp2 = async () => {
      await new Promise((resolve) => setTimeout(resolve, 30))
      return 'op2'
    }

    const [result1, result2] = await act(async () => {
      return Promise.all([
        result.current.measureAsync('operation-1', asyncOp1),
        result.current.measureAsync('operation-2', asyncOp2),
      ])
    })

    expect(result1).toBe('op1')
    expect(result2).toBe('op2')
    expect(result.current.metrics.length).toBe(2)

    const op1Metric = result.current.metrics.find(
      (m) => m.operation === 'operation-1',
    )
    const op2Metric = result.current.metrics.find(
      (m) => m.operation === 'operation-2',
    )

    expect(op1Metric?.duration).toBeGreaterThanOrEqual(50)
    expect(op2Metric?.duration).toBeGreaterThanOrEqual(30)
  })
})
