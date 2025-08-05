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
import {
  Archive,
  BarChart3,
  FileText,
  FolderIcon,
  Plus,
  Star,
  Tags,
} from 'lucide-react'
import { RichTextEditor } from '@/components/rich-text-editor'
import { NoteActions } from '@/components/note-actions'
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
import { TagManagementPanel } from '@/components/ui/tag-management-panel'
import { DailyNotes } from '@/components/ui/daily-notes'
import { SmartNoteSuggestions } from '@/components/ui/smart-note-suggestions'
import { FolderTree } from '@/components/folders/folder-tree'
import { NewFolderButton } from '@/components/folders/new-folder-button'
import { useFolders } from '@/hooks/use-folders'

export function Shell({ children }: { children?: React.ReactNode }) {
  const [user, setUser] = useState<SupabaseUser | null>(null)
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null)
  const [selectedFolderId, setSelectedFolderId] = useState<string | null>(null)
  const {
    notes,
    loading: notesLoading,
    createNote,
    deleteNote,
  } = useNotes({
    folder_id: selectedFolderId,
  })
  const { moveNotesToFolder } = useFolders()
  const router = useRouter()
  // TODO: Integrate routing functionality - current, title, navigate will be used for navigation
  const { current: _current, title: _title, navigate: _navigate } = useRouting()
  const supabase = createClient()

  // Note organization state
  const [noteOrganization, setNoteOrganization] = useState({
    favorites: [] as string[],
    pinned: [] as string[],
    archived: [] as string[],
  })

  // Filter state
  const [activeFilter, setActiveFilter] = useState<
    'all' | 'favorites' | 'archived'
  >('all')

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

  // Tag management state
  const [showTagManagement, setShowTagManagement] = useState(false)
  const [showVariableForm, setShowVariableForm] = useState(false)
  const templateActions = useTemplateActions()

  // Tag management
  const { getOrCreateTag } = useTagManager()

  // Get selected note data
  const selectedNote = selectedNoteId
    ? notes.find((note) => note.id === selectedNoteId)
    : null

  // In test mode, treat as initialized to show the main UI
  const [isTestMode, setIsTestMode] = useState(() => {
    // Initialize with the correct value immediately to avoid timing issues
    return isTest()
  })

  useEffect(() => {
    // Double-check the test mode on mount in case it changes
    const testMode = isTest()
    if (testMode !== isTestMode) {
      setIsTestMode(testMode)
    }

    // Set hydration flag for tests - always set it to ensure E2E tests work
    if (typeof window !== 'undefined') {
      ;(window as any).__NOTABLE_HYDRATED = true
      // Hydration flag set for E2E tests
    }
  }, [isTestMode])

  // Set hydration flag immediately on mount for E2E tests
  useEffect(() => {
    if (typeof window !== 'undefined') {
      ;(window as any).__NOTABLE_HYDRATED = true
      // Hydration flag set immediately on mount
    }
  }, [])

  // Command handlers
  const handleNewNote = useCallback(async () => {
    // Check if we should force template picker in tests
    const forceTemplatePicker =
      typeof window !== 'undefined' &&
      window.sessionStorage.getItem('forceTemplatePicker') === 'true'

    // In test mode, create note directly without template picker (unless forced)
    if (isTestMode && !forceTemplatePicker) {
      try {
        const newNote = await createNote({
          title: 'Untitled',
          content: '',
          folder_id: selectedFolderId,
        })

        if (newNote) {
          setSelectedNoteId(newNote.id)

          // Store note ID for test helpers
          if (typeof window !== 'undefined') {
            window.sessionStorage.setItem('lastCreatedNoteId', newNote.id)
          }

          router.push(`/notes/${newNote.id}`)
        }
      } catch (error) {
        console.error('Failed to create note:', error)
      }
    } else {
      // Show template picker instead of creating note directly
      setShowTemplatePicker(true)
    }
  }, [isTestMode, router, createNote, selectedFolderId])

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
    setShowTagManagement(true)
  }, [])

  const handleFilterByTag = useCallback(() => {
    // TODO: Implement tag filtering
    toast({
      title: 'Filter by tag',
      description: 'Tag filtering is not yet implemented.',
    })
  }, [])

  // Note organization handlers
  const handleToggleFavorite = useCallback((noteId: string) => {
    setNoteOrganization((prev) => ({
      ...prev,
      favorites: prev.favorites.includes(noteId)
        ? prev.favorites.filter((id) => id !== noteId)
        : [...prev.favorites, noteId],
    }))
  }, [])

  const handleTogglePin = useCallback((noteId: string) => {
    setNoteOrganization((prev) => ({
      ...prev,
      pinned: prev.pinned.includes(noteId)
        ? prev.pinned.filter((id) => id !== noteId)
        : [...prev.pinned, noteId],
    }))
  }, [])

  const handleToggleArchive = useCallback((noteId: string) => {
    setNoteOrganization((prev) => ({
      ...prev,
      archived: prev.archived.includes(noteId)
        ? prev.archived.filter((id) => id !== noteId)
        : [...prev.archived, noteId],
    }))
  }, [])

  // Handle note selection
  const handleNoteSelect = useCallback(
    (noteId: string) => {
      setSelectedNoteId(noteId)
      router.push(`/notes/${noteId}`)
    },
    [router]
  )

  // Keyboard shortcuts registration
  const shortcuts = useMemo(
    () => [
      // Basic shortcuts
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
        action: commandPalette.toggle,
      },
      {
        id: 'open-advanced-search',
        action: () => setShowAdvancedSearch(true),
      },
      {
        id: 'command-palette',
        action: commandPalette.toggle,
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
          } else if (showAdvancedSearch) {
            setShowAdvancedSearch(false)
          } else if (showTemplatePicker) {
            setShowTemplatePicker(false)
          } else if (showTagManagement) {
            setShowTagManagement(false)
          } else if (showVariableForm) {
            setShowVariableForm(false)
          } else if (commandPalette.open) {
            commandPalette.close()
          }
        },
      },

      // New feature shortcuts
      {
        id: 'open-daily-note',
        action: () => {
          // TODO: Implement daily note creation/opening
          console.info('Opening daily note')
          toast({
            title: 'Daily Note',
            description: "Opening today's daily note...",
          })
        },
      },
      {
        id: 'open-yesterday-note',
        action: () => {
          // TODO: Implement yesterday's note opening
          console.info("Opening yesterday's note")
          toast({
            title: 'Daily Note',
            description: "Opening yesterday's daily note...",
          })
        },
      },
      {
        id: 'open-version-history',
        action: () => {
          if (selectedNote) {
            // TODO: Open version history dialog
            console.info('Opening version history for note:', selectedNote.id)
            toast({
              title: 'Version History',
              description: 'Opening version history...',
            })
          } else {
            toast({
              title: 'No Note Selected',
              description: 'Please select a note first',
              variant: 'destructive',
            })
          }
        },
      },
      {
        id: 'open-template-picker',
        action: () => setShowTemplatePicker(true),
      },
      {
        id: 'open-export',
        action: () => {
          if (selectedNote) {
            // TODO: Open export dialog
            console.info('Opening export for note:', selectedNote.id)
            toast({ title: 'Export', description: 'Opening export dialog...' })
          } else {
            toast({
              title: 'No Note Selected',
              description: 'Please select a note first',
              variant: 'destructive',
            })
          }
        },
      },
      {
        id: 'open-graph-view',
        action: () => {
          router.push('/app/graph')
          toast({
            title: 'Graph View',
            description: 'Opening graph visualization...',
          })
        },
      },
      {
        id: 'open-tag-management',
        action: () => setShowTagManagement(true),
      },

      // Note organization shortcuts
      {
        id: 'toggle-favorite',
        action: () => {
          if (selectedNote) {
            handleToggleFavorite(selectedNote.id)
          } else {
            toast({
              title: 'No Note Selected',
              description: 'Please select a note first',
              variant: 'destructive',
            })
          }
        },
      },
      {
        id: 'toggle-pin',
        action: () => {
          if (selectedNote) {
            handleTogglePin(selectedNote.id)
          } else {
            toast({
              title: 'No Note Selected',
              description: 'Please select a note first',
              variant: 'destructive',
            })
          }
        },
      },
      {
        id: 'toggle-archive',
        action: () => {
          if (selectedNote) {
            handleToggleArchive(selectedNote.id)
          } else {
            toast({
              title: 'No Note Selected',
              description: 'Please select a note first',
              variant: 'destructive',
            })
          }
        },
      },

      // Focus shortcuts
      {
        id: 'focus-title',
        action: () => {
          const titleInput = document.querySelector(
            'input[placeholder*="Untitled"]'
          ) as HTMLInputElement
          if (titleInput) {
            titleInput.focus()
            titleInput.select()
          }
        },
      },
      {
        id: 'focus-content',
        action: () => {
          const contentEditor = document.querySelector(
            '[contenteditable="true"]'
          ) as HTMLElement
          if (contentEditor) {
            contentEditor.focus()
          }
        },
      },

      // Note navigation shortcuts
      {
        id: 'navigate-next',
        action: () => {
          const currentIndex = selectedNoteId
            ? notes.findIndex((note) => note.id === selectedNoteId)
            : -1
          if (currentIndex >= 0 && currentIndex < notes.length - 1) {
            const nextNote = notes[currentIndex + 1]
            handleNoteSelect(nextNote.id)
          }
        },
      },
      {
        id: 'navigate-previous',
        action: () => {
          const currentIndex = selectedNoteId
            ? notes.findIndex((note) => note.id === selectedNoteId)
            : -1
          if (currentIndex > 0) {
            const prevNote = notes[currentIndex - 1]
            handleNoteSelect(prevNote.id)
          }
        },
      },

      // Quick switch shortcuts (1-9)
      ...Array.from({ length: 9 }, (_, i) => ({
        id: `quick-switch-${i + 1}`,
        action: () => {
          if (notes[i]) {
            handleNoteSelect(notes[i].id)
          }
        },
      })),
    ],
    [
      handleNewNote,
      handleDeleteCurrentNote,
      commandPalette.toggle,
      commandPalette.close,
      commandPalette.open,
      showKeyboardShortcuts,
      showAdvancedSearch,
      showTemplatePicker,
      showTagManagement,
      showVariableForm,
      selectedNote,
      handleToggleFavorite,
      handleTogglePin,
      handleToggleArchive,
      handleNoteSelect,
      notes,
      selectedNoteId,
      router,
    ]
  )

  useKeyboardShortcuts(shortcuts)

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
        folder_id: selectedFolderId,
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
  }, [createNote, router, selectedFolderId])

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
            className='w-full justify-start mb-4'
            size='sm'
            data-testid='new-note-button'
          >
            <Plus className='mr-2 h-4 w-4' />
            New Note
          </Button>

          {/* Daily Notes */}
          <div className='mb-6'>
            <DailyNotes compact />
          </div>

          {/* Folders */}
          <div className='mb-4'>
            <div className='flex items-center justify-between mb-2'>
              <h3 className='text-sm font-medium text-muted-foreground'>
                Folders
              </h3>
              <NewFolderButton
                parentId={selectedFolderId}
                variant='ghost'
                size='icon'
                className='h-6 w-6'
                data-testid='new-folder-button'
              />
            </div>
            <FolderTree
              selectedFolderId={selectedFolderId}
              onFolderSelect={setSelectedFolderId}
              onNoteCreate={async (folderId) => {
                setSelectedFolderId(folderId)
                await handleNewNote()
              }}
            />
          </div>

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
                notes
                  .filter((note) => {
                    if (activeFilter === 'favorites') {
                      return noteOrganization.favorites.includes(note.id)
                    }
                    if (activeFilter === 'archived') {
                      return noteOrganization.archived.includes(note.id)
                    }
                    // For 'all' filter, exclude archived notes
                    return !noteOrganization.archived.includes(note.id)
                  })
                  .sort((a, b) => {
                    // Sort pinned notes first
                    const aPinned = noteOrganization.pinned.includes(a.id)
                    const bPinned = noteOrganization.pinned.includes(b.id)
                    if (aPinned && !bPinned) return -1
                    if (!aPinned && bPinned) return 1
                    return 0
                  })
                  .map((note) => (
                    <div
                      key={note.id}
                      className='flex items-center p-2 rounded-md hover:bg-muted group'
                    >
                      <button
                        onClick={() => handleNoteSelect(note.id)}
                        className='flex items-center space-x-2 flex-1 text-left'
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
                      <div className='opacity-0 group-hover:opacity-100 transition-opacity'>
                        <NoteActions
                          noteId={note.id}
                          isFavorite={noteOrganization.favorites.includes(
                            note.id
                          )}
                          isPinned={noteOrganization.pinned.includes(note.id)}
                          isArchived={noteOrganization.archived.includes(
                            note.id
                          )}
                          onFavorite={() => handleToggleFavorite(note.id)}
                          onPin={() => handleTogglePin(note.id)}
                          onArchive={() => handleToggleArchive(note.id)}
                          className='ml-2'
                        />
                      </div>
                    </div>
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
              variant={activeFilter === 'favorites' ? 'secondary' : 'ghost'}
              className='w-full justify-start'
              data-testid='filter-favorites'
              onClick={() =>
                setActiveFilter(
                  activeFilter === 'favorites' ? 'all' : 'favorites'
                )
              }
            >
              <Star className='mr-2 h-4 w-4' />
              Favorites
            </Button>
            <Button
              variant={activeFilter === 'archived' ? 'secondary' : 'ghost'}
              className='w-full justify-start'
              data-testid='filter-archived'
              onClick={() =>
                setActiveFilter(
                  activeFilter === 'archived' ? 'all' : 'archived'
                )
              }
            >
              <Archive className='mr-2 h-4 w-4' />
              Archived
            </Button>
          </div>

          {/* Tag Management */}
          <div className='mt-4'>
            <Button
              variant='ghost'
              className='w-full justify-start'
              onClick={handleManageTags}
            >
              <Tags className='mr-2 h-4 w-4' />
              Manage Tags
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
              <div className='h-full flex'>
                {/* Main editor area */}
                <div className='flex-1 min-w-0'>
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
                    isFavorite={noteOrganization.favorites.includes(
                      selectedNote.id
                    )}
                    isPinned={noteOrganization.pinned.includes(selectedNote.id)}
                    isArchived={noteOrganization.archived.includes(
                      selectedNote.id
                    )}
                    onToggleFavorite={() =>
                      handleToggleFavorite(selectedNote.id)
                    }
                    onTogglePin={() => handleTogglePin(selectedNote.id)}
                    onToggleArchive={() => handleToggleArchive(selectedNote.id)}
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

                {/* Smart suggestions panel */}
                <div className='w-80 border-l bg-background p-4 overflow-y-auto'>
                  <SmartNoteSuggestions
                    noteId={selectedNote.id}
                    noteTitle={selectedNote.title}
                    noteContent={
                      typeof selectedNote.content === 'string'
                        ? selectedNote.content
                        : JSON.stringify(selectedNote.content || [])
                    }
                    onNoteSelect={handleNoteSelect}
                    onSearchQuery={(query) => {
                      setShowAdvancedSearch(true)
                      // TODO: Set search query in advanced search
                      console.info('Search query:', query)
                    }}
                    onTagSelect={(tag) => {
                      // TODO: Add tag to current note
                      console.info('Tag selected:', tag)
                    }}
                  />
                </div>
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

      {/* Tag Management Panel */}
      <TagManagementPanel
        open={showTagManagement}
        onOpenChange={setShowTagManagement}
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
