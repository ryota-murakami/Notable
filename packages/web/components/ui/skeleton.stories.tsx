import type { Meta, StoryObj } from '@storybook/nextjs'
import { Skeleton } from './skeleton'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './card'
import * as React from 'react'

const meta: Meta<typeof Skeleton> = {
  title: 'Components/UI/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A skeleton loader component used to show placeholder content while data is loading. Helps prevent layout shift and provides visual feedback.',
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes for styling',
    },
  },
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  render: () => <Skeleton className='w-[100px] h-[20px] rounded-full' />,
}

export const Shapes: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <p className='text-sm text-muted-foreground mb-2'>Rectangle</p>
        <Skeleton className='h-[125px] w-[250px] rounded-xl' />
      </div>
      <div>
        <p className='text-sm text-muted-foreground mb-2'>Circle</p>
        <Skeleton className='h-12 w-12 rounded-full' />
      </div>
      <div>
        <p className='text-sm text-muted-foreground mb-2'>Line</p>
        <Skeleton className='h-4 w-[250px]' />
      </div>
    </div>
  ),
}

export const CardSkeleton: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <Skeleton className='h-6 w-[150px]' />
        <Skeleton className='h-4 w-[200px]' />
      </CardHeader>
      <CardContent>
        <div className='space-y-2'>
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-[80%]' />
        </div>
      </CardContent>
    </Card>
  ),
}

export const TextSkeleton: Story = {
  render: () => (
    <div className='space-y-3'>
      <Skeleton className='h-8 w-[200px]' />
      <div className='space-y-2'>
        <Skeleton className='h-4 w-full' />
        <Skeleton className='h-4 w-full' />
        <Skeleton className='h-4 w-[90%]' />
        <Skeleton className='h-4 w-[75%]' />
      </div>
    </div>
  ),
}

export const ListSkeleton: Story = {
  render: () => (
    <div className='space-y-4'>
      {[1, 2, 3].map((i) => (
        <div key={i} className='flex items-center space-x-4'>
          <Skeleton className='h-12 w-12 rounded-full' />
          <div className='space-y-2'>
            <Skeleton className='h-4 w-[250px]' />
            <Skeleton className='h-4 w-[200px]' />
          </div>
        </div>
      ))}
    </div>
  ),
}

export const GridSkeleton: Story = {
  render: () => (
    <div className='grid grid-cols-3 gap-4'>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className='space-y-3'>
          <Skeleton className='h-[125px] w-full rounded-xl' />
          <div className='space-y-2'>
            <Skeleton className='h-4 w-[80%]' />
            <Skeleton className='h-4 w-[60%]' />
          </div>
        </div>
      ))}
    </div>
  ),
}

export const ProfileSkeleton: Story = {
  render: () => (
    <div className='flex items-start space-x-4'>
      <Skeleton className='h-16 w-16 rounded-full' />
      <div className='space-y-2'>
        <Skeleton className='h-6 w-[200px]' />
        <Skeleton className='h-4 w-[150px]' />
        <div className='flex gap-2 pt-2'>
          <Skeleton className='h-8 w-[80px]' />
          <Skeleton className='h-8 w-[80px]' />
        </div>
      </div>
    </div>
  ),
}

