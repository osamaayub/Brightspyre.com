"use client";
import { useState, useEffect } from "react";

import axios from "axios";


import { Filters } from "@/types/filter";
import { JobCard } from "./job-card";
import { Pagination } from "./pagination-card";


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





