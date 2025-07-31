import type { Meta, StoryObj } from '@storybook/nextjs'
import { Checkbox } from './checkbox'
import { expect, userEvent, within } from '@storybook/test'
import { Label } from './label'
import { useState } from 'react'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A checkbox component built on Radix UI that allows users to make binary choices. Supports indeterminate state, disabled state, and can be used in forms with proper accessibility.',
      },
    },
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'The controlled checked state',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'The initial checked state when uncontrolled',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the checkbox is required',
    },
    name: {
      control: 'text',
      description: 'The name of the checkbox for form submission',
    },
    value: {
      control: 'text',
      description: 'The value of the checkbox for form submission',
    },
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  render: () => <Checkbox />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox')

    await expect(checkbox).not.toBeChecked()
    await userEvent.click(checkbox)
    await expect(checkbox).toBeChecked()
    await userEvent.click(checkbox)
    await expect(checkbox).not.toBeChecked()
  },
}

export const WithLabel: Story = {
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

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
}

export const Disabled: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='flex items-center space-x-2'>
        <Checkbox id='disabled1' disabled />
        <Label htmlFor='disabled1' className='text-sm text-muted-foreground'>
          Disabled unchecked
        </Label>
      </div>
      <div className='flex items-center space-x-2'>
        <Checkbox id='disabled2' disabled checked />
        <Label htmlFor='disabled2' className='text-sm text-muted-foreground'>
          Disabled checked
        </Label>
      </div>
    </div>
  ),
}

// Controlled checkbox with state
function ControlledCheckbox() {
  const [checked, setChecked] = useState(false)

  return (
    <div className='space-y-4'>
      <div className='flex items-center space-x-2'>
        <Checkbox
          id='controlled'
          checked={checked}
          onCheckedChange={setChecked}
        />
        <Label htmlFor='controlled'>
          Controlled checkbox (checked: {checked.toString()})
        </Label>
      </div>
      <p className='text-sm text-muted-foreground'>
        The checkbox is {checked ? 'checked' : 'unchecked'}
      </p>
    </div>
  )
}

export const Controlled: Story = {
  render: () => <ControlledCheckbox />,
}

export const InForm: Story = {
  render: () => (
    <form className='space-y-4' onSubmit={(e) => e.preventDefault()}>
      <div className='space-y-3'>
        <div className='flex items-center space-x-2'>
          <Checkbox id='marketing' name='preferences' value='marketing' />
          <Label htmlFor='marketing'>Send me marketing emails</Label>
        </div>
        <div className='flex items-center space-x-2'>
          <Checkbox id='security' name='preferences' value='security' />
          <Label htmlFor='security'>Send me security updates</Label>
        </div>
        <div className='flex items-center space-x-2'>
          <Checkbox id='updates' name='preferences' value='updates' />
          <Label htmlFor='updates'>Send me product updates</Label>
        </div>
      </div>
      <button
        type='submit'
        className='px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90'
      >
        Save preferences
      </button>
    </form>
  ),
}

export const Required: Story = {
  render: () => (
    <form className='space-y-4' onSubmit={(e) => e.preventDefault()}>
      <div className='flex items-center space-x-2'>
        <Checkbox id='agree' required />
        <Label htmlFor='agree'>
          I agree to the terms and conditions
          <span className='text-destructive ml-1'>*</span>
        </Label>
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

// Example with multiple checkboxes
function CheckboxGroup() {
  const [checkedItems, setCheckedItems] = useState({
    all: false,
    option1: false,
    option2: false,
    option3: false,
  })

  const allChecked =
    checkedItems.option1 && checkedItems.option2 && checkedItems.option3
  const indeterminate =
    !allChecked &&
    (checkedItems.option1 || checkedItems.option2 || checkedItems.option3)

  const handleAllChange = (checked: boolean) => {
    setCheckedItems({
      all: checked,
      option1: checked,
      option2: checked,
      option3: checked,
    })
  }

  const handleItemChange = (
    item: keyof typeof checkedItems,
    checked: boolean
  ) => {
    const newItems = { ...checkedItems, [item]: checked }
    const allSelected = newItems.option1 && newItems.option2 && newItems.option3
    setCheckedItems({ ...newItems, all: allSelected })
  }

  return (
    <div className='space-y-4'>
      <div className='flex items-center space-x-2'>
        <Checkbox
          id='all'
          checked={allChecked}
          // @ts-ignore - indeterminate is supported but not in types
          indeterminate={indeterminate}
          onCheckedChange={handleAllChange}
        />
        <Label htmlFor='all' className='font-semibold'>
          Select all
        </Label>
      </div>
      <div className='ml-6 space-y-2'>
        <div className='flex items-center space-x-2'>
          <Checkbox
            id='option1'
            checked={checkedItems.option1}
            onCheckedChange={(checked) =>
              handleItemChange('option1', checked as boolean)
            }
          />
          <Label htmlFor='option1'>Option 1</Label>
        </div>
        <div className='flex items-center space-x-2'>
          <Checkbox
            id='option2'
            checked={checkedItems.option2}
            onCheckedChange={(checked) =>
              handleItemChange('option2', checked as boolean)
            }
          />
          <Label htmlFor='option2'>Option 2</Label>
        </div>
        <div className='flex items-center space-x-2'>
          <Checkbox
            id='option3'
            checked={checkedItems.option3}
            onCheckedChange={(checked) =>
              handleItemChange('option3', checked as boolean)
            }
          />
          <Label htmlFor='option3'>Option 3</Label>
        </div>
      </div>
    </div>
  )
}

export const WithIndeterminate: Story = {
  render: () => <CheckboxGroup />,
}

export const Sizes: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='flex items-center space-x-2'>
        <Checkbox id='small' className='h-3 w-3' />
        <Label htmlFor='small' className='text-sm'>
          Small checkbox
        </Label>
      </div>
      <div className='flex items-center space-x-2'>
        <Checkbox id='default' />
        <Label htmlFor='default'>Default checkbox</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <Checkbox id='large' className='h-5 w-5' />
        <Label htmlFor='large' className='text-lg'>
          Large checkbox
        </Label>
      </div>
    </div>
  ),
}

export const CustomColors: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='flex items-center space-x-2'>
        <Checkbox
          id='custom1'
          className='data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600'
        />
        <Label htmlFor='custom1'>Green checkbox</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <Checkbox
          id='custom2'
          className='data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600'
        />
        <Label htmlFor='custom2'>Blue checkbox</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <Checkbox
          id='custom3'
          className='data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600'
        />
        <Label htmlFor='custom3'>Purple checkbox</Label>
      </div>
    </div>
  ),
}
