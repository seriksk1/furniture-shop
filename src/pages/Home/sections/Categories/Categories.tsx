import React from "react"
import classNames from "classnames"
import styles from "./Categories.module.pcss"
import { CustomSlider } from "../../../../containers"
import { CategoryCard, Typography, TypographyColors, TypographySizes } from "../../../../components"

import collection1 from "../../../../assets/images/collections/1.png"
import collection2 from "../../../../assets/images/collections/2.png"
import collection3 from "../../../../assets/images/collections/3.png"

const categoryList: CategoryList = [
  {
    name: "Sofa collection",
    productsAmount: 200,
    image: collection1,
  },
  {
    name: "Chair collection",
    productsAmount: 200,
    image: collection2,
  },
  {
    name: "Armchair collection",
    productsAmount: 200,
    image: collection3,
  },
  {
    name: "Sofa collection",
    productsAmount: 200,
    image: collection1,
  },
  {
    name: "Chair collection",
    productsAmount: 200,
    image: collection2,
  },
]

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
        {categoryList.map((category, i) => (
          <CategoryCard key={i} category={category} />
        ))}
      </CustomSlider>
    </div>
  )
}
