'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { notablePluginSystem } from '@/lib/plugins'
import type { PluginInstance } from '@/lib/plugins'

interface PluginSystemContextType {
  plugins: PluginInstance[]
  loading: boolean
  refresh: () => Promise<void>
}

const PluginSystemContext = createContext<PluginSystemContextType | null>(null)

export function PluginSystemProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [plugins, setPlugins] = useState<PluginInstance[]>([])
  const [loading, setLoading] = useState(true)

  const refresh = async () => {
    try {
      setLoading(true)
      const pluginList = await notablePluginSystem.getPlugins()
      setPlugins(pluginList)
    } catch (error) {
      console.error('Failed to load plugins:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    refresh()
  }, [])

  return (
    <PluginSystemContext.Provider value={{ plugins, loading, refresh }}>
      {children}
    </PluginSystemContext.Provider>
  )
}

export function usePluginSystem() {
  const context = useContext(PluginSystemContext)
  if (!context) {
    throw new Error(
      'usePluginSystem must be used within a PluginSystemProvider'
    )
  }
  return context
}
