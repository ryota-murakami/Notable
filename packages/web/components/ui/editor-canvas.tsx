'use client'

import * as React from 'react'
import { cn } from '../../lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import {
  BookOpenIcon,
  EditIcon,
  EyeIcon,
  MaximizeIcon,
  MinimizeIcon,
  TypeIcon,
} from 'lucide-react'
import { Button } from '../../design-system/components/button'

interface EditorCanvasProps {
  children: React.ReactNode
  className?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | 'full'
  width?: 'narrow' | 'medium' | 'wide' | 'full'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  centered?: boolean
  focusMode?: boolean
  mode?: 'edit' | 'preview' | 'split'
  showModeToggle?: boolean
  showWidthToggle?: boolean
  onModeChange?: (mode: 'edit' | 'preview' | 'split') => void
  onWidthChange?: (width: 'narrow' | 'medium' | 'wide' | 'full') => void
  onFocusModeToggle?: () => void
  toolbar?: React.ReactNode
  header?: React.ReactNode
  footer?: React.ReactNode
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

// New optimal width classes for writing experience
const widthClasses = {
  narrow: 'max-w-2xl', // ~672px - focused writing
  medium: 'max-w-4xl', // ~896px - comfortable reading
  wide: 'max-w-6xl', // ~1152px - wide layouts
  full: 'max-w-none', // full width
}

const paddingClasses = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
  xl: 'p-12',
}

const modeVariants = {
  edit: { opacity: 1, scale: 1 },
  preview: { opacity: 1, scale: 1 },
  split: { opacity: 1, scale: 1 },
}

