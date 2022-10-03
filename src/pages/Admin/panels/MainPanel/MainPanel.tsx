import React from "react"
import styles from "./MainPanel.module.pcss"
import classNames from "classnames"

interface Props {
  className?: string
}

export const MainPanel: React.FC<Props> = ({ className }) => {
  const classes = classNames(styles.container, className)
  return <div className={classes}>MainPanel</div>
}
