'use client'

import * as React from 'react'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Copy, Edit2, FilePlus, FolderPlus, Palette, Trash } from 'lucide-react'
import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'
import type { Note } from '@/types/note'

interface FolderContextMenuProps {
  children: React.ReactNode
  folder: Note
  onRename: (folderId: string, newName: string) => Promise<boolean>
  onDelete: (folderId: string) => Promise<boolean>
  onCreateSubfolder: (parentId: string) => Promise<Note | null>
  onCreateNote: (parentId: string) => Promise<Note | null>
  onDuplicate?: (folderId: string) => Promise<Note | null>
  onUpdateColor?: (folderId: string, color: string) => Promise<boolean>
}

export function FolderContextMenu({
  children,
  folder,
  onRename,
  onDelete,
  onCreateSubfolder,
  onCreateNote,
  onDuplicate,
  onUpdateColor,
}: FolderContextMenuProps) {
  const [isRenameOpen, setIsRenameOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [newName, setNewName] = useState(folder.title)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleRename = async () => {
    if (!newName.trim()) {
      toast({
        title: 'Error',
        description: 'Folder name cannot be empty',
        variant: 'destructive',
      })
      return
    }

    setIsLoading(true)
    try {
      const success = await onRename(folder.id, newName.trim())
      if (success) {
        toast({
          title: 'Success',
          description: 'Folder renamed successfully',
        })
        setIsRenameOpen(false)
      } else {
        toast({
          title: 'Error',
          description: 'Failed to rename folder',
          variant: 'destructive',
        })
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async () => {
    setIsLoading(true)
    try {
      const success = await onDelete(folder.id)
      if (success) {
        toast({
          title: 'Success',
          description: 'Folder deleted successfully',
        })
        setIsDeleteOpen(false)
      } else {
        toast({
          title: 'Error',
          description: 'Failed to delete folder',
          variant: 'destructive',
        })
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleCreateSubfolder = async () => {
    const newFolder = await onCreateSubfolder(folder.id)
    if (newFolder) {
      toast({
        title: 'Success',
        description: 'Subfolder created successfully',
      })
    }
  }

  const handleCreateNote = async () => {
    const newNote = await onCreateNote(folder.id)
    if (newNote) {
      toast({
        title: 'Success',
        description: 'Note created in folder',
      })
    }
  }

  const handleDuplicate = async () => {
    if (!onDuplicate) return

    setIsLoading(true)
    try {
      const duplicated = await onDuplicate(folder.id)
      if (duplicated) {
        toast({
          title: 'Success',
          description: 'Folder duplicated successfully',
        })
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <ContextMenu>
        <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>
        <ContextMenuContent className='w-56'>
          <ContextMenuItem onClick={() => setIsRenameOpen(true)}>
            <Edit2 className='mr-2 h-4 w-4' />
            Rename
            <ContextMenuShortcut>F2</ContextMenuShortcut>
          </ContextMenuItem>

          <ContextMenuSeparator />

          <ContextMenuItem onClick={handleCreateNote}>
            <FilePlus className='mr-2 h-4 w-4' />
            New Note
            <ContextMenuShortcut>⌘N</ContextMenuShortcut>
          </ContextMenuItem>

          <ContextMenuItem onClick={handleCreateSubfolder}>
            <FolderPlus className='mr-2 h-4 w-4' />
            New Subfolder
            <ContextMenuShortcut>⌘⇧N</ContextMenuShortcut>
          </ContextMenuItem>

          <ContextMenuSeparator />

          {onDuplicate && (
            <ContextMenuItem onClick={handleDuplicate}>
              <Copy className='mr-2 h-4 w-4' />
              Duplicate
            </ContextMenuItem>
          )}

          {onUpdateColor && (
            <ContextMenuItem disabled>
              <Palette className='mr-2 h-4 w-4' />
              Change Color
              <span className='ml-auto text-xs text-muted-foreground'>
                Coming soon
              </span>
            </ContextMenuItem>
          )}

          <ContextMenuSeparator />

          <ContextMenuItem
            onClick={() => setIsDeleteOpen(true)}
            className='text-destructive focus:text-destructive'
          >
            <Trash className='mr-2 h-4 w-4' />
            Delete
            <ContextMenuShortcut>⌫</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>

      {/* Rename Dialog */}
      <Dialog open={isRenameOpen} onOpenChange={setIsRenameOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Rename Folder</DialogTitle>
            <DialogDescription>
              Enter a new name for the folder
            </DialogDescription>
          </DialogHeader>
          <div className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='folder-name'>Folder Name</Label>
              <Input
                id='folder-name'
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder='Enter folder name'
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleRename()
                  }
                }}
                autoFocus
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant='outline'
              onClick={() => setIsRenameOpen(false)}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button onClick={handleRename} disabled={isLoading}>
              {isLoading ? 'Renaming...' : 'Rename'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Folder</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete "{folder.title}"? This will also
              delete all notes and subfolders inside it. This action cannot be
              undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isLoading}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              disabled={isLoading}
              className='bg-destructive text-destructive-foreground hover:bg-destructive/90'
            >
              {isLoading ? 'Deleting...' : 'Delete'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
