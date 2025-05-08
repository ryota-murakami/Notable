"use client"

import { useState, useRef } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"

interface ImageUploadProps {
  isOpen: boolean
  onClose: () => void
  onInsert: (url: string, alt: string) => void
}

export function ImageUpload({ isOpen, onClose, onInsert }: ImageUploadProps) {
  const [tab, setTab] = useState<"upload" | "url">("upload")
  const [imageUrl, setImageUrl] = useState("")
  const [altText, setAltText] = useState("")
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { toast } = useToast()

  const handleUpload = async () => {
    const fileInput = fileInputRef.current
    if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
      toast({
        title: "No file selected",
        description: "Please select an image file to upload.",
        variant: "destructive",
      })
      return
    }

    const file = fileInput.files[0]
    if (!file.type.startsWith("image/")) {
      toast({
        title: "Invalid file type",
        description: "Please select an image file.",
        variant: "destructive",
      })
      return
    }

    setIsUploading(true)

    try {
      // In a real app, you would upload to a server or cloud storage
      // For this demo, we'll create a data URL
      const reader = new FileReader()
      reader.onload = (e) => {
        if (e.target && typeof e.target.result === "string") {
          onInsert(e.target.result, altText)
          resetAndClose()
        }
      }
      reader.readAsDataURL(file)
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "There was an error uploading your image.",
        variant: "destructive",
      })
    } finally {
      setIsUploading(false)
    }
  }

  const handleUrlInsert = () => {
    if (!imageUrl) {
      toast({
        title: "No URL provided",
        description: "Please enter an image URL.",
        variant: "destructive",
      })
      return
    }

    onInsert(imageUrl, altText)
    resetAndClose()
  }

  const resetAndClose = () => {
    setImageUrl("")
    setAltText("")
    setTab("upload")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Insert Image</DialogTitle>
        </DialogHeader>
        <Tabs value={tab} onValueChange={(value) => setTab(value as "upload" | "url")}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upload">Upload</TabsTrigger>
            <TabsTrigger value="url">URL</TabsTrigger>
          </TabsList>
          <TabsContent value="upload" className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="image-upload">Select Image</Label>
              <Input ref={fileInputRef} id="image-upload" type="file" accept="image/*" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="alt-text-upload">Alt Text</Label>
              <Input
                id="alt-text-upload"
                value={altText}
                onChange={(e) => setAltText(e.target.value)}
                placeholder="Describe the image"
              />
            </div>
          </TabsContent>
          <TabsContent value="url" className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="image-url">Image URL</Label>
              <Input
                id="image-url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="https://example.com/image.jpg"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="alt-text-url">Alt Text</Label>
              <Input
                id="alt-text-url"
                value={altText}
                onChange={(e) => setAltText(e.target.value)}
                placeholder="Describe the image"
              />
            </div>
          </TabsContent>
        </Tabs>
        <DialogFooter>
          <Button variant="outline" onClick={resetAndClose}>
            Cancel
          </Button>
          <Button onClick={tab === "upload" ? handleUpload : handleUrlInsert} disabled={isUploading}>
            {isUploading ? "Uploading..." : "Insert"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
