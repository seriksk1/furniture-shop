import * as yup from "yup"

export const loginFormSchema = yup
  .object({
    email: yup.string().email("Not an email").required("Required"),
    password: yup
      .string()
      .required("Required")
      .min(6, "Should be 6 symbols minimum")
      .max(20, "Should be 20 symbols maximum"),
  })
  .required()
