import type { Meta, StoryObj } from '@storybook/nextjs'
import {
  DangerToggle,
  InfoToggle,
  SuccessToggle,
  Toggle,
  ToggleGroup,
} from '../design-system/components/toggle'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../design-system/components/card'
import { Button } from '../design-system/components/button'
import { useState } from 'react'
import {
  Bell,
  BellOff,
  Eye,
  EyeOff,
  Globe,
  Lock,
  Mail,
  Moon,
  Settings,
  Shield,
  Smartphone,
  Sun,
  Users,
  Volume2,
  VolumeX,
  Wifi,
  WifiOff,
  Zap,
} from 'lucide-react'

const meta: Meta<typeof Toggle> = {
  title: 'Notable Design System/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Highly customizable toggle switch component with animations, variants, icons, and loading states. Perfect for settings, preferences, and feature toggles in Notable.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the toggle',
    },
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'danger', 'info'],
      description: 'Visual style variant',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the toggle is disabled',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state',
    },
    labelPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Position of label relative to toggle',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Basic Toggle Stories
export const Default: Story = {
  args: {
    label: 'Enable notifications',
  },
}

export const WithDescription: Story = {
  args: {
    label: 'Dark Mode',
    description: 'Switch between light and dark themes',
  },
}

export const Checked: Story = {
  args: {
    label: 'Feature enabled',
    defaultChecked: true,
  },
}

export const WithIcons: Story = {
  args: {
    label: 'Notifications',
    checkedIcon: <Bell className='w-full h-full' />,
    uncheckedIcon: <BellOff className='w-full h-full' />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Toggle with different icons for checked and unchecked states',
      },
    },
  },
}

export const Sizes: Story = {
  render: () => (
    <div className='space-y-4'>
      <Toggle size='sm' label='Small toggle' />
      <Toggle size='md' label='Medium toggle' />
      <Toggle size='lg' label='Large toggle' />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different toggle sizes for various UI contexts',
      },
    },
  },
}

export const Variants: Story = {
  render: () => (
    <div className='space-y-4'>
      <Toggle variant='default' label='Default variant' defaultChecked />
      <Toggle variant='success' label='Success variant' defaultChecked />
      <Toggle variant='warning' label='Warning variant' defaultChecked />
      <Toggle variant='danger' label='Danger variant' defaultChecked />
      <Toggle variant='info' label='Info variant' defaultChecked />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different toggle variants with semantic colors',
      },
    },
  },
}

export const States: Story = {
  render: () => (
    <div className='space-y-4'>
      <Toggle label='Normal state' />
      <Toggle label='Disabled unchecked' disabled />
      <Toggle label='Disabled checked' disabled defaultChecked />
      <Toggle label='Loading state' loading />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Various toggle states including disabled and loading',
      },
    },
  },
}

export const LabelPositions: Story = {
  render: () => (
    <div className='space-y-4'>
      <Toggle label='Label on right (default)' labelPosition='right' />
      <Toggle label='Label on left' labelPosition='left' />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Toggle with labels positioned on different sides',
      },
    },
  },
}

// Preset Variants
export const PresetVariants: Story = {
  render: () => (
    <div className='space-y-4'>
      <SuccessToggle
        label='Enable feature'
        description='This will activate the new functionality'
        defaultChecked
      />
      <DangerToggle
        label='Delete on exit'
        description='Warning: This action cannot be undone'
      />
      <InfoToggle
        label='Show information'
        description='Display additional details'
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Preset toggle variants with built-in icons and semantic meaning',
      },
    },
  },
}

