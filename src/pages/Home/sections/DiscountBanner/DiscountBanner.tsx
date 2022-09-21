import React from "react"
import classNames from "classnames"
import styles from "./DiscountBanner.module.pcss"
import { Button, Tip } from "../../../../components"

import saleImage from "../../../../assets/images/sale-image.png"
import brandLogo from "../../../../assets/images/sale-brand.png"

interface DiscountBannerProps {
  className?: string
}

export const DiscountBanner: React.FC<DiscountBannerProps> = ({ className }) => {
  const classes = classNames(styles.container, className)

  return (
    <div className={classes}>
      <img className={styles.image} src={saleImage} alt="sale" />
      <img className={styles.brand} src={brandLogo} alt="brand" />
      <div className={styles.discount}>
        <div className={styles.time}>For a limited time</div>
        <div className={styles.content}>
          <div className={styles.title}>Save up to</div>
          <div className={styles.value}>30%</div>
          <div className={styles.subtitle}>OFF</div>
          <Button className={styles.button} size="small">
            Shop Now
          </Button>
        </div>
      </div>
      <Tip type="sale" />
    </div>
  )
}
