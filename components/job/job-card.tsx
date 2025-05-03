"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookmarkIcon } from "lucide-react"
import { formatDistanceToNow } from "date-fns"
import type { Job } from "@/types/job"

interface JobCardProps {
  job: Job
  isSaved?: boolean
  onSave?: (jobId: string) => void
}

export function JobCard({ job, isSaved = false, onSave }: JobCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center">
            <Avatar className="h-12 w-12 mr-4">
              <AvatarImage src={job.company.logo || "/placeholder.svg"} alt={job.company.name} />
              <AvatarFallback>{job.company.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <Link href={`/jobs/${job.id}`} className="hover:underline">
                <h3 className="text-lg font-semibold">{job.title}</h3>
              </Link>
              <Link href={`/companies/${job.company.id}`} className="text-sm text-gray-500 hover:underline">
                {job.company.name}
              </Link>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onSave?.(job.id)}
            className={isSaved ? "text-primary" : "text-gray-400"}
          >
            <BookmarkIcon className="h-5 w-5" />
            <span className="sr-only">{isSaved ? "Unsave" : "Save"} job</span>
          </Button>
        </div>

        <div className="mt-4">
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge variant="secondary">{job.type}</Badge>
            {job.remote && <Badge variant="secondary">Remote</Badge>}
            <Badge variant="outline">{job.location}</Badge>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2">{job.summary}</p>
        </div>
      </CardContent>

      <CardFooter className="bg-gray-50 px-6 py-3 flex justify-between items-center">
        <div className="text-sm text-gray-500">
          Posted {formatDistanceToNow(new Date(job.postedAt), { addSuffix: true })}
        </div>
        <Link href={`/jobs/${job.id}`}>
          <Button size="sm">View Job</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
