import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import striptags from "striptags";
import he from "he";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SaveJobButton } from "@/components/save-job-button";
import { Filters } from "@/types/filter";

export function JobsList({ filters }: { filters: Filters }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const jobsPerPage = 100;

  useEffect(() => {
    fetchJobs();
  }, []);

  async function fetchJobs() {
    try {
      const response = await axios.get("/api/jobs");
      setJobs(response.data.results || []);
    } catch (error: any) {
      setError(error.response?.data?.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <div className="text-center text-gray-600">Loading jobs...</div>;
  if (error) return <div className="text-red-600 text-center">{error}</div>;

  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  const paginatedJobs = jobs.slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage);

  return (
    <div className="space-y-10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          Showing {paginatedJobs.length} of {jobs.length} jobs
        </p>
        <select className="p-2 border border-gray-300 rounded-md text-sm w-full sm:w-auto">
          <option>Most Recent</option>
          <option>Highest Salary</option>
          <option>Most Relevant</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginatedJobs.map((job: any) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
}

// Helper function to clean description
function cleanDescription(html: string) {
  return he.decode(striptags(html));
}

// Compact and responsive JobCard
function JobCard({ job }: { job: any }) {
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

// Pagination Component
function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center flex-wrap gap-2 mt-6">
      <Button
        size="sm"
        variant="outline"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </Button>

      {pages.map((page) => (
        <Button
          key={page}
          size="sm"
          variant={currentPage === page ? "default" : "outline"}
          onClick={() => onPageChange(page)}
        >
          {page}
        </Button>
      ))}

      <Button
        size="sm"
        variant="outline"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  );
}
