import React from "react"
import classNames from "classnames"
import styles from "./CategoryList.module.pcss"
import { CloseIcon, PlusIcon } from "../../../../../assets/icons"
import {
  Button,
  ButtonColors,
  ButtonSizes,
  Typography,
  TypographySizes,
} from "../../../../../components"

interface CategoryListProps {
  className?: string
  categories: Category[]
  onCategoryCreate: () => void
  onCategoryEdit: () => void
}

interface CategoryItemProps {
  category: Category
  onCategoryEdit: () => void
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category, onCategoryEdit }) => {
  const { image, name, productsAmount } = category

  return (
    <div className={styles.category}>
      <div className={styles.info}>
        <img className={styles.image} src={image} />
        <Typography className={styles.name} size={TypographySizes.medium}>
          {name}
        </Typography>
      </div>
      <div className={styles.options}>
        <Button onClick={onCategoryEdit}>Edit</Button>
      </div>
    </div>
  )
}

export const CategoryList: React.FC<CategoryListProps> = ({
  className,
  categories,
  onCategoryCreate,
  onCategoryEdit,
}) => {
  const classes = classNames(styles.list, className)

  return (
    <div className={classes}>
      <Button className={styles.add} size={ButtonSizes.small} onClick={onCategoryCreate}>
        <PlusIcon />
        <span>Add category</span>
      </Button>
      <div className={styles.content}>
        {categories.map((category, i) => (
          <CategoryItem key={i} category={category} onCategoryEdit={onCategoryEdit} />
        ))}
      </div>
    </div>
  )
}
