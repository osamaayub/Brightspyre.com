import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { QuoteIcon } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Brightspyre helped me find my dream job in just two weeks. The platform is intuitive and the job recommendations were spot on!",
      author: "Sarah Johnson",
      role: "UX Designer",
      company: "Design Co.",
      avatar: "/placeholder.svg?height=40&width=40&text=SJ",
    },
    {
      quote:
        "As someone transitioning careers, Brightspyre was invaluable. I could filter jobs by skills rather than just job titles, which helped me find opportunities I wouldn't have discovered otherwise.",
      author: "Michael Chen",
      role: "Software Engineer",
      company: "Tech Innovations",
      avatar: "/placeholder.svg?height=40&width=40&text=MC",
    },
    {
      quote:
        "The company profiles and culture insights helped me find an organization that truly aligns with my values. I'm now at a company I love!",
      author: "Priya Patel",
      role: "Marketing Manager",
      company: "Global Media",
      avatar: "/placeholder.svg?height=40&width=40&text=PP",
    },
  ]

  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold mb-8 text-center">What Job Seekers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <QuoteIcon className="h-8 w-8 text-gray-300 mb-4" />
              <p className="text-gray-700 mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                  <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
