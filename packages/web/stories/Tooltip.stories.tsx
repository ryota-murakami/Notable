import type { Meta, StoryObj } from '@storybook/nextjs'
import {
  ErrorTooltip,
  InfoTooltip,
  SuccessTooltip,
  Tooltip,
  TooltipProvider,
  WarningTooltip,
} from '../design-system/components/tooltip'
import { Button } from '../design-system/components/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../design-system/components/card'
import { Badge } from '../design-system/components/badge'
import { useState } from 'react'
import {
  AlertTriangle,
  Calendar,
  CheckCircle,
  Clock,
  Copy,
  Download,
  Edit,
  Eye,
  FileText,
  Heart,
  HelpCircle,
  Info,
  Plus,
  Settings,
  Share,
  Star,
  Users,
  X,
  Zap,
} from 'lucide-react'

const meta: Meta<typeof Tooltip> = {
  title: 'Notable Design System/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Flexible tooltip component with multiple placements, triggers, variants, and animations. Perfect for providing contextual help and information in Notable.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: [
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'left-start',
        'left-end',
        'right',
        'right-start',
        'right-end',
      ],
      description: 'Position of the tooltip relative to trigger',
    },
    trigger: {
      control: 'select',
      options: ['hover', 'click', 'focus', 'manual'],
      description: 'How the tooltip is triggered',
    },
    variant: {
      control: 'select',
      options: [
        'default',
        'dark',
        'light',
        'success',
        'warning',
        'error',
        'info',
      ],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the tooltip',
    },
    arrow: {
      control: 'boolean',
      description: 'Show arrow pointing to trigger',
    },
    delay: {
      control: 'number',
      description: 'Delay before showing tooltip (ms)',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Basic Tooltip Stories
export const Default: Story = {
  args: {
    content: 'This is a helpful tooltip',
    children: <Button>Hover me</Button>,
  },
}

export const WithArrow: Story = {
  args: {
    content: 'Tooltip with arrow pointing to the button',
    arrow: true,
    children: <Button>Hover for tooltip</Button>,
  },
}

export const LongContent: Story = {
  args: {
    content:
      'This is a longer tooltip with more detailed information that demonstrates how the tooltip handles multi-line content and text wrapping.',
    maxWidth: 200,
    children: <Button>Long tooltip</Button>,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip with longer text content that wraps to multiple lines',
      },
    },
  },
}

// Placement Variations
export const Placements: Story = {
  render: () => (
    <div className='grid grid-cols-3 gap-8 p-8'>
      {/* Top row */}
      <Tooltip content='Top start' placement='top-start'>
        <Button variant='outline' size='sm'>
          Top Start
        </Button>
      </Tooltip>
      <Tooltip content='Top center' placement='top'>
        <Button variant='outline' size='sm'>
          Top
        </Button>
      </Tooltip>
      <Tooltip content='Top end' placement='top-end'>
        <Button variant='outline' size='sm'>
          Top End
        </Button>
      </Tooltip>

      {/* Middle row */}
      <Tooltip content='Left start' placement='left-start'>
        <Button variant='outline' size='sm'>
          Left Start
        </Button>
      </Tooltip>
      <div className='flex justify-center'>
        <Button variant='ghost' disabled>
          Center
        </Button>
      </div>
      <Tooltip content='Right start' placement='right-start'>
        <Button variant='outline' size='sm'>
          Right Start
        </Button>
      </Tooltip>

      <Tooltip content='Left center' placement='left'>
        <Button variant='outline' size='sm'>
          Left
        </Button>
      </Tooltip>
      <div />
      <Tooltip content='Right center' placement='right'>
        <Button variant='outline' size='sm'>
          Right
        </Button>
      </Tooltip>

      <Tooltip content='Left end' placement='left-end'>
        <Button variant='outline' size='sm'>
          Left End
        </Button>
      </Tooltip>
      <div />
      <Tooltip content='Right end' placement='right-end'>
        <Button variant='outline' size='sm'>
          Right End
        </Button>
      </Tooltip>

      {/* Bottom row */}
      <Tooltip content='Bottom start' placement='bottom-start'>
        <Button variant='outline' size='sm'>
          Bottom Start
        </Button>
      </Tooltip>
      <Tooltip content='Bottom center' placement='bottom'>
        <Button variant='outline' size='sm'>
          Bottom
        </Button>
      </Tooltip>
      <Tooltip content='Bottom end' placement='bottom-end'>
        <Button variant='outline' size='sm'>
          Bottom End
        </Button>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available tooltip placements around trigger elements',
      },
    },
  },
}

