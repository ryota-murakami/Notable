'use client'

import { useEffect, useRef, useState } from 'react'
import {
  ChevronDown,
  ChevronRight,
  Edit,
  FileText,
  Folder,
  FolderOpen,
  FolderPlus,
  GripVertical,
  MoreVertical,
  Trash,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

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
  folders: FolderNode[]
  notes?: Note[]
  selectedFolderId?: string
  expandedFolders?: string[]
  onFolderSelect?: (folderId: string | null) => void
  onFolderCreate?: (name: string, parentId?: string | null) => void
  onFolderRename?: (folderId: string, newName: string) => void
  onFolderDelete?: (folderId: string) => void
  onNoteMove?: (noteId: string, targetFolderId: string | null) => void
  onFolderMove?: (folderId: string, targetFolderId: string | null) => void
  className?: string
}

export function FolderTree({
  folders,
  notes = [],
  selectedFolderId,
  expandedFolders = [],
  onFolderSelect,
  onFolderCreate,
  onFolderRename,
  onFolderDelete,
  onNoteMove,
  onFolderMove,
  className,
}: FolderTreeProps) {
  const [expanded, setExpanded] = useState<Set<string>>(
    new Set(expandedFolders)
  )
  const [editingFolder, setEditingFolder] = useState<string | null>(null)
  const [editingName, setEditingName] = useState('')
  const [showCreateDialog, setShowCreateDialog] = useState(false)
  const [createParentId, setCreateParentId] = useState<string | null>(null)
  const [newFolderName, setNewFolderName] = useState('')
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [deletingFolder, setDeletingFolder] = useState<FolderNode | null>(null)

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

  const startEditing = (folderId: string, currentName: string) => {
    setEditingFolder(folderId)
    setEditingName(currentName)
  }

  const cancelEditing = () => {
    setEditingFolder(null)
    setEditingName('')
  }

  const confirmRename = () => {
    if (editingFolder && editingName.trim()) {
      onFolderRename?.(editingFolder, editingName.trim())
    }
    cancelEditing()
  }

  const handleCreateFolder = () => {
    if (newFolderName.trim()) {
      onFolderCreate?.(newFolderName.trim(), createParentId)
      setNewFolderName('')
      setShowCreateDialog(false)
      setCreateParentId(null)
    }
  }

  const handleDeleteFolder = () => {
    if (deletingFolder) {
      onFolderDelete?.(deletingFolder.id)
      setShowDeleteDialog(false)
      setDeletingFolder(null)
    }
  }

  const renderFolderNode = (folder: FolderNode) => {
    const hasChildren = Boolean(folder.children && folder.children.length > 0)
    const isExpanded = expanded.has(folder.id)
    const isSelected = selectedFolderId === folder.id
    const isEditing = editingFolder === folder.id

    return (
      <div key={folder.id}>
        <DraggableFolderItem
          folder={folder}
          isSelected={isSelected}
          isExpanded={isExpanded}
          hasChildren={hasChildren}
          onToggleExpand={() => toggleExpanded(folder.id)}
          onSelect={() => handleFolderSelect(folder.id)}
          onEdit={() => startEditing(folder.id, folder.name)}
          onDelete={() => {
            setDeletingFolder(folder)
            setShowDeleteDialog(true)
          }}
          onCreateSubfolder={() => {
            setCreateParentId(folder.id)
            setShowCreateDialog(true)
          }}
          onMove={onFolderMove}
        >
          {isEditing ? (
            <Input
              value={editingName}
              onChange={(e) => setEditingName(e.target.value)}
              onBlur={cancelEditing}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  confirmRename()
                } else if (e.key === 'Escape') {
                  cancelEditing()
                }
              }}
              className='h-6 text-sm'
              autoFocus
            />
          ) : (
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
          )}
        </DraggableFolderItem>

        {hasChildren && isExpanded && (
          <div className='ml-4 border-l border-border pl-2'>
            {folder.children?.map(renderFolderNode)}
          </div>
        )}
      </div>
    )
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={cn('h-full flex flex-col', className)}>
        {/* Header */}
        <div className='flex items-center justify-between p-3 border-b'>
          <h3 className='font-semibold text-sm'>Folders</h3>
          <Button
            variant='ghost'
            size='sm'
            onClick={() => setShowCreateDialog(true)}
            data-testid='new-folder-button'
          >
            <FolderPlus className='h-4 w-4' />
          </Button>
        </div>

        {/* Folder Tree */}
        <div className='flex-1 overflow-auto'>
          <div className='p-2 space-y-1'>
            {/* All Notes / Root */}
            <DroppableArea
              folderId={null}
              onDrop={onNoteMove}
              className={cn(
                'flex items-center gap-2 px-2 py-1.5 rounded-lg cursor-pointer transition-colors',
                selectedFolderId === null
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-accent'
              )}
              onClick={() => handleFolderSelect(null)}
            >
              <FileText className='h-4 w-4' />
              <span>All Notes</span>
              {rootNotes.length > 0 && (
                <Badge variant='secondary' className='text-xs ml-auto'>
                  {rootNotes.length}
                </Badge>
              )}
            </DroppableArea>

            {/* Folder Tree */}
            {folderTree.map(renderFolderNode)}

            {folderTree.length === 0 && (
              <div className='text-center py-8 text-muted-foreground'>
                <Folder className='h-8 w-8 mx-auto mb-2' />
                <p className='text-sm'>No folders yet</p>
                <p className='text-xs'>
                  Create your first folder to organize notes
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Create Folder Dialog */}
        <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Folder</DialogTitle>
            </DialogHeader>
            <div className='space-y-4'>
              {createParentId && (
                <div className='text-sm text-muted-foreground'>
                  Creating subfolder in:{' '}
                  {folders.find((f) => f.id === createParentId)?.name}
                </div>
              )}
              <Input
                placeholder='Folder name'
                value={newFolderName}
                onChange={(e) => setNewFolderName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleCreateFolder()
                  }
                }}
                data-testid='folder-name-input'
                autoFocus
              />
            </div>
            <DialogFooter>
              <Button
                variant='outline'
                onClick={() => setShowCreateDialog(false)}
              >
                Cancel
              </Button>
              <Button
                onClick={handleCreateFolder}
                disabled={!newFolderName.trim()}
              >
                Create Folder
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Delete Confirmation Dialog */}
        <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Delete Folder</DialogTitle>
            </DialogHeader>
            <div className='space-y-4'>
              <p>
                Are you sure you want to delete the folder &quot;
                {deletingFolder?.name}&quot;?
              </p>
              {deletingFolder?.noteCount && deletingFolder.noteCount > 0 && (
                <div className='bg-yellow-50 p-3 rounded-lg border border-yellow-200'>
                  <p className='text-sm text-yellow-800'>
                    This folder contains {deletingFolder.noteCount} note
                    {deletingFolder.noteCount !== 1 ? 's' : ''}. They will be
                    moved to &quot;All Notes&quot;.
                  </p>
                </div>
              )}
            </div>
            <DialogFooter>
              <Button
                variant='outline'
                onClick={() => setShowDeleteDialog(false)}
              >
                Cancel
              </Button>
              <Button variant='destructive' onClick={handleDeleteFolder}>
                Delete Folder
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </DndProvider>
  )
}

