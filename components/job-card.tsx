import {Card,CardContent}from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import {Badge}from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import { SaveJobButton } from "./save-job-button";
import { cleanDescription } from "@/helpers/page";

export function JobCard({ job }: { job: any }) {
    return (
      <Card className="transition-shadow duration-300 hover:shadow-md border border-gray-200 rounded-lg bg-white h-[340px] flex flex-col">
        <CardContent className="p-4 flex flex-col justify-between flex-1 space-y-3 text-sm">
          <div>
            <div className="flex justify-between items-center mb-2">
              <Link href={`/jobs/${job.id}`} className="text-sm font-semibold hover:underline line-clamp-1">
                {job.title}
              </Link>
              {job.organization_logo && (
                <Image
                  src={job.organization_logo}
                  alt="logo"
                  width={32}
                  height={32}
                  className="rounded-full object-contain"
                />
              )}
            </div>
  
            <Badge variant="secondary" className="text-xs">{job.organization}</Badge>
  
            <p className="text-xs text-gray-600 mt-2 line-clamp-4">
              {cleanDescription(job.description)}
            </p>
          </div>
  
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-xs text-gray-500">{job.end_date || "Date not available"}</span>
            <div className="flex gap-2">
              <SaveJobButton jobId={job.id} jobTitle={job.title} size="sm" />
              <Link href={`/jobs/${job.encrypted_id}`}>
                <Button size="sm">View Job</Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }