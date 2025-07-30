import React from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { Plate, usePlateEditor } from 'platejs/react'
import { HighlightLeaf } from './highlight-node'
import { BasicNodesKit } from '@/components/editor/plugins/basic-nodes-kit'
import { Editor, EditorContainer } from '@/components/ui/editor'
import { within, userEvent, expect } from '@storybook/test'

// Wrapper component to provide Plate context
const HighlightDemo = ({
  content = 'This text is highlighted',
  context = '',
}: {
  content?: string
  context?: string
}) => {
  const value = context
    ? [
        {
          type: 'p',
          children: [
            { text: context },
            { text: content, highlight: true },
            { text: ' for emphasis.' },
          ],
        },
      ]
    : [
        {
          type: 'p',
          children: [{ text: content, highlight: true }],
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
  title: 'UI/Nodes/HighlightNode',
  component: HighlightDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: 'Highlighted text content',
    },
    context: {
      control: 'text',
      description: 'Text before the highlight',
    },
  },
  decorators: [
    (Story) => (
      <div className='min-w-[600px] p-8'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof HighlightDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    content: 'Important text',
  },
}

export const InContext: Story = {
  args: {
    content: ' this part ',
    context: 'Pay attention to',
  },
}

export const MultipleHighlights: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'p',
          children: [
            { text: 'This paragraph has ' },
            { text: 'multiple', highlight: true },
            { text: ' words ' },
            { text: 'highlighted', highlight: true },
            { text: ' to show ' },
            { text: 'emphasis', highlight: true },
            { text: '.' },
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

export const LongHighlight: Story = {
  args: {
    content:
      'This is a very long piece of highlighted text that demonstrates how highlighting works with wrapped lines',
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
            { text: 'Highlights can be ' },
            { text: 'bold', highlight: true, bold: true },
            { text: ', ' },
            { text: 'italic', highlight: true, italic: true },
            { text: ', or ' },
            { text: 'both', highlight: true, bold: true, italic: true },
            { text: ' at the same time.' },
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

export const SearchResults: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'p',
          children: [
            { text: 'When searching for "example", all instances of ' },
            { text: 'example', highlight: true },
            { text: ' are highlighted. This ' },
            { text: 'example', highlight: true },
            { text: ' shows how search highlighting works.' },
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

export const DocumentReview: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'h2',
          children: [{ text: 'Document Review' }],
        },
        {
          type: 'p',
          children: [
            { text: 'During review, ' },
            { text: 'important sections', highlight: true },
            { text: ' are highlighted for discussion.' },
          ],
        },
        {
          type: 'p',
          children: [
            { text: 'Reviewers can ' },
            { text: 'mark specific phrases', highlight: true },
            { text: ' that need attention or ' },
            { text: 'require changes', highlight: true },
            { text: '.' },
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

export const CodeSnippets: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'p',
          children: [
            { text: 'In the function ' },
            { text: 'handleClick()', code: true },
            { text: ', the line ' },
            { text: 'event.preventDefault()', code: true, highlight: true },
            { text: ' is crucial for preventing default behavior.' },
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

export const InteractiveHighlight: Story = {
  args: {
    content: 'Click to edit this highlight',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for editor to render
    await new Promise((resolve) => setTimeout(resolve, 100))

    const editor = canvas.getByRole('textbox')
    const highlight = canvas.getByText('Click to edit this highlight')

    // Click on the highlight
    await userEvent.click(highlight)

    // Add text at the end
    await userEvent.keyboard('{End}')
    await userEvent.type(editor, ' - edited!')

    // Verify the change
    await expect(editor).toHaveTextContent(
      'Click to edit this highlight - edited!'
    )
  },
}

export const CreateHighlight: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'p',
          children: [
            {
              text: 'Select any text in this paragraph and apply highlighting to make it stand out.',
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

    // Select "any text"
    const text = canvas.getByText(/Select any text/)
    await userEvent.click(text)

    // Move to "any text" and select it
    await userEvent.keyboard('{Home}')
    for (let i = 0; i < 7; i++) {
      await userEvent.keyboard('{ArrowRight}')
    }
    await userEvent.keyboard(
      '{Shift>}{ArrowRight}{ArrowRight}{ArrowRight}{ArrowRight}{ArrowRight}{ArrowRight}{ArrowRight}{ArrowRight}{/Shift}'
    )

    // Note: Actual highlighting would depend on toolbar/keyboard implementation
  },
}
