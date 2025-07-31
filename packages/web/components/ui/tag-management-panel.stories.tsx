import type { Meta, StoryObj } from '@storybook/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { TagManagementPanel } from './tag-management-panel'
import { Button } from './button'
import { useState } from 'react'

const meta: Meta<typeof TagManagementPanel> = {
  title: 'UI/Tag Management Panel',
  component: TagManagementPanel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A comprehensive tag management panel with statistics, hierarchy view, and CRUD operations for tags.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const queryClient = new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            refetchOnWindowFocus: false,
          },
        },
      })
      return (
        <QueryClientProvider client={queryClient}>
          <Story />
        </QueryClientProvider>
      )
    },
  ],
}

export default meta
type Story = StoryObj<typeof TagManagementPanel>

// Mock API responses
const mockTags = [
  {
    id: '1',
    name: 'work',
    color: '#3b82f6',
    description: 'Work-related notes and tasks',
    user_id: 'user-1',
    parent_id: null,
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z',
    usage_count: 25,
  },
  {
    id: '2',
    name: 'frontend',
    color: '#10b981',
    description: 'Frontend development notes',
    user_id: 'user-1',
    parent_id: '1',
    created_at: '2024-01-16T10:00:00Z',
    updated_at: '2024-01-16T10:00:00Z',
    usage_count: 15,
  },
  {
    id: '3',
    name: 'backend',
    color: '#f59e0b',
    description: 'Backend development notes',
    user_id: 'user-1',
    parent_id: '1',
    created_at: '2024-01-17T10:00:00Z',
    updated_at: '2024-01-17T10:00:00Z',
    usage_count: 12,
  },
  {
    id: '4',
    name: 'personal',
    color: '#ec4899',
    description: 'Personal notes and thoughts',
    user_id: 'user-1',
    parent_id: null,
    created_at: '2024-01-18T10:00:00Z',
    updated_at: '2024-01-18T10:00:00Z',
    usage_count: 8,
  },
  {
    id: '5',
    name: 'ideas',
    color: '#8b5cf6',
    description: 'Creative ideas and brainstorming',
    user_id: 'user-1',
    parent_id: '4',
    created_at: '2024-01-19T10:00:00Z',
    updated_at: '2024-01-19T10:00:00Z',
    usage_count: 5,
  },
  {
    id: '6',
    name: 'learning',
    color: '#06b6d4',
    description: 'Learning materials and notes',
    user_id: 'user-1',
    parent_id: null,
    created_at: '2024-01-20T10:00:00Z',
    updated_at: '2024-01-20T10:00:00Z',
    usage_count: 18,
  },
]

// Mock the API endpoints
if (typeof window !== 'undefined') {
  // @ts-ignore
  window.fetch = async (url: string, options?: RequestInit) => {
    await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate network delay

    if (url.includes('/api/tags')) {
      if (options?.method === 'POST') {
        const body = JSON.parse(options.body as string)
        const newTag = {
          id: Math.random().toString(36).substr(2, 9),
          ...body,
          user_id: 'user-1',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          usage_count: 0,
        }
        return {
          ok: true,
          json: async () => ({ success: true, data: newTag }),
        } as Response
      }

      return {
        ok: true,
        json: async () => ({ success: true, data: mockTags }),
      } as Response
    }

    return {
      ok: false,
      json: async () => ({ error: 'Not found' }),
    } as Response
  }
}

function TagManagementPanelDemo() {
  const [open, setOpen] = useState(false)

  return (
    <div className='p-8'>
      <Button onClick={() => setOpen(true)}>Open Tag Management Panel</Button>
      <TagManagementPanel open={open} onOpenChange={setOpen} />
    </div>
  )
}

export const Default: Story = {
  render: () => <TagManagementPanelDemo />,
  parameters: {
    docs: {
      description: {
        story:
          'Default tag management panel with mock data including hierarchical tags and usage statistics.',
      },
    },
  },
}

