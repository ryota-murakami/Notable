"use client"

import { useState } from "react"
import { useAuth } from "@/components/auth/auth-context"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOut, User, Settings } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function UserProfile() {
  const { user, signOut, status } = useAuth()
  const [isSigningOut, setIsSigningOut] = useState(false)

  if (!user) return null

  const handleSignOut = async () => {
    setIsSigningOut(true)
    await signOut()
    setIsSigningOut(false)
  }

  // Get user initials for avatar fallback
  const getInitials = () => {
    const name = user.user_metadata?.full_name || user.email || ""
    if (!name) return "U"

    const parts = name.split(" ")
    if (parts.length > 1) {
      return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
    }
    return name.substring(0, 2).toUpperCase()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.user_metadata?.avatar_url || ""} alt={user.email || "User"} />
            <AvatarFallback>{getInitials()}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.user_metadata?.full_name || user.email}</p>
            <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
            <div className="mt-1">
              <Badge variant="outline" className="text-xs">
                Google Account
              </Badge>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Button variant="ghost" className="w-full justify-start cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            Profile
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Button variant="ghost" className="w-full justify-start cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Button
            variant="ghost"
            className="w-full justify-start cursor-pointer"
            disabled={isSigningOut}
            onClick={handleSignOut}
          >
            {isSigningOut ? (
              <span className="flex items-center">
                <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-b-transparent"></span>
                Signing out...
              </span>
            ) : (
              <span className="flex items-center">
                <LogOut className="mr-2 h-4 w-4" />
                Sign out
              </span>
            )}
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
