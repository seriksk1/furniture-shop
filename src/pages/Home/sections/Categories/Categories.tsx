import React from "react"
import classNames from "classnames"
import styles from "./Categories.module.pcss"

interface CategoriesProps {
  className?: string
}

export const Categories: React.FC<CategoriesProps> = ({ className }) => {
  const classes = classNames(styles.container, className)

  return <div className={classes}>Categories</div>
}
