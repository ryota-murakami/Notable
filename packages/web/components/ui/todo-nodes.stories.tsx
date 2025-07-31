import React from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { Plate, usePlateEditor } from 'platejs/react'
import { TodoListElement } from './todo-list-node'
import { TodoBlock } from './todo-block'
import { BasicNodesKit } from '@/components/editor/plugins/basic-nodes-kit'
import { Editor, EditorContainer } from '@/components/ui/editor'
import { expect, userEvent, within } from '@storybook/test'

// Wrapper component to provide Plate context
const TodoDemo = ({
  items = [
    { text: 'Complete project documentation', checked: false },
    { text: 'Review pull requests', checked: true },
    { text: 'Update dependencies', checked: false },
  ],
}: {
  items?: Array<{ text: string; checked: boolean }>
}) => {
  const editor = usePlateEditor({
    plugins: BasicNodesKit,
    value: [
      {
        type: 'todo-list',
        children: items.map((item, index) => ({
          type: 'todo',
          id: `todo-${index}`,
          checked: item.checked,
          children: [{ text: item.text }],
        })),
      },
    ],
  })

  return (
    <Plate editor={editor}>
      <EditorContainer>
        <Editor variant='demo' />
      </EditorContainer>
    </Plate>
  )
}

const meta = {
  title: 'UI/Nodes/TodoNodes',
  component: TodoDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'Todo items with text and checked state',
    },
  },
  decorators: [
    (Story) => (
      <div className='min-w-[600px] p-8'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TodoDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    items: [
      { text: 'Write unit tests', checked: false },
      { text: 'Fix bug in production', checked: true },
      { text: 'Deploy to staging', checked: false },
    ],
  },
}

export const AllUnchecked: Story = {
  args: {
    items: [
      { text: 'Start new feature', checked: false },
      { text: 'Design UI mockups', checked: false },
      { text: 'Get stakeholder approval', checked: false },
    ],
  },
}

export const AllChecked: Story = {
  args: {
    items: [
      { text: 'Setup development environment', checked: true },
      { text: 'Install dependencies', checked: true },
      { text: 'Run initial build', checked: true },
    ],
  },
}

export const MixedProgress: Story = {
  args: {
    items: [
      { text: '✅ Initial planning', checked: true },
      { text: '✅ Create wireframes', checked: true },
      { text: '🔄 Implement frontend', checked: false },
      { text: '⏳ Backend API', checked: false },
      { text: '⏳ Testing', checked: false },
    ],
  },
}

export const DailyTasks: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'h2',
          children: [{ text: "Today's Tasks" }],
        },
        {
          type: 'todo-list',
          children: [
            {
              type: 'todo',
              checked: true,
              children: [{ text: 'Morning standup meeting' }],
            },
            {
              type: 'todo',
              checked: true,
              children: [{ text: 'Code review for PR #123' }],
            },
            {
              type: 'todo',
              checked: false,
              children: [{ text: 'Implement user authentication' }],
            },
            {
              type: 'todo',
              checked: false,
              children: [{ text: 'Write API documentation' }],
            },
            {
              type: 'todo',
              checked: false,
              children: [{ text: 'Prepare demo for client' }],
            },
          ],
        },
      ],
    })

    return (
      <Plate editor={editor}>
        <EditorContainer>
          <Editor variant='demo' />
        </EditorContainer>
      </Plate>
    )
  },
}

export const ProjectChecklist: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'h1',
          children: [{ text: 'Launch Checklist' }],
        },
        {
          type: 'h3',
          children: [{ text: '🚀 Pre-launch' }],
        },
        {
          type: 'todo-list',
          children: [
            {
              type: 'todo',
              checked: true,
              children: [{ text: 'Security audit completed' }],
            },
            {
              type: 'todo',
              checked: true,
              children: [{ text: 'Performance testing passed' }],
            },
            {
              type: 'todo',
              checked: false,
              children: [{ text: 'SSL certificates configured' }],
            },
          ],
        },
        {
          type: 'h3',
          children: [{ text: '📋 Documentation' }],
        },
        {
          type: 'todo-list',
          children: [
            {
              type: 'todo',
              checked: false,
              children: [{ text: 'API documentation' }],
            },
            {
              type: 'todo',
              checked: false,
              children: [{ text: 'User guide' }],
            },
            {
              type: 'todo',
              checked: false,
              children: [{ text: 'Admin manual' }],
            },
          ],
        },
      ],
    })

    return (
      <Plate editor={editor}>
        <EditorContainer>
          <Editor variant='demo' />
        </EditorContainer>
      </Plate>
    )
  },
}

