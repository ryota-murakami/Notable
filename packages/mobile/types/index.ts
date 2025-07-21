export interface Note {
  id: string
  title: string
  content: string
  created_at: string
  updated_at: string
  user_id: string
  tags?: string[]
  folder_id?: string
}

export interface NoteCreate {
  title: string
  content: string
  tags?: string[]
  folder_id?: string
}

export interface NoteUpdate {
  title?: string
  content?: string
  tags?: string[]
  folder_id?: string
}

export interface UserPresence {
  user_id: string
  name: string
  avatar_url?: string
}

export interface TypingUser {
  user_id: string
  name: string
}

export interface RealtimeUser {
  id: string
  name: string
  email: string
  avatar?: string
}

export interface RealtimeSyncOptions {
  channelName: string
  userId?: string
  presence?: any
}
