import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { KeyboardShortcutsDialog } from './keyboard-shortcuts-dialog'
import { Button } from '@/design-system/components/button'
import { expect, userEvent, waitFor, within } from '@storybook/test'

const meta = {
  title: 'UI/KeyboardShortcutsDialog',
  component: KeyboardShortcutsDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the dialog is open',
    },
    onOpenChange: {
      action: 'onOpenChange',
      description: 'Callback when dialog open state changes',
    },
  },
  decorators: [
    (Story) => (
      <div className='min-h-[600px] flex items-center justify-center'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof KeyboardShortcutsDialog>

export default meta
type Story = StoryObj<typeof meta>

// Wrapper component for controlled state
const KeyboardShortcutsDialogDemo = ({
  defaultOpen = false,
}: {
  defaultOpen?: boolean
}) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Keyboard Shortcuts</Button>
      <KeyboardShortcutsDialog open={open} onOpenChange={setOpen} />
    </>
  )
}

export const Default: Story = {
  render: () => <KeyboardShortcutsDialogDemo />,
}

export const OpenByDefault: Story = {
  render: () => <KeyboardShortcutsDialogDemo defaultOpen={true} />,
}

export const WithTriggerButton: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <div className='space-x-2'>
          <Button onClick={() => setOpen(true)}>
            Show Shortcuts (Click or Cmd+/)
          </Button>
          <Button variant='outline' onClick={() => setOpen(true)}>
            <kbd className='pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100'>
              <span className='text-xs'>⌘</span>/
            </kbd>
          </Button>
        </div>
        <KeyboardShortcutsDialog open={open} onOpenChange={setOpen} />
      </>
    )
  },
}

export const SimulateKeyboardShortcut: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    const [lastAction, setLastAction] = useState('')

    // Simulate keyboard shortcuts
    React.useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        // Cmd+/ or Ctrl+/
        if ((e.metaKey || e.ctrlKey) && e.key === '/') {
          e.preventDefault()
          setOpen(true)
          setLastAction('Opened with Cmd+/')
        }
        // Cmd+K
        else if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
          e.preventDefault()
          setLastAction('Cmd+K pressed (would open command palette)')
        }
        // Cmd+N
        else if ((e.metaKey || e.ctrlKey) && e.key === 'n') {
          e.preventDefault()
          setLastAction('Cmd+N pressed (would create new note)')
        }
      }

      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }, [])

    return (
      <>
        <div className='text-center space-y-4'>
          <p className='text-muted-foreground'>
            Try pressing keyboard shortcuts:
          </p>
          <div className='space-y-2'>
            <div>
              <kbd className='px-2 py-1 text-xs font-mono border rounded'>
                Cmd+/
              </kbd>{' '}
              to open shortcuts dialog
            </div>
            <div>
              <kbd className='px-2 py-1 text-xs font-mono border rounded'>
                Cmd+K
              </kbd>{' '}
              for command palette
            </div>
            <div>
              <kbd className='px-2 py-1 text-xs font-mono border rounded'>
                Cmd+N
              </kbd>{' '}
              for new note
            </div>
          </div>
          {lastAction && (
            <p className='text-sm text-green-600 dark:text-green-400'>
              {lastAction}
            </p>
          )}
          <Button onClick={() => setOpen(true)}>Open Shortcuts Dialog</Button>
        </div>
        <KeyboardShortcutsDialog open={open} onOpenChange={setOpen} />
      </>
    )
  },
}

// Interactive stories
export const InteractiveDialog: Story = {
  render: () => <KeyboardShortcutsDialogDemo defaultOpen={true} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for dialog to open
    await waitFor(() => {
      const dialog = canvas.getByRole('dialog')
      expect(dialog).toBeInTheDocument()
    })

    // Check dialog title
    const title = canvas.getByText('Keyboard Shortcuts')
    await expect(title).toBeInTheDocument()

    // Check tabs are present
    const generalTab = canvas.getByRole('tab', { name: 'General' })
    const navigationTab = canvas.getByRole('tab', { name: 'Navigation' })
    const notesTab = canvas.getByRole('tab', { name: 'Notes' })
    const viewTab = canvas.getByRole('tab', { name: 'View' })

    await expect(generalTab).toBeInTheDocument()
    await expect(navigationTab).toBeInTheDocument()
    await expect(notesTab).toBeInTheDocument()
    await expect(viewTab).toBeInTheDocument()

    // Check that General tab is active by default
    await expect(generalTab).toHaveAttribute('aria-selected', 'true')

    // Check some shortcuts are visible
    await expect(canvas.getByText('Open command palette')).toBeInTheDocument()
    await expect(
      canvas.getByText('Quick search / Open command palette')
    ).toBeInTheDocument()
  },
}

