import type { Meta, StoryObj } from '@storybook/nextjs'
import { Editor, EditorContainer, EditorView } from './editor'
import { expect, userEvent, within } from '@storybook/test'
import * as React from 'react'

const meta: Meta<typeof Editor> = {
  title: 'Components/UI/Editor',
  component: Editor,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A rich text editor component built on Plate.js. Provides a flexible editor with various layout variants.',
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
        'comment',
        'select',
        'fullWidth',
        'none',
      ],
      description: 'Visual variant of the editor',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the editor is disabled',
    },
    focused: {
      control: 'boolean',
      description: 'Whether the editor appears focused',
    },
    readOnly: {
      control: 'boolean',
      description: 'Whether the editor is read-only',
    },
  },
}

export default meta
type Story = StoryObj<typeof Editor>

// Note: The Editor component requires PlateProvider context to work properly.
// These stories demonstrate the visual variants and styles.
const EditorNote = () => (
  <div className='text-sm text-muted-foreground mb-4 p-4 border rounded-md bg-muted/50'>
    <strong>Note:</strong> The Editor component requires a PlateProvider context
    to function properly. These stories demonstrate the visual styling and
    layout variants. For a fully functional editor, see the BlockEditor stories.
  </div>
)

export const Default: Story = {
  render: () => (
    <>
      <EditorNote />
      <EditorContainer variant='default'>
        <div className='min-h-[200px] p-4 text-muted-foreground'>
          Editor content would appear here with default variant styling.
        </div>
      </EditorContainer>
    </>
  ),
}

export const Variants: Story = {
  render: () => (
    <>
      <EditorNote />
      <div className='space-y-8'>
        <div>
          <h3 className='text-sm font-semibold mb-2'>Default</h3>
          <EditorContainer variant='default' className='border rounded-md'>
            <div className='min-h-[150px] p-4 text-muted-foreground'>
              Default variant with standard padding
            </div>
          </EditorContainer>
        </div>

        <div>
          <h3 className='text-sm font-semibold mb-2'>Demo</h3>
          <EditorContainer variant='demo' className='border rounded-md'>
            <div className='min-h-[150px] p-4 text-muted-foreground'>
              Demo variant for documentation
            </div>
          </EditorContainer>
        </div>

        <div>
          <h3 className='text-sm font-semibold mb-2'>Comment</h3>
          <EditorContainer variant='comment'>
            <div className='p-2 text-sm text-muted-foreground'>
              Comment variant with compact styling
            </div>
          </EditorContainer>
        </div>

        <div>
          <h3 className='text-sm font-semibold mb-2'>Select</h3>
          <EditorContainer variant='select'>
            <div className='p-3 text-muted-foreground'>
              Select variant with focus states
            </div>
          </EditorContainer>
        </div>
      </div>
    </>
  ),
}

export const AIVariants: Story = {
  render: () => (
    <>
      <EditorNote />
      <div className='space-y-8'>
        <div>
          <h3 className='text-sm font-semibold mb-2'>AI Editor</h3>
          <div className='border rounded-md p-4'>
            <div
              className='prose max-w-none'
              style={{
                paddingLeft: '0',
                fontSize: '16px',
              }}
            >
              <p>
                AI variant optimized for AI-generated content with clean
                typography.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className='text-sm font-semibold mb-2'>AI Chat</h3>
          <div className='border rounded-md p-4 bg-muted/20'>
            <div className='max-h-[320px] max-w-[700px] overflow-y-auto px-5 py-3 text-base md:text-sm'>
              <div className='space-y-4'>
                <div className='bg-background rounded-lg p-3'>
                  <p className='text-sm'>User: How do I format text?</p>
                </div>
                <div className='bg-primary/5 rounded-lg p-3'>
                  <p className='text-sm'>
                    Assistant: You can format text using keyboard shortcuts...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ),
}

export const States: Story = {
  render: () => (
    <>
      <EditorNote />
      <div className='space-y-8'>
        <div>
          <h3 className='text-sm font-semibold mb-2'>Normal</h3>
          <EditorContainer variant='select'>
            <div className='p-3'>Normal editor state</div>
          </EditorContainer>
        </div>

        <div>
          <h3 className='text-sm font-semibold mb-2'>Focused</h3>
          <EditorContainer variant='select'>
            <div className='p-3 ring-2 ring-ring ring-offset-2 rounded-md'>
              Focused editor state with ring
            </div>
          </EditorContainer>
        </div>

        <div>
          <h3 className='text-sm font-semibold mb-2'>Disabled</h3>
          <EditorContainer variant='select'>
            <div className='p-3 cursor-not-allowed opacity-50'>
              Disabled editor state
            </div>
          </EditorContainer>
        </div>

        <div>
          <h3 className='text-sm font-semibold mb-2'>Read Only</h3>
          <EditorContainer variant='select'>
            <div className='p-3 w-fit cursor-default border-transparent'>
              Read-only editor state
            </div>
          </EditorContainer>
        </div>
      </div>
    </>
  ),
}

