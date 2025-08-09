/**
 * Optimized Plate.js Editor for Large Documents
 * Enhanced with performance optimizations and intelligent content management
 */

'use client'

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { type Value, type TElement } from '@udecode/plate-common'
import {
  Plate,
  usePlateEditor,
  PlateContent,
} from '@udecode/plate-common/react'
import {
  usePerformanceMonitor,
  useInteractionTracking,
} from '@/hooks/use-performance-monitor'
import { useDebounce } from '@/hooks/use-debounce'
import { indexedDBCache } from '@/lib/cache/indexeddb-cache'
import { EditorSkeleton } from '@/components/ui/progressive-skeleton'
import { BasicNodesKit } from './plugins/basic-nodes-kit'
import { FloatingToolbar } from './floating-toolbar'
import { cn } from '@/lib/utils'

interface OptimizedPlateEditorProps {
  value?: Value
  onChange?: (value: Value) => void
  placeholder?: string
  className?: string
  readOnly?: boolean
  autoFocus?: boolean
  noteId?: string
  userId?: string
  enableCaching?: boolean
  enableVirtualization?: boolean
  performanceMode?: 'standard' | 'high-performance' | 'ultra-performance'
  maxContentLength?: number
}

interface EditorPerformanceConfig {
  autoSaveDelay: number
  renderThreshold: number
  virtualizeThreshold: number
  chunkSize: number
  maxHistoryLength: number
}

const PERFORMANCE_CONFIGS: Record<string, EditorPerformanceConfig> = {
  standard: {
    autoSaveDelay: 1000,
    renderThreshold: 5000,
    virtualizeThreshold: 10000,
    chunkSize: 1000,
    maxHistoryLength: 50,
  },
  'high-performance': {
    autoSaveDelay: 500,
    renderThreshold: 2000,
    virtualizeThreshold: 5000,
    chunkSize: 500,
    maxHistoryLength: 30,
  },
  'ultra-performance': {
    autoSaveDelay: 200,
    renderThreshold: 1000,
    virtualizeThreshold: 2000,
    chunkSize: 200,
    maxHistoryLength: 20,
  },
}

/**
 * Content chunking for large documents
 */
function chunkContent(content: TElement[], chunkSize: number): TElement[][] {
  const chunks: TElement[][] = []
  for (let i = 0; i < content.length; i += chunkSize) {
    chunks.push(content.slice(i, i + chunkSize))
  }
  return chunks
}

/**
 * Virtual content renderer for large documents
 */
const VirtualContent = React.memo<{
  chunks: TElement[][]
  visibleChunkRange: { start: number; end: number }
  chunkHeight: number
  totalHeight: number
}>(({ chunks, visibleChunkRange, chunkHeight, totalHeight }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} style={{ height: totalHeight }}>
      {chunks
        .slice(visibleChunkRange.start, visibleChunkRange.end + 1)
        .map((chunk, index) => {
          const chunkIndex = visibleChunkRange.start + index
          return (
            <div
              key={chunkIndex}
              style={{
                position: 'absolute',
                top: chunkIndex * chunkHeight,
                width: '100%',
                minHeight: chunkHeight,
              }}
            >
              <PlateContent value={chunk} />
            </div>
          )
        })}
    </div>
  )
})

VirtualContent.displayName = 'VirtualContent'

