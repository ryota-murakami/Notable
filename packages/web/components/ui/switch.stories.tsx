import type { Meta, StoryObj } from '@storybook/nextjs'
import { Switch } from './switch'
import { expect, userEvent, within } from '@storybook/test'
import { Label } from './label'
import * as React from 'react'
import {
  Bell,
  Bluetooth,
  Mail,
  Moon,
  Plane,
  Shield,
  Sun,
  Wifi,
} from 'lucide-react'

const meta: Meta<typeof Switch> = {
  title: 'Components/UI/Switch',
  component: Switch,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A toggle switch component built on Radix UI. Used for binary on/off settings.',
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
      description: 'The default checked state when uncontrolled',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the switch is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the switch is required',
    },
    name: {
      control: 'text',
      description: 'The name of the switch for form submission',
    },
    value: {
      control: 'text',
      description: 'The value of the switch for form submission',
    },
  },
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  render: () => <Switch />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const switchElement = canvas.getByRole('switch')

    await expect(switchElement).not.toBeChecked()
    await userEvent.click(switchElement)
    await expect(switchElement).toBeChecked()
    await userEvent.click(switchElement)
    await expect(switchElement).not.toBeChecked()
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

export const DefaultChecked: Story = {
  render: () => (
    <div className='flex items-center space-x-2'>
      <Switch id='notifications' defaultChecked />
      <Label htmlFor='notifications'>Enable notifications</Label>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='flex items-center space-x-2'>
        <Switch id='disabled-off' disabled />
        <Label htmlFor='disabled-off' className='text-muted-foreground'>
          Disabled (off)
        </Label>
      </div>
      <div className='flex items-center space-x-2'>
        <Switch id='disabled-on' disabled defaultChecked />
        <Label htmlFor='disabled-on' className='text-muted-foreground'>
          Disabled (on)
        </Label>
      </div>
    </div>
  ),
}

function ControlledSwitch() {
  const [checked, setChecked] = React.useState(false)

  return (
    <div className='space-y-4'>
      <div className='flex items-center space-x-2'>
        <Switch
          id='controlled'
          checked={checked}
          onCheckedChange={setChecked}
        />
        <Label htmlFor='controlled'>
          Controlled switch (checked: {checked.toString()})
        </Label>
      </div>
      <p className='text-sm text-muted-foreground'>
        The switch is {checked ? 'ON' : 'OFF'}
      </p>
    </div>
  )
}

export const Controlled: Story = {
  render: () => <ControlledSwitch />,
}

export const SettingsPanel: Story = {
  render: () => {
    const [settings, setSettings] = React.useState({
      notifications: true,
      marketing: false,
      security: true,
      analytics: false,
    })

    const handleChange = (key: keyof typeof settings) => (checked: boolean) => {
      setSettings((prev) => ({ ...prev, [key]: checked }))
    }

    return (
      <div className='w-full max-w-md space-y-6'>
        <div>
          <h3 className='text-lg font-medium mb-4'>Notification Settings</h3>
          <div className='space-y-4'>
            <div className='flex items-center justify-between'>
              <div className='space-y-0.5'>
                <Label htmlFor='notifications'>Push Notifications</Label>
                <p className='text-sm text-muted-foreground'>
                  Receive notifications about your account activity
                </p>
              </div>
              <Switch
                id='notifications'
                checked={settings.notifications}
                onCheckedChange={handleChange('notifications')}
              />
            </div>

            <div className='flex items-center justify-between'>
              <div className='space-y-0.5'>
                <Label htmlFor='marketing'>Marketing Emails</Label>
                <p className='text-sm text-muted-foreground'>
                  Receive emails about new features and updates
                </p>
              </div>
              <Switch
                id='marketing'
                checked={settings.marketing}
                onCheckedChange={handleChange('marketing')}
              />
            </div>

            <div className='flex items-center justify-between'>
              <div className='space-y-0.5'>
                <Label htmlFor='security'>Security Alerts</Label>
                <p className='text-sm text-muted-foreground'>
                  Get notified about security events
                </p>
              </div>
              <Switch
                id='security'
                checked={settings.security}
                onCheckedChange={handleChange('security')}
              />
            </div>

            <div className='flex items-center justify-between'>
              <div className='space-y-0.5'>
                <Label htmlFor='analytics'>Usage Analytics</Label>
                <p className='text-sm text-muted-foreground'>
                  Help us improve by sharing usage data
                </p>
              </div>
              <Switch
                id='analytics'
                checked={settings.analytics}
                onCheckedChange={handleChange('analytics')}
              />
            </div>
          </div>
        </div>
      </div>
    )
  },
}

