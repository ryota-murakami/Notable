'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Bold,
  Code,
  Italic,
  Link,
  List,
  ListOrdered,
  Quote,
  Strikethrough,
  Underline,
} from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { useEditorRef, usePlateStore } from 'platejs/react'
import { MarkToolbarButton } from '@/components/ui/mark-toolbar-button'

interface FloatingToolbarProps {
  className?: string
}

export function FloatingToolbar({ className }: FloatingToolbarProps) {
  const editor = useEditorRef()
  
  const formatButtons = [
    { icon: Bold, tooltip: 'Bold (Ctrl+B)', format: 'bold' },
    { icon: Italic, tooltip: 'Italic (Ctrl+I)', format: 'italic' },
    { icon: Underline, tooltip: 'Underline (Ctrl+U)', format: 'underline' },
    { icon: Strikethrough, tooltip: 'Strikethrough', format: 'strikethrough' },
    { icon: Code, tooltip: 'Code (Ctrl+E)', format: 'code' },
  ]

  const blockButtons = [
    { icon: Quote, tooltip: 'Blockquote', format: 'blockquote' },
    { icon: List, tooltip: 'Bullet List', format: 'ul' },
    { icon: ListOrdered, tooltip: 'Numbered List', format: 'ol' },
    { icon: Link, tooltip: 'Insert Link (Ctrl+K)', format: 'link' },
  ]

  const handleBlockFormat = (format: string) => {
    if (!editor) return
    
    switch (format) {
      case 'blockquote':
        editor.tf.setNodes({ type: 'blockquote' })
        break
      case 'ul':
        editor.tf.setNodes({ type: 'ul' })
        break
      case 'ol':
        editor.tf.setNodes({ type: 'ol' })
        break
      case 'link':
        // For now, just toggle link mark - could be enhanced with URL input dialog
        editor.tf.toggleMark('link')
        break
      default:
        editor.tf.setNodes({ type: format })
    }
  }

  if (!editor) return null

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
            <MarkToolbarButton 
              key={button.format}
              nodeType={button.format}
              tooltip={button.tooltip}
            >
              <button.icon className='h-4 w-4' />
            </MarkToolbarButton>
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
                  onClick={() => handleBlockFormat(button.format)}
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
