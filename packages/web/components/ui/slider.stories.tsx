import type { Meta, StoryObj } from '@storybook/nextjs'
import { Slider } from './slider'
import { expect, userEvent, within } from '@storybook/test'
import { Label } from './label'
import * as React from 'react'
import { Volume, Volume2, VolumeX } from 'lucide-react'

const meta: Meta<typeof Slider> = {
  title: 'Components/UI/Slider',
  component: Slider,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'An input where the user selects a value from within a given range. Built on Radix UI Slider for full accessibility.',
      },
    },
  },
  argTypes: {
    defaultValue: {
      control: 'object',
      description: 'The default value of the slider',
    },
    value: {
      control: 'object',
      description: 'The controlled value of the slider',
    },
    max: {
      control: 'number',
      description: 'The maximum value',
    },
    min: {
      control: 'number',
      description: 'The minimum value',
    },
    step: {
      control: 'number',
      description: 'The step increment',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the slider is disabled',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the slider',
    },
  },
}

export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
  },
  render: (args) => (
    <div className='w-[300px]'>
      <Slider {...args} />
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => {
    const [value, setValue] = React.useState([50])

    return (
      <div className='w-[300px] space-y-3'>
        <div className='flex justify-between'>
          <Label htmlFor='volume'>Volume</Label>
          <span className='text-sm text-muted-foreground'>{value}%</span>
        </div>
        <Slider
          id='volume'
          value={value}
          onValueChange={setValue}
          max={100}
          step={1}
        />
      </div>
    )
  },
}

export const Range: Story = {
  render: () => {
    const [values, setValues] = React.useState([25, 75])

    return (
      <div className='w-[300px] space-y-3'>
        <div className='flex justify-between'>
          <Label>Price Range</Label>
          <span className='text-sm text-muted-foreground'>
            ${values[0]} - ${values[1]}
          </span>
        </div>
        <Slider value={values} onValueChange={setValues} max={100} step={1} />
      </div>
    )
  },
}

export const Steps: Story = {
  render: () => {
    const [value, setValue] = React.useState([50])

    return (
      <div className='space-y-6'>
        <div className='w-[300px] space-y-3'>
          <div className='flex justify-between'>
            <Label>Small Steps (0.1)</Label>
            <span className='text-sm text-muted-foreground'>
              {value[0].toFixed(1)}
            </span>
          </div>
          <Slider value={value} onValueChange={setValue} max={10} step={0.1} />
        </div>

        <div className='w-[300px] space-y-3'>
          <div className='flex justify-between'>
            <Label>Large Steps (10)</Label>
            <span className='text-sm text-muted-foreground'>{value[0]}</span>
          </div>
          <Slider defaultValue={[50]} max={100} step={10} />
        </div>
      </div>
    )
  },
}

export const Disabled: Story = {
  render: () => (
    <div className='space-y-6'>
      <div className='w-[300px] space-y-3'>
        <Label>Disabled at 30%</Label>
        <Slider defaultValue={[30]} max={100} step={1} disabled />
      </div>
      <div className='w-[300px] space-y-3'>
        <Label>Disabled Range</Label>
        <Slider defaultValue={[20, 80]} max={100} step={1} disabled />
      </div>
    </div>
  ),
}

export const VolumeControl: Story = {
  render: () => {
    const [volume, setVolume] = React.useState([50])

    const getVolumeIcon = () => {
      if (volume[0] === 0) return <VolumeX className='h-4 w-4' />
      if (volume[0] < 50) return <Volume className='h-4 w-4' />
      return <Volume2 className='h-4 w-4' />
    }

    return (
      <div className='w-[300px] space-y-3'>
        <Label>Audio Volume</Label>
        <div className='flex items-center gap-3'>
          <button
            onClick={() => setVolume([0])}
            className='text-muted-foreground hover:text-foreground transition-colors'
          >
            {getVolumeIcon()}
          </button>
          <Slider
            value={volume}
            onValueChange={setVolume}
            max={100}
            step={1}
            className='flex-1'
          />
          <span className='text-sm text-muted-foreground w-12 text-right'>
            {volume[0]}%
          </span>
        </div>
      </div>
    )
  },
}

