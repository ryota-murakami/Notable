import type { Meta, StoryObj } from '@storybook/nextjs'
import {
  EditorCanvas,
  EditorFAB,
  EditorStatusBar,
  EditorTitle,
  NotableEditorCanvas,
  useEditorCanvas,
} from './editor-canvas'
import { expect, userEvent, within } from '@storybook/test'
import { Button } from '../../design-system/components/button'
import { Bold, Italic, Plus, Save, Settings, Underline } from 'lucide-react'
import * as React from 'react'

const meta: Meta<typeof EditorCanvas> = {
  title: 'Components/UI/EditorCanvas',
  component: EditorCanvas,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A flexible canvas component for editor layouts with support for focus mode, split view, and responsive widths.',
      },
    },
  },
  argTypes: {
    maxWidth: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', '4xl', 'full'],
      description: 'Maximum width of the editor content',
    },
    width: {
      control: 'select',
      options: ['narrow', 'medium', 'wide', 'full'],
      description: 'Optimized width presets for writing experience',
    },
    padding: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Padding around the content',
    },
    centered: {
      control: 'boolean',
      description: 'Whether to center the content',
    },
    focusMode: {
      control: 'boolean',
      description: 'Enable focus mode for distraction-free writing',
    },
    mode: {
      control: 'select',
      options: ['edit', 'preview', 'split'],
      description: 'Editor view mode',
    },
  },
}

export default meta
type Story = StoryObj<typeof EditorCanvas>

const SampleContent = () => (
  <div className='prose prose-lg max-w-none'>
    <h1>Welcome to Notable Editor</h1>
    <p>
      This is a sample document demonstrating the editor canvas component. You
      can write, edit, and format your content in a beautiful, distraction-free
      environment.
    </p>
    <h2>Features</h2>
    <ul>
      <li>Clean, minimal interface</li>
      <li>Focus mode for distraction-free writing</li>
      <li>Multiple width options</li>
      <li>Split view for simultaneous editing and preview</li>
    </ul>
    <p>
      Start typing to experience the smooth writing experience that Notable
      provides. The editor automatically adapts to your content and preferences.
    </p>
  </div>
)

const SampleToolbar = () => (
  <div className='flex items-center gap-2'>
    <Button variant='ghost' size='sm'>
      <Bold className='h-4 w-4' />
    </Button>
    <Button variant='ghost' size='sm'>
      <Italic className='h-4 w-4' />
    </Button>
    <Button variant='ghost' size='sm'>
      <Underline className='h-4 w-4' />
    </Button>
  </div>
)

export const Default: Story = {
  args: {
    children: <SampleContent />,
  },
}

export const WithToolbar: Story = {
  args: {
    children: <SampleContent />,
    toolbar: <SampleToolbar />,
  },
}

export const WithHeaderAndFooter: Story = {
  args: {
    children: <SampleContent />,
    header: (
      <div className='px-6 py-3'>
        <h2 className='text-lg font-semibold'>Document Title</h2>
      </div>
    ),
    footer: (
      <div className='px-6 py-3'>
        <EditorStatusBar
          wordCount={245}
          characterCount={1337}
          readingTime='1 min'
          lastSaved='2 minutes ago'
          syncStatus='synced'
        />
      </div>
    ),
  },
}

export const FocusMode: Story = {
  args: {
    children: <SampleContent />,
    focusMode: true,
    toolbar: <SampleToolbar />,
  },
}

function InteractiveExample() {
  const { mode, width, focusMode, setMode, setWidth, toggleFocusMode } =
    useEditorCanvas()

  return (
    <EditorCanvas
      mode={mode}
      width={width}
      focusMode={focusMode}
      showModeToggle
      showWidthToggle
      onModeChange={setMode}
      onWidthChange={setWidth}
      onFocusModeToggle={toggleFocusMode}
      toolbar={<SampleToolbar />}
    >
      <SampleContent />
    </EditorCanvas>
  )
}

export const Interactive: Story = {
  render: () => <InteractiveExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Test mode toggle
    const previewButton = canvas.getByTitle('Preview mode')
    await userEvent.click(previewButton)

    // Test width toggle
    const wideButton = canvas.getByTitle('Wide width')
    await userEvent.click(wideButton)
  },
}

export const WidthComparison: Story = {
  render: () => (
    <div className='space-y-8 p-8'>
      <div>
        <h3 className='text-lg font-semibold mb-4'>Narrow (max-w-2xl)</h3>
        <EditorCanvas width='narrow' className='border'>
          <SampleContent />
        </EditorCanvas>
      </div>
      <div>
        <h3 className='text-lg font-semibold mb-4'>Medium (max-w-4xl)</h3>
        <EditorCanvas width='medium' className='border'>
          <SampleContent />
        </EditorCanvas>
      </div>
      <div>
        <h3 className='text-lg font-semibold mb-4'>Wide (max-w-6xl)</h3>
        <EditorCanvas width='wide' className='border'>
          <SampleContent />
        </EditorCanvas>
      </div>
    </div>
  ),
}

