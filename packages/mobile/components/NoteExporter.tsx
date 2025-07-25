import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button } from 'react-native-paper'

interface Note {
  id: string
  title: string
  content: string
}

interface NoteExporterProps {
  note: Note
  onClose: () => void
}

export const NoteExporter: React.FC<NoteExporterProps> = ({ note, onClose }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Export Note</Text>
      <Text style={styles.subtitle}>Note: {note.title}</Text>
      <Button mode="outlined" onPress={onClose} style={styles.button}>
        <Text>Close</Text>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
})