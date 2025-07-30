import type { Meta, StoryObj } from '@storybook/nextjs'
import {
  Spinner,
  Dots,
  Pulse,
  Bars,
  Skeleton,
  Progress,
  LoadingOverlay,
  CircularProgress,
} from './loading'
import { within, expect } from '@storybook/test'
import { Button } from './button'
import { Card, CardContent, CardHeader, CardTitle } from './card'

const meta = {
  title: 'Design System/Components/Loading',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const SpinnerDefault: Story = {
  args: {
    size: 'md',
    color: 'primary',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const spinner = canvas.getByRole('img', { hidden: true })

    // Test spinner is visible
    await expect(spinner).toBeVisible()

    // Test spinner has animation class
    await expect(spinner).toHaveClass('animate-spin')
  },
}

export const SpinnerSizes: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <Spinner size='sm' />
      <Spinner size='md' />
      <Spinner size='lg' />
      <Spinner size='xl' />
    </div>
  ),
}

export const SpinnerColors: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <Spinner color='primary' />
      <Spinner color='secondary' />
      <div className='bg-gray-800 p-4 rounded'>
        <Spinner color='white' />
      </div>
    </div>
  ),
}

export const DotsDefault: Story = {
  render: () => <Dots />,
}

export const DotsSizes: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <Dots size='sm' />
      <Dots size='md' />
      <Dots size='lg' />
    </div>
  ),
}

export const DotsColors: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <Dots color='primary' />
      <Dots color='secondary' />
      <div className='bg-gray-800 p-4 rounded'>
        <Dots color='white' />
      </div>
    </div>
  ),
}

export const PulseDefault: Story = {
  render: () => <Pulse />,
}

export const PulseSizes: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <Pulse size='sm' />
      <Pulse size='md' />
      <Pulse size='lg' />
      <Pulse size='xl' />
    </div>
  ),
}

export const PulseColors: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <Pulse color='primary' />
      <Pulse color='secondary' />
    </div>
  ),
}

export const BarsDefault: Story = {
  render: () => <Bars />,
}

export const BarsSizes: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <Bars size='sm' />
      <Bars size='md' />
      <Bars size='lg' />
    </div>
  ),
}

export const BarsColors: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <Bars color='primary' />
      <Bars color='secondary' />
    </div>
  ),
}

export const SkeletonDefault: Story = {
  render: () => <Skeleton />,
}

export const SkeletonVariants: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='space-y-2'>
        <h3 className='text-sm font-medium'>Text</h3>
        <Skeleton variant='text' />
        <Skeleton variant='text' width='80%' />
        <Skeleton variant='text' width='60%' />
      </div>

      <div className='space-y-2'>
        <h3 className='text-sm font-medium'>Circular</h3>
        <div className='flex gap-2'>
          <Skeleton variant='circular' width={40} height={40} />
          <Skeleton variant='circular' width={60} height={60} />
          <Skeleton variant='circular' width={80} height={80} />
        </div>
      </div>

      <div className='space-y-2'>
        <h3 className='text-sm font-medium'>Rectangular</h3>
        <Skeleton variant='rectangular' width={200} height={100} />
      </div>

      <div className='space-y-2'>
        <h3 className='text-sm font-medium'>Rounded</h3>
        <Skeleton variant='rounded' width={200} height={40} />
      </div>
    </div>
  ),
}

export const SkeletonAnimations: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <h3 className='text-sm font-medium mb-2'>Pulse</h3>
        <Skeleton animation='pulse' width={200} height={40} />
      </div>

      <div>
        <h3 className='text-sm font-medium mb-2'>Wave</h3>
        <Skeleton animation='wave' width={200} height={40} />
      </div>

      <div>
        <h3 className='text-sm font-medium mb-2'>None</h3>
        <Skeleton animation='none' width={200} height={40} />
      </div>
    </div>
  ),
}

export const SkeletonCardExample: Story = {
  render: () => (
    <Card className='w-[300px]'>
      <CardHeader>
        <div className='flex items-center gap-3'>
          <Skeleton variant='circular' width={40} height={40} />
          <div className='space-y-2 flex-1'>
            <Skeleton variant='text' width='60%' />
            <Skeleton variant='text' width='40%' />
          </div>
        </div>
      </CardHeader>
      <CardContent className='space-y-3'>
        <Skeleton variant='rounded' height={120} />
        <Skeleton variant='text' />
        <Skeleton variant='text' />
        <Skeleton variant='text' width='80%' />
      </CardContent>
    </Card>
  ),
}

export const ProgressDefault: Story = {
  render: () => <Progress value={60} />,
}

export const ProgressSizes: Story = {
  render: () => (
    <div className='space-y-4 w-64'>
      <Progress value={30} size='sm' />
      <Progress value={50} size='md' />
      <Progress value={70} size='lg' />
    </div>
  ),
}

export const ProgressColors: Story = {
  render: () => (
    <div className='space-y-4 w-64'>
      <Progress value={60} color='primary' />
      <Progress value={60} color='secondary' />
      <Progress value={60} color='success' />
      <Progress value={60} color='warning' />
      <Progress value={60} color='error' />
    </div>
  ),
}

export const ProgressWithLabel: Story = {
  render: () => (
    <div className='space-y-4 w-64'>
      <Progress value={25} showLabel />
      <Progress value={50} showLabel />
      <Progress value={75} showLabel />
      <Progress value={100} showLabel />
    </div>
  ),
}

