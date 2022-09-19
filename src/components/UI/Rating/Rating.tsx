import React from "react"
import classNames from "classnames"
import styles from "./Rating.module.pcss"
import { StarOutlined } from "../../../assets/icons"

interface RatingProps {
  stars: RatingType
  className?: string
}

export const Rating: React.FC<RatingProps> = ({ stars, className }) => {
  const classes = classNames(styles.rating, className)
  const list = new Array(stars).fill("")

  return (
    <div className={classes}>
      {list.map((_, i) => (
        <StarOutlined key={i} />
      ))}
    </div>
  )
}
