import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { MapPin, Building, Clock, DollarSign } from "lucide-react"
import { formatDistanceToNow } from "date-fns"
import type { Job } from "@/types/job"

interface JobHeaderProps {
  job: Job
}

export function JobHeader({ job }: JobHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <Avatar className="h-16 w-16 mr-4">
            <AvatarImage src={job.company.logo || "/placeholder.svg"} alt={job.company.name} />
            <AvatarFallback>{job.company.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">{job.title}</h1>
            <Link href={`/companies/${job.company.id}`} className="text-primary hover:underline">
              {job.company.name}
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
        <div className="flex items-center">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center">
          <Building className="h-4 w-4 mr-1" />
          <span>{job.type}</span>
        </div>
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          <span>Posted {formatDistanceToNow(new Date(job.postedAt), { addSuffix: true })}</span>
        </div>
        <div className="flex items-center">
          <DollarSign className="h-4 w-4 mr-1" />
          <span>{job.salary}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {job.remote && <Badge>Remote</Badge>}
        {job.skills?.map((skill) => (
          <Badge key={skill} variant="outline">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  )
}
