import type { Meta, StoryObj } from '@storybook/nextjs'
import { Plate, usePlateEditor } from 'platejs/react'
import { BasicMarksKit } from './basic-marks-kit'
import { Editor, EditorContainer } from '@/components/ui/editor'

const meta: Meta = {
  title: 'Components/Editor/Plugins/BasicMarksKit',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A collection of basic text mark plugins for Plate.js including bold, italic, underline, code, strikethrough, highlight, and keyboard formatting. Essential for rich text formatting.',
      },
    },
  },
}

export default meta
type Story = StoryObj

// Demo editor showcasing all mark types
function MarksDemo() {
  const initialValue = [
    {
      type: 'p',
      children: [
        { text: 'This paragraph demonstrates all available text marks. ' },
        { text: 'Bold text', bold: true },
        { text: ' for emphasis, ' },
        { text: 'italic text', italic: true },
        { text: ' for style, ' },
        { text: 'underlined text', underline: true },
        { text: ' for importance.' },
      ],
    },
    {
      type: 'p',
      children: [
        { text: 'You can also use ' },
        { text: 'inline code', code: true },
        { text: ' for technical content, ' },
        { text: 'strikethrough text', strikethrough: true },
        { text: ' for corrections, and ' },
        { text: 'highlighted text', highlight: true },
        { text: ' to draw attention.' },
      ],
    },
    {
      type: 'p',
      children: [
        { text: 'Keyboard shortcuts like ' },
        { text: 'Ctrl+B', kbd: true },
        { text: ' for bold, ' },
        { text: 'Ctrl+I', kbd: true },
        { text: ' for italic, and ' },
        { text: 'Ctrl+U', kbd: true },
        { text: ' for underline make formatting quick and easy.' },
      ],
    },
    {
      type: 'p',
      children: [
        { text: 'Marks can be ' },
        { text: 'combined', bold: true, italic: true },
        { text: ' for ' },
        {
          text: 'multiple effects',
          bold: true,
          underline: true,
          highlight: true,
        },
        { text: ' or used to create ' },
        { text: 'complex formatting', italic: true, code: true },
        { text: ' as needed.' },
      ],
    },
  ]

  const editor = usePlateEditor({
    plugins: BasicMarksKit,
    value: initialValue,
  })

  return (
    <div className='prose dark:prose-invert max-w-none'>
      <Plate editor={editor}>
        <EditorContainer>
          <Editor variant='demo' readOnly />
        </EditorContainer>
      </Plate>
    </div>
  )
}

export const Default: Story = {
  render: () => <MarksDemo />,
}

export const BoldAndItalic: Story = {
  render: () => {
    const value = [
      {
        type: 'p',
        children: [
          { text: 'Use ' },
          { text: 'bold', bold: true },
          { text: ' to make text stand out and ' },
          { text: 'italic', italic: true },
          { text: ' for emphasis or quotes.' },
        ],
      },
      {
        type: 'p',
        children: [
          { text: 'You can ' },
          { text: 'combine both', bold: true, italic: true },
          { text: ' for extra emphasis when needed.' },
        ],
      },
    ]

    const editor = usePlateEditor({
      plugins: BasicMarksKit,
      value,
    })

    return (
      <div className='prose dark:prose-invert max-w-none'>
        <Plate editor={editor}>
          <EditorContainer>
            <Editor variant='demo' readOnly />
          </EditorContainer>
        </Plate>
      </div>
    )
  },
}

