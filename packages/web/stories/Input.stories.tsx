import type { Meta, StoryObj } from '@storybook/nextjs'
import { Input } from '../design-system/components/input'
import { Eye, EyeOff, Lock, Search, User } from 'lucide-react'
import { useState } from 'react'

const meta: Meta<typeof Input> = {
  title: 'Notable Design System/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Form input component with support for various types, states, and icons. Essential for user input throughout Notable.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'search', 'url', 'number'],
      description: 'HTML input type',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the input is required',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Basic Input Stories
export const Default: Story = {
  args: {
    placeholder: 'Enter your note title...',
  },
}

export const WithValue: Story = {
  args: {
    defaultValue: 'My Amazing Note',
    placeholder: 'Note title',
  },
}

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter your email address',
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter your password',
  },
}

export const SearchInput: Story = {
  args: {
    type: 'search',
    placeholder: 'Search your notes...',
  },
}

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: 'Enter a number',
  },
}

// States
export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'This input is disabled',
    defaultValue: 'Cannot edit this',
  },
}

export const Required: Story = {
  args: {
    required: true,
    placeholder: 'This field is required *',
  },
}

export const WithError: Story = {
  args: {
    placeholder: 'Enter valid email',
    defaultValue: 'invalid-email',
    className: 'border-red-500 focus:border-red-500 focus:ring-red-500',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input with error state styling (red border)',
      },
    },
  },
}

// Notable App Examples
export const NotableSearchBar: Story = {
  render: () => (
    <div className='w-96 relative'>
      <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4' />
      <Input
        type='search'
        placeholder='Search notes, tags, and content...'
        className='pl-10'
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Search bar as used in Notable with search icon',
      },
    },
  },
}

export const LoginForm: Story = {
  render: () => (
    <div className='w-80 space-y-4'>
      <div className='relative'>
        <User className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4' />
        <Input type='email' placeholder='Email address' className='pl-10' />
      </div>
      <div className='relative'>
        <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4' />
        <Input type='password' placeholder='Password' className='pl-10' />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Login form inputs with icons as used in Notable authentication',
      },
    },
  },
}

export const PasswordToggle: Story = {
  render: () => {
    const [showPassword, setShowPassword] = useState(false)

    return (
      <div className='w-80 relative'>
        <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4' />
        <Input
          type={showPassword ? 'text' : 'password'}
          placeholder='Enter your password'
          className='pl-10 pr-10'
          defaultValue='mypassword123'
        />
        <button
          type='button'
          onClick={() => setShowPassword(!showPassword)}
          className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600'
        >
          {showPassword ? (
            <EyeOff className='h-4 w-4' />
          ) : (
            <Eye className='h-4 w-4' />
          )}
        </button>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Password input with toggle visibility functionality',
      },
    },
  },
}

export const NoteTitle: Story = {
  args: {
    placeholder: 'Untitled Note',
    className: 'text-2xl font-bold border-none bg-transparent p-0 focus:ring-0',
    defaultValue: 'My Important Note',
  },
  parameters: {
    docs: {
      description: {
        story: 'Note title input styling as used in the Notable editor',
      },
    },
  },
}

export const TagInput: Story = {
  render: () => (
    <div className='w-96'>
      <Input placeholder='Add tags (press Enter)' className='border-dashed' />
      <div className='mt-2 flex flex-wrap gap-1'>
        <span className='px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full'>
          productivity
        </span>
        <span className='px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full'>
          ideas
        </span>
        <span className='px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full'>
          project
        </span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tag input as used in Notable for organizing notes',
      },
    },
  },
}

// Size Variations
export const Sizes: Story = {
  render: () => (
    <div className='space-y-4 w-96'>
      <Input placeholder='Small input' className='h-8 text-sm' />
      <Input placeholder='Default input' />
      <Input placeholder='Large input' className='h-12 text-lg' />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different input sizes for various use cases',
      },
    },
  },
}
