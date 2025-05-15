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

export const applySchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional(),
  resume: z
    .any()
    .refine((files) => files?.length === 1, "Resume is required")
    .refine(
      (files) =>
        files?.[0]?.size <= 5 * 1024 * 1024, // max 5MB
      "Max file size is 5MB"
    )
    .refine(
      (files) =>
        ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(files?.[0]?.type),
      "Only PDF, DOC, DOCX files are accepted"
    ),
  coverLetter: z.string().optional(),
  linkedin: z.string().url("Invalid URL").optional(),
})