"use client";
import { JobsList } from "@/components/jobs-list";
import { Filters } from "@/types/filter";
import { useState } from "react";

export default function JobPage() {
  const [filters, setFilters] = useState<Filters>({
    title: "",
    category_name: "",
    city: "",
    country: "",
    salary: [0, 0],  // Salary range,
    organization:""
  });

  return (
    <JobsList filters={filters}/>
  );
}
