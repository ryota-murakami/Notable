import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { CodeBlock } from './code-block'
import { within, userEvent, expect, waitFor } from '@storybook/test'

const meta = {
  title: 'UI/Blocks/CodeBlock',
  component: CodeBlock,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    element: {
      control: 'object',
      description:
        'Element properties including language, caption, and settings',
    },
  },
  decorators: [
    (Story) => (
      <div className='min-w-[800px] p-8'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CodeBlock>

export default meta
type Story = StoryObj<typeof meta>

const javascriptCode = `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage
console.log(fibonacci(10)); // 55`

const pythonCode = `def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

# Example usage
print(fibonacci(10))  # 55`

const htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Code Block Example</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is a code block example.</p>
</body>
</html>`

const cssCode = `.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.card {
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}`

export const Default: Story = {
  args: {
    attributes: {},
    element: {
      type: 'code-block',
      language: 'javascript',
    },
    children: javascriptCode,
  },
}

export const WithLanguages: Story = {
  render: () => (
    <div className='space-y-6'>
      <CodeBlock
        attributes={{}}
        element={{ type: 'code-block', language: 'javascript' }}
      >
        {javascriptCode}
      </CodeBlock>
      <CodeBlock
        attributes={{}}
        element={{ type: 'code-block', language: 'python' }}
      >
        {pythonCode}
      </CodeBlock>
      <CodeBlock
        attributes={{}}
        element={{ type: 'code-block', language: 'html' }}
      >
        {htmlCode}
      </CodeBlock>
    </div>
  ),
}

export const WithLineNumbers: Story = {
  args: {
    attributes: {},
    element: {
      type: 'code-block',
      language: 'javascript',
      showLineNumbers: true,
    },
    children: javascriptCode,
  },
}

export const WithCaption: Story = {
  args: {
    attributes: {},
    element: {
      type: 'code-block',
      language: 'javascript',
      caption: 'Fibonacci function implementation in JavaScript',
    },
    children: javascriptCode,
  },
}

export const WithAllFeatures: Story = {
  args: {
    attributes: {},
    element: {
      type: 'code-block',
      language: 'python',
      showLineNumbers: true,
      caption: 'Recursive Fibonacci implementation with memoization',
    },
    children: `# Fibonacci with memoization
def fibonacci_memo(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    
    memo[n] = fibonacci_memo(n - 1, memo) + fibonacci_memo(n - 2, memo)
    return memo[n]

# Performance comparison
import time

def measure_time(func, n):
    start = time.time()
    result = func(n)
    end = time.time()
    return result, end - start

# Test with n=35
n = 35
result, duration = measure_time(fibonacci_memo, n)
print(f"fibonacci_memo({n}) = {result}")
print(f"Time taken: {duration:.4f} seconds")`,
  },
}

export const PlaintextBlock: Story = {
  args: {
    attributes: {},
    element: {
      type: 'code-block',
      language: 'plaintext',
    },
    children: `This is plain text content.
No syntax highlighting applied.
Useful for logs, output, or generic text.

Example log output:
[2024-01-15 10:30:45] INFO: Application started
[2024-01-15 10:30:46] DEBUG: Loading configuration
[2024-01-15 10:30:47] INFO: Server listening on port 3000`,
  },
}

export const LongCode: Story = {
  args: {
    attributes: {},
    element: {
      type: 'code-block',
      language: 'typescript',
      showLineNumbers: true,
      caption: 'Complete TypeScript React component',
    },
    children: `import React, { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from '@/components/ui/use-toast'

interface TodoItem {
  id: string
  text: string
  completed: boolean
  createdAt: Date
  updatedAt: Date
}

interface TodoListProps {
  initialItems?: TodoItem[]
  onSave?: (items: TodoItem[]) => void
  className?: string
}

export function TodoList({ initialItems = [], onSave, className }: TodoListProps) {
  const [items, setItems] = useState<TodoItem[]>(initialItems)
  const [newItemText, setNewItemText] = useState('')
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')

  useEffect(() => {
    const savedItems = localStorage.getItem('todoItems')
    if (savedItems) {
      setItems(JSON.parse(savedItems))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todoItems', JSON.stringify(items))
    onSave?.(items)
  }, [items, onSave])

  const addItem = useCallback(() => {
    if (!newItemText.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter some text for the todo item',
        variant: 'destructive',
      })
      return
    }

    const newItem: TodoItem = {
      id: Date.now().toString(),
      text: newItemText,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    setItems([...items, newItem])
    setNewItemText('')
    
    toast({
      title: 'Success',
      description: 'Todo item added successfully',
    })
  }, [newItemText, items])

  const toggleItem = useCallback((id: string) => {
    setItems(items.map(item => 
      item.id === id 
        ? { ...item, completed: !item.completed, updatedAt: new Date() }
        : item
    ))
  }, [items])

  const deleteItem = useCallback((id: string) => {
    setItems(items.filter(item => item.id !== id))
    toast({
      title: 'Deleted',
      description: 'Todo item removed',
    })
  }, [items])

  const filteredItems = items.filter(item => {
    if (filter === 'active') return !item.completed
    if (filter === 'completed') return item.completed
    return true
  })

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Todo List</CardTitle>
        <CardDescription>
          Manage your tasks efficiently
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex gap-2">
            <Input
              value={newItemText}
              onChange={(e) => setNewItemText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addItem()}
              placeholder="Add a new todo..."
            />
            <Button onClick={addItem}>Add</Button>
          </div>
          
          <div className="flex gap-2">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('all')}
            >
              All ({items.length})
            </Button>
            <Button
              variant={filter === 'active' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('active')}
            >
              Active ({items.filter(i => !i.completed).length})
            </Button>
            <Button
              variant={filter === 'completed' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('completed')}
            >
              Completed ({items.filter(i => i.completed).length})
            </Button>
          </div>
          
          <div className="space-y-2">
            {filteredItems.map(item => (
              <div key={item.id} className="flex items-center gap-2 p-2 border rounded">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleItem(item.id)}
                  className="h-4 w-4"
                />
                <span className={item.completed ? 'line-through text-gray-500' : ''}>
                  {item.text}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => deleteItem(item.id)}
                  className="ml-auto"
                >
                  Delete
                </Button>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}`,
  },
}

export const SqlExample: Story = {
  args: {
    attributes: {},
    element: {
      type: 'code-block',
      language: 'sql',
      showLineNumbers: true,
      caption: 'Complex SQL query with joins and aggregations',
    },
    children: `-- Get top customers by order value with product details
WITH customer_orders AS (
  SELECT 
    c.customer_id,
    c.first_name,
    c.last_name,
    c.email,
    COUNT(DISTINCT o.order_id) as total_orders,
    SUM(od.quantity * p.price) as total_spent,
    AVG(od.quantity * p.price) as avg_order_value
  FROM customers c
  JOIN orders o ON c.customer_id = o.customer_id
  JOIN order_details od ON o.order_id = od.order_id
  JOIN products p ON od.product_id = p.product_id
  WHERE o.order_date >= DATE_SUB(CURRENT_DATE, INTERVAL 1 YEAR)
    AND o.status = 'completed'
  GROUP BY c.customer_id, c.first_name, c.last_name, c.email
)
SELECT 
  customer_id,
  CONCAT(first_name, ' ', last_name) as full_name,
  email,
  total_orders,
  ROUND(total_spent, 2) as total_spent,
  ROUND(avg_order_value, 2) as avg_order_value,
  CASE 
    WHEN total_spent > 10000 THEN 'Platinum'
    WHEN total_spent > 5000 THEN 'Gold'
    WHEN total_spent > 1000 THEN 'Silver'
    ELSE 'Bronze'
  END as customer_tier
FROM customer_orders
ORDER BY total_spent DESC
LIMIT 20;`,
  },
}

// Interactive stories
export const InteractiveCopy: Story = {
  args: {
    attributes: {},
    element: {
      type: 'code-block',
      language: 'javascript',
    },
    children: 'const message = "Click the copy button to copy this code!";',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for render
    await new Promise((resolve) => setTimeout(resolve, 100))

    // Find and click copy button
    const copyButton = canvas.getByTitle('Copy code')
    await userEvent.click(copyButton)

    // Should show check icon
    await waitFor(() => {
      expect(canvas.getByTitle('Copied!')).toBeInTheDocument()
    })

    // Should revert after 2 seconds
    await waitFor(
      () => {
        expect(canvas.getByTitle('Copy code')).toBeInTheDocument()
      },
      { timeout: 3000 }
    )
  },
}

export const InteractiveSettings: Story = {
  args: {
    attributes: {},
    element: {
      type: 'code-block',
      language: 'javascript',
    },
    children: javascriptCode,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Click settings button
    const settingsButton = canvas.getByTitle('Settings')
    await userEvent.click(settingsButton)

    // Settings panel should appear
    await expect(canvas.getByLabelText('Show line numbers')).toBeInTheDocument()
    await expect(
      canvas.getByPlaceholderText('Add a caption...')
    ).toBeInTheDocument()

    // Toggle line numbers
    const lineNumbersCheckbox = canvas.getByLabelText('Show line numbers')
    await userEvent.click(lineNumbersCheckbox)

    // Line numbers should appear
    await expect(canvas.getByText('1')).toBeInTheDocument()
    await expect(canvas.getByText('2')).toBeInTheDocument()

    // Add caption
    const captionInput = canvas.getByPlaceholderText('Add a caption...')
    await userEvent.type(captionInput, 'My custom caption')

    // Click settings again to close
    await userEvent.click(settingsButton)

    // Caption should be visible
    await expect(canvas.getByText('My custom caption')).toBeInTheDocument()
  },
}

export const LanguageSwitch: Story = {
  args: {
    attributes: {},
    element: {
      type: 'code-block',
      language: 'javascript',
    },
    children: 'console.log("Hello, World!");',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Find language selector
    const languageSelect = canvas.getByRole('combobox')

    // Change language to Python
    await userEvent.selectOptions(languageSelect, 'python')

    // Should show Python selected
    await expect(languageSelect).toHaveValue('python')

    // Change to TypeScript
    await userEvent.selectOptions(languageSelect, 'typescript')

    // Should show TypeScript selected
    await expect(languageSelect).toHaveValue('typescript')
  },
}

export const ResponsiveLayout: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {
    attributes: {},
    element: {
      type: 'code-block',
      language: 'css',
      showLineNumbers: true,
      caption: 'Responsive CSS grid layout',
    },
    children: cssCode,
  },
}

export const DarkTheme: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  args: {
    attributes: {},
    element: {
      type: 'code-block',
      language: 'javascript',
      showLineNumbers: true,
    },
    children: javascriptCode,
  },
}

export const CustomStyling: Story = {
  args: {
    attributes: {},
    element: {
      type: 'code-block',
      language: 'javascript',
    },
    children: 'console.log("Custom styled code block");',
    className: 'border-2 border-blue-500 shadow-lg',
  },
}
