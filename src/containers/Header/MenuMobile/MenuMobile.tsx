import React from "react"
import classNames from "classnames"
import styles from "./MenuMobile.module.pcss"

interface MenuMobileProps {
  className?: string
}

export const MenuMobile: React.FC<MenuMobileProps> = ({ className }) => {
  const classes = classNames(styles.container, className)

  return <div className={classes}></div>
}
