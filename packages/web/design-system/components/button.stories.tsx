import type { Meta, StoryObj } from '@storybook/nextjs'
import { fn, expect, userEvent, within } from '@storybook/test'
import { Button } from './button'
import {
  Heart,
  Download,
  ArrowRight,
  Plus,
  Trash2,
  Settings,
  Save,
  Search,
} from 'lucide-react'

const meta = {
  title: 'Design System/Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The Button component is a versatile, animated button built with Framer Motion that supports multiple variants, sizes, loading states, icons, and ripple effects.

## Features
- **Multiple Variants**: default, primary, secondary, destructive, ghost, link, gradient
- **Flexible Sizing**: xs, sm, md, lg, xl
- **Loading States**: Built-in spinner with smooth animations
- **Icon Support**: Left or right positioned icons
- **Ripple Effect**: Interactive click feedback
- **Motion Animations**: Hover and tap animations
- **Accessibility**: Focus management and keyboard navigation
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'primary',
        'secondary',
        'destructive',
        'ghost',
        'link',
        'gradient',
      ],
      description: 'Visual style variant of the button',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the button',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading spinner',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Make button full width',
    },
    ripple: {
      control: 'boolean',
      description: 'Enable ripple effect on click',
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Position of the icon',
    },
    children: {
      control: 'text',
      description: 'Button text content',
    },
  },
  args: {
    onClick: fn(),
    children: 'Button',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
  args: {
    children: 'Default Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'Default Button' })

    // Test button is rendered and accessible
    await expect(button).toBeInTheDocument()
    await expect(button).toBeEnabled()

    // Test button click
    await userEvent.click(button)
    await expect(button).toHaveFocus()
  },
}

// Variant showcase
export const Variants: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <Button variant='default'>Default</Button>
      <Button variant='primary'>Primary</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='destructive'>Destructive</Button>
      <Button variant='ghost'>Ghost</Button>
      <Button variant='link'>Link</Button>
      <Button variant='gradient'>Gradient</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available button variants showcased together.',
      },
    },
  },
}

// Size showcase
export const Sizes: Story = {
  render: () => (
    <div className='flex flex-wrap items-center gap-4'>
      <Button size='xs'>Extra Small</Button>
      <Button size='sm'>Small</Button>
      <Button size='md'>Medium</Button>
      <Button size='lg'>Large</Button>
      <Button size='xl'>Extra Large</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available button sizes from extra small to extra large.',
      },
    },
  },
}

// With icons
export const WithIcons: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <Button icon={<Plus size={16} />} iconPosition='left'>
        Add Item
      </Button>
      <Button
        icon={<ArrowRight size={16} />}
        iconPosition='right'
        variant='primary'
      >
        Continue
      </Button>
      <Button
        icon={<Download size={16} />}
        iconPosition='left'
        variant='secondary'
      >
        Download
      </Button>
      <Button
        icon={<Trash2 size={16} />}
        iconPosition='left'
        variant='destructive'
      >
        Delete
      </Button>
      <Button icon={<Heart size={16} />} variant='ghost'>
        Like
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons with icons in different positions and variants.',
      },
    },
  },
}

// Icon only buttons
export const IconOnly: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <Button
        icon={<Settings size={16} />}
        variant='ghost'
        aria-label='Settings'
      />
      <Button
        icon={<Search size={16} />}
        variant='default'
        aria-label='Search'
      />
      <Button icon={<Save size={16} />} variant='primary' aria-label='Save' />
      <Button
        icon={<Trash2 size={16} />}
        variant='destructive'
        aria-label='Delete'
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Icon-only buttons for compact interfaces. Remember to include aria-label for accessibility.',
      },
    },
  },
}

// Loading states
export const LoadingStates: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <Button loading>Loading</Button>
      <Button loading variant='primary'>
        Saving...
      </Button>
      <Button loading variant='secondary' icon={<Download size={16} />}>
        Downloading...
      </Button>
      <Button loading variant='destructive'>
        Deleting...
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons in loading state with spinner animations.',
      },
    },
  },
}

// Disabled states
export const DisabledStates: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <Button disabled>Disabled</Button>
      <Button disabled variant='primary'>
        Disabled Primary
      </Button>
      <Button disabled variant='destructive'>
        Disabled Destructive
      </Button>
      <Button disabled variant='ghost'>
        Disabled Ghost
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Disabled button states across different variants.',
      },
    },
  },
}

// Full width
export const FullWidth: Story = {
  render: () => (
    <div className='w-80 space-y-4'>
      <Button fullWidth>Full Width Default</Button>
      <Button fullWidth variant='primary'>
        Full Width Primary
      </Button>
      <Button
        fullWidth
        variant='gradient'
        icon={<ArrowRight size={16} />}
        iconPosition='right'
      >
        Get Started
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Full width buttons that span the entire container width.',
      },
    },
  },
}

