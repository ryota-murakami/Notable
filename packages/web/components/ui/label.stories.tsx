import type { Meta, StoryObj } from '@storybook/nextjs'
import { Label } from './label'
import { Input } from './input'
import { Checkbox } from './checkbox'
import { RadioGroup, RadioGroupItem } from './radio-group'
import { Textarea } from './textarea'
import { expect, within } from '@storybook/test'

const meta: Meta<typeof Label> = {
  title: 'Components/UI/Label',
  component: Label,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A label component for form elements. Provides semantic HTML labeling and automatically handles peer-disabled states for proper accessibility.',
      },
    },
  },
  argTypes: {
    htmlFor: {
      control: 'text',
      description: 'The ID of the form element the label is associated with',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof Label>

export const Default: Story = {
  args: {
    children: 'Label text',
  },
}

export const WithInput: Story = {
  render: () => (
    <div className='space-y-2'>
      <Label htmlFor='email'>Email</Label>
      <Input type='email' id='email' placeholder='Enter your email' />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const label = canvas.getByText('Email')
    const input = canvas.getByPlaceholderText('Enter your email')

    await expect(label).toHaveAttribute('for', 'email')
    await expect(input).toHaveAttribute('id', 'email')
  },
}

export const WithCheckbox: Story = {
  render: () => (
    <div className='flex items-center space-x-2'>
      <Checkbox id='terms' />
      <Label htmlFor='terms'>Accept terms and conditions</Label>
    </div>
  ),
}

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

export const WithTextarea: Story = {
  render: () => (
    <div className='space-y-2'>
      <Label htmlFor='message'>Message</Label>
      <Textarea id='message' placeholder='Type your message here...' />
    </div>
  ),
}

export const Required: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='space-y-2'>
        <Label htmlFor='required-field'>
          Required Field
          <span className='text-destructive ml-1'>*</span>
        </Label>
        <Input id='required-field' required />
      </div>
      <p className='text-sm text-muted-foreground'>
        Fields marked with * are required
      </p>
    </div>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <div className='space-y-2'>
      <Label htmlFor='username'>Username</Label>
      <Input id='username' placeholder='johndoe' />
      <p className='text-sm text-muted-foreground'>
        This will be your public display name
      </p>
    </div>
  ),
}

export const DisabledState: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='space-y-2'>
        <Label htmlFor='disabled-input'>Disabled Input</Label>
        <Input id='disabled-input' disabled placeholder='Cannot edit' />
      </div>
      <div className='flex items-center space-x-2'>
        <Checkbox id='disabled-checkbox' disabled />
        <Label htmlFor='disabled-checkbox'>Disabled checkbox</Label>
      </div>
    </div>
  ),
}

export const FormLayout: Story = {
  render: () => (
    <form className='space-y-6' onSubmit={(e) => e.preventDefault()}>
      <div className='space-y-2'>
        <Label htmlFor='first-name'>First Name</Label>
        <Input id='first-name' placeholder='John' />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='last-name'>Last Name</Label>
        <Input id='last-name' placeholder='Doe' />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='email-form'>Email</Label>
        <Input id='email-form' type='email' placeholder='john@example.com' />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='bio'>Bio</Label>
        <Textarea id='bio' placeholder='Tell us about yourself...' />
      </div>

      <div className='space-y-2'>
        <Label>Notifications</Label>
        <RadioGroup defaultValue='all'>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='all' id='all' />
            <Label htmlFor='all'>All notifications</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='important' id='important' />
            <Label htmlFor='important'>Important only</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='none' id='none' />
            <Label htmlFor='none'>No notifications</Label>
          </div>
        </RadioGroup>
      </div>

      <div className='flex items-center space-x-2'>
        <Checkbox id='subscribe' />
        <Label htmlFor='subscribe'>Subscribe to newsletter</Label>
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
    <div className='space-y-4'>
      <div className='space-y-2'>
        <Label className='text-base font-semibold'>Large Label</Label>
        <Input placeholder='With larger label' />
      </div>

      <div className='space-y-2'>
        <Label className='text-xs font-normal'>Small Label</Label>
        <Input placeholder='With smaller label' />
      </div>

      <div className='space-y-2'>
        <Label className='text-primary'>Colored Label</Label>
        <Input placeholder='With colored label' />
      </div>

      <div className='space-y-2'>
        <Label className='uppercase tracking-wide text-xs'>
          Uppercase Label
        </Label>
        <Input placeholder='With uppercase label' />
      </div>
    </div>
  ),
}

export const Inline: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='flex items-center gap-4'>
        <Label htmlFor='inline-input' className='min-w-[100px]'>
          Label:
        </Label>
        <Input id='inline-input' placeholder='Inline input' />
      </div>

      <div className='flex items-center gap-4'>
        <Label htmlFor='inline-select' className='min-w-[100px]'>
          Select:
        </Label>
        <select
          id='inline-select'
          className='flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'
        >
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>
    </div>
  ),
}
