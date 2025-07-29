import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Input, SearchInput, PasswordInput } from './input'
import { Mail, User, Phone, CreditCard, Calendar } from 'lucide-react'

const meta = {
  title: 'Design System/Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled', 'flushed', 'outlined'],
    },
    inputSize: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
    },
    loading: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    clearable: {
      control: { type: 'boolean' },
    },
    floating: {
      control: { type: 'boolean' },
    },
    showCharacterCount: {
      control: { type: 'boolean' },
    },
    success: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
}

export const WithLabel: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
}

export const WithIcon: Story = {
  args: {
    placeholder: 'Enter email',
    icon: <Mail className='h-4 w-4' />,
    type: 'email',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
}

export const IconRight: Story = {
  args: {
    placeholder: 'Enter username',
    icon: <User className='h-4 w-4' />,
    iconPosition: 'right',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
}

export const FloatingLabel: Story = {
  args: {
    label: 'Email Address',
    floating: true,
    type: 'email',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
}

export const Variants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '400px',
      }}
    >
      <Input variant='default' placeholder='Default variant' />
      <Input variant='filled' placeholder='Filled variant' />
      <Input variant='flushed' placeholder='Flushed variant' />
      <Input variant='outlined' placeholder='Outlined variant' />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '400px',
      }}
    >
      <Input inputSize='sm' placeholder='Small input' />
      <Input inputSize='md' placeholder='Medium input (default)' />
      <Input inputSize='lg' placeholder='Large input' />
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '400px',
      }}
    >
      <Input placeholder='Normal state' />
      <Input placeholder='Success state' success />
      <Input placeholder='Warning state' warning='This field needs attention' />
      <Input placeholder='Error state' error='This field is required' />
      <Input placeholder='Disabled state' disabled />
      <Input placeholder='Loading state' loading />
    </div>
  ),
}

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
    helper: 'Must be at least 8 characters long',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
}

