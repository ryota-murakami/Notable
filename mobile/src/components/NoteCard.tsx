import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Text, IconButton, Chip, useTheme } from 'react-native-paper'
import { Note } from '@/types'

interface NoteCardProps {
  note: Note
  onPress: () => void
  onDelete: () => void
}

export function NoteCard({ note, onPress, onDelete }: NoteCardProps) {
  const theme = useTheme()

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 1) {
      return 'Today'
    } else if (diffDays === 2) {
      return 'Yesterday'
    } else if (diffDays <= 7) {
      return `${diffDays - 1} days ago`
    } else {
      return date.toLocaleDateString()
    }
  }

  const getPreviewText = (content: string) => {
    if (typeof content !== 'string') return ''

    // Try to parse JSON content (from Plate.js)
    try {
      const parsed = JSON.parse(content)
      if (Array.isArray(parsed)) {
        // Extract text from Plate.js structure
        const extractText = (nodes: any[]): string => {
          return nodes
            .map((node) => {
              if (node.children) {
                return extractText(node.children)
              }
              return node.text || ''
            })
            .join(' ')
        }
        return extractText(parsed).slice(0, 150)
      }
    } catch {
      // If not JSON, treat as plain text
    }

    return content.slice(0, 150)
  }

  return (
    <Card style={styles.card} onPress={onPress}>
      <Card.Content style={styles.content}>
        <View style={styles.header}>
          <Text variant="titleMedium" style={styles.title} numberOfLines={2}>
            {note.title || 'Untitled'}
          </Text>
          <IconButton
            icon="delete-outline"
            size={20}
            onPress={(e) => {
              e.stopPropagation()
              onDelete()
            }}
            iconColor={theme.colors.error}
          />
        </View>

        {getPreviewText(note.content) && (
          <Text
            variant="bodyMedium"
            style={[styles.preview, { color: theme.colors.onSurfaceVariant }]}
            numberOfLines={3}
          >
            {getPreviewText(note.content)}
          </Text>
        )}

        <View style={styles.footer}>
          <View style={styles.tags}>
            {note.tags?.slice(0, 3).map((tag) => (
              <Chip
                key={tag.id}
                mode="outlined"
                compact
                style={[styles.tag, { borderColor: tag.color }]}
                textStyle={{ fontSize: 12 }}
              >
                {tag.name}
              </Chip>
            ))}
            {note.tags && note.tags.length > 3 && (
              <Chip
                mode="outlined"
                compact
                style={styles.tag}
                textStyle={{ fontSize: 12 }}
              >
                +{note.tags.length - 3}
              </Chip>
            )}
          </View>

          <Text
            variant="bodySmall"
            style={[styles.date, { color: theme.colors.onSurfaceVariant }]}
          >
            {formatDate(note.updatedAt)}
          </Text>
        </View>
      </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 12,
    elevation: 2,
  },
  content: {
    paddingVertical: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  title: {
    flex: 1,
    fontWeight: '600',
    marginRight: 8,
  },
  preview: {
    marginBottom: 12,
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    marginRight: 12,
  },
  tag: {
    marginRight: 6,
    marginBottom: 4,
    height: 24,
  },
  date: {
    textAlign: 'right',
  },
})
