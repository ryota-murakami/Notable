import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import {
  GeneralSettings,
  KeyboardSettings,
  NotableSettingsPanel,
  NotificationSettings,
  SettingsPanel,
  type SettingsSection,
  ThemeSettings,
} from './settings-panel'
import { Button } from '@/design-system/components/button'
import {
  BellIcon,
  DatabaseIcon,
  HelpCircleIcon,
  KeyboardIcon,
  MonitorIcon,
  PaletteIcon,
  SettingsIcon,
  ShieldIcon,
  UserIcon,
} from 'lucide-react'
import { expect, userEvent, waitFor, within } from '@storybook/test'

const meta = {
  title: 'UI/SettingsPanel',
  component: SettingsPanel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the settings panel is open',
    },
    onOpenChange: {
      action: 'onOpenChange',
      description: 'Callback when panel open state changes',
    },
    defaultSection: {
      control: 'text',
      description: 'Default section to show',
    },
  },
  decorators: [
    (Story) => (
      <div className='min-h-[700px] flex items-center justify-center'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SettingsPanel>

export default meta
type Story = StoryObj<typeof meta>

// Wrapper component for controlled state
const SettingsPanelDemo = ({
  defaultOpen = false,
  sections,
  defaultSection,
}: {
  defaultOpen?: boolean
  sections?: SettingsSection[]
  defaultSection?: string
}) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Settings</Button>
      <SettingsPanel
        open={open}
        onOpenChange={setOpen}
        sections={sections}
        defaultSection={defaultSection}
      />
    </>
  )
}

// Default sections for stories
const defaultSections: SettingsSection[] = [
  {
    id: 'general',
    label: 'General',
    icon: <SettingsIcon className='h-4 w-4' />,
    component: <GeneralSettings />,
  },
  {
    id: 'appearance',
    label: 'Appearance',
    icon: <PaletteIcon className='h-4 w-4' />,
    component: <ThemeSettings />,
  },
  {
    id: 'keyboard',
    label: 'Keyboard',
    icon: <KeyboardIcon className='h-4 w-4' />,
    component: <KeyboardSettings />,
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: <BellIcon className='h-4 w-4' />,
    component: <NotificationSettings />,
  },
]

export const Default: Story = {
  args: {
    open: false,
    onOpenChange: () => {},
  },
  render: () => <SettingsPanelDemo sections={defaultSections} />,
}

export const OpenByDefault: Story = {
  args: {
    open: true,
    onOpenChange: () => {},
  },
  render: () => (
    <SettingsPanelDemo defaultOpen={true} sections={defaultSections} />
  ),
}

export const WithDefaultSection: Story = {
  args: {
    open: true,
    onOpenChange: () => {},
    defaultSection: 'appearance',
  },
  render: () => (
    <SettingsPanelDemo
      defaultOpen={true}
      sections={defaultSections}
      defaultSection='appearance'
    />
  ),
}

export const CustomSections: Story = {
  args: {
    open: true,
    onOpenChange: () => {},
  },
  render: () => {
    const customSections: SettingsSection[] = [
      {
        id: 'account',
        label: 'Account',
        icon: <UserIcon className='h-4 w-4' />,
        component: (
          <div>
            <h3 className='text-lg font-semibold mb-4'>Account Settings</h3>
            <p className='text-muted-foreground'>
              Manage your account information
            </p>
          </div>
        ),
      },
      {
        id: 'security',
        label: 'Security',
        icon: <ShieldIcon className='h-4 w-4' />,
        component: (
          <div>
            <h3 className='text-lg font-semibold mb-4'>Security Settings</h3>
            <p className='text-muted-foreground'>Configure security options</p>
          </div>
        ),
      },
      {
        id: 'data',
        label: 'Data',
        icon: <DatabaseIcon className='h-4 w-4' />,
        component: (
          <div>
            <h3 className='text-lg font-semibold mb-4'>Data Management</h3>
            <p className='text-muted-foreground'>Export and backup options</p>
          </div>
        ),
      },
      {
        id: 'help',
        label: 'Help',
        icon: <HelpCircleIcon className='h-4 w-4' />,
        component: (
          <div>
            <h3 className='text-lg font-semibold mb-4'>Help & Support</h3>
            <p className='text-muted-foreground'>Get help with Notable</p>
          </div>
        ),
      },
    ]

    return <SettingsPanelDemo defaultOpen={true} sections={customSections} />
  },
}

// Individual section stories
export const GeneralSettingsSection: Story = {
  args: {
    open: true,
    onOpenChange: () => {},
  },
  render: () => {
    const [open, setOpen] = useState(true)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open General Settings</Button>
        <SettingsPanel
          open={open}
          onOpenChange={setOpen}
          sections={[
            {
              id: 'general',
              label: 'General',
              icon: <SettingsIcon className='h-4 w-4' />,
              component: (
                <GeneralSettings
                  appName='Notable Pro'
                  version='2.5.0'
                  onReset={() => console.info('Reset settings clicked')}
                />
              ),
            },
          ]}
        />
      </>
    )
  },
}

