'use client'

import * as React from 'react'
import { cn } from '../../lib/utils'

interface EditorCanvasProps {
  children: React.ReactNode
  className?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | 'full'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  centered?: boolean
  focusMode?: boolean
}

const maxWidthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '4xl': 'max-w-4xl',
  full: 'max-w-full',
}

const paddingClasses = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
  xl: 'p-12',
}

export function EditorCanvas({
  children,
  className,
  maxWidth = '4xl',
  padding = 'lg',
  centered = true,
  focusMode = false,
}: EditorCanvasProps) {
  return (
    <div
      className={cn(
        'flex-1 flex flex-col h-full overflow-hidden',
        focusMode && 'bg-background/95 backdrop-blur-sm',
        className
      )}
    >
      <div className='flex-1 overflow-y-auto'>
        <div
          className={cn(
            'min-h-full w-full',
            centered && 'mx-auto',
            maxWidthClasses[maxWidth],
            paddingClasses[padding]
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

// Pre-built editor layouts
export function NotableEditorCanvas({
  title,
  content,
  toolbar,
  statusBar,
  className,
  focusMode = false,
  showTitle = true,
}: {
  title?: React.ReactNode
  content: React.ReactNode
  toolbar?: React.ReactNode
  statusBar?: React.ReactNode
  className?: string
  focusMode?: boolean
  showTitle?: boolean
}) {
  return (
    <EditorCanvas
      className={className}
      maxWidth='4xl'
      padding='lg'
      centered
      focusMode={focusMode}
    >
      <div className='space-y-6'>
        {/* Toolbar */}
        {toolbar && (
          <div className='sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border pb-4'>
            {toolbar}
          </div>
        )}

        {/* Title */}
        {showTitle && title && (
          <div className='space-y-2'>
            {title}
            <div className='h-px bg-border' />
          </div>
        )}

        {/* Content */}
        <div className='min-h-96'>{content}</div>

        {/* Status Bar */}
        {statusBar && (
          <div className='sticky bottom-0 bg-background/95 backdrop-blur-sm border-t border-border pt-4'>
            {statusBar}
          </div>
        )}
      </div>
    </EditorCanvas>
  )
}

// Status bar component for editor
export function EditorStatusBar({
  wordCount,
  characterCount,
  readingTime,
  lastSaved,
  syncStatus,
  className,
}: {
  wordCount?: number
  characterCount?: number
  readingTime?: string
  lastSaved?: string
  syncStatus?: 'synced' | 'syncing' | 'error' | 'offline'
  className?: string
}) {
  const statusColors = {
    synced: 'text-green-600',
    syncing: 'text-yellow-600',
    error: 'text-red-600',
    offline: 'text-gray-500',
  }

  const statusLabels = {
    synced: 'Synced',
    syncing: 'Syncing...',
    error: 'Sync Error',
    offline: 'Offline',
  }

  return (
    <div
      className={cn(
        'flex items-center justify-between text-xs text-muted-foreground',
        className
      )}
    >
      <div className='flex items-center space-x-4'>
        {wordCount !== undefined && <span>{wordCount} words</span>}
        {characterCount !== undefined && (
          <span>{characterCount} characters</span>
        )}
        {readingTime && <span>{readingTime} read</span>}
      </div>

      <div className='flex items-center space-x-4'>
        {lastSaved && <span>Saved {lastSaved}</span>}
        {syncStatus && (
          <span className={statusColors[syncStatus]}>
            {statusLabels[syncStatus]}
          </span>
        )}
      </div>
    </div>
  )
}

// Title input component for editor
export function EditorTitle({
  value,
  onChange,
  placeholder = 'Untitled',
  className,
  readOnly = false,
}: {
  value: string
  onChange?: (value: string) => void
  placeholder?: string
  className?: string
  readOnly?: boolean
}) {
  return (
    <input
      type='text'
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
      readOnly={readOnly}
      className={cn(
        'w-full bg-transparent border-none outline-none resize-none',
        'text-3xl font-bold text-foreground placeholder:text-muted-foreground',
        'focus:ring-0 focus:outline-none',
        readOnly && 'cursor-default',
        className
      )}
    />
  )
}

// Floating action button for editor
export function EditorFAB({
  children,
  onClick,
  className,
  position = 'bottom-right',
}: {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
}) {
  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'top-right': 'top-6 right-6',
    'top-left': 'top-6 left-6',
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        'fixed z-50 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg',
        'hover:bg-primary/90 focus:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring',
        'transition-all duration-200 hover:scale-105 active:scale-95',
        positionClasses[position],
        className
      )}
    >
      {children}
    </button>
  )
}
