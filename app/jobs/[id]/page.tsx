'use client';

import { useEffect, useState } from 'react';
import striptags from 'striptags';
import he from 'he';
import Image from 'next/image';
import axios from 'axios';
import { useParams } from 'next/navigation'; // updated for dynamic params
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ApplyButton } from '@/components/apply-button';
import { SaveJobButton } from '@/components/save-job-button';
import Link from 'next/link';

export default function JobPage() {
  const { id } = useParams(); // Get dynamic 'id' from the URL
  const [job, setJob] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch job details when 'id' is available and has changed
  useEffect(() => {
    if (id) {
      fetchJob();
    }
  }, [id]);

  const fetchJob = async () => {
    try {
      const res = await axios.get(`/api/jobs/${id}`);
      setJob(res.data);
    } catch (error: any) {
      setError(error.response?.data?.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center text-red-500 py-8">{error}</div>;

  // Clean description function
  function cleanDescription(html: string) {
    return he.decode(striptags(html)); // Remove HTML tags and decode HTML entities
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/jobs">
          <Button variant="ghost" size="sm">
            ← Back to Jobs
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Job Details Section */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex flex-col lg:flex-row justify-between items-start">
                <div>
                  <CardTitle className="text-3xl font-bold">{job?.title}</CardTitle>
                  <CardDescription className="text-lg mt-1 text-gray-600">
                    <Link
                      href={`/companies/${job.url}`}
                      className="hover:underline text-blue-600"
                    >
                      {job?.organization}
                    </Link>{' '}
                    • {job?.city}, {job?.country}
                  </CardDescription>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 lg:mt-0">
                  <Badge className="bg-blue-100 text-blue-800 mb-2 sm:mb-0">{job?.category_name}</Badge>
                  <Badge variant="outline" className="text-gray-700 mb-2 sm:mb-0">
                    Position(s): {job?.positions}
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 lg:mt-0">
                  {job?.Salary}
                  
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Job Description</h3>
                <div
                  className="text-gray-800"
                  dangerouslySetInnerHTML={{ __html: job?.description }}
                />
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-2">Job End Date</h3>
                <p className="text-gray-600">{job?.end_date}</p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-4">
              <div className="flex gap-4 w-full justify-center sm:justify-start">
                <ApplyButton
                  jobId={job?.id}
                  jobTitle={job?.title}
                  company={job?.organization} 
                  firstName={''} 
                  lastName={''} 
                  email={''} 
                  phone={''} 
                  linkedin={''} 
                  coverLetter={''}              />
                <SaveJobButton jobId={job?.id} jobTitle={job?.title} />
              </div>
            </CardFooter>
          </Card>
        </div>

        {/* Company Information Section */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Company Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center mb-4">
                <div className="w-20 h-20 bg-gray-200 rounded-full mb-2 flex items-center justify-center text-2xl font-bold text-white">
                  {job?.organization?.charAt(0)}
                </div>
                <h3 className="text-lg font-semibold text-center text-gray-800">{job?.organization}</h3>
                <div className="mt-2">
                  <Image
                    src={job.organization_logo}
                    alt="organization logo"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-4 text-center">
                {cleanDescription(job?.description)} {/* Cleaned description */}
              </p>
              <p className="text-muted-foreground text-sm mb-4 text-center">
                {job?.organization}
              </p>
              <Link href={`/companies/${job.organization}`}>
                <Button variant="outline" className="w-full text-white bg-blue-600 hover:bg-blue-700">
                  View Profile
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
