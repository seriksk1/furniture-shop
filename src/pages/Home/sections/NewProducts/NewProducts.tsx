import React from "react"
import classNames from "classnames"
import styles from "./NewProducts.module.pcss"
import {
  Button,
  Container,
  ProductCard,
  Typography,
  TypographyColors,
  TypographySizes,
} from "../../../../components"
import { newProducts } from "../../../../mocks"
import { ArrowForward } from "../../../../assets/icons"

interface NewProductsProps {
  className?: string
}

export const NewProducts: React.FC<NewProductsProps> = ({ className }) => {
  const classes = classNames(styles.container, className)

  return (
    <Container className={classes}>
      <Typography className={styles.title} size={TypographySizes.extraLarge}>
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
        {newProducts.map((product, i) => (
          <ProductCard key={i} className={styles.card} product={product} />
        ))}
      </div>
      <Button className={styles.button}>
        <span>See all</span>
        <ArrowForward />
      </Button>
    </Container>
  )
}
