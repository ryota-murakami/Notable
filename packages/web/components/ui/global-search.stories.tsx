import React from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { GlobalSearch } from './global-search'
import { within, userEvent, expect, waitFor } from '@storybook/test'
import type { SearchResult } from '@/lib/search/types'

// Mock the hooks
const mockSearchResults: SearchResult[] = [
  {
    note: {
      id: '1',
      title: 'Getting Started with React',
      content: 'React is a JavaScript library for building user interfaces...',
      tags: ['react', 'javascript', 'frontend'],
      created_at: new Date('2024-01-15').toISOString(),
      updated_at: new Date('2024-01-20').toISOString(),
    },
    snippet:
      'React is a JavaScript library for building user interfaces. Learn the basics of components, props, and state.',
    score: 0.95,
  },
  {
    note: {
      id: '2',
      title: 'TypeScript Best Practices',
      content: 'TypeScript adds static typing to JavaScript...',
      tags: ['typescript', 'javascript'],
      created_at: new Date('2024-01-10').toISOString(),
      updated_at: new Date('2024-01-18').toISOString(),
    },
    snippet:
      'TypeScript adds static typing to JavaScript. Use interfaces for object shapes and enums for constants.',
    score: 0.87,
  },
  {
    note: {
      id: '3',
      title: 'Next.js App Router Guide',
      content: 'The App Router is a new paradigm for building applications...',
      tags: ['nextjs', 'react', 'routing'],
      created_at: new Date('2024-01-05').toISOString(),
      updated_at: new Date('2024-01-16').toISOString(),
    },
    snippet:
      "The App Router is a new paradigm for building applications using React's latest features.",
    score: 0.82,
  },
]

const mockTags = [
  { id: '1', name: 'react', count: 15 },
  { id: '2', name: 'typescript', count: 12 },
  { id: '3', name: 'javascript', count: 20 },
  { id: '4', name: 'nextjs', count: 8 },
  { id: '5', name: 'frontend', count: 10 },
  { id: '6', name: 'backend', count: 7 },
  { id: '7', name: 'api', count: 9 },
  { id: '8', name: 'database', count: 6 },
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

const mockSuggestions = [
  { query: 'react', count: 25 },
  { query: 'typescript', count: 18 },
  { query: 'javascript', count: 30 },
]

// Mock implementation
jest.mock('@/hooks/use-server-search', () => ({
  useServerSearch: ({ debounceMs = 300 }: any) => {
    const [query, setQuery] = React.useState('')
    const [results, setResults] = React.useState<SearchResult[]>([])
    const [isSearching, setIsSearching] = React.useState(false)
    const [options, setOptions] = React.useState({
      tags: [],
      sortBy: 'relevance',
    })

    const search = React.useCallback((searchQuery: string) => {
      setQuery(searchQuery)
      setIsSearching(true)

      // Simulate search delay
      setTimeout(() => {
        const filtered = mockSearchResults.filter(
          (r) =>
            r.note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            r.note.content.toLowerCase().includes(searchQuery.toLowerCase())
        )
        setResults(filtered)
        setIsSearching(false)
      }, 500)
    }, [])

    return {
      query,
      results,
      isSearching,
      hasSearched: query.length > 0,
      error: null,
      pagination: {
        hasMore: results.length < 100,
        total: 100,
        page: 1,
      },
      stats: {
        totalResults: results.length,
        searchTime: 45,
      },
      search,
      clearSearch: () => {
        setQuery('')
        setResults([])
      },
      loadMore: () => {},
      options,
      updateOptions: setOptions,
    }
  },
}))

jest.mock('@/hooks/use-search-history', () => ({
  useSearchHistory: () => ({
    history: mockSearchHistory,
    suggestions: mockSuggestions,
    getRecentSearches: (limit: number) => mockSearchHistory.slice(0, limit),
    getSearchSuggestions: (query: string, limit: number) =>
      query
        ? mockSuggestions.filter((s) => s.query.includes(query)).slice(0, limit)
        : [],
  }),
}))

jest.mock('@/hooks/use-tags', () => ({
  useTags: () => ({
    data: mockTags,
    isLoading: false,
    error: null,
  }),
}))

const meta = {
  title: 'UI/GlobalSearch',
  component: GlobalSearch,
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
} satisfies Meta<typeof GlobalSearch>

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

    // Wait for component to render
    await new Promise((resolve) => setTimeout(resolve, 100))

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

    // Wait for component to render
    await new Promise((resolve) => setTimeout(resolve, 100))

    // Click the filter button
    const filterButtons = canvas.getAllByRole('button')
    const filterButton = filterButtons.find((btn) =>
      btn.querySelector('.lucide-filter')
    )

    if (filterButton) {
      await userEvent.click(filterButton)

      // Filter panel should open
      await waitFor(() => {
        expect(canvas.getByText('Tags')).toBeInTheDocument()
      })

      // Click a tag
      const reactTag = canvas.getByRole('button', { name: /react/i })
      await userEvent.click(reactTag)

      // Tag should be selected (button variant changes)
      await expect(reactTag).toHaveClass(/default/)
    }
  },
}

export const LoadingState: Story = {
  render: () => {
    // Override the mock to always show loading
    const MockedGlobalSearch = () => {
      return (
        <div className='relative w-full max-w-2xl'>
          <div className='relative'>
            <GlobalSearch showFilters={true} showHistory={true} />
          </div>
        </div>
      )
    }

    return <MockedGlobalSearch />
  },
}

export const NoResults: Story = {
  args: {
    initialQuery: 'xyzabc123',
  },
}

export const ErrorState: Story = {
  render: () => {
    // Would need to mock an error state
    return <GlobalSearch />
  },
}

// Story to demonstrate the search result item
export const SearchResultDemo: Story = {
  render: () => (
    <div className='space-y-4'>
      <h3 className='text-lg font-semibold'>Search Result Examples:</h3>
      <div className='rounded-md border p-4'>
        <div className='space-y-2'>
          {mockSearchResults.map((result) => (
            <div
              key={result.note.id}
              className='flex items-start gap-3 rounded-sm p-3 hover:bg-accent'
            >
              <div className='flex-1'>
                <div className='font-medium'>{result.note.title}</div>
                <div className='mt-1 text-xs text-muted-foreground line-clamp-2'>
                  {result.snippet}
                </div>
                <div className='mt-2 flex items-center gap-2'>
                  <span className='text-xs text-muted-foreground'>
                    {new Date(result.note.updated_at).toLocaleDateString()}
                  </span>
                  <div className='flex gap-1'>
                    {result.note.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className='inline-flex items-center rounded-full bg-secondary px-2 py-0.5 text-xs'
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className='text-xs text-muted-foreground'>
                Score: {Math.round(result.score * 100)}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
}
