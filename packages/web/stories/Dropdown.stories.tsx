import type { Meta, StoryObj } from '@storybook/nextjs'
import {
  CreatableDropdown,
  Dropdown,
  type DropdownOption,
  MultiSelectDropdown,
  SearchableDropdown,
} from '../design-system/components/dropdown'
import {
  BookOpen,
  Calendar,
  FileText,
  Folder,
  Hash,
  Settings,
  Star,
  User,
} from 'lucide-react'
import { useState } from 'react'

const meta: Meta<typeof Dropdown> = {
  title: 'Notable Design System/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Feature-rich dropdown component with search, multi-select, and creation capabilities. Perfect for tag selection, category filtering, and user selection in Notable.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size variant of the dropdown',
    },
    variant: {
      control: 'select',
      options: ['default', 'filled', 'outlined'],
      description: 'Visual style variant',
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple selections',
    },
    searchable: {
      control: 'boolean',
      description: 'Enable search functionality',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the dropdown is disabled',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state',
    },
    clearable: {
      control: 'boolean',
      description: 'Allow clearing selection',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Sample data for stories
const basicOptions: DropdownOption[] = [
  { label: 'Personal', value: 'personal' },
  { label: 'Work', value: 'work' },
  { label: 'Ideas', value: 'ideas' },
  { label: 'Projects', value: 'projects' },
  { label: 'Archive', value: 'archive' },
]

const optionsWithIcons: DropdownOption[] = [
  {
    label: 'Personal Notes',
    value: 'personal',
    icon: <User className='h-4 w-4' />,
  },
  {
    label: 'Work Projects',
    value: 'work',
    icon: <Folder className='h-4 w-4' />,
  },
  {
    label: 'Ideas & Inspiration',
    value: 'ideas',
    icon: <Star className='h-4 w-4' />,
  },
  {
    label: 'Meeting Notes',
    value: 'meetings',
    icon: <Calendar className='h-4 w-4' />,
  },
  {
    label: 'Research',
    value: 'research',
    icon: <BookOpen className='h-4 w-4' />,
  },
]

const optionsWithDescriptions: DropdownOption[] = [
  {
    label: 'Premium Features',
    value: 'premium',
    icon: <Star className='h-4 w-4' />,
    description: 'AI assistance, unlimited notes, advanced search',
  },
  {
    label: 'Basic Plan',
    value: 'basic',
    icon: <FileText className='h-4 w-4' />,
    description: 'Essential note-taking features for individuals',
  },
  {
    label: 'Team Plan',
    value: 'team',
    icon: <User className='h-4 w-4' />,
    description: 'Collaboration tools for small teams',
  },
  {
    label: 'Enterprise',
    value: 'enterprise',
    icon: <Settings className='h-4 w-4' />,
    description: 'Advanced security and admin controls',
  },
]

const tagOptions: DropdownOption[] = [
  {
    label: 'productivity',
    value: 'productivity',
    icon: <Hash className='h-4 w-4 text-blue-500' />,
  },
  {
    label: 'meeting-notes',
    value: 'meeting-notes',
    icon: <Hash className='h-4 w-4 text-green-500' />,
  },
  {
    label: 'ideas',
    value: 'ideas',
    icon: <Hash className='h-4 w-4 text-purple-500' />,
  },
  {
    label: 'project-planning',
    value: 'project-planning',
    icon: <Hash className='h-4 w-4 text-orange-500' />,
  },
  {
    label: 'research',
    value: 'research',
    icon: <Hash className='h-4 w-4 text-red-500' />,
  },
  {
    label: 'tutorial',
    value: 'tutorial',
    icon: <Hash className='h-4 w-4 text-cyan-500' />,
  },
  {
    label: 'reference',
    value: 'reference',
    icon: <Hash className='h-4 w-4 text-teal-500' />,
  },
  {
    label: 'draft',
    value: 'draft',
    icon: <Hash className='h-4 w-4 text-gray-500' />,
  },
]

// Basic Stories
export const Default: Story = {
  args: {
    options: basicOptions,
    placeholder: 'Select a category...',
  },
}

export const WithValue: Story = {
  args: {
    options: basicOptions,
    defaultValue: 'work',
    placeholder: 'Select a category...',
  },
}

export const WithIcons: Story = {
  args: {
    options: optionsWithIcons,
    placeholder: 'Choose a section...',
  },
}

export const WithDescriptions: Story = {
  args: {
    options: optionsWithDescriptions,
    placeholder: 'Select your plan...',
  },
}

// Size Variants
export const Sizes: Story = {
  render: () => (
    <div className='space-y-4 w-80'>
      <Dropdown options={basicOptions} placeholder='Small dropdown' size='sm' />
      <Dropdown
        options={basicOptions}
        placeholder='Default dropdown'
        size='md'
      />
      <Dropdown options={basicOptions} placeholder='Large dropdown' size='lg' />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different dropdown sizes for various UI contexts',
      },
    },
  },
}

