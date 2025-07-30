import type { Meta, StoryObj } from '@storybook/nextjs'
import * as React from 'react'
import { SlashCommandMenu, useSlashCommand } from './slash-command-menu'
import { expect, userEvent, within } from '@storybook/test'
import { SLASH_COMMANDS } from './plugins/slash-command-kit'

const meta = {
  title: 'Components/Editor/SlashCommandMenu',
  component: SlashCommandMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: { type: 'boolean' },
    },
    position: {
      control: { type: 'object' },
    },
    className: {
      control: { type: 'text' },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: '400px', padding: '50px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SlashCommandMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isOpen: true,
    position: { x: 100, y: 100 },
    onClose: () => console.log('Menu closed'),
    onSelect: (command) => console.log('Selected command:', command),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for portal to render
    await new Promise((resolve) => setTimeout(resolve, 100))

    // Check menu is visible
    const menu = document.querySelector('.slash-command-menu')
    expect(menu).toBeInTheDocument()

    // Check search input is focused
    const input = document.querySelector(
      'input[placeholder="Type a command or search..."]'
    )
    expect(input).toHaveFocus()
  },
}

export const WithSearch: Story = {
  args: {
    isOpen: true,
    position: { x: 100, y: 100 },
    onClose: () => console.log('Menu closed'),
    onSelect: (command) => console.log('Selected command:', command),
  },
  play: async ({ canvasElement }) => {
    // Wait for portal to render
    await new Promise((resolve) => setTimeout(resolve, 100))

    // Find and type in search input
    const input = document.querySelector(
      'input[placeholder="Type a command or search..."]'
    ) as HTMLInputElement
    if (input) {
      await userEvent.clear(input)
      await userEvent.type(input, 'heading')

      // Check filtered results
      await new Promise((resolve) => setTimeout(resolve, 100))

      // Verify heading commands are visible
      expect(document.querySelector('.slash-command-menu')).toHaveTextContent(
        'Heading 1'
      )
      expect(document.querySelector('.slash-command-menu')).toHaveTextContent(
        'Heading 2'
      )
      expect(document.querySelector('.slash-command-menu')).toHaveTextContent(
        'Heading 3'
      )
    }
  },
}

export const EmptySearchResults: Story = {
  args: {
    isOpen: true,
    position: { x: 100, y: 100 },
    onClose: () => console.log('Menu closed'),
    onSelect: (command) => console.log('Selected command:', command),
  },
  play: async ({ canvasElement }) => {
    // Wait for portal to render
    await new Promise((resolve) => setTimeout(resolve, 100))

    // Search for non-existent command
    const input = document.querySelector(
      'input[placeholder="Type a command or search..."]'
    ) as HTMLInputElement
    if (input) {
      await userEvent.clear(input)
      await userEvent.type(input, 'nonexistentcommand')

      // Check empty state
      await new Promise((resolve) => setTimeout(resolve, 100))
      expect(document.querySelector('.slash-command-menu')).toHaveTextContent(
        'No commands found.'
      )
    }
  },
}

export const KeyboardNavigation: Story = {
  args: {
    isOpen: true,
    position: { x: 100, y: 100 },
    onClose: () => console.log('Menu closed'),
    onSelect: (command) => console.log('Selected command:', command),
  },
  play: async ({ canvasElement }) => {
    // Wait for portal to render
    await new Promise((resolve) => setTimeout(resolve, 100))

    const input = document.querySelector(
      'input[placeholder="Type a command or search..."]'
    ) as HTMLInputElement
    if (input) {
      // Navigate down
      await userEvent.keyboard('{ArrowDown}')
      await userEvent.keyboard('{ArrowDown}')

      // Navigate up
      await userEvent.keyboard('{ArrowUp}')

      // Press Enter to select
      await userEvent.keyboard('{Enter}')
    }
  },
}