// Interactive Examples
export const DarkModeToggle: Story = {
  render: () => {
    const [isDark, setIsDark] = useState(false)

    return (
      <Card className='w-80'>
        <CardContent className='p-6'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              {isDark ? (
                <Moon className='h-5 w-5' />
              ) : (
                <Sun className='h-5 w-5' />
              )}
              <div>
                <p className='font-medium'>Dark Mode</p>
                <p className='text-sm text-muted-foreground'>
                  {isDark ? 'Dark theme enabled' : 'Light theme enabled'}
                </p>
              </div>
            </div>
            <Toggle
              checked={isDark}
              onChange={setIsDark}
              checkedIcon={<Moon className='w-full h-full' />}
              uncheckedIcon={<Sun className='w-full h-full' />}
              variant='info'
            />
          </div>
        </CardContent>
      </Card>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Dark mode toggle with dynamic icons and descriptions',
      },
    },
  },
}

export const NotificationSettings: Story = {
  render: () => {
    const [settings, setSettings] = useState({
      push: true,
      email: false,
      sms: false,
      desktop: true,
    })

    const updateSetting =
      (key: keyof typeof settings) => (checked: boolean) => {
        setSettings((prev) => ({ ...prev, [key]: checked }))
      }

    return (
      <Card className='w-96'>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Bell className='h-5 w-5' />
            Notification Settings
          </CardTitle>
          <CardDescription>
            Choose how you want to be notified about important updates
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-6'>
          <Toggle
            checked={settings.push}
            onChange={updateSetting('push')}
            label='Push Notifications'
            description='Get notifications on your mobile device'
            checkedIcon={<Smartphone className='w-full h-full' />}
            uncheckedIcon={<Smartphone className='w-full h-full' />}
            variant='success'
          />

          <Toggle
            checked={settings.email}
            onChange={updateSetting('email')}
            label='Email Notifications'
            description='Receive updates via email'
            checkedIcon={<Mail className='w-full h-full' />}
            uncheckedIcon={<Mail className='w-full h-full' />}
            variant='info'
          />

          <Toggle
            checked={settings.sms}
            onChange={updateSetting('sms')}
            label='SMS Notifications'
            description='Get text messages for urgent updates'
            checkedIcon={<Smartphone className='w-full h-full' />}
            uncheckedIcon={<Smartphone className='w-full h-full' />}
            variant='warning'
          />

          <Toggle
            checked={settings.desktop}
            onChange={updateSetting('desktop')}
            label='Desktop Notifications'
            description='Show notifications on your computer'
            checkedIcon={<Bell className='w-full h-full' />}
            uncheckedIcon={<BellOff className='w-full h-full' />}
          />
        </CardContent>
      </Card>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Notification settings panel with multiple toggles and different variants',
      },
    },
  },
}

// Notable App Examples
export const NotablePrivacySettings: Story = {
  render: () => {
    const [privacy, setPrivacy] = useState({
      public: false,
      searchable: true,
      comments: true,
      sharing: false,
    })

    const updatePrivacy = (key: keyof typeof privacy) => (checked: boolean) => {
      setPrivacy((prev) => ({ ...prev, [key]: checked }))
    }

    return (
      <Card className='w-96'>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Shield className='h-5 w-5' />
            Privacy Settings
          </CardTitle>
          <CardDescription>
            Control who can see and interact with your notes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ToggleGroup spacing='lg'>
            <Toggle
              checked={privacy.public}
              onChange={updatePrivacy('public')}
              label='Public Profile'
              description='Make your profile visible to everyone'
              checkedIcon={<Globe className='w-full h-full' />}
              uncheckedIcon={<Lock className='w-full h-full' />}
              variant={privacy.public ? 'warning' : 'default'}
            />

            <Toggle
              checked={privacy.searchable}
              onChange={updatePrivacy('searchable')}
              label='Searchable Notes'
              description='Allow your public notes to appear in search results'
              checkedIcon={<Eye className='w-full h-full' />}
              uncheckedIcon={<EyeOff className='w-full h-full' />}
              variant='info'
            />

            <Toggle
              checked={privacy.comments}
              onChange={updatePrivacy('comments')}
              label='Allow Comments'
              description='Let others comment on your public notes'
              checkedIcon={<Users className='w-full h-full' />}
              uncheckedIcon={<Lock className='w-full h-full' />}
              variant='success'
            />

            <DangerToggle
              checked={privacy.sharing}
              onChange={updatePrivacy('sharing')}
              label='Enable Sharing'
              description='Allow others to share your notes'
            />
          </ToggleGroup>
        </CardContent>
      </Card>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Privacy settings panel using ToggleGroup for organized layout',
      },
    },
  },
}

