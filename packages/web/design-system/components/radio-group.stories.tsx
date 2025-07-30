import type { Meta, StoryObj } from '@storybook/nextjs'
import React from 'react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'Design System/Forms/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'Selected value',
    },
    onValueChange: {
      action: 'value-changed',
    },
  },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: null,
  },
  render: () => (
    <RadioGroup defaultValue='option-one'>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option-one' id='option-one' />
        <Label htmlFor='option-one'>Option One</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option-two' id='option-two' />
        <Label htmlFor='option-two'>Option Two</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option-three' id='option-three' />
        <Label htmlFor='option-three'>Option Three</Label>
      </div>
    </RadioGroup>
  ),
}

export const NotificationPreferences: Story = {
  args: {
    children: null,
  },
  render: () => (
    <div className='space-y-4'>
      <div className='space-y-2'>
        <h3 className='text-lg font-medium'>Email Notifications</h3>
        <p className='text-sm text-muted-foreground'>
          Choose how often you want to receive email notifications
        </p>
      </div>
      <RadioGroup defaultValue='daily'>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='all' id='all' />
          <Label htmlFor='all'>All new messages</Label>
        </div>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='daily' id='daily' />
          <Label htmlFor='daily'>Daily digest</Label>
        </div>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='weekly' id='weekly' />
          <Label htmlFor='weekly'>Weekly summary</Label>
        </div>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='none' id='none' />
          <Label htmlFor='none'>No emails</Label>
        </div>
      </RadioGroup>
    </div>
  ),
}

export const PaymentMethod: Story = {
  args: {
    children: null,
  },
  render: () => (
    <div className='space-y-4'>
      <h3 className='text-lg font-medium'>Payment Method</h3>
      <RadioGroup defaultValue='card'>
        <div className='flex items-center space-x-2 rounded-lg border p-4'>
          <RadioGroupItem value='card' id='card' />
          <Label htmlFor='card' className='flex-1 cursor-pointer'>
            <div className='font-medium'>Credit Card</div>
            <div className='text-sm text-muted-foreground'>
              Pay with Visa, Mastercard, or American Express
            </div>
          </Label>
        </div>
        <div className='flex items-center space-x-2 rounded-lg border p-4'>
          <RadioGroupItem value='paypal' id='paypal' />
          <Label htmlFor='paypal' className='flex-1 cursor-pointer'>
            <div className='font-medium'>PayPal</div>
            <div className='text-sm text-muted-foreground'>
              Pay with your PayPal account
            </div>
          </Label>
        </div>
        <div className='flex items-center space-x-2 rounded-lg border p-4'>
          <RadioGroupItem value='bank' id='bank' />
          <Label htmlFor='bank' className='flex-1 cursor-pointer'>
            <div className='font-medium'>Bank Transfer</div>
            <div className='text-sm text-muted-foreground'>
              Direct bank account transfer
            </div>
          </Label>
        </div>
      </RadioGroup>
    </div>
  ),
}

export const Controlled: Story = {
  args: {
    children: null,
  },
  render: () => {
    const [value, setValue] = React.useState('option-one')

    return (
      <div className='space-y-4'>
        <RadioGroup value={value} onValueChange={setValue}>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='option-one' id='c-option-one' />
            <Label htmlFor='c-option-one'>Option One</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='option-two' id='c-option-two' />
            <Label htmlFor='c-option-two'>Option Two</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='option-three' id='c-option-three' />
            <Label htmlFor='c-option-three'>Option Three</Label>
          </div>
        </RadioGroup>
        <p className='text-sm text-muted-foreground'>Selected value: {value}</p>
        <button
          onClick={() => setValue('option-two')}
          className='px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90'
        >
          Set to Option Two
        </button>
      </div>
    )
  },
}

export const DisabledOptions: Story = {
  args: {
    children: null,
  },
  render: () => (
    <RadioGroup defaultValue='active'>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='active' id='active' />
        <Label htmlFor='active'>Active Plan</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='premium' id='premium' disabled />
        <Label htmlFor='premium' className='opacity-50 cursor-not-allowed'>
          Premium Plan (Coming Soon)
        </Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='enterprise' id='enterprise' disabled />
        <Label htmlFor='enterprise' className='opacity-50 cursor-not-allowed'>
          Enterprise Plan (Contact Sales)
        </Label>
      </div>
    </RadioGroup>
  ),
}

