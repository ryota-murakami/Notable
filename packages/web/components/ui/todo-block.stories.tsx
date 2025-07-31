import type { Meta, StoryObj } from '@storybook/nextjs'
import { TodoBlock, TodoElement } from './todo-block'
import { expect, userEvent, within } from '@storybook/test'
import * as React from 'react'

const meta: Meta<typeof TodoBlock> = {
  title: 'Components/UI/TodoBlock',
  component: TodoBlock,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A todo list item block component for the Plate.js editor with interactive checkbox functionality.',
      },
    },
  },
  argTypes: {
    element: {
      control: 'object',
      description: 'The Slate element data',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof TodoBlock>

const mockAttributes = {
  'data-slate-node': 'element',
  'data-slate-inline': true,
  ref: null,
}

export const Default: Story = {
  args: {
    attributes: mockAttributes,
    element: {
      type: 'todo',
      checked: false,
      id: 'todo-1',
    },
    children: <span>Complete the task</span>,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox')
    const text = canvas.getByText('Complete the task')

    // Test initial state
    await expect(checkbox).not.toBeChecked()
    await expect(text).toBeVisible()
    await expect(text).not.toHaveClass('line-through')

    // Test checking
    await userEvent.click(checkbox)
    await expect(checkbox).toBeChecked()
  },
}

export const Checked: Story = {
  args: {
    attributes: mockAttributes,
    element: {
      type: 'todo',
      checked: true,
      id: 'todo-2',
    },
    children: <span>Already completed task</span>,
  },
}

export const Unchecked: Story = {
  args: {
    attributes: mockAttributes,
    element: {
      type: 'todo',
      checked: false,
      id: 'todo-3',
    },
    children: <span>Pending task</span>,
  },
}

export const WithLongText: Story = {
  args: {
    attributes: mockAttributes,
    element: {
      type: 'todo',
      checked: false,
      id: 'todo-4',
    },
    children: (
      <span>
        This is a very long todo item that might wrap to multiple lines. It
        should still maintain proper alignment with the checkbox and handle the
        text wrapping gracefully.
      </span>
    ),
  },
}

export const WithRichContent: Story = {
  args: {
    attributes: mockAttributes,
    element: {
      type: 'todo',
      checked: false,
      id: 'todo-5',
    },
    children: (
      <span>
        Review <strong>important</strong> documentation and{' '}
        <em>test thoroughly</em>
      </span>
    ),
  },
}

export const TodoList: Story = {
  render: () => (
    <div className='space-y-2'>
      <TodoBlock
        attributes={mockAttributes}
        element={{ type: 'todo', checked: true, id: 'todo-list-1' }}
      >
        <span>Set up development environment</span>
      </TodoBlock>
      <TodoBlock
        attributes={mockAttributes}
        element={{ type: 'todo', checked: true, id: 'todo-list-2' }}
      >
        <span>Write component stories</span>
      </TodoBlock>
      <TodoBlock
        attributes={mockAttributes}
        element={{ type: 'todo', checked: false, id: 'todo-list-3' }}
      >
        <span>Add interaction tests</span>
      </TodoBlock>
      <TodoBlock
        attributes={mockAttributes}
        element={{ type: 'todo', checked: false, id: 'todo-list-4' }}
      >
        <span>Update documentation</span>
      </TodoBlock>
      <TodoBlock
        attributes={mockAttributes}
        element={{ type: 'todo', checked: false, id: 'todo-list-5' }}
      >
        <span>Deploy to production</span>
      </TodoBlock>
    </div>
  ),
}

export const InteractiveTodoList: Story = {
  render: () => {
    const [todos, setTodos] = React.useState([
      {
        id: 'interactive-1',
        text: 'Plan project structure',
        checked: true,
      },
      {
        id: 'interactive-2',
        text: 'Design user interface',
        checked: true,
      },
      {
        id: 'interactive-3',
        text: 'Implement core features',
        checked: false,
      },
      {
        id: 'interactive-4',
        text: 'Write comprehensive tests',
        checked: false,
      },
      {
        id: 'interactive-5',
        text: 'Optimize performance',
        checked: false,
      },
    ])

    const completedCount = todos.filter((todo) => todo.checked).length
    const totalCount = todos.length

    return (
      <div className='space-y-4'>
        <div className='flex items-center justify-between pb-2 border-b'>
          <h3 className='text-lg font-medium'>Project Tasks</h3>
          <span className='text-sm text-muted-foreground'>
            {completedCount} of {totalCount} completed
          </span>
        </div>

        <div className='space-y-2'>
          {todos.map((todo) => (
            <TodoBlock
              key={todo.id}
              attributes={mockAttributes}
              element={{
                type: 'todo',
                checked: todo.checked,
                id: todo.id,
              }}
            >
              <span>{todo.text}</span>
            </TodoBlock>
          ))}
        </div>

        <div className='pt-2 border-t'>
          <div className='bg-gray-100 rounded-full h-2'>
            <div
              className='bg-blue-500 h-2 rounded-full transition-all duration-300'
              style={{
                width: `${(completedCount / totalCount) * 100}%`,
              }}
            />
          </div>
          <p className='text-xs text-muted-foreground mt-1 text-center'>
            Progress: {Math.round((completedCount / totalCount) * 100)}%
          </p>
        </div>
      </div>
    )
  },
}

export const NestedTodos: Story = {
  render: () => (
    <div className='space-y-2'>
      <TodoBlock
        attributes={mockAttributes}
        element={{ type: 'todo', checked: false, id: 'nested-1' }}
      >
        <span>Frontend Development</span>
      </TodoBlock>

      <div className='ml-6 space-y-2'>
        <TodoBlock
          attributes={mockAttributes}
          element={{ type: 'todo', checked: true, id: 'nested-1-1' }}
        >
          <span>Set up React application</span>
        </TodoBlock>
        <TodoBlock
          attributes={mockAttributes}
          element={{ type: 'todo', checked: true, id: 'nested-1-2' }}
        >
          <span>Configure TypeScript</span>
        </TodoBlock>
        <TodoBlock
          attributes={mockAttributes}
          element={{ type: 'todo', checked: false, id: 'nested-1-3' }}
        >
          <span>Implement routing</span>
        </TodoBlock>
      </div>

      <TodoBlock
        attributes={mockAttributes}
        element={{ type: 'todo', checked: false, id: 'nested-2' }}
      >
        <span>Backend Development</span>
      </TodoBlock>

      <div className='ml-6 space-y-2'>
        <TodoBlock
          attributes={mockAttributes}
          element={{ type: 'todo', checked: false, id: 'nested-2-1' }}
        >
          <span>Design database schema</span>
        </TodoBlock>
        <TodoBlock
          attributes={mockAttributes}
          element={{ type: 'todo', checked: false, id: 'nested-2-2' }}
        >
          <span>Create API endpoints</span>
        </TodoBlock>
      </div>
    </div>
  ),
}

export const CustomStyling: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <h4 className='text-sm font-medium mb-2'>Default Style</h4>
        <TodoBlock
          attributes={mockAttributes}
          element={{ type: 'todo', checked: false, id: 'style-1' }}
        >
          <span>Default todo item</span>
        </TodoBlock>
      </div>

      <div>
        <h4 className='text-sm font-medium mb-2'>Custom Background</h4>
        <TodoBlock
          attributes={mockAttributes}
          element={{ type: 'todo', checked: false, id: 'style-2' }}
          className='bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500'
        >
          <span>Important todo with custom styling</span>
        </TodoBlock>
      </div>

      <div>
        <h4 className='text-sm font-medium mb-2'>Priority Items</h4>
        <TodoBlock
          attributes={mockAttributes}
          element={{ type: 'todo', checked: false, id: 'style-3' }}
          className='bg-red-50 p-3 rounded-lg border-l-4 border-red-500'
        >
          <span>High priority task</span>
        </TodoBlock>
        <TodoBlock
          attributes={mockAttributes}
          element={{ type: 'todo', checked: false, id: 'style-4' }}
          className='bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-500 mt-2'
        >
          <span>Medium priority task</span>
        </TodoBlock>
        <TodoBlock
          attributes={mockAttributes}
          element={{ type: 'todo', checked: false, id: 'style-5' }}
          className='bg-green-50 p-3 rounded-lg border-l-4 border-green-500 mt-2'
        >
          <span>Low priority task</span>
        </TodoBlock>
      </div>
    </div>
  ),
}