export const WithManyTags: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    // Add more mock tags for this story
    const manyTags = [
      ...mockTags,
      {
        id: '7',
        name: 'projects',
        color: '#ef4444',
        description: 'Project-related documentation',
        user_id: 'user-1',
        parent_id: null,
        created_at: '2024-01-21T10:00:00Z',
        updated_at: '2024-01-21T10:00:00Z',
        usage_count: 22,
      },
      {
        id: '8',
        name: 'notable',
        color: '#84cc16',
        description: 'Notable app development',
        user_id: 'user-1',
        parent_id: '7',
        created_at: '2024-01-22T10:00:00Z',
        updated_at: '2024-01-22T10:00:00Z',
        usage_count: 12,
      },
      {
        id: '9',
        name: 'design',
        color: '#64748b',
        description: 'Design and UX notes',
        user_id: 'user-1',
        parent_id: '7',
        created_at: '2024-01-23T10:00:00Z',
        updated_at: '2024-01-23T10:00:00Z',
        usage_count: 8,
      },
      {
        id: '10',
        name: 'meetings',
        color: '#f97316',
        description: 'Meeting notes and minutes',
        user_id: 'user-1',
        parent_id: '1',
        created_at: '2024-01-24T10:00:00Z',
        updated_at: '2024-01-24T10:00:00Z',
        usage_count: 15,
      },
      {
        id: '11',
        name: 'research',
        color: '#6366f1',
        description: 'Research and investigation notes',
        user_id: 'user-1',
        parent_id: null,
        created_at: '2024-01-25T10:00:00Z',
        updated_at: '2024-01-25T10:00:00Z',
        usage_count: 6,
      },
    ]

    // Override fetch for this story
    React.useEffect(() => {
      const originalFetch = window.fetch
      // @ts-ignore
      window.fetch = async (url: string, options?: RequestInit) => {
        await new Promise((resolve) => setTimeout(resolve, 300))

        if (url.includes('/api/tags')) {
          return {
            ok: true,
            json: async () => ({ success: true, data: manyTags }),
          } as Response
        }

        return originalFetch(url, options)
      }

      return () => {
        window.fetch = originalFetch
      }
    }, [])

    return (
      <div className='p-8'>
        <Button onClick={() => setOpen(true)}>
          Open Tag Management Panel (Many Tags)
        </Button>
        <TagManagementPanel open={open} onOpenChange={setOpen} />
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Tag management panel with a larger dataset to demonstrate performance and UI behavior with many tags.',
      },
    },
  },
}

export const EmptyState: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    // Override fetch to return empty tags
    React.useEffect(() => {
      const originalFetch = window.fetch
      // @ts-ignore
      window.fetch = async (url: string, options?: RequestInit) => {
        await new Promise((resolve) => setTimeout(resolve, 300))

        if (url.includes('/api/tags')) {
          return {
            ok: true,
            json: async () => ({ success: true, data: [] }),
          } as Response
        }

        return originalFetch(url, options)
      }

      return () => {
        window.fetch = originalFetch
      }
    }, [])

    return (
      <div className='p-8'>
        <Button onClick={() => setOpen(true)}>
          Open Tag Management Panel (Empty)
        </Button>
        <TagManagementPanel open={open} onOpenChange={setOpen} />
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Tag management panel in empty state with no tags, showing empty state UI and create prompts.',
      },
    },
  },
}

export const LoadingState: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    // Override fetch to simulate slow loading
    React.useEffect(() => {
      const originalFetch = window.fetch
      // @ts-ignore
      window.fetch = async (url: string, options?: RequestInit) => {
        await new Promise((resolve) => setTimeout(resolve, 10000)) // Very slow

        if (url.includes('/api/tags')) {
          return {
            ok: true,
            json: async () => ({ success: true, data: mockTags }),
          } as Response
        }

        return originalFetch(url, options)
      }

      return () => {
        window.fetch = originalFetch
      }
    }, [])

    return (
      <div className='p-8'>
        <Button onClick={() => setOpen(true)}>
          Open Tag Management Panel (Loading)
        </Button>
        <TagManagementPanel open={open} onOpenChange={setOpen} />
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Tag management panel showing loading states and skeleton UI while data is being fetched.',
      },
    },
  },
}
