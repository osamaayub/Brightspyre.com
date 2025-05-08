"use client";
import { useState } from "react";


import { JobsList } from "@/components/jobs-list"
import { JobFilters } from "@/components/job-filters"

export default function JobsPage() {
  const [filters,setFilters]=useState({
    jobType:[] as string[],
    location:[]as string[],
    experience:[] as string[],
    salary:[] as number[]

  });
const handleApplyFilter=(applyFilters:typeof filters)=>{
 setFilters(applyFilters);
}
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Browse Jobs</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <JobFilters  filters={filters} setFilters={setFilters} onApplyFilters={handleApplyFilter}/>
        </div>
        <div className="md:col-span-3">
          <JobsList filters={filters} />
        </div>
      </div>
    </div>
  )
}
