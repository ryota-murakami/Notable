import type { Meta, StoryObj } from '@storybook/nextjs'
import Image from 'next/image'
import * as React from 'react'
import {
  ConfirmModal,
  Modal,
  ModalBody,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from './modal'
import { expect, userEvent, within } from '@storybook/test'
import { Button } from './button'
import { Input } from './input'
import { Textarea } from './textarea'
import { useState } from 'react'

const meta = {
  title: 'Design System/Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
    position: {
      control: { type: 'select' },
      options: ['center', 'top', 'bottom'],
    },
    animation: {
      control: { type: 'select' },
      options: ['fade', 'slide', 'scale', 'drawer'],
    },
    closeOnOverlayClick: {
      control: { type: 'boolean' },
    },
    closeOnEscape: {
      control: { type: 'boolean' },
    },
    showCloseButton: {
      control: { type: 'boolean' },
    },
    preventScroll: {
      control: { type: 'boolean' },
    },
    blur: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    open: false,
    onClose: () => {},
    children: null,
  },
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalHeader>
            <ModalTitle>Default Modal</ModalTitle>
            <ModalDescription>
              This is a default modal with standard configuration
            </ModalDescription>
          </ModalHeader>
          <ModalBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button variant='secondary' onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Save</Button>
          </ModalFooter>
        </Modal>
      </>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Open modal
    const openButton = canvas.getByRole('button', { name: 'Open Modal' })
    await userEvent.click(openButton)

    // Check modal is visible
    await expect(canvas.getByText('Default Modal')).toBeVisible()

    // Close modal
    const closeButton = canvas.getByRole('button', { name: 'Cancel' })
    await userEvent.click(closeButton)
  },
}

export const Sizes: Story = {
  args: {
    open: false,
    onClose: () => {},
    children: null,
  },
  render: () => {
    const [size, setSize] = useState<'sm' | 'md' | 'lg' | 'xl' | 'full'>('md')
    const [open, setOpen] = useState(false)

    return (
      <>
        <div className='flex gap-2'>
          <Button
            size='sm'
            onClick={() => {
              setSize('sm')
              setOpen(true)
            }}
          >
            Small
          </Button>
          <Button
            size='sm'
            onClick={() => {
              setSize('md')
              setOpen(true)
            }}
          >
            Medium
          </Button>
          <Button
            size='sm'
            onClick={() => {
              setSize('lg')
              setOpen(true)
            }}
          >
            Large
          </Button>
          <Button
            size='sm'
            onClick={() => {
              setSize('xl')
              setOpen(true)
            }}
          >
            Extra Large
          </Button>
          <Button
            size='sm'
            onClick={() => {
              setSize('full')
              setOpen(true)
            }}
          >
            Full
          </Button>
        </div>

        <Modal open={open} onClose={() => setOpen(false)} size={size}>
          <ModalHeader>
            <ModalTitle>{size.toUpperCase()} Modal</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p>This modal is using the {size} size variant.</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </ModalFooter>
        </Modal>
      </>
    )
  },
}

export const Positions: Story = {
  args: {
    open: false,
    onClose: () => {},
    children: null,
  },
  render: () => {
    const [position, setPosition] = useState<'center' | 'top' | 'bottom'>(
      'center'
    )
    const [open, setOpen] = useState(false)

    return (
      <>
        <div className='flex gap-2'>
          <Button
            size='sm'
            onClick={() => {
              setPosition('center')
              setOpen(true)
            }}
          >
            Center
          </Button>
          <Button
            size='sm'
            onClick={() => {
              setPosition('top')
              setOpen(true)
            }}
          >
            Top
          </Button>
          <Button
            size='sm'
            onClick={() => {
              setPosition('bottom')
              setOpen(true)
            }}
          >
            Bottom
          </Button>
        </div>

        <Modal open={open} onClose={() => setOpen(false)} position={position}>
          <ModalHeader>
            <ModalTitle>
              {position.charAt(0).toUpperCase() + position.slice(1)} Position
            </ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p>This modal is positioned at the {position}.</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </ModalFooter>
        </Modal>
      </>
    )
  },
}

