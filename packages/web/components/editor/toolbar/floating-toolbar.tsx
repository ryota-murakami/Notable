import React from 'react'
import {
  useEditorReadOnly,
  useEditorState,
  useEditorRef,
  isSelectionExpanded,
  someNode,
} from '@udecode/plate-common'
import { Bold, Italic, Underline, Link, Quote, Code } from 'lucide-react'
import { cn } from '../../../lib/utils'
import { Toggle } from '../../ui/toggle'
import { isMarkActive, toggleMark, toggleNodeType } from '@udecode/plate-common'
import {
  MARK_BOLD,
  MARK_ITALIC,
  MARK_UNDERLINE,
  MARK_CODE,
} from '@udecode/plate-basic-marks'
import { ELEMENT_BLOCKQUOTE } from '@udecode/plate-block-quote'
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  arrow,
  FloatingArrow,
  FloatingPortal,
} from '@floating-ui/react'
import { getDOMRange } from '@udecode/plate-common'

interface ToolbarButtonProps {
  pressed?: boolean
  onClick?: () => void
  children: React.ReactNode
  tooltip?: string
}

const ToolbarButton = React.forwardRef<HTMLButtonElement, ToolbarButtonProps>(
  ({ pressed, onClick, children, tooltip }, ref) => {
    return (
      <Toggle
        ref={ref}
        size='sm'
        pressed={pressed}
        onPressedChange={() => onClick?.()}
        aria-label={tooltip}
        title={tooltip}
        className='h-8 w-8'
      >
        {children}
      </Toggle>
    )
  }
)

ToolbarButton.displayName = 'ToolbarButton'

export function FloatingToolbar() {
  const editor = useEditorState()
  const editorRef = useEditorRef()
  const readOnly = useEditorReadOnly()
  const arrowRef = React.useRef(null)

  const { refs, floatingStyles, context } = useFloating({
    placement: 'top',
    open: isSelectionExpanded(editor),
    onOpenChange: () => {},
    middleware: [
      offset(12),
      flip({
        padding: 12,
        fallbackPlacements: ['bottom'],
      }),
      shift({ padding: 12 }),
      arrow({
        element: arrowRef,
      }),
    ],
    whileElementsMounted: autoUpdate,
  })

  React.useEffect(() => {
    const el = editorRef.current
    const { selection } = editor

    if (!el || !selection || readOnly) {
      return
    }

    try {
      const domRange = getDOMRange(editor, selection)
      if (!domRange) return

      const rect = domRange.getBoundingClientRect()
      const virtualEl = {
        getBoundingClientRect: () => rect,
        contextElement: el,
      }

      refs.setReference(virtualEl)
    } catch (error) {
      // Handle error silently
    }
  }, [editor, editor.selection, editorRef, refs, readOnly])

  const handleMarkToggle = (mark: string) => {
    toggleMark(editor, { key: mark })
  }

  const handleBlockToggle = (type: string) => {
    toggleNodeType(editor, { activeType: type })
  }

  const isVisible = isSelectionExpanded(editor) && !readOnly

  if (!isVisible) return null

  return (
    <FloatingPortal>
      <div
        ref={refs.setFloating}
        style={floatingStyles}
        className={cn(
          'z-50 flex items-center gap-1 rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
          'animate-in fade-in-0 zoom-in-95'
        )}
      >
        <ToolbarButton
          pressed={isMarkActive(editor, MARK_BOLD)}
          onClick={() => handleMarkToggle(MARK_BOLD)}
          tooltip='Bold (⌘B)'
        >
          <Bold className='h-4 w-4' />
        </ToolbarButton>
        <ToolbarButton
          pressed={isMarkActive(editor, MARK_ITALIC)}
          onClick={() => handleMarkToggle(MARK_ITALIC)}
          tooltip='Italic (⌘I)'
        >
          <Italic className='h-4 w-4' />
        </ToolbarButton>
        <ToolbarButton
          pressed={isMarkActive(editor, MARK_UNDERLINE)}
          onClick={() => handleMarkToggle(MARK_UNDERLINE)}
          tooltip='Underline (⌘U)'
        >
          <Underline className='h-4 w-4' />
        </ToolbarButton>
        <ToolbarButton
          pressed={isMarkActive(editor, MARK_CODE)}
          onClick={() => handleMarkToggle(MARK_CODE)}
          tooltip='Code (⌘E)'
        >
          <Code className='h-4 w-4' />
        </ToolbarButton>
        <div className='mx-1 h-6 w-px bg-border' />
        <ToolbarButton
          onClick={() => {
            // TODO: Implement link insertion
          }}
          tooltip='Link (⌘K)'
        >
          <Link className='h-4 w-4' />
        </ToolbarButton>
        <ToolbarButton
          pressed={someNode(editor, { match: { type: ELEMENT_BLOCKQUOTE } })}
          onClick={() => handleBlockToggle(ELEMENT_BLOCKQUOTE)}
          tooltip='Quote'
        >
          <Quote className='h-4 w-4' />
        </ToolbarButton>
        <FloatingArrow
          ref={arrowRef}
          context={context}
          className='fill-popover'
        />
      </div>
    </FloatingPortal>
  )
}