export const ThemeSettingsSection: Story = {
  args: {
    open: true,
    onOpenChange: () => {},
  },
  render: () => {
    const [open, setOpen] = useState(true)
    const [currentTheme, setCurrentTheme] = useState<
      'light' | 'dark' | 'system'
    >('system')

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Theme Settings</Button>
        <SettingsPanel
          open={open}
          onOpenChange={setOpen}
          sections={[
            {
              id: 'appearance',
              label: 'Appearance',
              icon: <PaletteIcon className='h-4 w-4' />,
              component: (
                <ThemeSettings
                  currentTheme={currentTheme}
                  onThemeChange={setCurrentTheme}
                  customColors={{
                    blue: '#3b82f6',
                    purple: '#8b5cf6',
                    green: '#10b981',
                    orange: '#f59e0b',
                    red: '#ef4444',
                    pink: '#ec4899',
                  }}
                  onColorChange={(color, value) =>
                    console.info(`Color ${color} changed to ${value}`)
                  }
                />
              ),
            },
          ]}
        />
      </>
    )
  },
}

export const KeyboardSettingsSection: Story = {
  args: {
    open: true,
    onOpenChange: () => {},
  },
  render: () => {
    const [open, setOpen] = useState(true)

    const shortcuts = [
      {
        id: 'new-note',
        label: 'New Note',
        shortcut: 'Cmd+N',
        category: 'File',
      },
      { id: 'save', label: 'Save', shortcut: 'Cmd+S', category: 'File' },
      { id: 'open', label: 'Open', shortcut: 'Cmd+O', category: 'File' },
      {
        id: 'search',
        label: 'Search',
        shortcut: 'Cmd+F',
        category: 'Navigation',
      },
      {
        id: 'goto',
        label: 'Go to...',
        shortcut: 'Cmd+P',
        category: 'Navigation',
      },
      { id: 'bold', label: 'Bold', shortcut: 'Cmd+B', category: 'Formatting' },
      {
        id: 'italic',
        label: 'Italic',
        shortcut: 'Cmd+I',
        category: 'Formatting',
      },
      {
        id: 'underline',
        label: 'Underline',
        shortcut: 'Cmd+U',
        category: 'Formatting',
      },
    ]

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Keyboard Settings</Button>
        <SettingsPanel
          open={open}
          onOpenChange={setOpen}
          sections={[
            {
              id: 'keyboard',
              label: 'Keyboard',
              icon: <KeyboardIcon className='h-4 w-4' />,
              component: (
                <KeyboardSettings
                  shortcuts={shortcuts}
                  onShortcutChange={(id, shortcut) =>
                    console.info(`Shortcut ${id} changed to ${shortcut}`)
                  }
                />
              ),
            },
          ]}
        />
      </>
    )
  },
}

export const NotificationSettingsSection: Story = {
  args: {
    open: true,
    onOpenChange: () => {},
  },
  render: () => {
    const [open, setOpen] = useState(true)
    const [enableNotifications, setEnableNotifications] = useState(true)

    const notificationTypes = [
      {
        id: 'sync',
        label: 'Sync Status',
        description: 'Notify when notes are synced',
        enabled: true,
      },
      {
        id: 'updates',
        label: 'App Updates',
        description: 'Notify when updates are available',
        enabled: true,
      },
      {
        id: 'reminders',
        label: 'Note Reminders',
        description: 'Notify for scheduled note reminders',
        enabled: false,
      },
      {
        id: 'sharing',
        label: 'Sharing Activity',
        description: 'Notify when someone shares with you',
        enabled: false,
      },
    ]

    return (
      <>
        <Button onClick={() => setOpen(true)}>
          Open Notification Settings
        </Button>
        <SettingsPanel
          open={open}
          onOpenChange={setOpen}
          sections={[
            {
              id: 'notifications',
              label: 'Notifications',
              icon: <BellIcon className='h-4 w-4' />,
              component: (
                <NotificationSettings
                  enableNotifications={enableNotifications}
                  onNotificationChange={setEnableNotifications}
                  notificationTypes={notificationTypes}
                />
              ),
            },
          ]}
        />
      </>
    )
  },
}

// Notable pre-built panel
export const NotableSettingsPanelStory: Story = {
  args: {
    open: true,
    onOpenChange: () => {},
  },
  render: () => {
    const [open, setOpen] = useState(false)
    const [currentTheme, setCurrentTheme] = useState<
      'light' | 'dark' | 'system'
    >('system')

    return (
      <>
        <div className='text-center space-y-4'>
          <Button onClick={() => setOpen(true)}>Open Notable Settings</Button>
          <p className='text-sm text-muted-foreground'>
            Current theme: <strong>{currentTheme}</strong>
          </p>
        </div>
        <NotableSettingsPanel
          open={open}
          onOpenChange={setOpen}
          currentTheme={currentTheme}
          onThemeChange={setCurrentTheme}
          onReset={() => console.info('Reset all settings')}
        />
      </>
    )
  },
}

