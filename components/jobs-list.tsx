"use client";
import { useState, useEffect } from "react";

import axios from "axios";
import { Button } from "@/components/ui/button";

import { Filters } from "@/types/filter";
import { JobCard } from "./job-card";


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
