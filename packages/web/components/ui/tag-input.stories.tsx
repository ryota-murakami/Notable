import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { TagInput } from './tag-input'
import type { EnhancedTag } from '@/types/tags'
import { within, userEvent, expect, waitFor } from '@storybook/test'

// Mock data
const mockTags: EnhancedTag[] = [
  {
    id: '1',
    name: 'work',
    color: '#3B82F6',
    usage_count: 12,
    created_at: new Date('2024-01-01'),
    updated_at: new Date('2024-01-15'),
  },
  {
    id: '2',
    name: 'personal',
    color: '#10B981',
    usage_count: 8,
    created_at: new Date('2024-01-05'),
    updated_at: new Date('2024-01-20'),
  },
  {
    id: '3',
    name: 'project',
    color: '#F59E0B',
    usage_count: 15,
    created_at: new Date('2024-01-10'),
    updated_at: new Date('2024-01-25'),
  },
  {
    id: '4',
    name: 'ideas',
    color: '#8B5CF6',
    usage_count: 6,
    created_at: new Date('2024-01-15'),
    updated_at: new Date('2024-02-01'),
  },
  {
    id: '5',
    name: 'research',
    color: '#EF4444',
    usage_count: 10,
    created_at: new Date('2024-01-20'),
    updated_at: new Date('2024-02-05'),
  },
  {
    id: '6',
    name: 'documentation',
    color: '#6366F1',
    usage_count: 4,
    created_at: new Date('2024-02-01'),
    updated_at: new Date('2024-02-10'),
  },
  {
    id: '7',
    name: 'meeting-notes',
    color: '#EC4899',
    usage_count: 7,
    created_at: new Date('2024-02-05'),
    updated_at: new Date('2024-02-15'),
  },
  {
    id: '8',
    name: 'todo',
    color: '#14B8A6',
    usage_count: 20,
    created_at: new Date('2024-02-10'),
    updated_at: new Date('2024-02-20'),
  },
]

// Mock hooks
const mockGetOrCreateTag = jest.fn()
const mockSuggestions: EnhancedTag[] = []

jest.mock('@/hooks/use-tags', () => ({
  useTagManager: () => ({
    getOrCreateTag: mockGetOrCreateTag,
    isLoading: false,
  }),
  useTagSuggestions: (query: string) => {
    if (!query) return []

    // Return filtered mock tags based on query
    return mockTags.filter((tag) =>
      tag.name.toLowerCase().includes(query.toLowerCase())
    )
  },
}))

