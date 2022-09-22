import React from "react"
import classNames from "classnames"
import styles from "./NewProducts.module.pcss"
import {
  Button,
  ProductCard,
  Typography,
  TypographyColors,
  TypographySizes,
} from "../../../../components"
import { ArrowForward } from "../../../../assets/icons"

import newProduct1 from "../../../../assets/images/new-products/1.png"
import newProduct2 from "../../../../assets/images/new-products/2.png"
import newProduct3 from "../../../../assets/images/new-products/3.png"
import newProduct4 from "../../../../assets/images/new-products/4.png"
import newProduct5 from "../../../../assets/images/new-products/5.png"

interface NewProductsProps {
  className?: string
}

const products: ProductList = [
  {
    image: newProduct5,
    stars: 5,
    name: "Marilee Platform Bed",
    price: "237$",
    isNew: true,
  },
  {
    image: newProduct4,
    stars: 4,
    name: "Middlebury Standard Bed",
    price: "237$",
    isNew: true,
  },
  {
    image: newProduct3,
    stars: 3,
    name: "Riya Low Profile Bed",
    price: "237$",
    isNew: true,
  },
  {
    image: newProduct1,
    stars: 4,
    name: "Middlebury Standard Bed",
    price: "237$",
    isNew: true,
  },
  {
    image: newProduct2,
    stars: 3,
    name: "Riya Low Profile Bed",
    price: "237$",
    isNew: true,
  },
]

export const NewProducts: React.FC<NewProductsProps> = ({ className }) => {
  const classes = classNames(styles.container, className)

  return (
    <div className={classes}>
      <Typography className={styles.title} size={TypographySizes.large}>
        New Products
      </Typography>
      <Typography
        className={styles.subtitle}
        size={TypographySizes.medium}
        color={TypographyColors.gray}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <div className={styles.products}>
        {products.map((product, i) => (
          <ProductCard key={i} product={product} className={styles.card} />
        ))}
      </div>
      <Button className={styles.button}>
        <span>See all</span>
        <ArrowForward />
      </Button>
    </div>
  )
}
