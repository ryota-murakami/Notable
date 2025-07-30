'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [5487],
  {
    './components/note-editor.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          AutoSaveIndicator: () => AutoSaveIndicator,
          DarkMode: () => DarkMode,
          Default: () => Default,
          EditContent: () => EditContent,
          EditTitle: () => EditTitle,
          EmptyNote: () => EmptyNote,
          KeyboardShortcuts: () => KeyboardShortcuts,
          LoadingState: () => LoadingState,
          LongContent: () => LongContent,
          LongTitleInput: () => LongTitleInput,
          MarkdownContent: () => MarkdownContent,
          MobileResponsive: () => MobileResponsive,
          MultilineEdit: () => MultilineEdit,
          NotFound: () => NotFound,
          RapidTyping: () => RapidTyping,
          StartFromEmpty: () => StartFromEmpty,
          TabIndentation: () => TabIndentation,
          TabletResponsive: () => TabletResponsive,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        }))
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        _storybook_test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          '../../node_modules/.pnpm/@storybook+test@8.6.14_storybook@9.0.18_@testing-library+dom@10.4.0_prettier@3.6.2_/node_modules/@storybook/test/dist/index.mjs'
        )
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'UI/Editor/NoteEditor',
          component: ({ noteId }) => {
            const [title, setTitle] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
              [content, setContent] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
              [isSaving, setIsSaving] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
              [lastSaved, setLastSaved] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(null)
            react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
              'loading' === noteId ||
              'not-found' === noteId ||
              'empty' === noteId
                ? (setTitle(''), setContent(''))
                : 'long' === noteId
                  ? (setTitle(
                      'A Very Long Note Title That Demonstrates How The Editor Handles Extended Text'
                    ),
                    setContent(
                      '# Introduction\n\nThis is a comprehensive note that demonstrates the editor\'s capability to handle long-form content.\n\n## Section 1: Overview\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\n### Subsection 1.1: Details\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n## Section 2: Technical Details\n\n- Point 1: Important technical detail\n- Point 2: Another crucial aspect\n- Point 3: Additional information\n\n### Code Example\n\n```javascript\nfunction example() {\n  console.log("This is a code example");\n  return true;\n}\n```\n\n## Section 3: Conclusion\n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
                    ))
                  : (setTitle('Sample Note Title'),
                    setContent(
                      'This is the content of the sample note. It contains some text for demonstration purposes.'
                    ))
            }, [noteId])
            const simulateSave = () => {
              ;(setIsSaving(!0),
                setTimeout(() => {
                  ;(setIsSaving(!1), setLastSaved(new Date()))
                }, 500))
            }
            return 'loading' === noteId
              ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                  className: 'flex h-screen items-center justify-center',
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                    className:
                      'animate-spin rounded-full h-8 w-8 border-b-2 border-primary',
                  }),
                })
              : 'not-found' === noteId
                ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'div',
                    {
                      className: 'flex h-screen items-center justify-center',
                      children: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        'div',
                        {
                          className: 'text-center',
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              'h2',
                              {
                                className: 'text-2xl font-semibold mb-2',
                                children: 'Note not found',
                              }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              'p',
                              {
                                className: 'text-muted-foreground',
                                children:
                                  'The requested note could not be found.',
                              }
                            ),
                          ],
                        }
                      ),
                    }
                  )
                : (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    'div',
                    {
                      className: 'flex flex-col h-full',
                      children: [
                        (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          'div',
                          {
                            className: 'border-b px-6 py-4',
                            children: [
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                'input',
                                {
                                  type: 'text',
                                  value: title,
                                  onChange: (e) => {
                                    ;(setTitle(e.target.value), simulateSave())
                                  },
                                  placeholder: 'Untitled',
                                  className:
                                    'w-full text-3xl font-bold outline-none bg-transparent',
                                }
                              ),
                              isSaving &&
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  'span',
                                  {
                                    className: 'text-sm text-muted-foreground',
                                    children: 'Saving...',
                                  }
                                ),
                              !isSaving &&
                                lastSaved &&
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                  'span',
                                  {
                                    className: 'text-sm text-muted-foreground',
                                    children: [
                                      'Saved at ',
                                      lastSaved.toLocaleTimeString(),
                                    ],
                                  }
                                ),
                            ],
                          }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          'div',
                          {
                            className: 'flex-1 px-6 py-4',
                            children: (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              'textarea',
                              {
                                value: content,
                                onChange: (e) => {
                                  ;(setContent(e.target.value), simulateSave())
                                },
                                placeholder: 'Start writing...',
                                className:
                                  'w-full h-full resize-none outline-none bg-transparent font-mono',
                              }
                            ),
                          }
                        ),
                      ],
                    }
                  )
          },
          parameters: { layout: 'fullscreen' },
          tags: ['autodocs'],
          argTypes: {
            noteId: { control: 'text', description: 'ID of the note to edit' },
          },
          decorators: [
            (Story) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                className: 'h-screen bg-background',
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story, {}),
              }),
          ],
        },
        Default = { args: { noteId: '123' } },
        LoadingState = { args: { noteId: 'loading' } },
        NotFound = { args: { noteId: 'not-found' } },
        EmptyNote = { args: { noteId: 'empty' } },
        LongContent = { args: { noteId: 'long' } },
        EditTitle = {
          args: { noteId: '123' },
          play: async ({ canvasElement }) => {
            const titleInput = (0,
            _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
              canvasElement
            ).getByDisplayValue('Sample Note Title')
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.clear(
              titleInput
            ),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.type(
                titleInput,
                'Updated Note Title'
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.fm)(() => {
                ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  titleInput
                ).toHaveValue('Updated Note Title')
              }))
          },
        },
        EditContent = {
          args: { noteId: '123' },
          play: async ({ canvasElement }) => {
            const contentTextarea = (0,
            _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
              canvasElement
            ).getByDisplayValue(/This is the content/)
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.click(
              contentTextarea
            ),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.keyboard(
                '{End}'
              ),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.type(
                contentTextarea,
                ' Additional content added.'
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.fm)(() => {
                ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  contentTextarea.value
                ).toContain('Additional content added.')
              }))
          },
        },
        StartFromEmpty = {
          args: { noteId: 'empty' },
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
                canvasElement
              ),
              titleInput = canvas.getByPlaceholderText('Untitled')
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.type(
              titleInput,
              'My New Note'
            ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.fm)(() => {
                ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  titleInput
                ).toHaveValue('My New Note')
              }))
            const contentTextarea =
              canvas.getByPlaceholderText('Start writing...')
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.type(
              contentTextarea,
              '# Welcome\n\nThis is my first note.'
            ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.fm)(() => {
                ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  contentTextarea
                ).toHaveValue('# Welcome\n\nThis is my first note.')
              }))
          },
        },
        RapidTyping = {
          args: { noteId: '123' },
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
                canvasElement
              ),
              titleInput = canvas.getByDisplayValue('Sample Note Title')
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.clear(
              titleInput
            ),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.type(
                titleInput,
                'Rapid typing test',
                { delay: 10 }
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.fm)(() => {
                ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.getByText('Saving...')
                ).toBeInTheDocument()
              }),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.fm)(
                () => {
                  ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                    canvas.getByText(/Saved at/)
                  ).toBeInTheDocument()
                },
                { timeout: 2e3 }
              ))
          },
        },
        LongTitleInput = {
          args: { noteId: '123' },
          play: async ({ canvasElement }) => {
            const titleInput = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
                canvasElement
              ).getByDisplayValue('Sample Note Title'),
              longTitle =
                'This is an extremely long title that goes on and on to test how the editor handles very lengthy titles that might wrap to multiple lines or cause layout issues in the interface'
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.clear(
              titleInput
            ),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.type(
                titleInput,
                longTitle
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.fm)(() => {
                ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  titleInput
                ).toHaveValue(longTitle)
              }))
          },
        },
        MarkdownContent = {
          args: { noteId: 'empty' },
          play: async ({ canvasElement }) => {
            const contentTextarea = (0,
            _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
              canvasElement
            ).getByPlaceholderText('Start writing...')
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.type(
              contentTextarea,
              '# Markdown Test\n\n## Features\n- **Bold text**\n- *Italic text*\n- `inline code`\n\n### Code Block\n```javascript\nconst greeting = "Hello, World!";\nconsole.log(greeting);\n```\n\n> This is a blockquote\n\n[Link to Notable](https://notable.app)'
            ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.fm)(() => {
                ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  contentTextarea.value
                ).toContain('# Markdown Test')
              }))
          },
        },
        KeyboardShortcuts = {
          args: { noteId: '123' },
          play: async ({ canvasElement }) => {
            const contentTextarea = (0,
            _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
              canvasElement
            ).getByDisplayValue(/This is the content/)
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.click(
              contentTextarea
            ),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.keyboard(
                '{Control>}a{/Control}'
              ),
              (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                contentTextarea
              ).toHaveFocus())
          },
        },
        AutoSaveIndicator = {
          args: { noteId: '123' },
          play: async ({ canvasElement }) => {
            const canvas = (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
                canvasElement
              ),
              titleInput = canvas.getByDisplayValue('Sample Note Title')
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.type(
              titleInput,
              '!'
            ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.fm)(() => {
                ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.getByText('Saving...')
                ).toBeInTheDocument()
              }),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.fm)(
                () => {
                  ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                    canvas.getByText(/Saved at/)
                  ).toBeInTheDocument()
                },
                { timeout: 2e3 }
              ))
          },
        },
        MultilineEdit = {
          args: { noteId: 'empty' },
          play: async ({ canvasElement }) => {
            const contentTextarea = (0,
            _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
              canvasElement
            ).getByPlaceholderText('Start writing...')
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.type(
              contentTextarea,
              'Line 1'
            ),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.keyboard(
                '{Enter}'
              ),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.type(
                contentTextarea,
                'Line 2'
              ),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.keyboard(
                '{Enter}'
              ),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.type(
                contentTextarea,
                'Line 3'
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.fm)(() => {
                ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  contentTextarea
                ).toHaveValue('Line 1\nLine 2\nLine 3')
              }))
          },
        },
        TabIndentation = {
          args: { noteId: 'empty' },
          play: async ({ canvasElement }) => {
            const contentTextarea = (0,
            _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
              canvasElement
            ).getByPlaceholderText('Start writing...')
            ;(await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.type(
              contentTextarea,
              'function example() {'
            ),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.keyboard(
                '{Enter}'
              ),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.keyboard(
                '{Tab}'
              ),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.type(
                contentTextarea,
                'return true;'
              ),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.keyboard(
                '{Enter}'
              ),
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.type(
                contentTextarea,
                '}'
              ),
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.fm)(() => {
                ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  contentTextarea.value
                ).toContain('function example()')
              }))
          },
        },
        MobileResponsive = {
          parameters: { viewport: { defaultViewport: 'mobile1' } },
          args: { noteId: '123' },
        },
        TabletResponsive = {
          parameters: { viewport: { defaultViewport: 'tablet' } },
          args: { noteId: '123' },
        },
        DarkMode = {
          parameters: { backgrounds: { default: 'dark' } },
          args: { noteId: '123' },
          decorators: [
            (Story) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('div', {
                className: 'h-screen bg-gray-900 text-white dark',
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story, {}),
              }),
          ],
        },
        __namedExportsOrder = [
          'Default',
          'LoadingState',
          'NotFound',
          'EmptyNote',
          'LongContent',
          'EditTitle',
          'EditContent',
          'StartFromEmpty',
          'RapidTyping',
          'LongTitleInput',
          'MarkdownContent',
          'KeyboardShortcuts',
          'AutoSaveIndicator',
          'MultilineEdit',
          'TabIndentation',
          'MobileResponsive',
          'TabletResponsive',
          'DarkMode',
        ]
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: "{\n  args: {\n    noteId: '123'\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (LoadingState.parameters = {
          ...LoadingState.parameters,
          docs: {
            ...LoadingState.parameters?.docs,
            source: {
              originalSource: "{\n  args: {\n    noteId: 'loading'\n  }\n}",
              ...LoadingState.parameters?.docs?.source,
            },
          },
        }),
        (NotFound.parameters = {
          ...NotFound.parameters,
          docs: {
            ...NotFound.parameters?.docs,
            source: {
              originalSource: "{\n  args: {\n    noteId: 'not-found'\n  }\n}",
              ...NotFound.parameters?.docs?.source,
            },
          },
        }),
        (EmptyNote.parameters = {
          ...EmptyNote.parameters,
          docs: {
            ...EmptyNote.parameters?.docs,
            source: {
              originalSource: "{\n  args: {\n    noteId: 'empty'\n  }\n}",
              ...EmptyNote.parameters?.docs?.source,
            },
          },
        }),
        (LongContent.parameters = {
          ...LongContent.parameters,
          docs: {
            ...LongContent.parameters?.docs,
            source: {
              originalSource: "{\n  args: {\n    noteId: 'long'\n  }\n}",
              ...LongContent.parameters?.docs?.source,
            },
          },
        }),
        (EditTitle.parameters = {
          ...EditTitle.parameters,
          docs: {
            ...EditTitle.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    noteId: '123'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Find title input\n    const titleInput = canvas.getByDisplayValue('Sample Note Title');\n\n    // Clear and type new title\n    await userEvent.clear(titleInput);\n    await userEvent.type(titleInput, 'Updated Note Title');\n\n    // Verify title changed\n    await waitFor(() => {\n      expect(titleInput).toHaveValue('Updated Note Title');\n    });\n  }\n}",
              ...EditTitle.parameters?.docs?.source,
            },
          },
        }),
        (EditContent.parameters = {
          ...EditContent.parameters,
          docs: {
            ...EditContent.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    noteId: '123'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Find content textarea\n    const contentTextarea = canvas.getByDisplayValue(/This is the content/);\n\n    // Add text to content\n    await userEvent.click(contentTextarea);\n    await userEvent.keyboard('{End}');\n    await userEvent.type(contentTextarea, ' Additional content added.');\n\n    // Verify content updated\n    await waitFor(() => {\n      expect((contentTextarea as HTMLTextAreaElement).value).toContain('Additional content added.');\n    });\n  }\n}",
              ...EditContent.parameters?.docs?.source,
            },
          },
        }),
        (StartFromEmpty.parameters = {
          ...StartFromEmpty.parameters,
          docs: {
            ...StartFromEmpty.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    noteId: 'empty'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Find empty title input\n    const titleInput = canvas.getByPlaceholderText('Untitled');\n\n    // Type title\n    await userEvent.type(titleInput, 'My New Note');\n\n    // Verify title\n    await waitFor(() => {\n      expect(titleInput).toHaveValue('My New Note');\n    });\n\n    // Find content textarea\n    const contentTextarea = canvas.getByPlaceholderText('Start writing...');\n\n    // Type content\n    await userEvent.type(contentTextarea, '# Welcome\\n\\nThis is my first note.');\n\n    // Verify content\n    await waitFor(() => {\n      expect(contentTextarea).toHaveValue('# Welcome\\n\\nThis is my first note.');\n    });\n  }\n}",
              ...StartFromEmpty.parameters?.docs?.source,
            },
          },
        }),
        (RapidTyping.parameters = {
          ...RapidTyping.parameters,
          docs: {
            ...RapidTyping.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    noteId: '123'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Test rapid typing (debouncing)\n    const titleInput = canvas.getByDisplayValue('Sample Note Title');\n\n    // Type quickly\n    await userEvent.clear(titleInput);\n    await userEvent.type(titleInput, 'Rapid typing test', {\n      delay: 10\n    });\n\n    // Should show saving indicator during typing\n    await waitFor(() => {\n      expect(canvas.getByText('Saving...')).toBeInTheDocument();\n    });\n\n    // Should show saved after debounce\n    await waitFor(() => {\n      expect(canvas.getByText(/Saved at/)).toBeInTheDocument();\n    }, {\n      timeout: 2000\n    });\n  }\n}",
              ...RapidTyping.parameters?.docs?.source,
            },
          },
        }),
        (LongTitleInput.parameters = {
          ...LongTitleInput.parameters,
          docs: {
            ...LongTitleInput.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    noteId: '123'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const titleInput = canvas.getByDisplayValue('Sample Note Title');\n\n    // Type a very long title\n    const longTitle = 'This is an extremely long title that goes on and on to test how the editor handles very lengthy titles that might wrap to multiple lines or cause layout issues in the interface';\n    await userEvent.clear(titleInput);\n    await userEvent.type(titleInput, longTitle);\n    await waitFor(() => {\n      expect(titleInput).toHaveValue(longTitle);\n    });\n  }\n}",
              ...LongTitleInput.parameters?.docs?.source,
            },
          },
        }),
        (MarkdownContent.parameters = {
          ...MarkdownContent.parameters,
          docs: {
            ...MarkdownContent.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    noteId: 'empty'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const contentTextarea = canvas.getByPlaceholderText('Start writing...');\n\n    // Type markdown content\n    const markdownContent = `# Markdown Test\n\n## Features\n- **Bold text**\n- *Italic text*\n- \\`inline code\\`\n\n### Code Block\n\\`\\`\\`javascript\nconst greeting = \"Hello, World!\";\nconsole.log(greeting);\n\\`\\`\\`\n\n> This is a blockquote\n\n[Link to Notable](https://notable.app)`;\n    await userEvent.type(contentTextarea, markdownContent);\n    await waitFor(() => {\n      expect((contentTextarea as HTMLTextAreaElement).value).toContain('# Markdown Test');\n    });\n  }\n}",
              ...MarkdownContent.parameters?.docs?.source,
            },
          },
        }),
        (KeyboardShortcuts.parameters = {
          ...KeyboardShortcuts.parameters,
          docs: {
            ...KeyboardShortcuts.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    noteId: '123'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const contentTextarea = canvas.getByDisplayValue(/This is the content/);\n\n    // Test common keyboard shortcuts\n    await userEvent.click(contentTextarea);\n\n    // Select all\n    await userEvent.keyboard('{Control>}a{/Control}');\n\n    // The content should be selected (we can't directly test selection)\n    // Just verify the textarea is still focused\n    expect(contentTextarea).toHaveFocus();\n  }\n}",
              ...KeyboardShortcuts.parameters?.docs?.source,
            },
          },
        }),
        (AutoSaveIndicator.parameters = {
          ...AutoSaveIndicator.parameters,
          docs: {
            ...AutoSaveIndicator.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    noteId: '123'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Edit something to trigger save\n    const titleInput = canvas.getByDisplayValue('Sample Note Title');\n    await userEvent.type(titleInput, '!');\n\n    // Should show saving\n    await waitFor(() => {\n      expect(canvas.getByText('Saving...')).toBeInTheDocument();\n    });\n\n    // Should show saved timestamp\n    await waitFor(() => {\n      expect(canvas.getByText(/Saved at/)).toBeInTheDocument();\n    }, {\n      timeout: 2000\n    });\n  }\n}",
              ...AutoSaveIndicator.parameters?.docs?.source,
            },
          },
        }),
        (MultilineEdit.parameters = {
          ...MultilineEdit.parameters,
          docs: {
            ...MultilineEdit.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    noteId: 'empty'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const contentTextarea = canvas.getByPlaceholderText('Start writing...');\n\n    // Type multiple lines\n    await userEvent.type(contentTextarea, 'Line 1');\n    await userEvent.keyboard('{Enter}');\n    await userEvent.type(contentTextarea, 'Line 2');\n    await userEvent.keyboard('{Enter}');\n    await userEvent.type(contentTextarea, 'Line 3');\n    await waitFor(() => {\n      expect(contentTextarea).toHaveValue('Line 1\\nLine 2\\nLine 3');\n    });\n  }\n}",
              ...MultilineEdit.parameters?.docs?.source,
            },
          },
        }),
        (TabIndentation.parameters = {
          ...TabIndentation.parameters,
          docs: {
            ...TabIndentation.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    noteId: 'empty'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const contentTextarea = canvas.getByPlaceholderText('Start writing...');\n\n    // Type with tab indentation\n    await userEvent.type(contentTextarea, 'function example() {');\n    await userEvent.keyboard('{Enter}');\n    await userEvent.keyboard('{Tab}');\n    await userEvent.type(contentTextarea, 'return true;');\n    await userEvent.keyboard('{Enter}');\n    await userEvent.type(contentTextarea, '}');\n    await waitFor(() => {\n      expect((contentTextarea as HTMLTextAreaElement).value).toContain('function example()');\n    });\n  }\n}",
              ...TabIndentation.parameters?.docs?.source,
            },
          },
        }),
        (MobileResponsive.parameters = {
          ...MobileResponsive.parameters,
          docs: {
            ...MobileResponsive.parameters?.docs,
            source: {
              originalSource:
                "{\n  parameters: {\n    viewport: {\n      defaultViewport: 'mobile1'\n    }\n  },\n  args: {\n    noteId: '123'\n  }\n}",
              ...MobileResponsive.parameters?.docs?.source,
            },
          },
        }),
        (TabletResponsive.parameters = {
          ...TabletResponsive.parameters,
          docs: {
            ...TabletResponsive.parameters?.docs,
            source: {
              originalSource:
                "{\n  parameters: {\n    viewport: {\n      defaultViewport: 'tablet'\n    }\n  },\n  args: {\n    noteId: '123'\n  }\n}",
              ...TabletResponsive.parameters?.docs?.source,
            },
          },
        }),
        (DarkMode.parameters = {
          ...DarkMode.parameters,
          docs: {
            ...DarkMode.parameters?.docs,
            source: {
              originalSource:
                "{\n  parameters: {\n    backgrounds: {\n      default: 'dark'\n    }\n  },\n  args: {\n    noteId: '123'\n  },\n  decorators: [Story => <div className='h-screen bg-gray-900 text-white dark'>\n        <Story />\n      </div>]\n}",
              ...DarkMode.parameters?.docs?.source,
            },
          },
        }))
    },
  },
])
