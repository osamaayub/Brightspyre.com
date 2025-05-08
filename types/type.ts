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