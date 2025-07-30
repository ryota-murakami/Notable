import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { TemplatePicker } from './template-picker'
import { Button } from '@/components/ui/button'
import type { Template, TemplateCategory } from '@/types/templates'
import { within, userEvent, expect, waitFor } from '@storybook/test'

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

// Mock data
const mockCategories: TemplateCategory[] = [
  {
    id: 'personal',
    name: 'Personal',
    icon: '👤',
    templateCount: 8,
  },
  {
    id: 'work',
    name: 'Work',
    icon: '💼',
    templateCount: 12,
  },
  {
    id: 'education',
    name: 'Education',
    icon: '📚',
    templateCount: 6,
  },
  {
    id: 'creative',
    name: 'Creative',
    icon: '🎨',
    templateCount: 5,
  },
]

const mockTemplates: Template[] = [
  // Personal templates
  {
    id: '1',
    name: 'Daily Journal',
    description: 'Track your thoughts, gratitude, and daily reflections',
    category: 'personal',
    categoryName: 'Personal',
    categoryIcon: '👤',
    content:
      "# {{date}}\n\n## Gratitude\n- \n\n## Today's Thoughts\n\n## Tomorrow's Goals\n",
    variableCount: 1,
    rating: 4.8,
    usageCount: 156,
    isSystem: true,
    variables: [{ name: 'date', type: 'date', required: true }],
    tags: ['journal', 'daily', 'reflection'],
  },
  {
    id: '2',
    name: 'Habit Tracker',
    description:
      'Monitor and build positive habits with this tracking template',
    category: 'personal',
    categoryName: 'Personal',
    categoryIcon: '👤',
    content:
      '# Habit Tracking - {{month}}\n\n## Habits to Track\n- [ ] Morning Exercise\n- [ ] Reading (30 min)\n- [ ] Meditation\n',
    variableCount: 1,
    rating: 4.6,
    usageCount: 89,
    isSystem: true,
    variables: [{ name: 'month', type: 'text', required: true }],
    tags: ['habits', 'tracking', 'goals'],
  },
  // Work templates
  {
    id: '3',
    name: 'Meeting Notes',
    description:
      'Structured template for capturing meeting details and action items',
    category: 'work',
    categoryName: 'Work',
    categoryIcon: '💼',
    content:
      '# Meeting: {{title}}\n**Date:** {{date}}\n**Attendees:** {{attendees}}\n\n## Agenda\n\n## Discussion\n\n## Action Items\n- [ ] \n',
    variableCount: 3,
    rating: 4.9,
    usageCount: 342,
    isSystem: true,
    variables: [
      { name: 'title', type: 'text', required: true },
      { name: 'date', type: 'date', required: true },
      { name: 'attendees', type: 'text', required: false },
    ],
    tags: ['meeting', 'work', 'notes'],
  },
  {
    id: '4',
    name: 'Project Proposal',
    description:
      'Professional template for creating detailed project proposals',
    category: 'work',
    categoryName: 'Work',
    categoryIcon: '💼',
    content:
      '# Project Proposal: {{projectName}}\n\n## Executive Summary\n\n## Objectives\n\n## Timeline\n\n## Budget\n\n## Resources',
    variableCount: 1,
    rating: 4.7,
    usageCount: 128,
    isSystem: true,
    variables: [{ name: 'projectName', type: 'text', required: true }],
    tags: ['project', 'proposal', 'planning'],
  },
  // Education templates
  {
    id: '5',
    name: 'Lecture Notes',
    description: 'Organize your class notes with this structured template',
    category: 'education',
    categoryName: 'Education',
    categoryIcon: '📚',
    content:
      '# {{subject}} - Lecture {{number}}\n**Date:** {{date}}\n**Topic:** {{topic}}\n\n## Key Concepts\n\n## Examples\n\n## Questions\n',
    variableCount: 4,
    rating: 4.5,
    usageCount: 234,
    isSystem: true,
    variables: [
      { name: 'subject', type: 'text', required: true },
      { name: 'number', type: 'number', required: true },
      { name: 'date', type: 'date', required: true },
      { name: 'topic', type: 'text', required: true },
    ],
    tags: ['education', 'notes', 'study'],
  },
  {
    id: '6',
    name: 'Study Plan',
    description: 'Create an effective study schedule and track progress',
    category: 'education',
    categoryName: 'Education',
    categoryIcon: '📚',
    content:
      '# Study Plan: {{subject}}\n\n## Goals\n\n## Schedule\n\n### Week 1\n- [ ] \n\n## Resources\n\n## Progress Tracking',
    variableCount: 1,
    rating: 4.4,
    usageCount: 167,
    isSystem: false,
    variables: [{ name: 'subject', type: 'text', required: true }],
    tags: ['study', 'planning', 'education'],
  },
  // Creative templates
  {
    id: '7',
    name: 'Story Outline',
    description:
      'Plan your creative writing with character and plot development',
    category: 'creative',
    categoryName: 'Creative',
    categoryIcon: '🎨',
    content:
      '# {{storyTitle}}\n\n## Characters\n\n### Protagonist\n\n### Antagonist\n\n## Plot Outline\n\n### Act 1\n\n### Act 2\n\n### Act 3',
    variableCount: 1,
    rating: 4.6,
    usageCount: 78,
    isSystem: true,
    variables: [{ name: 'storyTitle', type: 'text', required: true }],
    tags: ['writing', 'creative', 'story'],
  },
  {
    id: '8',
    name: 'Recipe Card',
    description:
      'Document your favorite recipes with ingredients and instructions',
    category: 'creative',
    categoryName: 'Creative',
    categoryIcon: '🎨',
    content:
      '# {{recipeName}}\n\n**Prep Time:** {{prepTime}}\n**Cook Time:** {{cookTime}}\n**Servings:** {{servings}}\n\n## Ingredients\n- \n\n## Instructions\n1. ',
    variableCount: 4,
    rating: 4.8,
    usageCount: 95,
    isSystem: false,
    variables: [
      { name: 'recipeName', type: 'text', required: true },
      { name: 'prepTime', type: 'text', required: false },
      { name: 'cookTime', type: 'text', required: false },
      { name: 'servings', type: 'number', required: false },
    ],
    tags: ['recipe', 'cooking', 'food'],
  },
]

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
  render: () => <TemplatePickerDemo />,
}

export const OpenByDefault: Story = {
  render: () => <TemplatePickerDemo defaultOpen={true} />,
}

// Interactive stories
export const SearchTemplates: Story = {
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
  render: () => <TemplatePickerDemo defaultOpen={true} />,
}

export const MobileResponsive: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
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
  render: () => <TemplatePickerDemo defaultOpen={true} />,
}
