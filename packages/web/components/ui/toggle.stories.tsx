import type { Meta, StoryObj } from '@storybook/nextjs'
import { Toggle } from './toggle'
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
  Underline,
} from 'lucide-react'
import * as React from 'react'

const meta: Meta<typeof Toggle> = {
  title: 'Components/UI/Toggle',
  component: Toggle,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A two-state button that can be either on or off. Built on Radix UI Toggle for full accessibility support.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline'],
      description: 'The visual style variant of the toggle',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
      description: 'The size of the toggle',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the toggle is disabled',
    },
    pressed: {
      control: 'boolean',
      description: 'The controlled pressed state',
    },
  },
}

export default meta
type Story = StoryObj<typeof Toggle>

export const Default: Story = {
  args: {
    children: 'Toggle',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const toggle = canvas.getByRole('button')

    // Check initial state
    await expect(toggle).toHaveAttribute('data-state', 'off')

    // Click to toggle on
    await userEvent.click(toggle)
    await expect(toggle).toHaveAttribute('data-state', 'on')

    // Click to toggle off
    await userEvent.click(toggle)
    await expect(toggle).toHaveAttribute('data-state', 'off')
  },
}

export const WithIcon: Story = {
  render: () => (
    <div className='flex gap-2'>
      <Toggle aria-label='Toggle bold'>
        <Bold className='h-4 w-4' />
      </Toggle>
      <Toggle aria-label='Toggle italic'>
        <Italic className='h-4 w-4' />
      </Toggle>
      <Toggle aria-label='Toggle underline'>
        <Underline className='h-4 w-4' />
      </Toggle>
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className='flex gap-4'>
      <Toggle variant='default'>Default</Toggle>
      <Toggle variant='outline'>Outline</Toggle>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <Toggle size='sm'>
        <Bold className='h-3 w-3' />
      </Toggle>
      <Toggle size='default'>
        <Bold className='h-4 w-4' />
      </Toggle>
      <Toggle size='lg'>
        <Bold className='h-5 w-5' />
      </Toggle>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className='flex gap-4'>
      <Toggle disabled>Disabled Off</Toggle>
      <Toggle disabled pressed>
        Disabled On
      </Toggle>
    </div>
  ),
}

export const DefaultPressed: Story = {
  render: () => (
    <div className='flex gap-4'>
      <Toggle pressed>
        <Bold className='h-4 w-4' />
        Bold
      </Toggle>
      <Toggle pressed variant='outline'>
        <Italic className='h-4 w-4' />
        Italic
      </Toggle>
    </div>
  ),
}

function ControlledToggle() {
  const [pressed, setPressed] = React.useState(false)

  return (
    <div className='space-y-4'>
      <div className='flex gap-2'>
        <Toggle pressed={pressed} onPressedChange={setPressed}>
          <Bold className='h-4 w-4' />
          Bold
        </Toggle>
        <button
          onClick={() => setPressed(!pressed)}
          className='px-3 py-1 text-sm border rounded'
        >
          Toggle externally
        </button>
      </div>
      <p className='text-sm text-muted-foreground'>
        Bold is currently: <strong>{pressed ? 'ON' : 'OFF'}</strong>
      </p>
    </div>
  )
}

export const Controlled: Story = {
  render: () => <ControlledToggle />,
}

export const ToggleGroup: Story = {
  render: () => {
    const [alignment, setAlignment] = React.useState('left')

    return (
      <div className='space-y-4'>
        <div className='flex gap-1 p-1 bg-muted rounded-md'>
          <Toggle
            pressed={alignment === 'left'}
            onPressedChange={() => setAlignment('left')}
            aria-label='Align left'
          >
            <AlignLeft className='h-4 w-4' />
          </Toggle>
          <Toggle
            pressed={alignment === 'center'}
            onPressedChange={() => setAlignment('center')}
            aria-label='Align center'
          >
            <AlignCenter className='h-4 w-4' />
          </Toggle>
          <Toggle
            pressed={alignment === 'right'}
            onPressedChange={() => setAlignment('right')}
            aria-label='Align right'
          >
            <AlignRight className='h-4 w-4' />
          </Toggle>
        </div>
        <p className='text-sm text-muted-foreground'>
          Alignment: <strong>{alignment}</strong>
        </p>
      </div>
    )
  },
}

