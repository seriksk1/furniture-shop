import React from "react"
import styles from "./ProductForm.module.pcss"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm, SubmitHandler } from "react-hook-form"
import { productFormSchema } from "./product-form.validation"
import { Button, ButtonSizes, InputField } from "../../../../../components/UI"
import { useLoginMutation } from "../../../../../store"
interface IProductFormInput {
  name: string
  description: string
}

export const ProductForm: React.FC = () => {
  const [loginRequest, { data, isLoading }] = useLoginMutation()
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<IProductFormInput>({
    resolver: yupResolver(productFormSchema),
  })

  const onSubmit: SubmitHandler<IProductFormInput> = (data) => {
    console.log("form submit data:", data)
    reset()
  }

  const onRegister = (name: any) => {
    return { ...register(name) }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        className={styles.input}
        placeholder="Product name"
        register={onRegister("name")}
        error={errors?.name?.message}
      />
      <InputField
        className={styles.input}
        placeholder="Product description"
        register={onRegister("description")}
        error={errors?.description?.message}
      />
      <Button size={ButtonSizes.large} disabled={!isDirty || isLoading} fullWidth submit>
        {isLoading ? "Loading..." : "Add product"}
      </Button>
    </form>
  )
}
