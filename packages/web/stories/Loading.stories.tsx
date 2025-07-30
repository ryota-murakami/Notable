import type { Meta, StoryObj } from '@storybook/nextjs'
import {
  Bars,
  CircularProgress,
  Dots,
  LoadingOverlay,
  Progress,
  Pulse,
  Skeleton,
  Spinner,
} from '../design-system/components/loading'
import { Button } from '../design-system/components/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../design-system/components/card'
import { useEffect, useState } from 'react'

const meta: Meta<typeof Spinner> = {
  title: 'Notable Design System/Loading',
  component: Spinner,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Comprehensive loading component system with multiple indicator types, progress bars, skeletons, and overlays. Essential for providing user feedback during data operations in Notable.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// Spinner Stories
export const SpinnerBasic: Story = {
  render: () => <Spinner />,
  parameters: {
    docs: {
      description: {
        story: 'Basic spinning loader for general loading states',
      },
    },
  },
}

export const SpinnerSizes: Story = {
  render: () => (
    <div className='flex items-center gap-6'>
      <div className='flex flex-col items-center gap-2'>
        <Spinner size='sm' />
        <span className='text-sm text-muted-foreground'>Small</span>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <Spinner size='md' />
        <span className='text-sm text-muted-foreground'>Medium</span>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <Spinner size='lg' />
        <span className='text-sm text-muted-foreground'>Large</span>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <Spinner size='xl' />
        <span className='text-sm text-muted-foreground'>Extra Large</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different spinner sizes for various UI contexts',
      },
    },
  },
}

export const SpinnerColors: Story = {
  render: () => (
    <div className='flex items-center gap-6'>
      <div className='flex flex-col items-center gap-2'>
        <Spinner color='primary' />
        <span className='text-sm text-muted-foreground'>Primary</span>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <Spinner color='secondary' />
        <span className='text-sm text-muted-foreground'>Secondary</span>
      </div>
      <div className='flex flex-col items-center gap-2 p-4 bg-black rounded'>
        <Spinner color='white' />
        <span className='text-sm text-white'>White</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different spinner colors for various backgrounds and contexts',
      },
    },
  },
}

// Dots Stories
export const DotsBasic: Story = {
  render: () => <Dots />,
  parameters: {
    docs: {
      description: {
        story: 'Bouncing dots loader for a playful loading experience',
      },
    },
  },
}

export const DotsVariations: Story = {
  render: () => (
    <div className='space-y-6'>
      <div className='flex items-center gap-6'>
        <div className='flex flex-col items-center gap-2'>
          <Dots size='sm' />
          <span className='text-sm text-muted-foreground'>Small</span>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <Dots size='md' />
          <span className='text-sm text-muted-foreground'>Medium</span>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <Dots size='lg' />
          <span className='text-sm text-muted-foreground'>Large</span>
        </div>
      </div>
      <div className='flex items-center gap-6'>
        <div className='flex flex-col items-center gap-2'>
          <Dots color='primary' />
          <span className='text-sm text-muted-foreground'>Primary</span>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <Dots color='secondary' />
          <span className='text-sm text-muted-foreground'>Secondary</span>
        </div>
        <div className='flex flex-col items-center gap-2 p-4 bg-black rounded'>
          <Dots color='white' />
          <span className='text-sm text-white'>White</span>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dots loader in different sizes and colors',
      },
    },
  },
}

// Pulse Stories
export const PulseBasic: Story = {
  render: () => <Pulse />,
  parameters: {
    docs: {
      description: {
        story: 'Pulsing circles loader for subtle loading indication',
      },
    },
  },
}

export const PulseVariations: Story = {
  render: () => (
    <div className='flex items-center gap-8'>
      <div className='flex flex-col items-center gap-2'>
        <Pulse size='sm' />
        <span className='text-sm text-muted-foreground'>Small</span>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <Pulse size='md' />
        <span className='text-sm text-muted-foreground'>Medium</span>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <Pulse size='lg' />
        <span className='text-sm text-muted-foreground'>Large</span>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <Pulse size='xl' />
        <span className='text-sm text-muted-foreground'>Extra Large</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pulse loader in different sizes',
      },
    },
  },
}

// Bars Stories
export const BarsBasic: Story = {
  render: () => <Bars />,
  parameters: {
    docs: {
      description: {
        story: 'Animated bars loader with rhythmic motion',
      },
    },
  },
}

export const BarsVariations: Story = {
  render: () => (
    <div className='flex items-center gap-8'>
      <div className='flex flex-col items-center gap-4'>
        <Bars size='sm' />
        <span className='text-sm text-muted-foreground'>Small</span>
      </div>
      <div className='flex flex-col items-center gap-4'>
        <Bars size='md' />
        <span className='text-sm text-muted-foreground'>Medium</span>
      </div>
      <div className='flex flex-col items-center gap-4'>
        <Bars size='lg' />
        <span className='text-sm text-muted-foreground'>Large</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Bars loader in different sizes',
      },
    },
  },
}

