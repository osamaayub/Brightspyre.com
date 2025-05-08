import {z} from "zod";



export const LoginFormSchema=z.object({
 email:z.string().email({message:"email is required"}),
 password:z.string().min(6,{message:"password must be atleast 6 characters"})
})

export const SignUpFormSchema=z.object({
    firstName:z.string().min(3,{message:"firstName is required"}),
    lastName:z.string().min(3,{message:"lastName is required"}),
    email:z.string().email({message:"email is required"}),
    password:z.string().min(6,{message:"password must be atleast 6 characters"}),
    confirmPassword: z.string().min(6, { message: "Password must be at least 6 characters" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});