export const ColorPicker: Story = {
  render: () => {
    const [hue, setHue] = React.useState([180])
    const [saturation, setSaturation] = React.useState([100])
    const [lightness, setLightness] = React.useState([50])

    return (
      <div className='w-[350px] space-y-6'>
        <div
          className='h-24 rounded-lg border'
          style={{
            backgroundColor: `hsl(${hue[0]}, ${saturation[0]}%, ${lightness[0]}%)`,
          }}
        />

        <div className='space-y-4'>
          <div className='space-y-3'>
            <div className='flex justify-between'>
              <Label>Hue</Label>
              <span className='text-sm text-muted-foreground'>{hue[0]}°</span>
            </div>
            <Slider
              value={hue}
              onValueChange={setHue}
              max={360}
              step={1}
              className='[&_[role=slider]]:bg-gradient-to-r [&_[role=slider]]:from-red-500 [&_[role=slider]]:via-green-500 [&_[role=slider]]:to-blue-500'
            />
          </div>

          <div className='space-y-3'>
            <div className='flex justify-between'>
              <Label>Saturation</Label>
              <span className='text-sm text-muted-foreground'>
                {saturation[0]}%
              </span>
            </div>
            <Slider
              value={saturation}
              onValueChange={setSaturation}
              max={100}
              step={1}
            />
          </div>

          <div className='space-y-3'>
            <div className='flex justify-between'>
              <Label>Lightness</Label>
              <span className='text-sm text-muted-foreground'>
                {lightness[0]}%
              </span>
            </div>
            <Slider
              value={lightness}
              onValueChange={setLightness}
              max={100}
              step={1}
            />
          </div>
        </div>

        <div className='text-sm text-muted-foreground text-center'>
          hsl({hue[0]}, {saturation[0]}%, {lightness[0]}%)
        </div>
      </div>
    )
  },
}

export const FormExample: Story = {
  render: () => {
    const [age, setAge] = React.useState([25])
    const [experience, setExperience] = React.useState([3])
    const [salary, setSalary] = React.useState([50000, 80000])

    return (
      <form
        className='w-full max-w-md space-y-6'
        onSubmit={(e) => e.preventDefault()}
      >
        <div className='space-y-3'>
          <div className='flex justify-between'>
            <Label htmlFor='age'>Age</Label>
            <span className='text-sm text-muted-foreground'>
              {age[0]} years
            </span>
          </div>
          <Slider
            id='age'
            value={age}
            onValueChange={setAge}
            min={18}
            max={65}
            step={1}
          />
        </div>

        <div className='space-y-3'>
          <div className='flex justify-between'>
            <Label htmlFor='experience'>Years of Experience</Label>
            <span className='text-sm text-muted-foreground'>
              {experience[0]} years
            </span>
          </div>
          <Slider
            id='experience'
            value={experience}
            onValueChange={setExperience}
            max={20}
            step={1}
          />
        </div>

        <div className='space-y-3'>
          <div className='flex justify-between'>
            <Label htmlFor='salary'>Expected Salary Range</Label>
            <span className='text-sm text-muted-foreground'>
              ${(salary[0] / 1000).toFixed(0)}k - $
              {(salary[1] / 1000).toFixed(0)}k
            </span>
          </div>
          <Slider
            id='salary'
            value={salary}
            onValueChange={setSalary}
            min={30000}
            max={150000}
            step={5000}
          />
        </div>

        <button
          type='submit'
          className='w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90'
        >
          Submit Application
        </button>
      </form>
    )
  },
}

