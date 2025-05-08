"use client"

import { LoginButton } from "@/components/auth/login-button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Lock, Globe } from "lucide-react"

export function LoginView() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">Notable</h1>
          <p className="mt-2 text-lg text-muted-foreground">A modern note-taking application</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-center">Sign in to Notable</CardTitle>
            <CardDescription className="text-center">Access your notes securely from anywhere</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Secure Note Storage</h3>
                      <p className="text-sm text-muted-foreground">Your notes are encrypted and stored securely</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Access Anywhere</h3>
                      <p className="text-sm text-muted-foreground">Sync across all your devices</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Lock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Private & Secure</h3>
                      <p className="text-sm text-muted-foreground">Your data belongs only to you</p>
                    </div>
                  </div>
                </div>
              </div>

              <LoginButton />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <div className="text-xs text-muted-foreground text-center">
              By signing in, you agree to our Terms of Service and Privacy Policy.
            </div>
          </CardFooter>
        </Card>

        <div className="flex justify-center">
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
