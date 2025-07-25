'use client'

import { useCallback, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { Sidebar } from '@/components/sidebar'
import type { Note } from '@/types/note'
import { useKeyboardShortcuts } from '@/hooks/use-keyboard-shortcuts'
// Dynamically import heavy components for better code splitting
const CommandPalette = dynamic(
  () =>
    import('@/components/command-palette').then((mod) => ({
      default: mod.CommandPalette,
    })),
  { ssr: false }
)

const KeyboardShortcutsDialog = dynamic(
  () =>
    import('@/components/keyboard-shortcuts-dialog').then((mod) => ({
      default: mod.KeyboardShortcutsDialog,
    })),
  { ssr: false }
)

// Dynamic import for PlateEditorComponent to prevent SSR issues
const PlateEditorComponent = dynamic(
  () =>
    import('@/components/plate-editor').then((mod) => ({
      default: mod.PlateEditorComponent,
    })),
  {
    ssr: false,
    loading: () => (
      <div className='flex-1 min-h-0 p-4'>
        <div className='animate-pulse bg-muted h-64 rounded-md' />
      </div>
    ),
  }
)
import { useSupabaseNotes } from '@/hooks/use-supabase-notes'
import { useSupabase } from '@/components/supabase-provider'
// Dynamic import for search dialog
const AdvancedSearchDialog = dynamic(
  () =>
    import('@/components/advanced-search-dialog').then((mod) => ({
      default: mod.AdvancedSearchDialog,
    })),
  { ssr: false }
)
import { useToast } from '@/hooks/use-toast'
import { WelcomeScreen } from '@/components/welcome-screen'
import { Breadcrumb } from '@/components/breadcrumb'
import {
  EditorSkeleton,
  LoadingSpinner,
  SidebarSkeleton,
} from '@/components/loading-states'
import { ViewModeRenderer } from '@/components/view-mode-renderer'
import { ModeToggle } from '@/components/mode-toggle'
import { Badge } from '@/components/ui/badge'
import { CheckSquare, UserCheck, Users } from 'lucide-react'
// Dynamic import for bulk operations
const BulkOperationsToolbar = dynamic(
  () =>
    import('@/components/bulk-operations-toolbar').then((mod) => ({
      default: mod.BulkOperationsToolbar,
    })),
  { ssr: false }
)
import { type ExportFormat, useExport } from '@/hooks/use-export'
import { Button } from '@/components/ui/button'
import { OfflineStatus } from '@/components/offline-status'
// Dynamic import for conflict resolution
const ConflictResolutionDialog = dynamic(
  () =>
    import('@/components/conflict-resolution-dialog').then((mod) => ({
      default: mod.ConflictResolutionDialog,
    })),
  { ssr: false }
)
import { useUrlSync } from '@/hooks/use-url-sync'
import { RoutePrefetcher } from '@/components/route-prefetcher'

interface ShellProps {
  initialNoteId?: string
}

export function Shell({ initialNoteId }: ShellProps = {}) {
  const router = useRouter()
  const [activeNoteId, setActiveNoteId] = useState<string>(initialNoteId || '')
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false)
  const [isKeyboardShortcutsOpen, setIsKeyboardShortcutsOpen] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isEditorLoading, setIsEditorLoading] = useState(false)
  const [isViewMode, setIsViewMode] = useState(false)
  const [isMultiSelectMode, setIsMultiSelectMode] = useState(false)
  const [selectedNoteIds, setSelectedNoteIds] = useState<Set<string>>(new Set())
  const [showHiddenNotes, setShowHiddenNotes] = useState(false)
  const { toast } = useToast()
  const { loading: authLoading } = useSupabase()
  const { exportNote, isExporting } = useExport()

  // Use Supabase notes hook with real-time sync
  const {
    notes,
    isLoading,
    isSaving,
    error,
    createNote,
    createFolder,
    updateFolder,
    moveNote,
    saveNote,
    deleteNote,
    loadNotes: _loadNotes,
    // Real-time sync state
    connectionError,
    onlineUsers,
    typingUsers,
    startTyping,
    stopTyping,
  } = useSupabaseNotes({ activeNoteId, includeHidden: showHiddenNotes })

  const activeNote = notes.find((note) => note.id === activeNoteId) || notes[0]
  const folders = notes.filter((note) => note.isFolder)

  // URL synchronization for deep linking
  const { navigateToNote } = useUrlSync({
    activeNoteId,
    onNavigateToNote: setActiveNoteId,
  })

  // Set initial active note when notes load
  useEffect(() => {
    if (notes.length > 0 && !activeNoteId && notes[0]) {
      setActiveNoteId(notes[0].id)
    }
  }, [notes, activeNoteId])

  // Navigate between notes using keyboard
  const navigateToAdjacentNote = useCallback(
    (direction: 'next' | 'previous') => {
      const currentIndex = notes.findIndex((note) => note.id === activeNoteId)
      if (currentIndex === -1) return

      let newIndex: number
      if (direction === 'next') {
        newIndex = currentIndex + 1 >= notes.length ? 0 : currentIndex + 1
      } else {
        newIndex = currentIndex - 1 < 0 ? notes.length - 1 : currentIndex - 1
      }

      const targetNote = notes[newIndex]
      if (targetNote) {
        navigateToNote(targetNote.id)
      }
    },
    [notes, activeNoteId, navigateToNote]
  )

  // Show error toast if there's a connection error
  useEffect(() => {
    if (connectionError) {
      toast({
        title: 'Connection Error',
        description: connectionError,
        variant: 'destructive',
      })
    }
  }, [connectionError, toast])

  // Show error toast if there's a general error
  useEffect(() => {
    if (error) {
      toast({
        title: 'Error',
        description: error,
        variant: 'destructive',
      })
    }
  }, [error, toast])

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNoteChange = async (updatedNote: Note) => {
    // Save to Supabase
    const success = await saveNote(updatedNote)
    if (success) {
      // Start typing indicator for real-time sync
      startTyping()

      // Stop typing after a delay
      setTimeout(() => {
        stopTyping()
      }, 1000)
    }
  }

  const handleExportNote = (_note: Note, format: string) => {
    // TODO: Implement export functionality
    toast({
      title: 'Export feature',
      description: `Export to ${format} will be implemented soon.`,
    })
  }

  const handleCreateNote = useCallback(
    async (parentId: string | null = null) => {
      setIsEditorLoading(true)
      let newNote: Note | null = null

      try {
        newNote = await createNote(parentId)
        if (newNote) {
          navigateToNote(newNote.id)
          toast({
            title: 'Note created',
            description: 'Your new note has been created successfully.',
          })
        }
      } catch {
        toast({
          title: 'Error',
          description: 'Failed to create note. Please try again.',
          variant: 'destructive',
        })
      } finally {
        setIsEditorLoading(false)
      }
      return newNote
    },
    [createNote, navigateToNote, toast]
  )

  const handleCreateFolder = async (parentId: string | null = null) => {
    let newFolder: Note | null = null
    try {
      newFolder = await createFolder(parentId)
      if (newFolder) {
        navigateToNote(newFolder.id)
        toast({
          title: 'Folder created',
          description: 'Your new folder has been created successfully.',
        })
      }
    } catch {
      toast({
        title: 'Error',
        description: 'Failed to create folder. Please try again.',
        variant: 'destructive',
      })
    }
    return newFolder
  }

  const handleDeleteNote = useCallback(
    async (id: string): Promise<boolean> => {
      try {
        // Delete all children recursively
        const idsToDelete = [id]
        const findChildren = (parentId: string) => {
          notes.forEach((note) => {
            if (note.parentId === parentId) {
              idsToDelete.push(note.id)
              findChildren(note.id)
            }
          })
        }

        findChildren(id)

        // Delete all notes
        for (const noteId of idsToDelete) {
          await deleteNote(noteId)
        }

        // Update active note if necessary
        if (activeNoteId === id) {
          const remainingNotes = notes.filter(
            (note) => !idsToDelete.includes(note.id)
          )
          navigateToNote(remainingNotes[0]?.id || '')
        }

        toast({
          title: 'Note deleted',
          description: 'Your note has been deleted successfully.',
          variant: 'destructive',
        })
        return true
      } catch {
        toast({
          title: 'Error',
          description: 'Failed to delete note. Please try again.',
          variant: 'destructive',
        })
        return false
      }
    },
    [notes, deleteNote, activeNoteId, navigateToNote, toast]
  )

  // Multi-select handlers
  const toggleNoteSelection = useCallback((noteId: string) => {
    setSelectedNoteIds((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(noteId)) {
        newSet.delete(noteId)
      } else {
        newSet.add(noteId)
      }
      return newSet
    })
  }, [])

  const selectAllNotes = useCallback(() => {
    const allNoteIds = notes
      .filter((note) => !note.isFolder)
      .map((note) => note.id)
    setSelectedNoteIds(new Set(allNoteIds))
  }, [notes])

  const clearSelection = useCallback(() => {
    setSelectedNoteIds(new Set())
  }, [])

  // Bulk operation handlers
  const handleBulkDelete = useCallback(async () => {
    try {
      const selectedIds = Array.from(selectedNoteIds)

      // Delete all selected notes
      for (const noteId of selectedIds) {
        await deleteNote(noteId)
      }

      // Clear selection
      clearSelection()
      setIsMultiSelectMode(false)

      toast({
        title: 'Notes deleted',
        description: `${selectedIds.length} notes have been deleted successfully.`,
        variant: 'destructive',
      })

      // Update active note if necessary
      if (selectedIds.includes(activeNoteId)) {
        const remainingNotes = notes.filter(
          (note) => !selectedIds.includes(note.id)
        )
        setActiveNoteId(remainingNotes[0]?.id || '')
      }
    } catch {
      toast({
        title: 'Error',
        description: 'Failed to delete notes. Please try again.',
        variant: 'destructive',
      })
    }
  }, [selectedNoteIds, deleteNote, clearSelection, toast, activeNoteId, notes])

  const handleBulkExport = useCallback(
    async (format: ExportFormat) => {
      try {
        const selectedNotes = notes.filter((note) =>
          selectedNoteIds.has(note.id)
        )

        for (const note of selectedNotes) {
          await exportNote(note, format, {
            includeTitle: true,
            includeMetadata: true,
            includeStyles: true,
          })
        }

        toast({
          title: 'Export successful',
          description: `${selectedNotes.length} notes exported as ${format.toUpperCase()}.`,
        })
      } catch {
        toast({
          title: 'Export failed',
          description: 'Failed to export notes. Please try again.',
          variant: 'destructive',
        })
      }
    },
    [selectedNoteIds, notes, exportNote, toast]
  )

  const handleBulkMove = useCallback(
    async (folderId: string) => {
      try {
        const selectedIds = Array.from(selectedNoteIds)
        const parentId = folderId === 'root' ? null : folderId

        for (const noteId of selectedIds) {
          const note = notes.find((n) => n.id === noteId)
          if (note) {
            await saveNote({
              ...note,
              parentId,
              updatedAt: new Date().toISOString(),
            })
          }
        }

        clearSelection()
        setIsMultiSelectMode(false)

        toast({
          title: 'Notes moved',
          description: `${selectedIds.length} notes have been moved successfully.`,
        })
      } catch {
        toast({
          title: 'Error',
          description: 'Failed to move notes. Please try again.',
          variant: 'destructive',
        })
      }
    },
    [selectedNoteIds, notes, saveNote, clearSelection, toast]
  )

  const handleBulkAddTag = useCallback(
    async (tag: string) => {
      try {
        const selectedIds = Array.from(selectedNoteIds)

        for (const noteId of selectedIds) {
          const note = notes.find((n) => n.id === noteId)
          if (note) {
            const updatedTags = note.tags ? [...note.tags] : []
            if (!updatedTags.includes(tag)) {
              updatedTags.push(tag)
            }

            await saveNote({
              ...note,
              tags: updatedTags,
              updatedAt: new Date().toISOString(),
            })
          }
        }

        clearSelection()
        setIsMultiSelectMode(false)

        toast({
          title: 'Tag added',
          description: `Tag "${tag}" added to ${selectedIds.length} notes.`,
        })
      } catch {
        toast({
          title: 'Error',
          description: 'Failed to add tag. Please try again.',
          variant: 'destructive',
        })
      }
    },
    [selectedNoteIds, notes, saveNote, clearSelection, toast]
  )

  // Register keyboard shortcuts using the new system
  useKeyboardShortcuts([
    // Navigation shortcuts
    {
      id: 'navigate-next',
      action: () => navigateToAdjacentNote('next'),
    },
    {
      id: 'navigate-previous',
      action: () => navigateToAdjacentNote('previous'),
    },
    // Quick switch shortcuts (1-9)
    ...Array.from({ length: 9 }, (_, i) => ({
      id: `quick-switch-${i + 1}`,
      action: () => {
        if (notes[i]) {
          navigateToNote(notes[i].id)
        }
      },
    })),
    // Note management
    {
      id: 'create-note',
      action: () => handleCreateNote(null),
    },
    {
      id: 'delete-note',
      action: () => {
        if (activeNote) {
          handleDeleteNote(activeNote.id)
        }
      },
    },
    {
      id: 'save-note',
      action: () => {
        toast({
          title: 'Note saved',
          description: 'Your note has been saved successfully.',
        })
      },
    },
    // Search
    {
      id: 'open-search',
      action: () => setIsSearchOpen(true),
    },
    {
      id: 'focus-filter',
      action: () => {
        const sidebarSearch = document.querySelector(
          '[placeholder="Filter"]'
        ) as HTMLInputElement
        if (sidebarSearch) {
          sidebarSearch.focus()
        }
      },
    },
    // View
    {
      id: 'toggle-sidebar',
      action: () => setIsSidebarCollapsed(!isSidebarCollapsed),
    },
    {
      id: 'toggle-view-mode',
      action: () => {
        setIsViewMode(!isViewMode)
        toast({
          title: isViewMode ? 'Edit Mode' : 'View Mode',
          description: isViewMode
            ? 'You can now edit this note'
            : 'Now in read-only view mode',
        })
      },
    },
    {
      id: 'toggle-multi-select',
      action: () => {
        setIsMultiSelectMode(!isMultiSelectMode)
        if (isMultiSelectMode) {
          clearSelection()
        }
        toast({
          title: isMultiSelectMode ? 'Normal Mode' : 'Multi-Select Mode',
          description: isMultiSelectMode
            ? 'Switched to normal mode'
            : 'Click notes to select multiple items',
        })
      },
    },
    {
      id: 'select-all',
      action: () => {
        if (isMultiSelectMode) {
          selectAllNotes()
        }
      },
    },
    // General
    {
      id: 'close-dialog',
      action: () => {
        setIsMobileMenuOpen(false)
        if (isSearchOpen) {
          setIsSearchOpen(false)
        }
        if (isCommandPaletteOpen) {
          setIsCommandPaletteOpen(false)
        }
        if (isKeyboardShortcutsOpen) {
          setIsKeyboardShortcutsOpen(false)
        }
      },
    },
    {
      id: 'command-palette',
      action: () => setIsCommandPaletteOpen(true),
    },
    {
      id: 'shortcuts-help',
      action: () => setIsKeyboardShortcutsOpen(true),
    },
  ])

  // Show loading screen while authenticating
  if (authLoading) {
    return (
      <div className='flex h-screen bg-background'>
        <SidebarSkeleton className='w-64 border-r' />
        <div className='flex-1 flex items-center justify-center'>
          <div className='text-center'>
            <LoadingSpinner className='h-8 w-8 mx-auto mb-4' />
            <p className='text-muted-foreground'>Loading...</p>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className='flex h-screen bg-background' data-testid='app-shell'>
      {isLoading ? (
        <SidebarSkeleton className='w-64 border-r' />
      ) : (
        <Sidebar
          notes={notes}
          activeNoteId={activeNoteId}
          onSelectNote={navigateToNote}
          onCreateNote={handleCreateNote}
          onCreateFolder={handleCreateFolder}
          onDeleteNote={handleDeleteNote}
          onUpdateFolder={updateFolder}
          onMoveNote={moveNote}
          onOpenSearch={() => setIsSearchOpen(true)}
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          isMobileMenuOpen={isMobileMenuOpen}
          onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          isLoading={isLoading}
          selectedNoteIds={selectedNoteIds}
          onToggleNoteSelection={toggleNoteSelection}
          isMultiSelectMode={isMultiSelectMode}
          showHiddenNotes={showHiddenNotes}
          onToggleHiddenNotes={() => setShowHiddenNotes(!showHiddenNotes)}
        />
      )}
      <div
        className={`flex-1 flex flex-col min-w-0 ${isSidebarCollapsed ? 'ml-0' : ''}`}
      >
        {isLoading ? (
          <EditorSkeleton />
        ) : notes.length === 0 ? (
          <WelcomeScreen onCreateNote={() => handleCreateNote(null)} />
        ) : activeNote ? (
          <>
            <div className='border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
              <div className='container mx-auto px-4 py-3 flex items-center justify-between'>
                <Breadcrumb
                  currentNote={activeNote}
                  notes={notes}
                  onNavigateToNote={navigateToNote}
                />
                <div className='flex items-center gap-3'>
                  {/* Offline status indicator */}
                  <OfflineStatus />

                  {/* Real-time sync indicators */}
                  <div className='flex items-center gap-2'>
                    {/* Online users count */}
                    {onlineUsers.length > 0 && (
                      <Badge variant='secondary' className='text-xs'>
                        <Users className='h-3 w-3 mr-1' />
                        {onlineUsers.length}
                      </Badge>
                    )}

                    {/* Typing indicators */}
                    {typingUsers.length > 0 && (
                      <Badge variant='outline' className='text-xs'>
                        <UserCheck className='h-3 w-3 mr-1' />
                        {typingUsers.length} typing...
                      </Badge>
                    )}
                  </div>

                  <Button
                    variant={isMultiSelectMode ? 'default' : 'outline'}
                    size='sm'
                    onClick={() => {
                      setIsMultiSelectMode(!isMultiSelectMode)
                      if (isMultiSelectMode) {
                        clearSelection()
                      }
                    }}
                  >
                    <CheckSquare className='h-4 w-4 mr-1' />
                    Multi-Select
                  </Button>

                  <ModeToggle
                    isViewMode={isViewMode}
                    onToggle={() => setIsViewMode(!isViewMode)}
                  />
                  {(isSaving || isEditorLoading) && (
                    <div className='flex items-center space-x-2 text-sm text-muted-foreground'>
                      <LoadingSpinner className='h-4 w-4' />
                      <span>{isSaving ? 'Saving...' : 'Loading...'}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {isEditorLoading ? (
              <EditorSkeleton />
            ) : isViewMode ? (
              <ViewModeRenderer note={activeNote} className='flex-1' />
            ) : (
              <PlateEditorComponent
                note={activeNote}
                onUpdateNote={handleNoteChange}
                onDeleteNote={handleDeleteNote}
                onExportNote={handleExportNote}
                onStartTyping={startTyping}
                onStopTyping={stopTyping}
              />
            )}
          </>
        ) : (
          <div className='flex-1 flex items-center justify-center text-muted-foreground'>
            Select a note or create a new one
          </div>
        )}
      </div>
      <AdvancedSearchDialog
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        notes={notes}
        onSelectNote={navigateToNote}
        onCreateNote={() => handleCreateNote(null)}
        onDeleteNote={handleDeleteNote}
      />

      {/* Command Palette */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        notes={notes}
        onSelectNote={navigateToNote}
        onCreateNote={handleCreateNote}
        onOpenSearch={() => setIsSearchOpen(true)}
        onToggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        onToggleViewMode={() => setIsViewMode(!isViewMode)}
        onOpenShortcuts={() => setIsKeyboardShortcutsOpen(true)}
        isViewMode={isViewMode}
        isSidebarCollapsed={isSidebarCollapsed}
      />

      {/* Keyboard Shortcuts Dialog */}
      <KeyboardShortcutsDialog
        isOpen={isKeyboardShortcutsOpen}
        onClose={() => setIsKeyboardShortcutsOpen(false)}
      />

      {/* Bulk Operations Toolbar */}
      <BulkOperationsToolbar
        selectedNoteIds={selectedNoteIds}
        totalNotes={notes.filter((n) => !n.isFolder).length}
        onSelectAll={selectAllNotes}
        onClearSelection={clearSelection}
        onBulkDelete={handleBulkDelete}
        onBulkExport={handleBulkExport}
        onBulkMove={handleBulkMove}
        onBulkAddTag={handleBulkAddTag}
        folders={folders}
        isExporting={isExporting}
      />

      {/* Conflict Resolution Dialog */}
      <ConflictResolutionDialog />

      {/* Route Prefetcher for optimized navigation */}
      <RoutePrefetcher
        notes={notes}
        activeNoteId={activeNoteId}
        prefetchStrategy='adjacent'
        maxPrefetch={3}
      />
    </div>
  )
}
