import type { Meta, StoryObj } from '@storybook/nextjs'
import * as React from 'react'
import { Toggle } from '@/components/ui/toggle'
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  Mic,
  MicOff,
  Moon,
  Sun,
  Underline,
  Volume2,
  VolumeX,
} from 'lucide-react'

const meta = {
  title: 'Design System/Forms/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    pressed: {
      control: 'boolean',
      description: 'Toggle pressed state',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
      description: 'Toggle size',
    },
    variant: {
      control: 'select',
      options: ['default', 'outline'],
      description: 'Toggle variant',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    onPressedChange: {
      action: 'pressed-changed',
    },
  },
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Toggle',
  },
}

export const Pressed: Story = {
  args: {
    pressed: true,
    children: 'Toggle',
  },
}

export const WithIcon: Story = {
  args: {
    children: <Bold className='h-4 w-4' />,
    'aria-label': 'Toggle bold',
  },
}

export const Sizes: Story = {
  args: {},
  render: () => (
    <div className='flex items-center gap-4'>
      <Toggle size='sm'>
        <Bold className='h-3 w-3' />
      </Toggle>
      <Toggle size='default'>
        <Bold className='h-4 w-4' />
      </Toggle>
      <Toggle size='lg'>
        <Bold className='h-5 w-5' />
      </Toggle>
    </div>
  ),
}

export const Variants: Story = {
  args: {},
  render: () => (
    <div className='flex gap-4'>
      <Toggle variant='default'>Default</Toggle>
      <Toggle variant='outline'>Outline</Toggle>
    </div>
  ),
}

export const Disabled: Story = {
  args: {},
  render: () => (
    <div className='flex gap-4'>
      <Toggle disabled>Disabled</Toggle>
      <Toggle disabled pressed>
        Disabled Pressed
      </Toggle>
    </div>
  ),
}

export const TextFormatting: Story = {
  args: {},
  render: () => {
    const [bold, setBold] = React.useState(false)
    const [italic, setItalic] = React.useState(false)
    const [underline, setUnderline] = React.useState(false)

    return (
      <div className='flex gap-1'>
        <Toggle
          pressed={bold}
          onPressedChange={setBold}
          aria-label='Toggle bold'
        >
          <Bold className='h-4 w-4' />
        </Toggle>
        <Toggle
          pressed={italic}
          onPressedChange={setItalic}
          aria-label='Toggle italic'
        >
          <Italic className='h-4 w-4' />
        </Toggle>
        <Toggle
          pressed={underline}
          onPressedChange={setUnderline}
          aria-label='Toggle underline'
        >
          <Underline className='h-4 w-4' />
        </Toggle>
      </div>
    )
  },
}

export const TextAlignment: Story = {
  args: {},
  render: () => {
    const [alignment, setAlignment] = React.useState('left')

    return (
      <div className='flex gap-1'>
        <Toggle
          pressed={alignment === 'left'}
          onPressedChange={() => setAlignment('left')}
          aria-label='Align left'
        >
          <AlignLeft className='h-4 w-4' />
        </Toggle>
        <Toggle
          pressed={alignment === 'center'}
          onPressedChange={() => setAlignment('center')}
          aria-label='Align center'
        >
          <AlignCenter className='h-4 w-4' />
        </Toggle>
        <Toggle
          pressed={alignment === 'right'}
          onPressedChange={() => setAlignment('right')}
          aria-label='Align right'
        >
          <AlignRight className='h-4 w-4' />
        </Toggle>
      </div>
    )
  },
}

export const ThemeToggle: Story = {
  args: {},
  render: () => {
    const [isDark, setIsDark] = React.useState(false)

    return (
      <Toggle
        pressed={isDark}
        onPressedChange={setIsDark}
        aria-label='Toggle theme'
      >
        {isDark ? <Moon className='h-4 w-4' /> : <Sun className='h-4 w-4' />}
      </Toggle>
    )
  },
}

export const MicrophoneToggle: Story = {
  args: {},
  render: () => {
    const [isMuted, setIsMuted] = React.useState(false)

    return (
      <div className='flex items-center gap-4'>
        <Toggle
          pressed={isMuted}
          onPressedChange={setIsMuted}
          variant='outline'
          className={isMuted ? 'text-destructive' : ''}
        >
          {isMuted ? (
            <MicOff className='h-4 w-4' />
          ) : (
            <Mic className='h-4 w-4' />
          )}
          <span className='ml-2'>{isMuted ? 'Unmute' : 'Mute'}</span>
        </Toggle>
      </div>
    )
  },
}

export const SoundToggle: Story = {
  args: {},
  render: () => {
    const [isMuted, setIsMuted] = React.useState(false)

    return (
      <Toggle
        pressed={isMuted}
        onPressedChange={setIsMuted}
        size='lg'
        variant={isMuted ? 'default' : 'outline'}
      >
        {isMuted ? (
          <>
            <VolumeX className='h-4 w-4 mr-2' />
            Sound Off
          </>
        ) : (
          <>
            <Volume2 className='h-4 w-4 mr-2' />
            Sound On
          </>
        )}
      </Toggle>
    )
  },
}

export const WithTooltip: Story = {
  args: {},
  render: () => (
    <div className='flex gap-4'>
      <div className='relative group'>
        <Toggle aria-label='Toggle bold'>
          <Bold className='h-4 w-4' />
        </Toggle>
        <div className='absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-popover text-popover-foreground text-xs px-2 py-1 rounded'>
          Bold (⌘B)
        </div>
      </div>
    </div>
  ),
}

export const ComplexExample: Story = {
  args: {},
  render: () => {
    const [settings, setSettings] = React.useState({
      notifications: true,
      darkMode: false,
      autoSave: true,
      compactView: false,
    })

    const updateSetting = (key: keyof typeof settings) => {
      setSettings((prev) => ({ ...prev, [key]: !prev[key] }))
    }

    return (
      <div className='space-y-4 p-4 border rounded-lg'>
        <h3 className='text-lg font-semibold mb-4'>Editor Settings</h3>

        <div className='space-y-3'>
          <div className='flex items-center justify-between'>
            <label htmlFor='notifications' className='text-sm'>
              Enable notifications
            </label>
            <Toggle
              id='notifications'
              pressed={settings.notifications}
              onPressedChange={() => updateSetting('notifications')}
              size='sm'
            >
              {settings.notifications ? 'On' : 'Off'}
            </Toggle>
          </div>

          <div className='flex items-center justify-between'>
            <label htmlFor='dark-mode' className='text-sm'>
              Dark mode
            </label>
            <Toggle
              id='dark-mode'
              pressed={settings.darkMode}
              onPressedChange={() => updateSetting('darkMode')}
              size='sm'
            >
              {settings.darkMode ? (
                <Moon className='h-3 w-3' />
              ) : (
                <Sun className='h-3 w-3' />
              )}
            </Toggle>
          </div>

          <div className='flex items-center justify-between'>
            <label htmlFor='auto-save' className='text-sm'>
              Auto-save
            </label>
            <Toggle
              id='auto-save'
              pressed={settings.autoSave}
              onPressedChange={() => updateSetting('autoSave')}
              size='sm'
            >
              {settings.autoSave ? 'On' : 'Off'}
            </Toggle>
          </div>

          <div className='flex items-center justify-between'>
            <label htmlFor='compact-view' className='text-sm'>
              Compact view
            </label>
            <Toggle
              id='compact-view'
              pressed={settings.compactView}
              onPressedChange={() => updateSetting('compactView')}
              size='sm'
            >
              {settings.compactView ? 'On' : 'Off'}
            </Toggle>
          </div>
        </div>
      </div>
    )
  },
}
