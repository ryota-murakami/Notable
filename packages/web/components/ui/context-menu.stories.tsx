import type { Meta, StoryObj } from '@storybook/nextjs'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuShortcut,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuCheckboxItem,
} from './context-menu'
import { expect, userEvent, within } from '@storybook/test'
import * as React from 'react'

const meta: Meta<typeof ContextMenu> = {
  title: 'Components/UI/ContextMenu',
  component: ContextMenu,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A context menu component that appears on right-click. Built on Radix UI Context Menu for full accessibility support.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof ContextMenu>

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className='flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm'>
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className='w-64'>
        <ContextMenuItem>Back</ContextMenuItem>
        <ContextMenuItem disabled>Forward</ContextMenuItem>
        <ContextMenuItem>Reload</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Save Page As...</ContextMenuItem>
        <ContextMenuItem>Print...</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>View Page Source</ContextMenuItem>
        <ContextMenuItem>Inspect</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}

export const WithShortcuts: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className='flex h-[200px] w-[350px] items-center justify-center rounded-md border bg-secondary text-sm'>
        Right click for options
      </ContextMenuTrigger>
      <ContextMenuContent className='w-64'>
        <ContextMenuItem>
          Undo
          <ContextMenuShortcut>⌘Z</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Redo
          <ContextMenuShortcut>⇧⌘Z</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          Cut
          <ContextMenuShortcut>⌘X</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Copy
          <ContextMenuShortcut>⌘C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Paste
          <ContextMenuShortcut>⌘V</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          Select All
          <ContextMenuShortcut>⌘A</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}

export const WithSubmenu: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className='flex h-[200px] w-[350px] items-center justify-center rounded-md border bg-accent text-sm'>
        Right click for nested menu
      </ContextMenuTrigger>
      <ContextMenuContent className='w-64'>
        <ContextMenuItem>New File</ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>New</ContextMenuSubTrigger>
          <ContextMenuSubContent className='w-48'>
            <ContextMenuItem>Folder</ContextMenuItem>
            <ContextMenuItem>Document</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>From Template...</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>Share</ContextMenuSubTrigger>
          <ContextMenuSubContent className='w-48'>
            <ContextMenuItem>Email Link</ContextMenuItem>
            <ContextMenuItem>Copy Link</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuSub>
              <ContextMenuSubTrigger>Social</ContextMenuSubTrigger>
              <ContextMenuSubContent className='w-48'>
                <ContextMenuItem>Twitter</ContextMenuItem>
                <ContextMenuItem>Facebook</ContextMenuItem>
                <ContextMenuItem>LinkedIn</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </ContextMenu>
  ),
}

export const WithCheckboxes: Story = {
  render: () => {
    const [showBookmarks, setShowBookmarks] = React.useState(true)
    const [showFullURLs, setShowFullURLs] = React.useState(false)

    return (
      <ContextMenu>
        <ContextMenuTrigger className='flex h-[200px] w-[350px] items-center justify-center rounded-md border text-sm'>
          Right click for view options
        </ContextMenuTrigger>
        <ContextMenuContent className='w-64'>
          <ContextMenuLabel>View Options</ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem
            checked={showBookmarks}
            onCheckedChange={setShowBookmarks}
          >
            Show Bookmarks
            <ContextMenuShortcut>⌘B</ContextMenuShortcut>
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            checked={showFullURLs}
            onCheckedChange={setShowFullURLs}
          >
            Always Show Full URLs
          </ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Developer Tools</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )
  },
}

export const WithRadioGroup: Story = {
  render: () => {
    const [person, setPerson] = React.useState('pedro')

    return (
      <ContextMenu>
        <ContextMenuTrigger className='flex h-[200px] w-[350px] items-center justify-center rounded-md border text-sm'>
          Right click to select person
        </ContextMenuTrigger>
        <ContextMenuContent className='w-64'>
          <ContextMenuLabel>People</ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
            <ContextMenuRadioItem value='pedro'>
              Pedro Duarte
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value='colm'>Colm Tuite</ContextMenuRadioItem>
            <ContextMenuRadioItem value='adam'>
              Adam Wathan
            </ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>
    )
  },
}

