import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { Benchmark } from './benchmark'
import { VirtualizedNoteList } from '@/components/virtualized/VirtualizedNoteList'
import { OptimizedImage } from '@/components/optimized/OptimizedImage'
import { PlateEditor } from '@/components/plate-editor'
import { Note } from '@/types/note'

// Generate mock notes for testing
function generateMockNotes(count: number): Note[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `note-${i}`,
    title: `Note ${i}`,
    content: [
      {
        type: 'p',
        children: [
          {
            text: `Content for note ${i}. Lorem ipsum dolor sit amet...`.repeat(
              5,
            ),
          },
        ],
      },
    ],
    userId: 'test-user',
    createdAt: new Date(Date.now() - i * 1000 * 60).toISOString(),
    updatedAt: new Date(Date.now() - i * 1000 * 30).toISOString(),
    tags: [],
    folderId: null,
    isPublic: false,
  }))
}

export async function benchmarkComponentRendering() {
  const benchmark = new Benchmark()

  console.log('Starting Component Rendering Benchmark...\n')

  // Test 1: VirtualizedNoteList with different sizes
  const notesSizes = [100, 500, 1000, 5000]

  for (const size of notesSizes) {
    const notes = generateMockNotes(size)

    await benchmark.run(
      `Render VirtualizedNoteList (${size} notes)`,
      () => {
        const { container, unmount } = render(
          <div style={{ height: '600px', width: '400px' }}>
            <VirtualizedNoteList
              notes={notes}
              onNoteSelect={() => {}}
              onNoteDelete={() => {}}
            />
          </div>,
        )

        // Force render
        container.offsetHeight

        // Cleanup
        unmount()
      },
      { iterations: 20, warmupIterations: 2 },
    )
  }

  // Test 2: Scroll Performance
  const scrollNotes = generateMockNotes(1000)

  await benchmark.run(
    'Scroll VirtualizedNoteList (1000 notes)',
    async () => {
      const { container, unmount } = render(
        <div style={{ height: '600px', width: '400px' }}>
          <VirtualizedNoteList
            notes={scrollNotes}
            onNoteSelect={() => {}}
            onNoteDelete={() => {}}
          />
        </div>,
      )

      // Get the scrollable element
      const scrollContainer = container.querySelector(
        '[data-testid="virtual-list"]',
      )
      if (scrollContainer) {
        // Simulate scrolling
        for (let i = 0; i < 10; i++) {
          fireEvent.scroll(scrollContainer, { target: { scrollTop: i * 1000 } })
          await waitFor(() => new Promise((resolve) => setTimeout(resolve, 10)))
        }
      }

      unmount()
    },
    { iterations: 10, warmupIterations: 1 },
  )

  // Test 3: Image Loading Performance
  const imageUrls = Array.from(
    { length: 20 },
    (_, i) => `https://via.placeholder.com/400x300?text=Image${i}`,
  )

  await benchmark.run(
    'Render OptimizedImage Gallery (20 images)',
    () => {
      const { container, unmount } = render(
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
          }}
        >
          {imageUrls.map((url, i) => (
            <OptimizedImage
              key={i}
              src={url}
              alt={`Test image ${i}`}
              width={400}
              height={300}
            />
          ))}
        </div>,
      )

      // Force layout
      container.offsetHeight

      unmount()
    },
    { iterations: 20, warmupIterations: 2 },
  )

  // Test 4: Plate Editor Initialization
  await benchmark.run(
    'Initialize Plate Editor',
    () => {
      const { container, unmount } = render(
        <PlateEditor
          initialValue={[
            { type: 'p', children: [{ text: 'Initial content' }] },
          ]}
          onChange={() => {}}
        />,
      )

      // Force render
      container.offsetHeight

      unmount()
    },
    { iterations: 30, warmupIterations: 3 },
  )

  // Test 5: Editor with Large Document
  const largeDocument = Array.from({ length: 100 }, (_, i) => ({
    type: 'p',
    children: [
      {
        text: `Paragraph ${i}: Lorem ipsum dolor sit amet, consectetur adipiscing elit...`,
      },
    ],
  }))

  await benchmark.run(
    'Render Editor with Large Document (100 paragraphs)',
    () => {
      const { container, unmount } = render(
        <PlateEditor initialValue={largeDocument} onChange={() => {}} />,
      )

      // Force render
      container.offsetHeight

      unmount()
    },
    { iterations: 10, warmupIterations: 1 },
  )

  // Test 6: Re-render Performance
  await benchmark.run(
    'Re-render Note List (prop changes)',
    async () => {
      let notes = generateMockNotes(100)

      const { rerender, unmount } = render(
        <VirtualizedNoteList
          notes={notes}
          onNoteSelect={() => {}}
          onNoteDelete={() => {}}
        />,
      )

      // Simulate prop updates
      for (let i = 0; i < 10; i++) {
        notes = [...notes]
        notes[0] = { ...notes[0], title: `Updated ${i}` }

        rerender(
          <VirtualizedNoteList
            notes={notes}
            onNoteSelect={() => {}}
            onNoteDelete={() => {}}
          />,
        )
      }

      unmount()
    },
    { iterations: 20, warmupIterations: 2 },
  )

  return benchmark.getResults()
}

