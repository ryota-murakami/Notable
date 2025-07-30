import type { Meta, StoryObj } from '@storybook/nextjs'
import { fn } from '@storybook/test'
import React from 'react'
import { Input, SearchInput, PasswordInput } from './input'
import {
  Mail,
  User,
  Phone,
  Calendar,
  DollarSign,
  Search,
  Lock,
  Eye,
  EyeOff,
  Globe,
  MapPin,
  Hash,
  AtSign,
  MessageSquare,
} from 'lucide-react'

const meta = {
  title: 'Design System/Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The Input component is a highly versatile and feature-rich input field built with Framer Motion that supports multiple variants, validation, suggestions, and specialized input types.

## Features
- **Multiple Variants**: default, filled, flushed, outlined
- **Size Options**: sm, md, lg
- **States**: error, warning, success, loading, disabled
- **Validation**: Built-in validation rules (required, email, URL, number, length, pattern, custom)
- **Icons**: Left or right positioned icons
- **Labels**: Standard and floating labels
- **Interactive Features**: 
  - Clearable inputs
  - Auto-suggestions with keyboard navigation
  - Character count indicator
  - Debounced change handler
  - Real-time validation feedback

## Specialized Components
- **SearchInput**: Pre-configured search input with search icon
- **PasswordInput**: Password input with show/hide toggle

## Validation Rules
- **required**: Field must have a value
- **email**: Must be valid email format
- **url**: Must be valid URL format
- **number**: Must be numeric
- **minLength/maxLength**: Length validation
- **pattern**: Custom regex pattern
- **custom**: Custom validation function
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'filled', 'flushed', 'outlined'],
      description: 'Visual style variant of the input',
    },
    inputSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input field',
      name: 'size',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    warning: {
      control: 'text',
      description: 'Warning message to display',
    },
    success: {
      control: 'boolean',
      description: 'Show success state',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading spinner',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the input',
    },
    label: {
      control: 'text',
      description: 'Input label text',
    },
    helper: {
      control: 'text',
      description: 'Helper text below input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    floating: {
      control: 'boolean',
      description: 'Use floating label animation',
    },
    clearable: {
      control: 'boolean',
      description: 'Show clear button when input has value',
    },
    showCharacterCount: {
      control: 'boolean',
      description: 'Show character count indicator',
    },
    maxLength: {
      control: 'number',
      description: 'Maximum character length',
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Position of the icon',
    },
  },
  args: {
    onChange: fn(),
    onFocus: fn(),
    onBlur: fn(),
    onClear: fn(),
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

// Basic inputs
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    label: 'Default Input',
  },
}

// Variants showcase
export const Variants: Story = {
  render: () => (
    <div className='space-y-6 w-80'>
      <Input
        variant='default'
        label='Default'
        placeholder='Default input style'
      />
      <Input variant='filled' label='Filled' placeholder='Filled input style' />
      <Input
        variant='flushed'
        label='Flushed'
        placeholder='Flushed input style'
      />
      <Input
        variant='outlined'
        label='Outlined'
        placeholder='Outlined input style'
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available input variants with different visual styles.',
      },
    },
  },
}

// Sizes showcase
export const Sizes: Story = {
  render: () => (
    <div className='space-y-4 w-80'>
      <Input inputSize='sm' label='Small' placeholder='Small input' />
      <Input
        inputSize='md'
        label='Medium'
        placeholder='Medium input (default)'
      />
      <Input inputSize='lg' label='Large' placeholder='Large input' />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Input sizes from small to large.',
      },
    },
  },
}

// States showcase
export const States: Story = {
  render: () => (
    <div className='space-y-6 w-80'>
      <Input
        label='Normal State'
        placeholder='Normal input'
        value='Normal value'
      />
      <Input
        label='Success State'
        placeholder='Success input'
        value='Valid input'
        success
        helper='Input is valid'
      />
      <Input
        label='Warning State'
        placeholder='Warning input'
        value='Check this'
        warning='Please verify this input'
      />
      <Input
        label='Error State'
        placeholder='Error input'
        value='Invalid input'
        error='This field is required'
      />
      <Input
        label='Loading State'
        placeholder='Loading...'
        value='Processing'
        loading
      />
      <Input
        label='Disabled State'
        placeholder='Disabled input'
        value='Cannot edit'
        disabled
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Different input states including success, warning, error, loading, and disabled.',
      },
    },
  },
}

