import React from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { Plate, usePlateEditor } from 'platejs/react'
import { BlockquoteElement } from './blockquote-node'
import { BasicNodesKit } from '@/components/editor/plugins/basic-nodes-kit'
import { Editor, EditorContainer } from '@/components/ui/editor'
import { expect, userEvent, within } from '@storybook/test'

// Wrapper component to provide Plate context
const BlockquoteDemo = ({
  content = 'This is a blockquote. It stands out from regular text.',
  author = '',
}: {
  content?: string
  author?: string
}) => {
  const value = author
    ? [
        {
          type: 'blockquote',
          children: [{ text: content }],
        },
        {
          type: 'p',
          children: [{ text: `— ${author}` }],
        },
      ]
    : [
        {
          type: 'blockquote',
          children: [{ text: content }],
        },
      ]

  const editor = usePlateEditor({
    plugins: BasicNodesKit,
    value,
  })

  return (
    <Plate editor={editor}>
      <EditorContainer>
        <Editor variant='demo' />
      </EditorContainer>
    </Plate>
  )
}

const meta = {
  title: 'UI/Nodes/BlockquoteNode',
  component: BlockquoteDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: 'Blockquote content',
    },
    author: {
      control: 'text',
      description: 'Optional author attribution',
    },
  },
  decorators: [
    (Story) => (
      <div className='min-w-[600px] p-8'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BlockquoteDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    content: 'The only way to do great work is to love what you do.',
  },
}

export const WithAuthor: Story = {
  args: {
    content: 'Innovation distinguishes between a leader and a follower.',
    author: 'Steve Jobs',
  },
}

export const LongQuote: Story = {
  args: {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
}

export const ShortQuote: Story = {
  args: {
    content: 'Less is more.',
  },
}

export const FormattedBlockquote: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'blockquote',
          children: [
            { text: 'This blockquote contains ' },
            { text: 'bold', bold: true },
            { text: ', ' },
            { text: 'italic', italic: true },
            { text: ', and ' },
            { text: 'underlined', underline: true },
            { text: ' text to demonstrate formatting.' },
          ],
        },
      ],
    })

    return (
      <Plate editor={editor}>
        <EditorContainer>
          <Editor variant='demo' />
        </EditorContainer>
      </Plate>
    )
  },
}

export const MultipleBlockquotes: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'h2',
          children: [{ text: 'Favorite Quotes' }],
        },
        {
          type: 'blockquote',
          children: [
            { text: 'The journey of a thousand miles begins with one step.' },
          ],
        },
        {
          type: 'p',
          children: [{ text: '— Lao Tzu' }],
        },
        {
          type: 'blockquote',
          children: [{ text: 'What we think, we become.' }],
        },
        {
          type: 'p',
          children: [{ text: '— Buddha' }],
        },
        {
          type: 'blockquote',
          children: [
            { text: 'The only impossible journey is the one you never begin.' },
          ],
        },
        {
          type: 'p',
          children: [{ text: '— Tony Robbins' }],
        },
      ],
    })

    return (
      <Plate editor={editor}>
        <EditorContainer>
          <Editor variant='demo' />
        </EditorContainer>
      </Plate>
    )
  },
}

export const InContext: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'h1',
          children: [{ text: 'Article Title' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'This is an introductory paragraph that sets the context for the quote below.',
            },
          ],
        },
        {
          type: 'blockquote',
          children: [
            {
              text: 'A well-placed quote can emphasize key points and break up long sections of text.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'As we can see from the quote above, blockquotes serve an important purpose in content structure.',
            },
          ],
        },
      ],
    })

    return (
      <Plate editor={editor}>
        <EditorContainer>
          <Editor variant='demo' />
        </EditorContainer>
      </Plate>
    )
  },
}

export const InteractiveBlockquote: Story = {
  args: {
    content: 'Click to edit this quote',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for editor to render
    await new Promise((resolve) => setTimeout(resolve, 100))

    const editor = canvas.getByRole('textbox')
    const blockquote = canvas.getByText('Click to edit this quote')

    // Click on the blockquote
    await userEvent.click(blockquote)

    // Add text at the end
    await userEvent.keyboard('{End}')
    await userEvent.type(editor, ' - now edited!')

    // Verify the change
    await expect(editor).toHaveTextContent(
      'Click to edit this quote - now edited!'
    )
  },
}

export const CreateBlockquote: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'p',
          children: [
            {
              text: 'Type some text and then convert it to a blockquote using the toolbar or keyboard shortcut.',
            },
          ],
        },
      ],
    })

    return (
      <Plate editor={editor}>
        <EditorContainer>
          <Editor variant='demo' />
        </EditorContainer>
      </Plate>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for editor to render
    await new Promise((resolve) => setTimeout(resolve, 100))

    const editor = canvas.getByRole('textbox')

    // Add a new paragraph
    await userEvent.click(editor)
    await userEvent.keyboard('{End}{Enter}')
    await userEvent.type(editor, 'This will become a blockquote')

    // Select the text (triple-click to select the line)
    const newText = canvas.getByText('This will become a blockquote')
    await userEvent.tripleClick(newText)

    // Note: Actual blockquote conversion would depend on toolbar/keyboard implementation
  },
}

export const NestedContent: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'blockquote',
          children: [
            { text: 'This blockquote contains multiple paragraphs.\n\n' },
            {
              text: 'Each paragraph within the blockquote maintains the same styling and indentation.',
            },
          ],
        },
      ],
    })

    return (
      <Plate editor={editor}>
        <EditorContainer>
          <Editor variant='demo' />
        </EditorContainer>
      </Plate>
    )
  },
}
