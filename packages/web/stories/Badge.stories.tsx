import type { Meta, StoryObj } from '@storybook/nextjs'
import { Badge } from '../design-system/components/badge'
import {
  AlertTriangle,
  CheckCircle,
  Clock,
  Lock,
  Star,
  Zap,
} from 'lucide-react'

const meta: Meta<typeof Badge> = {
  title: 'Notable Design System/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Small status descriptors for items and features throughout Notable. Used for tags, status indicators, and premium features.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
      description: 'Visual style variant of the badge',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Basic Badge Stories
export const Default: Story = {
  args: {
    children: 'Default',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
}

// With Icons
export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Star className='mr-1 h-3 w-3' />
        Premium
      </>
    ),
  },
}

export const IconOnly: Story = {
  args: {
    variant: 'outline',
    children: <Lock className='h-3 w-3' />,
  },
}

// Notable App Examples
export const NotableTags: Story = {
  render: () => (
    <div className='flex flex-wrap gap-2 p-4'>
      <Badge variant='secondary'>productivity</Badge>
      <Badge variant='secondary'>meeting-notes</Badge>
      <Badge variant='secondary'>ideas</Badge>
      <Badge variant='secondary'>project-planning</Badge>
      <Badge variant='secondary'>research</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Note tags as used throughout Notable for organization',
      },
    },
  },
}

export const StatusIndicators: Story = {
  render: () => (
    <div className='space-y-4 p-4'>
      <div className='flex items-center gap-2'>
        <span className='text-sm'>Note Status:</span>
        <Badge variant='secondary'>
          <Clock className='mr-1 h-3 w-3' />
          Draft
        </Badge>
      </div>

      <div className='flex items-center gap-2'>
        <span className='text-sm'>Sync Status:</span>
        <Badge>
          <CheckCircle className='mr-1 h-3 w-3' />
          Synced
        </Badge>
      </div>

      <div className='flex items-center gap-2'>
        <span className='text-sm'>Warning:</span>
        <Badge variant='destructive'>
          <AlertTriangle className='mr-1 h-3 w-3' />
          Conflict
        </Badge>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Status indicators used throughout Notable for various states',
      },
    },
  },
}

export const PremiumFeatures: Story = {
  render: () => (
    <div className='space-y-3 p-4'>
      <div className='flex items-center gap-2'>
        <span className='text-sm'>AI Assistant</span>
        <Badge className='bg-gradient-to-r from-purple-500 to-pink-500'>
          <Zap className='mr-1 h-3 w-3' />
          Premium
        </Badge>
      </div>

      <div className='flex items-center gap-2'>
        <span className='text-sm'>Advanced Search</span>
        <Badge className='bg-gradient-to-r from-blue-500 to-cyan-500'>
          <Star className='mr-1 h-3 w-3' />
          Pro
        </Badge>
      </div>

      <div className='flex items-center gap-2'>
        <span className='text-sm'>Unlimited Notes</span>
        <Badge className='bg-gradient-to-r from-green-500 to-emerald-500'>
          <CheckCircle className='mr-1 h-3 w-3' />
          Premium
        </Badge>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Premium feature badges with gradient backgrounds',
      },
    },
  },
}

export const NoteCategories: Story = {
  render: () => (
    <div className='space-y-3 p-4'>
      <div className='flex flex-wrap gap-2'>
        <span className='text-sm font-medium'>Work:</span>
        <Badge variant='secondary' className='border-blue-300 text-blue-700'>
          meetings
        </Badge>
        <Badge variant='secondary' className='border-blue-300 text-blue-700'>
          projects
        </Badge>
        <Badge variant='secondary' className='border-blue-300 text-blue-700'>
          deadlines
        </Badge>
      </div>

      <div className='flex flex-wrap gap-2'>
        <span className='text-sm font-medium'>Personal:</span>
        <Badge variant='secondary' className='border-green-300 text-green-700'>
          health
        </Badge>
        <Badge variant='secondary' className='border-green-300 text-green-700'>
          travel
        </Badge>
        <Badge variant='secondary' className='border-green-300 text-green-700'>
          hobbies
        </Badge>
      </div>

      <div className='flex flex-wrap gap-2'>
        <span className='text-sm font-medium'>Learning:</span>
        <Badge
          variant='secondary'
          className='border-purple-300 text-purple-700'
        >
          tutorial
        </Badge>
        <Badge
          variant='secondary'
          className='border-purple-300 text-purple-700'
        >
          course
        </Badge>
        <Badge
          variant='secondary'
          className='border-purple-300 text-purple-700'
        >
          reference
        </Badge>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Categorized badges with custom colors for different note types',
      },
    },
  },
}

// Size Variations
export const Sizes: Story = {
  render: () => (
    <div className='flex items-center gap-4 p-4'>
      <Badge className='text-xs px-1.5 py-0.5'>Small</Badge>
      <Badge>Default</Badge>
      <Badge className='text-sm px-3 py-1'>Large</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different badge sizes for various use cases',
      },
    },
  },
}

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div className='grid grid-cols-2 gap-4 p-4'>
      {['default', 'secondary', 'destructive', 'outline'].map((variant) => (
        <Badge key={variant} variant={variant as any}>
          {variant.charAt(0).toUpperCase() + variant.slice(1)}
        </Badge>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available badge variants side by side for comparison',
      },
    },
  },
}

// Interactive Example
export const InteractiveTags: Story = {
  render: () => {
    const tags = ['typescript', 'react', 'storybook', 'design-system']

    return (
      <div className='space-y-4 p-4'>
        <div className='flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant='secondary'
              className='cursor-pointer hover:bg-gray-200 transition-colors'
            >
              {tag}
              <button className='ml-1 hover:text-red-500'>×</button>
            </Badge>
          ))}
        </div>
        <Badge
          variant='secondary'
          className='cursor-pointer hover:bg-gray-50 border-dashed'
        >
          + Add tag
        </Badge>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive tag badges with hover states and actions',
      },
    },
  },
}
