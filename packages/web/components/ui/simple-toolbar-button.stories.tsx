import type { Meta, StoryObj } from '@storybook/nextjs'
import { ToolbarButton } from './simple-toolbar-button'
import { expect, userEvent, within } from '@storybook/test'
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Code,
  Italic,
  Link,
  List,
  ListOrdered,
  Quote,
  Strikethrough,
  Underline,
} from 'lucide-react'
import * as React from 'react'

const meta: Meta<typeof ToolbarButton> = {
  title: 'Components/UI/ToolbarButton',
  component: ToolbarButton,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A toolbar button component for editor toolbars. Supports toggle states and tooltips.',
      },
    },
  },
  argTypes: {
    pressed: {
      control: 'boolean',
      description: 'Whether the button is in pressed state',
    },
    tooltip: {
      control: 'text',
      description: 'Tooltip text shown on hover',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
  },
}

export default meta
type Story = StoryObj<typeof ToolbarButton>

export const Default: Story = {
  args: {
    children: 'B',
    tooltip: 'Bold',
  },
}

export const WithIcon: Story = {
  args: {
    children: <Bold className='h-4 w-4' />,
    tooltip: 'Bold (Cmd+B)',
  },
}

export const Pressed: Story = {
  args: {
    children: <Bold className='h-4 w-4' />,
    pressed: true,
    tooltip: 'Bold (Cmd+B)',
  },
}

export const Disabled: Story = {
  args: {
    children: <Bold className='h-4 w-4' />,
    disabled: true,
    tooltip: 'Bold (disabled)',
  },
}

function ToggleExample() {
  const [pressed, setPressed] = React.useState(false)

  return (
    <ToolbarButton
      pressed={pressed}
      onPressedChange={setPressed}
      tooltip='Toggle Bold'
    >
      <Bold className='h-4 w-4' />
    </ToolbarButton>
  )
}

export const ToggleState: Story = {
  render: () => <ToggleExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')

    // Initial state should be unpressed
    await expect(button).toHaveClass(/ghost/)

    // Click to toggle on
    await userEvent.click(button)
    await expect(button).not.toHaveClass(/ghost/)

    // Click to toggle off
    await userEvent.click(button)
    await expect(button).toHaveClass(/ghost/)
  },
}

export const FormattingToolbar: Story = {
  render: () => {
    const [formats, setFormats] = React.useState({
      bold: false,
      italic: false,
      underline: false,
      strikethrough: false,
      code: false,
    })

    const toggleFormat = (format: keyof typeof formats) => {
      setFormats((prev) => ({ ...prev, [format]: !prev[format] }))
    }

    return (
      <div className='flex gap-1 p-2 border rounded-md'>
        <ToolbarButton
          pressed={formats.bold}
          onPressedChange={() => toggleFormat('bold')}
          tooltip='Bold (Cmd+B)'
        >
          <Bold className='h-4 w-4' />
        </ToolbarButton>
        <ToolbarButton
          pressed={formats.italic}
          onPressedChange={() => toggleFormat('italic')}
          tooltip='Italic (Cmd+I)'
        >
          <Italic className='h-4 w-4' />
        </ToolbarButton>
        <ToolbarButton
          pressed={formats.underline}
          onPressedChange={() => toggleFormat('underline')}
          tooltip='Underline (Cmd+U)'
        >
          <Underline className='h-4 w-4' />
        </ToolbarButton>
        <ToolbarButton
          pressed={formats.strikethrough}
          onPressedChange={() => toggleFormat('strikethrough')}
          tooltip='Strikethrough'
        >
          <Strikethrough className='h-4 w-4' />
        </ToolbarButton>
        <ToolbarButton
          pressed={formats.code}
          onPressedChange={() => toggleFormat('code')}
          tooltip='Code'
        >
          <Code className='h-4 w-4' />
        </ToolbarButton>
      </div>
    )
  },
}

export const AlignmentToolbar: Story = {
  render: () => {
    const [alignment, setAlignment] = React.useState<
      'left' | 'center' | 'right'
    >('left')

    return (
      <div className='flex gap-1 p-2 border rounded-md'>
        <ToolbarButton
          pressed={alignment === 'left'}
          onPressedChange={() => setAlignment('left')}
          tooltip='Align Left'
        >
          <AlignLeft className='h-4 w-4' />
        </ToolbarButton>
        <ToolbarButton
          pressed={alignment === 'center'}
          onPressedChange={() => setAlignment('center')}
          tooltip='Align Center'
        >
          <AlignCenter className='h-4 w-4' />
        </ToolbarButton>
        <ToolbarButton
          pressed={alignment === 'right'}
          onPressedChange={() => setAlignment('right')}
          tooltip='Align Right'
        >
          <AlignRight className='h-4 w-4' />
        </ToolbarButton>
      </div>
    )
  },
}

