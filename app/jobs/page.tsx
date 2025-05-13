"use client";
import { JobsList } from "@/components/jobs-list";
import { Filters } from "@/types/filter";
import { useState } from "react";

export default function JobPage() {
  const [filters, setFilters] = useState<Filters>({
    category_name:[],
    city: [],
    organization:[]
  });

  return (
    <JobsList filters={filters}/>
  );
}
