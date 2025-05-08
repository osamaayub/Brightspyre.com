import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import React from "react";

interface Job {
  id: number;
  city: string;
  salary: string; // e.g. "100,000 PKR"
  title: string;
  category_name: string; // Job Category
  experience_level: string; // e.g. "entry", "mid", "senior"
}

interface Filters {
 category:string,
  location: string[];
  experience: string[];
  salary: number[];
}

export function JobFilters({
  filters,
  setFilters,
  onApplyFilters,
  allJobs,
}: {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  onApplyFilters: (filteredJobs: Job[]) => void;
  allJobs: Job[];
}) {
  const handleCheckboxChange = (
    value: string,
    listName: keyof Filters
  ) => {
    const currentList = filters[listName] as string[];
    const updatedList = currentList.includes(value)
      ? currentList.filter((item) => item !== value)
      : [...currentList, value];

    setFilters((prev) => ({
      ...prev,
      [listName]: updatedList,
    }));
  };

  const handleSalaryChange = (value: number[]) => {
    setFilters((prev) => ({
      ...prev,
      salary: value,
    }));
  };

  // Reset Filters
  const resetFilters = () => {
    setFilters({
      jobType: [],
      location: [],
      experience: [],
      salary: [50, 200],
    });
  };

  // Apply Filters
  const applyFilters = () => {
    const filtered = allJobs.filter((job) => {
      const jobCity = job.city?.toLowerCase() || "";
      const jobSalary = parseInt(job.salary.replace(/[^\d]/g, "")) || 0;
      const jobCategory = job.category_name?.toLowerCase() || "";
      const jobExperience = job.experience_level?.toLowerCase() || "";

      const matchesLocation =
        filters.location.length === 0 ||
        filters.location.some((loc) =>
          loc === "remote"
            ? jobCity.includes("remote")
            : jobCity.includes(loc.toLowerCase())
        );

      const matchesSalary =
        jobSalary >= filters.salary[0] * 1000 && jobSalary <= filters.salary[1] * 1000;

      const matchesCategory =
        filters.jobType.length === 0 ||
        filters.jobType.some((cat) => jobCategory.includes(cat.toLowerCase()));

      const matchesExperience =
        filters.experience.length === 0 ||
        filters.experience.some((exp) => jobExperience.includes(exp.toLowerCase()));

      return matchesLocation && matchesSalary && matchesCategory && matchesExperience;
    });

    onApplyFilters(filtered);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Job Category */}
          <div className="space-y-4">
            <h3 className="font-medium">Job Category</h3>
            {["Development Sector", "IT", "Finance", "Marketing"].map((cat) => (
              <div key={cat} className="flex items-center space-x-2">
                <Checkbox
                  id={cat}
                  checked={filters.jobType.includes(cat)}
                  onCheckedChange={() => handleCheckboxChange(cat, "jobType")}
                />
                <Label htmlFor={cat} className="capitalize">
                  {cat}
                </Label>
              </div>
            ))}
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h3 className="font-medium">Location</h3>
            {["remote", "on-site", "hybrid"].map((loc) => (
              <div key={loc} className="flex items-center space-x-2">
                <Checkbox
                  id={loc}
                  checked={filters.location.includes(loc)}
                  onCheckedChange={() => handleCheckboxChange(loc, "location")}
                />
                <Label htmlFor={loc} className="capitalize">
                  {loc}
                </Label>
              </div>
            ))}
          </div>

          {/* Salary */}
          <div className="space-y-4">
            <div className="flex justify-between">
              <h3 className="font-medium">Salary Range</h3>
              <span className="text-sm text-muted-foreground">
                ${filters.salary[0]}k - ${filters.salary[1]}k
              </span>
            </div>
            <Slider
              value={filters.salary}
              min={0}
              max={300}
              step={10}
              onValueChange={handleSalaryChange}
            />
          </div>

          {/* Experience Level */}
          <div className="space-y-4">
            <h3 className="font-medium">Experience Level</h3>
            {["entry", "mid", "senior", "executive"].map((level) => (
              <div key={level} className="flex items-center space-x-2">
                <Checkbox
                  id={level}
                  checked={filters.experience.includes(level)}
                  onCheckedChange={() => handleCheckboxChange(level, "experience")}
                />
                <Label htmlFor={level} className="capitalize">
                  {level} Level
                </Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-2">
        <Button variant="outline" className="flex-1" onClick={resetFilters}>
          Reset
        </Button>
        <Button className="flex-1" onClick={applyFilters}>
          Apply Filters
        </Button>
      </div>
    </div>
  );
}
