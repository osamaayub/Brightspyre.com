import { File } from "buffer"
import { string } from "zod"

export type FormInput={
    email:string,
    password:string
}

export type SignUpForm={
    firstName:string,
    lastName:string,
    email:string,
    password:string,
    confirmPassword:string
}

export interface ApplyButtonProps {
    jobId: string
    jobTitle: string
    company?: string,
    firstName?:string,
    lastName?:string,
    email?:string,
    resume?:File,
    phone?:string,
    linkedin?:string,
    coverLetter?:string
  }