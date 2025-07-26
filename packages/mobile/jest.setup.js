// Jest setup file for mobile package
require('react-native-gesture-handler/jestSetup')

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
)

// Mock NetInfo
jest.mock('@react-native-community/netinfo', () =>
  require('@react-native-community/netinfo/jest/netinfo-mock')
)

// Mock Expo File System
jest.mock('expo-file-system', () => ({
  documentDirectory: 'file://test-directory/',
  readAsStringAsync: jest.fn(() => Promise.resolve('test file content')),
  writeAsStringAsync: jest.fn(() => Promise.resolve()),
  deleteAsync: jest.fn(() => Promise.resolve()),
  getInfoAsync: jest.fn(() =>
    Promise.resolve({ exists: true, isDirectory: false })
  ),
  makeDirectoryAsync: jest.fn(() => Promise.resolve()),
  readDirectoryAsync: jest.fn(() => Promise.resolve(['file1', 'file2'])),
  copyAsync: jest.fn(() => Promise.resolve()),
  moveAsync: jest.fn(() => Promise.resolve()),
}))

// Mock Expo Sharing
jest.mock('expo-sharing', () => ({
  isAvailableAsync: jest.fn(() => Promise.resolve(true)),
  shareAsync: jest.fn(() => Promise.resolve()),
}))

// Mock Expo Font
jest.mock('expo-font', () => ({
  useFonts: jest.fn(() => [true, null]),
  loadAsync: jest.fn(() => Promise.resolve()),
  isLoaded: jest.fn(() => true),
  isLoading: jest.fn(() => false),
}))

// Mock Expo Router
jest.mock('expo-router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
    canGoBack: jest.fn(() => true),
  }),
  usePathname: () => '/',
  useSearchParams: () => ({}),
  Link: ({ children, ..._props }) => children,
  router: {
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
    canGoBack: jest.fn(() => true),
  },
}))

// Mock react-native-reanimated
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock')
  Reanimated.default.call = () => {}
  return Reanimated
})

// Mock Supabase client
jest.mock('@supabase/supabase-js', () => {
  const mockSupabase = {
    auth: {
      signInWithPassword: jest.fn(() =>
        Promise.resolve({
          data: {
            user: { id: 'test-user', email: 'test@example.com' },
            session: { access_token: 'test-token' },
          },
          error: null,
        })
      ),
      signUp: jest.fn(() =>
        Promise.resolve({
          data: {
            user: { id: 'test-user', email: 'test@example.com' },
            session: null,
          },
          error: null,
        })
      ),
      signOut: jest.fn(() => Promise.resolve({ error: null })),
      onAuthStateChange: jest.fn(() => ({
        data: { subscription: {} },
        unsubscribe: jest.fn(),
      })),
      getSession: jest.fn(() =>
        Promise.resolve({
          data: { session: { access_token: 'test-token' } },
          error: null,
        })
      ),
      getUser: jest.fn(() =>
        Promise.resolve({
          data: { user: { id: 'test-user', email: 'test@example.com' } },
          error: null,
        })
      ),
    },
    from: jest.fn().mockReturnThis(),
    select: jest.fn().mockReturnThis(),
    insert: jest.fn().mockReturnThis(),
    update: jest.fn().mockReturnThis(),
    delete: jest.fn().mockReturnThis(),
    eq: jest.fn().mockReturnThis(),
    order: jest.fn().mockReturnThis(),
    limit: jest.fn().mockReturnThis(),
    single: jest.fn(() =>
      Promise.resolve({
        data: { id: 'test-id', title: 'Test Note' },
        error: null,
      })
    ),
    then: jest.fn(() =>
      Promise.resolve({
        data: [{ id: 'test-id', title: 'Test Note' }],
        error: null,
      })
    ),
  }

  return {
    createClient: jest.fn(() => mockSupabase),
  }
})

// Mock React Native Paper
jest.mock('react-native-paper', () => {
  const RN = require('react-native')

  return {
    ...jest.requireActual('react-native-paper'),
    Portal: ({ children }) => children,
    Modal: RN.Modal,
    Surface: RN.View,
    Appbar: {
      Header: RN.View,
      Content: RN.View,
      Action: RN.TouchableOpacity,
      BackAction: RN.TouchableOpacity,
    },
    Button: RN.TouchableOpacity,
    Card: {
      ...RN.View,
      Title: RN.Text,
      Content: RN.View,
      Actions: RN.View,
    },
    Chip: RN.TouchableOpacity,
    FAB: RN.TouchableOpacity,
    IconButton: RN.TouchableOpacity,
    List: {
      Item: RN.TouchableOpacity,
      Section: RN.View,
      Subheader: RN.Text,
    },
    Menu: {
      ...RN.View,
      Item: RN.TouchableOpacity,
    },
    Searchbar: RN.TextInput,
    Snackbar: RN.View,
    TextInput: RN.TextInput,
    Text: RN.Text,
  }
})

// Mock React Native Markdown Display
jest.mock('react-native-markdown-display', () => {
  const React = require('react')
  const { Text } = require('react-native')

  return {
    __esModule: true,
    default: ({ children }) => React.createElement(Text, null, children),
  }
})

// Global test setup
global.beforeEach(() => {
  // Clear all mocks before each test
  jest.clearAllMocks()
})

// Silence warnings for tests
global.console.warn = jest.fn()
global.console.error = jest.fn()
