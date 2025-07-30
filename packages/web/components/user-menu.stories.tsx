import React from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { UserMenu } from './user-menu'
import { within, userEvent, expect, waitFor } from '@storybook/test'
import { Toaster } from 'sonner'

// Mock next/navigation
const mockPush = jest.fn()
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}))

// Mock Supabase client
const mockUser = {
  id: 'user-123',
  email: 'john.doe@example.com',
  user_metadata: {
    full_name: 'John Doe',
    name: 'John Doe',
  },
  app_metadata: {},
  aud: 'authenticated',
  created_at: '2024-01-01T00:00:00.000Z',
}

const mockSignOut = jest.fn()
const mockGetUser = jest.fn()
const mockOnAuthStateChange = jest.fn()

jest.mock('@/utils/supabase/client', () => ({
  createClient: () => ({
    auth: {
      getUser: mockGetUser,
      signOut: mockSignOut,
      onAuthStateChange: mockOnAuthStateChange,
    },
  }),
}))

// Mock environment
jest.mock('../lib/utils/environment', () => ({
  isTest: jest.fn(() => false),
}))

const meta = {
  title: 'UI/Navigation/UserMenu',
  component: UserMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes',
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
  beforeEach: () => {
    // Reset mocks
    mockPush.mockReset()
    mockSignOut.mockReset()
    mockGetUser.mockReset()
    mockOnAuthStateChange.mockReset()

    // Default mock implementations
    mockGetUser.mockResolvedValue({ data: { user: mockUser }, error: null })
    mockSignOut.mockResolvedValue({ error: null })
    mockOnAuthStateChange.mockReturnValue({
      data: { subscription: { unsubscribe: jest.fn() } },
    })
  },
} satisfies Meta<typeof UserMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLongName: Story = {
  beforeEach: () => {
    mockGetUser.mockResolvedValue({
      data: {
        user: {
          ...mockUser,
          user_metadata: {
            full_name: 'Alexander Christopher Johnson III',
          },
        },
      },
      error: null,
    })
  },
}

export const EmailOnly: Story = {
  beforeEach: () => {
    mockGetUser.mockResolvedValue({
      data: {
        user: {
          ...mockUser,
          user_metadata: {},
        },
      },
      error: null,
    })
  },
}

export const NoUserData: Story = {
  beforeEach: () => {
    mockGetUser.mockResolvedValue({
      data: {
        user: {
          ...mockUser,
          email: null,
          user_metadata: {},
        },
      },
      error: null,
    })
  },
}

export const Loading: Story = {
  beforeEach: () => {
    mockGetUser.mockImplementation(
      () => new Promise(() => {}) // Never resolves
    )
  },
}

export const TestMode: Story = {
  beforeEach: () => {
    require('../lib/utils/environment').isTest.mockReturnValue(true)
    mockGetUser.mockResolvedValue({ data: { user: null }, error: null })
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

    // Check that logout was called
    await waitFor(() => {
      expect(mockSignOut).toHaveBeenCalled()
      expect(mockPush).toHaveBeenCalledWith('/auth')
    })

    // Should show success toast
    await waitFor(() => {
      expect(canvas.getByText('Logged out successfully')).toBeInTheDocument()
    })
  },
}

export const LogoutError: Story = {
  beforeEach: () => {
    mockSignOut.mockResolvedValue({ error: new Error('Network error') })
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Open menu
    const menuButton = await canvas.findByRole('button', { name: /user menu/i })
    await userEvent.click(menuButton)

    // Click logout
    const logoutItem = await canvas.findByText('Log out')
    await userEvent.click(logoutItem)

    // Should show error toast
    await waitFor(() => {
      expect(canvas.getByText('Logout failed')).toBeInTheDocument()
      expect(
        canvas.getByText('There was an error logging out. Please try again.')
      ).toBeInTheDocument()
    })
  },
}

export const AuthStateChange: Story = {
  render: () => {
    const [currentUser, setCurrentUser] = React.useState(mockUser)

    React.useEffect(() => {
      // Simulate auth state change after 2 seconds
      const timer = setTimeout(() => {
        setCurrentUser({
          ...mockUser,
          email: 'jane.smith@example.com',
          user_metadata: {
            full_name: 'Jane Smith',
          },
        })
      }, 2000)

      return () => clearTimeout(timer)
    }, [])

    // Override mock to use current user
    mockGetUser.mockResolvedValue({
      data: { user: currentUser },
      error: null,
    })

    return (
      <div className='space-y-2'>
        <p className='text-sm text-muted-foreground'>
          User will change from John Doe to Jane Smith in 2 seconds
        </p>
        <UserMenu />
      </div>
    )
  },
}

export const DifferentInitials: Story = {
  render: () => {
    const users = [
      { name: 'John Doe', initials: 'JD' },
      { name: 'Alice Bob Charlie', initials: 'AB' },
      { name: 'SingleName', initials: 'SI' },
      { name: null, email: 'test@example.com', initials: 'TE' },
      { name: null, email: null, initials: '??' },
    ]

    return (
      <div className='space-y-4'>
        {users.map((userData, index) => {
          // Create unique mock for each user
          const userMock = {
            ...mockUser,
            id: `user-${index}`,
            email: userData.email || `user${index}@example.com`,
            user_metadata: userData.name ? { full_name: userData.name } : {},
          }

          // Override mock for this render
          mockGetUser.mockResolvedValueOnce({
            data: { user: userMock },
            error: null,
          })

          return (
            <div key={index} className='flex items-center gap-4'>
              <UserMenu />
              <span className='text-sm text-muted-foreground'>
                {userData.name || userData.email || 'No data'} →{' '}
                {userData.initials}
              </span>
            </div>
          )
        })}
      </div>
    )
  },
}

export const KeyboardNavigation: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Open menu with Enter key
    const menuButton = await canvas.findByRole('button', { name: /user menu/i })
    await userEvent.click(menuButton)

    // Navigate with arrow keys
    await userEvent.keyboard('{ArrowDown}')
    await userEvent.keyboard('{ArrowDown}')

    // Select with Enter
    await userEvent.keyboard('{Enter}')

    // Should trigger logout
    await waitFor(() => {
      expect(mockSignOut).toHaveBeenCalled()
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
      <UserMenu />
      <UserMenu className='h-12 w-12 text-lg' />
      <UserMenu className='h-6 w-6 text-xs' />
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
