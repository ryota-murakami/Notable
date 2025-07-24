'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useKeyboardShortcutManager } from '@/hooks/use-keyboard-shortcuts'
import type { KeyboardShortcut } from '@/lib/keyboard-shortcuts'
import { RotateCcw } from 'lucide-react'

interface KeyboardShortcutsDialogProps {
  isOpen: boolean
  onClose: () => void
}

export function KeyboardShortcutsDialog({
  isOpen,
  onClose,
}: KeyboardShortcutsDialogProps) {
  const { shortcuts, resetToDefaults } = useKeyboardShortcutManager()
  const [activeTab, setActiveTab] =
    useState<KeyboardShortcut['category']>('general')

  // Group shortcuts by category
  const shortcutsByCategory = shortcuts.reduce(
    (acc, shortcut) => {
      const category = shortcut.category || 'general'
      if (!acc[category]) acc[category] = []
      acc[category].push(shortcut)
      return acc
    },
    {} as Record<KeyboardShortcut['category'], KeyboardShortcut[]>
  )

  const categories: Array<{
    value: KeyboardShortcut['category']
    label: string
  }> = [
    { value: 'general', label: 'General' },
    { value: 'navigation', label: 'Navigation' },
    { value: 'notes', label: 'Note Management' },
    { value: 'search', label: 'Search' },
    { value: 'view', label: 'View' },
    { value: 'editing', label: 'Editing' },
  ]

  const formatKey = (key: string) => {
    return key
      .replace(/cmd/gi, '⌘')
      .replace(/ctrl/gi, 'Ctrl')
      .replace(/shift/gi, '⇧')
      .replace(/alt/gi, '⌥')
      .replace(/meta/gi, '⌘')
      .replace(/arrowup/gi, '↑')
      .replace(/arrowdown/gi, '↓')
      .replace(/arrowleft/gi, '←')
      .replace(/arrowright/gi, '→')
      .replace(/\+/g, ' + ')
  }

  const renderShortcutKeys = (keys: string[]) => {
    // Handle special case for number shortcuts
    if (keys.some((key) => key.includes('1...9'))) {
      return (
        <div className='flex gap-1 items-center'>
          <Badge variant='secondary' className='font-mono'>
            {formatKey('Cmd+1')} ... {formatKey('Cmd+9')}
          </Badge>
        </div>
      )
    }

    return (
      <div className='flex gap-1 items-center'>
        {keys.map((key, index) => (
          <div key={index} className='flex items-center gap-1'>
            {index > 0 && <span className='text-muted-foreground'>or</span>}
            <Badge variant='secondary' className='font-mono'>
              {formatKey(key)}
            </Badge>
          </div>
        ))}
      </div>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='sm:max-w-[600px] max-h-[80vh]'>
        <DialogHeader>
          <DialogTitle>Keyboard Shortcuts</DialogTitle>
          <DialogDescription>
            Quick reference for all available keyboard shortcuts
          </DialogDescription>
        </DialogHeader>

        <div className='mt-4'>
          <div className='flex justify-end mb-4'>
            <Button
              variant='outline'
              size='sm'
              onClick={() => {
                resetToDefaults()
              }}
            >
              <RotateCcw className='h-4 w-4 mr-2' />
              Reset to Defaults
            </Button>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={(value) =>
              setActiveTab(value as KeyboardShortcut['category'])
            }
          >
            <TabsList className='grid grid-cols-3 lg:grid-cols-6 w-full'>
              {categories.map((category) => (
                <TabsTrigger
                  key={category.value}
                  value={category.value}
                  className='text-xs'
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent
                key={category.value}
                value={category.value}
                className='mt-4 max-h-[400px] overflow-y-auto'
              >
                <div className='space-y-2'>
                  {shortcutsByCategory[category.value]?.map((shortcut) => (
                    <div
                      key={shortcut.id}
                      className='flex items-center justify-between p-3 rounded-lg border bg-muted/50'
                    >
                      <div className='flex-1'>
                        <div className='font-medium'>{shortcut.name}</div>
                        {shortcut.description && (
                          <div className='text-sm text-muted-foreground'>
                            {shortcut.description}
                          </div>
                        )}
                      </div>
                      <div className='ml-4'>
                        {renderShortcutKeys(shortcut.keys)}
                      </div>
                    </div>
                  )) || (
                    <div className='text-center text-muted-foreground py-8'>
                      No shortcuts in this category
                    </div>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  )
}
