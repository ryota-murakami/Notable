import type { Meta, StoryObj } from '@storybook/nextjs'
import { Textarea } from './textarea'
import { expect, userEvent, within } from '@storybook/test'
import { Label } from './label'
import * as React from 'react'

const meta: Meta<typeof Textarea> = {
  title: 'Components/UI/Textarea',
  component: Textarea,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A multi-line text input component that extends the native textarea element with consistent styling and enhanced features.',
      },
    },
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the textarea is disabled',
    },
    rows: {
      control: 'number',
      description: 'Number of visible text lines',
    },
    maxLength: {
      control: 'number',
      description: 'Maximum number of characters',
    },
    required: {
      control: 'boolean',
      description: 'Whether the textarea is required',
    },
    readOnly: {
      control: 'boolean',
      description: 'Whether the textarea is read-only',
    },
  },
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  args: {
    placeholder: 'Type your message here.',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textarea = canvas.getByPlaceholderText('Type your message here.')

    await userEvent.type(textarea, 'Hello, this is a test message!')
    await expect(textarea).toHaveValue('Hello, this is a test message!')
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className='space-y-2'>
      <Label htmlFor='message'>Message</Label>
      <Textarea id='message' placeholder='Type your message here.' />
    </div>
  ),
}

export const WithHelperText: Story = {
  render: () => (
    <div className='space-y-2'>
      <Label htmlFor='bio'>Bio</Label>
      <Textarea
        id='bio'
        placeholder='Tell us a little bit about yourself'
        className='min-h-[100px]'
      />
      <p className='text-sm text-muted-foreground'>
        You can @mention other users and organizations.
      </p>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className='space-y-4'>
      <Textarea disabled placeholder='This textarea is disabled' />
      <Textarea
        disabled
        defaultValue='This textarea is disabled with content'
      />
    </div>
  ),
}

export const ReadOnly: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='space-y-2'>
        <Label htmlFor='readonly'>Read-only textarea</Label>
        <Textarea
          id='readonly'
          readOnly
          defaultValue='This content is read-only. You can select and copy it, but not edit it.'
        />
      </div>
    </div>
  ),
}

export const DifferentSizes: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='space-y-2'>
        <Label htmlFor='small'>Small (2 rows)</Label>
        <Textarea id='small' rows={2} placeholder='Small textarea' />
      </div>
      <div className='space-y-2'>
        <Label htmlFor='default'>Default (4 rows)</Label>
        <Textarea id='default' placeholder='Default textarea' />
      </div>
      <div className='space-y-2'>
        <Label htmlFor='large'>Large (8 rows)</Label>
        <Textarea id='large' rows={8} placeholder='Large textarea' />
      </div>
    </div>
  ),
}

function CharacterCounter() {
  const [value, setValue] = React.useState('')
  const maxLength = 280

  return (
    <div className='space-y-2'>
      <Label htmlFor='tweet'>Compose tweet</Label>
      <Textarea
        id='tweet'
        placeholder="What's happening?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={maxLength}
        className='resize-none'
      />
      <div className='flex justify-between text-sm'>
        <p className='text-muted-foreground'>
          {value.length > 0 && 'Great tweet!'}
        </p>
        <p
          className={
            value.length > 250 ? 'text-destructive' : 'text-muted-foreground'
          }
        >
          {value.length}/{maxLength}
        </p>
      </div>
    </div>
  )
}

export const WithCharacterCount: Story = {
  render: () => <CharacterCounter />,
}

export const Resizable: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='space-y-2'>
        <Label htmlFor='resize-both'>Resizable (both directions)</Label>
        <Textarea
          id='resize-both'
          placeholder='You can resize this textarea'
          className='resize'
        />
      </div>
      <div className='space-y-2'>
        <Label htmlFor='resize-vertical'>Resizable (vertical only)</Label>
        <Textarea
          id='resize-vertical'
          placeholder='You can only resize this vertically'
          className='resize-y'
        />
      </div>
      <div className='space-y-2'>
        <Label htmlFor='resize-none'>Not resizable</Label>
        <Textarea
          id='resize-none'
          placeholder='This textarea cannot be resized'
          className='resize-none'
        />
      </div>
    </div>
  ),
}

export const InForm: Story = {
  render: () => (
    <form className='space-y-6' onSubmit={(e) => e.preventDefault()}>
      <div className='space-y-2'>
        <Label htmlFor='feedback'>Feedback</Label>
        <Textarea
          id='feedback'
          name='feedback'
          placeholder='Share your thoughts...'
          required
        />
      </div>
      <div className='space-y-2'>
        <Label htmlFor='details'>
          Additional details{' '}
          <span className='text-muted-foreground'>(optional)</span>
        </Label>
        <Textarea
          id='details'
          name='details'
          placeholder="Any other information you'd like to share?"
          rows={5}
        />
      </div>
      <button
        type='submit'
        className='px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90'
      >
        Submit Feedback
      </button>
    </form>
  ),
}