export const WithIcons: Story = {
  render: () => {
    const [darkMode, setDarkMode] = React.useState(false)
    const [doNotDisturb, setDoNotDisturb] = React.useState(false)

    return (
      <div className='space-y-4'>
        <div className='flex items-center justify-between w-64'>
          <div className='flex items-center space-x-2'>
            {darkMode ? (
              <Moon className='h-4 w-4' />
            ) : (
              <Sun className='h-4 w-4' />
            )}
            <Label htmlFor='theme'>Dark Mode</Label>
          </div>
          <Switch id='theme' checked={darkMode} onCheckedChange={setDarkMode} />
        </div>

        <div className='flex items-center justify-between w-64'>
          <div className='flex items-center space-x-2'>
            <Bell
              className={
                doNotDisturb ? 'h-4 w-4 text-muted-foreground' : 'h-4 w-4'
              }
            />
            <Label htmlFor='dnd'>Do Not Disturb</Label>
          </div>
          <Switch
            id='dnd'
            checked={doNotDisturb}
            onCheckedChange={setDoNotDisturb}
          />
        </div>
      </div>
    )
  },
}

export const InForm: Story = {
  render: () => (
    <form
      className='w-full max-w-sm space-y-6'
      onSubmit={(e) => e.preventDefault()}
    >
      <div className='space-y-4'>
        <div className='flex items-center justify-between'>
          <Label htmlFor='terms'>
            Accept terms and conditions
            <span className='text-destructive ml-1'>*</span>
          </Label>
          <Switch id='terms' name='terms' required />
        </div>

        <div className='flex items-center justify-between'>
          <Label htmlFor='newsletter'>Subscribe to newsletter</Label>
          <Switch id='newsletter' name='newsletter' />
        </div>

        <div className='flex items-center justify-between'>
          <Label htmlFor='public'>Make profile public</Label>
          <Switch id='public' name='public' defaultChecked />
        </div>
      </div>

      <button
        type='submit'
        className='w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90'
      >
        Save Preferences
      </button>
    </form>
  ),
}

export const ConnectionSettings: Story = {
  render: () => {
    const [connections, setConnections] = React.useState({
      wifi: true,
      bluetooth: false,
      airplane: false,
    })

    const handleChange =
      (key: keyof typeof connections) => (checked: boolean) => {
        if (key === 'airplane' && checked) {
          // Turn off all connections when airplane mode is on
          setConnections({
            wifi: false,
            bluetooth: false,
            airplane: true,
          })
        } else if (key === 'airplane' && !checked) {
          // Just turn off airplane mode
          setConnections((prev) => ({ ...prev, airplane: false }))
        } else {
          // Can't turn on other connections when airplane mode is on
          if (!connections.airplane) {
            setConnections((prev) => ({ ...prev, [key]: checked }))
          }
        }
      }

    return (
      <div className='w-full max-w-sm space-y-4'>
        <h3 className='text-lg font-medium'>Connection Settings</h3>

        <div className='space-y-3'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-2'>
              <Wifi
                className={
                  connections.wifi ? 'h-4 w-4' : 'h-4 w-4 text-muted-foreground'
                }
              />
              <Label htmlFor='wifi'>Wi-Fi</Label>
            </div>
            <Switch
              id='wifi'
              checked={connections.wifi}
              onCheckedChange={handleChange('wifi')}
              disabled={connections.airplane}
            />
          </div>

          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-2'>
              <Bluetooth
                className={
                  connections.bluetooth
                    ? 'h-4 w-4'
                    : 'h-4 w-4 text-muted-foreground'
                }
              />
              <Label htmlFor='bluetooth'>Bluetooth</Label>
            </div>
            <Switch
              id='bluetooth'
              checked={connections.bluetooth}
              onCheckedChange={handleChange('bluetooth')}
              disabled={connections.airplane}
            />
          </div>

          <div className='border-t pt-3'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-2'>
                <Plane
                  className={
                    connections.airplane
                      ? 'h-4 w-4'
                      : 'h-4 w-4 text-muted-foreground'
                  }
                />
                <Label htmlFor='airplane'>Airplane Mode</Label>
              </div>
              <Switch
                id='airplane'
                checked={connections.airplane}
                onCheckedChange={handleChange('airplane')}
              />
            </div>
          </div>
        </div>

        {connections.airplane && (
          <p className='text-sm text-muted-foreground'>
            All wireless connections are disabled in airplane mode
          </p>
        )}
      </div>
    )
  },
}

