import type { Meta, StoryObj } from '@storybook/nextjs'
import * as React from 'react'
import {
  CreatableDropdown,
  Dropdown,
  MultiSelectDropdown,
  SearchableDropdown,
} from './dropdown'
import { expect, userEvent, within } from '@storybook/test'
import {
  Calendar,
  FileText,
  Home,
  Mail,
  MapPin,
  Phone,
  Settings,
  User,
} from 'lucide-react'

const meta = {
  title: 'Design System/Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled', 'outlined'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    clearable: {
      control: { type: 'boolean' },
    },
    searchable: {
      control: { type: 'boolean' },
    },
    multiple: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'text' },
    },
    success: {
      control: { type: 'boolean' },
    },
    creatable: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

const simpleOptions = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Date', value: 'date' },
  { label: 'Elderberry', value: 'elderberry' },
]

const iconOptions = [
  { label: 'Home', value: 'home', icon: <Home className='h-4 w-4' /> },
  { label: 'User', value: 'user', icon: <User className='h-4 w-4' /> },
  {
    label: 'Settings',
    value: 'settings',
    icon: <Settings className='h-4 w-4' />,
  },
  {
    label: 'Documents',
    value: 'documents',
    icon: <FileText className='h-4 w-4' />,
  },
  {
    label: 'Calendar',
    value: 'calendar',
    icon: <Calendar className='h-4 w-4' />,
  },
]

const detailedOptions = [
  {
    label: 'John Doe',
    value: 'john',
    description: 'john.doe@example.com',
    icon: <Mail className='h-4 w-4' />,
  },
  {
    label: 'Jane Smith',
    value: 'jane',
    description: 'jane.smith@example.com',
    icon: <Mail className='h-4 w-4' />,
  },
  {
    label: 'Bob Johnson',
    value: 'bob',
    description: 'bob.johnson@example.com',
    icon: <Mail className='h-4 w-4' />,
  },
  {
    label: 'Alice Brown',
    value: 'alice',
    description: 'alice.brown@example.com',
    icon: <Mail className='h-4 w-4' />,
    disabled: true,
  },
]

export const Default: Story = {
  args: {
    options: simpleOptions,
    placeholder: 'Select a fruit...',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByRole('button')

    // Test dropdown is visible and enabled
    await expect(trigger).toBeVisible()
    await expect(trigger).toBeEnabled()

    // Test opening dropdown
    await userEvent.click(trigger)

    // Test selecting an option
    const option = canvas.getByText('Apple')
    await userEvent.click(option)

    // Verify selection
    await expect(trigger).toHaveTextContent('Apple')
  },
}

export const WithIcons: Story = {
  args: {
    options: iconOptions,
    placeholder: 'Select an option...',
  },
}

export const WithDescriptions: Story = {
  args: {
    options: detailedOptions,
    placeholder: 'Select a person...',
  },
}

export const Searchable: Story = {
  args: {
    options: simpleOptions,
    placeholder: 'Search fruits...',
    searchable: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByRole('button')

    // Open dropdown
    await userEvent.click(trigger)

    // Type in search
    const searchInput = canvas.getByPlaceholderText('Search...')
    await userEvent.type(searchInput, 'app')

    // Verify filtered results
    await expect(canvas.getByText('Apple')).toBeVisible()
    await expect(canvas.queryByText('Banana')).not.toBeInTheDocument()
  },
}

export const MultiSelect: Story = {
  args: {
    options: simpleOptions,
    placeholder: 'Select fruits...',
    multiple: true,
    clearable: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByRole('button')

    // Open dropdown
    await userEvent.click(trigger)

    // Select multiple options
    await userEvent.click(canvas.getByText('Apple'))
    await userEvent.click(canvas.getByText('Banana'))

    // Verify selection count
    await expect(trigger).toHaveTextContent('2 selected')
  },
}

export const Creatable: Story = {
  args: {
    options: simpleOptions,
    placeholder: 'Select or create...',
    creatable: true,
    searchable: true,
    onCreateOption: (value) => console.info('Creating:', value),
  },
}

export const WithLabel: Story = {
  args: {
    options: simpleOptions,
    placeholder: 'Select a fruit...',
    label: 'Favorite Fruit',
    helper: 'Choose your favorite fruit from the list',
  },
}

export const Sizes: Story = {
  args: {
    options: simpleOptions,
  },
  render: (args) => (
    <div className='space-y-4'>
      <Dropdown {...args} size='sm' placeholder='Small' />
      <Dropdown {...args} size='md' placeholder='Medium' />
      <Dropdown {...args} size='lg' placeholder='Large' />
    </div>
  ),
}

export const Variants: Story = {
  args: {
    options: simpleOptions,
  },
  render: (args) => (
    <div className='space-y-4'>
      <Dropdown {...args} variant='default' placeholder='Default' />
      <Dropdown {...args} variant='filled' placeholder='Filled' />
      <Dropdown {...args} variant='outlined' placeholder='Outlined' />
    </div>
  ),
}

export const States: Story = {
  args: {
    options: simpleOptions,
  },
  render: (args) => (
    <div className='space-y-4'>
      <Dropdown {...args} placeholder='Normal' />
      <Dropdown {...args} placeholder='Disabled' disabled />
      <Dropdown {...args} placeholder='Loading' loading />
      <Dropdown
        {...args}
        placeholder='With Error'
        error='Please select an option'
      />
      <Dropdown {...args} placeholder='Success' success />
    </div>
  ),
}

export const SearchableDropdownExample: Story = {
  args: {
    options: detailedOptions,
  },
  render: (args) => (
    <SearchableDropdown
      {...args}
      placeholder='Search people...'
      label='Select Person'
    />
  ),
}

export const MultiSelectDropdownExample: Story = {
  args: {
    options: iconOptions,
  },
  render: (args) => (
    <MultiSelectDropdown
      {...args}
      placeholder='Select multiple items...'
      label='Select Items'
    />
  ),
}

export const CreatableDropdownExample: Story = {
  args: {
    options: simpleOptions,
  },
  render: (args) => (
    <CreatableDropdown
      {...args}
      placeholder='Select or create fruit...'
      label='Fruit Selection'
      onCreateOption={(value) => console.info('Creating:', value)}
    />
  ),
}

export const LongList: Story = {
  args: {
    options: Array.from({ length: 50 }, (_, i) => ({
      label: `Option ${i + 1}`,
      value: `option-${i + 1}`,
    })),
    placeholder: 'Select from long list...',
    searchable: true,
  },
}

export const GroupedOptions: Story = {
  args: {
    options: [
      { label: 'Apple', value: 'apple', group: 'Fruits' },
      { label: 'Banana', value: 'banana', group: 'Fruits' },
      { label: 'Carrot', value: 'carrot', group: 'Vegetables' },
      { label: 'Broccoli', value: 'broccoli', group: 'Vegetables' },
    ],
    placeholder: 'Select food...',
  },
}

export const WithClearButton: Story = {
  args: {
    options: simpleOptions,
    placeholder: 'Select a fruit...',
    clearable: true,
    defaultValue: 'apple',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByRole('button')

    // Verify initial value
    await expect(trigger).toHaveTextContent('Apple')

    // Clear selection
    const clearButton = canvas.getByRole('button', { name: '' })
    await userEvent.click(clearButton)

    // Verify cleared
    await expect(trigger).toHaveTextContent('Select a fruit...')
  },
}
