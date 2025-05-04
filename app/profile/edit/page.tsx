"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function EditProfilePage() {
  const { toast } = useToast()

  // Mock user data
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    title: "Senior Frontend Developer",
    location: "San Francisco, CA",
    bio: "Experienced frontend developer with a passion for creating beautiful and functional user interfaces.",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js"],
    newSkill: "",
    experience: [
      {
        title: "Senior Frontend Developer",
        company: "TechCorp",
        period: "2020 - Present",
        description: "Leading frontend development for multiple projects.",
      },
      {
        title: "Frontend Developer",
        company: "WebSolutions",
        period: "2018 - 2020",
        description: "Developed responsive web applications using React.",
      },
    ],
    education: [
      {
        degree: "B.S. Computer Science",
        institution: "University of California",
        year: "2018",
      },
    ],
  })

  const handleAddSkill = () => {
    if (user.newSkill.trim() !== "") {
      setUser({
        ...user,
        skills: [...user.skills, user.newSkill],
        newSkill: "",
      })
    }
  }

  const handleRemoveSkill = (skillToRemove: string) => {
    setUser({
      ...user,
      skills: user.skills.filter((skill) => skill !== skillToRemove),
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Profile updated",
      description: "Your profile has been successfully updated.",
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Edit Profile</h1>
        <Link href="/profile">
          <Button variant="outline">Cancel</Button>
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Profile Picture</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-2xl font-bold">
                    {user.name.charAt(0)}
                  </div>
                  <Button variant="outline" size="sm">
                    Upload New Picture
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Skills</CardTitle>
                <CardDescription>Add or remove your professional skills</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {user.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="flex items-center gap-1">
                        {skill}
                        <button
                          type="button"
                          onClick={() => handleRemoveSkill(skill)}
                          className="ml-1 rounded-full hover:bg-gray-200 p-1"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Input
                      placeholder="Add a skill"
                      value={user.newSkill}
                      onChange={(e) => setUser({ ...user, newSkill: e.target.value })}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault()
                          handleAddSkill()
                        }
                      }}
                    />
                    <Button type="button" onClick={handleAddSkill}>
                      Add
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <Tabs defaultValue="basic">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="basic">Basic Info</TabsTrigger>
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardHeader>
              <CardContent>
                <TabsContent value="basic" className="mt-0 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="title">Job Title</Label>
                      <Input
                        id="title"
                        value={user.title}
                        onChange={(e) => setUser({ ...user, title: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={user.location}
                        onChange={(e) => setUser({ ...user, location: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      rows={5}
                      value={user.bio}
                      onChange={(e) => setUser({ ...user, bio: e.target.value })}
                    />
                  </div>
                </TabsContent>

                <TabsContent value="experience" className="mt-0">
                  <div className="space-y-6">
                    {user.experience.map((exp, index) => (
                      <div key={index} className="space-y-4 pb-4 border-b">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor={`job-title-${index}`}>Job Title</Label>
                            <Input
                              id={`job-title-${index}`}
                              value={exp.title}
                              onChange={(e) => {
                                const newExperience = [...user.experience]
                                newExperience[index].title = e.target.value
                                setUser({ ...user, experience: newExperience })
                              }}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`company-${index}`}>Company</Label>
                            <Input
                              id={`company-${index}`}
                              value={exp.company}
                              onChange={(e) => {
                                const newExperience = [...user.experience]
                                newExperience[index].company = e.target.value
                                setUser({ ...user, experience: newExperience })
                              }}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor={`period-${index}`}>Period</Label>
                          <Input
                            id={`period-${index}`}
                            value={exp.period}
                            onChange={(e) => {
                              const newExperience = [...user.experience]
                              newExperience[index].period = e.target.value
                              setUser({ ...user, experience: newExperience })
                            }}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor={`description-${index}`}>Description</Label>
                          <Textarea
                            id={`description-${index}`}
                            rows={3}
                            value={exp.description}
                            onChange={(e) => {
                              const newExperience = [...user.experience]
                              newExperience[index].description = e.target.value
                              setUser({ ...user, experience: newExperience })
                            }}
                          />
                        </div>

                        <Button type="button" variant="destructive" size="sm">
                          Remove
                        </Button>
                      </div>
                    ))}

                    <Button type="button" variant="outline">
                      Add Experience
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="education" className="mt-0">
                  <div className="space-y-6">
                    {user.education.map((edu, index) => (
                      <div key={index} className="space-y-4 pb-4 border-b">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor={`degree-${index}`}>Degree</Label>
                            <Input
                              id={`degree-${index}`}
                              value={edu.degree}
                              onChange={(e) => {
                                const newEducation = [...user.education]
                                newEducation[index].degree = e.target.value
                                setUser({ ...user, education: newEducation })
                              }}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`year-${index}`}>Year</Label>
                            <Input
                              id={`year-${index}`}
                              value={edu.year}
                              onChange={(e) => {
                                const newEducation = [...user.education]
                                newEducation[index].year = e.target.value
                                setUser({ ...user, education: newEducation })
                              }}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor={`institution-${index}`}>Institution</Label>
                          <Input
                            id={`institution-${index}`}
                            value={edu.institution}
                            onChange={(e) => {
                              const newEducation = [...user.education]
                              newEducation[index].institution = e.target.value
                              setUser({ ...user, education: newEducation })
                            }}
                          />
                        </div>

                        <Button type="button" variant="destructive" size="sm">
                          Remove
                        </Button>
                      </div>
                    ))}

                    <Button type="button" variant="outline">
                      Add Education
                    </Button>
                  </div>
                </TabsContent>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button type="submit">Save Changes</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </form>
    </div>
  )
}
