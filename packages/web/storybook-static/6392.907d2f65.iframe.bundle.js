'use strict'
;(self.webpackChunk_notable_web = self.webpackChunk_notable_web || []).push([
  [6392],
  {
    '../../node_modules/.pnpm/immer@10.1.1/node_modules/immer/dist/immer.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { jM: () => produce })
      var NOTHING = Symbol.for('immer-nothing'),
        DRAFTABLE = Symbol.for('immer-draftable'),
        DRAFT_STATE = Symbol.for('immer-state')
      function die(error, ...args) {
        throw new Error(
          `[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`
        )
      }
      var getPrototypeOf = Object.getPrototypeOf
      function isDraft(value) {
        return !!value && !!value[DRAFT_STATE]
      }
      function isDraftable(value) {
        return (
          !!value &&
          (isPlainObject(value) ||
            Array.isArray(value) ||
            !!value[DRAFTABLE] ||
            !!value.constructor?.[DRAFTABLE] ||
            isMap(value) ||
            isSet(value))
        )
      }
      var objectCtorString = Object.prototype.constructor.toString()
      function isPlainObject(value) {
        if (!value || 'object' != typeof value) return !1
        const proto = getPrototypeOf(value)
        if (null === proto) return !0
        const Ctor =
          Object.hasOwnProperty.call(proto, 'constructor') && proto.constructor
        return (
          Ctor === Object ||
          ('function' == typeof Ctor &&
            Function.toString.call(Ctor) === objectCtorString)
        )
      }
      function each(obj, iter) {
        0 === getArchtype(obj)
          ? Reflect.ownKeys(obj).forEach((key) => {
              iter(key, obj[key], obj)
            })
          : obj.forEach((entry, index) => iter(index, entry, obj))
      }
      function getArchtype(thing) {
        const state = thing[DRAFT_STATE]
        return state
          ? state.type_
          : Array.isArray(thing)
            ? 1
            : isMap(thing)
              ? 2
              : isSet(thing)
                ? 3
                : 0
      }
      function has(thing, prop) {
        return 2 === getArchtype(thing)
          ? thing.has(prop)
          : Object.prototype.hasOwnProperty.call(thing, prop)
      }
      function set(thing, propOrOldValue, value) {
        const t = getArchtype(thing)
        2 === t
          ? thing.set(propOrOldValue, value)
          : 3 === t
            ? thing.add(value)
            : (thing[propOrOldValue] = value)
      }
      function isMap(target) {
        return target instanceof Map
      }
      function isSet(target) {
        return target instanceof Set
      }
      function latest(state) {
        return state.copy_ || state.base_
      }
      function shallowCopy(base, strict) {
        if (isMap(base)) return new Map(base)
        if (isSet(base)) return new Set(base)
        if (Array.isArray(base)) return Array.prototype.slice.call(base)
        const isPlain = isPlainObject(base)
        if (!0 === strict || ('class_only' === strict && !isPlain)) {
          const descriptors = Object.getOwnPropertyDescriptors(base)
          delete descriptors[DRAFT_STATE]
          let keys = Reflect.ownKeys(descriptors)
          for (let i = 0; i < keys.length; i++) {
            const key = keys[i],
              desc = descriptors[key]
            ;(!1 === desc.writable &&
              ((desc.writable = !0), (desc.configurable = !0)),
              (desc.get || desc.set) &&
                (descriptors[key] = {
                  configurable: !0,
                  writable: !0,
                  enumerable: desc.enumerable,
                  value: base[key],
                }))
          }
          return Object.create(getPrototypeOf(base), descriptors)
        }
        {
          const proto = getPrototypeOf(base)
          if (null !== proto && isPlain) return { ...base }
          const obj = Object.create(proto)
          return Object.assign(obj, base)
        }
      }
      function freeze(obj, deep = !1) {
        return (
          isFrozen(obj) ||
            isDraft(obj) ||
            !isDraftable(obj) ||
            (getArchtype(obj) > 1 &&
              (obj.set =
                obj.add =
                obj.clear =
                obj.delete =
                  dontMutateFrozenCollections),
            Object.freeze(obj),
            deep &&
              Object.entries(obj).forEach(([key, value]) => freeze(value, !0))),
          obj
        )
      }
      function dontMutateFrozenCollections() {
        die(2)
      }
      function isFrozen(obj) {
        return Object.isFrozen(obj)
      }
      var currentScope,
        plugins = {}
      function getPlugin(pluginKey) {
        const plugin = plugins[pluginKey]
        return (plugin || die(0), plugin)
      }
      function getCurrentScope() {
        return currentScope
      }
      function usePatchesInScope(scope, patchListener) {
        patchListener &&
          (getPlugin('Patches'),
          (scope.patches_ = []),
          (scope.inversePatches_ = []),
          (scope.patchListener_ = patchListener))
      }
      function revokeScope(scope) {
        ;(leaveScope(scope),
          scope.drafts_.forEach(revokeDraft),
          (scope.drafts_ = null))
      }
      function leaveScope(scope) {
        scope === currentScope && (currentScope = scope.parent_)
      }
      function enterScope(immer2) {
        return (currentScope = (function createScope(parent_, immer_) {
          return {
            drafts_: [],
            parent_,
            immer_,
            canAutoFreeze_: !0,
            unfinalizedDrafts_: 0,
          }
        })(currentScope, immer2))
      }
      function revokeDraft(draft) {
        const state = draft[DRAFT_STATE]
        0 === state.type_ || 1 === state.type_
          ? state.revoke_()
          : (state.revoked_ = !0)
      }
      function processResult(result, scope) {
        scope.unfinalizedDrafts_ = scope.drafts_.length
        const baseDraft = scope.drafts_[0]
        return (
          void 0 !== result && result !== baseDraft
            ? (baseDraft[DRAFT_STATE].modified_ && (revokeScope(scope), die(4)),
              isDraftable(result) &&
                ((result = finalize(scope, result)),
                scope.parent_ || maybeFreeze(scope, result)),
              scope.patches_ &&
                getPlugin('Patches').generateReplacementPatches_(
                  baseDraft[DRAFT_STATE].base_,
                  result,
                  scope.patches_,
                  scope.inversePatches_
                ))
            : (result = finalize(scope, baseDraft, [])),
          revokeScope(scope),
          scope.patches_ &&
            scope.patchListener_(scope.patches_, scope.inversePatches_),
          result !== NOTHING ? result : void 0
        )
      }
      function finalize(rootScope, value, path) {
        if (isFrozen(value)) return value
        const state = value[DRAFT_STATE]
        if (!state)
          return (
            each(value, (key, childValue) =>
              finalizeProperty(rootScope, state, value, key, childValue, path)
            ),
            value
          )
        if (state.scope_ !== rootScope) return value
        if (!state.modified_)
          return (maybeFreeze(rootScope, state.base_, !0), state.base_)
        if (!state.finalized_) {
          ;((state.finalized_ = !0), state.scope_.unfinalizedDrafts_--)
          const result = state.copy_
          let resultEach = result,
            isSet2 = !1
          ;(3 === state.type_ &&
            ((resultEach = new Set(result)), result.clear(), (isSet2 = !0)),
            each(resultEach, (key, childValue) =>
              finalizeProperty(
                rootScope,
                state,
                result,
                key,
                childValue,
                path,
                isSet2
              )
            ),
            maybeFreeze(rootScope, result, !1),
            path &&
              rootScope.patches_ &&
              getPlugin('Patches').generatePatches_(
                state,
                path,
                rootScope.patches_,
                rootScope.inversePatches_
              ))
        }
        return state.copy_
      }
      function finalizeProperty(
        rootScope,
        parentState,
        targetObject,
        prop,
        childValue,
        rootPath,
        targetIsSet
      ) {
        if (isDraft(childValue)) {
          const res = finalize(
            rootScope,
            childValue,
            rootPath &&
              parentState &&
              3 !== parentState.type_ &&
              !has(parentState.assigned_, prop)
              ? rootPath.concat(prop)
              : void 0
          )
          if ((set(targetObject, prop, res), !isDraft(res))) return
          rootScope.canAutoFreeze_ = !1
        } else targetIsSet && targetObject.add(childValue)
        if (isDraftable(childValue) && !isFrozen(childValue)) {
          if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1)
            return
          ;(finalize(rootScope, childValue),
            (parentState && parentState.scope_.parent_) ||
              'symbol' == typeof prop ||
              !Object.prototype.propertyIsEnumerable.call(targetObject, prop) ||
              maybeFreeze(rootScope, childValue))
        }
      }
      function maybeFreeze(scope, value, deep = !1) {
        !scope.parent_ &&
          scope.immer_.autoFreeze_ &&
          scope.canAutoFreeze_ &&
          freeze(value, deep)
      }
      var objectTraps = {
          get(state, prop) {
            if (prop === DRAFT_STATE) return state
            const source = latest(state)
            if (!has(source, prop))
              return (function readPropFromProto(state, source, prop) {
                const desc = getDescriptorFromProto(source, prop)
                return desc
                  ? 'value' in desc
                    ? desc.value
                    : desc.get?.call(state.draft_)
                  : void 0
              })(state, source, prop)
            const value = source[prop]
            return state.finalized_ || !isDraftable(value)
              ? value
              : value === peek(state.base_, prop)
                ? (prepareCopy(state),
                  (state.copy_[prop] = createProxy(value, state)))
                : value
          },
          has: (state, prop) => prop in latest(state),
          ownKeys: (state) => Reflect.ownKeys(latest(state)),
          set(state, prop, value) {
            const desc = getDescriptorFromProto(latest(state), prop)
            if (desc?.set) return (desc.set.call(state.draft_, value), !0)
            if (!state.modified_) {
              const current2 = peek(latest(state), prop),
                currentState = current2?.[DRAFT_STATE]
              if (currentState && currentState.base_ === value)
                return (
                  (state.copy_[prop] = value),
                  (state.assigned_[prop] = !1),
                  !0
                )
              if (
                (function is(x, y) {
                  return x === y ? 0 !== x || 1 / x == 1 / y : x != x && y != y
                })(value, current2) &&
                (void 0 !== value || has(state.base_, prop))
              )
                return !0
              ;(prepareCopy(state), markChanged(state))
            }
            return (
              (state.copy_[prop] === value &&
                (void 0 !== value || prop in state.copy_)) ||
                (Number.isNaN(value) && Number.isNaN(state.copy_[prop])) ||
                ((state.copy_[prop] = value), (state.assigned_[prop] = !0)),
              !0
            )
          },
          deleteProperty: (state, prop) => (
            void 0 !== peek(state.base_, prop) || prop in state.base_
              ? ((state.assigned_[prop] = !1),
                prepareCopy(state),
                markChanged(state))
              : delete state.assigned_[prop],
            state.copy_ && delete state.copy_[prop],
            !0
          ),
          getOwnPropertyDescriptor(state, prop) {
            const owner = latest(state),
              desc = Reflect.getOwnPropertyDescriptor(owner, prop)
            return desc
              ? {
                  writable: !0,
                  configurable: 1 !== state.type_ || 'length' !== prop,
                  enumerable: desc.enumerable,
                  value: owner[prop],
                }
              : desc
          },
          defineProperty() {
            die(11)
          },
          getPrototypeOf: (state) => getPrototypeOf(state.base_),
          setPrototypeOf() {
            die(12)
          },
        },
        arrayTraps = {}
      function peek(draft, prop) {
        const state = draft[DRAFT_STATE]
        return (state ? latest(state) : draft)[prop]
      }
      function getDescriptorFromProto(source, prop) {
        if (!(prop in source)) return
        let proto = getPrototypeOf(source)
        for (; proto; ) {
          const desc = Object.getOwnPropertyDescriptor(proto, prop)
          if (desc) return desc
          proto = getPrototypeOf(proto)
        }
      }
      function markChanged(state) {
        state.modified_ ||
          ((state.modified_ = !0), state.parent_ && markChanged(state.parent_))
      }
      function prepareCopy(state) {
        state.copy_ ||
          (state.copy_ = shallowCopy(
            state.base_,
            state.scope_.immer_.useStrictShallowCopy_
          ))
      }
      ;(each(objectTraps, (key, fn) => {
        arrayTraps[key] = function () {
          return ((arguments[0] = arguments[0][0]), fn.apply(this, arguments))
        }
      }),
        (arrayTraps.deleteProperty = function (state, prop) {
          return arrayTraps.set.call(this, state, prop, void 0)
        }),
        (arrayTraps.set = function (state, prop, value) {
          return objectTraps.set.call(this, state[0], prop, value, state[0])
        }))
      function createProxy(value, parent) {
        const draft = isMap(value)
          ? getPlugin('MapSet').proxyMap_(value, parent)
          : isSet(value)
            ? getPlugin('MapSet').proxySet_(value, parent)
            : (function createProxyProxy(base, parent) {
                const isArray = Array.isArray(base),
                  state = {
                    type_: isArray ? 1 : 0,
                    scope_: parent ? parent.scope_ : getCurrentScope(),
                    modified_: !1,
                    finalized_: !1,
                    assigned_: {},
                    parent_: parent,
                    base_: base,
                    draft_: null,
                    copy_: null,
                    revoke_: null,
                    isManual_: !1,
                  }
                let target = state,
                  traps = objectTraps
                isArray && ((target = [state]), (traps = arrayTraps))
                const { revoke, proxy } = Proxy.revocable(target, traps)
                return ((state.draft_ = proxy), (state.revoke_ = revoke), proxy)
              })(value, parent)
        return (
          (parent ? parent.scope_ : getCurrentScope()).drafts_.push(draft),
          draft
        )
      }
      function currentImpl(value) {
        if (!isDraftable(value) || isFrozen(value)) return value
        const state = value[DRAFT_STATE]
        let copy
        if (state) {
          if (!state.modified_) return state.base_
          ;((state.finalized_ = !0),
            (copy = shallowCopy(
              value,
              state.scope_.immer_.useStrictShallowCopy_
            )))
        } else copy = shallowCopy(value, !0)
        return (
          each(copy, (key, childValue) => {
            set(copy, key, currentImpl(childValue))
          }),
          state && (state.finalized_ = !1),
          copy
        )
      }
      var immer = new (class {
          constructor(config) {
            ;((this.autoFreeze_ = !0),
              (this.useStrictShallowCopy_ = !1),
              (this.produce = (base, recipe, patchListener) => {
                if ('function' == typeof base && 'function' != typeof recipe) {
                  const defaultBase = recipe
                  recipe = base
                  const self = this
                  return function curriedProduce(base2 = defaultBase, ...args) {
                    return self.produce(base2, (draft) =>
                      recipe.call(this, draft, ...args)
                    )
                  }
                }
                let result
                if (
                  ('function' != typeof recipe && die(6),
                  void 0 !== patchListener &&
                    'function' != typeof patchListener &&
                    die(7),
                  isDraftable(base))
                ) {
                  const scope = enterScope(this),
                    proxy = createProxy(base, void 0)
                  let hasError = !0
                  try {
                    ;((result = recipe(proxy)), (hasError = !1))
                  } finally {
                    hasError ? revokeScope(scope) : leaveScope(scope)
                  }
                  return (
                    usePatchesInScope(scope, patchListener),
                    processResult(result, scope)
                  )
                }
                if (!base || 'object' != typeof base) {
                  if (
                    ((result = recipe(base)),
                    void 0 === result && (result = base),
                    result === NOTHING && (result = void 0),
                    this.autoFreeze_ && freeze(result, !0),
                    patchListener)
                  ) {
                    const p = [],
                      ip = []
                    ;(getPlugin('Patches').generateReplacementPatches_(
                      base,
                      result,
                      p,
                      ip
                    ),
                      patchListener(p, ip))
                  }
                  return result
                }
                die(1)
              }),
              (this.produceWithPatches = (base, recipe) => {
                if ('function' == typeof base)
                  return (state, ...args) =>
                    this.produceWithPatches(state, (draft) =>
                      base(draft, ...args)
                    )
                let patches, inversePatches
                return [
                  this.produce(base, recipe, (p, ip) => {
                    ;((patches = p), (inversePatches = ip))
                  }),
                  patches,
                  inversePatches,
                ]
              }),
              'boolean' == typeof config?.autoFreeze &&
                this.setAutoFreeze(config.autoFreeze),
              'boolean' == typeof config?.useStrictShallowCopy &&
                this.setUseStrictShallowCopy(config.useStrictShallowCopy))
          }
          createDraft(base) {
            ;(isDraftable(base) || die(8),
              isDraft(base) &&
                (base = (function current(value) {
                  isDraft(value) || die(10)
                  return currentImpl(value)
                })(base)))
            const scope = enterScope(this),
              proxy = createProxy(base, void 0)
            return (
              (proxy[DRAFT_STATE].isManual_ = !0),
              leaveScope(scope),
              proxy
            )
          }
          finishDraft(draft, patchListener) {
            const state = draft && draft[DRAFT_STATE]
            ;(state && state.isManual_) || die(9)
            const { scope_: scope } = state
            return (
              usePatchesInScope(scope, patchListener),
              processResult(void 0, scope)
            )
          }
          setAutoFreeze(value) {
            this.autoFreeze_ = value
          }
          setUseStrictShallowCopy(value) {
            this.useStrictShallowCopy_ = value
          }
          applyPatches(base, patches) {
            let i
            for (i = patches.length - 1; i >= 0; i--) {
              const patch = patches[i]
              if (0 === patch.path.length && 'replace' === patch.op) {
                base = patch.value
                break
              }
            }
            i > -1 && (patches = patches.slice(i + 1))
            const applyPatchesImpl = getPlugin('Patches').applyPatches_
            return isDraft(base)
              ? applyPatchesImpl(base, patches)
              : this.produce(base, (draft) => applyPatchesImpl(draft, patches))
          }
        })(),
        produce = immer.produce
      ;(immer.produceWithPatches.bind(immer),
        immer.setAutoFreeze.bind(immer),
        immer.setUseStrictShallowCopy.bind(immer),
        immer.applyPatches.bind(immer),
        immer.createDraft.bind(immer),
        immer.finishDraft.bind(immer))
    },
    '../../node_modules/.pnpm/slate@0.117.2/node_modules/slate/dist/index.es.js':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          $1: () => first,
          $H: () => getVoid,
          $t: () => parent,
          Ae: () => path,
          BY: () => addMark,
          Bb: () => apply,
          CU: () => setNodes,
          Cc: () => insertFragment,
          Cy: () => move,
          EY: () => Text,
          F7: () => unwrapNodes,
          G1: () => above,
          GJ: () => deleteForward,
          HV: () => last,
          Hg: () => Element,
          I: () => Operation,
          Im: () => isEmpty,
          Iz: () => normalizeNode,
          J7: () => insertBreak,
          Jo: () => edges,
          KE: () => Editor,
          L9: () => Span,
          Lt: () => select,
          M$: () => splitNodes,
          ML: () => pathRefs,
          PY: () => getDirtyPaths,
          Pl: () => after,
          Q1: () => rangeRefs,
          Q6: () => Range,
          Rx: () => pathRef,
          S8: () => normalize,
          UO: () => wrapNodes,
          UP: () => isEdge,
          V4: () => leaf,
          WD: () => deleteFragment,
          WH: () => isBlock,
          XP: () => hasBlocks,
          Xq: () => hasInlines,
          Xs: () => unsetNodes,
          Yj: () => string,
          Z8: () => marks,
          ZF: () => pointRefs,
          _N: () => end,
          a6: () => hasPath,
          aM: () => fragment,
          aZ: () => Location,
          ap: () => collapse,
          b$: () => setNormalizing,
          bP: () => Node,
          bR: () => Point,
          dQ: () => elementReadOnly,
          fL: () => liftNodes,
          fc: () => rangeRef,
          fx: () => hasTexts,
          gB: () => Transforms,
          gM: () => before,
          h6: () => Scrubber,
          hn: () => getFragment,
          i4: () => removeMark,
          ie: () => createEditor,
          if: () => removeNodes,
          ip: () => pointRef,
          jM: () => isNormalizing,
          lR: () => unhangRange,
          n: () => isStart,
          ni: () => start,
          nm: () => deleteBackward,
          oO: () => positions,
          pW: () => insertNodes,
          rH: () => node,
          rO: () => setPoint,
          rx: () => withoutNormalizing,
          sb: () => isEditor,
          td: () => setSelection,
          uV: () => isEnd,
          v1: () => shouldNormalize,
          wA: () => Path,
          wm: () => deselect,
          y1: () => range,
          yr: () => levels,
          z7: () => moveNodes,
          zx: () => point,
        })
        var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            '../../node_modules/.pnpm/immer@10.1.1/node_modules/immer/dist/immer.mjs'
          ),
          PathRef = {
            transform(ref, op) {
              var { current, affinity } = ref
              if (null != current) {
                var path = Path.transform(current, op, { affinity })
                ;((ref.current = path), null == path && ref.unref())
              }
            },
          },
          PointRef = {
            transform(ref, op) {
              var { current, affinity } = ref
              if (null != current) {
                var point = Point.transform(current, op, { affinity })
                ;((ref.current = point), null == point && ref.unref())
              }
            },
          },
          RangeRef = {
            transform(ref, op) {
              var { current, affinity } = ref
              if (null != current) {
                var path = Range.transform(current, op, { affinity })
                ;((ref.current = path), null == path && ref.unref())
              }
            },
          },
          DIRTY_PATHS = new WeakMap(),
          DIRTY_PATH_KEYS = new WeakMap(),
          FLUSHING = new WeakMap(),
          NORMALIZING = new WeakMap(),
          PATH_REFS = new WeakMap(),
          POINT_REFS = new WeakMap(),
          RANGE_REFS = new WeakMap(),
          Path = {
            ancestors(path) {
              var options =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                { reverse = !1 } = options,
                paths = Path.levels(path, options)
              return (paths = reverse ? paths.slice(1) : paths.slice(0, -1))
            },
            common(path, another) {
              for (
                var common = [], i = 0;
                i < path.length && i < another.length;
                i++
              ) {
                var av = path[i]
                if (av !== another[i]) break
                common.push(av)
              }
              return common
            },
            compare(path, another) {
              for (
                var min = Math.min(path.length, another.length), i = 0;
                i < min;
                i++
              ) {
                if (path[i] < another[i]) return -1
                if (path[i] > another[i]) return 1
              }
              return 0
            },
            endsAfter(path, another) {
              var i = path.length - 1,
                as = path.slice(0, i),
                bs = another.slice(0, i),
                av = path[i],
                bv = another[i]
              return Path.equals(as, bs) && av > bv
            },
            endsAt(path, another) {
              var i = path.length,
                as = path.slice(0, i),
                bs = another.slice(0, i)
              return Path.equals(as, bs)
            },
            endsBefore(path, another) {
              var i = path.length - 1,
                as = path.slice(0, i),
                bs = another.slice(0, i),
                av = path[i],
                bv = another[i]
              return Path.equals(as, bs) && av < bv
            },
            equals: (path, another) =>
              path.length === another.length &&
              path.every((n, i) => n === another[i]),
            hasPrevious: (path) => path[path.length - 1] > 0,
            isAfter: (path, another) => 1 === Path.compare(path, another),
            isAncestor: (path, another) =>
              path.length < another.length && 0 === Path.compare(path, another),
            isBefore: (path, another) => -1 === Path.compare(path, another),
            isChild: (path, another) =>
              path.length === another.length + 1 &&
              0 === Path.compare(path, another),
            isCommon: (path, another) =>
              path.length <= another.length &&
              0 === Path.compare(path, another),
            isDescendant: (path, another) =>
              path.length > another.length && 0 === Path.compare(path, another),
            isParent: (path, another) =>
              path.length + 1 === another.length &&
              0 === Path.compare(path, another),
            isPath: (value) =>
              Array.isArray(value) &&
              (0 === value.length || 'number' == typeof value[0]),
            isSibling(path, another) {
              if (path.length !== another.length) return !1
              var as = path.slice(0, -1),
                bs = another.slice(0, -1)
              return (
                path[path.length - 1] !== another[another.length - 1] &&
                Path.equals(as, bs)
              )
            },
            levels(path) {
              for (
                var options =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  { reverse = !1 } = options,
                  list = [],
                  i = 0;
                i <= path.length;
                i++
              )
                list.push(path.slice(0, i))
              return (reverse && list.reverse(), list)
            },
            next(path) {
              if (0 === path.length)
                throw new Error(
                  'Cannot get the next path of a root path ['.concat(
                    path,
                    '], because it has no next index.'
                  )
                )
              var last = path[path.length - 1]
              return path.slice(0, -1).concat(last + 1)
            },
            operationCanTransformPath(operation) {
              switch (operation.type) {
                case 'insert_node':
                case 'remove_node':
                case 'merge_node':
                case 'split_node':
                case 'move_node':
                  return !0
                default:
                  return !1
              }
            },
            parent(path) {
              if (0 === path.length)
                throw new Error(
                  'Cannot get the parent path of the root path ['.concat(
                    path,
                    '].'
                  )
                )
              return path.slice(0, -1)
            },
            previous(path) {
              if (0 === path.length)
                throw new Error(
                  'Cannot get the previous path of a root path ['.concat(
                    path,
                    '], because it has no previous index.'
                  )
                )
              var last = path[path.length - 1]
              if (last <= 0)
                throw new Error(
                  'Cannot get the previous path of a first child path ['.concat(
                    path,
                    '] because it would result in a negative index.'
                  )
                )
              return path.slice(0, -1).concat(last - 1)
            },
            relative(path, ancestor) {
              if (
                !Path.isAncestor(ancestor, path) &&
                !Path.equals(path, ancestor)
              )
                throw new Error(
                  'Cannot get the relative path of ['
                    .concat(path, '] inside ancestor [')
                    .concat(
                      ancestor,
                      '], because it is not above or equal to the path.'
                    )
                )
              return path.slice(ancestor.length)
            },
            transform(path, operation) {
              var options =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {}
              if (!path) return null
              var p = [...path],
                { affinity = 'forward' } = options
              if (0 === path.length) return p
              switch (operation.type) {
                case 'insert_node':
                  var { path: op } = operation
                  ;(Path.equals(op, p) ||
                    Path.endsBefore(op, p) ||
                    Path.isAncestor(op, p)) &&
                    (p[op.length - 1] += 1)
                  break
                case 'remove_node':
                  var { path: _op } = operation
                  if (Path.equals(_op, p) || Path.isAncestor(_op, p))
                    return null
                  Path.endsBefore(_op, p) && (p[_op.length - 1] -= 1)
                  break
                case 'merge_node':
                  var { path: _op2, position } = operation
                  Path.equals(_op2, p) || Path.endsBefore(_op2, p)
                    ? (p[_op2.length - 1] -= 1)
                    : Path.isAncestor(_op2, p) &&
                      ((p[_op2.length - 1] -= 1), (p[_op2.length] += position))
                  break
                case 'split_node':
                  var { path: _op3, position: _position } = operation
                  if (Path.equals(_op3, p)) {
                    if ('forward' === affinity) p[p.length - 1] += 1
                    else if ('backward' !== affinity) return null
                  } else
                    Path.endsBefore(_op3, p)
                      ? (p[_op3.length - 1] += 1)
                      : Path.isAncestor(_op3, p) &&
                        path[_op3.length] >= _position &&
                        ((p[_op3.length - 1] += 1),
                        (p[_op3.length] -= _position))
                  break
                case 'move_node':
                  var { path: _op4, newPath: onp } = operation
                  if (Path.equals(_op4, onp)) return p
                  if (Path.isAncestor(_op4, p) || Path.equals(_op4, p)) {
                    var copy = onp.slice()
                    return (
                      Path.endsBefore(_op4, onp) &&
                        _op4.length < onp.length &&
                        (copy[_op4.length - 1] -= 1),
                      copy.concat(p.slice(_op4.length))
                    )
                  }
                  Path.isSibling(_op4, onp) &&
                  (Path.isAncestor(onp, p) || Path.equals(onp, p))
                    ? Path.endsBefore(_op4, p)
                      ? (p[_op4.length - 1] -= 1)
                      : (p[_op4.length - 1] += 1)
                    : Path.endsBefore(onp, p) ||
                        Path.equals(onp, p) ||
                        Path.isAncestor(onp, p)
                      ? (Path.endsBefore(_op4, p) && (p[_op4.length - 1] -= 1),
                        (p[onp.length - 1] += 1))
                      : Path.endsBefore(_op4, p) &&
                        (Path.equals(onp, p) && (p[onp.length - 1] += 1),
                        (p[_op4.length - 1] -= 1))
              }
              return p
            },
          }
        function _typeof(o) {
          return (
            (_typeof =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (o) {
                    return typeof o
                  }
                : function (o) {
                    return o &&
                      'function' == typeof Symbol &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? 'symbol'
                      : typeof o
                  }),
            _typeof(o)
          )
        }
        function _toPropertyKey(arg) {
          var key = (function _toPrimitive(input, hint) {
            if ('object' !== _typeof(input) || null === input) return input
            var prim = input[Symbol.toPrimitive]
            if (void 0 !== prim) {
              var res = prim.call(input, hint || 'default')
              if ('object' !== _typeof(res)) return res
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              )
            }
            return ('string' === hint ? String : Number)(input)
          })(arg, 'string')
          return 'symbol' === _typeof(key) ? key : String(key)
        }
        function _defineProperty(obj, key, value) {
          return (
            (key = _toPropertyKey(key)) in obj
              ? Object.defineProperty(obj, key, {
                  value,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (obj[key] = value),
            obj
          )
        }
        function ownKeys$e(e, r) {
          var t = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e)
            ;(r &&
              (o = o.filter(function (r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable
              })),
              t.push.apply(t, o))
          }
          return t
        }
        function _objectSpread$e(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {}
            r % 2
              ? ownKeys$e(Object(t), !0).forEach(function (r) {
                  _defineProperty(e, r, t[r])
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(t)
                  )
                : ownKeys$e(Object(t)).forEach(function (r) {
                    Object.defineProperty(
                      e,
                      r,
                      Object.getOwnPropertyDescriptor(t, r)
                    )
                  })
          }
          return e
        }
        var insertChildren = function insertChildren(xs, index) {
            for (
              var _len = arguments.length,
                newValues = new Array(_len > 2 ? _len - 2 : 0),
                _key = 2;
              _key < _len;
              _key++
            )
              newValues[_key - 2] = arguments[_key]
            return [...xs.slice(0, index), ...newValues, ...xs.slice(index)]
          },
          replaceChildren = function replaceChildren(xs, index, removeCount) {
            for (
              var _len2 = arguments.length,
                newValues = new Array(_len2 > 3 ? _len2 - 3 : 0),
                _key2 = 3;
              _key2 < _len2;
              _key2++
            )
              newValues[_key2 - 3] = arguments[_key2]
            return [
              ...xs.slice(0, index),
              ...newValues,
              ...xs.slice(index + removeCount),
            ]
          },
          removeChildren = replaceChildren,
          modifyDescendant = (editor, path, f) => {
            if (0 === path.length) throw new Error('Cannot modify the editor')
            for (
              var node = Node.get(editor, path),
                slicedPath = path.slice(),
                modifiedNode = f(node);
              slicedPath.length > 1;

            ) {
              var _index = slicedPath.pop(),
                ancestorNode = Node.get(editor, slicedPath)
              modifiedNode = _objectSpread$e(
                _objectSpread$e({}, ancestorNode),
                {},
                {
                  children: replaceChildren(
                    ancestorNode.children,
                    _index,
                    1,
                    modifiedNode
                  ),
                }
              )
            }
            var index = slicedPath.pop()
            editor.children = replaceChildren(
              editor.children,
              index,
              1,
              modifiedNode
            )
          },
          modifyChildren = (editor, path, f) => {
            0 === path.length
              ? (editor.children = f(editor.children))
              : modifyDescendant(editor, path, (node) => {
                  if (Text.isText(node))
                    throw new Error(
                      'Cannot get the element at path ['
                        .concat(path, '] because it refers to a leaf node: ')
                        .concat(Scrubber.stringify(node))
                    )
                  return _objectSpread$e(
                    _objectSpread$e({}, node),
                    {},
                    { children: f(node.children) }
                  )
                })
          },
          modifyLeaf = (editor, path, f) =>
            modifyDescendant(editor, path, (node) => {
              if (!Text.isText(node))
                throw new Error(
                  'Cannot get the leaf node at path ['
                    .concat(path, '] because it refers to a non-leaf node: ')
                    .concat(Scrubber.stringify(node))
                )
              return f(node)
            }),
          GeneralTransforms = {
            transform(editor, op) {
              var transformSelection = !1
              switch (op.type) {
                case 'insert_node':
                  var { path, node } = op
                  ;(modifyChildren(editor, Path.parent(path), (children) => {
                    var index = path[path.length - 1]
                    if (index > children.length)
                      throw new Error(
                        'Cannot apply an "insert_node" operation at path ['.concat(
                          path,
                          '] because the destination is past the end of the node.'
                        )
                      )
                    return insertChildren(children, index, node)
                  }),
                    (transformSelection = !0))
                  break
                case 'insert_text':
                  var { path: _path, offset, text } = op
                  if (0 === text.length) break
                  ;(modifyLeaf(editor, _path, (node) => {
                    var before = node.text.slice(0, offset),
                      after = node.text.slice(offset)
                    return _objectSpread$e(
                      _objectSpread$e({}, node),
                      {},
                      { text: before + text + after }
                    )
                  }),
                    (transformSelection = !0))
                  break
                case 'merge_node':
                  var { path: _path2 } = op,
                    index = _path2[_path2.length - 1],
                    prevPath = Path.previous(_path2),
                    prevIndex = prevPath[prevPath.length - 1]
                  ;(modifyChildren(editor, Path.parent(_path2), (children) => {
                    var newNode,
                      node = children[index],
                      prev = children[prevIndex]
                    if (Text.isText(node) && Text.isText(prev))
                      newNode = _objectSpread$e(
                        _objectSpread$e({}, prev),
                        {},
                        { text: prev.text + node.text }
                      )
                    else {
                      if (Text.isText(node) || Text.isText(prev))
                        throw new Error(
                          'Cannot apply a "merge_node" operation at path ['
                            .concat(
                              _path2,
                              '] to nodes of different interfaces: '
                            )
                            .concat(Scrubber.stringify(node), ' ')
                            .concat(Scrubber.stringify(prev))
                        )
                      newNode = _objectSpread$e(
                        _objectSpread$e({}, prev),
                        {},
                        { children: prev.children.concat(node.children) }
                      )
                    }
                    return replaceChildren(children, prevIndex, 2, newNode)
                  }),
                    (transformSelection = !0))
                  break
                case 'move_node':
                  var { path: _path3, newPath } = op,
                    _index2 = _path3[_path3.length - 1]
                  if (Path.isAncestor(_path3, newPath))
                    throw new Error(
                      'Cannot move a path ['
                        .concat(_path3, '] to new path [')
                        .concat(
                          newPath,
                          '] because the destination is inside itself.'
                        )
                    )
                  var _node = Node.get(editor, _path3)
                  modifyChildren(editor, Path.parent(_path3), (children) =>
                    removeChildren(children, _index2, 1)
                  )
                  var truePath = Path.transform(_path3, op),
                    newIndex = truePath[truePath.length - 1]
                  ;(modifyChildren(editor, Path.parent(truePath), (children) =>
                    insertChildren(children, newIndex, _node)
                  ),
                    (transformSelection = !0))
                  break
                case 'remove_node':
                  var { path: _path4 } = op,
                    _index3 = _path4[_path4.length - 1]
                  if (
                    (modifyChildren(editor, Path.parent(_path4), (children) =>
                      removeChildren(children, _index3, 1)
                    ),
                    editor.selection)
                  ) {
                    var selection = _objectSpread$e({}, editor.selection)
                    for (var [point, key] of Range.points(selection)) {
                      var result = Point.transform(point, op)
                      if (null != selection && null != result)
                        selection[key] = result
                      else {
                        var prev = void 0,
                          next = void 0
                        for (var [n, p] of Node.texts(editor)) {
                          if (-1 !== Path.compare(p, _path4)) {
                            next = [n, p]
                            break
                          }
                          prev = [n, p]
                        }
                        var preferNext = !1
                        ;(prev &&
                          next &&
                          (preferNext = Path.equals(next[1], _path4)
                            ? !Path.hasPrevious(next[1])
                            : Path.common(prev[1], _path4).length <
                              Path.common(next[1], _path4).length),
                          prev && !preferNext
                            ? (selection[key] = {
                                path: prev[1],
                                offset: prev[0].text.length,
                              })
                            : next
                              ? (selection[key] = { path: next[1], offset: 0 })
                              : (selection = null))
                      }
                    }
                    ;(selection && Range.equals(selection, editor.selection)) ||
                      (editor.selection = selection)
                  }
                  break
                case 'remove_text':
                  var { path: _path5, offset: _offset, text: _text } = op
                  if (0 === _text.length) break
                  ;(modifyLeaf(editor, _path5, (node) => {
                    var before = node.text.slice(0, _offset),
                      after = node.text.slice(_offset + _text.length)
                    return _objectSpread$e(
                      _objectSpread$e({}, node),
                      {},
                      { text: before + after }
                    )
                  }),
                    (transformSelection = !0))
                  break
                case 'set_node':
                  var { path: _path6, properties, newProperties } = op
                  if (0 === _path6.length)
                    throw new Error('Cannot set properties on the root node!')
                  modifyDescendant(editor, _path6, (node) => {
                    var newNode = _objectSpread$e({}, node)
                    for (var _key3 in newProperties) {
                      if ('children' === _key3 || 'text' === _key3)
                        throw new Error(
                          'Cannot set the "'.concat(
                            _key3,
                            '" property of nodes!'
                          )
                        )
                      var value = newProperties[_key3]
                      null == value
                        ? delete newNode[_key3]
                        : (newNode[_key3] = value)
                    }
                    for (var _key4 in properties)
                      newProperties.hasOwnProperty(_key4) ||
                        delete newNode[_key4]
                    return newNode
                  })
                  break
                case 'set_selection':
                  var { newProperties: _newProperties } = op
                  if (null == _newProperties) {
                    editor.selection = null
                    break
                  }
                  if (null == editor.selection) {
                    if (!Range.isRange(_newProperties))
                      throw new Error(
                        'Cannot apply an incomplete "set_selection" operation properties '.concat(
                          Scrubber.stringify(_newProperties),
                          ' when there is no current selection.'
                        )
                      )
                    editor.selection = _objectSpread$e({}, _newProperties)
                    break
                  }
                  var _selection = _objectSpread$e({}, editor.selection)
                  for (var _key5 in _newProperties) {
                    var value = _newProperties[_key5]
                    if (null == value) {
                      if ('anchor' === _key5 || 'focus' === _key5)
                        throw new Error(
                          'Cannot remove the "'.concat(
                            _key5,
                            '" selection property'
                          )
                        )
                      delete _selection[_key5]
                    } else _selection[_key5] = value
                  }
                  editor.selection = _selection
                  break
                case 'split_node':
                  var { path: _path7, position, properties: _properties } = op,
                    _index4 = _path7[_path7.length - 1]
                  if (0 === _path7.length)
                    throw new Error(
                      'Cannot apply a "split_node" operation at path ['.concat(
                        _path7,
                        '] because the root node cannot be split.'
                      )
                    )
                  ;(modifyChildren(editor, Path.parent(_path7), (children) => {
                    var newNode,
                      nextNode,
                      node = children[_index4]
                    if (Text.isText(node)) {
                      var before = node.text.slice(0, position),
                        after = node.text.slice(position)
                      ;((newNode = _objectSpread$e(
                        _objectSpread$e({}, node),
                        {},
                        { text: before }
                      )),
                        (nextNode = _objectSpread$e(
                          _objectSpread$e({}, _properties),
                          {},
                          { text: after }
                        )))
                    } else {
                      var _before = node.children.slice(0, position),
                        _after = node.children.slice(position)
                      ;((newNode = _objectSpread$e(
                        _objectSpread$e({}, node),
                        {},
                        { children: _before }
                      )),
                        (nextNode = _objectSpread$e(
                          _objectSpread$e({}, _properties),
                          {},
                          { children: _after }
                        )))
                    }
                    return replaceChildren(
                      children,
                      _index4,
                      1,
                      newNode,
                      nextNode
                    )
                  }),
                    (transformSelection = !0))
              }
              if (transformSelection && editor.selection) {
                var _selection2 = _objectSpread$e({}, editor.selection)
                for (var [_point, _key6] of Range.points(_selection2))
                  _selection2[_key6] = Point.transform(_point, op)
                Range.equals(_selection2, editor.selection) ||
                  (editor.selection = _selection2)
              }
            },
          },
          NodeTransforms = {
            insertNodes(editor, nodes, options) {
              editor.insertNodes(nodes, options)
            },
            liftNodes(editor, options) {
              editor.liftNodes(options)
            },
            mergeNodes(editor, options) {
              editor.mergeNodes(options)
            },
            moveNodes(editor, options) {
              editor.moveNodes(options)
            },
            removeNodes(editor, options) {
              editor.removeNodes(options)
            },
            setNodes(editor, props, options) {
              editor.setNodes(props, options)
            },
            splitNodes(editor, options) {
              editor.splitNodes(options)
            },
            unsetNodes(editor, props, options) {
              editor.unsetNodes(props, options)
            },
            unwrapNodes(editor, options) {
              editor.unwrapNodes(options)
            },
            wrapNodes(editor, element, options) {
              editor.wrapNodes(element, options)
            },
          },
          SelectionTransforms = {
            collapse(editor, options) {
              editor.collapse(options)
            },
            deselect(editor) {
              editor.deselect()
            },
            move(editor, options) {
              editor.move(options)
            },
            select(editor, target) {
              editor.select(target)
            },
            setPoint(editor, props, options) {
              editor.setPoint(props, options)
            },
            setSelection(editor, props) {
              editor.setSelection(props)
            },
          },
          isObject = (value) => 'object' == typeof value && null !== value,
          isDeepEqual = (node, another) => {
            for (var key in node) {
              var a = node[key],
                b = another[key]
              if (Array.isArray(a) && Array.isArray(b)) {
                if (a.length !== b.length) return !1
                for (var i = 0; i < a.length; i++) if (a[i] !== b[i]) return !1
              } else if (isObject(a) && isObject(b)) {
                if (!isDeepEqual(a, b)) return !1
              } else if (a !== b) return !1
            }
            for (var _key in another)
              if (void 0 === node[_key] && void 0 !== another[_key]) return !1
            return !0
          }
        function _objectWithoutProperties(source, excluded) {
          if (null == source) return {}
          var key,
            i,
            target = (function _objectWithoutPropertiesLoose(source, excluded) {
              if (null == source) return {}
              var key,
                i,
                target = {},
                sourceKeys = Object.keys(source)
              for (i = 0; i < sourceKeys.length; i++)
                ((key = sourceKeys[i]),
                  excluded.indexOf(key) >= 0 || (target[key] = source[key]))
              return target
            })(source, excluded)
          if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
            for (i = 0; i < sourceSymbolKeys.length; i++)
              ((key = sourceSymbolKeys[i]),
                excluded.indexOf(key) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(source, key) &&
                    (target[key] = source[key])))
          }
          return target
        }
        var _excluded$4 = ['anchor', 'focus']
        function ownKeys$d(e, r) {
          var t = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e)
            ;(r &&
              (o = o.filter(function (r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable
              })),
              t.push.apply(t, o))
          }
          return t
        }
        var Range = {
            edges(range) {
              var options =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                { reverse = !1 } = options,
                { anchor, focus } = range
              return Range.isBackward(range) === reverse
                ? [anchor, focus]
                : [focus, anchor]
            },
            end(range) {
              var [, end] = Range.edges(range)
              return end
            },
            equals: (range, another) =>
              Point.equals(range.anchor, another.anchor) &&
              Point.equals(range.focus, another.focus),
            surrounds(range, target) {
              var intersectionRange = Range.intersection(range, target)
              return (
                !!intersectionRange && Range.equals(intersectionRange, target)
              )
            },
            includes(range, target) {
              if (Range.isRange(target)) {
                if (
                  Range.includes(range, target.anchor) ||
                  Range.includes(range, target.focus)
                )
                  return !0
                var [rs, re] = Range.edges(range),
                  [ts, te] = Range.edges(target)
                return Point.isBefore(rs, ts) && Point.isAfter(re, te)
              }
              var [start, end] = Range.edges(range),
                isAfterStart = !1,
                isBeforeEnd = !1
              return (
                Point.isPoint(target)
                  ? ((isAfterStart = Point.compare(target, start) >= 0),
                    (isBeforeEnd = Point.compare(target, end) <= 0))
                  : ((isAfterStart = Path.compare(target, start.path) >= 0),
                    (isBeforeEnd = Path.compare(target, end.path) <= 0)),
                isAfterStart && isBeforeEnd
              )
            },
            intersection(range, another) {
              var rest = _objectWithoutProperties(range, _excluded$4),
                [s1, e1] = Range.edges(range),
                [s2, e2] = Range.edges(another),
                start = Point.isBefore(s1, s2) ? s2 : s1,
                end = Point.isBefore(e1, e2) ? e1 : e2
              return Point.isBefore(end, start)
                ? null
                : (function _objectSpread$d(e) {
                    for (var r = 1; r < arguments.length; r++) {
                      var t = null != arguments[r] ? arguments[r] : {}
                      r % 2
                        ? ownKeys$d(Object(t), !0).forEach(function (r) {
                            _defineProperty(e, r, t[r])
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(t)
                            )
                          : ownKeys$d(Object(t)).forEach(function (r) {
                              Object.defineProperty(
                                e,
                                r,
                                Object.getOwnPropertyDescriptor(t, r)
                              )
                            })
                    }
                    return e
                  })({ anchor: start, focus: end }, rest)
            },
            isBackward(range) {
              var { anchor, focus } = range
              return Point.isAfter(anchor, focus)
            },
            isCollapsed(range) {
              var { anchor, focus } = range
              return Point.equals(anchor, focus)
            },
            isExpanded: (range) => !Range.isCollapsed(range),
            isForward: (range) => !Range.isBackward(range),
            isRange: (value) =>
              isObject(value) &&
              Point.isPoint(value.anchor) &&
              Point.isPoint(value.focus),
            *points(range) {
              ;(yield [range.anchor, 'anchor'], yield [range.focus, 'focus'])
            },
            start(range) {
              var [start] = Range.edges(range)
              return start
            },
            transform(range, op) {
              var options =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {}
              if (null === range) return null
              var affinityAnchor,
                affinityFocus,
                { affinity = 'inward' } = options
              if ('inward' === affinity) {
                var isCollapsed = Range.isCollapsed(range)
                Range.isForward(range)
                  ? ((affinityAnchor = 'forward'),
                    (affinityFocus = isCollapsed ? affinityAnchor : 'backward'))
                  : ((affinityAnchor = 'backward'),
                    (affinityFocus = isCollapsed ? affinityAnchor : 'forward'))
              } else
                'outward' === affinity
                  ? Range.isForward(range)
                    ? ((affinityAnchor = 'backward'),
                      (affinityFocus = 'forward'))
                    : ((affinityAnchor = 'forward'),
                      (affinityFocus = 'backward'))
                  : ((affinityAnchor = affinity), (affinityFocus = affinity))
              var anchor = Point.transform(range.anchor, op, {
                  affinity: affinityAnchor,
                }),
                focus = Point.transform(range.focus, op, {
                  affinity: affinityFocus,
                })
              return anchor && focus ? { anchor, focus } : null
            },
          },
          isElement = function isElement(value) {
            var { deep = !1 } =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {}
            return (
              !!isObject(value) &&
              'function' != typeof value.apply &&
              (deep
                ? Node.isNodeList(value.children)
                : Array.isArray(value.children))
            )
          },
          Element = {
            isAncestor(value) {
              var { deep = !1 } =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {}
              return (
                isObject(value) && Node.isNodeList(value.children, { deep })
              )
            },
            isElement,
            isElementList(value) {
              var { deep = !1 } =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {}
              return (
                Array.isArray(value) &&
                value.every((val) => Element.isElement(val, { deep }))
              )
            },
            isElementProps: (props) => void 0 !== props.children,
            isElementType: function isElementType(value, elementVal) {
              var elementKey =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 'type'
              return isElement(value) && value[elementKey] === elementVal
            },
            matches(element, props) {
              for (var key in props)
                if ('children' !== key && element[key] !== props[key]) return !1
              return !0
            },
          },
          _excluded$3 = ['children'],
          _excluded2$3 = ['text'],
          Node = {
            ancestor(root, path) {
              var node = Node.get(root, path)
              if (Text.isText(node))
                throw new Error(
                  'Cannot get the ancestor node at path ['
                    .concat(
                      path,
                      '] because it refers to a text node instead: '
                    )
                    .concat(Scrubber.stringify(node))
                )
              return node
            },
            ancestors(root, path) {
              var options =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {}
              return (function* () {
                for (var p of Path.ancestors(path, options)) {
                  var entry = [Node.ancestor(root, p), p]
                  yield entry
                }
              })()
            },
            child(root, index) {
              if (Text.isText(root))
                throw new Error(
                  'Cannot get the child of a text node: '.concat(
                    Scrubber.stringify(root)
                  )
                )
              var c = root.children[index]
              if (null == c)
                throw new Error(
                  'Cannot get child at index `'
                    .concat(index, '` in node: ')
                    .concat(Scrubber.stringify(root))
                )
              return c
            },
            children(root, path) {
              var options =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {}
              return (function* () {
                for (
                  var { reverse = !1 } = options,
                    ancestor = Node.ancestor(root, path),
                    { children } = ancestor,
                    index = reverse ? children.length - 1 : 0;
                  reverse ? index >= 0 : index < children.length;

                ) {
                  var child = Node.child(ancestor, index),
                    childPath = path.concat(index)
                  ;(yield [child, childPath],
                    (index = reverse ? index - 1 : index + 1))
                }
              })()
            },
            common(root, path, another) {
              var p = Path.common(path, another)
              return [Node.get(root, p), p]
            },
            descendant(root, path) {
              var node = Node.get(root, path)
              if (Editor.isEditor(node))
                throw new Error(
                  'Cannot get the descendant node at path ['
                    .concat(
                      path,
                      '] because it refers to the root editor node instead: '
                    )
                    .concat(Scrubber.stringify(node))
                )
              return node
            },
            descendants(root) {
              var options =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {}
              return (function* () {
                for (var [node, path] of Node.nodes(root, options))
                  0 !== path.length && (yield [node, path])
              })()
            },
            elements(root) {
              var options =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {}
              return (function* () {
                for (var [node, path] of Node.nodes(root, options))
                  Element.isElement(node) && (yield [node, path])
              })()
            },
            extractProps: (node) =>
              Element.isAncestor(node)
                ? _objectWithoutProperties(node, _excluded$3)
                : _objectWithoutProperties(node, _excluded2$3),
            first(root, path) {
              for (
                var p = path.slice(), n = Node.get(root, p);
                n && !Text.isText(n) && 0 !== n.children.length;

              )
                ((n = n.children[0]), p.push(0))
              return [n, p]
            },
            fragment(root, range) {
              if (Text.isText(root))
                throw new Error(
                  'Cannot get a fragment starting from a root text node: '.concat(
                    Scrubber.stringify(root)
                  )
                )
              var newRoot = (0, immer__WEBPACK_IMPORTED_MODULE_0__.jM)(
                { children: root.children },
                (r) => {
                  var [start, end] = Range.edges(range),
                    nodeEntries = Node.nodes(r, {
                      reverse: !0,
                      pass: (_ref) => {
                        var [, path] = _ref
                        return !Range.includes(range, path)
                      },
                    })
                  for (var [, path] of nodeEntries) {
                    if (!Range.includes(range, path)) {
                      var parent = Node.parent(r, path),
                        index = path[path.length - 1]
                      parent.children.splice(index, 1)
                    }
                    if (Path.equals(path, end.path)) {
                      var leaf = Node.leaf(r, path)
                      leaf.text = leaf.text.slice(0, end.offset)
                    }
                    if (Path.equals(path, start.path)) {
                      var _leaf = Node.leaf(r, path)
                      _leaf.text = _leaf.text.slice(start.offset)
                    }
                  }
                  Editor.isEditor(r) && (r.selection = null)
                }
              )
              return newRoot.children
            },
            get(root, path) {
              var node = Node.getIf(root, path)
              if (void 0 === node)
                throw new Error(
                  'Cannot find a descendant at path ['
                    .concat(path, '] in node: ')
                    .concat(Scrubber.stringify(root))
                )
              return node
            },
            getIf(root, path) {
              for (var node = root, i = 0; i < path.length; i++) {
                var p = path[i]
                if (Text.isText(node) || !node.children[p]) return
                node = node.children[p]
              }
              return node
            },
            has(root, path) {
              for (var node = root, i = 0; i < path.length; i++) {
                var p = path[i]
                if (Text.isText(node) || !node.children[p]) return !1
                node = node.children[p]
              }
              return !0
            },
            isNode(value) {
              var { deep = !1 } =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {}
              return (
                Text.isText(value) ||
                Element.isElement(value, { deep }) ||
                Editor.isEditor(value, { deep })
              )
            },
            isNodeList(value) {
              var { deep = !1 } =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {}
              return (
                Array.isArray(value) &&
                value.every((val) => Node.isNode(val, { deep }))
              )
            },
            last(root, path) {
              for (
                var p = path.slice(), n = Node.get(root, p);
                n && !Text.isText(n) && 0 !== n.children.length;

              ) {
                var i = n.children.length - 1
                ;((n = n.children[i]), p.push(i))
              }
              return [n, p]
            },
            leaf(root, path) {
              var node = Node.get(root, path)
              if (!Text.isText(node))
                throw new Error(
                  'Cannot get the leaf node at path ['
                    .concat(path, '] because it refers to a non-leaf node: ')
                    .concat(Scrubber.stringify(node))
                )
              return node
            },
            levels(root, path) {
              var options =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {}
              return (function* () {
                for (var p of Path.levels(path, options)) {
                  var n = Node.get(root, p)
                  yield [n, p]
                }
              })()
            },
            matches: (node, props) =>
              (Element.isElement(node) &&
                Element.isElementProps(props) &&
                Element.matches(node, props)) ||
              (Text.isText(node) &&
                Text.isTextProps(props) &&
                Text.matches(node, props)),
            nodes(root) {
              var options =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {}
              return (function* () {
                for (
                  var { pass, reverse = !1 } = options,
                    { from = [], to } = options,
                    visited = new Set(),
                    p = [],
                    n = root;
                  !to ||
                  !(reverse ? Path.isBefore(p, to) : Path.isAfter(p, to));

                )
                  if (
                    (visited.has(n) || (yield [n, p]),
                    visited.has(n) ||
                      Text.isText(n) ||
                      0 === n.children.length ||
                      (null != pass && !1 !== pass([n, p])))
                  ) {
                    if (0 === p.length) break
                    if (!reverse) {
                      var newPath = Path.next(p)
                      if (Node.has(root, newPath)) {
                        ;((p = newPath), (n = Node.get(root, p)))
                        continue
                      }
                    }
                    if (reverse && 0 !== p[p.length - 1])
                      ((p = Path.previous(p)), (n = Node.get(root, p)))
                    else
                      ((p = Path.parent(p)),
                        (n = Node.get(root, p)),
                        visited.add(n))
                  } else {
                    visited.add(n)
                    var nextIndex = reverse ? n.children.length - 1 : 0
                    ;(Path.isAncestor(p, from) && (nextIndex = from[p.length]),
                      (p = p.concat(nextIndex)),
                      (n = Node.get(root, p)))
                  }
              })()
            },
            parent(root, path) {
              var parentPath = Path.parent(path),
                p = Node.get(root, parentPath)
              if (Text.isText(p))
                throw new Error(
                  'Cannot get the parent of path ['.concat(
                    path,
                    '] because it does not exist in the root.'
                  )
                )
              return p
            },
            string: (node) =>
              Text.isText(node)
                ? node.text
                : node.children.map(Node.string).join(''),
            texts(root) {
              var options =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {}
              return (function* () {
                for (var [node, path] of Node.nodes(root, options))
                  Text.isText(node) && (yield [node, path])
              })()
            },
          }
        function ownKeys$c(e, r) {
          var t = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e)
            ;(r &&
              (o = o.filter(function (r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable
              })),
              t.push.apply(t, o))
          }
          return t
        }
        function _objectSpread$c(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {}
            r % 2
              ? ownKeys$c(Object(t), !0).forEach(function (r) {
                  _defineProperty(e, r, t[r])
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(t)
                  )
                : ownKeys$c(Object(t)).forEach(function (r) {
                    Object.defineProperty(
                      e,
                      r,
                      Object.getOwnPropertyDescriptor(t, r)
                    )
                  })
          }
          return e
        }
        var Operation = {
            isNodeOperation: (value) =>
              Operation.isOperation(value) && value.type.endsWith('_node'),
            isOperation(value) {
              if (!isObject(value)) return !1
              switch (value.type) {
                case 'insert_node':
                case 'remove_node':
                  return Path.isPath(value.path) && Node.isNode(value.node)
                case 'insert_text':
                case 'remove_text':
                  return (
                    'number' == typeof value.offset &&
                    'string' == typeof value.text &&
                    Path.isPath(value.path)
                  )
                case 'merge_node':
                  return (
                    'number' == typeof value.position &&
                    Path.isPath(value.path) &&
                    isObject(value.properties)
                  )
                case 'move_node':
                  return Path.isPath(value.path) && Path.isPath(value.newPath)
                case 'set_node':
                  return (
                    Path.isPath(value.path) &&
                    isObject(value.properties) &&
                    isObject(value.newProperties)
                  )
                case 'set_selection':
                  return (
                    (null === value.properties &&
                      Range.isRange(value.newProperties)) ||
                    (null === value.newProperties &&
                      Range.isRange(value.properties)) ||
                    (isObject(value.properties) &&
                      isObject(value.newProperties))
                  )
                case 'split_node':
                  return (
                    Path.isPath(value.path) &&
                    'number' == typeof value.position &&
                    isObject(value.properties)
                  )
                default:
                  return !1
              }
            },
            isOperationList: (value) =>
              Array.isArray(value) &&
              value.every((val) => Operation.isOperation(val)),
            isSelectionOperation: (value) =>
              Operation.isOperation(value) && value.type.endsWith('_selection'),
            isTextOperation: (value) =>
              Operation.isOperation(value) && value.type.endsWith('_text'),
            inverse(op) {
              switch (op.type) {
                case 'insert_node':
                  return _objectSpread$c(
                    _objectSpread$c({}, op),
                    {},
                    { type: 'remove_node' }
                  )
                case 'insert_text':
                  return _objectSpread$c(
                    _objectSpread$c({}, op),
                    {},
                    { type: 'remove_text' }
                  )
                case 'merge_node':
                  return _objectSpread$c(
                    _objectSpread$c({}, op),
                    {},
                    { type: 'split_node', path: Path.previous(op.path) }
                  )
                case 'move_node':
                  var { newPath, path } = op
                  if (Path.equals(newPath, path)) return op
                  if (Path.isSibling(path, newPath))
                    return _objectSpread$c(
                      _objectSpread$c({}, op),
                      {},
                      { path: newPath, newPath: path }
                    )
                  var inversePath = Path.transform(path, op),
                    inverseNewPath = Path.transform(Path.next(path), op)
                  return _objectSpread$c(
                    _objectSpread$c({}, op),
                    {},
                    { path: inversePath, newPath: inverseNewPath }
                  )
                case 'remove_node':
                  return _objectSpread$c(
                    _objectSpread$c({}, op),
                    {},
                    { type: 'insert_node' }
                  )
                case 'remove_text':
                  return _objectSpread$c(
                    _objectSpread$c({}, op),
                    {},
                    { type: 'insert_text' }
                  )
                case 'set_node':
                  var { properties, newProperties } = op
                  return _objectSpread$c(
                    _objectSpread$c({}, op),
                    {},
                    { properties: newProperties, newProperties: properties }
                  )
                case 'set_selection':
                  var {
                    properties: _properties,
                    newProperties: _newProperties,
                  } = op
                  return _objectSpread$c(
                    _objectSpread$c({}, op),
                    {},
                    null == _properties
                      ? { properties: _newProperties, newProperties: null }
                      : null == _newProperties
                        ? { properties: null, newProperties: _properties }
                        : {
                            properties: _newProperties,
                            newProperties: _properties,
                          }
                  )
                case 'split_node':
                  return _objectSpread$c(
                    _objectSpread$c({}, op),
                    {},
                    { type: 'merge_node', path: Path.next(op.path) }
                  )
              }
            },
          },
          isEditor = function isEditor(value) {
            var { deep = !1 } =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {}
            if (!isObject(value)) return !1
            var isEditor =
              'function' == typeof value.addMark &&
              'function' == typeof value.apply &&
              'function' == typeof value.deleteFragment &&
              'function' == typeof value.insertBreak &&
              'function' == typeof value.insertSoftBreak &&
              'function' == typeof value.insertFragment &&
              'function' == typeof value.insertNode &&
              'function' == typeof value.insertText &&
              'function' == typeof value.isElementReadOnly &&
              'function' == typeof value.isInline &&
              'function' == typeof value.isSelectable &&
              'function' == typeof value.isVoid &&
              'function' == typeof value.normalizeNode &&
              'function' == typeof value.onChange &&
              'function' == typeof value.removeMark &&
              'function' == typeof value.getDirtyPaths &&
              (null === value.marks || isObject(value.marks)) &&
              (null === value.selection || Range.isRange(value.selection)) &&
              (!deep || Node.isNodeList(value.children)) &&
              Operation.isOperationList(value.operations)
            return isEditor
          },
          Editor = {
            above: (editor, options) => editor.above(options),
            addMark(editor, key, value) {
              editor.addMark(key, value)
            },
            after: (editor, at, options) => editor.after(at, options),
            before: (editor, at, options) => editor.before(at, options),
            deleteBackward(editor) {
              var options =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                { unit = 'character' } = options
              editor.deleteBackward(unit)
            },
            deleteForward(editor) {
              var options =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                { unit = 'character' } = options
              editor.deleteForward(unit)
            },
            deleteFragment(editor, options) {
              editor.deleteFragment(options)
            },
            edges: (editor, at) => editor.edges(at),
            elementReadOnly(editor) {
              var options =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {}
              return editor.elementReadOnly(options)
            },
            end: (editor, at) => editor.end(at),
            first: (editor, at) => editor.first(at),
            fragment: (editor, at) => editor.fragment(at),
            hasBlocks: (editor, element) => editor.hasBlocks(element),
            hasInlines: (editor, element) => editor.hasInlines(element),
            hasPath: (editor, path) => editor.hasPath(path),
            hasTexts: (editor, element) => editor.hasTexts(element),
            insertBreak(editor) {
              editor.insertBreak()
            },
            insertFragment(editor, fragment, options) {
              editor.insertFragment(fragment, options)
            },
            insertNode(editor, node) {
              editor.insertNode(node)
            },
            insertSoftBreak(editor) {
              editor.insertSoftBreak()
            },
            insertText(editor, text) {
              editor.insertText(text)
            },
            isBlock: (editor, value) => editor.isBlock(value),
            isEdge: (editor, point, at) => editor.isEdge(point, at),
            isEditor: (value) => isEditor(value),
            isElementReadOnly: (editor, element) =>
              editor.isElementReadOnly(element),
            isEmpty: (editor, element) => editor.isEmpty(element),
            isEnd: (editor, point, at) => editor.isEnd(point, at),
            isInline: (editor, value) => editor.isInline(value),
            isNormalizing: (editor) => editor.isNormalizing(),
            isSelectable: (editor, value) => editor.isSelectable(value),
            isStart: (editor, point, at) => editor.isStart(point, at),
            isVoid: (editor, value) => editor.isVoid(value),
            last: (editor, at) => editor.last(at),
            leaf: (editor, at, options) => editor.leaf(at, options),
            levels: (editor, options) => editor.levels(options),
            marks: (editor) => editor.getMarks(),
            next: (editor, options) => editor.next(options),
            node: (editor, at, options) => editor.node(at, options),
            nodes: (editor, options) => editor.nodes(options),
            normalize(editor, options) {
              editor.normalize(options)
            },
            parent: (editor, at, options) => editor.parent(at, options),
            path: (editor, at, options) => editor.path(at, options),
            pathRef: (editor, path, options) => editor.pathRef(path, options),
            pathRefs: (editor) => editor.pathRefs(),
            point: (editor, at, options) => editor.point(at, options),
            pointRef: (editor, point, options) =>
              editor.pointRef(point, options),
            pointRefs: (editor) => editor.pointRefs(),
            positions: (editor, options) => editor.positions(options),
            previous: (editor, options) => editor.previous(options),
            range: (editor, at, to) => editor.range(at, to),
            rangeRef: (editor, range, options) =>
              editor.rangeRef(range, options),
            rangeRefs: (editor) => editor.rangeRefs(),
            removeMark(editor, key) {
              editor.removeMark(key)
            },
            setNormalizing(editor, isNormalizing) {
              editor.setNormalizing(isNormalizing)
            },
            start: (editor, at) => editor.start(at),
            string: (editor, at, options) => editor.string(at, options),
            unhangRange: (editor, range, options) =>
              editor.unhangRange(range, options),
            void: (editor, options) => editor.void(options),
            withoutNormalizing(editor, fn) {
              editor.withoutNormalizing(fn)
            },
            shouldMergeNodesRemovePrevNode: (editor, prevNode, curNode) =>
              editor.shouldMergeNodesRemovePrevNode(prevNode, curNode),
          },
          Location = {
            isLocation: (value) =>
              Path.isPath(value) ||
              Point.isPoint(value) ||
              Range.isRange(value),
          },
          Span = {
            isSpan: (value) =>
              Array.isArray(value) &&
              2 === value.length &&
              value.every(Path.isPath),
          }
        function ownKeys$b(e, r) {
          var t = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e)
            ;(r &&
              (o = o.filter(function (r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable
              })),
              t.push.apply(t, o))
          }
          return t
        }
        function _objectSpread$b(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {}
            r % 2
              ? ownKeys$b(Object(t), !0).forEach(function (r) {
                  _defineProperty(e, r, t[r])
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(t)
                  )
                : ownKeys$b(Object(t)).forEach(function (r) {
                    Object.defineProperty(
                      e,
                      r,
                      Object.getOwnPropertyDescriptor(t, r)
                    )
                  })
          }
          return e
        }
        var Point = {
            compare(point, another) {
              var result = Path.compare(point.path, another.path)
              return 0 === result
                ? point.offset < another.offset
                  ? -1
                  : point.offset > another.offset
                    ? 1
                    : 0
                : result
            },
            isAfter: (point, another) => 1 === Point.compare(point, another),
            isBefore: (point, another) => -1 === Point.compare(point, another),
            equals: (point, another) =>
              point.offset === another.offset &&
              Path.equals(point.path, another.path),
            isPoint: (value) =>
              isObject(value) &&
              'number' == typeof value.offset &&
              Path.isPath(value.path),
            transform(point, op) {
              var options =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {}
              if (null === point) return null
              var { affinity = 'forward' } = options,
                { path, offset } = point
              switch (op.type) {
                case 'insert_node':
                case 'move_node':
                  path = Path.transform(path, op, options)
                  break
                case 'insert_text':
                  Path.equals(op.path, path) &&
                    (op.offset < offset ||
                      (op.offset === offset && 'forward' === affinity)) &&
                    (offset += op.text.length)
                  break
                case 'merge_node':
                  ;(Path.equals(op.path, path) && (offset += op.position),
                    (path = Path.transform(path, op, options)))
                  break
                case 'remove_text':
                  Path.equals(op.path, path) &&
                    op.offset <= offset &&
                    (offset -= Math.min(offset - op.offset, op.text.length))
                  break
                case 'remove_node':
                  if (
                    Path.equals(op.path, path) ||
                    Path.isAncestor(op.path, path)
                  )
                    return null
                  path = Path.transform(path, op, options)
                  break
                case 'split_node':
                  if (Path.equals(op.path, path)) {
                    if (op.position === offset && null == affinity) return null
                    ;(op.position < offset ||
                      (op.position === offset && 'forward' === affinity)) &&
                      ((offset -= op.position),
                      (path = Path.transform(
                        path,
                        op,
                        _objectSpread$b(
                          _objectSpread$b({}, options),
                          {},
                          { affinity: 'forward' }
                        )
                      )))
                  } else path = Path.transform(path, op, options)
                  break
                default:
                  return point
              }
              return { path, offset }
            },
          },
          _scrubber = void 0,
          Scrubber = {
            setScrubber(scrubber) {
              _scrubber = scrubber
            },
            stringify: (value) => JSON.stringify(value, _scrubber),
          },
          _excluded$2 = ['text'],
          _excluded2$2 = ['anchor', 'focus', 'merge']
        function ownKeys$a(e, r) {
          var t = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e)
            ;(r &&
              (o = o.filter(function (r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable
              })),
              t.push.apply(t, o))
          }
          return t
        }
        function _objectSpread$a(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {}
            r % 2
              ? ownKeys$a(Object(t), !0).forEach(function (r) {
                  _defineProperty(e, r, t[r])
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(t)
                  )
                : ownKeys$a(Object(t)).forEach(function (r) {
                    Object.defineProperty(
                      e,
                      r,
                      Object.getOwnPropertyDescriptor(t, r)
                    )
                  })
          }
          return e
        }
        var CodepointType,
          Text = {
            equals(text, another) {
              var options =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                { loose = !1 } = options
              function omitText(obj) {
                return _objectWithoutProperties(obj, _excluded$2)
              }
              return isDeepEqual(
                loose ? omitText(text) : text,
                loose ? omitText(another) : another
              )
            },
            isText: (value) => isObject(value) && 'string' == typeof value.text,
            isTextList: (value) =>
              Array.isArray(value) && value.every((val) => Text.isText(val)),
            isTextProps: (props) => void 0 !== props.text,
            matches(text, props) {
              for (var key in props)
                if (
                  'text' !== key &&
                  (!text.hasOwnProperty(key) || text[key] !== props[key])
                )
                  return !1
              return !0
            },
            decorations(node, decorations) {
              var leaves = [{ leaf: _objectSpread$a({}, node) }]
              for (var dec of decorations) {
                var { anchor, focus, merge: mergeDecoration } = dec,
                  rest = _objectWithoutProperties(dec, _excluded2$2),
                  [start, end] = Range.edges(dec),
                  next = [],
                  leafEnd = 0,
                  decorationStart = start.offset,
                  decorationEnd = end.offset,
                  merge =
                    null != mergeDecoration ? mergeDecoration : Object.assign
                for (var { leaf } of leaves) {
                  var { length } = leaf.text,
                    leafStart = leafEnd
                  if (
                    ((leafEnd += length),
                    decorationStart <= leafStart && leafEnd <= decorationEnd)
                  )
                    (merge(leaf, rest), next.push({ leaf }))
                  else if (
                    (decorationStart !== decorationEnd &&
                      (decorationStart === leafEnd ||
                        decorationEnd === leafStart)) ||
                    decorationStart > leafEnd ||
                    decorationEnd < leafStart ||
                    (decorationEnd === leafStart && 0 !== leafStart)
                  )
                    next.push({ leaf })
                  else {
                    var middle = leaf,
                      before = void 0,
                      after = void 0
                    if (decorationEnd < leafEnd) {
                      var off = decorationEnd - leafStart
                      ;((after = {
                        leaf: _objectSpread$a(
                          _objectSpread$a({}, middle),
                          {},
                          { text: middle.text.slice(off) }
                        ),
                      }),
                        (middle = _objectSpread$a(
                          _objectSpread$a({}, middle),
                          {},
                          { text: middle.text.slice(0, off) }
                        )))
                    }
                    if (decorationStart > leafStart) {
                      var _off = decorationStart - leafStart
                      ;((before = {
                        leaf: _objectSpread$a(
                          _objectSpread$a({}, middle),
                          {},
                          { text: middle.text.slice(0, _off) }
                        ),
                      }),
                        (middle = _objectSpread$a(
                          _objectSpread$a({}, middle),
                          {},
                          { text: middle.text.slice(_off) }
                        )))
                    }
                    ;(merge(middle, rest),
                      before && next.push(before),
                      next.push({ leaf: middle }),
                      after && next.push(after))
                  }
                }
                leaves = next
              }
              if (leaves.length > 1) {
                var currentOffset = 0
                for (var [index, item] of leaves.entries()) {
                  var _start = currentOffset,
                    _end = _start + item.leaf.text.length,
                    position = { start: _start, end: _end }
                  ;(0 === index && (position.isFirst = !0),
                    index === leaves.length - 1 && (position.isLast = !0),
                    (item.position = position),
                    (currentOffset = _end))
                }
              }
              return leaves
            },
          },
          getDefaultInsertLocation = (editor) =>
            editor.selection
              ? editor.selection
              : editor.children.length > 0
                ? Editor.end(editor, [])
                : [0],
          matchPath = (editor, path) => {
            var [node] = Editor.node(editor, path)
            return (n) => n === node
          },
          getCharacterDistance = function getCharacterDistance(str) {
            var isRTL =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              isLTR = !isRTL,
              codepoints = isRTL ? codepointsIteratorRTL(str) : str,
              left = CodepointType.None,
              right = CodepointType.None,
              distance = 0,
              gb12Or13 = null
            for (var char of codepoints) {
              var code = char.codePointAt(0)
              if (!code) break
              var type = getCodepointType(char, code)
              if (
                (([left, right] = isLTR ? [right, type] : [type, left]),
                intersects(left, CodepointType.ZWJ) &&
                  intersects(right, CodepointType.ExtPict) &&
                  !endsWithEmojiZWJ(
                    isLTR
                      ? str.substring(0, distance)
                      : str.substring(0, str.length - distance)
                  ))
              )
                break
              if (
                intersects(left, CodepointType.RI) &&
                intersects(right, CodepointType.RI) &&
                !(gb12Or13 =
                  null !== gb12Or13
                    ? !gb12Or13
                    : !!isLTR ||
                      endsWithOddNumberOfRIs(
                        str.substring(0, str.length - distance)
                      ))
              )
                break
              if (
                left !== CodepointType.None &&
                right !== CodepointType.None &&
                isBoundaryPair(left, right)
              )
                break
              distance += char.length
            }
            return distance || 1
          },
          SPACE = /\s/,
          PUNCTUATION =
            /[\u002B\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
          CHAMELEON = /['\u2018\u2019]/,
          getWordDistance = function getWordDistance(text) {
            for (
              var isRTL =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                dist = 0,
                started = !1;
              text.length > 0;

            ) {
              var charDist = getCharacterDistance(text, isRTL),
                [char, remaining] = splitByCharacterDistance(
                  text,
                  charDist,
                  isRTL
                )
              if (isWordCharacter(char, remaining, isRTL))
                ((started = !0), (dist += charDist))
              else {
                if (started) break
                dist += charDist
              }
              text = remaining
            }
            return dist
          },
          splitByCharacterDistance = (str, dist, isRTL) => {
            if (isRTL) {
              var at = str.length - dist
              return [str.slice(at, str.length), str.slice(0, at)]
            }
            return [str.slice(0, dist), str.slice(dist)]
          },
          isWordCharacter = function isWordCharacter(char, remaining) {
            var isRTL =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
            if (SPACE.test(char)) return !1
            if (CHAMELEON.test(char)) {
              var charDist = getCharacterDistance(remaining, isRTL),
                [nextChar, nextRemaining] = splitByCharacterDistance(
                  remaining,
                  charDist,
                  isRTL
                )
              if (isWordCharacter(nextChar, nextRemaining, isRTL)) return !0
            }
            return !PUNCTUATION.test(char)
          },
          codepointsIteratorRTL = function* codepointsIteratorRTL(str) {
            for (var end = str.length - 1, i = 0; i < str.length; i++) {
              var char1 = str.charAt(end - i)
              if (isLowSurrogate(char1.charCodeAt(0))) {
                var char2 = str.charAt(end - i - 1)
                if (isHighSurrogate(char2.charCodeAt(0))) {
                  ;(yield char2 + char1, i++)
                  continue
                }
              }
              yield char1
            }
          },
          isHighSurrogate = (charCode) =>
            charCode >= 55296 && charCode <= 56319,
          isLowSurrogate = (charCode) => charCode >= 56320 && charCode <= 57343
        !(function (CodepointType) {
          ;((CodepointType[(CodepointType.None = 0)] = 'None'),
            (CodepointType[(CodepointType.Extend = 1)] = 'Extend'),
            (CodepointType[(CodepointType.ZWJ = 2)] = 'ZWJ'),
            (CodepointType[(CodepointType.RI = 4)] = 'RI'),
            (CodepointType[(CodepointType.Prepend = 8)] = 'Prepend'),
            (CodepointType[(CodepointType.SpacingMark = 16)] = 'SpacingMark'),
            (CodepointType[(CodepointType.L = 32)] = 'L'),
            (CodepointType[(CodepointType.V = 64)] = 'V'),
            (CodepointType[(CodepointType.T = 128)] = 'T'),
            (CodepointType[(CodepointType.LV = 256)] = 'LV'),
            (CodepointType[(CodepointType.LVT = 512)] = 'LVT'),
            (CodepointType[(CodepointType.ExtPict = 1024)] = 'ExtPict'),
            (CodepointType[(CodepointType.Any = 2048)] = 'Any'))
        })(CodepointType || (CodepointType = {}))
        var reExtend =
            /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40\uDF42]|\uD80D[\uDC40\uDC47-\uDC55]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/,
          rePrepend =
            /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/,
          reSpacingMark =
            /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/,
          reL = /^[\u1100-\u115F\uA960-\uA97C]$/,
          reV = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/,
          reT = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/,
          reLV =
            /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/,
          reLVT =
            /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/,
          reExtPict =
            /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/,
          getCodepointType = (char, code) => {
            var type = CodepointType.Any
            return (
              -1 !== char.search(reExtend) && (type |= CodepointType.Extend),
              8205 === code && (type |= CodepointType.ZWJ),
              code >= 127462 && code <= 127487 && (type |= CodepointType.RI),
              -1 !== char.search(rePrepend) && (type |= CodepointType.Prepend),
              -1 !== char.search(reSpacingMark) &&
                (type |= CodepointType.SpacingMark),
              -1 !== char.search(reL) && (type |= CodepointType.L),
              -1 !== char.search(reV) && (type |= CodepointType.V),
              -1 !== char.search(reT) && (type |= CodepointType.T),
              -1 !== char.search(reLV) && (type |= CodepointType.LV),
              -1 !== char.search(reLVT) && (type |= CodepointType.LVT),
              -1 !== char.search(reExtPict) && (type |= CodepointType.ExtPict),
              type
            )
          }
        function intersects(x, y) {
          return 0 !== (x & y)
        }
        var NonBoundaryPairs = [
          [
            CodepointType.L,
            CodepointType.L |
              CodepointType.V |
              CodepointType.LV |
              CodepointType.LVT,
          ],
          [
            CodepointType.LV | CodepointType.V,
            CodepointType.V | CodepointType.T,
          ],
          [CodepointType.LVT | CodepointType.T, CodepointType.T],
          [CodepointType.Any, CodepointType.Extend | CodepointType.ZWJ],
          [CodepointType.Any, CodepointType.SpacingMark],
          [CodepointType.Prepend, CodepointType.Any],
          [CodepointType.ZWJ, CodepointType.ExtPict],
          [CodepointType.RI, CodepointType.RI],
        ]
        function isBoundaryPair(left, right) {
          return (
            -1 ===
            NonBoundaryPairs.findIndex(
              (r) => intersects(left, r[0]) && intersects(right, r[1])
            )
          )
        }
        var endingEmojiZWJ =
            /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40\uDF42]|\uD80D[\uDC40\uDC47-\uDC55]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/,
          endsWithEmojiZWJ = (str) => -1 !== str.search(endingEmojiZWJ),
          endingRIs = /(?:\uD83C[\uDDE6-\uDDFF])+$/g,
          endsWithOddNumberOfRIs = (str) => {
            var match = str.match(endingRIs)
            return null !== match && (match[0].length / 2) % 2 == 1
          },
          TextTransforms = {
            delete(editor, options) {
              editor.delete(options)
            },
            insertFragment(editor, fragment, options) {
              editor.insertFragment(fragment, options)
            },
            insertText(editor, text) {
              var options =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {}
              Editor.withoutNormalizing(editor, () => {
                var { voids = !1 } = options,
                  { at = getDefaultInsertLocation(editor) } = options
                if (
                  (Path.isPath(at) && (at = Editor.range(editor, at)),
                  Range.isRange(at))
                )
                  if (Range.isCollapsed(at)) at = at.anchor
                  else {
                    var end = Range.end(at)
                    if (!voids && Editor.void(editor, { at: end })) return
                    var start = Range.start(at),
                      startRef = Editor.pointRef(editor, start),
                      endRef = Editor.pointRef(editor, end)
                    Transforms.delete(editor, { at, voids })
                    var startPoint = startRef.unref(),
                      endPoint = endRef.unref()
                    ;((at = startPoint || endPoint),
                      Transforms.setSelection(editor, {
                        anchor: at,
                        focus: at,
                      }))
                  }
                if (
                  !(
                    (!voids && Editor.void(editor, { at })) ||
                    Editor.elementReadOnly(editor, { at })
                  )
                ) {
                  var { path, offset } = at
                  text.length > 0 &&
                    editor.apply({ type: 'insert_text', path, offset, text })
                }
              })
            },
          }
        function ownKeys$9(e, r) {
          var t = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e)
            ;(r &&
              (o = o.filter(function (r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable
              })),
              t.push.apply(t, o))
          }
          return t
        }
        function _objectSpread$9(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {}
            r % 2
              ? ownKeys$9(Object(t), !0).forEach(function (r) {
                  _defineProperty(e, r, t[r])
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(t)
                  )
                : ownKeys$9(Object(t)).forEach(function (r) {
                    Object.defineProperty(
                      e,
                      r,
                      Object.getOwnPropertyDescriptor(t, r)
                    )
                  })
          }
          return e
        }
        var Transforms = _objectSpread$9(
            _objectSpread$9(
              _objectSpread$9(
                _objectSpread$9({}, GeneralTransforms),
                NodeTransforms
              ),
              SelectionTransforms
            ),
            TextTransforms
          ),
          BATCHING_DIRTY_PATHS = new WeakMap()
        function updateDirtyPaths(editor, newDirtyPaths, transform) {
          var dirtyPaths,
            dirtyPathKeys,
            oldDirtyPaths = DIRTY_PATHS.get(editor) || [],
            oldDirtyPathKeys = DIRTY_PATH_KEYS.get(editor) || new Set(),
            add = (path) => {
              if (path) {
                var key = path.join(',')
                dirtyPathKeys.has(key) ||
                  (dirtyPathKeys.add(key), dirtyPaths.push(path))
              }
            }
          if (transform)
            for (var path of ((dirtyPaths = []),
            (dirtyPathKeys = new Set()),
            oldDirtyPaths)) {
              add(transform(path))
            }
          else
            ((dirtyPaths = oldDirtyPaths), (dirtyPathKeys = oldDirtyPathKeys))
          for (var _path of newDirtyPaths) add(_path)
          ;(DIRTY_PATHS.set(editor, dirtyPaths),
            DIRTY_PATH_KEYS.set(editor, dirtyPathKeys))
        }
        var apply = (editor, op) => {
            for (var ref of Editor.pathRefs(editor)) PathRef.transform(ref, op)
            for (var _ref of Editor.pointRefs(editor))
              PointRef.transform(_ref, op)
            for (var _ref2 of Editor.rangeRefs(editor))
              RangeRef.transform(_ref2, op)
            if (!((editor) => BATCHING_DIRTY_PATHS.get(editor) || !1)(editor)) {
              var transform = Path.operationCanTransformPath(op)
                ? (p) => Path.transform(p, op)
                : void 0
              updateDirtyPaths(editor, editor.getDirtyPaths(op), transform)
            }
            ;(Transforms.transform(editor, op),
              editor.operations.push(op),
              Editor.normalize(editor, { operation: op }),
              'set_selection' === op.type && (editor.marks = null),
              FLUSHING.get(editor) ||
                (FLUSHING.set(editor, !0),
                Promise.resolve().then(() => {
                  ;(FLUSHING.set(editor, !1),
                    editor.onChange({ operation: op }),
                    (editor.operations = []))
                })))
          },
          getDirtyPaths = (editor, op) => {
            switch (op.type) {
              case 'insert_text':
              case 'remove_text':
              case 'set_node':
                var { path } = op
                return Path.levels(path)
              case 'insert_node':
                var { node, path: _path } = op,
                  levels = Path.levels(_path),
                  descendants = Text.isText(node)
                    ? []
                    : Array.from(Node.nodes(node), (_ref) => {
                        var [, p] = _ref
                        return _path.concat(p)
                      })
                return [...levels, ...descendants]
              case 'merge_node':
                var { path: _path2 } = op
                return [...Path.ancestors(_path2), Path.previous(_path2)]
              case 'move_node':
                var { path: _path3, newPath } = op
                if (Path.equals(_path3, newPath)) return []
                var oldAncestors = [],
                  newAncestors = []
                for (var ancestor of Path.ancestors(_path3)) {
                  var p = Path.transform(ancestor, op)
                  oldAncestors.push(p)
                }
                for (var _ancestor of Path.ancestors(newPath)) {
                  var _p = Path.transform(_ancestor, op)
                  newAncestors.push(_p)
                }
                var newParent = newAncestors[newAncestors.length - 1],
                  newIndex = newPath[newPath.length - 1],
                  resultPath = newParent.concat(newIndex)
                return [...oldAncestors, ...newAncestors, resultPath]
              case 'remove_node':
                var { path: _path4 } = op
                return [...Path.ancestors(_path4)]
              case 'split_node':
                var { path: _path5 } = op
                return [...Path.levels(_path5), Path.next(_path5)]
              default:
                return []
            }
          },
          getFragment = (editor) => {
            var { selection } = editor
            return selection ? Node.fragment(editor, selection) : []
          },
          normalizeNode = (editor, entry, options) => {
            var [node, path] = entry
            if (!Text.isText(node))
              if (Element.isElement(node) && 0 === node.children.length) {
                Transforms.insertNodes(
                  editor,
                  { text: '' },
                  { at: path.concat(0), voids: !0 }
                )
              } else
                for (
                  var shouldHaveInlines =
                      !Editor.isEditor(node) &&
                      Element.isElement(node) &&
                      (editor.isInline(node) ||
                        0 === node.children.length ||
                        Text.isText(node.children[0]) ||
                        editor.isInline(node.children[0])),
                    n = 0,
                    i = 0;
                  i < node.children.length;
                  i++, n++
                ) {
                  var currentNode = Node.get(editor, path)
                  if (!Text.isText(currentNode)) {
                    var _child = currentNode.children[n],
                      prev = currentNode.children[n - 1],
                      isLast = i === node.children.length - 1,
                      isInlineOrText =
                        Text.isText(_child) ||
                        (Element.isElement(_child) && editor.isInline(_child))
                    if (isInlineOrText !== shouldHaveInlines)
                      (isInlineOrText
                        ? null != options && options.fallbackElement
                          ? Transforms.wrapNodes(
                              editor,
                              options.fallbackElement(),
                              { at: path.concat(n), voids: !0 }
                            )
                          : Transforms.removeNodes(editor, {
                              at: path.concat(n),
                              voids: !0,
                            })
                        : Transforms.unwrapNodes(editor, {
                            at: path.concat(n),
                            voids: !0,
                          }),
                        n--)
                    else if (Element.isElement(_child)) {
                      if (editor.isInline(_child))
                        if (null != prev && Text.isText(prev)) {
                          if (isLast) {
                            ;(Transforms.insertNodes(
                              editor,
                              { text: '' },
                              { at: path.concat(n + 1), voids: !0 }
                            ),
                              n++)
                          }
                        } else {
                          ;(Transforms.insertNodes(
                            editor,
                            { text: '' },
                            { at: path.concat(n), voids: !0 }
                          ),
                            n++)
                        }
                    } else {
                      if (!Text.isText(_child) && !('children' in _child))
                        _child.children = []
                      null != prev &&
                        Text.isText(prev) &&
                        (Text.equals(_child, prev, { loose: !0 })
                          ? (Transforms.mergeNodes(editor, {
                              at: path.concat(n),
                              voids: !0,
                            }),
                            n--)
                          : '' === prev.text
                            ? (Transforms.removeNodes(editor, {
                                at: path.concat(n - 1),
                                voids: !0,
                              }),
                              n--)
                            : '' === _child.text &&
                              (Transforms.removeNodes(editor, {
                                at: path.concat(n),
                                voids: !0,
                              }),
                              n--))
                    }
                  }
                }
          },
          shouldNormalize = (editor, _ref) => {
            var { iteration, initialDirtyPathsLength } = _ref,
              maxIterations = 42 * initialDirtyPathsLength
            if (iteration > maxIterations)
              throw new Error(
                'Could not completely normalize the editor after '.concat(
                  maxIterations,
                  ' iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state.'
                )
              )
            return !0
          },
          above = function above(editor) {
            var options =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              {
                voids = !1,
                mode = 'lowest',
                at = editor.selection,
                match,
              } = options
            if (at) {
              var path = Editor.path(editor, at)
              if (
                !Range.isRange(at) ||
                Path.equals(at.focus.path, at.anchor.path)
              ) {
                if (0 === path.length) return
                path = Path.parent(path)
              }
              var reverse = 'lowest' === mode,
                [firstMatch] = Editor.levels(editor, {
                  at: path,
                  voids,
                  match,
                  reverse,
                })
              return firstMatch
            }
          }
        function ownKeys$8(e, r) {
          var t = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e)
            ;(r &&
              (o = o.filter(function (r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable
              })),
              t.push.apply(t, o))
          }
          return t
        }
        function _objectSpread$8(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {}
            r % 2
              ? ownKeys$8(Object(t), !0).forEach(function (r) {
                  _defineProperty(e, r, t[r])
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(t)
                  )
                : ownKeys$8(Object(t)).forEach(function (r) {
                    Object.defineProperty(
                      e,
                      r,
                      Object.getOwnPropertyDescriptor(t, r)
                    )
                  })
          }
          return e
        }
        var addMark = (editor, key, value) => {
          var { selection } = editor
          if (selection) {
            var match = (node, path) => {
                if (!Text.isText(node)) return !1
                var [parentNode, parentPath] = Editor.parent(editor, path)
                return (
                  !editor.isVoid(parentNode) || editor.markableVoid(parentNode)
                )
              },
              expandedSelection = Range.isExpanded(selection),
              markAcceptingVoidSelected = !1
            if (!expandedSelection) {
              var [selectedNode, selectedPath] = Editor.node(editor, selection)
              if (selectedNode && match(selectedNode, selectedPath)) {
                var [parentNode] = Editor.parent(editor, selectedPath)
                markAcceptingVoidSelected =
                  parentNode && editor.markableVoid(parentNode)
              }
            }
            if (expandedSelection || markAcceptingVoidSelected)
              Transforms.setNodes(
                editor,
                { [key]: value },
                { match, split: !0, voids: !0 }
              )
            else {
              var marks = _objectSpread$8(
                _objectSpread$8({}, Editor.marks(editor) || {}),
                {},
                { [key]: value }
              )
              ;((editor.marks = marks),
                FLUSHING.get(editor) || editor.onChange())
            }
          }
        }
        function ownKeys$7(e, r) {
          var t = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e)
            ;(r &&
              (o = o.filter(function (r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable
              })),
              t.push.apply(t, o))
          }
          return t
        }
        function _objectSpread$7(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {}
            r % 2
              ? ownKeys$7(Object(t), !0).forEach(function (r) {
                  _defineProperty(e, r, t[r])
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(t)
                  )
                : ownKeys$7(Object(t)).forEach(function (r) {
                    Object.defineProperty(
                      e,
                      r,
                      Object.getOwnPropertyDescriptor(t, r)
                    )
                  })
          }
          return e
        }
        var after = function after(editor, at) {
          var target,
            options =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            range = {
              anchor: Editor.point(editor, at, { edge: 'end' }),
              focus: Editor.end(editor, []),
            },
            { distance = 1 } = options,
            d = 0
          for (var p of Editor.positions(
            editor,
            _objectSpread$7(_objectSpread$7({}, options), {}, { at: range })
          )) {
            if (d > distance) break
            ;(0 !== d && (target = p), d++)
          }
          return target
        }
        function ownKeys$6(e, r) {
          var t = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e)
            ;(r &&
              (o = o.filter(function (r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable
              })),
              t.push.apply(t, o))
          }
          return t
        }
        function _objectSpread$6(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {}
            r % 2
              ? ownKeys$6(Object(t), !0).forEach(function (r) {
                  _defineProperty(e, r, t[r])
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(t)
                  )
                : ownKeys$6(Object(t)).forEach(function (r) {
                    Object.defineProperty(
                      e,
                      r,
                      Object.getOwnPropertyDescriptor(t, r)
                    )
                  })
          }
          return e
        }
        var before = function before(editor, at) {
            var target,
              options =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              range = {
                anchor: Editor.start(editor, []),
                focus: Editor.point(editor, at, { edge: 'start' }),
              },
              { distance = 1 } = options,
              d = 0
            for (var p of Editor.positions(
              editor,
              _objectSpread$6(
                _objectSpread$6({}, options),
                {},
                { at: range, reverse: !0 }
              )
            )) {
              if (d > distance) break
              ;(0 !== d && (target = p), d++)
            }
            return target
          },
          deleteBackward = (editor, unit) => {
            var { selection } = editor
            selection &&
              Range.isCollapsed(selection) &&
              Transforms.delete(editor, { unit, reverse: !0 })
          },
          deleteForward = (editor, unit) => {
            var { selection } = editor
            selection &&
              Range.isCollapsed(selection) &&
              Transforms.delete(editor, { unit })
          },
          deleteFragment = function deleteFragment(editor) {
            var { direction = 'forward' } =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { selection } = editor
            selection &&
              Range.isExpanded(selection) &&
              Transforms.delete(editor, { reverse: 'backward' === direction })
          },
          edges = (editor, at) => [
            Editor.start(editor, at),
            Editor.end(editor, at),
          ]
        function ownKeys$5(e, r) {
          var t = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e)
            ;(r &&
              (o = o.filter(function (r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable
              })),
              t.push.apply(t, o))
          }
          return t
        }
        function _objectSpread$5(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {}
            r % 2
              ? ownKeys$5(Object(t), !0).forEach(function (r) {
                  _defineProperty(e, r, t[r])
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(t)
                  )
                : ownKeys$5(Object(t)).forEach(function (r) {
                    Object.defineProperty(
                      e,
                      r,
                      Object.getOwnPropertyDescriptor(t, r)
                    )
                  })
          }
          return e
        }
        var elementReadOnly = function elementReadOnly(editor) {
            var options =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {}
            return Editor.above(
              editor,
              _objectSpread$5(
                _objectSpread$5({}, options),
                {},
                {
                  match: (n) =>
                    Element.isElement(n) && Editor.isElementReadOnly(editor, n),
                }
              )
            )
          },
          end = (editor, at) => Editor.point(editor, at, { edge: 'end' }),
          first = (editor, at) => {
            var path = Editor.path(editor, at, { edge: 'start' })
            return Editor.node(editor, path)
          },
          fragment = (editor, at) => {
            var range = Editor.range(editor, at)
            return Node.fragment(editor, range)
          }
        function ownKeys$4(e, r) {
          var t = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e)
            ;(r &&
              (o = o.filter(function (r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable
              })),
              t.push.apply(t, o))
          }
          return t
        }
        function _objectSpread$4(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {}
            r % 2
              ? ownKeys$4(Object(t), !0).forEach(function (r) {
                  _defineProperty(e, r, t[r])
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(t)
                  )
                : ownKeys$4(Object(t)).forEach(function (r) {
                    Object.defineProperty(
                      e,
                      r,
                      Object.getOwnPropertyDescriptor(t, r)
                    )
                  })
          }
          return e
        }
        var getVoid = function getVoid(editor) {
            var options =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {}
            return Editor.above(
              editor,
              _objectSpread$4(
                _objectSpread$4({}, options),
                {},
                {
                  match: (n) =>
                    Element.isElement(n) && Editor.isVoid(editor, n),
                }
              )
            )
          },
          hasBlocks = (editor, element) =>
            element.children.some(
              (n) => Element.isElement(n) && Editor.isBlock(editor, n)
            ),
          hasInlines = (editor, element) =>
            element.children.some(
              (n) => Text.isText(n) || Editor.isInline(editor, n)
            ),
          hasPath = (editor, path) => Node.has(editor, path),
          hasTexts = (editor, element) =>
            element.children.every((n) => Text.isText(n)),
          insertBreak = (editor) => {
            Transforms.splitNodes(editor, { always: !0 })
          }
        function ownKeys$3(e, r) {
          var t = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e)
            ;(r &&
              (o = o.filter(function (r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable
              })),
              t.push.apply(t, o))
          }
          return t
        }
        var insertText = function insertText(editor, text) {
            var options =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { selection, marks } = editor
            if (selection) {
              if (marks) {
                var node = (function _objectSpread$3(e) {
                  for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {}
                    r % 2
                      ? ownKeys$3(Object(t), !0).forEach(function (r) {
                          _defineProperty(e, r, t[r])
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(t)
                          )
                        : ownKeys$3(Object(t)).forEach(function (r) {
                            Object.defineProperty(
                              e,
                              r,
                              Object.getOwnPropertyDescriptor(t, r)
                            )
                          })
                  }
                  return e
                })({ text }, marks)
                Transforms.insertNodes(editor, node, {
                  at: options.at,
                  voids: options.voids,
                })
              } else Transforms.insertText(editor, text, options)
              editor.marks = null
            }
          },
          isBlock = (editor, value) => !editor.isInline(value),
          isEdge = (editor, point, at) =>
            Editor.isStart(editor, point, at) ||
            Editor.isEnd(editor, point, at),
          isEmpty = (editor, element) => {
            var { children } = element,
              [first] = children
            return (
              0 === children.length ||
              (1 === children.length &&
                Text.isText(first) &&
                '' === first.text &&
                !editor.isVoid(element))
            )
          },
          isEnd = (editor, point, at) => {
            var end = Editor.end(editor, at)
            return Point.equals(point, end)
          },
          isNormalizing = (editor) => {
            var isNormalizing = NORMALIZING.get(editor)
            return void 0 === isNormalizing || isNormalizing
          },
          isStart = (editor, point, at) => {
            if (0 !== point.offset) return !1
            var start = Editor.start(editor, at)
            return Point.equals(point, start)
          },
          last = (editor, at) => {
            var path = Editor.path(editor, at, { edge: 'end' })
            return Editor.node(editor, path)
          },
          leaf = function leaf(editor, at) {
            var options =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              path = Editor.path(editor, at, options)
            return [Node.leaf(editor, path), path]
          }
        function levels(editor) {
          var options =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          return (function* () {
            var { at = editor.selection, reverse = !1, voids = !1 } = options,
              { match } = options
            if ((null == match && (match = () => !0), at)) {
              var levels = [],
                path = Editor.path(editor, at)
              for (var [n, p] of Node.levels(editor, path))
                if (
                  match(n, p) &&
                  (levels.push([n, p]),
                  !voids && Element.isElement(n) && Editor.isVoid(editor, n))
                )
                  break
              ;(reverse && levels.reverse(), yield* levels)
            }
          })()
        }
        var _excluded$1 = ['text'],
          _excluded2$1 = ['text'],
          marks = function marks(editor) {
            var { marks, selection } = editor
            if (!selection) return null
            var { anchor, focus } = selection
            if (marks) return marks
            if (Range.isExpanded(selection)) {
              if (
                (Range.isBackward(selection) &&
                  ([focus, anchor] = [anchor, focus]),
                Editor.isEnd(editor, anchor, anchor.path))
              ) {
                var after = Editor.after(editor, anchor)
                after && (anchor = after)
              }
              var [match] = Editor.nodes(editor, {
                match: Text.isText,
                at: { anchor, focus },
              })
              if (match) {
                var [_node] = match
                return _objectWithoutProperties(_node, _excluded$1)
              }
              return {}
            }
            var { path } = anchor,
              [node] = Editor.leaf(editor, path)
            if (0 === anchor.offset) {
              var prev = Editor.previous(editor, {
                at: path,
                match: Text.isText,
              })
              if (
                !Editor.above(editor, {
                  match: (n) =>
                    Element.isElement(n) &&
                    Editor.isVoid(editor, n) &&
                    editor.markableVoid(n),
                })
              ) {
                var block = Editor.above(editor, {
                  match: (n) =>
                    Element.isElement(n) && Editor.isBlock(editor, n),
                })
                if (prev && block) {
                  var [prevNode, prevPath] = prev,
                    [, blockPath] = block
                  Path.isAncestor(blockPath, prevPath) && (node = prevNode)
                }
              }
            }
            return _objectWithoutProperties(node, _excluded2$1)
          },
          node = function node(editor, at) {
            var options =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              path = Editor.path(editor, at, options),
              node = Node.get(editor, path)
            return [node, path]
          }
        var normalize = function normalize(editor) {
            var options =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { force = !1, operation } = options,
              getDirtyPaths = (editor) => DIRTY_PATHS.get(editor) || [],
              popDirtyPath = (editor) => {
                var path = getDirtyPaths(editor).pop(),
                  key = path.join(',')
                return (
                  ((editor) => DIRTY_PATH_KEYS.get(editor) || new Set())(
                    editor
                  ).delete(key),
                  path
                )
              }
            if (Editor.isNormalizing(editor)) {
              if (force) {
                var allPaths = Array.from(Node.nodes(editor), (_ref) => {
                    var [, p] = _ref
                    return p
                  }),
                  allPathKeys = new Set(allPaths.map((p) => p.join(',')))
                ;(DIRTY_PATHS.set(editor, allPaths),
                  DIRTY_PATH_KEYS.set(editor, allPathKeys))
              }
              0 !== getDirtyPaths(editor).length &&
                Editor.withoutNormalizing(editor, () => {
                  for (var dirtyPath of getDirtyPaths(editor))
                    if (Node.has(editor, dirtyPath)) {
                      var entry = Editor.node(editor, dirtyPath),
                        [node, _] = entry
                      Element.isElement(node) &&
                        0 === node.children.length &&
                        editor.normalizeNode(entry, { operation })
                    }
                  for (
                    var dirtyPaths = getDirtyPaths(editor),
                      initialDirtyPathsLength = dirtyPaths.length,
                      iteration = 0;
                    0 !== dirtyPaths.length;

                  ) {
                    if (
                      !editor.shouldNormalize({
                        dirtyPaths,
                        iteration,
                        initialDirtyPathsLength,
                        operation,
                      })
                    )
                      return
                    var _dirtyPath = popDirtyPath(editor)
                    if (Node.has(editor, _dirtyPath)) {
                      var _entry = Editor.node(editor, _dirtyPath)
                      editor.normalizeNode(_entry, { operation })
                    }
                    ;(iteration++, (dirtyPaths = getDirtyPaths(editor)))
                  }
                })
            }
          },
          parent = function parent(editor, at) {
            var options =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              path = Editor.path(editor, at, options),
              parentPath = Path.parent(path)
            return Editor.node(editor, parentPath)
          },
          pathRef = function pathRef(editor, path) {
            var options =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { affinity = 'forward' } = options,
              ref = {
                current: path,
                affinity,
                unref() {
                  var { current } = ref
                  return (
                    Editor.pathRefs(editor).delete(ref),
                    (ref.current = null),
                    current
                  )
                },
              }
            return (Editor.pathRefs(editor).add(ref), ref)
          },
          pathRefs = (editor) => {
            var refs = PATH_REFS.get(editor)
            return (
              refs || ((refs = new Set()), PATH_REFS.set(editor, refs)),
              refs
            )
          },
          path = function path(editor, at) {
            var options =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { depth, edge } = options
            if (Path.isPath(at))
              if ('start' === edge) {
                var [, firstPath] = Node.first(editor, at)
                at = firstPath
              } else if ('end' === edge) {
                var [, lastPath] = Node.last(editor, at)
                at = lastPath
              }
            return (
              Range.isRange(at) &&
                (at =
                  'start' === edge
                    ? Range.start(at)
                    : 'end' === edge
                      ? Range.end(at)
                      : Path.common(at.anchor.path, at.focus.path)),
              Point.isPoint(at) && (at = at.path),
              null != depth && (at = at.slice(0, depth)),
              at
            )
          },
          pointRef = function pointRef(editor, point) {
            var options =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { affinity = 'forward' } = options,
              ref = {
                current: point,
                affinity,
                unref() {
                  var { current } = ref
                  return (
                    Editor.pointRefs(editor).delete(ref),
                    (ref.current = null),
                    current
                  )
                },
              }
            return (Editor.pointRefs(editor).add(ref), ref)
          },
          pointRefs = (editor) => {
            var refs = POINT_REFS.get(editor)
            return (
              refs || ((refs = new Set()), POINT_REFS.set(editor, refs)),
              refs
            )
          },
          point = function point(editor, at) {
            var options =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { edge = 'start' } = options
            if (Path.isPath(at)) {
              var path
              if ('end' === edge) {
                var [, lastPath] = Node.last(editor, at)
                path = lastPath
              } else {
                var [, firstPath] = Node.first(editor, at)
                path = firstPath
              }
              var node = Node.get(editor, path)
              if (!Text.isText(node))
                throw new Error(
                  'Cannot get the '
                    .concat(edge, ' point in the node at path [')
                    .concat(at, '] because it has no ')
                    .concat(edge, ' text node.')
                )
              return { path, offset: 'end' === edge ? node.text.length : 0 }
            }
            if (Range.isRange(at)) {
              var [start, end] = Range.edges(at)
              return 'start' === edge ? start : end
            }
            return at
          }
        function positions(editor) {
          var options =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          return (function* () {
            var {
              at = editor.selection,
              unit = 'offset',
              reverse = !1,
              voids = !1,
            } = options
            if (at) {
              var range = Editor.range(editor, at),
                [start, end] = Range.edges(range),
                first = reverse ? end : start,
                isNewBlock = !1,
                blockText = '',
                distance = 0,
                leafTextRemaining = 0,
                leafTextOffset = 0
              for (var [node, path] of Editor.nodes(editor, {
                at,
                reverse,
                voids,
              })) {
                if (Element.isElement(node)) {
                  if (!editor.isSelectable(node)) {
                    if (reverse) {
                      yield Editor.end(editor, Path.previous(path))
                      continue
                    }
                    yield Editor.start(editor, Path.next(path))
                    continue
                  }
                  if (
                    !voids &&
                    (editor.isVoid(node) || editor.isElementReadOnly(node))
                  ) {
                    yield Editor.start(editor, path)
                    continue
                  }
                  if (editor.isInline(node)) continue
                  if (Editor.hasInlines(editor, node)) {
                    var e = Path.isAncestor(path, end.path)
                        ? end
                        : Editor.end(editor, path),
                      s = Path.isAncestor(path, start.path)
                        ? start
                        : Editor.start(editor, path)
                    ;((blockText = Editor.string(
                      editor,
                      { anchor: s, focus: e },
                      { voids }
                    )),
                      (isNewBlock = !0))
                  }
                }
                if (Text.isText(node)) {
                  var isFirst = Path.equals(path, first.path)
                  for (
                    isFirst
                      ? ((leafTextRemaining = reverse
                          ? first.offset
                          : node.text.length - first.offset),
                        (leafTextOffset = first.offset))
                      : ((leafTextRemaining = node.text.length),
                        (leafTextOffset = reverse ? leafTextRemaining : 0)),
                      (isFirst || isNewBlock || 'offset' === unit) &&
                        (yield { path, offset: leafTextOffset },
                        (isNewBlock = !1));
                    ;

                  ) {
                    if (0 === distance) {
                      if ('' === blockText) break
                      ;((distance = calcDistance(blockText, unit, reverse)),
                        (blockText = splitByCharacterDistance(
                          blockText,
                          distance,
                          reverse
                        )[1]))
                    }
                    if (
                      ((leafTextOffset = reverse
                        ? leafTextOffset - distance
                        : leafTextOffset + distance),
                      (leafTextRemaining -= distance) < 0)
                    ) {
                      distance = -leafTextRemaining
                      break
                    }
                    ;((distance = 0), yield { path, offset: leafTextOffset })
                  }
                }
              }
            }
            function calcDistance(text, unit, reverse) {
              return 'character' === unit
                ? getCharacterDistance(text, reverse)
                : 'word' === unit
                  ? getWordDistance(text, reverse)
                  : 'line' === unit || 'block' === unit
                    ? text.length
                    : 1
            }
          })()
        }
        var rangeRef = function rangeRef(editor, range) {
            var options =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { affinity = 'forward' } = options,
              ref = {
                current: range,
                affinity,
                unref() {
                  var { current } = ref
                  return (
                    Editor.rangeRefs(editor).delete(ref),
                    (ref.current = null),
                    current
                  )
                },
              }
            return (Editor.rangeRefs(editor).add(ref), ref)
          },
          rangeRefs = (editor) => {
            var refs = RANGE_REFS.get(editor)
            return (
              refs || ((refs = new Set()), RANGE_REFS.set(editor, refs)),
              refs
            )
          },
          range = (editor, at, to) =>
            Range.isRange(at) && !to
              ? at
              : {
                  anchor: Editor.start(editor, at),
                  focus: Editor.end(editor, to || at),
                }
        function ownKeys$2(e, r) {
          var t = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e)
            ;(r &&
              (o = o.filter(function (r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable
              })),
              t.push.apply(t, o))
          }
          return t
        }
        var removeMark = (editor, key) => {
            var { selection } = editor
            if (selection) {
              var match = (node, path) => {
                  if (!Text.isText(node)) return !1
                  var [parentNode, parentPath] = Editor.parent(editor, path)
                  return (
                    !editor.isVoid(parentNode) ||
                    editor.markableVoid(parentNode)
                  )
                },
                expandedSelection = Range.isExpanded(selection),
                markAcceptingVoidSelected = !1
              if (!expandedSelection) {
                var [selectedNode, selectedPath] = Editor.node(
                  editor,
                  selection
                )
                if (selectedNode && match(selectedNode, selectedPath)) {
                  var [parentNode] = Editor.parent(editor, selectedPath)
                  markAcceptingVoidSelected =
                    parentNode && editor.markableVoid(parentNode)
                }
              }
              if (expandedSelection || markAcceptingVoidSelected)
                Transforms.unsetNodes(editor, key, {
                  match,
                  split: !0,
                  voids: !0,
                })
              else {
                var marks = (function _objectSpread$2(e) {
                  for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {}
                    r % 2
                      ? ownKeys$2(Object(t), !0).forEach(function (r) {
                          _defineProperty(e, r, t[r])
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(t)
                          )
                        : ownKeys$2(Object(t)).forEach(function (r) {
                            Object.defineProperty(
                              e,
                              r,
                              Object.getOwnPropertyDescriptor(t, r)
                            )
                          })
                  }
                  return e
                })({}, Editor.marks(editor) || {})
                ;(delete marks[key],
                  (editor.marks = marks),
                  FLUSHING.get(editor) || editor.onChange())
              }
            }
          },
          setNormalizing = (editor, isNormalizing) => {
            NORMALIZING.set(editor, isNormalizing)
          },
          start = (editor, at) => Editor.point(editor, at, { edge: 'start' }),
          string = function string(editor, at) {
            var options =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { voids = !1 } = options,
              range = Editor.range(editor, at),
              [start, end] = Range.edges(range),
              text = ''
            for (var [node, path] of Editor.nodes(editor, {
              at: range,
              match: Text.isText,
              voids,
            })) {
              var t = node.text
              ;(Path.equals(path, end.path) && (t = t.slice(0, end.offset)),
                Path.equals(path, start.path) && (t = t.slice(start.offset)),
                (text += t))
            }
            return text
          },
          unhangRange = function unhangRange(editor, range) {
            var options =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { voids = !1 } = options,
              [start, end] = Range.edges(range)
            if (
              0 !== start.offset ||
              0 !== end.offset ||
              Range.isCollapsed(range) ||
              Path.hasPrevious(end.path)
            )
              return range
            var endBlock = Editor.above(editor, {
                at: end,
                match: (n) => Element.isElement(n) && Editor.isBlock(editor, n),
                voids,
              }),
              blockPath = endBlock ? endBlock[1] : [],
              before = { anchor: Editor.start(editor, start), focus: end },
              skip = !0
            for (var [node, path] of Editor.nodes(editor, {
              at: before,
              match: Text.isText,
              reverse: !0,
              voids,
            }))
              if (skip) skip = !1
              else if ('' !== node.text || Path.isBefore(path, blockPath)) {
                end = { path, offset: node.text.length }
                break
              }
            return { anchor: start, focus: end }
          },
          withoutNormalizing = (editor, fn) => {
            var value = Editor.isNormalizing(editor)
            Editor.setNormalizing(editor, !1)
            try {
              fn()
            } finally {
              Editor.setNormalizing(editor, value)
            }
            Editor.normalize(editor)
          },
          insertFragment = function insertFragment(editor, fragment) {
            var options =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {}
            Editor.withoutNormalizing(editor, () => {
              var { hanging = !1, voids = !1 } = options,
                { at = getDefaultInsertLocation(editor), batchDirty = !0 } =
                  options
              if (fragment.length) {
                if (Range.isRange(at))
                  if (
                    (hanging ||
                      (at = Editor.unhangRange(editor, at, { voids })),
                    Range.isCollapsed(at))
                  )
                    at = at.anchor
                  else {
                    var [, end] = Range.edges(at)
                    if (!voids && Editor.void(editor, { at: end })) return
                    var pointRef = Editor.pointRef(editor, end)
                    ;(Transforms.delete(editor, { at }),
                      (at = pointRef.unref()))
                  }
                else Path.isPath(at) && (at = Editor.start(editor, at))
                if (voids || !Editor.void(editor, { at })) {
                  var inlineElementMatch = Editor.above(editor, {
                    at,
                    match: (n) =>
                      Element.isElement(n) && Editor.isInline(editor, n),
                    mode: 'highest',
                    voids,
                  })
                  if (inlineElementMatch) {
                    var [, _inlinePath] = inlineElementMatch
                    if (Editor.isEnd(editor, at, _inlinePath))
                      at = Editor.after(editor, _inlinePath)
                    else if (Editor.isStart(editor, at, _inlinePath)) {
                      at = Editor.before(editor, _inlinePath)
                    }
                  }
                  var blockMatch = Editor.above(editor, {
                      match: (n) =>
                        Element.isElement(n) && Editor.isBlock(editor, n),
                      at,
                      voids,
                    }),
                    [, blockPath] = blockMatch,
                    isBlockStart = Editor.isStart(editor, at, blockPath),
                    isBlockEnd = Editor.isEnd(editor, at, blockPath),
                    isBlockEmpty = isBlockStart && isBlockEnd,
                    [, firstLeafPath] = Node.first({ children: fragment }, []),
                    [, lastLeafPath] = Node.last({ children: fragment }, []),
                    shouldInsert = (_ref) => {
                      var [n, p] = _ref
                      return (
                        !(0 === p.length) &&
                        (!!isBlockEmpty ||
                          (!(
                            !isBlockStart &&
                            Path.isAncestor(p, firstLeafPath) &&
                            Element.isElement(n) &&
                            !editor.isVoid(n) &&
                            !editor.isInline(n)
                          ) &&
                            !(
                              !isBlockEnd &&
                              Path.isAncestor(p, lastLeafPath) &&
                              Element.isElement(n) &&
                              !editor.isVoid(n) &&
                              !editor.isInline(n)
                            )))
                      )
                    },
                    starting = !0,
                    starts = [],
                    middles = [],
                    ends = []
                  for (var entry of Node.nodes(
                    { children: fragment },
                    { pass: shouldInsert }
                  )) {
                    var [node, path] = entry
                    ;(starting &&
                      Element.isElement(node) &&
                      !editor.isInline(node) &&
                      !Path.isAncestor(path, firstLeafPath) &&
                      (starting = !1),
                      shouldInsert(entry) &&
                        (Element.isElement(node) && !editor.isInline(node)
                          ? ((starting = !1), middles.push(node))
                          : starting
                            ? starts.push(node)
                            : ends.push(node)))
                  }
                  var [inlineMatch] = Editor.nodes(editor, {
                      at,
                      match: (n) =>
                        Text.isText(n) || Editor.isInline(editor, n),
                      mode: 'highest',
                      voids,
                    }),
                    [, inlinePath] = inlineMatch,
                    isInlineStart = Editor.isStart(editor, at, inlinePath),
                    isInlineEnd = Editor.isEnd(editor, at, inlinePath),
                    middleRef = Editor.pathRef(
                      editor,
                      isBlockEnd && !ends.length
                        ? Path.next(blockPath)
                        : blockPath
                    ),
                    endRef = Editor.pathRef(
                      editor,
                      isInlineEnd ? Path.next(inlinePath) : inlinePath
                    ),
                    splitBlock = ends.length > 0
                  Transforms.splitNodes(editor, {
                    at,
                    match: (n) =>
                      splitBlock
                        ? Element.isElement(n) && Editor.isBlock(editor, n)
                        : Text.isText(n) || Editor.isInline(editor, n),
                    mode: splitBlock ? 'lowest' : 'highest',
                    always:
                      splitBlock &&
                      (!isBlockStart || starts.length > 0) &&
                      (!isBlockEnd || ends.length > 0),
                    voids,
                  })
                  var _path,
                    startRef = Editor.pathRef(
                      editor,
                      !isInlineStart || (isInlineStart && isInlineEnd)
                        ? Path.next(inlinePath)
                        : inlinePath
                    )
                  if (
                    (Transforms.insertNodes(editor, starts, {
                      at: startRef.current,
                      match: (n) =>
                        Text.isText(n) || Editor.isInline(editor, n),
                      mode: 'highest',
                      voids,
                      batchDirty,
                    }),
                    isBlockEmpty &&
                      !starts.length &&
                      middles.length &&
                      !ends.length &&
                      Transforms.delete(editor, { at: blockPath, voids }),
                    Transforms.insertNodes(editor, middles, {
                      at: middleRef.current,
                      match: (n) =>
                        Element.isElement(n) && Editor.isBlock(editor, n),
                      mode: 'lowest',
                      voids,
                      batchDirty,
                    }),
                    Transforms.insertNodes(editor, ends, {
                      at: endRef.current,
                      match: (n) =>
                        Text.isText(n) || Editor.isInline(editor, n),
                      mode: 'highest',
                      voids,
                      batchDirty,
                    }),
                    !options.at)
                  )
                    if (
                      (ends.length > 0 && endRef.current
                        ? (_path = Path.previous(endRef.current))
                        : middles.length > 0 && middleRef.current
                          ? (_path = Path.previous(middleRef.current))
                          : startRef.current &&
                            (_path = Path.previous(startRef.current)),
                      _path)
                    ) {
                      var _end = Editor.end(editor, _path)
                      Transforms.select(editor, _end)
                    }
                  ;(startRef.unref(), middleRef.unref(), endRef.unref())
                }
              }
            })
          },
          collapse = function collapse(editor) {
            var options =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { edge = 'anchor' } = options,
              { selection } = editor
            if (selection)
              if ('anchor' === edge) Transforms.select(editor, selection.anchor)
              else if ('focus' === edge)
                Transforms.select(editor, selection.focus)
              else if ('start' === edge) {
                var [start] = Range.edges(selection)
                Transforms.select(editor, start)
              } else if ('end' === edge) {
                var [, end] = Range.edges(selection)
                Transforms.select(editor, end)
              }
          },
          deselect = (editor) => {
            var { selection } = editor
            selection &&
              editor.apply({
                type: 'set_selection',
                properties: selection,
                newProperties: null,
              })
          },
          move = function move(editor) {
            var options =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { selection } = editor,
              { distance = 1, unit = 'character', reverse = !1 } = options,
              { edge = null } = options
            if (selection) {
              ;('start' === edge &&
                (edge = Range.isBackward(selection) ? 'focus' : 'anchor'),
                'end' === edge &&
                  (edge = Range.isBackward(selection) ? 'anchor' : 'focus'))
              var { anchor, focus } = selection,
                opts = { distance, unit },
                props = {}
              if (null == edge || 'anchor' === edge) {
                var point = reverse
                  ? Editor.before(editor, anchor, opts)
                  : Editor.after(editor, anchor, opts)
                point && (props.anchor = point)
              }
              if (null == edge || 'focus' === edge) {
                var _point = reverse
                  ? Editor.before(editor, focus, opts)
                  : Editor.after(editor, focus, opts)
                _point && (props.focus = _point)
              }
              Transforms.setSelection(editor, props)
            }
          },
          select = (editor, target) => {
            var { selection } = editor
            if (((target = Editor.range(editor, target)), selection))
              Transforms.setSelection(editor, target)
            else {
              if (!Range.isRange(target))
                throw new Error(
                  'When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: '.concat(
                    Scrubber.stringify(target)
                  )
                )
              editor.apply({
                type: 'set_selection',
                properties: selection,
                newProperties: target,
              })
            }
          }
        function ownKeys$1(e, r) {
          var t = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e)
            ;(r &&
              (o = o.filter(function (r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable
              })),
              t.push.apply(t, o))
          }
          return t
        }
        function _objectSpread$1(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {}
            r % 2
              ? ownKeys$1(Object(t), !0).forEach(function (r) {
                  _defineProperty(e, r, t[r])
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(t)
                  )
                : ownKeys$1(Object(t)).forEach(function (r) {
                    Object.defineProperty(
                      e,
                      r,
                      Object.getOwnPropertyDescriptor(t, r)
                    )
                  })
          }
          return e
        }
        var setPoint = function setPoint(editor, props) {
            var options =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { selection } = editor,
              { edge = 'both' } = options
            if (selection) {
              ;('start' === edge &&
                (edge = Range.isBackward(selection) ? 'focus' : 'anchor'),
                'end' === edge &&
                  (edge = Range.isBackward(selection) ? 'anchor' : 'focus'))
              var { anchor, focus } = selection,
                point = 'anchor' === edge ? anchor : focus
              Transforms.setSelection(editor, {
                ['anchor' === edge ? 'anchor' : 'focus']: _objectSpread$1(
                  _objectSpread$1({}, point),
                  props
                ),
              })
            }
          },
          setSelection = (editor, props) => {
            var { selection } = editor,
              oldProps = {},
              newProps = {}
            if (selection) {
              for (var k in props)
                (('anchor' === k &&
                  null != props.anchor &&
                  !Point.equals(props.anchor, selection.anchor)) ||
                  ('focus' === k &&
                    null != props.focus &&
                    !Point.equals(props.focus, selection.focus)) ||
                  ('anchor' !== k &&
                    'focus' !== k &&
                    props[k] !== selection[k])) &&
                  ((oldProps[k] = selection[k]), (newProps[k] = props[k]))
              Object.keys(oldProps).length > 0 &&
                editor.apply({
                  type: 'set_selection',
                  properties: oldProps,
                  newProperties: newProps,
                })
            }
          },
          insertNodes = function insertNodes(editor, nodes) {
            var options =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {}
            Editor.withoutNormalizing(editor, () => {
              var {
                  hanging = !1,
                  voids = !1,
                  mode = 'lowest',
                  batchDirty = !0,
                } = options,
                { at, match, select } = options
              if (
                (Node.isNode(nodes) && (nodes = [nodes]), 0 !== nodes.length)
              ) {
                var [node] = nodes
                if (
                  (at ||
                    ((at = getDefaultInsertLocation(editor)),
                    !1 !== select && (select = !0)),
                  null == select && (select = !1),
                  Range.isRange(at))
                )
                  if (
                    (hanging ||
                      (at = Editor.unhangRange(editor, at, { voids })),
                    Range.isCollapsed(at))
                  )
                    at = at.anchor
                  else {
                    var [, end] = Range.edges(at),
                      pointRef = Editor.pointRef(editor, end)
                    ;(Transforms.delete(editor, { at }),
                      (at = pointRef.unref()))
                  }
                if (Point.isPoint(at)) {
                  null == match &&
                    (match = Text.isText(node)
                      ? (n) => Text.isText(n)
                      : editor.isInline(node)
                        ? (n) => Text.isText(n) || Editor.isInline(editor, n)
                        : (n) =>
                            Element.isElement(n) && Editor.isBlock(editor, n))
                  var [entry] = Editor.nodes(editor, {
                    at: at.path,
                    match,
                    mode,
                    voids,
                  })
                  if (!entry) return
                  var [, matchPath] = entry,
                    pathRef = Editor.pathRef(editor, matchPath),
                    isAtEnd = Editor.isEnd(editor, at, matchPath)
                  Transforms.splitNodes(editor, { at, match, mode, voids })
                  var path = pathRef.unref()
                  at = isAtEnd ? Path.next(path) : path
                }
                var parentPath = Path.parent(at),
                  index = at[at.length - 1]
                if (voids || !Editor.void(editor, { at: parentPath })) {
                  if (batchDirty) {
                    var batchedOps = [],
                      newDirtyPaths = Path.levels(parentPath)
                    ;((editor, fn, update) => {
                      var value = BATCHING_DIRTY_PATHS.get(editor) || !1
                      BATCHING_DIRTY_PATHS.set(editor, !0)
                      try {
                        ;(fn(), update())
                      } finally {
                        BATCHING_DIRTY_PATHS.set(editor, value)
                      }
                    })(
                      editor,
                      () => {
                        var _loop = function _loop() {
                          var path = parentPath.concat(index)
                          index++
                          var op = { type: 'insert_node', path, node: _node }
                          ;(editor.apply(op),
                            (at = Path.next(at)),
                            batchedOps.push(op),
                            Text.isText(_node)
                              ? newDirtyPaths.push(path)
                              : newDirtyPaths.push(
                                  ...Array.from(Node.nodes(_node), (_ref) => {
                                    var [, p] = _ref
                                    return path.concat(p)
                                  })
                                ))
                        }
                        for (var _node of nodes) _loop()
                      },
                      () => {
                        updateDirtyPaths(editor, newDirtyPaths, (p) => {
                          var newPath = p
                          for (var op of batchedOps)
                            if (
                              Path.operationCanTransformPath(op) &&
                              !(newPath = Path.transform(newPath, op))
                            )
                              return null
                          return newPath
                        })
                      }
                    )
                  } else
                    for (var _node2 of nodes) {
                      var _path = parentPath.concat(index)
                      ;(index++,
                        editor.apply({
                          type: 'insert_node',
                          path: _path,
                          node: _node2,
                        }),
                        (at = Path.next(at)))
                    }
                  if (((at = Path.previous(at)), select)) {
                    var point = Editor.end(editor, at)
                    point && Transforms.select(editor, point)
                  }
                }
              }
            })
          },
          liftNodes = function liftNodes(editor) {
            var options =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {}
            Editor.withoutNormalizing(editor, () => {
              var {
                  at = editor.selection,
                  mode = 'lowest',
                  voids = !1,
                } = options,
                { match } = options
              if (
                (null == match &&
                  (match = Path.isPath(at)
                    ? matchPath(editor, at)
                    : (n) => Element.isElement(n) && Editor.isBlock(editor, n)),
                at)
              ) {
                var matches = Editor.nodes(editor, { at, match, mode, voids }),
                  pathRefs = Array.from(matches, (_ref) => {
                    var [, p] = _ref
                    return Editor.pathRef(editor, p)
                  })
                for (var pathRef of pathRefs) {
                  var path = pathRef.unref()
                  if (path.length < 2)
                    throw new Error(
                      'Cannot lift node at a path ['.concat(
                        path,
                        '] because it has a depth of less than `2`.'
                      )
                    )
                  var parentNodeEntry = Editor.node(editor, Path.parent(path)),
                    [parent, parentPath] = parentNodeEntry,
                    index = path[path.length - 1],
                    { length } = parent.children
                  if (1 === length) {
                    var toPath = Path.next(parentPath)
                    ;(Transforms.moveNodes(editor, {
                      at: path,
                      to: toPath,
                      voids,
                    }),
                      Transforms.removeNodes(editor, { at: parentPath, voids }))
                  } else if (0 === index)
                    Transforms.moveNodes(editor, {
                      at: path,
                      to: parentPath,
                      voids,
                    })
                  else if (index === length - 1) {
                    var _toPath = Path.next(parentPath)
                    Transforms.moveNodes(editor, {
                      at: path,
                      to: _toPath,
                      voids,
                    })
                  } else {
                    var splitPath = Path.next(path),
                      _toPath2 = Path.next(parentPath)
                    ;(Transforms.splitNodes(editor, { at: splitPath, voids }),
                      Transforms.moveNodes(editor, {
                        at: path,
                        to: _toPath2,
                        voids,
                      }))
                  }
                }
              }
            })
          },
          _excluded = ['text'],
          _excluded2 = ['children'],
          hasSingleChildNest = (editor, node) => {
            if (Element.isElement(node)) {
              var element = node
              return (
                !!Editor.isVoid(editor, node) ||
                (1 === element.children.length &&
                  hasSingleChildNest(editor, element.children[0]))
              )
            }
            return !Editor.isEditor(node)
          },
          moveNodes = (editor, options) => {
            Editor.withoutNormalizing(editor, () => {
              var {
                  to,
                  at = editor.selection,
                  mode = 'lowest',
                  voids = !1,
                } = options,
                { match } = options
              if (at) {
                null == match &&
                  (match = Path.isPath(at)
                    ? matchPath(editor, at)
                    : (n) => Element.isElement(n) && Editor.isBlock(editor, n))
                var toRef = Editor.pathRef(editor, to),
                  targets = Editor.nodes(editor, { at, match, mode, voids }),
                  pathRefs = Array.from(targets, (_ref) => {
                    var [, p] = _ref
                    return Editor.pathRef(editor, p)
                  })
                for (var pathRef of pathRefs) {
                  var path = pathRef.unref(),
                    newPath = toRef.current
                  ;(0 !== path.length &&
                    editor.apply({ type: 'move_node', path, newPath }),
                    toRef.current &&
                      Path.isSibling(newPath, path) &&
                      Path.isAfter(newPath, path) &&
                      (toRef.current = Path.next(toRef.current)))
                }
                toRef.unref()
              }
            })
          },
          removeNodes = function removeNodes(editor) {
            var options =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {}
            Editor.withoutNormalizing(editor, () => {
              var { hanging = !1, voids = !1, mode = 'lowest' } = options,
                { at = editor.selection, match } = options
              if (at) {
                ;(null == match &&
                  (match = Path.isPath(at)
                    ? matchPath(editor, at)
                    : (n) => Element.isElement(n) && Editor.isBlock(editor, n)),
                  !hanging &&
                    Range.isRange(at) &&
                    (at = Editor.unhangRange(editor, at, { voids })))
                var depths = Editor.nodes(editor, { at, match, mode, voids }),
                  pathRefs = Array.from(depths, (_ref) => {
                    var [, p] = _ref
                    return Editor.pathRef(editor, p)
                  })
                for (var pathRef of pathRefs) {
                  var path = pathRef.unref()
                  if (path) {
                    var [node] = Editor.node(editor, path)
                    editor.apply({ type: 'remove_node', path, node })
                  }
                }
              }
            })
          },
          setNodes = function setNodes(editor, props) {
            var options =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {}
            Editor.withoutNormalizing(editor, () => {
              var { match, at = editor.selection, compare, merge } = options,
                {
                  hanging = !1,
                  mode = 'lowest',
                  split = !1,
                  voids = !1,
                } = options
              if (at) {
                if (
                  (null == match &&
                    (match = Path.isPath(at)
                      ? matchPath(editor, at)
                      : (n) =>
                          Element.isElement(n) && Editor.isBlock(editor, n)),
                  !hanging &&
                    Range.isRange(at) &&
                    (at = Editor.unhangRange(editor, at, { voids })),
                  split && Range.isRange(at))
                ) {
                  if (
                    Range.isCollapsed(at) &&
                    Editor.leaf(editor, at.anchor)[0].text.length > 0
                  )
                    return
                  var rangeRef = Editor.rangeRef(editor, at, {
                      affinity: 'inward',
                    }),
                    [start, end] = Range.edges(at),
                    splitMode = 'lowest' === mode ? 'lowest' : 'highest',
                    endAtEndOfNode = Editor.isEnd(editor, end, end.path)
                  Transforms.splitNodes(editor, {
                    at: end,
                    match,
                    mode: splitMode,
                    voids,
                    always: !endAtEndOfNode,
                  })
                  var startAtStartOfNode = Editor.isStart(
                    editor,
                    start,
                    start.path
                  )
                  ;(Transforms.splitNodes(editor, {
                    at: start,
                    match,
                    mode: splitMode,
                    voids,
                    always: !startAtStartOfNode,
                  }),
                    (at = rangeRef.unref()),
                    null == options.at && Transforms.select(editor, at))
                }
                for (var [node, path] of (compare ||
                  (compare = (prop, nodeProp) => prop !== nodeProp),
                Editor.nodes(editor, { at, match, mode, voids }))) {
                  var properties = {},
                    newProperties = {}
                  if (0 !== path.length) {
                    var hasChanges = !1
                    for (var k in props)
                      'children' !== k &&
                        'text' !== k &&
                        compare(props[k], node[k]) &&
                        ((hasChanges = !0),
                        node.hasOwnProperty(k) && (properties[k] = node[k]),
                        merge
                          ? null != props[k] &&
                            (newProperties[k] = merge(node[k], props[k]))
                          : null != props[k] && (newProperties[k] = props[k]))
                    hasChanges &&
                      editor.apply({
                        type: 'set_node',
                        path,
                        properties,
                        newProperties,
                      })
                  }
                }
              }
            })
          },
          splitNodes = function splitNodes(editor) {
            var options =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {}
            Editor.withoutNormalizing(editor, () => {
              var { mode = 'lowest', voids = !1 } = options,
                {
                  match,
                  at = editor.selection,
                  height = 0,
                  always = !1,
                } = options
              if (
                (null == match &&
                  (match = (n) =>
                    Element.isElement(n) && Editor.isBlock(editor, n)),
                Range.isRange(at) &&
                  (at = ((editor, range) => {
                    if (Range.isCollapsed(range)) return range.anchor
                    var [, end] = Range.edges(range),
                      pointRef = Editor.pointRef(editor, end)
                    return (
                      Transforms.delete(editor, { at: range }),
                      pointRef.unref()
                    )
                  })(editor, at)),
                Path.isPath(at))
              ) {
                var path = at,
                  point = Editor.point(editor, path),
                  [parent] = Editor.parent(editor, path)
                ;((match = (n) => n === parent),
                  (height = point.path.length - path.length + 1),
                  (at = point),
                  (always = !0))
              }
              if (at) {
                var afterRef,
                  beforeRef = Editor.pointRef(editor, at, {
                    affinity: 'backward',
                  })
                try {
                  var [highest] = Editor.nodes(editor, {
                    at,
                    match,
                    mode,
                    voids,
                  })
                  if (!highest) return
                  var voidMatch = Editor.void(editor, { at, mode: 'highest' })
                  if (!voids && voidMatch) {
                    var [voidNode, voidPath] = voidMatch
                    if (
                      Element.isElement(voidNode) &&
                      editor.isInline(voidNode)
                    ) {
                      var after = Editor.after(editor, voidPath)
                      if (!after) {
                        var afterPath = Path.next(voidPath)
                        ;(Transforms.insertNodes(
                          editor,
                          { text: '' },
                          { at: afterPath, voids }
                        ),
                          (after = Editor.point(editor, afterPath)))
                      }
                      ;((at = after), (always = !0))
                    }
                    ;((height = at.path.length - voidPath.length + 1),
                      (always = !0))
                  }
                  afterRef = Editor.pointRef(editor, at)
                  var depth = at.path.length - height,
                    [, highestPath] = highest,
                    lowestPath = at.path.slice(0, depth),
                    position = 0 === height ? at.offset : at.path[depth] + 0
                  for (var [node, _path] of Editor.levels(editor, {
                    at: lowestPath,
                    reverse: !0,
                    voids,
                  })) {
                    var split = !1
                    if (
                      _path.length < highestPath.length ||
                      0 === _path.length ||
                      (!voids &&
                        Element.isElement(node) &&
                        Editor.isVoid(editor, node))
                    )
                      break
                    var _point = beforeRef.current,
                      isEnd = Editor.isEnd(editor, _point, _path)
                    if (
                      always ||
                      !beforeRef ||
                      !Editor.isEdge(editor, _point, _path)
                    ) {
                      split = !0
                      var properties = Node.extractProps(node)
                      editor.apply({
                        type: 'split_node',
                        path: _path,
                        position,
                        properties,
                      })
                    }
                    position =
                      _path[_path.length - 1] + (split || isEnd ? 1 : 0)
                  }
                  if (null == options.at) {
                    var _point2 = afterRef.current || Editor.end(editor, [])
                    Transforms.select(editor, _point2)
                  }
                } finally {
                  var _afterRef
                  ;(beforeRef.unref(),
                    null === (_afterRef = afterRef) ||
                      void 0 === _afterRef ||
                      _afterRef.unref())
                }
              }
            })
          },
          unsetNodes = function unsetNodes(editor, props) {
            var options =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {}
            Array.isArray(props) || (props = [props])
            var obj = {}
            for (var key of props) obj[key] = null
            Transforms.setNodes(editor, obj, options)
          },
          unwrapNodes = function unwrapNodes(editor) {
            var options =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {}
            Editor.withoutNormalizing(editor, () => {
              var { mode = 'lowest', split = !1, voids = !1 } = options,
                { at = editor.selection, match } = options
              if (at) {
                ;(null == match &&
                  (match = Path.isPath(at)
                    ? matchPath(editor, at)
                    : (n) => Element.isElement(n) && Editor.isBlock(editor, n)),
                  Path.isPath(at) && (at = Editor.range(editor, at)))
                var rangeRef = Range.isRange(at)
                    ? Editor.rangeRef(editor, at)
                    : null,
                  matches = Editor.nodes(editor, { at, match, mode, voids }),
                  pathRefs = Array.from(matches, (_ref) => {
                    var [, p] = _ref
                    return Editor.pathRef(editor, p)
                  }).reverse(),
                  _loop = function _loop() {
                    var path = pathRef.unref(),
                      [node] = Editor.node(editor, path),
                      range = Editor.range(editor, path)
                    ;(split &&
                      rangeRef &&
                      (range = Range.intersection(rangeRef.current, range)),
                      Transforms.liftNodes(editor, {
                        at: range,
                        match: (n) =>
                          Element.isAncestor(node) && node.children.includes(n),
                        voids,
                      }))
                  }
                for (var pathRef of pathRefs) _loop()
                rangeRef && rangeRef.unref()
              }
            })
          }
        function ownKeys(e, r) {
          var t = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e)
            ;(r &&
              (o = o.filter(function (r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable
              })),
              t.push.apply(t, o))
          }
          return t
        }
        function _objectSpread(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {}
            r % 2
              ? ownKeys(Object(t), !0).forEach(function (r) {
                  _defineProperty(e, r, t[r])
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(t)
                  )
                : ownKeys(Object(t)).forEach(function (r) {
                    Object.defineProperty(
                      e,
                      r,
                      Object.getOwnPropertyDescriptor(t, r)
                    )
                  })
          }
          return e
        }
        var wrapNodes = function wrapNodes(editor, element) {
            var options =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {}
            Editor.withoutNormalizing(editor, () => {
              var { mode = 'lowest', split = !1, voids = !1 } = options,
                { match, at = editor.selection } = options
              if (at) {
                if (
                  (null == match &&
                    (match = Path.isPath(at)
                      ? matchPath(editor, at)
                      : editor.isInline(element)
                        ? (n) =>
                            (Element.isElement(n) &&
                              Editor.isInline(editor, n)) ||
                            Text.isText(n)
                        : (n) =>
                            Element.isElement(n) && Editor.isBlock(editor, n)),
                  split && Range.isRange(at))
                ) {
                  var [start, end] = Range.edges(at),
                    rangeRef = Editor.rangeRef(editor, at, {
                      affinity: 'inward',
                    })
                  ;(Transforms.splitNodes(editor, { at: end, match, voids }),
                    Transforms.splitNodes(editor, { at: start, match, voids }),
                    (at = rangeRef.unref()),
                    null == options.at && Transforms.select(editor, at))
                }
                var roots = Array.from(
                    Editor.nodes(editor, {
                      at,
                      match: editor.isInline(element)
                        ? (n) =>
                            Element.isElement(n) && Editor.isBlock(editor, n)
                        : (n) => Editor.isEditor(n),
                      mode: 'lowest',
                      voids,
                    })
                  ),
                  _loop = function _loop() {
                    var a = Range.isRange(at)
                      ? Range.intersection(at, Editor.range(editor, rootPath))
                      : at
                    if (!a) return 0
                    var matches = Array.from(
                      Editor.nodes(editor, { at: a, match, mode, voids })
                    )
                    if (matches.length > 0) {
                      var [first] = matches,
                        last = matches[matches.length - 1],
                        [, firstPath] = first,
                        [, lastPath] = last
                      if (0 === firstPath.length && 0 === lastPath.length)
                        return 0
                      var commonPath = Path.equals(firstPath, lastPath)
                          ? Path.parent(firstPath)
                          : Path.common(firstPath, lastPath),
                        range = Editor.range(editor, firstPath, lastPath),
                        commonNodeEntry = Editor.node(editor, commonPath),
                        [commonNode] = commonNodeEntry,
                        depth = commonPath.length + 1,
                        wrapperPath = Path.next(lastPath.slice(0, depth)),
                        wrapper = _objectSpread(
                          _objectSpread({}, element),
                          {},
                          { children: [] }
                        )
                      ;(Transforms.insertNodes(editor, wrapper, {
                        at: wrapperPath,
                        voids,
                      }),
                        Transforms.moveNodes(editor, {
                          at: range,
                          match: (n) =>
                            Element.isAncestor(commonNode) &&
                            commonNode.children.includes(n),
                          to: wrapperPath.concat(0),
                          voids,
                        }))
                    }
                  }
                for (var [, rootPath] of roots) _loop()
              }
            })
          },
          createEditor = () => {
            var editor = {
              children: [],
              operations: [],
              selection: null,
              marks: null,
              isElementReadOnly: () => !1,
              isInline: () => !1,
              isSelectable: () => !0,
              isVoid: () => !1,
              markableVoid: () => !1,
              onChange: () => {},
              apply: function apply$1() {
                for (
                  var _len = arguments.length, args = new Array(_len), _key = 0;
                  _key < _len;
                  _key++
                )
                  args[_key] = arguments[_key]
                return apply(editor, ...args)
              },
              addMark: function addMark$1() {
                for (
                  var _len2 = arguments.length,
                    args = new Array(_len2),
                    _key2 = 0;
                  _key2 < _len2;
                  _key2++
                )
                  args[_key2] = arguments[_key2]
                return addMark(editor, ...args)
              },
              deleteBackward: function deleteBackward$1() {
                for (
                  var _len3 = arguments.length,
                    args = new Array(_len3),
                    _key3 = 0;
                  _key3 < _len3;
                  _key3++
                )
                  args[_key3] = arguments[_key3]
                return deleteBackward(editor, ...args)
              },
              deleteForward: function deleteForward$1() {
                for (
                  var _len4 = arguments.length,
                    args = new Array(_len4),
                    _key4 = 0;
                  _key4 < _len4;
                  _key4++
                )
                  args[_key4] = arguments[_key4]
                return deleteForward(editor, ...args)
              },
              deleteFragment: function deleteFragment$1() {
                for (
                  var _len5 = arguments.length,
                    args = new Array(_len5),
                    _key5 = 0;
                  _key5 < _len5;
                  _key5++
                )
                  args[_key5] = arguments[_key5]
                return deleteFragment(editor, ...args)
              },
              getFragment: function getFragment$1() {
                for (
                  var _len6 = arguments.length,
                    args = new Array(_len6),
                    _key6 = 0;
                  _key6 < _len6;
                  _key6++
                )
                  args[_key6] = arguments[_key6]
                return getFragment(editor, ...args)
              },
              insertBreak: function insertBreak$1() {
                for (
                  var _len7 = arguments.length,
                    args = new Array(_len7),
                    _key7 = 0;
                  _key7 < _len7;
                  _key7++
                )
                  args[_key7] = arguments[_key7]
                return insertBreak(editor, ...args)
              },
              insertSoftBreak: function insertSoftBreak$1() {
                for (
                  var _len8 = arguments.length,
                    args = new Array(_len8),
                    _key8 = 0;
                  _key8 < _len8;
                  _key8++
                )
                  args[_key8] = arguments[_key8]
                return ((editor) => {
                  Transforms.splitNodes(editor, { always: !0 })
                })(editor, ...args)
              },
              insertFragment: function insertFragment$1() {
                for (
                  var _len9 = arguments.length,
                    args = new Array(_len9),
                    _key9 = 0;
                  _key9 < _len9;
                  _key9++
                )
                  args[_key9] = arguments[_key9]
                return insertFragment(editor, ...args)
              },
              insertNode: function insertNode$1() {
                for (
                  var _len10 = arguments.length,
                    args = new Array(_len10),
                    _key10 = 0;
                  _key10 < _len10;
                  _key10++
                )
                  args[_key10] = arguments[_key10]
                return ((editor, node, options) => {
                  Transforms.insertNodes(editor, node, options)
                })(editor, ...args)
              },
              insertText: function insertText$1() {
                for (
                  var _len11 = arguments.length,
                    args = new Array(_len11),
                    _key11 = 0;
                  _key11 < _len11;
                  _key11++
                )
                  args[_key11] = arguments[_key11]
                return insertText(editor, ...args)
              },
              normalizeNode: function normalizeNode$1() {
                for (
                  var _len12 = arguments.length,
                    args = new Array(_len12),
                    _key12 = 0;
                  _key12 < _len12;
                  _key12++
                )
                  args[_key12] = arguments[_key12]
                return normalizeNode(editor, ...args)
              },
              removeMark: function removeMark$1() {
                for (
                  var _len13 = arguments.length,
                    args = new Array(_len13),
                    _key13 = 0;
                  _key13 < _len13;
                  _key13++
                )
                  args[_key13] = arguments[_key13]
                return removeMark(editor, ...args)
              },
              getDirtyPaths: function getDirtyPaths$1() {
                for (
                  var _len14 = arguments.length,
                    args = new Array(_len14),
                    _key14 = 0;
                  _key14 < _len14;
                  _key14++
                )
                  args[_key14] = arguments[_key14]
                return getDirtyPaths(editor, ...args)
              },
              shouldNormalize: function shouldNormalize$1() {
                for (
                  var _len15 = arguments.length,
                    args = new Array(_len15),
                    _key15 = 0;
                  _key15 < _len15;
                  _key15++
                )
                  args[_key15] = arguments[_key15]
                return shouldNormalize(editor, ...args)
              },
              above: function above$1() {
                for (
                  var _len16 = arguments.length,
                    args = new Array(_len16),
                    _key16 = 0;
                  _key16 < _len16;
                  _key16++
                )
                  args[_key16] = arguments[_key16]
                return above(editor, ...args)
              },
              after: function after$1() {
                for (
                  var _len17 = arguments.length,
                    args = new Array(_len17),
                    _key17 = 0;
                  _key17 < _len17;
                  _key17++
                )
                  args[_key17] = arguments[_key17]
                return after(editor, ...args)
              },
              before: function before$1() {
                for (
                  var _len18 = arguments.length,
                    args = new Array(_len18),
                    _key18 = 0;
                  _key18 < _len18;
                  _key18++
                )
                  args[_key18] = arguments[_key18]
                return before(editor, ...args)
              },
              collapse: function collapse$1() {
                for (
                  var _len19 = arguments.length,
                    args = new Array(_len19),
                    _key19 = 0;
                  _key19 < _len19;
                  _key19++
                )
                  args[_key19] = arguments[_key19]
                return collapse(editor, ...args)
              },
              delete: function _delete() {
                for (
                  var _len20 = arguments.length,
                    args = new Array(_len20),
                    _key20 = 0;
                  _key20 < _len20;
                  _key20++
                )
                  args[_key20] = arguments[_key20]
                return (function deleteText(editor) {
                  var options =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {}
                  Editor.withoutNormalizing(editor, () => {
                    var _Editor$void,
                      _Editor$void2,
                      {
                        reverse = !1,
                        unit = 'character',
                        distance = 1,
                        voids = !1,
                      } = options,
                      { at = editor.selection, hanging = !1 } = options
                    if (at) {
                      var isCollapsed = !1
                      if (
                        (Range.isRange(at) &&
                          Range.isCollapsed(at) &&
                          ((isCollapsed = !0), (at = at.anchor)),
                        Point.isPoint(at))
                      ) {
                        var furthestVoid = Editor.void(editor, {
                          at,
                          mode: 'highest',
                        })
                        if (!voids && furthestVoid) {
                          var [, voidPath] = furthestVoid
                          at = voidPath
                        } else {
                          var opts = { unit, distance }
                          ;((at = {
                            anchor: at,
                            focus: reverse
                              ? Editor.before(editor, at, opts) ||
                                Editor.start(editor, [])
                              : Editor.after(editor, at, opts) ||
                                Editor.end(editor, []),
                          }),
                            (hanging = !0))
                        }
                      }
                      if (Path.isPath(at))
                        Transforms.removeNodes(editor, { at, voids })
                      else if (!Range.isCollapsed(at)) {
                        if (!hanging) {
                          var [, _end] = Range.edges(at),
                            endOfDoc = Editor.end(editor, [])
                          Point.equals(_end, endOfDoc) ||
                            (at = Editor.unhangRange(editor, at, { voids }))
                        }
                        var [start, end] = Range.edges(at),
                          startBlock = Editor.above(editor, {
                            match: (n) =>
                              Element.isElement(n) && Editor.isBlock(editor, n),
                            at: start,
                            voids,
                          }),
                          endBlock = Editor.above(editor, {
                            match: (n) =>
                              Element.isElement(n) && Editor.isBlock(editor, n),
                            at: end,
                            voids,
                          }),
                          isAcrossBlocks =
                            startBlock &&
                            endBlock &&
                            !Path.equals(startBlock[1], endBlock[1]),
                          isSingleText = Path.equals(start.path, end.path),
                          startNonEditable = voids
                            ? null
                            : null !==
                                  (_Editor$void = Editor.void(editor, {
                                    at: start,
                                    mode: 'highest',
                                  })) && void 0 !== _Editor$void
                              ? _Editor$void
                              : Editor.elementReadOnly(editor, {
                                  at: start,
                                  mode: 'highest',
                                }),
                          endNonEditable = voids
                            ? null
                            : null !==
                                  (_Editor$void2 = Editor.void(editor, {
                                    at: end,
                                    mode: 'highest',
                                  })) && void 0 !== _Editor$void2
                              ? _Editor$void2
                              : Editor.elementReadOnly(editor, {
                                  at: end,
                                  mode: 'highest',
                                })
                        if (startNonEditable) {
                          var before = Editor.before(editor, start)
                          before &&
                            startBlock &&
                            Path.isAncestor(startBlock[1], before.path) &&
                            (start = before)
                        }
                        if (endNonEditable) {
                          var after = Editor.after(editor, end)
                          after &&
                            endBlock &&
                            Path.isAncestor(endBlock[1], after.path) &&
                            (end = after)
                        }
                        var lastPath,
                          matches = []
                        for (var entry of Editor.nodes(editor, { at, voids })) {
                          var [node, path] = entry
                          ;(lastPath && 0 === Path.compare(path, lastPath)) ||
                            (((!voids &&
                              Element.isElement(node) &&
                              (Editor.isVoid(editor, node) ||
                                Editor.isElementReadOnly(editor, node))) ||
                              (!Path.isCommon(path, start.path) &&
                                !Path.isCommon(path, end.path))) &&
                              (matches.push(entry), (lastPath = path)))
                        }
                        var pathRefs = Array.from(matches, (_ref) => {
                            var [, p] = _ref
                            return Editor.pathRef(editor, p)
                          }),
                          startRef = Editor.pointRef(editor, start),
                          endRef = Editor.pointRef(editor, end),
                          removedText = ''
                        if (!isSingleText && !startNonEditable) {
                          var _point = startRef.current,
                            [_node] = Editor.leaf(editor, _point),
                            { path: _path } = _point,
                            { offset } = start,
                            text = _node.text.slice(offset)
                          text.length > 0 &&
                            (editor.apply({
                              type: 'remove_text',
                              path: _path,
                              offset,
                              text,
                            }),
                            (removedText = text))
                        }
                        if (
                          (pathRefs
                            .reverse()
                            .map((r) => r.unref())
                            .filter((r) => null !== r)
                            .forEach((p) =>
                              Transforms.removeNodes(editor, { at: p, voids })
                            ),
                          !endNonEditable)
                        ) {
                          var _point2 = endRef.current,
                            [_node2] = Editor.leaf(editor, _point2),
                            { path: _path2 } = _point2,
                            _offset = isSingleText ? start.offset : 0,
                            _text = _node2.text.slice(_offset, end.offset)
                          _text.length > 0 &&
                            (editor.apply({
                              type: 'remove_text',
                              path: _path2,
                              offset: _offset,
                              text: _text,
                            }),
                            (removedText = _text))
                        }
                        ;(!isSingleText &&
                          isAcrossBlocks &&
                          endRef.current &&
                          startRef.current &&
                          Transforms.mergeNodes(editor, {
                            at: endRef.current,
                            hanging: !0,
                            voids,
                          }),
                          isCollapsed &&
                            reverse &&
                            'character' === unit &&
                            removedText.length > 1 &&
                            removedText.match(
                              /[\u0980-\u09FF\u0E00-\u0E7F\u1000-\u109F\u0900-\u097F\u1780-\u17FF\u0D00-\u0D7F\u0B00-\u0B7F\u0A00-\u0A7F\u0B80-\u0BFF\u0C00-\u0C7F]+/
                            ) &&
                            Transforms.insertText(
                              editor,
                              removedText.slice(
                                0,
                                removedText.length - distance
                              )
                            ))
                        var startUnref = startRef.unref(),
                          endUnref = endRef.unref(),
                          point = reverse
                            ? startUnref || endUnref
                            : endUnref || startUnref
                        null == options.at &&
                          point &&
                          Transforms.select(editor, point)
                      }
                    }
                  })
                })(editor, ...args)
              },
              deselect: function deselect$1() {
                for (
                  var _len21 = arguments.length,
                    args = new Array(_len21),
                    _key21 = 0;
                  _key21 < _len21;
                  _key21++
                )
                  args[_key21] = arguments[_key21]
                return deselect(editor, ...args)
              },
              edges: function edges$1() {
                for (
                  var _len22 = arguments.length,
                    args = new Array(_len22),
                    _key22 = 0;
                  _key22 < _len22;
                  _key22++
                )
                  args[_key22] = arguments[_key22]
                return edges(editor, ...args)
              },
              elementReadOnly: function elementReadOnly$1() {
                for (
                  var _len23 = arguments.length,
                    args = new Array(_len23),
                    _key23 = 0;
                  _key23 < _len23;
                  _key23++
                )
                  args[_key23] = arguments[_key23]
                return elementReadOnly(editor, ...args)
              },
              end: function end$1() {
                for (
                  var _len24 = arguments.length,
                    args = new Array(_len24),
                    _key24 = 0;
                  _key24 < _len24;
                  _key24++
                )
                  args[_key24] = arguments[_key24]
                return end(editor, ...args)
              },
              first: function first$1() {
                for (
                  var _len25 = arguments.length,
                    args = new Array(_len25),
                    _key25 = 0;
                  _key25 < _len25;
                  _key25++
                )
                  args[_key25] = arguments[_key25]
                return first(editor, ...args)
              },
              fragment: function fragment$1() {
                for (
                  var _len26 = arguments.length,
                    args = new Array(_len26),
                    _key26 = 0;
                  _key26 < _len26;
                  _key26++
                )
                  args[_key26] = arguments[_key26]
                return fragment(editor, ...args)
              },
              getMarks: function getMarks() {
                for (
                  var _len27 = arguments.length,
                    args = new Array(_len27),
                    _key27 = 0;
                  _key27 < _len27;
                  _key27++
                )
                  args[_key27] = arguments[_key27]
                return marks(editor, ...args)
              },
              hasBlocks: function hasBlocks$1() {
                for (
                  var _len28 = arguments.length,
                    args = new Array(_len28),
                    _key28 = 0;
                  _key28 < _len28;
                  _key28++
                )
                  args[_key28] = arguments[_key28]
                return hasBlocks(editor, ...args)
              },
              hasInlines: function hasInlines$1() {
                for (
                  var _len29 = arguments.length,
                    args = new Array(_len29),
                    _key29 = 0;
                  _key29 < _len29;
                  _key29++
                )
                  args[_key29] = arguments[_key29]
                return hasInlines(editor, ...args)
              },
              hasPath: function hasPath$1() {
                for (
                  var _len30 = arguments.length,
                    args = new Array(_len30),
                    _key30 = 0;
                  _key30 < _len30;
                  _key30++
                )
                  args[_key30] = arguments[_key30]
                return hasPath(editor, ...args)
              },
              hasTexts: function hasTexts$1() {
                for (
                  var _len31 = arguments.length,
                    args = new Array(_len31),
                    _key31 = 0;
                  _key31 < _len31;
                  _key31++
                )
                  args[_key31] = arguments[_key31]
                return hasTexts(editor, ...args)
              },
              insertNodes: function insertNodes$1() {
                for (
                  var _len32 = arguments.length,
                    args = new Array(_len32),
                    _key32 = 0;
                  _key32 < _len32;
                  _key32++
                )
                  args[_key32] = arguments[_key32]
                return insertNodes(editor, ...args)
              },
              isBlock: function isBlock$1() {
                for (
                  var _len33 = arguments.length,
                    args = new Array(_len33),
                    _key33 = 0;
                  _key33 < _len33;
                  _key33++
                )
                  args[_key33] = arguments[_key33]
                return isBlock(editor, ...args)
              },
              isEdge: function isEdge$1() {
                for (
                  var _len34 = arguments.length,
                    args = new Array(_len34),
                    _key34 = 0;
                  _key34 < _len34;
                  _key34++
                )
                  args[_key34] = arguments[_key34]
                return isEdge(editor, ...args)
              },
              isEmpty: function isEmpty$1() {
                for (
                  var _len35 = arguments.length,
                    args = new Array(_len35),
                    _key35 = 0;
                  _key35 < _len35;
                  _key35++
                )
                  args[_key35] = arguments[_key35]
                return isEmpty(editor, ...args)
              },
              isEnd: function isEnd$1() {
                for (
                  var _len36 = arguments.length,
                    args = new Array(_len36),
                    _key36 = 0;
                  _key36 < _len36;
                  _key36++
                )
                  args[_key36] = arguments[_key36]
                return isEnd(editor, ...args)
              },
              isNormalizing: function isNormalizing$1() {
                for (
                  var _len37 = arguments.length,
                    args = new Array(_len37),
                    _key37 = 0;
                  _key37 < _len37;
                  _key37++
                )
                  args[_key37] = arguments[_key37]
                return isNormalizing(editor, ...args)
              },
              isStart: function isStart$1() {
                for (
                  var _len38 = arguments.length,
                    args = new Array(_len38),
                    _key38 = 0;
                  _key38 < _len38;
                  _key38++
                )
                  args[_key38] = arguments[_key38]
                return isStart(editor, ...args)
              },
              last: function last$1() {
                for (
                  var _len39 = arguments.length,
                    args = new Array(_len39),
                    _key39 = 0;
                  _key39 < _len39;
                  _key39++
                )
                  args[_key39] = arguments[_key39]
                return last(editor, ...args)
              },
              leaf: function leaf$1() {
                for (
                  var _len40 = arguments.length,
                    args = new Array(_len40),
                    _key40 = 0;
                  _key40 < _len40;
                  _key40++
                )
                  args[_key40] = arguments[_key40]
                return leaf(editor, ...args)
              },
              levels: function levels$1() {
                for (
                  var _len41 = arguments.length,
                    args = new Array(_len41),
                    _key41 = 0;
                  _key41 < _len41;
                  _key41++
                )
                  args[_key41] = arguments[_key41]
                return levels(editor, ...args)
              },
              liftNodes: function liftNodes$1() {
                for (
                  var _len42 = arguments.length,
                    args = new Array(_len42),
                    _key42 = 0;
                  _key42 < _len42;
                  _key42++
                )
                  args[_key42] = arguments[_key42]
                return liftNodes(editor, ...args)
              },
              mergeNodes: function mergeNodes$1() {
                for (
                  var _len43 = arguments.length,
                    args = new Array(_len43),
                    _key43 = 0;
                  _key43 < _len43;
                  _key43++
                )
                  args[_key43] = arguments[_key43]
                return (function mergeNodes(editor) {
                  var options =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {}
                  Editor.withoutNormalizing(editor, () => {
                    var { match, at = editor.selection } = options,
                      { hanging = !1, voids = !1, mode = 'lowest' } = options
                    if (at) {
                      if (null == match)
                        if (Path.isPath(at)) {
                          var [parent] = Editor.parent(editor, at)
                          match = (n) => parent.children.includes(n)
                        } else
                          match = (n) =>
                            Element.isElement(n) && Editor.isBlock(editor, n)
                      if (
                        (!hanging &&
                          Range.isRange(at) &&
                          (at = Editor.unhangRange(editor, at, { voids })),
                        Range.isRange(at))
                      )
                        if (Range.isCollapsed(at)) at = at.anchor
                        else {
                          var [, end] = Range.edges(at),
                            pointRef = Editor.pointRef(editor, end)
                          ;(Transforms.delete(editor, { at }),
                            (at = pointRef.unref()),
                            null == options.at && Transforms.select(editor, at))
                        }
                      var [current] = Editor.nodes(editor, {
                          at,
                          match,
                          voids,
                          mode,
                        }),
                        prev = Editor.previous(editor, {
                          at,
                          match,
                          voids,
                          mode,
                        })
                      if (current && prev) {
                        var [node, path] = current,
                          [prevNode, prevPath] = prev
                        if (0 !== path.length && 0 !== prevPath.length) {
                          var properties,
                            position,
                            newPath = Path.next(prevPath),
                            commonPath = Path.common(path, prevPath),
                            isPreviousSibling = Path.isSibling(path, prevPath),
                            levels = Array.from(
                              Editor.levels(editor, { at: path }),
                              (_ref) => {
                                var [n] = _ref
                                return n
                              }
                            )
                              .slice(commonPath.length)
                              .slice(0, -1),
                            emptyAncestor = Editor.above(editor, {
                              at: path,
                              mode: 'highest',
                              match: (n) =>
                                levels.includes(n) &&
                                hasSingleChildNest(editor, n),
                            }),
                            emptyRef =
                              emptyAncestor &&
                              Editor.pathRef(editor, emptyAncestor[1])
                          if (Text.isText(node) && Text.isText(prevNode)) {
                            var rest = _objectWithoutProperties(node, _excluded)
                            ;((position = prevNode.text.length),
                              (properties = rest))
                          } else {
                            if (
                              !Element.isElement(node) ||
                              !Element.isElement(prevNode)
                            )
                              throw new Error(
                                'Cannot merge the node at path ['
                                  .concat(
                                    path,
                                    '] with the previous sibling because it is not the same kind: '
                                  )
                                  .concat(Scrubber.stringify(node), ' ')
                                  .concat(Scrubber.stringify(prevNode))
                              )
                            ;((rest = _objectWithoutProperties(
                              node,
                              _excluded2
                            )),
                              (position = prevNode.children.length),
                              (properties = rest))
                          }
                          ;(isPreviousSibling ||
                            Transforms.moveNodes(editor, {
                              at: path,
                              to: newPath,
                              voids,
                            }),
                            emptyRef &&
                              Transforms.removeNodes(editor, {
                                at: emptyRef.current,
                                voids,
                              }),
                            Editor.shouldMergeNodesRemovePrevNode(
                              editor,
                              prev,
                              current
                            )
                              ? Transforms.removeNodes(editor, {
                                  at: prevPath,
                                  voids,
                                })
                              : editor.apply({
                                  type: 'merge_node',
                                  path: newPath,
                                  position,
                                  properties,
                                }),
                            emptyRef && emptyRef.unref())
                        }
                      }
                    }
                  })
                })(editor, ...args)
              },
              move: function move$1() {
                for (
                  var _len44 = arguments.length,
                    args = new Array(_len44),
                    _key44 = 0;
                  _key44 < _len44;
                  _key44++
                )
                  args[_key44] = arguments[_key44]
                return move(editor, ...args)
              },
              moveNodes: function moveNodes$1() {
                for (
                  var _len45 = arguments.length,
                    args = new Array(_len45),
                    _key45 = 0;
                  _key45 < _len45;
                  _key45++
                )
                  args[_key45] = arguments[_key45]
                return moveNodes(editor, ...args)
              },
              next: function next$1() {
                for (
                  var _len46 = arguments.length,
                    args = new Array(_len46),
                    _key46 = 0;
                  _key46 < _len46;
                  _key46++
                )
                  args[_key46] = arguments[_key46]
                return (function next(editor) {
                  var options =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    { mode = 'lowest', voids = !1 } = options,
                    { match, at = editor.selection } = options
                  if (at) {
                    var pointAfterLocation = Editor.after(editor, at, { voids })
                    if (pointAfterLocation) {
                      var [, to] = Editor.last(editor, []),
                        span = [pointAfterLocation.path, to]
                      if (Path.isPath(at) && 0 === at.length)
                        throw new Error(
                          'Cannot get the next node from the root node!'
                        )
                      if (null == match)
                        if (Path.isPath(at)) {
                          var [parent] = Editor.parent(editor, at)
                          match = (n) => parent.children.includes(n)
                        } else match = () => !0
                      var [next] = Editor.nodes(editor, {
                        at: span,
                        match,
                        mode,
                        voids,
                      })
                      return next
                    }
                  }
                })(editor, ...args)
              },
              node: function node$1() {
                for (
                  var _len47 = arguments.length,
                    args = new Array(_len47),
                    _key47 = 0;
                  _key47 < _len47;
                  _key47++
                )
                  args[_key47] = arguments[_key47]
                return node(editor, ...args)
              },
              nodes: function nodes$1() {
                for (
                  var _len48 = arguments.length,
                    args = new Array(_len48),
                    _key48 = 0;
                  _key48 < _len48;
                  _key48++
                )
                  args[_key48] = arguments[_key48]
                return (function nodes(editor) {
                  var options =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {}
                  return (function* () {
                    var {
                        at = editor.selection,
                        mode = 'all',
                        universal = !1,
                        reverse = !1,
                        voids = !1,
                        pass: _pass,
                      } = options,
                      { match } = options
                    if ((match || (match = () => !0), at)) {
                      var from, to
                      if (Span.isSpan(at)) ((from = at[0]), (to = at[1]))
                      else {
                        var first = Editor.path(editor, at, { edge: 'start' }),
                          last = Editor.path(editor, at, { edge: 'end' })
                        ;((from = reverse ? last : first),
                          (to = reverse ? first : last))
                      }
                      var hit,
                        nodeEntries = Node.nodes(editor, {
                          reverse,
                          from,
                          to,
                          pass: (_ref) => {
                            var [node, path] = _ref
                            return (
                              !(!_pass || !_pass([node, path])) ||
                              (!!Element.isElement(node) &&
                                !(
                                  voids ||
                                  (!Editor.isVoid(editor, node) &&
                                    !Editor.isElementReadOnly(editor, node))
                                ))
                            )
                          },
                        }),
                        matches = []
                      for (var [node, path] of nodeEntries) {
                        var isLower = hit && 0 === Path.compare(path, hit[1])
                        if ('highest' !== mode || !isLower)
                          if (match(node, path))
                            if ('lowest' === mode && isLower) hit = [node, path]
                            else {
                              var emit = 'lowest' === mode ? hit : [node, path]
                              ;(emit &&
                                (universal ? matches.push(emit) : yield emit),
                                (hit = [node, path]))
                            }
                          else if (universal && !isLower && Text.isText(node))
                            return
                      }
                      ;('lowest' === mode &&
                        hit &&
                        (universal ? matches.push(hit) : yield hit),
                        universal && (yield* matches))
                    }
                  })()
                })(editor, ...args)
              },
              normalize: function normalize$1() {
                for (
                  var _len49 = arguments.length,
                    args = new Array(_len49),
                    _key49 = 0;
                  _key49 < _len49;
                  _key49++
                )
                  args[_key49] = arguments[_key49]
                return normalize(editor, ...args)
              },
              parent: function parent$1() {
                for (
                  var _len50 = arguments.length,
                    args = new Array(_len50),
                    _key50 = 0;
                  _key50 < _len50;
                  _key50++
                )
                  args[_key50] = arguments[_key50]
                return parent(editor, ...args)
              },
              path: function path$1() {
                for (
                  var _len51 = arguments.length,
                    args = new Array(_len51),
                    _key51 = 0;
                  _key51 < _len51;
                  _key51++
                )
                  args[_key51] = arguments[_key51]
                return path(editor, ...args)
              },
              pathRef: function pathRef$1() {
                for (
                  var _len52 = arguments.length,
                    args = new Array(_len52),
                    _key52 = 0;
                  _key52 < _len52;
                  _key52++
                )
                  args[_key52] = arguments[_key52]
                return pathRef(editor, ...args)
              },
              pathRefs: function pathRefs$1() {
                for (
                  var _len53 = arguments.length,
                    args = new Array(_len53),
                    _key53 = 0;
                  _key53 < _len53;
                  _key53++
                )
                  args[_key53] = arguments[_key53]
                return pathRefs(editor, ...args)
              },
              point: function point$1() {
                for (
                  var _len54 = arguments.length,
                    args = new Array(_len54),
                    _key54 = 0;
                  _key54 < _len54;
                  _key54++
                )
                  args[_key54] = arguments[_key54]
                return point(editor, ...args)
              },
              pointRef: function pointRef$1() {
                for (
                  var _len55 = arguments.length,
                    args = new Array(_len55),
                    _key55 = 0;
                  _key55 < _len55;
                  _key55++
                )
                  args[_key55] = arguments[_key55]
                return pointRef(editor, ...args)
              },
              pointRefs: function pointRefs$1() {
                for (
                  var _len56 = arguments.length,
                    args = new Array(_len56),
                    _key56 = 0;
                  _key56 < _len56;
                  _key56++
                )
                  args[_key56] = arguments[_key56]
                return pointRefs(editor, ...args)
              },
              positions: function positions$1() {
                for (
                  var _len57 = arguments.length,
                    args = new Array(_len57),
                    _key57 = 0;
                  _key57 < _len57;
                  _key57++
                )
                  args[_key57] = arguments[_key57]
                return positions(editor, ...args)
              },
              previous: function previous$1() {
                for (
                  var _len58 = arguments.length,
                    args = new Array(_len58),
                    _key58 = 0;
                  _key58 < _len58;
                  _key58++
                )
                  args[_key58] = arguments[_key58]
                return (function previous(editor) {
                  var options =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    { mode = 'lowest', voids = !1 } = options,
                    { match, at = editor.selection } = options
                  if (at) {
                    var pointBeforeLocation = Editor.before(editor, at, {
                      voids,
                    })
                    if (pointBeforeLocation) {
                      var [, to] = Editor.first(editor, []),
                        span = [pointBeforeLocation.path, to]
                      if (Path.isPath(at) && 0 === at.length)
                        throw new Error(
                          'Cannot get the previous node from the root node!'
                        )
                      if (null == match)
                        if (Path.isPath(at)) {
                          var [parent] = Editor.parent(editor, at)
                          match = (n) => parent.children.includes(n)
                        } else match = () => !0
                      var [previous] = Editor.nodes(editor, {
                        reverse: !0,
                        at: span,
                        match,
                        mode,
                        voids,
                      })
                      return previous
                    }
                  }
                })(editor, ...args)
              },
              range: function range$1() {
                for (
                  var _len59 = arguments.length,
                    args = new Array(_len59),
                    _key59 = 0;
                  _key59 < _len59;
                  _key59++
                )
                  args[_key59] = arguments[_key59]
                return range(editor, ...args)
              },
              rangeRef: function rangeRef$1() {
                for (
                  var _len60 = arguments.length,
                    args = new Array(_len60),
                    _key60 = 0;
                  _key60 < _len60;
                  _key60++
                )
                  args[_key60] = arguments[_key60]
                return rangeRef(editor, ...args)
              },
              rangeRefs: function rangeRefs$1() {
                for (
                  var _len61 = arguments.length,
                    args = new Array(_len61),
                    _key61 = 0;
                  _key61 < _len61;
                  _key61++
                )
                  args[_key61] = arguments[_key61]
                return rangeRefs(editor, ...args)
              },
              removeNodes: function removeNodes$1() {
                for (
                  var _len62 = arguments.length,
                    args = new Array(_len62),
                    _key62 = 0;
                  _key62 < _len62;
                  _key62++
                )
                  args[_key62] = arguments[_key62]
                return removeNodes(editor, ...args)
              },
              select: function select$1() {
                for (
                  var _len63 = arguments.length,
                    args = new Array(_len63),
                    _key63 = 0;
                  _key63 < _len63;
                  _key63++
                )
                  args[_key63] = arguments[_key63]
                return select(editor, ...args)
              },
              setNodes: function setNodes$1() {
                for (
                  var _len64 = arguments.length,
                    args = new Array(_len64),
                    _key64 = 0;
                  _key64 < _len64;
                  _key64++
                )
                  args[_key64] = arguments[_key64]
                return setNodes(editor, ...args)
              },
              setNormalizing: function setNormalizing$1() {
                for (
                  var _len65 = arguments.length,
                    args = new Array(_len65),
                    _key65 = 0;
                  _key65 < _len65;
                  _key65++
                )
                  args[_key65] = arguments[_key65]
                return setNormalizing(editor, ...args)
              },
              setPoint: function setPoint$1() {
                for (
                  var _len66 = arguments.length,
                    args = new Array(_len66),
                    _key66 = 0;
                  _key66 < _len66;
                  _key66++
                )
                  args[_key66] = arguments[_key66]
                return setPoint(editor, ...args)
              },
              setSelection: function setSelection$1() {
                for (
                  var _len67 = arguments.length,
                    args = new Array(_len67),
                    _key67 = 0;
                  _key67 < _len67;
                  _key67++
                )
                  args[_key67] = arguments[_key67]
                return setSelection(editor, ...args)
              },
              splitNodes: function splitNodes$1() {
                for (
                  var _len68 = arguments.length,
                    args = new Array(_len68),
                    _key68 = 0;
                  _key68 < _len68;
                  _key68++
                )
                  args[_key68] = arguments[_key68]
                return splitNodes(editor, ...args)
              },
              start: function start$1() {
                for (
                  var _len69 = arguments.length,
                    args = new Array(_len69),
                    _key69 = 0;
                  _key69 < _len69;
                  _key69++
                )
                  args[_key69] = arguments[_key69]
                return start(editor, ...args)
              },
              string: function string$1() {
                for (
                  var _len70 = arguments.length,
                    args = new Array(_len70),
                    _key70 = 0;
                  _key70 < _len70;
                  _key70++
                )
                  args[_key70] = arguments[_key70]
                return string(editor, ...args)
              },
              unhangRange: function unhangRange$1() {
                for (
                  var _len71 = arguments.length,
                    args = new Array(_len71),
                    _key71 = 0;
                  _key71 < _len71;
                  _key71++
                )
                  args[_key71] = arguments[_key71]
                return unhangRange(editor, ...args)
              },
              unsetNodes: function unsetNodes$1() {
                for (
                  var _len72 = arguments.length,
                    args = new Array(_len72),
                    _key72 = 0;
                  _key72 < _len72;
                  _key72++
                )
                  args[_key72] = arguments[_key72]
                return unsetNodes(editor, ...args)
              },
              unwrapNodes: function unwrapNodes$1() {
                for (
                  var _len73 = arguments.length,
                    args = new Array(_len73),
                    _key73 = 0;
                  _key73 < _len73;
                  _key73++
                )
                  args[_key73] = arguments[_key73]
                return unwrapNodes(editor, ...args)
              },
              void: function _void() {
                for (
                  var _len74 = arguments.length,
                    args = new Array(_len74),
                    _key74 = 0;
                  _key74 < _len74;
                  _key74++
                )
                  args[_key74] = arguments[_key74]
                return getVoid(editor, ...args)
              },
              withoutNormalizing: function withoutNormalizing$1() {
                for (
                  var _len75 = arguments.length,
                    args = new Array(_len75),
                    _key75 = 0;
                  _key75 < _len75;
                  _key75++
                )
                  args[_key75] = arguments[_key75]
                return withoutNormalizing(editor, ...args)
              },
              wrapNodes: function wrapNodes$1() {
                for (
                  var _len76 = arguments.length,
                    args = new Array(_len76),
                    _key76 = 0;
                  _key76 < _len76;
                  _key76++
                )
                  args[_key76] = arguments[_key76]
                return wrapNodes(editor, ...args)
              },
              shouldMergeNodesRemovePrevNode:
                function shouldMergeNodesRemovePrevNode$1() {
                  for (
                    var _len77 = arguments.length,
                      args = new Array(_len77),
                      _key77 = 0;
                    _key77 < _len77;
                    _key77++
                  )
                    args[_key77] = arguments[_key77]
                  return ((editor, _ref) => {
                    var [prevNode, prevPath] = _ref
                    return (
                      (Element.isElement(prevNode) &&
                        Editor.isEmpty(editor, prevNode)) ||
                      (Text.isText(prevNode) &&
                        '' === prevNode.text &&
                        0 !== prevPath[prevPath.length - 1])
                    )
                  })(editor, ...args)
                },
            }
            return editor
          }
      },
  },
])
