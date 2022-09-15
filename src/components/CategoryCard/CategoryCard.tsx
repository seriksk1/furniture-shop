import React from "react"
import classNames from "classnames"
import styles from "./CategoryCard.module.pcss"

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
        <div className={styles.name}>{name}</div>
        <div className={styles.amount}>
          {productsAmount} {productsAmount > 1 ? "products" : "product"}
        </div>
        <div className={styles.link}>See collection</div>
      </div>
      <img className={styles.image} src={image} alt="" />
    </div>
  )
}
