import type { Meta, StoryObj } from '@storybook/nextjs'
import { ScrollArea, ScrollBar } from './scroll-area'
import { expect, within } from '@storybook/test'
import { Badge } from './badge'
import { Separator } from './separator'

const meta: Meta<typeof ScrollArea> = {
  title: 'Components/UI/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A custom scrollable area component built on Radix UI that provides a styled scrollbar and smooth scrolling experience. Ideal for containing long content in a fixed height container.',
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof ScrollArea>

const tags = Array.from({ length: 50 }).map((_, i) => `Tag ${i + 1}`)

export const Default: Story = {
  render: () => (
    <ScrollArea className='h-72 w-48 rounded-md border'>
      <div className='p-4'>
        <h4 className='mb-4 text-sm font-medium leading-none'>Tags</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className='text-sm'>{tag}</div>
            <Separator className='my-2' />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByText('Tags')).toBeInTheDocument()
    await expect(canvas.getByText('Tag 1')).toBeInTheDocument()
    await expect(canvas.getByText('Tag 50')).toBeInTheDocument()
  },
}

export const HorizontalScroll: Story = {
  render: () => (
    <ScrollArea className='w-96 whitespace-nowrap rounded-md border'>
      <div className='flex w-max space-x-4 p-4'>
        {Array.from({ length: 20 }).map((_, i) => (
          <figure key={i} className='shrink-0'>
            <div className='overflow-hidden rounded-md'>
              <div className='h-32 w-48 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold'>
                Item {i + 1}
              </div>
            </div>
            <figcaption className='pt-2 text-xs text-muted-foreground'>
              Photo {i + 1}
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation='horizontal' />
    </ScrollArea>
  ),
}

export const TextContent: Story = {
  render: () => (
    <ScrollArea className='h-[200px] w-[350px] rounded-md border p-4'>
      <div className='space-y-4'>
        <h4 className='text-lg font-semibold'>The Notable Manifesto</h4>
        <p className='text-sm text-muted-foreground'>
          We believe that great ideas deserve great tools. Notable is more than
          just a note-taking app—it's a workspace for your mind, designed to
          help you capture, organize, and develop your thoughts with
          unprecedented clarity and speed.
        </p>
        <p className='text-sm text-muted-foreground'>
          Our mission is to create the most elegant and powerful note-taking
          experience ever built. We combine cutting-edge technology with
          thoughtful design to deliver a product that feels as natural as pen
          and paper, yet infinitely more capable.
        </p>
        <p className='text-sm text-muted-foreground'>
          From real-time collaboration to advanced search capabilities, from
          rich media support to seamless synchronization across all your
          devices, Notable is engineered to adapt to your workflow, not the
          other way around.
        </p>
        <p className='text-sm text-muted-foreground'>
          We're committed to privacy, performance, and user experience above all
          else. Your data belongs to you, your notes load instantly, and every
          interaction is carefully crafted to minimize friction and maximize
          productivity.
        </p>
        <p className='text-sm text-muted-foreground'>
          Join thousands of thinkers, creators, and professionals who have made
          Notable their digital home for ideas. Because when your tools match
          your ambition, there's no limit to what you can achieve.
        </p>
      </div>
    </ScrollArea>
  ),
}

export const ListExample: Story = {
  render: () => (
    <ScrollArea className='h-[300px] w-[400px] rounded-lg border'>
      <div className='p-4'>
        <h4 className='mb-4 text-base font-semibold'>Recent Notes</h4>
        <div className='space-y-2'>
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className='flex items-start space-x-4 rounded-lg border p-3 hover:bg-accent transition-colors cursor-pointer'
            >
              <div className='flex-1 space-y-1'>
                <p className='text-sm font-medium leading-none'>
                  Meeting Notes - Project {i + 1}
                </p>
                <p className='text-sm text-muted-foreground'>
                  Discussed timeline, deliverables, and next steps for Q4
                  planning
                </p>
                <div className='flex items-center pt-2 space-x-2'>
                  <Badge variant='secondary' className='text-xs'>
                    Work
                  </Badge>
                  <span className='text-xs text-muted-foreground'>
                    2 hours ago
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  ),
}

export const CodeBlock: Story = {
  render: () => (
    <ScrollArea className='h-[300px] w-full rounded-md border bg-slate-950'>
      <pre className='p-4'>
        <code className='text-sm text-slate-50'>{`import { useState, useEffect } from 'react'
import { useNotes } from '@/hooks/use-notes'
import { NoteEditor } from '@/components/note-editor'
import { Sidebar } from '@/components/sidebar'

export function NotesApp() {
  const [selectedNote, setSelectedNote] = useState(null)
  const { notes, loading, error } = useNotes()
  
  useEffect(() => {
    if (notes.length > 0 && !selectedNote) {
      setSelectedNote(notes[0])
    }
  }, [notes, selectedNote])
  
  if (loading) return <LoadingSpinner />
  if (error) return <ErrorMessage error={error} />
  
  return (
    <div className="flex h-screen">
      <Sidebar 
        notes={notes}
        selectedNote={selectedNote}
        onSelectNote={setSelectedNote}
      />
      <main className="flex-1">
        {selectedNote ? (
          <NoteEditor note={selectedNote} />
        ) : (
          <EmptyState />
        )}
      </main>
    </div>
  )
}

// Helper components
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Spinner size="lg" />
    </div>
  )
}

function ErrorMessage({ error }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error.message}</AlertDescription>
      </Alert>
    </div>
  )
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-2xl font-semibold mb-2">No note selected</h2>
      <p className="text-muted-foreground">
        Select a note from the sidebar or create a new one
      </p>
    </div>
  )
}`}</code>
      </pre>
    </ScrollArea>
  ),
}

export const ChatMessages: Story = {
  render: () => (
    <ScrollArea className='h-[400px] w-[500px] rounded-md border p-4'>
      <div className='space-y-4'>
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className={`flex ${i % 3 === 0 ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] rounded-lg px-4 py-2 ${
                i % 3 === 0 ? 'bg-primary text-primary-foreground' : 'bg-muted'
              }`}
            >
              <p className='text-sm'>
                {i % 3 === 0
                  ? `This is my message #${i + 1}. How are things going?`
                  : `Response message #${i + 1}. Everything is going great!`}
              </p>
              <p
                className={`text-xs mt-1 ${
                  i % 3 === 0
                    ? 'text-primary-foreground/70'
                    : 'text-muted-foreground'
                }`}
              >
                {new Date(Date.now() - (15 - i) * 60000).toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}

export const CustomHeight: Story = {
  render: () => (
    <div className='grid grid-cols-3 gap-4'>
      <div>
        <h4 className='mb-2 text-sm font-medium'>Small (150px)</h4>
        <ScrollArea className='h-[150px] w-full rounded-md border p-4'>
          <div className='space-y-2'>
            {tags.slice(0, 20).map((tag) => (
              <div key={tag} className='text-sm'>
                {tag}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div>
        <h4 className='mb-2 text-sm font-medium'>Medium (250px)</h4>
        <ScrollArea className='h-[250px] w-full rounded-md border p-4'>
          <div className='space-y-2'>
            {tags.slice(0, 30).map((tag) => (
              <div key={tag} className='text-sm'>
                {tag}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div>
        <h4 className='mb-2 text-sm font-medium'>Large (350px)</h4>
        <ScrollArea className='h-[350px] w-full rounded-md border p-4'>
          <div className='space-y-2'>
            {tags.map((tag) => (
              <div key={tag} className='text-sm'>
                {tag}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  ),
}
