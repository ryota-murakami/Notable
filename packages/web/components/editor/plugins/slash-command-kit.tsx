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
]

// Slash Command Plugin
export const SlashCommandPlugin = createPlatePlugin({
  key: 'slash_command',
  // TODO: Re-enable handlers once Plate.js type issues are resolved
  // handlers: {
  //   onKeyDown: (editor: any) => (event: any) => {
  //     if (event.key === '/') {
  //       // Trigger slash command menu
  //       // This would be handled by the slash command UI component
  //       return
  //     }
  //   },
  // },
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
