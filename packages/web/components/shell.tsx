'use client'

import { useCallback, useEffect, useState } from 'react'
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
import { BasicEditor } from './editor/basic-editor'
import { type Descendant } from 'slate'

export function Shell() {
  const [notes, setNotes] = useState<Note[]>([])
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null)
  const [user, setUser] = useState<SupabaseUser | null>(null)
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
      
      // Select the new note to show the editor
      setSelectedNoteId(newNote.id)

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

  // Handle note selection
  const handleSelectNote = useCallback((noteId: string) => {
    setSelectedNoteId(noteId)
  }, [])

  // Handle note content update
  const handleUpdateNote = useCallback((noteId: string, content: Descendant[]) => {
    setNotes((prev) => 
      prev.map((note) => 
        note.id === noteId 
          ? { ...note, content: JSON.stringify(content), updated_at: new Date().toISOString() }
          : note
      )
    )
    // TODO: Persist changes through sync service
  }, [])

  // Get the currently selected note
  const selectedNote = notes.find((note) => note.id === selectedNoteId)

  // Load existing notes when sync service is initialized
  useEffect(() => {
    // For now, we'll start with an empty notes list
    // TODO: Implement proper note loading through sync service
    if (isInitialized) {
      console.info('Sync service initialized, ready to manage notes')
    }
  }, [isInitialized])

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
    <div className='flex h-screen bg-background' data-testid='app-shell'>
      <div className='space-y-4 p-4 w-64 border-r'>
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
              notes.map((note) => (
                <div
                  key={note.id}
                  role="button"
                  tabIndex={0}
                  className={`flex items-center space-x-2 p-2 rounded-md hover:bg-muted cursor-pointer ${
                    selectedNoteId === note.id ? 'bg-muted' : ''
                  }`}
                  onClick={() => handleSelectNote(note.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      handleSelectNote(note.id)
                    }
                  }}
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
      <div className='flex-1 flex flex-col'>
        {/* Header with user menu */}
        <header className='flex items-center justify-between border-b px-6 py-3'>
          <div className='flex-1' />
          <UserMenu />
        </header>

        {/* Main content area */}
        <div className='flex-1 flex items-center justify-center'>
          {selectedNote ? (
            <div className='w-full h-full p-6'>
              <BasicEditor
                key={selectedNote.id}
                initialValue={
                  selectedNote.content
                    ? JSON.parse(selectedNote.content)
                    : [
                        {
                          type: 'paragraph',
                          children: [{ text: '' }],
                        },
                      ]
                }
                onChange={(value) => handleUpdateNote(selectedNote.id, value)}
                placeholder='Start writing...'
                autoFocus
                className='max-w-4xl mx-auto'
              />
            </div>
          ) : (
            <div className='text-center'>
              <h3 className='text-xl font-semibold'>Welcome to Notable</h3>
              <p className='text-muted-foreground mt-2'>
                Click "New Note" to start writing or select a note from the sidebar.
              </p>
              <p className='text-sm text-muted-foreground mt-4'>
                Sync Status: {syncService ? 'Connected' : 'Disconnected'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