export const Animations: Story = {
  args: {
    open: false,
    onClose: () => {},
    children: null,
  },
  render: () => {
    const [animation, setAnimation] = useState<
      'fade' | 'slide' | 'scale' | 'drawer'
    >('scale')
    const [open, setOpen] = useState(false)

    return (
      <>
        <div className='flex gap-2'>
          <Button
            size='sm'
            onClick={() => {
              setAnimation('fade')
              setOpen(true)
            }}
          >
            Fade
          </Button>
          <Button
            size='sm'
            onClick={() => {
              setAnimation('slide')
              setOpen(true)
            }}
          >
            Slide
          </Button>
          <Button
            size='sm'
            onClick={() => {
              setAnimation('scale')
              setOpen(true)
            }}
          >
            Scale
          </Button>
          <Button
            size='sm'
            onClick={() => {
              setAnimation('drawer')
              setOpen(true)
            }}
          >
            Drawer
          </Button>
        </div>

        <Modal open={open} onClose={() => setOpen(false)} animation={animation}>
          <ModalHeader>
            <ModalTitle>
              {animation.charAt(0).toUpperCase() + animation.slice(1)} Animation
            </ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p>This modal uses the {animation} animation.</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </ModalFooter>
        </Modal>
      </>
    )
  },
}

export const FormModal: Story = {
  args: {
    open: false,
    onClose: () => {},
    children: null,
  },
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Form Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} size='lg'>
          <ModalHeader>
            <ModalTitle>Create New Project</ModalTitle>
            <ModalDescription>
              Fill in the details below to create a new project
            </ModalDescription>
          </ModalHeader>
          <ModalBody>
            <div className='space-y-4'>
              <div>
                <label className='text-sm font-medium'>Project Name</label>
                <Input placeholder='Enter project name' className='mt-1' />
              </div>
              <div>
                <label className='text-sm font-medium'>Description</label>
                <Textarea
                  placeholder='Enter project description'
                  className='mt-1'
                  rows={3}
                />
              </div>
              <div>
                <label className='text-sm font-medium'>Repository URL</label>
                <Input placeholder='https://github.com/...' className='mt-1' />
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button variant='secondary' onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Create Project</Button>
          </ModalFooter>
        </Modal>
      </>
    )
  },
}

export const ScrollableContent: Story = {
  args: {
    open: false,
    onClose: () => {},
    children: null,
  },
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Scrollable Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} size='lg'>
          <ModalHeader>
            <ModalTitle>Terms of Service</ModalTitle>
          </ModalHeader>
          <ModalBody className='max-h-[400px]'>
            {Array.from({ length: 20 }, (_, i) => (
              <p key={i} className='mb-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            ))}
          </ModalBody>
          <ModalFooter>
            <Button variant='secondary' onClick={() => setOpen(false)}>
              Decline
            </Button>
            <Button onClick={() => setOpen(false)}>Accept</Button>
          </ModalFooter>
        </Modal>
      </>
    )
  },
}

export const NoCloseButton: Story = {
  args: {
    open: false,
    onClose: () => {},
    children: null,
  },
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          showCloseButton={false}
        >
          <ModalHeader>
            <ModalTitle>No Close Button</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p>
              This modal doesn't have a close button. Use the buttons below or
              press Escape.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </ModalFooter>
        </Modal>
      </>
    )
  },
}

export const NoOverlayClick: Story = {
  args: {
    open: false,
    onClose: () => {},
    children: null,
  },
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          closeOnOverlayClick={false}
        >
          <ModalHeader>
            <ModalTitle>Click Outside Disabled</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p>
              Clicking outside this modal won't close it. Use the close button
              or press Escape.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </ModalFooter>
        </Modal>
      </>
    )
  },
}

export const NoEscapeKey: Story = {
  args: {
    open: false,
    onClose: () => {},
    children: null,
  },
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} closeOnEscape={false}>
          <ModalHeader>
            <ModalTitle>Escape Key Disabled</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p>Pressing Escape won't close this modal. Use the close button.</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </ModalFooter>
        </Modal>
      </>
    )
  },
}

