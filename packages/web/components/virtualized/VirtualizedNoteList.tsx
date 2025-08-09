/**
 * Enhanced Virtualized note list component for efficient rendering of large lists
 * Uses react-window with intelligent caching and progressive loading
 * Optimized for 100,000+ notes with instant loading from IndexedDB
 */

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { FixedSizeList as List } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import type { Note } from '@/types/note'
import { usePerformanceMonitor } from '@/hooks/use-performance-monitor'
import { useCachedNotes } from '@/hooks/use-cached-notes'
import {
  NoteListSkeleton,
  NoteCardSkeleton,
  SmartSkeleton,
} from '@/components/ui/progressive-skeleton'
import { indexedDBCache } from '@/lib/cache/indexeddb-cache'
import { cn } from '@/lib/utils'

interface VirtualizedNoteListProps {
  userId?: string
  notes?: Note[] // Optional - will use cached notes if not provided
  selectedNoteId?: string
  onNoteSelect: (note: Note) => void
  searchQuery?: string
  className?: string
  itemHeight?: number
  overscan?: number
  tags?: string[]
  limit?: number
  enableCaching?: boolean
  showSkeletonWhileLoading?: boolean
}

/**
 * Enhanced individual note row component with progressive loading
 */
const NoteRow = React.memo<{
  data: {
    notes: Note[]
    selectedNoteId?: string
    onNoteSelect: (note: Note) => void
    searchQuery?: string
    isLoading?: boolean
    preloadNote?: (noteId: string) => void
  }
  index: number
  style: React.CSSProperties
}>(({ data, index, style }) => {
  const {
    notes,
    selectedNoteId,
    onNoteSelect,
    searchQuery,
    isLoading,
    preloadNote,
  } = data
  const [isVisible, setIsVisible] = useState(false)
  const noteRef = useRef<HTMLDivElement>(null)

  // Show skeleton while loading or if note doesn't exist yet
  if (isLoading || !notes[index]) {
    return (
      <div style={style} className='px-4 py-3'>
        <NoteCardSkeleton className='border-0' />
      </div>
    )
  }

  const note = notes[index]
  const isSelected = note.id === selectedNoteId

  const handleClick = useCallback(() => {
    onNoteSelect(note)
    // Preload related notes when a note is selected
    if (preloadNote) {
      preloadNote(note.id)
    }
  }, [note, onNoteSelect, preloadNote])

  // Intersection observer for progressive loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (noteRef.current) {
      observer.observe(noteRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Highlight search terms
  const highlightedTitle = useMemo(() => {
    if (!searchQuery) return note.title

    const regex = new RegExp(`(${searchQuery})`, 'gi')
    const parts = note.title.split(regex)

    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark key={i} className='bg-yellow-200 dark:bg-yellow-900'>
          {part}
        </mark>
      ) : (
        part
      )
    )
  }, [note.title, searchQuery])

  return (
    <div
      ref={noteRef}
      style={style}
      className={cn(
        'px-4 py-3 border-b border-gray-200 dark:border-gray-700',
        'cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800',
        'transition-all duration-200 ease-in-out',
        'transform hover:scale-[1.01]',
        isSelected && 'bg-blue-50 dark:bg-blue-900/20 shadow-sm',
        !isVisible && 'opacity-75'
      )}
      onClick={handleClick}
      role='button'
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleClick()
        }
      }}
    >
      <div
        className={cn(
          'transition-opacity duration-300',
          isVisible ? 'opacity-100' : 'opacity-70'
        )}
      >
        <h3 className='font-medium text-gray-900 dark:text-gray-100 truncate leading-tight'>
          {highlightedTitle}
        </h3>
        <p className='text-sm text-gray-500 dark:text-gray-400 truncate mt-1 leading-relaxed'>
          {note.content?.substring(0, 120) || 'No content'}
        </p>
        <div className='flex items-center justify-between gap-2 mt-2'>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-gray-400 dark:text-gray-500'>
              {new Date(note.updated_at).toLocaleDateString()}
            </span>
            {note.tags && note.tags.length > 0 && (
              <div className='flex gap-1'>
                {note.tags.slice(0, 2).map((tag, i) => (
                  <span
                    key={i}
                    className='text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300'
                  >
                    {tag}
                  </span>
                ))}
                {note.tags.length > 2 && (
                  <span className='text-xs text-gray-400 px-1'>
                    +{note.tags.length - 2}
                  </span>
                )}
              </div>
            )}
          </div>
          {isSelected && (
            <div className='text-blue-500 text-xs font-medium'>✓ Selected</div>
          )}
        </div>
      </div>
    </div>
  )
})

NoteRow.displayName = 'NoteRow'

/**
 * Enhanced virtualized note list component with caching
 */
