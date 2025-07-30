import type { Meta, StoryObj } from '@storybook/nextjs'
import { Badge } from './badge'
import {
  Check,
  X,
  AlertTriangle,
  Info,
  Star,
  Users,
  Calendar,
  Tag,
  Clock,
  Zap,
} from 'lucide-react'

const meta = {
  title: 'Design System/Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The Badge component is a versatile labeling component used to highlight status, categories, or other descriptive information.

## Features
- **Multiple Variants**: default, secondary, destructive, outline, success, warning, info
- **Flexible Content**: Supports text, icons, and combinations
- **Accessibility**: Proper color contrast and focus management
- **Customizable**: Easy to extend with custom styling

## Use Cases
- Status indicators (active, inactive, pending)
- Category labels
- Notification badges
- User roles and permissions
- Feature flags
- Metrics and counters
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
        'secondary',
        'destructive',
        'outline',
        'success',
        'warning',
        'info',
      ],
      description: 'Visual style variant of the badge',
    },
    children: {
      control: 'text',
      description: 'Badge content',
    },
  },
  args: {
    children: 'Badge',
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

// Basic badge
export const Default: Story = {
  args: {
    children: 'Default Badge',
  },
}

// All variants
export const Variants: Story = {
  render: () => (
    <div className='flex flex-wrap gap-2'>
      <Badge variant='default'>Default</Badge>
      <Badge variant='secondary'>Secondary</Badge>
      <Badge variant='destructive'>Destructive</Badge>
      <Badge variant='outline'>Outline</Badge>
      <Badge variant='success'>Success</Badge>
      <Badge variant='warning'>Warning</Badge>
      <Badge variant='info'>Info</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'All available badge variants showcasing different semantic meanings.',
      },
    },
  },
}

// Status indicators
export const StatusIndicators: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='flex flex-wrap gap-2'>
        <Badge variant='success'>
          <Check size={12} className='mr-1' />
          Active
        </Badge>
        <Badge variant='warning'>
          <Clock size={12} className='mr-1' />
          Pending
        </Badge>
        <Badge variant='destructive'>
          <X size={12} className='mr-1' />
          Inactive
        </Badge>
        <Badge variant='info'>
          <Info size={12} className='mr-1' />
          Draft
        </Badge>
      </div>

      <div className='flex flex-wrap gap-2'>
        <Badge variant='success'>Online</Badge>
        <Badge variant='warning'>Away</Badge>
        <Badge variant='destructive'>Offline</Badge>
        <Badge variant='secondary'>Busy</Badge>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Badges used as status indicators with and without icons.',
      },
    },
  },
}

// Category labels
export const CategoryLabels: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='flex flex-wrap gap-2'>
        <Badge variant='outline'>
          <Tag size={12} className='mr-1' />
          Technology
        </Badge>
        <Badge variant='outline'>
          <Tag size={12} className='mr-1' />
          Design
        </Badge>
        <Badge variant='outline'>
          <Tag size={12} className='mr-1' />
          Marketing
        </Badge>
        <Badge variant='outline'>
          <Tag size={12} className='mr-1' />
          Business
        </Badge>
      </div>

      <div className='flex flex-wrap gap-2'>
        <Badge variant='secondary'>Frontend</Badge>
        <Badge variant='secondary'>Backend</Badge>
        <Badge variant='secondary'>Full Stack</Badge>
        <Badge variant='secondary'>DevOps</Badge>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Badges used for categorization and tagging.',
      },
    },
  },
}

// User roles and permissions
export const UserRoles: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='flex flex-wrap gap-2'>
        <Badge variant='default'>
          <Star size={12} className='mr-1' />
          Admin
        </Badge>
        <Badge variant='info'>
          <Users size={12} className='mr-1' />
          Manager
        </Badge>
        <Badge variant='secondary'>
          <Users size={12} className='mr-1' />
          Member
        </Badge>
        <Badge variant='outline'>Guest</Badge>
      </div>

      <div className='flex flex-wrap gap-2'>
        <Badge variant='success'>Verified</Badge>
        <Badge variant='warning'>Pending</Badge>
        <Badge variant='destructive'>Blocked</Badge>
        <Badge variant='info'>New</Badge>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Badges representing user roles, permissions, and account status.',
      },
    },
  },
}

// Notification badges
export const NotificationBadges: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='flex flex-wrap items-center gap-4'>
        <div className='relative'>
          <span className='text-sm'>Messages</span>
          <Badge
            variant='destructive'
            className='absolute -top-2 -right-6 px-1.5 py-0.5 text-xs'
          >
            3
          </Badge>
        </div>

        <div className='relative'>
          <span className='text-sm'>Notifications</span>
          <Badge
            variant='info'
            className='absolute -top-2 -right-8 px-1.5 py-0.5 text-xs'
          >
            12
          </Badge>
        </div>

        <div className='relative'>
          <span className='text-sm'>Updates</span>
          <Badge
            variant='success'
            className='absolute -top-2 -right-4 px-1.5 py-0.5 text-xs'
          >
            1
          </Badge>
        </div>
      </div>

      <div className='flex flex-wrap gap-2'>
        <Badge variant='destructive'>99+</Badge>
        <Badge variant='warning'>5</Badge>
        <Badge variant='info'>New</Badge>
        <Badge variant='success'>●</Badge>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Badges used for notifications and counters.',
      },
    },
  },
}

