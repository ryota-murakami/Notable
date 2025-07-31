import type { Meta, StoryObj } from '@storybook/nextjs'
import { EditorStatic } from './editor-static'
import * as React from 'react'

const meta: Meta<typeof EditorStatic> = {
  title: 'Components/UI/EditorStatic',
  component: EditorStatic,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A static, read-only version of the editor for displaying formatted content without editing capabilities. Built on PlateStatic.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'demo',
        'ai',
        'aiChat',
        'fullWidth',
        'select',
        'none',
      ],
      description: 'Visual variant of the static editor',
    },
  },
}

export default meta
type Story = StoryObj<typeof EditorStatic>

// Sample formatted content
const sampleValue = [
  {
    type: 'h1',
    children: [{ text: 'Welcome to Notable' }],
  },
  {
    type: 'p',
    children: [
      { text: 'This is a ' },
      { text: 'static editor', bold: true },
      { text: ' that displays formatted content without allowing edits.' },
    ],
  },
  {
    type: 'h2',
    children: [{ text: 'Features' }],
  },
  {
    type: 'ul',
    children: [
      {
        type: 'li',
        children: [{ text: 'Read-only display of rich text content' }],
      },
      {
        type: 'li',
        children: [{ text: 'Preserves all formatting from the editor' }],
      },
      {
        type: 'li',
        children: [{ text: 'Optimized for performance' }],
      },
    ],
  },
  {
    type: 'blockquote',
    children: [
      {
        text: 'The best way to predict the future is to invent it.',
      },
    ],
  },
]

const codeExample = [
  {
    type: 'p',
    children: [{ text: "Here's an example with code:" }],
  },
  {
    type: 'code_block',
    children: [
      {
        text: 'function greet(name: string) {\n  return `Hello, ${name}!`;\n}',
      },
    ],
  },
  {
    type: 'p',
    children: [
      { text: 'You can also use ' },
      { text: 'inline code', code: true },
      { text: ' within paragraphs.' },
    ],
  },
]

// Note: EditorStatic requires PlateStatic configuration to render properly
const StaticEditorNote = () => (
  <div className='text-sm text-muted-foreground mb-4 p-4 border rounded-md bg-muted/50'>
    <strong>Note:</strong> The EditorStatic component requires proper Plate
    configuration to render content. These stories demonstrate the visual
    styling and layout variants. In a real application, you would pass
    serialized editor content as the value prop.
  </div>
)

export const Default: Story = {
  render: () => (
    <>
      <StaticEditorNote />
      <div className='border rounded-md p-6'>
        <EditorStatic variant='default' value={sampleValue} />
      </div>
    </>
  ),
}

