
  export interface Filters {
    category_name: string;
    salary: number[],
    title: string;
    city: string;
    country: string;
    organization: string;
  }
  
  
  export type Job = {
    id: string;
    title: string;
    country: string;
    city: string;
    category_name: string;
    organization: string;
    salary: number;
  };
  
