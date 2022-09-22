import React from "react"
import classNames from "classnames"
import styles from "./SimilarProducts.module.pcss"
import { ProductCard, Typography, TypographyColors, TypographySizes } from "../../../../components"
import { CustomSlider } from "../../../../containers"

import bestProduct1 from "../../../../assets/images/best-products/1.png"
import bestProduct2 from "../../../../assets/images/best-products/2.png"
import bestProduct3 from "../../../../assets/images/best-products/3.png"

interface SimilarProductsProps {
  className?: string
}

const products: ProductList = [
  {
    image: bestProduct1,
    stars: 5,
    name: "Marilee Platform Bed",
    price: "267$",
  },
  {
    image: bestProduct2,
    stars: 4,
    name: "Middlebury Standard Bed",
    price: "267$",
  },
  {
    image: bestProduct3,
    stars: 3,
    name: "Riya Low Profile Bed",
    price: "267$",
    discountPrice: "199$",
  },
  {
    image: bestProduct2,
    stars: 4,
    name: "Middlebury Standard Bed",
    price: "267$",
  },
  {
    image: bestProduct3,
    stars: 3,
    name: "Riya Low Profile Bed",
    price: "267$",
  },
]

export const SimilarProducts: React.FC<SimilarProductsProps> = ({ className }) => {
  const classes = classNames(styles.container, className)

  return (
    <div className={classes}>
      <div className={styles.content}>
        <Typography className={styles.title} size={TypographySizes.extraLarge}>
          Similar Products
        </Typography>
        <Typography
          className={styles.subtitle}
          size={TypographySizes.medium}
          color={TypographyColors.gray}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </Typography>
      </div>
      <CustomSlider className={styles.slider} slidesToShow={3}>
        {products.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </CustomSlider>
    </div>
  )
}
