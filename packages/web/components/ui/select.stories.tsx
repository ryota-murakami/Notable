import type { Meta, StoryObj } from '@storybook/nextjs'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from './select'
import { expect, userEvent, within } from '@storybook/test'
import * as React from 'react'

const meta: Meta<typeof Select> = {
  title: 'Components/UI/Select',
  component: Select,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A custom select component built on Radix UI. Provides a fully accessible dropdown with search, groups, and keyboard navigation.',
      },
    },
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'The controlled selected value',
    },
  },
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {
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
}

export const WithGroups: Story = {
  render: () => (
    <Select>
      <SelectTrigger className='w-[280px]'>
        <SelectValue placeholder='Select a timezone' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>North America</SelectLabel>
          <SelectItem value='est'>Eastern Standard Time (EST)</SelectItem>
          <SelectItem value='cst'>Central Standard Time (CST)</SelectItem>
          <SelectItem value='mst'>Mountain Standard Time (MST)</SelectItem>
          <SelectItem value='pst'>Pacific Standard Time (PST)</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Europe</SelectLabel>
          <SelectItem value='gmt'>Greenwich Mean Time (GMT)</SelectItem>
          <SelectItem value='cet'>Central European Time (CET)</SelectItem>
          <SelectItem value='eet'>Eastern European Time (EET)</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Asia</SelectLabel>
          <SelectItem value='jst'>Japan Standard Time (JST)</SelectItem>
          <SelectItem value='cst-china'>China Standard Time (CST)</SelectItem>
          <SelectItem value='ist'>India Standard Time (IST)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

export const WithDefaultValue: Story = {
  render: () => (
    <Select>
      <SelectTrigger className='w-[180px]'>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='small'>Small</SelectItem>
        <SelectItem value='medium'>Medium</SelectItem>
        <SelectItem value='large'>Large</SelectItem>
        <SelectItem value='extra-large'>Extra Large</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className='flex gap-4'>
      <Select>
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='Disabled' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='option1'>Option 1</SelectItem>
          <SelectItem value='option2'>Option 2</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className='w-[180px]'>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='selected'>Selected Option</SelectItem>
          <SelectItem value='other'>Other Option</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

function ControlledSelect() {
  const [value, setValue] = React.useState('')

  return (
    <div className='space-y-4'>
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger className='w-[200px]'>
          <SelectValue placeholder='Select a color' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='red'>Red</SelectItem>
          <SelectItem value='green'>Green</SelectItem>
          <SelectItem value='blue'>Blue</SelectItem>
          <SelectItem value='yellow'>Yellow</SelectItem>
          <SelectItem value='purple'>Purple</SelectItem>
        </SelectContent>
      </Select>
      <div className='flex gap-2'>
        <button
          onClick={() => setValue('red')}
          className='px-3 py-1 text-sm border rounded'
        >
          Set Red
        </button>
        <button
          onClick={() => setValue('blue')}
          className='px-3 py-1 text-sm border rounded'
        >
          Set Blue
        </button>
        <button
          onClick={() => setValue('')}
          className='px-3 py-1 text-sm border rounded'
        >
          Clear
        </button>
      </div>
      {value && (
        <p className='text-sm text-muted-foreground'>
          Selected color: <strong>{value}</strong>
        </p>
      )}
    </div>
  )
}

export const Controlled: Story = {
  render: () => <ControlledSelect />,
}

export const InForm: Story = {
  render: () => (
    <form className='space-y-6' onSubmit={(e) => e.preventDefault()}>
      <div className='space-y-2'>
        <label htmlFor='country' className='text-sm font-medium'>
          Country
        </label>
        <Select>
          <SelectTrigger id='country'>
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
          </SelectContent>
        </Select>
      </div>
      <div className='space-y-2'>
        <label htmlFor='language' className='text-sm font-medium'>
          Preferred Language
        </label>
        <Select>
          <SelectTrigger id='language'>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='en'>English</SelectItem>
            <SelectItem value='es'>Spanish</SelectItem>
            <SelectItem value='fr'>French</SelectItem>
            <SelectItem value='de'>German</SelectItem>
            <SelectItem value='zh'>Chinese</SelectItem>
            <SelectItem value='ja'>Japanese</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <button
        type='submit'
        className='px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90'
      >
        Save Preferences
      </button>
    </form>
  ),
}

export const LongList: Story = {
  render: () => (
    <Select>
      <SelectTrigger className='w-[200px]'>
        <SelectValue placeholder='Select a US state' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='al'>Alabama</SelectItem>
        <SelectItem value='ak'>Alaska</SelectItem>
        <SelectItem value='az'>Arizona</SelectItem>
        <SelectItem value='ar'>Arkansas</SelectItem>
        <SelectItem value='ca'>California</SelectItem>
        <SelectItem value='co'>Colorado</SelectItem>
        <SelectItem value='ct'>Connecticut</SelectItem>
        <SelectItem value='de'>Delaware</SelectItem>
        <SelectItem value='fl'>Florida</SelectItem>
        <SelectItem value='ga'>Georgia</SelectItem>
        <SelectItem value='hi'>Hawaii</SelectItem>
        <SelectItem value='id'>Idaho</SelectItem>
        <SelectItem value='il'>Illinois</SelectItem>
        <SelectItem value='in'>Indiana</SelectItem>
        <SelectItem value='ia'>Iowa</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <Select>
      <SelectTrigger className='w-[250px]'>
        <SelectValue placeholder='Select a status' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='active'>
          <div className='flex items-center'>
            <div className='mr-2 h-2 w-2 rounded-full bg-green-500' />
            Active
          </div>
        </SelectItem>
        <SelectItem value='paused'>
          <div className='flex items-center'>
            <div className='mr-2 h-2 w-2 rounded-full bg-yellow-500' />
            Paused
          </div>
        </SelectItem>
        <SelectItem value='inactive'>
          <div className='flex items-center'>
            <div className='mr-2 h-2 w-2 rounded-full bg-gray-500' />
            Inactive
          </div>
        </SelectItem>
        <SelectItem value='error'>
          <div className='flex items-center'>
            <div className='mr-2 h-2 w-2 rounded-full bg-red-500' />
            Error
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const MultipleSelects: Story = {
  render: () => {
    const [fontSize, setFontSize] = React.useState('16')
    const [fontFamily, setFontFamily] = React.useState('inter')
    const [theme, setTheme] = React.useState('light')

    return (
      <div className='space-y-6'>
        <div className='flex gap-4'>
          <Select value={fontSize} onValueChange={setFontSize}>
            <SelectTrigger className='w-[120px]'>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectLabel>Font Size</SelectLabel>
              <SelectItem value='12'>12px</SelectItem>
              <SelectItem value='14'>14px</SelectItem>
              <SelectItem value='16'>16px</SelectItem>
              <SelectItem value='18'>18px</SelectItem>
              <SelectItem value='20'>20px</SelectItem>
              <SelectItem value='24'>24px</SelectItem>
            </SelectContent>
          </Select>

          <Select value={fontFamily} onValueChange={setFontFamily}>
            <SelectTrigger className='w-[180px]'>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectLabel>Font Family</SelectLabel>
              <SelectItem value='inter'>Inter</SelectItem>
              <SelectItem value='roboto'>Roboto</SelectItem>
              <SelectItem value='opensans'>Open Sans</SelectItem>
              <SelectItem value='lato'>Lato</SelectItem>
              <SelectItem value='poppins'>Poppins</SelectItem>
            </SelectContent>
          </Select>

          <Select value={theme} onValueChange={setTheme}>
            <SelectTrigger className='w-[120px]'>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectLabel>Theme</SelectLabel>
              <SelectItem value='light'>Light</SelectItem>
              <SelectItem value='dark'>Dark</SelectItem>
              <SelectItem value='system'>System</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div
          className='p-6 rounded-lg border'
          style={{
            fontSize: `${fontSize}px`,
            fontFamily:
              fontFamily === 'inter' ? 'Inter, sans-serif' : fontFamily,
            backgroundColor: theme === 'dark' ? '#1a1a1a' : '#ffffff',
            color: theme === 'dark' ? '#ffffff' : '#000000',
          }}
        >
          <p>
            This text updates based on your selections above. Try changing the
            font size, font family, and theme to see the preview update in real
            time.
          </p>
        </div>
      </div>
    )
  },
}

export const CustomWidth: Story = {
  render: () => (
    <div className='space-y-4'>
      <Select>
        <SelectTrigger className='w-[100px]'>
          <SelectValue placeholder='Small' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='1'>One</SelectItem>
          <SelectItem value='2'>Two</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className='w-[200px]'>
          <SelectValue placeholder='Medium width select' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='option1'>Option 1</SelectItem>
          <SelectItem value='option2'>Option 2</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className='w-full max-w-md'>
          <SelectValue placeholder='Full width select' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='option1'>Option 1</SelectItem>
          <SelectItem value='option2'>Option 2</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const InteractionTest: Story = {
  render: () => (
    <Select>
      <SelectTrigger className='w-[200px]'>
        <SelectValue placeholder='Select an option' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='first'>First Option</SelectItem>
        <SelectItem value='second'>Second Option</SelectItem>
        <SelectItem value='third'>Third Option</SelectItem>
      </SelectContent>
    </Select>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Click to open select
    const trigger = canvas.getByRole('combobox')
    await userEvent.click(trigger)

    // Wait for content to appear
    await new Promise((resolve) => setTimeout(resolve, 100))

    // Check if options are visible
    const firstOption = canvas.getByText('First Option')
    await expect(firstOption).toBeVisible()
  },
}
