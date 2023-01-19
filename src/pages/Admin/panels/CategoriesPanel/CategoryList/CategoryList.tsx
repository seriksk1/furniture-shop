import React from "react"
import classNames from "classnames"
import styles from "./CategoryList.module.pcss"
import { CloseIcon, PlusIcon } from "../../../../../assets/icons"
import { Button, ButtonColors, ButtonSizes, Typography } from "../../../../../components"

interface CategoryListProps {
  className?: string
  categories: Category[]
}

export const CategoryList: React.FC<CategoryListProps> = ({ className, categories }) => {
  const classes = classNames(styles.list, className)

  const renderCategoryItem = (category: Category, i: number) => {
    const { image, name, productsAmount } = category

    return (
      <div key={i} className={styles.item}>
        <div className={styles.info}>
          <img className={styles.image} src={image} />
          <Typography className={styles.name}>{name}</Typography>
          <Typography className={styles.amount}>{productsAmount} products</Typography>
        </div>
        <div className={styles.options}>
          <Typography className={styles.edit}>Edit...</Typography>
          <CloseIcon className={styles.delete} />
        </div>
      </div>
    )
  }

  return (
    <div className={classes}>
      {categories.map(renderCategoryItem)}
      <Button className={styles.add} size={ButtonSizes.small}>
        <PlusIcon />
        <span>Add category</span>
      </Button>
    </div>
  )
}
