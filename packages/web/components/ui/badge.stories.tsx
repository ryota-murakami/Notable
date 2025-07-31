import type { Meta, StoryObj } from '@storybook/nextjs'
import { Badge } from './badge'
import { expect, within } from '@storybook/test'
import { AlertTriangle, Check, Info, Star, X } from 'lucide-react'

const meta: Meta<typeof Badge> = {
  title: 'Components/UI/Badge',
  component: Badge,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A versatile badge component for displaying status, categories, or highlighting information with multiple variants including default, secondary, destructive, outline, success, warning, and info.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'secondary',
        'destructive',
        'outline',
        'success',
        'warning',
        'info',
      ],
      description: 'The visual variant of the badge',
    },
    children: {
      control: 'text',
      description: 'Badge content',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    children: 'Default',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByText('Default')).toBeInTheDocument()
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

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
}

export const InfoVariant: Story = {
  args: {
    variant: 'info',
    children: 'Info',
  },
}

export const WithIcon: Story = {
  render: () => (
    <div className='flex items-center gap-2'>
      <Badge>
        <Star className='h-3 w-3 mr-1' />
        Featured
      </Badge>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByText('Featured')).toBeInTheDocument()
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className='flex flex-wrap gap-2'>
      <Badge>Default</Badge>
      <Badge variant='secondary'>Secondary</Badge>
      <Badge variant='destructive'>Destructive</Badge>
      <Badge variant='outline'>Outline</Badge>
      <Badge variant='success'>Success</Badge>
      <Badge variant='warning'>Warning</Badge>
      <Badge variant='info'>Info</Badge>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByText('Default')).toBeInTheDocument()
    await expect(canvas.getByText('Secondary')).toBeInTheDocument()
    await expect(canvas.getByText('Destructive')).toBeInTheDocument()
    await expect(canvas.getByText('Outline')).toBeInTheDocument()
    await expect(canvas.getByText('Success')).toBeInTheDocument()
    await expect(canvas.getByText('Warning')).toBeInTheDocument()
    await expect(canvas.getByText('Info')).toBeInTheDocument()
  },
}

export const WithIcons: Story = {
  render: () => (
    <div className='flex flex-wrap gap-2'>
      <Badge variant='success'>
        <Check className='h-3 w-3 mr-1' />
        Completed
      </Badge>
      <Badge variant='destructive'>
        <X className='h-3 w-3 mr-1' />
        Failed
      </Badge>
      <Badge variant='warning'>
        <AlertTriangle className='h-3 w-3 mr-1' />
        Warning
      </Badge>
      <Badge variant='info'>
        <Info className='h-3 w-3 mr-1' />
        Information
      </Badge>
    </div>
  ),
}

export const Numbers: Story = {
  render: () => (
    <div className='flex flex-wrap gap-2'>
      <Badge>1</Badge>
      <Badge variant='secondary'>99+</Badge>
      <Badge variant='destructive'>5</Badge>
      <Badge variant='success'>0</Badge>
    </div>
  ),
}

export const Tags: Story = {
  render: () => (
    <div className='flex flex-wrap gap-2'>
      <Badge variant='outline'>TypeScript</Badge>
      <Badge variant='outline'>React</Badge>
      <Badge variant='outline'>Storybook</Badge>
      <Badge variant='outline'>Design System</Badge>
      <Badge variant='outline'>Components</Badge>
    </div>
  ),
}

export const StatusBadges: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <h3 className='text-sm font-medium mb-2'>Task Status</h3>
        <div className='flex flex-wrap gap-2'>
          <Badge variant='secondary'>Todo</Badge>
          <Badge variant='info'>In Progress</Badge>
          <Badge variant='success'>Completed</Badge>
          <Badge variant='destructive'>Blocked</Badge>
        </div>
      </div>

      <div>
        <h3 className='text-sm font-medium mb-2'>Priority Levels</h3>
        <div className='flex flex-wrap gap-2'>
          <Badge variant='destructive'>High</Badge>
          <Badge variant='warning'>Medium</Badge>
          <Badge variant='secondary'>Low</Badge>
        </div>
      </div>
    </div>
  ),
}

export const LongText: Story = {
  args: {
    children: 'This is a very long badge text that might wrap',
  },
}

export const CustomStyling: Story = {
  args: {
    variant: 'outline',
    className: 'text-purple-600 border-purple-300 hover:bg-purple-50',
    children: 'Custom Purple',
  },
}

export const Clickable: Story = {
  render: () => (
    <div className='flex flex-wrap gap-2'>
      <Badge
        variant='outline'
        className='cursor-pointer hover:bg-accent transition-colors'
        onClick={() => console.info('Badge clicked!')}
      >
        Clickable Badge
      </Badge>
      <Badge
        variant='secondary'
        className='cursor-pointer hover:bg-secondary/80 transition-colors'
        onClick={() => console.info('Another click!')}
      >
        Click Me Too
      </Badge>
    </div>
  ),
}