export const VirtualizedNoteList: React.FC<VirtualizedNoteListProps> = ({
  userId,
  notes: externalNotes,
  selectedNoteId,
  onNoteSelect,
  searchQuery,
  className,
  itemHeight = 100, // Slightly taller for better readability
  overscan = 8, // More overscan for smoother scrolling
  tags,
  limit = 100,
  enableCaching = true,
  showSkeletonWhileLoading = true,
}) => {
  const listRef = useRef<List>(null)
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 0 })
  const { trackMetric, startTimer } = usePerformanceMonitor({
    componentName: 'VirtualizedNoteList',
    trackRenders: true,
  })

  // Use cached notes hook if caching is enabled and userId is provided
  const cachedNotesResult = useCachedNotes({
    userId: enableCaching ? userId : undefined,
    searchQuery,
    tags,
    limit,
    enablePreloading: true,
    cacheFirst: true,
  })

  // Determine which notes to use
  const notes = useMemo(() => {
    if (externalNotes) {
      return externalNotes // Use provided notes
    }
    if (enableCaching && userId) {
      return cachedNotesResult.notes // Use cached notes
    }
    return [] // No notes available
  }, [externalNotes, enableCaching, userId, cachedNotesResult.notes])

  const isLoading = useMemo(() => {
    if (externalNotes) {
      return false // External notes are already loaded
    }
    if (enableCaching && userId) {
      return cachedNotesResult.isLoading
    }
    return false
  }, [externalNotes, enableCaching, userId, cachedNotesResult.isLoading])

  // Track list size and performance metrics
  useEffect(() => {
    trackMetric('note_count', notes.length, 'count')
    trackMetric('cache_enabled', enableCaching ? 1 : 0, 'count')
    if (enableCaching && userId) {
      trackMetric(
        'cache_hit_rate',
        cachedNotesResult.cacheStats.hitRate,
        'percentage'
      )
    }
  }, [
    notes.length,
    trackMetric,
    enableCaching,
    userId,
    cachedNotesResult.cacheStats.hitRate,
  ])

  // Scroll to selected note
  useEffect(() => {
    if (selectedNoteId && listRef.current) {
      const selectedIndex = notes.findIndex(
        (note) => note.id === selectedNoteId
      )
      if (selectedIndex !== -1) {
        listRef.current.scrollToItem(selectedIndex, 'smart')
      }
    }
  }, [selectedNoteId, notes])

  // Preload function for related notes
  const preloadNote = useCallback(
    async (noteId: string) => {
      if (enableCaching && userId) {
        await cachedNotesResult.preloadRelatedNotes(noteId)
        trackMetric('preload_triggered', 1, 'count')
      }
    },
    [enableCaching, userId, cachedNotesResult.preloadRelatedNotes, trackMetric]
  )

  // Memoize item data to prevent unnecessary re-renders
  const itemData = useMemo(
    () => ({
      notes,
      selectedNoteId,
      onNoteSelect,
      searchQuery,
      isLoading,
      preloadNote,
    }),
    [notes, selectedNoteId, onNoteSelect, searchQuery, isLoading, preloadNote]
  )

  // Track scroll performance and visible range
  const handleScroll = useCallback(
    (props: any) => {
      trackMetric('scroll_offset', props.scrollOffset, 'count')
    },
    [trackMetric]
  )

  // Track visible items for preloading
  const handleItemsRendered = useCallback(
    (props: { visibleStartIndex: number; visibleStopIndex: number }) => {
      setVisibleRange({
        start: props.visibleStartIndex,
        end: props.visibleStopIndex,
      })
      trackMetric(
        'visible_items',
        props.visibleStopIndex - props.visibleStartIndex + 1,
        'count'
      )
    },
    [trackMetric]
  )

  // Show skeleton while loading
  if (isLoading && showSkeletonWhileLoading) {
    return (
      <div className={cn('h-full', className)}>
        <SmartSkeleton contentType='list' itemCount={8} isLoading={true} />
      </div>
    )
  }

  // Empty state
  if (notes.length === 0 && !isLoading) {
    return (
      <div
        className={cn('flex items-center justify-center h-full p-8', className)}
      >
        <div className='text-center space-y-3'>
          <div className='text-4xl text-gray-300'>📝</div>
          <h3 className='text-lg font-medium text-gray-900 dark:text-gray-100'>
            {searchQuery ? 'No notes found' : 'No notes yet'}
          </h3>
          <p className='text-gray-500 dark:text-gray-400 max-w-sm'>
            {searchQuery
              ? `No notes match "${searchQuery}". Try different keywords or browse all notes.`
              : 'Create your first note to get started organizing your thoughts.'}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={cn('h-full', className)}>
      <AutoSizer>
        {({ height, width }) => {
          const endTimer = startTimer('list_render')

          return (
            <List
              ref={listRef}
              height={height}
              itemCount={notes.length}
              itemSize={itemHeight}
              width={width}
              itemData={itemData}
              overscanCount={overscan}
              onScroll={handleScroll}
              onItemsRendered={(props) => {
                handleItemsRendered(props)
                endTimer()
              }}
              style={{
                scrollBehavior: 'smooth',
              }}
            >
              {NoteRow}
            </List>
          )
        }}
      </AutoSizer>
    </div>
  )
}

/**
 * Enhanced hook for intelligent note preloading with caching
 */
export function useNotePreloading(
  notes: Note[],
  visibleRange: { start: number; end: number },
  userId?: string,
  preloadCount: number = 15
) {
  const { measureAsync } = usePerformanceMonitor({
    componentName: 'NotePreloader',
  })

  useEffect(() => {
    const preloadNotes = async () => {
      if (!userId) return

      const startIndex = Math.max(0, visibleRange.start - preloadCount)
      const endIndex = Math.min(
        notes.length - 1,
        visibleRange.end + preloadCount
      )

      const notesToPreload = notes.slice(startIndex, endIndex + 1)

      await measureAsync('intelligent_preload', async () => {
        // Preload content into cache
        await Promise.all(
          notesToPreload.map(async (note) => {
            // Cache the note content for instant access
            await indexedDBCache.set(`note:${note.id}`, note, {
              metadata: {
                noteId: note.id,
                userId,
                preloaded: true,
                timestamp: Date.now(),
              },
            })

            // Simulate content loading time
            await new Promise((resolve) => setTimeout(resolve, 5))
          })
        )
      })
    }

    // Debounce preloading to avoid excessive calls
    const timer = setTimeout(preloadNotes, 100)
    return () => clearTimeout(timer)
  }, [visibleRange, notes, preloadCount, measureAsync, userId])
}
