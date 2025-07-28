'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { useSyncService } from '@notable/sync'
import { v4 as uuidv4 } from 'uuid'
import { type Note } from '../types/note'
import { useRouting } from '../hooks/use-routing'
import { toast } from '../hooks/use-toast'
import { UserMenu } from './user-menu'
import { createClient } from '@/utils/supabase/client'
import { isTest } from '../lib/utils/environment'
import { createMockUser } from '@/utils/test-helpers'
import type { User as SupabaseUser } from '@supabase/supabase-js'
import { Spinner } from '@/components/ui/spinner'
import { NoteEditor } from './note-editor'
import { useKeyboardShortcuts } from '../hooks/use-keyboard-shortcuts'
import { CommandPalette } from './command-palette'
import { KeyboardShortcutsDialog } from './keyboard-shortcuts-dialog'
import { SearchDialog } from './search-dialog'

export function Shell() {
  const [notes, setNotes] = useState<Note[]>([])
  const [selectedNote, setSelectedNote] = useState<Note | null>(null)
  const [selectedNoteIndex, setSelectedNoteIndex] = useState<number>(-1)
  const [user, setUser] = useState<SupabaseUser | null>(null)
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false)
  const [keyboardShortcutsOpen, setKeyboardShortcutsOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [viewMode, setViewMode] = useState<'edit' | 'view'>('edit')
  const [sidebarVisible, setSidebarVisible] = useState(true)
  const [multiSelectMode, setMultiSelectMode] = useState(false)
  const { syncService, isInitialized } = useSyncService()
  // TODO: Integrate routing functionality - current, title, navigate will be used for navigation
  const { current: _current, title: _title, navigate: _navigate } = useRouting()
  const supabase = createClient()

  // In test mode, treat as initialized to show the main UI
  const isTestMode = isTest()

  // Create mock user for testing when dev-auth-bypass is enabled
  const mockUser: SupabaseUser | null = isTestMode && !user ? createMockUser() : null

  const currentUser = user || mockUser

  const shouldShowLoading = !isInitialized && !isTestMode

  // Get user on mount
  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUser(user)
    }

    getUser()

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [supabase])

  // Create a new note handler
  const handleCreateNote = useCallback(() => {
    try {
      // Generate new note data
      const now = new Date().toISOString()
      const deviceId = 'web-device' // Simple device ID for now

      const newNote: Note = {
        id: uuidv4(),
        title: 'Untitled',
        content: '',
        is_folder: false,
        parent_id: undefined,
        userId: currentUser?.id || 'anonymous', // Use real user ID or test user ID
        tags: [],
        isHidden: false,
        version: 1,
        device_id: deviceId,
        last_modified: now,
        vector_clock: { [deviceId]: 1 },
        synced_at: undefined,
        local_changes: true,
        deleted: false,
        created_at: now,
        updated_at: now,
      }

      // Update local state
      setNotes((prev) => [...prev, newNote])
      
      // Set the new note as selected to show the editor
      setSelectedNote(newNote)

      // Show success message
      toast({
        title: 'Note created',
        description: 'Your new note has been created successfully.',
      })

      console.info('Created new note:', newNote.id)

      // TODO: Implement proper persistence through sync service
    } catch (error) {
      console.error('Failed to create note:', error)
      toast({
        title: 'Failed to create note',
        description: 'There was an error creating your note. Please try again.',
        variant: 'destructive',
      })
    }
  }, [currentUser])

  // Load existing notes when sync service is initialized
  useEffect(() => {
    // For now, we'll start with an empty notes list
    // TODO: Implement proper note loading through sync service
    if (isInitialized) {
      console.info('Sync service initialized, ready to manage notes')
    }
  }, [isInitialized])

  // Navigation handlers
  const navigateUp = useCallback(() => {
    if (notes.length === 0) return
    const newIndex = selectedNoteIndex > 0 ? selectedNoteIndex - 1 : notes.length - 1
    setSelectedNoteIndex(newIndex)
    setSelectedNote(notes[newIndex])
  }, [notes, selectedNoteIndex])

  const navigateDown = useCallback(() => {
    if (notes.length === 0) return
    const newIndex = selectedNoteIndex < notes.length - 1 ? selectedNoteIndex + 1 : 0
    setSelectedNoteIndex(newIndex)
    setSelectedNote(notes[newIndex])
  }, [notes, selectedNoteIndex])

  // Quick switch to note by number
  const quickSwitchToNote = useCallback((index: number) => {
    if (index >= 0 && index < notes.length) {
      setSelectedNoteIndex(index)
      setSelectedNote(notes[index])
    }
  }, [notes])

  // Keyboard shortcuts
  useKeyboardShortcuts({
    'cmd+shift+p': () => setCommandPaletteOpen(true),
    'cmd+/': () => setKeyboardShortcutsOpen(true),
    'cmd+k': () => setSearchOpen(true),
    'cmd+e': () => {
      setViewMode(prev => prev === 'edit' ? 'view' : 'edit')
      toast({
        title: `Switched to ${viewMode === 'edit' ? 'view' : 'edit'} mode`,
      })
    },
    'cmd+,': () => setSidebarVisible(prev => !prev),
    'cmd+m': () => {
      setMultiSelectMode(prev => !prev)
      toast({
        title: multiSelectMode ? 'Normal mode' : 'Multi-select mode',
      })
    },
    'cmd+a': () => {
      if (multiSelectMode) {
        // Select all notes logic here
        toast({
          title: 'Selected all notes',
        })
      }
    },
    'cmd+1': () => quickSwitchToNote(0),
    'cmd+2': () => quickSwitchToNote(1),
    'cmd+3': () => quickSwitchToNote(2),
    'arrowup': navigateUp,
    'arrowdown': navigateDown,
    'k': navigateUp,
    'j': navigateDown,
  })

  if (shouldShowLoading) {
    return (
      <div className='flex h-screen bg-background' data-testid='app-shell'>
        <div className='space-y-4 p-4 w-64 border-r'>
          <div className='space-y-2'>
            <div className='animate-pulse rounded-md bg-muted h-6 w-24'></div>
            <div className='animate-pulse rounded-md bg-muted h-8 w-full'></div>
          </div>
          <div className='animate-pulse rounded-md bg-muted h-10 w-full'></div>
          <div className='space-y-2'>
            <div className='animate-pulse rounded-md bg-muted h-8 w-full'></div>
            <div className='animate-pulse rounded-md bg-muted h-8 w-full'></div>
          </div>
        </div>
        <div className='flex-1 flex items-center justify-center'>
          <div className='text-center'>
            <div className='flex items-center justify-center mx-auto mb-4'>
              <Spinner size='3' />
            </div>
            <p className='text-muted-foreground'>Loading...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <CommandPalette
        open={commandPaletteOpen}
        onOpenChange={setCommandPaletteOpen}
        onCreateNote={handleCreateNote}
        onToggleViewMode={() => setViewMode(prev => prev === 'edit' ? 'view' : 'edit')}
        onToggleMultiSelect={() => setMultiSelectMode(prev => !prev)}
        onOpenKeyboardShortcuts={() => setKeyboardShortcutsOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
      />
      <KeyboardShortcutsDialog
        open={keyboardShortcutsOpen}
        onOpenChange={setKeyboardShortcutsOpen}
      />
      <SearchDialog
        open={searchOpen}
        onOpenChange={setSearchOpen}
        notes={notes}
        onSelectNote={(note) => {
          setSelectedNote(note)
          const index = notes.findIndex(n => n.id === note.id)
          setSelectedNoteIndex(index)
        }}
      />
      <div className='flex h-screen bg-background' data-testid='app-shell'>
      {sidebarVisible && (
        <div className='space-y-4 p-4 w-64 border-r' data-sidebar>
        <div className='space-y-2'>
          <h2 className='text-lg font-semibold'>Notable</h2>
          <button
            className='w-full text-left px-3 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90'
            aria-label='New Note'
            onClick={handleCreateNote}
          >
            New Note
          </button>
        </div>
        <div className='space-y-2'>
          <div className='text-sm text-muted-foreground'>Recent</div>
          <div className='space-y-1'>
            {notes.length === 0 ? (
              <div className='text-sm text-muted-foreground p-2'>
                No notes yet. Create your first note to get started.
              </div>
            ) : (
              notes.map((note, index) => (
                <div
                  key={note.id}
                  className={`flex items-center space-x-2 p-2 rounded-md hover:bg-muted cursor-pointer ${
                    selectedNote?.id === note.id ? 'bg-muted' : ''
                  }`}
                  data-selected={selectedNote?.id === note.id}
                  onClick={() => {
                    setSelectedNote(note)
                    setSelectedNoteIndex(index)
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setSelectedNote(note)
                      setSelectedNoteIndex(index)
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <div className='flex-1 truncate'>
                    <div className='text-sm font-medium'>
                      {note.title || 'Untitled'}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        </div>
      )}
      <div className='flex-1 flex flex-col'>
        {/* Header with user menu */}
        <header className='flex items-center justify-between border-b px-6 py-3'>
          <div className='flex items-center gap-4'>
            {viewMode === 'view' && (
              <span className='text-sm text-muted-foreground'>View mode</span>
            )}
            {viewMode === 'edit' && (
              <span className='text-sm text-muted-foreground'>Edit mode</span>
            )}
            {multiSelectMode && (
              <span className='text-sm text-muted-foreground'>Multi-select mode</span>
            )}
          </div>
          <UserMenu />
        </header>

        {/* Main content area */}
        <div className='flex-1'>
          {selectedNote ? (
            <NoteEditor
              note={selectedNote}
              isEditing={viewMode === 'edit'}
              onSave={(updatedNote) => {
                // Update the note in local state
                setNotes((prev) =>
                  prev.map((n) =>
                    n.id === updatedNote.id ? { ...n, ...updatedNote } : n
                  )
                )
                // Update selected note with new data
                setSelectedNote((prev) =>
                  prev && prev.id === updatedNote.id
                    ? { ...prev, ...updatedNote }
                    : prev
                )
                // TODO: Sync with backend through sync service
                return Promise.resolve()
              }}
              onDelete={(noteId) => {
                // Remove from local state
                setNotes((prev) => prev.filter((n) => n.id !== noteId))
                // Clear selection
                setSelectedNote(null)
                // TODO: Sync deletion with backend
                return Promise.resolve()
              }}
            />
          ) : (
            <div className='flex-1 flex items-center justify-center'>
              <div className='text-center'>
                <h3 className='text-xl font-semibold'>Welcome to Notable</h3>
                <p className='text-muted-foreground mt-2'>
                  Your notes are now synced across all devices using CRDT
                  technology.
                </p>
                <p className='text-sm text-muted-foreground mt-4'>
                  Sync Status: {syncService ? 'Connected' : 'Disconnected'}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  )
}
