import React from "react"
import classNames from "classnames"
import styles from "./SubscribeUs.module.pcss"

interface SubscribeUsProps {
  className?: string
}

export const SubscribeUs: React.FC<SubscribeUsProps> = ({ className }) => {
  const classes = classNames(styles.container, className)

  return <div className={classes}>SubscribeUs</div>
}
