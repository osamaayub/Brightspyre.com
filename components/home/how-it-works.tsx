import { CheckCircle, Search, Building, Send } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "Search Jobs",
      description: "Browse through thousands of job listings or use filters to find the perfect match.",
    },
    {
      icon: <Building className="h-10 w-10 text-primary" />,
      title: "Research Companies",
      description: "Learn about company culture, benefits, and read reviews from current and former employees.",
    },
    {
      icon: <Send className="h-10 w-10 text-primary" />,
      title: "Apply with Ease",
      description: "Submit your application with just a few clicks and track your application status.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Land Your Dream Job",
      description: "Get hired and start your new career journey with confidence.",
    },
  ]

  return (
    <div className="py-12 bg-gray-50 -mx-4 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-12 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
