'use client'

import * as React from 'react'
import { MarkToolbarButton } from '../ui/mark-toolbar-button'
import {
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  StrikethroughIcon,
  CodeIcon,
  HighlighterIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface EditorToolbarProps {
  className?: string
}

export function EditorToolbar({ className }: EditorToolbarProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-1 p-1 bg-background border border-border rounded-lg',
        className
      )}
      role='toolbar'
      aria-label='Formatting toolbar'
    >
      {/* Text formatting group */}
      <div className='flex items-center gap-0.5'>
        <MarkToolbarButton
          nodeType='bold'
          tooltip='Bold (Cmd+B)'
          data-testid='toolbar-bold'
        >
          <BoldIcon className='h-4 w-4' />
        </MarkToolbarButton>

        <MarkToolbarButton
          nodeType='italic'
          tooltip='Italic (Cmd+I)'
          data-testid='toolbar-italic'
        >
          <ItalicIcon className='h-4 w-4' />
        </MarkToolbarButton>

        <MarkToolbarButton
          nodeType='underline'
          tooltip='Underline (Cmd+U)'
          data-testid='toolbar-underline'
        >
          <UnderlineIcon className='h-4 w-4' />
        </MarkToolbarButton>

        <MarkToolbarButton
          nodeType='strikethrough'
          tooltip='Strikethrough'
          data-testid='toolbar-strikethrough'
        >
          <StrikethroughIcon className='h-4 w-4' />
        </MarkToolbarButton>

        <MarkToolbarButton
          nodeType='code'
          tooltip='Code (Cmd+E)'
          data-testid='toolbar-code'
        >
          <CodeIcon className='h-4 w-4' />
        </MarkToolbarButton>

        <MarkToolbarButton
          nodeType='highlight'
          tooltip='Highlight'
          data-testid='toolbar-highlight'
        >
          <HighlighterIcon className='h-4 w-4' />
        </MarkToolbarButton>
      </div>
    </div>
  )
}
