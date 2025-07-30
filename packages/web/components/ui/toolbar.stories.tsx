import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import {
  ContextToolbar,
  EditorToolbar,
  Toolbar,
  type ToolbarAction,
} from './toolbar'
import {
  BoldIcon,
  BookmarkIcon,
  CheckSquareIcon,
  ClipboardIcon,
  CodeIcon,
  CopyIcon,
  DownloadIcon,
  HeartIcon,
  ImageIcon,
  ItalicIcon,
  LinkIcon,
  ListIcon,
  ListOrderedIcon,
  PrintIcon,
  QuoteIcon,
  SaveIcon,
  ScissorsIcon,
  SettingsIcon,
  ShareIcon,
  StarIcon,
  TrashIcon,
  UnderlineIcon,
} from 'lucide-react'
import { expect, userEvent, within } from '@storybook/test'

const meta = {
  title: 'UI/Toolbar',
  component: Toolbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'floating', 'compact'],
      description: 'Visual style of the toolbar',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Layout orientation',
    },
  },
  decorators: [
    (Story) => (
      <div className='min-w-[800px] min-h-[400px] p-8'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Toolbar>

export default meta
type Story = StoryObj<typeof meta>

// Basic actions for stories
const basicActions: ToolbarAction[] = [
  {
    id: 'bold',
    label: 'Bold',
    icon: <BoldIcon className='h-4 w-4' />,
    action: () => console.info('Bold clicked'),
    shortcut: 'Cmd+B',
  },
  {
    id: 'italic',
    label: 'Italic',
    icon: <ItalicIcon className='h-4 w-4' />,
    action: () => console.info('Italic clicked'),
    shortcut: 'Cmd+I',
  },
  {
    id: 'underline',
    label: 'Underline',
    icon: <UnderlineIcon className='h-4 w-4' />,
    action: () => console.info('Underline clicked'),
    shortcut: 'Cmd+U',
  },
]

export const Default: Story = {
  args: {
    actions: basicActions,
    variant: 'default',
    orientation: 'horizontal',
  },
}

export const WithGroups: Story = {
  args: {
    actions: [
      {
        id: 'copy',
        label: 'Copy',
        icon: <CopyIcon className='h-4 w-4' />,
        action: () => console.info('Copy clicked'),
        group: 'clipboard',
      },
      {
        id: 'cut',
        label: 'Cut',
        icon: <ScissorsIcon className='h-4 w-4' />,
        action: () => console.info('Cut clicked'),
        group: 'clipboard',
      },
      {
        id: 'paste',
        label: 'Paste',
        icon: <ClipboardIcon className='h-4 w-4' />,
        action: () => console.info('Paste clicked'),
        group: 'clipboard',
      },
      {
        id: 'bold',
        label: 'Bold',
        icon: <BoldIcon className='h-4 w-4' />,
        action: () => console.info('Bold clicked'),
        group: 'format',
      },
      {
        id: 'italic',
        label: 'Italic',
        icon: <ItalicIcon className='h-4 w-4' />,
        action: () => console.info('Italic clicked'),
        group: 'format',
      },
      {
        id: 'delete',
        label: 'Delete',
        icon: <TrashIcon className='h-4 w-4' />,
        action: () => console.info('Delete clicked'),
        group: 'actions',
      },
    ],
  },
}

export const ActiveStates: Story = {
  args: {
    actions: [
      {
        id: 'bold',
        label: 'Bold',
        icon: <BoldIcon className='h-4 w-4' />,
        action: () => console.info('Bold clicked'),
        isActive: true,
      },
      {
        id: 'italic',
        label: 'Italic',
        icon: <ItalicIcon className='h-4 w-4' />,
        action: () => console.info('Italic clicked'),
        isActive: false,
      },
      {
        id: 'underline',
        label: 'Underline',
        icon: <UnderlineIcon className='h-4 w-4' />,
        action: () => console.info('Underline clicked'),
        isActive: true,
      },
    ],
  },
}

export const DisabledStates: Story = {
  args: {
    actions: [
      {
        id: 'save',
        label: 'Save',
        icon: <SaveIcon className='h-4 w-4' />,
        action: () => console.info('Save clicked'),
        isDisabled: false,
      },
      {
        id: 'print',
        label: 'Print',
        icon: <PrintIcon className='h-4 w-4' />,
        action: () => console.info('Print clicked'),
        isDisabled: true,
      },
      {
        id: 'share',
        label: 'Share',
        icon: <ShareIcon className='h-4 w-4' />,
        action: () => console.info('Share clicked'),
        isDisabled: true,
      },
    ],
  },
}

export const FloatingVariant: Story = {
  args: {
    actions: basicActions,
    variant: 'floating',
  },
}

export const CompactVariant: Story = {
  args: {
    actions: [
      ...basicActions,
      {
        id: 'code',
        label: 'Code',
        icon: <CodeIcon className='h-4 w-4' />,
        action: () => console.info('Code clicked'),
      },
      {
        id: 'link',
        label: 'Link',
        icon: <LinkIcon className='h-4 w-4' />,
        action: () => console.info('Link clicked'),
      },
    ],
    variant: 'compact',
  },
}

export const VerticalOrientation: Story = {
  args: {
    actions: [
      {
        id: 'star',
        label: 'Star',
        icon: <StarIcon className='h-4 w-4' />,
        action: () => console.info('Star clicked'),
        group: 'favorites',
      },
      {
        id: 'heart',
        label: 'Heart',
        icon: <HeartIcon className='h-4 w-4' />,
        action: () => console.info('Heart clicked'),
        group: 'favorites',
      },
      {
        id: 'bookmark',
        label: 'Bookmark',
        icon: <BookmarkIcon className='h-4 w-4' />,
        action: () => console.info('Bookmark clicked'),
        group: 'favorites',
      },
      {
        id: 'download',
        label: 'Download',
        icon: <DownloadIcon className='h-4 w-4' />,
        action: () => console.info('Download clicked'),
        group: 'actions',
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: <SettingsIcon className='h-4 w-4' />,
        action: () => console.info('Settings clicked'),
        group: 'actions',
      },
    ],
    orientation: 'vertical',
  },
}

// Editor Toolbar Story
export const EditorToolbarDefault: Story = {
  render: () => {
    const [activeFormats, setActiveFormats] = useState({
      bold: false,
      italic: false,
      underline: false,
      bulletList: false,
    })

    return (
      <EditorToolbar
        onBold={() => {
          setActiveFormats({ ...activeFormats, bold: !activeFormats.bold })
          console.info('Bold toggled')
        }}
        onItalic={() => {
          setActiveFormats({ ...activeFormats, italic: !activeFormats.italic })
          console.info('Italic toggled')
        }}
        onUnderline={() => {
          setActiveFormats({
            ...activeFormats,
            underline: !activeFormats.underline,
          })
          console.info('Underline toggled')
        }}
        onStrikethrough={() => console.info('Strikethrough clicked')}
        onCode={() => console.info('Code clicked')}
        onBulletList={() => {
          setActiveFormats({
            ...activeFormats,
            bulletList: !activeFormats.bulletList,
          })
          console.info('Bullet list toggled')
        }}
        onOrderedList={() => console.info('Ordered list clicked')}
        onTaskList={() => console.info('Task list clicked')}
        onQuote={() => console.info('Quote clicked')}
        onCodeBlock={() => console.info('Code block clicked')}
        onDivider={() => console.info('Divider clicked')}
        onLink={() => console.info('Link clicked')}
        onImage={() => console.info('Image clicked')}
        onTable={() => console.info('Table clicked')}
        onUndo={() => console.info('Undo clicked')}
        onRedo={() => console.info('Redo clicked')}
        activeFormats={activeFormats}
        canUndo={true}
        canRedo={false}
      />
    )
  },
}

export const EditorToolbarCompact: Story = {
  render: () => (
    <EditorToolbar
      variant='compact'
      onBold={() => console.info('Bold clicked')}
      onItalic={() => console.info('Italic clicked')}
      onUnderline={() => console.info('Underline clicked')}
      onLink={() => console.info('Link clicked')}
      activeFormats={{}}
    />
  ),
}

export const EditorToolbarFloating: Story = {
  render: () => (
    <EditorToolbar
      variant='floating'
      onBold={() => console.info('Bold clicked')}
      onItalic={() => console.info('Italic clicked')}
      onUnderline={() => console.info('Underline clicked')}
      onCode={() => console.info('Code clicked')}
      onBulletList={() => console.info('Bullet list clicked')}
      onOrderedList={() => console.info('Ordered list clicked')}
      activeFormats={{
        bold: true,
        italic: false,
      }}
    />
  ),
}

export const EditorToolbarWithViewMode: Story = {
  render: () => {
    const [isViewMode, setIsViewMode] = useState(false)

    return (
      <EditorToolbar
        onBold={() => console.info('Bold clicked')}
        onItalic={() => console.info('Italic clicked')}
        onToggleView={() => {
          setIsViewMode(!isViewMode)
          console.info('View mode toggled')
        }}
        onFocusMode={() => console.info('Focus mode clicked')}
        isViewMode={isViewMode}
        activeFormats={{}}
      />
    )
  },
}

// Context Toolbar Story
export const ContextToolbarDemo: Story = {
  render: () => {
    const [showContext, setShowContext] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const contextActions: ToolbarAction[] = [
      {
        id: 'copy',
        label: 'Copy',
        icon: <CopyIcon className='h-4 w-4' />,
        action: () => {
          console.info('Copy from context')
          setShowContext(false)
        },
      },
      {
        id: 'cut',
        label: 'Cut',
        icon: <ScissorsIcon className='h-4 w-4' />,
        action: () => {
          console.info('Cut from context')
          setShowContext(false)
        },
      },
      {
        id: 'paste',
        label: 'Paste',
        icon: <ClipboardIcon className='h-4 w-4' />,
        action: () => {
          console.info('Paste from context')
          setShowContext(false)
        },
      },
    ]

    return (
      <div className='relative'>
        <div
          className='p-4 border rounded-lg bg-muted/50 cursor-pointer select-none'
          onContextMenu={(e) => {
            e.preventDefault()
            setPosition({ x: e.clientX, y: e.clientY })
            setShowContext(true)
          }}
        >
          Right-click anywhere in this area to show context toolbar
        </div>
        <ContextToolbar
          x={position.x}
          y={position.y}
          visible={showContext}
          onClose={() => setShowContext(false)}
          actions={contextActions}
        />
      </div>
    )
  },
}

// Interactive Stories
export const InteractiveToolbar: Story = {
  args: {
    actions: basicActions,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for render
    await new Promise((resolve) => setTimeout(resolve, 100))

    // Find and click bold button
    const boldButton = canvas.getByTitle('Bold (Cmd+B)')
    await userEvent.click(boldButton)

    // Verify toolbar is present
    const toolbar = canvas.getByRole('toolbar')
    await expect(toolbar).toBeInTheDocument()

    // Click italic button
    const italicButton = canvas.getByTitle('Italic (Cmd+I)')
    await userEvent.click(italicButton)

    // Hover over underline to show tooltip
    const underlineButton = canvas.getByTitle('Underline (Cmd+U)')
    await userEvent.hover(underlineButton)
  },
}

export const GroupSeparators: Story = {
  args: {
    actions: [
      {
        id: '1',
        label: 'Action 1',
        icon: <BoldIcon className='h-4 w-4' />,
        action: () => console.info('Action 1'),
        group: 'group1',
      },
      {
        id: '2',
        label: 'Action 2',
        icon: <ItalicIcon className='h-4 w-4' />,
        action: () => console.info('Action 2'),
        group: 'group1',
      },
      {
        id: '3',
        label: 'Action 3',
        icon: <LinkIcon className='h-4 w-4' />,
        action: () => console.info('Action 3'),
        group: 'group2',
      },
      {
        id: '4',
        label: 'Action 4',
        icon: <ImageIcon className='h-4 w-4' />,
        action: () => console.info('Action 4'),
        group: 'group2',
      },
      {
        id: '5',
        label: 'Action 5',
        icon: <SaveIcon className='h-4 w-4' />,
        action: () => console.info('Action 5'),
        group: 'group3',
      },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for render
    await new Promise((resolve) => setTimeout(resolve, 100))

    // Count separators
    const separators = canvas
      .getAllByRole('toolbar')[0]
      .querySelectorAll('.bg-border')

    // Should have 2 separators for 3 groups
    await expect(separators).toHaveLength(2)
  },
}

export const ToggleActiveState: Story = {
  render: () => {
    const [activeItems, setActiveItems] = useState<Set<string>>(
      new Set(['bold'])
    )

    const toggleActive = (id: string) => {
      const newActive = new Set(activeItems)
      if (newActive.has(id)) {
        newActive.delete(id)
      } else {
        newActive.add(id)
      }
      setActiveItems(newActive)
    }

    const actions: ToolbarAction[] = [
      {
        id: 'bold',
        label: 'Bold',
        icon: <BoldIcon className='h-4 w-4' />,
        action: () => toggleActive('bold'),
        isActive: activeItems.has('bold'),
      },
      {
        id: 'italic',
        label: 'Italic',
        icon: <ItalicIcon className='h-4 w-4' />,
        action: () => toggleActive('italic'),
        isActive: activeItems.has('italic'),
      },
      {
        id: 'underline',
        label: 'Underline',
        icon: <UnderlineIcon className='h-4 w-4' />,
        action: () => toggleActive('underline'),
        isActive: activeItems.has('underline'),
      },
      {
        id: 'code',
        label: 'Code',
        icon: <CodeIcon className='h-4 w-4' />,
        action: () => toggleActive('code'),
        isActive: activeItems.has('code'),
      },
    ]

    return (
      <div>
        <Toolbar actions={actions} />
        <div className='mt-4 text-sm text-muted-foreground'>
          Active: {Array.from(activeItems).join(', ') || 'None'}
        </div>
      </div>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for render
    await new Promise((resolve) => setTimeout(resolve, 100))

    // Click italic to activate
    const italicButton = canvas.getByTitle('Italic')
    await userEvent.click(italicButton)

    // Should show as active
    await expect(canvas.getByText('Active: bold, italic')).toBeInTheDocument()

    // Click bold to deactivate
    const boldButton = canvas.getByTitle('Bold')
    await userEvent.click(boldButton)

    // Should update active list
    await expect(canvas.getByText('Active: italic')).toBeInTheDocument()
  },
}

export const ManyActions: Story = {
  args: {
    actions: [
      ...basicActions,
      {
        id: 'strikethrough',
        label: 'Strikethrough',
        icon: <BoldIcon className='h-4 w-4' />,
        action: () => console.info('Strikethrough'),
        group: 'format',
      },
      {
        id: 'code',
        label: 'Code',
        icon: <CodeIcon className='h-4 w-4' />,
        action: () => console.info('Code'),
        group: 'format',
      },
      {
        id: 'bullet',
        label: 'Bullet List',
        icon: <ListIcon className='h-4 w-4' />,
        action: () => console.info('Bullet'),
        group: 'list',
      },
      {
        id: 'numbered',
        label: 'Numbered List',
        icon: <ListOrderedIcon className='h-4 w-4' />,
        action: () => console.info('Numbered'),
        group: 'list',
      },
      {
        id: 'checklist',
        label: 'Checklist',
        icon: <CheckSquareIcon className='h-4 w-4' />,
        action: () => console.info('Checklist'),
        group: 'list',
      },
      {
        id: 'quote',
        label: 'Quote',
        icon: <QuoteIcon className='h-4 w-4' />,
        action: () => console.info('Quote'),
        group: 'block',
      },
      {
        id: 'link',
        label: 'Link',
        icon: <LinkIcon className='h-4 w-4' />,
        action: () => console.info('Link'),
        group: 'insert',
      },
      {
        id: 'image',
        label: 'Image',
        icon: <ImageIcon className='h-4 w-4' />,
        action: () => console.info('Image'),
        group: 'insert',
      },
    ],
    variant: 'compact',
  },
}
