import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './badge'

const meta = {
  title: 'Design System/Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'default',
        'secondary',
        'destructive',
        'outline',
        'success',
        'warning',
        'info',
      ],
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Badge',
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

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'Info',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '0.5rem',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}
    >
      <Badge>Default</Badge>
      <Badge variant='secondary'>Secondary</Badge>
      <Badge variant='destructive'>Destructive</Badge>
      <Badge variant='outline'>Outline</Badge>
      <Badge variant='success'>Success</Badge>
      <Badge variant='warning'>Warning</Badge>
      <Badge variant='info'>Info</Badge>
    </div>
  ),
}

export const StatusBadges: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '0.5rem',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}
    >
      <Badge variant='success'>Active</Badge>
      <Badge variant='warning'>Pending</Badge>
      <Badge variant='destructive'>Failed</Badge>
      <Badge variant='info'>Draft</Badge>
      <Badge variant='secondary'>Archived</Badge>
    </div>
  ),
}

export const CountBadges: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
      <Badge>3</Badge>
      <Badge variant='secondary'>12</Badge>
      <Badge variant='destructive'>99+</Badge>
      <Badge variant='info'>NEW</Badge>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '0.5rem',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}
    >
      <Badge>
        <span style={{ marginRight: '0.25rem' }}>🔥</span>
        Hot
      </Badge>
      <Badge variant='success'>
        <span style={{ marginRight: '0.25rem' }}>✓</span>
        Verified
      </Badge>
      <Badge variant='warning'>
        <span style={{ marginRight: '0.25rem' }}>⚠️</span>
        Attention
      </Badge>
      <Badge variant='info'>
        <span style={{ marginRight: '0.25rem' }}>ℹ️</span>
        Info
      </Badge>
    </div>
  ),
}

export const TagBadges: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Badge variant='outline'>React</Badge>
      <Badge variant='outline'>TypeScript</Badge>
      <Badge variant='outline'>Next.js</Badge>
      <Badge variant='outline'>Tailwind CSS</Badge>
      <Badge variant='outline'>Plate.js</Badge>
    </div>
  ),
}

export const FeatureBadges: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Badge variant='info'>Beta</Badge>
      <Badge variant='success'>Pro</Badge>
      <Badge variant='warning'>Experimental</Badge>
      <Badge variant='destructive'>Deprecated</Badge>
      <Badge>Free</Badge>
    </div>
  ),
}
