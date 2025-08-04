'use client'

import * as React from 'react'
import {
  ChevronDown,
  ChevronRight,
  Edit,
  Hash,
  MoreHorizontal,
  Plus,
  Trash2,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTagManager, useTagTree } from '@/hooks/use-tags'
import type { EnhancedTag } from '@/types/tags'

export interface TagTreeProps {
  /** Array of root tags (children will be fetched automatically) */
  tags?: EnhancedTag[]
  /** Currently selected tag ID */
  selectedTagId?: string
  /** Whether to show usage counts */
  showUsageCounts?: boolean
  /** Whether to show action buttons */
  showActions?: boolean
  /** Whether tags are clickable for navigation */
  clickable?: boolean
  /** Maximum depth to display */
  maxDepth?: number
  /** Callback when a tag is selected */
  onTagSelect?: (tag: EnhancedTag) => void
  /** Callback when a tag should be edited */
  onTagEdit?: (tag: EnhancedTag) => void
  /** Callback when a tag should be deleted */
  onTagDelete?: (tag: EnhancedTag) => void
  /** Callback when a new child tag should be created */
  onTagCreate?: (parentTag: EnhancedTag | null) => void
  /** Additional CSS classes */
  className?: string
}

const TagTree: React.FC<TagTreeProps> = ({
  tags: propTags,
  selectedTagId,
  showUsageCounts = true,
  showActions = true,
  clickable = true,
  maxDepth = 5,
  onTagSelect,
  onTagEdit,
  onTagDelete,
  onTagCreate,
  className,
}) => {
  // Use the hook to get hierarchical tag structure if no tags provided
  const tagTree = useTagTree()
  const tags = propTags || tagTree

  const [expandedTags, setExpandedTags] = React.useState<Set<string>>(new Set())

  const toggleExpanded = (tagId: string) => {
    const newExpanded = new Set(expandedTags)
    if (newExpanded.has(tagId)) {
      newExpanded.delete(tagId)
    } else {
      newExpanded.add(tagId)
    }
    setExpandedTags(newExpanded)
  }

  const handleTagClick = (tag: EnhancedTag) => {
    if (clickable && onTagSelect) {
      onTagSelect(tag)
    }
  }

  if (!tags || tags.length === 0) {
    return (
      <div
        className={cn(
          'flex items-center justify-center py-8 text-muted-foreground',
          className
        )}
        data-testid='tag-tree'
      >
        <div className='text-center'>
          <Hash className='mx-auto h-8 w-8 mb-2 opacity-50' />
          <p className='text-sm'>No tags found</p>
          {showActions && onTagCreate && (
            <Button
              variant='ghost'
              size='sm'
              onClick={() => onTagCreate(null)}
              className='mt-2'
            >
              <Plus className='h-4 w-4 mr-1' />
              Create your first tag
            </Button>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className={cn('space-y-1', className)} data-testid='tag-tree'>
      {tags.map((tag) => (
        <TagTreeNode
          key={tag.id}
          tag={tag}
          level={0}
          maxDepth={maxDepth}
          selectedTagId={selectedTagId}
          expandedTags={expandedTags}
          showUsageCounts={showUsageCounts}
          showActions={showActions}
          clickable={clickable}
          onToggleExpanded={toggleExpanded}
          onTagSelect={handleTagClick}
          onTagEdit={onTagEdit}
          onTagDelete={onTagDelete}
          onTagCreate={onTagCreate}
        />
      ))}
    </div>
  )
}

interface TagTreeNodeProps {
  tag: EnhancedTag
  level: number
  maxDepth: number
  selectedTagId?: string
  expandedTags: Set<string>
  showUsageCounts: boolean
  showActions: boolean
  clickable: boolean
  onToggleExpanded: (tagId: string) => void
  onTagSelect?: (tag: EnhancedTag) => void
  onTagEdit?: (tag: EnhancedTag) => void
  onTagDelete?: (tag: EnhancedTag) => void
  onTagCreate?: (parentTag: EnhancedTag) => void
}

const TagTreeNode: React.FC<TagTreeNodeProps> = ({
  tag,
  level,
  maxDepth,
  selectedTagId,
  expandedTags,
  showUsageCounts,
  showActions,
  clickable,
  onToggleExpanded,
  onTagSelect,
  onTagEdit,
  onTagDelete,
  onTagCreate,
}) => {
  const hasChildren = tag.children && tag.children.length > 0
  const isExpanded = expandedTags.has(tag.id)
  const isSelected = selectedTagId === tag.id
  const canExpand = hasChildren && level < maxDepth

  const handleNodeClick = () => {
    if (clickable && onTagSelect) {
      onTagSelect(tag)
    }
  }

  const handleExpandClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (canExpand) {
      onToggleExpanded(tag.id)
    }
  }

  return (
    <div className='select-none'>
      {/* Tag node */}
      <div
        className={cn(
          'flex items-center gap-1 rounded-sm px-2 py-1.5 text-sm transition-colors',
          'hover:bg-accent hover:text-accent-foreground',
          isSelected && 'bg-accent text-accent-foreground',
          clickable && 'cursor-pointer',
          !clickable && 'cursor-default'
        )}
        style={{ paddingLeft: `${level * 16 + 8}px` }}
        onClick={handleNodeClick}
      >
        {/* Expand/collapse button */}
        <button
          onClick={handleExpandClick}
          className='flex h-4 w-4 items-center justify-center rounded-sm hover:bg-accent-foreground/10'
          disabled={!canExpand}
        >
          {canExpand ? (
            isExpanded ? (
              <ChevronDown className='h-3 w-3' />
            ) : (
              <ChevronRight className='h-3 w-3' />
            )
          ) : (
            <div className='h-3 w-3' />
          )}
        </button>

        {/* Tag icon */}
        <Hash
          className='h-3 w-3 flex-shrink-0'
          style={{ color: tag.color || undefined }}
        />

        {/* Tag name */}
        <span className='flex-1 truncate font-medium'>{tag.name}</span>

        {/* Usage count */}
        {showUsageCounts && tag.usage_count !== undefined && (
          <span className='text-xs text-muted-foreground'>
            {tag.usage_count}
          </span>
        )}

        {/* Actions menu */}
        {showActions && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant='ghost'
                size='sm'
                className='h-6 w-6 p-0 opacity-0 group-hover:opacity-100 hover:opacity-100'
                onClick={(e) => e.stopPropagation()}
              >
                <MoreHorizontal className='h-3 w-3' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              {onTagCreate && (
                <>
                  <DropdownMenuItem onClick={() => onTagCreate(tag)}>
                    <Plus className='h-4 w-4 mr-2' />
                    Add child tag
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                </>
              )}
              {onTagEdit && (
                <DropdownMenuItem onClick={() => onTagEdit(tag)}>
                  <Edit className='h-4 w-4 mr-2' />
                  Edit tag
                </DropdownMenuItem>
              )}
              {onTagDelete && (
                <DropdownMenuItem
                  onClick={() => onTagDelete(tag)}
                  className='text-destructive focus:text-destructive'
                >
                  <Trash2 className='h-4 w-4 mr-2' />
                  Delete tag
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>

      {/* Child nodes */}
      {canExpand && isExpanded && hasChildren && (
        <div className='space-y-1'>
          {tag.children!.map((childTag) => (
            <TagTreeNode
              key={childTag.id}
              tag={childTag}
              level={level + 1}
              maxDepth={maxDepth}
              selectedTagId={selectedTagId}
              expandedTags={expandedTags}
              showUsageCounts={showUsageCounts}
              showActions={showActions}
              clickable={clickable}
              onToggleExpanded={onToggleExpanded}
              onTagSelect={onTagSelect}
              onTagEdit={onTagEdit}
              onTagDelete={onTagDelete}
              onTagCreate={onTagCreate}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export interface TagTreeSearchProps {
  /** Search query */
  query: string
  /** Callback when query changes */
  onQueryChange: (query: string) => void
  /** Placeholder text */
  placeholder?: string
  /** Additional CSS classes */
  className?: string
}

const TagTreeSearch: React.FC<TagTreeSearchProps> = ({
  query,
  onQueryChange,
  placeholder = 'Search tags...',
  className,
}) => {
  return (
    <div className={cn('relative', className)}>
      <Hash className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
      <input
        type='text'
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder={placeholder}
        className='flex h-9 w-full rounded-md border border-input bg-background pl-9 pr-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
      />
    </div>
  )
}

export { TagTree, TagTreeSearch }
