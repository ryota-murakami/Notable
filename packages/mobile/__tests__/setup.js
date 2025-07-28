// Mock Expo modules  
jest.mock('expo-font', () => ({
  loadAsync: jest.fn().mockResolvedValue(undefined),
  isLoaded: jest.fn(() => true),
}))

jest.mock('expo-splash-screen', () => ({
  preventAutoHideAsync: jest.fn().mockResolvedValue(undefined),
  hideAsync: jest.fn().mockResolvedValue(undefined),
}))

jest.mock('expo-status-bar', () => ({
  StatusBar: 'StatusBar',
}))

// Mock expo-router
jest.mock('expo-router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    back: jest.fn(),
    replace: jest.fn(),
  }),
  useLocalSearchParams: () => ({}),
  Link: ({ children }) => children,
  Stack: ({ children }) => children,
  Tabs: ({ children }) => children,
}))

// Mock react-native components
jest.mock('react-native', () => {
  const ReactNative = jest.requireActual('react-native')
  
  // Mock components that might cause issues
  ReactNative.View = 'View'
  ReactNative.Text = 'Text'
  ReactNative.TouchableOpacity = 'TouchableOpacity'
  ReactNative.ScrollView = 'ScrollView'
  ReactNative.FlatList = 'FlatList'
  
  return ReactNative
})

// Mock @expo/vector-icons
jest.mock('@expo/vector-icons', () => ({
  Ionicons: ({ name, size, color, ...props }) => {
    const React = require('react')
    return React.createElement('Ionicons', {
      testID: `icon-${name}`,
      accessibilityLabel: `${name} icon`,
      name,
      size,
      color,
      ...props,
    })
  },
  MaterialIcons: 'MaterialIcons',
  AntDesign: 'AntDesign',
  FontAwesome: 'FontAwesome',
}))

// Mock expo-linear-gradient
jest.mock('expo-linear-gradient', () => ({
  LinearGradient: 'LinearGradient',
}))

// Mock react-native-paper
jest.mock('react-native-paper', () => ({
  PaperProvider: ({ children }) => children,
  Button: 'Button',
  Card: 'Card',
  Surface: 'Surface',
  Text: 'Text',
  useTheme: () => ({
    colors: {
      primary: '#6200ee',
      onPrimary: '#ffffff',
    },
  }),
  IconButton: ({ icon, accessibilityLabel, onPress, ...props }) => {
    const React = require('react')
    return React.createElement('IconButton', {
      accessibilityLabel,
      onPress,
      testID: `icon-button-${icon}`,
      ...props,
    })
  },
  Chip: 'Chip',
}))

// Silence warnings
console.warn = jest.fn()
console.error = jest.fn()