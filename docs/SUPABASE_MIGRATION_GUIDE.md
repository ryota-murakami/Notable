# Supabase Migration Guide

## Overview

This guide explains how to migrate from local state management to Supabase database persistence for the Notable app.

## What's Changed

### Before (Local State Only)
- Notes stored in React component state
- Data lost on page refresh
- No persistence across devices
- No real-time synchronization

### After (Supabase Integration)
- Notes persisted in PostgreSQL database
- Data survives page refreshes
- Cross-device synchronization
- Real-time updates via Supabase subscriptions
- Row-Level Security (RLS) for data protection

## Implementation Components

### 1. NotesService (`/packages/web/lib/supabase/notes.ts`)
A service class that handles all database operations:
- CRUD operations (Create, Read, Update, Delete)
- Real-time subscriptions
- Search functionality
- Data format conversion

### 2. Updated Shell Component
Two versions available:
- `shell.tsx` - Original with local state (current)
- `shell-with-supabase.tsx` - New version with Supabase integration

## Migration Steps

### Step 1: Environment Setup

Ensure your environment variables are configured:

```env
# .env.local
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### Step 2: Database Setup

Run the migrations to create the necessary tables:

```bash
# Start local Supabase
supabase start

# Apply migrations
supabase db push
```

### Step 3: Component Migration

Replace the current shell component:

```bash
# Backup current shell
mv packages/web/components/shell.tsx packages/web/components/shell-local.tsx

# Use Supabase version
mv packages/web/components/shell-with-supabase.tsx packages/web/components/shell.tsx
```

### Step 4: Test the Integration

1. **Create a note**: Click "New Note" button
2. **Edit content**: Type in the editor
3. **Auto-save**: Changes save automatically after 2 seconds
4. **Real-time sync**: Open in multiple tabs to see updates
5. **Persistence**: Refresh the page - notes remain

## Key Features

### Real-time Synchronization
```typescript
// Notes update across all connected clients
notesService.subscribeToNoteChanges(userId, {
  onInsert: (note) => { /* Handle new note */ },
  onUpdate: (note) => { /* Handle updated note */ },
  onDelete: (id) => { /* Handle deleted note */ }
})
```

### Automatic Saving
- Debounced auto-save (2 seconds after typing stops)
- Visual indicator when saving
- Error handling with toast notifications

### Security
- Row-Level Security (RLS) policies ensure users can only access their own notes
- Authentication required for all operations
- Secure API key handling

## Local Development

### Using Supabase Studio

Access the local database UI:

```bash
# Start Supabase
supabase start

# Studio will be available at:
# http://localhost:54323
```

### Viewing Data

1. Open Supabase Studio
2. Navigate to Table Editor
3. Select the `notes` table
4. View, edit, or delete records directly

## Production Deployment

### 1. Set GitHub Secrets

Run the setup script:
```bash
./scripts/setup-github-secrets.sh
```

### 2. Update Vercel Environment

Add the same variables to Vercel:
```bash
vercel env add NEXT_PUBLIC_SUPABASE_URL production
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production
```

### 3. Enable Realtime

In Supabase dashboard:
1. Go to Database → Publications
2. Enable realtime for the `notes` table

## Troubleshooting

### Notes Not Saving
1. Check browser console for errors
2. Verify authentication status
3. Check Supabase service status
4. Verify environment variables

### Real-time Not Working
1. Ensure realtime is enabled in Supabase
2. Check WebSocket connection in Network tab
3. Verify user is authenticated

### Authentication Issues
1. Clear browser cookies
2. Check Supabase Auth settings
3. Verify redirect URLs are configured

## Data Migration Script

For existing users with local notes:

```typescript
// One-time migration script
async function migrateLocalNotes() {
  const localNotes = JSON.parse(localStorage.getItem('notes') || '[]')
  
  for (const note of localNotes) {
    await notesService.createNote({
      title: note.title,
      content: { text: note.content },
    })
  }
  
  // Clear local storage after successful migration
  localStorage.removeItem('notes')
}
```

## Performance Considerations

1. **Debounced Saves**: Prevents excessive API calls
2. **Optimistic Updates**: UI updates immediately
3. **Batch Loading**: Notes load efficiently
4. **Indexed Searches**: Full-text search is optimized

## Next Steps

1. **Implement Folders**: Add folder hierarchy support
2. **Add Tags**: Implement the tagging system
3. **Search Enhancement**: Add advanced search filters
4. **Offline Support**: Implement offline queue for sync
5. **Export Options**: Add bulk export functionality

## Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Row Level Security Guide](https://supabase.com/docs/guides/auth/row-level-security)
- [Real-time Subscriptions](https://supabase.com/docs/guides/realtime)
- [Local Development](https://supabase.com/docs/guides/cli/local-development)