'use client'

import { createPlatePlugin } from '@udecode/plate-common'
import * as React from 'react'
import { useCallback, useEffect, useState } from 'react'
import { ArrowUpRight, Copy, Edit3, Link } from 'lucide-react'
import { cn } from '@/lib/utils'

// Types for block references
interface BlockReference {
  id: string
  blockId: string
  referenceType: 'link' | 'embed' | 'mention'
  title?: string
  preview?: string
  noteId?: string
  createdAt?: string
}

interface BlockReferenceProps {
  attributes: any
  children: any
  element: {
    type: string
    blockId: string
    referenceType: 'link' | 'embed' | 'mention'
    title?: string
    preview?: string
    noteId?: string
  }
  className?: string
}

// Block Reference Component
export function BlockReferenceElement({
  attributes,
  children,
  element,
  className,
}: BlockReferenceProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [blockData, setBlockData] = useState<any>(null)
  const [showPreview, setShowPreview] = useState(false)

  // Fetch referenced block data
  const fetchBlockData = useCallback(async () => {
    if (!element.blockId) return

    setIsLoading(true)
    try {
      // This would fetch the actual block data from your API
      const response = await fetch(`/api/blocks/${element.blockId}`)
      if (response.ok) {
        const data = await response.json()
        setBlockData(data)
      }
    } catch (error) {
      console.error('Failed to fetch block data:', error)
    } finally {
      setIsLoading(false)
    }
  }, [element.blockId])

  useEffect(() => {
    fetchBlockData()
  }, [fetchBlockData])

  const handleCopyLink = useCallback(async () => {
    try {
      const blockUrl = `/notes/${element.noteId}#block-${element.blockId}`
      await navigator.clipboard.writeText(window.location.origin + blockUrl)
    } catch (error) {
      console.error('Failed to copy link:', error)
    }
  }, [element.blockId, element.noteId])

  if (element.referenceType === 'link') {
    return (
      <span
        {...attributes}
        className={cn(
          'inline-flex items-center gap-1 px-2 py-1 rounded-md bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 cursor-pointer transition-colors text-sm',
          className
        )}
        contentEditable={false}
        onMouseEnter={() => setShowPreview(true)}
        onMouseLeave={() => setShowPreview(false)}
      >
        <Link className='h-3 w-3' />
        <span>{element.title || 'Untitled Block'}</span>
        <ArrowUpRight className='h-3 w-3 opacity-60' />

        {showPreview && blockData && (
          <div className='absolute z-50 mt-8 p-3 bg-white border border-gray-200 rounded-lg shadow-lg max-w-sm'>
            <div className='text-xs text-gray-500 mb-1'>Block Preview</div>
            <div className='text-sm'>{blockData.content?.slice(0, 100)}...</div>
          </div>
        )}
      </span>
    )
  }

  if (element.referenceType === 'embed') {
    return (
      <div
        {...attributes}
        className={cn(
          'block-embed border border-gray-200 rounded-lg p-4 my-3 bg-gray-50',
          className
        )}
        contentEditable={false}
      >
        <div className='flex items-center justify-between mb-2'>
          <div className='flex items-center gap-2 text-sm text-gray-600'>
            <Link className='h-4 w-4' />
            <span>Referenced Block</span>
          </div>
          <div className='flex items-center gap-1'>
            <button
              onClick={handleCopyLink}
              className='p-1 hover:bg-gray-200 rounded'
              title='Copy link'
            >
              <Copy className='h-3 w-3' />
            </button>
            <button
              className='p-1 hover:bg-gray-200 rounded'
              title='Edit original'
            >
              <Edit3 className='h-3 w-3' />
            </button>
          </div>
        </div>

        <div className='border-l-4 border-blue-400 pl-4'>
          {isLoading ? (
            <div className='animate-pulse'>
              <div className='h-4 bg-gray-300 rounded w-3/4 mb-2'></div>
              <div className='h-4 bg-gray-300 rounded w-1/2'></div>
            </div>
          ) : blockData ? (
            <div className='prose prose-sm max-w-none'>{blockData.content}</div>
          ) : (
            <div className='text-gray-500 italic'>Block not found</div>
          )}
        </div>
      </div>
    )
  }

  if (element.referenceType === 'mention') {
    return (
      <span
        {...attributes}
        className={cn(
          'inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm cursor-pointer transition-colors',
          className
        )}
        contentEditable={false}
      >
        @{element.title || 'block'}
      </span>
    )
  }

  return <span {...attributes}>{children}</span>
}