// Interactive stories
export const InteractiveNavigation: Story = {
  args: {
    open: true,
    onOpenChange: () => {},
  },
  render: () => (
    <SettingsPanelDemo defaultOpen={true} sections={defaultSections} />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for panel to open
    await waitFor(() => {
      expect(canvas.getByText('Settings')).toBeInTheDocument()
    })

    // Click Appearance section
    const appearanceButton = canvas.getByText('Appearance')
    await userEvent.click(appearanceButton)

    // Check appearance content is shown
    await expect(canvas.getByText('Theme')).toBeInTheDocument()

    // Click Keyboard section
    const keyboardButton = canvas.getByText('Keyboard')
    await userEvent.click(keyboardButton)

    // Check keyboard content is shown
    await expect(canvas.getByText('Keyboard Shortcuts')).toBeInTheDocument()

    // Click Notifications section
    const notificationsButton = canvas.getByText('Notifications')
    await userEvent.click(notificationsButton)

    // Check notifications content is shown
    await expect(canvas.getByText('Enable Notifications')).toBeInTheDocument()
  },
}

export const ThemeSelection: Story = {
  args: {
    open: true,
    onOpenChange: () => {},
  },
  render: () => {
    const [open, setOpen] = useState(true)
    const [currentTheme, setCurrentTheme] = useState<
      'light' | 'dark' | 'system'
    >('system')

    const sections: SettingsSection[] = [
      {
        id: 'appearance',
        label: 'Appearance',
        icon: <PaletteIcon className='h-4 w-4' />,
        component: (
          <ThemeSettings
            currentTheme={currentTheme}
            onThemeChange={(theme) => {
              setCurrentTheme(theme)
              console.info(`Theme changed to: ${theme}`)
            }}
          />
        ),
      },
    ]

    return (
      <>
        <div className='text-center space-y-4'>
          <Button onClick={() => setOpen(true)}>Open Settings</Button>
          <p className='text-sm text-muted-foreground'>
            Current theme: <strong>{currentTheme}</strong>
          </p>
        </div>
        <SettingsPanel open={open} onOpenChange={setOpen} sections={sections} />
      </>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for panel
    await waitFor(() => {
      expect(canvas.getByText('Theme')).toBeInTheDocument()
    })

    // Click dark theme
    const darkButton = canvas.getByText('Dark')
    await userEvent.click(darkButton)

    // Should update display
    await expect(canvas.getByText('Current theme: dark')).toBeInTheDocument()

    // Click light theme
    const lightButton = canvas.getByText('Light')
    await userEvent.click(lightButton)

    // Should update display
    await expect(canvas.getByText('Current theme: light')).toBeInTheDocument()
  },
}

export const ClosePanel: Story = {
  args: {
    open: true,
    onOpenChange: () => {},
  },
  render: () => (
    <SettingsPanelDemo defaultOpen={true} sections={defaultSections} />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for panel
    await waitFor(() => {
      expect(canvas.getByText('Settings')).toBeInTheDocument()
    })

    // Find and click close button
    const closeButton = canvas.getByRole('button', { name: /close/i })
    await userEvent.click(closeButton)

    // Panel should close
    await waitFor(() => {
      expect(canvas.queryByText('Settings')).not.toBeInTheDocument()
    })
  },
}

export const ScrollableContent: Story = {
  args: {
    open: true,
    onOpenChange: () => {},
  },
  render: () => {
    const manySections: SettingsSection[] = [
      ...defaultSections,
      {
        id: 'advanced',
        label: 'Advanced',
        icon: <MonitorIcon className='h-4 w-4' />,
        component: (
          <div className='space-y-6'>
            <h3 className='text-lg font-semibold'>Advanced Settings</h3>
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className='py-2 border-b'>
                <div className='font-medium'>Setting {i + 1}</div>
                <div className='text-sm text-muted-foreground'>
                  Description for setting {i + 1}
                </div>
              </div>
            ))}
          </div>
        ),
      },
    ]

    return <SettingsPanelDemo defaultOpen={true} sections={manySections} />
  },
}

export const EmptyState: Story = {
  args: {
    open: true,
    onOpenChange: () => {},
  },
  render: () => {
    const [open, setOpen] = useState(true)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Empty Settings</Button>
        <SettingsPanel open={open} onOpenChange={setOpen} sections={[]} />
      </>
    )
  },
}

export const ResponsiveLayout: Story = {
  args: {
    open: true,
    onOpenChange: () => {},
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  render: () => (
    <SettingsPanelDemo defaultOpen={true} sections={defaultSections} />
  ),
}
