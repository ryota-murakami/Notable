import type { Meta, StoryObj } from '@storybook/nextjs'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs'
import { expect, userEvent, within } from '@storybook/test'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './card'
import { Label } from './label'
import { Input } from './input'
import { Button } from './button'
import * as React from 'react'

const meta: Meta<typeof Tabs> = {
  title: 'Components/UI/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A set of layered sections of content (tab panels) that are displayed one at a time. Built on Radix UI Tabs for full keyboard navigation support.',
      },
    },
  },
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'The value of the tab that should be active by default',
    },
    value: {
      control: 'text',
      description: 'The controlled value of the active tab',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the tabs',
    },
  },
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue='account' className='w-[400px]'>
      <TabsList>
        <TabsTrigger value='account'>Account</TabsTrigger>
        <TabsTrigger value='password'>Password</TabsTrigger>
      </TabsList>
      <TabsContent value='account'>
        <p className='text-sm text-muted-foreground'>
          Make changes to your account here. Click save when you're done.
        </p>
      </TabsContent>
      <TabsContent value='password'>
        <p className='text-sm text-muted-foreground'>
          Change your password here. After saving, you'll be logged out.
        </p>
      </TabsContent>
    </Tabs>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Check initial state
    const accountTab = canvas.getByRole('tab', { name: 'Account' })
    await expect(accountTab).toHaveAttribute('data-state', 'active')

    // Click password tab
    const passwordTab = canvas.getByRole('tab', { name: 'Password' })
    await userEvent.click(passwordTab)
    await expect(passwordTab).toHaveAttribute('data-state', 'active')
    await expect(accountTab).toHaveAttribute('data-state', 'inactive')
  },
}

