import React from "react"
import styles from "./Cart.module.pcss"
import { Payment } from "./sections/Payment/Payment"
import { ShoppingCart } from "./sections/ShoppingCart/ShoppingCart"

export const Cart: React.FC = () => {
  const [paymentStep, setPaymentStep] = React.useState(false)

  const onPaymentStepToggle = () => {
    setPaymentStep((prev) => !prev)
  }

  return (
    <div className={styles.container}>
      {paymentStep ? (
        <Payment className={styles.payment} toPrevStep={onPaymentStepToggle} />
      ) : (
        <ShoppingCart className={styles.cart} toNextStep={onPaymentStepToggle} />
      )}
    </div>
  )
}
