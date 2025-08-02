'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useNotes } from '@/hooks/use-notes'
import { useRouting } from '@/hooks/use-routing'
import { useKeyboardShortcuts } from '@/hooks/use-keyboard-shortcuts'
import { toast } from '@/hooks/use-toast'
import { UserMenu } from './user-menu'
import { createClient } from '@/utils/supabase/client'
import { isTest } from '@/lib/utils/environment'
import { createMockUser } from '@/utils/test-helpers'
import type { User as SupabaseUser } from '@supabase/supabase-js'
import { Spinner } from '@/components/ui/spinner'
import { Button } from '@/components/ui/button'
import { FileText, Plus, BarChart3, Star, Archive } from 'lucide-react'
import { RichTextEditor } from '@/components/rich-text-editor'
import {
  NotableCommandPalette,
  useCommandPalette,
} from '@/components/ui/command-palette'
import { KeyboardShortcutsDialog } from '@/components/ui/keyboard-shortcuts-dialog'
import { useTagManager } from '@/hooks/use-tags'
import {
  AdvancedSearch,
  GlobalSearchTrigger,
} from '@/components/ui/advanced-search'
import { TemplatePicker } from '@/components/templates/template-picker'
import { TemplateVariableForm } from '@/components/templates/template-variable-form'
import { useTemplateActions } from '@/hooks/use-templates'
import type { Template } from '@/types/templates'

