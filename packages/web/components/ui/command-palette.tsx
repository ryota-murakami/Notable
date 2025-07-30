'use client'

import * as React from 'react'
import * as CommandPrimitive from 'cmdk'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog'

const Command = CommandPrimitive.Command
const CommandEmpty = CommandPrimitive.CommandEmpty
const CommandGroup = CommandPrimitive.CommandGroup
const CommandInput = CommandPrimitive.CommandInput
const CommandItem = CommandPrimitive.CommandItem
const CommandList = CommandPrimitive.CommandList
const CommandSeparator = CommandPrimitive.CommandSeparator
import { cn } from '../../lib/utils'
import {
  CalendarIcon,
  ClockIcon,
  CopyIcon,
  DownloadIcon,
  EditIcon,
  FileIcon,
  FileTextIcon,
  FilterIcon,
  FolderIcon,
  KeyboardIcon,
  MonitorIcon,
  MoonIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  StarIcon,
  SunIcon,
  TagIcon,
  TrashIcon,
  UserIcon,
} from 'lucide-react'
import { useSearch, useSearchHistory } from '../../lib/search'
import { useServerSearch } from '@/hooks/use-server-search'
import { useSearchHistory as useServerSearchHistory } from '@/hooks/use-search-history'
import type { SearchableNote, SearchResult } from '../../lib/search/types'

export interface CommandAction {
  id: string
  title: string
  description?: string
  icon?: React.ReactNode
  keywords?: string[]
  onSelect: () => void
  group?: string
}

interface CommandPaletteProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  actions?: CommandAction[]
  className?: string
}

