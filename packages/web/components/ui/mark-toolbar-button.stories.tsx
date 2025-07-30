import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { MarkToolbarButton } from './mark-toolbar-button'
import { ToolbarButton } from './simple-toolbar-button'
import { Plate, usePlateEditor } from 'platejs/react'
import { BasicNodesKit } from '@/components/editor/plugins/basic-nodes-kit'
import { Editor, EditorContainer } from '@/components/ui/editor'
import {
  BoldIcon,
  CodeIcon,
  HighlighterIcon,
  ItalicIcon,
  StrikethroughIcon,
  UnderlineIcon,
} from 'lucide-react'
import { expect, userEvent, within } from '@storybook/test'

const meta = {
  title: 'UI/MarkToolbarButton',
  component: MarkToolbarButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    nodeType: {
      control: 'text',
      description: 'The mark type (e.g., bold, italic, underline)',
    },
    clear: {
      control: 'text',
      description: 'Marks to clear when this mark is applied',
    },
    tooltip: {
      control: 'text',
      description: 'Tooltip text on hover',
    },
  },
  decorators: [
    (Story) => (
      <div className='min-w-[600px] p-8'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MarkToolbarButton>

export default meta
type Story = StoryObj<typeof meta>

// Wrapper component with Plate context
const MarkToolbarDemo = ({
  children,
  initialValue = [
    {
      type: 'p',
      children: [{ text: 'Select some text and click the toolbar buttons' }],
    },
  ],
}: {
  children: React.ReactNode
  initialValue?: any[]
}) => {
  const editor = usePlateEditor({
    plugins: BasicNodesKit,
    value: initialValue,
  })

  return (
    <Plate editor={editor}>
      <div className='space-y-4'>
        <div className='flex items-center gap-1 p-1 border rounded-lg'>
          {children}
        </div>
        <EditorContainer>
          <Editor variant='demo' />
        </EditorContainer>
      </div>
    </Plate>
  )
}

export const BoldButton: Story = {
  args: {
    nodeType: 'bold',
  },
  render: () => (
    <MarkToolbarDemo>
      <MarkToolbarButton nodeType='bold' tooltip='Bold (Cmd+B)'>
        <BoldIcon className='h-4 w-4' />
      </MarkToolbarButton>
    </MarkToolbarDemo>
  ),
}

export const ItalicButton: Story = {
  args: {
    nodeType: 'italic',
  },
  render: () => (
    <MarkToolbarDemo>
      <MarkToolbarButton nodeType='italic' tooltip='Italic (Cmd+I)'>
        <ItalicIcon className='h-4 w-4' />
      </MarkToolbarButton>
    </MarkToolbarDemo>
  ),
}

export const UnderlineButton: Story = {
  args: {
    nodeType: 'underline',
  },
  render: () => (
    <MarkToolbarDemo>
      <MarkToolbarButton nodeType='underline' tooltip='Underline (Cmd+U)'>
        <UnderlineIcon className='h-4 w-4' />
      </MarkToolbarButton>
    </MarkToolbarDemo>
  ),
}

export const MultipleButtons: Story = {
  args: {
    nodeType: 'bold',
  },
  render: () => (
    <MarkToolbarDemo>
      <MarkToolbarButton nodeType='bold' tooltip='Bold (Cmd+B)'>
        <BoldIcon className='h-4 w-4' />
      </MarkToolbarButton>
      <MarkToolbarButton nodeType='italic' tooltip='Italic (Cmd+I)'>
        <ItalicIcon className='h-4 w-4' />
      </MarkToolbarButton>
      <MarkToolbarButton nodeType='underline' tooltip='Underline (Cmd+U)'>
        <UnderlineIcon className='h-4 w-4' />
      </MarkToolbarButton>
      <MarkToolbarButton nodeType='strikethrough' tooltip='Strikethrough'>
        <StrikethroughIcon className='h-4 w-4' />
      </MarkToolbarButton>
      <MarkToolbarButton nodeType='code' tooltip='Code (Cmd+E)'>
        <CodeIcon className='h-4 w-4' />
      </MarkToolbarButton>
    </MarkToolbarDemo>
  ),
}

export const WithFormattedText: Story = {
  args: {
    nodeType: 'bold',
  },
  render: () => (
    <MarkToolbarDemo
      initialValue={[
        {
          type: 'p',
          children: [
            { text: 'This text has ' },
            { text: 'bold', bold: true },
            { text: ', ' },
            { text: 'italic', italic: true },
            { text: ', and ' },
            { text: 'underline', underline: true },
            { text: ' formatting.' },
          ],
        },
      ]}
    >
      <MarkToolbarButton nodeType='bold' tooltip='Bold'>
        <BoldIcon className='h-4 w-4' />
      </MarkToolbarButton>
      <MarkToolbarButton nodeType='italic' tooltip='Italic'>
        <ItalicIcon className='h-4 w-4' />
      </MarkToolbarButton>
      <MarkToolbarButton nodeType='underline' tooltip='Underline'>
        <UnderlineIcon className='h-4 w-4' />
      </MarkToolbarButton>
    </MarkToolbarDemo>
  ),
}

export const WithClearMarks: Story = {
  args: {
    nodeType: 'code',
  },
  render: () => (
    <MarkToolbarDemo
      initialValue={[
        {
          type: 'p',
          children: [
            { text: 'Apply ' },
            { text: 'code formatting', code: true, italic: true },
            { text: ' to clear italic marks' },
          ],
        },
      ]}
    >
      <MarkToolbarButton nodeType='italic' tooltip='Italic'>
        <ItalicIcon className='h-4 w-4' />
      </MarkToolbarButton>
      <MarkToolbarButton
        nodeType='code'
        clear='italic'
        tooltip='Code (clears italic)'
      >
        <CodeIcon className='h-4 w-4' />
      </MarkToolbarButton>
    </MarkToolbarDemo>
  ),
}

// Simple Toolbar Button Stories
export const SimpleToolbarButton: Story = {
  args: {
    nodeType: 'bold',
  },
  render: () => {
    const [pressed, setPressed] = useState(false)

    return (
      <div className='space-y-4'>
        <ToolbarButton
          pressed={pressed}
          onPressedChange={setPressed}
          tooltip='Click to toggle'
        >
          <BoldIcon className='h-4 w-4' />
        </ToolbarButton>
        <p className='text-sm text-muted-foreground'>
          Button is {pressed ? 'pressed' : 'not pressed'}
        </p>
      </div>
    )
  },
}

export const SimpleToolbarButtonGroup: Story = {
  args: {
    nodeType: 'bold',
  },
  render: () => {
    const [activeButtons, setActiveButtons] = useState(new Set<string>())

    const toggleButton = (id: string) => {
      const newActive = new Set(activeButtons)
      if (newActive.has(id)) {
        newActive.delete(id)
      } else {
        newActive.add(id)
      }
      setActiveButtons(newActive)
    }

    return (
      <div className='space-y-4'>
        <div className='flex items-center gap-1 p-1 border rounded-lg'>
          <ToolbarButton
            pressed={activeButtons.has('bold')}
            onPressedChange={() => toggleButton('bold')}
            tooltip='Bold'
          >
            <BoldIcon className='h-4 w-4' />
          </ToolbarButton>
          <ToolbarButton
            pressed={activeButtons.has('italic')}
            onPressedChange={() => toggleButton('italic')}
            tooltip='Italic'
          >
            <ItalicIcon className='h-4 w-4' />
          </ToolbarButton>
          <ToolbarButton
            pressed={activeButtons.has('underline')}
            onPressedChange={() => toggleButton('underline')}
            tooltip='Underline'
          >
            <UnderlineIcon className='h-4 w-4' />
          </ToolbarButton>
          <div className='w-px h-6 bg-border mx-1' />
          <ToolbarButton
            pressed={activeButtons.has('code')}
            onPressedChange={() => toggleButton('code')}
            tooltip='Code'
          >
            <CodeIcon className='h-4 w-4' />
          </ToolbarButton>
          <ToolbarButton
            pressed={activeButtons.has('highlight')}
            onPressedChange={() => toggleButton('highlight')}
            tooltip='Highlight'
          >
            <HighlighterIcon className='h-4 w-4' />
          </ToolbarButton>
        </div>
        <p className='text-sm text-muted-foreground'>
          Active: {Array.from(activeButtons).join(', ') || 'None'}
        </p>
      </div>
    )
  },
}

export const DisabledToolbarButton: Story = {
  args: {
    nodeType: 'bold',
  },
  render: () => (
    <div className='flex items-center gap-2'>
      <ToolbarButton tooltip='Enabled button'>
        <BoldIcon className='h-4 w-4' />
      </ToolbarButton>
      <ToolbarButton disabled tooltip='Disabled button'>
        <ItalicIcon className='h-4 w-4' />
      </ToolbarButton>
      <ToolbarButton pressed disabled tooltip='Pressed and disabled'>
        <UnderlineIcon className='h-4 w-4' />
      </ToolbarButton>
    </div>
  ),
}

export const CustomStyling: Story = {
  args: {
    nodeType: 'bold',
  },
  render: () => (
    <div className='flex items-center gap-2'>
      <ToolbarButton
        className='bg-blue-500 hover:bg-blue-600 text-white'
        tooltip='Custom blue button'
      >
        <BoldIcon className='h-4 w-4' />
      </ToolbarButton>
      <ToolbarButton className='h-10 px-4' tooltip='Larger button'>
        <ItalicIcon className='h-5 w-5' />
        <span className='ml-2'>Italic</span>
      </ToolbarButton>
      <ToolbarButton className='rounded-full' tooltip='Rounded button'>
        <CodeIcon className='h-4 w-4' />
      </ToolbarButton>
    </div>
  ),
}

// Interactive stories
export const InteractiveMarkButton: Story = {
  args: {
    nodeType: 'bold',
  },
  render: () => (
    <MarkToolbarDemo
      initialValue={[
        {
          type: 'p',
          children: [{ text: 'Select this text and click the bold button' }],
        },
      ]}
    >
      <MarkToolbarButton nodeType='bold' tooltip='Bold'>
        <BoldIcon className='h-4 w-4' />
      </MarkToolbarButton>
    </MarkToolbarDemo>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for render
    await new Promise((resolve) => setTimeout(resolve, 100))

    // Select text
    const editor = canvas.getByRole('textbox')
    await userEvent.tripleClick(editor)

    // Click bold button
    const boldButton = canvas.getByRole('button', { name: 'Bold' })
    await userEvent.click(boldButton)

    // Button should be pressed
    await expect(boldButton).toHaveClass(/bg-primary/)
  },
}

export const InteractiveSimpleButton: Story = {
  args: {
    nodeType: 'bold',
  },
  render: () => {
    const [clickCount, setClickCount] = useState(0)

    return (
      <div className='space-y-4'>
        <ToolbarButton
          onClick={() => setClickCount(clickCount + 1)}
          tooltip='Click me!'
        >
          Click Count: {clickCount}
        </ToolbarButton>
      </div>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const button = canvas.getByRole('button')

    // Click multiple times
    await userEvent.click(button)
    await expect(button).toHaveTextContent('Click Count: 1')

    await userEvent.click(button)
    await expect(button).toHaveTextContent('Click Count: 2')

    await userEvent.click(button)
    await expect(button).toHaveTextContent('Click Count: 3')
  },
}

export const TooltipHover: Story = {
  args: {
    nodeType: 'bold',
  },
  render: () => (
    <div className='flex items-center gap-2'>
      <ToolbarButton tooltip='This is a helpful tooltip'>
        Hover me
      </ToolbarButton>
      <ToolbarButton tooltip='Keyboard shortcut: Cmd+B'>
        <BoldIcon className='h-4 w-4' />
      </ToolbarButton>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const button = canvas.getByText('Hover me')

    // Hover to show tooltip
    await userEvent.hover(button)

    // Check title attribute
    await expect(button).toHaveAttribute('title', 'This is a helpful tooltip')
  },
}

export const RealWorldToolbar: Story = {
  args: {
    nodeType: 'bold',
  },
  render: () => (
    <MarkToolbarDemo
      initialValue={[
        {
          type: 'p',
          children: [
            {
              text: 'Try formatting this text with the toolbar buttons above. ',
            },
            { text: 'You can apply ', italic: true },
            { text: 'multiple', bold: true, italic: true },
            { text: ' formats', underline: true, italic: true },
            { text: ' at once.' },
          ],
        },
      ]}
    >
      <MarkToolbarButton nodeType='bold' tooltip='Bold (Cmd+B)'>
        <BoldIcon className='h-4 w-4' />
      </MarkToolbarButton>
      <MarkToolbarButton nodeType='italic' tooltip='Italic (Cmd+I)'>
        <ItalicIcon className='h-4 w-4' />
      </MarkToolbarButton>
      <MarkToolbarButton nodeType='underline' tooltip='Underline (Cmd+U)'>
        <UnderlineIcon className='h-4 w-4' />
      </MarkToolbarButton>
      <MarkToolbarButton nodeType='strikethrough' tooltip='Strikethrough'>
        <StrikethroughIcon className='h-4 w-4' />
      </MarkToolbarButton>
      <div className='w-px h-6 bg-border mx-1' />
      <MarkToolbarButton nodeType='code' tooltip='Code (Cmd+E)'>
        <CodeIcon className='h-4 w-4' />
      </MarkToolbarButton>
      <MarkToolbarButton nodeType='highlight' tooltip='Highlight'>
        <HighlighterIcon className='h-4 w-4' />
      </MarkToolbarButton>
    </MarkToolbarDemo>
  ),
}
