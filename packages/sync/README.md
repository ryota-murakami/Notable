# @notable/sync

Cross-device synchronization service for Notable using Supabase CRDT/Realtime. This package provides offline-first sync with automatic conflict resolution across Web, Electron, and Mobile platforms.

## Features

- **Offline-First**: Works completely offline, syncs when connected
- **CRDT-Based Conflict Resolution**: Automatic conflict resolution without data loss
- **Real-time Sync**: Instant updates across devices when online
- **Platform Agnostic**: Works on Web (IndexedDB), Electron (SQLite), and Mobile (AsyncStorage + SQLite)
- **Presence Tracking**: See which devices are online and active
- **React Integration**: Built-in React hooks and providers

## Installation

```bash
npm install @notable/sync @supabase/supabase-js uuid
# or
pnpm add @notable/sync @supabase/supabase-js uuid
```

## Quick Start

### 1. Basic Setup

```typescript
import { 
  createSyncService, 
  createWebStorageAdapter, // or createElectronStorageAdapter, createMobileStorageAdapter
  generateDeviceInfo 
} from '@notable/sync'

// Create storage adapter for your platform
const storage = createWebStorageAdapter()

// Configure sync service
const config = {
  supabaseUrl: 'https://your-project.supabase.co',
  supabaseKey: 'your-anon-key',
  userId: 'user-uuid',
  deviceId: 'device-uuid',
  deviceInfo: generateDeviceInfo('web', 'My Browser'),
}

// Create and initialize sync service
const syncService = createSyncService(config, storage)
await syncService.initialize()
```

### 2. React Integration

```typescript
import { SyncProvider, useSyncService, useSyncStats } from '@notable/sync'

function App() {
  return (
    <SyncProvider config={config} storage={storage}>
      <NotesApp />
    </SyncProvider>
  )
}

function NotesApp() {
  const { syncService, isInitialized, error } = useSyncService()
  const { status, stats, loading } = useSyncStats()

  if (!isInitialized) {
    return <div>Initializing sync...</div>
  }

  if (error) {
    return <div>Sync error: {error}</div>
  }

  return (
    <div>
      <div>Status: {status}</div>
      <div>Pending changes: {stats?.pending_changes || 0}</div>
      <div>Total notes: {stats?.total_notes || 0}</div>
      {/* Your app content */}
    </div>
  )
}
```

## Core Concepts

### Notes Structure

```typescript
interface Note {
  id: string                    // UUID
  title: string
  content: string              
  is_folder: boolean
  parent_id?: string
  
  // CRDT metadata
  version: number              
  device_id: string            
  last_modified: string        
  vector_clock: VectorClock    
  
  // Sync metadata
  synced_at?: string           
  local_changes: boolean       
  deleted: boolean             
}
```

### Sync Operations

```typescript
// Manual sync operations
await syncService.syncUp()    // Push local changes to server
await syncService.syncDown()  // Pull remote changes from server
await syncService.syncAll()   // Full bidirectional sync

// Real-time subscription
const unsubscribe = syncService.subscribeToChanges((changes) => {
  console.log('Remote changes received:', changes)
})

// Presence tracking
await syncService.trackPresence()
const onlineDevices = await syncService.getOnlineDevices()
```

## Platform-Specific Storage

### Web (IndexedDB)

```typescript
import { createWebStorageAdapter } from '@notable/sync'

const storage = createWebStorageAdapter()
```

### Electron (SQLite)

```typescript
import { createElectronStorageAdapter } from '@notable/sync'

const storage = createElectronStorageAdapter('/path/to/database.db')
```

### React Native (AsyncStorage + SQLite)

```typescript
import { createMobileStorageAdapter } from '@notable/sync'
import AsyncStorage from '@react-native-async-storage/async-storage'

const storage = createMobileStorageAdapter(AsyncStorage, 'notable.db')
```

## React Hooks

### useSyncStats

Monitor sync status and statistics:

