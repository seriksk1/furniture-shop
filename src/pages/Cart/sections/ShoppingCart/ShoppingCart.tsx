import React from "react"
import classNames from "classnames"
import styles from "./ShoppingCart.module.pcss"
import { generatePath, Link } from "react-router-dom"
import { ArrowForward } from "../../../../assets/icons"
import {
  Button,
  Container,
  Price,
  Typography,
  TypographyColors,
  TypographySizes,
  TypographyWeights,
} from "../../../../components"
import { appPaths } from "../../../../constants"
import { CartProduct } from "./CartProduct/CartProduct"
import { useSelector } from "react-redux"
import { selectCart } from "../../../../store"

interface ShoppingCartProps {
  className?: string
  toNextStep: () => void
}

export const ShoppingCart: React.FC<ShoppingCartProps> = ({ className, toNextStep }) => {
  const classes = classNames(styles.container, className)
  const { list: cartItems } = useSelector(selectCart)
  const isCartEmpty = !cartItems.length

  const totalPrice = React.useMemo(
    () => cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cartItems]
  )

  return (
    <Container className={classes}>
      <Typography className={styles.title} size={TypographySizes.extraLarge}>
        Shopping Cart
      </Typography>

      <div className={styles.list}>
        {isCartEmpty ? (
          <Typography
            className={styles.empty}
            size={TypographySizes.large}
            color={TypographyColors.gray}
          >
            Cart is empty
          </Typography>
        ) : (
          cartItems.map((item) => (
            <CartProduct key={item.id} className={styles.product} cartItem={item} />
          ))
        )}
      </div>

      <div className={styles.bottom}>
        <Typography className={styles.back} size={TypographySizes.medium}>
          <Link to={appPaths.product.dynamic(1)}>
            <ArrowForward className={styles.icon} />
            <span>Back to shop</span>
          </Link>
        </Typography>

        <div className={styles.checkout}>
          <div className={styles.total}>
            <Typography className={styles.label} size={TypographySizes.medium}>
              Total Price:
            </Typography>
            <Price
              size={TypographySizes.large}
              weight={TypographyWeights.medium}
              price={totalPrice}
            />
          </div>
          <Button onClick={toNextStep} disabled={isCartEmpty}>
            <span>Checkout</span>
            <ArrowForward />
          </Button>
        </div>
      </div>
    </Container>
  )
}