export const DifferentPositions: Story = {
  args: {
    isOpen: true,
    position: { x: 200, y: 150 },
    onClose: () => {},
    onSelect: () => {},
  },
  render: () => {
    const [position, setPosition] = React.useState({ x: 200, y: 150 })
    const [isOpen, setIsOpen] = React.useState(true)

    return (
      <div>
        <div style={{ marginBottom: '20px' }}>
          <button
            onClick={() => setPosition({ x: 50, y: 100 })}
            style={{ marginRight: '10px' }}
          >
            Top Left
          </button>
          <button
            onClick={() => setPosition({ x: 300, y: 100 })}
            style={{ marginRight: '10px' }}
          >
            Top Right
          </button>
          <button
            onClick={() => setPosition({ x: 200, y: 200 })}
            style={{ marginRight: '10px' }}
          >
            Center
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{ marginRight: '10px' }}
          >
            Toggle Menu
          </button>
        </div>

        <SlashCommandMenu
          isOpen={isOpen}
          position={position}
          onClose={() => setIsOpen(false)}
          onSelect={() => {
            setIsOpen(false)
          }}
        />

        <div
          style={{
            position: 'absolute',
            left: position.x - 5,
            top: position.y - 5,
            width: '10px',
            height: '10px',
            backgroundColor: 'red',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />
      </div>
    )
  },
}

export const Playground: Story = {
  args: {
    isOpen: false,
    position: { x: 0, y: 0 },
    onClose: () => {},
    onSelect: () => {},
  },
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [position, setPosition] = React.useState({ x: 0, y: 0 })
    const [selectedCommand, setSelectedCommand] = React.useState<string | null>(
      null
    )

    const handleClick = (e: React.MouseEvent) => {
      const rect = e.currentTarget.getBoundingClientRect()
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top + 10,
      })
      setIsOpen(true)
    }

    return (
      <div>
        <div
          onClick={handleClick}
          style={{
            width: '600px',
            height: '300px',
            border: '2px dashed #ccc',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'text',
            position: 'relative',
            backgroundColor: '#fafafa',
          }}
        >
          <p style={{ color: '#666', userSelect: 'none' }}>
            Click anywhere to open slash command menu
          </p>
        </div>

        {selectedCommand && (
          <div
            style={{
              marginTop: '20px',
              padding: '10px',
              backgroundColor: '#e3f2fd',
              borderRadius: '4px',
            }}
          >
            Last selected command: <strong>{selectedCommand}</strong>
          </div>
        )}

        <SlashCommandMenu
          isOpen={isOpen}
          position={position}
          onClose={() => setIsOpen(false)}
          onSelect={(command) => {
            setSelectedCommand(command.title)
            setIsOpen(false)
          }}
        />
      </div>
    )
  },
}

export const AllCommands: Story = {
  args: {
    isOpen: true,
    position: { x: 100, y: 50 },
    onClose: () => console.log('Menu closed'),
    onSelect: (command) => console.log('Selected command:', command),
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows all available slash commands grouped by category',
      },
    },
  },
}

export const InteractionTest: Story = {
  args: {
    isOpen: true,
    position: { x: 100, y: 100 },
    onClose: () => console.log('Menu closed'),
    onSelect: (command) => console.log('Selected command:', command),
  },
  play: async ({ canvasElement }) => {
    // Wait for portal to render
    await new Promise((resolve) => setTimeout(resolve, 100))

    const menu = document.querySelector('.slash-command-menu')
    expect(menu).toBeInTheDocument()

    // Test search
    const input = document.querySelector(
      'input[placeholder="Type a command or search..."]'
    ) as HTMLInputElement
    if (input) {
      await userEvent.type(input, 'list')

      // Verify list commands are shown
      await new Promise((resolve) => setTimeout(resolve, 100))
      expect(menu).toHaveTextContent('Bulleted list')
      expect(menu).toHaveTextContent('Numbered list')

      // Clear search
      await userEvent.clear(input)
      await userEvent.type(input, 'code')

      // Test escape key
      await userEvent.keyboard('{Escape}')
    }
  },
}
