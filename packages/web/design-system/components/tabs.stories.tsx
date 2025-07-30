import type { Meta, StoryObj } from '@storybook/nextjs'
import * as React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Design System/Navigation/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'Default active tab value',
    },
    value: {
      control: 'text',
      description: 'Controlled active tab value',
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'Tabs orientation',
    },
    onValueChange: {
      action: 'value-changed',
    },
  },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: () => (
    <Tabs defaultValue='tab1' className='w-[400px]'>
      <TabsList>
        <TabsTrigger value='tab1'>Tab 1</TabsTrigger>
        <TabsTrigger value='tab2'>Tab 2</TabsTrigger>
        <TabsTrigger value='tab3'>Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value='tab1'>
        <p>Content for tab 1</p>
      </TabsContent>
      <TabsContent value='tab2'>
        <p>Content for tab 2</p>
      </TabsContent>
      <TabsContent value='tab3'>
        <p>Content for tab 3</p>
      </TabsContent>
    </Tabs>
  ),
}

export const AccountSettings: Story = {
  args: {},
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
              Make changes to your account here. Click save when you&apos;re
              done.
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-2'>
            <div className='space-y-1'>
              <Label htmlFor='name'>Name</Label>
              <Input id='name' defaultValue='John Doe' />
            </div>
            <div className='space-y-1'>
              <Label htmlFor='username'>Username</Label>
              <Input id='username' defaultValue='@johndoe' />
            </div>
            <Button>Save changes</Button>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value='password'>
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you&apos;ll be logged
              out.
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
            <Button>Save password</Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
}

export const WithIcons: Story = {
  args: {},
  render: () => (
    <Tabs defaultValue='overview' className='w-[600px]'>
      <TabsList>
        <TabsTrigger value='overview'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='mr-2'
          >
            <rect width='7' height='9' x='3' y='3' rx='1' />
            <rect width='7' height='5' x='14' y='3' rx='1' />
            <rect width='7' height='9' x='14' y='12' rx='1' />
            <rect width='7' height='5' x='3' y='16' rx='1' />
          </svg>
          Overview
        </TabsTrigger>
        <TabsTrigger value='analytics'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='mr-2'
          >
            <path d='M3 3v18h18' />
            <path d='m19 9-5 5-4-4-3 3' />
          </svg>
          Analytics
        </TabsTrigger>
        <TabsTrigger value='reports'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='mr-2'
          >
            <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' />
            <polyline points='14 2 14 8 20 8' />
            <line x1='16' x2='8' y1='13' y2='13' />
            <line x1='16' x2='8' y1='17' y2='17' />
            <polyline points='10 9 9 9 8 9' />
          </svg>
          Reports
        </TabsTrigger>
      </TabsList>
      <TabsContent value='overview' className='space-y-4'>
        <div>
          <h3 className='text-lg font-medium'>Overview</h3>
          <p className='text-sm text-muted-foreground'>
            Your business metrics and KPIs at a glance.
          </p>
        </div>
      </TabsContent>
      <TabsContent value='analytics' className='space-y-4'>
        <div>
          <h3 className='text-lg font-medium'>Analytics</h3>
          <p className='text-sm text-muted-foreground'>
            Detailed analytics and performance metrics.
          </p>
        </div>
      </TabsContent>
      <TabsContent value='reports' className='space-y-4'>
        <div>
          <h3 className='text-lg font-medium'>Reports</h3>
          <p className='text-sm text-muted-foreground'>
            Generate and download custom reports.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}

export const Disabled: Story = {
  args: {},
  render: () => (
    <Tabs defaultValue='tab1' className='w-[400px]'>
      <TabsList>
        <TabsTrigger value='tab1'>Available</TabsTrigger>
        <TabsTrigger value='tab2' disabled>
          Disabled
        </TabsTrigger>
        <TabsTrigger value='tab3'>Also Available</TabsTrigger>
      </TabsList>
      <TabsContent value='tab1'>
        <p>This tab is available</p>
      </TabsContent>
      <TabsContent value='tab2'>
        <p>This content won&apos;t be shown</p>
      </TabsContent>
      <TabsContent value='tab3'>
        <p>This tab is also available</p>
      </TabsContent>
    </Tabs>
  ),
}

export const Controlled: Story = {
  args: {},
  render: () => {
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
            <p>Current tab: {activeTab}</p>
          </TabsContent>
          <TabsContent value='tab2'>
            <p>Current tab: {activeTab}</p>
          </TabsContent>
          <TabsContent value='tab3'>
            <p>Current tab: {activeTab}</p>
          </TabsContent>
        </Tabs>
      </div>
    )
  },
}

export const FullWidth: Story = {
  args: {},
  render: () => (
    <Tabs defaultValue='overview' className='w-full'>
      <TabsList className='grid w-full grid-cols-4'>
        <TabsTrigger value='overview'>Overview</TabsTrigger>
        <TabsTrigger value='analytics'>Analytics</TabsTrigger>
        <TabsTrigger value='reports'>Reports</TabsTrigger>
        <TabsTrigger value='notifications'>Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value='overview'>
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Overview content goes here.</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value='analytics'>
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Analytics content goes here.</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value='reports'>
        <Card>
          <CardHeader>
            <CardTitle>Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Reports content goes here.</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value='notifications'>
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Notifications content goes here.</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
}

export const NestedTabs: Story = {
  args: {},
  render: () => (
    <Tabs defaultValue='settings' className='w-[600px]'>
      <TabsList>
        <TabsTrigger value='settings'>Settings</TabsTrigger>
        <TabsTrigger value='preferences'>Preferences</TabsTrigger>
      </TabsList>
      <TabsContent value='settings' className='space-y-4'>
        <h3 className='text-lg font-medium'>Settings</h3>
        <Tabs defaultValue='general' className='w-full'>
          <TabsList>
            <TabsTrigger value='general'>General</TabsTrigger>
            <TabsTrigger value='security'>Security</TabsTrigger>
            <TabsTrigger value='privacy'>Privacy</TabsTrigger>
          </TabsList>
          <TabsContent value='general' className='space-y-2'>
            <p className='text-sm text-muted-foreground'>
              General settings content
            </p>
          </TabsContent>
          <TabsContent value='security' className='space-y-2'>
            <p className='text-sm text-muted-foreground'>
              Security settings content
            </p>
          </TabsContent>
          <TabsContent value='privacy' className='space-y-2'>
            <p className='text-sm text-muted-foreground'>
              Privacy settings content
            </p>
          </TabsContent>
        </Tabs>
      </TabsContent>
      <TabsContent value='preferences' className='space-y-4'>
        <h3 className='text-lg font-medium'>Preferences</h3>
        <p className='text-sm text-muted-foreground'>
          User preferences content
        </p>
      </TabsContent>
    </Tabs>
  ),
}

export const WithBadges: Story = {
  args: {},
  render: () => (
    <Tabs defaultValue='inbox' className='w-[500px]'>
      <TabsList>
        <TabsTrigger value='inbox' className='relative'>
          Inbox
          <span className='ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-destructive text-[10px] font-medium text-destructive-foreground'>
            3
          </span>
        </TabsTrigger>
        <TabsTrigger value='sent'>Sent</TabsTrigger>
        <TabsTrigger value='drafts' className='relative'>
          Drafts
          <span className='ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-muted-foreground text-[10px] font-medium text-background'>
            1
          </span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value='inbox'>
        <div className='space-y-2'>
          <p className='text-sm font-medium'>3 new messages</p>
          <p className='text-sm text-muted-foreground'>
            Check your latest emails
          </p>
        </div>
      </TabsContent>
      <TabsContent value='sent'>
        <p className='text-sm text-muted-foreground'>Your sent messages</p>
      </TabsContent>
      <TabsContent value='drafts'>
        <div className='space-y-2'>
          <p className='text-sm font-medium'>1 draft</p>
          <p className='text-sm text-muted-foreground'>
            Continue writing your email
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}
