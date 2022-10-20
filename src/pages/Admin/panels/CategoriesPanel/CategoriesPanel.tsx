import React from "react"
import styles from "./CategoriesPanel.module.pcss"
import classNames from "classnames"

interface Props {
  className?: string
}

export const CategoriesPanel: React.FC<Props> = ({ className }) => {
  const classes = classNames(styles.container, className)
  return <div className={classes}>CategoriesPanel</div>
}
