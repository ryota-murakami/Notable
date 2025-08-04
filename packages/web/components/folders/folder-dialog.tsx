'use client'

import * as React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useFolders } from '@/hooks/use-folders'
import type { Folder } from '@/types/folder'

interface FolderDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  mode: 'create' | 'edit'
  folder?: Folder
  parentId?: string | null
}

export function FolderDialog({
  open,
  onOpenChange,
  mode,
  folder,
  parentId,
}: FolderDialogProps) {
  const { folders, createFolder, updateFolder } = useFolders()
  const [name, setName] = React.useState(folder?.name || '')
  const [selectedParentId, setSelectedParentId] = React.useState<string | null>(
    folder?.parent_id || parentId || null
  )

  React.useEffect(() => {
    if (open) {
      setName(folder?.name || '')
      setSelectedParentId(folder?.parent_id || parentId || null)
    }
  }, [open, folder, parentId])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim()) return

    if (mode === 'create') {
      await createFolder.mutateAsync({
        name: name.trim(),
        parent_id: selectedParentId,
      })
    } else if (mode === 'edit' && folder) {
      await updateFolder.mutateAsync({
        id: folder.id,
        name: name.trim(),
        parent_id: selectedParentId,
      })
    }

    onOpenChange(false)
  }

  const availableFolders = React.useMemo(() => {
    if (mode === 'create') {
      return folders
    }

    // For edit mode, exclude the current folder and its descendants
    if (!folder) return folders

    const excludeIds = new Set<string>([folder.id])
    const addDescendants = (parentId: string) => {
      folders
        .filter((f) => f.parent_id === parentId)
        .forEach((f) => {
          excludeIds.add(f.id)
          addDescendants(f.id)
        })
    }
    addDescendants(folder.id)

    return folders.filter((f) => !excludeIds.has(f.id))
  }, [folders, folder, mode])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-[425px]'>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>
              {mode === 'create' ? 'Create New Folder' : 'Edit Folder'}
            </DialogTitle>
            <DialogDescription>
              {mode === 'create'
                ? 'Create a new folder to organize your notes.'
                : 'Update the folder name or move it to a different location.'}
            </DialogDescription>
          </DialogHeader>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='name' className='text-right'>
                Name
              </Label>
              <Input
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='col-span-3'
                placeholder='Enter folder name'
                data-testid='folder-name-input'
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='parent' className='text-right'>
                Parent
              </Label>
              <Select
                value={selectedParentId || 'root'}
                onValueChange={(value) =>
                  setSelectedParentId(value === 'root' ? null : value)
                }
              >
                <SelectTrigger className='col-span-3'>
                  <SelectValue placeholder='Select parent folder' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='root'>Root (No parent)</SelectItem>
                  {availableFolders.map((f) => (
                    <SelectItem key={f.id} value={f.id}>
                      {f.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button
              type='button'
              variant='outline'
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type='submit' disabled={!name.trim()}>
              {mode === 'create' ? 'Create' : 'Save'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