export function Shell({ children }: { children?: React.ReactNode }) {
  const [user, setUser] = useState<SupabaseUser | null>(null)
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null)
  const { notes, loading: notesLoading, createNote, deleteNote } = useNotes()
  const router = useRouter()
  // TODO: Integrate routing functionality - current, title, navigate will be used for navigation
  const { current: _current, title: _title, navigate: _navigate } = useRouting()
  const supabase = createClient()

  // Command palette and keyboard shortcuts state
  const commandPalette = useCommandPalette()
  const [showKeyboardShortcuts, setShowKeyboardShortcuts] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system')
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false)

  // Template state
  const [showTemplatePicker, setShowTemplatePicker] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null
  )
  const [showVariableForm, setShowVariableForm] = useState(false)
  const templateActions = useTemplateActions()

  // Tag management
  const { getOrCreateTag } = useTagManager()

  // Get selected note data
  const selectedNote = selectedNoteId
    ? notes.find((note) => note.id === selectedNoteId)
    : null

  // Command handlers
  const handleNewNote = useCallback(async () => {
    // Show template picker instead of creating note directly
    setShowTemplatePicker(true)
  }, [])

  const handleDeleteCurrentNote = useCallback(async () => {
    if (!selectedNoteId) return

    try {
      await deleteNote(selectedNoteId)
      setSelectedNoteId(null)
      router.push('/')
      toast({
        title: 'Note deleted',
        description: 'The note has been deleted successfully.',
      })
    } catch (error) {
      console.error('Failed to delete note:', error)
      toast({
        title: 'Error deleting note',
        description: 'There was an error deleting your note. Please try again.',
        variant: 'destructive',
      })
    }
  }, [selectedNoteId, deleteNote, router])

  const handleCopyNote = useCallback(async () => {
    if (!selectedNote) return

    try {
      const content = selectedNote.content || ''
      const textContent =
        typeof content === 'string' ? content : JSON.stringify(content)
      await navigator.clipboard.writeText(
        `${selectedNote.title}\n\n${textContent}`
      )
      toast({
        title: 'Note copied',
        description: 'Note content has been copied to clipboard.',
      })
    } catch (error) {
      console.error('Failed to copy note:', error)
      toast({
        title: 'Error copying note',
        description: 'Failed to copy note to clipboard.',
        variant: 'destructive',
      })
    }
  }, [selectedNote])

  const handleToggleTheme = useCallback(() => {
    const nextTheme =
      theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'
    setTheme(nextTheme)
    // TODO: Implement actual theme switching logic
    toast({
      title: 'Theme changed',
      description: `Theme switched to ${nextTheme}`,
    })
  }, [theme])

  const handleSearch = useCallback(() => {
    setShowAdvancedSearch(true)
  }, [])

  const handleSettings = useCallback(() => {
    // TODO: Implement settings functionality
    toast({
      title: 'Settings',
      description: 'Settings functionality will be implemented soon.',
    })
  }, [])

  const handleExportNote = useCallback(() => {
    // TODO: Implement export functionality
    toast({
      title: 'Export',
      description: 'Export functionality will be implemented soon.',
    })
  }, [])

  const handleEditNote = useCallback(() => {
    // TODO: Implement edit mode toggle
    toast({
      title: 'Edit Mode',
      description: 'Edit mode toggle will be implemented soon.',
    })
  }, [])

  // Tag-related command handlers
  const handleAddTag = useCallback(() => {
    if (!selectedNoteId) {
      toast({
        title: 'No note selected',
        description: 'Please select a note to add tags to.',
        variant: 'destructive',
      })
      return
    }

    // Focus on the tag input in the current note
    const tagInput = document.querySelector(
      'input[placeholder*="Add tags"]'
    ) as HTMLInputElement
    if (tagInput) {
      tagInput.focus()
      toast({
        title: 'Tag input focused',
        description: 'You can now type to add tags to this note.',
      })
    } else {
      toast({
        title: 'Tag input not available',
        description: 'Please open a note to add tags.',
        variant: 'destructive',
      })
    }
  }, [selectedNoteId])

  const handleCreateTag = useCallback(async () => {
    const tagName = window.prompt('Enter tag name:')
    if (!tagName || !tagName.trim()) return

    try {
      await getOrCreateTag(tagName.trim())
      toast({
        title: 'Tag created',
        description: `Tag "${tagName.trim()}" has been created successfully.`,
      })
    } catch (error) {
      console.error('Failed to create tag:', error)
      toast({
        title: 'Error creating tag',
        description: 'There was an error creating the tag. Please try again.',
        variant: 'destructive',
      })
    }
  }, [getOrCreateTag])

  const handleManageTags = useCallback(() => {
    // TODO: Implement tag management interface
    toast({
      title: 'Tag management',
      description: 'Tag management interface is not yet implemented.',
    })
  }, [])

  const handleFilterByTag = useCallback(() => {
    // TODO: Implement tag filtering
    toast({
      title: 'Filter by tag',
      description: 'Tag filtering is not yet implemented.',
    })
  }, [])

  // Keyboard shortcuts registration
  const shortcuts = useMemo(
    () => [
      {
        id: 'create-note',
        action: handleNewNote,
      },
      {
        id: 'delete-note',
        action: handleDeleteCurrentNote,
      },
      {
        id: 'open-search',
        action: commandPalette.toggle, // Cmd+K opens command palette (search functionality)
      },
      {
        id: 'command-palette',
        action: commandPalette.toggle, // Cmd+Shift+P also opens command palette
      },
      {
        id: 'shortcuts-help',
        action: () => setShowKeyboardShortcuts(true),
      },
      {
        id: 'close-dialog',
        action: () => {
          if (showKeyboardShortcuts) {
            setShowKeyboardShortcuts(false)
          } else if (commandPalette.open) {
            commandPalette.close()
          }
        },
      },
    ],
    [
      handleNewNote,
      handleDeleteCurrentNote,
      commandPalette.toggle,
      commandPalette.close,
      commandPalette.open,
      showKeyboardShortcuts,
    ]
  )

  useKeyboardShortcuts(shortcuts)

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

  // Legacy function - using handleNewNote instead
  const handleCreateNote = handleNewNote

  // Handle note selection
  const handleNoteSelect = useCallback(
    (noteId: string) => {
      setSelectedNoteId(noteId)
      router.push(`/notes/${noteId}`)
    },
    [router]
  )

  // Template handlers
  const handleCreateNoteFromTemplate = useCallback(
    async (title: string, variables: Record<string, any>) => {
      if (!selectedTemplate) return

      try {
        const result = await templateActions.useTemplate(
          selectedTemplate.id,
          title,
          variables
        )
        if (result && result.noteId) {
          setSelectedNoteId(result.noteId)
          router.push(`/notes/${result.noteId}`)
          setShowVariableForm(false)
          setSelectedTemplate(null)
          toast({
            title: 'Note created',
            description: 'Your note has been created from the template.',
          })
        }
      } catch (error) {
        console.error('Failed to create note from template:', error)
        toast({
          title: 'Error creating note',
          description:
            'There was an error creating your note from the template.',
          variant: 'destructive',
        })
      }
    },
    [selectedTemplate, templateActions, router]
  )

  const handleTemplateSelect = useCallback(
    (template: Template) => {
      setSelectedTemplate(template)
      setShowTemplatePicker(false)

      // If template has variables, show the variable form
      if (template.variables && template.variables.length > 0) {
        setShowVariableForm(true)
      } else {
        // Create note directly with template content without variables
        // We need to set the template first, then create the note
        Promise.resolve().then(() => {
          handleCreateNoteFromTemplate(template.name, {})
        })
      }
    },
    [handleCreateNoteFromTemplate]
  )

  const handleCreateBlankNote = useCallback(async () => {
    setShowTemplatePicker(false)
    try {
      const newNote = await createNote({
        title: 'Untitled',
        content: '',
      })
      if (newNote) {
        setSelectedNoteId(newNote.id)
        router.push(`/notes/${newNote.id}`)
      }
    } catch (error) {
      console.error('Failed to create note:', error)
      toast({
        title: 'Error creating note',
        description: 'There was an error creating your note. Please try again.',
        variant: 'destructive',
      })
    }
  }, [createNote, router])

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
            data-testid='new-note-button'
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

          {/* Graph View */}
          <div className='mt-4'>
            <Button
              variant='ghost'
              className='w-full justify-start'
              onClick={() => router.push('/app/graph')}
            >
              <BarChart3 className='mr-2 h-4 w-4' />
              Graph View
            </Button>
          </div>

          {/* Filter Options */}
          <div className='mt-4 space-y-1'>
            <Button
              variant='ghost'
              className='w-full justify-start'
              data-testid='filter-favorites'
              onClick={() => {
                /* TODO: Implement filter */
              }}
            >
              <Star className='mr-2 h-4 w-4' />
              Favorites
            </Button>
            <Button
              variant='ghost'
              className='w-full justify-start'
              data-testid='filter-archived'
              onClick={() => {
                /* TODO: Implement filter */
              }}
            >
              <Archive className='mr-2 h-4 w-4' />
              Archived
            </Button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className='flex-1 flex flex-col'>
        {/* Header */}
        <header className='border-b px-6 py-3 flex items-center justify-between'>
          <div className='flex-1 flex items-center gap-4'>
            <GlobalSearchTrigger />
          </div>
          <UserMenu />
        </header>

        {/* Content area */}
        <main className='flex-1 overflow-auto'>
          {children ||
            (selectedNote ? (
              <div className='h-full'>
                <RichTextEditor
                  noteId={selectedNote.id}
                  initialTitle={selectedNote.title}
                  initialContent={
                    selectedNote.content
                      ? typeof selectedNote.content === 'string'
                        ? JSON.parse(selectedNote.content)
                        : selectedNote.content
                      : undefined
                  }
                  onTitleChange={(title) => {
                    // TODO: Implement title update
                    console.info('Title changed:', title)
                  }}
                  onContentChange={(content) => {
                    // TODO: Implement content update
                    console.info('Content changed:', content)
                  }}
                />
              </div>
            ) : (
              <div className='flex-1 flex items-center justify-center p-6'>
                <div className='text-center max-w-md'>
                  <h2 className='text-2xl font-semibold mb-2'>
                    Welcome to Notable
                  </h2>
                  <p className='text-muted-foreground mb-6'>
                    A modern note-taking experience
                  </p>
                  <Button onClick={handleCreateNote} size='lg'>
                    <Plus className='mr-2 h-4 w-4' />
                    Create Your First Note
                  </Button>
                </div>
              </div>
            ))}
        </main>
      </div>

      {/* Command Palette */}
      <NotableCommandPalette
        open={commandPalette.open}
        onOpenChange={commandPalette.setOpen}
        onNewNote={handleNewNote}
        onSearch={handleSearch}
        onSettings={handleSettings}
        onToggleTheme={handleToggleTheme}
        onShowKeyboardShortcuts={() => setShowKeyboardShortcuts(true)}
        onExportNote={selectedNote ? handleExportNote : undefined}
        onCopyNote={selectedNote ? handleCopyNote : undefined}
        onDeleteNote={selectedNote ? handleDeleteCurrentNote : undefined}
        onEditNote={selectedNote ? handleEditNote : undefined}
        onAddTag={selectedNote ? handleAddTag : undefined}
        onCreateTag={handleCreateTag}
        onManageTags={handleManageTags}
        onFilterByTag={handleFilterByTag}
        currentTheme={theme}
      />

      {/* Keyboard Shortcuts Dialog */}
      <KeyboardShortcutsDialog
        open={showKeyboardShortcuts}
        onOpenChange={setShowKeyboardShortcuts}
      />

      {/* Advanced Search Dialog */}
      <AdvancedSearch
        open={showAdvancedSearch}
        onOpenChange={setShowAdvancedSearch}
        onSelectResult={(result) => {
          handleNoteSelect(result.id)
          setShowAdvancedSearch(false)
        }}
      />

      {/* Template Picker Dialog */}
      <TemplatePicker
        open={showTemplatePicker}
        onOpenChange={setShowTemplatePicker}
        onTemplateSelect={handleTemplateSelect}
        onCreateBlank={handleCreateBlankNote}
      />

      {/* Template Variable Form Dialog */}
      <TemplateVariableForm
        open={showVariableForm}
        onOpenChange={setShowVariableForm}
        template={selectedTemplate}
        onSubmit={handleCreateNoteFromTemplate}
      />
    </div>
  )
}
