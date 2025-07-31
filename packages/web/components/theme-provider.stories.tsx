import type { Meta, StoryObj } from '@storybook/nextjs'
import { ThemeProvider } from './theme-provider'
import { useTheme } from 'next-themes'
import { Button } from './ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import { Moon, Sun } from 'lucide-react'

// Demo component that uses theme
function ThemeDemo() {
  const { theme, setTheme } = useTheme()

  return (
    <Card className='max-w-md'>
      <CardHeader>
        <CardTitle>Theme Provider Demo</CardTitle>
        <CardDescription>
          Current theme: <strong>{theme}</strong>
        </CardDescription>
      </CardHeader>
      <CardContent className='space-y-4'>
        <p>
          The ThemeProvider component enables theme switching functionality
          across the application.
        </p>

        <div className='flex gap-2'>
          <Button
            variant='outline'
            size='sm'
            onClick={() => setTheme('light')}
            disabled={theme === 'light'}
          >
            <Sun className='h-4 w-4 mr-2' />
            Light
          </Button>
          <Button
            variant='outline'
            size='sm'
            onClick={() => setTheme('dark')}
            disabled={theme === 'dark'}
          >
            <Moon className='h-4 w-4 mr-2' />
            Dark
          </Button>
          <Button
            variant='outline'
            size='sm'
            onClick={() => setTheme('system')}
            disabled={theme === 'system'}
          >
            System
          </Button>
        </div>

        <div className='p-4 rounded-lg bg-secondary'>
          <p className='text-sm'>
            This component automatically handles theme persistence and prevents
            flash of incorrect theme on page load.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

const meta: Meta<typeof ThemeProvider> = {
  title: 'Components/Providers/ThemeProvider',
  component: ThemeProvider,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A theme provider component that wraps the application and provides theme context using next-themes. Supports light, dark, and system themes with automatic persistence.',
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ThemeProvider>

export const Default: Story = {
  render: () => <ThemeDemo />,
}

export const ForcedLight: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider attribute='class' forcedTheme='light'>
        <Story />
      </ThemeProvider>
    ),
  ],
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Forced Light Theme</CardTitle>
        <CardDescription>
          This story forces light theme regardless of system preference
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>The theme is locked to light mode and cannot be changed.</p>
      </CardContent>
    </Card>
  ),
}

export const ForcedDark: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider attribute='class' forcedTheme='dark'>
        <Story />
      </ThemeProvider>
    ),
  ],
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Forced Dark Theme</CardTitle>
        <CardDescription>
          This story forces dark theme regardless of system preference
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>The theme is locked to dark mode and cannot be changed.</p>
      </CardContent>
    </Card>
  ),
}

export const WithCustomStorageKey: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        storageKey='notable-theme'
      >
        <Story />
      </ThemeProvider>
    ),
  ],
  render: () => <ThemeDemo />,
}

export const DisableTransitions: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        <Story />
      </ThemeProvider>
    ),
  ],
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>No Transition Theme Changes</CardTitle>
        <CardDescription>
          Theme changes happen instantly without CSS transitions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ThemeDemo />
      </CardContent>
    </Card>
  ),
}
