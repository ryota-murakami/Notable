import type { Meta, StoryObj } from '@storybook/nextjs'
import { Alert, AlertTitle, AlertDescription } from './alert'
import { expect, within } from '@storybook/test'
import {
  AlertCircle,
  CheckCircle2,
  Info,
  XCircle,
  AlertTriangle,
} from 'lucide-react'

const meta: Meta<typeof Alert> = {
  title: 'Components/UI/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A versatile alert component that displays important information with different semantic variants including default, destructive, success, warning, and info states.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'success', 'warning', 'info'],
      description: 'The visual variant of the alert',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof Alert>

export const Default: Story = {
  render: (args) => (
    <Alert {...args}>
      <Info className='h-4 w-4' />
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        This is a default information alert. Use it for general messages or
        neutral information.
      </AlertDescription>
    </Alert>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByText('Information')).toBeInTheDocument()
    await expect(
      canvas.getByText(
        'This is a default information alert. Use it for general messages or neutral information.'
      )
    ).toBeInTheDocument()
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
  render: (args) => (
    <Alert {...args}>
      <XCircle className='h-4 w-4' />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Something went wrong. Please check your input and try again.
      </AlertDescription>
    </Alert>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByText('Error')).toBeInTheDocument()
    await expect(
      canvas.getByText(
        'Something went wrong. Please check your input and try again.'
      )
    ).toBeInTheDocument()
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
  },
  render: (args) => (
    <Alert {...args}>
      <CheckCircle2 className='h-4 w-4' />
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>
        Operation completed successfully. Your changes have been saved.
      </AlertDescription>
    </Alert>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByText('Success')).toBeInTheDocument()
    await expect(
      canvas.getByText(
        'Operation completed successfully. Your changes have been saved.'
      )
    ).toBeInTheDocument()
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTriangle className='h-4 w-4' />
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        This action cannot be undone. Please proceed with caution.
      </AlertDescription>
    </Alert>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByText('Warning')).toBeInTheDocument()
    await expect(
      canvas.getByText(
        'This action cannot be undone. Please proceed with caution.'
      )
    ).toBeInTheDocument()
  },
}

export const InfoVariant: Story = {
  args: {
    variant: 'info',
  },
  render: (args) => (
    <Alert {...args}>
      <Info className='h-4 w-4' />
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        Here's some helpful information about this feature. You can learn more
        in our documentation.
      </AlertDescription>
    </Alert>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByText('Information')).toBeInTheDocument()
    await expect(
      canvas.getByText(
        "Here's some helpful information about this feature. You can learn more in our documentation."
      )
    ).toBeInTheDocument()
  },
}

export const WithoutIcon: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>No Icon Alert</AlertTitle>
      <AlertDescription>
        This alert doesn't have an icon. It's still perfectly functional.
      </AlertDescription>
    </Alert>
  ),
}

export const OnlyTitle: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertCircle className='h-4 w-4' />
      <AlertTitle>Just a title, no description</AlertTitle>
    </Alert>
  ),
}

export const OnlyDescription: Story = {
  render: (args) => (
    <Alert {...args}>
      <Info className='h-4 w-4' />
      <AlertDescription>
        Just a description without a title. Sometimes that's all you need.
      </AlertDescription>
    </Alert>
  ),
}

export const LongContent: Story = {
  args: {
    variant: 'info',
  },
  render: (args) => (
    <Alert {...args}>
      <Info className='h-4 w-4' />
      <AlertTitle>Detailed Information</AlertTitle>
      <AlertDescription>
        This is a longer alert message that demonstrates how the component
        handles multiple lines of text. It can contain detailed explanations,
        instructions, or important information that users need to know. The
        component automatically adjusts to accommodate longer content while
        maintaining proper spacing and readability.
        <br />
        <br />
        It can even contain multiple paragraphs if needed. The styling remains
        consistent and the layout stays clean and professional regardless of
        content length.
      </AlertDescription>
    </Alert>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className='space-y-4'>
      <Alert>
        <Info className='h-4 w-4' />
        <AlertTitle>Default</AlertTitle>
        <AlertDescription>Default alert variant</AlertDescription>
      </Alert>

      <Alert variant='destructive'>
        <XCircle className='h-4 w-4' />
        <AlertTitle>Destructive</AlertTitle>
        <AlertDescription>Destructive alert variant</AlertDescription>
      </Alert>

      <Alert variant='success'>
        <CheckCircle2 className='h-4 w-4' />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>Success alert variant</AlertDescription>
      </Alert>

      <Alert variant='warning'>
        <AlertTriangle className='h-4 w-4' />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>Warning alert variant</AlertDescription>
      </Alert>

      <Alert variant='info'>
        <Info className='h-4 w-4' />
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>Info alert variant</AlertDescription>
      </Alert>
    </div>
  ),
}

export const CustomStyling: Story = {
  args: {
    variant: 'success',
    className: 'border-2 border-dashed max-w-md',
  },
  render: (args) => (
    <Alert {...args}>
      <CheckCircle2 className='h-4 w-4' />
      <AlertTitle>Custom Styled</AlertTitle>
      <AlertDescription>
        This alert has custom styling applied via the className prop.
      </AlertDescription>
    </Alert>
  ),
}
