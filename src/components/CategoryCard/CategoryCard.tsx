import React from "react"
import classNames from "classnames"
import styles from "./CategoryCard.module.pcss"
import { Image, Typography, TypographyColors, TypographySizes, TypographyWeights } from "../UI"
import { generatePath, Link } from "react-router-dom"
import { appPaths } from "../../constants"

interface CategoryCardProps {
  className?: string
  category: Category
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ className, category }) => {
  const { name, productsAmount, image } = category

  const classes = classNames(styles.card, className)

  return (
    <div className={classes}>
      <div className={styles.info}>
        <div className={styles.top}>
          <Typography
            className={styles.name}
            size={TypographySizes.medium}
            weight={TypographyWeights.medium}
          >
            {name}
          </Typography>
          <Typography className={styles.amount} color={TypographyColors.gray}>
            {productsAmount} {productsAmount > 1 ? "products" : "product"}
          </Typography>
        </div>
        <Typography
          className={styles.link}
          weight={TypographyWeights.medium}
          color={TypographyColors.gray}
        >
          <Link to={appPaths.product.dynamic(1)}>See collection</Link>
        </Typography>
      </div>
      <Image className={styles.image} src={image} alt="" />
    </div>
  )
}