function DraggableFolderItem({
  folder,
  isSelected,
  isExpanded,
  hasChildren,
  onToggleExpand,
  onSelect,
  onEdit,
  onDelete,
  onCreateSubfolder,
  onMove,
  children,
}: {
  folder: FolderNode
  isSelected: boolean
  isExpanded: boolean
  hasChildren: boolean
  onToggleExpand: () => void
  onSelect: () => void
  onEdit: () => void
  onDelete: () => void
  onCreateSubfolder: () => void
  onMove?: (folderId: string, targetFolderId: string | null) => void
  children: React.ReactNode
}) {
  const [{ isDragging }, drag, dragPreview] = useDrag({
    type: 'folder',
    item: { id: folder.id, type: 'folder' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ['folder', 'note'],
    drop: (item: { id: string; type: string }) => {
      if (item.type === 'folder' && item.id !== folder.id) {
        onMove?.(item.id, folder.id)
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  const divRef = useRef<HTMLDivElement>(null)

  // Combine refs properly
  const combinedRef = (el: HTMLDivElement | null) => {
    divRef.current = el
    drop(el)
    dragPreview(el)
  }

  return (
    <div
      ref={combinedRef}
      className={cn(
        'flex items-center gap-1 px-2 py-1.5 rounded-lg transition-colors',
        isSelected ? 'bg-primary text-primary-foreground' : 'hover:bg-accent',
        isDragging && 'opacity-50',
        isOver && canDrop && 'bg-blue-50 border-2 border-blue-300 border-dashed'
      )}
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
            onToggleExpand()
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

      {/* Drag Handle */}
      <div ref={drag as any} className='cursor-grab active:cursor-grabbing'>
        <GripVertical className='h-3 w-3 text-muted-foreground' />
      </div>

      {/* Folder Content */}
      <div
        className='flex-1 flex items-center gap-2 cursor-pointer'
        onClick={onSelect}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onSelect?.()
          }
        }}
        tabIndex={0}
        role='button'
      >
        {children}
      </div>

      {/* Actions Menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='ghost'
            size='sm'
            className='h-4 w-4 p-0 opacity-0 group-hover:opacity-100'
            onClick={(e) => e.stopPropagation()}
          >
            <MoreVertical className='h-3 w-3' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' className='w-48'>
          <DropdownMenuItem onClick={onCreateSubfolder}>
            <FolderPlus className='h-4 w-4 mr-2' />
            New Subfolder
          </DropdownMenuItem>
          <DropdownMenuItem onClick={onEdit}>
            <Edit className='h-4 w-4 mr-2' />
            Rename
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={onDelete} className='text-destructive'>
            <Trash className='h-4 w-4 mr-2' />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

function DroppableArea({
  folderId,
  onDrop,
  children,
  className,
  onClick,
}: {
  folderId: string | null
  onDrop?: (noteId: string, targetFolderId: string | null) => void
  children: React.ReactNode
  className?: string
  onClick?: () => void
}) {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: 'note',
    drop: (item: { id: string; type: string }) => {
      if (item.type === 'note') {
        onDrop?.(item.id, folderId)
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  return (
    <div
      ref={drop as any}
      className={cn(
        className,
        isOver && canDrop && 'bg-blue-50 border-2 border-blue-300 border-dashed'
      )}
      onClick={onClick}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()
          onClick()
        }
      }}
      tabIndex={onClick ? 0 : undefined}
      role={onClick ? 'button' : undefined}
    >
      {children}
    </div>
  )
}

// Hook for folder operations
export function useFolders() {
  const [folders, setFolders] = useState<FolderNode[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchFolders = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch('/api/folders')
      const result = await response.json()

      if (response.ok) {
        setFolders(result.data || [])
      } else {
        throw new Error(result.error || 'Failed to fetch folders')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch folders')
      setFolders([])
    } finally {
      setLoading(false)
    }
  }

  const createFolder = async (name: string, parentId?: string | null) => {
    try {
      const response = await fetch('/api/folders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, parent_id: parentId }),
      })

      const result = await response.json()

      if (response.ok) {
        await fetchFolders() // Refresh the list
        return result.data
      } else {
        throw new Error(result.error || 'Failed to create folder')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create folder')
      throw err
    }
  }

  const renameFolder = async (folderId: string, newName: string) => {
    try {
      const response = await fetch(`/api/folders/${folderId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newName }),
      })

      const result = await response.json()

      if (response.ok) {
        await fetchFolders() // Refresh the list
        return result.data
      } else {
        throw new Error(result.error || 'Failed to rename folder')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to rename folder')
      throw err
    }
  }

  const deleteFolder = async (folderId: string) => {
    try {
      const response = await fetch(`/api/folders/${folderId}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        await fetchFolders() // Refresh the list
      } else {
        const result = await response.json()
        throw new Error(result.error || 'Failed to delete folder')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete folder')
      throw err
    }
  }

  const moveFolder = async (
    folderId: string,
    targetParentId: string | null
  ) => {
    try {
      const response = await fetch(`/api/folders/${folderId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ parent_id: targetParentId }),
      })

      const result = await response.json()

      if (response.ok) {
        await fetchFolders() // Refresh the list
        return result.data
      } else {
        throw new Error(result.error || 'Failed to move folder')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to move folder')
      throw err
    }
  }

  useEffect(() => {
    fetchFolders()
  }, [])

  return {
    folders,
    loading,
    error,
    createFolder,
    renameFolder,
    deleteFolder,
    moveFolder,
    refetch: fetchFolders,
  }
}
