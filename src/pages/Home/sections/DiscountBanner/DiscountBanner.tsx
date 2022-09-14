import React from "react"
import classNames from "classnames"
import styles from "./DiscountBanner.module.pcss"

interface DiscountBannerProps {
  className?: string
}

export const DiscountBanner: React.FC<DiscountBannerProps> = ({ className }) => {
  const classes = classNames(styles.container, className)

  return <div className={classes}>DiscountBanner</div>
}
