import React from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { NoteEditor } from './note-editor'
import { within, userEvent, expect, waitFor } from '@storybook/test'

// Mock the useNote hook
const mockNote = {
  id: '123',
  title: 'Sample Note Title',
  content:
    'This is the content of the sample note. It contains some text for demonstration purposes.',
  tags: ['sample', 'demo'],
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date('2024-01-15'),
  userId: 'user123',
  workspaceId: 'workspace123',
}

let mockUpdateNote = jest.fn()

jest.mock('@/hooks/use-note', () => ({
  useNote: (noteId: string) => {
    // Simulate different states based on noteId
    if (noteId === 'loading') {
      return { note: null, loading: true, updateNote: mockUpdateNote }
    }

    if (noteId === 'not-found') {
      return { note: null, loading: false, updateNote: mockUpdateNote }
    }

    if (noteId === 'empty') {
      return {
        note: { ...mockNote, title: '', content: '' },
        loading: false,
        updateNote: mockUpdateNote,
      }
    }

    if (noteId === 'long') {
      return {
        note: {
          ...mockNote,
          title:
            'A Very Long Note Title That Demonstrates How The Editor Handles Extended Text',
          content: `# Introduction

This is a comprehensive note that demonstrates the editor's capability to handle long-form content.

## Section 1: Overview

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Subsection 1.1: Details

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Section 2: Technical Details

- Point 1: Important technical detail
- Point 2: Another crucial aspect
- Point 3: Additional information

### Code Example

\`\`\`javascript
function example() {
  console.log("This is a code example");
  return true;
}
\`\`\`

## Section 3: Conclusion

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
        },
        loading: false,
        updateNote: mockUpdateNote,
      }
    }

    // Default case
    return {
      note: mockNote,
      loading: false,
      updateNote: mockUpdateNote,
    }
  },
}))

const meta = {
  title: 'UI/Editor/NoteEditor',
  component: NoteEditor,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    noteId: {
      control: 'text',
      description: 'ID of the note to edit',
    },
  },
  decorators: [
    (Story) => (
      <div className='h-screen bg-background'>
        <Story />
      </div>
    ),
  ],
  beforeEach: () => {
    mockUpdateNote = jest.fn()
  },
} satisfies Meta<typeof NoteEditor>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    noteId: '123',
  },
}

export const LoadingState: Story = {
  args: {
    noteId: 'loading',
  },
}

export const NotFound: Story = {
  args: {
    noteId: 'not-found',
  },
}

export const EmptyNote: Story = {
  args: {
    noteId: 'empty',
  },
}

export const LongContent: Story = {
  args: {
    noteId: 'long',
  },
}

// Interactive stories
export const EditTitle: Story = {
  args: {
    noteId: '123',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Find title input
    const titleInput = canvas.getByDisplayValue('Sample Note Title')

    // Clear and type new title
    await userEvent.clear(titleInput)
    await userEvent.type(titleInput, 'Updated Note Title')

    // Verify update was called
    await waitFor(() => {
      expect(mockUpdateNote).toHaveBeenCalledWith({
        title: 'Updated Note Title',
      })
    })
  },
}

export const EditContent: Story = {
  args: {
    noteId: '123',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Find content textarea
    const contentTextarea = canvas.getByDisplayValue(/This is the content/)

    // Add text to content
    await userEvent.click(contentTextarea)
    await userEvent.keyboard('{End}')
    await userEvent.type(contentTextarea, ' Additional content added.')

    // Verify update was called
    await waitFor(() => {
      expect(mockUpdateNote).toHaveBeenCalledWith({
        content: expect.stringContaining('Additional content added.'),
      })
    })
  },
}

export const StartFromEmpty: Story = {
  args: {
    noteId: 'empty',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Find empty title input
    const titleInput = canvas.getByPlaceholderText('Untitled')

    // Type title
    await userEvent.type(titleInput, 'My New Note')

    // Verify update
    await waitFor(() => {
      expect(mockUpdateNote).toHaveBeenCalledWith({ title: 'My New Note' })
    })

    // Find content textarea
    const contentTextarea = canvas.getByPlaceholderText('Start writing...')

    // Type content
    await userEvent.type(contentTextarea, '# Welcome\n\nThis is my first note.')

    // Verify content update
    await waitFor(() => {
      expect(mockUpdateNote).toHaveBeenCalledWith({
        content: '# Welcome\n\nThis is my first note.',
      })
    })
  },
}

export const RapidTyping: Story = {
  args: {
    noteId: '123',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Test rapid typing (debouncing)
    const titleInput = canvas.getByDisplayValue('Sample Note Title')

    // Type quickly
    await userEvent.clear(titleInput)
    await userEvent.type(titleInput, 'Rapid typing test', { delay: 10 })

    // Should batch updates
    await waitFor(() => {
      // Check that update was called, but not for every character
      const callCount = mockUpdateNote.mock.calls.length
      expect(callCount).toBeLessThan(17) // Less than character count
    })
  },
}

export const LongTitleInput: Story = {
  args: {
    noteId: '123',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const titleInput = canvas.getByDisplayValue('Sample Note Title')

    // Type a very long title
    const longTitle =
      'This is an extremely long title that goes on and on to test how the editor handles very lengthy titles that might wrap to multiple lines or cause layout issues in the interface'

    await userEvent.clear(titleInput)
    await userEvent.type(titleInput, longTitle)

    await waitFor(() => {
      expect(mockUpdateNote).toHaveBeenCalledWith({ title: longTitle })
    })
  },
}

export const MarkdownContent: Story = {
  args: {
    noteId: 'empty',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const contentTextarea = canvas.getByPlaceholderText('Start writing...')

    // Type markdown content
    const markdownContent = `# Markdown Test

## Features
- **Bold text**
- *Italic text*
- \`inline code\`

### Code Block
\`\`\`javascript
const greeting = "Hello, World!";
console.log(greeting);
\`\`\`

> This is a blockquote

[Link to Notable](https://notable.app)`

    await userEvent.type(contentTextarea, markdownContent)

    await waitFor(() => {
      expect(mockUpdateNote).toHaveBeenCalledWith({
        content: expect.stringContaining('# Markdown Test'),
      })
    })
  },
}

export const KeyboardShortcuts: Story = {
  args: {
    noteId: '123',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const contentTextarea = canvas.getByDisplayValue(/This is the content/)

    // Test common keyboard shortcuts
    await userEvent.click(contentTextarea)

    // Select all
    await userEvent.keyboard('{Control>}a{/Control}')

    // Copy
    await userEvent.keyboard('{Control>}c{/Control}')

    // Paste
    await userEvent.keyboard('{End}')
    await userEvent.keyboard('{Control>}v{/Control}')

    // The content should be duplicated
    await waitFor(() => {
      expect(mockUpdateNote).toHaveBeenCalled()
    })
  },
}

export const AutoSaveIndicator: Story = {
  render: () => {
    const [savedAt, setSavedAt] = React.useState<Date | null>(null)

    // Override mock to track saves
    React.useEffect(() => {
      mockUpdateNote = jest.fn(() => {
        setSavedAt(new Date())
      })
    }, [])

    return (
      <div className='relative h-screen'>
        <NoteEditor noteId='123' />
        {savedAt && (
          <div className='absolute top-4 right-4 text-sm text-muted-foreground'>
            Saved at {savedAt.toLocaleTimeString()}
          </div>
        )}
      </div>
    )
  },
}

export const MultilineEdit: Story = {
  args: {
    noteId: 'empty',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const contentTextarea = canvas.getByPlaceholderText('Start writing...')

    // Type multiple lines
    await userEvent.type(contentTextarea, 'Line 1')
    await userEvent.keyboard('{Enter}')
    await userEvent.type(contentTextarea, 'Line 2')
    await userEvent.keyboard('{Enter}')
    await userEvent.type(contentTextarea, 'Line 3')

    await waitFor(() => {
      expect(mockUpdateNote).toHaveBeenCalledWith({
        content: 'Line 1\nLine 2\nLine 3',
      })
    })
  },
}

export const TabIndentation: Story = {
  args: {
    noteId: 'empty',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const contentTextarea = canvas.getByPlaceholderText('Start writing...')

    // Type with tab indentation
    await userEvent.type(contentTextarea, 'function example() {')
    await userEvent.keyboard('{Enter}')
    await userEvent.keyboard('{Tab}')
    await userEvent.type(contentTextarea, 'return true;')
    await userEvent.keyboard('{Enter}')
    await userEvent.type(contentTextarea, '}')

    await waitFor(() => {
      expect(mockUpdateNote).toHaveBeenCalled()
    })
  },
}

export const MobileResponsive: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {
    noteId: '123',
  },
}

export const TabletResponsive: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
  args: {
    noteId: '123',
  },
}

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    noteId: '123',
  },
  decorators: [
    (Story) => (
      <div className='h-screen bg-gray-900 text-white dark'>
        <Story />
      </div>
    ),
  ],
}
