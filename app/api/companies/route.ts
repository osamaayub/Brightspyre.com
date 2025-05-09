import { NextRequest,NextResponse } from "next/server";
import axios from "axios";


export async function GET(req:NextRequest) {
    try {
      console.log("API HIT");
      const response = await axios.get('https://resume.brightspyre.com/api/auth/jobs/list?page=1&limit=100');
  
      // Extract unique organizations from job listings
      const results=response?.data?.results;
      const organizations = results.map((job: { organization: string})=>job.organization);
     
      
      
  
      return NextResponse.json({ organizations });
    } catch (error:any) {
      return NextResponse.json({
        message:'error Fetching Data|500'
      })
    }
  }
  