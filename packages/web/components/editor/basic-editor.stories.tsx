import React from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { BasicEditor } from './basic-editor'
import { within, userEvent, expect } from '@storybook/test'
import type { Descendant } from 'slate'

const meta = {
  title: 'Editor/BasicEditor',
  component: BasicEditor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when editor is empty',
    },
    readOnly: {
      control: 'boolean',
      description: 'Makes the editor read-only',
    },
    autoFocus: {
      control: 'boolean',
      description: 'Auto-focus the editor on mount',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  decorators: [
    (Story) => (
      <div className='min-w-[800px] p-8'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BasicEditor>

export default meta
type Story = StoryObj<typeof meta>

const simpleValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: 'A simple paragraph with some text.' }],
  },
]

const richValue: Descendant[] = [
  {
    type: 'heading-one',
    children: [{ text: 'Welcome to the Basic Editor' }],
  },
  {
    type: 'paragraph',
    children: [
      { text: 'This editor supports ' },
      { text: 'bold', bold: true },
      { text: ', ' },
      { text: 'italic', italic: true },
      { text: ', ' },
      { text: 'underline', underline: true },
      { text: ', ' },
      { text: 'strikethrough', strikethrough: true },
      { text: ', and ' },
      { text: 'code', code: true },
      { text: ' formatting.' },
    ],
  },
  {
    type: 'heading-two',
    children: [{ text: 'Block Types' }],
  },
  {
    type: 'paragraph',
    children: [{ text: 'The editor also supports various block types:' }],
  },
  {
    type: 'bulleted-list',
    children: [
      {
        type: 'list-item',
        children: [{ text: 'Bulleted lists' }],
      },
      {
        type: 'list-item',
        children: [{ text: 'With multiple items' }],
      },
    ],
  },
  {
    type: 'numbered-list',
    children: [
      {
        type: 'list-item',
        children: [{ text: 'Numbered lists' }],
      },
      {
        type: 'list-item',
        children: [{ text: 'Also with multiple items' }],
      },
    ],
  },
  {
    type: 'block-quote',
    children: [
      {
        text: 'And of course, block quotes for highlighting important text.',
      },
    ],
  },
]

export const Default: Story = {
  args: {
    placeholder: 'Start writing...',
  },
}

export const WithInitialContent: Story = {
  args: {
    initialValue: simpleValue,
    placeholder: 'Start writing...',
  },
}

export const RichContent: Story = {
  args: {
    initialValue: richValue,
    placeholder: 'Start writing...',
  },
}

export const ReadOnly: Story = {
  args: {
    initialValue: richValue,
    readOnly: true,
    placeholder: 'This editor is read-only',
  },
}

export const AutoFocus: Story = {
  args: {
    autoFocus: true,
    placeholder: 'This editor auto-focuses on mount',
  },
}

export const CustomStyling: Story = {
  args: {
    className: 'shadow-lg',
    placeholder: 'Editor with custom shadow styling',
  },
}

export const WithOnChange: Story = {
  args: {
    placeholder: 'Type to see changes logged in console',
    onChange: (value) => {
      console.info('Editor value changed:', value)
    },
  },
}

export const InteractiveToolbar: Story = {
  args: {
    initialValue: [
      {
        type: 'paragraph',
        children: [{ text: 'Select some text and use the toolbar buttons' }],
      },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for editor to be ready
    await new Promise((resolve) => setTimeout(resolve, 100))

    // Find the editable area
    const editor = canvas.getByRole('textbox')

    // Select all text
    await userEvent.tripleClick(editor)

    // Click bold button
    const boldButton = canvas.getByLabelText('Bold')
    await userEvent.click(boldButton)

    // Type some new text
    await userEvent.type(editor, ' - Now with bold text!')

    // Verify the bold button is pressed
    await expect(boldButton).toHaveAttribute('data-state', 'on')
  },
}

export const ListCreation: Story = {
  args: {
    placeholder: 'Create lists using the toolbar',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for editor to be ready
    await new Promise((resolve) => setTimeout(resolve, 100))

    const editor = canvas.getByRole('textbox')

    // Type some text
    await userEvent.type(editor, 'First item')

    // Click bullet list button
    const bulletListButton = canvas.getByLabelText('Bullet List')
    await userEvent.click(bulletListButton)

    // Press Enter to create new list item
    await userEvent.keyboard('{Enter}')
    await userEvent.type(editor, 'Second item')

    // Verify the list button is active
    await expect(bulletListButton).toHaveAttribute('data-state', 'on')
  },
}

export const UndoRedo: Story = {
  args: {
    placeholder: 'Test undo/redo functionality',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for editor to be ready
    await new Promise((resolve) => setTimeout(resolve, 100))

    const editor = canvas.getByRole('textbox')
    const undoButton = canvas.getByLabelText('Undo')
    const redoButton = canvas.getByLabelText('Redo')

    // Type some text
    await userEvent.type(editor, 'Hello world')

    // Click undo
    await userEvent.click(undoButton)

    // Click redo
    await userEvent.click(redoButton)

    // Verify text is back
    await expect(editor).toHaveTextContent('Hello world')
  },
}
