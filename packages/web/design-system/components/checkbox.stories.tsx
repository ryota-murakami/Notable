import type { Meta, StoryObj } from '@storybook/nextjs'
import * as React from 'react'
import { Checkbox } from '../../components/ui/checkbox'
import { Label } from '../../components/ui/label'

const meta = {
  title: 'Design System/Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    onCheckedChange: { action: 'checked changed' },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

// Default checkbox
export const Default: Story = {
  args: {},
}

// Checked checkbox
export const Checked: Story = {
  args: {
    checked: true,
  },
}

// Disabled checkbox
export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

// Disabled and checked
export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
  },
}

// With label
export const WithLabel: Story = {
  render: (args) => (
    <div className='flex items-center space-x-2'>
      <Checkbox id='terms' {...args} />
      <Label
        htmlFor='terms'
        className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
      >
        Accept terms and conditions
      </Label>
    </div>
  ),
}

// Multiple checkboxes
export const MultipleCheckboxes: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='flex items-center space-x-2'>
        <Checkbox id='option1' />
        <Label htmlFor='option1'>Option 1</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <Checkbox id='option2' defaultChecked />
        <Label htmlFor='option2'>Option 2 (Default Checked)</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <Checkbox id='option3' disabled />
        <Label htmlFor='option3'>Option 3 (Disabled)</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <Checkbox id='option4' disabled checked />
        <Label htmlFor='option4'>Option 4 (Disabled Checked)</Label>
      </div>
    </div>
  ),
}

// Form example
export const FormExample: Story = {
  render: () => (
    <form className='space-y-6 w-80'>
      <div className='space-y-4'>
        <h3 className='text-lg font-medium'>Notification Preferences</h3>
        <div className='space-y-3'>
          <div className='flex items-center space-x-2'>
            <Checkbox id='emails' defaultChecked />
            <Label htmlFor='emails'>Email notifications</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <Checkbox id='sms' />
            <Label htmlFor='sms'>SMS notifications</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <Checkbox id='push' defaultChecked />
            <Label htmlFor='push'>Push notifications</Label>
          </div>
        </div>
      </div>
      <div className='space-y-4'>
        <h3 className='text-lg font-medium'>Privacy Settings</h3>
        <div className='space-y-3'>
          <div className='flex items-center space-x-2'>
            <Checkbox id='analytics' defaultChecked />
            <Label htmlFor='analytics'>Allow analytics</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <Checkbox id='marketing' />
            <Label htmlFor='marketing'>Marketing communications</Label>
          </div>
        </div>
      </div>
    </form>
  ),
}

// Indeterminate state (requires custom implementation)
export const IndeterminateState: Story = {
  render: () => {
    const [checked, setChecked] = React.useState<boolean | 'indeterminate'>(
      'indeterminate'
    )

    return (
      <div className='space-y-4'>
        <div className='flex items-center space-x-2'>
          <Checkbox
            id='parent'
            checked={checked}
            onCheckedChange={(value) => {
              if (value === 'indeterminate') {
                setChecked(false)
              } else {
                setChecked(value)
              }
            }}
          />
          <Label htmlFor='parent'>Select all</Label>
        </div>
        <div className='ml-6 space-y-2'>
          <div className='flex items-center space-x-2'>
            <Checkbox id='child1' defaultChecked />
            <Label htmlFor='child1'>Option 1</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <Checkbox id='child2' />
            <Label htmlFor='child2'>Option 2</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <Checkbox id='child3' defaultChecked />
            <Label htmlFor='child3'>Option 3</Label>
          </div>
        </div>
      </div>
    )
  },
}

// Interactive example
export const Interactive: Story = {
  render: () => {
    const [checkedItems, setCheckedItems] = React.useState({
      item1: false,
      item2: true,
      item3: false,
    })

    const allChecked = Object.values(checkedItems).every(Boolean)
    const someChecked = Object.values(checkedItems).some(Boolean)

    return (
      <div className='space-y-4'>
        <div className='p-4 border rounded-lg bg-muted/50'>
          <p className='text-sm text-muted-foreground mb-2'>
            Selected:{' '}
            {Object.entries(checkedItems)
              .filter(([_, checked]) => checked)
              .map(([key]) => key)
              .join(', ') || 'None'}
          </p>
        </div>
        <div className='space-y-2'>
          <div className='flex items-center space-x-2'>
            <Checkbox
              id='all'
              checked={
                allChecked ? true : someChecked ? 'indeterminate' : false
              }
              onCheckedChange={(checked) => {
                const newValue = checked === true
                setCheckedItems({
                  item1: newValue,
                  item2: newValue,
                  item3: newValue,
                })
              }}
            />
            <Label htmlFor='all' className='font-medium'>
              Select All
            </Label>
          </div>
          <div className='ml-6 space-y-2'>
            {Object.entries(checkedItems).map(([key, checked]) => (
              <div key={key} className='flex items-center space-x-2'>
                <Checkbox
                  id={key}
                  checked={checked}
                  onCheckedChange={(value) => {
                    setCheckedItems((prev) => ({
                      ...prev,
                      [key]: value === true,
                    }))
                  }}
                />
                <Label htmlFor={key}>{key}</Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
}
