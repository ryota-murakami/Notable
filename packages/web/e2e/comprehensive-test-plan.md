# Comprehensive E2E Test Plan for Notable

## Goal

Achieve 100% code coverage through comprehensive E2E tests covering all user flows, features, and edge cases.

## Test Categories

### 1. Authentication & Authorization (✓ Partially Covered)

- [x] Basic auth flow
- [ ] OAuth (Google) login flow
- [ ] Session management
- [ ] Auth persistence across tabs
- [ ] Logout flow
- [ ] Protected routes verification

### 2. Note Management (✓ Partially Covered)

- [x] Basic CRUD operations
- [ ] Bulk operations
- [ ] Note duplication
- [ ] Note archiving/unarchiving
- [ ] Note trash/restore
- [ ] Note version history
- [ ] Note export (all formats)
- [ ] Note import

### 3. Editor Features (✓ Partially Covered)

- [x] Basic text editing
- [x] Rich text formatting
- [ ] All Plate.js plugins
- [ ] Slash commands (complete menu)
- [ ] Block types (all variants)
- [ ] Tables
- [ ] Code blocks with syntax highlighting
- [ ] Math equations
- [ ] Embeds (YouTube, Twitter, etc.)
- [ ] Image upload and management
- [ ] File attachments
- [ ] Collaborative editing simulation

### 4. Linking & Graph (✓ Partially Covered)

- [x] Basic bi-directional linking
- [ ] Wiki-style links
- [ ] Link autocomplete
- [ ] Broken link detection
- [ ] Graph visualization interactions
- [ ] Graph filtering
- [ ] Graph analytics
- [ ] Graph export

### 5. Search System (✓ Partially Covered)

- [x] Basic search
- [ ] Advanced search with filters
- [ ] Search history
- [ ] Saved searches
- [ ] Search suggestions
- [ ] Full-text search
- [ ] Fuzzy search
- [ ] Search within specific notes

### 6. Tag System (✓ Partially Covered)

- [x] Basic tagging
- [ ] Nested tags
- [ ] Tag hierarchy
- [ ] Tag cloud visualization
- [ ] Bulk tag operations
- [ ] Tag renaming with cascade
- [ ] Tag merge
- [ ] Tag analytics

### 7. Template System (✓ Partially Covered)

- [x] Basic template usage
- [ ] Template creation
- [ ] Template variables
- [ ] Template categories
- [ ] Template rating
- [ ] Template sharing
- [ ] Built-in templates
- [ ] Template marketplace simulation

### 8. Plugin System (Not Covered)

- [ ] Plugin installation
- [ ] Plugin activation/deactivation
- [ ] Plugin settings
- [ ] Plugin commands
- [ ] Plugin storage
- [ ] Plugin marketplace
- [ ] Plugin development mode

### 9. UI Components & Interactions

- [ ] Command palette (all commands)
- [ ] Keyboard shortcuts (all combinations)
- [ ] Context menus
- [ ] Drag and drop
- [ ] Theme switching
- [ ] Settings panel (all options)
- [ ] User menu
- [ ] Notifications/toasts
- [ ] Loading states
- [ ] Error boundaries

### 10. Performance & Optimization

- [ ] Large note handling
- [ ] Many notes pagination
- [ ] Search performance
- [ ] Graph rendering with many nodes
- [ ] Offline mode
- [ ] PWA features
- [ ] Memory management

### 11. Mobile Responsiveness

- [ ] Touch interactions
- [ ] Mobile navigation
- [ ] Mobile editor
- [ ] Responsive layouts

### 12. API Routes Coverage

- [ ] All /api/notes endpoints
- [ ] All /api/tags endpoints
- [ ] All /api/templates endpoints
- [ ] All /api/search endpoints
- [ ] All /api/graph endpoints
- [ ] Error handling for all endpoints

### 13. Edge Cases & Error Handling

- [ ] Network failures
- [ ] Invalid data handling
- [ ] Concurrent updates
- [ ] Browser compatibility
- [ ] Local storage limits
- [ ] Session timeouts

## Implementation Strategy

1. **Update existing tests** to ensure full coverage of current features
2. **Create new test files** for uncovered features
3. **Add data-testid attributes** where needed for reliable selectors
4. **Mock external services** (Supabase, Stripe, etc.) for consistent testing
5. **Create test utilities** for common operations
6. **Run coverage reports** after each test file implementation
7. **Iterate until 100% coverage** is achieved

## Test File Structure

```
e2e/
├── auth/
│   ├── login.spec.ts
│   ├── oauth.spec.ts
│   └── session.spec.ts
├── notes/
│   ├── crud.spec.ts
│   ├── bulk-operations.spec.ts
│   └── export-import.spec.ts
├── editor/
│   ├── formatting.spec.ts
│   ├── blocks.spec.ts
│   └── plugins.spec.ts
├── features/
│   ├── search.spec.ts
│   ├── tags.spec.ts
│   ├── templates.spec.ts
│   └── plugins.spec.ts
├── ui/
│   ├── components.spec.ts
│   ├── navigation.spec.ts
│   └── responsive.spec.ts
└── api/
    ├── notes-api.spec.ts
    ├── tags-api.spec.ts
    └── templates-api.spec.ts
```

## Priority Order

1. Complete authentication coverage (High)
2. Complete note CRUD coverage (High)
3. Editor features (High)
4. Search system (High)
5. Tag system (Medium)
6. Template system (Medium)
7. Plugin system (Low)
8. UI components (Medium)
9. API routes (High)
10. Edge cases (Medium)
