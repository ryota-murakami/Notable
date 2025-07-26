// Base Jest setup file - mocks problematic Flow-typed modules
// This must be loaded before other setup files

// Mock the problematic @react-native/js-polyfills module
jest.mock('@react-native/js-polyfills/error-guard', () => ({
  setGlobalHandler: jest.fn(),
  getGlobalHandler: jest.fn(),
}))

// Mock other Flow-typed React Native polyfills
jest.mock('@react-native/js-polyfills', () => ({}))

// Completely mock React Native to avoid Flow issues
jest.mock('react-native', () => ({
  Platform: {
    OS: 'ios',
    select: (options) => options.ios || options.default,
  },
  NativeModules: {},
  View: 'View',
  Text: 'Text',
  TouchableOpacity: 'TouchableOpacity',
  ScrollView: 'ScrollView',
  TextInput: 'TextInput',
  Modal: 'Modal',
  Image: 'Image',
  SafeAreaView: 'SafeAreaView',
  FlatList: 'FlatList',
  SectionList: 'SectionList',
  ActivityIndicator: 'ActivityIndicator',
  Pressable: 'Pressable',
  StyleSheet: {
    create: (styles) => styles,
    flatten: (styles) => (Array.isArray(styles) ? Object.assign({}, ...styles) : styles || {}),
  },
  Dimensions: {
    get: () => ({ width: 375, height: 667 }),
  },
  Alert: {
    alert: jest.fn(),
  },
  Linking: {
    openURL: jest.fn(),
  },
}))