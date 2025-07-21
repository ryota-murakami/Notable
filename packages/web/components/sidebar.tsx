'use client'

import { useState } from 'react'
import {
  Search,
  Plus,
  Home,
  Inbox,
  Settings,
  Trash,
  File,
  Menu,
  X,
  PanelLeft,
  PanelLeftClose,
  User,
  LogOut,
  Crown,
  FolderClosed,
  FolderOpen,
  FolderPlus,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import type { Note } from '@/types/note'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { ThemeToggle } from '@/components/theme-toggle'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { NoteListSkeleton } from '@/components/loading-states'
import { EmptyState } from '@/components/empty-states'

interface SidebarProps {
  notes: Note[]
  activeNoteId: string
  onSelectNote: (id: string) => void
  onCreateNote: (parentId: string | null) => Note
  onCreateFolder: (parentId: string | null) => Note
  onDeleteNote: (id: string) => void
  onOpenSearch: () => void
  isCollapsed: boolean
  onToggleCollapse: () => void
  isMobileMenuOpen: boolean
  onToggleMobileMenu: () => void
  isLoading?: boolean
}

export function Sidebar({
  notes,
  activeNoteId,
  onSelectNote,
  onCreateNote,
  onCreateFolder,
  _onDeleteNote,
  onOpenSearch,
  isCollapsed,
  onToggleCollapse,
  isMobileMenuOpen,
  onToggleMobileMenu,
  isLoading = false,
}: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedFolders, setExpandedFolders] = useState<
    Record<string, boolean>
  >({})

  const toggleFolder = (id: string) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const filteredNotes = searchQuery
    ? notes.filter(
        (note) =>
          note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          note.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
          note.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
      )
    : notes

  const rootNotes = filteredNotes.filter((note) => !note.parentId)

  const renderNoteTree = (parentId: string | null = null, depth = 0) => {
    const children = filteredNotes.filter((note) => note.parentId === parentId)

    if (children.length === 0) return null

    return (
      <ul className={cn('space-y-0.5', depth > 0 && 'ml-4')}>
        {children.map((note) => {
          const hasChildren = filteredNotes.some((n) => n.parentId === note.id)
          const isExpanded = expandedFolders[note.id]
          const isFolder = note.isFolder || hasChildren

          return (
            <li key={note.id}>
              <div
                className={cn(
                  'flex items-center py-1.5 px-2 rounded-md text-sm group transition-all duration-200',
                  activeNoteId === note.id
                    ? 'bg-accent text-accent-foreground shadow-sm'
                    : 'hover:bg-accent/50',
                  isFolder && 'font-medium',
                )}
              >
                {/* Folder/File Icon */}
                <div className="flex items-center mr-2">
                  {isFolder ? (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-4 w-4 p-0 hover:bg-transparent"
                      onClick={() => toggleFolder(note.id)}
                    >
                      {isExpanded ? (
                        <FolderOpen className="h-4 w-4 text-blue-500" />
                      ) : (
                        <FolderClosed className="h-4 w-4 text-blue-500" />
                      )}
                    </Button>
                  ) : (
                    <File className="h-4 w-4 text-gray-500" />
                  )}
                </div>

                {/* Note Title */}
                <span
                  className={cn(
                    'flex-1 truncate cursor-pointer transition-colors',
                    isFolder && 'text-blue-700 dark:text-blue-300',
                  )}
                  onClick={() => onSelectNote(note.id)}
                >
                  {note.title || (isFolder ? 'Untitled Folder' : 'Untitled')}
                </span>

                {/* Actions */}
                <div className="flex opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-5 w-5 p-0 hover:bg-accent"
                    onClick={() => onCreateNote(note.id)}
                    title={isFolder ? 'Add note to folder' : 'Add sub-note'}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              {/* Nested Children */}
              {(isFolder || hasChildren) && isExpanded && (
                <div className="ml-2 border-l border-border/50 pl-2 mt-1">
                  {renderNoteTree(note.id, depth + 1)}
                </div>
              )}
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleMobileMenu}
          className="h-8 w-8"
        >
          {isMobileMenuOpen ? (
            <X className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onToggleMobileMenu}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          'flex flex-col h-full border-r bg-background z-50 transition-all duration-300',
          // Desktop behavior
          'hidden md:flex',
          isCollapsed ? 'w-16' : 'w-64',
          // Mobile behavior
          'md:relative md:translate-x-0',
          isMobileMenuOpen
            ? 'fixed inset-y-0 left-0 w-64 flex translate-x-0'
            : 'fixed inset-y-0 left-0 w-64 -translate-x-full',
        )}
      >
        {/* Header */}
        <div className={cn('p-4 border-b', isCollapsed && 'p-2')}>
          <div className="flex items-center mb-4">
            {!isCollapsed && (
              <span className="font-semibold text-lg">Notable</span>
            )}
            <div className="ml-auto flex items-center gap-1">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={onOpenSearch}
                    >
                      <Search className="h-4 w-4" />
                      <span className="sr-only">Search</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="flex items-center">
                      Search{' '}
                      <kbd className="ml-2 px-1.5 py-0.5 text-xs border rounded-md bg-muted">
                        Ctrl+K
                      </kbd>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hidden md:flex h-8 w-8"
                      onClick={onToggleCollapse}
                    >
                      {isCollapsed ? (
                        <PanelLeft className="h-4 w-4" />
                      ) : (
                        <PanelLeftClose className="h-4 w-4" />
                      )}
                      <span className="sr-only">Toggle sidebar</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    {isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          {!isCollapsed && (
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Filter"
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          )}
        </div>

        {/* New Note/Folder Button */}
        <div className={cn('p-2', isCollapsed && 'p-1')}>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                {isCollapsed ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-center px-2"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuItem onClick={() => onCreateNote(null)}>
                        <File className="mr-2 h-4 w-4" />
                        New Note
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => onCreateFolder(null)}>
                        <FolderPlus className="mr-2 h-4 w-4" />
                        New Folder
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Create New
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-48">
                      <DropdownMenuItem onClick={() => onCreateNote(null)}>
                        <File className="mr-2 h-4 w-4" />
                        New Note
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => onCreateFolder(null)}>
                        <FolderPlus className="mr-2 h-4 w-4" />
                        New Folder
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </TooltipTrigger>
              {isCollapsed && <TooltipContent>Create New</TooltipContent>}
            </Tooltip>
          </TooltipProvider>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-auto">
          <div className={cn('px-3 py-2', isCollapsed && 'px-1')}>
            <div className="space-y-1">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        'w-full',
                        isCollapsed ? 'justify-center px-2' : 'justify-start',
                      )}
                    >
                      <Home className={cn('h-4 w-4', !isCollapsed && 'mr-2')} />
                      {!isCollapsed && 'Home'}
                    </Button>
                  </TooltipTrigger>
                  {isCollapsed && <TooltipContent>Home</TooltipContent>}
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        'w-full',
                        isCollapsed ? 'justify-center px-2' : 'justify-start',
                      )}
                    >
                      <Inbox
                        className={cn('h-4 w-4', !isCollapsed && 'mr-2')}
                      />
                      {!isCollapsed && 'Inbox'}
                    </Button>
                  </TooltipTrigger>
                  {isCollapsed && <TooltipContent>Inbox</TooltipContent>}
                </Tooltip>
              </TooltipProvider>
            </div>

            {!isCollapsed && (
              <div className="mt-6">
                <h2 className="mb-2 px-2 text-xs font-semibold text-muted-foreground">
                  Notes
                </h2>
                <ScrollArea className="h-[calc(100vh-240px)]">
                  {isLoading ? (
                    <NoteListSkeleton />
                  ) : rootNotes.length === 0 ? (
                    searchQuery.trim() === '' ? (
                      <EmptyState
                        title="No notes"
                        description="Create your first note to get started"
                        icon={
                          <File className="h-6 w-6 text-muted-foreground" />
                        }
                        action={{
                          label: 'Create note',
                          onClick: () => onCreateNote(null),
                          variant: 'default',
                        }}
                        className="py-8"
                      />
                    ) : (
                      <EmptyState
                        title="No matches"
                        description={`No notes found for "${searchQuery}"`}
                        icon={
                          <Search className="h-6 w-6 text-muted-foreground" />
                        }
                        action={{
                          label: 'Clear filter',
                          onClick: () => setSearchQuery(''),
                          variant: 'outline',
                        }}
                        className="py-8"
                      />
                    )
                  ) : (
                    renderNoteTree(null)
                  )}
                </ScrollArea>
              </div>
            )}
          </div>
        </nav>

        {/* User Profile Section */}
        <div className={cn('p-2 border-t', isCollapsed && 'p-1')}>
          {isCollapsed ? (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="w-full justify-center px-2"
                      >
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="/placeholder-user.jpg" alt="User" />
                          <AvatarFallback>
                            <User className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                      <DropdownMenuLabel>
                        <div className="flex items-center space-x-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage
                              src="/placeholder-user.jpg"
                              alt="User"
                            />
                            <AvatarFallback>
                              <User className="h-4 w-4" />
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">John Doe</p>
                            <p className="text-xs text-muted-foreground">
                              Premium User
                            </p>
                          </div>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Crown className="mr-2 h-4 w-4" />
                        Upgrade Plan
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <LogOut className="mr-2 h-4 w-4" />
                        Sign Out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TooltipTrigger>
                <TooltipContent>User Profile</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-start p-2 h-auto"
                >
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder-user.jpg" alt="User" />
                      <AvatarFallback>
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 text-left">
                      <p className="text-sm font-medium">John Doe</p>
                      <p className="text-xs text-muted-foreground">
                        Premium User
                      </p>
                    </div>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder-user.jpg" alt="User" />
                      <AvatarFallback>
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">John Doe</p>
                      <p className="text-xs text-muted-foreground">
                        john.doe@example.com
                      </p>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Crown className="mr-2 h-4 w-4" />
                  Upgrade Plan
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>

        {/* Footer */}
        <div className={cn('p-2 border-t', isCollapsed && 'p-1')}>
          <div className="space-y-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      'w-full',
                      isCollapsed ? 'justify-center px-2' : 'justify-start',
                    )}
                  >
                    <Trash className={cn('h-4 w-4', !isCollapsed && 'mr-2')} />
                    {!isCollapsed && 'Trash'}
                  </Button>
                </TooltipTrigger>
                {isCollapsed && <TooltipContent>Trash</TooltipContent>}
              </Tooltip>
            </TooltipProvider>
            {!isCollapsed && (
              <div className="flex items-center justify-between px-2 py-1">
                <span className="text-xs text-muted-foreground">Theme</span>
                <ThemeToggle />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
