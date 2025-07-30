import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { expect, userEvent, waitFor, within } from '@storybook/test'
import { toast, Toaster } from 'sonner'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { LogOut, Settings, User } from 'lucide-react'

// Mock UserMenu component for Storybook
const UserMenuMock = ({
  className,
  userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    initials: 'JD',
  },
}: {
  className?: string
  userData?: {
    name: string | null
    email: string | null
    initials: string
  }
}) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleSettings = () => {
    toast('Settings page coming soon!')
  }

  const handleLogout = async () => {
    setIsLoading(true)
    // Simulate logout delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    toast.success('Logged out successfully')
  }

  if (userData.email === 'test@example.com') {
    // Test mode
    return (
      <div className={className}>
        <Button variant='ghost' size='icon' className='rounded-full'>
          <User className='h-5 w-5' />
        </Button>
      </div>
    )
  }

  if (!userData.name && !userData.email) {
    // Loading state
    return (
      <div className={className}>
        <div className='h-9 w-9 animate-pulse rounded-full bg-muted' />
      </div>
    )
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='ghost'
            className={`relative h-9 w-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white hover:opacity-90 ${className}`}
            aria-label='User menu'
          >
            <span className='text-sm font-medium'>{userData.initials}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' className='w-56'>
          <DropdownMenuLabel className='font-normal'>
            <div className='flex flex-col space-y-1'>
              <p className='text-sm font-medium leading-none'>
                {userData.name}
              </p>
              <p className='text-xs leading-none text-muted-foreground'>
                {userData.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleSettings} className='cursor-pointer'>
            <Settings className='mr-2 h-4 w-4' />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={handleLogout}
            className='cursor-pointer text-red-600 focus:text-red-600'
            disabled={isLoading}
          >
            <LogOut className='mr-2 h-4 w-4' />
            <span>{isLoading ? 'Logging out...' : 'Log out'}</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

const meta = {
  title: 'UI/Navigation/UserMenu',
  component: UserMenuMock,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    userData: {
      control: 'object',
      description: 'User data to display',
    },
  },
  decorators: [
    (Story) => (
      <>
        <Toaster position='top-center' />
        <div className='min-h-[200px] flex items-start justify-end p-4'>
          <Story />
        </div>
      </>
    ),
  ],
} satisfies Meta<typeof UserMenuMock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLongName: Story = {
  args: {
    userData: {
      name: 'Alexander Christopher Johnson III',
      email: 'alexander.johnson@example.com',
      initials: 'AJ',
    },
  },
}

export const EmailOnly: Story = {
  args: {
    userData: {
      name: null,
      email: 'user@example.com',
      initials: 'UE',
    },
  },
}

export const NoUserData: Story = {
  args: {
    userData: {
      name: null,
      email: null,
      initials: '??',
    },
  },
}

export const Loading: Story = {
  render: () => (
    <UserMenuMock userData={{ name: null, email: null, initials: '' }} />
  ),
}

export const TestMode: Story = {
  args: {
    userData: {
      name: 'Test User',
      email: 'test@example.com',
      initials: 'TU',
    },
  },
}

// Interactive stories
export const OpenMenu: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for the menu button to appear
    const menuButton = await canvas.findByRole('button', { name: /user menu/i })

    // Click to open
    await userEvent.click(menuButton)

    // Check menu is open
    await waitFor(() => {
      expect(canvas.getByText('John Doe')).toBeInTheDocument()
      expect(canvas.getByText('john.doe@example.com')).toBeInTheDocument()
      expect(canvas.getByText('Settings')).toBeInTheDocument()
      expect(canvas.getByText('Log out')).toBeInTheDocument()
    })
  },
}

export const ClickSettings: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Open menu
    const menuButton = await canvas.findByRole('button', { name: /user menu/i })
    await userEvent.click(menuButton)

    // Click settings
    const settingsItem = await canvas.findByText('Settings')
    await userEvent.click(settingsItem)

    // Should show toast
    await waitFor(() => {
      expect(canvas.getByText('Settings page coming soon!')).toBeInTheDocument()
    })
  },
}

export const Logout: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Open menu
    const menuButton = await canvas.findByRole('button', { name: /user menu/i })
    await userEvent.click(menuButton)

    // Click logout
    const logoutItem = await canvas.findByText('Log out')
    await userEvent.click(logoutItem)

    // Should show logging out state
    await waitFor(() => {
      expect(canvas.getByText('Logging out...')).toBeInTheDocument()
    })

    // Should show success toast
    await waitFor(
      () => {
        expect(canvas.getByText('Logged out successfully')).toBeInTheDocument()
      },
      { timeout: 2000 }
    )
  },
}

export const DifferentInitials: Story = {
  render: () => {
    const users = [
      { name: 'John Doe', email: 'john@example.com', initials: 'JD' },
      { name: 'Alice Bob Charlie', email: 'alice@example.com', initials: 'AB' },
      { name: 'SingleName', email: 'single@example.com', initials: 'SI' },
      { name: null, email: 'test@example.com', initials: 'TE' },
      { name: null, email: null, initials: '??' },
    ]

    return (
      <div className='space-y-4'>
        {users.map((userData, index) => (
          <div key={index} className='flex items-center gap-4'>
            <UserMenuMock userData={userData} />
            <span className='text-sm text-muted-foreground'>
              {userData.name || userData.email || 'No data'} →{' '}
              {userData.initials}
            </span>
          </div>
        ))}
      </div>
    )
  },
}

export const KeyboardNavigation: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Open menu
    const menuButton = await canvas.findByRole('button', { name: /user menu/i })
    await userEvent.click(menuButton)

    // Navigate with arrow keys
    await userEvent.keyboard('{ArrowDown}')
    await userEvent.keyboard('{ArrowDown}')

    // Select with Enter
    await userEvent.keyboard('{Enter}')

    // Should trigger logout
    await waitFor(() => {
      expect(canvas.getByText('Logging out...')).toBeInTheDocument()
    })
  },
}

export const CloseOnClickOutside: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Open menu
    const menuButton = await canvas.findByRole('button', { name: /user menu/i })
    await userEvent.click(menuButton)

    // Verify menu is open
    await waitFor(() => {
      expect(canvas.getByText('John Doe')).toBeInTheDocument()
    })

    // Click outside
    await userEvent.click(document.body)

    // Menu should close
    await waitFor(() => {
      expect(canvas.queryByText('John Doe')).not.toBeInTheDocument()
    })
  },
}

export const CustomStyling: Story = {
  args: {
    className: 'bg-gradient-to-r from-purple-500 to-pink-500',
  },
}

export const MultipleInstances: Story = {
  render: () => (
    <div className='flex gap-4'>
      <UserMenuMock />
      <UserMenuMock className='h-12 w-12 text-lg' />
      <UserMenuMock className='h-6 w-6 text-xs' />
    </div>
  ),
}

export const MobileResponsive: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Open menu
    const menuButton = await canvas.findByRole('button', { name: /user menu/i })
    await userEvent.click(menuButton)

    // Menu should be visible on mobile
    await waitFor(() => {
      expect(canvas.getByText('John Doe')).toBeInTheDocument()
    })
  },
}

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  decorators: [
    (Story) => (
      <div className='dark bg-gray-900 p-8'>
        <Story />
      </div>
    ),
  ],
}