export const FullWidthVariant: Story = {
  render: () => (
    <>
      <EditorNote />
      <EditorContainer variant='default' className='border rounded-md'>
        <div className='size-full px-16 pt-4 pb-72 text-base sm:px-24'>
          <h1 className='text-3xl font-bold mb-4'>Full Width Editor</h1>
          <p className='text-muted-foreground mb-4'>
            This variant uses full width with generous padding, ideal for
            long-form writing.
          </p>
          <p className='text-muted-foreground'>
            The large bottom padding ensures comfortable scrolling beyond the
            last line of text.
          </p>
        </div>
      </EditorContainer>
    </>
  ),
}

export const PlaceholderStyling: Story = {
  render: () => (
    <>
      <EditorNote />
      <div className='space-y-4'>
        <EditorContainer variant='select'>
          <div className='p-3 relative'>
            <span className='absolute top-1/2 -translate-y-1/2 text-muted-foreground/80 opacity-100 pointer-events-none'>
              Type something here...
            </span>
          </div>
        </EditorContainer>

        <EditorContainer variant='comment'>
          <div className='p-2 relative'>
            <span className='absolute top-1/2 -translate-y-1/2 text-muted-foreground/80 opacity-100 pointer-events-none text-sm'>
              Add a comment...
            </span>
          </div>
        </EditorContainer>
      </div>
    </>
  ),
}

export const TypographyDemo: Story = {
  render: () => (
    <>
      <EditorNote />
      <EditorContainer variant='default' className='border rounded-md'>
        <div className='p-8'>
          <h1 className='text-3xl font-bold mb-4'>Typography in Editor</h1>
          <p className='mb-4'>
            Regular paragraph text with{' '}
            <strong className='font-bold'>bold emphasis</strong> and
            <em className='italic'> italic text</em> for variety.
          </p>
          <h2 className='text-2xl font-semibold mb-3'>Subheading</h2>
          <p className='mb-4'>
            The editor supports various text styles including{' '}
            <code className='bg-muted px-1 rounded'>inline code</code> and other
            formatting options.
          </p>
          <blockquote className='border-l-4 border-muted-foreground/30 pl-4 italic text-muted-foreground'>
            "A well-designed editor makes writing a pleasure."
          </blockquote>
        </div>
      </EditorContainer>
    </>
  ),
}

export const ResponsiveLayout: Story = {
  render: () => (
    <>
      <EditorNote />
      <div className='space-y-8'>
        <div>
          <h3 className='text-sm font-semibold mb-2'>Mobile View</h3>
          <div className='max-w-sm mx-auto'>
            <EditorContainer variant='default' className='border rounded-md'>
              <div className='px-4 py-4 text-base'>
                <p>
                  Responsive editor adapts to smaller screens with appropriate
                  padding.
                </p>
              </div>
            </EditorContainer>
          </div>
        </div>

        <div>
          <h3 className='text-sm font-semibold mb-2'>Desktop View</h3>
          <EditorContainer variant='default' className='border rounded-md'>
            <div className='px-16 py-4 text-base sm:px-[max(64px,calc(50%-350px))]'>
              <p>
                On larger screens, the editor provides generous padding for
                comfortable reading width.
              </p>
            </div>
          </EditorContainer>
        </div>
      </div>
    </>
  ),
}

export const CustomStyling: Story = {
  render: () => (
    <>
      <EditorNote />
      <div className='space-y-4'>
        <EditorContainer className='bg-slate-900 text-white rounded-lg'>
          <div className='p-6'>
            <h3 className='text-lg font-semibold mb-2'>Dark Theme Editor</h3>
            <p className='text-slate-300'>
              Custom styled editor with dark background and light text.
            </p>
          </div>
        </EditorContainer>

        <EditorContainer className='bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-2 border-purple-200'>
          <div className='p-6'>
            <h3 className='text-lg font-semibold mb-2 text-purple-900'>
              Gradient Background
            </h3>
            <p className='text-purple-700'>
              Editor with custom gradient background and colored border.
            </p>
          </div>
        </EditorContainer>
      </div>
    </>
  ),
}

export const EditorViewExample: Story = {
  render: () => (
    <>
      <EditorNote />
      <div className='space-y-4'>
        <h3 className='text-sm font-semibold'>EditorView Component</h3>
        <p className='text-sm text-muted-foreground'>
          The EditorView component provides a simplified view-only version of
          the editor.
        </p>
        <div className='border rounded-md p-4'>
          <div className='prose max-w-none'>
            <h2>Document Title</h2>
            <p>
              This demonstrates the EditorView component which can be used for
              displaying formatted content without editing capabilities.
            </p>
            <ul>
              <li>Bullet point one</li>
              <li>Bullet point two</li>
              <li>Bullet point three</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  ),
}
