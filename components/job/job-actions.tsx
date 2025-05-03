"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookmarkIcon, Share2 } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import type { Job } from "@/types/job"

interface JobActionsProps {
  job: Job
}

export function JobActions({ job }: JobActionsProps) {
  const [isSaved, setIsSaved] = useState(false)

  const handleSave = () => {
    setIsSaved(!isSaved)
    // In a real app, this would call an API to save/unsave the job
    toast({
      title: isSaved ? "Job removed from saved jobs" : "Job saved successfully",
      description: isSaved
        ? "The job has been removed from your saved jobs."
        : "You can view all saved jobs in your profile.",
      duration: 3000,
    })
  }

  const handleApply = () => {
    // In a real app, this would navigate to the application page or open a modal
    toast({
      title: "Application started",
      description: "This would open the application form in a real app.",
      duration: 3000,
    })
  }

  const handleShare = async () => {
    const jobTitle = `${job.title} at ${job.company.name}`
    const jobUrl = window.location.href

    // Skip Web Share API and use clipboard directly
    try {
      await navigator.clipboard.writeText(jobUrl)
      toast({
        title: "Link copied to clipboard",
        description: "You can now paste the job link anywhere.",
        duration: 3000,
      })
    } catch (clipboardError) {
      console.error("Clipboard error:", clipboardError)
      // If clipboard fails, show a message with the URL
      toast({
        title: "Couldn't copy automatically",
        description: `Copy this URL manually: ${jobUrl}`,
        duration: 5000,
      })
    }
  }

  return (
    <Card className="mb-6">
      <CardContent className="p-4">
        <div className="space-y-3">
          <Button onClick={handleApply} className="w-full">
            Apply Now
          </Button>
          <div className="flex gap-3">
            <Button variant="outline" className={`flex-1 ${isSaved ? "text-primary" : ""}`} onClick={handleSave}>
              <BookmarkIcon className="h-4 w-4 mr-2" />
              {isSaved ? "Saved" : "Save"}
            </Button>
            <Button variant="outline" className="flex-1" onClick={handleShare}>
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
