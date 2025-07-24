// Template system types

// TODO: Import proper TElement type when plate-common types are available
// import type { TElement } from '@udecode/plate-common'
type TElement = any

export type TemplateCategory =
  | 'general'
  | 'meeting'
  | 'planning'
  | 'journal'
  | 'review'
  | 'task'
  | 'documentation'
  | 'creative'
  | 'education'
  | 'business'

export type TemplateUsageType =
  | 'create_note'
  | 'preview'
  | 'duplicate'
  | 'share'

export interface NoteTemplate {
  id: string
  name: string
  description?: string
  category: TemplateCategory
  tags: string[]

  // Template content
  titleTemplate: string
  contentTemplate: TElement[]

  // Template metadata
  variables: Record<string, string>
  isBuiltIn: boolean
  isPublic: boolean
  usageCount: number

  // Ownership
  createdBy?: string
  organizationId?: string

  // Timestamps
  createdAt: string
  updatedAt: string
}

export interface TemplateUsage {
  id: string
  templateId: string
  userId: string
  noteId?: string
  usageType: TemplateUsageType
  metadata: Record<string, any>
  createdAt: string
}

export interface TemplateVariable {
  name: string
  description: string
  defaultValue?: string
  required?: boolean
  type?: 'text' | 'date' | 'time' | 'datetime' | 'number' | 'select'
  options?: string[] // For select type
}

export interface TemplateSearchOptions {
  query?: string
  category?: TemplateCategory
  tags?: string[]
  isBuiltIn?: boolean
  isPublic?: boolean
  limit?: number
  offset?: number
}

export interface TemplateCreateRequest {
  name: string
  description?: string
  category: TemplateCategory
  tags?: string[]
  titleTemplate: string
  contentTemplate: TElement[]
  variables?: Record<string, string>
  isPublic?: boolean
}

export interface TemplateUpdateRequest extends Partial<TemplateCreateRequest> {
  id: string
}

export interface TemplateProcessingResult {
  title: string
  content: TElement[]
}

export interface TemplateVariableValues {
  [key: string]: string
}

export interface PopularTemplate extends NoteTemplate {
  searchRank?: number
}

// Built-in template definitions
export const BUILT_IN_TEMPLATES: Omit<
  NoteTemplate,
  'id' | 'createdAt' | 'updatedAt' | 'createdBy'