// Benchmark React hooks performance
export async function benchmarkHooksPerformance() {
  const benchmark = new Benchmark()

  console.log('Starting Hooks Performance Benchmark...\n')

  // Mock hook implementations for testing
  const useOptimizedSearch = (query: string, items: any[]) => {
    return React.useMemo(() => {
      if (!query) return items
      return items.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()),
      )
    }, [query, items])
  }

  const TestComponent: React.FC<{ itemCount: number }> = ({ itemCount }) => {
    const [searchQuery, setSearchQuery] = React.useState('')
    const items = React.useMemo(
      () =>
        Array.from({ length: itemCount }, (_, i) => ({
          id: i,
          title: `Item ${i}`,
          content: `Content ${i}`,
        })),
      [itemCount],
    )

    const filteredItems = useOptimizedSearch(searchQuery, items)

    return (
      <div>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
        />
        <div>Results: {filteredItems.length}</div>
      </div>
    )
  }

  // Test different item counts
  const itemCounts = [100, 1000, 5000]

  for (const count of itemCounts) {
    await benchmark.run(
      `Search Hook Performance (${count} items)`,
      async () => {
        const { container, unmount } = render(
          <TestComponent itemCount={count} />,
        )

        const input = container.querySelector('input')
        if (input) {
          // Simulate typing
          fireEvent.change(input, { target: { value: 'Item 5' } })
          await waitFor(() =>
            container.querySelector('div')?.textContent?.includes('Results:'),
          )
        }

        unmount()
      },
      { iterations: 50, warmupIterations: 5 },
    )
  }

  return benchmark.getResults()
}

// Memory leak detection for components
export async function detectComponentMemoryLeaks() {
  console.log('Starting Memory Leak Detection...\n')

  const results: any[] = []

  // Test 1: Check for event listener cleanup
  const TestComponentWithListeners: React.FC = () => {
    React.useEffect(() => {
      const handlers: Array<() => void> = []

      // Simulate multiple event listeners
      for (let i = 0; i < 10; i++) {
        const handler = () => console.log(`Handler ${i}`)
        window.addEventListener('resize', handler)
        handlers.push(handler)
      }

      return () => {
        // Proper cleanup
        handlers.forEach((handler) => {
          window.removeEventListener('resize', handler)
        })
      }
    }, [])

    return <div>Component with listeners</div>
  }

  // Test mounting/unmounting cycles
  const memoryBefore = (performance as any).memory?.usedJSHeapSize || 0

  for (let i = 0; i < 100; i++) {
    const { unmount } = render(<TestComponentWithListeners />)
    unmount()
  }

  const memoryAfter = (performance as any).memory?.usedJSHeapSize || 0
  const memoryLeaked = (memoryAfter - memoryBefore) / 1024 / 1024

  results.push({
    test: 'Event Listener Cleanup',
    cycles: 100,
    memoryLeakedMB: memoryLeaked,
    passed: memoryLeaked < 1, // Less than 1MB leak after 100 cycles
  })

  // Test 2: Check for subscription cleanup
  const TestComponentWithSubscriptions: React.FC = () => {
    React.useEffect(() => {
      const subscriptions: Array<() => void> = []

      // Simulate subscriptions
      for (let i = 0; i < 5; i++) {
        const interval = setInterval(() => {}, 1000)
        subscriptions.push(() => clearInterval(interval))
      }

      return () => {
        subscriptions.forEach((cleanup) => cleanup())
      }
    }, [])

    return <div>Component with subscriptions</div>
  }

  const memoryBefore2 = (performance as any).memory?.usedJSHeapSize || 0

  for (let i = 0; i < 100; i++) {
    const { unmount } = render(<TestComponentWithSubscriptions />)
    unmount()
  }

  const memoryAfter2 = (performance as any).memory?.usedJSHeapSize || 0
  const memoryLeaked2 = (memoryAfter2 - memoryBefore2) / 1024 / 1024

  results.push({
    test: 'Subscription Cleanup',
    cycles: 100,
    memoryLeakedMB: memoryLeaked2,
    passed: memoryLeaked2 < 1,
  })

  console.log('\n=== Memory Leak Detection Results ===\n')
  results.forEach((result) => {
    console.log(`${result.test}: ${result.passed ? 'PASSED' : 'FAILED'}`)
    console.log(
      `  Memory leaked: ${result.memoryLeakedMB.toFixed(2)} MB after ${result.cycles} cycles\n`,
    )
  })

  return results
}

// Main component benchmark runner
export async function runComponentBenchmarks() {
  console.log('=== Notable Component Performance Benchmark ===\n')

  const results = {
    rendering: await benchmarkComponentRendering(),
    hooks: await benchmarkHooksPerformance(),
    memoryLeaks: await detectComponentMemoryLeaks(),
  }

  return results
}
