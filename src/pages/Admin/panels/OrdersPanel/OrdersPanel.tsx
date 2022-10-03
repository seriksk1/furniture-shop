import React from "react"
import styles from "./OrdersPanel.module.pcss"
import classNames from "classnames"

interface Props {
  className?: string
}

export const OrdersPanel: React.FC<Props> = ({ className }) => {
  const classes = classNames(styles.container, className)
  return <div className={classes}>OrdersPanel</div>
}