// Interactive playground
export const Interactive: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Interactive Button',
    icon: <Heart size={16} />,
    iconPosition: 'left',
    loading: false,
    disabled: false,
    fullWidth: false,
    ripple: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Interactive playground to test all button properties. Use the controls below to experiment with different configurations.',
      },
    },
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'Interactive Button' })

    // Test button is rendered with correct variant
    await expect(button).toBeInTheDocument()
    await expect(button).toHaveClass('bg-primary')

    // Test interaction when not disabled
    if (!args.disabled) {
      await expect(button).toBeEnabled()

      // Test hover state
      await userEvent.hover(button)

      // Test click
      await userEvent.click(button)

      // Test keyboard interaction
      await userEvent.tab()
      await userEvent.keyboard('{Enter}')
    } else {
      await expect(button).toBeDisabled()
    }

    // Test icon presence if provided
    if (args.icon) {
      const icon = button.querySelector('svg')
      await expect(icon).toBeInTheDocument()
    }
  },
}

// Theme showcase (for different themes)
export const ThemeShowcase: Story = {
  render: () => (
    <div className='space-y-6'>
      <div>
        <h3 className='text-lg font-semibold mb-3'>Primary Actions</h3>
        <div className='flex flex-wrap gap-3'>
          <Button variant='primary'>Primary</Button>
          <Button variant='default'>Default</Button>
          <Button variant='gradient'>Gradient</Button>
        </div>
      </div>

      <div>
        <h3 className='text-lg font-semibold mb-3'>Secondary Actions</h3>
        <div className='flex flex-wrap gap-3'>
          <Button variant='secondary'>Secondary</Button>
          <Button variant='ghost'>Ghost</Button>
          <Button variant='link'>Link</Button>
        </div>
      </div>

      <div>
        <h3 className='text-lg font-semibold mb-3'>Destructive Actions</h3>
        <div className='flex flex-wrap gap-3'>
          <Button variant='destructive'>Delete</Button>
          <Button variant='destructive' variant='ghost'>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Button variants organized by use case. Switch themes using the toolbar to see how colors adapt.',
      },
    },
  },
}

// Accessibility demo
export const Accessibility: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <h3 className='text-lg font-semibold mb-3'>Keyboard Navigation</h3>
        <p className='text-sm text-muted-foreground mb-3'>
          Try tabbing through these buttons and pressing Enter or Space to
          activate them.
        </p>
        <div className='flex flex-wrap gap-3'>
          <Button>First Button</Button>
          <Button variant='primary'>Second Button</Button>
          <Button variant='secondary'>Third Button</Button>
        </div>
      </div>

      <div>
        <h3 className='text-lg font-semibold mb-3'>Screen Reader Support</h3>
        <p className='text-sm text-muted-foreground mb-3'>
          Icon-only buttons should include aria-label for screen readers.
        </p>
        <div className='flex flex-wrap gap-3'>
          <Button icon={<Settings size={16} />} aria-label='Open settings' />
          <Button icon={<Search size={16} />} aria-label='Search content' />
          <Button
            icon={<Trash2 size={16} />}
            aria-label='Delete item'
            variant='destructive'
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Accessibility features including keyboard navigation and screen reader support.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Test keyboard navigation buttons
    const firstButton = canvas.getByRole('button', { name: 'First Button' })
    const secondButton = canvas.getByRole('button', { name: 'Second Button' })
    const thirdButton = canvas.getByRole('button', { name: 'Third Button' })

    // Test all buttons are accessible
    await expect(firstButton).toBeInTheDocument()
    await expect(secondButton).toBeInTheDocument()
    await expect(thirdButton).toBeInTheDocument()

    // Test tab navigation
    firstButton.focus()
    await userEvent.keyboard('{Tab}')
    await expect(secondButton).toHaveFocus()

    await userEvent.keyboard('{Tab}')
    await expect(thirdButton).toHaveFocus()

    // Test keyboard activation
    await userEvent.keyboard('{Enter}')

    // Test icon-only buttons have proper aria-labels
    const settingsButton = canvas.getByRole('button', { name: 'Open settings' })
    const searchButton = canvas.getByRole('button', { name: 'Search content' })
    const deleteButton = canvas.getByRole('button', { name: 'Delete item' })

    await expect(settingsButton).toHaveAccessibleName('Open settings')
    await expect(searchButton).toHaveAccessibleName('Search content')
    await expect(deleteButton).toHaveAccessibleName('Delete item')

    // Test icon-only buttons have icons
    await expect(settingsButton.querySelector('svg')).toBeInTheDocument()
    await expect(searchButton.querySelector('svg')).toBeInTheDocument()
    await expect(deleteButton.querySelector('svg')).toBeInTheDocument()
  },
}
