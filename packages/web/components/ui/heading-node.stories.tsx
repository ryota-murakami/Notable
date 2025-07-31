import React from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { Plate, usePlateEditor } from 'platejs/react'
import {
  H1Element,
  H2Element,
  H3Element,
  H4Element,
  H5Element,
  H6Element,
  HeadingElement,
} from './heading-node'
import { BasicNodesKit } from '@/components/editor/plugins/basic-nodes-kit'
import { Editor, EditorContainer } from '@/components/ui/editor'
import { expect, within } from '@storybook/test'

// Wrapper component to provide Plate context
const HeadingDemo = ({
  variant,
  content = 'Sample Heading Text',
}: {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  content?: string
}) => {
  const editor = usePlateEditor({
    plugins: BasicNodesKit,
    value: [
      {
        type: variant,
        children: [{ text: content }],
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
}

const meta = {
  title: 'UI/Nodes/HeadingNode',
  component: HeadingDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'Heading level variant',
    },
    content: {
      control: 'text',
      description: 'Heading text content',
    },
  },
  decorators: [
    (Story) => (
      <div className='min-w-[600px] p-8'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof HeadingDemo>

export default meta
type Story = StoryObj<typeof meta>

export const H1: Story = {
  args: {
    variant: 'h1',
    content: 'Heading Level 1',
  },
}

export const H2: Story = {
  args: {
    variant: 'h2',
    content: 'Heading Level 2',
  },
}

export const H3: Story = {
  args: {
    variant: 'h3',
    content: 'Heading Level 3',
  },
}

export const H4: Story = {
  args: {
    variant: 'h4',
    content: 'Heading Level 4',
  },
}

export const H5: Story = {
  args: {
    variant: 'h5',
    content: 'Heading Level 5',
  },
}

export const H6: Story = {
  args: {
    variant: 'h6',
    content: 'Heading Level 6',
  },
}

export const AllHeadings: Story = {
  args: {
    variant: 'h1',
    content: 'All Headings',
  },
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'h1',
          children: [{ text: 'Heading 1 - Largest' }],
        },
        {
          type: 'h2',
          children: [{ text: 'Heading 2 - Large' }],
        },
        {
          type: 'h3',
          children: [{ text: 'Heading 3 - Medium Large' }],
        },
        {
          type: 'h4',
          children: [{ text: 'Heading 4 - Medium' }],
        },
        {
          type: 'h5',
          children: [{ text: 'Heading 5 - Small' }],
        },
        {
          type: 'h6',
          children: [{ text: 'Heading 6 - Smallest' }],
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

export const LongContent: Story = {
  args: {
    variant: 'h1',
    content:
      'This is a Very Long Heading That Might Wrap to Multiple Lines on Smaller Screens',
  },
}

export const WithEmoji: Story = {
  args: {
    variant: 'h2',
    content: '🚀 Heading with Emoji 🎉',
  },
}

export const MixedContent: Story = {
  args: {
    variant: 'h1',
    content: 'Mixed Content Document',
  },
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'h1',
          children: [{ text: 'Document Title' }],
        },
        {
          type: 'p',
          children: [{ text: 'This is a paragraph under the main heading.' }],
        },
        {
          type: 'h2',
          children: [{ text: 'Section 1' }],
        },
        {
          type: 'p',
          children: [{ text: 'Content for section 1.' }],
        },
        {
          type: 'h3',
          children: [{ text: 'Subsection 1.1' }],
        },
        {
          type: 'p',
          children: [{ text: 'Content for subsection 1.1.' }],
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

export const HeadingStyles: Story = {
  args: {
    variant: 'h1',
    content: 'Heading Styles Example',
  },
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'h1',
          children: [
            { text: 'H1: ' },
            { text: 'Bold', bold: true },
            { text: ' and ' },
            { text: 'Italic', italic: true },
            { text: ' Text' },
          ],
        },
        {
          type: 'h2',
          children: [
            { text: 'H2: With ' },
            { text: 'Underlined', underline: true },
            { text: ' Text' },
          ],
        },
        {
          type: 'h3',
          children: [
            { text: 'H3: With ' },
            { text: 'Code', code: true },
            { text: ' Formatting' },
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

export const TestHeadingRendering: Story = {
  args: {
    variant: 'h1',
    content: 'Test Heading',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for editor to render
    await new Promise((resolve) => setTimeout(resolve, 100))

    // Check that the heading is rendered
    const heading = canvas.getByText('Test Heading')
    await expect(heading).toBeInTheDocument()

    // Check that it's an h1 element
    await expect(heading.tagName.toLowerCase()).toBe('h1')

    // Check that it has the correct classes
    await expect(heading).toHaveClass('font-heading')
  },
}
