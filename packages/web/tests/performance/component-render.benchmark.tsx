/**
 * Component rendering performance benchmarks
 * Tests the performance of React component rendering
 */

import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { performanceMonitor } from '../../lib/performance'
import { memoryMonitor } from '../../lib/memory-monitor'

export interface ComponentBenchmarkResult {
  name: string
  renders: number
  duration: number
  avgRenderTime: number
  memoryUsed: number
  errors: number
}

/**
 * Run component rendering benchmarks
 */
export async function runComponentBenchmarks(): Promise<
  ComponentBenchmarkResult[]
> {
  const results: ComponentBenchmarkResult[] = []

  // Benchmark 1: Simple component
  results.push(await benchmarkSimpleComponent())

  // Benchmark 2: Complex component with many children
  results.push(await benchmarkComplexComponent())

  // Benchmark 3: List rendering
  results.push(await benchmarkListRendering())

  // Benchmark 4: Large document rendering
  results.push(await benchmarkLargeDocument())

  // Benchmark 5: Frequent re-renders
  results.push(await benchmarkFrequentRerenders())

  return results
}

/**
 * Simple component for benchmarking
 */
const SimpleComponent: React.FC<{ title: string; content: string }> = ({
  title,
  content,
}) => (
  <div>
    <h1>{title}</h1>
    <p>{content}</p>
  </div>
)

/**
 * Complex component with nested structure
 */
