"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

interface ApplyButtonProps {
  jobId: string
  jobTitle: string
  company: string
}

export function ApplyButton({ jobId, jobTitle, company }: ApplyButtonProps) {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setOpen(false)

    toast({
      title: "Application submitted",
      description: `Your application for ${jobTitle} at ${company} has been submitted successfully.`,
    })
  }

  return (
    <>
      <Button onClick={() => setOpen(true)} className="w-full">
        Apply Now
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="mt-4">Apply for {jobTitle}</DialogTitle>
            <DialogDescription>Complete the form below to apply for this position at {company}.</DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="flex flex-col flex-wrap gap-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone number</Label>
              <Input id="phone" type="tel" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="resume">Resume</Label>
              <Input id="resume" type="file" accept=".pdf,.doc,.docx" required />
              <p className="text-xs text-muted-foreground mt-1">Accepted formats: PDF, DOC, DOCX. Max size: 5MB.</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cover-letter">Cover letter (optional)</Label>
              <Textarea id="cover-letter" rows={5} placeholder="Tell us why you're a good fit for this position" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="linkedin">LinkedIn profile (optional)</Label>
              <Input id="linkedin" type="url" placeholder="https://linkedin.com/in/yourprofile" />
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
