import type { Meta, StoryObj } from '@storybook/nextjs'
import * as React from 'react'
import { CalloutBlock, CalloutElement } from './callout-block'
import { expect, userEvent, within } from '@storybook/test'

const meta = {
  title: 'Components/UI/CalloutBlock',
  component: CalloutBlock,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: { type: 'text' },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CalloutBlock>

export default meta
type Story = StoryObj<typeof meta>

// Mock children for the stories
const MockChildren = ({ text }: { text: string }) => <div>{text}</div>

export const Default: Story = {
  args: {
    attributes: {},
    element: {
      type: 'callout',
      calloutType: 'info',
    },
    children: (
      <MockChildren text='This is an informational callout. It provides helpful information to the reader.' />
    ),
  },
}

export const AllTypes: Story = {
  args: {
    attributes: {},
    element: { type: 'callout' },
    children: null,
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <CalloutBlock
        attributes={{}}
        element={{ type: 'callout', calloutType: 'info' }}
      >
        <MockChildren text='Info: This provides general information or tips.' />
      </CalloutBlock>

      <CalloutBlock
        attributes={{}}
        element={{ type: 'callout', calloutType: 'warning' }}
      >
        <MockChildren text='Warning: This alerts users to potential issues or important considerations.' />
      </CalloutBlock>

      <CalloutBlock
        attributes={{}}
        element={{ type: 'callout', calloutType: 'success' }}
      >
        <MockChildren text='Success: This indicates successful operations or positive outcomes.' />
      </CalloutBlock>

      <CalloutBlock
        attributes={{}}
        element={{ type: 'callout', calloutType: 'error' }}
      >
        <MockChildren text='Error: This highlights errors or critical problems that need attention.' />
      </CalloutBlock>

      <CalloutBlock
        attributes={{}}
        element={{ type: 'callout', calloutType: 'tip' }}
      >
        <MockChildren text='Tip: This provides helpful suggestions or best practices.' />
      </CalloutBlock>

      <CalloutBlock
        attributes={{}}
        element={{ type: 'callout', calloutType: 'note' }}
      >
        <MockChildren text='Note: This adds supplementary information or clarifications.' />
      </CalloutBlock>

      <CalloutBlock
        attributes={{}}
        element={{ type: 'callout', calloutType: 'important' }}
      >
        <MockChildren text="Important: This emphasizes crucial information that shouldn't be missed." />
      </CalloutBlock>

      <CalloutBlock
        attributes={{}}
        element={{ type: 'callout', calloutType: 'quote' }}
      >
        <MockChildren text='Quote: This formats content as a notable quote or excerpt.' />
      </CalloutBlock>
    </div>
  ),
}

export const WithLongContent: Story = {
  args: {
    attributes: {},
    element: {
      type: 'callout',
      calloutType: 'tip',
    },
    children: (
      <div>
        <p>This is a tip with multiple paragraphs of content.</p>
        <p>
          You can include multiple lines and even formatted text within a
          callout block. This makes it perfect for providing detailed
          explanations or multi-step instructions.
        </p>
        <p>
          The callout will expand to accommodate all the content while
          maintaining proper spacing and readability.
        </p>
      </div>
    ),
  },
}

export const Interactive: Story = {
  args: {
    attributes: {},
    element: {
      type: 'callout',
      calloutType: 'info',
    },
    children: (
      <MockChildren text='Try changing the callout type using the dropdown, or click the icon to toggle between emoji and icon display.' />
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Find the type selector dropdown
    const typeSelector = canvas.getByRole('combobox')
    await expect(typeSelector).toBeVisible()

    // Change to warning type
    await userEvent.selectOptions(typeSelector, 'warning')

    // Toggle emoji/icon
    const toggleButton = canvas.getByTitle('Toggle between emoji and icon')
    await userEvent.click(toggleButton)

    // Click again to toggle back
    await userEvent.click(toggleButton)
  },
}

export const CustomStyling: Story = {
  args: {
    attributes: {},
    element: {
      type: 'callout',
      calloutType: 'note',
    },
    className: 'shadow-lg',
    children: (
      <MockChildren text='This callout has custom styling applied through the className prop.' />
    ),
  },
}

export const Playground: Story = {
  args: {
    attributes: {},
    element: { type: 'callout' },
    children: null,
  },
  render: () => {
    const [selectedType, setSelectedType] = React.useState<string>('info')
    const [showEmoji, setShowEmoji] = React.useState(true)

    return (
      <div>
        <div
          style={{
            marginBottom: '30px',
            padding: '20px',
            backgroundColor: '#f3f4f6',
            borderRadius: '8px',
          }}
        >
          <h3 style={{ marginTop: 0 }}>Callout Configuration</h3>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <label>
              Type:
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                style={{ marginLeft: '10px', padding: '5px' }}
              >
                <option value='info'>Info</option>
                <option value='warning'>Warning</option>
                <option value='success'>Success</option>
                <option value='error'>Error</option>
                <option value='tip'>Tip</option>
                <option value='note'>Note</option>
                <option value='important'>Important</option>
                <option value='quote'>Quote</option>
              </select>
            </label>

            <label>
              <input
                type='checkbox'
                checked={showEmoji}
                onChange={(e) => setShowEmoji(e.target.checked)}
              />{' '}
              Show Emoji (vs Icon)
            </label>
          </div>
        </div>

        <CalloutBlock
          attributes={{}}
          element={{
            type: 'callout',
            calloutType: selectedType as any,
            emoji: showEmoji ? undefined : '🚀',
          }}
        >
          <div>
            <p style={{ margin: 0 }}>
              This is a <strong>{selectedType}</strong> callout block. It's
              currently displaying with {showEmoji ? 'emoji' : 'icon'}.
            </p>
            <p style={{ margin: '10px 0 0 0' }}>
              Callout blocks are great for highlighting important information,
              warnings, tips, or any content that needs special attention.
            </p>
          </div>
        </CalloutBlock>
      </div>
    )
  },
}

export const NestedContent: Story = {
  args: {
    attributes: {},
    element: {
      type: 'callout',
      calloutType: 'important',
    },
    children: (
      <div>
        <h4 style={{ marginTop: 0 }}>Important Information</h4>
        <ul>
          <li>First important point</li>
          <li>Second important point</li>
          <li>
            Third important point with <code>inline code</code>
          </li>
        </ul>
        <p>Additional context can be provided below the list.</p>
      </div>
    ),
  },
}

export const CalloutElementWrapper: Story = {
  name: 'CalloutElement (Wrapper)',
  args: {
    attributes: {},
    element: { type: 'callout' },
    children: null,
  },
  render: () => (
    <CalloutElement
      attributes={{}}
      element={{ type: 'callout', calloutType: 'tip' }}
    >
      <MockChildren text='This uses the CalloutElement wrapper component, which is the same as CalloutBlock.' />
    </CalloutElement>
  ),
}
