'use client'

import { useEffect, useState } from 'react'
import {
  ChevronDown,
  ChevronRight,
  FileText,
  Folder,
  FolderOpen,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface FolderNode {
  id: string
  name: string
  parentId: string | null
  children?: FolderNode[]
  noteCount?: number
  created_at: string
  updated_at: string
  path?: string
  depth?: number
}

interface Note {
  id: string
  title: string
  folder_id: string | null
}

interface FolderTreeProps {
  selectedFolderId?: string | null
  onFolderSelect?: (folderId: string | null) => void
  _onNoteCreate?: (folderId: string | null) => void
  className?: string
}

export function FolderTree({
  selectedFolderId,
  onFolderSelect,
  _onNoteCreate,
  className,
}: FolderTreeProps) {
  const [folders, setFolders] = useState<FolderNode[]>([])
  const [notes, setNotes] = useState<Note[]>([])
  const [expanded, setExpanded] = useState<Set<string>>(new Set())
  const [loading, setLoading] = useState(true)

  // Fetch folders and notes
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)

        // Fetch folders
        const foldersResponse = await fetch('/api/folders')
        if (foldersResponse.ok) {
          const foldersResult = await foldersResponse.json()
          setFolders(foldersResult.data || [])
        }

        // Fetch notes to count them per folder
        const notesResponse = await fetch('/api/notes')
        if (notesResponse.ok) {
          const notesData = await notesResponse.json()
          setNotes(Array.isArray(notesData) ? notesData : [])
        }
      } catch (error) {
        console.error('Failed to fetch folder data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // Build folder tree with hierarchy
  const buildTree = (
    folders: FolderNode[],
    parentId: string | null = null,
    depth = 0
  ): FolderNode[] => {
    return folders
      .filter((folder) => folder.parentId === parentId)
      .map((folder) => {
        const children = buildTree(folders, folder.id, depth + 1)
        const noteCount = notes.filter(
          (note) => note.folder_id === folder.id
        ).length
        return {
          ...folder,
          children,
          noteCount,
          depth,
          path: parentId
            ? `${folders.find((f) => f.id === parentId)?.name}/${folder.name}`
            : folder.name,
        }
      })
      .sort((a, b) => a.name.localeCompare(b.name))
  }

  const folderTree = buildTree(folders)
  const rootNotes = notes.filter((note) => !note.folder_id)

  const toggleExpanded = (folderId: string) => {
    const newExpanded = new Set(expanded)
    if (newExpanded.has(folderId)) {
      newExpanded.delete(folderId)
    } else {
      newExpanded.add(folderId)
    }
    setExpanded(newExpanded)
  }

  const handleFolderSelect = (folderId: string | null) => {
    onFolderSelect?.(folderId)
  }

  const renderFolderNode = (folder: FolderNode) => {
    const hasChildren = folder.children && folder.children.length > 0
    const isExpanded = expanded.has(folder.id)
    const isSelected = selectedFolderId === folder.id

    return (
      <div key={folder.id}>
        <div
          className={cn(
            'flex items-center gap-1 px-2 py-1.5 rounded-lg cursor-pointer transition-colors hover:bg-accent',
            isSelected &&
              'bg-primary text-primary-foreground hover:bg-primary/90'
          )}
          onClick={() => handleFolderSelect(folder.id)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              handleFolderSelect(folder.id)
            }
          }}
          tabIndex={0}
          role='button'
          data-testid={`folder-${folder.name.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {/* Expand/Collapse Button */}
          {hasChildren ? (
            <Button
              variant='ghost'
              size='sm'
              className='h-4 w-4 p-0'
              onClick={(e) => {
                e.stopPropagation()
                toggleExpanded(folder.id)
              }}
            >
              {isExpanded ? (
                <ChevronDown className='h-3 w-3' />
              ) : (
                <ChevronRight className='h-3 w-3' />
              )}
            </Button>
          ) : (
            <div className='h-4 w-4' />
          )}

          {/* Folder Content */}
          <div className='flex items-center gap-2 flex-1 truncate'>
            {hasChildren ? (
              isExpanded ? (
                <FolderOpen className='h-4 w-4 text-blue-600' />
              ) : (
                <Folder className='h-4 w-4 text-blue-600' />
              )
            ) : (
              <Folder className='h-4 w-4 text-gray-500' />
            )}
            <span className='truncate'>{folder.name}</span>
            {folder.noteCount !== undefined && folder.noteCount > 0 && (
              <Badge variant='secondary' className='text-xs'>
                {folder.noteCount}
              </Badge>
            )}
          </div>
        </div>

        {hasChildren && isExpanded && (
          <div className='ml-4 border-l border-border pl-2'>
            {folder.children?.map(renderFolderNode)}
          </div>
        )}
      </div>
    )
  }

  if (loading) {
    return (
      <div className={cn('space-y-2', className)}>
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className='animate-pulse flex items-center gap-2 px-2 py-1.5'
          >
            <div className='h-4 w-4 bg-muted rounded' />
            <div className='h-4 flex-1 bg-muted rounded' />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={cn('space-y-1', className)}>
      {/* All Notes / Root */}
      <div
        className={cn(
          'flex items-center gap-2 px-2 py-1.5 rounded-lg cursor-pointer transition-colors hover:bg-accent',
          selectedFolderId === null &&
            'bg-primary text-primary-foreground hover:bg-primary/90'
        )}
        onClick={() => handleFolderSelect(null)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleFolderSelect(null)
          }
        }}
        tabIndex={0}
        role='button'
      >
        <div className='h-4 w-4' />
        <FileText className='h-4 w-4' />
        <span>All Notes</span>
        {rootNotes.length > 0 && (
          <Badge variant='secondary' className='text-xs ml-auto'>
            {rootNotes.length}
          </Badge>
        )}
      </div>

      {/* Folder Tree */}
      {folderTree.map(renderFolderNode)}

      {folderTree.length === 0 && (
        <div className='text-center py-4 text-muted-foreground text-sm'>
          <Folder className='h-6 w-6 mx-auto mb-2 opacity-50' />
          <p>No folders yet</p>
        </div>
      )}
    </div>
  )
}
