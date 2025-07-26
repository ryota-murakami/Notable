import React from 'react'
import { useEditorReadOnly, useEditorState } from '@udecode/plate-common'
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Code,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Code2,
  Table,
  Image,
  Link,
  Minus,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Undo,
  Redo,
} from 'lucide-react'
import { cn } from '../../../lib/utils'
import { Toggle } from '../../ui/toggle'
import { Separator } from '../../ui/separator'
import {
  isMarkActive,
  toggleMark,
  isBlockActive,
  toggleNodeType,
} from '@udecode/plate-common'
import {
  MARK_BOLD,
  MARK_ITALIC,
  MARK_UNDERLINE,
  MARK_STRIKETHROUGH,
  MARK_CODE,
} from '@udecode/plate-basic-marks'
import { ELEMENT_H1, ELEMENT_H2, ELEMENT_H3 } from '@udecode/plate-heading'
import { ELEMENT_UL, ELEMENT_OL } from '@udecode/plate-list'
import { ELEMENT_BLOCKQUOTE } from '@udecode/plate-block-quote'
import { ELEMENT_CODE_BLOCK } from '@udecode/plate-code-block'
import { ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph'
import { insertTable } from '@udecode/plate-table'
import { insertMedia } from '@udecode/plate-media'
import { setNodes, insertNodes } from '@udecode/plate-common'
import { ELEMENT_HR as HR_ELEMENT } from '@udecode/plate-horizontal-rule'

interface ToolbarButtonProps {
  pressed?: boolean
  onClick?: () => void
  children: React.ReactNode
  tooltip?: string
  disabled?: boolean
}

const ToolbarButton = React.forwardRef<HTMLButtonElement, ToolbarButtonProps>(
  ({ pressed, onClick, children, tooltip, disabled }, ref) => {
    return (
      <Toggle
        ref={ref}
        size='sm'
        pressed={pressed}
        onPressedChange={() => onClick?.()}
        disabled={disabled}
        aria-label={tooltip}
        title={tooltip}
      >
        {children}
      </Toggle>
    )
  }
)

ToolbarButton.displayName = 'ToolbarButton'

export function EditorToolbar() {
  const editor = useEditorState()
  const readOnly = useEditorReadOnly()

  if (readOnly) return null

  const handleMarkToggle = (mark: string) => {
    toggleMark(editor, { key: mark })
  }

  const handleBlockToggle = (type: string) => {
    toggleNodeType(editor, { activeType: type })
  }

  return (
    <div className='flex items-center gap-1 border-b bg-background p-1'>
      {/* History */}
      <div className='flex items-center gap-1'>
        <ToolbarButton onClick={() => editor.undo()} tooltip='Undo (⌘Z)'>
          <Undo className='h-4 w-4' />
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.redo()} tooltip='Redo (⌘⇧Z)'>
          <Redo className='h-4 w-4' />
        </ToolbarButton>
      </div>

      <Separator orientation='vertical' className='h-6' />

      {/* Text formatting */}
      <div className='flex items-center gap-1'>
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
          pressed={isMarkActive(editor, MARK_STRIKETHROUGH)}
          onClick={() => handleMarkToggle(MARK_STRIKETHROUGH)}
          tooltip='Strikethrough'
        >
          <Strikethrough className='h-4 w-4' />
        </ToolbarButton>
        <ToolbarButton
          pressed={isMarkActive(editor, MARK_CODE)}
          onClick={() => handleMarkToggle(MARK_CODE)}
          tooltip='Inline code (⌘E)'
        >
          <Code className='h-4 w-4' />
        </ToolbarButton>
      </div>

      <Separator orientation='vertical' className='h-6' />

      {/* Headings */}
      <div className='flex items-center gap-1'>
        <ToolbarButton
          pressed={isBlockActive(editor, ELEMENT_H1)}
          onClick={() => handleBlockToggle(ELEMENT_H1)}
          tooltip='Heading 1'
        >
          <Heading1 className='h-4 w-4' />
        </ToolbarButton>
        <ToolbarButton
          pressed={isBlockActive(editor, ELEMENT_H2)}
          onClick={() => handleBlockToggle(ELEMENT_H2)}
          tooltip='Heading 2'
        >
          <Heading2 className='h-4 w-4' />
        </ToolbarButton>
        <ToolbarButton
          pressed={isBlockActive(editor, ELEMENT_H3)}
          onClick={() => handleBlockToggle(ELEMENT_H3)}
          tooltip='Heading 3'
        >
          <Heading3 className='h-4 w-4' />
        </ToolbarButton>
      </div>

      <Separator orientation='vertical' className='h-6' />

      {/* Lists */}
      <div className='flex items-center gap-1'>
        <ToolbarButton
          pressed={isBlockActive(editor, ELEMENT_UL)}
          onClick={() => handleBlockToggle(ELEMENT_UL)}
          tooltip='Bullet list'
        >
          <List className='h-4 w-4' />
        </ToolbarButton>
        <ToolbarButton
          pressed={isBlockActive(editor, ELEMENT_OL)}
          onClick={() => handleBlockToggle(ELEMENT_OL)}
          tooltip='Numbered list'
        >
          <ListOrdered className='h-4 w-4' />
        </ToolbarButton>
      </div>

      <Separator orientation='vertical' className='h-6' />

      {/* Blocks */}
      <div className='flex items-center gap-1'>
        <ToolbarButton
          pressed={isBlockActive(editor, ELEMENT_BLOCKQUOTE)}
          onClick={() => handleBlockToggle(ELEMENT_BLOCKQUOTE)}
          tooltip='Quote'
        >
          <Quote className='h-4 w-4' />
        </ToolbarButton>
        <ToolbarButton
          pressed={isBlockActive(editor, ELEMENT_CODE_BLOCK)}
          onClick={() => handleBlockToggle(ELEMENT_CODE_BLOCK)}
          tooltip='Code block'
        >
          <Code2 className='h-4 w-4' />
        </ToolbarButton>
      </div>

      <Separator orientation='vertical' className='h-6' />

      {/* Insert */}
      <div className='flex items-center gap-1'>
        <ToolbarButton
          onClick={() => {
            insertTable(editor, { rows: 3, columns: 3 })
          }}
          tooltip='Insert table'
        >
          <Table className='h-4 w-4' />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => {
            // TODO: Implement image insertion
          }}
          tooltip='Insert image'
        >
          <Image className='h-4 w-4' />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => {
            // TODO: Implement link insertion
          }}
          tooltip='Insert link (⌘K)'
        >
          <Link className='h-4 w-4' />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => {
            insertNodes(editor, { type: HR_ELEMENT, children: [{ text: '' }] })
          }}
          tooltip='Horizontal rule'
        >
          <Minus className='h-4 w-4' />
        </ToolbarButton>
      </div>

      <Separator orientation='vertical' className='h-6' />

      {/* Alignment */}
      <div className='flex items-center gap-1'>
        <ToolbarButton
          onClick={() => {
            // TODO: Implement alignment
          }}
          tooltip='Align left'
        >
          <AlignLeft className='h-4 w-4' />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => {
            // TODO: Implement alignment
          }}
          tooltip='Align center'
        >
          <AlignCenter className='h-4 w-4' />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => {
            // TODO: Implement alignment
          }}
          tooltip='Align right'
        >
          <AlignRight className='h-4 w-4' />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => {
            // TODO: Implement alignment
          }}
          tooltip='Justify'
        >
          <AlignJustify className='h-4 w-4' />
        </ToolbarButton>
      </div>
    </div>
  )
}
