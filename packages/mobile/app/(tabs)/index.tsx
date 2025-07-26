import React from 'react'
import {
  Animated,
  FlatList,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native'
import {
  ActivityIndicator,
  Chip,
  FAB,
  Searchbar,
  Text,
  useTheme,
} from 'react-native-paper'
import { useRouter } from 'expo-router'
import { useSupabase } from '@/components/SupabaseProvider'
import { useOfflineNotes } from '@/hooks/use-offline-notes'
import { NoteCard } from '@/components/NoteCard'
import { EmptyState } from '@/components/EmptyState'
import { GradientBackground } from '@/components/GradientBackground'
import { LinearGradient } from 'expo-linear-gradient'
import { type Note } from '../../types'

export default function NotesScreen() {
  const { user } = useSupabase()
  const { notes, isLoading, createNote, deleteNote } = useOfflineNotes(
    user?.id ? { user_id: user.id } : {}
  )
  const router = useRouter()
  const theme = useTheme()
  const [searchQuery, setSearchQuery] = React.useState('')
  const [selectedFilter, setSelectedFilter] = React.useState<
    'all' | 'notes' | 'folders'
  >('all')
  const [refreshing, setRefreshing] = React.useState(false)
  const [fabOpen, setFabOpen] = React.useState(false)
  const fadeAnim = React.useRef(new Animated.Value(0)).current

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start()
  }, [fadeAnim])

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

  const onRefresh = React.useCallback(() => {
    setRefreshing(true)
    // Simulate refresh
    const timer = global.setTimeout(() => setRefreshing(false), 1000)
    return () => global.clearTimeout(timer)
  }, [])

  const filteredNotes = notes.filter((note) => {
    const matchesSearch =
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content?.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter =
      selectedFilter === 'all' ||
      (selectedFilter === 'notes' && !note.is_folder) ||
      (selectedFilter === 'folders' && note.is_folder)
    return matchesSearch && matchesFilter
  })

  const renderItem = ({ item, index }: { item: Note; index: number }) => {
    const inputRange = [0, 1]
    const outputRange = [50, 0]
    const translateY = fadeAnim.interpolate({
      inputRange,
      outputRange: outputRange.map((value) => value + index * 10),
    })

    return (
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ translateY }],
        }}
      >
        <NoteCard
          note={item}
          onPress={() => router.push(`/note/${item.id}`)}
          onDelete={() => deleteNote(item.id)}
        />
      </Animated.View>
    )
  }

  const ListHeader = () => (
    <View style={styles.header}>
      <LinearGradient
        colors={[theme.colors.primary, theme.colors.primaryContainer]}
        style={styles.headerGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={[styles.welcomeText, { color: theme.colors.onPrimary }]}>
          Welcome back!
        </Text>
        <Text style={[styles.statsText, { color: theme.colors.onPrimary }]}>
          {notes.length} {notes.length === 1 ? 'note' : 'notes'}
        </Text>
      </LinearGradient>

      <Searchbar
        placeholder='Search notes...'
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchBar}
        inputStyle={styles.searchInput}
        icon='magnify'
        clearIcon='close'
      />

      <View style={styles.filters}>
        <Chip
          selected={selectedFilter === 'all'}
          onPress={() => setSelectedFilter('all')}
          style={styles.filterChip}
          textStyle={styles.filterText}
        >
          <Text>All</Text>
        </Chip>
        <Chip
          selected={selectedFilter === 'notes'}
          onPress={() => setSelectedFilter('notes')}
          style={styles.filterChip}
          textStyle={styles.filterText}
        >
          <Text>Notes</Text>
        </Chip>
        <Chip
          selected={selectedFilter === 'folders'}
          onPress={() => setSelectedFilter('folders')}
          style={styles.filterChip}
          textStyle={styles.filterText}
        >
          <Text>Folders</Text>
        </Chip>
      </View>
    </View>
  )

  if (isLoading) {
    return (
      <GradientBackground>
        <View style={styles.center}>
          <ActivityIndicator
            animating={true}
            size='large'
            color={theme.colors.primary}
          />
          <Text
            style={[
              styles.loadingText,
              { color: theme.colors.onSurfaceVariant },
            ]}
          >
            Loading your notes...
          </Text>
        </View>
      </GradientBackground>
    )
  }

  return (
    <GradientBackground>
      <View style={styles.container}>
        {filteredNotes.length === 0 && searchQuery.length === 0 ? (
          <EmptyState
            title='No notes yet'
            description='Create your first note to get started.'
            icon='note-text-outline'
          />
        ) : (
          <FlatList
            data={filteredNotes}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.list}
            ListHeaderComponent={ListHeader}
            ListEmptyComponent={
              <EmptyState
                title='No results found'
                description='Try adjusting your search or filters.'
                icon='magnify'
              />
            }
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={[theme.colors.primary]}
                tintColor={theme.colors.primary}
              />
            }
          />
        )}
        <FAB.Group
          open={fabOpen}
          visible
          icon={fabOpen ? 'close' : 'plus'}
          actions={[
            {
              icon: 'note-plus',
              label: 'New Note',
              onPress: () => handleCreateNote(false),
              color: theme.colors.primary,
              style: { backgroundColor: theme.colors.primaryContainer },
            },
            {
              icon: 'folder-plus',
              label: 'New Folder',
              onPress: () => handleCreateNote(true),
              color: theme.colors.secondary,
              style: { backgroundColor: theme.colors.secondaryContainer },
            },
          ]}
          onStateChange={({ open }) => setFabOpen(open)}
          color={theme.colors.onPrimary}
          fabStyle={{ backgroundColor: theme.colors.primary }}
        />
      </View>
    </GradientBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingBottom: 80,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
  },
  header: {
    marginBottom: 16,
  },
  headerGradient: {
    padding: 24,
    marginBottom: 16,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statsText: {
    fontSize: 16,
    opacity: 0.9,
  },
  searchBar: {
    marginHorizontal: 16,
    marginBottom: 12,
    elevation: 2,
    borderRadius: 12,
  },
  searchInput: {
    fontSize: 16,
  },
  filters: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 8,
  },
  filterChip: {
    borderRadius: 20,
  },
  filterText: {
    fontSize: 14,
  },
})
