import React from 'react'
import { type StyleProp, StyleSheet, type ViewStyle } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useTheme } from 'react-native-paper'

interface GradientBackgroundProps {
  children: React.ReactNode
  colors?: readonly [string, string, ...string[]]
  style?: StyleProp<ViewStyle>
}

export const GradientBackground: React.FC<GradientBackgroundProps> = ({
  children,
  colors,
  style,
}) => {
  const theme = useTheme()

  const defaultColors: readonly [string, string] = [
    theme.colors.background,
    theme.colors.surfaceVariant,
  ] as const

  return (
    <LinearGradient
      colors={colors || defaultColors}
      style={[styles.gradient, style]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      {children}
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
})
