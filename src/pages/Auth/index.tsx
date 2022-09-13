import React from "react"
import { LogoIcon } from "../../assets/icons"
import { AuthForm } from "../../components"
import styles from "./Auth.module.pcss"

const authBackgroundImage = require("../../assets/images/auth-bg-1.png")

export const Auth: React.FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <LogoIcon className={styles.logo} />
        <AuthForm />
      </div>
      <div className={styles.container}>
        <img className={styles.image} src={authBackgroundImage} alt="interior" />
      </div>
    </div>
  )
}
