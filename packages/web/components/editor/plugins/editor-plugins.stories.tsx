import React from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { Plate, usePlateEditor } from 'platejs/react'
import { Editor, EditorContainer } from '@/components/ui/editor'
import { BasicNodesKit } from './basic-nodes-kit'
import { BasicBlocksKit } from './basic-blocks-kit'
import { BasicMarksKit } from './basic-marks-kit'
import { EnhancedEditorKit } from './enhanced-editor-kit'
import { LinkPlugin } from './link-plugin'
import { SlashCommandKit } from './slash-command-kit'
import { BlockReferenceKit } from './block-reference-kit'
import { within, userEvent, expect } from '@storybook/test'

// Wrapper component for demonstrating plugins
const PluginDemo = ({
  plugins,
  initialValue,
  placeholder = 'Type here...',
}: {
  plugins: any[]
  initialValue?: any[]
  placeholder?: string
}) => {
  const editor = usePlateEditor({
    plugins,
    value: initialValue,
  })

  return (
    <Plate editor={editor}>
      <EditorContainer>
        <Editor variant='demo' placeholder={placeholder} />
      </EditorContainer>
    </Plate>
  )
}

const meta = {
  title: 'Editor/Plugins',
  component: PluginDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='min-w-[800px] p-8'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PluginDemo>

export default meta
type Story = StoryObj<typeof meta>

const basicValue = [
  {
    type: 'h1',
    children: [{ text: 'Editor Plugins Demo' }],
  },
  {
    type: 'p',
    children: [
      { text: 'This demonstrates various plugin configurations. Try ' },
      { text: 'bold', bold: true },
      { text: ', ' },
      { text: 'italic', italic: true },
      { text: ', and other formatting options.' },
    ],
  },
]

const blockValue = [
  {
    type: 'h2',
    children: [{ text: 'Block Types' }],
  },
  {
    type: 'blockquote',
    children: [{ text: 'This is a blockquote' }],
  },
  {
    type: 'code_block',
    children: [{ text: 'const greeting = "Hello, World!";' }],
  },
]

export const BasicNodes: Story = {
  args: {
    plugins: BasicNodesKit,
    initialValue: basicValue,
    placeholder: 'Basic nodes kit includes blocks and marks...',
  },
}

export const BasicBlocks: Story = {
  args: {
    plugins: BasicBlocksKit,
    initialValue: blockValue,
    placeholder: 'Basic blocks kit for headings, quotes, code...',
  },
}

export const BasicMarks: Story = {
  args: {
    plugins: BasicMarksKit,
    initialValue: [
      {
        type: 'p',
        children: [
          { text: 'Test ' },
          { text: 'bold', bold: true },
          { text: ', ' },
          { text: 'italic', italic: true },
          { text: ', ' },
          { text: 'underline', underline: true },
          { text: ', ' },
          { text: 'strikethrough', strikethrough: true },
          { text: ', and ' },
          { text: 'code', code: true },
        ],
      },
    ],
    placeholder: 'Basic marks kit for text formatting...',
  },
}

export const EnhancedEditor: Story = {
  args: {
    plugins: EnhancedEditorKit,
    placeholder: 'Enhanced editor with all features...',
  },
}

export const WithLinkPlugin: Story = {
  args: {
    plugins: [...BasicNodesKit, LinkPlugin],
    initialValue: [
      {
        type: 'p',
        children: [
          { text: 'Visit ' },
          {
            type: 'a',
            url: 'https://platejs.org',
            children: [{ text: 'Plate.js' }],
          },
          { text: ' for documentation.' },
        ],
      },
    ],
    placeholder: 'Editor with link support...',
  },
}

export const SlashCommands: Story = {
  args: {
    plugins: [...BasicNodesKit, ...SlashCommandKit],
    placeholder: 'Type "/" to see slash commands...',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for editor to be ready
    await new Promise((resolve) => setTimeout(resolve, 500))

    const editor = canvas.getByRole('textbox')

    // Type slash to trigger command menu
    await userEvent.type(editor, '/')

    // Wait for menu to appear
    await new Promise((resolve) => setTimeout(resolve, 300))

    // The menu should be visible (implementation dependent)
    // This is a placeholder for the actual menu test
  },
}

export const BlockReferences: Story = {
  args: {
    plugins: [...BasicNodesKit, ...BlockReferenceKit],
    initialValue: [
      {
        type: 'p',
        id: 'block-1',
        children: [{ text: 'This is a referenceable block' }],
      },
      {
        type: 'p',
        children: [
          { text: 'Reference to ' },
          { type: 'block_reference', ref: 'block-1', children: [{ text: '' }] },
        ],
      },
    ],
    placeholder: 'Editor with block references...',
  },
}

export const InteractiveMarks: Story = {
  args: {
    plugins: BasicNodesKit,
    placeholder: 'Select text and use keyboard shortcuts...',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for editor to be ready
    await new Promise((resolve) => setTimeout(resolve, 500))

    const editor = canvas.getByRole('textbox')

    // Type some text
    await userEvent.type(editor, 'This text will be formatted')

    // Select all
    await userEvent.keyboard('{Control>}a{/Control}')

    // Apply bold
    await userEvent.keyboard('{Control>}b{/Control}')

    // Click to deselect
    await userEvent.click(editor)

    // Type more
    await userEvent.type(editor, ' and this is normal')
  },
}

export const ComplexDocument: Story = {
  args: {
    plugins: EnhancedEditorKit,
    initialValue: [
      {
        type: 'h1',
        children: [{ text: 'Complete Document Example' }],
      },
      {
        type: 'p',
        children: [
          { text: 'This document showcases ' },
          { text: 'all available', bold: true, italic: true },
          { text: ' formatting options.' },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Lists' }],
      },
      {
        type: 'ul',
        children: [
          {
            type: 'li',
            children: [{ text: 'Unordered list item 1' }],
          },
          {
            type: 'li',
            children: [{ text: 'Unordered list item 2' }],
          },
        ],
      },
      {
        type: 'ol',
        children: [
          {
            type: 'li',
            children: [{ text: 'Ordered list item 1' }],
          },
          {
            type: 'li',
            children: [{ text: 'Ordered list item 2' }],
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Code Block' }],
      },
      {
        type: 'code_block',
        children: [
          { text: 'function hello() {\n  console.log("Hello, World!");\n}' },
        ],
      },
      {
        type: 'blockquote',
        children: [
          { text: 'This is a blockquote with ' },
          { text: 'formatted text', bold: true },
          { text: ' inside.' },
        ],
      },
    ],
  },
}