export const NotableEditorSettings: Story = {
  render: () => {
    const [editor, setEditor] = useState({
      autosave: true,
      spellcheck: true,
      wordwrap: false,
      lineNumbers: false,
      minimap: true,
      zen: false,
    })

    const updateEditor = (key: keyof typeof editor) => (checked: boolean) => {
      setEditor((prev) => ({ ...prev, [key]: checked }))
    }

    return (
      <Card className='w-96'>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Settings className='h-5 w-5' />
            Editor Preferences
          </CardTitle>
          <CardDescription>
            Customize your writing experience in Notable
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ToggleGroup spacing='md'>
            <SuccessToggle
              checked={editor.autosave}
              onChange={updateEditor('autosave')}
              label='Auto-save'
              description='Automatically save changes as you type'
            />

            <Toggle
              checked={editor.spellcheck}
              onChange={updateEditor('spellcheck')}
              label='Spell Check'
              description='Highlight spelling errors while typing'
            />

            <Toggle
              checked={editor.wordwrap}
              onChange={updateEditor('wordwrap')}
              label='Word Wrap'
              description='Wrap long lines to fit the editor width'
            />

            <Toggle
              checked={editor.lineNumbers}
              onChange={updateEditor('lineNumbers')}
              label='Line Numbers'
              description='Show line numbers in the editor'
              variant='info'
            />

            <Toggle
              checked={editor.minimap}
              onChange={updateEditor('minimap')}
              label='Minimap'
              description='Show a miniature overview of the document'
            />

            <Toggle
              checked={editor.zen}
              onChange={updateEditor('zen')}
              label='Zen Mode'
              description='Hide distractions for focused writing'
              variant='success'
            />
          </ToggleGroup>
        </CardContent>
      </Card>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Editor settings with various toggle configurations for writing preferences',
      },
    },
  },
}

export const NotableFeatureToggles: Story = {
  render: () => {
    const [features, setFeatures] = useState({
      ai: false,
      collaboration: true,
      analytics: false,
      export: true,
      themes: false,
    })

    const [loading, setLoading] = useState<string | null>(null)

    const updateFeature =
      (key: keyof typeof features) => (checked: boolean) => {
        setLoading(key)
        // Simulate API call
        setTimeout(() => {
          setFeatures((prev) => ({ ...prev, [key]: checked }))
          setLoading(null)
        }, 1500)
      }

    return (
      <Card className='w-96'>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Zap className='h-5 w-5' />
            Feature Toggles
          </CardTitle>
          <CardDescription>Enable or disable Notable features</CardDescription>
        </CardHeader>
        <CardContent>
          <ToggleGroup spacing='lg'>
            <Toggle
              checked={features.ai}
              onChange={updateFeature('ai')}
              loading={loading === 'ai'}
              label='AI Assistant'
              description='Enable AI-powered writing suggestions'
              variant='success'
              size='lg'
            />

            <Toggle
              checked={features.collaboration}
              onChange={updateFeature('collaboration')}
              loading={loading === 'collaboration'}
              label='Real-time Collaboration'
              description='Work together with your team in real-time'
              variant='info'
            />

            <Toggle
              checked={features.analytics}
              onChange={updateFeature('analytics')}
              loading={loading === 'analytics'}
              label='Usage Analytics'
              description='Track your writing patterns and productivity'
              variant='warning'
            />

            <Toggle
              checked={features.export}
              onChange={updateFeature('export')}
              loading={loading === 'export'}
              label='Advanced Export'
              description='Export notes in multiple formats'
            />

            <Toggle
              checked={features.themes}
              onChange={updateFeature('themes')}
              loading={loading === 'themes'}
              label='Custom Themes'
              description='Personalize your Notable appearance'
              variant='info'
            />
          </ToggleGroup>
        </CardContent>
      </Card>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Feature toggle panel with loading states simulating API calls',
      },
    },
  },
}

