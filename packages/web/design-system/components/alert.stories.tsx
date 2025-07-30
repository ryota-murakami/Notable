import type { Meta, StoryObj } from '@storybook/react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Terminal, AlertCircle, CheckCircle2, Info } from 'lucide-react'

const meta = {
  title: 'Design System/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'success', 'warning', 'info'],
    },
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Alert>
      <Terminal className='h-4 w-4' />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  render: () => (
    <Alert variant='destructive'>
      <AlertCircle className='h-4 w-4' />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  ),
}

export const Success: Story = {
  render: () => (
    <Alert variant='success'>
      <CheckCircle2 className='h-4 w-4' />
      <AlertTitle>Success!</AlertTitle>
      <AlertDescription>
        Your changes have been saved successfully.
      </AlertDescription>
    </Alert>
  ),
}

export const Info: Story = {
  render: () => (
    <Alert variant='info'>
      <Info className='h-4 w-4' />
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        This is an informational message for your reference.
      </AlertDescription>
    </Alert>
  ),
}

export const Warning: Story = {
  render: () => (
    <Alert variant='warning'>
      <AlertCircle className='h-4 w-4' />
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        Please review this important information before proceeding.
      </AlertDescription>
    </Alert>
  ),
}

export const SimpleAlert: Story = {
  render: () => (
    <Alert>
      <AlertDescription>
        This is a simple alert without a title or icon.
      </AlertDescription>
    </Alert>
  ),
}

export const MultipleAlerts: Story = {
  render: () => (
    <div className='space-y-4'>
      <Alert>
        <Terminal className='h-4 w-4' />
        <AlertTitle>Default Alert</AlertTitle>
        <AlertDescription>
          This is a default alert with standard styling.
        </AlertDescription>
      </Alert>

      <Alert variant='destructive'>
        <AlertCircle className='h-4 w-4' />
        <AlertTitle>Destructive Alert</AlertTitle>
        <AlertDescription>
          This alert indicates an error or destructive action.
        </AlertDescription>
      </Alert>

      <Alert variant='success'>
        <CheckCircle2 className='h-4 w-4' />
        <AlertTitle>Success Alert</AlertTitle>
        <AlertDescription>
          This alert indicates a successful operation.
        </AlertDescription>
      </Alert>

      <Alert variant='warning'>
        <Info className='h-4 w-4' />
        <AlertTitle>Warning Alert</AlertTitle>
        <AlertDescription>
          This alert provides a warning message.
        </AlertDescription>
      </Alert>

      <Alert variant='info'>
        <Info className='h-4 w-4' />
        <AlertTitle>Info Alert</AlertTitle>
        <AlertDescription>
          This alert provides informational content.
        </AlertDescription>
      </Alert>
    </div>
  ),
}

export const LongContent: Story = {
  render: () => (
    <Alert className='max-w-2xl'>
      <AlertCircle className='h-4 w-4' />
      <AlertTitle>Important Notice</AlertTitle>
      <AlertDescription>
        This is an alert with longer content to demonstrate how it handles
        multiple lines of text. The alert component should gracefully handle
        longer descriptions while maintaining proper spacing and readability.
        You can include multiple paragraphs, lists, or any other content that
        needs to be displayed to the user.
      </AlertDescription>
    </Alert>
  ),
}

export const CustomStyling: Story = {
  render: () => (
    <Alert className='bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 dark:from-purple-950 dark:to-pink-950 dark:border-purple-800'>
      <AlertTitle className='text-purple-900 dark:text-purple-100'>
        Custom Styled Alert
      </AlertTitle>
      <AlertDescription className='text-purple-700 dark:text-purple-300'>
        This alert demonstrates custom styling with gradient backgrounds and
        custom colors.
      </AlertDescription>
    </Alert>
  ),
}
