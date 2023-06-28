import React from "react"
import classNames from "classnames"
import styles from "./CartProduct.module.pcss"
import { CloseIcon } from "../../../../../assets/icons"
import { Counter, Image, Price, Typography, TypographySizes } from "../../../../../components"
import productImage from "../../../../../assets/images/best-products/1.png"
import { useDispatch } from "react-redux"
import { removeFromCart, setCartItemQuantity } from "../../../../../store"
import { useDidMountEffect } from "../../../../../hooks"

interface CartProductProps {
  className?: string
  cartItem: CartItem
}

export const CartProduct: React.FC<CartProductProps> = ({ className, cartItem }) => {
  const dispatch = useDispatch()
  const { id, name, price, image, quantity } = cartItem
  const [amount, setAmount] = React.useState(quantity)
  const classes = classNames(styles.container, className)

  const onRemoveFromCart = () => {
    dispatch(removeFromCart(id))
  }

  useDidMountEffect(() => {
    dispatch(setCartItemQuantity({ id, quantity: amount }))
  }, [amount])

  return (
    <div className={classes}>
      <Image className={styles.image} src={image} alt="product image" />
      <div className={styles.info}>
        <Typography className={styles.name} size={TypographySizes.medium}>
          {name}
        </Typography>
        <Counter className={styles.counter} value={amount} setValue={setAmount} />
        <Price className={styles.price} size={TypographySizes.medium} price={price * amount} />
      </div>
      <div className={styles.close} onClick={onRemoveFromCart}>
        <CloseIcon className={styles.icon} />
      </div>
    </div>
  )
}
