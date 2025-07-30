import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarItem,
  SidebarGroup,
  SidebarToggle,
  NotableSidebar,
} from './sidebar'
import {
  FileTextIcon,
  FolderIcon,
  HomeIcon,
  SearchIcon,
  SettingsIcon,
  StarIcon,
  TagIcon,
  TrashIcon,
  UserIcon,
} from 'lucide-react'
import { within, userEvent, expect } from '@storybook/test'

const meta = {
  title: 'UI/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='flex h-screen bg-background'>
        <Story />
        <div className='flex-1 p-8'>
          <h1 className='text-2xl font-bold mb-4'>Main Content Area</h1>
          <p className='text-muted-foreground'>
            The sidebar is displayed on the left. Try toggling it to see the
            collapsed state.
          </p>
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

// Wrapper for stateful sidebar
const StatefulSidebar = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [activeItem, setActiveItem] = useState('home')

  return (
    <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)}>
      <SidebarHeader>
        <div className='flex items-center justify-between w-full'>
          <h2 className='text-lg font-semibold'>App Name</h2>
          <SidebarToggle />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarItem
            icon={<HomeIcon className='h-4 w-4' />}
            active={activeItem === 'home'}
            onClick={() => setActiveItem('home')}
          >
            Home
          </SidebarItem>
          <SidebarItem
            icon={<SearchIcon className='h-4 w-4' />}
            active={activeItem === 'search'}
            onClick={() => setActiveItem('search')}
          >
            Search
          </SidebarItem>
          <SidebarItem
            icon={<StarIcon className='h-4 w-4' />}
            active={activeItem === 'favorites'}
            onClick={() => setActiveItem('favorites')}
          >
            Favorites
          </SidebarItem>
        </SidebarGroup>

        <SidebarGroup title='Content' className='mt-6'>
          <SidebarItem
            icon={<FileTextIcon className='h-4 w-4' />}
            active={activeItem === 'documents'}
            onClick={() => setActiveItem('documents')}
          >
            Documents
          </SidebarItem>
          <SidebarItem
            icon={<FolderIcon className='h-4 w-4' />}
            active={activeItem === 'folders'}
            onClick={() => setActiveItem('folders')}
          >
            Folders
          </SidebarItem>
          <SidebarItem
            icon={<TagIcon className='h-4 w-4' />}
            active={activeItem === 'tags'}
            onClick={() => setActiveItem('tags')}
          >
            Tags
          </SidebarItem>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarItem
          icon={<UserIcon className='h-4 w-4' />}
          active={activeItem === 'profile'}
          onClick={() => setActiveItem('profile')}
        >
          Profile
        </SidebarItem>
        <SidebarItem
          icon={<SettingsIcon className='h-4 w-4' />}
          active={activeItem === 'settings'}
          onClick={() => setActiveItem('settings')}
        >
          Settings
        </SidebarItem>
      </SidebarFooter>
    </Sidebar>
  )
}

export const Default: Story = {
  render: () => <StatefulSidebar />,
}

export const Collapsed: Story = {
  render: () => {
    const [collapsed] = useState(true)
    return (
      <Sidebar collapsed={collapsed}>
        <SidebarHeader>
          <SidebarToggle />
        </SidebarHeader>
        <SidebarContent>
          <SidebarItem icon={<HomeIcon className='h-4 w-4' />}>
            Home
          </SidebarItem>
          <SidebarItem icon={<SearchIcon className='h-4 w-4' />}>
            Search
          </SidebarItem>
        </SidebarContent>
      </Sidebar>
    )
  },
}

export const WithGroups: Story = {
  render: () => (
    <Sidebar>
      <SidebarHeader>
        <h2 className='text-lg font-semibold'>Grouped Items</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup title='Navigation'>
          <SidebarItem icon={<HomeIcon className='h-4 w-4' />}>
            Dashboard
          </SidebarItem>
          <SidebarItem icon={<SearchIcon className='h-4 w-4' />}>
            Search
          </SidebarItem>
        </SidebarGroup>

        <SidebarGroup title='Management' className='mt-6'>
          <SidebarItem icon={<FileTextIcon className='h-4 w-4' />}>
            Documents
          </SidebarItem>
          <SidebarItem icon={<FolderIcon className='h-4 w-4' />}>
            Projects
          </SidebarItem>
          <SidebarItem icon={<TagIcon className='h-4 w-4' />}>
            Labels
          </SidebarItem>
        </SidebarGroup>

        <SidebarGroup title='System' className='mt-6'>
          <SidebarItem icon={<TrashIcon className='h-4 w-4' />}>
            Trash
          </SidebarItem>
          <SidebarItem icon={<SettingsIcon className='h-4 w-4' />}>
            Settings
          </SidebarItem>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  ),
}

export const NotableSidebarEmpty: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false)

    return (
      <NotableSidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed(!collapsed)}
        notes={[]}
        onNewNote={() => console.info('New note clicked')}
        onSearch={() => console.info('Search clicked')}
        onSettings={() => console.info('Settings clicked')}
      />
    )
  },
}

