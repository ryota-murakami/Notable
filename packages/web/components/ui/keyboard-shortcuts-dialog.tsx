'use client'

import { useMemo } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs'

interface KeyboardShortcutsDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

// Cross-platform key detection and mapping
function usePlatformKeys() {
  return useMemo(() => {
    if (typeof window === 'undefined') return { isMac: false, modifierKey: 'Ctrl' }
    
    const isMac = /Mac|iPhone|iPad|iPod/.test(navigator.platform) || 
                 /macOS|iPhone OS/.test(navigator.userAgent)
    
    return {
      isMac,
      modifierKey: isMac ? 'Cmd' : 'Ctrl'
    }
  }, [])
}

function convertKeysForPlatform(keys: string[], modifierKey: string): string[] {
  return keys.map(key => key === 'Cmd' ? modifierKey : key)
}

const shortcutsByCategory = {
  General: [
    { keys: ['Cmd', 'Shift', 'P'], description: 'Open command palette' },
    { keys: ['Cmd', 'K'], description: 'Open search' },
    { keys: ['Cmd', '/'], description: 'Show keyboard shortcuts' },
    { keys: ['Escape'], description: 'Close dialog' },
  ],
  Navigation: [
    { keys: ['↑', '↓'], description: 'Navigate up/down' },
    { keys: ['j', 'k'], description: 'Navigate next/previous (vim-style)' },
    { keys: ['Cmd', '1-9'], description: 'Quick switch to note' },
  ],
  Notes: [
    { keys: ['Cmd', 'N'], description: 'Create new note' },
    { keys: ['Cmd', 'E'], description: 'Toggle edit/view mode' },
    { keys: ['Cmd', 'M'], description: 'Toggle multi-select mode' },
    { keys: ['Cmd', 'A'], description: 'Select all (in multi-select mode)' },
  ],
  View: [
    { keys: ['Cmd', ','], description: 'Toggle sidebar' },
  ],
}

function KeyboardShortcut({ keys, description, modifierKey }: { 
  keys: string[]; 
  description: string;
  modifierKey: string;
}) {
  const platformKeys = convertKeysForPlatform(keys, modifierKey)
  
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-sm text-gray-600">{description}</span>
      <div className="flex items-center space-x-1">
        {platformKeys.map((key, index) => (
          <div key={index} className="flex items-center">
            {index > 0 && <span className="mx-1 text-xs text-gray-400">+</span>}
            <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-md">
              {key}
            </kbd>
          </div>
        ))}
      </div>
    </div>
  )
}

export function KeyboardShortcutsDialog({ open, onOpenChange }: KeyboardShortcutsDialogProps) {
  const { modifierKey } = usePlatformKeys()
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Keyboard Shortcuts</DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="General" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            {Object.keys(shortcutsByCategory).map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {Object.entries(shortcutsByCategory).map(([category, shortcuts]) => (
            <TabsContent key={category} value={category} className="space-y-1 mt-4">
              {shortcuts.map((shortcut, index) => (
                <KeyboardShortcut
                  key={index}
                  keys={shortcut.keys}
                  description={shortcut.description}
                  modifierKey={modifierKey}
                />
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}