// Style Variants
export const StyleVariants: Story = {
  render: () => (
    <div className='space-y-4 w-80'>
      <Dropdown
        options={basicOptions}
        placeholder='Default variant'
        variant='default'
      />
      <Dropdown
        options={basicOptions}
        placeholder='Filled variant'
        variant='filled'
      />
      <Dropdown
        options={basicOptions}
        placeholder='Outlined variant'
        variant='outlined'
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different visual styles for the dropdown component',
      },
    },
  },
}

// States
export const States: Story = {
  render: () => (
    <div className='space-y-4 w-80'>
      <Dropdown options={basicOptions} placeholder='Normal state' />
      <Dropdown options={basicOptions} placeholder='Loading state' loading />
      <Dropdown options={basicOptions} placeholder='Disabled state' disabled />
      <Dropdown
        options={basicOptions}
        placeholder='Error state'
        error='Please select a valid option'
      />
      <Dropdown
        options={basicOptions}
        placeholder='Success state'
        success
        helper='Great choice!'
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Various states of the dropdown component including loading, disabled, error, and success states',
      },
    },
  },
}

// Notable App Examples
export const NotableTagSelector: Story = {
  render: () => {
    const [selectedTags, setSelectedTags] = useState<string[]>([
      'productivity',
      'ideas',
    ])

    return (
      <div className='w-96'>
        <MultiSelectDropdown
          options={tagOptions}
          value={selectedTags}
          onValueChange={(value) => setSelectedTags(value as string[])}
          placeholder='Add tags to organize your note...'
          searchable
          label='Note Tags'
          helper='Select multiple tags to categorize your note'
        />
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Tag selector as used in Notable for organizing notes with multi-select and search',
      },
    },
  },
}

export const NotableCategoryFilter: Story = {
  render: () => (
    <div className='w-80'>
      <SearchableDropdown
        options={optionsWithIcons}
        placeholder='Filter by category...'
        label='Note Category'
        clearable
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Category filter dropdown with search and clear functionality',
      },
    },
  },
}

export const NotableCreateTag: Story = {
  render: () => {
    const [tags, setTags] = useState(tagOptions)
    const [selectedTags, setSelectedTags] = useState<string[]>([])

    const handleCreateTag = (newTagLabel: string) => {
      const newTag: DropdownOption = {
        label: newTagLabel,
        value: newTagLabel.toLowerCase().replace(/\s+/g, '-'),
        icon: <Hash className='h-4 w-4 text-indigo-500' />,
      }
      setTags([...tags, newTag])
      setSelectedTags([...selectedTags, newTag.value])
    }

    return (
      <div className='w-96'>
        <CreatableDropdown
          options={tags}
          value={selectedTags}
          onValueChange={(value) => setSelectedTags(value as string[])}
          onCreateOption={handleCreateTag}
          placeholder='Type to search or create tags...'
          searchPlaceholder='Search tags or type to create new...'
          multiple
          clearable
          label='Create and Select Tags'
          helper='Type a new tag name and press Enter to create it'
        />
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Creatable dropdown for adding new tags in Notable with multi-select',
      },
    },
  },
}

export const NotableUserMention: Story = {
  render: () => {
    const userOptions: DropdownOption[] = [
      {
        label: 'Sarah Chen',
        value: 'sarah.chen',
        icon: (
          <div className='w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-500' />
        ),
        description: 'Product Manager',
      },
      {
        label: 'Alex Rodriguez',
        value: 'alex.rodriguez',
        icon: (
          <div className='w-4 h-4 rounded-full bg-gradient-to-r from-green-400 to-blue-500' />
        ),
        description: 'Senior Developer',
      },
      {
        label: 'Maya Patel',
        value: 'maya.patel',
        icon: (
          <div className='w-4 h-4 rounded-full bg-gradient-to-r from-pink-400 to-red-500' />
        ),
        description: 'UX Designer',
      },
      {
        label: 'Jordan Kim',
        value: 'jordan.kim',
        icon: (
          <div className='w-4 h-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500' />
        ),
        description: 'Data Analyst',
      },
    ]

    return (
      <div className='w-80'>
        <SearchableDropdown
          options={userOptions}
          placeholder='@mention someone...'
          size='sm'
        />
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'User mention dropdown with avatars and role descriptions',
      },
    },
  },
}

