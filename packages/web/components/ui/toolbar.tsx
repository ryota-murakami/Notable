'use client'

import * as React from 'react'
import { cn } from '../../lib/utils'
import { Button } from '../../design-system/components/button'
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  CheckSquareIcon,
  CodeIcon,
  DivideIcon,
  EditIcon,
  EyeIcon,
  ImageIcon,
  ItalicIcon,
  LinkIcon,
  ListIcon,
  ListOrderedIcon,
  MaximizeIcon,
  MoreHorizontalIcon,
  PaletteIcon,
  QuoteIcon,
  RedoIcon,
  StrikethroughIcon,
  TableIcon,
  TypeIcon,
  UnderlineIcon,
  UndoIcon,
} from 'lucide-react'

export interface ToolbarAction {
  id: string
  label: string
  icon: React.ReactNode
  action: () => void
  isActive?: boolean
  isDisabled?: boolean
  shortcut?: string
  group?: string
}

interface ToolbarProps {
  actions?: ToolbarAction[]
  className?: string
  variant?: 'default' | 'floating' | 'compact'
  orientation?: 'horizontal' | 'vertical'
}

export function Toolbar({
  actions = [],
  className,
  variant = 'default',
  orientation = 'horizontal',
}: ToolbarProps) {
  const groupedActions = React.useMemo(() => {
    const groups: Record<string, ToolbarAction[]> = {}

    actions.forEach((action) => {
      const group = action.group || 'default'
      if (!groups[group]) {
        groups[group] = []
      }
      groups[group].push(action)
    })

    return groups
  }, [actions])

  return (
    <div
      className={cn(
        'flex items-center gap-1 p-1 bg-background border border-border rounded-lg',
        variant === 'floating' && 'shadow-lg bg-popover',
        variant === 'compact' && 'gap-0.5 p-0.5',
        orientation === 'vertical' && 'flex-col',
        className
      )}
      role='toolbar'
      aria-label='Formatting toolbar'
    >
      {Object.entries(groupedActions).map(
        ([groupName, groupActions], index) => (
          <React.Fragment key={groupName}>
            {index > 0 && (
              <div
                className={cn(
                  'bg-border',
                  orientation === 'horizontal'
                    ? 'w-px h-6 mx-1'
                    : 'h-px w-6 my-1'
                )}
              />
            )}
            <div
              className={cn('flex', orientation === 'vertical' && 'flex-col')}
            >
              {groupActions.map((action) => (
                <Button
                  key={action.id}
                  variant={action.isActive ? 'default' : 'ghost'}
                  size={variant === 'compact' ? 'sm' : 'sm'}
                  onClick={action.action}
                  disabled={action.isDisabled}
                  className={cn(
                    'h-8 w-8 p-0',
                    action.isActive && 'bg-primary text-primary-foreground'
                  )}
                  title={`${action.label}${action.shortcut ? ` (${action.shortcut})` : ''}`}
                >
                  {action.icon}
                </Button>
              ))}
            </div>
          </React.Fragment>
        )
      )}
    </div>
  )
}