export const MultipleToggleGroups: Story = {
  render: () => {
    const [formatting, setFormatting] = React.useState({
      bold: false,
      italic: false,
      underline: false,
      code: false,
    })

    const [listType, setListType] = React.useState<
      'none' | 'bullet' | 'numbered'
    >('none')

    return (
      <div className='space-y-6'>
        <div>
          <h4 className='text-sm font-medium mb-2'>Text Formatting</h4>
          <div className='flex gap-1'>
            <Toggle
              pressed={formatting.bold}
              onPressedChange={(pressed) =>
                setFormatting({ ...formatting, bold: pressed })
              }
              aria-label='Bold'
            >
              <Bold className='h-4 w-4' />
            </Toggle>
            <Toggle
              pressed={formatting.italic}
              onPressedChange={(pressed) =>
                setFormatting({ ...formatting, italic: pressed })
              }
              aria-label='Italic'
            >
              <Italic className='h-4 w-4' />
            </Toggle>
            <Toggle
              pressed={formatting.underline}
              onPressedChange={(pressed) =>
                setFormatting({ ...formatting, underline: pressed })
              }
              aria-label='Underline'
            >
              <Underline className='h-4 w-4' />
            </Toggle>
            <Toggle
              pressed={formatting.code}
              onPressedChange={(pressed) =>
                setFormatting({ ...formatting, code: pressed })
              }
              aria-label='Code'
            >
              <Code className='h-4 w-4' />
            </Toggle>
          </div>
        </div>

        <div>
          <h4 className='text-sm font-medium mb-2'>List Type</h4>
          <div className='flex gap-1'>
            <Toggle
              pressed={listType === 'bullet'}
              onPressedChange={() =>
                setListType(listType === 'bullet' ? 'none' : 'bullet')
              }
              aria-label='Bullet list'
            >
              <List className='h-4 w-4' />
            </Toggle>
            <Toggle
              pressed={listType === 'numbered'}
              onPressedChange={() =>
                setListType(listType === 'numbered' ? 'none' : 'numbered')
              }
              aria-label='Numbered list'
            >
              <ListOrdered className='h-4 w-4' />
            </Toggle>
          </div>
        </div>

        <div className='p-4 border rounded-md'>
          <p className='text-sm'>
            <span
              style={{
                fontWeight: formatting.bold ? 'bold' : 'normal',
                fontStyle: formatting.italic ? 'italic' : 'normal',
                textDecoration: formatting.underline ? 'underline' : 'none',
                fontFamily: formatting.code ? 'monospace' : 'inherit',
              }}
            >
              Sample text with formatting
            </span>
          </p>
          {listType !== 'none' && (
            <p className='text-sm text-muted-foreground mt-2'>
              List type: {listType}
            </p>
          )}
        </div>
      </div>
    )
  },
}

export const WithTooltips: Story = {
  render: () => (
    <div className='flex gap-2'>
      <div className='relative group'>
        <Toggle aria-label='Bold text'>
          <Bold className='h-4 w-4' />
        </Toggle>
        <span className='absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs bg-popover text-popover-foreground rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap'>
          Bold (Cmd+B)
        </span>
      </div>
      <div className='relative group'>
        <Toggle aria-label='Italic text'>
          <Italic className='h-4 w-4' />
        </Toggle>
        <span className='absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs bg-popover text-popover-foreground rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap'>
          Italic (Cmd+I)
        </span>
      </div>
      <div className='relative group'>
        <Toggle aria-label='Insert link'>
          <Link className='h-4 w-4' />
        </Toggle>
        <span className='absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs bg-popover text-popover-foreground rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap'>
          Link (Cmd+K)
        </span>
      </div>
    </div>
  ),
}

