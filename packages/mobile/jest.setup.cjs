/* eslint-env jest */
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

// Mock Expo Linear Gradient
jest.mock('expo-linear-gradient', () => {
  const React = require('react')
  const { View } = require('react-native')
  return {
    LinearGradient: ({ children, ...props }) =>
      React.createElement(View, props, children),
  }
})

// Mock Expo Vector Icons
jest.mock('@expo/vector-icons', () => {
  const React = require('react')
  const mockIcon = ({ name, ...props }) =>
    React.createElement(
      'Text',
      {
        ...props,
        testID: `icon-${name}`,
        accessibilityLabel: `${name} icon`,
      },
      name
    )

  return {
    Ionicons: mockIcon,
    MaterialIcons: mockIcon,
    MaterialCommunityIcons: mockIcon,
    FontAwesome: mockIcon,
    Feather: mockIcon,
    AntDesign: mockIcon,
    Entypo: mockIcon,
    EvilIcons: mockIcon,
    FontAwesome5: mockIcon,
    Foundation: mockIcon,
    Octicons: mockIcon,
    SimpleLineIcons: mockIcon,
    Zocial: mockIcon,
  }
})

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

// Mock React Native Animated API
const mockAnimatedValue = jest.fn(() => ({
  setValue: jest.fn(),
  setOffset: jest.fn(),
  flattenOffset: jest.fn(),
  extractOffset: jest.fn(),
  addListener: jest.fn(() => '1'),
  removeListener: jest.fn(),
  removeAllListeners: jest.fn(),
  stopAnimation: jest.fn(),
  resetAnimation: jest.fn(),
  interpolate: jest.fn((config) => ({
    ...config,
    _parent: mockAnimatedValue(),
  })),
  animate: jest.fn(),
  track: jest.fn(),
  _value: 0,
}))

const MockAnimated = {
  Value: mockAnimatedValue,
  ValueXY: jest.fn(() => ({
    x: mockAnimatedValue(),
    y: mockAnimatedValue(),
    setValue: jest.fn(),
    setOffset: jest.fn(),
    flattenOffset: jest.fn(),
    extractOffset: jest.fn(),
    resetAnimation: jest.fn(),
    stopAnimation: jest.fn(),
    addListener: jest.fn(),
    removeListener: jest.fn(),
    removeAllListeners: jest.fn(),
    getLayout: jest.fn(() => ({
      left: mockAnimatedValue(),
      top: mockAnimatedValue(),
    })),
    getTranslateTransform: jest.fn(() => [
      { translateX: mockAnimatedValue() },
      { translateY: mockAnimatedValue() },
    ]),
  })),
  timing: jest.fn(() => ({
    start: jest.fn(),
    stop: jest.fn(),
    reset: jest.fn(),
  })),
  spring: jest.fn(() => ({
    start: jest.fn(),
    stop: jest.fn(),
    reset: jest.fn(),
  })),
  decay: jest.fn(() => ({
    start: jest.fn(),
    stop: jest.fn(),
    reset: jest.fn(),
  })),
  parallel: jest.fn(() => ({
    start: jest.fn(),
    stop: jest.fn(),
    reset: jest.fn(),
  })),
  sequence: jest.fn(() => ({
    start: jest.fn(),
    stop: jest.fn(),
    reset: jest.fn(),
  })),
  stagger: jest.fn(() => ({
    start: jest.fn(),
    stop: jest.fn(),
    reset: jest.fn(),
  })),
  loop: jest.fn(() => ({
    start: jest.fn(),
    stop: jest.fn(),
    reset: jest.fn(),
  })),
  event: jest.fn(),
  createAnimatedComponent: jest.fn((Component) => Component),
}

