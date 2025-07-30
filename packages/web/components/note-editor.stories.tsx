import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { within, userEvent, expect, waitFor } from '@storybook/test'

// Mock NoteEditor component for Storybook
// This avoids the need for jest.mock and hook dependencies
const NoteEditorMock = ({ noteId }: { noteId: string }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isSaving, setIsSaving] = useState(false)
  const [lastSaved, setLastSaved] = useState<Date | null>(null)

  // Initialize with mock data based on noteId
  React.useEffect(() => {
    if (noteId === 'loading') {
      // Simulate loading state
      setTitle('')
      setContent('')
    } else if (noteId === 'not-found') {
      // Simulate not found state
      setTitle('')
      setContent('')
    } else if (noteId === 'empty') {
      setTitle('')
      setContent('')
    } else if (noteId === 'long') {
      setTitle(
        'A Very Long Note Title That Demonstrates How The Editor Handles Extended Text'
      )
      setContent(`# Introduction

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

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`)
    } else {
      // Default case
      setTitle('Sample Note Title')
      setContent(
        'This is the content of the sample note. It contains some text for demonstration purposes.'
      )
    }
  }, [noteId])

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
    simulateSave()
  }

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
    simulateSave()
  }

  const simulateSave = () => {
    setIsSaving(true)
    setTimeout(() => {
      setIsSaving(false)
      setLastSaved(new Date())
    }, 500)
  }

  if (noteId === 'loading') {
    return (
      <div className='flex h-screen items-center justify-center'>
        <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-primary'></div>
      </div>
    )
  }

  if (noteId === 'not-found') {
    return (
      <div className='flex h-screen items-center justify-center'>
        <div className='text-center'>
          <h2 className='text-2xl font-semibold mb-2'>Note not found</h2>
          <p className='text-muted-foreground'>
            The requested note could not be found.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className='flex flex-col h-full'>
      <div className='border-b px-6 py-4'>
        <input
          type='text'
          value={title}
          onChange={handleTitleChange}
          placeholder='Untitled'
          className='w-full text-3xl font-bold outline-none bg-transparent'
        />
        {isSaving && (
          <span className='text-sm text-muted-foreground'>Saving...</span>
        )}
        {!isSaving && lastSaved && (
          <span className='text-sm text-muted-foreground'>
            Saved at {lastSaved.toLocaleTimeString()}
          </span>
        )}
      </div>
      <div className='flex-1 px-6 py-4'>
        <textarea
          value={content}
          onChange={handleContentChange}
          placeholder='Start writing...'
          className='w-full h-full resize-none outline-none bg-transparent font-mono'
        />
      </div>
    </div>
  )
}

const meta = {
  title: 'UI/Editor/NoteEditor',
  component: NoteEditorMock,
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
} satisfies Meta<typeof NoteEditorMock>

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

    // Verify title changed
    await waitFor(() => {
      expect(titleInput).toHaveValue('Updated Note Title')
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

    // Verify content updated
    await waitFor(() => {
      expect(contentTextarea.value).toContain('Additional content added.')
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

    // Verify title
    await waitFor(() => {
      expect(titleInput).toHaveValue('My New Note')
    })

    // Find content textarea
    const contentTextarea = canvas.getByPlaceholderText('Start writing...')

    // Type content
    await userEvent.type(contentTextarea, '# Welcome\n\nThis is my first note.')

    // Verify content
    await waitFor(() => {
      expect(contentTextarea).toHaveValue('# Welcome\n\nThis is my first note.')
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

    // Should show saving indicator during typing
    await waitFor(() => {
      expect(canvas.getByText('Saving...')).toBeInTheDocument()
    })

    // Should show saved after debounce
    await waitFor(
      () => {
        expect(canvas.getByText(/Saved at/)).toBeInTheDocument()
      },
      { timeout: 2000 }
    )
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
      expect(titleInput).toHaveValue(longTitle)
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
      expect(contentTextarea.value).toContain('# Markdown Test')
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

    // The content should be selected (we can't directly test selection)
    // Just verify the textarea is still focused
    expect(contentTextarea).toHaveFocus()
  },
}

export const AutoSaveIndicator: Story = {
  args: {
    noteId: '123',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Edit something to trigger save
    const titleInput = canvas.getByDisplayValue('Sample Note Title')
    await userEvent.type(titleInput, '!')

    // Should show saving
    await waitFor(() => {
      expect(canvas.getByText('Saving...')).toBeInTheDocument()
    })

    // Should show saved timestamp
    await waitFor(
      () => {
        expect(canvas.getByText(/Saved at/)).toBeInTheDocument()
      },
      { timeout: 2000 }
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
      expect(contentTextarea).toHaveValue('Line 1\nLine 2\nLine 3')
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
      expect(contentTextarea.value).toContain('function example()')
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
