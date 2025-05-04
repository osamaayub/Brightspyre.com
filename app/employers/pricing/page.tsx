import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingPage() {
  const pricingPlans = [
    {
      name: "Basic",
      price: "$199",
      description: "Perfect for small businesses posting occasional jobs",
      features: [
        "1 job posting",
        "30 days visibility",
        "Standard listing placement",
        "Email support",
        "Basic candidate management",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      price: "$499",
      description: "Ideal for growing companies with regular hiring needs",
      features: [
        "5 job postings",
        "60 days visibility",
        "Featured listing placement",
        "Priority email support",
        "Advanced candidate management",
        "Company profile page",
        "Resume search (25 per day)",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$999",
      description: "For organizations with high-volume recruiting needs",
      features: [
        "15 job postings",
        "90 days visibility",
        "Premium listing placement",
        "Dedicated account manager",
        "Advanced candidate management",
        "Enhanced company profile",
        "Unlimited resume search",
        "Branded career page",
        "API access",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Employer Pricing Plans</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose the perfect plan to find your next great hire. All plans include access to our talent pool of qualified
          candidates.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <Card key={index} className={`flex flex-col ${plan.popular ? "border-primary shadow-lg relative" : ""}`}>
            {plan.popular && (
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4">
                <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <div className="mt-2">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground ml-1">/month</span>
              </div>
              <CardDescription className="mt-2">{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Link href={plan.cta === "Contact Sales" ? "/contact" : "/employers/post-job"} className="w-full">
                <Button variant={plan.popular ? "default" : "outline"} className="w-full">
                  {plan.cta}
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Need a custom solution?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          We offer tailored enterprise solutions for companies with specific recruiting needs. Contact our sales team to
          discuss a custom plan.
        </p>
        <Link href="/contact">
          <Button size="lg">Contact Sales</Button>
        </Link>
      </div>

      <div className="mt-16 bg-muted rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Satisfaction Guarantee</h3>
            <p className="text-muted-foreground">
              If you're not satisfied with the quality of applicants, we'll extend your job posting for free.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">No Hidden Fees</h3>
            <p className="text-muted-foreground">
              Transparent pricing with no surprise charges. Pay only for what you need.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Cancel Anytime</h3>
            <p className="text-muted-foreground">
              No long-term contracts required. Cancel your subscription at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
