import React from "react"
import styles from "./SubscriptionsPanel.module.pcss"
import classNames from "classnames"

interface Props {
  className?: string
}

export const SubscriptionsPanel: React.FC<Props> = ({ className }) => {
  const classes = classNames(styles.container, className)
  return <div className={classes}>SubscriptionsPanel</div>
}
