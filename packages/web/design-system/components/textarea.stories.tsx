import type { Meta, StoryObj } from '@storybook/nextjs'
import * as React from 'react'
import { Textarea } from '@/components/ui/textarea'
import { expect, userEvent, within } from '@storybook/test'

const meta = {
  title: 'Design System/Forms/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    rows: {
      control: 'number',
      description: 'Number of visible text lines',
    },
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter your message...',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textarea = canvas.getByPlaceholderText('Enter your message...')

    // Test textarea is visible and enabled
    await expect(textarea).toBeVisible()
    await expect(textarea).toBeEnabled()
    await expect(textarea).toHaveValue('')

    // Test typing in textarea
    await userEvent.type(textarea, 'Hello world!')
    await expect(textarea).toHaveValue('Hello world!')

    // Test keyboard interaction
    await userEvent.clear(textarea)
    await expect(textarea).toHaveValue('')

    // Test multiline text
    await userEvent.type(textarea, 'Line 1{enter}Line 2{enter}Line 3')
    await expect(textarea).toHaveValue('Line 1\nLine 2\nLine 3')
  },
}

export const WithValue: Story = {
  args: {
    defaultValue: 'This is a textarea with some content already filled in.',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textarea = canvas.getByRole('textbox')

    // Test default value is present
    await expect(textarea).toHaveValue(
      'This is a textarea with some content already filled in.'
    )

    // Test we can edit the default value
    await userEvent.clear(textarea)
    await userEvent.type(textarea, 'New content')
    await expect(textarea).toHaveValue('New content')
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'This textarea is disabled',
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textarea = canvas.getByPlaceholderText('This textarea is disabled')

    // Test textarea is disabled
    await expect(textarea).toBeDisabled()
    await expect(textarea).toHaveValue('')

    // Test typing does nothing when disabled
    await userEvent.type(textarea, 'This should not appear')
    await expect(textarea).toHaveValue('')
  },
}

export const WithRows: Story = {
  args: {
    placeholder: 'This textarea has 5 rows',
    rows: 5,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textarea = canvas.getByPlaceholderText('This textarea has 5 rows')

    // Test textarea is visible and has correct rows attribute
    await expect(textarea).toBeVisible()
    await expect(textarea).toHaveAttribute('rows', '5')

    // Test we can type multiple lines
    await userEvent.type(
      textarea,
      'Line 1{enter}Line 2{enter}Line 3{enter}Line 4{enter}Line 5'
    )
    await expect(textarea).toHaveValue('Line 1\nLine 2\nLine 3\nLine 4\nLine 5')
  },
}

export const AutoResize: Story = {
  args: {
    placeholder: 'This textarea auto-resizes based on content',
    defaultValue: 'Start typing and the textarea will grow automatically...',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textarea = canvas.getByRole('textbox')

    // Test default value is present
    await expect(textarea).toHaveValue(
      'Start typing and the textarea will grow automatically...'
    )

    // Test adding more content
    await userEvent.clear(textarea)
    await userEvent.type(
      textarea,
      'Line 1{enter}Line 2{enter}Line 3{enter}Line 4{enter}Line 5{enter}Line 6'
    )
    await expect(textarea).toHaveValue(
      'Line 1\nLine 2\nLine 3\nLine 4\nLine 5\nLine 6'
    )
  },
}

export const InvalidState: Story = {
  args: {
    placeholder: 'Invalid textarea',
    'aria-invalid': true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textarea = canvas.getByPlaceholderText('Invalid textarea')

    // Test textarea has invalid state
    await expect(textarea).toHaveAttribute('aria-invalid', 'true')
    await expect(textarea).toBeEnabled()

    // Test we can still type in invalid textarea
    await userEvent.type(textarea, 'Invalid input')
    await expect(textarea).toHaveValue('Invalid input')
  },
}

export const MaxLength: Story = {
  args: {
    placeholder: 'Max 100 characters',
    maxLength: 100,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textarea = canvas.getByPlaceholderText('Max 100 characters')

    // Test maxLength attribute
    await expect(textarea).toHaveAttribute('maxlength', '100')

    // Test typing up to max length
    const longText = 'a'.repeat(105)
    await userEvent.type(textarea, longText)

    // Should only accept 100 characters
    await expect(textarea).toHaveValue('a'.repeat(100))
    await expect((textarea as HTMLTextAreaElement).value.length).toBe(100)
  },
}