// Skeleton Stories
export const SkeletonBasic: Story = {
  render: () => (
    <div className='w-80 space-y-3'>
      <Skeleton />
      <Skeleton />
      <Skeleton width='60%' />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Basic skeleton loader for text content',
      },
    },
  },
}

export const SkeletonVariants: Story = {
  render: () => (
    <div className='space-y-6'>
      <div className='space-y-2'>
        <h3 className='text-sm font-medium'>Text Skeletons</h3>
        <div className='space-y-2'>
          <Skeleton variant='text' />
          <Skeleton variant='text' width='80%' />
          <Skeleton variant='text' width='60%' />
        </div>
      </div>

      <div className='space-y-2'>
        <h3 className='text-sm font-medium'>Shape Skeletons</h3>
        <div className='flex items-center gap-4'>
          <Skeleton variant='circular' width={40} height={40} />
          <Skeleton variant='rectangular' width={100} height={60} />
          <Skeleton variant='rounded' width={120} height={80} />
        </div>
      </div>

      <div className='space-y-2'>
        <h3 className='text-sm font-medium'>Animation Types</h3>
        <div className='space-y-2'>
          <Skeleton animation='pulse' />
          <Skeleton animation='wave' />
          <Skeleton animation='none' />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different skeleton variants and animations',
      },
    },
  },
}

// Progress Stories
export const ProgressBasic: Story = {
  render: () => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 10))
      }, 500)
      return () => clearInterval(timer)
    }, [])

    return (
      <div className='w-80'>
        <Progress value={progress} showLabel />
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Animated progress bar with percentage label',
      },
    },
  },
}

export const ProgressVariations: Story = {
  render: () => (
    <div className='w-80 space-y-6'>
      <div className='space-y-2'>
        <h3 className='text-sm font-medium'>Sizes</h3>
        <Progress value={65} size='sm' />
        <Progress value={65} size='md' />
        <Progress value={65} size='lg' />
      </div>

      <div className='space-y-2'>
        <h3 className='text-sm font-medium'>Colors</h3>
        <Progress value={75} color='primary' />
        <Progress value={60} color='success' />
        <Progress value={45} color='warning' />
        <Progress value={30} color='error' />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Progress bars in different sizes and colors',
      },
    },
  },
}

// Circular Progress Stories
export const CircularProgressBasic: Story = {
  render: () => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 5))
      }, 200)
      return () => clearInterval(timer)
    }, [])

    return <CircularProgress value={progress} />
  },
  parameters: {
    docs: {
      description: {
        story: 'Animated circular progress indicator',
      },
    },
  },
}

export const CircularProgressVariations: Story = {
  render: () => (
    <div className='flex items-center gap-8'>
      <div className='flex flex-col items-center gap-2'>
        <CircularProgress value={75} size={80} />
        <span className='text-sm text-muted-foreground'>Small</span>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <CircularProgress value={60} size={120} />
        <span className='text-sm text-muted-foreground'>Medium</span>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <CircularProgress value={45} size={160} />
        <span className='text-sm text-muted-foreground'>Large</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Circular progress in different sizes',
      },
    },
  },
}

// Loading Overlay Stories
export const LoadingOverlayDemo: Story = {
  render: () => {
    const [loading, setLoading] = useState(false)

    const handleLoad = () => {
      setLoading(true)
      setTimeout(() => setLoading(false), 3000)
    }

    return (
      <div className='relative'>
        <Card className='w-96'>
          <CardHeader>
            <CardTitle>Content Area</CardTitle>
            <CardDescription>
              This content can be overlaid with loading states
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <p className='text-sm text-muted-foreground'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button onClick={handleLoad} disabled={loading}>
              {loading ? 'Loading...' : 'Trigger Loading'}
            </Button>
          </CardContent>
        </Card>
        <LoadingOverlay visible={loading}>
          <p className='text-sm text-muted-foreground'>
            Loading your content...
          </p>
        </LoadingOverlay>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading overlay that can be placed over any content area',
      },
    },
  },
}

export const LoadingOverlayVariants: Story = {
  render: () => {
    const [activeLoader, setActiveLoader] = useState<string | null>(null)

    const loaders = [
      { type: 'spinner', label: 'Spinner' },
      { type: 'dots', label: 'Dots' },
      { type: 'pulse', label: 'Pulse' },
      { type: 'bars', label: 'Bars' },
    ]

    const handleLoad = (type: string) => {
      setActiveLoader(type)
      setTimeout(() => setActiveLoader(null), 2000)
    }

    return (
      <div className='space-y-4'>
        <div className='flex gap-2'>
          {loaders.map(({ type, label }) => (
            <Button
              key={type}
              onClick={() => handleLoad(type)}
              disabled={activeLoader !== null}
              size='sm'
            >
              {label}
            </Button>
          ))}
        </div>

        <div className='relative'>
          <Card className='w-80'>
            <CardContent className='p-6'>
              <div className='space-y-2'>
                <Skeleton />
                <Skeleton width='80%' />
                <Skeleton width='60%' />
              </div>
            </CardContent>
          </Card>
          <LoadingOverlay
            visible={activeLoader !== null}
            spinner={activeLoader as any}
          >
            <p className='text-sm text-muted-foreground'>
              Loading with {activeLoader}...
            </p>
          </LoadingOverlay>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading overlay with different spinner types',
      },
    },
  },
}

