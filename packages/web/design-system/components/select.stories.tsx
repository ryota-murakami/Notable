import type { Meta, StoryObj } from '@storybook/nextjs'
import * as React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { expect, userEvent, waitFor, within } from '@storybook/test'

const meta = {
  title: 'Design System/Forms/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'Selected value',
    },
    onValueChange: {
      action: 'value-changed',
    },
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: null,
  },
  render: () => (
    <Select>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Select a fruit' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='apple'>Apple</SelectItem>
        <SelectItem value='banana'>Banana</SelectItem>
        <SelectItem value='orange'>Orange</SelectItem>
        <SelectItem value='grape'>Grape</SelectItem>
        <SelectItem value='watermelon'>Watermelon</SelectItem>
      </SelectContent>
    </Select>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByRole('combobox')

    // Test trigger is visible and enabled
    await expect(trigger).toBeVisible()
    await expect(trigger).toBeEnabled()
    await expect(trigger).toHaveTextContent('Select a fruit')

    // Open select dropdown
    await userEvent.click(trigger)

    // Wait for and verify dropdown content
    await waitFor(async () => {
      const appleOption = canvas.getByRole('option', { name: 'Apple' })
      await expect(appleOption).toBeVisible()
    })

    // Select an option
    const bananaOption = canvas.getByRole('option', { name: 'Banana' })
    await userEvent.click(bananaOption)

    // Verify selection
    await expect(trigger).toHaveTextContent('Banana')
  },
}

