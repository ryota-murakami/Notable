import type { RouteDefinition } from './types'

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
        },
        mobile: {
          animation: 'fade',
        },
        desktop: {
          showInMenu: true,
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
        },
        mobile: {
          animation: 'slide',
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
          showTabBar: true,
        },
        desktop: {
          showInMenu: true,
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
        },
        mobile: {
          animation: 'slide',
        },
        desktop: {
          window: {
            resizable: true,
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
        },
        mobile: {
          animation: 'slide',
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
        },
        desktop: {
          showInMenu: true,
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
          showTabBar: true,
        },
        desktop: {
          showInMenu: true,
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
          showTabBar: true,
        },
        desktop: {
          showInMenu: true,
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
            width: 400,
            height: 300,
            resizable: false,
          },
          showInMenu: true,
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
          animation: 'slide',
        },
      },
    },
  },
}

// Helper functions
export function getRouteById(id: string): RouteDefinition | undefined {
  return ROUTES[id]
}

