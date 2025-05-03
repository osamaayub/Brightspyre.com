"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function CompanyFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [filters, setFilters] = useState({
    industry: searchParams.get("industry") || "",
    size: searchParams.get("size") || "",
    location: searchParams.get("location") || "",
  })

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const applyFilters = () => {
    const params = new URLSearchParams(searchParams.toString())

    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        params.set(key, value)
      } else {
        params.delete(key)
      }
    })

    router.push(`/companies?${params.toString()}`)
  }

  const resetFilters = () => {
    setFilters({
      industry: "",
      size: "",
      location: "",
    })

    const params = new URLSearchParams()
    const query = searchParams.get("query")

    if (query) params.set("query", query)

    router.push(`/companies?${params.toString()}`)
  }

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>

      <Accordion type="multiple" defaultValue={["industry", "size", "location"]}>
        <AccordionItem value="industry">
          <AccordionTrigger>Industry</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="tech"
                  checked={filters.industry === "Technology"}
                  onCheckedChange={() => handleFilterChange("industry", "Technology")}
                />
                <Label htmlFor="tech">Technology</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="healthcare"
                  checked={filters.industry === "Healthcare"}
                  onCheckedChange={() => handleFilterChange("industry", "Healthcare")}
                />
                <Label htmlFor="healthcare">Healthcare</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="finance"
                  checked={filters.industry === "Finance"}
                  onCheckedChange={() => handleFilterChange("industry", "Finance")}
                />
                <Label htmlFor="finance">Finance</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="education"
                  checked={filters.industry === "Education"}
                  onCheckedChange={() => handleFilterChange("industry", "Education")}
                />
                <Label htmlFor="education">Education</Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="size">
          <AccordionTrigger>Company Size</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="small"
                  checked={filters.size === "1-50"}
                  onCheckedChange={() => handleFilterChange("size", "1-50")}
                />
                <Label htmlFor="small">1-50 employees</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="medium"
                  checked={filters.size === "51-200"}
                  onCheckedChange={() => handleFilterChange("size", "51-200")}
                />
                <Label htmlFor="medium">51-200 employees</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="large"
                  checked={filters.size === "201-500"}
                  onCheckedChange={() => handleFilterChange("size", "201-500")}
                />
                <Label htmlFor="large">201-500 employees</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="enterprise"
                  checked={filters.size === "501+"}
                  onCheckedChange={() => handleFilterChange("size", "501+")}
                />
                <Label htmlFor="enterprise">501+ employees</Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="location">
          <AccordionTrigger>Location</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="sf"
                  checked={filters.location === "San Francisco, CA"}
                  onCheckedChange={() => handleFilterChange("location", "San Francisco, CA")}
                />
                <Label htmlFor="sf">San Francisco, CA</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="nyc"
                  checked={filters.location === "New York, NY"}
                  onCheckedChange={() => handleFilterChange("location", "New York, NY")}
                />
                <Label htmlFor="nyc">New York, NY</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remote"
                  checked={filters.location === "Remote"}
                  onCheckedChange={() => handleFilterChange("location", "Remote")}
                />
                <Label htmlFor="remote">Remote</Label>
              </div>
            </div>
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
