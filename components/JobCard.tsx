import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { SaveJobButton } from "./save-job-button";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cleanDescription } from "@/helpers/page";
import { Badge } from "@/components/ui/badge";

export function JobCard({ job }: { job: any }) {
  return (
    <Card className="flex flex-col justify-between w-full h-full shadow-lg border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
      <CardContent className="p-6 flex flex-col space-y-4 h-full">
        {/* Header with Logo */}
        <div className="flex items-center justify-between">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100">
            {typeof job.organization_logo === 'string' && job.organization_logo.startsWith('http') && (
              <Image
                src={job.organization_logo}
                alt="Organization Logo"
                width={48}
                height={48}
                className="rounded-full"
              />
            )}
          </div>
          <div className="flex flex-col flex-nowrap items-end">
            <p className="text-sm text-gray-500 whitespace-nowrap">{job.organizaion}</p>
            <p className="text-xs text-gray-400">{job.country}</p>
          </div>
        </div>

        {/* Job Info */}
        <div className="flex flex-col flex-grow space-y-2">
          <h3 className="text-base font-semibold text-gray-800 truncate">
            <Link href={`/jobs/${job.id}`} className="hover:text-blue-600 whitespace-nowrap transition-colors">
              {job.title}
            </Link>
          </h3>
          <p className="text-sm text-gray-600 line-clamp-3">{cleanDescription(job.description)}</p>

          {/* Location & Category */}
          <div className="flex  gap-2  pt-2">
            {job.city && <Badge className="bg-blue-100 whitespace-nowrap text-blue-800">{job.city}</Badge>}
            {job.category_name && <Badge className="bg-green-100 whitespace-nowrap mr-2 text-green-800">{job.category_name}</Badge>}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto flex flex-col sm:flex-row sm:items-center sm:gap-3 sm:justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
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
