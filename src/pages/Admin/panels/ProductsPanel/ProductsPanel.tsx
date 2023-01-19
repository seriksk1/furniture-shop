import React from "react"
import styles from "./ProductsPanel.module.pcss"
import classNames from "classnames"
import { ProductForm } from "./ProductForm/ProductForm"

interface Props {
  className?: string
}

export const ProductsPanel: React.FC<Props> = ({ className }) => {
  const classes = classNames(styles.container, className)
  return (
    <div className={classes}>
      <ProductForm />
    </div>
  )
}
