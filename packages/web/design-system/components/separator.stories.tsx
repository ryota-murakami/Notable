import type { Meta, StoryObj } from '@storybook/react'
import { Separator } from '@/components/ui/separator'

const meta = {
  title: 'Design System/Layout/Separator',
  component: Separator,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the separator',
    },
    decorative: {
      control: 'boolean',
      description: 'Whether the separator is decorative or semantic',
    },
  },
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div>
      <div className='space-y-1'>
        <h4 className='text-sm font-medium leading-none'>Notable</h4>
        <p className='text-sm text-muted-foreground'>
          A modern note-taking application.
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
    <div className='w-full'>
      <p>Content above separator</p>
      <Separator {...args} className='my-4' />
      <p>Content below separator</p>
    </div>
  ),
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <div className='flex h-20 items-center'>
      <div>Left content</div>
      <Separator {...args} className='mx-4' />
      <div>Right content</div>
    </div>
  ),
}

export const InCard: Story = {
  render: () => (
    <div className='w-96 rounded-lg border bg-card p-6'>
      <div className='space-y-1'>
        <h3 className='text-lg font-semibold'>Account Settings</h3>
        <p className='text-sm text-muted-foreground'>
          Manage your account preferences
        </p>
      </div>
      <Separator className='my-6' />
      <div className='space-y-4'>
        <div className='space-y-2'>
          <label className='text-sm font-medium'>Username</label>
          <input
            type='text'
            placeholder='@username'
            className='w-full px-3 py-2 border rounded-md'
          />
        </div>
        <div className='space-y-2'>
          <label className='text-sm font-medium'>Email</label>
          <input
            type='email'
            placeholder='email@example.com'
            className='w-full px-3 py-2 border rounded-md'
          />
        </div>
      </div>
    </div>
  ),
}

export const Navigation: Story = {
  render: () => (
    <nav className='flex items-center space-x-4'>
      <a href='#' className='text-sm font-medium hover:underline'>
        Home
      </a>
      <Separator orientation='vertical' className='h-4' />
      <a href='#' className='text-sm font-medium hover:underline'>
        About
      </a>
      <Separator orientation='vertical' className='h-4' />
      <a href='#' className='text-sm font-medium hover:underline'>
        Services
      </a>
      <Separator orientation='vertical' className='h-4' />
      <a href='#' className='text-sm font-medium hover:underline'>
        Contact
      </a>
    </nav>
  ),
}

export const ProfileCard: Story = {
  render: () => (
    <div className='w-80 rounded-lg border bg-card'>
      <div className='p-6'>
        <div className='flex items-center space-x-4'>
          <div className='h-12 w-12 rounded-full bg-muted' />
          <div>
            <h3 className='font-semibold'>John Doe</h3>
            <p className='text-sm text-muted-foreground'>Software Engineer</p>
          </div>
        </div>
      </div>
      <Separator />
      <div className='p-6'>
        <div className='grid grid-cols-3 text-center'>
          <div>
            <p className='text-2xl font-semibold'>152</p>
            <p className='text-sm text-muted-foreground'>Notes</p>
          </div>
          <Separator orientation='vertical' className='mx-auto' />
          <div>
            <p className='text-2xl font-semibold'>28</p>
            <p className='text-sm text-muted-foreground'>Tags</p>
          </div>
          <Separator orientation='vertical' className='mx-auto' />
          <div>
            <p className='text-2xl font-semibold'>1.2k</p>
            <p className='text-sm text-muted-foreground'>Words</p>
          </div>
        </div>
      </div>
    </div>
  ),
}

export const Timeline: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='flex gap-4'>
        <div className='flex flex-col items-center'>
          <div className='h-3 w-3 rounded-full bg-primary' />
          <Separator orientation='vertical' className='h-20' />
        </div>
        <div className='space-y-2 pb-4'>
          <p className='text-sm font-medium'>Project Started</p>
          <p className='text-sm text-muted-foreground'>January 1, 2024</p>
        </div>
      </div>
      <div className='flex gap-4'>
        <div className='flex flex-col items-center'>
          <div className='h-3 w-3 rounded-full bg-primary' />
          <Separator orientation='vertical' className='h-20' />
        </div>
        <div className='space-y-2 pb-4'>
          <p className='text-sm font-medium'>First Release</p>
          <p className='text-sm text-muted-foreground'>March 15, 2024</p>
        </div>
      </div>
      <div className='flex gap-4'>
        <div className='flex flex-col items-center'>
          <div className='h-3 w-3 rounded-full bg-muted-foreground' />
        </div>
        <div className='space-y-2'>
          <p className='text-sm font-medium'>Next Milestone</p>
          <p className='text-sm text-muted-foreground'>Coming Soon</p>
        </div>
      </div>
    </div>
  ),
}

export const Toolbar: Story = {
  render: () => (
    <div className='flex items-center rounded-md border p-1'>
      <button className='px-3 py-1.5 text-sm hover:bg-accent rounded'>
        Bold
      </button>
      <button className='px-3 py-1.5 text-sm hover:bg-accent rounded'>
        Italic
      </button>
      <button className='px-3 py-1.5 text-sm hover:bg-accent rounded'>
        Underline
      </button>
      <Separator orientation='vertical' className='mx-1 h-6' />
      <button className='px-3 py-1.5 text-sm hover:bg-accent rounded'>
        Left
      </button>
      <button className='px-3 py-1.5 text-sm hover:bg-accent rounded'>
        Center
      </button>
      <button className='px-3 py-1.5 text-sm hover:bg-accent rounded'>
        Right
      </button>
      <Separator orientation='vertical' className='mx-1 h-6' />
      <button className='px-3 py-1.5 text-sm hover:bg-accent rounded'>
        Link
      </button>
      <button className='px-3 py-1.5 text-sm hover:bg-accent rounded'>
        Image
      </button>
    </div>
  ),
}

export const CustomStyles: Story = {
  render: () => (
    <div className='space-y-8'>
      <div>
        <p className='text-sm text-muted-foreground mb-2'>Default</p>
        <Separator />
      </div>
      <div>
        <p className='text-sm text-muted-foreground mb-2'>Thick (h-1)</p>
        <Separator className='h-1' />
      </div>
      <div>
        <p className='text-sm text-muted-foreground mb-2'>Dashed</p>
        <Separator className='border-dashed border-t-2 h-0' />
      </div>
      <div>
        <p className='text-sm text-muted-foreground mb-2'>Dotted</p>
        <Separator className='border-dotted border-t-2 h-0' />
      </div>
      <div>
        <p className='text-sm text-muted-foreground mb-2'>Custom Color</p>
        <Separator className='bg-primary' />
      </div>
      <div>
        <p className='text-sm text-muted-foreground mb-2'>Gradient</p>
        <div className='h-[1px] w-full bg-gradient-to-r from-transparent via-foreground to-transparent opacity-20' />
      </div>
    </div>
  ),
}

export const ContentDivider: Story = {
  render: () => (
    <article className='prose max-w-2xl'>
      <h2 className='text-2xl font-bold mb-4'>Introduction</h2>
      <p className='text-muted-foreground mb-6'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <Separator className='my-8' />

      <h2 className='text-2xl font-bold mb-4'>Main Content</h2>
      <p className='text-muted-foreground mb-4'>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </p>
      <p className='text-muted-foreground mb-6'>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
      </p>

      <Separator className='my-8' />

      <h2 className='text-2xl font-bold mb-4'>Conclusion</h2>
      <p className='text-muted-foreground'>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </p>
    </article>
  ),
}
