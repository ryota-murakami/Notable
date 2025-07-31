import type { Meta, StoryObj } from '@storybook/nextjs'
import * as React from 'react'
import { Checkbox } from '../../components/ui/checkbox'
import { Label } from '../../components/ui/label'
import { expect, userEvent, within } from '@storybook/test'

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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox')

    // Test checkbox is visible and enabled
    await expect(checkbox).toBeVisible()
    await expect(checkbox).toBeEnabled()
    await expect(checkbox).not.toBeChecked()

    // Test clicking checkbox
    await userEvent.click(checkbox)
    await expect(checkbox).toBeChecked()

    // Test clicking again to uncheck
    await userEvent.click(checkbox)
    await expect(checkbox).not.toBeChecked()

    // Test keyboard interaction (space key)
    await checkbox.focus()
    await userEvent.keyboard(' ')
    await expect(checkbox).toBeChecked()
  },
}

// Checked checkbox
export const Checked: Story = {
  args: {
    checked: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox')

    // Test checkbox is checked by default
    await expect(checkbox).toBeChecked()
    await expect(checkbox).toBeEnabled()
  },
}

// Disabled checkbox
export const Disabled: Story = {
  args: {
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox')

    // Test checkbox is disabled
    await expect(checkbox).toBeDisabled()
    await expect(checkbox).not.toBeChecked()

    // Test clicking disabled checkbox (should not change state)
    await userEvent.click(checkbox)
    await expect(checkbox).not.toBeChecked()
  },
}

// Disabled and checked
export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox')

    // Test checkbox is disabled and checked
    await expect(checkbox).toBeDisabled()
    await expect(checkbox).toBeChecked()

    // Test clicking disabled checkbox (should not change state)
    await userEvent.click(checkbox)
    await expect(checkbox).toBeChecked()
  },
}

// With label
export const WithLabel: Story = {
  args: {},
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox')
    const label = canvas.getByText('Accept terms and conditions')

    // Test label is visible
    await expect(label).toBeVisible()

    // Test clicking label toggles checkbox
    await userEvent.click(label)
    await expect(checkbox).toBeChecked()

    await userEvent.click(label)
    await expect(checkbox).not.toBeChecked()

    // Test label has correct association
    const labelElement = canvas.getByLabelText('Accept terms and conditions')
    await expect(labelElement).toBe(checkbox)
  },
}

// Multiple checkboxes
export const MultipleCheckboxes: Story = {
  args: {},
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Test all checkboxes are present
    const checkboxes = canvas.getAllByRole('checkbox')
    await expect(checkboxes).toHaveLength(4)

    // Test option 1 - unchecked and enabled
    const option1 = canvas.getByLabelText('Option 1')
    await expect(option1).not.toBeChecked()
    await expect(option1).toBeEnabled()

    // Test option 2 - checked by default
    const option2 = canvas.getByLabelText('Option 2 (Default Checked)')
    await expect(option2).toBeChecked()
    await expect(option2).toBeEnabled()

    // Test option 3 - disabled
    const option3 = canvas.getByLabelText('Option 3 (Disabled)')
    await expect(option3).not.toBeChecked()
    await expect(option3).toBeDisabled()

    // Test option 4 - disabled and checked
    const option4 = canvas.getByLabelText('Option 4 (Disabled Checked)')
    await expect(option4).toBeChecked()
    await expect(option4).toBeDisabled()

    // Test interaction with enabled checkboxes
    await userEvent.click(option1)
    await expect(option1).toBeChecked()

    await userEvent.click(option2)
    await expect(option2).not.toBeChecked()
  },
}

