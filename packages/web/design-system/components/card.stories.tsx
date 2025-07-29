import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
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
  BookOpen,
  Code,
  Palette,
  Zap,
  TrendingUp,
  Users,
  AlertCircle,
} from 'lucide-react'

const meta = {
  title: 'Design System/Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
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
    },
    hover: {
      control: { type: 'select' },
      options: ['none', 'lift', 'glow', 'scale', 'tilt', 'float', 'rotate'],
    },
    status: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'error', 'info'],
    },
    interactive: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    blur: {
      control: { type: 'boolean' },
    },
    selectable: {
      control: { type: 'boolean' },
    },
    selected: {
      control: { type: 'boolean' },
    },
    collapsible: {
      control: { type: 'boolean' },
    },
    collapsed: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description goes here</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is the card content area where you can place any content.</p>
        </CardContent>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
}

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <>
        <CardHeader>
          <CardTitle>Elevated Card</CardTitle>
          <CardDescription>This card has a shadow elevation</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Elevated cards appear to float above the surface.</p>
        </CardContent>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
}

export const Bordered: Story = {
  args: {
    variant: 'bordered',
    children: (
      <>
        <CardHeader>
          <CardTitle>Bordered Card</CardTitle>
          <CardDescription>This card has a prominent border</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Bordered cards have a more defined edge.</p>
        </CardContent>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
}

export const Gradient: Story = {
  args: {
    variant: 'gradient',
    children: (
      <>
        <CardHeader>
          <CardTitle>Gradient Card</CardTitle>
          <CardDescription>
            This card has a subtle gradient background
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Gradient cards add visual interest with subtle color transitions.
          </p>
        </CardContent>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
}

export const Glass: Story = {
  args: {
    variant: 'glass',
    children: (
      <>
        <CardHeader>
          <CardTitle>Glass Card</CardTitle>
          <CardDescription>
            This card has a glassmorphism effect
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Glass cards work best on colorful backgrounds.</p>
        </CardContent>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: '400px',
          background: 'linear-gradient(to br, #3b82f6, #8b5cf6)',
          padding: '2rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export const Premium: Story = {
  args: {
    variant: 'premium',
    children: (
      <>
        <CardHeader>
          <CardTitle>Premium Card</CardTitle>
          <CardDescription>
            This card has a premium, sophisticated look
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Premium cards are perfect for highlighting special content.</p>
        </CardContent>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
}

export const InteractiveCards: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1rem',
        width: '800px',
      }}
    >
      <Card variant='elevated' hover='lift' interactive>
        <CardHeader>
          <CardTitle>Lift on Hover</CardTitle>
          <CardDescription>This card lifts when hovered</CardDescription>
        </CardHeader>
      </Card>
      <Card variant='elevated' hover='glow' interactive>
        <CardHeader>
          <CardTitle>Glow on Hover</CardTitle>
          <CardDescription>This card glows when hovered</CardDescription>
        </CardHeader>
      </Card>
      <Card variant='elevated' hover='scale' interactive>
        <CardHeader>
          <CardTitle>Scale on Hover</CardTitle>
          <CardDescription>This card scales when hovered</CardDescription>
        </CardHeader>
      </Card>
      <Card variant='elevated' hover='tilt' interactive>
        <CardHeader>
          <CardTitle>Tilt on Hover</CardTitle>
          <CardDescription>
            This card tilts based on mouse position
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  ),
}

export const StatusCards: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '400px',
      }}
    >
      <Card status='success'>
        <CardHeader>
          <CardTitle>Success Status</CardTitle>
          <CardDescription>
            This operation completed successfully
          </CardDescription>
        </CardHeader>
      </Card>
      <Card status='warning'>
        <CardHeader>
          <CardTitle>Warning Status</CardTitle>
          <CardDescription>
            Please review this important information
          </CardDescription>
        </CardHeader>
      </Card>
      <Card status='error'>
        <CardHeader>
          <CardTitle>Error Status</CardTitle>
          <CardDescription>An error occurred during processing</CardDescription>
        </CardHeader>
      </Card>
      <Card status='info'>
        <CardHeader>
          <CardTitle>Info Status</CardTitle>
          <CardDescription>Here's some helpful information</CardDescription>
        </CardHeader>
      </Card>
    </div>
  ),
}

export const SelectableCards: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<number | null>(null)

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem',
          width: '600px',
        }}
      >
        {[1, 2, 3].map((i) => (
          <Card
            key={i}
            selectable
            selected={selected === i}
            onClick={() => setSelected(i)}
            hover='lift'
            interactive
          >
            <CardHeader>
              <CardTitle>Option {i}</CardTitle>
              <CardDescription>Click to select</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    )
  },
}

