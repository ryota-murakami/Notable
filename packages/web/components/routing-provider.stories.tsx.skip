import type { Meta, StoryObj } from '@storybook/nextjs'
import { RoutingProvider } from './routing-provider'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import { Badge } from './ui/badge'

const meta: Meta<typeof RoutingProvider> = {
  title: 'Components/Providers/RoutingProvider',
  component: RoutingProvider,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A provider component that initializes the routing system for the web application. It handles client-side hydration and sets up the routing store with the web adapter.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof RoutingProvider>

// Demo component to show provider is working
function RoutingDemo() {
  return (
    <Card className='max-w-lg'>
      <CardHeader>
        <CardTitle>Routing Provider</CardTitle>
        <CardDescription>
          The routing system has been initialized
        </CardDescription>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='flex items-center gap-2'>
          <Badge variant='success'>Active</Badge>
          <span className='text-sm text-muted-foreground'>
            Routing is ready
          </span>
        </div>

        <div className='space-y-2'>
          <h4 className='text-sm font-medium'>Features:</h4>
          <ul className='text-sm text-muted-foreground space-y-1'>
            <li>• Client-side hydration safe</li>
            <li>• Automatic cleanup on unmount</li>
            <li>• Test mode detection</li>
            <li>• Simple store initialization</li>
          </ul>
        </div>

        <div className='p-3 bg-secondary rounded-md'>
          <p className='text-sm'>
            This provider ensures the routing system is properly initialized
            after React hydration, preventing SSR/hydration mismatches.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export const Default: Story = {
  render: () => (
    <RoutingProvider>
      <RoutingDemo />
    </RoutingProvider>
  ),
}

export const WithChildren: Story = {
  render: () => (
    <RoutingProvider>
      <div className='space-y-4'>
        <Card>
          <CardHeader>
            <CardTitle>App Content</CardTitle>
            <CardDescription>
              All children components have access to the routing system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              The RoutingProvider wraps the entire application, providing
              routing functionality to all descendant components.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Navigation Ready</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Components can now use routing hooks and navigation features.</p>
          </CardContent>
        </Card>
      </div>
    </RoutingProvider>
  ),
}

export const LoadingState: Story = {
  render: () => (
    <div className='space-y-4'>
      <Card>
        <CardHeader>
          <CardTitle>Initialization Process</CardTitle>
          <CardDescription>
            The RoutingProvider handles initialization automatically
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='space-y-3'>
            <div className='flex items-center gap-2'>
              <div className='h-2 w-2 rounded-full bg-green-500' />
              <span className='text-sm'>1. Component mounts</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='h-2 w-2 rounded-full bg-green-500' />
              <span className='text-sm'>2. Client-side detection</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='h-2 w-2 rounded-full bg-green-500' />
              <span className='text-sm'>3. Test mode check</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='h-2 w-2 rounded-full bg-green-500' />
              <span className='text-sm'>4. Initialize routing store</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='h-2 w-2 rounded-full bg-green-500' />
              <span className='text-sm'>5. Ready for navigation</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <RoutingProvider>
        <Badge variant='success' className='w-full justify-center py-2'>
          Routing System Initialized
        </Badge>
      </RoutingProvider>
    </div>
  ),
}

export const NestedProviders: Story = {
  render: () => (
    <RoutingProvider>
      <Card className='max-w-2xl'>
        <CardHeader>
          <CardTitle>Provider Composition</CardTitle>
          <CardDescription>
            RoutingProvider works seamlessly with other providers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='space-y-4'>
            <div className='p-4 border rounded-lg'>
              <h4 className='font-medium mb-2'>Typical App Structure:</h4>
              <pre className='text-xs bg-secondary p-3 rounded overflow-x-auto'>
                {`<ThemeProvider>
  <RoutingProvider>
    <QueryProvider>
      <App />
    </QueryProvider>
  </RoutingProvider>
</ThemeProvider>`}
              </pre>
            </div>

            <p className='text-sm text-muted-foreground'>
              The RoutingProvider is designed to work within a provider
              hierarchy, ensuring proper initialization order and cleanup.
            </p>
          </div>
        </CardContent>
      </Card>
    </RoutingProvider>
  ),
}