export const FileExplorerExample: Story = {
  render: () => {
    const [view, setView] = React.useState('grid')
    const [showHidden, setShowHidden] = React.useState(false)

    return (
      <ContextMenu>
        <ContextMenuTrigger className='flex h-[300px] w-[400px] flex-col items-center justify-center rounded-md border bg-muted/50 text-sm'>
          <div className='mb-2 text-lg font-medium'>File Explorer</div>
          <div className='text-muted-foreground'>
            Right click for file options
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className='w-64'>
          <ContextMenuItem>
            Open
            <ContextMenuShortcut>⌘O</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>Open With...</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>
            New Folder
            <ContextMenuShortcut>⇧⌘N</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuSub>
            <ContextMenuSubTrigger>View</ContextMenuSubTrigger>
            <ContextMenuSubContent className='w-48'>
              <ContextMenuRadioGroup value={view} onValueChange={setView}>
                <ContextMenuRadioItem value='grid'>Grid</ContextMenuRadioItem>
                <ContextMenuRadioItem value='list'>List</ContextMenuRadioItem>
                <ContextMenuRadioItem value='columns'>
                  Columns
                </ContextMenuRadioItem>
              </ContextMenuRadioGroup>
              <ContextMenuSeparator />
              <ContextMenuCheckboxItem
                checked={showHidden}
                onCheckedChange={setShowHidden}
              >
                Show Hidden Files
              </ContextMenuCheckboxItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSub>
            <ContextMenuSubTrigger>Sort By</ContextMenuSubTrigger>
            <ContextMenuSubContent className='w-48'>
              <ContextMenuItem>Name</ContextMenuItem>
              <ContextMenuItem>Date Modified</ContextMenuItem>
              <ContextMenuItem>Size</ContextMenuItem>
              <ContextMenuItem>Kind</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuItem>Get Info</ContextMenuItem>
          <ContextMenuItem>Compress</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>
            Move to Trash
            <ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )
  },
}

export const TextEditorExample: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className='rounded-md border p-4'>
          <p className='mb-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className='text-sm text-muted-foreground'>
            Right click on this text for editing options
          </p>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className='w-64'>
        <ContextMenuItem>
          Cut
          <ContextMenuShortcut>⌘X</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Copy
          <ContextMenuShortcut>⌘C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Paste
          <ContextMenuShortcut>⌘V</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>Text</ContextMenuSubTrigger>
          <ContextMenuSubContent className='w-48'>
            <ContextMenuItem>Bold</ContextMenuItem>
            <ContextMenuItem>Italic</ContextMenuItem>
            <ContextMenuItem>Underline</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Strikethrough</ContextMenuItem>
            <ContextMenuItem>Code</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSub>
          <ContextMenuSubTrigger>Insert</ContextMenuSubTrigger>
          <ContextMenuSubContent className='w-48'>
            <ContextMenuItem>Link...</ContextMenuItem>
            <ContextMenuItem>Image...</ContextMenuItem>
            <ContextMenuItem>Table</ContextMenuItem>
            <ContextMenuItem>Horizontal Rule</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem>Select All</ContextMenuItem>
        <ContextMenuItem>Find and Replace...</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}

export const ImageContextMenu: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className='flex h-[200px] w-[300px] items-center justify-center rounded-md bg-gradient-to-br from-purple-500 to-pink-500 text-white'>
          <div className='text-center'>
            <div className='mb-2 text-4xl'>🖼️</div>
            <div className='text-sm'>Right click for image options</div>
          </div>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className='w-64'>
        <ContextMenuItem>Open Image in New Tab</ContextMenuItem>
        <ContextMenuItem>Save Image As...</ContextMenuItem>
        <ContextMenuItem>Copy Image</ContextMenuItem>
        <ContextMenuItem>Copy Image Address</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>Edit</ContextMenuSubTrigger>
          <ContextMenuSubContent className='w-48'>
            <ContextMenuItem>Rotate Right</ContextMenuItem>
            <ContextMenuItem>Rotate Left</ContextMenuItem>
            <ContextMenuItem>Flip Horizontal</ContextMenuItem>
            <ContextMenuItem>Flip Vertical</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Resize...</ContextMenuItem>
            <ContextMenuItem>Crop...</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem>Set as Desktop Background</ContextMenuItem>
        <ContextMenuItem>Properties</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}

export const CustomStyling: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className='flex h-[200px] w-[350px] items-center justify-center rounded-md bg-slate-900 text-white'>
        Right click for dark themed menu
      </ContextMenuTrigger>
      <ContextMenuContent className='w-64 bg-slate-800 text-white border-slate-700'>
        <ContextMenuLabel className='text-slate-300'>Actions</ContextMenuLabel>
        <ContextMenuSeparator className='bg-slate-700' />
        <ContextMenuItem className='focus:bg-slate-700 focus:text-white'>
          Action 1
        </ContextMenuItem>
        <ContextMenuItem className='focus:bg-slate-700 focus:text-white'>
          Action 2
        </ContextMenuItem>
        <ContextMenuSeparator className='bg-slate-700' />
        <ContextMenuItem className='focus:bg-red-900 focus:text-white text-red-400'>
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}

export const InteractionTest: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className='flex h-[150px] w-[300px] items-center justify-center rounded-md border text-sm'>
        Right click to test
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>First Item</ContextMenuItem>
        <ContextMenuItem>Second Item</ContextMenuItem>
        <ContextMenuItem>Third Item</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Find the trigger area
    const trigger = canvas.getByText('Right click to test')

    // Right click
    await userEvent.pointer({
      target: trigger,
      keys: '[MouseRight]',
    })

    // Wait for menu to appear
    await new Promise((resolve) => setTimeout(resolve, 100))
  },
}
