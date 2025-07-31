import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { TemplatePicker } from './template-picker'
import { Button } from '@/components/ui/button'
import type { Template, TemplateCategory } from '@/types/templates'
import { expect, userEvent, waitFor, within } from '@storybook/test'

// Mock data - moved to top before usage
const mockCategories: TemplateCategory[] = [
  {
    id: 'personal',
    name: 'Personal',
    icon: '👤',
    templateCount: 8,
    displayOrder: 1,
    isSystem: false,
  },
  {
    id: 'work',
    name: 'Work',
    icon: '💼',
    templateCount: 12,
    displayOrder: 2,
    isSystem: false,
  },
  {
    id: 'education',
    name: 'Education',
    icon: '📚',
    templateCount: 6,
    displayOrder: 3,
    isSystem: false,
  },
  {
    id: 'creative',
    name: 'Creative',
    icon: '🎨',
    templateCount: 4,
    displayOrder: 4,
    isSystem: false,
  },
]

const mockTemplates: Template[] = [
  {
    id: '1',
    name: 'Daily Journal',
    description: 'A simple template for daily reflection',
    category: 'personal',
    content: '# Daily Journal\n\n## Today I...\n\n## Reflection\n\n',
    isPublic: true,
    isSystem: false,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
    usageCount: 150,
    rating: 4.5,
    ratingCount: 32,
    variableCount: 0,
  },
  // Add more mock templates as needed
]

