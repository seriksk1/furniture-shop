import React from "react"
import { Link } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm, SubmitHandler } from "react-hook-form"
import { registerFormSchema } from "./register-form.validation"
import { Button, Checkbox, InputField } from "../UI"
import styles from "./RegisterForm.module.pcss"
import { useToggle } from "../../hooks"
import { appPaths } from "../../constants"

interface IRegisterFormInput {
  email: string
  password: string
  confirmPassword: string
}

export const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<IRegisterFormInput>({
    resolver: yupResolver(registerFormSchema),
  })

  const { active: termsChecked, onToggle: onTermsToggle } = useToggle(false)

  const onSubmit: SubmitHandler<IRegisterFormInput> = (data) => {
    console.log(data)
  }

  const onRegister = (name: any) => {
    return { ...register(name) }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        className={styles.input}
        placeholder="Email"
        register={onRegister("email")}
        error={errors?.email?.message}
      />
      <InputField
        className={styles.input}
        placeholder="Password"
        register={onRegister("password")}
        error={errors?.password?.message}
      />
      <InputField
        placeholder="Confirm password"
        register={onRegister("confirmPassword")}
        error={errors?.confirmPassword?.message}
      />

      <div className={styles.terms}>
        <Checkbox className={styles.checkbox} onToggle={onTermsToggle} checked={termsChecked}>
          <span>I agree with </span>
          <Link className={styles.link} to={appPaths.home}>
            Terms and Conditions
          </Link>
        </Checkbox>
      </div>

      <Button size="large" disabled={!isDirty} fullWidth submit>
        Register
      </Button>
    </form>
  )
}
