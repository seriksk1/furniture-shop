import React from "react"
import { Link } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm, SubmitHandler } from "react-hook-form"
import { loginFormSchema } from "./login-form.validation"
import { Button, ButtonSizes, InputField } from "../UI"
import styles from "./LoginForm.module.pcss"
import { login, useLoginMutation } from "../../store/slices"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"

interface ILoginFormInput {
  email: string
  password: string
}

export const LoginForm: React.FC = () => {
  const [loginRequest, { data: loginResponse, isLoading }] = useLoginMutation()
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<ILoginFormInput>({
    resolver: yupResolver(loginFormSchema),
  })

  const dispatch = useDispatch()

  React.useEffect(() => {
    if (loginResponse) {
      dispatch(login(loginResponse))
      toast.success("Login Success!")
    }
  }, [dispatch, loginResponse])

  const onSubmit: SubmitHandler<ILoginFormInput> = (data) => {
    loginRequest(data)
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

      <Button size={ButtonSizes.large} disabled={!isDirty || isLoading} fullWidth submit>
        {isLoading ? "Loading..." : "Login"}
      </Button>
    </form>
  )
}