// Editor-specific toolbar with common formatting actions
export function EditorToolbar({
  className,
  variant = 'default',
  // Text formatting callbacks
  onBold,
  onItalic,
  onUnderline,
  onStrikethrough,
  onCode,
  // List callbacks
  onBulletList,
  onOrderedList,
  onTaskList,
  // Block callbacks
  onQuote,
  onCodeBlock,
  onDivider,
  // Insert callbacks
  onLink,
  onImage,
  onTable,
  // Alignment callbacks
  onAlignLeft,
  onAlignCenter,
  onAlignRight,
  // History callbacks
  onUndo,
  onRedo,
  // View callbacks
  onToggleView,
  onFocusMode,
  // State
  activeFormats = {},
  canUndo = false,
  canRedo = false,
  isViewMode = false,
}: {
  className?: string
  variant?: 'default' | 'floating' | 'compact'
  // Text formatting
  onBold?: () => void
  onItalic?: () => void
  onUnderline?: () => void
  onStrikethrough?: () => void
  onCode?: () => void
  // Lists
  onBulletList?: () => void
  onOrderedList?: () => void
  onTaskList?: () => void
  // Blocks
  onQuote?: () => void
  onCodeBlock?: () => void
  onDivider?: () => void
  // Insert
  onLink?: () => void
  onImage?: () => void
  onTable?: () => void
  // Alignment
  onAlignLeft?: () => void
  onAlignCenter?: () => void
  onAlignRight?: () => void
  // History
  onUndo?: () => void
  onRedo?: () => void
  // View
  onToggleView?: () => void
  onFocusMode?: () => void
  // State
  activeFormats?: Record<string, boolean>
  canUndo?: boolean
  canRedo?: boolean
  isViewMode?: boolean
}) {
  const actions: ToolbarAction[] = [
    // History
    ...(onUndo
      ? [
          {
            id: 'undo',
            label: 'Undo',
            icon: <UndoIcon className='h-4 w-4' />,
            action: onUndo,
            isDisabled: !canUndo,
            shortcut: 'Cmd+Z',
            group: 'history',
          },
        ]
      : []),
    ...(onRedo
      ? [
          {
            id: 'redo',
            label: 'Redo',
            icon: <RedoIcon className='h-4 w-4' />,
            action: onRedo,
            isDisabled: !canRedo,
            shortcut: 'Cmd+Shift+Z',
            group: 'history',
          },
        ]
      : []),

    // Text formatting
    ...(onBold
      ? [
          {
            id: 'bold',
            label: 'Bold',
            icon: <BoldIcon className='h-4 w-4' />,
            action: onBold,
            isActive: activeFormats.bold,
            shortcut: 'Cmd+B',
            group: 'format',
          },
        ]
      : []),
    ...(onItalic
      ? [
          {
            id: 'italic',
            label: 'Italic',
            icon: <ItalicIcon className='h-4 w-4' />,
            action: onItalic,
            isActive: activeFormats.italic,
            shortcut: 'Cmd+I',
            group: 'format',
          },
        ]
      : []),
    ...(onUnderline
      ? [
          {
            id: 'underline',
            label: 'Underline',
            icon: <UnderlineIcon className='h-4 w-4' />,
            action: onUnderline,
            isActive: activeFormats.underline,
            shortcut: 'Cmd+U',
            group: 'format',
          },
        ]
      : []),
    ...(onStrikethrough
      ? [
          {
            id: 'strikethrough',
            label: 'Strikethrough',
            icon: <StrikethroughIcon className='h-4 w-4' />,
            action: onStrikethrough,
            isActive: activeFormats.strikethrough,
            group: 'format',
          },
        ]
      : []),
    ...(onCode
      ? [
          {
            id: 'code',
            label: 'Inline Code',
            icon: <CodeIcon className='h-4 w-4' />,
            action: onCode,
            isActive: activeFormats.code,
            shortcut: 'Cmd+E',
            group: 'format',
          },
        ]
      : []),

    // Lists
    ...(onBulletList
      ? [
          {
            id: 'bullet-list',
            label: 'Bullet List',
            icon: <ListIcon className='h-4 w-4' />,
            action: onBulletList,
            isActive: activeFormats.bulletList,
            group: 'list',
          },
        ]
      : []),
    ...(onOrderedList
      ? [
          {
            id: 'ordered-list',
            label: 'Numbered List',
            icon: <ListOrderedIcon className='h-4 w-4' />,
            action: onOrderedList,
            isActive: activeFormats.orderedList,
            group: 'list',
          },
        ]
      : []),
    ...(onTaskList
      ? [
          {
            id: 'task-list',
            label: 'Task List',
            icon: <CheckSquareIcon className='h-4 w-4' />,
            action: onTaskList,
            isActive: activeFormats.taskList,
            group: 'list',
          },
        ]
      : []),

    // Blocks
    ...(onQuote
      ? [
          {
            id: 'quote',
            label: 'Quote',
            icon: <QuoteIcon className='h-4 w-4' />,
            action: onQuote,
            isActive: activeFormats.quote,
            group: 'block',
          },
        ]
      : []),
    ...(onCodeBlock
      ? [
          {
            id: 'code-block',
            label: 'Code Block',
            icon: <CodeIcon className='h-4 w-4' />,
            action: onCodeBlock,
            isActive: activeFormats.codeBlock,
            group: 'block',
          },
        ]
      : []),
    ...(onDivider
      ? [
          {
            id: 'divider',
            label: 'Divider',
            icon: <DivideIcon className='h-4 w-4' />,
            action: onDivider,
            group: 'block',
          },
        ]
      : []),

    // Insert
    ...(onLink
      ? [
          {
            id: 'link',
            label: 'Link',
            icon: <LinkIcon className='h-4 w-4' />,
            action: onLink,
            isActive: activeFormats.link,
            shortcut: 'Cmd+K',
            group: 'insert',
          },
        ]
      : []),
    ...(onImage
      ? [
          {
            id: 'image',
            label: 'Image',
            icon: <ImageIcon className='h-4 w-4' />,
            action: onImage,
            group: 'insert',
          },
        ]
      : []),
    ...(onTable
      ? [
          {
            id: 'table',
            label: 'Table',
            icon: <TableIcon className='h-4 w-4' />,
            action: onTable,
            group: 'insert',
          },
        ]
      : []),

    // View
    ...(onToggleView
      ? [
          {
            id: 'toggle-view',
            label: isViewMode ? 'Edit Mode' : 'View Mode',
            icon: isViewMode ? (
              <EditIcon className='h-4 w-4' />
            ) : (
              <EyeIcon className='h-4 w-4' />
            ),
            action: onToggleView,
            shortcut: 'Cmd+Shift+E',
            group: 'view',
          },
        ]
      : []),
    ...(onFocusMode
      ? [
          {
            id: 'focus-mode',
            label: 'Focus Mode',
            icon: <MaximizeIcon className='h-4 w-4' />,
            action: onFocusMode,
            shortcut: 'Cmd+Shift+F',
            group: 'view',
          },
        ]
      : []),
  ]

  return <Toolbar actions={actions} className={className} variant={variant} />
}

// Context menu toolbar for floating/contextual actions
export function ContextToolbar({
  x,
  y,
  visible,
  onClose,
  actions,
  className,
}: {
  x: number
  y: number
  visible: boolean
  onClose?: () => void
  actions: ToolbarAction[]
  className?: string
}) {
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose?.()
      }
    }

    if (visible) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [visible, onClose])

  if (!visible) return null

  return (
    <div
      ref={ref}
      className={cn('fixed z-50 animate-in fade-in-0 zoom-in-95', className)}
      style={{
        left: x,
        top: y,
      }}
    >
      <Toolbar actions={actions} variant='floating' />
    </div>
  )
}
