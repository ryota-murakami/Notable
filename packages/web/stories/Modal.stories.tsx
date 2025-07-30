import type { Meta, StoryObj } from '@storybook/nextjs'
import {
  ConfirmModal,
  Modal,
  ModalBody,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from '../design-system/components/modal'
import { Button } from '../design-system/components/button'
import { Input } from '../design-system/components/input'
import { Textarea } from '../design-system/components/textarea'
import { Badge } from '../design-system/components/badge'
import { useState } from 'react'
import {
  AlertTriangle,
  Calendar,
  Download,
  FileText,
  Settings,
  Share,
  Star,
  Tag,
  Trash2,
  User,
} from 'lucide-react'

const meta: Meta<typeof Modal> = {
  title: 'Notable Design System/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Versatile modal component system with multiple variants, animations, and sizes. Perfect for dialogs, forms, confirmations, and content displays in Notable.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      description: 'Size of the modal',
    },
    position: {
      control: 'select',
      options: ['center', 'top', 'bottom'],
      description: 'Position of the modal on screen',
    },
    animation: {
      control: 'select',
      options: ['fade', 'slide', 'scale', 'drawer'],
      description: 'Animation type for modal entrance/exit',
    },
    closeOnOverlayClick: {
      control: 'boolean',
      description: 'Allow closing modal by clicking overlay',
    },
    closeOnEscape: {
      control: 'boolean',
      description: 'Allow closing modal with Escape key',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Show close button in top right',
    },
    blur: {
      control: 'boolean',
      description: 'Apply backdrop blur effect',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Basic Modal Stories
export const BasicModal: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalHeader>
            <ModalTitle>Basic Modal</ModalTitle>
            <ModalDescription>
              This is a simple modal with header, body, and footer sections.
            </ModalDescription>
          </ModalHeader>
          <ModalBody>
            <p className='text-sm text-muted-foreground'>
              This is the modal body content. You can put any content here
              including forms, text, images, or other components.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button variant='secondary' onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Save Changes</Button>
          </ModalFooter>
        </Modal>
      </>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic modal with standard header, body, and footer structure',
      },
    },
  },
}

export const ModalSizes: Story = {
  render: () => {
    const [activeModal, setActiveModal] = useState<string | null>(null)
    const sizes = ['sm', 'md', 'lg', 'xl', 'full'] as const

    return (
      <>
        <div className='flex gap-2'>
          {sizes.map((size) => (
            <Button
              key={size}
              variant='secondary'
              onClick={() => setActiveModal(size)}
            >
              {size.toUpperCase()}
            </Button>
          ))}
        </div>

        {sizes.map((size) => (
          <Modal
            key={size}
            open={activeModal === size}
            onClose={() => setActiveModal(null)}
            size={size}
          >
            <ModalHeader>
              <ModalTitle>{size.toUpperCase()} Modal</ModalTitle>
              <ModalDescription>
                This modal is using the {size} size variant.
              </ModalDescription>
            </ModalHeader>
            <ModalBody>
              <p className='text-sm text-muted-foreground'>
                Content scales appropriately with the modal size. The {size}{' '}
                size is perfect for{' '}
                {size === 'sm'
                  ? 'quick confirmations'
                  : size === 'md'
                    ? 'standard forms'
                    : size === 'lg'
                      ? 'detailed content'
                      : size === 'xl'
                        ? 'complex layouts'
                        : 'full-screen experiences'}
                .
              </p>
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => setActiveModal(null)}>Close</Button>
            </ModalFooter>
          </Modal>
        ))}
      </>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Different modal sizes from small to full-screen',
      },
    },
  },
}

export const ModalAnimations: Story = {
  render: () => {
    const [activeModal, setActiveModal] = useState<string | null>(null)
    const animations = [
      { type: 'fade', label: 'Fade' },
      { type: 'slide', label: 'Slide' },
      { type: 'scale', label: 'Scale' },
      { type: 'drawer', label: 'Drawer' },
    ] as const

    return (
      <>
        <div className='flex gap-2'>
          {animations.map(({ type, label }) => (
            <Button
              key={type}
              variant='secondary'
              onClick={() => setActiveModal(type)}
            >
              {label}
            </Button>
          ))}
        </div>

        {animations.map(({ type, label }) => (
          <Modal
            key={type}
            open={activeModal === type}
            onClose={() => setActiveModal(null)}
            animation={type}
          >
            <ModalHeader>
              <ModalTitle>{label} Animation</ModalTitle>
              <ModalDescription>
                This modal uses the {type} animation type.
              </ModalDescription>
            </ModalHeader>
            <ModalBody>
              <p className='text-sm text-muted-foreground'>
                The {label} animation provides a{' '}
                {type === 'fade'
                  ? 'smooth fade in/out effect'
                  : type === 'slide'
                    ? 'sliding motion from top/bottom'
                    : type === 'scale'
                      ? 'scaling effect from center'
                      : 'slide-in from the right side'}{' '}
                for a polished user experience.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => setActiveModal(null)}>Close</Button>
            </ModalFooter>
          </Modal>
        ))}
      </>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Different modal animations including fade, slide, scale, and drawer',
      },
    },
  },
}

