import React, { useCallback, useMemo, useState } from 'react'
import {
  ComboboxContentItemProps,
  ComboboxContentProps,
  ComboboxProps,
  useComboboxContent,
  useComboboxContentState,
  useComboboxControls,
  useComboboxItem,
  useComboboxSelectors,
} from '@udecode/plate-combobox'
import {
  useEditorRef,
  PlateElement,
  insertNodes,
  deleteBackward,
} from '@udecode/plate-common'
import { ELEMENT_H1, ELEMENT_H2, ELEMENT_H3 } from '@udecode/plate-heading'
import { ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph'
import { ELEMENT_UL, ELEMENT_OL, ELEMENT_TODO_LI } from '@udecode/plate-list'
import { ELEMENT_BLOCKQUOTE } from '@udecode/plate-block-quote'
import { ELEMENT_CODE_BLOCK } from '@udecode/plate-code-block'
import { ELEMENT_TABLE } from '@udecode/plate-table'
import { ELEMENT_HR } from '@udecode/plate-horizontal-rule'
import { insertTable } from '@udecode/plate-table'
import { cn } from '../../lib/utils'
import {
  Heading1,
  Heading2,
  Heading3,
  Type,
  List,
  ListOrdered,
  ListTodo,
  Quote,
  Code2,
  Table,
  Minus,
  Image,
} from 'lucide-react'

interface SlashCommandItem {
  key: string
  text: string
  icon: React.ReactNode
  onSelect: (editor: any) => void
}

const items: SlashCommandItem[] = [
  {
    key: 'paragraph',
    text: 'Paragraph',
    icon: <Type className='h-4 w-4' />,
    onSelect: (editor) => {
      insertNodes(editor, {
        type: ELEMENT_PARAGRAPH,
        children: [{ text: '' }],
      })
    },
  },
  {
    key: 'h1',
    text: 'Heading 1',
    icon: <Heading1 className='h-4 w-4' />,
    onSelect: (editor) => {
      insertNodes(editor, {
        type: ELEMENT_H1,
        children: [{ text: '' }],
      })
    },
  },
  {
    key: 'h2',
    text: 'Heading 2',
    icon: <Heading2 className='h-4 w-4' />,
    onSelect: (editor) => {
      insertNodes(editor, {
        type: ELEMENT_H2,
        children: [{ text: '' }],
      })
    },
  },
  {
    key: 'h3',
    text: 'Heading 3',
    icon: <Heading3 className='h-4 w-4' />,
    onSelect: (editor) => {
      insertNodes(editor, {
        type: ELEMENT_H3,
        children: [{ text: '' }],
      })
    },
  },
  {
    key: 'ul',
    text: 'Bullet List',
    icon: <List className='h-4 w-4' />,
    onSelect: (editor) => {
      insertNodes(editor, {
        type: ELEMENT_UL,
        children: [
          {
            type: 'li',
            children: [{ text: '' }],
          },
        ],
      })
    },
  },
  {
    key: 'ol',
    text: 'Numbered List',
    icon: <ListOrdered className='h-4 w-4' />,
    onSelect: (editor) => {
      insertNodes(editor, {
        type: ELEMENT_OL,
        children: [
          {
            type: 'li',
            children: [{ text: '' }],
          },
        ],
      })
    },
  },
  {
    key: 'todo',
    text: 'Todo List',
    icon: <ListTodo className='h-4 w-4' />,
    onSelect: (editor) => {
      insertNodes(editor, {
        type: ELEMENT_TODO_LI,
        checked: false,
        children: [{ text: '' }],
      })
    },
  },
  {
    key: 'quote',
    text: 'Quote',
    icon: <Quote className='h-4 w-4' />,
    onSelect: (editor) => {
      insertNodes(editor, {
        type: ELEMENT_BLOCKQUOTE,
        children: [{ text: '' }],
      })
    },
  },
  {
    key: 'code',
    text: 'Code Block',
    icon: <Code2 className='h-4 w-4' />,
    onSelect: (editor) => {
      insertNodes(editor, {
        type: ELEMENT_CODE_BLOCK,
        children: [
          {
            type: 'code_line',
            children: [{ text: '' }],
          },
        ],
      })
    },
  },
  {
    key: 'table',
    text: 'Table',
    icon: <Table className='h-4 w-4' />,
    onSelect: (editor) => {
      insertTable(editor, { rows: 3, columns: 3 })
    },
  },
  {
    key: 'hr',
    text: 'Divider',
    icon: <Minus className='h-4 w-4' />,
    onSelect: (editor) => {
      insertNodes(editor, {
        type: ELEMENT_HR,
        children: [{ text: '' }],
      })
    },
  },
  {
    key: 'image',
    text: 'Image',
    icon: <Image className='h-4 w-4' />,
    onSelect: (editor) => {
      // TODO: Implement image upload dialog
      insertNodes(editor, {
        type: 'img',
        url: '',
        children: [{ text: '' }],
      })
    },
  },
]

export const SlashCommandItem = ({
  item,
  index,
  onRenderItem,
}: ComboboxContentItemProps) => {
  const { props } = useComboboxItem({ item, index })

  return (
    <div
      {...props}
      className={cn(
        'relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none',
        'hover:bg-accent hover:text-accent-foreground',
        'data-[highlighted=true]:bg-accent data-[highlighted=true]:text-accent-foreground'
      )}
    >
      {onRenderItem ? onRenderItem(item) : item.text}
    </div>
  )
}

export const SlashCommandContent = (props: ComboboxContentProps) => {
  const { menuProps, targetRange } = useComboboxContentState()
  const items = useComboboxSelectors.filteredItems()
  const editor = useEditorRef()

  const { props: contentProps } = useComboboxContent(props)

  if (!targetRange || items.length === 0) return null

  return (
    <div
      {...contentProps}
      {...menuProps}
      className={cn(
        'z-50 w-72 rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
        'animate-in fade-in-0 zoom-in-95'
      )}
    >
      {items.map((item, index) => (
        <SlashCommandItem
          key={item.key}
          item={item}
          index={index}
          onRenderItem={(item) => {
            const commandItem = item.data as SlashCommandItem
            return (
              <>
                {commandItem.icon}
                <span>{commandItem.text}</span>
              </>
            )
          }}
        />
      ))}
    </div>
  )
}

export const SlashCommand = () => {
  const editor = useEditorRef()
  const [search, setSearch] = useState('')
  const { trigger, searchPattern } = useComboboxControls()

  const onSelectItem = useCallback(
    (item: SlashCommandItem) => {
      const targetRange = useComboboxSelectors.targetRange()
      if (!targetRange) return

      // Delete the slash and search text
      deleteBackward(editor, {
        unit: 'character',
        distance: targetRange.focus.offset,
      })

      // Execute the command
      item.onSelect(editor)
    },
    [editor]
  )

  const filteredItems = useMemo(() => {
    const searchLower = search.toLowerCase()
    return items
      .filter((item) => item.text.toLowerCase().includes(searchLower))
      .map((item) => ({
        key: item.key,
        text: item.text,
        data: item,
      }))
  }, [search])

  return (
    <PlateElement
      as='div'
      data-slate-combobox
      onComboboxOpen={(value) => setSearch(value || '')}
      onComboboxClose={() => setSearch('')}
    >
      <span {...trigger} {...searchPattern}>
        <SlashCommandContent
          items={filteredItems}
          onRenderItem={(item) => {
            const commandItem = item.data as SlashCommandItem
            return (
              <div
                className='flex items-center gap-2'
                onClick={() => onSelectItem(commandItem)}
              >
                {commandItem.icon}
                <span>{commandItem.text}</span>
              </div>
            )
          }}
        />
      </span>
    </PlateElement>
  )
}