export const OptimizedPlateEditor = React.memo<OptimizedPlateEditorProps>(
  ({
    value,
    onChange,
    placeholder = 'Start typing...',
    className,
    readOnly = false,
    autoFocus = false,
    noteId,
    userId,
    enableCaching = true,
    enableVirtualization = true,
    performanceMode = 'standard',
    maxContentLength = 1000000,
  }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [contentChunks, setContentChunks] = useState<TElement[][]>([])
    const [visibleChunkRange, setVisibleChunkRange] = useState({
      start: 0,
      end: 0,
    })
    const [isLargeDocument, setIsLargeDocument] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    const config = PERFORMANCE_CONFIGS[performanceMode]

    const { trackMetric, measureAsync, startTimer } = usePerformanceMonitor({
      componentName: 'OptimizedPlateEditor',
      trackRenders: true,
      trackMemory: true,
    })

    const { trackInteraction } = useInteractionTracking('editor')

    // Debounce changes to reduce render frequency
    const debouncedValue = useDebounce(value, config.autoSaveDelay)

    // Calculate content size and performance metrics
    const contentMetrics = useMemo(() => {
      if (!value || !Array.isArray(value)) return { size: 0, complexity: 'low' }

      const size = JSON.stringify(value).length
      const nodeCount = value.length

      let complexity: 'low' | 'medium' | 'high' = 'low'
      if (size > config.virtualizeThreshold) complexity = 'high'
      else if (size > config.renderThreshold) complexity = 'medium'

      return { size, nodeCount, complexity }
    }, [value, config])

    // Track content metrics
    useEffect(() => {
      trackMetric('content_size', contentMetrics.size, 'bytes')
      trackMetric(
        'content_complexity',
        contentMetrics.complexity === 'high'
          ? 3
          : contentMetrics.complexity === 'medium'
            ? 2
            : 1,
        'count'
      )
      setIsLargeDocument(contentMetrics.size > config.virtualizeThreshold)
    }, [contentMetrics, config, trackMetric])

    // Initialize editor with performance optimizations
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: value || [{ type: 'p', children: [{ text: '' }] }],
      override: {
        // Optimize for performance
        normalizeNode: (entry) => {
          // Limit history size
          if (editor.history.undos.length > config.maxHistoryLength) {
            editor.history.undos = editor.history.undos.slice(
              -config.maxHistoryLength
            )
          }
          if (editor.history.redos.length > config.maxHistoryLength) {
            editor.history.redos = editor.history.redos.slice(
              -config.maxHistoryLength
            )
          }
        },
      },
    })

    // Content chunking for large documents
    useEffect(() => {
      if (isLargeDocument && enableVirtualization && Array.isArray(value)) {
        const chunks = chunkContent(value as TElement[], config.chunkSize)
        setContentChunks(chunks)
      }
    }, [value, isLargeDocument, enableVirtualization, config.chunkSize])

    // Cache content for instant loading
    const cacheContent = useCallback(
      async (content: Value) => {
        if (!enableCaching || !noteId || !userId) return

        try {
          await measureAsync('cache_content', async () => {
            await indexedDBCache.set(`note-content:${noteId}`, content, {
              metadata: {
                noteId,
                userId,
                contentSize: JSON.stringify(content).length,
                timestamp: Date.now(),
              },
              ttl: 24 * 60 * 60 * 1000, // 24 hours
            })
          })
          trackMetric('content_cached', 1, 'count')
        } catch (error) {
          console.warn('Failed to cache content:', error)
        }
      },
      [enableCaching, noteId, userId, measureAsync, trackMetric]
    )

    // Load cached content
    const loadCachedContent = useCallback(async () => {
      if (!enableCaching || !noteId) return null

      try {
        const cached = await indexedDBCache.get<Value>(`note-content:${noteId}`)
        if (cached) {
          trackMetric('cache_hit', 1, 'count')
          return cached.value
        }
      } catch (error) {
        console.warn('Failed to load cached content:', error)
      }
      return null
    }, [enableCaching, noteId, trackMetric])

    // Initialize with cached content
    useEffect(() => {
      const initializeEditor = async () => {
        setIsLoading(true)
        const endTimer = startTimer('editor_init')

        try {
          // Try to load from cache first
          const cachedContent = await loadCachedContent()
          if (cachedContent && !value) {
            // Use cached content if no value provided
            editor.children = cachedContent as TElement[]
            if (onChange) {
              onChange(cachedContent)
            }
          }
        } finally {
          setIsLoading(false)
          endTimer()
        }
      }

      initializeEditor()
    }, [editor, value, onChange, loadCachedContent, startTimer])

    // Handle content changes with performance tracking
    const handleChange = useCallback(
      (newValue: Value) => {
        trackInteraction(async () => {
          if (onChange) {
            onChange(newValue)
          }

          // Cache the new content
          await cacheContent(newValue)

          // Check content size limits
          const size = JSON.stringify(newValue).length
          if (size > maxContentLength) {
            console.warn('Content size exceeds maximum length')
            trackMetric('content_size_exceeded', 1, 'count')
          }
        })
      },
      [onChange, cacheContent, maxContentLength, trackInteraction, trackMetric]
    )

    // Auto-save cached content
    useEffect(() => {
      if (debouncedValue && enableCaching) {
        cacheContent(debouncedValue)
      }
    }, [debouncedValue, enableCaching, cacheContent])

    // Virtual scrolling for large documents
    const handleScroll = useCallback(
      (event: React.UIEvent<HTMLDivElement>) => {
        if (!isLargeDocument || !enableVirtualization) return

        const container = event.currentTarget
        const scrollTop = container.scrollTop
        const containerHeight = container.clientHeight
        const chunkHeight = 200 // Estimated chunk height

        const startChunk = Math.floor(scrollTop / chunkHeight)
        const endChunk = Math.min(
          contentChunks.length - 1,
          Math.ceil((scrollTop + containerHeight) / chunkHeight) + 2 // Buffer
        )

        setVisibleChunkRange({ start: startChunk, end: endChunk })
        trackMetric('virtual_scroll', scrollTop, 'count')
      },
      [isLargeDocument, enableVirtualization, contentChunks.length, trackMetric]
    )

    // Memory management
    useEffect(() => {
      const cleanupTimer = setInterval(() => {
        // Force garbage collection in development
        if (process.env.NODE_ENV === 'development' && window.gc) {
          window.gc()
        }

        // Clear old cached content
        if (enableCaching && noteId) {
          indexedDBCache.cleanup()
        }
      }, 60000) // Every minute

      return () => clearInterval(cleanupTimer)
    }, [enableCaching, noteId])

    // Show skeleton while loading
    if (isLoading) {
      return (
        <div className={cn('relative', className)}>
          <EditorSkeleton showToolbar={!readOnly} />
        </div>
      )
    }

    // Render virtual content for large documents
    if (isLargeDocument && enableVirtualization && contentChunks.length > 0) {
      return (
        <div className={cn('relative', className)}>
          {!readOnly && <FloatingToolbar />}

          <div
            ref={containerRef}
            className='overflow-auto h-full'
            onScroll={handleScroll}
            style={{ maxHeight: '80vh' }}
          >
            <VirtualContent
              chunks={contentChunks}
              visibleChunkRange={visibleChunkRange}
              chunkHeight={200}
              totalHeight={contentChunks.length * 200}
            />
          </div>

          {/* Performance indicators */}
          {process.env.NODE_ENV === 'development' && (
            <div className='absolute top-2 right-2 text-xs bg-black/80 text-white px-2 py-1 rounded'>
              <div>Size: {(contentMetrics.size / 1024).toFixed(1)}KB</div>
              <div>Chunks: {contentChunks.length}</div>
              <div>Mode: {performanceMode}</div>
              <div>Virtual: {enableVirtualization ? 'ON' : 'OFF'}</div>
            </div>
          )}
        </div>
      )
    }

    // Standard editor for smaller documents
    return (
      <Plate editor={editor} onChange={handleChange} value={value}>
        <div className={cn('relative', className)}>
          {!readOnly && <FloatingToolbar />}

          <PlateContent
            placeholder={placeholder}
            readOnly={readOnly}
            autoFocus={autoFocus}
            className={cn(
              'min-h-[200px] px-6 py-4 focus:outline-none',
              'prose prose-slate dark:prose-invert max-w-none',
              'transition-all duration-200',
              contentMetrics.complexity === 'high' && 'will-change-contents'
            )}
            data-testid='optimized-plate-editor'
          />

          {/* Content size warning */}
          {contentMetrics.size > config.renderThreshold && (
            <div className='absolute bottom-2 right-2 text-xs bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded'>
              Large document - performance mode active
            </div>
          )}

          {/* Performance metrics in development */}
          {process.env.NODE_ENV === 'development' && (
            <div className='absolute top-2 right-2 text-xs bg-black/80 text-white px-2 py-1 rounded'>
              <div>Size: {(contentMetrics.size / 1024).toFixed(1)}KB</div>
              <div>Nodes: {contentMetrics.nodeCount}</div>
              <div>Mode: {performanceMode}</div>
              <div>Cache: {enableCaching ? 'ON' : 'OFF'}</div>
            </div>
          )}
        </div>
      </Plate>
    )
  }
)

OptimizedPlateEditor.displayName = 'OptimizedPlateEditor'

/**
 * Hook for editor performance monitoring
 */
export function useEditorPerformance(noteId?: string) {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    saveTime: 0,
    memoryUsage: 0,
  })

  const { measureAsync } = usePerformanceMonitor({
    componentName: 'EditorPerformance',
  })

  const measureLoad = useCallback(
    async (operation: () => Promise<void>) => {
      const result = await measureAsync('editor_load', operation)
      setMetrics((prev) => ({ ...prev, loadTime: Date.now() }))
      return result
    },
    [measureAsync]
  )

  const measureRender = useCallback(
    async (operation: () => Promise<void>) => {
      const result = await measureAsync('editor_render', operation)
      setMetrics((prev) => ({ ...prev, renderTime: Date.now() }))
      return result
    },
    [measureAsync]
  )

  const measureSave = useCallback(
    async (operation: () => Promise<void>) => {
      const result = await measureAsync('editor_save', operation)
      setMetrics((prev) => ({ ...prev, saveTime: Date.now() }))
      return result
    },
    [measureAsync]
  )

  return {
    metrics,
    measureLoad,
    measureRender,
    measureSave,
  }
}
