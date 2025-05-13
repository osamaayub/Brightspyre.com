import { Key } from "react";


  export interface Filters {
    category_name: string[];
    city: string[],
    organization: string[]
  }
  
  
  export type Job = {
    organization_logo:string;
    encrypted_id:string;
    description:string;
    id: string;
    title: string;
    country: string;
    city: string;
    category_name: string;
    organization: string;
    salary: number;
  };
  

  export type Company={
    id: Key | null | undefined;
    organization:string,
    city:string,
    positions:string,
    category_name:string
  }


export interface Filters {
    category_name: string
    country: string
    salary: number[]
    title:string,
    organization:string,
    city:string
  }


