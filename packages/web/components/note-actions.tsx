'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Star, Pin, Archive, MoreVertical } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'

interface NoteActionsProps {
  noteId: string
  isFavorite?: boolean
  isPinned?: boolean
  isArchived?: boolean
  onFavorite?: () => void
  onPin?: () => void
  onArchive?: () => void
  className?: string
}

export function NoteActions({
  noteId,
  isFavorite = false,
  isPinned = false,
  isArchived = false,
  onFavorite,
  onPin,
  onArchive,
  className,
}: NoteActionsProps) {
  return (
    <div className={cn('flex items-center gap-1', className)}>
      <Button
        variant='ghost'
        size='sm'
        onClick={onFavorite}
        data-testid='favorite-button'
        className={cn(isFavorite && 'text-yellow-500')}
      >
        <Star
          className='h-4 w-4'
          fill={isFavorite ? 'currentColor' : 'none'}
          data-testid={isFavorite ? 'favorite-icon' : undefined}
        />
      </Button>

      <Button
        variant='ghost'
        size='sm'
        onClick={onPin}
        data-testid='pin-button'
        className={cn(isPinned && 'text-blue-500')}
      >
        <Pin
          className='h-4 w-4'
          fill={isPinned ? 'currentColor' : 'none'}
          data-testid={isPinned ? 'pin-icon' : undefined}
        />
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' size='sm'>
            <MoreVertical className='h-4 w-4' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuItem onClick={onArchive} data-testid='archive-button'>
            <Archive className='mr-2 h-4 w-4' />
            {isArchived ? 'Unarchive' : 'Archive'}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
