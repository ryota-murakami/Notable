/**
 * Virtualized note list component for efficient rendering of large lists
 * Uses react-window for windowing to handle 100,000+ notes
 */

import React, { useCallback, useMemo, useRef, useEffect } from 'react'
import { FixedSizeList as List, ListChildComponentProps } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import { Note } from '@/types/note'
import { usePerformanceMonitor } from '@/hooks/use-performance-monitor'
import { cn } from '@/lib/utils'

interface VirtualizedNoteListProps {
  notes: Note[]
  selectedNoteId?: string
  onNoteSelect: (note: Note) => void
  searchQuery?: string
  className?: string
  itemHeight?: number
  overscan?: number
}

/**
 * Individual note row component
 */
const NoteRow = React.memo<{
  data: {
    notes: Note[]
    selectedNoteId?: string
    onNoteSelect: (note: Note) => void
    searchQuery?: string
  }
  index: number
  style: React.CSSProperties
}>(({ data, index, style }) => {
  const { notes, selectedNoteId, onNoteSelect, searchQuery } = data
  const note = notes[index]
  const isSelected = note.id === selectedNoteId

  const handleClick = useCallback(() => {
    onNoteSelect(note)
  }, [note, onNoteSelect])

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
      style={style}
      className={cn(
        'px-4 py-3 border-b border-gray-200 dark:border-gray-700',
        'cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800',
        'transition-colors duration-150',
        isSelected && 'bg-blue-50 dark:bg-blue-900/20'
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
      <h3 className='font-medium text-gray-900 dark:text-gray-100 truncate'>
        {highlightedTitle}
      </h3>
      <p className='text-sm text-gray-500 dark:text-gray-400 truncate mt-1'>
        {note.excerpt || note.content?.substring(0, 100) || 'No content'}
      </p>
      <div className='flex items-center gap-2 mt-2'>
        <span className='text-xs text-gray-400 dark:text-gray-500'>
          {new Date(note.updatedAt).toLocaleDateString()}
        </span>
        {note.tags && note.tags.length > 0 && (
          <div className='flex gap-1'>
            {note.tags.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className='text-xs px-2 py-0.5 bg-gray-200 dark:bg-gray-700 rounded'
              >
                {tag}
              </span>
            ))}
            {note.tags.length > 3 && (
              <span className='text-xs text-gray-400'>
                +{note.tags.length - 3}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )
})

NoteRow.displayName = 'NoteRow'

/**
 * Virtualized note list component
 */
export const VirtualizedNoteList: React.FC<VirtualizedNoteListProps> = ({
  notes,
  selectedNoteId,
  onNoteSelect,
  searchQuery,
  className,
  itemHeight = 90,
  overscan = 5,
}) => {
  const listRef = useRef<List>(null)
  const { trackMetric, startTimer } = usePerformanceMonitor({
    componentName: 'VirtualizedNoteList',
    trackRenders: true,
  })

  // Track list size
  useEffect(() => {
    trackMetric('note_count', notes.length, 'count')
  }, [notes.length, trackMetric])

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

  // Memoize item data to prevent unnecessary re-renders
  const itemData = useMemo(
    () => ({
      notes,
      selectedNoteId,
      onNoteSelect,
      searchQuery,
    }),
    [notes, selectedNoteId, onNoteSelect, searchQuery]
  )

  // Track scroll performance
  const handleScroll = useCallback(
    ({
      scrollOffset,
      _scrollDirection,
    }: {
      scrollOffset: number
      _scrollDirection: 'forward' | 'backward'
    }) => {
      trackMetric('scroll_offset', scrollOffset, 'count')
    },
    [trackMetric]
  )

  // Empty state
  if (notes.length === 0) {
    return (
      <div
        className={cn('flex items-center justify-center h-full p-8', className)}
      >
        <div className='text-center'>
          <p className='text-gray-500 dark:text-gray-400'>
            {searchQuery
              ? 'No notes found matching your search.'
              : 'No notes yet.'}
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
              onItemsRendered={() => {
                endTimer()
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
 * Hook for preloading notes around the current viewport
 */
export function useNotePreloading(
  notes: Note[],
  visibleRange: { start: number; end: number },
  preloadCount: number = 10
) {
  const { measureAsync } = usePerformanceMonitor({
    componentName: 'NotePreloader',
  })

  useEffect(() => {
    const preloadNotes = async () => {
      const startIndex = Math.max(0, visibleRange.start - preloadCount)
      const endIndex = Math.min(
        notes.length - 1,
        visibleRange.end + preloadCount
      )

      const notesToPreload = notes.slice(startIndex, endIndex + 1)

      await measureAsync('preload_notes', async () => {
        // Simulate preloading note content
        // In real implementation, this would fetch full note content
        await Promise.all(
          notesToPreload.map(async (_note) => {
            // Preload logic here
            await new Promise((resolve) => setTimeout(resolve, 10))
          })
        )
      })
    }

    preloadNotes()
  }, [visibleRange, notes, preloadCount, measureAsync])
}
