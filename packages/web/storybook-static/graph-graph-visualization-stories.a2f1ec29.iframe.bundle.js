'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [4725],
  {
    './components/graph/graph-visualization.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      ;(__webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          AnalyticsPanel: () => AnalyticsPanel,
          ColoringOptions: () => ColoringOptions,
          Default: () => Default,
          DenseNetwork: () => DenseNetwork,
          EmptyGraph: () => EmptyGraph,
          FilterInteraction: () => FilterInteraction,
          KnowledgeBase: () => KnowledgeBase,
          LargeGraph: () => LargeGraph,
          LayoutSwitching: () => LayoutSwitching,
          MobileResponsive: () => MobileResponsive,
          NodeInteraction: () => NodeInteraction,
          ProjectPlanning: () => ProjectPlanning,
          RealTimeData: () => RealTimeData,
          SearchInteraction: () => SearchInteraction,
          SingleNode: () => SingleNode,
          SmallGraph: () => SmallGraph,
          TabletResponsive: () => TabletResponsive,
          ZoomControls: () => ZoomControls,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => graph_visualization_stories,
        }))
      var jsx_runtime = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        react = __webpack_require__(
          '../../node_modules/.pnpm/next@15.2.4_@babel+core@7.28.0_@opentelemetry+api@1.9.0_@playwright+test@1.54.1_react-d_866e0ebb5cad13c7ae73d64ed145106f/node_modules/next/dist/compiled/react/index.js'
        ),
        src = __webpack_require__(
          '../../node_modules/.pnpm/d3@7.9.0/node_modules/d3/src/index.js'
        ),
        components_button = __webpack_require__(
          './design-system/components/button.tsx'
        ),
        card = __webpack_require__('./design-system/components/card.tsx'),
        input = __webpack_require__('./design-system/components/input.tsx'),
        search = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/search.js'
        ),
        chart_column = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chart-column.js'
        ),
        zoom_in = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/zoom-in.js'
        ),
        zoom_out = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/zoom-out.js'
        ),
        rotate_ccw = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js'
        ),
        filter = __webpack_require__(
          '../../node_modules/.pnpm/lucide-react@0.454.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/filter.js'
        )
      function cov_toujfc8tz() {
        var path =
            '/Users/ryota.murakami/repository/Notable/packages/web/components/graph/graph-visualization.tsx',
          global = new Function('return this')(),
          gcv = '__coverage__',
          coverageData = {
            path: '/Users/ryota.murakami/repository/Notable/packages/web/components/graph/graph-visualization.tsx',
            statementMap: {
              0: {
                start: { line: 10, column: 19 },
                end: { line: 10, column: 31 },
              },
              1: {
                start: { line: 11, column: 25 },
                end: { line: 11, column: 37 },
              },
              2: {
                start: { line: 12, column: 40 },
                end: { line: 12, column: 52 },
              },
              3: {
                start: { line: 13, column: 48 },
                end: { line: 13, column: 65 },
              },
              4: {
                start: { line: 14, column: 28 },
                end: { line: 14, column: 39 },
              },
              5: {
                start: { line: 15, column: 50 },
                end: { line: 20, column: 6 },
              },
              6: {
                start: { line: 21, column: 46 },
                end: { line: 21, column: 61 },
              },
              7: {
                start: { line: 22, column: 42 },
                end: { line: 22, column: 65 },
              },
              8: {
                start: { line: 24, column: 29 },
                end: { line: 43, column: 5 },
              },
              9: {
                start: { line: 26, column: 33 },
                end: { line: 26, column: 42 },
              },
              10: {
                start: { line: 27, column: 8 },
                end: { line: 29, column: 11 },
              },
              11: {
                start: { line: 28, column: 12 },
                end: { line: 28, column: 60 },
              },
              12: {
                start: { line: 31, column: 36 },
                end: { line: 33, column: 53 },
              },
              13: {
                start: { line: 33, column: 23 },
                end: { line: 33, column: 52 },
              },
              14: {
                start: { line: 34, column: 29 },
                end: { line: 34, column: 71 },
              },
              15: {
                start: { line: 35, column: 21 },
                end: { line: 35, column: 87 },
              },
              16: {
                start: { line: 35, column: 81 },
                end: { line: 35, column: 85 },
              },
              17: {
                start: { line: 37, column: 25 },
                end: { line: 37, column: 87 },
              },
              18: {
                start: { line: 37, column: 51 },
                end: { line: 37, column: 70 },
              },
              19: {
                start: { line: 37, column: 81 },
                end: { line: 37, column: 85 },
              },
              20: {
                start: { line: 38, column: 8 },
                end: { line: 42, column: 10 },
              },
              21: {
                start: { line: 45, column: 25 },
                end: { line: 76, column: 5 },
              },
              22: {
                start: { line: 46, column: 28 },
                end: { line: 66, column: 10 },
              },
              23: {
                start: { line: 48, column: 12 },
                end: { line: 50, column: 13 },
              },
              24: {
                start: { line: 49, column: 16 },
                end: { line: 49, column: 29 },
              },
              25: {
                start: { line: 52, column: 12 },
                end: { line: 62, column: 13 },
              },
              26: {
                start: { line: 53, column: 33 },
                end: { line: 53, column: 58 },
              },
              27: {
                start: { line: 54, column: 28 },
                end: { line: 54, column: 38 },
              },
              28: {
                start: { line: 55, column: 32 },
                end: { line: 59, column: 49 },
              },
              29: {
                start: { line: 60, column: 35 },
                end: { line: 60, column: 90 },
              },
              30: {
                start: { line: 61, column: 16 },
                end: { line: 61, column: 56 },
              },
              31: {
                start: { line: 61, column: 43 },
                end: { line: 61, column: 56 },
              },
              32: {
                start: { line: 64, column: 12 },
                end: { line: 64, column: 80 },
              },
              33: {
                start: { line: 64, column: 67 },
                end: { line: 64, column: 80 },
              },
              34: {
                start: { line: 65, column: 12 },
                end: { line: 65, column: 24 },
              },
              35: {
                start: { line: 67, column: 35 },
                end: { line: 67, column: 65 },
              },
              36: {
                start: { line: 69, column: 8 },
                end: { line: 71, column: 9 },
              },
              37: {
                start: { line: 70, column: 12 },
                end: { line: 70, column: 77 },
              },
              38: {
                start: { line: 70, column: 57 },
                end: { line: 70, column: 75 },
              },
              39: {
                start: { line: 72, column: 8 },
                end: { line: 74, column: 9 },
              },
              40: {
                start: { line: 73, column: 12 },
                end: { line: 73, column: 81 },
              },
              41: {
                start: { line: 73, column: 57 },
                end: { line: 73, column: 79 },
              },
              42: {
                start: { line: 75, column: 8 },
                end: { line: 75, column: 29 },
              },
              43: {
                start: { line: 77, column: 4 },
                end: { line: 258, column: 7 },
              },
              44: {
                start: { line: 78, column: 8 },
                end: { line: 78, column: 58 },
              },
              45: {
                start: { line: 78, column: 51 },
                end: { line: 78, column: 58 },
              },
              46: {
                start: { line: 79, column: 20 },
                end: { line: 79, column: 45 },
              },
              47: {
                start: { line: 80, column: 26 },
                end: { line: 80, column: 46 },
              },
              48: {
                start: { line: 81, column: 8 },
                end: { line: 81, column: 31 },
              },
              49: {
                start: { line: 81, column: 24 },
                end: { line: 81, column: 31 },
              },
              50: {
                start: { line: 82, column: 22 },
                end: { line: 82, column: 43 },
              },
              51: {
                start: { line: 83, column: 23 },
                end: { line: 83, column: 45 },
              },
              52: {
                start: { line: 85, column: 8 },
                end: { line: 85, column: 36 },
              },
              53: {
                start: { line: 87, column: 29 },
                end: { line: 93, column: 10 },
              },
              54: {
                start: { line: 91, column: 12 },
                end: { line: 91, column: 49 },
              },
              55: {
                start: { line: 92, column: 12 },
                end: { line: 92, column: 39 },
              },
              56: {
                start: { line: 94, column: 8 },
                end: { line: 94, column: 31 },
              },
              57: {
                start: { line: 96, column: 18 },
                end: { line: 96, column: 33 },
              },
              58: {
                start: { line: 98, column: 30 },
                end: { line: 98, column: 66 },
              },
              59: {
                start: { line: 99, column: 53 },
                end: { line: 99, column: 93 },
              },
              60: {
                start: { line: 100, column: 32 },
                end: { line: 100, column: 75 },
              },
              61: {
                start: { line: 100, column: 66 },
                end: { line: 100, column: 73 },
              },
              62: {
                start: { line: 101, column: 30 },
                end: { line: 101, column: 119 },
              },
              63: {
                start: { line: 101, column: 56 },
                end: { line: 101, column: 118 },
              },
              64: {
                start: { line: 103, column: 27 },
                end: { line: 103, column: 60 },
              },
              65: {
                start: { line: 105, column: 8 },
                end: { line: 151, column: 9 },
              },
              66: {
                start: { line: 107, column: 16 },
                end: { line: 107, column: 253 },
              },
              67: {
                start: { line: 107, column: 77 },
                end: { line: 107, column: 81 },
              },
              68: {
                start: { line: 108, column: 16 },
                end: { line: 108, column: 22 },
              },
              69: {
                start: { line: 110, column: 31 },
                end: { line: 110, column: 58 },
              },
              70: {
                start: { line: 111, column: 16 },
                end: { line: 115, column: 19 },
              },
              71: {
                start: { line: 112, column: 34 },
                end: { line: 112, column: 72 },
              },
              72: {
                start: { line: 113, column: 20 },
                end: { line: 113, column: 67 },
              },
              73: {
                start: { line: 114, column: 20 },
                end: { line: 114, column: 68 },
              },
              74: {
                start: { line: 116, column: 16 },
                end: { line: 116, column: 22 },
              },
              75: {
                start: { line: 119, column: 31 },
                end: { line: 119, column: 73 },
              },
              76: {
                start: { line: 120, column: 16 },
                end: { line: 120, column: 74 },
              },
              77: {
                start: { line: 120, column: 43 },
                end: { line: 120, column: 72 },
              },
              78: {
                start: { line: 121, column: 16 },
                end: { line: 126, column: 19 },
              },
              79: {
                start: { line: 122, column: 34 },
                end: { line: 122, column: 56 },
              },
              80: {
                start: { line: 123, column: 39 },
                end: { line: 123, column: 49 },
              },
              81: {
                start: { line: 124, column: 20 },
                end: { line: 124, column: 70 },
              },
              82: {
                start: { line: 125, column: 20 },
                end: { line: 125, column: 100 },
              },
              83: {
                start: { line: 127, column: 16 },
                end: { line: 127, column: 22 },
              },
              84: {
                start: { line: 130, column: 36 },
                end: { line: 132, column: 45 },
              },
              85: {
                start: { line: 132, column: 30 },
                end: { line: 132, column: 44 },
              },
              86: {
                start: { line: 133, column: 39 },
                end: { line: 135, column: 46 },
              },
              87: {
                start: { line: 135, column: 30 },
                end: { line: 135, column: 45 },
              },
              88: {
                start: { line: 137, column: 16 },
                end: { line: 142, column: 19 },
              },
              89: {
                start: { line: 138, column: 34 },
                end: { line: 138, column: 70 },
              },
              90: {
                start: { line: 139, column: 40 },
                end: { line: 139, column: 42 },
              },
              91: {
                start: { line: 140, column: 20 },
                end: { line: 140, column: 72 },
              },
              92: {
                start: { line: 141, column: 20 },
                end: { line: 141, column: 73 },
              },
              93: {
                start: { line: 144, column: 16 },
                end: { line: 149, column: 19 },
              },
              94: {
                start: { line: 145, column: 34 },
                end: { line: 145, column: 73 },
              },
              95: {
                start: { line: 146, column: 40 },
                end: { line: 146, column: 67 },
              },
              96: {
                start: { line: 147, column: 20 },
                end: { line: 147, column: 72 },
              },
              97: {
                start: { line: 148, column: 20 },
                end: { line: 148, column: 73 },
              },
              98: {
                start: { line: 150, column: 16 },
                end: { line: 150, column: 22 },
              },
              99: {
                start: { line: 153, column: 21 },
                end: { line: 153, column: 196 },
              },
              100: {
                start: { line: 155, column: 21 },
                end: { line: 155, column: 243 },
              },
              101: {
                start: { line: 157, column: 8 },
                end: { line: 184, column: 61 },
              },
              102: {
                start: { line: 158, column: 29 },
                end: { line: 158, column: 77 },
              },
              103: {
                start: { line: 159, column: 12 },
                end: { line: 159, column: 84 },
              },
              104: {
                start: { line: 161, column: 12 },
                end: { line: 179, column: 13 },
              },
              105: {
                start: { line: 163, column: 48 },
                end: { line: 163, column: 79 },
              },
              106: {
                start: { line: 164, column: 20 },
                end: { line: 164, column: 109 },
              },
              107: {
                start: { line: 166, column: 36 },
                end: { line: 166, column: 81 },
              },
              108: {
                start: { line: 167, column: 35 },
                end: { line: 167, column: 60 },
              },
              109: {
                start: { line: 169, column: 37 },
                end: { line: 169, column: 66 },
              },
              110: {
                start: { line: 170, column: 20 },
                end: { line: 170, column: 67 },
              },
              111: {
                start: { line: 173, column: 20 },
                end: { line: 174, column: 21 },
              },
              112: {
                start: { line: 173, column: 40 },
                end: { line: 174, column: 21 },
              },
              113: {
                start: { line: 175, column: 20 },
                end: { line: 176, column: 21 },
              },
              114: {
                start: { line: 175, column: 44 },
                end: { line: 176, column: 21 },
              },
              115: {
                start: { line: 177, column: 32 },
                end: { line: 177, column: 74 },
              },
              116: {
                start: { line: 178, column: 20 },
                end: { line: 178, column: 51 },
              },
              117: {
                start: { line: 181, column: 12 },
                end: { line: 181, column: 49 },
              },
              118: {
                start: { line: 181, column: 32 },
                end: { line: 181, column: 49 },
              },
              119: {
                start: { line: 182, column: 12 },
                end: { line: 182, column: 53 },
              },
              120: {
                start: { line: 182, column: 36 },
                end: { line: 182, column: 53 },
              },
              121: {
                start: { line: 183, column: 12 },
                end: { line: 183, column: 26 },
              },
              122: {
                start: { line: 184, column: 37 },
                end: { line: 184, column: 59 },
              },
              123: {
                start: { line: 186, column: 8 },
                end: { line: 186, column: 296 },
              },
              124: {
                start: { line: 186, column: 38 },
                end: { line: 186, column: 102 },
              },
              125: {
                start: { line: 188, column: 8 },
                end: { line: 209, column: 11 },
              },
              126: {
                start: { line: 189, column: 12 },
                end: { line: 189, column: 160 },
              },
              127: {
                start: { line: 191, column: 28 },
                end: { line: 198, column: 89 },
              },
              128: {
                start: { line: 200, column: 12 },
                end: { line: 203, column: 39 },
              },
              129: {
                start: { line: 201, column: 33 },
                end: { line: 201, column: 81 },
              },
              130: {
                start: { line: 202, column: 16 },
                end: { line: 202, column: 88 },
              },
              131: {
                start: { line: 205, column: 12 },
                end: { line: 205, column: 52 },
              },
              132: {
                start: { line: 207, column: 12 },
                end: { line: 207, column: 36 },
              },
              133: {
                start: { line: 208, column: 12 },
                end: { line: 208, column: 88 },
              },
              134: {
                start: { line: 211, column: 8 },
                end: { line: 229, column: 11 },
              },
              135: {
                start: { line: 212, column: 12 },
                end: { line: 224, column: 15 },
              },
              136: {
                start: { line: 214, column: 16 },
                end: { line: 214, column: 103 },
              },
              137: {
                start: { line: 217, column: 16 },
                end: { line: 217, column: 103 },
              },
              138: {
                start: { line: 220, column: 16 },
                end: { line: 220, column: 103 },
              },
              139: {
                start: { line: 223, column: 16 },
                end: { line: 223, column: 103 },
              },
              140: {
                start: { line: 225, column: 12 },
                end: { line: 228, column: 15 },
              },
              141: {
                start: { line: 227, column: 16 },
                end: { line: 227, column: 146 },
              },
              142: {
                start: { line: 232, column: 12 },
                end: { line: 232, column: 69 },
              },
              143: {
                start: { line: 232, column: 31 },
                end: { line: 232, column: 69 },
              },
              144: {
                start: { line: 233, column: 12 },
                end: { line: 233, column: 47 },
              },
              145: {
                start: { line: 234, column: 12 },
                end: { line: 234, column: 47 },
              },
              146: {
                start: { line: 237, column: 12 },
                end: { line: 237, column: 39 },
              },
              147: {
                start: { line: 238, column: 12 },
                end: { line: 238, column: 39 },
              },
              148: {
                start: { line: 241, column: 12 },
                end: { line: 241, column: 57 },
              },
              149: {
                start: { line: 241, column: 31 },
                end: { line: 241, column: 57 },
              },
              150: {
                start: { line: 242, column: 12 },
                end: { line: 245, column: 13 },
              },
              151: {
                start: { line: 243, column: 16 },
                end: { line: 243, column: 40 },
              },
              152: {
                start: { line: 244, column: 16 },
                end: { line: 244, column: 40 },
              },
              153: {
                start: { line: 248, column: 8 },
                end: { line: 251, column: 10 },
              },
              154: {
                start: { line: 249, column: 12 },
                end: { line: 249, column: 30 },
              },
              155: {
                start: { line: 250, column: 12 },
                end: { line: 250, column: 52 },
              },
              156: {
                start: { line: 259, column: 25 },
                end: { line: 264, column: 5 },
              },
              157: {
                start: { line: 260, column: 8 },
                end: { line: 263, column: 9 },
              },
              158: {
                start: { line: 261, column: 24 },
                end: { line: 261, column: 49 },
              },
              159: {
                start: { line: 262, column: 12 },
                end: { line: 262, column: 58 },
              },
              160: {
                start: { line: 265, column: 26 },
                end: { line: 270, column: 5 },
              },
              161: {
                start: { line: 266, column: 8 },
                end: { line: 269, column: 9 },
              },
              162: {
                start: { line: 267, column: 24 },
                end: { line: 267, column: 49 },
              },
              163: {
                start: { line: 268, column: 12 },
                end: { line: 268, column: 62 },
              },
              164: {
                start: { line: 271, column: 24 },
                end: { line: 276, column: 5 },
              },
              165: {
                start: { line: 272, column: 8 },
                end: { line: 275, column: 9 },
              },
              166: {
                start: { line: 273, column: 24 },
                end: { line: 273, column: 49 },
              },
              167: {
                start: { line: 274, column: 12 },
                end: { line: 274, column: 72 },
              },
              168: {
                start: { line: 277, column: 22 },
                end: { line: 277, column: 62 },
              },
              169: {
                start: { line: 278, column: 30 },
                end: { line: 278, column: 96 },
              },
              170: {
                start: { line: 279, column: 4 },
                end: { line: 584, column: 7 },
              },
              171: {
                start: { line: 297, column: 55 },
                end: { line: 297, column: 84 },
              },
              172: {
                start: { line: 304, column: 47 },
                end: { line: 304, column: 80 },
              },
              173: {
                start: { line: 327, column: 47 },
                end: { line: 327, column: 77 },
              },
              174: {
                start: { line: 347, column: 45 },
                end: { line: 347, column: 77 },
              },
              175: {
                start: { line: 398, column: 55 },
                end: { line: 401, column: 51 },
              },
              176: {
                start: { line: 398, column: 83 },
                end: { line: 401, column: 49 },
              },
              177: {
                start: { line: 436, column: 55 },
                end: { line: 439, column: 51 },
              },
              178: {
                start: { line: 436, column: 83 },
                end: { line: 439, column: 49 },
              },
              179: {
                start: { line: 454, column: 55 },
                end: { line: 457, column: 51 },
              },
              180: {
                start: { line: 454, column: 83 },
                end: { line: 457, column: 49 },
              },
              181: {
                start: { line: 468, column: 55 },
                end: { line: 471, column: 51 },
              },
              182: {
                start: { line: 468, column: 83 },
                end: { line: 471, column: 49 },
              },
              183: {
                start: { line: 586, column: 0 },
                end: { line: 632, column: 2 },
              },
            },
            fnMap: {
              0: {
                name: 'GraphVisualization',
                decl: {
                  start: { line: 9, column: 16 },
                  end: { line: 9, column: 34 },
                },
                loc: {
                  start: { line: 9, column: 74 },
                  end: { line: 585, column: 1 },
                },
                line: 9,
              },
              1: {
                name: '(anonymous_1)',
                decl: {
                  start: { line: 24, column: 29 },
                  end: { line: 24, column: 30 },
                },
                loc: {
                  start: { line: 24, column: 45 },
                  end: { line: 43, column: 5 },
                },
                line: 24,
              },
              2: {
                name: '(anonymous_2)',
                decl: {
                  start: { line: 27, column: 22 },
                  end: { line: 27, column: 23 },
                },
                loc: {
                  start: { line: 27, column: 30 },
                  end: { line: 29, column: 9 },
                },
                line: 27,
              },
              3: {
                name: '(anonymous_3)',
                decl: {
                  start: { line: 33, column: 15 },
                  end: { line: 33, column: 16 },
                },
                loc: {
                  start: { line: 33, column: 23 },
                  end: { line: 33, column: 52 },
                },
                line: 33,
              },
              4: {
                name: '(anonymous_4)',
                decl: {
                  start: { line: 35, column: 76 },
                  end: { line: 35, column: 77 },
                },
                loc: {
                  start: { line: 35, column: 81 },
                  end: { line: 35, column: 85 },
                },
                line: 35,
              },
              5: {
                name: '(anonymous_5)',
                decl: {
                  start: { line: 37, column: 46 },
                  end: { line: 37, column: 47 },
                },
                loc: {
                  start: { line: 37, column: 51 },
                  end: { line: 37, column: 70 },
                },
                line: 37,
              },
              6: {
                name: '(anonymous_6)',
                decl: {
                  start: { line: 37, column: 76 },
                  end: { line: 37, column: 77 },
                },
                loc: {
                  start: { line: 37, column: 81 },
                  end: { line: 37, column: 85 },
                },
                line: 37,
              },
              7: {
                name: '(anonymous_7)',
                decl: {
                  start: { line: 45, column: 25 },
                  end: { line: 45, column: 26 },
                },
                loc: {
                  start: { line: 45, column: 41 },
                  end: { line: 76, column: 5 },
                },
                line: 45,
              },
              8: {
                name: '(anonymous_8)',
                decl: {
                  start: { line: 46, column: 41 },
                  end: { line: 46, column: 42 },
                },
                loc: {
                  start: { line: 46, column: 49 },
                  end: { line: 66, column: 9 },
                },
                line: 46,
              },
              9: {
                name: '(anonymous_9)',
                decl: {
                  start: { line: 70, column: 49 },
                  end: { line: 70, column: 50 },
                },
                loc: {
                  start: { line: 70, column: 57 },
                  end: { line: 70, column: 75 },
                },
                line: 70,
              },
              10: {
                name: '(anonymous_10)',
                decl: {
                  start: { line: 73, column: 49 },
                  end: { line: 73, column: 50 },
                },
                loc: {
                  start: { line: 73, column: 57 },
                  end: { line: 73, column: 79 },
                },
                line: 73,
              },
              11: {
                name: '(anonymous_11)',
                decl: {
                  start: { line: 77, column: 14 },
                  end: { line: 77, column: 15 },
                },
                loc: {
                  start: { line: 77, column: 18 },
                  end: { line: 252, column: 5 },
                },
                line: 77,
              },
              12: {
                name: '(anonymous_12)',
                decl: {
                  start: { line: 90, column: 22 },
                  end: { line: 90, column: 23 },
                },
                loc: {
                  start: { line: 90, column: 31 },
                  end: { line: 93, column: 9 },
                },
                line: 90,
              },
              13: {
                name: '(anonymous_13)',
                decl: {
                  start: { line: 100, column: 58 },
                  end: { line: 100, column: 59 },
                },
                loc: {
                  start: { line: 100, column: 66 },
                  end: { line: 100, column: 73 },
                },
                line: 100,
              },
              14: {
                name: '(anonymous_14)',
                decl: {
                  start: { line: 101, column: 48 },
                  end: { line: 101, column: 49 },
                },
                loc: {
                  start: { line: 101, column: 56 },
                  end: { line: 101, column: 118 },
                },
                line: 101,
              },
              15: {
                name: '(anonymous_15)',
                decl: {
                  start: { line: 107, column: 72 },
                  end: { line: 107, column: 73 },
                },
                loc: {
                  start: { line: 107, column: 77 },
                  end: { line: 107, column: 81 },
                },
                line: 107,
              },
              16: {
                name: '(anonymous_16)',
                decl: {
                  start: { line: 111, column: 38 },
                  end: { line: 111, column: 39 },
                },
                loc: {
                  start: { line: 111, column: 49 },
                  end: { line: 115, column: 17 },
                },
                line: 111,
              },
              17: {
                name: '(anonymous_17)',
                decl: {
                  start: { line: 120, column: 35 },
                  end: { line: 120, column: 36 },
                },
                loc: {
                  start: { line: 120, column: 43 },
                  end: { line: 120, column: 72 },
                },
                line: 120,
              },
              18: {
                name: '(anonymous_18)',
                decl: {
                  start: { line: 121, column: 38 },
                  end: { line: 121, column: 39 },
                },
                loc: {
                  start: { line: 121, column: 49 },
                  end: { line: 126, column: 17 },
                },
                line: 121,
              },
              19: {
                name: '(anonymous_19)',
                decl: {
                  start: { line: 132, column: 25 },
                  end: { line: 132, column: 26 },
                },
                loc: {
                  start: { line: 132, column: 30 },
                  end: { line: 132, column: 44 },
                },
                line: 132,
              },
              20: {
                name: '(anonymous_20)',
                decl: {
                  start: { line: 135, column: 25 },
                  end: { line: 135, column: 26 },
                },
                loc: {
                  start: { line: 135, column: 30 },
                  end: { line: 135, column: 45 },
                },
                line: 135,
              },
              21: {
                name: '(anonymous_21)',
                decl: {
                  start: { line: 137, column: 36 },
                  end: { line: 137, column: 37 },
                },
                loc: {
                  start: { line: 137, column: 47 },
                  end: { line: 142, column: 17 },
                },
                line: 137,
              },
              22: {
                name: '(anonymous_22)',
                decl: {
                  start: { line: 144, column: 39 },
                  end: { line: 144, column: 40 },
                },
                loc: {
                  start: { line: 144, column: 50 },
                  end: { line: 149, column: 17 },
                },
                line: 144,
              },
              23: {
                name: '(anonymous_23)',
                decl: {
                  start: { line: 157, column: 40 },
                  end: { line: 157, column: 41 },
                },
                loc: {
                  start: { line: 157, column: 45 },
                  end: { line: 160, column: 9 },
                },
                line: 157,
              },
              24: {
                name: '(anonymous_24)',
                decl: {
                  start: { line: 160, column: 24 },
                  end: { line: 160, column: 25 },
                },
                loc: {
                  start: { line: 160, column: 29 },
                  end: { line: 180, column: 9 },
                },
                line: 160,
              },
              25: {
                name: '(anonymous_25)',
                decl: {
                  start: { line: 180, column: 26 },
                  end: { line: 180, column: 27 },
                },
                loc: {
                  start: { line: 180, column: 31 },
                  end: { line: 184, column: 9 },
                },
                line: 180,
              },
              26: {
                name: '(anonymous_26)',
                decl: {
                  start: { line: 184, column: 32 },
                  end: { line: 184, column: 33 },
                },
                loc: {
                  start: { line: 184, column: 37 },
                  end: { line: 184, column: 59 },
                },
                line: 184,
              },
              27: {
                name: '(anonymous_27)',
                decl: {
                  start: { line: 186, column: 33 },
                  end: { line: 186, column: 34 },
                },
                loc: {
                  start: { line: 186, column: 38 },
                  end: { line: 186, column: 102 },
                },
                line: 186,
              },
              28: {
                name: '(anonymous_28)',
                decl: {
                  start: { line: 188, column: 29 },
                  end: { line: 188, column: 30 },
                },
                loc: {
                  start: { line: 188, column: 48 },
                  end: { line: 199, column: 9 },
                },
                line: 188,
              },
              29: {
                name: '(anonymous_29)',
                decl: {
                  start: { line: 199, column: 26 },
                  end: { line: 199, column: 27 },
                },
                loc: {
                  start: { line: 199, column: 45 },
                  end: { line: 206, column: 9 },
                },
                line: 199,
              },
              30: {
                name: '(anonymous_30)',
                decl: {
                  start: { line: 200, column: 82 },
                  end: { line: 200, column: 83 },
                },
                loc: {
                  start: { line: 200, column: 87 },
                  end: { line: 203, column: 13 },
                },
                line: 200,
              },
              31: {
                name: '(anonymous_31)',
                decl: {
                  start: { line: 206, column: 23 },
                  end: { line: 206, column: 24 },
                },
                loc: {
                  start: { line: 206, column: 42 },
                  end: { line: 209, column: 9 },
                },
                line: 206,
              },
              32: {
                name: '(anonymous_32)',
                decl: {
                  start: { line: 211, column: 30 },
                  end: { line: 211, column: 31 },
                },
                loc: {
                  start: { line: 211, column: 34 },
                  end: { line: 229, column: 9 },
                },
                line: 211,
              },
              33: {
                name: '(anonymous_33)',
                decl: {
                  start: { line: 212, column: 28 },
                  end: { line: 212, column: 29 },
                },
                loc: {
                  start: { line: 212, column: 33 },
                  end: { line: 215, column: 13 },
                },
                line: 212,
              },
              34: {
                name: '(anonymous_34)',
                decl: {
                  start: { line: 215, column: 26 },
                  end: { line: 215, column: 27 },
                },
                loc: {
                  start: { line: 215, column: 31 },
                  end: { line: 218, column: 13 },
                },
                line: 215,
              },
              35: {
                name: '(anonymous_35)',
                decl: {
                  start: { line: 218, column: 26 },
                  end: { line: 218, column: 27 },
                },
                loc: {
                  start: { line: 218, column: 31 },
                  end: { line: 221, column: 13 },
                },
                line: 218,
              },
              36: {
                name: '(anonymous_36)',
                decl: {
                  start: { line: 221, column: 26 },
                  end: { line: 221, column: 27 },
                },
                loc: {
                  start: { line: 221, column: 31 },
                  end: { line: 224, column: 13 },
                },
                line: 221,
              },
              37: {
                name: '(anonymous_37)',
                decl: {
                  start: { line: 225, column: 35 },
                  end: { line: 225, column: 36 },
                },
                loc: {
                  start: { line: 225, column: 40 },
                  end: { line: 228, column: 13 },
                },
                line: 225,
              },
              38: {
                name: 'dragstarted',
                decl: {
                  start: { line: 231, column: 17 },
                  end: { line: 231, column: 28 },
                },
                loc: {
                  start: { line: 231, column: 36 },
                  end: { line: 235, column: 9 },
                },
                line: 231,
              },
              39: {
                name: 'dragged',
                decl: {
                  start: { line: 236, column: 17 },
                  end: { line: 236, column: 24 },
                },
                loc: {
                  start: { line: 236, column: 32 },
                  end: { line: 239, column: 9 },
                },
                line: 236,
              },
              40: {
                name: 'dragended',
                decl: {
                  start: { line: 240, column: 17 },
                  end: { line: 240, column: 26 },
                },
                loc: {
                  start: { line: 240, column: 34 },
                  end: { line: 246, column: 9 },
                },
                line: 240,
              },
              41: {
                name: '(anonymous_41)',
                decl: {
                  start: { line: 248, column: 15 },
                  end: { line: 248, column: 16 },
                },
                loc: {
                  start: { line: 248, column: 19 },
                  end: { line: 251, column: 9 },
                },
                line: 248,
              },
              42: {
                name: '(anonymous_42)',
                decl: {
                  start: { line: 259, column: 25 },
                  end: { line: 259, column: 26 },
                },
                loc: {
                  start: { line: 259, column: 29 },
                  end: { line: 264, column: 5 },
                },
                line: 259,
              },
              43: {
                name: '(anonymous_43)',
                decl: {
                  start: { line: 265, column: 26 },
                  end: { line: 265, column: 27 },
                },
                loc: {
                  start: { line: 265, column: 30 },
                  end: { line: 270, column: 5 },
                },
                line: 265,
              },
              44: {
                name: '(anonymous_44)',
                decl: {
                  start: { line: 271, column: 24 },
                  end: { line: 271, column: 25 },
                },
                loc: {
                  start: { line: 271, column: 28 },
                  end: { line: 276, column: 5 },
                },
                line: 271,
              },
              45: {
                name: '(anonymous_45)',
                decl: {
                  start: { line: 297, column: 50 },
                  end: { line: 297, column: 51 },
                },
                loc: {
                  start: { line: 297, column: 55 },
                  end: { line: 297, column: 84 },
                },
                line: 297,
              },
              46: {
                name: '(anonymous_46)',
                decl: {
                  start: { line: 304, column: 42 },
                  end: { line: 304, column: 43 },
                },
                loc: {
                  start: { line: 304, column: 47 },
                  end: { line: 304, column: 80 },
                },
                line: 304,
              },
              47: {
                name: '(anonymous_47)',
                decl: {
                  start: { line: 327, column: 42 },
                  end: { line: 327, column: 43 },
                },
                loc: {
                  start: { line: 327, column: 47 },
                  end: { line: 327, column: 77 },
                },
                line: 327,
              },
              48: {
                name: '(anonymous_48)',
                decl: {
                  start: { line: 347, column: 41 },
                  end: { line: 347, column: 42 },
                },
                loc: {
                  start: { line: 347, column: 45 },
                  end: { line: 347, column: 77 },
                },
                line: 347,
              },
              49: {
                name: '(anonymous_49)',
                decl: {
                  start: { line: 398, column: 50 },
                  end: { line: 398, column: 51 },
                },
                loc: {
                  start: { line: 398, column: 55 },
                  end: { line: 401, column: 51 },
                },
                line: 398,
              },
              50: {
                name: '(anonymous_50)',
                decl: {
                  start: { line: 398, column: 74 },
                  end: { line: 398, column: 75 },
                },
                loc: {
                  start: { line: 398, column: 83 },
                  end: { line: 401, column: 49 },
                },
                line: 398,
              },
              51: {
                name: '(anonymous_51)',
                decl: {
                  start: { line: 436, column: 50 },
                  end: { line: 436, column: 51 },
                },
                loc: {
                  start: { line: 436, column: 55 },
                  end: { line: 439, column: 51 },
                },
                line: 436,
              },
              52: {
                name: '(anonymous_52)',
                decl: {
                  start: { line: 436, column: 74 },
                  end: { line: 436, column: 75 },
                },
                loc: {
                  start: { line: 436, column: 83 },
                  end: { line: 439, column: 49 },
                },
                line: 436,
              },
              53: {
                name: '(anonymous_53)',
                decl: {
                  start: { line: 454, column: 50 },
                  end: { line: 454, column: 51 },
                },
                loc: {
                  start: { line: 454, column: 55 },
                  end: { line: 457, column: 51 },
                },
                line: 454,
              },
              54: {
                name: '(anonymous_54)',
                decl: {
                  start: { line: 454, column: 74 },
                  end: { line: 454, column: 75 },
                },
                loc: {
                  start: { line: 454, column: 83 },
                  end: { line: 457, column: 49 },
                },
                line: 454,
              },
              55: {
                name: '(anonymous_55)',
                decl: {
                  start: { line: 468, column: 50 },
                  end: { line: 468, column: 51 },
                },
                loc: {
                  start: { line: 468, column: 55 },
                  end: { line: 471, column: 51 },
                },
                line: 468,
              },
              56: {
                name: '(anonymous_56)',
                decl: {
                  start: { line: 468, column: 74 },
                  end: { line: 468, column: 75 },
                },
                loc: {
                  start: { line: 468, column: 83 },
                  end: { line: 471, column: 49 },
                },
                line: 468,
              },
            },
            branchMap: {
              0: {
                loc: {
                  start: { line: 9, column: 56 },
                  end: { line: 9, column: 70 },
                },
                type: 'default-arg',
                locations: [
                  {
                    start: { line: 9, column: 68 },
                    end: { line: 9, column: 70 },
                  },
                ],
                line: 9,
              },
              1: {
                loc: {
                  start: { line: 48, column: 12 },
                  end: { line: 50, column: 13 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 48, column: 12 },
                    end: { line: 50, column: 13 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 48,
              },
              2: {
                loc: {
                  start: { line: 48, column: 16 },
                  end: { line: 48, column: 90 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 48, column: 16 },
                    end: { line: 48, column: 26 },
                  },
                  {
                    start: { line: 48, column: 30 },
                    end: { line: 48, column: 90 },
                  },
                ],
                line: 48,
              },
              3: {
                loc: {
                  start: { line: 52, column: 12 },
                  end: { line: 62, column: 13 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 52, column: 12 },
                    end: { line: 62, column: 13 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 52,
              },
              4: {
                loc: {
                  start: { line: 55, column: 32 },
                  end: { line: 59, column: 49 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 55, column: 32 },
                    end: { line: 59, column: 44 },
                  },
                  {
                    start: { line: 59, column: 48 },
                    end: { line: 59, column: 49 },
                  },
                ],
                line: 55,
              },
              5: {
                loc: {
                  start: { line: 61, column: 16 },
                  end: { line: 61, column: 56 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 61, column: 16 },
                    end: { line: 61, column: 56 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 61,
              },
              6: {
                loc: {
                  start: { line: 64, column: 12 },
                  end: { line: 64, column: 80 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 64, column: 12 },
                    end: { line: 64, column: 80 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 64,
              },
              7: {
                loc: {
                  start: { line: 69, column: 8 },
                  end: { line: 71, column: 9 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 69, column: 8 },
                    end: { line: 71, column: 9 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 69,
              },
              8: {
                loc: {
                  start: { line: 72, column: 8 },
                  end: { line: 74, column: 9 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 72, column: 8 },
                    end: { line: 74, column: 9 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 72,
              },
              9: {
                loc: {
                  start: { line: 78, column: 8 },
                  end: { line: 78, column: 58 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 78, column: 8 },
                    end: { line: 78, column: 58 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 78,
              },
              10: {
                loc: {
                  start: { line: 78, column: 12 },
                  end: { line: 78, column: 49 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 78, column: 12 },
                    end: { line: 78, column: 27 },
                  },
                  {
                    start: { line: 78, column: 31 },
                    end: { line: 78, column: 49 },
                  },
                ],
                line: 78,
              },
              11: {
                loc: {
                  start: { line: 81, column: 8 },
                  end: { line: 81, column: 31 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 81, column: 8 },
                    end: { line: 81, column: 31 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 81,
              },
              12: {
                loc: {
                  start: { line: 101, column: 56 },
                  end: { line: 101, column: 118 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 101, column: 56 },
                    end: { line: 101, column: 86 },
                  },
                  {
                    start: { line: 101, column: 90 },
                    end: { line: 101, column: 118 },
                  },
                ],
                line: 101,
              },
              13: {
                loc: {
                  start: { line: 105, column: 8 },
                  end: { line: 151, column: 9 },
                },
                type: 'switch',
                locations: [
                  {
                    start: { line: 106, column: 12 },
                    end: { line: 108, column: 22 },
                  },
                  {
                    start: { line: 109, column: 12 },
                    end: { line: 116, column: 22 },
                  },
                  {
                    start: { line: 117, column: 12 },
                    end: { line: 127, column: 22 },
                  },
                  {
                    start: { line: 128, column: 12 },
                    end: { line: 150, column: 22 },
                  },
                ],
                line: 105,
              },
              14: {
                loc: {
                  start: { line: 158, column: 29 },
                  end: { line: 158, column: 77 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 158, column: 46 },
                    end: { line: 158, column: 48 },
                  },
                  {
                    start: { line: 158, column: 51 },
                    end: { line: 158, column: 77 },
                  },
                ],
                line: 158,
              },
              15: {
                loc: {
                  start: { line: 158, column: 51 },
                  end: { line: 158, column: 77 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 158, column: 72 },
                    end: { line: 158, column: 73 },
                  },
                  {
                    start: { line: 158, column: 76 },
                    end: { line: 158, column: 77 },
                  },
                ],
                line: 158,
              },
              16: {
                loc: {
                  start: { line: 161, column: 12 },
                  end: { line: 179, column: 13 },
                },
                type: 'switch',
                locations: [
                  {
                    start: { line: 162, column: 16 },
                    end: { line: 164, column: 109 },
                  },
                  {
                    start: { line: 165, column: 16 },
                    end: { line: 170, column: 67 },
                  },
                  {
                    start: { line: 171, column: 16 },
                    end: { line: 171, column: 31 },
                  },
                  {
                    start: { line: 172, column: 16 },
                    end: { line: 178, column: 51 },
                  },
                ],
                line: 161,
              },
              17: {
                loc: {
                  start: { line: 173, column: 20 },
                  end: { line: 174, column: 21 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 173, column: 20 },
                    end: { line: 174, column: 21 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 173,
              },
              18: {
                loc: {
                  start: { line: 175, column: 20 },
                  end: { line: 176, column: 21 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 175, column: 20 },
                    end: { line: 176, column: 21 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 175,
              },
              19: {
                loc: {
                  start: { line: 181, column: 12 },
                  end: { line: 181, column: 49 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 181, column: 12 },
                    end: { line: 181, column: 49 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 181,
              },
              20: {
                loc: {
                  start: { line: 182, column: 12 },
                  end: { line: 182, column: 53 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 182, column: 12 },
                    end: { line: 182, column: 53 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 182,
              },
              21: {
                loc: {
                  start: { line: 184, column: 37 },
                  end: { line: 184, column: 59 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 184, column: 54 },
                    end: { line: 184, column: 55 },
                  },
                  {
                    start: { line: 184, column: 58 },
                    end: { line: 184, column: 59 },
                  },
                ],
                line: 184,
              },
              22: {
                loc: {
                  start: { line: 186, column: 38 },
                  end: { line: 186, column: 102 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 186, column: 60 },
                    end: { line: 186, column: 92 },
                  },
                  {
                    start: { line: 186, column: 95 },
                    end: { line: 186, column: 102 },
                  },
                ],
                line: 186,
              },
              23: {
                loc: {
                  start: { line: 194, column: 14 },
                  end: { line: 194, column: 90 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 194, column: 31 },
                    end: { line: 194, column: 85 },
                  },
                  {
                    start: { line: 194, column: 88 },
                    end: { line: 194, column: 90 },
                  },
                ],
                line: 194,
              },
              24: {
                loc: {
                  start: { line: 195, column: 14 },
                  end: { line: 195, column: 95 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 195, column: 35 },
                    end: { line: 195, column: 90 },
                  },
                  {
                    start: { line: 195, column: 93 },
                    end: { line: 195, column: 95 },
                  },
                ],
                line: 195,
              },
              25: {
                loc: {
                  start: { line: 201, column: 33 },
                  end: { line: 201, column: 81 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 201, column: 50 },
                    end: { line: 201, column: 52 },
                  },
                  {
                    start: { line: 201, column: 55 },
                    end: { line: 201, column: 81 },
                  },
                ],
                line: 201,
              },
              26: {
                loc: {
                  start: { line: 201, column: 55 },
                  end: { line: 201, column: 81 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 201, column: 76 },
                    end: { line: 201, column: 77 },
                  },
                  {
                    start: { line: 201, column: 80 },
                    end: { line: 201, column: 81 },
                  },
                ],
                line: 201,
              },
              27: {
                loc: {
                  start: { line: 208, column: 12 },
                  end: { line: 208, column: 87 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 208, column: 61 },
                    end: { line: 208, column: 67 },
                  },
                  {
                    start: { line: 208, column: 70 },
                    end: { line: 208, column: 87 },
                  },
                ],
                line: 208,
              },
              28: {
                loc: {
                  start: { line: 208, column: 12 },
                  end: { line: 208, column: 58 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 208, column: 12 },
                    end: { line: 208, column: 32 },
                  },
                  {
                    start: { line: 208, column: 36 },
                    end: { line: 208, column: 58 },
                  },
                ],
                line: 208,
              },
              29: {
                loc: {
                  start: { line: 214, column: 23 },
                  end: { line: 214, column: 102 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 214, column: 87 },
                    end: { line: 214, column: 98 },
                  },
                  {
                    start: { line: 214, column: 101 },
                    end: { line: 214, column: 102 },
                  },
                ],
                line: 214,
              },
              30: {
                loc: {
                  start: { line: 214, column: 23 },
                  end: { line: 214, column: 84 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 214, column: 23 },
                    end: { line: 214, column: 58 },
                  },
                  {
                    start: { line: 214, column: 62 },
                    end: { line: 214, column: 84 },
                  },
                ],
                line: 214,
              },
              31: {
                loc: {
                  start: { line: 217, column: 23 },
                  end: { line: 217, column: 102 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 217, column: 87 },
                    end: { line: 217, column: 98 },
                  },
                  {
                    start: { line: 217, column: 101 },
                    end: { line: 217, column: 102 },
                  },
                ],
                line: 217,
              },
              32: {
                loc: {
                  start: { line: 217, column: 23 },
                  end: { line: 217, column: 84 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 217, column: 23 },
                    end: { line: 217, column: 58 },
                  },
                  {
                    start: { line: 217, column: 62 },
                    end: { line: 217, column: 84 },
                  },
                ],
                line: 217,
              },
              33: {
                loc: {
                  start: { line: 220, column: 23 },
                  end: { line: 220, column: 102 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 220, column: 87 },
                    end: { line: 220, column: 98 },
                  },
                  {
                    start: { line: 220, column: 101 },
                    end: { line: 220, column: 102 },
                  },
                ],
                line: 220,
              },
              34: {
                loc: {
                  start: { line: 220, column: 23 },
                  end: { line: 220, column: 84 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 220, column: 23 },
                    end: { line: 220, column: 58 },
                  },
                  {
                    start: { line: 220, column: 62 },
                    end: { line: 220, column: 84 },
                  },
                ],
                line: 220,
              },
              35: {
                loc: {
                  start: { line: 223, column: 23 },
                  end: { line: 223, column: 102 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 223, column: 87 },
                    end: { line: 223, column: 98 },
                  },
                  {
                    start: { line: 223, column: 101 },
                    end: { line: 223, column: 102 },
                  },
                ],
                line: 223,
              },
              36: {
                loc: {
                  start: { line: 223, column: 23 },
                  end: { line: 223, column: 84 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 223, column: 23 },
                    end: { line: 223, column: 58 },
                  },
                  {
                    start: { line: 223, column: 62 },
                    end: { line: 223, column: 84 },
                  },
                ],
                line: 223,
              },
              37: {
                loc: {
                  start: { line: 227, column: 36 },
                  end: { line: 227, column: 87 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 227, column: 79 },
                    end: { line: 227, column: 83 },
                  },
                  {
                    start: { line: 227, column: 86 },
                    end: { line: 227, column: 87 },
                  },
                ],
                line: 227,
              },
              38: {
                loc: {
                  start: { line: 227, column: 36 },
                  end: { line: 227, column: 76 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 227, column: 36 },
                    end: { line: 227, column: 57 },
                  },
                  {
                    start: { line: 227, column: 61 },
                    end: { line: 227, column: 76 },
                  },
                ],
                line: 227,
              },
              39: {
                loc: {
                  start: { line: 227, column: 91 },
                  end: { line: 227, column: 142 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 227, column: 134 },
                    end: { line: 227, column: 138 },
                  },
                  {
                    start: { line: 227, column: 141 },
                    end: { line: 227, column: 142 },
                  },
                ],
                line: 227,
              },
              40: {
                loc: {
                  start: { line: 227, column: 91 },
                  end: { line: 227, column: 131 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 227, column: 91 },
                    end: { line: 227, column: 112 },
                  },
                  {
                    start: { line: 227, column: 116 },
                    end: { line: 227, column: 131 },
                  },
                ],
                line: 227,
              },
              41: {
                loc: {
                  start: { line: 232, column: 12 },
                  end: { line: 232, column: 69 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 232, column: 12 },
                    end: { line: 232, column: 69 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 232,
              },
              42: {
                loc: {
                  start: { line: 241, column: 12 },
                  end: { line: 241, column: 57 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 241, column: 12 },
                    end: { line: 241, column: 57 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 241,
              },
              43: {
                loc: {
                  start: { line: 242, column: 12 },
                  end: { line: 245, column: 13 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 242, column: 12 },
                    end: { line: 245, column: 13 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 242,
              },
              44: {
                loc: {
                  start: { line: 260, column: 8 },
                  end: { line: 263, column: 9 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 260, column: 8 },
                    end: { line: 263, column: 9 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 260,
              },
              45: {
                loc: {
                  start: { line: 266, column: 8 },
                  end: { line: 269, column: 9 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 266, column: 8 },
                    end: { line: 269, column: 9 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 266,
              },
              46: {
                loc: {
                  start: { line: 272, column: 8 },
                  end: { line: 275, column: 9 },
                },
                type: 'if',
                locations: [
                  {
                    start: { line: 272, column: 8 },
                    end: { line: 275, column: 9 },
                  },
                  {
                    start: { line: void 0, column: void 0 },
                    end: { line: void 0, column: void 0 },
                  },
                ],
                line: 272,
              },
              47: {
                loc: {
                  start: { line: 345, column: 41 },
                  end: { line: 345, column: 80 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 345, column: 57 },
                    end: { line: 345, column: 66 },
                  },
                  {
                    start: { line: 345, column: 69 },
                    end: { line: 345, column: 80 },
                  },
                ],
                line: 345,
              },
              48: {
                loc: {
                  start: { line: 492, column: 12 },
                  end: { line: 551, column: 14 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 492, column: 12 },
                    end: { line: 492, column: 25 },
                  },
                  {
                    start: { line: 492, column: 43 },
                    end: { line: 551, column: 14 },
                  },
                ],
                line: 492,
              },
              49: {
                loc: {
                  start: { line: 562, column: 20 },
                  end: { line: 580, column: 22 },
                },
                type: 'binary-expr',
                locations: [
                  {
                    start: { line: 562, column: 20 },
                    end: { line: 562, column: 69 },
                  },
                  {
                    start: { line: 562, column: 87 },
                    end: { line: 580, column: 22 },
                  },
                ],
                line: 562,
              },
              50: {
                loc: {
                  start: { line: 572, column: 46 },
                  end: { line: 572, column: 130 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 572, column: 72 },
                    end: { line: 572, column: 95 },
                  },
                  {
                    start: { line: 572, column: 98 },
                    end: { line: 572, column: 130 },
                  },
                ],
                line: 572,
              },
              51: {
                loc: {
                  start: { line: 576, column: 46 },
                  end: { line: 576, column: 207 },
                },
                type: 'cond-expr',
                locations: [
                  {
                    start: { line: 576, column: 72 },
                    end: { line: 576, column: 142 },
                  },
                  {
                    start: { line: 576, column: 145 },
                    end: { line: 576, column: 207 },
                  },
                ],
                line: 576,
              },
            },
            s: {
              0: 0,
              1: 0,
              2: 0,
              3: 0,
              4: 0,
              5: 0,
              6: 0,
              7: 0,
              8: 0,
              9: 0,
              10: 0,
              11: 0,
              12: 0,
              13: 0,
              14: 0,
              15: 0,
              16: 0,
              17: 0,
              18: 0,
              19: 0,
              20: 0,
              21: 0,
              22: 0,
              23: 0,
              24: 0,
              25: 0,
              26: 0,
              27: 0,
              28: 0,
              29: 0,
              30: 0,
              31: 0,
              32: 0,
              33: 0,
              34: 0,
              35: 0,
              36: 0,
              37: 0,
              38: 0,
              39: 0,
              40: 0,
              41: 0,
              42: 0,
              43: 0,
              44: 0,
              45: 0,
              46: 0,
              47: 0,
              48: 0,
              49: 0,
              50: 0,
              51: 0,
              52: 0,
              53: 0,
              54: 0,
              55: 0,
              56: 0,
              57: 0,
              58: 0,
              59: 0,
              60: 0,
              61: 0,
              62: 0,
              63: 0,
              64: 0,
              65: 0,
              66: 0,
              67: 0,
              68: 0,
              69: 0,
              70: 0,
              71: 0,
              72: 0,
              73: 0,
              74: 0,
              75: 0,
              76: 0,
              77: 0,
              78: 0,
              79: 0,
              80: 0,
              81: 0,
              82: 0,
              83: 0,
              84: 0,
              85: 0,
              86: 0,
              87: 0,
              88: 0,
              89: 0,
              90: 0,
              91: 0,
              92: 0,
              93: 0,
              94: 0,
              95: 0,
              96: 0,
              97: 0,
              98: 0,
              99: 0,
              100: 0,
              101: 0,
              102: 0,
              103: 0,
              104: 0,
              105: 0,
              106: 0,
              107: 0,
              108: 0,
              109: 0,
              110: 0,
              111: 0,
              112: 0,
              113: 0,
              114: 0,
              115: 0,
              116: 0,
              117: 0,
              118: 0,
              119: 0,
              120: 0,
              121: 0,
              122: 0,
              123: 0,
              124: 0,
              125: 0,
              126: 0,
              127: 0,
              128: 0,
              129: 0,
              130: 0,
              131: 0,
              132: 0,
              133: 0,
              134: 0,
              135: 0,
              136: 0,
              137: 0,
              138: 0,
              139: 0,
              140: 0,
              141: 0,
              142: 0,
              143: 0,
              144: 0,
              145: 0,
              146: 0,
              147: 0,
              148: 0,
              149: 0,
              150: 0,
              151: 0,
              152: 0,
              153: 0,
              154: 0,
              155: 0,
              156: 0,
              157: 0,
              158: 0,
              159: 0,
              160: 0,
              161: 0,
              162: 0,
              163: 0,
              164: 0,
              165: 0,
              166: 0,
              167: 0,
              168: 0,
              169: 0,
              170: 0,
              171: 0,
              172: 0,
              173: 0,
              174: 0,
              175: 0,
              176: 0,
              177: 0,
              178: 0,
              179: 0,
              180: 0,
              181: 0,
              182: 0,
              183: 0,
            },
            f: {
              0: 0,
              1: 0,
              2: 0,
              3: 0,
              4: 0,
              5: 0,
              6: 0,
              7: 0,
              8: 0,
              9: 0,
              10: 0,
              11: 0,
              12: 0,
              13: 0,
              14: 0,
              15: 0,
              16: 0,
              17: 0,
              18: 0,
              19: 0,
              20: 0,
              21: 0,
              22: 0,
              23: 0,
              24: 0,
              25: 0,
              26: 0,
              27: 0,
              28: 0,
              29: 0,
              30: 0,
              31: 0,
              32: 0,
              33: 0,
              34: 0,
              35: 0,
              36: 0,
              37: 0,
              38: 0,
              39: 0,
              40: 0,
              41: 0,
              42: 0,
              43: 0,
              44: 0,
              45: 0,
              46: 0,
              47: 0,
              48: 0,
              49: 0,
              50: 0,
              51: 0,
              52: 0,
              53: 0,
              54: 0,
              55: 0,
              56: 0,
            },
            b: {
              0: [0],
              1: [0, 0],
              2: [0, 0],
              3: [0, 0],
              4: [0, 0],
              5: [0, 0],
              6: [0, 0],
              7: [0, 0],
              8: [0, 0],
              9: [0, 0],
              10: [0, 0],
              11: [0, 0],
              12: [0, 0],
              13: [0, 0, 0, 0],
              14: [0, 0],
              15: [0, 0],
              16: [0, 0, 0, 0],
              17: [0, 0],
              18: [0, 0],
              19: [0, 0],
              20: [0, 0],
              21: [0, 0],
              22: [0, 0],
              23: [0, 0],
              24: [0, 0],
              25: [0, 0],
              26: [0, 0],
              27: [0, 0],
              28: [0, 0],
              29: [0, 0],
              30: [0, 0],
              31: [0, 0],
              32: [0, 0],
              33: [0, 0],
              34: [0, 0],
              35: [0, 0],
              36: [0, 0],
              37: [0, 0],
              38: [0, 0],
              39: [0, 0],
              40: [0, 0],
              41: [0, 0],
              42: [0, 0],
              43: [0, 0],
              44: [0, 0],
              45: [0, 0],
              46: [0, 0],
              47: [0, 0],
              48: [0, 0],
              49: [0, 0],
              50: [0, 0],
              51: [0, 0],
            },
            inputSourceMap: {
              version: 3,
              sources: [
                '/Users/ryota.murakami/repository/Notable/packages/web/components/graph/graph-visualization.tsx',
              ],
              sourcesContent: [
                "'use client'\n\nimport React, { useEffect, useRef, useState } from 'react'\nimport * as d3 from 'd3'\n/* eslint-disable no-undef */\nimport { Button } from '@/design-system/components/button'\nimport { Card } from '@/design-system/components/card'\nimport { Input } from '@/design-system/components/input'\nimport {\n  BarChart3,\n  Filter,\n  Info,\n  RotateCcw,\n  Search,\n  Settings,\n  ZoomIn,\n  ZoomOut,\n} from 'lucide-react'\n\ninterface GraphNode extends d3.SimulationNodeDatum {\n  id: string\n  label: string\n  title: string\n  created_at: string\n  updated_at: string\n  connections: number\n  tags?: string[]\n  centrality?: number\n  clusterId?: number\n}\n\ninterface GraphEdge extends d3.SimulationLinkDatum<GraphNode> {\n  from: string\n  to: string\n  label: string\n  title: string\n}\n\nexport interface GraphData {\n  nodes: GraphNode[]\n  edges: GraphEdge[]\n  stats: {\n    totalNotes: number\n    totalLinks: number\n    avgConnections: number\n  }\n}\n\ninterface GraphVisualizationProps {\n  data: GraphData\n  onNodeClick?: (nodeId: string) => void\n  className?: string\n}\n\nexport function GraphVisualization({\n  data,\n  onNodeClick,\n  className = '',\n}: GraphVisualizationProps) {\n  const svgRef = useRef<SVGSVGElement | null>(null)\n  const containerRef = useRef<HTMLDivElement | null>(null)\n  const [searchTerm, setSearchTerm] = useState('')\n  const [selectedLayout, setSelectedLayout] = useState<\n    'force' | 'circular' | 'hierarchical' | 'radial'\n  >('force')\n  const [zoom, setZoom] = useState(1)\n  const [selectedFilters, setSelectedFilters] = useState({\n    dateRange: 'all' as 'all' | '7days' | '30days' | '90days',\n    minConnections: 0,\n    showIsolated: true,\n    showHubs: true,\n  })\n  const [showAnalytics, setShowAnalytics] = useState(false)\n  const [nodeColorBy, setNodeColorBy] = useState<\n    'connections' | 'date' | 'cluster'\n  >('connections')\n\n  // Compute graph analytics\n  const computeAnalytics = (nodes: GraphNode[], edges: GraphEdge[]) => {\n    // Calculate centrality scores\n    const centralityScores = new Map<string, number>()\n    nodes.forEach((node) => {\n      centralityScores.set(node.id, node.connections)\n    })\n\n    // Identify hubs (top 10% by connections)\n    const sortedByConnections = [...nodes].sort(\n      (a, b) => b.connections - a.connections\n    )\n    const hubThreshold = Math.max(1, Math.ceil(nodes.length * 0.1))\n    const hubs = new Set(\n      sortedByConnections.slice(0, hubThreshold).map((n) => n.id)\n    )\n\n    // Identify isolated nodes (0 connections)\n    const isolated = new Set(\n      nodes.filter((n) => n.connections === 0).map((n) => n.id)\n    )\n\n    return { centralityScores, hubs, isolated }\n  }\n\n  // Apply filters to nodes and edges\n  const applyFilters = (nodes: GraphNode[], edges: GraphEdge[]) => {\n    let filteredNodes = nodes.filter((node) => {\n      // Search filter\n      if (\n        searchTerm &&\n        !node.label.toLowerCase().includes(searchTerm.toLowerCase())\n      ) {\n        return false\n      }\n\n      // Date filter\n      if (selectedFilters.dateRange !== 'all') {\n        const nodeDate = new Date(node.created_at)\n        const now = new Date()\n        const daysAgo =\n          {\n            '7days': 7,\n            '30days': 30,\n            '90days': 90,\n          }[selectedFilters.dateRange] || 0\n\n        const cutoffDate = new Date(\n          now.getTime() - daysAgo * 24 * 60 * 60 * 1000\n        )\n        if (nodeDate < cutoffDate) return false\n      }\n\n      // Connection filter\n      if (node.connections < selectedFilters.minConnections) return false\n\n      return true\n    })\n\n    const { hubs, isolated } = computeAnalytics(nodes, edges)\n\n    // Apply hub/isolated filters\n    if (!selectedFilters.showHubs) {\n      filteredNodes = filteredNodes.filter((node) => !hubs.has(node.id))\n    }\n\n    if (!selectedFilters.showIsolated) {\n      filteredNodes = filteredNodes.filter((node) => !isolated.has(node.id))\n    }\n\n    return filteredNodes\n  }\n\n  useEffect(() => {\n    if (!svgRef.current || !data.nodes.length) return\n\n    const svg = d3.select(svgRef.current)\n    const container = containerRef.current\n    if (!container) return\n\n    const width = container.clientWidth\n    const height = container.clientHeight\n\n    // Clear previous content\n    svg.selectAll('*').remove()\n\n    // Create zoom behavior\n    const zoomBehavior = d3\n      .zoom<SVGSVGElement, unknown>()\n      .scaleExtent([0.1, 5])\n      .on('zoom', (event) => {\n        g.attr('transform', event.transform)\n        setZoom(event.transform.k)\n      })\n\n    svg.call(zoomBehavior)\n\n    // Create main group for zoomable content\n    const g = svg.append('g')\n\n    // Apply advanced filters\n    const filteredNodes = applyFilters(data.nodes, data.edges)\n    const { centralityScores, hubs, isolated } = computeAnalytics(\n      data.nodes,\n      data.edges\n    )\n\n    const filteredNodeIds = new Set(filteredNodes.map((node) => node.id))\n    const filteredEdges = data.edges.filter(\n      (edge) =>\n        filteredNodeIds.has(edge.from as string) &&\n        filteredNodeIds.has(edge.to as string)\n    )\n\n    // Create simulation\n    const simulation = d3.forceSimulation<GraphNode>(filteredNodes)\n\n    // Configure layout based on selection\n    switch (selectedLayout) {\n      case 'force':\n        simulation\n          .force(\n            'link',\n            d3\n              .forceLink<GraphNode, GraphEdge>(filteredEdges)\n              .id((d) => d.id)\n              .distance(100)\n          )\n          .force('charge', d3.forceManyBody().strength(-300))\n          .force('center', d3.forceCenter(width / 2, height / 2))\n          .force('collision', d3.forceCollide().radius(30))\n        break\n      case 'circular':\n        const radius = Math.min(width, height) / 3\n        filteredNodes.forEach((node, i) => {\n          const angle = (i / filteredNodes.length) * 2 * Math.PI\n          node.fx = width / 2 + radius * Math.cos(angle)\n          node.fy = height / 2 + radius * Math.sin(angle)\n        })\n        break\n      case 'hierarchical':\n        // Hierarchical layout based on connection count\n        const levels = Math.ceil(Math.sqrt(filteredNodes.length))\n        filteredNodes.sort((a, b) => b.connections - a.connections)\n        filteredNodes.forEach((node, i) => {\n          const level = Math.floor(i / levels)\n          const posInLevel = i % levels\n          node.fx = (width / (levels + 1)) * (posInLevel + 1)\n          node.fy =\n            (height / (Math.ceil(filteredNodes.length / levels) + 1)) *\n            (level + 1)\n        })\n        break\n      case 'radial':\n        // Radial layout with hubs in center\n        const centerNodes = [...filteredNodes].filter((n) => hubs.has(n.id))\n        const peripheryNodes = [...filteredNodes].filter((n) => !hubs.has(n.id))\n\n        // Place hubs in center\n        centerNodes.forEach((node, i) => {\n          const angle = (i / centerNodes.length) * 2 * Math.PI\n          const innerRadius = 50\n          node.fx = width / 2 + innerRadius * Math.cos(angle)\n          node.fy = height / 2 + innerRadius * Math.sin(angle)\n        })\n\n        // Place other nodes in concentric circles\n        peripheryNodes.forEach((node, i) => {\n          const angle = (i / peripheryNodes.length) * 2 * Math.PI\n          const outerRadius = Math.min(width, height) / 3\n          node.fx = width / 2 + outerRadius * Math.cos(angle)\n          node.fy = height / 2 + outerRadius * Math.sin(angle)\n        })\n        break\n    }\n\n    // Create links\n    const link = g\n      .append('g')\n      .attr('class', 'links')\n      .selectAll('line')\n      .data(filteredEdges)\n      .enter()\n      .append('line')\n      .attr('stroke', '#94a3b8')\n      .attr('stroke-opacity', 0.6)\n      .attr('stroke-width', 2)\n\n    // Create nodes\n    const node = g\n      .append('g')\n      .attr('class', 'nodes')\n      .selectAll('g')\n      .data(filteredNodes)\n      .enter()\n      .append('g')\n      .attr('class', 'node')\n      .style('cursor', 'pointer')\n      .call(\n        d3\n          .drag<SVGGElement, GraphNode>()\n          .on('start', dragstarted)\n          .on('drag', dragged)\n          .on('end', dragended)\n      )\n\n    // Add circles for nodes with advanced coloring\n    node\n      .append('circle')\n      .attr('r', (d) => {\n        const baseSize = hubs.has(d.id) ? 12 : isolated.has(d.id) ? 6 : 8\n        return Math.max(baseSize, Math.min(25, baseSize + d.connections * 1.5))\n      })\n      .attr('fill', (d) => {\n        switch (nodeColorBy) {\n          case 'connections':\n            const connectionIntensity = Math.min(d.connections / 10, 1)\n            return `hsl(${240 - connectionIntensity * 120}, 70%, ${60 + connectionIntensity * 20}%)`\n\n          case 'date':\n            const nodeAge = Date.now() - new Date(d.created_at).getTime()\n            const maxAge = 365 * 24 * 60 * 60 * 1000 // 1 year\n            const ageRatio = Math.min(nodeAge / maxAge, 1)\n            return `hsl(${120 - ageRatio * 60}, 70%, 60%)`\n\n          case 'cluster':\n          default:\n            if (hubs.has(d.id)) return '#ef4444' // Red for hubs\n            if (isolated.has(d.id)) return '#94a3b8' // Gray for isolated\n            const hue = Math.abs(d.id.charCodeAt(0) * 137.5) % 360\n            return `hsl(${hue}, 70%, 60%)`\n        }\n      })\n      .attr('stroke', (d) => {\n        if (hubs.has(d.id)) return '#dc2626'\n        if (isolated.has(d.id)) return '#6b7280'\n        return '#fff'\n      })\n      .attr('stroke-width', (d) => (hubs.has(d.id) ? 3 : 2))\n\n    // Add labels\n    node\n      .append('text')\n      .text((d) =>\n        d.label.length > 20 ? `${d.label.substring(0, 20)}...` : d.label\n      )\n      .attr('font-size', '12px')\n      .attr('font-family', 'system-ui, -apple-system, sans-serif')\n      .attr('text-anchor', 'middle')\n      .attr('dy', '0.35em')\n      .attr('fill', '#1f2937')\n      .attr('pointer-events', 'none')\n\n    // Add hover effects and click handlers\n    node\n      .on('mouseover', function (event, d) {\n        d3.select(this)\n          .select('circle')\n          .transition()\n          .duration(200)\n          .attr('r', Math.max(14, Math.min(28, 10 + d.connections * 1.8)))\n          .attr('stroke-width', 3)\n\n        // Show tooltip\n        const tooltip = d3\n          .select('body')\n          .append('div')\n          .attr('class', 'graph-tooltip')\n          .style('position', 'absolute')\n          .style('background', 'rgba(0, 0, 0, 0.8)')\n          .style('color', 'white')\n          .style('padding', '8px 12px')\n          .style('border-radius', '4px')\n          .style('font-size', '12px')\n          .style('pointer-events', 'none')\n          .style('z-index', '1000')\n          .html(\n            `\n            <strong>${d.title}</strong><br/>\n            Connections: ${d.connections}<br/>\n            ${hubs.has(d.id) ? '<span style=\"color: #ef4444\">🔥 Hub Node</span><br/>' : ''}\n            ${isolated.has(d.id) ? '<span style=\"color: #94a3b8\">🏝️ Isolated</span><br/>' : ''}\n            Created: ${new Date(d.created_at).toLocaleDateString()}<br/>\n            Updated: ${new Date(d.updated_at).toLocaleDateString()}\n          `\n          )\n          .style('left', `${event.pageX + 10}px`)\n          .style('top', `${event.pageY - 10}px`)\n      })\n      .on('mouseout', function (event, d) {\n        d3.select(this)\n          .select('circle')\n          .transition()\n          .duration(200)\n          .attr('r', (d: any) => {\n            const baseSize = hubs.has(d.id) ? 12 : isolated.has(d.id) ? 6 : 8\n            return Math.max(\n              baseSize,\n              Math.min(25, baseSize + d.connections * 1.5)\n            )\n          })\n          .attr('stroke-width', 2)\n\n        // Remove tooltip\n        d3.selectAll('.graph-tooltip').remove()\n      })\n      .on('click', function (event, d) {\n        event.stopPropagation()\n        onNodeClick?.(d.id)\n      })\n\n    // Update positions on simulation tick\n    simulation.on('tick', () => {\n      link\n        .attr('x1', (d) => (d.source as GraphNode).x ?? 0)\n        .attr('y1', (d) => (d.source as GraphNode).y ?? 0)\n        .attr('x2', (d) => (d.target as GraphNode).x ?? 0)\n        .attr('y2', (d) => (d.target as GraphNode).y ?? 0)\n\n      node.attr('transform', (d) => `translate(${d.x ?? 0},${d.y ?? 0})`)\n    })\n\n    // Drag functions\n    function dragstarted(\n      event: d3.D3DragEvent<SVGGElement, GraphNode, GraphNode>\n    ) {\n      if (!event.active) simulation.alphaTarget(0.3).restart()\n      event.subject.fx = event.subject.x\n      event.subject.fy = event.subject.y\n    }\n\n    function dragged(event: d3.D3DragEvent<SVGGElement, GraphNode, GraphNode>) {\n      event.subject.fx = event.x\n      event.subject.fy = event.y\n    }\n\n    function dragended(\n      event: d3.D3DragEvent<SVGGElement, GraphNode, GraphNode>\n    ) {\n      if (!event.active) simulation.alphaTarget(0)\n      if (selectedLayout === 'force') {\n        event.subject.fx = null\n        event.subject.fy = null\n      }\n    }\n\n    // Cleanup function\n    return () => {\n      simulation.stop()\n      d3.selectAll('.graph-tooltip').remove()\n    }\n  }, [data, searchTerm, selectedLayout, selectedFilters, nodeColorBy])\n\n  const handleZoomIn = () => {\n    if (svgRef.current) {\n      const svg = d3.select(svgRef.current)\n      svg\n        .transition()\n        .call(d3.zoom<SVGSVGElement, unknown>().scaleBy as any, 1.5)\n    }\n  }\n\n  const handleZoomOut = () => {\n    if (svgRef.current) {\n      const svg = d3.select(svgRef.current)\n      svg\n        .transition()\n        .call(d3.zoom<SVGSVGElement, unknown>().scaleBy as any, 1 / 1.5)\n    }\n  }\n\n  const handleReset = () => {\n    if (svgRef.current) {\n      const svg = d3.select(svgRef.current)\n      svg\n        .transition()\n        .call(\n          d3.zoom<SVGSVGElement, unknown>().transform as any,\n          d3.zoomIdentity\n        )\n    }\n  }\n\n  const analytics = computeAnalytics(data.nodes, data.edges)\n  const filteredAnalytics = computeAnalytics(\n    applyFilters(data.nodes, data.edges),\n    data.edges\n  )\n\n  return (\n    <div className={`flex flex-col h-full ${className}`}>\n      {/* Main Controls */}\n      <Card className='p-4 mb-4'>\n        <div className='flex flex-wrap items-center gap-4'>\n          {/* Search */}\n          <div className='flex items-center gap-2 flex-1 min-w-[200px]'>\n            <Search className='w-4 h-4 text-muted-foreground' />\n            <Input\n              placeholder='Search notes...'\n              value={searchTerm}\n              onChange={(e) => setSearchTerm(e.target.value)}\n              className='flex-1'\n            />\n          </div>\n\n          {/* Layout Selection */}\n          <select\n            value={selectedLayout}\n            onChange={(e) => setSelectedLayout(e.target.value as any)}\n            className='px-3 py-2 border rounded-md bg-background'\n          >\n            <option value='force'>Force Layout</option>\n            <option value='circular'>Circular Layout</option>\n            <option value='hierarchical'>Hierarchical Layout</option>\n            <option value='radial'>Radial Layout</option>\n          </select>\n\n          {/* Node Coloring */}\n          <select\n            value={nodeColorBy}\n            onChange={(e) => setNodeColorBy(e.target.value as any)}\n            className='px-3 py-2 border rounded-md bg-background text-sm'\n          >\n            <option value='connections'>Color by Connections</option>\n            <option value='date'>Color by Date</option>\n            <option value='cluster'>Color by Type</option>\n          </select>\n\n          {/* Analytics Toggle */}\n          <Button\n            variant={showAnalytics ? 'default' : 'secondary'}\n            size='sm'\n            onClick={() => setShowAnalytics(!showAnalytics)}\n          >\n            <BarChart3 className='w-4 h-4 mr-1' />\n            Analytics\n          </Button>\n\n          {/* Zoom Controls */}\n          <div className='flex items-center gap-2'>\n            <Button variant='secondary' size='sm' onClick={handleZoomIn}>\n              <ZoomIn className='w-4 h-4' />\n            </Button>\n            <Button variant='secondary' size='sm' onClick={handleZoomOut}>\n              <ZoomOut className='w-4 h-4' />\n            </Button>\n            <Button variant='secondary' size='sm' onClick={handleReset}>\n              <RotateCcw className='w-4 h-4' />\n            </Button>\n          </div>\n        </div>\n\n        {/* Advanced Filters */}\n        <div className='flex flex-wrap items-center gap-4 pt-4 border-t text-sm'>\n          <div className='flex items-center gap-2'>\n            <span className='text-muted-foreground'>Date:</span>\n            <select\n              value={selectedFilters.dateRange}\n              onChange={(e) =>\n                setSelectedFilters((prev) => ({\n                  ...prev,\n                  dateRange: e.target.value as any,\n                }))\n              }\n              className='px-2 py-1 border rounded bg-background'\n            >\n              <option value='all'>All Time</option>\n              <option value='7days'>Last 7 Days</option>\n              <option value='30days'>Last 30 Days</option>\n              <option value='90days'>Last 90 Days</option>\n            </select>\n          </div>\n\n          <div className='flex items-center gap-2'>\n            <span className='text-muted-foreground'>Min Connections:</span>\n            <input\n              type='range'\n              min='0'\n              max='10'\n              value={selectedFilters.minConnections}\n              onChange={(e) =>\n                setSelectedFilters((prev) => ({\n                  ...prev,\n                  minConnections: Number(e.target.value),\n                }))\n              }\n              className='w-20'\n            />\n            <span className='w-6'>{selectedFilters.minConnections}</span>\n          </div>\n\n          <label className='flex items-center gap-1'>\n            <input\n              type='checkbox'\n              checked={selectedFilters.showHubs}\n              onChange={(e) =>\n                setSelectedFilters((prev) => ({\n                  ...prev,\n                  showHubs: e.target.checked,\n                }))\n              }\n            />\n            Show Hubs\n          </label>\n\n          <label className='flex items-center gap-1'>\n            <input\n              type='checkbox'\n              checked={selectedFilters.showIsolated}\n              onChange={(e) =>\n                setSelectedFilters((prev) => ({\n                  ...prev,\n                  showIsolated: e.target.checked,\n                }))\n              }\n            />\n            Show Isolated\n          </label>\n\n          <div className='text-muted-foreground ml-auto'>\n            {applyFilters(data.nodes, data.edges).length} of{' '}\n            {data.stats.totalNotes} notes • Zoom: {Math.round(zoom * 100)}%\n          </div>\n        </div>\n      </Card>\n\n      {/* Analytics Panel */}\n      {showAnalytics && (\n        <Card className='p-4 mb-4'>\n          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-sm'>\n            <div className='text-center'>\n              <div className='text-2xl font-bold text-red-600'>\n                {analytics.hubs.size}\n              </div>\n              <div className='text-muted-foreground'>Hub Notes</div>\n            </div>\n            <div className='text-center'>\n              <div className='text-2xl font-bold text-gray-600'>\n                {analytics.isolated.size}\n              </div>\n              <div className='text-muted-foreground'>Isolated Notes</div>\n            </div>\n            <div className='text-center'>\n              <div className='text-2xl font-bold text-green-600'>\n                {data.stats.avgConnections.toFixed(1)}\n              </div>\n              <div className='text-muted-foreground'>Avg Connections</div>\n            </div>\n            <div className='text-center'>\n              <div className='text-2xl font-bold text-purple-600'>\n                {data.stats.totalLinks}\n              </div>\n              <div className='text-muted-foreground'>Total Links</div>\n            </div>\n          </div>\n        </Card>\n      )}\n\n      {/* Graph Container */}\n      <div\n        ref={containerRef}\n        className='flex-1 relative border rounded-lg bg-background'\n      >\n        <svg\n          ref={svgRef}\n          width='100%'\n          height='100%'\n          className='absolute inset-0'\n        />\n\n        {applyFilters(data.nodes, data.edges).length === 0 && (\n          <div className='absolute inset-0 flex items-center justify-center text-muted-foreground'>\n            <div className='text-center'>\n              <Filter className='w-16 h-16 mx-auto mb-4 opacity-50' />\n              <h3 className='text-lg font-medium mb-2'>\n                {data.nodes.length === 0\n                  ? 'No notes to visualize'\n                  : 'No notes match current filters'}\n              </h3>\n              <p className='text-sm'>\n                {data.nodes.length === 0\n                  ? 'Create some notes and link them together to see the knowledge graph.'\n                  : 'Try adjusting the filters or search terms to see more notes.'}\n              </p>\n            </div>\n          </div>\n        )}\n      </div>\n    </div>\n  )\n}\n",
              ],
              names: [],
              mappings:
                'AAAA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAEX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AACzD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AACvB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAC5B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AACzD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AACrD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAA;AACvD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACL,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACT,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAEN,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACT,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAEN,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACN,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,oGACW;AAqCpB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACjC,CAAC,CAAC,CAAC,CAAC,EACJ,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACX,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACU,CAAC,CAAC;IAC1B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAuB,AAAtB,CAAuB,AAAtB,CAAuB,AAAtB,CAAuB,AAAtB,CAAuB,AAAtB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IAC3C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAwB,AAAvB,CAAwB,AAAvB,CAAwB,AAAvB,CAAwB,AAAvB,CAAC,AAAuB,CAAtB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IAClD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IAC/C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAElD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IACT,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IAClC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACrD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACzD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACjB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAClB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IAChB,CAAC;IACD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IACxD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAE5C,CAAC,CAAC,CAAC,CAAC,C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AAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAC3B,CAAC;QAEH,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAErB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;QACxC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAExB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;QACxB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACzD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,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CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;gBAC/C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACxD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAAE,CAAD,AAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBAC1D,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;oBACjC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;oBACnC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,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,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;oBAClD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACrD,CAAC;gBAED,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;gBACzC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;oBAClC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;oBACtD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAA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AAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YAChE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACxE,CAAC,EACA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACnB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACnB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;oBAChB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;oBAC1D,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;gBAEzF,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;oBACT,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;oBAC5D,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;;oBACjD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;oBAC7C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;gBAE/C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gBACd,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;oBACL,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;;oBACnD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;;oBAC5D,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;oBACrD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;YACjC;QACF,CAAC,EACA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACrB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACnC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YACvC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QACd,CAAC,EACA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAAG,CAAF,AAAG,CAAC,AAAH,CAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAEvD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;QACZ,CAAC,CAAC,CAAC,EACA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACb,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AACT,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA,EAEhE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACxB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAC1D,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAC5B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACnB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,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CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;qBAC1E,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;qBAClD,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;UACxD,CAAA,EAEC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EACrC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC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AC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;kDAEpD,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;wCAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;kDAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;kDAC1C,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;wCAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;kDAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;kDAChD,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;wCAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;kDAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;kDACxD,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;wCAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;kDAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CA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',
            },
            _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
            hash: 'c81d12d5d2a78e466e5bafc72ed77dd19f04ec1f',
          },
          coverage = global[gcv] || (global[gcv] = {})
        ;(coverage[path] &&
          'c81d12d5d2a78e466e5bafc72ed77dd19f04ec1f' === coverage[path].hash) ||
          (coverage[path] = coverageData)
        var actualCoverage = coverage[path]
        return (
          (cov_toujfc8tz = function () {
            return actualCoverage
          }),
          actualCoverage
        )
      }
      function GraphVisualization({
        data,
        onNodeClick,
        className = (cov_toujfc8tz().b[0][0]++, ''),
      }) {
        cov_toujfc8tz().f[0]++
        const svgRef = (cov_toujfc8tz().s[0]++, (0, react.useRef)(null)),
          containerRef = (cov_toujfc8tz().s[1]++, (0, react.useRef)(null)),
          [searchTerm, setSearchTerm] =
            (cov_toujfc8tz().s[2]++, (0, react.useState)('')),
          [selectedLayout, setSelectedLayout] =
            (cov_toujfc8tz().s[3]++, (0, react.useState)('force')),
          [zoom, setZoom] = (cov_toujfc8tz().s[4]++, (0, react.useState)(1)),
          [selectedFilters, setSelectedFilters] =
            (cov_toujfc8tz().s[5]++,
            (0, react.useState)({
              dateRange: 'all',
              minConnections: 0,
              showIsolated: !0,
              showHubs: !0,
            })),
          [showAnalytics, setShowAnalytics] =
            (cov_toujfc8tz().s[6]++, (0, react.useState)(!1)),
          [nodeColorBy, setNodeColorBy] =
            (cov_toujfc8tz().s[7]++, (0, react.useState)('connections'))
        cov_toujfc8tz().s[8]++
        const computeAnalytics = (nodes, edges) => {
          cov_toujfc8tz().f[1]++
          const centralityScores = (cov_toujfc8tz().s[9]++, new Map())
          ;(cov_toujfc8tz().s[10]++,
            nodes.forEach((node) => {
              ;(cov_toujfc8tz().f[2]++,
                cov_toujfc8tz().s[11]++,
                centralityScores.set(node.id, node.connections))
            }))
          const sortedByConnections =
              (cov_toujfc8tz().s[12]++,
              [...nodes].sort(
                (a, b) => (
                  cov_toujfc8tz().f[3]++,
                  cov_toujfc8tz().s[13]++,
                  b.connections - a.connections
                )
              )),
            hubThreshold =
              (cov_toujfc8tz().s[14]++,
              Math.max(1, Math.ceil(0.1 * nodes.length))),
            hubs =
              (cov_toujfc8tz().s[15]++,
              new Set(
                sortedByConnections
                  .slice(0, hubThreshold)
                  .map(
                    (n) => (
                      cov_toujfc8tz().f[4]++,
                      cov_toujfc8tz().s[16]++,
                      n.id
                    )
                  )
              )),
            isolated =
              (cov_toujfc8tz().s[17]++,
              new Set(
                nodes
                  .filter(
                    (n) => (
                      cov_toujfc8tz().f[5]++,
                      cov_toujfc8tz().s[18]++,
                      0 === n.connections
                    )
                  )
                  .map(
                    (n) => (
                      cov_toujfc8tz().f[6]++,
                      cov_toujfc8tz().s[19]++,
                      n.id
                    )
                  )
              ))
          return (cov_toujfc8tz().s[20]++, { centralityScores, hubs, isolated })
        }
        cov_toujfc8tz().s[21]++
        const applyFilters = (nodes, edges) => {
          cov_toujfc8tz().f[7]++
          let filteredNodes =
            (cov_toujfc8tz().s[22]++,
            nodes.filter((node) => {
              if (
                (cov_toujfc8tz().f[8]++,
                cov_toujfc8tz().s[23]++,
                cov_toujfc8tz().b[2][0]++,
                searchTerm &&
                  (cov_toujfc8tz().b[2][1]++,
                  !node.label.toLowerCase().includes(searchTerm.toLowerCase())))
              )
                return (cov_toujfc8tz().b[1][0]++, cov_toujfc8tz().s[24]++, !1)
              if (
                (cov_toujfc8tz().b[1][1]++,
                cov_toujfc8tz().s[25]++,
                'all' !== selectedFilters.dateRange)
              ) {
                cov_toujfc8tz().b[3][0]++
                const nodeDate =
                    (cov_toujfc8tz().s[26]++, new Date(node.created_at)),
                  now = (cov_toujfc8tz().s[27]++, new Date()),
                  daysAgo =
                    (cov_toujfc8tz().s[28]++,
                    cov_toujfc8tz().b[4][0]++,
                    { '7days': 7, '30days': 30, '90days': 90 }[
                      selectedFilters.dateRange
                    ] || (cov_toujfc8tz().b[4][1]++, 0)),
                  cutoffDate =
                    (cov_toujfc8tz().s[29]++,
                    new Date(now.getTime() - 24 * daysAgo * 60 * 60 * 1e3))
                if ((cov_toujfc8tz().s[30]++, nodeDate < cutoffDate))
                  return (
                    cov_toujfc8tz().b[5][0]++,
                    cov_toujfc8tz().s[31]++,
                    !1
                  )
                cov_toujfc8tz().b[5][1]++
              } else cov_toujfc8tz().b[3][1]++
              return (
                cov_toujfc8tz().s[32]++,
                node.connections < selectedFilters.minConnections
                  ? (cov_toujfc8tz().b[6][0]++, cov_toujfc8tz().s[33]++, !1)
                  : (cov_toujfc8tz().b[6][1]++, cov_toujfc8tz().s[34]++, !0)
              )
            }))
          const { hubs, isolated } =
            (cov_toujfc8tz().s[35]++, computeAnalytics(nodes))
          return (
            cov_toujfc8tz().s[36]++,
            selectedFilters.showHubs
              ? cov_toujfc8tz().b[7][1]++
              : (cov_toujfc8tz().b[7][0]++,
                cov_toujfc8tz().s[37]++,
                (filteredNodes = filteredNodes.filter(
                  (node) => (
                    cov_toujfc8tz().f[9]++,
                    cov_toujfc8tz().s[38]++,
                    !hubs.has(node.id)
                  )
                ))),
            cov_toujfc8tz().s[39]++,
            selectedFilters.showIsolated
              ? cov_toujfc8tz().b[8][1]++
              : (cov_toujfc8tz().b[8][0]++,
                cov_toujfc8tz().s[40]++,
                (filteredNodes = filteredNodes.filter(
                  (node) => (
                    cov_toujfc8tz().f[10]++,
                    cov_toujfc8tz().s[41]++,
                    !isolated.has(node.id)
                  )
                ))),
            cov_toujfc8tz().s[42]++,
            filteredNodes
          )
        }
        ;(cov_toujfc8tz().s[43]++,
          (0, react.useEffect)(() => {
            if (
              (cov_toujfc8tz().f[11]++,
              cov_toujfc8tz().s[44]++,
              cov_toujfc8tz().b[10][0]++,
              !svgRef.current ||
                (cov_toujfc8tz().b[10][1]++, !data.nodes.length))
            )
              return (cov_toujfc8tz().b[9][0]++, void cov_toujfc8tz().s[45]++)
            cov_toujfc8tz().b[9][1]++
            const svg = (cov_toujfc8tz().s[46]++, src.Ltv(svgRef.current)),
              container = (cov_toujfc8tz().s[47]++, containerRef.current)
            if ((cov_toujfc8tz().s[48]++, !container))
              return (cov_toujfc8tz().b[11][0]++, void cov_toujfc8tz().s[49]++)
            cov_toujfc8tz().b[11][1]++
            const width = (cov_toujfc8tz().s[50]++, container.clientWidth),
              height = (cov_toujfc8tz().s[51]++, container.clientHeight)
            ;(cov_toujfc8tz().s[52]++, svg.selectAll('*').remove())
            const zoomBehavior =
              (cov_toujfc8tz().s[53]++,
              src
                .s_O()
                .scaleExtent([0.1, 5])
                .on('zoom', (event) => {
                  ;(cov_toujfc8tz().f[12]++,
                    cov_toujfc8tz().s[54]++,
                    g.attr('transform', event.transform),
                    cov_toujfc8tz().s[55]++,
                    setZoom(event.transform.k))
                }))
            ;(cov_toujfc8tz().s[56]++, svg.call(zoomBehavior))
            const g = (cov_toujfc8tz().s[57]++, svg.append('g')),
              filteredNodes =
                (cov_toujfc8tz().s[58]++, applyFilters(data.nodes, data.edges)),
              { centralityScores, hubs, isolated } =
                (cov_toujfc8tz().s[59]++,
                computeAnalytics(data.nodes, data.edges)),
              filteredNodeIds =
                (cov_toujfc8tz().s[60]++,
                new Set(
                  filteredNodes.map(
                    (node) => (
                      cov_toujfc8tz().f[13]++,
                      cov_toujfc8tz().s[61]++,
                      node.id
                    )
                  )
                )),
              filteredEdges =
                (cov_toujfc8tz().s[62]++,
                data.edges.filter(
                  (edge) => (
                    cov_toujfc8tz().f[14]++,
                    cov_toujfc8tz().s[63]++,
                    cov_toujfc8tz().b[12][0]++,
                    filteredNodeIds.has(edge.from) &&
                      (cov_toujfc8tz().b[12][1]++, filteredNodeIds.has(edge.to))
                  )
                )),
              simulation = (cov_toujfc8tz().s[64]++, src.tXi(filteredNodes))
            switch ((cov_toujfc8tz().s[65]++, selectedLayout)) {
              case 'force':
                ;(cov_toujfc8tz().b[13][0]++,
                  cov_toujfc8tz().s[66]++,
                  simulation
                    .force(
                      'link',
                      src
                        .kJC(filteredEdges)
                        .id(
                          (d) => (
                            cov_toujfc8tz().f[15]++,
                            cov_toujfc8tz().s[67]++,
                            d.id
                          )
                        )
                        .distance(100)
                    )
                    .force('charge', src.xJS().strength(-300))
                    .force('center', src.jTM(width / 2, height / 2))
                    .force('collision', src.eRw().radius(30)),
                  cov_toujfc8tz().s[68]++)
                break
              case 'circular':
                cov_toujfc8tz().b[13][1]++
                const radius =
                  (cov_toujfc8tz().s[69]++, Math.min(width, height) / 3)
                ;(cov_toujfc8tz().s[70]++,
                  filteredNodes.forEach((node, i) => {
                    cov_toujfc8tz().f[16]++
                    const angle =
                      (cov_toujfc8tz().s[71]++,
                      (i / filteredNodes.length) * 2 * Math.PI)
                    ;(cov_toujfc8tz().s[72]++,
                      (node.fx = width / 2 + radius * Math.cos(angle)),
                      cov_toujfc8tz().s[73]++,
                      (node.fy = height / 2 + radius * Math.sin(angle)))
                  }),
                  cov_toujfc8tz().s[74]++)
                break
              case 'hierarchical':
                cov_toujfc8tz().b[13][2]++
                const levels =
                  (cov_toujfc8tz().s[75]++,
                  Math.ceil(Math.sqrt(filteredNodes.length)))
                ;(cov_toujfc8tz().s[76]++,
                  filteredNodes.sort(
                    (a, b) => (
                      cov_toujfc8tz().f[17]++,
                      cov_toujfc8tz().s[77]++,
                      b.connections - a.connections
                    )
                  ),
                  cov_toujfc8tz().s[78]++,
                  filteredNodes.forEach((node, i) => {
                    cov_toujfc8tz().f[18]++
                    const level =
                        (cov_toujfc8tz().s[79]++, Math.floor(i / levels)),
                      posInLevel = (cov_toujfc8tz().s[80]++, i % levels)
                    ;(cov_toujfc8tz().s[81]++,
                      (node.fx = (width / (levels + 1)) * (posInLevel + 1)),
                      cov_toujfc8tz().s[82]++,
                      (node.fy =
                        (height /
                          (Math.ceil(filteredNodes.length / levels) + 1)) *
                        (level + 1)))
                  }),
                  cov_toujfc8tz().s[83]++)
                break
              case 'radial':
                cov_toujfc8tz().b[13][3]++
                const centerNodes =
                    (cov_toujfc8tz().s[84]++,
                    [...filteredNodes].filter(
                      (n) => (
                        cov_toujfc8tz().f[19]++,
                        cov_toujfc8tz().s[85]++,
                        hubs.has(n.id)
                      )
                    )),
                  peripheryNodes =
                    (cov_toujfc8tz().s[86]++,
                    [...filteredNodes].filter(
                      (n) => (
                        cov_toujfc8tz().f[20]++,
                        cov_toujfc8tz().s[87]++,
                        !hubs.has(n.id)
                      )
                    ))
                ;(cov_toujfc8tz().s[88]++,
                  centerNodes.forEach((node, i) => {
                    cov_toujfc8tz().f[21]++
                    const angle =
                        (cov_toujfc8tz().s[89]++,
                        (i / centerNodes.length) * 2 * Math.PI),
                      innerRadius = (cov_toujfc8tz().s[90]++, 50)
                    ;(cov_toujfc8tz().s[91]++,
                      (node.fx = width / 2 + innerRadius * Math.cos(angle)),
                      cov_toujfc8tz().s[92]++,
                      (node.fy = height / 2 + innerRadius * Math.sin(angle)))
                  }),
                  cov_toujfc8tz().s[93]++,
                  peripheryNodes.forEach((node, i) => {
                    cov_toujfc8tz().f[22]++
                    const angle =
                        (cov_toujfc8tz().s[94]++,
                        (i / peripheryNodes.length) * 2 * Math.PI),
                      outerRadius =
                        (cov_toujfc8tz().s[95]++, Math.min(width, height) / 3)
                    ;(cov_toujfc8tz().s[96]++,
                      (node.fx = width / 2 + outerRadius * Math.cos(angle)),
                      cov_toujfc8tz().s[97]++,
                      (node.fy = height / 2 + outerRadius * Math.sin(angle)))
                  }),
                  cov_toujfc8tz().s[98]++)
            }
            const link =
                (cov_toujfc8tz().s[99]++,
                g
                  .append('g')
                  .attr('class', 'links')
                  .selectAll('line')
                  .data(filteredEdges)
                  .enter()
                  .append('line')
                  .attr('stroke', '#94a3b8')
                  .attr('stroke-opacity', 0.6)
                  .attr('stroke-width', 2)),
              node =
                (cov_toujfc8tz().s[100]++,
                g
                  .append('g')
                  .attr('class', 'nodes')
                  .selectAll('g')
                  .data(filteredNodes)
                  .enter()
                  .append('g')
                  .attr('class', 'node')
                  .style('cursor', 'pointer')
                  .call(
                    src
                      .$Er()
                      .on('start', function dragstarted(event) {
                        ;(cov_toujfc8tz().f[38]++,
                          cov_toujfc8tz().s[142]++,
                          event.active
                            ? cov_toujfc8tz().b[41][1]++
                            : (cov_toujfc8tz().b[41][0]++,
                              cov_toujfc8tz().s[143]++,
                              simulation.alphaTarget(0.3).restart()))
                        ;(cov_toujfc8tz().s[144]++,
                          (event.subject.fx = event.subject.x),
                          cov_toujfc8tz().s[145]++,
                          (event.subject.fy = event.subject.y))
                      })
                      .on('drag', function dragged(event) {
                        ;(cov_toujfc8tz().f[39]++,
                          cov_toujfc8tz().s[146]++,
                          (event.subject.fx = event.x),
                          cov_toujfc8tz().s[147]++,
                          (event.subject.fy = event.y))
                      })
                      .on('end', function dragended(event) {
                        ;(cov_toujfc8tz().f[40]++,
                          cov_toujfc8tz().s[148]++,
                          event.active
                            ? cov_toujfc8tz().b[42][1]++
                            : (cov_toujfc8tz().b[42][0]++,
                              cov_toujfc8tz().s[149]++,
                              simulation.alphaTarget(0)))
                        ;(cov_toujfc8tz().s[150]++,
                          'force' === selectedLayout
                            ? (cov_toujfc8tz().b[43][0]++,
                              cov_toujfc8tz().s[151]++,
                              (event.subject.fx = null),
                              cov_toujfc8tz().s[152]++,
                              (event.subject.fy = null))
                            : cov_toujfc8tz().b[43][1]++)
                      })
                  ))
            return (
              cov_toujfc8tz().s[101]++,
              node
                .append('circle')
                .attr('r', (d) => {
                  cov_toujfc8tz().f[23]++
                  const baseSize =
                    (cov_toujfc8tz().s[102]++,
                    hubs.has(d.id)
                      ? (cov_toujfc8tz().b[14][0]++, 12)
                      : (cov_toujfc8tz().b[14][1]++,
                        isolated.has(d.id)
                          ? (cov_toujfc8tz().b[15][0]++, 6)
                          : (cov_toujfc8tz().b[15][1]++, 8)))
                  return (
                    cov_toujfc8tz().s[103]++,
                    Math.max(
                      baseSize,
                      Math.min(25, baseSize + 1.5 * d.connections)
                    )
                  )
                })
                .attr('fill', (d) => {
                  switch (
                    (cov_toujfc8tz().f[24]++,
                    cov_toujfc8tz().s[104]++,
                    nodeColorBy)
                  ) {
                    case 'connections':
                      cov_toujfc8tz().b[16][0]++
                      const connectionIntensity =
                        (cov_toujfc8tz().s[105]++,
                        Math.min(d.connections / 10, 1))
                      return (
                        cov_toujfc8tz().s[106]++,
                        `hsl(${240 - 120 * connectionIntensity}, 70%, ${60 + 20 * connectionIntensity}%)`
                      )
                    case 'date':
                      cov_toujfc8tz().b[16][1]++
                      const nodeAge =
                          (cov_toujfc8tz().s[107]++,
                          Date.now() - new Date(d.created_at).getTime()),
                        maxAge = (cov_toujfc8tz().s[108]++, 31536e6),
                        ageRatio =
                          (cov_toujfc8tz().s[109]++,
                          Math.min(nodeAge / maxAge, 1))
                      return (
                        cov_toujfc8tz().s[110]++,
                        `hsl(${120 - 60 * ageRatio}, 70%, 60%)`
                      )
                    case 'cluster':
                      cov_toujfc8tz().b[16][2]++
                    default:
                      if (
                        (cov_toujfc8tz().b[16][3]++,
                        cov_toujfc8tz().s[111]++,
                        hubs.has(d.id))
                      )
                        return (
                          cov_toujfc8tz().b[17][0]++,
                          cov_toujfc8tz().s[112]++,
                          '#ef4444'
                        )
                      if (
                        (cov_toujfc8tz().b[17][1]++,
                        cov_toujfc8tz().s[113]++,
                        isolated.has(d.id))
                      )
                        return (
                          cov_toujfc8tz().b[18][0]++,
                          cov_toujfc8tz().s[114]++,
                          '#94a3b8'
                        )
                      cov_toujfc8tz().b[18][1]++
                      const hue =
                        (cov_toujfc8tz().s[115]++,
                        Math.abs(137.5 * d.id.charCodeAt(0)) % 360)
                      return (cov_toujfc8tz().s[116]++, `hsl(${hue}, 70%, 60%)`)
                  }
                })
                .attr(
                  'stroke',
                  (d) => (
                    cov_toujfc8tz().f[25]++,
                    cov_toujfc8tz().s[117]++,
                    hubs.has(d.id)
                      ? (cov_toujfc8tz().b[19][0]++,
                        cov_toujfc8tz().s[118]++,
                        '#dc2626')
                      : (cov_toujfc8tz().b[19][1]++,
                        cov_toujfc8tz().s[119]++,
                        isolated.has(d.id)
                          ? (cov_toujfc8tz().b[20][0]++,
                            cov_toujfc8tz().s[120]++,
                            '#6b7280')
                          : (cov_toujfc8tz().b[20][1]++,
                            cov_toujfc8tz().s[121]++,
                            '#fff'))
                  )
                )
                .attr(
                  'stroke-width',
                  (d) => (
                    cov_toujfc8tz().f[26]++,
                    cov_toujfc8tz().s[122]++,
                    hubs.has(d.id)
                      ? (cov_toujfc8tz().b[21][0]++, 3)
                      : (cov_toujfc8tz().b[21][1]++, 2)
                  )
                ),
              cov_toujfc8tz().s[123]++,
              node
                .append('text')
                .text(
                  (d) => (
                    cov_toujfc8tz().f[27]++,
                    cov_toujfc8tz().s[124]++,
                    d.label.length > 20
                      ? (cov_toujfc8tz().b[22][0]++,
                        `${d.label.substring(0, 20)}...`)
                      : (cov_toujfc8tz().b[22][1]++, d.label)
                  )
                )
                .attr('font-size', '12px')
                .attr('font-family', 'system-ui, -apple-system, sans-serif')
                .attr('text-anchor', 'middle')
                .attr('dy', '0.35em')
                .attr('fill', '#1f2937')
                .attr('pointer-events', 'none'),
              cov_toujfc8tz().s[125]++,
              node
                .on('mouseover', function (event, d) {
                  ;(cov_toujfc8tz().f[28]++,
                    cov_toujfc8tz().s[126]++,
                    src
                      .Ltv(this)
                      .select('circle')
                      .transition()
                      .duration(200)
                      .attr(
                        'r',
                        Math.max(14, Math.min(28, 10 + 1.8 * d.connections))
                      )
                      .attr('stroke-width', 3))
                  ;(cov_toujfc8tz().s[127]++,
                    src
                      .Ltv('body')
                      .append('div')
                      .attr('class', 'graph-tooltip')
                      .style('position', 'absolute')
                      .style('background', 'rgba(0, 0, 0, 0.8)')
                      .style('color', 'white')
                      .style('padding', '8px 12px')
                      .style('border-radius', '4px')
                      .style('font-size', '12px')
                      .style('pointer-events', 'none')
                      .style('z-index', '1000')
                      .html(
                        `\n            <strong>${d.title}</strong><br/>\n            Connections: ${d.connections}<br/>\n            ${hubs.has(d.id) ? (cov_toujfc8tz().b[23][0]++, '<span style="color: #ef4444">🔥 Hub Node</span><br/>') : (cov_toujfc8tz().b[23][1]++, '')}\n            ${isolated.has(d.id) ? (cov_toujfc8tz().b[24][0]++, '<span style="color: #94a3b8">🏝️ Isolated</span><br/>') : (cov_toujfc8tz().b[24][1]++, '')}\n            Created: ${new Date(d.created_at).toLocaleDateString()}<br/>\n            Updated: ${new Date(d.updated_at).toLocaleDateString()}\n          `
                      )
                      .style('left', `${event.pageX + 10}px`)
                      .style('top', event.pageY - 10 + 'px'))
                })
                .on('mouseout', function (event, d) {
                  ;(cov_toujfc8tz().f[29]++,
                    cov_toujfc8tz().s[128]++,
                    src
                      .Ltv(this)
                      .select('circle')
                      .transition()
                      .duration(200)
                      .attr('r', (d) => {
                        cov_toujfc8tz().f[30]++
                        const baseSize =
                          (cov_toujfc8tz().s[129]++,
                          hubs.has(d.id)
                            ? (cov_toujfc8tz().b[25][0]++, 12)
                            : (cov_toujfc8tz().b[25][1]++,
                              isolated.has(d.id)
                                ? (cov_toujfc8tz().b[26][0]++, 6)
                                : (cov_toujfc8tz().b[26][1]++, 8)))
                        return (
                          cov_toujfc8tz().s[130]++,
                          Math.max(
                            baseSize,
                            Math.min(25, baseSize + 1.5 * d.connections)
                          )
                        )
                      })
                      .attr('stroke-width', 2),
                    cov_toujfc8tz().s[131]++,
                    src.Ubm('.graph-tooltip').remove())
                })
                .on('click', function (event, d) {
                  ;(cov_toujfc8tz().f[31]++,
                    cov_toujfc8tz().s[132]++,
                    event.stopPropagation(),
                    cov_toujfc8tz().s[133]++,
                    cov_toujfc8tz().b[28][0]++,
                    null === onNodeClick ||
                    (cov_toujfc8tz().b[28][1]++, void 0 === onNodeClick)
                      ? cov_toujfc8tz().b[27][0]++
                      : (cov_toujfc8tz().b[27][1]++, onNodeClick(d.id)))
                }),
              cov_toujfc8tz().s[134]++,
              simulation.on('tick', () => {
                ;(cov_toujfc8tz().f[32]++,
                  cov_toujfc8tz().s[135]++,
                  link
                    .attr('x1', (d) => {
                      var _d_source_x
                      return (
                        cov_toujfc8tz().f[33]++,
                        cov_toujfc8tz().s[136]++,
                        cov_toujfc8tz().b[30][0]++,
                        null !== (_d_source_x = d.source.x) &&
                        (cov_toujfc8tz().b[30][1]++, void 0 !== _d_source_x)
                          ? (cov_toujfc8tz().b[29][0]++, _d_source_x)
                          : (cov_toujfc8tz().b[29][1]++, 0)
                      )
                    })
                    .attr('y1', (d) => {
                      var _d_source_y
                      return (
                        cov_toujfc8tz().f[34]++,
                        cov_toujfc8tz().s[137]++,
                        cov_toujfc8tz().b[32][0]++,
                        null !== (_d_source_y = d.source.y) &&
                        (cov_toujfc8tz().b[32][1]++, void 0 !== _d_source_y)
                          ? (cov_toujfc8tz().b[31][0]++, _d_source_y)
                          : (cov_toujfc8tz().b[31][1]++, 0)
                      )
                    })
                    .attr('x2', (d) => {
                      var _d_target_x
                      return (
                        cov_toujfc8tz().f[35]++,
                        cov_toujfc8tz().s[138]++,
                        cov_toujfc8tz().b[34][0]++,
                        null !== (_d_target_x = d.target.x) &&
                        (cov_toujfc8tz().b[34][1]++, void 0 !== _d_target_x)
                          ? (cov_toujfc8tz().b[33][0]++, _d_target_x)
                          : (cov_toujfc8tz().b[33][1]++, 0)
                      )
                    })
                    .attr('y2', (d) => {
                      var _d_target_y
                      return (
                        cov_toujfc8tz().f[36]++,
                        cov_toujfc8tz().s[139]++,
                        cov_toujfc8tz().b[36][0]++,
                        null !== (_d_target_y = d.target.y) &&
                        (cov_toujfc8tz().b[36][1]++, void 0 !== _d_target_y)
                          ? (cov_toujfc8tz().b[35][0]++, _d_target_y)
                          : (cov_toujfc8tz().b[35][1]++, 0)
                      )
                    }),
                  cov_toujfc8tz().s[140]++,
                  node.attr('transform', (d) => {
                    var _d_x, _d_y
                    return (
                      cov_toujfc8tz().f[37]++,
                      cov_toujfc8tz().s[141]++,
                      `translate(${(cov_toujfc8tz().b[38][0]++, null !== (_d_x = d.x) && (cov_toujfc8tz().b[38][1]++, void 0 !== _d_x) ? (cov_toujfc8tz().b[37][0]++, _d_x) : (cov_toujfc8tz().b[37][1]++, 0))},${(cov_toujfc8tz().b[40][0]++, null !== (_d_y = d.y) && (cov_toujfc8tz().b[40][1]++, void 0 !== _d_y) ? (cov_toujfc8tz().b[39][0]++, _d_y) : (cov_toujfc8tz().b[39][1]++, 0))})`
                    )
                  }))
              }),
              cov_toujfc8tz().s[153]++,
              () => {
                ;(cov_toujfc8tz().f[41]++,
                  cov_toujfc8tz().s[154]++,
                  simulation.stop(),
                  cov_toujfc8tz().s[155]++,
                  src.Ubm('.graph-tooltip').remove())
              }
            )
          }, [data, searchTerm, selectedLayout, selectedFilters, nodeColorBy]),
          cov_toujfc8tz().s[156]++)
        cov_toujfc8tz().s[160]++
        cov_toujfc8tz().s[164]++
        const analytics =
          (cov_toujfc8tz().s[168]++, computeAnalytics(data.nodes, data.edges))
        ;(cov_toujfc8tz().s[169]++,
          computeAnalytics(applyFilters(data.nodes, data.edges), data.edges))
        return (
          cov_toujfc8tz().s[170]++,
          (0, jsx_runtime.jsxs)('div', {
            className: `flex flex-col h-full ${className}`,
            children: [
              (0, jsx_runtime.jsxs)(card.Zp, {
                className: 'p-4 mb-4',
                children: [
                  (0, jsx_runtime.jsxs)('div', {
                    className: 'flex flex-wrap items-center gap-4',
                    children: [
                      (0, jsx_runtime.jsxs)('div', {
                        className:
                          'flex items-center gap-2 flex-1 min-w-[200px]',
                        children: [
                          (0, jsx_runtime.jsx)(search.A, {
                            className: 'w-4 h-4 text-muted-foreground',
                          }),
                          (0, jsx_runtime.jsx)(input.pd, {
                            placeholder: 'Search notes...',
                            value: searchTerm,
                            onChange: (e) => (
                              cov_toujfc8tz().f[45]++,
                              cov_toujfc8tz().s[171]++,
                              setSearchTerm(e.target.value)
                            ),
                            className: 'flex-1',
                          }),
                        ],
                      }),
                      (0, jsx_runtime.jsxs)('select', {
                        value: selectedLayout,
                        onChange: (e) => (
                          cov_toujfc8tz().f[46]++,
                          cov_toujfc8tz().s[172]++,
                          setSelectedLayout(e.target.value)
                        ),
                        className: 'px-3 py-2 border rounded-md bg-background',
                        children: [
                          (0, jsx_runtime.jsx)('option', {
                            value: 'force',
                            children: 'Force Layout',
                          }),
                          (0, jsx_runtime.jsx)('option', {
                            value: 'circular',
                            children: 'Circular Layout',
                          }),
                          (0, jsx_runtime.jsx)('option', {
                            value: 'hierarchical',
                            children: 'Hierarchical Layout',
                          }),
                          (0, jsx_runtime.jsx)('option', {
                            value: 'radial',
                            children: 'Radial Layout',
                          }),
                        ],
                      }),
                      (0, jsx_runtime.jsxs)('select', {
                        value: nodeColorBy,
                        onChange: (e) => (
                          cov_toujfc8tz().f[47]++,
                          cov_toujfc8tz().s[173]++,
                          setNodeColorBy(e.target.value)
                        ),
                        className:
                          'px-3 py-2 border rounded-md bg-background text-sm',
                        children: [
                          (0, jsx_runtime.jsx)('option', {
                            value: 'connections',
                            children: 'Color by Connections',
                          }),
                          (0, jsx_runtime.jsx)('option', {
                            value: 'date',
                            children: 'Color by Date',
                          }),
                          (0, jsx_runtime.jsx)('option', {
                            value: 'cluster',
                            children: 'Color by Type',
                          }),
                        ],
                      }),
                      (0, jsx_runtime.jsxs)(components_button.$, {
                        variant: showAnalytics
                          ? (cov_toujfc8tz().b[47][0]++, 'default')
                          : (cov_toujfc8tz().b[47][1]++, 'secondary'),
                        size: 'sm',
                        onClick: () => (
                          cov_toujfc8tz().f[48]++,
                          cov_toujfc8tz().s[174]++,
                          setShowAnalytics(!showAnalytics)
                        ),
                        children: [
                          (0, jsx_runtime.jsx)(chart_column.A, {
                            className: 'w-4 h-4 mr-1',
                          }),
                          'Analytics',
                        ],
                      }),
                      (0, jsx_runtime.jsxs)('div', {
                        className: 'flex items-center gap-2',
                        children: [
                          (0, jsx_runtime.jsx)(components_button.$, {
                            variant: 'secondary',
                            size: 'sm',
                            onClick: () => {
                              if (
                                (cov_toujfc8tz().f[42]++,
                                cov_toujfc8tz().s[157]++,
                                svgRef.current)
                              ) {
                                cov_toujfc8tz().b[44][0]++
                                const svg =
                                  (cov_toujfc8tz().s[158]++,
                                  src.Ltv(svgRef.current))
                                ;(cov_toujfc8tz().s[159]++,
                                  svg.transition().call(src.s_O().scaleBy, 1.5))
                              } else cov_toujfc8tz().b[44][1]++
                            },
                            children: (0, jsx_runtime.jsx)(zoom_in.A, {
                              className: 'w-4 h-4',
                            }),
                          }),
                          (0, jsx_runtime.jsx)(components_button.$, {
                            variant: 'secondary',
                            size: 'sm',
                            onClick: () => {
                              if (
                                (cov_toujfc8tz().f[43]++,
                                cov_toujfc8tz().s[161]++,
                                svgRef.current)
                              ) {
                                cov_toujfc8tz().b[45][0]++
                                const svg =
                                  (cov_toujfc8tz().s[162]++,
                                  src.Ltv(svgRef.current))
                                ;(cov_toujfc8tz().s[163]++,
                                  svg
                                    .transition()
                                    .call(src.s_O().scaleBy, 1 / 1.5))
                              } else cov_toujfc8tz().b[45][1]++
                            },
                            children: (0, jsx_runtime.jsx)(zoom_out.A, {
                              className: 'w-4 h-4',
                            }),
                          }),
                          (0, jsx_runtime.jsx)(components_button.$, {
                            variant: 'secondary',
                            size: 'sm',
                            onClick: () => {
                              if (
                                (cov_toujfc8tz().f[44]++,
                                cov_toujfc8tz().s[165]++,
                                svgRef.current)
                              ) {
                                cov_toujfc8tz().b[46][0]++
                                const svg =
                                  (cov_toujfc8tz().s[166]++,
                                  src.Ltv(svgRef.current))
                                ;(cov_toujfc8tz().s[167]++,
                                  svg
                                    .transition()
                                    .call(src.s_O().transform, src.GSI))
                              } else cov_toujfc8tz().b[46][1]++
                            },
                            children: (0, jsx_runtime.jsx)(rotate_ccw.A, {
                              className: 'w-4 h-4',
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, jsx_runtime.jsxs)('div', {
                    className:
                      'flex flex-wrap items-center gap-4 pt-4 border-t text-sm',
                    children: [
                      (0, jsx_runtime.jsxs)('div', {
                        className: 'flex items-center gap-2',
                        children: [
                          (0, jsx_runtime.jsx)('span', {
                            className: 'text-muted-foreground',
                            children: 'Date:',
                          }),
                          (0, jsx_runtime.jsxs)('select', {
                            value: selectedFilters.dateRange,
                            onChange: (e) => (
                              cov_toujfc8tz().f[49]++,
                              cov_toujfc8tz().s[175]++,
                              setSelectedFilters(
                                (prev) => (
                                  cov_toujfc8tz().f[50]++,
                                  cov_toujfc8tz().s[176]++,
                                  { ...prev, dateRange: e.target.value }
                                )
                              )
                            ),
                            className: 'px-2 py-1 border rounded bg-background',
                            children: [
                              (0, jsx_runtime.jsx)('option', {
                                value: 'all',
                                children: 'All Time',
                              }),
                              (0, jsx_runtime.jsx)('option', {
                                value: '7days',
                                children: 'Last 7 Days',
                              }),
                              (0, jsx_runtime.jsx)('option', {
                                value: '30days',
                                children: 'Last 30 Days',
                              }),
                              (0, jsx_runtime.jsx)('option', {
                                value: '90days',
                                children: 'Last 90 Days',
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, jsx_runtime.jsxs)('div', {
                        className: 'flex items-center gap-2',
                        children: [
                          (0, jsx_runtime.jsx)('span', {
                            className: 'text-muted-foreground',
                            children: 'Min Connections:',
                          }),
                          (0, jsx_runtime.jsx)('input', {
                            type: 'range',
                            min: '0',
                            max: '10',
                            value: selectedFilters.minConnections,
                            onChange: (e) => (
                              cov_toujfc8tz().f[51]++,
                              cov_toujfc8tz().s[177]++,
                              setSelectedFilters(
                                (prev) => (
                                  cov_toujfc8tz().f[52]++,
                                  cov_toujfc8tz().s[178]++,
                                  {
                                    ...prev,
                                    minConnections: Number(e.target.value),
                                  }
                                )
                              )
                            ),
                            className: 'w-20',
                          }),
                          (0, jsx_runtime.jsx)('span', {
                            className: 'w-6',
                            children: selectedFilters.minConnections,
                          }),
                        ],
                      }),
                      (0, jsx_runtime.jsxs)('label', {
                        className: 'flex items-center gap-1',
                        children: [
                          (0, jsx_runtime.jsx)('input', {
                            type: 'checkbox',
                            checked: selectedFilters.showHubs,
                            onChange: (e) => (
                              cov_toujfc8tz().f[53]++,
                              cov_toujfc8tz().s[179]++,
                              setSelectedFilters(
                                (prev) => (
                                  cov_toujfc8tz().f[54]++,
                                  cov_toujfc8tz().s[180]++,
                                  { ...prev, showHubs: e.target.checked }
                                )
                              )
                            ),
                          }),
                          'Show Hubs',
                        ],
                      }),
                      (0, jsx_runtime.jsxs)('label', {
                        className: 'flex items-center gap-1',
                        children: [
                          (0, jsx_runtime.jsx)('input', {
                            type: 'checkbox',
                            checked: selectedFilters.showIsolated,
                            onChange: (e) => (
                              cov_toujfc8tz().f[55]++,
                              cov_toujfc8tz().s[181]++,
                              setSelectedFilters(
                                (prev) => (
                                  cov_toujfc8tz().f[56]++,
                                  cov_toujfc8tz().s[182]++,
                                  { ...prev, showIsolated: e.target.checked }
                                )
                              )
                            ),
                          }),
                          'Show Isolated',
                        ],
                      }),
                      (0, jsx_runtime.jsxs)('div', {
                        className: 'text-muted-foreground ml-auto',
                        children: [
                          applyFilters(data.nodes, data.edges).length,
                          ' of',
                          ' ',
                          data.stats.totalNotes,
                          ' notes • Zoom: ',
                          Math.round(100 * zoom),
                          '%',
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (cov_toujfc8tz().b[48][0]++,
              showAnalytics &&
                (cov_toujfc8tz().b[48][1]++,
                (0, jsx_runtime.jsx)(card.Zp, {
                  className: 'p-4 mb-4',
                  children: (0, jsx_runtime.jsxs)('div', {
                    className: 'grid grid-cols-2 md:grid-cols-4 gap-4 text-sm',
                    children: [
                      (0, jsx_runtime.jsxs)('div', {
                        className: 'text-center',
                        children: [
                          (0, jsx_runtime.jsx)('div', {
                            className: 'text-2xl font-bold text-red-600',
                            children: analytics.hubs.size,
                          }),
                          (0, jsx_runtime.jsx)('div', {
                            className: 'text-muted-foreground',
                            children: 'Hub Notes',
                          }),
                        ],
                      }),
                      (0, jsx_runtime.jsxs)('div', {
                        className: 'text-center',
                        children: [
                          (0, jsx_runtime.jsx)('div', {
                            className: 'text-2xl font-bold text-gray-600',
                            children: analytics.isolated.size,
                          }),
                          (0, jsx_runtime.jsx)('div', {
                            className: 'text-muted-foreground',
                            children: 'Isolated Notes',
                          }),
                        ],
                      }),
                      (0, jsx_runtime.jsxs)('div', {
                        className: 'text-center',
                        children: [
                          (0, jsx_runtime.jsx)('div', {
                            className: 'text-2xl font-bold text-green-600',
                            children: data.stats.avgConnections.toFixed(1),
                          }),
                          (0, jsx_runtime.jsx)('div', {
                            className: 'text-muted-foreground',
                            children: 'Avg Connections',
                          }),
                        ],
                      }),
                      (0, jsx_runtime.jsxs)('div', {
                        className: 'text-center',
                        children: [
                          (0, jsx_runtime.jsx)('div', {
                            className: 'text-2xl font-bold text-purple-600',
                            children: data.stats.totalLinks,
                          }),
                          (0, jsx_runtime.jsx)('div', {
                            className: 'text-muted-foreground',
                            children: 'Total Links',
                          }),
                        ],
                      }),
                    ],
                  }),
                }))),
              (0, jsx_runtime.jsxs)('div', {
                ref: containerRef,
                className: 'flex-1 relative border rounded-lg bg-background',
                children: [
                  (0, jsx_runtime.jsx)('svg', {
                    ref: svgRef,
                    width: '100%',
                    height: '100%',
                    className: 'absolute inset-0',
                  }),
                  (cov_toujfc8tz().b[49][0]++,
                  0 === applyFilters(data.nodes, data.edges).length &&
                    (cov_toujfc8tz().b[49][1]++,
                    (0, jsx_runtime.jsx)('div', {
                      className:
                        'absolute inset-0 flex items-center justify-center text-muted-foreground',
                      children: (0, jsx_runtime.jsxs)('div', {
                        className: 'text-center',
                        children: [
                          (0, jsx_runtime.jsx)(filter.A, {
                            className: 'w-16 h-16 mx-auto mb-4 opacity-50',
                          }),
                          (0, jsx_runtime.jsx)('h3', {
                            className: 'text-lg font-medium mb-2',
                            children:
                              0 === data.nodes.length
                                ? (cov_toujfc8tz().b[50][0]++,
                                  'No notes to visualize')
                                : (cov_toujfc8tz().b[50][1]++,
                                  'No notes match current filters'),
                          }),
                          (0, jsx_runtime.jsx)('p', {
                            className: 'text-sm',
                            children:
                              0 === data.nodes.length
                                ? (cov_toujfc8tz().b[51][0]++,
                                  'Create some notes and link them together to see the knowledge graph.')
                                : (cov_toujfc8tz().b[51][1]++,
                                  'Try adjusting the filters or search terms to see more notes.'),
                          }),
                        ],
                      }),
                    }))),
                ],
              }),
            ],
          })
        )
      }
      ;(cov_toujfc8tz(),
        cov_toujfc8tz().s[183]++,
        (GraphVisualization.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'GraphVisualization',
          props: {
            data: {
              required: !0,
              tsType: { name: 'GraphData' },
              description: '',
            },
            onNodeClick: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(nodeId: string) => void',
                signature: {
                  arguments: [{ type: { name: 'string' }, name: 'nodeId' }],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            className: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
              defaultValue: { value: "''", computed: !1 },
            },
          },
        }))
      var dist = __webpack_require__(
          '../../node_modules/.pnpm/@storybook+test@8.6.14_storybook@9.0.18_@testing-library+dom@10.4.0_prettier@3.6.2_/node_modules/@storybook/test/dist/index.mjs'
        ),
        console = __webpack_require__(
          '../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js'
        )
      function transformEdges(edges) {
        return edges.map((edge) => ({
          ...edge,
          source: edge.from,
          target: edge.to,
        }))
      }
      const graph_visualization_stories = {
          title: 'UI/Visualization/GraphVisualization',
          component: GraphVisualization,
          parameters: { layout: 'fullscreen' },
          tags: ['autodocs'],
          argTypes: {
            data: {
              control: 'object',
              description: 'Graph data containing nodes and edges',
            },
            onNodeClick: {
              action: 'onNodeClick',
              description: 'Callback when a node is clicked',
            },
            className: {
              control: 'text',
              description: 'Additional CSS classes',
            },
          },
          decorators: [
            (Story) =>
              (0, jsx_runtime.jsx)('div', {
                className: 'h-screen p-4 bg-background',
                children: (0, jsx_runtime.jsx)(Story, {}),
              }),
          ],
        },
        generateSampleData = (nodeCount = 20, edgeCount = 30, isolated = 2) => {
          const nodes = Array.from({ length: nodeCount }, (_, i) => {
              const connections =
                  i < isolated ? 0 : Math.floor(10 * Math.random()) + 1,
                createdDate = new Date(
                  Date.now() - 180 * Math.random() * 24 * 60 * 60 * 1e3
                ),
                updatedDate = new Date(
                  createdDate.getTime() +
                    30 * Math.random() * 24 * 60 * 60 * 1e3
                )
              return {
                id: `node-${i}`,
                label: `Note ${i + 1}`,
                title: `Note Title ${i + 1}`,
                created_at: createdDate.toISOString(),
                updated_at: updatedDate.toISOString(),
                connections,
                tags:
                  i % 3 == 0
                    ? ['work', 'project']
                    : i % 3 == 1
                      ? ['personal']
                      : ['research'],
                centrality: connections / 10,
                clusterId: Math.floor(i / 5),
              }
            }),
            edges = []
          for (let i = 0; i < edgeCount; i++) {
            const fromIdx =
                Math.floor(Math.random() * (nodeCount - isolated)) + isolated,
              toIdx =
                Math.floor(Math.random() * (nodeCount - isolated)) + isolated
            fromIdx !== toIdx &&
              edges.push({
                from: `node-${fromIdx}`,
                to: `node-${toIdx}`,
                label: `Link ${i + 1}`,
                title: `Connection between Note ${fromIdx + 1} and Note ${toIdx + 1}`,
              })
          }
          nodes.forEach((node) => {
            node.connections = edges.filter(
              (edge) => edge.from === node.id || edge.to === node.id
            ).length
          })
          const avgConnections =
            nodes.reduce((sum, node) => sum + node.connections, 0) /
            nodes.length
          return {
            nodes,
            edges: transformEdges(edges),
            stats: {
              totalNotes: nodes.length,
              totalLinks: edges.length,
              avgConnections: parseFloat(avgConnections.toFixed(2)),
            },
          }
        },
        smallGraph = generateSampleData(10, 12, 1),
        mediumGraph = generateSampleData(30, 50, 3),
        largeGraph = generateSampleData(100, 200, 10),
        knowledgeBaseData = {
          nodes: [
            {
              id: 'ai',
              label: 'Artificial Intelligence',
              title: 'AI Overview',
              created_at: new Date('2024-01-01').toISOString(),
              updated_at: new Date('2024-03-01').toISOString(),
              connections: 8,
              tags: ['technology', 'ai'],
              centrality: 0.9,
            },
            {
              id: 'ml',
              label: 'Machine Learning',
              title: 'ML Fundamentals',
              created_at: new Date('2024-01-05').toISOString(),
              updated_at: new Date('2024-02-20').toISOString(),
              connections: 6,
              tags: ['technology', 'ml'],
              centrality: 0.8,
            },
            {
              id: 'dl',
              label: 'Deep Learning',
              title: 'Deep Learning Concepts',
              created_at: new Date('2024-01-10').toISOString(),
              updated_at: new Date('2024-02-15').toISOString(),
              connections: 4,
              tags: ['technology', 'dl'],
              centrality: 0.6,
            },
            {
              id: 'nlp',
              label: 'Natural Language Processing',
              title: 'NLP Techniques',
              created_at: new Date('2024-01-15').toISOString(),
              updated_at: new Date('2024-02-10').toISOString(),
              connections: 3,
              tags: ['technology', 'nlp'],
              centrality: 0.5,
            },
            {
              id: 'cv',
              label: 'Computer Vision',
              title: 'CV Applications',
              created_at: new Date('2024-01-20').toISOString(),
              updated_at: new Date('2024-02-05').toISOString(),
              connections: 3,
              tags: ['technology', 'cv'],
              centrality: 0.5,
            },
            {
              id: 'transformers',
              label: 'Transformers',
              title: 'Transformer Architecture',
              created_at: new Date('2024-02-01').toISOString(),
              updated_at: new Date('2024-03-10').toISOString(),
              connections: 2,
              tags: ['architecture'],
              centrality: 0.4,
            },
            {
              id: 'cnn',
              label: 'CNNs',
              title: 'Convolutional Neural Networks',
              created_at: new Date('2024-02-05').toISOString(),
              updated_at: new Date('2024-03-05').toISOString(),
              connections: 2,
              tags: ['architecture'],
              centrality: 0.4,
            },
            {
              id: 'ethics',
              label: 'AI Ethics',
              title: 'Ethical Considerations',
              created_at: new Date('2024-02-10').toISOString(),
              updated_at: new Date('2024-03-01').toISOString(),
              connections: 2,
              tags: ['ethics', 'philosophy'],
              centrality: 0.3,
            },
            {
              id: 'quantum',
              label: 'Quantum Computing',
              title: 'Quantum ML',
              created_at: new Date('2024-03-01').toISOString(),
              updated_at: new Date('2024-03-15').toISOString(),
              connections: 0,
              tags: ['quantum'],
              centrality: 0,
            },
            {
              id: 'robotics',
              label: 'Robotics',
              title: 'AI in Robotics',
              created_at: new Date('2024-03-05').toISOString(),
              updated_at: new Date('2024-03-10').toISOString(),
              connections: 0,
              tags: ['robotics'],
              centrality: 0,
            },
          ],
          edges: transformEdges([
            {
              from: 'ai',
              to: 'ml',
              label: 'is implemented through',
              title: 'AI-ML Connection',
            },
            {
              from: 'ai',
              to: 'dl',
              label: 'includes',
              title: 'AI-DL Connection',
            },
            {
              from: 'ai',
              to: 'nlp',
              label: 'applied in',
              title: 'AI-NLP Connection',
            },
            {
              from: 'ai',
              to: 'cv',
              label: 'applied in',
              title: 'AI-CV Connection',
            },
            {
              from: 'ai',
              to: 'ethics',
              label: 'considers',
              title: 'AI-Ethics Connection',
            },
            {
              from: 'ml',
              to: 'dl',
              label: 'subset',
              title: 'ML-DL Connection',
            },
            {
              from: 'ml',
              to: 'nlp',
              label: 'enables',
              title: 'ML-NLP Connection',
            },
            {
              from: 'ml',
              to: 'cv',
              label: 'enables',
              title: 'ML-CV Connection',
            },
            {
              from: 'dl',
              to: 'transformers',
              label: 'uses',
              title: 'DL-Transformers Connection',
            },
            {
              from: 'dl',
              to: 'cnn',
              label: 'uses',
              title: 'DL-CNN Connection',
            },
            {
              from: 'nlp',
              to: 'transformers',
              label: 'revolutionized by',
              title: 'NLP-Transformers Connection',
            },
            {
              from: 'cv',
              to: 'cnn',
              label: 'primarily uses',
              title: 'CV-CNN Connection',
            },
            {
              from: 'ethics',
              to: 'ml',
              label: 'guides',
              title: 'Ethics-ML Connection',
            },
          ]),
          stats: { totalNotes: 10, totalLinks: 13, avgConnections: 2.6 },
        },
        projectPlanningData = {
          nodes: [
            {
              id: 'project',
              label: 'Project Alpha',
              title: 'Main Project Overview',
              created_at: new Date('2024-01-01').toISOString(),
              updated_at: new Date('2024-03-20').toISOString(),
              connections: 6,
              tags: ['project', 'main'],
              centrality: 1,
            },
            {
              id: 'requirements',
              label: 'Requirements',
              title: 'Project Requirements',
              created_at: new Date('2024-01-02').toISOString(),
              updated_at: new Date('2024-01-15').toISOString(),
              connections: 3,
              tags: ['planning'],
              centrality: 0.7,
            },
            {
              id: 'design',
              label: 'Design Specs',
              title: 'Design Specifications',
              created_at: new Date('2024-01-10').toISOString(),
              updated_at: new Date('2024-02-01').toISOString(),
              connections: 4,
              tags: ['design'],
              centrality: 0.8,
            },
            {
              id: 'frontend',
              label: 'Frontend Tasks',
              title: 'Frontend Development',
              created_at: new Date('2024-01-20').toISOString(),
              updated_at: new Date('2024-03-01').toISOString(),
              connections: 3,
              tags: ['development', 'frontend'],
              centrality: 0.6,
            },
            {
              id: 'backend',
              label: 'Backend Tasks',
              title: 'Backend Development',
              created_at: new Date('2024-01-20').toISOString(),
              updated_at: new Date('2024-03-05').toISOString(),
              connections: 3,
              tags: ['development', 'backend'],
              centrality: 0.6,
            },
            {
              id: 'testing',
              label: 'Testing Plan',
              title: 'QA and Testing',
              created_at: new Date('2024-02-15').toISOString(),
              updated_at: new Date('2024-03-10').toISOString(),
              connections: 3,
              tags: ['qa', 'testing'],
              centrality: 0.5,
            },
            {
              id: 'deployment',
              label: 'Deployment',
              title: 'Deployment Strategy',
              created_at: new Date('2024-03-01').toISOString(),
              updated_at: new Date('2024-03-15').toISOString(),
              connections: 2,
              tags: ['deployment'],
              centrality: 0.4,
            },
            {
              id: 'meeting1',
              label: 'Kickoff Meeting',
              title: 'Project Kickoff',
              created_at: new Date('2024-01-01').toISOString(),
              updated_at: new Date('2024-01-01').toISOString(),
              connections: 1,
              tags: ['meeting'],
              centrality: 0.2,
            },
            {
              id: 'api-docs',
              label: 'API Documentation',
              title: 'API Docs',
              created_at: new Date('2024-02-10').toISOString(),
              updated_at: new Date('2024-03-01').toISOString(),
              connections: 2,
              tags: ['docs'],
              centrality: 0.3,
            },
          ],
          edges: transformEdges([
            {
              from: 'project',
              to: 'requirements',
              label: 'defines',
              title: 'Project Requirements',
            },
            {
              from: 'project',
              to: 'design',
              label: 'guides',
              title: 'Project Design',
            },
            {
              from: 'project',
              to: 'meeting1',
              label: 'started with',
              title: 'Kickoff',
            },
            {
              from: 'requirements',
              to: 'design',
              label: 'informs',
              title: 'Requirements to Design',
            },
            {
              from: 'requirements',
              to: 'testing',
              label: 'validates',
              title: 'Requirements Testing',
            },
            {
              from: 'design',
              to: 'frontend',
              label: 'implemented by',
              title: 'Design to Frontend',
            },
            {
              from: 'design',
              to: 'backend',
              label: 'implemented by',
              title: 'Design to Backend',
            },
            {
              from: 'frontend',
              to: 'testing',
              label: 'verified by',
              title: 'Frontend Testing',
            },
            {
              from: 'backend',
              to: 'testing',
              label: 'verified by',
              title: 'Backend Testing',
            },
            {
              from: 'backend',
              to: 'api-docs',
              label: 'documented in',
              title: 'API Documentation',
            },
            {
              from: 'frontend',
              to: 'deployment',
              label: 'deployed via',
              title: 'Frontend Deploy',
            },
            {
              from: 'backend',
              to: 'deployment',
              label: 'deployed via',
              title: 'Backend Deploy',
            },
            {
              from: 'api-docs',
              to: 'frontend',
              label: 'used by',
              title: 'API Usage',
            },
          ]),
          stats: { totalNotes: 9, totalLinks: 13, avgConnections: 2.9 },
        },
        Default = { args: { data: mediumGraph } },
        SmallGraph = { args: { data: smallGraph } },
        LargeGraph = { args: { data: largeGraph } },
        KnowledgeBase = { args: { data: knowledgeBaseData } },
        ProjectPlanning = { args: { data: projectPlanningData } },
        EmptyGraph = {
          args: {
            data: {
              nodes: [],
              edges: [],
              stats: { totalNotes: 0, totalLinks: 0, avgConnections: 0 },
            },
          },
        },
        SingleNode = {
          args: {
            data: {
              nodes: [
                {
                  id: 'single',
                  label: 'Lonely Note',
                  title: 'A Single Note',
                  created_at: new Date().toISOString(),
                  updated_at: new Date().toISOString(),
                  connections: 0,
                  tags: ['isolated'],
                  centrality: 0,
                },
              ],
              edges: [],
              stats: { totalNotes: 1, totalLinks: 0, avgConnections: 0 },
            },
          },
        },
        SearchInteraction = {
          args: { data: knowledgeBaseData },
          play: async ({ canvasElement }) => {
            const canvas = (0, dist.ux)(canvasElement)
            await (0, dist.fm)(() => {
              ;(0, dist.E3)(
                canvas.getByPlaceholderText('Search notes...')
              ).toBeInTheDocument()
            })
            const searchInput = canvas.getByPlaceholderText('Search notes...')
            ;(await dist.Q4.type(searchInput, 'Machine'),
              await (0, dist.E3)(searchInput).toHaveValue('Machine'),
              await dist.Q4.clear(searchInput),
              await dist.Q4.type(searchInput, 'Ethics'),
              await (0, dist.E3)(searchInput).toHaveValue('Ethics'))
          },
        },
        LayoutSwitching = {
          args: { data: knowledgeBaseData },
          play: async ({ canvasElement }) => {
            const canvas = (0, dist.ux)(canvasElement)
            await (0, dist.fm)(() => {
              ;(0, dist.E3)(
                canvas.getByDisplayValue('force')
              ).toBeInTheDocument()
            })
            const layoutSelect = canvas.getByDisplayValue('force')
            ;(await dist.Q4.selectOptions(layoutSelect, 'circular'),
              await (0, dist.E3)(layoutSelect).toHaveValue('circular'),
              await dist.Q4.selectOptions(layoutSelect, 'hierarchical'),
              await (0, dist.E3)(layoutSelect).toHaveValue('hierarchical'),
              await dist.Q4.selectOptions(layoutSelect, 'radial'),
              await (0, dist.E3)(layoutSelect).toHaveValue('radial'))
          },
        },
        ColoringOptions = {
          args: { data: knowledgeBaseData },
          play: async ({ canvasElement }) => {
            const canvas = (0, dist.ux)(canvasElement)
            await (0, dist.fm)(() => {
              ;(0, dist.E3)(
                canvas.getByDisplayValue('connections')
              ).toBeInTheDocument()
            })
            const colorSelect = canvas.getByDisplayValue('connections')
            ;(await dist.Q4.selectOptions(colorSelect, 'date'),
              await (0, dist.E3)(colorSelect).toHaveValue('date'),
              await dist.Q4.selectOptions(colorSelect, 'cluster'),
              await (0, dist.E3)(colorSelect).toHaveValue('cluster'))
          },
        },
        FilterInteraction = {
          args: { data: largeGraph },
          play: async ({ canvasElement }) => {
            const canvas = (0, dist.ux)(canvasElement)
            await (0, dist.fm)(() => {
              ;(0, dist.E3)(canvas.getByText('Date:')).toBeInTheDocument()
            })
            const dateSelect = canvas.getByDisplayValue('all')
            await dist.Q4.selectOptions(dateSelect, '30days')
            const minConnectionsSlider = canvas.getByRole('slider')
            await dist.Q4.click(minConnectionsSlider)
            const showHubsCheckbox = canvas.getByLabelText('Show Hubs')
            ;(await dist.Q4.click(showHubsCheckbox),
              await (0, dist.E3)(showHubsCheckbox).not.toBeChecked())
            const showIsolatedCheckbox = canvas.getByLabelText('Show Isolated')
            ;(await dist.Q4.click(showIsolatedCheckbox),
              await (0, dist.E3)(showIsolatedCheckbox).not.toBeChecked())
          },
        },
        AnalyticsPanel = {
          args: { data: largeGraph },
          play: async ({ canvasElement }) => {
            const canvas = (0, dist.ux)(canvasElement),
              analyticsButton = canvas.getByRole('button', {
                name: /Analytics/,
              })
            ;(await dist.Q4.click(analyticsButton),
              await (0, dist.fm)(() => {
                ;((0, dist.E3)(
                  canvas.getByText('Hub Notes')
                ).toBeInTheDocument(),
                  (0, dist.E3)(
                    canvas.getByText('Isolated Notes')
                  ).toBeInTheDocument(),
                  (0, dist.E3)(
                    canvas.getByText('Avg Connections')
                  ).toBeInTheDocument(),
                  (0, dist.E3)(
                    canvas.getByText('Total Links')
                  ).toBeInTheDocument())
              }),
              await dist.Q4.click(analyticsButton))
          },
        },
        ZoomControls = {
          args: { data: mediumGraph },
          play: async ({ canvasElement }) => {
            const canvas = (0, dist.ux)(canvasElement),
              zoomInButton = canvas.getByRole('button', { name: /zoom in/i }),
              zoomOutButton = canvas.getByRole('button', { name: /zoom out/i }),
              resetButton = canvas.getByRole('button', { name: /rotate/i })
            ;(await dist.Q4.click(zoomInButton),
              await (0, dist.fm)(() => {
                ;(0, dist.E3)(canvas.getByText(/150%/)).toBeInTheDocument()
              }),
              await dist.Q4.click(zoomOutButton),
              await (0, dist.fm)(() => {
                ;(0, dist.E3)(canvas.getByText(/100%/)).toBeInTheDocument()
              }),
              await dist.Q4.click(resetButton))
          },
        },
        NodeInteraction = {
          args: {
            data: knowledgeBaseData,
            onNodeClick: (nodeId) => console.info(`Clicked node: ${nodeId}`),
          },
          play: async ({ canvasElement }) => {
            const canvas = (0, dist.ux)(canvasElement)
            await (0, dist.fm)(() => {
              const svg = canvas.getByRole('img', { hidden: !0 })
              ;(0, dist.E3)(svg).toBeInTheDocument()
            })
          },
        },
        RealTimeData = {
          args: { data: generateSampleData(20, 30, 2) },
          render: () => {
            const [data, setData] = react.useState(
              generateSampleData(20, 30, 2)
            )
            return (
              react.useEffect(() => {
                const interval = setInterval(() => {
                  setData((prevData) => {
                    if (Math.random() > 0.7 && prevData.nodes.length < 30) {
                      const newNode = {
                          id: `node-${Date.now()}`,
                          label: `New Note ${prevData.nodes.length + 1}`,
                          title: 'Dynamically Added Note',
                          created_at: new Date().toISOString(),
                          updated_at: new Date().toISOString(),
                          connections: 0,
                          tags: ['dynamic'],
                          centrality: 0,
                        },
                        randomNode =
                          prevData.nodes[
                            Math.floor(Math.random() * prevData.nodes.length)
                          ],
                        newEdge = {
                          from: newNode.id,
                          to: randomNode.id,
                          label: 'New Connection',
                          title: 'Dynamic Connection',
                        }
                      return {
                        nodes: [...prevData.nodes, newNode],
                        edges: [
                          ...prevData.edges,
                          {
                            ...newEdge,
                            source: newEdge.from,
                            target: newEdge.to,
                          },
                        ],
                        stats: {
                          totalNotes: prevData.nodes.length + 1,
                          totalLinks: prevData.edges.length + 1,
                          avgConnections:
                            (prevData.stats.avgConnections *
                              prevData.nodes.length +
                              2) /
                            (prevData.nodes.length + 1),
                        },
                      }
                    }
                    return prevData
                  })
                }, 3e3)
                return () => clearInterval(interval)
              }, []),
              (0, jsx_runtime.jsx)(GraphVisualization, { data })
            )
          },
        },
        DenseNetwork = {
          args: {
            data: (() => {
              const nodes = Array.from({ length: 50 }, (_, i) => ({
                  id: `node-${i}`,
                  label: `N${i}`,
                  title: `Node ${i}`,
                  created_at: new Date(
                    Date.now() - 365 * Math.random() * 24 * 60 * 60 * 1e3
                  ).toISOString(),
                  updated_at: new Date().toISOString(),
                  connections: 0,
                  tags: ['group-' + (i % 5)],
                  centrality: 0,
                })),
                edges = []
              for (let i = 0; i < 50; i++) {
                const connectionCount = Math.floor(6 * Math.random()) + 3
                for (let j = 0; j < connectionCount; j++) {
                  const target = Math.floor(50 * Math.random())
                  target !== i &&
                    edges.push({
                      from: `node-${i}`,
                      to: `node-${target}`,
                      label: `E${edges.length}`,
                      title: `Edge ${edges.length}`,
                    })
                }
              }
              return (
                nodes.forEach((node) => {
                  node.connections = edges.filter(
                    (edge) => edge.from === node.id || edge.to === node.id
                  ).length
                }),
                {
                  nodes,
                  edges: transformEdges(edges),
                  stats: {
                    totalNotes: nodes.length,
                    totalLinks: edges.length,
                    avgConnections: (2 * edges.length) / nodes.length,
                  },
                }
              )
            })(),
          },
        },
        MobileResponsive = {
          parameters: { viewport: { defaultViewport: 'mobile1' } },
          args: { data: smallGraph },
        },
        TabletResponsive = {
          parameters: { viewport: { defaultViewport: 'tablet' } },
          args: { data: mediumGraph },
        },
        __namedExportsOrder = [
          'Default',
          'SmallGraph',
          'LargeGraph',
          'KnowledgeBase',
          'ProjectPlanning',
          'EmptyGraph',
          'SingleNode',
          'SearchInteraction',
          'LayoutSwitching',
          'ColoringOptions',
          'FilterInteraction',
          'AnalyticsPanel',
          'ZoomControls',
          'NodeInteraction',
          'RealTimeData',
          'DenseNetwork',
          'MobileResponsive',
          'TabletResponsive',
        ]
      ;((Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: '{\n  args: {\n    data: mediumGraph\n  }\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (SmallGraph.parameters = {
          ...SmallGraph.parameters,
          docs: {
            ...SmallGraph.parameters?.docs,
            source: {
              originalSource: '{\n  args: {\n    data: smallGraph\n  }\n}',
              ...SmallGraph.parameters?.docs?.source,
            },
          },
        }),
        (LargeGraph.parameters = {
          ...LargeGraph.parameters,
          docs: {
            ...LargeGraph.parameters?.docs,
            source: {
              originalSource: '{\n  args: {\n    data: largeGraph\n  }\n}',
              ...LargeGraph.parameters?.docs?.source,
            },
          },
        }),
        (KnowledgeBase.parameters = {
          ...KnowledgeBase.parameters,
          docs: {
            ...KnowledgeBase.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    data: knowledgeBaseData\n  }\n}',
              ...KnowledgeBase.parameters?.docs?.source,
            },
          },
        }),
        (ProjectPlanning.parameters = {
          ...ProjectPlanning.parameters,
          docs: {
            ...ProjectPlanning.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    data: projectPlanningData\n  }\n}',
              ...ProjectPlanning.parameters?.docs?.source,
            },
          },
        }),
        (EmptyGraph.parameters = {
          ...EmptyGraph.parameters,
          docs: {
            ...EmptyGraph.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    data: {\n      nodes: [],\n      edges: [],\n      stats: {\n        totalNotes: 0,\n        totalLinks: 0,\n        avgConnections: 0\n      }\n    }\n  }\n}',
              ...EmptyGraph.parameters?.docs?.source,
            },
          },
        }),
        (SingleNode.parameters = {
          ...SingleNode.parameters,
          docs: {
            ...SingleNode.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    data: {\n      nodes: [{\n        id: 'single',\n        label: 'Lonely Note',\n        title: 'A Single Note',\n        created_at: new Date().toISOString(),\n        updated_at: new Date().toISOString(),\n        connections: 0,\n        tags: ['isolated'],\n        centrality: 0\n      }],\n      edges: [],\n      stats: {\n        totalNotes: 1,\n        totalLinks: 0,\n        avgConnections: 0\n      }\n    }\n  }\n}",
              ...SingleNode.parameters?.docs?.source,
            },
          },
        }),
        (SearchInteraction.parameters = {
          ...SearchInteraction.parameters,
          docs: {
            ...SearchInteraction.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    data: knowledgeBaseData\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for graph to render\n    await waitFor(() => {\n      expect(canvas.getByPlaceholderText('Search notes...')).toBeInTheDocument();\n    });\n\n    // Search for \"Machine\"\n    const searchInput = canvas.getByPlaceholderText('Search notes...');\n    await userEvent.type(searchInput, 'Machine');\n\n    // Should filter nodes (visual verification needed)\n    await expect(searchInput).toHaveValue('Machine');\n\n    // Clear search\n    await userEvent.clear(searchInput);\n    await userEvent.type(searchInput, 'Ethics');\n\n    // Should show Ethics node\n    await expect(searchInput).toHaveValue('Ethics');\n  }\n}",
              ...SearchInteraction.parameters?.docs?.source,
            },
          },
        }),
        (LayoutSwitching.parameters = {
          ...LayoutSwitching.parameters,
          docs: {
            ...LayoutSwitching.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    data: knowledgeBaseData\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for graph\n    await waitFor(() => {\n      expect(canvas.getByDisplayValue('force')).toBeInTheDocument();\n    });\n\n    // Switch to circular layout\n    const layoutSelect = canvas.getByDisplayValue('force');\n    await userEvent.selectOptions(layoutSelect, 'circular');\n    await expect(layoutSelect).toHaveValue('circular');\n\n    // Switch to hierarchical\n    await userEvent.selectOptions(layoutSelect, 'hierarchical');\n    await expect(layoutSelect).toHaveValue('hierarchical');\n\n    // Switch to radial\n    await userEvent.selectOptions(layoutSelect, 'radial');\n    await expect(layoutSelect).toHaveValue('radial');\n  }\n}",
              ...LayoutSwitching.parameters?.docs?.source,
            },
          },
        }),
        (ColoringOptions.parameters = {
          ...ColoringOptions.parameters,
          docs: {
            ...ColoringOptions.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    data: knowledgeBaseData\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for graph\n    await waitFor(() => {\n      expect(canvas.getByDisplayValue('connections')).toBeInTheDocument();\n    });\n\n    // Switch coloring modes\n    const colorSelect = canvas.getByDisplayValue('connections');\n    await userEvent.selectOptions(colorSelect, 'date');\n    await expect(colorSelect).toHaveValue('date');\n    await userEvent.selectOptions(colorSelect, 'cluster');\n    await expect(colorSelect).toHaveValue('cluster');\n  }\n}",
              ...ColoringOptions.parameters?.docs?.source,
            },
          },
        }),
        (FilterInteraction.parameters = {
          ...FilterInteraction.parameters,
          docs: {
            ...FilterInteraction.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    data: largeGraph\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for graph\n    await waitFor(() => {\n      expect(canvas.getByText('Date:')).toBeInTheDocument();\n    });\n\n    // Change date filter\n    const dateSelect = canvas.getByDisplayValue('all');\n    await userEvent.selectOptions(dateSelect, '30days');\n\n    // Adjust minimum connections\n    const minConnectionsSlider = canvas.getByRole('slider');\n    await userEvent.click(minConnectionsSlider);\n\n    // Toggle hub visibility\n    const showHubsCheckbox = canvas.getByLabelText('Show Hubs');\n    await userEvent.click(showHubsCheckbox);\n    await expect(showHubsCheckbox).not.toBeChecked();\n\n    // Toggle isolated nodes\n    const showIsolatedCheckbox = canvas.getByLabelText('Show Isolated');\n    await userEvent.click(showIsolatedCheckbox);\n    await expect(showIsolatedCheckbox).not.toBeChecked();\n  }\n}",
              ...FilterInteraction.parameters?.docs?.source,
            },
          },
        }),
        (AnalyticsPanel.parameters = {
          ...AnalyticsPanel.parameters,
          docs: {
            ...AnalyticsPanel.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    data: largeGraph\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Toggle analytics\n    const analyticsButton = canvas.getByRole('button', {\n      name: /Analytics/\n    });\n    await userEvent.click(analyticsButton);\n\n    // Should show analytics panel\n    await waitFor(() => {\n      expect(canvas.getByText('Hub Notes')).toBeInTheDocument();\n      expect(canvas.getByText('Isolated Notes')).toBeInTheDocument();\n      expect(canvas.getByText('Avg Connections')).toBeInTheDocument();\n      expect(canvas.getByText('Total Links')).toBeInTheDocument();\n    });\n\n    // Toggle off\n    await userEvent.click(analyticsButton);\n  }\n}",
              ...AnalyticsPanel.parameters?.docs?.source,
            },
          },
        }),
        (ZoomControls.parameters = {
          ...ZoomControls.parameters,
          docs: {
            ...ZoomControls.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    data: mediumGraph\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Find zoom controls\n    const zoomInButton = canvas.getByRole('button', {\n      name: /zoom in/i\n    });\n    const zoomOutButton = canvas.getByRole('button', {\n      name: /zoom out/i\n    });\n    const resetButton = canvas.getByRole('button', {\n      name: /rotate/i\n    });\n\n    // Test zoom in\n    await userEvent.click(zoomInButton);\n    await waitFor(() => {\n      expect(canvas.getByText(/150%/)).toBeInTheDocument();\n    });\n\n    // Test zoom out\n    await userEvent.click(zoomOutButton);\n    await waitFor(() => {\n      expect(canvas.getByText(/100%/)).toBeInTheDocument();\n    });\n\n    // Test reset\n    await userEvent.click(resetButton);\n  }\n}",
              ...ZoomControls.parameters?.docs?.source,
            },
          },
        }),
        (NodeInteraction.parameters = {
          ...NodeInteraction.parameters,
          docs: {
            ...NodeInteraction.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    data: knowledgeBaseData,\n    onNodeClick: (nodeId: string) => console.info(`Clicked node: ${nodeId}`)\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Wait for SVG to render\n    await waitFor(() => {\n      const svg = canvas.getByRole('img', {\n        hidden: true\n      });\n      expect(svg).toBeInTheDocument();\n    });\n\n    // Note: Actual node clicking would require more complex SVG interaction\n    // This test verifies the graph renders and is ready for interaction\n  }\n}",
              ...NodeInteraction.parameters?.docs?.source,
            },
          },
        }),
        (RealTimeData.parameters = {
          ...RealTimeData.parameters,
          docs: {
            ...RealTimeData.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    data: generateSampleData(20, 30, 2)\n  },\n  render: () => {\n    const [data, setData] = React.useState(generateSampleData(20, 30, 2));\n    React.useEffect(() => {\n      const interval = setInterval(() => {\n        setData(prevData => {\n          // Add a new node occasionally\n          if (Math.random() > 0.7 && prevData.nodes.length < 30) {\n            const newNode = {\n              id: `node-${Date.now()}`,\n              label: `New Note ${prevData.nodes.length + 1}`,\n              title: `Dynamically Added Note`,\n              created_at: new Date().toISOString(),\n              updated_at: new Date().toISOString(),\n              connections: 0,\n              tags: ['dynamic'],\n              centrality: 0\n            };\n\n            // Add a connection to existing node\n            const randomNode = prevData.nodes[Math.floor(Math.random() * prevData.nodes.length)];\n            const newEdge = {\n              from: newNode.id,\n              to: randomNode.id,\n              label: 'New Connection',\n              title: 'Dynamic Connection'\n            };\n            return {\n              nodes: [...prevData.nodes, newNode],\n              edges: [...prevData.edges, {\n                ...newEdge,\n                source: newEdge.from,\n                target: newEdge.to\n              }],\n              stats: {\n                totalNotes: prevData.nodes.length + 1,\n                totalLinks: prevData.edges.length + 1,\n                avgConnections: (prevData.stats.avgConnections * prevData.nodes.length + 2) / (prevData.nodes.length + 1)\n              }\n            };\n          }\n          return prevData;\n        });\n      }, 3000);\n      return () => clearInterval(interval);\n    }, []);\n    return <GraphVisualization data={data} />;\n  }\n}",
              ...RealTimeData.parameters?.docs?.source,
            },
          },
        }),
        (DenseNetwork.parameters = {
          ...DenseNetwork.parameters,
          docs: {
            ...DenseNetwork.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    data: (() => {\n      const nodeCount = 50;\n      const nodes = Array.from({\n        length: nodeCount\n      }, (_, i) => ({\n        id: `node-${i}`,\n        label: `N${i}`,\n        title: `Node ${i}`,\n        created_at: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toISOString(),\n        updated_at: new Date().toISOString(),\n        connections: 0,\n        tags: [`group-${i % 5}`],\n        centrality: 0\n      }));\n\n      // Create a highly connected network\n      const edges: any[] = [];\n      for (let i = 0; i < nodeCount; i++) {\n        // Connect to 3-8 random nodes\n        const connectionCount = Math.floor(Math.random() * 6) + 3;\n        for (let j = 0; j < connectionCount; j++) {\n          const target = Math.floor(Math.random() * nodeCount);\n          if (target !== i) {\n            edges.push({\n              from: `node-${i}`,\n              to: `node-${target}`,\n              label: `E${edges.length}`,\n              title: `Edge ${edges.length}`\n            });\n          }\n        }\n      }\n\n      // Update connection counts\n      nodes.forEach(node => {\n        node.connections = edges.filter(edge => edge.from === node.id || edge.to === node.id).length;\n      });\n      return {\n        nodes,\n        edges: transformEdges(edges),\n        stats: {\n          totalNotes: nodes.length,\n          totalLinks: edges.length,\n          avgConnections: edges.length * 2 / nodes.length\n        }\n      };\n    })()\n  }\n}',
              ...DenseNetwork.parameters?.docs?.source,
            },
          },
        }),
        (MobileResponsive.parameters = {
          ...MobileResponsive.parameters,
          docs: {
            ...MobileResponsive.parameters?.docs,
            source: {
              originalSource:
                "{\n  parameters: {\n    viewport: {\n      defaultViewport: 'mobile1'\n    }\n  },\n  args: {\n    data: smallGraph\n  }\n}",
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
                "{\n  parameters: {\n    viewport: {\n      defaultViewport: 'tablet'\n    }\n  },\n  args: {\n    data: mediumGraph\n  }\n}",
              ...TabletResponsive.parameters?.docs?.source,
            },
          },
        }))
    },
  },
])
