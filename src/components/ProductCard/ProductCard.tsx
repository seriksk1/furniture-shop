import classNames from "classnames"
import React from "react"
import { Rating, Tip } from "../UI"
import styles from "./ProductCard.module.pcss"

interface ProductCardProps {
  product: Product
  tipPositionX?: "left" | "right"
  className?: string
}

export const ProductCard: React.FC<ProductCardProps> = ({ className, product, tipPositionX }) => {
  const { image, stars, name, price, discountPrice, isNew } = product

  const classes = classNames(styles.card, className)

  return (
    <div className={classes}>
      <img className={styles.image} src={image} />
      <Rating className={styles.stars} stars={stars} />
      <div className={styles.name}>{name}</div>
      <div className={styles.price}>
        {discountPrice ? <span className={styles.priceBefore}>{price}</span> : price}
        {discountPrice && <span className={styles.priceAfter}>{discountPrice}</span>}
      </div>
      {discountPrice && <Tip type="sale" positionX={tipPositionX} />}
      {isNew && <Tip type="new" positionX={tipPositionX} />}
    </div>
  )
}