export const CustomStyling: Story = {
  render: () => (
    <div className='w-[300px] space-y-6'>
      <div className='space-y-3'>
        <Label>Default Style</Label>
        <Slider defaultValue={[50]} />
      </div>

      <div className='space-y-3'>
        <Label>Custom Track Color</Label>
        <Slider
          defaultValue={[50]}
          className='[&_[role=slider]]:bg-green-500 [&_[role=slider]]:border-green-500'
        />
      </div>

      <div className='space-y-3'>
        <Label>Larger Thumb</Label>
        <Slider
          defaultValue={[50]}
          className='[&_[role=slider]]:h-6 [&_[role=slider]]:w-6'
        />
      </div>

      <div className='space-y-3'>
        <Label>Gradient Track</Label>
        <Slider
          defaultValue={[75]}
          className='[&>span:first-child]:bg-gradient-to-r [&>span:first-child]:from-purple-500 [&>span:first-child]:to-pink-500'
        />
      </div>
    </div>
  ),
}

export const MediaPlayer: Story = {
  render: () => {
    const [progress, setProgress] = React.useState([30])
    const [isPlaying, setIsPlaying] = React.useState(false)
    const duration = 180 // 3 minutes in seconds

    const formatTime = (seconds: number) => {
      const mins = Math.floor(seconds / 60)
      const secs = Math.floor(seconds % 60)
      return `${mins}:${secs.toString().padStart(2, '0')}`
    }

    const currentTime = (progress[0] / 100) * duration

    React.useEffect(() => {
      if (isPlaying && progress[0] < 100) {
        const interval = setInterval(() => {
          setProgress((prev) => {
            const next = prev[0] + 1
            return next <= 100 ? [next] : prev
          })
        }, duration * 10) // Update every 1%

        return () => clearInterval(interval)
      }
    }, [isPlaying, progress, duration])

    return (
      <div className='w-full max-w-md space-y-4'>
        <div className='bg-secondary rounded-lg p-4'>
          <h3 className='font-medium mb-2'>Now Playing</h3>
          <p className='text-sm text-muted-foreground'>
            Sample Track - Artist Name
          </p>
        </div>

        <div className='space-y-2'>
          <Slider
            value={progress}
            onValueChange={setProgress}
            max={100}
            step={1}
            className='cursor-pointer'
          />
          <div className='flex justify-between text-xs text-muted-foreground'>
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <div className='flex justify-center'>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className='px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90'
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
      </div>
    )
  },
}

export const MultipleSliders: Story = {
  render: () => {
    const [values, setValues] = React.useState({
      brightness: [50],
      contrast: [50],
      saturation: [50],
      temperature: [50],
    })

    const handleChange = (key: string) => (value: number[]) => {
      setValues((prev) => ({ ...prev, [key]: value }))
    }

    return (
      <div className='w-full max-w-md space-y-6'>
        <h3 className='text-lg font-medium'>Image Adjustments</h3>

        {Object.entries(values).map(([key, value]) => (
          <div key={key} className='space-y-3'>
            <div className='flex justify-between'>
              <Label className='capitalize'>{key}</Label>
              <span className='text-sm text-muted-foreground'>
                {value[0] - 50 > 0 ? '+' : ''}
                {value[0] - 50}
              </span>
            </div>
            <Slider
              value={value}
              onValueChange={handleChange(key)}
              max={100}
              step={1}
            />
          </div>
        ))}

        <button
          onClick={() =>
            setValues({
              brightness: [50],
              contrast: [50],
              saturation: [50],
              temperature: [50],
            })
          }
          className='w-full px-4 py-2 border rounded-md hover:bg-accent'
        >
          Reset All
        </button>
      </div>
    )
  },
}

export const InteractionTest: Story = {
  render: () => {
    const [value, setValue] = React.useState([50])

    return (
      <div className='w-[300px] space-y-3'>
        <Label>Test Slider</Label>
        <Slider value={value} onValueChange={setValue} max={100} step={1} />
        <p className='text-sm text-muted-foreground'>Value: {value[0]}</p>
      </div>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for component to render
    await new Promise((resolve) => setTimeout(resolve, 100))

    // Find the slider
    const slider = canvas.getByRole('slider')

    // Test keyboard navigation
    await userEvent.click(slider)
    await userEvent.keyboard('{ArrowRight}')
    await userEvent.keyboard('{ArrowRight}')
    await userEvent.keyboard('{ArrowLeft}')
  },
}
