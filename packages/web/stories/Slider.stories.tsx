import type { Meta, StoryObj } from '@storybook/nextjs'
import { Slider } from '../design-system/components/slider'
import { Button } from '../design-system/components/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../design-system/components/card'
import { useState } from 'react'
import {
  Moon,
  Sun,
  TextSizeIcon,
  Volume2,
  VolumeX,
  ZoomIn,
  ZoomOut,
} from 'lucide-react'

const meta: Meta<typeof Slider> = {
  title: 'Notable Design System/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Range slider component for selecting values within a range. Perfect for settings, preferences, and data filtering in Notable.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
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
      description: 'Whether the slider is disabled',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Basic Slider Stories
export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
  },
}

export const WithMinMax: Story = {
  args: {
    defaultValue: [25],
    min: 0,
    max: 100,
    step: 5,
  },
  parameters: {
    docs: {
      description: {
        story: 'Slider with custom minimum, maximum, and step values',
      },
    },
  },
}

export const MultipleValues: Story = {
  args: {
    defaultValue: [25, 75],
    max: 100,
    step: 1,
  },
  parameters: {
    docs: {
      description: {
        story: 'Range slider with multiple handles for selecting a range',
      },
    },
  },
}

export const Disabled: Story = {
  args: {
    defaultValue: [60],
    max: 100,
    step: 1,
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled slider state',
      },
    },
  },
}

// Interactive Examples
export const VolumeControl: Story = {
  render: () => {
    const [volume, setVolume] = useState([75])
    const isMuted = volume[0] === 0

    return (
      <div className='w-80 space-y-4'>
        <div className='flex items-center gap-4'>
          <Button
            variant='ghost'
            size='icon'
            onClick={() => setVolume(isMuted ? [75] : [0])}
          >
            {isMuted ? (
              <VolumeX className='h-4 w-4' />
            ) : (
              <Volume2 className='h-4 w-4' />
            )}
          </Button>
          <div className='flex-1'>
            <Slider
              value={volume}
              onValueChange={setVolume}
              max={100}
              step={1}
              className='w-full'
            />
          </div>
          <span className='text-sm text-muted-foreground w-10 text-right'>
            {volume[0]}%
          </span>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Volume control slider with mute button and percentage display',
      },
    },
  },
}

export const BrightnessControl: Story = {
  render: () => {
    const [brightness, setBrightness] = useState([80])

    return (
      <div className='w-80 space-y-4'>
        <div className='flex items-center gap-4'>
          <Moon className='h-4 w-4 text-muted-foreground' />
          <div className='flex-1'>
            <Slider
              value={brightness}
              onValueChange={setBrightness}
              max={100}
              step={5}
              className='w-full'
            />
          </div>
          <Sun className='h-4 w-4 text-muted-foreground' />
        </div>
        <div className='text-center'>
          <span className='text-sm text-muted-foreground'>
            Brightness: {brightness[0]}%
          </span>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Brightness control with visual indicators',
      },
    },
  },
}

export const FontSizeControl: Story = {
  render: () => {
    const [fontSize, setFontSize] = useState([16])
    const minSize = 12
    const maxSize = 24

    return (
      <div className='w-80 space-y-4'>
        <div className='flex items-center gap-4'>
          <TextSizeIcon className='h-3 w-3 text-muted-foreground' />
          <div className='flex-1'>
            <Slider
              value={fontSize}
              onValueChange={setFontSize}
              min={minSize}
              max={maxSize}
              step={1}
              className='w-full'
            />
          </div>
          <TextSizeIcon className='h-5 w-5 text-muted-foreground' />
        </div>
        <div className='text-center p-4 border rounded'>
          <p style={{ fontSize: `${fontSize[0]}px` }} className='font-medium'>
            Sample text at {fontSize[0]}px
          </p>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Font size control with live preview',
      },
    },
  },
}