// Form example
export const FormExample: Story = {
  args: {},
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Test form headings are present
    await expect(canvas.getByText('Notification Preferences')).toBeVisible()
    await expect(canvas.getByText('Privacy Settings')).toBeVisible()

    // Test notification checkboxes
    const emailCheckbox = canvas.getByLabelText('Email notifications')
    const smsCheckbox = canvas.getByLabelText('SMS notifications')
    const pushCheckbox = canvas.getByLabelText('Push notifications')

    // Verify initial states
    await expect(emailCheckbox).toBeChecked()
    await expect(smsCheckbox).not.toBeChecked()
    await expect(pushCheckbox).toBeChecked()

    // Test privacy checkboxes
    const analyticsCheckbox = canvas.getByLabelText('Allow analytics')
    const marketingCheckbox = canvas.getByLabelText('Marketing communications')

    await expect(analyticsCheckbox).toBeChecked()
    await expect(marketingCheckbox).not.toBeChecked()

    // Test form interactions
    await userEvent.click(smsCheckbox)
    await expect(smsCheckbox).toBeChecked()

    await userEvent.click(marketingCheckbox)
    await expect(marketingCheckbox).toBeChecked()

    // Test form element
    const form = canvas.getByRole('form')
    await expect(form).toBeInTheDocument()
  },
}

// Indeterminate state (requires custom implementation)
export const IndeterminateState: Story = {
  args: {},
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Get parent and child checkboxes
    const parentCheckbox = canvas.getByLabelText('Select all')
    const child1 = canvas.getByLabelText('Option 1')
    const child2 = canvas.getByLabelText('Option 2')
    const child3 = canvas.getByLabelText('Option 3')

    // Verify initial states
    await expect(child1).toBeChecked()
    await expect(child2).not.toBeChecked()
    await expect(child3).toBeChecked()

    // Parent should be in indeterminate state (partially checked)
    await expect(parentCheckbox).toHaveAttribute('data-state', 'indeterminate')

    // Click parent checkbox - should clear all
    await userEvent.click(parentCheckbox)
    await expect(parentCheckbox).not.toBeChecked()

    // Click parent again - should check all
    await userEvent.click(parentCheckbox)
    await expect(parentCheckbox).toBeChecked()
  },
}

// Interactive example
export const Interactive: Story = {
  args: {},
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Test initial state display
    const selectedText = canvas.getByText(/Selected:/)
    await expect(selectedText).toHaveTextContent('Selected: item2')

    // Get checkboxes
    const selectAllCheckbox = canvas.getByLabelText('Select All')
    const item1Checkbox = canvas.getByLabelText('item1')
    const item2Checkbox = canvas.getByLabelText('item2')
    const item3Checkbox = canvas.getByLabelText('item3')

    // Verify initial states
    await expect(item1Checkbox).not.toBeChecked()
    await expect(item2Checkbox).toBeChecked()
    await expect(item3Checkbox).not.toBeChecked()

    // Select All should be indeterminate
    await expect(selectAllCheckbox).toHaveAttribute(
      'data-state',
      'indeterminate'
    )

    // Test selecting individual items
    await userEvent.click(item1Checkbox)
    await expect(item1Checkbox).toBeChecked()
    await expect(selectedText).toHaveTextContent('Selected: item1, item2')

    // Select the last item - should make Select All checked
    await userEvent.click(item3Checkbox)
    await expect(item3Checkbox).toBeChecked()
    await expect(selectAllCheckbox).toBeChecked()
    await expect(selectedText).toHaveTextContent(
      'Selected: item1, item2, item3'
    )

    // Click Select All to uncheck all
    await userEvent.click(selectAllCheckbox)
    await expect(item1Checkbox).not.toBeChecked()
    await expect(item2Checkbox).not.toBeChecked()
    await expect(item3Checkbox).not.toBeChecked()
    await expect(selectedText).toHaveTextContent('Selected: None')

    // Click Select All again to check all
    await userEvent.click(selectAllCheckbox)
    await expect(item1Checkbox).toBeChecked()
    await expect(item2Checkbox).toBeChecked()
    await expect(item3Checkbox).toBeChecked()
    await expect(selectAllCheckbox).toBeChecked()
  },
}
