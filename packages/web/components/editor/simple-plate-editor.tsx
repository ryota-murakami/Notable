'use client'

import React from 'react'
import {
  createPlateEditor,
  Plate,
  PlateContent,
  PlateElement,
  PlateLeaf,
  TElement,
  Value,
  createPluginFactory,
} from '@udecode/plate-common'
import {
  MARK_BOLD,
  MARK_ITALIC,
  MARK_UNDERLINE,
  MARK_STRIKETHROUGH,
  MARK_CODE,
} from '@udecode/plate-basic-marks'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { cn } from '../../lib/utils'
import { Toggle } from '../ui/toggle'
import { Separator } from '../ui/separator'
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Code,
  Undo,
  Redo,
} from 'lucide-react'

// Simple type constants
const ELEMENT_PARAGRAPH = 'p'
const ELEMENT_H1 = 'h1'
const ELEMENT_H2 = 'h2'
const ELEMENT_H3 = 'h3'
const ELEMENT_BLOCKQUOTE = 'blockquote'
const ELEMENT_CODE_BLOCK = 'code_block'
const ELEMENT_CODE_LINE = 'code_line'

// Create plugins using the available functions from plate-common
const createParagraphPlugin = () =>
  createPluginFactory({
    key: 'paragraph',
    isElement: true,
    type: ELEMENT_PARAGRAPH,
  })()

const createHeadingPlugin = () =>
  createPluginFactory({
    key: 'heading',
    isElement: true,
    type: [ELEMENT_H1, ELEMENT_H2, ELEMENT_H3],
  })()

const createBlockquotePlugin = () =>
  createPluginFactory({
    key: 'blockquote',
    isElement: true,
    type: ELEMENT_BLOCKQUOTE,
  })()

const createCodeBlockPlugin = () =>
  createPluginFactory({
    key: 'codeBlock',
    isElement: true,
    type: ELEMENT_CODE_BLOCK,
  })()

// Simple element components
const ParagraphElement = ({ attributes, children }: any) => (
  <p {...attributes} className='mb-4'>
    {children}
  </p>
)

const H1Element = ({ attributes, children }: any) => (
  <h1 {...attributes} className='text-3xl font-bold mb-4'>
    {children}
  </h1>
)

const H2Element = ({ attributes, children }: any) => (
  <h2 {...attributes} className='text-2xl font-bold mb-3'>
    {children}
  </h2>
)

const H3Element = ({ attributes, children }: any) => (
  <h3 {...attributes} className='text-xl font-bold mb-2'>
    {children}
  </h3>
)

const BlockquoteElement = ({ attributes, children }: any) => (
  <blockquote
    {...attributes}
    className='border-l-4 border-gray-300 pl-4 italic my-4'
  >
    {children}
  </blockquote>
)

const CodeBlockElement = ({ attributes, children }: any) => (
  <pre {...attributes} className='bg-gray-100 rounded p-4 my-4 overflow-x-auto'>
    <code>{children}</code>
  </pre>
)

const CodeLineElement = ({ attributes, children }: any) => (
  <div {...attributes}>{children}</div>
)

// Leaf components
const BoldLeaf = ({ attributes, children }: any) => (
  <strong {...attributes}>{children}</strong>
)

const ItalicLeaf = ({ attributes, children }: any) => (
  <em {...attributes}>{children}</em>
)

const UnderlineLeaf = ({ attributes, children }: any) => (
  <u {...attributes}>{children}</u>
)

const StrikethroughLeaf = ({ attributes, children }: any) => (
  <s {...attributes}>{children}</s>
)

const CodeLeaf = ({ attributes, children }: any) => (
  <code
    {...attributes}
    className='bg-gray-100 rounded px-1 py-0.5 font-mono text-sm'
  >
    {children}
  </code>
)

