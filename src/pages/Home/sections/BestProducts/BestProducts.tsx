import React from "react"
import classNames from "classnames"
import styles from "./BestProducts.module.pcss"
import { ArrowForward } from "../../../../assets/icons"
import { Button, ProductCard } from "../../../../components"
import { CustomSlider } from "../../../../containers"

import bestProduct1 from "../../../../assets/images/best-products/1.png"
import bestProduct2 from "../../../../assets/images/best-products/2.png"
import bestProduct3 from "../../../../assets/images/best-products/3.png"

interface BestProductsProps {
  className?: string
}

const products: ProductList = [
  {
    image: bestProduct1,
    stars: 5,
    name: "Marilee Platform Bed",
    price: "237$",
    isNew: true,
  },
  {
    image: bestProduct2,
    stars: 4,
    name: "Middlebury Standard Bed",
    price: "237$",
    discountPrice: "199$",
  },
  {
    image: bestProduct3,
    stars: 3,
    name: "Riya Low Profile Bed",
    price: "237$",
    isNew: true,
  },
  {
    image: bestProduct2,
    stars: 4,
    name: "Middlebury Standard Bed",
    price: "237$",
    discountPrice: "199$",
  },
  {
    image: bestProduct3,
    stars: 3,
    name: "Riya Low Profile Bed",
    price: "237$",
  },
]

export const BestProducts: React.FC<BestProductsProps> = ({ className }) => {
  const classes = classNames(styles.container, className)

  return (
    <div className={classes}>
      <div className={styles.content}>
        <div className={styles.title}>Best Selling Product</div>
        <div className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
        <Button className={styles.button} size="small">
          <span>See all</span>
          <ArrowForward />
        </Button>
      </div>
      <CustomSlider className={styles.slider} slidesToShow={3}>
        {products.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </CustomSlider>
    </div>
  )
}