export const TabNavigation: Story = {
  render: () => <KeyboardShortcutsDialogDemo defaultOpen={true} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for dialog
    await waitFor(() => {
      expect(canvas.getByRole('dialog')).toBeInTheDocument()
    })

    // Click Navigation tab
    const navigationTab = canvas.getByRole('tab', { name: 'Navigation' })
    await userEvent.click(navigationTab)

    // Check Navigation shortcuts are visible
    await expect(
      canvas.getByText('Navigate up/down in lists')
    ).toBeInTheDocument()
    await expect(
      canvas.getByText('Navigate up/down (vim-style)')
    ).toBeInTheDocument()

    // Click Notes tab
    const notesTab = canvas.getByRole('tab', { name: 'Notes' })
    await userEvent.click(notesTab)

    // Check Notes shortcuts are visible
    await expect(canvas.getByText('Create new note')).toBeInTheDocument()
    await expect(canvas.getByText('Save current note')).toBeInTheDocument()

    // Click View tab
    const viewTab = canvas.getByRole('tab', { name: 'View' })
    await userEvent.click(viewTab)

    // Check View shortcuts are visible
    await expect(canvas.getByText('Toggle sidebar')).toBeInTheDocument()
    await expect(
      canvas.getByText('Toggle theme (light/dark)')
    ).toBeInTheDocument()
  },
}

export const CloseWithEscape: Story = {
  render: () => <KeyboardShortcutsDialogDemo defaultOpen={true} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for dialog
    await waitFor(() => {
      expect(canvas.getByRole('dialog')).toBeInTheDocument()
    })

    // Press Escape
    await userEvent.keyboard('{Escape}')

    // Dialog should close
    await waitFor(() => {
      expect(canvas.queryByRole('dialog')).not.toBeInTheDocument()
    })
  },
}

export const CloseWithButton: Story = {
  render: () => <KeyboardShortcutsDialogDemo defaultOpen={true} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for dialog
    await waitFor(() => {
      expect(canvas.getByRole('dialog')).toBeInTheDocument()
    })

    // Find and click close button (X)
    const closeButton = canvas.getByRole('button', { name: /close/i })
    await userEvent.click(closeButton)

    // Dialog should close
    await waitFor(() => {
      expect(canvas.queryByRole('dialog')).not.toBeInTheDocument()
    })
  },
}

export const PlatformSpecificKeys: Story = {
  render: () => {
    const [open, setOpen] = useState(true)
    const isMac =
      typeof window !== 'undefined' &&
      window.navigator.platform.toLowerCase().includes('mac')

    return (
      <>
        <div className='text-center space-y-4'>
          <p className='text-muted-foreground'>
            Platform detected:{' '}
            <strong>{isMac ? 'macOS' : 'Windows/Linux'}</strong>
          </p>
          <p className='text-sm text-muted-foreground'>
            The dialog shows {isMac ? 'Cmd' : 'Ctrl'} for modifier keys
          </p>
          <Button onClick={() => setOpen(true)}>Open Shortcuts Dialog</Button>
        </div>
        <KeyboardShortcutsDialog open={open} onOpenChange={setOpen} />
      </>
    )
  },
}

export const ScrollableContent: Story = {
  render: () => {
    const [open, setOpen] = useState(true)

    return (
      <>
        <div className='text-center space-y-4'>
          <p className='text-sm text-muted-foreground'>
            The dialog content is scrollable when there are many shortcuts
          </p>
          <Button onClick={() => setOpen(true)}>Open Shortcuts Dialog</Button>
        </div>
        <KeyboardShortcutsDialog open={open} onOpenChange={setOpen} />
      </>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for dialog
    await waitFor(() => {
      expect(canvas.getByRole('dialog')).toBeInTheDocument()
    })

    // Check that content area exists and is scrollable
    const tabContent = canvas.getByRole('tabpanel')
    await expect(tabContent).toHaveClass(/overflow-y-auto/)
  },
}

export const WithCustomStyling: Story = {
  render: () => {
    const [open, setOpen] = useState(true)

    return (
      <>
        <div className='text-center'>
          <Button
            onClick={() => setOpen(true)}
            className='bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
          >
            Open Styled Dialog
          </Button>
        </div>
        <div className='[&_.dialog-content]:bg-gradient-to-br [&_.dialog-content]:from-slate-50 [&_.dialog-content]:to-slate-100 dark:[&_.dialog-content]:from-slate-900 dark:[&_.dialog-content]:to-slate-800'>
          <KeyboardShortcutsDialog open={open} onOpenChange={setOpen} />
        </div>
      </>
    )
  },
}

export const AccessibilityFeatures: Story = {
  render: () => <KeyboardShortcutsDialogDemo defaultOpen={true} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for dialog
    await waitFor(() => {
      expect(canvas.getByRole('dialog')).toBeInTheDocument()
    })

    // Check ARIA labels
    const dialog = canvas.getByRole('dialog')
    await expect(dialog).toHaveAttribute('aria-labelledby')
    await expect(dialog).toHaveAttribute('aria-describedby')

    // Check tab list has proper role
    const tabList = canvas.getByRole('tablist')
    await expect(tabList).toBeInTheDocument()

    // Check tabs have proper ARIA attributes
    const tabs = canvas.getAllByRole('tab')
    tabs.forEach((tab) => {
      expect(tab).toHaveAttribute('aria-controls')
      expect(tab).toHaveAttribute('aria-selected')
    })

    // Check keyboard navigation works
    const firstTab = tabs[0]
    await userEvent.click(firstTab)

    // Tab to next element
    await userEvent.tab()

    // Should focus on next interactive element
    await expect(document.activeElement?.tagName).toBeTruthy()
  },
}

export const MobileResponsive: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  render: () => <KeyboardShortcutsDialogDemo defaultOpen={true} />,
}
