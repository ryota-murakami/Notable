// require('@testing-library/jest-native/extend-expect')

// Mock Expo modules
jest.mock('expo-router', () => ({
  router: {
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
  },
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
  }),
  useLocalSearchParams: () => ({}),
  useSegments: () => [],
  Link: ({ children }) => children,
  Tabs: ({ children }) => children,
  Stack: {
    Screen: ({ children }) => children,
  },
}))

// Mock react-native-paper
jest.mock('react-native-paper', () => {
  const React = require('react')
  const { View, Text } = require('react-native')
  
  const mockTheme = {
    colors: {
      primary: '#000',
      background: '#fff',
      surface: '#fff',
      text: '#000',
      error: '#f00',
      onSurface: '#000',
      disabled: '#ccc',
      placeholder: '#999',
      backdrop: '#000',
      notification: '#000',
    },
    fonts: {
      regular: { fontFamily: 'System', fontWeight: '400' },
      medium: { fontFamily: 'System', fontWeight: '500' },
      light: { fontFamily: 'System', fontWeight: '300' },
      thin: { fontFamily: 'System', fontWeight: '100' },
    },
    roundness: 4,
    animation: { scale: 1 },
    dark: false,
  }

  return {
    Provider: ({ children }) => children,
    DefaultTheme: mockTheme,
    MD3LightTheme: mockTheme,
    ThemeProvider: ({ children }) => children,
    Card: ({ children, ...props }) => React.createElement(View, props, children),
    'Card.Title': ({ title, subtitle }) => React.createElement(View, {}, 
      React.createElement(Text, {}, title),
      subtitle && React.createElement(Text, {}, subtitle)
    ),
    'Card.Content': ({ children, ...props }) => React.createElement(View, props, children),
    Title: ({ children, ...props }) => React.createElement(Text, props, children),
    Paragraph: ({ children, ...props }) => React.createElement(Text, props, children),
    Chip: ({ children, ...props }) => React.createElement(View, props, 
      React.createElement(Text, {}, children)
    ),
    Text: ({ children, ...props }) => React.createElement(Text, props, children),
    Searchbar: ({ ...props }) => React.createElement(View, props),
    ActivityIndicator: () => React.createElement(View),
    Button: ({ children, onPress, ...props }) => 
      React.createElement(View, { onPress, ...props }, 
        React.createElement(Text, {}, children)
      ),
    Appbar: {
      Header: ({ children, ...props }) => React.createElement(View, props, children),
      BackAction: (props) => React.createElement(View, props),
      Content: ({ children, ...props }) => React.createElement(View, props, children),
    },
    FAB: ({ onPress, ...props }) => React.createElement(View, { onPress, ...props }),
    List: {
      Item: ({ title, description, ...props }) => React.createElement(View, props,
        React.createElement(Text, {}, title),
        description && React.createElement(Text, {}, description)
      ),
    },
    useTheme: () => mockTheme,
  }
})

// Mock Supabase
const mockSupabase = {
  auth: {
    getSession: jest.fn().mockResolvedValue({ data: { session: null }, error: null }),
    onAuthStateChange: jest.fn(() => ({
      data: { subscription: { unsubscribe: jest.fn() } }
    })),
    signInWithPassword: jest.fn().mockResolvedValue({ data: null, error: null }),
    signUp: jest.fn().mockResolvedValue({ data: null, error: null }),
    signOut: jest.fn().mockResolvedValue({ error: null }),
  },
  from: jest.fn(() => ({
    select: jest.fn().mockReturnThis(),
    eq: jest.fn().mockReturnThis(),
    order: jest.fn().mockReturnThis(),
    limit: jest.fn().mockReturnThis(),
    single: jest.fn().mockResolvedValue({ data: null, error: null }),
    insert: jest.fn().mockResolvedValue({ data: null, error: null }),
    update: jest.fn().mockResolvedValue({ data: null, error: null }),
    delete: jest.fn().mockResolvedValue({ data: null, error: null }),
  })),
}

// Mock SupabaseProvider
jest.mock('./components/SupabaseProvider', () => ({
  useSupabase: () => ({
    user: null,
    isLoading: false,
    signIn: jest.fn(),
    signUp: jest.fn(),
    signOut: jest.fn(),
    supabase: mockSupabase,
  }),
  SupabaseProvider: ({ children }) => children,
}))

// Mock react-native-reanimated if needed
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock')
  Reanimated.default.call = () => {}
  return Reanimated
})

// Mock react-native-gesture-handler
jest.mock('react-native-gesture-handler', () => ({
  Directions: {},
  State: {},
  PanGestureHandler: 'PanGestureHandler',
  BaseButton: 'BaseButton',
  Swipeable: 'Swipeable',
  DrawerLayout: 'DrawerLayout',
  DrawerLayoutAndroid: 'DrawerLayoutAndroid',
  DrawerLayoutIOS: 'DrawerLayoutIOS',
  ScrollView: 'ScrollView',
  NativeViewGestureHandler: 'NativeViewGestureHandler',
  TapGestureHandler: 'TapGestureHandler',
  TouchableHighlight: 'TouchableHighlight',
  TouchableNativeFeedback: 'TouchableNativeFeedback',
  TouchableOpacity: 'TouchableOpacity',
  TouchableWithoutFeedback: 'TouchableWithoutFeedback',
}))

// Global test configuration
global.console = {
  ...console,
  // Suppress console warnings in tests
  warn: jest.fn(),
  error: jest.fn(),
}

// Set test timeout
jest.setTimeout(10000)