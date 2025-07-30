import type { Meta, StoryObj } from '@storybook/nextjs'
import { fn } from '@storybook/test'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  FeatureCard,
  MetricCard,
  ProgressCard,
  NotificationCard,
  ActionCard,
} from './card'
import { Button } from './button'
import {
  Heart,
  Star,
  Zap,
  Shield,
  Rocket,
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  CheckCircle,
  AlertTriangle,
  Info,
  XCircle,
  Bell,
  Download,
  Share,
  Settings,
} from 'lucide-react'

const meta = {
  title: 'Design System/Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The Card component is a versatile, animated container built with Framer Motion that supports multiple variants, hover effects, states, and specialized card types.

## Features
- **Multiple Variants**: default, elevated, bordered, ghost, gradient, glass, neumorphism, premium
- **Hover Effects**: none, lift, glow, scale, tilt, float, rotate
- **Interactive States**: loading, selectable, collapsible, status indicators
- **Specialized Cards**: FeatureCard, MetricCard, ProgressCard, NotificationCard, ActionCard
- **Motion Animations**: Smooth hover animations and transitions
- **Accessibility**: Proper ARIA support and keyboard navigation

## Card Variants
- **default**: Standard card with border
- **elevated**: Card with shadow elevation
- **bordered**: Card with prominent border
- **ghost**: Transparent card
- **gradient**: Card with gradient background
- **glass**: Glassmorphism effect card
- **neumorphism**: Soft, material-like appearance
- **premium**: Premium gradient card

## Specialized Cards
- **FeatureCard**: For showcasing features with icons
- **MetricCard**: For displaying metrics with change indicators
- **ProgressCard**: For showing progress with animated bars
- **NotificationCard**: For alerts and notifications
- **ActionCard**: For call-to-action scenarios
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'elevated',
        'bordered',
        'ghost',
        'gradient',
        'glass',
        'neumorphism',
        'premium',
      ],
      description: 'Visual style variant of the card',
    },
    hover: {
      control: 'select',
      options: ['none', 'lift', 'glow', 'scale', 'tilt', 'float', 'rotate'],
      description: 'Hover animation effect',
    },
    interactive: {
      control: 'boolean',
      description: 'Enable interactive hover effects',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state',
    },
    status: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error', 'info'],
      description: 'Status indicator',
    },
    selectable: {
      control: 'boolean',
      description: 'Make card selectable',
    },
    selected: {
      control: 'boolean',
      description: 'Card selected state',
    },
    collapsible: {
      control: 'boolean',
      description: 'Make card collapsible',
    },
    collapsed: {
      control: 'boolean',
      description: 'Card collapsed state',
    },
  },
  args: {
    onClick: fn(),
    onToggle: fn(),
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

// Basic card stories
export const Default: Story = {
  render: () => (
    <Card className='w-80'>
      <CardHeader>
        <CardTitle>Default Card</CardTitle>
        <CardDescription>
          This is the default card variant with standard styling.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Card content goes here. You can put any content inside cards including
          text, images, forms, and other components.
        </p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
}

// Variant showcase
export const Variants: Story = {
  render: () => (
    <div className='grid grid-cols-2 gap-6 max-w-4xl'>
      <Card variant='default' className='w-full'>
        <CardHeader>
          <CardTitle>Default</CardTitle>
          <CardDescription>Standard card with border</CardDescription>
        </CardHeader>
        <CardContent>Standard card styling</CardContent>
      </Card>

      <Card variant='elevated' className='w-full'>
        <CardHeader>
          <CardTitle>Elevated</CardTitle>
          <CardDescription>Card with shadow elevation</CardDescription>
        </CardHeader>
        <CardContent>Elevated with shadow</CardContent>
      </Card>

      <Card variant='bordered' className='w-full'>
        <CardHeader>
          <CardTitle>Bordered</CardTitle>
          <CardDescription>Card with prominent border</CardDescription>
        </CardHeader>
        <CardContent>Strong border emphasis</CardContent>
      </Card>

      <Card variant='ghost' className='w-full'>
        <CardHeader>
          <CardTitle>Ghost</CardTitle>
          <CardDescription>Transparent card</CardDescription>
        </CardHeader>
        <CardContent>Minimal transparent style</CardContent>
      </Card>

      <Card variant='gradient' className='w-full'>
        <CardHeader>
          <CardTitle>Gradient</CardTitle>
          <CardDescription>Card with gradient background</CardDescription>
        </CardHeader>
        <CardContent>Beautiful gradient effect</CardContent>
      </Card>

      <Card variant='glass' className='w-full'>
        <CardHeader>
          <CardTitle>Glass</CardTitle>
          <CardDescription>Glassmorphism effect</CardDescription>
        </CardHeader>
        <CardContent>Modern glass design</CardContent>
      </Card>

      <Card variant='neumorphism' className='w-full'>
        <CardHeader>
          <CardTitle>Neumorphism</CardTitle>
          <CardDescription>Soft material appearance</CardDescription>
        </CardHeader>
        <CardContent>Subtle 3D effect</CardContent>
      </Card>

      <Card variant='premium' className='w-full'>
        <CardHeader>
          <CardTitle>Premium</CardTitle>
          <CardDescription>Premium gradient styling</CardDescription>
        </CardHeader>
        <CardContent>Elegant premium look</CardContent>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available card variants showcased in a grid layout.',
      },
    },
  },
}

