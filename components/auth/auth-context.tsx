"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import type { User, Session } from "@supabase/supabase-js"
import { createClient } from "@/lib/supabase/client"
import { useToast } from "@/hooks/use-toast"

type AuthStatus = "loading" | "authenticated" | "unauthenticated"

type AuthContextType = {
  user: User | null
  session: Session | null
  status: AuthStatus
  signInWithGoogle: () => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [status, setStatus] = useState<AuthStatus>("loading")
  const supabase = createClient()
  const { toast } = useToast()

  useEffect(() => {
    const getSession = async () => {
      try {
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession()

        if (error) {
          console.error("Error getting session:", error)
          setStatus("unauthenticated")
          return
        }

        if (session) {
          setSession(session)
          setUser(session.user)
          setStatus("authenticated")
        } else {
          setStatus("unauthenticated")
        }
      } catch (error) {
        console.error("Unexpected error during getSession:", error)
        setStatus("unauthenticated")
      }
    }

    getSession()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
      setStatus(session ? "authenticated" : "unauthenticated")
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [supabase])

  const signInWithGoogle = async () => {
    try {
      setStatus("loading")
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth-handler`,
          queryParams: {
            access_type: "offline",
            prompt: "consent",
          },
        },
      })

      if (error) {
        setStatus("unauthenticated")
        toast({
          title: "Authentication error",
          description: error.message,
          variant: "destructive",
        })
      }
    } catch (error) {
      setStatus("unauthenticated")
      console.error("Error signing in with Google:", error)
      toast({
        title: "Authentication error",
        description: "Failed to sign in with Google. Please try again.",
        variant: "destructive",
      })
    }
  }

  const signOut = async () => {
    try {
      setStatus("loading")
      const { error } = await supabase.auth.signOut()

      if (error) {
        setStatus("authenticated")
        toast({
          title: "Sign out error",
          description: error.message,
          variant: "destructive",
        })
        return
      }

      setStatus("unauthenticated")
      toast({
        title: "Signed out",
        description: "You have been successfully signed out.",
      })
    } catch (error) {
      setStatus("authenticated")
      console.error("Error signing out:", error)
      toast({
        title: "Sign out error",
        description: "Failed to sign out. Please try again.",
        variant: "destructive",
      })
    }
  }

  const value = {
    user,
    session,
    status,
    signInWithGoogle,
    signOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