export function CommandPalette({
  open,
  onOpenChange,
  actions = [],
  className,
}: CommandPaletteProps) {
  const [search, setSearch] = React.useState('')

  // Note: Keyboard shortcuts are handled by the global keyboard shortcuts system
  // in the Shell component. This prevents conflicts and centralizes shortcut management.

  const handleSelect = React.useCallback(
    (action: CommandAction) => {
      onOpenChange(false)
      action.onSelect()
      setSearch('')
    },
    [onOpenChange]
  )

  // Group actions by category
  const groupedActions = React.useMemo(() => {
    const groups: Record<string, CommandAction[]> = {}

    actions.forEach((action) => {
      const group = action.group || 'General'
      if (!groups[group]) {
        groups[group] = []
      }
      groups[group].push(action)
    })

    return groups
  }, [actions])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={cn('max-w-2xl p-0', className)}>
        <DialogTitle className='sr-only'>Command Palette</DialogTitle>
        <DialogDescription className='sr-only'>
          Search for commands and actions
        </DialogDescription>
        <Command className='rounded-lg border-0 shadow-none'>
          <CommandInput
            placeholder='Type a command or search...'
            value={search}
            onValueChange={setSearch}
            className='border-0'
          />
          <CommandList className='max-h-96'>
            <CommandEmpty>No results found.</CommandEmpty>

            {Object.entries(groupedActions).map(
              ([groupName, groupActions], index) => (
                <React.Fragment key={groupName}>
                  {index > 0 && <CommandSeparator />}
                  <CommandGroup heading={groupName}>
                    {groupActions.map((action) => (
                      <CommandItem
                        key={action.id}
                        onSelect={() => handleSelect(action)}
                        className='flex items-center gap-3 px-3 py-2 text-sm cursor-pointer'
                      >
                        {action.icon && (
                          <span className='flex-shrink-0 text-muted-foreground'>
                            {action.icon}
                          </span>
                        )}
                        <div className='flex-1 min-w-0'>
                          <div className='font-medium'>{action.title}</div>
                          {action.description && (
                            <div className='text-xs text-muted-foreground truncate'>
                              {action.description}
                            </div>
                          )}
                        </div>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </React.Fragment>
              )
            )}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  )
}

// Pre-built command palette with default Notable actions
export function NotableCommandPalette({
  open,
  onOpenChange,
  onNewNote,
  onSearch,
  onSettings,
  onToggleTheme,
  onShowKeyboardShortcuts,
  onExportNote,
  onCopyNote,
  onDeleteNote,
  onEditNote,
  onAddTag,
  onManageTags,
  onFilterByTag,
  onCreateTag,
  currentTheme = 'light',
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  onNewNote?: () => void
  onSearch?: () => void
  onSettings?: () => void
  onToggleTheme?: () => void
  onShowKeyboardShortcuts?: () => void
  onExportNote?: () => void
  onCopyNote?: () => void
  onDeleteNote?: () => void
  onEditNote?: () => void
  onAddTag?: () => void
  onManageTags?: () => void
  onFilterByTag?: () => void
  onCreateTag?: () => void
  currentTheme?: 'light' | 'dark' | 'system'
}) {
  const defaultActions: CommandAction[] = [
    // File actions
    {
      id: 'new-note',
      title: 'New Note',
      description: 'Create a new note',
      icon: <PlusIcon className='h-4 w-4' />,
      keywords: ['create', 'add', 'new', 'note'],
      onSelect: () => onNewNote?.(),
      group: 'File',
    },
    {
      id: 'search',
      title: 'Search Notes',
      description: 'Search through all your notes',
      icon: <SearchIcon className='h-4 w-4' />,
      keywords: ['find', 'search', 'lookup'],
      onSelect: () => onSearch?.(),
      group: 'Navigation',
    },

    // Current note actions
    ...(onEditNote
      ? [
          {
            id: 'edit-note',
            title: 'Edit Current Note',
            description: 'Switch to edit mode',
            icon: <EditIcon className='h-4 w-4' />,
            keywords: ['edit', 'modify', 'change'],
            onSelect: () => onEditNote(),
            group: 'Current Note',
          },
        ]
      : []),
    ...(onCopyNote
      ? [
          {
            id: 'copy-note',
            title: 'Copy Note',
            description: 'Copy note content to clipboard',
            icon: <CopyIcon className='h-4 w-4' />,
            keywords: ['copy', 'clipboard', 'duplicate'],
            onSelect: () => onCopyNote(),
            group: 'Current Note',
          },
        ]
      : []),
    ...(onExportNote
      ? [
          {
            id: 'export-note',
            title: 'Export Note',
            description: 'Export note as markdown, PDF, or HTML',
            icon: <DownloadIcon className='h-4 w-4' />,
            keywords: ['export', 'download', 'save', 'pdf', 'markdown'],
            onSelect: () => onExportNote(),
            group: 'Current Note',
          },
        ]
      : []),
    ...(onDeleteNote
      ? [
          {
            id: 'delete-note',
            title: 'Delete Current Note',
            description: 'Permanently delete this note',
            icon: <TrashIcon className='h-4 w-4' />,
            keywords: ['delete', 'remove', 'trash'],
            onSelect: () => onDeleteNote(),
            group: 'Current Note',
          },
        ]
      : []),

    // Tag actions
    ...(onAddTag
      ? [
          {
            id: 'add-tag',
            title: 'Add Tag to Current Note',
            description: 'Add tags to organize the current note',
            icon: <TagIcon className='h-4 w-4' />,
            keywords: ['tag', 'add', 'organize', 'label'],
            onSelect: () => onAddTag(),
            group: 'Tags',
          },
        ]
      : []),
    ...(onCreateTag
      ? [
          {
            id: 'create-tag',
            title: 'Create New Tag',
            description: 'Create a new tag for organizing notes',
            icon: <PlusIcon className='h-4 w-4' />,
            keywords: ['tag', 'create', 'new', 'organize'],
            onSelect: () => onCreateTag(),
            group: 'Tags',
          },
        ]
      : []),
    ...(onManageTags
      ? [
          {
            id: 'manage-tags',
            title: 'Manage Tags',
            description: 'View and organize all your tags',
            icon: <TagIcon className='h-4 w-4' />,
            keywords: ['tag', 'manage', 'organize', 'view'],
            onSelect: () => onManageTags(),
            group: 'Tags',
          },
        ]
      : []),
    ...(onFilterByTag
      ? [
          {
            id: 'filter-by-tag',
            title: 'Filter Notes by Tag',
            description: 'Show only notes with specific tags',
            icon: <FilterIcon className='h-4 w-4' />,
            keywords: ['tag', 'filter', 'search', 'organize'],
            onSelect: () => onFilterByTag(),
            group: 'Tags',
          },
        ]
      : []),

    // View actions
    {
      id: 'toggle-theme',
      title: `Switch Theme`,
      description: 'Toggle between light, dark, and system themes',
      icon:
        currentTheme === 'light' ? (
          <MoonIcon className='h-4 w-4' />
        ) : currentTheme === 'dark' ? (
          <SunIcon className='h-4 w-4' />
        ) : (
          <MonitorIcon className='h-4 w-4' />
        ),
      keywords: ['theme', 'dark', 'light', 'system', 'appearance'],
      onSelect: () => onToggleTheme?.(),
      group: 'View',
    },

    // Help actions
    {
      id: 'keyboard-shortcuts',
      title: 'Keyboard Shortcuts',
      description: 'View all available keyboard shortcuts',
      icon: <KeyboardIcon className='h-4 w-4' />,
      keywords: ['shortcuts', 'hotkeys', 'keyboard', 'help'],
      onSelect: () => onShowKeyboardShortcuts?.(),
      group: 'Help',
    },
    {
      id: 'settings',
      title: 'Settings',
      description: 'Open application settings',
      icon: <SettingsIcon className='h-4 w-4' />,
      keywords: ['settings', 'preferences', 'config'],
      onSelect: () => onSettings?.(),
      group: 'General',
    },
  ]

  return (
    <CommandPalette
      open={open}
      onOpenChange={onOpenChange}
      actions={defaultActions}
    />
  )
}

// Hook for managing command palette state
export function useCommandPalette() {
  const [open, setOpen] = React.useState(false)

  const toggle = React.useCallback(() => {
    setOpen((prev) => !prev)
  }, [])

  const close = React.useCallback(() => {
    setOpen(false)
  }, [])

  const show = React.useCallback(() => {
    setOpen(true)
  }, [])

  return {
    open,
    toggle,
    close,
    show,
    setOpen,
  }
}

// Enhanced Command Palette with Advanced Search Integration
export interface SearchCommandPaletteProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  notes: SearchableNote[]
  onNoteSelect?: (note: SearchableNote) => void
  onNewNote?: () => void
  onSettings?: () => void
  onToggleTheme?: () => void
  onShowKeyboardShortcuts?: () => void
  currentTheme?: 'light' | 'dark' | 'system'
  className?: string
}

export function SearchCommandPalette({
  open,
  onOpenChange,
  notes = [],
  onNoteSelect,
  onNewNote,
  onSettings,
  onToggleTheme,
  onShowKeyboardShortcuts,
  currentTheme = 'light',
  className,
}: SearchCommandPaletteProps) {
  const [mode, setMode] = React.useState<'command' | 'search' | 'history'>(
    'command'
  )
  const [selectedResult, setSelectedResult] =
    React.useState<SearchResult | null>(null)
  const [mounted, setMounted] = React.useState(false)

  // Only initialize search hooks on client side
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Use server-side search for better performance and features
  const search = useServerSearch({
    limit: 50,
    debounceMs: 200,
  })

  const searchHistory = useServerSearchHistory({
    limit: 50,
  })

  // Handle modal navigation shortcuts (Escape, /, Ctrl+H)
  // Note: Cmd+K is handled by the global keyboard shortcuts system
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (open) {
        if (e.key === 'Escape') {
          if (mode === 'search' || mode === 'history') {
            setMode('command')
          } else {
            onOpenChange(false)
          }
        }

        if (e.key === '/' && mode === 'command') {
          e.preventDefault()
          setMode('search')
        }

        if (e.key === 'h' && e.ctrlKey && mode === 'command') {
          e.preventDefault()
          setMode('history')
        }
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [open, onOpenChange, mode])

  // Reset to command mode when opening
  React.useEffect(() => {
    if (open) {
      setMode('command')
      setSelectedResult(null)
    }
  }, [open])

  const handleSearchSelect = React.useCallback(
    (result: SearchResult) => {
      // Search history is automatically saved by the server search hook
      onNoteSelect?.(result.note)
      onOpenChange(false)
    },
    [onNoteSelect, onOpenChange]
  )

  const handleHistorySelect = React.useCallback(
    (query: string) => {
      search.search(query)
      setMode('search')
    },
    [search]
  )

  const renderCommandMode = () => {
    const commands: CommandAction[] = [
      {
        id: 'new-note',
        title: 'New Note',
        description: 'Create a new note',
        icon: <PlusIcon className='h-4 w-4' />,
        keywords: ['create', 'add', 'new', 'note'],
        onSelect: () => onNewNote?.(),
        group: 'File',
      },
      {
        id: 'search-notes',
        title: 'Search Notes',
        description: 'Search through all your notes with advanced filters',
        icon: <SearchIcon className='h-4 w-4' />,
        keywords: ['find', 'search', 'lookup'],
        onSelect: () => setMode('search'),
        group: 'Navigation',
      },
      {
        id: 'search-history',
        title: 'Search History',
        description: 'View your recent searches',
        icon: <ClockIcon className='h-4 w-4' />,
        keywords: ['history', 'recent', 'past'],
        onSelect: () => setMode('history'),
        group: 'Navigation',
      },
      {
        id: 'toggle-theme',
        title: 'Switch Theme',
        description: 'Toggle between light, dark, and system themes',
        icon:
          currentTheme === 'light' ? (
            <MoonIcon className='h-4 w-4' />
          ) : currentTheme === 'dark' ? (
            <SunIcon className='h-4 w-4' />
          ) : (
            <MonitorIcon className='h-4 w-4' />
          ),
        keywords: ['theme', 'dark', 'light', 'system', 'appearance'],
        onSelect: () => onToggleTheme?.(),
        group: 'View',
      },
      {
        id: 'keyboard-shortcuts',
        title: 'Keyboard Shortcuts',
        description: 'View all available keyboard shortcuts',
        icon: <KeyboardIcon className='h-4 w-4' />,
        keywords: ['shortcuts', 'hotkeys', 'keyboard', 'help'],
        onSelect: () => onShowKeyboardShortcuts?.(),
        group: 'Help',
      },
      {
        id: 'settings',
        title: 'Settings',
        description: 'Open application settings',
        icon: <SettingsIcon className='h-4 w-4' />,
        keywords: ['settings', 'preferences', 'config'],
        onSelect: () => onSettings?.(),
        group: 'General',
      },
    ]

    const groupedCommands = commands.reduce(
      (groups, command) => {
        const group = command.group || 'General'
        if (!groups[group]) groups[group] = []
        groups[group].push(command)
        return groups
      },
      {} as Record<string, CommandAction[]>
    )

    return (
      <>
        <CommandInput
          placeholder='Type a command or press / to search notes...'
          className='border-0'
        />
        <CommandList className='max-h-96'>
          <CommandEmpty>No commands found.</CommandEmpty>

          {Object.entries(groupedCommands).map(
            ([groupName, groupCommands], index) => (
              <React.Fragment key={groupName}>
                {index > 0 && <CommandSeparator />}
                <CommandGroup heading={groupName}>
                  {groupCommands.map((command) => (
                    <CommandItem
                      key={command.id}
                      onSelect={() => {
                        onOpenChange(false)
                        command.onSelect()
                      }}
                      className='flex items-center gap-3 px-3 py-2 text-sm cursor-pointer'
                    >
                      {command.icon && (
                        <span className='flex-shrink-0 text-muted-foreground'>
                          {command.icon}
                        </span>
                      )}
                      <div className='flex-1 min-w-0'>
                        <div className='font-medium'>{command.title}</div>
                        {command.description && (
                          <div className='text-xs text-muted-foreground truncate'>
                            {command.description}
                          </div>
                        )}
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </React.Fragment>
            )
          )}
        </CommandList>
      </>
    )
  }

  const renderSearchMode = () => {
    // Enhanced search mode using server-side search
    return (
      <>
        <CommandInput
          placeholder='Search notes... (ESC to go back)'
          value={search.query}
          onValueChange={(value) => search.search(value)}
          className='border-0'
        />
        <CommandList className='max-h-96'>
          {search.isSearching && (
            <div className='p-4 text-center text-sm text-muted-foreground'>
              <div className='flex items-center justify-center gap-2'>
                <span className='animate-spin'>⏳</span>
                Searching...
              </div>
            </div>
          )}

          {!search.isSearching &&
            search.results.length === 0 &&
            search.hasSearched && (
              <CommandEmpty>
                <div className='text-center py-4'>
                  <SearchIcon className='h-8 w-8 mx-auto opacity-50 mb-2' />
                  <div>No notes found matching "{search.query}"</div>
                  <div className='text-xs text-muted-foreground mt-1'>
                    Try different keywords or check your filters
                  </div>
                </div>
              </CommandEmpty>
            )}

          {!search.hasSearched && !search.query.trim() && (
            <div className='p-4 text-center text-sm text-muted-foreground'>
              <div className='flex flex-col gap-2'>
                <SearchIcon className='h-8 w-8 mx-auto opacity-50' />
                <div>Start typing to search your notes</div>
                <div className='text-xs'>
                  Search titles, content, and tags with advanced filtering
                </div>
              </div>
            </div>
          )}

          {search.results.length > 0 && (
            <>
              <div className='px-3 py-2 border-b text-xs text-muted-foreground'>
                Found {search.results.length} notes
                {search.stats && (
                  <span className='ml-2'>• {search.stats.searchTime}ms</span>
                )}
              </div>

              <CommandGroup heading='Search Results'>
                {search.results.map((result) => (
                  <CommandItem
                    key={result.note.id}
                    onSelect={() => handleSearchSelect(result)}
                    className='flex items-start gap-3 px-3 py-3 text-sm cursor-pointer'
                  >
                    <span className='flex-shrink-0 text-muted-foreground mt-0.5'>
                      {result.note.isFolder ? (
                        <FolderIcon className='h-4 w-4' />
                      ) : (
                        <FileTextIcon className='h-4 w-4' />
                      )}
                    </span>
                    <div className='flex-1 min-w-0'>
                      <div className='font-medium truncate'>
                        {result.note.title}
                      </div>
                      {result.snippet && (
                        <div className='text-xs text-muted-foreground mt-1 line-clamp-2'>
                          {result.snippet.replace(/<[^>]*>/g, '')}
                        </div>
                      )}
                      <div className='flex items-center gap-2 mt-2'>
                        <div className='text-xs text-muted-foreground'>
                          {new Date(result.note.updated_at).toLocaleDateString(
                            'en-US',
                            {
                              month: 'short',
                              day: 'numeric',
                            }
                          )}
                        </div>
                        {result.note.tags.length > 0 && (
                          <div className='flex items-center gap-1'>
                            <TagIcon className='h-3 w-3 text-muted-foreground' />
                            <div className='text-xs text-muted-foreground'>
                              {result.note.tags.slice(0, 2).join(', ')}
                              {result.note.tags.length > 2 && (
                                <span> +{result.note.tags.length - 2}</span>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='text-xs text-muted-foreground'>
                      {Math.round(result.score * 100)}%
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>

              {search.hasActiveFilters && (
                <div className='px-3 py-2 text-xs text-muted-foreground border-t'>
                  Active filters: {search.filterSummary.join(', ')}
                </div>
              )}
            </>
          )}
        </CommandList>
      </>
    )
  }

  const renderHistoryMode = () => {
    const recentSearches = searchHistory.getRecentSearches(10)
    const suggestions = searchHistory.getSearchSuggestions('', 5)

    return (
      <>
        <CommandInput
          placeholder='Search history... (ESC to go back)'
          className='border-0'
        />
        <CommandList className='max-h-96'>
          {recentSearches.length === 0 && (
            <CommandEmpty>No search history found.</CommandEmpty>
          )}

          {suggestions.length > 0 && (
            <CommandGroup heading='Suggestions'>
              {suggestions.map((suggestion, index) => (
                <CommandItem
                  key={`suggestion-${index}`}
                  onSelect={() => handleHistorySelect(suggestion.query)}
                  className='flex items-center gap-3 px-3 py-2 text-sm cursor-pointer'
                >
                  <StarIcon className='h-4 w-4 text-muted-foreground' />
                  <div className='flex-1'>
                    <div className='font-medium'>{suggestion.query}</div>
                    <div className='text-xs text-muted-foreground'>
                      Used {suggestion.count} times • Avg{' '}
                      {suggestion.avgResultCount} results
                    </div>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}

          {recentSearches.length > 0 && (
            <>
              {suggestions.length > 0 && <CommandSeparator />}
              <CommandGroup heading='Recent Searches'>
                {recentSearches.map((entry) => (
                  <CommandItem
                    key={entry.id}
                    onSelect={() => handleHistorySelect(entry.query)}
                    className='flex items-center gap-3 px-3 py-2 text-sm cursor-pointer'
                  >
                    <ClockIcon className='h-4 w-4 text-muted-foreground' />
                    <div className='flex-1'>
                      <div className='font-medium'>{entry.query}</div>
                      <div className='text-xs text-muted-foreground'>
                        {entry.results_count} results •{' '}
                        {new Date(entry.created_at).toLocaleDateString('en-US')}
                      </div>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </>
          )}
        </CommandList>
      </>
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={cn('max-w-2xl p-0', className)}>
        <DialogTitle className='sr-only'>Search Command Palette</DialogTitle>
        <DialogDescription className='sr-only'>
          Search through notes and commands with advanced filtering
        </DialogDescription>
        <Command className='rounded-lg border-0 shadow-none'>
          {mode === 'command' && renderCommandMode()}
          {mode === 'search' && renderSearchMode()}
          {mode === 'history' && renderHistoryMode()}

          {/* Status bar */}
          <div className='flex items-center justify-between px-3 py-2 text-xs text-muted-foreground border-t bg-muted/50'>
            <div className='flex items-center gap-4'>
              <span>⌘K to toggle</span>
              <span>/ for search</span>
              <span>⌃H for history</span>
            </div>
            <div className='flex items-center gap-2'>
              {mode === 'search' && search.stats && (
                <span>{search.stats.searchTime.toFixed(0)}ms</span>
              )}
              <span>{notes.length} notes indexed</span>
            </div>
          </div>
        </Command>
      </DialogContent>
    </Dialog>
  )
}