export const CodeAndKeyboard: Story = {
  render: () => {
    const value = [
      {
        type: 'p',
        children: [
          { text: 'Use ' },
          { text: 'inline code', code: true },
          { text: ' for variable names like ' },
          { text: 'const userName', code: true },
          { text: ' or function calls like ' },
          { text: 'getData()', code: true },
          { text: '.' },
        ],
      },
      {
        type: 'p',
        children: [
          { text: 'Document keyboard shortcuts with the kbd mark: ' },
          { text: 'Cmd+S', kbd: true },
          { text: ' to save, ' },
          { text: 'Cmd+Shift+P', kbd: true },
          { text: ' for command palette.' },
        ],
      },
    ]

    const editor = usePlateEditor({
      plugins: BasicMarksKit,
      value,
    })

    return (
      <div className='prose dark:prose-invert max-w-none'>
        <Plate editor={editor}>
          <EditorContainer>
            <Editor variant='demo' readOnly />
          </EditorContainer>
        </Plate>
      </div>
    )
  },
}

export const EditingMarks: Story = {
  render: () => {
    const value = [
      {
        type: 'p',
        children: [
          { text: 'When editing, use ' },
          { text: 'strikethrough', strikethrough: true },
          { text: ' to show removed content and ' },
          { text: 'highlight', highlight: true },
          { text: ' to mark important changes.' },
        ],
      },
      {
        type: 'p',
        children: [
          { text: 'This is especially useful for ' },
          { text: 'document revisions', underline: true },
          { text: ' where you need to show ' },
          { text: 'what was removed', strikethrough: true },
          { text: ' and ' },
          { text: 'what was added', highlight: true },
          { text: '.' },
        ],
      },
    ]

    const editor = usePlateEditor({
      plugins: BasicMarksKit,
      value,
    })

    return (
      <div className='prose dark:prose-invert max-w-none'>
        <Plate editor={editor}>
          <EditorContainer>
            <Editor variant='demo' readOnly />
          </EditorContainer>
        </Plate>
      </div>
    )
  },
}

export const CombinedMarks: Story = {
  render: () => {
    const value = [
      {
        type: 'p',
        children: [
          { text: 'Marks can be combined creatively: ' },
          { text: 'bold + italic', bold: true, italic: true },
          { text: ', ' },
          { text: 'underline + highlight', underline: true, highlight: true },
          { text: ', or even ' },
          { text: 'all three!', bold: true, italic: true, underline: true },
        ],
      },
      {
        type: 'p',
        children: [
          { text: 'Technical documentation might use ' },
          { text: 'highlighted code', code: true, highlight: true },
          { text: ' or ' },
          { text: 'bold keyboard shortcuts', kbd: true, bold: true },
          { text: ' for emphasis.' },
        ],
      },
    ]

    const editor = usePlateEditor({
      plugins: BasicMarksKit,
      value,
    })

    return (
      <div className='prose dark:prose-invert max-w-none'>
        <Plate editor={editor}>
          <EditorContainer>
            <Editor variant='demo' readOnly />
          </EditorContainer>
        </Plate>
      </div>
    )
  },
}

export const RealWorldExample: Story = {
  render: () => {
    const value = [
      {
        type: 'h2',
        children: [{ text: 'Getting Started with Notable' }],
      },
      {
        type: 'p',
        children: [
          { text: 'To create a new note, press ' },
          { text: 'Cmd+N', kbd: true },
          { text: ' or click the ' },
          { text: 'New Note', bold: true },
          { text: ' button. You can format text using ' },
          { text: 'keyboard shortcuts', italic: true },
          { text: ' or the toolbar.' },
        ],
      },
      {
        type: 'p',
        children: [
          { text: 'Notable supports ' },
          { text: 'Markdown syntax', code: true },
          { text: ' and provides ' },
          { text: 'real-time collaboration', highlight: true },
          { text: '. ' },
          { text: 'Beta features', strikethrough: true },
          { text: ' ' },
          { text: 'All features', underline: true },
          { text: ' are now available to all users!' },
        ],
      },
    ]

    const editor = usePlateEditor({
      plugins: BasicMarksKit,
      value,
    })

    return (
      <div className='prose dark:prose-invert max-w-none'>
        <Plate editor={editor}>
          <EditorContainer>
            <Editor variant='demo' readOnly />
          </EditorContainer>
        </Plate>
      </div>
    )
  },
}
