import type { Note } from '@/types/note'

export const defaultNotes: Note[] = [
  {
    id: '1',
    title: 'Welcome to Notable',
    content: `# Welcome to Notable

This is your premium Notion clone with superior writing experience!

## Features

- **Rich text editing** with markdown support
- **Organize with folders** and tags
- **Search** across all your notes
- **Real-time sync** across devices
- **Export** to multiple formats

## Getting Started

1. Create new notes using the + button
2. Organize notes with folders and tags
3. Use Ctrl+K (Cmd+K) to search
4. Switch between edit and preview modes

Start writing your first note!`,
    createdAt: '2023-01-01T00:00:00.000Z',
    updatedAt: '2023-01-01T00:00:00.000Z',
    parentId: null,
    tags: ['getting-started', 'welcome'],
    isFolder: false,
  },
  {
    id: '2',
    title: 'Markdown Guide',
    content: `# Markdown Guide

## Headers
# H1
## H2
### H3

## Formatting
**Bold text**
*Italic text*
\`Inline code\`

## Lists
- Bullet point 1
- Bullet point 2

1. Numbered list
2. Another item

## Quotes
> This is a quote
> It can span multiple lines

## Links
[Link text](https://example.com)

## Code Blocks
\`\`\`
console.log('Hello, world!');
\`\`\`

Happy writing!`,
    createdAt: '2023-01-02T00:00:00.000Z',
    updatedAt: '2023-01-02T00:00:00.000Z',
    parentId: null,
    tags: ['guide', 'markdown'],
    isFolder: false,
  },
]