// With icons
export const WithIcons: Story = {
  render: () => (
    <div className='space-y-6 w-80'>
      <Input
        label='Email'
        placeholder='Enter your email'
        icon={<Mail size={20} />}
        iconPosition='left'
        type='email'
      />
      <Input
        label='Username'
        placeholder='Enter username'
        icon={<User size={20} />}
        iconPosition='left'
      />
      <Input
        label='Phone'
        placeholder='Enter phone number'
        icon={<Phone size={20} />}
        iconPosition='left'
        type='tel'
      />
      <Input
        label='Amount'
        placeholder='0.00'
        icon={<DollarSign size={20} />}
        iconPosition='right'
        type='number'
      />
      <Input
        label='Website'
        placeholder='https://example.com'
        icon={<Globe size={20} />}
        iconPosition='left'
        type='url'
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Inputs with icons positioned on the left or right side.',
      },
    },
  },
}

// Floating labels
export const FloatingLabels: Story = {
  render: () => (
    <div className='space-y-6 w-80'>
      <Input label='First Name' floating placeholder='John' />
      <Input
        label='Email Address'
        floating
        icon={<Mail size={20} />}
        iconPosition='left'
        type='email'
      />
      <Input
        label='Phone Number'
        floating
        icon={<Phone size={20} />}
        iconPosition='left'
        type='tel'
      />
      <Input
        label='Location'
        floating
        icon={<MapPin size={20} />}
        iconPosition='left'
        variant='filled'
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Inputs with animated floating labels that move when focused or have values.',
      },
    },
  },
}

// Clearable inputs
export const ClearableInputs: Story = {
  render: () => {
    const [values, setValues] = React.useState({
      search: 'Clear me',
      email: 'user@example.com',
      phone: '+1234567890',
    })

    return (
      <div className='space-y-6 w-80'>
        <Input
          label='Search'
          value={values.search}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, search: e.target.value }))
          }
          clearable
          onClear={() => setValues((prev) => ({ ...prev, search: '' }))}
          icon={<Search size={20} />}
          iconPosition='left'
        />
        <Input
          label='Email'
          value={values.email}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, email: e.target.value }))
          }
          clearable
          onClear={() => setValues((prev) => ({ ...prev, email: '' }))}
          icon={<Mail size={20} />}
          iconPosition='left'
          type='email'
        />
        <Input
          label='Phone'
          value={values.phone}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, phone: e.target.value }))
          }
          clearable
          onClear={() => setValues((prev) => ({ ...prev, phone: '' }))}
          icon={<Phone size={20} />}
          iconPosition='left'
          type='tel'
        />
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Inputs with clear buttons that appear when the input has a value.',
      },
    },
  },
}

// Character count
export const CharacterCount: Story = {
  render: () => {
    const [message, setMessage] = React.useState('Type your message here...')
    const [title, setTitle] = React.useState('Short title')

    return (
      <div className='space-y-6 w-80'>
        <Input
          label='Tweet'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={280}
          showCharacterCount
          helper='Share your thoughts'
          icon={<MessageSquare size={20} />}
          iconPosition='left'
        />
        <Input
          label='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={50}
          showCharacterCount
          variant='filled'
        />
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Inputs with character count indicators that change color as the limit approaches.',
      },
    },
  },
}

// Validation
export const Validation: Story = {
  render: () => (
    <div className='space-y-6 w-80'>
      <Input
        label='Required Field'
        placeholder='This field is required'
        validation={[{ type: 'required', message: 'This field is required' }]}
      />
      <Input
        label='Email Validation'
        placeholder='Enter valid email'
        type='email'
        icon={<Mail size={20} />}
        iconPosition='left'
        validation={[
          { type: 'required', message: 'Email is required' },
          { type: 'email', message: 'Please enter a valid email' },
        ]}
      />
      <Input
        label='Password'
        placeholder='Minimum 8 characters'
        type='password'
        validation={[
          { type: 'required', message: 'Password is required' },
          {
            type: 'minLength',
            value: 8,
            message: 'Password must be at least 8 characters',
          },
        ]}
      />
      <Input
        label='Website URL'
        placeholder='https://example.com'
        type='url'
        icon={<Globe size={20} />}
        iconPosition='left'
        validation={[{ type: 'url', message: 'Please enter a valid URL' }]}
      />
      <Input
        label='Custom Validation'
        placeholder='Only numbers allowed'
        validation={[
          {
            type: 'custom',
            message: 'Only numbers are allowed',
            validator: (value) => /^\d*$/.test(value),
          },
        ]}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Inputs with different validation rules that provide real-time feedback.',
      },
    },
  },
}

