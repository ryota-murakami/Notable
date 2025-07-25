import { FlatList, StyleSheet, View } from 'react-native'
import { ActivityIndicator, FAB, Text } from 'react-native-paper'
import { useRouter } from 'expo-router'
import { useSupabase } from '@/components/SupabaseProvider'
import { useOfflineNotes } from '@/hooks/use-offline-notes'
import { NoteCard } from '@/components/NoteCard'
import { EmptyState } from '@/components/EmptyState'
import { type Note } from '../../types'

export default function NotesScreen() {
  const { user } = useSupabase()
  const { notes, isLoading, createNote, deleteNote } = useOfflineNotes(
    user?.id ? { user_id: user.id } : {}
  )
  const router = useRouter()

  const handleCreateNote = async (isFolder = false) => {
    const newNote = await createNote({
      title: isFolder ? 'New Folder' : 'Untitled Note',
      content: '',
      is_folder: isFolder,
    })
    if (newNote) {
      router.push(`/note/${newNote.id}`)
    }
  }

  const filteredNotes = notes

  const renderItem = ({ item }: { item: Note }) => (
    <NoteCard
      note={item}
      onPress={() => router.push(`/note/${item.id}`)}
      onDelete={() => deleteNote()}
    />
  )

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator animating={true} size='large' />
        <Text style={{ marginTop: 8 }}>Loading notes...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {notes.length === 0 ? (
        <EmptyState
          title='No notes yet'
          description='Create a new note to get started.'
          icon='add-outline'
        />
      ) : (
        <FlatList
          data={filteredNotes}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
        />
      )}
      <FAB.Group
        open={false}
        visible
        icon='plus'
        actions={[
          {
            icon: 'note-plus',
            label: 'New Note',
            onPress: () => handleCreateNote(false),
          },
          {
            icon: 'folder-plus',
            label: 'New Folder',
            onPress: () => handleCreateNote(true),
          },
        ]}
        onStateChange={() => {}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 8,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
