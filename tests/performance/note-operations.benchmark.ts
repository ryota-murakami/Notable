import { Benchmark, PerformanceTester } from './benchmark'
import { createClient } from '@supabase/supabase-js'
import { Note } from '@/types/note'

// Mock data generators
function generateMockNote(index: number): Partial<Note> {
  return {
    title: `Test Note ${index}`,
    content: [
      {
        type: 'p',
        children: [
          {
            text: `This is a test note with some content. Index: ${index}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. `.repeat(
              10,
            ),
          },
        ],
      },
    ],
    tags: [],
    folderId: null,
  }
}

function generateLargeNote(sizeKB: number): Partial<Note> {
  const paragraphCount = Math.ceil(sizeKB / 2) // Roughly 2KB per paragraph
  const content = []

  for (let i = 0; i < paragraphCount; i++) {
    content.push({
      type: 'p',
      children: [
        {
          text: `Paragraph ${i}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `.repeat(
            3,
          ),
        },
      ],
    })
  }

  return {
    title: `Large Note (${sizeKB}KB)`,
    content,
    tags: [],
    folderId: null,
  }
}

export async function benchmarkNoteOperations(
  supabaseUrl: string,
  supabaseKey: string,
) {
  const benchmark = new Benchmark()
  const supabase = createClient(supabaseUrl, supabaseKey)

  console.log('Starting Note Operations Benchmark...\n')

  // Test 1: Note Creation Performance
  await benchmark.run(
    'Create Single Note',
    async () => {
      const { data, error } = await supabase
        .from('notes')
        .insert(generateMockNote(Date.now()))
        .select()
        .single()

      if (error) throw error

      // Clean up
      await supabase.from('notes').delete().eq('id', data.id)
    },
    { iterations: 50, warmupIterations: 5 },
  )

  // Test 2: Batch Note Creation
  await benchmark.run(
    'Create 10 Notes (Batch)',
    async () => {
      const notes = Array.from({ length: 10 }, (_, i) => generateMockNote(i))

      const { data, error } = await supabase
        .from('notes')
        .insert(notes)
        .select()

      if (error) throw error

      // Clean up
      const ids = data.map((note) => note.id)
      await supabase.from('notes').delete().in('id', ids)
    },
    { iterations: 20, warmupIterations: 2 },
  )

  // Test 3: Note Fetching Performance
  // First, create test data
  const testNotes = await createTestNotes(supabase, 100)
  const testNoteIds = testNotes.map((n) => n.id)

  await benchmark.run(
    'Fetch 100 Notes',
    async () => {
      const { data, error } = await supabase
        .from('notes')
        .select('*')
        .in('id', testNoteIds)
        .order('updated_at', { ascending: false })

      if (error) throw error
    },
    { iterations: 50, warmupIterations: 5 },
  )

  // Test 4: Note Update Performance
  const noteToUpdate = testNotes[0]
  await benchmark.run(
    'Update Single Note',
    async () => {
      const { error } = await supabase
        .from('notes')
        .update({
          title: `Updated ${Date.now()}`,
          updated_at: new Date().toISOString(),
        })
        .eq('id', noteToUpdate.id)

      if (error) throw error
    },
    { iterations: 100, warmupIterations: 10 },
  )

  // Test 5: Full-text Search Performance
  await benchmark.run(
    'Full-text Search (100 notes)',
    async () => {
      const { data, error } = await supabase.rpc('search_notes', {
        search_query: 'test lorem ipsum',
        user_uuid: (await supabase.auth.getUser()).data.user?.id,
      })

      if (error) throw error
    },
    { iterations: 30, warmupIterations: 3 },
  )

  // Test 6: Large Note Handling
  const largeNote = generateLargeNote(100) // 100KB note
  await benchmark.run(
    'Create Large Note (100KB)',
    async () => {
      const { data, error } = await supabase
        .from('notes')
        .insert(largeNote)
        .select()
        .single()

      if (error) throw error

      // Clean up
      await supabase.from('notes').delete().eq('id', data.id)
    },
    { iterations: 10, warmupIterations: 1 },
  )

  // Test 7: Pagination Performance
  await benchmark.run(
    'Paginated Fetch (20 notes/page)',
    async () => {
      const { data, error, count } = await supabase
        .from('notes')
        .select('*', { count: 'exact' })
        .in('id', testNoteIds)
        .order('updated_at', { ascending: false })
        .range(0, 19)

      if (error) throw error
    },
    { iterations: 100, warmupIterations: 10 },
  )

  // Clean up test data
  await supabase.from('notes').delete().in('id', testNoteIds)

  // Export results
  const results = benchmark.getResults()
  console.log('\n=== Benchmark Summary ===\n')
  console.log(benchmark.exportResults('json'))

  return results
}