// Toolbar component
const EditorToolbar = ({ editor }: { editor: any }) => {
  const isMarkActive = (mark: string) => {
    const marks = editor.getMarks()
    return marks ? marks[mark] === true : false
  }

  const toggleMark = (mark: string) => {
    if (isMarkActive(mark)) {
      editor.removeMark(mark)
    } else {
      editor.addMark(mark, true)
    }
  }

  const toggleBlock = (type: string) => {
    const isActive = editor.isBlockActive({ type })
    if (isActive) {
      editor.setNodes({ type: ELEMENT_PARAGRAPH })
    } else {
      editor.setNodes({ type })
    }
  }

  return (
    <div className='flex items-center gap-1 border-b bg-background p-1'>
      {/* History */}
      <div className='flex items-center gap-1'>
        <Toggle size='sm' onClick={() => editor.undo()} aria-label='Undo'>
          <Undo className='h-4 w-4' />
        </Toggle>
        <Toggle size='sm' onClick={() => editor.redo()} aria-label='Redo'>
          <Redo className='h-4 w-4' />
        </Toggle>
      </div>

      <Separator orientation='vertical' className='h-6' />

      {/* Text formatting */}
      <div className='flex items-center gap-1'>
        <Toggle
          size='sm'
          pressed={isMarkActive(MARK_BOLD)}
          onPressedChange={() => toggleMark(MARK_BOLD)}
          aria-label='Bold'
        >
          <Bold className='h-4 w-4' />
        </Toggle>
        <Toggle
          size='sm'
          pressed={isMarkActive(MARK_ITALIC)}
          onPressedChange={() => toggleMark(MARK_ITALIC)}
          aria-label='Italic'
        >
          <Italic className='h-4 w-4' />
        </Toggle>
        <Toggle
          size='sm'
          pressed={isMarkActive(MARK_UNDERLINE)}
          onPressedChange={() => toggleMark(MARK_UNDERLINE)}
          aria-label='Underline'
        >
          <Underline className='h-4 w-4' />
        </Toggle>
        <Toggle
          size='sm'
          pressed={isMarkActive(MARK_STRIKETHROUGH)}
          onPressedChange={() => toggleMark(MARK_STRIKETHROUGH)}
          aria-label='Strikethrough'
        >
          <Strikethrough className='h-4 w-4' />
        </Toggle>
        <Toggle
          size='sm'
          pressed={isMarkActive(MARK_CODE)}
          onPressedChange={() => toggleMark(MARK_CODE)}
          aria-label='Code'
        >
          <Code className='h-4 w-4' />
        </Toggle>
      </div>
    </div>
  )
}

export interface SimplePlateEditorProps {
  initialValue?: Value
  onChange?: (value: Value) => void
  placeholder?: string
  readOnly?: boolean
  className?: string
  autoFocus?: boolean
}

export function SimplePlateEditor({
  initialValue = [{ type: ELEMENT_PARAGRAPH, children: [{ text: '' }] }],
  onChange,
  placeholder = 'Start writing...',
  readOnly = false,
  className,
  autoFocus = false,
}: SimplePlateEditorProps) {
  const editor = React.useMemo(() => {
    const plugins = [
      createParagraphPlugin(),
      createHeadingPlugin(),
      createBlockquotePlugin(),
      createCodeBlockPlugin(),
    ]

    return createPlateEditor({
      plugins,
      override: {
        components: {
          [ELEMENT_PARAGRAPH]: ParagraphElement,
          [ELEMENT_H1]: H1Element,
          [ELEMENT_H2]: H2Element,
          [ELEMENT_H3]: H3Element,
          [ELEMENT_BLOCKQUOTE]: BlockquoteElement,
          [ELEMENT_CODE_BLOCK]: CodeBlockElement,
          [ELEMENT_CODE_LINE]: CodeLineElement,
          [MARK_BOLD]: BoldLeaf,
          [MARK_ITALIC]: ItalicLeaf,
          [MARK_UNDERLINE]: UnderlineLeaf,
          [MARK_STRIKETHROUGH]: StrikethroughLeaf,
          [MARK_CODE]: CodeLeaf,
        },
      },
    })
  }, [])

  return (
    <DndProvider backend={HTML5Backend}>
      <Plate
        editor={editor}
        value={initialValue}
        onChange={(newValue) => {
          onChange?.(newValue)
        }}
      >
        <div
          className={cn(
            'relative w-full rounded-md border border-input',
            className
          )}
        >
          <EditorToolbar editor={editor} />

          <PlateContent
            className={cn(
              'relative min-h-[500px] w-full rounded-b-md bg-background px-6 py-4',
              'focus:outline-none',
              'selection:bg-primary/20',
              readOnly && 'cursor-text select-text'
            )}
            readOnly={readOnly}
            autoFocus={autoFocus}
            placeholder={placeholder}
            spellCheck
            aria-label='Editor content'
            aria-multiline='true'
            role='textbox'
          />
        </div>
      </Plate>
    </DndProvider>
  )
}