// Trigger Types
export const TriggerTypes: Story = {
  render: () => (
    <div className='flex gap-4'>
      <Tooltip content='Shows on hover' trigger='hover'>
        <Button variant='outline'>Hover</Button>
      </Tooltip>
      <Tooltip content='Shows on click' trigger='click'>
        <Button variant='outline'>Click</Button>
      </Tooltip>
      <Tooltip content='Shows on focus' trigger='focus'>
        <Button variant='outline'>Focus</Button>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different ways to trigger tooltip visibility',
      },
    },
  },
}

// Variants
export const Variants: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <Tooltip content='Default tooltip' variant='default'>
        <Button variant='outline'>Default</Button>
      </Tooltip>
      <Tooltip content='Dark tooltip' variant='dark'>
        <Button variant='outline'>Dark</Button>
      </Tooltip>
      <Tooltip content='Light tooltip' variant='light'>
        <Button variant='outline'>Light</Button>
      </Tooltip>
      <InfoTooltip content='Information tooltip'>
        <Button variant='outline'>Info</Button>
      </InfoTooltip>
      <SuccessTooltip content='Success tooltip'>
        <Button variant='outline'>Success</Button>
      </SuccessTooltip>
      <WarningTooltip content='Warning tooltip'>
        <Button variant='outline'>Warning</Button>
      </WarningTooltip>
      <ErrorTooltip content='Error tooltip'>
        <Button variant='outline'>Error</Button>
      </ErrorTooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different tooltip variants with semantic colors',
      },
    },
  },
}

// Sizes
export const Sizes: Story = {
  render: () => (
    <div className='flex gap-4'>
      <Tooltip content='Small tooltip' size='sm'>
        <Button variant='outline'>Small</Button>
      </Tooltip>
      <Tooltip content='Medium tooltip' size='md'>
        <Button variant='outline'>Medium</Button>
      </Tooltip>
      <Tooltip content='Large tooltip with more content' size='lg'>
        <Button variant='outline'>Large</Button>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different tooltip sizes for various content lengths',
      },
    },
  },
}

// Interactive Examples
export const IconTooltips: Story = {
  render: () => (
    <div className='flex gap-2'>
      <Tooltip content='Get help and support'>
        <Button variant='ghost' size='icon'>
          <HelpCircle className='h-4 w-4' />
        </Button>
      </Tooltip>
      <InfoTooltip content='Additional information about this feature'>
        <Button variant='ghost' size='icon'>
          <Info className='h-4 w-4' />
        </Button>
      </InfoTooltip>
      <WarningTooltip content='This action requires caution'>
        <Button variant='ghost' size='icon'>
          <AlertTriangle className='h-4 w-4' />
        </Button>
      </WarningTooltip>
      <SuccessTooltip content='Operation completed successfully'>
        <Button variant='ghost' size='icon'>
          <CheckCircle className='h-4 w-4' />
        </Button>
      </SuccessTooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icon buttons with contextual tooltips',
      },
    },
  },
}

