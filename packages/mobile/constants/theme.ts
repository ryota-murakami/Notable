import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper'

export const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#3B82F6',
    secondary: '#8B5CF6',
    tertiary: '#EC4899',
    error: '#EF4444',
    background: '#FFFFFF',
    surface: '#F3F4F6',
    surfaceVariant: '#E5E7EB',
  },
}

export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#60A5FA',
    secondary: '#A78BFA',
    tertiary: '#F472B6',
    error: '#F87171',
    background: '#111827',
    surface: '#1F2937',
    surfaceVariant: '#374151',
  },
}
