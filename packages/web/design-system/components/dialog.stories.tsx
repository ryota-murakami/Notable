import type { Meta, StoryObj } from '@storybook/nextjs'
import * as React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../components/ui/dialog'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'
import { Textarea } from '../../components/ui/textarea'
import { within, userEvent, expect } from '@storybook/test'

const meta = {
  title: 'Design System/Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

// Default dialog
export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Test opening dialog
    const triggerButton = canvas.getByRole('button', { name: 'Open Dialog' })
    await expect(triggerButton).toBeVisible()
    await userEvent.click(triggerButton)

    // Test dialog content is visible
    const dialog = await canvas.findByRole('dialog')
    await expect(dialog).toBeVisible()

    const title = within(dialog).getByText('Are you absolutely sure?')
    await expect(title).toBeVisible()

    // Test closing with ESC key
    await userEvent.keyboard('{Escape}')
    await expect(dialog).not.toBeInTheDocument()
  },
}

// Dialog with form
export const WithForm: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='name' className='text-right'>
              Name
            </Label>
            <Input
              id='name'
              defaultValue='Pedro Duarte'
              className='col-span-3'
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='username' className='text-right'>
              Username
            </Label>
            <Input
              id='username'
              defaultValue='@peduarte'
              className='col-span-3'
            />
          </div>
        </div>
        <DialogFooter>
          <Button type='submit'>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Open dialog
    const triggerButton = canvas.getByRole('button', { name: 'Edit Profile' })
    await userEvent.click(triggerButton)

    // Test form elements
    const dialog = await canvas.findByRole('dialog')
    const nameInput = within(dialog).getByLabelText('Name')
    const usernameInput = within(dialog).getByLabelText('Username')

    await expect(nameInput).toHaveValue('Pedro Duarte')
    await expect(usernameInput).toHaveValue('@peduarte')

    // Test form interaction
    await userEvent.clear(nameInput)
    await userEvent.type(nameInput, 'John Doe')
    await expect(nameInput).toHaveValue('John Doe')

    // Test save button
    const saveButton = within(dialog).getByRole('button', {
      name: 'Save changes',
    })
    await expect(saveButton).toBeEnabled()
    await userEvent.click(saveButton)
  },
}

// Confirmation dialog
export const Confirmation: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='destructive'>Delete Account</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Account</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete your account? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant='outline'>Cancel</Button>
          <Button variant='destructive'>Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

// Long content dialog
export const LongContent: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>View Terms</Button>
      </DialogTrigger>
      <DialogContent className='max-h-[80vh] overflow-y-auto'>
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
          <DialogDescription>
            Please read our terms of service carefully.
          </DialogDescription>
        </DialogHeader>
        <div className='space-y-4'>
          {[...Array(10)].map((_, i) => (
            <div key={i}>
              <h3 className='font-medium'>Section {i + 1}</h3>
              <p className='text-sm text-muted-foreground'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button variant='outline'>Decline</Button>
          <Button>Accept</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

// Custom close button
export const CustomClose: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant='outline'>Controlled Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Controlled Dialog</DialogTitle>
            <DialogDescription>
              This dialog is controlled by state. You can close it
              programmatically.
            </DialogDescription>
          </DialogHeader>
          <div className='space-y-4'>
            <p className='text-sm'>
              Click the button below to close this dialog programmatically.
            </p>
            <Button onClick={() => setOpen(false)}>Close Dialog</Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  },
}

// Nested dialogs
export const NestedDialogs: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>First Dialog</DialogTitle>
          <DialogDescription>
            This is the first dialog. You can open another dialog from here.
          </DialogDescription>
        </DialogHeader>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Nested Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Nested Dialog</DialogTitle>
              <DialogDescription>
                This is a nested dialog. Close this to return to the first
                dialog.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant='outline'>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </DialogContent>
    </Dialog>
  ),
}

// Different sizes
export const Sizes: Story = {
  render: () => (
    <div className='flex gap-4'>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant='outline'>Small</Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-sm'>
          <DialogHeader>
            <DialogTitle>Small Dialog</DialogTitle>
            <DialogDescription>
              This is a small dialog for quick actions.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant='outline'>Medium</Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-md'>
          <DialogHeader>
            <DialogTitle>Medium Dialog</DialogTitle>
            <DialogDescription>
              This is a medium-sized dialog for standard content.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant='outline'>Large</Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-lg'>
          <DialogHeader>
            <DialogTitle>Large Dialog</DialogTitle>
            <DialogDescription>
              This is a large dialog for more complex content.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant='outline'>Extra Large</Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-xl'>
          <DialogHeader>
            <DialogTitle>Extra Large Dialog</DialogTitle>
            <DialogDescription>
              This is an extra large dialog for extensive content.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  ),
}

// Complex form dialog
export const ComplexForm: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create New Post</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[600px]'>
        <DialogHeader>
          <DialogTitle>Create New Post</DialogTitle>
          <DialogDescription>
            Fill in the details below to create a new post.
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid gap-2'>
            <Label htmlFor='title'>Title</Label>
            <Input id='title' placeholder='Enter post title' />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='content'>Content</Label>
            <Textarea
              id='content'
              placeholder='Write your post content here...'
              className='min-h-[200px]'
            />
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div className='grid gap-2'>
              <Label htmlFor='category'>Category</Label>
              <Input id='category' placeholder='e.g., Technology' />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='tags'>Tags</Label>
              <Input id='tags' placeholder='e.g., react, nextjs' />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant='outline'>Save as Draft</Button>
          <Button>Publish</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

// Loading state
export const LoadingState: Story = {
  render: () => {
    const [loading, setLoading] = React.useState(false)

    const handleSave = () => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }

    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button>Save Settings</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Save Settings</DialogTitle>
            <DialogDescription>
              Are you sure you want to save these settings?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant='outline' disabled={loading}>
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={loading}>
              {loading ? 'Saving...' : 'Save'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  },
}