```typescript
import { useSyncStats } from '@notable/sync'

function SyncStatus() {
  const { status, stats, loading, refresh } = useSyncStats()

  return (
    <div>
      <div>Status: {status}</div>
      <div>Last sync: {stats?.last_sync || 'Never'}</div>
      <div>Pending: {stats?.pending_changes || 0}</div>
      <button onClick={refresh}>Refresh</button>
    </div>
  )
}
```

### useSyncOperations

Manual sync controls:

```typescript
import { useSyncOperations } from '@notable/sync'

function SyncControls() {
  const { syncUp, syncDown, syncAll, isSyncing, lastError } = useSyncOperations()

  return (
    <div>
      <button onClick={syncAll} disabled={isSyncing}>
        {isSyncing ? 'Syncing...' : 'Sync All'}
      </button>
      {lastError && <div>Error: {lastError}</div>}
    </div>
  )
}
```

### usePresence

Track online devices:

```typescript
import { usePresence } from '@notable/sync'

function OnlineDevices() {
  const { onlineDevices, isTracking, startTracking, stopTracking } = usePresence()

  return (
    <div>
      <button onClick={isTracking ? stopTracking : startTracking}>
        {isTracking ? 'Stop' : 'Start'} Tracking
      </button>
      <div>Online devices: {onlineDevices.length}</div>
      {onlineDevices.map(device => (
        <div key={device.id}>{device.name} ({device.type})</div>
      ))}
    </div>
  )
}
```

### useRealtimeChanges

Listen to real-time changes:

```typescript
import { useRealtimeChanges } from '@notable/sync'

function MyComponent() {
  useRealtimeChanges((changes) => {
    console.log('Real-time changes:', changes)
    // Update your local state
  })

  return <div>...</div>
}
```

## Configuration Options

```typescript
interface SyncConfig {
  supabaseUrl: string
  supabaseKey: string
  userId: string
  deviceId: string
  deviceInfo: DeviceInfo
  
  // Optional settings
  syncInterval?: number        // Auto-sync interval (default: 30000ms)
  batchSize?: number          // Changes per batch (default: 50)
  retryAttempts?: number      // Max retries (default: 3)
  retryDelay?: number         // Initial retry delay (default: 1000ms)
  enableRealtime?: boolean    // Enable real-time sync (default: true)
  enablePresence?: boolean    // Enable presence tracking (default: true)
  presenceHeartbeat?: number  // Presence heartbeat interval (default: 10000ms)
}
```

## Error Handling

```typescript
syncService.on('sync-error', (error) => {
  console.error('Sync error:', error)
  // Handle sync failures
})

syncService.on('status-change', (status) => {
  if (status === 'error') {
    // Show error indicator in UI
  }
})
```

## CRDT Operations

The package includes CRDT (Conflict-free Replicated Data Type) operations for automatic conflict resolution:

```typescript
import { crdt } from '@notable/sync'

// Compare vector clocks
const relation = crdt.compareClock(clock1, clock2) // 'before' | 'after' | 'concurrent'

// Resolve conflicts
const result = crdt.resolveConflict(localNote, remoteNote)
```

## Database Setup

You'll need to set up your Supabase database with the appropriate schema. See the architecture documentation for SQL schema and RLS policies.

## Performance Considerations

- **Batch Size**: Adjust `batchSize` based on your network conditions
- **Sync Interval**: Longer intervals reduce server load but increase sync delay
- **Presence**: Disable presence tracking if not needed to reduce overhead
- **Cleanup**: The storage adapters automatically clean up old changes

## Troubleshooting

### Common Issues

1. **Sync not working**: Check Supabase credentials and RLS policies
2. **Conflicts not resolving**: Verify vector clock implementation
3. **Storage errors**: Check platform-specific storage permissions
4. **Real-time not working**: Verify Supabase Realtime is enabled

### Debug Mode

Enable detailed logging:

```typescript
// Set before creating sync service
localStorage.setItem('notable:debug', 'true')
```

## License

MIT License - see LICENSE file for details.

## Contributing

See the main project README for contribution guidelines.