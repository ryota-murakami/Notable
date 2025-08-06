'use client'

import * as React from 'react'
import { Hash, Plus, Search } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useCreateTag, useTagManager, useTags } from '@/hooks/use-tags'
import type { EnhancedTag } from '@/types/tags'

export interface TagPickerProps {
  /** Whether the dialog is open */
  open: boolean
  /** Callback when dialog open state changes */
  onOpenChange: (open: boolean) => void
  /** Currently selected tags */
  selectedTags?: EnhancedTag[]
  /** Callback when tags are selected */
  onTagsSelect: (tags: EnhancedTag[]) => void
  /** Maximum number of tags that can be selected */
  maxTags?: number
  /** Whether to allow creating new tags */
  allowCreate?: boolean
  /** Title for the dialog */
  title?: string
  /** Description for the dialog */
  description?: string
  /** Additional CSS classes */
  className?: string
}

const TagPicker: React.FC<TagPickerProps> = ({
  open,
  onOpenChange,
  selectedTags = [],
  onTagsSelect,
  maxTags = 20,
  allowCreate = true,
  title = 'Select Tags',
  description = 'Choose tags to organize your content',
  className,
}) => {
  const [searchQuery, setSearchQuery] = React.useState('')
  const [tempSelectedTags, setTempSelectedTags] =
    React.useState<EnhancedTag[]>(selectedTags)

  const { data: allTags = [], isLoading } = useTags()
  const createTagMutation = useCreateTag()
  const { getOrCreateTag } = useTagManager()

  // Filter tags based on search query
  const filteredTags = React.useMemo(() => {
    if (!searchQuery.trim()) return allTags
    const query = searchQuery.toLowerCase()
    return allTags.filter(
      (tag) =>
        tag.name.toLowerCase().includes(query) ||
        tag.description?.toLowerCase().includes(query)
    )
  }, [allTags, searchQuery])

  // Check if a tag is selected
  const isTagSelected = (tag: EnhancedTag) =>
    tempSelectedTags.some((t) => t.id === tag.id)

  // Handle tag selection toggle
  const toggleTag = (tag: EnhancedTag) => {
    if (isTagSelected(tag)) {
      setTempSelectedTags(tempSelectedTags.filter((t) => t.id !== tag.id))
    } else if (tempSelectedTags.length < maxTags) {
      setTempSelectedTags([...tempSelectedTags, tag])
    }
  }

  // Handle creating new tag
  const handleCreateTag = async () => {
    if (!searchQuery.trim() || !allowCreate) return

    try {
      const newTag = await getOrCreateTag(searchQuery.trim())
      if (!isTagSelected(newTag) && tempSelectedTags.length < maxTags) {
        setTempSelectedTags([...tempSelectedTags, newTag])
      }
      setSearchQuery('')
    } catch (error) {
      console.error('Failed to create tag:', error)
    }
  }

  // Handle apply selection
  const handleApply = React.useCallback(() => {
    onTagsSelect(tempSelectedTags)
    onOpenChange(false)
  }, [onTagsSelect, tempSelectedTags, onOpenChange])

  // Reset temp selection when dialog opens
  React.useEffect(() => {
    if (open) {
      setTempSelectedTags(selectedTags)
      setSearchQuery('')
    }
  }, [open, selectedTags])

  // Handle keyboard shortcuts
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!open) return

      if (event.key === 'Escape') {
        onOpenChange(false)
      } else if (event.key === 'Enter' && event.metaKey) {
        handleApply()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, tempSelectedTags, onOpenChange, handleApply])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn('max-w-md', className)}
        data-testid='tag-picker-dialog'
      >
        <DialogHeader>
          <DialogTitle className='flex items-center gap-2'>
            <Hash className='h-5 w-5' />
            {title}
          </DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <div className='space-y-4'>
          {/* Search Input */}
          <div className='relative'>
            <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
            <Input
              placeholder='Search tags...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='pl-9'
              data-testid='tag-picker-search'
            />
          </div>

          {/* Selected Tags Counter */}
          <div className='flex items-center justify-between text-sm text-muted-foreground'>
            <span>
              {tempSelectedTags.length} of {maxTags} tags selected
            </span>
            {tempSelectedTags.length > 0 && (
              <Button
                variant='ghost'
                size='sm'
                onClick={() => setTempSelectedTags([])}
              >
                Clear all
              </Button>
            )}
          </div>

          {/* Tags List */}
          <ScrollArea className='h-64'>
            <div className='space-y-2'>
              {/* Create new tag option */}
              {searchQuery.trim() && allowCreate && (
                <div className='border-b pb-2'>
                  <button
                    onClick={handleCreateTag}
                    disabled={
                      createTagMutation.isPending ||
                      tempSelectedTags.length >= maxTags
                    }
                    className='flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:opacity-50'
                  >
                    <Plus className='h-4 w-4' />
                    <span>Create &quot;{searchQuery.trim()}&quot;</span>
                  </button>
                </div>
              )}

              {/* Existing tags */}
              {isLoading ? (
                <div className='space-y-2'>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className='flex items-center gap-3 rounded-md px-3 py-2 animate-pulse'
                    >
                      <div className='h-4 w-4 bg-muted rounded' />
                      <div className='h-4 bg-muted rounded flex-1' />
                    </div>
                  ))}
                </div>
              ) : filteredTags.length > 0 ? (
                filteredTags.map((tag) => (
                  <button
                    key={tag.id}
                    onClick={() => toggleTag(tag)}
                    disabled={
                      !isTagSelected(tag) && tempSelectedTags.length >= maxTags
                    }
                    className={cn(
                      'flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors',
                      'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none',
                      'disabled:opacity-50 disabled:cursor-not-allowed',
                      isTagSelected(tag) &&
                        'bg-primary text-primary-foreground hover:bg-primary/90'
                    )}
                    data-testid={`tag-picker-item-${tag.name}`}
                  >
                    <Hash
                      className='h-4 w-4'
                      style={{ color: tag.color || undefined }}
                    />
                    <span className='flex-1 truncate'>{tag.name}</span>
                    {tag.usage_count !== undefined && tag.usage_count > 0 && (
                      <span className='text-xs opacity-70'>
                        {tag.usage_count}
                      </span>
                    )}
                  </button>
                ))
              ) : (
                <div className='py-8 text-center text-sm text-muted-foreground'>
                  <Hash className='mx-auto h-8 w-8 mb-2 opacity-50' />
                  <p>No tags found</p>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Actions */}
          <div className='flex items-center justify-between gap-2 pt-2'>
            <Button variant='outline' onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleApply}
              disabled={tempSelectedTags.length === 0}
            >
              Apply ({tempSelectedTags.length})
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export { TagPicker }
