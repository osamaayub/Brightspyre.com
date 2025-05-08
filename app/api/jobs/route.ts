import axios from "axios";
import { NextRequest, NextResponse } from "next/server";




export async function GET(req:NextRequest) {
   try {
      const response = await axios.get("https://resume.brightspyre.com/api/auth/jobs/list?page=1&limit=100", {
         

         headers: {
            'Authorization': `Bearer ${process.env.BEARER_TOKEN}`
         }
      }
 
      )
      return NextResponse.json(response.data);
   }
   catch (error: any) {
      return NextResponse.json({
         'message': 'error fetching data ||500'
      })
   }
}


