'use client'

import { useCallback, useEffect, useState } from 'react'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './command'

interface CommandPaletteProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const [search, setSearch] = useState('')

  // Reset search when dialog opens/closes
  useEffect(() => {
    if (!open) {
      setSearch('')
    }
  }, [open])

  const runCommand = useCallback((command: () => void) => {
    onOpenChange(false)
    command()
  }, [onOpenChange])

  return (
    <CommandDialog 
      open={open} 
      onOpenChange={onOpenChange}
      title="Command Palette"
      description="Search for a command to run..."
    >
      <CommandInput
        placeholder="Type a command or search..."
        value={search}
        onValueChange={setSearch}
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        
        <CommandGroup heading="Notes">
          <CommandItem
            onSelect={() => runCommand(() => {
              // Create new note
              const event = new CustomEvent('create-new-note')
              window.dispatchEvent(event)
            })}
            data-testid="command-create-new-note"
          >
            Create New Note
          </CommandItem>
        </CommandGroup>

        <CommandGroup heading="View">
          <CommandItem
            onSelect={() => runCommand(() => {
              // Toggle edit mode
              const event = new CustomEvent('toggle-edit-mode')
              window.dispatchEvent(event)
            })}
          >
            Toggle Edit Mode
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => {
              // Toggle sidebar
              const event = new CustomEvent('toggle-sidebar')
              window.dispatchEvent(event)
            })}
          >
            Toggle Sidebar
          </CommandItem>
        </CommandGroup>

        <CommandGroup heading="Help">
          <CommandItem
            onSelect={() => runCommand(() => {
              // Show keyboard shortcuts
              const event = new CustomEvent('show-keyboard-shortcuts')
              window.dispatchEvent(event)
            })}
          >
            Keyboard Shortcuts
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}