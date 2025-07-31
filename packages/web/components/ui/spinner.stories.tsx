import type { Meta, StoryObj } from '@storybook/nextjs'
import { Spinner } from './spinner'
import { expect, within } from '@storybook/test'

const meta: Meta<typeof Spinner> = {
  title: 'Components/UI/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A loading spinner component based on Radix UI themes. Available in three sizes for different contexts.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['1', '2', '3'],
      description: 'Spinner size variant',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Default: Story = {
  args: {},
}

export const Small: Story = {
  args: {
    size: '1',
  },
}

export const Medium: Story = {
  args: {
    size: '2',
  },
}

export const Large: Story = {
  args: {
    size: '3',
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className='flex items-center gap-8'>
      <div className='text-center'>
        <Spinner size='1' />
        <p className='text-sm text-muted-foreground mt-2'>Small</p>
      </div>
      <div className='text-center'>
        <Spinner size='2' />
        <p className='text-sm text-muted-foreground mt-2'>Medium</p>
      </div>
      <div className='text-center'>
        <Spinner size='3' />
        <p className='text-sm text-muted-foreground mt-2'>Large</p>
      </div>
    </div>
  ),
}

export const CustomColor: Story = {
  args: {
    className: 'text-primary',
    size: '3',
  },
}

export const LoadingStates: Story = {
  render: () => (
    <div className='space-y-8'>
      <div className='p-4 border rounded-lg'>
        <div className='flex items-center gap-2'>
          <Spinner size='1' />
          <span className='text-sm'>Loading content...</span>
        </div>
      </div>

      <div className='p-4 border rounded-lg text-center'>
        <Spinner size='2' />
        <p className='text-sm text-muted-foreground mt-2'>
          Processing your request
        </p>
      </div>

      <div className='p-8 border rounded-lg text-center'>
        <Spinner size='3' className='text-primary' />
        <h3 className='text-lg font-semibold mt-4'>Uploading files</h3>
        <p className='text-sm text-muted-foreground'>
          This may take a few moments
        </p>
      </div>
    </div>
  ),
}

export const InButton: Story = {
  render: () => (
    <button className='inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md'>
      <Spinner size='1' className='text-primary-foreground' />
      Saving...
    </button>
  ),
}

export const FullPage: Story = {
  render: () => (
    <div className='fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center'>
      <div className='text-center'>
        <Spinner size='3' />
        <p className='text-lg mt-4'>Loading application...</p>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
}
