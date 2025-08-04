'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Code,
  Link,
  Quote,
  List,
  ListOrdered,
} from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface FloatingToolbarProps {
  className?: string
}

export function FloatingToolbar({ className }: FloatingToolbarProps) {
  const formatButtons = [
    { icon: Bold, tooltip: 'Bold (Ctrl+B)', format: 'bold' },
    { icon: Italic, tooltip: 'Italic (Ctrl+I)', format: 'italic' },
    { icon: Underline, tooltip: 'Underline (Ctrl+U)', format: 'underline' },
    { icon: Strikethrough, tooltip: 'Strikethrough', format: 'strikethrough' },
    { icon: Code, tooltip: 'Code (Ctrl+`)', format: 'code' },
  ]

  const blockButtons = [
    { icon: Quote, tooltip: 'Blockquote', format: 'blockquote' },
    { icon: List, tooltip: 'Bullet List', format: 'ul' },
    { icon: ListOrdered, tooltip: 'Numbered List', format: 'ol' },
    { icon: Link, tooltip: 'Insert Link (Ctrl+K)', format: 'link' },
  ]

  return (
    <TooltipProvider>
      <div
        className={cn(
          'flex items-center gap-1 p-1 bg-background border rounded-lg shadow-lg',
          'opacity-0 transition-opacity duration-200',
          'data-[visible=true]:opacity-100',
          className
        )}
        data-testid='floating-toolbar'
      >
        {/* Format buttons */}
        <div className='flex items-center gap-0.5'>
          {formatButtons.map((button) => (
            <Tooltip key={button.format}>
              <TooltipTrigger asChild>
                <Button
                  variant='ghost'
                  size='sm'
                  className='h-8 w-8 p-0'
                  data-format={button.format}
                >
                  <button.icon className='h-4 w-4' />
                </Button>
              </TooltipTrigger>
              <TooltipContent>{button.tooltip}</TooltipContent>
            </Tooltip>
          ))}
        </div>

        {/* Separator */}
        <div className='w-px h-6 bg-border mx-1' />

        {/* Block buttons */}
        <div className='flex items-center gap-0.5'>
          {blockButtons.map((button) => (
            <Tooltip key={button.format}>
              <TooltipTrigger asChild>
                <Button
                  variant='ghost'
                  size='sm'
                  className='h-8 w-8 p-0'
                  data-format={button.format}
                >
                  <button.icon className='h-4 w-4' />
                </Button>
              </TooltipTrigger>
              <TooltipContent>{button.tooltip}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  )
}
