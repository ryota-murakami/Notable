import type { Meta, StoryObj } from '@storybook/nextjs'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../design-system/components/card'
import { Badge } from '../design-system/components/badge'
import { Button } from '../design-system/components/button'
import {
  Calendar,
  Clock,
  FileText,
  MoreHorizontal,
  Star,
  Tag,
  User,
} from 'lucide-react'

const meta: Meta<typeof Card> = {
  title: 'Notable Design System/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Flexible container component for displaying content in Notable. Used for notes, settings panels, feature cards, and more.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// Basic Card Stories
export const Default: Story = {
  render: () => (
    <Card className='w-80'>
      <CardHeader>
        <CardTitle>Simple Card</CardTitle>
        <CardDescription>This is a basic card example</CardDescription>
      </CardHeader>
      <CardContent>
        <p className='text-sm text-gray-600'>
          This is the card content area where you can put any content.
        </p>
      </CardContent>
    </Card>
  ),
}

export const WithFooter: Story = {
  render: () => (
    <Card className='w-80'>
      <CardHeader>
        <CardTitle>Card with Footer</CardTitle>
        <CardDescription>Example with footer actions</CardDescription>
      </CardHeader>
      <CardContent>
        <p className='text-sm text-gray-600'>
          This card includes a footer with action buttons.
        </p>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Button variant='outline'>Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  ),
}

// Notable App Examples
export const NoteCard: Story = {
  render: () => (
    <Card className='w-96 hover:shadow-md transition-shadow cursor-pointer'>
      <CardHeader className='pb-3'>
        <div className='flex items-start justify-between'>
          <div className='flex-1'>
            <CardTitle className='text-lg mb-1'>
              Meeting Notes - Q4 Planning
            </CardTitle>
            <CardDescription className='flex items-center gap-2 text-xs'>
              <Calendar className='h-3 w-3' />
              Dec 15, 2023
              <Clock className='h-3 w-3 ml-2' />
              2:30 PM
            </CardDescription>
          </div>
          <Button variant='ghost' size='icon' className='h-8 w-8'>
            <MoreHorizontal className='h-4 w-4' />
          </Button>
        </div>
      </CardHeader>
      <CardContent className='pt-0'>
        <p className='text-sm text-gray-600 line-clamp-3 mb-3'>
          Discussed upcoming quarterly goals, budget allocation for new
          projects, and team restructuring. Key decisions made about the product
          roadmap...
        </p>
        <div className='flex flex-wrap gap-1'>
          <Badge variant='secondary' className='text-xs'>
            meeting
          </Badge>
          <Badge variant='secondary' className='text-xs'>
            planning
          </Badge>
          <Badge variant='secondary' className='text-xs'>
            q4
          </Badge>
        </div>
      </CardContent>
      <CardFooter className='pt-3 border-t'>
        <div className='flex items-center justify-between w-full text-xs text-gray-500'>
          <div className='flex items-center gap-1'>
            <FileText className='h-3 w-3' />
            1,247 words
          </div>
          <div className='flex items-center gap-1'>
            <Star className='h-3 w-3' />
            Favorited
          </div>
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Note card as displayed in Notable's note grid/list view",
      },
    },
  },
}

export const PremiumFeatureCard: Story = {
  render: () => (
    <Card className='w-80 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50'>
      <CardHeader>
        <div className='flex items-center justify-between'>
          <CardTitle className='flex items-center gap-2'>
            <Star className='h-5 w-5 text-purple-600' />
            AI Assistant
          </CardTitle>
          <Badge className='bg-gradient-to-r from-purple-500 to-pink-500'>
            Premium
          </Badge>
        </div>
        <CardDescription>
          Get intelligent writing suggestions and content enhancement
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className='space-y-2 text-sm text-gray-600'>
          <li className='flex items-center gap-2'>
            <div className='h-1.5 w-1.5 bg-purple-500 rounded-full' />
            Smart content suggestions
          </li>
          <li className='flex items-center gap-2'>
            <div className='h-1.5 w-1.5 bg-purple-500 rounded-full' />
            Grammar and style improvements
          </li>
          <li className='flex items-center gap-2'>
            <div className='h-1.5 w-1.5 bg-purple-500 rounded-full' />
            Auto-organize and tag notes
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button className='w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'>
          Upgrade to Premium
        </Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Premium feature card with gradient styling',
      },
    },
  },
}

