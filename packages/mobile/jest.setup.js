/* global jest */
// Jest setup file for React Native
import '@testing-library/jest-native/extend-expect'

// Mock react-native modules
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
)

// Mock NetInfo
jest.mock('@react-native-community/netinfo', () => ({
  addEventListener: jest.fn(),
  fetch: jest.fn(() => Promise.resolve({ isConnected: true })),
}))

// Mock expo modules
jest.mock('expo-router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    back: jest.fn(),
  }),
  useLocalSearchParams: () => ({}),
}))

// Mock react-native-paper
jest.mock('react-native-paper', () => {
  // const React = require('react')
  const { View, Text } = require('react-native')

  return {
    Provider: ({ children }) => children,
    MD3LightTheme: {},
    MD3DarkTheme: {},
    useTheme: () => ({}),
    FAB: {
      Group: ({ children }) => View({ children }),
    },
    Appbar: {
      Header: ({ children }) => View({ children }),
      BackAction: () => null,
      Content: ({ title }) => Text({}, title),
      Action: () => null,
    },
    Card: ({ children, onPress }) => View({ onPress }, children),
    'Card.Content': ({ children }) => View({}, children),
    Chip: ({ children }) => View({}, children),
    Searchbar: () => null,
    TextInput: () => null,
    Text: ({ children }) => Text({}, children),
    Button: ({ children }) => View({}, children),
    ActivityIndicator: () => null,
    Menu: ({ children }) => View({}, children),
    'Menu.Item': () => null,
    Divider: () => null,
    IconButton: () => null,
    ProgressBar: () => null,
  }
})

// Silence the warning: Animated: `useNativeDriver` is not supported
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

// Mock Supabase
jest.mock('@supabase/supabase-js', () => ({
  createClient: jest.fn(() => ({
    auth: {
      getSession: jest.fn(() => Promise.resolve({ data: { session: null } })),
      onAuthStateChange: jest.fn(() => ({
        data: { subscription: { unsubscribe: jest.fn() } },
      })),
    },
    from: jest.fn(() => ({
      select: jest.fn(() => ({
        eq: jest.fn(() => ({
          is: jest.fn(() => ({
            order: jest.fn(() => Promise.resolve({ data: [], error: null })),
          })),
        })),
      })),
      insert: jest.fn(() => ({
        select: jest.fn(() => ({
          single: jest.fn(() => Promise.resolve({ data: null, error: null })),
        })),
      })),
      update: jest.fn(() => ({
        eq: jest.fn(() => ({
          select: jest.fn(() => ({
            single: jest.fn(() => Promise.resolve({ data: null, error: null })),
          })),
        })),
      })),
      delete: jest.fn(() => ({
        eq: jest.fn(() => Promise.resolve({ error: null })),
      })),
    })),
    channel: jest.fn(() => ({
      on: jest.fn(() => ({ subscribe: jest.fn() })),
      subscribe: jest.fn(),
      unsubscribe: jest.fn(),
      send: jest.fn(),
      track: jest.fn(),
    })),
  })),
}))

// Mock expo modules that might be used
jest.mock('expo-file-system', () => ({}))
jest.mock('expo-sharing', () => ({}))
