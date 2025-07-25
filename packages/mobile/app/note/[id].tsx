import { useCallback, useEffect, useState } from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Share,
  StyleSheet,
  View,
} from 'react-native'
import {
  ActivityIndicator,
  Appbar,
  Divider,
  Menu,
  Modal,
  Portal,
  Text,
  TextInput,
} from 'react-native-paper'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useSupabase } from '@/components/SupabaseProvider'
import { useOfflineNotes } from '@/hooks/use-offline-notes'
import { MarkdownRenderer } from '@/components/MarkdownRenderer'
import { NoteExporter } from '@/components/NoteExporter'
import { type Note } from '../../types'

export default function NoteScreen() {
  const { id } = useLocalSearchParams()
  const { user } = useSupabase()
  const {
    notes,
    updateNote,
    isLoading,
    isSaving,
    onlineUsers,
    typingUsers,
    startTyping,
    stopTyping,
  } = useOfflineNotes({
    ...(user?.id && { user_id: user.id }),
    activeNoteId: id as string,
  })

  const [note, setNote] = useState<Note | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [menuVisible, setMenuVisible] = useState(false)
  const [exportModalVisible, setExportModalVisible] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const foundNote = notes.find((n) => n.id === id)
    if (foundNote) {
      setNote(foundNote)
    }
  }, [id, notes])

  const handleSave = useCallback(async () => {
    if (note) {
      await updateNote(note.id, { title: note.title, content: note.content })
      setIsEditing(false)
    }
  }, [note, updateNote])

  const handleShare = async () => {
    if (note) {
      try {
        await Share.share({
          title: note.title,
          message: note.content,
        })
      } catch (error) {
        console.error('Error sharing note:', error)
      }
    }
  }

  if (isLoading || !note) {
    return (
      <View style={styles.center}>
        <ActivityIndicator animating={true} size='large' />
      </View>
    )
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Appbar.Header>
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content
          title={note.title}
          subtitle={isSaving ? 'Saving...' : 'Saved'}
        />
        {isEditing ? (
          <Appbar.Action icon='check' onPress={handleSave} />
        ) : (
          <Appbar.Action icon='pencil' onPress={() => setIsEditing(true)} />
        )}
        <Menu
          visible={menuVisible}
          onDismiss={() => setMenuVisible(false)}
          anchor={
            <Appbar.Action
              icon='dots-vertical'
              onPress={() => setMenuVisible(true)}
            />
          }
        >
          <Menu.Item onPress={handleShare} title='Share' />
          <Menu.Item
            onPress={() => {
              setMenuVisible(false)
              setExportModalVisible(true)
            }}
            title='Export'
          />
          <Divider />
        </Menu>
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.content}>
        {isEditing ? (
          <TextInput
            value={note.title}
            onChangeText={(text) => setNote({ ...note, title: text })}
            style={styles.titleInput}
            mode='outlined'
            label='Title'
            onFocus={startTyping}
            onBlur={stopTyping}
          />
        ) : (
          <Text style={styles.title}>{note.title}</Text>
        )}

        {isEditing ? (
          <TextInput
            value={note.content}
            onChangeText={(text) => setNote({ ...note, content: text })}
            style={styles.contentInput}
            multiline
            mode='outlined'
            label='Content'
            onFocus={startTyping}
            onBlur={stopTyping}
          />
        ) : (
          <MarkdownRenderer content={note.content} />
        )}
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {typingUsers.length > 0
            ? `${typingUsers.map((u) => u.name).join(', ')} is typing...`
            : ''}
        </Text>
        <Text style={styles.footerText}>
          {onlineUsers.length} user(s) online
        </Text>
      </View>

      <Portal>
        <Modal
          visible={exportModalVisible}
          onDismiss={() => setExportModalVisible(false)}
          contentContainerStyle={styles.modalContent}
        >
          <NoteExporter
            note={note}
            onClose={() => setExportModalVisible(false)}
          />
        </Modal>
      </Portal>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  titleInput: {
    fontSize: 24,
    marginBottom: 16,
  },
  contentInput: {
    flex: 1,
    fontSize: 16,
    textAlignVertical: 'top',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  footerText: {
    fontSize: 12,
    color: '#888',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 8,
  },
})
