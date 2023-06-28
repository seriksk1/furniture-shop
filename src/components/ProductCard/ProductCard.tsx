import React from "react"
import classNames from "classnames"
import styles from "./ProductCard.module.pcss"
import {
  Image,
  Price,
  Rating,
  Tip,
  TipPositionX,
  TipTypes,
  Typography,
  TypographySizes,
  TypographyWeights,
} from "../UI"

interface ProductCardProps {
  product: Product
  tipPositionX?: TipPositionX
  className?: string
}

export const ProductCard: React.FC<ProductCardProps> = ({ className, product, tipPositionX }) => {
  const { image, stars, name, price, discountPrice, isNew } = product

  const classes = classNames(styles.card, className)

  return (
    <div className={classes}>
      <Image className={styles.image} src={image} />
      <Rating className={styles.stars} stars={stars} />
      <Typography className={styles.name} size={TypographySizes.medium}>
        {name}
      </Typography>
      <Price
        className={styles.price}
        size={TypographySizes.medium}
        weight={TypographyWeights.semibold}
        discountPrice={discountPrice}
        price={price}
      />
      {discountPrice && <Tip type={TipTypes.sale} positionX={tipPositionX} />}
      {isNew && <Tip type={TipTypes.new} positionX={tipPositionX} />}
    </div>
  )
}
