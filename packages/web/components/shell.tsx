'use client'

import { useCallback, useEffect, useState } from 'react'
import { useSyncService } from '@notable/sync'
import { v4 as uuidv4 } from 'uuid'
import { type Note } from '../types/note'
import { useRouting } from '../hooks/use-routing'

export function Shell() {
  const [notes, setNotes] = useState<Note[]>([])
  const { syncService, isInitialized } = useSyncService()
  // TODO: Integrate routing functionality - current, title, navigate will be used for navigation
  const { current, title, navigate } = useRouting()

  // In test mode, treat as initialized to show the main UI
  const isTestMode =
    process.env.NODE_ENV === 'test' ||
    (typeof window !== 'undefined' &&
      document.cookie.includes('dev-auth-bypass=true'))

  const shouldShowLoading = !isInitialized && !isTestMode

  // Create a new note handler
  const handleCreateNote = useCallback(async () => {
    if (!syncService) {
      console.error('Sync service not initialized')
      return
    }

    // Generate new note data
    const now = new Date().toISOString()
    const deviceId =
      (await (syncService as any).storage.getDeviceId()) || 'web-device'

    const newNote: Note = {
      id: uuidv4(),
      title: 'Untitled',
      content: '',
      is_folder: false,
      parent_id: undefined,
      userId: 'demo-user', // TODO: Get from auth context
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

    // Save to storage
    try {
      await (syncService as any).storage.saveNote(newNote)

      // Update local state
      setNotes((prev) => [...prev, newNote])

      // TODO: Navigate to the new note
      console.log('Created new note:', newNote.id)
    } catch (error) {
      console.error('Failed to create note:', error)
    }
  }, [syncService])

  // Load existing notes when sync service is initialized
  useEffect(() => {
    const loadNotes = async () => {
      if (!syncService || !isInitialized) {
        return
      }

      try {
        const existingNotes = await (syncService as any).storage.getAllNotes()
        setNotes(existingNotes.filter((note: Note) => !note.deleted))
      } catch (error) {
        console.error('Failed to load notes:', error)
      }
    }

    loadNotes()
  }, [syncService, isInitialized])

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
      <div className='flex-1 flex items-center justify-center'>
        <div className='text-center'>
          <h3 className='text-xl font-semibold'>Welcome to Notable</h3>
          <p className='text-muted-foreground mt-2'>
            Your notes are now synced across all devices using CRDT technology.
          </p>
          <p className='text-sm text-muted-foreground mt-4'>
            Sync Status: {syncService ? 'Connected' : 'Disconnected'}
          </p>
        </div>
      </div>
    </div>
  )
}
