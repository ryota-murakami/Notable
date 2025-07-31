import type { Meta, StoryObj } from '@storybook/nextjs'
import { BacklinksPanel } from './backlinks-panel'

const meta: Meta<typeof BacklinksPanel> = {
  title: 'Components/BacklinksPanel',
  component: BacklinksPanel,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A panel that displays bidirectional links (backlinks and outgoing links) for a note, helping users navigate related content.',
      },
    },
  },
  argTypes: {
    noteId: {
      control: 'text',
      description: 'The ID of the note to show links for',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof BacklinksPanel>

export const Default: Story = {
  args: {
    noteId: 'note-1',
  },
}

export const WithCustomClassName: Story = {
  args: {
    noteId: 'note-1',
    className: 'max-w-sm border-2 border-primary',
  },
}

export const DifferentNote: Story = {
  args: {
    noteId: 'note-2',
  },
}