export const ReadOnly: Story = {
  args: {
    value: 'This textarea is read-only',
    readOnly: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textarea = canvas.getByRole('textbox')

    // Test textarea is read-only
    await expect(textarea).toHaveAttribute('readonly')
    await expect(textarea).toHaveValue('This textarea is read-only')

    // Test typing does nothing in read-only textarea
    await userEvent.type(textarea, ' - extra text')
    await expect(textarea).toHaveValue('This textarea is read-only')
  },
}

export const WithLabel: Story = {
  args: {},
  render: () => (
    <div className='space-y-2'>
      <label htmlFor='message' className='text-sm font-medium'>
        Message
      </label>
      <Textarea id='message' placeholder='Enter your message...' />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textarea = canvas.getByLabelText('Message')
    const label = canvas.getByText('Message')

    // Test label is visible
    await expect(label).toBeVisible()

    // Test textarea is associated with label
    await expect(textarea).toHaveAttribute('id', 'message')

    // Test clicking label focuses textarea
    await userEvent.click(label)
    await expect(textarea).toHaveFocus()

    // Test typing in textarea
    await userEvent.type(textarea, 'Hello from labeled textarea')
    await expect(textarea).toHaveValue('Hello from labeled textarea')
  },
}

export const WithHelperText: Story = {
  args: {},
  render: () => (
    <div className='space-y-2'>
      <label htmlFor='description' className='text-sm font-medium'>
        Description
      </label>
      <Textarea id='description' placeholder='Describe your issue...' />
      <p className='text-sm text-muted-foreground'>
        Please provide as much detail as possible.
      </p>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textarea = canvas.getByLabelText('Description')
    const helperText = canvas.getByText(
      'Please provide as much detail as possible.'
    )

    // Test helper text is visible
    await expect(helperText).toBeVisible()
    await expect(helperText).toHaveClass('text-sm', 'text-muted-foreground')

    // Test textarea functionality
    await userEvent.type(
      textarea,
      'This is a detailed description of the issue.'
    )
    await expect(textarea).toHaveValue(
      'This is a detailed description of the issue.'
    )
  },
}

export const WithCharacterCount: Story = {
  args: {},
  render: () => {
    const [value, setValue] = React.useState('')
    const maxLength = 200

    return (
      <div className='space-y-2'>
        <label htmlFor='bio' className='text-sm font-medium'>
          Bio
        </label>
        <Textarea
          id='bio'
          placeholder='Tell us about yourself...'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          maxLength={maxLength}
        />
        <p className='text-sm text-muted-foreground text-right'>
          {value.length}/{maxLength}
        </p>
      </div>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textarea = canvas.getByLabelText('Bio')
    const charCount = canvas.getByText('0/200')

    // Test initial state
    await expect(charCount).toBeVisible()
    await expect(textarea).toHaveValue('')

    // Test typing updates character count
    await userEvent.type(textarea, 'Hello')
    await expect(textarea).toHaveValue('Hello')
    await expect(canvas.getByText('5/200')).toBeVisible()

    // Test typing near max length
    const longText = 'a'.repeat(195)
    await userEvent.clear(textarea)
    await userEvent.type(textarea, longText)
    await expect(canvas.getByText('195/200')).toBeVisible()

    // Test max length enforcement
    await userEvent.type(textarea, 'bcdefghijk')
    await expect(textarea).toHaveValue(`${longText}bcdef`)
    await expect(canvas.getByText('200/200')).toBeVisible()
  },
}

export const FullWidthForm: Story = {
  args: {},
  render: () => (
    <form className='w-full max-w-2xl space-y-4'>
      <div className='space-y-2'>
        <label htmlFor='feedback' className='text-sm font-medium'>
          Feedback
        </label>
        <Textarea id='feedback' placeholder='Share your thoughts...' rows={6} />
      </div>
      <button
        type='submit'
        className='px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90'
      >
        Submit Feedback
      </button>
    </form>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textarea = canvas.getByLabelText('Feedback')
    const submitButton = canvas.getByRole('button', { name: 'Submit Feedback' })

    // Test form elements are visible
    await expect(textarea).toBeVisible()
    await expect(submitButton).toBeVisible()
    await expect(submitButton).toBeEnabled()

    // Test textarea has correct rows
    await expect(textarea).toHaveAttribute('rows', '6')

    // Test form interaction
    await userEvent.type(
      textarea,
      "This is my feedback about the product.\nIt has multiple lines.\nOverall, I'm satisfied."
    )
    await expect(textarea).toHaveValue(
      "This is my feedback about the product.\nIt has multiple lines.\nOverall, I'm satisfied."
    )

    // Test form element
    const form = canvas.getByRole('form')
    await expect(form).toBeInTheDocument()
  },
}
