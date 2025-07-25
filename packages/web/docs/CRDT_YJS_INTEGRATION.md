# Real-time Collaborative Editing with Yjs and Supabase

This document describes the implementation of real-time collaborative editing in Notable using Yjs (Conflict-free Replicated Data Types) and Supabase Realtime.

## Overview

The collaborative editing system enables multiple users to edit the same document simultaneously with automatic conflict resolution, real-time synchronization, and persistent storage.

### Key Features

- **Real-time Collaboration**: Multiple users can edit simultaneously
- **Conflict-free Merging**: Yjs CRDT algorithms handle conflicts automatically
- **User Presence**: See who's currently editing
- **Persistent Storage**: Documents are saved to Supabase database
- **Offline Support**: Continue editing when offline, sync when reconnected
- **Performance Optimized**: Efficient delta synchronization

## Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   User A        │    │   Supabase       │    │   User B        │
│                 │    │   Realtime       │    │                 │
│ ┌─────────────┐ │    │                  │    │ ┌─────────────┐ │
│ │ Yjs Doc     │◄┼────┼──► Channel ◄─────┼────┼►│ Yjs Doc     │ │
│ │ (CRDT)      │ │    │   Broadcasting   │    │ │ (CRDT)      │ │
│ └─────────────┘ │    │                  │    │ └─────────────┘ │
│       ▲         │    │                  │    │       ▲         │
│       │         │    └──────────────────┘    │       │         │
│ ┌─────▼─────┐   │                            │ ┌─────▼─────┐   │
│ │ Plate.js  │   │                            │ │ Plate.js  │   │
│ │ Editor    │   │                            │ │ Editor    │   │
│ └───────────┘   │                            │ └───────────┘   │
└─────────────────┘                            └─────────────────┘
```

## Components

### 1. SupabaseYjsProvider (`lib/yjs/provider.ts`)

The core provider that connects Yjs documents to Supabase Realtime channels.

**Key responsibilities:**
- Establish WebSocket connection to Supabase
- Broadcast document changes to other clients
- Apply remote changes to local document
- Handle user presence tracking
- Manage connection state and error handling

```typescript
const provider = new SupabaseYjsProvider({
  noteId: 'note-123',
  userId: 'user-456',
  supabaseClient: supabase,
  debug: true
})
```

### 2. YjsDocumentPersistence (`lib/yjs/persistence.ts`)

Handles saving and loading Yjs documents to/from the database.

**Features:**
- Auto-save with configurable intervals
- Versioning support
- Conflict resolution for concurrent saves
- Efficient delta storage

```typescript
const persistence = new YjsDocumentPersistence({
  supabase,
  autoSave: true,
  saveInterval: 10000 // 10 seconds
})
```

### 3. CollaborativeEditor (`components/editor/CollaborativeEditor.tsx`)

React component that integrates Plate.js with Yjs for collaborative editing.

**Features:**
- Rich text editing with Plate.js
- Real-time collaboration visualization
- User presence indicators
- Connection status monitoring
- Auto-save functionality

### 4. useYjsProvider Hook (`hooks/use-yjs-provider.ts`)

React hook for managing Yjs provider lifecycle and state.

```typescript
const {
  provider,
  doc,
  isConnected,
  activeUsers,
  error,
  reconnect
} = useYjsProvider({
  noteId: 'note-123',
  userId: 'user-456'
})
```

## Database Schema

### yjs_documents Table

Stores serialized Yjs document states for persistence.

```sql
CREATE TABLE yjs_documents (
  id BIGSERIAL PRIMARY KEY,
  note_id TEXT NOT NULL UNIQUE REFERENCES notes(id),
  user_id TEXT NOT NULL,
  state JSONB NOT NULL, -- Serialized Yjs state
  version INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

**Key features:**
- Row Level Security (RLS) for access control
- Real-time subscriptions enabled
- Automatic versioning
- Triggers for change broadcasting

## Usage Examples

### Basic Editor Setup

```tsx
import { NoteEditor } from '@/components/editor/CollaborativeEditor'

function MyNotePage({ noteId, userId }) {
  const handleSave = (content) => {
    console.log('Note content saved:', content)
  }

  return (
    <NoteEditor
      noteId={noteId}
      userId={userId}
      onSave={handleSave}
    />
  )
}
```

### Advanced Configuration

```tsx
import { CollaborativeEditor } from '@/components/editor/CollaborativeEditor'

function AdvancedEditor() {
  return (
    <CollaborativeEditor
      noteId="advanced-note"
      userId="user-123"
      placeholder="Start writing..."
      onSave={(content) => saveToAPI(content)}
      readOnly={false}
      className="h-full"
    />
  )
}
```

### Manual Provider Management

```tsx
import { useYjsProvider } from '@/hooks/use-yjs-provider'

function CustomEditor({ noteId, userId }) {
  const { provider, doc, isConnected, activeUsers } = useYjsProvider({
    noteId,
    userId,
    enabled: true,
    debug: process.env.NODE_ENV === 'development'
  })

  if (!doc) return <div>Loading...</div>

  return (
    <div>
      <div>Status: {isConnected ? 'Connected' : 'Disconnected'}</div>
      <div>Active users: {activeUsers.length}</div>
      {/* Your custom editor implementation */}
    </div>
  )
}
```

## Testing

### Test Page

A comprehensive test page is available at `/test-collaborative` for testing collaboration features:

- Multiple browser tabs simulation
- Different collaboration scenarios
- Debug information display
- Connection status monitoring

### Testing Scenarios

1. **Basic Collaboration**
   - Open multiple tabs with same note ID
   - Type in one tab, observe in others
   - Verify real-time updates

2. **Conflict Resolution**
   - Type in same location simultaneously
   - Verify CRDT conflict resolution
   - Check document consistency

3. **Connection Handling**
   - Disconnect/reconnect network
   - Verify offline editing support
   - Test synchronization on reconnect

4. **Performance Testing**
   - Large documents (10K+ characters)
   - Multiple simultaneous users (5+)
   - Rapid typing and editing

## Configuration

### Environment Variables

```bash
# Required for Supabase connection
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

# Optional: Enable debug logging
NEXT_PUBLIC_YJS_DEBUG=true
```

### Provider Options

```typescript
interface SupabaseYjsProviderOptions {
  noteId: string          // Unique document identifier
  userId: string          // Current user identifier
  supabaseClient?: SupabaseClient
  doc?: Doc              // Existing Yjs document
  debug?: boolean        // Enable debug logging
}
```

### Persistence Options

```typescript
interface PersistenceOptions {
  supabase: SupabaseClient
  tableName?: string     // Default: 'yjs_documents'
  autoSave?: boolean     // Default: true
  saveInterval?: number  // Default: 10000ms
  debug?: boolean
}
```

## Performance Considerations

### Optimization Strategies

1. **Delta Synchronization**
   - Only send document changes, not full document
   - Reduces bandwidth usage
   - Improves real-time responsiveness

2. **Presence Debouncing**
   - Limit presence update frequency
   - Reduce unnecessary broadcasts
   - Improve UI responsiveness

3. **Efficient Storage**
   - Store Yjs state as compressed binary
   - Use versioning for conflict resolution
   - Implement cleanup for old versions

4. **Connection Management**
   - Automatic reconnection on disconnect
   - Exponential backoff for retry attempts
   - Graceful handling of network issues

### Performance Metrics

Monitor these metrics for optimal performance:

- **Latency**: Time from local edit to remote update
- **Bandwidth**: Data transferred per operation
- **Memory**: Yjs document size in memory
- **Storage**: Database size growth rate

## Security

### Access Control

- Row Level Security (RLS) on all tables
- User authentication through Supabase Auth
- Note-level permissions inheritance
- Real-time channel authorization

### Data Validation

- Input sanitization on all text content
- Document size limits (configurable)
- Rate limiting on updates
- Malicious content detection

## Troubleshooting

### Common Issues

1. **Connection Failed**
   - Check Supabase URL and keys
   - Verify network connectivity
   - Check browser WebSocket support

2. **Document Not Syncing**
   - Verify note permissions
   - Check RLS policies
   - Monitor browser console for errors

3. **Performance Issues**
   - Check document size
   - Monitor active user count
   - Verify network latency

### Debug Logging

Enable debug mode for detailed logging:

```typescript
const provider = new SupabaseYjsProvider({
  // ... other options
  debug: true
})
```

This will log:
- Connection state changes
- Document updates
- User presence events
- Error conditions

## Migration from TipTap

The system is designed to eventually replace TipTap with Plate.js for better Yjs integration:

1. **Gradual Migration**
   - Keep existing TipTap editors working
   - Add Yjs support to new notes
   - Migrate existing notes on user interaction

2. **Data Compatibility**
   - Convert TipTap documents to Plate.js format
   - Preserve formatting and content
   - Maintain version history

3. **Feature Parity**
   - Ensure all TipTap features work in Plate.js
   - Add collaboration-specific features
   - Maintain keyboard shortcuts and UX

## Future Enhancements

### Planned Features

1. **Advanced Collaboration**
   - Comment system with threading
   - Suggestion mode for reviews
   - Change tracking and approval

2. **Performance Improvements**
   - WebRTC for direct peer-to-peer sync
   - Conflict-free sequence types for better text editing
   - Smart caching and preloading

3. **Enhanced UI**
   - User avatars and names
   - Cursor position sharing
   - Selection highlighting

4. **Analytics**
   - Collaboration metrics
   - User engagement tracking
   - Performance monitoring

## References

- [Yjs Documentation](https://docs.yjs.dev/)
- [Plate.js Documentation](https://platejs.org/)
- [Supabase Realtime](https://supabase.com/docs/guides/realtime)
- [CRDT Research](https://crdt.tech/)