// Feature flags and labels
export const FeatureFlags: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='flex flex-wrap gap-2'>
        <Badge variant='success'>
          <Zap size={12} className='mr-1' />
          Beta
        </Badge>
        <Badge variant='warning'>
          <AlertTriangle size={12} className='mr-1' />
          Experimental
        </Badge>
        <Badge variant='info'>
          <Star size={12} className='mr-1' />
          New
        </Badge>
        <Badge variant='secondary'>Coming Soon</Badge>
      </div>

      <div className='flex flex-wrap gap-2'>
        <Badge variant='outline'>Free</Badge>
        <Badge variant='default'>Pro</Badge>
        <Badge variant='success'>Enterprise</Badge>
        <Badge variant='destructive'>Deprecated</Badge>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Badges for feature flags, product tiers, and development status.',
      },
    },
  },
}

// Size variations
export const SizeVariations: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='flex flex-wrap items-center gap-2'>
        <Badge className='text-xs px-2 py-0.5'>Small</Badge>
        <Badge>Medium (Default)</Badge>
        <Badge className='text-sm px-3 py-1'>Large</Badge>
      </div>

      <div className='flex flex-wrap items-center gap-2'>
        <Badge variant='success' className='text-xs px-2 py-0.5'>
          <Check size={10} className='mr-1' />
          Tiny
        </Badge>
        <Badge variant='warning'>
          <AlertTriangle size={12} className='mr-1' />
          Default
        </Badge>
        <Badge variant='info' className='text-sm px-3 py-1'>
          <Info size={14} className='mr-1' />
          Large
        </Badge>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different badge sizes for various use cases.',
      },
    },
  },
}

// Interactive badges
export const InteractiveBadges: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='flex flex-wrap gap-2'>
        <Badge
          variant='outline'
          className='cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors'
          onClick={() => console.log('Filter clicked')}
        >
          Technology
          <X size={12} className='ml-1' />
        </Badge>
        <Badge
          variant='outline'
          className='cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors'
          onClick={() => console.log('Filter clicked')}
        >
          Design
          <X size={12} className='ml-1' />
        </Badge>
        <Badge
          variant='outline'
          className='cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors'
          onClick={() => console.log('Filter clicked')}
        >
          Marketing
          <X size={12} className='ml-1' />
        </Badge>
      </div>

      <div className='flex flex-wrap gap-2'>
        <Badge
          variant='secondary'
          className='cursor-pointer hover:bg-secondary/80 transition-colors'
          onClick={() => console.log('Tag clicked')}
        >
          Clickable Tag
        </Badge>
        <Badge
          variant='info'
          className='cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-900/40 transition-colors'
          onClick={() => console.log('Info clicked')}
        >
          Interactive Info
        </Badge>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Interactive badges that can be clicked or dismissed.',
      },
    },
  },
}

// Usage in context
export const UsageContext: Story = {
  render: () => (
    <div className='space-y-6 max-w-2xl'>
      {/* User profile card */}
      <div className='p-4 border rounded-lg'>
        <div className='flex items-center justify-between mb-2'>
          <h3 className='font-semibold'>John Doe</h3>
          <div className='flex gap-1'>
            <Badge variant='success'>
              <Check size={12} className='mr-1' />
              Verified
            </Badge>
            <Badge variant='default'>Pro</Badge>
          </div>
        </div>
        <p className='text-sm text-muted-foreground mb-3'>
          Senior Frontend Developer at Tech Corp
        </p>
        <div className='flex flex-wrap gap-1'>
          <Badge variant='outline'>React</Badge>
          <Badge variant='outline'>TypeScript</Badge>
          <Badge variant='outline'>Next.js</Badge>
          <Badge variant='outline'>Node.js</Badge>
        </div>
      </div>

      {/* Project card */}
      <div className='p-4 border rounded-lg'>
        <div className='flex items-center justify-between mb-2'>
          <h3 className='font-semibold'>Design System Project</h3>
          <Badge variant='info'>
            <Users size={12} className='mr-1' />
            Team Project
          </Badge>
        </div>
        <p className='text-sm text-muted-foreground mb-3'>
          Building a comprehensive design system for the company
        </p>
        <div className='flex items-center justify-between'>
          <div className='flex gap-1'>
            <Badge variant='success'>Active</Badge>
            <Badge variant='warning'>
              <Clock size={12} className='mr-1' />
              Due Soon
            </Badge>
          </div>
          <Badge variant='outline'>
            <Calendar size={12} className='mr-1' />3 days left
          </Badge>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Examples of badges used in real UI contexts like profiles and project cards.',
      },
    },
  },
}

// Interactive playground
export const Interactive: Story = {
  args: {
    variant: 'default',
    children: 'Interactive Badge',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Interactive playground to test different badge configurations. Use the controls to experiment with variants and content.',
      },
    },
  },
}
