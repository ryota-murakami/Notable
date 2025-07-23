/* eslint-env jest */
// Jest setup for React Native
// Skip @testing-library/jest-native as it may not be installed

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
  getAllKeys: jest.fn(),
  multiGet: jest.fn(),
  multiSet: jest.fn(),
  multiRemove: jest.fn(),
}))

// Mock expo modules
jest.mock('expo-router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    back: jest.fn(),
    replace: jest.fn(),
  }),
  useLocalSearchParams: () => ({}),
  Link: ({ children }) => children,
  Redirect: () => null,
  Tabs: {
    Screen: () => null,
  },
}))

// Mock React Native Paper
jest.mock('react-native-paper', () => {
  const React = require('react')
  const { View, Text } = require('react-native')

  return {
    useTheme: () => ({
      colors: {
        primary: '#000',
        surface: '#fff',
        onSurface: '#000',
        onSurfaceVariant: '#666',
      },
    }),
    Provider: ({ children }) => children,
    Text: ({ children, ...props }) =>
      React.createElement(Text, props, children),
    Button: ({ children, onPress }) =>
      React.createElement(
        View,
        { onPress },
        React.createElement(Text, null, children)
      ),
    Card: ({ children }) => React.createElement(View, null, children),
    'Card.Content': ({ children }) => React.createElement(View, null, children),
    TextInput: (props) =>
      React.createElement(
        View,
        null,
        React.createElement(Text, null, props.value)
      ),
    ActivityIndicator: () =>
      React.createElement(
        View,
        null,
        React.createElement(Text, null, 'Loading...')
      ),
    FAB: {
      Group: ({ children }) => React.createElement(View, null, children),
    },
    Appbar: {
      Header: ({ children }) => React.createElement(View, null, children),
      BackAction: () => React.createElement(View, null),
      Content: ({ title }) => React.createElement(Text, null, title),
      Action: () => React.createElement(View, null),
    },
    Menu: ({ children }) => React.createElement(View, null, children),
    'Menu.Item': ({ title }) => React.createElement(Text, null, title),
    Divider: () => React.createElement(View, null),
    Chip: ({ children }) => React.createElement(Text, null, children),
    IconButton: () => React.createElement(View, null),
    Searchbar: () => React.createElement(View, null),
    Portal: ({ children }) => children,
    Modal: ({ children }) => React.createElement(View, null, children),
    Title: ({ children }) => React.createElement(Text, null, children),
    Paragraph: ({ children }) => React.createElement(Text, null, children),
  }
})

// Mock Supabase
jest.mock('@supabase/supabase-js', () => ({
  createClient: jest.fn(() => ({
    auth: {
      getSession: jest.fn().mockResolvedValue({ data: { session: null } }),
      signInWithPassword: jest.fn(),
      signUp: jest.fn(),
      signOut: jest.fn(),
      signInWithOAuth: jest.fn(),
      onAuthStateChange: jest.fn(() => ({
        data: { subscription: { unsubscribe: jest.fn() } },
      })),
    },
    from: jest.fn(() => ({
      select: jest.fn().mockReturnThis(),
      insert: jest.fn().mockReturnThis(),
      update: jest.fn().mockReturnThis(),
      delete: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      is: jest.fn().mockReturnThis(),
      order: jest.fn().mockReturnThis(),
      single: jest.fn().mockResolvedValue({ data: null, error: null }),
    })),
    channel: jest.fn(() => ({
      on: jest.fn().mockReturnThis(),
      subscribe: jest.fn().mockReturnThis(),
      unsubscribe: jest.fn(),
      track: jest.fn(),
    })),
  })),
}))

// Mock expo vector icons
jest.mock('@expo/vector-icons', () => ({
  Ionicons: 'Ionicons',
  MaterialCommunityIcons: 'MaterialCommunityIcons',
}))

// Mock react-native-markdown-display
jest.mock('react-native-markdown-display', () => {
  const React = require('react')
  const { Text } = require('react-native')
  return ({ children }) => React.createElement(Text, null, children)
})

// Mock Fuse.js
jest.mock('fuse.js', () => {
  return jest.fn().mockImplementation(() => ({
    search: jest.fn(() => []),
  }))
})

// Global test utilities
global.fetch = jest.fn()

// Suppress console warnings in tests
const originalError = console.error
beforeAll(() => {
  console.error = (...args) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Warning: ReactTestRenderer')
    ) {
      return
    }
    originalError.call(console, ...args)
  }
})

afterAll(() => {
  console.error = originalError
})
