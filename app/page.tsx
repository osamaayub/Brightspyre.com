import { JobSearchBar } from "@/components/job/job-search-bar"
import { FeaturedJobs } from "@/components/job/featured-jobs"
import { CompanySpotlight } from "@/components/company/company-spotlight"
import { Hero } from "@/components/home/hero"
import { HowItWorks } from "@/components/home/how-it-works"
import { Testimonials } from "@/components/home/testimonials"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />
      <JobSearchBar />
      <FeaturedJobs />
      <HowItWorks />
      <CompanySpotlight />
      <Testimonials />
    </div>
  )
}