export const ModalPositions: Story = {
  render: () => {
    const [activeModal, setActiveModal] = useState<string | null>(null)
    const positions = [
      { pos: 'center', label: 'Center' },
      { pos: 'top', label: 'Top' },
      { pos: 'bottom', label: 'Bottom' },
    ] as const

    return (
      <>
        <div className='flex gap-2'>
          {positions.map(({ pos, label }) => (
            <Button
              key={pos}
              variant='secondary'
              onClick={() => setActiveModal(pos)}
            >
              {label}
            </Button>
          ))}
        </div>

        {positions.map(({ pos, label }) => (
          <Modal
            key={pos}
            open={activeModal === pos}
            onClose={() => setActiveModal(null)}
            position={pos}
            animation='slide'
          >
            <ModalHeader>
              <ModalTitle>{label} Position</ModalTitle>
              <ModalDescription>
                Modal positioned at the {pos} of the screen.
              </ModalDescription>
            </ModalHeader>
            <ModalBody>
              <p className='text-sm text-muted-foreground'>
                The {pos} position is useful for{' '}
                {pos === 'center'
                  ? 'general purpose dialogs and forms'
                  : pos === 'top'
                    ? 'notifications and quick actions'
                    : 'mobile-friendly bottom sheets'}
                .
              </p>
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => setActiveModal(null)}>Close</Button>
            </ModalFooter>
          </Modal>
        ))}
      </>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal positioning options: center, top, and bottom',
      },
    },
  },
}

// Confirmation Modal
export const ConfirmationModal: Story = {
  render: () => {
    const [showConfirm, setShowConfirm] = useState(false)
    const [showDestructive, setShowDestructive] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleConfirm = () => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setShowConfirm(false)
      }, 2000)
    }

    const handleDelete = () => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setShowDestructive(false)
      }, 2000)
    }

    return (
      <>
        <div className='flex gap-2'>
          <Button onClick={() => setShowConfirm(true)}>Save Changes</Button>
          <Button
            variant='destructive'
            onClick={() => setShowDestructive(true)}
          >
            Delete Note
          </Button>
        </div>

        <ConfirmModal
          open={showConfirm}
          onClose={() => setShowConfirm(false)}
          onConfirm={handleConfirm}
          title='Save Changes'
          description='Are you sure you want to save these changes? This action cannot be undone.'
          confirmText='Save'
          cancelText='Cancel'
          loading={loading}
        />

        <ConfirmModal
          open={showDestructive}
          onClose={() => setShowDestructive(false)}
          onConfirm={handleDelete}
          title='Delete Note'
          description='This will permanently delete the note. This action cannot be undone.'
          confirmText='Delete'
          cancelText='Cancel'
          variant='destructive'
          loading={loading}
        />
      </>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Confirmation modals with loading states and destructive variants',
      },
    },
  },
}

