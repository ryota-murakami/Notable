import React from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { Plate, usePlateEditor } from 'platejs/react'
import { CodeLeaf } from './code-node'
import { BasicNodesKit } from '@/components/editor/plugins/basic-nodes-kit'
import { Editor, EditorContainer } from '@/components/ui/editor'
import { expect, userEvent, within } from '@storybook/test'

// Wrapper component to provide Plate context
const CodeDemo = ({
  content = 'console.log("Hello, World!")',
  inline = true,
}: {
  content?: string
  inline?: boolean
}) => {
  const value = inline
    ? [
        {
          type: 'p',
          children: [
            { text: 'Here is some inline ' },
            { text: content, code: true },
            { text: ' in a paragraph.' },
          ],
        },
      ]
    : [
        {
          type: 'p',
          children: [{ text: 'Function example:' }],
        },
        {
          type: 'p',
          children: [{ text: 'const add = (a, b) => a + b', code: true }],
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
  title: 'UI/Nodes/CodeNode',
  component: CodeDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: 'Code content',
    },
    inline: {
      control: 'boolean',
      description: 'Show as inline code',
    },
  },
  decorators: [
    (Story) => (
      <div className='min-w-[600px] p-8'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CodeDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    content: 'const example = true',
    inline: true,
  },
}

export const InlineCode: Story = {
  args: {
    content: 'npm install',
    inline: true,
  },
}

export const LongCode: Story = {
  args: {
    content: 'Array.from({ length: 10 }, (_, i) => i * 2).filter(n => n > 5)',
    inline: true,
  },
}

export const VariableNames: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'p',
          children: [
            { text: 'Use ' },
            { text: 'useState', code: true },
            { text: ' for state, ' },
            { text: 'useEffect', code: true },
            { text: ' for side effects, and ' },
            { text: 'useMemo', code: true },
            { text: ' for memoization.' },
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

export const FileNames: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'p',
          children: [
            { text: 'Edit ' },
            { text: 'package.json', code: true },
            { text: ' to add dependencies, update ' },
            { text: '.env', code: true },
            { text: ' for environment variables, and check ' },
            { text: 'README.md', code: true },
            { text: ' for documentation.' },
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

export const Commands: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'p',
          children: [
            { text: 'Run ' },
            { text: 'git status', code: true },
            { text: ' to check changes, ' },
            { text: 'git add .', code: true },
            { text: ' to stage all files, and ' },
            { text: 'git commit -m "message"', code: true },
            { text: ' to commit.' },
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
          children: [{ text: 'Installation Guide' }],
        },
        {
          type: 'p',
          children: [
            { text: 'First, install the package using ' },
            { text: 'npm', code: true },
            { text: ':' },
          ],
        },
        {
          type: 'p',
          children: [{ text: 'npm install my-package', code: true }],
        },
        {
          type: 'p',
          children: [
            { text: 'Then import it in your ' },
            { text: 'index.js', code: true },
            { text: ' file:' },
          ],
        },
        {
          type: 'p',
          children: [
            { text: 'import MyPackage from "my-package"', code: true },
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

export const WithFormatting: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'p',
          children: [
            { text: 'The ' },
            { text: 'main()', code: true, bold: true },
            { text: ' function is the ' },
            { text: 'entry point', italic: true },
            { text: ' of the program.' },
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

export const InteractiveCode: Story = {
  args: {
    content: 'editable code',
    inline: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for editor to render
    await new Promise((resolve) => setTimeout(resolve, 100))

    const editor = canvas.getByRole('textbox')
    const codeElement = canvas.getByText('editable code')

    // Click on the code
    await userEvent.click(codeElement)

    // Select the code text
    await userEvent.tripleClick(codeElement)

    // Replace with new code
    await userEvent.type(editor, 'updated code')

    // Verify the change
    await expect(editor).toHaveTextContent('updated code')
  },
}

export const CreateInlineCode: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'p',
          children: [
            {
              text: 'Select text and apply code formatting to make it look like code.',
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
    await userEvent.type(editor, 'Type this.code to format it')

    // Select "this.code"
    await userEvent.keyboard('{Home}')
    await userEvent.keyboard(
      '{Shift>}{ArrowRight}{ArrowRight}{ArrowRight}{ArrowRight}{ArrowRight}{ArrowRight}{ArrowRight}{ArrowRight}{ArrowRight}{/Shift}'
    )

    // Note: Actual code formatting would depend on toolbar/keyboard implementation
  },
}
