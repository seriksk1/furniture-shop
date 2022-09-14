import React from "react"
import classNames from "classnames"
import styles from "./NewProducts.module.pcss"

interface NewProductsProps {
  className?: string
}

export const NewProducts: React.FC<NewProductsProps> = ({ className }) => {
  const classes = classNames(styles.container, className)

  return <div className={classes}>NewProducts</div>
}