export const NotableEditor: Story = {
  render: () => {
    const [title, setTitle] = React.useState('My Document')

    return (
      <NotableEditorCanvas
        title={<EditorTitle value={title} onChange={setTitle} />}
        content={<SampleContent />}
        toolbar={<SampleToolbar />}
        statusBar={
          <EditorStatusBar
            wordCount={245}
            characterCount={1337}
            readingTime='1 min'
            lastSaved='Just now'
            syncStatus='synced'
          />
        }
      />
    )
  },
}

export const StatusBarVariations: Story = {
  render: () => (
    <div className='space-y-4 p-8'>
      <div className='border rounded p-4'>
        <EditorStatusBar
          wordCount={150}
          characterCount={823}
          readingTime='1 min'
          lastSaved='Just now'
          syncStatus='synced'
        />
      </div>
      <div className='border rounded p-4'>
        <EditorStatusBar
          wordCount={500}
          characterCount={2750}
          readingTime='2 min'
          lastSaved='5 minutes ago'
          syncStatus='syncing'
        />
      </div>
      <div className='border rounded p-4'>
        <EditorStatusBar
          wordCount={1200}
          characterCount={6543}
          readingTime='5 min'
          lastSaved='10 minutes ago'
          syncStatus='error'
        />
      </div>
      <div className='border rounded p-4'>
        <EditorStatusBar
          wordCount={300}
          characterCount={1654}
          readingTime='1 min'
          lastSaved='Offline'
          syncStatus='offline'
        />
      </div>
    </div>
  ),
}

export const WithFloatingActionButton: Story = {
  render: () => (
    <div className='relative h-[600px]'>
      <EditorCanvas>
        <SampleContent />
      </EditorCanvas>
      <EditorFAB onClick={() => console.info('New document')}>
        <Plus className='h-6 w-6' />
      </EditorFAB>
    </div>
  ),
}

export const FloatingButtonPositions: Story = {
  render: () => (
    <div className='relative h-[400px] border rounded'>
      <EditorCanvas>
        <div className='text-center text-muted-foreground'>
          <p>Floating action buttons in different positions</p>
        </div>
      </EditorCanvas>
      <EditorFAB
        position='bottom-right'
        className='bg-blue-500 hover:bg-blue-600'
      >
        <Plus className='h-6 w-6' />
      </EditorFAB>
      <EditorFAB
        position='bottom-left'
        className='bg-green-500 hover:bg-green-600'
      >
        <Save className='h-6 w-6' />
      </EditorFAB>
      <EditorFAB
        position='top-right'
        className='bg-purple-500 hover:bg-purple-600'
      >
        <Settings className='h-6 w-6' />
      </EditorFAB>
    </div>
  ),
}

export const SplitView: Story = {
  args: {
    mode: 'split',
    children: <SampleContent />,
    toolbar: <SampleToolbar />,
  },
}

export const CustomPadding: Story = {
  render: () => (
    <div className='space-y-8'>
      <div>
        <h3 className='text-sm font-semibold mb-2 px-8'>Small Padding</h3>
        <EditorCanvas padding='sm' className='border'>
          <SampleContent />
        </EditorCanvas>
      </div>
      <div>
        <h3 className='text-sm font-semibold mb-2 px-8'>Extra Large Padding</h3>
        <EditorCanvas padding='xl' className='border'>
          <SampleContent />
        </EditorCanvas>
      </div>
    </div>
  ),
}

export const CompleteEditorExample: Story = {
  render: () => {
    const [title, setTitle] = React.useState('Getting Started with Notable')
    const [wordCount] = React.useState(1245)
    const { mode, width, focusMode, setMode, setWidth, toggleFocusMode } =
      useEditorCanvas()

    return (
      <div className='h-screen flex flex-col'>
        <EditorCanvas
          mode={mode}
          width={width}
          focusMode={focusMode}
          showModeToggle
          showWidthToggle
          onModeChange={setMode}
          onWidthChange={setWidth}
          onFocusModeToggle={toggleFocusMode}
          toolbar={<SampleToolbar />}
          header={
            <div className='px-6 py-4'>
              <EditorTitle value={title} onChange={setTitle} />
            </div>
          }
          footer={
            <div className='px-6 py-3'>
              <EditorStatusBar
                wordCount={wordCount}
                characterCount={wordCount * 5.5}
                readingTime='5 min'
                lastSaved='All changes saved'
                syncStatus='synced'
              />
            </div>
          }
          className='flex-1'
        >
          <SampleContent />
        </EditorCanvas>
      </div>
    )
  },
}
