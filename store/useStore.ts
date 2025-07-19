import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { Note, Folder, Tag } from '@/types'

interface AppState {
  // User state
  user: {
    id: string
    email: string
    name: string
    image?: string
  } | null

  // Notes state
  notes: Note[]
  selectedNoteId: string | null
  selectedNote: Note | null
  isCreatingNote: boolean

  // Folders state
  folders: Folder[]
  selectedFolderId: string | null

  // Tags state
  tags: Tag[]

  // UI state
  sidebarCollapsed: boolean
  viewMode: 'edit' | 'view'
  searchQuery: string
  searchResults: Note[]
  isSearching: boolean
  commandPaletteOpen: boolean

  // Sync state
  syncStatus: 'idle' | 'syncing' | 'error'
  lastSyncTime: Date | null

  // Actions
  setUser: (user: AppState['user']) => void
  logout: () => void

  // Note actions
  setNotes: (notes: Note[]) => void
  addNote: (note: Note) => void
  updateNote: (id: string, updates: Partial<Note>) => void
  deleteNote: (id: string) => void
  selectNote: (id: string | null) => void
  setIsCreatingNote: (creating: boolean) => void

  // Folder actions
  setFolders: (folders: Folder[]) => void
  addFolder: (folder: Folder) => void
  updateFolder: (id: string, updates: Partial<Folder>) => void
  deleteFolder: (id: string) => void
  selectFolder: (id: string | null) => void

  // Tag actions
  setTags: (tags: Tag[]) => void
  addTag: (tag: Tag) => void
  updateTag: (id: string, updates: Partial<Tag>) => void
  deleteTag: (id: string) => void

  // UI actions
  toggleSidebar: () => void
  setViewMode: (mode: 'edit' | 'view') => void
  setSearchQuery: (query: string) => void
  setSearchResults: (results: Note[]) => void
  setIsSearching: (searching: boolean) => void
  toggleCommandPalette: () => void

  // Sync actions
  setSyncStatus: (status: AppState['syncStatus']) => void
  setLastSyncTime: (time: Date) => void
}

export const useStore = create<AppState>()(
  devtools(
    persist(
      (set, get) => ({
        // Initial state
        user: null,
        notes: [],
        selectedNoteId: null,
        selectedNote: null,
        isCreatingNote: false,
        folders: [],
        selectedFolderId: null,
        tags: [],
        sidebarCollapsed: false,
        viewMode: 'edit',
        searchQuery: '',
        searchResults: [],
        isSearching: false,
        commandPaletteOpen: false,
        syncStatus: 'idle',
        lastSyncTime: null,

        // User actions
        setUser: (user) => set({ user }),
        logout: () =>
          set({
            user: null,
            notes: [],
            folders: [],
            tags: [],
            selectedNoteId: null,
            selectedNote: null,
          }),

        // Note actions
        setNotes: (notes) => set({ notes }),
        addNote: (note) =>
          set((state) => ({
            notes: [...state.notes, note],
          })),
        updateNote: (id, updates) =>
          set((state) => ({
            notes: state.notes.map((note) =>
              note.id === id ? { ...note, ...updates } : note,
            ),
            selectedNote:
              state.selectedNote?.id === id
                ? { ...state.selectedNote, ...updates }
                : state.selectedNote,
          })),
        deleteNote: (id) =>
          set((state) => ({
            notes: state.notes.filter((note) => note.id !== id),
            selectedNoteId:
              state.selectedNoteId === id ? null : state.selectedNoteId,
            selectedNote:
              state.selectedNote?.id === id ? null : state.selectedNote,
          })),
        selectNote: (id) =>
          set((state) => ({
            selectedNoteId: id,
            selectedNote: id
              ? state.notes.find((note) => note.id === id) || null
              : null,
          })),
        setIsCreatingNote: (creating) => set({ isCreatingNote: creating }),

        // Folder actions
        setFolders: (folders) => set({ folders }),
        addFolder: (folder) =>
          set((state) => ({
            folders: [...state.folders, folder],
          })),
        updateFolder: (id, updates) =>
          set((state) => ({
            folders: state.folders.map((folder) =>
              folder.id === id ? { ...folder, ...updates } : folder,
            ),
          })),
        deleteFolder: (id) =>
          set((state) => ({
            folders: state.folders.filter((folder) => folder.id !== id),
            selectedFolderId:
              state.selectedFolderId === id ? null : state.selectedFolderId,
          })),
        selectFolder: (id) => set({ selectedFolderId: id }),

        // Tag actions
        setTags: (tags) => set({ tags }),
        addTag: (tag) =>
          set((state) => ({
            tags: [...state.tags, tag],
          })),
        updateTag: (id, updates) =>
          set((state) => ({
            tags: state.tags.map((tag) =>
              tag.id === id ? { ...tag, ...updates } : tag,
            ),
          })),
        deleteTag: (id) =>
          set((state) => ({
            tags: state.tags.filter((tag) => tag.id !== id),
          })),

        // UI actions
        toggleSidebar: () =>
          set((state) => ({
            sidebarCollapsed: !state.sidebarCollapsed,
          })),
        setViewMode: (mode) => set({ viewMode: mode }),
        setSearchQuery: (query) => set({ searchQuery: query }),
        setSearchResults: (results) => set({ searchResults: results }),
        setIsSearching: (searching) => set({ isSearching: searching }),
        toggleCommandPalette: () =>
          set((state) => ({
            commandPaletteOpen: !state.commandPaletteOpen,
          })),

        // Sync actions
        setSyncStatus: (status) => set({ syncStatus: status }),
        setLastSyncTime: (time) => set({ lastSyncTime: time }),
      }),
      {
        name: 'notable-storage',
        partialize: (state) => ({
          sidebarCollapsed: state.sidebarCollapsed,
          viewMode: state.viewMode,
        }),
      },
    ),
  ),
)
