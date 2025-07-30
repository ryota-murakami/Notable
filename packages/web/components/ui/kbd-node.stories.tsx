import React from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { Plate, usePlateEditor } from 'platejs/react'
import { KbdLeaf } from './kbd-node'
import { BasicNodesKit } from '@/components/editor/plugins/basic-nodes-kit'
import { Editor, EditorContainer } from '@/components/ui/editor'
import { expect, userEvent, within } from '@storybook/test'

// Wrapper component to provide Plate context
const KbdDemo = ({
  keys = 'Ctrl+C',
  description = 'to copy',
}: {
  keys?: string
  description?: string
}) => {
  const editor = usePlateEditor({
    plugins: BasicNodesKit,
    value: [
      {
        type: 'p',
        children: [
          { text: 'Press ' },
          { text: keys, kbd: true },
          { text: ` ${description}` },
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
  title: 'UI/Nodes/KbdNode',
  component: KbdDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    keys: {
      control: 'text',
      description: 'Keyboard keys or shortcut',
    },
    description: {
      control: 'text',
      description: 'Description of the action',
    },
  },
  decorators: [
    (Story) => (
      <div className='min-w-[600px] p-8'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof KbdDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    keys: 'Ctrl+C',
    description: 'to copy',
  },
}

export const SingleKey: Story = {
  args: {
    keys: 'Enter',
    description: 'to submit',
  },
}

export const ModifierKeys: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'p',
          children: [
            { text: 'Common modifier keys: ' },
            { text: 'Ctrl', kbd: true },
            { text: ', ' },
            { text: 'Alt', kbd: true },
            { text: ', ' },
            { text: 'Shift', kbd: true },
            { text: ', and ' },
            { text: 'Cmd', kbd: true },
            { text: ' (on Mac).' },
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

export const CommonShortcuts: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'h3',
          children: [{ text: 'Keyboard Shortcuts' }],
        },
        {
          type: 'p',
          children: [{ text: 'Save: ' }, { text: 'Ctrl+S', kbd: true }],
        },
        {
          type: 'p',
          children: [{ text: 'Undo: ' }, { text: 'Ctrl+Z', kbd: true }],
        },
        {
          type: 'p',
          children: [
            { text: 'Redo: ' },
            { text: 'Ctrl+Y', kbd: true },
            { text: ' or ' },
            { text: 'Ctrl+Shift+Z', kbd: true },
          ],
        },
        {
          type: 'p',
          children: [{ text: 'Select All: ' }, { text: 'Ctrl+A', kbd: true }],
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

export const NavigationKeys: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'p',
          children: [
            { text: 'Navigate with ' },
            { text: '↑', kbd: true },
            { text: ' ' },
            { text: '↓', kbd: true },
            { text: ' ' },
            { text: '←', kbd: true },
            { text: ' ' },
            { text: '→', kbd: true },
            { text: ' arrow keys.' },
          ],
        },
        {
          type: 'p',
          children: [
            { text: 'Jump words with ' },
            { text: 'Ctrl+←', kbd: true },
            { text: ' and ' },
            { text: 'Ctrl+→', kbd: true },
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

export const FunctionKeys: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'p',
          children: [
            { text: 'Function keys: ' },
            { text: 'F1', kbd: true },
            { text: ' for help, ' },
            { text: 'F2', kbd: true },
            { text: ' to rename, ' },
            { text: 'F3', kbd: true },
            { text: ' to search, ' },
            { text: 'F5', kbd: true },
            { text: ' to refresh.' },
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

export const ComplexCombinations: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'p',
          children: [
            { text: 'Complex shortcuts: ' },
            { text: 'Ctrl+Shift+P', kbd: true },
            { text: ' for command palette, ' },
            { text: 'Ctrl+K Ctrl+S', kbd: true },
            { text: ' for keyboard shortcuts.' },
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

export const InlineInstructions: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'p',
          children: [
            { text: 'To format text as bold, select it and press ' },
            { text: 'Ctrl+B', kbd: true },
            { text: '. For italic, use ' },
            { text: 'Ctrl+I', kbd: true },
            { text: ', and for underline, press ' },
            { text: 'Ctrl+U', kbd: true },
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

export const PlatformSpecific: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'h3',
          children: [{ text: 'Platform-Specific Keys' }],
        },
        {
          type: 'p',
          children: [
            { text: 'Windows/Linux: ' },
            { text: 'Ctrl', kbd: true },
            { text: ' + ' },
            { text: 'C', kbd: true },
          ],
        },
        {
          type: 'p',
          children: [
            { text: 'macOS: ' },
            { text: '⌘', kbd: true },
            { text: ' + ' },
            { text: 'C', kbd: true },
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

export const InteractiveKbd: Story = {
  args: {
    keys: 'Space',
    description: 'to continue',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for editor to render
    await new Promise((resolve) => setTimeout(resolve, 100))

    const editor = canvas.getByRole('textbox')
    const kbdElement = canvas.getByText('Space')

    // Click on the kbd element
    await userEvent.click(kbdElement)

    // The kbd should be styled distinctively
    await expect(kbdElement).toHaveClass(/kbd/)

    // Add text after
    await userEvent.keyboard('{End}')
    await userEvent.type(editor, ' or click to proceed')

    // Verify the addition
    await expect(editor).toHaveTextContent(
      'Press Space to continue or click to proceed'
    )
  },
}

export const CreateKbd: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'p',
          children: [
            {
              text: 'Type keyboard shortcuts and format them to show as keys.',
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

    // Add new text
    await userEvent.click(editor)
    await userEvent.keyboard('{End}{Enter}')
    await userEvent.type(editor, 'Press Ctrl+S to save')

    // Select "Ctrl+S"
    await userEvent.keyboard('{Home}')
    for (let i = 0; i < 6; i++) {
      await userEvent.keyboard('{ArrowRight}')
    }
    await userEvent.keyboard('{Shift>}')
    for (let i = 0; i < 6; i++) {
      await userEvent.keyboard('{ArrowRight}')
    }
    await userEvent.keyboard('{/Shift}')

    // Note: Actual kbd formatting would depend on toolbar/keyboard implementation
  },
}