const ComplexComponent: React.FC<{ data: any }> = ({ data }) => (
  <div className='complex-component'>
    <header>
      <h1>{data.title}</h1>
      <nav>
        {data.navigation.map((item: any, i: number) => (
          <a key={i} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
    <main>
      {data.sections.map((section: any, i: number) => (
        <section key={i}>
          <h2>{section.title}</h2>
          <div>{section.content}</div>
          {section.items && (
            <ul>
              {section.items.map((item: any, j: number) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </main>
    <footer>
      <p>{data.footer}</p>
    </footer>
  </div>
)

/**
 * List component for benchmarking
 */
const ListComponent: React.FC<{ items: string[] }> = ({ items }) => (
  <ul>
    {items.map((item, i) => (
      <li key={i}>
        <span>{item}</span>
        <button onClick={() => {}}>Action</button>
      </li>
    ))}
  </ul>
)

/**
 * Document component simulating rich text editor
 */
const DocumentComponent: React.FC<{ blocks: any[] }> = ({ blocks }) => (
  <article>
    {blocks.map((block, i) => {
      switch (block.type) {
        case 'heading':
          return <h2 key={i}>{block.content}</h2>
        case 'paragraph':
          return <p key={i}>{block.content}</p>
        case 'list':
          return (
            <ul key={i}>
              {block.items.map((item: string, j: number) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          )
        case 'code':
          return (
            <pre key={i}>
              <code>{block.content}</code>
            </pre>
          )
        default:
          return <div key={i}>{block.content}</div>
      }
    })}
  </article>
)

/**
 * Benchmark simple component rendering
 */
async function benchmarkSimpleComponent(): Promise<ComponentBenchmarkResult> {
  const name = 'Simple Component'
  const renders = 1000
  let errors = 0

  const {
    result: _result,
    memoryDelta,
    duration,
  } = await memoryMonitor.measureOperation(name, async () => {
    const endTimer = performanceMonitor.startTimer(name)

    for (let i = 0; i < renders; i++) {
      try {
        const { unmount } = render(
          <SimpleComponent
            title={`Title ${i}`}
            content={`Content for component ${i}`}
          />
        )
        unmount()
      } catch (error) {
        errors++
      }
    }

    cleanup()
    return endTimer()
  })

  return {
    name,
    renders,
    duration,
    avgRenderTime: duration / renders,
    memoryUsed: memoryDelta,
    errors,
  }
}

/**
 * Benchmark complex component rendering
 */
async function benchmarkComplexComponent(): Promise<ComponentBenchmarkResult> {
  const name = 'Complex Component'
  const renders = 100
  let errors = 0

  const complexData = {
    title: 'Complex Component Test',
    navigation: Array.from({ length: 10 }, (_, i) => ({
      href: `#link-${i}`,
      label: `Link ${i}`,
    })),
    sections: Array.from({ length: 5 }, (_, i) => ({
      title: `Section ${i}`,
      content: `Content for section ${i}`,
      items: Array.from({ length: 20 }, (_, j) => `Item ${j}`),
    })),
    footer: 'Footer content',
  }

  const {
    result: _result,
    memoryDelta,
    duration,
  } = await memoryMonitor.measureOperation(name, async () => {
    const endTimer = performanceMonitor.startTimer(name)

    for (let i = 0; i < renders; i++) {
      try {
        const { unmount } = render(<ComplexComponent data={complexData} />)
        unmount()
      } catch (error) {
        errors++
      }
    }

    cleanup()
    return endTimer()
  })

  return {
    name,
    renders,
    duration,
    avgRenderTime: duration / renders,
    memoryUsed: memoryDelta,
    errors,
  }
}

/**
 * Benchmark list rendering performance
 */
async function benchmarkListRendering(): Promise<ComponentBenchmarkResult> {
  const name = 'List Rendering'
  const renders = 50
  const itemCounts = [100, 500, 1000]
  let totalRenders = 0
  let errors = 0

  const {
    result: _result,
    memoryDelta,
    duration,
  } = await memoryMonitor.measureOperation(name, async () => {
    const endTimer = performanceMonitor.startTimer(name)

    for (const itemCount of itemCounts) {
      const items = Array.from({ length: itemCount }, (_, i) => `Item ${i}`)

      for (let i = 0; i < renders; i++) {
        try {
          const { unmount } = render(<ListComponent items={items} />)
          unmount()
          totalRenders++
        } catch (error) {
          errors++
        }
      }
    }

    cleanup()
    return endTimer()
  })

  return {
    name,
    renders: totalRenders,
    duration,
    avgRenderTime: duration / totalRenders,
    memoryUsed: memoryDelta,
    errors,
  }
}

/**
 * Benchmark large document rendering
 */
async function benchmarkLargeDocument(): Promise<ComponentBenchmarkResult> {
  const name = 'Large Document'
  const renders = 10
  let errors = 0

  // Generate large document with various block types
  const largeDocument = Array.from({ length: 500 }, (_, i) => {
    const types = ['heading', 'paragraph', 'list', 'code']
    const type = types[i % types.length]

    switch (type) {
      case 'heading':
        return { type, content: `Heading ${i}` }
      case 'paragraph':
        return {
          type,
          content: `This is paragraph ${i} with some content that simulates a real document.`,
        }
      case 'list':
        return {
          type,
          items: Array.from({ length: 10 }, (_, j) => `List item ${j}`),
        }
      case 'code':
        return { type, content: `function example${i}() { return ${i}; }` }
      default:
        return { type: 'paragraph', content: `Default content ${i}` }
    }
  })

  const {
    result: _result,
    memoryDelta,
    duration,
  } = await memoryMonitor.measureOperation(name, async () => {
    const endTimer = performanceMonitor.startTimer(name)

    for (let i = 0; i < renders; i++) {
      try {
        const { unmount } = render(<DocumentComponent blocks={largeDocument} />)
        unmount()
      } catch (error) {
        errors++
      }
    }

    cleanup()
    return endTimer()
  })

  return {
    name,
    renders,
    duration,
    avgRenderTime: duration / renders,
    memoryUsed: memoryDelta,
    errors,
  }
}

/**
 * Benchmark frequent re-renders
 */
async function benchmarkFrequentRerenders(): Promise<ComponentBenchmarkResult> {
  const name = 'Frequent Re-renders'
  const renders = 500
  let errors = 0

  const {
    result: _result,
    memoryDelta,
    duration,
  } = await memoryMonitor.measureOperation(name, async () => {
    const endTimer = performanceMonitor.startTimer(name)

    try {
      const { rerender, unmount } = render(
        <SimpleComponent title='Initial' content='Initial content' />
      )

      for (let i = 0; i < renders; i++) {
        rerender(
          <SimpleComponent
            title={`Updated ${i}`}
            content={`Updated content ${i}`}
          />
        )
      }

      unmount()
    } catch (error) {
      errors++
    }

    cleanup()
    return endTimer()
  })

  return {
    name,
    renders,
    duration,
    avgRenderTime: duration / renders,
    memoryUsed: memoryDelta,
    errors,
  }
}
