'use client'

import { useCallback, useEffect, useState } from 'react'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { DialogTitle } from '@radix-ui/react-dialog'

interface CommandPaletteProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onCreateNote: () => void
  onToggleViewMode: () => void
  onToggleMultiSelect: () => void
  onOpenKeyboardShortcuts: () => void
  onOpenSearch: () => void
}

export function CommandPalette({
  open,
  onOpenChange,
  onCreateNote,
  onToggleViewMode,
  onToggleMultiSelect,
  onOpenKeyboardShortcuts,
  onOpenSearch,
}: CommandPaletteProps) {
  const [search, setSearch] = useState('')

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
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <DialogTitle className="sr-only">Command Palette</DialogTitle>
      <CommandInput
        placeholder="Type a command or search..."
        value={search}
        onValueChange={setSearch}
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Commands">
          <CommandItem onSelect={() => runCommand(onCreateNote)}>
            Create New Note
          </CommandItem>
          <CommandItem onSelect={() => runCommand(onToggleViewMode)}>
            Toggle View Mode
          </CommandItem>
          <CommandItem onSelect={() => runCommand(onToggleMultiSelect)}>
            Toggle Multi-Select Mode
          </CommandItem>
          <CommandItem onSelect={() => runCommand(onOpenKeyboardShortcuts)}>
            Keyboard Shortcuts
          </CommandItem>
          <CommandItem onSelect={() => runCommand(onOpenSearch)}>
            Search Notes
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}