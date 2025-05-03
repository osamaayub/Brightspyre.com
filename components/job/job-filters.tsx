"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function JobFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [filters, setFilters] = useState({
    jobType: searchParams.get("jobType") || "",
    remote: searchParams.get("remote") === "true",
    experience: searchParams.get("experience") || "",
    salary: searchParams.get("salary") || "",
    category: searchParams.get("category") || "",
  })

  const handleFilterChange = (key: string, value: string | boolean) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const applyFilters = () => {
    const params = new URLSearchParams(searchParams.toString())

    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        params.set(key, String(value))
      } else {
        params.delete(key)
      }
    })

    router.push(`/jobs?${params.toString()}`)
  }

  const resetFilters = () => {
    setFilters({
      jobType: "",
      remote: false,
      experience: "",
      salary: "",
      category: "",
    })

    const params = new URLSearchParams()
    const query = searchParams.get("query")
    const location = searchParams.get("location")

    if (query) params.set("query", query)
    if (location) params.set("location", location)

    router.push(`/jobs?${params.toString()}`)
  }

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>

      <Accordion type="multiple" defaultValue={["jobType", "remote", "experience"]}>
        <AccordionItem value="jobType">
          <AccordionTrigger>Job Type</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="fullTime"
                  checked={filters.jobType === "Full-time"}
                  onCheckedChange={() => handleFilterChange("jobType", "Full-time")}
                />
                <Label htmlFor="fullTime">Full-time</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="partTime"
                  checked={filters.jobType === "Part-time"}
                  onCheckedChange={() => handleFilterChange("jobType", "Part-time")}
                />
                <Label htmlFor="partTime">Part-time</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="contract"
                  checked={filters.jobType === "Contract"}
                  onCheckedChange={() => handleFilterChange("jobType", "Contract")}
                />
                <Label htmlFor="contract">Contract</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="internship"
                  checked={filters.jobType === "Internship"}
                  onCheckedChange={() => handleFilterChange("jobType", "Internship")}
                />
                <Label htmlFor="internship">Internship</Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="remote">
          <AccordionTrigger>Remote Options</AccordionTrigger>
          <AccordionContent>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remote"
                checked={filters.remote}
                onCheckedChange={(checked) => handleFilterChange("remote", checked === true)}
              />
              <Label htmlFor="remote">Remote only</Label>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="experience">
          <AccordionTrigger>Experience Level</AccordionTrigger>
          <AccordionContent>
            <RadioGroup value={filters.experience} onValueChange={(value) => handleFilterChange("experience", value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Entry-level" id="entry" />
                <Label htmlFor="entry">Entry-level</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Mid-level" id="mid" />
                <Label htmlFor="mid">Mid-level</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Senior" id="senior" />
                <Label htmlFor="senior">Senior</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Executive" id="executive" />
                <Label htmlFor="executive">Executive</Label>
              </div>
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-6 space-y-3">
        <Button onClick={applyFilters} className="w-full">
          Apply Filters
        </Button>
        <Button variant="outline" onClick={resetFilters} className="w-full">
          Reset
        </Button>
      </div>
    </div>
  )
}
