import React from "react"
import classNames from "classnames"
import styles from "./ProductMessage.module.pcss"

interface ProductMessageProps {
  className?: string
}

export const ProductMessage: React.FC<ProductMessageProps> = ({ className }) => {
  const classes = classNames(styles.container, className)

  return <div className={classes}>ProductMessage</div>
}
