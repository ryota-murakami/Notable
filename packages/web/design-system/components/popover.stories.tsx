import type { Meta, StoryObj } from '@storybook/nextjs'
import * as React from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import {
  Calendar,
  ChevronRight,
  HelpCircle,
  MoreVertical,
  Settings,
  User,
} from 'lucide-react'

const meta = {
  title: 'Design System/Overlay/Popover',
  component: Popover,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline'>Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className='space-y-2'>
          <h4 className='font-medium leading-none'>Dimensions</h4>
          <p className='text-sm text-muted-foreground'>
            Set the dimensions for the layer.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const FormInPopover: Story = {
  args: {},
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline'>
          <Settings className='mr-2 h-4 w-4' />
          Settings
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-80'>
        <div className='grid gap-4'>
          <div className='space-y-2'>
            <h4 className='font-medium leading-none'>Dimensions</h4>
            <p className='text-sm text-muted-foreground'>
              Set the dimensions for the layer.
            </p>
          </div>
          <div className='grid gap-2'>
            <div className='grid grid-cols-3 items-center gap-4'>
              <Label htmlFor='width'>Width</Label>
              <Input
                id='width'
                defaultValue='100%'
                className='col-span-2 h-8'
              />
            </div>
            <div className='grid grid-cols-3 items-center gap-4'>
              <Label htmlFor='maxWidth'>Max. width</Label>
              <Input
                id='maxWidth'
                defaultValue='300px'
                className='col-span-2 h-8'
              />
            </div>
            <div className='grid grid-cols-3 items-center gap-4'>
              <Label htmlFor='height'>Height</Label>
              <Input
                id='height'
                defaultValue='25px'
                className='col-span-2 h-8'
              />
            </div>
            <div className='grid grid-cols-3 items-center gap-4'>
              <Label htmlFor='maxHeight'>Max. height</Label>
              <Input
                id='maxHeight'
                defaultValue='none'
                className='col-span-2 h-8'
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const UserProfile: Story = {
  args: {},
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
          <div className='h-8 w-8 rounded-full bg-muted flex items-center justify-center'>
            <User className='h-4 w-4' />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-56' align='end'>
        <div className='flex flex-col space-y-4'>
          <div className='space-y-1'>
            <p className='text-sm font-medium'>John Doe</p>
            <p className='text-xs text-muted-foreground'>john@example.com</p>
          </div>
          <div className='h-px bg-border' />
          <div className='space-y-1'>
            <button className='w-full text-left text-sm hover:bg-accent hover:text-accent-foreground rounded px-2 py-1.5'>
              Profile
            </button>
            <button className='w-full text-left text-sm hover:bg-accent hover:text-accent-foreground rounded px-2 py-1.5'>
              Settings
            </button>
            <button className='w-full text-left text-sm hover:bg-accent hover:text-accent-foreground rounded px-2 py-1.5'>
              Billing
            </button>
          </div>
          <div className='h-px bg-border' />
          <button className='w-full text-left text-sm hover:bg-accent hover:text-accent-foreground rounded px-2 py-1.5'>
            Log out
          </button>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const HelpTooltip: Story = {
  args: {},
  render: () => (
    <div className='flex items-center gap-2'>
      <Label>API Key</Label>
      <Popover>
        <PopoverTrigger asChild>
          <button className='h-4 w-4 text-muted-foreground hover:text-foreground transition-colors'>
            <HelpCircle className='h-4 w-4' />
          </button>
        </PopoverTrigger>
        <PopoverContent side='right' className='w-80'>
          <div className='space-y-2'>
            <h4 className='font-medium text-sm'>What is an API Key?</h4>
            <p className='text-sm text-muted-foreground'>
              An API key is a unique identifier used to authenticate requests
              associated with your project for usage and billing purposes.
            </p>
            <p className='text-sm text-muted-foreground'>
              Keep your API key secure and don't share it publicly.
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  ),
}

export const OptionsMenu: Story = {
  args: {},
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='ghost' size='icon'>
          <MoreVertical className='h-4 w-4' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-48' align='end'>
        <div className='space-y-1'>
          <button className='w-full text-left text-sm hover:bg-accent hover:text-accent-foreground rounded px-2 py-1.5'>
            Edit
          </button>
          <button className='w-full text-left text-sm hover:bg-accent hover:text-accent-foreground rounded px-2 py-1.5'>
            Duplicate
          </button>
          <button className='w-full text-left text-sm hover:bg-accent hover:text-accent-foreground rounded px-2 py-1.5'>
            Share
          </button>
          <div className='h-px bg-border my-1' />
          <button className='w-full text-left text-sm text-destructive hover:bg-destructive/10 rounded px-2 py-1.5'>
            Delete
          </button>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const CalendarPopover: Story = {
  args: {},
  render: () => {
    const [date, setDate] = React.useState<Date | null>(null)

    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant='outline'
            className='w-[240px] justify-start text-left font-normal'
          >
            <Calendar className='mr-2 h-4 w-4' />
            {date ? date.toLocaleDateString() : 'Pick a date'}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0' align='start'>
          <div className='p-4'>
            <p className='text-sm text-muted-foreground mb-4'>
              Calendar component would go here
            </p>
            <div className='grid grid-cols-7 gap-1 text-center text-sm'>
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                <div key={i} className='font-medium text-muted-foreground'>
                  {day}
                </div>
              ))}
              {Array.from({ length: 35 }, (_, i) => (
                <button
                  key={i}
                  className='h-8 w-8 rounded hover:bg-accent'
                  onClick={() => setDate(new Date(2024, 0, i + 1))}
                >
                  {((i + 1) % 31) + 1}
                </button>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    )
  },
}

export const NestedPopover: Story = {
  args: {},
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Open Menu</Button>
      </PopoverTrigger>
      <PopoverContent className='w-56'>
        <div className='space-y-1'>
          <button className='w-full text-left text-sm hover:bg-accent hover:text-accent-foreground rounded px-2 py-1.5'>
            New File
          </button>
          <button className='w-full text-left text-sm hover:bg-accent hover:text-accent-foreground rounded px-2 py-1.5'>
            Open File
          </button>
          <Popover>
            <PopoverTrigger asChild>
              <button className='w-full text-left text-sm hover:bg-accent hover:text-accent-foreground rounded px-2 py-1.5 flex items-center justify-between'>
                Recent Files
                <ChevronRight className='h-3 w-3' />
              </button>
            </PopoverTrigger>
            <PopoverContent side='right' align='start' className='w-48'>
              <div className='space-y-1'>
                <button className='w-full text-left text-sm hover:bg-accent hover:text-accent-foreground rounded px-2 py-1.5'>
                  document.txt
                </button>
                <button className='w-full text-left text-sm hover:bg-accent hover:text-accent-foreground rounded px-2 py-1.5'>
                  image.png
                </button>
                <button className='w-full text-left text-sm hover:bg-accent hover:text-accent-foreground rounded px-2 py-1.5'>
                  video.mp4
                </button>
              </div>
            </PopoverContent>
          </Popover>
          <div className='h-px bg-border my-1' />
          <button className='w-full text-left text-sm hover:bg-accent hover:text-accent-foreground rounded px-2 py-1.5'>
            Settings
          </button>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const NotificationPopover: Story = {
  args: {},
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='ghost' size='icon' className='relative'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9' />
            <path d='M10.3 21a1.94 1.94 0 0 0 3.4 0' />
          </svg>
          <span className='absolute -top-1 -right-1 h-4 w-4 rounded-full bg-destructive text-[10px] font-medium text-destructive-foreground flex items-center justify-center'>
            3
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-80' align='end'>
        <div className='space-y-4'>
          <div className='flex items-center justify-between'>
            <h4 className='font-medium'>Notifications</h4>
            <button className='text-sm text-muted-foreground hover:text-foreground'>
              Mark all as read
            </button>
          </div>
          <div className='space-y-3'>
            <div className='flex gap-3'>
              <div className='h-2 w-2 rounded-full bg-blue-600 mt-1.5 flex-shrink-0' />
              <div className='space-y-1'>
                <p className='text-sm'>
                  <span className='font-medium'>Sarah Chen</span> commented on
                  your post
                </p>
                <p className='text-xs text-muted-foreground'>2 minutes ago</p>
              </div>
            </div>
            <div className='flex gap-3'>
              <div className='h-2 w-2 rounded-full bg-green-600 mt-1.5 flex-shrink-0' />
              <div className='space-y-1'>
                <p className='text-sm'>
                  <span className='font-medium'>Project Alpha</span> build
                  completed successfully
                </p>
                <p className='text-xs text-muted-foreground'>15 minutes ago</p>
              </div>
            </div>
            <div className='flex gap-3'>
              <div className='h-2 w-2 rounded-full bg-orange-600 mt-1.5 flex-shrink-0' />
              <div className='space-y-1'>
                <p className='text-sm'>
                  <span className='font-medium'>New update</span> available for
                  download
                </p>
                <p className='text-xs text-muted-foreground'>1 hour ago</p>
              </div>
            </div>
          </div>
          <button className='w-full text-sm text-center text-muted-foreground hover:text-foreground'>
            View all notifications
          </button>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const CustomStyling: Story = {
  args: {},
  render: () => (
    <div className='flex gap-4'>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant='outline'>Default Style</Button>
        </PopoverTrigger>
        <PopoverContent>
          <p className='text-sm'>This is the default popover style.</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant='outline'>Dark Style</Button>
        </PopoverTrigger>
        <PopoverContent className='bg-slate-900 text-white border-slate-800'>
          <p className='text-sm'>This is a dark styled popover.</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant='outline'>No Padding</Button>
        </PopoverTrigger>
        <PopoverContent className='p-0 w-48'>
          <div className='p-2 bg-muted'>
            <p className='text-xs text-muted-foreground'>Header</p>
          </div>
          <div className='p-4'>
            <p className='text-sm'>Content with custom sections</p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  ),
}
