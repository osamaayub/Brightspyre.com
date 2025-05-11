import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { SaveJobButton } from "./save-job-button"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cleanDescription } from "@/helpers/page"
import Image from "next/image"
import { Building, MapPin, Clock } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

export function JobCard({ job, className }: { job: any; className?: string }) {
  return (
    <Card className={cn("h-full overflow-hidden transition-all hover:border-primary/50 hover:shadow-md", className)}>
      <CardContent className="p-5 pt-5 flex flex-col h-full">
        {/* Company Logo & Info */}
        <div className="flex items-start gap-3 mb-3">
          <div className="relative h-12 w-12 rounded-md overflow-hidden bg-muted flex items-center justify-center shrink-0">
            {job.organization_logo?.startsWith("http") ? (
              <Image
                src={job.organization_logo || "/placeholder.svg"}
                alt={`${job.organization} Logo`}
                fill
                className="object-cover"
                sizes="48px"
                onError={(e) => {
                  // Fallback if image fails to load
                  e.currentTarget.src = `https://avatar.vercel.sh/${job.organization}`
                }}
              />
            ) : (
              <Building className="h-6 w-6 text-muted-foreground" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-base line-clamp-1 mb-1">
              <Link href={`/jobs/${job.id}`} className="hover:underline focus:outline-none focus:underline">
                {job.title}
              </Link>
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-1">{job.organization}</p>
          </div>
          <SaveJobButton jobId={job.id} jobTitle={job.title} variant="ghost" size="icon" className="h-8 w-8" />
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-grow">
          {cleanDescription(job.description || "")}
        </p>

        {/* Job Details */}
        <div className="space-y-2 mb-4">
          {job.city && (
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-muted-foreground">
                {job.city}
                {job.country && `, ${job.country}`}
              </span>
            </div>
          )}
          {job.posted_at && (
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-muted-foreground">
                {new Date(job.posted_at).toLocaleDateString(undefined, {
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {job.job_type && (
            <Badge variant="outline" className="font-normal">
              {job.job_type}
            </Badge>
          )}
          {job.category_name && (
            <Badge variant="secondary" className="font-normal">
              {job.category_name}
            </Badge>
          )}
          {job.remote && <Badge className="bg-green-100 text-green-800 hover:bg-green-200 font-normal">Remote</Badge>}
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0 flex justify-between items-center border-t bg-muted/10">
        <Button asChild size="sm">
          <Link href={`/jobs/${job.id}`}>View Details</Link>
        </Button>
        <span className="text-xs text-muted-foreground">
          {job.salary_range ? job.salary_range : job.experience_level ? job.experience_level : ""}
        </span>
      </CardFooter>
    </Card>
  )
}

export function JobCardSkeleton() {
  return (
    <Card className="h-full overflow-hidden">
      <CardContent className="p-5 pt-5 flex flex-col h-full">
        <div className="flex items-start gap-3 mb-3">
          <Skeleton className="h-12 w-12 rounded-md" />
          <div className="flex-1">
            <Skeleton className="h-5 w-3/4 mb-2" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
        <div className="space-y-2 mb-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
        <div className="space-y-2 mb-4">
          <Skeleton className="h-3 w-1/3" />
          <Skeleton className="h-3 w-1/4" />
        </div>
        <div className="flex gap-2 mb-4">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
        </div>
      </CardContent>
      <CardFooter className="p-5 pt-0 flex justify-between items-center border-t">
        <Skeleton className="h-9 w-24 rounded" />
        <Skeleton className="h-4 w-16" />
      </CardFooter>
    </Card>
  )
}

export function JobCardGrid({ jobs, isLoading = false }: { jobs: any[]; isLoading?: boolean }) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array(8)
          .fill(0)
          .map((_, i) => (
            <JobCardSkeleton key={i} />
          ))}
      </div>
    )
  }

  if (jobs.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium mb-2">No jobs found</h3>
        <p className="text-muted-foreground">Try adjusting your search filters</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  )
}

export function FeaturedJobCard({ job, className }: { job: any; className?: string }) {
  return (
    <Card
      className={cn(
        "overflow-hidden border-primary/20 bg-primary/5 transition-all hover:border-primary/50 hover:shadow-md",
        className,
      )}
    >
      <CardContent className="p-5 pt-5">
        <div className="flex items-start gap-4">
          <div className="relative h-14 w-14 rounded-md overflow-hidden bg-muted flex items-center justify-center shrink-0">
            {job.organization_logo?.startsWith("http") ? (
              <Image
                src={job.organization_logo || "/placeholder.svg"}
                alt={`${job.organization} Logo`}
                fill
                className="object-cover"
                sizes="56px"
                onError={(e) => {
                  e.currentTarget.src = `https://avatar.vercel.sh/${job.organization}`
                }}
              />
            ) : (
              <Building className="h-7 w-7 text-muted-foreground" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <Badge className="mb-2 bg-primary/20 text-primary hover:bg-primary/30 font-normal">Featured</Badge>
            <h3 className="font-medium text-base line-clamp-1 mb-1">
              <Link href={`/jobs/${job.id}`} className="hover:underline focus:outline-none focus:underline">
                {job.title}
              </Link>
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-1 mb-2">{job.organization}</p>

            <div className="flex flex-wrap gap-1.5 mt-3">
              {job.job_type && (
                <Badge variant="outline" className="font-normal">
                  {job.job_type}
                </Badge>
              )}
              {job.category_name && (
                <Badge variant="secondary" className="font-normal">
                  {job.category_name}
                </Badge>
              )}
              {job.remote && (
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200 font-normal">Remote</Badge>
              )}
            </div>
          </div>
          <SaveJobButton jobId={job.id} jobTitle={job.title} variant="ghost" size="icon" className="h-8 w-8" />
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-3">
            {job.city && (
              <div className="flex items-center gap-1 text-sm">
                <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-muted-foreground">{job.city}</span>
              </div>
            )}
            {job.posted_at && (
              <div className="flex items-center gap-1 text-sm">
                <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  {new Date(job.posted_at).toLocaleDateString(undefined, {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
            )}
          </div>
          <Button asChild size="sm">
            <Link href={`/jobs/${job.id}`}>View Details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
