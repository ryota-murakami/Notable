import type { Meta, StoryObj } from '@storybook/nextjs'
import { TagCloud, TagCloudWithAnalytics } from './tag-cloud'
import type { EnhancedTag } from '@/types/tags'

// Mock tags for testing
const mockTags: EnhancedTag[] = [
  {
    id: '1',
    user_id: 'user-123',
    name: 'JavaScript',
    color: '#f7df1e',
    description: 'Programming language for web development',
    usage_count: 45,
    parent_id: null,
    path: 'JavaScript',
    level: 0,
    children: [],
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-15T00:00:00Z',
    last_used_at: '2024-01-15T00:00:00Z',
  },
  {
    id: '2',
    user_id: 'user-123',
    name: 'React',
    color: '#61dafb',
    description: 'Frontend library for building user interfaces',
    usage_count: 38,
    parent_id: '1',
    path: 'JavaScript/React',
    level: 1,
    children: [],
    created_at: '2024-01-02T00:00:00Z',
    updated_at: '2024-01-14T00:00:00Z',
    last_used_at: '2024-01-14T00:00:00Z',
  },
  {
    id: '3',
    user_id: 'user-123',
    name: 'TypeScript',
    color: '#3178c6',
    description: 'Typed superset of JavaScript',
    usage_count: 32,
    parent_id: '1',
    path: 'JavaScript/TypeScript',
    level: 1,
    children: [],
    created_at: '2024-01-03T00:00:00Z',
    updated_at: '2024-01-13T00:00:00Z',
    last_used_at: '2024-01-13T00:00:00Z',
  },
  {
    id: '4',
    user_id: 'user-123',
    name: 'Design',
    color: '#ff6b6b',
    description: 'User interface and user experience design',
    usage_count: 28,
    parent_id: null,
    path: 'Design',
    level: 0,
    children: [],
    created_at: '2024-01-04T00:00:00Z',
    updated_at: '2024-01-12T00:00:00Z',
    last_used_at: '2024-01-12T00:00:00Z',
  },
  {
    id: '5',
    user_id: 'user-123',
    name: 'Project Management',
    color: '#4ecdc4',
    description: 'Planning and organizing projects',
    usage_count: 22,
    parent_id: null,
    path: 'Project Management',
    level: 0,
    children: [],
    created_at: '2024-01-05T00:00:00Z',
    updated_at: '2024-01-11T00:00:00Z',
    last_used_at: '2024-01-11T00:00:00Z',
  },
  {
    id: '6',
    user_id: 'user-123',
    name: 'CSS',
    color: '#1572b6',
    description: 'Styling and layout for web pages',
    usage_count: 19,
    parent_id: null,
    path: 'CSS',
    level: 0,
    children: [],
    created_at: '2024-01-06T00:00:00Z',
    updated_at: '2024-01-10T00:00:00Z',
    last_used_at: '2024-01-10T00:00:00Z',
  },
  {
    id: '7',
    user_id: 'user-123',
    name: 'Node.js',
    color: '#339933',
    description: 'JavaScript runtime for server-side development',
    usage_count: 15,
    parent_id: '1',
    path: 'JavaScript/Node.js',
    level: 1,
    children: [],
    created_at: '2024-01-07T00:00:00Z',
    updated_at: '2024-01-09T00:00:00Z',
    last_used_at: '2024-01-09T00:00:00Z',
  },
  {
    id: '8',
    user_id: 'user-123',
    name: 'Documentation',
    color: '#6c5ce7',
    description: 'Writing and maintaining project documentation',
    usage_count: 12,
    parent_id: null,
    path: 'Documentation',
    level: 0,
    children: [],
    created_at: '2024-01-08T00:00:00Z',
    updated_at: '2024-01-08T00:00:00Z',
    last_used_at: '2024-01-08T00:00:00Z',
  },
  {
    id: '9',
    user_id: 'user-123',
    name: 'Testing',
    color: '#e17055',
    description: 'Quality assurance and test automation',
    usage_count: 10,
    parent_id: null,
    path: 'Testing',
    level: 0,
    children: [],
    created_at: '2024-01-09T00:00:00Z',
    updated_at: '2024-01-07T00:00:00Z',
    last_used_at: '2024-01-07T00:00:00Z',
  },
  {
    id: '10',
    user_id: 'user-123',
    name: 'Performance',
    color: '#00b894',
    description: 'Optimizing application performance',
    usage_count: 8,
    parent_id: null,
    path: 'Performance',
    level: 0,
    children: [],
    created_at: '2024-01-10T00:00:00Z',
    updated_at: '2024-01-06T00:00:00Z',
    last_used_at: '2024-01-06T00:00:00Z',
  },
]

