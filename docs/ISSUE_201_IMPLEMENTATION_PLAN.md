# Issue #201: Save Note to Supabase DB - Implementation Plan

## Overview

Implement functionality to save notes to Supabase database in production and PostgreSQL locally via Supabase Studio.

## Current State Analysis

### Database Schema (Already Exists)
- **notes** table with columns:
  - `id` (UUID)
  - `title` (VARCHAR)
  - `content` (JSONB)
  - `user_id` (UUID)
  - `folder_id` (UUID, nullable)
  - `is_public` (BOOLEAN)
  - `created_at`, `updated_at`, `deleted_at` (timestamps)
- RLS policies configured for user access control
- Full-text search indexes

### Data Structure
- **Note** type combines:
  - BaseNote: id, title, content, is_folder, parent_id
  - CRDT metadata: version, device_id, last_modified, vector_clock
  - Sync metadata: synced_at, local_changes, deleted
  - Web-specific: userId, tags, isHidden

## Implementation Steps

### 1. Create Supabase Client Service Layer

**File**: `/packages/web/lib/supabase/notes.ts`
```typescript
import { createClient } from '@/utils/supabase/client'
import type { Note } from '@/types/note'

export class NotesService {
  private supabase = createClient()
  
  async createNote(note: Partial<Note>) {...}
  async updateNote(id: string, updates: Partial<Note>) {...}
  async deleteNote(id: string) {...}
  async getNote(id: string) {...}
  async getUserNotes(userId: string) {...}
  async searchNotes(query: string) {...}
}
```

### 2. Update Shell Component

**File**: `/packages/web/components/shell.tsx`
- Import NotesService
- Replace local state management with Supabase calls
- Handle loading states
- Add error handling with toast notifications

### 3. Implement Note Persistence

#### Create Note
```typescript
const handleCreateNote = async () => {
  const newNote = {
    title: 'Untitled',
    content: { text: '' }, // JSONB format
    user_id: currentUser.id,
    is_public: false
  }
  
  const { data, error } = await notesService.createNote(newNote)
  if (error) {
    toast.error('Failed to create note')
    return
  }
  
  setSelectedNote(data)
  await loadUserNotes()
}
```

#### Update Note
```typescript
const handleSaveNote = async (updates: Partial<Note>) => {
  const { error } = await notesService.updateNote(note.id, {
    title: updates.title,
    content: { text: updates.content },
    updated_at: new Date().toISOString()
  })
  
  if (error) {
    toast.error('Failed to save note')
    return
  }
  
  toast.success('Note saved')
}
```

#### Delete Note
```typescript
const handleDeleteNote = async (noteId: string) => {
  const { error } = await notesService.deleteNote(noteId)
  
  if (error) {
    toast.error('Failed to delete note')
    return
  }
  
  setSelectedNote(null)
  await loadUserNotes()
}
```

### 4. Real-time Updates (Optional)

```typescript
useEffect(() => {
  const subscription = supabase
    .channel('notes-changes')
    .on('postgres_changes', {
      event: '*',
      schema: 'public',
      table: 'notes',
      filter: `user_id=eq.${userId}`
    }, handleRealtimeUpdate)
    .subscribe()
    
  return () => subscription.unsubscribe()
}, [userId])
```

### 5. Local Development Setup

#### Supabase Local Development
```bash
# Start Supabase locally
supabase start

# Access local Supabase Studio
# URL: http://localhost:54323
# View and edit data directly
```

#### Environment Variables
```env
# .env.local
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-local-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-local-service-role-key
```

### 6. Data Migration

For existing notes in local state:
```typescript
const migrateLocalNotes = async () => {
  const localNotes = getLocalNotes()
  
  for (const note of localNotes) {
    await notesService.createNote({
      ...note,
      user_id: currentUser.id
    })
  }
  
  clearLocalStorage()
}
```

### 7. Error Handling & Offline Support

```typescript
const saveNoteWithRetry = async (note: Note) => {
  try {
    await notesService.updateNote(note.id, note)
  } catch (error) {
    // Queue for later sync
    queueOfflineChange({
      type: 'update',
      noteId: note.id,
      data: note,
      timestamp: new Date().toISOString()
    })
  }
}
```

## Testing Plan

### Unit Tests
1. Test NotesService CRUD operations
2. Mock Supabase client responses
3. Test error handling scenarios

### Integration Tests
1. Test with local Supabase instance
2. Verify RLS policies work correctly
3. Test real-time updates

### E2E Tests
1. Create, edit, and delete notes flow
2. Search functionality
3. Offline/online transitions

## Security Considerations

1. **RLS Policies**: Already configured - users can only access their own notes
2. **Input Validation**: Sanitize content before saving
3. **Rate Limiting**: Implement client-side debouncing for auto-save
4. **Error Messages**: Don't expose sensitive information

## Performance Optimizations

1. **Debounced Auto-save**: Save after 2 seconds of inactivity
2. **Optimistic Updates**: Update UI immediately, sync in background
3. **Pagination**: Load notes in batches for large datasets
4. **Caching**: Use React Query or SWR for data caching

## Migration Checklist

- [ ] Create NotesService class
- [ ] Update Shell component to use Supabase
- [ ] Implement CRUD operations
- [ ] Add loading states
- [ ] Add error handling
- [ ] Test with local Supabase
- [ ] Add real-time subscriptions
- [ ] Implement offline queue
- [ ] Write tests
- [ ] Update documentation

## Future Enhancements

1. **Folders Support**: Implement folder hierarchy
2. **Tags System**: Add note tagging functionality
3. **Search**: Implement full-text search using Supabase's search function
4. **Sharing**: Enable note sharing via is_public flag
5. **Version History**: Track note versions for undo/redo