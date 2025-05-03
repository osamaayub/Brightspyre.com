import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Company {
  id: string
  name: string
  industry: string
  size: string
  location: string
  founded?: string
  website?: string
}

interface CompanyDetailsProps {
  company: Company
}

export function CompanyDetails({ company }: CompanyDetailsProps) {
  const details = [
    { label: "Industry", value: company.industry },
    { label: "Company size", value: `${company.size} employees` },
    { label: "Location", value: company.location },
    ...(company.founded ? [{ label: "Founded", value: company.founded }] : []),
    ...(company.website ? [{ label: "Website", value: company.website }] : []),
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Company Details</CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="space-y-4">
          {details.map((detail, index) => (
            <div key={index}>
              <dt className="text-sm font-medium text-gray-500">{detail.label}</dt>
              <dd className="mt-1">
                {detail.label === "Website" ? (
                  <a
                    href={detail.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {detail.value}
                  </a>
                ) : detail.label === "Industry" ? (
                  <Badge variant="secondary">{detail.value}</Badge>
                ) : (
                  detail.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </CardContent>
    </Card>
  )
}
