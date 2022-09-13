import React from "react"
import { Link } from "react-router-dom"
import { useInput } from "../../hooks"
import { Button, ButtonGroup, InputField } from "../UI"
import styles from "./AuthForm.module.pcss"

type AuthType = "login" | "register"

const authTypes = ["login", "register"]

export const AuthForm: React.FC = () => {
  const [authType, setAuthType] = React.useState<AuthType>("login")
  const emailState = useInput("")
  const passwordState = useInput("")
  const confirmPasswordState = useInput("")

  React.useEffect(() => {
    const clearForm = () => {
      confirmPasswordState.clear()
      passwordState.clear()
      emailState.clear()
    }

    clearForm()
  }, [authType])

  const isRegister = authType === "register"

  const onAuthTypeToggle = () => {
    setAuthType((prev) => (prev === "login" ? "register" : "login"))
  }

  const onLogin = () => {
    console.log({ email: emailState.value, password: passwordState.value })
  }

  const onRegister = () => {
    console.log({
      email: emailState.value,
      password: passwordState.value,
      confirmPassword: passwordState.value,
    })
  }

  const onSubmit = () => {
    isRegister ? onRegister() : onLogin()
  }

  return (
    <div className={styles.form}>
      <ButtonGroup>
        {authTypes.map((type) => {
          return (
            <Button
              className={authType === type ? styles.selected : styles.notSelected}
              key={type}
              type="borderless"
              size="small"
              onClick={onAuthTypeToggle}
            >
              {type}
            </Button>
          )
        })}
      </ButtonGroup>

      <InputField
        className={styles.input}
        error={false}
        helperText="Not an email"
        placeholder="Email"
        {...emailState}
      />
      <InputField
        className={styles.input}
        error={false}
        helperText="Minumum 6 symbols Maximum 20 symbols, Should have at least 1 upper letter"
        placeholder="Password"
        {...passwordState}
      />
      {isRegister && (
        <InputField
          error={false}
          helperText="Not as previous one"
          placeholder="Repeat Password"
          {...confirmPasswordState}
        />
      )}

      <div className={styles.forgotPassword}>
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>

      <Button onClick={onSubmit} size="large" disabled={true} fullWidth>
        {authType}
      </Button>
    </div>
  )
}
