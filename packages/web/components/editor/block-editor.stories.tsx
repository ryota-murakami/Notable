import type { Meta, StoryObj } from '@storybook/nextjs'
import * as React from 'react'
import { BlockEditor } from './block-editor'
import { expect, userEvent, within } from '@storybook/test'

const meta = {
  title: 'Components/Editor/BlockEditor',
  component: BlockEditor,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    autoFocus: {
      control: { type: 'boolean' },
    },
    className: {
      control: { type: 'text' },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: '500px', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BlockEditor>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Press / for commands...',
    autoFocus: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Check editor is rendered
    const editor = canvas.getByTestId('block-editor')
    await expect(editor).toBeVisible()

    // Check placeholder is visible
    const placeholder = canvas.getByText('Press / for commands...')
    await expect(placeholder).toBeVisible()
  },
}

export const WithInitialContent: Story = {
  args: {
    initialValue: [
      {
        type: 'h1',
        children: [{ text: 'Welcome to Block Editor' }],
      },
      {
        type: 'p',
        children: [
          { text: 'This is a paragraph with some ' },
          { text: 'bold text', bold: true },
          { text: ' and ' },
          { text: 'italic text', italic: true },
          { text: '.' },
        ],
      },
      {
        type: 'blockquote',
        children: [
          { text: 'This is a blockquote. It should have special styling.' },
        ],
      },
      {
        type: 'ul',
        children: [
          { type: 'li', children: [{ text: 'First bullet point' }] },
          { type: 'li', children: [{ text: 'Second bullet point' }] },
          { type: 'li', children: [{ text: 'Third bullet point' }] },
        ],
      },
    ],
  },
}

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    initialValue: [
      {
        type: 'h2',
        children: [{ text: 'Read-Only Mode' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'This editor is in read-only mode. You cannot edit this content.',
          },
        ],
      },
      {
        type: 'ol',
        children: [
          { type: 'li', children: [{ text: 'You cannot type' }] },
          { type: 'li', children: [{ text: 'You cannot use slash commands' }] },
          {
            type: 'li',
            children: [{ text: 'You cannot select and modify text' }],
          },
        ],
      },
    ],
  },
}

export const AutoFocus: Story = {
  args: {
    autoFocus: true,
    placeholder: 'This editor will auto-focus...',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait a bit for auto-focus to happen
    await new Promise((resolve) => setTimeout(resolve, 100))

    // Check that the editor content is focused
    const editor = canvas.getByTestId('block-editor')
    const editableContent = editor.querySelector('[contenteditable="true"]')

    if (editableContent) {
      await expect(document.activeElement).toBe(editableContent)
    }
  },
}

export const SlashCommands: Story = {
  args: {
    placeholder: 'Type / to see available commands',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Find the editor
    const editor = canvas.getByTestId('block-editor')
    const editableContent = editor.querySelector('[contenteditable="true"]')

    if (editableContent) {
      // Click to focus
      await userEvent.click(editableContent)

      // Type slash to trigger command menu
      await userEvent.type(editableContent, '/')

      // Note: The slash command menu implementation is not complete,
      // so we can't test the menu appearance yet
    }
  },
}

