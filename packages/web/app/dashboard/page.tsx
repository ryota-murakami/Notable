'use client'

import { useSupabase } from '@/components/supabase-provider'
import { useCallback, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import type { Note } from '@/types/note'
import { mapDatabaseNotesToNotes } from '@/lib/mappers/note-mapper'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  FileText,
  FolderOpen,
  Loader2,
  LogOut,
  Plus,
  Search,
  Settings,
} from 'lucide-react'

export default function DashboardPage() {
  const { user, supabase, loading } = useSupabase()
  const [notes, setNotes] = useState<Note[]>([])
  const [isLoadingNotes, setIsLoadingNotes] = useState(true)

  const loadNotes = useCallback(async () => {
    if (!supabase) return

    try {
      setIsLoadingNotes(true)
      const { data, error } = await supabase
        .from('notes')
        .select('*')
        .eq('user_id', user?.id || '')
        .order('updated_at', { ascending: false })

      if (error) {
        console.error('Error loading notes:', error)
      } else {
        setNotes(mapDatabaseNotesToNotes(data || []))
      }
    } catch (error) {
      console.error('Error loading notes:', error)
    } finally {
      setIsLoadingNotes(false)
    }
  }, [supabase, user?.id])

  useEffect(() => {
    if (user) {
      loadNotes()
    }
  }, [user, loadNotes])

  const handleSignOut = async () => {
    if (!supabase) return
    await supabase.auth.signOut()
  }

  if (loading) {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <Loader2 className='h-8 w-8 animate-spin' />
      </div>
    )
  }

  if (!user) {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <Card className='w-full max-w-md'>
          <CardHeader>
            <CardTitle>Access Denied</CardTitle>
            <CardDescription>
              You need to be signed in to access this page.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-background'>
      {/* Header */}
      <header className='border-b bg-card/50 backdrop-blur'>
        <div className='container mx-auto px-4 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-4'>
              <h1 className='text-2xl font-bold'>Notable</h1>
              {user && (
                <p className='text-muted-foreground'>
                  Welcome back,{' '}
                  {(user.user_metadata?.name as string) ||
                    (user.email as string) ||
                    'User'}
                </p>
              )}
            </div>
            <div className='flex items-center space-x-4'>
              <Button variant='outline' size='sm'>
                <Settings className='h-4 w-4 mr-2' />
                Settings
              </Button>
              <Button variant='outline' size='sm' onClick={handleSignOut}>
                <LogOut className='h-4 w-4 mr-2' />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className='container mx-auto px-4 py-8'>
        <div className='grid gap-6'>
          {/* Quick Actions */}
          <div className='grid md:grid-cols-3 gap-4'>
            <Card>
              <CardHeader className='pb-3'>
                <CardTitle className='text-lg flex items-center'>
                  <Plus className='h-5 w-5 mr-2' />
                  Create Note
                </CardTitle>
                <CardDescription>Start writing your thoughts</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className='w-full'>
                  <Plus className='h-4 w-4 mr-2' />
                  New Note
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className='pb-3'>
                <CardTitle className='text-lg flex items-center'>
                  <Search className='h-5 w-5 mr-2' />
                  Search Notes
                </CardTitle>
                <CardDescription>
                  Find what you&apos;re looking for
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant='outline' className='w-full'>
                  <Search className='h-4 w-4 mr-2' />
                  Search
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className='pb-3'>
                <CardTitle className='text-lg flex items-center'>
                  <FolderOpen className='h-5 w-5 mr-2' />
                  Organize
                </CardTitle>
                <CardDescription>Manage folders and tags</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant='outline' className='w-full'>
                  <FolderOpen className='h-4 w-4 mr-2' />
                  Folders
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Recent Notes */}
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center'>
                <FileText className='h-5 w-5 mr-2' />
                Recent Notes
              </CardTitle>
              <CardDescription>Your latest notes and thoughts</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoadingNotes ? (
                <div className='flex items-center justify-center py-8'>
                  <Loader2 className='h-6 w-6 animate-spin' />
                </div>
              ) : notes.length === 0 ? (
                <div className='text-center py-8 text-muted-foreground'>
                  <FileText className='h-12 w-12 mx-auto mb-4 opacity-50' />
                  <p>No notes yet. Create your first note to get started!</p>
                </div>
              ) : (
                <div className='space-y-4'>
                  {notes.slice(0, 5).map((note: Note) => (
                    <div
                      key={note.id}
                      className='flex items-center space-x-4 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer'
                    >
                      <FileText className='h-5 w-5 text-muted-foreground' />
                      <div className='flex-1'>
                        <h3 className='font-medium'>{note.title}</h3>
                        <p className='text-sm text-muted-foreground'>
                          {new Date(note.updatedAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