export const HorizontalLayout: Story = {
  args: {
    children: null,
  },
  render: () => (
    <RadioGroup defaultValue='left' className='flex flex-row gap-4'>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='left' id='left' />
        <Label htmlFor='left'>Left</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='center' id='center' />
        <Label htmlFor='center'>Center</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='right' id='right' />
        <Label htmlFor='right'>Right</Label>
      </div>
    </RadioGroup>
  ),
}

export const ThemeSelector: Story = {
  args: {
    children: null,
  },
  render: () => (
    <div className='space-y-4'>
      <h3 className='text-lg font-medium'>Choose Theme</h3>
      <RadioGroup defaultValue='system'>
        <div className='grid grid-cols-3 gap-4'>
          <div>
            <RadioGroupItem value='light' id='light' className='peer sr-only' />
            <Label
              htmlFor='light'
              className='flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='mb-3 h-6 w-6'
              >
                <circle cx='12' cy='12' r='4' />
                <path d='M12 2v2' />
                <path d='M12 20v2' />
                <path d='m4.93 4.93 1.41 1.41' />
                <path d='m17.66 17.66 1.41 1.41' />
                <path d='M2 12h2' />
                <path d='M20 12h2' />
                <path d='m19.07 4.93-1.41 1.41' />
                <path d='m6.34 17.66-1.41 1.41' />
              </svg>
              Light
            </Label>
          </div>
          <div>
            <RadioGroupItem value='dark' id='dark' className='peer sr-only' />
            <Label
              htmlFor='dark'
              className='flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='mb-3 h-6 w-6'
              >
                <path d='M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z' />
              </svg>
              Dark
            </Label>
          </div>
          <div>
            <RadioGroupItem
              value='system'
              id='system'
              className='peer sr-only'
            />
            <Label
              htmlFor='system'
              className='flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='mb-3 h-6 w-6'
              >
                <rect width='20' height='14' x='2' y='3' rx='2' />
                <line x1='8' x2='16' y1='21' y2='21' />
                <line x1='12' x2='12' y1='17' y2='21' />
              </svg>
              System
            </Label>
          </div>
        </div>
      </RadioGroup>
    </div>
  ),
}

export const SurveyQuestion: Story = {
  args: {
    children: null,
  },
  render: () => (
    <form className='space-y-6'>
      <div className='space-y-4'>
        <h3 className='text-lg font-medium'>
          How satisfied are you with our service?
        </h3>
        <RadioGroup defaultValue='satisfied'>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='very-satisfied' id='very-satisfied' />
            <Label htmlFor='very-satisfied'>Very Satisfied</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='satisfied' id='satisfied' />
            <Label htmlFor='satisfied'>Satisfied</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='neutral' id='neutral' />
            <Label htmlFor='neutral'>Neutral</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='dissatisfied' id='dissatisfied' />
            <Label htmlFor='dissatisfied'>Dissatisfied</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='very-dissatisfied' id='very-dissatisfied' />
            <Label htmlFor='very-dissatisfied'>Very Dissatisfied</Label>
          </div>
        </RadioGroup>
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

export const FormValidation: Story = {
  args: {
    children: null,
  },
  render: () => {
    const [value, setValue] = React.useState('')
    const [error, setError] = React.useState(false)

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      if (!value) {
        setError(true)
      } else {
        setError(false)
        console.info(`Selected: ${value}`)
      }
    }

    return (
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div className='space-y-2'>
          <Label className={error ? 'text-destructive' : ''}>
            Select your preferred contact method *
          </Label>
          <RadioGroup
            value={value}
            onValueChange={(v) => {
              setValue(v)
              setError(false)
            }}
          >
            <div className='flex items-center space-x-2'>
              <RadioGroupItem value='email' id='contact-email' />
              <Label htmlFor='contact-email'>Email</Label>
            </div>
            <div className='flex items-center space-x-2'>
              <RadioGroupItem value='phone' id='contact-phone' />
              <Label htmlFor='contact-phone'>Phone</Label>
            </div>
            <div className='flex items-center space-x-2'>
              <RadioGroupItem value='sms' id='contact-sms' />
              <Label htmlFor='contact-sms'>SMS</Label>
            </div>
          </RadioGroup>
          {error && (
            <p className='text-sm text-destructive'>
              Please select a contact method
            </p>
          )}
        </div>
        <button
          type='submit'
          className='px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90'
        >
          Submit
        </button>
      </form>
    )
  },
}
