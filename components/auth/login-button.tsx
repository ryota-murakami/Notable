"use client"

import { Button } from "@/components/ui/button"
import { useAuth } from "@/components/auth/auth-context"
import { LogIn } from "lucide-react"

interface LoginButtonProps {
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
}

export function LoginButton({ variant = "default", size = "default" }: LoginButtonProps) {
  const { signInWithGoogle, status } = useAuth()
  const isLoading = status === "loading"

  return (
    <Button variant={variant} size={size} onClick={signInWithGoogle} disabled={isLoading} className="w-full">
      {isLoading ? (
        <span className="flex items-center justify-center">
          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-b-transparent"></span>
          Connecting...
        </span>
      ) : (
        <span className="flex items-center justify-center">
          <LogIn className="mr-2 h-4 w-4" />
          Sign in with Google
        </span>
      )}
    </Button>
  )
}
