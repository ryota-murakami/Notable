'use client'

import { useAuth } from '@/providers/auth-provider'
import Link from 'next/link'

export default function HomePage() {
  const { user, loading, signOut } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!user) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-4xl mx-auto p-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Notable
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            The Notion Clone but Better Experience than Original
          </p>
          <div className="space-y-4 mb-8">
            <Link
              href="/login"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="inline-block ml-4 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Sign Up
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Keyboard Shortcuts Available
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div>
                <h3 className="font-medium text-gray-700 mb-2">General</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li><kbd className="bg-gray-100 px-2 py-1 rounded">Cmd+Shift+P</kbd> - Open command palette</li>
                  <li><kbd className="bg-gray-100 px-2 py-1 rounded">Cmd+/</kbd> - Show keyboard shortcuts</li>
                  <li><kbd className="bg-gray-100 px-2 py-1 rounded">Cmd+K</kbd> - Search notes</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Notes</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li><kbd className="bg-gray-100 px-2 py-1 rounded">Cmd+N</kbd> - Create new note</li>
                  <li><kbd className="bg-gray-100 px-2 py-1 rounded">Cmd+E</kbd> - Toggle edit/view mode</li>
                  <li><kbd className="bg-gray-100 px-2 py-1 rounded">Cmd+,</kbd> - Toggle sidebar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">Notable</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Welcome, {user.email}
              </span>
              <button
                onClick={signOut}
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Your Notes Dashboard
          </h2>
          <p className="text-gray-600 mb-6">
            Welcome to Notable! Your authenticated dashboard is ready.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-700 mb-2">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full text-left px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                  Create New Note
                </button>
                <button className="w-full text-left px-3 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors">
                  Search Notes
                </button>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-700 mb-2">Recent Activity</h3>
              <p className="text-sm text-gray-500">No recent notes yet. Create your first note to get started!</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}