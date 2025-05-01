import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Upload, Plus, Trash2 } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">Resume Builder</h1>
      <p className="text-muted-foreground mb-8">
        Create a professional resume to showcase your skills and experience to potential employers.
      </p>

      <Tabs defaultValue="personal" className="max-w-4xl mx-auto">
        <TabsList className="grid grid-cols-5 mb-8">
          <TabsTrigger value="personal">Personal</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>

        <TabsContent value="personal">
          <Card>
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center mb-4">
                    <Upload className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Plus size={16} />
                    Upload Photo
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="+92 300 1234567" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="Islamabad, Pakistan" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="summary">Professional Summary</Label>
                  <Textarea
                    id="summary"
                    placeholder="A brief summary of your professional background and career goals..."
                    rows={4}
                  />
                </div>

                <div className="flex justify-end">
                  <Button>Save & Continue</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="education">
          <Card>
            <CardContent className="pt-6">
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-4">Education</h2>
                <p className="text-muted-foreground">Add your educational background, starting with the most recent.</p>
              </div>

              <div className="space-y-6">
                <Card className="p-4 border border-muted">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold">Education #1</h3>
                    <Button variant="ghost" size="sm" className="text-destructive">
                      <Trash2 size={16} />
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="institution">Institution</Label>
                      <Input id="institution" placeholder="University name" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="degree">Degree</Label>
                        <Input id="degree" placeholder="Bachelor of Science" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="fieldOfStudy">Field of Study</Label>
                        <Input id="fieldOfStudy" placeholder="Computer Science" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="startDate">Start Date</Label>
                        <Input id="startDate" type="month" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="endDate">End Date</Label>
                        <Input id="endDate" type="month" />
                      </div>
                    </div>
                  </div>
                </Card>

                <Button variant="outline" className="w-full flex items-center gap-2">
                  <Plus size={16} />
                  Add Education
                </Button>
              </div>

              <div className="flex justify-between mt-6">
                <Button variant="outline">Previous</Button>
                <Button>Save & Continue</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="experience">
          <Card>
            <CardContent className="pt-6">
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-4">Work Experience</h2>
                <p className="text-muted-foreground">
                  Add your work experience, starting with the most recent position.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-4 border border-muted">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold">Experience #1</h3>
                    <Button variant="ghost" size="sm" className="text-destructive">
                      <Trash2 size={16} />
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Company name" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="jobTitle">Job Title</Label>
                      <Input id="jobTitle" placeholder="Software Engineer" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" placeholder="Islamabad, Pakistan" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="startDate">Start Date</Label>
                        <Input id="startDate" type="month" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="endDate">End Date</Label>
                        <Input id="endDate" type="month" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe your responsibilities and achievements..."
                        rows={4}
                      />
                    </div>
                  </div>
                </Card>

                <Button variant="outline" className="w-full flex items-center gap-2">
                  <Plus size={16} />
                  Add Experience
                </Button>
              </div>

              <div className="flex justify-between mt-6">
                <Button variant="outline">Previous</Button>
                <Button>Save & Continue</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills">
          <Card>
            <CardContent className="pt-6">
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-4">Skills</h2>
                <p className="text-muted-foreground">Add your key skills and competencies.</p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="skills">Skills</Label>
                  <div className="flex flex-wrap gap-2 p-2 border rounded-md">
                    <div className="bg-primary/10 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                      JavaScript
                      <Button variant="ghost" size="sm" className="h-4 w-4 p-0">
                        <Trash2 size={12} />
                      </Button>
                    </div>
                    <div className="bg-primary/10 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                      React
                      <Button variant="ghost" size="sm" className="h-4 w-4 p-0">
                        <Trash2 size={12} />
                      </Button>
                    </div>
                    <div className="bg-primary/10 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                      Node.js
                      <Button variant="ghost" size="sm" className="h-4 w-4 p-0">
                        <Trash2 size={12} />
                      </Button>
                    </div>
                    <Input id="newSkill" placeholder="Add a skill..." className="border-0 flex-grow min-w-[150px]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="languages">Languages</Label>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Input placeholder="English" className="flex-grow" />
                      <select className="border rounded-md p-2 w-32">
                        <option>Native</option>
                        <option>Fluent</option>
                        <option>Advanced</option>
                        <option>Intermediate</option>
                        <option>Basic</option>
                      </select>
                      <Button variant="ghost" size="sm" className="text-destructive">
                        <Trash2 size={16} />
                      </Button>
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Plus size={16} />
                      Add Language
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <Button variant="outline">Previous</Button>
                <Button>Save & Continue</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preview">
          <Card>
            <CardContent className="pt-6">
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-4">Resume Preview</h2>
                <p className="text-muted-foreground">Review your resume before downloading or submitting.</p>
              </div>

              <div className="border rounded-md p-8 mb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-full bg-muted"></div>
                  <div>
                    <h2 className="text-2xl font-bold">John Doe</h2>
                    <p className="text-muted-foreground">Software Engineer</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                  <div>john@example.com</div>
                  <div>+92 300 1234567</div>
                  <div>Islamabad, Pakistan</div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-2">Professional Summary</h3>
                  <p>
                    Experienced software engineer with a passion for developing innovative solutions. Skilled in
                    JavaScript, React, and Node.js with a strong focus on creating efficient and scalable applications.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-2">Experience</h3>
                  <div className="mb-4">
                    <div className="flex justify-between mb-1">
                      <div className="font-bold">Software Engineer</div>
                      <div>Jan 2020 - Present</div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div>Example Company</div>
                      <div>Islamabad, Pakistan</div>
                    </div>
                    <p className="text-sm">
                      Developed and maintained web applications using React and Node.js. Collaborated with
                      cross-functional teams to define and implement new features.
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-2">Education</h3>
                  <div>
                    <div className="flex justify-between mb-1">
                      <div className="font-bold">Bachelor of Science in Computer Science</div>
                      <div>2016 - 2020</div>
                    </div>
                    <div>Example University</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <div className="bg-primary/10 px-3 py-1 rounded-full text-sm">JavaScript</div>
                    <div className="bg-primary/10 px-3 py-1 rounded-full text-sm">React</div>
                    <div className="bg-primary/10 px-3 py-1 rounded-full text-sm">Node.js</div>
                    <div className="bg-primary/10 px-3 py-1 rounded-full text-sm">HTML/CSS</div>
                    <div className="bg-primary/10 px-3 py-1 rounded-full text-sm">Git</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <Button variant="outline">Previous</Button>
                <div className="flex gap-2">
                  <Button variant="outline">Download PDF</Button>
                  <Button>Submit to Jobs</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