export const NoBlur: Story = {
  args: {
    open: false,
    onClose: () => {},
    children: null,
  },
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} blur={false}>
          <ModalHeader>
            <ModalTitle>No Blur Effect</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p>The overlay behind this modal doesn't have a blur effect.</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </ModalFooter>
        </Modal>
      </>
    )
  },
}

export const ConfirmationModal: Story = {
  args: {
    open: false,
    onClose: () => {},
    children: null,
  },
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Delete Item</Button>
        <ConfirmModal
          open={open}
          onClose={() => setOpen(false)}
          onConfirm={() => {
            console.info('Item deleted')
            setOpen(false)
          }}
          title='Delete Item'
          description='Are you sure you want to delete this item? This action cannot be undone.'
          confirmText='Delete'
          cancelText='Cancel'
          variant='destructive'
        />
      </>
    )
  },
}

export const ConfirmationModalLoading: Story = {
  args: {
    open: false,
    onClose: () => {},
    children: null,
  },
  render: () => {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleConfirm = () => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setOpen(false)
      }, 2000)
    }

    return (
      <>
        <Button onClick={() => setOpen(true)}>Save Changes</Button>
        <ConfirmModal
          open={open}
          onClose={() => !loading && setOpen(false)}
          onConfirm={handleConfirm}
          title='Save Changes'
          description='Do you want to save your changes?'
          confirmText='Save'
          cancelText='Cancel'
          loading={loading}
        />
      </>
    )
  },
}

export const NestedModals: Story = {
  args: {
    open: false,
    onClose: () => {},
    children: null,
  },
  render: () => {
    const [firstOpen, setFirstOpen] = useState(false)
    const [secondOpen, setSecondOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setFirstOpen(true)}>Open First Modal</Button>

        <Modal open={firstOpen} onClose={() => setFirstOpen(false)}>
          <ModalHeader>
            <ModalTitle>First Modal</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p>This is the first modal. Click below to open another.</p>
          </ModalBody>
          <ModalFooter>
            <Button variant='secondary' onClick={() => setSecondOpen(true)}>
              Open Second Modal
            </Button>
            <Button onClick={() => setFirstOpen(false)}>Close</Button>
          </ModalFooter>
        </Modal>

        <Modal open={secondOpen} onClose={() => setSecondOpen(false)} size='sm'>
          <ModalHeader>
            <ModalTitle>Second Modal</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p>This modal is stacked on top of the first one.</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setSecondOpen(false)}>Close</Button>
          </ModalFooter>
        </Modal>
      </>
    )
  },
}

export const ImageModal: Story = {
  args: {
    open: false,
    onClose: () => {},
    children: null,
  },
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>View Image</Button>
        <Modal open={open} onClose={() => setOpen(false)} size='xl'>
          <ModalBody className='p-0'>
            <Image
              src='https://via.placeholder.com/800x600'
              alt='Placeholder'
              width={800}
              height={600}
              className='w-full h-auto'
            />
          </ModalBody>
        </Modal>
      </>
    )
  },
}

export const DrawerExample: Story = {
  args: {
    open: false,
    onClose: () => {},
    children: null,
  },
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          animation='drawer'
          size='sm'
        >
          <ModalHeader>
            <ModalTitle>Settings</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <div className='space-y-4'>
              <div>
                <h3 className='text-sm font-medium mb-2'>Notifications</h3>
                <label className='flex items-center gap-2'>
                  <input type='checkbox' />
                  <span>Email notifications</span>
                </label>
                <label className='flex items-center gap-2 mt-2'>
                  <input type='checkbox' />
                  <span>Push notifications</span>
                </label>
              </div>
              <div>
                <h3 className='text-sm font-medium mb-2'>Privacy</h3>
                <label className='flex items-center gap-2'>
                  <input type='checkbox' />
                  <span>Make profile public</span>
                </label>
                <label className='flex items-center gap-2 mt-2'>
                  <input type='checkbox' />
                  <span>Show activity status</span>
                </label>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button variant='secondary' onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Save</Button>
          </ModalFooter>
        </Modal>
      </>
    )
  },
}
