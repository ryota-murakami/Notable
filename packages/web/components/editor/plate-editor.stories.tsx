import React from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { PlateEditor } from './plate-editor'
import { within, userEvent, expect } from '@storybook/test'

const meta = {
  title: 'Editor/PlateEditor',
  component: PlateEditor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='min-w-[800px] p-8'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PlateEditor>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const InteractiveEditing: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for editor to be ready
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Find the editor by looking for contenteditable div
    const editor = canvas.getByRole('textbox')

    // Click at the end of the document
    const lastParagraph = canvas.getByText(/strikethrough/)
    await userEvent.click(lastParagraph)

    // Add a new line and type
    await userEvent.keyboard('{End}{Enter}')
    await userEvent.type(
      editor,
      'This is a new paragraph added via interaction.'
    )

    // Verify the new text exists
    await expect(editor).toHaveTextContent(
      'This is a new paragraph added via interaction.'
    )
  },
}

export const TextSelection: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for editor to be ready
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Select the "Basic Editor" heading
    const heading = canvas.getByText('Basic Editor')
    await userEvent.tripleClick(heading)

    // Type to replace
    await userEvent.type(canvas.getByRole('textbox'), 'Plate.js Editor Demo')

    // Verify the change
    await expect(canvas.getByRole('textbox')).toHaveTextContent(
      'Plate.js Editor Demo'
    )
  },
}

export const NavigationTest: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for editor to be ready
    await new Promise((resolve) => setTimeout(resolve, 500))

    const editor = canvas.getByRole('textbox')

    // Click at the beginning
    const firstHeading = canvas.getByText('Basic Editor')
    await userEvent.click(firstHeading)

    // Navigate with keyboard
    await userEvent.keyboard('{Home}')
    await userEvent.keyboard('{ArrowDown}{ArrowDown}')

    // Type at the new position
    await userEvent.type(editor, 'Inserted text - ')

    // Verify navigation worked
    await expect(canvas.getByText(/Inserted text/)).toBeInTheDocument()
  },
}