export const NotableTemplateSelector: Story = {
  render: () => {
    const templateOptions: DropdownOption[] = [
      {
        label: 'Meeting Notes',
        value: 'meeting-notes',
        icon: <Calendar className='h-4 w-4' />,
        description: 'Structured template for meeting documentation',
      },
      {
        label: 'Project Plan',
        value: 'project-plan',
        icon: <Folder className='h-4 w-4' />,
        description: 'Comprehensive project planning template',
      },
      {
        label: 'Daily Journal',
        value: 'daily-journal',
        icon: <BookOpen className='h-4 w-4' />,
        description: 'Personal reflection and daily planning',
      },
      {
        label: 'Research Notes',
        value: 'research-notes',
        icon: <FileText className='h-4 w-4' />,
        description: 'Academic or professional research template',
      },
      {
        label: 'Blank Page',
        value: 'blank',
        icon: <FileText className='h-4 w-4' />,
        description: 'Start with a clean slate',
      },
    ]

    return (
      <div className='w-96'>
        <Dropdown
          options={templateOptions}
          placeholder='Choose a template...'
          label='Note Template'
          helper='Select a template to get started quickly'
        />
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Template selector for creating new notes with predefined structures',
      },
    },
  },
}

// Advanced Features
export const AdvancedFeatures: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>(['productivity', 'work'])

    return (
      <div className='space-y-6 w-96'>
        <MultiSelectDropdown
          options={tagOptions}
          value={value}
          onValueChange={(val) => setValue(val as string[])}
          placeholder='Advanced multi-select...'
          searchable
          clearable
          label='Advanced Multi-Select'
          helper='Search, select multiple, and clear selections'
          maxHeight={200}
        />

        <CreatableDropdown
          options={basicOptions}
          placeholder='Type to create new options...'
          onCreateOption={(newValue) => {
            /* Created: ${newValue} */
          }}
          label='Creatable Dropdown'
          helper='Type something not in the list to create it'
        />
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Advanced dropdown features including multi-select, search, clear, and creation',
      },
    },
  },
}

// Interactive Example
export const InteractiveDemo: Story = {
  render: () => {
    const [selectedCategory, setSelectedCategory] = useState('')
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const [selectedUser, setSelectedUser] = useState('')

    return (
      <div className='space-y-6 p-6 bg-muted/30 rounded-lg'>
        <div className='text-lg font-semibold'>Create New Note</div>

        <div className='space-y-4'>
          <Dropdown
            options={optionsWithIcons}
            value={selectedCategory}
            onValueChange={(val) => setSelectedCategory(val as string)}
            placeholder='Select category...'
            label='Category'
            clearable
          />

          <MultiSelectDropdown
            options={tagOptions}
            value={selectedTags}
            onValueChange={(val) => setSelectedTags(val as string[])}
            placeholder='Add tags...'
            label='Tags'
            searchable
            clearable
          />

          <SearchableDropdown
            options={[
              {
                label: 'Only me',
                value: 'private',
                icon: <User className='h-4 w-4' />,
              },
              {
                label: 'Team members',
                value: 'team',
                icon: <User className='h-4 w-4' />,
              },
              {
                label: 'Everyone',
                value: 'public',
                icon: <User className='h-4 w-4' />,
              },
            ]}
            value={selectedUser}
            onValueChange={(val) => setSelectedUser(val as string)}
            placeholder='Who can access...'
            label='Visibility'
          />
        </div>

        <div className='pt-4 border-t'>
          <div className='text-sm text-muted-foreground'>
            Selected: Category = {selectedCategory || 'None'}, Tags ={' '}
            {selectedTags.length ? selectedTags.join(', ') : 'None'}, Visibility
            = {selectedUser || 'None'}
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Interactive demo showing multiple dropdowns working together in a note creation form',
      },
    },
  },
}
