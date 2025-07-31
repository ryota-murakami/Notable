import type { Meta, StoryObj } from '@storybook/nextjs'
import { Label } from '../../components/ui/label'
import { Input } from '../../components/ui/input'
import { Checkbox } from '../../components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group'
import { Textarea } from '../../components/ui/textarea'
import { Switch } from '../../components/ui/switch'

const meta = {
  title: 'Design System/Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    htmlFor: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

// Default label
export const Default: Story = {
  args: {
    children: 'Label text',
  },
}

// With input
export const WithInput: Story = {
  render: () => (
    <div className='grid w-full max-w-sm items-center gap-1.5'>
      <Label htmlFor='email'>Email</Label>
      <Input type='email' id='email' placeholder='Email' />
    </div>
  ),
}

// With required field
export const RequiredField: Story = {
  render: () => (
    <div className='grid w-full max-w-sm items-center gap-1.5'>
      <Label htmlFor='email-required'>
        Email <span className='text-red-500'>*</span>
      </Label>
      <Input type='email' id='email-required' placeholder='Email' required />
    </div>
  ),
}

// With helper text
export const WithHelperText: Story = {
  render: () => (
    <div className='grid w-full max-w-sm items-center gap-1.5'>
      <Label htmlFor='username'>Username</Label>
      <Input type='text' id='username' placeholder='Username' />
      <p className='text-sm text-muted-foreground'>
        This is your public display name.
      </p>
    </div>
  ),
}

// With checkbox
export const WithCheckbox: Story = {
  render: () => (
    <div className='flex items-center space-x-2'>
      <Checkbox id='terms' />
      <Label
        htmlFor='terms'
        className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
      >
        Accept terms and conditions
      </Label>
    </div>
  ),
}

// With radio group
export const WithRadioGroup: Story = {
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

// With textarea
export const WithTextarea: Story = {
  render: () => (
    <div className='grid w-full max-w-sm items-center gap-1.5'>
      <Label htmlFor='message'>Your message</Label>
      <Textarea placeholder='Type your message here.' id='message' />
    </div>
  ),
}

// With switch
export const WithSwitch: Story = {
  render: () => (
    <div className='flex items-center space-x-2'>
      <Switch id='airplane-mode' />
      <Label htmlFor='airplane-mode'>Airplane Mode</Label>
    </div>
  ),
}

// Disabled state
export const DisabledState: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='flex items-center space-x-2'>
        <Checkbox id='disabled-checkbox' disabled />
        <Label
          htmlFor='disabled-checkbox'
          className='cursor-not-allowed opacity-70'
        >
          Disabled checkbox label
        </Label>
      </div>
      <div className='grid w-full max-w-sm items-center gap-1.5'>
        <Label
          htmlFor='disabled-input'
          className='cursor-not-allowed opacity-70'
        >
          Disabled input label
        </Label>
        <Input
          type='text'
          id='disabled-input'
          placeholder='Disabled input'
          disabled
        />
      </div>
    </div>
  ),
}

// Form example
export const FormExample: Story = {
  render: () => (
    <form className='space-y-6 w-96'>
      <div className='space-y-2'>
        <Label htmlFor='full-name'>
          Full Name <span className='text-red-500'>*</span>
        </Label>
        <Input id='full-name' placeholder='John Doe' required />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='email-form'>
          Email Address <span className='text-red-500'>*</span>
        </Label>
        <Input
          id='email-form'
          type='email'
          placeholder='john@example.com'
          required
        />
        <p className='text-sm text-muted-foreground'>
          We'll never share your email with anyone else.
        </p>
      </div>

      <div className='space-y-2'>
        <Label htmlFor='bio'>Bio</Label>
        <Textarea
          id='bio'
          placeholder='Tell us a little bit about yourself'
          className='min-h-[100px]'
        />
      </div>

      <div className='space-y-3'>
        <Label>Notification Preferences</Label>
        <div className='space-y-2'>
          <div className='flex items-center space-x-2'>
            <Checkbox id='email-notifications' defaultChecked />
            <Label htmlFor='email-notifications'>Email notifications</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <Checkbox id='sms-notifications' />
            <Label htmlFor='sms-notifications'>SMS notifications</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <Checkbox id='push-notifications' defaultChecked />
            <Label htmlFor='push-notifications'>Push notifications</Label>
          </div>
        </div>
      </div>

      <div className='flex items-center space-x-2'>
        <Checkbox id='agree-terms' required />
        <Label htmlFor='agree-terms'>
          I agree to the{' '}
          <a
            href='#'
            className='underline underline-offset-2 hover:text-primary'
          >
            terms and conditions
          </a>
        </Label>
      </div>
    </form>
  ),
}

// Different sizes (custom implementation)
export const Sizes: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='space-y-2'>
        <Label className='text-xs'>Extra Small Label</Label>
        <Input placeholder='Extra small' className='h-7 text-xs' />
      </div>
      <div className='space-y-2'>
        <Label className='text-sm'>Small Label (Default)</Label>
        <Input placeholder='Small (default)' />
      </div>
      <div className='space-y-2'>
        <Label className='text-base'>Base Label</Label>
        <Input placeholder='Base' className='h-11' />
      </div>
      <div className='space-y-2'>
        <Label className='text-lg'>Large Label</Label>
        <Input placeholder='Large' className='h-12 text-lg' />
      </div>
    </div>
  ),
}
