import type { Note } from './note'
export interface TypingUser {
  id: string
  name: string
  color: string
  isTyping: boolean
  lastTyped: number
}
export interface UserPresence {
  id: string
  name: string
  color: string
  avatar?: string
  joinedAt: number
  lastSeen: number
  isActive: boolean
}
export interface RealtimeUser {
  id: string
  name: string
  color?: string
  avatar?: string
}
export interface RealtimeSyncOptions {
  noteId?: string
  onNoteUpdate?: (note: Note) => void
  onUserTyping?: (users: TypingUser[]) => void
  onPresenceChange?: (users: UserPresence[]) => void
  user?: RealtimeUser
}
export interface RealtimeSyncState {
  isConnected: boolean
  connectionError: string | null
  onlineUsers: UserPresence[]
  typingUsers: TypingUser[]
  startTyping: () => void
  stopTyping: () => void
  broadcastNoteUpdate: (note: Note) => void
}
export interface BroadcastPayload {
  userId: string
  userName: string
  userColor: string
  isTyping: boolean
}
export interface NoteUpdatePayload {
  noteId: string
  updatedAt: string
  userId?: string
}
//# sourceMappingURL=realtime.d.ts.map
