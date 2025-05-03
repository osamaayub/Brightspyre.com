"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { Job } from "@/types/job"

interface SimilarJobsProps {
  currentJobId: string
}

export function SimilarJobs({ currentJobId }: SimilarJobsProps) {
  const [similarJobs, setSimilarJobs] = useState<Job[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchSimilarJobs = async () => {
      setIsLoading(true)
      // In a real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 800))

      // Mock data
      const jobs = Array.from({ length: 3 }, (_, i) => ({
        id: `job-${200 + i}`, // Using job-{id} format for consistency
        title: `${i % 2 === 0 ? "Senior" : ""} Software Engineer`,
        company: {
          id: `company-${(i % 3) + 1}`,
          name: `Company ${(i % 3) + 1}`,
          logo: `/placeholder.svg?height=30&width=30&text=C${(i % 3) + 1}`,
        },
        location: i % 2 === 0 ? "San Francisco, CA" : "Remote",
        remote: i % 2 === 0 ? false : true,
        type: "Full-time",
        salary: `$${100 + i * 10}k - $${150 + i * 10}k`,
        summary: "Join our team and work on exciting projects.",
        postedAt: new Date(Date.now() - i * 86400000 * 3).toISOString(),
      }))

      setSimilarJobs(jobs)
      setIsLoading(false)
    }

    fetchSimilarJobs()
  }, [currentJobId])

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Similar Jobs</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-start space-x-3">
                <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="space-y-2 flex-1">
                  <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-3 w-1/2 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {similarJobs.map((job) => (
              <Link key={job.id} href={`/jobs/${job.id}`} className="block group">
                <div className="flex items-start space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={job.company.logo || "/placeholder.svg"} alt={job.company.name} />
                    <AvatarFallback>{job.company.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-sm font-medium group-hover:text-primary">{job.title}</h3>
                    <p className="text-xs text-gray-500">
                      {job.company.name} • {job.location}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