async function createTestNotes(supabase: any, count: number): Promise<Note[]> {
  const notes = Array.from({ length: count }, (_, i) => generateMockNote(i))

  const { data, error } = await supabase.from('notes').insert(notes).select()

  if (error) throw error
  return data
}

// Benchmark editor operations
export async function benchmarkEditorOperations() {
  const benchmark = new Benchmark()

  console.log('Starting Editor Operations Benchmark...\n')

  // Test 1: Plate.js Content Serialization
  const largeContent = Array.from({ length: 100 }, (_, i) => ({
    type: 'p',
    children: [{ text: `Paragraph ${i}: Lorem ipsum dolor sit amet...` }],
  }))

  await benchmark.run(
    'Serialize Large Document (100 paragraphs)',
    () => {
      const serialized = JSON.stringify(largeContent)
      const parsed = JSON.parse(serialized)
    },
    { iterations: 1000, warmupIterations: 100 },
  )

  // Test 2: Content Transformation
  await benchmark.run(
    'Transform Plate to Markdown',
    () => {
      const markdown = largeContent
        .map((node) => {
          if (node.type === 'p') {
            return node.children.map((child) => child.text).join('') + '\n\n'
          }
          return ''
        })
        .join('')
    },
    { iterations: 500, warmupIterations: 50 },
  )

  // Test 3: Search within content
  const searchableContent = largeContent
    .map((node) => node.children.map((child) => child.text).join(''))
    .join(' ')

  await benchmark.run(
    'Search in Large Document',
    () => {
      const results = searchableContent.toLowerCase().includes('lorem ipsum')
      const matches = searchableContent.match(/lorem/gi) || []
    },
    { iterations: 1000, warmupIterations: 100 },
  )

  return benchmark.getResults()
}

// Benchmark real-time operations
export async function benchmarkRealtimeOperations(
  supabaseUrl: string,
  supabaseKey: string,
) {
  const benchmark = new Benchmark()
  const supabase = createClient(supabaseUrl, supabaseKey)

  console.log('Starting Realtime Operations Benchmark...\n')

  // Test 1: Subscription Setup
  await benchmark.run(
    'Setup Realtime Subscription',
    async () => {
      const channel = supabase
        .channel('test-channel')
        .on(
          'postgres_changes',
          { event: '*', schema: 'public', table: 'notes' },
          () => {},
        )
        .subscribe()

      // Wait for subscription
      await new Promise((resolve) => setTimeout(resolve, 100))

      // Clean up
      await supabase.removeChannel(channel)
    },
    { iterations: 20, warmupIterations: 2 },
  )

  // Test 2: Broadcast Message
  const testChannel = supabase.channel('broadcast-test')
  await testChannel.subscribe()

  await benchmark.run(
    'Send Broadcast Message',
    async () => {
      await testChannel.send({
        type: 'broadcast',
        event: 'test',
        payload: { timestamp: Date.now(), data: 'test message' },
      })
    },
    { iterations: 100, warmupIterations: 10 },
  )

  await supabase.removeChannel(testChannel)

  // Test 3: Presence Updates
  const presenceChannel = supabase.channel('presence-test')
  await presenceChannel.subscribe()

  await benchmark.run(
    'Update Presence State',
    async () => {
      await presenceChannel.track({
        user_id: 'test-user',
        online_at: new Date().toISOString(),
        typing: Math.random() > 0.5,
      })
    },
    { iterations: 100, warmupIterations: 10 },
  )

  await supabase.removeChannel(presenceChannel)

  return benchmark.getResults()
}

// Main benchmark runner
export async function runAllBenchmarks(
  supabaseUrl: string,
  supabaseKey: string,
) {
  console.log('=== Notable Performance Benchmark Suite ===\n')

  const results = {
    noteOperations: await benchmarkNoteOperations(supabaseUrl, supabaseKey),
    editorOperations: await benchmarkEditorOperations(),
    realtimeOperations: await benchmarkRealtimeOperations(
      supabaseUrl,
      supabaseKey,
    ),
  }

  // Save results to file
  const fs = await import('fs/promises')
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
  const filename = `benchmark-results-${timestamp}.json`

  await fs.writeFile(filename, JSON.stringify(results, null, 2))

  console.log(`\nResults saved to: ${filename}`)

  return results
}
