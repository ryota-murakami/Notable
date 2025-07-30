'use client'

import { createPlatePlugin } from 'platejs/react'
import {
  AlertCircle,
  Brain,
  CheckSquare,
  ChevronRight,
  Code,
  Crown,
  Expand,
  FileText,
  Heading1,
  Heading2,
  Heading3,
  Image,
  Lightbulb,
  List,
  ListOrdered,
  Minus,
  Plus,
  Quote,
  RotateCcw,
  Shrink,
  Sparkles,
  Table,
  Type,
  Wand2,
} from 'lucide-react'

// Slash Command Configuration
export interface SlashCommandItem {
  key: string
  title: string
  description: string
  icon: React.ComponentType<any>
  keywords: string[]
  group: 'basic' | 'media' | 'database' | 'advanced' | 'ai'
  action: (editor: any) => void
}

export const SLASH_COMMANDS: SlashCommandItem[] = [
  // Basic Text Blocks
  {
    key: 'paragraph',
    title: 'Text',
    description: 'Just start writing with plain text',
    icon: Type,
    keywords: ['text', 'paragraph', 'p'],
    group: 'basic',
    action: (editor) => {
      // Transform current block to paragraph
      editor.api.block.setBlockType({ type: 'p' })
    },
  },
  {
    key: 'h1',
    title: 'Heading 1',
    description: 'Big section heading',
    icon: Heading1,
    keywords: ['heading', 'h1', 'title', 'big'],
    group: 'basic',
    action: (editor) => {
      editor.api.block.setBlockType({ type: 'h1' })
    },
  },
  {
    key: 'h2',
    title: 'Heading 2',
    description: 'Medium section heading',
    icon: Heading2,
    keywords: ['heading', 'h2', 'subtitle'],
    group: 'basic',
    action: (editor) => {
      editor.api.block.setBlockType({ type: 'h2' })
    },
  },
  {
    key: 'h3',
    title: 'Heading 3',
    description: 'Small section heading',
    icon: Heading3,
    keywords: ['heading', 'h3', 'subheading'],
    group: 'basic',
    action: (editor) => {
      editor.api.block.setBlockType({ type: 'h3' })
    },
  },

  // Lists
  {
    key: 'bulleted-list',
    title: 'Bulleted list',
    description: 'Create a simple bulleted list',
    icon: List,
    keywords: ['list', 'bullet', 'ul', 'unordered'],
    group: 'basic',
    action: (editor) => {
      editor.api.list.toggle({ type: 'ul' })
    },
  },
  {
    key: 'numbered-list',
    title: 'Numbered list',
    description: 'Create a list with numbering',
    icon: ListOrdered,
    keywords: ['list', 'number', 'ol', 'ordered'],
    group: 'basic',
    action: (editor) => {
      editor.api.list.toggle({ type: 'ol' })
    },
  },
  {
    key: 'todo-list',
    title: 'To-do list',
    description: 'Track tasks with a to-do list',
    icon: CheckSquare,
    keywords: ['todo', 'task', 'check', 'checkbox'],
    group: 'basic',
    action: (editor) => {
      editor.api.block.setBlockType({ type: 'action_item' })
    },
  },

  // Code and Quote
  {
    key: 'code-block',
    title: 'Code',
    description: 'Capture a code snippet',
    icon: Code,
    keywords: ['code', 'snippet', 'programming'],
    group: 'basic',
    action: (editor) => {
      editor.api.block.setBlockType({ type: 'code_block' })
    },
  },
  {
    key: 'quote',
    title: 'Quote',
    description: 'Capture a quote',
    icon: Quote,
    keywords: ['quote', 'blockquote', 'citation'],
    group: 'basic',
    action: (editor) => {
      editor.api.block.setBlockType({ type: 'blockquote' })
    },
  },

  // Advanced Blocks
  {
    key: 'toggle',
    title: 'Toggle list',
    description: 'Toggles can hide and show content inside',
    icon: ChevronRight,
    keywords: ['toggle', 'collapse', 'expand', 'fold'],
    group: 'advanced',
    action: (editor) => {
      editor.api.block.setBlockType({ type: 'toggle' })
    },
  },
  {
    key: 'callout',
    title: 'Callout',
    description: 'Make writing stand out',
    icon: AlertCircle,
    keywords: ['callout', 'note', 'alert', 'info'],
    group: 'advanced',
    action: (editor) => {
      editor.api.block.setBlockType({ type: 'callout' })
    },
  },
  {
    key: 'divider',
    title: 'Divider',
    description: 'Visually divide blocks',
    icon: Minus,
    keywords: ['divider', 'separator', 'hr', 'line'],
    group: 'basic',
    action: (editor) => {
      editor.api.block.insertBlock({ type: 'thematic_break' })
    },
  },

  // Media
  {
    key: 'image',
    title: 'Image',
    description: 'Upload or embed with a link',
    icon: Image,
    keywords: ['image', 'photo', 'picture', 'media'],
    group: 'media',
    action: (editor) => {
      // This would typically open an image upload dialog
      editor.api.block.insertBlock({ type: 'img' })
    },
  },

  // Database
  {
    key: 'table',
    title: 'Table',
    description: 'Add a table',
    icon: Table,
    keywords: ['table', 'spreadsheet', 'data'],
    group: 'database',
    action: (editor) => {
      editor.api.table.insert()
    },
  },

  // Templates
  {
    key: 'template',
    title: 'Template',
    description: 'Create from template',
    icon: FileText,
    keywords: ['template', 'preset', 'format'],
    group: 'advanced',
    action: (editor) => {
      // This would open the template picker
      // For now, just insert a placeholder
      editor.api.block.insertBlock({
        type: 'p',
        children: [
          {
            text: 'Template placeholder - integrate with existing template system',
          },
        ],
      })
    },
  },

  // AI-Powered Features
  {
    key: 'ai-improve',
    title: 'AI Improve',
    description: 'Enhance clarity and readability with AI',
    icon: Wand2,
    keywords: ['ai', 'improve', 'enhance', 'fix', 'better'],
    group: 'ai',
    action: (editor) => {
      // Trigger AI improvement on current block
      const selectedText = editor.getEditorString()
      if (selectedText.trim()) {
        // This would integrate with the AI service
        // For now, we'll add a placeholder that can be enhanced
        editor.api.block.insertBlock({
          type: 'p',
          children: [
            {
              text: '[AI Enhancement] - Integrating with AI service...',
            },
          ],
        })
      }
    },
  },
  {
    key: 'ai-expand',
    title: 'AI Expand',
    description: 'Add more detail and examples with AI',
    icon: Expand,
    keywords: ['ai', 'expand', 'elaborate', 'detail', 'examples'],
    group: 'ai',
    action: (editor) => {
      const selectedText = editor.getEditorString()
      if (selectedText.trim()) {
        editor.api.block.insertBlock({
          type: 'p',
          children: [
            {
              text: '[AI Expansion] - Adding more detail...',
            },
          ],
        })
      }
    },
  },
  {
    key: 'ai-summarize',
    title: 'AI Summarize',
    description: 'Create a concise summary with AI',
    icon: Shrink,
    keywords: ['ai', 'summarize', 'summary', 'brief', 'condense'],
    group: 'ai',
    action: (editor) => {
      const selectedText = editor.getEditorString()
      if (selectedText.trim()) {
        editor.api.block.insertBlock({
          type: 'p',
          children: [
            {
              text: '[AI Summary] - Creating summary...',
            },
          ],
        })
      }
    },
  },
  {
    key: 'ai-rewrite',
    title: 'AI Rewrite',
    description: 'Rewrite in different style with AI',
    icon: RotateCcw,
    keywords: ['ai', 'rewrite', 'rephrase', 'style', 'different'],
    group: 'ai',
    action: (editor) => {
      const selectedText = editor.getEditorString()
      if (selectedText.trim()) {
        editor.api.block.insertBlock({
          type: 'p',
          children: [
            {
              text: '[AI Rewrite] - Rewriting content...',
            },
          ],
        })
      }
    },
  },
  {
    key: 'ai-continue',
    title: 'AI Continue',
    description: 'Continue writing with AI assistance',
    icon: Plus,
    keywords: ['ai', 'continue', 'complete', 'finish', 'generate'],
    group: 'ai',
    action: (editor) => {
      editor.api.block.insertBlock({
        type: 'p',
        children: [
          {
            text: '[AI Continuation] - Continuing your thought...',
          },
        ],
      })
    },
  },
  {
    key: 'ai-brainstorm',
    title: 'AI Brainstorm',
    description: 'Generate ideas and suggestions',
    icon: Lightbulb,
    keywords: ['ai', 'brainstorm', 'ideas', 'suggestions', 'creative'],
    group: 'ai',
    action: (editor) => {
      editor.api.block.insertBlock({
        type: 'p',
        children: [
          {
            text: '[AI Brainstorm] - Generating ideas...',
          },
        ],
      })
    },
  },
  {
    key: 'ai-outline',
    title: 'AI Outline',
    description: 'Create an outline from your topic',
    icon: FileText,
    keywords: ['ai', 'outline', 'structure', 'organize', 'plan'],
    group: 'ai',
    action: (editor) => {
      editor.api.block.insertBlock({
        type: 'p',
        children: [
          {
            text: '[AI Outline] - Creating outline...',
          },
        ],
      })
    },
  },
  {
    key: 'ai-assistant',
    title: 'AI Assistant',
    description: 'Open AI writing assistant panel',
    icon: Brain,
    keywords: ['ai', 'assistant', 'help', 'panel', 'premium'],
    group: 'ai',
    action: (editor) => {
      // This would trigger opening the AI assistant panel
      // For now, show a premium feature indicator
      editor.api.block.insertBlock({
        type: 'callout',
        children: [
          {
            text: '✨ AI Assistant - Premium feature for intelligent writing assistance',
          },
        ],
      })
    },
  },
]

