import React from 'react'
import {
  render,
  screen,
  fireEvent,
  waitFor,
  within,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Shell } from '@/components/shell'
import { useSupabase } from '@/components/supabase-provider'
import { useSupabaseNotes } from '@/hooks/use-supabase-notes'
import { useRealtimeSync } from '@/hooks/use-realtime-sync'
import { useSearchNotes } from '@/hooks/use-search-notes'

// Mock dependencies
jest.mock('@/components/supabase-provider', () => ({
  useSupabase: jest.fn(),
}))

jest.mock('@/hooks/use-supabase-notes', () => ({
  useSupabaseNotes: jest.fn(),
}))

jest.mock('@/hooks/use-realtime-sync', () => ({
  useRealtimeSync: jest.fn(),
}))

jest.mock('@/hooks/use-search-notes', () => ({
  useSearchNotes: jest.fn(),
}))

jest.mock('@/lib/electron-store', () => ({
  saveNote: jest.fn(),
  deleteNote: jest.fn(),
  getAllNotes: jest.fn(() => Promise.resolve([])),
}))

// Mock child components
jest.mock('@/components/sidebar', () => ({
  Sidebar: ({
    notes,
    onNoteSelect,
    onCreateNote,
    onDeleteNote,
    searchQuery,
    onSearchChange,
  }: any) => (
    <div data-testid="sidebar">
      <input
        data-testid="search-input"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search notes..."
      />
      <button data-testid="create-note" onClick={onCreateNote}>
        Create Note
      </button>
      {notes.map((note: any) => (
        <div
          key={note.id}
          data-testid={`note-${note.id}`}
          onClick={() => onNoteSelect(note)}
        >
          <span>{note.title}</span>
          <button
            data-testid={`delete-${note.id}`}
            onClick={(e) => {
              e.stopPropagation()
              onDeleteNote(note.id)
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  ),
}))

jest.mock('@/components/plate-editor', () => ({
  PlateEditor: ({ initialValue, onChange, readOnly }: any) => (
    <div data-testid="plate-editor">
      <textarea
        data-testid="editor-textarea"
        value={JSON.stringify(initialValue)}
        onChange={(e) => {
          try {
            const value = JSON.parse(e.target.value)
            onChange(value)
          } catch {
            onChange([{ type: 'p', children: [{ text: e.target.value }] }])
          }
        }}
        readOnly={readOnly}
      />
    </div>
  ),
}))

const mockUser = {
  id: 'test-user-id',
  email: 'test@example.com',
}

const mockNotes = [
  {
    id: 'note-1',
    title: 'Test Note 1',
    content: [{ type: 'p', children: [{ text: 'Content 1' }] }],
    userId: 'test-user-id',
    folderId: null,
    tags: [],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: 'note-2',
    title: 'Test Note 2',
    content: [{ type: 'p', children: [{ text: 'Content 2' }] }],
    userId: 'test-user-id',
    folderId: null,
    tags: [],
    createdAt: '2024-01-02T00:00:00Z',
    updatedAt: '2024-01-02T00:00:00Z',
  },
]

describe('Shell', () => {
  const mockCreateNote = jest.fn()
  const mockUpdateNote = jest.fn()
  const mockDeleteNote = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()

    ;(useSupabase as jest.Mock).mockReturnValue({
      user: mockUser,
      supabase: {},
    })

    ;(useSupabaseNotes as jest.Mock).mockReturnValue({
      notes: mockNotes,
      isLoading: false,
      error: null,
      createNote: mockCreateNote,
      updateNote: mockUpdateNote,
      deleteNote: mockDeleteNote,
      loadNotes: jest.fn(),
      isSaving: false,
    })

    ;(useRealtimeSync as jest.Mock).mockReturnValue({
      isConnected: true,
      connectionError: null,
      onlineUsers: [],
      typingUsers: [],
      startTyping: jest.fn(),
      stopTyping: jest.fn(),
    })

    ;(useSearchNotes as jest.Mock).mockReturnValue({
      searchResults: mockNotes,
      isSearching: false,
      performSearch: jest.fn(),
    })
  })

  it('should render main components', () => {
    render(<Shell />)

    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    expect(screen.getByTestId('plate-editor')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /toggle sidebar/i }),
    ).toBeInTheDocument()
  })

  it('should display notes in sidebar', () => {
    render(<Shell />)

    expect(screen.getByText('Test Note 1')).toBeInTheDocument()
    expect(screen.getByText('Test Note 2')).toBeInTheDocument()
  })

  it('should select a note when clicked', async () => {
    const user = userEvent.setup()
    render(<Shell />)

    const note1 = screen.getByTestId('note-note-1')
    await user.click(note1)

    // Should show selected note content in editor
    const editor = screen.getByTestId('editor-textarea')
    expect(editor).toHaveValue(JSON.stringify(mockNotes[0].content))
  })

  it('should create a new note', async () => {
    const user = userEvent.setup()
    const newNote = {
      id: 'new-note',
      title: 'Untitled Note',
      content: [],
      userId: 'test-user-id',
      folderId: null,
      tags: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    mockCreateNote.mockResolvedValue(newNote)

    render(<Shell />)

    const createButton = screen.getByTestId('create-note')
    await user.click(createButton)

    expect(mockCreateNote).toHaveBeenCalled()
  })

  it('should update note content when edited', async () => {
    const user = userEvent.setup()
    render(<Shell />)

    // Select first note
    const note1 = screen.getByTestId('note-note-1')
    await user.click(note1)

    // Edit content
    const editor = screen.getByTestId('editor-textarea')
    await user.clear(editor)
    await user.type(editor, 'Updated content')

    // Debounced save
    await waitFor(
      () => {
        expect(mockUpdateNote).toHaveBeenCalledWith(
          'note-1',
          expect.objectContaining({
            content: [{ type: 'p', children: [{ text: 'Updated content' }] }],
          }),
        )
      },
      { timeout: 3000 },
    )
  })

  it('should delete a note', async () => {
    const user = userEvent.setup()
    mockDeleteNote.mockResolvedValue(true)

    render(<Shell />)

    const deleteButton = screen.getByTestId('delete-note-1')
    await user.click(deleteButton)

    expect(mockDeleteNote).toHaveBeenCalledWith('note-1')
  })

  it('should handle search', async () => {
    const user = userEvent.setup()
    const { performSearch } = useSearchNotes()

    render(<Shell />)

    const searchInput = screen.getByTestId('search-input')
    await user.type(searchInput, 'test search')

    await waitFor(() => {
      expect(performSearch).toHaveBeenCalledWith('test search')
    })
  })

  it('should toggle sidebar', async () => {
    const user = userEvent.setup()
    render(<Shell />)

    const toggleButton = screen.getByRole('button', { name: /toggle sidebar/i })
    const sidebar = screen.getByTestId('sidebar')

    // Initially visible
    expect(sidebar).toBeVisible()

    // Toggle to hide
    await user.click(toggleButton)
    await waitFor(() => {
      expect(sidebar.parentElement).toHaveClass('translate-x-full')
    })

    // Toggle to show
    await user.click(toggleButton)
    await waitFor(() => {
      expect(sidebar.parentElement).not.toHaveClass('translate-x-full')
    })
  })

  it('should handle loading state', () => {
    ;(useSupabaseNotes as jest.Mock).mockReturnValue({
      notes: [],
      isLoading: true,
      error: null,
      createNote: mockCreateNote,
      updateNote: mockUpdateNote,
      deleteNote: mockDeleteNote,
      loadNotes: jest.fn(),
      isSaving: false,
    })

    render(<Shell />)

    expect(screen.getByText(/loading/i)).toBeInTheDocument()
  })

  it('should handle error state', () => {
    const errorMessage = 'Failed to load notes'
    ;(useSupabaseNotes as jest.Mock).mockReturnValue({
      notes: [],
      isLoading: false,
      error: errorMessage,
      createNote: mockCreateNote,
      updateNote: mockUpdateNote,
      deleteNote: mockDeleteNote,
      loadNotes: jest.fn(),
      isSaving: false,
    })

    render(<Shell />)

    expect(screen.getByText(errorMessage)).toBeInTheDocument()
  })

  it('should show saving indicator', () => {
    ;(useSupabaseNotes as jest.Mock).mockReturnValue({
      notes: mockNotes,
      isLoading: false,
      error: null,
      createNote: mockCreateNote,
      updateNote: mockUpdateNote,
      deleteNote: mockDeleteNote,
      loadNotes: jest.fn(),
      isSaving: true,
    })

    render(<Shell />)

    expect(screen.getByText(/saving/i)).toBeInTheDocument()
  })

  it('should handle real-time connection status', () => {
    ;(useRealtimeSync as jest.Mock).mockReturnValue({
      isConnected: false,
      connectionError: 'Connection lost',
      onlineUsers: [],
      typingUsers: [],
      startTyping: jest.fn(),
      stopTyping: jest.fn(),
    })

    render(<Shell />)

    expect(screen.getByText(/offline/i)).toBeInTheDocument()
  })

  it('should show online users', () => {
    const onlineUsers = [
      {
        id: 'user1',
        name: 'User 1',
        email: 'user1@example.com',
        color: '#ff0000',
        avatar: null,
      },
      {
        id: 'user2',
        name: 'User 2',
        email: 'user2@example.com',
        color: '#00ff00',
        avatar: null,
      },
    ]

    ;(useRealtimeSync as jest.Mock).mockReturnValue({
      isConnected: true,
      connectionError: null,
      onlineUsers,
      typingUsers: [],
      startTyping: jest.fn(),
      stopTyping: jest.fn(),
    })

    render(<Shell />)

    expect(screen.getByText('2 users online')).toBeInTheDocument()
  })

  it('should show typing indicators', () => {
    const typingUsers = [
      {
        id: 'user1',
        name: 'User 1',
        email: 'user1@example.com',
        color: '#ff0000',
        avatar: null,
      },
    ]

    ;(useRealtimeSync as jest.Mock).mockReturnValue({
      isConnected: true,
      connectionError: null,
      onlineUsers: [],
      typingUsers,
      startTyping: jest.fn(),
      stopTyping: jest.fn(),
    })

    render(<Shell />)

    expect(screen.getByText(/User 1 is typing/i)).toBeInTheDocument()
  })

  it('should handle keyboard shortcuts', async () => {
    const user = userEvent.setup()
    render(<Shell />)

    // Cmd/Ctrl + N for new note
    await user.keyboard('{Control>}n{/Control}')
    expect(mockCreateNote).toHaveBeenCalled()

    // Cmd/Ctrl + S for save (should trigger save if there are changes)
    await user.keyboard('{Control>}s{/Control}')

    // Cmd/Ctrl + / for search focus
    await user.keyboard('{Control>}/{/Control}')
    expect(screen.getByTestId('search-input')).toHaveFocus()
  })

  it('should handle empty state', () => {
    ;(useSupabaseNotes as jest.Mock).mockReturnValue({
      notes: [],
      isLoading: false,
      error: null,
      createNote: mockCreateNote,
      updateNote: mockUpdateNote,
      deleteNote: mockDeleteNote,
      loadNotes: jest.fn(),
      isSaving: false,
    })

    render(<Shell />)

    expect(screen.getByText(/no notes yet/i)).toBeInTheDocument()
  })

  it('should persist sidebar state', async () => {
    const user = userEvent.setup()
    const { rerender } = render(<Shell />)

    const toggleButton = screen.getByRole('button', { name: /toggle sidebar/i })

    // Toggle sidebar
    await user.click(toggleButton)

    // Remount component
    rerender(<Shell />)

    // Sidebar state should be persisted
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar.parentElement).toHaveClass('translate-x-full')
  })
})
