'use client'

import * as React from 'react'
import { Check, Hash, Loader2, Plus, Tag, Tags, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { TagInput } from '@/components/ui/tag-input'
import { TagBadge } from '@/components/ui/tag-badge'
import { useTags, useTagManager } from '@/hooks/use-tags'
import type { EnhancedTag, BulkTagOperation, BulkTagResult } from '@/types/tags'

export interface BulkTagOperationsProps {
  /** Whether the dialog is open */
  open: boolean
  /** Callback when dialog open state changes */
  onOpenChange: (open: boolean) => void
  /** IDs of selected notes */
  selectedNoteIds: string[]
  /** Note titles for display (keyed by note ID) */
  noteTitles?: Record<string, string>
  /** Callback when operation completes */
  onComplete?: (result: BulkTagResult) => void
  /** Additional CSS classes */
  className?: string
}

type OperationType = 'add' | 'remove' | 'replace'

interface OperationState {
  type: OperationType
  tags: EnhancedTag[]
  isProcessing: boolean
  progress: number
  result: BulkTagResult | null
  error: string | null
}

const BulkTagOperations: React.FC<BulkTagOperationsProps> = ({
  open,
  onOpenChange,
  selectedNoteIds,
  noteTitles = {},
  onComplete,
  className,
}) => {
  const [state, setState] = React.useState<OperationState>({
    type: 'add',
    tags: [],
    isProcessing: false,
    progress: 0,
    result: null,
    error: null,
  })

  const { data: availableTags = [] } = useTags()
  const { parseAndCreateTags } = useTagManager()

  // Reset state when dialog opens/closes
  React.useEffect(() => {
    if (open) {
      setState({
        type: 'add',
        tags: [],
        isProcessing: false,
        progress: 0,
        result: null,
        error: null,
      })
    }
  }, [open])

  // Handle operation type change
  const handleOperationTypeChange = (value: string) => {
    const type = value as OperationType
    setState((prev) => ({ ...prev, type, error: null }))
  }

  // Handle tag selection
  const handleTagsChange = (tags: EnhancedTag[]) => {
    setState((prev) => ({ ...prev, tags, error: null }))
  }

  // Execute bulk operation
  const executeBulkOperation = async () => {
    if (state.tags.length === 0) {
      setState((prev) => ({ ...prev, error: 'Please select at least one tag' }))
      return
    }

    setState((prev) => ({
      ...prev,
      isProcessing: true,
      progress: 0,
      error: null,
    }))

    try {
      const operation: BulkTagOperation = {
        operation: state.type,
        noteIds: selectedNoteIds,
        tagIds: state.tags.map((tag) => tag.id),
      }

      // Simulate API call to bulk operation endpoint
      const response = await fetch('/api/notes/bulk-tags', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(operation),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Bulk operation failed')
      }

      const result: BulkTagResult = await response.json()

      setState((prev) => ({
        ...prev,
        isProcessing: false,
        progress: 100,
        result,
      }))

      // Notify parent component
      onComplete?.(result)

      // Auto-close after success
      setTimeout(() => {
        onOpenChange(false)
      }, 1500)
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isProcessing: false,
        error:
          error instanceof Error ? error.message : 'Unknown error occurred',
      }))
    }
  }

  // Simulate progress during processing (for demo purposes)
  React.useEffect(() => {
    if (state.isProcessing && state.progress < 100) {
      const timer = setTimeout(() => {
        setState((prev) => ({
          ...prev,
          progress: Math.min(prev.progress + 10, 90),
        }))
      }, 200)
      return () => clearTimeout(timer)
    }
  }, [state.isProcessing, state.progress])

  const operationDescriptions = {
    add: 'Add the selected tags to all selected notes',
    remove: 'Remove the selected tags from all selected notes',
    replace:
      'Replace all existing tags with the selected tags on all selected notes',
  }

  const canExecute = state.tags.length > 0 && !state.isProcessing

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={cn('max-w-2xl', className)}>
        <DialogHeader>
          <DialogTitle className='flex items-center gap-2'>
            <Tags className='h-5 w-5' />
            Bulk Tag Operations
          </DialogTitle>
          <DialogDescription>
            Apply tag changes to {selectedNoteIds.length} selected note
            {selectedNoteIds.length !== 1 ? 's' : ''}
          </DialogDescription>
        </DialogHeader>

        <div className='space-y-6'>
          {/* Operation Type Selection */}
          <div>
            <label className='text-sm font-medium mb-2 block'>
              Operation Type
            </label>
            <Select
              value={state.type}
              onValueChange={handleOperationTypeChange}
              disabled={state.isProcessing}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='add'>
                  <div className='flex items-center gap-2'>
                    <Plus className='h-4 w-4' />
                    Add Tags
                  </div>
                </SelectItem>
                <SelectItem value='remove'>
                  <div className='flex items-center gap-2'>
                    <X className='h-4 w-4' />
                    Remove Tags
                  </div>
                </SelectItem>
                <SelectItem value='replace'>
                  <div className='flex items-center gap-2'>
                    <Tag className='h-4 w-4' />
                    Replace All Tags
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
            <p className='text-xs text-muted-foreground mt-1'>
              {operationDescriptions[state.type]}
            </p>
          </div>

          {/* Tag Selection */}
          <div>
            <label className='text-sm font-medium mb-2 block'>
              {state.type === 'add'
                ? 'Tags to Add'
                : state.type === 'remove'
                  ? 'Tags to Remove'
                  : 'New Tags (will replace all existing tags)'}
            </label>
            <TagInput
              tags={state.tags}
              onTagsChange={handleTagsChange}
              placeholder='Select or create tags...'
              disabled={state.isProcessing}
              maxTags={20}
            />
          </div>

          {/* Selected Notes Preview */}
          <Card>
            <CardHeader className='pb-3'>
              <CardTitle className='text-sm font-medium'>
                Selected Notes ({selectedNoteIds.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='space-y-2 max-h-32 overflow-y-auto'>
                {selectedNoteIds.slice(0, 10).map((noteId) => (
                  <div key={noteId} className='flex items-center gap-2 text-sm'>
                    <Hash className='h-3 w-3 text-muted-foreground' />
                    <span className='truncate'>
                      {noteTitles[noteId] || `Note ${noteId.slice(0, 8)}`}
                    </span>
                  </div>
                ))}
                {selectedNoteIds.length > 10 && (
                  <div className='text-xs text-muted-foreground'>
                    ... and {selectedNoteIds.length - 10} more notes
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Operation Progress */}
          {state.isProcessing && (
            <Card>
              <CardContent className='pt-6'>
                <div className='space-y-2'>
                  <div className='flex items-center justify-between text-sm'>
                    <span>Processing...</span>
                    <span>{state.progress}%</span>
                  </div>
                  <Progress value={state.progress} className='h-2' />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Operation Result */}
          {state.result && (
            <Card>
              <CardContent className='pt-6'>
                <div className='space-y-3'>
                  <div className='flex items-center gap-2 text-sm'>
                    <Check className='h-4 w-4 text-green-600' />
                    <span className='font-medium'>Operation Completed</span>
                  </div>

                  <div className='grid grid-cols-2 gap-4 text-sm'>
                    <div>
                      <span className='text-muted-foreground'>Processed:</span>
                      <span className='ml-2 font-medium'>
                        {state.result.processed}
                      </span>
                    </div>
                    <div>
                      <span className='text-muted-foreground'>Failed:</span>
                      <span className='ml-2 font-medium'>
                        {state.result.failed}
                      </span>
                    </div>
                  </div>

                  {state.result.errors.length > 0 && (
                    <div>
                      <p className='text-sm font-medium text-destructive mb-2'>
                        Errors:
                      </p>
                      <div className='space-y-1 max-h-20 overflow-y-auto'>
                        {state.result.errors.map((error, index) => (
                          <div
                            key={index}
                            className='text-xs text-muted-foreground'
                          >
                            {noteTitles[error.noteId] || error.noteId}:{' '}
                            {error.error}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Error Display */}
          {state.error && (
            <Card className='border-destructive'>
              <CardContent className='pt-6'>
                <div className='flex items-center gap-2 text-sm text-destructive'>
                  <X className='h-4 w-4' />
                  <span>{state.error}</span>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <DialogFooter>
          <Button
            variant='outline'
            onClick={() => onOpenChange(false)}
            disabled={state.isProcessing}
          >
            {state.result ? 'Close' : 'Cancel'}
          </Button>
          {!state.result && (
            <Button onClick={executeBulkOperation} disabled={!canExecute}>
              {state.isProcessing ? (
                <>
                  <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                  Processing...
                </>
              ) : (
                <>
                  {state.type === 'add' && <Plus className='mr-2 h-4 w-4' />}
                  {state.type === 'remove' && <X className='mr-2 h-4 w-4' />}
                  {state.type === 'replace' && <Tag className='mr-2 h-4 w-4' />}
                  Execute Operation
                </>
              )}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

// Hook for managing bulk tag operations
export function useBulkTagOperations() {
  const [open, setOpen] = React.useState(false)
  const [selectedNoteIds, setSelectedNoteIds] = React.useState<string[]>([])
  const [noteTitles, setNoteTitles] = React.useState<Record<string, string>>({})

  const startBulkOperation = React.useCallback(
    (noteIds: string[], titles?: Record<string, string>) => {
      setSelectedNoteIds(noteIds)
      setNoteTitles(titles || {})
      setOpen(true)
    },
    []
  )

  const closeBulkOperation = React.useCallback(() => {
    setOpen(false)
    // Clear state after animation
    setTimeout(() => {
      setSelectedNoteIds([])
      setNoteTitles({})
    }, 300)
  }, [])

  return {
    open,
    selectedNoteIds,
    noteTitles,
    startBulkOperation,
    closeBulkOperation,
    setOpen,
  }
}

export { BulkTagOperations }