export const LongTodoItems: Story = {
  args: {
    items: [
      {
        text: 'Implement comprehensive error handling system with proper logging, monitoring, and user-friendly error messages',
        checked: false,
      },
      {
        text: 'Set up continuous integration pipeline with automated testing, code quality checks, and deployment to staging environment',
        checked: true,
      },
      {
        text: 'Research and evaluate different authentication providers to determine the best solution for our use case',
        checked: false,
      },
    ],
  },
}

export const InteractiveTodo: Story = {
  args: {
    items: [
      { text: 'Click to toggle this item', checked: false },
      { text: 'This one is already done', checked: true },
      { text: 'Another task to complete', checked: false },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for component to render
    await new Promise((resolve) => setTimeout(resolve, 100))

    // Find the first checkbox
    const firstCheckbox = canvas.getAllByRole('checkbox')[0]

    // Click to check
    await userEvent.click(firstCheckbox)

    // Verify it's checked
    await expect(firstCheckbox).toHaveAttribute('aria-checked', 'true')

    // Click again to uncheck
    await userEvent.click(firstCheckbox)

    // Verify it's unchecked
    await expect(firstCheckbox).toHaveAttribute('aria-checked', 'false')
  },
}

export const CreateTodoItem: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'todo-list',
          children: [
            {
              type: 'todo',
              checked: false,
              children: [{ text: 'First todo item' }],
            },
          ],
        },
      ],
    })

    return (
      <Plate editor={editor}>
        <EditorContainer>
          <Editor variant='demo' />
        </EditorContainer>
      </Plate>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for editor to render
    await new Promise((resolve) => setTimeout(resolve, 100))

    const editor = canvas.getByRole('textbox')
    const firstItem = canvas.getByText('First todo item')

    // Click at the end of first item
    await userEvent.click(firstItem)
    await userEvent.keyboard('{End}')

    // Press Enter to create new todo item
    await userEvent.keyboard('{Enter}')

    // Type new todo
    await userEvent.type(editor, 'Second todo item')

    // Verify both items exist
    await expect(editor).toHaveTextContent('First todo item')
    await expect(editor).toHaveTextContent('Second todo item')
  },
}

export const TodoWithFormatting: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'todo-list',
          children: [
            {
              type: 'todo',
              checked: false,
              children: [
                { text: 'Task with ' },
                { text: 'bold', bold: true },
                { text: ' and ' },
                { text: 'italic', italic: true },
                { text: ' text' },
              ],
            },
            {
              type: 'todo',
              checked: true,
              children: [
                { text: 'Completed task with ' },
                { text: 'code', code: true },
                { text: ' formatting' },
              ],
            },
          ],
        },
      ],
    })

    return (
      <Plate editor={editor}>
        <EditorContainer>
          <Editor variant='demo' />
        </EditorContainer>
      </Plate>
    )
  },
}

// Individual TodoBlock story for component documentation
export const TodoBlockComponent: Story = {
  render: () => {
    const editor = usePlateEditor({
      plugins: BasicNodesKit,
      value: [
        {
          type: 'p',
          children: [{ text: 'Individual TodoBlock component demonstration:' }],
        },
      ],
    })

    return (
      <Plate editor={editor}>
        <EditorContainer>
          <div className='p-4'>
            <TodoBlock
              attributes={{}}
              element={{ type: 'todo', checked: false }}
            >
              <span>Unchecked todo item</span>
            </TodoBlock>
            <TodoBlock
              attributes={{}}
              element={{ type: 'todo', checked: true }}
            >
              <span>Checked todo item</span>
            </TodoBlock>
          </div>
        </EditorContainer>
      </Plate>
    )
  },
}
