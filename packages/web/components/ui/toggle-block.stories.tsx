import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { ToggleBlock } from './toggle-block'
import { expect, userEvent, within } from '@storybook/test'

const meta = {
  title: 'UI/Blocks/ToggleBlock',
  component: ToggleBlock,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    element: {
      control: 'object',
      description: 'Element properties including open state and title',
    },
  },
  decorators: [
    (Story) => (
      <div className='min-w-[600px] p-8'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ToggleBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    attributes: {},
    element: {
      type: 'toggle',
      open: false,
      title: 'Click to expand',
    },
    children: 'This is the hidden content inside the toggle block.',
  },
}

export const OpenByDefault: Story = {
  args: {
    attributes: {},
    element: {
      type: 'toggle',
      open: true,
      title: 'Expanded toggle',
    },
    children: 'This content is visible by default.',
  },
}

export const WithoutTitle: Story = {
  args: {
    attributes: {},
    element: {
      type: 'toggle',
      open: false,
    },
    children: 'Toggle block without initial title.',
  },
}

export const WithLongContent: Story = {
  args: {
    attributes: {},
    element: {
      type: 'toggle',
      open: true,
      title: 'Documentation',
    },
    children: (
      <div>
        <h3>Getting Started</h3>
        <p>
          This toggle block contains extensive documentation. Toggle blocks are
          perfect for organizing large amounts of content in a collapsible
          format.
        </p>
        <h4>Features</h4>
        <ul>
          <li>Collapsible content sections</li>
          <li>Customizable titles</li>
          <li>Smooth expand/collapse animations</li>
          <li>Keyboard accessible</li>
          <li>Mobile friendly</li>
        </ul>
        <h4>Usage</h4>
        <p>
          Click the chevron icon or press Enter when focused on the toggle
          button to expand or collapse the content. The title can be edited
          inline.
        </p>
        <h4>Best Practices</h4>
        <ol>
          <li>Use descriptive titles that indicate the content</li>
          <li>Keep related content together</li>
          <li>Consider the default state (open/closed)</li>
          <li>Don't nest toggle blocks too deeply</li>
        </ol>
      </div>
    ),
  },
}

export const MultipleToggles: Story = {
  render: () => (
    <div className='space-y-4'>
      <ToggleBlock
        attributes={{}}
        element={{
          type: 'toggle',
          open: false,
          title: 'Introduction',
        }}
      >
        <p>
          Welcome to our comprehensive guide. This section covers the basic
          concepts and getting started information.
        </p>
      </ToggleBlock>
      <ToggleBlock
        attributes={{}}
        element={{
          type: 'toggle',
          open: true,
          title: 'Installation',
        }}
      >
        <pre className='bg-gray-100 p-3 rounded'>
          {`npm install @notable/toggle-block
# or
yarn add @notable/toggle-block`}
        </pre>
      </ToggleBlock>
      <ToggleBlock
        attributes={{}}
        element={{
          type: 'toggle',
          open: false,
          title: 'API Reference',
        }}
      >
        <h4>Props</h4>
        <ul>
          <li>
            <code>open</code>: Initial open state
          </li>
          <li>
            <code>title</code>: Toggle block title
          </li>
          <li>
            <code>children</code>: Content to display when expanded
          </li>
        </ul>
      </ToggleBlock>
      <ToggleBlock
        attributes={{}}
        element={{
          type: 'toggle',
          open: false,
          title: 'Examples',
        }}
      >
        <p>Here are some practical examples of using toggle blocks:</p>
        <ul>
          <li>FAQ sections</li>
          <li>Documentation chapters</li>
          <li>Code examples</li>
          <li>Troubleshooting guides</li>
        </ul>
      </ToggleBlock>
    </div>
  ),
}

export const NestedContent: Story = {
  args: {
    attributes: {},
    element: {
      type: 'toggle',
      open: true,
      title: 'Complex nested content',
    },
    children: (
      <div>
        <h3>Main Section</h3>
        <p>This toggle contains various types of content:</p>

        <h4>Code Example</h4>
        <pre className='bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto'>
          <code>{`function calculateSum(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

const result = calculateSum([1, 2, 3, 4, 5]);
console.log(result); // 15`}</code>
        </pre>

        <h4>Table Data</h4>
        <table className='w-full border-collapse'>
          <thead>
            <tr className='border-b'>
              <th className='text-left p-2'>Feature</th>
              <th className='text-left p-2'>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='p-2'>Collapse/Expand</td>
              <td className='p-2 text-green-600'>✓ Supported</td>
            </tr>
            <tr className='border-b'>
              <td className='p-2'>Custom Title</td>
              <td className='p-2 text-green-600'>✓ Supported</td>
            </tr>
            <tr className='border-b'>
              <td className='p-2'>Nested Content</td>
              <td className='p-2 text-green-600'>✓ Supported</td>
            </tr>
          </tbody>
        </table>

        <h4>Image Example</h4>
        <div className='bg-gray-200 p-8 rounded text-center text-gray-500'>
          [Image placeholder]
        </div>
      </div>
    ),
  },
}