export const StatusTooltips: Story = {
  render: () => (
    <div className='flex flex-wrap gap-2'>
      <Tooltip content='Your note is being synchronized across all devices'>
        <Badge variant='secondary'>
          <Clock className='mr-1 h-3 w-3' />
          Syncing
        </Badge>
      </Tooltip>
      <SuccessTooltip content='Note saved successfully at 2:34 PM'>
        <Badge variant='secondary'>
          <CheckCircle className='mr-1 h-3 w-3' />
          Saved
        </Badge>
      </SuccessTooltip>
      <ErrorTooltip content='Failed to save. Check your internet connection.'>
        <Badge variant='destructive'>
          <X className='mr-1 h-3 w-3' />
          Error
        </Badge>
      </ErrorTooltip>
      <WarningTooltip content="Changes haven't been saved for 5 minutes">
        <Badge variant='outline'>
          <AlertTriangle className='mr-1 h-3 w-3' />
          Unsaved
        </Badge>
      </WarningTooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Status badges with explanatory tooltips',
      },
    },
  },
}

// Notable App Examples
export const NotableToolbar: Story = {
  render: () => (
    <Card className='w-fit'>
      <CardContent className='p-3'>
        <div className='flex gap-1'>
          <Tooltip content='Create new note' placement='bottom'>
            <Button variant='ghost' size='icon'>
              <Plus className='h-4 w-4' />
            </Button>
          </Tooltip>
          <Tooltip content='Share this note with others' placement='bottom'>
            <Button variant='ghost' size='icon'>
              <Share className='h-4 w-4' />
            </Button>
          </Tooltip>
          <Tooltip content='Add to favorites' placement='bottom'>
            <Button variant='ghost' size='icon'>
              <Star className='h-4 w-4' />
            </Button>
          </Tooltip>
          <Tooltip content='Like this note' placement='bottom'>
            <Button variant='ghost' size='icon'>
              <Heart className='h-4 w-4' />
            </Button>
          </Tooltip>
          <Tooltip content='View note activity' placement='bottom'>
            <Button variant='ghost' size='icon'>
              <Eye className='h-4 w-4' />
            </Button>
          </Tooltip>
          <div className='border-l mx-1' />
          <Tooltip content='Download note as PDF' placement='bottom'>
            <Button variant='ghost' size='icon'>
              <Download className='h-4 w-4' />
            </Button>
          </Tooltip>
          <Tooltip content='Copy note link' placement='bottom'>
            <Button variant='ghost' size='icon'>
              <Copy className='h-4 w-4' />
            </Button>
          </Tooltip>
          <Tooltip content='Edit note settings' placement='bottom'>
            <Button variant='ghost' size='icon'>
              <Settings className='h-4 w-4' />
            </Button>
          </Tooltip>
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Notable app toolbar with tooltips for all action buttons',
      },
    },
  },
}

