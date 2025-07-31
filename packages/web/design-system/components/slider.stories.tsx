import type { Meta, StoryObj } from '@storybook/nextjs'
import * as React from 'react'
import { Slider } from '@/components/ui/slider'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'Design System/Forms/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: { type: 'object' },
      description: 'Default value',
    },
    value: {
      control: { type: 'object' },
      description: 'Controlled value',
    },
    min: {
      control: 'number',
      description: 'Minimum value',
    },
    max: {
      control: 'number',
      description: 'Maximum value',
    },
    step: {
      control: 'number',
      description: 'Step increment',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    onValueChange: {
      action: 'value-changed',
    },
  },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
  },
}

export const WithRange: Story = {
  args: {
    defaultValue: [25, 75],
    max: 100,
  },
}

export const WithStep: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 10,
  },
}

export const Disabled: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    disabled: true,
  },
}

export const CustomRange: Story = {
  args: {
    defaultValue: [5],
    min: 0,
    max: 10,
    step: 0.5,
  },
}

export const WithLabel: Story = {
  args: {},
  render: () => {
    const [value, setValue] = React.useState([50])

    return (
      <div className='space-y-4'>
        <div className='space-y-2'>
          <Label htmlFor='volume'>Volume: {value[0]}%</Label>
          <Slider
            id='volume'
            value={value}
            onValueChange={setValue}
            max={100}
          />
        </div>
      </div>
    )
  },
}

export const PriceRange: Story = {
  args: {},
  render: () => {
    const [value, setValue] = React.useState([20, 80])

    return (
      <div className='space-y-4'>
        <div className='space-y-2'>
          <Label>Price Range</Label>
          <div className='flex justify-between text-sm text-muted-foreground'>
            <span>${value[0]}</span>
            <span>${value[1]}</span>
          </div>
          <Slider value={value} onValueChange={setValue} max={100} step={5} />
        </div>
      </div>
    )
  },
}

export const AudioControls: Story = {
  args: {},
  render: () => {
    const [volume, setVolume] = React.useState([75])
    const [bass, setBass] = React.useState([50])
    const [treble, setTreble] = React.useState([50])

    return (
      <div className='space-y-6 max-w-md'>
        <h3 className='text-lg font-medium'>Audio Settings</h3>

        <div className='space-y-4'>
          <div className='space-y-2'>
            <div className='flex justify-between'>
              <Label>Volume</Label>
              <span className='text-sm text-muted-foreground'>
                {volume[0]}%
              </span>
            </div>
            <Slider value={volume} onValueChange={setVolume} max={100} />
          </div>

          <div className='space-y-2'>
            <div className='flex justify-between'>
              <Label>Bass</Label>
              <span className='text-sm text-muted-foreground'>
                {bass[0] - 50}
              </span>
            </div>
            <Slider value={bass} onValueChange={setBass} max={100} />
          </div>

          <div className='space-y-2'>
            <div className='flex justify-between'>
              <Label>Treble</Label>
              <span className='text-sm text-muted-foreground'>
                {treble[0] - 50}
              </span>
            </div>
            <Slider value={treble} onValueChange={setTreble} max={100} />
          </div>
        </div>

        <button
          onClick={() => {
            setVolume([75])
            setBass([50])
            setTreble([50])
          }}
          className='px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90'
        >
          Reset to Defaults
        </button>
      </div>
    )
  },
}

export const ColorPicker: Story = {
  args: {},
  render: () => {
    const [hue, setHue] = React.useState([180])
    const [saturation, setSaturation] = React.useState([100])
    const [lightness, setLightness] = React.useState([50])

    const color = `hsl(${hue[0]}, ${saturation[0]}%, ${lightness[0]}%)`

    return (
      <div className='space-y-6 max-w-md'>
        <div
          className='h-24 rounded-lg shadow-md'
          style={{ backgroundColor: color }}
        />

        <div className='space-y-4'>
          <div className='space-y-2'>
            <Label>Hue: {hue[0]}°</Label>
            <Slider value={hue} onValueChange={setHue} max={360} />
          </div>

          <div className='space-y-2'>
            <Label>Saturation: {saturation[0]}%</Label>
            <Slider
              value={saturation}
              onValueChange={setSaturation}
              max={100}
            />
          </div>

          <div className='space-y-2'>
            <Label>Lightness: {lightness[0]}%</Label>
            <Slider value={lightness} onValueChange={setLightness} max={100} />
          </div>
        </div>

        <div className='p-3 bg-muted rounded-md'>
          <code className='text-sm'>{color}</code>
        </div>
      </div>
    )
  },
}

export const TimePicker: Story = {
  args: {},
  render: () => {
    const [hours, setHours] = React.useState([12])
    const [minutes, setMinutes] = React.useState([30])

    return (
      <div className='space-y-6 max-w-md'>
        <h3 className='text-lg font-medium'>Select Time</h3>

        <div className='text-4xl font-mono text-center'>
          {hours[0].toString().padStart(2, '0')}:
          {minutes[0].toString().padStart(2, '0')}
        </div>

        <div className='space-y-4'>
          <div className='space-y-2'>
            <Label>Hours</Label>
            <Slider value={hours} onValueChange={setHours} max={23} step={1} />
          </div>

          <div className='space-y-2'>
            <Label>Minutes</Label>
            <Slider
              value={minutes}
              onValueChange={setMinutes}
              max={59}
              step={5}
            />
          </div>
        </div>
      </div>
    )
  },
}
