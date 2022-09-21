import * as yup from "yup"

export const paymentFormSchema = yup
  .object({
    email: yup.string().email("Not an email").required("Required"),
  })
  .required()
