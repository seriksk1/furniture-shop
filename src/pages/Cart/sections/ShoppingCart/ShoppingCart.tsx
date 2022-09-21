import React from "react"
import classNames from "classnames"
import { Link } from "react-router-dom"
import { ArrowForward } from "../../../../assets/icons"
import { Button } from "../../../../components"
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
      <div className={styles.title}>Shopping Cart</div>
      <div className={styles.list}>
        <CartProduct className={styles.product} />
        <CartProduct className={styles.product} />
      </div>
      <div className={styles.bottom}>
        <Link className={styles.back} to={appPaths.product}>
          <ArrowForward className={styles.icon} />
          <span>Back to shop</span>
        </Link>
        <div className={styles.total}>
          <div className={styles.label}>Total Price:</div>
          <div className={styles.price}>$420.00</div>
        </div>
      </div>
      <div className={styles.checkout}>
        <Button size="small" onClick={toNextStep}>
          <span>Checkout</span>
          <ArrowForward />
        </Button>
      </div>
    </div>
  )
}