export const Variants: Story = {
  render: () => (
    <>
      <StaticEditorNote />
      <div className='space-y-8'>
        <div>
          <h3 className='text-sm font-semibold mb-2'>Default Variant</h3>
          <div className='border rounded-md'>
            <EditorStatic variant='default' value={sampleValue} />
          </div>
        </div>

        <div>
          <h3 className='text-sm font-semibold mb-2'>AI Variant</h3>
          <div className='border rounded-md p-4'>
            <EditorStatic
              variant='ai'
              value={[
                {
                  type: 'p',
                  children: [
                    {
                      text: 'AI variant with optimized typography for AI-generated content.',
                    },
                  ],
                },
              ]}
            />
          </div>
        </div>

        <div>
          <h3 className='text-sm font-semibold mb-2'>AI Chat Variant</h3>
          <div className='border rounded-md bg-muted/20'>
            <EditorStatic
              variant='aiChat'
              value={[
                {
                  type: 'p',
                  children: [
                    {
                      text: 'Chat message displayed in a scrollable container.',
                    },
                  ],
                },
              ]}
            />
          </div>
        </div>

        <div>
          <h3 className='text-sm font-semibold mb-2'>Select Variant</h3>
          <div className='border rounded-md'>
            <EditorStatic
              variant='select'
              value={[
                {
                  type: 'p',
                  children: [
                    { text: 'Compact select variant for form-like displays.' },
                  ],
                },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  ),
}

export const FormattedContent: Story = {
  render: () => (
    <>
      <StaticEditorNote />
      <div className='border rounded-md p-6'>
        <div className='prose max-w-none'>
          <h1 className='text-3xl font-bold mb-4'>Rich Text Display</h1>
          <p className='mb-4'>
            The static editor can display various text formats including{' '}
            <strong>bold text</strong>,<em>italic text</em>, and{' '}
            <code className='bg-muted px-1 rounded'>inline code</code>.
          </p>
          <h2 className='text-2xl font-semibold mb-3'>Lists</h2>
          <ul className='list-disc pl-6 mb-4'>
            <li>First item</li>
            <li>
              Second item with <strong>emphasis</strong>
            </li>
            <li>Third item</li>
          </ul>
          <ol className='list-decimal pl-6 mb-4'>
            <li>Numbered item one</li>
            <li>Numbered item two</li>
            <li>Numbered item three</li>
          </ol>
          <blockquote className='border-l-4 border-muted-foreground/30 pl-4 italic text-muted-foreground'>
            "Excellence is not a skill, it's an attitude."
          </blockquote>
        </div>
      </div>
    </>
  ),
}

export const CodeDisplay: Story = {
  render: () => (
    <>
      <StaticEditorNote />
      <div className='border rounded-md p-6'>
        <div className='space-y-4'>
          <p>Here's how code is displayed in the static editor:</p>
          <pre className='bg-muted p-4 rounded-md overflow-x-auto'>
            <code className='text-sm'>{`function greet(name: string) {
  return \`Hello, \${name}!\`;
}`}</code>
          </pre>
          <p>
            You can also use{' '}
            <code className='bg-muted px-1 rounded text-sm'>inline code</code>{' '}
            within regular paragraphs for technical documentation.
          </p>
        </div>
      </div>
    </>
  ),
}

export const LongFormContent: Story = {
  render: () => (
    <>
      <StaticEditorNote />
      <div className='border rounded-md'>
        <EditorStatic
          variant='fullWidth'
          value={[
            {
              type: 'h1',
              children: [{ text: 'The Art of Writing' }],
            },
            {
              type: 'p',
              children: [
                {
                  text: 'Writing is a craft that combines creativity with structure. In this comprehensive guide, we explore the fundamentals of effective writing and how modern tools can enhance your creative process.',
                },
              ],
            },
            {
              type: 'h2',
              children: [{ text: 'Chapter 1: Getting Started' }],
            },
            {
              type: 'p',
              children: [
                {
                  text: 'Every great piece of writing begins with a single word. The key is to start, even when inspiration seems elusive. Professional writers know that waiting for the perfect moment is often the enemy of progress.',
                },
              ],
            },
            {
              type: 'p',
              children: [
                {
                  text: "Consider establishing a daily writing routine. Whether it's early morning pages or late-night sessions, consistency builds momentum. The ritual itself becomes a signal to your creative mind that it's time to work.",
                },
              ],
            },
          ]}
        />
      </div>
    </>
  ),
}

export const ResponsiveDisplay: Story = {
  render: () => (
    <>
      <StaticEditorNote />
      <div className='space-y-8'>
        <div>
          <h3 className='text-sm font-semibold mb-2'>Mobile View</h3>
          <div className='max-w-sm mx-auto border rounded-md'>
            <EditorStatic
              variant='none'
              className='p-4 text-sm'
              value={[
                {
                  type: 'p',
                  children: [
                    {
                      text: 'Content adapts to mobile screens with appropriate text size and spacing.',
                    },
                  ],
                },
              ]}
            />
          </div>
        </div>

        <div>
          <h3 className='text-sm font-semibold mb-2'>Desktop View</h3>
          <div className='border rounded-md'>
            <EditorStatic
              variant='default'
              value={[
                {
                  type: 'p',
                  children: [
                    {
                      text: 'On desktop screens, content is displayed with optimal reading width and generous padding for comfortable consumption.',
                    },
                  ],
                },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  ),
}

export const ThemedContent: Story = {
  render: () => (
    <>
      <StaticEditorNote />
      <div className='space-y-6'>
        <div className='bg-slate-900 text-white rounded-lg p-6'>
          <h3 className='text-lg font-semibold mb-4'>Dark Theme</h3>
          <div className='prose prose-invert max-w-none'>
            <p>
              Static content displayed on a dark background with appropriate
              text colors for readability.
            </p>
            <ul className='list-disc pl-6'>
              <li>High contrast for better visibility</li>
              <li>Reduced eye strain in low light</li>
              <li>Modern aesthetic appeal</li>
            </ul>
          </div>
        </div>

        <div className='bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6'>
          <h3 className='text-lg font-semibold mb-4 text-blue-900'>
            Gradient Theme
          </h3>
          <div className='prose max-w-none'>
            <p className='text-blue-800'>
              Content can be styled with custom backgrounds and color schemes to
              match your brand.
            </p>
          </div>
        </div>
      </div>
    </>
  ),
}

export const DisabledState: Story = {
  render: () => (
    <>
      <StaticEditorNote />
      <div className='border rounded-md opacity-50 cursor-not-allowed'>
        <EditorStatic
          variant='default'
          className='pointer-events-none'
          value={[
            {
              type: 'p',
              children: [
                {
                  text: 'This content appears disabled and cannot be interacted with.',
                },
              ],
            },
          ]}
        />
      </div>
    </>
  ),
}
