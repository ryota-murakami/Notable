import React from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { Plate, usePlateEditor } from 'platejs/react'
import { WikiLinkElement } from './wiki-link-node'
import { BasicNodesKit } from '@/components/editor/plugins/basic-nodes-kit'
import { Editor, EditorContainer } from '@/components/ui/editor'
import { within, userEvent, expect } from '@storybook/test'

// Wrapper component to provide Plate context
const WikiLinkDemo = ({
  noteTitle = 'Getting Started',
  noteId = '123',
  linkText = '[[Getting Started]]',
}: {
  noteTitle?: string
  noteId?: string
  linkText?: string
}) => {
  const editor = usePlateEditor({
    plugins: BasicNodesKit,
    value: [
      {
        type: 'p',
        children: [
          { text: 'Check out ' },
          {
            type: 'wikiLink',
            noteId,
            noteTitle,
            url: `/notes/${noteId}`,
            children: [{ text: linkText }],
          },
          { text: ' for more information.' },
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
}

const meta = {
  title: 'UI/Nodes/WikiLinkNode',
  component: WikiLinkDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    noteTitle: {
      control: 'text',
      description: 'Title of the linked note',
    },
    noteId: {
      control: 'text',
      description: 'ID of the linked note',
    },
    linkText: {
      control: 'text',
      description: 'Display text for the link',
    },
  },
  decorators: [
    (Story) => (
      <div className='min-w-[600px] p-8'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof WikiLinkDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    noteTitle: 'Getting Started',
    noteId: '123',
    linkText: '[[Getting Started]]',
  },
}

export const ShortLink: Story = {
  args: {
    noteTitle: 'API',
    noteId: 'api-docs',
    linkText: '[[API]]',
  },
}

export const LongTitle: Story = {
  args: {
    noteTitle: 'Complete Guide to Building Modern Web Applications',
    noteId: 'guide-123',
    linkText: '[[Complete Guide to Building Modern Web Applications]]',
  },
}

export const MultipleLinks: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'p',
          children: [
            { text: 'Start with ' },
            {
              type: 'wikiLink',
              noteId: '1',
              noteTitle: 'Introduction',
              url: '/notes/1',
              children: [{ text: '[[Introduction]]' }],
            },
            { text: ', then read ' },
            {
              type: 'wikiLink',
              noteId: '2',
              noteTitle: 'Core Concepts',
              url: '/notes/2',
              children: [{ text: '[[Core Concepts]]' }],
            },
            { text: ', and finally check ' },
            {
              type: 'wikiLink',
              noteId: '3',
              noteTitle: 'Advanced Topics',
              url: '/notes/3',
              children: [{ text: '[[Advanced Topics]]' }],
            },
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

export const KnowledgeBase: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'h1',
          children: [{ text: 'Personal Knowledge Base' }],
        },
        {
          type: 'h2',
          children: [{ text: 'Programming' }],
        },
        {
          type: 'p',
          children: [
            { text: '• ' },
            {
              type: 'wikiLink',
              noteId: 'js-101',
              noteTitle: 'JavaScript Fundamentals',
              url: '/notes/js-101',
              children: [{ text: '[[JavaScript Fundamentals]]' }],
            },
          ],
        },
        {
          type: 'p',
          children: [
            { text: '• ' },
            {
              type: 'wikiLink',
              noteId: 'react-guide',
              noteTitle: 'React Best Practices',
              url: '/notes/react-guide',
              children: [{ text: '[[React Best Practices]]' }],
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Design' }],
        },
        {
          type: 'p',
          children: [
            { text: '• ' },
            {
              type: 'wikiLink',
              noteId: 'ui-principles',
              noteTitle: 'UI Design Principles',
              url: '/notes/ui-principles',
              children: [{ text: '[[UI Design Principles]]' }],
            },
          ],
        },
        {
          type: 'p',
          children: [
            { text: '• ' },
            {
              type: 'wikiLink',
              noteId: 'color-theory',
              noteTitle: 'Color Theory Basics',
              url: '/notes/color-theory',
              children: [{ text: '[[Color Theory Basics]]' }],
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

export const InlineReferences: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'p',
          children: [
            { text: 'When implementing authentication, consider using ' },
            {
              type: 'wikiLink',
              noteId: 'jwt-auth',
              noteTitle: 'JWT Authentication',
              url: '/notes/jwt-auth',
              children: [{ text: '[[JWT]]' }],
            },
            { text: ' or ' },
            {
              type: 'wikiLink',
              noteId: 'oauth2',
              noteTitle: 'OAuth 2.0 Guide',
              url: '/notes/oauth2',
              children: [{ text: '[[OAuth 2.0]]' }],
            },
            { text: '. For session management, see ' },
            {
              type: 'wikiLink',
              noteId: 'sessions',
              noteTitle: 'Session Management',
              url: '/notes/sessions',
              children: [{ text: '[[Session Management]]' }],
            },
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

export const ExternalLinks: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'p',
          children: [
            { text: 'Internal link: ' },
            {
              type: 'wikiLink',
              noteId: 'internal-note',
              noteTitle: 'Internal Documentation',
              url: '/notes/internal-note',
              children: [{ text: '[[Internal Documentation]]' }],
            },
          ],
        },
        {
          type: 'p',
          children: [
            { text: 'External link: ' },
            {
              type: 'wikiLink',
              noteTitle: 'MDN Web Docs',
              url: 'https://developer.mozilla.org',
              children: [{ text: '[[MDN Web Docs]]' }],
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

export const InteractiveWikiLink: Story = {
  args: {
    noteTitle: 'Click Me',
    noteId: 'test-123',
    linkText: '[[Click Me]]',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for component to render
    await new Promise((resolve) => setTimeout(resolve, 100))

    // Find the wiki link
    const link = canvas.getByText('[[Click Me]]')

    // Hover over the link
    await userEvent.hover(link)

    // Verify the link has proper styling
    await expect(link).toHaveClass(/text-blue/)

    // Verify the title attribute
    await expect(link).toHaveAttribute('title', 'Link to: Click Me')

    // Verify the data attributes
    await expect(link).toHaveAttribute('data-wiki-link', 'true')
    await expect(link).toHaveAttribute('data-note-id', 'test-123')
  },
}

export const CreateWikiLink: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'p',
          children: [{ text: 'Type [[Note Title]] to create a wiki link.' }],
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

    // Click at the end and add new line
    await userEvent.click(editor)
    await userEvent.keyboard('{End}{Enter}')

    // Type wiki link syntax
    await userEvent.type(editor, 'Check out [[My New Note]] for details.')

    // Note: Actual wiki link creation would depend on the editor's parsing implementation
  },
}

export const BrokenLinks: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'p',
          children: [
            { text: 'This links to a ' },
            {
              type: 'wikiLink',
              noteTitle: 'Non-existent Note',
              url: '/notes/404',
              children: [{ text: '[[Non-existent Note]]' }],
            },
            { text: ' that does not exist yet.' },
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