// Auto-suggestions
export const AutoSuggestions: Story = {
  render: () => {
    const countries = [
      'United States',
      'Canada',
      'United Kingdom',
      'Germany',
      'France',
      'Italy',
      'Spain',
      'Japan',
      'Australia',
      'Brazil',
      'India',
      'China',
    ]

    const cities = [
      'New York',
      'London',
      'Paris',
      'Tokyo',
      'Sydney',
      'Toronto',
      'Berlin',
      'Rome',
      'Madrid',
      'Mumbai',
      'Shanghai',
      'São Paulo',
    ]

    return (
      <div className='space-y-6 w-80'>
        <Input
          label='Country'
          placeholder='Type to search countries'
          suggestions={countries}
          onSuggestionSelect={(value) =>
            console.log('Selected country:', value)
          }
          icon={<Globe size={20} />}
          iconPosition='left'
        />
        <Input
          label='City'
          placeholder='Type to search cities'
          suggestions={cities}
          onSuggestionSelect={(value) => console.log('Selected city:', value)}
          icon={<MapPin size={20} />}
          iconPosition='left'
          variant='filled'
        />
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Inputs with auto-suggestion dropdowns. Type to filter suggestions and use arrow keys to navigate.',
      },
    },
  },
}

// Specialized components
export const SpecializedComponents: Story = {
  render: () => (
    <div className='space-y-6 w-80'>
      <SearchInput
        label='Search Input'
        onSearch={(value) => console.log('Search:', value)}
      />
      <PasswordInput label='Password Input' placeholder='Enter your password' />
      <PasswordInput
        label='Confirm Password'
        placeholder='Confirm your password'
        variant='filled'
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Specialized input components: SearchInput with search icon and PasswordInput with visibility toggle.',
      },
    },
  },
}

// Form example
export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = React.useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      website: '',
      bio: '',
    })

    const updateField =
      (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, [field]: e.target.value }))
      }

    return (
      <div className='space-y-6 w-96 p-6 border rounded-lg'>
        <h3 className='text-lg font-semibold mb-4'>User Profile Form</h3>

        <div className='grid grid-cols-2 gap-4'>
          <Input
            label='First Name'
            value={formData.firstName}
            onChange={updateField('firstName')}
            floating
            validation={[
              { type: 'required', message: 'First name is required' },
            ]}
          />
          <Input
            label='Last Name'
            value={formData.lastName}
            onChange={updateField('lastName')}
            floating
            validation={[
              { type: 'required', message: 'Last name is required' },
            ]}
          />
        </div>

        <Input
          label='Email Address'
          value={formData.email}
          onChange={updateField('email')}
          type='email'
          icon={<Mail size={20} />}
          iconPosition='left'
          floating
          validation={[
            { type: 'required', message: 'Email is required' },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
        />

        <Input
          label='Phone Number'
          value={formData.phone}
          onChange={updateField('phone')}
          type='tel'
          icon={<Phone size={20} />}
          iconPosition='left'
          floating
          helper='Include country code'
        />

        <Input
          label='Website'
          value={formData.website}
          onChange={updateField('website')}
          type='url'
          icon={<Globe size={20} />}
          iconPosition='left'
          floating
          validation={[{ type: 'url', message: 'Please enter a valid URL' }]}
        />

        <Input
          label='Bio'
          value={formData.bio}
          onChange={updateField('bio')}
          maxLength={160}
          showCharacterCount
          floating
          helper='Tell us about yourself'
        />
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'A complete form example showcasing various input features working together.',
      },
    },
  },
}

// Interactive playground
export const Interactive: Story = {
  args: {
    variant: 'default',
    inputSize: 'md',
    label: 'Interactive Input',
    placeholder: 'Type something...',
    helper: 'This is a helper text',
    floating: false,
    clearable: false,
    loading: false,
    disabled: false,
    success: false,
    showCharacterCount: false,
    maxLength: 100,
    iconPosition: 'left',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Interactive playground to test all input properties. Use the controls to experiment with different configurations.',
      },
    },
  },
}
