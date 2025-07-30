import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from '@/components/ui/skeleton'

const meta = {
  title: 'Design System/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Skeleton className='h-12 w-48' />,
}

export const Shimmer: Story = {
  render: () => <Skeleton variant='shimmer' className='h-12 w-48' />,
}

export const Wave: Story = {
  render: () => <Skeleton variant='wave' className='h-12 w-48' />,
}

export const Circle: Story = {
  render: () => <Skeleton className='h-12 w-12 rounded-full' />,
}

export const Lines: Story = {
  render: () => (
    <div className='space-y-2'>
      <Skeleton className='h-4 w-full' />
      <Skeleton className='h-4 w-full' />
      <Skeleton className='h-4 w-3/4' />
    </div>
  ),
}

export const Card: Story = {
  render: () => (
    <div className='flex flex-col space-y-3'>
      <Skeleton className='h-[125px] w-[250px] rounded-xl' />
      <div className='space-y-2'>
        <Skeleton className='h-4 w-[250px]' />
        <Skeleton className='h-4 w-[200px]' />
      </div>
    </div>
  ),
}

export const ProfileCard: Story = {
  render: () => (
    <div className='flex items-center space-x-4'>
      <Skeleton className='h-12 w-12 rounded-full' />
      <div className='space-y-2'>
        <Skeleton className='h-4 w-[150px]' />
        <Skeleton className='h-4 w-[100px]' />
      </div>
    </div>
  ),
}

export const Table: Story = {
  render: () => (
    <div className='w-full'>
      <div className='space-y-2'>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className='flex items-center space-x-4'>
            <Skeleton className='h-10 w-10 rounded' />
            <Skeleton className='h-4 flex-1' />
            <Skeleton className='h-4 w-20' />
            <Skeleton className='h-4 w-16' />
          </div>
        ))}
      </div>
    </div>
  ),
}

export const Form: Story = {
  render: () => (
    <div className='w-[400px] space-y-4'>
      <div className='space-y-2'>
        <Skeleton className='h-4 w-20' />
        <Skeleton className='h-10 w-full' />
      </div>
      <div className='space-y-2'>
        <Skeleton className='h-4 w-24' />
        <Skeleton className='h-10 w-full' />
      </div>
      <div className='space-y-2'>
        <Skeleton className='h-4 w-28' />
        <Skeleton className='h-20 w-full' />
      </div>
      <Skeleton className='h-10 w-32' />
    </div>
  ),
}

export const Grid: Story = {
  render: () => (
    <div className='grid grid-cols-3 gap-4'>
      {Array.from({ length: 9 }).map((_, i) => (
        <Skeleton key={i} className='h-20 w-full' />
      ))}
    </div>
  ),
}

export const BlogPost: Story = {
  render: () => (
    <article className='w-full max-w-3xl'>
      <Skeleton className='h-8 w-3/4 mb-4' />
      <div className='flex items-center space-x-4 mb-6'>
        <Skeleton className='h-10 w-10 rounded-full' />
        <div className='space-y-2'>
          <Skeleton className='h-4 w-24' />
          <Skeleton className='h-3 w-32' />
        </div>
      </div>
      <Skeleton className='h-[400px] w-full rounded-lg mb-6' />
      <div className='space-y-3'>
        <Skeleton className='h-4 w-full' />
        <Skeleton className='h-4 w-full' />
        <Skeleton className='h-4 w-5/6' />
        <Skeleton className='h-4 w-full' />
        <Skeleton className='h-4 w-4/5' />
      </div>
    </article>
  ),
}

export const Navigation: Story = {
  render: () => (
    <nav className='flex items-center justify-between w-full p-4'>
      <Skeleton className='h-8 w-32' />
      <div className='flex items-center space-x-4'>
        <Skeleton className='h-8 w-20' />
        <Skeleton className='h-8 w-20' />
        <Skeleton className='h-8 w-20' />
        <Skeleton className='h-8 w-8 rounded-full' />
      </div>
    </nav>
  ),
}

export const CustomAnimation: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <p className='text-sm text-muted-foreground mb-2'>Default animation</p>
        <Skeleton className='h-12 w-48' />
      </div>
      <div>
        <p className='text-sm text-muted-foreground mb-2'>Slower animation</p>
        <Skeleton className='h-12 w-48 animate-pulse [animation-duration:2s]' />
      </div>
      <div>
        <p className='text-sm text-muted-foreground mb-2'>No animation</p>
        <Skeleton className='h-12 w-48 animate-none bg-muted' />
      </div>
    </div>
  ),
}
