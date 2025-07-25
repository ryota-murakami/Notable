'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import type { User } from '@supabase/supabase-js'

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/auth/sign-in')
      } else {
        setUser(user)
      }
      setLoading(false)
    }

    checkUser()
  }, [router, supabase])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-white">Notable Dashboard</h1>
            <button
              onClick={handleSignOut}
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Welcome back!</h2>
          <p className="text-gray-300">
            Signed in as: {user?.email}
          </p>
          
          <div className="mt-8">
            <h3 className="text-lg font-medium text-white mb-4">Your Notes</h3>
            <div className="bg-gray-700 rounded-lg p-4">
              <p className="text-gray-400 text-center">No notes yet. Start creating your first note!</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}