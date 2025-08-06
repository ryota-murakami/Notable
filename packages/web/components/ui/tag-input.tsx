'use client'

import * as React from 'react'
import { Hash, X } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { useTagManager, useTagSuggestions } from '@/hooks/use-tags'
import type { EnhancedTag } from '@/types/tags'

export interface TagInputProps {
  /** Currently selected tags */
  tags: EnhancedTag[]
  /** Callback when tags change */
  onTagsChange: (tags: EnhancedTag[]) => void
  /** Placeholder text for the input */
  placeholder?: string
  /** Maximum number of tags allowed */
  maxTags?: number
  /** Whether the input is disabled */
  disabled?: boolean
  /** Additional CSS classes */
  className?: string
  /** Whether to show tag creation option for new tags */
  allowCreate?: boolean
}

const TagInput: React.FC<TagInputProps> = ({
  tags,
  onTagsChange,
  placeholder = 'Add tags...',
  maxTags = 20,
  disabled = false,
  className,
  allowCreate = true,
}) => {
  const [inputValue, setInputValue] = React.useState('')
  const [isInputFocused, setIsInputFocused] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)

  // Get tag suggestions based on input
  const suggestions = useTagSuggestions(inputValue, 5)
  const { getOrCreateTag, isLoading } = useTagManager()

  // Filter out already selected tags from suggestions
  const availableSuggestions = React.useMemo(() => {
    return suggestions.filter(
      (suggestion) => !tags.some((tag) => tag.id === suggestion.id)
    )
  }, [suggestions, tags])

  // Show suggestions when input is focused and has value or has available suggestions
  const showSuggestions =
    isInputFocused &&
    (inputValue.trim().length > 0 || availableSuggestions.length > 0)

  // Handle adding a tag
  const addTag = React.useCallback(
    async (tag: EnhancedTag | string) => {
      if (tags.length >= maxTags) return

      let tagToAdd: EnhancedTag

      if (typeof tag === 'string') {
        // Create new tag
        if (!allowCreate) return
        try {
          tagToAdd = await getOrCreateTag(tag.trim())
        } catch (error) {
          console.error('Failed to create tag:', error)
          return
        }
      } else {
        tagToAdd = tag
      }

      // Check if tag is already selected
      if (tags.some((t) => t.id === tagToAdd.id)) return

      onTagsChange([...tags, tagToAdd])
      setInputValue('')
    },
    [tags, maxTags, allowCreate, getOrCreateTag, onTagsChange]
  )

  // Handle removing a tag
  const removeTag = React.useCallback(
    (tagToRemove: EnhancedTag) => {
      onTagsChange(tags.filter((tag) => tag.id !== tagToRemove.id))
    },
    [tags, onTagsChange]
  )

  // Handle input key events
  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (disabled) return

      switch (event.key) {
        case 'Enter':
          event.preventDefault()
          if (inputValue.trim()) {
            if (availableSuggestions.length > 0) {
              // Add first suggestion
              addTag(availableSuggestions[0])
            } else if (allowCreate) {
              // Create new tag
              addTag(inputValue.trim())
            }
          }
          break

        case 'Backspace':
          if (!inputValue && tags.length > 0) {
            // Remove last tag when input is empty
            removeTag(tags[tags.length - 1])
          }
          break

        case 'Escape':
          setInputValue('')
          inputRef.current?.blur()
          break
      }
    },
    [
      inputValue,
      availableSuggestions,
      tags,
      allowCreate,
      addTag,
      removeTag,
      disabled,
    ]
  )

  // Handle clicking outside to close suggestions
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsInputFocused(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className={cn('relative', className)} ref={containerRef}>
      {/* Tag display and input container */}
      <div
        className={cn(
          'flex min-h-10 w-full flex-wrap items-center gap-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background',
          'focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2',
          disabled && 'cursor-not-allowed opacity-50',
          className
        )}
        onClick={() => !disabled && inputRef.current?.focus()}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            !disabled && inputRef.current?.focus()
          }
        }}
        tabIndex={0}
        role='textbox'
        aria-label='Tag input field'
      >
        {/* Selected tags */}
        {tags.map((tag) => (
          <TagBadge
            key={tag.id}
            tag={tag}
            onRemove={disabled ? undefined : () => removeTag(tag)}
          />
        ))}

        {/* Input field */}
        <Input
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setIsInputFocused(true)}
          onKeyDown={handleKeyDown}
          placeholder={tags.length === 0 ? placeholder : ''}
          disabled={disabled || isLoading || tags.length >= maxTags}
          className='flex-1 border-0 bg-transparent p-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0'
          style={{ minWidth: '120px' }}
        />
      </div>

      {/* Suggestions dropdown */}
      {showSuggestions && (
        <div className='absolute top-full z-50 mt-1 w-full rounded-md border bg-popover p-1 text-popover-foreground shadow-lg'>
          {availableSuggestions.length > 0 ? (
            <div className='space-y-1'>
              {availableSuggestions.map((suggestion) => (
                <button
                  key={suggestion.id}
                  onClick={() => addTag(suggestion)}
                  className='flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none'
                >
                  <Hash className='h-3 w-3' />
                  <span>{suggestion.name}</span>
                  {suggestion.usage_count && suggestion.usage_count > 0 && (
                    <span className='ml-auto text-xs text-muted-foreground'>
                      {suggestion.usage_count} notes
                    </span>
                  )}
                </button>
              ))}
            </div>
          ) : inputValue.trim() && allowCreate ? (
            <button
              onClick={() => addTag(inputValue.trim())}
              className='flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none'
              disabled={isLoading}
            >
              <Hash className='h-3 w-3' />
              <span>Create &quot;{inputValue.trim()}&quot;</span>
            </button>
          ) : (
            <div className='px-2 py-1.5 text-sm text-muted-foreground'>
              No tags found
            </div>
          )}
        </div>
      )}
    </div>
  )
}

interface TagBadgeProps {
  tag: EnhancedTag
  onRemove?: () => void
}

const TagBadge: React.FC<TagBadgeProps> = ({ tag, onRemove }) => {
  return (
    <Badge
      variant='secondary'
      className='flex items-center gap-1 pl-2 pr-1'
      style={{
        backgroundColor: tag.color ? `${tag.color}20` : undefined,
        borderColor: tag.color || undefined,
        color: tag.color || undefined,
      }}
    >
      <Hash className='h-3 w-3' />
      <span>{tag.name}</span>
      {onRemove && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onRemove()
          }}
          className='ml-1 rounded-full p-0.5 hover:bg-black/10 focus:outline-none focus:ring-1 focus:ring-ring dark:hover:bg-white/10'
        >
          <X className='h-3 w-3' />
        </button>
      )}
    </Badge>
  )
}

export { TagInput, TagBadge }
