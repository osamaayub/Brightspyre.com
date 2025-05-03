import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Company {
  id: string
  name: string
  description: string
  benefits?: string[]
}

interface CompanyAboutProps {
  company: Company
}

export function CompanyAbout({ company }: CompanyAboutProps) {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>About {company.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="prose max-w-none">
          <p>{company.description}</p>

          {company.benefits && company.benefits.length > 0 && (
            <>
              <h3 className="text-lg font-semibold mt-6 mb-3">Benefits & Perks</h3>
              <ul className="list-disc pl-5 space-y-1">
                {company.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
