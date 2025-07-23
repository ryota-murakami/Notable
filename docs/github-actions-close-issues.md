# GitHub Actions Workflow: Close Issues on PR Merge

This workflow automatically closes issues when Pull Requests that reference them are merged.

## How it works

1. **Trigger**: The workflow runs when a Pull Request is closed
2. **Condition**: Only executes if the PR was actually merged (not just closed)
3. **Detection**: Finds issue references in the PR title and body using these patterns:
   - Simple references: `#123`
   - Keyword references: `fixes #123`, `closes #123`, `resolves #123`
4. **Action**: Automatically closes all referenced issues and adds a comment

## Supported reference patterns

The workflow detects the following patterns in PR titles and bodies:

### Simple references

- `#123` - Basic issue reference
- `Fix #123` - Issue reference in title

### Keyword-based references (GitHub standard)

- `fixes #123`, `fix #123`, `fixed #123`, `fixing #123`
- `closes #123`, `close #123`, `closed #123`, `closing #123`
- `resolves #123`, `resolve #123`, `resolved #123`, `resolving #123`

## Examples

### PR Title: "Add user authentication #45"

- Will close issue #45 when merged

### PR Body containing: "This fixes #123 and closes #456"

- Will close issues #123 and #456 when merged

### PR Body containing: "Resolves #789"

- Will close issue #789 when merged

## Workflow behavior

- **Safe operation**: Only closes issues when PRs are actually merged
- **Duplicate protection**: Won't close already closed issues
- **Error handling**: Gracefully handles missing issues or permission errors
- **Audit trail**: Adds explanatory comments to closed issues
- **Logging**: Provides detailed console output for debugging

## Permissions required

The workflow requires these GitHub permissions:

- `issues: write` - To close issues and add comments
- `pull-requests: read` - To read PR information
- `contents: read` - To checkout repository (standard requirement)

## File location

`.github/workflows/close-issues-on-pr-merge.yml`