// Hover effects showcase
export const HoverEffects: Story = {
  render: () => (
    <div className='grid grid-cols-3 gap-6 max-w-6xl'>
      <Card variant='elevated' hover='lift' interactive className='w-full'>
        <CardHeader>
          <CardTitle>Lift</CardTitle>
          <CardDescription>Hover to lift the card</CardDescription>
        </CardHeader>
        <CardContent>Card lifts on hover</CardContent>
      </Card>

      <Card variant='elevated' hover='glow' interactive className='w-full'>
        <CardHeader>
          <CardTitle>Glow</CardTitle>
          <CardDescription>Hover for glow effect</CardDescription>
        </CardHeader>
        <CardContent>Card glows on hover</CardContent>
      </Card>

      <Card variant='elevated' hover='scale' interactive className='w-full'>
        <CardHeader>
          <CardTitle>Scale</CardTitle>
          <CardDescription>Hover to scale the card</CardDescription>
        </CardHeader>
        <CardContent>Card scales on hover</CardContent>
      </Card>

      <Card variant='elevated' hover='tilt' interactive className='w-full'>
        <CardHeader>
          <CardTitle>Tilt</CardTitle>
          <CardDescription>Move mouse for 3D tilt</CardDescription>
        </CardHeader>
        <CardContent>Card tilts with mouse</CardContent>
      </Card>

      <Card variant='elevated' hover='float' interactive className='w-full'>
        <CardHeader>
          <CardTitle>Float</CardTitle>
          <CardDescription>Hover to float the card</CardDescription>
        </CardHeader>
        <CardContent>Card floats on hover</CardContent>
      </Card>

      <Card variant='elevated' hover='rotate' interactive className='w-full'>
        <CardHeader>
          <CardTitle>Rotate</CardTitle>
          <CardDescription>Hover for rotation effect</CardDescription>
        </CardHeader>
        <CardContent>Card rotates on hover</CardContent>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Different hover animation effects. Hover over each card to see the effect.',
      },
    },
  },
}

