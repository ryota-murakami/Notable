import type { Meta, StoryObj } from '@storybook/nextjs'
import React from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

const meta = {
  title: 'Design System/Layout/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ScrollArea className='h-72 w-48 rounded-md border'>
      <div className='p-4'>
        <h4 className='mb-4 text-sm font-medium leading-none'>Tags</h4>
        {Array.from({ length: 50 }).map((_, i) => (
          <React.Fragment key={i}>
            <div className='text-sm'>Tag {i + 1}</div>
            <Separator className='my-2' />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  ),
}

export const HorizontalScroll: Story = {
  render: () => (
    <ScrollArea className='w-96 whitespace-nowrap rounded-md border'>
      <div className='flex w-max space-x-4 p-4'>
        {Array.from({ length: 20 }).map((_, i) => (
          <figure key={i} className='shrink-0'>
            <div className='overflow-hidden rounded-md'>
              <div className='h-32 w-32 bg-muted' />
            </div>
            <figcaption className='pt-2 text-xs text-muted-foreground'>
              Photo {i + 1}
            </figcaption>
          </figure>
        ))}
      </div>
    </ScrollArea>
  ),
}

export const DocumentList: Story = {
  render: () => {
    const documents = [
      { name: 'README.md', size: '3.2 KB', date: '2 hours ago' },
      { name: 'package.json', size: '1.8 KB', date: '3 hours ago' },
      { name: 'tsconfig.json', size: '892 B', date: 'Yesterday' },
      { name: '.gitignore', size: '234 B', date: 'Yesterday' },
      { name: 'index.tsx', size: '5.6 KB', date: '2 days ago' },
      { name: 'styles.css', size: '12.3 KB', date: '2 days ago' },
      { name: 'components.tsx', size: '8.9 KB', date: '3 days ago' },
      { name: 'utils.ts', size: '4.1 KB', date: '3 days ago' },
      { name: 'types.d.ts', size: '2.7 KB', date: '4 days ago' },
      { name: 'constants.ts', size: '1.5 KB', date: '5 days ago' },
      { name: 'api.ts', size: '6.8 KB', date: '1 week ago' },
      { name: 'hooks.ts', size: '3.9 KB', date: '1 week ago' },
      { name: 'context.tsx', size: '2.3 KB', date: '2 weeks ago' },
      { name: 'router.tsx', size: '4.5 KB', date: '2 weeks ago' },
      { name: 'store.ts', size: '7.2 KB', date: '3 weeks ago' },
    ]

    return (
      <ScrollArea className='h-[350px] w-[350px] rounded-md border'>
        <div className='p-4'>
          <h4 className='mb-4 text-sm font-medium'>Recent Files</h4>
          <div className='space-y-1'>
            {documents.map((doc, i) => (
              <button
                key={i}
                className='w-full rounded-md p-3 text-left hover:bg-accent'
              >
                <div className='flex items-center justify-between'>
                  <p className='text-sm font-medium'>{doc.name}</p>
                  <p className='text-xs text-muted-foreground'>{doc.size}</p>
                </div>
                <p className='text-xs text-muted-foreground mt-1'>{doc.date}</p>
              </button>
            ))}
          </div>
        </div>
      </ScrollArea>
    )
  },
}

export const ChatMessages: Story = {
  render: () => {
    const messages = [
      { user: 'Alice', message: 'Hey everyone! 👋', time: '10:00 AM' },
      { user: 'Bob', message: 'Hi Alice! How are you?', time: '10:02 AM' },
      {
        user: 'Alice',
        message: "I'm doing great, thanks! Working on the new design.",
        time: '10:03 AM',
      },
      {
        user: 'Charlie',
        message: "Nice! Can't wait to see it",
        time: '10:05 AM',
      },
      {
        user: 'Alice',
        message: "I'll share some mockups soon",
        time: '10:06 AM',
      },
      { user: 'Bob', message: 'Looking forward to it!', time: '10:08 AM' },
      {
        user: 'Charlie',
        message: 'Same here! Let me know if you need any feedback',
        time: '10:10 AM',
      },
      {
        user: 'Alice',
        message: 'Will do! Thanks everyone 🙏',
        time: '10:12 AM',
      },
      {
        user: 'Bob',
        message: 'By the way, did you see the latest updates?',
        time: '10:15 AM',
      },
      {
        user: 'Charlie',
        message: 'Yes! The performance improvements are amazing',
        time: '10:17 AM',
      },
      {
        user: 'Alice',
        message: 'Absolutely! The app feels so much faster now',
        time: '10:19 AM',
      },
      { user: 'Bob', message: 'The team did a great job', time: '10:20 AM' },
    ]

    return (
      <ScrollArea className='h-[400px] w-[400px] rounded-md border p-4'>
        <div className='space-y-4'>
          {messages.map((msg, i) => (
            <div key={i} className='space-y-1'>
              <div className='flex items-center justify-between'>
                <p className='text-sm font-medium'>{msg.user}</p>
                <p className='text-xs text-muted-foreground'>{msg.time}</p>
              </div>
              <p className='text-sm text-muted-foreground'>{msg.message}</p>
            </div>
          ))}
        </div>
      </ScrollArea>
    )
  },
}

export const CodeBlock: Story = {
  render: () => (
    <ScrollArea className='h-[300px] w-[500px] rounded-md border bg-slate-950 p-4'>
      <pre className='text-sm text-white'>
        <code>{`import React from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'

export function Example() {
  const items = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    name: \`Item \${i + 1}\`,
    description: \`Description for item \${i + 1}\`
  }))

  return (
    <ScrollArea className="h-96 w-full">
      <div className="space-y-4 p-4">
        {items.map((item) => (
          <div key={item.id} className="rounded-lg border p-4">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

// This component demonstrates how to use ScrollArea
// for long lists of content that need to be scrollable
// within a fixed height container.

function AnotherExample() {
  return (
    <ScrollArea className="h-[200px]">
      <div className="p-4">
        <h2>Terms of Service</h2>
        <p>Lorem ipsum dolor sit amet...</p>
        {/* More content */}
      </div>
    </ScrollArea>
  )
}`}</code>
      </pre>
    </ScrollArea>
  ),
}

export const Sidebar: Story = {
  render: () => {
    const navigation = [
      {
        title: 'Getting Started',
        items: [
          'Introduction',
          'Installation',
          'Project Structure',
          'Configuration',
        ],
      },
      {
        title: 'Components',
        items: [
          'Button',
          'Card',
          'Dialog',
          'Form',
          'Input',
          'Select',
          'Table',
          'Tabs',
        ],
      },
      {
        title: 'Utilities',
        items: ['Typography', 'Colors', 'Spacing', 'Shadows', 'Animations'],
      },
      {
        title: 'Advanced',
        items: [
          'Theming',
          'Dark Mode',
          'Accessibility',
          'Performance',
          'Testing',
        ],
      },
    ]

    return (
      <div className='w-64 rounded-md border'>
        <div className='p-4 border-b'>
          <h3 className='font-semibold'>Documentation</h3>
        </div>
        <ScrollArea className='h-[400px]'>
          <div className='p-4 space-y-6'>
            {navigation.map((section, i) => (
              <div key={i} className='space-y-3'>
                <h4 className='font-medium text-sm'>{section.title}</h4>
                <div className='space-y-1'>
                  {section.items.map((item, j) => (
                    <button
                      key={j}
                      className='w-full rounded-md px-2 py-1.5 text-left text-sm hover:bg-accent'
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    )
  },
}

export const LongContent: Story = {
  render: () => (
    <ScrollArea className='h-[400px] w-[600px] rounded-md border'>
      <div className='p-6'>
        <article className='prose prose-sm max-w-none'>
          <h1>The Art of Component Design</h1>
          <p>
            Creating reusable components is a fundamental skill in modern web
            development. It requires careful consideration of API design,
            flexibility, and maintainability.
          </p>

          <h2>Key Principles</h2>
          <p>
            When designing components, there are several principles to keep in
            mind:
          </p>
          <ul>
            <li>
              Single Responsibility: Each component should do one thing well
            </li>
            <li>Composability: Components should work well together</li>
            <li>
              Customizability: Allow for styling and behavior modifications
            </li>
            <li>Accessibility: Ensure components are usable by everyone</li>
          </ul>

          <h2>Component Architecture</h2>
          <p>
            A well-architected component system forms the foundation of a
            scalable application. Consider the following aspects when building
            your component library:
          </p>

          <h3>Props Interface</h3>
          <p>
            Define clear and consistent prop interfaces. Use TypeScript or
            PropTypes to document expected prop types and provide better
            developer experience.
          </p>

          <h3>Styling Strategy</h3>
          <p>
            Choose a styling approach that balances flexibility with
            consistency. Options include CSS-in-JS, CSS Modules, or
            utility-first CSS frameworks like Tailwind.
          </p>

          <h3>State Management</h3>
          <p>
            Decide whether components should manage their own state or rely on
            external state management. Consider using controlled and
            uncontrolled patterns where appropriate.
          </p>

          <h2>Best Practices</h2>
          <p>
            Follow these best practices to create maintainable and reusable
            components:
          </p>
          <ol>
            <li>Write comprehensive documentation</li>
            <li>Include usage examples</li>
            <li>Add unit and integration tests</li>
            <li>Consider performance implications</li>
            <li>Plan for internationalization</li>
          </ol>

          <h2>Conclusion</h2>
          <p>
            Building a robust component library is an iterative process. Start
            small, gather feedback, and continuously improve based on real-world
            usage.
          </p>
        </article>
      </div>
    </ScrollArea>
  ),
}

export const DataTable: Story = {
  render: () => {
    const data = Array.from({ length: 100 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      role: ['Admin', 'Editor', 'Viewer'][i % 3],
      status: ['Active', 'Inactive', 'Pending'][i % 3],
    }))

    return (
      <div className='w-[600px] rounded-md border'>
        <div className='border-b bg-muted/50'>
          <table className='w-full'>
            <thead>
              <tr>
                <th className='p-2 text-left text-sm font-medium'>ID</th>
                <th className='p-2 text-left text-sm font-medium'>Name</th>
                <th className='p-2 text-left text-sm font-medium'>Email</th>
                <th className='p-2 text-left text-sm font-medium'>Role</th>
                <th className='p-2 text-left text-sm font-medium'>Status</th>
              </tr>
            </thead>
          </table>
        </div>
        <ScrollArea className='h-[300px]'>
          <table className='w-full'>
            <tbody>
              {data.map((row) => (
                <tr key={row.id} className='border-b'>
                  <td className='p-2 text-sm'>{row.id}</td>
                  <td className='p-2 text-sm'>{row.name}</td>
                  <td className='p-2 text-sm'>{row.email}</td>
                  <td className='p-2 text-sm'>{row.role}</td>
                  <td className='p-2 text-sm'>
                    <span
                      className={cn(
                        'inline-flex items-center rounded-full px-2 py-1 text-xs font-medium',
                        row.status === 'Active' &&
                          'bg-green-100 text-green-800',
                        row.status === 'Inactive' &&
                          'bg-gray-100 text-gray-800',
                        row.status === 'Pending' &&
                          'bg-yellow-100 text-yellow-800'
                      )}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollArea>
      </div>
    )
  },
}
