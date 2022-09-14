import React from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { LogoIcon } from "../../assets/icons"
import { appPaths } from "../../constants"
import { AuthForm } from "../../containers"
import { selectAuth } from "../../store/slices"
import styles from "./Auth.module.pcss"

const authBackgroundImage = require("../../assets/images/auth-bg-1.png")

export const Auth: React.FC = () => {
  const { token } = useSelector(selectAuth)

  if (token) {
    return <Navigate to={appPaths.home} />
  }

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