export const CustomStyling: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='flex gap-2'>
        <Toggle className='data-[state=on]:bg-green-600 data-[state=on]:text-white'>
          Success
        </Toggle>
        <Toggle className='data-[state=on]:bg-blue-600 data-[state=on]:text-white'>
          Info
        </Toggle>
        <Toggle className='data-[state=on]:bg-orange-600 data-[state=on]:text-white'>
          Warning
        </Toggle>
        <Toggle className='data-[state=on]:bg-red-600 data-[state=on]:text-white'>
          Danger
        </Toggle>
      </div>
      <div className='flex gap-2'>
        <Toggle variant='outline' className='rounded-full' size='lg'>
          Rounded
        </Toggle>
        <Toggle variant='outline' className='border-2 border-primary'>
          Thick Border
        </Toggle>
      </div>
    </div>
  ),
}

export const RealWorldExample: Story = {
  render: () => {
    const [editor, setEditor] = React.useState({
      bold: false,
      italic: false,
      underline: false,
      code: false,
      link: false,
    })

    return (
      <div className='w-full max-w-2xl'>
        <div className='border rounded-lg'>
          <div className='border-b p-2'>
            <div className='flex gap-1'>
              <Toggle
                size='sm'
                pressed={editor.bold}
                onPressedChange={(pressed) =>
                  setEditor({ ...editor, bold: pressed })
                }
                aria-label='Bold'
              >
                <Bold className='h-3 w-3' />
              </Toggle>
              <Toggle
                size='sm'
                pressed={editor.italic}
                onPressedChange={(pressed) =>
                  setEditor({ ...editor, italic: pressed })
                }
                aria-label='Italic'
              >
                <Italic className='h-3 w-3' />
              </Toggle>
              <Toggle
                size='sm'
                pressed={editor.underline}
                onPressedChange={(pressed) =>
                  setEditor({ ...editor, underline: pressed })
                }
                aria-label='Underline'
              >
                <Underline className='h-3 w-3' />
              </Toggle>
              <div className='w-px bg-border mx-1' />
              <Toggle
                size='sm'
                pressed={editor.code}
                onPressedChange={(pressed) =>
                  setEditor({ ...editor, code: pressed })
                }
                aria-label='Code'
              >
                <Code className='h-3 w-3' />
              </Toggle>
              <Toggle
                size='sm'
                pressed={editor.link}
                onPressedChange={(pressed) =>
                  setEditor({ ...editor, link: pressed })
                }
                aria-label='Link'
              >
                <Link className='h-3 w-3' />
              </Toggle>
            </div>
          </div>
          <div className='p-4 min-h-[200px]'>
            <p
              className='outline-none'
              contentEditable
              suppressContentEditableWarning
              style={{
                fontWeight: editor.bold ? 'bold' : 'normal',
                fontStyle: editor.italic ? 'italic' : 'normal',
                textDecoration: editor.underline ? 'underline' : 'none',
                fontFamily: editor.code ? 'monospace' : 'inherit',
                color: editor.link ? '#0969da' : 'inherit',
              }}
            >
              Click the formatting buttons above and start typing here...
            </p>
          </div>
        </div>
      </div>
    )
  },
}

export const InteractionTest: Story = {
  render: () => (
    <Toggle>
      <Bold className='h-4 w-4' />
      Toggle Me
    </Toggle>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const toggle = canvas.getByRole('button')

    // Test keyboard interaction
    await userEvent.tab()
    await expect(toggle).toHaveFocus()

    // Space key toggles
    await userEvent.keyboard(' ')
    await expect(toggle).toHaveAttribute('data-state', 'on')

    // Enter key toggles
    await userEvent.keyboard('{Enter}')
    await expect(toggle).toHaveAttribute('data-state', 'off')

    // Click toggles
    await userEvent.click(toggle)
    await expect(toggle).toHaveAttribute('data-state', 'on')
  },
}
