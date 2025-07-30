import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { TemplateVariableForm } from './template-variable-form'
import { Button } from '@/components/ui/button'
import type { Template, TemplateVariable } from '@/types/templates'
import { expect, userEvent, waitFor, within } from '@storybook/test'

const meta = {
  title: 'UI/Templates/TemplateVariableForm',
  component: TemplateVariableForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the form is open',
    },
    onOpenChange: {
      action: 'onOpenChange',
      description: 'Callback when open state changes',
    },
    onSubmit: {
      action: 'onSubmit',
      description: 'Callback when form is submitted',
    },
  },
  decorators: [
    (Story) => (
      <div className='min-h-[700px] flex items-center justify-center'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TemplateVariableForm>

export default meta
type Story = StoryObj<typeof meta>

// Sample templates with various variable types
const simpleTemplate: Template = {
  id: '1',
  name: 'Meeting Notes',
  description: 'Capture meeting details and action items',
  category: 'work',
  categoryName: 'Work',
  categoryIcon: '💼',
  content:
    '# Meeting: {{title}}\n**Date:** {{date}}\n**Attendees:** {{attendees}}\n\n## Notes\n{{notes}}',
  variables: [
    {
      name: 'title',
      type: 'text',
      label: 'Meeting Title',
      placeholder: 'e.g., Weekly Team Sync',
      required: true,
      displayOrder: 1,
    },
    {
      name: 'date',
      type: 'date',
      label: 'Meeting Date',
      required: true,
      displayOrder: 2,
    },
    {
      name: 'attendees',
      type: 'text',
      label: 'Attendees',
      placeholder: 'List of participants',
      required: false,
      displayOrder: 3,
    },
    {
      name: 'notes',
      type: 'textarea',
      label: 'Meeting Notes',
      placeholder: 'Key discussion points and decisions',
      required: false,
      displayOrder: 4,
    },
  ],
  variableCount: 4,
  rating: 4.8,
  usageCount: 156,
  isSystem: true,
  tags: ['meeting', 'work'],
}

const complexTemplate: Template = {
  id: '2',
  name: 'Project Kickoff',
  description: 'Comprehensive project planning template',
  category: 'work',
  categoryName: 'Work',
  categoryIcon: '🚀',
  content:
    '# Project: {{projectName}}\n\n## Overview\n{{description}}\n\n## Team\n{{teamMembers}}\n\n## Timeline\n- Start: {{startDate}}\n- End: {{endDate}}\n- Duration: {{duration}} weeks\n\n## Priority: {{priority}}\n## Budget: ${{budget}}\n\n## Status\n- [ ] Planning {{planning}}\n- [ ] In Progress\n- [ ] Complete',
  variables: [
    {
      name: 'projectName',
      type: 'text',
      label: 'Project Name',
      placeholder: 'Enter project name',
      required: true,
      displayOrder: 1,
      validation: {
        minLength: 3,
        maxLength: 50,
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Project Description',
      placeholder: 'Describe the project goals and objectives',
      required: true,
      displayOrder: 2,
      helpText: 'Provide a clear overview of what this project aims to achieve',
    },
    {
      name: 'teamMembers',
      type: 'multi-select',
      label: 'Team Members',
      options: [
        'John Doe',
        'Jane Smith',
        'Mike Johnson',
        'Sarah Williams',
        'Tom Brown',
      ],
      required: true,
      displayOrder: 3,
    },
    {
      name: 'startDate',
      type: 'date',
      label: 'Start Date',
      required: true,
      displayOrder: 4,
    },
    {
      name: 'endDate',
      type: 'date',
      label: 'End Date',
      required: true,
      displayOrder: 5,
    },
    {
      name: 'duration',
      type: 'number',
      label: 'Duration (weeks)',
      placeholder: 'Project duration',
      required: true,
      displayOrder: 6,
      validation: {
        min: 1,
        max: 52,
      },
    },
    {
      name: 'priority',
      type: 'select',
      label: 'Priority Level',
      options: ['Low', 'Medium', 'High', 'Critical'],
      required: true,
      displayOrder: 7,
      defaultValue: 'Medium',
    },
    {
      name: 'budget',
      type: 'number',
      label: 'Budget',
      placeholder: 'Project budget in USD',
      required: false,
      displayOrder: 8,
      validation: {
        min: 0,
      },
    },
    {
      name: 'planning',
      type: 'boolean',
      label: 'Planning Phase Complete',
      placeholder: 'Check if planning is complete',
      required: false,
      displayOrder: 9,
      defaultValue: false,
    },
  ],
  variableCount: 9,
  rating: 4.6,
  usageCount: 89,
  isSystem: true,
  tags: ['project', 'planning'],
}

const timeTrackingTemplate: Template = {
  id: '3',
  name: 'Time Entry',
  description: 'Track time spent on tasks',
  category: 'productivity',
  categoryName: 'Productivity',
  categoryIcon: '⏱️',
  content:
    '# Time Entry: {{task}}\n\n**Date:** {{date}}\n**Start:** {{startTime}}\n**End:** {{endTime}}\n**Duration:** {{hours}} hours\n\n## Notes\n{{notes}}',
  variables: [
    {
      name: 'task',
      type: 'text',
      label: 'Task Name',
      required: true,
      displayOrder: 1,
    },
    {
      name: 'date',
      type: 'date',
      label: 'Date',
      required: true,
      displayOrder: 2,
      defaultValue: new Date().toISOString().split('T')[0],
    },
    {
      name: 'startTime',
      type: 'time',
      label: 'Start Time',
      required: true,
      displayOrder: 3,
    },
    {
      name: 'endTime',
      type: 'time',
      label: 'End Time',
      required: true,
      displayOrder: 4,
    },
    {
      name: 'hours',
      type: 'number',
      label: 'Total Hours',
      required: true,
      displayOrder: 5,
      validation: {
        min: 0.25,
        max: 24,
      },
    },
    {
      name: 'notes',
      type: 'textarea',
      label: 'Notes',
      placeholder: 'Additional details about the work performed',
      required: false,
      displayOrder: 6,
    },
  ],
  variableCount: 6,
  rating: 4.5,
  usageCount: 234,
  isSystem: false,
  tags: ['time', 'tracking'],
}

// Wrapper component for controlled state
const TemplateVariableFormDemo = ({
  template,
  defaultOpen = false,
}: {
  template: Template | null
  defaultOpen?: boolean
}) => {
  const [open, setOpen] = useState(defaultOpen)
  const [submittedData, setSubmittedData] = useState<{
    title: string
    variables: Record<string, any>
  } | null>(null)

  return (
    <>
      <div className='space-y-4'>
        <Button onClick={() => setOpen(true)}>
          Fill Template: {template?.name || 'None'}
        </Button>
        {submittedData && (
          <div className='p-4 border rounded-lg'>
            <h3 className='font-semibold mb-2'>Submitted Data:</h3>
            <p className='text-sm mb-2'>Title: {submittedData.title}</p>
            <pre className='text-xs bg-muted p-2 rounded overflow-auto'>
              {JSON.stringify(submittedData.variables, null, 2)}
            </pre>
          </div>
        )}
      </div>
      <TemplateVariableForm
        open={open}
        onOpenChange={setOpen}
        template={template}
        onSubmit={async (title, variables) => {
          setSubmittedData({ title, variables })
          console.info('Form submitted:', { title, variables })
        }}
      />
    </>
  )
}

export const Default: Story = {
  render: () => <TemplateVariableFormDemo template={simpleTemplate} />,
}

export const OpenByDefault: Story = {
  render: () => (
    <TemplateVariableFormDemo template={simpleTemplate} defaultOpen={true} />
  ),
}

export const ComplexForm: Story = {
  render: () => (
    <TemplateVariableFormDemo template={complexTemplate} defaultOpen={true} />
  ),
}

export const TimeTracking: Story = {
  render: () => (
    <TemplateVariableFormDemo
      template={timeTrackingTemplate}
      defaultOpen={true}
    />
  ),
}

export const NoTemplate: Story = {
  render: () => <TemplateVariableFormDemo template={null} defaultOpen={true} />,
}

// Interactive stories
export const FillSimpleForm: Story = {
  render: () => (
    <TemplateVariableFormDemo template={simpleTemplate} defaultOpen={true} />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for dialog
    await waitFor(() => {
      expect(canvas.getByText('Create from Template')).toBeInTheDocument()
    })

    // Fill in meeting title
    const titleInput = canvas.getByLabelText(/Meeting Title/)
    await userEvent.clear(titleInput)
    await userEvent.type(titleInput, 'Q4 Planning Meeting')

    // Select date
    const dateInput = canvas.getByLabelText(/Meeting Date/)
    await userEvent.type(dateInput, '2024-03-15')

    // Fill attendees
    const attendeesInput = canvas.getByLabelText(/Attendees/)
    await userEvent.type(attendeesInput, 'John, Jane, Mike')

    // Fill notes
    const notesTextarea = canvas.getByLabelText(/Meeting Notes/)
    await userEvent.type(
      notesTextarea,
      'Discussed Q4 objectives and key deliverables'
    )

    // Submit form
    const submitButton = canvas.getByRole('button', { name: /Create Note/ })
    await userEvent.click(submitButton)

    // Should close dialog and show submitted data
    await waitFor(() => {
      expect(canvas.queryByText('Create from Template')).not.toBeInTheDocument()
      expect(canvas.getByText('Submitted Data:')).toBeInTheDocument()
    })
  },
}

export const ValidationErrors: Story = {
  render: () => (
    <TemplateVariableFormDemo template={complexTemplate} defaultOpen={true} />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for dialog
    await waitFor(() => {
      expect(canvas.getByText('Create from Template')).toBeInTheDocument()
    })

    // Try to submit without filling required fields
    const submitButton = canvas.getByRole('button', { name: /Create Note/ })
    await userEvent.click(submitButton)

    // Should show validation errors
    await expect(canvas.getByText('Note title is required')).toBeInTheDocument()
    await expect(
      canvas.getByText('Project Name is required')
    ).toBeInTheDocument()
    await expect(
      canvas.getByText('Project Description is required')
    ).toBeInTheDocument()

    // Fill project name with too short value
    const projectNameInput = canvas.getByLabelText(/Project Name/)
    await userEvent.type(projectNameInput, 'AB')

    // Should show min length error
    const submitAgain = canvas.getByRole('button', { name: /Create Note/ })
    await userEvent.click(submitAgain)
    await expect(
      canvas.getByText('Must be at least 3 characters')
    ).toBeInTheDocument()
  },
}

export const MultiSelectInteraction: Story = {
  render: () => (
    <TemplateVariableFormDemo template={complexTemplate} defaultOpen={true} />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for dialog
    await waitFor(() => {
      expect(canvas.getByText('Create from Template')).toBeInTheDocument()
    })

    // Select multiple team members
    const johnCheckbox = canvas.getByRole('checkbox', { name: /John Doe/ })
    const janeCheckbox = canvas.getByRole('checkbox', { name: /Jane Smith/ })
    const mikeCheckbox = canvas.getByRole('checkbox', { name: /Mike Johnson/ })

    await userEvent.click(johnCheckbox)
    await userEvent.click(janeCheckbox)
    await userEvent.click(mikeCheckbox)

    // Should be checked
    await expect(johnCheckbox).toBeChecked()
    await expect(janeCheckbox).toBeChecked()
    await expect(mikeCheckbox).toBeChecked()

    // Uncheck one
    await userEvent.click(janeCheckbox)
    await expect(janeCheckbox).not.toBeChecked()
  },
}

export const SelectDropdown: Story = {
  render: () => (
    <TemplateVariableFormDemo template={complexTemplate} defaultOpen={true} />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for dialog
    await waitFor(() => {
      expect(canvas.getByText('Create from Template')).toBeInTheDocument()
    })

    // Open priority dropdown
    const priorityTrigger = canvas.getByRole('combobox', {
      name: /Priority Level/,
    })
    await userEvent.click(priorityTrigger)

    // Select High priority
    const highOption = canvas.getByRole('option', { name: 'High' })
    await userEvent.click(highOption)

    // Should show selected value
    await expect(priorityTrigger).toHaveTextContent('High')
  },
}

export const NumberValidation: Story = {
  render: () => (
    <TemplateVariableFormDemo template={complexTemplate} defaultOpen={true} />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for dialog
    await waitFor(() => {
      expect(canvas.getByText('Create from Template')).toBeInTheDocument()
    })

    // Enter invalid duration
    const durationInput = canvas.getByLabelText(/Duration \(weeks\)/)
    await userEvent.type(durationInput, '100')

    // Try to submit
    const submitButton = canvas.getByRole('button', { name: /Create Note/ })
    await userEvent.click(submitButton)

    // Should show max validation error
    await expect(canvas.getByText('Must be at most 52')).toBeInTheDocument()

    // Fix the value
    await userEvent.clear(durationInput)
    await userEvent.type(durationInput, '12')

    // Error should disappear
    await expect(
      canvas.queryByText('Must be at most 52')
    ).not.toBeInTheDocument()
  },
}

export const BooleanField: Story = {
  render: () => (
    <TemplateVariableFormDemo template={complexTemplate} defaultOpen={true} />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for dialog
    await waitFor(() => {
      expect(canvas.getByText('Create from Template')).toBeInTheDocument()
    })

    // Find and click boolean checkbox
    const planningCheckbox = canvas.getByRole('checkbox', {
      name: /Check if planning is complete/,
    })

    // Should be unchecked by default
    await expect(planningCheckbox).not.toBeChecked()

    // Check it
    await userEvent.click(planningCheckbox)
    await expect(planningCheckbox).toBeChecked()

    // Uncheck it
    await userEvent.click(planningCheckbox)
    await expect(planningCheckbox).not.toBeChecked()
  },
}

export const ScrollableForm: Story = {
  render: () => {
    const manyFieldsTemplate: Template = {
      ...complexTemplate,
      id: '4',
      name: 'Extended Form',
      variables: [
        ...complexTemplate.variables!,
        ...Array.from({ length: 10 }, (_, i) => ({
          name: `field${i + 10}`,
          type: 'text' as const,
          label: `Additional Field ${i + 1}`,
          placeholder: `Enter value for field ${i + 1}`,
          required: false,
          displayOrder: i + 10,
        })),
      ],
    }
    return (
      <TemplateVariableFormDemo
        template={manyFieldsTemplate}
        defaultOpen={true}
      />
    )
  },
}

export const CancelForm: Story = {
  render: () => (
    <TemplateVariableFormDemo template={simpleTemplate} defaultOpen={true} />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for dialog
    await waitFor(() => {
      expect(canvas.getByText('Create from Template')).toBeInTheDocument()
    })

    // Fill some fields
    const titleInput = canvas.getByLabelText(/Meeting Title/)
    await userEvent.type(titleInput, 'Test Meeting')

    // Click cancel
    const cancelButton = canvas.getByRole('button', { name: 'Cancel' })
    await userEvent.click(cancelButton)

    // Dialog should close
    await waitFor(() => {
      expect(canvas.queryByText('Create from Template')).not.toBeInTheDocument()
    })
  },
}

export const LoadingState: Story = {
  render: () => {
    const [isLoading, setIsLoading] = useState(false)

    return (
      <>
        <Button onClick={() => setIsLoading(!isLoading)}>
          Toggle Loading State
        </Button>
        <TemplateVariableForm
          open={true}
          onOpenChange={() => {}}
          template={simpleTemplate}
          onSubmit={async () => {
            setIsLoading(true)
            await new Promise((resolve) => setTimeout(resolve, 2000))
            setIsLoading(false)
          }}
        />
      </>
    )
  },
}

export const MobileResponsive: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  render: () => (
    <TemplateVariableFormDemo template={simpleTemplate} defaultOpen={true} />
  ),
}
