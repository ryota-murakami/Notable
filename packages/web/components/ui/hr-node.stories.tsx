import React from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { Plate, usePlateEditor } from 'platejs/react'
import { HrElement } from './hr-node'
import { BasicNodesKit } from '@/components/editor/plugins/basic-nodes-kit'
import { Editor, EditorContainer } from '@/components/ui/editor'
import { within, userEvent, expect } from '@storybook/test'

// Wrapper component to provide Plate context
const HrDemo = ({
  position = 'middle',
}: {
  position?: 'start' | 'middle' | 'end'
}) => {
  const getValueByPosition = () => {
    switch (position) {
      case 'start':
        return [
          {
            type: 'hr',
            children: [{ text: '' }],
          },
          {
            type: 'p',
            children: [{ text: 'Content after the horizontal rule.' }],
          },
        ]
      case 'end':
        return [
          {
            type: 'p',
            children: [{ text: 'Content before the horizontal rule.' }],
          },
          {
            type: 'hr',
            children: [{ text: '' }],
          },
        ]
      default:
        return [
          {
            type: 'p',
            children: [{ text: 'Content before the horizontal rule.' }],
          },
          {
            type: 'hr',
            children: [{ text: '' }],
          },
          {
            type: 'p',
            children: [{ text: 'Content after the horizontal rule.' }],
          },
        ]
    }
  }

  const editor = usePlateEditor({
    plugins: BasicNodesKit,
    value: getValueByPosition(),
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
  title: 'UI/Nodes/HrNode',
  component: HrDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['start', 'middle', 'end'],
      description: 'Position of the horizontal rule',
    },
  },
  decorators: [
    (Story) => (
      <div className='min-w-[600px] p-8'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof HrDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    position: 'middle',
  },
}

export const AtStart: Story = {
  args: {
    position: 'start',
  },
}

export const AtEnd: Story = {
  args: {
    position: 'end',
  },
}

export const SectionDivider: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'h1',
          children: [{ text: 'Chapter 1: Introduction' }],
        },
        {
          type: 'p',
          children: [{ text: 'This is the first chapter of our story...' }],
        },
        {
          type: 'hr',
          children: [{ text: '' }],
        },
        {
          type: 'h1',
          children: [{ text: 'Chapter 2: Development' }],
        },
        {
          type: 'p',
          children: [{ text: 'The story continues in the second chapter...' }],
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

export const MultipleRules: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'h2',
          children: [{ text: 'Section 1' }],
        },
        {
          type: 'p',
          children: [{ text: 'First section content.' }],
        },
        {
          type: 'hr',
          children: [{ text: '' }],
        },
        {
          type: 'h2',
          children: [{ text: 'Section 2' }],
        },
        {
          type: 'p',
          children: [{ text: 'Second section content.' }],
        },
        {
          type: 'hr',
          children: [{ text: '' }],
        },
        {
          type: 'h2',
          children: [{ text: 'Section 3' }],
        },
        {
          type: 'p',
          children: [{ text: 'Third section content.' }],
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

export const BetweenQuotes: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'blockquote',
          children: [{ text: 'First quote from an important person.' }],
        },
        {
          type: 'hr',
          children: [{ text: '' }],
        },
        {
          type: 'blockquote',
          children: [{ text: 'Another quote from a different person.' }],
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

export const ArticleBreak: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'p',
          children: [
            {
              text: 'This article discusses the importance of visual breaks in long-form content. When readers encounter lengthy texts, strategic placement of horizontal rules can improve readability.',
            },
          ],
        },
        {
          type: 'hr',
          children: [{ text: '' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'After a visual break, readers can refocus their attention on new information. This technique is particularly useful in technical documentation and educational materials.',
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

export const InteractiveHr: Story = {
  args: {
    position: 'middle',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for editor to render
    await new Promise((resolve) => setTimeout(resolve, 100))

    // Find the hr element by its parent div
    const hrParent = canvas.getByRole('separator').parentElement

    // Click on the hr
    if (hrParent) {
      await userEvent.click(hrParent)
    }

    // The hr should show focus ring when selected
    await expect(canvas.getByRole('separator')).toBeInTheDocument()
  },
}

export const CreateHr: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'p',
          children: [{ text: 'Type some content here.' }],
        },
        {
          type: 'p',
          children: [
            {
              text: 'Position cursor and insert horizontal rule to divide sections.',
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

    // Click between the two paragraphs
    const firstPara = canvas.getByText('Type some content here.')
    await userEvent.click(firstPara)
    await userEvent.keyboard('{End}{Enter}')

    // Type three dashes (common markdown syntax for hr)
    await userEvent.type(editor, '---')

    // Note: Actual hr creation would depend on autoformat or toolbar implementation
  },
}

export const ReadOnlyHr: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'p',
          children: [{ text: 'This is a read-only document.' }],
        },
        {
          type: 'hr',
          children: [{ text: '' }],
        },
        {
          type: 'p',
          children: [
            { text: 'The horizontal rule above cannot be selected or edited.' },
          ],
        },
      ],
      readOnly: true,
    })

    return (
      <Plate editor={editor}>
        <EditorContainer>
          <Editor variant='demo' readOnly />
        </EditorContainer>
      </Plate>
    )
  },
}
