import type { Meta, StoryObj } from '@storybook/nextjs'
import { PluginManagementPanel } from './plugin-management-panel'

const meta: Meta<typeof PluginManagementPanel> = {
  title: 'Plugins/PluginManagementPanel',
  component: PluginManagementPanel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Plugin Management Panel

A comprehensive interface for managing Notable plugins with features:

## Features
- **Plugin Overview**: View all installed plugins with status indicators
- **Marketplace**: Browse and install available plugins  
- **Search & Filter**: Find plugins by name, description, or category
- **Permission Management**: Review plugin permissions and security
- **Settings**: Configure plugin system behavior and limits
- **Real-time Stats**: Monitor plugin system health and usage

## Usage
The panel integrates with Notable's plugin system and provides a user-friendly
interface for plugin lifecycle management. It supports both installed plugin
management and marketplace discovery.

## Plugin States
- **Active**: Plugin is installed and running
- **Inactive**: Plugin is installed but disabled
- **Error**: Plugin encountered an error
- **Loading**: Plugin is being processed

## Security
All plugins are sandboxed with permission-based access control. Users can
review required permissions before installation and manage plugin access.
        `,
      },
    },
  },
  argTypes: {
    open: { control: 'boolean' },
    onOpenChange: { action: 'onOpenChange' },
  },
}

export default meta
type Story = StoryObj<typeof PluginManagementPanel>

export const Default: Story = {
  args: {
    open: true,
    onOpenChange: () => {},
  },
}

export const Closed: Story = {
  args: {
    open: false,
    onOpenChange: () => {},
  },
}

// Interactive demo with state management
export const Interactive: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(false)

    return (
      <div>
        <button
          onClick={() => setOpen(true)}
          className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
        >
          Open Plugin Manager
        </button>
        <PluginManagementPanel {...args} open={open} onOpenChange={setOpen} />
      </div>
    )
  },
  args: {
    open: false,
    onOpenChange: () => {},
  },
}

export const WithCustomClass: Story = {
  args: {
    open: true,
    onOpenChange: () => {},
    className: 'border-2 border-blue-500',
  },
}

// Import React for the Interactive story
import React from 'react'
