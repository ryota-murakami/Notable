# Cross-Device Sync Architecture for Notable

## Overview
This document outlines the architecture for implementing personal cross-device synchronization using Supabase CRDT/Realtime. The system enables a single user to sync their notes seamlessly across Web, Electron, and Mobile platforms with offline support and conflict resolution.

## Core Principles

### 1. Offline-First Architecture
- Each platform maintains a complete local copy of user data
- All operations work offline and sync when connectivity is restored
- Local storage is the source of truth for the current device
- Network sync is an enhancement, not a requirement

### 2. CRDT-Based Conflict Resolution
- Use Supabase Presence feature which implements an in-memory CRDT
- Each device acts as a "peer" for the same user
- Conflicts are resolved automatically using CRDT merge operations
- No data loss during conflict resolution

### 3. Real-time Synchronization
- Changes propagate in real-time when devices are online
- Use Supabase Realtime for instant updates across devices
- Typing indicators and presence awareness for better UX

## Technical Architecture

### Platform-Specific Storage
```
Web (Browser):     IndexedDB + Local Storage
Electron (Desktop): SQLite + Local Storage  
Mobile (React Native): AsyncStorage + SQLite
```

### Sync Service Layer
```typescript
interface SyncService {
  // Core sync operations
  syncToRemote(changes: ChangeSet[]): Promise<void>
  syncFromRemote(): Promise<ChangeSet[]>
  
  // Conflict resolution
  resolveConflicts(localChanges: ChangeSet[], remoteChanges: ChangeSet[]): ChangeSet[]
  
  // Real-time operations
  subscribeToChanges(callback: (changes: ChangeSet[]) => void): () => void
  broadcastChange(change: ChangeSet): void
  
  // Presence management
  trackPresence(deviceInfo: DeviceInfo): void
  untrackPresence(): void
}
```

### Data Model

#### Note Structure with CRDT Support
```typescript
interface Note {
  id: string                    // UUID v4
  title: string
  content: string              // Rich text content
  is_folder: boolean
  parent_id?: string
  
  // CRDT metadata
  version: number              // Lamport timestamp
  device_id: string            // Unique device identifier
  last_modified: string        // ISO timestamp
  vector_clock: VectorClock    // For conflict resolution
  
  // Sync metadata
  synced_at?: string           // Last successful sync
  local_changes: boolean       // Has pending local changes
  deleted: boolean             // Tombstone for deleted notes
}

interface VectorClock {
  [deviceId: string]: number   // Device ID -> logical clock
}

interface ChangeSet {
  id: string
  note_id: string
  operation: 'create' | 'update' | 'delete'
  data: Partial<Note>
  timestamp: string
  device_id: string
  vector_clock: VectorClock
}
```

### Supabase Schema

#### Database Tables
```sql
-- Notes table for persistent storage
CREATE TABLE notes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  title TEXT NOT NULL DEFAULT '',
  content TEXT DEFAULT '',
  is_folder BOOLEAN DEFAULT FALSE,
  parent_id UUID REFERENCES notes(id),
  
  -- CRDT metadata
  version BIGINT DEFAULT 1,
  device_id TEXT NOT NULL,
  last_modified TIMESTAMPTZ DEFAULT NOW(),
  vector_clock JSONB DEFAULT '{}',
  
  -- Sync metadata
  synced_at TIMESTAMPTZ,
  deleted BOOLEAN DEFAULT FALSE,
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Changes log for sync operations
CREATE TABLE note_changes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  note_id UUID REFERENCES notes(id),
  operation TEXT CHECK (operation IN ('create', 'update', 'delete')),
  data JSONB,
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  device_id TEXT NOT NULL,
  vector_clock JSONB DEFAULT '{}',
  applied BOOLEAN DEFAULT FALSE
);

-- Device registry for presence tracking
CREATE TABLE user_devices (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  device_id TEXT NOT NULL,
  device_name TEXT,
  device_type TEXT, -- 'web', 'electron', 'mobile'
  last_seen TIMESTAMPTZ DEFAULT NOW(),
  is_online BOOLEAN DEFAULT FALSE,
  
  UNIQUE(user_id, device_id)
);
```

#### Row Level Security (RLS)
```sql
-- Enable RLS on all tables
ALTER TABLE notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE note_changes ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_devices ENABLE ROW LEVEL SECURITY;

-- Users can only access their own data
CREATE POLICY "Users can access own notes" ON notes
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can access own changes" ON note_changes
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can access own devices" ON user_devices
  FOR ALL USING (auth.uid() = user_id);
```

## Implementation Strategy

### Phase 1: Core Infrastructure
1. **Shared Sync Service**
   - Create `@notable/sync` package for shared logic
   - Implement basic CRDT operations
   - Set up Supabase client configuration

