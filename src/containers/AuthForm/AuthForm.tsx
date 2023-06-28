import React from "react"
import classNames from "classnames"
import styles from "./AuthForm.module.pcss"
import { Button, ButtonGroup, ButtonTypes } from "../../components/UI"
import { RegisterForm } from "./RegisterForm/RegisterForm"
import { LoginForm } from "./LoginForm/LoginForm"

type AuthType = "login" | "register"

const authTypes = ["login", "register"]

interface AuthFormProps {
  className?: string
}

export const AuthForm: React.FC<AuthFormProps> = ({ className }) => {
  const classes = classNames(styles.form, className)
  const [authType, setAuthType] = React.useState<AuthType>("login")

  const onAuthTypeToggle = () => {
    setAuthType((prev) => (prev === "login" ? "register" : "login"))
  }

  return (
    <div className={classes}>
      <ButtonGroup className={styles.selection}>
        {authTypes.map((type) => {
          return (
            <Button
              key={type}
              className={authType === type ? styles.selected : styles.notSelected}
              type={ButtonTypes.borderless}
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
