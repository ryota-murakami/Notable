import React from 'react'
import { StyleSheet } from 'react-native'
import { Card, Text, IconButton } from 'react-native-paper'

interface Note {
  id: string
  title: string
  content: string
  is_folder?: boolean
}

interface NoteCardProps {
  note: Note
  onPress: () => void
  onDelete: () => void
}

export const NoteCard: React.FC<NoteCardProps> = ({ note, onPress, onDelete }) => {
  return (
    <Card style={styles.card} onPress={onPress}>
      <Card.Content>
        <Text style={styles.title}>{note.title}</Text>
        <Text style={styles.content} numberOfLines={2}>
          {note.content}
        </Text>
      </Card.Content>
      <Card.Actions>
        <IconButton icon="delete" onPress={onDelete} />
      </Card.Actions>
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 4,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  content: {
    fontSize: 14,
  },
})