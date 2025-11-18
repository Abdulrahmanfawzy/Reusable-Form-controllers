import z from "zod";

export const loginValidation = z.object({
  email: z.string().min(1, { message: "email is required" }).email(),
  password: z
    .string()
    .min(6, { message: "password length must be 6 or greater than" }),
});
