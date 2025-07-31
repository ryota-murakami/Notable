import type { Meta, StoryObj } from '@storybook/nextjs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import {
  Bold,
  Copy,
  HelpCircle,
  Info,
  Italic,
  Plus,
  Settings,
  Underline,
} from 'lucide-react'

const meta = {
  title: 'Design System/Overlay/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant='outline'>Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a tooltip</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const Positions: Story = {
  render: () => (
    <div className='grid grid-cols-2 gap-8'>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline'>Top</Button>
        </TooltipTrigger>
        <TooltipContent side='top'>
          <p>Tooltip on top</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline'>Right</Button>
        </TooltipTrigger>
        <TooltipContent side='right'>
          <p>Tooltip on right</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline'>Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side='bottom'>
          <p>Tooltip on bottom</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline'>Left</Button>
        </TooltipTrigger>
        <TooltipContent side='left'>
          <p>Tooltip on left</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className='flex gap-2'>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='ghost' size='icon'>
            <Bold className='h-4 w-4' />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Bold</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='ghost' size='icon'>
            <Italic className='h-4 w-4' />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Italic</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='ghost' size='icon'>
            <Underline className='h-4 w-4' />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Underline</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
}

export const WithKeyboardShortcut: Story = {
  render: () => (
    <div className='flex gap-2'>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='ghost' size='icon'>
            <Copy className='h-4 w-4' />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Copy</p>
          <kbd className='ml-2 text-xs opacity-60'>⌘C</kbd>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='ghost' size='icon'>
            <Settings className='h-4 w-4' />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Settings</p>
          <kbd className='ml-2 text-xs opacity-60'>⌘,</kbd>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
}

export const CustomContent: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant='outline'>
          <HelpCircle className='h-4 w-4 mr-2' />
          Help
        </Button>
      </TooltipTrigger>
      <TooltipContent className='max-w-xs'>
        <div className='space-y-2'>
          <p className='font-semibold'>Need assistance?</p>
          <p className='text-xs'>
            Click here to open our help documentation or contact support.
          </p>
        </div>
      </TooltipContent>
    </Tooltip>
  ),
}

export const DelayDurations: Story = {
  render: () => (
    <div className='flex gap-4'>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <Button variant='outline'>Instant (0ms)</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>No delay</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip delayDuration={500}>
        <TooltipTrigger asChild>
          <Button variant='outline'>Quick (500ms)</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>500ms delay</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip delayDuration={1000}>
        <TooltipTrigger asChild>
          <Button variant='outline'>Slow (1000ms)</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>1 second delay</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
}

export const DisabledTrigger: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <span tabIndex={0}>
          <Button disabled>Disabled Button</Button>
        </span>
      </TooltipTrigger>
      <TooltipContent>
        <p>This feature is currently unavailable</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const FormFieldExample: Story = {
  render: () => (
    <div className='space-y-4 w-full max-w-sm'>
      <div className='space-y-2'>
        <div className='flex items-center gap-2'>
          <label htmlFor='username' className='text-sm font-medium'>
            Username
          </label>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className='h-3 w-3 text-muted-foreground cursor-help' />
            </TooltipTrigger>
            <TooltipContent>
              <p>Your username must be unique</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <input
          id='username'
          type='text'
          placeholder='Enter username'
          className='w-full px-3 py-2 border rounded-md'
        />
      </div>
    </div>
  ),
}

export const ComplexLayout: Story = {
  render: () => (
    <div className='border rounded-lg p-4 space-y-4'>
      <div className='flex items-center justify-between'>
        <h3 className='text-lg font-semibold'>Project Settings</h3>
        <div className='flex gap-1'>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant='ghost' size='icon'>
                <Settings className='h-4 w-4' />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Configure project</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant='ghost' size='icon'>
                <Plus className='h-4 w-4' />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add new item</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      <div className='space-y-2'>
        <div className='flex items-center justify-between p-2 hover:bg-muted rounded'>
          <span className='text-sm'>Enable notifications</span>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className='h-4 w-4 text-muted-foreground cursor-help' />
            </TooltipTrigger>
            <TooltipContent side='left'>
              <p>Receive updates about project changes</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div className='flex items-center justify-between p-2 hover:bg-muted rounded'>
          <span className='text-sm'>Auto-save drafts</span>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className='h-4 w-4 text-muted-foreground cursor-help' />
            </TooltipTrigger>
            <TooltipContent side='left'>
              <p>Automatically save your work every 30 seconds</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  ),
}
