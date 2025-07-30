import React from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { Plate, usePlateEditor } from 'platejs/react'
import { ParagraphElement } from './paragraph-node'
import { BasicNodesKit } from '@/components/editor/plugins/basic-nodes-kit'
import { Editor, EditorContainer } from '@/components/ui/editor'
import { expect, userEvent, within } from '@storybook/test'

// Wrapper component to provide Plate context
const ParagraphDemo = ({
  content = 'This is a sample paragraph.',
  multiple = false,
}: {
  content?: string
  multiple?: boolean
}) => {
  const value = multiple
    ? [
        {
          type: 'p',
          children: [{ text: 'First paragraph with some text.' }],
        },
        {
          type: 'p',
          children: [{ text: 'Second paragraph with more content.' }],
        },
        {
          type: 'p',
          children: [{ text: 'Third paragraph to show spacing.' }],
        },
      ]
    : [
        {
          type: 'p',
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
  title: 'UI/Nodes/ParagraphNode',
  component: ParagraphDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: 'Paragraph text content',
    },
    multiple: {
      control: 'boolean',
      description: 'Show multiple paragraphs',
    },
  },
  decorators: [
    (Story) => (
      <div className='min-w-[600px] p-8'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ParagraphDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    content: 'This is a default paragraph with normal text.',
  },
}

export const MultipleParagraphs: Story = {
  args: {
    multiple: true,
  },
}

export const LongParagraph: Story = {
  args: {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
}

export const WithFormatting: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'p',
          children: [
            { text: 'This paragraph contains ' },
            { text: 'bold', bold: true },
            { text: ', ' },
            { text: 'italic', italic: true },
            { text: ', ' },
            { text: 'underlined', underline: true },
            { text: ', ' },
            { text: 'strikethrough', strikethrough: true },
            { text: ', and ' },
            { text: 'code', code: true },
            { text: ' formatting.' },
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

export const EmptyParagraph: Story = {
  args: {
    content: '',
  },
}

export const WithLinks: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'p',
          children: [
            { text: 'This paragraph contains a ' },
            {
              type: 'a',
              url: 'https://example.com',
              children: [{ text: 'link' }],
            },
            { text: ' to an external website.' },
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

export const MixedContent: Story = {
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
              text: 'This is the introduction paragraph that provides context for the article.',
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Section Heading' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'This paragraph contains the main content of the section.',
            },
          ],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Another paragraph with additional information and details about the topic.',
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

export const InteractiveParagraph: Story = {
  args: {
    content: 'Click to edit this paragraph',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for editor to render
    await new Promise((resolve) => setTimeout(resolve, 100))

    const editor = canvas.getByRole('textbox')
    const paragraph = canvas.getByText('Click to edit this paragraph')

    // Click on the paragraph
    await userEvent.click(paragraph)

    // Type at the end
    await userEvent.keyboard('{End}')
    await userEvent.type(editor, ' - now edited!')

    // Verify the change
    await expect(editor).toHaveTextContent(
      'Click to edit this paragraph - now edited!'
    )
  },
}

export const ParagraphCreation: Story = {
  args: {
    content: 'First paragraph',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for editor to render
    await new Promise((resolve) => setTimeout(resolve, 100))

    const editor = canvas.getByRole('textbox')

    // Click at the end of the first paragraph
    const firstPara = canvas.getByText('First paragraph')
    await userEvent.click(firstPara)

    // Press Enter to create new paragraph
    await userEvent.keyboard('{End}{Enter}')

    // Type in new paragraph
    await userEvent.type(editor, 'Second paragraph created')

    // Verify both paragraphs exist
    await expect(editor).toHaveTextContent('First paragraph')
    await expect(editor).toHaveTextContent('Second paragraph created')
  },
}
