export interface Note {
  id: string
  title: string
  content: string
  is_folder?: boolean
  created_at?: string
  updated_at?: string
  user_id?: string
}

export interface User {
  id: string
  email?: string
  name?: string
}