2. **Local Storage Adapters**
   - Web: IndexedDB adapter
   - Electron: SQLite adapter  
   - Mobile: AsyncStorage + SQLite adapter

3. **Base Sync Implementation**
   - Basic sync up/down operations
   - Change tracking and queuing
   - Connection state management

### Phase 2: Real-time Features
1. **Supabase Realtime Integration**
   - Set up Realtime channels per user
   - Implement change broadcasting
   - Handle real-time change reception

2. **Presence System**
   - Device presence tracking
   - Online/offline status indicators
   - Typing indicators for active editing

3. **CRDT Conflict Resolution**
   - Implement vector clock logic
   - Automatic conflict resolution
   - Merge strategies for different data types

### Phase 3: Advanced Features
1. **Optimizations**
   - Delta sync (only send changes)
   - Compression for large payloads
   - Batch operations for performance

2. **Error Handling**
   - Retry mechanisms with exponential backoff
   - Offline queue management
   - Sync failure recovery

3. **Monitoring and Debugging**
   - Sync status indicators in UI
   - Debug logging for sync operations
   - Metrics collection for performance

## Sync Flow Examples

### Initial Device Setup
```
1. User signs in on new device
2. Generate unique device_id
3. Register device in user_devices table
4. Download all user notes from server
5. Initialize local storage with remote data
6. Start real-time subscription
7. Begin presence tracking
```

### Create Note Offline
```
1. User creates note while offline
2. Generate note with local device metadata
3. Store in local database
4. Add to pending changes queue
5. When online: sync change to server
6. Broadcast change via Realtime
7. Update local sync status
```

### Conflict Resolution Scenario
```
Device A (offline): Updates note title to "Meeting Notes"
Device B (offline): Updates same note title to "Team Meeting"

When both come online:
1. Both devices attempt to sync their changes
2. Server detects conflict using vector clocks
3. CRDT merge operation combines changes:
   - Use latest timestamp for simple fields
   - For complex merges, use application-specific logic
4. Resolved state synced back to all devices
5. User sees merged result with optional conflict notification
```

## Error Handling Strategies

### Network Failures
- Queue changes locally until connectivity restored
- Implement exponential backoff for retry attempts
- Provide clear offline/online status indicators

### Sync Conflicts
- Use CRDT automatic resolution where possible
- For complex conflicts, present user with merge options
- Maintain audit trail of all conflict resolutions

### Data Corruption
- Implement data validation on sync operations
- Provide rollback capabilities for failed syncs
- Regular integrity checks between local and remote data

## Performance Considerations

### Bandwidth Optimization
- Send only delta changes, not full documents
- Compress payloads for large content
- Batch multiple changes in single sync operation

### Local Storage Performance
- Use appropriate storage engines per platform
- Implement indexing for fast queries
- Regular cleanup of old change logs

### Real-time Scalability
- Use presence sparingly to avoid computational overhead
- Throttle real-time updates to prevent spam
- Implement smart reconnection logic

## Security Considerations

### Authentication
- Use Supabase Auth for user management
- Implement device registration and validation
- Regular token refresh and validation

### Data Protection
- Encrypt sensitive data in local storage
- Use HTTPS for all network communications
- Implement proper RLS policies in Supabase

### Privacy
- No data sharing between different users
- Device tracking limited to sync purposes only
- User can revoke device access at any time

## Testing Strategy

### Unit Tests
- CRDT merge operations
- Local storage adapters
- Sync service components
- Conflict resolution logic

### Integration Tests
- End-to-end sync flows
- Multi-device conflict scenarios
- Network failure recovery
- Real-time update propagation

### Manual Testing
- Cross-platform sync verification
- Offline/online transition testing
- Performance testing with large datasets
- User experience validation

## Rollout Plan

### Development Phase
1. Set up Supabase project with proper schema
2. Implement core sync service in shared package
3. Create platform-specific storage adapters
4. Basic sync functionality (up/down)

### Testing Phase
1. Unit tests for all components
2. Integration tests for sync flows
3. Manual testing across all platforms
4. Performance and reliability testing

### Production Phase
1. Gradual rollout with feature flags
2. Monitor sync performance and reliability
3. User feedback collection and iteration
4. Performance optimization based on real usage

## Success Metrics

### Functionality
- [ ] Notes sync correctly across all platforms
- [ ] Offline edits sync when connectivity restored
- [ ] Conflicts resolved without data loss
- [ ] Real-time updates work instantly when online

### Performance
- [ ] Sync latency < 100ms for small changes
- [ ] App remains responsive during sync operations
- [ ] Minimal battery impact on mobile devices
- [ ] Efficient bandwidth usage

### Reliability
- [ ] 99.9% sync success rate
- [ ] Graceful handling of network failures
- [ ] No data corruption or loss
- [ ] Clear error reporting and recovery