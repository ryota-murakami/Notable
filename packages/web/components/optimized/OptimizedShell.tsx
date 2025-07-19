'use client'

import React, {
  memo,
  useMemo,
  useCallback,
  useState,
  useEffect,
  Suspense,
  lazy,
} from 'react'
import { useSupabase } from '@/hooks/use-supabase'
import { useSupabaseNotes } from '@/hooks/use-supabase-notes'
import { useOptimizedSearch } from '@/hooks/use-optimized-search'
import { useExport } from '@/hooks/use-export'
import { Note } from '@/types/note'
import { Sidebar } from '@/components/sidebar'
import { LazyPlateEditor } from './LazyPlateEditor'
import { cn } from '@/lib/utils'
import { PerformanceMonitor, observeWebVitals } from '@/lib/performance'
import { Skeleton } from '@/components/ui/skeleton'
import { ErrorBoundary } from 'react-error-boundary'

// Lazy load heavy components
const ViewMode = lazy(() =>
  import('@/components/view-mode').then((mod) => ({ default: mod.ViewMode })),
)
const SearchDialog = lazy(() =>
  import('@/components/search-dialog').then((mod) => ({
    default: mod.SearchDialog,
  })),
)

// Memoized sidebar component
const MemoizedSidebar = memo(Sidebar, (prevProps, nextProps) => {
  // Custom comparison to prevent unnecessary re-renders
  return (
    prevProps.notes === nextProps.notes &&
    prevProps.activeNoteId === nextProps.activeNoteId &&
    prevProps.searchQuery === nextProps.searchQuery &&
    prevProps.isCollapsed === nextProps.isCollapsed &&
    prevProps.isLoading === nextProps.isLoading
  )
})

MemoizedSidebar.displayName = 'MemoizedSidebar'

// Error fallback component
const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: {
  error: Error
  resetErrorBoundary: () => void
}) => (
  <div className="flex flex-col items-center justify-center h-full p-8">
    <h2 className="text-xl font-semibold mb-4">Something went wrong</h2>
    <pre className="text-sm text-muted-foreground mb-4">{error.message}</pre>
    <button
      onClick={resetErrorBoundary}
      className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
    >
      Try again
    </button>
  </div>
)

