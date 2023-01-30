import React from "react"
import styles from "./CategoryForm.module.pcss"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm, SubmitHandler } from "react-hook-form"
import { categoryFormSchema } from "./category-form.validation"
import { Button, ButtonSizes, InputField } from "../../../../../../components/UI"
import { useCreateCategoryMutation } from "../../../../../../store"
interface ICategoryFormInput {
  name: string
  description: string
}

export const CategoryForm: React.FC = () => {
  const [createCategory, { data, isLoading }] = useCreateCategoryMutation()
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<ICategoryFormInput>({
    resolver: yupResolver(categoryFormSchema),
  })

  const onSubmit: SubmitHandler<ICategoryFormInput> = (data) => {
    console.log("form submit data:", data)
    // createCategory(data)
    reset()
  }

  const onRegister = (name: any) => {
    return { ...register(name) }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        className={styles.input}
        placeholder="Category name"
        register={onRegister("name")}
        error={errors?.name?.message}
      />
      <InputField
        className={styles.input}
        placeholder="Category description"
        register={onRegister("description")}
        error={errors?.description?.message}
      />
      <Button size={ButtonSizes.large} disabled={!isDirty || isLoading} fullWidth submit>
        {isLoading ? "Loading..." : "Add category"}
      </Button>
    </form>
  )
}
