import React from "react"
import classNames from "classnames"
import styles from "./DiscountBanner.module.pcss"
import {
  Button,
  Tip,
  TipTypes,
  Typography,
  TypographyColors,
  TypographySizes,
  TypographyWeights,
} from "../../../../components"

import saleImage from "../../../../assets/images/landing/sale-image.png"
import brandLogo from "../../../../assets/images/landing/sale-brand.png"

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
        <Typography
          className={styles.time}
          size={TypographySizes.medium}
          weight={TypographyWeights.medium}
          color={TypographyColors.white}
        >
          For a limited time
        </Typography>
        <div className={styles.content}>
          <Typography className={styles.title} size={TypographySizes.medium}>
            Save up to
          </Typography>
          <Typography className={styles.value} weight={TypographyWeights.extrabold}>
            30%
          </Typography>
          <Typography
            className={styles.subtitle}
            size={TypographySizes.huge}
            weight={TypographyWeights.medium}
          >
            OFF
          </Typography>
          <Button className={styles.button}>Shop Now</Button>
        </div>
      </div>
      <Tip type={TipTypes.sale} />
    </div>
  )
}
