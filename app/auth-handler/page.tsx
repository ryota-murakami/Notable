"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

export default function AuthHandler() {
  const [message, setMessage] = useState("Processing authentication...")
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const handleAuth = async () => {
      try {
        // Get the code from the URL
        const url = new URL(window.location.href)
        const code = url.searchParams.get("code")

        if (!code) {
          setMessage("No authentication code found. Redirecting...")
          setTimeout(() => router.push("/"), 2000)
          return
        }

        // Exchange the code for a session
        const { error } = await supabase.auth.exchangeCodeForSession(code)

        if (error) {
          console.error("Auth error:", error)
          setMessage("Authentication failed. Redirecting...")
          setTimeout(() => router.push("/"), 2000)
          return
        }

        setMessage("Authentication successful! Redirecting...")
        setTimeout(() => router.push("/"), 1000)
      } catch (error) {
        console.error("Unexpected error during auth:", error)
        setMessage("An unexpected error occurred. Redirecting...")
        setTimeout(() => router.push("/"), 2000)
      }
    }

    handleAuth()
  }, [router, supabase.auth])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-8 text-center">
        <h1 className="text-2xl font-bold">Notable</h1>
        <div className="flex flex-col items-center space-y-4">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p>{message}</p>
        </div>
      </div>
    </div>
  )
}
