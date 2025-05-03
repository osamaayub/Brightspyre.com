"use client"

import React from "react"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProfileTabsProps {
  children: React.ReactNode
  defaultTab?: string
}

export function ProfileTabs({ children, defaultTab = "applications" }: ProfileTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab)

  // Get an array of React.Children to work with
  const childrenArray = React.Children.toArray(children)

  return (
    <Tabs defaultValue={defaultTab} className="w-full">
      <TabsList className="grid grid-cols-3 mb-8">
        <TabsTrigger value="applications">Applications</TabsTrigger>
        <TabsTrigger value="saved">Saved Jobs</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="applications">{childrenArray[0]}</TabsContent>
      <TabsContent value="saved">{childrenArray[1]}</TabsContent>
      <TabsContent value="settings">{childrenArray[2]}</TabsContent>
    </Tabs>
  )
}