export const ZoomControl: Story = {
  render: () => {
    const [zoom, setZoom] = useState([100])
    const zoomLevels = [50, 75, 100, 125, 150, 200]

    return (
      <div className='w-80 space-y-4'>
        <div className='flex items-center gap-3'>
          <Button
            variant='ghost'
            size='icon'
            onClick={() => {
              const currentIndex = zoomLevels.findIndex(
                (level) => level >= zoom[0]
              )
              const newIndex = Math.max(0, currentIndex - 1)
              setZoom([zoomLevels[newIndex]])
            }}
            disabled={zoom[0] <= zoomLevels[0]}
          >
            <ZoomOut className='h-4 w-4' />
          </Button>
          <div className='flex-1'>
            <Slider
              value={zoom}
              onValueChange={setZoom}
              min={50}
              max={200}
              step={25}
              className='w-full'
            />
          </div>
          <Button
            variant='ghost'
            size='icon'
            onClick={() => {
              const currentIndex = zoomLevels.findIndex(
                (level) => level > zoom[0]
              )
              const newIndex = Math.min(zoomLevels.length - 1, currentIndex)
              setZoom([zoomLevels[newIndex]])
            }}
            disabled={zoom[0] >= zoomLevels[zoomLevels.length - 1]}
          >
            <ZoomIn className='h-4 w-4' />
          </Button>
        </div>
        <div className='text-center'>
          <span className='text-sm text-muted-foreground'>
            Zoom: {zoom[0]}%
          </span>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Zoom control with increment/decrement buttons',
      },
    },
  },
}

// Notable App Examples
export const NotableEditorSettings: Story = {
  render: () => {
    const [fontSize, setFontSize] = useState([14])
    const [lineHeight, setLineHeight] = useState([1.6])
    const [sidebarWidth, setSidebarWidth] = useState([280])

    return (
      <Card className='w-96'>
        <CardHeader>
          <CardTitle>Editor Settings</CardTitle>
          <CardDescription>
            Customize your writing experience in Notable
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-6'>
          <div className='space-y-2'>
            <div className='flex items-center justify-between'>
              <label className='text-sm font-medium'>Font Size</label>
              <span className='text-sm text-muted-foreground'>
                {fontSize[0]}px
              </span>
            </div>
            <Slider
              value={fontSize}
              onValueChange={setFontSize}
              min={12}
              max={20}
              step={1}
              className='w-full'
            />
          </div>

          <div className='space-y-2'>
            <div className='flex items-center justify-between'>
              <label className='text-sm font-medium'>Line Height</label>
              <span className='text-sm text-muted-foreground'>
                {lineHeight[0]}
              </span>
            </div>
            <Slider
              value={lineHeight}
              onValueChange={setLineHeight}
              min={1.2}
              max={2.0}
              step={0.1}
              className='w-full'
            />
          </div>

          <div className='space-y-2'>
            <div className='flex items-center justify-between'>
              <label className='text-sm font-medium'>Sidebar Width</label>
              <span className='text-sm text-muted-foreground'>
                {sidebarWidth[0]}px
              </span>
            </div>
            <Slider
              value={sidebarWidth}
              onValueChange={setSidebarWidth}
              min={200}
              max={400}
              step={20}
              className='w-full'
            />
          </div>
        </CardContent>
      </Card>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Editor settings panel with multiple sliders for customizing the writing experience',
      },
    },
  },
}

export const NotableTagFiltering: Story = {
  render: () => {
    const [dateRange, setDateRange] = useState([7, 30])
    const [minWordCount, setMinWordCount] = useState([100])

    return (
      <Card className='w-96'>
        <CardHeader>
          <CardTitle>Filter Notes</CardTitle>
          <CardDescription>
            Narrow down your notes with advanced filters
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-6'>
          <div className='space-y-2'>
            <label className='text-sm font-medium'>Date Range (days ago)</label>
            <div className='px-3'>
              <Slider
                value={dateRange}
                onValueChange={setDateRange}
                min={1}
                max={365}
                step={1}
                className='w-full'
              />
            </div>
            <div className='flex justify-between text-xs text-muted-foreground'>
              <span>{dateRange[0]} days ago</span>
              <span>{dateRange[1]} days ago</span>
            </div>
          </div>

          <div className='space-y-2'>
            <div className='flex items-center justify-between'>
              <label className='text-sm font-medium'>Minimum Word Count</label>
              <span className='text-sm text-muted-foreground'>
                {minWordCount[0]} words
              </span>
            </div>
            <Slider
              value={minWordCount}
              onValueChange={setMinWordCount}
              min={0}
              max={5000}
              step={50}
              className='w-full'
            />
          </div>

          <div className='flex gap-2'>
            <Button variant='outline' size='sm' className='flex-1'>
              Reset Filters
            </Button>
            <Button size='sm' className='flex-1'>
              Apply Filters
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Note filtering interface with range and single value sliders',
      },
    },
  },
}

