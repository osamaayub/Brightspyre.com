import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resources | Brightspyre",
  description: "Helpful resources and guides for Brightspyre users",
}

export default function ResourcesPage() {
  return (
    <div className="container max-w-4xl py-12 md:py-16 lg:py-24">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Resources</h1>
          <p className="text-xl text-muted-foreground">
            Explore our collection of resources to help you get the most out of Brightspyre.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Getting Started Guides</h2>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-primary hover:underline">
                  Platform Overview
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  Account Setup
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  First Project Guide
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Documentation</h2>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-primary hover:underline">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  Integration Guides
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  Best Practices
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Tutorials</h2>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-primary hover:underline">
                  Video Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  Step-by-Step Guides
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  Advanced Techniques
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Support</h2>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-primary hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  Contact Support
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  Community Forums
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="rounded-lg bg-muted p-8 mt-12">
          <h2 className="text-2xl font-semibold mb-4">Need more help?</h2>
          <p className="mb-6">Our support team is available to assist you with any questions or issues you may have.</p>
          <a
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}
