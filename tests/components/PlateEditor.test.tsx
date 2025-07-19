import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PlateEditor } from '@/components/plate-editor'
import { PlateStoreProvider } from '@udecode/plate/react'

// Mock Plate.js components
jest.mock('@udecode/plate/react', () => {
  const actual = jest.requireActual('@udecode/plate/react')
  return {
    ...actual,
    PlateProvider: ({ children, ...props }: any) => {
      const mockEditor = {
        children: props.initialValue || [],
        selection: null,
        operations: [],
      }
      return (
        <div data-testid="plate-provider" {...props}>
          {children}
        </div>
      )
    },
    PlateElement: ({ children, ...props }: any) => (
      <div data-testid={`plate-element-${props.element?.type}`} {...props}>
        {children}
      </div>
    ),
    PlateLeaf: ({ children, ...props }: any) => (
      <span data-testid="plate-leaf" {...props}>
        {children}
      </span>
    ),
  }
})

// Mock plugins
jest.mock('@/components/editor/plugins', () => ({
  plugins: [],
}))

describe('PlateEditor', () => {
  const mockOnChange = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render with initial value', () => {
    const initialValue = [
      {
        type: 'p',
        children: [{ text: 'Hello, World!' }],
      },
    ]

    render(<PlateEditor initialValue={initialValue} onChange={mockOnChange} />)

    expect(screen.getByTestId('plate-provider')).toBeInTheDocument()
    expect(screen.getByText('Hello, World!')).toBeInTheDocument()
  })

  it('should render empty editor when no initial value', () => {
    render(<PlateEditor onChange={mockOnChange} />)

    expect(screen.getByTestId('plate-provider')).toBeInTheDocument()
  })

  it('should call onChange when content changes', async () => {
    const user = userEvent.setup()

    render(
      <PlateEditor
        initialValue={[{ type: 'p', children: [{ text: '' }] }]}
        onChange={mockOnChange}
      />,
    )

    const editor = screen.getByTestId('plate-provider')

    // Simulate typing
    await user.click(editor)
    await user.type(editor, 'New content')

    await waitFor(() => {
      expect(mockOnChange).toHaveBeenCalled()
    })
  })

  it('should render with placeholder', () => {
    render(
      <PlateEditor placeholder="Start typing..." onChange={mockOnChange} />,
    )

    expect(screen.getByTestId('plate-provider')).toHaveAttribute(
      'placeholder',
      'Start typing...',
    )
  })

  it('should be disabled when readOnly', () => {
    render(<PlateEditor readOnly onChange={mockOnChange} />)

    const editor = screen.getByTestId('plate-provider')
    expect(editor).toHaveAttribute('readOnly')
  })

  it('should render different element types', () => {
    const complexValue = [
      {
        type: 'h1',
        children: [{ text: 'Heading 1' }],
      },
      {
        type: 'h2',
        children: [{ text: 'Heading 2' }],
      },
      {
        type: 'p',
        children: [{ text: 'Paragraph' }],
      },
      {
        type: 'ul',
        children: [
          {
            type: 'li',
            children: [{ text: 'List item' }],
          },
        ],
      },
    ]

    render(<PlateEditor initialValue={complexValue} onChange={mockOnChange} />)

    expect(screen.getByText('Heading 1')).toBeInTheDocument()
    expect(screen.getByText('Heading 2')).toBeInTheDocument()
    expect(screen.getByText('Paragraph')).toBeInTheDocument()
    expect(screen.getByText('List item')).toBeInTheDocument()
  })

  it('should render text with marks', () => {
    const markedValue = [
      {
        type: 'p',
        children: [
          { text: 'Normal ' },
          { text: 'bold', bold: true },
          { text: ' ' },
          { text: 'italic', italic: true },
          { text: ' ' },
          { text: 'code', code: true },
        ],
      },
    ]

    render(<PlateEditor initialValue={markedValue} onChange={mockOnChange} />)

    expect(screen.getByText('Normal')).toBeInTheDocument()
    expect(screen.getByText('bold')).toBeInTheDocument()
    expect(screen.getByText('italic')).toBeInTheDocument()
    expect(screen.getByText('code')).toBeInTheDocument()
  })

  it('should handle paste events', async () => {
    const user = userEvent.setup()

    render(
      <PlateEditor
        initialValue={[{ type: 'p', children: [{ text: '' }] }]}
        onChange={mockOnChange}
      />,
    )

    const editor = screen.getByTestId('plate-provider')

    // Create paste event
    const pasteEvent = new ClipboardEvent('paste', {
      clipboardData: new DataTransfer(),
    })

    if (pasteEvent.clipboardData) {
      pasteEvent.clipboardData.setData('text/plain', 'Pasted content')
    }

    fireEvent(editor, pasteEvent)

    await waitFor(() => {
      expect(mockOnChange).toHaveBeenCalled()
    })
  })

  it('should render with custom className', () => {
    render(
      <PlateEditor className="custom-editor-class" onChange={mockOnChange} />,
    )

    const editorContainer = screen.getByTestId('plate-provider').parentElement
    expect(editorContainer).toHaveClass('custom-editor-class')
  })

  it('should handle keyboard shortcuts', async () => {
    const user = userEvent.setup()

    render(
      <PlateEditor
        initialValue={[{ type: 'p', children: [{ text: 'Test text' }] }]}
        onChange={mockOnChange}
      />,
    )

    const editor = screen.getByTestId('plate-provider')
    await user.click(editor)

    // Test bold shortcut
    await user.keyboard('{Control>}b{/Control}')

    await waitFor(() => {
      expect(mockOnChange).toHaveBeenCalled()
    })
  })

  it('should handle focus and blur events', async () => {
    const user = userEvent.setup()
    const onFocus = jest.fn()
    const onBlur = jest.fn()

    render(
      <PlateEditor onChange={mockOnChange} onFocus={onFocus} onBlur={onBlur} />,
    )

    const editor = screen.getByTestId('plate-provider')

    await user.click(editor)
    expect(onFocus).toHaveBeenCalled()

    await user.click(document.body)
    expect(onBlur).toHaveBeenCalled()
  })

  it('should render code blocks', () => {
    const codeValue = [
      {
        type: 'code_block',
        children: [{ text: 'const hello = "world";' }],
        lang: 'javascript',
      },
    ]

    render(<PlateEditor initialValue={codeValue} onChange={mockOnChange} />)

    expect(screen.getByText('const hello = "world";')).toBeInTheDocument()
  })

  it('should render links', () => {
    const linkValue = [
      {
        type: 'p',
        children: [
          { text: 'Visit ' },
          {
            type: 'a',
            url: 'https://example.com',
            children: [{ text: 'example.com' }],
          },
        ],
      },
    ]

    render(<PlateEditor initialValue={linkValue} onChange={mockOnChange} />)

    expect(screen.getByText('Visit')).toBeInTheDocument()
    expect(screen.getByText('example.com')).toBeInTheDocument()
  })

  it('should handle undo/redo', async () => {
    const user = userEvent.setup()

    render(
      <PlateEditor
        initialValue={[{ type: 'p', children: [{ text: 'Initial' }] }]}
        onChange={mockOnChange}
      />,
    )

    const editor = screen.getByTestId('plate-provider')
    await user.click(editor)

    // Type some text
    await user.type(editor, ' text')

    // Undo
    await user.keyboard('{Control>}z{/Control}')

    await waitFor(() => {
      expect(mockOnChange).toHaveBeenCalled()
    })

    // Redo
    await user.keyboard('{Control>}{Shift>}z{/Shift}{/Control}')

    await waitFor(() => {
      expect(mockOnChange).toHaveBeenCalledTimes(3)
    })
  })

  it('should handle collaborative editing props', () => {
    const mockTypingUsers = [{ id: 'user1', name: 'User 1', color: '#ff0000' }]

    render(
      <PlateEditor
        onChange={mockOnChange}
        typingUsers={mockTypingUsers}
        onStartTyping={jest.fn()}
        onStopTyping={jest.fn()}
      />,
    )

    // Should render typing indicators
    expect(screen.getByTestId('plate-provider')).toBeInTheDocument()
  })

  it('should handle selection changes', async () => {
    const user = userEvent.setup()
    const onSelectionChange = jest.fn()

    render(
      <PlateEditor
        initialValue={[{ type: 'p', children: [{ text: 'Select this text' }] }]}
        onChange={mockOnChange}
        onSelectionChange={onSelectionChange}
      />,
    )

    const editor = screen.getByTestId('plate-provider')

    // Select text
    await user.click(editor)
    await user.keyboard('{Control>}a{/Control}')

    await waitFor(() => {
      expect(onSelectionChange).toHaveBeenCalled()
    })
  })
})
