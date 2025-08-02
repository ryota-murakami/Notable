# Remaining Test IDs for E2E Tests

## ✅ Already Added

- `data-testid="app-shell"` - Main application shell (already exists)
- `data-testid="new-note-button"` - New note button in sidebar
- `data-testid="note-editor"` - Note editor container
- `data-testid="note-title"` - Note title input
- `data-testid="rich-text-editor"` - Rich text editor component

## ❌ Editor Toolbar Test IDs Needed

### Text Formatting

- `data-testid="bold-button"` - Bold formatting button
- `data-testid="italic-button"` - Italic formatting button
- `data-testid="underline-button"` - Underline formatting button
- `data-testid="strikethrough-button"` - Strikethrough button
- `data-testid="code-button"` - Code formatting button

### Headings & Structure

- `data-testid="heading-dropdown"` - Heading dropdown menu
- `data-testid="heading-1"` - H1 option
- `data-testid="heading-2"` - H2 option
- `data-testid="heading-3"` - H3 option

### Lists & Quotes

- `data-testid="list-button"` - List button/dropdown
- `data-testid="quote-button"` - Blockquote button

### Links

- `data-testid="link-button"` - Link button
- `data-testid="link-url-input"` - Link URL input field
- `data-testid="link-submit"` - Link submit button

### Tables

- `data-testid="table-button"` - Table button/dropdown
- `data-testid="table-2x2"` - 2x2 table option
- `data-testid="table-3x3"` - 3x3 table option
- `data-testid="add-row-below"` - Add row button
- `data-testid="add-column-right"` - Add column button

### Media

- `data-testid="media-button"` - Media/embed button
- `data-testid="embed-video"` - Video embed option
- `data-testid="video-url-input"` - Video URL input
- `data-testid="embed-submit"` - Embed submit button

### Mentions

- `data-testid="mention-dropdown"` - Mention suggestions dropdown
- `data-testid="mention-item"` - Individual mention item

### Other UI Elements

- `data-testid="save-indicator"` - Save status indicator

## Components to Update

1. Editor toolbar component(s) - likely in a toolbar or editor-toolbar component
2. Link dialog/modal component
3. Table insertion component
4. Media embed dialog
5. Mention suggestions component

## Priority

High priority items that are used in many tests:

1. Basic formatting buttons (bold, italic, etc.)
2. Heading dropdown
3. Link button and dialog
4. Save indicator
