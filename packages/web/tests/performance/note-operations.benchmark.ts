/**
 * Database operation performance benchmarks
 * Tests the performance of note-related database operations
 */

import { performanceMonitor } from '../../lib/performance'
import { memoryMonitor } from '../../lib/memory-monitor'

export interface BenchmarkResult {
  name: string
  operations: number
  duration: number
  opsPerSecond: number
  memoryUsed: number
  errors: number
}

/**
 * Run note operation benchmarks
 */
export async function runNoteOperationBenchmarks(): Promise<BenchmarkResult[]> {
  const results: BenchmarkResult[] = []

  // Benchmark 1: Note creation
  results.push(await benchmarkNoteCreation())

  // Benchmark 2: Note retrieval
  results.push(await benchmarkNoteRetrieval())

  // Benchmark 3: Note search
  results.push(await benchmarkNoteSearch())

  // Benchmark 4: Bulk operations
  results.push(await benchmarkBulkOperations())

  // Benchmark 5: Concurrent operations
  results.push(await benchmarkConcurrentOperations())

  return results
}

/**
 * Benchmark note creation performance
 */
async function benchmarkNoteCreation(): Promise<BenchmarkResult> {
  const name = 'Note Creation'
  const operations = 100
  let errors = 0

  const { result, memoryDelta, duration } =
    await memoryMonitor.measureOperation(name, async () => {
      const endTimer = performanceMonitor.startTimer(name)

      for (let i = 0; i < operations; i++) {
        try {
          // Simulate note creation
          await simulateNoteCreation({
            title: `Benchmark Note ${i}`,
            content: generateLargeContent(1000), // 1000 words
            tags: ['benchmark', 'test'],
          })
        } catch (error) {
          errors++
        }
      }

      return endTimer()
    })

  return {
    name,
    operations,
    duration,
    opsPerSecond: (operations / duration) * 1000,
    memoryUsed: memoryDelta,
    errors,
  }
}

/**
 * Benchmark note retrieval performance
 */
async function benchmarkNoteRetrieval(): Promise<BenchmarkResult> {
  const name = 'Note Retrieval'
  const operations = 500
  let errors = 0

  const { result, memoryDelta, duration } =
    await memoryMonitor.measureOperation(name, async () => {
      const endTimer = performanceMonitor.startTimer(name)

      for (let i = 0; i < operations; i++) {
        try {
          // Simulate note retrieval
          await simulateNoteRetrieval(`note-${i % 100}`)
        } catch (error) {
          errors++
        }
      }

      return endTimer()
    })

  return {
    name,
    operations,
    duration,
    opsPerSecond: (operations / duration) * 1000,
    memoryUsed: memoryDelta,
    errors,
  }
}

/**
 * Benchmark note search performance
 */
async function benchmarkNoteSearch(): Promise<BenchmarkResult> {
  const name = 'Note Search'
  const operations = 100
  let errors = 0

  const searchTerms = ['test', 'benchmark', 'performance', 'note', 'content']

  const { result, memoryDelta, duration } =
    await memoryMonitor.measureOperation(name, async () => {
      const endTimer = performanceMonitor.startTimer(name)

      for (let i = 0; i < operations; i++) {
        try {
          // Simulate note search
          await simulateNoteSearch(searchTerms[i % searchTerms.length])
        } catch (error) {
          errors++
        }
      }

      return endTimer()
    })

  return {
    name,
    operations,
    duration,
    opsPerSecond: (operations / duration) * 1000,
    memoryUsed: memoryDelta,
    errors,
  }
}

/**
 * Benchmark bulk operations
 */
async function benchmarkBulkOperations(): Promise<BenchmarkResult> {
  const name = 'Bulk Operations'
  const operations = 10 // 10 bulk operations of 100 notes each
  let errors = 0

  const { result, memoryDelta, duration } =
    await memoryMonitor.measureOperation(name, async () => {
      const endTimer = performanceMonitor.startTimer(name)

      for (let i = 0; i < operations; i++) {
        try {
          // Simulate bulk update
          await simulateBulkUpdate(100)
        } catch (error) {
          errors++
        }
      }

      return endTimer()
    })

  return {
    name,
    operations: operations * 100, // Total notes processed
    duration,
    opsPerSecond: ((operations * 100) / duration) * 1000,
    memoryUsed: memoryDelta,
    errors,
  }
}

/**
 * Benchmark concurrent operations
 */
async function benchmarkConcurrentOperations(): Promise<BenchmarkResult> {
  const name = 'Concurrent Operations'
  const concurrency = 10
  const operationsPerThread = 50
  const totalOperations = concurrency * operationsPerThread
  let errors = 0

  const { result, memoryDelta, duration } =
    await memoryMonitor.measureOperation(name, async () => {
      const endTimer = performanceMonitor.startTimer(name)

      const promises = []
      for (let i = 0; i < concurrency; i++) {
        promises.push(
          (async () => {
            for (let j = 0; j < operationsPerThread; j++) {
              try {
                // Mix of operations
                if (j % 3 === 0) {
                  await simulateNoteCreation({
                    title: `Concurrent Note ${i}-${j}`,
                    content: generateLargeContent(500),
                    tags: ['concurrent'],
                  })
                } else if (j % 3 === 1) {
                  await simulateNoteRetrieval(`note-${j}`)
                } else {
                  await simulateNoteSearch('concurrent')
                }
              } catch (error) {
                errors++
              }
            }
          })()
        )
      }

      await Promise.all(promises)
      return endTimer()
    })

  return {
    name,
    operations: totalOperations,
    duration,
    opsPerSecond: (totalOperations / duration) * 1000,
    memoryUsed: memoryDelta,
    errors,
  }
}

// Simulation functions (replace with actual database operations in real implementation)

async function simulateNoteCreation(note: any): Promise<void> {
  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 20 + 10))

  // Simulate occasional errors
  if (Math.random() < 0.01) {
    throw new Error('Simulated creation error')
  }
}

async function simulateNoteRetrieval(id: string): Promise<any> {
  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 10 + 5))

  // Simulate occasional errors
  if (Math.random() < 0.005) {
    throw new Error('Simulated retrieval error')
  }

  return {
    id,
    title: `Note ${id}`,
    content: generateLargeContent(1000),
    tags: ['test'],
  }
}

async function simulateNoteSearch(query: string): Promise<any[]> {
  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 30 + 20))

  // Simulate occasional errors
  if (Math.random() < 0.01) {
    throw new Error('Simulated search error')
  }

  const results = []
  const count = Math.floor(Math.random() * 50) + 10
  for (let i = 0; i < count; i++) {
    results.push({
      id: `search-result-${i}`,
      title: `Result ${i} for ${query}`,
      excerpt: `...${query}...`,
    })
  }
  return results
}

async function simulateBulkUpdate(count: number): Promise<void> {
  // Simulate network latency for bulk operation
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 100 + 50))

  // Simulate occasional errors
  if (Math.random() < 0.02) {
    throw new Error('Simulated bulk update error')
  }
}

function generateLargeContent(wordCount: number): string {
  const words = [
    'lorem',
    'ipsum',
    'dolor',
    'sit',
    'amet',
    'consectetur',
    'adipiscing',
    'elit',
    'sed',
    'do',
  ]
  let content = ''
  for (let i = 0; i < wordCount; i++) {
    content += words[i % words.length] + ' '
  }
  return content.trim()
}

// Export alias for backward compatibility
export { runNoteOperationBenchmarks as runAllBenchmarks }