export const TableSkeleton: Story = {
  render: () => (
    <div className='w-full'>
      <div className='mb-4'>
        <Skeleton className='h-8 w-[200px]' />
      </div>
      <div className='rounded-md border'>
        <div className='border-b p-4'>
          <div className='flex gap-4'>
            <Skeleton className='h-4 w-[100px]' />
            <Skeleton className='h-4 w-[150px]' />
            <Skeleton className='h-4 w-[100px]' />
            <Skeleton className='h-4 w-[80px]' />
          </div>
        </div>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className='border-b p-4 last:border-0'>
            <div className='flex gap-4'>
              <Skeleton className='h-4 w-[100px]' />
              <Skeleton className='h-4 w-[150px]' />
              <Skeleton className='h-4 w-[100px]' />
              <Skeleton className='h-4 w-[80px]' />
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
}

export const FormSkeleton: Story = {
  render: () => (
    <div className='w-full max-w-md space-y-6'>
      <div className='space-y-2'>
        <Skeleton className='h-4 w-[60px]' />
        <Skeleton className='h-10 w-full' />
      </div>
      <div className='space-y-2'>
        <Skeleton className='h-4 w-[80px]' />
        <Skeleton className='h-10 w-full' />
      </div>
      <div className='space-y-2'>
        <Skeleton className='h-4 w-[100px]' />
        <Skeleton className='h-24 w-full' />
      </div>
      <Skeleton className='h-10 w-[120px]' />
    </div>
  ),
}

export const NavigationSkeleton: Story = {
  render: () => (
    <div className='w-64 space-y-4'>
      <Skeleton className='h-10 w-full' />
      <div className='space-y-2'>
        {[1, 2, 3, 4, 5].map((i) => (
          <Skeleton key={i} className='h-8 w-full' />
        ))}
      </div>
      <div className='pt-4 space-y-2'>
        <Skeleton className='h-4 w-[100px]' />
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className='h-8 w-full' />
        ))}
      </div>
    </div>
  ),
}

function LoadingDemo() {
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='w-full max-w-md'>
      {isLoading ? (
        <Card>
          <CardHeader>
            <Skeleton className='h-6 w-[150px]' />
            <Skeleton className='h-4 w-[200px]' />
          </CardHeader>
          <CardContent>
            <div className='space-y-2'>
              <Skeleton className='h-4 w-full' />
              <Skeleton className='h-4 w-full' />
              <Skeleton className='h-4 w-[80%]' />
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Data Loaded</CardTitle>
            <CardDescription>
              This content loaded after 2 seconds
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export const LoadingTransition: Story = {
  render: () => <LoadingDemo />,
}

export const ComplexLayout: Story = {
  render: () => (
    <div className='w-full max-w-4xl'>
      <div className='mb-6'>
        <Skeleton className='h-10 w-[300px] mb-2' />
        <Skeleton className='h-4 w-[400px]' />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='md:col-span-2 space-y-6'>
          {[1, 2].map((i) => (
            <Card key={i}>
              <CardHeader>
                <div className='flex items-center justify-between'>
                  <div className='space-y-2'>
                    <Skeleton className='h-6 w-[200px]' />
                    <Skeleton className='h-4 w-[150px]' />
                  </div>
                  <Skeleton className='h-8 w-8 rounded-full' />
                </div>
              </CardHeader>
              <CardContent>
                <div className='space-y-3'>
                  <Skeleton className='h-4 w-full' />
                  <Skeleton className='h-4 w-full' />
                  <Skeleton className='h-4 w-[70%]' />
                </div>
                <div className='flex gap-2 mt-4'>
                  <Skeleton className='h-8 w-[60px]' />
                  <Skeleton className='h-8 w-[60px]' />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className='space-y-6'>
          <Card>
            <CardHeader>
              <Skeleton className='h-6 w-[120px]' />
            </CardHeader>
            <CardContent>
              <div className='space-y-3'>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className='flex items-center gap-3'>
                    <Skeleton className='h-8 w-8 rounded-full' />
                    <Skeleton className='h-4 w-[100px]' />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Skeleton className='h-6 w-[100px]' />
            </CardHeader>
            <CardContent>
              <div className='space-y-2'>
                <Skeleton className='h-20 w-full rounded-lg' />
                <Skeleton className='h-4 w-full' />
                <Skeleton className='h-4 w-[80%]' />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  ),
}

export const PulsatingEffect: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <p className='text-sm text-muted-foreground mb-2'>Default animation</p>
        <Skeleton className='h-20 w-[300px]' />
      </div>
      <div>
        <p className='text-sm text-muted-foreground mb-2'>No animation</p>
        <div className='h-20 w-[300px] bg-muted rounded-md' />
      </div>
      <div>
        <p className='text-sm text-muted-foreground mb-2'>Custom colors</p>
        <div className='h-20 w-[300px] animate-pulse bg-gradient-to-r from-purple-200 to-pink-200 rounded-md' />
      </div>
    </div>
  ),
}
