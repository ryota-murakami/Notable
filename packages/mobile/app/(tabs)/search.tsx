import { useState, useMemo, useEffect } from 'react'
import { View, FlatList, Text } from 'react-native'
import { Searchbar, Chip, useTheme } from 'react-native-paper'
import Fuse from 'fuse.js'
import { useOfflineNotes } from '@/hooks/use-offline-notes'
import { useSupabase } from '@/components/SupabaseProvider'
import { NoteCard } from '@/components/NoteCard'
import { EmptyState } from '@/components/EmptyState'
import { Note } from '@/types'
import { useRouter } from 'expo-router'

type SearchFilter = 'all' | 'notes' | 'folders'

interface SearchResultItem {
  item: Note
  score?: number
}

export default function SearchScreen() {
  const { user } = useSupabase()
  const { notes } = useOfflineNotes({
    user: user
      ? {
          id: user.id,
          name: user.user_metadata?.name || user.email || 'User',
          email: user.email || '',
          avatar: user.user_metadata?.avatar_url,
        }
      : undefined,
  })
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFilter, setSelectedFilter] = useState<SearchFilter>('all')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [results, setResults] = useState<SearchResultItem[]>([])
  // theme is available but not used in this component
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const theme = useTheme()
  const router = useRouter()

  const folders = useMemo(() => [], [])
  const allItems = useMemo(() => [...notes, ...folders], [notes, folders])

  const fuse = useMemo(
    () =>
      new Fuse<Note>(allItems, {
        keys: ['title', 'content'],
        threshold: 0.3,
        includeScore: true,
      }),
    [allItems]
  )

  useEffect(() => {
    let searchResults: SearchResultItem[] = []
    if (searchQuery) {
      searchResults = fuse.search(searchQuery).map((result) => ({
        item: result.item,
        score: result.score ?? 0,
      }))
    } else {
      searchResults = allItems.map((item) => ({ item, score: 0 }))
    }

    const filteredResults = searchResults.filter(({ item }) => {
      if (selectedFilter === 'all') return true
      const isFolder = item.is_folder === true
      if (selectedFilter === 'notes') return !isFolder
      if (selectedFilter === 'folders') return isFolder
      return true
    })

    setResults(filteredResults)
  }, [searchQuery, allItems, fuse, selectedFilter])

  const tags = useMemo(() => {
    const allTags = new Set<string>()
    notes.forEach((_note) => {
      // Tags not yet implemented in Note type
    })
    return Array.from(allTags)
  }, [notes])

  const handleNotePress = (note: Note) => {
    const isFolder = 'name' in note
    if (isFolder) {
      // Handle folder navigation
    } else {
      router.push(`/note/${note.id}`)
    }
  }

  const renderItem = ({ item }: { item: SearchResultItem }) => {
    return (
      <NoteCard
        note={item.item}
        onPress={() => handleNotePress(item.item)}
        onDelete={() => {
          // Delete functionality not implemented in search view
        }}
      />
    )
  }

  const filteredData = useMemo(() => {
    if (selectedTag) {
      return results.filter(
        (_result) => false // Tags not yet implemented
      )
    }
    return results
  }, [results, selectedTag])

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Searchbar
        placeholder='Search notes...'
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={{ marginBottom: 16 }}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 16,
        }}
      >
        <Chip
          selected={selectedFilter === 'all'}
          onPress={() => setSelectedFilter('all')}
        >
          <Text>All</Text>
        </Chip>
        <Chip
          selected={selectedFilter === 'notes'}
          onPress={() => setSelectedFilter('notes')}
        >
          <Text>Notes</Text>
        </Chip>
        <Chip
          selected={selectedFilter === 'folders'}
          onPress={() => setSelectedFilter('folders')}
        >
          <Text>Folders</Text>
        </Chip>
      </View>

      {tags.length > 0 && (
        <View
          style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 16 }}
        >
          {tags.map((tag) => (
            <Chip
              key={tag}
              selected={selectedTag === tag}
              onPress={() => setSelectedTag(selectedTag === tag ? null : tag)}
              style={{ marginRight: 8, marginBottom: 8 }}
            >
              {tag}
            </Chip>
          ))}
        </View>
      )}

      {results.length === 0 && searchQuery ? (
        <EmptyState
          title='No results found'
          description='Try adjusting your search criteria'
          icon='magnify-remove-outline'
        />
      ) : (
        <FlatList
          data={filteredData}
          keyExtractor={({ item }) => item.id}
          renderItem={renderItem}
          ListEmptyComponent={
            <EmptyState
              title='No notes to search'
              description='Create some notes to get started'
              icon='note-outline'
            />
          }
        />
      )}
    </View>
  )
}
