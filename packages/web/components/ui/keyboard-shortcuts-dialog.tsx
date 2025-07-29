'use client'

import * as React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs'
import { Badge } from '@/design-system/components/badge'
import { Separator } from '@/components/ui/separator'

interface KeyboardShortcut {
  keys: string[]
  description: string
  category: string
}

interface KeyboardShortcutsDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function KeyboardShortcutsDialog({
  open,
  onOpenChange,
}: KeyboardShortcutsDialogProps) {
  const shortcuts: KeyboardShortcut[] = [
    // General shortcuts
    {
      keys: ['Cmd', 'Shift', 'P'],
      description: 'Open command palette',
      category: 'General',
    },
    {
      keys: ['Cmd', 'K'],
      description: 'Quick search / Open command palette',
      category: 'General',
    },
    {
      keys: ['Cmd', '/'],
      description: 'Show keyboard shortcuts',
      category: 'General',
    },
    {
      keys: ['Escape'],
      description: 'Close dialog or cancel action',
      category: 'General',
    },

    // Navigation shortcuts
    {
      keys: ['↑', '↓'],
      description: 'Navigate up/down in lists',
      category: 'Navigation',
    },
    {
      keys: ['j', 'k'],
      description: 'Navigate up/down (vim-style)',
      category: 'Navigation',
    },
    {
      keys: ['Enter'],
      description: 'Select item',
      category: 'Navigation',
    },
    {
      keys: ['Cmd', '1-9'],
      description: 'Quick switch to note by number',
      category: 'Navigation',
    },

    // Notes shortcuts
    {
      keys: ['Cmd', 'N'],
      description: 'Create new note',
      category: 'Notes',
    },
    {
      keys: ['Cmd', 'S'],
      description: 'Save current note',
      category: 'Notes',
    },
    {
      keys: ['Cmd', 'D'],
      description: 'Delete current note',
      category: 'Notes',
    },
    {
      keys: ['Cmd', 'C'],
      description: 'Copy note content',
      category: 'Notes',
    },
    {
      keys: ['Cmd', 'E'],
      description: 'Toggle edit/view mode',
      category: 'Notes',
    },

    // View shortcuts
    {
      keys: ['Cmd', ','],
      description: 'Toggle sidebar',
      category: 'View',
    },
    {
      keys: ['Cmd', 'M'],
      description: 'Toggle multi-select mode',
      category: 'View',
    },
    {
      keys: ['Cmd', 'T'],
      description: 'Toggle theme (light/dark)',
      category: 'View',
    },
    {
      keys: ['Cmd', 'G'],
      description: 'Open graph view',
      category: 'View',
    },
  ]

  // Group shortcuts by category
  const groupedShortcuts = React.useMemo(() => {
    const groups: Record<string, KeyboardShortcut[]> = {}
    shortcuts.forEach((shortcut) => {
      if (!groups[shortcut.category]) {
        groups[shortcut.category] = []
      }
      groups[shortcut.category].push(shortcut)
    })
    return groups
  }, [])

  const categories = Object.keys(groupedShortcuts)

  const formatKeys = (keys: string[]) => {
    return keys.map((key, index) => (
      <React.Fragment key={key}>
        {index > 0 && <span className='mx-1 text-muted-foreground'>+</span>}
        <Badge variant='outline' className='px-2 py-1 text-xs font-mono'>
          {key === 'Cmd' && process.platform !== 'darwin' ? 'Ctrl' : key}
        </Badge>
      </React.Fragment>
    ))
  }

  // Handle escape key to close dialog
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        onOpenChange(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, onOpenChange])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-w-2xl max-h-[80vh] overflow-hidden'>
        <DialogHeader>
          <DialogTitle>Keyboard Shortcuts</DialogTitle>
          <DialogDescription>
            Speed up your workflow with these keyboard shortcuts. Press{' '}
            <Badge variant='outline' className='mx-1 text-xs'>
              Escape
            </Badge>{' '}
            to close this dialog.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue={categories[0]} className='mt-4'>
          <TabsList className='grid w-full grid-cols-4'>
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className='text-sm'>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent
              key={category}
              value={category}
              className='mt-4 max-h-[50vh] overflow-y-auto'
            >
              <div className='space-y-3'>
                {groupedShortcuts[category].map((shortcut, index) => (
                  <div
                    key={index}
                    className='flex items-center justify-between py-2 px-3 rounded-lg hover:bg-muted/50'
                  >
                    <span className='text-sm text-foreground'>
                      {shortcut.description}
                    </span>
                    <div className='flex items-center gap-1'>
                      {formatKeys(shortcut.keys)}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <Separator className='my-4' />

        <div className='text-xs text-muted-foreground'>
          <p className='mb-2'>
            <strong>Tips:</strong>
          </p>
          <ul className='space-y-1 list-disc list-inside'>
            <li>Most shortcuts use Cmd on macOS and Ctrl on Windows/Linux</li>
            <li>Shortcuts are disabled when typing in text fields</li>
            <li>Some shortcuts may require specific contexts to work</li>
            <li>Press Cmd+/ anytime to view this dialog</li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  )
}
