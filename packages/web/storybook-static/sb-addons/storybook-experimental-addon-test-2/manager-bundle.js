try {
  ;(() => {
    const Ie = ((e) =>
      typeof require < 'u'
        ? require
        : typeof Proxy < 'u'
          ? new Proxy(e, {
              get: (t, r) => (typeof require < 'u' ? require : t)[r],
            })
          : e)(function (e) {
      if (typeof require < 'u') return require.apply(this, arguments)
      throw Error(`Dynamic require of "${e}" is not supported`)
    })
    const y = __REACT__,
      {
        Children: pA,
        Component: dA,
        Fragment: Fr,
        Profiler: fA,
        PureComponent: hA,
        StrictMode: mA,
        Suspense: gA,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: yA,
        act: bA,
        cloneElement: EA,
        createContext: AA,
        createElement: G,
        createFactory: wA,
        createRef: SA,
        forwardRef: vA,
        isValidElement: CA,
        lazy: xA,
        memo: Br,
        startTransition: DA,
        unstable_act: TA,
        useCallback: _A,
        useContext: Ba,
        useDebugValue: OA,
        useDeferredValue: IA,
        useEffect: Ke,
        useId: RA,
        useImperativeHandle: FA,
        useInsertionEffect: BA,
        useLayoutEffect: PA,
        useMemo: ur,
        useReducer: $A,
        useRef: Pr,
        useState: _e,
        useSyncExternalStore: LA,
        useTransition: kA,
        version: NA,
      } = __REACT__
    const zA = __STORYBOOK_COMPONENTS__,
      {
        A: UA,
        ActionBar: HA,
        AddonPanel: Pa,
        Badge: Yn,
        Bar: $a,
        Blockquote: VA,
        Button: pt,
        ClipboardCode: WA,
        Code: GA,
        DL: YA,
        Div: KA,
        DocumentWrapper: XA,
        EmptyTabContent: La,
        ErrorFormatter: JA,
        FlexBar: ZA,
        Form: QA,
        H1: ew,
        H2: tw,
        H3: rw,
        H4: nw,
        H5: ow,
        H6: iw,
        HR: aw,
        IconButton: $r,
        Img: uw,
        LI: sw,
        Link: sr,
        ListItem: dt,
        Loader: lw,
        Modal: ka,
        OL: cw,
        P: Na,
        Placeholder: pw,
        Pre: dw,
        ProgressSpinner: ja,
        ResetWrapper: fw,
        ScrollArea: hw,
        Separator: Ma,
        Spaced: qa,
        Span: mw,
        StorybookIcon: gw,
        StorybookLogo: yw,
        SyntaxHighlighter: bw,
        TT: Ew,
        TabBar: Aw,
        TabButton: ww,
        TabWrapper: Sw,
        Table: vw,
        Tabs: Cw,
        TabsState: xw,
        TooltipLinkList: Dw,
        TooltipMessage: Tw,
        TooltipNote: St,
        UL: _w,
        WithTooltip: Ue,
        WithTooltipPure: Ow,
        Zoom: Iw,
        codeCommon: Rw,
        components: Fw,
        createCopyToClipboardFunction: Bw,
        getStoryHref: Pw,
        interleaveSeparators: $w,
        nameSpaceClassNames: Lw,
        resetComponents: kw,
        withReset: Nw,
      } = __STORYBOOK_COMPONENTS__
    const Uw = __STORYBOOK_API__,
      {
        ActiveTabs: Hw,
        Consumer: za,
        ManagerContext: Vw,
        Provider: Ww,
        RequestResponseError: Gw,
        addons: lr,
        combineParameters: Yw,
        controlOrMetaKey: Kw,
        controlOrMetaSymbol: Xw,
        eventMatchesShortcut: Jw,
        eventToShortcut: Zw,
        experimental_MockUniversalStore: Qw,
        experimental_UniversalStore: Ua,
        experimental_getStatusStore: eS,
        experimental_getTestProviderStore: tS,
        experimental_requestResponse: rS,
        experimental_useStatusStore: nS,
        experimental_useTestProviderStore: oS,
        experimental_useUniversalStore: Ha,
        internal_fullStatusStore: iS,
        internal_fullTestProviderStore: aS,
        internal_universalStatusStore: uS,
        internal_universalTestProviderStore: sS,
        isMacLike: lS,
        isShortcutTaken: cS,
        keyToSymbol: pS,
        merge: dS,
        mockChannel: fS,
        optionOrAltSymbol: hS,
        shortcutMatchesShortcut: mS,
        shortcutToHumanString: gS,
        types: Va,
        useAddonState: Kn,
        useArgTypes: yS,
        useArgs: bS,
        useChannel: Wa,
        useGlobalTypes: ES,
        useGlobals: AS,
        useParameter: Ga,
        useSharedState: wS,
        useStoryPrepared: SS,
        useStorybookApi: Lr,
        useStorybookState: Ya,
      } = __STORYBOOK_API__
    const TS = __STORYBOOK_TYPES__,
      { Addon_TypesEnum: Ka } = __STORYBOOK_TYPES__
    const FS = __STORYBOOK_THEMING__,
      {
        CacheProvider: BS,
        ClassNames: PS,
        Global: $S,
        ThemeProvider: LS,
        background: kS,
        color: NS,
        convert: jS,
        create: MS,
        createCache: qS,
        createGlobal: zS,
        createReset: US,
        css: HS,
        darken: VS,
        ensure: WS,
        ignoreSsrWarning: GS,
        isPropValid: YS,
        jsx: KS,
        keyframes: XS,
        lighten: JS,
        styled: H,
        themes: ZS,
        typography: et,
        useTheme: vt,
        withTheme: QS,
      } = __STORYBOOK_THEMING__
    const ov = __STORYBOOK_ICONS__,
      {
        AccessibilityAltIcon: iv,
        AccessibilityIcon: Xa,
        AccessibilityIgnoredIcon: av,
        AddIcon: uv,
        AdminIcon: sv,
        AlertAltIcon: lv,
        AlertIcon: cv,
        AlignLeftIcon: pv,
        AlignRightIcon: dv,
        AppleIcon: fv,
        ArrowBottomLeftIcon: hv,
        ArrowBottomRightIcon: mv,
        ArrowDownIcon: gv,
        ArrowLeftIcon: yv,
        ArrowRightIcon: bv,
        ArrowSolidDownIcon: Ev,
        ArrowSolidLeftIcon: Av,
        ArrowSolidRightIcon: wv,
        ArrowSolidUpIcon: Sv,
        ArrowTopLeftIcon: vv,
        ArrowTopRightIcon: Cv,
        ArrowUpIcon: xv,
        AzureDevOpsIcon: Dv,
        BackIcon: Tv,
        BasketIcon: _v,
        BatchAcceptIcon: Ov,
        BatchDenyIcon: Iv,
        BeakerIcon: Rv,
        BellIcon: Fv,
        BitbucketIcon: Bv,
        BoldIcon: Pv,
        BookIcon: $v,
        BookmarkHollowIcon: Lv,
        BookmarkIcon: kv,
        BottomBarIcon: Nv,
        BottomBarToggleIcon: jv,
        BoxIcon: Mv,
        BranchIcon: qv,
        BrowserIcon: zv,
        ButtonIcon: Uv,
        CPUIcon: Hv,
        CalendarIcon: Vv,
        CameraIcon: Wv,
        CameraStabilizeIcon: Gv,
        CategoryIcon: Yv,
        CertificateIcon: Kv,
        ChangedIcon: Xv,
        ChatIcon: Jv,
        CheckIcon: Ja,
        ChevronDownIcon: Zv,
        ChevronLeftIcon: Qv,
        ChevronRightIcon: eC,
        ChevronSmallDownIcon: tC,
        ChevronSmallLeftIcon: rC,
        ChevronSmallRightIcon: nC,
        ChevronSmallUpIcon: oC,
        ChevronUpIcon: iC,
        ChromaticIcon: aC,
        ChromeIcon: uC,
        CircleHollowIcon: sC,
        CircleIcon: Za,
        ClearIcon: lC,
        CloseAltIcon: cC,
        CloseIcon: Qa,
        CloudHollowIcon: pC,
        CloudIcon: dC,
        CogIcon: fC,
        CollapseIcon: hC,
        CommandIcon: mC,
        CommentAddIcon: gC,
        CommentIcon: yC,
        CommentsIcon: bC,
        CommitIcon: EC,
        CompassIcon: AC,
        ComponentDrivenIcon: wC,
        ComponentIcon: SC,
        ContrastIcon: vC,
        ContrastIgnoredIcon: CC,
        ControlsIcon: xC,
        CopyIcon: DC,
        CreditIcon: TC,
        CrossIcon: _C,
        DashboardIcon: OC,
        DatabaseIcon: IC,
        DeleteIcon: RC,
        DiamondIcon: FC,
        DirectionIcon: BC,
        DiscordIcon: PC,
        DocChartIcon: $C,
        DocListIcon: LC,
        DocumentIcon: eu,
        DownloadIcon: kC,
        DragIcon: NC,
        EditIcon: tu,
        EllipsisIcon: jC,
        EmailIcon: MC,
        ExpandAltIcon: qC,
        ExpandIcon: zC,
        EyeCloseIcon: UC,
        EyeIcon: ru,
        FaceHappyIcon: HC,
        FaceNeutralIcon: VC,
        FaceSadIcon: WC,
        FacebookIcon: GC,
        FailedIcon: YC,
        FastForwardIcon: nu,
        FigmaIcon: KC,
        FilterIcon: XC,
        FlagIcon: JC,
        FolderIcon: ZC,
        FormIcon: QC,
        GDriveIcon: ex,
        GithubIcon: tx,
        GitlabIcon: rx,
        GlobeIcon: nx,
        GoogleIcon: ox,
        GraphBarIcon: ix,
        GraphLineIcon: ax,
        GraphqlIcon: ux,
        GridAltIcon: sx,
        GridIcon: lx,
        GrowIcon: cx,
        HeartHollowIcon: px,
        HeartIcon: dx,
        HomeIcon: fx,
        HourglassIcon: hx,
        InfoIcon: mx,
        ItalicIcon: gx,
        JumpToIcon: yx,
        KeyIcon: bx,
        LightningIcon: Ex,
        LightningOffIcon: Ax,
        LinkBrokenIcon: wx,
        LinkIcon: Sx,
        LinkedinIcon: vx,
        LinuxIcon: Cx,
        ListOrderedIcon: xx,
        ListUnorderedIcon: ou,
        LocationIcon: Dx,
        LockIcon: Tx,
        MarkdownIcon: _x,
        MarkupIcon: Ox,
        MediumIcon: Ix,
        MemoryIcon: Rx,
        MenuIcon: Fx,
        MergeIcon: Bx,
        MirrorIcon: Px,
        MobileIcon: $x,
        MoonIcon: Lx,
        NutIcon: kx,
        OutboxIcon: Nx,
        OutlineIcon: jx,
        PaintBrushIcon: Mx,
        PaperClipIcon: qx,
        ParagraphIcon: zx,
        PassedIcon: Ux,
        PhoneIcon: Hx,
        PhotoDragIcon: Vx,
        PhotoIcon: Wx,
        PhotoStabilizeIcon: Gx,
        PinAltIcon: Yx,
        PinIcon: Kx,
        PlayAllHollowIcon: Xx,
        PlayBackIcon: iu,
        PlayHollowIcon: au,
        PlayIcon: uu,
        PlayNextIcon: su,
        PlusIcon: Jx,
        PointerDefaultIcon: Zx,
        PointerHandIcon: lu,
        PowerIcon: Qx,
        PrintIcon: eD,
        ProceedIcon: tD,
        ProfileIcon: rD,
        PullRequestIcon: nD,
        QuestionIcon: oD,
        RSSIcon: iD,
        RedirectIcon: aD,
        ReduxIcon: uD,
        RefreshIcon: sD,
        ReplyIcon: lD,
        RepoIcon: cD,
        RequestChangeIcon: pD,
        RewindIcon: cu,
        RulerIcon: dD,
        SaveIcon: fD,
        SearchIcon: hD,
        ShareAltIcon: mD,
        ShareIcon: gD,
        ShieldIcon: pu,
        SideBySideIcon: yD,
        SidebarAltIcon: bD,
        SidebarAltToggleIcon: ED,
        SidebarIcon: AD,
        SidebarToggleIcon: wD,
        SpeakerIcon: SD,
        StackedIcon: vD,
        StarHollowIcon: CD,
        StarIcon: xD,
        StatusFailIcon: DD,
        StatusIcon: TD,
        StatusPassIcon: _D,
        StatusWarnIcon: OD,
        StickerIcon: ID,
        StopAltHollowIcon: RD,
        StopAltIcon: Xn,
        StopIcon: FD,
        StorybookIcon: BD,
        StructureIcon: PD,
        SubtractIcon: $D,
        SunIcon: LD,
        SupportIcon: kD,
        SweepIcon: ND,
        SwitchAltIcon: jD,
        SyncIcon: Jn,
        TabletIcon: MD,
        ThumbsUpIcon: qD,
        TimeIcon: zD,
        TimerIcon: UD,
        TransferIcon: HD,
        TrashIcon: VD,
        TwitterIcon: WD,
        TypeIcon: GD,
        UbuntuIcon: YD,
        UndoIcon: KD,
        UnfoldIcon: XD,
        UnlockIcon: JD,
        UnpinIcon: ZD,
        UploadIcon: QD,
        UserAddIcon: e3,
        UserAltIcon: t3,
        UserIcon: r3,
        UsersIcon: n3,
        VSCodeIcon: o3,
        VerifiedIcon: i3,
        VideoIcon: du,
        WandIcon: a3,
        WatchIcon: u3,
        WindowsIcon: s3,
        WrenchIcon: l3,
        XIcon: c3,
        YoutubeIcon: p3,
        ZoomIcon: d3,
        ZoomOutIcon: f3,
        ZoomResetIcon: h3,
        iconList: m3,
      } = __STORYBOOK_ICONS__
    const A3 = __STORYBOOK_CORE_EVENTS__,
      {
        ARGTYPES_INFO_REQUEST: fu,
        ARGTYPES_INFO_RESPONSE: Zn,
        CHANNEL_CREATED: w3,
        CHANNEL_WS_DISCONNECT: S3,
        CONFIG_ERROR: hu,
        CREATE_NEW_STORYFILE_REQUEST: v3,
        CREATE_NEW_STORYFILE_RESPONSE: C3,
        CURRENT_STORY_WAS_SET: Qn,
        DOCS_PREPARED: mu,
        DOCS_RENDERED: kr,
        FILE_COMPONENT_SEARCH_REQUEST: x3,
        FILE_COMPONENT_SEARCH_RESPONSE: D3,
        FORCE_REMOUNT: ft,
        FORCE_RE_RENDER: Nr,
        GLOBALS_UPDATED: $t,
        NAVIGATE_URL: T3,
        PLAY_FUNCTION_THREW_EXCEPTION: jr,
        PRELOAD_ENTRIES: gu,
        PREVIEW_BUILDER_PROGRESS: _3,
        PREVIEW_KEYDOWN: yu,
        REGISTER_SUBSCRIPTION: O3,
        REQUEST_WHATS_NEW_DATA: I3,
        RESET_STORY_ARGS: Mr,
        RESULT_WHATS_NEW_DATA: R3,
        SAVE_STORY_REQUEST: F3,
        SAVE_STORY_RESPONSE: B3,
        SELECT_STORY: P3,
        SET_CONFIG: $3,
        SET_CURRENT_STORY: cr,
        SET_FILTER: L3,
        SET_GLOBALS: bu,
        SET_INDEX: k3,
        SET_STORIES: N3,
        SET_WHATS_NEW_CACHE: j3,
        SHARED_STATE_CHANGED: M3,
        SHARED_STATE_SET: q3,
        STORIES_COLLAPSE_ALL: z3,
        STORIES_EXPAND_ALL: U3,
        STORY_ARGS_UPDATED: Eu,
        STORY_CHANGED: Au,
        STORY_ERRORED: wu,
        STORY_FINISHED: eo,
        STORY_HOT_UPDATED: H3,
        STORY_INDEX_INVALIDATED: Su,
        STORY_MISSING: to,
        STORY_PREPARED: vu,
        STORY_RENDERED: pr,
        STORY_RENDER_PHASE_CHANGED: Le,
        STORY_SPECIFIED: Cu,
        STORY_THREW_EXCEPTION: qr,
        STORY_UNCHANGED: xu,
        TELEMETRY_ERROR: V3,
        TOGGLE_WHATS_NEW_NOTIFICATIONS: W3,
        UNHANDLED_ERRORS_WHILE_PLAYING: zr,
        UPDATE_GLOBALS: Ur,
        UPDATE_QUERY_PARAMS: Du,
        UPDATE_STORY_ARGS: Hr,
      } = __STORYBOOK_CORE_EVENTS__
    const q = (() => {
      let e
      return (
        typeof window < 'u'
          ? (e = window)
          : typeof globalThis < 'u'
            ? (e = globalThis)
            : typeof window < 'u'
              ? (e = window)
              : typeof self < 'u'
                ? (e = self)
                : (e = {}),
        e
      )
    })()
    const t5 = __STORYBOOK_CLIENT_LOGGER__,
      {
        deprecate: Vr,
        logger: Q,
        once: He,
        pretty: r5,
      } = __STORYBOOK_CLIENT_LOGGER__
    const u5 = __STORYBOOK_CHANNELS__,
      {
        Channel: Tu,
        HEARTBEAT_INTERVAL: s5,
        HEARTBEAT_MAX_LATENCY: l5,
        PostMessageTransport: c5,
        WebsocketTransport: p5,
        createBrowserChannel: d5,
      } = __STORYBOOK_CHANNELS__
    const h2 = Object.defineProperty,
      pe = (e, t) => h2(e, 'name', { value: t, configurable: !0 })
    function be(e) {
      for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r]
      let n = Array.from(typeof e === 'string' ? [e] : e)
      n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, '')
      const o = n.reduce(function (u, s) {
        const l = s.match(/\n([\t ]+|(?!\s).)/g)
        return l
          ? u.concat(
              l.map(function (c) {
                let p, g
                return (g =
                  (p = c.match(/[\t ]/g)) === null || p === void 0
                    ? void 0
                    : p.length) !== null && g !== void 0
                  ? g
                  : 0
              })
            )
          : u
      }, [])
      if (o.length) {
        const i = new RegExp(
          `
[	 ]{${Math.min.apply(Math, o)}}`,
          'g'
        )
        n = n.map(function (u) {
          return u.replace(
            i,
            `
`
          )
        })
      }
      n[0] = n[0].replace(/^\r?\n/, '')
      let a = n[0]
      return (
        t.forEach(function (u, s) {
          let l = a.match(/(?:^|\n)( *)$/),
            c = l ? l[1] : '',
            p = u
          ;(typeof u === 'string' &&
            u.includes(`
`) &&
            (p = String(u)
              .split(
                `
`
              )
              .map(function (g, m) {
                return m === 0 ? g : `${c}${g}`
              }).join(`
`)),
            (a += p + n[s + 1]))
        }),
        a
      )
    }
    pe(be, 'dedent')
    function ro({ code: e, category: t }) {
      const r = String(e).padStart(4, '0')
      return `SB_${t}_${r}`
    }
    pe(ro, 'parseErrorCode')
    const _u = class Ou extends Error {
      constructor(t) {
        ;(super(Ou.getFullMessage(t)),
          (this.data = {}),
          (this.fromStorybook = !0),
          (this.category = t.category),
          (this.documentation = t.documentation ?? !1),
          (this.code = t.code))
      }
      get fullErrorCode() {
        return ro({ code: this.code, category: this.category })
      }
      get name() {
        const t = this.constructor.name
        return `${this.fullErrorCode} (${t})`
      }
      static getFullMessage({
        documentation: t,
        code: r,
        category: n,
        message: o,
      }) {
        let i
        return (
          t === !0
            ? (i = `https://storybook.js.org/error/${ro({ code: r, category: n })}`)
            : typeof t === 'string'
              ? (i = t)
              : Array.isArray(t) &&
                (i = `
${t.map((a) => `	- ${a}`).join(`
`)}`),
          `${o}${
            i != null
              ? `

More info: ${i}
`
              : ''
          }`
        )
      }
    }
    pe(_u, 'StorybookError')
    var ge = _u,
      m2 = ((e) => (
        (e.BLOCKS = 'BLOCKS'),
        (e.DOCS_TOOLS = 'DOCS-TOOLS'),
        (e.PREVIEW_CLIENT_LOGGER = 'PREVIEW_CLIENT-LOGGER'),
        (e.PREVIEW_CHANNELS = 'PREVIEW_CHANNELS'),
        (e.PREVIEW_CORE_EVENTS = 'PREVIEW_CORE-EVENTS'),
        (e.PREVIEW_INSTRUMENTER = 'PREVIEW_INSTRUMENTER'),
        (e.PREVIEW_API = 'PREVIEW_API'),
        (e.PREVIEW_REACT_DOM_SHIM = 'PREVIEW_REACT-DOM-SHIM'),
        (e.PREVIEW_ROUTER = 'PREVIEW_ROUTER'),
        (e.PREVIEW_THEMING = 'PREVIEW_THEMING'),
        (e.RENDERER_HTML = 'RENDERER_HTML'),
        (e.RENDERER_PREACT = 'RENDERER_PREACT'),
        (e.RENDERER_REACT = 'RENDERER_REACT'),
        (e.RENDERER_SERVER = 'RENDERER_SERVER'),
        (e.RENDERER_SVELTE = 'RENDERER_SVELTE'),
        (e.RENDERER_VUE = 'RENDERER_VUE'),
        (e.RENDERER_VUE3 = 'RENDERER_VUE3'),
        (e.RENDERER_WEB_COMPONENTS = 'RENDERER_WEB-COMPONENTS'),
        (e.FRAMEWORK_NEXTJS = 'FRAMEWORK_NEXTJS'),
        (e.ADDON_VITEST = 'ADDON_VITEST'),
        (e.ADDON_A11Y = 'ADDON_A11Y'),
        e
      ))(m2 || {}),
      Iu = class extends ge {
        constructor(t) {
          ;(super({
            category: 'PREVIEW_API',
            code: 1,
            message: be`
        Couldn't find story matching id '${t.storyId}' after HMR.
        - Did you just rename a story?
        - Did you remove it from your CSF file?
        - Are you sure a story with the id '${t.storyId}' exists?
        - Please check the values in the stories field of your main.js config and see if they would match your CSF File.
        - Also check the browser console and terminal for potential error messages.`,
          }),
            (this.data = t))
        }
      }
    pe(Iu, 'MissingStoryAfterHmrError')
    const Ru = Iu,
      Fu = class extends ge {
        constructor(t) {
          ;(super({
            category: 'PREVIEW_API',
            code: 2,
            documentation:
              'https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#using-implicit-actions-during-rendering-is-deprecated-for-example-in-the-play-function',
            message: be`
        We detected that you use an implicit action arg while ${t.phase} of your story.  
        ${
          t.deprecated
            ? `
This is deprecated and won't work in Storybook 8 anymore.
`
            : ''
        }
        Please provide an explicit spy to your args like this:
          import { fn } from 'storybook/test';
          ... 
          args: {
           ${t.name}: fn()
          }`,
          }),
            (this.data = t))
        }
      }
    pe(Fu, 'ImplicitActionsDuringRendering')
    const Bu = Fu,
      Pu = class extends ge {
        constructor() {
          super({
            category: 'PREVIEW_API',
            code: 3,
            message: be`
        Cannot call \`storyStore.extract()\` without calling \`storyStore.cacheAllCsfFiles()\` first.

        You probably meant to call \`await preview.extract()\` which does the above for you.`,
          })
        }
      }
    pe(Pu, 'CalledExtractOnStoreError')
    const $u = Pu,
      Lu = class extends ge {
        constructor() {
          super({
            category: 'PREVIEW_API',
            code: 4,
            message: be`
        Expected your framework's preset to export a \`renderToCanvas\` field.

        Perhaps it needs to be upgraded for Storybook 7.0?`,
            documentation:
              'https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#mainjs-framework-field',
          })
        }
      }
    pe(Lu, 'MissingRenderToCanvasError')
    const ku = Lu,
      Nu = class extends ge {
        constructor(t) {
          ;(super({
            category: 'PREVIEW_API',
            code: 5,
            message: be`
        Called \`Preview.${t.methodName}()\` before initialization.
        
        The preview needs to load the story index before most methods can be called. If you want
        to call \`${t.methodName}\`, try \`await preview.initializationPromise;\` first.
        
        If you didn't call the above code, then likely it was called by an addon that needs to
        do the above.`,
          }),
            (this.data = t))
        }
      }
    pe(Nu, 'CalledPreviewMethodBeforeInitializationError')
    const Re = Nu,
      ju = class extends ge {
        constructor(t) {
          ;(super({
            category: 'PREVIEW_API',
            code: 6,
            message: be`
        Error fetching \`/index.json\`:
        
        ${t.text}

        If you are in development, this likely indicates a problem with your Storybook process,
        check the terminal for errors.

        If you are in a deployed Storybook, there may have been an issue deploying the full Storybook
        build.`,
          }),
            (this.data = t))
        }
      }
    pe(ju, 'StoryIndexFetchError')
    const Mu = ju,
      qu = class extends ge {
        constructor(t) {
          ;(super({
            category: 'PREVIEW_API',
            code: 7,
            message: be`
        Tried to render docs entry ${t.storyId} but it is a MDX file that has no CSF
        references, or autodocs for a CSF file that some doesn't refer to itself.
        
        This likely is an internal error in Storybook's indexing, or you've attached the
        \`attached-mdx\` tag to an MDX file that is not attached.`,
          }),
            (this.data = t))
        }
      }
    pe(qu, 'MdxFileWithNoCsfReferencesError')
    const zu = qu,
      Uu = class extends ge {
        constructor() {
          super({
            category: 'PREVIEW_API',
            code: 8,
            message: be`
        Couldn't find any stories in your Storybook.

        - Please check your stories field of your main.js config: does it match correctly?
        - Also check the browser console and terminal for error messages.`,
          })
        }
      }
    pe(Uu, 'EmptyIndexError')
    const Hu = Uu,
      Vu = class extends ge {
        constructor(t) {
          ;(super({
            category: 'PREVIEW_API',
            code: 9,
            message: be`
        Couldn't find story matching '${t.storySpecifier}'.

        - Are you sure a story with that id exists?
        - Please check your stories field of your main.js config.
        - Also check the browser console and terminal for error messages.`,
          }),
            (this.data = t))
        }
      }
    pe(Vu, 'NoStoryMatchError')
    const Wu = Vu,
      Gu = class extends ge {
        constructor(t) {
          ;(super({
            category: 'PREVIEW_API',
            code: 10,
            message: be`
        Couldn't find story matching id '${t.storyId}' after importing a CSF file.

        The file was indexed as if the story was there, but then after importing the file in the browser
        we didn't find the story. Possible reasons:
        - You are using a custom story indexer that is misbehaving.
        - You have a custom file loader that is removing or renaming exports.

        Please check your browser console and terminal for errors that may explain the issue.`,
          }),
            (this.data = t))
        }
      }
    pe(Gu, 'MissingStoryFromCsfFileError')
    const Yu = Gu,
      Ku = class extends ge {
        constructor() {
          super({
            category: 'PREVIEW_API',
            code: 11,
            message: be`
        Cannot access the Story Store until the index is ready.

        It is not recommended to use methods directly on the Story Store anyway, in Storybook 9 we will
        remove access to the store entirely`,
          })
        }
      }
    pe(Ku, 'StoryStoreAccessedBeforeInitializationError')
    const Xu = Ku,
      Ju = class extends ge {
        constructor(t) {
          ;(super({
            category: 'PREVIEW_API',
            code: 12,
            message: be`
      Incorrect use of mount in the play function.
      
      To use mount in the play function, you must satisfy the following two requirements: 
      
      1. You *must* destructure the mount property from the \`context\` (the argument passed to your play function). 
         This makes sure that Storybook does not start rendering the story before the play function begins.
      
      2. Your Storybook framework or builder must be configured to transpile to ES2017 or newer. 
         This is because destructuring statements and async/await usages are otherwise transpiled away, 
         which prevents Storybook from recognizing your usage of \`mount\`.
      
      Note that Angular is not supported. As async/await is transpiled to support the zone.js polyfill. 
      
      More info: https://storybook.js.org/docs/writing-tests/interaction-testing#run-code-before-the-component-gets-rendered
      
      Received the following play function:
      ${t.playFunction}`,
          }),
            (this.data = t))
        }
      }
    pe(Ju, 'MountMustBeDestructuredError')
    const Wr = Ju,
      Zu = class extends ge {
        constructor(t) {
          ;(super({
            category: 'PREVIEW_API',
            code: 14,
            message: be`
        No render function available for storyId '${t.id}'
      `,
          }),
            (this.data = t))
        }
      }
    pe(Zu, 'NoRenderFunctionError')
    const Qu = Zu,
      es = class extends ge {
        constructor() {
          super({
            category: 'PREVIEW_API',
            code: 15,
            message: be`
        No component is mounted in your story.
        
        This usually occurs when you destructure mount in the play function, but forget to call it.
        
        For example:

        async play({ mount, canvasElement }) {
          // 👈 mount should be called: await mount(); 
          const canvas = within(canvasElement);
          const button = await canvas.findByRole('button');
          await userEvent.click(button);
        };

        Make sure to either remove it or call mount in your play function.
      `,
          })
        }
      }
    pe(es, 'NoStoryMountedError')
    const ts = es,
      g2 = class extends ge {
        constructor(t) {
          ;(super({
            category: 'PREVIEW_API',
            code: 16,
            message: `Status has typeId "${t.status.typeId}" but was added to store with typeId "${t.typeId}". Full status: ${JSON.stringify(t.status, null, 2)}`,
          }),
            (this.data = t))
        }
      }
    pe(g2, 'StatusTypeIdMismatchError')
    const y2 = class extends ge {
      constructor() {
        super({
          category: 'FRAMEWORK_NEXTJS',
          code: 1,
          documentation: 'https://storybook.js.org/docs/get-started/nextjs#faq',
          message: be`
      You are importing avif images, but you don't have sharp installed.

      You have to install sharp in order to use image optimization features in Next.js.
      `,
        })
      }
    }
    pe(y2, 'NextJsSharpError')
    const b2 = class extends ge {
      constructor(t) {
        ;(super({
          category: 'FRAMEWORK_NEXTJS',
          code: 2,
          message: be`
        Tried to access router mocks from "${t.importType}" but they were not created yet. You might be running code in an unsupported environment.
      `,
        }),
          (this.data = t))
      }
    }
    pe(b2, 'NextjsRouterMocksNotAvailable')
    const E2 = class extends ge {
      constructor(t) {
        ;(super({
          category: 'DOCS-TOOLS',
          code: 1,
          documentation:
            'https://github.com/storybookjs/storybook/issues/26606',
          message: be`
        There was a failure when generating detailed ArgTypes in ${t.language} for:
        ${JSON.stringify(t.type, null, 2)} 
        
        Storybook will fall back to use a generic type description instead.

        This type is either not supported or it is a bug in the docgen generation in Storybook.
        If you think this is a bug, please detail it as much as possible in the Github issue.
      `,
        }),
          (this.data = t))
      }
    }
    pe(E2, 'UnknownArgTypesError')
    const A2 = class extends ge {
      constructor(t) {
        ;(super({
          category: 'ADDON_VITEST',
          code: 1,
          message: be`
        Encountered an unsupported value "${t.value}" when setting the viewport ${t.dimension} dimension.
        
        The Storybook plugin only supports values in the following units:
        - px, vh, vw, em, rem and %.
        
        You can either change the viewport for this story to use one of the supported units or skip the test by adding '!test' to the story's tags per https://storybook.js.org/docs/writing-stories/tags
      `,
        }),
          (this.data = t))
      }
    }
    pe(A2, 'UnsupportedViewportDimensionError')
    const w2 = class extends ge {
      constructor() {
        super({
          category: 'ADDON_A11Y',
          code: 1,
          documentation:
            'https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#a11y-addon-replace-element-parameter-with-context-parameter',
          message:
            'The "element" parameter in parameters.a11y has been removed. Use "context" instead.',
        })
      }
    }
    pe(w2, 'ElementA11yParameterError')
    const q5 = __STORYBOOK_TEST__,
      {
        buildQueries: z5,
        clearAllMocks: rs,
        configure: U5,
        createEvent: H5,
        expect: V5,
        findAllByAltText: W5,
        findAllByDisplayValue: G5,
        findAllByLabelText: Y5,
        findAllByPlaceholderText: K5,
        findAllByRole: X5,
        findAllByTestId: J5,
        findAllByText: Z5,
        findAllByTitle: Q5,
        findByAltText: eT,
        findByDisplayValue: tT,
        findByLabelText: rT,
        findByPlaceholderText: nT,
        findByRole: oT,
        findByTestId: iT,
        findByText: aT,
        findByTitle: uT,
        fireEvent: sT,
        fn: ns,
        getAllByAltText: lT,
        getAllByDisplayValue: cT,
        getAllByLabelText: pT,
        getAllByPlaceholderText: dT,
        getAllByRole: fT,
        getAllByTestId: hT,
        getAllByText: mT,
        getAllByTitle: gT,
        getByAltText: yT,
        getByDisplayValue: bT,
        getByLabelText: ET,
        getByPlaceholderText: AT,
        getByRole: wT,
        getByTestId: ST,
        getByText: vT,
        getByTitle: CT,
        getConfig: xT,
        getDefaultNormalizer: DT,
        getElementError: TT,
        getNodeText: _T,
        getQueriesForElement: OT,
        getRoles: IT,
        getSuggestedQuery: RT,
        isInaccessible: FT,
        isMockFunction: os,
        logDOM: BT,
        logRoles: PT,
        mocked: $T,
        mocks: LT,
        onMockCall: is,
        prettyDOM: kT,
        prettyFormat: NT,
        queries: jT,
        queryAllByAltText: MT,
        queryAllByAttribute: qT,
        queryAllByDisplayValue: zT,
        queryAllByLabelText: UT,
        queryAllByPlaceholderText: HT,
        queryAllByRole: VT,
        queryAllByTestId: WT,
        queryAllByText: GT,
        queryAllByTitle: YT,
        queryByAltText: KT,
        queryByAttribute: XT,
        queryByDisplayValue: JT,
        queryByLabelText: ZT,
        queryByPlaceholderText: QT,
        queryByRole: e_,
        queryByTestId: t_,
        queryByText: r_,
        queryByTitle: n_,
        queryHelpers: o_,
        resetAllMocks: as,
        restoreAllMocks: us,
        screen: i_,
        spyOn: a_,
        uninstrumentedUserEvent: ss,
        userEvent: u_,
        waitFor: s_,
        waitForElementToBeRemoved: l_,
        within: ls,
      } = __STORYBOOK_TEST__
    const S2 = Object.defineProperty,
      w = (e, t) => S2(e, 'name', { value: t, configurable: !0 }),
      v2 = {
        reset: [0, 0],
        bold: [1, 22, '\x1B[22m\x1B[1m'],
        dim: [2, 22, '\x1B[22m\x1B[2m'],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29],
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        gray: [90, 39],
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
        blackBright: [90, 39],
        redBright: [91, 39],
        greenBright: [92, 39],
        yellowBright: [93, 39],
        blueBright: [94, 39],
        magentaBright: [95, 39],
        cyanBright: [96, 39],
        whiteBright: [97, 39],
        bgBlackBright: [100, 49],
        bgRedBright: [101, 49],
        bgGreenBright: [102, 49],
        bgYellowBright: [103, 49],
        bgBlueBright: [104, 49],
        bgMagentaBright: [105, 49],
        bgCyanBright: [106, 49],
        bgWhiteBright: [107, 49],
      },
      C2 = Object.entries(v2)
    function nn(e) {
      return String(e)
    }
    w(nn, 'a')
    nn.open = ''
    nn.close = ''
    function Bs(e = !1) {
      const t = typeof process < 'u' ? process : void 0,
        r = t?.env || {},
        n = t?.argv || []
      return (
        (!('NO_COLOR' in r || n.includes('--no-color')) &&
          ('FORCE_COLOR' in r ||
            n.includes('--color') ||
            t?.platform === 'win32' ||
            (e && r.TERM !== 'dumb') ||
            'CI' in r)) ||
        (typeof window < 'u' && !!window.chrome)
      )
    }
    w(Bs, 'C')
    function Ps(e = !1) {
      const t = Bs(e),
        r = w((a, u, s, l) => {
          let c = '',
            p = 0
          do
            ((c += a.substring(p, l) + s),
              (p = l + u.length),
              (l = a.indexOf(u, p)))
          while (~l)
          return c + a.substring(p)
        }, 'i'),
        n = w((a, u, s = a) => {
          const l = w((c) => {
            const p = String(c),
              g = p.indexOf(u, a.length)
            return ~g ? a + r(p, u, s, g) + u : a + p + u
          }, 'o')
          return ((l.open = a), (l.close = u), l)
        }, 'g'),
        o = { isColorSupported: t },
        i = w((a) => `\x1B[${a}m`, 'd')
      for (const [a, u] of C2) o[a] = t ? n(i(u[0]), i(u[1]), u[2]) : nn
      return o
    }
    w(Ps, 'p')
    const ot = Ps()
    function Po(e, t) {
      return (
        t.forEach(function (r) {
          r &&
            typeof r !== 'string' &&
            !Array.isArray(r) &&
            Object.keys(r).forEach(function (n) {
              if (n !== 'default' && !(n in e)) {
                const o = Object.getOwnPropertyDescriptor(r, n)
                Object.defineProperty(
                  e,
                  n,
                  o.get
                    ? o
                    : {
                        enumerable: !0,
                        get: w(function () {
                          return r[n]
                        }, 'get'),
                      }
                )
              }
            })
        }),
        Object.freeze(e)
      )
    }
    w(Po, '_mergeNamespaces')
    function $s(e, t) {
      const r = Object.keys(e),
        n = t === null ? r : r.sort(t)
      if (Object.getOwnPropertySymbols)
        for (const o of Object.getOwnPropertySymbols(e))
          Object.getOwnPropertyDescriptor(e, o).enumerable && n.push(o)
      return n
    }
    w($s, 'getKeysOfEnumerableProperties')
    function qt(e, t, r, n, o, i, a = ': ') {
      let u = '',
        s = 0,
        l = e.next()
      if (!l.done) {
        u += t.spacingOuter
        const c = r + t.indent
        for (; !l.done; ) {
          if (((u += c), s++ === t.maxWidth)) {
            u += '\u2026'
            break
          }
          const p = i(l.value[0], t, c, n, o),
            g = i(l.value[1], t, c, n, o)
          ;((u += p + a + g),
            (l = e.next()),
            l.done ? t.min || (u += ',') : (u += `,${t.spacingInner}`))
        }
        u += t.spacingOuter + r
      }
      return u
    }
    w(qt, 'printIteratorEntries')
    function on(e, t, r, n, o, i) {
      let a = '',
        u = 0,
        s = e.next()
      if (!s.done) {
        a += t.spacingOuter
        const l = r + t.indent
        for (; !s.done; ) {
          if (((a += l), u++ === t.maxWidth)) {
            a += '\u2026'
            break
          }
          ;((a += i(s.value, t, l, n, o)),
            (s = e.next()),
            s.done ? t.min || (a += ',') : (a += `,${t.spacingInner}`))
        }
        a += t.spacingOuter + r
      }
      return a
    }
    w(on, 'printIteratorValues')
    function gr(e, t, r, n, o, i) {
      let a = ''
      e = e instanceof ArrayBuffer ? new DataView(e) : e
      const u = w((l) => l instanceof DataView, 'isDataView'),
        s = u(e) ? e.byteLength : e.length
      if (s > 0) {
        a += t.spacingOuter
        const l = r + t.indent
        for (let c = 0; c < s; c++) {
          if (((a += l), c === t.maxWidth)) {
            a += '\u2026'
            break
          }
          ;((u(e) || c in e) &&
            (a += i(u(e) ? e.getInt8(c) : e[c], t, l, n, o)),
            c < s - 1 ? (a += `,${t.spacingInner}`) : t.min || (a += ','))
        }
        a += t.spacingOuter + r
      }
      return a
    }
    w(gr, 'printListItems')
    function an(e, t, r, n, o, i) {
      let a = '',
        u = $s(e, t.compareKeys)
      if (u.length > 0) {
        a += t.spacingOuter
        const s = r + t.indent
        for (let l = 0; l < u.length; l++) {
          const c = u[l],
            p = i(c, t, s, n, o),
            g = i(e[c], t, s, n, o)
          ;((a += `${s + p}: ${g}`),
            l < u.length - 1
              ? (a += `,${t.spacingInner}`)
              : t.min || (a += ','))
        }
        a += t.spacingOuter + r
      }
      return a
    }
    w(an, 'printObjectProperties')
    const x2 =
        typeof Symbol === 'function' && Symbol.for
          ? Symbol.for('jest.asymmetricMatcher')
          : 1267621,
      no = ' ',
      D2 = w((e, t, r, n, o, i) => {
        const a = e.toString()
        if (a === 'ArrayContaining' || a === 'ArrayNotContaining')
          return ++n > t.maxDepth
            ? `[${a}]`
            : `${a + no}[${gr(e.sample, t, r, n, o, i)}]`
        if (a === 'ObjectContaining' || a === 'ObjectNotContaining')
          return ++n > t.maxDepth
            ? `[${a}]`
            : `${a + no}{${an(e.sample, t, r, n, o, i)}}`
        if (
          a === 'StringMatching' ||
          a === 'StringNotMatching' ||
          a === 'StringContaining' ||
          a === 'StringNotContaining'
        )
          return a + no + i(e.sample, t, r, n, o)
        if (typeof e.toAsymmetricMatcher !== 'function')
          throw new TypeError(
            `Asymmetric matcher ${e.constructor.name} does not implement toAsymmetricMatcher()`
          )
        return e.toAsymmetricMatcher()
      }, 'serialize$5'),
      T2 = w((e) => e && e.$$typeof === x2, 'test$5'),
      _2 = { serialize: D2, test: T2 },
      O2 = ' ',
      Ls = new Set(['DOMStringMap', 'NamedNodeMap']),
      I2 = /^(?:HTML\w*Collection|NodeList)$/
    function ks(e) {
      return Ls.has(e) || I2.test(e)
    }
    w(ks, 'testName')
    const R2 = w(
      (e) =>
        e && e.constructor && !!e.constructor.name && ks(e.constructor.name),
      'test$4'
    )
    function Ns(e) {
      return e.constructor.name === 'NamedNodeMap'
    }
    w(Ns, 'isNamedNodeMap')
    const F2 = w((e, t, r, n, o, i) => {
        const a = e.constructor.name
        return ++n > t.maxDepth
          ? `[${a}]`
          : (t.min ? '' : a + O2) +
              (Ls.has(a)
                ? `{${an(Ns(e) ? [...e].reduce((u, s) => ((u[s.name] = s.value), u), {}) : { ...e }, t, r, n, o, i)}}`
                : `[${gr([...e], t, r, n, o, i)}]`)
      }, 'serialize$4'),
      B2 = { serialize: F2, test: R2 }
    function $o(e) {
      return e.replaceAll('<', '&lt;').replaceAll('>', '&gt;')
    }
    w($o, 'escapeHTML')
    function un(e, t, r, n, o, i, a) {
      const u = n + r.indent,
        s = r.colors
      return e
        .map((l) => {
          let c = t[l],
            p = a(c, r, u, o, i)
          return (
            typeof c !== 'string' &&
              (p.includes(`
`) && (p = r.spacingOuter + u + p + r.spacingOuter + n),
              (p = `{${p}}`)),
            `${r.spacingInner + n + s.prop.open + l + s.prop.close}=${s.value.open}${p}${s.value.close}`
          )
        })
        .join('')
    }
    w(un, 'printProps')
    function sn(e, t, r, n, o, i) {
      return e
        .map(
          (a) =>
            t.spacingOuter +
            r +
            (typeof a === 'string' ? Lo(a, t) : i(a, t, r, n, o))
        )
        .join('')
    }
    w(sn, 'printChildren')
    function Lo(e, t) {
      const r = t.colors.content
      return r.open + $o(e) + r.close
    }
    w(Lo, 'printText')
    function js(e, t) {
      const r = t.colors.comment
      return `${r.open}<!--${$o(e)}-->${r.close}`
    }
    w(js, 'printComment')
    function ln(e, t, r, n, o) {
      const i = n.colors.tag
      return `${i.open}<${e}${t && i.close + t + n.spacingOuter + o + i.open}${r ? `>${i.close}${r}${n.spacingOuter}${o}${i.open}</${e}` : `${t && !n.min ? '' : ' '}/`}>${i.close}`
    }
    w(ln, 'printElement')
    function cn(e, t) {
      const r = t.colors.tag
      return `${r.open}<${e}${r.close} \u2026${r.open} />${r.close}`
    }
    w(cn, 'printElementAsLeaf')
    const P2 = 1,
      Ms = 3,
      qs = 8,
      zs = 11,
      $2 = /^(?:(?:HTML|SVG)\w*)?Element$/
    function Us(e) {
      try {
        return typeof e.hasAttribute === 'function' && e.hasAttribute('is')
      } catch {
        return !1
      }
    }
    w(Us, 'testHasAttribute')
    function Hs(e) {
      const t = e.constructor.name,
        { nodeType: r, tagName: n } = e,
        o = (typeof n === 'string' && n.includes('-')) || Us(e)
      return (
        (r === P2 && ($2.test(t) || o)) ||
        (r === Ms && t === 'Text') ||
        (r === qs && t === 'Comment') ||
        (r === zs && t === 'DocumentFragment')
      )
    }
    w(Hs, 'testNode')
    const L2 = w((e) => {
      let t
      return (
        (e == null || (t = e.constructor) === null || t === void 0
          ? void 0
          : t.name) && Hs(e)
      )
    }, 'test$3')
    function Vs(e) {
      return e.nodeType === Ms
    }
    w(Vs, 'nodeIsText')
    function Ws(e) {
      return e.nodeType === qs
    }
    w(Ws, 'nodeIsComment')
    function Yr(e) {
      return e.nodeType === zs
    }
    w(Yr, 'nodeIsFragment')
    const k2 = w((e, t, r, n, o, i) => {
        if (Vs(e)) return Lo(e.data, t)
        if (Ws(e)) return js(e.data, t)
        const a = Yr(e) ? 'DocumentFragment' : e.tagName.toLowerCase()
        return ++n > t.maxDepth
          ? cn(a, t)
          : ln(
              a,
              un(
                Yr(e) ? [] : Array.from(e.attributes, (u) => u.name).sort(),
                Yr(e)
                  ? {}
                  : [...e.attributes].reduce(
                      (u, s) => ((u[s.name] = s.value), u),
                      {}
                    ),
                t,
                r + t.indent,
                n,
                o,
                i
              ),
              sn(
                Array.prototype.slice.call(e.childNodes || e.children),
                t,
                r + t.indent,
                n,
                o,
                i
              ),
              t,
              r
            )
      }, 'serialize$3'),
      N2 = { serialize: k2, test: L2 },
      j2 = '@@__IMMUTABLE_ITERABLE__@@',
      M2 = '@@__IMMUTABLE_LIST__@@',
      q2 = '@@__IMMUTABLE_KEYED__@@',
      z2 = '@@__IMMUTABLE_MAP__@@',
      cs = '@@__IMMUTABLE_ORDERED__@@',
      U2 = '@@__IMMUTABLE_RECORD__@@',
      H2 = '@@__IMMUTABLE_SEQ__@@',
      V2 = '@@__IMMUTABLE_SET__@@',
      W2 = '@@__IMMUTABLE_STACK__@@',
      kt = w((e) => `Immutable.${e}`, 'getImmutableName'),
      pn = w((e) => `[${e}]`, 'printAsLeaf'),
      yr = ' ',
      ps = '\u2026'
    function Gs(e, t, r, n, o, i, a) {
      return ++n > t.maxDepth
        ? pn(kt(a))
        : `${kt(a) + yr}{${qt(e.entries(), t, r, n, o, i)}}`
    }
    w(Gs, 'printImmutableEntries')
    function Ys(e) {
      let t = 0
      return {
        next() {
          if (t < e._keys.length) {
            const r = e._keys[t++]
            return { done: !1, value: [r, e.get(r)] }
          }
          return { done: !0, value: void 0 }
        },
      }
    }
    w(Ys, 'getRecordEntries')
    function Ks(e, t, r, n, o, i) {
      const a = kt(e._name || 'Record')
      return ++n > t.maxDepth ? pn(a) : `${a + yr}{${qt(Ys(e), t, r, n, o, i)}}`
    }
    w(Ks, 'printImmutableRecord')
    function Xs(e, t, r, n, o, i) {
      const a = kt('Seq')
      return ++n > t.maxDepth
        ? pn(a)
        : e[q2]
          ? `${a + yr}{${e._iter || e._object ? qt(e.entries(), t, r, n, o, i) : ps}}`
          : `${a + yr}[${e._iter || e._array || e._collection || e._iterable ? on(e.values(), t, r, n, o, i) : ps}]`
    }
    w(Xs, 'printImmutableSeq')
    function Kr(e, t, r, n, o, i, a) {
      return ++n > t.maxDepth
        ? pn(kt(a))
        : `${kt(a) + yr}[${on(e.values(), t, r, n, o, i)}]`
    }
    w(Kr, 'printImmutableValues')
    const G2 = w(
        (e, t, r, n, o, i) =>
          e[z2]
            ? Gs(e, t, r, n, o, i, e[cs] ? 'OrderedMap' : 'Map')
            : e[M2]
              ? Kr(e, t, r, n, o, i, 'List')
              : e[V2]
                ? Kr(e, t, r, n, o, i, e[cs] ? 'OrderedSet' : 'Set')
                : e[W2]
                  ? Kr(e, t, r, n, o, i, 'Stack')
                  : e[H2]
                    ? Xs(e, t, r, n, o, i)
                    : Ks(e, t, r, n, o, i),
        'serialize$2'
      ),
      Y2 = w((e) => e && (e[j2] === !0 || e[U2] === !0), 'test$2'),
      K2 = { serialize: G2, test: Y2 }
    function ko(e) {
      return e &&
        e.__esModule &&
        Object.prototype.hasOwnProperty.call(e, 'default')
        ? e.default
        : e
    }
    w(ko, 'getDefaultExportFromCjs')
    let ds = { exports: {} },
      ue = {},
      fs
    function Js() {
      return (
        fs ||
          ((fs = 1),
          (function () {
            function e(b) {
              if (typeof b === 'object' && b !== null) {
                const E = b.$$typeof
                switch (E) {
                  case t:
                    switch (((b = b.type), b)) {
                      case n:
                      case i:
                      case o:
                      case l:
                      case c:
                      case m:
                        return b
                      default:
                        switch (((b = b && b.$$typeof), b)) {
                          case u:
                          case s:
                          case g:
                          case p:
                            return b
                          case a:
                            return b
                          default:
                            return E
                        }
                    }
                  case r:
                    return E
                }
              }
            }
            w(e, 'typeOf')
            var t = Symbol.for('react.transitional.element'),
              r = Symbol.for('react.portal'),
              n = Symbol.for('react.fragment'),
              o = Symbol.for('react.strict_mode'),
              i = Symbol.for('react.profiler'),
              a = Symbol.for('react.consumer'),
              u = Symbol.for('react.context'),
              s = Symbol.for('react.forward_ref'),
              l = Symbol.for('react.suspense'),
              c = Symbol.for('react.suspense_list'),
              p = Symbol.for('react.memo'),
              g = Symbol.for('react.lazy'),
              m = Symbol.for('react.view_transition'),
              A = Symbol.for('react.client.reference')
            ;((ue.ContextConsumer = a),
              (ue.ContextProvider = u),
              (ue.Element = t),
              (ue.ForwardRef = s),
              (ue.Fragment = n),
              (ue.Lazy = g),
              (ue.Memo = p),
              (ue.Portal = r),
              (ue.Profiler = i),
              (ue.StrictMode = o),
              (ue.Suspense = l),
              (ue.SuspenseList = c),
              (ue.isContextConsumer = function (b) {
                return e(b) === a
              }),
              (ue.isContextProvider = function (b) {
                return e(b) === u
              }),
              (ue.isElement = function (b) {
                return typeof b === 'object' && b !== null && b.$$typeof === t
              }),
              (ue.isForwardRef = function (b) {
                return e(b) === s
              }),
              (ue.isFragment = function (b) {
                return e(b) === n
              }),
              (ue.isLazy = function (b) {
                return e(b) === g
              }),
              (ue.isMemo = function (b) {
                return e(b) === p
              }),
              (ue.isPortal = function (b) {
                return e(b) === r
              }),
              (ue.isProfiler = function (b) {
                return e(b) === i
              }),
              (ue.isStrictMode = function (b) {
                return e(b) === o
              }),
              (ue.isSuspense = function (b) {
                return e(b) === l
              }),
              (ue.isSuspenseList = function (b) {
                return e(b) === c
              }),
              (ue.isValidElementType = function (b) {
                return (
                  typeof b === 'string' ||
                  typeof b === 'function' ||
                  b === n ||
                  b === i ||
                  b === o ||
                  b === l ||
                  b === c ||
                  (typeof b === 'object' &&
                    b !== null &&
                    (b.$$typeof === g ||
                      b.$$typeof === p ||
                      b.$$typeof === u ||
                      b.$$typeof === a ||
                      b.$$typeof === s ||
                      b.$$typeof === A ||
                      b.getModuleId !== void 0))
                )
              }),
              (ue.typeOf = e))
          })()),
        ue
      )
    }
    w(Js, 'requireReactIs_development$1')
    let hs
    function Zs() {
      return (hs || ((hs = 1), (ds.exports = Js())), ds.exports)
    }
    w(Zs, 'requireReactIs$1')
    let Qs = Zs(),
      X2 = ko(Qs),
      J2 = Po({ __proto__: null, default: X2 }, [Qs]),
      ms = { exports: {} },
      ee = {},
      gs
    function el() {
      return (
        gs ||
          ((gs = 1),
          (function () {
            let e = Symbol.for('react.element'),
              t = Symbol.for('react.portal'),
              r = Symbol.for('react.fragment'),
              n = Symbol.for('react.strict_mode'),
              o = Symbol.for('react.profiler'),
              i = Symbol.for('react.provider'),
              a = Symbol.for('react.context'),
              u = Symbol.for('react.server_context'),
              s = Symbol.for('react.forward_ref'),
              l = Symbol.for('react.suspense'),
              c = Symbol.for('react.suspense_list'),
              p = Symbol.for('react.memo'),
              g = Symbol.for('react.lazy'),
              m = Symbol.for('react.offscreen'),
              A = !1,
              b = !1,
              E = !1,
              x = !1,
              C = !1,
              _
            _ = Symbol.for('react.module.reference')
            function D(U) {
              return !!(
                typeof U === 'string' ||
                typeof U === 'function' ||
                U === r ||
                U === o ||
                C ||
                U === n ||
                U === l ||
                U === c ||
                x ||
                U === m ||
                A ||
                b ||
                E ||
                (typeof U === 'object' &&
                  U !== null &&
                  (U.$$typeof === g ||
                    U.$$typeof === p ||
                    U.$$typeof === i ||
                    U.$$typeof === a ||
                    U.$$typeof === s ||
                    U.$$typeof === _ ||
                    U.getModuleId !== void 0))
              )
            }
            w(D, 'isValidElementType')
            function I(U) {
              if (typeof U === 'object' && U !== null) {
                const ae = U.$$typeof
                switch (ae) {
                  case e:
                    var re = U.type
                    switch (re) {
                      case r:
                      case o:
                      case n:
                      case l:
                      case c:
                        return re
                      default:
                        var je = re && re.$$typeof
                        switch (je) {
                          case u:
                          case a:
                          case s:
                          case g:
                          case p:
                          case i:
                            return je
                          default:
                            return ae
                        }
                    }
                  case t:
                    return ae
                }
              }
            }
            w(I, 'typeOf')
            let T = a,
              S = i,
              O = e,
              F = s,
              $ = r,
              P = g,
              j = p,
              k = t,
              h = o,
              f = n,
              v = l,
              B = c,
              R = !1,
              L = !1
            function N(U) {
              return (
                R ||
                  ((R = !0),
                  console.warn(
                    'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.'
                  )),
                !1
              )
            }
            w(N, 'isAsyncMode')
            function M(U) {
              return (
                L ||
                  ((L = !0),
                  console.warn(
                    'The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.'
                  )),
                !1
              )
            }
            w(M, 'isConcurrentMode')
            function z(U) {
              return I(U) === a
            }
            w(z, 'isContextConsumer')
            function Y(U) {
              return I(U) === i
            }
            w(Y, 'isContextProvider')
            function X(U) {
              return typeof U === 'object' && U !== null && U.$$typeof === e
            }
            w(X, 'isElement')
            function V(U) {
              return I(U) === s
            }
            w(V, 'isForwardRef')
            function J(U) {
              return I(U) === r
            }
            w(J, 'isFragment')
            function W(U) {
              return I(U) === g
            }
            w(W, 'isLazy')
            function te(U) {
              return I(U) === p
            }
            w(te, 'isMemo')
            function ye(U) {
              return I(U) === t
            }
            w(ye, 'isPortal')
            function me(U) {
              return I(U) === o
            }
            w(me, 'isProfiler')
            function Ce(U) {
              return I(U) === n
            }
            w(Ce, 'isStrictMode')
            function ct(U) {
              return I(U) === l
            }
            w(ct, 'isSuspense')
            function Pt(U) {
              return I(U) === c
            }
            ;(w(Pt, 'isSuspenseList'),
              (ee.ContextConsumer = T),
              (ee.ContextProvider = S),
              (ee.Element = O),
              (ee.ForwardRef = F),
              (ee.Fragment = $),
              (ee.Lazy = P),
              (ee.Memo = j),
              (ee.Portal = k),
              (ee.Profiler = h),
              (ee.StrictMode = f),
              (ee.Suspense = v),
              (ee.SuspenseList = B),
              (ee.isAsyncMode = N),
              (ee.isConcurrentMode = M),
              (ee.isContextConsumer = z),
              (ee.isContextProvider = Y),
              (ee.isElement = X),
              (ee.isForwardRef = V),
              (ee.isFragment = J),
              (ee.isLazy = W),
              (ee.isMemo = te),
              (ee.isPortal = ye),
              (ee.isProfiler = me),
              (ee.isStrictMode = Ce),
              (ee.isSuspense = ct),
              (ee.isSuspenseList = Pt),
              (ee.isValidElementType = D),
              (ee.typeOf = I))
          })()),
        ee
      )
    }
    w(el, 'requireReactIs_development')
    let ys
    function tl() {
      return (ys || ((ys = 1), (ms.exports = el())), ms.exports)
    }
    w(tl, 'requireReactIs')
    const rl = tl(),
      Z2 = ko(rl),
      Q2 = Po({ __proto__: null, default: Z2 }, [rl]),
      eh = [
        'isAsyncMode',
        'isConcurrentMode',
        'isContextConsumer',
        'isContextProvider',
        'isElement',
        'isForwardRef',
        'isFragment',
        'isLazy',
        'isMemo',
        'isPortal',
        'isProfiler',
        'isStrictMode',
        'isSuspense',
        'isSuspenseList',
        'isValidElementType',
      ],
      Ct = Object.fromEntries(eh.map((e) => [e, (t) => Q2[e](t) || J2[e](t)]))
    function No(e, t = []) {
      if (Array.isArray(e)) for (const r of e) No(r, t)
      else e != null && e !== !1 && e !== '' && t.push(e)
      return t
    }
    w(No, 'getChildren')
    function co(e) {
      const t = e.type
      if (typeof t === 'string') return t
      if (typeof t === 'function') return t.displayName || t.name || 'Unknown'
      if (Ct.isFragment(e)) return 'React.Fragment'
      if (Ct.isSuspense(e)) return 'React.Suspense'
      if (typeof t === 'object' && t !== null) {
        if (Ct.isContextProvider(e)) return 'Context.Provider'
        if (Ct.isContextConsumer(e)) return 'Context.Consumer'
        if (Ct.isForwardRef(e)) {
          if (t.displayName) return t.displayName
          const r = t.render.displayName || t.render.name || ''
          return r === '' ? 'ForwardRef' : `ForwardRef(${r})`
        }
        if (Ct.isMemo(e)) {
          const r = t.displayName || t.type.displayName || t.type.name || ''
          return r === '' ? 'Memo' : `Memo(${r})`
        }
      }
      return 'UNDEFINED'
    }
    w(co, 'getType')
    function nl(e) {
      const { props: t } = e
      return Object.keys(t)
        .filter((r) => r !== 'children' && t[r] !== void 0)
        .sort()
    }
    w(nl, 'getPropKeys$1')
    const th = w(
        (e, t, r, n, o, i) =>
          ++n > t.maxDepth
            ? cn(co(e), t)
            : ln(
                co(e),
                un(nl(e), e.props, t, r + t.indent, n, o, i),
                sn(No(e.props.children), t, r + t.indent, n, o, i),
                t,
                r
              ),
        'serialize$1'
      ),
      rh = w((e) => e != null && Ct.isElement(e), 'test$1'),
      nh = { serialize: th, test: rh },
      oh =
        typeof Symbol === 'function' && Symbol.for
          ? Symbol.for('react.test.json')
          : 245830487
    function ol(e) {
      const { props: t } = e
      return t
        ? Object.keys(t)
            .filter((r) => t[r] !== void 0)
            .sort()
        : []
    }
    w(ol, 'getPropKeys')
    const ih = w(
        (e, t, r, n, o, i) =>
          ++n > t.maxDepth
            ? cn(e.type, t)
            : ln(
                e.type,
                e.props ? un(ol(e), e.props, t, r + t.indent, n, o, i) : '',
                e.children ? sn(e.children, t, r + t.indent, n, o, i) : '',
                t,
                r
              ),
        'serialize'
      ),
      ah = w((e) => e && e.$$typeof === oh, 'test'),
      uh = { serialize: ih, test: ah },
      il = Object.prototype.toString,
      sh = Date.prototype.toISOString,
      lh = Error.prototype.toString,
      bs = RegExp.prototype.toString
    function hr(e) {
      return (
        (typeof e.constructor === 'function' && e.constructor.name) || 'Object'
      )
    }
    w(hr, 'getConstructorName')
    function al(e) {
      return typeof window < 'u' && e === window
    }
    w(al, 'isWindow')
    const ch = /^Symbol\((.*)\)(.*)$/,
      ph = /\n/g,
      ul = class extends Error {
        constructor(t, r) {
          ;(super(t), (this.stack = r), (this.name = this.constructor.name))
        }
      }
    w(ul, 'PrettyFormatPluginError')
    const sl = ul
    function ll(e) {
      return (
        e === '[object Array]' ||
        e === '[object ArrayBuffer]' ||
        e === '[object DataView]' ||
        e === '[object Float32Array]' ||
        e === '[object Float64Array]' ||
        e === '[object Int8Array]' ||
        e === '[object Int16Array]' ||
        e === '[object Int32Array]' ||
        e === '[object Uint8Array]' ||
        e === '[object Uint8ClampedArray]' ||
        e === '[object Uint16Array]' ||
        e === '[object Uint32Array]'
      )
    }
    w(ll, 'isToStringedArrayType')
    function cl(e) {
      return Object.is(e, -0) ? '-0' : String(e)
    }
    w(cl, 'printNumber')
    function pl(e) {
      return `${e}n`
    }
    w(pl, 'printBigInt')
    function po(e, t) {
      return t ? `[Function ${e.name || 'anonymous'}]` : '[Function]'
    }
    w(po, 'printFunction')
    function fo(e) {
      return String(e).replace(ch, 'Symbol($1)')
    }
    w(fo, 'printSymbol')
    function ho(e) {
      return `[${lh.call(e)}]`
    }
    w(ho, 'printError')
    function jo(e, t, r, n) {
      if (e === !0 || e === !1) return `${e}`
      if (e === void 0) return 'undefined'
      if (e === null) return 'null'
      const o = typeof e
      if (o === 'number') return cl(e)
      if (o === 'bigint') return pl(e)
      if (o === 'string')
        return n ? `"${e.replaceAll(/"|\\/g, '\\$&')}"` : `"${e}"`
      if (o === 'function') return po(e, t)
      if (o === 'symbol') return fo(e)
      const i = il.call(e)
      return i === '[object WeakMap]'
        ? 'WeakMap {}'
        : i === '[object WeakSet]'
          ? 'WeakSet {}'
          : i === '[object Function]' || i === '[object GeneratorFunction]'
            ? po(e, t)
            : i === '[object Symbol]'
              ? fo(e)
              : i === '[object Date]'
                ? Number.isNaN(+e)
                  ? 'Date { NaN }'
                  : sh.call(e)
                : i === '[object Error]'
                  ? ho(e)
                  : i === '[object RegExp]'
                    ? r
                      ? bs.call(e).replaceAll(/[$()*+.?[\\\]^{|}]/g, '\\$&')
                      : bs.call(e)
                    : e instanceof Error
                      ? ho(e)
                      : null
    }
    w(jo, 'printBasicValue')
    function Mo(e, t, r, n, o, i) {
      if (o.includes(e)) return '[Circular]'
      ;((o = [...o]), o.push(e))
      const a = ++n > t.maxDepth,
        u = t.min
      if (
        t.callToJSON &&
        !a &&
        e.toJSON &&
        typeof e.toJSON === 'function' &&
        !i
      )
        return rt(e.toJSON(), t, r, n, o, !0)
      const s = il.call(e)
      return s === '[object Arguments]'
        ? a
          ? '[Arguments]'
          : `${u ? '' : 'Arguments '}[${gr(e, t, r, n, o, rt)}]`
        : ll(s)
          ? a
            ? `[${e.constructor.name}]`
            : `${u || (!t.printBasicPrototype && e.constructor.name === 'Array') ? '' : `${e.constructor.name} `}[${gr(e, t, r, n, o, rt)}]`
          : s === '[object Map]'
            ? a
              ? '[Map]'
              : `Map {${qt(e.entries(), t, r, n, o, rt, ' => ')}}`
            : s === '[object Set]'
              ? a
                ? '[Set]'
                : `Set {${on(e.values(), t, r, n, o, rt)}}`
              : a || al(e)
                ? `[${hr(e)}]`
                : `${u || (!t.printBasicPrototype && hr(e) === 'Object') ? '' : `${hr(e)} `}{${an(e, t, r, n, o, rt)}}`
    }
    w(Mo, 'printComplexValue')
    const dh = {
      test: w((e) => e && e instanceof Error, 'test'),
      serialize(e, t, r, n, o, i) {
        if (o.includes(e)) return '[Circular]'
        o = [...o, e]
        const a = ++n > t.maxDepth,
          { message: u, cause: s, ...l } = e,
          c = {
            message: u,
            ...(typeof s < 'u' ? { cause: s } : {}),
            ...(e instanceof AggregateError ? { errors: e.errors } : {}),
            ...l,
          },
          p = e.name !== 'Error' ? e.name : hr(e)
        return a
          ? `[${p}]`
          : `${p} {${qt(Object.entries(c).values(), t, r, n, o, i)}}`
      },
    }
    function dl(e) {
      return e.serialize != null
    }
    w(dl, 'isNewPlugin')
    function qo(e, t, r, n, o, i) {
      let a
      try {
        a = dl(e)
          ? e.serialize(t, r, n, o, i, rt)
          : e.print(
              t,
              (u) => rt(u, r, n, o, i),
              (u) => {
                const s = n + r.indent
                return (
                  s +
                  u.replaceAll(
                    ph,
                    `
${s}`
                  )
                )
              },
              {
                edgeSpacing: r.spacingOuter,
                min: r.min,
                spacing: r.spacingInner,
              },
              r.colors
            )
      } catch (u) {
        throw new sl(u.message, u.stack)
      }
      if (typeof a !== 'string')
        throw new TypeError(
          `pretty-format: Plugin must return type "string" but instead returned "${typeof a}".`
        )
      return a
    }
    w(qo, 'printPlugin')
    function zo(e, t) {
      for (const r of e)
        try {
          if (r.test(t)) return r
        } catch (n) {
          throw new sl(n.message, n.stack)
        }
      return null
    }
    w(zo, 'findPlugin')
    function rt(e, t, r, n, o, i) {
      const a = zo(t.plugins, e)
      if (a !== null) return qo(a, e, t, r, n, o)
      const u = jo(e, t.printFunctionName, t.escapeRegex, t.escapeString)
      return u !== null ? u : Mo(e, t, r, n, o, i)
    }
    w(rt, 'printer')
    const Uo = {
        comment: 'gray',
        content: 'reset',
        prop: 'yellow',
        tag: 'cyan',
        value: 'green',
      },
      fl = Object.keys(Uo),
      Ve = {
        callToJSON: !0,
        compareKeys: void 0,
        escapeRegex: !1,
        escapeString: !0,
        highlight: !1,
        indent: 2,
        maxDepth: Number.POSITIVE_INFINITY,
        maxWidth: Number.POSITIVE_INFINITY,
        min: !1,
        plugins: [],
        printBasicPrototype: !0,
        printFunctionName: !0,
        theme: Uo,
      }
    function hl(e) {
      for (const t of Object.keys(e))
        if (!Object.prototype.hasOwnProperty.call(Ve, t))
          throw new Error(`pretty-format: Unknown option "${t}".`)
      if (e.min && e.indent !== void 0 && e.indent !== 0)
        throw new Error(
          'pretty-format: Options "min" and "indent" cannot be used together.'
        )
    }
    w(hl, 'validateOptions')
    function ml() {
      return fl.reduce((e, t) => {
        const r = Uo[t],
          n = r && ot[r]
        if (n && typeof n.close === 'string' && typeof n.open === 'string')
          e[t] = n
        else
          throw new Error(
            `pretty-format: Option "theme" has a key "${t}" whose value "${r}" is undefined in ansi-styles.`
          )
        return e
      }, Object.create(null))
    }
    w(ml, 'getColorsHighlight')
    function gl() {
      return fl.reduce(
        (e, t) => ((e[t] = { close: '', open: '' }), e),
        Object.create(null)
      )
    }
    w(gl, 'getColorsEmpty')
    function Ho(e) {
      return e?.printFunctionName ?? Ve.printFunctionName
    }
    w(Ho, 'getPrintFunctionName')
    function Vo(e) {
      return e?.escapeRegex ?? Ve.escapeRegex
    }
    w(Vo, 'getEscapeRegex')
    function Wo(e) {
      return e?.escapeString ?? Ve.escapeString
    }
    w(Wo, 'getEscapeString')
    function mo(e) {
      return {
        callToJSON: e?.callToJSON ?? Ve.callToJSON,
        colors: e?.highlight ? ml() : gl(),
        compareKeys:
          typeof e?.compareKeys === 'function' || e?.compareKeys === null
            ? e.compareKeys
            : Ve.compareKeys,
        escapeRegex: Vo(e),
        escapeString: Wo(e),
        indent: e?.min ? '' : yl(e?.indent ?? Ve.indent),
        maxDepth: e?.maxDepth ?? Ve.maxDepth,
        maxWidth: e?.maxWidth ?? Ve.maxWidth,
        min: e?.min ?? Ve.min,
        plugins: e?.plugins ?? Ve.plugins,
        printBasicPrototype: e?.printBasicPrototype ?? !0,
        printFunctionName: Ho(e),
        spacingInner: e?.min
          ? ' '
          : `
`,
        spacingOuter: e?.min
          ? ''
          : `
`,
      }
    }
    w(mo, 'getConfig')
    function yl(e) {
      return Array.from({ length: e + 1 }).join(' ')
    }
    w(yl, 'createIndent')
    function We(e, t) {
      if (t && (hl(t), t.plugins)) {
        const n = zo(t.plugins, e)
        if (n !== null) return qo(n, e, mo(t), '', 0, [])
      }
      const r = jo(e, Ho(t), Vo(t), Wo(t))
      return r !== null ? r : Mo(e, mo(t), '', 0, [])
    }
    w(We, 'format')
    const Go = {
        AsymmetricMatcher: _2,
        DOMCollection: B2,
        DOMElement: N2,
        Immutable: K2,
        ReactElement: nh,
        ReactTestComponent: uh,
        Error: dh,
      },
      Es = {
        bold: ['1', '22'],
        dim: ['2', '22'],
        italic: ['3', '23'],
        underline: ['4', '24'],
        inverse: ['7', '27'],
        hidden: ['8', '28'],
        strike: ['9', '29'],
        black: ['30', '39'],
        red: ['31', '39'],
        green: ['32', '39'],
        yellow: ['33', '39'],
        blue: ['34', '39'],
        magenta: ['35', '39'],
        cyan: ['36', '39'],
        white: ['37', '39'],
        brightblack: ['30;1', '39'],
        brightred: ['31;1', '39'],
        brightgreen: ['32;1', '39'],
        brightyellow: ['33;1', '39'],
        brightblue: ['34;1', '39'],
        brightmagenta: ['35;1', '39'],
        brightcyan: ['36;1', '39'],
        brightwhite: ['37;1', '39'],
        grey: ['90', '39'],
      },
      fh = {
        special: 'cyan',
        number: 'yellow',
        bigint: 'yellow',
        boolean: 'yellow',
        undefined: 'grey',
        null: 'bold',
        string: 'green',
        symbol: 'green',
        date: 'magenta',
        regexp: 'red',
      },
      Nt = '\u2026'
    function bl(e, t) {
      const r = Es[fh[t]] || Es[t] || ''
      return r ? `\x1B[${r[0]}m${String(e)}\x1B[${r[1]}m` : String(e)
    }
    w(bl, 'colorise')
    function El(
      {
        showHidden: e = !1,
        depth: t = 2,
        colors: r = !1,
        customInspect: n = !0,
        showProxy: o = !1,
        maxArrayLength: i = 1 / 0,
        breakLength: a = 1 / 0,
        seen: u = [],
        truncate: s = 1 / 0,
        stylize: l = String,
      } = {},
      c
    ) {
      const p = {
        showHidden: !!e,
        depth: Number(t),
        colors: !!r,
        customInspect: !!n,
        showProxy: !!o,
        maxArrayLength: Number(i),
        breakLength: Number(a),
        truncate: Number(s),
        seen: u,
        inspect: c,
        stylize: l,
      }
      return (p.colors && (p.stylize = bl), p)
    }
    w(El, 'normaliseOptions')
    function Al(e) {
      return e >= '\uD800' && e <= '\uDBFF'
    }
    w(Al, 'isHighSurrogate')
    function it(e, t, r = Nt) {
      e = String(e)
      const n = r.length,
        o = e.length
      if (n > t && o > n) return r
      if (o > t && o > n) {
        let i = t - n
        return (i > 0 && Al(e[i - 1]) && (i = i - 1), `${e.slice(0, i)}${r}`)
      }
      return e
    }
    w(it, 'truncate')
    function Me(e, t, r, n = ', ') {
      r = r || t.inspect
      const o = e.length
      if (o === 0) return ''
      let i = t.truncate,
        a = '',
        u = '',
        s = ''
      for (let l = 0; l < o; l += 1) {
        const c = l + 1 === e.length,
          p = l + 2 === e.length
        s = `${Nt}(${e.length - l})`
        const g = e[l]
        t.truncate = i - a.length - (c ? 0 : n.length)
        const m = u || r(g, t) + (c ? '' : n),
          A = a.length + m.length,
          b = A + s.length
        if (
          (c && A > i && a.length + s.length <= i) ||
          (!c && !p && b > i) ||
          ((u = c ? '' : r(e[l + 1], t) + (p ? '' : n)),
          !c && p && b > i && A + u.length > i)
        )
          break
        if (((a += m), !c && !p && A + u.length >= i)) {
          s = `${Nt}(${e.length - l - 1})`
          break
        }
        s = ''
      }
      return `${a}${s}`
    }
    w(Me, 'inspectList')
    function wl(e) {
      return e.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/)
        ? e
        : JSON.stringify(e)
            .replace(/'/g, "\\'")
            .replace(/\\"/g, '"')
            .replace(/(^"|"$)/g, "'")
    }
    w(wl, 'quoteComplexKey')
    function jt([e, t], r) {
      return (
        (r.truncate -= 2),
        typeof e === 'string'
          ? (e = wl(e))
          : typeof e !== 'number' && (e = `[${r.inspect(e, r)}]`),
        (r.truncate -= e.length),
        (t = r.inspect(t, r)),
        `${e}: ${t}`
      )
    }
    w(jt, 'inspectProperty')
    function Sl(e, t) {
      const r = Object.keys(e).slice(e.length)
      if (!e.length && !r.length) return '[]'
      t.truncate -= 4
      const n = Me(e, t)
      t.truncate -= n.length
      let o = ''
      return (
        r.length &&
          (o = Me(
            r.map((i) => [i, e[i]]),
            t,
            jt
          )),
        `[ ${n}${o ? `, ${o}` : ''} ]`
      )
    }
    w(Sl, 'inspectArray')
    const hh = w(
      (e) =>
        typeof Buffer === 'function' && e instanceof Buffer
          ? 'Buffer'
          : e[Symbol.toStringTag]
            ? e[Symbol.toStringTag]
            : e.constructor.name,
      'getArrayName'
    )
    function Xe(e, t) {
      const r = hh(e)
      t.truncate -= r.length + 4
      const n = Object.keys(e).slice(e.length)
      if (!e.length && !n.length) return `${r}[]`
      let o = ''
      for (let a = 0; a < e.length; a++) {
        const u = `${t.stylize(it(e[a], t.truncate), 'number')}${a === e.length - 1 ? '' : ', '}`
        if (((t.truncate -= u.length), e[a] !== e.length && t.truncate <= 3)) {
          o += `${Nt}(${e.length - e[a] + 1})`
          break
        }
        o += u
      }
      let i = ''
      return (
        n.length &&
          (i = Me(
            n.map((a) => [a, e[a]]),
            t,
            jt
          )),
        `${r}[ ${o}${i ? `, ${i}` : ''} ]`
      )
    }
    w(Xe, 'inspectTypedArray')
    function vl(e, t) {
      const r = e.toJSON()
      if (r === null) return 'Invalid Date'
      const n = r.split('T'),
        o = n[0]
      return t.stylize(`${o}T${it(n[1], t.truncate - o.length - 1)}`, 'date')
    }
    w(vl, 'inspectDate')
    function go(e, t) {
      const r = e[Symbol.toStringTag] || 'Function',
        n = e.name
      return n
        ? t.stylize(`[${r} ${it(n, t.truncate - 11)}]`, 'special')
        : t.stylize(`[${r}]`, 'special')
    }
    w(go, 'inspectFunction')
    function Cl([e, t], r) {
      return (
        (r.truncate -= 4),
        (e = r.inspect(e, r)),
        (r.truncate -= e.length),
        (t = r.inspect(t, r)),
        `${e} => ${t}`
      )
    }
    w(Cl, 'inspectMapEntry')
    function xl(e) {
      const t = []
      return (
        e.forEach((r, n) => {
          t.push([n, r])
        }),
        t
      )
    }
    w(xl, 'mapToEntries')
    function Dl(e, t) {
      return e.size === 0
        ? 'Map{}'
        : ((t.truncate -= 7), `Map{ ${Me(xl(e), t, Cl)} }`)
    }
    w(Dl, 'inspectMap')
    const mh = Number.isNaN || ((e) => e !== e)
    function yo(e, t) {
      return mh(e)
        ? t.stylize('NaN', 'number')
        : e === 1 / 0
          ? t.stylize('Infinity', 'number')
          : e === -1 / 0
            ? t.stylize('-Infinity', 'number')
            : e === 0
              ? t.stylize(1 / e === 1 / 0 ? '+0' : '-0', 'number')
              : t.stylize(it(String(e), t.truncate), 'number')
    }
    w(yo, 'inspectNumber')
    function bo(e, t) {
      let r = it(e.toString(), t.truncate - 1)
      return (r !== Nt && (r += 'n'), t.stylize(r, 'bigint'))
    }
    w(bo, 'inspectBigInt')
    function Tl(e, t) {
      const r = e.toString().split('/')[2],
        n = t.truncate - (2 + r.length),
        o = e.source
      return t.stylize(`/${it(o, n)}/${r}`, 'regexp')
    }
    w(Tl, 'inspectRegExp')
    function _l(e) {
      const t = []
      return (
        e.forEach((r) => {
          t.push(r)
        }),
        t
      )
    }
    w(_l, 'arrayFromSet')
    function Ol(e, t) {
      return e.size === 0
        ? 'Set{}'
        : ((t.truncate -= 7), `Set{ ${Me(_l(e), t)} }`)
    }
    w(Ol, 'inspectSet')
    const As = new RegExp(
        "['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]",
        'g'
      ),
      gh = {
        '\b': '\\b',
        '	': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        "'": "\\'",
        '\\': '\\\\',
      },
      yh = 16,
      bh = 4
    function Il(e) {
      return gh[e] || `\\u${`0000${e.charCodeAt(0).toString(yh)}`.slice(-bh)}`
    }
    w(Il, 'escape')
    function Eo(e, t) {
      return (
        As.test(e) && (e = e.replace(As, Il)),
        t.stylize(`'${it(e, t.truncate - 2)}'`, 'string')
      )
    }
    w(Eo, 'inspectString')
    function Ao(e) {
      return 'description' in Symbol.prototype
        ? e.description
          ? `Symbol(${e.description})`
          : 'Symbol()'
        : e.toString()
    }
    w(Ao, 'inspectSymbol')
    let Rl = w(() => 'Promise{\u2026}', 'getPromiseValue')
    try {
      const {
        getPromiseDetails: e,
        kPending: t,
        kRejected: r,
      } = process.binding('util')
      Array.isArray(e(Promise.resolve())) &&
        (Rl = w((n, o) => {
          const [i, a] = e(n)
          return i === t
            ? 'Promise{<pending>}'
            : `Promise${i === r ? '!' : ''}{${o.inspect(a, o)}}`
        }, 'getPromiseValue'))
    } catch {}
    const Eh = Rl
    function mr(e, t) {
      const r = Object.getOwnPropertyNames(e),
        n = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : []
      if (r.length === 0 && n.length === 0) return '{}'
      if (((t.truncate -= 4), (t.seen = t.seen || []), t.seen.includes(e)))
        return '[Circular]'
      t.seen.push(e)
      const o = Me(
          r.map((u) => [u, e[u]]),
          t,
          jt
        ),
        i = Me(
          n.map((u) => [u, e[u]]),
          t,
          jt
        )
      t.seen.pop()
      let a = ''
      return (o && i && (a = ', '), `{ ${o}${a}${i} }`)
    }
    w(mr, 'inspectObject')
    const oo =
      typeof Symbol < 'u' && Symbol.toStringTag ? Symbol.toStringTag : !1
    function Fl(e, t) {
      let r = ''
      return (
        oo && oo in e && (r = e[oo]),
        (r = r || e.constructor.name),
        (!r || r === '_class') && (r = '<Anonymous Class>'),
        (t.truncate -= r.length),
        `${r}${mr(e, t)}`
      )
    }
    w(Fl, 'inspectClass')
    function Bl(e, t) {
      return e.length === 0
        ? 'Arguments[]'
        : ((t.truncate -= 13), `Arguments[ ${Me(e, t)} ]`)
    }
    w(Bl, 'inspectArguments')
    const Ah = [
      'stack',
      'line',
      'column',
      'name',
      'message',
      'fileName',
      'lineNumber',
      'columnNumber',
      'number',
      'description',
      'cause',
    ]
    function Pl(e, t) {
      const r = Object.getOwnPropertyNames(e).filter(
          (a) => Ah.indexOf(a) === -1
        ),
        n = e.name
      t.truncate -= n.length
      let o = ''
      if (
        (typeof e.message === 'string'
          ? (o = it(e.message, t.truncate))
          : r.unshift('message'),
        (o = o ? `: ${o}` : ''),
        (t.truncate -= o.length + 5),
        (t.seen = t.seen || []),
        t.seen.includes(e))
      )
        return '[Circular]'
      t.seen.push(e)
      const i = Me(
        r.map((a) => [a, e[a]]),
        t,
        jt
      )
      return `${n}${o}${i ? ` { ${i} }` : ''}`
    }
    w(Pl, 'inspectObject')
    function $l([e, t], r) {
      return (
        (r.truncate -= 3),
        t
          ? `${r.stylize(String(e), 'yellow')}=${r.stylize(`"${t}"`, 'string')}`
          : `${r.stylize(String(e), 'yellow')}`
      )
    }
    w($l, 'inspectAttribute')
    function Jr(e, t) {
      return Me(
        e,
        t,
        Ll,
        `
`
      )
    }
    w(Jr, 'inspectNodeCollection')
    function Ll(e, t) {
      switch (e.nodeType) {
        case 1:
          return Yo(e, t)
        case 3:
          return t.inspect(e.data, t)
        default:
          return t.inspect(e, t)
      }
    }
    w(Ll, 'inspectNode')
    function Yo(e, t) {
      const r = e.getAttributeNames(),
        n = e.tagName.toLowerCase(),
        o = t.stylize(`<${n}`, 'special'),
        i = t.stylize('>', 'special'),
        a = t.stylize(`</${n}>`, 'special')
      t.truncate -= n.length * 2 + 5
      let u = ''
      ;(r.length > 0 &&
        ((u += ' '),
        (u += Me(
          r.map((c) => [c, e.getAttribute(c)]),
          t,
          $l,
          ' '
        ))),
        (t.truncate -= u.length))
      let s = t.truncate,
        l = Jr(e.children, t)
      return (
        l && l.length > s && (l = `${Nt}(${e.children.length})`),
        `${o}${u}${i}${l}${a}`
      )
    }
    w(Yo, 'inspectHTML')
    const wh = typeof Symbol === 'function' && typeof Symbol.for === 'function',
      io = wh ? Symbol.for('chai/inspect') : '@@chai/inspect',
      ao = Symbol.for('nodejs.util.inspect.custom'),
      ws = new WeakMap(),
      Ss = {},
      vs = {
        undefined: w(
          (e, t) => t.stylize('undefined', 'undefined'),
          'undefined'
        ),
        null: w((e, t) => t.stylize('null', 'null'), 'null'),
        boolean: w((e, t) => t.stylize(String(e), 'boolean'), 'boolean'),
        Boolean: w((e, t) => t.stylize(String(e), 'boolean'), 'Boolean'),
        number: yo,
        Number: yo,
        bigint: bo,
        BigInt: bo,
        string: Eo,
        String: Eo,
        function: go,
        Function: go,
        symbol: Ao,
        Symbol: Ao,
        Array: Sl,
        Date: vl,
        Map: Dl,
        Set: Ol,
        RegExp: Tl,
        Promise: Eh,
        WeakSet: w(
          (e, t) => t.stylize('WeakSet{\u2026}', 'special'),
          'WeakSet'
        ),
        WeakMap: w(
          (e, t) => t.stylize('WeakMap{\u2026}', 'special'),
          'WeakMap'
        ),
        Arguments: Bl,
        Int8Array: Xe,
        Uint8Array: Xe,
        Uint8ClampedArray: Xe,
        Int16Array: Xe,
        Uint16Array: Xe,
        Int32Array: Xe,
        Uint32Array: Xe,
        Float32Array: Xe,
        Float64Array: Xe,
        Generator: w(() => '', 'Generator'),
        DataView: w(() => '', 'DataView'),
        ArrayBuffer: w(() => '', 'ArrayBuffer'),
        Error: Pl,
        HTMLCollection: Jr,
        NodeList: Jr,
      },
      Sh = w(
        (e, t, r) =>
          io in e && typeof e[io] === 'function'
            ? e[io](t)
            : ao in e && typeof e[ao] === 'function'
              ? e[ao](t.depth, t)
              : 'inspect' in e && typeof e.inspect === 'function'
                ? e.inspect(t.depth, t)
                : 'constructor' in e && ws.has(e.constructor)
                  ? ws.get(e.constructor)(e, t)
                  : Ss[r]
                    ? Ss[r](e, t)
                    : '',
        'inspectCustom'
      ),
      vh = Object.prototype.toString
    function Zr(e, t = {}) {
      let r = El(t, Zr),
        { customInspect: n } = r,
        o = e === null ? 'null' : typeof e
      if ((o === 'object' && (o = vh.call(e).slice(8, -1)), o in vs))
        return vs[o](e, r)
      if (n && e) {
        const a = Sh(e, r, o)
        if (a) return typeof a === 'string' ? a : Zr(a, r)
      }
      const i = e ? Object.getPrototypeOf(e) : !1
      return i === Object.prototype || i === null
        ? mr(e, r)
        : e && typeof HTMLElement === 'function' && e instanceof HTMLElement
          ? Yo(e, r)
          : 'constructor' in e
            ? e.constructor !== Object
              ? Fl(e, r)
              : mr(e, r)
            : e === Object(e)
              ? mr(e, r)
              : r.stylize(String(e), o)
    }
    w(Zr, 'inspect')
    let {
        AsymmetricMatcher: Ch,
        DOMCollection: xh,
        DOMElement: Dh,
        Immutable: Th,
        ReactElement: _h,
        ReactTestComponent: Oh,
      } = Go,
      Cs = [Oh, _h, Dh, xh, Th, Ch]
    function Mt(e, t = 10, { maxLength: r, ...n } = {}) {
      let o = r ?? 1e4,
        i
      try {
        i = We(e, { maxDepth: t, escapeString: !1, plugins: Cs, ...n })
      } catch {
        i = We(e, {
          callToJSON: !1,
          maxDepth: t,
          escapeString: !1,
          plugins: Cs,
          ...n,
        })
      }
      return i.length >= o && t > 1
        ? Mt(e, Math.floor(Math.min(t, Number.MAX_SAFE_INTEGER) / 2), {
            maxLength: r,
            ...n,
          })
        : i
    }
    w(Mt, 'stringify')
    const Ih = /%[sdjifoOc%]/g
    function kl(...e) {
      if (typeof e[0] !== 'string') {
        const i = []
        for (let a = 0; a < e.length; a++)
          i.push(Lt(e[a], { depth: 0, colors: !1 }))
        return i.join(' ')
      }
      let t = e.length,
        r = 1,
        n = e[0],
        o = String(n).replace(Ih, (i) => {
          if (i === '%%') return '%'
          if (r >= t) return i
          switch (i) {
            case '%s': {
              const a = e[r++]
              return typeof a === 'bigint'
                ? `${a.toString()}n`
                : typeof a === 'number' && a === 0 && 1 / a < 0
                  ? '-0'
                  : typeof a === 'object' && a !== null
                    ? typeof a.toString === 'function' &&
                      a.toString !== Object.prototype.toString
                      ? a.toString()
                      : Lt(a, { depth: 0, colors: !1 })
                    : String(a)
            }
            case '%d': {
              const a = e[r++]
              return typeof a === 'bigint'
                ? `${a.toString()}n`
                : Number(a).toString()
            }
            case '%i': {
              const a = e[r++]
              return typeof a === 'bigint'
                ? `${a.toString()}n`
                : Number.parseInt(String(a)).toString()
            }
            case '%f':
              return Number.parseFloat(String(e[r++])).toString()
            case '%o':
              return Lt(e[r++], { showHidden: !0, showProxy: !0 })
            case '%O':
              return Lt(e[r++])
            case '%c':
              return (r++, '')
            case '%j':
              try {
                return JSON.stringify(e[r++])
              } catch (a) {
                const u = a.message
                if (
                  u.includes('circular structure') ||
                  u.includes('cyclic structures') ||
                  u.includes('cyclic object')
                )
                  return '[Circular]'
                throw a
              }
            default:
              return i
          }
        })
      for (let i = e[r]; r < t; i = e[++r])
        i === null || typeof i !== 'object'
          ? (o += ` ${i}`)
          : (o += ` ${Lt(i)}`)
      return o
    }
    w(kl, 'format')
    function Lt(e, t = {}) {
      return (
        t.truncate === 0 && (t.truncate = Number.POSITIVE_INFINITY),
        Zr(e, t)
      )
    }
    w(Lt, 'inspect')
    function Nl(e) {
      return e &&
        e.__esModule &&
        Object.prototype.hasOwnProperty.call(e, 'default')
        ? e.default
        : e
    }
    w(Nl, 'getDefaultExportFromCjs')
    function jl(e) {
      return (
        e === Object.prototype ||
        e === Function.prototype ||
        e === RegExp.prototype
      )
    }
    w(jl, 'isFinalObj')
    function Qr(e) {
      return Object.prototype.toString.apply(e).slice(8, -1)
    }
    w(Qr, 'getType')
    function Ml(e, t) {
      const r = typeof t === 'function' ? t : (n) => t.add(n)
      ;(Object.getOwnPropertyNames(e).forEach(r),
        Object.getOwnPropertySymbols(e).forEach(r))
    }
    w(Ml, 'collectOwnProperties')
    function Ko(e) {
      const t = new Set()
      return jl(e) ? [] : (Ml(e, t), Array.from(t))
    }
    w(Ko, 'getOwnProperties')
    const ql = { forceWritable: !1 }
    function wo(e, t = ql) {
      return en(e, new WeakMap(), t)
    }
    w(wo, 'deepClone')
    function en(e, t, r = ql) {
      let n, o
      if (t.has(e)) return t.get(e)
      if (Array.isArray(e)) {
        for (o = Array.from({ length: (n = e.length) }), t.set(e, o); n--; )
          o[n] = en(e[n], t, r)
        return o
      }
      if (Object.prototype.toString.call(e) === '[object Object]') {
        ;((o = Object.create(Object.getPrototypeOf(e))), t.set(e, o))
        const i = Ko(e)
        for (const a of i) {
          const u = Object.getOwnPropertyDescriptor(e, a)
          if (!u) continue
          const s = en(e[a], t, r)
          r.forceWritable
            ? Object.defineProperty(o, a, {
                enumerable: u.enumerable,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : 'get' in u
              ? Object.defineProperty(o, a, {
                  ...u,
                  get() {
                    return s
                  },
                })
              : Object.defineProperty(o, a, { ...u, value: s })
        }
        return o
      }
      return e
    }
    w(en, 'clone')
    const xe = -1,
      we = 1,
      fe = 0,
      zl = class {
        0
        1
        constructor(t, r) {
          ;((this[0] = t), (this[1] = r))
        }
      }
    w(zl, 'Diff')
    const de = zl
    function Ul(e, t) {
      if (!e || !t || e.charAt(0) !== t.charAt(0)) return 0
      let r = 0,
        n = Math.min(e.length, t.length),
        o = n,
        i = 0
      for (; r < o; )
        (e.substring(i, o) === t.substring(i, o) ? ((r = o), (i = r)) : (n = o),
          (o = Math.floor((n - r) / 2 + r)))
      return o
    }
    w(Ul, 'diff_commonPrefix')
    function Xo(e, t) {
      if (!e || !t || e.charAt(e.length - 1) !== t.charAt(t.length - 1))
        return 0
      let r = 0,
        n = Math.min(e.length, t.length),
        o = n,
        i = 0
      for (; r < o; )
        (e.substring(e.length - o, e.length - i) ===
        t.substring(t.length - o, t.length - i)
          ? ((r = o), (i = r))
          : (n = o),
          (o = Math.floor((n - r) / 2 + r)))
      return o
    }
    w(Xo, 'diff_commonSuffix')
    function So(e, t) {
      const r = e.length,
        n = t.length
      if (r === 0 || n === 0) return 0
      r > n ? (e = e.substring(r - n)) : r < n && (t = t.substring(0, r))
      const o = Math.min(r, n)
      if (e === t) return o
      let i = 0,
        a = 1
      for (;;) {
        const u = e.substring(o - a),
          s = t.indexOf(u)
        if (s === -1) return i
        ;((a += s),
          (s === 0 || e.substring(o - a) === t.substring(0, a)) &&
            ((i = a), a++))
      }
    }
    w(So, 'diff_commonOverlap_')
    function Hl(e) {
      let t = !1,
        r = [],
        n = 0,
        o = null,
        i = 0,
        a = 0,
        u = 0,
        s = 0,
        l = 0
      for (; i < e.length; )
        (e[i][0] === fe
          ? ((r[n++] = i), (a = s), (u = l), (s = 0), (l = 0), (o = e[i][1]))
          : (e[i][0] === we ? (s += e[i][1].length) : (l += e[i][1].length),
            o &&
              o.length <= Math.max(a, u) &&
              o.length <= Math.max(s, l) &&
              (e.splice(r[n - 1], 0, new de(xe, o)),
              (e[r[n - 1] + 1][0] = we),
              n--,
              n--,
              (i = n > 0 ? r[n - 1] : -1),
              (a = 0),
              (u = 0),
              (s = 0),
              (l = 0),
              (o = null),
              (t = !0))),
          i++)
      for (t && Jo(e), Vl(e), i = 1; i < e.length; ) {
        if (e[i - 1][0] === xe && e[i][0] === we) {
          const c = e[i - 1][1],
            p = e[i][1],
            g = So(c, p),
            m = So(p, c)
          ;(g >= m
            ? (g >= c.length / 2 || g >= p.length / 2) &&
              (e.splice(i, 0, new de(fe, p.substring(0, g))),
              (e[i - 1][1] = c.substring(0, c.length - g)),
              (e[i + 1][1] = p.substring(g)),
              i++)
            : (m >= c.length / 2 || m >= p.length / 2) &&
              (e.splice(i, 0, new de(fe, c.substring(0, m))),
              (e[i - 1][0] = we),
              (e[i - 1][1] = p.substring(0, p.length - m)),
              (e[i + 1][0] = xe),
              (e[i + 1][1] = c.substring(m)),
              i++),
            i++)
        }
        i++
      }
    }
    w(Hl, 'diff_cleanupSemantic')
    const xs = /[^a-z0-9]/i,
      Ds = /\s/,
      Ts = /[\r\n]/,
      Rh = /\n\r?\n$/,
      Fh = /^\r?\n\r?\n/
    function Vl(e) {
      let t = 1
      for (; t < e.length - 1; ) {
        if (e[t - 1][0] === fe && e[t + 1][0] === fe) {
          let r = e[t - 1][1],
            n = e[t][1],
            o = e[t + 1][1],
            i = Xo(r, n)
          if (i) {
            const c = n.substring(n.length - i)
            ;((r = r.substring(0, r.length - i)),
              (n = c + n.substring(0, n.length - i)),
              (o = c + o))
          }
          let a = r,
            u = n,
            s = o,
            l = dr(r, n) + dr(n, o)
          for (; n.charAt(0) === o.charAt(0); ) {
            ;((r += n.charAt(0)),
              (n = n.substring(1) + o.charAt(0)),
              (o = o.substring(1)))
            const c = dr(r, n) + dr(n, o)
            c >= l && ((l = c), (a = r), (u = n), (s = o))
          }
          e[t - 1][1] !== a &&
            (a ? (e[t - 1][1] = a) : (e.splice(t - 1, 1), t--),
            (e[t][1] = u),
            s ? (e[t + 1][1] = s) : (e.splice(t + 1, 1), t--))
        }
        t++
      }
    }
    w(Vl, 'diff_cleanupSemanticLossless')
    function Jo(e) {
      e.push(new de(fe, ''))
      let t = 0,
        r = 0,
        n = 0,
        o = '',
        i = '',
        a
      for (; t < e.length; )
        switch (e[t][0]) {
          case we:
            ;(n++, (i += e[t][1]), t++)
            break
          case xe:
            ;(r++, (o += e[t][1]), t++)
            break
          case fe:
            ;(r + n > 1
              ? (r !== 0 &&
                  n !== 0 &&
                  ((a = Ul(i, o)),
                  a !== 0 &&
                    (t - r - n > 0 && e[t - r - n - 1][0] === fe
                      ? (e[t - r - n - 1][1] += i.substring(0, a))
                      : (e.splice(0, 0, new de(fe, i.substring(0, a))), t++),
                    (i = i.substring(a)),
                    (o = o.substring(a))),
                  (a = Xo(i, o)),
                  a !== 0 &&
                    ((e[t][1] = i.substring(i.length - a) + e[t][1]),
                    (i = i.substring(0, i.length - a)),
                    (o = o.substring(0, o.length - a)))),
                (t -= r + n),
                e.splice(t, r + n),
                o.length && (e.splice(t, 0, new de(xe, o)), t++),
                i.length && (e.splice(t, 0, new de(we, i)), t++),
                t++)
              : t !== 0 && e[t - 1][0] === fe
                ? ((e[t - 1][1] += e[t][1]), e.splice(t, 1))
                : t++,
              (n = 0),
              (r = 0),
              (o = ''),
              (i = ''))
            break
        }
      e[e.length - 1][1] === '' && e.pop()
      let u = !1
      for (t = 1; t < e.length - 1; )
        (e[t - 1][0] === fe &&
          e[t + 1][0] === fe &&
          (e[t][1].substring(e[t][1].length - e[t - 1][1].length) ===
          e[t - 1][1]
            ? ((e[t][1] =
                e[t - 1][1] +
                e[t][1].substring(0, e[t][1].length - e[t - 1][1].length)),
              (e[t + 1][1] = e[t - 1][1] + e[t + 1][1]),
              e.splice(t - 1, 1),
              (u = !0))
            : e[t][1].substring(0, e[t + 1][1].length) === e[t + 1][1] &&
              ((e[t - 1][1] += e[t + 1][1]),
              (e[t][1] = e[t][1].substring(e[t + 1][1].length) + e[t + 1][1]),
              e.splice(t + 1, 1),
              (u = !0))),
          t++)
      u && Jo(e)
    }
    w(Jo, 'diff_cleanupMerge')
    function dr(e, t) {
      if (!e || !t) return 6
      const r = e.charAt(e.length - 1),
        n = t.charAt(0),
        o = r.match(xs),
        i = n.match(xs),
        a = o && r.match(Ds),
        u = i && n.match(Ds),
        s = a && r.match(Ts),
        l = u && n.match(Ts),
        c = s && e.match(Rh),
        p = l && t.match(Fh)
      return c || p
        ? 5
        : s || l
          ? 4
          : o && !a && u
            ? 3
            : a || u
              ? 2
              : o || i
                ? 1
                : 0
    }
    w(dr, 'diff_cleanupSemanticScore_')
    let Wl = 'Compared values have no visual difference.',
      Bh =
        'Compared values serialize to the same structure.\nPrinting internal object structure without calling `toJSON` instead.',
      Gr = {},
      _s
    function Gl() {
      if (_s) return Gr
      ;((_s = 1),
        Object.defineProperty(Gr, '__esModule', { value: !0 }),
        (Gr.default = g))
      const e = 'diff-sequences',
        t = 0,
        r = w((m, A, b, E, x) => {
          let C = 0
          for (; m < A && b < E && x(m, b); ) ((m += 1), (b += 1), (C += 1))
          return C
        }, 'countCommonItemsF'),
        n = w((m, A, b, E, x) => {
          let C = 0
          for (; m <= A && b <= E && x(A, E); ) ((A -= 1), (E -= 1), (C += 1))
          return C
        }, 'countCommonItemsR'),
        o = w((m, A, b, E, x, C, _) => {
          let D = 0,
            I = -m,
            T = C[D],
            S = T
          C[D] += r(T + 1, A, E + T - I + 1, b, x)
          const O = m < _ ? m : _
          for (D += 1, I += 2; D <= O; D += 1, I += 2) {
            if (D !== m && S < C[D]) T = C[D]
            else if (((T = S + 1), A <= T)) return D - 1
            ;((S = C[D]), (C[D] = T + r(T + 1, A, E + T - I + 1, b, x)))
          }
          return _
        }, 'extendPathsF'),
        i = w((m, A, b, E, x, C, _) => {
          let D = 0,
            I = m,
            T = C[D],
            S = T
          C[D] -= n(A, T - 1, b, E + T - I - 1, x)
          const O = m < _ ? m : _
          for (D += 1, I -= 2; D <= O; D += 1, I -= 2) {
            if (D !== m && C[D] < S) T = C[D]
            else if (((T = S - 1), T < A)) return D - 1
            ;((S = C[D]), (C[D] = T - n(A, T - 1, b, E + T - I - 1, x)))
          }
          return _
        }, 'extendPathsR'),
        a = w((m, A, b, E, x, C, _, D, I, T, S) => {
          let O = E - A,
            F = b - A,
            $ = x - E - F,
            P = -$ - (m - 1),
            j = -$ + (m - 1),
            k = t,
            h = m < D ? m : D
          for (let f = 0, v = -m; f <= h; f += 1, v += 2) {
            const B = f === 0 || (f !== m && k < _[f]),
              R = B ? _[f] : k,
              L = B ? R : R + 1,
              N = O + L - v,
              M = r(L + 1, b, N + 1, x, C),
              z = L + M
            if (((k = _[f]), (_[f] = z), P <= v && v <= j)) {
              const Y = (m - 1 - (v + $)) / 2
              if (Y <= T && I[Y] - 1 <= z) {
                const X = O + R - (B ? v + 1 : v - 1),
                  V = n(A, R, E, X, C),
                  J = R - V,
                  W = X - V,
                  te = J + 1,
                  ye = W + 1
                ;((S.nChangePreceding = m - 1),
                  m - 1 === te + ye - A - E
                    ? ((S.aEndPreceding = A), (S.bEndPreceding = E))
                    : ((S.aEndPreceding = te), (S.bEndPreceding = ye)),
                  (S.nCommonPreceding = V),
                  V !== 0 &&
                    ((S.aCommonPreceding = te), (S.bCommonPreceding = ye)),
                  (S.nCommonFollowing = M),
                  M !== 0 &&
                    ((S.aCommonFollowing = L + 1),
                    (S.bCommonFollowing = N + 1)))
                const me = z + 1,
                  Ce = N + M + 1
                return (
                  (S.nChangeFollowing = m - 1),
                  m - 1 === b + x - me - Ce
                    ? ((S.aStartFollowing = b), (S.bStartFollowing = x))
                    : ((S.aStartFollowing = me), (S.bStartFollowing = Ce)),
                  !0
                )
              }
            }
          }
          return !1
        }, 'extendOverlappablePathsF'),
        u = w((m, A, b, E, x, C, _, D, I, T, S) => {
          let O = x - b,
            F = b - A,
            $ = x - E - F,
            P = $ - m,
            j = $ + m,
            k = t,
            h = m < T ? m : T
          for (let f = 0, v = m; f <= h; f += 1, v -= 2) {
            const B = f === 0 || (f !== m && I[f] < k),
              R = B ? I[f] : k,
              L = B ? R : R - 1,
              N = O + L - v,
              M = n(A, L - 1, E, N - 1, C),
              z = L - M
            if (((k = I[f]), (I[f] = z), P <= v && v <= j)) {
              const Y = (m + (v - $)) / 2
              if (Y <= D && z - 1 <= _[Y]) {
                const X = N - M
                if (
                  ((S.nChangePreceding = m),
                  m === z + X - A - E
                    ? ((S.aEndPreceding = A), (S.bEndPreceding = E))
                    : ((S.aEndPreceding = z), (S.bEndPreceding = X)),
                  (S.nCommonPreceding = M),
                  M !== 0 &&
                    ((S.aCommonPreceding = z), (S.bCommonPreceding = X)),
                  (S.nChangeFollowing = m - 1),
                  m === 1)
                )
                  ((S.nCommonFollowing = 0),
                    (S.aStartFollowing = b),
                    (S.bStartFollowing = x))
                else {
                  const V = O + R - (B ? v - 1 : v + 1),
                    J = r(R, b, V, x, C)
                  ;((S.nCommonFollowing = J),
                    J !== 0 &&
                      ((S.aCommonFollowing = R), (S.bCommonFollowing = V)))
                  const W = R + J,
                    te = V + J
                  m - 1 === b + x - W - te
                    ? ((S.aStartFollowing = b), (S.bStartFollowing = x))
                    : ((S.aStartFollowing = W), (S.bStartFollowing = te))
                }
                return !0
              }
            }
          }
          return !1
        }, 'extendOverlappablePathsR'),
        s = w((m, A, b, E, x, C, _, D, I) => {
          let T = E - A,
            S = x - b,
            O = b - A,
            F = x - E,
            $ = F - O,
            P = O,
            j = O
          if (((_[0] = A - 1), (D[0] = b), $ % 2 === 0)) {
            const k = (m || $) / 2,
              h = (O + F) / 2
            for (let f = 1; f <= h; f += 1)
              if (((P = o(f, b, x, T, C, _, P)), f < k))
                j = i(f, A, E, S, C, D, j)
              else if (u(f, A, b, E, x, C, _, P, D, j, I)) return
          } else {
            let k = ((m || $) + 1) / 2,
              h = (O + F + 1) / 2,
              f = 1
            for (P = o(f, b, x, T, C, _, P), f += 1; f <= h; f += 1)
              if (((j = i(f - 1, A, E, S, C, D, j)), f < k))
                P = o(f, b, x, T, C, _, P)
              else if (a(f, A, b, E, x, C, _, P, D, j, I)) return
          }
          throw new Error(
            `${e}: no overlap aStart=${A} aEnd=${b} bStart=${E} bEnd=${x}`
          )
        }, 'divide'),
        l = w((m, A, b, E, x, C, _, D, I, T) => {
          if (x - E < b - A) {
            if (((C = !C), C && _.length === 1)) {
              const { foundSubsequence: Y, isCommon: X } = _[0]
              _[1] = {
                foundSubsequence: w((V, J, W) => {
                  Y(V, W, J)
                }, 'foundSubsequence'),
                isCommon: w((V, J) => X(J, V), 'isCommon'),
              }
            }
            const M = A,
              z = b
            ;((A = E), (b = x), (E = M), (x = z))
          }
          const { foundSubsequence: S, isCommon: O } = _[C ? 1 : 0]
          s(m, A, b, E, x, O, D, I, T)
          const {
            nChangePreceding: F,
            aEndPreceding: $,
            bEndPreceding: P,
            nCommonPreceding: j,
            aCommonPreceding: k,
            bCommonPreceding: h,
            nCommonFollowing: f,
            aCommonFollowing: v,
            bCommonFollowing: B,
            nChangeFollowing: R,
            aStartFollowing: L,
            bStartFollowing: N,
          } = T
          ;(A < $ && E < P && l(F, A, $, E, P, C, _, D, I, T),
            j !== 0 && S(j, k, h),
            f !== 0 && S(f, v, B),
            L < b && N < x && l(R, L, b, N, x, C, _, D, I, T))
        }, 'findSubsequences'),
        c = w((m, A) => {
          if (typeof A !== 'number')
            throw new TypeError(`${e}: ${m} typeof ${typeof A} is not a number`)
          if (!Number.isSafeInteger(A))
            throw new RangeError(`${e}: ${m} value ${A} is not a safe integer`)
          if (A < 0)
            throw new RangeError(`${e}: ${m} value ${A} is a negative integer`)
        }, 'validateLength'),
        p = w((m, A) => {
          const b = typeof A
          if (b !== 'function')
            throw new TypeError(`${e}: ${m} typeof ${b} is not a function`)
        }, 'validateCallback')
      function g(m, A, b, E) {
        ;(c('aLength', m),
          c('bLength', A),
          p('isCommon', b),
          p('foundSubsequence', E))
        const x = r(0, m, 0, A, b)
        if ((x !== 0 && E(x, 0, 0), m !== x || A !== x)) {
          const C = x,
            _ = x,
            D = n(C, m - 1, _, A - 1, b),
            I = m - D,
            T = A - D,
            S = x + D
          ;(m !== S &&
            A !== S &&
            l(
              0,
              C,
              I,
              _,
              T,
              !1,
              [{ foundSubsequence: E, isCommon: b }],
              [t],
              [t],
              {
                aCommonFollowing: t,
                aCommonPreceding: t,
                aEndPreceding: t,
                aStartFollowing: t,
                bCommonFollowing: t,
                bCommonPreceding: t,
                bEndPreceding: t,
                bStartFollowing: t,
                nChangeFollowing: t,
                nChangePreceding: t,
                nCommonFollowing: t,
                nCommonPreceding: t,
              }
            ),
            D !== 0 && E(D, I, T))
        }
      }
      return (w(g, 'diffSequence'), Gr)
    }
    w(Gl, 'requireBuild')
    const Ph = Gl(),
      Yl = Nl(Ph)
    function Kl(e, t) {
      return e.replace(/\s+$/, (r) => t(r))
    }
    w(Kl, 'formatTrailingSpaces')
    function dn(e, t, r, n, o, i) {
      return e.length !== 0
        ? r(`${n} ${Kl(e, o)}`)
        : n !== ' '
          ? r(n)
          : t && i.length !== 0
            ? r(`${n} ${i}`)
            : ''
    }
    w(dn, 'printDiffLine')
    function Zo(
      e,
      t,
      {
        aColor: r,
        aIndicator: n,
        changeLineTrailingSpaceColor: o,
        emptyFirstOrLastLinePlaceholder: i,
      }
    ) {
      return dn(e, t, r, n, o, i)
    }
    w(Zo, 'printDeleteLine')
    function Qo(
      e,
      t,
      {
        bColor: r,
        bIndicator: n,
        changeLineTrailingSpaceColor: o,
        emptyFirstOrLastLinePlaceholder: i,
      }
    ) {
      return dn(e, t, r, n, o, i)
    }
    w(Qo, 'printInsertLine')
    function ei(
      e,
      t,
      {
        commonColor: r,
        commonIndicator: n,
        commonLineTrailingSpaceColor: o,
        emptyFirstOrLastLinePlaceholder: i,
      }
    ) {
      return dn(e, t, r, n, o, i)
    }
    w(ei, 'printCommonLine')
    function vo(e, t, r, n, { patchColor: o }) {
      return o(`@@ -${e + 1},${t - e} +${r + 1},${n - r} @@`)
    }
    w(vo, 'createPatchMark')
    function Xl(e, t) {
      let r = e.length,
        n = t.contextLines,
        o = n + n,
        i = r,
        a = !1,
        u = 0,
        s = 0
      for (; s !== r; ) {
        const D = s
        for (; s !== r && e[s][0] === fe; ) s += 1
        if (D !== s)
          if (D === 0) s > n && ((i -= s - n), (a = !0))
          else if (s === r) {
            const I = s - D
            I > n && ((i -= I - n), (a = !0))
          } else {
            const I = s - D
            I > o && ((i -= I - o), (u += 1))
          }
        for (; s !== r && e[s][0] !== fe; ) s += 1
      }
      const l = u !== 0 || a
      u !== 0 ? (i += u + 1) : a && (i += 1)
      let c = i - 1,
        p = [],
        g = 0
      l && p.push('')
      let m = 0,
        A = 0,
        b = 0,
        E = 0,
        x = w((D) => {
          const I = p.length
          ;(p.push(ei(D, I === 0 || I === c, t)), (b += 1), (E += 1))
        }, 'pushCommonLine'),
        C = w((D) => {
          const I = p.length
          ;(p.push(Zo(D, I === 0 || I === c, t)), (b += 1))
        }, 'pushDeleteLine'),
        _ = w((D) => {
          const I = p.length
          ;(p.push(Qo(D, I === 0 || I === c, t)), (E += 1))
        }, 'pushInsertLine')
      for (s = 0; s !== r; ) {
        let D = s
        for (; s !== r && e[s][0] === fe; ) s += 1
        if (D !== s)
          if (D === 0) {
            s > n && ((D = s - n), (m = D), (A = D), (b = m), (E = A))
            for (let I = D; I !== s; I += 1) x(e[I][1])
          } else if (s === r) {
            const I = s - D > n ? D + n : s
            for (let T = D; T !== I; T += 1) x(e[T][1])
          } else {
            const I = s - D
            if (I > o) {
              const T = D + n
              for (let O = D; O !== T; O += 1) x(e[O][1])
              ;((p[g] = vo(m, b, A, E, t)), (g = p.length), p.push(''))
              const S = I - o
              ;((m = b + S), (A = E + S), (b = m), (E = A))
              for (let O = s - n; O !== s; O += 1) x(e[O][1])
            } else for (let T = D; T !== s; T += 1) x(e[T][1])
          }
        for (; s !== r && e[s][0] === xe; ) (C(e[s][1]), (s += 1))
        for (; s !== r && e[s][0] === we; ) (_(e[s][1]), (s += 1))
      }
      return (
        l && (p[g] = vo(m, b, A, E, t)),
        p.join(`
`)
      )
    }
    w(Xl, 'joinAlignedDiffsNoExpand')
    function Jl(e, t) {
      return e.map((r, n, o) => {
        const i = r[1],
          a = n === 0 || n === o.length - 1
        switch (r[0]) {
          case xe:
            return Zo(i, a, t)
          case we:
            return Qo(i, a, t)
          default:
            return ei(i, a, t)
        }
      }).join(`
`)
    }
    w(Jl, 'joinAlignedDiffsExpand')
    const uo = w((e) => e, 'noColor'),
      Zl = 5,
      $h = 0
    function Ql() {
      return {
        aAnnotation: 'Expected',
        aColor: ot.green,
        aIndicator: '-',
        bAnnotation: 'Received',
        bColor: ot.red,
        bIndicator: '+',
        changeColor: ot.inverse,
        changeLineTrailingSpaceColor: uo,
        commonColor: ot.dim,
        commonIndicator: ' ',
        commonLineTrailingSpaceColor: uo,
        compareKeys: void 0,
        contextLines: Zl,
        emptyFirstOrLastLinePlaceholder: '',
        expand: !1,
        includeChangeCounts: !1,
        omitAnnotationLines: !1,
        patchColor: ot.yellow,
        printBasicPrototype: !1,
        truncateThreshold: $h,
        truncateAnnotation: '... Diff result is truncated',
        truncateAnnotationColor: uo,
      }
    }
    w(Ql, 'getDefaultOptions')
    function ec(e) {
      return e && typeof e === 'function' ? e : void 0
    }
    w(ec, 'getCompareKeys')
    function tc(e) {
      return typeof e === 'number' && Number.isSafeInteger(e) && e >= 0 ? e : Zl
    }
    w(tc, 'getContextLines')
    function ht(e = {}) {
      return {
        ...Ql(),
        ...e,
        compareKeys: ec(e.compareKeys),
        contextLines: tc(e.contextLines),
      }
    }
    w(ht, 'normalizeDiffOptions')
    function xt(e) {
      return e.length === 1 && e[0].length === 0
    }
    w(xt, 'isEmptyString')
    function rc(e) {
      let t = 0,
        r = 0
      return (
        e.forEach((n) => {
          switch (n[0]) {
            case xe:
              t += 1
              break
            case we:
              r += 1
              break
          }
        }),
        { a: t, b: r }
      )
    }
    w(rc, 'countChanges')
    function nc(
      {
        aAnnotation: e,
        aColor: t,
        aIndicator: r,
        bAnnotation: n,
        bColor: o,
        bIndicator: i,
        includeChangeCounts: a,
        omitAnnotationLines: u,
      },
      s
    ) {
      if (u) return ''
      let l = '',
        c = ''
      if (a) {
        const m = String(s.a),
          A = String(s.b),
          b = n.length - e.length,
          E = ' '.repeat(Math.max(0, b)),
          x = ' '.repeat(Math.max(0, -b)),
          C = A.length - m.length,
          _ = ' '.repeat(Math.max(0, C)),
          D = ' '.repeat(Math.max(0, -C))
        ;((l = `${E}  ${r} ${_}${m}`), (c = `${x}  ${i} ${D}${A}`))
      }
      const p = `${r} ${e}${l}`,
        g = `${i} ${n}${c}`
      return `${t(p)}
${o(g)}

`
    }
    w(nc, 'printAnnotation')
    function fn(e, t, r) {
      return (
        nc(r, rc(e)) +
        (r.expand ? Jl(e, r) : Xl(e, r)) +
        (t
          ? r.truncateAnnotationColor(`
${r.truncateAnnotation}`)
          : '')
      )
    }
    w(fn, 'printDiffLines')
    function br(e, t, r) {
      const n = ht(r),
        [o, i] = ti(xt(e) ? [] : e, xt(t) ? [] : t, n)
      return fn(o, i, n)
    }
    w(br, 'diffLinesUnified')
    function oc(e, t, r, n, o) {
      if (
        (xt(e) && xt(r) && ((e = []), (r = [])),
        xt(t) && xt(n) && ((t = []), (n = [])),
        e.length !== r.length || t.length !== n.length)
      )
        return br(e, t, o)
      let [i, a] = ti(r, n, o),
        u = 0,
        s = 0
      return (
        i.forEach((l) => {
          switch (l[0]) {
            case xe:
              ;((l[1] = e[u]), (u += 1))
              break
            case we:
              ;((l[1] = t[s]), (s += 1))
              break
            default:
              ;((l[1] = t[s]), (u += 1), (s += 1))
          }
        }),
        fn(i, a, ht(o))
      )
    }
    w(oc, 'diffLinesUnified2')
    function ti(e, t, r) {
      let n = r?.truncateThreshold ?? !1,
        o = Math.max(Math.floor(r?.truncateThreshold ?? 0), 0),
        i = n ? Math.min(e.length, o) : e.length,
        a = n ? Math.min(t.length, o) : t.length,
        u = i !== e.length || a !== t.length,
        s = w((g, m) => e[g] === t[m], 'isCommon'),
        l = [],
        c = 0,
        p = 0
      for (
        Yl(
          i,
          a,
          s,
          w((g, m, A) => {
            for (; c !== m; c += 1) l.push(new de(xe, e[c]))
            for (; p !== A; p += 1) l.push(new de(we, t[p]))
            for (; g !== 0; g -= 1, c += 1, p += 1) l.push(new de(fe, t[p]))
          }, 'foundSubsequence')
        );
        c !== i;
        c += 1
      )
        l.push(new de(xe, e[c]))
      for (; p !== a; p += 1) l.push(new de(we, t[p]))
      return [l, u]
    }
    w(ti, 'diffLinesRaw')
    function Co(e) {
      if (e === void 0) return 'undefined'
      if (e === null) return 'null'
      if (Array.isArray(e)) return 'array'
      if (typeof e === 'boolean') return 'boolean'
      if (typeof e === 'function') return 'function'
      if (typeof e === 'number') return 'number'
      if (typeof e === 'string') return 'string'
      if (typeof e === 'bigint') return 'bigint'
      if (typeof e === 'object') {
        if (e != null) {
          if (e.constructor === RegExp) return 'regexp'
          if (e.constructor === Map) return 'map'
          if (e.constructor === Set) return 'set'
          if (e.constructor === Date) return 'date'
        }
        return 'object'
      } else if (typeof e === 'symbol') return 'symbol'
      throw new Error(`value of unknown type: ${e}`)
    }
    w(Co, 'getType')
    function xo(e) {
      return e.includes(`\r
`)
        ? `\r
`
        : `
`
    }
    w(xo, 'getNewLineSymbol')
    function ic(e, t, r) {
      let n = r?.truncateThreshold ?? !1,
        o = Math.max(Math.floor(r?.truncateThreshold ?? 0), 0),
        i = e.length,
        a = t.length
      if (n) {
        const g = e.includes(`
`),
          m = t.includes(`
`),
          A = xo(e),
          b = xo(t),
          E = g
            ? `${e.split(A, o).join(A)}
`
            : e,
          x = m
            ? `${t.split(b, o).join(b)}
`
            : t
        ;((i = E.length), (a = x.length))
      }
      let u = i !== e.length || a !== t.length,
        s = w((g, m) => e[g] === t[m], 'isCommon'),
        l = 0,
        c = 0,
        p = []
      return (
        Yl(
          i,
          a,
          s,
          w((g, m, A) => {
            ;(l !== m && p.push(new de(xe, e.slice(l, m))),
              c !== A && p.push(new de(we, t.slice(c, A))),
              (l = m + g),
              (c = A + g),
              p.push(new de(fe, t.slice(A, c))))
          }, 'foundSubsequence')
        ),
        l !== i && p.push(new de(xe, e.slice(l))),
        c !== a && p.push(new de(we, t.slice(c))),
        [p, u]
      )
    }
    w(ic, 'diffStrings')
    function ac(e, t, r) {
      return t.reduce(
        (n, o) =>
          n +
          (o[0] === fe ? o[1] : o[0] === e && o[1].length !== 0 ? r(o[1]) : ''),
        ''
      )
    }
    w(ac, 'concatenateRelevantDiffs')
    const uc = class {
      op
      line
      lines
      changeColor
      constructor(t, r) {
        ;((this.op = t),
          (this.line = []),
          (this.lines = []),
          (this.changeColor = r))
      }
      pushSubstring(t) {
        this.pushDiff(new de(this.op, t))
      }
      pushLine() {
        ;(this.lines.push(
          this.line.length !== 1
            ? new de(this.op, ac(this.op, this.line, this.changeColor))
            : this.line[0][0] === this.op
              ? this.line[0]
              : new de(this.op, this.line[0][1])
        ),
          (this.line.length = 0))
      }
      isLineEmpty() {
        return this.line.length === 0
      }
      pushDiff(t) {
        this.line.push(t)
      }
      align(t) {
        const r = t[1]
        if (
          r.includes(`
`)
        ) {
          const n = r.split(`
`),
            o = n.length - 1
          n.forEach((i, a) => {
            a < o
              ? (this.pushSubstring(i), this.pushLine())
              : i.length !== 0 && this.pushSubstring(i)
          })
        } else this.pushDiff(t)
      }
      moveLinesTo(t) {
        ;(this.isLineEmpty() || this.pushLine(),
          t.push(...this.lines),
          (this.lines.length = 0))
      }
    }
    w(uc, 'ChangeBuffer')
    const Os = uc,
      sc = class {
        deleteBuffer
        insertBuffer
        lines
        constructor(t, r) {
          ;((this.deleteBuffer = t), (this.insertBuffer = r), (this.lines = []))
        }
        pushDiffCommonLine(t) {
          this.lines.push(t)
        }
        pushDiffChangeLines(t) {
          const r = t[1].length === 0
          ;((!r || this.deleteBuffer.isLineEmpty()) &&
            this.deleteBuffer.pushDiff(t),
            (!r || this.insertBuffer.isLineEmpty()) &&
              this.insertBuffer.pushDiff(t))
        }
        flushChangeLines() {
          ;(this.deleteBuffer.moveLinesTo(this.lines),
            this.insertBuffer.moveLinesTo(this.lines))
        }
        align(t) {
          const r = t[0],
            n = t[1]
          if (
            n.includes(`
`)
          ) {
            const o = n.split(`
`),
              i = o.length - 1
            o.forEach((a, u) => {
              if (u === 0) {
                const s = new de(r, a)
                this.deleteBuffer.isLineEmpty() &&
                this.insertBuffer.isLineEmpty()
                  ? (this.flushChangeLines(), this.pushDiffCommonLine(s))
                  : (this.pushDiffChangeLines(s), this.flushChangeLines())
              } else
                u < i
                  ? this.pushDiffCommonLine(new de(r, a))
                  : a.length !== 0 && this.pushDiffChangeLines(new de(r, a))
            })
          } else this.pushDiffChangeLines(t)
        }
        getLines() {
          return (this.flushChangeLines(), this.lines)
        }
      }
    w(sc, 'CommonBuffer')
    const Lh = sc
    function lc(e, t) {
      const r = new Os(xe, t),
        n = new Os(we, t),
        o = new Lh(r, n)
      return (
        e.forEach((i) => {
          switch (i[0]) {
            case xe:
              r.align(i)
              break
            case we:
              n.align(i)
              break
            default:
              o.align(i)
          }
        }),
        o.getLines()
      )
    }
    w(lc, 'getAlignedDiffs')
    function cc(e, t) {
      if (t) {
        const r = e.length - 1
        return e.some(
          (n, o) =>
            n[0] === fe &&
            (o !== r ||
              n[1] !==
                `
`)
        )
      }
      return e.some((r) => r[0] === fe)
    }
    w(cc, 'hasCommonDiff')
    function pc(e, t, r) {
      if (e !== t && e.length !== 0 && t.length !== 0) {
        const n =
            e.includes(`
`) ||
            t.includes(`
`),
          [o, i] = ri(
            n
              ? `${e}
`
              : e,
            n
              ? `${t}
`
              : t,
            !0,
            r
          )
        if (cc(o, n)) {
          const a = ht(r),
            u = lc(o, a.changeColor)
          return fn(u, i, a)
        }
      }
      return br(
        e.split(`
`),
        t.split(`
`),
        r
      )
    }
    w(pc, 'diffStringsUnified')
    function ri(e, t, r, n) {
      const [o, i] = ic(e, t, n)
      return (r && Hl(o), [o, i])
    }
    w(ri, 'diffStringsRaw')
    function tn(e, t) {
      const { commonColor: r } = ht(t)
      return r(e)
    }
    w(tn, 'getCommonMessage')
    let {
        AsymmetricMatcher: kh,
        DOMCollection: Nh,
        DOMElement: jh,
        Immutable: Mh,
        ReactElement: qh,
        ReactTestComponent: zh,
      } = Go,
      dc = [zh, qh, jh, Nh, Mh, kh, Go.Error],
      Do = { maxDepth: 20, plugins: dc },
      fc = { callToJSON: !1, maxDepth: 8, plugins: dc }
    function hc(e, t, r) {
      if (Object.is(e, t)) return ''
      let n = Co(e),
        o = n,
        i = !1
      if (n === 'object' && typeof e.asymmetricMatch === 'function') {
        if (
          e.$$typeof !== Symbol.for('jest.asymmetricMatcher') ||
          typeof e.getExpectedType !== 'function'
        )
          return
        ;((o = e.getExpectedType()), (i = o === 'string'))
      }
      if (o !== Co(t)) {
        const a = function (_) {
          return _.length <= E ? _ : `${_.slice(0, E)}...`
        }
        w(a, 'truncate')
        let {
            aAnnotation: u,
            aColor: s,
            aIndicator: l,
            bAnnotation: c,
            bColor: p,
            bIndicator: g,
          } = ht(r),
          m = rn(fc, r),
          A = We(e, m),
          b = We(t, m),
          E = 1e5
        ;((A = a(A)), (b = a(b)))
        const x = `${s(`${l} ${u}:`)} 
${A}`,
          C = `${p(`${g} ${c}:`)} 
${b}`
        return `${x}

${C}`
      }
      if (!i)
        switch (n) {
          case 'string':
            return br(
              e.split(`
`),
              t.split(`
`),
              r
            )
          case 'boolean':
          case 'number':
            return mc(e, t, r)
          case 'map':
            return Xr(To(e), To(t), r)
          case 'set':
            return Xr(_o(e), _o(t), r)
          default:
            return Xr(e, t, r)
        }
    }
    w(hc, 'diff')
    function mc(e, t, r) {
      const n = We(e, Do),
        o = We(t, Do)
      return n === o
        ? ''
        : br(
            n.split(`
`),
            o.split(`
`),
            r
          )
    }
    w(mc, 'comparePrimitive')
    function To(e) {
      return new Map(Array.from(e.entries()).sort())
    }
    w(To, 'sortMap')
    function _o(e) {
      return new Set(Array.from(e.values()).sort())
    }
    w(_o, 'sortSet')
    function Xr(e, t, r) {
      let n,
        o = !1
      try {
        const a = rn(Do, r)
        n = Oo(e, t, a, r)
      } catch {
        o = !0
      }
      const i = tn(Wl, r)
      if (n === void 0 || n === i) {
        const a = rn(fc, r)
        ;((n = Oo(e, t, a, r)),
          n !== i &&
            !o &&
            (n = `${tn(Bh, r)}

${n}`))
      }
      return n
    }
    w(Xr, 'compareObjects')
    function rn(e, t) {
      const { compareKeys: r, printBasicPrototype: n, maxDepth: o } = ht(t)
      return {
        ...e,
        compareKeys: r,
        printBasicPrototype: n,
        maxDepth: o ?? e.maxDepth,
      }
    }
    w(rn, 'getFormatOptions')
    function Oo(e, t, r, n) {
      const o = { ...r, indent: 0 },
        i = We(e, o),
        a = We(t, o)
      if (i === a) return tn(Wl, n)
      {
        const u = We(e, r),
          s = We(t, r)
        return oc(
          u.split(`
`),
          s.split(`
`),
          i.split(`
`),
          a.split(`
`),
          n
        )
      }
    }
    w(Oo, 'getObjectsDifference')
    const Is = 2e4
    function Io(e) {
      return Qr(e) === 'Object' && typeof e.asymmetricMatch === 'function'
    }
    w(Io, 'isAsymmetricMatcher')
    function Ro(e, t) {
      const r = Qr(e),
        n = Qr(t)
      return r === n && (r === 'Object' || r === 'Array')
    }
    w(Ro, 'isReplaceable')
    function gc(e, t, r) {
      const { aAnnotation: n, bAnnotation: o } = ht(r)
      if (
        typeof t === 'string' &&
        typeof e === 'string' &&
        t.length > 0 &&
        e.length > 0 &&
        t.length <= Is &&
        e.length <= Is &&
        t !== e
      ) {
        if (
          t.includes(`
`) ||
          e.includes(`
`)
        )
          return pc(t, e, r)
        const [l] = ri(t, e, !0),
          c = l.some((A) => A[0] === fe),
          p = yc(n, o),
          g = p(n) + Ec(Fo(l, xe, c)),
          m = p(o) + bc(Fo(l, we, c))
        return `${g}
${m}`
      }
      const i = wo(t, { forceWritable: !0 }),
        a = wo(e, { forceWritable: !0 }),
        { replacedExpected: u, replacedActual: s } = ni(a, i)
      return hc(u, s, r)
    }
    w(gc, 'printDiffOrStringify')
    function ni(e, t, r = new WeakSet(), n = new WeakSet()) {
      return e instanceof Error &&
        t instanceof Error &&
        typeof e.cause < 'u' &&
        typeof t.cause > 'u'
        ? (delete e.cause, { replacedActual: e, replacedExpected: t })
        : Ro(e, t)
          ? r.has(e) || n.has(t)
            ? { replacedActual: e, replacedExpected: t }
            : (r.add(e),
              n.add(t),
              Ko(t).forEach((o) => {
                const i = t[o],
                  a = e[o]
                if (Io(i)) i.asymmetricMatch(a) && (e[o] = i)
                else if (Io(a)) a.asymmetricMatch(i) && (t[o] = a)
                else if (Ro(a, i)) {
                  const u = ni(a, i, r, n)
                  ;((e[o] = u.replacedActual), (t[o] = u.replacedExpected))
                }
              }),
              { replacedActual: e, replacedExpected: t })
          : { replacedActual: e, replacedExpected: t }
    }
    w(ni, 'replaceAsymmetricMatcher')
    function yc(...e) {
      const t = e.reduce((r, n) => (n.length > r ? n.length : r), 0)
      return (r) => `${r}: ${' '.repeat(t - r.length)}`
    }
    w(yc, 'getLabelPrinter')
    const Uh = '\xB7'
    function oi(e) {
      return e.replace(/\s+$/gm, (t) => Uh.repeat(t.length))
    }
    w(oi, 'replaceTrailingSpaces')
    function bc(e) {
      return ot.red(oi(Mt(e)))
    }
    w(bc, 'printReceived')
    function Ec(e) {
      return ot.green(oi(Mt(e)))
    }
    w(Ec, 'printExpected')
    function Fo(e, t, r) {
      return e.reduce(
        (n, o) =>
          n +
          (o[0] === fe
            ? o[1]
            : o[0] === t
              ? r
                ? ot.inverse(o[1])
                : o[1]
              : ''),
        ''
      )
    }
    w(Fo, 'getCommonAndChangedSubstrings')
    const Hh = '@@__IMMUTABLE_RECORD__@@',
      Vh = '@@__IMMUTABLE_ITERABLE__@@'
    function Ac(e) {
      return e && (e[Vh] || e[Hh])
    }
    w(Ac, 'isImmutable')
    const Wh = Object.getPrototypeOf({})
    function Bo(e) {
      return e instanceof Error
        ? `<unserializable>: ${e.message}`
        : typeof e === 'string'
          ? `<unserializable>: ${e}`
          : '<unserializable>'
    }
    w(Bo, 'getUnserializableMessage')
    function nt(e, t = new WeakMap()) {
      if (!e || typeof e === 'string') return e
      if (
        e instanceof Error &&
        'toJSON' in e &&
        typeof e.toJSON === 'function'
      ) {
        const r = e.toJSON()
        return (
          r &&
            r !== e &&
            typeof r === 'object' &&
            (typeof e.message === 'string' &&
              fr(() => r.message ?? (r.message = e.message)),
            typeof e.stack === 'string' &&
              fr(() => r.stack ?? (r.stack = e.stack)),
            typeof e.name === 'string' && fr(() => r.name ?? (r.name = e.name)),
            e.cause != null && fr(() => r.cause ?? (r.cause = nt(e.cause, t)))),
          nt(r, t)
        )
      }
      if (typeof e === 'function') return `Function<${e.name || 'anonymous'}>`
      if (typeof e === 'symbol') return e.toString()
      if (typeof e !== 'object') return e
      if (typeof Buffer < 'u' && e instanceof Buffer)
        return `<Buffer(${e.length}) ...>`
      if (typeof Uint8Array < 'u' && e instanceof Uint8Array)
        return `<Uint8Array(${e.length}) ...>`
      if (Ac(e)) return nt(e.toJSON(), t)
      if (
        e instanceof Promise ||
        (e.constructor && e.constructor.prototype === 'AsyncFunction')
      )
        return 'Promise'
      if (typeof Element < 'u' && e instanceof Element) return e.tagName
      if (typeof e.asymmetricMatch === 'function')
        return `${e.toString()} ${kl(e.sample)}`
      if (typeof e.toJSON === 'function') return nt(e.toJSON(), t)
      if (t.has(e)) return t.get(e)
      if (Array.isArray(e)) {
        const r = new Array(e.length)
        return (
          t.set(e, r),
          e.forEach((n, o) => {
            try {
              r[o] = nt(n, t)
            } catch (i) {
              r[o] = Bo(i)
            }
          }),
          r
        )
      } else {
        const r = Object.create(null)
        t.set(e, r)
        let n = e
        for (; n && n !== Wh; )
          (Object.getOwnPropertyNames(n).forEach((o) => {
            if (!(o in r))
              try {
                r[o] = nt(e[o], t)
              } catch (i) {
                ;(delete r[o], (r[o] = Bo(i)))
              }
          }),
            (n = Object.getPrototypeOf(n)))
        return r
      }
    }
    w(nt, 'serializeValue')
    function fr(e) {
      try {
        return e()
      } catch {}
    }
    w(fr, 'safe')
    function wc(e) {
      return e.replace(/__(vite_ssr_import|vi_import)_\d+__\./g, '')
    }
    w(wc, 'normalizeErrorMessage')
    function ii(e, t, r = new WeakSet()) {
      if (!e || typeof e !== 'object') return { message: String(e) }
      const n = e
      ;((n.showDiff ||
        (n.showDiff === void 0 &&
          n.expected !== void 0 &&
          n.actual !== void 0)) &&
        (n.diff = gc(n.actual, n.expected, { ...t, ...n.diffOptions })),
        'expected' in n &&
          typeof n.expected !== 'string' &&
          (n.expected = Mt(n.expected, 10)),
        'actual' in n &&
          typeof n.actual !== 'string' &&
          (n.actual = Mt(n.actual, 10)))
      try {
        typeof n.message === 'string' && (n.message = wc(n.message))
      } catch {}
      try {
        !r.has(n) &&
          typeof n.cause === 'object' &&
          (r.add(n), (n.cause = ii(n.cause, t, r)))
      } catch {}
      try {
        return nt(n)
      } catch (o) {
        return nt(
          new Error(`Failed to fully serialize error: ${o?.message}
Inner error message: ${n?.message}`)
        )
      }
    }
    w(ii, 'processError')
    var tt = {
        CALL: 'storybook/instrumenter/call',
        SYNC: 'storybook/instrumenter/sync',
        START: 'storybook/instrumenter/start',
        BACK: 'storybook/instrumenter/back',
        GOTO: 'storybook/instrumenter/goto',
        NEXT: 'storybook/instrumenter/next',
        END: 'storybook/instrumenter/end',
      },
      so = globalThis.__STORYBOOK_ADDONS_PREVIEW,
      Gh = ((e) => (
        (e.DONE = 'done'),
        (e.ERROR = 'error'),
        (e.ACTIVE = 'active'),
        (e.WAITING = 'waiting'),
        e
      ))(Gh || {}),
      Yh = new Error(
        'This function ran after the play function completed. Did you forget to `await` it?'
      ),
      Rs = w(
        (e) => Object.prototype.toString.call(e) === '[object Object]',
        'isObject'
      ),
      Kh = w(
        (e) => Object.prototype.toString.call(e) === '[object Module]',
        'isModule'
      ),
      Xh = w((e) => {
        if (!Rs(e) && !Kh(e)) return !1
        if (e.constructor === void 0) return !0
        const t = e.constructor.prototype
        return !!Rs(t)
      }, 'isInstrumentable'),
      Jh = w((e) => {
        try {
          return new e.constructor()
        } catch {
          return {}
        }
      }, 'construct'),
      lo = w(
        () => ({
          renderPhase: void 0,
          isDebugging: !1,
          isPlaying: !1,
          isLocked: !1,
          cursor: 0,
          calls: [],
          shadowCalls: [],
          callRefsByResult: new Map(),
          chainedCallIds: new Set(),
          ancestors: [],
          playUntil: void 0,
          resolvers: {},
          syncTimeout: void 0,
        }),
        'getInitialState'
      ),
      Fs = w((e, t = !1) => {
        const r = (t ? e.shadowCalls : e.calls).filter((o) => o.retain)
        if (!r.length) return
        const n = new Map(
          Array.from(e.callRefsByResult.entries()).filter(([, o]) => o.retain)
        )
        return { cursor: r.length, calls: r, callRefsByResult: n }
      }, 'getRetainedState'),
      Sc = class {
        constructor() {
          ;((this.detached = !1),
            (this.initialized = !1),
            (this.state = {}),
            (this.loadParentWindowState = w(() => {
              try {
                this.state =
                  q.window?.parent
                    ?.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ || {}
              } catch {
                this.detached = !0
              }
            }, 'loadParentWindowState')),
            (this.updateParentWindowState = w(() => {
              try {
                q.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ =
                  this.state
              } catch {
                this.detached = !0
              }
            }, 'updateParentWindowState')),
            this.loadParentWindowState())
          const t = w(
              ({ storyId: s, isPlaying: l = !0, isDebugging: c = !1 }) => {
                const p = this.getState(s)
                ;(this.setState(s, {
                  ...lo(),
                  ...Fs(p, c),
                  shadowCalls: c ? p.shadowCalls : [],
                  chainedCallIds: c ? p.chainedCallIds : new Set(),
                  playUntil: c ? p.playUntil : void 0,
                  isPlaying: l,
                  isDebugging: c,
                }),
                  this.sync(s))
              },
              'resetState'
            ),
            r = w(
              (s) =>
                ({ storyId: l, playUntil: c }) => {
                  this.getState(l).isDebugging ||
                    this.setState(l, ({ calls: g }) => ({
                      calls: [],
                      shadowCalls: g.map((m) => ({ ...m, status: 'waiting' })),
                      isDebugging: !0,
                    }))
                  const p = this.getLog(l)
                  ;(this.setState(l, ({ shadowCalls: g }) => {
                    if (c || !p.length) return { playUntil: c }
                    const m = g.findIndex((A) => A.id === p[0].callId)
                    return {
                      playUntil: g
                        .slice(0, m)
                        .filter((A) => A.interceptable && !A.ancestors?.length)
                        .slice(-1)[0]?.id,
                    }
                  }),
                    s.emit(ft, { storyId: l, isDebugging: !0 }))
                },
              'start'
            ),
            n = w(
              (s) =>
                ({ storyId: l }) => {
                  const c = this.getLog(l).filter((g) => !g.ancestors?.length),
                    p = c.reduceRight(
                      (g, m, A) => (g >= 0 || m.status === 'waiting' ? g : A),
                      -1
                    )
                  r(s)({ storyId: l, playUntil: c[p - 1]?.callId })
                },
              'back'
            ),
            o = w(
              (s) =>
                ({ storyId: l, callId: c }) => {
                  const {
                      calls: p,
                      shadowCalls: g,
                      resolvers: m,
                    } = this.getState(l),
                    A = p.find(({ id: E }) => E === c),
                    b = g.find(({ id: E }) => E === c)
                  if (!A && b && Object.values(m).length > 0) {
                    const E = this.getLog(l).find(
                      (x) => x.status === 'waiting'
                    )?.callId
                    ;(b.id !== E && this.setState(l, { playUntil: b.id }),
                      Object.values(m).forEach((x) => x()))
                  } else r(s)({ storyId: l, playUntil: c })
                },
              'goto'
            ),
            i = w(
              (s) =>
                ({ storyId: l }) => {
                  const { resolvers: c } = this.getState(l)
                  if (Object.values(c).length > 0)
                    Object.values(c).forEach((p) => p())
                  else {
                    const p = this.getLog(l).find(
                      (g) => g.status === 'waiting'
                    )?.callId
                    p ? r(s)({ storyId: l, playUntil: p }) : a({ storyId: l })
                  }
                },
              'next'
            ),
            a = w(({ storyId: s }) => {
              ;(this.setState(s, { playUntil: void 0, isDebugging: !1 }),
                Object.values(this.getState(s).resolvers).forEach((l) => l()))
            }, 'end'),
            u = w(({ storyId: s, newPhase: l }) => {
              const { isDebugging: c } = this.getState(s)
              ;(this.setState(s, { renderPhase: l }),
                l === 'preparing' && c && t({ storyId: s }),
                l === 'playing' && t({ storyId: s, isDebugging: c }),
                l === 'played' &&
                  this.setState(s, {
                    isLocked: !1,
                    isPlaying: !1,
                    isDebugging: !1,
                  }),
                l === 'errored' &&
                  this.setState(s, { isLocked: !1, isPlaying: !1 }))
            }, 'renderPhaseChanged')
          so &&
            so.ready().then(() => {
              ;((this.channel = so.getChannel()),
                this.channel.on(ft, t),
                this.channel.on(Le, u),
                this.channel.on(cr, () => {
                  this.initialized ? this.cleanup() : (this.initialized = !0)
                }),
                this.channel.on(tt.START, r(this.channel)),
                this.channel.on(tt.BACK, n(this.channel)),
                this.channel.on(tt.GOTO, o(this.channel)),
                this.channel.on(tt.NEXT, i(this.channel)),
                this.channel.on(tt.END, a))
            })
        }
        getState(t) {
          return this.state[t] || lo()
        }
        setState(t, r) {
          const n = this.getState(t),
            o = typeof r === 'function' ? r(n) : r
          ;((this.state = { ...this.state, [t]: { ...n, ...o } }),
            this.updateParentWindowState())
        }
        cleanup() {
          this.state = Object.entries(this.state).reduce((r, [n, o]) => {
            const i = Fs(o)
            return (i && (r[n] = Object.assign(lo(), i)), r)
          }, {})
          const t = {
            controlStates: {
              detached: this.detached,
              start: !1,
              back: !1,
              goto: !1,
              next: !1,
              end: !1,
            },
            logItems: [],
          }
          ;(this.channel?.emit(tt.SYNC, t), this.updateParentWindowState())
        }
        getLog(t) {
          const { calls: r, shadowCalls: n } = this.getState(t),
            o = [...n]
          r.forEach((a, u) => {
            o[u] = a
          })
          const i = new Set()
          return o.reduceRight(
            (a, u) => (
              u.args.forEach((s) => {
                s?.__callId__ && i.add(s.__callId__)
              }),
              u.path.forEach((s) => {
                s.__callId__ && i.add(s.__callId__)
              }),
              (u.interceptable || u.exception) &&
                !i.has(u.id) &&
                (a.unshift({
                  callId: u.id,
                  status: u.status,
                  ancestors: u.ancestors,
                }),
                i.add(u.id)),
              a
            ),
            []
          )
        }
        instrument(t, r, n = 0) {
          if (!Xh(t)) return t
          let { mutate: o = !1, path: i = [] } = r,
            a = r.getKeys ? r.getKeys(t, n) : Object.keys(t)
          return (
            (n += 1),
            a.reduce(
              (u, s) => {
                const l = vc(t, s)
                if (typeof l?.get === 'function') {
                  if (l.configurable) {
                    const p = w(() => l?.get?.bind(t)?.(), 'getter')
                    Object.defineProperty(u, s, {
                      get: w(
                        () =>
                          this.instrument(p(), { ...r, path: i.concat(s) }, n),
                        'get'
                      ),
                    })
                  }
                  return u
                }
                const c = t[s]
                return typeof c !== 'function'
                  ? ((u[s] = this.instrument(
                      c,
                      { ...r, path: i.concat(s) },
                      n
                    )),
                    u)
                  : '__originalFn__' in c &&
                      typeof c.__originalFn__ === 'function'
                    ? ((u[s] = c), u)
                    : ((u[s] = (...p) => this.track(s, c, t, p, r)),
                      (u[s].__originalFn__ = c),
                      Object.defineProperty(u[s], 'name', {
                        value: s,
                        writable: !1,
                      }),
                      Object.keys(c).length > 0 &&
                        Object.assign(
                          u[s],
                          this.instrument(
                            { ...c },
                            { ...r, path: i.concat(s) },
                            n
                          )
                        ),
                      u)
              },
              o ? t : Jh(t)
            )
          )
        }
        track(t, r, n, o, i) {
          const a =
              o?.[0]?.__storyId__ ||
              q.__STORYBOOK_PREVIEW__?.selectionStore?.selection?.storyId,
            { cursor: u, ancestors: s } = this.getState(a)
          this.setState(a, { cursor: u + 1 })
          const l = `${s.slice(-1)[0] || a} [${u}] ${t}`,
            { path: c = [], intercept: p = !1, retain: g = !1 } = i,
            m = typeof p === 'function' ? p(t, c) : p,
            A = {
              id: l,
              cursor: u,
              storyId: a,
              ancestors: s,
              path: c,
              method: t,
              args: o,
              interceptable: m,
              retain: g,
            },
            b = (m && !s.length ? this.intercept : this.invoke).call(
              this,
              r,
              n,
              A,
              i
            )
          return this.instrument(b, {
            ...i,
            mutate: !0,
            path: [{ __callId__: A.id }],
          })
        }
        intercept(t, r, n, o) {
          const {
              chainedCallIds: i,
              isDebugging: a,
              playUntil: u,
            } = this.getState(n.storyId),
            s = i.has(n.id)
          return !a || s || u
            ? (u === n.id && this.setState(n.storyId, { playUntil: void 0 }),
              this.invoke(t, r, n, o))
            : new Promise((l) => {
                this.setState(n.storyId, ({ resolvers: c }) => ({
                  isLocked: !1,
                  resolvers: { ...c, [n.id]: l },
                }))
              }).then(
                () => (
                  this.setState(n.storyId, (l) => {
                    const { [n.id]: c, ...p } = l.resolvers
                    return { isLocked: !0, resolvers: p }
                  }),
                  this.invoke(t, r, n, o)
                )
              )
        }
        invoke(t, r, n, o) {
          const { callRefsByResult: i, renderPhase: a } = this.getState(
              n.storyId
            ),
            u = 25,
            s = w((p, g, m) => {
              if (m.includes(p)) return '[Circular]'
              if (((m = [...m, p]), g > u)) return '...'
              if (i.has(p)) return i.get(p)
              if (p instanceof Array) return p.map((A) => s(A, ++g, m))
              if (p instanceof Date)
                return { __date__: { value: p.toISOString() } }
              if (p instanceof Error) {
                const { name: A, message: b, stack: E } = p
                return { __error__: { name: A, message: b, stack: E } }
              }
              if (p instanceof RegExp) {
                const { flags: A, source: b } = p
                return { __regexp__: { flags: A, source: b } }
              }
              if (p instanceof q.window?.HTMLElement) {
                let {
                    prefix: A,
                    localName: b,
                    id: E,
                    classList: x,
                    innerText: C,
                  } = p,
                  _ = Array.from(x)
                return {
                  __element__: {
                    prefix: A,
                    localName: b,
                    id: E,
                    classNames: _,
                    innerText: C,
                  },
                }
              }
              return typeof p === 'function'
                ? {
                    __function__: {
                      name: 'getMockName' in p ? p.getMockName() : p.name,
                    },
                  }
                : typeof p === 'symbol'
                  ? { __symbol__: { description: p.description } }
                  : typeof p === 'object' &&
                      p?.constructor?.name &&
                      p?.constructor?.name !== 'Object'
                    ? { __class__: { name: p.constructor.name } }
                    : Object.prototype.toString.call(p) === '[object Object]'
                      ? Object.fromEntries(
                          Object.entries(p).map(([A, b]) => [A, s(b, ++g, m)])
                        )
                      : p
            }, 'serializeValues'),
            l = { ...n, args: n.args.map((p) => s(p, 0, [])) }
          n.path.forEach((p) => {
            p?.__callId__ &&
              this.setState(n.storyId, ({ chainedCallIds: g }) => ({
                chainedCallIds: new Set(Array.from(g).concat(p.__callId__)),
              }))
          })
          const c = w((p) => {
            if (p instanceof Error) {
              let { name: g, message: m, stack: A, callId: b = n.id } = p,
                {
                  showDiff: E = void 0,
                  diff: x = void 0,
                  actual: C = void 0,
                  expected: _ = void 0,
                } = p.name === 'AssertionError' ? ii(p) : p,
                D = {
                  name: g,
                  message: m,
                  stack: A,
                  callId: b,
                  showDiff: E,
                  diff: x,
                  actual: C,
                  expected: _,
                }
              if (
                (this.update({ ...l, status: 'error', exception: D }),
                this.setState(n.storyId, (I) => ({
                  callRefsByResult: new Map([
                    ...Array.from(I.callRefsByResult.entries()),
                    [p, { __callId__: n.id, retain: n.retain }],
                  ]),
                })),
                n.ancestors?.length)
              )
                throw (
                  Object.prototype.hasOwnProperty.call(p, 'callId') ||
                    Object.defineProperty(p, 'callId', { value: n.id }),
                  p
                )
            }
            throw p
          }, 'handleException')
          try {
            if (a === 'played' && !n.retain) throw Yh
            const p = (
                o.getArgs ? o.getArgs(n, this.getState(n.storyId)) : n.args
              ).map((m) =>
                typeof m !== 'function' || Cc(m) || Object.keys(m).length
                  ? m
                  : (...A) => {
                      const { cursor: b, ancestors: E } = this.getState(
                        n.storyId
                      )
                      this.setState(n.storyId, {
                        cursor: 0,
                        ancestors: [...E, n.id],
                      })
                      let x = w(
                          () =>
                            this.setState(n.storyId, {
                              cursor: b,
                              ancestors: E,
                            }),
                          'restore'
                        ),
                        C = !1
                      try {
                        const _ = m(...A)
                        return _ instanceof Promise
                          ? ((C = !0), _.finally(x))
                          : _
                      } finally {
                        C || x()
                      }
                    }
              ),
              g = t.apply(r, p)
            return (
              g &&
                ['object', 'function', 'symbol'].includes(typeof g) &&
                this.setState(n.storyId, (m) => ({
                  callRefsByResult: new Map([
                    ...Array.from(m.callRefsByResult.entries()),
                    [g, { __callId__: n.id, retain: n.retain }],
                  ]),
                })),
              this.update({
                ...l,
                status: g instanceof Promise ? 'active' : 'done',
              }),
              g instanceof Promise
                ? g.then((m) => (this.update({ ...l, status: 'done' }), m), c)
                : g
            )
          } catch (p) {
            return c(p)
          }
        }
        update(t) {
          ;(this.channel?.emit(tt.CALL, t),
            this.setState(t.storyId, ({ calls: r }) => {
              const n = r
                .concat(t)
                .reduce((o, i) => Object.assign(o, { [i.id]: i }), {})
              return {
                calls: Object.values(n).sort((o, i) =>
                  o.id.localeCompare(i.id, void 0, { numeric: !0 })
                ),
              }
            }),
            this.sync(t.storyId))
        }
        sync(t) {
          const r = w(() => {
            const { isLocked: n, isPlaying: o } = this.getState(t),
              i = this.getLog(t),
              a = i
                .filter(({ ancestors: c }) => !c.length)
                .find((c) => c.status === 'waiting')?.callId,
              u = i.some((c) => c.status === 'active')
            if (this.detached || n || u || i.length === 0) {
              const c = {
                controlStates: {
                  detached: this.detached,
                  start: !1,
                  back: !1,
                  goto: !1,
                  next: !1,
                  end: !1,
                },
                logItems: i,
              }
              this.channel?.emit(tt.SYNC, c)
              return
            }
            const s = i.some(
                (c) => c.status === 'done' || c.status === 'error'
              ),
              l = {
                controlStates: {
                  detached: this.detached,
                  start: s,
                  back: s,
                  goto: !0,
                  next: o,
                  end: o,
                },
                logItems: i,
                pausedAt: a,
              }
            this.channel?.emit(tt.SYNC, l)
          }, 'synchronize')
          this.setState(
            t,
            ({ syncTimeout: n }) => (
              clearTimeout(n),
              { syncTimeout: setTimeout(r, 0) }
            )
          )
        }
      }
    w(Sc, 'Instrumenter')
    const Zh = Sc
    function Er(e, t = {}) {
      try {
        let r = !1,
          n = !1
        return (
          q.window?.location?.search?.includes('instrument=true')
            ? (r = !0)
            : q.window?.location?.search?.includes('instrument=false') &&
              (n = !0),
          (q.window?.parent === q.window && !r) || n
            ? e
            : (q.window &&
                !q.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ &&
                (q.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ =
                  new Zh()),
              (q.window?.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__).instrument(
                e,
                t
              ))
        )
      } catch (r) {
        return (He.warn(r), e)
      }
    }
    w(Er, 'instrument')
    function vc(e, t) {
      let r = e
      for (; r != null; ) {
        const n = Object.getOwnPropertyDescriptor(r, t)
        if (n) return n
        r = Object.getPrototypeOf(r)
      }
    }
    w(vc, 'getPropertyDescriptor')
    function Cc(e) {
      if (typeof e !== 'function') return !1
      const t = Object.getOwnPropertyDescriptor(e, 'prototype')
      return t ? !t.writable : !1
    }
    w(Cc, 'isClass')
    const Qh = Object.create,
      ui = Object.defineProperty,
      em = Object.getOwnPropertyDescriptor,
      tm = Object.getOwnPropertyNames,
      rm = Object.getPrototypeOf,
      nm = Object.prototype.hasOwnProperty,
      De = (e, t) => ui(e, 'name', { value: t, configurable: !0 }),
      om = (e, t) => () => (
        t || e((t = { exports: {} }).exports, t),
        t.exports
      ),
      im = (e, t, r, n) => {
        if ((t && typeof t === 'object') || typeof t === 'function')
          for (const o of tm(t))
            !nm.call(e, o) &&
              o !== r &&
              ui(e, o, {
                get: () => t[o],
                enumerable: !(n = em(t, o)) || n.enumerable,
              })
        return e
      },
      am = (e, t, r) => (
        (r = e != null ? Qh(rm(e)) : {}),
        im(
          t || !e || !e.__esModule
            ? ui(r, 'default', { value: e, enumerable: !0 })
            : r,
          e
        )
      ),
      um = om((e) => {
        ;(Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.isEqual = (function () {
            const t = Object.prototype.toString,
              r = Object.getPrototypeOf,
              n = Object.getOwnPropertySymbols
                ? function (o) {
                    return Object.keys(o).concat(
                      Object.getOwnPropertySymbols(o)
                    )
                  }
                : Object.keys
            return function (o, i) {
              return De(function a(u, s, l) {
                let c,
                  p,
                  g,
                  m = t.call(u),
                  A = t.call(s)
                if (u === s) return !0
                if (u == null || s == null) return !1
                if (l.indexOf(u) > -1 && l.indexOf(s) > -1) return !0
                if (
                  (l.push(u, s),
                  m != A ||
                    ((c = n(u)),
                    (p = n(s)),
                    c.length != p.length ||
                      c.some(function (b) {
                        return !a(u[b], s[b], l)
                      })))
                )
                  return !1
                switch (m.slice(8, -1)) {
                  case 'Symbol':
                    return u.valueOf() == s.valueOf()
                  case 'Date':
                  case 'Number':
                    return +u == +s || (+u != +u && +s != +s)
                  case 'RegExp':
                  case 'Function':
                  case 'String':
                  case 'Boolean':
                    return `${u}` == `${s}`
                  case 'Set':
                  case 'Map':
                    ;((c = u.entries()), (p = s.entries()))
                    do
                      if (!a((g = c.next()).value, p.next().value, l)) return !1
                    while (!g.done)
                    return !0
                  case 'ArrayBuffer':
                    ;((u = new Uint8Array(u)), (s = new Uint8Array(s)))
                  case 'DataView':
                    ;((u = new Uint8Array(u.buffer)),
                      (s = new Uint8Array(s.buffer)))
                  case 'Float32Array':
                  case 'Float64Array':
                  case 'Int8Array':
                  case 'Int16Array':
                  case 'Int32Array':
                  case 'Uint8Array':
                  case 'Uint16Array':
                  case 'Uint32Array':
                  case 'Uint8ClampedArray':
                  case 'Arguments':
                  case 'Array':
                    if (u.length != s.length) return !1
                    for (g = 0; g < u.length; g++)
                      if (
                        (g in u || g in s) &&
                        (g in u != g in s || !a(u[g], s[g], l))
                      )
                        return !1
                    return !0
                  case 'Object':
                    return a(r(u), r(s), l)
                  default:
                    return !1
                }
              }, 'n')(o, i, [])
            }
          })()))
      })
    function Tc(e) {
      return e
        .replace(/_/g, ' ')
        .replace(/-/g, ' ')
        .replace(/\./g, ' ')
        .replace(/([^\n])([A-Z])([a-z])/g, (t, r, n, o) => `${r} ${n}${o}`)
        .replace(/([a-z])([A-Z])/g, (t, r, n) => `${r} ${n}`)
        .replace(/([a-z])([0-9])/gi, (t, r, n) => `${r} ${n}`)
        .replace(/([0-9])([a-z])/gi, (t, r, n) => `${r} ${n}`)
        .replace(/(\s|^)(\w)/g, (t, r, n) => `${r}${n.toUpperCase()}`)
        .replace(/ +/g, ' ')
        .trim()
    }
    De(Tc, 'toStartCaseStr')
    const xc = am(um(), 1),
      _c = De(
        (e) => e.map((t) => typeof t < 'u').filter(Boolean).length,
        'count'
      ),
      sm = De((e, t) => {
        const { exists: r, eq: n, neq: o, truthy: i } = e
        if (_c([r, n, o, i]) > 1)
          throw new Error(
            `Invalid conditional test ${JSON.stringify({ exists: r, eq: n, neq: o })}`
          )
        if (typeof n < 'u') return (0, xc.isEqual)(t, n)
        if (typeof o < 'u') return !(0, xc.isEqual)(t, o)
        if (typeof r < 'u') {
          const a = typeof t < 'u'
          return r ? a : !a
        }
        return typeof i > 'u' || i ? !!t : !t
      }, 'testValue'),
      Oc = De((e, t, r) => {
        if (!e.if) return !0
        const { arg: n, global: o } = e.if
        if (_c([n, o]) !== 1)
          throw new Error(
            `Invalid conditional value ${JSON.stringify({ arg: n, global: o })}`
          )
        const i = n ? t[n] : r[o]
        return sm(e.if, i)
      }, 'includeConditionalArg')
    function lm(e) {
      return (
        e != null &&
        typeof e === 'object' &&
        '_tag' in e &&
        e?._tag === 'Preview'
      )
    }
    De(lm, 'isPreview')
    function cm(e) {
      return (
        e != null && typeof e === 'object' && '_tag' in e && e?._tag === 'Meta'
      )
    }
    De(cm, 'isMeta')
    function Dt(e) {
      return (
        e != null && typeof e === 'object' && '_tag' in e && e?._tag === 'Story'
      )
    }
    De(Dt, 'isStory')
    const si = De(
        (e) =>
          e
            .toLowerCase()
            .replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '-')
            .replace(/-+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, ''),
        'sanitize'
      ),
      Dc = De((e, t) => {
        const r = si(e)
        if (r === '')
          throw new Error(
            `Invalid ${t} '${e}', must include alphanumeric characters`
          )
        return r
      }, 'sanitizeSafe'),
      Ic = De(
        (e, t) => `${Dc(e, 'kind')}${t ? `--${Dc(t, 'name')}` : ''}`,
        'toId'
      ),
      Rc = De((e) => Tc(e), 'storyNameFromExport')
    function ai(e, t) {
      return Array.isArray(t) ? t.includes(e) : e.match(t)
    }
    De(ai, 'matches')
    function zt(e, { includeStories: t, excludeStories: r }) {
      return e !== '__esModule' && (!t || ai(e, t)) && (!r || !ai(e, r))
    }
    De(zt, 'isExportStory')
    const D_ = De((e, { rootSeparator: t, groupSeparator: r }) => {
        const [n, o] = e.split(t, 2),
          i = (o || e).split(r).filter((a) => !!a)
        return { root: o ? n : null, groups: i }
      }, 'parseKind'),
      Fc = De((...e) => {
        const t = e.reduce(
          (r, n) => (n.startsWith('!') ? r.delete(n.slice(1)) : r.add(n), r),
          new Set()
        )
        return Array.from(t)
      }, 'combineTags')
    const pm = Object.create,
      _n = Object.defineProperty,
      dm = Object.getOwnPropertyDescriptor,
      fm = Object.getOwnPropertyNames,
      hm = Object.getPrototypeOf,
      mm = Object.prototype.hasOwnProperty,
      d = (e, t) => _n(e, 'name', { value: t, configurable: !0 }),
      hn = ((e) =>
        typeof Ie < 'u'
          ? Ie
          : typeof Proxy < 'u'
            ? new Proxy(e, { get: (t, r) => (typeof Ie < 'u' ? Ie : t)[r] })
            : e)(function (e) {
        if (typeof Ie < 'u') return Ie.apply(this, arguments)
        throw Error(`Dynamic require of "${e}" is not supported`)
      }),
      Se = (e, t) => () => (
        t || e((t = { exports: {} }).exports, t),
        t.exports
      ),
      gp = (e, t) => {
        for (const r in t) _n(e, r, { get: t[r], enumerable: !0 })
      },
      gm = (e, t, r, n) => {
        if ((t && typeof t === 'object') || typeof t === 'function')
          for (const o of fm(t))
            !mm.call(e, o) &&
              o !== r &&
              _n(e, o, {
                get: () => t[o],
                enumerable: !(n = dm(t, o)) || n.enumerable,
              })
        return e
      },
      Qt = (e, t, r) => (
        (r = e != null ? pm(hm(e)) : {}),
        gm(
          t || !e || !e.__esModule
            ? _n(r, 'default', { value: e, enumerable: !0 })
            : r,
          e
        )
      ),
      yp = Se((e, t) => {
        ;(function (r) {
          if (typeof e === 'object' && typeof t < 'u') t.exports = r()
          else if (typeof define === 'function' && define.amd) define([], r)
          else {
            let n
            ;(typeof window < 'u' || typeof window < 'u'
              ? (n = window)
              : typeof self < 'u'
                ? (n = self)
                : (n = this),
              (n.memoizerific = r()))
          }
        })(function () {
          let r, n, o
          return d(function i(a, u, s) {
            function l(g, m) {
              if (!u[g]) {
                if (!a[g]) {
                  const A = typeof hn === 'function' && hn
                  if (!m && A) return A(g, !0)
                  if (c) return c(g, !0)
                  const b = new Error(`Cannot find module '${g}'`)
                  throw ((b.code = 'MODULE_NOT_FOUND'), b)
                }
                const E = (u[g] = { exports: {} })
                a[g][0].call(
                  E.exports,
                  function (x) {
                    const C = a[g][1][x]
                    return l(C || x)
                  },
                  E,
                  E.exports,
                  i,
                  a,
                  u,
                  s
                )
              }
              return u[g].exports
            }
            d(l, 's')
            for (
              var c = typeof hn === 'function' && hn, p = 0;
              p < s.length;
              p++
            )
              l(s[p])
            return l
          }, 'e')(
            {
              1: [
                function (i, a, u) {
                  a.exports = function (s) {
                    if (typeof Map !== 'function' || s) {
                      const l = i('./similar')
                      return new l()
                    } else return new Map()
                  }
                },
                { './similar': 2 },
              ],
              2: [
                function (i, a, u) {
                  function s() {
                    return (
                      (this.list = []),
                      (this.lastItem = void 0),
                      (this.size = 0),
                      this
                    )
                  }
                  ;(d(s, 'Similar'),
                    (s.prototype.get = function (l) {
                      let c
                      if (this.lastItem && this.isEqual(this.lastItem.key, l))
                        return this.lastItem.val
                      if (((c = this.indexOf(l)), c >= 0))
                        return (
                          (this.lastItem = this.list[c]),
                          this.list[c].val
                        )
                    }),
                    (s.prototype.set = function (l, c) {
                      let p
                      return this.lastItem && this.isEqual(this.lastItem.key, l)
                        ? ((this.lastItem.val = c), this)
                        : ((p = this.indexOf(l)),
                          p >= 0
                            ? ((this.lastItem = this.list[p]),
                              (this.list[p].val = c),
                              this)
                            : ((this.lastItem = { key: l, val: c }),
                              this.list.push(this.lastItem),
                              this.size++,
                              this))
                    }),
                    (s.prototype.delete = function (l) {
                      let c
                      if (
                        (this.lastItem &&
                          this.isEqual(this.lastItem.key, l) &&
                          (this.lastItem = void 0),
                        (c = this.indexOf(l)),
                        c >= 0)
                      )
                        return (this.size--, this.list.splice(c, 1)[0])
                    }),
                    (s.prototype.has = function (l) {
                      let c
                      return this.lastItem && this.isEqual(this.lastItem.key, l)
                        ? !0
                        : ((c = this.indexOf(l)),
                          c >= 0 ? ((this.lastItem = this.list[c]), !0) : !1)
                    }),
                    (s.prototype.forEach = function (l, c) {
                      let p
                      for (p = 0; p < this.size; p++)
                        l.call(
                          c || this,
                          this.list[p].val,
                          this.list[p].key,
                          this
                        )
                    }),
                    (s.prototype.indexOf = function (l) {
                      let c
                      for (c = 0; c < this.size; c++)
                        if (this.isEqual(this.list[c].key, l)) return c
                      return -1
                    }),
                    (s.prototype.isEqual = function (l, c) {
                      return l === c || (l !== l && c !== c)
                    }),
                    (a.exports = s))
                },
                {},
              ],
              3: [
                function (i, a, u) {
                  const s = i('map-or-similar')
                  a.exports = function (g) {
                    const m = new s(!1),
                      A = []
                    return function (b) {
                      var E = d(function () {
                        let x = m,
                          C,
                          _,
                          D = arguments.length - 1,
                          I = Array(D + 1),
                          T = !0,
                          S
                        if (
                          (E.numArgs || E.numArgs === 0) &&
                          E.numArgs !== D + 1
                        )
                          throw new Error(
                            'Memoizerific functions should always be called with the same number of arguments'
                          )
                        for (S = 0; S < D; S++) {
                          if (
                            ((I[S] = { cacheItem: x, arg: arguments[S] }),
                            x.has(arguments[S]))
                          ) {
                            x = x.get(arguments[S])
                            continue
                          }
                          ;((T = !1),
                            (C = new s(!1)),
                            x.set(arguments[S], C),
                            (x = C))
                        }
                        return (
                          T &&
                            (x.has(arguments[D])
                              ? (_ = x.get(arguments[D]))
                              : (T = !1)),
                          T ||
                            ((_ = b.apply(null, arguments)),
                            x.set(arguments[D], _)),
                          g > 0 &&
                            ((I[D] = { cacheItem: x, arg: arguments[D] }),
                            T ? l(A, I) : A.push(I),
                            A.length > g && c(A.shift())),
                          (E.wasMemoized = T),
                          (E.numArgs = D + 1),
                          _
                        )
                      }, 'memoizerific')
                      return (
                        (E.limit = g),
                        (E.wasMemoized = !1),
                        (E.cache = m),
                        (E.lru = A),
                        E
                      )
                    }
                  }
                  function l(g, m) {
                    let A = g.length,
                      b = m.length,
                      E,
                      x,
                      C
                    for (x = 0; x < A; x++) {
                      for (E = !0, C = 0; C < b; C++)
                        if (!p(g[x][C].arg, m[C].arg)) {
                          E = !1
                          break
                        }
                      if (E) break
                    }
                    g.push(g.splice(x, 1)[0])
                  }
                  d(l, 'moveToMostRecentLru')
                  function c(g) {
                    let m = g.length,
                      A = g[m - 1],
                      b,
                      E
                    for (
                      A.cacheItem.delete(A.arg), E = m - 2;
                      E >= 0 &&
                      ((A = g[E]), (b = A.cacheItem.get(A.arg)), !b || !b.size);
                      E--
                    )
                      A.cacheItem.delete(A.arg)
                  }
                  d(c, 'removeCachedResult')
                  function p(g, m) {
                    return g === m || (g !== g && m !== m)
                  }
                  d(p, 'isEqual')
                },
                { 'map-or-similar': 1 },
              ],
            },
            {},
            [3]
          )(3)
        })
      }),
      bp = Se((e) => {
        'use strict'
        ;(Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.encodeString = n))
        const t = Array.from(
            { length: 256 },
            (o, i) => `%${((i < 16 ? '0' : '') + i.toString(16)).toUpperCase()}`
          ),
          r = new Int8Array([
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1,
            1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
            0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0,
          ])
        function n(o) {
          const i = o.length
          if (i === 0) return ''
          let a = '',
            u = 0,
            s = 0
          e: for (; s < i; s++) {
            let l = o.charCodeAt(s)
            for (; l < 128; ) {
              if (
                (r[l] !== 1 &&
                  (u < s && (a += o.slice(u, s)), (u = s + 1), (a += t[l])),
                ++s === i)
              )
                break e
              l = o.charCodeAt(s)
            }
            if ((u < s && (a += o.slice(u, s)), l < 2048)) {
              ;((u = s + 1), (a += t[192 | (l >> 6)] + t[128 | (l & 63)]))
              continue
            }
            if (l < 55296 || l >= 57344) {
              ;((u = s + 1),
                (a +=
                  t[224 | (l >> 12)] +
                  t[128 | ((l >> 6) & 63)] +
                  t[128 | (l & 63)]))
              continue
            }
            if ((++s, s >= i)) throw new Error('URI malformed')
            const c = o.charCodeAt(s) & 1023
            ;((u = s + 1),
              (l = 65536 + (((l & 1023) << 10) | c)),
              (a +=
                t[240 | (l >> 18)] +
                t[128 | ((l >> 12) & 63)] +
                t[128 | ((l >> 6) & 63)] +
                t[128 | (l & 63)]))
          }
          return u === 0 ? o : u < i ? a + o.slice(u) : a
        }
        d(n, 'encodeString')
      }),
      Fi = Se((e) => {
        'use strict'
        ;(Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.defaultOptions =
            e.defaultShouldSerializeObject =
            e.defaultValueSerializer =
              void 0))
        const t = bp(),
          r = d((i) => {
            switch (typeof i) {
              case 'string':
                return (0, t.encodeString)(i)
              case 'bigint':
              case 'boolean':
                return `${i}`
              case 'number':
                if (Number.isFinite(i))
                  return i < 1e21 ? `${i}` : (0, t.encodeString)(`${i}`)
                break
            }
            return i instanceof Date ? (0, t.encodeString)(i.toISOString()) : ''
          }, 'defaultValueSerializer')
        e.defaultValueSerializer = r
        const n = d((i) => i instanceof Date, 'defaultShouldSerializeObject')
        e.defaultShouldSerializeObject = n
        const o = d((i) => i, 'identityFunc')
        e.defaultOptions = {
          nesting: !0,
          nestingSyntax: 'dot',
          arrayRepeat: !1,
          arrayRepeatSyntax: 'repeat',
          delimiter: 38,
          valueDeserializer: o,
          valueSerializer: e.defaultValueSerializer,
          keyDeserializer: o,
          shouldSerializeObject: e.defaultShouldSerializeObject,
        }
      }),
      Ep = Se((e) => {
        'use strict'
        ;(Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.getDeepObject = o),
          (e.stringifyObject = c))
        const t = Fi(),
          r = bp()
        function n(p) {
          return p === '__proto__' || p === 'constructor' || p === 'prototype'
        }
        d(n, 'isPrototypeKey')
        function o(p, g, m, A, b) {
          if (n(g)) return p
          const E = p[g]
          return typeof E === 'object' && E !== null
            ? E
            : !A &&
                (b ||
                  typeof m === 'number' ||
                  (typeof m === 'string' &&
                    m * 0 === 0 &&
                    m.indexOf('.') === -1))
              ? (p[g] = [])
              : (p[g] = {})
        }
        d(o, 'getDeepObject')
        const i = 20,
          a = '[]',
          u = '[',
          s = ']',
          l = '.'
        function c(p, g, m = 0, A, b) {
          let {
              nestingSyntax: E = t.defaultOptions.nestingSyntax,
              arrayRepeat: x = t.defaultOptions.arrayRepeat,
              arrayRepeatSyntax: C = t.defaultOptions.arrayRepeatSyntax,
              nesting: _ = t.defaultOptions.nesting,
              delimiter: D = t.defaultOptions.delimiter,
              valueSerializer: I = t.defaultOptions.valueSerializer,
              shouldSerializeObject: T = t.defaultOptions.shouldSerializeObject,
            } = g,
            S = typeof D === 'number' ? String.fromCharCode(D) : D,
            O = b === !0 && x,
            F = E === 'dot' || (E === 'js' && !b)
          if (m > i) return ''
          let $ = '',
            P = !0,
            j = !1
          for (const k in p) {
            let h = p[k],
              f
            ;(A
              ? ((f = A),
                O
                  ? C === 'bracket' && (f += a)
                  : F
                    ? ((f += l), (f += k))
                    : ((f += u), (f += k), (f += s)))
              : (f = k),
              P || ($ += S),
              typeof h === 'object' && h !== null && !T(h)
                ? ((j = h.pop !== void 0),
                  (_ || (x && j)) && ($ += c(h, g, m + 1, f, j)))
                : (($ += (0, r.encodeString)(f)), ($ += '='), ($ += I(h, k))),
              P && (P = !1))
          }
          return $
        }
        d(c, 'stringifyObject')
      }),
      ym = Se((e, t) => {
        'use strict'
        const r = 12,
          n = 0,
          o = [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 7, 7, 7, 7, 7,
            7, 7, 7, 7, 7, 7, 7, 8, 7, 7, 10, 9, 9, 9, 11, 4, 4, 4, 4, 4, 4, 4,
            4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 24,
            36, 48, 60, 72, 84, 96, 0, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 24, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 48, 48, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 48, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 127, 63, 63, 63, 0, 31, 15, 15, 15, 7, 7, 7,
          ]
        function i(s) {
          let l = s.indexOf('%')
          if (l === -1) return s
          for (
            var c = s.length, p = '', g = 0, m = 0, A = l, b = r;
            l > -1 && l < c;

          ) {
            const E = u(s[l + 1], 4),
              x = u(s[l + 2], 0),
              C = E | x,
              _ = o[C]
            if (
              ((b = o[256 + b + _]), (m = (m << 6) | (C & o[364 + _])), b === r)
            )
              ((p += s.slice(g, A)),
                (p +=
                  m <= 65535
                    ? String.fromCharCode(m)
                    : String.fromCharCode(
                        55232 + (m >> 10),
                        56320 + (m & 1023)
                      )),
                (m = 0),
                (g = l + 3),
                (l = A = s.indexOf('%', g)))
            else {
              if (b === n) return null
              if (((l += 3), l < c && s.charCodeAt(l) === 37)) continue
              return null
            }
          }
          return p + s.slice(g)
        }
        d(i, 'decodeURIComponent')
        const a = {
          0: 0,
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9,
          a: 10,
          A: 10,
          b: 11,
          B: 11,
          c: 12,
          C: 12,
          d: 13,
          D: 13,
          e: 14,
          E: 14,
          f: 15,
          F: 15,
        }
        function u(s, l) {
          const c = a[s]
          return c === void 0 ? 255 : c << l
        }
        ;(d(u, 'hexCodeToInt'), (t.exports = i))
      }),
      bm = Se((e) => {
        'use strict'
        const t =
          (e && e.__importDefault) ||
          function (p) {
            return p && p.__esModule ? p : { default: p }
          }
        ;(Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.numberValueDeserializer = e.numberKeyDeserializer = void 0),
          (e.parse = c))
        const r = Ep(),
          n = Fi(),
          o = t(ym()),
          i = d((p) => {
            const g = Number(p)
            return Number.isNaN(g) ? p : g
          }, 'numberKeyDeserializer')
        e.numberKeyDeserializer = i
        const a = d((p) => {
          const g = Number(p)
          return Number.isNaN(g) ? p : g
        }, 'numberValueDeserializer')
        e.numberValueDeserializer = a
        const u = /\+/g,
          s = d(function () {}, 'Empty')
        s.prototype = Object.create(null)
        function l(p, g, m, A, b) {
          let E = p.substring(g, m)
          return (
            A && (E = E.replace(u, ' ')),
            b && (E = (0, o.default)(E) || E),
            E
          )
        }
        d(l, 'computeKeySlice')
        function c(p, g) {
          const {
              valueDeserializer: m = n.defaultOptions.valueDeserializer,
              keyDeserializer: A = n.defaultOptions.keyDeserializer,
              arrayRepeatSyntax: b = n.defaultOptions.arrayRepeatSyntax,
              nesting: E = n.defaultOptions.nesting,
              arrayRepeat: x = n.defaultOptions.arrayRepeat,
              nestingSyntax: C = n.defaultOptions.nestingSyntax,
              delimiter: _ = n.defaultOptions.delimiter,
            } = g ?? {},
            D = typeof _ === 'string' ? _.charCodeAt(0) : _,
            I = C === 'js',
            T = new s()
          if (typeof p !== 'string') return T
          let S = p.length,
            O = '',
            F = -1,
            $ = -1,
            P = -1,
            j = T,
            k,
            h = '',
            f = '',
            v = !1,
            B = !1,
            R = !1,
            L = !1,
            N = !1,
            M = !1,
            z = !1,
            Y = 0,
            X = -1,
            V = -1,
            J = -1
          for (let W = 0; W < S + 1; W++) {
            if (((Y = W !== S ? p.charCodeAt(W) : D), Y === D)) {
              if (
                ((z = $ > F),
                z || ($ = W),
                P !== $ - 1 &&
                  ((f = l(p, P + 1, X > -1 ? X : $, R, v)),
                  (h = A(f)),
                  k !== void 0 &&
                    (j = (0, r.getDeepObject)(j, k, h, I && N, I && M))),
                z || h !== '')
              ) {
                z &&
                  ((O = p.slice($ + 1, W)),
                  L && (O = O.replace(u, ' ')),
                  B && (O = (0, o.default)(O) || O))
                const te = m(O, h)
                if (x) {
                  const ye = j[h]
                  ye === void 0
                    ? X > -1
                      ? (j[h] = [te])
                      : (j[h] = te)
                    : ye.pop
                      ? ye.push(te)
                      : (j[h] = [ye, te])
                } else j[h] = te
              }
              ;((O = ''),
                (F = W),
                ($ = W),
                (v = !1),
                (B = !1),
                (R = !1),
                (L = !1),
                (N = !1),
                (M = !1),
                (X = -1),
                (P = W),
                (j = T),
                (k = void 0),
                (h = ''))
            } else
              Y === 93
                ? (x && b === 'bracket' && J === 91 && (X = V),
                  E &&
                    (C === 'index' || I) &&
                    $ <= F &&
                    (P !== V &&
                      ((f = l(p, P + 1, W, R, v)),
                      (h = A(f)),
                      k !== void 0 &&
                        (j = (0, r.getDeepObject)(j, k, h, void 0, I)),
                      (k = h),
                      (R = !1),
                      (v = !1)),
                    (P = W),
                    (M = !0),
                    (N = !1)))
                : Y === 46
                  ? E &&
                    (C === 'dot' || I) &&
                    $ <= F &&
                    (P !== V &&
                      ((f = l(p, P + 1, W, R, v)),
                      (h = A(f)),
                      k !== void 0 && (j = (0, r.getDeepObject)(j, k, h, I)),
                      (k = h),
                      (R = !1),
                      (v = !1)),
                    (N = !0),
                    (M = !1),
                    (P = W))
                  : Y === 91
                    ? E &&
                      (C === 'index' || I) &&
                      $ <= F &&
                      (P !== V &&
                        ((f = l(p, P + 1, W, R, v)),
                        (h = A(f)),
                        I &&
                          k !== void 0 &&
                          (j = (0, r.getDeepObject)(j, k, h, I)),
                        (k = h),
                        (R = !1),
                        (v = !1),
                        (N = !1),
                        (M = !0)),
                      (P = W))
                    : Y === 61
                      ? $ <= F
                        ? ($ = W)
                        : (B = !0)
                      : Y === 43
                        ? $ > F
                          ? (L = !0)
                          : (R = !0)
                        : Y === 37 && ($ > F ? (B = !0) : (v = !0))
            ;((V = W), (J = Y))
          }
          return T
        }
        d(c, 'parse')
      }),
      Em = Se((e) => {
        'use strict'
        ;(Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.stringify = r))
        const t = Ep()
        function r(n, o) {
          if (n === null || typeof n !== 'object') return ''
          const i = o ?? {}
          return (0, t.stringifyObject)(n, i)
        }
        d(r, 'stringify')
      }),
      Bi = Se((e) => {
        'use strict'
        const t =
            (e && e.__createBinding) ||
            (Object.create
              ? function (i, a, u, s) {
                  s === void 0 && (s = u)
                  let l = Object.getOwnPropertyDescriptor(a, u)
                  ;((!l ||
                    ('get' in l
                      ? !a.__esModule
                      : l.writable || l.configurable)) &&
                    (l = {
                      enumerable: !0,
                      get: d(function () {
                        return a[u]
                      }, 'get'),
                    }),
                    Object.defineProperty(i, s, l))
                }
              : function (i, a, u, s) {
                  ;(s === void 0 && (s = u), (i[s] = a[u]))
                }),
          r =
            (e && e.__exportStar) ||
            function (i, a) {
              for (const u in i)
                u !== 'default' &&
                  !Object.prototype.hasOwnProperty.call(a, u) &&
                  t(a, i, u)
            }
        ;(Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.stringify = e.parse = void 0))
        const n = bm()
        Object.defineProperty(e, 'parse', {
          enumerable: !0,
          get: d(function () {
            return n.parse
          }, 'get'),
        })
        const o = Em()
        ;(Object.defineProperty(e, 'stringify', {
          enumerable: !0,
          get: d(function () {
            return o.stringify
          }, 'get'),
        }),
          r(Fi(), e))
      }),
      Ap = Se((e, t) => {
        t.exports = {
          Aacute: '\xC1',
          aacute: '\xE1',
          Abreve: '\u0102',
          abreve: '\u0103',
          ac: '\u223E',
          acd: '\u223F',
          acE: '\u223E\u0333',
          Acirc: '\xC2',
          acirc: '\xE2',
          acute: '\xB4',
          Acy: '\u0410',
          acy: '\u0430',
          AElig: '\xC6',
          aelig: '\xE6',
          af: '\u2061',
          Afr: '\u{1D504}',
          afr: '\u{1D51E}',
          Agrave: '\xC0',
          agrave: '\xE0',
          alefsym: '\u2135',
          aleph: '\u2135',
          Alpha: '\u0391',
          alpha: '\u03B1',
          Amacr: '\u0100',
          amacr: '\u0101',
          amalg: '\u2A3F',
          amp: '&',
          AMP: '&',
          andand: '\u2A55',
          And: '\u2A53',
          and: '\u2227',
          andd: '\u2A5C',
          andslope: '\u2A58',
          andv: '\u2A5A',
          ang: '\u2220',
          ange: '\u29A4',
          angle: '\u2220',
          angmsdaa: '\u29A8',
          angmsdab: '\u29A9',
          angmsdac: '\u29AA',
          angmsdad: '\u29AB',
          angmsdae: '\u29AC',
          angmsdaf: '\u29AD',
          angmsdag: '\u29AE',
          angmsdah: '\u29AF',
          angmsd: '\u2221',
          angrt: '\u221F',
          angrtvb: '\u22BE',
          angrtvbd: '\u299D',
          angsph: '\u2222',
          angst: '\xC5',
          angzarr: '\u237C',
          Aogon: '\u0104',
          aogon: '\u0105',
          Aopf: '\u{1D538}',
          aopf: '\u{1D552}',
          apacir: '\u2A6F',
          ap: '\u2248',
          apE: '\u2A70',
          ape: '\u224A',
          apid: '\u224B',
          apos: "'",
          ApplyFunction: '\u2061',
          approx: '\u2248',
          approxeq: '\u224A',
          Aring: '\xC5',
          aring: '\xE5',
          Ascr: '\u{1D49C}',
          ascr: '\u{1D4B6}',
          Assign: '\u2254',
          ast: '*',
          asymp: '\u2248',
          asympeq: '\u224D',
          Atilde: '\xC3',
          atilde: '\xE3',
          Auml: '\xC4',
          auml: '\xE4',
          awconint: '\u2233',
          awint: '\u2A11',
          backcong: '\u224C',
          backepsilon: '\u03F6',
          backprime: '\u2035',
          backsim: '\u223D',
          backsimeq: '\u22CD',
          Backslash: '\u2216',
          Barv: '\u2AE7',
          barvee: '\u22BD',
          barwed: '\u2305',
          Barwed: '\u2306',
          barwedge: '\u2305',
          bbrk: '\u23B5',
          bbrktbrk: '\u23B6',
          bcong: '\u224C',
          Bcy: '\u0411',
          bcy: '\u0431',
          bdquo: '\u201E',
          becaus: '\u2235',
          because: '\u2235',
          Because: '\u2235',
          bemptyv: '\u29B0',
          bepsi: '\u03F6',
          bernou: '\u212C',
          Bernoullis: '\u212C',
          Beta: '\u0392',
          beta: '\u03B2',
          beth: '\u2136',
          between: '\u226C',
          Bfr: '\u{1D505}',
          bfr: '\u{1D51F}',
          bigcap: '\u22C2',
          bigcirc: '\u25EF',
          bigcup: '\u22C3',
          bigodot: '\u2A00',
          bigoplus: '\u2A01',
          bigotimes: '\u2A02',
          bigsqcup: '\u2A06',
          bigstar: '\u2605',
          bigtriangledown: '\u25BD',
          bigtriangleup: '\u25B3',
          biguplus: '\u2A04',
          bigvee: '\u22C1',
          bigwedge: '\u22C0',
          bkarow: '\u290D',
          blacklozenge: '\u29EB',
          blacksquare: '\u25AA',
          blacktriangle: '\u25B4',
          blacktriangledown: '\u25BE',
          blacktriangleleft: '\u25C2',
          blacktriangleright: '\u25B8',
          blank: '\u2423',
          blk12: '\u2592',
          blk14: '\u2591',
          blk34: '\u2593',
          block: '\u2588',
          bne: '=\u20E5',
          bnequiv: '\u2261\u20E5',
          bNot: '\u2AED',
          bnot: '\u2310',
          Bopf: '\u{1D539}',
          bopf: '\u{1D553}',
          bot: '\u22A5',
          bottom: '\u22A5',
          bowtie: '\u22C8',
          boxbox: '\u29C9',
          boxdl: '\u2510',
          boxdL: '\u2555',
          boxDl: '\u2556',
          boxDL: '\u2557',
          boxdr: '\u250C',
          boxdR: '\u2552',
          boxDr: '\u2553',
          boxDR: '\u2554',
          boxh: '\u2500',
          boxH: '\u2550',
          boxhd: '\u252C',
          boxHd: '\u2564',
          boxhD: '\u2565',
          boxHD: '\u2566',
          boxhu: '\u2534',
          boxHu: '\u2567',
          boxhU: '\u2568',
          boxHU: '\u2569',
          boxminus: '\u229F',
          boxplus: '\u229E',
          boxtimes: '\u22A0',
          boxul: '\u2518',
          boxuL: '\u255B',
          boxUl: '\u255C',
          boxUL: '\u255D',
          boxur: '\u2514',
          boxuR: '\u2558',
          boxUr: '\u2559',
          boxUR: '\u255A',
          boxv: '\u2502',
          boxV: '\u2551',
          boxvh: '\u253C',
          boxvH: '\u256A',
          boxVh: '\u256B',
          boxVH: '\u256C',
          boxvl: '\u2524',
          boxvL: '\u2561',
          boxVl: '\u2562',
          boxVL: '\u2563',
          boxvr: '\u251C',
          boxvR: '\u255E',
          boxVr: '\u255F',
          boxVR: '\u2560',
          bprime: '\u2035',
          breve: '\u02D8',
          Breve: '\u02D8',
          brvbar: '\xA6',
          bscr: '\u{1D4B7}',
          Bscr: '\u212C',
          bsemi: '\u204F',
          bsim: '\u223D',
          bsime: '\u22CD',
          bsolb: '\u29C5',
          bsol: '\\',
          bsolhsub: '\u27C8',
          bull: '\u2022',
          bullet: '\u2022',
          bump: '\u224E',
          bumpE: '\u2AAE',
          bumpe: '\u224F',
          Bumpeq: '\u224E',
          bumpeq: '\u224F',
          Cacute: '\u0106',
          cacute: '\u0107',
          capand: '\u2A44',
          capbrcup: '\u2A49',
          capcap: '\u2A4B',
          cap: '\u2229',
          Cap: '\u22D2',
          capcup: '\u2A47',
          capdot: '\u2A40',
          CapitalDifferentialD: '\u2145',
          caps: '\u2229\uFE00',
          caret: '\u2041',
          caron: '\u02C7',
          Cayleys: '\u212D',
          ccaps: '\u2A4D',
          Ccaron: '\u010C',
          ccaron: '\u010D',
          Ccedil: '\xC7',
          ccedil: '\xE7',
          Ccirc: '\u0108',
          ccirc: '\u0109',
          Cconint: '\u2230',
          ccups: '\u2A4C',
          ccupssm: '\u2A50',
          Cdot: '\u010A',
          cdot: '\u010B',
          cedil: '\xB8',
          Cedilla: '\xB8',
          cemptyv: '\u29B2',
          cent: '\xA2',
          centerdot: '\xB7',
          CenterDot: '\xB7',
          cfr: '\u{1D520}',
          Cfr: '\u212D',
          CHcy: '\u0427',
          chcy: '\u0447',
          check: '\u2713',
          checkmark: '\u2713',
          Chi: '\u03A7',
          chi: '\u03C7',
          circ: '\u02C6',
          circeq: '\u2257',
          circlearrowleft: '\u21BA',
          circlearrowright: '\u21BB',
          circledast: '\u229B',
          circledcirc: '\u229A',
          circleddash: '\u229D',
          CircleDot: '\u2299',
          circledR: '\xAE',
          circledS: '\u24C8',
          CircleMinus: '\u2296',
          CirclePlus: '\u2295',
          CircleTimes: '\u2297',
          cir: '\u25CB',
          cirE: '\u29C3',
          cire: '\u2257',
          cirfnint: '\u2A10',
          cirmid: '\u2AEF',
          cirscir: '\u29C2',
          ClockwiseContourIntegral: '\u2232',
          CloseCurlyDoubleQuote: '\u201D',
          CloseCurlyQuote: '\u2019',
          clubs: '\u2663',
          clubsuit: '\u2663',
          colon: ':',
          Colon: '\u2237',
          Colone: '\u2A74',
          colone: '\u2254',
          coloneq: '\u2254',
          comma: ',',
          commat: '@',
          comp: '\u2201',
          compfn: '\u2218',
          complement: '\u2201',
          complexes: '\u2102',
          cong: '\u2245',
          congdot: '\u2A6D',
          Congruent: '\u2261',
          conint: '\u222E',
          Conint: '\u222F',
          ContourIntegral: '\u222E',
          copf: '\u{1D554}',
          Copf: '\u2102',
          coprod: '\u2210',
          Coproduct: '\u2210',
          copy: '\xA9',
          COPY: '\xA9',
          copysr: '\u2117',
          CounterClockwiseContourIntegral: '\u2233',
          crarr: '\u21B5',
          cross: '\u2717',
          Cross: '\u2A2F',
          Cscr: '\u{1D49E}',
          cscr: '\u{1D4B8}',
          csub: '\u2ACF',
          csube: '\u2AD1',
          csup: '\u2AD0',
          csupe: '\u2AD2',
          ctdot: '\u22EF',
          cudarrl: '\u2938',
          cudarrr: '\u2935',
          cuepr: '\u22DE',
          cuesc: '\u22DF',
          cularr: '\u21B6',
          cularrp: '\u293D',
          cupbrcap: '\u2A48',
          cupcap: '\u2A46',
          CupCap: '\u224D',
          cup: '\u222A',
          Cup: '\u22D3',
          cupcup: '\u2A4A',
          cupdot: '\u228D',
          cupor: '\u2A45',
          cups: '\u222A\uFE00',
          curarr: '\u21B7',
          curarrm: '\u293C',
          curlyeqprec: '\u22DE',
          curlyeqsucc: '\u22DF',
          curlyvee: '\u22CE',
          curlywedge: '\u22CF',
          curren: '\xA4',
          curvearrowleft: '\u21B6',
          curvearrowright: '\u21B7',
          cuvee: '\u22CE',
          cuwed: '\u22CF',
          cwconint: '\u2232',
          cwint: '\u2231',
          cylcty: '\u232D',
          dagger: '\u2020',
          Dagger: '\u2021',
          daleth: '\u2138',
          darr: '\u2193',
          Darr: '\u21A1',
          dArr: '\u21D3',
          dash: '\u2010',
          Dashv: '\u2AE4',
          dashv: '\u22A3',
          dbkarow: '\u290F',
          dblac: '\u02DD',
          Dcaron: '\u010E',
          dcaron: '\u010F',
          Dcy: '\u0414',
          dcy: '\u0434',
          ddagger: '\u2021',
          ddarr: '\u21CA',
          DD: '\u2145',
          dd: '\u2146',
          DDotrahd: '\u2911',
          ddotseq: '\u2A77',
          deg: '\xB0',
          Del: '\u2207',
          Delta: '\u0394',
          delta: '\u03B4',
          demptyv: '\u29B1',
          dfisht: '\u297F',
          Dfr: '\u{1D507}',
          dfr: '\u{1D521}',
          dHar: '\u2965',
          dharl: '\u21C3',
          dharr: '\u21C2',
          DiacriticalAcute: '\xB4',
          DiacriticalDot: '\u02D9',
          DiacriticalDoubleAcute: '\u02DD',
          DiacriticalGrave: '`',
          DiacriticalTilde: '\u02DC',
          diam: '\u22C4',
          diamond: '\u22C4',
          Diamond: '\u22C4',
          diamondsuit: '\u2666',
          diams: '\u2666',
          die: '\xA8',
          DifferentialD: '\u2146',
          digamma: '\u03DD',
          disin: '\u22F2',
          div: '\xF7',
          divide: '\xF7',
          divideontimes: '\u22C7',
          divonx: '\u22C7',
          DJcy: '\u0402',
          djcy: '\u0452',
          dlcorn: '\u231E',
          dlcrop: '\u230D',
          dollar: '$',
          Dopf: '\u{1D53B}',
          dopf: '\u{1D555}',
          Dot: '\xA8',
          dot: '\u02D9',
          DotDot: '\u20DC',
          doteq: '\u2250',
          doteqdot: '\u2251',
          DotEqual: '\u2250',
          dotminus: '\u2238',
          dotplus: '\u2214',
          dotsquare: '\u22A1',
          doublebarwedge: '\u2306',
          DoubleContourIntegral: '\u222F',
          DoubleDot: '\xA8',
          DoubleDownArrow: '\u21D3',
          DoubleLeftArrow: '\u21D0',
          DoubleLeftRightArrow: '\u21D4',
          DoubleLeftTee: '\u2AE4',
          DoubleLongLeftArrow: '\u27F8',
          DoubleLongLeftRightArrow: '\u27FA',
          DoubleLongRightArrow: '\u27F9',
          DoubleRightArrow: '\u21D2',
          DoubleRightTee: '\u22A8',
          DoubleUpArrow: '\u21D1',
          DoubleUpDownArrow: '\u21D5',
          DoubleVerticalBar: '\u2225',
          DownArrowBar: '\u2913',
          downarrow: '\u2193',
          DownArrow: '\u2193',
          Downarrow: '\u21D3',
          DownArrowUpArrow: '\u21F5',
          DownBreve: '\u0311',
          downdownarrows: '\u21CA',
          downharpoonleft: '\u21C3',
          downharpoonright: '\u21C2',
          DownLeftRightVector: '\u2950',
          DownLeftTeeVector: '\u295E',
          DownLeftVectorBar: '\u2956',
          DownLeftVector: '\u21BD',
          DownRightTeeVector: '\u295F',
          DownRightVectorBar: '\u2957',
          DownRightVector: '\u21C1',
          DownTeeArrow: '\u21A7',
          DownTee: '\u22A4',
          drbkarow: '\u2910',
          drcorn: '\u231F',
          drcrop: '\u230C',
          Dscr: '\u{1D49F}',
          dscr: '\u{1D4B9}',
          DScy: '\u0405',
          dscy: '\u0455',
          dsol: '\u29F6',
          Dstrok: '\u0110',
          dstrok: '\u0111',
          dtdot: '\u22F1',
          dtri: '\u25BF',
          dtrif: '\u25BE',
          duarr: '\u21F5',
          duhar: '\u296F',
          dwangle: '\u29A6',
          DZcy: '\u040F',
          dzcy: '\u045F',
          dzigrarr: '\u27FF',
          Eacute: '\xC9',
          eacute: '\xE9',
          easter: '\u2A6E',
          Ecaron: '\u011A',
          ecaron: '\u011B',
          Ecirc: '\xCA',
          ecirc: '\xEA',
          ecir: '\u2256',
          ecolon: '\u2255',
          Ecy: '\u042D',
          ecy: '\u044D',
          eDDot: '\u2A77',
          Edot: '\u0116',
          edot: '\u0117',
          eDot: '\u2251',
          ee: '\u2147',
          efDot: '\u2252',
          Efr: '\u{1D508}',
          efr: '\u{1D522}',
          eg: '\u2A9A',
          Egrave: '\xC8',
          egrave: '\xE8',
          egs: '\u2A96',
          egsdot: '\u2A98',
          el: '\u2A99',
          Element: '\u2208',
          elinters: '\u23E7',
          ell: '\u2113',
          els: '\u2A95',
          elsdot: '\u2A97',
          Emacr: '\u0112',
          emacr: '\u0113',
          empty: '\u2205',
          emptyset: '\u2205',
          EmptySmallSquare: '\u25FB',
          emptyv: '\u2205',
          EmptyVerySmallSquare: '\u25AB',
          emsp13: '\u2004',
          emsp14: '\u2005',
          emsp: '\u2003',
          ENG: '\u014A',
          eng: '\u014B',
          ensp: '\u2002',
          Eogon: '\u0118',
          eogon: '\u0119',
          Eopf: '\u{1D53C}',
          eopf: '\u{1D556}',
          epar: '\u22D5',
          eparsl: '\u29E3',
          eplus: '\u2A71',
          epsi: '\u03B5',
          Epsilon: '\u0395',
          epsilon: '\u03B5',
          epsiv: '\u03F5',
          eqcirc: '\u2256',
          eqcolon: '\u2255',
          eqsim: '\u2242',
          eqslantgtr: '\u2A96',
          eqslantless: '\u2A95',
          Equal: '\u2A75',
          equals: '=',
          EqualTilde: '\u2242',
          equest: '\u225F',
          Equilibrium: '\u21CC',
          equiv: '\u2261',
          equivDD: '\u2A78',
          eqvparsl: '\u29E5',
          erarr: '\u2971',
          erDot: '\u2253',
          escr: '\u212F',
          Escr: '\u2130',
          esdot: '\u2250',
          Esim: '\u2A73',
          esim: '\u2242',
          Eta: '\u0397',
          eta: '\u03B7',
          ETH: '\xD0',
          eth: '\xF0',
          Euml: '\xCB',
          euml: '\xEB',
          euro: '\u20AC',
          excl: '!',
          exist: '\u2203',
          Exists: '\u2203',
          expectation: '\u2130',
          exponentiale: '\u2147',
          ExponentialE: '\u2147',
          fallingdotseq: '\u2252',
          Fcy: '\u0424',
          fcy: '\u0444',
          female: '\u2640',
          ffilig: '\uFB03',
          fflig: '\uFB00',
          ffllig: '\uFB04',
          Ffr: '\u{1D509}',
          ffr: '\u{1D523}',
          filig: '\uFB01',
          FilledSmallSquare: '\u25FC',
          FilledVerySmallSquare: '\u25AA',
          fjlig: 'fj',
          flat: '\u266D',
          fllig: '\uFB02',
          fltns: '\u25B1',
          fnof: '\u0192',
          Fopf: '\u{1D53D}',
          fopf: '\u{1D557}',
          forall: '\u2200',
          ForAll: '\u2200',
          fork: '\u22D4',
          forkv: '\u2AD9',
          Fouriertrf: '\u2131',
          fpartint: '\u2A0D',
          frac12: '\xBD',
          frac13: '\u2153',
          frac14: '\xBC',
          frac15: '\u2155',
          frac16: '\u2159',
          frac18: '\u215B',
          frac23: '\u2154',
          frac25: '\u2156',
          frac34: '\xBE',
          frac35: '\u2157',
          frac38: '\u215C',
          frac45: '\u2158',
          frac56: '\u215A',
          frac58: '\u215D',
          frac78: '\u215E',
          frasl: '\u2044',
          frown: '\u2322',
          fscr: '\u{1D4BB}',
          Fscr: '\u2131',
          gacute: '\u01F5',
          Gamma: '\u0393',
          gamma: '\u03B3',
          Gammad: '\u03DC',
          gammad: '\u03DD',
          gap: '\u2A86',
          Gbreve: '\u011E',
          gbreve: '\u011F',
          Gcedil: '\u0122',
          Gcirc: '\u011C',
          gcirc: '\u011D',
          Gcy: '\u0413',
          gcy: '\u0433',
          Gdot: '\u0120',
          gdot: '\u0121',
          ge: '\u2265',
          gE: '\u2267',
          gEl: '\u2A8C',
          gel: '\u22DB',
          geq: '\u2265',
          geqq: '\u2267',
          geqslant: '\u2A7E',
          gescc: '\u2AA9',
          ges: '\u2A7E',
          gesdot: '\u2A80',
          gesdoto: '\u2A82',
          gesdotol: '\u2A84',
          gesl: '\u22DB\uFE00',
          gesles: '\u2A94',
          Gfr: '\u{1D50A}',
          gfr: '\u{1D524}',
          gg: '\u226B',
          Gg: '\u22D9',
          ggg: '\u22D9',
          gimel: '\u2137',
          GJcy: '\u0403',
          gjcy: '\u0453',
          gla: '\u2AA5',
          gl: '\u2277',
          glE: '\u2A92',
          glj: '\u2AA4',
          gnap: '\u2A8A',
          gnapprox: '\u2A8A',
          gne: '\u2A88',
          gnE: '\u2269',
          gneq: '\u2A88',
          gneqq: '\u2269',
          gnsim: '\u22E7',
          Gopf: '\u{1D53E}',
          gopf: '\u{1D558}',
          grave: '`',
          GreaterEqual: '\u2265',
          GreaterEqualLess: '\u22DB',
          GreaterFullEqual: '\u2267',
          GreaterGreater: '\u2AA2',
          GreaterLess: '\u2277',
          GreaterSlantEqual: '\u2A7E',
          GreaterTilde: '\u2273',
          Gscr: '\u{1D4A2}',
          gscr: '\u210A',
          gsim: '\u2273',
          gsime: '\u2A8E',
          gsiml: '\u2A90',
          gtcc: '\u2AA7',
          gtcir: '\u2A7A',
          gt: '>',
          GT: '>',
          Gt: '\u226B',
          gtdot: '\u22D7',
          gtlPar: '\u2995',
          gtquest: '\u2A7C',
          gtrapprox: '\u2A86',
          gtrarr: '\u2978',
          gtrdot: '\u22D7',
          gtreqless: '\u22DB',
          gtreqqless: '\u2A8C',
          gtrless: '\u2277',
          gtrsim: '\u2273',
          gvertneqq: '\u2269\uFE00',
          gvnE: '\u2269\uFE00',
          Hacek: '\u02C7',
          hairsp: '\u200A',
          half: '\xBD',
          hamilt: '\u210B',
          HARDcy: '\u042A',
          hardcy: '\u044A',
          harrcir: '\u2948',
          harr: '\u2194',
          hArr: '\u21D4',
          harrw: '\u21AD',
          Hat: '^',
          hbar: '\u210F',
          Hcirc: '\u0124',
          hcirc: '\u0125',
          hearts: '\u2665',
          heartsuit: '\u2665',
          hellip: '\u2026',
          hercon: '\u22B9',
          hfr: '\u{1D525}',
          Hfr: '\u210C',
          HilbertSpace: '\u210B',
          hksearow: '\u2925',
          hkswarow: '\u2926',
          hoarr: '\u21FF',
          homtht: '\u223B',
          hookleftarrow: '\u21A9',
          hookrightarrow: '\u21AA',
          hopf: '\u{1D559}',
          Hopf: '\u210D',
          horbar: '\u2015',
          HorizontalLine: '\u2500',
          hscr: '\u{1D4BD}',
          Hscr: '\u210B',
          hslash: '\u210F',
          Hstrok: '\u0126',
          hstrok: '\u0127',
          HumpDownHump: '\u224E',
          HumpEqual: '\u224F',
          hybull: '\u2043',
          hyphen: '\u2010',
          Iacute: '\xCD',
          iacute: '\xED',
          ic: '\u2063',
          Icirc: '\xCE',
          icirc: '\xEE',
          Icy: '\u0418',
          icy: '\u0438',
          Idot: '\u0130',
          IEcy: '\u0415',
          iecy: '\u0435',
          iexcl: '\xA1',
          iff: '\u21D4',
          ifr: '\u{1D526}',
          Ifr: '\u2111',
          Igrave: '\xCC',
          igrave: '\xEC',
          ii: '\u2148',
          iiiint: '\u2A0C',
          iiint: '\u222D',
          iinfin: '\u29DC',
          iiota: '\u2129',
          IJlig: '\u0132',
          ijlig: '\u0133',
          Imacr: '\u012A',
          imacr: '\u012B',
          image: '\u2111',
          ImaginaryI: '\u2148',
          imagline: '\u2110',
          imagpart: '\u2111',
          imath: '\u0131',
          Im: '\u2111',
          imof: '\u22B7',
          imped: '\u01B5',
          Implies: '\u21D2',
          incare: '\u2105',
          in: '\u2208',
          infin: '\u221E',
          infintie: '\u29DD',
          inodot: '\u0131',
          intcal: '\u22BA',
          int: '\u222B',
          Int: '\u222C',
          integers: '\u2124',
          Integral: '\u222B',
          intercal: '\u22BA',
          Intersection: '\u22C2',
          intlarhk: '\u2A17',
          intprod: '\u2A3C',
          InvisibleComma: '\u2063',
          InvisibleTimes: '\u2062',
          IOcy: '\u0401',
          iocy: '\u0451',
          Iogon: '\u012E',
          iogon: '\u012F',
          Iopf: '\u{1D540}',
          iopf: '\u{1D55A}',
          Iota: '\u0399',
          iota: '\u03B9',
          iprod: '\u2A3C',
          iquest: '\xBF',
          iscr: '\u{1D4BE}',
          Iscr: '\u2110',
          isin: '\u2208',
          isindot: '\u22F5',
          isinE: '\u22F9',
          isins: '\u22F4',
          isinsv: '\u22F3',
          isinv: '\u2208',
          it: '\u2062',
          Itilde: '\u0128',
          itilde: '\u0129',
          Iukcy: '\u0406',
          iukcy: '\u0456',
          Iuml: '\xCF',
          iuml: '\xEF',
          Jcirc: '\u0134',
          jcirc: '\u0135',
          Jcy: '\u0419',
          jcy: '\u0439',
          Jfr: '\u{1D50D}',
          jfr: '\u{1D527}',
          jmath: '\u0237',
          Jopf: '\u{1D541}',
          jopf: '\u{1D55B}',
          Jscr: '\u{1D4A5}',
          jscr: '\u{1D4BF}',
          Jsercy: '\u0408',
          jsercy: '\u0458',
          Jukcy: '\u0404',
          jukcy: '\u0454',
          Kappa: '\u039A',
          kappa: '\u03BA',
          kappav: '\u03F0',
          Kcedil: '\u0136',
          kcedil: '\u0137',
          Kcy: '\u041A',
          kcy: '\u043A',
          Kfr: '\u{1D50E}',
          kfr: '\u{1D528}',
          kgreen: '\u0138',
          KHcy: '\u0425',
          khcy: '\u0445',
          KJcy: '\u040C',
          kjcy: '\u045C',
          Kopf: '\u{1D542}',
          kopf: '\u{1D55C}',
          Kscr: '\u{1D4A6}',
          kscr: '\u{1D4C0}',
          lAarr: '\u21DA',
          Lacute: '\u0139',
          lacute: '\u013A',
          laemptyv: '\u29B4',
          lagran: '\u2112',
          Lambda: '\u039B',
          lambda: '\u03BB',
          lang: '\u27E8',
          Lang: '\u27EA',
          langd: '\u2991',
          langle: '\u27E8',
          lap: '\u2A85',
          Laplacetrf: '\u2112',
          laquo: '\xAB',
          larrb: '\u21E4',
          larrbfs: '\u291F',
          larr: '\u2190',
          Larr: '\u219E',
          lArr: '\u21D0',
          larrfs: '\u291D',
          larrhk: '\u21A9',
          larrlp: '\u21AB',
          larrpl: '\u2939',
          larrsim: '\u2973',
          larrtl: '\u21A2',
          latail: '\u2919',
          lAtail: '\u291B',
          lat: '\u2AAB',
          late: '\u2AAD',
          lates: '\u2AAD\uFE00',
          lbarr: '\u290C',
          lBarr: '\u290E',
          lbbrk: '\u2772',
          lbrace: '{',
          lbrack: '[',
          lbrke: '\u298B',
          lbrksld: '\u298F',
          lbrkslu: '\u298D',
          Lcaron: '\u013D',
          lcaron: '\u013E',
          Lcedil: '\u013B',
          lcedil: '\u013C',
          lceil: '\u2308',
          lcub: '{',
          Lcy: '\u041B',
          lcy: '\u043B',
          ldca: '\u2936',
          ldquo: '\u201C',
          ldquor: '\u201E',
          ldrdhar: '\u2967',
          ldrushar: '\u294B',
          ldsh: '\u21B2',
          le: '\u2264',
          lE: '\u2266',
          LeftAngleBracket: '\u27E8',
          LeftArrowBar: '\u21E4',
          leftarrow: '\u2190',
          LeftArrow: '\u2190',
          Leftarrow: '\u21D0',
          LeftArrowRightArrow: '\u21C6',
          leftarrowtail: '\u21A2',
          LeftCeiling: '\u2308',
          LeftDoubleBracket: '\u27E6',
          LeftDownTeeVector: '\u2961',
          LeftDownVectorBar: '\u2959',
          LeftDownVector: '\u21C3',
          LeftFloor: '\u230A',
          leftharpoondown: '\u21BD',
          leftharpoonup: '\u21BC',
          leftleftarrows: '\u21C7',
          leftrightarrow: '\u2194',
          LeftRightArrow: '\u2194',
          Leftrightarrow: '\u21D4',
          leftrightarrows: '\u21C6',
          leftrightharpoons: '\u21CB',
          leftrightsquigarrow: '\u21AD',
          LeftRightVector: '\u294E',
          LeftTeeArrow: '\u21A4',
          LeftTee: '\u22A3',
          LeftTeeVector: '\u295A',
          leftthreetimes: '\u22CB',
          LeftTriangleBar: '\u29CF',
          LeftTriangle: '\u22B2',
          LeftTriangleEqual: '\u22B4',
          LeftUpDownVector: '\u2951',
          LeftUpTeeVector: '\u2960',
          LeftUpVectorBar: '\u2958',
          LeftUpVector: '\u21BF',
          LeftVectorBar: '\u2952',
          LeftVector: '\u21BC',
          lEg: '\u2A8B',
          leg: '\u22DA',
          leq: '\u2264',
          leqq: '\u2266',
          leqslant: '\u2A7D',
          lescc: '\u2AA8',
          les: '\u2A7D',
          lesdot: '\u2A7F',
          lesdoto: '\u2A81',
          lesdotor: '\u2A83',
          lesg: '\u22DA\uFE00',
          lesges: '\u2A93',
          lessapprox: '\u2A85',
          lessdot: '\u22D6',
          lesseqgtr: '\u22DA',
          lesseqqgtr: '\u2A8B',
          LessEqualGreater: '\u22DA',
          LessFullEqual: '\u2266',
          LessGreater: '\u2276',
          lessgtr: '\u2276',
          LessLess: '\u2AA1',
          lesssim: '\u2272',
          LessSlantEqual: '\u2A7D',
          LessTilde: '\u2272',
          lfisht: '\u297C',
          lfloor: '\u230A',
          Lfr: '\u{1D50F}',
          lfr: '\u{1D529}',
          lg: '\u2276',
          lgE: '\u2A91',
          lHar: '\u2962',
          lhard: '\u21BD',
          lharu: '\u21BC',
          lharul: '\u296A',
          lhblk: '\u2584',
          LJcy: '\u0409',
          ljcy: '\u0459',
          llarr: '\u21C7',
          ll: '\u226A',
          Ll: '\u22D8',
          llcorner: '\u231E',
          Lleftarrow: '\u21DA',
          llhard: '\u296B',
          lltri: '\u25FA',
          Lmidot: '\u013F',
          lmidot: '\u0140',
          lmoustache: '\u23B0',
          lmoust: '\u23B0',
          lnap: '\u2A89',
          lnapprox: '\u2A89',
          lne: '\u2A87',
          lnE: '\u2268',
          lneq: '\u2A87',
          lneqq: '\u2268',
          lnsim: '\u22E6',
          loang: '\u27EC',
          loarr: '\u21FD',
          lobrk: '\u27E6',
          longleftarrow: '\u27F5',
          LongLeftArrow: '\u27F5',
          Longleftarrow: '\u27F8',
          longleftrightarrow: '\u27F7',
          LongLeftRightArrow: '\u27F7',
          Longleftrightarrow: '\u27FA',
          longmapsto: '\u27FC',
          longrightarrow: '\u27F6',
          LongRightArrow: '\u27F6',
          Longrightarrow: '\u27F9',
          looparrowleft: '\u21AB',
          looparrowright: '\u21AC',
          lopar: '\u2985',
          Lopf: '\u{1D543}',
          lopf: '\u{1D55D}',
          loplus: '\u2A2D',
          lotimes: '\u2A34',
          lowast: '\u2217',
          lowbar: '_',
          LowerLeftArrow: '\u2199',
          LowerRightArrow: '\u2198',
          loz: '\u25CA',
          lozenge: '\u25CA',
          lozf: '\u29EB',
          lpar: '(',
          lparlt: '\u2993',
          lrarr: '\u21C6',
          lrcorner: '\u231F',
          lrhar: '\u21CB',
          lrhard: '\u296D',
          lrm: '\u200E',
          lrtri: '\u22BF',
          lsaquo: '\u2039',
          lscr: '\u{1D4C1}',
          Lscr: '\u2112',
          lsh: '\u21B0',
          Lsh: '\u21B0',
          lsim: '\u2272',
          lsime: '\u2A8D',
          lsimg: '\u2A8F',
          lsqb: '[',
          lsquo: '\u2018',
          lsquor: '\u201A',
          Lstrok: '\u0141',
          lstrok: '\u0142',
          ltcc: '\u2AA6',
          ltcir: '\u2A79',
          lt: '<',
          LT: '<',
          Lt: '\u226A',
          ltdot: '\u22D6',
          lthree: '\u22CB',
          ltimes: '\u22C9',
          ltlarr: '\u2976',
          ltquest: '\u2A7B',
          ltri: '\u25C3',
          ltrie: '\u22B4',
          ltrif: '\u25C2',
          ltrPar: '\u2996',
          lurdshar: '\u294A',
          luruhar: '\u2966',
          lvertneqq: '\u2268\uFE00',
          lvnE: '\u2268\uFE00',
          macr: '\xAF',
          male: '\u2642',
          malt: '\u2720',
          maltese: '\u2720',
          Map: '\u2905',
          map: '\u21A6',
          mapsto: '\u21A6',
          mapstodown: '\u21A7',
          mapstoleft: '\u21A4',
          mapstoup: '\u21A5',
          marker: '\u25AE',
          mcomma: '\u2A29',
          Mcy: '\u041C',
          mcy: '\u043C',
          mdash: '\u2014',
          mDDot: '\u223A',
          measuredangle: '\u2221',
          MediumSpace: '\u205F',
          Mellintrf: '\u2133',
          Mfr: '\u{1D510}',
          mfr: '\u{1D52A}',
          mho: '\u2127',
          micro: '\xB5',
          midast: '*',
          midcir: '\u2AF0',
          mid: '\u2223',
          middot: '\xB7',
          minusb: '\u229F',
          minus: '\u2212',
          minusd: '\u2238',
          minusdu: '\u2A2A',
          MinusPlus: '\u2213',
          mlcp: '\u2ADB',
          mldr: '\u2026',
          mnplus: '\u2213',
          models: '\u22A7',
          Mopf: '\u{1D544}',
          mopf: '\u{1D55E}',
          mp: '\u2213',
          mscr: '\u{1D4C2}',
          Mscr: '\u2133',
          mstpos: '\u223E',
          Mu: '\u039C',
          mu: '\u03BC',
          multimap: '\u22B8',
          mumap: '\u22B8',
          nabla: '\u2207',
          Nacute: '\u0143',
          nacute: '\u0144',
          nang: '\u2220\u20D2',
          nap: '\u2249',
          napE: '\u2A70\u0338',
          napid: '\u224B\u0338',
          napos: '\u0149',
          napprox: '\u2249',
          natural: '\u266E',
          naturals: '\u2115',
          natur: '\u266E',
          nbsp: '\xA0',
          nbump: '\u224E\u0338',
          nbumpe: '\u224F\u0338',
          ncap: '\u2A43',
          Ncaron: '\u0147',
          ncaron: '\u0148',
          Ncedil: '\u0145',
          ncedil: '\u0146',
          ncong: '\u2247',
          ncongdot: '\u2A6D\u0338',
          ncup: '\u2A42',
          Ncy: '\u041D',
          ncy: '\u043D',
          ndash: '\u2013',
          nearhk: '\u2924',
          nearr: '\u2197',
          neArr: '\u21D7',
          nearrow: '\u2197',
          ne: '\u2260',
          nedot: '\u2250\u0338',
          NegativeMediumSpace: '\u200B',
          NegativeThickSpace: '\u200B',
          NegativeThinSpace: '\u200B',
          NegativeVeryThinSpace: '\u200B',
          nequiv: '\u2262',
          nesear: '\u2928',
          nesim: '\u2242\u0338',
          NestedGreaterGreater: '\u226B',
          NestedLessLess: '\u226A',
          NewLine: `
`,
          nexist: '\u2204',
          nexists: '\u2204',
          Nfr: '\u{1D511}',
          nfr: '\u{1D52B}',
          ngE: '\u2267\u0338',
          nge: '\u2271',
          ngeq: '\u2271',
          ngeqq: '\u2267\u0338',
          ngeqslant: '\u2A7E\u0338',
          nges: '\u2A7E\u0338',
          nGg: '\u22D9\u0338',
          ngsim: '\u2275',
          nGt: '\u226B\u20D2',
          ngt: '\u226F',
          ngtr: '\u226F',
          nGtv: '\u226B\u0338',
          nharr: '\u21AE',
          nhArr: '\u21CE',
          nhpar: '\u2AF2',
          ni: '\u220B',
          nis: '\u22FC',
          nisd: '\u22FA',
          niv: '\u220B',
          NJcy: '\u040A',
          njcy: '\u045A',
          nlarr: '\u219A',
          nlArr: '\u21CD',
          nldr: '\u2025',
          nlE: '\u2266\u0338',
          nle: '\u2270',
          nleftarrow: '\u219A',
          nLeftarrow: '\u21CD',
          nleftrightarrow: '\u21AE',
          nLeftrightarrow: '\u21CE',
          nleq: '\u2270',
          nleqq: '\u2266\u0338',
          nleqslant: '\u2A7D\u0338',
          nles: '\u2A7D\u0338',
          nless: '\u226E',
          nLl: '\u22D8\u0338',
          nlsim: '\u2274',
          nLt: '\u226A\u20D2',
          nlt: '\u226E',
          nltri: '\u22EA',
          nltrie: '\u22EC',
          nLtv: '\u226A\u0338',
          nmid: '\u2224',
          NoBreak: '\u2060',
          NonBreakingSpace: '\xA0',
          nopf: '\u{1D55F}',
          Nopf: '\u2115',
          Not: '\u2AEC',
          not: '\xAC',
          NotCongruent: '\u2262',
          NotCupCap: '\u226D',
          NotDoubleVerticalBar: '\u2226',
          NotElement: '\u2209',
          NotEqual: '\u2260',
          NotEqualTilde: '\u2242\u0338',
          NotExists: '\u2204',
          NotGreater: '\u226F',
          NotGreaterEqual: '\u2271',
          NotGreaterFullEqual: '\u2267\u0338',
          NotGreaterGreater: '\u226B\u0338',
          NotGreaterLess: '\u2279',
          NotGreaterSlantEqual: '\u2A7E\u0338',
          NotGreaterTilde: '\u2275',
          NotHumpDownHump: '\u224E\u0338',
          NotHumpEqual: '\u224F\u0338',
          notin: '\u2209',
          notindot: '\u22F5\u0338',
          notinE: '\u22F9\u0338',
          notinva: '\u2209',
          notinvb: '\u22F7',
          notinvc: '\u22F6',
          NotLeftTriangleBar: '\u29CF\u0338',
          NotLeftTriangle: '\u22EA',
          NotLeftTriangleEqual: '\u22EC',
          NotLess: '\u226E',
          NotLessEqual: '\u2270',
          NotLessGreater: '\u2278',
          NotLessLess: '\u226A\u0338',
          NotLessSlantEqual: '\u2A7D\u0338',
          NotLessTilde: '\u2274',
          NotNestedGreaterGreater: '\u2AA2\u0338',
          NotNestedLessLess: '\u2AA1\u0338',
          notni: '\u220C',
          notniva: '\u220C',
          notnivb: '\u22FE',
          notnivc: '\u22FD',
          NotPrecedes: '\u2280',
          NotPrecedesEqual: '\u2AAF\u0338',
          NotPrecedesSlantEqual: '\u22E0',
          NotReverseElement: '\u220C',
          NotRightTriangleBar: '\u29D0\u0338',
          NotRightTriangle: '\u22EB',
          NotRightTriangleEqual: '\u22ED',
          NotSquareSubset: '\u228F\u0338',
          NotSquareSubsetEqual: '\u22E2',
          NotSquareSuperset: '\u2290\u0338',
          NotSquareSupersetEqual: '\u22E3',
          NotSubset: '\u2282\u20D2',
          NotSubsetEqual: '\u2288',
          NotSucceeds: '\u2281',
          NotSucceedsEqual: '\u2AB0\u0338',
          NotSucceedsSlantEqual: '\u22E1',
          NotSucceedsTilde: '\u227F\u0338',
          NotSuperset: '\u2283\u20D2',
          NotSupersetEqual: '\u2289',
          NotTilde: '\u2241',
          NotTildeEqual: '\u2244',
          NotTildeFullEqual: '\u2247',
          NotTildeTilde: '\u2249',
          NotVerticalBar: '\u2224',
          nparallel: '\u2226',
          npar: '\u2226',
          nparsl: '\u2AFD\u20E5',
          npart: '\u2202\u0338',
          npolint: '\u2A14',
          npr: '\u2280',
          nprcue: '\u22E0',
          nprec: '\u2280',
          npreceq: '\u2AAF\u0338',
          npre: '\u2AAF\u0338',
          nrarrc: '\u2933\u0338',
          nrarr: '\u219B',
          nrArr: '\u21CF',
          nrarrw: '\u219D\u0338',
          nrightarrow: '\u219B',
          nRightarrow: '\u21CF',
          nrtri: '\u22EB',
          nrtrie: '\u22ED',
          nsc: '\u2281',
          nsccue: '\u22E1',
          nsce: '\u2AB0\u0338',
          Nscr: '\u{1D4A9}',
          nscr: '\u{1D4C3}',
          nshortmid: '\u2224',
          nshortparallel: '\u2226',
          nsim: '\u2241',
          nsime: '\u2244',
          nsimeq: '\u2244',
          nsmid: '\u2224',
          nspar: '\u2226',
          nsqsube: '\u22E2',
          nsqsupe: '\u22E3',
          nsub: '\u2284',
          nsubE: '\u2AC5\u0338',
          nsube: '\u2288',
          nsubset: '\u2282\u20D2',
          nsubseteq: '\u2288',
          nsubseteqq: '\u2AC5\u0338',
          nsucc: '\u2281',
          nsucceq: '\u2AB0\u0338',
          nsup: '\u2285',
          nsupE: '\u2AC6\u0338',
          nsupe: '\u2289',
          nsupset: '\u2283\u20D2',
          nsupseteq: '\u2289',
          nsupseteqq: '\u2AC6\u0338',
          ntgl: '\u2279',
          Ntilde: '\xD1',
          ntilde: '\xF1',
          ntlg: '\u2278',
          ntriangleleft: '\u22EA',
          ntrianglelefteq: '\u22EC',
          ntriangleright: '\u22EB',
          ntrianglerighteq: '\u22ED',
          Nu: '\u039D',
          nu: '\u03BD',
          num: '#',
          numero: '\u2116',
          numsp: '\u2007',
          nvap: '\u224D\u20D2',
          nvdash: '\u22AC',
          nvDash: '\u22AD',
          nVdash: '\u22AE',
          nVDash: '\u22AF',
          nvge: '\u2265\u20D2',
          nvgt: '>\u20D2',
          nvHarr: '\u2904',
          nvinfin: '\u29DE',
          nvlArr: '\u2902',
          nvle: '\u2264\u20D2',
          nvlt: '<\u20D2',
          nvltrie: '\u22B4\u20D2',
          nvrArr: '\u2903',
          nvrtrie: '\u22B5\u20D2',
          nvsim: '\u223C\u20D2',
          nwarhk: '\u2923',
          nwarr: '\u2196',
          nwArr: '\u21D6',
          nwarrow: '\u2196',
          nwnear: '\u2927',
          Oacute: '\xD3',
          oacute: '\xF3',
          oast: '\u229B',
          Ocirc: '\xD4',
          ocirc: '\xF4',
          ocir: '\u229A',
          Ocy: '\u041E',
          ocy: '\u043E',
          odash: '\u229D',
          Odblac: '\u0150',
          odblac: '\u0151',
          odiv: '\u2A38',
          odot: '\u2299',
          odsold: '\u29BC',
          OElig: '\u0152',
          oelig: '\u0153',
          ofcir: '\u29BF',
          Ofr: '\u{1D512}',
          ofr: '\u{1D52C}',
          ogon: '\u02DB',
          Ograve: '\xD2',
          ograve: '\xF2',
          ogt: '\u29C1',
          ohbar: '\u29B5',
          ohm: '\u03A9',
          oint: '\u222E',
          olarr: '\u21BA',
          olcir: '\u29BE',
          olcross: '\u29BB',
          oline: '\u203E',
          olt: '\u29C0',
          Omacr: '\u014C',
          omacr: '\u014D',
          Omega: '\u03A9',
          omega: '\u03C9',
          Omicron: '\u039F',
          omicron: '\u03BF',
          omid: '\u29B6',
          ominus: '\u2296',
          Oopf: '\u{1D546}',
          oopf: '\u{1D560}',
          opar: '\u29B7',
          OpenCurlyDoubleQuote: '\u201C',
          OpenCurlyQuote: '\u2018',
          operp: '\u29B9',
          oplus: '\u2295',
          orarr: '\u21BB',
          Or: '\u2A54',
          or: '\u2228',
          ord: '\u2A5D',
          order: '\u2134',
          orderof: '\u2134',
          ordf: '\xAA',
          ordm: '\xBA',
          origof: '\u22B6',
          oror: '\u2A56',
          orslope: '\u2A57',
          orv: '\u2A5B',
          oS: '\u24C8',
          Oscr: '\u{1D4AA}',
          oscr: '\u2134',
          Oslash: '\xD8',
          oslash: '\xF8',
          osol: '\u2298',
          Otilde: '\xD5',
          otilde: '\xF5',
          otimesas: '\u2A36',
          Otimes: '\u2A37',
          otimes: '\u2297',
          Ouml: '\xD6',
          ouml: '\xF6',
          ovbar: '\u233D',
          OverBar: '\u203E',
          OverBrace: '\u23DE',
          OverBracket: '\u23B4',
          OverParenthesis: '\u23DC',
          para: '\xB6',
          parallel: '\u2225',
          par: '\u2225',
          parsim: '\u2AF3',
          parsl: '\u2AFD',
          part: '\u2202',
          PartialD: '\u2202',
          Pcy: '\u041F',
          pcy: '\u043F',
          percnt: '%',
          period: '.',
          permil: '\u2030',
          perp: '\u22A5',
          pertenk: '\u2031',
          Pfr: '\u{1D513}',
          pfr: '\u{1D52D}',
          Phi: '\u03A6',
          phi: '\u03C6',
          phiv: '\u03D5',
          phmmat: '\u2133',
          phone: '\u260E',
          Pi: '\u03A0',
          pi: '\u03C0',
          pitchfork: '\u22D4',
          piv: '\u03D6',
          planck: '\u210F',
          planckh: '\u210E',
          plankv: '\u210F',
          plusacir: '\u2A23',
          plusb: '\u229E',
          pluscir: '\u2A22',
          plus: '+',
          plusdo: '\u2214',
          plusdu: '\u2A25',
          pluse: '\u2A72',
          PlusMinus: '\xB1',
          plusmn: '\xB1',
          plussim: '\u2A26',
          plustwo: '\u2A27',
          pm: '\xB1',
          Poincareplane: '\u210C',
          pointint: '\u2A15',
          popf: '\u{1D561}',
          Popf: '\u2119',
          pound: '\xA3',
          prap: '\u2AB7',
          Pr: '\u2ABB',
          pr: '\u227A',
          prcue: '\u227C',
          precapprox: '\u2AB7',
          prec: '\u227A',
          preccurlyeq: '\u227C',
          Precedes: '\u227A',
          PrecedesEqual: '\u2AAF',
          PrecedesSlantEqual: '\u227C',
          PrecedesTilde: '\u227E',
          preceq: '\u2AAF',
          precnapprox: '\u2AB9',
          precneqq: '\u2AB5',
          precnsim: '\u22E8',
          pre: '\u2AAF',
          prE: '\u2AB3',
          precsim: '\u227E',
          prime: '\u2032',
          Prime: '\u2033',
          primes: '\u2119',
          prnap: '\u2AB9',
          prnE: '\u2AB5',
          prnsim: '\u22E8',
          prod: '\u220F',
          Product: '\u220F',
          profalar: '\u232E',
          profline: '\u2312',
          profsurf: '\u2313',
          prop: '\u221D',
          Proportional: '\u221D',
          Proportion: '\u2237',
          propto: '\u221D',
          prsim: '\u227E',
          prurel: '\u22B0',
          Pscr: '\u{1D4AB}',
          pscr: '\u{1D4C5}',
          Psi: '\u03A8',
          psi: '\u03C8',
          puncsp: '\u2008',
          Qfr: '\u{1D514}',
          qfr: '\u{1D52E}',
          qint: '\u2A0C',
          qopf: '\u{1D562}',
          Qopf: '\u211A',
          qprime: '\u2057',
          Qscr: '\u{1D4AC}',
          qscr: '\u{1D4C6}',
          quaternions: '\u210D',
          quatint: '\u2A16',
          quest: '?',
          questeq: '\u225F',
          quot: '"',
          QUOT: '"',
          rAarr: '\u21DB',
          race: '\u223D\u0331',
          Racute: '\u0154',
          racute: '\u0155',
          radic: '\u221A',
          raemptyv: '\u29B3',
          rang: '\u27E9',
          Rang: '\u27EB',
          rangd: '\u2992',
          range: '\u29A5',
          rangle: '\u27E9',
          raquo: '\xBB',
          rarrap: '\u2975',
          rarrb: '\u21E5',
          rarrbfs: '\u2920',
          rarrc: '\u2933',
          rarr: '\u2192',
          Rarr: '\u21A0',
          rArr: '\u21D2',
          rarrfs: '\u291E',
          rarrhk: '\u21AA',
          rarrlp: '\u21AC',
          rarrpl: '\u2945',
          rarrsim: '\u2974',
          Rarrtl: '\u2916',
          rarrtl: '\u21A3',
          rarrw: '\u219D',
          ratail: '\u291A',
          rAtail: '\u291C',
          ratio: '\u2236',
          rationals: '\u211A',
          rbarr: '\u290D',
          rBarr: '\u290F',
          RBarr: '\u2910',
          rbbrk: '\u2773',
          rbrace: '}',
          rbrack: ']',
          rbrke: '\u298C',
          rbrksld: '\u298E',
          rbrkslu: '\u2990',
          Rcaron: '\u0158',
          rcaron: '\u0159',
          Rcedil: '\u0156',
          rcedil: '\u0157',
          rceil: '\u2309',
          rcub: '}',
          Rcy: '\u0420',
          rcy: '\u0440',
          rdca: '\u2937',
          rdldhar: '\u2969',
          rdquo: '\u201D',
          rdquor: '\u201D',
          rdsh: '\u21B3',
          real: '\u211C',
          realine: '\u211B',
          realpart: '\u211C',
          reals: '\u211D',
          Re: '\u211C',
          rect: '\u25AD',
          reg: '\xAE',
          REG: '\xAE',
          ReverseElement: '\u220B',
          ReverseEquilibrium: '\u21CB',
          ReverseUpEquilibrium: '\u296F',
          rfisht: '\u297D',
          rfloor: '\u230B',
          rfr: '\u{1D52F}',
          Rfr: '\u211C',
          rHar: '\u2964',
          rhard: '\u21C1',
          rharu: '\u21C0',
          rharul: '\u296C',
          Rho: '\u03A1',
          rho: '\u03C1',
          rhov: '\u03F1',
          RightAngleBracket: '\u27E9',
          RightArrowBar: '\u21E5',
          rightarrow: '\u2192',
          RightArrow: '\u2192',
          Rightarrow: '\u21D2',
          RightArrowLeftArrow: '\u21C4',
          rightarrowtail: '\u21A3',
          RightCeiling: '\u2309',
          RightDoubleBracket: '\u27E7',
          RightDownTeeVector: '\u295D',
          RightDownVectorBar: '\u2955',
          RightDownVector: '\u21C2',
          RightFloor: '\u230B',
          rightharpoondown: '\u21C1',
          rightharpoonup: '\u21C0',
          rightleftarrows: '\u21C4',
          rightleftharpoons: '\u21CC',
          rightrightarrows: '\u21C9',
          rightsquigarrow: '\u219D',
          RightTeeArrow: '\u21A6',
          RightTee: '\u22A2',
          RightTeeVector: '\u295B',
          rightthreetimes: '\u22CC',
          RightTriangleBar: '\u29D0',
          RightTriangle: '\u22B3',
          RightTriangleEqual: '\u22B5',
          RightUpDownVector: '\u294F',
          RightUpTeeVector: '\u295C',
          RightUpVectorBar: '\u2954',
          RightUpVector: '\u21BE',
          RightVectorBar: '\u2953',
          RightVector: '\u21C0',
          ring: '\u02DA',
          risingdotseq: '\u2253',
          rlarr: '\u21C4',
          rlhar: '\u21CC',
          rlm: '\u200F',
          rmoustache: '\u23B1',
          rmoust: '\u23B1',
          rnmid: '\u2AEE',
          roang: '\u27ED',
          roarr: '\u21FE',
          robrk: '\u27E7',
          ropar: '\u2986',
          ropf: '\u{1D563}',
          Ropf: '\u211D',
          roplus: '\u2A2E',
          rotimes: '\u2A35',
          RoundImplies: '\u2970',
          rpar: ')',
          rpargt: '\u2994',
          rppolint: '\u2A12',
          rrarr: '\u21C9',
          Rrightarrow: '\u21DB',
          rsaquo: '\u203A',
          rscr: '\u{1D4C7}',
          Rscr: '\u211B',
          rsh: '\u21B1',
          Rsh: '\u21B1',
          rsqb: ']',
          rsquo: '\u2019',
          rsquor: '\u2019',
          rthree: '\u22CC',
          rtimes: '\u22CA',
          rtri: '\u25B9',
          rtrie: '\u22B5',
          rtrif: '\u25B8',
          rtriltri: '\u29CE',
          RuleDelayed: '\u29F4',
          ruluhar: '\u2968',
          rx: '\u211E',
          Sacute: '\u015A',
          sacute: '\u015B',
          sbquo: '\u201A',
          scap: '\u2AB8',
          Scaron: '\u0160',
          scaron: '\u0161',
          Sc: '\u2ABC',
          sc: '\u227B',
          sccue: '\u227D',
          sce: '\u2AB0',
          scE: '\u2AB4',
          Scedil: '\u015E',
          scedil: '\u015F',
          Scirc: '\u015C',
          scirc: '\u015D',
          scnap: '\u2ABA',
          scnE: '\u2AB6',
          scnsim: '\u22E9',
          scpolint: '\u2A13',
          scsim: '\u227F',
          Scy: '\u0421',
          scy: '\u0441',
          sdotb: '\u22A1',
          sdot: '\u22C5',
          sdote: '\u2A66',
          searhk: '\u2925',
          searr: '\u2198',
          seArr: '\u21D8',
          searrow: '\u2198',
          sect: '\xA7',
          semi: ';',
          seswar: '\u2929',
          setminus: '\u2216',
          setmn: '\u2216',
          sext: '\u2736',
          Sfr: '\u{1D516}',
          sfr: '\u{1D530}',
          sfrown: '\u2322',
          sharp: '\u266F',
          SHCHcy: '\u0429',
          shchcy: '\u0449',
          SHcy: '\u0428',
          shcy: '\u0448',
          ShortDownArrow: '\u2193',
          ShortLeftArrow: '\u2190',
          shortmid: '\u2223',
          shortparallel: '\u2225',
          ShortRightArrow: '\u2192',
          ShortUpArrow: '\u2191',
          shy: '\xAD',
          Sigma: '\u03A3',
          sigma: '\u03C3',
          sigmaf: '\u03C2',
          sigmav: '\u03C2',
          sim: '\u223C',
          simdot: '\u2A6A',
          sime: '\u2243',
          simeq: '\u2243',
          simg: '\u2A9E',
          simgE: '\u2AA0',
          siml: '\u2A9D',
          simlE: '\u2A9F',
          simne: '\u2246',
          simplus: '\u2A24',
          simrarr: '\u2972',
          slarr: '\u2190',
          SmallCircle: '\u2218',
          smallsetminus: '\u2216',
          smashp: '\u2A33',
          smeparsl: '\u29E4',
          smid: '\u2223',
          smile: '\u2323',
          smt: '\u2AAA',
          smte: '\u2AAC',
          smtes: '\u2AAC\uFE00',
          SOFTcy: '\u042C',
          softcy: '\u044C',
          solbar: '\u233F',
          solb: '\u29C4',
          sol: '/',
          Sopf: '\u{1D54A}',
          sopf: '\u{1D564}',
          spades: '\u2660',
          spadesuit: '\u2660',
          spar: '\u2225',
          sqcap: '\u2293',
          sqcaps: '\u2293\uFE00',
          sqcup: '\u2294',
          sqcups: '\u2294\uFE00',
          Sqrt: '\u221A',
          sqsub: '\u228F',
          sqsube: '\u2291',
          sqsubset: '\u228F',
          sqsubseteq: '\u2291',
          sqsup: '\u2290',
          sqsupe: '\u2292',
          sqsupset: '\u2290',
          sqsupseteq: '\u2292',
          square: '\u25A1',
          Square: '\u25A1',
          SquareIntersection: '\u2293',
          SquareSubset: '\u228F',
          SquareSubsetEqual: '\u2291',
          SquareSuperset: '\u2290',
          SquareSupersetEqual: '\u2292',
          SquareUnion: '\u2294',
          squarf: '\u25AA',
          squ: '\u25A1',
          squf: '\u25AA',
          srarr: '\u2192',
          Sscr: '\u{1D4AE}',
          sscr: '\u{1D4C8}',
          ssetmn: '\u2216',
          ssmile: '\u2323',
          sstarf: '\u22C6',
          Star: '\u22C6',
          star: '\u2606',
          starf: '\u2605',
          straightepsilon: '\u03F5',
          straightphi: '\u03D5',
          strns: '\xAF',
          sub: '\u2282',
          Sub: '\u22D0',
          subdot: '\u2ABD',
          subE: '\u2AC5',
          sube: '\u2286',
          subedot: '\u2AC3',
          submult: '\u2AC1',
          subnE: '\u2ACB',
          subne: '\u228A',
          subplus: '\u2ABF',
          subrarr: '\u2979',
          subset: '\u2282',
          Subset: '\u22D0',
          subseteq: '\u2286',
          subseteqq: '\u2AC5',
          SubsetEqual: '\u2286',
          subsetneq: '\u228A',
          subsetneqq: '\u2ACB',
          subsim: '\u2AC7',
          subsub: '\u2AD5',
          subsup: '\u2AD3',
          succapprox: '\u2AB8',
          succ: '\u227B',
          succcurlyeq: '\u227D',
          Succeeds: '\u227B',
          SucceedsEqual: '\u2AB0',
          SucceedsSlantEqual: '\u227D',
          SucceedsTilde: '\u227F',
          succeq: '\u2AB0',
          succnapprox: '\u2ABA',
          succneqq: '\u2AB6',
          succnsim: '\u22E9',
          succsim: '\u227F',
          SuchThat: '\u220B',
          sum: '\u2211',
          Sum: '\u2211',
          sung: '\u266A',
          sup1: '\xB9',
          sup2: '\xB2',
          sup3: '\xB3',
          sup: '\u2283',
          Sup: '\u22D1',
          supdot: '\u2ABE',
          supdsub: '\u2AD8',
          supE: '\u2AC6',
          supe: '\u2287',
          supedot: '\u2AC4',
          Superset: '\u2283',
          SupersetEqual: '\u2287',
          suphsol: '\u27C9',
          suphsub: '\u2AD7',
          suplarr: '\u297B',
          supmult: '\u2AC2',
          supnE: '\u2ACC',
          supne: '\u228B',
          supplus: '\u2AC0',
          supset: '\u2283',
          Supset: '\u22D1',
          supseteq: '\u2287',
          supseteqq: '\u2AC6',
          supsetneq: '\u228B',
          supsetneqq: '\u2ACC',
          supsim: '\u2AC8',
          supsub: '\u2AD4',
          supsup: '\u2AD6',
          swarhk: '\u2926',
          swarr: '\u2199',
          swArr: '\u21D9',
          swarrow: '\u2199',
          swnwar: '\u292A',
          szlig: '\xDF',
          Tab: '	',
          target: '\u2316',
          Tau: '\u03A4',
          tau: '\u03C4',
          tbrk: '\u23B4',
          Tcaron: '\u0164',
          tcaron: '\u0165',
          Tcedil: '\u0162',
          tcedil: '\u0163',
          Tcy: '\u0422',
          tcy: '\u0442',
          tdot: '\u20DB',
          telrec: '\u2315',
          Tfr: '\u{1D517}',
          tfr: '\u{1D531}',
          there4: '\u2234',
          therefore: '\u2234',
          Therefore: '\u2234',
          Theta: '\u0398',
          theta: '\u03B8',
          thetasym: '\u03D1',
          thetav: '\u03D1',
          thickapprox: '\u2248',
          thicksim: '\u223C',
          ThickSpace: '\u205F\u200A',
          ThinSpace: '\u2009',
          thinsp: '\u2009',
          thkap: '\u2248',
          thksim: '\u223C',
          THORN: '\xDE',
          thorn: '\xFE',
          tilde: '\u02DC',
          Tilde: '\u223C',
          TildeEqual: '\u2243',
          TildeFullEqual: '\u2245',
          TildeTilde: '\u2248',
          timesbar: '\u2A31',
          timesb: '\u22A0',
          times: '\xD7',
          timesd: '\u2A30',
          tint: '\u222D',
          toea: '\u2928',
          topbot: '\u2336',
          topcir: '\u2AF1',
          top: '\u22A4',
          Topf: '\u{1D54B}',
          topf: '\u{1D565}',
          topfork: '\u2ADA',
          tosa: '\u2929',
          tprime: '\u2034',
          trade: '\u2122',
          TRADE: '\u2122',
          triangle: '\u25B5',
          triangledown: '\u25BF',
          triangleleft: '\u25C3',
          trianglelefteq: '\u22B4',
          triangleq: '\u225C',
          triangleright: '\u25B9',
          trianglerighteq: '\u22B5',
          tridot: '\u25EC',
          trie: '\u225C',
          triminus: '\u2A3A',
          TripleDot: '\u20DB',
          triplus: '\u2A39',
          trisb: '\u29CD',
          tritime: '\u2A3B',
          trpezium: '\u23E2',
          Tscr: '\u{1D4AF}',
          tscr: '\u{1D4C9}',
          TScy: '\u0426',
          tscy: '\u0446',
          TSHcy: '\u040B',
          tshcy: '\u045B',
          Tstrok: '\u0166',
          tstrok: '\u0167',
          twixt: '\u226C',
          twoheadleftarrow: '\u219E',
          twoheadrightarrow: '\u21A0',
          Uacute: '\xDA',
          uacute: '\xFA',
          uarr: '\u2191',
          Uarr: '\u219F',
          uArr: '\u21D1',
          Uarrocir: '\u2949',
          Ubrcy: '\u040E',
          ubrcy: '\u045E',
          Ubreve: '\u016C',
          ubreve: '\u016D',
          Ucirc: '\xDB',
          ucirc: '\xFB',
          Ucy: '\u0423',
          ucy: '\u0443',
          udarr: '\u21C5',
          Udblac: '\u0170',
          udblac: '\u0171',
          udhar: '\u296E',
          ufisht: '\u297E',
          Ufr: '\u{1D518}',
          ufr: '\u{1D532}',
          Ugrave: '\xD9',
          ugrave: '\xF9',
          uHar: '\u2963',
          uharl: '\u21BF',
          uharr: '\u21BE',
          uhblk: '\u2580',
          ulcorn: '\u231C',
          ulcorner: '\u231C',
          ulcrop: '\u230F',
          ultri: '\u25F8',
          Umacr: '\u016A',
          umacr: '\u016B',
          uml: '\xA8',
          UnderBar: '_',
          UnderBrace: '\u23DF',
          UnderBracket: '\u23B5',
          UnderParenthesis: '\u23DD',
          Union: '\u22C3',
          UnionPlus: '\u228E',
          Uogon: '\u0172',
          uogon: '\u0173',
          Uopf: '\u{1D54C}',
          uopf: '\u{1D566}',
          UpArrowBar: '\u2912',
          uparrow: '\u2191',
          UpArrow: '\u2191',
          Uparrow: '\u21D1',
          UpArrowDownArrow: '\u21C5',
          updownarrow: '\u2195',
          UpDownArrow: '\u2195',
          Updownarrow: '\u21D5',
          UpEquilibrium: '\u296E',
          upharpoonleft: '\u21BF',
          upharpoonright: '\u21BE',
          uplus: '\u228E',
          UpperLeftArrow: '\u2196',
          UpperRightArrow: '\u2197',
          upsi: '\u03C5',
          Upsi: '\u03D2',
          upsih: '\u03D2',
          Upsilon: '\u03A5',
          upsilon: '\u03C5',
          UpTeeArrow: '\u21A5',
          UpTee: '\u22A5',
          upuparrows: '\u21C8',
          urcorn: '\u231D',
          urcorner: '\u231D',
          urcrop: '\u230E',
          Uring: '\u016E',
          uring: '\u016F',
          urtri: '\u25F9',
          Uscr: '\u{1D4B0}',
          uscr: '\u{1D4CA}',
          utdot: '\u22F0',
          Utilde: '\u0168',
          utilde: '\u0169',
          utri: '\u25B5',
          utrif: '\u25B4',
          uuarr: '\u21C8',
          Uuml: '\xDC',
          uuml: '\xFC',
          uwangle: '\u29A7',
          vangrt: '\u299C',
          varepsilon: '\u03F5',
          varkappa: '\u03F0',
          varnothing: '\u2205',
          varphi: '\u03D5',
          varpi: '\u03D6',
          varpropto: '\u221D',
          varr: '\u2195',
          vArr: '\u21D5',
          varrho: '\u03F1',
          varsigma: '\u03C2',
          varsubsetneq: '\u228A\uFE00',
          varsubsetneqq: '\u2ACB\uFE00',
          varsupsetneq: '\u228B\uFE00',
          varsupsetneqq: '\u2ACC\uFE00',
          vartheta: '\u03D1',
          vartriangleleft: '\u22B2',
          vartriangleright: '\u22B3',
          vBar: '\u2AE8',
          Vbar: '\u2AEB',
          vBarv: '\u2AE9',
          Vcy: '\u0412',
          vcy: '\u0432',
          vdash: '\u22A2',
          vDash: '\u22A8',
          Vdash: '\u22A9',
          VDash: '\u22AB',
          Vdashl: '\u2AE6',
          veebar: '\u22BB',
          vee: '\u2228',
          Vee: '\u22C1',
          veeeq: '\u225A',
          vellip: '\u22EE',
          verbar: '|',
          Verbar: '\u2016',
          vert: '|',
          Vert: '\u2016',
          VerticalBar: '\u2223',
          VerticalLine: '|',
          VerticalSeparator: '\u2758',
          VerticalTilde: '\u2240',
          VeryThinSpace: '\u200A',
          Vfr: '\u{1D519}',
          vfr: '\u{1D533}',
          vltri: '\u22B2',
          vnsub: '\u2282\u20D2',
          vnsup: '\u2283\u20D2',
          Vopf: '\u{1D54D}',
          vopf: '\u{1D567}',
          vprop: '\u221D',
          vrtri: '\u22B3',
          Vscr: '\u{1D4B1}',
          vscr: '\u{1D4CB}',
          vsubnE: '\u2ACB\uFE00',
          vsubne: '\u228A\uFE00',
          vsupnE: '\u2ACC\uFE00',
          vsupne: '\u228B\uFE00',
          Vvdash: '\u22AA',
          vzigzag: '\u299A',
          Wcirc: '\u0174',
          wcirc: '\u0175',
          wedbar: '\u2A5F',
          wedge: '\u2227',
          Wedge: '\u22C0',
          wedgeq: '\u2259',
          weierp: '\u2118',
          Wfr: '\u{1D51A}',
          wfr: '\u{1D534}',
          Wopf: '\u{1D54E}',
          wopf: '\u{1D568}',
          wp: '\u2118',
          wr: '\u2240',
          wreath: '\u2240',
          Wscr: '\u{1D4B2}',
          wscr: '\u{1D4CC}',
          xcap: '\u22C2',
          xcirc: '\u25EF',
          xcup: '\u22C3',
          xdtri: '\u25BD',
          Xfr: '\u{1D51B}',
          xfr: '\u{1D535}',
          xharr: '\u27F7',
          xhArr: '\u27FA',
          Xi: '\u039E',
          xi: '\u03BE',
          xlarr: '\u27F5',
          xlArr: '\u27F8',
          xmap: '\u27FC',
          xnis: '\u22FB',
          xodot: '\u2A00',
          Xopf: '\u{1D54F}',
          xopf: '\u{1D569}',
          xoplus: '\u2A01',
          xotime: '\u2A02',
          xrarr: '\u27F6',
          xrArr: '\u27F9',
          Xscr: '\u{1D4B3}',
          xscr: '\u{1D4CD}',
          xsqcup: '\u2A06',
          xuplus: '\u2A04',
          xutri: '\u25B3',
          xvee: '\u22C1',
          xwedge: '\u22C0',
          Yacute: '\xDD',
          yacute: '\xFD',
          YAcy: '\u042F',
          yacy: '\u044F',
          Ycirc: '\u0176',
          ycirc: '\u0177',
          Ycy: '\u042B',
          ycy: '\u044B',
          yen: '\xA5',
          Yfr: '\u{1D51C}',
          yfr: '\u{1D536}',
          YIcy: '\u0407',
          yicy: '\u0457',
          Yopf: '\u{1D550}',
          yopf: '\u{1D56A}',
          Yscr: '\u{1D4B4}',
          yscr: '\u{1D4CE}',
          YUcy: '\u042E',
          yucy: '\u044E',
          yuml: '\xFF',
          Yuml: '\u0178',
          Zacute: '\u0179',
          zacute: '\u017A',
          Zcaron: '\u017D',
          zcaron: '\u017E',
          Zcy: '\u0417',
          zcy: '\u0437',
          Zdot: '\u017B',
          zdot: '\u017C',
          zeetrf: '\u2128',
          ZeroWidthSpace: '\u200B',
          Zeta: '\u0396',
          zeta: '\u03B6',
          zfr: '\u{1D537}',
          Zfr: '\u2128',
          ZHcy: '\u0416',
          zhcy: '\u0436',
          zigrarr: '\u21DD',
          zopf: '\u{1D56B}',
          Zopf: '\u2124',
          Zscr: '\u{1D4B5}',
          zscr: '\u{1D4CF}',
          zwj: '\u200D',
          zwnj: '\u200C',
        }
      }),
      Am = Se((e, t) => {
        t.exports = {
          Aacute: '\xC1',
          aacute: '\xE1',
          Acirc: '\xC2',
          acirc: '\xE2',
          acute: '\xB4',
          AElig: '\xC6',
          aelig: '\xE6',
          Agrave: '\xC0',
          agrave: '\xE0',
          amp: '&',
          AMP: '&',
          Aring: '\xC5',
          aring: '\xE5',
          Atilde: '\xC3',
          atilde: '\xE3',
          Auml: '\xC4',
          auml: '\xE4',
          brvbar: '\xA6',
          Ccedil: '\xC7',
          ccedil: '\xE7',
          cedil: '\xB8',
          cent: '\xA2',
          copy: '\xA9',
          COPY: '\xA9',
          curren: '\xA4',
          deg: '\xB0',
          divide: '\xF7',
          Eacute: '\xC9',
          eacute: '\xE9',
          Ecirc: '\xCA',
          ecirc: '\xEA',
          Egrave: '\xC8',
          egrave: '\xE8',
          ETH: '\xD0',
          eth: '\xF0',
          Euml: '\xCB',
          euml: '\xEB',
          frac12: '\xBD',
          frac14: '\xBC',
          frac34: '\xBE',
          gt: '>',
          GT: '>',
          Iacute: '\xCD',
          iacute: '\xED',
          Icirc: '\xCE',
          icirc: '\xEE',
          iexcl: '\xA1',
          Igrave: '\xCC',
          igrave: '\xEC',
          iquest: '\xBF',
          Iuml: '\xCF',
          iuml: '\xEF',
          laquo: '\xAB',
          lt: '<',
          LT: '<',
          macr: '\xAF',
          micro: '\xB5',
          middot: '\xB7',
          nbsp: '\xA0',
          not: '\xAC',
          Ntilde: '\xD1',
          ntilde: '\xF1',
          Oacute: '\xD3',
          oacute: '\xF3',
          Ocirc: '\xD4',
          ocirc: '\xF4',
          Ograve: '\xD2',
          ograve: '\xF2',
          ordf: '\xAA',
          ordm: '\xBA',
          Oslash: '\xD8',
          oslash: '\xF8',
          Otilde: '\xD5',
          otilde: '\xF5',
          Ouml: '\xD6',
          ouml: '\xF6',
          para: '\xB6',
          plusmn: '\xB1',
          pound: '\xA3',
          quot: '"',
          QUOT: '"',
          raquo: '\xBB',
          reg: '\xAE',
          REG: '\xAE',
          sect: '\xA7',
          shy: '\xAD',
          sup1: '\xB9',
          sup2: '\xB2',
          sup3: '\xB3',
          szlig: '\xDF',
          THORN: '\xDE',
          thorn: '\xFE',
          times: '\xD7',
          Uacute: '\xDA',
          uacute: '\xFA',
          Ucirc: '\xDB',
          ucirc: '\xFB',
          Ugrave: '\xD9',
          ugrave: '\xF9',
          uml: '\xA8',
          Uuml: '\xDC',
          uuml: '\xFC',
          Yacute: '\xDD',
          yacute: '\xFD',
          yen: '\xA5',
          yuml: '\xFF',
        }
      }),
      wp = Se((e, t) => {
        t.exports = { amp: '&', apos: "'", gt: '>', lt: '<', quot: '"' }
      }),
      wm = Se((e, t) => {
        t.exports = {
          0: 65533,
          128: 8364,
          130: 8218,
          131: 402,
          132: 8222,
          133: 8230,
          134: 8224,
          135: 8225,
          136: 710,
          137: 8240,
          138: 352,
          139: 8249,
          140: 338,
          142: 381,
          145: 8216,
          146: 8217,
          147: 8220,
          148: 8221,
          149: 8226,
          150: 8211,
          151: 8212,
          152: 732,
          153: 8482,
          154: 353,
          155: 8250,
          156: 339,
          158: 382,
          159: 376,
        }
      }),
      Sm = Se((e) => {
        'use strict'
        const t =
          (e && e.__importDefault) ||
          function (i) {
            return i && i.__esModule ? i : { default: i }
          }
        Object.defineProperty(e, '__esModule', { value: !0 })
        const r = t(wm()),
          n =
            String.fromCodePoint ||
            function (i) {
              let a = ''
              return (
                i > 65535 &&
                  ((i -= 65536),
                  (a += String.fromCharCode(((i >>> 10) & 1023) | 55296)),
                  (i = 56320 | (i & 1023))),
                (a += String.fromCharCode(i)),
                a
              )
            }
        function o(i) {
          return (i >= 55296 && i <= 57343) || i > 1114111
            ? '\uFFFD'
            : (i in r.default && (i = r.default[i]), n(i))
        }
        ;(d(o, 'decodeCodePoint'), (e.default = o))
      }),
      Bc = Se((e) => {
        'use strict'
        const t =
          (e && e.__importDefault) ||
          function (c) {
            return c && c.__esModule ? c : { default: c }
          }
        ;(Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.decodeHTML = e.decodeHTMLStrict = e.decodeXML = void 0))
        const r = t(Ap()),
          n = t(Am()),
          o = t(wp()),
          i = t(Sm()),
          a = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g
        ;((e.decodeXML = u(o.default)), (e.decodeHTMLStrict = u(r.default)))
        function u(c) {
          const p = l(c)
          return function (g) {
            return String(g).replace(a, p)
          }
        }
        d(u, 'getStrictDecoder')
        const s = d(function (c, p) {
          return c < p ? 1 : -1
        }, 'sorter')
        e.decodeHTML = (function () {
          for (
            var c = Object.keys(n.default).sort(s),
              p = Object.keys(r.default).sort(s),
              g = 0,
              m = 0;
            g < p.length;
            g++
          )
            c[m] === p[g] ? ((p[g] += ';?'), m++) : (p[g] += ';')
          const A = new RegExp(
              `&(?:${p.join('|')}|#[xX][\\da-fA-F]+;?|#\\d+;?)`,
              'g'
            ),
            b = l(r.default)
          function E(x) {
            return (x.substr(-1) !== ';' && (x += ';'), b(x))
          }
          return (
            d(E, 'replacer'),
            function (x) {
              return String(x).replace(A, E)
            }
          )
        })()
        function l(c) {
          return d(function (p) {
            if (p.charAt(1) === '#') {
              const g = p.charAt(2)
              return g === 'X' || g === 'x'
                ? i.default(parseInt(p.substr(3), 16))
                : i.default(parseInt(p.substr(2), 10))
            }
            return c[p.slice(1, -1)] || p
          }, 'replace')
        }
        d(l, 'getReplacer')
      }),
      Pc = Se((e) => {
        'use strict'
        const t =
          (e && e.__importDefault) ||
          function (C) {
            return C && C.__esModule ? C : { default: C }
          }
        ;(Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.escapeUTF8 =
            e.escape =
            e.encodeNonAsciiHTML =
            e.encodeHTML =
            e.encodeXML =
              void 0))
        const r = t(wp()),
          n = s(r.default),
          o = l(n)
        e.encodeXML = x(n)
        const i = t(Ap()),
          a = s(i.default),
          u = l(a)
        ;((e.encodeHTML = m(a, u)), (e.encodeNonAsciiHTML = x(a)))
        function s(C) {
          return Object.keys(C)
            .sort()
            .reduce(function (_, D) {
              return ((_[C[D]] = `&${D};`), _)
            }, {})
        }
        d(s, 'getInverseObj')
        function l(C) {
          for (
            var _ = [], D = [], I = 0, T = Object.keys(C);
            I < T.length;
            I++
          ) {
            const S = T[I]
            S.length === 1 ? _.push(`\\${S}`) : D.push(S)
          }
          _.sort()
          for (let O = 0; O < _.length - 1; O++) {
            for (
              var F = O;
              F < _.length - 1 &&
              _[F].charCodeAt(1) + 1 === _[F + 1].charCodeAt(1);

            )
              F += 1
            const $ = 1 + F - O
            $ < 3 || _.splice(O, $, `${_[O]}-${_[F]}`)
          }
          return (D.unshift(`[${_.join('')}]`), new RegExp(D.join('|'), 'g'))
        }
        d(l, 'getInverseReplacer')
        const c =
            /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
          p =
            String.prototype.codePointAt != null
              ? function (C) {
                  return C.codePointAt(0)
                }
              : function (C) {
                  return (
                    (C.charCodeAt(0) - 55296) * 1024 +
                    C.charCodeAt(1) -
                    56320 +
                    65536
                  )
                }
        function g(C) {
          return `&#x${(C.length > 1 ? p(C) : C.charCodeAt(0)).toString(16).toUpperCase()};`
        }
        d(g, 'singleCharReplacer')
        function m(C, _) {
          return function (D) {
            return D.replace(_, function (I) {
              return C[I]
            }).replace(c, g)
          }
        }
        d(m, 'getInverse')
        const A = new RegExp(`${o.source}|${c.source}`, 'g')
        function b(C) {
          return C.replace(A, g)
        }
        ;(d(b, 'escape'), (e.escape = b))
        function E(C) {
          return C.replace(o, g)
        }
        ;(d(E, 'escapeUTF8'), (e.escapeUTF8 = E))
        function x(C) {
          return function (_) {
            return _.replace(A, function (D) {
              return C[D] || g(D)
            })
          }
        }
        d(x, 'getASCIIEncoder')
      }),
      vm = Se((e) => {
        'use strict'
        ;(Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.decodeXMLStrict =
            e.decodeHTML5Strict =
            e.decodeHTML4Strict =
            e.decodeHTML5 =
            e.decodeHTML4 =
            e.decodeHTMLStrict =
            e.decodeHTML =
            e.decodeXML =
            e.encodeHTML5 =
            e.encodeHTML4 =
            e.escapeUTF8 =
            e.escape =
            e.encodeNonAsciiHTML =
            e.encodeHTML =
            e.encodeXML =
            e.encode =
            e.decodeStrict =
            e.decode =
              void 0))
        const t = Bc(),
          r = Pc()
        function n(s, l) {
          return (!l || l <= 0 ? t.decodeXML : t.decodeHTML)(s)
        }
        ;(d(n, 'decode'), (e.decode = n))
        function o(s, l) {
          return (!l || l <= 0 ? t.decodeXML : t.decodeHTMLStrict)(s)
        }
        ;(d(o, 'decodeStrict'), (e.decodeStrict = o))
        function i(s, l) {
          return (!l || l <= 0 ? r.encodeXML : r.encodeHTML)(s)
        }
        ;(d(i, 'encode'), (e.encode = i))
        const a = Pc()
        ;(Object.defineProperty(e, 'encodeXML', {
          enumerable: !0,
          get: d(function () {
            return a.encodeXML
          }, 'get'),
        }),
          Object.defineProperty(e, 'encodeHTML', {
            enumerable: !0,
            get: d(function () {
              return a.encodeHTML
            }, 'get'),
          }),
          Object.defineProperty(e, 'encodeNonAsciiHTML', {
            enumerable: !0,
            get: d(function () {
              return a.encodeNonAsciiHTML
            }, 'get'),
          }),
          Object.defineProperty(e, 'escape', {
            enumerable: !0,
            get: d(function () {
              return a.escape
            }, 'get'),
          }),
          Object.defineProperty(e, 'escapeUTF8', {
            enumerable: !0,
            get: d(function () {
              return a.escapeUTF8
            }, 'get'),
          }),
          Object.defineProperty(e, 'encodeHTML4', {
            enumerable: !0,
            get: d(function () {
              return a.encodeHTML
            }, 'get'),
          }),
          Object.defineProperty(e, 'encodeHTML5', {
            enumerable: !0,
            get: d(function () {
              return a.encodeHTML
            }, 'get'),
          }))
        const u = Bc()
        ;(Object.defineProperty(e, 'decodeXML', {
          enumerable: !0,
          get: d(function () {
            return u.decodeXML
          }, 'get'),
        }),
          Object.defineProperty(e, 'decodeHTML', {
            enumerable: !0,
            get: d(function () {
              return u.decodeHTML
            }, 'get'),
          }),
          Object.defineProperty(e, 'decodeHTMLStrict', {
            enumerable: !0,
            get: d(function () {
              return u.decodeHTMLStrict
            }, 'get'),
          }),
          Object.defineProperty(e, 'decodeHTML4', {
            enumerable: !0,
            get: d(function () {
              return u.decodeHTML
            }, 'get'),
          }),
          Object.defineProperty(e, 'decodeHTML5', {
            enumerable: !0,
            get: d(function () {
              return u.decodeHTML
            }, 'get'),
          }),
          Object.defineProperty(e, 'decodeHTML4Strict', {
            enumerable: !0,
            get: d(function () {
              return u.decodeHTMLStrict
            }, 'get'),
          }),
          Object.defineProperty(e, 'decodeHTML5Strict', {
            enumerable: !0,
            get: d(function () {
              return u.decodeHTMLStrict
            }, 'get'),
          }),
          Object.defineProperty(e, 'decodeXMLStrict', {
            enumerable: !0,
            get: d(function () {
              return u.decodeXML
            }, 'get'),
          }))
      }),
      Cm = Se((e, t) => {
        'use strict'
        function r(h, f) {
          if (!(h instanceof f))
            throw new TypeError('Cannot call a class as a function')
        }
        d(r, '_classCallCheck')
        function n(h, f) {
          for (let v = 0; v < f.length; v++) {
            const B = f[v]
            ;((B.enumerable = B.enumerable || !1),
              (B.configurable = !0),
              'value' in B && (B.writable = !0),
              Object.defineProperty(h, B.key, B))
          }
        }
        d(n, '_defineProperties')
        function o(h, f, v) {
          return (f && n(h.prototype, f), v && n(h, v), h)
        }
        d(o, '_createClass')
        function i(h, f) {
          let v = (typeof Symbol < 'u' && h[Symbol.iterator]) || h['@@iterator']
          if (!v) {
            if (
              Array.isArray(h) ||
              (v = a(h)) ||
              (f && h && typeof h.length === 'number')
            ) {
              v && (h = v)
              let B = 0,
                R = d(function () {}, 'F')
              return {
                s: R,
                n: d(function () {
                  return B >= h.length
                    ? { done: !0 }
                    : { done: !1, value: h[B++] }
                }, 'n'),
                e: d(function (z) {
                  throw z
                }, 'e'),
                f: R,
              }
            }
            throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          let L = !0,
            N = !1,
            M
          return {
            s: d(function () {
              v = v.call(h)
            }, 's'),
            n: d(function () {
              const z = v.next()
              return ((L = z.done), z)
            }, 'n'),
            e: d(function (z) {
              ;((N = !0), (M = z))
            }, 'e'),
            f: d(function () {
              try {
                !L && v.return != null && v.return()
              } finally {
                if (N) throw M
              }
            }, 'f'),
          }
        }
        d(i, '_createForOfIteratorHelper')
        function a(h, f) {
          if (h) {
            if (typeof h === 'string') return u(h, f)
            let v = Object.prototype.toString.call(h).slice(8, -1)
            if (
              (v === 'Object' && h.constructor && (v = h.constructor.name),
              v === 'Map' || v === 'Set')
            )
              return Array.from(h)
            if (
              v === 'Arguments' ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v)
            )
              return u(h, f)
          }
        }
        d(a, '_unsupportedIterableToArray')
        function u(h, f) {
          ;(f == null || f > h.length) && (f = h.length)
          for (var v = 0, B = new Array(f); v < f; v++) B[v] = h[v]
          return B
        }
        d(u, '_arrayLikeToArray')
        const s = vm(),
          l = {
            fg: '#FFF',
            bg: '#000',
            newline: !1,
            escapeXML: !1,
            stream: !1,
            colors: c(),
          }
        function c() {
          const h = {
            0: '#000',
            1: '#A00',
            2: '#0A0',
            3: '#A50',
            4: '#00A',
            5: '#A0A',
            6: '#0AA',
            7: '#AAA',
            8: '#555',
            9: '#F55',
            10: '#5F5',
            11: '#FF5',
            12: '#55F',
            13: '#F5F',
            14: '#5FF',
            15: '#FFF',
          }
          return (
            C(0, 5).forEach(function (f) {
              C(0, 5).forEach(function (v) {
                C(0, 5).forEach(function (B) {
                  return p(f, v, B, h)
                })
              })
            }),
            C(0, 23).forEach(function (f) {
              const v = f + 232,
                B = g(f * 10 + 8)
              h[v] = `#${B}${B}${B}`
            }),
            h
          )
        }
        d(c, 'getDefaultColors')
        function p(h, f, v, B) {
          const R = 16 + h * 36 + f * 6 + v,
            L = h > 0 ? h * 40 + 55 : 0,
            N = f > 0 ? f * 40 + 55 : 0,
            M = v > 0 ? v * 40 + 55 : 0
          B[R] = m([L, N, M])
        }
        d(p, 'setStyleColor')
        function g(h) {
          for (var f = h.toString(16); f.length < 2; ) f = `0${f}`
          return f
        }
        d(g, 'toHexString')
        function m(h) {
          let f = [],
            v = i(h),
            B
          try {
            for (v.s(); !(B = v.n()).done; ) {
              const R = B.value
              f.push(g(R))
            }
          } catch (L) {
            v.e(L)
          } finally {
            v.f()
          }
          return `#${f.join('')}`
        }
        d(m, 'toColorHexString')
        function A(h, f, v, B) {
          let R
          return (
            f === 'text'
              ? (R = I(v, B))
              : f === 'display'
                ? (R = E(h, v, B))
                : f === 'xterm256Foreground'
                  ? (R = O(h, B.colors[v]))
                  : f === 'xterm256Background'
                    ? (R = F(h, B.colors[v]))
                    : f === 'rgb' && (R = b(h, v)),
            R
          )
        }
        d(A, 'generateOutput')
        function b(h, f) {
          f = f.substring(2).slice(0, -1)
          const v = +f.substr(0, 2),
            B = f.substring(5).split(';'),
            R = B.map(function (L) {
              return `0${Number(L).toString(16)}`.substr(-2)
            }).join('')
          return S(h, (v === 38 ? 'color:#' : 'background-color:#') + R)
        }
        d(b, 'handleRgb')
        function E(h, f, v) {
          f = parseInt(f, 10)
          let B = {
              '-1': d(function () {
                return '<br/>'
              }, '_'),
              0: d(function () {
                return h.length && x(h)
              }, '_'),
              1: d(function () {
                return T(h, 'b')
              }, '_'),
              3: d(function () {
                return T(h, 'i')
              }, '_'),
              4: d(function () {
                return T(h, 'u')
              }, '_'),
              8: d(function () {
                return S(h, 'display:none')
              }, '_'),
              9: d(function () {
                return T(h, 'strike')
              }, '_'),
              22: d(function () {
                return S(
                  h,
                  'font-weight:normal;text-decoration:none;font-style:normal'
                )
              }, '_'),
              23: d(function () {
                return $(h, 'i')
              }, '_'),
              24: d(function () {
                return $(h, 'u')
              }, '_'),
              39: d(function () {
                return O(h, v.fg)
              }, '_'),
              49: d(function () {
                return F(h, v.bg)
              }, '_'),
              53: d(function () {
                return S(h, 'text-decoration:overline')
              }, '_'),
            },
            R
          return (
            B[f]
              ? (R = B[f]())
              : 4 < f && f < 7
                ? (R = T(h, 'blink'))
                : 29 < f && f < 38
                  ? (R = O(h, v.colors[f - 30]))
                  : 39 < f && f < 48
                    ? (R = F(h, v.colors[f - 40]))
                    : 89 < f && f < 98
                      ? (R = O(h, v.colors[8 + (f - 90)]))
                      : 99 < f &&
                        f < 108 &&
                        (R = F(h, v.colors[8 + (f - 100)])),
            R
          )
        }
        d(E, 'handleDisplay')
        function x(h) {
          const f = h.slice(0)
          return (
            (h.length = 0),
            f
              .reverse()
              .map(function (v) {
                return `</${v}>`
              })
              .join('')
          )
        }
        d(x, 'resetStyles')
        function C(h, f) {
          for (var v = [], B = h; B <= f; B++) v.push(B)
          return v
        }
        d(C, 'range')
        function _(h) {
          return function (f) {
            return (h === null || f.category !== h) && h !== 'all'
          }
        }
        d(_, 'notCategory')
        function D(h) {
          h = parseInt(h, 10)
          let f = null
          return (
            h === 0
              ? (f = 'all')
              : h === 1
                ? (f = 'bold')
                : 2 < h && h < 5
                  ? (f = 'underline')
                  : 4 < h && h < 7
                    ? (f = 'blink')
                    : h === 8
                      ? (f = 'hide')
                      : h === 9
                        ? (f = 'strike')
                        : (29 < h && h < 38) || h === 39 || (89 < h && h < 98)
                          ? (f = 'foreground-color')
                          : ((39 < h && h < 48) ||
                              h === 49 ||
                              (99 < h && h < 108)) &&
                            (f = 'background-color'),
            f
          )
        }
        d(D, 'categoryForCode')
        function I(h, f) {
          return f.escapeXML ? s.encodeXML(h) : h
        }
        d(I, 'pushText')
        function T(h, f, v) {
          return (
            v || (v = ''),
            h.push(f),
            '<'.concat(f).concat(v ? ' style="'.concat(v, '"') : '', '>')
          )
        }
        d(T, 'pushTag')
        function S(h, f) {
          return T(h, 'span', f)
        }
        d(S, 'pushStyle')
        function O(h, f) {
          return T(h, 'span', `color:${f}`)
        }
        d(O, 'pushForegroundColor')
        function F(h, f) {
          return T(h, 'span', `background-color:${f}`)
        }
        d(F, 'pushBackgroundColor')
        function $(h, f) {
          let v
          if ((h.slice(-1)[0] === f && (v = h.pop()), v)) return `</${f}>`
        }
        d($, 'closeTag')
        function P(h, f, v) {
          let B = !1,
            R = 3
          function L() {
            return ''
          }
          d(L, 'remove')
          function N(ae, re) {
            return (v('xterm256Foreground', re), '')
          }
          d(N, 'removeXterm256Foreground')
          function M(ae, re) {
            return (v('xterm256Background', re), '')
          }
          d(M, 'removeXterm256Background')
          function z(ae) {
            return (f.newline ? v('display', -1) : v('text', ae), '')
          }
          d(z, 'newline')
          function Y(ae, re) {
            ;((B = !0),
              re.trim().length === 0 && (re = '0'),
              (re = re.trimRight(';').split(';')))
            let je = i(re),
              ar
            try {
              for (je.s(); !(ar = je.n()).done; ) {
                const Wn = ar.value
                v('display', Wn)
              }
            } catch (Gn) {
              je.e(Gn)
            } finally {
              je.f()
            }
            return ''
          }
          d(Y, 'ansiMess')
          function X(ae) {
            return (v('text', ae), '')
          }
          d(X, 'realText')
          function V(ae) {
            return (v('rgb', ae), '')
          }
          d(V, 'rgb')
          const J = [
            { pattern: /^\x08+/, sub: L },
            { pattern: /^\x1b\[[012]?K/, sub: L },
            { pattern: /^\x1b\[\(B/, sub: L },
            { pattern: /^\x1b\[[34]8;2;\d+;\d+;\d+m/, sub: V },
            { pattern: /^\x1b\[38;5;(\d+)m/, sub: N },
            { pattern: /^\x1b\[48;5;(\d+)m/, sub: M },
            { pattern: /^\n/, sub: z },
            { pattern: /^\r+\n/, sub: z },
            { pattern: /^\r/, sub: z },
            { pattern: /^\x1b\[((?:\d{1,3};?)+|)m/, sub: Y },
            { pattern: /^\x1b\[\d?J/, sub: L },
            { pattern: /^\x1b\[\d{0,3};\d{0,3}f/, sub: L },
            { pattern: /^\x1b\[?[\d;]{0,3}/, sub: L },
            { pattern: /^(([^\x1b\x08\r\n])+)/, sub: X },
          ]
          function W(ae, re) {
            ;(re > R && B) || ((B = !1), (h = h.replace(ae.pattern, ae.sub)))
          }
          d(W, 'process')
          let te = [],
            ye = h,
            me = ye.length
          e: for (; me > 0; ) {
            for (let Ce = 0, ct = 0, Pt = J.length; ct < Pt; Ce = ++ct) {
              const U = J[Ce]
              if ((W(U, Ce), h.length !== me)) {
                me = h.length
                continue e
              }
            }
            if (h.length === me) break
            ;(te.push(0), (me = h.length))
          }
          return te
        }
        d(P, 'tokenize')
        function j(h, f, v) {
          return (
            f !== 'text' &&
              ((h = h.filter(_(D(v)))),
              h.push({ token: f, data: v, category: D(v) })),
            h
          )
        }
        d(j, 'updateStickyStack')
        const k = (function () {
          function h(f) {
            ;(r(this, h),
              (f = f || {}),
              f.colors && (f.colors = Object.assign({}, l.colors, f.colors)),
              (this.options = Object.assign({}, l, f)),
              (this.stack = []),
              (this.stickyStack = []))
          }
          return (
            d(h, 'Filter'),
            o(h, [
              {
                key: 'toHtml',
                value: d(function (f) {
                  const v = this
                  f = typeof f === 'string' ? [f] : f
                  const B = this.stack,
                    R = this.options,
                    L = []
                  return (
                    this.stickyStack.forEach(function (N) {
                      const M = A(B, N.token, N.data, R)
                      M && L.push(M)
                    }),
                    P(f.join(''), R, function (N, M) {
                      const z = A(B, N, M, R)
                      ;(z && L.push(z),
                        R.stream && (v.stickyStack = j(v.stickyStack, N, M)))
                    }),
                    B.length && L.push(x(B)),
                    L.join('')
                  )
                }, 'toHtml'),
              },
            ]),
            h
          )
        })()
        t.exports = k
      })
    function Sp() {
      const e = {
        setHandler: d(() => {}, 'setHandler'),
        send: d(() => {}, 'send'),
      }
      return new Tu({ transport: e })
    }
    d(Sp, 'mockChannel')
    const vp = class {
      constructor() {
        ;((this.getChannel = d(() => {
          if (!this.channel) {
            const t = Sp()
            return (this.setChannel(t), t)
          }
          return this.channel
        }, 'getChannel')),
          (this.ready = d(() => this.promise, 'ready')),
          (this.hasChannel = d(() => !!this.channel, 'hasChannel')),
          (this.setChannel = d((t) => {
            ;((this.channel = t), this.resolve())
          }, 'setChannel')),
          (this.promise = new Promise((t) => {
            this.resolve = () => t(this.getChannel())
          })))
      }
    }
    d(vp, 'AddonStore')
    const xm = vp,
      li = '__STORYBOOK_ADDONS_PREVIEW'
    function Cp() {
      return (q[li] || (q[li] = new xm()), q[li])
    }
    d(Cp, 'getAddonsStore')
    const Fe = Cp()
    function lt(e) {
      return e
    }
    d(lt, 'definePreview')
    const xp = class {
      constructor() {
        ;((this.hookListsMap = void 0),
          (this.mountedDecorators = void 0),
          (this.prevMountedDecorators = void 0),
          (this.currentHooks = void 0),
          (this.nextHookIndex = void 0),
          (this.currentPhase = void 0),
          (this.currentEffects = void 0),
          (this.prevEffects = void 0),
          (this.currentDecoratorName = void 0),
          (this.hasUpdates = void 0),
          (this.currentContext = void 0),
          (this.renderListener = d((t) => {
            t === this.currentContext?.id &&
              (this.triggerEffects(),
              (this.currentContext = null),
              this.removeRenderListeners())
          }, 'renderListener')),
          this.init())
      }
      init() {
        ;((this.hookListsMap = new WeakMap()),
          (this.mountedDecorators = new Set()),
          (this.prevMountedDecorators = new Set()),
          (this.currentHooks = []),
          (this.nextHookIndex = 0),
          (this.currentPhase = 'NONE'),
          (this.currentEffects = []),
          (this.prevEffects = []),
          (this.currentDecoratorName = null),
          (this.hasUpdates = !1),
          (this.currentContext = null))
      }
      clean() {
        ;(this.prevEffects.forEach((t) => {
          t.destroy && t.destroy()
        }),
          this.init(),
          this.removeRenderListeners())
      }
      getNextHook() {
        const t = this.currentHooks[this.nextHookIndex]
        return ((this.nextHookIndex += 1), t)
      }
      triggerEffects() {
        ;(this.prevEffects.forEach((t) => {
          !this.currentEffects.includes(t) && t.destroy && t.destroy()
        }),
          this.currentEffects.forEach((t) => {
            this.prevEffects.includes(t) || (t.destroy = t.create())
          }),
          (this.prevEffects = this.currentEffects),
          (this.currentEffects = []))
      }
      addRenderListeners() {
        ;(this.removeRenderListeners(),
          Fe.getChannel().on(pr, this.renderListener))
      }
      removeRenderListeners() {
        Fe.getChannel().removeListener(pr, this.renderListener)
      }
    }
    d(xp, 'HooksContext')
    const Dp = xp
    function gi(e) {
      const t = d((...r) => {
        const { hooks: n } = typeof r[0] === 'function' ? r[1] : r[0],
          o = n.currentPhase,
          i = n.currentHooks,
          a = n.nextHookIndex,
          u = n.currentDecoratorName
        ;((n.currentDecoratorName = e.name),
          n.prevMountedDecorators.has(e)
            ? ((n.currentPhase = 'UPDATE'),
              (n.currentHooks = n.hookListsMap.get(e) || []))
            : ((n.currentPhase = 'MOUNT'),
              (n.currentHooks = []),
              n.hookListsMap.set(e, n.currentHooks),
              n.prevMountedDecorators.add(e)),
          (n.nextHookIndex = 0))
        const s = q.STORYBOOK_HOOKS_CONTEXT
        q.STORYBOOK_HOOKS_CONTEXT = n
        const l = e(...r)
        if (
          ((q.STORYBOOK_HOOKS_CONTEXT = s),
          n.currentPhase === 'UPDATE' && n.getNextHook() != null)
        )
          throw new Error(
            'Rendered fewer hooks than expected. This may be caused by an accidental early return statement.'
          )
        return (
          (n.currentPhase = o),
          (n.currentHooks = i),
          (n.nextHookIndex = a),
          (n.currentDecoratorName = u),
          l
        )
      }, 'hookified')
      return ((t.originalFn = e), t)
    }
    d(gi, 'hookify')
    let ci = 0,
      Dm = 25,
      Tm = d(
        (e) => (t, r) => {
          const n = e(
            gi(t),
            r.map((o) => gi(o))
          )
          return (o) => {
            const { hooks: i } = o
            ;((i.prevMountedDecorators ??= new Set()),
              (i.mountedDecorators = new Set([t, ...r])),
              (i.currentContext = o),
              (i.hasUpdates = !1))
            let a = n(o)
            for (ci = 1; i.hasUpdates; )
              if (
                ((i.hasUpdates = !1),
                (i.currentEffects = []),
                (a = n(o)),
                (ci += 1),
                ci > Dm)
              )
                throw new Error(
                  'Too many re-renders. Storybook limits the number of renders to prevent an infinite loop.'
                )
            return (i.addRenderListeners(), a)
          }
        },
        'applyHooks'
      ),
      _m = d(
        (e, t) => e.length === t.length && e.every((r, n) => r === t[n]),
        'areDepsEqual'
      ),
      Pi = d(
        () =>
          new Error(
            'Storybook preview hooks can only be called inside decorators and story functions.'
          ),
        'invalidHooksError'
      )
    function $i() {
      return q.STORYBOOK_HOOKS_CONTEXT || null
    }
    d($i, 'getHooksContextOrNull')
    function On() {
      const e = $i()
      if (e == null) throw Pi()
      return e
    }
    d(On, 'getHooksContextOrThrow')
    function Tp(e, t, r) {
      const n = On()
      if (n.currentPhase === 'MOUNT') {
        r != null &&
          !Array.isArray(r) &&
          Q.warn(
            `${e} received a final argument that is not an array (instead, received ${r}). When specified, the final argument must be an array.`
          )
        const o = { name: e, deps: r }
        return (n.currentHooks.push(o), t(o), o)
      }
      if (n.currentPhase === 'UPDATE') {
        const o = n.getNextHook()
        if (o == null)
          throw new Error(
            'Rendered more hooks than during the previous render.'
          )
        return (
          o.name !== e &&
            Q.warn(
              `Storybook has detected a change in the order of Hooks${n.currentDecoratorName ? ` called by ${n.currentDecoratorName}` : ''}. This will lead to bugs and errors if not fixed.`
            ),
          r != null &&
            o.deps == null &&
            Q.warn(
              `${e} received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.`
            ),
          r != null &&
            o.deps != null &&
            r.length !== o.deps.length &&
            Q.warn(`The final argument passed to ${e} changed size between renders. The order and size of this array must remain constant.
Previous: ${o.deps}
Incoming: ${r}`),
          (r == null || o.deps == null || !_m(r, o.deps)) &&
            (t(o), (o.deps = r)),
          o
        )
      }
      throw Pi()
    }
    d(Tp, 'useHook')
    function xr(e, t, r) {
      const { memoizedState: n } = Tp(
        e,
        (o) => {
          o.memoizedState = t()
        },
        r
      )
      return n
    }
    d(xr, 'useMemoLike')
    function Li(e, t) {
      return xr('useMemo', e, t)
    }
    d(Li, 'useMemo')
    function Cr(e, t) {
      return xr('useCallback', () => e, t)
    }
    d(Cr, 'useCallback')
    function ki(e, t) {
      return xr(e, () => ({ current: t }), [])
    }
    d(ki, 'useRefLike')
    function Om(e) {
      return ki('useRef', e)
    }
    d(Om, 'useRef')
    function _p() {
      const e = $i()
      if (e != null && e.currentPhase !== 'NONE') e.hasUpdates = !0
      else
        try {
          Fe.getChannel().emit(Nr)
        } catch {
          Q.warn(
            'State updates of Storybook preview hooks work only in browser'
          )
        }
    }
    d(_p, 'triggerUpdate')
    function Ni(e, t) {
      const r = ki(e, typeof t === 'function' ? t() : t),
        n = d((o) => {
          ;((r.current = typeof o === 'function' ? o(r.current) : o), _p())
        }, 'setState')
      return [r.current, n]
    }
    d(Ni, 'useStateLike')
    function Im(e) {
      return Ni('useState', e)
    }
    d(Im, 'useState')
    function Rm(e, t, r) {
      const n = r != null ? () => r(t) : t,
        [o, i] = Ni('useReducer', n)
      return [o, d((a) => i((u) => e(u, a)), 'dispatch')]
    }
    d(Rm, 'useReducer')
    function Je(e, t) {
      const r = On(),
        n = xr('useEffect', () => ({ create: e }), t)
      r.currentEffects.includes(n) || r.currentEffects.push(n)
    }
    d(Je, 'useEffect')
    function Fm(e, t = []) {
      const r = Fe.getChannel()
      return (
        Je(
          () => (
            Object.entries(e).forEach(([n, o]) => r.on(n, o)),
            () => {
              Object.entries(e).forEach(([n, o]) => r.removeListener(n, o))
            }
          ),
          [...Object.keys(e), ...t]
        ),
        Cr(r.emit.bind(r), [r])
      )
    }
    d(Fm, 'useChannel')
    function In() {
      const { currentContext: e } = On()
      if (e == null) throw Pi()
      return e
    }
    d(In, 'useStoryContext')
    function Bm(e, t) {
      const { parameters: r } = In()
      if (e) return r[e] ?? t
    }
    d(Bm, 'useParameter')
    function Pm() {
      const e = Fe.getChannel(),
        { id: t, args: r } = In(),
        n = Cr((i) => e.emit(Hr, { storyId: t, updatedArgs: i }), [e, t]),
        o = Cr((i) => e.emit(Mr, { storyId: t, argNames: i }), [e, t])
      return [r, n, o]
    }
    d(Pm, 'useArgs')
    function $m() {
      const e = Fe.getChannel(),
        { globals: t } = In(),
        r = Cr((n) => e.emit(Ur, { globals: n }), [e])
      return [t, r]
    }
    d($m, 'useGlobals')
    const N_ = d(
      ({
        name: e,
        parameterName: t,
        wrapper: r,
        skipIfNoParametersOrOptions: n = !1,
      }) => {
        const o = d(
          (i) => (a, u) => {
            const s = u.parameters && u.parameters[t]
            return (s && s.disable) || (n && !i && !s)
              ? a(u)
              : r(a, u, { options: i, parameters: s })
          },
          'decorator'
        )
        return (...i) =>
          typeof i[0] === 'function'
            ? o()(...i)
            : (...a) => {
                if (a.length > 1)
                  return i.length > 1 ? o(i)(...a) : o(...i)(...a)
                throw new Error(`Passing stories directly into ${e}() is not allowed,
        instead use addDecorator(${e}) and pass options with the '${t}' parameter`)
              }
      },
      'makeDecorator'
    )
    function Op() {}
    d(Op, 'noop')
    function yi(e) {
      return Object.getOwnPropertySymbols(e).filter((t) =>
        Object.prototype.propertyIsEnumerable.call(e, t)
      )
    }
    d(yi, 'getSymbols')
    function bi(e) {
      return e == null
        ? e === void 0
          ? '[object Undefined]'
          : '[object Null]'
        : Object.prototype.toString.call(e)
    }
    d(bi, 'getTag')
    const Lm = '[object RegExp]',
      km = '[object String]',
      Nm = '[object Number]',
      jm = '[object Boolean]',
      $c = '[object Arguments]',
      Mm = '[object Symbol]',
      qm = '[object Date]',
      zm = '[object Map]',
      Um = '[object Set]',
      Hm = '[object Array]',
      Vm = '[object Function]',
      Wm = '[object ArrayBuffer]',
      pi = '[object Object]',
      Gm = '[object Error]',
      Ym = '[object DataView]',
      Km = '[object Uint8Array]',
      Xm = '[object Uint8ClampedArray]',
      Jm = '[object Uint16Array]',
      Zm = '[object Uint32Array]',
      Qm = '[object BigUint64Array]',
      eg = '[object Int8Array]',
      tg = '[object Int16Array]',
      rg = '[object Int32Array]',
      ng = '[object BigInt64Array]',
      og = '[object Float32Array]',
      ig = '[object Float64Array]'
    function Ye(e) {
      if (!e || typeof e !== 'object') return !1
      const t = Object.getPrototypeOf(e)
      return t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null
        ? Object.prototype.toString.call(e) === '[object Object]'
        : !1
    }
    d(Ye, 'isPlainObject')
    function Kt(e, t) {
      const r = {},
        n = Object.keys(e)
      for (let o = 0; o < n.length; o++) {
        const i = n[o],
          a = e[i]
        r[i] = t(a, i, e)
      }
      return r
    }
    d(Kt, 'mapValues')
    function Ip(e, t) {
      const r = {},
        n = Object.keys(e)
      for (let o = 0; o < n.length; o++) {
        const i = n[o],
          a = e[i]
        t(a, i) && (r[i] = a)
      }
      return r
    }
    d(Ip, 'pickBy')
    function Rp(e, t) {
      return e === t || (Number.isNaN(e) && Number.isNaN(t))
    }
    d(Rp, 'eq')
    function Fp(e, t, r) {
      return Gt(e, t, void 0, void 0, void 0, void 0, r)
    }
    d(Fp, 'isEqualWith')
    function Gt(e, t, r, n, o, i, a) {
      const u = a(e, t, r, n, o, i)
      if (u !== void 0) return u
      if (typeof e === typeof t)
        switch (typeof e) {
          case 'bigint':
          case 'string':
          case 'boolean':
          case 'symbol':
          case 'undefined':
            return e === t
          case 'number':
            return e === t || Object.is(e, t)
          case 'function':
            return e === t
          case 'object':
            return Yt(e, t, i, a)
        }
      return Yt(e, t, i, a)
    }
    d(Gt, 'isEqualWithImpl')
    function Yt(e, t, r, n) {
      if (Object.is(e, t)) return !0
      let o = bi(e),
        i = bi(t)
      if ((o === $c && (o = pi), i === $c && (i = pi), o !== i)) return !1
      switch (o) {
        case km:
          return e.toString() === t.toString()
        case Nm: {
          const s = e.valueOf(),
            l = t.valueOf()
          return Rp(s, l)
        }
        case jm:
        case qm:
        case Mm:
          return Object.is(e.valueOf(), t.valueOf())
        case Lm:
          return e.source === t.source && e.flags === t.flags
        case Vm:
          return e === t
      }
      r = r ?? new Map()
      const a = r.get(e),
        u = r.get(t)
      if (a != null && u != null) return a === t
      ;(r.set(e, t), r.set(t, e))
      try {
        switch (o) {
          case zm: {
            if (e.size !== t.size) return !1
            for (const [s, l] of e.entries())
              if (!t.has(s) || !Gt(l, t.get(s), s, e, t, r, n)) return !1
            return !0
          }
          case Um: {
            if (e.size !== t.size) return !1
            const s = Array.from(e.values()),
              l = Array.from(t.values())
            for (let c = 0; c < s.length; c++) {
              const p = s[c],
                g = l.findIndex((m) => Gt(p, m, void 0, e, t, r, n))
              if (g === -1) return !1
              l.splice(g, 1)
            }
            return !0
          }
          case Hm:
          case Km:
          case Xm:
          case Jm:
          case Zm:
          case Qm:
          case eg:
          case tg:
          case rg:
          case ng:
          case og:
          case ig: {
            if (
              (typeof Buffer < 'u' &&
                Buffer.isBuffer(e) !== Buffer.isBuffer(t)) ||
              e.length !== t.length
            )
              return !1
            for (let s = 0; s < e.length; s++)
              if (!Gt(e[s], t[s], s, e, t, r, n)) return !1
            return !0
          }
          case Wm:
            return e.byteLength !== t.byteLength
              ? !1
              : Yt(new Uint8Array(e), new Uint8Array(t), r, n)
          case Ym:
            return e.byteLength !== t.byteLength ||
              e.byteOffset !== t.byteOffset
              ? !1
              : Yt(new Uint8Array(e), new Uint8Array(t), r, n)
          case Gm:
            return e.name === t.name && e.message === t.message
          case pi: {
            if (!(Yt(e.constructor, t.constructor, r, n) || (Ye(e) && Ye(t))))
              return !1
            const s = [...Object.keys(e), ...yi(e)],
              l = [...Object.keys(t), ...yi(t)]
            if (s.length !== l.length) return !1
            for (let c = 0; c < s.length; c++) {
              const p = s[c],
                g = e[p]
              if (!Object.hasOwn(t, p)) return !1
              const m = t[p]
              if (!Gt(g, m, p, e, t, r, n)) return !1
            }
            return !0
          }
          default:
            return !1
        }
      } finally {
        ;(r.delete(e), r.delete(t))
      }
    }
    d(Yt, 'areObjectsEqual')
    function Bp(e, t) {
      return Fp(e, t, Op)
    }
    d(Bp, 'isEqual')
    const di = Qt(yp(), 1),
      Pp = {}
    gp(Pp, { argsEnhancers: () => dg })
    var ji = 'storybook/actions',
      H_ = `${ji}/panel`,
      ag = `${ji}/action-event`,
      V_ = `${ji}/action-clear`,
      ug = { depth: 10, clearOnStoryChange: !0, limit: 50 },
      $p = d((e, t) => {
        const r = Object.getPrototypeOf(e)
        return !r || t(r) ? r : $p(r, t)
      }, 'findProto'),
      sg = d(
        (e) =>
          !!(
            typeof e === 'object' &&
            e &&
            $p(e, (t) =>
              /^Synthetic(?:Base)?Event$/.test(t.constructor.name)
            ) &&
            typeof e.persist === 'function'
          ),
        'isReactSyntheticEvent'
      ),
      lg = d((e) => {
        if (sg(e)) {
          const t = Object.create(
            e.constructor.prototype,
            Object.getOwnPropertyDescriptors(e)
          )
          t.persist()
          const r = Object.getOwnPropertyDescriptor(t, 'view'),
            n = r?.value
          return (
            typeof n === 'object' &&
              n?.constructor.name === 'Window' &&
              Object.defineProperty(t, 'view', {
                ...r,
                value: Object.create(n.constructor.prototype),
              }),
            t
          )
        }
        return e
      }, 'serializeArg')
    function Rn(e, t = {}) {
      const r = { ...ug, ...t },
        n = d(function (...o) {
          if (t.implicit) {
            const p = (
              '__STORYBOOK_PREVIEW__' in q ? q.__STORYBOOK_PREVIEW__ : void 0
            )?.storyRenders.find(
              (g) => g.phase === 'playing' || g.phase === 'rendering'
            )
            if (p) {
              const g =
                  !globalThis?.FEATURES?.disallowImplicitActionsInRenderV8,
                m = new Bu({ phase: p.phase, name: e, deprecated: g })
              if (g) console.warn(m)
              else throw m
            }
          }
          const i = Fe.getChannel(),
            a =
              Date.now().toString(36) + Math.random().toString(36).substring(2),
            u = 5,
            s = o.map(lg),
            l = o.length > 1 ? s : s[0],
            c = {
              id: a,
              count: 0,
              data: { name: e, args: l },
              options: { ...r, maxDepth: u + (r.depth || 3) },
            }
          i.emit(ag, c)
        }, 'actionHandler')
      return ((n.isAction = !0), (n.implicit = t.implicit), n)
    }
    d(Rn, 'action')
    var Lp = d((e, t) => typeof t[e] > 'u' && !(e in t), 'isInInitialArgs'),
      cg = d((e) => {
        const {
          initialArgs: t,
          argTypes: r,
          id: n,
          parameters: { actions: o },
        } = e
        if (!o || o.disable || !o.argTypesRegex || !r) return {}
        const i = new RegExp(o.argTypesRegex)
        return Object.entries(r)
          .filter(([a]) => !!i.test(a))
          .reduce(
            (a, [u, s]) => (
              Lp(u, t) && (a[u] = Rn(u, { implicit: !0, id: n })),
              a
            ),
            {}
          )
      }, 'inferActionsFromArgTypesRegex'),
      pg = d((e) => {
        const {
          initialArgs: t,
          argTypes: r,
          parameters: { actions: n },
        } = e
        return n?.disable || !r
          ? {}
          : Object.entries(r)
              .filter(([o, i]) => !!i.action)
              .reduce(
                (o, [i, a]) => (
                  Lp(i, t) &&
                    (o[i] = Rn(typeof a.action === 'string' ? a.action : i)),
                  o
                ),
                {}
              )
      }, 'addActionsFromArgTypes'),
      dg = [pg, cg],
      kp = {}
    gp(kp, { loaders: () => hg })
    var Lc = !1,
      fg = d((e) => {
        const { parameters: t } = e
        t?.actions?.disable ||
          Lc ||
          (is((r, n) => {
            const o = r.getMockName()
            o !== 'spy' &&
              (!/^next\/.*::/.test(o) ||
                [
                  'next/router::useRouter()',
                  'next/navigation::useRouter()',
                  'next/navigation::redirect',
                  'next/cache::',
                  'next/headers::cookies().set',
                  'next/headers::cookies().delete',
                  'next/headers::headers().set',
                  'next/headers::headers().delete',
                ].some((i) => o.startsWith(i))) &&
              Rn(o)(n)
          }),
          (Lc = !0))
      }, 'logActionsWhenMockCalled'),
      hg = [fg],
      kc = d(() => ({ ...Pp, ...kp }), 'default'),
      mg = 'storybook/background',
      wn = 'backgrounds',
      Y_ = { UPDATE: `${mg}/update` },
      gg = {
        light: { name: 'light', value: '#F8F8F8' },
        dark: { name: 'dark', value: '#333' },
      },
      { document: Ge } = globalThis,
      yg = d(
        () =>
          globalThis?.matchMedia
            ? !!globalThis.matchMedia('(prefers-reduced-motion: reduce)')
                ?.matches
            : !1,
        'isReduceMotionEnabled'
      ),
      Nc = d((e) => {
        ;(Array.isArray(e) ? e : [e]).forEach(bg)
      }, 'clearStyles'),
      bg = d((e) => {
        if (!Ge) return
        const t = Ge.getElementById(e)
        t && t.parentElement && t.parentElement.removeChild(t)
      }, 'clearStyle'),
      Eg = d((e, t) => {
        if (!Ge) return
        const r = Ge.getElementById(e)
        if (r) r.innerHTML !== t && (r.innerHTML = t)
        else {
          const n = Ge.createElement('style')
          ;(n.setAttribute('id', e), (n.innerHTML = t), Ge.head.appendChild(n))
        }
      }, 'addGridStyle'),
      Ag = d((e, t, r) => {
        if (!Ge) return
        const n = Ge.getElementById(e)
        if (n) n.innerHTML !== t && (n.innerHTML = t)
        else {
          const o = Ge.createElement('style')
          ;(o.setAttribute('id', e), (o.innerHTML = t))
          const i = `addon-backgrounds-grid${r ? `-docs-${r}` : ''}`,
            a = Ge.getElementById(i)
          a ? a.parentElement?.insertBefore(o, a) : Ge.head.appendChild(o)
        }
      }, 'addBackgroundStyle'),
      wg = { cellSize: 100, cellAmount: 10, opacity: 0.8 },
      jc = 'addon-backgrounds',
      Mc = 'addon-backgrounds-grid',
      Sg = yg() ? '' : 'transition: background-color 0.3s;',
      vg = d((e, t) => {
        let { globals: r = {}, parameters: n = {}, viewMode: o, id: i } = t,
          { options: a = gg, disable: u, grid: s = wg } = n[wn] || {},
          l = r[wn] || {},
          c = typeof l === 'string' ? l : l?.value,
          p = c ? a[c] : void 0,
          g = typeof p === 'string' ? p : p?.value || 'transparent',
          m = typeof l === 'string' ? !1 : l.grid || !1,
          A = !!p && !u,
          b = o === 'docs' ? `#anchor--${i} .docs-story` : '.sb-show-main',
          E = o === 'docs' ? `#anchor--${i} .docs-story` : '.sb-show-main',
          x = n.layout === void 0 || n.layout === 'padded',
          C = o === 'docs' ? 20 : x ? 16 : 0,
          {
            cellAmount: _,
            cellSize: D,
            opacity: I,
            offsetX: T = C,
            offsetY: S = C,
          } = s,
          O = o === 'docs' ? `${jc}-docs-${i}` : `${jc}-color`,
          F = o === 'docs' ? i : null
        Je(() => {
          const P = `
    ${b} {
      background: ${g} !important;
      ${Sg}
      }`
          if (!A) {
            Nc(O)
            return
          }
          Ag(O, P, F)
        }, [b, O, F, A, g])
        const $ = o === 'docs' ? `${Mc}-docs-${i}` : `${Mc}`
        return (
          Je(() => {
            if (!m) {
              Nc($)
              return
            }
            const P = [
                `${D * _}px ${D * _}px`,
                `${D * _}px ${D * _}px`,
                `${D}px ${D}px`,
                `${D}px ${D}px`,
              ].join(', '),
              j = `
        ${E} {
          background-size: ${P} !important;
          background-position: ${T}px ${S}px, ${T}px ${S}px, ${T}px ${S}px, ${T}px ${S}px !important;
          background-blend-mode: difference !important;
          background-image: linear-gradient(rgba(130, 130, 130, ${I}) 1px, transparent 1px),
           linear-gradient(90deg, rgba(130, 130, 130, ${I}) 1px, transparent 1px),
           linear-gradient(rgba(130, 130, 130, ${I / 2}) 1px, transparent 1px),
           linear-gradient(90deg, rgba(130, 130, 130, ${I / 2}) 1px, transparent 1px) !important;
        }
      `
            Eg($, j)
          }, [_, D, E, $, m, T, S, I]),
          e()
        )
      }, 'withBackgroundAndGrid'),
      Cg = globalThis.FEATURES?.backgrounds ? [vg] : [],
      xg = {
        [wn]: {
          grid: { cellSize: 20, opacity: 0.5, cellAmount: 5 },
          disable: !1,
        },
      },
      Dg = { [wn]: { value: void 0, grid: !1 } },
      qc = d(
        () => ({ decorators: Cg, parameters: xg, initialGlobals: Dg }),
        'default'
      ),
      { step: Tg } = Er(
        { step: d(async (e, t, r) => t(r), 'step') },
        { intercept: !0 }
      ),
      zc = d(
        () => ({
          parameters: { throwPlayFunctionExceptions: !1 },
          runStep: Tg,
        }),
        'default'
      ),
      Fn = 'storybook/highlight',
      _g = `${Fn}/add`,
      Og = `${Fn}/remove`,
      Ig = `${Fn}/reset`,
      Rg = `${Fn}/scroll-into-view`,
      Uc = 2147483647,
      mt = 28,
      Hc = {
        chevronLeft: [
          'M9.10355 10.1464C9.29882 10.3417 9.29882 10.6583 9.10355 10.8536C8.90829 11.0488 8.59171 11.0488 8.39645 10.8536L4.89645 7.35355C4.70118 7.15829 4.70118 6.84171 4.89645 6.64645L8.39645 3.14645C8.59171 2.95118 8.90829 2.95118 9.10355 3.14645C9.29882 3.34171 9.29882 3.65829 9.10355 3.85355L5.95711 7L9.10355 10.1464Z',
        ],
        chevronRight: [
          'M4.89645 10.1464C4.70118 10.3417 4.70118 10.6583 4.89645 10.8536C5.09171 11.0488 5.40829 11.0488 5.60355 10.8536L9.10355 7.35355C9.29882 7.15829 9.29882 6.84171 9.10355 6.64645L5.60355 3.14645C5.40829 2.95118 5.09171 2.95118 4.89645 3.14645C4.70118 3.34171 4.70118 3.65829 4.89645 3.85355L8.04289 7L4.89645 10.1464Z',
        ],
        info: [
          'M7 5.5a.5.5 0 01.5.5v4a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zM7 4.5A.75.75 0 107 3a.75.75 0 000 1.5z',
          'M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z',
        ],
        shareAlt: [
          'M2 1.004a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1v-4.5a.5.5 0 00-1 0v4.5H2v-10h4.5a.5.5 0 000-1H2z',
          'M7.354 7.357L12 2.711v1.793a.5.5 0 001 0v-3a.5.5 0 00-.5-.5h-3a.5.5 0 100 1h1.793L6.646 6.65a.5.5 0 10.708.707z',
        ],
      },
      Fg = 'svg,path,rect,circle,line,polyline,polygon,ellipse,text'.split(','),
      Ee = d((e, t = {}, r) => {
        const n = Fg.includes(e)
          ? document.createElementNS('http://www.w3.org/2000/svg', e)
          : document.createElement(e)
        return (
          Object.entries(t).forEach(([o, i]) => {
            ;/[A-Z]/.test(o)
              ? (o === 'onClick' &&
                  (n.addEventListener('click', i),
                  n.addEventListener('keydown', (a) => {
                    ;(a.key === 'Enter' || a.key === ' ') &&
                      (a.preventDefault(), i())
                  })),
                o === 'onMouseEnter' && n.addEventListener('mouseenter', i),
                o === 'onMouseLeave' && n.addEventListener('mouseleave', i))
              : n.setAttribute(o, i)
          }),
          r?.forEach((o) => {
            if (!(o == null || o === !1))
              try {
                n.appendChild(o)
              } catch {
                n.appendChild(document.createTextNode(String(o)))
              }
          }),
          n
        )
      }, 'createElement'),
      mn = d(
        (e) =>
          Hc[e] &&
          Ee(
            'svg',
            {
              width: '14',
              height: '14',
              viewBox: '0 0 14 14',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            Hc[e].map((t) =>
              Ee('path', {
                fill: 'currentColor',
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: t,
              })
            )
          ),
        'createIcon'
      ),
      Bg = d((e) => {
        if ('elements' in e) {
          const { elements: n, color: o, style: i } = e
          return {
            id: void 0,
            priority: 0,
            selectors: n,
            styles: {
              outline: `2px ${i} ${o}`,
              outlineOffset: '2px',
              boxShadow: '0 0 0 6px rgba(255,255,255,0.6)',
            },
            menu: void 0,
          }
        }
        const { menu: t, ...r } = e
        return {
          id: void 0,
          priority: 0,
          styles: { outline: '2px dashed #029cfd' },
          ...r,
          menu: Array.isArray(t) ? (t.every(Array.isArray) ? t : [t]) : void 0,
        }
      }, 'normalizeOptions'),
      Pg = d((e) => e instanceof Function, 'isFunction'),
      Ar = new Map(),
      Tt = new Map(),
      gn = new Map(),
      at = d((e) => {
        const t = Symbol()
        return (
          Tt.set(t, []),
          Ar.set(t, e),
          {
            get: d(() => Ar.get(t), 'get'),
            set: d((r) => {
              const n = Ar.get(t),
                o = Pg(r) ? r(n) : r
              o !== n &&
                (Ar.set(t, o),
                Tt.get(t)?.forEach((i) => {
                  ;(gn.get(i)?.(), gn.set(i, i(o)))
                }))
            }, 'set'),
            subscribe: d(
              (r) => (
                Tt.get(t)?.push(r),
                () => {
                  const n = Tt.get(t)
                  n &&
                    Tt.set(
                      t,
                      n.filter((o) => o !== r)
                    )
                }
              ),
              'subscribe'
            ),
            teardown: d(() => {
              ;(Tt.get(t)?.forEach((r) => {
                ;(gn.get(r)?.(), gn.delete(r))
              }),
                Tt.delete(t),
                Ar.delete(t))
            }, 'teardown'),
          }
        )
      }, 'useStore'),
      Vc = d((e) => {
        const t = document.getElementById('storybook-root'),
          r = new Map()
        for (const n of e) {
          const { priority: o = 0 } = n
          for (const i of n.selectors) {
            const a = [
              ...document.querySelectorAll(
                `:is(${i}):not([id^="storybook-"], [id^="storybook-"] *, [class^="sb-"], [class^="sb-"] *)`
              ),
              ...(t?.querySelectorAll(i) || []),
            ]
            for (const u of a) {
              const s = r.get(u)
              ;(!s || s.priority <= o) &&
                r.set(u, {
                  ...n,
                  priority: o,
                  selectors: Array.from(
                    new Set((s?.selectors || []).concat(i))
                  ),
                })
            }
          }
        }
        return r
      }, 'mapElements'),
      $g = d(
        (e) =>
          Array.from(e.entries())
            .map(
              ([
                t,
                {
                  selectors: r,
                  styles: n,
                  hoverStyles: o,
                  focusStyles: i,
                  menu: a,
                },
              ]) => {
                const {
                    top: u,
                    left: s,
                    width: l,
                    height: c,
                  } = t.getBoundingClientRect(),
                  { position: p } = getComputedStyle(t)
                return {
                  element: t,
                  selectors: r,
                  styles: n,
                  hoverStyles: o,
                  focusStyles: i,
                  menu: a,
                  top: p === 'fixed' ? u : u + window.scrollY,
                  left: p === 'fixed' ? s : s + window.scrollX,
                  width: l,
                  height: c,
                }
              }
            )
            .sort((t, r) => r.width * r.height - t.width * t.height),
        'mapBoxes'
      ),
      Wc = d((e, t) => {
        const r = e.getBoundingClientRect(),
          { x: n, y: o } = t
        return (
          r?.top &&
          r?.left &&
          n >= r.left &&
          n <= r.left + r.width &&
          o >= r.top &&
          o <= r.top + r.height
        )
      }, 'isOverMenu'),
      Gc = d((e, t, r) => {
        if (!t || !r) return !1
        let { left: n, top: o, width: i, height: a } = e
        ;(a < mt && ((o = o - Math.round((mt - a) / 2)), (a = mt)),
          i < mt && ((n = n - Math.round((mt - i) / 2)), (i = mt)),
          t.style.position === 'fixed' &&
            ((n += window.scrollX), (o += window.scrollY)))
        const { x: u, y: s } = r
        return u >= n && u <= n + i && s >= o && s <= o + a
      }, 'isTargeted'),
      Lg = d((e, t, r = {}) => {
        let { x: n, y: o } = t,
          { margin: i = 5, topOffset: a = 0, centered: u = !1 } = r,
          { scrollX: s, scrollY: l, innerHeight: c, innerWidth: p } = window,
          g = Math.min(
            e.style.position === 'fixed' ? o - l : o,
            c - e.clientHeight - i - a + l
          ),
          m = u ? e.clientWidth / 2 : 0,
          A =
            e.style.position === 'fixed'
              ? Math.max(Math.min(n - s, p - m - i), m + i)
              : Math.max(Math.min(n, p - m - i + s), m + i + s)
        Object.assign(e.style, {
          ...(A !== n && { left: `${A}px` }),
          ...(g !== o && { top: `${g}px` }),
        })
      }, 'keepInViewport'),
      Yc = d((e) => {
        window.HTMLElement.prototype.hasOwnProperty('showPopover') &&
          e.showPopover()
      }, 'showPopover'),
      kg = d((e) => {
        window.HTMLElement.prototype.hasOwnProperty('showPopover') &&
          e.hidePopover()
      }, 'hidePopover'),
      Ng = d(
        (e) => ({
          top: e.top,
          left: e.left,
          width: e.width,
          height: e.height,
          selectors: e.selectors,
          element: {
            attributes: Object.fromEntries(
              Array.from(e.element.attributes).map((t) => [t.name, t.value])
            ),
            localName: e.element.localName,
            tagName: e.element.tagName,
            outerHTML: e.element.outerHTML,
          },
        }),
        'getEventDetails'
      ),
      le = 'storybook-highlights-menu',
      Kc = 'storybook-highlights-root',
      jg = 'storybook-root',
      Mg = d((e) => {
        if (globalThis.__STORYBOOK_HIGHLIGHT_INITIALIZED) return
        globalThis.__STORYBOOK_HIGHLIGHT_INITIALIZED = !0
        let { document: t } = globalThis,
          r = at([]),
          n = at(new Map()),
          o = at([]),
          i = at(),
          a = at(),
          u = at([]),
          s = at([]),
          l = at(),
          c = at(),
          p = t.getElementById(Kc)
        ;(r.subscribe(() => {
          p || ((p = Ee('div', { id: Kc })), t.body.appendChild(p))
        }),
          r.subscribe((S) => {
            const O = t.getElementById(jg)
            if (!O) return
            n.set(Vc(S))
            const F = new MutationObserver(() => n.set(Vc(S)))
            return (
              F.observe(O, { subtree: !0, childList: !0 }),
              () => {
                F.disconnect()
              }
            )
          }),
          n.subscribe((S) => {
            const O = d(
                () => requestAnimationFrame(() => o.set($g(S))),
                'updateBoxes'
              ),
              F = new ResizeObserver(O)
            ;(F.observe(t.body),
              Array.from(S.keys()).forEach((P) => F.observe(P)))
            const $ = Array.from(t.body.querySelectorAll('*')).filter((P) => {
              const {
                overflow: j,
                overflowX: k,
                overflowY: h,
              } = window.getComputedStyle(P)
              return ['auto', 'scroll'].some((f) => [j, k, h].includes(f))
            })
            return (
              $.forEach((P) => P.addEventListener('scroll', O)),
              () => {
                ;(F.disconnect(),
                  $.forEach((P) => P.removeEventListener('scroll', O)))
              }
            )
          }),
          n.subscribe((S) => {
            const O = Array.from(S.keys()).filter(
                ({ style: $ }) => $.position === 'sticky'
              ),
              F = d(
                () =>
                  requestAnimationFrame(() => {
                    o.set(($) =>
                      $.map((P) => {
                        if (O.includes(P.element)) {
                          const { top: j, left: k } =
                            P.element.getBoundingClientRect()
                          return {
                            ...P,
                            top: j + window.scrollY,
                            left: k + window.scrollX,
                          }
                        }
                        return P
                      })
                    )
                  }),
                'updateBoxes'
              )
            return (
              t.addEventListener('scroll', F),
              () => t.removeEventListener('scroll', F)
            )
          }),
          n.subscribe((S) => {
            u.set((O) => O.filter(({ element: F }) => S.has(F)))
          }),
          u.subscribe((S) => {
            S.length
              ? (c.set((O) =>
                  S.some((F) => F.element === O?.element) ? O : void 0
                ),
                l.set((O) =>
                  S.some((F) => F.element === O?.element) ? O : void 0
                ))
              : (c.set(void 0), l.set(void 0), i.set(void 0))
          }))
        const g = new Map(new Map())
        r.subscribe((S) => {
          ;(S.forEach(({ keyframes: O }) => {
            if (O) {
              let F = g.get(O)
              ;(F ||
                ((F = t.createElement('style')),
                F.setAttribute('data-highlight', 'keyframes'),
                g.set(O, F),
                t.head.appendChild(F)),
                (F.innerHTML = O))
            }
          }),
            g.forEach((O, F) => {
              S.some(($) => $.keyframes === F) || (O.remove(), g.delete(F))
            }))
        })
        const m = new Map(new Map())
        ;(o.subscribe((S) => {
          ;(S.forEach((O) => {
            let F = m.get(O.element)
            if (p && !F) {
              const $ = {
                popover: 'manual',
                'data-highlight-dimensions': `w${O.width.toFixed(0)}h${O.height.toFixed(0)}`,
                'data-highlight-coordinates': `x${O.left.toFixed(0)}y${O.top.toFixed(0)}`,
              }
              ;((F = p.appendChild(Ee('div', $, [Ee('div')]))),
                m.set(O.element, F))
            }
          }),
            m.forEach((O, F) => {
              S.some(({ element: $ }) => $ === F) || (O.remove(), m.delete(F))
            }))
        }),
          o.subscribe((S) => {
            const O = S.filter(($) => $.menu)
            if (!O.length) return
            const F = d(($) => {
              requestAnimationFrame(() => {
                const P = t.getElementById(le),
                  j = { x: $.pageX, y: $.pageY }
                if (P && !Wc(P, j)) {
                  const k = O.filter((h) => {
                    const f = m.get(h.element)
                    return Gc(h, f, j)
                  })
                  ;(i.set(k.length ? j : void 0), u.set(k))
                }
              })
            }, 'onClick')
            return (
              t.addEventListener('click', F),
              () => t.removeEventListener('click', F)
            )
          }))
        const A = d(() => {
          const S = t.getElementById(le),
            O = a.get()
          !O ||
            (S && Wc(S, O)) ||
            s.set((F) => {
              const $ = o.get().filter((h) => {
                  const f = m.get(h.element)
                  return Gc(h, f, O)
                }),
                P = F.filter((h) => $.includes(h)),
                j = $.filter((h) => !F.includes(h)),
                k = F.length - P.length
              return j.length || k ? [...P, ...j] : F
            })
        }, 'updateHovered')
        ;(a.subscribe(A), o.subscribe(A))
        const b = d(() => {
          const S = c.get(),
            O = S ? [S] : u.get(),
            F = O.length === 1 ? O[0] : l.get(),
            $ = i.get() !== void 0
          o.get().forEach((P) => {
            const j = m.get(P.element)
            if (j) {
              const k = F === P,
                h = $ ? (F ? k : O.includes(P)) : s.get()?.includes(P)
              ;(Object.assign(j.style, {
                animation: 'none',
                background: 'transparent',
                border: 'none',
                boxSizing: 'border-box',
                outline: 'none',
                outlineOffset: '0px',
                ...P.styles,
                ...(h ? P.hoverStyles : {}),
                ...(k ? P.focusStyles : {}),
                position:
                  getComputedStyle(P.element).position === 'fixed'
                    ? 'fixed'
                    : 'absolute',
                zIndex: Uc - 10,
                top: `${P.top}px`,
                left: `${P.left}px`,
                width: `${P.width}px`,
                height: `${P.height}px`,
                margin: 0,
                padding: 0,
                cursor: P.menu && h ? 'pointer' : 'default',
                pointerEvents: P.menu ? 'auto' : 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'visible',
              }),
                Object.assign(j.children[0].style, {
                  width: '100%',
                  height: '100%',
                  minHeight: `${mt}px`,
                  minWidth: `${mt}px`,
                  boxSizing: 'content-box',
                  padding: j.style.outlineWidth || '0px',
                }),
                Yc(j))
            }
          })
        }, 'updateBoxStyles')
        ;(o.subscribe(b),
          u.subscribe(b),
          s.subscribe(b),
          l.subscribe(b),
          c.subscribe(b))
        const E = d(() => {
          if (!p) return
          let S = t.getElementById(le)
          if (S) S.innerHTML = ''
          else {
            const P = { id: le, popover: 'manual' }
            ;((S = p.appendChild(Ee('div', P))),
              p.appendChild(
                Ee('style', {}, [
                  `
            #${le} {
              position: absolute;
              z-index: ${Uc};
              width: 300px;
              padding: 0px;
              margin: 15px 0 0 0;
              transform: translateX(-50%);
              font-family: "Nunito Sans", -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;
              font-size: 12px;
              background: white;
              border: none;
              border-radius: 6px;
              box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05), 0 5px 15px 0 rgba(0, 0, 0, 0.1);
              color: #2E3438;
            }
            #${le} ul {
              list-style: none;
              margin: 0;
              padding: 0;
            }
            #${le} > ul {
              max-height: 300px;
              overflow-y: auto;
              padding: 4px 0;
            }
            #${le} li {
              padding: 0 4px;
              margin: 0;
            }
            #${le} li > :not(ul) {
              display: flex;
              padding: 8px;
              margin: 0;
              align-items: center;
              gap: 8px;
              border-radius: 4px;
            }
            #${le} button {
              width: 100%;
              border: 0;
              background: transparent;
              color: inherit;
              text-align: left;
              font-family: inherit;
              font-size: inherit;
            }
            #${le} button:focus-visible {
              outline-color: #029CFD;
            }
            #${le} button:hover {
              background: rgba(2, 156, 253, 0.07);
              color: #029CFD;
              cursor: pointer;
            }
            #${le} li code {
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              line-height: 16px;
              font-size: 11px;
            }
            #${le} li svg {
              flex-shrink: 0;
              margin: 1px;
              color: #73828C;
            }
            #${le} li > button:hover svg, #${le} li > button:focus-visible svg {
              color: #029CFD;
            }
            #${le} .element-list li svg {
              display: none;
            }
            #${le} li.selectable svg, #${le} li.selected svg {
              display: block;
            }
            #${le} .menu-list {
              border-top: 1px solid rgba(38, 85, 115, 0.15);
            }
            #${le} .menu-list > li:not(:last-child) {
              padding-bottom: 4px;
              margin-bottom: 4px;
              border-bottom: 1px solid rgba(38, 85, 115, 0.15);
            }
            #${le} .menu-items, #${le} .menu-items li {
              padding: 0;
            }
            #${le} .menu-item {
              display: flex;
            }
            #${le} .menu-item-content {
              display: flex;
              flex-direction: column;
              flex-grow: 1;
            }
          `,
                ])
              ))
          }
          const O = c.get(),
            F = O ? [O] : u.get()
          if (
            (F.length &&
              ((S.style.position =
                getComputedStyle(F[0].element).position === 'fixed'
                  ? 'fixed'
                  : 'absolute'),
              S.appendChild(
                Ee(
                  'ul',
                  { class: 'element-list' },
                  F.map((P) => {
                    const j =
                        F.length > 1 &&
                        !!P.menu?.some((f) =>
                          f.some(
                            (v) =>
                              !v.selectors ||
                              v.selectors.some((B) => P.selectors.includes(B))
                          )
                        ),
                      k = j
                        ? {
                            class: 'selectable',
                            onClick: d(() => c.set(P), 'onClick'),
                            onMouseEnter: d(() => l.set(P), 'onMouseEnter'),
                            onMouseLeave: d(
                              () => l.set(void 0),
                              'onMouseLeave'
                            ),
                          }
                        : O
                          ? {
                              class: 'selected',
                              onClick: d(() => c.set(void 0), 'onClick'),
                            }
                          : {},
                      h = j || O
                    return Ee('li', k, [
                      Ee(h ? 'button' : 'div', h ? { type: 'button' } : {}, [
                        O ? mn('chevronLeft') : null,
                        Ee('code', {}, [P.element.outerHTML]),
                        j ? mn('chevronRight') : null,
                      ]),
                    ])
                  })
                )
              )),
            c.get() || u.get().length === 1)
          ) {
            const P = c.get() || u.get()[0],
              j = P.menu?.filter((k) =>
                k.some(
                  (h) =>
                    !h.selectors ||
                    h.selectors.some((f) => P.selectors.includes(f))
                )
              )
            j?.length &&
              S.appendChild(
                Ee(
                  'ul',
                  { class: 'menu-list' },
                  j.map((k) =>
                    Ee('li', {}, [
                      Ee(
                        'ul',
                        { class: 'menu-items' },
                        k.map(
                          ({
                            id: h,
                            title: f,
                            description: v,
                            iconLeft: B,
                            iconRight: R,
                            clickEvent: L,
                          }) => {
                            const N = L && (() => e.emit(L, h, Ng(P)))
                            return Ee('li', {}, [
                              Ee(
                                N ? 'button' : 'div',
                                N
                                  ? {
                                      class: 'menu-item',
                                      type: 'button',
                                      onClick: N,
                                    }
                                  : { class: 'menu-item' },
                                [
                                  B ? mn(B) : null,
                                  Ee('div', { class: 'menu-item-content' }, [
                                    Ee(v ? 'strong' : 'span', {}, [f]),
                                    v && Ee('span', {}, [v]),
                                  ]),
                                  R ? mn(R) : null,
                                ]
                              ),
                            ])
                          }
                        )
                      ),
                    ])
                  )
                )
              )
          }
          const $ = i.get()
          $
            ? (Object.assign(S.style, {
                display: 'block',
                left: `${S.style.position === 'fixed' ? $.x - window.scrollX : $.x}px`,
                top: `${S.style.position === 'fixed' ? $.y - window.scrollY : $.y}px`,
              }),
              Yc(S),
              requestAnimationFrame(() =>
                Lg(S, $, { topOffset: 15, centered: !0 })
              ))
            : (kg(S), Object.assign(S.style, { display: 'none' }))
        }, 'renderMenu')
        ;(u.subscribe(E), c.subscribe(E))
        let x = d((S) => {
            const O = Bg(S)
            r.set((F) => {
              const $ = O.id ? F.filter((P) => P.id !== O.id) : F
              return O.selectors?.length ? [...$, O] : $
            })
          }, 'addHighlight'),
          C = d((S) => {
            S && r.set((O) => O.filter((F) => F.id !== S))
          }, 'removeHighlight'),
          _ = d(() => {
            ;(r.set([]),
              n.set(new Map()),
              o.set([]),
              i.set(void 0),
              a.set(void 0),
              u.set([]),
              s.set([]),
              l.set(void 0),
              c.set(void 0))
          }, 'resetState'),
          D,
          I = d((S, O) => {
            const F = 'scrollIntoView-highlight'
            ;(clearTimeout(D), C(F))
            const $ = t.querySelector(S)
            if (!$) {
              console.warn(`Cannot scroll into view: ${S} not found`)
              return
            }
            $.scrollIntoView({ behavior: 'smooth', block: 'center', ...O })
            const P = `kf-${Math.random().toString(36).substring(2, 15)}`
            ;(r.set((j) => [
              ...j,
              {
                id: F,
                priority: 1e3,
                selectors: [S],
                styles: {
                  outline: '2px solid #1EA7FD',
                  outlineOffset: '-1px',
                  animation: `${P} 3s linear forwards`,
                },
                keyframes: `@keyframes ${P} {
          0% { outline: 2px solid #1EA7FD; }
          20% { outline: 2px solid #1EA7FD00; }
          40% { outline: 2px solid #1EA7FD; }
          60% { outline: 2px solid #1EA7FD00; }
          80% { outline: 2px solid #1EA7FD; }
          100% { outline: 2px solid #1EA7FD00; }
        }`,
              },
            ]),
              (D = setTimeout(() => C(F), 3500)))
          }, 'scrollIntoView'),
          T = d((S) => {
            requestAnimationFrame(() => a.set({ x: S.pageX, y: S.pageY }))
          }, 'onMouseMove')
        ;(t.body.addEventListener('mousemove', T),
          e.on(_g, x),
          e.on(Og, C),
          e.on(Ig, _),
          e.on(Rg, I),
          e.on(Le, ({ newPhase: S }) => {
            S === 'loading' && _()
          }))
      }, 'useHighlights')
    globalThis?.FEATURES?.highlight && Fe?.ready && Fe.ready().then(Mg)
    const Xc = d(() => ({}), 'default'),
      En = 'storybook/measure-addon',
      tO = `${En}/tool`,
      qg = 'measureEnabled',
      rO = {
        RESULT: `${En}/result`,
        REQUEST: `${En}/request`,
        CLEAR: `${En}/clear`,
      },
      zg = !1,
      fi = 'Invariant failed'
    function Ot(e, t) {
      if (!e) {
        if (zg) throw new Error(fi)
        const r = typeof t === 'function' ? t() : t,
          n = r ? ''.concat(fi, ': ').concat(r) : fi
        throw new Error(n)
      }
    }
    d(Ot, 'invariant')
    function Mi() {
      const e = q.document.documentElement,
        t = Math.max(e.scrollHeight, e.offsetHeight)
      return { width: Math.max(e.scrollWidth, e.offsetWidth), height: t }
    }
    d(Mi, 'getDocumentWidthAndHeight')
    function Np() {
      const e = q.document.createElement('canvas')
      e.id = 'storybook-addon-measure'
      const t = e.getContext('2d')
      Ot(t != null)
      const { width: r, height: n } = Mi()
      return (
        Sn(e, t, { width: r, height: n }),
        (e.style.position = 'absolute'),
        (e.style.left = '0'),
        (e.style.top = '0'),
        (e.style.zIndex = '2147483647'),
        (e.style.pointerEvents = 'none'),
        q.document.body.appendChild(e),
        { canvas: e, context: t, width: r, height: n }
      )
    }
    d(Np, 'createCanvas')
    function Sn(e, t, { width: r, height: n }) {
      ;((e.style.width = `${r}px`), (e.style.height = `${n}px`))
      const o = q.window.devicePixelRatio
      ;((e.width = Math.floor(r * o)),
        (e.height = Math.floor(n * o)),
        t.scale(o, o))
    }
    d(Sn, 'setCanvasWidthAndHeight')
    let Ae = {}
    function jp() {
      Ae.canvas || (Ae = Np())
    }
    d(jp, 'init')
    function qi() {
      Ae.context && Ae.context.clearRect(0, 0, Ae.width ?? 0, Ae.height ?? 0)
    }
    d(qi, 'clear')
    function Mp(e) {
      ;(qi(), e(Ae.context))
    }
    d(Mp, 'draw')
    function qp() {
      ;(Ot(Ae.canvas, 'Canvas should exist in the state.'),
        Ot(Ae.context, 'Context should exist in the state.'),
        Sn(Ae.canvas, Ae.context, { width: 0, height: 0 }))
      const { width: e, height: t } = Mi()
      ;(Sn(Ae.canvas, Ae.context, { width: e, height: t }),
        (Ae.width = e),
        (Ae.height = t))
    }
    d(qp, 'rescale')
    function zp() {
      Ae.canvas &&
        (qi(), Ae.canvas.parentNode?.removeChild(Ae.canvas), (Ae = {}))
    }
    d(zp, 'destroy')
    const Ut = {
        margin: '#f6b26b',
        border: '#ffe599',
        padding: '#93c47d',
        content: '#6fa8dc',
        text: '#232020',
      },
      st = 6
    function Ei(e, { x: t, y: r, w: n, h: o, r: i }) {
      ;((t = t - n / 2),
        (r = r - o / 2),
        n < 2 * i && (i = n / 2),
        o < 2 * i && (i = o / 2),
        e.beginPath(),
        e.moveTo(t + i, r),
        e.arcTo(t + n, r, t + n, r + o, i),
        e.arcTo(t + n, r + o, t, r + o, i),
        e.arcTo(t, r + o, t, r, i),
        e.arcTo(t, r, t + n, r, i),
        e.closePath())
    }
    d(Ei, 'roundedRect')
    function Up(
      e,
      { padding: t, border: r, width: n, height: o, top: i, left: a }
    ) {
      let u = n - r.left - r.right - t.left - t.right,
        s = o - t.top - t.bottom - r.top - r.bottom,
        l = a + r.left + t.left,
        c = i + r.top + t.top
      return (
        e === 'top'
          ? (l += u / 2)
          : e === 'right'
            ? ((l += u), (c += s / 2))
            : e === 'bottom'
              ? ((l += u / 2), (c += s))
              : e === 'left'
                ? (c += s / 2)
                : e === 'center' && ((l += u / 2), (c += s / 2)),
        { x: l, y: c }
      )
    }
    d(Up, 'positionCoordinate')
    function Hp(e, t, { margin: r, border: n, padding: o }, i, a) {
      let u = d((g) => 0, 'shift'),
        s = 0,
        l = 0,
        c = a ? 1 : 0.5,
        p = a ? i * 2 : 0
      return (
        e === 'padding'
          ? (u = d((g) => o[g] * c + p, 'shift'))
          : e === 'border'
            ? (u = d((g) => o[g] + n[g] * c + p, 'shift'))
            : e === 'margin' &&
              (u = d((g) => o[g] + n[g] + r[g] * c + p, 'shift')),
        t === 'top'
          ? (l = -u('top'))
          : t === 'right'
            ? (s = u('right'))
            : t === 'bottom'
              ? (l = u('bottom'))
              : t === 'left' && (s = -u('left')),
        { offsetX: s, offsetY: l }
      )
    }
    d(Hp, 'offset')
    function Vp(e, t) {
      return (
        Math.abs(e.x - t.x) < Math.abs(e.w + t.w) / 2 &&
        Math.abs(e.y - t.y) < Math.abs(e.h + t.h) / 2
      )
    }
    d(Vp, 'collide')
    function Wp(e, t, r) {
      return (
        e === 'top'
          ? (t.y = r.y - r.h - st)
          : e === 'right'
            ? (t.x = r.x + r.w / 2 + st + t.w / 2)
            : e === 'bottom'
              ? (t.y = r.y + r.h + st)
              : e === 'left' && (t.x = r.x - r.w / 2 - st - t.w / 2),
        { x: t.x, y: t.y }
      )
    }
    d(Wp, 'overlapAdjustment')
    function zi(e, t, { x: r, y: n, w: o, h: i }, a) {
      return (
        Ei(e, { x: r, y: n, w: o, h: i, r: 3 }),
        (e.fillStyle = `${Ut[t]}dd`),
        e.fill(),
        (e.strokeStyle = Ut[t]),
        e.stroke(),
        (e.fillStyle = Ut.text),
        e.fillText(a, r, n),
        Ei(e, { x: r, y: n, w: o, h: i, r: 3 }),
        (e.fillStyle = `${Ut[t]}dd`),
        e.fill(),
        (e.strokeStyle = Ut[t]),
        e.stroke(),
        (e.fillStyle = Ut.text),
        e.fillText(a, r, n),
        { x: r, y: n, w: o, h: i }
      )
    }
    d(zi, 'textWithRect')
    function Ui(e, t) {
      ;((e.font = '600 12px monospace'),
        (e.textBaseline = 'middle'),
        (e.textAlign = 'center'))
      const r = e.measureText(t),
        n = r.actualBoundingBoxAscent + r.actualBoundingBoxDescent,
        o = r.width + st * 2,
        i = n + st * 2
      return { w: o, h: i }
    }
    d(Ui, 'configureText')
    function Gp(e, t, { type: r, position: n = 'center', text: o }, i, a = !1) {
      let { x: u, y: s } = Up(n, t),
        { offsetX: l, offsetY: c } = Hp(r, n, t, st + 1, a)
      ;((u += l), (s += c))
      const { w: p, h: g } = Ui(e, o)
      if (i && Vp({ x: u, y: s, w: p, h: g }, i)) {
        const m = Wp(n, { x: u, y: s, w: p, h: g }, i)
        ;((u = m.x), (s = m.y))
      }
      return zi(e, r, { x: u, y: s, w: p, h: g }, o)
    }
    d(Gp, 'drawLabel')
    function Yp(e, { w: t, h: r }) {
      const n = t * 0.5 + st,
        o = r * 0.5 + st
      return {
        offsetX: (e.x === 'left' ? -1 : 1) * n,
        offsetY: (e.y === 'top' ? -1 : 1) * o,
      }
    }
    d(Yp, 'floatingOffset')
    function Kp(e, t, { type: r, text: n }) {
      let { floatingAlignment: o, extremities: i } = t,
        a = i[o.x],
        u = i[o.y],
        { w: s, h: l } = Ui(e, n),
        { offsetX: c, offsetY: p } = Yp(o, { w: s, h: l })
      return ((a += c), (u += p), zi(e, r, { x: a, y: u, w: s, h: l }, n))
    }
    d(Kp, 'drawFloatingLabel')
    function Ht(e, t, r, n) {
      const o = []
      r.forEach((i, a) => {
        const u =
          n && i.position === 'center' ? Kp(e, t, i) : Gp(e, t, i, o[a - 1], n)
        o[a] = u
      })
    }
    d(Ht, 'drawStack')
    function Xp(e, t, r, n) {
      const o = r.reduce(
        (i, a) => (
          Object.prototype.hasOwnProperty.call(i, a.position) ||
            (i[a.position] = []),
          i[a.position]?.push(a),
          i
        ),
        {}
      )
      ;(o.top && Ht(e, t, o.top, n),
        o.right && Ht(e, t, o.right, n),
        o.bottom && Ht(e, t, o.bottom, n),
        o.left && Ht(e, t, o.left, n),
        o.center && Ht(e, t, o.center, n))
    }
    d(Xp, 'labelStacks')
    const Bn = {
        margin: '#f6b26ba8',
        border: '#ffe599a8',
        padding: '#93c47d8c',
        content: '#6fa8dca8',
      },
      Jc = 30
    function ke(e) {
      return parseInt(e.replace('px', ''), 10)
    }
    d(ke, 'pxToNumber')
    function _t(e) {
      return Number.isInteger(e) ? e : e.toFixed(2)
    }
    d(_t, 'round')
    function Pn(e) {
      return e.filter((t) => t.text !== 0 && t.text !== '0')
    }
    d(Pn, 'filterZeroValues')
    function Jp(e) {
      const t = {
          top: q.window.scrollY,
          bottom: q.window.scrollY + q.window.innerHeight,
          left: q.window.scrollX,
          right: q.window.scrollX + q.window.innerWidth,
        },
        r = {
          top: Math.abs(t.top - e.top),
          bottom: Math.abs(t.bottom - e.bottom),
          left: Math.abs(t.left - e.left),
          right: Math.abs(t.right - e.right),
        }
      return {
        x: r.left > r.right ? 'left' : 'right',
        y: r.top > r.bottom ? 'top' : 'bottom',
      }
    }
    d(Jp, 'floatingAlignment')
    function Zp(e) {
      let t = q.getComputedStyle(e),
        {
          top: r,
          left: n,
          right: o,
          bottom: i,
          width: a,
          height: u,
        } = e.getBoundingClientRect(),
        {
          marginTop: s,
          marginBottom: l,
          marginLeft: c,
          marginRight: p,
          paddingTop: g,
          paddingBottom: m,
          paddingLeft: A,
          paddingRight: b,
          borderBottomWidth: E,
          borderTopWidth: x,
          borderLeftWidth: C,
          borderRightWidth: _,
        } = t
      ;((r = r + q.window.scrollY),
        (n = n + q.window.scrollX),
        (i = i + q.window.scrollY),
        (o = o + q.window.scrollX))
      const D = { top: ke(s), bottom: ke(l), left: ke(c), right: ke(p) },
        I = { top: ke(g), bottom: ke(m), left: ke(A), right: ke(b) },
        T = { top: ke(x), bottom: ke(E), left: ke(C), right: ke(_) },
        S = {
          top: r - D.top,
          bottom: i + D.bottom,
          left: n - D.left,
          right: o + D.right,
        }
      return {
        margin: D,
        padding: I,
        border: T,
        top: r,
        left: n,
        bottom: i,
        right: o,
        width: a,
        height: u,
        extremities: S,
        floatingAlignment: Jp(S),
      }
    }
    d(Zp, 'measureElement')
    function Qp(
      e,
      { margin: t, width: r, height: n, top: o, left: i, bottom: a, right: u }
    ) {
      const s = n + t.bottom + t.top
      ;((e.fillStyle = Bn.margin),
        e.fillRect(i, o - t.top, r, t.top),
        e.fillRect(u, o - t.top, t.right, s),
        e.fillRect(i, a, r, t.bottom),
        e.fillRect(i - t.left, o - t.top, t.left, s))
      const l = [
        { type: 'margin', text: _t(t.top), position: 'top' },
        { type: 'margin', text: _t(t.right), position: 'right' },
        { type: 'margin', text: _t(t.bottom), position: 'bottom' },
        { type: 'margin', text: _t(t.left), position: 'left' },
      ]
      return Pn(l)
    }
    d(Qp, 'drawMargin')
    function ed(
      e,
      {
        padding: t,
        border: r,
        width: n,
        height: o,
        top: i,
        left: a,
        bottom: u,
        right: s,
      }
    ) {
      const l = n - r.left - r.right,
        c = o - t.top - t.bottom - r.top - r.bottom
      ;((e.fillStyle = Bn.padding),
        e.fillRect(a + r.left, i + r.top, l, t.top),
        e.fillRect(s - t.right - r.right, i + t.top + r.top, t.right, c),
        e.fillRect(a + r.left, u - t.bottom - r.bottom, l, t.bottom),
        e.fillRect(a + r.left, i + t.top + r.top, t.left, c))
      const p = [
        { type: 'padding', text: t.top, position: 'top' },
        { type: 'padding', text: t.right, position: 'right' },
        { type: 'padding', text: t.bottom, position: 'bottom' },
        { type: 'padding', text: t.left, position: 'left' },
      ]
      return Pn(p)
    }
    d(ed, 'drawPadding')
    function td(
      e,
      { border: t, width: r, height: n, top: o, left: i, bottom: a, right: u }
    ) {
      const s = n - t.top - t.bottom
      ;((e.fillStyle = Bn.border),
        e.fillRect(i, o, r, t.top),
        e.fillRect(i, a - t.bottom, r, t.bottom),
        e.fillRect(i, o + t.top, t.left, s),
        e.fillRect(u - t.right, o + t.top, t.right, s))
      const l = [
        { type: 'border', text: t.top, position: 'top' },
        { type: 'border', text: t.right, position: 'right' },
        { type: 'border', text: t.bottom, position: 'bottom' },
        { type: 'border', text: t.left, position: 'left' },
      ]
      return Pn(l)
    }
    d(td, 'drawBorder')
    function rd(
      e,
      { padding: t, border: r, width: n, height: o, top: i, left: a }
    ) {
      const u = n - r.left - r.right - t.left - t.right,
        s = o - t.top - t.bottom - r.top - r.bottom
      return (
        (e.fillStyle = Bn.content),
        e.fillRect(a + r.left + t.left, i + r.top + t.top, u, s),
        [{ type: 'content', position: 'center', text: `${_t(u)} x ${_t(s)}` }]
      )
    }
    d(rd, 'drawContent')
    function nd(e) {
      return (t) => {
        if (e && t) {
          const r = Zp(e),
            n = Qp(t, r),
            o = ed(t, r),
            i = td(t, r),
            a = rd(t, r),
            u = r.width <= Jc * 3 || r.height <= Jc
          Xp(t, r, [...a, ...o, ...i, ...n], u)
        }
      }
    }
    d(nd, 'drawBoxModel')
    function od(e) {
      Mp(nd(e))
    }
    d(od, 'drawSelectedElement')
    let Ug = d((e, t) => {
        const r = q.document.elementFromPoint(e, t),
          n = d((o) => {
            if (o && o.shadowRoot) {
              const i = o.shadowRoot.elementFromPoint(e, t)
              return o.isEqualNode(i) ? o : i.shadowRoot ? n(i) : i
            }
            return o
          }, 'crawlShadows')
        return n(r) || r
      }, 'deepElementFromPoint'),
      Zc,
      yn = { x: 0, y: 0 }
    function Ai(e, t) {
      ;((Zc = Ug(e, t)), od(Zc))
    }
    d(Ai, 'findAndDrawElement')
    var Hg = d((e, t) => {
        const { measureEnabled: r } = t.globals || {}
        return (
          Je(() => {
            if (typeof globalThis.document > 'u') return
            const n = d((o) => {
              window.requestAnimationFrame(() => {
                ;(o.stopPropagation(), (yn.x = o.clientX), (yn.y = o.clientY))
              })
            }, 'onPointerMove')
            return (
              globalThis.document.addEventListener('pointermove', n),
              () => {
                globalThis.document.removeEventListener('pointermove', n)
              }
            )
          }, []),
          Je(() => {
            const n = d((i) => {
                window.requestAnimationFrame(() => {
                  ;(i.stopPropagation(), Ai(i.clientX, i.clientY))
                })
              }, 'onPointerOver'),
              o = d(() => {
                window.requestAnimationFrame(() => {
                  qp()
                })
              }, 'onResize')
            return (
              t.viewMode === 'story' &&
                r &&
                (globalThis.document.addEventListener('pointerover', n),
                jp(),
                globalThis.window.addEventListener('resize', o),
                Ai(yn.x, yn.y)),
              () => {
                ;(globalThis.window.removeEventListener('resize', o), zp())
              }
            )
          }, [r, t.viewMode]),
          e()
        )
      }, 'withMeasure'),
      Vg = globalThis.FEATURES?.measure ? [Hg] : [],
      Wg = { [qg]: !1 },
      Qc = d(() => ({ decorators: Vg, initialGlobals: Wg }), 'default'),
      id = 'outline',
      ep = d((e) => {
        ;(Array.isArray(e) ? e : [e]).forEach(Gg)
      }, 'clearStyles'),
      Gg = d((e) => {
        const t = typeof e === 'string' ? e : e.join(''),
          r = q.document.getElementById(t)
        r && r.parentElement && r.parentElement.removeChild(r)
      }, 'clearStyle'),
      Yg = d((e, t) => {
        const r = q.document.getElementById(e)
        if (r) r.innerHTML !== t && (r.innerHTML = t)
        else {
          const n = q.document.createElement('style')
          ;(n.setAttribute('id', e),
            (n.innerHTML = t),
            q.document.head.appendChild(n))
        }
      }, 'addOutlineStyles')
    function qe(e) {
      for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r]
      let n = Array.from(typeof e === 'string' ? [e] : e)
      n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, '')
      const o = n.reduce(function (u, s) {
        const l = s.match(/\n([\t ]+|(?!\s).)/g)
        return l
          ? u.concat(
              l.map(function (c) {
                let p, g
                return (g =
                  (p = c.match(/[\t ]/g)) === null || p === void 0
                    ? void 0
                    : p.length) !== null && g !== void 0
                  ? g
                  : 0
              })
            )
          : u
      }, [])
      if (o.length) {
        const i = new RegExp(
          `
[	 ]{${Math.min.apply(Math, o)}}`,
          'g'
        )
        n = n.map(function (u) {
          return u.replace(
            i,
            `
`
          )
        })
      }
      n[0] = n[0].replace(/^\r?\n/, '')
      let a = n[0]
      return (
        t.forEach(function (u, s) {
          let l = a.match(/(?:^|\n)( *)$/),
            c = l ? l[1] : '',
            p = u
          ;(typeof u === 'string' &&
            u.includes(`
`) &&
            (p = String(u)
              .split(
                `
`
              )
              .map(function (g, m) {
                return m === 0 ? g : `${c}${g}`
              }).join(`
`)),
            (a += p + n[s + 1]))
        }),
        a
      )
    }
    d(qe, 'dedent')
    function ad(e) {
      return qe`
    ${e} body {
      outline: 1px solid #2980b9 !important;
    }

    ${e} article {
      outline: 1px solid #3498db !important;
    }

    ${e} nav {
      outline: 1px solid #0088c3 !important;
    }

    ${e} aside {
      outline: 1px solid #33a0ce !important;
    }

    ${e} section {
      outline: 1px solid #66b8da !important;
    }

    ${e} header {
      outline: 1px solid #99cfe7 !important;
    }

    ${e} footer {
      outline: 1px solid #cce7f3 !important;
    }

    ${e} h1 {
      outline: 1px solid #162544 !important;
    }

    ${e} h2 {
      outline: 1px solid #314e6e !important;
    }

    ${e} h3 {
      outline: 1px solid #3e5e85 !important;
    }

    ${e} h4 {
      outline: 1px solid #449baf !important;
    }

    ${e} h5 {
      outline: 1px solid #c7d1cb !important;
    }

    ${e} h6 {
      outline: 1px solid #4371d0 !important;
    }

    ${e} main {
      outline: 1px solid #2f4f90 !important;
    }

    ${e} address {
      outline: 1px solid #1a2c51 !important;
    }

    ${e} div {
      outline: 1px solid #036cdb !important;
    }

    ${e} p {
      outline: 1px solid #ac050b !important;
    }

    ${e} hr {
      outline: 1px solid #ff063f !important;
    }

    ${e} pre {
      outline: 1px solid #850440 !important;
    }

    ${e} blockquote {
      outline: 1px solid #f1b8e7 !important;
    }

    ${e} ol {
      outline: 1px solid #ff050c !important;
    }

    ${e} ul {
      outline: 1px solid #d90416 !important;
    }

    ${e} li {
      outline: 1px solid #d90416 !important;
    }

    ${e} dl {
      outline: 1px solid #fd3427 !important;
    }

    ${e} dt {
      outline: 1px solid #ff0043 !important;
    }

    ${e} dd {
      outline: 1px solid #e80174 !important;
    }

    ${e} figure {
      outline: 1px solid #ff00bb !important;
    }

    ${e} figcaption {
      outline: 1px solid #bf0032 !important;
    }

    ${e} table {
      outline: 1px solid #00cc99 !important;
    }

    ${e} caption {
      outline: 1px solid #37ffc4 !important;
    }

    ${e} thead {
      outline: 1px solid #98daca !important;
    }

    ${e} tbody {
      outline: 1px solid #64a7a0 !important;
    }

    ${e} tfoot {
      outline: 1px solid #22746b !important;
    }

    ${e} tr {
      outline: 1px solid #86c0b2 !important;
    }

    ${e} th {
      outline: 1px solid #a1e7d6 !important;
    }

    ${e} td {
      outline: 1px solid #3f5a54 !important;
    }

    ${e} col {
      outline: 1px solid #6c9a8f !important;
    }

    ${e} colgroup {
      outline: 1px solid #6c9a9d !important;
    }

    ${e} button {
      outline: 1px solid #da8301 !important;
    }

    ${e} datalist {
      outline: 1px solid #c06000 !important;
    }

    ${e} fieldset {
      outline: 1px solid #d95100 !important;
    }

    ${e} form {
      outline: 1px solid #d23600 !important;
    }

    ${e} input {
      outline: 1px solid #fca600 !important;
    }

    ${e} keygen {
      outline: 1px solid #b31e00 !important;
    }

    ${e} label {
      outline: 1px solid #ee8900 !important;
    }

    ${e} legend {
      outline: 1px solid #de6d00 !important;
    }

    ${e} meter {
      outline: 1px solid #e8630c !important;
    }

    ${e} optgroup {
      outline: 1px solid #b33600 !important;
    }

    ${e} option {
      outline: 1px solid #ff8a00 !important;
    }

    ${e} output {
      outline: 1px solid #ff9619 !important;
    }

    ${e} progress {
      outline: 1px solid #e57c00 !important;
    }

    ${e} select {
      outline: 1px solid #e26e0f !important;
    }

    ${e} textarea {
      outline: 1px solid #cc5400 !important;
    }

    ${e} details {
      outline: 1px solid #33848f !important;
    }

    ${e} summary {
      outline: 1px solid #60a1a6 !important;
    }

    ${e} command {
      outline: 1px solid #438da1 !important;
    }

    ${e} menu {
      outline: 1px solid #449da6 !important;
    }

    ${e} del {
      outline: 1px solid #bf0000 !important;
    }

    ${e} ins {
      outline: 1px solid #400000 !important;
    }

    ${e} img {
      outline: 1px solid #22746b !important;
    }

    ${e} iframe {
      outline: 1px solid #64a7a0 !important;
    }

    ${e} embed {
      outline: 1px solid #98daca !important;
    }

    ${e} object {
      outline: 1px solid #00cc99 !important;
    }

    ${e} param {
      outline: 1px solid #37ffc4 !important;
    }

    ${e} video {
      outline: 1px solid #6ee866 !important;
    }

    ${e} audio {
      outline: 1px solid #027353 !important;
    }

    ${e} source {
      outline: 1px solid #012426 !important;
    }

    ${e} canvas {
      outline: 1px solid #a2f570 !important;
    }

    ${e} track {
      outline: 1px solid #59a600 !important;
    }

    ${e} map {
      outline: 1px solid #7be500 !important;
    }

    ${e} area {
      outline: 1px solid #305900 !important;
    }

    ${e} a {
      outline: 1px solid #ff62ab !important;
    }

    ${e} em {
      outline: 1px solid #800b41 !important;
    }

    ${e} strong {
      outline: 1px solid #ff1583 !important;
    }

    ${e} i {
      outline: 1px solid #803156 !important;
    }

    ${e} b {
      outline: 1px solid #cc1169 !important;
    }

    ${e} u {
      outline: 1px solid #ff0430 !important;
    }

    ${e} s {
      outline: 1px solid #f805e3 !important;
    }

    ${e} small {
      outline: 1px solid #d107b2 !important;
    }

    ${e} abbr {
      outline: 1px solid #4a0263 !important;
    }

    ${e} q {
      outline: 1px solid #240018 !important;
    }

    ${e} cite {
      outline: 1px solid #64003c !important;
    }

    ${e} dfn {
      outline: 1px solid #b4005a !important;
    }

    ${e} sub {
      outline: 1px solid #dba0c8 !important;
    }

    ${e} sup {
      outline: 1px solid #cc0256 !important;
    }

    ${e} time {
      outline: 1px solid #d6606d !important;
    }

    ${e} code {
      outline: 1px solid #e04251 !important;
    }

    ${e} kbd {
      outline: 1px solid #5e001f !important;
    }

    ${e} samp {
      outline: 1px solid #9c0033 !important;
    }

    ${e} var {
      outline: 1px solid #d90047 !important;
    }

    ${e} mark {
      outline: 1px solid #ff0053 !important;
    }

    ${e} bdi {
      outline: 1px solid #bf3668 !important;
    }

    ${e} bdo {
      outline: 1px solid #6f1400 !important;
    }

    ${e} ruby {
      outline: 1px solid #ff7b93 !important;
    }

    ${e} rt {
      outline: 1px solid #ff2f54 !important;
    }

    ${e} rp {
      outline: 1px solid #803e49 !important;
    }

    ${e} span {
      outline: 1px solid #cc2643 !important;
    }

    ${e} br {
      outline: 1px solid #db687d !important;
    }

    ${e} wbr {
      outline: 1px solid #db175b !important;
    }`
    }
    d(ad, 'outlineCSS')
    var Kg = d((e, t) => {
        const r = t.globals || {},
          n = [!0, 'true'].includes(r[id]),
          o = t.viewMode === 'docs',
          i = Li(
            () => ad(o ? '[data-story-block="true"]' : '.sb-show-main'),
            [t]
          )
        return (
          Je(() => {
            const a = o ? `addon-outline-docs-${t.id}` : 'addon-outline'
            return (
              n ? Yg(a, i) : ep(a),
              () => {
                ep(a)
              }
            )
          }, [n, i, t]),
          e()
        )
      }, 'withOutline'),
      Xg = globalThis.FEATURES?.outline ? [Kg] : [],
      Jg = { [id]: !1 },
      tp = d(() => ({ decorators: Xg, initialGlobals: Jg }), 'default'),
      Zg = d(({ parameters: e }) => {
        e?.test?.mockReset === !0
          ? as()
          : e?.test?.clearMocks === !0
            ? rs()
            : e?.test?.restoreMocks !== !1 && us()
      }, 'resetAllMocksLoader'),
      wi = d((e, t = 0, r) => {
        if (t > 5 || e == null) return e
        if (os(e)) return (r && e.mockName(r), e)
        if (
          typeof e === 'function' &&
          'isAction' in e &&
          e.isAction &&
          !('implicit' in e && e.implicit)
        ) {
          const n = ns(e)
          return (r && n.mockName(r), n)
        }
        if (Array.isArray(e)) {
          t++
          for (let n = 0; n < e.length; n++)
            Object.getOwnPropertyDescriptor(e, n)?.writable &&
              (e[n] = wi(e[n], t))
          return e
        }
        if (typeof e === 'object' && e.constructor === Object) {
          t++
          for (const [n, o] of Object.entries(e))
            Object.getOwnPropertyDescriptor(e, n)?.writable &&
              (e[n] = wi(o, t, n))
          return e
        }
        return e
      }, 'traverseArgs'),
      Qg = d(({ initialArgs: e }) => {
        wi(e)
      }, 'nameSpiesAndWrapActionsInSpies'),
      rp = !1,
      e0 = d(async (e) => {
        globalThis.HTMLElement &&
          e.canvasElement instanceof globalThis.HTMLElement &&
          (e.canvas = ls(e.canvasElement))
        const t = globalThis.window?.navigator?.clipboard
        if (t) {
          ;((e.userEvent = Er(
            { userEvent: ss.setup() },
            { intercept: !0 }
          ).userEvent),
            Object.defineProperty(globalThis.window.navigator, 'clipboard', {
              get: d(() => t, 'get'),
              configurable: !0,
            }))
          let r = HTMLElement.prototype.focus
          rp ||
            Object.defineProperties(HTMLElement.prototype, {
              focus: {
                configurable: !0,
                set: d((n) => {
                  ;((r = n), (rp = !0))
                }, 'set'),
                get: d(() => r, 'get'),
              },
            })
        }
      }, 'enhanceContext'),
      np = d(() => ({ loaders: [Zg, Qg, e0] }), 'default'),
      ud = 'storybook/viewport',
      t0 = 'viewport',
      hO = `${ud}/panel`,
      mO = `${ud}/tool`,
      r0 = { [t0]: { value: void 0, isRotated: !1 } },
      op = d(() => ({ initialGlobals: r0 }), 'default')
    function Hi() {
      return [
        (Qc.default ?? Qc)(),
        (qc.default ?? qc)(),
        (Xc.default ?? Xc)(),
        (tp.default ?? tp)(),
        (op.default ?? op)(),
        (kc.default ?? kc)(),
        (zc.default ?? zc)(),
        (np.default ?? np)(),
      ]
    }
    d(Hi, 'getCoreAnnotations')
    var Vt = Symbol('incompatible'),
      Si = d((e, t) => {
        const r = t.type
        if (e == null || !r || t.mapping) return e
        switch (r.name) {
          case 'string':
            return String(e)
          case 'enum':
            return e
          case 'number':
            return Number(e)
          case 'boolean':
            return String(e) === 'true'
          case 'array':
            return !r.value || !Array.isArray(e)
              ? Vt
              : e.reduce((n, o, i) => {
                  const a = Si(o, { type: r.value })
                  return (a !== Vt && (n[i] = a), n)
                }, new Array(e.length))
          case 'object':
            return typeof e === 'string' || typeof e === 'number'
              ? e
              : !r.value || typeof e !== 'object'
                ? Vt
                : Object.entries(e).reduce((n, [o, i]) => {
                    const a = Si(i, { type: r.value[o] })
                    return a === Vt ? n : Object.assign(n, { [o]: a })
                  }, {})
          default:
            return Vt
        }
      }, 'map'),
      n0 = d(
        (e, t) =>
          Object.entries(e).reduce((r, [n, o]) => {
            if (!t[n]) return r
            const i = Si(o, t[n])
            return i === Vt ? r : Object.assign(r, { [n]: i })
          }, {}),
        'mapArgsToTypes'
      ),
      vi = d(
        (e, t) =>
          Array.isArray(e) && Array.isArray(t)
            ? t
                .reduce((r, n, o) => ((r[o] = vi(e[o], t[o])), r), [...e])
                .filter((r) => r !== void 0)
            : !Ye(e) || !Ye(t)
              ? t
              : Object.keys({ ...e, ...t }).reduce((r, n) => {
                  if (n in t) {
                    const o = vi(e[n], t[n])
                    o !== void 0 && (r[n] = o)
                  } else r[n] = e[n]
                  return r
                }, {}),
        'combineArgs'
      ),
      o0 = d(
        (e, t) =>
          Object.entries(t).reduce((r, [n, { options: o }]) => {
            function i() {
              return (n in e && (r[n] = e[n]), r)
            }
            if ((d(i, 'allowArg'), !o)) return i()
            if (!Array.isArray(o))
              return (
                He.error(qe`
        Invalid argType: '${n}.options' should be an array.

        More info: https://storybook.js.org/docs/api/arg-types
      `),
                i()
              )
            if (o.some((p) => p && ['object', 'function'].includes(typeof p)))
              return (
                He.error(qe`
        Invalid argType: '${n}.options' should only contain primitives. Use a 'mapping' for complex values.

        More info: https://storybook.js.org/docs/writing-stories/args#mapping-to-complex-arg-values
      `),
                i()
              )
            const a = Array.isArray(e[n]),
              u = a && e[n].findIndex((p) => !o.includes(p)),
              s = a && u === -1
            if (e[n] === void 0 || o.includes(e[n]) || s) return i()
            const l = a ? `${n}[${u}]` : n,
              c = o
                .map((p) => (typeof p === 'string' ? `'${p}'` : String(p)))
                .join(', ')
            return (
              He.warn(
                `Received illegal value for '${l}'. Supported options: ${c}`
              ),
              r
            )
          }, {}),
        'validateOptions'
      ),
      Sr = Symbol('Deeply equal'),
      vn = d((e, t) => {
        if (typeof e !== typeof t) return t
        if (Bp(e, t)) return Sr
        if (Array.isArray(e) && Array.isArray(t)) {
          const r = t.reduce((n, o, i) => {
            const a = vn(e[i], o)
            return (a !== Sr && (n[i] = a), n)
          }, new Array(t.length))
          return t.length >= e.length
            ? r
            : r.concat(new Array(e.length - t.length).fill(void 0))
        }
        return Ye(e) && Ye(t)
          ? Object.keys({ ...e, ...t }).reduce((r, n) => {
              const o = vn(e?.[n], t?.[n])
              return o === Sr ? r : Object.assign(r, { [n]: o })
            }, {})
          : t
      }, 'deepDiff'),
      sd = 'UNTARGETED'
    function ld({ args: e, argTypes: t }) {
      const r = {}
      return (
        Object.entries(e).forEach(([n, o]) => {
          const { target: i = sd } = t[n] || {}
          ;((r[i] = r[i] || {}), (r[i][n] = o))
        }),
        r
      )
    }
    d(ld, 'groupArgsByTarget')
    function cd(e) {
      return (Object.keys(e).forEach((t) => e[t] === void 0 && delete e[t]), e)
    }
    d(cd, 'deleteUndefined')
    const pd = class {
      constructor() {
        ;((this.initialArgsByStoryId = {}), (this.argsByStoryId = {}))
      }
      get(t) {
        if (!(t in this.argsByStoryId))
          throw new Error(`No args known for ${t} -- has it been rendered yet?`)
        return this.argsByStoryId[t]
      }
      setInitial(t) {
        if (!this.initialArgsByStoryId[t.id])
          ((this.initialArgsByStoryId[t.id] = t.initialArgs),
            (this.argsByStoryId[t.id] = t.initialArgs))
        else if (this.initialArgsByStoryId[t.id] !== t.initialArgs) {
          const r = vn(
            this.initialArgsByStoryId[t.id],
            this.argsByStoryId[t.id]
          )
          ;((this.initialArgsByStoryId[t.id] = t.initialArgs),
            (this.argsByStoryId[t.id] = t.initialArgs),
            r !== Sr && this.updateFromDelta(t, r))
        }
      }
      updateFromDelta(t, r) {
        const n = o0(r, t.argTypes)
        this.argsByStoryId[t.id] = vi(this.argsByStoryId[t.id], n)
      }
      updateFromPersisted(t, r) {
        const n = n0(r, t.argTypes)
        return this.updateFromDelta(t, n)
      }
      update(t, r) {
        if (!(t in this.argsByStoryId))
          throw new Error(`No args known for ${t} -- has it been rendered yet?`)
        this.argsByStoryId[t] = cd({ ...this.argsByStoryId[t], ...r })
      }
    }
    d(pd, 'ArgsStore')
    const i0 = pd,
      dd = d(
        (e = {}) =>
          Object.entries(e).reduce(
            (t, [r, { defaultValue: n }]) => (typeof n < 'u' && (t[r] = n), t),
            {}
          ),
        'getValuesFromArgTypes'
      ),
      fd = class {
        constructor({ globals: t = {}, globalTypes: r = {} }) {
          this.set({ globals: t, globalTypes: r })
        }
        set({ globals: t = {}, globalTypes: r = {} }) {
          const n = this.initialGlobals && vn(this.initialGlobals, this.globals)
          this.allowedGlobalNames = new Set([
            ...Object.keys(t),
            ...Object.keys(r),
          ])
          const o = dd(r)
          ;((this.initialGlobals = { ...o, ...t }),
            (this.globals = this.initialGlobals),
            n && n !== Sr && this.updateFromPersisted(n))
        }
        filterAllowedGlobals(t) {
          return Object.entries(t).reduce(
            (r, [n, o]) => (
              this.allowedGlobalNames.has(n)
                ? (r[n] = o)
                : Q.warn(
                    `Attempted to set a global (${n}) that is not defined in initial globals or globalTypes`
                  ),
              r
            ),
            {}
          )
        }
        updateFromPersisted(t) {
          const r = this.filterAllowedGlobals(t)
          this.globals = { ...this.globals, ...r }
        }
        get() {
          return this.globals
        }
        update(t) {
          this.globals = { ...this.globals, ...this.filterAllowedGlobals(t) }
          for (const r in t)
            t[r] === void 0 && (this.globals[r] = this.initialGlobals[r])
        }
      }
    d(fd, 'GlobalsStore')
    const a0 = fd,
      u0 = Qt(yp(), 1),
      s0 = (0, u0.default)(1)((e) =>
        Object.values(e).reduce(
          (t, r) => ((t[r.importPath] = t[r.importPath] || r), t),
          {}
        )
      ),
      hd = class {
        constructor({ entries: t } = { v: 5, entries: {} }) {
          this.entries = t
        }
        entryFromSpecifier(t) {
          const r = Object.values(this.entries)
          if (t === '*') return r[0]
          if (typeof t === 'string')
            return this.entries[t]
              ? this.entries[t]
              : r.find((i) => i.id.startsWith(t))
          const { name: n, title: o } = t
          return r.find((i) => i.name === n && i.title === o)
        }
        storyIdToEntry(t) {
          const r = this.entries[t]
          if (!r) throw new Ru({ storyId: t })
          return r
        }
        importPathToEntry(t) {
          return s0(this.entries)[t]
        }
      }
    d(hd, 'StoryIndexStore')
    const l0 = hd,
      c0 = d((e) => (typeof e === 'string' ? { name: e } : e), 'normalizeType'),
      p0 = d(
        (e) => (typeof e === 'string' ? { type: e } : e),
        'normalizeControl'
      ),
      d0 = d((e, t) => {
        let { type: r, control: n, ...o } = e,
          i = { name: t, ...o }
        return (
          r && (i.type = c0(r)),
          n ? (i.control = p0(n)) : n === !1 && (i.control = { disable: !0 }),
          i
        )
      }, 'normalizeInputType'),
      Cn = d((e) => Kt(e, d0), 'normalizeInputTypes'),
      ce = d((e) => (Array.isArray(e) ? e : e ? [e] : []), 'normalizeArrays'),
      f0 = qe`
CSF .story annotations deprecated; annotate story functions directly:
- StoryFn.story.name => StoryFn.storyName
- StoryFn.story.(parameters|decorators) => StoryFn.(parameters|decorators)
See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#hoisted-csf-annotations for details and codemod.
`
    function xn(e, t, r) {
      const n = t,
        o = typeof t === 'function' ? t : null,
        { story: i } = n
      i && (Q.debug('deprecated story', i), Vr(f0))
      const a = Rc(e),
        u = (typeof n !== 'function' && n.name) || n.storyName || i?.name || a,
        s = [...ce(n.decorators), ...ce(i?.decorators)],
        l = { ...i?.parameters, ...n.parameters },
        c = { ...i?.args, ...n.args },
        p = { ...i?.argTypes, ...n.argTypes },
        g = [...ce(n.loaders), ...ce(i?.loaders)],
        m = [...ce(n.beforeEach), ...ce(i?.beforeEach)],
        A = [...ce(n.afterEach), ...ce(i?.afterEach)],
        { render: b, play: E, tags: x = [], globals: C = {} } = n,
        _ = l.__id || Ic(r.id, a)
      return {
        moduleExport: t,
        id: _,
        name: u,
        tags: x,
        decorators: s,
        parameters: l,
        args: c,
        argTypes: Cn(p),
        loaders: g,
        beforeEach: m,
        afterEach: A,
        globals: C,
        ...(b && { render: b }),
        ...(o && { userStoryFn: o }),
        ...(E && { play: E }),
      }
    }
    d(xn, 'normalizeStory')
    function Dn(e, t = e.title, r) {
      const { id: n, argTypes: o } = e
      return {
        id: si(n || t),
        ...e,
        title: t,
        ...(o && { argTypes: Cn(o) }),
        parameters: { fileName: r, ...e.parameters },
      }
    }
    d(Dn, 'normalizeComponentAnnotations')
    const h0 = d((e) => {
        const { globals: t, globalTypes: r } = e
        ;(t || r) &&
          Q.error(
            'Global args/argTypes can only be set globally',
            JSON.stringify({ globals: t, globalTypes: r })
          )
      }, 'checkGlobals'),
      m0 = d((e) => {
        const { options: t } = e
        t?.storySort &&
          Q.error('The storySort option parameter can only be set globally')
      }, 'checkStorySort'),
      bn = d((e) => {
        e && (h0(e), m0(e))
      }, 'checkDisallowedParameters')
    function md(e, t, r) {
      let { default: n, __namedExportsOrder: o, ...i } = e,
        a = Object.values(i)[0]
      if (Dt(a)) {
        const l = Dn(a.meta.input, r, t)
        bn(l.parameters)
        const c = { meta: l, stories: {}, moduleExports: e }
        return (
          Object.keys(i).forEach((p) => {
            if (zt(p, l)) {
              const g = xn(p, i[p].input, l)
              ;(bn(g.parameters), (c.stories[g.id] = g))
            }
          }),
          (c.projectAnnotations = a.meta.preview.composed),
          c
        )
      }
      const u = Dn(n, r, t)
      bn(u.parameters)
      const s = { meta: u, stories: {}, moduleExports: e }
      return (
        Object.keys(i).forEach((l) => {
          if (zt(l, u)) {
            const c = xn(l, i[l], u)
            ;(bn(c.parameters), (s.stories[c.id] = c))
          }
        }),
        s
      )
    }
    d(md, 'processCSFFile')
    function gd(e) {
      return e != null && yd(e).includes('mount')
    }
    d(gd, 'mountDestructured')
    function yd(e) {
      const t = e.toString().match(/[^(]*\(([^)]*)/)
      if (!t) return []
      const r = Ci(t[1])
      if (!r.length) return []
      const n = r[0]
      return n.startsWith('{') && n.endsWith('}')
        ? Ci(n.slice(1, -1).replace(/\s/g, '')).map((o) =>
            o.replace(/:.*|=.*/g, '')
          )
        : []
    }
    d(yd, 'getUsedProps')
    function Ci(e) {
      let t = [],
        r = [],
        n = 0
      for (let i = 0; i < e.length; i++)
        if (e[i] === '{' || e[i] === '[') r.push(e[i] === '{' ? '}' : ']')
        else if (e[i] === r[r.length - 1]) r.pop()
        else if (!r.length && e[i] === ',') {
          const a = e.substring(n, i).trim()
          ;(a && t.push(a), (n = i + 1))
        }
      const o = e.substring(n).trim()
      return (o && t.push(o), t)
    }
    d(Ci, 'splitByComma')
    function bd(e, t, r) {
      const n = r(e)
      return (o) => t(n, o)
    }
    d(bd, 'decorateStory')
    function Ed({
      componentId: e,
      title: t,
      kind: r,
      id: n,
      name: o,
      story: i,
      parameters: a,
      initialArgs: u,
      argTypes: s,
      ...l
    } = {}) {
      return l
    }
    d(Ed, 'sanitizeStoryContextUpdate')
    function Ad(e, t) {
      const r = {},
        n = d(
          (i) => (a) => {
            if (!r.value)
              throw new Error('Decorated function called without init')
            return ((r.value = { ...r.value, ...Ed(a) }), i(r.value))
          },
          'bindWithContext'
        ),
        o = t.reduce((i, a) => bd(i, a, n), e)
      return (i) => ((r.value = i), o(i))
    }
    d(Ad, 'defaultDecorateStory')
    var Xt = d((...e) => {
      const t = {},
        r = e.filter(Boolean),
        n = r.reduce(
          (o, i) => (
            Object.entries(i).forEach(([a, u]) => {
              const s = o[a]
              Array.isArray(u) || typeof s > 'u'
                ? (o[a] = u)
                : Ye(u) && Ye(s)
                  ? (t[a] = !0)
                  : typeof u < 'u' && (o[a] = u)
            }),
            o
          ),
          {}
        )
      return (
        Object.keys(t).forEach((o) => {
          const i = r
            .filter(Boolean)
            .map((a) => a[o])
            .filter((a) => typeof a < 'u')
          i.every((a) => Ye(a)) ? (n[o] = Xt(...i)) : (n[o] = i[i.length - 1])
        }),
        n
      )
    }, 'combineParameters')
    function Vi(e, t, r) {
      const { moduleExport: n, id: o, name: i } = e || {},
        a = Wi(e, t, r),
        u = d(async (T) => {
          const S = {}
          for (const O of [ce(r.loaders), ce(t.loaders), ce(e.loaders)]) {
            if (T.abortSignal.aborted) return S
            const F = await Promise.all(O.map(($) => $(T)))
            Object.assign(S, ...F)
          }
          return S
        }, 'applyLoaders'),
        s = d(async (T) => {
          const S = new Array()
          for (const O of [
            ...ce(r.beforeEach),
            ...ce(t.beforeEach),
            ...ce(e.beforeEach),
          ]) {
            if (T.abortSignal.aborted) return S
            const F = await O(T)
            F && S.push(F)
          }
          return S
        }, 'applyBeforeEach'),
        l = d(async (T) => {
          const S = [
            ...ce(r.afterEach),
            ...ce(t.afterEach),
            ...ce(e.afterEach),
          ].reverse()
          for (const O of S) {
            if (T.abortSignal.aborted) return
            await O(T)
          }
        }, 'applyAfterEach'),
        c = d((T) => T.originalStoryFn(T.args, T), 'undecoratedStoryFn'),
        { applyDecorators: p = Ad, runStep: g } = r,
        m = [...ce(e?.decorators), ...ce(t?.decorators), ...ce(r?.decorators)],
        A = e?.userStoryFn || e?.render || t.render || r.render,
        b = Tm(p)(c, m),
        E = d((T) => b(T), 'unboundStoryFn'),
        x = e?.play ?? t?.play,
        C = gd(x)
      if (!A && !C) throw new Qu({ id: o })
      const _ = d(
          (T) => async () => (await T.renderToCanvas(), T.canvas),
          'defaultMount'
        ),
        D = e.mount ?? t.mount ?? r.mount ?? _,
        I = r.testingLibraryRender
      return {
        storyGlobals: {},
        ...a,
        moduleExport: n,
        id: o,
        name: i,
        story: i,
        originalStoryFn: A,
        undecoratedStoryFn: c,
        unboundStoryFn: E,
        applyLoaders: u,
        applyBeforeEach: s,
        applyAfterEach: l,
        playFunction: x,
        runStep: g,
        mount: D,
        testingLibraryRender: I,
        renderToCanvas: r.renderToCanvas,
        usesMount: C,
      }
    }
    d(Vi, 'prepareStory')
    function wd(e, t, r) {
      return { ...Wi(void 0, e, t), moduleExport: r }
    }
    d(wd, 'prepareMeta')
    function Wi(e, t, r) {
      const n = ['dev', 'test'],
        o = q.DOCS_OPTIONS?.autodocs === !0 ? ['autodocs'] : [],
        i = Fc(
          ...n,
          ...o,
          ...(r.tags ?? []),
          ...(t.tags ?? []),
          ...(e?.tags ?? [])
        ),
        a = Xt(r.parameters, t.parameters, e?.parameters),
        { argTypesEnhancers: u = [], argsEnhancers: s = [] } = r,
        l = Xt(r.argTypes, t.argTypes, e?.argTypes)
      if (e) {
        const x = e?.userStoryFn || e?.render || t.render || r.render
        a.__isArgsStory = x && x.length > 0
      }
      const c = { ...r.args, ...t.args, ...e?.args },
        p = { ...t.globals, ...e?.globals },
        g = {
          componentId: t.id,
          title: t.title,
          kind: t.title,
          id: e?.id || t.id,
          name: e?.name || '__meta',
          story: e?.name || '__meta',
          component: t.component,
          subcomponents: t.subcomponents,
          tags: i,
          parameters: a,
          initialArgs: c,
          argTypes: l,
          storyGlobals: p,
        }
      g.argTypes = u.reduce((x, C) => C({ ...g, argTypes: x }), g.argTypes)
      const m = { ...c }
      g.initialArgs = [...s].reduce(
        (x, C) => ({ ...x, ...C({ ...g, initialArgs: x }) }),
        m
      )
      const { name: A, story: b, ...E } = g
      return E
    }
    d(Wi, 'preparePartialAnnotations')
    function Gi(e) {
      let { args: t } = e,
        r = { ...e, allArgs: void 0, argsByTarget: void 0 }
      if (q.FEATURES?.argTypeTargetsV7) {
        const i = ld(e)
        r = { ...e, allArgs: e.args, argsByTarget: i, args: i[sd] || {} }
      }
      const n = Object.entries(r.args).reduce((i, [a, u]) => {
          if (!r.argTypes[a]?.mapping) return ((i[a] = u), i)
          const s = d((l) => {
            const c = r.argTypes[a].mapping
            return c && l in c ? c[l] : l
          }, 'mappingFn')
          return ((i[a] = Array.isArray(u) ? u.map(s) : s(u)), i)
        }, {}),
        o = Object.entries(n).reduce((i, [a, u]) => {
          const s = r.argTypes[a] || {}
          return (Oc(s, n, r.globals) && (i[a] = u), i)
        }, {})
      return { ...r, unmappedArgs: t, args: o }
    }
    d(Gi, 'prepareContext')
    var xi = d((e, t, r) => {
        const n = typeof e
        switch (n) {
          case 'boolean':
          case 'string':
          case 'number':
          case 'function':
          case 'symbol':
            return { name: n }
          default:
            break
        }
        return e
          ? r.has(e)
            ? (Q.warn(qe`
        We've detected a cycle in arg '${t}'. Args should be JSON-serializable.

        Consider using the mapping feature or fully custom args:
        - Mapping: https://storybook.js.org/docs/writing-stories/args#mapping-to-complex-arg-values
        - Custom args: https://storybook.js.org/docs/essentials/controls#fully-custom-args
      `),
              { name: 'other', value: 'cyclic object' })
            : (r.add(e),
              Array.isArray(e)
                ? {
                    name: 'array',
                    value:
                      e.length > 0
                        ? xi(e[0], t, new Set(r))
                        : { name: 'other', value: 'unknown' },
                  }
                : { name: 'object', value: Kt(e, (o) => xi(o, t, new Set(r))) })
          : { name: 'object', value: {} }
      }, 'inferType'),
      Sd = d((e) => {
        let { id: t, argTypes: r = {}, initialArgs: n = {} } = e,
          o = Kt(n, (a, u) => ({
            name: u,
            type: xi(a, `${t}.${u}`, new Set()),
          })),
          i = Kt(r, (a, u) => ({ name: u }))
        return Xt(o, i, r)
      }, 'inferArgTypes')
    Sd.secondPass = !0
    const ip = d(
        (e, t) => (Array.isArray(t) ? t.includes(e) : e.match(t)),
        'matches'
      ),
      g0 = d(
        (e, t, r) =>
          !t && !r
            ? e
            : e &&
              Ip(e, (n, o) => {
                const i = n.name || o.toString()
                return !!(!t || ip(i, t)) && (!r || !ip(i, r))
              }),
        'filterArgTypes'
      ),
      y0 = d((e, t, r) => {
        const { type: n, options: o } = e
        if (n) {
          if (r.color && r.color.test(t)) {
            const i = n.name
            if (i === 'string') return { control: { type: 'color' } }
            i !== 'enum' &&
              Q.warn(
                `Addon controls: Control of type color only supports string, received "${i}" instead`
              )
          }
          if (r.date && r.date.test(t)) return { control: { type: 'date' } }
          switch (n.name) {
            case 'array':
              return { control: { type: 'object' } }
            case 'boolean':
              return { control: { type: 'boolean' } }
            case 'string':
              return { control: { type: 'text' } }
            case 'number':
              return { control: { type: 'number' } }
            case 'enum': {
              const { value: i } = n
              return {
                control: { type: i?.length <= 5 ? 'radio' : 'select' },
                options: i,
              }
            }
            case 'function':
            case 'symbol':
              return null
            default:
              return { control: { type: o ? 'select' : 'object' } }
          }
        }
      }, 'inferControl'),
      vd = d((e) => {
        const {
          argTypes: t,
          parameters: {
            __isArgsStory: r,
            controls: {
              include: n = null,
              exclude: o = null,
              matchers: i = {},
            } = {},
          },
        } = e
        if (!r) return t
        const a = g0(t, n, o),
          u = Kt(a, (s, l) => s?.type && y0(s, l.toString(), i))
        return Xt(u, a)
      }, 'inferControls')
    vd.secondPass = !0
    function Tn({
      argTypes: e,
      globalTypes: t,
      argTypesEnhancers: r,
      decorators: n,
      loaders: o,
      beforeEach: i,
      afterEach: a,
      initialGlobals: u,
      ...s
    }) {
      return {
        ...(e && { argTypes: Cn(e) }),
        ...(t && { globalTypes: Cn(t) }),
        decorators: ce(n),
        loaders: ce(o),
        beforeEach: ce(i),
        afterEach: ce(a),
        argTypesEnhancers: [...(r || []), Sd, vd],
        initialGlobals: u,
        ...s,
      }
    }
    d(Tn, 'normalizeProjectAnnotations')
    const b0 = d(
      (e) => async () => {
        const t = []
        for (const r of e) {
          const n = await r()
          n && t.unshift(n)
        }
        return async () => {
          for (const r of t) await r()
        }
      },
      'composeBeforeAllHooks'
    )
    function Cd(e) {
      return async (t, r, n) => {
        await e.reduceRight(
          (o, i) => async () => i(t, o, n),
          async () => r(n)
        )()
      }
    }
    d(Cd, 'composeStepRunners')
    function Jt(e, t) {
      return e.map((r) => r.default?.[t] ?? r[t]).filter(Boolean)
    }
    d(Jt, 'getField')
    function ut(e, t, r = {}) {
      return Jt(e, t).reduce((n, o) => {
        const i = ce(o)
        return r.reverseFileOrder ? [...i, ...n] : [...n, ...i]
      }, [])
    }
    d(ut, 'getArrayField')
    function wr(e, t) {
      return Object.assign({}, ...Jt(e, t))
    }
    d(wr, 'getObjectField')
    function Wt(e, t) {
      return Jt(e, t).pop()
    }
    d(Wt, 'getSingletonField')
    function Zt(e) {
      const t = ut(e, 'argTypesEnhancers'),
        r = Jt(e, 'runStep'),
        n = ut(e, 'beforeAll')
      return {
        parameters: Xt(...Jt(e, 'parameters')),
        decorators: ut(e, 'decorators', {
          reverseFileOrder: !(q.FEATURES?.legacyDecoratorFileOrder ?? !1),
        }),
        args: wr(e, 'args'),
        argsEnhancers: ut(e, 'argsEnhancers'),
        argTypes: wr(e, 'argTypes'),
        argTypesEnhancers: [
          ...t.filter((o) => !o.secondPass),
          ...t.filter((o) => o.secondPass),
        ],
        initialGlobals: wr(e, 'initialGlobals'),
        globalTypes: wr(e, 'globalTypes'),
        loaders: ut(e, 'loaders'),
        beforeAll: b0(n),
        beforeEach: ut(e, 'beforeEach'),
        afterEach: ut(e, 'afterEach'),
        render: Wt(e, 'render'),
        renderToCanvas: Wt(e, 'renderToCanvas'),
        applyDecorators: Wt(e, 'applyDecorators'),
        runStep: Cd(r),
        tags: ut(e, 'tags'),
        mount: Wt(e, 'mount'),
        testingLibraryRender: Wt(e, 'testingLibraryRender'),
      }
    }
    d(Zt, 'composeConfigs')
    function Yi() {
      try {
        return (
          !!globalThis.__vitest_browser__ ||
          !!globalThis.__playwright__binding__
        )
      } catch {
        return !1
      }
    }
    d(Yi, 'isTestEnvironment')
    function Ki(e = !0) {
      if (!('document' in globalThis && 'createElement' in globalThis.document))
        return () => {}
      const t = document.createElement('style')
      ;((t.textContent = `*, *:before, *:after {
    animation: none !important;
  }`),
        document.head.appendChild(t))
      const r = document.createElement('style')
      return (
        (r.textContent = `*, *:before, *:after {
    animation-delay: 0s !important;
    animation-direction: ${e ? 'reverse' : 'normal'} !important;
    animation-play-state: paused !important;
    transition: none !important;
  }`),
        document.head.appendChild(r),
        document.body.clientHeight,
        document.head.removeChild(t),
        () => {
          r.parentNode?.removeChild(r)
        }
      )
    }
    d(Ki, 'pauseAnimations')
    async function Xi(e) {
      if (
        !(
          'document' in globalThis &&
          'getAnimations' in globalThis.document &&
          'querySelectorAll' in globalThis.document
        )
      )
        return
      let t = !1
      await Promise.race([
        new Promise((r) => {
          setTimeout(() => {
            const n = [globalThis.document, ...Ji(globalThis.document)],
              o = d(async () => {
                if (t || e?.aborted) return
                const i = n
                  .flatMap((a) => a?.getAnimations?.() || [])
                  .filter((a) => a.playState === 'running' && !xd(a))
                i.length > 0 &&
                  (await Promise.all(i.map((a) => a.finished)), await o())
              }, 'checkAnimationsFinished')
            o().then(r)
          }, 100)
        }),
        new Promise((r) =>
          setTimeout(() => {
            ;((t = !0), r(void 0))
          }, 5e3)
        ),
      ])
    }
    d(Xi, 'waitForAnimations')
    function Ji(e) {
      return [e, ...e.querySelectorAll('*')].reduce(
        (t, r) => (
          'shadowRoot' in r &&
            r.shadowRoot &&
            t.push(r.shadowRoot, ...Ji(r.shadowRoot)),
          t
        ),
        []
      )
    }
    d(Ji, 'getShadowRoots')
    function xd(e) {
      if (
        e instanceof CSSAnimation &&
        e.effect instanceof KeyframeEffect &&
        e.effect.target
      ) {
        const t = getComputedStyle(e.effect.target, e.effect.pseudoElement),
          r = t.animationName?.split(', ').indexOf(e.animationName)
        return t.animationIterationCount.split(', ')[r] === 'infinite'
      }
      return !1
    }
    d(xd, 'isInfiniteAnimation')
    const Dd = class {
      constructor() {
        this.reports = []
      }
      async addReport(t) {
        this.reports.push(t)
      }
    }
    d(Dd, 'ReporterAPI')
    const Td = Dd
    function _d(e, t, r) {
      return Dt(e)
        ? {
            story: e.input,
            meta: e.meta.input,
            preview: e.meta.preview.composed,
          }
        : { story: e, meta: t, preview: r }
    }
    d(_d, 'getCsfFactoryAnnotations')
    function E0(e) {
      globalThis.defaultProjectAnnotations = e
    }
    d(E0, 'setDefaultProjectAnnotations')
    const A0 = 'ComposedStory',
      w0 = 'Unnamed Story'
    function Od(e) {
      return e ? Zt([e]) : {}
    }
    d(Od, 'extractAnnotation')
    function S0(e) {
      const t = Array.isArray(e) ? e : [e]
      return (
        (globalThis.globalProjectAnnotations = Zt([
          ...Hi(),
          globalThis.defaultProjectAnnotations ?? {},
          Zt(t.map(Od)),
        ])),
        globalThis.globalProjectAnnotations ?? {}
      )
    }
    d(S0, 'setProjectAnnotations')
    const gt = []
    function Id(e, t, r, n, o) {
      if (e === void 0)
        throw new Error('Expected a story but received undefined.')
      t.title = t.title ?? A0
      let i = Dn(t),
        a = o || e.storyName || e.story?.name || e.name || w0,
        u = xn(a, e, i),
        s = Tn(Zt([n ?? globalThis.globalProjectAnnotations ?? {}, r ?? {}])),
        l = Vi(u, i, s),
        c = { ...dd(s.globalTypes), ...s.initialGlobals, ...l.storyGlobals },
        p = new Td(),
        g = d(() => {
          const x = Gi({
            hooks: new Dp(),
            globals: c,
            args: { ...l.initialArgs },
            viewMode: 'story',
            reporting: p,
            loaded: {},
            abortSignal: new AbortController().signal,
            step: d((C, _) => l.runStep(C, _, x), 'step'),
            canvasElement: null,
            canvas: {},
            userEvent: {},
            globalTypes: s.globalTypes,
            ...l,
            context: null,
            mount: null,
          })
          return (
            (x.parameters.__isPortableStory = !0),
            (x.context = x),
            l.renderToCanvas &&
              (x.renderToCanvas = async () => {
                const C = await l.renderToCanvas?.(
                  {
                    componentId: l.componentId,
                    title: l.title,
                    id: l.id,
                    name: l.name,
                    tags: l.tags,
                    showMain: d(() => {}, 'showMain'),
                    showError: d((_) => {
                      throw new Error(`${_.title}
${_.description}`)
                    }, 'showError'),
                    showException: d((_) => {
                      throw _
                    }, 'showException'),
                    forceRemount: !0,
                    storyContext: x,
                    storyFn: d(() => l.unboundStoryFn(x), 'storyFn'),
                    unboundStoryFn: l.unboundStoryFn,
                  },
                  x.canvasElement
                )
                C && gt.push(C)
              }),
            (x.mount = l.mount(x)),
            x
          )
        }, 'initializeContext'),
        m,
        A = d(async (x) => {
          const C = g()
          return (
            (C.canvasElement ??= globalThis?.document?.body),
            m && (C.loaded = m.loaded),
            Object.assign(C, x),
            l.playFunction(C)
          )
        }, 'play'),
        b = d((x) => {
          const C = g()
          return (Object.assign(C, x), Rd(l, C))
        }, 'run'),
        E = l.playFunction ? A : void 0
      return Object.assign(
        d(function (x) {
          const C = g()
          return (
            m && (C.loaded = m.loaded),
            (C.args = { ...C.initialArgs, ...x }),
            l.unboundStoryFn(C)
          )
        }, 'storyFn'),
        {
          id: l.id,
          storyName: a,
          load: d(async () => {
            for (const C of [...gt].reverse()) await C()
            gt.length = 0
            const x = g()
            ;((x.loaded = await l.applyLoaders(x)),
              gt.push(...(await l.applyBeforeEach(x)).filter(Boolean)),
              (m = x))
          }, 'load'),
          globals: c,
          args: l.initialArgs,
          parameters: l.parameters,
          argTypes: l.argTypes,
          play: E,
          run: b,
          reporting: p,
          tags: l.tags,
        }
      )
    }
    d(Id, 'composeStory')
    const v0 = d((e, t, r, n) => Id(e, t, r, {}, n), 'defaultComposeStory')
    function C0(e, t, r = v0) {
      let { default: n, __esModule: o, __namedExportsOrder: i, ...a } = e,
        u = n
      return Object.entries(a).reduce((s, [l, c]) => {
        const { story: p, meta: g } = _d(c)
        return (
          !u && g && (u = g),
          zt(l, u) ? Object.assign(s, { [l]: r(p, u, t, l) }) : s
        )
      }, {})
    }
    d(C0, 'composeStories')
    function x0(e) {
      return e.extend({
        mount: d(async ({ mount: t, page: r }, n) => {
          await n(async (o, ...i) => {
            if (
              !('__pw_type' in o) ||
              ('__pw_type' in o && o.__pw_type !== 'jsx')
            )
              throw new Error(qe`
              Portable stories in Playwright CT only work when referencing JSX elements.
              Please use JSX format for your components such as:

              instead of:
              await mount(MyComponent, { props: { foo: 'bar' } })

              do:
              await mount(<MyComponent foo="bar"/>)

              More info: https://storybook.js.org/docs/api/portable-stories-playwright
            `)
            const { props: a, ...u } = o
            await r.evaluate(async (l) => {
              const c = await globalThis.__pwUnwrapObject?.(l)
              return ('__pw_type' in c ? c.type : c)?.load?.()
            }, u)
            const s = await t(o, ...i)
            return (
              await r.evaluate(async (l) => {
                const c = await globalThis.__pwUnwrapObject?.(l),
                  p = '__pw_type' in c ? c.type : c,
                  g = document.querySelector('#root')
                return p?.play?.({ canvasElement: g })
              }, u),
              s
            )
          })
        }, 'mount'),
      })
    }
    d(x0, 'createPlaywrightTest')
    async function Rd(e, t) {
      for (const i of [...gt].reverse()) await i()
      if (((gt.length = 0), !t.canvasElement)) {
        const i = document.createElement('div')
        ;(globalThis?.document?.body?.appendChild(i),
          (t.canvasElement = i),
          gt.push(() => {
            globalThis?.document?.body?.contains(i) &&
              globalThis?.document?.body?.removeChild(i)
          }))
      }
      if (((t.loaded = await e.applyLoaders(t)), t.abortSignal.aborted)) return
      gt.push(...(await e.applyBeforeEach(t)).filter(Boolean))
      const r = e.playFunction,
        n = e.usesMount
      if ((n || (await t.mount()), t.abortSignal.aborted)) return
      r &&
        (n ||
          (t.mount = async () => {
            throw new Wr({ playFunction: r.toString() })
          }),
        await r(t))
      let o
      ;(Yi() ? (o = Ki()) : await Xi(t.abortSignal),
        await e.applyAfterEach(t),
        await o?.())
    }
    d(Rd, 'runStory')
    const ap = 1e3,
      D0 = 1e4,
      Fd = class {
        constructor(t, r, n) {
          ;((this.importFn = r),
            (this.storyIndex = new l0(t)),
            (this.projectAnnotations = Tn(Zt([...Hi(), n]))))
          const { initialGlobals: o, globalTypes: i } = this.projectAnnotations
          ;((this.args = new i0()),
            (this.userGlobals = new a0({ globals: o, globalTypes: i })),
            (this.hooks = {}),
            (this.cleanupCallbacks = {}),
            (this.processCSFFileWithCache = (0, di.default)(ap)(md)),
            (this.prepareMetaWithCache = (0, di.default)(ap)(wd)),
            (this.prepareStoryWithCache = (0, di.default)(D0)(Vi)))
        }
        setProjectAnnotations(t) {
          this.projectAnnotations = Tn(t)
          const { initialGlobals: r, globalTypes: n } = t
          this.userGlobals.set({ globals: r, globalTypes: n })
        }
        async onStoriesChanged({ importFn: t, storyIndex: r }) {
          ;(t && (this.importFn = t),
            r && (this.storyIndex.entries = r.entries),
            this.cachedCSFFiles && (await this.cacheAllCSFFiles()))
        }
        async storyIdToEntry(t) {
          return this.storyIndex.storyIdToEntry(t)
        }
        async loadCSFFileByStoryId(t) {
          const { importPath: r, title: n } = this.storyIndex.storyIdToEntry(t),
            o = await this.importFn(r)
          return this.processCSFFileWithCache(o, r, n)
        }
        async loadAllCSFFiles() {
          const t = {}
          return (
            Object.entries(this.storyIndex.entries).forEach(
              ([r, { importPath: n }]) => {
                t[n] = r
              }
            ),
            (
              await Promise.all(
                Object.entries(t).map(async ([r, n]) => ({
                  importPath: r,
                  csfFile: await this.loadCSFFileByStoryId(n),
                }))
              )
            ).reduce((r, { importPath: n, csfFile: o }) => ((r[n] = o), r), {})
          )
        }
        async cacheAllCSFFiles() {
          this.cachedCSFFiles = await this.loadAllCSFFiles()
        }
        preparedMetaFromCSFFile({ csfFile: t }) {
          const r = t.meta
          return this.prepareMetaWithCache(
            r,
            this.projectAnnotations,
            t.moduleExports.default
          )
        }
        async loadStory({ storyId: t }) {
          const r = await this.loadCSFFileByStoryId(t)
          return this.storyFromCSFFile({ storyId: t, csfFile: r })
        }
        storyFromCSFFile({ storyId: t, csfFile: r }) {
          const n = r.stories[t]
          if (!n) throw new Yu({ storyId: t })
          const o = r.meta,
            i = this.prepareStoryWithCache(
              n,
              o,
              r.projectAnnotations ?? this.projectAnnotations
            )
          return (
            this.args.setInitial(i),
            (this.hooks[i.id] = this.hooks[i.id] || new Dp()),
            i
          )
        }
        componentStoriesFromCSFFile({ csfFile: t }) {
          return Object.keys(this.storyIndex.entries)
            .filter((r) => !!t.stories[r])
            .map((r) => this.storyFromCSFFile({ storyId: r, csfFile: t }))
        }
        async loadEntry(t) {
          const r = await this.storyIdToEntry(t),
            n = r.type === 'docs' ? r.storiesImports : [],
            [o, ...i] = await Promise.all([
              this.importFn(r.importPath),
              ...n.map((a) => {
                const u = this.storyIndex.importPathToEntry(a)
                return this.loadCSFFileByStoryId(u.id)
              }),
            ])
          return { entryExports: o, csfFiles: i }
        }
        getStoryContext(t, { forceInitialArgs: r = !1 } = {}) {
          const n = this.userGlobals.get(),
            { initialGlobals: o } = this.userGlobals,
            i = new Td()
          return Gi({
            ...t,
            args: r ? t.initialArgs : this.args.get(t.id),
            initialGlobals: o,
            globalTypes: this.projectAnnotations.globalTypes,
            userGlobals: n,
            reporting: i,
            globals: { ...n, ...t.storyGlobals },
            hooks: this.hooks[t.id],
          })
        }
        addCleanupCallbacks(t, ...r) {
          this.cleanupCallbacks[t.id] = (
            this.cleanupCallbacks[t.id] || []
          ).concat(r)
        }
        async cleanupStory(t) {
          this.hooks[t.id].clean()
          const r = this.cleanupCallbacks[t.id]
          if (r) for (const n of [...r].reverse()) await n()
          delete this.cleanupCallbacks[t.id]
        }
        extract(t = { includeDocsOnly: !1 }) {
          const { cachedCSFFiles: r } = this
          if (!r) throw new $u()
          return Object.entries(this.storyIndex.entries).reduce(
            (n, [o, { type: i, importPath: a }]) => {
              if (i === 'docs') return n
              const u = r[a],
                s = this.storyFromCSFFile({ storyId: o, csfFile: u })
              return (
                (!t.includeDocsOnly && s.parameters.docsOnly) ||
                  (n[o] = Object.entries(s).reduce(
                    (l, [c, p]) =>
                      c === 'moduleExport' || typeof p === 'function'
                        ? l
                        : Array.isArray(p)
                          ? Object.assign(l, { [c]: p.slice().sort() })
                          : Object.assign(l, { [c]: p }),
                    {
                      args: s.initialArgs,
                      globals: {
                        ...this.userGlobals.initialGlobals,
                        ...this.userGlobals.globals,
                        ...s.storyGlobals,
                      },
                    }
                  )),
                n
              )
            },
            {}
          )
        }
      }
    d(Fd, 'StoryStore')
    const T0 = Fd
    function Bd(e) {
      return e.startsWith('\\\\?\\') ? e : e.replace(/\\/g, '/')
    }
    d(Bd, 'slash')
    const _0 = d((e) => {
      if (e.length === 0) return e
      const t = e[e.length - 1],
        r = t?.replace(/(?:[.](?:story|stories))?([.][^.]+)$/i, '')
      if (e.length === 1) return [r]
      const n = e[e.length - 2]
      return r && n && r.toLowerCase() === n.toLowerCase()
        ? [...e.slice(0, -2), r]
        : r && (/^(story|stories)([.][^.]+)$/i.test(t) || /^index$/i.test(r))
          ? e.slice(0, -1)
          : [...e.slice(0, -1), r]
    }, 'sanitize')
    function Di(e) {
      return e
        .flatMap((t) => t.split('/'))
        .filter(Boolean)
        .join('/')
    }
    d(Di, 'pathJoin')
    const O0 = d((e, t, r) => {
        const {
          directory: n,
          importPathMatcher: o,
          titlePrefix: i = '',
        } = t || {}
        typeof e === 'number' &&
          He.warn(qe`
      CSF Auto-title received a numeric fileName. This typically happens when
      webpack is mis-configured in production mode. To force webpack to produce
      filenames, set optimization.moduleIds = "named" in your webpack config.
    `)
        const a = Bd(String(e))
        if (o.exec(a)) {
          if (!r) {
            let u = a.replace(n, ''),
              s = Di([i, u]).split('/')
            return ((s = _0(s)), s.join('/'))
          }
          return i ? Di([i, r]) : r
        }
      }, 'userOrAutoTitleFromSpecifier'),
      MO = d((e, t, r) => {
        for (let n = 0; n < t.length; n += 1) {
          const o = O0(e, t[n], r)
          if (o) return o
        }
        return r || void 0
      }, 'userOrAutoTitle'),
      up = /\s*\/\s*/,
      I0 = d(
        (e = {}) =>
          (t, r) => {
            if (t.title === r.title && !e.includeNames) return 0
            let n = e.method || 'configure',
              o = e.order || [],
              i = t.title.trim().split(up),
              a = r.title.trim().split(up)
            e.includeNames && (i.push(t.name), a.push(r.name))
            let u = 0
            for (; i[u] || a[u]; ) {
              if (!i[u]) return -1
              if (!a[u]) return 1
              const s = i[u],
                l = a[u]
              if (s !== l) {
                let p = o.indexOf(s),
                  g = o.indexOf(l),
                  m = o.indexOf('*')
                return p !== -1 || g !== -1
                  ? (p === -1 && (m !== -1 ? (p = m) : (p = o.length)),
                    g === -1 && (m !== -1 ? (g = m) : (g = o.length)),
                    p - g)
                  : n === 'configure'
                    ? 0
                    : s.localeCompare(l, e.locales ? e.locales : void 0, {
                        numeric: !0,
                        sensitivity: 'accent',
                      })
              }
              let c = o.indexOf(s)
              ;(c === -1 && (c = o.indexOf('*')),
                (o = c !== -1 && Array.isArray(o[c + 1]) ? o[c + 1] : []),
                (u += 1))
            }
            return 0
          },
        'storySort'
      ),
      R0 = d((e, t, r) => {
        if (t) {
          let n
          ;(typeof t === 'function' ? (n = t) : (n = I0(t)), e.sort(n))
        } else
          e.sort((n, o) => r.indexOf(n.importPath) - r.indexOf(o.importPath))
        return e
      }, 'sortStoriesCommon'),
      qO = d((e, t, r) => {
        try {
          return R0(e, t, r)
        } catch (n) {
          throw new Error(qe`
    Error sorting stories with sort parameter ${t}:

    > ${n.message}
    
    Are you using a V6-style sort function in V7 mode?

    More info: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#v7-style-story-sort
  `)
        }
      }, 'sortStoriesV7'),
      $n = new Error('prepareAborted'),
      { AbortController: sp } = globalThis
    function Ti(e) {
      try {
        const { name: t = 'Error', message: r = String(e), stack: n } = e
        return { name: t, message: r, stack: n }
      } catch {
        return { name: 'Error', message: String(e) }
      }
    }
    d(Ti, 'serializeError')
    const Pd = class {
      constructor(
        t,
        r,
        n,
        o,
        i,
        a,
        u = { autoplay: !0, forceInitialArgs: !1 },
        s
      ) {
        ;((this.channel = t),
          (this.store = r),
          (this.renderToScreen = n),
          (this.callbacks = o),
          (this.id = i),
          (this.viewMode = a),
          (this.renderOptions = u),
          (this.type = 'story'),
          (this.notYetRendered = !0),
          (this.rerenderEnqueued = !1),
          (this.disableKeyListeners = !1),
          (this.teardownRender = d(() => {}, 'teardownRender')),
          (this.torndown = !1),
          (this.abortController = new sp()),
          s && ((this.story = s), (this.phase = 'preparing')))
      }
      async runPhase(t, r, n) {
        ;((this.phase = r),
          this.channel.emit(Le, { newPhase: this.phase, storyId: this.id }),
          n && (await n(), this.checkIfAborted(t)))
      }
      checkIfAborted(t) {
        return t.aborted
          ? ((this.phase = 'aborted'),
            this.channel.emit(Le, { newPhase: this.phase, storyId: this.id }),
            !0)
          : !1
      }
      async prepare() {
        if (
          (await this.runPhase(
            this.abortController.signal,
            'preparing',
            async () => {
              this.story = await this.store.loadStory({ storyId: this.id })
            }
          ),
          this.abortController.signal.aborted)
        )
          throw (await this.store.cleanupStory(this.story), $n)
      }
      isEqual(t) {
        return !!(this.id === t.id && this.story && this.story === t.story)
      }
      isPreparing() {
        return ['preparing'].includes(this.phase)
      }
      isPending() {
        return [
          'loading',
          'beforeEach',
          'rendering',
          'playing',
          'afterEach',
        ].includes(this.phase)
      }
      async renderToElement(t) {
        return (
          (this.canvasElement = t),
          this.render({ initial: !0, forceRemount: !0 })
        )
      }
      storyContext() {
        if (!this.story)
          throw new Error('Cannot call storyContext before preparing')
        const { forceInitialArgs: t } = this.renderOptions
        return this.store.getStoryContext(this.story, { forceInitialArgs: t })
      }
      async render({ initial: t = !1, forceRemount: r = !1 } = {}) {
        const { canvasElement: n } = this
        if (!this.story) throw new Error('cannot render when not prepared')
        const o = this.story
        if (!n) throw new Error('cannot render when canvasElement is unset')
        const {
          id: i,
          componentId: a,
          title: u,
          name: s,
          tags: l,
          applyLoaders: c,
          applyBeforeEach: p,
          applyAfterEach: g,
          unboundStoryFn: m,
          playFunction: A,
          runStep: b,
        } = o
        r && !t && (this.cancelRender(), (this.abortController = new sp()))
        let E = this.abortController.signal,
          x = !1,
          C = o.usesMount
        try {
          const _ = {
            ...this.storyContext(),
            viewMode: this.viewMode,
            abortSignal: E,
            canvasElement: n,
            loaded: {},
            step: d((k, h) => b(k, h, _), 'step'),
            context: null,
            canvas: {},
            userEvent: {},
            renderToCanvas: d(async () => {
              const k = await this.renderToScreen(D, n)
              ;((this.teardownRender = k || (() => {})), (x = !0))
            }, 'renderToCanvas'),
            mount: d(async (...k) => {
              this.callbacks.showStoryDuringRender?.()
              let h = null
              return (
                await this.runPhase(E, 'rendering', async () => {
                  h = await o.mount(_)(...k)
                }),
                C && (await this.runPhase(E, 'playing')),
                h
              )
            }, 'mount'),
          }
          _.context = _
          const D = {
            componentId: a,
            title: u,
            kind: u,
            id: i,
            name: s,
            story: s,
            tags: l,
            ...this.callbacks,
            showError: d(
              (k) => ((this.phase = 'errored'), this.callbacks.showError(k)),
              'showError'
            ),
            showException: d(
              (k) => (
                (this.phase = 'errored'),
                this.callbacks.showException(k)
              ),
              'showException'
            ),
            forceRemount: r || this.notYetRendered,
            storyContext: _,
            storyFn: d(() => m(_), 'storyFn'),
            unboundStoryFn: m,
          }
          if (
            (await this.runPhase(E, 'loading', async () => {
              _.loaded = await c(_)
            }),
            E.aborted)
          )
            return
          const I = await p(_)
          if (
            (this.store.addCleanupCallbacks(o, ...I),
            this.checkIfAborted(E) ||
              (!x && !C && (await _.mount()),
              (this.notYetRendered = !1),
              E.aborted))
          )
            return
          const T =
              this.story.parameters?.test?.dangerouslyIgnoreUnhandledErrors ===
              !0,
            S = new Set(),
            O = d((k) => {
              k.error && S.add(k.error)
            }, 'onError'),
            F = d((k) => {
              k.reason && S.add(k.reason)
            }, 'onUnhandledRejection')
          if (
            this.renderOptions.autoplay &&
            r &&
            A &&
            this.phase !== 'errored'
          ) {
            ;(window?.addEventListener?.('error', O),
              window?.addEventListener?.('unhandledrejection', F),
              (this.disableKeyListeners = !0))
            try {
              if (
                (C
                  ? await A(_)
                  : ((_.mount = async () => {
                      throw new Wr({ playFunction: A.toString() })
                    }),
                    await this.runPhase(E, 'playing', async () => A(_))),
                !x)
              )
                throw new ts()
              ;(this.checkIfAborted(E),
                !T && S.size > 0
                  ? await this.runPhase(E, 'errored')
                  : await this.runPhase(E, 'played'))
            } catch (k) {
              if (
                (this.callbacks.showStoryDuringRender?.(),
                await this.runPhase(E, 'errored', async () => {
                  this.channel.emit(jr, Ti(k))
                }),
                this.story.parameters.throwPlayFunctionExceptions !== !1)
              )
                throw k
              console.error(k)
            }
            if (
              (!T && S.size > 0 && this.channel.emit(zr, Array.from(S).map(Ti)),
              (this.disableKeyListeners = !1),
              window?.removeEventListener?.('unhandledrejection', F),
              window?.removeEventListener?.('error', O),
              E.aborted)
            )
              return
          }
          ;(await this.runPhase(E, 'completing', async () => {
            Yi() ? this.store.addCleanupCallbacks(o, Ki()) : await Xi(E)
          }),
            await this.runPhase(E, 'completed', async () => {
              this.channel.emit(pr, i)
            }),
            this.phase !== 'errored' &&
              (await this.runPhase(E, 'afterEach', async () => {
                await g(_)
              })))
          const $ = !T && S.size > 0,
            P = _.reporting.reports.some((k) => k.status === 'failed'),
            j = $ || P
          await this.runPhase(E, 'finished', async () =>
            this.channel.emit(eo, {
              storyId: i,
              status: j ? 'error' : 'success',
              reporters: _.reporting.reports,
            })
          )
        } catch (_) {
          ;((this.phase = 'errored'),
            this.callbacks.showException(_),
            await this.runPhase(E, 'finished', async () =>
              this.channel.emit(eo, {
                storyId: i,
                status: 'error',
                reporters: [],
              })
            ))
        }
        this.rerenderEnqueued && ((this.rerenderEnqueued = !1), this.render())
      }
      async rerender() {
        if (this.isPending() && this.phase !== 'playing')
          this.rerenderEnqueued = !0
        else return this.render()
      }
      async remount() {
        return (await this.teardown(), this.render({ forceRemount: !0 }))
      }
      cancelRender() {
        this.abortController?.abort()
      }
      async teardown() {
        ;((this.torndown = !0),
          this.cancelRender(),
          this.story && (await this.store.cleanupStory(this.story)))
        for (let t = 0; t < 3; t += 1) {
          if (!this.isPending()) {
            await this.teardownRender()
            return
          }
          await new Promise((r) => setTimeout(r, 0))
        }
        ;(window?.location?.reload?.(), await new Promise(() => {}))
      }
    }
    d(Pd, 'StoryRender')
    const _i = Pd,
      { fetch: F0 } = q,
      B0 = './index.json',
      $d = class {
        constructor(t, r, n = Fe.getChannel(), o = !0) {
          ;((this.importFn = t),
            (this.getProjectAnnotations = r),
            (this.channel = n),
            (this.storyRenders = []),
            (this.storeInitializationPromise = new Promise((i, a) => {
              ;((this.resolveStoreInitializationPromise = i),
                (this.rejectStoreInitializationPromise = a))
            })),
            o && this.initialize())
        }
        get storyStore() {
          return new Proxy(
            {},
            {
              get: d((t, r) => {
                if (this.storyStoreValue)
                  return (
                    Vr(
                      'Accessing the Story Store is deprecated and will be removed in 9.0'
                    ),
                    this.storyStoreValue[r]
                  )
                throw new Xu()
              }, 'get'),
            }
          )
        }
        async initialize() {
          this.setupListeners()
          try {
            const t = await this.getProjectAnnotationsOrRenderError()
            ;(await this.runBeforeAllHook(t),
              await this.initializeWithProjectAnnotations(t))
          } catch (t) {
            this.rejectStoreInitializationPromise(t)
          }
        }
        ready() {
          return this.storeInitializationPromise
        }
        setupListeners() {
          ;(this.channel.on(Su, this.onStoryIndexChanged.bind(this)),
            this.channel.on(Ur, this.onUpdateGlobals.bind(this)),
            this.channel.on(Hr, this.onUpdateArgs.bind(this)),
            this.channel.on(fu, this.onRequestArgTypesInfo.bind(this)),
            this.channel.on(Mr, this.onResetArgs.bind(this)),
            this.channel.on(Nr, this.onForceReRender.bind(this)),
            this.channel.on(ft, this.onForceRemount.bind(this)))
        }
        async getProjectAnnotationsOrRenderError() {
          try {
            const t = await this.getProjectAnnotations()
            if (
              ((this.renderToCanvas = t.renderToCanvas), !this.renderToCanvas)
            )
              throw new ku()
            return t
          } catch (t) {
            throw (
              this.renderPreviewEntryError('Error reading preview.js:', t),
              t
            )
          }
        }
        async initializeWithProjectAnnotations(t) {
          this.projectAnnotationsBeforeInitialization = t
          try {
            const r = await this.getStoryIndexFromServer()
            return this.initializeWithStoryIndex(r)
          } catch (r) {
            throw (
              this.renderPreviewEntryError('Error loading story index:', r),
              r
            )
          }
        }
        async runBeforeAllHook(t) {
          try {
            ;(await this.beforeAllCleanup?.(),
              (this.beforeAllCleanup = await t.beforeAll?.()))
          } catch (r) {
            throw (
              this.renderPreviewEntryError('Error in beforeAll hook:', r),
              r
            )
          }
        }
        async getStoryIndexFromServer() {
          const t = await F0(B0)
          if (t.status === 200) return t.json()
          throw new Mu({ text: await t.text() })
        }
        initializeWithStoryIndex(t) {
          if (!this.projectAnnotationsBeforeInitialization)
            throw new Error(
              'Cannot call initializeWithStoryIndex until project annotations resolve'
            )
          ;((this.storyStoreValue = new T0(
            t,
            this.importFn,
            this.projectAnnotationsBeforeInitialization
          )),
            delete this.projectAnnotationsBeforeInitialization,
            this.setInitialGlobals(),
            this.resolveStoreInitializationPromise())
        }
        async setInitialGlobals() {
          this.emitGlobals()
        }
        emitGlobals() {
          if (!this.storyStoreValue) throw new Re({ methodName: 'emitGlobals' })
          const t = {
            globals: this.storyStoreValue.userGlobals.get() || {},
            globalTypes:
              this.storyStoreValue.projectAnnotations.globalTypes || {},
          }
          this.channel.emit(bu, t)
        }
        async onGetProjectAnnotationsChanged({ getProjectAnnotations: t }) {
          ;(delete this.previewEntryError, (this.getProjectAnnotations = t))
          const r = await this.getProjectAnnotationsOrRenderError()
          if ((await this.runBeforeAllHook(r), !this.storyStoreValue)) {
            await this.initializeWithProjectAnnotations(r)
            return
          }
          ;(this.storyStoreValue.setProjectAnnotations(r), this.emitGlobals())
        }
        async onStoryIndexChanged() {
          if (
            (delete this.previewEntryError,
            !(
              !this.storyStoreValue &&
              !this.projectAnnotationsBeforeInitialization
            ))
          )
            try {
              const t = await this.getStoryIndexFromServer()
              if (this.projectAnnotationsBeforeInitialization) {
                this.initializeWithStoryIndex(t)
                return
              }
              await this.onStoriesChanged({ storyIndex: t })
            } catch (t) {
              throw (
                this.renderPreviewEntryError('Error loading story index:', t),
                t
              )
            }
        }
        async onStoriesChanged({ importFn: t, storyIndex: r }) {
          if (!this.storyStoreValue)
            throw new Re({ methodName: 'onStoriesChanged' })
          await this.storyStoreValue.onStoriesChanged({
            importFn: t,
            storyIndex: r,
          })
        }
        async onUpdateGlobals({ globals: t, currentStory: r }) {
          if (
            (this.storyStoreValue || (await this.storeInitializationPromise),
            !this.storyStoreValue)
          )
            throw new Re({ methodName: 'onUpdateGlobals' })
          if ((this.storyStoreValue.userGlobals.update(t), r)) {
            const {
              initialGlobals: n,
              storyGlobals: o,
              userGlobals: i,
              globals: a,
            } = this.storyStoreValue.getStoryContext(r)
            this.channel.emit($t, {
              initialGlobals: n,
              userGlobals: i,
              storyGlobals: o,
              globals: a,
            })
          } else {
            const { initialGlobals: n, globals: o } =
              this.storyStoreValue.userGlobals
            this.channel.emit($t, {
              initialGlobals: n,
              userGlobals: o,
              storyGlobals: {},
              globals: o,
            })
          }
          await Promise.all(this.storyRenders.map((n) => n.rerender()))
        }
        async onUpdateArgs({ storyId: t, updatedArgs: r }) {
          if (!this.storyStoreValue)
            throw new Re({ methodName: 'onUpdateArgs' })
          ;(this.storyStoreValue.args.update(t, r),
            await Promise.all(
              this.storyRenders
                .filter((n) => n.id === t && !n.renderOptions.forceInitialArgs)
                .map((n) =>
                  n.story && n.story.usesMount ? n.remount() : n.rerender()
                )
            ),
            this.channel.emit(Eu, {
              storyId: t,
              args: this.storyStoreValue.args.get(t),
            }))
        }
        async onRequestArgTypesInfo({ id: t, payload: r }) {
          try {
            await this.storeInitializationPromise
            const n = await this.storyStoreValue?.loadStory(r)
            this.channel.emit(Zn, {
              id: t,
              success: !0,
              payload: { argTypes: n?.argTypes || {} },
              error: null,
            })
          } catch (n) {
            this.channel.emit(Zn, { id: t, success: !1, error: n?.message })
          }
        }
        async onResetArgs({ storyId: t, argNames: r }) {
          if (!this.storyStoreValue) throw new Re({ methodName: 'onResetArgs' })
          const n =
              this.storyRenders.find((i) => i.id === t)?.story ||
              (await this.storyStoreValue.loadStory({ storyId: t })),
            o = (
              r || [
                ...new Set([
                  ...Object.keys(n.initialArgs),
                  ...Object.keys(this.storyStoreValue.args.get(t)),
                ]),
              ]
            ).reduce((i, a) => ((i[a] = n.initialArgs[a]), i), {})
          await this.onUpdateArgs({ storyId: t, updatedArgs: o })
        }
        async onForceReRender() {
          await Promise.all(this.storyRenders.map((t) => t.rerender()))
        }
        async onForceRemount({ storyId: t }) {
          await Promise.all(
            this.storyRenders.filter((r) => r.id === t).map((r) => r.remount())
          )
        }
        renderStoryToElement(t, r, n, o) {
          if (!this.renderToCanvas || !this.storyStoreValue)
            throw new Re({ methodName: 'renderStoryToElement' })
          const i = new _i(
            this.channel,
            this.storyStoreValue,
            this.renderToCanvas,
            n,
            t.id,
            'docs',
            o,
            t
          )
          return (
            i.renderToElement(r),
            this.storyRenders.push(i),
            async () => {
              await this.teardownRender(i)
            }
          )
        }
        async teardownRender(t, { viewModeChanged: r } = {}) {
          ;((this.storyRenders = this.storyRenders.filter((n) => n !== t)),
            await t?.teardown?.({ viewModeChanged: r }))
        }
        async loadStory({ storyId: t }) {
          if (!this.storyStoreValue) throw new Re({ methodName: 'loadStory' })
          return this.storyStoreValue.loadStory({ storyId: t })
        }
        getStoryContext(t, { forceInitialArgs: r = !1 } = {}) {
          if (!this.storyStoreValue)
            throw new Re({ methodName: 'getStoryContext' })
          return this.storyStoreValue.getStoryContext(t, {
            forceInitialArgs: r,
          })
        }
        async extract(t) {
          if (!this.storyStoreValue) throw new Re({ methodName: 'extract' })
          if (this.previewEntryError) throw this.previewEntryError
          return (
            await this.storyStoreValue.cacheAllCSFFiles(),
            this.storyStoreValue.extract(t)
          )
        }
        renderPreviewEntryError(t, r) {
          ;((this.previewEntryError = r),
            Q.error(t),
            Q.error(r),
            this.channel.emit(hu, r))
        }
      }
    d($d, 'Preview')
    const P0 = $d,
      Ld = class {
        constructor(t, r, n, o) {
          ;((this.channel = t),
            (this.store = r),
            (this.renderStoryToElement = n),
            (this.storyIdByName = d((i) => {
              const a = this.nameToStoryId.get(i)
              if (a) return a
              throw new Error(`No story found with that name: ${i}`)
            }, 'storyIdByName')),
            (this.componentStories = d(
              () => this.componentStoriesValue,
              'componentStories'
            )),
            (this.componentStoriesFromCSFFile = d(
              (i) => this.store.componentStoriesFromCSFFile({ csfFile: i }),
              'componentStoriesFromCSFFile'
            )),
            (this.storyById = d((i) => {
              if (!i) {
                if (!this.primaryStory)
                  throw new Error(
                    'No primary story defined for docs entry. Did you forget to use `<Meta>`?'
                  )
                return this.primaryStory
              }
              const a = this.storyIdToCSFFile.get(i)
              if (!a)
                throw new Error(
                  `Called \`storyById\` for story that was never loaded: ${i}`
                )
              return this.store.storyFromCSFFile({ storyId: i, csfFile: a })
            }, 'storyById')),
            (this.getStoryContext = d(
              (i) => ({
                ...this.store.getStoryContext(i),
                loaded: {},
                viewMode: 'docs',
              }),
              'getStoryContext'
            )),
            (this.loadStory = d(
              (i) => this.store.loadStory({ storyId: i }),
              'loadStory'
            )),
            (this.componentStoriesValue = []),
            (this.storyIdToCSFFile = new Map()),
            (this.exportToStory = new Map()),
            (this.exportsToCSFFile = new Map()),
            (this.nameToStoryId = new Map()),
            (this.attachedCSFFiles = new Set()),
            o.forEach((i, a) => {
              this.referenceCSFFile(i)
            }))
        }
        referenceCSFFile(t) {
          ;(this.exportsToCSFFile.set(t.moduleExports, t),
            this.exportsToCSFFile.set(t.moduleExports.default, t),
            this.store
              .componentStoriesFromCSFFile({ csfFile: t })
              .forEach((r) => {
                const n = t.stories[r.id]
                ;(this.storyIdToCSFFile.set(n.id, t),
                  this.exportToStory.set(n.moduleExport, r))
              }))
        }
        attachCSFFile(t) {
          if (!this.exportsToCSFFile.has(t.moduleExports))
            throw new Error(
              'Cannot attach a CSF file that has not been referenced'
            )
          this.attachedCSFFiles.has(t) ||
            (this.attachedCSFFiles.add(t),
            this.store
              .componentStoriesFromCSFFile({ csfFile: t })
              .forEach((r) => {
                ;(this.nameToStoryId.set(r.name, r.id),
                  this.componentStoriesValue.push(r),
                  this.primaryStory || (this.primaryStory = r))
              }))
        }
        referenceMeta(t, r) {
          const n = this.resolveModuleExport(t)
          if (n.type !== 'meta')
            throw new Error(
              '<Meta of={} /> must reference a CSF file module export or meta export. Did you mistakenly reference your component instead of your CSF file?'
            )
          r && this.attachCSFFile(n.csfFile)
        }
        get projectAnnotations() {
          const { projectAnnotations: t } = this.store
          if (!t)
            throw new Error(
              "Can't get projectAnnotations from DocsContext before they are initialized"
            )
          return t
        }
        resolveAttachedModuleExportType(t) {
          if (t === 'story') {
            if (!this.primaryStory)
              throw new Error(
                'No primary story attached to this docs file, did you forget to use <Meta of={} />?'
              )
            return { type: 'story', story: this.primaryStory }
          }
          if (this.attachedCSFFiles.size === 0)
            throw new Error(
              'No CSF file attached to this docs file, did you forget to use <Meta of={} />?'
            )
          const r = Array.from(this.attachedCSFFiles)[0]
          if (t === 'meta') return { type: 'meta', csfFile: r }
          const { component: n } = r.meta
          if (!n)
            throw new Error(
              'Attached CSF file does not defined a component, did you forget to export one?'
            )
          return { type: 'component', component: n }
        }
        resolveModuleExport(t) {
          const r = this.exportsToCSFFile.get(t)
          if (r) return { type: 'meta', csfFile: r }
          const n = this.exportToStory.get(Dt(t) ? t.input : t)
          return n
            ? { type: 'story', story: n }
            : { type: 'component', component: t }
        }
        resolveOf(t, r = []) {
          let n
          if (['component', 'meta', 'story'].includes(t)) {
            const o = t
            n = this.resolveAttachedModuleExportType(o)
          } else n = this.resolveModuleExport(t)
          if (r.length && !r.includes(n.type)) {
            const o = n.type === 'component' ? 'component or unknown' : n.type
            throw new Error(qe`Invalid value passed to the 'of' prop. The value was resolved to a '${o}' type but the only types for this block are: ${r.join(', ')}.
        - Did you pass a component to the 'of' prop when the block only supports a story or a meta?
        - ... or vice versa?
        - Did you pass a story, CSF file or meta to the 'of' prop that is not indexed, ie. is not targeted by the 'stories' globs in the main configuration?`)
          }
          switch (n.type) {
            case 'component':
              return { ...n, projectAnnotations: this.projectAnnotations }
            case 'meta':
              return {
                ...n,
                preparedMeta: this.store.preparedMetaFromCSFFile({
                  csfFile: n.csfFile,
                }),
              }
            case 'story':
            default:
              return n
          }
        }
      }
    d(Ld, 'DocsContext')
    const kd = Ld,
      Nd = class {
        constructor(t, r, n, o) {
          ;((this.channel = t),
            (this.store = r),
            (this.entry = n),
            (this.callbacks = o),
            (this.type = 'docs'),
            (this.subtype = 'csf'),
            (this.torndown = !1),
            (this.disableKeyListeners = !1),
            (this.preparing = !1),
            (this.id = n.id))
        }
        isPreparing() {
          return this.preparing
        }
        async prepare() {
          this.preparing = !0
          const { entryExports: t, csfFiles: r = [] } =
            await this.store.loadEntry(this.id)
          if (this.torndown) throw $n
          const { importPath: n, title: o } = this.entry,
            i = this.store.processCSFFileWithCache(t, n, o),
            a = Object.keys(i.stories)[0]
          ;((this.story = this.store.storyFromCSFFile({
            storyId: a,
            csfFile: i,
          })),
            (this.csfFiles = [i, ...r]),
            (this.preparing = !1))
        }
        isEqual(t) {
          return !!(this.id === t.id && this.story && this.story === t.story)
        }
        docsContext(t) {
          if (!this.csfFiles)
            throw new Error('Cannot render docs before preparing')
          const r = new kd(this.channel, this.store, t, this.csfFiles)
          return (this.csfFiles.forEach((n) => r.attachCSFFile(n)), r)
        }
        async renderToElement(t, r) {
          if (!this.story || !this.csfFiles)
            throw new Error('Cannot render docs before preparing')
          const n = this.docsContext(r),
            { docs: o } = this.story.parameters || {}
          if (!o)
            throw new Error(
              'Cannot render a story in viewMode=docs if `@storybook/addon-docs` is not installed'
            )
          const i = await o.renderer(),
            { render: a } = i,
            u = d(async () => {
              try {
                ;(await a(n, o, t), this.channel.emit(kr, this.id))
              } catch (s) {
                this.callbacks.showException(s)
              }
            }, 'renderDocs')
          return (
            (this.rerender = async () => u()),
            (this.teardownRender = async ({ viewModeChanged: s }) => {
              !s || !t || i.unmount(t)
            }),
            u()
          )
        }
        async teardown({ viewModeChanged: t } = {}) {
          ;(this.teardownRender?.({ viewModeChanged: t }), (this.torndown = !0))
        }
      }
    d(Nd, 'CsfDocsRender')
    const lp = Nd,
      jd = class {
        constructor(t, r, n, o) {
          ;((this.channel = t),
            (this.store = r),
            (this.entry = n),
            (this.callbacks = o),
            (this.type = 'docs'),
            (this.subtype = 'mdx'),
            (this.torndown = !1),
            (this.disableKeyListeners = !1),
            (this.preparing = !1),
            (this.id = n.id))
        }
        isPreparing() {
          return this.preparing
        }
        async prepare() {
          this.preparing = !0
          const { entryExports: t, csfFiles: r = [] } =
            await this.store.loadEntry(this.id)
          if (this.torndown) throw $n
          ;((this.csfFiles = r), (this.exports = t), (this.preparing = !1))
        }
        isEqual(t) {
          return !!(
            this.id === t.id &&
            this.exports &&
            this.exports === t.exports
          )
        }
        docsContext(t) {
          if (!this.csfFiles)
            throw new Error('Cannot render docs before preparing')
          return new kd(this.channel, this.store, t, this.csfFiles)
        }
        async renderToElement(t, r) {
          if (!this.exports || !this.csfFiles || !this.store.projectAnnotations)
            throw new Error('Cannot render docs before preparing')
          const n = this.docsContext(r),
            { docs: o } = this.store.projectAnnotations.parameters || {}
          if (!o)
            throw new Error(
              'Cannot render a story in viewMode=docs if `@storybook/addon-docs` is not installed'
            )
          const i = { ...o, page: this.exports.default },
            a = await o.renderer(),
            { render: u } = a,
            s = d(async () => {
              try {
                ;(await u(n, i, t), this.channel.emit(kr, this.id))
              } catch (l) {
                this.callbacks.showException(l)
              }
            }, 'renderDocs')
          return (
            (this.rerender = async () => s()),
            (this.teardownRender = async ({ viewModeChanged: l } = {}) => {
              !l || !t || (a.unmount(t), (this.torndown = !0))
            }),
            s()
          )
        }
        async teardown({ viewModeChanged: t } = {}) {
          ;(this.teardownRender?.({ viewModeChanged: t }), (this.torndown = !0))
        }
      }
    d(jd, 'MdxDocsRender')
    const cp = jd,
      $0 = globalThis
    function Md(e) {
      const t = (e.composedPath && e.composedPath()[0]) || e.target
      return (
        /input|textarea/i.test(t.tagName) ||
        t.getAttribute('contenteditable') !== null
      )
    }
    d(Md, 'focusInInput')
    const qd = 'attached-mdx',
      L0 = 'unattached-mdx'
    function zd({ tags: e }) {
      return e?.includes(L0) || e?.includes(qd)
    }
    d(zd, 'isMdxEntry')
    function An(e) {
      return e.type === 'story'
    }
    d(An, 'isStoryRender')
    function Ud(e) {
      return e.type === 'docs'
    }
    d(Ud, 'isDocsRender')
    function Hd(e) {
      return Ud(e) && e.subtype === 'csf'
    }
    d(Hd, 'isCsfDocsRender')
    const Vd = class extends P0 {
      constructor(t, r, n, o) {
        ;(super(t, r, void 0, !1),
          (this.importFn = t),
          (this.getProjectAnnotations = r),
          (this.selectionStore = n),
          (this.view = o),
          this.initialize())
      }
      setupListeners() {
        ;(super.setupListeners(),
          ($0.onkeydown = this.onKeydown.bind(this)),
          this.channel.on(cr, this.onSetCurrentStory.bind(this)),
          this.channel.on(Du, this.onUpdateQueryParams.bind(this)),
          this.channel.on(gu, this.onPreloadStories.bind(this)))
      }
      async setInitialGlobals() {
        if (!this.storyStoreValue)
          throw new Re({ methodName: 'setInitialGlobals' })
        const { globals: t } = this.selectionStore.selectionSpecifier || {}
        ;(t && this.storyStoreValue.userGlobals.updateFromPersisted(t),
          this.emitGlobals())
      }
      async initializeWithStoryIndex(t) {
        return (
          await super.initializeWithStoryIndex(t),
          this.selectSpecifiedStory()
        )
      }
      async selectSpecifiedStory() {
        if (!this.storyStoreValue)
          throw new Re({ methodName: 'selectSpecifiedStory' })
        if (this.selectionStore.selection) {
          await this.renderSelection()
          return
        }
        if (!this.selectionStore.selectionSpecifier) {
          this.renderMissingStory()
          return
        }
        const { storySpecifier: t, args: r } =
            this.selectionStore.selectionSpecifier,
          n = this.storyStoreValue.storyIndex.entryFromSpecifier(t)
        if (!n) {
          t === '*'
            ? this.renderStoryLoadingException(t, new Hu())
            : this.renderStoryLoadingException(
                t,
                new Wu({ storySpecifier: t.toString() })
              )
          return
        }
        const { id: o, type: i } = n
        ;(this.selectionStore.setSelection({ storyId: o, viewMode: i }),
          this.channel.emit(Cu, this.selectionStore.selection),
          this.channel.emit(Qn, this.selectionStore.selection),
          await this.renderSelection({ persistedArgs: r }))
      }
      async onGetProjectAnnotationsChanged({ getProjectAnnotations: t }) {
        ;(await super.onGetProjectAnnotationsChanged({
          getProjectAnnotations: t,
        }),
          this.selectionStore.selection && this.renderSelection())
      }
      async onStoriesChanged({ importFn: t, storyIndex: r }) {
        ;(await super.onStoriesChanged({ importFn: t, storyIndex: r }),
          this.selectionStore.selection
            ? await this.renderSelection()
            : await this.selectSpecifiedStory())
      }
      onKeydown(t) {
        if (!this.storyRenders.find((r) => r.disableKeyListeners) && !Md(t)) {
          const {
            altKey: r,
            ctrlKey: n,
            metaKey: o,
            shiftKey: i,
            key: a,
            code: u,
            keyCode: s,
          } = t
          this.channel.emit(yu, {
            event: {
              altKey: r,
              ctrlKey: n,
              metaKey: o,
              shiftKey: i,
              key: a,
              code: u,
              keyCode: s,
            },
          })
        }
      }
      async onSetCurrentStory(t) {
        ;(this.selectionStore.setSelection({ viewMode: 'story', ...t }),
          await this.storeInitializationPromise,
          this.channel.emit(Qn, this.selectionStore.selection),
          this.renderSelection())
      }
      onUpdateQueryParams(t) {
        this.selectionStore.setQueryParams(t)
      }
      async onUpdateGlobals({ globals: t }) {
        const r =
          (this.currentRender instanceof _i && this.currentRender.story) ||
          void 0
        ;(super.onUpdateGlobals({ globals: t, currentStory: r }),
          (this.currentRender instanceof cp ||
            this.currentRender instanceof lp) &&
            (await this.currentRender.rerender?.()))
      }
      async onUpdateArgs({ storyId: t, updatedArgs: r }) {
        super.onUpdateArgs({ storyId: t, updatedArgs: r })
      }
      async onPreloadStories({ ids: t }) {
        ;(await this.storeInitializationPromise,
          this.storyStoreValue &&
            (await Promise.allSettled(
              t.map((r) => this.storyStoreValue?.loadEntry(r))
            )))
      }
      async renderSelection({ persistedArgs: t } = {}) {
        const { renderToCanvas: r } = this
        if (!this.storyStoreValue || !r)
          throw new Re({ methodName: 'renderSelection' })
        const { selection: n } = this.selectionStore
        if (!n)
          throw new Error(
            'Cannot call renderSelection as no selection was made'
          )
        let { storyId: o } = n,
          i
        try {
          i = await this.storyStoreValue.storyIdToEntry(o)
        } catch (g) {
          ;(this.currentRender &&
            (await this.teardownRender(this.currentRender)),
            this.renderStoryLoadingException(o, g))
          return
        }
        const a = this.currentSelection?.storyId !== o,
          u = this.currentRender?.type !== i.type
        ;(i.type === 'story'
          ? this.view.showPreparingStory({ immediate: u })
          : this.view.showPreparingDocs({ immediate: u }),
          this.currentRender?.isPreparing() &&
            (await this.teardownRender(this.currentRender)))
        let s
        i.type === 'story'
          ? (s = new _i(
              this.channel,
              this.storyStoreValue,
              r,
              this.mainStoryCallbacks(o),
              o,
              'story'
            ))
          : zd(i)
            ? (s = new cp(
                this.channel,
                this.storyStoreValue,
                i,
                this.mainStoryCallbacks(o)
              ))
            : (s = new lp(
                this.channel,
                this.storyStoreValue,
                i,
                this.mainStoryCallbacks(o)
              ))
        const l = this.currentSelection
        this.currentSelection = n
        const c = this.currentRender
        this.currentRender = s
        try {
          await s.prepare()
        } catch (g) {
          ;(c && (await this.teardownRender(c)),
            g !== $n && this.renderStoryLoadingException(o, g))
          return
        }
        const p = !a && c && !s.isEqual(c)
        if (
          (t &&
            An(s) &&
            (Ot(!!s.story),
            this.storyStoreValue.args.updateFromPersisted(s.story, t)),
          c && !c.torndown && !a && !p && !u)
        ) {
          ;((this.currentRender = c),
            this.channel.emit(xu, o),
            this.view.showMain())
          return
        }
        if (
          (c && (await this.teardownRender(c, { viewModeChanged: u })),
          l && (a || u) && this.channel.emit(Au, o),
          An(s))
        ) {
          Ot(!!s.story)
          const {
            parameters: g,
            initialArgs: m,
            argTypes: A,
            unmappedArgs: b,
            initialGlobals: E,
            userGlobals: x,
            storyGlobals: C,
            globals: _,
          } = this.storyStoreValue.getStoryContext(s.story)
          ;(this.channel.emit(vu, {
            id: o,
            parameters: g,
            initialArgs: m,
            argTypes: A,
            args: b,
          }),
            this.channel.emit($t, {
              userGlobals: x,
              storyGlobals: C,
              globals: _,
              initialGlobals: E,
            }))
        } else {
          let { parameters: g } = this.storyStoreValue.projectAnnotations,
            { initialGlobals: m, globals: A } = this.storyStoreValue.userGlobals
          if (
            (this.channel.emit($t, {
              globals: A,
              initialGlobals: m,
              storyGlobals: {},
              userGlobals: A,
            }),
            Hd(s) || s.entry.tags?.includes(qd))
          ) {
            if (!s.csfFiles) throw new zu({ storyId: o })
            ;({ parameters: g } = this.storyStoreValue.preparedMetaFromCSFFile({
              csfFile: s.csfFiles[0],
            }))
          }
          this.channel.emit(mu, { id: o, parameters: g })
        }
        An(s)
          ? (Ot(!!s.story),
            this.storyRenders.push(s),
            this.currentRender.renderToElement(
              this.view.prepareForStory(s.story)
            ))
          : this.currentRender.renderToElement(
              this.view.prepareForDocs(),
              this.renderStoryToElement.bind(this)
            )
      }
      async teardownRender(t, { viewModeChanged: r = !1 } = {}) {
        ;((this.storyRenders = this.storyRenders.filter((n) => n !== t)),
          await t?.teardown?.({ viewModeChanged: r }))
      }
      mainStoryCallbacks(t) {
        return {
          showStoryDuringRender: d(
            () => this.view.showStoryDuringRender(),
            'showStoryDuringRender'
          ),
          showMain: d(() => this.view.showMain(), 'showMain'),
          showError: d((r) => this.renderError(t, r), 'showError'),
          showException: d((r) => this.renderException(t, r), 'showException'),
        }
      }
      renderPreviewEntryError(t, r) {
        ;(super.renderPreviewEntryError(t, r), this.view.showErrorDisplay(r))
      }
      renderMissingStory() {
        ;(this.view.showNoPreview(), this.channel.emit(to))
      }
      renderStoryLoadingException(t, r) {
        ;(Q.error(r), this.view.showErrorDisplay(r), this.channel.emit(to, t))
      }
      renderException(t, r) {
        const { name: n = 'Error', message: o = String(r), stack: i } = r
        ;(this.channel.emit(qr, { name: n, message: o, stack: i }),
          this.channel.emit(Le, { newPhase: 'errored', storyId: t }),
          this.view.showErrorDisplay(r),
          Q.error(`Error rendering story '${t}':`),
          Q.error(r))
      }
      renderError(t, { title: r, description: n }) {
        ;(Q.error(`Error rendering story ${r}: ${n}`),
          this.channel.emit(wu, { title: r, description: n }),
          this.channel.emit(Le, { newPhase: 'errored', storyId: t }),
          this.view.showErrorDisplay({ message: r, stack: n }))
      }
    }
    d(Vd, 'PreviewWithSelection')
    var k0 = Vd,
      Oi = Qt(Bi(), 1),
      N0 = Qt(Bi(), 1),
      pp = /^[a-zA-Z0-9 _-]*$/,
      Wd = /^-?[0-9]+(\.[0-9]+)?$/,
      j0 = /^#([a-f0-9]{3,4}|[a-f0-9]{6}|[a-f0-9]{8})$/i,
      Gd =
        /^(rgba?|hsla?)\(([0-9]{1,3}),\s?([0-9]{1,3})%?,\s?([0-9]{1,3})%?,?\s?([0-9](\.[0-9]{1,2})?)?\)$/i,
      Ii = d(
        (e = '', t) =>
          e === null || e === '' || !pp.test(e)
            ? !1
            : t == null ||
                t instanceof Date ||
                typeof t === 'number' ||
                typeof t === 'boolean'
              ? !0
              : typeof t === 'string'
                ? pp.test(t) || Wd.test(t) || j0.test(t) || Gd.test(t)
                : Array.isArray(t)
                  ? t.every((r) => Ii(e, r))
                  : Ye(t)
                    ? Object.entries(t).every(([r, n]) => Ii(r, n))
                    : !1,
        'validateArgs'
      ),
      M0 = {
        delimiter: ';',
        nesting: !0,
        arrayRepeat: !0,
        arrayRepeatSyntax: 'bracket',
        nestingSyntax: 'js',
        valueDeserializer(e) {
          if (e.startsWith('!')) {
            if (e === '!undefined') return
            if (e === '!null') return null
            if (e === '!true') return !0
            if (e === '!false') return !1
            if (e.startsWith('!date(') && e.endsWith(')'))
              return new Date(e.replaceAll(' ', '+').slice(6, -1))
            if (e.startsWith('!hex(') && e.endsWith(')'))
              return `#${e.slice(5, -1)}`
            const t = e.slice(1).match(Gd)
            if (t)
              return e.startsWith('!rgba') || e.startsWith('!RGBA')
                ? `${t[1]}(${t[2]}, ${t[3]}, ${t[4]}, ${t[5]})`
                : e.startsWith('!hsla') || e.startsWith('!HSLA')
                  ? `${t[1]}(${t[2]}, ${t[3]}%, ${t[4]}%, ${t[5]})`
                  : e.startsWith('!rgb') || e.startsWith('!RGB')
                    ? `${t[1]}(${t[2]}, ${t[3]}, ${t[4]})`
                    : `${t[1]}(${t[2]}, ${t[3]}%, ${t[4]}%)`
          }
          return Wd.test(e) ? Number(e) : e
        },
      },
      dp = d((e) => {
        const t = e.split(';').map((r) => r.replace('=', '~').replace(':', '='))
        return Object.entries((0, N0.parse)(t.join(';'), M0)).reduce(
          (r, [n, o]) =>
            Ii(n, o)
              ? Object.assign(r, { [n]: o })
              : (He.warn(qe`
      Omitted potentially unsafe URL args.

      More info: https://storybook.js.org/docs/writing-stories/args#setting-args-through-the-url
    `),
                r),
          {}
        )
      }, 'parseArgsParam'),
      { history: Yd, document: yt } = q
    function Kd(e) {
      const t = (e || '').match(/^\/story\/(.+)/)
      if (!t) throw new Error(`Invalid path '${e}',  must start with '/story/'`)
      return t[1]
    }
    d(Kd, 'pathToId')
    var Xd = d(({ selection: e, extraParams: t }) => {
        const r = yt?.location.search.slice(1),
          {
            path: n,
            selectedKind: o,
            selectedStory: i,
            ...a
          } = (0, Oi.parse)(r)
        return `?${(0, Oi.stringify)({ ...a, ...t, ...(e && { id: e.storyId, viewMode: e.viewMode }) })}`
      }, 'getQueryString'),
      q0 = d((e) => {
        if (!e) return
        const t = Xd({ selection: e }),
          { hash: r = '' } = yt.location
        ;((yt.title = e.storyId),
          Yd.replaceState({}, '', `${yt.location.pathname}${t}${r}`))
      }, 'setPath'),
      z0 = d(
        (e) => e != null && typeof e === 'object' && Array.isArray(e) === !1,
        'isObject'
      ),
      vr = d((e) => {
        if (e !== void 0) {
          if (typeof e === 'string') return e
          if (Array.isArray(e)) return vr(e[0])
          if (z0(e)) return vr(Object.values(e).filter(Boolean))
        }
      }, 'getFirstString'),
      U0 = d(() => {
        if (typeof yt < 'u') {
          let e = yt.location.search.slice(1),
            t = (0, Oi.parse)(e),
            r = typeof t.args === 'string' ? dp(t.args) : void 0,
            n = typeof t.globals === 'string' ? dp(t.globals) : void 0,
            o = vr(t.viewMode)
          ;(typeof o !== 'string' || !o.match(/docs|story/)) && (o = 'story')
          const i = vr(t.path),
            a = i ? Kd(i) : vr(t.id)
          if (a) return { storySpecifier: a, args: r, globals: n, viewMode: o }
        }
        return null
      }, 'getSelectionSpecifierFromPath'),
      Jd = class {
        constructor() {
          this.selectionSpecifier = U0()
        }
        setSelection(t) {
          ;((this.selection = t), q0(this.selection))
        }
        setQueryParams(t) {
          const r = Xd({ extraParams: t }),
            { hash: n = '' } = yt.location
          Yd.replaceState({}, '', `${yt.location.pathname}${r}${n}`)
        }
      }
    d(Jd, 'UrlStore')
    var H0 = Jd,
      V0 = Qt(Cm(), 1),
      W0 = Qt(Bi(), 1),
      { document: Te } = q,
      fp = 100,
      Zd = ((e) => (
        (e.MAIN = 'MAIN'),
        (e.NOPREVIEW = 'NOPREVIEW'),
        (e.PREPARING_STORY = 'PREPARING_STORY'),
        (e.PREPARING_DOCS = 'PREPARING_DOCS'),
        (e.ERROR = 'ERROR'),
        e
      ))(Zd || {}),
      hi = {
        PREPARING_STORY: 'sb-show-preparing-story',
        PREPARING_DOCS: 'sb-show-preparing-docs',
        MAIN: 'sb-show-main',
        NOPREVIEW: 'sb-show-nopreview',
        ERROR: 'sb-show-errordisplay',
      },
      mi = {
        centered: 'sb-main-centered',
        fullscreen: 'sb-main-fullscreen',
        padded: 'sb-main-padded',
      },
      hp = new V0.default({ escapeXML: !0 }),
      Qd = class {
        constructor() {
          if (((this.testing = !1), typeof Te < 'u')) {
            const { __SPECIAL_TEST_PARAMETER__: t } = (0, W0.parse)(
              Te.location.search.slice(1)
            )
            switch (t) {
              case 'preparing-story': {
                ;(this.showPreparingStory(), (this.testing = !0))
                break
              }
              case 'preparing-docs': {
                ;(this.showPreparingDocs(), (this.testing = !0))
                break
              }
              default:
            }
          }
        }
        prepareForStory(t) {
          return (
            this.showStory(),
            this.applyLayout(t.parameters.layout),
            (Te.documentElement.scrollTop = 0),
            (Te.documentElement.scrollLeft = 0),
            this.storyRoot()
          )
        }
        storyRoot() {
          return Te.getElementById('storybook-root')
        }
        prepareForDocs() {
          return (
            this.showMain(),
            this.showDocs(),
            this.applyLayout('fullscreen'),
            (Te.documentElement.scrollTop = 0),
            (Te.documentElement.scrollLeft = 0),
            this.docsRoot()
          )
        }
        docsRoot() {
          return Te.getElementById('storybook-docs')
        }
        applyLayout(t = 'padded') {
          if (t === 'none') {
            ;(Te.body.classList.remove(this.currentLayoutClass),
              (this.currentLayoutClass = null))
            return
          }
          this.checkIfLayoutExists(t)
          const r = mi[t]
          ;(Te.body.classList.remove(this.currentLayoutClass),
            Te.body.classList.add(r),
            (this.currentLayoutClass = r))
        }
        checkIfLayoutExists(t) {
          mi[t] ||
            Q.warn(qe`
          The desired layout: ${t} is not a valid option.
          The possible options are: ${Object.keys(mi).join(', ')}, none.
        `)
        }
        showMode(t) {
          ;(clearTimeout(this.preparingTimeout),
            Object.keys(Zd).forEach((r) => {
              r === t
                ? Te.body.classList.add(hi[r])
                : Te.body.classList.remove(hi[r])
            }))
        }
        showErrorDisplay({ message: t = '', stack: r = '' }) {
          let n = t,
            o = r,
            i = t.split(`
`)
          ;(i.length > 1 &&
            (([n] = i),
            (o = i
              .slice(1)
              .join(
                `
`
              )
              .replace(/^\n/, ''))),
            (Te.getElementById('error-message').innerHTML = hp.toHtml(n)),
            (Te.getElementById('error-stack').innerHTML = hp.toHtml(o)),
            this.showMode('ERROR'))
        }
        showNoPreview() {
          this.testing ||
            (this.showMode('NOPREVIEW'),
            this.storyRoot()?.setAttribute('hidden', 'true'),
            this.docsRoot()?.setAttribute('hidden', 'true'))
        }
        showPreparingStory({ immediate: t = !1 } = {}) {
          ;(clearTimeout(this.preparingTimeout),
            t
              ? this.showMode('PREPARING_STORY')
              : (this.preparingTimeout = setTimeout(
                  () => this.showMode('PREPARING_STORY'),
                  fp
                )))
        }
        showPreparingDocs({ immediate: t = !1 } = {}) {
          ;(clearTimeout(this.preparingTimeout),
            t
              ? this.showMode('PREPARING_DOCS')
              : (this.preparingTimeout = setTimeout(
                  () => this.showMode('PREPARING_DOCS'),
                  fp
                )))
        }
        showMain() {
          this.showMode('MAIN')
        }
        showDocs() {
          ;(this.storyRoot().setAttribute('hidden', 'true'),
            this.docsRoot().removeAttribute('hidden'))
        }
        showStory() {
          ;(this.docsRoot().setAttribute('hidden', 'true'),
            this.storyRoot().removeAttribute('hidden'))
        }
        showStoryDuringRender() {
          Te.body.classList.add(hi.MAIN)
        }
      }
    d(Qd, 'WebView')
    const G0 = Qd,
      Y0 = class extends k0 {
        constructor(t, r) {
          ;(super(t, r, new H0(), new G0()),
            (this.importFn = t),
            (this.getProjectAnnotations = r),
            (q.__STORYBOOK_PREVIEW__ = this))
        }
      }
    d(Y0, 'PreviewWeb')
    let { document: It } = q,
      K0 = [
        'application/javascript',
        'application/ecmascript',
        'application/x-ecmascript',
        'application/x-javascript',
        'text/ecmascript',
        'text/javascript',
        'text/javascript1.0',
        'text/javascript1.1',
        'text/javascript1.2',
        'text/javascript1.3',
        'text/javascript1.4',
        'text/javascript1.5',
        'text/jscript',
        'text/livescript',
        'text/x-ecmascript',
        'text/x-javascript',
        'module',
      ],
      X0 = 'script',
      mp = 'scripts-root'
    function Ri() {
      const e = It.createEvent('Event')
      ;(e.initEvent('DOMContentLoaded', !0, !0), It.dispatchEvent(e))
    }
    d(Ri, 'simulateDOMContentLoaded')
    function ef(e, t, r) {
      const n = It.createElement('script')
      ;((n.type = e.type === 'module' ? 'module' : 'text/javascript'),
        e.src
          ? ((n.onload = t), (n.onerror = t), (n.src = e.src))
          : (n.textContent = e.innerText),
        r ? r.appendChild(n) : It.head.appendChild(n),
        e.parentNode.removeChild(e),
        e.src || t())
    }
    d(ef, 'insertScript')
    function Zi(e, t, r = 0) {
      e[r](() => {
        ;(r++, r === e.length ? t() : Zi(e, t, r))
      })
    }
    d(Zi, 'insertScriptsSequentially')
    function J0(e) {
      let t = It.getElementById(mp)
      t
        ? (t.innerHTML = '')
        : ((t = It.createElement('div')), (t.id = mp), It.body.appendChild(t))
      const r = Array.from(e.querySelectorAll(X0))
      if (r.length) {
        const n = []
        ;(r.forEach((o) => {
          const i = o.getAttribute('type')
          ;(!i || K0.includes(i)) && n.push((a) => ef(o, a, t))
        }),
          n.length && Zi(n, Ri, void 0))
      } else Ri()
    }
    d(J0, 'simulatePageLoad')
    const tf = 'storybook/docs',
      mI = `${tf}/panel`,
      Z0 = `${tf}/snippet-rendered`
    async function Q0(e, t) {
      const r = t.parameters?.docs?.source?.transform,
        { id: n, unmappedArgs: o } = t,
        i = r && e ? r?.(e, t) : e,
        a = i ? await i : void 0
      Fe.getChannel().emit(Z0, { id: n, source: a, args: o })
    }
    d(Q0, 'emitTransformCode')
    const ey = ((e) =>
        typeof Ie < 'u'
          ? Ie
          : typeof Proxy < 'u'
            ? new Proxy(e, { get: (t, r) => (typeof Ie < 'u' ? Ie : t)[r] })
            : e)(function (e) {
        if (typeof Ie < 'u') return Ie.apply(this, arguments)
        throw Error(`Dynamic require of "${e}" is not supported`)
      }),
      ty = {
        reset: [0, 0],
        bold: [1, 22, '\x1B[22m\x1B[1m'],
        dim: [2, 22, '\x1B[22m\x1B[2m'],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29],
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        gray: [90, 39],
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
        blackBright: [90, 39],
        redBright: [91, 39],
        greenBright: [92, 39],
        yellowBright: [93, 39],
        blueBright: [94, 39],
        magentaBright: [95, 39],
        cyanBright: [96, 39],
        whiteBright: [97, 39],
        bgBlackBright: [100, 49],
        bgRedBright: [101, 49],
        bgGreenBright: [102, 49],
        bgYellowBright: [103, 49],
        bgBlueBright: [104, 49],
        bgMagentaBright: [105, 49],
        bgCyanBright: [106, 49],
        bgWhiteBright: [107, 49],
      },
      ry = Object.entries(ty)
    function ra(e) {
      return String(e)
    }
    ra.open = ''
    ra.close = ''
    function ny(e = !1) {
      const t = typeof process < 'u' ? process : void 0,
        r = t?.env || {},
        n = t?.argv || []
      return (
        (!('NO_COLOR' in r || n.includes('--no-color')) &&
          ('FORCE_COLOR' in r ||
            n.includes('--color') ||
            t?.platform === 'win32' ||
            (e && r.TERM !== 'dumb') ||
            'CI' in r)) ||
        (typeof window < 'u' && !!window.chrome)
      )
    }
    function oy(e = !1) {
      const t = ny(e),
        r = (a, u, s, l) => {
          let c = '',
            p = 0
          do
            ((c += a.substring(p, l) + s),
              (p = l + u.length),
              (l = a.indexOf(u, p)))
          while (~l)
          return c + a.substring(p)
        },
        n = (a, u, s = a) => {
          const l = (c) => {
            const p = String(c),
              g = p.indexOf(u, a.length)
            return ~g ? a + r(p, u, s, g) + u : a + p + u
          }
          return ((l.open = a), (l.close = u), l)
        },
        o = { isColorSupported: t },
        i = (a) => `\x1B[${a}m`
      for (const [a, u] of ry) o[a] = t ? n(i(u[0]), i(u[1]), u[2]) : ra
      return o
    }
    const xI = oy(!1)
    function iy(e, t) {
      const r = Object.keys(e),
        n = t === null ? r : r.sort(t)
      if (Object.getOwnPropertySymbols)
        for (const o of Object.getOwnPropertySymbols(e))
          Object.getOwnPropertyDescriptor(e, o).enumerable && n.push(o)
      return n
    }
    function na(e, t, r, n, o, i, a = ': ') {
      let u = '',
        s = 0,
        l = e.next()
      if (!l.done) {
        u += t.spacingOuter
        const c = r + t.indent
        for (; !l.done; ) {
          if (((u += c), s++ === t.maxWidth)) {
            u += '\u2026'
            break
          }
          const p = i(l.value[0], t, c, n, o),
            g = i(l.value[1], t, c, n, o)
          ;((u += p + a + g),
            (l = e.next()),
            l.done ? t.min || (u += ',') : (u += `,${t.spacingInner}`))
        }
        u += t.spacingOuter + r
      }
      return u
    }
    function pf(e, t, r, n, o, i) {
      let a = '',
        u = 0,
        s = e.next()
      if (!s.done) {
        a += t.spacingOuter
        const l = r + t.indent
        for (; !s.done; ) {
          if (((a += l), u++ === t.maxWidth)) {
            a += '\u2026'
            break
          }
          ;((a += i(s.value, t, l, n, o)),
            (s = e.next()),
            s.done ? t.min || (a += ',') : (a += `,${t.spacingInner}`))
        }
        a += t.spacingOuter + r
      }
      return a
    }
    function df(e, t, r, n, o, i) {
      let a = ''
      e = e instanceof ArrayBuffer ? new DataView(e) : e
      const u = (l) => l instanceof DataView,
        s = u(e) ? e.byteLength : e.length
      if (s > 0) {
        a += t.spacingOuter
        const l = r + t.indent
        for (let c = 0; c < s; c++) {
          if (((a += l), c === t.maxWidth)) {
            a += '\u2026'
            break
          }
          ;((u(e) || c in e) &&
            (a += i(u(e) ? e.getInt8(c) : e[c], t, l, n, o)),
            c < s - 1 ? (a += `,${t.spacingInner}`) : t.min || (a += ','))
        }
        a += t.spacingOuter + r
      }
      return a
    }
    function ff(e, t, r, n, o, i) {
      let a = '',
        u = iy(e, t.compareKeys)
      if (u.length > 0) {
        a += t.spacingOuter
        const s = r + t.indent
        for (let l = 0; l < u.length; l++) {
          const c = u[l],
            p = i(c, t, s, n, o),
            g = i(e[c], t, s, n, o)
          ;((a += `${s + p}: ${g}`),
            l < u.length - 1
              ? (a += `,${t.spacingInner}`)
              : t.min || (a += ','))
        }
        a += t.spacingOuter + r
      }
      return a
    }
    const ay =
        typeof Symbol === 'function' && Symbol.for
          ? Symbol.for('jest.asymmetricMatcher')
          : 1267621,
      Qi = ' ',
      uy = (e, t, r, n, o, i) => {
        const a = e.toString()
        if (a === 'ArrayContaining' || a === 'ArrayNotContaining')
          return ++n > t.maxDepth
            ? `[${a}]`
            : `${a + Qi}[${df(e.sample, t, r, n, o, i)}]`
        if (a === 'ObjectContaining' || a === 'ObjectNotContaining')
          return ++n > t.maxDepth
            ? `[${a}]`
            : `${a + Qi}{${ff(e.sample, t, r, n, o, i)}}`
        if (
          a === 'StringMatching' ||
          a === 'StringNotMatching' ||
          a === 'StringContaining' ||
          a === 'StringNotContaining'
        )
          return a + Qi + i(e.sample, t, r, n, o)
        if (typeof e.toAsymmetricMatcher !== 'function')
          throw new TypeError(
            `Asymmetric matcher ${e.constructor.name} does not implement toAsymmetricMatcher()`
          )
        return e.toAsymmetricMatcher()
      },
      sy = (e) => e && e.$$typeof === ay,
      ly = { serialize: uy, test: sy },
      cy = ' ',
      hf = new Set(['DOMStringMap', 'NamedNodeMap']),
      py = /^(?:HTML\w*Collection|NodeList)$/
    function dy(e) {
      return hf.has(e) || py.test(e)
    }
    const fy = (e) =>
      e && e.constructor && !!e.constructor.name && dy(e.constructor.name)
    function hy(e) {
      return e.constructor.name === 'NamedNodeMap'
    }
    const my = (e, t, r, n, o, i) => {
        const a = e.constructor.name
        return ++n > t.maxDepth
          ? `[${a}]`
          : (t.min ? '' : a + cy) +
              (hf.has(a)
                ? `{${ff(hy(e) ? [...e].reduce((u, s) => ((u[s.name] = s.value), u), {}) : { ...e }, t, r, n, o, i)}}`
                : `[${df([...e], t, r, n, o, i)}]`)
      },
      gy = { serialize: my, test: fy }
    function mf(e) {
      return e.replaceAll('<', '&lt;').replaceAll('>', '&gt;')
    }
    function oa(e, t, r, n, o, i, a) {
      const u = n + r.indent,
        s = r.colors
      return e
        .map((l) => {
          let c = t[l],
            p = a(c, r, u, o, i)
          return (
            typeof c !== 'string' &&
              (p.includes(`
`) && (p = r.spacingOuter + u + p + r.spacingOuter + n),
              (p = `{${p}}`)),
            `${r.spacingInner + n + s.prop.open + l + s.prop.close}=${s.value.open}${p}${s.value.close}`
          )
        })
        .join('')
    }
    function ia(e, t, r, n, o, i) {
      return e
        .map(
          (a) =>
            t.spacingOuter +
            r +
            (typeof a === 'string' ? gf(a, t) : i(a, t, r, n, o))
        )
        .join('')
    }
    function gf(e, t) {
      const r = t.colors.content
      return r.open + mf(e) + r.close
    }
    function yy(e, t) {
      const r = t.colors.comment
      return `${r.open}<!--${mf(e)}-->${r.close}`
    }
    function aa(e, t, r, n, o) {
      const i = n.colors.tag
      return `${i.open}<${e}${t && i.close + t + n.spacingOuter + o + i.open}${r ? `>${i.close}${r}${n.spacingOuter}${o}${i.open}</${e}` : `${t && !n.min ? '' : ' '}/`}>${i.close}`
    }
    function ua(e, t) {
      const r = t.colors.tag
      return `${r.open}<${e}${r.close} \u2026${r.open} />${r.close}`
    }
    const by = 1,
      yf = 3,
      bf = 8,
      Ef = 11,
      Ey = /^(?:(?:HTML|SVG)\w*)?Element$/
    function Ay(e) {
      try {
        return typeof e.hasAttribute === 'function' && e.hasAttribute('is')
      } catch {
        return !1
      }
    }
    function wy(e) {
      const t = e.constructor.name,
        { nodeType: r, tagName: n } = e,
        o = (typeof n === 'string' && n.includes('-')) || Ay(e)
      return (
        (r === by && (Ey.test(t) || o)) ||
        (r === yf && t === 'Text') ||
        (r === bf && t === 'Comment') ||
        (r === Ef && t === 'DocumentFragment')
      )
    }
    const Sy = (e) => {
      let t
      return ((t = e?.constructor) == null ? void 0 : t.name) && wy(e)
    }
    function vy(e) {
      return e.nodeType === yf
    }
    function Cy(e) {
      return e.nodeType === bf
    }
    function ea(e) {
      return e.nodeType === Ef
    }
    const xy = (e, t, r, n, o, i) => {
        if (vy(e)) return gf(e.data, t)
        if (Cy(e)) return yy(e.data, t)
        const a = ea(e) ? 'DocumentFragment' : e.tagName.toLowerCase()
        return ++n > t.maxDepth
          ? ua(a, t)
          : aa(
              a,
              oa(
                ea(e) ? [] : Array.from(e.attributes, (u) => u.name).sort(),
                ea(e)
                  ? {}
                  : [...e.attributes].reduce(
                      (u, s) => ((u[s.name] = s.value), u),
                      {}
                    ),
                t,
                r + t.indent,
                n,
                o,
                i
              ),
              ia(
                Array.prototype.slice.call(e.childNodes || e.children),
                t,
                r + t.indent,
                n,
                o,
                i
              ),
              t,
              r
            )
      },
      Dy = { serialize: xy, test: Sy },
      Ty = '@@__IMMUTABLE_ITERABLE__@@',
      _y = '@@__IMMUTABLE_LIST__@@',
      Oy = '@@__IMMUTABLE_KEYED__@@',
      Iy = '@@__IMMUTABLE_MAP__@@',
      rf = '@@__IMMUTABLE_ORDERED__@@',
      Ry = '@@__IMMUTABLE_RECORD__@@',
      Fy = '@@__IMMUTABLE_SEQ__@@',
      By = '@@__IMMUTABLE_SET__@@',
      Py = '@@__IMMUTABLE_STACK__@@',
      er = (e) => `Immutable.${e}`,
      kn = (e) => `[${e}]`,
      Dr = ' ',
      nf = '\u2026'
    function $y(e, t, r, n, o, i, a) {
      return ++n > t.maxDepth
        ? kn(er(a))
        : `${er(a) + Dr}{${na(e.entries(), t, r, n, o, i)}}`
    }
    function Ly(e) {
      let t = 0
      return {
        next() {
          if (t < e._keys.length) {
            const r = e._keys[t++]
            return { done: !1, value: [r, e.get(r)] }
          }
          return { done: !0, value: void 0 }
        },
      }
    }
    function ky(e, t, r, n, o, i) {
      const a = er(e._name || 'Record')
      return ++n > t.maxDepth ? kn(a) : `${a + Dr}{${na(Ly(e), t, r, n, o, i)}}`
    }
    function Ny(e, t, r, n, o, i) {
      const a = er('Seq')
      return ++n > t.maxDepth
        ? kn(a)
        : e[Oy]
          ? `${a + Dr}{${e._iter || e._object ? na(e.entries(), t, r, n, o, i) : nf}}`
          : `${a + Dr}[${e._iter || e._array || e._collection || e._iterable ? pf(e.values(), t, r, n, o, i) : nf}]`
    }
    function ta(e, t, r, n, o, i, a) {
      return ++n > t.maxDepth
        ? kn(er(a))
        : `${er(a) + Dr}[${pf(e.values(), t, r, n, o, i)}]`
    }
    let jy = (e, t, r, n, o, i) =>
        e[Iy]
          ? $y(e, t, r, n, o, i, e[rf] ? 'OrderedMap' : 'Map')
          : e[_y]
            ? ta(e, t, r, n, o, i, 'List')
            : e[By]
              ? ta(e, t, r, n, o, i, e[rf] ? 'OrderedSet' : 'Set')
              : e[Py]
                ? ta(e, t, r, n, o, i, 'Stack')
                : e[Fy]
                  ? Ny(e, t, r, n, o, i)
                  : ky(e, t, r, n, o, i),
      My = (e) => e && (e[Ty] === !0 || e[Ry] === !0),
      qy = { serialize: jy, test: My },
      of = { exports: {} },
      Z = {},
      af
    function zy() {
      if (af) return Z
      af = 1
      let e = Symbol.for('react.element'),
        t = Symbol.for('react.portal'),
        r = Symbol.for('react.fragment'),
        n = Symbol.for('react.strict_mode'),
        o = Symbol.for('react.profiler'),
        i = Symbol.for('react.provider'),
        a = Symbol.for('react.context'),
        u = Symbol.for('react.server_context'),
        s = Symbol.for('react.forward_ref'),
        l = Symbol.for('react.suspense'),
        c = Symbol.for('react.suspense_list'),
        p = Symbol.for('react.memo'),
        g = Symbol.for('react.lazy'),
        m = Symbol.for('react.offscreen'),
        A
      A = Symbol.for('react.module.reference')
      function b(E) {
        if (typeof E === 'object' && E !== null) {
          const x = E.$$typeof
          switch (x) {
            case e:
              switch (((E = E.type), E)) {
                case r:
                case o:
                case n:
                case l:
                case c:
                  return E
                default:
                  switch (((E = E && E.$$typeof), E)) {
                    case u:
                    case a:
                    case s:
                    case g:
                    case p:
                    case i:
                      return E
                    default:
                      return x
                  }
              }
            case t:
              return x
          }
        }
      }
      return (
        (Z.ContextConsumer = a),
        (Z.ContextProvider = i),
        (Z.Element = e),
        (Z.ForwardRef = s),
        (Z.Fragment = r),
        (Z.Lazy = g),
        (Z.Memo = p),
        (Z.Portal = t),
        (Z.Profiler = o),
        (Z.StrictMode = n),
        (Z.Suspense = l),
        (Z.SuspenseList = c),
        (Z.isAsyncMode = function () {
          return !1
        }),
        (Z.isConcurrentMode = function () {
          return !1
        }),
        (Z.isContextConsumer = function (E) {
          return b(E) === a
        }),
        (Z.isContextProvider = function (E) {
          return b(E) === i
        }),
        (Z.isElement = function (E) {
          return typeof E === 'object' && E !== null && E.$$typeof === e
        }),
        (Z.isForwardRef = function (E) {
          return b(E) === s
        }),
        (Z.isFragment = function (E) {
          return b(E) === r
        }),
        (Z.isLazy = function (E) {
          return b(E) === g
        }),
        (Z.isMemo = function (E) {
          return b(E) === p
        }),
        (Z.isPortal = function (E) {
          return b(E) === t
        }),
        (Z.isProfiler = function (E) {
          return b(E) === o
        }),
        (Z.isStrictMode = function (E) {
          return b(E) === n
        }),
        (Z.isSuspense = function (E) {
          return b(E) === l
        }),
        (Z.isSuspenseList = function (E) {
          return b(E) === c
        }),
        (Z.isValidElementType = function (E) {
          return (
            typeof E === 'string' ||
            typeof E === 'function' ||
            E === r ||
            E === o ||
            E === n ||
            E === l ||
            E === c ||
            E === m ||
            (typeof E === 'object' &&
              E !== null &&
              (E.$$typeof === g ||
                E.$$typeof === p ||
                E.$$typeof === i ||
                E.$$typeof === a ||
                E.$$typeof === s ||
                E.$$typeof === A ||
                E.getModuleId !== void 0))
          )
        }),
        (Z.typeOf = b),
        Z
      )
    }
    let uf
    function Uy() {
      return (uf || ((uf = 1), (of.exports = zy())), of.exports)
    }
    const Rt = Uy()
    function Af(e, t = []) {
      if (Array.isArray(e)) for (const r of e) Af(r, t)
      else e != null && e !== !1 && e !== '' && t.push(e)
      return t
    }
    function sf(e) {
      const t = e.type
      if (typeof t === 'string') return t
      if (typeof t === 'function') return t.displayName || t.name || 'Unknown'
      if (Rt.isFragment(e)) return 'React.Fragment'
      if (Rt.isSuspense(e)) return 'React.Suspense'
      if (typeof t === 'object' && t !== null) {
        if (Rt.isContextProvider(e)) return 'Context.Provider'
        if (Rt.isContextConsumer(e)) return 'Context.Consumer'
        if (Rt.isForwardRef(e)) {
          if (t.displayName) return t.displayName
          const r = t.render.displayName || t.render.name || ''
          return r === '' ? 'ForwardRef' : `ForwardRef(${r})`
        }
        if (Rt.isMemo(e)) {
          const r = t.displayName || t.type.displayName || t.type.name || ''
          return r === '' ? 'Memo' : `Memo(${r})`
        }
      }
      return 'UNDEFINED'
    }
    function Hy(e) {
      const { props: t } = e
      return Object.keys(t)
        .filter((r) => r !== 'children' && t[r] !== void 0)
        .sort()
    }
    const Vy = (e, t, r, n, o, i) =>
        ++n > t.maxDepth
          ? ua(sf(e), t)
          : aa(
              sf(e),
              oa(Hy(e), e.props, t, r + t.indent, n, o, i),
              ia(Af(e.props.children), t, r + t.indent, n, o, i),
              t,
              r
            ),
      Wy = (e) => e != null && Rt.isElement(e),
      Gy = { serialize: Vy, test: Wy },
      Yy =
        typeof Symbol === 'function' && Symbol.for
          ? Symbol.for('react.test.json')
          : 245830487
    function Ky(e) {
      const { props: t } = e
      return t
        ? Object.keys(t)
            .filter((r) => t[r] !== void 0)
            .sort()
        : []
    }
    const Xy = (e, t, r, n, o, i) =>
        ++n > t.maxDepth
          ? ua(e.type, t)
          : aa(
              e.type,
              e.props ? oa(Ky(e), e.props, t, r + t.indent, n, o, i) : '',
              e.children ? ia(e.children, t, r + t.indent, n, o, i) : '',
              t,
              r
            ),
      Jy = (e) => e && e.$$typeof === Yy,
      Zy = { serialize: Xy, test: Jy }
    const DI = Date.prototype.toISOString,
      TI = Error.prototype.toString,
      _I = RegExp.prototype.toString
    const wf = {
        comment: 'gray',
        content: 'reset',
        prop: 'yellow',
        tag: 'cyan',
        value: 'green',
      },
      OI = Object.keys(wf),
      II = {
        callToJSON: !0,
        compareKeys: void 0,
        escapeRegex: !1,
        escapeString: !0,
        highlight: !1,
        indent: 2,
        maxDepth: Number.POSITIVE_INFINITY,
        maxWidth: Number.POSITIVE_INFINITY,
        min: !1,
        plugins: [],
        printBasicPrototype: !0,
        printFunctionName: !0,
        theme: wf,
      }
    const Sf = {
      AsymmetricMatcher: ly,
      DOMCollection: gy,
      DOMElement: Dy,
      Immutable: qy,
      ReactElement: Gy,
      ReactTestComponent: Zy,
    }
    const RI = Number.isNaN || ((e) => e !== e)
    const FI = new RegExp(
      "['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]",
      'g'
    )
    let Qy = () => 'Promise{\u2026}'
    try {
      const {
        getPromiseDetails: e,
        kPending: t,
        kRejected: r,
      } = process.binding('util')
      Array.isArray(e(Promise.resolve())) &&
        (Qy = (n, o) => {
          const [i, a] = e(n)
          return i === t
            ? 'Promise{<pending>}'
            : `Promise${i === r ? '!' : ''}{${o.inspect(a, o)}}`
        })
    } catch {}
    let e1 = typeof Symbol === 'function' && typeof Symbol.for === 'function',
      BI = e1 ? Symbol.for('chai/inspect') : '@@chai/inspect',
      lf = !1
    try {
      const e = ey('util')
      lf = e.inspect ? e.inspect.custom : !1
    } catch {
      lf = !1
    }
    const {
      AsymmetricMatcher: PI,
      DOMCollection: $I,
      DOMElement: LI,
      Immutable: kI,
      ReactElement: NI,
      ReactTestComponent: jI,
    } = Sf
    function t1(e) {
      return e &&
        e.__esModule &&
        Object.prototype.hasOwnProperty.call(e, 'default')
        ? e.default
        : e
    }
    let Ln = {},
      cf
    function r1() {
      if (cf) return Ln
      ;((cf = 1),
        Object.defineProperty(Ln, '__esModule', { value: !0 }),
        (Ln.default = g))
      const e = 'diff-sequences',
        t = 0,
        r = (m, A, b, E, x) => {
          let C = 0
          for (; m < A && b < E && x(m, b); ) ((m += 1), (b += 1), (C += 1))
          return C
        },
        n = (m, A, b, E, x) => {
          let C = 0
          for (; m <= A && b <= E && x(A, E); ) ((A -= 1), (E -= 1), (C += 1))
          return C
        },
        o = (m, A, b, E, x, C, _) => {
          let D = 0,
            I = -m,
            T = C[D],
            S = T
          C[D] += r(T + 1, A, E + T - I + 1, b, x)
          const O = m < _ ? m : _
          for (D += 1, I += 2; D <= O; D += 1, I += 2) {
            if (D !== m && S < C[D]) T = C[D]
            else if (((T = S + 1), A <= T)) return D - 1
            ;((S = C[D]), (C[D] = T + r(T + 1, A, E + T - I + 1, b, x)))
          }
          return _
        },
        i = (m, A, b, E, x, C, _) => {
          let D = 0,
            I = m,
            T = C[D],
            S = T
          C[D] -= n(A, T - 1, b, E + T - I - 1, x)
          const O = m < _ ? m : _
          for (D += 1, I -= 2; D <= O; D += 1, I -= 2) {
            if (D !== m && C[D] < S) T = C[D]
            else if (((T = S - 1), T < A)) return D - 1
            ;((S = C[D]), (C[D] = T - n(A, T - 1, b, E + T - I - 1, x)))
          }
          return _
        },
        a = (m, A, b, E, x, C, _, D, I, T, S) => {
          let O = E - A,
            F = b - A,
            $ = x - E - F,
            P = -$ - (m - 1),
            j = -$ + (m - 1),
            k = t,
            h = m < D ? m : D
          for (let f = 0, v = -m; f <= h; f += 1, v += 2) {
            const B = f === 0 || (f !== m && k < _[f]),
              R = B ? _[f] : k,
              L = B ? R : R + 1,
              N = O + L - v,
              M = r(L + 1, b, N + 1, x, C),
              z = L + M
            if (((k = _[f]), (_[f] = z), P <= v && v <= j)) {
              const Y = (m - 1 - (v + $)) / 2
              if (Y <= T && I[Y] - 1 <= z) {
                const X = O + R - (B ? v + 1 : v - 1),
                  V = n(A, R, E, X, C),
                  J = R - V,
                  W = X - V,
                  te = J + 1,
                  ye = W + 1
                ;((S.nChangePreceding = m - 1),
                  m - 1 === te + ye - A - E
                    ? ((S.aEndPreceding = A), (S.bEndPreceding = E))
                    : ((S.aEndPreceding = te), (S.bEndPreceding = ye)),
                  (S.nCommonPreceding = V),
                  V !== 0 &&
                    ((S.aCommonPreceding = te), (S.bCommonPreceding = ye)),
                  (S.nCommonFollowing = M),
                  M !== 0 &&
                    ((S.aCommonFollowing = L + 1),
                    (S.bCommonFollowing = N + 1)))
                const me = z + 1,
                  Ce = N + M + 1
                return (
                  (S.nChangeFollowing = m - 1),
                  m - 1 === b + x - me - Ce
                    ? ((S.aStartFollowing = b), (S.bStartFollowing = x))
                    : ((S.aStartFollowing = me), (S.bStartFollowing = Ce)),
                  !0
                )
              }
            }
          }
          return !1
        },
        u = (m, A, b, E, x, C, _, D, I, T, S) => {
          let O = x - b,
            F = b - A,
            $ = x - E - F,
            P = $ - m,
            j = $ + m,
            k = t,
            h = m < T ? m : T
          for (let f = 0, v = m; f <= h; f += 1, v -= 2) {
            const B = f === 0 || (f !== m && I[f] < k),
              R = B ? I[f] : k,
              L = B ? R : R - 1,
              N = O + L - v,
              M = n(A, L - 1, E, N - 1, C),
              z = L - M
            if (((k = I[f]), (I[f] = z), P <= v && v <= j)) {
              const Y = (m + (v - $)) / 2
              if (Y <= D && z - 1 <= _[Y]) {
                const X = N - M
                if (
                  ((S.nChangePreceding = m),
                  m === z + X - A - E
                    ? ((S.aEndPreceding = A), (S.bEndPreceding = E))
                    : ((S.aEndPreceding = z), (S.bEndPreceding = X)),
                  (S.nCommonPreceding = M),
                  M !== 0 &&
                    ((S.aCommonPreceding = z), (S.bCommonPreceding = X)),
                  (S.nChangeFollowing = m - 1),
                  m === 1)
                )
                  ((S.nCommonFollowing = 0),
                    (S.aStartFollowing = b),
                    (S.bStartFollowing = x))
                else {
                  const V = O + R - (B ? v - 1 : v + 1),
                    J = r(R, b, V, x, C)
                  ;((S.nCommonFollowing = J),
                    J !== 0 &&
                      ((S.aCommonFollowing = R), (S.bCommonFollowing = V)))
                  const W = R + J,
                    te = V + J
                  m - 1 === b + x - W - te
                    ? ((S.aStartFollowing = b), (S.bStartFollowing = x))
                    : ((S.aStartFollowing = W), (S.bStartFollowing = te))
                }
                return !0
              }
            }
          }
          return !1
        },
        s = (m, A, b, E, x, C, _, D, I) => {
          let T = E - A,
            S = x - b,
            O = b - A,
            F = x - E,
            $ = F - O,
            P = O,
            j = O
          if (((_[0] = A - 1), (D[0] = b), $ % 2 === 0)) {
            const k = (m || $) / 2,
              h = (O + F) / 2
            for (let f = 1; f <= h; f += 1)
              if (((P = o(f, b, x, T, C, _, P)), f < k))
                j = i(f, A, E, S, C, D, j)
              else if (u(f, A, b, E, x, C, _, P, D, j, I)) return
          } else {
            let k = ((m || $) + 1) / 2,
              h = (O + F + 1) / 2,
              f = 1
            for (P = o(f, b, x, T, C, _, P), f += 1; f <= h; f += 1)
              if (((j = i(f - 1, A, E, S, C, D, j)), f < k))
                P = o(f, b, x, T, C, _, P)
              else if (a(f, A, b, E, x, C, _, P, D, j, I)) return
          }
          throw new Error(
            `${e}: no overlap aStart=${A} aEnd=${b} bStart=${E} bEnd=${x}`
          )
        },
        l = (m, A, b, E, x, C, _, D, I, T) => {
          if (x - E < b - A) {
            if (((C = !C), C && _.length === 1)) {
              const { foundSubsequence: Y, isCommon: X } = _[0]
              _[1] = {
                foundSubsequence: (V, J, W) => {
                  Y(V, W, J)
                },
                isCommon: (V, J) => X(J, V),
              }
            }
            const M = A,
              z = b
            ;((A = E), (b = x), (E = M), (x = z))
          }
          const { foundSubsequence: S, isCommon: O } = _[C ? 1 : 0]
          s(m, A, b, E, x, O, D, I, T)
          const {
            nChangePreceding: F,
            aEndPreceding: $,
            bEndPreceding: P,
            nCommonPreceding: j,
            aCommonPreceding: k,
            bCommonPreceding: h,
            nCommonFollowing: f,
            aCommonFollowing: v,
            bCommonFollowing: B,
            nChangeFollowing: R,
            aStartFollowing: L,
            bStartFollowing: N,
          } = T
          ;(A < $ && E < P && l(F, A, $, E, P, C, _, D, I, T),
            j !== 0 && S(j, k, h),
            f !== 0 && S(f, v, B),
            L < b && N < x && l(R, L, b, N, x, C, _, D, I, T))
        },
        c = (m, A) => {
          if (typeof A !== 'number')
            throw new TypeError(`${e}: ${m} typeof ${typeof A} is not a number`)
          if (!Number.isSafeInteger(A))
            throw new RangeError(`${e}: ${m} value ${A} is not a safe integer`)
          if (A < 0)
            throw new RangeError(`${e}: ${m} value ${A} is a negative integer`)
        },
        p = (m, A) => {
          const b = typeof A
          if (b !== 'function')
            throw new TypeError(`${e}: ${m} typeof ${b} is not a function`)
        }
      function g(m, A, b, E) {
        ;(c('aLength', m),
          c('bLength', A),
          p('isCommon', b),
          p('foundSubsequence', E))
        const x = r(0, m, 0, A, b)
        if ((x !== 0 && E(x, 0, 0), m !== x || A !== x)) {
          const C = x,
            _ = x,
            D = n(C, m - 1, _, A - 1, b),
            I = m - D,
            T = A - D,
            S = x + D
          ;(m !== S &&
            A !== S &&
            l(
              0,
              C,
              I,
              _,
              T,
              !1,
              [{ foundSubsequence: E, isCommon: b }],
              [t],
              [t],
              {
                aCommonFollowing: t,
                aCommonPreceding: t,
                aEndPreceding: t,
                aStartFollowing: t,
                bCommonFollowing: t,
                bCommonPreceding: t,
                bEndPreceding: t,
                bStartFollowing: t,
                nChangeFollowing: t,
                nChangePreceding: t,
                nCommonFollowing: t,
                nCommonPreceding: t,
              }
            ),
            D !== 0 && E(D, I, T))
        }
      }
      return Ln
    }
    const n1 = r1(),
      MI = t1(n1)
    const {
      AsymmetricMatcher: qI,
      DOMCollection: zI,
      DOMElement: UI,
      Immutable: HI,
      ReactElement: VI,
      ReactTestComponent: WI,
    } = Sf
    const GI = Object.getPrototypeOf({})
    var K = ((e) => (
        (e.DONE = 'done'),
        (e.ERROR = 'error'),
        (e.ACTIVE = 'active'),
        (e.WAITING = 'waiting'),
        e
      ))(K || {}),
      bt = {
        CALL: 'storybook/instrumenter/call',
        SYNC: 'storybook/instrumenter/sync',
        START: 'storybook/instrumenter/start',
        BACK: 'storybook/instrumenter/back',
        GOTO: 'storybook/instrumenter/goto',
        NEXT: 'storybook/instrumenter/next',
        END: 'storybook/instrumenter/end',
      }
    const YI = new Error(
      'This function ran after the play function completed. Did you forget to `await` it?'
    )
    function Oe() {
      return (
        (Oe = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (let t = 1; t < arguments.length; t++) {
                const r = arguments[t]
                for (const n in r)
                  ({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
              }
              return e
            }),
        Oe.apply(null, arguments)
      )
    }
    function vf(e) {
      if (e === void 0)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        )
      return e
    }
    function Et(e, t) {
      return (
        (Et = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (r, n) {
              return ((r.__proto__ = n), r)
            }),
        Et(e, t)
      )
    }
    function Cf(e, t) {
      ;((e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        Et(e, t))
    }
    function Nn(e) {
      return (
        (Nn = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t)
            }),
        Nn(e)
      )
    }
    function xf(e) {
      try {
        return Function.toString.call(e).indexOf('[native code]') !== -1
      } catch {
        return typeof e === 'function'
      }
    }
    function sa() {
      try {
        var e = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        )
      } catch {}
      return (sa = function () {
        return !!e
      })()
    }
    function Df(e, t, r) {
      if (sa()) return Reflect.construct.apply(null, arguments)
      const n = [null]
      n.push.apply(n, t)
      const o = new (e.bind.apply(e, n))()
      return (r && Et(o, r.prototype), o)
    }
    function jn(e) {
      const t = typeof Map === 'function' ? new Map() : void 0
      return (
        (jn = function (n) {
          if (n === null || !xf(n)) return n
          if (typeof n !== 'function')
            throw new TypeError(
              'Super expression must either be null or a function'
            )
          if (t !== void 0) {
            if (t.has(n)) return t.get(n)
            t.set(n, o)
          }
          function o() {
            return Df(n, arguments, Nn(this).constructor)
          }
          return (
            (o.prototype = Object.create(n.prototype, {
              constructor: {
                value: o,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            Et(o, n)
          )
        }),
        jn(e)
      )
    }
    const Be = (function (e) {
      Cf(t, e)
      function t(r) {
        let n
        if (1)
          n =
            e.call(
              this,
              `An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#${r} for more information.`
            ) || this
        else for (var o, i, a; a < o; a++);
        return vf(n)
      }
      return t
    })(jn(Error))
    function Tf(e, t) {
      return e.substr(-t.length) === t
    }
    const o1 = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/
    function _f(e) {
      if (typeof e !== 'string') return e
      const t = e.match(o1)
      return t ? parseFloat(e) : e
    }
    const i1 = function (t) {
        return function (r, n) {
          n === void 0 && (n = '16px')
          let o = r,
            i = n
          if (typeof r === 'string') {
            if (!Tf(r, 'px')) throw new Be(69, t, r)
            o = _f(r)
          }
          if (typeof n === 'string') {
            if (!Tf(n, 'px')) throw new Be(70, t, n)
            i = _f(n)
          }
          if (typeof o === 'string') throw new Be(71, r, t)
          if (typeof i === 'string') throw new Be(72, n, t)
          return `${o / i}${t}`
        }
      },
      If = i1,
      QR = If('em')
    const eF = If('rem')
    function la(e) {
      return Math.round(e * 255)
    }
    function a1(e, t, r) {
      return `${la(e)},${la(t)},${la(r)}`
    }
    function Tr(e, t, r, n) {
      if ((n === void 0 && (n = a1), t === 0)) return n(r, r, r)
      let o = (((e % 360) + 360) % 360) / 60,
        i = (1 - Math.abs(2 * r - 1)) * t,
        a = i * (1 - Math.abs((o % 2) - 1)),
        u = 0,
        s = 0,
        l = 0
      o >= 0 && o < 1
        ? ((u = i), (s = a))
        : o >= 1 && o < 2
          ? ((u = a), (s = i))
          : o >= 2 && o < 3
            ? ((s = i), (l = a))
            : o >= 3 && o < 4
              ? ((s = a), (l = i))
              : o >= 4 && o < 5
                ? ((u = a), (l = i))
                : o >= 5 && o < 6 && ((u = i), (l = a))
      const c = r - i / 2,
        p = u + c,
        g = s + c,
        m = l + c
      return n(p, g, m)
    }
    const Of = {
      aliceblue: 'f0f8ff',
      antiquewhite: 'faebd7',
      aqua: '00ffff',
      aquamarine: '7fffd4',
      azure: 'f0ffff',
      beige: 'f5f5dc',
      bisque: 'ffe4c4',
      black: '000',
      blanchedalmond: 'ffebcd',
      blue: '0000ff',
      blueviolet: '8a2be2',
      brown: 'a52a2a',
      burlywood: 'deb887',
      cadetblue: '5f9ea0',
      chartreuse: '7fff00',
      chocolate: 'd2691e',
      coral: 'ff7f50',
      cornflowerblue: '6495ed',
      cornsilk: 'fff8dc',
      crimson: 'dc143c',
      cyan: '00ffff',
      darkblue: '00008b',
      darkcyan: '008b8b',
      darkgoldenrod: 'b8860b',
      darkgray: 'a9a9a9',
      darkgreen: '006400',
      darkgrey: 'a9a9a9',
      darkkhaki: 'bdb76b',
      darkmagenta: '8b008b',
      darkolivegreen: '556b2f',
      darkorange: 'ff8c00',
      darkorchid: '9932cc',
      darkred: '8b0000',
      darksalmon: 'e9967a',
      darkseagreen: '8fbc8f',
      darkslateblue: '483d8b',
      darkslategray: '2f4f4f',
      darkslategrey: '2f4f4f',
      darkturquoise: '00ced1',
      darkviolet: '9400d3',
      deeppink: 'ff1493',
      deepskyblue: '00bfff',
      dimgray: '696969',
      dimgrey: '696969',
      dodgerblue: '1e90ff',
      firebrick: 'b22222',
      floralwhite: 'fffaf0',
      forestgreen: '228b22',
      fuchsia: 'ff00ff',
      gainsboro: 'dcdcdc',
      ghostwhite: 'f8f8ff',
      gold: 'ffd700',
      goldenrod: 'daa520',
      gray: '808080',
      green: '008000',
      greenyellow: 'adff2f',
      grey: '808080',
      honeydew: 'f0fff0',
      hotpink: 'ff69b4',
      indianred: 'cd5c5c',
      indigo: '4b0082',
      ivory: 'fffff0',
      khaki: 'f0e68c',
      lavender: 'e6e6fa',
      lavenderblush: 'fff0f5',
      lawngreen: '7cfc00',
      lemonchiffon: 'fffacd',
      lightblue: 'add8e6',
      lightcoral: 'f08080',
      lightcyan: 'e0ffff',
      lightgoldenrodyellow: 'fafad2',
      lightgray: 'd3d3d3',
      lightgreen: '90ee90',
      lightgrey: 'd3d3d3',
      lightpink: 'ffb6c1',
      lightsalmon: 'ffa07a',
      lightseagreen: '20b2aa',
      lightskyblue: '87cefa',
      lightslategray: '789',
      lightslategrey: '789',
      lightsteelblue: 'b0c4de',
      lightyellow: 'ffffe0',
      lime: '0f0',
      limegreen: '32cd32',
      linen: 'faf0e6',
      magenta: 'f0f',
      maroon: '800000',
      mediumaquamarine: '66cdaa',
      mediumblue: '0000cd',
      mediumorchid: 'ba55d3',
      mediumpurple: '9370db',
      mediumseagreen: '3cb371',
      mediumslateblue: '7b68ee',
      mediumspringgreen: '00fa9a',
      mediumturquoise: '48d1cc',
      mediumvioletred: 'c71585',
      midnightblue: '191970',
      mintcream: 'f5fffa',
      mistyrose: 'ffe4e1',
      moccasin: 'ffe4b5',
      navajowhite: 'ffdead',
      navy: '000080',
      oldlace: 'fdf5e6',
      olive: '808000',
      olivedrab: '6b8e23',
      orange: 'ffa500',
      orangered: 'ff4500',
      orchid: 'da70d6',
      palegoldenrod: 'eee8aa',
      palegreen: '98fb98',
      paleturquoise: 'afeeee',
      palevioletred: 'db7093',
      papayawhip: 'ffefd5',
      peachpuff: 'ffdab9',
      peru: 'cd853f',
      pink: 'ffc0cb',
      plum: 'dda0dd',
      powderblue: 'b0e0e6',
      purple: '800080',
      rebeccapurple: '639',
      red: 'f00',
      rosybrown: 'bc8f8f',
      royalblue: '4169e1',
      saddlebrown: '8b4513',
      salmon: 'fa8072',
      sandybrown: 'f4a460',
      seagreen: '2e8b57',
      seashell: 'fff5ee',
      sienna: 'a0522d',
      silver: 'c0c0c0',
      skyblue: '87ceeb',
      slateblue: '6a5acd',
      slategray: '708090',
      slategrey: '708090',
      snow: 'fffafa',
      springgreen: '00ff7f',
      steelblue: '4682b4',
      tan: 'd2b48c',
      teal: '008080',
      thistle: 'd8bfd8',
      tomato: 'ff6347',
      turquoise: '40e0d0',
      violet: 'ee82ee',
      wheat: 'f5deb3',
      white: 'fff',
      whitesmoke: 'f5f5f5',
      yellow: 'ff0',
      yellowgreen: '9acd32',
    }
    function u1(e) {
      if (typeof e !== 'string') return e
      const t = e.toLowerCase()
      return Of[t] ? `#${Of[t]}` : e
    }
    const s1 = /^#[a-fA-F0-9]{6}$/,
      l1 = /^#[a-fA-F0-9]{8}$/,
      c1 = /^#[a-fA-F0-9]{3}$/,
      p1 = /^#[a-fA-F0-9]{4}$/,
      ca =
        /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
      d1 =
        /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
      f1 =
        /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
      h1 =
        /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i
    function tr(e) {
      if (typeof e !== 'string') throw new Be(3)
      const t = u1(e)
      if (t.match(s1))
        return {
          red: parseInt(`${t[1]}${t[2]}`, 16),
          green: parseInt(`${t[3]}${t[4]}`, 16),
          blue: parseInt(`${t[5]}${t[6]}`, 16),
        }
      if (t.match(l1)) {
        const r = parseFloat((parseInt(`${t[7]}${t[8]}`, 16) / 255).toFixed(2))
        return {
          red: parseInt(`${t[1]}${t[2]}`, 16),
          green: parseInt(`${t[3]}${t[4]}`, 16),
          blue: parseInt(`${t[5]}${t[6]}`, 16),
          alpha: r,
        }
      }
      if (t.match(c1))
        return {
          red: parseInt(`${t[1]}${t[1]}`, 16),
          green: parseInt(`${t[2]}${t[2]}`, 16),
          blue: parseInt(`${t[3]}${t[3]}`, 16),
        }
      if (t.match(p1)) {
        const n = parseFloat((parseInt(`${t[4]}${t[4]}`, 16) / 255).toFixed(2))
        return {
          red: parseInt(`${t[1]}${t[1]}`, 16),
          green: parseInt(`${t[2]}${t[2]}`, 16),
          blue: parseInt(`${t[3]}${t[3]}`, 16),
          alpha: n,
        }
      }
      const o = ca.exec(t)
      if (o)
        return {
          red: parseInt(`${o[1]}`, 10),
          green: parseInt(`${o[2]}`, 10),
          blue: parseInt(`${o[3]}`, 10),
        }
      const i = d1.exec(t.substring(0, 50))
      if (i)
        return {
          red: parseInt(`${i[1]}`, 10),
          green: parseInt(`${i[2]}`, 10),
          blue: parseInt(`${i[3]}`, 10),
          alpha:
            parseFloat(`${i[4]}`) > 1
              ? parseFloat(`${i[4]}`) / 100
              : parseFloat(`${i[4]}`),
        }
      const a = f1.exec(t)
      if (a) {
        const u = parseInt(`${a[1]}`, 10),
          s = parseInt(`${a[2]}`, 10) / 100,
          l = parseInt(`${a[3]}`, 10) / 100,
          c = `rgb(${Tr(u, s, l)})`,
          p = ca.exec(c)
        if (!p) throw new Be(4, t, c)
        return {
          red: parseInt(`${p[1]}`, 10),
          green: parseInt(`${p[2]}`, 10),
          blue: parseInt(`${p[3]}`, 10),
        }
      }
      const g = h1.exec(t.substring(0, 50))
      if (g) {
        const m = parseInt(`${g[1]}`, 10),
          A = parseInt(`${g[2]}`, 10) / 100,
          b = parseInt(`${g[3]}`, 10) / 100,
          E = `rgb(${Tr(m, A, b)})`,
          x = ca.exec(E)
        if (!x) throw new Be(4, t, E)
        return {
          red: parseInt(`${x[1]}`, 10),
          green: parseInt(`${x[2]}`, 10),
          blue: parseInt(`${x[3]}`, 10),
          alpha:
            parseFloat(`${g[4]}`) > 1
              ? parseFloat(`${g[4]}`) / 100
              : parseFloat(`${g[4]}`),
        }
      }
      throw new Be(5)
    }
    function m1(e) {
      const t = e.red / 255,
        r = e.green / 255,
        n = e.blue / 255,
        o = Math.max(t, r, n),
        i = Math.min(t, r, n),
        a = (o + i) / 2
      if (o === i)
        return e.alpha !== void 0
          ? { hue: 0, saturation: 0, lightness: a, alpha: e.alpha }
          : { hue: 0, saturation: 0, lightness: a }
      let u,
        s = o - i,
        l = a > 0.5 ? s / (2 - o - i) : s / (o + i)
      switch (o) {
        case t:
          u = (r - n) / s + (r < n ? 6 : 0)
          break
        case r:
          u = (n - t) / s + 2
          break
        default:
          u = (t - r) / s + 4
          break
      }
      return (
        (u *= 60),
        e.alpha !== void 0
          ? { hue: u, saturation: l, lightness: a, alpha: e.alpha }
          : { hue: u, saturation: l, lightness: a }
      )
    }
    function At(e) {
      return m1(tr(e))
    }
    const g1 = function (t) {
        return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6]
          ? `#${t[1]}${t[3]}${t[5]}`
          : t
      },
      da = g1
    function Ft(e) {
      const t = e.toString(16)
      return t.length === 1 ? `0${t}` : t
    }
    function pa(e) {
      return Ft(Math.round(e * 255))
    }
    function y1(e, t, r) {
      return da(`#${pa(e)}${pa(t)}${pa(r)}`)
    }
    function Mn(e, t, r) {
      return Tr(e, t, r, y1)
    }
    function b1(e, t, r) {
      if (
        typeof e === 'number' &&
        typeof t === 'number' &&
        typeof r === 'number'
      )
        return Mn(e, t, r)
      if (typeof e === 'object' && t === void 0 && r === void 0)
        return Mn(e.hue, e.saturation, e.lightness)
      throw new Be(1)
    }
    function E1(e, t, r, n) {
      if (
        typeof e === 'number' &&
        typeof t === 'number' &&
        typeof r === 'number' &&
        typeof n === 'number'
      )
        return n >= 1 ? Mn(e, t, r) : `rgba(${Tr(e, t, r)},${n})`
      if (typeof e === 'object' && t === void 0 && r === void 0 && n === void 0)
        return e.alpha >= 1
          ? Mn(e.hue, e.saturation, e.lightness)
          : `rgba(${Tr(e.hue, e.saturation, e.lightness)},${e.alpha})`
      throw new Be(2)
    }
    function fa(e, t, r) {
      if (
        typeof e === 'number' &&
        typeof t === 'number' &&
        typeof r === 'number'
      )
        return da(`#${Ft(e)}${Ft(t)}${Ft(r)}`)
      if (typeof e === 'object' && t === void 0 && r === void 0)
        return da(`#${Ft(e.red)}${Ft(e.green)}${Ft(e.blue)}`)
      throw new Be(6)
    }
    function qn(e, t, r, n) {
      if (typeof e === 'string' && typeof t === 'number') {
        const o = tr(e)
        return `rgba(${o.red},${o.green},${o.blue},${t})`
      } else {
        if (
          typeof e === 'number' &&
          typeof t === 'number' &&
          typeof r === 'number' &&
          typeof n === 'number'
        )
          return n >= 1 ? fa(e, t, r) : `rgba(${e},${t},${r},${n})`
        if (
          typeof e === 'object' &&
          t === void 0 &&
          r === void 0 &&
          n === void 0
        )
          return e.alpha >= 1
            ? fa(e.red, e.green, e.blue)
            : `rgba(${e.red},${e.green},${e.blue},${e.alpha})`
      }
      throw new Be(7)
    }
    const A1 = function (t) {
        return (
          typeof t.red === 'number' &&
          typeof t.green === 'number' &&
          typeof t.blue === 'number' &&
          (typeof t.alpha !== 'number' || typeof t.alpha > 'u')
        )
      },
      w1 = function (t) {
        return (
          typeof t.red === 'number' &&
          typeof t.green === 'number' &&
          typeof t.blue === 'number' &&
          typeof t.alpha === 'number'
        )
      },
      S1 = function (t) {
        return (
          typeof t.hue === 'number' &&
          typeof t.saturation === 'number' &&
          typeof t.lightness === 'number' &&
          (typeof t.alpha !== 'number' || typeof t.alpha > 'u')
        )
      },
      v1 = function (t) {
        return (
          typeof t.hue === 'number' &&
          typeof t.saturation === 'number' &&
          typeof t.lightness === 'number' &&
          typeof t.alpha === 'number'
        )
      }
    function wt(e) {
      if (typeof e !== 'object') throw new Be(8)
      if (w1(e)) return qn(e)
      if (A1(e)) return fa(e)
      if (v1(e)) return E1(e)
      if (S1(e)) return b1(e)
      throw new Be(8)
    }
    function Rf(e, t, r) {
      return function () {
        const o = r.concat(Array.prototype.slice.call(arguments))
        return o.length >= t ? e.apply(this, o) : Rf(e, t, o)
      }
    }
    function Ne(e) {
      return Rf(e, e.length, [])
    }
    function C1(e, t) {
      if (t === 'transparent') return t
      const r = At(t)
      return wt(Oe({}, r, { hue: r.hue + parseFloat(e) }))
    }
    const tF = Ne(C1)
    function rr(e, t, r) {
      return Math.max(e, Math.min(t, r))
    }
    function x1(e, t) {
      if (t === 'transparent') return t
      const r = At(t)
      return wt(Oe({}, r, { lightness: rr(0, 1, r.lightness - parseFloat(e)) }))
    }
    const rF = Ne(x1)
    function D1(e, t) {
      if (t === 'transparent') return t
      const r = At(t)
      return wt(
        Oe({}, r, { saturation: rr(0, 1, r.saturation - parseFloat(e)) })
      )
    }
    const nF = Ne(D1)
    function T1(e, t) {
      if (t === 'transparent') return t
      const r = At(t)
      return wt(Oe({}, r, { lightness: rr(0, 1, r.lightness + parseFloat(e)) }))
    }
    const oF = Ne(T1)
    function _1(e, t, r) {
      if (t === 'transparent') return r
      if (r === 'transparent') return t
      if (e === 0) return r
      const n = tr(t),
        o = Oe({}, n, { alpha: typeof n.alpha === 'number' ? n.alpha : 1 }),
        i = tr(r),
        a = Oe({}, i, { alpha: typeof i.alpha === 'number' ? i.alpha : 1 }),
        u = o.alpha - a.alpha,
        s = parseFloat(e) * 2 - 1,
        l = s * u === -1 ? s : s + u,
        c = 1 + s * u,
        p = (l / c + 1) / 2,
        g = 1 - p,
        m = {
          red: Math.floor(o.red * p + a.red * g),
          green: Math.floor(o.green * p + a.green * g),
          blue: Math.floor(o.blue * p + a.blue * g),
          alpha: o.alpha * parseFloat(e) + a.alpha * (1 - parseFloat(e)),
        }
      return qn(m)
    }
    const O1 = Ne(_1),
      Ff = O1
    function I1(e, t) {
      if (t === 'transparent') return t
      const r = tr(t),
        n = typeof r.alpha === 'number' ? r.alpha : 1,
        o = Oe({}, r, {
          alpha: rr(0, 1, (n * 100 + parseFloat(e) * 100) / 100),
        })
      return qn(o)
    }
    const iF = Ne(I1)
    function R1(e, t) {
      if (t === 'transparent') return t
      const r = At(t)
      return wt(
        Oe({}, r, { saturation: rr(0, 1, r.saturation + parseFloat(e)) })
      )
    }
    const aF = Ne(R1)
    function F1(e, t) {
      return t === 'transparent' ? t : wt(Oe({}, At(t), { hue: parseFloat(e) }))
    }
    const uF = Ne(F1)
    function B1(e, t) {
      return t === 'transparent'
        ? t
        : wt(Oe({}, At(t), { lightness: parseFloat(e) }))
    }
    const sF = Ne(B1)
    function P1(e, t) {
      return t === 'transparent'
        ? t
        : wt(Oe({}, At(t), { saturation: parseFloat(e) }))
    }
    const lF = Ne(P1)
    function $1(e, t) {
      return t === 'transparent' ? t : Ff(parseFloat(e), 'rgb(0, 0, 0)', t)
    }
    const cF = Ne($1)
    function L1(e, t) {
      return t === 'transparent'
        ? t
        : Ff(parseFloat(e), 'rgb(255, 255, 255)', t)
    }
    const pF = Ne(L1)
    function k1(e, t) {
      if (t === 'transparent') return t
      const r = tr(t),
        n = typeof r.alpha === 'number' ? r.alpha : 1,
        o = Oe({}, r, {
          alpha: rr(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100),
        })
      return qn(o)
    }
    const N1 = Ne(k1),
      zn = N1
    const j1 = Object.create,
      Jf = Object.defineProperty,
      M1 = Object.getOwnPropertyDescriptor,
      Zf = Object.getOwnPropertyNames,
      q1 = Object.getPrototypeOf,
      z1 = Object.prototype.hasOwnProperty,
      he = (e, t) =>
        function () {
          return (
            t || (0, e[Zf(e)[0]])((t = { exports: {} }).exports, t),
            t.exports
          )
        },
      U1 = (e, t, r, n) => {
        if ((t && typeof t === 'object') || typeof t === 'function')
          for (const o of Zf(t))
            !z1.call(e, o) &&
              o !== r &&
              Jf(e, o, {
                get: () => t[o],
                enumerable: !(n = M1(t, o)) || n.enumerable,
              })
        return e
      },
      ze = (e, t, r) => (
        (r = e != null ? j1(q1(e)) : {}),
        U1(
          t || !e || !e.__esModule
            ? Jf(r, 'default', { value: e, enumerable: !0 })
            : r,
          e
        )
      ),
      Qf = he({
        '../../node_modules/ansi-to-html/node_modules/entities/lib/maps/entities.json'(
          e,
          t
        ) {
          t.exports = {
            Aacute: '\xC1',
            aacute: '\xE1',
            Abreve: '\u0102',
            abreve: '\u0103',
            ac: '\u223E',
            acd: '\u223F',
            acE: '\u223E\u0333',
            Acirc: '\xC2',
            acirc: '\xE2',
            acute: '\xB4',
            Acy: '\u0410',
            acy: '\u0430',
            AElig: '\xC6',
            aelig: '\xE6',
            af: '\u2061',
            Afr: '\u{1D504}',
            afr: '\u{1D51E}',
            Agrave: '\xC0',
            agrave: '\xE0',
            alefsym: '\u2135',
            aleph: '\u2135',
            Alpha: '\u0391',
            alpha: '\u03B1',
            Amacr: '\u0100',
            amacr: '\u0101',
            amalg: '\u2A3F',
            amp: '&',
            AMP: '&',
            andand: '\u2A55',
            And: '\u2A53',
            and: '\u2227',
            andd: '\u2A5C',
            andslope: '\u2A58',
            andv: '\u2A5A',
            ang: '\u2220',
            ange: '\u29A4',
            angle: '\u2220',
            angmsdaa: '\u29A8',
            angmsdab: '\u29A9',
            angmsdac: '\u29AA',
            angmsdad: '\u29AB',
            angmsdae: '\u29AC',
            angmsdaf: '\u29AD',
            angmsdag: '\u29AE',
            angmsdah: '\u29AF',
            angmsd: '\u2221',
            angrt: '\u221F',
            angrtvb: '\u22BE',
            angrtvbd: '\u299D',
            angsph: '\u2222',
            angst: '\xC5',
            angzarr: '\u237C',
            Aogon: '\u0104',
            aogon: '\u0105',
            Aopf: '\u{1D538}',
            aopf: '\u{1D552}',
            apacir: '\u2A6F',
            ap: '\u2248',
            apE: '\u2A70',
            ape: '\u224A',
            apid: '\u224B',
            apos: "'",
            ApplyFunction: '\u2061',
            approx: '\u2248',
            approxeq: '\u224A',
            Aring: '\xC5',
            aring: '\xE5',
            Ascr: '\u{1D49C}',
            ascr: '\u{1D4B6}',
            Assign: '\u2254',
            ast: '*',
            asymp: '\u2248',
            asympeq: '\u224D',
            Atilde: '\xC3',
            atilde: '\xE3',
            Auml: '\xC4',
            auml: '\xE4',
            awconint: '\u2233',
            awint: '\u2A11',
            backcong: '\u224C',
            backepsilon: '\u03F6',
            backprime: '\u2035',
            backsim: '\u223D',
            backsimeq: '\u22CD',
            Backslash: '\u2216',
            Barv: '\u2AE7',
            barvee: '\u22BD',
            barwed: '\u2305',
            Barwed: '\u2306',
            barwedge: '\u2305',
            bbrk: '\u23B5',
            bbrktbrk: '\u23B6',
            bcong: '\u224C',
            Bcy: '\u0411',
            bcy: '\u0431',
            bdquo: '\u201E',
            becaus: '\u2235',
            because: '\u2235',
            Because: '\u2235',
            bemptyv: '\u29B0',
            bepsi: '\u03F6',
            bernou: '\u212C',
            Bernoullis: '\u212C',
            Beta: '\u0392',
            beta: '\u03B2',
            beth: '\u2136',
            between: '\u226C',
            Bfr: '\u{1D505}',
            bfr: '\u{1D51F}',
            bigcap: '\u22C2',
            bigcirc: '\u25EF',
            bigcup: '\u22C3',
            bigodot: '\u2A00',
            bigoplus: '\u2A01',
            bigotimes: '\u2A02',
            bigsqcup: '\u2A06',
            bigstar: '\u2605',
            bigtriangledown: '\u25BD',
            bigtriangleup: '\u25B3',
            biguplus: '\u2A04',
            bigvee: '\u22C1',
            bigwedge: '\u22C0',
            bkarow: '\u290D',
            blacklozenge: '\u29EB',
            blacksquare: '\u25AA',
            blacktriangle: '\u25B4',
            blacktriangledown: '\u25BE',
            blacktriangleleft: '\u25C2',
            blacktriangleright: '\u25B8',
            blank: '\u2423',
            blk12: '\u2592',
            blk14: '\u2591',
            blk34: '\u2593',
            block: '\u2588',
            bne: '=\u20E5',
            bnequiv: '\u2261\u20E5',
            bNot: '\u2AED',
            bnot: '\u2310',
            Bopf: '\u{1D539}',
            bopf: '\u{1D553}',
            bot: '\u22A5',
            bottom: '\u22A5',
            bowtie: '\u22C8',
            boxbox: '\u29C9',
            boxdl: '\u2510',
            boxdL: '\u2555',
            boxDl: '\u2556',
            boxDL: '\u2557',
            boxdr: '\u250C',
            boxdR: '\u2552',
            boxDr: '\u2553',
            boxDR: '\u2554',
            boxh: '\u2500',
            boxH: '\u2550',
            boxhd: '\u252C',
            boxHd: '\u2564',
            boxhD: '\u2565',
            boxHD: '\u2566',
            boxhu: '\u2534',
            boxHu: '\u2567',
            boxhU: '\u2568',
            boxHU: '\u2569',
            boxminus: '\u229F',
            boxplus: '\u229E',
            boxtimes: '\u22A0',
            boxul: '\u2518',
            boxuL: '\u255B',
            boxUl: '\u255C',
            boxUL: '\u255D',
            boxur: '\u2514',
            boxuR: '\u2558',
            boxUr: '\u2559',
            boxUR: '\u255A',
            boxv: '\u2502',
            boxV: '\u2551',
            boxvh: '\u253C',
            boxvH: '\u256A',
            boxVh: '\u256B',
            boxVH: '\u256C',
            boxvl: '\u2524',
            boxvL: '\u2561',
            boxVl: '\u2562',
            boxVL: '\u2563',
            boxvr: '\u251C',
            boxvR: '\u255E',
            boxVr: '\u255F',
            boxVR: '\u2560',
            bprime: '\u2035',
            breve: '\u02D8',
            Breve: '\u02D8',
            brvbar: '\xA6',
            bscr: '\u{1D4B7}',
            Bscr: '\u212C',
            bsemi: '\u204F',
            bsim: '\u223D',
            bsime: '\u22CD',
            bsolb: '\u29C5',
            bsol: '\\',
            bsolhsub: '\u27C8',
            bull: '\u2022',
            bullet: '\u2022',
            bump: '\u224E',
            bumpE: '\u2AAE',
            bumpe: '\u224F',
            Bumpeq: '\u224E',
            bumpeq: '\u224F',
            Cacute: '\u0106',
            cacute: '\u0107',
            capand: '\u2A44',
            capbrcup: '\u2A49',
            capcap: '\u2A4B',
            cap: '\u2229',
            Cap: '\u22D2',
            capcup: '\u2A47',
            capdot: '\u2A40',
            CapitalDifferentialD: '\u2145',
            caps: '\u2229\uFE00',
            caret: '\u2041',
            caron: '\u02C7',
            Cayleys: '\u212D',
            ccaps: '\u2A4D',
            Ccaron: '\u010C',
            ccaron: '\u010D',
            Ccedil: '\xC7',
            ccedil: '\xE7',
            Ccirc: '\u0108',
            ccirc: '\u0109',
            Cconint: '\u2230',
            ccups: '\u2A4C',
            ccupssm: '\u2A50',
            Cdot: '\u010A',
            cdot: '\u010B',
            cedil: '\xB8',
            Cedilla: '\xB8',
            cemptyv: '\u29B2',
            cent: '\xA2',
            centerdot: '\xB7',
            CenterDot: '\xB7',
            cfr: '\u{1D520}',
            Cfr: '\u212D',
            CHcy: '\u0427',
            chcy: '\u0447',
            check: '\u2713',
            checkmark: '\u2713',
            Chi: '\u03A7',
            chi: '\u03C7',
            circ: '\u02C6',
            circeq: '\u2257',
            circlearrowleft: '\u21BA',
            circlearrowright: '\u21BB',
            circledast: '\u229B',
            circledcirc: '\u229A',
            circleddash: '\u229D',
            CircleDot: '\u2299',
            circledR: '\xAE',
            circledS: '\u24C8',
            CircleMinus: '\u2296',
            CirclePlus: '\u2295',
            CircleTimes: '\u2297',
            cir: '\u25CB',
            cirE: '\u29C3',
            cire: '\u2257',
            cirfnint: '\u2A10',
            cirmid: '\u2AEF',
            cirscir: '\u29C2',
            ClockwiseContourIntegral: '\u2232',
            CloseCurlyDoubleQuote: '\u201D',
            CloseCurlyQuote: '\u2019',
            clubs: '\u2663',
            clubsuit: '\u2663',
            colon: ':',
            Colon: '\u2237',
            Colone: '\u2A74',
            colone: '\u2254',
            coloneq: '\u2254',
            comma: ',',
            commat: '@',
            comp: '\u2201',
            compfn: '\u2218',
            complement: '\u2201',
            complexes: '\u2102',
            cong: '\u2245',
            congdot: '\u2A6D',
            Congruent: '\u2261',
            conint: '\u222E',
            Conint: '\u222F',
            ContourIntegral: '\u222E',
            copf: '\u{1D554}',
            Copf: '\u2102',
            coprod: '\u2210',
            Coproduct: '\u2210',
            copy: '\xA9',
            COPY: '\xA9',
            copysr: '\u2117',
            CounterClockwiseContourIntegral: '\u2233',
            crarr: '\u21B5',
            cross: '\u2717',
            Cross: '\u2A2F',
            Cscr: '\u{1D49E}',
            cscr: '\u{1D4B8}',
            csub: '\u2ACF',
            csube: '\u2AD1',
            csup: '\u2AD0',
            csupe: '\u2AD2',
            ctdot: '\u22EF',
            cudarrl: '\u2938',
            cudarrr: '\u2935',
            cuepr: '\u22DE',
            cuesc: '\u22DF',
            cularr: '\u21B6',
            cularrp: '\u293D',
            cupbrcap: '\u2A48',
            cupcap: '\u2A46',
            CupCap: '\u224D',
            cup: '\u222A',
            Cup: '\u22D3',
            cupcup: '\u2A4A',
            cupdot: '\u228D',
            cupor: '\u2A45',
            cups: '\u222A\uFE00',
            curarr: '\u21B7',
            curarrm: '\u293C',
            curlyeqprec: '\u22DE',
            curlyeqsucc: '\u22DF',
            curlyvee: '\u22CE',
            curlywedge: '\u22CF',
            curren: '\xA4',
            curvearrowleft: '\u21B6',
            curvearrowright: '\u21B7',
            cuvee: '\u22CE',
            cuwed: '\u22CF',
            cwconint: '\u2232',
            cwint: '\u2231',
            cylcty: '\u232D',
            dagger: '\u2020',
            Dagger: '\u2021',
            daleth: '\u2138',
            darr: '\u2193',
            Darr: '\u21A1',
            dArr: '\u21D3',
            dash: '\u2010',
            Dashv: '\u2AE4',
            dashv: '\u22A3',
            dbkarow: '\u290F',
            dblac: '\u02DD',
            Dcaron: '\u010E',
            dcaron: '\u010F',
            Dcy: '\u0414',
            dcy: '\u0434',
            ddagger: '\u2021',
            ddarr: '\u21CA',
            DD: '\u2145',
            dd: '\u2146',
            DDotrahd: '\u2911',
            ddotseq: '\u2A77',
            deg: '\xB0',
            Del: '\u2207',
            Delta: '\u0394',
            delta: '\u03B4',
            demptyv: '\u29B1',
            dfisht: '\u297F',
            Dfr: '\u{1D507}',
            dfr: '\u{1D521}',
            dHar: '\u2965',
            dharl: '\u21C3',
            dharr: '\u21C2',
            DiacriticalAcute: '\xB4',
            DiacriticalDot: '\u02D9',
            DiacriticalDoubleAcute: '\u02DD',
            DiacriticalGrave: '`',
            DiacriticalTilde: '\u02DC',
            diam: '\u22C4',
            diamond: '\u22C4',
            Diamond: '\u22C4',
            diamondsuit: '\u2666',
            diams: '\u2666',
            die: '\xA8',
            DifferentialD: '\u2146',
            digamma: '\u03DD',
            disin: '\u22F2',
            div: '\xF7',
            divide: '\xF7',
            divideontimes: '\u22C7',
            divonx: '\u22C7',
            DJcy: '\u0402',
            djcy: '\u0452',
            dlcorn: '\u231E',
            dlcrop: '\u230D',
            dollar: '$',
            Dopf: '\u{1D53B}',
            dopf: '\u{1D555}',
            Dot: '\xA8',
            dot: '\u02D9',
            DotDot: '\u20DC',
            doteq: '\u2250',
            doteqdot: '\u2251',
            DotEqual: '\u2250',
            dotminus: '\u2238',
            dotplus: '\u2214',
            dotsquare: '\u22A1',
            doublebarwedge: '\u2306',
            DoubleContourIntegral: '\u222F',
            DoubleDot: '\xA8',
            DoubleDownArrow: '\u21D3',
            DoubleLeftArrow: '\u21D0',
            DoubleLeftRightArrow: '\u21D4',
            DoubleLeftTee: '\u2AE4',
            DoubleLongLeftArrow: '\u27F8',
            DoubleLongLeftRightArrow: '\u27FA',
            DoubleLongRightArrow: '\u27F9',
            DoubleRightArrow: '\u21D2',
            DoubleRightTee: '\u22A8',
            DoubleUpArrow: '\u21D1',
            DoubleUpDownArrow: '\u21D5',
            DoubleVerticalBar: '\u2225',
            DownArrowBar: '\u2913',
            downarrow: '\u2193',
            DownArrow: '\u2193',
            Downarrow: '\u21D3',
            DownArrowUpArrow: '\u21F5',
            DownBreve: '\u0311',
            downdownarrows: '\u21CA',
            downharpoonleft: '\u21C3',
            downharpoonright: '\u21C2',
            DownLeftRightVector: '\u2950',
            DownLeftTeeVector: '\u295E',
            DownLeftVectorBar: '\u2956',
            DownLeftVector: '\u21BD',
            DownRightTeeVector: '\u295F',
            DownRightVectorBar: '\u2957',
            DownRightVector: '\u21C1',
            DownTeeArrow: '\u21A7',
            DownTee: '\u22A4',
            drbkarow: '\u2910',
            drcorn: '\u231F',
            drcrop: '\u230C',
            Dscr: '\u{1D49F}',
            dscr: '\u{1D4B9}',
            DScy: '\u0405',
            dscy: '\u0455',
            dsol: '\u29F6',
            Dstrok: '\u0110',
            dstrok: '\u0111',
            dtdot: '\u22F1',
            dtri: '\u25BF',
            dtrif: '\u25BE',
            duarr: '\u21F5',
            duhar: '\u296F',
            dwangle: '\u29A6',
            DZcy: '\u040F',
            dzcy: '\u045F',
            dzigrarr: '\u27FF',
            Eacute: '\xC9',
            eacute: '\xE9',
            easter: '\u2A6E',
            Ecaron: '\u011A',
            ecaron: '\u011B',
            Ecirc: '\xCA',
            ecirc: '\xEA',
            ecir: '\u2256',
            ecolon: '\u2255',
            Ecy: '\u042D',
            ecy: '\u044D',
            eDDot: '\u2A77',
            Edot: '\u0116',
            edot: '\u0117',
            eDot: '\u2251',
            ee: '\u2147',
            efDot: '\u2252',
            Efr: '\u{1D508}',
            efr: '\u{1D522}',
            eg: '\u2A9A',
            Egrave: '\xC8',
            egrave: '\xE8',
            egs: '\u2A96',
            egsdot: '\u2A98',
            el: '\u2A99',
            Element: '\u2208',
            elinters: '\u23E7',
            ell: '\u2113',
            els: '\u2A95',
            elsdot: '\u2A97',
            Emacr: '\u0112',
            emacr: '\u0113',
            empty: '\u2205',
            emptyset: '\u2205',
            EmptySmallSquare: '\u25FB',
            emptyv: '\u2205',
            EmptyVerySmallSquare: '\u25AB',
            emsp13: '\u2004',
            emsp14: '\u2005',
            emsp: '\u2003',
            ENG: '\u014A',
            eng: '\u014B',
            ensp: '\u2002',
            Eogon: '\u0118',
            eogon: '\u0119',
            Eopf: '\u{1D53C}',
            eopf: '\u{1D556}',
            epar: '\u22D5',
            eparsl: '\u29E3',
            eplus: '\u2A71',
            epsi: '\u03B5',
            Epsilon: '\u0395',
            epsilon: '\u03B5',
            epsiv: '\u03F5',
            eqcirc: '\u2256',
            eqcolon: '\u2255',
            eqsim: '\u2242',
            eqslantgtr: '\u2A96',
            eqslantless: '\u2A95',
            Equal: '\u2A75',
            equals: '=',
            EqualTilde: '\u2242',
            equest: '\u225F',
            Equilibrium: '\u21CC',
            equiv: '\u2261',
            equivDD: '\u2A78',
            eqvparsl: '\u29E5',
            erarr: '\u2971',
            erDot: '\u2253',
            escr: '\u212F',
            Escr: '\u2130',
            esdot: '\u2250',
            Esim: '\u2A73',
            esim: '\u2242',
            Eta: '\u0397',
            eta: '\u03B7',
            ETH: '\xD0',
            eth: '\xF0',
            Euml: '\xCB',
            euml: '\xEB',
            euro: '\u20AC',
            excl: '!',
            exist: '\u2203',
            Exists: '\u2203',
            expectation: '\u2130',
            exponentiale: '\u2147',
            ExponentialE: '\u2147',
            fallingdotseq: '\u2252',
            Fcy: '\u0424',
            fcy: '\u0444',
            female: '\u2640',
            ffilig: '\uFB03',
            fflig: '\uFB00',
            ffllig: '\uFB04',
            Ffr: '\u{1D509}',
            ffr: '\u{1D523}',
            filig: '\uFB01',
            FilledSmallSquare: '\u25FC',
            FilledVerySmallSquare: '\u25AA',
            fjlig: 'fj',
            flat: '\u266D',
            fllig: '\uFB02',
            fltns: '\u25B1',
            fnof: '\u0192',
            Fopf: '\u{1D53D}',
            fopf: '\u{1D557}',
            forall: '\u2200',
            ForAll: '\u2200',
            fork: '\u22D4',
            forkv: '\u2AD9',
            Fouriertrf: '\u2131',
            fpartint: '\u2A0D',
            frac12: '\xBD',
            frac13: '\u2153',
            frac14: '\xBC',
            frac15: '\u2155',
            frac16: '\u2159',
            frac18: '\u215B',
            frac23: '\u2154',
            frac25: '\u2156',
            frac34: '\xBE',
            frac35: '\u2157',
            frac38: '\u215C',
            frac45: '\u2158',
            frac56: '\u215A',
            frac58: '\u215D',
            frac78: '\u215E',
            frasl: '\u2044',
            frown: '\u2322',
            fscr: '\u{1D4BB}',
            Fscr: '\u2131',
            gacute: '\u01F5',
            Gamma: '\u0393',
            gamma: '\u03B3',
            Gammad: '\u03DC',
            gammad: '\u03DD',
            gap: '\u2A86',
            Gbreve: '\u011E',
            gbreve: '\u011F',
            Gcedil: '\u0122',
            Gcirc: '\u011C',
            gcirc: '\u011D',
            Gcy: '\u0413',
            gcy: '\u0433',
            Gdot: '\u0120',
            gdot: '\u0121',
            ge: '\u2265',
            gE: '\u2267',
            gEl: '\u2A8C',
            gel: '\u22DB',
            geq: '\u2265',
            geqq: '\u2267',
            geqslant: '\u2A7E',
            gescc: '\u2AA9',
            ges: '\u2A7E',
            gesdot: '\u2A80',
            gesdoto: '\u2A82',
            gesdotol: '\u2A84',
            gesl: '\u22DB\uFE00',
            gesles: '\u2A94',
            Gfr: '\u{1D50A}',
            gfr: '\u{1D524}',
            gg: '\u226B',
            Gg: '\u22D9',
            ggg: '\u22D9',
            gimel: '\u2137',
            GJcy: '\u0403',
            gjcy: '\u0453',
            gla: '\u2AA5',
            gl: '\u2277',
            glE: '\u2A92',
            glj: '\u2AA4',
            gnap: '\u2A8A',
            gnapprox: '\u2A8A',
            gne: '\u2A88',
            gnE: '\u2269',
            gneq: '\u2A88',
            gneqq: '\u2269',
            gnsim: '\u22E7',
            Gopf: '\u{1D53E}',
            gopf: '\u{1D558}',
            grave: '`',
            GreaterEqual: '\u2265',
            GreaterEqualLess: '\u22DB',
            GreaterFullEqual: '\u2267',
            GreaterGreater: '\u2AA2',
            GreaterLess: '\u2277',
            GreaterSlantEqual: '\u2A7E',
            GreaterTilde: '\u2273',
            Gscr: '\u{1D4A2}',
            gscr: '\u210A',
            gsim: '\u2273',
            gsime: '\u2A8E',
            gsiml: '\u2A90',
            gtcc: '\u2AA7',
            gtcir: '\u2A7A',
            gt: '>',
            GT: '>',
            Gt: '\u226B',
            gtdot: '\u22D7',
            gtlPar: '\u2995',
            gtquest: '\u2A7C',
            gtrapprox: '\u2A86',
            gtrarr: '\u2978',
            gtrdot: '\u22D7',
            gtreqless: '\u22DB',
            gtreqqless: '\u2A8C',
            gtrless: '\u2277',
            gtrsim: '\u2273',
            gvertneqq: '\u2269\uFE00',
            gvnE: '\u2269\uFE00',
            Hacek: '\u02C7',
            hairsp: '\u200A',
            half: '\xBD',
            hamilt: '\u210B',
            HARDcy: '\u042A',
            hardcy: '\u044A',
            harrcir: '\u2948',
            harr: '\u2194',
            hArr: '\u21D4',
            harrw: '\u21AD',
            Hat: '^',
            hbar: '\u210F',
            Hcirc: '\u0124',
            hcirc: '\u0125',
            hearts: '\u2665',
            heartsuit: '\u2665',
            hellip: '\u2026',
            hercon: '\u22B9',
            hfr: '\u{1D525}',
            Hfr: '\u210C',
            HilbertSpace: '\u210B',
            hksearow: '\u2925',
            hkswarow: '\u2926',
            hoarr: '\u21FF',
            homtht: '\u223B',
            hookleftarrow: '\u21A9',
            hookrightarrow: '\u21AA',
            hopf: '\u{1D559}',
            Hopf: '\u210D',
            horbar: '\u2015',
            HorizontalLine: '\u2500',
            hscr: '\u{1D4BD}',
            Hscr: '\u210B',
            hslash: '\u210F',
            Hstrok: '\u0126',
            hstrok: '\u0127',
            HumpDownHump: '\u224E',
            HumpEqual: '\u224F',
            hybull: '\u2043',
            hyphen: '\u2010',
            Iacute: '\xCD',
            iacute: '\xED',
            ic: '\u2063',
            Icirc: '\xCE',
            icirc: '\xEE',
            Icy: '\u0418',
            icy: '\u0438',
            Idot: '\u0130',
            IEcy: '\u0415',
            iecy: '\u0435',
            iexcl: '\xA1',
            iff: '\u21D4',
            ifr: '\u{1D526}',
            Ifr: '\u2111',
            Igrave: '\xCC',
            igrave: '\xEC',
            ii: '\u2148',
            iiiint: '\u2A0C',
            iiint: '\u222D',
            iinfin: '\u29DC',
            iiota: '\u2129',
            IJlig: '\u0132',
            ijlig: '\u0133',
            Imacr: '\u012A',
            imacr: '\u012B',
            image: '\u2111',
            ImaginaryI: '\u2148',
            imagline: '\u2110',
            imagpart: '\u2111',
            imath: '\u0131',
            Im: '\u2111',
            imof: '\u22B7',
            imped: '\u01B5',
            Implies: '\u21D2',
            incare: '\u2105',
            in: '\u2208',
            infin: '\u221E',
            infintie: '\u29DD',
            inodot: '\u0131',
            intcal: '\u22BA',
            int: '\u222B',
            Int: '\u222C',
            integers: '\u2124',
            Integral: '\u222B',
            intercal: '\u22BA',
            Intersection: '\u22C2',
            intlarhk: '\u2A17',
            intprod: '\u2A3C',
            InvisibleComma: '\u2063',
            InvisibleTimes: '\u2062',
            IOcy: '\u0401',
            iocy: '\u0451',
            Iogon: '\u012E',
            iogon: '\u012F',
            Iopf: '\u{1D540}',
            iopf: '\u{1D55A}',
            Iota: '\u0399',
            iota: '\u03B9',
            iprod: '\u2A3C',
            iquest: '\xBF',
            iscr: '\u{1D4BE}',
            Iscr: '\u2110',
            isin: '\u2208',
            isindot: '\u22F5',
            isinE: '\u22F9',
            isins: '\u22F4',
            isinsv: '\u22F3',
            isinv: '\u2208',
            it: '\u2062',
            Itilde: '\u0128',
            itilde: '\u0129',
            Iukcy: '\u0406',
            iukcy: '\u0456',
            Iuml: '\xCF',
            iuml: '\xEF',
            Jcirc: '\u0134',
            jcirc: '\u0135',
            Jcy: '\u0419',
            jcy: '\u0439',
            Jfr: '\u{1D50D}',
            jfr: '\u{1D527}',
            jmath: '\u0237',
            Jopf: '\u{1D541}',
            jopf: '\u{1D55B}',
            Jscr: '\u{1D4A5}',
            jscr: '\u{1D4BF}',
            Jsercy: '\u0408',
            jsercy: '\u0458',
            Jukcy: '\u0404',
            jukcy: '\u0454',
            Kappa: '\u039A',
            kappa: '\u03BA',
            kappav: '\u03F0',
            Kcedil: '\u0136',
            kcedil: '\u0137',
            Kcy: '\u041A',
            kcy: '\u043A',
            Kfr: '\u{1D50E}',
            kfr: '\u{1D528}',
            kgreen: '\u0138',
            KHcy: '\u0425',
            khcy: '\u0445',
            KJcy: '\u040C',
            kjcy: '\u045C',
            Kopf: '\u{1D542}',
            kopf: '\u{1D55C}',
            Kscr: '\u{1D4A6}',
            kscr: '\u{1D4C0}',
            lAarr: '\u21DA',
            Lacute: '\u0139',
            lacute: '\u013A',
            laemptyv: '\u29B4',
            lagran: '\u2112',
            Lambda: '\u039B',
            lambda: '\u03BB',
            lang: '\u27E8',
            Lang: '\u27EA',
            langd: '\u2991',
            langle: '\u27E8',
            lap: '\u2A85',
            Laplacetrf: '\u2112',
            laquo: '\xAB',
            larrb: '\u21E4',
            larrbfs: '\u291F',
            larr: '\u2190',
            Larr: '\u219E',
            lArr: '\u21D0',
            larrfs: '\u291D',
            larrhk: '\u21A9',
            larrlp: '\u21AB',
            larrpl: '\u2939',
            larrsim: '\u2973',
            larrtl: '\u21A2',
            latail: '\u2919',
            lAtail: '\u291B',
            lat: '\u2AAB',
            late: '\u2AAD',
            lates: '\u2AAD\uFE00',
            lbarr: '\u290C',
            lBarr: '\u290E',
            lbbrk: '\u2772',
            lbrace: '{',
            lbrack: '[',
            lbrke: '\u298B',
            lbrksld: '\u298F',
            lbrkslu: '\u298D',
            Lcaron: '\u013D',
            lcaron: '\u013E',
            Lcedil: '\u013B',
            lcedil: '\u013C',
            lceil: '\u2308',
            lcub: '{',
            Lcy: '\u041B',
            lcy: '\u043B',
            ldca: '\u2936',
            ldquo: '\u201C',
            ldquor: '\u201E',
            ldrdhar: '\u2967',
            ldrushar: '\u294B',
            ldsh: '\u21B2',
            le: '\u2264',
            lE: '\u2266',
            LeftAngleBracket: '\u27E8',
            LeftArrowBar: '\u21E4',
            leftarrow: '\u2190',
            LeftArrow: '\u2190',
            Leftarrow: '\u21D0',
            LeftArrowRightArrow: '\u21C6',
            leftarrowtail: '\u21A2',
            LeftCeiling: '\u2308',
            LeftDoubleBracket: '\u27E6',
            LeftDownTeeVector: '\u2961',
            LeftDownVectorBar: '\u2959',
            LeftDownVector: '\u21C3',
            LeftFloor: '\u230A',
            leftharpoondown: '\u21BD',
            leftharpoonup: '\u21BC',
            leftleftarrows: '\u21C7',
            leftrightarrow: '\u2194',
            LeftRightArrow: '\u2194',
            Leftrightarrow: '\u21D4',
            leftrightarrows: '\u21C6',
            leftrightharpoons: '\u21CB',
            leftrightsquigarrow: '\u21AD',
            LeftRightVector: '\u294E',
            LeftTeeArrow: '\u21A4',
            LeftTee: '\u22A3',
            LeftTeeVector: '\u295A',
            leftthreetimes: '\u22CB',
            LeftTriangleBar: '\u29CF',
            LeftTriangle: '\u22B2',
            LeftTriangleEqual: '\u22B4',
            LeftUpDownVector: '\u2951',
            LeftUpTeeVector: '\u2960',
            LeftUpVectorBar: '\u2958',
            LeftUpVector: '\u21BF',
            LeftVectorBar: '\u2952',
            LeftVector: '\u21BC',
            lEg: '\u2A8B',
            leg: '\u22DA',
            leq: '\u2264',
            leqq: '\u2266',
            leqslant: '\u2A7D',
            lescc: '\u2AA8',
            les: '\u2A7D',
            lesdot: '\u2A7F',
            lesdoto: '\u2A81',
            lesdotor: '\u2A83',
            lesg: '\u22DA\uFE00',
            lesges: '\u2A93',
            lessapprox: '\u2A85',
            lessdot: '\u22D6',
            lesseqgtr: '\u22DA',
            lesseqqgtr: '\u2A8B',
            LessEqualGreater: '\u22DA',
            LessFullEqual: '\u2266',
            LessGreater: '\u2276',
            lessgtr: '\u2276',
            LessLess: '\u2AA1',
            lesssim: '\u2272',
            LessSlantEqual: '\u2A7D',
            LessTilde: '\u2272',
            lfisht: '\u297C',
            lfloor: '\u230A',
            Lfr: '\u{1D50F}',
            lfr: '\u{1D529}',
            lg: '\u2276',
            lgE: '\u2A91',
            lHar: '\u2962',
            lhard: '\u21BD',
            lharu: '\u21BC',
            lharul: '\u296A',
            lhblk: '\u2584',
            LJcy: '\u0409',
            ljcy: '\u0459',
            llarr: '\u21C7',
            ll: '\u226A',
            Ll: '\u22D8',
            llcorner: '\u231E',
            Lleftarrow: '\u21DA',
            llhard: '\u296B',
            lltri: '\u25FA',
            Lmidot: '\u013F',
            lmidot: '\u0140',
            lmoustache: '\u23B0',
            lmoust: '\u23B0',
            lnap: '\u2A89',
            lnapprox: '\u2A89',
            lne: '\u2A87',
            lnE: '\u2268',
            lneq: '\u2A87',
            lneqq: '\u2268',
            lnsim: '\u22E6',
            loang: '\u27EC',
            loarr: '\u21FD',
            lobrk: '\u27E6',
            longleftarrow: '\u27F5',
            LongLeftArrow: '\u27F5',
            Longleftarrow: '\u27F8',
            longleftrightarrow: '\u27F7',
            LongLeftRightArrow: '\u27F7',
            Longleftrightarrow: '\u27FA',
            longmapsto: '\u27FC',
            longrightarrow: '\u27F6',
            LongRightArrow: '\u27F6',
            Longrightarrow: '\u27F9',
            looparrowleft: '\u21AB',
            looparrowright: '\u21AC',
            lopar: '\u2985',
            Lopf: '\u{1D543}',
            lopf: '\u{1D55D}',
            loplus: '\u2A2D',
            lotimes: '\u2A34',
            lowast: '\u2217',
            lowbar: '_',
            LowerLeftArrow: '\u2199',
            LowerRightArrow: '\u2198',
            loz: '\u25CA',
            lozenge: '\u25CA',
            lozf: '\u29EB',
            lpar: '(',
            lparlt: '\u2993',
            lrarr: '\u21C6',
            lrcorner: '\u231F',
            lrhar: '\u21CB',
            lrhard: '\u296D',
            lrm: '\u200E',
            lrtri: '\u22BF',
            lsaquo: '\u2039',
            lscr: '\u{1D4C1}',
            Lscr: '\u2112',
            lsh: '\u21B0',
            Lsh: '\u21B0',
            lsim: '\u2272',
            lsime: '\u2A8D',
            lsimg: '\u2A8F',
            lsqb: '[',
            lsquo: '\u2018',
            lsquor: '\u201A',
            Lstrok: '\u0141',
            lstrok: '\u0142',
            ltcc: '\u2AA6',
            ltcir: '\u2A79',
            lt: '<',
            LT: '<',
            Lt: '\u226A',
            ltdot: '\u22D6',
            lthree: '\u22CB',
            ltimes: '\u22C9',
            ltlarr: '\u2976',
            ltquest: '\u2A7B',
            ltri: '\u25C3',
            ltrie: '\u22B4',
            ltrif: '\u25C2',
            ltrPar: '\u2996',
            lurdshar: '\u294A',
            luruhar: '\u2966',
            lvertneqq: '\u2268\uFE00',
            lvnE: '\u2268\uFE00',
            macr: '\xAF',
            male: '\u2642',
            malt: '\u2720',
            maltese: '\u2720',
            Map: '\u2905',
            map: '\u21A6',
            mapsto: '\u21A6',
            mapstodown: '\u21A7',
            mapstoleft: '\u21A4',
            mapstoup: '\u21A5',
            marker: '\u25AE',
            mcomma: '\u2A29',
            Mcy: '\u041C',
            mcy: '\u043C',
            mdash: '\u2014',
            mDDot: '\u223A',
            measuredangle: '\u2221',
            MediumSpace: '\u205F',
            Mellintrf: '\u2133',
            Mfr: '\u{1D510}',
            mfr: '\u{1D52A}',
            mho: '\u2127',
            micro: '\xB5',
            midast: '*',
            midcir: '\u2AF0',
            mid: '\u2223',
            middot: '\xB7',
            minusb: '\u229F',
            minus: '\u2212',
            minusd: '\u2238',
            minusdu: '\u2A2A',
            MinusPlus: '\u2213',
            mlcp: '\u2ADB',
            mldr: '\u2026',
            mnplus: '\u2213',
            models: '\u22A7',
            Mopf: '\u{1D544}',
            mopf: '\u{1D55E}',
            mp: '\u2213',
            mscr: '\u{1D4C2}',
            Mscr: '\u2133',
            mstpos: '\u223E',
            Mu: '\u039C',
            mu: '\u03BC',
            multimap: '\u22B8',
            mumap: '\u22B8',
            nabla: '\u2207',
            Nacute: '\u0143',
            nacute: '\u0144',
            nang: '\u2220\u20D2',
            nap: '\u2249',
            napE: '\u2A70\u0338',
            napid: '\u224B\u0338',
            napos: '\u0149',
            napprox: '\u2249',
            natural: '\u266E',
            naturals: '\u2115',
            natur: '\u266E',
            nbsp: '\xA0',
            nbump: '\u224E\u0338',
            nbumpe: '\u224F\u0338',
            ncap: '\u2A43',
            Ncaron: '\u0147',
            ncaron: '\u0148',
            Ncedil: '\u0145',
            ncedil: '\u0146',
            ncong: '\u2247',
            ncongdot: '\u2A6D\u0338',
            ncup: '\u2A42',
            Ncy: '\u041D',
            ncy: '\u043D',
            ndash: '\u2013',
            nearhk: '\u2924',
            nearr: '\u2197',
            neArr: '\u21D7',
            nearrow: '\u2197',
            ne: '\u2260',
            nedot: '\u2250\u0338',
            NegativeMediumSpace: '\u200B',
            NegativeThickSpace: '\u200B',
            NegativeThinSpace: '\u200B',
            NegativeVeryThinSpace: '\u200B',
            nequiv: '\u2262',
            nesear: '\u2928',
            nesim: '\u2242\u0338',
            NestedGreaterGreater: '\u226B',
            NestedLessLess: '\u226A',
            NewLine: `
`,
            nexist: '\u2204',
            nexists: '\u2204',
            Nfr: '\u{1D511}',
            nfr: '\u{1D52B}',
            ngE: '\u2267\u0338',
            nge: '\u2271',
            ngeq: '\u2271',
            ngeqq: '\u2267\u0338',
            ngeqslant: '\u2A7E\u0338',
            nges: '\u2A7E\u0338',
            nGg: '\u22D9\u0338',
            ngsim: '\u2275',
            nGt: '\u226B\u20D2',
            ngt: '\u226F',
            ngtr: '\u226F',
            nGtv: '\u226B\u0338',
            nharr: '\u21AE',
            nhArr: '\u21CE',
            nhpar: '\u2AF2',
            ni: '\u220B',
            nis: '\u22FC',
            nisd: '\u22FA',
            niv: '\u220B',
            NJcy: '\u040A',
            njcy: '\u045A',
            nlarr: '\u219A',
            nlArr: '\u21CD',
            nldr: '\u2025',
            nlE: '\u2266\u0338',
            nle: '\u2270',
            nleftarrow: '\u219A',
            nLeftarrow: '\u21CD',
            nleftrightarrow: '\u21AE',
            nLeftrightarrow: '\u21CE',
            nleq: '\u2270',
            nleqq: '\u2266\u0338',
            nleqslant: '\u2A7D\u0338',
            nles: '\u2A7D\u0338',
            nless: '\u226E',
            nLl: '\u22D8\u0338',
            nlsim: '\u2274',
            nLt: '\u226A\u20D2',
            nlt: '\u226E',
            nltri: '\u22EA',
            nltrie: '\u22EC',
            nLtv: '\u226A\u0338',
            nmid: '\u2224',
            NoBreak: '\u2060',
            NonBreakingSpace: '\xA0',
            nopf: '\u{1D55F}',
            Nopf: '\u2115',
            Not: '\u2AEC',
            not: '\xAC',
            NotCongruent: '\u2262',
            NotCupCap: '\u226D',
            NotDoubleVerticalBar: '\u2226',
            NotElement: '\u2209',
            NotEqual: '\u2260',
            NotEqualTilde: '\u2242\u0338',
            NotExists: '\u2204',
            NotGreater: '\u226F',
            NotGreaterEqual: '\u2271',
            NotGreaterFullEqual: '\u2267\u0338',
            NotGreaterGreater: '\u226B\u0338',
            NotGreaterLess: '\u2279',
            NotGreaterSlantEqual: '\u2A7E\u0338',
            NotGreaterTilde: '\u2275',
            NotHumpDownHump: '\u224E\u0338',
            NotHumpEqual: '\u224F\u0338',
            notin: '\u2209',
            notindot: '\u22F5\u0338',
            notinE: '\u22F9\u0338',
            notinva: '\u2209',
            notinvb: '\u22F7',
            notinvc: '\u22F6',
            NotLeftTriangleBar: '\u29CF\u0338',
            NotLeftTriangle: '\u22EA',
            NotLeftTriangleEqual: '\u22EC',
            NotLess: '\u226E',
            NotLessEqual: '\u2270',
            NotLessGreater: '\u2278',
            NotLessLess: '\u226A\u0338',
            NotLessSlantEqual: '\u2A7D\u0338',
            NotLessTilde: '\u2274',
            NotNestedGreaterGreater: '\u2AA2\u0338',
            NotNestedLessLess: '\u2AA1\u0338',
            notni: '\u220C',
            notniva: '\u220C',
            notnivb: '\u22FE',
            notnivc: '\u22FD',
            NotPrecedes: '\u2280',
            NotPrecedesEqual: '\u2AAF\u0338',
            NotPrecedesSlantEqual: '\u22E0',
            NotReverseElement: '\u220C',
            NotRightTriangleBar: '\u29D0\u0338',
            NotRightTriangle: '\u22EB',
            NotRightTriangleEqual: '\u22ED',
            NotSquareSubset: '\u228F\u0338',
            NotSquareSubsetEqual: '\u22E2',
            NotSquareSuperset: '\u2290\u0338',
            NotSquareSupersetEqual: '\u22E3',
            NotSubset: '\u2282\u20D2',
            NotSubsetEqual: '\u2288',
            NotSucceeds: '\u2281',
            NotSucceedsEqual: '\u2AB0\u0338',
            NotSucceedsSlantEqual: '\u22E1',
            NotSucceedsTilde: '\u227F\u0338',
            NotSuperset: '\u2283\u20D2',
            NotSupersetEqual: '\u2289',
            NotTilde: '\u2241',
            NotTildeEqual: '\u2244',
            NotTildeFullEqual: '\u2247',
            NotTildeTilde: '\u2249',
            NotVerticalBar: '\u2224',
            nparallel: '\u2226',
            npar: '\u2226',
            nparsl: '\u2AFD\u20E5',
            npart: '\u2202\u0338',
            npolint: '\u2A14',
            npr: '\u2280',
            nprcue: '\u22E0',
            nprec: '\u2280',
            npreceq: '\u2AAF\u0338',
            npre: '\u2AAF\u0338',
            nrarrc: '\u2933\u0338',
            nrarr: '\u219B',
            nrArr: '\u21CF',
            nrarrw: '\u219D\u0338',
            nrightarrow: '\u219B',
            nRightarrow: '\u21CF',
            nrtri: '\u22EB',
            nrtrie: '\u22ED',
            nsc: '\u2281',
            nsccue: '\u22E1',
            nsce: '\u2AB0\u0338',
            Nscr: '\u{1D4A9}',
            nscr: '\u{1D4C3}',
            nshortmid: '\u2224',
            nshortparallel: '\u2226',
            nsim: '\u2241',
            nsime: '\u2244',
            nsimeq: '\u2244',
            nsmid: '\u2224',
            nspar: '\u2226',
            nsqsube: '\u22E2',
            nsqsupe: '\u22E3',
            nsub: '\u2284',
            nsubE: '\u2AC5\u0338',
            nsube: '\u2288',
            nsubset: '\u2282\u20D2',
            nsubseteq: '\u2288',
            nsubseteqq: '\u2AC5\u0338',
            nsucc: '\u2281',
            nsucceq: '\u2AB0\u0338',
            nsup: '\u2285',
            nsupE: '\u2AC6\u0338',
            nsupe: '\u2289',
            nsupset: '\u2283\u20D2',
            nsupseteq: '\u2289',
            nsupseteqq: '\u2AC6\u0338',
            ntgl: '\u2279',
            Ntilde: '\xD1',
            ntilde: '\xF1',
            ntlg: '\u2278',
            ntriangleleft: '\u22EA',
            ntrianglelefteq: '\u22EC',
            ntriangleright: '\u22EB',
            ntrianglerighteq: '\u22ED',
            Nu: '\u039D',
            nu: '\u03BD',
            num: '#',
            numero: '\u2116',
            numsp: '\u2007',
            nvap: '\u224D\u20D2',
            nvdash: '\u22AC',
            nvDash: '\u22AD',
            nVdash: '\u22AE',
            nVDash: '\u22AF',
            nvge: '\u2265\u20D2',
            nvgt: '>\u20D2',
            nvHarr: '\u2904',
            nvinfin: '\u29DE',
            nvlArr: '\u2902',
            nvle: '\u2264\u20D2',
            nvlt: '<\u20D2',
            nvltrie: '\u22B4\u20D2',
            nvrArr: '\u2903',
            nvrtrie: '\u22B5\u20D2',
            nvsim: '\u223C\u20D2',
            nwarhk: '\u2923',
            nwarr: '\u2196',
            nwArr: '\u21D6',
            nwarrow: '\u2196',
            nwnear: '\u2927',
            Oacute: '\xD3',
            oacute: '\xF3',
            oast: '\u229B',
            Ocirc: '\xD4',
            ocirc: '\xF4',
            ocir: '\u229A',
            Ocy: '\u041E',
            ocy: '\u043E',
            odash: '\u229D',
            Odblac: '\u0150',
            odblac: '\u0151',
            odiv: '\u2A38',
            odot: '\u2299',
            odsold: '\u29BC',
            OElig: '\u0152',
            oelig: '\u0153',
            ofcir: '\u29BF',
            Ofr: '\u{1D512}',
            ofr: '\u{1D52C}',
            ogon: '\u02DB',
            Ograve: '\xD2',
            ograve: '\xF2',
            ogt: '\u29C1',
            ohbar: '\u29B5',
            ohm: '\u03A9',
            oint: '\u222E',
            olarr: '\u21BA',
            olcir: '\u29BE',
            olcross: '\u29BB',
            oline: '\u203E',
            olt: '\u29C0',
            Omacr: '\u014C',
            omacr: '\u014D',
            Omega: '\u03A9',
            omega: '\u03C9',
            Omicron: '\u039F',
            omicron: '\u03BF',
            omid: '\u29B6',
            ominus: '\u2296',
            Oopf: '\u{1D546}',
            oopf: '\u{1D560}',
            opar: '\u29B7',
            OpenCurlyDoubleQuote: '\u201C',
            OpenCurlyQuote: '\u2018',
            operp: '\u29B9',
            oplus: '\u2295',
            orarr: '\u21BB',
            Or: '\u2A54',
            or: '\u2228',
            ord: '\u2A5D',
            order: '\u2134',
            orderof: '\u2134',
            ordf: '\xAA',
            ordm: '\xBA',
            origof: '\u22B6',
            oror: '\u2A56',
            orslope: '\u2A57',
            orv: '\u2A5B',
            oS: '\u24C8',
            Oscr: '\u{1D4AA}',
            oscr: '\u2134',
            Oslash: '\xD8',
            oslash: '\xF8',
            osol: '\u2298',
            Otilde: '\xD5',
            otilde: '\xF5',
            otimesas: '\u2A36',
            Otimes: '\u2A37',
            otimes: '\u2297',
            Ouml: '\xD6',
            ouml: '\xF6',
            ovbar: '\u233D',
            OverBar: '\u203E',
            OverBrace: '\u23DE',
            OverBracket: '\u23B4',
            OverParenthesis: '\u23DC',
            para: '\xB6',
            parallel: '\u2225',
            par: '\u2225',
            parsim: '\u2AF3',
            parsl: '\u2AFD',
            part: '\u2202',
            PartialD: '\u2202',
            Pcy: '\u041F',
            pcy: '\u043F',
            percnt: '%',
            period: '.',
            permil: '\u2030',
            perp: '\u22A5',
            pertenk: '\u2031',
            Pfr: '\u{1D513}',
            pfr: '\u{1D52D}',
            Phi: '\u03A6',
            phi: '\u03C6',
            phiv: '\u03D5',
            phmmat: '\u2133',
            phone: '\u260E',
            Pi: '\u03A0',
            pi: '\u03C0',
            pitchfork: '\u22D4',
            piv: '\u03D6',
            planck: '\u210F',
            planckh: '\u210E',
            plankv: '\u210F',
            plusacir: '\u2A23',
            plusb: '\u229E',
            pluscir: '\u2A22',
            plus: '+',
            plusdo: '\u2214',
            plusdu: '\u2A25',
            pluse: '\u2A72',
            PlusMinus: '\xB1',
            plusmn: '\xB1',
            plussim: '\u2A26',
            plustwo: '\u2A27',
            pm: '\xB1',
            Poincareplane: '\u210C',
            pointint: '\u2A15',
            popf: '\u{1D561}',
            Popf: '\u2119',
            pound: '\xA3',
            prap: '\u2AB7',
            Pr: '\u2ABB',
            pr: '\u227A',
            prcue: '\u227C',
            precapprox: '\u2AB7',
            prec: '\u227A',
            preccurlyeq: '\u227C',
            Precedes: '\u227A',
            PrecedesEqual: '\u2AAF',
            PrecedesSlantEqual: '\u227C',
            PrecedesTilde: '\u227E',
            preceq: '\u2AAF',
            precnapprox: '\u2AB9',
            precneqq: '\u2AB5',
            precnsim: '\u22E8',
            pre: '\u2AAF',
            prE: '\u2AB3',
            precsim: '\u227E',
            prime: '\u2032',
            Prime: '\u2033',
            primes: '\u2119',
            prnap: '\u2AB9',
            prnE: '\u2AB5',
            prnsim: '\u22E8',
            prod: '\u220F',
            Product: '\u220F',
            profalar: '\u232E',
            profline: '\u2312',
            profsurf: '\u2313',
            prop: '\u221D',
            Proportional: '\u221D',
            Proportion: '\u2237',
            propto: '\u221D',
            prsim: '\u227E',
            prurel: '\u22B0',
            Pscr: '\u{1D4AB}',
            pscr: '\u{1D4C5}',
            Psi: '\u03A8',
            psi: '\u03C8',
            puncsp: '\u2008',
            Qfr: '\u{1D514}',
            qfr: '\u{1D52E}',
            qint: '\u2A0C',
            qopf: '\u{1D562}',
            Qopf: '\u211A',
            qprime: '\u2057',
            Qscr: '\u{1D4AC}',
            qscr: '\u{1D4C6}',
            quaternions: '\u210D',
            quatint: '\u2A16',
            quest: '?',
            questeq: '\u225F',
            quot: '"',
            QUOT: '"',
            rAarr: '\u21DB',
            race: '\u223D\u0331',
            Racute: '\u0154',
            racute: '\u0155',
            radic: '\u221A',
            raemptyv: '\u29B3',
            rang: '\u27E9',
            Rang: '\u27EB',
            rangd: '\u2992',
            range: '\u29A5',
            rangle: '\u27E9',
            raquo: '\xBB',
            rarrap: '\u2975',
            rarrb: '\u21E5',
            rarrbfs: '\u2920',
            rarrc: '\u2933',
            rarr: '\u2192',
            Rarr: '\u21A0',
            rArr: '\u21D2',
            rarrfs: '\u291E',
            rarrhk: '\u21AA',
            rarrlp: '\u21AC',
            rarrpl: '\u2945',
            rarrsim: '\u2974',
            Rarrtl: '\u2916',
            rarrtl: '\u21A3',
            rarrw: '\u219D',
            ratail: '\u291A',
            rAtail: '\u291C',
            ratio: '\u2236',
            rationals: '\u211A',
            rbarr: '\u290D',
            rBarr: '\u290F',
            RBarr: '\u2910',
            rbbrk: '\u2773',
            rbrace: '}',
            rbrack: ']',
            rbrke: '\u298C',
            rbrksld: '\u298E',
            rbrkslu: '\u2990',
            Rcaron: '\u0158',
            rcaron: '\u0159',
            Rcedil: '\u0156',
            rcedil: '\u0157',
            rceil: '\u2309',
            rcub: '}',
            Rcy: '\u0420',
            rcy: '\u0440',
            rdca: '\u2937',
            rdldhar: '\u2969',
            rdquo: '\u201D',
            rdquor: '\u201D',
            rdsh: '\u21B3',
            real: '\u211C',
            realine: '\u211B',
            realpart: '\u211C',
            reals: '\u211D',
            Re: '\u211C',
            rect: '\u25AD',
            reg: '\xAE',
            REG: '\xAE',
            ReverseElement: '\u220B',
            ReverseEquilibrium: '\u21CB',
            ReverseUpEquilibrium: '\u296F',
            rfisht: '\u297D',
            rfloor: '\u230B',
            rfr: '\u{1D52F}',
            Rfr: '\u211C',
            rHar: '\u2964',
            rhard: '\u21C1',
            rharu: '\u21C0',
            rharul: '\u296C',
            Rho: '\u03A1',
            rho: '\u03C1',
            rhov: '\u03F1',
            RightAngleBracket: '\u27E9',
            RightArrowBar: '\u21E5',
            rightarrow: '\u2192',
            RightArrow: '\u2192',
            Rightarrow: '\u21D2',
            RightArrowLeftArrow: '\u21C4',
            rightarrowtail: '\u21A3',
            RightCeiling: '\u2309',
            RightDoubleBracket: '\u27E7',
            RightDownTeeVector: '\u295D',
            RightDownVectorBar: '\u2955',
            RightDownVector: '\u21C2',
            RightFloor: '\u230B',
            rightharpoondown: '\u21C1',
            rightharpoonup: '\u21C0',
            rightleftarrows: '\u21C4',
            rightleftharpoons: '\u21CC',
            rightrightarrows: '\u21C9',
            rightsquigarrow: '\u219D',
            RightTeeArrow: '\u21A6',
            RightTee: '\u22A2',
            RightTeeVector: '\u295B',
            rightthreetimes: '\u22CC',
            RightTriangleBar: '\u29D0',
            RightTriangle: '\u22B3',
            RightTriangleEqual: '\u22B5',
            RightUpDownVector: '\u294F',
            RightUpTeeVector: '\u295C',
            RightUpVectorBar: '\u2954',
            RightUpVector: '\u21BE',
            RightVectorBar: '\u2953',
            RightVector: '\u21C0',
            ring: '\u02DA',
            risingdotseq: '\u2253',
            rlarr: '\u21C4',
            rlhar: '\u21CC',
            rlm: '\u200F',
            rmoustache: '\u23B1',
            rmoust: '\u23B1',
            rnmid: '\u2AEE',
            roang: '\u27ED',
            roarr: '\u21FE',
            robrk: '\u27E7',
            ropar: '\u2986',
            ropf: '\u{1D563}',
            Ropf: '\u211D',
            roplus: '\u2A2E',
            rotimes: '\u2A35',
            RoundImplies: '\u2970',
            rpar: ')',
            rpargt: '\u2994',
            rppolint: '\u2A12',
            rrarr: '\u21C9',
            Rrightarrow: '\u21DB',
            rsaquo: '\u203A',
            rscr: '\u{1D4C7}',
            Rscr: '\u211B',
            rsh: '\u21B1',
            Rsh: '\u21B1',
            rsqb: ']',
            rsquo: '\u2019',
            rsquor: '\u2019',
            rthree: '\u22CC',
            rtimes: '\u22CA',
            rtri: '\u25B9',
            rtrie: '\u22B5',
            rtrif: '\u25B8',
            rtriltri: '\u29CE',
            RuleDelayed: '\u29F4',
            ruluhar: '\u2968',
            rx: '\u211E',
            Sacute: '\u015A',
            sacute: '\u015B',
            sbquo: '\u201A',
            scap: '\u2AB8',
            Scaron: '\u0160',
            scaron: '\u0161',
            Sc: '\u2ABC',
            sc: '\u227B',
            sccue: '\u227D',
            sce: '\u2AB0',
            scE: '\u2AB4',
            Scedil: '\u015E',
            scedil: '\u015F',
            Scirc: '\u015C',
            scirc: '\u015D',
            scnap: '\u2ABA',
            scnE: '\u2AB6',
            scnsim: '\u22E9',
            scpolint: '\u2A13',
            scsim: '\u227F',
            Scy: '\u0421',
            scy: '\u0441',
            sdotb: '\u22A1',
            sdot: '\u22C5',
            sdote: '\u2A66',
            searhk: '\u2925',
            searr: '\u2198',
            seArr: '\u21D8',
            searrow: '\u2198',
            sect: '\xA7',
            semi: ';',
            seswar: '\u2929',
            setminus: '\u2216',
            setmn: '\u2216',
            sext: '\u2736',
            Sfr: '\u{1D516}',
            sfr: '\u{1D530}',
            sfrown: '\u2322',
            sharp: '\u266F',
            SHCHcy: '\u0429',
            shchcy: '\u0449',
            SHcy: '\u0428',
            shcy: '\u0448',
            ShortDownArrow: '\u2193',
            ShortLeftArrow: '\u2190',
            shortmid: '\u2223',
            shortparallel: '\u2225',
            ShortRightArrow: '\u2192',
            ShortUpArrow: '\u2191',
            shy: '\xAD',
            Sigma: '\u03A3',
            sigma: '\u03C3',
            sigmaf: '\u03C2',
            sigmav: '\u03C2',
            sim: '\u223C',
            simdot: '\u2A6A',
            sime: '\u2243',
            simeq: '\u2243',
            simg: '\u2A9E',
            simgE: '\u2AA0',
            siml: '\u2A9D',
            simlE: '\u2A9F',
            simne: '\u2246',
            simplus: '\u2A24',
            simrarr: '\u2972',
            slarr: '\u2190',
            SmallCircle: '\u2218',
            smallsetminus: '\u2216',
            smashp: '\u2A33',
            smeparsl: '\u29E4',
            smid: '\u2223',
            smile: '\u2323',
            smt: '\u2AAA',
            smte: '\u2AAC',
            smtes: '\u2AAC\uFE00',
            SOFTcy: '\u042C',
            softcy: '\u044C',
            solbar: '\u233F',
            solb: '\u29C4',
            sol: '/',
            Sopf: '\u{1D54A}',
            sopf: '\u{1D564}',
            spades: '\u2660',
            spadesuit: '\u2660',
            spar: '\u2225',
            sqcap: '\u2293',
            sqcaps: '\u2293\uFE00',
            sqcup: '\u2294',
            sqcups: '\u2294\uFE00',
            Sqrt: '\u221A',
            sqsub: '\u228F',
            sqsube: '\u2291',
            sqsubset: '\u228F',
            sqsubseteq: '\u2291',
            sqsup: '\u2290',
            sqsupe: '\u2292',
            sqsupset: '\u2290',
            sqsupseteq: '\u2292',
            square: '\u25A1',
            Square: '\u25A1',
            SquareIntersection: '\u2293',
            SquareSubset: '\u228F',
            SquareSubsetEqual: '\u2291',
            SquareSuperset: '\u2290',
            SquareSupersetEqual: '\u2292',
            SquareUnion: '\u2294',
            squarf: '\u25AA',
            squ: '\u25A1',
            squf: '\u25AA',
            srarr: '\u2192',
            Sscr: '\u{1D4AE}',
            sscr: '\u{1D4C8}',
            ssetmn: '\u2216',
            ssmile: '\u2323',
            sstarf: '\u22C6',
            Star: '\u22C6',
            star: '\u2606',
            starf: '\u2605',
            straightepsilon: '\u03F5',
            straightphi: '\u03D5',
            strns: '\xAF',
            sub: '\u2282',
            Sub: '\u22D0',
            subdot: '\u2ABD',
            subE: '\u2AC5',
            sube: '\u2286',
            subedot: '\u2AC3',
            submult: '\u2AC1',
            subnE: '\u2ACB',
            subne: '\u228A',
            subplus: '\u2ABF',
            subrarr: '\u2979',
            subset: '\u2282',
            Subset: '\u22D0',
            subseteq: '\u2286',
            subseteqq: '\u2AC5',
            SubsetEqual: '\u2286',
            subsetneq: '\u228A',
            subsetneqq: '\u2ACB',
            subsim: '\u2AC7',
            subsub: '\u2AD5',
            subsup: '\u2AD3',
            succapprox: '\u2AB8',
            succ: '\u227B',
            succcurlyeq: '\u227D',
            Succeeds: '\u227B',
            SucceedsEqual: '\u2AB0',
            SucceedsSlantEqual: '\u227D',
            SucceedsTilde: '\u227F',
            succeq: '\u2AB0',
            succnapprox: '\u2ABA',
            succneqq: '\u2AB6',
            succnsim: '\u22E9',
            succsim: '\u227F',
            SuchThat: '\u220B',
            sum: '\u2211',
            Sum: '\u2211',
            sung: '\u266A',
            sup1: '\xB9',
            sup2: '\xB2',
            sup3: '\xB3',
            sup: '\u2283',
            Sup: '\u22D1',
            supdot: '\u2ABE',
            supdsub: '\u2AD8',
            supE: '\u2AC6',
            supe: '\u2287',
            supedot: '\u2AC4',
            Superset: '\u2283',
            SupersetEqual: '\u2287',
            suphsol: '\u27C9',
            suphsub: '\u2AD7',
            suplarr: '\u297B',
            supmult: '\u2AC2',
            supnE: '\u2ACC',
            supne: '\u228B',
            supplus: '\u2AC0',
            supset: '\u2283',
            Supset: '\u22D1',
            supseteq: '\u2287',
            supseteqq: '\u2AC6',
            supsetneq: '\u228B',
            supsetneqq: '\u2ACC',
            supsim: '\u2AC8',
            supsub: '\u2AD4',
            supsup: '\u2AD6',
            swarhk: '\u2926',
            swarr: '\u2199',
            swArr: '\u21D9',
            swarrow: '\u2199',
            swnwar: '\u292A',
            szlig: '\xDF',
            Tab: '	',
            target: '\u2316',
            Tau: '\u03A4',
            tau: '\u03C4',
            tbrk: '\u23B4',
            Tcaron: '\u0164',
            tcaron: '\u0165',
            Tcedil: '\u0162',
            tcedil: '\u0163',
            Tcy: '\u0422',
            tcy: '\u0442',
            tdot: '\u20DB',
            telrec: '\u2315',
            Tfr: '\u{1D517}',
            tfr: '\u{1D531}',
            there4: '\u2234',
            therefore: '\u2234',
            Therefore: '\u2234',
            Theta: '\u0398',
            theta: '\u03B8',
            thetasym: '\u03D1',
            thetav: '\u03D1',
            thickapprox: '\u2248',
            thicksim: '\u223C',
            ThickSpace: '\u205F\u200A',
            ThinSpace: '\u2009',
            thinsp: '\u2009',
            thkap: '\u2248',
            thksim: '\u223C',
            THORN: '\xDE',
            thorn: '\xFE',
            tilde: '\u02DC',
            Tilde: '\u223C',
            TildeEqual: '\u2243',
            TildeFullEqual: '\u2245',
            TildeTilde: '\u2248',
            timesbar: '\u2A31',
            timesb: '\u22A0',
            times: '\xD7',
            timesd: '\u2A30',
            tint: '\u222D',
            toea: '\u2928',
            topbot: '\u2336',
            topcir: '\u2AF1',
            top: '\u22A4',
            Topf: '\u{1D54B}',
            topf: '\u{1D565}',
            topfork: '\u2ADA',
            tosa: '\u2929',
            tprime: '\u2034',
            trade: '\u2122',
            TRADE: '\u2122',
            triangle: '\u25B5',
            triangledown: '\u25BF',
            triangleleft: '\u25C3',
            trianglelefteq: '\u22B4',
            triangleq: '\u225C',
            triangleright: '\u25B9',
            trianglerighteq: '\u22B5',
            tridot: '\u25EC',
            trie: '\u225C',
            triminus: '\u2A3A',
            TripleDot: '\u20DB',
            triplus: '\u2A39',
            trisb: '\u29CD',
            tritime: '\u2A3B',
            trpezium: '\u23E2',
            Tscr: '\u{1D4AF}',
            tscr: '\u{1D4C9}',
            TScy: '\u0426',
            tscy: '\u0446',
            TSHcy: '\u040B',
            tshcy: '\u045B',
            Tstrok: '\u0166',
            tstrok: '\u0167',
            twixt: '\u226C',
            twoheadleftarrow: '\u219E',
            twoheadrightarrow: '\u21A0',
            Uacute: '\xDA',
            uacute: '\xFA',
            uarr: '\u2191',
            Uarr: '\u219F',
            uArr: '\u21D1',
            Uarrocir: '\u2949',
            Ubrcy: '\u040E',
            ubrcy: '\u045E',
            Ubreve: '\u016C',
            ubreve: '\u016D',
            Ucirc: '\xDB',
            ucirc: '\xFB',
            Ucy: '\u0423',
            ucy: '\u0443',
            udarr: '\u21C5',
            Udblac: '\u0170',
            udblac: '\u0171',
            udhar: '\u296E',
            ufisht: '\u297E',
            Ufr: '\u{1D518}',
            ufr: '\u{1D532}',
            Ugrave: '\xD9',
            ugrave: '\xF9',
            uHar: '\u2963',
            uharl: '\u21BF',
            uharr: '\u21BE',
            uhblk: '\u2580',
            ulcorn: '\u231C',
            ulcorner: '\u231C',
            ulcrop: '\u230F',
            ultri: '\u25F8',
            Umacr: '\u016A',
            umacr: '\u016B',
            uml: '\xA8',
            UnderBar: '_',
            UnderBrace: '\u23DF',
            UnderBracket: '\u23B5',
            UnderParenthesis: '\u23DD',
            Union: '\u22C3',
            UnionPlus: '\u228E',
            Uogon: '\u0172',
            uogon: '\u0173',
            Uopf: '\u{1D54C}',
            uopf: '\u{1D566}',
            UpArrowBar: '\u2912',
            uparrow: '\u2191',
            UpArrow: '\u2191',
            Uparrow: '\u21D1',
            UpArrowDownArrow: '\u21C5',
            updownarrow: '\u2195',
            UpDownArrow: '\u2195',
            Updownarrow: '\u21D5',
            UpEquilibrium: '\u296E',
            upharpoonleft: '\u21BF',
            upharpoonright: '\u21BE',
            uplus: '\u228E',
            UpperLeftArrow: '\u2196',
            UpperRightArrow: '\u2197',
            upsi: '\u03C5',
            Upsi: '\u03D2',
            upsih: '\u03D2',
            Upsilon: '\u03A5',
            upsilon: '\u03C5',
            UpTeeArrow: '\u21A5',
            UpTee: '\u22A5',
            upuparrows: '\u21C8',
            urcorn: '\u231D',
            urcorner: '\u231D',
            urcrop: '\u230E',
            Uring: '\u016E',
            uring: '\u016F',
            urtri: '\u25F9',
            Uscr: '\u{1D4B0}',
            uscr: '\u{1D4CA}',
            utdot: '\u22F0',
            Utilde: '\u0168',
            utilde: '\u0169',
            utri: '\u25B5',
            utrif: '\u25B4',
            uuarr: '\u21C8',
            Uuml: '\xDC',
            uuml: '\xFC',
            uwangle: '\u29A7',
            vangrt: '\u299C',
            varepsilon: '\u03F5',
            varkappa: '\u03F0',
            varnothing: '\u2205',
            varphi: '\u03D5',
            varpi: '\u03D6',
            varpropto: '\u221D',
            varr: '\u2195',
            vArr: '\u21D5',
            varrho: '\u03F1',
            varsigma: '\u03C2',
            varsubsetneq: '\u228A\uFE00',
            varsubsetneqq: '\u2ACB\uFE00',
            varsupsetneq: '\u228B\uFE00',
            varsupsetneqq: '\u2ACC\uFE00',
            vartheta: '\u03D1',
            vartriangleleft: '\u22B2',
            vartriangleright: '\u22B3',
            vBar: '\u2AE8',
            Vbar: '\u2AEB',
            vBarv: '\u2AE9',
            Vcy: '\u0412',
            vcy: '\u0432',
            vdash: '\u22A2',
            vDash: '\u22A8',
            Vdash: '\u22A9',
            VDash: '\u22AB',
            Vdashl: '\u2AE6',
            veebar: '\u22BB',
            vee: '\u2228',
            Vee: '\u22C1',
            veeeq: '\u225A',
            vellip: '\u22EE',
            verbar: '|',
            Verbar: '\u2016',
            vert: '|',
            Vert: '\u2016',
            VerticalBar: '\u2223',
            VerticalLine: '|',
            VerticalSeparator: '\u2758',
            VerticalTilde: '\u2240',
            VeryThinSpace: '\u200A',
            Vfr: '\u{1D519}',
            vfr: '\u{1D533}',
            vltri: '\u22B2',
            vnsub: '\u2282\u20D2',
            vnsup: '\u2283\u20D2',
            Vopf: '\u{1D54D}',
            vopf: '\u{1D567}',
            vprop: '\u221D',
            vrtri: '\u22B3',
            Vscr: '\u{1D4B1}',
            vscr: '\u{1D4CB}',
            vsubnE: '\u2ACB\uFE00',
            vsubne: '\u228A\uFE00',
            vsupnE: '\u2ACC\uFE00',
            vsupne: '\u228B\uFE00',
            Vvdash: '\u22AA',
            vzigzag: '\u299A',
            Wcirc: '\u0174',
            wcirc: '\u0175',
            wedbar: '\u2A5F',
            wedge: '\u2227',
            Wedge: '\u22C0',
            wedgeq: '\u2259',
            weierp: '\u2118',
            Wfr: '\u{1D51A}',
            wfr: '\u{1D534}',
            Wopf: '\u{1D54E}',
            wopf: '\u{1D568}',
            wp: '\u2118',
            wr: '\u2240',
            wreath: '\u2240',
            Wscr: '\u{1D4B2}',
            wscr: '\u{1D4CC}',
            xcap: '\u22C2',
            xcirc: '\u25EF',
            xcup: '\u22C3',
            xdtri: '\u25BD',
            Xfr: '\u{1D51B}',
            xfr: '\u{1D535}',
            xharr: '\u27F7',
            xhArr: '\u27FA',
            Xi: '\u039E',
            xi: '\u03BE',
            xlarr: '\u27F5',
            xlArr: '\u27F8',
            xmap: '\u27FC',
            xnis: '\u22FB',
            xodot: '\u2A00',
            Xopf: '\u{1D54F}',
            xopf: '\u{1D569}',
            xoplus: '\u2A01',
            xotime: '\u2A02',
            xrarr: '\u27F6',
            xrArr: '\u27F9',
            Xscr: '\u{1D4B3}',
            xscr: '\u{1D4CD}',
            xsqcup: '\u2A06',
            xuplus: '\u2A04',
            xutri: '\u25B3',
            xvee: '\u22C1',
            xwedge: '\u22C0',
            Yacute: '\xDD',
            yacute: '\xFD',
            YAcy: '\u042F',
            yacy: '\u044F',
            Ycirc: '\u0176',
            ycirc: '\u0177',
            Ycy: '\u042B',
            ycy: '\u044B',
            yen: '\xA5',
            Yfr: '\u{1D51C}',
            yfr: '\u{1D536}',
            YIcy: '\u0407',
            yicy: '\u0457',
            Yopf: '\u{1D550}',
            yopf: '\u{1D56A}',
            Yscr: '\u{1D4B4}',
            yscr: '\u{1D4CE}',
            YUcy: '\u042E',
            yucy: '\u044E',
            yuml: '\xFF',
            Yuml: '\u0178',
            Zacute: '\u0179',
            zacute: '\u017A',
            Zcaron: '\u017D',
            zcaron: '\u017E',
            Zcy: '\u0417',
            zcy: '\u0437',
            Zdot: '\u017B',
            zdot: '\u017C',
            zeetrf: '\u2128',
            ZeroWidthSpace: '\u200B',
            Zeta: '\u0396',
            zeta: '\u03B6',
            zfr: '\u{1D537}',
            Zfr: '\u2128',
            ZHcy: '\u0416',
            zhcy: '\u0436',
            zigrarr: '\u21DD',
            zopf: '\u{1D56B}',
            Zopf: '\u2124',
            Zscr: '\u{1D4B5}',
            zscr: '\u{1D4CF}',
            zwj: '\u200D',
            zwnj: '\u200C',
          }
        },
      }),
      H1 = he({
        '../../node_modules/ansi-to-html/node_modules/entities/lib/maps/legacy.json'(
          e,
          t
        ) {
          t.exports = {
            Aacute: '\xC1',
            aacute: '\xE1',
            Acirc: '\xC2',
            acirc: '\xE2',
            acute: '\xB4',
            AElig: '\xC6',
            aelig: '\xE6',
            Agrave: '\xC0',
            agrave: '\xE0',
            amp: '&',
            AMP: '&',
            Aring: '\xC5',
            aring: '\xE5',
            Atilde: '\xC3',
            atilde: '\xE3',
            Auml: '\xC4',
            auml: '\xE4',
            brvbar: '\xA6',
            Ccedil: '\xC7',
            ccedil: '\xE7',
            cedil: '\xB8',
            cent: '\xA2',
            copy: '\xA9',
            COPY: '\xA9',
            curren: '\xA4',
            deg: '\xB0',
            divide: '\xF7',
            Eacute: '\xC9',
            eacute: '\xE9',
            Ecirc: '\xCA',
            ecirc: '\xEA',
            Egrave: '\xC8',
            egrave: '\xE8',
            ETH: '\xD0',
            eth: '\xF0',
            Euml: '\xCB',
            euml: '\xEB',
            frac12: '\xBD',
            frac14: '\xBC',
            frac34: '\xBE',
            gt: '>',
            GT: '>',
            Iacute: '\xCD',
            iacute: '\xED',
            Icirc: '\xCE',
            icirc: '\xEE',
            iexcl: '\xA1',
            Igrave: '\xCC',
            igrave: '\xEC',
            iquest: '\xBF',
            Iuml: '\xCF',
            iuml: '\xEF',
            laquo: '\xAB',
            lt: '<',
            LT: '<',
            macr: '\xAF',
            micro: '\xB5',
            middot: '\xB7',
            nbsp: '\xA0',
            not: '\xAC',
            Ntilde: '\xD1',
            ntilde: '\xF1',
            Oacute: '\xD3',
            oacute: '\xF3',
            Ocirc: '\xD4',
            ocirc: '\xF4',
            Ograve: '\xD2',
            ograve: '\xF2',
            ordf: '\xAA',
            ordm: '\xBA',
            Oslash: '\xD8',
            oslash: '\xF8',
            Otilde: '\xD5',
            otilde: '\xF5',
            Ouml: '\xD6',
            ouml: '\xF6',
            para: '\xB6',
            plusmn: '\xB1',
            pound: '\xA3',
            quot: '"',
            QUOT: '"',
            raquo: '\xBB',
            reg: '\xAE',
            REG: '\xAE',
            sect: '\xA7',
            shy: '\xAD',
            sup1: '\xB9',
            sup2: '\xB2',
            sup3: '\xB3',
            szlig: '\xDF',
            THORN: '\xDE',
            thorn: '\xFE',
            times: '\xD7',
            Uacute: '\xDA',
            uacute: '\xFA',
            Ucirc: '\xDB',
            ucirc: '\xFB',
            Ugrave: '\xD9',
            ugrave: '\xF9',
            uml: '\xA8',
            Uuml: '\xDC',
            uuml: '\xFC',
            Yacute: '\xDD',
            yacute: '\xFD',
            yen: '\xA5',
            yuml: '\xFF',
          }
        },
      }),
      e2 = he({
        '../../node_modules/ansi-to-html/node_modules/entities/lib/maps/xml.json'(
          e,
          t
        ) {
          t.exports = { amp: '&', apos: "'", gt: '>', lt: '<', quot: '"' }
        },
      }),
      V1 = he({
        '../../node_modules/ansi-to-html/node_modules/entities/lib/maps/decode.json'(
          e,
          t
        ) {
          t.exports = {
            0: 65533,
            128: 8364,
            130: 8218,
            131: 402,
            132: 8222,
            133: 8230,
            134: 8224,
            135: 8225,
            136: 710,
            137: 8240,
            138: 352,
            139: 8249,
            140: 338,
            142: 381,
            145: 8216,
            146: 8217,
            147: 8220,
            148: 8221,
            149: 8226,
            150: 8211,
            151: 8212,
            152: 732,
            153: 8482,
            154: 353,
            155: 8250,
            156: 339,
            158: 382,
            159: 376,
          }
        },
      }),
      W1 = he({
        '../../node_modules/ansi-to-html/node_modules/entities/lib/decode_codepoint.js'(
          e
        ) {
          const t =
            (e && e.__importDefault) ||
            function (i) {
              return i && i.__esModule ? i : { default: i }
            }
          Object.defineProperty(e, '__esModule', { value: !0 })
          const r = t(V1()),
            n =
              String.fromCodePoint ||
              function (i) {
                let a = ''
                return (
                  i > 65535 &&
                    ((i -= 65536),
                    (a += String.fromCharCode(((i >>> 10) & 1023) | 55296)),
                    (i = 56320 | (i & 1023))),
                  (a += String.fromCharCode(i)),
                  a
                )
              }
          function o(i) {
            return (i >= 55296 && i <= 57343) || i > 1114111
              ? '\uFFFD'
              : (i in r.default && (i = r.default[i]), n(i))
          }
          e.default = o
        },
      }),
      Bf = he({
        '../../node_modules/ansi-to-html/node_modules/entities/lib/decode.js'(
          e
        ) {
          const t =
            (e && e.__importDefault) ||
            function (c) {
              return c && c.__esModule ? c : { default: c }
            }
          ;(Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.decodeHTML = e.decodeHTMLStrict = e.decodeXML = void 0))
          const r = t(Qf()),
            n = t(H1()),
            o = t(e2()),
            i = t(W1()),
            a = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g
          ;((e.decodeXML = u(o.default)), (e.decodeHTMLStrict = u(r.default)))
          function u(c) {
            const p = l(c)
            return function (g) {
              return String(g).replace(a, p)
            }
          }
          const s = function (c, p) {
            return c < p ? 1 : -1
          }
          e.decodeHTML = (function () {
            for (
              var c = Object.keys(n.default).sort(s),
                p = Object.keys(r.default).sort(s),
                g = 0,
                m = 0;
              g < p.length;
              g++
            )
              c[m] === p[g] ? ((p[g] += ';?'), m++) : (p[g] += ';')
            const A = new RegExp(
                `&(?:${p.join('|')}|#[xX][\\da-fA-F]+;?|#\\d+;?)`,
                'g'
              ),
              b = l(r.default)
            function E(x) {
              return (x.substr(-1) !== ';' && (x += ';'), b(x))
            }
            return function (x) {
              return String(x).replace(A, E)
            }
          })()
          function l(c) {
            return function (p) {
              if (p.charAt(1) === '#') {
                const g = p.charAt(2)
                return g === 'X' || g === 'x'
                  ? i.default(parseInt(p.substr(3), 16))
                  : i.default(parseInt(p.substr(2), 10))
              }
              return c[p.slice(1, -1)] || p
            }
          }
        },
      }),
      Pf = he({
        '../../node_modules/ansi-to-html/node_modules/entities/lib/encode.js'(
          e
        ) {
          const t =
            (e && e.__importDefault) ||
            function (C) {
              return C && C.__esModule ? C : { default: C }
            }
          ;(Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.escapeUTF8 =
              e.escape =
              e.encodeNonAsciiHTML =
              e.encodeHTML =
              e.encodeXML =
                void 0))
          const r = t(e2()),
            n = s(r.default),
            o = l(n)
          e.encodeXML = x(n)
          const i = t(Qf()),
            a = s(i.default),
            u = l(a)
          ;((e.encodeHTML = m(a, u)), (e.encodeNonAsciiHTML = x(a)))
          function s(C) {
            return Object.keys(C)
              .sort()
              .reduce(function (_, D) {
                return ((_[C[D]] = `&${D};`), _)
              }, {})
          }
          function l(C) {
            for (
              var _ = [], D = [], I = 0, T = Object.keys(C);
              I < T.length;
              I++
            ) {
              const S = T[I]
              S.length === 1 ? _.push(`\\${S}`) : D.push(S)
            }
            _.sort()
            for (let O = 0; O < _.length - 1; O++) {
              for (
                var F = O;
                F < _.length - 1 &&
                _[F].charCodeAt(1) + 1 === _[F + 1].charCodeAt(1);

              )
                F += 1
              const $ = 1 + F - O
              $ < 3 || _.splice(O, $, `${_[O]}-${_[F]}`)
            }
            return (D.unshift(`[${_.join('')}]`), new RegExp(D.join('|'), 'g'))
          }
          const c =
              /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
            p =
              String.prototype.codePointAt != null
                ? function (C) {
                    return C.codePointAt(0)
                  }
                : function (C) {
                    return (
                      (C.charCodeAt(0) - 55296) * 1024 +
                      C.charCodeAt(1) -
                      56320 +
                      65536
                    )
                  }
          function g(C) {
            return `&#x${(C.length > 1 ? p(C) : C.charCodeAt(0)).toString(16).toUpperCase()};`
          }
          function m(C, _) {
            return function (D) {
              return D.replace(_, function (I) {
                return C[I]
              }).replace(c, g)
            }
          }
          const A = new RegExp(`${o.source}|${c.source}`, 'g')
          function b(C) {
            return C.replace(A, g)
          }
          e.escape = b
          function E(C) {
            return C.replace(o, g)
          }
          e.escapeUTF8 = E
          function x(C) {
            return function (_) {
              return _.replace(A, function (D) {
                return C[D] || g(D)
              })
            }
          }
        },
      }),
      G1 = he({
        '../../node_modules/ansi-to-html/node_modules/entities/lib/index.js'(
          e
        ) {
          ;(Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.decodeXMLStrict =
              e.decodeHTML5Strict =
              e.decodeHTML4Strict =
              e.decodeHTML5 =
              e.decodeHTML4 =
              e.decodeHTMLStrict =
              e.decodeHTML =
              e.decodeXML =
              e.encodeHTML5 =
              e.encodeHTML4 =
              e.escapeUTF8 =
              e.escape =
              e.encodeNonAsciiHTML =
              e.encodeHTML =
              e.encodeXML =
              e.encode =
              e.decodeStrict =
              e.decode =
                void 0))
          const t = Bf(),
            r = Pf()
          function n(s, l) {
            return (!l || l <= 0 ? t.decodeXML : t.decodeHTML)(s)
          }
          e.decode = n
          function o(s, l) {
            return (!l || l <= 0 ? t.decodeXML : t.decodeHTMLStrict)(s)
          }
          e.decodeStrict = o
          function i(s, l) {
            return (!l || l <= 0 ? r.encodeXML : r.encodeHTML)(s)
          }
          e.encode = i
          const a = Pf()
          ;(Object.defineProperty(e, 'encodeXML', {
            enumerable: !0,
            get() {
              return a.encodeXML
            },
          }),
            Object.defineProperty(e, 'encodeHTML', {
              enumerable: !0,
              get() {
                return a.encodeHTML
              },
            }),
            Object.defineProperty(e, 'encodeNonAsciiHTML', {
              enumerable: !0,
              get() {
                return a.encodeNonAsciiHTML
              },
            }),
            Object.defineProperty(e, 'escape', {
              enumerable: !0,
              get() {
                return a.escape
              },
            }),
            Object.defineProperty(e, 'escapeUTF8', {
              enumerable: !0,
              get() {
                return a.escapeUTF8
              },
            }),
            Object.defineProperty(e, 'encodeHTML4', {
              enumerable: !0,
              get() {
                return a.encodeHTML
              },
            }),
            Object.defineProperty(e, 'encodeHTML5', {
              enumerable: !0,
              get() {
                return a.encodeHTML
              },
            }))
          const u = Bf()
          ;(Object.defineProperty(e, 'decodeXML', {
            enumerable: !0,
            get() {
              return u.decodeXML
            },
          }),
            Object.defineProperty(e, 'decodeHTML', {
              enumerable: !0,
              get() {
                return u.decodeHTML
              },
            }),
            Object.defineProperty(e, 'decodeHTMLStrict', {
              enumerable: !0,
              get() {
                return u.decodeHTMLStrict
              },
            }),
            Object.defineProperty(e, 'decodeHTML4', {
              enumerable: !0,
              get() {
                return u.decodeHTML
              },
            }),
            Object.defineProperty(e, 'decodeHTML5', {
              enumerable: !0,
              get() {
                return u.decodeHTML
              },
            }),
            Object.defineProperty(e, 'decodeHTML4Strict', {
              enumerable: !0,
              get() {
                return u.decodeHTMLStrict
              },
            }),
            Object.defineProperty(e, 'decodeHTML5Strict', {
              enumerable: !0,
              get() {
                return u.decodeHTMLStrict
              },
            }),
            Object.defineProperty(e, 'decodeXMLStrict', {
              enumerable: !0,
              get() {
                return u.decodeXML
              },
            }))
        },
      }),
      Y1 = he({
        '../../node_modules/ansi-to-html/lib/ansi_to_html.js'(e, t) {
          function r(h, f) {
            if (!(h instanceof f))
              throw new TypeError('Cannot call a class as a function')
          }
          function n(h, f) {
            for (let v = 0; v < f.length; v++) {
              const B = f[v]
              ;((B.enumerable = B.enumerable || !1),
                (B.configurable = !0),
                'value' in B && (B.writable = !0),
                Object.defineProperty(h, B.key, B))
            }
          }
          function o(h, f, v) {
            return (f && n(h.prototype, f), v && n(h, v), h)
          }
          function i(h, f) {
            let v =
              (typeof Symbol < 'u' && h[Symbol.iterator]) || h['@@iterator']
            if (!v) {
              if (
                Array.isArray(h) ||
                (v = a(h)) ||
                (f && h && typeof h.length === 'number')
              ) {
                v && (h = v)
                let B = 0,
                  R = function () {}
                return {
                  s: R,
                  n() {
                    return B >= h.length
                      ? { done: !0 }
                      : { done: !1, value: h[B++] }
                  },
                  e(z) {
                    throw z
                  },
                  f: R,
                }
              }
              throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
            }
            let L = !0,
              N = !1,
              M
            return {
              s() {
                v = v.call(h)
              },
              n() {
                const z = v.next()
                return ((L = z.done), z)
              },
              e(z) {
                ;((N = !0), (M = z))
              },
              f() {
                try {
                  !L && v.return != null && v.return()
                } finally {
                  if (N) throw M
                }
              },
            }
          }
          function a(h, f) {
            if (h) {
              if (typeof h === 'string') return u(h, f)
              let v = Object.prototype.toString.call(h).slice(8, -1)
              if (
                (v === 'Object' && h.constructor && (v = h.constructor.name),
                v === 'Map' || v === 'Set')
              )
                return Array.from(h)
              if (
                v === 'Arguments' ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v)
              )
                return u(h, f)
            }
          }
          function u(h, f) {
            ;(f == null || f > h.length) && (f = h.length)
            for (var v = 0, B = new Array(f); v < f; v++) B[v] = h[v]
            return B
          }
          const s = G1(),
            l = {
              fg: '#FFF',
              bg: '#000',
              newline: !1,
              escapeXML: !1,
              stream: !1,
              colors: c(),
            }
          function c() {
            const h = {
              0: '#000',
              1: '#A00',
              2: '#0A0',
              3: '#A50',
              4: '#00A',
              5: '#A0A',
              6: '#0AA',
              7: '#AAA',
              8: '#555',
              9: '#F55',
              10: '#5F5',
              11: '#FF5',
              12: '#55F',
              13: '#F5F',
              14: '#5FF',
              15: '#FFF',
            }
            return (
              C(0, 5).forEach(function (f) {
                C(0, 5).forEach(function (v) {
                  C(0, 5).forEach(function (B) {
                    return p(f, v, B, h)
                  })
                })
              }),
              C(0, 23).forEach(function (f) {
                const v = f + 232,
                  B = g(f * 10 + 8)
                h[v] = `#${B}${B}${B}`
              }),
              h
            )
          }
          function p(h, f, v, B) {
            const R = 16 + h * 36 + f * 6 + v,
              L = h > 0 ? h * 40 + 55 : 0,
              N = f > 0 ? f * 40 + 55 : 0,
              M = v > 0 ? v * 40 + 55 : 0
            B[R] = m([L, N, M])
          }
          function g(h) {
            for (var f = h.toString(16); f.length < 2; ) f = `0${f}`
            return f
          }
          function m(h) {
            let f = [],
              v = i(h),
              B
            try {
              for (v.s(); !(B = v.n()).done; ) {
                const R = B.value
                f.push(g(R))
              }
            } catch (L) {
              v.e(L)
            } finally {
              v.f()
            }
            return `#${f.join('')}`
          }
          function A(h, f, v, B) {
            let R
            return (
              f === 'text'
                ? (R = I(v, B))
                : f === 'display'
                  ? (R = E(h, v, B))
                  : f === 'xterm256Foreground'
                    ? (R = O(h, B.colors[v]))
                    : f === 'xterm256Background'
                      ? (R = F(h, B.colors[v]))
                      : f === 'rgb' && (R = b(h, v)),
              R
            )
          }
          function b(h, f) {
            f = f.substring(2).slice(0, -1)
            const v = +f.substr(0, 2),
              B = f.substring(5).split(';'),
              R = B.map(function (L) {
                return `0${Number(L).toString(16)}`.substr(-2)
              }).join('')
            return S(h, (v === 38 ? 'color:#' : 'background-color:#') + R)
          }
          function E(h, f, v) {
            f = parseInt(f, 10)
            let B = {
                '-1'() {
                  return '<br/>'
                },
                0() {
                  return h.length && x(h)
                },
                1() {
                  return T(h, 'b')
                },
                3() {
                  return T(h, 'i')
                },
                4() {
                  return T(h, 'u')
                },
                8() {
                  return S(h, 'display:none')
                },
                9() {
                  return T(h, 'strike')
                },
                22() {
                  return S(
                    h,
                    'font-weight:normal;text-decoration:none;font-style:normal'
                  )
                },
                23() {
                  return $(h, 'i')
                },
                24() {
                  return $(h, 'u')
                },
                39() {
                  return O(h, v.fg)
                },
                49() {
                  return F(h, v.bg)
                },
                53() {
                  return S(h, 'text-decoration:overline')
                },
              },
              R
            return (
              B[f]
                ? (R = B[f]())
                : 4 < f && f < 7
                  ? (R = T(h, 'blink'))
                  : 29 < f && f < 38
                    ? (R = O(h, v.colors[f - 30]))
                    : 39 < f && f < 48
                      ? (R = F(h, v.colors[f - 40]))
                      : 89 < f && f < 98
                        ? (R = O(h, v.colors[8 + (f - 90)]))
                        : 99 < f &&
                          f < 108 &&
                          (R = F(h, v.colors[8 + (f - 100)])),
              R
            )
          }
          function x(h) {
            const f = h.slice(0)
            return (
              (h.length = 0),
              f
                .reverse()
                .map(function (v) {
                  return `</${v}>`
                })
                .join('')
            )
          }
          function C(h, f) {
            for (var v = [], B = h; B <= f; B++) v.push(B)
            return v
          }
          function _(h) {
            return function (f) {
              return (h === null || f.category !== h) && h !== 'all'
            }
          }
          function D(h) {
            h = parseInt(h, 10)
            let f = null
            return (
              h === 0
                ? (f = 'all')
                : h === 1
                  ? (f = 'bold')
                  : 2 < h && h < 5
                    ? (f = 'underline')
                    : 4 < h && h < 7
                      ? (f = 'blink')
                      : h === 8
                        ? (f = 'hide')
                        : h === 9
                          ? (f = 'strike')
                          : (29 < h && h < 38) || h === 39 || (89 < h && h < 98)
                            ? (f = 'foreground-color')
                            : ((39 < h && h < 48) ||
                                h === 49 ||
                                (99 < h && h < 108)) &&
                              (f = 'background-color'),
              f
            )
          }
          function I(h, f) {
            return f.escapeXML ? s.encodeXML(h) : h
          }
          function T(h, f, v) {
            return (
              v || (v = ''),
              h.push(f),
              '<'.concat(f).concat(v ? ' style="'.concat(v, '"') : '', '>')
            )
          }
          function S(h, f) {
            return T(h, 'span', f)
          }
          function O(h, f) {
            return T(h, 'span', `color:${f}`)
          }
          function F(h, f) {
            return T(h, 'span', `background-color:${f}`)
          }
          function $(h, f) {
            let v
            if ((h.slice(-1)[0] === f && (v = h.pop()), v)) return `</${f}>`
          }
          function P(h, f, v) {
            let B = !1,
              R = 3
            function L() {
              return ''
            }
            function N(ae, re) {
              return (v('xterm256Foreground', re), '')
            }
            function M(ae, re) {
              return (v('xterm256Background', re), '')
            }
            function z(ae) {
              return (f.newline ? v('display', -1) : v('text', ae), '')
            }
            function Y(ae, re) {
              ;((B = !0),
                re.trim().length === 0 && (re = '0'),
                (re = re.trimRight(';').split(';')))
              let je = i(re),
                ar
              try {
                for (je.s(); !(ar = je.n()).done; ) {
                  const Wn = ar.value
                  v('display', Wn)
                }
              } catch (Gn) {
                je.e(Gn)
              } finally {
                je.f()
              }
              return ''
            }
            function X(ae) {
              return (v('text', ae), '')
            }
            function V(ae) {
              return (v('rgb', ae), '')
            }
            const J = [
              { pattern: /^\x08+/, sub: L },
              { pattern: /^\x1b\[[012]?K/, sub: L },
              { pattern: /^\x1b\[\(B/, sub: L },
              { pattern: /^\x1b\[[34]8;2;\d+;\d+;\d+m/, sub: V },
              { pattern: /^\x1b\[38;5;(\d+)m/, sub: N },
              { pattern: /^\x1b\[48;5;(\d+)m/, sub: M },
              { pattern: /^\n/, sub: z },
              { pattern: /^\r+\n/, sub: z },
              { pattern: /^\r/, sub: z },
              { pattern: /^\x1b\[((?:\d{1,3};?)+|)m/, sub: Y },
              { pattern: /^\x1b\[\d?J/, sub: L },
              { pattern: /^\x1b\[\d{0,3};\d{0,3}f/, sub: L },
              { pattern: /^\x1b\[?[\d;]{0,3}/, sub: L },
              { pattern: /^(([^\x1b\x08\r\n])+)/, sub: X },
            ]
            function W(ae, re) {
              ;(re > R && B) || ((B = !1), (h = h.replace(ae.pattern, ae.sub)))
            }
            let te = [],
              ye = h,
              me = ye.length
            e: for (; me > 0; ) {
              for (let Ce = 0, ct = 0, Pt = J.length; ct < Pt; Ce = ++ct) {
                const U = J[Ce]
                if ((W(U, Ce), h.length !== me)) {
                  me = h.length
                  continue e
                }
              }
              if (h.length === me) break
              ;(te.push(0), (me = h.length))
            }
            return te
          }
          function j(h, f, v) {
            return (
              f !== 'text' &&
                ((h = h.filter(_(D(v)))),
                h.push({ token: f, data: v, category: D(v) })),
              h
            )
          }
          const k = (function () {
            function h(f) {
              ;(r(this, h),
                (f = f || {}),
                f.colors && (f.colors = Object.assign({}, l.colors, f.colors)),
                (this.options = Object.assign({}, l, f)),
                (this.stack = []),
                (this.stickyStack = []))
            }
            return (
              o(h, [
                {
                  key: 'toHtml',
                  value(f) {
                    const v = this
                    f = typeof f === 'string' ? [f] : f
                    const B = this.stack,
                      R = this.options,
                      L = []
                    return (
                      this.stickyStack.forEach(function (N) {
                        const M = A(B, N.token, N.data, R)
                        M && L.push(M)
                      }),
                      P(f.join(''), R, function (N, M) {
                        const z = A(B, N, M, R)
                        ;(z && L.push(z),
                          R.stream && (v.stickyStack = j(v.stickyStack, N, M)))
                      }),
                      B.length && L.push(x(B)),
                      L.join('')
                    )
                  },
                },
              ]),
              h
            )
          })()
          t.exports = k
        },
      }),
      xa = he({
        '../../node_modules/@devtools-ds/object-inspector/node_modules/@babel/runtime/helpers/extends.js'(
          e,
          t
        ) {
          function r() {
            return (
              (t.exports = r =
                Object.assign ||
                function (n) {
                  for (let o = 1; o < arguments.length; o++) {
                    const i = arguments[o]
                    for (const a in i)
                      Object.prototype.hasOwnProperty.call(i, a) &&
                        (n[a] = i[a])
                  }
                  return n
                }),
              r.apply(this, arguments)
            )
          }
          t.exports = r
        },
      }),
      K1 = he({
        '../../node_modules/@devtools-ds/object-inspector/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js'(
          e,
          t
        ) {
          function r(n, o) {
            if (n == null) return {}
            let i = {},
              a = Object.keys(n),
              u,
              s
            for (s = 0; s < a.length; s++)
              ((u = a[s]), !(o.indexOf(u) >= 0) && (i[u] = n[u]))
            return i
          }
          t.exports = r
        },
      }),
      Da = he({
        '../../node_modules/@devtools-ds/object-inspector/node_modules/@babel/runtime/helpers/objectWithoutProperties.js'(
          e,
          t
        ) {
          const r = K1()
          function n(o, i) {
            if (o == null) return {}
            let a = r(o, i),
              u,
              s
            if (Object.getOwnPropertySymbols) {
              const l = Object.getOwnPropertySymbols(o)
              for (s = 0; s < l.length; s++)
                ((u = l[s]),
                  !(i.indexOf(u) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(o, u) &&
                    (a[u] = o[u]))
            }
            return a
          }
          t.exports = n
        },
      }),
      X1 = he({
        '../../node_modules/@devtools-ds/themes/node_modules/@babel/runtime/helpers/defineProperty.js'(
          e,
          t
        ) {
          function r(n, o, i) {
            return (
              o in n
                ? Object.defineProperty(n, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (n[o] = i),
              n
            )
          }
          t.exports = r
        },
      }),
      J1 = he({
        '../../node_modules/@devtools-ds/themes/node_modules/@babel/runtime/helpers/objectSpread2.js'(
          e,
          t
        ) {
          const r = X1()
          function n(i, a) {
            const u = Object.keys(i)
            if (Object.getOwnPropertySymbols) {
              let s = Object.getOwnPropertySymbols(i)
              ;(a &&
                (s = s.filter(function (l) {
                  return Object.getOwnPropertyDescriptor(i, l).enumerable
                })),
                u.push.apply(u, s))
            }
            return u
          }
          function o(i) {
            for (let a = 1; a < arguments.length; a++) {
              var u = arguments[a] != null ? arguments[a] : {}
              a % 2
                ? n(u, !0).forEach(function (s) {
                    r(i, s, u[s])
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      i,
                      Object.getOwnPropertyDescriptors(u)
                    )
                  : n(u).forEach(function (s) {
                      Object.defineProperty(
                        i,
                        s,
                        Object.getOwnPropertyDescriptor(u, s)
                      )
                    })
            }
            return i
          }
          t.exports = o
        },
      }),
      Z1 = he({
        '../../node_modules/@devtools-ds/themes/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js'(
          e,
          t
        ) {
          function r(n, o) {
            if (n == null) return {}
            let i = {},
              a = Object.keys(n),
              u,
              s
            for (s = 0; s < a.length; s++)
              ((u = a[s]), !(o.indexOf(u) >= 0) && (i[u] = n[u]))
            return i
          }
          t.exports = r
        },
      }),
      Q1 = he({
        '../../node_modules/@devtools-ds/themes/node_modules/@babel/runtime/helpers/objectWithoutProperties.js'(
          e,
          t
        ) {
          const r = Z1()
          function n(o, i) {
            if (o == null) return {}
            let a = r(o, i),
              u,
              s
            if (Object.getOwnPropertySymbols) {
              const l = Object.getOwnPropertySymbols(o)
              for (s = 0; s < l.length; s++)
                ((u = l[s]),
                  !(i.indexOf(u) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(o, u) &&
                    (a[u] = o[u]))
            }
            return a
          }
          t.exports = n
        },
      }),
      eb = he({
        '../../node_modules/@devtools-ds/object-inspector/node_modules/@babel/runtime/helpers/defineProperty.js'(
          e,
          t
        ) {
          function r(n, o, i) {
            return (
              o in n
                ? Object.defineProperty(n, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (n[o] = i),
              n
            )
          }
          t.exports = r
        },
      }),
      tb = he({
        '../../node_modules/@devtools-ds/object-inspector/node_modules/@babel/runtime/helpers/objectSpread2.js'(
          e,
          t
        ) {
          const r = eb()
          function n(i, a) {
            const u = Object.keys(i)
            if (Object.getOwnPropertySymbols) {
              let s = Object.getOwnPropertySymbols(i)
              ;(a &&
                (s = s.filter(function (l) {
                  return Object.getOwnPropertyDescriptor(i, l).enumerable
                })),
                u.push.apply(u, s))
            }
            return u
          }
          function o(i) {
            for (let a = 1; a < arguments.length; a++) {
              var u = arguments[a] != null ? arguments[a] : {}
              a % 2
                ? n(u, !0).forEach(function (s) {
                    r(i, s, u[s])
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      i,
                      Object.getOwnPropertyDescriptors(u)
                    )
                  : n(u).forEach(function (s) {
                      Object.defineProperty(
                        i,
                        s,
                        Object.getOwnPropertyDescriptor(u, s)
                      )
                    })
            }
            return i
          }
          t.exports = o
        },
      }),
      rb = he({
        '../../node_modules/@devtools-ds/tree/node_modules/@babel/runtime/helpers/extends.js'(
          e,
          t
        ) {
          function r() {
            return (
              (t.exports = r =
                Object.assign ||
                function (n) {
                  for (let o = 1; o < arguments.length; o++) {
                    const i = arguments[o]
                    for (const a in i)
                      Object.prototype.hasOwnProperty.call(i, a) &&
                        (n[a] = i[a])
                  }
                  return n
                }),
              r.apply(this, arguments)
            )
          }
          t.exports = r
        },
      }),
      nb = he({
        '../../node_modules/@devtools-ds/tree/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js'(
          e,
          t
        ) {
          function r(n, o) {
            if (n == null) return {}
            let i = {},
              a = Object.keys(n),
              u,
              s
            for (s = 0; s < a.length; s++)
              ((u = a[s]), !(o.indexOf(u) >= 0) && (i[u] = n[u]))
            return i
          }
          t.exports = r
        },
      }),
      ob = he({
        '../../node_modules/@devtools-ds/tree/node_modules/@babel/runtime/helpers/objectWithoutProperties.js'(
          e,
          t
        ) {
          const r = nb()
          function n(o, i) {
            if (o == null) return {}
            let a = r(o, i),
              u,
              s
            if (Object.getOwnPropertySymbols) {
              const l = Object.getOwnPropertySymbols(o)
              for (s = 0; s < l.length; s++)
                ((u = l[s]),
                  !(i.indexOf(u) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(o, u) &&
                    (a[u] = o[u]))
            }
            return a
          }
          t.exports = n
        },
      }),
      ir = 'storybook/test',
      Un = `${ir}/test-provider`,
      Sa = `${ir}/panel`,
      ib = 'STORYBOOK_ADDON_TEST_CHANNEL',
      ab = 'https://youtu.be/Waht9qq7AoA',
      Ta = 'writing-tests/test-addon',
      ub = `${Ta}#what-happens-when-there-are-different-test-results-in-multiple-environments`,
      sb = `${Ta}#what-happens-if-vitest-itself-has-an-error`,
      lb = {
        id: ir,
        initialState: { config: { coverage: !1, a11y: !1 }, watching: !1 },
      },
      t2 = Ua.create({
        ...lb,
        leader: globalThis.CONFIG_TYPE === 'PRODUCTION',
      }),
      cb = H.div({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '6px 6px 6px 20px',
      }),
      pb = H.div({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }),
      db = H.div(({ theme: { typography: e } }) => ({
        fontSize: e.size.s2,
        fontWeight: e.weight.bold,
      })),
      fb = H.pre(({ theme: e }) => ({
        whiteSpace: 'pre-wrap',
        overflow: 'auto',
        maxHeight: '60vh',
        margin: 0,
        padding: '20px',
        fontFamily: e.typography.fonts.mono,
        fontSize: '12px',
        borderTop: `1px solid ${e.appBorderColor}`,
        borderRadius: 0,
      })),
      hb = H.a(({ theme: e }) => ({ color: e.color.defaultText })),
      _a = y.createContext({
        isModalOpen: !1,
        setModalOpen: () => {},
        error: void 0,
      })
    function mb({ onRerun: e }) {
      const t = Lr(),
        { error: r, isModalOpen: n, setModalOpen: o } = Ba(_a),
        i = () => o(!1),
        a = t.getDocsUrl({ subpath: sb, versioned: !0, renderer: !0 })
      return y.createElement(
        ka,
        { onEscapeKeyDown: i, onInteractOutside: i, open: n },
        y.createElement(
          cb,
          null,
          y.createElement(db, null, 'Storybook Tests error details'),
          y.createElement(
            pb,
            null,
            y.createElement(
              pt,
              { onClick: e, variant: 'ghost' },
              y.createElement(Jn, null),
              'Rerun'
            ),
            y.createElement(
              pt,
              { variant: 'ghost', asChild: !0 },
              y.createElement(
                'a',
                { target: '_blank', href: a, rel: 'noreferrer' },
                'Troubleshoot'
              )
            ),
            y.createElement($r, { onClick: i }, y.createElement(Qa, null))
          )
        ),
        y.createElement(
          fb,
          null,
          r,
          y.createElement('br', null),
          y.createElement('br', null),
          'Troubleshoot:',
          ' ',
          y.createElement(hb, { target: '_blank', href: a }, a)
        )
      )
    }
    const gb = ze(Y1())
    function yb({ onlyFirst: e = !1 } = {}) {
      const t = [
        '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
        '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))',
      ].join('|')
      return new RegExp(t, e ? void 0 : 'g')
    }
    const bb = yb()
    function Eb(e) {
      if (typeof e !== 'string')
        throw new TypeError(`Expected a \`string\`, got \`${typeof e}\``)
      return e.replace(bb, '')
    }
    function Ab(e) {
      return r2(e) || n2(e)
    }
    function r2(e) {
      return (
        e &&
        typeof e === 'object' &&
        'name' in e &&
        typeof e.name === 'string' &&
        e.name === 'AssertionError'
      )
    }
    function n2(e) {
      return (
        e &&
        typeof e === 'object' &&
        'message' in e &&
        typeof e.message === 'string' &&
        Eb(e.message).startsWith('expect(')
      )
    }
    function wb(e) {
      return new gb.default({
        escapeXML: !0,
        fg: e.color.defaultText,
        bg: e.background.content,
      })
    }
    function Oa() {
      const e = vt()
      return wb(e)
    }
    const Sb = H.div(({ theme: e }) => ({
        display: 'flex',
        fontSize: e.typography.size.s2 - 1,
        gap: 25,
      })),
      vb = H.div(({ theme: e }) => ({
        width: 1,
        height: 16,
        backgroundColor: e.appBorderColor,
      })),
      Cb = () => {
        const [e, t] = _e(!0),
          r = Lr().getDocsUrl({ subpath: Ta, versioned: !0, renderer: !0 })
        return (
          Ke(() => {
            const n = setTimeout(() => {
              t(!1)
            }, 100)
            return () => clearTimeout(n)
          }, []),
          e
            ? null
            : y.createElement(La, {
                title: 'Component testing',
                description: y.createElement(
                  y.Fragment,
                  null,
                  "Component tests allow you to verify the functional aspects of UIs. Write a play function for your story and you'll see it run here."
                ),
                footer: y.createElement(
                  Sb,
                  null,
                  y.createElement(
                    sr,
                    { href: ab, target: '_blank', withArrow: !0 },
                    y.createElement(du, null),
                    ' Watch 8m video'
                  ),
                  y.createElement(vb, null),
                  y.createElement(
                    sr,
                    { href: r, target: '_blank', withArrow: !0 },
                    y.createElement(eu, null),
                    ' Read docs'
                  )
                ),
              })
        )
      },
      xb = ze(xa()),
      Db = ze(Da())
    function va(e) {
      let t,
        r,
        n = ''
      if (e)
        if (typeof e === 'object')
          if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
              e[t] && (r = va(e[t])) && (n && (n += ' '), (n += r))
          else for (t in e) e[t] && (r = va(t)) && (n && (n += ' '), (n += r))
        else typeof e !== 'boolean' && !e.call && (n && (n += ' '), (n += e))
      return n
    }
    function Qe() {
      for (var e = 0, t, r = ''; e < arguments.length; )
        (t = va(arguments[e++])) && (r && (r += ' '), (r += t))
      return r
    }
    const Ia = (e) =>
        Array.isArray(e) || (ArrayBuffer.isView(e) && !(e instanceof DataView)),
      o2 = (e) =>
        e !== null &&
        typeof e === 'object' &&
        !Ia(e) &&
        !(e instanceof Date) &&
        !(e instanceof RegExp) &&
        !(e instanceof Error) &&
        !(e instanceof WeakMap) &&
        !(e instanceof WeakSet),
      Tb = (e) =>
        o2(e) || Ia(e) || typeof e === 'function' || e instanceof Promise,
      i2 = (e) => {
        const t = /unique/
        return Promise.race([e, t]).then(
          (r) => (r === t ? ['pending'] : ['fulfilled', r]),
          (r) => ['rejected', r]
        )
      },
      Ze = async (e, t, r, n, o, i) => {
        const a = { key: e, depth: r, value: t, type: 'value', parent: void 0 }
        if (t && Tb(t) && r < 100) {
          let u = [],
            s = 'object'
          if (Ia(t)) {
            for (let l = 0; l < t.length; l++)
              u.push(async () => {
                const c = await Ze(l.toString(), t[l], r + 1, n)
                return ((c.parent = a), c)
              })
            s = 'array'
          } else {
            const l = Object.getOwnPropertyNames(t)
            n && l.sort()
            for (let c = 0; c < l.length; c++) {
              let p
              try {
                p = t[l[c]]
              } catch {}
              u.push(async () => {
                const g = await Ze(l[c], p, r + 1, n)
                return ((g.parent = a), g)
              })
            }
            if (
              (typeof t === 'function' && (s = 'function'),
              t instanceof Promise)
            ) {
              const [c, p] = await i2(t)
              ;(u.push(async () => {
                const g = await Ze('<state>', c, r + 1, n)
                return ((g.parent = a), g)
              }),
                c !== 'pending' &&
                  u.push(async () => {
                    const g = await Ze('<value>', p, r + 1, n)
                    return ((g.parent = a), g)
                  }),
                (s = 'promise'))
            }
            if (t instanceof Map) {
              const c = Array.from(t.entries()).map((p) => {
                const [g, m] = p
                return { '<key>': g, '<value>': m }
              })
              ;(u.push(async () => {
                const p = await Ze('<entries>', c, r + 1, n)
                return ((p.parent = a), p)
              }),
                u.push(async () => {
                  const p = await Ze('size', t.size, r + 1, n)
                  return ((p.parent = a), p)
                }),
                (s = 'map'))
            }
            if (t instanceof Set) {
              const c = Array.from(t.entries()).map((p) => p[1])
              ;(u.push(async () => {
                const p = await Ze('<entries>', c, r + 1, n)
                return ((p.parent = a), p)
              }),
                u.push(async () => {
                  const p = await Ze('size', t.size, r + 1, n)
                  return ((p.parent = a), p)
                }),
                (s = 'set'))
            }
          }
          ;(t !== Object.prototype &&
            i &&
            u.push(async () => {
              const l = await Ze(
                '<prototype>',
                Object.getPrototypeOf(t),
                r + 1,
                n,
                !0
              )
              return ((l.parent = a), l)
            }),
            (a.type = s),
            (a.children = u),
            (a.isPrototype = o))
        }
        return a
      },
      _b = (e, t, r) =>
        Ze('root', e, 0, t === !1 ? t : !0, void 0, r === !1 ? r : !0),
      $f = ze(J1()),
      Ob = ze(Q1()),
      Ib = ['children'],
      Ca = y.createContext({ theme: 'chrome', colorScheme: 'light' }),
      Rb = (e) => {
        let { children: t } = e,
          r = (0, Ob.default)(e, Ib),
          n = y.useContext(Ca)
        return y.createElement(
          Ca.Provider,
          { value: (0, $f.default)((0, $f.default)({}, n), r) },
          t
        )
      },
      Vn = (e, t = {}) => {
        const r = y.useContext(Ca),
          n = e.theme || r.theme || 'chrome',
          o = e.colorScheme || r.colorScheme || 'light',
          i = Qe(t[n], t[o])
        return { currentColorScheme: o, currentTheme: n, themeClass: i }
      },
      Lf = ze(tb()),
      ha = ze(rb()),
      Fb = ze(ob()),
      Bb = y.createContext({ isChild: !1, depth: 0, hasHover: !0 }),
      ma = Bb,
      Pe = {
        tree: 'Tree-tree-fbbbe38',
        item: 'Tree-item-353d6f3',
        group: 'Tree-group-d3c3d8a',
        label: 'Tree-label-d819155',
        focusWhite: 'Tree-focusWhite-f1e00c2',
        arrow: 'Tree-arrow-03ab2e7',
        hover: 'Tree-hover-3cc4e5d',
        open: 'Tree-open-3f1a336',
        dark: 'Tree-dark-1b4aa00',
        chrome: 'Tree-chrome-bcbcac6',
        light: 'Tree-light-09174ee',
      },
      Pb = [
        'theme',
        'hover',
        'colorScheme',
        'children',
        'label',
        'className',
        'onUpdate',
        'onSelect',
        'open',
      ],
      Hn = (e) => {
        let {
            theme: t,
            hover: r,
            colorScheme: n,
            children: o,
            label: i,
            className: a,
            onUpdate: u,
            onSelect: s,
            open: l,
          } = e,
          c = (0, Fb.default)(e, Pb),
          { themeClass: p, currentTheme: g } = Vn(
            { theme: t, colorScheme: n },
            Pe
          ),
          [m, A] = _e(l)
        Ke(() => {
          A(l)
        }, [l])
        const b = (R) => {
            ;(A(R), u && u(R))
          },
          E = y.Children.count(o) > 0,
          x = (R, L) => {
            if (R.isSameNode(L || null)) return
            ;(R.querySelector('[tabindex="-1"]')?.focus(),
              R.setAttribute('aria-selected', 'true'),
              L?.removeAttribute('aria-selected'))
          },
          C = (R, L) => {
            let N = R
            for (; N && N.parentElement; ) {
              if (N.getAttribute('role') === L) return N
              N = N.parentElement
            }
            return null
          },
          _ = (R) => {
            const L = C(R, 'tree')
            return L ? Array.from(L.querySelectorAll('li')) : []
          },
          D = (R) => {
            const L = C(R, 'group'),
              N = L?.previousElementSibling
            if (N && N.getAttribute('tabindex') === '-1') {
              const M = N.parentElement,
                z = R.parentElement
              x(M, z)
            }
          },
          I = (R, L) => {
            const N = _(R)
            ;(N.forEach((M) => {
              M.removeAttribute('aria-selected')
            }),
              L === 'start' && N[0] && x(N[0]),
              L === 'end' && N[N.length - 1] && x(N[N.length - 1]))
          },
          T = (R, L) => {
            const N = _(R) || []
            for (let M = 0; M < N.length; M++) {
              const z = N[M]
              if (z.getAttribute('aria-selected') === 'true') {
                L === 'up' && N[M - 1]
                  ? x(N[M - 1], z)
                  : L === 'down' && N[M + 1] && x(N[M + 1], z)
                return
              }
            }
            x(N[0])
          },
          S = (R, L) => {
            const N = R.target
            ;((R.key === 'Enter' || R.key === ' ') && b(!m),
              R.key === 'ArrowRight' && m && !L
                ? T(N, 'down')
                : R.key === 'ArrowRight' && b(!0),
              R.key === 'ArrowLeft' && (!m || L)
                ? D(N)
                : R.key === 'ArrowLeft' && b(!1),
              R.key === 'ArrowDown' && T(N, 'down'),
              R.key === 'ArrowUp' && T(N, 'up'),
              R.key === 'Home' && I(N, 'start'),
              R.key === 'End' && I(N, 'end'))
          },
          O = (R, L) => {
            let N = R.target,
              M = C(N, 'treeitem'),
              z = _(N) || [],
              Y = !1
            for (let X = 0; X < z.length; X++) {
              const V = z[X]
              if (V.getAttribute('aria-selected') === 'true') {
                M && ((Y = !0), x(M, V))
                break
              }
            }
            ;(!Y && M && x(M), L || b(!m))
          },
          F = (R) => {
            const L = R.currentTarget
            !L.contains(document.activeElement) &&
              L.getAttribute('role') === 'tree' &&
              L.setAttribute('tabindex', '0')
          },
          $ = (R) => {
            const L = R.target
            if (L.getAttribute('role') === 'tree') {
              const N = L.querySelector('[aria-selected="true"]')
              ;(N ? x(N) : T(L, 'down'), L.setAttribute('tabindex', '-1'))
            }
          },
          P = () => {
            s?.()
          },
          j = (R) => {
            const L = R * 0.9 + 0.3
            return { paddingLeft: `${L}em`, width: `calc(100% - ${L}em)` }
          },
          { isChild: k, depth: h, hasHover: f } = y.useContext(ma),
          v = f ? r : !1
        if (!k)
          return y.createElement(
            'ul',
            (0, ha.default)(
              {
                role: 'tree',
                tabIndex: 0,
                className: Qe(Pe.tree, Pe.group, p, a),
                onFocus: $,
                onBlur: F,
              },
              c
            ),
            y.createElement(
              ma.Provider,
              { value: { isChild: !0, depth: 0, hasHover: v } },
              y.createElement(Hn, e)
            )
          )
        if (!E)
          return y.createElement(
            'li',
            (0, ha.default)({ role: 'treeitem', className: Pe.item }, c),
            y.createElement(
              'div',
              {
                role: 'button',
                className: Qe(Pe.label, {
                  [Pe.hover]: v,
                  [Pe.focusWhite]: g === 'firefox',
                }),
                tabIndex: -1,
                style: j(h),
                onKeyDown: (R) => {
                  S(R, k)
                },
                onClick: (R) => O(R, !0),
                onFocus: P,
              },
              y.createElement('span', null, i)
            )
          )
        const B = Qe(Pe.arrow, { [Pe.open]: m })
        return y.createElement(
          'li',
          { role: 'treeitem', 'aria-expanded': m, className: Pe.item },
          y.createElement(
            'div',
            {
              role: 'button',
              tabIndex: -1,
              className: Qe(Pe.label, {
                [Pe.hover]: v,
                [Pe.focusWhite]: g === 'firefox',
              }),
              style: j(h),
              onClick: (R) => O(R),
              onKeyDown: (R) => S(R),
              onFocus: P,
            },
            y.createElement(
              'span',
              null,
              y.createElement('span', { 'aria-hidden': !0, className: B }),
              y.createElement('span', null, i)
            )
          ),
          y.createElement(
            'ul',
            (0, ha.default)({ role: 'group', className: Qe(a, Pe.group) }, c),
            m &&
              y.Children.map(o, (R) =>
                y.createElement(
                  ma.Provider,
                  { value: { isChild: !0, depth: h + 1, hasHover: v } },
                  R
                )
              )
          )
        )
      }
    Hn.defaultProps = { open: !1, hover: !0 }
    const $b = ze(xa()),
      Lb = ze(Da()),
      se = {
        'object-inspector': 'ObjectInspector-object-inspector-0c33e82',
        objectInspector: 'ObjectInspector-object-inspector-0c33e82',
        'object-label': 'ObjectInspector-object-label-b81482b',
        objectLabel: 'ObjectInspector-object-label-b81482b',
        text: 'ObjectInspector-text-25f57f3',
        key: 'ObjectInspector-key-4f712bb',
        value: 'ObjectInspector-value-f7ec2e5',
        string: 'ObjectInspector-string-c496000',
        regex: 'ObjectInspector-regex-59d45a3',
        error: 'ObjectInspector-error-b818698',
        boolean: 'ObjectInspector-boolean-2dd1642',
        number: 'ObjectInspector-number-a6daabb',
        undefined: 'ObjectInspector-undefined-3a68263',
        null: 'ObjectInspector-null-74acb50',
        function: 'ObjectInspector-function-07bbdcd',
        'function-decorator': 'ObjectInspector-function-decorator-3d22c24',
        functionDecorator: 'ObjectInspector-function-decorator-3d22c24',
        prototype: 'ObjectInspector-prototype-f2449ee',
        dark: 'ObjectInspector-dark-0c96c97',
        chrome: 'ObjectInspector-chrome-2f3ca98',
        light: 'ObjectInspector-light-78bef54',
      },
      kb = ['ast', 'theme', 'showKey', 'colorScheme', 'className'],
      $e = (e, t, r, n, o) => {
        const i = e.includes('-') ? `"${e}"` : e,
          a = o <= 0
        return y.createElement(
          'span',
          { className: se.text },
          !a &&
            n &&
            y.createElement(
              y.Fragment,
              null,
              y.createElement('span', { className: se.key }, i),
              y.createElement('span', null, ':\xA0')
            ),
          y.createElement('span', { className: r }, t)
        )
      },
      a2 = (e) => {
        let { ast: t, theme: r, showKey: n, colorScheme: o, className: i } = e,
          a = (0, Lb.default)(e, kb),
          { themeClass: u } = Vn({ theme: r, colorScheme: o }, se),
          [s, l] = _e(y.createElement('span', null)),
          c = y.createElement('span', null)
        return (
          Ke(() => {
            t.value instanceof Promise &&
              (async (p) => {
                l($e(t.key, `Promise { "${await i2(p)}" }`, se.key, n, t.depth))
              })(t.value)
          }, [t, n]),
          typeof t.value === 'number' || typeof t.value === 'bigint'
            ? (c = $e(t.key, String(t.value), se.number, n, t.depth))
            : typeof t.value === 'boolean'
              ? (c = $e(t.key, String(t.value), se.boolean, n, t.depth))
              : typeof t.value === 'string'
                ? (c = $e(t.key, `"${t.value}"`, se.string, n, t.depth))
                : typeof t.value > 'u'
                  ? (c = $e(t.key, 'undefined', se.undefined, n, t.depth))
                  : typeof t.value === 'symbol'
                    ? (c = $e(t.key, t.value.toString(), se.string, n, t.depth))
                    : typeof t.value === 'function'
                      ? (c = $e(t.key, `${t.value.name}()`, se.key, n, t.depth))
                      : typeof t.value === 'object' &&
                        (t.value === null
                          ? (c = $e(t.key, 'null', se.null, n, t.depth))
                          : Array.isArray(t.value)
                            ? (c = $e(
                                t.key,
                                `Array(${t.value.length})`,
                                se.key,
                                n,
                                t.depth
                              ))
                            : t.value instanceof Date
                              ? (c = $e(
                                  t.key,
                                  `Date ${t.value.toString()}`,
                                  se.value,
                                  n,
                                  t.depth
                                ))
                              : t.value instanceof RegExp
                                ? (c = $e(
                                    t.key,
                                    t.value.toString(),
                                    se.regex,
                                    n,
                                    t.depth
                                  ))
                                : t.value instanceof Error
                                  ? (c = $e(
                                      t.key,
                                      t.value.toString(),
                                      se.error,
                                      n,
                                      t.depth
                                    ))
                                  : o2(t.value)
                                    ? (c = $e(
                                        t.key,
                                        '{\u2026}',
                                        se.key,
                                        n,
                                        t.depth
                                      ))
                                    : (c = $e(
                                        t.key,
                                        t.value.constructor.name,
                                        se.key,
                                        n,
                                        t.depth
                                      ))),
          y.createElement(
            'span',
            (0, $b.default)({ className: Qe(u, i) }, a),
            s,
            c
          )
        )
      }
    a2.defaultProps = { showKey: !0 }
    const u2 = a2,
      nr = ze(xa()),
      Nb = ze(Da()),
      jb = ['ast', 'theme', 'previewMax', 'open', 'colorScheme', 'className'],
      Rr = (e, t, r) => {
        const n = []
        for (let o = 0; o < e.length; o++) {
          const i = e[o]
          if (
            (i.isPrototype ||
              (n.push(y.createElement(u2, { key: i.key, ast: i, showKey: r })),
              o < e.length - 1 ? n.push(', ') : n.push(' ')),
            i.isPrototype && o === e.length - 1 && (n.pop(), n.push(' ')),
            o === t - 1 && e.length > t)
          ) {
            n.push('\u2026 ')
            break
          }
        }
        return n
      },
      Mb = (e, t, r, n) => {
        const o = e.value.length
        return t
          ? y.createElement('span', null, 'Array(', o, ')')
          : y.createElement(
              y.Fragment,
              null,
              y.createElement(
                'span',
                null,
                `${n === 'firefox' ? 'Array' : ''}(${o}) [ `
              ),
              Rr(e.children, r, !1),
              y.createElement('span', null, ']')
            )
      },
      qb = (e, t, r, n) =>
        e.isPrototype
          ? y.createElement(
              'span',
              null,
              `Object ${n === 'firefox' ? '{ \u2026 }' : ''}`
            )
          : t
            ? y.createElement('span', null, '{\u2026}')
            : y.createElement(
                y.Fragment,
                null,
                y.createElement(
                  'span',
                  null,
                  `${n === 'firefox' ? 'Object ' : ''}{ `
                ),
                Rr(e.children, r, !0),
                y.createElement('span', null, '}')
              ),
      zb = (e, t, r) =>
        t
          ? y.createElement(
              'span',
              null,
              `Promise { "${String(e.children[0].value)}" }`
            )
          : y.createElement(
              y.Fragment,
              null,
              y.createElement('span', null, 'Promise { '),
              Rr(e.children, r, !0),
              y.createElement('span', null, '}')
            ),
      Ub = (e, t, r, n) => {
        const { size: o } = e.value
        return t
          ? y.createElement('span', null, `Map(${o})`)
          : y.createElement(
              y.Fragment,
              null,
              y.createElement(
                'span',
                null,
                `Map${n === 'chrome' ? `(${o})` : ''} { `
              ),
              Rr(e.children, r, !0),
              y.createElement('span', null, '}')
            )
      },
      Hb = (e, t, r) => {
        const { size: n } = e.value
        return t
          ? y.createElement('span', null, 'Set(', n, ')')
          : y.createElement(
              y.Fragment,
              null,
              y.createElement('span', null, `Set(${e.value.size}) {`),
              Rr(e.children, r, !0),
              y.createElement('span', null, '}')
            )
      },
      s2 = (e) => {
        let {
            ast: t,
            theme: r,
            previewMax: n,
            open: o,
            colorScheme: i,
            className: a,
          } = e,
          u = (0, Nb.default)(e, jb),
          { themeClass: s, currentTheme: l } = Vn(
            { theme: r, colorScheme: i },
            se
          ),
          c = t.isPrototype || !1,
          p = Qe(se.objectLabel, s, a, { [se.prototype]: c }),
          g = t.depth <= 0,
          m = () =>
            y.createElement(
              'span',
              { className: c ? se.prototype : se.key },
              g ? '' : `${t.key}: `
            )
        return t.type === 'array'
          ? y.createElement(
              'span',
              (0, nr.default)({ className: p }, u),
              y.createElement(m, null),
              Mb(t, o, n, l)
            )
          : t.type === 'function'
            ? y.createElement(
                'span',
                (0, nr.default)({ className: p }, u),
                y.createElement(m, null),
                l === 'chrome' &&
                  y.createElement(
                    'span',
                    { className: se.functionDecorator },
                    '\u0192 '
                  ),
                y.createElement(
                  'span',
                  { className: Qe({ [se.function]: !c }) },
                  `${t.value.name}()`
                )
              )
            : t.type === 'promise'
              ? y.createElement(
                  'span',
                  (0, nr.default)({ className: p }, u),
                  y.createElement(m, null),
                  zb(t, o, n)
                )
              : t.type === 'map'
                ? y.createElement(
                    'span',
                    (0, nr.default)({ className: p }, u),
                    y.createElement(m, null),
                    Ub(t, o, n, l)
                  )
                : t.type === 'set'
                  ? y.createElement(
                      'span',
                      (0, nr.default)({ className: p }, u),
                      y.createElement(m, null),
                      Hb(t, o, n)
                    )
                  : y.createElement(
                      'span',
                      (0, nr.default)({ className: p }, u),
                      y.createElement(m, null),
                      qb(t, o, n, l)
                    )
      }
    s2.defaultProps = { previewMax: 8, open: !1 }
    const Vb = s2,
      Ra = (e) => {
        let { ast: t, expandLevel: r, depth: n } = e,
          [o, i] = _e(),
          [a, u] = _e(n < r)
        return (
          Ke(() => {
            ;(async () => {
              if (t.type !== 'value') {
                const s = t.children.map((p) => p()),
                  l = await Promise.all(s),
                  c = (0, Lf.default)(
                    (0, Lf.default)({}, t),
                    {},
                    { children: l }
                  )
                i(c)
              }
            })()
          }, [t]),
          o
            ? y.createElement(
                Hn,
                {
                  hover: !1,
                  open: a,
                  label: y.createElement(Vb, { open: a, ast: o }),
                  onSelect: () => {
                    let s
                    ;(s = e.onSelect) === null || s === void 0 || s.call(e, t)
                  },
                  onUpdate: (s) => {
                    u(s)
                  },
                },
                o.children.map((s) =>
                  y.createElement(Ra, {
                    key: s.key,
                    ast: s,
                    depth: n + 1,
                    expandLevel: r,
                    onSelect: e.onSelect,
                  })
                )
              )
            : y.createElement(Hn, {
                hover: !1,
                label: y.createElement(u2, { ast: t }),
                onSelect: () => {
                  let s
                  ;(s = e.onSelect) === null || s === void 0 || s.call(e, t)
                },
              })
        )
      }
    Ra.defaultProps = { expandLevel: 0, depth: 0 }
    const Wb = Ra,
      Gb = [
        'data',
        'expandLevel',
        'sortKeys',
        'includePrototypes',
        'className',
        'theme',
        'colorScheme',
        'onSelect',
      ],
      l2 = (e) => {
        let {
            data: t,
            expandLevel: r,
            sortKeys: n,
            includePrototypes: o,
            className: i,
            theme: a,
            colorScheme: u,
            onSelect: s,
          } = e,
          l = (0, Db.default)(e, Gb),
          [c, p] = _e(void 0),
          {
            themeClass: g,
            currentTheme: m,
            currentColorScheme: A,
          } = Vn({ theme: a, colorScheme: u }, se)
        return (
          Ke(() => {
            ;(async () => p(await _b(t, n, o)))()
          }, [t, n, o]),
          y.createElement(
            'div',
            (0, xb.default)({ className: Qe(se.objectInspector, i, g) }, l),
            c &&
              y.createElement(
                Rb,
                { theme: m, colorScheme: A },
                y.createElement(Wb, { ast: c, expandLevel: r, onSelect: s })
              )
          )
        )
      }
    l2.defaultProps = { expandLevel: 0, sortKeys: !0, includePrototypes: !0 }
    var Yb = {
        base: '#444',
        nullish: '#7D99AA',
        string: '#16B242',
        number: '#5D40D0',
        boolean: '#f41840',
        objectkey: '#698394',
        instance: '#A15C20',
        function: '#EA7509',
        muted: '#7D99AA',
        tag: { name: '#6F2CAC', suffix: '#1F99E5' },
        date: '#459D9C',
        error: { name: '#D43900', message: '#444' },
        regex: { source: '#A15C20', flags: '#EA7509' },
        meta: '#EA7509',
        method: '#0271B6',
      },
      Kb = {
        base: '#eee',
        nullish: '#aaa',
        string: '#5FE584',
        number: '#6ba5ff',
        boolean: '#ff4191',
        objectkey: '#accfe6',
        instance: '#E3B551',
        function: '#E3B551',
        muted: '#aaa',
        tag: { name: '#f57bff', suffix: '#8EB5FF' },
        date: '#70D4D3',
        error: { name: '#f40', message: '#eee' },
        regex: { source: '#FAD483', flags: '#E3B551' },
        meta: '#FAD483',
        method: '#5EC1FF',
      },
      ve = () => {
        const { base: e } = vt()
        return e === 'dark' ? Kb : Yb
      },
      Xb = /[^A-Z0-9]/i,
      kf = /[\s.,…]+$/gm,
      c2 = (e, t) => {
        if (e.length <= t) return e
        for (let r = t - 1; r >= 0; r -= 1)
          if (Xb.test(e[r]) && r > 10)
            return `${e.slice(0, r).replace(kf, '')}\u2026`
        return `${e.slice(0, t).replace(kf, '')}\u2026`
      },
      Jb = (e) => {
        try {
          return JSON.stringify(e, null, 1)
        } catch {
          return String(e)
        }
      },
      p2 = (e, t) =>
        e.flatMap((r, n) =>
          n === e.length - 1 ? [r] : [r, y.cloneElement(t, { key: `sep${n}` })]
        ),
      Bt = ({
        value: e,
        nested: t,
        showObjectInspector: r,
        callsById: n,
        ...o
      }) => {
        switch (!0) {
          case e === null:
            return y.createElement(Zb, { ...o })
          case e === void 0:
            return y.createElement(Qb, { ...o })
          case Array.isArray(e):
            return y.createElement(nE, { ...o, value: e, callsById: n })
          case typeof e === 'string':
            return y.createElement(eE, { ...o, value: e })
          case typeof e === 'number':
            return y.createElement(tE, { ...o, value: e })
          case typeof e === 'boolean':
            return y.createElement(rE, { ...o, value: e })
          case Object.prototype.hasOwnProperty.call(e, '__date__'):
            return y.createElement(sE, { ...o, ...e.__date__ })
          case Object.prototype.hasOwnProperty.call(e, '__error__'):
            return y.createElement(lE, { ...o, ...e.__error__ })
          case Object.prototype.hasOwnProperty.call(e, '__regexp__'):
            return y.createElement(cE, { ...o, ...e.__regexp__ })
          case Object.prototype.hasOwnProperty.call(e, '__function__'):
            return y.createElement(aE, { ...o, ...e.__function__ })
          case Object.prototype.hasOwnProperty.call(e, '__symbol__'):
            return y.createElement(pE, { ...o, ...e.__symbol__ })
          case Object.prototype.hasOwnProperty.call(e, '__element__'):
            return y.createElement(uE, { ...o, ...e.__element__ })
          case Object.prototype.hasOwnProperty.call(e, '__class__'):
            return y.createElement(iE, { ...o, ...e.__class__ })
          case Object.prototype.hasOwnProperty.call(e, '__callId__'):
            return y.createElement(Fa, {
              call: n?.get(e.__callId__),
              callsById: n,
            })
          case Object.prototype.toString.call(e) === '[object Object]':
            return y.createElement(oE, {
              value: e,
              showInspector: r,
              callsById: n,
              ...o,
            })
          default:
            return y.createElement(dE, { value: e, ...o })
        }
      },
      Zb = (e) => {
        const t = ve()
        return y.createElement(
          'span',
          { style: { color: t.nullish }, ...e },
          'null'
        )
      },
      Qb = (e) => {
        const t = ve()
        return y.createElement(
          'span',
          { style: { color: t.nullish }, ...e },
          'undefined'
        )
      },
      eE = ({ value: e, ...t }) => {
        const r = ve()
        return y.createElement(
          'span',
          { style: { color: r.string }, ...t },
          JSON.stringify(c2(e, 50))
        )
      },
      tE = ({ value: e, ...t }) => {
        const r = ve()
        return y.createElement('span', { style: { color: r.number }, ...t }, e)
      },
      rE = ({ value: e, ...t }) => {
        const r = ve()
        return y.createElement(
          'span',
          { style: { color: r.boolean }, ...t },
          String(e)
        )
      },
      nE = ({ value: e, nested: t = !1, callsById: r }) => {
        const n = ve()
        if (t)
          return y.createElement(
            'span',
            { style: { color: n.base } },
            '[\u2026]'
          )
        const o = e
            .slice(0, 3)
            .map((a, u) =>
              y.createElement(Bt, {
                key: `${u}--${JSON.stringify(a)}`,
                value: a,
                nested: !0,
                callsById: r,
              })
            ),
          i = p2(o, y.createElement('span', null, ', '))
        return e.length <= 3
          ? y.createElement('span', { style: { color: n.base } }, '[', i, ']')
          : y.createElement(
              'span',
              { style: { color: n.base } },
              '(',
              e.length,
              ') [',
              i,
              ', \u2026]'
            )
      },
      oE = ({ showInspector: e, value: t, callsById: r, nested: n = !1 }) => {
        const o = vt().base === 'dark',
          i = ve()
        if (e)
          return y.createElement(
            y.Fragment,
            null,
            y.createElement(l2, {
              id: 'interactions-object-inspector',
              data: t,
              includePrototypes: !1,
              colorScheme: o ? 'dark' : 'light',
            })
          )
        if (n)
          return y.createElement(
            'span',
            { style: { color: i.base } },
            '{\u2026}'
          )
        const a = p2(
          Object.entries(t)
            .slice(0, 2)
            .map(([u, s]) =>
              y.createElement(
                Fr,
                { key: u },
                y.createElement(
                  'span',
                  { style: { color: i.objectkey } },
                  u,
                  ': '
                ),
                y.createElement(Bt, { value: s, callsById: r, nested: !0 })
              )
            ),
          y.createElement('span', null, ', ')
        )
        return Object.keys(t).length <= 2
          ? y.createElement('span', { style: { color: i.base } }, '{ ', a, ' }')
          : y.createElement(
              'span',
              { style: { color: i.base } },
              '(',
              Object.keys(t).length,
              ') ',
              '{ ',
              a,
              ', \u2026 }'
            )
      },
      iE = ({ name: e }) => {
        const t = ve()
        return y.createElement('span', { style: { color: t.instance } }, e)
      },
      aE = ({ name: e }) => {
        const t = ve()
        return e
          ? y.createElement('span', { style: { color: t.function } }, e)
          : y.createElement(
              'span',
              { style: { color: t.nullish, fontStyle: 'italic' } },
              'anonymous'
            )
      },
      uE = ({
        prefix: e,
        localName: t,
        id: r,
        classNames: n = [],
        innerText: o,
      }) => {
        const i = e ? `${e}:${t}` : t,
          a = ve()
        return y.createElement(
          'span',
          { style: { wordBreak: 'keep-all' } },
          y.createElement(
            'span',
            { key: `${i}_lt`, style: { color: a.muted } },
            '<'
          ),
          y.createElement(
            'span',
            { key: `${i}_tag`, style: { color: a.tag.name } },
            i
          ),
          y.createElement(
            'span',
            { key: `${i}_suffix`, style: { color: a.tag.suffix } },
            r ? `#${r}` : n.reduce((u, s) => `${u}.${s}`, '')
          ),
          y.createElement(
            'span',
            { key: `${i}_gt`, style: { color: a.muted } },
            '>'
          ),
          !r &&
            n.length === 0 &&
            o &&
            y.createElement(
              y.Fragment,
              null,
              y.createElement('span', { key: `${i}_text` }, o),
              y.createElement(
                'span',
                { key: `${i}_close_lt`, style: { color: a.muted } },
                '<'
              ),
              y.createElement(
                'span',
                { key: `${i}_close_tag`, style: { color: a.tag.name } },
                '/',
                i
              ),
              y.createElement(
                'span',
                { key: `${i}_close_gt`, style: { color: a.muted } },
                '>'
              )
            )
        )
      },
      sE = ({ value: e }) => {
        let t = new Date(e)
        isNaN(Number(t)) && (Q.warn('Invalid date value:', e), (t = null))
        const r = ve()
        if (!t)
          return y.createElement(
            'span',
            { style: { whiteSpace: 'nowrap', color: r.date } },
            'Invalid date'
          )
        const [n, o, i] = t.toISOString().split(/[T.Z]/)
        return y.createElement(
          'span',
          { style: { whiteSpace: 'nowrap', color: r.date } },
          n,
          y.createElement('span', { style: { opacity: 0.7 } }, 'T'),
          o === '00:00:00'
            ? y.createElement('span', { style: { opacity: 0.7 } }, o)
            : o,
          i === '000'
            ? y.createElement('span', { style: { opacity: 0.7 } }, '.', i)
            : `.${i}`,
          y.createElement('span', { style: { opacity: 0.7 } }, 'Z')
        )
      },
      lE = ({ name: e, message: t }) => {
        const r = ve()
        return y.createElement(
          'span',
          { style: { color: r.error.name } },
          e,
          t && ': ',
          t &&
            y.createElement(
              'span',
              {
                style: { color: r.error.message },
                title: t.length > 50 ? t : '',
              },
              c2(t, 50)
            )
        )
      },
      cE = ({ flags: e, source: t }) => {
        const r = ve()
        return y.createElement(
          'span',
          { style: { whiteSpace: 'nowrap', color: r.regex.flags } },
          '/',
          y.createElement('span', { style: { color: r.regex.source } }, t),
          '/',
          e
        )
      },
      pE = ({ description: e }) => {
        const t = ve()
        return y.createElement(
          'span',
          { style: { whiteSpace: 'nowrap', color: t.instance } },
          'Symbol(',
          e &&
            y.createElement('span', { style: { color: t.meta } }, '"', e, '"'),
          ')'
        )
      },
      dE = ({ value: e }) => {
        const t = ve()
        return y.createElement('span', { style: { color: t.meta } }, Jb(e))
      },
      fE = ({ label: e }) => {
        const t = ve(),
          { typography: r } = vt()
        return y.createElement(
          'span',
          {
            style: {
              color: t.base,
              fontFamily: r.fonts.base,
              fontSize: r.size.s2 - 1,
            },
          },
          e
        )
      },
      Fa = ({ call: e, callsById: t }) => {
        if (!e) return null
        if (e.method === 'step' && e.path?.length === 0)
          return y.createElement(fE, { label: e.args[0] })
        const r = e.path?.flatMap((i, a) => {
            const u = i.__callId__
            return [
              u
                ? y.createElement(Fa, {
                    key: `elem${a}`,
                    call: t?.get(u),
                    callsById: t,
                  })
                : y.createElement('span', { key: `elem${a}` }, i),
              y.createElement('wbr', { key: `wbr${a}` }),
              y.createElement('span', { key: `dot${a}` }, '.'),
            ]
          }),
          n = e.args?.flatMap((i, a, u) => {
            const s = y.createElement(Bt, {
              key: `node${a}`,
              value: i,
              callsById: t,
            })
            return a < u.length - 1
              ? [
                  s,
                  y.createElement('span', { key: `comma${a}` }, ',\xA0'),
                  y.createElement('wbr', { key: `wbr${a}` }),
                ]
              : [s]
          }),
          o = ve()
        return y.createElement(
          y.Fragment,
          null,
          y.createElement('span', { style: { color: o.base } }, r),
          y.createElement('span', { style: { color: o.method } }, e.method),
          y.createElement(
            'span',
            { style: { color: o.base } },
            '(',
            y.createElement('wbr', null),
            n,
            y.createElement('wbr', null),
            ')'
          )
        )
      },
      Nf = (e, t = 0) => {
        for (let r = t, n = 1; r < e.length; r += 1)
          if ((e[r] === '(' ? (n += 1) : e[r] === ')' && (n -= 1), n === 0))
            return e.slice(t, r)
        return ''
      },
      ga = (e) => {
        try {
          return e === 'undefined' ? void 0 : JSON.parse(e)
        } catch {
          return e
        }
      },
      hE = H.span(({ theme: e }) => ({
        color: e.base === 'light' ? e.color.positiveText : e.color.positive,
      })),
      mE = H.span(({ theme: e }) => ({
        color: e.base === 'light' ? e.color.negativeText : e.color.negative,
      })),
      ya = ({ value: e, parsed: t }) =>
        t
          ? y.createElement(Bt, {
              showObjectInspector: !0,
              value: e,
              style: { color: '#D43900' },
            })
          : y.createElement(mE, null, e),
      ba = ({ value: e, parsed: t }) =>
        t
          ? typeof e === 'string' && e.startsWith('called with')
            ? y.createElement(y.Fragment, null, e)
            : y.createElement(Bt, {
                showObjectInspector: !0,
                value: e,
                style: { color: '#16B242' },
              })
          : y.createElement(hE, null, e),
      jf = ({ message: e, style: t = {} }) => {
        const r = Oa(),
          n = e.split(`
`)
        return y.createElement(
          'pre',
          {
            style: {
              margin: 0,
              padding: '8px 10px 8px 36px',
              fontSize: et.size.s1,
              ...t,
            },
          },
          n.flatMap((o, i) => {
            if (o.startsWith('expect(')) {
              const p = Nf(o, 7),
                g = p ? 7 + p.length : 0,
                m = p && o.slice(g).match(/\.(to|last|nth)[A-Z]\w+\(/)
              if (m) {
                const A = g + (m.index ?? 0) + m[0].length,
                  b = Nf(o, A)
                if (b)
                  return [
                    'expect(',
                    y.createElement(ya, { key: `received_${p}`, value: p }),
                    o.slice(g, A),
                    y.createElement(ba, { key: `expected_${b}`, value: b }),
                    o.slice(A + b.length),
                    y.createElement('br', { key: `br${i}` }),
                  ]
              }
            }
            if (o.match(/^\s*- /))
              return [
                y.createElement(ba, { key: o + i, value: o }),
                y.createElement('br', { key: `br${i}` }),
              ]
            if (o.match(/^\s*\+ /) || o.match(/^Received: $/))
              return [
                y.createElement(ya, { key: o + i, value: o }),
                y.createElement('br', { key: `br${i}` }),
              ]
            const [, a, u] = o.match(/^(Expected|Received): (.*)$/) || []
            if (a && u)
              return a === 'Expected'
                ? [
                    'Expected: ',
                    y.createElement(ba, {
                      key: o + i,
                      value: ga(u),
                      parsed: !0,
                    }),
                    y.createElement('br', { key: `br${i}` }),
                  ]
                : [
                    'Received: ',
                    y.createElement(ya, {
                      key: o + i,
                      value: ga(u),
                      parsed: !0,
                    }),
                    y.createElement('br', { key: `br${i}` }),
                  ]
            const [, s, l] =
              o.match(
                /(Expected number|Received number|Number) of calls: (\d+)$/i
              ) || []
            if (s && l)
              return [
                `${s} of calls: `,
                y.createElement(Bt, { key: o + i, value: Number(l) }),
                y.createElement('br', { key: `br${i}` }),
              ]
            const [, c] = o.match(/^Received has value: (.+)$/) || []
            return c
              ? [
                  'Received has value: ',
                  y.createElement(Bt, { key: o + i, value: ga(c) }),
                  y.createElement('br', { key: `br${i}` }),
                ]
              : [
                  y.createElement('span', {
                    key: o + i,
                    dangerouslySetInnerHTML: { __html: r.toHtml(o) },
                  }),
                  y.createElement('br', { key: `br${i}` }),
                ]
          })
        )
      },
      gE = H.div({
        width: 14,
        height: 14,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }),
      yE = ({ status: e }) => {
        const t = vt()
        switch (e) {
          case K.DONE:
            return y.createElement(Ja, {
              color: t.color.positive,
              'data-testid': 'icon-done',
            })
          case K.ERROR:
            return y.createElement(Xn, {
              color: t.color.negative,
              'data-testid': 'icon-error',
            })
          case K.ACTIVE:
            return y.createElement(uu, {
              color: t.color.secondary,
              'data-testid': 'icon-active',
            })
          case K.WAITING:
            return y.createElement(
              gE,
              { 'data-testid': 'icon-waiting' },
              y.createElement(Za, { color: zn(0.5, '#CCCCCC'), size: 6 })
            )
          default:
            return null
        }
      },
      bE = H.div({
        fontFamily: et.fonts.mono,
        fontSize: et.size.s1,
        overflowWrap: 'break-word',
        inlineSize: 'calc( 100% - 40px )',
      }),
      EE = H('div', {
        shouldForwardProp: (e) => !['call', 'pausedAt'].includes(e.toString()),
      })(
        ({ theme: e, call: t }) => ({
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          borderBottom: `1px solid ${e.appBorderColor}`,
          fontFamily: et.fonts.base,
          fontSize: 13,
          ...(t.status === K.ERROR && {
            backgroundColor:
              e.base === 'dark'
                ? zn(0.93, e.color.negative)
                : e.background.warning,
          }),
          paddingLeft: (t.ancestors?.length ?? 0) * 20,
        }),
        ({ theme: e, call: t, pausedAt: r }) =>
          r === t.id && {
            '&::before': {
              content: '""',
              position: 'absolute',
              top: -5,
              zIndex: 1,
              borderTop: '4.5px solid transparent',
              borderLeft: `7px solid ${e.color.warning}`,
              borderBottom: '4.5px solid transparent',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: -1,
              zIndex: 1,
              width: '100%',
              borderTop: `1.5px solid ${e.color.warning}`,
            },
          }
      ),
      AE = H.div(({ theme: e, isInteractive: t }) => ({
        display: 'flex',
        '&:hover': t ? {} : { background: e.background.hoverable },
      })),
      wE = H('button', {
        shouldForwardProp: (e) => !['call'].includes(e.toString()),
      })(({ theme: e, disabled: t, call: r }) => ({
        flex: 1,
        display: 'grid',
        background: 'none',
        border: 0,
        gridTemplateColumns: '15px 1fr',
        alignItems: 'center',
        minHeight: 40,
        margin: 0,
        padding: '8px 15px',
        textAlign: 'start',
        cursor: t || r.status === K.ERROR ? 'default' : 'pointer',
        '&:focus-visible': {
          outline: 0,
          boxShadow: `inset 3px 0 0 0 ${r.status === K.ERROR ? e.color.warning : e.color.secondary}`,
          background:
            r.status === K.ERROR ? 'transparent' : e.background.hoverable,
        },
        '& > div': { opacity: r.status === K.WAITING ? 0.5 : 1 },
      })),
      SE = H.div({ padding: 6 }),
      vE = H($r)(({ theme: e }) => ({
        color: e.textMutedColor,
        margin: '0 3px',
      })),
      CE = H(St)(({ theme: e }) => ({ fontFamily: e.typography.fonts.base })),
      Mf = H('div')(({ theme: e }) => ({
        padding: '8px 10px 8px 36px',
        fontSize: et.size.s1,
        color: e.color.defaultText,
        pre: { margin: 0, padding: 0 },
      })),
      xE = ({ exception: e }) => {
        const t = Oa()
        if (!e) return null
        if (n2(e)) return G(jf, { ...e })
        if (r2(e))
          return G(
            Mf,
            null,
            G(jf, {
              message: `${e.message}${
                e.diff
                  ? `

${e.diff}`
                  : ''
              }`,
              style: { padding: 0 },
            }),
            G('p', null, 'See the full stack trace in the browser console.')
          )
        const r = e.message.split(`

`),
          n = r.length > 1
        return G(
          Mf,
          null,
          G('pre', { dangerouslySetInnerHTML: { __html: t.toHtml(r[0]) } }),
          n && G('p', null, 'See the full stack trace in the browser console.')
        )
      },
      DE = ({
        call: e,
        callsById: t,
        controls: r,
        controlStates: n,
        childCallIds: o,
        isHidden: i,
        isCollapsed: a,
        toggleCollapsed: u,
        pausedAt: s,
      }) => {
        const [l, c] = _e(!1),
          p = !n.goto || !e.interceptable || !!e.ancestors?.length
        return i
          ? null
          : G(
              EE,
              { call: e, pausedAt: s },
              G(
                AE,
                { isInteractive: p },
                G(
                  wE,
                  {
                    'aria-label': 'Interaction step',
                    call: e,
                    onClick: () => r.goto(e.id),
                    disabled: p,
                    onMouseEnter: () => n.goto && c(!0),
                    onMouseLeave: () => n.goto && c(!1),
                  },
                  G(yE, { status: l ? K.ACTIVE : e.status }),
                  G(
                    bE,
                    { style: { marginLeft: 6, marginBottom: 1 } },
                    G(Fa, { call: e, callsById: t })
                  )
                ),
                G(
                  SE,
                  null,
                  (o?.length ?? 0) > 0 &&
                    G(
                      Ue,
                      {
                        hasChrome: !1,
                        tooltip: G(CE, {
                          note: `${a ? 'Show' : 'Hide'} interactions`,
                        }),
                      },
                      G(vE, { onClick: u }, G(ou, null))
                    )
                )
              ),
              e.status === K.ERROR &&
                e.exception?.callId === e.id &&
                G(xE, { exception: e.exception })
            )
      },
      TE = H.div(({ theme: e, status: t }) => ({
        padding: '4px 6px 4px 8px;',
        borderRadius: '4px',
        backgroundColor: {
          [K.DONE]: e.color.positive,
          [K.ERROR]: e.color.negative,
          [K.ACTIVE]: e.color.warning,
          [K.WAITING]: e.color.warning,
        }[t],
        color: 'white',
        fontFamily: et.fonts.base,
        textTransform: 'uppercase',
        fontSize: et.size.s1,
        letterSpacing: 3,
        fontWeight: et.weight.bold,
        width: 65,
        textAlign: 'center',
      })),
      _E = ({ status: e }) => {
        const t = {
          [K.DONE]: 'Pass',
          [K.ERROR]: 'Fail',
          [K.ACTIVE]: 'Runs',
          [K.WAITING]: 'Runs',
        }[e]
        return y.createElement(
          TE,
          { 'aria-label': 'Status of the test run', status: e },
          t
        )
      },
      OE = H.div(({ theme: e }) => ({
        background: e.background.app,
        borderBottom: `1px solid ${e.appBorderColor}`,
        position: 'sticky',
        top: 0,
        zIndex: 1,
      })),
      IE = H.nav(({ theme: e }) => ({
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
      })),
      RE = H(pt)(({ theme: e }) => ({
        borderRadius: 4,
        padding: 6,
        color: e.textMutedColor,
        '&:not(:disabled)': {
          '&:hover,&:focus-visible': { color: e.color.secondary },
        },
      })),
      _r = H(St)(({ theme: e }) => ({ fontFamily: e.typography.fonts.base })),
      Ir = H($r)(({ theme: e }) => ({
        color: e.textMutedColor,
        margin: '0 3px',
      })),
      FE = H(Ma)({ marginTop: 0 }),
      BE = H(Na)(({ theme: e }) => ({
        color: e.textMutedColor,
        justifyContent: 'flex-end',
        textAlign: 'right',
        whiteSpace: 'nowrap',
        marginTop: 'auto',
        marginBottom: 1,
        paddingRight: 15,
        fontSize: 13,
      })),
      qf = H.div({ display: 'flex', alignItems: 'center' }),
      PE = H(Ir)({ marginLeft: 9 }),
      $E = H(RE)({
        marginLeft: 9,
        marginRight: 9,
        marginBottom: 1,
        lineHeight: '12px',
      }),
      LE = H(Ir)(({ theme: e, animating: t, disabled: r }) => ({
        opacity: r ? 0.5 : 1,
        svg: {
          animation: t ? `${e.animation.rotate360} 200ms ease-out` : void 0,
        },
      })),
      kE = ({
        controls: e,
        controlStates: t,
        status: r,
        storyFileName: n,
        onScrollToEnd: o,
      }) => {
        const i = r === K.ERROR ? 'Scroll to error' : 'Scroll to end'
        return y.createElement(
          OE,
          null,
          y.createElement(
            $a,
            null,
            y.createElement(
              IE,
              null,
              y.createElement(
                qf,
                null,
                y.createElement(_E, { status: r }),
                y.createElement($E, { onClick: o, disabled: !o }, i),
                y.createElement(FE, null),
                y.createElement(
                  Ue,
                  {
                    trigger: 'hover',
                    hasChrome: !1,
                    tooltip: y.createElement(_r, { note: 'Go to start' }),
                  },
                  y.createElement(
                    PE,
                    {
                      'aria-label': 'Go to start',
                      onClick: e.start,
                      disabled: !t.start,
                    },
                    y.createElement(cu, null)
                  )
                ),
                y.createElement(
                  Ue,
                  {
                    trigger: 'hover',
                    hasChrome: !1,
                    tooltip: y.createElement(_r, { note: 'Go back' }),
                  },
                  y.createElement(
                    Ir,
                    {
                      'aria-label': 'Go back',
                      onClick: e.back,
                      disabled: !t.back,
                    },
                    y.createElement(iu, null)
                  )
                ),
                y.createElement(
                  Ue,
                  {
                    trigger: 'hover',
                    hasChrome: !1,
                    tooltip: y.createElement(_r, { note: 'Go forward' }),
                  },
                  y.createElement(
                    Ir,
                    {
                      'aria-label': 'Go forward',
                      onClick: e.next,
                      disabled: !t.next,
                    },
                    y.createElement(su, null)
                  )
                ),
                y.createElement(
                  Ue,
                  {
                    trigger: 'hover',
                    hasChrome: !1,
                    tooltip: y.createElement(_r, { note: 'Go to end' }),
                  },
                  y.createElement(
                    Ir,
                    {
                      'aria-label': 'Go to end',
                      onClick: e.end,
                      disabled: !t.end,
                    },
                    y.createElement(nu, null)
                  )
                ),
                y.createElement(
                  Ue,
                  {
                    trigger: 'hover',
                    hasChrome: !1,
                    tooltip: y.createElement(_r, { note: 'Rerun' }),
                  },
                  y.createElement(
                    LE,
                    { 'aria-label': 'Rerun', onClick: e.rerun },
                    y.createElement(Jn, null)
                  )
                )
              ),
              n && y.createElement(qf, null, y.createElement(BE, null, n))
            )
          )
        )
      },
      NE = H.div(({ theme: { color: e, typography: t, background: r } }) => ({
        textAlign: 'start',
        padding: '11px 15px',
        fontSize: `${t.size.s2}px`,
        fontWeight: t.weight.regular,
        lineHeight: '1rem',
        background: r.app,
        borderBottom: `1px solid ${e.border}`,
        color: e.defaultText,
        backgroundClip: 'padding-box',
        position: 'relative',
        code: {
          fontSize: `${t.size.s1 - 1}px`,
          color: 'inherit',
          margin: '0 0.2em',
          padding: '0 0.2em',
          background: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '2px',
          boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.1)',
        },
      })),
      jE = ({ browserTestStatus: e }) => {
        const t = Lr().getDocsUrl({ subpath: ub, versioned: !0, renderer: !0 }),
          [r, n] =
            e === K.ERROR
              ? ['the CLI', 'this browser']
              : ['this browser', 'the CLI']
        return y.createElement(
          NE,
          null,
          'This component test passed in ',
          r,
          ', but the tests failed in ',
          n,
          '.',
          ' ',
          y.createElement(
            sr,
            { href: t, target: '_blank', withArrow: !0 },
            'Learn what could cause this'
          )
        )
      },
      ME = H.div(({ theme: e }) => ({
        height: '100%',
        background: e.background.content,
      })),
      zf = H.div(({ theme: e }) => ({
        borderBottom: `1px solid ${e.appBorderColor}`,
        backgroundColor:
          e.base === 'dark' ? zn(0.93, e.color.negative) : e.background.warning,
        padding: 15,
        fontSize: e.typography.size.s2 - 1,
        lineHeight: '19px',
      })),
      Ea = H.code(({ theme: e }) => ({
        margin: '0 1px',
        padding: 3,
        fontSize: e.typography.size.s1 - 1,
        lineHeight: 1,
        verticalAlign: 'top',
        background: 'rgba(0, 0, 0, 0.05)',
        border: `1px solid ${e.appBorderColor}`,
        borderRadius: 3,
      })),
      Uf = H.div({ paddingBottom: 4, fontWeight: 'bold' }),
      qE = H.p({ margin: 0, padding: '0 0 20px' }),
      Hf = H.pre(({ theme: e }) => ({
        margin: 0,
        padding: 0,
        '&:not(:last-child)': { paddingBottom: 16 },
        fontSize: e.typography.size.s1 - 1,
      })),
      zE = Br(function ({
        calls: e,
        controls: t,
        controlStates: r,
        interactions: n,
        fileName: o,
        hasException: i,
        caughtException: a,
        unhandledErrors: u,
        isPlaying: s,
        pausedAt: l,
        onScrollToEnd: c,
        endRef: p,
        hasResultMismatch: g,
        browserTestStatus: m,
      }) {
        const A = Oa()
        return G(
          ME,
          null,
          g && G(jE, { browserTestStatus: m }),
          (n.length > 0 || i) &&
            G(kE, {
              controls: t,
              controlStates: r,
              status: m,
              storyFileName: o,
              onScrollToEnd: c,
            }),
          G(
            'div',
            { 'aria-label': 'Interactions list' },
            n.map((b) =>
              G(DE, {
                key: b.id,
                call: b,
                callsById: e,
                controls: t,
                controlStates: r,
                childCallIds: b.childCallIds,
                isHidden: b.isHidden,
                isCollapsed: b.isCollapsed,
                toggleCollapsed: b.toggleCollapsed,
                pausedAt: l,
              })
            )
          ),
          a &&
            !Ab(a) &&
            G(
              zf,
              null,
              G(
                Uf,
                null,
                'Caught exception in ',
                G(Ea, null, 'play'),
                ' function'
              ),
              G(Hf, {
                'data-chromatic': 'ignore',
                dangerouslySetInnerHTML: { __html: A.toHtml(Vf(a)) },
              })
            ),
          u &&
            G(
              zf,
              null,
              G(Uf, null, 'Unhandled Errors'),
              G(
                qE,
                null,
                'Found ',
                u.length,
                ' unhandled error',
                u.length > 1 ? 's' : '',
                ' ',
                'while running the play function. This might cause false positive assertions. Resolve unhandled errors or ignore unhandled errors with setting the',
                G(Ea, null, 'test.dangerouslyIgnoreUnhandledErrors'),
                ' ',
                'parameter to ',
                G(Ea, null, 'true'),
                '.'
              ),
              u.map((b, E) =>
                G(Hf, { key: E, 'data-chromatic': 'ignore' }, Vf(b))
              )
            ),
          G('div', { ref: p }),
          !s && !a && n.length === 0 && G(Cb, null)
        )
      })
    function Vf(e) {
      return e.stack || `${e.name}: ${e.message}`
    }
    const Aa = { start: !1, back: !1, goto: !1, next: !1, end: !1 },
      UE = {
        [K.DONE]: 'success',
        [K.ERROR]: 'error',
        [K.ACTIVE]: 'pending',
        [K.WAITING]: 'pending',
      },
      Wf = ({ log: e, calls: t, collapsed: r, setCollapsed: n }) => {
        const o = new Map(),
          i = new Map()
        return e
          .map(({ callId: a, ancestors: u, status: s }) => {
            let l = !1
            return (
              u.forEach((c) => {
                ;(r.has(c) && (l = !0), i.set(c, (i.get(c) || []).concat(a)))
              }),
              { ...t.get(a), status: s, isHidden: l }
            )
          })
          .map((a) => {
            const u =
              a.status === K.ERROR &&
              a.ancestors &&
              o.get(a.ancestors.slice(-1)[0])?.status === K.ACTIVE
                ? K.ACTIVE
                : a.status
            return (
              o.set(a.id, { ...a, status: u }),
              {
                ...a,
                status: u,
                childCallIds: i.get(a.id),
                isCollapsed: r.has(a.id),
                toggleCollapsed: () =>
                  n(
                    (s) => (
                      s.has(a.id) ? s.delete(a.id) : s.add(a.id),
                      new Set(s)
                    )
                  ),
              }
            )
          })
      },
      HE = Br(function ({ storyId: e }) {
        const { status: t } = Ya(),
          [r, n] = Kn(ir, {
            controlStates: Aa,
            isErrored: !1,
            pausedAt: void 0,
            interactions: [],
            isPlaying: !1,
            hasException: !1,
            caughtException: void 0,
            interactionsCount: 0,
            unhandledErrors: void 0,
          }),
          [o, i] = _e(void 0),
          [a, u] = _e(new Set()),
          [s, l] = _e(!1),
          {
            controlStates: c = Aa,
            isErrored: p = !1,
            pausedAt: g = void 0,
            interactions: m = [],
            isPlaying: A = !1,
            caughtException: b = void 0,
            unhandledErrors: E = void 0,
          } = r,
          x = Pr([]),
          C = Pr(new Map()),
          _ = ({ status: f, ...v }) => C.current.set(v.id, v),
          D = Pr()
        Ke(() => {
          let f
          return (
            q.IntersectionObserver &&
              ((f = new q.IntersectionObserver(
                ([v]) => i(v.isIntersecting ? void 0 : v.target),
                { root: q.document.querySelector('#panel-tab-content') }
              )),
              D.current && f.observe(D.current)),
            () => f?.disconnect()
          )
        }, [])
        const I = Wa(
          {
            [bt.CALL]: _,
            [bt.SYNC]: (f) => {
              ;(n((v) => {
                const B = Wf({
                  log: f.logItems,
                  calls: C.current,
                  collapsed: a,
                  setCollapsed: u,
                })
                return {
                  ...v,
                  controlStates: f.controlStates,
                  pausedAt: f.pausedAt,
                  interactions: B,
                  interactionsCount: B.filter(({ method: R }) => R !== 'step')
                    .length,
                }
              }),
                (x.current = f.logItems))
            },
            [Le]: (f) => {
              if (f.newPhase === 'preparing') {
                n({
                  controlStates: Aa,
                  isErrored: !1,
                  pausedAt: void 0,
                  interactions: [],
                  isPlaying: !1,
                  hasException: !1,
                  caughtException: void 0,
                  interactionsCount: 0,
                  unhandledErrors: void 0,
                })
                return
              }
              n((v) => ({
                ...v,
                isPlaying: f.newPhase === 'playing',
                pausedAt: void 0,
                ...(f.newPhase === 'rendering'
                  ? { isErrored: !1, caughtException: void 0 }
                  : {}),
              }))
            },
            [qr]: () => {
              n((f) => ({ ...f, isErrored: !0, hasException: !0 }))
            },
            [jr]: (f) => {
              n((v) => ({ ...v, caughtException: f, hasException: !0 }))
            },
            [zr]: (f) => {
              n((v) => ({ ...v, unhandledErrors: f, hasException: !0 }))
            },
          },
          [a]
        )
        Ke(() => {
          n((f) => {
            const v = Wf({
              log: x.current,
              calls: C.current,
              collapsed: a,
              setCollapsed: u,
            })
            return {
              ...f,
              interactions: v,
              interactionsCount: v.filter(({ method: B }) => B !== 'step')
                .length,
            }
          })
        }, [n, a])
        const T = ur(
            () => ({
              start: () => I(bt.START, { storyId: e }),
              back: () => I(bt.BACK, { storyId: e }),
              goto: (f) => I(bt.GOTO, { storyId: e, callId: f }),
              next: () => I(bt.NEXT, { storyId: e }),
              end: () => I(bt.END, { storyId: e }),
              rerun: () => {
                I(ft, { storyId: e })
              },
            }),
            [I, e]
          ),
          S = Ga('fileName', ''),
          [O] = S.toString().split('/').slice(-1),
          F = () => o?.scrollIntoView({ behavior: 'smooth', block: 'end' }),
          $ = !!b || !!E || m.some((f) => f.status === K.ERROR),
          P = t[e]?.[Un],
          j = P?.status,
          k = ur(
            () =>
              !A && (m.length > 0 || $)
                ? $
                  ? K.ERROR
                  : K.DONE
                : A
                  ? K.ACTIVE
                  : void 0,
            [A, m, $]
          ),
          { testRunId: h } = P?.data || {}
        return (
          Ke(() => {
            if (k && j && j !== 'pending' && j !== UE[k]) {
              const f = setTimeout(
                () =>
                  l(
                    (v) => (
                      v ||
                        I(ib, {
                          type: 'test-discrepancy',
                          payload: {
                            browserStatus: k === K.DONE ? 'PASS' : 'FAIL',
                            cliStatus: k === K.DONE ? 'FAIL' : 'PASS',
                            storyId: e,
                            testRunId: h,
                          },
                        }),
                      !0
                    )
                  ),
                2e3
              )
              return () => clearTimeout(f)
            } else l(!1)
          }, [I, k, j, e, h]),
          p
            ? y.createElement(Fr, { key: 'component-tests' })
            : y.createElement(
                Fr,
                { key: 'component-tests' },
                y.createElement(zE, {
                  hasResultMismatch: s,
                  browserTestStatus: k,
                  calls: C.current,
                  controls: T,
                  controlStates: c,
                  interactions: m,
                  fileName: O,
                  hasException: $,
                  caughtException: b,
                  unhandledErrors: E,
                  isPlaying: A,
                  pausedAt: g,
                  endRef: D,
                  onScrollToEnd: o && F,
                })
              )
        )
      })
    function VE() {
      const [e = {}] = Kn(ir),
        { hasException: t, interactionsCount: r } = e
      return y.createElement(
        'div',
        null,
        y.createElement(
          qa,
          { col: 1 },
          y.createElement(
            'span',
            { style: { display: 'inline-block', verticalAlign: 'middle' } },
            'Component tests'
          ),
          r && !t ? y.createElement(Yn, { status: 'neutral' }, r) : null,
          t ? y.createElement(Yn, { status: 'negative' }, r) : null
        )
      )
    }
    const d2 = 'storybook/a11y',
      WE = `${d2}/panel`,
      GE = ({ timestamp: e }) => {
        const [t, r] = _e(null)
        if (
          (Ke(() => {
            if (e) {
              r(Date.now() - e)
              const u = setInterval(() => r(Date.now() - e), 1e4)
              return () => clearInterval(u)
            }
          }, [e]),
          t === null)
        )
          return null
        const n = Math.round(t / 1e3)
        if (n < 60) return 'just now'
        const o = Math.floor(n / 60)
        if (o < 60) return o === 1 ? 'a minute ago' : `${o} minutes ago`
        const i = Math.floor(o / 60)
        if (i < 24) return i === 1 ? 'an hour ago' : `${i} hours ago`
        const a = Math.floor(i / 24)
        return a === 1 ? 'yesterday' : `${a} days ago`
      },
      YE = H.div(({ theme: e }) => ({
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        fontSize: e.typography.size.s1,
        color: e.textMutedColor,
      }))
    H.span(({ theme: e }) => ({ color: e.color.positiveText }))
    function KE({ state: e, watching: t, entryId: r, results: n, ...o }) {
      let { setModalOpen: i } = y.useContext(_a),
        a = e.error?.message,
        u = 'Not run'
      return (
        e.running
          ? (u = e.progress
              ? `Testing... ${e.progress.numPassedTests}/${e.progress.numTotalTests}`
              : 'Starting...')
          : r && n?.length
            ? (u = `Ran ${n.length} ${n.length === 1 ? 'test' : 'tests'}`)
            : e.failed && !a
              ? (u = 'Failed')
              : e.crashed || (e.failed && a)
                ? (u = i
                    ? y.createElement(
                        sr,
                        { isButton: !0, onClick: () => i(!0) },
                        e.error?.name || 'View full error'
                      )
                    : e.error?.name || 'Failed')
                : e.progress?.finishedAt
                  ? (u = y.createElement(
                      y.Fragment,
                      null,
                      'Ran ',
                      e.progress.numTotalTests,
                      ' ',
                      e.progress.numTotalTests === 1 ? 'test' : 'tests',
                      ' ',
                      y.createElement(GE, { timestamp: e.progress.finishedAt })
                    ))
                  : t && (u = 'Watching for file changes'),
        y.createElement(YE, { ...o }, u)
      )
    }
    const or = H.div(
        ({ percentage: e }) => ({
          width: e ? 12 : 6,
          height: e ? 12 : 6,
          margin: e ? 1 : 4,
          background: e
            ? `conic-gradient(var(--status-color) ${e}%, var(--status-background) ${e + 1}%)`
            : 'var(--status-color)',
          borderRadius: '50%',
        }),
        ({ status: e, theme: t }) =>
          e === 'pending' && {
            animation: `${t.animation.glow} 1.5s ease-in-out infinite`,
            '--status-color': t.color.mediumdark,
            '--status-background': `${t.color.mediumdark}66`,
          },
        ({ status: e, theme: t }) =>
          e === 'positive' && {
            '--status-color': t.color.positive,
            '--status-background': `${t.color.positive}66`,
          },
        ({ status: e, theme: t }) =>
          e === 'warning' && {
            '--status-color': t.color.gold,
            '--status-background': `${t.color.gold}66`,
          },
        ({ status: e, theme: t }) =>
          e === 'negative' && {
            '--status-color': t.color.negative,
            '--status-background': `${t.color.negative}66`,
          },
        ({ status: e, theme: t }) =>
          e === 'critical' && {
            '--status-color': t.color.defaultText,
            '--status-background': `${t.color.defaultText}66`,
          },
        ({ status: e, theme: t }) =>
          e === 'unknown' && {
            '--status-color': t.color.mediumdark,
            '--status-background': `${t.color.mediumdark}66`,
          }
      ),
      XE = H.div({ display: 'flex', flexDirection: 'column' }),
      JE = H.div({
        display: 'flex',
        justifyContent: 'space-between',
        padding: '8px 2px',
        gap: 12,
      }),
      ZE = H.div({
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 6,
        minWidth: 0,
      }),
      QE = H.div(({ crashed: e, theme: t }) => ({
        fontSize: t.typography.size.s1,
        fontWeight: e ? 'bold' : 'normal',
        color: e ? t.color.negativeText : t.color.defaultText,
      })),
      eA = H.div({ display: 'flex', gap: 2 }),
      Gf = H.div({ marginBottom: 2 }),
      wa = H.input({ margin: 0, '&:enabled': { cursor: 'pointer' } }),
      tA = H(ja)({ margin: 2 }),
      rA = H(Xn)({ width: 10 }),
      Or = H.span(
        ({ enabled: e, theme: t }) =>
          !e && {
            color: t.textMutedColor,
            '&:after': { content: '" (disabled)"' },
          }
      ),
      Yf = ['failed', 'warning', 'pending', 'passed', 'skipped'],
      nA = {
        failed: 'negative',
        warning: 'warning',
        passed: 'positive',
        skipped: 'unknown',
        pending: 'pending',
      },
      Kf = ({ state: e, api: t, entryId: r, ...n }) => {
        const [o, i] = _e(!1),
          a = vt(),
          u = e.details?.coverageSummary,
          s = lr.experimental_getRegisteredAddons().includes(d2),
          [{ config: l, watching: c }, p] = Ha(t2),
          g = r?.includes('--') ?? !1,
          m = ur(
            () =>
              s
                ? e.details?.testResults?.flatMap((T) =>
                    T.results
                      .filter(Boolean)
                      .filter(
                        (S) =>
                          !r ||
                          S.storyId === r ||
                          S.storyId?.startsWith(`${r}-`)
                      )
                      .map((S) => S.reports.find((O) => O.type === 'a11y'))
                  )
                : [],
            [s, e.details?.testResults, r]
          ),
          A = ur(() => {
            if (e.running || !s || l.a11y === !1) return 'unknown'
            const T = m?.filter(Boolean) ?? []
            if (!T || T.length === 0) return 'unknown'
            const S = T.some((F) => F?.status === 'failed'),
              O = T.some((F) => F?.status === 'warning')
            return S ? 'negative' : O ? 'warning' : 'positive'
          }, [e.running, s, l.a11y, m]),
          b = l?.a11y
            ? m?.filter(
                (T) => T?.status === 'failed' || T?.status === 'warning'
              ).length
            : void 0,
          E = e.running || !l?.a11y ? null : m?.filter((T) => !T).length,
          x = E ? (E === 1 && g ? '(skipped)' : `(${E} skipped)`) : '',
          C = g ? r : void 0,
          _ = (e.details?.testResults || [])
            .flatMap((T) =>
              r
                ? T.results.filter((S) =>
                    C ? S.storyId === C : S.storyId?.startsWith(`${r}-`)
                  )
                : T.results
            )
            .sort((T, S) => Yf.indexOf(T.status) - Yf.indexOf(S.status)),
          D = _[0]?.status ?? (e.running ? 'pending' : 'unknown'),
          I = (T, S) => {
            ;(t.selectStory(T), t.setSelectedPanel(S), t.togglePanel(!0))
          }
        return y.createElement(
          XE,
          { ...n },
          y.createElement(
            JE,
            null,
            y.createElement(
              ZE,
              null,
              y.createElement(
                QE,
                { id: 'testing-module-title', crashed: e.crashed },
                e.crashed ? 'Local tests failed' : 'Run local tests'
              ),
              y.createElement(KE, {
                id: 'testing-module-description',
                state: e,
                entryId: r,
                results: _,
                watching: c,
              })
            ),
            y.createElement(
              eA,
              null,
              !r &&
                y.createElement(
                  Ue,
                  {
                    hasChrome: !1,
                    trigger: 'hover',
                    tooltip: y.createElement(St, {
                      note: `${o ? 'Hide' : 'Show'} settings`,
                    }),
                  },
                  y.createElement(
                    pt,
                    {
                      'aria-label': `${o ? 'Hide' : 'Show'} settings`,
                      variant: 'ghost',
                      padding: 'small',
                      active: o,
                      disabled: e.running && !o,
                      onClick: () => i(!o),
                    },
                    y.createElement(tu, null)
                  )
                ),
              !r &&
                y.createElement(
                  Ue,
                  {
                    hasChrome: !1,
                    trigger: 'hover',
                    tooltip: y.createElement(St, {
                      note: `${c ? 'Disable' : 'Enable'} watch mode`,
                    }),
                  },
                  y.createElement(
                    pt,
                    {
                      'aria-label': `${c ? 'Disable' : 'Enable'} watch mode`,
                      variant: 'ghost',
                      padding: 'small',
                      active: c,
                      onClick: () => p((T) => ({ ...T, watching: !c })),
                      disabled: e.running || o,
                    },
                    y.createElement(ru, null)
                  )
                ),
              e.runnable &&
                y.createElement(
                  y.Fragment,
                  null,
                  e.running && e.cancellable
                    ? y.createElement(
                        Ue,
                        {
                          hasChrome: !1,
                          trigger: 'hover',
                          tooltip: y.createElement(St, {
                            note: 'Stop test run',
                          }),
                        },
                        y.createElement(
                          pt,
                          {
                            'aria-label': 'Stop test run',
                            variant: 'ghost',
                            padding: 'none',
                            onClick: () => t.cancelTestProvider(e.id),
                            disabled: e.cancelling,
                          },
                          y.createElement(
                            tA,
                            { percentage: e.progress?.percentageCompleted },
                            y.createElement(rA, null)
                          )
                        )
                      )
                    : y.createElement(
                        Ue,
                        {
                          hasChrome: !1,
                          trigger: 'hover',
                          tooltip: y.createElement(St, {
                            note: 'Start test run',
                          }),
                        },
                        y.createElement(
                          pt,
                          {
                            'aria-label': 'Start test run',
                            variant: 'ghost',
                            padding: 'small',
                            onClick: () =>
                              t.runTestProvider(e.id, { entryId: r }),
                            disabled: e.running || o,
                          },
                          y.createElement(au, null)
                        )
                      )
                )
            )
          ),
          o
            ? y.createElement(
                Gf,
                null,
                y.createElement(dt, {
                  as: 'label',
                  title: 'Component tests',
                  icon: y.createElement(lu, { color: a.textMutedColor }),
                  right: y.createElement(wa, {
                    type: 'checkbox',
                    checked: !0,
                    disabled: !0,
                  }),
                }),
                s &&
                  y.createElement(dt, {
                    as: 'label',
                    title: y.createElement(
                      Or,
                      { enabled: l.a11y },
                      'Accessibility'
                    ),
                    icon: y.createElement(Xa, { color: a.textMutedColor }),
                    right: y.createElement(wa, {
                      type: 'checkbox',
                      checked: l.a11y,
                      onChange: () =>
                        p((T) => ({
                          ...T,
                          config: { ...T.config, a11y: !l.a11y },
                        })),
                    }),
                  }),
                !r &&
                  y.createElement(dt, {
                    as: 'label',
                    title: y.createElement(
                      Or,
                      { enabled: l.coverage },
                      'Coverage'
                    ),
                    icon: y.createElement(pu, { color: a.textMutedColor }),
                    right: y.createElement(wa, {
                      type: 'checkbox',
                      checked: c ? !1 : l.coverage,
                      disabled: c,
                      onChange: () =>
                        p((T) => ({
                          ...T,
                          config: { ...T.config, coverage: !l.coverage },
                        })),
                    }),
                  })
              )
            : y.createElement(
                Gf,
                null,
                y.createElement(dt, {
                  title: 'Component tests',
                  onClick:
                    (D === 'failed' || D === 'warning') && _.length
                      ? () => {
                          const T = _.find(
                            (S) =>
                              S.status === 'failed' || S.status === 'warning'
                          )
                          T && I(T.storyId, Sa)
                        }
                      : void 0,
                  icon: e.crashed
                    ? y.createElement(or, {
                        status: 'critical',
                        'aria-label': 'status: crashed',
                      })
                    : D === 'unknown'
                      ? y.createElement(or, {
                          status: 'unknown',
                          'aria-label': 'status: unknown',
                        })
                      : y.createElement(or, {
                          status: nA[D],
                          'aria-label': `status: ${D}`,
                        }),
                }),
                s &&
                  y.createElement(dt, {
                    title: y.createElement(
                      Or,
                      { enabled: l.a11y },
                      'Accessibility ',
                      x
                    ),
                    onClick:
                      (A === 'negative' || A === 'warning') && m.length
                        ? () => {
                            const T = _.find((S) =>
                              S.reports
                                .filter((O) => O.type === 'a11y')
                                .find(
                                  (O) =>
                                    O.status === 'failed' ||
                                    O.status === 'warning'
                                )
                            )
                            T && I(T.storyId, WE)
                          }
                        : void 0,
                    icon: y.createElement(or, {
                      status: A,
                      'aria-label': `status: ${A}`,
                    }),
                    right: g ? null : b || null,
                  }),
                !r &&
                  y.createElement(
                    y.Fragment,
                    null,
                    u
                      ? y.createElement(dt, {
                          title: y.createElement(
                            Or,
                            { enabled: l.coverage },
                            'Coverage'
                          ),
                          href: '/coverage/index.html',
                          target: '_blank',
                          'aria-label': 'Open coverage report',
                          icon: y.createElement(or, {
                            percentage: u.percentage,
                            status: u.status,
                            'aria-label': `status: ${u.status}`,
                          }),
                          right: u.percentage
                            ? y.createElement(
                                'span',
                                {
                                  'aria-label': `${u.percentage} percent coverage`,
                                },
                                u.percentage,
                                ' %'
                              )
                            : null,
                        })
                      : y.createElement(dt, {
                          title: y.createElement(
                            Or,
                            { enabled: l.coverage },
                            'Coverage'
                          ),
                          icon: y.createElement(or, {
                            status: 'unknown',
                            'aria-label': 'status: unknown',
                          }),
                        })
                  )
              )
        )
      },
      Xf = {
        failed: 'error',
        passed: 'success',
        pending: 'pending',
        warning: 'warn',
        skipped: 'unknown',
      }
    lr.register(ir, (e) => {
      if ((globalThis.STORYBOOK_BUILDER || '').includes('vite')) {
        const r = () => {
          ;(e.setSelectedPanel(Sa), e.togglePanel(!0))
        }
        lr.add(Un, {
          type: Ka.experimental_TEST_PROVIDER,
          runnable: !0,
          name: 'Component tests',
          render: (n) => {
            const [o, i] = _e(!1)
            return y.createElement(
              _a.Provider,
              {
                value: {
                  error: n.error?.message,
                  isModalOpen: o,
                  setModalOpen: i,
                },
              },
              y.createElement(Kf, { api: e, state: n }),
              y.createElement(mb, {
                onRerun: () => {
                  ;(i(!1), e.runTestProvider(Un))
                },
              })
            )
          },
          sidebarContextMenu: ({ context: n, state: o }) =>
            n.type === 'docs' ||
            (n.type === 'story' && !n.tags.includes('test'))
              ? null
              : y.createElement(Kf, {
                  api: e,
                  state: o,
                  entryId: n.id,
                  style: { minWidth: 240 },
                }),
          stateUpdater: (n, o) => {
            const i = { ...n, ...o, details: { ...n.details, ...o.details } }
            return (
              ((!n.running && o.running) || t2.getState().watching) &&
                delete i.details.coverageSummary,
              o.details?.testResults &&
                (async () => (
                  await e.experimental_updateStatus(
                    Un,
                    Object.fromEntries(
                      o.details.testResults.flatMap((a) =>
                        a.results
                          .filter(({ storyId: u }) => u)
                          .map(
                            ({ storyId: u, status: s, testRunId: l, ...c }) => [
                              u,
                              {
                                title: 'Component tests',
                                status: Xf[s],
                                description:
                                  'failureMessages' in c && c.failureMessages
                                    ? c.failureMessages.join(`
`)
                                    : '',
                                data: { testRunId: l },
                                onClick: r,
                                sidebarContextMenu: !1,
                              },
                            ]
                          )
                      )
                    )
                  ),
                  await e.experimental_updateStatus(
                    'storybook/addon-a11y/test-provider',
                    Object.fromEntries(
                      o.details.testResults.flatMap((a) =>
                        a.results
                          .filter(({ storyId: u }) => u)
                          .map(({ storyId: u, testRunId: s, reports: l }) => {
                            const c = l.find((p) => p.type === 'a11y')
                            return [
                              u,
                              c
                                ? {
                                    title: 'Accessibility tests',
                                    description: '',
                                    status: Xf[c.status],
                                    data: { testRunId: s },
                                    onClick: () => {
                                      ;(e.setSelectedPanel(
                                        'storybook/a11y/panel'
                                      ),
                                        e.togglePanel(!0))
                                    },
                                    sidebarContextMenu: !1,
                                  }
                                : null,
                            ]
                          })
                      )
                    )
                  )
                ))(),
              i
            )
          },
        })
      }
      const t = ({ state: r }) => ({ storyId: r.storyId })
      lr.add(Sa, {
        type: Va.PANEL,
        title: () => y.createElement(VE, null),
        match: ({ viewMode: r }) => r === 'story',
        render: ({ active: r }) =>
          y.createElement(
            Pa,
            { active: !!r },
            y.createElement(za, { filter: t }, ({ storyId: n }) =>
              y.createElement(HE, { storyId: n })
            )
          ),
      })
    })
  })()
} catch (e) {
  console.error(
    `[Storybook] One of your manager-entries failed: ${import.meta.url}`,
    e
  )
}
