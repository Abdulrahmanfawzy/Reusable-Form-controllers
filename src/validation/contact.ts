import z from "zod";

export const contactValidation = z.object({
  age: z
    .number({ message: "Age must be a number" })
    .min(18, "You must be at least 18")
    .max(55, "You must be at max 55"),
  country: z.string().min(1, { message: "must choose a country" }),
  gender: z.enum(["female", "male"], {
    message: "Gender must be either male or female",
  }),
  image: z
    .any()
    .refine((files) => files?.length === 1, "Image is required")
    .refine(
      (files) => {
        const file = files[0];
        const validTypes = [
          "image/png",
          "image/jpeg",
          "image/jpg",
          "image/webp",
        ];
        return validTypes.includes(file?.type);
      },
      { message: "Only PNG, JPG, JPEG, WEBP are allowed" }
    ),
});
