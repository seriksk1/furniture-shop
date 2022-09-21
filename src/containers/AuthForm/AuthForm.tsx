import React from "react"
import { Button, ButtonGroup } from "../../components/UI"
import { LoginForm, RegisterForm } from "../../components"
import styles from "./AuthForm.module.pcss"

type AuthType = "login" | "register"

const authTypes = ["login", "register"]

export const AuthForm: React.FC = () => {
  const [authType, setAuthType] = React.useState<AuthType>("login")

  const onAuthTypeToggle = () => {
    setAuthType((prev) => (prev === "login" ? "register" : "login"))
  }

  return (
    <div className={styles.form}>
      <ButtonGroup>
        {authTypes.map((type) => {
          return (
            <Button
              key={type}
              className={authType === type ? styles.selected : styles.notSelected}
              type="borderless"
              size="small"
              onClick={onAuthTypeToggle}
            >
              {type}
            </Button>
          )
        })}
      </ButtonGroup>

      {authType === "register" ? <RegisterForm /> : <LoginForm />}
    </div>
  )
}