export const NotableNoteCard: Story = {
  render: () => (
    <Card className='w-80'>
      <CardHeader className='pb-3'>
        <div className='flex items-start justify-between'>
          <div className='flex-1'>
            <CardTitle className='text-lg'>
              Meeting Notes - Q4 Planning
            </CardTitle>
            <CardDescription className='flex items-center gap-2 text-xs mt-1'>
              <Tooltip content='Created on December 15, 2023 at 2:30 PM'>
                <span className='flex items-center gap-1 cursor-help'>
                  <Calendar className='h-3 w-3' />
                  Dec 15, 2023
                </span>
              </Tooltip>
              <Tooltip content='Last modified 2 hours ago'>
                <span className='flex items-center gap-1 cursor-help'>
                  <Clock className='h-3 w-3' />
                  2:30 PM
                </span>
              </Tooltip>
            </CardDescription>
          </div>
          <div className='flex gap-1'>
            <Tooltip content='Edit note'>
              <Button variant='ghost' size='icon' className='h-8 w-8'>
                <Edit className='h-4 w-4' />
              </Button>
            </Tooltip>
            <Tooltip content='More options'>
              <Button variant='ghost' size='icon' className='h-8 w-8'>
                <Settings className='h-4 w-4' />
              </Button>
            </Tooltip>
          </div>
        </div>
      </CardHeader>
      <CardContent className='pt-0'>
        <p className='text-sm text-muted-foreground line-clamp-3 mb-3'>
          Discussed upcoming quarterly goals, budget allocation for new
          projects, and team restructuring. Key decisions made about the product
          roadmap...
        </p>
        <div className='flex flex-wrap gap-1 mb-3'>
          <Tooltip content='Click to filter by this tag'>
            <Badge variant='secondary' className='text-xs cursor-pointer'>
              meeting
            </Badge>
          </Tooltip>
          <Tooltip content='Click to filter by this tag'>
            <Badge variant='secondary' className='text-xs cursor-pointer'>
              planning
            </Badge>
          </Tooltip>
          <Tooltip content='Click to filter by this tag'>
            <Badge variant='secondary' className='text-xs cursor-pointer'>
              q4
            </Badge>
          </Tooltip>
        </div>
        <div className='flex items-center justify-between text-xs text-muted-foreground'>
          <Tooltip content='This note contains 1,247 words'>
            <div className='flex items-center gap-1'>
              <FileText className='h-3 w-3' />
              1,247 words
            </div>
          </Tooltip>
          <Tooltip content='3 people have starred this note'>
            <div className='flex items-center gap-1'>
              <Star className='h-3 w-3' />3 stars
            </div>
          </Tooltip>
          <Tooltip content='Shared with 5 team members'>
            <div className='flex items-center gap-1'>
              <Users className='h-3 w-3' />5 collaborators
            </div>
          </Tooltip>
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Note card with tooltips providing additional context for metadata',
      },
    },
  },
}

export const NotableAIAssistant: Story = {
  render: () => {
    const [suggestions] = useState([
      {
        id: 1,
        type: 'grammar',
        text: 'Consider changing "their" to "there"',
        confidence: 95,
      },
      {
        id: 2,
        type: 'style',
        text: 'This sentence could be shorter',
        confidence: 78,
      },
      {
        id: 3,
        type: 'enhancement',
        text: 'Add examples to support this point',
        confidence: 85,
      },
    ])

    return (
      <Card className='w-96'>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Zap className='h-5 w-5' />
            AI Writing Assistant
          </CardTitle>
          <CardDescription>Suggestions to improve your writing</CardDescription>
        </CardHeader>
        <CardContent className='space-y-3'>
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              className='flex items-start gap-3 p-3 border rounded-lg'
            >
              <div className='flex-1'>
                <p className='text-sm'>{suggestion.text}</p>
                <div className='flex items-center gap-2 mt-1'>
                  <Badge
                    variant={
                      suggestion.type === 'grammar'
                        ? 'destructive'
                        : suggestion.type === 'style'
                          ? 'secondary'
                          : 'default'
                    }
                    className='text-xs'
                  >
                    {suggestion.type}
                  </Badge>
                  <Tooltip
                    content={`AI confidence level: ${suggestion.confidence}%`}
                  >
                    <span className='text-xs text-muted-foreground cursor-help'>
                      {suggestion.confidence}% confident
                    </span>
                  </Tooltip>
                </div>
              </div>
              <div className='flex gap-1'>
                <Tooltip content='Apply this suggestion'>
                  <Button variant='ghost' size='icon' className='h-8 w-8'>
                    <CheckCircle className='h-4 w-4' />
                  </Button>
                </Tooltip>
                <Tooltip content='Dismiss this suggestion'>
                  <Button variant='ghost' size='icon' className='h-8 w-8'>
                    <X className='h-4 w-4' />
                  </Button>
                </Tooltip>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'AI assistant panel with tooltips explaining confidence levels and actions',
      },
    },
  },
}

// Advanced Examples
export const TooltipWithProvider: Story = {
  render: () => (
    <TooltipProvider delay={100} hideDelay={50}>
      <div className='space-y-4'>
        <p className='text-sm text-muted-foreground'>
          All tooltips below use the provider's global settings (100ms delay)
        </p>
        <div className='flex gap-4'>
          <Tooltip content='Fast tooltip with global settings'>
            <Button variant='outline'>Global Settings</Button>
          </Tooltip>
          <Tooltip content='This also uses global delay' delay={500}>
            <Button variant='outline'>Override Delay</Button>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'TooltipProvider for managing global tooltip behavior and settings',
      },
    },
  },
}

