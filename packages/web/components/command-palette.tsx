'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'
import type { Note } from '@/types/note'
import {
  Clock,
  Eye,
  EyeOff,
  FileText,
  FolderOpen,
  Keyboard,
  Plus,
  Search,
  SidebarClose,
  SidebarOpen,
} from 'lucide-react'

interface CommandPaletteProps {
  isOpen: boolean
  onClose: () => void
  notes: Note[]
  onSelectNote: (noteId: string) => void
  onCreateNote: (parentId: string | null) => void
  onOpenSearch: () => void
  onToggleSidebar: () => void
  onToggleViewMode: () => void
  onOpenShortcuts: () => void
  isViewMode: boolean
  isSidebarCollapsed: boolean
}

type CommandAction = {
  id: string
  title: string
  description?: string
  icon: React.ElementType
  shortcut?: string
  action: () => void
  keywords?: string[]
}

export function CommandPalette({
  isOpen,
  onClose,
  notes,
  onSelectNote,
  onCreateNote,
  onOpenSearch,
  onToggleSidebar,
  onToggleViewMode,
  onOpenShortcuts,
  isViewMode,
  isSidebarCollapsed,
}: CommandPaletteProps) {
  const [search, setSearch] = useState('')

  // Platform-specific shortcut formatting
  const formatShortcut = (shortcut: string) => {
    const isMac =
      typeof navigator !== 'undefined' &&
      /Mac|iPhone|iPad/.test(navigator.platform)
    return shortcut.replace(/Cmd/g, isMac ? 'Cmd' : 'Ctrl')
  }

  // Define all available commands
  const commands = useMemo<CommandAction[]>(() => {
    const noteCommands: CommandAction[] = notes.map((note) => ({
      id: `note-${note.id}`,
      title: note.title || 'Untitled',
      description: note.isFolder ? 'Folder' : 'Note',
      icon: note.isFolder ? FolderOpen : FileText,
      action: () => {
        onSelectNote(note.id)
        onClose()
      },
      keywords: [
        ...(note.tags || []),
        note.isFolder ? 'folder' : 'note',
        'open',
        'switch',
      ],
    }))

    const actionCommands: CommandAction[] = [
      {
        id: 'create-note',
        title: 'Create New Note',
        description: 'Create a new note in the current folder',
        icon: Plus,
        shortcut: formatShortcut('Cmd+N'),
        action: () => {
          onCreateNote(null)
          onClose()
        },
        keywords: ['new', 'add', 'create', 'note'],
      },
      {
        id: 'search',
        title: 'Search Notes',
        description: 'Search across all your notes',
        icon: Search,
        shortcut: formatShortcut('Cmd+K'),
        action: () => {
          onOpenSearch()
          onClose()
        },
        keywords: ['find', 'search', 'look', 'query'],
      },
      {
        id: 'toggle-sidebar',
        title: isSidebarCollapsed ? 'Show Sidebar' : 'Hide Sidebar',
        description: 'Toggle the sidebar visibility',
        icon: isSidebarCollapsed ? SidebarOpen : SidebarClose,
        shortcut: formatShortcut('Cmd+,'),
        action: () => {
          onToggleSidebar()
          onClose()
        },
        keywords: ['sidebar', 'toggle', 'hide', 'show', 'collapse'],
      },
      {
        id: 'toggle-view-mode',
        title: isViewMode ? 'Edit Mode' : 'View Mode',
        description: isViewMode
          ? 'Switch to edit mode'
          : 'Switch to read-only view mode',
        icon: isViewMode ? Eye : EyeOff,
        shortcut: formatShortcut('Cmd+E'),
        action: () => {
          onToggleViewMode()
          onClose()
        },
        keywords: ['view', 'edit', 'mode', 'read', 'write'],
      },
      {
        id: 'keyboard-shortcuts',
        title: 'Keyboard Shortcuts',
        description: 'View all keyboard shortcuts',
        icon: Keyboard,
        shortcut: formatShortcut('Cmd+/'),
        action: () => {
          onOpenShortcuts()
          onClose()
        },
        keywords: ['shortcuts', 'keys', 'hotkeys', 'keyboard'],
      },
    ]

    // Get recent notes (last 5 modified)
    const recentNotes = [...notes]
      .sort(
        (a, b) =>
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      )
      .slice(0, 5)
      .map((note) => ({
        id: `recent-${note.id}`,
        title: note.title || 'Untitled',
        description: 'Recently modified',
        icon: Clock,
        action: () => {
          onSelectNote(note.id)
          onClose()
        },
        keywords: ['recent', 'modified', 'updated'],
      }))

    return [...actionCommands, ...recentNotes, ...noteCommands]
  }, [
    notes,
    onSelectNote,
    onCreateNote,
    onOpenSearch,
    onToggleSidebar,
    onToggleViewMode,
    onOpenShortcuts,
    onClose,
    isViewMode,
    isSidebarCollapsed,
  ])

  // Filter commands based on search
  const filteredCommands = useMemo(() => {
    if (!search) return commands

    const searchLower = search.toLowerCase()
    return commands.filter((command) => {
      const titleMatch = command.title.toLowerCase().includes(searchLower)
      const descriptionMatch = command.description
        ?.toLowerCase()
        .includes(searchLower)
      const keywordMatch = command.keywords?.some((keyword) =>
        keyword.toLowerCase().includes(searchLower)
      )
      return titleMatch || descriptionMatch || keywordMatch
    })
  }, [commands, search])

  // Group commands by type
  const groupedCommands = useMemo(() => {
    const actions = filteredCommands.filter(
      (cmd) => !cmd.id.startsWith('note-') && !cmd.id.startsWith('recent-')
    )
    const recent = filteredCommands.filter((cmd) =>
      cmd.id.startsWith('recent-')
    )
    const noteItems = filteredCommands.filter((cmd) =>
      cmd.id.startsWith('note-')
    )

    return { actions, recent, notes: noteItems }
  }, [filteredCommands])

  useEffect(() => {
    if (!isOpen) {
      setSearch('')
    }
  }, [isOpen])

  return (
    <CommandDialog
      open={isOpen}
      onOpenChange={onClose}
      title='Command Palette'
      description='Quick access to commands and notes'
    >
      <CommandInput
        placeholder='Type a command or search...'
        value={search}
        onValueChange={setSearch}
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        {groupedCommands.actions.length > 0 && (
          <>
            <CommandGroup heading='Actions'>
              {groupedCommands.actions.map((command) => {
                const Icon = command.icon
                return (
                  <CommandItem key={command.id} onSelect={command.action}>
                    <Icon className='mr-2 h-4 w-4' />
                    <div className='flex-1'>
                      <div>{command.title}</div>
                      {command.description && (
                        <div className='text-sm text-muted-foreground'>
                          {command.description}
                        </div>
                      )}
                    </div>
                    {command.shortcut && (
                      <CommandShortcut>{command.shortcut}</CommandShortcut>
                    )}
                  </CommandItem>
                )
              })}
            </CommandGroup>
            <CommandSeparator />
          </>
        )}

        {groupedCommands.recent.length > 0 && (
          <>
            <CommandGroup heading='Recent'>
              {groupedCommands.recent.map((command) => {
                const Icon = command.icon
                return (
                  <CommandItem key={command.id} onSelect={command.action}>
                    <Icon className='mr-2 h-4 w-4' />
                    <div className='flex-1'>
                      <div>{command.title}</div>
                      {command.description && (
                        <div className='text-sm text-muted-foreground'>
                          {command.description}
                        </div>
                      )}
                    </div>
                  </CommandItem>
                )
              })}
            </CommandGroup>
            <CommandSeparator />
          </>
        )}

        {groupedCommands.notes.length > 0 && (
          <CommandGroup heading='Notes & Folders'>
            {groupedCommands.notes.map((command) => {
              const Icon = command.icon
              return (
                <CommandItem key={command.id} onSelect={command.action}>
                  <Icon className='mr-2 h-4 w-4' />
                  <div className='flex-1'>
                    <div>{command.title}</div>
                    {command.description && (
                      <div className='text-sm text-muted-foreground'>
                        {command.description}
                      </div>
                    )}
                  </div>
                </CommandItem>
              )
            })}
          </CommandGroup>
        )}
      </CommandList>
    </CommandDialog>
  )
}