function AutoGrowingTextarea() {
  const [value, setValue] = React.useState('')
  const textareaRef = React.useRef<HTMLTextAreaElement>(null)

  React.useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [value])

  return (
    <div className='space-y-2'>
      <Label htmlFor='auto-grow'>Auto-growing textarea</Label>
      <Textarea
        ref={textareaRef}
        id='auto-grow'
        placeholder='Start typing and watch the textarea grow...'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className='resize-none overflow-hidden'
        rows={1}
      />
    </div>
  )
}

export const AutoGrowing: Story = {
  render: () => <AutoGrowingTextarea />,
}

export const ValidationStates: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='space-y-2'>
        <Label htmlFor='valid'>Valid input</Label>
        <Textarea
          id='valid'
          defaultValue='This is valid content'
          className='border-green-500 focus-visible:ring-green-500'
        />
        <p className='text-sm text-green-600'>Looks good!</p>
      </div>
      <div className='space-y-2'>
        <Label htmlFor='invalid'>Invalid input</Label>
        <Textarea
          id='invalid'
          defaultValue='This content has errors'
          className='border-destructive focus-visible:ring-destructive'
        />
        <p className='text-sm text-destructive'>
          Please provide more details (minimum 50 characters)
        </p>
      </div>
    </div>
  ),
}

export const CustomStyling: Story = {
  render: () => (
    <div className='space-y-4'>
      <Textarea
        placeholder='Custom background'
        className='bg-primary/5 border-primary/20'
      />
      <Textarea placeholder='Rounded corners' className='rounded-xl' />
      <Textarea
        placeholder='Custom font'
        className='font-mono text-sm'
        defaultValue='function example() {
  return "Hello, World!";
}'
      />
    </div>
  ),
}

export const RichExample: Story = {
  render: () => {
    const [description, setDescription] = React.useState('')
    const [tags, setTags] = React.useState('')

    return (
      <div className='w-full max-w-2xl space-y-6'>
        <div>
          <h3 className='text-lg font-semibold mb-4'>Create a New Post</h3>
          <form className='space-y-4' onSubmit={(e) => e.preventDefault()}>
            <div className='space-y-2'>
              <Label htmlFor='title'>Title</Label>
              <input
                id='title'
                type='text'
                className='flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'
                placeholder='Enter post title'
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='content'>Content</Label>
              <Textarea
                id='content'
                placeholder='Write your post content here...'
                className='min-h-[200px]'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <p className='text-xs text-muted-foreground'>
                Markdown formatting is supported
              </p>
            </div>

            <div className='space-y-2'>
              <Label htmlFor='tags'>Tags</Label>
              <Textarea
                id='tags'
                placeholder='Enter tags separated by commas'
                rows={2}
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </div>

            <div className='flex gap-2'>
              <button
                type='submit'
                className='px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90'
              >
                Publish Post
              </button>
              <button
                type='button'
                className='px-4 py-2 border border-input rounded-md hover:bg-accent'
              >
                Save Draft
              </button>
            </div>
          </form>
        </div>

        {(description || tags) && (
          <div className='border-t pt-6'>
            <h4 className='text-sm font-medium mb-2'>Preview</h4>
            <div className='space-y-2'>
              {description && (
                <div>
                  <p className='text-sm font-medium text-muted-foreground'>
                    Content:
                  </p>
                  <p className='text-sm'>{description}</p>
                </div>
              )}
              {tags && (
                <div>
                  <p className='text-sm font-medium text-muted-foreground'>
                    Tags:
                  </p>
                  <div className='flex flex-wrap gap-1 mt-1'>
                    {tags.split(',').map((tag, i) => (
                      <span
                        key={i}
                        className='px-2 py-1 text-xs bg-secondary rounded-md'
                      >
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    )
  },
}

export const InteractionTest: Story = {
  args: {
    placeholder: 'Interactive textarea',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textarea = canvas.getByPlaceholderText('Interactive textarea')

    // Test typing
    await userEvent.type(textarea, 'First line')
    await userEvent.keyboard('{Enter}')
    await userEvent.type(textarea, 'Second line')

    await expect(textarea).toHaveValue('First line\nSecond line')

    // Test selection
    await userEvent.clear(textarea)
    await userEvent.type(textarea, 'Select this text')
    await userEvent.tripleClick(textarea)

    // Test tab key
    await userEvent.clear(textarea)
    await userEvent.type(textarea, 'Before tab')
    await userEvent.keyboard('{Tab}')
    await userEvent.type(textarea, 'After tab')
  },
}
