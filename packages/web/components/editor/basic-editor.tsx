'use client'

import React, { useCallback, useMemo } from 'react'
import {
  type BaseEditor,
  createEditor,
  type Descendant,
  Editor,
  Element as SlateElement,
  Transforms,
  Range,
  Point,
  Text,
} from 'slate'
import {
  Editable,
  type ReactEditor,
  type RenderElementProps,
  type RenderLeafProps,
  Slate,
  withReact,
} from 'slate-react'
import { type HistoryEditor, withHistory } from 'slate-history'
import { Toggle } from '../ui/toggle'
import { Separator } from '../ui/separator'
import {
  Bold,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  List,
  ListOrdered,
  Quote,
  Redo,
  Strikethrough,
  Underline,
  Undo,
} from 'lucide-react'
import { cn } from '../../lib/utils'

// Type declarations
type CustomElement =
  | { type: 'paragraph'; children: CustomText[] }
  | { type: 'heading-one'; children: CustomText[] }
  | { type: 'heading-two'; children: CustomText[] }
  | { type: 'heading-three'; children: CustomText[] }
  | { type: 'block-quote'; children: CustomText[] }
  | { type: 'bulleted-list'; children: CustomElement[] }
  | { type: 'numbered-list'; children: CustomElement[] }
  | { type: 'list-item'; children: CustomText[] }
  | {
      type: 'wiki-link'
      noteId?: string
      noteTitle: string
      url: string
      children: CustomText[]
    }

type CustomText = {
  text: string
  bold?: boolean
  italic?: boolean
  underline?: boolean
  strikethrough?: boolean
  code?: boolean
}

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}

// Helper functions
const LIST_TYPES = ['numbered-list', 'bulleted-list']

const isMarkActive = (editor: Editor, format: string) => {
  const marks = Editor.marks(editor)
  return marks ? marks[format as keyof typeof marks] === true : false
}

const toggleMark = (editor: Editor, format: string) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}

const isBlockActive = (editor: Editor, format: string) => {
  const { selection } = editor
  if (!selection) return false

  const [match] = Editor.nodes(editor, {
    at: Editor.unhangRange(editor, selection),
    match: (n) =>
      !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
  })

  return !!match
}

const toggleBlock = (editor: Editor, format: string) => {
  const isActive = isBlockActive(editor, format)
  const isList = LIST_TYPES.includes(format)

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      LIST_TYPES.includes(n.type),
    split: true,
  })

  const newProperties: Partial<SlateElement> = {
    type: isActive ? 'paragraph' : isList ? 'list-item' : (format as any),
  }

  Transforms.setNodes<SlateElement>(editor, newProperties)

  if (!isActive && isList) {
    const block = { type: format as any, children: [] }
    Transforms.wrapNodes(editor, block)
  }
}

// Element components
const Element = ({ attributes, children, element }: RenderElementProps) => {
  switch (element.type) {
    case 'block-quote':
      return (
        <blockquote
          {...attributes}
          className='border-l-4 border-gray-300 pl-4 italic my-4'
        >
          {children}
        </blockquote>
      )
    case 'bulleted-list':
      return (
        <ul {...attributes} className='list-disc pl-6 my-2'>
          {children}
        </ul>
      )
    case 'heading-one':
      return (
        <h1 {...attributes} className='text-3xl font-bold my-4'>
          {children}
        </h1>
      )
    case 'heading-two':
      return (
        <h2 {...attributes} className='text-2xl font-bold my-3'>
          {children}
        </h2>
      )
    case 'heading-three':
      return (
        <h3 {...attributes} className='text-xl font-bold my-2'>
          {children}
        </h3>
      )
    case 'list-item':
      return (
        <li {...attributes} className='my-1'>
          {children}
        </li>
      )
    case 'numbered-list':
      return (
        <ol {...attributes} className='list-decimal pl-6 my-2'>
          {children}
        </ol>
      )
    case 'wiki-link':
      return (
        <a
          {...attributes}
          href={element.noteId ? `/notes/${element.noteId}` : element.url}
          data-wiki-link='true'
          data-note-id={element.noteId}
          title={`Link to: ${element.noteTitle}`}
          className='text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline decoration-blue-600/30 hover:decoration-blue-600/60 transition-colors duration-200 cursor-pointer'
          onClick={(e) => {
            e.preventDefault()
            if (element.noteId) {
              window.location.href = `/notes/${element.noteId}`
            }
          }}
        >
          {children}
        </a>
      )
    default:
      return (
        <p {...attributes} className='my-2'>
          {children}
        </p>
      )
  }
}

