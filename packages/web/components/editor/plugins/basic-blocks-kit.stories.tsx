import type { Meta, StoryObj } from '@storybook/nextjs'
import { PlateEditor } from '@platejs/react'
import { BasicBlocksKit } from './basic-blocks-kit'

const meta: Meta = {
  title: 'Components/Editor/Plugins/BasicBlocksKit',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A collection of basic block-level Plate.js plugins including headings (H1-H6), paragraphs, blockquotes, and horizontal rules. This kit provides the foundational block elements for rich text editing.',
      },
    },
  },
}

export default meta
type Story = StoryObj

// Demo editor to showcase the plugin
function EditorDemo() {
  const initialValue = [
    {
      type: 'h1',
      children: [{ text: 'Heading 1 - Main Title' }],
    },
    {
      type: 'h2',
      children: [{ text: 'Heading 2 - Section Title' }],
    },
    {
      type: 'h3',
      children: [{ text: 'Heading 3 - Subsection' }],
    },
    {
      type: 'p',
      children: [
        {
          text: 'This is a regular paragraph with some text content. The BasicBlocksKit provides all the essential block-level elements you need for content creation.',
        },
      ],
    },
    {
      type: 'blockquote',
      children: [
        {
          text: 'This is a blockquote. Use it for quotes, callouts, or important notes that should stand out from regular text.',
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
          text: 'Text after horizontal rule. All these elements are styled consistently with the Notable design system.',
        },
      ],
    },
  ]

  return (
    <div className='prose dark:prose-invert max-w-none'>
      <PlateEditor
        initialValue={initialValue}
        plugins={BasicBlocksKit}
        readOnly
      />
    </div>
  )
}

export const Default: Story = {
  render: () => <EditorDemo />,
}

export const HeadingsOnly: Story = {
  render: () => {
    const value = [
      { type: 'h1', children: [{ text: 'H1: The Largest Heading' }] },
      { type: 'h2', children: [{ text: 'H2: Major Section' }] },
      { type: 'h3', children: [{ text: 'H3: Subsection' }] },
      { type: 'h4', children: [{ text: 'H4: Sub-subsection' }] },
      { type: 'h5', children: [{ text: 'H5: Minor Heading' }] },
      { type: 'h6', children: [{ text: 'H6: The Smallest Heading' }] },
    ]

    return (
      <div className='prose dark:prose-invert max-w-none'>
        <PlateEditor initialValue={value} plugins={BasicBlocksKit} readOnly />
      </div>
    )
  },
}

export const ParagraphsAndBlockquotes: Story = {
  render: () => {
    const value = [
      {
        type: 'p',
        children: [
          {
            text: 'Regular paragraphs form the backbone of any document. They contain the main body of text and can include inline formatting.',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: '"The best way to predict the future is to invent it." - Alan Kay',
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Blockquotes are perfect for highlighting important quotes or key information that needs emphasis.',
          },
        ],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: "Pro tip: Use blockquotes sparingly for maximum impact. They draw the reader's attention and break up the flow of regular text.",
          },
        ],
      },
    ]

    return (
      <div className='prose dark:prose-invert max-w-none'>
        <PlateEditor initialValue={value} plugins={BasicBlocksKit} readOnly />
      </div>
    )
  },
}

export const DocumentStructure: Story = {
  render: () => {
    const value = [
      { type: 'h1', children: [{ text: 'Getting Started with Notable' }] },
      {
        type: 'p',
        children: [
          {
            text: 'Welcome to Notable, a premium note-taking application designed for the modern knowledge worker.',
          },
        ],
      },

      { type: 'h2', children: [{ text: 'Key Features' }] },
      {
        type: 'p',
        children: [
          {
            text: 'Notable offers a rich set of features to enhance your writing experience:',
          },
        ],
      },

      { type: 'h3', children: [{ text: 'Rich Text Editing' }] },
      {
        type: 'p',
        children: [
          { text: 'Full support for formatting, lists, tables, and more.' },
        ],
      },

      { type: 'h3', children: [{ text: 'Real-time Collaboration' }] },
      {
        type: 'p',
        children: [
          {
            text: 'Work together with your team in real-time with conflict-free editing.',
          },
        ],
      },

      { type: 'hr', children: [{ text: '' }] },

      { type: 'h2', children: [{ text: 'Getting Help' }] },
      {
        type: 'blockquote',
        children: [
          {
            text: 'Need assistance? Check out our documentation or contact support.',
          },
        ],
      },
    ]

    return (
      <div className='prose dark:prose-invert max-w-none'>
        <PlateEditor initialValue={value} plugins={BasicBlocksKit} readOnly />
      </div>
    )
  },
}

export const EmptyBlocks: Story = {
  render: () => {
    const value = [
      { type: 'h1', children: [{ text: '' }] },
      { type: 'p', children: [{ text: '' }] },
      { type: 'blockquote', children: [{ text: '' }] },
      { type: 'hr', children: [{ text: '' }] },
    ]

    return (
      <div className='border rounded-lg p-4'>
        <p className='text-sm text-muted-foreground mb-4'>
          Empty blocks (click in the editor to see placeholders):
        </p>
        <div className='prose dark:prose-invert max-w-none'>
          <PlateEditor
            initialValue={value}
            plugins={BasicBlocksKit}
            placeholder='Start typing...'
          />
        </div>
      </div>
    )
  },
}
