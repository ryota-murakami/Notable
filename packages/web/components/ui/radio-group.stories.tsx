import type { Meta, StoryObj } from '@storybook/nextjs'
import { RadioGroup, RadioGroupItem } from './radio-group'
import { expect, userEvent, within } from '@storybook/test'
import { Label } from './label'
import * as React from 'react'

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/UI/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A set of checkable buttons where only one can be checked at a time. Built on Radix UI for full accessibility support.',
      },
    },
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the radio group is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the radio group is required',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the radio group',
    },
    defaultValue: {
      control: 'text',
      description: 'The default selected value',
    },
    value: {
      control: 'text',
      description: 'The controlled selected value',
    },
  },
}

export default meta
type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Check initial state
    const optionOne = canvas.getByLabelText('Option One')
    await expect(optionOne).toBeChecked()

    // Click another option
    const optionTwo = canvas.getByLabelText('Option Two')
    await userEvent.click(optionTwo)
    await expect(optionTwo).toBeChecked()
    await expect(optionOne).not.toBeChecked()
  },
}

export const Horizontal: Story = {
  render: () => (
    <RadioGroup
      defaultValue='card'
      orientation='horizontal'
      className='flex gap-4'
    >
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='card' id='card' />
        <Label htmlFor='card'>Card</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='paypal' id='paypal' />
        <Label htmlFor='paypal'>PayPal</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='apple' id='apple' />
        <Label htmlFor='apple'>Apple Pay</Label>
      </div>
    </RadioGroup>
  ),
}

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue='option-one' disabled>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option-one' id='disabled-one' />
        <Label htmlFor='disabled-one' className='text-muted-foreground'>
          Option One (Disabled)
        </Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option-two' id='disabled-two' />
        <Label htmlFor='disabled-two' className='text-muted-foreground'>
          Option Two (Disabled)
        </Label>
      </div>
    </RadioGroup>
  ),
}

export const WithDescriptions: Story = {
  render: () => (
    <RadioGroup defaultValue='startup' className='space-y-4'>
      <div className='flex items-start space-x-3'>
        <RadioGroupItem value='startup' id='startup' className='mt-1' />
        <div className='space-y-1'>
          <Label htmlFor='startup' className='font-medium'>
            Startup
          </Label>
          <p className='text-sm text-muted-foreground'>
            Perfect for small teams just getting started
          </p>
        </div>
      </div>
      <div className='flex items-start space-x-3'>
        <RadioGroupItem value='business' id='business' className='mt-1' />
        <div className='space-y-1'>
          <Label htmlFor='business' className='font-medium'>
            Business
          </Label>
          <p className='text-sm text-muted-foreground'>
            For growing teams that need more features
          </p>
        </div>
      </div>
      <div className='flex items-start space-x-3'>
        <RadioGroupItem value='enterprise' id='enterprise' className='mt-1' />
        <div className='space-y-1'>
          <Label htmlFor='enterprise' className='font-medium'>
            Enterprise
          </Label>
          <p className='text-sm text-muted-foreground'>
            Advanced features for large organizations
          </p>
        </div>
      </div>
    </RadioGroup>
  ),
}

function ControlledRadioGroup() {
  const [value, setValue] = React.useState('email')

  return (
    <div className='space-y-4'>
      <RadioGroup value={value} onValueChange={setValue}>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='email' id='email' />
          <Label htmlFor='email'>Email</Label>
        </div>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='sms' id='sms' />
          <Label htmlFor='sms'>SMS</Label>
        </div>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='push' id='push' />
          <Label htmlFor='push'>Push Notification</Label>
        </div>
      </RadioGroup>
      <p className='text-sm text-muted-foreground'>
        Selected notification method: <strong>{value}</strong>
      </p>
    </div>
  )
}

export const Controlled: Story = {
  render: () => <ControlledRadioGroup />,
}

export const InForm: Story = {
  render: () => (
    <form className='space-y-6' onSubmit={(e) => e.preventDefault()}>
      <div className='space-y-3'>
        <Label className='text-base font-medium'>Shipping Method</Label>
        <RadioGroup defaultValue='standard' name='shipping'>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='standard' id='standard' />
            <Label htmlFor='standard'>Standard (5-7 days)</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='express' id='express' />
            <Label htmlFor='express'>Express (2-3 days)</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='overnight' id='overnight' />
            <Label htmlFor='overnight'>Overnight (1 day)</Label>
          </div>
        </RadioGroup>
      </div>
      <button
        type='submit'
        className='px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90'
      >
        Continue
      </button>
    </form>
  ),
}