// Notable App Examples
export const NotableNoteSettings: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState('Meeting Notes - Q4 Planning')
    const [tags, _setTags] = useState(['meeting', 'planning', 'q4'])

    return (
      <>
        <Button onClick={() => setOpen(true)}>
          <Settings className='mr-2 h-4 w-4' />
          Note Settings
        </Button>

        <Modal open={open} onClose={() => setOpen(false)} size='lg'>
          <ModalHeader>
            <ModalTitle>Note Settings</ModalTitle>
            <ModalDescription>
              Configure settings for your note including title, tags, and
              sharing options.
            </ModalDescription>
          </ModalHeader>
          <ModalBody className='space-y-6'>
            <div className='space-y-2'>
              <label className='text-sm font-medium'>Note Title</label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Enter note title...'
              />
            </div>

            <div className='space-y-2'>
              <label className='text-sm font-medium'>Tags</label>
              <div className='flex flex-wrap gap-2'>
                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant='secondary'
                    className='cursor-pointer'
                  >
                    <Tag className='mr-1 h-3 w-3' />
                    {tag}
                    <button className='ml-1 hover:text-red-500'>×</button>
                  </Badge>
                ))}
                <Badge
                  variant='secondary'
                  className='cursor-pointer border-dashed'
                >
                  + Add tag
                </Badge>
              </div>
            </div>

            <div className='space-y-4'>
              <h3 className='font-medium'>Sharing & Privacy</h3>
              <div className='space-y-3'>
                <div className='flex items-center justify-between'>
                  <div>
                    <p className='font-medium'>Private Note</p>
                    <p className='text-sm text-muted-foreground'>
                      Only you can see this note
                    </p>
                  </div>
                  <div className='h-6 w-11 bg-primary rounded-full flex items-center'>
                    <div className='h-4 w-4 bg-white rounded-full transform translate-x-6 transition-transform' />
                  </div>
                </div>
                <div className='flex items-center justify-between'>
                  <div>
                    <p className='font-medium'>Allow Comments</p>
                    <p className='text-sm text-muted-foreground'>
                      Let others comment on this note
                    </p>
                  </div>
                  <div className='h-6 w-11 bg-gray-200 rounded-full flex items-center'>
                    <div className='h-4 w-4 bg-white rounded-full transition-transform' />
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button variant='secondary' onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Save Settings</Button>
          </ModalFooter>
        </Modal>
      </>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Note settings modal with form fields, tags, and privacy options',
      },
    },
  },
}

export const NotableShareDialog: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>
          <Share className='mr-2 h-4 w-4' />
          Share Note
        </Button>

        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalHeader>
            <ModalTitle>Share "Meeting Notes - Q4 Planning"</ModalTitle>
            <ModalDescription>
              Choose how you want to share this note with others.
            </ModalDescription>
          </ModalHeader>
          <ModalBody className='space-y-4'>
            <div className='space-y-3'>
              <div className='flex items-center gap-3 p-3 border rounded-lg hover:bg-accent cursor-pointer'>
                <div className='p-2 bg-blue-100 rounded'>
                  <User className='h-4 w-4 text-blue-600' />
                </div>
                <div className='flex-1'>
                  <p className='font-medium'>Share with people</p>
                  <p className='text-sm text-muted-foreground'>
                    Invite specific people to view or edit
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-3 p-3 border rounded-lg hover:bg-accent cursor-pointer'>
                <div className='p-2 bg-green-100 rounded'>
                  <FileText className='h-4 w-4 text-green-600' />
                </div>
                <div className='flex-1'>
                  <p className='font-medium'>Get shareable link</p>
                  <p className='text-sm text-muted-foreground'>
                    Anyone with the link can view
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-3 p-3 border rounded-lg hover:bg-accent cursor-pointer'>
                <div className='p-2 bg-purple-100 rounded'>
                  <Download className='h-4 w-4 text-purple-600' />
                </div>
                <div className='flex-1'>
                  <p className='font-medium'>Export as PDF</p>
                  <p className='text-sm text-muted-foreground'>
                    Download a PDF version to share
                  </p>
                </div>
              </div>
            </div>

            <div className='border-t pt-4'>
              <div className='flex items-center gap-2'>
                <input
                  type='email'
                  placeholder='Enter email address...'
                  className='flex-1 px-3 py-2 border rounded-lg text-sm'
                />
                <Button size='sm'>Invite</Button>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button variant='secondary' onClick={() => setOpen(false)}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Share dialog with multiple sharing options and email invitation',
      },
    },
  },
}

export const NotableTemplateSelector: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    const templates = [
      {
        name: 'Meeting Notes',
        description: 'Structured template for meeting documentation',
        icon: Calendar,
        color: 'bg-blue-100 text-blue-600',
      },
      {
        name: 'Project Plan',
        description: 'Comprehensive project planning template',
        icon: FileText,
        color: 'bg-green-100 text-green-600',
      },
      {
        name: 'Daily Journal',
        description: 'Personal reflection and daily planning',
        icon: Star,
        color: 'bg-purple-100 text-purple-600',
      },
      {
        name: 'Research Notes',
        description: 'Academic or professional research template',
        icon: FileText,
        color: 'bg-orange-100 text-orange-600',
      },
    ]

    return (
      <>
        <Button onClick={() => setOpen(true)}>Choose Template</Button>

        <Modal open={open} onClose={() => setOpen(false)} size='lg'>
          <ModalHeader>
            <ModalTitle>Choose a Template</ModalTitle>
            <ModalDescription>
              Start with a pre-designed template to speed up your note creation.
            </ModalDescription>
          </ModalHeader>
          <ModalBody>
            <div className='grid grid-cols-1 gap-3'>
              {templates.map((template) => (
                <div
                  key={template.name}
                  className='flex items-center gap-4 p-4 border rounded-lg hover:bg-accent cursor-pointer transition-colors'
                  onClick={() => setOpen(false)}
                >
                  <div className={`p-3 rounded-lg ${template.color}`}>
                    <template.icon className='h-6 w-6' />
                  </div>
                  <div className='flex-1'>
                    <h3 className='font-medium'>{template.name}</h3>
                    <p className='text-sm text-muted-foreground'>
                      {template.description}
                    </p>
                  </div>
                </div>
              ))}

              <div className='flex items-center gap-4 p-4 border-2 border-dashed rounded-lg hover:bg-accent cursor-pointer transition-colors'>
                <div className='p-3 rounded-lg bg-gray-100 text-gray-600'>
                  <FileText className='h-6 w-6' />
                </div>
                <div className='flex-1'>
                  <h3 className='font-medium'>Blank Template</h3>
                  <p className='text-sm text-muted-foreground'>
                    Start with a clean slate
                  </p>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button variant='secondary' onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Template selection modal with visual template previews',
      },
    },
  },
}

