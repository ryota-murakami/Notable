'use client'

import * as React from 'react'

import {
  PlateElement,
  usePluginOption,
  type PlateElementProps,
} from 'platejs/react'
import { EmojiPlugin, insertText, type PlateEditor } from 'platejs'
import { EmojiInlineIndexSearch } from '@platejs/emoji'

import { useDebounce } from '@/hooks/use-debounce'

import {
  InlineCombobox,
  InlineComboboxContent,
  InlineComboboxEmpty,
  InlineComboboxGroup,
  InlineComboboxInput,
  InlineComboboxItem,
} from './inline-combobox'

// Helper function to insert emoji
const insertEmoji = (editor: PlateEditor, emoji: any) => {
  insertText(editor, emoji.skins[0].native)
  editor.tf.focus()
}

export function EmojiInputElement(props: PlateElementProps) {
  const { children, editor, element } = props
  const data = usePluginOption(EmojiPlugin, 'data')!
  const [value, setValue] = React.useState('')
  const debouncedValue = useDebounce(value, 100)
  const isPending = value !== debouncedValue

  const filteredEmojis = React.useMemo(() => {
    if (debouncedValue.trim().length === 0) return []

    return EmojiInlineIndexSearch.getInstance(data)
      .search(debouncedValue.replace(/:$/, ''))
      .get()
  }, [data, debouncedValue])

  return (
    <PlateElement as='span' {...props}>
      <InlineCombobox
        value={value}
        element={element}
        filter={false}
        setValue={setValue}
        trigger=':'
        hideWhenNoValue
      >
        <InlineComboboxInput />

        <InlineComboboxContent>
          {!isPending && <InlineComboboxEmpty>No results</InlineComboboxEmpty>}

          <InlineComboboxGroup>
            {filteredEmojis.map((emoji) => (
              <InlineComboboxItem
                key={emoji.id}
                value={emoji.name}
                onClick={() => insertEmoji(editor, emoji)}
              >
                {emoji.skins[0].native} {emoji.name}
              </InlineComboboxItem>
            ))}
          </InlineComboboxGroup>
        </InlineComboboxContent>
      </InlineCombobox>

      {children}
    </PlateElement>
  )
}
