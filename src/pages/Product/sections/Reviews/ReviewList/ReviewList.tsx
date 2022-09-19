import React from "react"
import classNames from "classnames"
import styles from "./ReviewList.module.pcss"

interface ReviewListProps {
  className?: string
}

export const ReviewList: React.FC<ReviewListProps> = ({ className }) => {
  const classes = classNames(styles.container, className)
  return <div className={classes}>ReviewList</div>
}