export const FAQ: Story = {
  render: () => (
    <div className='space-y-3'>
      <h2 className='text-xl font-bold mb-4'>Frequently Asked Questions</h2>
      <ToggleBlock
        attributes={{}}
        element={{
          type: 'toggle',
          open: false,
          title: 'What is a toggle block?',
        }}
      >
        <p>
          A toggle block is a UI component that allows you to show or hide
          content with a click. It's useful for organizing information and
          reducing visual clutter.
        </p>
      </ToggleBlock>
      <ToggleBlock
        attributes={{}}
        element={{
          type: 'toggle',
          open: false,
          title: 'How do I customize the appearance?',
        }}
      >
        <p>
          You can customize the toggle block by passing a className prop or by
          modifying the component's CSS. The component uses Tailwind classes
          that can be overridden.
        </p>
      </ToggleBlock>
      <ToggleBlock
        attributes={{}}
        element={{
          type: 'toggle',
          open: false,
          title: 'Is it accessible?',
        }}
      >
        <p>
          Yes! The toggle block includes proper ARIA attributes, keyboard
          navigation support, and follows accessibility best practices.
        </p>
      </ToggleBlock>
      <ToggleBlock
        attributes={{}}
        element={{
          type: 'toggle',
          open: false,
          title: 'Can I nest toggle blocks?',
        }}
      >
        <p>
          While technically possible, we recommend avoiding deeply nested toggle
          blocks as they can create a confusing user experience. Keep your
          content hierarchy simple.
        </p>
      </ToggleBlock>
    </div>
  ),
}

// Interactive stories
export const InteractiveToggle: Story = {
  args: {
    attributes: {},
    element: {
      type: 'toggle',
      open: false,
      title: 'Click to toggle',
    },
    children: 'This content will be shown when you click the toggle.',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Find toggle button
    const toggleButton = canvas.getByRole('button')

    // Should be closed initially
    await expect(toggleButton).toHaveAttribute('aria-expanded', 'false')

    // Click to open
    await userEvent.click(toggleButton)

    // Should be open
    await expect(toggleButton).toHaveAttribute('aria-expanded', 'true')

    // Content should be visible
    await expect(
      canvas.getByText('This content will be shown when you click the toggle.')
    ).toBeInTheDocument()

    // Click to close
    await userEvent.click(toggleButton)

    // Should be closed
    await expect(toggleButton).toHaveAttribute('aria-expanded', 'false')
  },
}

export const EditableTitle: Story = {
  args: {
    attributes: {},
    element: {
      type: 'toggle',
      open: true,
      title: 'Edit this title',
    },
    children: 'The title above is editable. Click on it to change.',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Find title input
    const titleInput = canvas.getByDisplayValue('Edit this title')

    // Clear and type new title
    await userEvent.clear(titleInput)
    await userEvent.type(titleInput, 'My Custom Title')

    // Should show new title
    await expect(titleInput).toHaveValue('My Custom Title')
  },
}

export const EmptyTitle: Story = {
  args: {
    attributes: {},
    element: {
      type: 'toggle',
      open: false,
    },
    children: 'Toggle with empty title',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Find title input by placeholder
    const titleInput = canvas.getByPlaceholderText('Toggle title...')

    // Type a title
    await userEvent.type(titleInput, 'New Section Title')

    // Should show typed title
    await expect(titleInput).toHaveValue('New Section Title')
  },
}

export const KeyboardAccessible: Story = {
  args: {
    attributes: {},
    element: {
      type: 'toggle',
      open: false,
      title: 'Keyboard accessible toggle',
    },
    children: 'Use Tab to focus and Enter/Space to toggle.',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Tab to focus on toggle button
    await userEvent.tab()

    // The toggle button should be focused
    const toggleButton = canvas.getByRole('button')
    await expect(toggleButton).toHaveFocus()

    // Press Enter to toggle
    await userEvent.keyboard('{Enter}')

    // Should be open
    await expect(toggleButton).toHaveAttribute('aria-expanded', 'true')

    // Press Space to toggle
    await userEvent.keyboard(' ')

    // Should be closed
    await expect(toggleButton).toHaveAttribute('aria-expanded', 'false')
  },
}

export const ResponsiveDesign: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {
    attributes: {},
    element: {
      type: 'toggle',
      open: true,
      title: 'Mobile responsive toggle',
    },
    children: (
      <div>
        <p>This toggle block is optimized for mobile devices.</p>
        <p>
          The content reflows properly and all interactive elements remain
          easily tappable on touch devices.
        </p>
      </div>
    ),
  },
}

export const CustomStyling: Story = {
  args: {
    attributes: {},
    element: {
      type: 'toggle',
      open: true,
      title: 'Styled toggle block',
    },
    children: 'This toggle has custom styling applied.',
    className: 'border-2 border-blue-500 shadow-lg',
  },
}

export const AnimatedTransition: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div>
        <p className='mb-4 text-sm text-gray-600'>
          Click the toggle to see the smooth transition
        </p>
        <div className='transition-all duration-300 ease-in-out'>
          <ToggleBlock
            attributes={{}}
            element={{
              type: 'toggle',
              open: isOpen,
              title: 'Smooth animation example',
            }}
          >
            <div className='transition-all duration-300'>
              <p>This content appears with a smooth animation.</p>
              <p>The transition makes the UI feel more polished.</p>
            </div>
          </ToggleBlock>
        </div>
      </div>
    )
  },
}
