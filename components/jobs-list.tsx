"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Filters } from "@/types/filter";
import { Slider } from "@/components/ui/slider";
import { JobCard } from "@/components/JobCard";
import { Pagination } from "@/components/pagination-job";

export function JobsList({ filters }: { filters: Filters }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedFilters, setSelectedFilters] = useState<Filters>(filters);
  const jobsPerPage = 100;

  useEffect(() => {
      fetchJobs();
  }, [filters,currentPage]);

  function removeEmptyFilters(filters: Filters) {
    return Object.fromEntries(
      Object.entries(filters).filter(
        ([_, value]) =>
          value !== undefined &&
          value !== null &&
          value !== "" &&
          !(Array.isArray(value) && value.length === 0)
      )
    );
  }

  async function fetchJobs() {
    try {
      setLoading(true);
      const cleanFilters = removeEmptyFilters(selectedFilters);
      const response = await axios.get("/api/jobs", {
        params: {
          ...cleanFilters
        },
      }
      );
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


  //handle Filteration
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFilters({ ...selectedFilters, [e.target.name]: e.target.value });

  };

  // Apply Filters function
  const ApplyFilters = () => {
    setCurrentPage(1); // Reset to page 1 after applying filters
    // fetchJobs();
  };

  const resetFilters = () => {
    setSelectedFilters(filters); // Reset to initial filters'
    setCurrentPage(1);
  };

  const handleSalaryChange = (value: number[]) => {
    if (Array.isArray(value) && value.length === 2) {
      setSelectedFilters(prev => ({
        ...prev,
        salary: value, // Set salary as the range of numbers selected
      }));
    }
  };

  return (
    <div className="flex gap-6 h-full">
      {/* Sidebar Filter */}
      <div className="min-w-[250px] max-w-[300px]  p-4 bg-gray-50 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Filter Jobs</h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm">Category</label>
            <input
              type="text"
              name="category_name"
              value={selectedFilters.category_name}
              onChange={handleFilterChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm">Location</label>
            <input
              type="text"
              name="location"
              value={selectedFilters.location}
              onChange={handleFilterChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm">Salary</label>
            <span className="text-sm text-muted-foreground">
              ${filters.salary[0]}k - ${filters.salary[1]}k
            </span>
            <Slider
              min={300}
              value={selectedFilters.salary}
              max={3000}
              step={10}
              onValueChange={handleSalaryChange}
            />
          </div>
          <div>
            <label className="block text-sm">Title</label>
            <input
              type="text"
              name="title"
              value={selectedFilters.title}
              onChange={handleFilterChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm">Organization</label>
            <input
              type="text"
              name="organization"
              value={selectedFilters.organization}
              onChange={handleFilterChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <Button onClick={ApplyFilters} className="mt-4 w-full">
            Apply Filters
          </Button>

          <Button onClick={resetFilters} className="mt-4 w-full">
            Reset Filters
          </Button>
        </div>
      </div>

      {/* Job Listings */}
      <div className="w-3/4 space-y-10">
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

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}

