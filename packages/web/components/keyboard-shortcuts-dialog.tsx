'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface KeyboardShortcutsDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

interface Shortcut {
  keys: string[]
  description: string
}

const generalShortcuts: Shortcut[] = [
  { keys: ['⌘', 'Shift', 'P'], description: 'Open command palette' },
  { keys: ['⌘', '/'], description: 'Show keyboard shortcuts' },
  { keys: ['⌘', 'K'], description: 'Search notes' },
  { keys: ['⌘', 'E'], description: 'Toggle edit/view mode' },
  { keys: ['⌘', ','], description: 'Toggle sidebar' },
  { keys: ['⌘', 'M'], description: 'Toggle multi-select mode' },
]

const navigationShortcuts: Shortcut[] = [
  { keys: ['↓'], description: 'Next note' },
  { keys: ['↑'], description: 'Previous note' },
  { keys: ['J'], description: 'Next note' },
  { keys: ['K'], description: 'Previous note' },
  { keys: ['⌘', '1-9'], description: 'Quick switch to note' },
]

const notesShortcuts: Shortcut[] = [
  { keys: ['⌘', 'N'], description: 'Create new note' },
  { keys: ['⌘', 'D'], description: 'Delete note' },
  { keys: ['⌘', 'A'], description: 'Select all (in multi-select mode)' },
]

function ShortcutRow({ shortcut }: { shortcut: Shortcut }) {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-sm">{shortcut.description}</span>
      <div className="flex gap-1">
        {shortcut.keys.map((key, index) => (
          <kbd
            key={index}
            className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg"
          >
            {key}
          </kbd>
        ))}
      </div>
    </div>
  )
}

export function KeyboardShortcutsDialog({
  open,
  onOpenChange,
}: KeyboardShortcutsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Keyboard Shortcuts</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="navigation">Navigation</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
          </TabsList>
          <TabsContent value="general" className="space-y-2">
            {generalShortcuts.map((shortcut, index) => (
              <ShortcutRow key={index} shortcut={shortcut} />
            ))}
          </TabsContent>
          <TabsContent value="navigation" className="space-y-2">
            {navigationShortcuts.map((shortcut, index) => (
              <ShortcutRow key={index} shortcut={shortcut} />
            ))}
          </TabsContent>
          <TabsContent value="notes" className="space-y-2">
            {notesShortcuts.map((shortcut, index) => (
              <ShortcutRow key={index} shortcut={shortcut} />
            ))}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}