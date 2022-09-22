import React from "react"
import classNames from "classnames"
import { Link } from "react-router-dom"
import { ArrowForward } from "../../../../assets/icons"
import { Button, Typography, TypographySizes, TypographyWeights } from "../../../../components"
import { appPaths } from "../../../../constants"
import { CartProduct } from "./CartProduct/CartProduct"
import styles from "./ShoppingCart.module.pcss"

interface ShoppingCartProps {
  className?: string
  toNextStep: () => void
}

export const ShoppingCart: React.FC<ShoppingCartProps> = ({ className, toNextStep }) => {
  const classes = classNames(styles.container, className)

  return (
    <div className={classes}>
      <Typography className={styles.title} size={TypographySizes.extraLarge}>
        Shopping Cart
      </Typography>
      <div className={styles.list}>
        <CartProduct className={styles.product} />
        <CartProduct className={styles.product} />
      </div>
      <div className={styles.bottom}>
        <Typography className={styles.back} size={TypographySizes.medium}>
          <Link to={appPaths.product}>
            <ArrowForward className={styles.icon} />
            <span>Back to shop</span>
          </Link>
        </Typography>
        <div className={styles.total}>
          <Typography className={styles.label} size={TypographySizes.medium}>
            Total Price:
          </Typography>
          <Typography size={TypographySizes.large} weight={TypographyWeights.medium}>
            $420.00
          </Typography>
        </div>
      </div>
      <div className={styles.checkout}>
        <Button onClick={toNextStep}>
          <span>Checkout</span>
          <ArrowForward />
        </Button>
      </div>
    </div>
  )
}
