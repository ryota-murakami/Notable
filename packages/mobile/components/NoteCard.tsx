import { View, StyleSheet, Alert } from 'react-native'
import { Card, Text, IconButton, Chip } from 'react-native-paper'
import { Note } from '../types'

interface NoteCardProps {
  note: Note
  onPress: () => void
  onDelete: () => void
}

export function NoteCard({ note, onPress, onDelete }: NoteCardProps) {
  const handleDelete = () => {
    Alert.alert(
      'Delete Note',
      `Are you sure you want to delete "${note.title}"?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: onDelete },
      ]
    )
  }

  const getPreviewText = (content: string): string => {
    if (!content) return 'No content'

    // If content is JSON (from Plate.js), extract text
    if (
      (typeof content === 'string' && content.startsWith('[')) ||
      content.startsWith('{')
    ) {
      try {
        const parsed = JSON.parse(content)
        if (Array.isArray(parsed)) {
          // Extract text from Plate.js nodes
          const extractText = (node: any): string => {
            if (typeof node === 'string') return node
            if (node.text) return node.text
            if (node.children) {
              return node.children.map(extractText).join('')
            }
            return ''
          }
          const text = parsed.map(extractText).join(' ')
          return text.substring(0, 150) + (text.length > 150 ? '...' : '')
        }
      } catch {
        // Fall through to treat as regular text
      }
    }

    // Remove markdown formatting for preview
    const plainText = content
      .replace(/^#{1,6}\s+/gm, '') // Remove headers
      .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
      .replace(/\*(.*?)\*/g, '$1') // Remove italic
      .replace(/`(.*?)`/g, '$1') // Remove inline code
      .replace(/```[\s\S]*?```/g, '[Code Block]') // Replace code blocks
      .replace(/^\s*[-*+]\s+/gm, '') // Remove list markers
      .replace(/^\s*>\s+/gm, '') // Remove blockquotes
      .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Remove links, keep text
      .replace(/!\[.*?\]\(.*?\)/g, '[Image]') // Replace images
      .replace(/\n+/g, ' ') // Replace newlines with spaces
      .trim()

    return plainText.substring(0, 150) + (plainText.length > 150 ? '...' : '')
  }

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60)

    if (diffInHours < 1) {
      const diffInMinutes = Math.floor(diffInHours * 60)
      return diffInMinutes <= 1 ? 'Just now' : `${diffInMinutes}m ago`
    } else if (diffInHours < 24) {
      return `${Math.floor(diffInHours)}h ago`
    } else if (diffInHours < 24 * 7) {
      const diffInDays = Math.floor(diffInHours / 24)
      return `${diffInDays}d ago`
    } else {
      return date.toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined,
      })
    }
  }

  return (
    <Card style={styles.card} onPress={onPress}>
      <Card.Content style={styles.content}>
        <View style={styles.header}>
          <Text variant='titleMedium' style={styles.title} numberOfLines={1}>
            {note.title || 'Untitled'}
          </Text>
          <IconButton
            icon='delete'
            size={20}
            onPress={handleDelete}
            style={styles.deleteButton}
          />
        </View>

        <Text variant='bodyMedium' style={styles.preview} numberOfLines={3}>
          {getPreviewText(note.content)}
        </Text>

        <View style={styles.footer}>
          <Chip
            mode='outlined'
            compact
            style={styles.dateChip}
            textStyle={styles.dateText}
          >
            {formatDate(note.updatedAt)}
          </Chip>

          {note.parentId && (
            <Chip
              mode='outlined'
              compact
              style={styles.folderChip}
              textStyle={styles.folderText}
              icon='folder'
            >
              <Text>Folder</Text>
            </Chip>
          )}
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
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  title: {
    flex: 1,
    fontWeight: 'bold',
    marginRight: 8,
  },
  deleteButton: {
    margin: 0,
    marginTop: -8,
    marginRight: -8,
  },
  preview: {
    marginBottom: 12,
    lineHeight: 20,
    opacity: 0.8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },
  dateChip: {
    height: 28,
  },
  dateText: {
    fontSize: 12,
  },
  folderChip: {
    height: 28,
  },
  folderText: {
    fontSize: 12,
  },
})
