"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { formatDistanceToNow } from "date-fns"
import Link from "next/link"

interface Application {
  id: string
  jobId: string
  jobTitle: string
  company: {
    id: string
    name: string
    logo: string
  }
  status: "applied" | "reviewing" | "interview" | "offer" | "rejected"
  appliedAt: string
}

export function ProfileApplications() {
  const [applications, setApplications] = useState<Application[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchApplications = async () => {
      setIsLoading(true)
      // In a real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 800))

      // Mock data
      const mockApplications: Application[] = [
        {
          id: "app-1",
          jobId: "job-1",
          jobTitle: "Senior Frontend Developer",
          company: {
            id: "company-1",
            name: "Tech Company 1",
            logo: "/placeholder.svg?height=40&width=40&text=TC1",
          },
          status: "interview",
          appliedAt: new Date(Date.now() - 7 * 86400000).toISOString(), // 7 days ago
        },
        {
          id: "app-2",
          jobId: "job-2",
          jobTitle: "Full Stack Engineer",
          company: {
            id: "company-2",
            name: "Tech Company 2",
            logo: "/placeholder.svg?height=40&width=40&text=TC2",
          },
          status: "applied",
          appliedAt: new Date(Date.now() - 2 * 86400000).toISOString(), // 2 days ago
        },
        {
          id: "app-3",
          jobId: "job-3",
          jobTitle: "Backend Developer",
          company: {
            id: "company-3",
            name: "Tech Company 3",
            logo: "/placeholder.svg?height=40&width=40&text=TC3",
          },
          status: "rejected",
          appliedAt: new Date(Date.now() - 14 * 86400000).toISOString(), // 14 days ago
        },
      ]

      setApplications(mockApplications)
      setIsLoading(false)
    }

    fetchApplications()
  }, [])

  const getStatusColor = (status: Application["status"]) => {
    switch (status) {
      case "applied":
        return "bg-blue-100 text-blue-800"
      case "reviewing":
        return "bg-purple-100 text-purple-800"
      case "interview":
        return "bg-green-100 text-green-800"
      case "offer":
        return "bg-yellow-100 text-yellow-800"
      case "rejected":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-200"></div>
                <div className="space-y-2 flex-1">
                  <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                  <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
                </div>
                <div className="h-6 w-20 bg-gray-200 rounded"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (applications.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>No Applications Yet</CardTitle>
          <CardDescription>
            You haven't applied to any jobs yet. Start your job search and apply to positions that match your skills and
            interests.
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
    <div className="space-y-4">
      {applications.map((application) => (
        <Card key={application.id}>
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={application.company.logo || "/placeholder.svg"} alt={application.company.name} />
                <AvatarFallback>{application.company.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <Link href={`/jobs/${application.jobId}`} className="font-medium hover:underline">
                  {application.jobTitle}
                </Link>
                <div className="text-sm text-gray-500">
                  <Link href={`/companies/${application.company.id}`} className="hover:underline">
                    {application.company.name}
                  </Link>{" "}
                  • Applied {formatDistanceToNow(new Date(application.appliedAt), { addSuffix: true })}
                </div>
              </div>
              <Badge className={getStatusColor(application.status)}>
                {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
              </Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
