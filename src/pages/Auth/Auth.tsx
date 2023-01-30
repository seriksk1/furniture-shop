import React from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { LogoIcon } from "../../assets/icons"
import { appPaths } from "../../constants"
import { AuthForm, CustomSlider } from "../../containers"
import { useWidthBreakpoint } from "../../hooks"
import { selectAuth } from "../../store"
import styles from "./Auth.module.pcss"

const authBackgroundImage1 = require("../../assets/images/auth/bg-1.png")
const authBackgroundImage2 = require("../../assets/images/auth/bg-2.png")

const sliderImages = [authBackgroundImage1, authBackgroundImage2, authBackgroundImage1]

export const Auth: React.FC = () => {
  const { token } = useSelector(selectAuth)
  const isMobileDevice = useWidthBreakpoint(1024)

  if (token) {
    return <Navigate to={appPaths.home} />
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <LogoIcon className={styles.logo} />
        <AuthForm className={styles.form} />
      </div>
      <div className={styles.container}>
        <CustomSlider
          className={styles.slider}
          slidesToShow={1}
          arrows={false}
          pagination={isMobileDevice ? false : true}
          infinite
          autoplay
          autoplaySpeed={7000}
        >
          {sliderImages.map((image, i) => (
            <img key={i} className={styles.image} src={image} />
          ))}
        </CustomSlider>
      </div>
    </div>
  )
}