// Mock React Native
jest.mock('react-native', () => {
  const React = require('react')

  const createMockComponent = (name) =>
    React.forwardRef((props, ref) => {
      // Handle onPress events with proper event object
      if (props.onPress && name === 'TouchableOpacity') {
        const newOnPress = () => {
          const mockEvent = {
            stopPropagation: jest.fn(),
            preventDefault: jest.fn(),
            nativeEvent: {},
          }
          props.onPress(mockEvent)
        }
        return React.createElement(
          name,
          { ...props, onPress: newOnPress, ref },
          props.children
        )
      }
      return React.createElement(name, { ...props, ref }, props.children)
    })

  return {
    Platform: {
      OS: 'ios',
      select: jest.fn((options) => options.ios),
    },
    StyleSheet: {
      create: jest.fn((styles) => styles),
      flatten: jest.fn((style) => style),
    },
    Dimensions: {
      get: jest.fn(() => ({ width: 375, height: 667 })),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    },
    PixelRatio: {
      get: jest.fn(() => 2),
      getFontScale: jest.fn(() => 1),
      getPixelSizeForLayoutSize: jest.fn((size) => size * 2),
      roundToNearestPixel: jest.fn((size) => size),
    },
    Animated: {
      ...MockAnimated,
      View: createMockComponent('Animated.View'),
      Text: createMockComponent('Animated.Text'),
      Image: createMockComponent('Animated.Image'),
      ScrollView: createMockComponent('Animated.ScrollView'),
      FlatList: createMockComponent('Animated.FlatList'),
      SectionList: createMockComponent('Animated.SectionList'),
    },
    View: createMockComponent('View'),
    Text: createMockComponent('Text'),
    TextInput: createMockComponent('TextInput'),
    Image: createMockComponent('Image'),
    ScrollView: createMockComponent('ScrollView'),
    FlatList: createMockComponent('FlatList'),
    SectionList: createMockComponent('SectionList'),
    TouchableOpacity: createMockComponent('TouchableOpacity'),
    TouchableHighlight: createMockComponent('TouchableHighlight'),
    TouchableWithoutFeedback: createMockComponent('TouchableWithoutFeedback'),
    Pressable: createMockComponent('Pressable'),
    Modal: createMockComponent('Modal'),
    ActivityIndicator: createMockComponent('ActivityIndicator'),
    SafeAreaView: createMockComponent('SafeAreaView'),
    KeyboardAvoidingView: createMockComponent('KeyboardAvoidingView'),
    Linking: {
      openURL: jest.fn(() => Promise.resolve()),
      canOpenURL: jest.fn(() => Promise.resolve(true)),
      getInitialURL: jest.fn(() => Promise.resolve(null)),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    },
    Alert: {
      alert: jest.fn(),
      prompt: jest.fn(),
    },
    AppState: {
      currentState: 'active',
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    },
    NativeModules: {},
    NativeEventEmitter: jest.fn(() => ({
      addListener: jest.fn(),
      removeListener: jest.fn(),
      removeAllListeners: jest.fn(),
    })),
  }
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
  const React = require('react')
  const RN = require('react-native')

  const PaperProvider = ({ children, theme: _theme }) =>
    React.createElement(RN.View, { testID: 'paper-provider' }, children)

  const mockTheme = {
    colors: {
      primary: '#6366F1',
      primaryContainer: '#818CF8',
      secondary: '#EC4899',
      secondaryContainer: '#F472B6',
      tertiary: '#10B981',
      tertiaryContainer: '#34D399',
      background: '#FAFBFF',
      surface: '#FFFFFF',
      surfaceVariant: '#F3F4F6',
      onBackground: '#1A1C1E',
      onSurface: '#1A1C1E',
      onSurfaceVariant: '#6B7280',
      onPrimary: '#FFFFFF',
      error: '#EF4444',
      errorContainer: '#FCA5A5',
      outline: '#E5E7EB',
      shadow: '#000000',
    },
    fonts: {},
    roundness: 16,
  }

  return {
    PaperProvider,
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
    Card: Object.assign(
      ({ children, style, onPress, ...props }) =>
        React.createElement(
          RN.TouchableOpacity,
          { style, onPress, ...props },
          children
        ),
      {
        Title: RN.Text,
        Content: ({ children, style, ...props }) =>
          React.createElement(
            RN.View,
            { style, testID: 'card-content', ...props },
            children
          ),
        Actions: RN.View,
      }
    ),
    Chip: RN.TouchableOpacity,
    FAB: Object.assign(RN.TouchableOpacity, {
      Group: ({ children, ...props }) =>
        React.createElement(RN.View, props, children),
    }),
    IconButton: ({ icon, onPress, ...props }) => {
      const handlePress = () => {
        if (onPress) {
          const mockEvent = {
            stopPropagation: jest.fn(),
            preventDefault: jest.fn(),
            nativeEvent: {},
          }
          onPress(mockEvent)
        }
      }
      return React.createElement(RN.TouchableOpacity, {
        onPress: handlePress,
        accessibilityLabel: icon === 'delete-outline' ? 'delete' : icon,
        testID: `icon-button-${icon}`,
        ...props,
      })
    },
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
    ActivityIndicator: RN.ActivityIndicator,
    useTheme: () => mockTheme,
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