export const ComplexDocument: Story = {
  args: {
    initialValue: [
      {
        type: 'h1',
        children: [{ text: 'Project Documentation' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'This is a comprehensive example showing various block types available in the editor.',
          },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Text Formatting' }],
      },
      {
        type: 'p',
        children: [
          { text: 'You can use ' },
          { text: 'bold', bold: true },
          { text: ', ' },
          { text: 'italic', italic: true },
          { text: ', ' },
          { text: 'underline', underline: true },
          { text: ', ' },
          { text: 'strikethrough', strikethrough: true },
          { text: ', and ' },
          { text: 'inline code', code: true },
          { text: ' formatting.' },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Lists' }],
      },
      {
        type: 'h3',
        children: [{ text: 'Unordered List' }],
      },
      {
        type: 'ul',
        children: [
          { type: 'li', children: [{ text: 'First item' }] },
          {
            type: 'li',
            children: [
              { text: 'Second item with ' },
              { text: 'bold text', bold: true },
            ],
          },
          { type: 'li', children: [{ text: 'Third item' }] },
        ],
      },
      {
        type: 'h3',
        children: [{ text: 'Ordered List' }],
      },
      {
        type: 'ol',
        children: [
          { type: 'li', children: [{ text: 'Step one' }] },
          { type: 'li', children: [{ text: 'Step two' }] },
          { type: 'li', children: [{ text: 'Step three' }] },
        ],
      },
      {
        type: 'h2',
        children: [{ text: 'Quotes and Code' }],
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'The best way to predict the future is to invent it. - Alan Kay',
          },
        ],
      },
      {
        type: 'code_block',
        children: [
          { text: 'function hello() {\n  console.log("Hello, World!");\n}' },
        ],
      },
    ],
  },
}

export const WithChangeHandler: Story = {
  render: () => {
    const [content, setContent] = React.useState<any[]>([
      {
        type: 'p',
        children: [
          { text: 'Type something and watch the console for changes...' },
        ],
      },
    ])

    const handleChange = (value: any[]) => {
      setContent(value)
    }

    return (
      <div>
        <BlockEditor
          initialValue={content}
          onChange={handleChange}
          placeholder='Start typing...'
        />
        <div
          style={{
            marginTop: '20px',
            padding: '10px',
            backgroundColor: '#f3f4f6',
            borderRadius: '4px',
          }}
        >
          <strong>Current Content (JSON):</strong>
          <pre style={{ marginTop: '10px', fontSize: '12px' }}>
            {JSON.stringify(content, null, 2)}
          </pre>
        </div>
      </div>
    )
  },
}

export const CustomStyling: Story = {
  args: {
    className: 'custom-block-editor',
    initialValue: [
      {
        type: 'h1',
        children: [{ text: 'Custom Styled Editor' }],
      },
      {
        type: 'p',
        children: [
          {
            text: 'This editor has custom styling applied through className prop.',
          },
        ],
      },
    ],
  },
  decorators: [
    (Story) => (
      <>
        <style>
          {`
            .custom-block-editor {
              border: 2px solid #e5e7eb;
              border-radius: 8px;
              background-color: #fafafa;
            }
            
            .custom-block-editor .block-editor-inner {
              font-family: 'Georgia', serif;
              line-height: 1.8;
            }
            
            .custom-block-editor h1 {
              color: #1e40af;
            }
          `}
        </style>
        <div style={{ minHeight: '500px', padding: '20px' }}>
          <Story />
        </div>
      </>
    ),
  ],
}

export const Playground: Story = {
  render: () => {
    const [readOnly, setReadOnly] = React.useState(false)
    const [autoFocus, setAutoFocus] = React.useState(false)
    const [placeholder, setPlaceholder] = React.useState(
      'Press / for commands...'
    )

    return (
      <div>
        <div
          style={{
            marginBottom: '20px',
            padding: '15px',
            backgroundColor: '#f3f4f6',
            borderRadius: '4px',
          }}
        >
          <h3 style={{ marginTop: 0 }}>Editor Options</h3>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <label>
              <input
                type='checkbox'
                checked={readOnly}
                onChange={(e) => setReadOnly(e.target.checked)}
              />{' '}
              Read Only
            </label>
            <label>
              <input
                type='checkbox'
                checked={autoFocus}
                onChange={(e) => setAutoFocus(e.target.checked)}
              />{' '}
              Auto Focus
            </label>
            <label>
              Placeholder:{' '}
              <input
                type='text'
                value={placeholder}
                onChange={(e) => setPlaceholder(e.target.value)}
                style={{ marginLeft: '5px' }}
              />
            </label>
          </div>
        </div>

        <BlockEditor
          readOnly={readOnly}
          autoFocus={autoFocus}
          placeholder={placeholder}
          onChange={() => {}}
        />
      </div>
    )
  },
}
