import type { Meta, StoryObj } from '@storybook/nextjs'
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from './popover'
import { Button } from './button'
import { Label } from './label'
import { Input } from './input'
import { expect, userEvent, within } from '@storybook/test'
import { Calendar, Info, Palette, Settings, User } from 'lucide-react'

const meta: Meta<typeof Popover> = {
  title: 'Components/UI/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A popover component built on Radix UI that displays floating content in relation to a trigger element. Perfect for tooltips, menus, or any floating UI.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Popover>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline'>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Click trigger to open popover
    const trigger = canvas.getByText('Open Popover')
    await userEvent.click(trigger)

    // Check popover content is visible
    await expect(canvas.getByText('Dimensions')).toBeInTheDocument()
    await expect(
      canvas.getByText('Set the dimensions for the layer.')
    ).toBeInTheDocument()
  },
}

export const WithIcon: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='ghost' size='sm'>
          <Settings className='h-4 w-4' />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className='space-y-3'>
          <h4 className='font-medium leading-none'>Settings</h4>
          <p className='text-sm text-muted-foreground'>
            Manage your preferences and configuration.
          </p>
          <div className='pt-2 space-y-2'>
            <Button variant='ghost' className='w-full justify-start' size='sm'>
              <User className='h-4 w-4 mr-2' />
              Profile Settings
            </Button>
            <Button variant='ghost' className='w-full justify-start' size='sm'>
              <Palette className='h-4 w-4 mr-2' />
              Appearance
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const Positions: Story = {
  render: () => (
    <div className='flex gap-8 flex-wrap items-center justify-center min-h-[300px]'>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant='outline' size='sm'>
            Top
          </Button>
        </PopoverTrigger>
        <PopoverContent side='top'>
          <p className='text-sm'>This popover opens on top</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant='outline' size='sm'>
            Right
          </Button>
        </PopoverTrigger>
        <PopoverContent side='right'>
          <p className='text-sm'>This popover opens on the right</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant='outline' size='sm'>
            Bottom
          </Button>
        </PopoverTrigger>
        <PopoverContent side='bottom'>
          <p className='text-sm'>This popover opens on bottom</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant='outline' size='sm'>
            Left
          </Button>
        </PopoverTrigger>
        <PopoverContent side='left'>
          <p className='text-sm'>This popover opens on the left</p>
        </PopoverContent>
      </Popover>
    </div>
  ),
}

export const Alignment: Story = {
  render: () => (
    <div className='flex gap-8 flex-wrap items-center justify-center'>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant='outline' size='sm'>
            Align Start
          </Button>
        </PopoverTrigger>
        <PopoverContent align='start' className='w-[200px]'>
          <p className='text-sm'>Aligned to the start</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant='outline' size='sm'>
            Align Center
          </Button>
        </PopoverTrigger>
        <PopoverContent align='center' className='w-[200px]'>
          <p className='text-sm'>Aligned to the center</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant='outline' size='sm'>
            Align End
          </Button>
        </PopoverTrigger>
        <PopoverContent align='end' className='w-[200px]'>
          <p className='text-sm'>Aligned to the end</p>
        </PopoverContent>
      </Popover>
    </div>
  ),
}

export const WithForm: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline'>
          <User className='h-4 w-4 mr-2' />
          Update Profile
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-80'>
        <div className='grid gap-4'>
          <div className='space-y-2'>
            <h4 className='font-medium leading-none'>Profile</h4>
            <p className='text-sm text-muted-foreground'>
              Update your profile information.
            </p>
          </div>
          <div className='grid gap-2'>
            <div className='grid gap-1'>
              <Label htmlFor='name'>Name</Label>
              <Input id='name' defaultValue='John Doe' />
            </div>
            <div className='grid gap-1'>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' defaultValue='john@example.com' />
            </div>
            <div className='grid gap-1'>
              <Label htmlFor='bio'>Bio</Label>
              <textarea
                id='bio'
                className='min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                defaultValue='Software developer'
              />
            </div>
          </div>
          <Button className='w-full'>Save Changes</Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const InfoPopover: Story = {
  render: () => (
    <div className='flex items-center gap-2'>
      <span className='text-sm'>Hover for more info</span>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant='ghost' size='icon' className='h-5 w-5 p-0'>
            <Info className='h-4 w-4' />
          </Button>
        </PopoverTrigger>
        <PopoverContent side='top' className='w-[300px]'>
          <div className='space-y-2'>
            <h4 className='font-semibold text-sm'>What is Notable?</h4>
            <p className='text-sm text-muted-foreground'>
              Notable is a premium note-taking application that combines
              powerful features with an elegant interface. It supports real-time
              collaboration, rich text editing, and seamless synchronization
              across all your devices.
            </p>
            <a href='#' className='text-sm text-primary hover:underline'>
              Learn more →
            </a>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  ),
}

export const CustomContent: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>
          <Calendar className='h-4 w-4 mr-2' />
          Schedule
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[400px] p-0'>
        <div className='bg-primary text-primary-foreground p-4 rounded-t-md'>
          <h3 className='font-semibold'>Upcoming Events</h3>
        </div>
        <div className='p-4 space-y-3'>
          <div className='flex items-start gap-3'>
            <div className='h-2 w-2 rounded-full bg-blue-500 mt-1.5' />
            <div>
              <p className='font-medium text-sm'>Team Standup</p>
              <p className='text-sm text-muted-foreground'>Today at 10:00 AM</p>
            </div>
          </div>
          <div className='flex items-start gap-3'>
            <div className='h-2 w-2 rounded-full bg-green-500 mt-1.5' />
            <div>
              <p className='font-medium text-sm'>Design Review</p>
              <p className='text-sm text-muted-foreground'>Today at 2:00 PM</p>
            </div>
          </div>
          <div className='flex items-start gap-3'>
            <div className='h-2 w-2 rounded-full bg-purple-500 mt-1.5' />
            <div>
              <p className='font-medium text-sm'>Product Launch</p>
              <p className='text-sm text-muted-foreground'>
                Tomorrow at 9:00 AM
              </p>
            </div>
          </div>
        </div>
        <div className='border-t p-3'>
          <Button variant='ghost' className='w-full' size='sm'>
            View Full Calendar
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
}
