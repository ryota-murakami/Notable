import type { Meta, StoryObj } from '@storybook/react'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuLabel,
} from '@/components/ui/context-menu'

const meta = {
  title: 'Design System/Overlay/ContextMenu',
  component: ContextMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ContextMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className='flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm'>
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Back</ContextMenuItem>
        <ContextMenuItem>Forward</ContextMenuItem>
        <ContextMenuItem>Reload</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Save Page As...</ContextMenuItem>
        <ContextMenuItem>Print...</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}

export const WithShortcuts: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className='flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm'>
        Right click for shortcuts
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
      </ContextMenuContent>
    </ContextMenu>
  ),
}

export const WithSubmenu: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className='flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm'>
        Right click for submenu
      </ContextMenuTrigger>
      <ContextMenuContent className='w-64'>
        <ContextMenuItem>New Tab</ContextMenuItem>
        <ContextMenuItem>New Window</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>Share</ContextMenuSubTrigger>
          <ContextMenuSubContent className='w-48'>
            <ContextMenuItem>Email Link</ContextMenuItem>
            <ContextMenuItem>Messages</ContextMenuItem>
            <ContextMenuItem>Notes</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Copy Link</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem>Print</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}

export const WithCheckboxItems: Story = {
  render: () => {
    const [showBookmarks, setShowBookmarks] = React.useState(true)
    const [showFullURLs, setShowFullURLs] = React.useState(false)

    return (
      <ContextMenu>
        <ContextMenuTrigger className='flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm'>
          Right click for options
        </ContextMenuTrigger>
        <ContextMenuContent className='w-64'>
          <ContextMenuCheckboxItem
            checked={showBookmarks}
            onCheckedChange={setShowBookmarks}
          >
            Show Bookmarks Bar
            <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            checked={showFullURLs}
            onCheckedChange={setShowFullURLs}
          >
            Always Show Full URLs
          </ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Reload</ContextMenuItem>
          <ContextMenuItem>Force Reload</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )
  },
}

export const WithRadioItems: Story = {
  render: () => {
    const [fontSize, setFontSize] = React.useState('medium')

    return (
      <ContextMenu>
        <ContextMenuTrigger className='flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm'>
          Right click for text size
        </ContextMenuTrigger>
        <ContextMenuContent className='w-64'>
          <ContextMenuLabel>Text Size</ContextMenuLabel>
          <ContextMenuRadioGroup value={fontSize} onValueChange={setFontSize}>
            <ContextMenuRadioItem value='small'>Small</ContextMenuRadioItem>
            <ContextMenuRadioItem value='medium'>Medium</ContextMenuRadioItem>
            <ContextMenuRadioItem value='large'>Large</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
          <ContextMenuSeparator />
          <ContextMenuItem>Reset Zoom</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )
  },
}

export const FileExplorer: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className='flex h-[150px] w-[300px] items-center justify-center rounded-md border bg-muted/50 text-sm'>
        <div className='text-center'>
          <div className='mb-2 text-3xl'>📄</div>
          <div>document.txt</div>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className='w-64'>
        <ContextMenuItem>Open</ContextMenuItem>
        <ContextMenuItem>Open With...</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Cut</ContextMenuItem>
        <ContextMenuItem>Copy</ContextMenuItem>
        <ContextMenuItem>Paste</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>Send To</ContextMenuSubTrigger>
          <ContextMenuSubContent className='w-48'>
            <ContextMenuItem>Bluetooth</ContextMenuItem>
            <ContextMenuItem>Desktop (create shortcut)</ContextMenuItem>
            <ContextMenuItem>Compressed Folder</ContextMenuItem>
            <ContextMenuItem>Mail Recipient</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem>Rename</ContextMenuItem>
        <ContextMenuItem className='text-destructive'>Delete</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Properties</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}

export const TextEditor: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className='rounded-md border p-4'>
          <p className='text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Right-click
            on this text to see editor options.
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
          <ContextMenuSubTrigger>Format</ContextMenuSubTrigger>
          <ContextMenuSubContent className='w-48'>
            <ContextMenuItem>Bold</ContextMenuItem>
            <ContextMenuItem>Italic</ContextMenuItem>
            <ContextMenuItem>Underline</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Strikethrough</ContextMenuItem>
            <ContextMenuItem>Superscript</ContextMenuItem>
            <ContextMenuItem>Subscript</ContextMenuItem>
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
      </ContextMenuContent>
    </ContextMenu>
  ),
}

export const ImageContext: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className='overflow-hidden rounded-md'>
          <div className='h-[200px] w-[300px] bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-medium'>
            Right-click Image
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
          <ContextMenuSubTrigger>Search Image With</ContextMenuSubTrigger>
          <ContextMenuSubContent className='w-48'>
            <ContextMenuItem>Google Lens</ContextMenuItem>
            <ContextMenuItem>TinEye</ContextMenuItem>
            <ContextMenuItem>Yandex</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem>Inspect</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}

export const Disabled: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className='flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm'>
        Right click (with disabled items)
      </ContextMenuTrigger>
      <ContextMenuContent className='w-64'>
        <ContextMenuItem>New File</ContextMenuItem>
        <ContextMenuItem disabled>
          Save
          <ContextMenuShortcut>⌘S</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem disabled>
          Save As...
          <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Exit</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}

export const ComplexNested: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className='flex h-[200px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm'>
        Right click for complex menu
      </ContextMenuTrigger>
      <ContextMenuContent className='w-64'>
        <ContextMenuLabel>Application</ContextMenuLabel>
        <ContextMenuItem>About</ContextMenuItem>
        <ContextMenuItem>Preferences</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuLabel>Edit</ContextMenuLabel>
        <ContextMenuItem>Undo</ContextMenuItem>
        <ContextMenuItem>Redo</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>View</ContextMenuSubTrigger>
          <ContextMenuSubContent className='w-48'>
            <ContextMenuCheckboxItem checked>
              Show Toolbar
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem>Show Sidebar</ContextMenuCheckboxItem>
            <ContextMenuSeparator />
            <ContextMenuSub>
              <ContextMenuSubTrigger>Panel Position</ContextMenuSubTrigger>
              <ContextMenuSubContent className='w-48'>
                <ContextMenuRadioGroup value='bottom'>
                  <ContextMenuRadioItem value='top'>Top</ContextMenuRadioItem>
                  <ContextMenuRadioItem value='bottom'>
                    Bottom
                  </ContextMenuRadioItem>
                  <ContextMenuRadioItem value='right'>
                    Right
                  </ContextMenuRadioItem>
                </ContextMenuRadioGroup>
              </ContextMenuSubContent>
            </ContextMenuSub>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem>
          Quit
          <ContextMenuShortcut>⌘Q</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}
