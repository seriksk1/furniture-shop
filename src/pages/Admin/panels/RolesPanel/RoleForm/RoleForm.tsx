import React from "react"
import styles from "./RoleForm.module.pcss"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm, SubmitHandler } from "react-hook-form"
import { roleFormSchema } from "./role-form.validation"
import { Button, ButtonSizes, InputField } from "../../../../../components/UI"
import { useLoginMutation } from "../../../../../store/slices"
interface IRoleFormInput {
  name: string
  description: string
}

export const RoleForm: React.FC = () => {
  const [loginRequest, { data, isLoading }] = useLoginMutation()
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<IRoleFormInput>({
    resolver: yupResolver(roleFormSchema),
  })

  const onSubmit: SubmitHandler<IRoleFormInput> = (data) => {
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
        placeholder="Role name"
        register={onRegister("name")}
        error={errors?.name?.message}
      />
      <InputField
        className={styles.input}
        placeholder="Role description"
        register={onRegister("description")}
        error={errors?.description?.message}
      />
      <Button size={ButtonSizes.large} disabled={!isDirty || isLoading} fullWidth submit>
        {isLoading ? "Loading..." : "Add role"}
      </Button>
    </form>
  )
}
