import z from "zod";

export const registerValidation = z
  .object({
    firstname: z.string().min(1, { message: "FirstName is required" }),
    lastname: z.string().min(1, { message: "LastName is required" }),
    email: z.string().min(1, { message: "email is required" }).email(),
    password: z
      .string()
      .min(6, { message: "password length must be 6 or greater than" })
      .regex(/(?=.*[A-Z])(?=.*[\W])(?=.*[0-9]).{6,}/, {
        message:
          "password must have at least one digit, uppercase and special character",
      }),
    confirm_password: z
      .string()
      .min(1, { message: "confirm password is required" }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "passwords not match",
    path: ["confirm_password"],
  });
