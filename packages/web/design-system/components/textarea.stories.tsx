import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from '@/components/ui/textarea'

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
}

export const WithValue: Story = {
  args: {
    defaultValue: 'This is a textarea with some content already filled in.',
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'This textarea is disabled',
    disabled: true,
  },
}

export const WithRows: Story = {
  args: {
    placeholder: 'This textarea has 5 rows',
    rows: 5,
  },
}

export const AutoResize: Story = {
  args: {
    placeholder: 'This textarea auto-resizes based on content',
    defaultValue: 'Start typing and the textarea will grow automatically...',
  },
}

export const InvalidState: Story = {
  args: {
    placeholder: 'Invalid textarea',
    'aria-invalid': true,
  },
}

export const MaxLength: Story = {
  args: {
    placeholder: 'Max 100 characters',
    maxLength: 100,
  },
}

export const ReadOnly: Story = {
  args: {
    value: 'This textarea is read-only',
    readOnly: true,
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className='space-y-2'>
      <label htmlFor='message' className='text-sm font-medium'>
        Message
      </label>
      <Textarea id='message' placeholder='Enter your message...' />
    </div>
  ),
}

export const WithHelperText: Story = {
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
}

export const WithCharacterCount: Story = {
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
}

export const FullWidthForm: Story = {
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
}
