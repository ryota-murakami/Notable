import type { Meta, StoryObj } from '@storybook/nextjs'
import { TagBadge, TagList } from './tag-badge'
import { within, userEvent, expect } from '@storybook/test'
import type { EnhancedTag } from '@/types/tags'

const meta = {
  title: 'UI/Components/TagBadge',
  component: TagBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'outline', 'destructive'],
    },
    clickable: {
      control: { type: 'boolean' },
    },
    removable: {
      control: { type: 'boolean' },
    },
    showIcon: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof TagBadge>

export default meta
type Story = StoryObj<typeof meta>

// Mock tag data
const mockTag: EnhancedTag = {
  id: '1',
  name: 'javascript',
  user_id: 'user-1',
  parent_id: null,
  color: '#3b82f6',
  description: 'JavaScript programming language',
  created_at: '2024-01-01T00:00:00Z',
  updated_at: '2024-01-01T00:00:00Z',
  usage_count: 42,
}

const mockTags: EnhancedTag[] = [
  {
    id: '1',
    name: 'javascript',
    user_id: 'user-1',
    parent_id: null,
    color: '#3b82f6',
    description: 'JavaScript programming language',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    usage_count: 42,
  },
  {
    id: '2',
    name: 'react',
    user_id: 'user-1',
    parent_id: null,
    color: '#06b6d4',
    description: 'React library',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    usage_count: 35,
  },
  {
    id: '3',
    name: 'typescript',
    user_id: 'user-1',
    parent_id: null,
    color: '#8b5cf6',
    description: 'TypeScript language',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    usage_count: 28,
  },
  {
    id: '4',
    name: 'nextjs',
    user_id: 'user-1',
    parent_id: null,
    color: '#10b981',
    description: 'Next.js framework',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    usage_count: 15,
  },
]

export const Default: Story = {
  args: {
    tag: mockTag,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const badge = canvas.getByText('javascript')

    await expect(badge).toBeVisible()
    await expect(canvas.getByText('(42)')).toBeVisible()
  },
}

export const Sizes: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <TagBadge tag={mockTag} size='sm' />
      <TagBadge tag={mockTag} size='md' />
      <TagBadge tag={mockTag} size='lg' />
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <TagBadge tag={mockTag} variant='default' />
      <TagBadge tag={mockTag} variant='secondary' />
      <TagBadge tag={mockTag} variant='outline' />
      <TagBadge tag={mockTag} variant='destructive' />
    </div>
  ),
}

export const Clickable: Story = {
  args: {
    tag: mockTag,
    clickable: true,
    onClick: (tag) => console.log('Clicked tag:', tag.name),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const badge = canvas.getByText('javascript')

    await userEvent.hover(badge)
    await userEvent.click(badge)
  },
}

export const Removable: Story = {
  args: {
    tag: mockTag,
    removable: true,
    onRemove: (tag) => console.log('Removed tag:', tag.name),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const removeButton = canvas.getByLabelText('Remove javascript tag')

    await expect(removeButton).toBeVisible()
    await userEvent.click(removeButton)
  },
}

export const WithoutIcon: Story = {
  args: {
    tag: mockTag,
    showIcon: false,
  },
}

export const WithoutUsageCount: Story = {
  args: {
    tag: {
      ...mockTag,
      usage_count: undefined,
    },
  },
}

export const CustomColors: Story = {
  render: () => (
    <div className='flex items-center gap-2 flex-wrap'>
      <TagBadge tag={{ ...mockTag, color: '#ef4444', name: 'urgent' }} />
      <TagBadge tag={{ ...mockTag, color: '#f59e0b', name: 'warning' }} />
      <TagBadge tag={{ ...mockTag, color: '#10b981', name: 'success' }} />
      <TagBadge tag={{ ...mockTag, color: '#8b5cf6', name: 'info' }} />
      <TagBadge tag={{ ...mockTag, color: '#ec4899', name: 'design' }} />
      <TagBadge tag={{ ...mockTag, color: '#64748b', name: 'archived' }} />
    </div>
  ),
}

export const TagListDefault: Story = {
  render: () => <TagList tags={mockTags} />,
}

export const TagListClickable: Story = {
  render: () => (
    <TagList
      tags={mockTags}
      clickable
      onTagClick={(tag) => console.log('Clicked:', tag.name)}
    />
  ),
}

export const TagListRemovable: Story = {
  render: () => (
    <TagList
      tags={mockTags}
      removable
      onTagRemove={(tag) => console.log('Removed:', tag.name)}
    />
  ),
}

export const TagListSizes: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <h3 className='text-sm font-medium mb-2'>Small</h3>
        <TagList tags={mockTags} size='sm' />
      </div>
      <div>
        <h3 className='text-sm font-medium mb-2'>Medium</h3>
        <TagList tags={mockTags} size='md' />
      </div>
      <div>
        <h3 className='text-sm font-medium mb-2'>Large</h3>
        <TagList tags={mockTags} size='lg' />
      </div>
    </div>
  ),
}

export const TagListMaxTags: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <h3 className='text-sm font-medium mb-2'>Show max 2 tags</h3>
        <TagList tags={mockTags} maxTags={2} />
      </div>
      <div>
        <h3 className='text-sm font-medium mb-2'>Show max 3 tags</h3>
        <TagList tags={mockTags} maxTags={3} />
      </div>
    </div>
  ),
}

export const TagListVertical: Story = {
  render: () => (
    <div className='w-48'>
      <TagList tags={mockTags} direction='vertical' />
    </div>
  ),
}

export const TagListEmpty: Story = {
  render: () => <TagList tags={[]} />,
}

export const InteractiveExample: Story = {
  render: () => {
    const [tags, setTags] = React.useState(mockTags)

    const handleRemove = (tagToRemove: EnhancedTag) => {
      setTags(tags.filter((tag) => tag.id !== tagToRemove.id))
    }

    return (
      <div className='space-y-4'>
        <h3 className='text-sm font-medium'>Click to remove tags:</h3>
        <TagList
          tags={tags}
          removable
          clickable
          onTagRemove={handleRemove}
          onTagClick={(tag) => console.log('Clicked:', tag.name)}
        />
        {tags.length === 0 && (
          <p className='text-sm text-muted-foreground'>All tags removed!</p>
        )}
      </div>
    )
  },
}
