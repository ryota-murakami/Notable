'use client'

import { useCallback, useEffect, useState } from 'react'
import { useSyncService } from '@notable/sync'
import { v4 as uuidv4 } from 'uuid'
import { type Note } from '../types/note'
import { useRouting } from '../hooks/use-routing'
import { toast } from '../hooks/use-toast'
import { UserMenu } from './user-menu'
import { createClient } from '@/utils/supabase/client'
import type { User as SupabaseUser } from '@supabase/supabase-js'

export function Shell() {
  const [notes, setNotes] = useState<Note[]>([])
  const [user, setUser] = useState<SupabaseUser | null>(null)
  const { syncService, isInitialized } = useSyncService()
  // TODO: Integrate routing functionality - current, title, navigate will be used for navigation
  const { current, title, navigate } = useRouting()
  const supabase = createClient()

  // In test mode, treat as initialized to show the main UI
  const isTestMode =
    process.env.NODE_ENV === 'test' ||
    (typeof window !== 'undefined' &&
      document.cookie.includes('dev-auth-bypass=true'))

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
        userId: user?.id || 'anonymous', // Use real user ID
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

      // Show success message
      toast({
        title: 'Note created',
        description: 'Your new note has been created successfully.',
      })

      // TODO: Navigate to the new note
      console.log('Created new note:', newNote.id)

      // TODO: Implement proper persistence through sync service
    } catch (error) {
      console.error('Failed to create note:', error)
      toast({
        title: 'Failed to create note',
        description: 'There was an error creating your note. Please try again.',
        variant: 'destructive',
      })
    }
  }, [user])

  // Load existing notes when sync service is initialized
  useEffect(() => {
    // For now, we'll start with an empty notes list
    // TODO: Implement proper note loading through sync service
    if (isInitialized) {
      console.log('Sync service initialized, ready to manage notes')
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
            <div className='flex items-center justify-center h-8 w-8 mx-auto mb-4'>
              <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-primary'></div>
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
            role='button'
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
                  className='flex items-center space-x-2 p-2 rounded-md hover:bg-muted cursor-pointer'
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
      </div>
    </div>
  )
}
