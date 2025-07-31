import type { Meta, StoryObj } from '@storybook/nextjs'
import { ExportButton } from './export-button'
import { expect, fn, userEvent, within } from '@storybook/test'

// Mock note data
const mockNote = {
  id: 'note-1',
  title: 'Sample Note',
  content:
    'This is a sample note with some content for testing the export functionality.',
  created_at: '2024-01-01T00:00:00Z',
  updated_at: '2024-01-02T00:00:00Z',
  tags: ['project', 'planning'],
  user_id: 'user-1',
}

const meta: Meta<typeof ExportButton> = {
  title: 'Components/Export/ExportButton',
  component: ExportButton,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A versatile export button that provides quick export options and advanced export dialog for notes. Supports multiple formats including Markdown, HTML, PDF, and React components.',
      },
    },
  },
  argTypes: {
    note: {
      description: 'The note object to export',
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'ghost'],
      description: 'Button visual variant',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Button size',
    },
    compact: {
      control: 'boolean',
      description:
        'Whether to show compact version (opens dialog instead of dropdown)',
    },
  },
}

export default meta
type Story = StoryObj<typeof ExportButton>

export const Default: Story = {
  args: {
    note: mockNote,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Check that the export button is rendered
    const exportButton = canvas.getByText('Export')
    await expect(exportButton).toBeInTheDocument()

    // Click to open dropdown
    await userEvent.click(exportButton)

    // Check dropdown options are visible
    await expect(canvas.getByText('Quick Export')).toBeInTheDocument()
    await expect(canvas.getByText('Export as Markdown')).toBeInTheDocument()
    await expect(canvas.getByText('Export as HTML')).toBeInTheDocument()
    await expect(canvas.getByText('Export as PDF')).toBeInTheDocument()
    await expect(canvas.getByText('Export as React')).toBeInTheDocument()
    await expect(canvas.getByText('Advanced Options')).toBeInTheDocument()
    await expect(canvas.getByText('Export with Options...')).toBeInTheDocument()
  },
}

export const Primary: Story = {
  args: {
    note: mockNote,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    note: mockNote,
    variant: 'secondary',
  },
}

export const Ghost: Story = {
  args: {
    note: mockNote,
    variant: 'ghost',
  },
}

export const SmallSize: Story = {
  args: {
    note: mockNote,
    size: 'sm',
  },
}

export const MediumSize: Story = {
  args: {
    note: mockNote,
    size: 'md',
  },
}

export const LargeSize: Story = {
  args: {
    note: mockNote,
    size: 'lg',
  },
}

export const Compact: Story = {
  args: {
    note: mockNote,
    compact: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Check that the export button is rendered
    const exportButton = canvas.getByText('Export')
    await expect(exportButton).toBeInTheDocument()

    // In compact mode, clicking should open dialog instead of dropdown
    await userEvent.click(exportButton)

    // Note: Dialog interaction would require more complex mocking
    // For now we just verify the button exists
  },
}

export const CompactPrimary: Story = {
  args: {
    note: mockNote,
    compact: true,
    variant: 'primary',
    size: 'md',
  },
}

export const WithLongNoteTitle: Story = {
  args: {
    note: {
      ...mockNote,
      title:
        'This is a very long note title that might cause layout issues if not handled properly',
    },
  },
}

export const WithManyTags: Story = {
  args: {
    note: {
      ...mockNote,
      tags: [
        'project',
        'planning',
        'research',
        'important',
        'urgent',
        'meeting',
        'todo',
        'review',
      ],
    },
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <ExportButton note={mockNote} size='xs' />
      <ExportButton note={mockNote} size='sm' />
      <ExportButton note={mockNote} size='md' />
      <ExportButton note={mockNote} size='lg' />
      <ExportButton note={mockNote} size='xl' />
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <ExportButton note={mockNote} variant='default' />
      <ExportButton note={mockNote} variant='primary' />
      <ExportButton note={mockNote} variant='secondary' />
      <ExportButton note={mockNote} variant='ghost' />
    </div>
  ),
}

export const CompactVsDropdown: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <div className='text-center'>
        <p className='text-sm text-muted-foreground mb-2'>Dropdown Mode</p>
        <ExportButton note={mockNote} compact={false} />
      </div>
      <div className='text-center'>
        <p className='text-sm text-muted-foreground mb-2'>Compact Mode</p>
        <ExportButton note={mockNote} compact={true} />
      </div>
    </div>
  ),
}
