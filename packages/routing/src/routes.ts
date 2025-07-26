import { RouteDefinition } from './types'

export const ROUTES: Record<string, RouteDefinition> = {
  // Root/Home Routes
  HOME: {
    id: 'home',
    name: 'Home',
    path: '/',
    meta: {
      title: 'Notable - Your notes, perfectly organized',
      description: 'Main dashboard for your notes',
      public: false,
      requiresAuth: true,
      category: 'main',
      platforms: {
        web: {
          component: 'Shell',
          seo: {
            title: 'Notable - Your notes, perfectly organized',
            description:
              'A modern note-taking app that syncs seamlessly across all your devices',
            keywords: ['notes', 'productivity', 'writing', 'sync'],
          },
        },
        mobile: {
          animation: 'fade',
          header: {
            title: 'Notable',
            hidden: false,
          },
        },
        desktop: {
          menu: {
            path: 'File > Home',
            accelerator: 'CmdOrCtrl+Home',
          },
        },
      },
    },
  },

  // Authentication Routes
  AUTH_LOGIN: {
    id: 'auth.login',
    name: 'Sign In',
    path: '/auth',
    meta: {
      title: 'Sign In - Notable',
      description: 'Sign in to your Notable account',
      public: true,
      requiresAuth: false,
      category: 'auth',
      platforms: {
        web: {
          component: 'AuthPage',
          seo: {
            title: 'Sign In - Notable',
            description: 'Access your notes from anywhere',
          },
        },
        mobile: {
          animation: 'slide',
          header: {
            title: 'Sign In',
            backButton: false,
          },
        },
      },
    },
  },

  AUTH_SIGNUP: {
    id: 'auth.signup',
    name: 'Sign Up',
    path: '/auth/sign-up',
    parent: 'auth.login',
    meta: {
      title: 'Sign Up - Notable',
      description: 'Create your Notable account',
      public: true,
      requiresAuth: false,
      category: 'auth',
      platforms: {
        web: {
          component: 'SignUpPage',
        },
        mobile: {
          animation: 'slide',
          header: {
            title: 'Sign Up',
            backButton: true,
          },
        },
      },
    },
  },

  AUTH_CALLBACK: {
    id: 'auth.callback',
    name: 'Auth Callback',
    path: '/auth/callback',
    parent: 'auth.login',
    meta: {
      title: 'Signing In...',
      description: 'Completing authentication',
      public: true,
      requiresAuth: false,
      category: 'auth',
      platforms: {
        web: {
          component: 'AuthCallbackPage',
        },
      },
    },
  },

  // Note Management Routes
  NOTES: {
    id: 'notes',
    name: 'Notes',
    path: '/notes',
    meta: {
      title: 'All Notes - Notable',
      description: 'Browse and manage your notes',
      requiresAuth: true,
      category: 'notes',
      platforms: {
        web: {
          component: 'NotesPage',
        },
        mobile: {
          tabBar: {
            label: 'Notes',
            icon: 'document-text',
          },
          header: {
            title: 'Notes',
          },
        },
        desktop: {
          menu: {
            path: 'View > All Notes',
            accelerator: 'CmdOrCtrl+1',
          },
        },
      },
    },
  },

  NOTE_VIEW: {
    id: 'note.view',
    name: 'View Note',
    path: '/note/:id',
    parent: 'notes',
    meta: {
      title: 'Note - Notable',
      description: 'View and edit your note',
      requiresAuth: true,
      category: 'notes',
      platforms: {
        web: {
          component: 'NoteViewPage',
          dynamic: true,
        },
        mobile: {
          animation: 'slide',
          header: {
            title: 'Note',
            backButton: true,
          },
        },
        desktop: {
          window: {
            newWindow: false,
          },
        },
      },
    },
  },

  NOTE_EDIT: {
    id: 'note.edit',
    name: 'Edit Note',
    path: '/note/:id/edit',
    parent: 'note.view',
    meta: {
      title: 'Edit Note - Notable',
      description: 'Edit your note',
      requiresAuth: true,
      category: 'notes',
      platforms: {
        web: {
          component: 'NoteEditPage',
          dynamic: true,
        },
        mobile: {
          animation: 'slide',
          header: {
            title: 'Edit Note',
            backButton: true,
          },
        },
      },
    },
  },

  NOTE_NEW: {
    id: 'note.new',
    name: 'New Note',
    path: '/note/new',
    parent: 'notes',
    meta: {
      title: 'New Note - Notable',
      description: 'Create a new note',
      requiresAuth: true,
      category: 'notes',
      platforms: {
        web: {
          component: 'NoteNewPage',
        },
        mobile: {
          animation: 'slide',
          header: {
            title: 'New Note',
            backButton: true,
          },
        },
        desktop: {
          menu: {
            path: 'File > New Note',
            accelerator: 'CmdOrCtrl+N',
          },
        },
      },
    },
  },

  // Search Routes
  SEARCH: {
    id: 'search',
    name: 'Search',
    path: '/search',
    meta: {
      title: 'Search - Notable',
      description: 'Search through your notes',
      requiresAuth: true,
      category: 'tools',
      platforms: {
        web: {
          component: 'SearchPage',
        },
        mobile: {
          tabBar: {
            label: 'Search',
            icon: 'search',
          },
          header: {
            title: 'Search',
          },
        },
        desktop: {
          menu: {
            path: 'Edit > Find',
            accelerator: 'CmdOrCtrl+F',
          },
        },
      },
    },
  },

  // Settings Routes
  SETTINGS: {
    id: 'settings',
    name: 'Settings',
    path: '/settings',
    meta: {
      title: 'Settings - Notable',
      description: 'Configure your Notable preferences',
      requiresAuth: true,
      category: 'settings',
      platforms: {
        web: {
          component: 'SettingsPage',
        },
        mobile: {
          tabBar: {
            label: 'Settings',
            icon: 'settings',
          },
          header: {
            title: 'Settings',
          },
        },
        desktop: {
          menu: {
            path: 'File > Preferences',
            accelerator: 'CmdOrCtrl+,',
          },
        },
      },
    },
  },

  SETTINGS_ACCOUNT: {
    id: 'settings.account',
    name: 'Account Settings',
    path: '/settings/account',
    parent: 'settings',
    meta: {
      title: 'Account Settings - Notable',
      description: 'Manage your account settings',
      requiresAuth: true,
      category: 'settings',
      platforms: {
        web: {
          component: 'AccountSettingsPage',
        },
        mobile: {
          animation: 'slide',
          header: {
            title: 'Account',
            backButton: true,
          },
        },
      },
    },
  },

  SETTINGS_APPEARANCE: {
    id: 'settings.appearance',
    name: 'Appearance Settings',
    path: '/settings/appearance',
    parent: 'settings',
    meta: {
      title: 'Appearance Settings - Notable',
      description: 'Customize the app appearance',
      requiresAuth: true,
      category: 'settings',
      platforms: {
        web: {
          component: 'AppearanceSettingsPage',
        },
        mobile: {
          animation: 'slide',
          header: {
            title: 'Appearance',
            backButton: true,
          },
        },
      },
    },
  },

  // Special Routes
  QUICK_NOTE: {
    id: 'quick-note',
    name: 'Quick Note',
    path: '/quick-note',
    meta: {
      title: 'Quick Note - Notable',
      description: 'Quickly capture a note',
      requiresAuth: true,
      category: 'tools',
      platforms: {
        desktop: {
          window: {
            newWindow: true,
            size: { width: 400, height: 300 },
            properties: {
              alwaysOnTop: true,
              frame: false,
              resizable: false,
            },
          },
          menu: {
            path: 'File > Quick Note',
            accelerator: 'CmdOrCtrl+Shift+N',
          },
        },
      },
    },
  },

  // Error Routes
  NOT_FOUND: {
    id: 'not-found',
    name: 'Page Not Found',
    path: '/404',
    meta: {
      title: '404 - Page Not Found',
      description: 'The page you are looking for does not exist',
      public: true,
      requiresAuth: false,
      category: 'error',
      platforms: {
        web: {
          component: 'NotFoundPage',
        },
        mobile: {
          header: {
            title: 'Page Not Found',
            backButton: true,
          },
        },
      },
    },
  },
}

// Helper functions
export function getRouteById(id: string): RouteDefinition | undefined {
  return ROUTES[id]
}

export function getRoutesByCategory(category: string): RouteDefinition[] {
  return Object.values(ROUTES).filter(
    (route) => route.meta?.category === category,
  )
}

export function getPublicRoutes(): RouteDefinition[] {
  return Object.values(ROUTES).filter((route) => route.meta?.public === true)
}

export function getAuthRequiredRoutes(): RouteDefinition[] {
  return Object.values(ROUTES).filter(
    (route) => route.meta?.requiresAuth === true,
  )
}

export function getChildRoutes(parentId: string): RouteDefinition[] {
  return Object.values(ROUTES).filter((route) => route.parent === parentId)
}

export function getBreadcrumb(routeId: string): RouteDefinition[] {
  const breadcrumb: RouteDefinition[] = []
  let currentRoute = getRouteById(routeId)

  while (currentRoute) {
    breadcrumb.unshift(currentRoute)
    currentRoute = currentRoute.parent
      ? getRouteById(currentRoute.parent)
      : undefined
  }

  return breadcrumb
}
