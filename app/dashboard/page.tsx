"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/hooks/use-auth"
import { useRouter } from "next/navigation"
import { Building, Briefcase, Clock, FileText, Bell, BookOpen, MapPin } from "lucide-react"

export default function DashboardPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login?redirect=/dashboard")
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <div className="container py-10 flex items-center justify-center min-h-[50vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null // Redirect will happen in useEffect
  }

  return (
    <div className="container py-10">
      <div className="flex flex-col space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}</h1>
          <p className="text-muted-foreground">Manage your job applications and profile</p>
        </div>

        {/* Dashboard Overview */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Applications</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">3 new this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Saved Jobs</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">5 new this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">48</div>
              <p className="text-xs text-muted-foreground">+12% from last week</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="applications" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="saved">Saved Jobs</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>

          <TabsContent value="applications" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Job Applications</CardTitle>
                <CardDescription>Track the status of your job applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: "app1",
                      title: "Senior Frontend Developer",
                      company: "TechCorp",
                      date: "Applied on May 15, 2023",
                      status: "Interview",
                    },
                    {
                      id: "app2",
                      title: "UX/UI Designer",
                      company: "DesignHub",
                      date: "Applied on June 2, 2023",
                      status: "Reviewing",
                    },
                    {
                      id: "app3",
                      title: "Product Manager",
                      company: "InnovateTech",
                      date: "Applied on June 10, 2023",
                      status: "Applied",
                    },
                  ].map((application) => (
                    <div key={application.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-start space-x-4">
                        <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                          <Building className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div>
                          <h3 className="font-medium">{application.title}</h3>
                          <p className="text-sm text-muted-foreground">{application.company}</p>
                          <p className="text-xs text-muted-foreground mt-1">{application.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Badge
                          variant={
                            application.status === "Interview"
                              ? "default"
                              : application.status === "Reviewing"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {application.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/applications" className="w-full">
                  <Button variant="outline" className="w-full">
                    View All Applications
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="saved" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Saved Jobs</CardTitle>
                <CardDescription>Jobs you've saved for later</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: "job1",
                      title: "Backend Developer",
                      company: "ServerStack",
                      location: "Seattle, WA",
                      saved: "Saved 3 days ago",
                    },
                    {
                      id: "job2",
                      title: "Data Scientist",
                      company: "DataInsights",
                      location: "Remote",
                      saved: "Saved 1 week ago",
                    },
                    {
                      id: "job3",
                      title: "DevOps Engineer",
                      company: "CloudSystems",
                      location: "Remote",
                      saved: "Saved 2 weeks ago",
                    },
                  ].map((job) => (
                    <div key={job.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-start space-x-4">
                        <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                          <Building className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div>
                          <h3 className="font-medium">{job.title}</h3>
                          <p className="text-sm text-muted-foreground">{job.company}</p>
                          <div className="flex items-center text-xs text-muted-foreground mt-1">
                            <MapPin className="mr-1 h-3 w-3" />
                            {job.location}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <p className="text-xs text-muted-foreground">{job.saved}</p>
                        <Link href={`/jobs/${job.id}`}>
                          <Button size="sm">Apply</Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/saved-jobs" className="w-full">
                  <Button variant="outline" className="w-full">
                    View All Saved Jobs
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>Stay updated on your job applications and messages</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: "notif1",
                      title: "Interview Invitation",
                      message:
                        "You've been invited to an interview for the Senior Frontend Developer position at TechCorp.",
                      time: "2 hours ago",
                      type: "interview",
                    },
                    {
                      id: "notif2",
                      title: "Application Update",
                      message: "Your application for UX/UI Designer at DesignHub is now being reviewed.",
                      time: "1 day ago",
                      type: "update",
                    },
                    {
                      id: "notif3",
                      title: "New Job Matches",
                      message: "We found 5 new jobs that match your profile and preferences.",
                      time: "3 days ago",
                      type: "match",
                    },
                  ].map((notification) => (
                    <div key={notification.id} className="flex items-start space-x-4 p-4 border rounded-lg">
                      <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                        {notification.type === "interview" ? (
                          <Clock className="h-5 w-5 text-muted-foreground" />
                        ) : notification.type === "update" ? (
                          <FileText className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <Bell className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium">{notification.title}</h3>
                        <p className="text-sm text-muted-foreground">{notification.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/notifications" className="w-full">
                  <Button variant="outline" className="w-full">
                    View All Notifications
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Recommended Jobs */}
        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Recommended Jobs</CardTitle>
              <CardDescription>Based on your profile and preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: "rec1",
                    title: "Frontend Developer",
                    company: "WebTech",
                    location: "Remote",
                    match: "95% Match",
                  },
                  {
                    id: "rec2",
                    title: "UI/UX Designer",
                    company: "CreativeStudio",
                    location: "New York, NY",
                    match: "90% Match",
                  },
                  {
                    id: "rec3",
                    title: "Full Stack Developer",
                    company: "TechSolutions",
                    location: "San Francisco, CA",
                    match: "85% Match",
                  },
                ].map((job) => (
                  <div key={job.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-start space-x-4">
                      <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                        <Building className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-medium">{job.title}</h3>
                        <p className="text-sm text-muted-foreground">{job.company}</p>
                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                          <MapPin className="mr-1 h-3 w-3" />
                          {job.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        {job.match}
                      </Badge>
                      <Link href={`/jobs/${job.id}`}>
                        <Button size="sm">View</Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/jobs" className="w-full">
                <Button variant="outline" className="w-full">
                  Browse All Jobs
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
