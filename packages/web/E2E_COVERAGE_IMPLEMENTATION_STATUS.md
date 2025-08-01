# E2E Coverage Implementation Status

## Progress Summary

### ✅ Completed

1. **Coverage Dependencies Installed**
   - Added babel-plugin-istanbul
   - Added babel-loader
   - Added nyc
   - Created .nycrc.json configuration
   - Updated package.json with e2e:coverage scripts

2. **Test IDs Added to Components**
   - `data-testid="new-note-button"` - Added to shell.tsx
   - `data-testid="note-editor"` - Added to rich-text-editor.tsx
   - `data-testid="note-title"` - Added to rich-text-editor.tsx input
   - `data-testid="rich-text-editor"` - Added to BasicEditor component

3. **GitHub Actions Workflow**
   - Created e2e-coverage.yml workflow
   - Configured to run tests with COVERAGE=1
   - Set up Codecov upload

### 🚧 Current Issues

1. **Build Performance Issues**
   - Next.js build times out when babel config is present
   - Babel transpilation significantly slows down dev server startup
   - Even without coverage instrumentation, builds are very slow

2. **Missing Test IDs** Many E2E tests expect test IDs that haven't been added yet:
   - app-shell
   - heading-dropdown, heading-1
   - link-url-input, link-submit
   - table-button, table-3x3, table-2x2
   - add-row-below, add-column-right
   - media-button, embed-video
   - video-url-input, embed-submit
   - mention-dropdown, mention-item
   - save-indicator
   - bold-button, italic-button, underline-button, strikethrough-button

3. **Coverage Not Collecting**
   - NYC showing 0% coverage despite tests running
   - Need to investigate alternative instrumentation approaches
   - May need to use a different strategy for Next.js apps

### 📋 Next Steps

1. **Fix Build Performance**
   - Consider removing babel config entirely
   - Use SWC with coverage plugin instead
   - Or instrument code post-build

2. **Add Remaining Test IDs**
   - Systematically go through all E2E tests
   - Add corresponding test IDs to components
   - Ensure consistency across the codebase

3. **Fix Coverage Collection**
   - Investigate SWC coverage options
   - Consider using @swc/plugin-coverage-instrument
   - Or use NYC in instrument mode after build

4. **Run and Fix E2E Tests**
   - Once test IDs are added, run all tests
   - Fix any failing tests
   - Ensure all tests pass consistently

5. **Achieve 100% Coverage**
   - Identify coverage gaps
   - Write additional tests as needed
   - Configure Codecov with 100% requirement

## Technical Notes

The main challenge is that babel-plugin-istanbul breaks Next.js performance. Potential solutions:

1. **SWC Coverage Plugin**: Use @swc/plugin-coverage-instrument instead of babel
2. **Post-Build Instrumentation**: Build normally, then instrument the built files
3. **Test-Only Build**: Create a separate build process just for E2E tests
4. **NYC Instrument Command**: Use `nyc instrument` on the .next directory

## Files Modified

- `/components/shell.tsx` - Added new-note-button test ID
- `/components/rich-text-editor.tsx` - Added multiple test IDs
- `/package.json` - Added coverage dependencies and scripts
- `/babel.config.js` - Created for coverage instrumentation
- `/.nycrc.json` - NYC configuration
- `/scripts/build-with-coverage.js` - Build script for coverage
- `/scripts/run-e2e-coverage.sh` - E2E coverage runner
