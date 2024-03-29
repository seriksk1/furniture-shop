import React from "react"
import classNames from "classnames"
import styles from "./Categories.module.pcss"
import { CustomSlider } from "../../../../containers"
import {
  CategoryCard,
  Container,
  Typography,
  TypographyColors,
  TypographySizes,
} from "../../../../components"
import { categories } from "../../../../mocks"
import { ChevronLeft } from "../../../../assets/icons"
import { useWidthBreakpoint } from "../../../../hooks"

interface CategoriesProps {
  className?: string
}

export const Categories: React.FC<CategoriesProps> = ({ className }) => {
  const classes = classNames(styles.container, className)
  const isMobileDevice = useWidthBreakpoint(640)

  return (
    <Container className={classes}>
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

      <CustomSlider
        className={styles.slider}
        slidesToShow={isMobileDevice ? 1.05 : 3}
        arrows={isMobileDevice ? false : true}
        nextArrow={<ChevronLeft />}
        prevArrow={<ChevronLeft />}
      >
        {categories.map((category, i) => (
          <CategoryCard key={i} className={styles.category} category={category} />
        ))}
      </CustomSlider>

      <div className={styles.categories}>
        {categories.slice(0, 2).map((category, i) => (
          <CategoryCard key={i} className={styles.category} category={category} />
        ))}
      </div>
    </Container>
  )
}
