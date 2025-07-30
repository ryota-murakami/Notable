import type { Meta, StoryObj } from '@storybook/nextjs'
import * as React from 'react'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { expect, userEvent, within } from '@storybook/test'

const meta = {
  title: 'Design System/Forms/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Controlled checked state',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Default checked state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    onCheckedChange: {
      action: 'checked-changed',
    },
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const switchElement = canvas.getByRole('switch')

    // Test switch is visible and enabled
    await expect(switchElement).toBeVisible()
    await expect(switchElement).toBeEnabled()
    await expect(switchElement).not.toBeChecked()

    // Test clicking switch
    await userEvent.click(switchElement)
    await expect(switchElement).toBeChecked()
    await expect(switchElement).toHaveAttribute('data-state', 'checked')

    // Test clicking again to turn off
    await userEvent.click(switchElement)
    await expect(switchElement).not.toBeChecked()
    await expect(switchElement).toHaveAttribute('data-state', 'unchecked')

    // Test keyboard interaction (space key)
    await switchElement.focus()
    await userEvent.keyboard(' ')
    await expect(switchElement).toBeChecked()
  },
}

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const switchElement = canvas.getByRole('switch')

    // Test switch is checked by default
    await expect(switchElement).toBeChecked()
    await expect(switchElement).toBeEnabled()
    await expect(switchElement).toHaveAttribute('data-state', 'checked')
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const switchElement = canvas.getByRole('switch')

    // Test switch is disabled
    await expect(switchElement).toBeDisabled()
    await expect(switchElement).not.toBeChecked()

    // Test clicking disabled switch (should not change state)
    await userEvent.click(switchElement)
    await expect(switchElement).not.toBeChecked()
  },
}

export const DisabledChecked: Story = {
  args: {
    defaultChecked: true,
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const switchElement = canvas.getByRole('switch')

    // Test switch is disabled and checked
    await expect(switchElement).toBeDisabled()
    await expect(switchElement).toBeChecked()

    // Test clicking disabled switch (should not change state)
    await userEvent.click(switchElement)
    await expect(switchElement).toBeChecked()
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className='flex items-center space-x-2'>
      <Switch id='airplane-mode' />
      <Label htmlFor='airplane-mode'>Airplane Mode</Label>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const switchElement = canvas.getByRole('switch')
    const label = canvas.getByText('Airplane Mode')

    // Test label is visible
    await expect(label).toBeVisible()

    // Test clicking label toggles switch
    await userEvent.click(label)
    await expect(switchElement).toBeChecked()

    await userEvent.click(label)
    await expect(switchElement).not.toBeChecked()

    // Test label has correct association
    const labelElement = canvas.getByLabelText('Airplane Mode')
    await expect(labelElement).toBe(switchElement)
  },
}

export const WithDescription: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='flex items-center space-x-2'>
        <Switch id='notifications' defaultChecked />
        <Label htmlFor='notifications'>Enable notifications</Label>
      </div>
      <p className='text-sm text-muted-foreground'>
        Receive notifications about updates and new features.
      </p>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const switchElement = canvas.getByRole('switch')
    const label = canvas.getByText('Enable notifications')
    const description = canvas.getByText(
      'Receive notifications about updates and new features.'
    )

    // Test elements are visible
    await expect(label).toBeVisible()
    await expect(description).toBeVisible()

    // Test switch is checked by default
    await expect(switchElement).toBeChecked()

    // Test description text has correct styling
    await expect(description).toHaveClass('text-sm', 'text-muted-foreground')
  },
}

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false)

    return (
      <div className='space-y-4'>
        <div className='flex items-center space-x-2'>
          <Switch
            id='controlled-switch'
            checked={checked}
            onCheckedChange={setChecked}
          />
          <Label htmlFor='controlled-switch'>
            Controlled switch (currently {checked ? 'on' : 'off'})
          </Label>
        </div>
        <button
          onClick={() => setChecked(!checked)}
          className='px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90'
        >
          Toggle Switch
        </button>
      </div>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const switchElement = canvas.getByRole('switch')
    const label = canvas.getByText(/Controlled switch/)
    const button = canvas.getByRole('button', { name: 'Toggle Switch' })

    // Test initial state
    await expect(switchElement).not.toBeChecked()
    await expect(label).toHaveTextContent('Controlled switch (currently off)')

    // Test clicking switch updates label
    await userEvent.click(switchElement)
    await expect(switchElement).toBeChecked()
    await expect(label).toHaveTextContent('Controlled switch (currently on)')

    // Test external button controls switch
    await userEvent.click(button)
    await expect(switchElement).not.toBeChecked()
    await expect(label).toHaveTextContent('Controlled switch (currently off)')

    // Test button again
    await userEvent.click(button)
    await expect(switchElement).toBeChecked()
    await expect(label).toHaveTextContent('Controlled switch (currently on)')
  },
}