// Status indicators
export const StatusIndicators: Story = {
  render: () => (
    <div className='grid grid-cols-2 gap-4 max-w-2xl'>
      <Card status='success' className='w-full'>
        <CardHeader>
          <CardTitle>Success</CardTitle>
          <CardDescription>Operation completed successfully</CardDescription>
        </CardHeader>
        <CardContent>Green status indicator</CardContent>
      </Card>

      <Card status='warning' className='w-full'>
        <CardHeader>
          <CardTitle>Warning</CardTitle>
          <CardDescription>Attention required</CardDescription>
        </CardHeader>
        <CardContent>Yellow status indicator</CardContent>
      </Card>

      <Card status='error' className='w-full'>
        <CardHeader>
          <CardTitle>Error</CardTitle>
          <CardDescription>Something went wrong</CardDescription>
        </CardHeader>
        <CardContent>Red status indicator</CardContent>
      </Card>

      <Card status='info' className='w-full'>
        <CardHeader>
          <CardTitle>Info</CardTitle>
          <CardDescription>Information message</CardDescription>
        </CardHeader>
        <CardContent>Blue status indicator</CardContent>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Cards with different status indicators for various states.',
      },
    },
  },
}

// Loading and selection states
export const InteractiveStates: Story = {
  render: () => (
    <div className='grid grid-cols-3 gap-4 max-w-3xl'>
      <Card loading className='w-full'>
        <CardHeader>
          <CardTitle>Loading Card</CardTitle>
          <CardDescription>Card in loading state</CardDescription>
        </CardHeader>
        <CardContent>Loading animation active</CardContent>
      </Card>

      <Card selectable selected className='w-full'>
        <CardHeader>
          <CardTitle>Selected Card</CardTitle>
          <CardDescription>Card is currently selected</CardDescription>
        </CardHeader>
        <CardContent>Selection indicator visible</CardContent>
      </Card>

      <Card selectable className='w-full'>
        <CardHeader>
          <CardTitle>Selectable Card</CardTitle>
          <CardDescription>Click to select this card</CardDescription>
        </CardHeader>
        <CardContent>Click to select</CardContent>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Cards showing different interactive states like loading and selection.',
      },
    },
  },
}

// Feature cards
export const FeatureCards: Story = {
  render: () => (
    <div className='grid grid-cols-3 gap-6 max-w-4xl'>
      <FeatureCard
        icon={<Zap size={24} />}
        title='Lightning Fast'
        description='Optimized for speed and performance with modern technologies.'
      />
      <FeatureCard
        icon={<Shield size={24} />}
        title='Secure by Default'
        description='Built-in security features to protect your data and applications.'
      />
      <FeatureCard
        icon={<Rocket size={24} />}
        title='Easy to Deploy'
        description='Simple deployment process with comprehensive documentation.'
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Specialized feature cards with icons for showcasing product features.',
      },
    },
  },
}

// Metric cards
export const MetricCards: Story = {
  render: () => (
    <div className='grid grid-cols-3 gap-6 max-w-4xl'>
      <MetricCard
        label='Total Users'
        value='2,847'
        change={12.5}
        icon={<Users size={16} />}
      />
      <MetricCard
        label='Revenue'
        value='$45,231'
        change={-2.1}
        icon={<DollarSign size={16} />}
      />
      <MetricCard
        label='Active Sessions'
        value='1,234'
        change={8.7}
        icon={<Activity size={16} />}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Metric cards for displaying key performance indicators with change percentages.',
      },
    },
  },
}

// Progress cards
export const ProgressCards: Story = {
  render: () => (
    <div className='grid grid-cols-2 gap-6 max-w-3xl'>
      <ProgressCard
        title='Project Completion'
        description='Current progress of the development project'
        progress={75}
        color='primary'
      />
      <ProgressCard
        title='Server Health'
        description='Overall system performance'
        progress={92}
        color='success'
      />
      <ProgressCard
        title='Storage Usage'
        description='Disk space utilization'
        progress={65}
        color='warning'
      />
      <ProgressCard
        title='Error Rate'
        description='System error percentage'
        progress={15}
        color='error'
        showPercentage={false}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Progress cards with animated progress bars in different colors.',
      },
    },
  },
}