// Slash Command Plugin
export const SlashCommandPlugin = createPlatePlugin({
  key: 'slash_command',
  handlers: {
    onKeyDown: ({ event }: any) => {
      if (event.key === '/') {
        // Trigger slash command menu
        // This would be handled by the slash command UI component
        return false
      }
    },
  } as any,
})

// Filter commands based on search query
export function filterSlashCommands(query: string): SlashCommandItem[] {
  if (!query.trim()) return SLASH_COMMANDS

  const lowercaseQuery = query.toLowerCase()

  return SLASH_COMMANDS.filter(
    (command) =>
      command.title.toLowerCase().includes(lowercaseQuery) ||
      command.description.toLowerCase().includes(lowercaseQuery) ||
      command.keywords.some((keyword) =>
        keyword.toLowerCase().includes(lowercaseQuery)
      )
  )
}

// Group filtered commands
export function groupSlashCommands(commands: SlashCommandItem[]) {
  const groups = {
    ai: commands.filter((cmd) => cmd.group === 'ai'),
    basic: commands.filter((cmd) => cmd.group === 'basic'),
    advanced: commands.filter((cmd) => cmd.group === 'advanced'),
    media: commands.filter((cmd) => cmd.group === 'media'),
    database: commands.filter((cmd) => cmd.group === 'database'),
  }

  return Object.entries(groups).filter(([_, commands]) => commands.length > 0)
}
