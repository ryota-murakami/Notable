import type { Meta, StoryObj } from '@storybook/nextjs'
import * as React from 'react'
import {
  type CommandAction,
  CommandPalette,
  NotableCommandPalette,
  SearchCommandPalette,
  useCommandPalette,
} from './command-palette'
import { expect, userEvent, within } from '@storybook/test'
import {
  EditIcon,
  FileIcon,
  FolderIcon,
  HomeIcon,
  KeyboardIcon,
  MailIcon,
  MoonIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  TagIcon,
  TrashIcon,
  UserIcon,
} from 'lucide-react'

const meta = {
  title: 'Components/UI/CommandPalette',
  component: CommandPalette,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: { type: 'boolean' },
    },
    onOpenChange: {
      action: 'onOpenChange',
    },
    className: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof CommandPalette>

export default meta
type Story = StoryObj<typeof meta>

// Sample actions for stories
const sampleActions: CommandAction[] = [
  {
    id: 'new-file',
    title: 'New File',
    description: 'Create a new file',
    icon: <FileIcon className='h-4 w-4' />,
    keywords: ['create', 'add', 'new'],
    onSelect: () => console.log('New file'),
    group: 'File',
  },
  {
    id: 'search',
    title: 'Search',
    description: 'Search across all files',
    icon: <SearchIcon className='h-4 w-4' />,
    keywords: ['find', 'lookup'],
    onSelect: () => console.log('Search'),
    group: 'Navigation',
  },
  {
    id: 'settings',
    title: 'Settings',
    description: 'Open application settings',
    icon: <SettingsIcon className='h-4 w-4' />,
    keywords: ['preferences', 'config'],
    onSelect: () => console.log('Settings'),
    group: 'General',
  },
  {
    id: 'toggle-theme',
    title: 'Toggle Theme',
    description: 'Switch between light and dark mode',
    icon: <MoonIcon className='h-4 w-4' />,
    keywords: ['dark', 'light', 'theme'],
    onSelect: () => console.log('Toggle theme'),
    group: 'View',
  },
  {
    id: 'shortcuts',
    title: 'Keyboard Shortcuts',
    description: 'View all keyboard shortcuts',
    icon: <KeyboardIcon className='h-4 w-4' />,
    keywords: ['hotkeys', 'keys'],
    onSelect: () => console.log('Shortcuts'),
    group: 'Help',
  },
]

export const Default: Story = {
  args: {
    open: true,
    actions: sampleActions,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for dialog to be visible
    await expect(canvas.getByRole('dialog')).toBeVisible()

    // Check command input is present
    const input = canvas.getByPlaceholderText('Type a command or search...')
    await expect(input).toBeVisible()

    // Type to filter commands
    await userEvent.type(input, 'new')

    // Check filtered results
    await expect(canvas.getByText('New File')).toBeVisible()
  },
}

export const EmptyState: Story = {
  args: {
    open: true,
    actions: [],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Check empty state message
    await expect(canvas.getByText('No results found.')).toBeVisible()
  },
}

export const WithGroups: Story = {
  args: {
    open: true,
    actions: [
      ...sampleActions,
      {
        id: 'user-profile',
        title: 'User Profile',
        description: 'View your profile',
        icon: <UserIcon className='h-4 w-4' />,
        onSelect: () => console.log('Profile'),
        group: 'Account',
      },
      {
        id: 'logout',
        title: 'Log Out',
        description: 'Sign out of your account',
        icon: <UserIcon className='h-4 w-4' />,
        onSelect: () => console.log('Logout'),
        group: 'Account',
      },
    ],
  },
}

export const NotableDefault: Story = {
  render: () => {
    const [open, setOpen] = React.useState(true)

    return (
      <NotableCommandPalette
        open={open}
        onOpenChange={setOpen}
        onNewNote={() => console.log('New note')}
        onSearch={() => console.log('Search')}
        onSettings={() => console.log('Settings')}
        onToggleTheme={() => console.log('Toggle theme')}
        onShowKeyboardShortcuts={() => console.log('Show shortcuts')}
        currentTheme='light'
      />
    )
  },
}

export const NotableWithNoteActions: Story = {
  render: () => {
    const [open, setOpen] = React.useState(true)

    return (
      <NotableCommandPalette
        open={open}
        onOpenChange={setOpen}
        onNewNote={() => console.log('New note')}
        onSearch={() => console.log('Search')}
        onSettings={() => console.log('Settings')}
        onToggleTheme={() => console.log('Toggle theme')}
        onShowKeyboardShortcuts={() => console.log('Show shortcuts')}
        onEditNote={() => console.log('Edit note')}
        onCopyNote={() => console.log('Copy note')}
        onDeleteNote={() => console.log('Delete note')}
        onExportNote={() => console.log('Export note')}
        onAddTag={() => console.log('Add tag')}
        onManageTags={() => console.log('Manage tags')}
        onFilterByTag={() => console.log('Filter by tag')}
        onCreateTag={() => console.log('Create tag')}
        currentTheme='dark'
      />
    )
  },
}

