import { performance } from 'perf_hooks'
import React from 'react'

export interface BenchmarkResult {
  name: string
  iterations: number
  totalTime: number
  averageTime: number
  minTime: number
  maxTime: number
  standardDeviation: number
  throughput: number // operations per second
  memoryUsed?: number // in MB
}

export interface BenchmarkOptions {
  iterations?: number
  warmupIterations?: number
  timeout?: number // in milliseconds
  trackMemory?: boolean
}

export class Benchmark {
  private results: BenchmarkResult[] = []

  async run(
    name: string,
    fn: () => void | Promise<void>,
    options: BenchmarkOptions = {},
  ): Promise<BenchmarkResult> {
    const {
      iterations = 1000,
      warmupIterations = 100,
      timeout = 30000,
      trackMemory = true,
    } = options

    console.log(`Running benchmark: ${name}`)

    // Warmup
    console.log(`Warming up (${warmupIterations} iterations)...`)
    for (let i = 0; i < warmupIterations; i++) {
      await fn()
    }

    // Force GC if available
    if (typeof global !== 'undefined' && (global as any).gc) {
      ;(global as any).gc()
    }

    const times: number[] = []
    const startMemory = trackMemory ? this.getMemoryUsage() : 0
    const startTime = performance.now()

    // Run benchmark
    console.log(`Running ${iterations} iterations...`)
    for (let i = 0; i < iterations; i++) {
      const iterationStart = performance.now()
      await fn()
      const iterationEnd = performance.now()
      times.push(iterationEnd - iterationStart)

      // Check timeout
      if (performance.now() - startTime > timeout) {
        console.warn(`Benchmark "${name}" timed out after ${i + 1} iterations`)
        break
      }
    }

    const endTime = performance.now()
    const endMemory = trackMemory ? this.getMemoryUsage() : 0

    // Calculate statistics
    const totalTime = endTime - startTime
    const averageTime = times.reduce((a, b) => a + b, 0) / times.length
    const minTime = Math.min(...times)
    const maxTime = Math.max(...times)

    const variance =
      times.reduce((sum, time) => {
        const diff = time - averageTime
        return sum + diff * diff
      }, 0) / times.length
    const standardDeviation = Math.sqrt(variance)

    const throughput = 1000 / averageTime // ops per second

    const result: BenchmarkResult = {
      name,
      iterations: times.length,
      totalTime,
      averageTime,
      minTime,
      maxTime,
      standardDeviation,
      throughput,
      memoryUsed: trackMemory ? endMemory - startMemory : undefined,
    }

    this.results.push(result)
    return result
  }

  async compare(
    benchmarks: Array<{ name: string; fn: () => void | Promise<void> }>,
    options: BenchmarkOptions = {},
  ): Promise<BenchmarkResult[]> {
    const results: BenchmarkResult[] = []

    for (const { name, fn } of benchmarks) {
      const result = await this.run(name, fn, options)
      results.push(result)
    }

    // Sort by throughput (highest first)
    results.sort((a, b) => b.throughput - a.throughput)

    // Print comparison
    console.log('\n=== Benchmark Results ===\n')
    console.log(
      'Name'.padEnd(30) +
        'Avg Time (ms)'.padEnd(15) +
        'Ops/sec'.padEnd(15) +
        'Memory (MB)',
    )
    console.log('-'.repeat(75))

    const baseline = results[0]
    for (const result of results) {
      const relativeSpeed = (
        (result.throughput / baseline.throughput) *
        100
      ).toFixed(1)
      const memoryStr =
        result.memoryUsed !== undefined ? result.memoryUsed.toFixed(2) : 'N/A'

      console.log(
        result.name.padEnd(30) +
          result.averageTime.toFixed(3).padEnd(15) +
          result.throughput.toFixed(0).padEnd(15) +
          memoryStr +
          (result === baseline ? ' (baseline)' : ` (${relativeSpeed}%)`),
      )
    }

    return results
  }

  private getMemoryUsage(): number {
    if (typeof process !== 'undefined' && process.memoryUsage) {
      return process.memoryUsage().heapUsed / 1024 / 1024
    }
    if (typeof window !== 'undefined' && (performance as any).memory) {
      return (performance as any).memory.usedJSHeapSize / 1024 / 1024
    }
    return 0
  }

  getResults(): BenchmarkResult[] {
    return this.results
  }

