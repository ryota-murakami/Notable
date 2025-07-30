import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { expect, userEvent, waitFor, within } from '@storybook/test'
import type { SearchResult } from '@/lib/search/types'
import { Clock, Filter, Hash, Loader2, Search, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

// Mock data for stories
const mockSearchResults: SearchResult[] = [
  {
    note: {
      id: '1',
      title: 'Getting Started with React',
      content: 'React is a JavaScript library for building user interfaces...',
      tags: ['react', 'javascript', 'frontend'],
      path: '/notes/getting-started-react',
      isFolder: false,
      created_at: new Date('2024-01-15').toISOString(),
      updated_at: new Date('2024-01-20').toISOString(),
    },
    snippet:
      'React is a JavaScript library for building user interfaces. Learn the basics of components, props, and state.',
    score: 0.95,
    matches: [],
  },
  {
    note: {
      id: '2',
      title: 'TypeScript Best Practices',
      content: 'TypeScript adds static typing to JavaScript...',
      tags: ['typescript', 'javascript'],
      path: '/notes/typescript-best-practices',
      isFolder: false,
      created_at: new Date('2024-01-10').toISOString(),
      updated_at: new Date('2024-01-18').toISOString(),
    },
    snippet:
      'TypeScript adds static typing to JavaScript. Use interfaces for object shapes and enums for constants.',
    score: 0.87,
    matches: [],
  },
  {
    note: {
      id: '3',
      title: 'Next.js App Router Guide',
      content: 'The App Router is a new paradigm for building applications...',
      tags: ['nextjs', 'react', 'routing'],
      path: '/notes/nextjs-app-router-guide',
      isFolder: false,
      created_at: new Date('2024-01-05').toISOString(),
      updated_at: new Date('2024-01-16').toISOString(),
    },
    snippet:
      "The App Router is a new paradigm for building applications using React's latest features.",
    score: 0.82,
    matches: [],
  },
]

const mockTags = [
  { id: '1', name: 'react', count: 15 },
  { id: '2', name: 'typescript', count: 12 },
  { id: '3', name: 'javascript', count: 20 },
  { id: '4', name: 'nextjs', count: 8 },
  { id: '5', name: 'frontend', count: 10 },
]

const mockSearchHistory = [
  {
    id: '1',
    query: 'react hooks',
    results_count: 12,
    timestamp: new Date('2024-01-20'),
  },
  {
    id: '2',
    query: 'typescript generics',
    results_count: 8,
    timestamp: new Date('2024-01-19'),
  },
  {
    id: '3',
    query: 'next.js routing',
    results_count: 15,
    timestamp: new Date('2024-01-18'),
  },
]

// Mock GlobalSearch component for Storybook
// This is a simplified version that demonstrates the UI without real hooks
const GlobalSearchMock = ({
  initialQuery = '',
  onNoteSelect,
  showFilters = true,
  showHistory = true,
  maxResults = 50,
  className,
  placeholder = 'Search notes, content, and tags...',
}: {
  initialQuery?: string
  onNoteSelect?: (noteId: string) => void
  showFilters?: boolean
  showHistory?: boolean
  maxResults?: number
  className?: string
  placeholder?: string
}) => {
  const [query, setQuery] = useState(initialQuery)
  const [isOpen, setIsOpen] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const handleSearch = (value: string) => {
    setQuery(value)
    if (value) {
      setIsSearching(true)
      // Simulate search delay
      setTimeout(() => {
        const filtered = mockSearchResults.filter(
          (r) =>
            r.note.title.toLowerCase().includes(value.toLowerCase()) ||
            r.note.content.toLowerCase().includes(value.toLowerCase())
        )
        setResults(filtered)
        setIsSearching(false)
      }, 500)
    } else {
      setResults([])
    }
  }

  return (
    <div className={className}>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <div className='relative'>
            <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
            <Input
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder={placeholder}
              className='pl-10 pr-10'
              onFocus={() => setIsOpen(true)}
            />
            {query && (
              <Button
                variant='ghost'
                size='sm'
                className='absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2 p-0'
                onClick={() => {
                  setQuery('')
                  setResults([])
                }}
                aria-label='Clear search'
              >
                <X className='h-4 w-4' />
              </Button>
            )}
          </div>
        </PopoverTrigger>
        <PopoverContent className='w-[600px] p-0' align='start'>
          {!query && showHistory && (
            <div className='p-4'>
              <h3 className='mb-2 text-sm font-medium'>Recent Searches</h3>
              <div className='space-y-1'>
                {mockSearchHistory.map((item) => (
                  <button
                    key={item.id}
                    className='flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent'
                    onClick={() => handleSearch(item.query)}
                  >
                    <Clock className='h-3 w-3 text-muted-foreground' />
                    <span className='flex-1 text-left'>{item.query}</span>
                    <span className='text-xs text-muted-foreground'>
                      {item.results_count} results
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {query && (
            <div className='max-h-[400px] overflow-y-auto'>
              {isSearching ? (
                <div className='flex items-center justify-center p-8'>
                  <Loader2 className='h-6 w-6 animate-spin text-muted-foreground' />
                </div>
              ) : results.length > 0 ? (
                <div className='p-2'>
                  {results.slice(0, maxResults).map((result) => (
                    <button
                      key={result.note.id}
                      className='flex w-full items-start gap-3 rounded-sm p-3 text-left hover:bg-accent'
                      onClick={() => {
                        onNoteSelect?.(result.note.id)
                        setIsOpen(false)
                      }}
                    >
                      <div className='flex-1'>
                        <div className='font-medium'>{result.note.title}</div>
                        <div className='mt-1 text-xs text-muted-foreground line-clamp-2'>
                          {result.snippet}
                        </div>
                        <div className='mt-2 flex items-center gap-2'>
                          <span className='text-xs text-muted-foreground'>
                            {new Date(
                              result.note.updated_at
                            ).toLocaleDateString()}
                          </span>
                          <div className='flex gap-1'>
                            {result.note.tags.slice(0, 2).map((tag) => (
                              <Badge
                                key={tag}
                                variant='secondary'
                                className='text-xs'
                              >
                                #{tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className='p-8 text-center text-sm text-muted-foreground'>
                  No results found for "{query}"
                </div>
              )}
            </div>
          )}

          {showFilters && (
            <div className='border-t p-2'>
              <div className='flex items-center gap-2'>
                <Button variant='outline' size='sm' className='gap-1'>
                  <Filter className='h-3 w-3' />
                  <span>Filters</span>
                </Button>
                <div className='flex flex-wrap gap-1'>
                  {mockTags.slice(0, 3).map((tag) => (
                    <Button
                      key={tag.id}
                      variant={
                        selectedTags.includes(tag.name) ? 'default' : 'outline'
                      }
                      size='sm'
                      className='h-7 gap-1 px-2'
                      onClick={() => {
                        setSelectedTags((prev) =>
                          prev.includes(tag.name)
                            ? prev.filter((t) => t !== tag.name)
                            : [...prev, tag.name]
                        )
                      }}
                    >
                      <Hash className='h-3 w-3' />
                      <span>{tag.name}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </PopoverContent>
      </Popover>
    </div>
  )
}

const meta = {
  title: 'UI/GlobalSearch',
  component: GlobalSearchMock,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the search input',
    },
    showFilters: {
      control: 'boolean',
      description: 'Show filter options',
    },
    showHistory: {
      control: 'boolean',
      description: 'Show search history',
    },
    maxResults: {
      control: 'number',
      description: 'Maximum number of results to show',
    },
  },
  decorators: [
    (Story) => (
      <div className='min-w-[600px] p-8'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof GlobalSearchMock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Search notes, content, and tags...',
    showFilters: true,
    showHistory: true,
    maxResults: 50,
  },
}

export const WithInitialQuery: Story = {
  args: {
    initialQuery: 'react',
    showFilters: true,
    showHistory: true,
  },
}

export const NoFilters: Story = {
  args: {
    showFilters: false,
    showHistory: true,
  },
}

export const NoHistory: Story = {
  args: {
    showFilters: true,
    showHistory: false,
  },
}

export const CustomPlaceholder: Story = {
  args: {
    placeholder: 'Type to search your knowledge base...',
  },
}

export const InteractiveSearch: Story = {
  args: {
    showFilters: true,
    showHistory: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Find the search input
    const searchInput = canvas.getByPlaceholderText(/Search notes/)

    // Focus the input
    await userEvent.click(searchInput)

    // The dropdown should open showing history
    await waitFor(() => {
      expect(canvas.getByText('Recent Searches')).toBeInTheDocument()
    })

    // Type a search query
    await userEvent.type(searchInput, 'react')

    // Wait for search results
    await waitFor(
      () => {
        expect(
          canvas.getByText('Getting Started with React')
        ).toBeInTheDocument()
      },
      { timeout: 2000 }
    )

    // Clear the search
    const clearButton = canvas.getByRole('button', { name: /clear/i })
    await userEvent.click(clearButton)

    // Input should be empty
    await expect(searchInput).toHaveValue('')
  },
}

export const FilterInteraction: Story = {
  args: {
    showFilters: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Focus to open search
    const searchInput = canvas.getByPlaceholderText(/Search notes/)
    await userEvent.click(searchInput)

    // Type something to show results
    await userEvent.type(searchInput, 'test')

    // Wait for filters to appear
    await waitFor(() => {
      expect(canvas.getByText('Filters')).toBeInTheDocument()
    })

    // Click a tag filter
    const reactTag = canvas.getByRole('button', { name: /react/i })
    await userEvent.click(reactTag)

    // Tag should be selected (button variant changes)
    await expect(reactTag).toHaveClass(/default/)
  },
}

export const MobileResponsive: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {
    showFilters: true,
    showHistory: true,
  },
}

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  decorators: [
    (Story) => (
      <div className='dark bg-gray-900 p-8'>
        <Story />
      </div>
    ),
  ],
  args: {
    showFilters: true,
    showHistory: true,
  },
}