// Notification cards
export const NotificationCards: Story = {
  render: () => (
    <div className='space-y-4 max-w-md'>
      <NotificationCard
        title='Success'
        message='Your changes have been saved successfully.'
        type='success'
        icon={<CheckCircle size={20} />}
        onDismiss={() => console.log('Dismissed')}
      />
      <NotificationCard
        title='Warning'
        message='Please review your settings before continuing.'
        type='warning'
        icon={<AlertTriangle size={20} />}
        onDismiss={() => console.log('Dismissed')}
      />
      <NotificationCard
        title='Error'
        message='Failed to save changes. Please try again.'
        type='error'
        icon={<XCircle size={20} />}
        onDismiss={() => console.log('Dismissed')}
      />
      <NotificationCard
        title='Information'
        message='New features are now available in your dashboard.'
        type='info'
        icon={<Info size={20} />}
        onDismiss={() => console.log('Dismissed')}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Notification cards for different message types with dismiss functionality.',
      },
    },
  },
}

// Action cards
export const ActionCards: Story = {
  render: () => (
    <div className='grid grid-cols-2 gap-6 max-w-3xl'>
      <ActionCard
        title='Upgrade Plan'
        description='Get access to premium features and priority support.'
        icon={<Star size={24} />}
        primaryAction={{
          label: 'Upgrade Now',
          onClick: () => console.log('Upgrade clicked'),
        }}
        secondaryAction={{
          label: 'Learn More',
          onClick: () => console.log('Learn more clicked'),
        }}
      />
      <ActionCard
        title='Download App'
        description='Get the mobile app for the best experience on the go.'
        icon={<Download size={24} />}
        primaryAction={{
          label: 'Download',
          onClick: () => console.log('Download clicked'),
        }}
      />
      <ActionCard
        title='Share Project'
        description='Invite team members to collaborate on this project.'
        icon={<Share size={24} />}
        primaryAction={{
          label: 'Share',
          onClick: () => console.log('Share clicked'),
        }}
        secondaryAction={{
          label: 'Copy Link',
          onClick: () => console.log('Copy link clicked'),
        }}
      />
      <ActionCard
        title='Settings'
        description='Configure your preferences and account settings.'
        icon={<Settings size={24} />}
        primaryAction={{
          label: 'Open Settings',
          onClick: () => console.log('Settings clicked'),
        }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Action cards with call-to-action buttons for different scenarios.',
      },
    },
  },
}

// Complex example
export const ComplexExample: Story = {
  render: () => (
    <div className='max-w-md'>
      <Card variant='premium' hover='lift' interactive status='success'>
        <CardHeader>
          <div className='flex items-center gap-3'>
            <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center'>
              <TrendingUp className='text-primary' size={24} />
            </div>
            <div>
              <CardTitle>Analytics Dashboard</CardTitle>
              <CardDescription>View your performance metrics</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className='space-y-4'>
            <div className='flex justify-between items-center'>
              <span className='text-sm text-muted-foreground'>Views</span>
              <span className='font-semibold'>12,345</span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-sm text-muted-foreground'>Clicks</span>
              <span className='font-semibold'>1,234</span>
            </div>
            <div className='w-full bg-secondary rounded-full h-2'>
              <div className='bg-primary h-2 rounded-full w-3/4'></div>
            </div>
          </div>
        </CardContent>
        <CardFooter className='gap-2'>
          <Button variant='primary' size='sm'>
            View Details
          </Button>
          <Button variant='ghost' size='sm'>
            Export
          </Button>
        </CardFooter>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'A complex card example combining multiple features: premium variant, hover effects, status indicator, and rich content.',
      },
    },
  },
}

// Interactive playground
export const Interactive: Story = {
  args: {
    variant: 'elevated',
    hover: 'lift',
    interactive: true,
    loading: false,
    status: 'default',
    selectable: false,
    selected: false,
    collapsible: false,
    collapsed: false,
    className: 'w-80',
    children: (
      <>
        <CardHeader>
          <CardTitle>Interactive Card</CardTitle>
          <CardDescription>
            Customize this card using the controls below
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            This card can be customized using the Storybook controls. Try
            changing the variant, hover effect, and other properties.
          </p>
        </CardContent>
        <CardFooter>
          <Button>Action Button</Button>
        </CardFooter>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Interactive playground to test all card properties. Use the controls to experiment with different configurations.',
      },
    },
  },
}
