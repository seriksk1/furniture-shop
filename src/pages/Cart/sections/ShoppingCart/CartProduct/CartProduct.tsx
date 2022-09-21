import React from "react"
import classNames from "classnames"
import styles from "./CartProduct.module.pcss"
import { CloseIcon } from "../../../../../assets/icons"
import { Counter } from "../../../../../components"
import productImage from "../../../../../assets/images/best-products/1.png"

interface CartProductProps {
  className?: string
}

export const CartProduct: React.FC<CartProductProps> = ({ className }) => {
  const [amount, setAmount] = React.useState(1)
  const classes = classNames(styles.container, className)

  const onRemoveFromCart = () => {
    console.log("remove")
  }

  return (
    <div className={classes}>
      <img className={styles.image} src={productImage} alt="product image" />
      <div className={styles.name}>Pohlman Upholstered Low Profile Platform Bed</div>
      <Counter className={styles.counter} value={amount} setValue={setAmount} />
      <div className={styles.price}>$420.00</div>
      <div className={styles.close} onClick={onRemoveFromCart}>
        <CloseIcon className={styles.icon} />
      </div>
    </div>
  )
}
