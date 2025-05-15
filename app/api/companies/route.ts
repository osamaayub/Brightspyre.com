import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  try {
    // Make the API request
    const response = await axios.get(
      'https://resume.brightspyre.com/api/auth/jobs/list?page=1&limit=100',{
        headers: {
          Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        }
      }
    );
    // Return the filtered company data
    return NextResponse.json(response.data.results);
  } catch (error: any) {
    // Log the error for debugging

    // Return an error response
    return NextResponse.json({
      message: 'Error Fetching Data | 500',
      error: error?.response?.data || error?.message || 'Unknown error',
    }, { status: 500 });
  }
}
