import { EmptyState } from '../../components/EmptyState'
import { render } from '../utils/test-utils'

// Mock Expo vector icons
jest.mock('@expo/vector-icons', () => ({
  Ionicons: ({ name, _size, _color, ...props }: any) => {
    const MockIcon = require('react-native').View
    return (
      <MockIcon
        testID={`icon-${name}`}
        accessibilityLabel={`${name} icon`}
        {...props}
      />
    )
  },
}))

describe('EmptyState', () => {
  const defaultProps = {
    title: 'No Notes Found',
    description: 'Create your first note to get started',
    icon: 'document-text-outline' as const,
  }

  it('renders correctly with all props', () => {
    const { getByText, getByTestId } = render(<EmptyState {...defaultProps} />)

    expect(getByText('No Notes Found')).toBeTruthy()
    expect(getByText('Create your first note to get started')).toBeTruthy()
    expect(getByTestId('icon-document-text-outline')).toBeTruthy()
  })

  it('renders with different icon', () => {
    const props = {
      ...defaultProps,
      icon: 'search-outline' as const,
    }

    const { getByTestId } = render(<EmptyState {...props} />)

    expect(getByTestId('icon-search-outline')).toBeTruthy()
  })

  it('renders with custom title and description', () => {
    const props = {
      title: 'Search Results Empty',
      description: 'No notes match your search criteria',
      icon: 'search-outline' as const,
    }

    const { getByText } = render(<EmptyState {...props} />)

    expect(getByText('Search Results Empty')).toBeTruthy()
    expect(getByText('No notes match your search criteria')).toBeTruthy()
  })

  it('handles long text content', () => {
    const props = {
      title: 'This is a very long title that might wrap to multiple lines',
      description:
        'This is a very long description that provides detailed information about the current state and what the user can do to resolve it. It should handle text wrapping gracefully.',
      icon: 'information-circle-outline' as const,
    }

    const { getByText } = render(<EmptyState {...props} />)

    expect(getByText(props.title)).toBeTruthy()
    expect(getByText(props.description)).toBeTruthy()
  })

  it('applies correct styles to title', () => {
    const { getByText } = render(<EmptyState {...defaultProps} />)

    const titleText = getByText(defaultProps.title)
    expect(titleText.props.style).toEqual(
      expect.objectContaining({
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 8,
      })
    )
  })

  it('applies correct styles to description', () => {
    const { getByText } = render(<EmptyState {...defaultProps} />)

    const descriptionText = getByText(defaultProps.description)
    expect(descriptionText.props.style).toEqual(
      expect.objectContaining({
        fontSize: 16,
        textAlign: 'center',
      })
    )
  })

  it('renders icon with correct accessibility label', () => {
    const { getByLabelText } = render(<EmptyState {...defaultProps} />)

    expect(getByLabelText('document-text-outline icon')).toBeTruthy()
  })
})
