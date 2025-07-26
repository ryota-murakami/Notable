import React from 'react'
import { StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useTheme } from 'react-native-paper'

interface GradientBackgroundProps {
  children: React.ReactNode
  colors?: string[]
  style?: any
}

export const GradientBackground: React.FC<GradientBackgroundProps> = ({
  children,
  colors,
  style,
}) => {
  const theme = useTheme()

  const defaultColors = [theme.colors.background, theme.colors.surfaceVariant]

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
