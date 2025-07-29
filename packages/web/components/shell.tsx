'use client'

import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useNotes } from '@/hooks/use-notes'
import { useRouting } from '@/hooks/use-routing'
import { toast } from '@/hooks/use-toast'
import { UserMenu } from './user-menu'
import { createClient } from '@/utils/supabase/client'
import { isTest } from '@/lib/utils/environment'
import { createMockUser } from '@/utils/test-helpers'
import type { User as SupabaseUser } from '@supabase/supabase-js'
import { Spinner } from '@/components/ui/spinner'
import { Button } from '@/components/ui/button'
import { FileText, Plus } from 'lucide-react'

export function Shell({ children }: { children?: React.ReactNode }) {
  const [user, setUser] = useState<SupabaseUser | null>(null)
  const { notes, loading: notesLoading, createNote } = useNotes()
  const router = useRouter()
  // TODO: Integrate routing functionality - current, title, navigate will be used for navigation
  const { current: _current, title: _title, navigate: _navigate } = useRouting()
  const supabase = createClient()

  // In test mode, treat as initialized to show the main UI
  const isTestMode = isTest()

  // Create mock user for testing when dev-auth-bypass is enabled
  const mockUser: SupabaseUser | null =
    isTestMode && !user ? createMockUser() : null

  const currentUser = user || mockUser

  const shouldShowLoading = notesLoading && !isTestMode

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

  // Create a new note handler using the real API
  const handleCreateNote = useCallback(async () => {
    try {
      const newNote = await createNote({
        title: 'Untitled',
        content: '',
      })
      if (newNote) {
        router.push(`/notes/${newNote.id}`)
      }
    } catch (error) {
      console.error('Failed to create note:', error)
    }
  }, [createNote, router])

  // Handle note selection
  const handleNoteSelect = useCallback(
    (noteId: string) => {
      router.push(`/notes/${noteId}`)
    },
    [router]
  )

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
      {/* Sidebar */}
      <aside className='w-64 border-r bg-muted/10 flex flex-col'>
        <div className='p-4 border-b'>
          <h1 className='text-xl font-bold'>Notable</h1>
        </div>

        <div className='p-4 flex-1'>
          <Button
            onClick={handleCreateNote}
            className='w-full justify-start mb-6'
            size='sm'
          >
            <Plus className='mr-2 h-4 w-4' />
            New Note
          </Button>

          <div className='space-y-2'>
            <h3 className='text-sm font-medium text-muted-foreground'>
              Recent Notes
            </h3>
            <div className='space-y-1'>
              {notes.length === 0 ? (
                <div className='text-sm text-muted-foreground py-4 text-center'>
                  No notes yet. Create your first note to get started.
                </div>
              ) : (
                notes.map((note) => (
                  <button
                    key={note.id}
                    onClick={() => handleNoteSelect(note.id)}
                    className='flex items-center space-x-2 p-2 rounded-md hover:bg-muted cursor-pointer group w-full text-left'
                  >
                    <FileText className='h-4 w-4 text-muted-foreground' />
                    <div className='flex-1 truncate'>
                      <div className='text-sm font-medium'>
                        {note.title || 'Untitled'}
                      </div>
                      <div className='text-xs text-muted-foreground'>
                        {new Date(note.updated_at).toLocaleDateString()}
                      </div>
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className='flex-1 flex flex-col'>
        {/* Header */}
        <header className='border-b px-6 py-3 flex items-center justify-between'>
          <div className='flex-1' />
          <UserMenu />
        </header>

        {/* Content area */}
        <main className='flex-1 overflow-auto'>
          {children || (
            <div className='flex-1 flex items-center justify-center p-6'>
              <div className='text-center max-w-md'>
                <h2 className='text-2xl font-semibold mb-2'>
                  Welcome to Notable
                </h2>
                <p className='text-muted-foreground mb-6'>
                  A modern note-taking experience. Select a note from the
                  sidebar or create a new one to get started.
                </p>
                <Button onClick={handleCreateNote} size='lg'>
                  <Plus className='mr-2 h-4 w-4' />
                  Create Your First Note
                </Button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
