import type { Meta, StoryObj } from '@storybook/nextjs'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog'
import { Button } from './button'
import { Input } from './input'
import { Label } from './label'
import { expect, userEvent, within } from '@storybook/test'
import { useState } from 'react'

const meta: Meta<typeof Dialog> = {
  title: 'Components/UI/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A modal dialog component built on Radix UI. Dialogs interrupt users with important content and expect a response. Use for confirmations, forms, or displaying detailed information.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Dialog>

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is a dialog description that provides context about what the
            dialog is for.
          </DialogDescription>
        </DialogHeader>
        <div className='py-4'>
          <p>Dialog content goes here.</p>
        </div>
        <DialogFooter>
          <Button variant='secondary'>Cancel</Button>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Open dialog
    const trigger = canvas.getByText('Open Dialog')
    await userEvent.click(trigger)

    // Check dialog content is visible
    await expect(canvas.getByText('Dialog Title')).toBeInTheDocument()
    await expect(
      canvas.getByText(
        'This is a dialog description that provides context about what the dialog is for.'
      )
    ).toBeInTheDocument()
  },
}

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
}

export const Confirmation: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='destructive'>Delete Account</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant='secondary'>Cancel</Button>
          <Button variant='destructive'>Delete Account</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

// Controlled dialog example
function ControlledDialog() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className='space-y-4'>
        <p className='text-sm text-muted-foreground'>
          Dialog is {open ? 'open' : 'closed'}
        </p>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant='outline'>Open Controlled Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Controlled Dialog</DialogTitle>
              <DialogDescription>
                This dialog's open state is controlled by React state.
              </DialogDescription>
            </DialogHeader>
            <div className='py-4'>
              <p>
                You can programmatically control when this dialog opens and
                closes.
              </p>
            </div>
            <DialogFooter>
              <Button variant='secondary' onClick={() => setOpen(false)}>
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Button onClick={() => setOpen(true)} variant='secondary'>
          Open Programmatically
        </Button>
      </div>
    </>
  )
}

export const Controlled: Story = {
  render: () => <ControlledDialog />,
}

export const CustomSize: Story = {
  render: () => (
    <div className='flex gap-4'>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant='outline'>Small Dialog</Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-sm'>
          <DialogHeader>
            <DialogTitle>Small Dialog</DialogTitle>
            <DialogDescription>
              This is a smaller dialog for quick actions.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button>Got it</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant='outline'>Large Dialog</Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-4xl'>
          <DialogHeader>
            <DialogTitle>Large Dialog</DialogTitle>
            <DialogDescription>
              This is a larger dialog for more complex content.
            </DialogDescription>
          </DialogHeader>
          <div className='py-8'>
            <p>
              This dialog has more space for detailed content, forms, or data
              displays.
            </p>
          </div>
          <DialogFooter>
            <Button variant='secondary'>Cancel</Button>
            <Button>Continue</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  ),
}

export const LongContent: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Terms of Service</Button>
      </DialogTrigger>
      <DialogContent className='max-h-[80vh] overflow-y-auto'>
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
          <DialogDescription>
            Please read our terms of service carefully.
          </DialogDescription>
        </DialogHeader>
        <div className='space-y-4'>
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i}>
              <h3 className='font-semibold'>Section {i + 1}</h3>
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
          <Button variant='secondary'>Decline</Button>
          <Button>Accept</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const NoClose: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Important Action</Button>
        </DialogTrigger>
        <DialogContent
          onPointerDownOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
          className='[&>button:last-child]:hidden'
        >
          <DialogHeader>
            <DialogTitle>Important Action Required</DialogTitle>
            <DialogDescription>
              You must complete this action before continuing.
            </DialogDescription>
          </DialogHeader>
          <div className='py-4'>
            <p>
              This dialog cannot be closed by clicking outside or pressing
              Escape.
            </p>
          </div>
          <DialogFooter>
            <Button onClick={() => setOpen(false)}>Complete Action</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  },
}

export const CustomAnimation: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Custom Animation</Button>
      </DialogTrigger>
      <DialogContent className='data-[state=open]:animate-[dialog-content-show_200ms] data-[state=closed]:animate-[dialog-content-hide_200ms]'>
        <DialogHeader>
          <DialogTitle>Custom Animation</DialogTitle>
          <DialogDescription>
            This dialog has custom animation timing.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const NestedDialogs: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open First Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>First Dialog</DialogTitle>
          <DialogDescription>
            This dialog contains another dialog trigger.
          </DialogDescription>
        </DialogHeader>
        <div className='py-4'>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open Second Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Second Dialog</DialogTitle>
                <DialogDescription>This is a nested dialog.</DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button>Close</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <DialogFooter>
          <Button>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}
