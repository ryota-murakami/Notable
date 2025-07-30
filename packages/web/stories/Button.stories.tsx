import type { Meta, StoryObj } from '@storybook/nextjs'
import { Button } from '../design-system/components/button'
import { Download, Heart, Plus, Settings, Star, Trash2 } from 'lucide-react'

const meta: Meta<typeof Button> = {
  title: 'Notable Design System/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The primary button component for Notable. Supports multiple variants, sizes, and states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
      description: 'Visual style variant of the button',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'Size variant of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    asChild: {
      control: 'boolean',
      description: 'Change the rendered element for advanced use cases',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Primary Stories
export const Default: Story = {
  args: {
    children: 'Create Note',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Delete Note',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Cancel',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Save Draft',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'More Options',
  },
}

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'View Details',
  },
}

// Size Variants
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
}

export const IconOnly: Story = {
  args: {
    size: 'icon',
    children: <Plus className='h-4 w-4' />,
  },
}

// With Icons
export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Download className='mr-2 h-4 w-4' />
        Export Note
      </>
    ),
  },
}

export const IconTrailing: Story = {
  args: {
    variant: 'outline',
    children: (
      <>
        Settings
        <Settings className='ml-2 h-4 w-4' />
      </>
    ),
  },
}

// States
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
}

export const Loading: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <div className='mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent' />
        Creating...
      </>
    ),
  },
}

// Notable App Examples
export const NotableExamples: Story = {
  render: () => (
    <div className='flex flex-col gap-4 p-4'>
      <div className='flex gap-2'>
        <Button>
          <Plus className='mr-2 h-4 w-4' />
          New Note
        </Button>
        <Button variant='outline'>
          <Settings className='mr-2 h-4 w-4' />
          Settings
        </Button>
        <Button variant='ghost' size='icon'>
          <Heart className='h-4 w-4' />
        </Button>
      </div>

      <div className='flex gap-2'>
        <Button variant='secondary'>
          <Star className='mr-2 h-4 w-4' />
          Favorite
        </Button>
        <Button variant='destructive'>
          <Trash2 className='mr-2 h-4 w-4' />
          Delete
        </Button>
      </div>

      <div className='flex gap-2'>
        <Button size='sm'>Small Action</Button>
        <Button size='lg'>Large Primary</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Examples of how buttons are used throughout the Notable application.',
      },
    },
  },
}

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div className='grid grid-cols-3 gap-4 p-4'>
      {['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'].map(
        (variant) => (
          <Button key={variant} variant={variant as any}>
            {variant.charAt(0).toUpperCase() + variant.slice(1)}
          </Button>
        )
      )}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available button variants side by side for comparison.',
      },
    },
  },
}
