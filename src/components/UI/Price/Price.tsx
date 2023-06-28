import React from "react"
import classNames from "classnames"
import styles from "./Price.module.pcss"
import { Typography, TypographyProps } from "../Typography/Typography"
import { DEFAULT_CURRENCY } from "../../../constants"
import { Currencies } from "./enums"

export * from "./enums"

interface PriceProps extends TypographyProps {
  price: number
  discountPrice?: number
  currency?: Currencies
  precision?: number
}

export const Price: React.FC<PriceProps & React.PropsWithChildren> = ({
  className,
  discountPrice,
  currency = DEFAULT_CURRENCY,
  precision = 2,
  price,
  ...props
}) => {
  const classes = classNames(className, styles.price)

  console.log(currency)

  return (
    <Typography className={classes} {...props}>
      {discountPrice ? (
        <>
          <span className={styles.previous}>
            {currency}
            {price}
          </span>
          <span className={styles.discount}>
            {currency}
            {discountPrice}
          </span>
        </>
      ) : (
        `${currency}${price.toFixed(precision)}`
      )}
    </Typography>
  )
}
