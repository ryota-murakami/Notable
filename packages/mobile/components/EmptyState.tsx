import { View, StyleSheet } from 'react-native'
import { Text, Button, useTheme } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'

type IconName = keyof typeof MaterialCommunityIcons.glyphMap

interface EmptyStateProps {
  title: string
  description: string
  icon: IconName
  actionLabel?: string
  onAction?: () => void
}

export function EmptyState({
  title,
  description,
  icon,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  const theme = useTheme()

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={icon}
        size={64}
        color={theme.colors.onSurfaceVariant}
        style={styles.icon}
      />

      <Text
        variant='headlineSmall'
        style={[styles.title, { color: theme.colors.onSurface }]}
      >
        {title}
      </Text>

      <Text
        variant='bodyMedium'
        style={[styles.description, { color: theme.colors.onSurfaceVariant }]}
      >
        {description}
      </Text>

      {actionLabel && onAction && (
        <Button mode='contained' onPress={onAction} style={styles.actionButton}>
          {actionLabel}
        </Button>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingVertical: 48,
  },
  icon: {
    marginBottom: 16,
    opacity: 0.6,
  },
  title: {
    textAlign: 'center',
    marginBottom: 8,
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
  },
  actionButton: {
    marginTop: 8,
  },
})