export const SearchPalette: Story = {
  render: () => {
    const [open, setOpen] = React.useState(true)

    const sampleNotes = [
      {
        id: '1',
        title: 'Getting Started with React',
        content:
          'React is a JavaScript library for building user interfaces...',
        tags: ['react', 'javascript', 'tutorial'],
        isFolder: false,
        created_at: new Date('2024-01-01').toISOString(),
        updated_at: new Date('2024-01-15').toISOString(),
      },
      {
        id: '2',
        title: 'TypeScript Best Practices',
        content: 'TypeScript adds static typing to JavaScript...',
        tags: ['typescript', 'best-practices'],
        isFolder: false,
        created_at: new Date('2024-01-05').toISOString(),
        updated_at: new Date('2024-01-20').toISOString(),
      },
      {
        id: '3',
        title: 'Project Ideas',
        content: '',
        tags: [],
        isFolder: true,
        created_at: new Date('2024-01-10').toISOString(),
        updated_at: new Date('2024-01-25').toISOString(),
      },
    ]

    return (
      <SearchCommandPalette
        open={open}
        onOpenChange={setOpen}
        notes={sampleNotes}
        onNoteSelect={(note) => console.log('Selected note:', note)}
        onNewNote={() => console.log('New note')}
        onSettings={() => console.log('Settings')}
        onToggleTheme={() => console.log('Toggle theme')}
        onShowKeyboardShortcuts={() => console.log('Show shortcuts')}
        currentTheme='light'
      />
    )
  },
}

export const WithCustomActions: Story = {
  args: {
    open: true,
    actions: [
      {
        id: 'custom-1',
        title: 'Deploy to Production',
        description: 'Deploy the current branch to production',
        icon: <FolderIcon className='h-4 w-4' />,
        keywords: ['deploy', 'production', 'release'],
        onSelect: () => console.log('Deploy'),
        group: 'DevOps',
      },
      {
        id: 'custom-2',
        title: 'Run Tests',
        description: 'Execute all test suites',
        icon: <HomeIcon className='h-4 w-4' />,
        keywords: ['test', 'jest', 'unit'],
        onSelect: () => console.log('Run tests'),
        group: 'DevOps',
      },
      {
        id: 'custom-3',
        title: 'Send Email',
        description: 'Compose a new email',
        icon: <MailIcon className='h-4 w-4' />,
        keywords: ['email', 'mail', 'send'],
        onSelect: () => console.log('Send email'),
        group: 'Communication',
      },
    ],
  },
}

export const Playground: Story = {
  render: () => {
    const { open, setOpen } = useCommandPalette()

    const customActions: CommandAction[] = [
      {
        id: 'action-1',
        title: 'Action 1',
        description: 'This is the first action',
        icon: <PlusIcon className='h-4 w-4' />,
        onSelect: () => console.info('Action 1 selected'),
        group: 'Group A',
      },
      {
        id: 'action-2',
        title: 'Action 2',
        description: 'This is the second action',
        icon: <EditIcon className='h-4 w-4' />,
        onSelect: () => console.info('Action 2 selected'),
        group: 'Group A',
      },
      {
        id: 'action-3',
        title: 'Action 3',
        description: 'This is the third action',
        icon: <TrashIcon className='h-4 w-4' />,
        onSelect: () => console.info('Action 3 selected'),
        group: 'Group B',
      },
      {
        id: 'action-4',
        title: 'Action 4',
        description: 'This is the fourth action',
        icon: <TagIcon className='h-4 w-4' />,
        onSelect: () => console.info('Action 4 selected'),
        group: 'Group B',
      },
    ]

    return (
      <div className='flex flex-col items-center gap-4'>
        <button
          onClick={() => setOpen(true)}
          className='px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90'
        >
          Open Command Palette (⌘K)
        </button>

        <CommandPalette
          open={open}
          onOpenChange={setOpen}
          actions={customActions}
        />
      </div>
    )
  },
}

export const InteractionTest: Story = {
  args: {
    open: true,
    actions: sampleActions,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Test search functionality
    const input = canvas.getByPlaceholderText('Type a command or search...')
    await userEvent.clear(input)
    await userEvent.type(input, 'sett')

    // Verify filtering works
    await expect(canvas.getByText('Settings')).toBeVisible()
    await expect(canvas.queryByText('New File')).not.toBeInTheDocument()

    // Clear and search for another term
    await userEvent.clear(input)
    await userEvent.type(input, 'theme')

    // Verify theme toggle is visible
    await expect(canvas.getByText('Toggle Theme')).toBeVisible()

    // Test keyboard navigation
    await userEvent.keyboard('{ArrowDown}')
    await userEvent.keyboard('{Enter}')
  },
}
