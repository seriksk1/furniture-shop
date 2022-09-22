import React from "react"
import classNames from "classnames"
import styles from "./BestProducts.module.pcss"
import { ArrowForward, ChevronLeft } from "../../../../assets/icons"
import {
  Button,
  ProductCard,
  Typography,
  TypographyColors,
  TypographySizes,
} from "../../../../components"
import { CustomSlider } from "../../../../containers"
import { bestProducts } from "../../../../mocks"
import { useMobileDevice } from "../../../../hooks"

interface BestProductsProps {
  className?: string
}

export const BestProducts: React.FC<BestProductsProps> = ({ className }) => {
  const classes = classNames(styles.container, className)
  const isMobileDevice = useMobileDevice()

  return (
    <div className={classes}>
      <div className={styles.content}>
        <Typography className={styles.title} size={TypographySizes.extraLarge}>
          Best Selling Product
        </Typography>
        <Typography
          className={styles.subtitle}
          size={TypographySizes.medium}
          color={TypographyColors.gray}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </Typography>

        <Button className={styles.button}>
          <span>See all</span>
          <ArrowForward />
        </Button>
      </div>

      <CustomSlider
        className={styles.slider}
        slidesToShow={3}
        nextArrow={<ChevronLeft />}
        prevArrow={<ChevronLeft />}
      >
        {bestProducts.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </CustomSlider>

      <div className={styles.products}>
        {bestProducts.slice(0, 3).map((product, i) => (
          <ProductCard key={i} className={styles.product} product={product} />
        ))}
      </div>

      <Button className={styles.button} fullWidth>
        <span>See all</span>
        <ArrowForward />
      </Button>
    </div>
  )
}