export const NotableAISettings: Story = {
  render: () => {
    const [creativity, setCreativity] = useState([70])
    const [responseLength, setResponseLength] = useState([150])
    const [confidence, setConfidence] = useState([80])

    const getCreativityLabel = (value: number) => {
      if (value < 30) return 'Conservative'
      if (value < 70) return 'Balanced'
      return 'Creative'
    }

    const getLengthLabel = (value: number) => {
      if (value < 100) return 'Concise'
      if (value < 200) return 'Moderate'
      return 'Detailed'
    }

    return (
      <Card className='w-96'>
        <CardHeader>
          <CardTitle>AI Assistant Settings</CardTitle>
          <CardDescription>
            Fine-tune your AI writing assistant preferences
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-6'>
          <div className='space-y-2'>
            <div className='flex items-center justify-between'>
              <label className='text-sm font-medium'>Creativity Level</label>
              <span className='text-sm text-muted-foreground'>
                {getCreativityLabel(creativity[0])}
              </span>
            </div>
            <Slider
              value={creativity}
              onValueChange={setCreativity}
              min={0}
              max={100}
              step={10}
              className='w-full'
            />
            <div className='flex justify-between text-xs text-muted-foreground'>
              <span>Conservative</span>
              <span>Creative</span>
            </div>
          </div>

          <div className='space-y-2'>
            <div className='flex items-center justify-between'>
              <label className='text-sm font-medium'>Response Length</label>
              <span className='text-sm text-muted-foreground'>
                {getLengthLabel(responseLength[0])}
              </span>
            </div>
            <Slider
              value={responseLength}
              onValueChange={setResponseLength}
              min={50}
              max={300}
              step={25}
              className='w-full'
            />
          </div>

          <div className='space-y-2'>
            <div className='flex items-center justify-between'>
              <label className='text-sm font-medium'>
                Confidence Threshold
              </label>
              <span className='text-sm text-muted-foreground'>
                {confidence[0]}%
              </span>
            </div>
            <Slider
              value={confidence}
              onValueChange={setConfidence}
              min={50}
              max={100}
              step={5}
              className='w-full'
            />
            <p className='text-xs text-muted-foreground'>
              AI will only suggest changes above this confidence level
            </p>
          </div>
        </CardContent>
      </Card>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'AI assistant configuration panel with contextual labels and descriptions',
      },
    },
  },
}

// Advanced Examples
export const AdvancedSliderDemo: Story = {
  render: () => {
    const [values, setValues] = useState({
      single: [50],
      range: [25, 75],
      stepped: [500],
      precision: [3.14],
    })

    return (
      <div className='w-96 space-y-8'>
        <div className='space-y-2'>
          <label className='text-sm font-medium'>Single Value</label>
          <Slider
            value={values.single}
            onValueChange={(value) =>
              setValues((prev) => ({ ...prev, single: value }))
            }
            max={100}
            step={1}
          />
          <div className='text-center text-sm text-muted-foreground'>
            Value: {values.single[0]}
          </div>
        </div>

        <div className='space-y-2'>
          <label className='text-sm font-medium'>Range Selection</label>
          <Slider
            value={values.range}
            onValueChange={(value) =>
              setValues((prev) => ({ ...prev, range: value }))
            }
            max={100}
            step={1}
          />
          <div className='text-center text-sm text-muted-foreground'>
            Range: {values.range[0]} - {values.range[1]}
          </div>
        </div>

        <div className='space-y-2'>
          <label className='text-sm font-medium'>Large Steps</label>
          <Slider
            value={values.stepped}
            onValueChange={(value) =>
              setValues((prev) => ({ ...prev, stepped: value }))
            }
            min={0}
            max={1000}
            step={100}
          />
          <div className='text-center text-sm text-muted-foreground'>
            Value: {values.stepped[0]}
          </div>
        </div>

        <div className='space-y-2'>
          <label className='text-sm font-medium'>Decimal Precision</label>
          <Slider
            value={values.precision}
            onValueChange={(value) =>
              setValues((prev) => ({ ...prev, precision: value }))
            }
            min={0}
            max={10}
            step={0.01}
          />
          <div className='text-center text-sm text-muted-foreground'>
            Value: {values.precision[0].toFixed(2)}
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Advanced slider configurations including range selection, large steps, and decimal precision',
      },
    },
  },
}
