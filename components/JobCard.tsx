import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { SaveJobButton } from "./save-job-button";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cleanDescription } from "@/helpers/page";
import { Badge } from "@/components/ui/badge";

export function JobCard({ job }: { job: any }) {
  return (
    <Card className="flex flex-col justify-between h-full shadow-md border rounded-xl">
      <CardContent className="p-5 flex flex-col space-y-4 h-full">
        {/* Header with Logo */}
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
            {typeof job.organization_logo === 'string' && job.organization_logo.startsWith('http') && (
              <Image
                src={job.organization_logo}
                alt="Organization Logo"
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
            )}
          </div>
        </div>

        {/* Job Info */}
        <div className="flex flex-col flex-grow space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">
            <Link href={`/jobs/${job.id}`} className="hover:underline">
              {job.title}
            </Link>
          </h3>
          <p className="text-sm text-gray-600 line-clamp-3">
            {cleanDescription(job.description || "")}
          </p>

          {/* Location & Category */}
          <div className="flex flex-wrap gap-2 pt-2">
            {job.city && <Badge className="bg-blue-100 text-blue-800">{job.city}</Badge>}
            {job.category_name && <Badge className="bg-green-100 text-green-800">{job.category_name}</Badge>}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto flex flex-wrap gap-3">
          <p className="text-sm text-gray-500 mb-2">{job.organization}</p>
          <p className="text-sm text-gray-500 mb-2 whitespace-nowrap">{job.country}</p>
          <div className="flex items-center gap-3">
            <SaveJobButton jobId={job.id} jobTitle={job.title} />
            <Link href={`/jobs/${job.encrypted_id}`}>
              <Button size="sm" className="text-sm">View Job</Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
