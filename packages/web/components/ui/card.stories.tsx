import type { Meta, StoryObj } from '@storybook/nextjs'
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from './card'
import { expect, within } from '@storybook/test'
import { Button } from './button'
import { Input } from './input'
import { Label } from './label'
import { Badge } from './badge'
import { Calendar, Clock, User } from 'lucide-react'

const meta: Meta<typeof Card> = {
  title: 'Components/UI/Card',
  component: Card,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A versatile card component with header, content, and footer sections. Perfect for displaying grouped content, forms, or any structured information.',
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the card content area where you can place any content.</p>
      </CardContent>
      <CardFooter>
        <p className='text-sm text-muted-foreground'>Footer content</p>
      </CardFooter>
    </Card>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByText('Card Title')).toBeInTheDocument()
    await expect(
      canvas.getByText('Card description goes here')
    ).toBeInTheDocument()
    await expect(
      canvas.getByText(
        'This is the card content area where you can place any content.'
      )
    ).toBeInTheDocument()
    await expect(canvas.getByText('Footer content')).toBeInTheDocument()
  },
}

export const SimpleCard: Story = {
  render: () => (
    <Card className='max-w-sm'>
      <CardHeader>
        <CardTitle>Simple Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p>A minimal card with just title and content.</p>
      </CardContent>
    </Card>
  ),
}

export const LoginForm: Story = {
  render: () => (
    <Card className='w-full max-w-sm'>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='space-y-2'>
          <Label htmlFor='email'>Email</Label>
          <Input id='email' type='email' placeholder='name@example.com' />
        </div>
        <div className='space-y-2'>
          <Label htmlFor='password'>Password</Label>
          <Input id='password' type='password' />
        </div>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Button variant='ghost'>Forgot password?</Button>
        <Button>Login</Button>
      </CardFooter>
    </Card>
  ),
}

export const BlogPost: Story = {
  render: () => (
    <Card className='max-w-2xl'>
      <CardHeader>
        <div className='flex items-center gap-2 text-sm text-muted-foreground mb-2'>
          <User className='h-4 w-4' />
          <span>John Doe</span>
          <span>•</span>
          <Calendar className='h-4 w-4' />
          <span>Jan 15, 2024</span>
          <span>•</span>
          <Clock className='h-4 w-4' />
          <span>5 min read</span>
        </div>
        <CardTitle className='text-2xl'>
          Building Better User Interfaces with Storybook
        </CardTitle>
        <CardDescription>
          Learn how to create and maintain a comprehensive component library
          using Storybook
        </CardDescription>
      </CardHeader>
      <CardContent className='prose dark:prose-invert'>
        <p>
          Storybook is an essential tool for modern frontend development. It
          allows you to develop UI components in isolation, which leads to
          better component design and easier testing.
        </p>
        <p>
          In this article, we'll explore how to set up Storybook in your project
          and create meaningful stories for your components...
        </p>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <div className='flex gap-2'>
          <Badge variant='secondary'>React</Badge>
          <Badge variant='secondary'>Storybook</Badge>
          <Badge variant='secondary'>Testing</Badge>
        </div>
        <Button variant='link'>Read more →</Button>
      </CardFooter>
    </Card>
  ),
}

export const PricingCard: Story = {
  render: () => (
    <Card className='w-full max-w-sm'>
      <CardHeader className='text-center'>
        <CardTitle className='text-2xl'>Pro Plan</CardTitle>
        <CardDescription>Perfect for growing teams</CardDescription>
      </CardHeader>
      <CardContent className='text-center space-y-4'>
        <div>
          <span className='text-4xl font-bold'>$29</span>
          <span className='text-muted-foreground'>/month</span>
        </div>
        <ul className='space-y-2 text-sm'>
          <li>✓ Unlimited projects</li>
          <li>✓ Advanced analytics</li>
          <li>✓ 24/7 support</li>
          <li>✓ Custom integrations</li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button className='w-full'>Get Started</Button>
      </CardFooter>
    </Card>
  ),
}

export const NoShadow: Story = {
  render: () => (
    <Card className='shadow-none'>
      <CardHeader>
        <CardTitle>No Shadow Card</CardTitle>
        <CardDescription>This card has no shadow</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Perfect for nested cards or minimal designs.</p>
      </CardContent>
    </Card>
  ),
}

export const CustomStyling: Story = {
  render: () => (
    <Card className='bg-gradient-to-br from-purple-500 to-pink-500 text-white border-0'>
      <CardHeader>
        <CardTitle className='text-white'>Gradient Card</CardTitle>
        <CardDescription className='text-purple-100'>
          A card with custom gradient background
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className='text-purple-50'>
          Cards can be customized with any styling you need.
        </p>
      </CardContent>
    </Card>
  ),
}

export const Grid: Story = {
  render: () => (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      <Card>
        <CardHeader>
          <CardTitle>Card 1</CardTitle>
        </CardHeader>
        <CardContent>
          <p>First card in the grid</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card 2</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Second card in the grid</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card 3</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Third card in the grid</p>
        </CardContent>
      </Card>
    </div>
  ),
}