export const NotableSidebarWithNotes: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false)
    const [selectedNoteId, setSelectedNoteId] = useState('2')

    const notes = [
      { id: '1', title: 'Meeting Notes', isFolder: false },
      { id: '2', title: 'Project Ideas', isFolder: false },
      { id: '3', title: 'Work', isFolder: true },
      { id: '4', title: 'Personal', isFolder: true },
      { id: '5', title: 'Reading List', isFolder: false },
      { id: '6', title: 'Quick Notes', isFolder: false },
    ]

    return (
      <NotableSidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed(!collapsed)}
        notes={notes}
        selectedNoteId={selectedNoteId}
        onNoteSelect={setSelectedNoteId}
        onNewNote={() => console.info('New note clicked')}
        onSearch={() => console.info('Search clicked')}
        onSettings={() => console.info('Settings clicked')}
      />
    )
  },
}

export const LongContent: Story = {
  render: () => {
    const items = Array.from({ length: 20 }, (_, i) => ({
      id: `item-${i}`,
      title: `Document ${i + 1}`,
    }))

    return (
      <Sidebar>
        <SidebarHeader>
          <h2 className='text-lg font-semibold'>Many Items</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup title='Documents'>
            {items.map((item) => (
              <SidebarItem
                key={item.id}
                icon={<FileTextIcon className='h-4 w-4' />}
              >
                {item.title}
              </SidebarItem>
            ))}
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarItem icon={<SettingsIcon className='h-4 w-4' />}>
            Settings
          </SidebarItem>
        </SidebarFooter>
      </Sidebar>
    )
  },
}

export const CustomStyling: Story = {
  render: () => (
    <Sidebar className='bg-slate-900 text-white'>
      <SidebarHeader className='border-slate-700'>
        <h2 className='text-lg font-semibold text-white'>Dark Theme</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarItem
          icon={<HomeIcon className='h-4 w-4' />}
          className='hover:bg-slate-800 hover:text-white'
        >
          Home
        </SidebarItem>
        <SidebarItem
          icon={<FileTextIcon className='h-4 w-4' />}
          className='hover:bg-slate-800 hover:text-white'
          active
        >
          Active Item
        </SidebarItem>
      </SidebarContent>
    </Sidebar>
  ),
}

export const InteractiveSidebar: Story = {
  render: () => <StatefulSidebar />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for component to render
    await new Promise((resolve) => setTimeout(resolve, 100))

    // Find and click the toggle button
    const toggleButton = canvas
      .getAllByRole('button')
      .find((btn) => btn.querySelector('svg.lucide-chevron-left'))

    if (toggleButton) {
      await userEvent.click(toggleButton)
    }

    // Wait for animation
    await new Promise((resolve) => setTimeout(resolve, 300))

    // Verify sidebar is collapsed
    const sidebar = canvas.getByRole('complementary')
    await expect(sidebar).toHaveAttribute('data-collapsed', 'true')

    // Click toggle again to expand
    const expandButton = canvas
      .getAllByRole('button')
      .find((btn) => btn.querySelector('svg.lucide-chevron-right'))

    if (expandButton) {
      await userEvent.click(expandButton)
    }

    // Wait for animation
    await new Promise((resolve) => setTimeout(resolve, 300))

    // Verify sidebar is expanded
    await expect(sidebar).toHaveAttribute('data-collapsed', 'false')
  },
}

export const ItemInteraction: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState<string | null>(null)
    const [clickedItems, setClickedItems] = useState<string[]>([])

    return (
      <Sidebar>
        <SidebarHeader>
          <h2 className='text-lg font-semibold'>Click Tracking</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarItem
            icon={<HomeIcon className='h-4 w-4' />}
            active={activeItem === 'home'}
            onClick={() => {
              setActiveItem('home')
              setClickedItems([...clickedItems, 'home'])
            }}
          >
            Home
          </SidebarItem>
          <SidebarItem
            icon={<SearchIcon className='h-4 w-4' />}
            active={activeItem === 'search'}
            onClick={() => {
              setActiveItem('search')
              setClickedItems([...clickedItems, 'search'])
            }}
          >
            Search
          </SidebarItem>
          <div className='mt-4 p-3 text-xs text-muted-foreground'>
            Clicked: {clickedItems.join(', ') || 'None'}
          </div>
        </SidebarContent>
      </Sidebar>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for component to render
    await new Promise((resolve) => setTimeout(resolve, 100))

    // Click home item
    const homeItem = canvas.getByText('Home')
    await userEvent.click(homeItem)

    // Verify it's active
    await expect(homeItem.closest('button')).toHaveClass(/bg-sidebar-primary/)

    // Click search item
    const searchItem = canvas.getByText('Search')
    await userEvent.click(searchItem)

    // Verify search is now active and home is not
    await expect(searchItem.closest('button')).toHaveClass(/bg-sidebar-primary/)
    await expect(homeItem.closest('button')).not.toHaveClass(
      /bg-sidebar-primary/
    )
  },
}
