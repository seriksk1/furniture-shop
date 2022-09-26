import React from "react"
import classNames from "classnames"
import styles from "./SimilarProducts.module.pcss"
import { ProductCard, Typography, TypographyColors, TypographySizes } from "../../../../components"
import { CustomSlider } from "../../../../containers"
import { similarProducts } from "../../../../mocks"
import { ChevronLeft } from "../../../../assets/icons"
import { useMobileDevice } from "../../../../hooks"

interface SimilarProductsProps {
  className?: string
}

export const SimilarProducts: React.FC<SimilarProductsProps> = ({ className }) => {
  const classes = classNames(styles.container, className)
  const isMobileDevice = useMobileDevice(1280)

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
        slidesToShow={isMobileDevice ? 2.1 : 3}
        arrows={isMobileDevice ? false : true}
        nextArrow={<ChevronLeft />}
        prevArrow={<ChevronLeft />}
      >
        {similarProducts.map((product, i) => (
          <ProductCard key={i} className={styles.product} product={product} />
        ))}
      </CustomSlider>
    </div>
  )
}
