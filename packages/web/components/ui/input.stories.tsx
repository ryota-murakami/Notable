import type { Meta, StoryObj } from '@storybook/nextjs'
import { Input } from './input'
import { expect, userEvent, within } from '@storybook/test'
import { Label } from './label'
import { Calendar, Lock, Mail, Search, User } from 'lucide-react'

const meta: Meta<typeof Input> = {
  title: 'Components/UI/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A flexible input component that supports all standard HTML input types with consistent styling and focus states.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: [
        'text',
        'email',
        'password',
        'number',
        'date',
        'time',
        'search',
        'tel',
        'url',
      ],
      description: 'Input type',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text...',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByPlaceholderText('Enter text...')

    await expect(input).toBeInTheDocument()
    await userEvent.type(input, 'Hello Storybook')
    await expect(input).toHaveValue('Hello Storybook')
  },
}

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'name@example.com',
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
  },
}

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: '0',
    min: 0,
    max: 100,
  },
}

export const Date: Story = {
  args: {
    type: 'date',
  },
}

export const SearchInput: Story = {
  args: {
    type: 'search',
    placeholder: 'Search...',
  },
}

export const Disabled: Story = {
  args: {
    type: 'text',
    placeholder: 'Disabled input',
    disabled: true,
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className='space-y-2'>
      <Label htmlFor='email'>Email Address</Label>
      <Input id='email' type='email' placeholder='name@example.com' />
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='relative'>
        <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
        <Input type='search' placeholder='Search...' className='pl-10' />
      </div>

      <div className='relative'>
        <Mail className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
        <Input type='email' placeholder='Email' className='pl-10' />
      </div>

      <div className='relative'>
        <Lock className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
        <Input type='password' placeholder='Password' className='pl-10' />
      </div>
    </div>
  ),
}

export const FormExample: Story = {
  render: () => (
    <form className='space-y-4 max-w-md'>
      <div className='space-y-2'>
        <Label htmlFor='name'>Full Name</Label>
        <div className='relative'>
          <User className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
          <Input id='name' placeholder='John Doe' className='pl-10' />
        </div>
      </div>

      <div className='space-y-2'>
        <Label htmlFor='email'>Email</Label>
        <div className='relative'>
          <Mail className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
          <Input
            id='email'
            type='email'
            placeholder='john@example.com'
            className='pl-10'
          />
        </div>
      </div>

      <div className='space-y-2'>
        <Label htmlFor='dob'>Date of Birth</Label>
        <div className='relative'>
          <Calendar className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
          <Input id='dob' type='date' className='pl-10' />
        </div>
      </div>
    </form>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className='space-y-4'>
      <Input placeholder='Default size (h-10)' />
      <Input placeholder='Small size' className='h-8 text-sm' />
      <Input placeholder='Large size' className='h-12 text-lg' />
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <Label>Normal</Label>
        <Input placeholder='Normal input' />
      </div>

      <div>
        <Label>Focused (click to see)</Label>
        <Input placeholder='This input will show focus state' />
      </div>

      <div>
        <Label>Disabled</Label>
        <Input placeholder='Disabled input' disabled />
      </div>

      <div>
        <Label>Read Only</Label>
        <Input value='Read only value' readOnly />
      </div>

      <div>
        <Label>With Error</Label>
        <Input
          placeholder='Error state'
          className='border-destructive focus-visible:ring-destructive'
        />
        <p className='text-sm text-destructive mt-1'>This field is required</p>
      </div>
    </div>
  ),
}

export const FileInput: Story = {
  args: {
    type: 'file',
    accept: 'image/*',
  },
}
