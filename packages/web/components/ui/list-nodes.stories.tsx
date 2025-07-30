import React from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { Plate, usePlateEditor } from 'platejs/react'
import { BulletedListElement } from './bulleted-list-node'
import { ListItemElement } from './list-item-node'
import { BasicNodesKit } from '@/components/editor/plugins/basic-nodes-kit'
import { Editor, EditorContainer } from '@/components/ui/editor'
import { within, userEvent, expect } from '@storybook/test'

// Wrapper component to provide Plate context
const ListDemo = ({
  type = 'ul',
  items = ['First item', 'Second item', 'Third item'],
}: {
  type?: 'ul' | 'ol'
  items?: string[]
}) => {
  const editor = usePlateEditor({
    plugins: BasicNodesKit,
    value: [
      {
        type,
        children: items.map((item) => ({
          type: 'li',
          children: [{ text: item }],
        })),
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
  title: 'UI/Nodes/ListNodes',
  component: ListDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['ul', 'ol'],
      description: 'List type (unordered or ordered)',
    },
    items: {
      control: 'object',
      description: 'List items',
    },
  },
  decorators: [
    (Story) => (
      <div className='min-w-[600px] p-8'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ListDemo>

export default meta
type Story = StoryObj<typeof meta>

export const BulletedList: Story = {
  args: {
    type: 'ul',
    items: ['Apple', 'Banana', 'Orange', 'Grape'],
  },
}

export const NumberedList: Story = {
  args: {
    type: 'ol',
    items: ['First step', 'Second step', 'Third step', 'Fourth step'],
  },
}

export const SingleItem: Story = {
  args: {
    type: 'ul',
    items: ['Only one item'],
  },
}

export const LongItems: Story = {
  args: {
    type: 'ul',
    items: [
      'This is a very long list item that might wrap to multiple lines depending on the container width',
      'Another long item with lots of text to demonstrate how the list handles lengthy content',
      'Short item',
    ],
  },
}

export const NestedLists: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'ul',
          children: [
            {
              type: 'li',
              children: [{ text: 'Parent item 1' }],
            },
            {
              type: 'li',
              children: [{ text: 'Parent item 2' }],
            },
            {
              type: 'ul',
              children: [
                {
                  type: 'li',
                  children: [{ text: 'Nested item 2.1' }],
                },
                {
                  type: 'li',
                  children: [{ text: 'Nested item 2.2' }],
                },
              ],
            },
            {
              type: 'li',
              children: [{ text: 'Parent item 3' }],
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

export const MixedContent: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'h2',
          children: [{ text: 'Shopping List' }],
        },
        {
          type: 'ul',
          children: [
            {
              type: 'li',
              children: [{ text: 'Groceries' }],
            },
            {
              type: 'li',
              children: [{ text: 'Household items' }],
            },
            {
              type: 'li',
              children: [{ text: 'Electronics' }],
            },
          ],
        },
        {
          type: 'h2',
          children: [{ text: 'Recipe Steps' }],
        },
        {
          type: 'ol',
          children: [
            {
              type: 'li',
              children: [{ text: 'Preheat oven to 350°F' }],
            },
            {
              type: 'li',
              children: [{ text: 'Mix dry ingredients' }],
            },
            {
              type: 'li',
              children: [{ text: 'Add wet ingredients' }],
            },
            {
              type: 'li',
              children: [{ text: 'Bake for 25 minutes' }],
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

export const FormattedListItems: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'ul',
          children: [
            {
              type: 'li',
              children: [
                { text: 'Item with ' },
                { text: 'bold', bold: true },
                { text: ' text' },
              ],
            },
            {
              type: 'li',
              children: [
                { text: 'Item with ' },
                { text: 'italic', italic: true },
                { text: ' text' },
              ],
            },
            {
              type: 'li',
              children: [
                { text: 'Item with ' },
                { text: 'code', code: true },
                { text: ' formatting' },
              ],
            },
            {
              type: 'li',
              children: [
                { text: 'Item with ' },
                { text: 'multiple', bold: true, italic: true },
                { text: ' ' },
                { text: 'formats', underline: true },
              ],
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

export const InteractiveList: Story = {
  args: {
    type: 'ul',
    items: ['Click me', 'Edit me', 'Type here'],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for editor to render
    await new Promise((resolve) => setTimeout(resolve, 100))

    const editor = canvas.getByRole('textbox')
    const firstItem = canvas.getByText('Click me')

    // Click on the first item
    await userEvent.click(firstItem)

    // Select all and replace
    await userEvent.keyboard('{Control>}a{/Control}')
    await userEvent.type(editor, 'Clicked and edited!')

    // Verify the change
    await expect(editor).toHaveTextContent('Clicked and edited!')
  },
}

export const ListItemCreation: Story = {
  args: {
    type: 'ul',
    items: ['First item'],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for editor to render
    await new Promise((resolve) => setTimeout(resolve, 100))

    const editor = canvas.getByRole('textbox')
    const firstItem = canvas.getByText('First item')

    // Click at the end of first item
    await userEvent.click(firstItem)
    await userEvent.keyboard('{End}')

    // Press Enter to create new item
    await userEvent.keyboard('{Enter}')

    // Type new item
    await userEvent.type(editor, 'Second item added')

    // Verify both items exist
    await expect(editor).toHaveTextContent('First item')
    await expect(editor).toHaveTextContent('Second item added')
  },
}

export const TodoListStyle: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'h3',
          children: [{ text: "Today's Tasks" }],
        },
        {
          type: 'ul',
          children: [
            {
              type: 'li',
              children: [{ text: '☐ Write documentation' }],
            },
            {
              type: 'li',
              children: [{ text: '☑ Review pull requests' }],
            },
            {
              type: 'li',
              children: [{ text: '☐ Update dependencies' }],
            },
            {
              type: 'li',
              children: [{ text: '☑ Fix bug in production' }],
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