export const SettingsCard: Story = {
  render: () => (
    <Card className='w-96'>
      <CardHeader>
        <CardTitle>Account Settings</CardTitle>
        <CardDescription>Manage your account preferences</CardDescription>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='flex items-center justify-between'>
          <div>
            <p className='font-medium'>Email Notifications</p>
            <p className='text-sm text-gray-600'>
              Get notified about important updates
            </p>
          </div>
          <div className='relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200'>
            <span className='translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition' />
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <div>
            <p className='font-medium'>Dark Mode</p>
            <p className='text-sm text-gray-600'>Toggle dark mode appearance</p>
          </div>
          <div className='relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600'>
            <span className='translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition' />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className='w-full'>Save Changes</Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Settings card with toggle controls',
      },
    },
  },
}

export const UserProfileCard: Story = {
  render: () => (
    <Card className='w-80'>
      <CardContent className='pt-6'>
        <div className='flex items-center space-x-4'>
          <div className='h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center'>
            <User className='h-6 w-6 text-white' />
          </div>
          <div className='flex-1'>
            <h3 className='font-semibold'>Sarah Chen</h3>
            <p className='text-sm text-gray-600'>Premium Member</p>
          </div>
        </div>
        <div className='mt-4 grid grid-cols-3 gap-4 text-center'>
          <div>
            <p className='font-semibold text-lg'>127</p>
            <p className='text-xs text-gray-600'>Notes</p>
          </div>
          <div>
            <p className='font-semibold text-lg'>23</p>
            <p className='text-xs text-gray-600'>Tags</p>
          </div>
          <div>
            <p className='font-semibold text-lg'>8</p>
            <p className='text-xs text-gray-600'>Folders</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant='outline' className='w-full'>
          View Profile
        </Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'User profile card with stats',
      },
    },
  },
}

export const EmptyState: Story = {
  render: () => (
    <Card className='w-96 text-center py-8'>
      <CardContent>
        <div className='mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4'>
          <FileText className='h-8 w-8 text-gray-400' />
        </div>
        <CardTitle className='mb-2'>No Notes Yet</CardTitle>
        <CardDescription className='mb-4'>
          Create your first note to get started organizing your thoughts
        </CardDescription>
        <Button>
          <FileText className='mr-2 h-4 w-4' />
          Create Note
        </Button>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Empty state card for when no content exists',
      },
    },
  },
}

// Card Variations
export const CompactCard: Story = {
  render: () => (
    <Card className='w-64'>
      <CardContent className='p-4'>
        <div className='flex items-center gap-3'>
          <div className='h-10 w-10 bg-blue-100 rounded flex items-center justify-center'>
            <Tag className='h-5 w-5 text-blue-600' />
          </div>
          <div className='flex-1'>
            <p className='font-medium'>Quick Notes</p>
            <p className='text-sm text-gray-600'>47 notes</p>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Compact card for sidebar or dashboard widgets',
      },
    },
  },
}

export const InteractiveCard: Story = {
  render: () => (
    <Card className='w-80 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer border hover:border-blue-300'>
      <CardHeader>
        <CardTitle>Interactive Card</CardTitle>
        <CardDescription>Hover to see the effect</CardDescription>
      </CardHeader>
      <CardContent>
        <p className='text-sm text-gray-600'>
          This card has hover animations and interactive states.
        </p>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Card with hover animations and interactive states',
      },
    },
  },
}
