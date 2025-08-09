import { type Note as SyncNote } from '@notable/sync'

export interface Note extends SyncNote {
  userId: string
  tags?: string[]
  isHidden?: boolean
  is_daily_note?: boolean
  custom_id?: string
}