// Advanced Examples
export const ToggleWithValidation: Story = {
  render: () => {
    const [agreed, setAgreed] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = () => {
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 2000)
    }

    return (
      <Card className='w-96'>
        <CardHeader>
          <CardTitle>Terms and Conditions</CardTitle>
          <CardDescription>Please review and accept our terms</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='p-4 border rounded-lg text-sm'>
            <p className='mb-2'>By using Notable, you agree to:</p>
            <ul className='list-disc list-inside space-y-1 text-muted-foreground'>
              <li>Respect other users and their content</li>
              <li>Not use the service for illegal activities</li>
              <li>Keep your account secure</li>
              <li>Follow our community guidelines</li>
            </ul>
          </div>

          <Toggle
            checked={agreed}
            onChange={setAgreed}
            label='I agree to the Terms and Conditions'
            description='Required to continue using Notable'
            variant={agreed ? 'success' : 'warning'}
          />

          <Button
            className='w-full'
            disabled={!agreed || submitted}
            onClick={handleSubmit}
          >
            {submitted ? 'Processing...' : 'Continue'}
          </Button>
        </CardContent>
      </Card>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Toggle used for form validation and user agreement',
      },
    },
  },
}

export const HorizontalToggleGroup: Story = {
  render: () => {
    const [quickSettings, setQuickSettings] = useState({
      wifi: true,
      bluetooth: false,
      sound: true,
      notifications: true,
    })

    const updateQuickSetting =
      (key: keyof typeof quickSettings) => (checked: boolean) => {
        setQuickSettings((prev) => ({ ...prev, [key]: checked }))
      }

    return (
      <Card className='w-96'>
        <CardHeader>
          <CardTitle>Quick Settings</CardTitle>
          <CardDescription>Toggle frequently used settings</CardDescription>
        </CardHeader>
        <CardContent>
          <ToggleGroup orientation='horizontal' spacing='md'>
            <Toggle
              checked={quickSettings.wifi}
              onChange={updateQuickSetting('wifi')}
              checkedIcon={<Wifi className='w-full h-full' />}
              uncheckedIcon={<WifiOff className='w-full h-full' />}
              variant={quickSettings.wifi ? 'success' : 'default'}
              size='lg'
            />

            <Toggle
              checked={quickSettings.bluetooth}
              onChange={updateQuickSetting('bluetooth')}
              icon={<Wifi className='w-full h-full' />}
              variant={quickSettings.bluetooth ? 'info' : 'default'}
              size='lg'
            />

            <Toggle
              checked={quickSettings.sound}
              onChange={updateQuickSetting('sound')}
              checkedIcon={<Volume2 className='w-full h-full' />}
              uncheckedIcon={<VolumeX className='w-full h-full' />}
              variant={quickSettings.sound ? 'success' : 'default'}
              size='lg'
            />

            <Toggle
              checked={quickSettings.notifications}
              onChange={updateQuickSetting('notifications')}
              checkedIcon={<Bell className='w-full h-full' />}
              uncheckedIcon={<BellOff className='w-full h-full' />}
              variant={quickSettings.notifications ? 'success' : 'default'}
              size='lg'
            />
          </ToggleGroup>

          <div className='mt-4 grid grid-cols-2 gap-2 text-xs text-center text-muted-foreground'>
            <span>WiFi</span>
            <span>Bluetooth</span>
            <span>Sound</span>
            <span>Notifications</span>
          </div>
        </CardContent>
      </Card>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Horizontal toggle group layout for compact settings panels',
      },
    },
  },
}