>[] = [
  {
    name: 'Meeting Notes',
    description:
      'Standard template for meeting documentation with agenda, attendees, and action items',
    category: 'meeting',
    tags: ['meeting', 'notes', 'agenda', 'action-items'],
    titleTemplate: 'Meeting Notes - {{date}}',
    contentTemplate: [
      {
        type: 'h1',
        children: [{ text: 'Meeting Notes - {{date}}' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Meeting Details' }],
      },
      {
        type: 'ul',
        children: [
          { type: 'li', children: [{ text: 'Date: {{datetime}}' }] },
          { type: 'li', children: [{ text: 'Duration: ' }] },
          { type: 'li', children: [{ text: 'Location: ' }] },
          { type: 'li', children: [{ text: 'Meeting Type: ' }] },
        ],
      },
      // ... more content structure
    ],
    variables: {
      date: 'Current date',
      datetime: 'Current date and time',
      user: 'Current user name',
    },
    isBuiltIn: true,
    isPublic: true,
    usageCount: 0,
    organizationId: undefined,
  },
  {
    name: 'Daily Journal',
    description:
      'Personal daily reflection template with mood tracking, goals, and gratitude',
    category: 'journal',
    tags: ['journal', 'daily', 'reflection', 'mood', 'gratitude'],
    titleTemplate: 'Daily Journal - {{date}}',
    contentTemplate: [
      {
        type: 'h1',
        children: [{ text: 'Daily Journal - {{date}}' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Mood & Energy' }],
      },
      // ... more content structure
    ],
    variables: {
      date: 'Current date',
      user: 'Current user name',
    },
    isBuiltIn: true,
    isPublic: true,
    usageCount: 0,
    organizationId: undefined,
  },
  {
    name: 'Project Planning',
    description:
      'Comprehensive project planning template with objectives, timeline, and resources',
    category: 'planning',
    tags: ['project', 'planning', 'objectives', 'timeline', 'resources'],
    titleTemplate: 'Project Plan: {{project_name}}',
    contentTemplate: [
      {
        type: 'h1',
        children: [{ text: 'Project Plan: {{project_name}}' }],
      },
      // ... more content structure
    ],
    variables: {
      date: 'Current date',
      user: 'Current user name',
      project_name: 'Project name',
    },
    isBuiltIn: true,
    isPublic: true,
    usageCount: 0,
    organizationId: undefined,
  },
  {
    name: 'Task List',
    description:
      'Simple task management template with priorities and due dates',
    category: 'task',
    tags: ['tasks', 'todo', 'checklist', 'productivity'],
    titleTemplate: 'Task List - {{date}}',
    contentTemplate: [
      {
        type: 'h1',
        children: [{ text: 'Task List - {{date}}' }],
      },
      // ... more content structure
    ],
    variables: {
      date: 'Current date',
    },
    isBuiltIn: true,
    isPublic: true,
    usageCount: 0,
    organizationId: undefined,
  },
  {
    name: 'Book Review',
    description:
      'Template for documenting book reviews with ratings, summary, and key takeaways',
    category: 'review',
    tags: ['book', 'review', 'reading', 'notes', 'summary'],
    titleTemplate: 'Book Review: {{book_title}}',
    contentTemplate: [
      {
        type: 'h1',
        children: [{ text: 'Book Review: {{book_title}}' }],
      },
      // ... more content structure
    ],
    variables: {
      date: 'Current date',
      book_title: 'Book title',
      author: 'Author name',
    },
    isBuiltIn: true,
    isPublic: true,
    usageCount: 0,
    organizationId: undefined,
  },
]

// Template categories with metadata
export const TEMPLATE_CATEGORIES: Record<
  TemplateCategory,
  {
    label: string
    description: string
    icon?: string
  }
> = {
  general: {
    label: 'General',
    description: 'General purpose templates',
    icon: '📄',
  },
  meeting: {
    label: 'Meeting',
    description: 'Meeting notes and documentation',
    icon: '🤝',
  },
  planning: {
    label: 'Planning',
    description: 'Project and strategic planning',
    icon: '📋',
  },
  journal: {
    label: 'Journal',
    description: 'Personal reflection and journaling',
    icon: '📖',
  },
  review: {
    label: 'Review',
    description: 'Reviews and evaluations',
    icon: '⭐',
  },
  task: {
    label: 'Task',
    description: 'Task lists and productivity',
    icon: '✅',
  },
  documentation: {
    label: 'Documentation',
    description: 'Technical and process documentation',
    icon: '📚',
  },
  creative: {
    label: 'Creative',
    description: 'Creative writing and brainstorming',
    icon: '🎨',
  },
  education: {
    label: 'Education',
    description: 'Learning and study materials',
    icon: '🎓',
  },
  business: {
    label: 'Business',
    description: 'Business planning and analysis',
    icon: '💼',
  },
}

// Default variables that are always available
export const DEFAULT_TEMPLATE_VARIABLES: Record<string, TemplateVariable> = {
  date: {
    name: 'date',
    description: 'Current date (YYYY-MM-DD format)',
    type: 'date',
    required: false,
  },
  time: {
    name: 'time',
    description: 'Current time (HH:MM format)',
    type: 'time',
    required: false,
  },
  datetime: {
    name: 'datetime',
    description: 'Current date and time',
    type: 'datetime',
    required: false,
  },
  user: {
    name: 'user',
    description: 'Current user name',
    type: 'text',
    required: false,
  },
}