export const NotableDeleteConfirmation: Story = {
  render: () => {
    const [showDelete, setShowDelete] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleDelete = () => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setShowDelete(false)
      }, 2000)
    }

    return (
      <>
        <Button variant='destructive' onClick={() => setShowDelete(true)}>
          <Trash2 className='mr-2 h-4 w-4' />
          Delete Note
        </Button>

        <Modal open={showDelete} onClose={() => setShowDelete(false)} size='sm'>
          <ModalBody className='text-center py-6'>
            <div className='mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4'>
              <AlertTriangle className='h-6 w-6 text-red-600' />
            </div>
            <ModalTitle className='mb-2'>Delete Note</ModalTitle>
            <p className='text-sm text-muted-foreground mb-6'>
              Are you sure you want to delete "Meeting Notes - Q4 Planning"?
              This action cannot be undone and will permanently remove the note
              and all its content.
            </p>
            <div className='flex gap-3 justify-center'>
              <Button
                variant='secondary'
                onClick={() => setShowDelete(false)}
                disabled={loading}
              >
                Cancel
              </Button>
              <Button
                variant='destructive'
                onClick={handleDelete}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <div className='mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent' />
                    Deleting...
                  </>
                ) : (
                  'Delete Note'
                )}
              </Button>
            </div>
          </ModalBody>
        </Modal>
      </>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Destructive confirmation modal with warning icon and loading state',
      },
    },
  },
}

// Form Modal Example
export const FormModal: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      setOpen(false)
      setTitle('')
      setDescription('')
    }

    return (
      <>
        <Button onClick={() => setOpen(true)}>Create New Note</Button>

        <Modal open={open} onClose={() => setOpen(false)}>
          <form onSubmit={handleSubmit}>
            <ModalHeader>
              <ModalTitle>Create New Note</ModalTitle>
              <ModalDescription>
                Enter the details for your new note.
              </ModalDescription>
            </ModalHeader>
            <ModalBody className='space-y-4'>
              <div className='space-y-2'>
                <label htmlFor='title' className='text-sm font-medium'>
                  Title
                </label>
                <Input
                  id='title'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder='Enter note title...'
                  required
                />
              </div>
              <div className='space-y-2'>
                <label htmlFor='description' className='text-sm font-medium'>
                  Description
                </label>
                <Textarea
                  id='description'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder='Enter note description...'
                  rows={4}
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                type='button'
                variant='secondary'
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button type='submit'>Create Note</Button>
            </ModalFooter>
          </form>
        </Modal>
      </>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Form modal with input validation and form submission handling',
      },
    },
  },
}

// Drawer Modal
export const DrawerModal: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>

        <Modal
          open={open}
          onClose={() => setOpen(false)}
          animation='drawer'
          size='lg'
        >
          <ModalHeader>
            <ModalTitle>Note History</ModalTitle>
            <ModalDescription>
              View all changes and versions of this note.
            </ModalDescription>
          </ModalHeader>
          <ModalBody className='space-y-4'>
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className='flex items-start gap-3 p-3 border rounded-lg'
              >
                <div className='h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium'>
                  {i}
                </div>
                <div className='flex-1'>
                  <p className='font-medium'>Version {i}</p>
                  <p className='text-sm text-muted-foreground'>
                    Updated {i} hours ago • Added new section on project
                    timeline
                  </p>
                </div>
                <Button variant='ghost' size='sm'>
                  View
                </Button>
              </div>
            ))}
          </ModalBody>
        </Modal>
      </>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Drawer-style modal that slides in from the right side',
      },
    },
  },
}