  exportResults(format: 'json' | 'csv' = 'json'): string {
    if (format === 'json') {
      return JSON.stringify(this.results, null, 2)
    }

    // CSV format
    const headers = [
      'Name',
      'Iterations',
      'Total Time (ms)',
      'Average Time (ms)',
      'Min Time (ms)',
      'Max Time (ms)',
      'Std Dev',
      'Throughput (ops/sec)',
      'Memory Used (MB)',
    ]

    const rows = this.results.map((r) => [
      r.name,
      r.iterations,
      r.totalTime.toFixed(3),
      r.averageTime.toFixed(3),
      r.minTime.toFixed(3),
      r.maxTime.toFixed(3),
      r.standardDeviation.toFixed(3),
      r.throughput.toFixed(0),
      r.memoryUsed?.toFixed(2) || 'N/A',
    ])

    return [headers, ...rows].map((row) => row.join(',')).join('\n')
  }
}

// Performance testing utilities
export class PerformanceTester {
  static async measureRenderTime(
    component: () => void,
    iterations: number = 100,
  ): Promise<number> {
    const times: number[] = []

    for (let i = 0; i < iterations; i++) {
      const start = performance.now()
      component()
      const end = performance.now()
      times.push(end - start)
    }

    return times.reduce((a, b) => a + b, 0) / times.length
  }

  static async measureAsyncOperation<T>(
    operation: () => Promise<T>,
    iterations: number = 100,
  ): Promise<{ result: T; averageTime: number }> {
    const times: number[] = []
    let result: T

    for (let i = 0; i < iterations; i++) {
      const start = performance.now()
      result = await operation()
      const end = performance.now()
      times.push(end - start)
    }

    return {
      result: result!,
      averageTime: times.reduce((a, b) => a + b, 0) / times.length,
    }
  }

  static profileFunction<T extends (...args: any[]) => any>(
    fn: T,
    name: string = fn.name,
  ): T {
    const callCounts = new Map<string, number>()
    const callTimes = new Map<string, number[]>()

    const profiledFn = ((...args: Parameters<T>) => {
      const key = `${name}(${args.map((a) => typeof a).join(', ')})`
      const start = performance.now()

      try {
        const result = fn(...args)

        if (result instanceof Promise) {
          return result.finally(() => {
            const duration = performance.now() - start
            this.recordCall(callCounts, callTimes, key, duration)
          })
        }

        const duration = performance.now() - start
        this.recordCall(callCounts, callTimes, key, duration)
        return result
      } catch (error) {
        const duration = performance.now() - start
        this.recordCall(callCounts, callTimes, key, duration)
        throw error
      }
    }) as T

    // Attach profiling methods
    ;(profiledFn as any).__getProfile = () => {
      const profile: any = {}

      for (const [key, count] of callCounts) {
        const times = callTimes.get(key) || []
        const totalTime = times.reduce((a, b) => a + b, 0)
        const avgTime = totalTime / count

        profile[key] = {
          calls: count,
          totalTime: totalTime.toFixed(3),
          averageTime: avgTime.toFixed(3),
          minTime: Math.min(...times).toFixed(3),
          maxTime: Math.max(...times).toFixed(3),
        }
      }

      return profile
    }

    return profiledFn
  }

  private static recordCall(
    callCounts: Map<string, number>,
    callTimes: Map<string, number[]>,
    key: string,
    duration: number,
  ) {
    callCounts.set(key, (callCounts.get(key) || 0) + 1)

    if (!callTimes.has(key)) {
      callTimes.set(key, [])
    }
    callTimes.get(key)!.push(duration)
  }
}

// React component performance testing
export async function benchmarkComponent(
  Component: React.ComponentType<any>,
  props: any = {},
  options: BenchmarkOptions = {},
): Promise<BenchmarkResult> {
  if (typeof window === 'undefined') {
    throw new Error('Component benchmarking requires a DOM environment')
  }

  const benchmark = new Benchmark()

  return benchmark.run(
    Component.name || 'Anonymous Component',
    async () => {
      const container = document.createElement('div')
      document.body.appendChild(container)

      // Render component
      const { createRoot } = await import('react-dom/client')
      const root = createRoot(container)
      root.render(React.createElement(Component, props))

      // Force layout/paint
      container.offsetHeight

      // Cleanup
      root.unmount()
      document.body.removeChild(container)
    },
    options,
  )
}