export function OptimizedShell() {
  const { user } = useSupabase()
  const {
    notes,
    isLoading,
    isSaving,
    error,
    createNote,
    updateNote,
    deleteNote,
    saveNote,
    // Real-time sync state
    isConnected,
    connectionError,
    onlineUsers,
    typingUsers,
    startTyping,
    stopTyping,
  } = useSupabaseNotes({ user, activeNoteId: undefined })

  const [activeNoteId, setActiveNoteId] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [viewMode, setViewMode] = useState<'edit' | 'view'>('edit')

  const { exportNote, isExporting, exportProgress } = useExport()

  // Performance monitoring
  useEffect(() => {
    const monitor = PerformanceMonitor.getInstance()

    // Monitor web vitals
    const unsubscribe = observeWebVitals((metric) => {
      console.log(`${metric.name}: ${metric.value} (${metric.rating})`)

      // Send to analytics if needed
      if (window.gtag) {
        window.gtag('event', metric.name, {
          value: Math.round(
            metric.name === 'CLS' ? metric.value * 1000 : metric.value,
          ),
          metric_rating: metric.rating,
          non_interaction: true,
        })
      }
    })

    return () => {
      unsubscribe()
      // Log performance report on unmount
      console.log('Performance Report:', monitor.getReport())
    }
  }, [])

  // Optimized search with debouncing and performance tracking
  const { searchResults, isSearching, searchTime } = useOptimizedSearch({
    notes,
    searchQuery,
    debounceMs: 300,
  })

  // Memoized active note to prevent unnecessary re-renders
  const activeNote = useMemo(
    () => notes.find((note) => note.id === activeNoteId) || null,
    [notes, activeNoteId],
  )

  // Memoized filtered notes based on search
  const filteredNotes = useMemo(
    () => (searchQuery ? searchResults : notes),
    [searchQuery, searchResults, notes],
  )

  // Optimized callbacks with useCallback
  const handleNoteSelect = useCallback((noteId: string) => {
    setActiveNoteId(noteId)
    setViewMode('edit')
  }, [])

  const handleCreateNote = useCallback(async () => {
    const monitor = PerformanceMonitor.getInstance()
    const newNote = await monitor.measureAsync('create-note', () =>
      createNote(),
    )
    if (newNote) {
      setActiveNoteId(newNote.id)
      setViewMode('edit')
    }
  }, [createNote])

  const handleDeleteNote = useCallback(
    async (noteId: string) => {
      const monitor = PerformanceMonitor.getInstance()
      await monitor.measureAsync('delete-note', () => deleteNote(noteId))
      if (activeNoteId === noteId) {
        setActiveNoteId(null)
      }
    },
    [deleteNote, activeNoteId],
  )

  const handleSaveNote = useCallback(
    async (note: Note) => {
      const monitor = PerformanceMonitor.getInstance()
      await monitor.measureAsync('save-note', () => saveNote(note))
    },
    [saveNote],
  )

  const handleExportNote = useCallback(
    async (format: any) => {
      if (activeNote) {
        const monitor = PerformanceMonitor.getInstance()
        await monitor.measureAsync('export-note', () =>
          exportNote(activeNote, format),
        )
      }
    },
    [activeNote, exportNote],
  )

  const handleToggleSidebar = useCallback(() => {
    setIsSidebarCollapsed((prev) => !prev)
  }, [])

  const handleToggleViewMode = useCallback(() => {
    setViewMode((prev) => (prev === 'edit' ? 'view' : 'edit'))
  }, [])

  // Keyboard shortcuts with performance optimization
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Use requestIdleCallback for non-critical shortcuts
      if ('requestIdleCallback' in window) {
        requestIdleCallback(
          () => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
              e.preventDefault()
              setIsSearchOpen(true)
            } else if ((e.metaKey || e.ctrlKey) && e.key === 'n') {
              e.preventDefault()
              handleCreateNote()
            } else if ((e.metaKey || e.ctrlKey) && e.key === 'b') {
              e.preventDefault()
              handleToggleSidebar()
            } else if ((e.metaKey || e.ctrlKey) && e.key === 'e') {
              e.preventDefault()
              handleToggleViewMode()
            }
          },
          { timeout: 50 },
        )
      } else {
        // Fallback for browsers without requestIdleCallback
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
          e.preventDefault()
          setIsSearchOpen(true)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleCreateNote, handleToggleSidebar, handleToggleViewMode])

  return (
    <div className="flex h-screen bg-background">
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => window.location.reload()}
      >
        {/* Optimized Sidebar */}
        <MemoizedSidebar
          notes={filteredNotes}
          activeNoteId={activeNoteId}
          onNoteSelect={handleNoteSelect}
          onCreateNote={handleCreateNote}
          onDeleteNote={handleDeleteNote}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={handleToggleSidebar}
          isLoading={isLoading}
          user={user}
          onlineUsers={onlineUsers}
          isConnected={isConnected}
        />

        {/* Main Content Area */}
        <main
          className={cn(
            'flex-1 flex flex-col transition-all duration-300',
            isSidebarCollapsed ? 'ml-16' : 'ml-64',
          )}
        >
          {activeNote ? (
            <Suspense
              fallback={
                <div className="flex-1 p-8">
                  <Skeleton className="h-12 w-1/2 mb-4" />
                  <Skeleton className="h-96 w-full" />
                </div>
              }
            >
              {viewMode === 'edit' ? (
                <LazyPlateEditor
                  note={activeNote}
                  onSave={handleSaveNote}
                  onExport={handleExportNote}
                  onToggleViewMode={handleToggleViewMode}
                  isExporting={isExporting}
                  exportProgress={exportProgress}
                  typingUsers={typingUsers}
                  onStartTyping={startTyping}
                  onStopTyping={stopTyping}
                />
              ) : (
                <ViewMode
                  note={activeNote}
                  onToggleViewMode={handleToggleViewMode}
                  onExport={handleExportNote}
                />
              )}
            </Suspense>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-2">
                  No note selected
                </h2>
                <p className="text-muted-foreground mb-4">
                  Select a note from the sidebar or create a new one
                </p>
                <button
                  onClick={handleCreateNote}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
                >
                  Create New Note
                </button>
              </div>
            </div>
          )}
        </main>

        {/* Lazy loaded search dialog */}
        <Suspense fallback={null}>
          {isSearchOpen && (
            <SearchDialog
              notes={notes}
              isOpen={isSearchOpen}
              onClose={() => setIsSearchOpen(false)}
              onNoteSelect={(noteId) => {
                handleNoteSelect(noteId)
                setIsSearchOpen(false)
              }}
            />
          )}
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}
