import { fireEvent } from '@testing-library/react-native'
import { NoteCard } from '../../components/NoteCard'
import { createMockNote, render } from '../utils/test-utils'

describe('NoteCard', () => {
  const mockOnPress = jest.fn()
  const mockOnDelete = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders correctly with note data', () => {
    const mockNote = createMockNote({
      title: 'Test Note Title',
      content: 'This is test content for the note',
    })

    const { getByText } = render(
      <NoteCard note={mockNote} onPress={mockOnPress} onDelete={mockOnDelete} />
    )

    expect(getByText('Test Note Title')).toBeTruthy()
    expect(getByText('This is test content for the note')).toBeTruthy()
  })

  it('calls onPress when card is pressed', () => {
    const mockNote = createMockNote()

    const { getByText } = render(
      <NoteCard note={mockNote} onPress={mockOnPress} onDelete={mockOnDelete} />
    )

    // Press on the card by pressing the title text
    const titleElement = getByText(mockNote.title)
    fireEvent.press(titleElement)
    expect(mockOnPress).toHaveBeenCalledTimes(1)
  })

  it('calls onDelete when delete button is pressed', () => {
    const mockNote = createMockNote()

    const { getByLabelText } = render(
      <NoteCard note={mockNote} onPress={mockOnPress} onDelete={mockOnDelete} />
    )

    const deleteButton = getByLabelText('delete')
    fireEvent.press(deleteButton)

    expect(mockOnDelete).toHaveBeenCalledTimes(1)
    expect(mockOnPress).not.toHaveBeenCalled()
  })

  it('truncates content to 2 lines', () => {
    const mockNote = createMockNote({
      content:
        'This is a very long content that should be truncated after two lines. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    })

    const { getByText } = render(
      <NoteCard note={mockNote} onPress={mockOnPress} onDelete={mockOnDelete} />
    )

    const contentText = getByText(mockNote.content)
    expect(contentText.props.numberOfLines).toBe(2)
  })

  it('handles empty title gracefully', () => {
    const mockNote = createMockNote({
      title: '',
      content: 'Content without title',
    })

    const { getByText } = render(
      <NoteCard note={mockNote} onPress={mockOnPress} onDelete={mockOnDelete} />
    )

    expect(getByText('Content without title')).toBeTruthy()
    // Empty title should render as "Untitled"
    expect(getByText('Untitled')).toBeTruthy()
  })

  it('handles empty content gracefully', () => {
    const mockNote = createMockNote({
      title: 'Title Only',
      content: '',
    })

    const { getByText } = render(
      <NoteCard note={mockNote} onPress={mockOnPress} onDelete={mockOnDelete} />
    )

    expect(getByText('Title Only')).toBeTruthy()
    // Should handle empty content without crashing
  })

  it('applies correct styles', () => {
    const mockNote = createMockNote()

    const { getByText } = render(
      <NoteCard note={mockNote} onPress={mockOnPress} onDelete={mockOnDelete} />
    )

    const titleText = getByText(mockNote.title)
    const contentText = getByText(mockNote.content)

    // Check if styles are applied (note: exact style checking in RN testing can be limited)
    expect(titleText.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          fontSize: 18,
          fontWeight: '600',
          flex: 1,
        }),
      ])
    )

    expect(contentText.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          fontSize: 14,
          lineHeight: 20,
          marginBottom: 12,
        }),
      ])
    )
  })

  it('renders delete icon button', () => {
    const mockNote = createMockNote()

    const { getByLabelText } = render(
      <NoteCard note={mockNote} onPress={mockOnPress} onDelete={mockOnDelete} />
    )

    const deleteButton = getByLabelText('delete')
    expect(deleteButton).toBeTruthy()
  })
})
