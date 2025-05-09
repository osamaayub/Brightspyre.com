"use client";

import { useMemo } from "react";
import { JobsList } from "@/components/jobs-list"; // adjust path based on actual file structure
import { Filters } from "@/types/filter";

export default function JobPage() {
  const filters = useMemo(() => ({
    category_name: "",
    location: "",
    salary: [50,200],
    title: "",
    city: "",
    country: "",
    job_type: "",
    organization: "",
  }), []);
  

  return (
    <div className="p-6">
      {/* You could add filter inputs here and pass updated filters */}
      <JobsList filters={filters} />
    </div>
  );
}