export const WithValidation: Story = {
  render: () => {
    const [email, setEmail] = React.useState('')

    return (
      <div style={{ width: '400px' }}>
        <Input
          label='Email'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter email'
          validation={[
            { type: 'required', message: 'Email is required' },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
        />
      </div>
    )
  },
}

export const WithCharacterCount: Story = {
  render: () => {
    const [value, setValue] = React.useState('')

    return (
      <div style={{ width: '400px' }}>
        <Input
          label='Bio'
          placeholder='Write a short bio...'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          maxLength={100}
          showCharacterCount
          helper='Keep it brief and engaging'
        />
      </div>
    )
  },
}

export const Clearable: Story = {
  render: () => {
    const [value, setValue] = React.useState('Clear me!')

    return (
      <div style={{ width: '400px' }}>
        <Input
          placeholder='Clearable input'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          clearable
          onClear={() => setValue('')}
        />
      </div>
    )
  },
}

export const WithSuggestions: Story = {
  render: () => {
    const [value, setValue] = React.useState('')
    const countries = [
      'United States',
      'United Kingdom',
      'Canada',
      'Australia',
      'Germany',
      'France',
      'Spain',
      'Italy',
      'Japan',
      'China',
    ]

    return (
      <div style={{ width: '400px' }}>
        <Input
          label='Country'
          placeholder='Start typing...'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          suggestions={countries}
          onSuggestionSelect={(suggestion) => setValue(suggestion)}
        />
      </div>
    )
  },
}

export const DebouncedInput: Story = {
  render: () => {
    const [value, setValue] = React.useState('')
    const [debouncedValue, setDebouncedValue] = React.useState('')

    return (
      <div style={{ width: '400px' }}>
        <Input
          label='Search'
          placeholder='Type to search...'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onDebouncedChange={(val) => setDebouncedValue(val)}
          debounceMs={500}
        />
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#666' }}>
          Debounced value: {debouncedValue}
        </p>
      </div>
    )
  },
}

export const SearchInputExample: Story = {
  render: () => {
    const [searchResults, setSearchResults] = React.useState<string[]>([])

    const handleSearch = (query: string) => {
      if (query) {
        setSearchResults([
          `Result 1 for "${query}"`,
          `Result 2 for "${query}"`,
          `Result 3 for "${query}"`,
        ])
      } else {
        setSearchResults([])
      }
    }

    return (
      <div style={{ width: '400px' }}>
        <SearchInput onSearch={handleSearch} />
        {searchResults.length > 0 && (
          <div style={{ marginTop: '1rem' }}>
            <p
              style={{
                fontSize: '0.875rem',
                fontWeight: 'bold',
                marginBottom: '0.5rem',
              }}
            >
              Search Results:
            </p>
            <ul style={{ fontSize: '0.875rem', paddingLeft: '1.5rem' }}>
              {searchResults.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  },
}

export const PasswordInputExample: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <PasswordInput
        label='Password'
        placeholder='Enter password'
        helper='Click the eye icon to show/hide password'
      />
    </div>
  ),
}

export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      phone: '',
      birthdate: '',
    })

    const handleChange =
      (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [field]: e.target.value })
      }

    return (
      <div
        style={{
          width: '400px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <Input
          label='Full Name'
          placeholder='John Doe'
          value={formData.name}
          onChange={handleChange('name')}
          icon={<User className='h-4 w-4' />}
          validation={[
            { type: 'required', message: 'Name is required' },
            {
              type: 'minLength',
              value: 3,
              message: 'Name must be at least 3 characters',
            },
          ]}
        />

        <Input
          label='Email'
          type='email'
          placeholder='john@example.com'
          value={formData.email}
          onChange={handleChange('email')}
          icon={<Mail className='h-4 w-4' />}
          validation={[
            { type: 'required', message: 'Email is required' },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
        />

        <Input
          label='Phone'
          type='tel'
          placeholder='+1 (555) 123-4567'
          value={formData.phone}
          onChange={handleChange('phone')}
          icon={<Phone className='h-4 w-4' />}
          validation={[
            {
              type: 'pattern',
              value: /^\+?[\d\s()-]+$/,
              message: 'Please enter a valid phone number',
            },
          ]}
        />

        <Input
          label='Birth Date'
          type='date'
          value={formData.birthdate}
          onChange={handleChange('birthdate')}
          icon={<Calendar className='h-4 w-4' />}
        />
      </div>
    )
  },
}

export const CustomValidation: Story = {
  render: () => {
    const [username, setUsername] = React.useState('')

    return (
      <div style={{ width: '400px' }}>
        <Input
          label='Username'
          placeholder='Choose a username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          validation={[
            { type: 'required', message: 'Username is required' },
            {
              type: 'minLength',
              value: 3,
              message: 'Username must be at least 3 characters',
            },
            {
              type: 'maxLength',
              value: 20,
              message: 'Username must be less than 20 characters',
            },
            {
              type: 'custom',
              message:
                'Username can only contain letters, numbers, and underscores',
              validator: (value) => /^[a-zA-Z0-9_]+$/.test(value),
            },
          ]}
          showCharacterCount
          maxLength={20}
        />
      </div>
    )
  },
}

export const CompleteFeatures: Story = {
  render: () => {
    const [value, setValue] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    const handleSearch = () => {
      setLoading(true)
      setTimeout(() => setLoading(false), 2000)
    }

    return (
      <div style={{ width: '400px' }}>
        <Input
          label='Search Products'
          placeholder='Search for products...'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          icon={<CreditCard className='h-4 w-4' />}
          clearable
          onClear={() => setValue('')}
          loading={loading}
          floating
          showCharacterCount
          maxLength={50}
          suggestions={[
            'iPhone 15 Pro',
            'MacBook Pro',
            'iPad Air',
            'AirPods Pro',
          ]}
          onSuggestionSelect={(suggestion) => {
            setValue(suggestion)
            handleSearch()
          }}
          validation={[
            {
              type: 'minLength',
              value: 3,
              message: 'Search query must be at least 3 characters',
            },
          ]}
          helper='Press Enter to search'
          onKeyDown={(e) => {
            if (e.key === 'Enter' && value.length >= 3) {
              handleSearch()
            }
          }}
        />
      </div>
    )
  },
}
