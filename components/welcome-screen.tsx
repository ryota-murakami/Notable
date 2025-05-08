"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, FolderTree, Search, Tag, Download, Moon } from "lucide-react"

interface WelcomeScreenProps {
  onCreateNote: () => void
}

export function WelcomeScreen({ onCreateNote }: WelcomeScreenProps) {
  return (
    <div className="flex-1 flex items-center justify-center p-6">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle className="text-2xl">Welcome to Notable</CardTitle>
          <CardDescription>A modern note-taking application for organizing your thoughts and ideas</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Rich Text Editing</h3>
                <p className="text-sm text-muted-foreground">Format your notes with headings, lists, tasks, and more</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <FolderTree className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Hierarchical Organization</h3>
                <p className="text-sm text-muted-foreground">Organize notes in nested folders for better structure</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Search className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Powerful Search</h3>
                <p className="text-sm text-muted-foreground">
                  Quickly find notes with full-text search across all content
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Tag className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Tagging System</h3>
                <p className="text-sm text-muted-foreground">Add tags to notes for flexible categorization</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Download className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Export Options</h3>
                <p className="text-sm text-muted-foreground">
                  Export your notes in Markdown, HTML, or plain text formats
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Moon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Dark Mode</h3>
                <p className="text-sm text-muted-foreground">
                  Switch between light and dark themes for comfortable viewing
                </p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={onCreateNote} className="w-full">
            Create Your First Note
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
