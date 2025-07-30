;(() => {
  'use strict'
  var deferred,
    leafPrototypes,
    getProto,
    inProgress,
    __webpack_modules__ = {},
    __webpack_module_cache__ = {}
  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId]
    if (void 0 !== cachedModule) return cachedModule.exports
    var module = (__webpack_module_cache__[moduleId] = {
      id: moduleId,
      loaded: !1,
      exports: {},
    })
    return (
      __webpack_modules__[moduleId](
        module,
        module.exports,
        __webpack_require__
      ),
      (module.loaded = !0),
      module.exports
    )
  }
  ;((__webpack_require__.m = __webpack_modules__),
    (__webpack_require__.amdO = {}),
    (deferred = []),
    (__webpack_require__.O = (result, chunkIds, fn, priority) => {
      if (!chunkIds) {
        var notFulfilled = 1 / 0
        for (i = 0; i < deferred.length; i++) {
          for (
            var [chunkIds, fn, priority] = deferred[i], fulfilled = !0, j = 0;
            j < chunkIds.length;
            j++
          )
            (!1 & priority || notFulfilled >= priority) &&
            Object.keys(__webpack_require__.O).every((key) =>
              __webpack_require__.O[key](chunkIds[j])
            )
              ? chunkIds.splice(j--, 1)
              : ((fulfilled = !1),
                priority < notFulfilled && (notFulfilled = priority))
          if (fulfilled) {
            deferred.splice(i--, 1)
            var r = fn()
            void 0 !== r && (result = r)
          }
        }
        return result
      }
      priority = priority || 0
      for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--)
        deferred[i] = deferred[i - 1]
      deferred[i] = [chunkIds, fn, priority]
    }),
    (__webpack_require__.n = (module) => {
      var getter =
        module && module.__esModule ? () => module.default : () => module
      return (__webpack_require__.d(getter, { a: getter }), getter)
    }),
    (getProto = Object.getPrototypeOf
      ? (obj) => Object.getPrototypeOf(obj)
      : (obj) => obj.__proto__),
    (__webpack_require__.t = function (value, mode) {
      if ((1 & mode && (value = this(value)), 8 & mode)) return value
      if ('object' == typeof value && value) {
        if (4 & mode && value.__esModule) return value
        if (16 & mode && 'function' == typeof value.then) return value
      }
      var ns = Object.create(null)
      __webpack_require__.r(ns)
      var def = {}
      leafPrototypes = leafPrototypes || [
        null,
        getProto({}),
        getProto([]),
        getProto(getProto),
      ]
      for (
        var current = 2 & mode && value;
        'object' == typeof current && !~leafPrototypes.indexOf(current);
        current = getProto(current)
      )
        Object.getOwnPropertyNames(current).forEach(
          (key) => (def[key] = () => value[key])
        )
      return ((def.default = () => value), __webpack_require__.d(ns, def), ns)
    }),
    (__webpack_require__.d = (exports, definition) => {
      for (var key in definition)
        __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key) &&
          Object.defineProperty(exports, key, {
            enumerable: !0,
            get: definition[key],
          })
    }),
    (__webpack_require__.f = {}),
    (__webpack_require__.e = (chunkId) =>
      Promise.all(
        Object.keys(__webpack_require__.f).reduce(
          (promises, key) => (
            __webpack_require__.f[key](chunkId, promises),
            promises
          ),
          []
        )
      )),
    (__webpack_require__.u = (chunkId) =>
      (({
        1: 'components-badge-stories',
        100: 'ui-kbd-node-stories',
        193: 'ui-paragraph-node-stories',
        334: 'user-menu-stories',
        595: 'ui-tag-tree-stories',
        743: 'design-system-Theme-mdx',
        904: 'components-loading-stories',
        957: 'ui-hr-node-stories',
        959: 'ui-toolbar-stories',
        1004: 'ui-wiki-link-node-stories',
        1016: 'components-tabs-stories',
        1118: 'ui-todo-nodes-stories',
        1294: 'components-card-stories',
        1508: 'editor-slash-command-menu-stories',
        1750: 'components-alert-stories',
        1773: 'export-export-dialog-stories',
        1815: 'components-scroll-area-stories',
        1933: 'ui-tag-input-stories',
        1978: 'components-textarea-stories',
        2082: 'ui-sidebar-stories',
        2126: 'ui-code-node-stories',
        2151: 'components-radio-group-stories',
        2300: 'design-system-Introduction-mdx',
        2331: 'components-modal-stories',
        2468: 'components-dialog-stories',
        3169: 'components-tooltip-stories',
        3224: 'ui-mark-toolbar-button-stories',
        3715: 'editor-plate-editor-stories',
        3790: 'templates-template-picker-stories',
        3808: 'ui-blockquote-node-stories',
        4243: 'ui-command-palette-stories',
        4380: 'components-select-stories',
        4725: 'graph-graph-visualization-stories',
        4807: 'ui-highlight-node-stories',
        5144: 'components-toggle-stories',
        5452: 'ui-keyboard-shortcuts-dialog-stories',
        5483: 'components-checkbox-stories',
        5487: 'note-editor-stories',
        5576: 'ui-tag-badge-stories',
        5743: 'components-slider-stories',
        5974: 'editor-block-editor-stories',
        6245: 'ui-code-block-stories',
        6746: 'ui-list-nodes-stories',
        7221: 'components-separator-stories',
        7239: 'components-popover-stories',
        7512: 'components-button-stories',
        7573: 'ui-heading-node-stories',
        7609: 'editor-basic-editor-stories',
        7685: 'components-dropdown-menu-stories',
        7760: 'components-input-stories',
        7796: 'ui-global-search-stories',
        7902: 'ui-toggle-block-stories',
        8022: 'components-label-stories',
        8138: 'theme-theme-demo-stories',
        8360: 'components-switch-stories',
        8622: 'ui-callout-block-stories',
        9044: 'editor-plugins-editor-plugins-stories',
        9071: 'components-dropdown-stories',
        9396: 'ui-settings-panel-stories',
        9477: 'components-skeleton-stories',
        9598: 'design-system-Tokens-mdx',
        9599: 'components-context-menu-stories',
        9691: 'templates-template-variable-form-stories',
      })[chunkId] || chunkId) +
      '.' +
      {
        1: 'e8dbda43',
        100: '8dd7435c',
        149: '0eda2869',
        193: '40739d09',
        199: '0faba2f7',
        334: '73868b62',
        433: 'e1d2d9eb',
        444: '0b0ec71c',
        472: '5028402a',
        561: '24c4c645',
        595: 'c1e592ab',
        743: '9145c338',
        904: '46db795e',
        957: 'b700c42a',
        959: '5a8dfad6',
        993: '169b5f13',
        1004: '6ac6079b',
        1016: 'f43e212c',
        1053: '12a87fbf',
        1118: '57161359',
        1158: 'ad24e889',
        1294: '2b95727a',
        1508: '39e6f476',
        1750: '4f86eb81',
        1773: '6dbbc582',
        1796: '330e7d14',
        1815: 'ad5d112a',
        1933: '613e69d9',
        1957: '4d147cee',
        1978: '68c2e171',
        1983: 'b156776f',
        2082: 'f736f842',
        2108: '64e76bd1',
        2126: 'e8aeef47',
        2151: '81eacec9',
        2281: '4022f86a',
        2300: '3d64205c',
        2331: '9d8e6697',
        2468: '33dbfb98',
        2474: '50a75435',
        2646: '023b8530',
        2776: '9c0df22b',
        2814: 'e610adfc',
        2841: '969db378',
        2929: '095862c1',
        3156: '0691d4db',
        3169: '38e700d3',
        3224: '1e60f1a7',
        3246: 'f4a8c36d',
        3479: 'b2d185c4',
        3715: 'ec38cfbd',
        3783: 'a37b9ea0',
        3790: '32abe037',
        3791: 'e3a67686',
        3808: 'd6cdf1c1',
        3853: 'e1c2b863',
        4243: 'f32715c6',
        4266: '0878f2fb',
        4337: '11eb57cf',
        4380: '75efc4c1',
        4534: '368bbda4',
        4565: '568be37b',
        4704: 'b8a16e3b',
        4725: 'a2f1ec29',
        4781: '65c95c82',
        4801: '31ae952c',
        4807: '706d8481',
        4924: '75ef9a45',
        5007: 'd1d70d4b',
        5053: '42d90d9b',
        5105: '1ad68619',
        5144: '8ada4c81',
        5179: '21b9942a',
        5271: '962f0e5a',
        5452: '69f55eb7',
        5483: '5817b0e2',
        5487: 'c64522f9',
        5492: '6d497440',
        5576: '339949fc',
        5743: 'e571215e',
        5746: '7346433b',
        5894: '9231f29d',
        5974: 'cdb18908',
        6077: '2c11ebb1',
        6245: '1a3fca90',
        6296: 'b20636e5',
        6392: '907d2f65',
        6630: '342dcad9',
        6650: 'bcdd1575',
        6746: 'd9ed5c74',
        6967: '072ab142',
        7042: 'f100ea62',
        7116: 'd5744fe7',
        7152: '652091be',
        7191: 'f7d6667d',
        7221: '15132259',
        7239: '5762fed4',
        7289: '0c8a1506',
        7325: '7c3211a7',
        7512: '74c4c43c',
        7573: '255634f0',
        7609: '897faa37',
        7685: '7b8ee245',
        7760: '36cc744e',
        7796: '7e74773c',
        7799: '3d828160',
        7842: 'a5a6ce16',
        7902: '5b2829b0',
        7936: 'dd991fe9',
        7983: '50a0fd11',
        8022: '3dc4217f',
        8138: '14fb7955',
        8294: 'f6086339',
        8360: '26138648',
        8622: '569cb544',
        9044: '7c1aea3d',
        9071: 'ab95eb43',
        9342: 'b858ad70',
        9396: 'c6f502f5',
        9439: '6025841c',
        9477: '5a2608dd',
        9498: '26594e37',
        9597: 'cf82c8eb',
        9598: '570fb81a',
        9599: '347a0e4f',
        9691: '3f6bbb9c',
        9702: '23b996db',
        9982: 'a7537948',
      }[chunkId] +
      '.iframe.bundle.js'),
    (__webpack_require__.g = (function () {
      if ('object' == typeof globalThis) return globalThis
      try {
        return this || new Function('return this')()
      } catch (e) {
        if ('object' == typeof window) return window
      }
    })()),
    (__webpack_require__.hmd = (module) => (
      (module = Object.create(module)).children || (module.children = []),
      Object.defineProperty(module, 'exports', {
        enumerable: !0,
        set: () => {
          throw new Error(
            'ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' +
              module.id
          )
        },
      }),
      module
    )),
    (__webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop)),
    (inProgress = {}),
    (__webpack_require__.l = (url, done, key, chunkId) => {
      if (inProgress[url]) inProgress[url].push(done)
      else {
        var script, needAttach
        if (void 0 !== key)
          for (
            var scripts = document.getElementsByTagName('script'), i = 0;
            i < scripts.length;
            i++
          ) {
            var s = scripts[i]
            if (
              s.getAttribute('src') == url ||
              s.getAttribute('data-webpack') == '@notable/web:' + key
            ) {
              script = s
              break
            }
          }
        ;(script ||
          ((needAttach = !0),
          ((script = document.createElement('script')).charset = 'utf-8'),
          (script.timeout = 120),
          __webpack_require__.nc &&
            script.setAttribute('nonce', __webpack_require__.nc),
          script.setAttribute('data-webpack', '@notable/web:' + key),
          (script.src = url)),
          (inProgress[url] = [done]))
        var onScriptComplete = (prev, event) => {
            ;((script.onerror = script.onload = null), clearTimeout(timeout))
            var doneFns = inProgress[url]
            if (
              (delete inProgress[url],
              script.parentNode && script.parentNode.removeChild(script),
              doneFns && doneFns.forEach((fn) => fn(event)),
              prev)
            )
              return prev(event)
          },
          timeout = setTimeout(
            onScriptComplete.bind(null, void 0, {
              type: 'timeout',
              target: script,
            }),
            12e4
          )
        ;((script.onerror = onScriptComplete.bind(null, script.onerror)),
          (script.onload = onScriptComplete.bind(null, script.onload)),
          needAttach && document.head.appendChild(script))
      }
    }),
    (__webpack_require__.r = (exports) => {
      ;('undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(exports, '__esModule', { value: !0 }))
    }),
    (__webpack_require__.nmd = (module) => (
      (module.paths = []),
      module.children || (module.children = []),
      module
    )),
    (__webpack_require__.p = ''),
    (() => {
      var installedChunks = { 5354: 0 }
      ;((__webpack_require__.f.j = (chunkId, promises) => {
        var installedChunkData = __webpack_require__.o(installedChunks, chunkId)
          ? installedChunks[chunkId]
          : void 0
        if (0 !== installedChunkData)
          if (installedChunkData) promises.push(installedChunkData[2])
          else if (5354 != chunkId) {
            var promise = new Promise(
              (resolve, reject) =>
                (installedChunkData = installedChunks[chunkId] =
                  [resolve, reject])
            )
            promises.push((installedChunkData[2] = promise))
            var url = __webpack_require__.p + __webpack_require__.u(chunkId),
              error = new Error()
            __webpack_require__.l(
              url,
              (event) => {
                if (
                  __webpack_require__.o(installedChunks, chunkId) &&
                  (0 !== (installedChunkData = installedChunks[chunkId]) &&
                    (installedChunks[chunkId] = void 0),
                  installedChunkData)
                ) {
                  var errorType =
                      event && ('load' === event.type ? 'missing' : event.type),
                    realSrc = event && event.target && event.target.src
                  ;((error.message =
                    'Loading chunk ' +
                    chunkId +
                    ' failed.\n(' +
                    errorType +
                    ': ' +
                    realSrc +
                    ')'),
                    (error.name = 'ChunkLoadError'),
                    (error.type = errorType),
                    (error.request = realSrc),
                    installedChunkData[1](error))
                }
              },
              'chunk-' + chunkId,
              chunkId
            )
          } else installedChunks[chunkId] = 0
      }),
        (__webpack_require__.O.j = (chunkId) => 0 === installedChunks[chunkId]))
      var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
          var moduleId,
            chunkId,
            [chunkIds, moreModules, runtime] = data,
            i = 0
          if (chunkIds.some((id) => 0 !== installedChunks[id])) {
            for (moduleId in moreModules)
              __webpack_require__.o(moreModules, moduleId) &&
                (__webpack_require__.m[moduleId] = moreModules[moduleId])
            if (runtime) var result = runtime(__webpack_require__)
          }
          for (
            parentChunkLoadingFunction && parentChunkLoadingFunction(data);
            i < chunkIds.length;
            i++
          )
            ((chunkId = chunkIds[i]),
              __webpack_require__.o(installedChunks, chunkId) &&
                installedChunks[chunkId] &&
                installedChunks[chunkId][0](),
              (installedChunks[chunkId] = 0))
          return __webpack_require__.O(result)
        },
        chunkLoadingGlobal = (self.webpackChunk_notable_web =
          self.webpackChunk_notable_web || [])
      ;(chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0)),
        (chunkLoadingGlobal.push = webpackJsonpCallback.bind(
          null,
          chunkLoadingGlobal.push.bind(chunkLoadingGlobal)
        )))
    })(),
    (__webpack_require__.nc = void 0))
})()