export const MixedToolbar: Story = {
  render: () => {
    const [formats, setFormats] = React.useState({
      bold: false,
      italic: false,
      link: false,
    })
    const [listType, setListType] = React.useState<
      'none' | 'bullet' | 'ordered'
    >('none')

    const toggleFormat = (format: keyof typeof formats) => {
      setFormats((prev) => ({ ...prev, [format]: !prev[format] }))
    }

    return (
      <div className='flex gap-1 p-2 border rounded-md'>
        <ToolbarButton
          pressed={formats.bold}
          onPressedChange={() => toggleFormat('bold')}
          tooltip='Bold'
        >
          <Bold className='h-4 w-4' />
        </ToolbarButton>
        <ToolbarButton
          pressed={formats.italic}
          onPressedChange={() => toggleFormat('italic')}
          tooltip='Italic'
        >
          <Italic className='h-4 w-4' />
        </ToolbarButton>

        <div className='w-px h-6 bg-border mx-1' />

        <ToolbarButton
          pressed={listType === 'bullet'}
          onPressedChange={() =>
            setListType(listType === 'bullet' ? 'none' : 'bullet')
          }
          tooltip='Bullet List'
        >
          <List className='h-4 w-4' />
        </ToolbarButton>
        <ToolbarButton
          pressed={listType === 'ordered'}
          onPressedChange={() =>
            setListType(listType === 'ordered' ? 'none' : 'ordered')
          }
          tooltip='Numbered List'
        >
          <ListOrdered className='h-4 w-4' />
        </ToolbarButton>

        <div className='w-px h-6 bg-border mx-1' />

        <ToolbarButton
          pressed={formats.link}
          onPressedChange={() => toggleFormat('link')}
          tooltip='Insert Link'
        >
          <Link className='h-4 w-4' />
        </ToolbarButton>
        <ToolbarButton tooltip='Quote'>
          <Quote className='h-4 w-4' />
        </ToolbarButton>
      </div>
    )
  },
}

export const Sizes: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='flex gap-2 items-center'>
        <span className='text-sm text-muted-foreground w-20'>Small:</span>
        <ToolbarButton className='h-6 text-xs' tooltip='Small Button'>
          <Bold className='h-3 w-3' />
        </ToolbarButton>
      </div>
      <div className='flex gap-2 items-center'>
        <span className='text-sm text-muted-foreground w-20'>Default:</span>
        <ToolbarButton tooltip='Default Button'>
          <Bold className='h-4 w-4' />
        </ToolbarButton>
      </div>
      <div className='flex gap-2 items-center'>
        <span className='text-sm text-muted-foreground w-20'>Large:</span>
        <ToolbarButton className='h-10 px-3' tooltip='Large Button'>
          <Bold className='h-5 w-5' />
        </ToolbarButton>
      </div>
    </div>
  ),
}

export const CustomStyles: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='flex gap-2'>
        <ToolbarButton
          className='hover:bg-blue-100 data-[pressed=true]:bg-blue-500 data-[pressed=true]:text-white'
          tooltip='Blue Theme'
        >
          <Bold className='h-4 w-4' />
        </ToolbarButton>
        <ToolbarButton
          className='hover:bg-green-100 data-[pressed=true]:bg-green-500 data-[pressed=true]:text-white'
          tooltip='Green Theme'
        >
          <Italic className='h-4 w-4' />
        </ToolbarButton>
        <ToolbarButton
          className='hover:bg-purple-100 data-[pressed=true]:bg-purple-500 data-[pressed=true]:text-white'
          tooltip='Purple Theme'
        >
          <Underline className='h-4 w-4' />
        </ToolbarButton>
      </div>
    </div>
  ),
}

export const WithTooltips: Story = {
  render: () => (
    <div className='flex gap-2'>
      <ToolbarButton tooltip='Bold text (Cmd+B)'>
        <Bold className='h-4 w-4' />
      </ToolbarButton>
      <ToolbarButton tooltip='Italic text (Cmd+I)'>
        <Italic className='h-4 w-4' />
      </ToolbarButton>
      <ToolbarButton tooltip='Underline text (Cmd+U)'>
        <Underline className='h-4 w-4' />
      </ToolbarButton>
      <ToolbarButton tooltip='Insert link (Cmd+K)'>
        <Link className='h-4 w-4' />
      </ToolbarButton>
    </div>
  ),
}

export const InteractionTest: Story = {
  render: () => {
    const [pressed, setPressed] = React.useState(false)
    const [clickCount, setClickCount] = React.useState(0)

    return (
      <div className='space-y-4'>
        <ToolbarButton
          pressed={pressed}
          onPressedChange={setPressed}
          onClick={() => setClickCount((c) => c + 1)}
          tooltip='Test Button'
        >
          <Bold className='h-4 w-4' />
        </ToolbarButton>
        <div className='text-sm text-muted-foreground'>
          <p>Pressed: {pressed.toString()}</p>
          <p>Click count: {clickCount}</p>
        </div>
      </div>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')

    // Test clicking
    await userEvent.click(button)
    await expect(canvas.getByText('Pressed: true')).toBeVisible()
    await expect(canvas.getByText('Click count: 1')).toBeVisible()

    // Test toggling off
    await userEvent.click(button)
    await expect(canvas.getByText('Pressed: false')).toBeVisible()
    await expect(canvas.getByText('Click count: 2')).toBeVisible()
  },
}
