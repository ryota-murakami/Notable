'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [9982],
  {
    './design-system/tokens/index.ts': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { LU: () => tokens })
      var tokens_colors = __webpack_require__(
        './design-system/tokens/colors.ts'
      )
      function cov_1atnlneq3t() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/design-system/tokens/typography.ts',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          'f27091b4f555ca89408f2c83b21c8d1fedd1a0cc' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/design-system/tokens/typography.ts',
            statementMap: {
              0: {
                start: { line: 2, column: 26 },
                end: { line: 313, column: 1 },
              },
            },
            fnMap: {},
            branchMap: {},
            s: { 0: 0 },
            f: {},
            b: {},
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/design-system/tokens/typography.ts',
              ],
              sourcesContent: [
                "// Notable Design System - Typography Tokens\n\nexport const typography = {\n  // Font families\n  fontFamily: {\n    sans: [\n      '-apple-system',\n      'BlinkMacSystemFont',\n      '\"Segoe UI\"',\n      'Roboto',\n      '\"Helvetica Neue\"',\n      'Arial',\n      'sans-serif',\n      '\"Apple Color Emoji\"',\n      '\"Segoe UI Emoji\"',\n      '\"Segoe UI Symbol\"',\n    ].join(', '),\n    serif: ['Georgia', 'Cambria', '\"Times New Roman\"', 'Times', 'serif'].join(\n      ', '\n    ),\n    mono: [\n      '\"SF Mono\"',\n      'Monaco',\n      '\"Cascadia Code\"',\n      '\"Roboto Mono\"',\n      'Menlo',\n      'Consolas',\n      '\"Courier New\"',\n      'monospace',\n    ].join(', '),\n  },\n\n  // Font sizes with line heights and letter spacing\n  fontSize: {\n    xs: {\n      size: '0.75rem', // 12px\n      lineHeight: '1rem', // 16px\n      letterSpacing: '0.05em',\n    },\n    sm: {\n      size: '0.875rem', // 14px\n      lineHeight: '1.25rem', // 20px\n      letterSpacing: '0.025em',\n    },\n    base: {\n      size: '1rem', // 16px\n      lineHeight: '1.5rem', // 24px\n      letterSpacing: '0',\n    },\n    lg: {\n      size: '1.125rem', // 18px\n      lineHeight: '1.75rem', // 28px\n      letterSpacing: '-0.025em',\n    },\n    xl: {\n      size: '1.25rem', // 20px\n      lineHeight: '1.875rem', // 30px\n      letterSpacing: '-0.025em',\n    },\n    '2xl': {\n      size: '1.5rem', // 24px\n      lineHeight: '2rem', // 32px\n      letterSpacing: '-0.025em',\n    },\n    '3xl': {\n      size: '1.875rem', // 30px\n      lineHeight: '2.25rem', // 36px\n      letterSpacing: '-0.025em',\n    },\n    '4xl': {\n      size: '2.25rem', // 36px\n      lineHeight: '2.5rem', // 40px\n      letterSpacing: '-0.05em',\n    },\n    '5xl': {\n      size: '3rem', // 48px\n      lineHeight: '1',\n      letterSpacing: '-0.05em',\n    },\n    '6xl': {\n      size: '3.75rem', // 60px\n      lineHeight: '1',\n      letterSpacing: '-0.05em',\n    },\n    '7xl': {\n      size: '4.5rem', // 72px\n      lineHeight: '1',\n      letterSpacing: '-0.05em',\n    },\n    '8xl': {\n      size: '6rem', // 96px\n      lineHeight: '1',\n      letterSpacing: '-0.05em',\n    },\n    '9xl': {\n      size: '8rem', // 128px\n      lineHeight: '1',\n      letterSpacing: '-0.05em',\n    },\n  },\n\n  // Font weights\n  fontWeight: {\n    thin: 100,\n    extralight: 200,\n    light: 300,\n    normal: 400,\n    medium: 500,\n    semibold: 600,\n    bold: 700,\n    extrabold: 800,\n    black: 900,\n  },\n\n  // Letter spacing\n  letterSpacing: {\n    tighter: '-0.05em',\n    tight: '-0.025em',\n    normal: '0',\n    wide: '0.025em',\n    wider: '0.05em',\n    widest: '0.1em',\n  },\n\n  // Line heights\n  lineHeight: {\n    none: '1',\n    tight: '1.25',\n    snug: '1.375',\n    normal: '1.5',\n    relaxed: '1.625',\n    loose: '2',\n    3: '.75rem',\n    4: '1rem',\n    5: '1.25rem',\n    6: '1.5rem',\n    7: '1.75rem',\n    8: '2rem',\n    9: '2.25rem',\n    10: '2.5rem',\n  },\n\n  // Text styles (pre-composed combinations)\n  textStyles: {\n    // Display styles\n    displayLarge: {\n      fontFamily: 'var(--font-sans)',\n      fontSize: '3.75rem',\n      lineHeight: '1',\n      letterSpacing: '-0.05em',\n      fontWeight: 800,\n    },\n    displayMedium: {\n      fontFamily: 'var(--font-sans)',\n      fontSize: '3rem',\n      lineHeight: '1',\n      letterSpacing: '-0.05em',\n      fontWeight: 800,\n    },\n    displaySmall: {\n      fontFamily: 'var(--font-sans)',\n      fontSize: '2.25rem',\n      lineHeight: '2.5rem',\n      letterSpacing: '-0.05em',\n      fontWeight: 700,\n    },\n\n    // Heading styles\n    heading1: {\n      fontFamily: 'var(--font-sans)',\n      fontSize: '2.25rem',\n      lineHeight: '2.5rem',\n      letterSpacing: '-0.05em',\n      fontWeight: 700,\n    },\n    heading2: {\n      fontFamily: 'var(--font-sans)',\n      fontSize: '1.875rem',\n      lineHeight: '2.25rem',\n      letterSpacing: '-0.025em',\n      fontWeight: 600,\n    },\n    heading3: {\n      fontFamily: 'var(--font-sans)',\n      fontSize: '1.5rem',\n      lineHeight: '2rem',\n      letterSpacing: '-0.025em',\n      fontWeight: 600,\n    },\n    heading4: {\n      fontFamily: 'var(--font-sans)',\n      fontSize: '1.25rem',\n      lineHeight: '1.875rem',\n      letterSpacing: '-0.025em',\n      fontWeight: 600,\n    },\n    heading5: {\n      fontFamily: 'var(--font-sans)',\n      fontSize: '1.125rem',\n      lineHeight: '1.75rem',\n      letterSpacing: '-0.025em',\n      fontWeight: 600,\n    },\n    heading6: {\n      fontFamily: 'var(--font-sans)',\n      fontSize: '1rem',\n      lineHeight: '1.5rem',\n      letterSpacing: '0',\n      fontWeight: 600,\n    },\n\n    // Body styles\n    bodyLarge: {\n      fontFamily: 'var(--font-sans)',\n      fontSize: '1.125rem',\n      lineHeight: '1.75rem',\n      letterSpacing: '0',\n      fontWeight: 400,\n    },\n    bodyMedium: {\n      fontFamily: 'var(--font-sans)',\n      fontSize: '1rem',\n      lineHeight: '1.5rem',\n      letterSpacing: '0',\n      fontWeight: 400,\n    },\n    bodySmall: {\n      fontFamily: 'var(--font-sans)',\n      fontSize: '0.875rem',\n      lineHeight: '1.25rem',\n      letterSpacing: '0',\n      fontWeight: 400,\n    },\n\n    // UI styles\n    buttonLarge: {\n      fontFamily: 'var(--font-sans)',\n      fontSize: '1rem',\n      lineHeight: '1.5rem',\n      letterSpacing: '0.025em',\n      fontWeight: 500,\n    },\n    buttonMedium: {\n      fontFamily: 'var(--font-sans)',\n      fontSize: '0.875rem',\n      lineHeight: '1.25rem',\n      letterSpacing: '0.025em',\n      fontWeight: 500,\n    },\n    buttonSmall: {\n      fontFamily: 'var(--font-sans)',\n      fontSize: '0.75rem',\n      lineHeight: '1rem',\n      letterSpacing: '0.05em',\n      fontWeight: 500,\n    },\n\n    // Label styles\n    labelLarge: {\n      fontFamily: 'var(--font-sans)',\n      fontSize: '0.875rem',\n      lineHeight: '1.25rem',\n      letterSpacing: '0.025em',\n      fontWeight: 500,\n    },\n    labelMedium: {\n      fontFamily: 'var(--font-sans)',\n      fontSize: '0.75rem',\n      lineHeight: '1rem',\n      letterSpacing: '0.05em',\n      fontWeight: 500,\n    },\n    labelSmall: {\n      fontFamily: 'var(--font-sans)',\n      fontSize: '0.625rem',\n      lineHeight: '0.75rem',\n      letterSpacing: '0.05em',\n      fontWeight: 500,\n    },\n\n    // Code styles\n    codeLarge: {\n      fontFamily: 'var(--font-mono)',\n      fontSize: '1rem',\n      lineHeight: '1.5rem',\n      letterSpacing: '0',\n      fontWeight: 400,\n    },\n    codeMedium: {\n      fontFamily: 'var(--font-mono)',\n      fontSize: '0.875rem',\n      lineHeight: '1.25rem',\n      letterSpacing: '0',\n      fontWeight: 400,\n    },\n    codeSmall: {\n      fontFamily: 'var(--font-mono)',\n      fontSize: '0.75rem',\n      lineHeight: '1rem',\n      letterSpacing: '0',\n      fontWeight: 400,\n    },\n\n    // Caption styles\n    caption: {\n      fontFamily: 'var(--font-sans)',\n      fontSize: '0.75rem',\n      lineHeight: '1rem',\n      letterSpacing: '0.025em',\n      fontWeight: 400,\n    },\n    overline: {\n      fontFamily: 'var(--font-sans)',\n      fontSize: '0.75rem',\n      lineHeight: '1rem',\n      letterSpacing: '0.1em',\n      fontWeight: 500,\n      textTransform: 'uppercase',\n    },\n  },\n} as const\n\n// Export type definitions\nexport type Typography = typeof typography\nexport type TextStyle = keyof typeof typography.textStyles\n",
              ],
              names: [
                'typography',
                'fontFamily',
                'sans',
                'join',
                'serif',
                'mono',
                'fontSize',
                'xs',
                'size',
                'lineHeight',
                'letterSpacing',
                'sm',
                'base',
                'lg',
                'xl',
                'fontWeight',
                'thin',
                'extralight',
                'light',
                'normal',
                'medium',
                'semibold',
                'bold',
                'extrabold',
                'black',
                'tighter',
                'tight',
                'wide',
                'wider',
                'widest',
                'none',
                'snug',
                'relaxed',
                'loose',
                'textStyles',
                'displayLarge',
                'displayMedium',
                'displaySmall',
                'heading1',
                'heading2',
                'heading3',
                'heading4',
                'heading5',
                'heading6',
                'bodyLarge',
                'bodyMedium',
                'bodySmall',
                'buttonLarge',
                'buttonMedium',
                'buttonSmall',
                'labelLarge',
                'labelMedium',
                'labelSmall',
                'codeLarge',
                'codeMedium',
                'codeSmall',
                'caption',
                'overline',
                'textTransform',
              ],
              mappings:
                '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,YAAY;YACZC,eAAe;YACfK,YAAY;QACd;QACAkC,aAAa;YACXhD,YAAY;YACZK,UAAU;YACVG,YAAY;YACZC,eAAe;YACfK,YAAY;QACd;QAEA,eAAe;QACfmC,YAAY;YACVjD,YAAY;YACZK,UAAU;YACVG,YAAY;YACZC,eAAe;YACfK,YAAY;QACd;QACAoC,aAAa;YACXlD,YAAY;YACZK,UAAU;YACVG,YAAY;YACZC,eAAe;YACfK,YAAY;QACd;QACAqC,YAAY;YACVnD,YAAY;YACZK,UAAU;YACVG,YAAY;YACZC,eAAe;YACfK,YAAY;QACd;QAEA,cAAc;QACdsC,WAAW;YACTpD,YAAY;YACZK,UAAU;YACVG,YAAY;YACZC,eAAe;YACfK,YAAY;QACd;QACAuC,YAAY;YACVrD,YAAY;YACZK,UAAU;YACVG,YAAY;YACZC,eAAe;YACfK,YAAY;QACd;QACAwC,WAAW;YACTtD,YAAY;YACZK,UAAU;YACVG,YAAY;YACZC,eAAe;YACfK,YAAY;QACd;QAEA,iBAAiB;QACjByC,SAAS;YACPvD,YAAY;YACZK,UAAU;YACVG,YAAY;YACZC,eAAe;YACfK,YAAY;QACd;QACA0C,UAAU;YACRxD,YAAY;YACZK,UAAU;YACVG,YAAY;YACZC,eAAe;YACfK,YAAY;YACZ2C,eAAe;QACjB;IACF;AACF,EAAU',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: 'f27091b4f555ca89408f2c83b21c8d1fedd1a0cc',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_1atnlneq3t = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      cov_1atnlneq3t()
      const typography_typography =
        (cov_1atnlneq3t().s[0]++,
        {
          fontFamily: {
            sans: [
              '-apple-system',
              'BlinkMacSystemFont',
              '"Segoe UI"',
              'Roboto',
              '"Helvetica Neue"',
              'Arial',
              'sans-serif',
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
            ].join(', '),
            serif: [
              'Georgia',
              'Cambria',
              '"Times New Roman"',
              'Times',
              'serif',
            ].join(', '),
            mono: [
              '"SF Mono"',
              'Monaco',
              '"Cascadia Code"',
              '"Roboto Mono"',
              'Menlo',
              'Consolas',
              '"Courier New"',
              'monospace',
            ].join(', '),
          },
          fontSize: {
            xs: {
              size: '0.75rem',
              lineHeight: '1rem',
              letterSpacing: '0.05em',
            },
            sm: {
              size: '0.875rem',
              lineHeight: '1.25rem',
              letterSpacing: '0.025em',
            },
            base: { size: '1rem', lineHeight: '1.5rem', letterSpacing: '0' },
            lg: {
              size: '1.125rem',
              lineHeight: '1.75rem',
              letterSpacing: '-0.025em',
            },
            xl: {
              size: '1.25rem',
              lineHeight: '1.875rem',
              letterSpacing: '-0.025em',
            },
            '2xl': {
              size: '1.5rem',
              lineHeight: '2rem',
              letterSpacing: '-0.025em',
            },
            '3xl': {
              size: '1.875rem',
              lineHeight: '2.25rem',
              letterSpacing: '-0.025em',
            },
            '4xl': {
              size: '2.25rem',
              lineHeight: '2.5rem',
              letterSpacing: '-0.05em',
            },
            '5xl': { size: '3rem', lineHeight: '1', letterSpacing: '-0.05em' },
            '6xl': {
              size: '3.75rem',
              lineHeight: '1',
              letterSpacing: '-0.05em',
            },
            '7xl': {
              size: '4.5rem',
              lineHeight: '1',
              letterSpacing: '-0.05em',
            },
            '8xl': { size: '6rem', lineHeight: '1', letterSpacing: '-0.05em' },
            '9xl': { size: '8rem', lineHeight: '1', letterSpacing: '-0.05em' },
          },
          fontWeight: {
            thin: 100,
            extralight: 200,
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            black: 900,
          },
          letterSpacing: {
            tighter: '-0.05em',
            tight: '-0.025em',
            normal: '0',
            wide: '0.025em',
            wider: '0.05em',
            widest: '0.1em',
          },
          lineHeight: {
            none: '1',
            tight: '1.25',
            snug: '1.375',
            normal: '1.5',
            relaxed: '1.625',
            loose: '2',
            3: '.75rem',
            4: '1rem',
            5: '1.25rem',
            6: '1.5rem',
            7: '1.75rem',
            8: '2rem',
            9: '2.25rem',
            10: '2.5rem',
          },
          textStyles: {
            displayLarge: {
              fontFamily: 'var(--font-sans)',
              fontSize: '3.75rem',
              lineHeight: '1',
              letterSpacing: '-0.05em',
              fontWeight: 800,
            },
            displayMedium: {
              fontFamily: 'var(--font-sans)',
              fontSize: '3rem',
              lineHeight: '1',
              letterSpacing: '-0.05em',
              fontWeight: 800,
            },
            displaySmall: {
              fontFamily: 'var(--font-sans)',
              fontSize: '2.25rem',
              lineHeight: '2.5rem',
              letterSpacing: '-0.05em',
              fontWeight: 700,
            },
            heading1: {
              fontFamily: 'var(--font-sans)',
              fontSize: '2.25rem',
              lineHeight: '2.5rem',
              letterSpacing: '-0.05em',
              fontWeight: 700,
            },
            heading2: {
              fontFamily: 'var(--font-sans)',
              fontSize: '1.875rem',
              lineHeight: '2.25rem',
              letterSpacing: '-0.025em',
              fontWeight: 600,
            },
            heading3: {
              fontFamily: 'var(--font-sans)',
              fontSize: '1.5rem',
              lineHeight: '2rem',
              letterSpacing: '-0.025em',
              fontWeight: 600,
            },
            heading4: {
              fontFamily: 'var(--font-sans)',
              fontSize: '1.25rem',
              lineHeight: '1.875rem',
              letterSpacing: '-0.025em',
              fontWeight: 600,
            },
            heading5: {
              fontFamily: 'var(--font-sans)',
              fontSize: '1.125rem',
              lineHeight: '1.75rem',
              letterSpacing: '-0.025em',
              fontWeight: 600,
            },
            heading6: {
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              lineHeight: '1.5rem',
              letterSpacing: '0',
              fontWeight: 600,
            },
            bodyLarge: {
              fontFamily: 'var(--font-sans)',
              fontSize: '1.125rem',
              lineHeight: '1.75rem',
              letterSpacing: '0',
              fontWeight: 400,
            },
            bodyMedium: {
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              lineHeight: '1.5rem',
              letterSpacing: '0',
              fontWeight: 400,
            },
            bodySmall: {
              fontFamily: 'var(--font-sans)',
              fontSize: '0.875rem',
              lineHeight: '1.25rem',
              letterSpacing: '0',
              fontWeight: 400,
            },
            buttonLarge: {
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              lineHeight: '1.5rem',
              letterSpacing: '0.025em',
              fontWeight: 500,
            },
            buttonMedium: {
              fontFamily: 'var(--font-sans)',
              fontSize: '0.875rem',
              lineHeight: '1.25rem',
              letterSpacing: '0.025em',
              fontWeight: 500,
            },
            buttonSmall: {
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              lineHeight: '1rem',
              letterSpacing: '0.05em',
              fontWeight: 500,
            },
            labelLarge: {
              fontFamily: 'var(--font-sans)',
              fontSize: '0.875rem',
              lineHeight: '1.25rem',
              letterSpacing: '0.025em',
              fontWeight: 500,
            },
            labelMedium: {
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              lineHeight: '1rem',
              letterSpacing: '0.05em',
              fontWeight: 500,
            },
            labelSmall: {
              fontFamily: 'var(--font-sans)',
              fontSize: '0.625rem',
              lineHeight: '0.75rem',
              letterSpacing: '0.05em',
              fontWeight: 500,
            },
            codeLarge: {
              fontFamily: 'var(--font-mono)',
              fontSize: '1rem',
              lineHeight: '1.5rem',
              letterSpacing: '0',
              fontWeight: 400,
            },
            codeMedium: {
              fontFamily: 'var(--font-mono)',
              fontSize: '0.875rem',
              lineHeight: '1.25rem',
              letterSpacing: '0',
              fontWeight: 400,
            },
            codeSmall: {
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              lineHeight: '1rem',
              letterSpacing: '0',
              fontWeight: 400,
            },
            caption: {
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              lineHeight: '1rem',
              letterSpacing: '0.025em',
              fontWeight: 400,
            },
            overline: {
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              lineHeight: '1rem',
              letterSpacing: '0.1em',
              fontWeight: 500,
              textTransform: 'uppercase',
            },
          },
        })
      function cov_1zcpfy4rwl() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/design-system/tokens/spacing.ts',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          'a4752ca923514a55edb2c0a0115fd0ea1c3d4a48' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/design-system/tokens/spacing.ts',
            statementMap: {
              0: {
                start: { line: 2, column: 23 },
                end: { line: 39, column: 1 },
              },
              1: {
                start: { line: 41, column: 32 },
                end: { line: 120, column: 1 },
              },
              2: {
                start: { line: 122, column: 22 },
                end: { line: 171, column: 1 },
              },
              3: {
                start: { line: 173, column: 24 },
                end: { line: 180, column: 1 },
              },
              4: {
                start: { line: 182, column: 22 },
                end: { line: 192, column: 1 },
              },
              5: {
                start: { line: 194, column: 22 },
                end: { line: 207, column: 1 },
              },
            },
            fnMap: {},
            branchMap: {},
            s: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
            f: {},
            b: {},
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/design-system/tokens/spacing.ts',
              ],
              sourcesContent: [
                "// Notable Design System - Spacing Tokens\n\nexport const spacing = {\n  // Base spacing scale (4px base)\n  0: '0',\n  px: '1px',\n  0.5: '0.125rem', // 2px\n  1: '0.25rem', // 4px\n  1.5: '0.375rem', // 6px\n  2: '0.5rem', // 8px\n  2.5: '0.625rem', // 10px\n  3: '0.75rem', // 12px\n  3.5: '0.875rem', // 14px\n  4: '1rem', // 16px\n  5: '1.25rem', // 20px\n  6: '1.5rem', // 24px\n  7: '1.75rem', // 28px\n  8: '2rem', // 32px\n  9: '2.25rem', // 36px\n  10: '2.5rem', // 40px\n  11: '2.75rem', // 44px\n  12: '3rem', // 48px\n  14: '3.5rem', // 56px\n  16: '4rem', // 64px\n  20: '5rem', // 80px\n  24: '6rem', // 96px\n  28: '7rem', // 112px\n  32: '8rem', // 128px\n  36: '9rem', // 144px\n  40: '10rem', // 160px\n  44: '11rem', // 176px\n  48: '12rem', // 192px\n  52: '13rem', // 208px\n  56: '14rem', // 224px\n  60: '15rem', // 240px\n  64: '16rem', // 256px\n  72: '18rem', // 288px\n  80: '20rem', // 320px\n  96: '24rem', // 384px\n} as const\n\n// Component-specific spacing\nexport const componentSpacing = {\n  // Button padding\n  button: {\n    xs: {\n      x: spacing[2],\n      y: spacing[1],\n    },\n    sm: {\n      x: spacing[3],\n      y: spacing[1.5],\n    },\n    md: {\n      x: spacing[4],\n      y: spacing[2],\n    },\n    lg: {\n      x: spacing[6],\n      y: spacing[3],\n    },\n    xl: {\n      x: spacing[8],\n      y: spacing[4],\n    },\n  },\n\n  // Input padding\n  input: {\n    sm: {\n      x: spacing[3],\n      y: spacing[1.5],\n    },\n    md: {\n      x: spacing[3],\n      y: spacing[2],\n    },\n    lg: {\n      x: spacing[4],\n      y: spacing[3],\n    },\n  },\n\n  // Card padding\n  card: {\n    sm: spacing[4],\n    md: spacing[6],\n    lg: spacing[8],\n  },\n\n  // Modal padding\n  modal: {\n    sm: spacing[4],\n    md: spacing[6],\n    lg: spacing[8],\n  },\n\n  // List spacing\n  list: {\n    gap: spacing[2],\n    itemPadding: spacing[3],\n  },\n\n  // Grid gaps\n  grid: {\n    xs: spacing[2],\n    sm: spacing[4],\n    md: spacing[6],\n    lg: spacing[8],\n    xl: spacing[12],\n  },\n\n  // Stack spacing\n  stack: {\n    xs: spacing[1],\n    sm: spacing[2],\n    md: spacing[4],\n    lg: spacing[6],\n    xl: spacing[8],\n  },\n\n  // Section spacing\n  section: {\n    sm: spacing[8],\n    md: spacing[12],\n    lg: spacing[16],\n    xl: spacing[24],\n  },\n} as const\n\n// Layout spacing\nexport const layout = {\n  // Container padding\n  container: {\n    padding: {\n      mobile: spacing[4],\n      tablet: spacing[6],\n      desktop: spacing[8],\n    },\n    maxWidth: {\n      sm: '640px',\n      md: '768px',\n      lg: '1024px',\n      xl: '1280px',\n      '2xl': '1400px',\n      full: '100%',\n    },\n  },\n\n  // Page margins\n  page: {\n    margin: {\n      mobile: spacing[4],\n      tablet: spacing[8],\n      desktop: spacing[12],\n    },\n  },\n\n  // Sidebar width\n  sidebar: {\n    width: {\n      collapsed: '4rem',\n      narrow: '240px',\n      default: '280px',\n      wide: '320px',\n    },\n  },\n\n  // Header height\n  header: {\n    height: {\n      mobile: '56px',\n      desktop: '64px',\n    },\n  },\n\n  // Content area\n  content: {\n    maxWidth: {\n      prose: '65ch',\n      article: '720px',\n      wide: '1200px',\n    },\n  },\n} as const\n\n// Icon sizes\nexport const iconSize = {\n  xs: '12px',\n  sm: '16px',\n  md: '20px',\n  lg: '24px',\n  xl: '32px',\n  '2xl': '48px',\n} as const\n\n// Border radius\nexport const radius = {\n  none: '0',\n  sm: '0.125rem', // 2px\n  base: '0.25rem', // 4px\n  md: '0.375rem', // 6px\n  lg: '0.5rem', // 8px\n  xl: '0.75rem', // 12px\n  '2xl': '1rem', // 16px\n  '3xl': '1.5rem', // 24px\n  full: '9999px',\n} as const\n\n// Z-index scale\nexport const zIndex = {\n  hide: -1,\n  auto: 'auto',\n  base: 0,\n  dropdown: 10,\n  sticky: 20,\n  fixed: 30,\n  modalBackdrop: 40,\n  modal: 50,\n  popover: 60,\n  tooltip: 70,\n  notification: 80,\n  top: 90,\n} as const\n\n// Export type definitions\nexport type Spacing = typeof spacing\nexport type ComponentSpacing = typeof componentSpacing\nexport type Layout = typeof layout\nexport type IconSize = typeof iconSize\nexport type Radius = typeof radius\nexport type ZIndex = typeof zIndex\n",
              ],
              names: [
                'spacing',
                'px',
                'componentSpacing',
                'button',
                'xs',
                'x',
                'y',
                'sm',
                'md',
                'lg',
                'xl',
                'input',
                'card',
                'modal',
                'list',
                'gap',
                'itemPadding',
                'grid',
                'stack',
                'section',
                'layout',
                'container',
                'padding',
                'mobile',
                'tablet',
                'desktop',
                'maxWidth',
                'full',
                'page',
                'margin',
                'sidebar',
                'width',
                'collapsed',
                'narrow',
                'default',
                'wide',
                'header',
                'height',
                'content',
                'prose',
                'article',
                'iconSize',
                'radius',
                'none',
                'base',
                'zIndex',
                'hide',
                'auto',
                'dropdown',
                'sticky',
                'fixed',
                'modalBackdrop',
                'popover',
                'tooltip',
                'notification',
                'top',
              ],
              mappings:
                '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',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: 'a4752ca923514a55edb2c0a0115fd0ea1c3d4a48',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_1zcpfy4rwl = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      cov_1zcpfy4rwl()
      const spacing_spacing =
          (cov_1zcpfy4rwl().s[0]++,
          {
            0: '0',
            px: '1px',
            0.5: '0.125rem',
            1: '0.25rem',
            1.5: '0.375rem',
            2: '0.5rem',
            2.5: '0.625rem',
            3: '0.75rem',
            3.5: '0.875rem',
            4: '1rem',
            5: '1.25rem',
            6: '1.5rem',
            7: '1.75rem',
            8: '2rem',
            9: '2.25rem',
            10: '2.5rem',
            11: '2.75rem',
            12: '3rem',
            14: '3.5rem',
            16: '4rem',
            20: '5rem',
            24: '6rem',
            28: '7rem',
            32: '8rem',
            36: '9rem',
            40: '10rem',
            44: '11rem',
            48: '12rem',
            52: '13rem',
            56: '14rem',
            60: '15rem',
            64: '16rem',
            72: '18rem',
            80: '20rem',
            96: '24rem',
          }),
        componentSpacing =
          (cov_1zcpfy4rwl().s[1]++,
          {
            button: {
              xs: { x: spacing_spacing[2], y: spacing_spacing[1] },
              sm: { x: spacing_spacing[3], y: spacing_spacing[1.5] },
              md: { x: spacing_spacing[4], y: spacing_spacing[2] },
              lg: { x: spacing_spacing[6], y: spacing_spacing[3] },
              xl: { x: spacing_spacing[8], y: spacing_spacing[4] },
            },
            input: {
              sm: { x: spacing_spacing[3], y: spacing_spacing[1.5] },
              md: { x: spacing_spacing[3], y: spacing_spacing[2] },
              lg: { x: spacing_spacing[4], y: spacing_spacing[3] },
            },
            card: {
              sm: spacing_spacing[4],
              md: spacing_spacing[6],
              lg: spacing_spacing[8],
            },
            modal: {
              sm: spacing_spacing[4],
              md: spacing_spacing[6],
              lg: spacing_spacing[8],
            },
            list: { gap: spacing_spacing[2], itemPadding: spacing_spacing[3] },
            grid: {
              xs: spacing_spacing[2],
              sm: spacing_spacing[4],
              md: spacing_spacing[6],
              lg: spacing_spacing[8],
              xl: spacing_spacing[12],
            },
            stack: {
              xs: spacing_spacing[1],
              sm: spacing_spacing[2],
              md: spacing_spacing[4],
              lg: spacing_spacing[6],
              xl: spacing_spacing[8],
            },
            section: {
              sm: spacing_spacing[8],
              md: spacing_spacing[12],
              lg: spacing_spacing[16],
              xl: spacing_spacing[24],
            },
          }),
        layout =
          (cov_1zcpfy4rwl().s[2]++,
          {
            container: {
              padding: {
                mobile: spacing_spacing[4],
                tablet: spacing_spacing[6],
                desktop: spacing_spacing[8],
              },
              maxWidth: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1400px',
                full: '100%',
              },
            },
            page: {
              margin: {
                mobile: spacing_spacing[4],
                tablet: spacing_spacing[8],
                desktop: spacing_spacing[12],
              },
            },
            sidebar: {
              width: {
                collapsed: '4rem',
                narrow: '240px',
                default: '280px',
                wide: '320px',
              },
            },
            header: { height: { mobile: '56px', desktop: '64px' } },
            content: {
              maxWidth: { prose: '65ch', article: '720px', wide: '1200px' },
            },
          }),
        iconSize =
          (cov_1zcpfy4rwl().s[3]++,
          {
            xs: '12px',
            sm: '16px',
            md: '20px',
            lg: '24px',
            xl: '32px',
            '2xl': '48px',
          }),
        spacing_radius =
          (cov_1zcpfy4rwl().s[4]++,
          {
            none: '0',
            sm: '0.125rem',
            base: '0.25rem',
            md: '0.375rem',
            lg: '0.5rem',
            xl: '0.75rem',
            '2xl': '1rem',
            '3xl': '1.5rem',
            full: '9999px',
          }),
        zIndex =
          (cov_1zcpfy4rwl().s[5]++,
          {
            hide: -1,
            auto: 'auto',
            base: 0,
            dropdown: 10,
            sticky: 20,
            fixed: 30,
            modalBackdrop: 40,
            modal: 50,
            popover: 60,
            tooltip: 70,
            notification: 80,
            top: 90,
          })
      function cov_cr7k8qb60() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/design-system/tokens/motion.ts',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          '3ac3c52b18cd6e1b4230d15c3ff615d13a3cee3f' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/design-system/tokens/motion.ts',
            statementMap: {
              0: {
                start: { line: 2, column: 22 },
                end: { line: 226, column: 1 },
              },
              1: {
                start: { line: 228, column: 33 },
                end: { line: 262, column: 1 },
              },
            },
            fnMap: {},
            branchMap: {},
            s: { 0: 0, 1: 0 },
            f: {},
            b: {},
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/design-system/tokens/motion.ts',
              ],
              sourcesContent: [
                "// Notable Design System - Motion & Animation Tokens\n\nexport const motion = {\n  // Duration scales\n  duration: {\n    instant: '0ms',\n    fast: '100ms',\n    normal: '200ms',\n    slow: '300ms',\n    slower: '400ms',\n    slowest: '500ms',\n  },\n\n  // Timing functions (easing)\n  easing: {\n    // Standard easing\n    linear: 'linear',\n    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',\n    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',\n    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',\n\n    // Expressive easing\n    easeInQuart: 'cubic-bezier(0.5, 0, 0.75, 0)',\n    easeOutQuart: 'cubic-bezier(0.25, 1, 0.5, 1)',\n    easeInOutQuart: 'cubic-bezier(0.76, 0, 0.24, 1)',\n\n    // Bounce easing\n    easeOutBack: 'cubic-bezier(0.34, 1.56, 0.64, 1)',\n    easeInBack: 'cubic-bezier(0.36, 0, 0.66, -0.56)',\n    easeInOutBack: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',\n\n    // Spring easing\n    spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',\n    springSmooth: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',\n  },\n\n  // Transitions\n  transition: {\n    // Base transitions\n    none: 'none',\n    all: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',\n\n    // Property-specific transitions\n    colors:\n      'background-color 200ms cubic-bezier(0.4, 0, 0.2, 1), border-color 200ms cubic-bezier(0.4, 0, 0.2, 1), color 200ms cubic-bezier(0.4, 0, 0.2, 1), fill 200ms cubic-bezier(0.4, 0, 0.2, 1), stroke 200ms cubic-bezier(0.4, 0, 0.2, 1)',\n    opacity: 'opacity 200ms cubic-bezier(0.4, 0, 0.2, 1)',\n    shadow: 'box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1)',\n    transform: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1)',\n\n    // Common combinations\n    fade: 'opacity 200ms cubic-bezier(0.4, 0, 0.2, 1)',\n    slide: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)',\n    scale: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1)',\n\n    // Interactive transitions\n    button:\n      'background-color 100ms cubic-bezier(0.4, 0, 0.2, 1), color 100ms cubic-bezier(0.4, 0, 0.2, 1), border-color 100ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 100ms cubic-bezier(0.4, 0, 0.2, 1), transform 100ms cubic-bezier(0.4, 0, 0.2, 1)',\n    link: 'color 100ms cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 100ms cubic-bezier(0.4, 0, 0.2, 1)',\n    input:\n      'border-color 200ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1)',\n  },\n\n  // Keyframe animations\n  keyframes: {\n    // Fade animations\n    fadeIn: {\n      from: { opacity: '0' },\n      to: { opacity: '1' },\n    },\n    fadeOut: {\n      from: { opacity: '1' },\n      to: { opacity: '0' },\n    },\n\n    // Slide animations\n    slideInFromTop: {\n      from: { transform: 'translateY(-100%)' },\n      to: { transform: 'translateY(0)' },\n    },\n    slideInFromBottom: {\n      from: { transform: 'translateY(100%)' },\n      to: { transform: 'translateY(0)' },\n    },\n    slideInFromLeft: {\n      from: { transform: 'translateX(-100%)' },\n      to: { transform: 'translateX(0)' },\n    },\n    slideInFromRight: {\n      from: { transform: 'translateX(100%)' },\n      to: { transform: 'translateX(0)' },\n    },\n\n    // Scale animations\n    scaleIn: {\n      from: { transform: 'scale(0.95)', opacity: '0' },\n      to: { transform: 'scale(1)', opacity: '1' },\n    },\n    scaleOut: {\n      from: { transform: 'scale(1)', opacity: '1' },\n      to: { transform: 'scale(0.95)', opacity: '0' },\n    },\n\n    // Rotate animations\n    spin: {\n      from: { transform: 'rotate(0deg)' },\n      to: { transform: 'rotate(360deg)' },\n    },\n\n    // Pulse animation\n    pulse: {\n      '0%, 100%': { opacity: '1' },\n      '50%': { opacity: '0.5' },\n    },\n\n    // Bounce animation\n    bounce: {\n      '0%, 100%': {\n        transform: 'translateY(-25%)',\n        animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',\n      },\n      '50%': {\n        transform: 'translateY(0)',\n        animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',\n      },\n    },\n\n    // Shake animation\n    shake: {\n      '0%, 100%': { transform: 'translateX(0)' },\n      '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2px)' },\n      '20%, 40%, 60%, 80%': { transform: 'translateX(2px)' },\n    },\n\n    // Skeleton loading\n    shimmer: {\n      '0%': {\n        backgroundPosition: '-200% 0',\n      },\n      '100%': {\n        backgroundPosition: '200% 0',\n      },\n    },\n\n    // Wave loading animation\n    wave: {\n      '0%': {\n        transform: 'translateX(-100%)',\n      },\n      '100%': {\n        transform: 'translateX(100%)',\n      },\n    },\n\n    // Accordion animations\n    accordionDown: {\n      from: { height: '0' },\n      to: { height: 'var(--radix-accordion-content-height)' },\n    },\n    accordionUp: {\n      from: { height: 'var(--radix-accordion-content-height)' },\n      to: { height: '0' },\n    },\n  },\n\n  // Animation utilities\n  animation: {\n    none: 'none',\n    spin: 'spin 1s linear infinite',\n    ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',\n    pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',\n    bounce: 'bounce 1s infinite',\n    shake: 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both',\n\n    // Fade animations\n    fadeIn: 'fadeIn 200ms ease-out',\n    fadeOut: 'fadeOut 200ms ease-in',\n\n    // Slide animations\n    slideInFromTop: 'slideInFromTop 300ms cubic-bezier(0.4, 0, 0.2, 1)',\n    slideInFromBottom: 'slideInFromBottom 300ms cubic-bezier(0.4, 0, 0.2, 1)',\n    slideInFromLeft: 'slideInFromLeft 300ms cubic-bezier(0.4, 0, 0.2, 1)',\n    slideInFromRight: 'slideInFromRight 300ms cubic-bezier(0.4, 0, 0.2, 1)',\n\n    // Scale animations\n    scaleIn: 'scaleIn 200ms cubic-bezier(0.4, 0, 0.2, 1)',\n    scaleOut: 'scaleOut 200ms cubic-bezier(0.4, 0, 0.2, 1)',\n\n    // Loading animations\n    shimmer: 'shimmer 2s linear infinite',\n    wave: 'wave 1.5s ease-in-out infinite',\n\n    // Accordion animations\n    accordionDown: 'accordionDown 200ms ease-out',\n    accordionUp: 'accordionUp 200ms ease-out',\n  },\n} as const\n\n// Micro-interaction presets\nexport const microInteractions = {\n  hover: {\n    scale: {\n      transform: 'scale(1.05)',\n      transition: motion.transition.transform,\n    },\n    lift: {\n      transform: 'translateY(-2px)',\n      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',\n      transition: 'transform 200ms ease-out, box-shadow 200ms ease-out',\n    },\n    glow: {\n      boxShadow: '0 0 0 2px var(--color-primary)',\n      transition: motion.transition.shadow,\n    },\n  },\n\n  active: {\n    scale: {\n      transform: 'scale(0.98)',\n      transition: 'transform 100ms ease-out',\n    },\n    press: {\n      transform: 'translateY(1px)',\n      transition: 'transform 100ms ease-out',\n    },\n  },\n\n  focus: {\n    ring: {\n      outline: '2px solid transparent',\n      outlineOffset: '2px',\n      boxShadow: '0 0 0 2px var(--color-ring)',\n      transition: motion.transition.shadow,\n    },\n  },\n} as const\n\n// Export type definitions\nexport type Motion = typeof motion\nexport type MicroInteractions = typeof microInteractions\n",
              ],
              names: [
                'motion',
                'duration',
                'instant',
                'fast',
                'normal',
                'slow',
                'slower',
                'slowest',
                'easing',
                'linear',
                'easeIn',
                'easeOut',
                'easeInOut',
                'easeInQuart',
                'easeOutQuart',
                'easeInOutQuart',
                'easeOutBack',
                'easeInBack',
                'easeInOutBack',
                'spring',
                'springSmooth',
                'transition',
                'none',
                'all',
                'colors',
                'opacity',
                'shadow',
                'transform',
                'fade',
                'slide',
                'scale',
                'button',
                'link',
                'input',
                'keyframes',
                'fadeIn',
                'from',
                'to',
                'fadeOut',
                'slideInFromTop',
                'slideInFromBottom',
                'slideInFromLeft',
                'slideInFromRight',
                'scaleIn',
                'scaleOut',
                'spin',
                'pulse',
                'bounce',
                'animationTimingFunction',
                'shake',
                'shimmer',
                'backgroundPosition',
                'wave',
                'accordionDown',
                'height',
                'accordionUp',
                'animation',
                'ping',
                'microInteractions',
                'hover',
                'lift',
                'boxShadow',
                'glow',
                'active',
                'press',
                'focus',
                'ring',
                'outline',
                'outlineOffset',
              ],
              mappings:
                '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',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '3ac3c52b18cd6e1b4230d15c3ff615d13a3cee3f',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_cr7k8qb60 = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      cov_cr7k8qb60()
      const motion_motion =
          (cov_cr7k8qb60().s[0]++,
          {
            duration: {
              instant: '0ms',
              fast: '100ms',
              normal: '200ms',
              slow: '300ms',
              slower: '400ms',
              slowest: '500ms',
            },
            easing: {
              linear: 'linear',
              easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
              easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
              easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
              easeInQuart: 'cubic-bezier(0.5, 0, 0.75, 0)',
              easeOutQuart: 'cubic-bezier(0.25, 1, 0.5, 1)',
              easeInOutQuart: 'cubic-bezier(0.76, 0, 0.24, 1)',
              easeOutBack: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
              easeInBack: 'cubic-bezier(0.36, 0, 0.66, -0.56)',
              easeInOutBack: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
              spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              springSmooth: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
            },
            transition: {
              none: 'none',
              all: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
              colors:
                'background-color 200ms cubic-bezier(0.4, 0, 0.2, 1), border-color 200ms cubic-bezier(0.4, 0, 0.2, 1), color 200ms cubic-bezier(0.4, 0, 0.2, 1), fill 200ms cubic-bezier(0.4, 0, 0.2, 1), stroke 200ms cubic-bezier(0.4, 0, 0.2, 1)',
              opacity: 'opacity 200ms cubic-bezier(0.4, 0, 0.2, 1)',
              shadow: 'box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1)',
              transform: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1)',
              fade: 'opacity 200ms cubic-bezier(0.4, 0, 0.2, 1)',
              slide: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)',
              scale: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1)',
              button:
                'background-color 100ms cubic-bezier(0.4, 0, 0.2, 1), color 100ms cubic-bezier(0.4, 0, 0.2, 1), border-color 100ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 100ms cubic-bezier(0.4, 0, 0.2, 1), transform 100ms cubic-bezier(0.4, 0, 0.2, 1)',
              link: 'color 100ms cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 100ms cubic-bezier(0.4, 0, 0.2, 1)',
              input:
                'border-color 200ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1)',
            },
            keyframes: {
              fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
              fadeOut: { from: { opacity: '1' }, to: { opacity: '0' } },
              slideInFromTop: {
                from: { transform: 'translateY(-100%)' },
                to: { transform: 'translateY(0)' },
              },
              slideInFromBottom: {
                from: { transform: 'translateY(100%)' },
                to: { transform: 'translateY(0)' },
              },
              slideInFromLeft: {
                from: { transform: 'translateX(-100%)' },
                to: { transform: 'translateX(0)' },
              },
              slideInFromRight: {
                from: { transform: 'translateX(100%)' },
                to: { transform: 'translateX(0)' },
              },
              scaleIn: {
                from: { transform: 'scale(0.95)', opacity: '0' },
                to: { transform: 'scale(1)', opacity: '1' },
              },
              scaleOut: {
                from: { transform: 'scale(1)', opacity: '1' },
                to: { transform: 'scale(0.95)', opacity: '0' },
              },
              spin: {
                from: { transform: 'rotate(0deg)' },
                to: { transform: 'rotate(360deg)' },
              },
              pulse: {
                '0%, 100%': { opacity: '1' },
                '50%': { opacity: '0.5' },
              },
              bounce: {
                '0%, 100%': {
                  transform: 'translateY(-25%)',
                  animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
                },
                '50%': {
                  transform: 'translateY(0)',
                  animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
                },
              },
              shake: {
                '0%, 100%': { transform: 'translateX(0)' },
                '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2px)' },
                '20%, 40%, 60%, 80%': { transform: 'translateX(2px)' },
              },
              shimmer: {
                '0%': { backgroundPosition: '-200% 0' },
                '100%': { backgroundPosition: '200% 0' },
              },
              wave: {
                '0%': { transform: 'translateX(-100%)' },
                '100%': { transform: 'translateX(100%)' },
              },
              accordionDown: {
                from: { height: '0' },
                to: { height: 'var(--radix-accordion-content-height)' },
              },
              accordionUp: {
                from: { height: 'var(--radix-accordion-content-height)' },
                to: { height: '0' },
              },
            },
            animation: {
              none: 'none',
              spin: 'spin 1s linear infinite',
              ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
              pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              bounce: 'bounce 1s infinite',
              shake: 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both',
              fadeIn: 'fadeIn 200ms ease-out',
              fadeOut: 'fadeOut 200ms ease-in',
              slideInFromTop:
                'slideInFromTop 300ms cubic-bezier(0.4, 0, 0.2, 1)',
              slideInFromBottom:
                'slideInFromBottom 300ms cubic-bezier(0.4, 0, 0.2, 1)',
              slideInFromLeft:
                'slideInFromLeft 300ms cubic-bezier(0.4, 0, 0.2, 1)',
              slideInFromRight:
                'slideInFromRight 300ms cubic-bezier(0.4, 0, 0.2, 1)',
              scaleIn: 'scaleIn 200ms cubic-bezier(0.4, 0, 0.2, 1)',
              scaleOut: 'scaleOut 200ms cubic-bezier(0.4, 0, 0.2, 1)',
              shimmer: 'shimmer 2s linear infinite',
              wave: 'wave 1.5s ease-in-out infinite',
              accordionDown: 'accordionDown 200ms ease-out',
              accordionUp: 'accordionUp 200ms ease-out',
            },
          }),
        microInteractions =
          (cov_cr7k8qb60().s[1]++,
          {
            hover: {
              scale: {
                transform: 'scale(1.05)',
                transition: motion_motion.transition.transform,
              },
              lift: {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                transition:
                  'transform 200ms ease-out, box-shadow 200ms ease-out',
              },
              glow: {
                boxShadow: '0 0 0 2px var(--color-primary)',
                transition: motion_motion.transition.shadow,
              },
            },
            active: {
              scale: {
                transform: 'scale(0.98)',
                transition: 'transform 100ms ease-out',
              },
              press: {
                transform: 'translateY(1px)',
                transition: 'transform 100ms ease-out',
              },
            },
            focus: {
              ring: {
                outline: '2px solid transparent',
                outlineOffset: '2px',
                boxShadow: '0 0 0 2px var(--color-ring)',
                transition: motion_motion.transition.shadow,
              },
            },
          })
      function cov_24fs3cfimv() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/design-system/tokens/effects.ts',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          'bf786ad1c9d7f84395875924d5fed3ca81984624' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/design-system/tokens/effects.ts',
            statementMap: {
              0: {
                start: { line: 2, column: 23 },
                end: { line: 206, column: 1 },
              },
            },
            fnMap: {},
            branchMap: {},
            s: { 0: 0 },
            f: {},
            b: {},
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/design-system/tokens/effects.ts',
              ],
              sourcesContent: [
                "// Notable Design System - Effects & Shadows Tokens\n\nexport const effects = {\n  // Box shadows\n  shadow: {\n    none: 'none',\n    // Subtle shadows\n    xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',\n    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',\n    // Standard shadows\n    base: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',\n    md: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',\n    lg: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',\n    xl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',\n    '2xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',\n    // Inner shadows\n    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',\n    innerMd: 'inset 0 4px 6px -1px rgba(0, 0, 0, 0.1)',\n    // Colored shadows\n    brand:\n      '0 10px 15px -3px rgba(99, 102, 241, 0.2), 0 4px 6px -4px rgba(99, 102, 241, 0.1)',\n    success:\n      '0 10px 15px -3px rgba(34, 197, 94, 0.2), 0 4px 6px -4px rgba(34, 197, 94, 0.1)',\n    error:\n      '0 10px 15px -3px rgba(239, 68, 68, 0.2), 0 4px 6px -4px rgba(239, 68, 68, 0.1)',\n  },\n\n  // Elevation system (Material Design inspired)\n  elevation: {\n    0: 'none',\n    1: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',\n    2: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',\n    3: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',\n    4: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',\n    5: '0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22)',\n  },\n\n  // Dark mode shadows (lighter shadows for dark backgrounds)\n  darkShadow: {\n    xs: '0 1px 2px 0 rgba(255, 255, 255, 0.05)',\n    sm: '0 1px 3px 0 rgba(255, 255, 255, 0.1), 0 1px 2px -1px rgba(255, 255, 255, 0.1)',\n    base: '0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -2px rgba(255, 255, 255, 0.1)',\n    md: '0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -4px rgba(255, 255, 255, 0.1)',\n    lg: '0 20px 25px -5px rgba(255, 255, 255, 0.1), 0 8px 10px -6px rgba(255, 255, 255, 0.1)',\n  },\n\n  // Blur effects\n  blur: {\n    none: '0',\n    sm: '4px',\n    base: '8px',\n    md: '12px',\n    lg: '16px',\n    xl: '24px',\n    '2xl': '40px',\n    '3xl': '64px',\n  },\n\n  // Backdrop filters\n  backdrop: {\n    blur: {\n      none: 'blur(0)',\n      sm: 'blur(4px)',\n      base: 'blur(8px)',\n      md: 'blur(12px)',\n      lg: 'blur(16px)',\n      xl: 'blur(24px)',\n    },\n    brightness: {\n      50: 'brightness(0.5)',\n      75: 'brightness(0.75)',\n      90: 'brightness(0.9)',\n      95: 'brightness(0.95)',\n      100: 'brightness(1)',\n      105: 'brightness(1.05)',\n      110: 'brightness(1.1)',\n      125: 'brightness(1.25)',\n      150: 'brightness(1.5)',\n    },\n    contrast: {\n      50: 'contrast(0.5)',\n      75: 'contrast(0.75)',\n      100: 'contrast(1)',\n      125: 'contrast(1.25)',\n      150: 'contrast(1.5)',\n      200: 'contrast(2)',\n    },\n    saturate: {\n      0: 'saturate(0)',\n      50: 'saturate(0.5)',\n      100: 'saturate(1)',\n      150: 'saturate(1.5)',\n      200: 'saturate(2)',\n    },\n  },\n\n  // Gradients\n  gradient: {\n    // Linear gradients\n    toBr: 'linear-gradient(to bottom right, var(--tw-gradient-stops))',\n    toR: 'linear-gradient(to right, var(--tw-gradient-stops))',\n    toTr: 'linear-gradient(to top right, var(--tw-gradient-stops))',\n    toT: 'linear-gradient(to top, var(--tw-gradient-stops))',\n    toTl: 'linear-gradient(to top left, var(--tw-gradient-stops))',\n    toL: 'linear-gradient(to left, var(--tw-gradient-stops))',\n    toBl: 'linear-gradient(to bottom left, var(--tw-gradient-stops))',\n    toB: 'linear-gradient(to bottom, var(--tw-gradient-stops))',\n\n    // Radial gradients\n    radial: 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',\n    radialTl: 'radial-gradient(ellipse at top left, var(--tw-gradient-stops))',\n    radialTr: 'radial-gradient(ellipse at top right, var(--tw-gradient-stops))',\n    radialBl:\n      'radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))',\n    radialBr:\n      'radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))',\n\n    // Conic gradients\n    conic: 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',\n  },\n\n  // Preset gradients\n  presetGradients: {\n    // Brand gradients\n    brand:\n      'linear-gradient(135deg, oklch(0.623 0.214 259.815) 0%, oklch(0.707 0.165 254.624) 100%)',\n    brandSubtle:\n      'linear-gradient(135deg, oklch(0.95 0.05 259.815) 0%, oklch(0.90 0.10 259.815) 100%)',\n\n    // Semantic gradients\n    success:\n      'linear-gradient(135deg, oklch(0.596 0.189 142.495) 0%, oklch(0.52 0.18 142.495) 100%)',\n    warning:\n      'linear-gradient(135deg, oklch(0.828 0.189 84.429) 0%, oklch(0.769 0.188 70.08) 100%)',\n    error:\n      'linear-gradient(135deg, oklch(0.577 0.245 27.325) 0%, oklch(0.50 0.22 27.325) 100%)',\n    info: 'linear-gradient(135deg, oklch(0.52 0.24 237) 0%, oklch(0.45 0.22 237) 100%)',\n\n    // Neutral gradients\n    neutral:\n      'linear-gradient(135deg, oklch(0.87 0 0) 0%, oklch(0.708 0 0) 100%)',\n    dark: 'linear-gradient(135deg, oklch(0.269 0 0) 0%, oklch(0.145 0 0) 100%)',\n\n    // Special effect gradients\n    sunrise:\n      'linear-gradient(135deg, oklch(0.95 0.15 60) 0%, oklch(0.85 0.25 25) 50%, oklch(0.75 0.20 350) 100%)',\n    sunset:\n      'linear-gradient(135deg, oklch(0.85 0.20 45) 0%, oklch(0.75 0.25 20) 50%, oklch(0.65 0.20 290) 100%)',\n    ocean:\n      'linear-gradient(135deg, oklch(0.75 0.15 220) 0%, oklch(0.55 0.20 200) 100%)',\n    forest:\n      'linear-gradient(135deg, oklch(0.65 0.20 140) 0%, oklch(0.45 0.18 120) 100%)',\n\n    // Overlay gradients\n    lightOverlay:\n      'linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)',\n    darkOverlay:\n      'linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%)',\n  },\n\n  // Text shadows\n  textShadow: {\n    none: 'none',\n    sm: '0 1px 2px rgba(0, 0, 0, 0.25)',\n    base: '0 2px 4px rgba(0, 0, 0, 0.25)',\n    md: '0 4px 6px rgba(0, 0, 0, 0.25)',\n    lg: '0 8px 10px rgba(0, 0, 0, 0.25)',\n    xl: '0 12px 16px rgba(0, 0, 0, 0.25)',\n  },\n\n  // Glow effects\n  glow: {\n    sm: '0 0 10px rgba(99, 102, 241, 0.5)',\n    base: '0 0 20px rgba(99, 102, 241, 0.5)',\n    md: '0 0 30px rgba(99, 102, 241, 0.5)',\n    lg: '0 0 40px rgba(99, 102, 241, 0.5)',\n    xl: '0 0 50px rgba(99, 102, 241, 0.5)',\n  },\n\n  // Filters\n  filter: {\n    // Brightness\n    brightness: {\n      0: 'brightness(0)',\n      50: 'brightness(0.5)',\n      75: 'brightness(0.75)',\n      90: 'brightness(0.9)',\n      95: 'brightness(0.95)',\n      100: 'brightness(1)',\n      105: 'brightness(1.05)',\n      110: 'brightness(1.1)',\n      125: 'brightness(1.25)',\n      150: 'brightness(1.5)',\n      200: 'brightness(2)',\n    },\n    // Contrast\n    contrast: {\n      0: 'contrast(0)',\n      50: 'contrast(0.5)',\n      75: 'contrast(0.75)',\n      100: 'contrast(1)',\n      125: 'contrast(1.25)',\n      150: 'contrast(1.5)',\n      200: 'contrast(2)',\n    },\n    // Grayscale\n    grayscale: {\n      0: 'grayscale(0)',\n      100: 'grayscale(1)',\n    },\n    // Hue rotate\n    hueRotate: {\n      0: 'hue-rotate(0deg)',\n      15: 'hue-rotate(15deg)',\n      30: 'hue-rotate(30deg)',\n      60: 'hue-rotate(60deg)',\n      90: 'hue-rotate(90deg)',\n      180: 'hue-rotate(180deg)',\n    },\n    // Invert\n    invert: {\n      0: 'invert(0)',\n      100: 'invert(1)',\n    },\n    // Saturate\n    saturate: {\n      0: 'saturate(0)',\n      50: 'saturate(0.5)',\n      100: 'saturate(1)',\n      150: 'saturate(1.5)',\n      200: 'saturate(2)',\n    },\n    // Sepia\n    sepia: {\n      0: 'sepia(0)',\n      100: 'sepia(1)',\n    },\n  },\n} as const\n\n// Export type definitions\nexport type Effects = typeof effects\n",
              ],
              names: [
                'effects',
                'shadow',
                'none',
                'xs',
                'sm',
                'base',
                'md',
                'lg',
                'xl',
                'inner',
                'innerMd',
                'brand',
                'success',
                'error',
                'elevation',
                'darkShadow',
                'blur',
                'backdrop',
                'brightness',
                'contrast',
                'saturate',
                'gradient',
                'toBr',
                'toR',
                'toTr',
                'toT',
                'toTl',
                'toL',
                'toBl',
                'toB',
                'radial',
                'radialTl',
                'radialTr',
                'radialBl',
                'radialBr',
                'conic',
                'presetGradients',
                'brandSubtle',
                'warning',
                'info',
                'neutral',
                'dark',
                'sunrise',
                'sunset',
                'ocean',
                'forest',
                'lightOverlay',
                'darkOverlay',
                'textShadow',
                'glow',
                'filter',
                'grayscale',
                'hueRotate',
                'invert',
                'sepia',
              ],
              mappings:
                'AAAA,mDAAmD;AAEnD,OAAO,MAAMA,UAAU;IACrB,cAAc;IACdC,QAAQ;QACNC,MAAM;QACN,iBAAiB;QACjBC,IAAI;QACJC,IAAI;QACJ,mBAAmB;QACnBC,MAAM;QACNC,IAAI;QACJC,IAAI;QACJC,IAAI;QACJ,OAAO;QACP,gBAAgB;QAChBC,OAAO;QACPC,SAAS;QACT,kBAAkB;QAClBC,OACE;QACFC,SACE;QACFC,OACE;IACJ;IAEA,8CAA8C;IAC9CC,WAAW;QACT,GAAG;QACH,GAAG;QACH,GAAG;QACH,GAAG;QACH,GAAG;QACH,GAAG;IACL;IAEA,2DAA2D;IAC3DC,YAAY;QACVZ,IAAI;QACJC,IAAI;QACJC,MAAM;QACNC,IAAI;QACJC,IAAI;IACN;IAEA,eAAe;IACfS,MAAM;QACJd,MAAM;QACNE,IAAI;QACJC,MAAM;QACNC,IAAI;QACJC,IAAI;QACJC,IAAI;QACJ,OAAO;QACP,OAAO;IACT;IAEA,mBAAmB;IACnBS,UAAU;QACRD,MAAM;YACJd,MAAM;YACNE,IAAI;YACJC,MAAM;YACNC,IAAI;YACJC,IAAI;YACJC,IAAI;QACN;QACAU,YAAY;YACV,IAAI;YACJ,IAAI;YACJ,IAAI;YACJ,IAAI;YACJ,KAAK;YACL,KAAK;YACL,KAAK;YACL,KAAK;YACL,KAAK;QACP;QACAC,UAAU;YACR,IAAI;YACJ,IAAI;YACJ,KAAK;YACL,KAAK;YACL,KAAK;YACL,KAAK;QACP;QACAC,UAAU;YACR,GAAG;YACH,IAAI;YACJ,KAAK;YACL,KAAK;YACL,KAAK;QACP;IACF;IAEA,YAAY;IACZC,UAAU;QACR,mBAAmB;QACnBC,MAAM;QACNC,KAAK;QACLC,MAAM;QACNC,KAAK;QACLC,MAAM;QACNC,KAAK;QACLC,MAAM;QACNC,KAAK;QAEL,mBAAmB;QACnBC,QAAQ;QACRC,UAAU;QACVC,UAAU;QACVC,UACE;QACFC,UACE;QAEF,kBAAkB;QAClBC,OAAO;IACT;IAEA,mBAAmB;IACnBC,iBAAiB;QACf,kBAAkB;QAClBzB,OACE;QACF0B,aACE;QAEF,qBAAqB;QACrBzB,SACE;QACF0B,SACE;QACFzB,OACE;QACF0B,MAAM;QAEN,oBAAoB;QACpBC,SACE;QACFC,MAAM;QAEN,2BAA2B;QAC3BC,SACE;QACFC,QACE;QACFC,OACE;QACFC,QACE;QAEF,oBAAoB;QACpBC,cACE;QACFC,aACE;IACJ;IAEA,eAAe;IACfC,YAAY;QACV9C,MAAM;QACNE,IAAI;QACJC,MAAM;QACNC,IAAI;QACJC,IAAI;QACJC,IAAI;IACN;IAEA,eAAe;IACfyC,MAAM;QACJ7C,IAAI;QACJC,MAAM;QACNC,IAAI;QACJC,IAAI;QACJC,IAAI;IACN;IAEA,UAAU;IACV0C,QAAQ;QACN,aAAa;QACbhC,YAAY;YACV,GAAG;YACH,IAAI;YACJ,IAAI;YACJ,IAAI;YACJ,IAAI;YACJ,KAAK;YACL,KAAK;YACL,KAAK;YACL,KAAK;YACL,KAAK;YACL,KAAK;QACP;QACA,WAAW;QACXC,UAAU;YACR,GAAG;YACH,IAAI;YACJ,IAAI;YACJ,KAAK;YACL,KAAK;YACL,KAAK;YACL,KAAK;QACP;QACA,YAAY;QACZgC,WAAW;YACT,GAAG;YACH,KAAK;QACP;QACA,aAAa;QACbC,WAAW;YACT,GAAG;YACH,IAAI;YACJ,IAAI;YACJ,IAAI;YACJ,IAAI;YACJ,KAAK;QACP;QACA,SAAS;QACTC,QAAQ;YACN,GAAG;YACH,KAAK;QACP;QACA,WAAW;QACXjC,UAAU;YACR,GAAG;YACH,IAAI;YACJ,KAAK;YACL,KAAK;YACL,KAAK;QACP;QACA,QAAQ;QACRkC,OAAO;YACL,GAAG;YACH,KAAK;QACP;IACF;AACF,EAAU',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: 'bf786ad1c9d7f84395875924d5fed3ca81984624',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_24fs3cfimv = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      cov_24fs3cfimv()
      const effects_effects =
        (cov_24fs3cfimv().s[0]++,
        {
          shadow: {
            none: 'none',
            xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
            base: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
            md: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
            lg: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
            xl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            '2xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
            inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
            innerMd: 'inset 0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            brand:
              '0 10px 15px -3px rgba(99, 102, 241, 0.2), 0 4px 6px -4px rgba(99, 102, 241, 0.1)',
            success:
              '0 10px 15px -3px rgba(34, 197, 94, 0.2), 0 4px 6px -4px rgba(34, 197, 94, 0.1)',
            error:
              '0 10px 15px -3px rgba(239, 68, 68, 0.2), 0 4px 6px -4px rgba(239, 68, 68, 0.1)',
          },
          elevation: {
            0: 'none',
            1: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
            2: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
            3: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
            4: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
            5: '0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22)',
          },
          darkShadow: {
            xs: '0 1px 2px 0 rgba(255, 255, 255, 0.05)',
            sm: '0 1px 3px 0 rgba(255, 255, 255, 0.1), 0 1px 2px -1px rgba(255, 255, 255, 0.1)',
            base: '0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -2px rgba(255, 255, 255, 0.1)',
            md: '0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -4px rgba(255, 255, 255, 0.1)',
            lg: '0 20px 25px -5px rgba(255, 255, 255, 0.1), 0 8px 10px -6px rgba(255, 255, 255, 0.1)',
          },
          blur: {
            none: '0',
            sm: '4px',
            base: '8px',
            md: '12px',
            lg: '16px',
            xl: '24px',
            '2xl': '40px',
            '3xl': '64px',
          },
          backdrop: {
            blur: {
              none: 'blur(0)',
              sm: 'blur(4px)',
              base: 'blur(8px)',
              md: 'blur(12px)',
              lg: 'blur(16px)',
              xl: 'blur(24px)',
            },
            brightness: {
              50: 'brightness(0.5)',
              75: 'brightness(0.75)',
              90: 'brightness(0.9)',
              95: 'brightness(0.95)',
              100: 'brightness(1)',
              105: 'brightness(1.05)',
              110: 'brightness(1.1)',
              125: 'brightness(1.25)',
              150: 'brightness(1.5)',
            },
            contrast: {
              50: 'contrast(0.5)',
              75: 'contrast(0.75)',
              100: 'contrast(1)',
              125: 'contrast(1.25)',
              150: 'contrast(1.5)',
              200: 'contrast(2)',
            },
            saturate: {
              0: 'saturate(0)',
              50: 'saturate(0.5)',
              100: 'saturate(1)',
              150: 'saturate(1.5)',
              200: 'saturate(2)',
            },
          },
          gradient: {
            toBr: 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
            toR: 'linear-gradient(to right, var(--tw-gradient-stops))',
            toTr: 'linear-gradient(to top right, var(--tw-gradient-stops))',
            toT: 'linear-gradient(to top, var(--tw-gradient-stops))',
            toTl: 'linear-gradient(to top left, var(--tw-gradient-stops))',
            toL: 'linear-gradient(to left, var(--tw-gradient-stops))',
            toBl: 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
            toB: 'linear-gradient(to bottom, var(--tw-gradient-stops))',
            radial:
              'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
            radialTl:
              'radial-gradient(ellipse at top left, var(--tw-gradient-stops))',
            radialTr:
              'radial-gradient(ellipse at top right, var(--tw-gradient-stops))',
            radialBl:
              'radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))',
            radialBr:
              'radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))',
            conic:
              'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          },
          presetGradients: {
            brand:
              'linear-gradient(135deg, oklch(0.623 0.214 259.815) 0%, oklch(0.707 0.165 254.624) 100%)',
            brandSubtle:
              'linear-gradient(135deg, oklch(0.95 0.05 259.815) 0%, oklch(0.90 0.10 259.815) 100%)',
            success:
              'linear-gradient(135deg, oklch(0.596 0.189 142.495) 0%, oklch(0.52 0.18 142.495) 100%)',
            warning:
              'linear-gradient(135deg, oklch(0.828 0.189 84.429) 0%, oklch(0.769 0.188 70.08) 100%)',
            error:
              'linear-gradient(135deg, oklch(0.577 0.245 27.325) 0%, oklch(0.50 0.22 27.325) 100%)',
            info: 'linear-gradient(135deg, oklch(0.52 0.24 237) 0%, oklch(0.45 0.22 237) 100%)',
            neutral:
              'linear-gradient(135deg, oklch(0.87 0 0) 0%, oklch(0.708 0 0) 100%)',
            dark: 'linear-gradient(135deg, oklch(0.269 0 0) 0%, oklch(0.145 0 0) 100%)',
            sunrise:
              'linear-gradient(135deg, oklch(0.95 0.15 60) 0%, oklch(0.85 0.25 25) 50%, oklch(0.75 0.20 350) 100%)',
            sunset:
              'linear-gradient(135deg, oklch(0.85 0.20 45) 0%, oklch(0.75 0.25 20) 50%, oklch(0.65 0.20 290) 100%)',
            ocean:
              'linear-gradient(135deg, oklch(0.75 0.15 220) 0%, oklch(0.55 0.20 200) 100%)',
            forest:
              'linear-gradient(135deg, oklch(0.65 0.20 140) 0%, oklch(0.45 0.18 120) 100%)',
            lightOverlay:
              'linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)',
            darkOverlay:
              'linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%)',
          },
          textShadow: {
            none: 'none',
            sm: '0 1px 2px rgba(0, 0, 0, 0.25)',
            base: '0 2px 4px rgba(0, 0, 0, 0.25)',
            md: '0 4px 6px rgba(0, 0, 0, 0.25)',
            lg: '0 8px 10px rgba(0, 0, 0, 0.25)',
            xl: '0 12px 16px rgba(0, 0, 0, 0.25)',
          },
          glow: {
            sm: '0 0 10px rgba(99, 102, 241, 0.5)',
            base: '0 0 20px rgba(99, 102, 241, 0.5)',
            md: '0 0 30px rgba(99, 102, 241, 0.5)',
            lg: '0 0 40px rgba(99, 102, 241, 0.5)',
            xl: '0 0 50px rgba(99, 102, 241, 0.5)',
          },
          filter: {
            brightness: {
              0: 'brightness(0)',
              50: 'brightness(0.5)',
              75: 'brightness(0.75)',
              90: 'brightness(0.9)',
              95: 'brightness(0.95)',
              100: 'brightness(1)',
              105: 'brightness(1.05)',
              110: 'brightness(1.1)',
              125: 'brightness(1.25)',
              150: 'brightness(1.5)',
              200: 'brightness(2)',
            },
            contrast: {
              0: 'contrast(0)',
              50: 'contrast(0.5)',
              75: 'contrast(0.75)',
              100: 'contrast(1)',
              125: 'contrast(1.25)',
              150: 'contrast(1.5)',
              200: 'contrast(2)',
            },
            grayscale: { 0: 'grayscale(0)', 100: 'grayscale(1)' },
            hueRotate: {
              0: 'hue-rotate(0deg)',
              15: 'hue-rotate(15deg)',
              30: 'hue-rotate(30deg)',
              60: 'hue-rotate(60deg)',
              90: 'hue-rotate(90deg)',
              180: 'hue-rotate(180deg)',
            },
            invert: { 0: 'invert(0)', 100: 'invert(1)' },
            saturate: {
              0: 'saturate(0)',
              50: 'saturate(0.5)',
              100: 'saturate(1)',
              150: 'saturate(1.5)',
              200: 'saturate(2)',
            },
            sepia: { 0: 'sepia(0)', 100: 'sepia(1)' },
          },
        })
      function cov_yj3h5k3k0() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/design-system/tokens/index.ts',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          '844b50ab7c0cbf0512ce46db2d043f2e6ee9ae1e' === coverage[path].hash) ||
          (coverage[path] = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/design-system/tokens/index.ts',
            statementMap: {
              0: {
                start: { line: 14, column: 22 },
                end: { line: 27, column: 1 },
              },
              1: {
                start: { line: 30, column: 26 },
                end: { line: 30, column: 47 },
              },
              2: {
                start: { line: 31, column: 4 },
                end: { line: 89, column: 6 },
              },
            },
            fnMap: {
              0: {
                name: 'getCSSVariables',
                decl: {
                  start: { line: 29, column: 16 },
                  end: { line: 29, column: 31 },
                },
                loc: {
                  start: { line: 29, column: 49 },
                  end: { line: 90, column: 1 },
                },
                line: 29,
              },
            },
            branchMap: {
              0: {
                loc: {
                  start: { line: 29, column: 32 },
                  end: { line: 29, column: 47 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 29, column: 40 },
                    end: { line: 29, column: 47 },
                  },
                ],
                line: 29,
              },
            },
            s: { 0: 0, 1: 0, 2: 0 },
            f: { 0: 0 },
            b: { 0: [0] },
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/design-system/tokens/index.ts',
              ],
              sourcesContent: [
                "// Notable Design System - Main Token Export\n\nexport * from './colors'\nexport * from './typography'\nexport * from './spacing'\nexport * from './motion'\nexport * from './effects'\n\n// Re-export commonly used tokens for convenience\nimport { colors, semanticColors } from './colors'\nimport { typography } from './typography'\nimport {\n  componentSpacing,\n  iconSize,\n  layout,\n  radius,\n  spacing,\n  zIndex,\n} from './spacing'\nimport { microInteractions, motion } from './motion'\nimport { effects } from './effects'\n\n// Create a unified tokens object\nexport const tokens = {\n  colors,\n  semanticColors,\n  typography,\n  spacing,\n  componentSpacing,\n  layout,\n  iconSize,\n  radius,\n  zIndex,\n  motion,\n  microInteractions,\n  effects,\n} as const\n\n// Utility function to get CSS variables from tokens\nexport function getCSSVariables(theme: 'light' | 'dark' = 'light') {\n  const semanticTheme = semanticColors[theme]\n\n  return {\n    // Color variables\n    '--color-brand-50': colors.brand[50],\n    '--color-brand-100': colors.brand[100],\n    '--color-brand-200': colors.brand[200],\n    '--color-brand-300': colors.brand[300],\n    '--color-brand-400': colors.brand[400],\n    '--color-brand-500': colors.brand[500],\n    '--color-brand-600': colors.brand[600],\n    '--color-brand-700': colors.brand[700],\n    '--color-brand-800': colors.brand[800],\n    '--color-brand-900': colors.brand[900],\n\n    // Semantic colors\n    '--color-background-primary': semanticTheme.background.primary,\n    '--color-background-secondary': semanticTheme.background.secondary,\n    '--color-background-tertiary': semanticTheme.background.tertiary,\n    '--color-background-inverse': semanticTheme.background.inverse,\n\n    '--color-surface-primary': semanticTheme.surface.primary,\n    '--color-surface-secondary': semanticTheme.surface.secondary,\n    '--color-surface-tertiary': semanticTheme.surface.tertiary,\n    '--color-surface-elevated': semanticTheme.surface.elevated,\n\n    '--color-foreground-primary': semanticTheme.foreground.primary,\n    '--color-foreground-secondary': semanticTheme.foreground.secondary,\n    '--color-foreground-tertiary': semanticTheme.foreground.tertiary,\n    '--color-foreground-inverse': semanticTheme.foreground.inverse,\n\n    '--color-border-primary': semanticTheme.border.primary,\n    '--color-border-secondary': semanticTheme.border.secondary,\n    '--color-border-focus': semanticTheme.border.focus,\n\n    // Typography\n    '--font-sans': typography.fontFamily.sans,\n    '--font-serif': typography.fontFamily.serif,\n    '--font-mono': typography.fontFamily.mono,\n\n    // Spacing\n    '--spacing-xs': spacing[2],\n    '--spacing-sm': spacing[4],\n    '--spacing-md': spacing[6],\n    '--spacing-lg': spacing[8],\n    '--spacing-xl': spacing[12],\n\n    // Radius\n    '--radius-sm': radius.sm,\n    '--radius-base': radius.base,\n    '--radius-md': radius.md,\n    '--radius-lg': radius.lg,\n    '--radius-xl': radius.xl,\n    '--radius-2xl': radius['2xl'],\n    '--radius-full': radius.full,\n\n    // Motion\n    '--duration-fast': motion.duration.fast,\n    '--duration-normal': motion.duration.normal,\n    '--duration-slow': motion.duration.slow,\n    '--easing-standard': motion.easing.easeInOut,\n    '--easing-emphasized': motion.easing.easeOutQuart,\n\n    // Effects\n    '--shadow-sm': effects.shadow.sm,\n    '--shadow-base': effects.shadow.base,\n    '--shadow-md': effects.shadow.md,\n    '--shadow-lg': effects.shadow.lg,\n    '--shadow-xl': effects.shadow.xl,\n  }\n}\n\n// Type definitions for design tokens\nexport type Tokens = typeof tokens\nexport type Theme = 'light' | 'dark'\n",
              ],
              names: [
                'colors',
                'semanticColors',
                'typography',
                'componentSpacing',
                'iconSize',
                'layout',
                'radius',
                'spacing',
                'zIndex',
                'microInteractions',
                'motion',
                'effects',
                'tokens',
                'getCSSVariables',
                'theme',
                'semanticTheme',
                'brand',
                'background',
                'primary',
                'secondary',
                'tertiary',
                'inverse',
                'surface',
                'elevated',
                'foreground',
                'border',
                'focus',
                'fontFamily',
                'sans',
                'serif',
                'mono',
                'sm',
                'base',
                'md',
                'lg',
                'xl',
                'full',
                'duration',
                'fast',
                'normal',
                'slow',
                'easing',
                'easeInOut',
                'easeOutQuart',
                'shadow',
              ],
              mappings:
                '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',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: '844b50ab7c0cbf0512ce46db2d043f2e6ee9ae1e',
          })
        var actualCoverage = coverage[path]
        return (
          (cov_yj3h5k3k0 = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      cov_yj3h5k3k0()
      const tokens =
        (cov_yj3h5k3k0().s[0]++,
        {
          colors: tokens_colors.T,
          semanticColors: tokens_colors.Z,
          typography: typography_typography,
          spacing: spacing_spacing,
          componentSpacing,
          layout,
          iconSize,
          radius: spacing_radius,
          zIndex,
          motion: motion_motion,
          microInteractions,
          effects: effects_effects,
        })
    },
  },
])
