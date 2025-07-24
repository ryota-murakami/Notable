'use client'

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import {
  CheckSquare,
  Download,
  FolderOpen,
  Square,
  Tag,
  Trash,
  X,
} from 'lucide-react'
import { useState } from 'react'
import type { Note } from '@/types/note'
import type { ExportFormat } from '@/hooks/use-export'

interface BulkOperationsToolbarProps {
  selectedNoteIds: Set<string>
  totalNotes: number
  onSelectAll: () => void
  onClearSelection: () => void
  onBulkDelete: () => void
  onBulkExport: (format: ExportFormat) => void
  onBulkMove: (folderId: string) => void
  onBulkAddTag: (tag: string) => void
  folders: Note[]
  isExporting?: boolean
}

export function BulkOperationsToolbar({
  selectedNoteIds,
  totalNotes,
  onSelectAll,
  onClearSelection,
  onBulkDelete,
  onBulkExport,
  onBulkMove,
  onBulkAddTag,
  folders,
  isExporting = false,
}: BulkOperationsToolbarProps) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [showMoveDialog, setShowMoveDialog] = useState(false)
  const [showTagDialog, setShowTagDialog] = useState(false)
  const [selectedFolderId, setSelectedFolderId] = useState<string>('')
  const [newTag, setNewTag] = useState('')

  const selectedCount = selectedNoteIds.size

  if (selectedCount === 0) return null

  const handleBulkDelete = () => {
    onBulkDelete()
    setShowDeleteDialog(false)
  }

  const handleBulkMove = () => {
    if (selectedFolderId) {
      onBulkMove(selectedFolderId)
      setShowMoveDialog(false)
    }
  }

  const handleBulkAddTag = () => {
    if (newTag.trim()) {
      onBulkAddTag(newTag.trim())
      setShowTagDialog(false)
      setNewTag('')
    }
  }

  return (
    <>
      <div className='fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 bg-background border rounded-lg shadow-lg p-4'>
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-2'>
            <Badge variant='secondary' className='text-sm'>
              {selectedCount} selected
            </Badge>
            {selectedCount < totalNotes && (
              <Button
                variant='ghost'
                size='sm'
                onClick={onSelectAll}
                className='text-xs'
              >
                <CheckSquare className='h-3 w-3 mr-1' />
                Select all ({totalNotes})
              </Button>
            )}
            <Button
              variant='ghost'
              size='sm'
              onClick={onClearSelection}
              className='text-xs'
            >
              <Square className='h-3 w-3 mr-1' />
              Clear
            </Button>
          </div>

          <div className='h-4 w-px bg-border' />

          <div className='flex items-center gap-2'>
            {/* Delete */}
            <Button
              variant='destructive'
              size='sm'
              onClick={() => setShowDeleteDialog(true)}
            >
              <Trash className='h-4 w-4 mr-1' />
              Delete
            </Button>

            {/* Move to folder */}
            <Button
              variant='outline'
              size='sm'
              onClick={() => setShowMoveDialog(true)}
            >
              <FolderOpen className='h-4 w-4 mr-1' />
              Move
            </Button>

            {/* Add tag */}
            <Button
              variant='outline'
              size='sm'
              onClick={() => setShowTagDialog(true)}
            >
              <Tag className='h-4 w-4 mr-1' />
              Tag
            </Button>

            {/* Export */}
            <Select
              onValueChange={(value) => onBulkExport(value as ExportFormat)}
              disabled={isExporting}
            >
              <SelectTrigger className='w-[120px]'>
                <Download className='h-4 w-4 mr-1' />
                <SelectValue placeholder='Export' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='markdown'>Markdown</SelectItem>
                <SelectItem value='html'>HTML</SelectItem>
                <SelectItem value='pdf'>PDF</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            variant='ghost'
            size='icon'
            onClick={onClearSelection}
            className='ml-2'
          >
            <X className='h-4 w-4' />
          </Button>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete {selectedCount} notes?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. The selected notes will be
              permanently deleted.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant='outline'
              onClick={() => setShowDeleteDialog(false)}
            >
              Cancel
            </Button>
            <Button variant='destructive' onClick={handleBulkDelete}>
              Delete {selectedCount} notes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Move to Folder Dialog */}
      <Dialog open={showMoveDialog} onOpenChange={setShowMoveDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Move {selectedCount} notes</DialogTitle>
            <DialogDescription>
              Select a folder to move the selected notes into.
            </DialogDescription>
          </DialogHeader>
          <div className='py-4'>
            <Label htmlFor='folder'>Destination Folder</Label>
            <Select
              value={selectedFolderId}
              onValueChange={setSelectedFolderId}
            >
              <SelectTrigger id='folder' className='mt-2'>
                <SelectValue placeholder='Select a folder' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='root'>Root (No folder)</SelectItem>
                {folders.map((folder) => (
                  <SelectItem key={folder.id} value={folder.id}>
                    {folder.title || 'Untitled Folder'}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <Button variant='outline' onClick={() => setShowMoveDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleBulkMove} disabled={!selectedFolderId}>
              Move {selectedCount} notes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add Tag Dialog */}
      <Dialog open={showTagDialog} onOpenChange={setShowTagDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add tag to {selectedCount} notes</DialogTitle>
            <DialogDescription>
              Enter a tag to add to all selected notes.
            </DialogDescription>
          </DialogHeader>
          <div className='py-4'>
            <Label htmlFor='tag'>Tag Name</Label>
            <Input
              id='tag'
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              placeholder='Enter tag name'
              className='mt-2'
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleBulkAddTag()
                }
              }}
            />
          </div>
          <DialogFooter>
            <Button variant='outline' onClick={() => setShowTagDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleBulkAddTag} disabled={!newTag.trim()}>
              Add tag
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
