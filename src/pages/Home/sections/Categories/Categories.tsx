import React from "react"
import classNames from "classnames"
import styles from "./Categories.module.pcss"
import { CustomSlider } from "../../../../containers"
import { CategoryCard, Typography, TypographyColors, TypographySizes } from "../../../../components"
import { categories } from "../../../../mocks"

interface CategoriesProps {
  className?: string
}

export const Categories: React.FC<CategoriesProps> = ({ className }) => {
  const classes = classNames(styles.container, className)

  return (
    <div className={classes}>
      <Typography className={styles.title} size={TypographySizes.extraLarge}>
        Choose Categories
      </Typography>
      <Typography
        className={styles.subtitle}
        size={TypographySizes.medium}
        color={TypographyColors.gray}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <CustomSlider className={styles.slider} slidesToShow={3}>
        {categories.map((category, i) => (
          <CategoryCard key={i} category={category} />
        ))}
      </CustomSlider>
    </div>
  )
}
