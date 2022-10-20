import React from "react"
import styles from "./RolesPanel.module.pcss"
import classNames from "classnames"
interface Props {
  className?: string
}

export const RolesPanel: React.FC<Props> = ({ className }) => {
  const classes = classNames(styles.container, className)

  return <div className={classes}></div>
}
