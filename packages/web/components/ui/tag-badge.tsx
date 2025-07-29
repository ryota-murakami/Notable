'use client'

import * as React from 'react'
import { Hash, X } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import type { EnhancedTag } from '@/types/tags'

export interface TagBadgeProps {
  /** The tag to display */
  tag: EnhancedTag
  /** Size variant */
  size?: 'sm' | 'md' | 'lg'
  /** Whether the tag is clickable */
  clickable?: boolean
  /** Whether to show remove button */
  removable?: boolean
  /** Whether to show tag icon */
  showIcon?: boolean
  /** Callback when tag is clicked */
  onClick?: (tag: EnhancedTag) => void
  /** Callback when remove button is clicked */
  onRemove?: (tag: EnhancedTag) => void
  /** Additional CSS classes */
  className?: string
  /** Custom badge variant */
  variant?: 'default' | 'secondary' | 'outline' | 'destructive'
}

const TagBadge: React.FC<TagBadgeProps> = ({
  tag,
  size = 'md',
  clickable = false,
  removable = false,
  showIcon = true,
  onClick,
  onRemove,
  className,
  variant = 'secondary',
}) => {
  const sizeClasses = {
    sm: 'text-xs px-1.5 py-0.5 gap-1',
    md: 'text-xs px-2 py-1 gap-1',
    lg: 'text-sm px-2.5 py-1.5 gap-1.5',
  }

  const iconSizes = {
    sm: 'h-2.5 w-2.5',
    md: 'h-3 w-3',
    lg: 'h-3.5 w-3.5',
  }

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (clickable && onClick) {
      onClick(tag)
    }
  }

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (onRemove) {
      onRemove(tag)
    }
  }

  return (
    <Badge
      variant={variant}
      className={cn(
        'inline-flex items-center font-medium transition-colors',
        sizeClasses[size],
        clickable && 'cursor-pointer hover:opacity-80',
        !clickable && 'cursor-default',
        removable && 'pr-1',
        className
      )}
      style={{
        backgroundColor: tag.color ? `${tag.color}20` : undefined,
        borderColor: tag.color || undefined,
        color: tag.color || undefined,
      }}
      onClick={handleClick}
    >
      {showIcon && <Hash className={iconSizes[size]} />}
      <span className='truncate'>{tag.name}</span>
      {tag.usage_count !== undefined && tag.usage_count > 0 && (
        <span className='ml-1 text-xs opacity-60'>({tag.usage_count})</span>
      )}
      {removable && (
        <button
          onClick={handleRemove}
          className={cn(
            'ml-1 rounded-full p-0.5 hover:bg-black/10 focus:outline-none focus:ring-1 focus:ring-ring dark:hover:bg-white/10',
            size === 'sm' && 'p-0.5',
            size === 'md' && 'p-0.5',
            size === 'lg' && 'p-1'
          )}
          aria-label={`Remove ${tag.name} tag`}
        >
          <X className={iconSizes[size]} />
        </button>
      )}
    </Badge>
  )
}

export interface TagListProps {
  /** Array of tags to display */
  tags: EnhancedTag[]
  /** Size variant for all badges */
  size?: 'sm' | 'md' | 'lg'
  /** Whether tags are clickable */
  clickable?: boolean
  /** Whether to show remove buttons */
  removable?: boolean
  /** Whether to show tag icons */
  showIcon?: boolean
  /** Maximum number of tags to show (rest will be hidden with +N) */
  maxTags?: number
  /** Layout direction */
  direction?: 'horizontal' | 'vertical'
  /** Callback when tag is clicked */
  onTagClick?: (tag: EnhancedTag) => void
  /** Callback when tag is removed */
  onTagRemove?: (tag: EnhancedTag) => void
  /** Additional CSS classes */
  className?: string
}

const TagList: React.FC<TagListProps> = ({
  tags,
  size = 'md',
  clickable = false,
  removable = false,
  showIcon = true,
  maxTags,
  direction = 'horizontal',
  onTagClick,
  onTagRemove,
  className,
}) => {
  const visibleTags = maxTags ? tags.slice(0, maxTags) : tags
  const hiddenCount =
    maxTags && tags.length > maxTags ? tags.length - maxTags : 0

  if (tags.length === 0) {
    return null
  }

  return (
    <div
      className={cn(
        'flex flex-wrap items-center gap-1',
        direction === 'vertical' && 'flex-col items-start',
        className
      )}
    >
      {visibleTags.map((tag) => (
        <TagBadge
          key={tag.id}
          tag={tag}
          size={size}
          clickable={clickable}
          removable={removable}
          showIcon={showIcon}
          onClick={onTagClick}
          onRemove={onTagRemove}
        />
      ))}
      {hiddenCount > 0 && (
        <Badge
          variant='outline'
          className={cn('text-muted-foreground', sizeClasses[size])}
        >
          +{hiddenCount}
        </Badge>
      )}
    </div>
  )
}

// Helper function to get contrasting text color for a given background color
export const getContrastColor = (backgroundColor: string): string => {
  // Remove # if present
  const hex = backgroundColor.replace('#', '')

  // Convert to RGB
  const r = parseInt(hex.substr(0, 2), 16)
  const g = parseInt(hex.substr(2, 2), 16)
  const b = parseInt(hex.substr(4, 2), 16)

  // Calculate relative luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255

  // Return black or white based on luminance
  return luminance > 0.5 ? '#000000' : '#ffffff'
}

const sizeClasses = {
  sm: 'text-xs px-1.5 py-0.5 gap-1',
  md: 'text-xs px-2 py-1 gap-1',
  lg: 'text-sm px-2.5 py-1.5 gap-1.5',
}

export { TagBadge, TagList }
