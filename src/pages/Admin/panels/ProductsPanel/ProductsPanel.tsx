import React from "react"
import styles from "./ProductsPanel.module.pcss"
import classNames from "classnames"

interface Props {
  className?: string
}

export const ProductsPanel: React.FC<Props> = ({ className }) => {
  const classes = classNames(styles.container, className)
  return <div className={classes}>ProductsPanel</div>
}
