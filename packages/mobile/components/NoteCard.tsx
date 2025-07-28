import React from 'react'
import { Animated, Pressable, StyleSheet, View } from 'react-native'
import { Card, Chip, IconButton, Text, useTheme } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'
import { type Note } from '../types'

interface NoteCardProps {
  note: Note
  onPress: () => void
  onDelete: () => void
}

export const NoteCard: React.FC<NoteCardProps> = ({
  note,
  onPress,
  onDelete,
}) => {
  const theme = useTheme()
  const scaleAnim = React.useRef(new Animated.Value(1)).current

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.98,
      useNativeDriver: true,
    }).start()
  }

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start()
  }

  const getTimeAgo = (date: Date) => {
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)

    if (days > 0) return `${days}d ago`
    if (hours > 0) return `${hours}h ago`
    if (minutes > 0) return `${minutes}m ago`
    return 'Just now'
  }

  return (
    <Animated.View style={[{ transform: [{ scale: scaleAnim }] }]}>
      <Pressable
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
          <View style={styles.cardContent}>
            <View style={styles.header}>
              <View style={styles.titleContainer}>
                {note.is_folder && (
                  <Ionicons
                    name='folder'
                    size={20}
                    color={theme.colors.primary}
                    style={styles.folderIcon}
                  />
                )}
                <Text
                  style={[styles.title, { color: theme.colors.onSurface }]}
                  numberOfLines={1}
                >
                  {note.title || 'Untitled'}
                </Text>
              </View>
              <IconButton
                icon='delete-outline'
                size={20}
                iconColor={theme.colors.error}
                accessibilityLabel="delete"
                onPress={(e) => {
                  e?.stopPropagation?.()
                  onDelete()
                }}
                style={styles.deleteButton}
              />
            </View>

            {!note.is_folder && note.content && (
              <Text
                style={[
                  styles.content,
                  { color: theme.colors.onSurfaceVariant },
                ]}
                numberOfLines={2}
              >
                {note.content}
              </Text>
            )}

            <View style={styles.footer}>
              <Text
                style={[
                  styles.timestamp,
                  { color: theme.colors.onSurfaceVariant },
                ]}
              >
                {note.updated_at
                  ? getTimeAgo(new Date(note.updated_at))
                  : 'Just now'}
              </Text>
              {note.tags && note.tags.length > 0 && (
                <View style={styles.tags}>
                  {note.tags.slice(0, 2).map((tag, index) => (
                    <Chip
                      key={index}
                      style={[
                        styles.tag,
                        { backgroundColor: theme.colors.primaryContainer },
                      ]}
                      textStyle={styles.tagText}
                      compact
                    >
                      {typeof tag === 'string' ? tag : tag.name}
                    </Chip>
                  ))}
                  {note.tags.length > 2 && (
                    <Text
                      style={[styles.moreText, { color: theme.colors.primary }]}
                    >
                      +{note.tags.length - 2}
                    </Text>
                  )}
                </View>
              )}
            </View>
          </View>
        </Card>
      </Pressable>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 6,
    marginHorizontal: 16,
    borderRadius: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardContent: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  folderIcon: {
    marginRight: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
  },
  deleteButton: {
    margin: -8,
  },
  content: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timestamp: {
    fontSize: 12,
  },
  tags: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tag: {
    marginLeft: 4,
    height: 24,
  },
  tagText: {
    fontSize: 11,
  },
  moreText: {
    fontSize: 12,
    marginLeft: 4,
  },
})
