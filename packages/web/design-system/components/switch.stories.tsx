import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

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

export const Default: Story = {}

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    defaultChecked: true,
    disabled: true,
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className='flex items-center space-x-2'>
      <Switch id='airplane-mode' />
      <Label htmlFor='airplane-mode'>Airplane Mode</Label>
    </div>
  ),
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
}
