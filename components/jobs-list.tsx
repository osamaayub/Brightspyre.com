"use client";
import { useState, useEffect, useMemo } from "react";


import { useState, useEffect,useMemo} from "react";

import axios from "axios";

import { Filters, Job } from "@/types/filter";
import  JobCard  from "@/components/JobCard";
import { Pagination } from "@/components/pagination-job";

export function JobsList({ filters }: { filters: Filters }) {
  const [jobs, setJobs] = useState<Job[]>([]);

import { useState, useEffect } from "react";
import axios from "axios";

import { Filters } from "@/types/filter";
import { JobCard } from "./job-card";
import { Pagination } from "./pagination-card";

export function JobsList({ filters }: { filters: Filters }) {
  const [jobs, setJobs] = useState<any[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activeFilters, setActiveFilters] = useState<Filters>(filters);
  const [appliedFilters, setAppliedFilters] = useState<Filters>(filters);
  const jobsPerPage = 90;

  // Toggle state for all filter sections
  const [filterToggles, setFilterToggles] = useState({
    category: true,
    organization: true,
    city: true,
  });

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
  const handleFilterChange = (filterKey: keyof Filters, value: string[]) => {
    setActiveFilters((prev) => ({ ...prev, [filterKey]: value }));

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

  const resetFilters =() => {
    const emptyFilters = { category_name: [], organization: [], city: [] };
    setActiveFilters(emptyFilters);
    setAppliedFilters(emptyFilters);
    setCurrentPage(1);
  }

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const { category_name, organization, city } = appliedFilters;

      const matchesCategory =
        category_name.length === 0 || category_name.includes(job.category_name.toLowerCase());

      const matchesOrganization =
        organization.length === 0 || organization.includes(job.organization.toLowerCase());

      const matchesCity =
        city.length === 0 || city.includes(job.city.toLowerCase());

      return matchesCategory && matchesOrganization && matchesCity;
    });
  }, [appliedFilters, jobs]);

  const uniqueCategories = useMemo(() => {
    const categories = jobs.map((job) => job.category_name?.toLowerCase());
    return Array.from(new Set(categories)).filter(Boolean);
  }, [jobs]);

  const uniqueOrganizations = useMemo(() => {
    const orgs = jobs.map((job) => job.organization?.toLowerCase());
    return Array.from(new Set(orgs)).filter(Boolean);
  }, [jobs]);

  const uniqueCities = useMemo(() => {
    const cities = jobs.flatMap((job) => {
      if (!job.city) return [];
  
      return job.city
        .split(',')
        .map(str => str.trim().toLowerCase()) // trim + lowercase
        .filter(Boolean); // remove empty strings
    });
  
    return Array.from(new Set(cities)); // remove duplicates
  }, [jobs]);
  
  
  
 

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  };

  const resetFilters = () => {
    setActiveFilters(filters);
    setAppliedFilters(filters);
  };

  const filteredJobs = jobs.filter((job) => {
    const { title, country, salary, category_name, organization, city } = appliedFilters;

    const matchesTitle =
      !title || job.title?.toLowerCase().includes(title.toLowerCase());
    const matchesLocation =
      !country || job.country?.toLowerCase().includes(country.toLowerCase());
    const matchesCategory =
      !category_name ||
      job.category_name?.toLowerCase().includes(category_name.toLowerCase());
    const matchesOrganization =
      !organization ||
      job.organization?.toLowerCase().includes(organization.toLowerCase());
    const matchesCity =
      !city || job.city?.toLowerCase().includes(city.toLowerCase());
    const matchesSalary =
      salary.length === 0 ||
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

  const totalPages = Math.ceil(jobs.length / jobsPerPage);

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
          {/* Category Filter */}
          <div>

            <h3
              className="text-sm font-medium text-gray-700 mb-2 cursor-pointer"
              onClick={() =>
                setFilterToggles((prev) => ({ ...prev, category: !prev.category }))
              }
            >
              {filterToggles.category ? "▲" : "▼"} Category
            </h3>
            {filterToggles.category && (
              <div className="flex flex-col gap-1 max-h-48 overflow-y-auto">
                {uniqueCategories.map((category) => (
                  <label key={category} className="flex items-center text-sm text-gray-600">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={activeFilters.category_name.includes(category)}
                      onChange={(e) => {
                        const updated = e.target.checked
                          ? [...activeFilters.category_name, category]
                          : activeFilters.category_name.filter((c) => c !== category);
                        handleFilterChange("category_name", updated);
                      }}
                    />
                    {category}
                  </label>
                ))}
              </div>
            )}

            <h3 className="text-sm font-medium text-gray-700">Title</h3>
            <input
              type="text"

              value={activeFilters.title}

              value={activeFilters.title || ""}

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

              value={activeFilters.country || ""}

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

              value={activeFilters.category_name || ""}

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

              value={activeFilters.organization || ""}

              onChange={(e) => handleFilterChange("organization", e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Filter by organization"
            />

          </div>

          {/* Organization Filter */}
          <div>

            <h3
              className="text-sm font-medium text-gray-700 mb-2 cursor-pointer"
              onClick={() =>
                setFilterToggles((prev) => ({ ...prev, organization: !prev.organization }))
              }
            >
              {filterToggles.organization ? "▲" : "▼"} Organization
            </h3>
            {filterToggles.organization && (
              <div className="flex flex-col gap-1 max-h-48 overflow-y-auto">
                {uniqueOrganizations.map((org) => (
                  <label key={org} className="flex items-center text-sm text-gray-600">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={activeFilters.organization.includes(org)}
                      onChange={(e) => {
                        const updated = e.target.checked
                          ? [...activeFilters.organization, org]
                          : activeFilters.organization.filter((o) => o !== org);
                        handleFilterChange("organization", updated);
                      }}
                    />
                    {org}
                  </label>
                ))}
              </div>
            )}

            <h3 className="text-sm font-medium text-gray-700">City</h3>
            <input
              type="text"

              value={activeFilters.city}

              value={activeFilters.city || ""}

              onChange={(e) => handleFilterChange("city", e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Filter by city"
           
          </div>

          {/* City Filter */}
          <div>

            <h3
              className="text-sm font-medium text-gray-700 mb-2 cursor-pointer"
              onClick={() =>
                setFilterToggles((prev) => ({ ...prev, city: !prev.city }))
              }
            >
              {filterToggles.city ? "▲" : "▼"} City
            </h3>
            {filterToggles.city && (
              <div className="flex flex-col gap-1 max-h-48 overflow-y-auto">
                {uniqueCities.map((city) => (
                  <label key={city} className="flex items-center text-sm text-gray-600">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={activeFilters.city.includes(city)}
                      onChange={(e) => {
                        const updated = e.target.checked
                          ? [...activeFilters.city, city]
                          : activeFilters.city.filter((c) => c !== city);
                        handleFilterChange("city", updated);
                      }}
                    />
                    {city}
                  </label>
                ))}
              </div>
            )}

            <h3 className="text-sm font-medium text-gray-700">Salary Range</h3>
            <div className="flex space-x-2">
              <input
                type="number"

                value={activeFilters.salary[0]}

                value={activeFilters.salary[0] || ""}

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

            Reset

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

        {filteredJobs.length === 0 ? (
          <div className="text-center text-gray-700">No Jobs available</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}

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
