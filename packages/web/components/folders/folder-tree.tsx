'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'
import { Input } from '@/components/ui/input'
import { useFolders } from '@/hooks/use-folders'
import type { FolderTreeNode } from '@/types/folder'
import {
  ChevronDownIcon,
  ChevronRightIcon,
  FileTextIcon,
  FolderIcon,
  FolderOpenIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
} from 'lucide-react'

interface FolderTreeProps {
  selectedFolderId?: string | null
  onFolderSelect?: (folderId: string | null) => void
  onNoteCreate?: (folderId: string | null) => void
  className?: string
}

interface FolderNodeProps {
  folder: FolderTreeNode
  selectedFolderId?: string | null
  onFolderSelect?: (folderId: string | null) => void
  onNoteCreate?: (folderId: string | null) => void
  onFolderCreate?: (parentId: string) => void
  onFolderRename?: (folderId: string, newName: string) => void
  onFolderDelete?: (folderId: string) => void
}

function FolderNode({
  folder,
  selectedFolderId,
  onFolderSelect,
  onNoteCreate,
  onFolderCreate,
  onFolderRename,
  onFolderDelete,
}: FolderNodeProps) {
  const [isExpanded, setIsExpanded] = React.useState(folder.expanded !== false)
  const [isRenaming, setIsRenaming] = React.useState(false)
  const [newName, setNewName] = React.useState(folder.name)
  const inputRef = React.useRef<HTMLInputElement>(null)

  const isSelected = selectedFolderId === folder.id

  React.useEffect(() => {
    if (isRenaming && inputRef.current) {
      inputRef.current.focus()
      inputRef.current.select()
    }
  }, [isRenaming])

  const handleRename = () => {
    if (newName.trim() && newName !== folder.name) {
      onFolderRename?.(folder.id, newName.trim())
    }
    setIsRenaming(false)
    setNewName(folder.name)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleRename()
    } else if (e.key === 'Escape') {
      setIsRenaming(false)
      setNewName(folder.name)
    }
  }

  return (
    <div className='select-none'>
      <ContextMenu>
        <ContextMenuTrigger>
          <div
            className={cn(
              'group flex items-center gap-1 rounded-md px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground cursor-pointer',
              isSelected && 'bg-accent text-accent-foreground'
            )}
            style={{ paddingLeft: `${folder.level * 16 + 8}px` }}
            onClick={() => onFolderSelect?.(folder.id)}
            data-testid={`folder-${folder.name}`}
          >
            {folder.children.length > 0 && (
              <Button
                variant='ghost'
                size='icon'
                className='h-4 w-4 p-0'
                onClick={(e) => {
                  e.stopPropagation()
                  setIsExpanded(!isExpanded)
                }}
              >
                {isExpanded ? (
                  <ChevronDownIcon className='h-3 w-3' />
                ) : (
                  <ChevronRightIcon className='h-3 w-3' />
                )}
              </Button>
            )}
            {folder.children.length === 0 && <div className='w-4' />}

            {isExpanded ? (
              <FolderOpenIcon className='h-4 w-4' />
            ) : (
              <FolderIcon className='h-4 w-4' />
            )}

            {isRenaming ? (
              <Input
                ref={inputRef}
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                onBlur={handleRename}
                onKeyDown={handleKeyDown}
                className='h-6 px-1 py-0'
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <span className='flex-1 truncate'>{folder.name}</span>
            )}

            {folder.note_count !== undefined && folder.note_count > 0 && (
              <span className='text-xs text-muted-foreground'>
                {folder.note_count}
              </span>
            )}
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem onClick={() => onNoteCreate?.(folder.id)}>
            <FileTextIcon className='mr-2 h-4 w-4' />
            New Note
          </ContextMenuItem>
          <ContextMenuItem onClick={() => onFolderCreate?.(folder.id)}>
            <PlusIcon className='mr-2 h-4 w-4' />
            New Subfolder
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem onClick={() => setIsRenaming(true)}>
            <PencilIcon className='mr-2 h-4 w-4' />
            Rename
          </ContextMenuItem>
          <ContextMenuItem
            onClick={() => onFolderDelete?.(folder.id)}
            className='text-destructive'
            disabled={
              folder.children.length > 0 || (folder.note_count || 0) > 0
            }
          >
            <TrashIcon className='mr-2 h-4 w-4' />
            Delete
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>

      {isExpanded && folder.children.length > 0 && (
        <div>
          {folder.children.map((child) => (
            <FolderNode
              key={child.id}
              folder={child}
              selectedFolderId={selectedFolderId}
              onFolderSelect={onFolderSelect}
              onNoteCreate={onNoteCreate}
              onFolderCreate={onFolderCreate}
              onFolderRename={onFolderRename}
              onFolderDelete={onFolderDelete}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export function FolderTree({
  selectedFolderId,
  onFolderSelect,
  onNoteCreate,
  className,
}: FolderTreeProps) {
  const { folderTree, isLoading, createFolder, updateFolder, deleteFolder } =
    useFolders()

  if (isLoading) {
    return (
      <div className={cn('p-4', className)}>
        <div className='space-y-2'>
          <div className='h-6 bg-muted animate-pulse rounded' />
          <div className='h-6 bg-muted animate-pulse rounded ml-4' />
          <div className='h-6 bg-muted animate-pulse rounded ml-4' />
        </div>
      </div>
    )
  }

  return (
    <div className={cn('py-2', className)}>
      {/* Root level - All Notes */}
      <div
        className={cn(
          'flex items-center gap-1 rounded-md px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground cursor-pointer mb-1',
          selectedFolderId === null && 'bg-accent text-accent-foreground'
        )}
        onClick={() => onFolderSelect?.(null)}
        data-testid='folder-root'
      >
        <div className='w-4' />
        <FileTextIcon className='h-4 w-4' />
        <span className='flex-1'>All Notes</span>
      </div>

      {/* Folder tree */}
      {folderTree.map((folder) => (
        <FolderNode
          key={folder.id}
          folder={folder}
          selectedFolderId={selectedFolderId}
          onFolderSelect={onFolderSelect}
          onNoteCreate={onNoteCreate}
          onFolderCreate={(parentId) => {
            const name = prompt('Enter folder name:')
            if (name) {
              createFolder.mutate({ name, parent_id: parentId })
            }
          }}
          onFolderRename={(folderId, newName) => {
            updateFolder.mutate({ id: folderId, name: newName })
          }}
          onFolderDelete={(folderId) => {
            if (confirm('Are you sure you want to delete this folder?')) {
              deleteFolder.mutate(folderId)
            }
          }}
        />
      ))}
    </div>
  )
}
