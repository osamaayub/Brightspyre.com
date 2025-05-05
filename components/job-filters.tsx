import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import React from "react"

interface Filters {
  jobType: string[]
  location: string[]
  experience: string[]
  salary: number[]
}

export function JobFilters({
  filters,
  setFilters,
  onApplyFilters
}: {
  filters: Filters
  setFilters: React.Dispatch<React.SetStateAction<Filters>>
  onApplyFilters:(filters:Filters)=>void
}) {
  const handleCheckboxChange = (
    value: string,
    listName: keyof Filters
  ) => {
    const currentList = filters[listName] as string[]
    const updatedList = currentList.includes(value)
      ? currentList.filter(item => item !== value)
      : [...currentList, value]

    setFilters(prev => ({
      ...prev,
      [listName]: updatedList,
    }))
  }

  const handleSalaryChange = (value: number[]) => {
    setFilters(prev => ({
      ...prev,
      salary: value,
    }))
  }

  //reset Filters
  const resetFilters = () => {
    setFilters({
      jobType: [],
      location: [],
      experience: [],
      salary:[50,200]
    })
  }
  const applyFilters=()=>{
    onApplyFilters(filters);
    
  }


  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Job Type */}
          <div className="space-y-4">
            <h3 className="font-medium">Job Type</h3>
            {["full-time", "part-time", "contract", "internship"].map(type => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox
                  id={type}
                  checked={filters.jobType.includes(type)}
                  onCheckedChange={() => handleCheckboxChange(type, "jobType")}
                />
                <Label htmlFor={type} className="capitalize">{type}</Label>
              </div>
            ))}
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h3 className="font-medium">Location</h3>
            {["remote", "on-site", "hybrid"].map(loc => (
              <div key={loc} className="flex items-center space-x-2">
                <Checkbox
                  id={loc}
                  checked={filters.location.includes(loc)}
                  onCheckedChange={() => handleCheckboxChange(loc, "location")}
                />
                <Label htmlFor={loc} className="capitalize">{loc}</Label>
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

          {/* Experience */}
          <div className="space-y-4">
            <h3 className="font-medium">Experience Level</h3>
            {["entry", "mid", "senior", "executive"].map(level => (
              <div key={level} className="flex items-center space-x-2">
                <Checkbox
                  id={level}
                  checked={filters.experience.includes(level)}
                  onCheckedChange={() => handleCheckboxChange(level, "experience")}
                />
                <Label htmlFor={level} className="capitalize">{level} Level</Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-2">
        <Button variant="outline" className="flex-1" onClick={resetFilters}>
          Reset
        </Button>
        <Button className="flex-1" onClick={applyFilters}>Apply Filters</Button>
      </div>
    </div>
  )
}