export const WithLabel: Story = {
  args: {
    children: null,
  },
  render: () => (
    <div className='space-y-2'>
      <Label htmlFor='fruit-select'>Choose a fruit</Label>
      <Select>
        <SelectTrigger id='fruit-select' className='w-[200px]'>
          <SelectValue placeholder='Select a fruit' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='apple'>Apple</SelectItem>
          <SelectItem value='banana'>Banana</SelectItem>
          <SelectItem value='orange'>Orange</SelectItem>
          <SelectItem value='grape'>Grape</SelectItem>
          <SelectItem value='watermelon'>Watermelon</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const Countries: Story = {
  args: {
    children: null,
  },
  render: () => (
    <Select>
      <SelectTrigger className='w-[250px]'>
        <SelectValue placeholder='Select your country' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='us'>United States</SelectItem>
        <SelectItem value='uk'>United Kingdom</SelectItem>
        <SelectItem value='ca'>Canada</SelectItem>
        <SelectItem value='au'>Australia</SelectItem>
        <SelectItem value='de'>Germany</SelectItem>
        <SelectItem value='fr'>France</SelectItem>
        <SelectItem value='jp'>Japan</SelectItem>
        <SelectItem value='cn'>China</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const Controlled: Story = {
  args: {
    children: null,
  },
  render: () => {
    const [value, setValue] = React.useState('')

    return (
      <div className='space-y-4'>
        <Select value={value} onValueChange={setValue}>
          <SelectTrigger className='w-[200px]'>
            <SelectValue placeholder='Select a theme' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='light'>Light</SelectItem>
            <SelectItem value='dark'>Dark</SelectItem>
            <SelectItem value='system'>System</SelectItem>
          </SelectContent>
        </Select>
        <p className='text-sm text-muted-foreground'>
          Selected value: {value || 'none'}
        </p>
        <button
          onClick={() => setValue('dark')}
          className='px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90'
        >
          Set to Dark
        </button>
      </div>
    )
  },
}

export const FormExample: Story = {
  args: {
    children: null,
  },
  render: () => (
    <form className='space-y-6 max-w-md'>
      <div className='space-y-2'>
        <Label htmlFor='name'>Full Name</Label>
        <input
          id='name'
          type='text'
          placeholder='John Doe'
          className='w-full px-3 py-2 border rounded-md'
        />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='role'>Role</Label>
        <Select>
          <SelectTrigger id='role'>
            <SelectValue placeholder='Select your role' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='developer'>Developer</SelectItem>
            <SelectItem value='designer'>Designer</SelectItem>
            <SelectItem value='manager'>Manager</SelectItem>
            <SelectItem value='sales'>Sales</SelectItem>
            <SelectItem value='marketing'>Marketing</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className='space-y-2'>
        <Label htmlFor='experience'>Years of Experience</Label>
        <Select>
          <SelectTrigger id='experience'>
            <SelectValue placeholder='Select experience' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='0-1'>0-1 years</SelectItem>
            <SelectItem value='1-3'>1-3 years</SelectItem>
            <SelectItem value='3-5'>3-5 years</SelectItem>
            <SelectItem value='5-10'>5-10 years</SelectItem>
            <SelectItem value='10+'>10+ years</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <button
        type='submit'
        className='px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90'
      >
        Submit
      </button>
    </form>
  ),
}

export const TimeZoneSelector: Story = {
  args: {
    children: null,
  },
  render: () => (
    <div className='space-y-2'>
      <Label>Time Zone</Label>
      <Select>
        <SelectTrigger className='w-[300px]'>
          <SelectValue placeholder='Select your time zone' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='pst'>Pacific Time (PST)</SelectItem>
          <SelectItem value='mst'>Mountain Time (MST)</SelectItem>
          <SelectItem value='cst'>Central Time (CST)</SelectItem>
          <SelectItem value='est'>Eastern Time (EST)</SelectItem>
          <SelectItem value='gmt'>Greenwich Mean Time (GMT)</SelectItem>
          <SelectItem value='cet'>Central European Time (CET)</SelectItem>
          <SelectItem value='jst'>Japan Standard Time (JST)</SelectItem>
          <SelectItem value='aest'>Australian Eastern Time (AEST)</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const LanguageSelector: Story = {
  args: {
    children: null,
  },
  render: () => (
    <div className='space-y-2'>
      <Label>Language</Label>
      <Select>
        <SelectTrigger className='w-[200px]'>
          <SelectValue placeholder='Select language' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='en'>🇺🇸 English</SelectItem>
          <SelectItem value='es'>🇪🇸 Español</SelectItem>
          <SelectItem value='fr'>🇫🇷 Français</SelectItem>
          <SelectItem value='de'>🇩🇪 Deutsch</SelectItem>
          <SelectItem value='it'>🇮🇹 Italiano</SelectItem>
          <SelectItem value='pt'>🇵🇹 Português</SelectItem>
          <SelectItem value='ja'>🇯🇵 日本語</SelectItem>
          <SelectItem value='ko'>🇰🇷 한국어</SelectItem>
          <SelectItem value='zh'>🇨🇳 中文</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    children: null,
  },
  render: () => (
    <div className='space-y-4'>
      <Select>
        <SelectTrigger className='w-[200px]' disabled>
          <SelectValue placeholder='Disabled select' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='option1'>Option 1</SelectItem>
          <SelectItem value='option2'>Option 2</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const SizingExamples: Story = {
  args: {
    children: null,
  },
  render: () => (
    <div className='space-y-4'>
      <div>
        <Label>Small (w-[150px])</Label>
        <Select>
          <SelectTrigger className='w-[150px]'>
            <SelectValue placeholder='Small' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='1'>Option 1</SelectItem>
            <SelectItem value='2'>Option 2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Medium (w-[250px])</Label>
        <Select>
          <SelectTrigger className='w-[250px]'>
            <SelectValue placeholder='Medium' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='1'>Option 1</SelectItem>
            <SelectItem value='2'>Option 2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Large (w-[350px])</Label>
        <Select>
          <SelectTrigger className='w-[350px]'>
            <SelectValue placeholder='Large' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='1'>Option 1</SelectItem>
            <SelectItem value='2'>Option 2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Full Width</Label>
        <Select>
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='Full width' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='1'>Option 1</SelectItem>
            <SelectItem value='2'>Option 2</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
}

export const ComplexForm: Story = {
  args: {
    children: null,
  },
  render: () => {
    const [country, setCountry] = React.useState('')
    const [state, setState] = React.useState('')

    const states = {
      us: ['California', 'New York', 'Texas', 'Florida'],
      ca: ['Ontario', 'Quebec', 'British Columbia', 'Alberta'],
      uk: ['England', 'Scotland', 'Wales', 'Northern Ireland'],
    }

    return (
      <form className='space-y-4 max-w-md'>
        <div className='space-y-2'>
          <Label htmlFor='country-select'>Country</Label>
          <Select value={country} onValueChange={setCountry}>
            <SelectTrigger id='country-select'>
              <SelectValue placeholder='Select country' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='us'>United States</SelectItem>
              <SelectItem value='ca'>Canada</SelectItem>
              <SelectItem value='uk'>United Kingdom</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {country && states[country as keyof typeof states] && (
          <div className='space-y-2'>
            <Label htmlFor='state-select'>State/Province</Label>
            <Select value={state} onValueChange={setState}>
              <SelectTrigger id='state-select'>
                <SelectValue placeholder='Select state/province' />
              </SelectTrigger>
              <SelectContent>
                {states[country as keyof typeof states].map((s) => (
                  <SelectItem key={s} value={s.toLowerCase()}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        <button
          type='submit'
          className='px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90'
          disabled={!country || !state}
        >
          Submit
        </button>
      </form>
    )
  },
}