const meta = {
  title: 'UI/Templates/TemplatePicker',
  component: TemplatePicker,
  parameters: {
    layout: 'centered',
    msw: {
      handlers: [
        // Mock API responses
        {
          url: '/api/templates/categories',
          method: 'GET',
          response: {
            data: mockCategories,
          },
        },
        {
          url: '/api/templates',
          method: 'GET',
          response: {
            data: mockTemplates,
          },
        },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the picker is open',
    },
    onOpenChange: {
      action: 'onOpenChange',
      description: 'Callback when open state changes',
    },
    onTemplateSelect: {
      action: 'onTemplateSelect',
      description: 'Callback when template is selected',
    },
    onCreateBlank: {
      action: 'onCreateBlank',
      description: 'Callback when blank note is selected',
    },
  },
  decorators: [
    (Story) => (
      <div className='min-h-[700px] flex items-center justify-center'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TemplatePicker>

export default meta
type Story = StoryObj<typeof meta>

// Wrapper component for controlled state
const TemplatePickerDemo = ({
  defaultOpen = false,
}: {
  defaultOpen?: boolean
}) => {
  const [open, setOpen] = useState(defaultOpen)
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null
  )

  return (
    <>
      <div className='space-y-4'>
        <Button onClick={() => setOpen(true)}>Choose Template</Button>
        {selectedTemplate && (
          <div className='p-4 border rounded-lg'>
            <h3 className='font-semibold mb-2'>Selected Template:</h3>
            <p className='text-sm text-muted-foreground'>
              {selectedTemplate.name} - {selectedTemplate.description}
            </p>
          </div>
        )}
      </div>
      <TemplatePicker
        open={open}
        onOpenChange={setOpen}
        onTemplateSelect={(template) => {
          setSelectedTemplate(template)
          console.info('Template selected:', template)
        }}
        onCreateBlank={() => console.info('Create blank note')}
      />
    </>
  )
}

export const Default: Story = {
  args: {
    open: false,
    onOpenChange: () => {},
    onTemplateSelect: () => {},
  },
  render: () => <TemplatePickerDemo />,
}

export const OpenByDefault: Story = {
  args: {
    open: false,
    onOpenChange: () => {},
    onTemplateSelect: () => {},
  },
  render: () => <TemplatePickerDemo defaultOpen={true} />,
}

// Interactive stories
export const SearchTemplates: Story = {
  args: {
    open: false,
    onOpenChange: () => {},
    onTemplateSelect: () => {},
  },
  render: () => <TemplatePickerDemo defaultOpen={true} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for dialog to load
    await waitFor(() => {
      expect(canvas.getByText('Choose a Template')).toBeInTheDocument()
    })

    // Search for "meeting"
    const searchInput = canvas.getByPlaceholderText('Search templates...')
    await userEvent.type(searchInput, 'meeting')

    // Should filter templates
    await waitFor(() => {
      expect(canvas.getByText('Meeting Notes')).toBeInTheDocument()
      expect(canvas.queryByText('Daily Journal')).not.toBeInTheDocument()
    })

    // Clear search
    const clearButton = canvas.getByRole('button', { name: /×/ })
    await userEvent.click(clearButton)

    // Should show all templates again
    await waitFor(() => {
      expect(canvas.getByText('Daily Journal')).toBeInTheDocument()
    })
  },
}

export const CategoryFilter: Story = {
  args: {
    open: false,
    onOpenChange: () => {},
    onTemplateSelect: () => {},
  },
  render: () => <TemplatePickerDemo defaultOpen={true} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for dialog
    await waitFor(() => {
      expect(canvas.getByText('Choose a Template')).toBeInTheDocument()
    })

    // Click Work category
    const workCategory = canvas.getByRole('button', { name: /💼 Work/ })
    await userEvent.click(workCategory)

    // Should show only work templates
    await waitFor(() => {
      expect(canvas.getByText('Meeting Notes')).toBeInTheDocument()
      expect(canvas.getByText('Project Proposal')).toBeInTheDocument()
      expect(canvas.queryByText('Daily Journal')).not.toBeInTheDocument()
    })

    // Click All Templates
    const allTemplates = canvas.getByRole('button', { name: /All Templates/ })
    await userEvent.click(allTemplates)

    // Should show all templates
    await waitFor(() => {
      expect(canvas.getByText('Daily Journal')).toBeInTheDocument()
    })
  },
}

export const TabNavigation: Story = {
  args: {
    open: false,
    onOpenChange: () => {},
    onTemplateSelect: () => {},
  },
  render: () => <TemplatePickerDemo defaultOpen={true} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for dialog
    await waitFor(() => {
      expect(canvas.getByText('Choose a Template')).toBeInTheDocument()
    })

    // Click Popular tab
    const popularTab = canvas.getByRole('tab', { name: 'Popular' })
    await userEvent.click(popularTab)

    // Should show popular templates header
    await expect(canvas.getByText('Most Popular Templates')).toBeInTheDocument()

    // Click Recent tab
    const recentTab = canvas.getByRole('tab', { name: 'Recent' })
    await userEvent.click(recentTab)

    // Should show recent templates header
    await expect(canvas.getByText('Recently Added')).toBeInTheDocument()

    // Click Browse tab
    const browseTab = canvas.getByRole('tab', { name: 'Browse' })
    await userEvent.click(browseTab)

    // Should show category groups
    await expect(canvas.getByText('Personal')).toBeInTheDocument()
  },
}

export const SortOptions: Story = {
  args: {
    open: false,
    onOpenChange: () => {},
    onTemplateSelect: () => {},
  },
  render: () => <TemplatePickerDemo defaultOpen={true} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for dialog
    await waitFor(() => {
      expect(canvas.getByText('Choose a Template')).toBeInTheDocument()
    })

    // Open sort dropdown
    const sortButton = canvas.getByRole('button', { name: /Sort/ })
    await userEvent.click(sortButton)

    // Click highest rated
    const ratingOption = canvas.getByText('Highest Rated')
    await userEvent.click(ratingOption)

    // Note: Actual sorting would be handled by the API
  },
}

export const SelectTemplate: Story = {
  args: {
    open: false,
    onOpenChange: () => {},
    onTemplateSelect: () => {},
  },
  render: () => <TemplatePickerDemo defaultOpen={true} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for dialog
    await waitFor(() => {
      expect(canvas.getByText('Choose a Template')).toBeInTheDocument()
    })

    // Click on a template card
    const templateCard = canvas
      .getByText('Daily Journal')
      .closest('[class*="cursor-pointer"]')

    if (templateCard) {
      await userEvent.click(templateCard)
    }

    // Dialog should close and template should be selected
    await waitFor(() => {
      expect(canvas.queryByText('Choose a Template')).not.toBeInTheDocument()
      expect(canvas.getByText('Selected Template:')).toBeInTheDocument()
      expect(canvas.getByText(/Daily Journal/)).toBeInTheDocument()
    })
  },
}

