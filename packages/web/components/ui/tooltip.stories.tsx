import type { Meta, StoryObj } from '@storybook/nextjs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip'
import { expect, userEvent, within } from '@storybook/test'
import { Button } from './button'
import {
  Bold,
  Copy,
  Download,
  HelpCircle,
  Info,
  Italic,
  Settings,
  Share2,
  Underline,
  User,
} from 'lucide-react'
import * as React from 'react'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/UI/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A tooltip component built on Radix UI. Provides contextual information on hover or focus.',
      },
    },
  },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Tooltip>

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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Hover over button
    const button = canvas.getByRole('button', { name: 'Hover me' })
    await userEvent.hover(button)

    // Wait for tooltip to appear
    await new Promise((resolve) => setTimeout(resolve, 500))
  },
}

export const WithIcons: Story = {
  render: () => (
    <div className='flex gap-2'>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline' size='icon'>
            <Bold className='h-4 w-4' />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Bold (Cmd+B)</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline' size='icon'>
            <Italic className='h-4 w-4' />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Italic (Cmd+I)</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline' size='icon'>
            <Underline className='h-4 w-4' />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Underline (Cmd+U)</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
}

export const Positions: Story = {
  render: () => (
    <div className='flex gap-8 items-center justify-center min-h-[200px]'>
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

export const WithDelay: Story = {
  render: () => (
    <div className='flex gap-4'>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <Button variant='outline'>Instant (0ms)</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Shows immediately</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip delayDuration={500}>
        <TooltipTrigger asChild>
          <Button variant='outline'>Normal (500ms)</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Default delay</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip delayDuration={1000}>
        <TooltipTrigger asChild>
          <Button variant='outline'>Slow (1000ms)</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Longer delay</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
}

export const InfoTooltips: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='flex items-center gap-2'>
        <label className='text-sm font-medium'>Email notifications</label>
        <Tooltip>
          <TooltipTrigger asChild>
            <Info className='h-4 w-4 text-muted-foreground cursor-help' />
          </TooltipTrigger>
          <TooltipContent className='max-w-xs'>
            <p>We'll only send you important updates about your account</p>
          </TooltipContent>
        </Tooltip>
      </div>

      <div className='flex items-center gap-2'>
        <label className='text-sm font-medium'>Two-factor authentication</label>
        <Tooltip>
          <TooltipTrigger asChild>
            <HelpCircle className='h-4 w-4 text-muted-foreground cursor-help' />
          </TooltipTrigger>
          <TooltipContent className='max-w-xs'>
            <p>
              Add an extra layer of security to your account by requiring a
              verification code in addition to your password
            </p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  ),
}

export const ComplexContent: Story = {
  render: () => (
    <div className='flex gap-4'>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline'>
            <User className='mr-2 h-4 w-4' />
            Profile
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className='space-y-2'>
            <p className='font-semibold'>John Doe</p>
            <p className='text-sm text-muted-foreground'>john@example.com</p>
            <p className='text-xs text-muted-foreground'>
              Last seen: 2 hours ago
            </p>
          </div>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline'>
            <Settings className='mr-2 h-4 w-4' />
            Settings
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className='space-y-1'>
            <p className='font-medium'>Quick Settings</p>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• Theme: System</li>
              <li>• Language: English</li>
              <li>• Notifications: On</li>
            </ul>
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
}

export const DisabledElements: Story = {
  render: () => (
    <div className='flex gap-4'>
      <Tooltip>
        <TooltipTrigger asChild>
          <span tabIndex={0}>
            <Button disabled>Disabled Button</Button>
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>This action is currently unavailable</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <span tabIndex={0}>
            <Button variant='outline' disabled>
              <Download className='mr-2 h-4 w-4' />
              Download
            </Button>
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>Premium feature - Upgrade to access</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
}

export const FormFieldTooltips: Story = {
  render: () => (
    <form className='space-y-4 w-full max-w-sm'>
      <div className='space-y-2'>
        <div className='flex items-center gap-2'>
          <label htmlFor='username' className='text-sm font-medium'>
            Username
          </label>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className='h-3 w-3 text-muted-foreground' />
            </TooltipTrigger>
            <TooltipContent>
              <p>3-20 characters, letters and numbers only</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <input
          id='username'
          type='text'
          className='flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'
          placeholder='Enter username'
        />
      </div>

      <div className='space-y-2'>
        <div className='flex items-center gap-2'>
          <label htmlFor='password' className='text-sm font-medium'>
            Password
          </label>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className='h-3 w-3 text-muted-foreground' />
            </TooltipTrigger>
            <TooltipContent className='max-w-xs'>
              <div className='space-y-2'>
                <p className='font-medium'>Password requirements:</p>
                <ul className='text-sm space-y-1'>
                  <li>• At least 8 characters</li>
                  <li>• One uppercase letter</li>
                  <li>• One number</li>
                  <li>• One special character</li>
                </ul>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>
        <input
          id='password'
          type='password'
          className='flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'
          placeholder='Enter password'
        />
      </div>
    </form>
  ),
}

export const ActionButtons: Story = {
  render: () => (
    <div className='flex gap-2'>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size='icon' variant='ghost'>
            <Copy className='h-4 w-4' />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Copy to clipboard</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button size='icon' variant='ghost'>
            <Share2 className='h-4 w-4' />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Share</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button size='icon' variant='ghost'>
            <Download className='h-4 w-4' />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Download</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
}

export const CustomStyling: Story = {
  render: () => (
    <div className='flex gap-4'>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline'>Default Style</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Standard tooltip appearance</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline'>Dark Theme</Button>
        </TooltipTrigger>
        <TooltipContent className='bg-slate-900 text-white border-slate-700'>
          <p>Custom dark tooltip</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline'>Colorful</Button>
        </TooltipTrigger>
        <TooltipContent className='bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0'>
          <p>Gradient tooltip</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
}

export const LongContent: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant='outline'>
          <Info className='mr-2 h-4 w-4' />
          Learn More
        </Button>
      </TooltipTrigger>
      <TooltipContent className='max-w-sm'>
        <div className='space-y-2'>
          <p className='font-semibold'>About this feature</p>
          <p className='text-sm'>
            This is a longer tooltip that contains more detailed information. It
            can span multiple lines and include various formatting options to
            provide comprehensive help to users.
          </p>
          <p className='text-sm text-muted-foreground'>
            Press Cmd+K to view keyboard shortcuts
          </p>
        </div>
      </TooltipContent>
    </Tooltip>
  ),
}

export const InteractionTest: Story = {
  render: () => (
    <div className='flex gap-4'>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline'>Hover Test</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Tooltip appears on hover</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline'>Focus Test</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Also appears on focus</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Test hover
    const hoverButton = canvas.getByRole('button', { name: 'Hover Test' })
    await userEvent.hover(hoverButton)

    // Wait for tooltip
    await new Promise((resolve) => setTimeout(resolve, 600))

    // Test focus
    const focusButton = canvas.getByRole('button', { name: 'Focus Test' })
    await userEvent.tab()
    await userEvent.tab()
  },
}