// Notable App Examples
export const NotableNoteLoading: Story = {
  render: () => (
    <Card className='w-96'>
      <CardHeader>
        <div className='flex items-center gap-3'>
          <Skeleton variant='circular' width={40} height={40} />
          <div className='flex-1 space-y-2'>
            <Skeleton width='60%' />
            <Skeleton width='40%' />
          </div>
        </div>
      </CardHeader>
      <CardContent className='space-y-3'>
        <Skeleton height={100} />
        <div className='space-y-2'>
          <Skeleton />
          <Skeleton width='90%' />
          <Skeleton width='70%' />
        </div>
        <div className='flex gap-2'>
          <Skeleton width={60} height={20} />
          <Skeleton width={80} height={20} />
          <Skeleton width={50} height={20} />
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Note card skeleton as shown while loading note content in Notable',
      },
    },
  },
}

export const NotableSyncProgress: Story = {
  render: () => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 2))
      }, 100)
      return () => clearInterval(timer)
    }, [])

    return (
      <Card className='w-80'>
        <CardContent className='p-6'>
          <div className='text-center space-y-4'>
            <div className='flex justify-center'>
              <CircularProgress value={progress} size={100} color='primary' />
            </div>
            <div>
              <h3 className='font-semibold'>Syncing Notes</h3>
              <p className='text-sm text-muted-foreground'>
                Updating your notes across all devices...
              </p>
            </div>
            <Progress value={progress} size='sm' showLabel />
          </div>
        </CardContent>
      </Card>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Sync progress indicator showing both circular and linear progress',
      },
    },
  },
}

export const NotableSearchLoading: Story = {
  render: () => (
    <div className='w-96 space-y-4'>
      <div className='flex items-center gap-3 p-3 border rounded-lg'>
        <Spinner size='sm' />
        <span className='text-sm text-muted-foreground'>
          Searching your notes...
        </span>
      </div>

      <div className='space-y-3'>
        {[1, 2, 3].map((i) => (
          <div key={i} className='flex items-start gap-3 p-3 border rounded-lg'>
            <Skeleton variant='rectangular' width={40} height={40} />
            <div className='flex-1 space-y-2'>
              <Skeleton width='80%' />
              <Skeleton width='60%' />
              <div className='flex gap-2'>
                <Skeleton width={50} height={16} />
                <Skeleton width={60} height={16} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Search results loading state with spinner and result skeletons',
      },
    },
  },
}

export const NotableAIAssistant: Story = {
  render: () => (
    <Card className='w-96'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <Dots size='sm' />
          AI Assistant is thinking...
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='p-4 bg-muted/50 rounded-lg'>
          <div className='space-y-2'>
            <Skeleton animation='wave' />
            <Skeleton animation='wave' width='85%' />
            <Skeleton animation='wave' width='70%' />
          </div>
        </div>
        <div className='text-center'>
          <Pulse size='sm' />
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'AI assistant loading state with animated skeletons and pulse indicator',
      },
    },
  },
}

// All Loading Types Showcase
export const AllLoadingTypes: Story = {
  render: () => (
    <div className='grid grid-cols-2 gap-8 p-6'>
      <div className='space-y-4'>
        <h3 className='font-semibold'>Spinners & Animations</h3>
        <div className='flex items-center gap-4'>
          <Spinner />
          <Dots />
          <Pulse />
          <Bars />
        </div>
      </div>

      <div className='space-y-4'>
        <h3 className='font-semibold'>Progress Indicators</h3>
        <div className='space-y-2'>
          <Progress value={70} />
          <div className='flex justify-center'>
            <CircularProgress value={85} size={80} />
          </div>
        </div>
      </div>

      <div className='space-y-4'>
        <h3 className='font-semibold'>Skeletons</h3>
        <div className='space-y-2'>
          <div className='flex items-center gap-3'>
            <Skeleton variant='circular' width={32} height={32} />
            <div className='flex-1 space-y-1'>
              <Skeleton width='60%' />
              <Skeleton width='40%' />
            </div>
          </div>
          <Skeleton variant='rectangular' width='100%' height={60} />
        </div>
      </div>

      <div className='space-y-4'>
        <h3 className='font-semibold'>Button States</h3>
        <div className='space-y-2'>
          <Button disabled className='w-full'>
            <Spinner size='sm' className='mr-2' />
            Loading...
          </Button>
          <Button variant='outline' disabled className='w-full'>
            <Dots size='sm' className='mr-2' />
            Processing...
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Comprehensive showcase of all loading component types and their typical usage',
      },
    },
  },
}
