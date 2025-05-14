
"use client";

import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Filters } from "@/types/filter";
import JobCard from "@/components/JobCard";
import { Pagination } from "@/components/pagination-job";

export function JobsList({ filters }: { filters: Filters }) {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilters, setActiveFilters] = useState<Filters>(filters);
  const [appliedFilters, setAppliedFilters] = useState<Filters>(filters);
  const [filterToggles, setFilterToggles] = useState({
    category: true,
    organization: true,
    city: true,
  });

  const jobsPerPage = 90;

  useEffect(() => {
    fetchJobs();
  }, []);

  async function fetchJobs() {
    setLoading(true);
    try {
      const response = await axios.get("/api/jobs");
      setJobs(response.data.results || []);
    } catch (err: any) {
      setError(err.response?.data?.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  }

  const handleFilterChange = (filterKey: keyof Filters, value: any) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterKey]: value,
    }));
  };

  // const applyFilters = () => {
  //   setAppliedFilters(activeFilters);
  //   setCurrentPage(1);
  // };

  // reset Filters
  const resetFilters = () => {
    const emptyFilters = {
      category_name: [],
      organization: [],
      city: [],
    };
    setActiveFilters(emptyFilters);
    setAppliedFilters(emptyFilters);
    setCurrentPage(1);
  };

  //filter jobs on the basis of filters
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const {
        category_name,
        organization,
        city,
      } = appliedFilters;

      const matchesCategory =
        category_name.length === 0 ||
        category_name.includes(job.category_name?.toLowerCase());
      const matchesOrganization =
        organization.length === 0 ||
        organization.includes(job.organization?.toLowerCase());
      const matchesCity =
        city.length === 0 ||
        city.includes(job.city?.toLowerCase());
      return (
        matchesCategory &&
        matchesOrganization &&
        matchesCity
      );
    });
  }, [appliedFilters, jobs]);

  //categories filter
  const uniqueCategories = useMemo(() => {
    const categorySet = new Set<string>();
  
    jobs.forEach((job) => {
      if (!job.category_name) return;
  
      job.category_name
        .toLowerCase()
        .split(/[,&]/)
        .map((cat: string) => cat.trim())
        .filter(Boolean)
        .forEach((cat: string) => categorySet.add(cat));
    });
  
    return Array.from(categorySet).sort();
  }, [jobs]);
  

  const uniqueOrganizations = useMemo(() => {
    return Array.from(
      new Set(jobs.map((job) => job.organization?.toLowerCase()).filter(Boolean))
    );
  }, [jobs]);

  //location filter
  const uniqueCities = useMemo(() => {
    const separators = /[,().\-–;]| and /gi;
  
    const noiseWords = ['district', 'remote', 'frequent travel', 'pakistan', 'also travel', 'if required'];
  
    const cityCorrections: Record<string, string> = {
      'islmabad': 'islamabad',
      'i khan': 'd.i khan',
      'dik khan': 'd.i khan',
      'balouchistan': 'balochistan',
      'mandi bahaudin': 'mandi bahauddin',
    };
  
    const citiesSet = new Set<string>();
  
    jobs.forEach((job) => {
      if (!job.city) return;
  
      const parts = job.city
        .toLowerCase()
        .split(separators)
        .map((part: string) => part.trim())
        .filter(
          (part: string | string[]) =>
            part.length > 2 &&
            !noiseWords.some((noise) => part.includes(noise))
        )
        .map((part: string | number) => cityCorrections[part] || part); // correct typos
  
      parts.forEach((city: string) => citiesSet.add(city));
    });
  
    return Array.from(citiesSet).sort();
  }, [jobs]);
  
  
  
  
  
  
  
  

  

  
  
  
 
  
  
  

  

  
 

  
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  );

  if (loading) return <div className="text-center text-gray-600">Loading jobs...</div>;
  if (error) return <div className="text-red-600 text-center">{error}</div>;

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Filters Sidebar */}
      <div className="w-2/4 lg:w-1/4 p-4 border-b  rounded lg:border-b-0 lg:border-r border-gray-300 bg-gray-300">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Filters</h2>

        {/* Category Accordion */}
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
                <label key={category} className="text-sm text-gray-600">
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
        </div>

        {/* Organization Accordion */}
        <div className="mt-4">
          <h3
            className="text-sm font-medium text-gray-700 mb-2 cursor-pointer"
            onClick={() =>
              setFilterToggles((prev) => ({
                ...prev,
                organization: !prev.organization,
              }))
            }
          >
            {filterToggles.organization ? "▲" : "▼"} Organization
          </h3>
          {filterToggles.organization && (
            <div className="flex flex-col gap-1 max-h-48 overflow-y-auto">
              {uniqueOrganizations.map((org,index) => (
                <label key={index} className="text-sm text-gray-600">
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
        </div>

        {/* City Accordion */}
        <div className="mt-4">
          <h3
            className="text-sm font-medium text-gray-700 mb-2 cursor-pointer"
            onClick={() =>
              setFilterToggles((prev) => ({ ...prev, city: !prev.city }))
            }
          >
            {filterToggles.city ? "▲" : "▼"} Location
          </h3>
          {filterToggles.city && (
            <div className="flex flex-col gap-1 max-h-48 overflow-y-auto">
              {uniqueCities.map((city,index) => (
                <label key={`${city}-${index}`} className="text-sm text-gray-600">
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
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between mt-4 gap-2">
          <button
            onClick={resetFilters}
            className="w-full border px-4 py-2 rounded text-gray-700 hover:bg-gray-100"
          >
            Clear All
          </button>
        </div>
      </div>

      {/* Job List Section */}
      <div className="w-full lg:w-3/4 p-4">
        {filteredJobs.length === 0 ? (
          <div className="text-center text-gray-700">No Jobs available</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {paginatedJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-6 flex justify-center">
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    </div>
  );
}
