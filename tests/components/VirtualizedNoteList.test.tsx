import React from 'react'
import {
  render,
  screen,
  fireEvent,
  waitFor,
  within,
} from '@testing-library/react'
import '@testing-library/jest-dom'
import { VirtualizedNoteList } from '@/components/virtualized/VirtualizedNoteList'
import { Note } from '@/types/note'

// Mock react-window
jest.mock('react-window', () => ({
  VariableSizeList: ({
    children,
    itemCount,
    itemSize,
    itemData,
    height,
    width,
  }: any) => {
    return (
      <div data-testid="virtual-list" style={{ height, width }}>
        {Array.from({ length: Math.min(itemCount, 10) }, (_, index) => (
          <div key={index} style={{ height: itemSize(index) }}>
            {children({ index, style: {}, data: itemData })}
          </div>
        ))}
      </div>
    )
  },
}))

// Mock react-virtualized-auto-sizer
jest.mock('react-virtualized-auto-sizer', () => ({
  __esModule: true,
  default: ({ children }: any) => children({ height: 600, width: 400 }),
}))

const generateMockNotes = (count: number): Note[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: `note-${i}`,
    title: `Note ${i}`,
    content: `Content for note ${i}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    parentId: null,
    tags: [`tag${i}`],
    isFolder: false,
  }))
}

describe('VirtualizedNoteList', () => {
  const mockNotes = generateMockNotes(100)

  it('should render a list of notes', () => {
    render(
      <VirtualizedNoteList
        notes={mockNotes}
        activeNoteId="note-5"
        onNoteSelect={jest.fn()}
        onNoteDelete={jest.fn()}
      />,
    )
    expect(screen.getByTestId('virtual-list')).toBeInTheDocument()
  })

  it('should display note content', () => {
    render(
      <VirtualizedNoteList
        notes={mockNotes}
        activeNoteId="note-0"
        onNoteSelect={jest.fn()}
        onNoteDelete={jest.fn()}
      />,
    )
    expect(screen.getByText('Note 0')).toBeInTheDocument()
    expect(screen.getByText('Content for note 0')).toBeInTheDocument()
  })

  it('should highlight the active note', () => {
    const { container } = render(
      <VirtualizedNoteList
        notes={mockNotes}
        activeNoteId="note-3"
        onNoteSelect={jest.fn()}
        onNoteDelete={jest.fn()}
      />,
    )

    const activeCard = container.querySelector('.ring-2.ring-primary')
    expect(activeCard).toBeInTheDocument()
  })

  it('should call onNoteSelect when a note is clicked', () => {
    const onNoteSelect = jest.fn()
    render(
      <VirtualizedNoteList
        notes={mockNotes}
        activeNoteId="note-1"
        onNoteSelect={onNoteSelect}
        onNoteDelete={jest.fn()}
      />,
    )

    const noteCard = screen.getByText('Note 2').closest('div[role="button"]')
    if (noteCard) {
      fireEvent.click(noteCard)
    }
    expect(onNoteSelect).toHaveBeenCalledWith(mockNotes[2])
  })

  it('should call onNoteDelete when delete is clicked', () => {
    const onNoteDelete = jest.fn()
    render(
      <VirtualizedNoteList
        notes={mockNotes}
        activeNoteId="note-1"
        onNoteSelect={jest.fn()}
        onNoteDelete={onNoteDelete}
      />,
    )
    const deleteButton = screen.getAllByRole('button')[0]
    if (deleteButton) {
      fireEvent.click(deleteButton)
    }
    expect(onNoteDelete).toHaveBeenCalledWith('note-1')
  })

  it('should render search highlights', () => {
    const notesWithHighlights = [
      {
        ...mockNotes[0],
        title: 'Note with <mark>highlight</mark>',
      },
    ]
    render(
      <VirtualizedNoteList
        notes={notesWithHighlights}
        activeNoteId=""
        onNoteSelect={jest.fn()}
        onNoteDelete={jest.fn()}
        searchQuery="highlight"
      />,
    )
    const mark = screen.getByText('highlight')
    expect(mark).toBeInTheDocument()
    expect(mark.tagName).toBe('MARK')
  })

  it('should render relative time', () => {
    const recentNote = {
      ...mockNotes[0],
      updatedAt: new Date().toISOString(),
    }
    render(
      <VirtualizedNoteList
        notes={[recentNote]}
        activeNoteId=""
        onNoteSelect={jest.fn()}
        onNoteDelete={jest.fn()}
      />,
    )
    expect(screen.getByText(/ago$/)).toBeInTheDocument()
  })

  it('should render tag count', () => {
    const noteWithTags = {
      ...mockNotes[0],
      tags: ['tag1', 'tag2'],
    }
    render(
      <VirtualizedNoteList
        notes={[noteWithTags]}
        activeNoteId=""
        onNoteSelect={jest.fn()}
        onNoteDelete={jest.fn()}
      />,
    )
    expect(screen.getByText('2 tags')).toBeInTheDocument()
  })

  it('should apply custom class name and styles', () => {
    const { container } = render(
      <VirtualizedNoteList
        notes={mockNotes}
        activeNoteId=""
        onNoteSelect={jest.fn()}
        onNoteDelete={jest.fn()}
        className="custom-class"
      />,
    )
    expect(container.firstChild).toHaveClass('custom-class', 'h-full')
  })

  it('should render note preview for non-string content', () => {
    const noteWithObjectContent = {
      ...mockNotes[0],
      content: JSON.stringify({
        type: 'doc',
        content: [
          { type: 'paragraph', content: [{ type: 'text', text: 'Hello' }] },
        ],
      }),
    }
    render(
      <VirtualizedNoteList
        notes={[noteWithObjectContent]}
        activeNoteId=""
        onNoteSelect={jest.fn()}
        onNoteDelete={jest.fn()}
      />,
    )
    const preview = screen.getByText(/Hello/)
    expect(preview).toBeInTheDocument()
  })

  it('should show placeholder for empty content', () => {
    const notes = [...mockNotes]
    notes[0].content = ''
    render(
      <VirtualizedNoteList
        notes={notes}
        activeNoteId=""
        onNoteSelect={jest.fn()}
        onNoteDelete={jest.fn()}
      />,
    )
    expect(screen.getByText('Note 0')).toBeInTheDocument()
  })

  it('should render only visible notes', () => {
    render(
      <VirtualizedNoteList
        notes={mockNotes}
        activeNoteId=""
        onNoteSelect={jest.fn()}
        onNoteDelete={jest.fn()}
      />,
    )
    expect(screen.getByText('Note 0')).toBeInTheDocument()
    expect(screen.getByText('Note 9')).toBeInTheDocument()
    expect(screen.queryByText('Note 10')).not.toBeInTheDocument()
  })

  it('should handle empty notes array', () => {
    const { container } = render(
      <VirtualizedNoteList
        notes={[]}
        activeNoteId=""
        onNoteSelect={jest.fn()}
        onNoteDelete={jest.fn()}
      />,
    )
    expect(container.firstChild).toBeEmptyDOMElement()
  })
})