export const CollapsibleCard: Story = {
  render: () => {
    const [collapsed, setCollapsed] = React.useState(false)

    return (
      <div style={{ width: '400px' }}>
        <Card
          collapsible
          collapsed={collapsed}
          onToggle={() => setCollapsed(!collapsed)}
          variant='bordered'
        >
          <CardHeader>
            <CardTitle>Collapsible Card</CardTitle>
            <CardDescription>
              Click to {collapsed ? 'expand' : 'collapse'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>This content can be hidden by clicking on the card.</p>
            <p>
              It's useful for reducing visual clutter when you have many cards.
            </p>
          </CardContent>
        </Card>
      </div>
    )
  },
}

export const FeatureCards: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem',
        width: '900px',
      }}
    >
      <FeatureCard
        icon={<BookOpen className='h-6 w-6' />}
        title='Rich Documentation'
        description='Comprehensive guides and API references for all components'
      />
      <FeatureCard
        icon={<Code className='h-6 w-6' />}
        title='TypeScript Support'
        description='Full TypeScript support with detailed type definitions'
      />
      <FeatureCard
        icon={<Palette className='h-6 w-6' />}
        title='Customizable Themes'
        description='Easy theme customization with CSS variables'
      />
    </div>
  ),
}

export const MetricCards: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem',
        width: '900px',
      }}
    >
      <MetricCard
        label='Total Revenue'
        value='$45,231.89'
        change={20.1}
        icon={<TrendingUp className='h-4 w-4' />}
      />
      <MetricCard
        label='Active Users'
        value='2,350'
        change={-4.3}
        icon={<Users className='h-4 w-4' />}
      />
      <MetricCard
        label='Conversion Rate'
        value='12.5%'
        change={12.8}
        icon={<Zap className='h-4 w-4' />}
      />
    </div>
  ),
}

export const ProgressCards: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '400px',
      }}
    >
      <ProgressCard
        title='Project Progress'
        description='Q4 Development Milestones'
        progress={65}
        color='primary'
      />
      <ProgressCard
        title='Storage Used'
        description='8.2 GB of 10 GB'
        progress={82}
        color='warning'
      />
      <ProgressCard
        title='API Uptime'
        description='Last 30 days'
        progress={99.9}
        color='success'
      />
    </div>
  ),
}

export const NotificationCards: Story = {
  render: () => {
    const [cards, setCards] = React.useState([
      {
        id: 1,
        type: 'info' as const,
        title: 'System Update',
        message: 'A new version is available',
      },
      {
        id: 2,
        type: 'success' as const,
        title: 'Upload Complete',
        message: 'Your files have been uploaded successfully',
      },
      {
        id: 3,
        type: 'warning' as const,
        title: 'Storage Warning',
        message: "You're running low on storage space",
      },
      {
        id: 4,
        type: 'error' as const,
        title: 'Connection Error',
        message: 'Failed to connect to the server',
      },
    ])

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '500px',
        }}
      >
        {cards.map((card) => (
          <NotificationCard
            key={card.id}
            type={card.type}
            title={card.title}
            message={card.message}
            icon={<AlertCircle className='h-5 w-5' />}
            onDismiss={() => setCards(cards.filter((c) => c.id !== card.id))}
          />
        ))}
      </div>
    )
  },
}

export const ActionCards: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1rem',
        width: '800px',
      }}
    >
      <ActionCard
        icon={<BookOpen className='h-6 w-6' />}
        title='Get Started'
        description='Learn the basics with our comprehensive tutorial'
        primaryAction={{
          label: 'Start Tutorial',
          onClick: () => console.log('Start tutorial'),
        }}
        secondaryAction={{
          label: 'Skip',
          onClick: () => console.log('Skip'),
        }}
      />
      <ActionCard
        icon={<Zap className='h-6 w-6' />}
        title='Upgrade Plan'
        description='Unlock premium features and unlimited access'
        primaryAction={{
          label: 'Upgrade Now',
          onClick: () => console.log('Upgrade'),
          loading: false,
        }}
        secondaryAction={{
          label: 'Learn More',
          onClick: () => console.log('Learn more'),
        }}
      />
    </div>
  ),
}

export const LoadingCard: Story = {
  args: {
    loading: true,
    children: (
      <>
        <CardHeader>
          <CardTitle>Loading Card</CardTitle>
          <CardDescription>This card is in a loading state</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Content is being loaded...</p>
        </CardContent>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
}

export const CompleteExample: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <Card variant='elevated' hover='lift' interactive>
        <CardHeader>
          <CardTitle>Complete Card Example</CardTitle>
          <CardDescription>
            This demonstrates all card sections together
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Cards are versatile containers that can hold various types of
            content including text, images, and interactive elements.
          </p>
        </CardContent>
        <CardFooter className='justify-between'>
          <Button variant='ghost'>Cancel</Button>
          <Button variant='primary'>Continue</Button>
        </CardFooter>
      </Card>
    </div>
  ),
}