export const CreateBlank: Story = {
  args: {
    open: false,
    onOpenChange: () => {},
    onTemplateSelect: () => {},
  },
  render: () => <TemplatePickerDemo defaultOpen={true} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for dialog
    await waitFor(() => {
      expect(canvas.getByText('Choose a Template')).toBeInTheDocument()
    })

    // Click blank note button
    const blankButton = canvas.getByRole('button', { name: /Blank Note/ })
    await userEvent.click(blankButton)

    // Dialog should close
    await waitFor(() => {
      expect(canvas.queryByText('Choose a Template')).not.toBeInTheDocument()
    })
  },
}

export const TemplateWithStats: Story = {
  args: {
    open: false,
    onOpenChange: () => {},
    onTemplateSelect: () => {},
  },
  render: () => <TemplatePickerDemo defaultOpen={true} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for dialog
    await waitFor(() => {
      expect(canvas.getByText('Choose a Template')).toBeInTheDocument()
    })

    // Go to Popular tab to see stats
    const popularTab = canvas.getByRole('tab', { name: 'Popular' })
    await userEvent.click(popularTab)

    // Should show template stats
    await expect(canvas.getByText(/4.9/)).toBeInTheDocument() // Rating
    await expect(canvas.getByText(/342 uses/)).toBeInTheDocument() // Usage count
  },
}

export const EmptyState: Story = {
  args: {
    open: false,
    onOpenChange: () => {},
    onTemplateSelect: () => {},
  },
  render: () => <TemplatePickerDemo defaultOpen={true} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for dialog
    await waitFor(() => {
      expect(canvas.getByText('Choose a Template')).toBeInTheDocument()
    })

    // Search for something that doesn't exist
    const searchInput = canvas.getByPlaceholderText('Search templates...')
    await userEvent.type(searchInput, 'xyzabc123')

    // Should show empty state
    await waitFor(() => {
      expect(canvas.getByText('No templates found')).toBeInTheDocument()
      expect(
        canvas.getByText('Try adjusting your search or category filter')
      ).toBeInTheDocument()
    })
  },
}

export const LoadingState: Story = {
  parameters: {
    msw: {
      handlers: [
        {
          url: '/api/templates/categories',
          method: 'GET',
          delay: 2000, // Simulate loading
          response: {
            data: mockCategories,
          },
        },
        {
          url: '/api/templates',
          method: 'GET',
          delay: 2000, // Simulate loading
          response: {
            data: mockTemplates,
          },
        },
      ],
    },
  },
  args: {
    open: false,
    onOpenChange: () => {},
    onTemplateSelect: () => {},
  },
  render: () => <TemplatePickerDemo defaultOpen={true} />,
}

export const MobileResponsive: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {
    open: false,
    onOpenChange: () => {},
    onTemplateSelect: () => {},
  },
  render: () => <TemplatePickerDemo defaultOpen={true} />,
}

export const WithManyTemplates: Story = {
  parameters: {
    msw: {
      handlers: [
        {
          url: '/api/templates',
          method: 'GET',
          response: {
            data: [
              ...mockTemplates,
              ...Array.from({ length: 20 }, (_, i) => ({
                id: `extra-${i}`,
                name: `Template ${i + 9}`,
                description: `Description for template ${i + 9}`,
                category: mockCategories[i % 4].id,
                categoryName: mockCategories[i % 4].name,
                categoryIcon: mockCategories[i % 4].icon,
                content: '# Template Content',
                variableCount: i % 3,
                rating: 3.5 + (i % 15) / 10,
                usageCount: i * 10,
                isSystem: i % 2 === 0,
                variables: [],
                tags: ['template', 'example'],
              })),
            ],
          },
        },
      ],
    },
  },
  args: {
    open: false,
    onOpenChange: () => {},
    onTemplateSelect: () => {},
  },
  render: () => <TemplatePickerDemo defaultOpen={true} />,
}
