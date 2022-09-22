import React from "react"
import classNames from "classnames"
import styles from "./SimilarProducts.module.pcss"
import { ProductCard, Typography, TypographyColors, TypographySizes } from "../../../../components"
import { CustomSlider } from "../../../../containers"
import { similarProducts } from "../../../../mocks"
import { ChevronLeft } from "../../../../assets/icons"

interface SimilarProductsProps {
  className?: string
}

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
      <CustomSlider
        className={styles.slider}
        slidesToShow={3}
        nextArrow={<ChevronLeft />}
        prevArrow={<ChevronLeft />}
      >
        {similarProducts.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </CustomSlider>
    </div>
  )
}
