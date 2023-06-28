import * as yup from "yup"

export const roleFormSchema = yup
  .object({
    name: yup
      .string()
      .required("Required")
      .min(1, "Should be 2 symbol minimum")
      .max(255, "Should be 255 symbols maximum"),
    description: yup
      .string()
      .required("Required")
      .min(1, "Should be 1 symbol minimum")
      .max(255, "Should be 255 symbols maximum"),
  })
  .required()