export const FormExample: Story = {
  render: () => (
    <form className='space-y-6 max-w-md'>
      <div className='space-y-4'>
        <h3 className='text-lg font-medium'>Notification Settings</h3>

        <div className='space-y-4'>
          <div className='flex items-center justify-between'>
            <div className='space-y-1'>
              <Label htmlFor='email-notifications'>Email notifications</Label>
              <p className='text-sm text-muted-foreground'>
                Receive email updates about your account
              </p>
            </div>
            <Switch id='email-notifications' defaultChecked />
          </div>

          <div className='flex items-center justify-between'>
            <div className='space-y-1'>
              <Label htmlFor='push-notifications'>Push notifications</Label>
              <p className='text-sm text-muted-foreground'>
                Receive push notifications on your device
              </p>
            </div>
            <Switch id='push-notifications' />
          </div>

          <div className='flex items-center justify-between'>
            <div className='space-y-1'>
              <Label htmlFor='marketing'>Marketing emails</Label>
              <p className='text-sm text-muted-foreground'>
                Receive emails about new features and updates
              </p>
            </div>
            <Switch id='marketing' />
          </div>

          <div className='flex items-center justify-between'>
            <div className='space-y-1'>
              <Label htmlFor='security'>Security alerts</Label>
              <p className='text-sm text-muted-foreground'>
                Receive alerts about unusual activity
              </p>
            </div>
            <Switch id='security' defaultChecked disabled />
          </div>
        </div>
      </div>

      <button
        type='submit'
        className='px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90'
      >
        Save Settings
      </button>
    </form>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Test form heading is present
    await expect(canvas.getByText('Notification Settings')).toBeVisible()

    // Test switches
    const emailSwitch = canvas.getByLabelText('Email notifications')
    const pushSwitch = canvas.getByLabelText('Push notifications')
    const marketingSwitch = canvas.getByLabelText('Marketing emails')
    const securitySwitch = canvas.getByLabelText('Security alerts')

    // Verify initial states
    await expect(emailSwitch).toBeChecked()
    await expect(pushSwitch).not.toBeChecked()
    await expect(marketingSwitch).not.toBeChecked()
    await expect(securitySwitch).toBeChecked()
    await expect(securitySwitch).toBeDisabled()

    // Test descriptions are visible
    await expect(
      canvas.getByText('Receive email updates about your account')
    ).toBeVisible()
    await expect(
      canvas.getByText('Receive push notifications on your device')
    ).toBeVisible()
    await expect(
      canvas.getByText('Receive emails about new features and updates')
    ).toBeVisible()
    await expect(
      canvas.getByText('Receive alerts about unusual activity')
    ).toBeVisible()

    // Test form interactions
    await userEvent.click(pushSwitch)
    await expect(pushSwitch).toBeChecked()

    await userEvent.click(marketingSwitch)
    await expect(marketingSwitch).toBeChecked()

    // Test security switch is truly disabled
    await userEvent.click(securitySwitch)
    await expect(securitySwitch).toBeChecked() // Should remain checked

    // Test save button
    const saveButton = canvas.getByRole('button', { name: 'Save Settings' })
    await expect(saveButton).toBeVisible()
    await expect(saveButton).toBeEnabled()
  },
}

export const Sizes: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='flex items-center space-x-4'>
        <Switch className='scale-75' id='small' />
        <Label htmlFor='small'>Small (75%)</Label>
      </div>
      <div className='flex items-center space-x-4'>
        <Switch id='medium' />
        <Label htmlFor='medium'>Medium (Default)</Label>
      </div>
      <div className='flex items-center space-x-4'>
        <Switch className='scale-125' id='large' />
        <Label htmlFor='large'>Large (125%)</Label>
      </div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Get all switches
    const smallSwitch = canvas.getByLabelText('Small (75%)')
    const mediumSwitch = canvas.getByLabelText('Medium (Default)')
    const largeSwitch = canvas.getByLabelText('Large (125%)')

    // Test all switches are visible and enabled
    await expect(smallSwitch).toBeVisible()
    await expect(smallSwitch).toBeEnabled()
    await expect(mediumSwitch).toBeVisible()
    await expect(mediumSwitch).toBeEnabled()
    await expect(largeSwitch).toBeVisible()
    await expect(largeSwitch).toBeEnabled()

    // Test scale classes are applied
    await expect(smallSwitch).toHaveClass('scale-75')
    await expect(largeSwitch).toHaveClass('scale-125')

    // Test all switches function correctly
    await userEvent.click(smallSwitch)
    await expect(smallSwitch).toBeChecked()

    await userEvent.click(mediumSwitch)
    await expect(mediumSwitch).toBeChecked()

    await userEvent.click(largeSwitch)
    await expect(largeSwitch).toBeChecked()
  },
}
