import type { Meta, StoryObj } from '@storybook/nextjs'
import { Separator } from './separator'
import { expect, within } from '@storybook/test'
import { Badge } from './badge'
import { Button } from './button'

const meta: Meta<typeof Separator> = {
  title: 'Components/UI/Separator',
  component: Separator,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A visual or semantic separator component. Use it to create visual distinction between sections of content with horizontal or vertical lines.',
      },
    },
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the separator',
    },
    decorative: {
      control: 'boolean',
      description: 'Whether the separator is purely decorative or semantic',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof Separator>

export const Default: Story = {
  render: () => (
    <div>
      <div className='space-y-1'>
        <h4 className='text-sm font-medium leading-none'>Notable</h4>
        <p className='text-sm text-muted-foreground'>
          An open-source note-taking application.
        </p>
      </div>
      <Separator className='my-4' />
      <div className='flex h-5 items-center space-x-4 text-sm'>
        <div>Blog</div>
        <Separator orientation='vertical' />
        <div>Docs</div>
        <Separator orientation='vertical' />
        <div>Source</div>
      </div>
    </div>
  ),
}

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (args) => (
    <div className='w-full max-w-md'>
      <div className='p-4'>
        <h3 className='font-semibold'>Section One</h3>
        <p className='text-sm text-muted-foreground'>
          This is the first section of content.
        </p>
      </div>
      <Separator {...args} />
      <div className='p-4'>
        <h3 className='font-semibold'>Section Two</h3>
        <p className='text-sm text-muted-foreground'>
          This is the second section of content.
        </p>
      </div>
    </div>
  ),
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <div className='flex h-20 items-center'>
      <div className='px-4'>
        <Button variant='ghost' size='sm'>
          Home
        </Button>
      </div>
      <Separator {...args} />
      <div className='px-4'>
        <Button variant='ghost' size='sm'>
          About
        </Button>
      </div>
      <Separator {...args} />
      <div className='px-4'>
        <Button variant='ghost' size='sm'>
          Contact
        </Button>
      </div>
    </div>
  ),
}

export const InCard: Story = {
  render: () => (
    <div className='w-full max-w-sm rounded-lg border bg-card text-card-foreground shadow-sm'>
      <div className='p-6 space-y-1'>
        <h3 className='font-semibold'>Account Settings</h3>
        <p className='text-sm text-muted-foreground'>
          Manage your account preferences
        </p>
      </div>
      <Separator />
      <div className='p-6 space-y-4'>
        <div className='space-y-2'>
          <label className='text-sm font-medium'>Email</label>
          <p className='text-sm text-muted-foreground'>john@example.com</p>
        </div>
        <Separator />
        <div className='space-y-2'>
          <label className='text-sm font-medium'>Plan</label>
          <div className='flex items-center gap-2'>
            <p className='text-sm text-muted-foreground'>Pro Plan</p>
            <Badge variant='secondary'>Active</Badge>
          </div>
        </div>
      </div>
    </div>
  ),
}

export const InList: Story = {
  render: () => (
    <div className='w-full max-w-md'>
      <h3 className='mb-4 font-semibold'>Recent Activity</h3>
      <div className='space-y-1'>
        <div className='py-2'>
          <p className='text-sm font-medium'>Created new note</p>
          <p className='text-xs text-muted-foreground'>2 minutes ago</p>
        </div>
        <Separator />
        <div className='py-2'>
          <p className='text-sm font-medium'>Updated profile</p>
          <p className='text-xs text-muted-foreground'>1 hour ago</p>
        </div>
        <Separator />
        <div className='py-2'>
          <p className='text-sm font-medium'>Shared document</p>
          <p className='text-xs text-muted-foreground'>3 hours ago</p>
        </div>
        <Separator />
        <div className='py-2'>
          <p className='text-sm font-medium'>Joined team workspace</p>
          <p className='text-xs text-muted-foreground'>Yesterday</p>
        </div>
      </div>
    </div>
  ),
}

export const WithSpacing: Story = {
  render: () => (
    <div className='space-y-8'>
      <div>
        <h4 className='text-sm font-medium mb-2'>Default spacing (my-4)</h4>
        <div className='border rounded p-4'>
          <p>Content above</p>
          <Separator className='my-4' />
          <p>Content below</p>
        </div>
      </div>

      <div>
        <h4 className='text-sm font-medium mb-2'>Large spacing (my-8)</h4>
        <div className='border rounded p-4'>
          <p>Content above</p>
          <Separator className='my-8' />
          <p>Content below</p>
        </div>
      </div>

      <div>
        <h4 className='text-sm font-medium mb-2'>Small spacing (my-2)</h4>
        <div className='border rounded p-4'>
          <p>Content above</p>
          <Separator className='my-2' />
          <p>Content below</p>
        </div>
      </div>
    </div>
  ),
}

export const CustomStyles: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <h4 className='text-sm font-medium mb-2'>Default</h4>
        <Separator />
      </div>

      <div>
        <h4 className='text-sm font-medium mb-2'>Thick (2px)</h4>
        <Separator className='h-[2px]' />
      </div>

      <div>
        <h4 className='text-sm font-medium mb-2'>Dashed</h4>
        <div className='border-t-2 border-dashed border-border' />
      </div>

      <div>
        <h4 className='text-sm font-medium mb-2'>Colored</h4>
        <Separator className='bg-primary' />
      </div>

      <div>
        <h4 className='text-sm font-medium mb-2'>Gradient</h4>
        <div className='h-[1px] bg-gradient-to-r from-transparent via-foreground to-transparent opacity-20' />
      </div>
    </div>
  ),
}

export const NavigationExample: Story = {
  render: () => (
    <nav className='flex items-center space-x-1'>
      <Button variant='link' size='sm' className='text-muted-foreground'>
        Home
      </Button>
      <span className='text-muted-foreground'>/</span>
      <Button variant='link' size='sm' className='text-muted-foreground'>
        Products
      </Button>
      <span className='text-muted-foreground'>/</span>
      <Button variant='link' size='sm' className='text-muted-foreground'>
        Category
      </Button>
      <span className='text-muted-foreground'>/</span>
      <span className='text-sm font-medium'>Item Name</span>
    </nav>
  ),
}

export const FooterExample: Story = {
  render: () => (
    <footer className='w-full'>
      <Separator />
      <div className='flex items-center justify-between py-4'>
        <p className='text-sm text-muted-foreground'>
          © 2024 Notable. All rights reserved.
        </p>
        <div className='flex items-center space-x-4'>
          <a
            href='#'
            className='text-sm text-muted-foreground hover:text-foreground'
          >
            Privacy
          </a>
          <Separator orientation='vertical' className='h-4' />
          <a
            href='#'
            className='text-sm text-muted-foreground hover:text-foreground'
          >
            Terms
          </a>
          <Separator orientation='vertical' className='h-4' />
          <a
            href='#'
            className='text-sm text-muted-foreground hover:text-foreground'
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  ),
}