export function EditorCanvas({
  children,
  className,
  maxWidth = '4xl',
  width = 'medium',
  padding = 'lg',
  centered = true,
  focusMode = false,
  mode = 'edit',
  showModeToggle = false,
  showWidthToggle = false,
  onModeChange,
  onWidthChange,
  onFocusModeToggle,
  toolbar,
  header,
  footer,
}: EditorCanvasProps) {
  const [isHovering, setIsHovering] = React.useState(false)

  // Use new width classes if width prop is provided, otherwise fall back to maxWidth
  const currentWidthClass = width
    ? widthClasses[width]
    : maxWidthClasses[maxWidth]

  const modeIcons = {
    edit: <EditIcon className='h-4 w-4' />,
    preview: <EyeIcon className='h-4 w-4' />,
    split: <BookOpenIcon className='h-4 w-4' />,
  }

  const widthIcons = {
    narrow: <TypeIcon className='h-3 w-3' />,
    medium: <TypeIcon className='h-4 w-4' />,
    wide: <TypeIcon className='h-5 w-5' />,
    full: <MaximizeIcon className='h-4 w-4' />,
  }

  return (
    <div
      className={cn(
        'relative flex flex-col h-full bg-background transition-all duration-300',
        focusMode && 'bg-background',
        className
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Header */}
      {header && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className='flex-shrink-0 border-b border-border bg-background/80 backdrop-blur-sm'
        >
          {header}
        </motion.div>
      )}

      {/* Toolbar with Controls */}
      {toolbar && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className='flex-shrink-0 border-b border-border bg-background/80 backdrop-blur-sm'
          >
            <div
              className={cn(
                'mx-auto px-6 py-3',
                currentWidthClass,
                centered && 'container'
              )}
            >
              <div className='flex items-center justify-between'>
                <div className='flex-1'>{toolbar}</div>

                {/* Mode and Width Controls */}
                <div className='flex items-center gap-2 ml-4'>
                  {/* Mode Toggle */}
                  {showModeToggle && onModeChange && (
                    <div className='flex items-center rounded-md border border-border bg-background p-1'>
                      {(['edit', 'preview', 'split'] as const).map(
                        (modeOption) => (
                          <Button
                            key={modeOption}
                            variant={mode === modeOption ? 'default' : 'ghost'}
                            size='sm'
                            onClick={() => onModeChange(modeOption)}
                            className='h-7 w-7 p-0'
                            title={`${modeOption.charAt(0).toUpperCase() + modeOption.slice(1)} mode`}
                          >
                            {modeIcons[modeOption]}
                          </Button>
                        )
                      )}
                    </div>
                  )}

                  {/* Width Control */}
                  {showWidthToggle && onWidthChange && width && (
                    <div className='flex items-center rounded-md border border-border bg-background p-1'>
                      {(['narrow', 'medium', 'wide', 'full'] as const).map(
                        (widthOption) => (
                          <Button
                            key={widthOption}
                            variant={
                              width === widthOption ? 'default' : 'ghost'
                            }
                            size='sm'
                            onClick={() => onWidthChange(widthOption)}
                            className='h-7 w-7 p-0'
                            title={`${widthOption.charAt(0).toUpperCase() + widthOption.slice(1)} width`}
                          >
                            {widthIcons[widthOption]}
                          </Button>
                        )
                      )}
                    </div>
                  )}

                  {/* Focus Mode Toggle */}
                  {onFocusModeToggle && (
                    <Button
                      variant={focusMode ? 'default' : 'ghost'}
                      size='sm'
                      onClick={onFocusModeToggle}
                      className='h-7 w-7 p-0'
                      title='Toggle focus mode'
                    >
                      {focusMode ? (
                        <MinimizeIcon className='h-4 w-4' />
                      ) : (
                        <MaximizeIcon className='h-4 w-4' />
                      )}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}

      {/* Main Content Area */}
      <div className='flex-1 overflow-hidden'>
        <div
          className={cn(
            'h-full mx-auto',
            currentWidthClass,
            paddingClasses[padding],
            centered && 'container',
            focusMode && 'px-12 py-16'
          )}
        >
          <motion.div
            key={mode}
            variants={modeVariants}
            initial='edit'
            animate={mode}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='h-full'
          >
            {mode === 'split' ? (
              <div className='grid grid-cols-2 gap-6 h-full'>
                <div className='border-r border-border pr-6'>
                  <div className='h-full overflow-y-auto'>{children}</div>
                </div>
                <div className='pl-6'>
                  <div className='h-full overflow-y-auto prose prose-sm max-w-none'>
                    {/* Preview content would go here */}
                    <div className='text-muted-foreground italic'>
                      Preview mode coming soon...
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className='h-full overflow-y-auto'>
                {mode === 'preview' ? (
                  <div className='prose prose-lg max-w-none'>
                    {/* Preview content would go here */}
                    <div className='text-muted-foreground italic'>
                      Preview mode coming soon...
                    </div>
                  </div>
                ) : (
                  children
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      {footer && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className='flex-shrink-0 border-t border-border bg-background/80 backdrop-blur-sm'
        >
          {footer}
        </motion.div>
      )}

      {/* Focus Mode Overlay */}
      <AnimatePresence>
        {focusMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='fixed inset-0 bg-background/95 backdrop-blur-sm z-10 pointer-events-none'
          />
        )}
      </AnimatePresence>

      {/* Floating Focus Mode Toggle */}
      <AnimatePresence>
        {focusMode && isHovering && onFocusModeToggle && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className='fixed top-4 right-4 z-20'
          >
            <Button
              variant='secondary'
              size='sm'
              onClick={onFocusModeToggle}
              className='shadow-lg'
            >
              <MinimizeIcon className='h-4 w-4 mr-2' />
              Exit Focus
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
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

// Hook for managing editor canvas state
export function useEditorCanvas() {
  const [mode, setMode] = React.useState<'edit' | 'preview' | 'split'>('edit')
  const [width, setWidth] = React.useState<
    'narrow' | 'medium' | 'wide' | 'full'
  >('medium')
  const [focusMode, setFocusMode] = React.useState(false)

  const toggleMode = React.useCallback(() => {
    setMode((current) => {
      switch (current) {
        case 'edit':
          return 'preview'
        case 'preview':
          return 'split'
        case 'split':
          return 'edit'
        default:
          return 'edit'
      }
    })
  }, [])

  const toggleWidth = React.useCallback(() => {
    setWidth((current) => {
      switch (current) {
        case 'narrow':
          return 'medium'
        case 'medium':
          return 'wide'
        case 'wide':
          return 'full'
        case 'full':
          return 'narrow'
        default:
          return 'medium'
      }
    })
  }, [])

  const toggleFocusMode = React.useCallback(() => {
    setFocusMode((current) => !current)
  }, [])

  return {
    mode,
    width,
    focusMode,
    setMode,
    setWidth,
    setFocusMode,
    toggleMode,
    toggleWidth,
    toggleFocusMode,
  }
}
