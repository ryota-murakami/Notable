'use client'

import { useState } from 'react'
import { useSyncService } from '@notable/sync'
import { Note } from '../types/note'
import { useRouting } from '../hooks/use-routing'

export function Shell() {
  const [notes, setNotes] = useState<Note[]>([])
  const { syncService, isInitialized } = useSyncService()
  const { current, title, navigate } = useRouting()

  if (!isInitialized) {
    return (
      <div className='flex h-screen bg-background'>
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
          <button className='w-full text-left px-3 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90'>
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
