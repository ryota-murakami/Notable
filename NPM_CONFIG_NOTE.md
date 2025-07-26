# NPM Configuration Notes

The following configuration options in package.json are deprecated and will be removed in the next major version of npm:

- `strict-peer-dependencies`
- `auto-install-peers`
- `node-linker`
- `prefer-frozen-lockfile`
- `shamefully-hoist`
- `side-effects-cache`
- `resolution-mode`
- `store-dir`
- `cache-dir`
- `log-level`

## Recommended Actions

1. Remove these configuration options from your `package.json`
2. Use the equivalent npm CLI flags or environment variables if needed
3. Update your CI/CD and local development workflows accordingly

## Impact

These configuration options will no longer work in the next major version of npm, which may cause unexpected build or installation issues.
