"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function EditProfilePage() {
  const { toast } = useToast();

  const [newSkill, setNewSkill] = useState("");
  const [isEditing, setIsEditing] = useState(false);  // To toggle between view and edit mode
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    title: "Senior Frontend Developer",
    location: "San Francisco, CA",
    bio: "Experienced frontend developer with a passion for creating beautiful and functional user interfaces.",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js"],
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
  });

  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      setUser((prev) => ({
        ...prev,
        skills: [...prev.skills, newSkill],
      }));
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setUser((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
    }));
  };

  const handleUpdateUserData = (field: string, value: string) => {
    setUser((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSaveProfile = () => {
    // Save the updated profile (In this case, just showing a toast)
    toast({
      title: "Profile updated",
      description: "Your profile has been successfully updated.",
    });
    setIsEditing(false);  // Switch back to view mode
  };

  const handleEditProfile = () => {
    setIsEditing(true);  // Switch to edit mode
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Edit Profile</h1>
        {!isEditing && (
          <Button variant="outline" onClick={handleEditProfile}>Edit Profile</Button>
        )}
      </div>

      <form>
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
                    {isEditing && (
                      <>
                        <Input
                          placeholder="Add a skill"
                          value={newSkill}
                          onChange={(e) => setNewSkill(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              handleAddSkill();
                            }
                          }}
                        />
                        <Button type="button" onClick={handleAddSkill}>
                          Add
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <>
                    <Input
                      value={user.name}
                      onChange={(e) => handleUpdateUserData("name", e.target.value)}
                    />
                    <Input
                      value={user.email}
                      onChange={(e) => handleUpdateUserData("email", e.target.value)}
                    />
                    <Input
                      value={user.title}
                      onChange={(e) => handleUpdateUserData("title", e.target.value)}
                    />
                    <Input
                      value={user.location}
                      onChange={(e) => handleUpdateUserData("location", e.target.value)}
                    />
                    <Textarea
                      value={user.bio}
                      onChange={(e) => handleUpdateUserData("bio", e.target.value)}
                    />
                  </>
                ) : (
                  <>
                    <div>
                      <strong>Name: </strong> {user.name}
                    </div>
                    <div>
                      <strong>Email: </strong> {user.email}
                    </div>
                    <div>
                      <strong>Title: </strong> {user.title}
                    </div>
                    <div>
                      <strong>Location: </strong> {user.location}
                    </div>
                    <div>
                      <strong>Bio: </strong> {user.bio}
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Experience</CardTitle>
              </CardHeader>
              <CardContent>
                {user.experience.map((exp, index) => (
                  <div key={index} className="space-y-2">
                    {isEditing ? (
                      <>
                        <Input
                          value={exp.title}
                          onChange={(e) => {
                            const newExperience = [...user.experience];
                            newExperience[index].title = e.target.value;
                            setUser((prev) => ({ ...prev, experience: newExperience }));
                          }}
                        />
                        <Input
                          value={exp.company}
                          onChange={(e) => {
                            const newExperience = [...user.experience];
                            newExperience[index].company = e.target.value;
                            setUser((prev) => ({ ...prev, experience: newExperience }));
                          }}
                        />
                        <Input
                          value={exp.period}
                          onChange={(e) => {
                            const newExperience = [...user.experience];
                            newExperience[index].period = e.target.value;
                            setUser((prev) => ({ ...prev, experience: newExperience }));
                          }}
                        />
                        <Textarea
                          value={exp.description}
                          onChange={(e) => {
                            const newExperience = [...user.experience];
                            newExperience[index].description = e.target.value;
                            setUser((prev) => ({ ...prev, experience: newExperience }));
                          }}
                        />
                      </>
                    ) : (
                      <>
                        <div><strong>Job Title:</strong> {exp.title}</div>
                        <div><strong>Company:</strong> {exp.company}</div>
                        <div><strong>Period:</strong> {exp.period}</div>
                        <div><strong>Description:</strong> {exp.description}</div>
                      </>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                {user.education.map((edu, index) => (
                  <div key={index} className="space-y-2">
                    {isEditing ? (
                      <>
                        <Input
                          value={edu.degree}
                          onChange={(e) => {
                            const newEducation = [...user.education];
                            newEducation[index].degree = e.target.value;
                            setUser((prev) => ({ ...prev, education: newEducation }));
                          }}
                        />
                        <Input
                          value={edu.institution}
                          onChange={(e) => {
                            const newEducation = [...user.education];
                            newEducation[index].institution = e.target.value;
                            setUser((prev) => ({ ...prev, education: newEducation }));
                          }}
                        />
                        <Input
                          value={edu.year}
                          onChange={(e) => {
                            const newEducation = [...user.education];
                            newEducation[index].year = e.target.value;
                            setUser((prev) => ({ ...prev, education: newEducation }));
                          }}
                        />
                      </>
                    ) : (
                      <>
                        <div><strong>Degree:</strong> {edu.degree}</div>
                        <div><strong>Institution:</strong> {edu.institution}</div>
                        <div><strong>Year:</strong> {edu.year}</div>
                      </>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {isEditing && (
          <div className="mt-8 text-right">
            <Button type="button" onClick={handleSaveProfile}>Save Profile</Button>
          </div>
        )}
      </form>
    </div>
  );
}
