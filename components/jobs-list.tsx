"use client";
import { useState, useEffect,useMemo} from "react";
import axios from "axios";

import { Filters, Job } from "@/types/filter";
import { JobCard } from "@/components/JobCard";
import { Pagination } from "@/components/pagination-job";

export function JobsList({ filters }: { filters: Filters }) {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activeFilters, setActiveFilters] = useState<Filters>(filters);
  const [appliedFilters, setAppliedFilters] = useState<Filters>(filters);
  const jobsPerPage = 90;

  useEffect(() => {
    fetchJobs();
  }, [filters]);

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

  const handleFilterChange = (filterKey: keyof Filters, value: any) => {
    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      [filterKey]: value,
    }));
  };

  const applyFilters = () => {
    setAppliedFilters(activeFilters);
    setCurrentPage(1);
  };

  const resetFilters = () => {

    setActiveFilters({...filters});
    setAppliedFilters({...filters});
    setCurrentPage(1);
  };
  
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const { title, country, salary, category_name, organization, city } = appliedFilters;
  
      const matchesTitle =
        !title || job?.title?.toLowerCase().includes(title.toLowerCase());
  
      const matchesLocation =
        !country || job?.country?.toLowerCase().includes(country.toLowerCase());
  
      const matchesCategory =
        !category_name ||
        job?.category_name?.toLowerCase().includes(category_name.toLowerCase());
  
      const matchesOrganization =
        !organization ||
        job?.organization?.toLowerCase().includes(organization.toLowerCase());
  
      const matchesCity =
        !city || job?.city?.toLowerCase().includes(city.toLowerCase());
  
        const matchesSalary =
        !salary ||
        salary.length === 0 ||
        (typeof salary[0] === 'number' && typeof salary[1] ==='number') ||
        (job.salary >= (salary[0] ?? 0) && job.salary <= (salary[1] ?? Infinity));
      
  
      return (
        matchesTitle &&
        matchesLocation &&
        matchesCategory &&
        matchesOrganization &&
        matchesSalary &&
        matchesCity
      );
    });
  }, [appliedFilters, jobs]);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  );
  {filteredJobs.length===0 &&<div className="text-center text-gray-700">No Jobs available</div>}

  if (loading) return <div className="text-center text-gray-600">Loading jobs...</div>;
  if (error) return <div className="text-red-600 text-center">{error}</div>;

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 p-4 border-b lg:border-b-0 lg:border-r border-gray-300 bg-gray-50">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Filters</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-700">Title</h3>
            <input
              type="text"
              value={activeFilters.title}
              onChange={(e) => handleFilterChange("title", e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Filter by title"
            />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700">Country</h3>
            <input
              type="text"
              value={activeFilters.country}
              onChange={(e) => handleFilterChange("country", e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Filter by country"
            />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700">Category</h3>
            <input
              type="text"
              value={activeFilters.category_name}
              onChange={(e) => handleFilterChange("category_name", e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Filter by category"
            />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700">Organization</h3>
            <input
              type="text"
              value={activeFilters.organization}
              onChange={(e) => handleFilterChange("organization", e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Filter by organization"
            />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700">City</h3>
            <input
              type="text"
              value={activeFilters.city}
              onChange={(e) => handleFilterChange("city", e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Filter by city"
            />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700">Salary Range</h3>
            <div className="flex space-x-2">
              <input
                type="number"
                value={activeFilters.salary[0]}
                onChange={(e) =>
                  handleFilterChange("salary", [
                    Number(e.target.value),
                    activeFilters.salary[1],
                  ])
                }
                className="w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Min"
              />
              <input
                type="number"
                value={activeFilters.salary[1] || ""}
                onChange={(e) =>
                  handleFilterChange("salary", [
                    activeFilters.salary[0],
                    Number(e.target.value),
                  ])
                }
                className="w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Max"
              />
            </div>
          </div>
        </div>
        <div className="mt-4 flex space-x-2 justify-start">
          <button
            onClick={applyFilters}
            className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 transition duration-200"
          >
            Apply
          </button>
          <button
            onClick={resetFilters}
            className="px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded hover:bg-gray-300 transition duration-200"
          >
            Clear All
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-3/4 p-4 space-y-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            Showing {paginatedJobs.length} of {filteredJobs.length}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
}