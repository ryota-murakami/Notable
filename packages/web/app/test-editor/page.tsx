'use client'

import React, { useState } from 'react'
import { Plate, PlateContent, usePlateEditor } from 'platejs/react'
import { BasicMarksKit } from '@/components/editor/plugins/basic-marks-kit'
import { BasicBlocksKit } from '@/components/editor/plugins/basic-blocks-kit'
import { FixedToolbarButtons } from '@/components/ui/fixed-toolbar-buttons'
import { FixedToolbar } from '@/components/ui/fixed-toolbar'
import { Editor } from '@/components/ui/editor'

const initialValue = [
  {
    type: 'h1',
    children: [{ text: 'Welcome to the Plate Playground!' }],
  },
  {
    type: 'p',
    children: [
      { text: 'Experience a modern rich-text editor built with ' },
      { text: 'Slate', bold: true },
      { text: ' and ' },
      { text: 'React', bold: true },
      {
        text: ". This playground showcases just a part of Plate's capabilities. ",
      },
      { text: 'Explore the documentation', underline: true },
      { text: ' to discover more.' },
    ],
  },
  {
    type: 'h2',
    children: [{ text: 'Collaborative Editing' }],
  },
  {
    type: 'p',
    children: [
      { text: 'Review and refine content seamlessly. Use ' },
      { text: 'suggestions', color: 'green' },
      { text: ' like this added text or to ' },
      { text: 'mark text for removal', strikethrough: true },
      { text: '. Discuss changes using ' },
      { text: 'comments', bold: true },
      { text: ' on many text segments. You can even have ' },
      { text: 'overlapping', color: 'yellow', backgroundColor: 'yellow' },
      { text: ' annotations!' },
    ],
  },
  {
    type: 'h2',
    children: [{ text: 'AI-Powered Editing' }],
  },
  {
    type: 'p',
    children: [
      { text: 'Boost your productivity with integrated ' },
      { text: 'AI SDK', bold: true },
      { text: '. Press ' },
      { text: '⌘+J', code: true },
      { text: ' or ' },
      { text: 'Space', code: true },
      { text: ' in an empty line to:' },
    ],
  },
  {
    type: 'ul',
    children: [
      {
        type: 'li',
        children: [
          { text: 'Generate content (continue writing, summarize, explain)' },
        ],
      },
      {
        type: 'li',
        children: [
          { text: 'Edit existing text (improve, fix grammar, change tone)' },
        ],
      },
    ],
  },
  {
    type: 'h2',
    children: [{ text: 'Rich Content Editing' }],
  },
  {
    type: 'p',
    children: [
      {
        text: 'Structure your content with headings, lists, and quotes. Apply marks like ',
      },
      { text: 'bold', bold: true },
      { text: ', ' },
      { text: 'italic', italic: true },
      { text: ', ' },
      { text: 'underline', underline: true },
      { text: ', ' },
      { text: 'strikethrough', strikethrough: true },
      { text: ', and ' },
      { text: 'code', code: true },
      { text: '. Use autoformatting for Markdown-like shortcuts (e.g., ' },
      { text: '*', code: true },
      { text: ' for lists, ' },
      { text: '#', code: true },
      { text: ' for H1).' },
    ],
  },
  {
    type: 'blockquote',
    children: [
      { text: 'Blockquotes are great for highlighting important information.' },
    ],
  },
]

export default function TestEditor() {
  const [value, setValue] = useState(initialValue)

  const editor = usePlateEditor({
    plugins: [...BasicMarksKit, ...BasicBlocksKit],
    value,
  })

  return (
    <div className='p-8'>
      <h1 className='text-2xl font-bold mb-6'>Test Plate Editor</h1>
      <div className='max-w-4xl mx-auto'>
        <Plate editor={editor} onChange={({ value }) => setValue(value)}>
          <FixedToolbar>
            <FixedToolbarButtons />
          </FixedToolbar>

          <div className='relative'>
            <PlateContent className='min-h-[500px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 prose prose-sm max-w-none dark:prose-invert' />
          </div>
        </Plate>
      </div>
    </div>
  )
}