// Block Reference Plugin
export const BlockReferencePlugin = createPlatePlugin({
  key: 'block_reference',
  node: {
    isElement: true,
    type: 'block_reference',
    component: BlockReferenceElement,
    isVoid: true,
  },
})

// Hook for creating block references
export function useBlockReference(editor: any) {
  const createBlockLink = useCallback(
    (blockId: string, title?: string, noteId?: string) => {
      editor.insertNodes({
        type: 'block_reference',
        blockId,
        referenceType: 'link',
        title,
        noteId,
        children: [{ text: '' }],
      })
    },
    [editor]
  )

  const embedBlock = useCallback(
    (blockId: string, title?: string, noteId?: string) => {
      editor.insertNodes({
        type: 'block_reference',
        blockId,
        referenceType: 'embed',
        title,
        noteId,
        children: [{ text: '' }],
      })
    },
    [editor]
  )

  const mentionBlock = useCallback(
    (blockId: string, title?: string) => {
      editor.insertNodes({
        type: 'block_reference',
        blockId,
        referenceType: 'mention',
        title,
        children: [{ text: '' }],
      })
    },
    [editor]
  )

  return {
    createBlockLink,
    embedBlock,
    mentionBlock,
  }
}

// Block Search Component for finding blocks to reference
interface BlockSearchProps {
  isOpen: boolean
  onClose: () => void
  onSelect: (block: any) => void
  position: { x: number; y: number }
}

export function BlockSearchMenu({
  isOpen,
  onClose,
  onSelect,
  position,
}: BlockSearchProps) {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)

  // Search for blocks
  useEffect(() => {
    if (!search.trim()) {
      setResults([])
      return
    }

    const searchBlocks = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(
          `/api/search/blocks?q=${encodeURIComponent(search)}`
        )
        if (response.ok) {
          const data = await response.json()
          setResults(data.blocks || [])
        }
      } catch (error) {
        console.error('Block search failed:', error)
      } finally {
        setIsLoading(false)
      }
    }

    const debounceTimer = setTimeout(searchBlocks, 300)
    return () => clearTimeout(debounceTimer)
  }, [search])

  if (!isOpen) return null

  return (
    <div
      className='fixed z-50 w-96 bg-white border border-gray-200 rounded-lg shadow-lg p-0'
      style={{ left: position.x, top: position.y }}
    >
      <div className='p-3 border-b'>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Search for blocks to reference...'
          className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
          autoFocus
        />
      </div>

      <div className='max-h-64 overflow-y-auto'>
        {isLoading ? (
          <div className='p-4 text-center text-gray-500'>Searching...</div>
        ) : results.length === 0 ? (
          <div className='p-4 text-center text-gray-500'>
            {search.trim() ? 'No blocks found' : 'Start typing to search...'}
          </div>
        ) : (
          <div className='p-2'>
            {results.map((block) => (
              <div
                key={block.id}
                onClick={() => onSelect(block)}
                className='p-3 rounded hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-0'
              >
                <div className='font-medium text-sm'>
                  {block.title || 'Untitled'}
                </div>
                <div className='text-xs text-gray-500 mt-1 truncate'>
                  {block.content?.slice(0, 80)}...
                </div>
                <div className='text-xs text-gray-400 mt-1'>
                  {block.noteTitle} •{' '}
                  {new Date(block.updatedAt).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// Backlinks Component - shows where a block is referenced
interface BacklinksProps {
  blockId: string
  className?: string
}

export function BacklinksPanel({ blockId, className }: BacklinksProps) {
  const [backlinks, setBacklinks] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchBacklinks = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(`/api/blocks/${blockId}/backlinks`)
        if (response.ok) {
          const data = await response.json()
          setBacklinks(data.backlinks || [])
        }
      } catch (error) {
        console.error('Failed to fetch backlinks:', error)
      } finally {
        setIsLoading(false)
      }
    }

    if (blockId) {
      fetchBacklinks()
    }
  }, [blockId])

  if (isLoading) {
    return <div className='text-sm text-gray-500'>Loading backlinks...</div>
  }

  if (backlinks.length === 0) {
    return (
      <div className={cn('text-sm text-gray-500', className)}>
        No backlinks found
      </div>
    )
  }

  return (
    <div className={cn('space-y-2', className)}>
      <div className='text-sm font-medium text-gray-700'>
        Backlinks ({backlinks.length})
      </div>
      {backlinks.map((backlink) => (
        <div
          key={backlink.id}
          className='p-2 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer'
        >
          <div className='text-sm font-medium'>{backlink.sourceTitle}</div>
          <div className='text-xs text-gray-500 mt-1'>
            {backlink.context?.slice(0, 100)}...
          </div>
        </div>
      ))}
    </div>
  )
}
