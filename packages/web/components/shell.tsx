'use client'

import { useCallback, useEffect, useState } from 'react'
import { useSyncService } from '@notable/sync'
import { useRouting } from '../hooks/use-routing'
import { useNotes } from '../hooks/use-notes'
import { UserMenu } from './user-menu'
import { createClient } from '@/utils/supabase/client'
import { isTest } from '../lib/utils/environment'
import { createMockUser } from '@/utils/test-helpers'
import type { User as SupabaseUser } from '@supabase/supabase-js'
import { Spinner } from '@/components/ui/spinner'

export function Shell() {
  const [user, setUser] = useState<SupabaseUser | null>(null)
  const { syncService, isInitialized } = useSyncService()
  // TODO: Integrate routing functionality - current, title, navigate will be used for navigation
  const { current: _current, title: _title, navigate: _navigate } = useRouting()
  const supabase = createClient()

  // In test mode, treat as initialized to show the main UI
  const isTestMode = isTest()

  // Create mock user for testing when dev-auth-bypass is enabled
  const mockUser: SupabaseUser | null =
    isTestMode && !user ? createMockUser() : null

  const currentUser = user || mockUser

  const shouldShowLoading = !isInitialized && !isTestMode

  // Use the notes hook to manage notes data
  const {
    notes,
    loading: notesLoading,
    createNote,
  } = useNotes({
    enabled: !!currentUser && (isInitialized || isTestMode),
    limit: 20,
  })

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
  const handleCreateNote = useCallback(async () => {
    if (!currentUser) return

    try {
      await createNote({
        title: 'Untitled',
        content: '',
      })

      // TODO: Navigate to the new note
      console.info('Created new note successfully')
    } catch (error) {
      console.error('Failed to create note:', error)
      // Error handling is done in the hook
    }
  }, [currentUser, createNote])

  // Load existing notes when sync service is initialized
  useEffect(() => {
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
            {notesLoading ? (
              <div className='text-sm text-muted-foreground p-2'>
                Loading notes...
              </div>
            ) : notes.length === 0 ? (
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
                    <div className='text-xs text-muted-foreground'>
                      {new Date(note.updated_at).toLocaleDateString()}
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