export const ProgressAnimated: Story = {
  render: () => {
    const [value, setValue] = React.useState(0)

    React.useEffect(() => {
      const timer = setInterval(() => {
        setValue((prev) => {
          if (prev >= 100) return 0
          return prev + 10
        })
      }, 500)

      return () => clearInterval(timer)
    }, [])

    return <Progress value={value} showLabel />
  },
}

export const CircularProgressDefault: Story = {
  render: () => <CircularProgress value={75} />,
}

export const CircularProgressSizes: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <CircularProgress value={60} size={60} strokeWidth={4} />
      <CircularProgress value={60} size={80} strokeWidth={6} />
      <CircularProgress value={60} size={120} strokeWidth={8} />
      <CircularProgress value={60} size={160} strokeWidth={10} />
    </div>
  ),
}

export const CircularProgressColors: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <CircularProgress value={75} color='primary' />
      <CircularProgress value={75} color='secondary' />
      <CircularProgress value={75} color='success' />
      <CircularProgress value={75} color='warning' />
      <CircularProgress value={75} color='error' />
    </div>
  ),
}

export const CircularProgressWithoutLabel: Story = {
  render: () => <CircularProgress value={60} showLabel={false} />,
}

export const CircularProgressAnimated: Story = {
  render: () => {
    const [value, setValue] = React.useState(0)

    React.useEffect(() => {
      const timer = setInterval(() => {
        setValue((prev) => {
          if (prev >= 100) return 0
          return prev + 10
        })
      }, 500)

      return () => clearInterval(timer)
    }, [])

    return <CircularProgress value={value} />
  },
}

export const LoadingOverlayExample: Story = {
  render: () => {
    const [loading, setLoading] = React.useState(false)

    return (
      <div className='relative'>
        <Card className='w-[400px]'>
          <CardHeader>
            <CardTitle>Card with Loading Overlay</CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <p>Click the button to show loading overlay</p>
            <Button onClick={() => setLoading(!loading)}>Toggle Loading</Button>
          </CardContent>
        </Card>

        <LoadingOverlay visible={loading} spinner='spinner'>
          <p className='text-sm text-muted-foreground'>Loading content...</p>
        </LoadingOverlay>
      </div>
    )
  },
}

export const LoadingOverlaySpinners: Story = {
  render: () => {
    const [spinner, setSpinner] = React.useState<
      'spinner' | 'dots' | 'pulse' | 'bars'
    >('spinner')

    return (
      <div className='relative'>
        <Card className='w-[400px]'>
          <CardHeader>
            <CardTitle>Different Loading Spinners</CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='flex gap-2'>
              <Button size='sm' onClick={() => setSpinner('spinner')}>
                Spinner
              </Button>
              <Button size='sm' onClick={() => setSpinner('dots')}>
                Dots
              </Button>
              <Button size='sm' onClick={() => setSpinner('pulse')}>
                Pulse
              </Button>
              <Button size='sm' onClick={() => setSpinner('bars')}>
                Bars
              </Button>
            </div>
          </CardContent>
        </Card>

        <LoadingOverlay visible={true} spinner={spinner} />
      </div>
    )
  },
}

export const LoadingOverlayNoBlur: Story = {
  render: () => (
    <div className='relative'>
      <Card className='w-[400px]'>
        <CardHeader>
          <CardTitle>No Blur Effect</CardTitle>
        </CardHeader>
        <CardContent>
          <p>The overlay has no blur effect</p>
        </CardContent>
      </Card>

      <LoadingOverlay visible={true} blur={false} />
    </div>
  ),
}

export const AllLoadingTypes: Story = {
  render: () => (
    <div className='grid grid-cols-4 gap-8'>
      <div className='text-center space-y-2'>
        <Spinner />
        <p className='text-sm text-muted-foreground'>Spinner</p>
      </div>

      <div className='text-center space-y-2'>
        <Dots />
        <p className='text-sm text-muted-foreground'>Dots</p>
      </div>

      <div className='text-center space-y-2'>
        <Pulse />
        <p className='text-sm text-muted-foreground'>Pulse</p>
      </div>

      <div className='text-center space-y-2'>
        <Bars />
        <p className='text-sm text-muted-foreground'>Bars</p>
      </div>
    </div>
  ),
}

export const RealWorldExample: Story = {
  render: () => {
    const [loading, setLoading] = React.useState(false)
    const [progress, setProgress] = React.useState(0)

    const handleSubmit = () => {
      setLoading(true)
      setProgress(0)

      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setTimeout(() => setLoading(false), 500)
            return 100
          }
          return prev + 10
        })
      }, 300)
    }

    return (
      <Card className='w-[400px]'>
        <CardHeader>
          <CardTitle>Form Submission Example</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='space-y-2'>
            <label className='text-sm font-medium'>Name</label>
            <input
              className='w-full px-3 py-2 border rounded-md'
              placeholder='Enter your name'
            />
          </div>

          <div className='space-y-2'>
            <label className='text-sm font-medium'>Email</label>
            <input
              className='w-full px-3 py-2 border rounded-md'
              placeholder='Enter your email'
            />
          </div>

          {loading && <Progress value={progress} showLabel />}

          <Button onClick={handleSubmit} disabled={loading} fullWidth>
            {loading ? <Spinner size='sm' color='white' /> : 'Submit'}
          </Button>
        </CardContent>
      </Card>
    )
  },
}