export const TodoElementVariant: Story = {
  render: () => (
    <div className='space-y-2'>
      <TodoElement
        attributes={mockAttributes}
        element={{ type: 'todo', checked: false, id: 'element-1' }}
      >
        <span>Using TodoElement wrapper</span>
      </TodoElement>
      <TodoElement
        attributes={mockAttributes}
        element={{ type: 'todo', checked: true, id: 'element-2' }}
      >
        <span>Completed TodoElement</span>
      </TodoElement>
    </div>
  ),
}

export const KeyboardNavigation: Story = {
  render: () => (
    <div className='space-y-2'>
      <TodoBlock
        attributes={mockAttributes}
        element={{ type: 'todo', checked: false, id: 'keyboard-1' }}
      >
        <span>Click or use Space/Enter to toggle</span>
      </TodoBlock>
      <TodoBlock
        attributes={mockAttributes}
        element={{ type: 'todo', checked: false, id: 'keyboard-2' }}
      >
        <span>Try using Tab to navigate between items</span>
      </TodoBlock>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkboxes = canvas.getAllByRole('checkbox')

    // Test keyboard interaction
    checkboxes[0].focus()
    await userEvent.keyboard(' ')
    await expect(checkboxes[0]).toBeChecked()

    // Test navigation
    await userEvent.keyboard('{Tab}')
    await userEvent.keyboard('{Enter}')
    await expect(checkboxes[1]).toBeChecked()
  },
}

export const AccessibilityTest: Story = {
  args: {
    attributes: mockAttributes,
    element: {
      type: 'todo',
      checked: false,
      id: 'accessibility-test',
    },
    children: <span>Accessibility test todo</span>,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox')

    // Test ARIA attributes
    await expect(checkbox).toHaveAttribute('aria-checked', 'false')
    await expect(checkbox).toHaveAttribute('role', 'checkbox')

    // Test focus
    checkbox.focus()
    await expect(checkbox).toHaveFocus()

    // Test state change
    await userEvent.click(checkbox)
    await expect(checkbox).toHaveAttribute('aria-checked', 'true')
  },
}
