import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { TagTree, TagTreeSearch } from './tag-tree'
import type { EnhancedTag } from '@/types/tags'
import { within, userEvent, expect, waitFor } from '@storybook/test'

// Mock hierarchical tag data
const mockTags: EnhancedTag[] = [
  {
    id: '1',
    name: 'Work',
    color: '#3B82F6',
    usage_count: 25,
    created_at: new Date('2024-01-01'),
    updated_at: new Date('2024-03-01'),
    children: [
      {
        id: '1-1',
        name: 'Projects',
        color: '#3B82F6',
        usage_count: 15,
        created_at: new Date('2024-01-05'),
        updated_at: new Date('2024-02-20'),
        children: [
          {
            id: '1-1-1',
            name: 'Project Alpha',
            color: '#3B82F6',
            usage_count: 8,
            created_at: new Date('2024-01-10'),
            updated_at: new Date('2024-02-15'),
          },
          {
            id: '1-1-2',
            name: 'Project Beta',
            color: '#3B82F6',
            usage_count: 7,
            created_at: new Date('2024-01-15'),
            updated_at: new Date('2024-02-10'),
          },
        ],
      },
      {
        id: '1-2',
        name: 'Meetings',
        color: '#3B82F6',
        usage_count: 10,
        created_at: new Date('2024-01-20'),
        updated_at: new Date('2024-02-25'),
        children: [
          {
            id: '1-2-1',
            name: 'Daily Standup',
            color: '#3B82F6',
            usage_count: 5,
            created_at: new Date('2024-01-25'),
            updated_at: new Date('2024-02-20'),
          },
          {
            id: '1-2-2',
            name: 'Sprint Planning',
            color: '#3B82F6',
            usage_count: 3,
            created_at: new Date('2024-02-01'),
            updated_at: new Date('2024-02-15'),
          },
          {
            id: '1-2-3',
            name: 'Retrospectives',
            color: '#3B82F6',
            usage_count: 2,
            created_at: new Date('2024-02-05'),
            updated_at: new Date('2024-02-10'),
          },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'Personal',
    color: '#10B981',
    usage_count: 20,
    created_at: new Date('2024-01-01'),
    updated_at: new Date('2024-03-05'),
    children: [
      {
        id: '2-1',
        name: 'Journal',
        color: '#10B981',
        usage_count: 12,
        created_at: new Date('2024-01-10'),
        updated_at: new Date('2024-03-01'),
      },
      {
        id: '2-2',
        name: 'Ideas',
        color: '#10B981',
        usage_count: 8,
        created_at: new Date('2024-01-15'),
        updated_at: new Date('2024-02-25'),
        children: [
          {
            id: '2-2-1',
            name: 'App Ideas',
            color: '#10B981',
            usage_count: 4,
            created_at: new Date('2024-01-20'),
            updated_at: new Date('2024-02-20'),
          },
          {
            id: '2-2-2',
            name: 'Business Ideas',
            color: '#10B981',
            usage_count: 4,
            created_at: new Date('2024-01-25'),
            updated_at: new Date('2024-02-15'),
          },
        ],
      },
    ],
  },
  {
    id: '3',
    name: 'Research',
    color: '#8B5CF6',
    usage_count: 15,
    created_at: new Date('2024-01-05'),
    updated_at: new Date('2024-03-10'),
    children: [
      {
        id: '3-1',
        name: 'AI/ML',
        color: '#8B5CF6',
        usage_count: 10,
        created_at: new Date('2024-01-15'),
        updated_at: new Date('2024-03-05'),
        children: [
          {
            id: '3-1-1',
            name: 'LLMs',
            color: '#8B5CF6',
            usage_count: 6,
            created_at: new Date('2024-01-20'),
            updated_at: new Date('2024-03-01'),
          },
          {
            id: '3-1-2',
            name: 'Computer Vision',
            color: '#8B5CF6',
            usage_count: 4,
            created_at: new Date('2024-01-25'),
            updated_at: new Date('2024-02-25'),
          },
        ],
      },
      {
        id: '3-2',
        name: 'Web Development',
        color: '#8B5CF6',
        usage_count: 5,
        created_at: new Date('2024-02-01'),
        updated_at: new Date('2024-03-01'),
      },
    ],
  },
  {
    id: '4',
    name: 'Archive',
    color: '#6B7280',
    usage_count: 0,
    created_at: new Date('2024-01-01'),
    updated_at: new Date('2024-01-01'),
  },
]

// Mock hook
jest.mock('@/hooks/use-tags', () => ({
  useTagManager: () => ({
    getOrCreateTag: jest.fn(),
    isLoading: false,
  }),
  useTagTree: () => mockTags,
}))

const meta = {
  title: 'UI/Navigation/TagTree',
  component: TagTree,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    tags: {
      control: 'object',
      description: 'Array of root tags',
    },
    selectedTagId: {
      control: 'text',
      description: 'Currently selected tag ID',
    },
    showUsageCounts: {
      control: 'boolean',
      description: 'Whether to show usage counts',
    },
    showActions: {
      control: 'boolean',
      description: 'Whether to show action buttons',
    },
    clickable: {
      control: 'boolean',
      description: 'Whether tags are clickable',
    },
    maxDepth: {
      control: 'number',
      description: 'Maximum depth to display',
    },
    onTagSelect: {
      action: 'onTagSelect',
      description: 'Callback when a tag is selected',
    },
    onTagEdit: {
      action: 'onTagEdit',
      description: 'Callback when a tag should be edited',
    },
    onTagDelete: {
      action: 'onTagDelete',
      description: 'Callback when a tag should be deleted',
    },
    onTagCreate: {
      action: 'onTagCreate',
      description: 'Callback when a new child tag should be created',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  decorators: [
    (Story) => (
      <div className='min-w-[300px] p-4 border rounded-lg bg-background'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TagTree>

export default meta
type Story = StoryObj<typeof meta>

// Wrapper component for controlled state
const TagTreeDemo = ({
  initialSelectedId,
  ...props
}: {
  initialSelectedId?: string
} & Partial<React.ComponentProps<typeof TagTree>>) => {
  const [selectedTagId, setSelectedTagId] = useState(initialSelectedId)

  return (
    <div className='space-y-4'>
      <TagTree
        tags={mockTags}
        selectedTagId={selectedTagId}
        onTagSelect={(tag) => setSelectedTagId(tag.id)}
        {...props}
      />
      {selectedTagId && (
        <div className='text-sm text-muted-foreground p-2 border-t'>
          Selected: {selectedTagId}
        </div>
      )}
    </div>
  )
}

export const Default: Story = {
  args: {
    tags: mockTags,
  },
}

export const WithSelection: Story = {
  render: () => <TagTreeDemo initialSelectedId='1-1' />,
}

export const NoUsageCounts: Story = {
  args: {
    tags: mockTags,
    showUsageCounts: false,
  },
}

export const NoActions: Story = {
  args: {
    tags: mockTags,
    showActions: false,
  },
}

export const NotClickable: Story = {
  args: {
    tags: mockTags,
    clickable: false,
  },
}

export const LimitedDepth: Story = {
  args: {
    tags: mockTags,
    maxDepth: 2,
  },
}

export const EmptyState: Story = {
  args: {
    tags: [],
  },
}

export const EmptyStateWithCreate: Story = {
  args: {
    tags: [],
    onTagCreate: () => console.info('Create tag clicked'),
  },
}

export const SingleLevel: Story = {
  args: {
    tags: [
      {
        id: '1',
        name: 'Simple Tag 1',
        color: '#3B82F6',
        usage_count: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: '2',
        name: 'Simple Tag 2',
        color: '#10B981',
        usage_count: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: '3',
        name: 'Simple Tag 3',
        color: '#F59E0B',
        usage_count: 8,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
  },
}

// Interactive stories
export const ExpandCollapse: Story = {
  args: {
    tags: mockTags,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Find Work tag expand button
    const workTag = canvas.getByText('Work').closest('div')
    const expandButton = within(workTag!).getByRole('button')

    // Click to expand
    await userEvent.click(expandButton)

    // Should show children
    await waitFor(() => {
      expect(canvas.getByText('Projects')).toBeInTheDocument()
      expect(canvas.getByText('Meetings')).toBeInTheDocument()
    })

    // Click again to collapse
    await userEvent.click(expandButton)

    // Children should be hidden
    await waitFor(() => {
      expect(canvas.queryByText('Projects')).not.toBeInTheDocument()
    })
  },
}

export const NestedExpansion: Story = {
  args: {
    tags: mockTags,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Expand Work
    const workExpandButton = canvas.getAllByRole('button')[0]
    await userEvent.click(workExpandButton)

    // Expand Projects
    await waitFor(() => {
      expect(canvas.getByText('Projects')).toBeInTheDocument()
    })

    const projectsTag = canvas.getByText('Projects').closest('div')
    const projectsExpandButton = within(projectsTag!).getByRole('button')
    await userEvent.click(projectsExpandButton)

    // Should show nested children
    await waitFor(() => {
      expect(canvas.getByText('Project Alpha')).toBeInTheDocument()
      expect(canvas.getByText('Project Beta')).toBeInTheDocument()
    })
  },
}

export const SelectTag: Story = {
  render: () => <TagTreeDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Click on Personal tag
    const personalTag = canvas.getByText('Personal')
    await userEvent.click(personalTag)

    // Should show selection
    await waitFor(() => {
      expect(canvas.getByText('Selected: 2')).toBeInTheDocument()
    })

    // Expand and select nested tag
    const personalExpandButton = canvas.getAllByRole('button')[3] // 4th button (after Work expand and action buttons)
    await userEvent.click(personalExpandButton)

    const journalTag = await canvas.findByText('Journal')
    await userEvent.click(journalTag)

    await waitFor(() => {
      expect(canvas.getByText('Selected: 2-1')).toBeInTheDocument()
    })
  },
}

export const ActionMenu: Story = {
  args: {
    tags: mockTags,
    onTagEdit: (tag) => console.info('Edit:', tag),
    onTagDelete: (tag) => console.info('Delete:', tag),
    onTagCreate: (parentTag) => console.info('Create child of:', parentTag),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Hover over Work tag to show action button
    const workTag = canvas.getByText('Work').closest('div')
    await userEvent.hover(workTag!)

    // Find and click the more button (it should be visible on hover)
    const moreButtons = canvas
      .getAllByRole('button')
      .filter((btn) => btn.querySelector('.lucide-more-horizontal'))

    if (moreButtons.length > 0) {
      await userEvent.click(moreButtons[0])

      // Menu should be open
      await waitFor(() => {
        expect(canvas.getByText('Add child tag')).toBeInTheDocument()
        expect(canvas.getByText('Edit tag')).toBeInTheDocument()
        expect(canvas.getByText('Delete tag')).toBeInTheDocument()
      })
    }
  },
}

export const WithSearch: Story = {
  render: () => {
    const [query, setQuery] = useState('')

    // Filter tags based on search
    const filterTags = (
      tags: EnhancedTag[],
      searchQuery: string
    ): EnhancedTag[] => {
      if (!searchQuery) return tags

      return tags.reduce<EnhancedTag[]>((acc, tag) => {
        const matches = tag.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
        const filteredChildren = tag.children
          ? filterTags(tag.children, searchQuery)
          : []

        if (matches || filteredChildren.length > 0) {
          acc.push({
            ...tag,
            children: filteredChildren,
          })
        }

        return acc
      }, [])
    }

    const filteredTags = filterTags(mockTags, query)

    return (
      <div className='space-y-4'>
        <TagTreeSearch
          query={query}
          onQueryChange={setQuery}
          placeholder='Search tags...'
        />
        <TagTree tags={filteredTags} />
      </div>
    )
  },
}

export const SearchInteraction: Story = {
  render: () => {
    const [query, setQuery] = useState('')

    const filterTags = (
      tags: EnhancedTag[],
      searchQuery: string
    ): EnhancedTag[] => {
      if (!searchQuery) return tags

      return tags.reduce<EnhancedTag[]>((acc, tag) => {
        const matches = tag.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
        const filteredChildren = tag.children
          ? filterTags(tag.children, searchQuery)
          : []

        if (matches || filteredChildren.length > 0) {
          acc.push({
            ...tag,
            children: filteredChildren,
          })
        }

        return acc
      }, [])
    }

    const filteredTags = filterTags(mockTags, query)

    return (
      <div className='space-y-4'>
        <TagTreeSearch query={query} onQueryChange={setQuery} />
        <TagTree tags={filteredTags} />
      </div>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Find search input
    const searchInput = canvas.getByPlaceholderText('Search tags...')

    // Search for "project"
    await userEvent.type(searchInput, 'project')

    // Should filter tags
    await waitFor(() => {
      expect(canvas.getByText('Projects')).toBeInTheDocument()
      expect(canvas.queryByText('Journal')).not.toBeInTheDocument()
    })

    // Clear search
    await userEvent.clear(searchInput)
    await userEvent.type(searchInput, 'idea')

    await waitFor(() => {
      expect(canvas.getByText('Ideas')).toBeInTheDocument()
      expect(canvas.queryByText('Meetings')).not.toBeInTheDocument()
    })
  },
}

export const ColorfulTags: Story = {
  args: {
    tags: [
      {
        id: '1',
        name: 'Red Tag',
        color: '#EF4444',
        usage_count: 5,
        created_at: new Date(),
        updated_at: new Date(),
        children: [
          {
            id: '1-1',
            name: 'Light Red',
            color: '#FCA5A5',
            usage_count: 3,
            created_at: new Date(),
            updated_at: new Date(),
          },
        ],
      },
      {
        id: '2',
        name: 'Green Tag',
        color: '#10B981',
        usage_count: 8,
        created_at: new Date(),
        updated_at: new Date(),
        children: [
          {
            id: '2-1',
            name: 'Light Green',
            color: '#86EFAC',
            usage_count: 4,
            created_at: new Date(),
            updated_at: new Date(),
          },
        ],
      },
      {
        id: '3',
        name: 'Blue Tag',
        color: '#3B82F6',
        usage_count: 12,
        created_at: new Date(),
        updated_at: new Date(),
        children: [
          {
            id: '3-1',
            name: 'Light Blue',
            color: '#93C5FD',
            usage_count: 6,
            created_at: new Date(),
            updated_at: new Date(),
          },
        ],
      },
    ],
  },
}

export const DeepNesting: Story = {
  args: {
    tags: [
      {
        id: '1',
        name: 'Level 1',
        color: '#3B82F6',
        usage_count: 10,
        created_at: new Date(),
        updated_at: new Date(),
        children: [
          {
            id: '1-1',
            name: 'Level 2',
            color: '#3B82F6',
            usage_count: 8,
            created_at: new Date(),
            updated_at: new Date(),
            children: [
              {
                id: '1-1-1',
                name: 'Level 3',
                color: '#3B82F6',
                usage_count: 6,
                created_at: new Date(),
                updated_at: new Date(),
                children: [
                  {
                    id: '1-1-1-1',
                    name: 'Level 4',
                    color: '#3B82F6',
                    usage_count: 4,
                    created_at: new Date(),
                    updated_at: new Date(),
                    children: [
                      {
                        id: '1-1-1-1-1',
                        name: 'Level 5 (Max)',
                        color: '#3B82F6',
                        usage_count: 2,
                        created_at: new Date(),
                        updated_at: new Date(),
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
}

export const ManyTags: Story = {
  args: {
    tags: Array.from({ length: 20 }, (_, i) => ({
      id: `tag-${i}`,
      name: `Tag ${i + 1}`,
      color: `hsl(${i * 18}, 70%, 50%)`,
      usage_count: Math.floor(Math.random() * 20),
      created_at: new Date(),
      updated_at: new Date(),
    })),
  },
}

export const MobileResponsive: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {
    tags: mockTags,
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
    tags: mockTags,
  },
}
