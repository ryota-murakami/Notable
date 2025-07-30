import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { ExportDialog } from './export-dialog'
import { Button } from '@/design-system/components/button'
import { Download } from 'lucide-react'
import { expect, userEvent, waitFor, within } from '@storybook/test'
import type { Note } from '@/types/note'
import type { ExportFormat } from '@/types/export'

const meta = {
  title: 'UI/Export/ExportDialog',
  component: ExportDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultFormat: {
      control: 'select',
      options: ['markdown', 'pdf', 'html', 'react'],
      description: 'Default export format',
    },
    onExportComplete: {
      action: 'onExportComplete',
      description: 'Callback when export completes',
    },
  },
  decorators: [
    (Story) => (
      <div className='min-h-[600px] flex items-center justify-center'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ExportDialog>

export default meta
type Story = StoryObj<typeof meta>

// Sample note for stories
const sampleNote: Note = {
  id: '123',
  title: 'Getting Started with Notable',
  content: `# Getting Started with Notable

Welcome to Notable, your modern note-taking application.

## Features

- **Rich Text Editing**: Full markdown support with live preview
- **Organization**: Tags, folders, and search functionality
- **Export Options**: Multiple formats including PDF, HTML, and more
- **Cross-Platform**: Works on web, desktop, and mobile

## Quick Start

1. Create a new note
2. Use markdown for formatting
3. Add tags for organization
4. Export in your preferred format

### Code Example

\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('Notable User'));
\`\`\`

## Conclusion

Notable makes it easy to capture and organize your thoughts.`,
  tags: ['tutorial', 'getting-started'],
  created_at: '2024-01-01T00:00:00.000Z',
  updated_at: '2024-01-15T00:00:00.000Z',
  userId: 'user123',
  version: 1,
  device_id: 'device123',
  last_modified: '2024-01-15T00:00:00.000Z',
  vector_clock: { device123: 1 },
  local_changes: false,
  deleted: false,
  is_folder: false,
}

export const Default: Story = {
  args: {
    note: sampleNote,
  },
}

export const WithCustomTrigger: Story = {
  args: {
    note: sampleNote,
    children: (
      <Button variant='secondary' className='gap-2'>
        <Download className='h-4 w-4' />
        Export Note
      </Button>
    ),
  },
}

export const PDFDefault: Story = {
  args: {
    note: sampleNote,
    defaultFormat: 'pdf',
  },
}

export const HTMLDefault: Story = {
  args: {
    note: sampleNote,
    defaultFormat: 'html',
  },
}

export const ReactDefault: Story = {
  args: {
    note: sampleNote,
    defaultFormat: 'react',
  },
}

export const WithCallbacks: Story = {
  args: {
    note: sampleNote,
  },
  render: () => {
    const [exportHistory, setExportHistory] = useState<
      Array<{ format: ExportFormat; timestamp: Date }>
    >([])

    return (
      <div className='space-y-4'>
        <ExportDialog
          note={sampleNote}
          onExportComplete={(format) => {
            setExportHistory((prev) => [
              ...prev,
              { format, timestamp: new Date() },
            ])
          }}
        />
        {exportHistory.length > 0 && (
          <div className='p-4 border rounded-lg'>
            <h3 className='font-semibold mb-2'>Export History</h3>
            <ul className='space-y-1 text-sm'>
              {exportHistory.map((entry, index) => (
                <li key={index}>
                  Exported as {entry.format.toUpperCase()} at{' '}
                  {entry.timestamp.toLocaleTimeString()}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  },
}

export const LongNote: Story = {
  args: {
    note: {
      ...sampleNote,
      title: 'Complete Guide to Markdown',
      content: `# Complete Guide to Markdown

## Table of Contents

1. [Introduction](#introduction)
2. [Basic Syntax](#basic-syntax)
3. [Extended Syntax](#extended-syntax)
4. [Best Practices](#best-practices)

## Introduction

Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents. Created by John Gruber in 2004, Markdown is now one of the world's most popular markup languages.

## Basic Syntax

### Headings

\`\`\`markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
\`\`\`

### Emphasis

- **Bold text** using \`**text**\` or \`__text__\`
- *Italic text* using \`*text*\` or \`_text_\`
- ***Bold and italic*** using \`***text***\`

### Lists

#### Unordered Lists
- First item
- Second item
  - Nested item
  - Another nested item
- Third item

#### Ordered Lists
1. First item
2. Second item
   1. Nested item
   2. Another nested item
3. Third item

### Links and Images

[Link text](https://example.com)

![Alt text](https://via.placeholder.com/150)

### Blockquotes

> This is a blockquote.
> 
> It can span multiple lines.

### Code

Inline \`code\` uses backticks.

\`\`\`javascript
// Code block with syntax highlighting
function example() {
  console.log("Hello, World!");
}
\`\`\`

### Tables

| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

### Horizontal Rules

---

## Extended Syntax

### Task Lists

- [x] Completed task
- [ ] Incomplete task
- [ ] Another task

### Footnotes

Here's a sentence with a footnote[^1].

[^1]: This is the footnote.

### Definition Lists

Term 1
: Definition 1

Term 2
: Definition 2a
: Definition 2b

### Strikethrough

~~This text is strikethrough~~

## Best Practices

1. Use consistent formatting
2. Keep line lengths reasonable
3. Use blank lines for readability
4. Preview your markdown
5. Use appropriate heading hierarchy
6. Include alt text for images
7. Test links regularly

## Conclusion

Markdown is a powerful yet simple way to format text. With these basics, you can create well-structured documents that are easy to read and maintain.`,
      tags: ['tutorial', 'markdown', 'documentation', 'guide'],
    },
  },
}

export const ShortNote: Story = {
  args: {
    note: {
      ...sampleNote,
      title: 'Quick Note',
      content: 'Remember to review the export options.',
      tags: ['reminder'],
    },
  },
}

// Interactive stories
export const InteractiveFormatSwitch: Story = {
  args: {
    note: sampleNote,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Open dialog
    const exportButton = canvas.getByText('Export Options')
    await userEvent.click(exportButton)

    // Wait for dialog
    await waitFor(() => {
      expect(canvas.getByText('Export Note')).toBeInTheDocument()
    })

    // Click PDF format
    const pdfOption = canvas.getByText('PDF')
    await userEvent.click(pdfOption)

    // Should show PDF options
    await expect(canvas.getByText('Page Format')).toBeInTheDocument()

    // Click HTML format
    const htmlOption = canvas.getByText('HTML')
    await userEvent.click(htmlOption)

    // Should show HTML options
    await expect(canvas.getByText('Self-contained')).toBeInTheDocument()

    // Click React format
    const reactOption = canvas.getByText('React')
    await userEvent.click(reactOption)

    // Should show React options
    await expect(canvas.getByText('TypeScript')).toBeInTheDocument()
  },
}

export const InteractiveOptions: Story = {
  args: {
    note: sampleNote,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Open dialog
    const exportButton = canvas.getByText('Export Options')
    await userEvent.click(exportButton)

    // Wait for dialog
    await waitFor(() => {
      expect(canvas.getByText('Export Note')).toBeInTheDocument()
    })

    // Toggle include dates
    const includeDatesSwitch = canvas.getByRole('switch', {
      name: /include dates/i,
    })
    await userEvent.click(includeDatesSwitch)

    // Toggle include tags
    const includeTagsSwitch = canvas.getByRole('switch', {
      name: /include tags/i,
    })
    await userEvent.click(includeTagsSwitch)

    // Adjust image quality slider
    const qualitySlider = canvas.getByRole('slider')
    await userEvent.click(qualitySlider)
  },
}

export const PreviewGeneration: Story = {
  args: {
    note: sampleNote,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Open dialog
    const exportButton = canvas.getByText('Export Options')
    await userEvent.click(exportButton)

    // Wait for preview
    await waitFor(
      () => {
        // Look for word count badge which indicates preview is ready
        expect(canvas.getByText(/words/)).toBeInTheDocument()
      },
      { timeout: 3000 }
    )

    // Preview should be visible
    const preview = canvas.getByText(/# Getting Started with Notable/, {
      selector: 'pre',
    })
    await expect(preview).toBeInTheDocument()
  },
}

export const CloseDialog: Story = {
  args: {
    note: sampleNote,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Open dialog
    const exportButton = canvas.getByText('Export Options')
    await userEvent.click(exportButton)

    // Wait for dialog
    await waitFor(() => {
      expect(canvas.getByText('Export Note')).toBeInTheDocument()
    })

    // Click cancel
    const cancelButton = canvas.getByText('Cancel')
    await userEvent.click(cancelButton)

    // Dialog should close
    await waitFor(() => {
      expect(canvas.queryByText('Export Note')).not.toBeInTheDocument()
    })
  },
}

export const MarkdownOptions: Story = {
  args: {
    note: sampleNote,
    defaultFormat: 'markdown',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Open dialog
    const exportButton = canvas.getByText('Export Options')
    await userEvent.click(exportButton)

    // Wait for dialog
    await waitFor(() => {
      expect(canvas.getByText('Markdown Options')).toBeInTheDocument()
    })

    // Toggle GFM option
    const gfmSwitch = canvas.getByRole('switch', {
      name: /github flavored markdown/i,
    })
    await userEvent.click(gfmSwitch)

    // Select image handling option
    const linkOption = canvas.getByLabelText('Link to images')
    await userEvent.click(linkOption)
  },
}

export const PDFOptions: Story = {
  args: {
    note: sampleNote,
    defaultFormat: 'pdf',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Open dialog
    const exportButton = canvas.getByText('Export Options')
    await userEvent.click(exportButton)

    // Wait for dialog
    await waitFor(() => {
      expect(canvas.getByText('PDF Options')).toBeInTheDocument()
    })

    // Select Letter format
    const letterOption = canvas.getByLabelText('Letter')
    await userEvent.click(letterOption)

    // Toggle page numbers
    const pageNumbersSwitch = canvas.getByRole('switch', {
      name: /page numbers/i,
    })
    await userEvent.click(pageNumbersSwitch)

    // Toggle TOC
    const tocSwitch = canvas.getByRole('switch', {
      name: /table of contents/i,
    })
    await userEvent.click(tocSwitch)
  },
}

export const ErrorState: Story = {
  args: {
    note: {
      ...sampleNote,
      // This could trigger an error in preview generation
      content: null as any,
    },
  },
}

export const LoadingState: Story = {
  args: {
    note: sampleNote,
  },
  render: () => {
    // This would show the loading state during export
    const [isExporting, setIsExporting] = useState(false)

    return (
      <div className='space-y-4'>
        <Button onClick={() => setIsExporting(!isExporting)}>
          Toggle Export State
        </Button>
        <p className='text-sm text-muted-foreground'>
          {isExporting
            ? 'Simulating export in progress...'
            : 'Click button to simulate export'}
        </p>
        <ExportDialog note={sampleNote} />
      </div>
    )
  },
}

export const MobileResponsive: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {
    note: sampleNote,
  },
}