// Leaf components
const Leaf = ({ attributes, children, leaf }: RenderLeafProps) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.code) {
    children = (
      <code className='bg-gray-100 rounded px-1 py-0.5 font-mono text-sm'>
        {children}
      </code>
    )
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }

  if (leaf.strikethrough) {
    children = <s>{children}</s>
  }

  return <span {...attributes}>{children}</span>
}

// Toolbar component
const Toolbar = ({
  editor,
}: {
  editor: BaseEditor & ReactEditor & HistoryEditor
}) => {
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
          pressed={isMarkActive(editor, 'bold')}
          onPressedChange={() => toggleMark(editor, 'bold')}
          aria-label='Bold'
          data-testid='bold-button'
        >
          <Bold className='h-4 w-4' />
        </Toggle>
        <Toggle
          size='sm'
          pressed={isMarkActive(editor, 'italic')}
          onPressedChange={() => toggleMark(editor, 'italic')}
          aria-label='Italic'
          data-testid='italic-button'
        >
          <Italic className='h-4 w-4' />
        </Toggle>
        <Toggle
          size='sm'
          pressed={isMarkActive(editor, 'underline')}
          onPressedChange={() => toggleMark(editor, 'underline')}
          aria-label='Underline'
          data-testid='underline-button'
        >
          <Underline className='h-4 w-4' />
        </Toggle>
        <Toggle
          size='sm'
          pressed={isMarkActive(editor, 'strikethrough')}
          onPressedChange={() => toggleMark(editor, 'strikethrough')}
          aria-label='Strikethrough'
          data-testid='strikethrough-button'
        >
          <Strikethrough className='h-4 w-4' />
        </Toggle>
        <Toggle
          size='sm'
          pressed={isMarkActive(editor, 'code')}
          onPressedChange={() => toggleMark(editor, 'code')}
          aria-label='Code'
          data-testid='code-button'
        >
          <Code className='h-4 w-4' />
        </Toggle>
      </div>

      <Separator orientation='vertical' className='h-6' />

      {/* Block formatting */}
      <div className='flex items-center gap-1'>
        <Toggle
          size='sm'
          pressed={isBlockActive(editor, 'heading-one')}
          onPressedChange={() => toggleBlock(editor, 'heading-one')}
          aria-label='Heading 1'
          data-testid='heading-1'
        >
          <Heading1 className='h-4 w-4' />
        </Toggle>
        <Toggle
          size='sm'
          pressed={isBlockActive(editor, 'heading-two')}
          onPressedChange={() => toggleBlock(editor, 'heading-two')}
          aria-label='Heading 2'
          data-testid='heading-2'
        >
          <Heading2 className='h-4 w-4' />
        </Toggle>
        <Toggle
          size='sm'
          pressed={isBlockActive(editor, 'heading-three')}
          onPressedChange={() => toggleBlock(editor, 'heading-three')}
          aria-label='Heading 3'
          data-testid='heading-3'
        >
          <Heading3 className='h-4 w-4' />
        </Toggle>
        <Toggle
          size='sm'
          pressed={isBlockActive(editor, 'block-quote')}
          onPressedChange={() => toggleBlock(editor, 'block-quote')}
          aria-label='Quote'
          data-testid='quote-button'
        >
          <Quote className='h-4 w-4' />
        </Toggle>
        <Toggle
          size='sm'
          pressed={isBlockActive(editor, 'bulleted-list')}
          onPressedChange={() => toggleBlock(editor, 'bulleted-list')}
          aria-label='Bullet List'
          data-testid='bulleted-list'
        >
          <List className='h-4 w-4' />
        </Toggle>
        <Toggle
          size='sm'
          pressed={isBlockActive(editor, 'numbered-list')}
          onPressedChange={() => toggleBlock(editor, 'numbered-list')}
          aria-label='Numbered List'
          data-testid='numbered-list'
        >
          <ListOrdered className='h-4 w-4' />
        </Toggle>
      </div>
    </div>
  )
}