export const ComplexTooltipContent: Story = {
  render: () => (
    <div className='flex gap-4'>
      <Tooltip
        content={
          <div className='space-y-2'>
            <div className='font-semibold'>Premium Feature</div>
            <div className='text-sm'>
              AI-powered writing assistance includes:
            </div>
            <ul className='text-sm space-y-1 pl-2'>
              <li>• Grammar checking</li>
              <li>• Style suggestions</li>
              <li>• Content enhancement</li>
            </ul>
            <div className='text-xs text-muted-foreground pt-1 border-t'>
              Upgrade to unlock this feature
            </div>
          </div>
        }
        maxWidth={250}
        variant='dark'
      >
        <Button>
          <Zap className='mr-2 h-4 w-4' />
          AI Assistant
        </Button>
      </Tooltip>

      <Tooltip
        content={
          <div className='space-y-2'>
            <div className='flex items-center gap-2'>
              <CheckCircle className='h-4 w-4 text-green-500' />
              <span className='font-semibold'>All Systems Operational</span>
            </div>
            <div className='text-sm space-y-1'>
              <div>• Sync Service: ✅ Online</div>
              <div>• AI Assistant: ✅ Online</div>
              <div>• Export Service: ✅ Online</div>
            </div>
            <div className='text-xs text-muted-foreground pt-1 border-t'>
              Last updated: 2 minutes ago
            </div>
          </div>
        }
        placement='top'
        variant='success'
      >
        <Badge variant='secondary' className='cursor-help'>
          <CheckCircle className='mr-1 h-3 w-3' />
          System Status
        </Badge>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Tooltips with complex content including lists, icons, and structured information',
      },
    },
  },
}

export const FormFieldTooltips: Story = {
  render: () => (
    <Card className='w-96'>
      <CardHeader>
        <CardTitle>Account Settings</CardTitle>
        <CardDescription>Update your account information</CardDescription>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='space-y-2'>
          <div className='flex items-center gap-2'>
            <label className='text-sm font-medium'>Display Name</label>
            <InfoTooltip content='This is how your name appears to other users'>
              <HelpCircle className='h-4 w-4 text-muted-foreground cursor-help' />
            </InfoTooltip>
          </div>
          <input
            type='text'
            placeholder='Enter your display name'
            className='w-full px-3 py-2 border border-input rounded-md'
          />
        </div>

        <div className='space-y-2'>
          <div className='flex items-center gap-2'>
            <label className='text-sm font-medium'>Email Notifications</label>
            <Tooltip
              content={
                <div className='space-y-1'>
                  <div className='font-medium'>Notification Types:</div>
                  <div className='text-sm'>• New comments on your notes</div>
                  <div className='text-sm'>• Weekly activity summary</div>
                  <div className='text-sm'>• Product updates</div>
                </div>
              }
              maxWidth={200}
            >
              <HelpCircle className='h-4 w-4 text-muted-foreground cursor-help' />
            </Tooltip>
          </div>
          <select className='w-full px-3 py-2 border border-input rounded-md'>
            <option>All notifications</option>
            <option>Important only</option>
            <option>None</option>
          </select>
        </div>

        <div className='space-y-2'>
          <div className='flex items-center gap-2'>
            <label className='text-sm font-medium'>Privacy Level</label>
            <WarningTooltip content='Changing privacy settings affects all your existing notes'>
              <AlertTriangle className='h-4 w-4 text-warning cursor-help' />
            </WarningTooltip>
          </div>
          <select className='w-full px-3 py-2 border border-input rounded-md'>
            <option>Private</option>
            <option>Team only</option>
            <option>Public</option>
          </select>
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Form fields with help tooltips providing contextual information',
      },
    },
  },
}
