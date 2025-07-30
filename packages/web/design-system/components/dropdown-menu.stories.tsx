import type { Meta, StoryObj } from '@storybook/nextjs'
import * as React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuShortcut,
} from '../../components/ui/dropdown-menu'
import { Button } from '../../components/ui/button'
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
  ChevronDown,
  Copy,
  Scissors,
  Clipboard,
} from 'lucide-react'

const meta = {
  title: 'Design System/Components/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

// Basic dropdown menu
export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

// With icons and shortcuts
export const WithIconsAndShortcuts: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>
          Options
          <ChevronDown className='ml-2 h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className='mr-2 h-4 w-4' />
            <span>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard className='mr-2 h-4 w-4' />
            <span>Billing</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className='mr-2 h-4 w-4' />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Keyboard className='mr-2 h-4 w-4' />
            <span>Keyboard shortcuts</span>
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Users className='mr-2 h-4 w-4' />
            <span>Team</span>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus className='mr-2 h-4 w-4' />
              <span>Invite users</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <Mail className='mr-2 h-4 w-4' />
                <span>Email</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MessageSquare className='mr-2 h-4 w-4' />
                <span>Message</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <PlusCircle className='mr-2 h-4 w-4' />
                <span>More...</span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuItem>
            <Plus className='mr-2 h-4 w-4' />
            <span>New Team</span>
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Github className='mr-2 h-4 w-4' />
          <span>GitHub</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LifeBuoy className='mr-2 h-4 w-4' />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Cloud className='mr-2 h-4 w-4' />
          <span>API</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className='mr-2 h-4 w-4' />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

// With checkable items
export const WithCheckableItems: Story = {
  render: () => {
    const [showStatusBar, setShowStatusBar] = React.useState(true)
    const [showActivityBar, setShowActivityBar] = React.useState(false)
    const [showPanel, setShowPanel] = React.useState(false)

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline'>View</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56'>
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={showStatusBar}
            onCheckedChange={setShowStatusBar}
          >
            Status Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showActivityBar}
            onCheckedChange={setShowActivityBar}
          >
            Activity Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showPanel}
            onCheckedChange={setShowPanel}
          >
            Panel
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}

// With radio items
export const WithRadioItems: Story = {
  render: () => {
    const [position, setPosition] = React.useState('bottom')

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline'>Position: {position}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56'>
          <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value='top'>Top</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value='bottom'>Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value='right'>Right</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}

// Context menu style
export const ContextMenuStyle: Story = {
  render: () => (
    <div className='h-[150px] w-[300px] rounded-lg border-2 border-dashed border-muted-foreground/25 flex items-center justify-center'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' className='text-muted-foreground'>
            Right-click anywhere
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Copy className='mr-2 h-4 w-4' />
            Copy
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Scissors className='mr-2 h-4 w-4' />
            Cut
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Clipboard className='mr-2 h-4 w-4' />
            Paste
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Select All</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ),
}

// Complex nested menu
export const ComplexNested: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>File Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuGroup>
          <DropdownMenuItem>New File</DropdownMenuItem>
          <DropdownMenuItem>New Window</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Open Recent</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>project-1</DropdownMenuItem>
              <DropdownMenuItem>project-2</DropdownMenuItem>
              <DropdownMenuItem>project-3</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Clear Recently Opened</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuItem>Open File...</DropdownMenuItem>
          <DropdownMenuItem>Open Folder...</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Save</DropdownMenuItem>
          <DropdownMenuItem>Save As...</DropdownMenuItem>
          <DropdownMenuItem>Save All</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Share</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Email Link</DropdownMenuItem>
              <DropdownMenuItem>Copy Link</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Social</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Twitter</DropdownMenuItem>
                  <DropdownMenuItem>Facebook</DropdownMenuItem>
                  <DropdownMenuItem>LinkedIn</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Exit</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

// Disabled items
export const DisabledItems: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>Actions</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Undo</DropdownMenuItem>
        <DropdownMenuItem>Redo</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled>Cut</DropdownMenuItem>
        <DropdownMenuItem>Copy</DropdownMenuItem>
        <DropdownMenuItem disabled>Paste</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Select All</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

// Custom trigger
export const CustomTrigger: Story = {
  render: () => (
    <div className='flex gap-4'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className='w-10 h-10 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:opacity-80'>
            <User className='h-6 w-6 text-primary-foreground' />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Sign out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger className='text-sm text-muted-foreground hover:text-foreground'>
          More options...
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Option 1</DropdownMenuItem>
          <DropdownMenuItem>Option 2</DropdownMenuItem>
          <DropdownMenuItem>Option 3</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ),
}

// Interactive example with state
export const InteractiveExample: Story = {
  render: () => {
    const [fontSize, setFontSize] = React.useState('medium')
    const [theme, setTheme] = React.useState('system')
    const [notifications, setNotifications] = React.useState({
      email: true,
      push: false,
      sms: true,
    })

    return (
      <div className='space-y-4'>
        <div className='p-4 border rounded-lg bg-muted/50'>
          <p className='text-sm'>
            <strong>Font Size:</strong> {fontSize}
            <br />
            <strong>Theme:</strong> {theme}
            <br />
            <strong>Notifications:</strong>{' '}
            {Object.entries(notifications)
              .filter(([_, enabled]) => enabled)
              .map(([type]) => type)
              .join(', ') || 'None'}
          </p>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline'>
              <Settings className='mr-2 h-4 w-4' />
              Settings
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56'>
            <DropdownMenuLabel>Preferences</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuLabel className='text-xs text-muted-foreground'>
                Font Size
              </DropdownMenuLabel>
              <DropdownMenuRadioGroup
                value={fontSize}
                onValueChange={setFontSize}
              >
                <DropdownMenuRadioItem value='small'>
                  Small
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value='medium'>
                  Medium
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value='large'>
                  Large
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuLabel className='text-xs text-muted-foreground'>
                Theme
              </DropdownMenuLabel>
              <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
                <DropdownMenuRadioItem value='light'>
                  Light
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value='dark'>Dark</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value='system'>
                  System
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuLabel className='text-xs text-muted-foreground'>
                Notifications
              </DropdownMenuLabel>
              <DropdownMenuCheckboxItem
                checked={notifications.email}
                onCheckedChange={(checked) =>
                  setNotifications((prev) => ({ ...prev, email: checked }))
                }
              >
                Email
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={notifications.push}
                onCheckedChange={(checked) =>
                  setNotifications((prev) => ({ ...prev, push: checked }))
                }
              >
                Push
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={notifications.sms}
                onCheckedChange={(checked) =>
                  setNotifications((prev) => ({ ...prev, sms: checked }))
                }
              >
                SMS
              </DropdownMenuCheckboxItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
  },
}
