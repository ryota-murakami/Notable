import React, { useCallback, useMemo, useRef, useEffect } from 'react'
import { VariableSizeList as List } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import { Note } from '@/types/note'
import { debounceWithMetrics as debounce } from '@/lib/performance'
import { cn } from '@/lib/utils'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'

interface VirtualizedNoteListProps {
  notes: Note[]
  activeNoteId?: string | null
  onNoteSelect: (note: Note) => void
  onNoteDelete?: (noteId: string) => void
  searchQuery?: string
  className?: string
}

interface ItemData {
  notes: Note[]
  activeNoteId?: string | null
  onNoteSelect: (note: Note) => void
  onNoteDelete?: (noteId: string) => void
  searchQuery?: string
}

const ITEM_SIZE_CACHE = new Map<string, number>()
const DEFAULT_ITEM_SIZE = 120
const OVERSCAN_COUNT = 5

const NoteItem = React.memo<{
  index: number
  style: React.CSSProperties
  data: ItemData
  setSize: (index: number, size: number) => void
}>(({ index, style, data, setSize }) => {
  const { notes, activeNoteId, onNoteSelect, onNoteDelete, searchQuery } = data
  const note = notes[index]
  const rowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (rowRef.current) {
      const height = rowRef.current.getBoundingClientRect().height
      setSize(index, height)
    }
  }, [index, setSize, note])

  const handleClick = useCallback(() => {
    onNoteSelect(note)
  }, [note, onNoteSelect])

  const handleDelete = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      onNoteDelete?.(note.id)
    },
    [note.id, onNoteDelete],
  )

  // Get preview text from content
  const getPreviewText = (content: any): string => {
    if (typeof content === 'string') {
      return content.slice(0, 150)
    }
    if (Array.isArray(content) && content.length > 0) {
      const textNodes = content
        .flatMap((node) => node.children || [])
        .filter((child) => child.text)
        .map((child) => child.text)
      return textNodes.join(' ').slice(0, 150)
    }
    return ''
  }

  const previewText = getPreviewText(note.content)
  const isActive = note.id === activeNoteId

  // Highlight search terms
  const highlightText = (text: string, query?: string): React.ReactNode => {
    if (!query || !text) return text

    const regex = new RegExp(`(${query})`, 'gi')
    const parts = text.split(regex)

    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 dark:bg-yellow-800">
          {part}
        </mark>
      ) : (
        part
      ),
    )
  }

  return (
    <div ref={rowRef} style={style} className="px-4 py-2">
      <Card
        className={cn(
          'cursor-pointer transition-all hover:shadow-md',
          isActive && 'ring-2 ring-primary',
        )}
        onClick={handleClick}
      >
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <CardTitle className="text-lg line-clamp-1">
              {highlightText(note.title, searchQuery)}
            </CardTitle>
            <div className="flex items-center gap-2">
              {note.tags && note.tags.length > 0 && (
                <Badge variant="secondary" className="text-xs">
                  {note.tags.length} tags
                </Badge>
              )}
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={handleDelete}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <CardDescription className="text-sm">
            {formatDistanceToNow(new Date(note.updatedAt), { addSuffix: true })}
          </CardDescription>
        </CardHeader>
        {previewText && (
          <CardContent>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {highlightText(previewText, searchQuery)}
            </p>
          </CardContent>
        )}
      </Card>
    </div>
  )
})

NoteItem.displayName = 'NoteItem'

export const VirtualizedNoteList: React.FC<VirtualizedNoteListProps> = ({
  notes,
  activeNoteId,
  onNoteSelect,
  onNoteDelete,
  searchQuery,
  className,
}) => {
  const listRef = useRef<List>(null)
  const sizeMap = useRef<Map<number, number>>(new Map())

  // Get item size with caching
  const getItemSize = useCallback(
    (index: number) => {
      return (
        sizeMap.current.get(index) ||
        ITEM_SIZE_CACHE.get(notes[index]?.id) ||
        DEFAULT_ITEM_SIZE
      )
    },
    [notes],
  )

  // Set item size and cache it
  const setItemSize = useCallback(
    (index: number, size: number) => {
      sizeMap.current.set(index, size)
      if (notes[index]) {
        ITEM_SIZE_CACHE.set(notes[index].id, size)
      }
      listRef.current?.resetAfterIndex(index)
    },
    [notes],
  )

  // Clear cache on unmount
  useEffect(() => {
    return () => {
      // Keep cache size reasonable
      if (ITEM_SIZE_CACHE.size > 1000) {
        const entries = Array.from(ITEM_SIZE_CACHE.entries())
        const toKeep = entries.slice(-500)
        ITEM_SIZE_CACHE.clear()
        toKeep.forEach(([key, value]) => ITEM_SIZE_CACHE.set(key, value))
      }
    }
  }, [])

  // Scroll to active note
  useEffect(() => {
    if (activeNoteId && listRef.current) {
      const index = notes.findIndex((note) => note.id === activeNoteId)
      if (index !== -1) {
        listRef.current.scrollToItem(index, 'smart')
      }
    }
  }, [activeNoteId, notes])

  // Debounced reset after search
  const debouncedReset = useMemo(
    () =>
      debounce(
        () => {
          listRef.current?.resetAfterIndex(0)
        },
        300,
        'virtualized-note-list-reset',
      ),
    [],
  )

  useEffect(() => {
    debouncedReset()
  }, [searchQuery, debouncedReset])

  const itemData: ItemData = {
    notes,
    activeNoteId,
    onNoteSelect,
    onNoteDelete,
    searchQuery,
  }

  return (
    <div className={cn('h-full', className)}>
      <AutoSizer>
        {({ height, width }) => (
          <List
            ref={listRef}
            height={height}
            width={width}
            itemCount={notes.length}
            itemSize={getItemSize}
            itemData={itemData}
            overscanCount={OVERSCAN_COUNT}
            estimatedItemSize={DEFAULT_ITEM_SIZE}
          >
            {({ index, style, data }) => (
              <NoteItem
                index={index}
                style={style}
                data={data}
                setSize={setItemSize}
              />
            )}
          </List>
        )}
      </AutoSizer>
    </div>
  )
}
