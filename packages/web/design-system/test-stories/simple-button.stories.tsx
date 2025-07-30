import type { Meta, StoryObj } from '@storybook/nextjs'
import { fn, expect, userEvent, within } from '@storybook/test'

// Simple test button component - avoiding any problematic CSS classes
const SimpleButton = ({ children, disabled, onClick, ...props }: any) => (
  <button
    disabled={disabled}
    onClick={onClick}
    style={{
      padding: '8px 16px',
      backgroundColor: disabled ? '#9ca3af' : '#3b82f6',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: disabled ? 'not-allowed' : 'pointer',
    }}
    {...props}
  >
    {children}
  </button>
)

const meta = {
  title: 'Test/Simple Button',
  component: SimpleButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['test-working'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
  args: {
    onClick: fn(),
    children: 'Button',
  },
} satisfies Meta<typeof SimpleButton>

export default meta
type Story = StoryObj<typeof meta>

// Basic working test
export const Default: Story = {
  args: {
    children: 'Click me',
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'Click me' })

    // Test button is rendered
    await expect(button).toBeInTheDocument()
    await expect(button).toBeEnabled()

    // Test button click
    await userEvent.click(button)
    await expect(args.onClick).toHaveBeenCalled()
  },
}

// Disabled state test
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'Disabled Button' })

    await expect(button).toBeInTheDocument()
    await expect(button).toBeDisabled()
  },
}

// Accessibility test
export const AccessibilityTest: Story = {
  args: {
    children: 'Accessible Button',
    'aria-label': 'Accessible button for testing',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', {
      name: 'Accessible button for testing',
    })

    await expect(button).toBeInTheDocument()
    await expect(button).toHaveAccessibleName('Accessible button for testing')

    // Test keyboard navigation
    button.focus()
    await expect(button).toHaveFocus()

    // Test Enter key
    await userEvent.keyboard('{Enter}')

    // Test Space key
    await userEvent.keyboard(' ')
  },
}
