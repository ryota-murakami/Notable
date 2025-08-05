'use client'

import { createPlatePlugin } from 'platejs/react'
import {
  AlertCircle,
  CheckSquare,
  ChevronRight,
  Code,
  FileText,
  Heading1,
  Heading2,
  Heading3,
  Image,
  List,
  ListOrdered,
  Minus,
  Quote,
  Table,
  Type,
} from 'lucide-react'

// Slash Command Configuration
export interface SlashCommandItem {
  key: string
  title: string
  description: string
  icon: React.ComponentType<any>
  keywords: string[]
  group: 'basic' | 'media' | 'database' | 'advanced'
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
      if (editor.selection) {
        editor.tf.setNodes({ type: 'p' })
      }
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
      console.info('H1 slash command action called!', {
        selection: editor.selection,
      })
      if (editor.selection) {
        console.info('H1 transformation executing...')
        editor.tf.setNodes({ type: 'h1' })
        console.info('H1 transformation completed')
      } else {
        console.warn('No selection available for H1 transformation')
      }
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
      if (editor.selection) {
        editor.tf.setNodes({ type: 'h2' })
      }
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
      if (editor.selection) {
        editor.tf.setNodes({ type: 'h3' })
      }
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
      if (editor.selection) {
        // Use proper list transformation
        editor.tf.setNodes({ type: 'li' })
        // TODO: Wrap in ul when list plugin is properly configured
      }
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
      if (editor.selection) {
        // Use proper list transformation
        editor.tf.setNodes({ type: 'li' })
        // TODO: Wrap in ol when list plugin is properly configured
      }
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
      if (editor.selection) {
        editor.tf.setNodes({ type: 'action_item' })
      }
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
      if (editor.selection) {
        editor.tf.setNodes({ type: 'code_block' })
      }
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
      if (editor.selection) {
        editor.tf.setNodes({ type: 'blockquote' })
      }
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
      if (editor.selection) {
        editor.tf.setNodes({ type: 'toggle' })
      }
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
      if (editor.selection) {
        editor.tf.setNodes({ type: 'callout' })
      }
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
      editor.tf.insertNodes({
        type: 'thematic_break',
        children: [{ text: '' }],
      })
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
      editor.tf.insertNodes({ type: 'img', children: [{ text: '' }] })
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
      // For now, insert a placeholder table
      editor.tf.insertNodes({
        type: 'table',
        children: [
          {
            type: 'tr',
            children: [
              { type: 'td', children: [{ text: 'Cell 1' }] },
              { type: 'td', children: [{ text: 'Cell 2' }] },
            ],
          },
        ],
      })
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
      editor.tf.insertNodes({
        type: 'p',
        children: [
          {
            text: 'Template placeholder - integrate with existing template system',
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
    onKeyDown: () => {
      // Slash command handling is done in the main component
      return
    },
  },
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
    basic: commands.filter((cmd) => cmd.group === 'basic'),
    advanced: commands.filter((cmd) => cmd.group === 'advanced'),
    media: commands.filter((cmd) => cmd.group === 'media'),
    database: commands.filter((cmd) => cmd.group === 'database'),
  }

  return Object.entries(groups).filter(([_, commands]) => commands.length > 0)
}