export const WithCards: Story = {
  render: () => (
    <Tabs defaultValue='account' className='w-[600px]'>
      <TabsList className='grid w-full grid-cols-2'>
        <TabsTrigger value='account'>Account</TabsTrigger>
        <TabsTrigger value='password'>Password</TabsTrigger>
      </TabsList>
      <TabsContent value='account'>
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-2'>
            <div className='space-y-1'>
              <Label htmlFor='name'>Name</Label>
              <Input id='name' defaultValue='Pedro Duarte' />
            </div>
            <div className='space-y-1'>
              <Label htmlFor='username'>Username</Label>
              <Input id='username' defaultValue='@peduarte' />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value='password'>
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-2'>
            <div className='space-y-1'>
              <Label htmlFor='current'>Current password</Label>
              <Input id='current' type='password' />
            </div>
            <div className='space-y-1'>
              <Label htmlFor='new'>New password</Label>
              <Input id='new' type='password' />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
}

export const MultipleTabs: Story = {
  render: () => (
    <Tabs defaultValue='overview' className='w-[700px]'>
      <TabsList>
        <TabsTrigger value='overview'>Overview</TabsTrigger>
        <TabsTrigger value='analytics'>Analytics</TabsTrigger>
        <TabsTrigger value='reports'>Reports</TabsTrigger>
        <TabsTrigger value='notifications'>Notifications</TabsTrigger>
        <TabsTrigger value='settings'>Settings</TabsTrigger>
      </TabsList>
      <TabsContent value='overview' className='space-y-4'>
        <h3 className='text-lg font-medium'>Overview</h3>
        <p className='text-sm text-muted-foreground'>
          Welcome to your dashboard. Here's a summary of your recent activity.
        </p>
      </TabsContent>
      <TabsContent value='analytics' className='space-y-4'>
        <h3 className='text-lg font-medium'>Analytics</h3>
        <p className='text-sm text-muted-foreground'>
          View detailed analytics and insights about your performance.
        </p>
      </TabsContent>
      <TabsContent value='reports' className='space-y-4'>
        <h3 className='text-lg font-medium'>Reports</h3>
        <p className='text-sm text-muted-foreground'>
          Generate and download custom reports for your data.
        </p>
      </TabsContent>
      <TabsContent value='notifications' className='space-y-4'>
        <h3 className='text-lg font-medium'>Notifications</h3>
        <p className='text-sm text-muted-foreground'>
          Manage your notification preferences and alert settings.
        </p>
      </TabsContent>
      <TabsContent value='settings' className='space-y-4'>
        <h3 className='text-lg font-medium'>Settings</h3>
        <p className='text-sm text-muted-foreground'>
          Configure your account settings and preferences.
        </p>
      </TabsContent>
    </Tabs>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Tabs defaultValue='account' className='w-[400px]'>
      <TabsList>
        <TabsTrigger value='account'>Account</TabsTrigger>
        <TabsTrigger value='password'>Password</TabsTrigger>
        <TabsTrigger value='team' disabled>
          Team (Pro only)
        </TabsTrigger>
      </TabsList>
      <TabsContent value='account'>
        <p className='text-sm text-muted-foreground'>
          Account settings content.
        </p>
      </TabsContent>
      <TabsContent value='password'>
        <p className='text-sm text-muted-foreground'>
          Password settings content.
        </p>
      </TabsContent>
    </Tabs>
  ),
}

function ControlledTabs() {
  const [activeTab, setActiveTab] = React.useState('tab1')

  return (
    <div className='space-y-4'>
      <div className='flex gap-2'>
        <Button
          variant='outline'
          size='sm'
          onClick={() => setActiveTab('tab1')}
        >
          Go to Tab 1
        </Button>
        <Button
          variant='outline'
          size='sm'
          onClick={() => setActiveTab('tab2')}
        >
          Go to Tab 2
        </Button>
        <Button
          variant='outline'
          size='sm'
          onClick={() => setActiveTab('tab3')}
        >
          Go to Tab 3
        </Button>
      </div>
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className='w-[400px]'
      >
        <TabsList>
          <TabsTrigger value='tab1'>Tab 1</TabsTrigger>
          <TabsTrigger value='tab2'>Tab 2</TabsTrigger>
          <TabsTrigger value='tab3'>Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value='tab1'>
          <p>Content for Tab 1</p>
        </TabsContent>
        <TabsContent value='tab2'>
          <p>Content for Tab 2</p>
        </TabsContent>
        <TabsContent value='tab3'>
          <p>Content for Tab 3</p>
        </TabsContent>
      </Tabs>
      <p className='text-sm text-muted-foreground'>
        Active tab: <strong>{activeTab}</strong>
      </p>
    </div>
  )
}

export const Controlled: Story = {
  render: () => <ControlledTabs />,
}

export const VerticalOrientation: Story = {
  render: () => (
    <Tabs
      defaultValue='account'
      orientation='vertical'
      className='flex gap-4 w-[600px]'
    >
      <TabsList className='flex-col h-auto'>
        <TabsTrigger value='account' className='w-full justify-start'>
          Account
        </TabsTrigger>
        <TabsTrigger value='password' className='w-full justify-start'>
          Password
        </TabsTrigger>
        <TabsTrigger value='appearance' className='w-full justify-start'>
          Appearance
        </TabsTrigger>
        <TabsTrigger value='notifications' className='w-full justify-start'>
          Notifications
        </TabsTrigger>
      </TabsList>
      <div className='flex-1'>
        <TabsContent value='account'>
          <h3 className='mb-4 text-lg font-medium'>Account Settings</h3>
          <p className='text-sm text-muted-foreground'>
            Manage your account details and preferences.
          </p>
        </TabsContent>
        <TabsContent value='password'>
          <h3 className='mb-4 text-lg font-medium'>Password & Security</h3>
          <p className='text-sm text-muted-foreground'>
            Update your password and security settings.
          </p>
        </TabsContent>
        <TabsContent value='appearance'>
          <h3 className='mb-4 text-lg font-medium'>Appearance</h3>
          <p className='text-sm text-muted-foreground'>
            Customize how the app looks and feels.
          </p>
        </TabsContent>
        <TabsContent value='notifications'>
          <h3 className='mb-4 text-lg font-medium'>Notifications</h3>
          <p className='text-sm text-muted-foreground'>
            Choose what notifications you want to receive.
          </p>
        </TabsContent>
      </div>
    </Tabs>
  ),
}

export const WithBadges: Story = {
  render: () => (
    <Tabs defaultValue='inbox' className='w-[500px]'>
      <TabsList>
        <TabsTrigger value='inbox' className='relative'>
          Inbox
          <span className='ml-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground'>
            3
          </span>
        </TabsTrigger>
        <TabsTrigger value='sent'>Sent</TabsTrigger>
        <TabsTrigger value='drafts' className='relative'>
          Drafts
          <span className='ml-2 rounded-full bg-muted px-2 py-0.5 text-xs'>
            12
          </span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value='inbox'>
        <div className='space-y-2'>
          <p className='font-medium'>3 new messages</p>
          <p className='text-sm text-muted-foreground'>
            You have unread messages in your inbox.
          </p>
        </div>
      </TabsContent>
      <TabsContent value='sent'>
        <p className='text-sm text-muted-foreground'>
          Messages you've sent will appear here.
        </p>
      </TabsContent>
      <TabsContent value='drafts'>
        <div className='space-y-2'>
          <p className='font-medium'>12 draft messages</p>
          <p className='text-sm text-muted-foreground'>
            Continue working on your unsent messages.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}

export const CustomStyling: Story = {
  render: () => (
    <Tabs defaultValue='tab1' className='w-[500px]'>
      <TabsList className='bg-primary/10'>
        <TabsTrigger
          value='tab1'
          className='data-[state=active]:bg-primary data-[state=active]:text-primary-foreground'
        >
          Custom Tab 1
        </TabsTrigger>
        <TabsTrigger
          value='tab2'
          className='data-[state=active]:bg-primary data-[state=active]:text-primary-foreground'
        >
          Custom Tab 2
        </TabsTrigger>
        <TabsTrigger
          value='tab3'
          className='data-[state=active]:bg-primary data-[state=active]:text-primary-foreground'
        >
          Custom Tab 3
        </TabsTrigger>
      </TabsList>
      <TabsContent value='tab1' className='mt-6'>
        <p>Custom styled tab content 1</p>
      </TabsContent>
      <TabsContent value='tab2' className='mt-6'>
        <p>Custom styled tab content 2</p>
      </TabsContent>
      <TabsContent value='tab3' className='mt-6'>
        <p>Custom styled tab content 3</p>
      </TabsContent>
    </Tabs>
  ),
}

export const FullWidthTabs: Story = {
  render: () => (
    <Tabs defaultValue='profile' className='w-full max-w-3xl'>
      <TabsList className='grid w-full grid-cols-4'>
        <TabsTrigger value='profile'>Profile</TabsTrigger>
        <TabsTrigger value='settings'>Settings</TabsTrigger>
        <TabsTrigger value='billing'>Billing</TabsTrigger>
        <TabsTrigger value='team'>Team</TabsTrigger>
      </TabsList>
      <TabsContent value='profile' className='mt-6'>
        <h3 className='text-lg font-medium'>Profile Information</h3>
        <p className='text-sm text-muted-foreground'>
          Update your profile details and public information.
        </p>
      </TabsContent>
      <TabsContent value='settings' className='mt-6'>
        <h3 className='text-lg font-medium'>Settings</h3>
        <p className='text-sm text-muted-foreground'>
          Manage your application preferences and configuration.
        </p>
      </TabsContent>
      <TabsContent value='billing' className='mt-6'>
        <h3 className='text-lg font-medium'>Billing</h3>
        <p className='text-sm text-muted-foreground'>
          View and manage your subscription and payment methods.
        </p>
      </TabsContent>
      <TabsContent value='team' className='mt-6'>
        <h3 className='text-lg font-medium'>Team Members</h3>
        <p className='text-sm text-muted-foreground'>
          Invite and manage team members and their permissions.
        </p>
      </TabsContent>
    </Tabs>
  ),
}

export const InteractionTest: Story = {
  render: () => (
    <Tabs defaultValue='first' className='w-[400px]'>
      <TabsList>
        <TabsTrigger value='first'>First</TabsTrigger>
        <TabsTrigger value='second'>Second</TabsTrigger>
        <TabsTrigger value='third'>Third</TabsTrigger>
      </TabsList>
      <TabsContent value='first'>First tab content</TabsContent>
      <TabsContent value='second'>Second tab content</TabsContent>
      <TabsContent value='third'>Third tab content</TabsContent>
    </Tabs>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Test keyboard navigation
    const firstTab = canvas.getByRole('tab', { name: 'First' })
    await userEvent.click(firstTab)

    // Arrow right
    await userEvent.keyboard('{ArrowRight}')
    const secondTab = canvas.getByRole('tab', { name: 'Second' })
    await expect(secondTab).toHaveAttribute('data-state', 'active')

    // Arrow right again
    await userEvent.keyboard('{ArrowRight}')
    const thirdTab = canvas.getByRole('tab', { name: 'Third' })
    await expect(thirdTab).toHaveAttribute('data-state', 'active')

    // Arrow left
    await userEvent.keyboard('{ArrowLeft}')
    await expect(secondTab).toHaveAttribute('data-state', 'active')
  },
}
