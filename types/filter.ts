
  export interface Filters {
    category_name: string;
    location: string;
    salary: number[];
    title: string;
    city: string;
    country: string;
    job_type: string;
    organization: string;
  }
  
  export type Job = {
    title: string;
    location: string;
    organization: string;
    category_name: string;
    description?: string;
    salary: number;
  };
  
  export type JobsApiResponse = {
    results: Job[];
  };