const meta = {
  title: 'UI/Forms/TagInput',
  component: TagInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    tags: {
      control: 'object',
      description: 'Currently selected tags',
    },
    onTagsChange: {
      action: 'onTagsChange',
      description: 'Callback when tags change',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input',
    },
    maxTags: {
      control: 'number',
      description: 'Maximum number of tags allowed',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    allowCreate: {
      control: 'boolean',
      description: 'Whether to allow creating new tags',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  decorators: [
    (Story) => (
      <div className='min-w-[400px] p-8'>
        <Story />
      </div>
    ),
  ],
  beforeEach: () => {
    // Reset mock
    mockGetOrCreateTag.mockReset()
    mockGetOrCreateTag.mockImplementation(async (name: string) => ({
      id: `new-${Date.now()}`,
      name,
      color: '#6B7280',
      usage_count: 0,
      created_at: new Date(),
      updated_at: new Date(),
    }))
  },
} satisfies Meta<typeof TagInput>

export default meta
type Story = StoryObj<typeof meta>

// Wrapper component for controlled state
const TagInputDemo = ({
  initialTags = [],
  ...props
}: {
  initialTags?: EnhancedTag[]
} & Partial<React.ComponentProps<typeof TagInput>>) => {
  const [tags, setTags] = useState<EnhancedTag[]>(initialTags)

  return (
    <div className='space-y-4'>
      <TagInput tags={tags} onTagsChange={setTags} {...props} />
      <div className='text-sm text-muted-foreground'>
        Selected tags:{' '}
        {tags.length > 0 ? tags.map((t) => t.name).join(', ') : 'None'}
      </div>
    </div>
  )
}

export const Default: Story = {
  render: () => <TagInputDemo />,
}

export const WithSelectedTags: Story = {
  render: () => (
    <TagInputDemo initialTags={[mockTags[0], mockTags[1], mockTags[2]]} />
  ),
}

export const CustomPlaceholder: Story = {
  render: () => (
    <TagInputDemo placeholder='Type to add tags (e.g., work, personal, ideas)' />
  ),
}

export const MaxTagsLimit: Story = {
  render: () => (
    <TagInputDemo
      initialTags={[mockTags[0], mockTags[1], mockTags[2]]}
      maxTags={5}
    />
  ),
}

export const Disabled: Story = {
  render: () => (
    <TagInputDemo initialTags={[mockTags[0], mockTags[1]]} disabled />
  ),
}

export const NoCreate: Story = {
  render: () => (
    <TagInputDemo
      allowCreate={false}
      placeholder='Select from existing tags only'
    />
  ),
}

export const ColorfulTags: Story = {
  render: () => <TagInputDemo initialTags={mockTags.slice(0, 6)} />,
}

// Interactive stories
export const TypeAndSearch: Story = {
  render: () => <TagInputDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Find input
    const input = canvas.getByPlaceholderText('Add tags...')

    // Type to search
    await userEvent.type(input, 'pro')

    // Should show suggestions
    await waitFor(() => {
      expect(canvas.getByText('project')).toBeInTheDocument()
      expect(canvas.getByText('15 notes')).toBeInTheDocument()
    })

    // Clear and search again
    await userEvent.clear(input)
    await userEvent.type(input, 'work')

    await waitFor(() => {
      expect(canvas.getByText('work')).toBeInTheDocument()
      expect(canvas.getByText('12 notes')).toBeInTheDocument()
    })
  },
}

export const SelectFromSuggestions: Story = {
  render: () => <TagInputDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const input = canvas.getByPlaceholderText('Add tags...')

    // Type to get suggestions
    await userEvent.type(input, 'per')

    // Click suggestion
    const suggestion = await canvas.findByRole('button', { name: /personal/ })
    await userEvent.click(suggestion)

    // Tag should be added
    await waitFor(() => {
      expect(canvas.getByText('Selected tags: personal')).toBeInTheDocument()
    })

    // Input should be cleared
    expect(input).toHaveValue('')
  },
}

export const CreateNewTag: Story = {
  render: () => <TagInputDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const input = canvas.getByPlaceholderText('Add tags...')

    // Type new tag name
    await userEvent.type(input, 'new-feature')

    // Should show create option
    await waitFor(() => {
      expect(canvas.getByText('Create "new-feature"')).toBeInTheDocument()
    })

    // Click create
    const createButton = canvas.getByRole('button', {
      name: /Create "new-feature"/,
    })
    await userEvent.click(createButton)

    // Should create and add tag
    await waitFor(() => {
      expect(mockGetOrCreateTag).toHaveBeenCalledWith('new-feature')
      expect(canvas.getByText('Selected tags: new-feature')).toBeInTheDocument()
    })
  },
}

export const KeyboardNavigation: Story = {
  render: () => <TagInputDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const input = canvas.getByPlaceholderText('Add tags...')

    // Type and press Enter to add
    await userEvent.type(input, 'work')
    await userEvent.keyboard('{Enter}')

    await waitFor(() => {
      expect(canvas.getByText('Selected tags: work')).toBeInTheDocument()
    })

    // Type another tag
    await userEvent.type(input, 'urgent-task')
    await userEvent.keyboard('{Enter}')

    await waitFor(() => {
      expect(
        canvas.getByText('Selected tags: work, urgent-task')
      ).toBeInTheDocument()
    })

    // Backspace to remove last tag
    await userEvent.keyboard('{Backspace}')

    await waitFor(() => {
      expect(canvas.getByText('Selected tags: work')).toBeInTheDocument()
    })
  },
}

