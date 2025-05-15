"use client";

import Link from "next/link"
import {useState,useEffect}from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import axios from "axios";

import { Company } from "@/types/filter";

export default function CompaniesPage() {
   const [companies,setCompanies]=useState<Company[]>([]);
   const [error,setError]=useState<string|null>(null);
   const [loading,setLoading]=useState<boolean>(true);


 useEffect(()=>{
   fetchJobs();
 },[]);

  async function fetchJobs(){
    try{
    const response=await axios.get("/api/companies");
    console.log(companies);
    setCompanies(response.data?.results||[]);
    }catch(error:any){
      setError(error?.response?.data?.message||"companies data not found");
    }
    finally{
      setLoading(false);
    }
  }
  if (loading) return <div className="text-center text-gray-600">Loading jobs...</div>;
  if (error) return <div className="text-red-600 text-center">{error}</div>;


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Companies</h1>

      <div className="mb-8">
        <div className="flex gap-4 max-w-xl">
          <Input placeholder="Search companies..." className="flex-1" />
          <Button>Search</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company) => (
          <Card key={company.id}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold">
                  {company.organization?.charAt(0)}
                </div>
                <div>
                  <CardTitle>{company.organization}</CardTitle>
                  <CardDescription>{company.category_name}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location:</span>
                  <span>{company.city}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Company Size:</span>
                  <span>{company.positions}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href={`/companies/${company.id}`} className="w-full">
                <Button variant="outline" className="w-full">
                  View Profile
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
