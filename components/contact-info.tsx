import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"

export function ContactInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
          <div>
            <h3 className="font-medium">Address</h3>
            <p className="text-sm text-muted-foreground">
              123 Job Street
              <br />
              San Francisco, CA 94103
              <br />
              United States
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
          <div>
            <h3 className="font-medium">Email</h3>
            <p className="text-sm text-muted-foreground">
              support@brightspyre.com
              <br />
              info@brightspyre.com
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
          <div>
            <h3 className="font-medium">Phone</h3>
            <p className="text-sm text-muted-foreground">
              +1 (555) 123-4567
              <br />
              +1 (555) 987-6543
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