const meta: Meta<typeof TagCloud> = {
  title: 'Components/TagCloud',
  component: TagCloud,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
A flexible tag cloud component for visualizing and interacting with tags. Supports multiple layouts, sizes, and interactive features.

## Features
- Multiple layout options (cloud, list, grid)
- Responsive sizing based on usage frequency
- Interactive hover and click handlers  
- Trending indicators for recently used tags
- Customizable appearance and behavior
- Built-in analytics variant
        `,
      },
    },
  },
  argTypes: {
    layout: {
      control: 'select',
      options: ['cloud', 'list', 'grid'],
      description: 'Visual layout of the tags',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Overall size of the tag cloud',
    },
    maxTags: {
      control: { type: 'number', min: 1, max: 100 },
      description: 'Maximum number of tags to display',
    },
    minUsage: {
      control: { type: 'number', min: 0, max: 10 },
      description: 'Minimum usage count to display a tag',
    },
    showCounts: {
      control: 'boolean',
      description: 'Show usage counts on tags',
    },
    showTrending: {
      control: 'boolean',
      description: 'Show trending indicators',
    },
    interactive: {
      control: 'boolean',
      description: 'Enable click and hover interactions',
    },
    showEmpty: {
      control: 'boolean',
      description: 'Show empty state when no tags',
    },
  },
}

export default meta
type Story = StoryObj<typeof TagCloud>

// Basic Stories
export const Default: Story = {
  args: {
    tags: mockTags,
    maxTags: 20,
    showCounts: true,
    showTrending: true,
    interactive: true,
  },
}

export const CloudLayout: Story = {
  args: {
    tags: mockTags,
    layout: 'cloud',
    size: 'md',
    maxTags: 15,
    showCounts: true,
    showTrending: true,
  },
}

export const ListLayout: Story = {
  args: {
    tags: mockTags,
    layout: 'list',
    size: 'md',
    maxTags: 10,
    showCounts: true,
    showTrending: false,
  },
}

export const GridLayout: Story = {
  args: {
    tags: mockTags,
    layout: 'grid',
    size: 'sm',
    maxTags: 12,
    showCounts: true,
    showTrending: true,
  },
}

// Size Variants
export const SmallSize: Story = {
  args: {
    tags: mockTags,
    layout: 'cloud',
    size: 'sm',
    maxTags: 15,
    showCounts: false,
    showTrending: false,
  },
}

export const LargeSize: Story = {
  args: {
    tags: mockTags,
    layout: 'cloud',
    size: 'lg',
    maxTags: 8,
    showCounts: true,
    showTrending: true,
  },
}

// Interactive Features
export const WithSelectedTags: Story = {
  args: {
    tags: mockTags,
    layout: 'cloud',
    selectedTags: ['JavaScript', 'React', 'Design'],
    showCounts: true,
    showTrending: true,
    interactive: true,
  },
}

export const NonInteractive: Story = {
  args: {
    tags: mockTags,
    layout: 'cloud',
    interactive: false,
    showCounts: true,
    showTrending: false,
  },
}

// Filtered Views
export const HighUsageOnly: Story = {
  args: {
    tags: mockTags,
    layout: 'cloud',
    minUsage: 20,
    maxTags: 20,
    showCounts: true,
    showTrending: true,
  },
}

export const TopTags: Story = {
  args: {
    tags: mockTags,
    layout: 'grid',
    maxTags: 6,
    minUsage: 15,
    showCounts: true,
    showTrending: true,
  },
}

// Empty States
export const EmptyState: Story = {
  args: {
    tags: [],
    layout: 'cloud',
    showEmpty: true,
    showCounts: true,
  },
}

export const NoVisibleTags: Story = {
  args: {
    tags: mockTags,
    layout: 'cloud',
    minUsage: 100, // Higher than any tag usage
    showEmpty: true,
  },
}

// Interactive Examples
export const WithClickHandler: Story = {
  args: {
    tags: mockTags,
    layout: 'cloud',
    interactive: true,
    showCounts: true,
    onTagClick: (tag) => {
      console.log(`Clicked on tag: ${tag.name} (used ${tag.usage_count} times)`)
    },
  },
}

export const WithHoverHandler: Story = {
  args: {
    tags: mockTags,
    layout: 'cloud',
    interactive: true,
    showCounts: true,
    onTagHover: (tag) => {
      if (tag) {
        console.log(`Hovering over: ${tag.name}`)
      }
    },
  },
}

// Analytics Variant Stories
const AnalyticsMeta: Meta<typeof TagCloudWithAnalytics> = {
  title: 'Components/TagCloudWithAnalytics',
  component: TagCloudWithAnalytics,
  parameters: {
    layout: 'padded',
  },
}

export const WithAnalytics: StoryObj<typeof TagCloudWithAnalytics> = {
  render: (args) => <TagCloudWithAnalytics {...args} />,
  args: {
    showAnalytics: true,
    layout: 'cloud',
    size: 'md',
    maxTags: 20,
    showCounts: true,
    showTrending: true,
    trendingPeriod: 'week',
  },
}

export const AnalyticsOnly: StoryObj<typeof TagCloudWithAnalytics> = {
  render: (args) => <TagCloudWithAnalytics {...args} />,
  args: {
    showAnalytics: true,
    layout: 'cloud',
    size: 'md',
    maxTags: 0, // Hide the cloud, show only analytics
    trendingPeriod: 'month',
  },
}

// Responsive Examples
export const ResponsiveGrid: Story = {
  args: {
    tags: mockTags,
    layout: 'grid',
    size: 'md',
    maxTags: 16,
    showCounts: true,
    showTrending: true,
  },
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
    },
  },
}

export const MobileOptimized: Story = {
  args: {
    tags: mockTags,
    layout: 'list',
    size: 'sm',
    maxTags: 10,
    showCounts: false,
    showTrending: false,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}

// Custom Styling
export const CustomStyling: Story = {
  args: {
    tags: mockTags,
    layout: 'cloud',
    size: 'md',
    maxTags: 15,
    showCounts: true,
    showTrending: true,
    className:
      'bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border-2 border-dashed border-blue-200',
  },
}
