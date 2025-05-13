import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  try {
    // Make the API request
    const response = await axios.get(
      'https://resume.brightspyre.com/api/auth/jobs/list?page=1&limit=100'
    );
    
    // Extract company details from the response data
    const companies = response.data.results.map((job: any) => ({
      id: job.id, // assuming the job object has an id
      organization: job.organization, // company name
      category_name: job.category_name, // company category
      positions: job.positions, // company size or available positions
      city: job.city, // assuming the job object has a city property
    }));
    console.log(response.data);
    
    // Return the filtered company data
    return NextResponse.json(companies);
  } catch (error: any) {
    // Log the error for debugging

    // Return an error response
    return NextResponse.json({
      message: 'Error Fetching Data | 500',
      error: error?.response?.data || error?.message || 'Unknown error',
    }, { status: 500 });
  }
}
