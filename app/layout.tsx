import type React from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/context/auth-context"
import { HeaderButtons } from "@/components/header-buttons"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Brightspyre - Find Your Dream Job",
  description: "Discover thousands of job opportunities from top companies around the world.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <AuthProvider>
            <div className="flex min-h-screen flex-col">
              <header className="border-b">
                <div className="container mx-auto px-4 py-4">
                  <div className="flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold">
                      Brightspyre
                    </Link>
                    <nav className="hidden md:flex items-center gap-6">
                      <Link href="/jobs" className="text-sm font-medium hover:underline">
                        Jobs
                      </Link>
                      <Link href="/companies" className="text-sm font-medium hover:underline">
                        Companies
                      </Link>
                      <Link href="/contact" className="text-sm font-medium hover:underline">
                        Contact
                      </Link>
                      <Link href="/faq" className="text-sm font-medium hover:underline">
                        FAQ
                      </Link>
                    </nav>
                    <HeaderButtons />
                  </div>
                </div>
              </header>
              <main className="flex-1">{children}</main>
              <footer className="border-t bg-gray-50">
                <div className="container mx-auto px-4 py-8">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Brightspyre</h3>
                      <p className="text-sm text-muted-foreground">
                        Find your dream job or the perfect candidate with Brightspyre, the leading job board platform.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4">For Job Seekers</h3>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <Link href="/jobs" className="text-muted-foreground hover:underline">
                            Browse Jobs
                          </Link>
                        </li>
                        <li>
                          <Link href="/companies" className="text-muted-foreground hover:underline">
                            Companies
                          </Link>
                        </li>
                        <li>
                          <Link href="/profile" className="text-muted-foreground hover:underline">
                            My Profile
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4">For Employers</h3>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <Link href="/employers/post-job" className="text-muted-foreground hover:underline">
                            Post a Job
                          </Link>
                        </li>
                        <li>
                          <Link href="/employers/pricing" className="text-muted-foreground hover:underline">
                            Pricing
                          </Link>
                        </li>
                        <li>
                          <Link href="/employers/resources" className="text-muted-foreground hover:underline">
                            Employer Resources
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Company</h3>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <Link href="/about" className="text-muted-foreground hover:underline">
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact" className="text-muted-foreground hover:underline">
                            Contact
                          </Link>
                        </li>
                        <li>
                          <Link href="/faq" className="text-muted-foreground hover:underline">
                            FAQ
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Brightspyre. All rights reserved.
                  </div>
                </div>
              </footer>
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
