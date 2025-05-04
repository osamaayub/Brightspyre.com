import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function JobFilters() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-medium">Job Type</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="full-time" />
                <Label htmlFor="full-time">Full-time</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="part-time" />
                <Label htmlFor="part-time">Part-time</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="contract" />
                <Label htmlFor="contract">Contract</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="internship" />
                <Label htmlFor="internship">Internship</Label>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Location</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="remote" />
                <Label htmlFor="remote">Remote</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="on-site" />
                <Label htmlFor="on-site">On-site</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="hybrid" />
                <Label htmlFor="hybrid">Hybrid</Label>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <h3 className="font-medium">Salary Range</h3>
              <span className="text-sm text-muted-foreground">$50k - $200k</span>
            </div>
            <Slider defaultValue={[50, 200]} min={0} max={300} step={10} />
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Experience Level</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="entry" />
                <Label htmlFor="entry">Entry Level</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="mid" />
                <Label htmlFor="mid">Mid Level</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="senior" />
                <Label htmlFor="senior">Senior Level</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="executive" />
                <Label htmlFor="executive">Executive</Label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-2">
        <Button variant="outline" className="flex-1">
          Reset
        </Button>
        <Button className="flex-1">Apply Filters</Button>
      </div>
    </div>
  )
}
