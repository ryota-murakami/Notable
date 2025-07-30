import type { Meta, StoryObj } from '@storybook/nextjs'
import * as React from 'react'
import { Button } from './button'
import { ChevronRight, Download, Heart, Search, Trash2 } from 'lucide-react'
import { expect, userEvent, within } from '@storybook/test'

const meta = {
  title: 'Design System/Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'default',
        'primary',
        'secondary',
        'destructive',
        'ghost',
        'link',
        'gradient',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    loading: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
    ripple: {
      control: { type: 'boolean' },
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'Button' })

    // Test button is visible and enabled
    await expect(button).toBeVisible()
    await expect(button).toBeEnabled()

    // Test click interaction
    await userEvent.click(button)

    // Test keyboard interaction
    await button.focus()
    await userEvent.keyboard('{space}')
  },
}

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'Primary Button' })

    // Test primary variant styling
    await expect(button).toHaveClass(/primary/)

    // Test hover state
    await userEvent.hover(button)

    // Test focus state
    await button.focus()
    await expect(button).toHaveFocus()
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Delete',
    icon: <Trash2 className='h-4 w-4' />,
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
}

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link Button',
  },
}

export const Gradient: Story = {
  args: {
    variant: 'gradient',
    children: 'Gradient Button',
  },
}

export const WithIcon: Story = {
  args: {
    variant: 'primary',
    children: 'Search',
    icon: <Search className='h-4 w-4' />,
  },
}

export const IconRight: Story = {
  args: {
    variant: 'primary',
    children: 'Next',
    icon: <ChevronRight className='h-4 w-4' />,
    iconPosition: 'right',
  },
}

export const IconOnly: Story = {
  args: {
    variant: 'primary',
    icon: <Heart className='h-4 w-4' />,
    size: 'md',
  },
}

export const Loading: Story = {
  args: {
    variant: 'primary',
    children: 'Loading',
    loading: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: /loading/i })

    // Test loading state
    await expect(button).toBeDisabled()
    await expect(button).toHaveAttribute('aria-busy', 'true')

    // Ensure spinner is present
    const spinner = canvas.getByRole('status')
    await expect(spinner).toBeInTheDocument()
  },
}

export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: 'Disabled',
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'Disabled' })

    // Test disabled state
    await expect(button).toBeDisabled()

    // Test that click doesn't work
    await userEvent.click(button)
    await expect(button).toBeDisabled()
  },
}

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    children: 'Full Width Button',
    fullWidth: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
}

export const Sizes: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button size='xs'>Extra Small</Button>
      <Button size='sm'>Small</Button>
      <Button size='md'>Medium</Button>
      <Button size='lg'>Large</Button>
      <Button size='xl'>Extra Large</Button>
    </div>
  ),
}

export const Variants: Story = {
  args: {},
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}
    >
      <Button variant='default'>Default</Button>
      <Button variant='primary'>Primary</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='destructive'>Destructive</Button>
      <Button variant='ghost'>Ghost</Button>
      <Button variant='link'>Link</Button>
      <Button variant='gradient'>Gradient</Button>
    </div>
  ),
}

export const WithRipple: Story = {
  args: {
    variant: 'primary',
    children: 'Click for Ripple Effect',
    ripple: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', {
      name: 'Click for Ripple Effect',
    })

    // Test multiple clicks for ripple effect
    await userEvent.click(button)
    await new Promise((resolve) => setTimeout(resolve, 100))

    await userEvent.click(button)
    await new Promise((resolve) => setTimeout(resolve, 100))

    await userEvent.click(button)
  },
}

export const NoRipple: Story = {
  args: {
    variant: 'primary',
    children: 'No Ripple Effect',
    ripple: false,
  },
}

export const ButtonGroup: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <Button variant='secondary' icon={<Download className='h-4 w-4' />}>
        Export
      </Button>
      <Button variant='primary' icon={<Heart className='h-4 w-4' />}>
        Save
      </Button>
      <Button variant='destructive' icon={<Trash2 className='h-4 w-4' />}>
        Delete
      </Button>
    </div>
  ),
}

export const LoadingStates: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button loading>Default Loading</Button>
      <Button variant='primary' loading>
        Primary Loading
      </Button>
      <Button variant='secondary' loading icon={<Search className='h-4 w-4' />}>
        With Icon
      </Button>
      <Button variant='gradient' loading size='lg'>
        Large Loading
      </Button>
    </div>
  ),
}