export const RemoveTag: Story = {
  render: () => (
    <TagInputDemo initialTags={[mockTags[0], mockTags[1], mockTags[2]]} />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Find remove button for 'personal' tag
    const personalTag = canvas.getByText('personal').closest('[class*="badge"]')
    const removeButton = within(personalTag!).getByRole('button')

    await userEvent.click(removeButton)

    // Tag should be removed
    await waitFor(() => {
      expect(
        canvas.getByText('Selected tags: work, project')
      ).toBeInTheDocument()
    })
  },
}

export const EscapeKey: Story = {
  render: () => <TagInputDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const input = canvas.getByPlaceholderText('Add tags...')

    // Type something
    await userEvent.type(input, 'test')

    // Press Escape
    await userEvent.keyboard('{Escape}')

    // Input should be cleared and blurred
    await waitFor(() => {
      expect(input).toHaveValue('')
      expect(input).not.toHaveFocus()
    })
  },
}

export const MaxTagsReached: Story = {
  render: () => (
    <TagInputDemo
      initialTags={[mockTags[0], mockTags[1], mockTags[2]]}
      maxTags={3}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Input should be disabled
    const input = canvas.getByPlaceholderText('')
    expect(input).toBeDisabled()

    // Remove a tag
    const removeButtons = canvas
      .getAllByRole('button')
      .filter((btn) => btn.querySelector('svg')?.classList.contains('lucide-x'))
    await userEvent.click(removeButtons[0])

    // Input should be enabled again
    await waitFor(() => {
      expect(input).not.toBeDisabled()
    })
  },
}

export const ClickOutsideToClose: Story = {
  render: () => <TagInputDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const input = canvas.getByPlaceholderText('Add tags...')

    // Type to show suggestions
    await userEvent.type(input, 'work')

    // Verify suggestions are visible
    await waitFor(() => {
      expect(canvas.getByText('work')).toBeInTheDocument()
    })

    // Click outside
    await userEvent.click(document.body)

    // Suggestions should close
    await waitFor(() => {
      const suggestions = canvas.queryByText('12 notes')
      expect(suggestions).not.toBeInTheDocument()
    })
  },
}

export const EmptyState: Story = {
  render: () => <TagInputDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const input = canvas.getByPlaceholderText('Add tags...')

    // Type something that doesn't match
    await userEvent.type(input, 'xyz123')

    // Should show "No tags found" or create option
    await waitFor(() => {
      expect(canvas.getByText('Create "xyz123"')).toBeInTheDocument()
    })
  },
}

export const NoCreateEmptyState: Story = {
  render: () => <TagInputDemo allowCreate={false} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const input = canvas.getByPlaceholderText('Select from existing tags only')

    // Type something that doesn't match
    await userEvent.type(input, 'xyz123')

    // Should show "No tags found"
    await waitFor(() => {
      expect(canvas.getByText('No tags found')).toBeInTheDocument()
    })
  },
}

export const LoadingState: Story = {
  render: () => {
    // Override mock to simulate loading
    jest.mocked(require('@/hooks/use-tags').useTagManager).mockReturnValue({
      getOrCreateTag: mockGetOrCreateTag,
      isLoading: true,
    })

    return <TagInputDemo />
  },
}

export const ManyTags: Story = {
  render: () => <TagInputDemo initialTags={mockTags} />,
}

export const LongTagNames: Story = {
  render: () => (
    <TagInputDemo
      initialTags={[
        {
          id: '1',
          name: 'very-long-tag-name-that-might-wrap',
          color: '#3B82F6',
          usage_count: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: '2',
          name: 'another-extremely-long-tag-name-for-testing',
          color: '#10B981',
          usage_count: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]}
    />
  ),
}

export const MobileResponsive: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  render: () => <TagInputDemo initialTags={[mockTags[0], mockTags[1]]} />,
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
  render: () => (
    <TagInputDemo initialTags={[mockTags[0], mockTags[1], mockTags[2]]} />
  ),
}
