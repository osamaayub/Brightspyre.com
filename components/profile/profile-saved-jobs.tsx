"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { JobCard } from "@/components/job/job-card"
import { toast } from "@/components/ui/use-toast"
import Link from "next/link"
import type { Job } from "@/types/job"

export function ProfileSavedJobs() {
  const [savedJobs, setSavedJobs] = useState<Job[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchSavedJobs = async () => {
      setIsLoading(true)
      // In a real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 800))

      // Mock data
      const mockSavedJobs: Job[] = [
        {
          id: "job-10",
          title: "Senior Frontend Developer",
          company: {
            id: "company-1",
            name: "Tech Company 1",
            logo: "/placeholder.svg?height=40&width=40&text=TC1",
          },
          location: "San Francisco, CA",
          remote: false,
          type: "Full-time",
          salary: "$120k - $150k",
          summary: "Join our team as a Senior Frontend Developer and help build amazing user experiences.",
          postedAt: new Date(Date.now() - 5 * 86400000).toISOString(), // 5 days ago
        },
        {
          id: "job-20",
          title: "Full Stack Engineer",
          company: {
            id: "company-2",
            name: "Tech Company 2",
            logo: "/placeholder.svg?height=40&width=40&text=TC2",
          },
          location: "Remote",
          remote: true,
          type: "Full-time",
          salary: "$100k - $130k",
          summary: "We're looking for a Full Stack Engineer to join our growing team.",
          postedAt: new Date(Date.now() - 3 * 86400000).toISOString(), // 3 days ago
        },
      ]

      setSavedJobs(mockSavedJobs)
      setIsLoading(false)
    }

    fetchSavedJobs()
  }, [])

  const handleUnsaveJob = (jobId: string) => {
    setSavedJobs((prev) => prev.filter((job) => job.id !== jobId))
    toast({
      title: "Job removed",
      description: "The job has been removed from your saved jobs.",
    })
  }

  if (isLoading) {
    return (
      <div className="space-y-6">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="h-48 rounded-lg border border-gray-200 bg-gray-100 animate-pulse"></div>
        ))}
      </div>
    )
  }

  if (savedJobs.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>No Saved Jobs</CardTitle>
          <CardDescription>
            You haven't saved any jobs yet. Browse jobs and save the ones you're interested in to come back to them
            later.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild>
            <Link href="/jobs">Browse Jobs</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {savedJobs.map((job) => (
        <JobCard key={job.id} job={job} isSaved={true} onSave={handleUnsaveJob} />
      ))}
    </div>
  )
}