export const Required: Story = {
  render: () => (
    <form className='space-y-6' onSubmit={(e) => e.preventDefault()}>
      <div className='space-y-3'>
        <Label className='text-base font-medium'>
          Terms Agreement <span className='text-destructive'>*</span>
        </Label>
        <RadioGroup required name='terms'>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='agree' id='agree' />
            <Label htmlFor='agree'>I agree to the terms</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='disagree' id='disagree' />
            <Label htmlFor='disagree'>I do not agree</Label>
          </div>
        </RadioGroup>
      </div>
      <button
        type='submit'
        className='px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90'
      >
        Submit
      </button>
    </form>
  ),
}

export const CustomStyling: Story = {
  render: () => (
    <RadioGroup defaultValue='option-one' className='space-y-3'>
      <div className='flex items-center space-x-2 p-4 border rounded-lg hover:bg-accent cursor-pointer'>
        <RadioGroupItem value='option-one' id='custom-one' />
        <Label htmlFor='custom-one' className='cursor-pointer flex-1'>
          Custom Styled Option One
        </Label>
      </div>
      <div className='flex items-center space-x-2 p-4 border rounded-lg hover:bg-accent cursor-pointer'>
        <RadioGroupItem value='option-two' id='custom-two' />
        <Label htmlFor='custom-two' className='cursor-pointer flex-1'>
          Custom Styled Option Two
        </Label>
      </div>
      <div className='flex items-center space-x-2 p-4 border rounded-lg hover:bg-accent cursor-pointer'>
        <RadioGroupItem value='option-three' id='custom-three' />
        <Label htmlFor='custom-three' className='cursor-pointer flex-1'>
          Custom Styled Option Three
        </Label>
      </div>
    </RadioGroup>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <RadioGroup defaultValue='light' className='grid grid-cols-3 gap-4'>
      <div>
        <RadioGroupItem value='light' id='light' className='peer sr-only' />
        <Label
          htmlFor='light'
          className='flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='mb-3 h-6 w-6'
          >
            <circle cx='12' cy='12' r='4' />
            <path d='M12 2v2' />
            <path d='M12 20v2' />
            <path d='m4.93 4.93 1.41 1.41' />
            <path d='m17.66 17.66 1.41 1.41' />
            <path d='M2 12h2' />
            <path d='M20 12h2' />
            <path d='m6.34 17.66-1.41 1.41' />
            <path d='m19.07 4.93-1.41 1.41' />
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
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='mb-3 h-6 w-6'
          >
            <path d='M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z' />
          </svg>
          Dark
        </Label>
      </div>
      <div>
        <RadioGroupItem value='system' id='system' className='peer sr-only' />
        <Label
          htmlFor='system'
          className='flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='mb-3 h-6 w-6'
          >
            <rect width='20' height='14' x='2' y='3' rx='2' />
            <path d='M8 21h8' />
            <path d='M12 17v4' />
          </svg>
          System
        </Label>
      </div>
    </RadioGroup>
  ),
}

export const InteractionTest: Story = {
  render: () => (
    <RadioGroup defaultValue='first'>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='first' id='test-first' />
        <Label htmlFor='test-first'>First Option</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='second' id='test-second' />
        <Label htmlFor='test-second'>Second Option</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='third' id='test-third' />
        <Label htmlFor='test-third'>Third Option</Label>
      </div>
    </RadioGroup>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Test keyboard navigation
    const firstOption = canvas.getByLabelText('First Option')
    await userEvent.click(firstOption)
    await userEvent.keyboard('{ArrowDown}')

    const secondOption = canvas.getByLabelText('Second Option')
    await expect(secondOption).toBeChecked()

    await userEvent.keyboard('{ArrowDown}')
    const thirdOption = canvas.getByLabelText('Third Option')
    await expect(thirdOption).toBeChecked()

    await userEvent.keyboard('{ArrowUp}')
    await expect(secondOption).toBeChecked()
  },
}
