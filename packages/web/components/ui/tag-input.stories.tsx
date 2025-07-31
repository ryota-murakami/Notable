import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import type { EnhancedTag } from '@/types/tags'
import { expect, userEvent, waitFor, within } from '@storybook/test'
import { Plus, Search, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

// Mock data
const mockTags: EnhancedTag[] = [
  {
    id: '1',
    name: 'work',
    color: '#3B82F6',
    usage_count: 12,
    created_at: new Date('2024-01-01').toISOString(),
    user_id: 'user1',
    parent_id: null,
  },
  {
    id: '2',
    name: 'personal',
    color: '#10B981',
    usage_count: 8,
    created_at: new Date('2024-01-05').toISOString(),
    user_id: 'user1',
    parent_id: null,
  },
  {
    id: '3',
    name: 'project',
    color: '#F59E0B',
    usage_count: 15,
    created_at: new Date('2024-01-10').toISOString(),
    user_id: 'user1',
    parent_id: null,
  },
  {
    id: '4',
    name: 'ideas',
    color: '#8B5CF6',
    usage_count: 6,
    created_at: new Date('2024-01-15').toISOString(),
    user_id: 'user1',
    parent_id: null,
  },
  {
    id: '5',
    name: 'research',
    color: '#EF4444',
    usage_count: 10,
    created_at: new Date('2024-01-20').toISOString(),
    user_id: 'user1',
    parent_id: null,
  },
  {
    id: '6',
    name: 'documentation',
    color: '#6366F1',
    usage_count: 4,
    created_at: new Date('2024-02-01').toISOString(),
    user_id: 'user1',
    parent_id: null,
  },
  {
    id: '7',
    name: 'meeting-notes',
    color: '#EC4899',
    usage_count: 7,
    created_at: new Date('2024-02-05').toISOString(),
    user_id: 'user1',
    parent_id: null,
  },
  {
    id: '8',
    name: 'todo',
    color: '#14B8A6',
    usage_count: 20,
    created_at: new Date('2024-02-10').toISOString(),
    user_id: 'user1',
    parent_id: null,
  },
]

// Mock TagInput component
const TagInputMock = ({
  tags,
  onTagsChange,
  placeholder = 'Add tags...',
  maxTags,
  disabled = false,
  allowCreate = true,
  className,
}: {
  tags: EnhancedTag[]
  onTagsChange: (tags: EnhancedTag[]) => void
  placeholder?: string
  maxTags?: number
  disabled?: boolean
  allowCreate?: boolean
  className?: string
}) => {
  const [inputValue, setInputValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [isCreating, setIsCreating] = useState(false)

  const availableTags = mockTags.filter(
    (mockTag) => !tags.find((t) => t.id === mockTag.id)
  )

  const filteredSuggestions = inputValue
    ? availableTags.filter((tag) =>
        tag.name.toLowerCase().includes(inputValue.toLowerCase())
      )
    : availableTags

  const handleAddTag = (tag: EnhancedTag) => {
    if (maxTags && tags.length >= maxTags) return
    onTagsChange([...tags, tag])
    setInputValue('')
    setIsOpen(false)
  }

  const handleRemoveTag = (tagId: string) => {
    onTagsChange(tags.filter((t) => t.id !== tagId))
  }

  const handleCreateTag = async () => {
    if (!inputValue.trim() || !allowCreate) return

    setIsCreating(true)
    // Simulate tag creation
    await new Promise((resolve) => setTimeout(resolve, 500))

    const newTag: EnhancedTag = {
      id: `new-${Date.now()}`,
      name: inputValue.trim(),
      color: '#6B7280',
      usage_count: 0,
      created_at: new Date().toISOString(),
      user_id: 'user1',
      parent_id: null,
    }

    handleAddTag(newTag)
    setIsCreating(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && inputValue) {
      e.preventDefault()
      if (filteredSuggestions.length > 0) {
        handleAddTag(filteredSuggestions[0])
      } else if (allowCreate) {
        handleCreateTag()
      }
    } else if (e.key === 'Backspace' && !inputValue && tags.length > 0) {
      handleRemoveTag(tags[tags.length - 1].id)
    } else if (e.key === 'Escape') {
      setInputValue('')
      setIsOpen(false)
      ;(e.target as HTMLElement).blur()
    }
  }

  const isMaxTagsReached = maxTags ? tags.length >= maxTags : false

  return (
    <div className={className}>
      <div className='flex flex-wrap gap-2 p-3 border rounded-md bg-background'>
        {tags.map((tag) => (
          <Badge
            key={tag.id}
            variant='secondary'
            className='gap-1'
            style={{ borderColor: tag.color }}
          >
            <div
              className='w-2 h-2 rounded-full'
              style={{ backgroundColor: tag.color }}
            />
            {tag.name}
            <button
              onClick={() => handleRemoveTag(tag.id)}
              className='ml-1 hover:opacity-70'
              disabled={disabled}
            >
              <X className='h-3 w-3' />
            </button>
          </Badge>
        ))}

        <Popover open={isOpen && !disabled} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsOpen(true)}
              placeholder={
                isMaxTagsReached
                  ? `Maximum ${maxTags} tags reached`
                  : placeholder
              }
              disabled={disabled || isMaxTagsReached}
              className='flex-1 min-w-[120px] border-0 shadow-none focus-visible:ring-0 px-0'
            />
          </PopoverTrigger>

          <PopoverContent className='w-[300px] p-2' align='start'>
            {filteredSuggestions.length > 0 ? (
              <div className='space-y-1'>
                {filteredSuggestions.map((tag) => (
                  <button
                    key={tag.id}
                    onClick={() => handleAddTag(tag)}
                    className='flex items-center gap-2 w-full p-2 text-sm rounded hover:bg-accent'
                  >
                    <div
                      className='w-3 h-3 rounded-full'
                      style={{ backgroundColor: tag.color }}
                    />
                    <span className='flex-1 text-left'>{tag.name}</span>
                    <span className='text-xs text-muted-foreground'>
                      {tag.usage_count} notes
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <div className='text-center py-4'>
                {inputValue && allowCreate ? (
                  <button
                    onClick={handleCreateTag}
                    disabled={isCreating}
                    className='flex items-center gap-2 justify-center w-full p-2 text-sm rounded hover:bg-accent'
                  >
                    <Plus className='h-4 w-4' />
                    <span>Create "{inputValue}"</span>
                  </button>
                ) : (
                  <p className='text-sm text-muted-foreground'>No tags found</p>
                )}
              </div>
            )}
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}

const meta = {
  title: 'UI/Forms/TagInput',
  component: TagInputMock,
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
} satisfies Meta<typeof TagInputMock>

export default meta
type Story = StoryObj<typeof meta>

// Wrapper component for controlled state
const TagInputDemo = ({
  initialTags = [],
  ...props
}: {
  initialTags?: EnhancedTag[]
} & Partial<React.ComponentProps<typeof TagInputMock>>) => {
  const [tags, setTags] = useState<EnhancedTag[]>(initialTags)

  return (
    <div className='space-y-4'>
      <TagInputMock tags={tags} onTagsChange={setTags} {...props} />
      <div className='text-sm text-muted-foreground'>
        Selected tags:{' '}
        {tags.length > 0 ? tags.map((t) => t.name).join(', ') : 'None'}
      </div>
    </div>
  )
}

export const Default: Story = {
  args: {
    tags: [],
    onTagsChange: () => {},
  },
  render: () => <TagInputDemo />,
}

export const WithSelectedTags: Story = {
  args: {
    tags: mockTags.slice(0, 3),
    onTagsChange: () => {},
  },
  render: () => (
    <TagInputDemo initialTags={[mockTags[0], mockTags[1], mockTags[2]]} />
  ),
}

export const CustomPlaceholder: Story = {
  args: {
    tags: [],
    onTagsChange: () => {},
    placeholder: 'Add your tags here...',
  },
  render: () => (
    <TagInputDemo placeholder='Type to add tags (e.g., work, personal, ideas)' />
  ),
}

export const MaxTagsLimit: Story = {
  args: {
    tags: mockTags.slice(0, 3),
    onTagsChange: () => {},
    maxTags: 5,
  },
  render: () => (
    <TagInputDemo
      initialTags={[mockTags[0], mockTags[1], mockTags[2]]}
      maxTags={5}
    />
  ),
}

export const Disabled: Story = {
  args: {
    tags: mockTags.slice(0, 2),
    onTagsChange: () => {},
    disabled: true,
  },
  render: () => (
    <TagInputDemo initialTags={[mockTags[0], mockTags[1]]} disabled />
  ),
}

export const NoCreate: Story = {
  args: {
    tags: [],
    onTagsChange: () => {},
    allowCreate: false,
  },
  render: () => (
    <TagInputDemo
      allowCreate={false}
      placeholder='Select from existing tags only'
    />
  ),
}

export const ColorfulTags: Story = {
  args: {
    tags: mockTags.slice(0, 6),
    onTagsChange: () => {},
  },
  render: () => <TagInputDemo initialTags={mockTags.slice(0, 6)} />,
}

// Interactive stories
export const TypeAndSearch: Story = {
  args: {
    tags: [],
    onTagsChange: () => {},
  },
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
  args: {
    tags: [],
    onTagsChange: () => {},
  },
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
  args: {
    tags: [],
    onTagsChange: () => {},
  },
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
      expect(canvas.getByText('Selected tags: new-feature')).toBeInTheDocument()
    })
  },
}

export const KeyboardNavigation: Story = {
  args: {
    tags: [],
    onTagsChange: () => {},
  },
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
  args: {
    tags: mockTags.slice(0, 3),
    onTagsChange: () => {},
  },
  render: () => (
    <TagInputDemo initialTags={[mockTags[0], mockTags[1], mockTags[2]]} />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Find remove button for 'personal' tag
    const personalTag = canvas
      .getByText('personal')
      .closest('[class*="badge"]') as HTMLElement
    const removeButton = within(personalTag).getByRole('button')

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
  args: {
    tags: [],
    onTagsChange: () => {},
  },
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
  args: {
    tags: mockTags.slice(0, 5),
    onTagsChange: () => {},
    maxTags: 5,
  },
  render: () => (
    <TagInputDemo
      initialTags={[mockTags[0], mockTags[1], mockTags[2]]}
      maxTags={3}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Input should be disabled
    const input = canvas.getByPlaceholderText(/Maximum 3 tags reached/)
    expect(input).toBeDisabled()

    // Remove a tag
    const removeButtons = canvas
      .getAllByRole('button')
      .filter((btn) => btn.querySelector('svg')?.classList.contains('lucide-x'))
    await userEvent.click(removeButtons[0])

    // Input should be enabled again
    await waitFor(() => {
      const enabledInput = canvas.getByPlaceholderText('Add tags...')
      expect(enabledInput).not.toBeDisabled()
    })
  },
}

export const ClickOutsideToClose: Story = {
  args: {
    tags: [],
    onTagsChange: () => {},
  },
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
  args: {
    tags: [],
    onTagsChange: () => {},
  },
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
  args: {
    tags: [],
    onTagsChange: () => {},
    allowCreate: false,
  },
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
  args: {
    tags: [],
    onTagsChange: () => {},
  },
  render: () => {
    const [tags, setTags] = useState<EnhancedTag[]>([])
    const [isLoading, setIsLoading] = useState(false)

    const handleTagsChange = async (newTags: EnhancedTag[]) => {
      setIsLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setTags(newTags)
      setIsLoading(false)
    }

    return (
      <div className='space-y-4'>
        <TagInputMock
          tags={tags}
          onTagsChange={handleTagsChange}
          disabled={isLoading}
        />
        {isLoading && (
          <p className='text-sm text-muted-foreground'>Loading...</p>
        )}
      </div>
    )
  },
}

export const ManyTags: Story = {
  args: {
    tags: mockTags,
    onTagsChange: () => {},
  },
  render: () => <TagInputDemo initialTags={mockTags} />,
}

export const LongTagNames: Story = {
  args: {
    tags: [],
    onTagsChange: () => {},
  },
  render: () => (
    <TagInputDemo
      initialTags={[
        {
          id: '1',
          name: 'very-long-tag-name-that-might-wrap',
          color: '#3B82F6',
          usage_count: 5,
          created_at: new Date().toISOString(),
          user_id: 'user1',
          parent_id: null,
        },
        {
          id: '2',
          name: 'another-extremely-long-tag-name-for-testing',
          color: '#10B981',
          usage_count: 3,
          created_at: new Date().toISOString(),
          user_id: 'user1',
          parent_id: null,
        },
      ]}
    />
  ),
}

export const MobileResponsive: Story = {
  args: {
    tags: [mockTags[0], mockTags[1]],
    onTagsChange: () => {},
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  render: () => <TagInputDemo initialTags={[mockTags[0], mockTags[1]]} />,
}

export const DarkMode: Story = {
  args: {
    tags: [mockTags[0], mockTags[1], mockTags[2]],
    onTagsChange: () => {},
  },
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