export const CustomStyling: Story = {
  render: () => (
    <div className='space-y-6'>
      <div className='space-y-4'>
        <h4 className='text-sm font-medium'>Default Styles</h4>
        <div className='flex gap-4'>
          <Switch />
          <Switch defaultChecked />
          <Switch disabled />
          <Switch disabled defaultChecked />
        </div>
      </div>

      <div className='space-y-4'>
        <h4 className='text-sm font-medium'>Custom Colors</h4>
        <div className='flex gap-4'>
          <Switch
            className='data-[state=checked]:bg-green-600'
            defaultChecked
          />
          <Switch className='data-[state=checked]:bg-blue-600' defaultChecked />
          <Switch
            className='data-[state=checked]:bg-purple-600'
            defaultChecked
          />
          <Switch className='data-[state=checked]:bg-red-600' defaultChecked />
        </div>
      </div>

      <div className='space-y-4'>
        <h4 className='text-sm font-medium'>Custom Sizes</h4>
        <div className='flex items-center gap-4'>
          <Switch className='h-4 w-8 [&>span]:h-3 [&>span]:w-3' />
          <Switch />
          <Switch className='h-7 w-14 [&>span]:h-6 [&>span]:w-6' />
        </div>
      </div>
    </div>
  ),
}

export const FeatureToggles: Story = {
  render: () => {
    const [features, setFeatures] = React.useState({
      experimental: false,
      beta: true,
      legacy: false,
    })

    const handleChange = (key: keyof typeof features) => (checked: boolean) => {
      setFeatures((prev) => ({ ...prev, [key]: checked }))
    }

    return (
      <div className='w-full max-w-md space-y-6'>
        <div>
          <h3 className='text-lg font-medium mb-4'>Feature Flags</h3>
          <div className='space-y-4'>
            <div className='rounded-lg border p-4'>
              <div className='flex items-center justify-between mb-2'>
                <Label htmlFor='experimental'>Experimental Features</Label>
                <Switch
                  id='experimental'
                  checked={features.experimental}
                  onCheckedChange={handleChange('experimental')}
                />
              </div>
              <p className='text-sm text-muted-foreground'>
                Enable cutting-edge features that may be unstable
              </p>
              {features.experimental && (
                <div className='mt-2 p-2 bg-orange-100 dark:bg-orange-900/20 rounded text-sm text-orange-800 dark:text-orange-200'>
                  ⚠️ Experimental features may cause unexpected behavior
                </div>
              )}
            </div>

            <div className='rounded-lg border p-4'>
              <div className='flex items-center justify-between mb-2'>
                <Label htmlFor='beta'>Beta Features</Label>
                <Switch
                  id='beta'
                  checked={features.beta}
                  onCheckedChange={handleChange('beta')}
                />
              </div>
              <p className='text-sm text-muted-foreground'>
                Try new features before they're released
              </p>
            </div>

            <div className='rounded-lg border p-4'>
              <div className='flex items-center justify-between mb-2'>
                <Label htmlFor='legacy'>Legacy Mode</Label>
                <Switch
                  id='legacy'
                  checked={features.legacy}
                  onCheckedChange={handleChange('legacy')}
                />
              </div>
              <p className='text-sm text-muted-foreground'>
                Use the old interface and features
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  },
}

export const InteractionTest: Story = {
  render: () => (
    <div className='flex items-center space-x-2'>
      <Switch id='test' />
      <Label htmlFor='test'>Test Switch</Label>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const switchElement = canvas.getByRole('switch')

    // Test click
    await userEvent.click(switchElement)
    await expect(switchElement).toBeChecked()

    // Test keyboard
    await userEvent.keyboard(' ')
    await expect(switchElement).not.toBeChecked()

    // Test Enter key
    await userEvent.keyboard('{Enter}')
    await expect(switchElement).toBeChecked()
  },
}
