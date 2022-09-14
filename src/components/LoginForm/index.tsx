import React from "react"
import { Link } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm, SubmitHandler } from "react-hook-form"
import { loginFormSchema } from "./login-form.validation"
import { Button, InputField } from "../UI"
import styles from "./LoginForm.module.pcss"

interface ILoginFormInput {
  email: string
  password: string
}

export const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<ILoginFormInput>({
    resolver: yupResolver(loginFormSchema),
  })

  const onSubmit: SubmitHandler<ILoginFormInput> = (value) => {
    console.log(value)
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

      <div className={styles.forgotPassword}>
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>

      <Button size="large" disabled={!isDirty} fullWidth submit>
        Login
      </Button>
    </form>
  )
}
