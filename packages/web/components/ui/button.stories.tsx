import type { Meta, StoryObj } from '@storybook/nextjs'
import { Button } from './button'
import { expect, userEvent, within } from '@storybook/test'
import {
  ChevronRight,
  Download,
  Mail,
  Plus,
  Search,
  Settings,
  Upload,
  User,
} from 'lucide-react'

const meta: Meta<typeof Button> = {
  title: 'Components/UI/Button',
  component: Button,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A versatile button component with multiple variants, sizes, and states. Supports icons, async actions, and full keyboard accessibility.',
      },
    },
  },
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
      description: 'The visual style variant of the button',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'The size of the button',
    },
    asChild: {
      control: 'boolean',
      description: 'Whether to render as a child component',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')

    await expect(button).toBeVisible()
    await expect(button).toHaveTextContent('Button')
    await userEvent.click(button)
  },
}

export const Variants: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <Button variant='default'>Default</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='destructive'>Destructive</Button>
      <Button variant='outline'>Outline</Button>
      <Button variant='ghost'>Ghost</Button>
      <Button variant='link'>Link</Button>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <Button size='sm'>Small</Button>
      <Button size='default'>Default</Button>
      <Button size='lg'>Large</Button>
      <Button size='icon'>
        <Settings className='h-4 w-4' />
      </Button>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <Button>
        <Mail className='mr-2 h-4 w-4' />
        Login with Email
      </Button>
      <Button variant='secondary'>
        <Plus className='mr-2 h-4 w-4' />
        Add New
      </Button>
      <Button variant='outline'>
        <Download className='mr-2 h-4 w-4' />
        Download
      </Button>
      <Button>
        Upload
        <Upload className='ml-2 h-4 w-4' />
      </Button>
    </div>
  ),
}

export const Loading: Story = {
  render: () => {
    const [isLoading, setIsLoading] = React.useState(false)

    const handleClick = () => {
      setIsLoading(true)
      setTimeout(() => setIsLoading(false), 2000)
    }

    return (
      <div className='flex gap-4'>
        <Button onClick={handleClick} disabled={isLoading}>
          {isLoading && (
            <div className='mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent' />
          )}
          {isLoading ? 'Loading...' : 'Click to Load'}
        </Button>
        <Button variant='secondary' disabled={isLoading}>
          Secondary
        </Button>
      </div>
    )
  },
}

import * as React from 'react'

export const Disabled: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <Button disabled>Default Disabled</Button>
      <Button variant='secondary' disabled>
        Secondary Disabled
      </Button>
      <Button variant='destructive' disabled>
        Destructive Disabled
      </Button>
      <Button variant='outline' disabled>
        Outline Disabled
      </Button>
      <Button variant='ghost' disabled>
        Ghost Disabled
      </Button>
      <Button variant='link' disabled>
        Link Disabled
      </Button>
    </div>
  ),
}

export const AsChild: Story = {
  render: () => (
    <div className='flex gap-4'>
      <Button asChild>
        <a href='#'>Link as Button</a>
      </Button>
      <Button variant='outline' asChild>
        <span>Span as Button</span>
      </Button>
    </div>
  ),
}

export const ButtonGroup: Story = {
  render: () => (
    <div className='flex flex-col gap-4'>
      <div className='flex -space-x-px'>
        <Button variant='outline' className='rounded-r-none'>
          Previous
        </Button>
        <Button variant='outline' className='rounded-none border-l-0'>
          1
        </Button>
        <Button variant='outline' className='rounded-none border-l-0'>
          2
        </Button>
        <Button variant='outline' className='rounded-none border-l-0'>
          3
        </Button>
        <Button variant='outline' className='rounded-l-none border-l-0'>
          Next
        </Button>
      </div>
      <div className='flex gap-1'>
        <Button size='sm' variant='ghost'>
          Cut
        </Button>
        <Button size='sm' variant='ghost'>
          Copy
        </Button>
        <Button size='sm' variant='ghost'>
          Paste
        </Button>
      </div>
    </div>
  ),
}

export const IconButtons: Story = {
  render: () => (
    <div className='flex gap-2'>
      <Button size='icon' variant='default'>
        <Search className='h-4 w-4' />
      </Button>
      <Button size='icon' variant='secondary'>
        <User className='h-4 w-4' />
      </Button>
      <Button size='icon' variant='outline'>
        <Settings className='h-4 w-4' />
      </Button>
      <Button size='icon' variant='ghost'>
        <Plus className='h-4 w-4' />
      </Button>
    </div>
  ),
}

export const InteractionTest: Story = {
  args: {
    children: 'Interactive Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')

    // Test hover state
    await userEvent.hover(button)
    await expect(button).toHaveClass(/hover:/)

    // Test focus state
    await userEvent.tab()
    await expect(button).toHaveFocus()

    // Test keyboard interaction
    await userEvent.keyboard('{Enter}')

    // Test click
    await userEvent.click(button)
  },
}

export const ComplexExample: Story = {
  render: () => {
    const [count, setCount] = React.useState(0)

    return (
      <div className='space-y-8'>
        <div>
          <h3 className='mb-4 text-lg font-semibold'>Counter Example</h3>
          <div className='flex items-center gap-4'>
            <Button onClick={() => setCount(count - 1)} variant='outline'>
              Decrement
            </Button>
            <span className='min-w-[3rem] text-center text-lg'>{count}</span>
            <Button onClick={() => setCount(count + 1)}>Increment</Button>
            <Button onClick={() => setCount(0)} variant='ghost'>
              Reset
            </Button>
          </div>
        </div>

        <div>
          <h3 className='mb-4 text-lg font-semibold'>Form Actions</h3>
          <form
            className='flex gap-2'
            onSubmit={(e) => {
              e.preventDefault()
              alert('Form submitted!')
            }}
          >
            <Button type='submit'>Submit</Button>
            <Button type='button' variant='secondary'>
              Save Draft
            </Button>
            <Button type='reset' variant='outline'>
              Reset
            </Button>
            <Button type='button' variant='destructive'>
              Delete
            </Button>
          </form>
        </div>

        <div>
          <h3 className='mb-4 text-lg font-semibold'>Navigation</h3>
          <div className='flex gap-2'>
            <Button variant='link' asChild>
              <a href='#'>Documentation</a>
            </Button>
            <Button variant='link' asChild>
              <a href='#'>API Reference</a>
            </Button>
            <Button variant='link' asChild>
              <a href='#'>Examples</a>
            </Button>
          </div>
        </div>
      </div>
    )
  },
}

export const FullWidth: Story = {
  render: () => (
    <div className='w-full max-w-md space-y-2'>
      <Button className='w-full'>Full Width Button</Button>
      <Button variant='outline' className='w-full'>
        Full Width Outline
      </Button>
    </div>
  ),
}

export const CustomColors: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <Button className='bg-purple-600 hover:bg-purple-700'>Purple</Button>
      <Button className='bg-green-600 hover:bg-green-700'>Green</Button>
      <Button className='bg-orange-600 hover:bg-orange-700'>Orange</Button>
      <Button
        variant='outline'
        className='border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
      >
        Purple Outline
      </Button>
    </div>
  ),
}