export interface BasicEditorProps {
  initialValue?: Descendant[]
  onChange?: (value: Descendant[]) => void
  placeholder?: string
  readOnly?: boolean
  className?: string
  autoFocus?: boolean
}

export function BasicEditor({
  initialValue = [
    {
      type: 'paragraph',
      children: [{ text: '' }],
    },
  ],
  onChange,
  placeholder = 'Start writing...',
  readOnly = false,
  className,
  autoFocus = false,
}: BasicEditorProps) {
  const renderElement = useCallback(
    (props: RenderElementProps) => <Element {...props} />,
    []
  )
  const renderLeaf = useCallback(
    (props: RenderLeafProps) => <Leaf {...props} />,
    []
  )

  // Custom editor with wiki link support
  const withWikiLinks = (editor: Editor) => {
    const { insertText, isInline } = editor

    editor.isInline = (element) => {
      return element.type === 'wiki-link' ? true : isInline(element)
    }

    editor.insertText = (text) => {
      const { selection } = editor

      if (text === ']' && selection && Range.isCollapsed(selection)) {
        const [start] = Range.edges(selection)
        const beforeText = Editor.string(editor, {
          anchor: { ...start, offset: Math.max(0, start.offset - 2) },
          focus: start,
        })

        if (beforeText === '[[') {
          // Get the text between [[ and ]]
          const afterText = Editor.string(editor, {
            anchor: start,
            focus: Editor.end(editor, []),
          })
          const endBracketIndex = afterText.indexOf(']')

          if (endBracketIndex === -1) {
            // No closing bracket yet, just insert the text
            insertText(text)
            return
          }

          // Extract the note title
          const noteTitle = afterText.substring(0, endBracketIndex)

          // Delete the [[ prefix and the note title
          Transforms.delete(editor, {
            at: {
              anchor: { ...start, offset: start.offset - 2 },
              focus: { ...start, offset: start.offset + endBracketIndex },
            },
          })

          // Insert the wiki link
          const wikiLink = {
            type: 'wiki-link' as const,
            noteTitle: noteTitle || 'Untitled',
            url: `/search?title=${encodeURIComponent(noteTitle)}`,
            children: [{ text: noteTitle || 'Untitled' }],
          }

          Transforms.insertNodes(editor, wikiLink)
          return
        }
      }

      insertText(text)
    }

    return editor
  }

  const editor = useMemo(
    () => withWikiLinks(withHistory(withReact(createEditor()))),
    []
  )

  return (
    <Slate editor={editor} initialValue={initialValue} onChange={onChange}>
      <div
        className={cn(
          'relative w-full rounded-md border border-input',
          className
        )}
      >
        <Toolbar editor={editor} />
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder={placeholder}
          readOnly={readOnly}
          autoFocus={autoFocus}
          spellCheck
          className={cn(
            'relative min-h-[500px] w-full rounded-b-md bg-background px-6 py-4',
            'focus:outline-none',
            'selection:bg-primary/20',
            readOnly && 'cursor-text select-text'
          )}
          data-testid='note-content-textarea'
        />
      </div>
    </Slate>
  )
}
